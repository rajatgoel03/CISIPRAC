/**
 * CISI IOC Practice Platform — Flashcard Logic
 */

'use strict';

const LS_FC_KEY = 'cisi_flashcards';

let fcState = {
  cards:   [],
  current: 0,
  flipped: false,
  filter:  'all'
};

// ─── Load card status from localStorage ──────────────────────
function loadFcStatus() {
  try {
    return JSON.parse(localStorage.getItem(LS_FC_KEY)) || {};
  } catch { return {}; }
}

function saveFcStatus(status) {
  localStorage.setItem(LS_FC_KEY, JSON.stringify(status));
}

function getFcStatus() {
  return loadFcStatus();
}

// ─── Build card list ──────────────────────────────────────────
function buildCards(filter) {
  if (filter === 'all') return [...QUESTIONS];
  return QUESTIONS.filter(q => q.topic === filter || q.unit === filter);
}

// ─── Render current card ──────────────────────────────────────
function renderCard() {
  const card = fcState.cards[fcState.current];
  if (!card) return;

  const status = getFcStatus();
  const cardStatus = status[card.id] || 'unseen';

  // Front
  const frontLabel = document.getElementById('fcFrontLabel');
  const frontText  = document.getElementById('fcFrontText');
  const backText   = document.getElementById('fcBackText');
  const backLabel  = document.getElementById('fcBackLabel');

  if (frontLabel) frontLabel.textContent = `${card.unit} · ${card.topic}`;
  if (frontText)  frontText.textContent  = card.question;
  if (backText)   backText.innerHTML     = `<strong>Answer:</strong> ${card.options[card.correct].replace(/^[A-D]\.\s*/, '')}<br><br><em>${card.explanation}</em>`;
  if (backLabel)  backLabel.textContent  = 'Answer & Explanation';

  // Progress
  const progressEl = document.getElementById('fcProgress');
  if (progressEl) progressEl.textContent = `Card ${fcState.current + 1} of ${fcState.cards.length}`;

  // Status indicator
  const statusEl = document.getElementById('fcStatus');
  if (statusEl) {
    const icons = { known: '✅ Known', review: '🔁 Needs Review', unseen: '—' };
    statusEl.textContent = icons[cardStatus] || '—';
  }

  // Known / review buttons
  const knownBtn  = document.getElementById('markKnown');
  const reviewBtn = document.getElementById('markReview');
  if (knownBtn)  knownBtn.classList.toggle('active', cardStatus === 'known');
  if (reviewBtn) reviewBtn.classList.toggle('active', cardStatus === 'review');

  // Stats
  updateFcStats();
}

function updateFcStats() {
  const status = getFcStatus();
  let known = 0, review = 0, unseen = 0;
  fcState.cards.forEach(c => {
    const s = status[c.id] || 'unseen';
    if (s === 'known')  known++;
    else if (s === 'review') review++;
    else unseen++;
  });
  const knownEl  = document.getElementById('fcKnownCount');
  const reviewEl = document.getElementById('fcReviewCount');
  const unseenEl = document.getElementById('fcUnseenCount');
  if (knownEl)  knownEl.textContent  = known;
  if (reviewEl) reviewEl.textContent = review;
  if (unseenEl) unseenEl.textContent = unseen;
}

// ─── Flip card ────────────────────────────────────────────────
function flipCard() {
  fcState.flipped = !fcState.flipped;
  const cardEl = document.getElementById('flashcard');
  if (cardEl) cardEl.classList.toggle('flipped', fcState.flipped);
}

// ─── Navigation ───────────────────────────────────────────────
function fcNext() {
  fcState.flipped = false;
  const cardEl = document.getElementById('flashcard');
  if (cardEl) cardEl.classList.remove('flipped');

  if (fcState.current < fcState.cards.length - 1) {
    fcState.current++;
  } else {
    fcState.current = 0; // Loop
  }
  renderCard();
}

function fcPrev() {
  fcState.flipped = false;
  const cardEl = document.getElementById('flashcard');
  if (cardEl) cardEl.classList.remove('flipped');

  if (fcState.current > 0) {
    fcState.current--;
  } else {
    fcState.current = fcState.cards.length - 1;
  }
  renderCard();
}

