const styles = `
  :root {
    --bg-dark: #140d1d;
    --bg-deep: #1a0f2a;
    --panel: rgba(32, 17, 43, 0.9);
    --panel-alt: rgba(58, 29, 74, 0.92);
    --gold: #f7d77b;
    --gold-strong: #ffba42;
    --pink: #ff5d9e;
    --purple: #ae66ff;
    --red: #ff4f61;
    --text: #fdf6f0;
    --muted: #d9cbd8;
    --success: #2dd4a5;
    --danger: #ff6a7c;
    --shadow: 0 20px 45px rgba(14, 8, 20, 0.5);
  }

  * { box-sizing: border-box; }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background:
      radial-gradient(circle at top, rgba(255, 117, 151, 0.2), transparent 20%),
      linear-gradient(135deg, #1f102d 0%, #180c21 35%, #0d0a13 100%);
    color: var(--text);
  }

  body::before {
    content: "";
    position: fixed;
    inset: 0;
    background-image: url('https://images.unsplash.com/photo-1516280440614-3765d8e5a4d5?auto=format&fit=crop&w=1400&q=80');
    background-size: cover;
    background-position: center;
    opacity: 0.18;
    z-index: -2;
  }

  a {
    color: var(--gold);
    text-decoration: none;
  }

  .page-shell {
    width: min(1200px, calc(100% - 32px));
    margin: 0 auto;
    padding-bottom: 40px;
  }

  .topbar {
    position: sticky;
    top: 0;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 0;
    backdrop-filter: blur(16px);
    background: rgba(19, 13, 24, 0.65);
    border-bottom: 1px solid rgba(247, 215, 123, 0.22);
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 12px;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .brand-mark {
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--gold), var(--pink));
    box-shadow: 0 8px 18px rgba(255, 140, 170, 0.4);
    color: #170d1f;
    font-size: 1.3rem;
  }

  .nav {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  .nav a {
    padding: 10px 14px;
    border: 1px solid rgba(247, 215, 123, 0.25);
    border-radius: 999px;
    color: var(--text);
    background: rgba(255, 255, 255, 0.02);
    transition: 0.2s ease;
  }

  .nav a:hover {
    background: rgba(255, 186, 66, 0.12);
    border-color: rgba(247, 215, 123, 0.75);
  }

  .hero {
    padding: 52px 0 18px;
  }

  .hero-panel {
    position: relative;
    overflow: hidden;
    border-radius: 30px;
    min-height: 430px;
    border: 1px solid rgba(255, 194, 102, 0.35);
    box-shadow: var(--shadow);
    background: linear-gradient(135deg, rgba(15, 7, 16, 0.7), rgba(44, 17, 58, 0.8)),
      url('https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1400&q=80') center/cover no-repeat;
    display: flex;
    align-items: end;
  }

  .hero-content {
    width: min(700px, 100%);
    padding: 58px 42px;
  }

  .eyebrow {
    display: inline-block;
    padding: 8px 14px;
    border-radius: 999px;
    background: rgba(255, 186, 66, 0.12);
    border: 1px solid rgba(247, 215, 123, 0.4);
    color: var(--gold);
    font-size: 0.8rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  h1 {
    margin: 18px 0 12px;
    font-size: clamp(2.2rem, 5vw, 4.2rem);
    line-height: 1.06;
  }

  .lead {
    max-width: 620px;
    color: var(--muted);
    font-size: 1.08rem;
    line-height: 1.7;
  }

  .info-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 26px;
  }

  .pill {
    border-radius: 999px;
    padding: 10px 16px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: var(--text);
    font-weight: 600;
  }

  .page-grid {
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 22px;
    margin-top: 22px;
  }

  .panel {
    background: linear-gradient(180deg, rgba(32, 17, 43, 0.9), rgba(19, 12, 25, 0.95));
    border: 1px solid rgba(255, 194, 102, 0.18);
    border-radius: 24px;
    box-shadow: var(--shadow);
    padding: 22px;
  }

  .panel h2 {
    margin-top: 0;
    margin-bottom: 18px;
    font-size: 1.8rem;
  }

  .form-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .field.full {
    grid-column: 1 / -1;
  }

  label {
    color: var(--gold);
    font-weight: 700;
    letter-spacing: 0.03em;
  }

  input, select, textarea, button {
    font: inherit;
  }

  input, select, textarea {
    width: 100%;
    border: 1px solid rgba(255, 194, 102, 0.25);
    background: rgba(17, 11, 22, 0.8);
    color: var(--text);
    border-radius: 14px;
    padding: 13px 14px;
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }

  input:focus, select:focus, textarea:focus {
    border-color: rgba(247, 215, 123, 0.82);
    box-shadow: 0 0 0 4px rgba(247, 215, 123, 0.12);
  }

  textarea {
    resize: vertical;
    min-height: 120px;
  }

  button {
    cursor: pointer;
    border: none;
    border-radius: 14px;
    padding: 14px 18px;
    font-weight: 800;
    transition: transform 0.15s ease, box-shadow 0.2s ease;
  }

  button:hover {
    transform: translateY(-1px);
  }

  .primary-btn {
    background: linear-gradient(135deg, var(--gold), var(--pink));
    color: #1b0a17;
    box-shadow: 0 14px 28px rgba(255, 106, 124, 0.28);
  }

  .secondary-btn {
    background: rgba(255, 255, 255, 0.05);
    color: var(--text);
    border: 1px solid rgba(255, 255, 255, 0.12);
  }

  .danger-btn {
    background: linear-gradient(135deg, var(--red), #ff8a5a);
    color: white;
  }

  .form-note {
    margin-top: 12px;
    color: var(--muted);
    font-size: 0.95rem;
  }

  .ticket-box,
  .status-box,
  .scan-result {
    margin-top: 18px;
    padding: 14px 16px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.12);
    color: var(--text);
  }

  .status-ok {
    border-color: rgba(45, 212, 165, 0.6);
    background: rgba(45, 212, 165, 0.08);
    color: #d4fff2;
  }

  .status-bad {
    border-color: rgba(255, 106, 124, 0.6);
    background: rgba(255, 106, 124, 0.08);
    color: #ffdfe5;
  }

  .ticket-card {
    display: grid;
    gap: 14px;
    padding: 18px;
    border-radius: 18px;
    background: linear-gradient(135deg, rgba(255, 198, 91, 0.08), rgba(255, 93, 158, 0.08));
    border: 1px solid rgba(255, 196, 109, 0.2);
  }

  .ticket-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  .ticket-badge {
    display: inline-block;
    border-radius: 999px;
    background: rgba(255, 186, 66, 0.14);
    border: 1px solid rgba(255, 186, 66, 0.55);
    color: var(--gold);
    padding: 6px 12px;
    font-size: 0.8rem;
    font-weight: 700;
  }

  .ticket-code {
    font-size: 1.1rem;
    font-weight: 800;
    letter-spacing: 0.08em;
  }

  .ticket-summary {
    color: var(--muted);
    line-height: 1.7;
  }

  .qr-wrap {
    display: grid;
    place-items: center;
    margin-top: 6px;
  }

  .qr-wrap img {
    width: min(220px, 70vw);
    background: white;
    border-radius: 18px;
    padding: 10px;
  }

  .ticket-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .admin-login,
  .scanner-lock {
    display: flex;
    gap: 10px;
    align-items: center;
    flex-wrap: wrap;
  }

  .admin-list {
    display: grid;
    gap: 12px;
    margin-top: 18px;
  }

  .admin-ticket {
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 14px;
    background: rgba(255, 255, 255, 0.03);
  }

  .admin-ticket-row {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    flex-wrap: wrap;
  }

  .status-tag {
    display: inline-flex;
    align-items: center;
    border-radius: 999px;
    padding: 7px 10px;
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .status-pending {
    background: rgba(255, 186, 66, 0.12);
    color: var(--gold);
    border: 1px solid rgba(255, 186, 66, 0.5);
  }

  .status-approved {
    background: rgba(45, 212, 165, 0.12);
    color: #d5fff2;
    border: 1px solid rgba(45, 212, 165, 0.45);
  }

  .status-rejected {
    background: rgba(255, 106, 124, 0.12);
    color: #ffdfe5;
    border: 1px solid rgba(255, 106, 124, 0.45);
  }

  .admin-actions {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-top: 12px;
  }

  .scanner-box {
    margin-top: 18px;
  }

  #reader {
    width: 100%;
    min-height: 260px;
    border-radius: 18px;
    overflow: hidden;
    border: 1px solid rgba(255, 194, 102, 0.24);
    background: rgba(5, 4, 8, 0.52);
  }

  .hidden {
    display: none !important;
  }

  .support-box {
    display: grid;
    gap: 8px;
    color: var(--muted);
    line-height: 1.7;
  }

  .support-box strong {
    color: var(--text);
  }

  footer {
    padding: 30px 0 10px;
    color: rgba(255,255,255,0.7);
    text-align: center;
  }

  @media (max-width: 900px) {
    .page-grid {
      grid-template-columns: 1fr;
    }

    .topbar {
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
    }
  }

  @media (max-width: 620px) {
    .form-grid {
      grid-template-columns: 1fr;
    }

    .hero-content {
      padding: 34px 18px;
    }

    .nav {
      width: 100%;
    }

    .nav a {
      flex: 1 1 calc(50% - 12px);
      text-align: center;
    }
  }
`;

