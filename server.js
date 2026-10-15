const express = require('express');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const QRCode = require('qrcode');

const app = express();
const PORT = process.env.PORT || 3000;
const APP_SECRET = process.env.APP_SECRET || 'swarnkar-garba-mahotsav-2026';
const ADMIN_PASSWORD = 'ADMIN';
const ADMIN_TOKEN = 'swarnkar-garba-admin-token';

const ROOT_DIR = __dirname;
const DATA_DIR = path.join(ROOT_DIR, 'data');
const UPLOAD_DIR = path.join(ROOT_DIR, 'uploads');
const TICKETS_FILE = path.join(DATA_DIR, 'tickets.json');
const ENTRY_LOGS_FILE = path.join(DATA_DIR, 'entryLogs.json');

function ensureDirectory(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function ensureDataFiles() {
  ensureDirectory(DATA_DIR);
  ensureDirectory(UPLOAD_DIR);

  if (!fs.existsSync(TICKETS_FILE)) {
    fs.writeFileSync(TICKETS_FILE, '[]', 'utf8');
  }

  if (!fs.existsSync(ENTRY_LOGS_FILE)) {
    fs.writeFileSync(ENTRY_LOGS_FILE, '[]', 'utf8');
  }
}

function readJson(filePath, fallback = []) {
  try {
    const contents = fs.readFileSync(filePath, 'utf8');
    return contents ? JSON.parse(contents) : fallback;
  } catch (error) {
    return fallback;
  }
}

function writeJson(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}

function base64UrlEncode(value) {
  return Buffer.from(value)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/g, '');
}

function base64UrlDecode(value) {
  const normalized = value.replace(/-/g, '+').replace(/_/g, '/');
  const pad = normalized.length % 4 === 0 ? '' : '='.repeat(4 - (normalized.length % 4));
  return Buffer.from(normalized + pad, 'base64').toString('utf8');
}

function createSignature(payload) {
  const raw = typeof payload === 'string' ? payload : JSON.stringify(payload);
  return crypto
    .createHmac('sha256', APP_SECRET)
    .update(raw)
    .digest('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/g, '');
}

function createQrPayload(ticket) {
  const payload = {
    id: ticket.id,
    code: ticket.code,
    name: ticket.name,
    mobile: ticket.mobile,
    utr: ticket.utr,
    amount: ticket.amount,
    allowedEntries: ticket.allowedEntries,
    status: ticket.status,
    active: ticket.active,
    createdAt: ticket.createdAt
  };

  const payloadPart = base64UrlEncode(JSON.stringify(payload));
  const signature = createSignature(payload);
  return `${payloadPart}.${signature}`;
}

function verifyQrPayload(qrData) {
  if (!qrData || !qrData.includes('.')) {
    throw new Error('Invalid QR code');
  }

  const [payloadPart, signatureFromQr] = qrData.split('.');
  if (!payloadPart || !signatureFromQr) {
    throw new Error('Invalid QR code');
  }

  const payload = JSON.parse(base64UrlDecode(payloadPart));
  const expectedSignature = createSignature(payload);

  if (expectedSignature !== signatureFromQr) {
    throw new Error('QR code has been tampered with or is invalid.');
  }

  return payload;
}

ensureDataFiles();

let tickets = readJson(TICKETS_FILE, []);
let entryLogs = readJson(ENTRY_LOGS_FILE, []);

function saveTickets() {
  writeJson(TICKETS_FILE, tickets);
}

function saveEntryLogs() {
  writeJson(ENTRY_LOGS_FILE, entryLogs);
}

const fileUpload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => cb(null, UPLOAD_DIR),
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname) || '.png';
      cb(null, `${Date.now()}-${uuidv4()}${ext}`);
    }
  }),
  limits: {
    fileSize: 5 * 1024 * 1024
  },
  fileFilter: (req, file, cb) => {
    const allowed = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];
    if (allowed.includes(file.mimetype)) {
      cb(null, true);
      return;
    }
    cb(new Error('Only JPG, PNG, and WEBP files are allowed.'));
  }
});

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(UPLOAD_DIR));
app.use(express.static(path.join(ROOT_DIR, 'public')));

function requireAdminToken(req, res, next) {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : '';

  if (token !== ADMIN_TOKEN) {
    return res.status(401).json({ success: false, message: 'Unauthorized admin access.' });
  }

  return next();
}

app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Swarnkar Garba Mahotsav API is running.' });
});

app.post('/api/admin/login', (req, res) => {
  const providedPassword = String(req.body.password || '').trim();

  if (providedPassword === ADMIN_PASSWORD) {
    return res.json({ success: true, token: ADMIN_TOKEN });
  }

  return res.status(401).json({ success: false, message: 'Incorrect admin password.' });
});

app.get('/api/admin/tickets', requireAdminToken, (req, res) => {
  const sortedTickets = [...tickets].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  return res.json({ success: true, tickets: sortedTickets });
});

app.post('/api/admin/tickets/:id/approve', requireAdminToken, async (req, res) => {
  const ticket = tickets.find((item) => item.id === req.params.id);

  if (!ticket) {
    return res.status(404).json({ success: false, message: 'Ticket not found.' });
  }

  ticket.status = 'approved';
  ticket.active = true;
  ticket.approvedAt = new Date().toISOString();
  ticket.updatedAt = new Date().toISOString();
  ticket.qrData = createQrPayload(ticket);
  ticket.qrImage = await QRCode.toDataURL(ticket.qrData, { margin: 1, width: 300, color: { dark: '#1d0c2d', light: '#fffaf6' } });

  saveTickets();
  return res.json({ success: true, ticket });
});