// ─── Mark card ────────────────────────────────────────────────
function markCard(markStatus) {
  const card   = fcState.cards[fcState.current];
  if (!card) return;
  const status = getFcStatus();

  // Toggle off if already set
  status[card.id] = status[card.id] === markStatus ? 'unseen' : markStatus;
  saveFcStatus(status);
  renderCard();

  const messages = { known: 'Marked as Known ✅', review: 'Marked for Review 🔁', unseen: 'Mark removed' };
  showToast(messages[status[card.id]] || '', 'success');
}

// ─── Filter ───────────────────────────────────────────────────
function applyFilter(filter) {
  fcState.filter  = filter;
  fcState.cards   = buildCards(filter);
  fcState.current = 0;
  fcState.flipped = false;
  const cardEl = document.getElementById('flashcard');
  if (cardEl) cardEl.classList.remove('flipped');
  renderCard();
}

// ─── Shuffle ──────────────────────────────────────────────────
function shuffleCards() {
  const a = fcState.cards;
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  fcState.current = 0;
  fcState.flipped = false;
  const cardEl = document.getElementById('flashcard');
  if (cardEl) cardEl.classList.remove('flipped');
  renderCard();
  showToast('Cards shuffled!');
}

// ─── Populate topic filter ────────────────────────────────────
function populateTopicFilter() {
  const sel = document.getElementById('fcTopicFilter');
  if (!sel) return;

  const units  = [...new Set(QUESTIONS.map(q => q.unit))].sort();
  const topics = [...new Set(QUESTIONS.map(q => q.topic))].sort();

  sel.innerHTML = '<option value="all">All Topics</option>';
  const ugOpt = document.createElement('optgroup');
  ugOpt.label = 'By Unit';
  units.forEach(u => {
    const opt = document.createElement('option');
    opt.value = u; opt.textContent = u;
    ugOpt.appendChild(opt);
  });
  sel.appendChild(ugOpt);

  const tgOpt = document.createElement('optgroup');
  tgOpt.label = 'By Topic';
  topics.forEach(t => {
    const opt = document.createElement('option');
    opt.value = t; opt.textContent = t;
    tgOpt.appendChild(opt);
  });
  sel.appendChild(tgOpt);

  sel.addEventListener('change', () => applyFilter(sel.value));
}

// ─── Toast (reused from app.js or standalone) ─────────────────
function showToast(msg, type = '') {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.className = `toast ${type ? 'toast--' + type : ''}`;
  void toast.offsetWidth;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ─── Navbar init ──────────────────────────────────────────────
function initNavFc() {
  const hamburger = document.querySelector('.navbar__hamburger');
  const nav       = document.querySelector('.navbar__nav');
  if (!hamburger || !nav) return;
  hamburger.addEventListener('click', () => nav.classList.toggle('open'));
  document.addEventListener('click', e => {
    if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
      nav.classList.remove('open');
    }
  });
  const current = window.location.pathname.split('/').pop();
  document.querySelectorAll('.navbar__link').forEach(link => {
    if (link.getAttribute('href') === current) link.classList.add('active');
  });
}

// ─── Init ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNavFc();
  populateTopicFilter();

  fcState.cards = buildCards('all');
  renderCard();

  // Card flip
  const cardScene = document.getElementById('flashcard');
  if (cardScene) cardScene.addEventListener('click', flipCard);

  const flipBtn = document.getElementById('flipBtn');
  if (flipBtn) flipBtn.addEventListener('click', flipCard);

  // Nav
  const nextBtn = document.getElementById('fcNext');
  const prevBtn = document.getElementById('fcPrev');
  if (nextBtn) nextBtn.addEventListener('click', fcNext);
  if (prevBtn) prevBtn.addEventListener('click', fcPrev);

  // Shuffle
  const shuffleBtn = document.getElementById('fcShuffle');
  if (shuffleBtn) shuffleBtn.addEventListener('click', shuffleCards);

  // Mark buttons
  const knownBtn  = document.getElementById('markKnown');
  const reviewBtn = document.getElementById('markReview');
  if (knownBtn)  knownBtn.addEventListener('click',  () => markCard('known'));
  if (reviewBtn) reviewBtn.addEventListener('click', () => markCard('review'));

  // Keyboard support
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight' || e.key === 'n') fcNext();
    if (e.key === 'ArrowLeft'  || e.key === 'p') fcPrev();
    if (e.key === ' ' || e.key === 'f') { e.preventDefault(); flipCard(); }
    if (e.key === 'k') markCard('known');
    if (e.key === 'r') markCard('review');
  });
});