const html = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Swarnkar Garba Mahotsav 2026 event booking, QR passes, admin approval, and gate scanner." />
      <title>Swarnkar Garba Mahotsav 2026</title>
      <style>${styles}</style>
    </head>
    <body>
      <div class="page-shell">
        <header class="topbar">
          <div class="brand">
            <div class="brand-mark">ॐ</div>
            <span>Garba 2026</span>
          </div>
          <nav class="nav" aria-label="Main navigation">
            <a href="#booking">Book Ticket</a>
            <a href="#retrieve">Retrieve</a>
            <a href="#admin">Admin</a>
            <a href="#scanner">Scanner</a>
            <a href="#help">Support</a>
          </nav>
        </header>

        <main>
          <section class="hero">
            <div class="hero-panel">
              <div class="hero-content">
                <span class="eyebrow">Swarnkar Garba Mahotsav 2026</span>
                <h1>Book your celebration, secure your QR pass.</h1>
                <p class="lead">
                  Pay ₹200, upload your UTR proof, get approved by admin, and receive a valid ticket QR code that allows up to 4 members per scan.
                </p>
                <div class="info-pills">
                  <span class="pill">₹200 per ticket</span>
                  <span class="pill">Up to 4 members</span>
                  <span class="pill">QR active after approval</span>
                </div>
              </div>
            </div>
          </section>

          <section class="page-grid">
            <div class="panel" id="booking">
              <h2>Book Your Pass</h2>
              <form id="bookingForm" enctype="multipart/form-data">
                <div class="form-grid">
                  <div class="field">
                    <label for="name">Enter Name</label>
                    <input id="name" name="name" type="text" placeholder="Enter full name" required />
                  </div>

                  <div class="field">
                    <label for="mobile">Mobile Number</label>
                    <input id="mobile" name="mobile" type="tel" placeholder="Enter mobile number" required />
                  </div>

                  <div class="field full">
                    <label for="utr">UTR Number</label>
                    <input id="utr" name="utr" type="text" placeholder="Enter UTR number" required />
                  </div>

                  <div class="field full">
                    <label for="screenshot">Payment Screenshot</label>
                    <input id="screenshot" name="screenshot" type="file" accept="image/*" required />
                  </div>
                </div>

                <div class="form-note">Amount: ₹200. Payment approval and QR activation are done by admin after verification.</div>
                <div class="ticket-actions" style="margin-top: 20px;">
                  <button type="submit" class="primary-btn">Pay ₹200 &amp; Book</button>
                </div>
              </form>

              <div id="bookingResult" class="status-box hidden"></div>
            </div>

            <div class="panel" id="retrieve">
              <h2>Retrieve Ticket</h2>
              <form id="retrieveForm">
                <div class="field">
                  <label for="retrieveUtr">Enter UTR Number</label>
                  <input id="retrieveUtr" name="utr" type="text" placeholder="Enter your UTR number" required />
                </div>
                <div class="ticket-actions" style="margin-top: 14px;">
                  <button type="submit" class="secondary-btn">Retrieve My Ticket</button>
                </div>
              </form>
              <div id="retrieveResult" class="status-box hidden"></div>
            </div>
          </section>

          <section class="page-grid">
            <div class="panel" id="admin">
              <h2>Admin Panel</h2>
              <div id="adminLoginSection">
                <div class="admin-login">
                  <input id="adminPassword" type="password" placeholder="Enter admin password" />
                  <button id="adminLoginBtn" class="primary-btn">Login</button>
                </div>
              </div>

              <div id="adminDashboard" class="hidden">
                <div class="ticket-actions" style="margin-bottom: 12px;">
                  <button id="refreshAdminBtn" class="secondary-btn">Refresh Records</button>
                </div>
                <div id="adminTicketList" class="admin-list"></div>
              </div>
            </div>

            <div class="panel" id="scanner">
              <h2>Gate Scanner</h2>
              <div id="scannerLockSection">
                <div class="scanner-lock">
                  <input id="gatePassword" type="password" placeholder="Enter gate password" />
                  <button id="gateAccessBtn" class="secondary-btn">Unlock Scanner</button>
                </div>
              </div>

              <div id="scannerSection" class="scanner-box hidden">
                <div id="reader"></div>
                <div class="field" style="margin-top: 16px;">
                  <label for="entryCount">Number of Members</label>
                  <select id="entryCount">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
                <div class="ticket-actions" style="margin-top: 12px;">
                  <button id="manualScanBtn" class="primary-btn">Validate QR</button>
                </div>
                <textarea id="manualQrInput" placeholder="Paste QR code here if camera scan fails" style="margin-top: 12px;"></textarea>
                <div id="scanResult" class="scan-result hidden"></div>
              </div>
            </div>
          </section>

          <section class="panel" id="help" style="margin-top: 22px;">
            <h2>Help &amp; Support</h2>
            <div class="support-box">
              <div><strong>Contact:</strong> Deepak Soni</div>
              <div><strong>Mobile:</strong> <a href="tel:+918385963066">8385963066</a></div>
              <div><strong>Address:</strong> Moti Chowk, Jodhpur</div>
            </div>
          </section>

          <section class="panel" style="margin-top: 22px;">
            <h2>Ticket Preview</h2>
            <div id="ticketPreview"></div>
          </section>
        </main>

        <footer>
          Swarnkar Garba Mahotsav 2026 • Garba theme digital booking portal
        </footer>
      </div>

      <script src="https://unpkg.com/html5-qrcode@2.3.8/minified/html5-qrcode.min.js"></script>
      <script src="/app.js"></script>
    </body>
  </html>