app.post('/api/admin/tickets/:id/reject', requireAdminToken, (req, res) => {
  const ticket = tickets.find((item) => item.id === req.params.id);

  if (!ticket) {
    return res.status(404).json({ success: false, message: 'Ticket not found.' });
  }

  ticket.status = 'rejected';
  ticket.active = false;
  ticket.updatedAt = new Date().toISOString();
  ticket.qrData = createQrPayload(ticket);

  saveTickets();
  return res.json({ success: true, ticket });
});

app.get('/api/tickets/retrieve', (req, res) => {
  const utr = String(req.query.utr || '').trim();

  if (!utr) {
    return res.status(400).json({ success: false, message: 'UTR number is required.' });
  }

  const matches = tickets.filter((ticket) => ticket.utr.toLowerCase() === utr.toLowerCase());
  return res.json({ success: true, tickets: matches });
});

app.post('/api/tickets', fileUpload.single('screenshot'), async (req, res) => {
  try {
    const name = String(req.body.name || '').trim();
    const mobile = String(req.body.mobile || '').trim();
    const utr = String(req.body.utr || '').trim();

    if (!name || !mobile || !utr || !req.file) {
      return res.status(400).json({ success: false, message: 'Name, mobile, UTR, and screenshot are required.' });
    }

    const safeMobile = mobile.replace(/\D/g, '');
    const safeUtr = utr.toUpperCase();

    const ticketId = uuidv4();
    const ticketCode = `SGM-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
    const createdAt = new Date().toISOString();

    const ticket = {
      id: ticketId,
      code: ticketCode,
      name,
      mobile: safeMobile,
      utr: safeUtr,
      amount: 200,
      status: 'pending',
      active: false,
      allowedEntries: 4,
      usedEntries: 0,
      remainingEntries: 4,
      screenshotUrl: `/uploads/${req.file.filename}`,
      createdAt,
      approvedAt: null,
      updatedAt: createdAt,
      qrData: '',
      qrImage: ''
    };

    ticket.qrData = createQrPayload(ticket);
    ticket.qrImage = await QRCode.toDataURL(ticket.qrData, { margin: 1, width: 300, color: { dark: '#1d0c2d', light: '#fffaf6' } });

    tickets.push(ticket);
    saveTickets();

    return res.json({
      success: true,
      message: 'Ticket submitted successfully. Please wait for admin approval.',
      ticket
    });
  } catch (error) {
    console.error('Booking error:', error);
    return res.status(500).json({ success: false, message: 'Unable to process booking. Please try again.' });
  }
});

app.post('/api/gate/scan', async (req, res) => {
  try {
    const gatePassword = String(req.headers['x-gate-password'] || '').trim();
    const qrData = String(req.body.qrData || '').trim();
    const requestedCount = Number(req.body.entryCount || 1);

    if (gatePassword !== ADMIN_PASSWORD) {
      return res.status(403).json({ success: false, message: 'Gate password is incorrect.' });
    }

    if (!qrData) {
      return res.status(400).json({ success: false, message: 'QR value is missing.' });
    }

    if (!Number.isInteger(requestedCount) || requestedCount < 1 || requestedCount > 4) {
      return res.status(400).json({ success: false, message: 'Entry count must be between 1 and 4.' });
    }

    const validated = verifyQrPayload(qrData);
    const ticket = tickets.find((item) => item.id === validated.id || item.code === validated.code);

    if (!ticket) {
      return res.status(404).json({ success: false, message: 'Ticket not found in the system.' });
    }

    if (ticket.status !== 'approved' || !ticket.active) {
      return res.status(401).json({ success: false, message: 'QR code is inactive. Please wait for approval.' });
    }

    const remainingBeforeEntry = ticket.allowedEntries - ticket.usedEntries;

    if (requestedCount > remainingBeforeEntry) {
      return res.status(409).json({
        success: false,
        message: `Only ${remainingBeforeEntry} entries remaining for this QR code.`
      });
    }

    ticket.usedEntries += requestedCount;
    ticket.remainingEntries = ticket.allowedEntries - ticket.usedEntries;
    ticket.updatedAt = new Date().toISOString();
    ticket.qrData = createQrPayload(ticket);
    ticket.qrImage = await QRCode.toDataURL(ticket.qrData, { margin: 1, width: 300, color: { dark: '#1d0c2d', light: '#fffaf6' } });

    entryLogs.unshift({
      id: uuidv4(),
      ticketId: ticket.id,
      ticketCode: ticket.code,
      name: ticket.name,
      mobile: ticket.mobile,
      entryCount: requestedCount,
      scannedAt: new Date().toISOString(),
      gatePasswordUsed: ADMIN_PASSWORD
    });

    saveTickets();
    saveEntryLogs();

    return res.json({
      success: true,
      message: `Entry confirmed for ${requestedCount} member(s).`,
      ticket,
      remainingEntries: ticket.remainingEntries,
      requestedCount
    });
  } catch (error) {
    console.error('Gate scan error:', error);
    return res.status(400).json({ success: false, message: error.message || 'QR validation failed.' });
  }
});

app.get('/api/entry-logs', requireAdminToken, (req, res) => {
  return res.json({ success: true, logs: entryLogs });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(ROOT_DIR, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Swarnkar Garba Mahotsav website running on http://localhost:${PORT}`);
});