`;

const appJs = `
const state = {
  adminToken: localStorage.getItem('adminToken') || '',
  scannedTicket: null,
  gateScanner: null
};

const bookingForm = document.getElementById('bookingForm');
const bookingResult = document.getElementById('bookingResult');
const retrieveForm = document.getElementById('retrieveForm');
const retrieveResult = document.getElementById('retrieveResult');
const adminPasswordInput = document.getElementById('adminPassword');
const adminLoginBtn = document.getElementById('adminLoginBtn');
const adminDashboard = document.getElementById('adminDashboard');
const adminTicketList = document.getElementById('adminTicketList');
const adminLoginSection = document.getElementById('adminLoginSection');
const refreshAdminBtn = document.getElementById('refreshAdminBtn');
const gatePasswordInput = document.getElementById('gatePassword');
const gateAccessBtn = document.getElementById('gateAccessBtn');
const scannerSection = document.getElementById('scannerSection');
const scanResult = document.getElementById('scanResult');
const manualQrInput = document.getElementById('manualQrInput');
const manualScanBtn = document.getElementById('manualScanBtn');
const entryCountSelect = document.getElementById('entryCount');
const ticketPreview = document.getElementById('ticketPreview');

function setStatusElement(element, message, type = 'ok') {
  element.classList.remove('hidden');
  element.classList.remove('status-ok', 'status-bad');
  element.classList.add(type === 'ok' ? 'status-ok' : 'status-bad');
  element.innerHTML = message;
}

function renderTicketCard(ticket) {
  state.scannedTicket = ticket;
  ticketPreview.innerHTML = `
    <div class="ticket-card">
      <div class="ticket-header">
        <span class="ticket-badge">${ticket.status.toUpperCase()}</span>
        <span class="ticket-code">${ticket.code}</span>
      </div>
      <div class="ticket-summary">
        <strong>Name:</strong> ${ticket.name}<br />
        <strong>Mobile:</strong> ${ticket.mobile}<br />
        <strong>UTR:</strong> ${ticket.utr}<br />
        <strong>Members Allowed:</strong> ${ticket.allowedEntries}<br />
        <strong>Status:</strong> ${ticket.status === 'approved' ? 'Active & Verified' : 'Pending Approval'}
      </div>
      <div class="qr-wrap">
        <img src="${ticket.qrImage}" alt="QR code for ${ticket.code}" />
      </div>
      <div class="ticket-actions">
        <button class="primary-btn" data-action="download-ticket">Download Ticket</button>
        <button class="secondary-btn" data-action="print-ticket">Print Ticket</button>
      </div>
    </div>
  `;
}

function downloadTicketImage(ticket) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 900;
  canvas.height = 1200;

  const bg = ctx.createLinearGradient(0, 0, 900, 1200);
  bg.addColorStop(0, '#140d1d');
  bg.addColorStop(1, '#2e1237');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#f7d77b';
  ctx.font = 'bold 42px Segoe UI';
  ctx.fillText('Swarnkar Garba Mahotsav 2026', 80, 110);

  ctx.fillStyle = '#ffffff';
  ctx.font = '28px Segoe UI';
  ctx.fillText(`Name: ${ticket.name}`, 80, 220);
  ctx.fillText(`Mobile: ${ticket.mobile}`, 80, 280);
  ctx.fillText(`UTR: ${ticket.utr}`, 80, 340);
  ctx.fillText(`Ticket: ${ticket.code}`, 80, 400);
  ctx.fillText(`Valid For: 1 - ${ticket.allowedEntries} Members`, 80, 460);
  ctx.fillText(`Status: ${ticket.status === 'approved' ? 'Approved' : 'Pending'}`, 80, 520);

  const qrImage = new Image();
  qrImage.onload = () => {
    const qrSize = 300;
    const x = 300;
    const y = 610;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(x - 18, y - 18, qrSize + 36, qrSize + 36);
    ctx.drawImage(qrImage, x, y, qrSize, qrSize);

    ctx.fillStyle = '#f7d77b';
    ctx.font = 'bold 22px Segoe UI';
    ctx.fillText('Scan at gate to validate entry', 220, 1020);

    const link = document.createElement('a');
    link.download = `${ticket.code}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };
  qrImage.src = ticket.qrImage;
}

function renderAdminTickets(tickets) {
  if (!tickets || tickets.length === 0) {
    adminTicketList.innerHTML = '<div class="status-box">No tickets found yet.</div>';
    return;
  }

  adminTicketList.innerHTML = tickets.map((ticket) => `
    <div class="admin-ticket">
      <div class="admin-ticket-row">
        <div>
          <strong>${ticket.name}</strong><br />
          ${ticket.mobile}<br />
          ${ticket.utr}
        </div>
        <span class="status-tag status-${ticket.status}">${ticket.status}</span>
      </div>
      <div style="margin-top: 12px; color: var(--muted);">
        Payment screenshot: <a href="${ticket.screenshotUrl}" target="_blank" rel="noreferrer">View</a><br />
        Ticket: <strong>${ticket.code}</strong><br />
        Members used: ${ticket.usedEntries} / ${ticket.allowedEntries}
      </div>
      <div class="admin-actions">
        <button class="primary-btn" data-ticket-action="approve" data-id="${ticket.id}">Approve</button>
        <button class="danger-btn" data-ticket-action="reject" data-id="${ticket.id}">Reject</button>
      </div>
    </div>
  `).join('');
}

async function fetchJson(url, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: {
      ...(options.headers || {}),
      'Content-Type': options.body instanceof FormData ? undefined : 'application/json'
    }
  });

  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message || 'Request failed.');
  }

  return result;
}

bookingForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(bookingForm);
  try {
    const result = await fetch('/api/tickets', {
      method: 'POST',
      body: formData
    });

    const payload = await result.json();

    if (!result.ok) {
      throw new Error(payload.message || 'Booking failed.');
    }

    renderTicketCard(payload.ticket);
    setStatusElement(bookingResult, `Ticket submitted successfully! Admin will verify payment and activate your QR code. Ticket code: <strong>${payload.ticket.code}</strong>`, 'ok');
  } catch (error) {
    setStatusElement(bookingResult, error.message, 'bad');
  }
});

retrieveForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const utr = document.getElementById('retrieveUtr').value.trim();

  if (!utr) {
    setStatusElement(retrieveResult, 'Please enter a UTR number.', 'bad');
    return;
  }

  try {
    const result = await fetch(`/api/tickets/retrieve?utr=${encodeURIComponent(utr)}`);
    const payload = await result.json();

    if (!result.ok) {
      throw new Error(payload.message || 'Could not retrieve ticket.');
    }

    if (!payload.tickets || payload.tickets.length === 0) {
      setStatusElement(retrieveResult, 'No ticket found for that UTR number.', 'bad');
      return;
    }

    const ticket = payload.tickets[0];
    renderTicketCard(ticket);
    setStatusElement(retrieveResult, `Ticket found for UTR <strong>${utr}</strong>.`, 'ok');
  } catch (error) {
    setStatusElement(retrieveResult, error.message, 'bad');
  }
});

adminLoginBtn.addEventListener('click', async () => {
  const password = adminPasswordInput.value.trim();

  try {
    const result = await fetchJson('/api/admin/login', {
      method: 'POST',
      body: JSON.stringify({ password })
    });

    state.adminToken = result.token;
    localStorage.setItem('adminToken', result.token);
    adminLoginSection.classList.add('hidden');
    adminDashboard.classList.remove('hidden');
    await refreshAdminTickets();
  } catch (error) {
    alert(error.message);
  }
});

async function refreshAdminTickets() {
  if (!state.adminToken) return;

  try {
    const result = await fetchJson('/api/admin/tickets', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${state.adminToken}`
      }
    });

    renderAdminTickets(result.tickets);
  } catch (error) {
    alert(error.message);
  }
}

refreshAdminBtn.addEventListener('click', refreshAdminTickets);

document.addEventListener('click', async (event) => {
  const ticketAction = event.target.closest('[data-ticket-action]');
  if (ticketAction) {
    const { id, ticketAction: action } = ticketAction.dataset;
    try {
      const result = await fetchJson(`/api/admin/tickets/${id}/${action}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${state.adminToken}`
        }
      });

      if (result.success) {
        await refreshAdminTickets();
      }
    } catch (error) {
      alert(error.message);
    }
  }

  const action = event.target.closest('[data-action]');
  if (!action) return;

  const { action: actionName } = action.dataset;
  if (actionName === 'download-ticket' && state.scannedTicket) {
    downloadTicketImage(state.scannedTicket);
  }

  if (actionName === 'print-ticket' && state.scannedTicket) {
    const printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>Ticket</title></head><body style="font-family:Segoe UI; display:flex; justify-content:center; align-items:center; height:100vh;">' +
      '<div style="max-width:600px; border:1px solid #ccc; border-radius:16px; padding:20px; text-align:center;">' +
      `<h2>Swarnkar Garba Mahotsav 2026</h2>` +
      `<p><strong>Name:</strong> ${state.scannedTicket.name}</p>` +
      `<p><strong>Mobile:</strong> ${state.scannedTicket.mobile}</p>` +
      `<p><strong>UTR:</strong> ${state.scannedTicket.utr}</p>` +
      `<p><strong>Ticket:</strong> ${state.scannedTicket.code}</p>` +
      `<img src="${state.scannedTicket.qrImage}" style="max-width:220px; margin:10px auto; display:block;" />` +
      '</div></body></html>');
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  }
});

gateAccessBtn.addEventListener('click', () => {
  const password = gatePasswordInput.value.trim();
  if (password !== 'ADMIN') {
    alert('Incorrect gate password. Use ADMIN.');
    return;
  }

  scannerSection.classList.remove('hidden');
  startGateScanner();
});

function startGateScanner() {
  if (state.gateScanner) {
    return;
  }

  state.gateScanner = new Html5Qrcode('reader');

  state.gateScanner.start(
    { facingMode: 'environment' },
    { fps: 10, qrbox: { width: 250, height: 250 } },
    async (decodedText) => {
      try {
        const result = await fetch('/api/gate/scan', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-gate-password': 'ADMIN'
          },
          body: JSON.stringify({
            qrData: decodedText,
            entryCount: Number(entryCountSelect.value) || 1
          })
        });

        const payload = await result.json();

        if (!result.ok) {
          setStatusElement(scanResult, payload.message || 'Scan failed.', 'bad');
          return;
        }

        setStatusElement(scanResult, `${payload.message} Remaining entries: ${payload.ticket.remainingEntries}`, 'ok');
      } catch (error) {
        setStatusElement(scanResult, error.message, 'bad');
      }
    },
    (error) => {
      // Ignore scanning frame errors.
    }
  ).catch((error) => {
    setStatusElement(scanResult, error.message || 'Unable to start scanner.', 'bad');
  });
}

manualScanBtn.addEventListener('click', async () => {
  const value = manualQrInput.value.trim();
  if (!value) {
    setStatusElement(scanResult, 'Please paste a QR value or scan one using camera.', 'bad');
    return;
  }

  try {
    const result = await fetch('/api/gate/scan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-gate-password': 'ADMIN'
      },
      body: JSON.stringify({
        qrData: value,
        entryCount: Number(entryCountSelect.value) || 1
      })
    });

    const payload = await result.json();
    if (!result.ok) {
      throw new Error(payload.message || 'Manual validation failed.');
    }

    setStatusElement(scanResult, `${payload.message} Remaining entries: ${payload.ticket.remainingEntries}`, 'ok');
  } catch (error) {
    setStatusElement(scanResult, error.message, 'bad');
  }
});

if (state.adminToken) {
  adminLoginSection.classList.add('hidden');
  adminDashboard.classList.remove('hidden');
  refreshAdminTickets();
}
`;

const readme = `# Swarnkar Garba Mahotsav 2026

A digital event booking website for Garba festival passes with:

- User booking form
- Mobile number + UTR input
- ₹200 payment field with screenshot upload
- Ticket generation with QR code
- Admin approval flow
- QR code activation after verification
- Downloadable ticket image
- Ticket retrieval by UTR number
- Gate scanner page with password protection
- Help and support section
- Garba-themed design

## Admin password

Use the password: ADMIN

## Run locally

1. Install dependencies:
   npm install
2. Start the server:
   npm start
3. Open in browser:
   http://localhost:3000

## Features included

- Same website supports booking, admin review, scanner, and support section.
- QR code is inactive until admin approves payment.
- Each QR permits up to 4 members in one entry pass.
- The scanner validates QR codes and reduces remaining entry count.
- Ticket records are stored in the local JSON data files.

## Project structure

- server.js — backend API and QR validation logic
- public/index.html — main SPA page
- public/styles.css — theme styling
- public/app.js — booking, admin, and scanner actions
- data/tickets.json — stored ticket records
- data/entryLogs.json — gate scan logs
`;

const gitignore = `node_modules
.env
.DS_Store
uploads/*
!uploads/.gitkeep
`;

const gitkeep = ``;

const fileList = [
  { path: 'package.json', content: packageJson },
  { path: 'server.js', content: serverJs },
  { path: 'public/index.html', content: html },
  { path: 'public/app.js', content: appJs },
  { path: 'data/tickets.json', content: '[]\n' },
  { path: 'data/entryLogs.json', content: '[]\n' },
  { path: 'README.md', content: readme },
  { path: '.gitignore', content: gitignore },
  { path: 'uploads/.gitkeep', content: gitkeep }
];

const packageJson = `{
  "name": "swarnkar-garba-mahotsav-2026",
  "version": "1.0.0",
  "description": "Digital Garba festival booking website with QR ticketing and admin approval.",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.19.2",
    "multer": "^1.4.5-lts.1",
    "qrcode": "^1.5.4",
    "uuid": "^11.0.0"
  }
}
`;

const serverJs = `const express = require('express');
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
`;

const appJsFile = `const state = {
  adminToken: localStorage.getItem('adminToken') || '',
  scannedTicket: null,
  gateScanner: null
};

const bookingForm = document.getElementById('bookingForm');
const bookingResult = document.getElementById('bookingResult');
const retrieveForm = document.getElementById('retrieveForm');
const retrieveResult = document.getElementById('retrieveResult');
const adminPasswordInput = document.getElementById('adminPassword');
const adminLoginBtn = document.getElementById('adminLoginBtn');
const adminDashboard = document.getElementById('adminDashboard');
const adminTicketList = document.getElementById('adminTicketList');
const adminLoginSection = document.getElementById('adminLoginSection');
const refreshAdminBtn = document.getElementById('refreshAdminBtn');
const gatePasswordInput = document.getElementById('gatePassword');
const gateAccessBtn = document.getElementById('gateAccessBtn');
const scannerSection = document.getElementById('scannerSection');
const scanResult = document.getElementById('scanResult');
const manualQrInput = document.getElementById('manualQrInput');
const manualScanBtn = document.getElementById('manualScanBtn');
const entryCountSelect = document.getElementById('entryCount');
const ticketPreview = document.getElementById('ticketPreview');

function setStatusElement(element, message, type = 'ok') {
  element.classList.remove('hidden');
  element.classList.remove('status-ok', 'status-bad');
  element.classList.add(type === 'ok' ? 'status-ok' : 'status-bad');
  element.innerHTML = message;
}

function renderTicketCard(ticket) {
  state.scannedTicket = ticket;
  ticketPreview.innerHTML = `
    <div class="ticket-card">
      <div class="ticket-header">
        <span class="ticket-badge">${ticket.status.toUpperCase()}</span>
        <span class="ticket-code">${ticket.code}</span>
      </div>
      <div class="ticket-summary">
        <strong>Name:</strong> ${ticket.name}<br />
        <strong>Mobile:</strong> ${ticket.mobile}<br />
        <strong>UTR:</strong> ${ticket.utr}<br />
        <strong>Members Allowed:</strong> ${ticket.allowedEntries}<br />
        <strong>Status:</strong> ${ticket.status === 'approved' ? 'Active & Verified' : 'Pending Approval'}
      </div>
      <div class="qr-wrap">
        <img src="${ticket.qrImage}" alt="QR code for ${ticket.code}" />
      </div>
      <div class="ticket-actions">
        <button class="primary-btn" data-action="download-ticket">Download Ticket</button>
        <button class="secondary-btn" data-action="print-ticket">Print Ticket</button>
      </div>
    </div>
  `;
}

function downloadTicketImage(ticket) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 900;
  canvas.height = 1200;

  const bg = ctx.createLinearGradient(0, 0, 900, 1200);
  bg.addColorStop(0, '#140d1d');
  bg.addColorStop(1, '#2e1237');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#f7d77b';
  ctx.font = 'bold 42px Segoe UI';
  ctx.fillText('Swarnkar Garba Mahotsav 2026', 80, 110);

  ctx.fillStyle = '#ffffff';
  ctx.font = '28px Segoe UI';
  ctx.fillText(`Name: ${ticket.name}`, 80, 220);
  ctx.fillText(`Mobile: ${ticket.mobile}`, 80, 280);
  ctx.fillText(`UTR: ${ticket.utr}`, 80, 340);
  ctx.fillText(`Ticket: ${ticket.code}`, 80, 400);
  ctx.fillText(`Valid For: 1 - ${ticket.allowedEntries} Members`, 80, 460);
  ctx.fillText(`Status: ${ticket.status === 'approved' ? 'Approved' : 'Pending'}`, 80, 520);

  const qrImage = new Image();
  qrImage.onload = () => {
    const qrSize = 300;
    const x = 300;
    const y = 610;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(x - 18, y - 18, qrSize + 36, qrSize + 36);
    ctx.drawImage(qrImage, x, y, qrSize, qrSize);

    ctx.fillStyle = '#f7d77b';
    ctx.font = 'bold 22px Segoe UI';
    ctx.fillText('Scan at gate to validate entry', 220, 1020);

    const link = document.createElement('a');
    link.download = `${ticket.code}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };
  qrImage.src = ticket.qrImage;
}

function renderAdminTickets(tickets) {
  if (!tickets || tickets.length === 0) {
    adminTicketList.innerHTML = '<div class="status-box">No tickets found yet.</div>';
    return;
  }

  adminTicketList.innerHTML = tickets.map((ticket) => `
    <div class="admin-ticket">
      <div class="admin-ticket-row">
        <div>
          <strong>${ticket.name}</strong><br />
          ${ticket.mobile}<br />
          ${ticket.utr}
        </div>
        <span class="status-tag status-${ticket.status}">${ticket.status}</span>
      </div>
      <div style="margin-top: 12px; color: var(--muted);">
        Payment screenshot: <a href="${ticket.screenshotUrl}" target="_blank" rel="noreferrer">View</a><br />
        Ticket: <strong>${ticket.code}</strong><br />
        Members used: ${ticket.usedEntries} / ${ticket.allowedEntries}
      </div>
      <div class="admin-actions">
        <button class="primary-btn" data-ticket-action="approve" data-id="${ticket.id}">Approve</button>
        <button class="danger-btn" data-ticket-action="reject" data-id="${ticket.id}">Reject</button>
      </div>
    </div>
  `).join('');
}

async function fetchJson(url, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: {
      ...(options.headers || {}),
      'Content-Type': options.body instanceof FormData ? undefined : 'application/json'
    }
  });

  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message || 'Request failed.');
  }

  return result;
}

bookingForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(bookingForm);
  try {
    const result = await fetch('/api/tickets', {
      method: 'POST',
      body: formData
    });

    const payload = await result.json();

    if (!result.ok) {
      throw new Error(payload.message || 'Booking failed.');
    }

    renderTicketCard(payload.ticket);
    setStatusElement(bookingResult, `Ticket submitted successfully! Admin will verify payment and activate your QR code. Ticket code: <strong>${payload.ticket.code}</strong>`, 'ok');
  } catch (error) {
    setStatusElement(bookingResult, error.message, 'bad');
  }
});

retrieveForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const utr = document.getElementById('retrieveUtr').value.trim();

  if (!utr) {
    setStatusElement(retrieveResult, 'Please enter a UTR number.', 'bad');
    return;
  }

  try {
    const result = await fetch(`/api/tickets/retrieve?utr=${encodeURIComponent(utr)}`);
    const payload = await result.json();

    if (!result.ok) {
      throw new Error(payload.message || 'Could not retrieve ticket.');
    }

    if (!payload.tickets || payload.tickets.length === 0) {
      setStatusElement(retrieveResult, 'No ticket found for that UTR number.', 'bad');
      return;
    }

    const ticket = payload.tickets[0];
    renderTicketCard(ticket);
    setStatusElement(retrieveResult, `Ticket found for UTR <strong>${utr}</strong>.`, 'ok');
  } catch (error) {
    setStatusElement(retrieveResult, error.message, 'bad');
  }
});

adminLoginBtn.addEventListener('click', async () => {
  const password = adminPasswordInput.value.trim();

  try {
    const result = await fetchJson('/api/admin/login', {
      method: 'POST',
      body: JSON.stringify({ password })
    });

    state.adminToken = result.token;
    localStorage.setItem('adminToken', result.token);
    adminLoginSection.classList.add('hidden');
    adminDashboard.classList.remove('hidden');
    await refreshAdminTickets();
  } catch (error) {
    alert(error.message);
  }
});

async function refreshAdminTickets() {
  if (!state.adminToken) return;

  try {
    const result = await fetchJson('/api/admin/tickets', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${state.adminToken}`
      }
    });

    renderAdminTickets(result.tickets);
  } catch (error) {
    alert(error.message);
  }
}

refreshAdminBtn.addEventListener('click', refreshAdminTickets);

document.addEventListener('click', async (event) => {
  const ticketAction = event.target.closest('[data-ticket-action]');
  if (ticketAction) {
    const { id, ticketAction: action } = ticketAction.dataset;
    try {
      const result = await fetchJson(`/api/admin/tickets/${id}/${action}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${state.adminToken}`
        }
      });

      if (result.success) {
        await refreshAdminTickets();
      }
    } catch (error) {
      alert(error.message);
    }
  }

  const action = event.target.closest('[data-action]');
  if (!action) return;

  const { action: actionName } = action.dataset;
  if (actionName === 'download-ticket' && state.scannedTicket) {
    downloadTicketImage(state.scannedTicket);
  }

  if (actionName === 'print-ticket' && state.scannedTicket) {
    const printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>Ticket</title></head><body style="font-family:Segoe UI; display:flex; justify-content:center; align-items:center; height:100vh;">' +
      '<div style="max-width:600px; border:1px solid #ccc; border-radius:16px; padding:20px; text-align:center;">' +
      `<h2>Swarnkar Garba Mahotsav 2026</h2>` +
      `<p><strong>Name:</strong> ${state.scannedTicket.name}</p>` +
      `<p><strong>Mobile:</strong> ${state.scannedTicket.mobile}</p>` +
      `<p><strong>UTR:</strong> ${state.scannedTicket.utr}</p>` +
      `<p><strong>Ticket:</strong> ${state.scannedTicket.code}</p>` +
      `<img src="${state.scannedTicket.qrImage}" style="max-width:220px; margin:10px auto; display:block;" />` +
      '</div></body></html>');
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  }
});

gateAccessBtn.addEventListener('click', () => {
  const password = gatePasswordInput.value.trim();
  if (password !== 'ADMIN') {
    alert('Incorrect gate password. Use ADMIN.');
    return;
  }

  scannerSection.classList.remove('hidden');
  startGateScanner();
});

function startGateScanner() {
  if (state.gateScanner) {
    return;
  }

  state.gateScanner = new Html5Qrcode('reader');

  state.gateScanner.start(
    { facingMode: 'environment' },
    { fps: 10, qrbox: { width: 250, height: 250 } },
    async (decodedText) => {
      try {
        const result = await fetch('/api/gate/scan', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-gate-password': 'ADMIN'
          },
          body: JSON.stringify({
            qrData: decodedText,
            entryCount: Number(entryCountSelect.value) || 1
          })
        });

        const payload = await result.json();

        if (!result.ok) {
          setStatusElement(scanResult, payload.message || 'Scan failed.', 'bad');
          return;
        }

        setStatusElement(scanResult, `${payload.message} Remaining entries: ${payload.ticket.remainingEntries}`, 'ok');
      } catch (error) {
        setStatusElement(scanResult, error.message, 'bad');
      }
    },
    (error) => {
      // Ignore scanning frame errors.
    }
  ).catch((error) => {
    setStatusElement(scanResult, error.message || 'Unable to start scanner.', 'bad');
  });
}

manualScanBtn.addEventListener('click', async () => {
  const value = manualQrInput.value.trim();
  if (!value) {
    setStatusElement(scanResult, 'Please paste a QR value or scan one using camera.', 'bad');
    return;
  }

  try {
    const result = await fetch('/api/gate/scan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-gate-password': 'ADMIN'
      },
      body: JSON.stringify({
        qrData: value,
        entryCount: Number(entryCountSelect.value) || 1
      })
    });

    const payload = await result.json();
    if (!result.ok) {
      throw new Error(payload.message || 'Manual validation failed.');
    }

    setStatusElement(scanResult, `${payload.message} Remaining entries: ${payload.ticket.remainingEntries}`, 'ok');
  } catch (error) {
    setStatusElement(scanResult, error.message, 'bad');
  }
});

if (state.adminToken) {
  adminLoginSection.classList.add('hidden');
  adminDashboard.classList.remove('hidden');
  refreshAdminTickets();
}
`;

const stylesFile = `:root {
  --bg-dark: #140d1d;
  --bg-deep: #1a0f2a;
  --panel: rgba(32, 17, 43, 0.9);
  --panel-alt: rgba(58, 29, 74, 0.92);
  --gold: #f7d77b;
  --gold-strong: #ffba42;
  --pink: #ff5d9e;
  --purple: #ae66ff;
  --red: #ff4f61;
  --text: #fdf6f0;
  --muted: #d9cbd8;
  --success: #2dd4a5;
  --danger: #ff6a7c;
  --shadow: 0 20px 45px rgba(14, 8, 20, 0.5);
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: radial-gradient(circle at top, rgba(255, 117, 151, 0.2), transparent 20%), linear-gradient(135deg, #1f102d 0%, #180c21 35%, #0d0a13 100%);
  color: var(--text);
}
body::before {
  content: "";
  position: fixed;
  inset: 0;
  background-image: url('https://images.unsplash.com/photo-1516280440614-3765d8e5a4d5?auto=format&fit=crop&w=1400&q=80');
  background-size: cover;
  background-position: center;
  opacity: 0.18;
  z-index: -2;
}
a { color: var(--gold); text-decoration: none; }
.page-shell {
  width: min(1200px, calc(100% - 32px));
  margin: 0 auto;
  padding-bottom: 40px;
}
.topbar {
  position: sticky; top: 0; z-index: 50; display: flex; align-items: center; justify-content: space-between; padding: 18px 0; backdrop-filter: blur(16px); background: rgba(19, 13, 24, 0.65); border-bottom: 1px solid rgba(247, 215, 123, 0.22);
}
.brand { display: flex; align-items: center; gap: 12px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; }
.brand-mark {
  width: 42px; height: 42px; display: grid; place-items: center; border-radius: 50%; background: linear-gradient(135deg, var(--gold), var(--pink)); box-shadow: 0 8px 18px rgba(255, 140, 170, 0.4); color: #170d1f; font-size: 1.3rem;
}
.nav { display: flex; gap: 12px; flex-wrap: wrap; }
.nav a { padding: 10px 14px; border: 1px solid rgba(247, 215, 123, 0.25); border-radius: 999px; color: var(--text); background: rgba(255, 255, 255, 0.02); transition: 0.2s ease; }
.nav a:hover { background: rgba(255, 186, 66, 0.12); border-color: rgba(247, 215, 123, 0.75); }
.hero { padding: 52px 0 18px; }
.hero-panel { position: relative; overflow: hidden; border-radius: 30px; min-height: 430px; border: 1px solid rgba(255, 194, 102, 0.35); box-shadow: var(--shadow); background: linear-gradient(135deg, rgba(15, 7, 16, 0.7), rgba(44, 17, 58, 0.8)), url('https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1400&q=80') center/cover no-repeat; display: flex; align-items: end; }
.hero-content { width: min(700px, 100%); padding: 58px 42px; }
.eyebrow {
  display: inline-block; padding: 8px 14px; border-radius: 999px; background: rgba(255, 186, 66, 0.12); border: 1px solid rgba(247, 215, 123, 0.4); color: var(--gold); font-size: 0.8rem; letter-spacing: 0.12em; text-transform: uppercase;
}
h1 { margin: 18px 0 12px; font-size: clamp(2.2rem, 5vw, 4.2rem); line-height: 1.06; }
.lead { max-width: 620px; color: var(--muted); font-size: 1.08rem; line-height: 1.7; }
.info-pills { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 26px; }
.pill { border-radius: 999px; padding: 10px 16px; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.15); color: var(--text); font-weight: 600; }
.page-grid { display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 22px; margin-top: 22px; }
.panel { background: linear-gradient(180deg, rgba(32, 17, 43, 0.9), rgba(19, 12, 25, 0.95)); border: 1px solid rgba(255, 194, 102, 0.18); border-radius: 24px; box-shadow: var(--shadow); padding: 22px; }
.panel h2 { margin-top: 0; margin-bottom: 18px; font-size: 1.8rem; }
.form-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
.field { display: flex; flex-direction: column; gap: 8px; }
.field.full { grid-column: 1 / -1; }
label { color: var(--gold); font-weight: 700; letter-spacing: 0.03em; }
input, select, textarea, button { font: inherit; }
input, select, textarea { width: 100%; border: 1px solid rgba(255, 194, 102, 0.25); background: rgba(17, 11, 22, 0.8); color: var(--text); border-radius: 14px; padding: 13px 14px; outline: none; transition: border-color 0.2s ease, box-shadow 0.2s ease; }
input:focus, select:focus, textarea:focus { border-color: rgba(247, 215, 123, 0.82); box-shadow: 0 0 0 4px rgba(247, 215, 123, 0.12); }
textarea { resize: vertical; min-height: 120px; }
button { cursor: pointer; border: none; border-radius: 14px; padding: 14px 18px; font-weight: 800; transition: transform 0.15s ease, box-shadow 0.2s ease; }
button:hover { transform: translateY(-1px); }
.primary-btn { background: linear-gradient(135deg, var(--gold), var(--pink)); color: #1b0a17; box-shadow: 0 14px 28px rgba(255, 106, 124, 0.28); }
.secondary-btn { background: rgba(255, 255, 255, 0.05); color: var(--text); border: 1px solid rgba(255, 255, 255, 0.12); }
.danger-btn { background: linear-gradient(135deg, var(--red), #ff8a5a); color: white; }
.form-note { margin-top: 12px; color: var(--muted); font-size: 0.95rem; }
.ticket-box, .status-box, .scan-result { margin-top: 18px; padding: 14px 16px; border-radius: 16px; background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.12); color: var(--text); }
.status-ok { border-color: rgba(45, 212, 165, 0.6); background: rgba(45, 212, 165, 0.08); color: #d4fff2; }
.status-bad { border-color: rgba(255, 106, 124, 0.6); background: rgba(255, 106, 124, 0.08); color: #ffdfe5; }
.ticket-card { display: grid; gap: 14px; padding: 18px; border-radius: 18px; background: linear-gradient(135deg, rgba(255, 198, 91, 0.08), rgba(255, 93, 158, 0.08)); border: 1px solid rgba(255, 196, 109, 0.2); }
.ticket-header { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.ticket-badge { display: inline-block; border-radius: 999px; background: rgba(255, 186, 66, 0.14); border: 1px solid rgba(255, 186, 66, 0.55); color: var(--gold); padding: 6px 12px; font-size: 0.8rem; font-weight: 700; }
.ticket-code { font-size: 1.1rem; font-weight: 800; letter-spacing: 0.08em; }
.ticket-summary { color: var(--muted); line-height: 1.7; }
.qr-wrap { display: grid; place-items: center; margin-top: 6px; }
.qr-wrap img { width: min(220px, 70vw); background: white; border-radius: 18px; padding: 10px; }
.ticket-actions { display: flex; flex-wrap: wrap; gap: 10px; }
.admin-login, .scanner-lock { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; }
.admin-list { display: grid; gap: 12px; margin-top: 18px; }
.admin-ticket { border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 16px; padding: 14px; background: rgba(255, 255, 255, 0.03); }
.admin-ticket-row { display: flex; justify-content: space-between; gap: 8px; flex-wrap: wrap; }
.status-tag { display: inline-flex; align-items: center; border-radius: 999px; padding: 7px 10px; font-size: 0.78rem; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; }
.status-pending { background: rgba(255, 186, 66, 0.12); color: var(--gold); border: 1px solid rgba(255, 186, 66, 0.5); }
.status-approved { background: rgba(45, 212, 165, 0.12); color: #d5fff2; border: 1px solid rgba(45, 212, 165, 0.45); }
.status-rejected { background: rgba(255, 106, 124, 0.12); color: #ffdfe5; border: 1px solid rgba(255, 106, 124, 0.45); }
.admin-actions { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 12px; }
.scanner-box { margin-top: 18px; }
#reader { width: 100%; min-height: 260px; border-radius: 18px; overflow: hidden; border: 1px solid rgba(255, 194, 102, 0.24); background: rgba(5, 4, 8, 0.52); }
.hidden { display: none !important; }
.support-box { display: grid; gap: 8px; color: var(--muted); line-height: 1.7; }
.support-box strong { color: var(--text); }
footer { padding: 30px 0 10px; color: rgba(255,255,255,0.7); text-align: center; }
@media (max-width: 900px) { .page-grid { grid-template-columns: 1fr; } .topbar { flex-direction: column; align-items: flex-start; gap: 8px; } }
@media (max-width: 620px) { .form-grid { grid-template-columns: 1fr; } .hero-content { padding: 34px 18px; } .nav { width: 100%; } .nav a { flex: 1 1 calc(50% - 12px); text-align: center; } }
`;

const htmlFile = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Swarnkar Garba Mahotsav 2026 event booking, QR passes, admin approval, and gate scanner." />
    <title>Swarnkar Garba Mahotsav 2026</title>
    <link rel="stylesheet" href="/styles.css" />
  </head>
  <body>
    <div class="page-shell">
      <header class="topbar">
        <div class="brand">
          <div class="brand-mark">ॐ</div>
          <span>Garba 2026</span>
        </div>
        <nav class="nav" aria-label="Main navigation">
          <a href="#booking">Book Ticket</a>
          <a href="#retrieve">Retrieve</a>
          <a href="#admin">Admin</a>
          <a href="#scanner">Scanner</a>
          <a href="#help">Support</a>
        </nav>
      </header>

      <main>
        <section class="hero">
          <div class="hero-panel">
            <div class="hero-content">
              <span class="eyebrow">Swarnkar Garba Mahotsav 2026</span>
              <h1>Book your celebration, secure your QR pass.</h1>
              <p class="lead">
                Pay ₹200, upload your UTR proof, get approved by admin, and receive a valid ticket QR code that allows up to 4 members per scan.
              </p>
              <div class="info-pills">
                <span class="pill">₹200 per ticket</span>
                <span class="pill">Up to 4 members</span>
                <span class="pill">QR active after approval</span>
              </div>
            </div>
          </div>
        </section>

        <section class="page-grid">
          <div class="panel" id="booking">
            <h2>Book Your Pass</h2>
            <form id="bookingForm" enctype="multipart/form-data">
              <div class="form-grid">
                <div class="field">
                  <label for="name">Enter Name</label>
                  <input id="name" name="name" type="text" placeholder="Enter full name" required />
                </div>

                <div class="field">
                  <label for="mobile">Mobile Number</label>
                  <input id="mobile" name="mobile" type="tel" placeholder="Enter mobile number" required />
                </div>

                <div class="field full">
                  <label for="utr">UTR Number</label>
                  <input id="utr" name="utr" type="text" placeholder="Enter UTR number" required />
                </div>

                <div class="field full">
                  <label for="screenshot">Payment Screenshot</label>
                  <input id="screenshot" name="screenshot" type="file" accept="image/*" required />
                </div>
              </div>

              <div class="form-note">Amount: ₹200. Payment approval and QR activation are done by admin after verification.</div>
              <div class="ticket-actions" style="margin-top: 20px;">
                <button type="submit" class="primary-btn">Pay ₹200 &amp; Book</button>
              </div>
            </form>

            <div id="bookingResult" class="status-box hidden"></div>
          </div>

          <div class="panel" id="retrieve">
            <h2>Retrieve Ticket</h2>
            <form id="retrieveForm">
              <div class="field">
                <label for="retrieveUtr">Enter UTR Number</label>
                <input id="retrieveUtr" name="utr" type="text" placeholder="Enter your UTR number" required />
              </div>
              <div class="ticket-actions" style="margin-top: 14px;">
                <button type="submit" class="secondary-btn">Retrieve My Ticket</button>
              </div>
            </form>
            <div id="retrieveResult" class="status-box hidden"></div>
          </div>
        </section>

        <section class="page-grid">
          <div class="panel" id="admin">
            <h2>Admin Panel</h2>
            <div id="adminLoginSection">
              <div class="admin-login">
                <input id="adminPassword" type="password" placeholder="Enter admin password" />
                <button id="adminLoginBtn" class="primary-btn">Login</button>
              </div>
            </div>

            <div id="adminDashboard" class="hidden">
              <div class="ticket-actions" style="margin-bottom: 12px;">
                <button id="refreshAdminBtn" class="secondary-btn">Refresh Records</button>
              </div>
              <div id="adminTicketList" class="admin-list"></div>
            </div>
          </div>

          <div class="panel" id="scanner">
            <h2>Gate Scanner</h2>
            <div id="scannerLockSection">
              <div class="scanner-lock">
                <input id="gatePassword" type="password" placeholder="Enter gate password" />
                <button id="gateAccessBtn" class="secondary-btn">Unlock Scanner</button>
              </div>
            </div>

            <div id="scannerSection" class="scanner-box hidden">
              <div id="reader"></div>
              <div class="field" style="margin-top: 16px;">
                <label for="entryCount">Number of Members</label>
                <select id="entryCount">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              <div class="ticket-actions" style="margin-top: 12px;">
                <button id="manualScanBtn" class="primary-btn">Validate QR</button>
              </div>
              <textarea id="manualQrInput" placeholder="Paste QR code here if camera scan fails" style="margin-top: 12px;"></textarea>
              <div id="scanResult" class="scan-result hidden"></div>
            </div>
          </div>
        </section>

        <section class="panel" id="help" style="margin-top: 22px;">
          <h2>Help &amp; Support</h2>
          <div class="support-box">
            <div><strong>Contact:</strong> Deepak Soni</div>
            <div><strong>Mobile:</strong> <a href="tel:+918385963066">8385963066</a></div>
            <div><strong>Address:</strong> Moti Chowk, Jodhpur</div>
          </div>
        </section>

        <section class="panel" style="margin-top: 22px;">
          <h2>Ticket Preview</h2>
          <div id="ticketPreview"></div>
        </section>
      </main>

      <footer>
        Swarnkar Garba Mahotsav 2026 • Garba theme digital booking portal
      </footer>
    </div>

    <script src="https://unpkg.com/html5-qrcode@2.3.8/minified/html5-qrcode.min.js"></script>
    <script src="/app.js"></script>
  </body>
</html>
`;

const stylesPath = { path: 'public/styles.css', content: stylesFile };
const htmlPath = { path: 'public/index.html', content: htmlFile };
const appJsPath = { path: 'public/app.js', content: appJsFile };

fileList.push(stylesPath, htmlPath, appJsPath);

const finalFiles = fileList.filter(Boolean);

return finalFiles;
