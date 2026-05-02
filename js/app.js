/**
 * CISI IOC Practice Platform — Main Application Logic
 * Handles quiz engine, timer, scoring, localStorage persistence
 */

'use strict';

// ─── Constants ────────────────────────────────────────────────
const PASS_MARK       = 0.70;          // 70%
const MOCK_QUESTIONS  = 80;            // Mock exam size (capped to available Qs)
const QUICK_QUESTIONS = 20;            // Quick practice size
const MOCK_DURATION   = 100 * 60;      // 1h 40m in seconds
const LS_HISTORY_KEY  = 'cisi_history';
const LS_PROGRESS_KEY = 'cisi_progress';

// ─── State ────────────────────────────────────────────────────
let state = {
  mode:          null,   // 'mock' | 'quick' | 'custom'
  questions:     [],
  current:       0,
  answers:       {},     // { questionIndex: selectedOptionIndex }
  startTime:     null,
  timerInterval: null,
  timeLeft:      null,   // seconds remaining (mock) | seconds elapsed (practice)
  submitted:     false,
  topicFilter:   'all',
  numQuestions:  QUICK_QUESTIONS
};

// ─── DOM helpers ──────────────────────────────────────────────
const $  = id => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);

// ─── URL params ───────────────────────────────────────────────
function getParams() {
  const p = new URLSearchParams(window.location.search);
  return {
    mode:  p.get('mode')  || 'quick',
    topic: p.get('topic') || 'all',
    count: parseInt(p.get('count') || QUICK_QUESTIONS, 10)
  };
}

// ─── Shuffle (Fisher-Yates) ───────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── Filter questions ─────────────────────────────────────────
function filterQuestions(topic, unit) {
  let pool = [...QUESTIONS];
  if (topic && topic !== 'all') {
    pool = pool.filter(q => q.topic === topic || q.unit === topic);
  }
  if (unit && unit !== 'all') {
    pool = pool.filter(q => q.unit === unit);
  }
  return pool;
}

// ─── Build quiz ───────────────────────────────────────────────
function buildQuiz(mode, topic, count) {
  let pool = filterQuestions(topic);
  pool = shuffle(pool);

  if (mode === 'mock') {
    count = Math.min(MOCK_QUESTIONS, pool.length);
  } else {
    count = Math.min(count || QUICK_QUESTIONS, pool.length);
  }

  return pool.slice(0, count);
}

// ─── Timer ────────────────────────────────────────────────────
function formatTime(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  if (h > 0) return `${h}:${pad(m)}:${pad(s)}`;
  return `${pad(m)}:${pad(s)}`;
}

function pad(n) { return String(n).padStart(2, '0'); }

function startTimer() {
  const timerEl = $('timer');
  if (!timerEl) return;

  if (state.mode === 'mock') {
    state.timeLeft = MOCK_DURATION;
    timerEl.textContent = formatTime(state.timeLeft);

    state.timerInterval = setInterval(() => {
      state.timeLeft--;
      timerEl.textContent = formatTime(state.timeLeft);

      // Colour coding
      timerEl.parentElement.classList.remove('timer--warning', 'timer--danger');
      if (state.timeLeft <= 300)       timerEl.parentElement.classList.add('timer--danger');
      else if (state.timeLeft <= 600)  timerEl.parentElement.classList.add('timer--warning');

      if (state.timeLeft <= 0) {
        clearInterval(state.timerInterval);
        submitQuiz();
      }
    }, 1000);
  } else {
    // Stopwatch for practice
    state.timeLeft = 0;
    timerEl.textContent = formatTime(0);
    state.timerInterval = setInterval(() => {
      state.timeLeft++;
      timerEl.textContent = formatTime(state.timeLeft);
    }, 1000);
  }
}

function stopTimer() {
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
}

// ─── Render current question ──────────────────────────────────
function renderQuestion() {
  const q = state.questions[state.current];
  if (!q) return;

  const total = state.questions.length;
  const answered = Object.keys(state.answers).length;
  const pct = Math.round((state.current / total) * 100);

  // Progress bar
  const pb = $('progressBar');
  if (pb) pb.style.width = pct + '%';

  // Indicators
  setText('questionNum',   `Question ${state.current + 1} of ${total}`);
  setText('answeredCount', `${answered} answered`);

  // Unit / topic label
  setText('questionUnit', `${q.unit} · ${q.topic}`);
  setText('questionText', q.question);

  // Options
  const optionsList = $('optionsList');
  if (!optionsList) return;
  optionsList.innerHTML = '';

  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.setAttribute('aria-label', `Option ${String.fromCharCode(65 + idx)}`);
    btn.setAttribute('data-index', idx);

    const letter = document.createElement('span');
    letter.className = 'option-btn__letter';
    letter.textContent = String.fromCharCode(65 + idx);

    const text = document.createElement('span');
    text.textContent = opt.replace(/^[A-D]\.\s*/, '');

    btn.appendChild(letter);
    btn.appendChild(text);

    // Restore selected state
    if (state.answers[state.current] === idx) {
      btn.classList.add('selected');
    }

    btn.addEventListener('click', () => selectAnswer(idx));
    optionsList.appendChild(btn);
  });

  // Nav buttons
  const prevBtn = $('prevBtn');
  const nextBtn = $('nextBtn');
  if (prevBtn) prevBtn.disabled = state.current === 0;
  if (nextBtn) {
    nextBtn.textContent = state.current === total - 1 ? 'Review' : 'Next →';
  }

  // Hide explanation
  const expBox = $('explanationBox');
  if (expBox) expBox.classList.remove('show');

  // Update Q dots
  updateDots();
}

function setText(id, text) {
  const el = $(id);
  if (el) el.textContent = text;
}

// ─── Select answer ────────────────────────────────────────────
function selectAnswer(idx) {
  if (state.submitted) return;
  state.answers[state.current] = idx;

  // Update button states
  $$('#optionsList .option-btn').forEach((btn, i) => {
    btn.classList.toggle('selected', i === idx);
  });

  updateDots();
}

// ─── Navigation ───────────────────────────────────────────────
function goToQuestion(index) {
  if (index < 0 || index >= state.questions.length) return;
  state.current = index;
  renderQuestion();
}

function nextQuestion() {
  if (state.current < state.questions.length - 1) {
    state.current++;
    renderQuestion();
  } else {
    // Last question — open submit modal
    showSubmitModal();
  }
}

function prevQuestion() {
  if (state.current > 0) {
    state.current--;
    renderQuestion();
  }
}

// ─── Question dot grid ────────────────────────────────────────
function renderDots() {
  const grid = $('questionGrid');
  if (!grid) return;
  grid.innerHTML = '';

  state.questions.forEach((_, idx) => {
    const dot = document.createElement('button');
    dot.className = 'q-dot';
    dot.textContent = idx + 1;
    dot.setAttribute('aria-label', `Go to question ${idx + 1}`);
    dot.addEventListener('click', () => goToQuestion(idx));
    grid.appendChild(dot);
  });
}

function updateDots() {
  const dots = $$('#questionGrid .q-dot');
  dots.forEach((dot, idx) => {
    dot.classList.remove('answered', 'current');
    if (idx === state.current)           dot.classList.add('current');
    else if (state.answers[idx] !== undefined) dot.classList.add('answered');
  });
}

// ─── Submit ───────────────────────────────────────────────────
function showSubmitModal() {
  const unanswered = state.questions.length - Object.keys(state.answers).length;
  const msg = $('submitModalMsg');
  if (msg) {
    if (unanswered > 0) {
      msg.textContent = `You have ${unanswered} unanswered question${unanswered > 1 ? 's' : ''}. Are you sure you want to submit?`;
    } else {
      msg.textContent = 'You have answered all questions. Ready to submit?';
    }
  }
  openModal('submitModal');
}

function submitQuiz() {
  stopTimer();
  state.submitted = true;
  closeModal('submitModal');

  // Calculate results
  const results = calculateResults();

  // Save to localStorage
  saveHistory(results);

  // Redirect to results page
  const params = new URLSearchParams({
    score:    results.score,
    total:    results.total,
    correct:  results.correct,
    time:     results.timeTaken,
    mode:     state.mode
  });

  // Store full results data for results page
  localStorage.setItem('cisi_last_results', JSON.stringify(results));

  window.location.href = 'results.html?' + params.toString();
}

// ─── Calculate results ────────────────────────────────────────
function calculateResults() {
  const total   = state.questions.length;
  const correct = state.questions.reduce((acc, q, idx) => {
    return acc + (state.answers[idx] === q.correct ? 1 : 0);
  }, 0);

  const score    = correct / total;
  const passed   = score >= PASS_MARK;
  const timeTaken = state.mode === 'mock'
    ? MOCK_DURATION - state.timeLeft
    : state.timeLeft;

  // Topic breakdown
  const topicMap = {};
  state.questions.forEach((q, idx) => {
    if (!topicMap[q.topic]) topicMap[q.topic] = { correct: 0, total: 0 };
    topicMap[q.topic].total++;
    if (state.answers[idx] === q.correct) topicMap[q.topic].correct++;
  });

  // Per-question detail
  const detail = state.questions.map((q, idx) => ({
    id:            q.id,
    question:      q.question,
    options:       q.options,
    correct:       q.correct,
    selected:      state.answers[idx] !== undefined ? state.answers[idx] : null,
    isCorrect:     state.answers[idx] === q.correct,
    explanation:   q.explanation,
    unit:          q.unit,
    topic:         q.topic
  }));

  return { total, correct, score, passed, timeTaken, topicMap, detail, mode: state.mode };
}

// ─── LocalStorage helpers ─────────────────────────────────────
function saveHistory(results) {
  const history = getHistory();
  history.unshift({
    date:     new Date().toISOString(),
    mode:     results.mode,
    score:    results.score,
    correct:  results.correct,
    total:    results.total,
    passed:   results.passed,
    topicMap: results.topicMap
  });
  // Keep last 20
  const trimmed = history.slice(0, 20);
  localStorage.setItem(LS_HISTORY_KEY, JSON.stringify(trimmed));
}

function getHistory() {
  try {
    return JSON.parse(localStorage.getItem(LS_HISTORY_KEY)) || [];
  } catch { return []; }
}

function getLastResults() {
  try {
    return JSON.parse(localStorage.getItem('cisi_last_results'));
  } catch { return null; }
}

// ─── Modal helpers ────────────────────────────────────────────
function openModal(id) {
  const overlay = $(id);
  if (overlay) overlay.classList.add('open');
}

function closeModal(id) {
  const overlay = $(id);
  if (overlay) overlay.classList.remove('open');
}

// ─── Toast ────────────────────────────────────────────────────
function showToast(msg, type = '') {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.className = `toast ${type ? 'toast--' + type : ''}`;
  // Force reflow
  void toast.offsetWidth;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ─── Navbar hamburger ─────────────────────────────────────────
function initNav() {
  const hamburger = document.querySelector('.navbar__hamburger');
  const nav       = document.querySelector('.navbar__nav');
  if (!hamburger || !nav) return;

  hamburger.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open);
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
      nav.classList.remove('open');
    }
  });

  // Highlight active link
  const current = window.location.pathname.split('/').pop() || 'index.html';
  $$('.navbar__link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ─── Quiz page initialisation ─────────────────────────────────
function initQuizPage() {
  const { mode, topic, count } = getParams();
  state.mode         = mode;
  state.topicFilter  = topic;
  state.numQuestions = count;
  state.questions    = buildQuiz(mode, topic, count);
  state.startTime    = Date.now();

  if (state.questions.length === 0) {
    alert('No questions available for the selected filter. Returning home.');
    window.location.href = 'index.html';
    return;
  }

  // Update mode label
  const modeLabel = $('modeLabel');
  if (modeLabel) {
    const labels = { mock: '📝 Mock Exam', quick: '⚡ Quick Practice', custom: '⚙️ Custom Quiz' };
    modeLabel.textContent = labels[mode] || 'Practice Quiz';
  }

  // Render question dots
  renderDots();

  // Render first question
  renderQuestion();

  // Start timer
  startTimer();

  // Button listeners
  const prevBtn   = $('prevBtn');
  const nextBtn   = $('nextBtn');
  const submitBtn = $('submitBtn');

  if (prevBtn) prevBtn.addEventListener('click', prevQuestion);
  if (nextBtn) nextBtn.addEventListener('click', nextQuestion);
  if (submitBtn) submitBtn.addEventListener('click', showSubmitModal);

  // Modal buttons
  const confirmSubmit = $('confirmSubmit');
  const cancelSubmit  = $('cancelSubmit');
  if (confirmSubmit) confirmSubmit.addEventListener('click', submitQuiz);
  if (cancelSubmit)  cancelSubmit.addEventListener('click', () => closeModal('submitModal'));

  // Keyboard nav
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') nextQuestion();
    if (e.key === 'ArrowLeft')  prevQuestion();
    if (e.key >= '1' && e.key <= '4') {
      selectAnswer(parseInt(e.key) - 1);
    }
  });

  // Warn before leaving
  window.addEventListener('beforeunload', e => {
    if (!state.submitted) {
      e.preventDefault();
      e.returnValue = '';
    }
  });
}

// ─── Results page initialisation ─────────────────────────────
function initResultsPage() {
  const results = getLastResults();
  if (!results) {
    window.location.href = 'index.html';
    return;
  }

  const { total, correct, score, passed, timeTaken, topicMap, detail, mode } = results;
  const pct = Math.round(score * 100);

  // Score ring
  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (score * circumference);
  const fillEl = $('scoreRingFill');
  if (fillEl) {
    fillEl.style.strokeDasharray  = circumference;
    fillEl.style.strokeDashoffset = circumference;
    setTimeout(() => { fillEl.style.strokeDashoffset = offset; }, 100);
  }
  setText('scorePct',   pct + '%');
  setText('scoreLabel', passed ? 'PASS' : 'FAIL');

  // Pass badge
  const passBadge = $('passBadge');
  if (passBadge) {
    passBadge.textContent = passed ? '✓ PASS' : '✗ FAIL';
    passBadge.className = `pass-badge ${passed ? 'pass-badge--pass' : 'pass-badge--fail'}`;
  }

  setText('resultCorrect', correct + '/' + total);
  setText('resultMode',    modeLabel(mode));
  setText('resultTime',    formatTime(timeTaken));

  // Topic breakdown
  renderTopicBreakdown(topicMap);

  // Question review
  renderQuestionReview(detail);

  // Retake button
  const retakeBtn = $('retakeBtn');
  if (retakeBtn) {
    retakeBtn.href = `quiz.html?mode=${mode}&topic=all&count=${total}`;
  }
}

function modeLabel(m) {
  const map = { mock: 'Mock Exam', quick: 'Quick Practice', custom: 'Custom Quiz' };
  return map[m] || 'Practice Quiz';
}

function renderTopicBreakdown(topicMap) {
  const container = $('topicBreakdown');
  if (!container) return;
  container.innerHTML = '';

  Object.entries(topicMap).forEach(([topic, data]) => {
    const pct  = data.total ? Math.round((data.correct / data.total) * 100) : 0;
    const pass = pct >= 70;

    const row = document.createElement('div');
    row.className = 'topic-row';
    row.innerHTML = `
      <span class="topic-row__name">${topic}</span>
      <div class="topic-row__bar">
        <div class="progress-bar-wrapper">
          <div class="progress-bar" style="width:${pct}%; background:${pass ? 'var(--success)' : pct >= 50 ? 'var(--warning)' : 'var(--error)'}"></div>
        </div>
      </div>
      <span class="topic-row__score ${pass ? 'text-success' : 'text-error'}">${data.correct}/${data.total} (${pct}%)</span>
    `;
    container.appendChild(row);
  });
}

function renderQuestionReview(detail) {
  const container = $('questionReview');
  if (!container) return;
  container.innerHTML = '';

  detail.forEach((item, idx) => {
    const div = document.createElement('div');
    div.className = 'review-item';

    const selectedText = item.selected !== null
      ? item.options[item.selected].replace(/^[A-D]\.\s*/, '')
      : 'Not answered';
    const correctText  = item.options[item.correct].replace(/^[A-D]\.\s*/, '');

    div.innerHTML = `
      <div class="review-item__header">
        <div class="review-item__num review-item__num--${item.isCorrect ? 'correct' : 'incorrect'}">${idx + 1}</div>
        <div class="review-item__question">${item.question}</div>
        <span class="review-item__chevron">▼</span>
      </div>
      <div class="review-item__body">
        <p class="review-answer review-answer--${item.isCorrect ? 'correct' : 'incorrect'}">
          <strong>Your answer:</strong> ${selectedText}
        </p>
        ${!item.isCorrect ? `<p class="review-answer review-answer--correct"><strong>Correct answer:</strong> ${correctText}</p>` : ''}
        <div class="explanation-box show">
          <div class="explanation-box__label">Explanation</div>
          <div class="explanation-box__text">${item.explanation}</div>
        </div>
      </div>
    `;

    // Toggle on click
    div.querySelector('.review-item__header').addEventListener('click', () => {
      div.classList.toggle('open');
    });

    container.appendChild(div);
  });
}

// ─── Home page initialisation ─────────────────────────────────
function initHomePage() {
  // Build topic dropdown
  const topics = [...new Set(QUESTIONS.map(q => q.topic))].sort();
  const units  = [...new Set(QUESTIONS.map(q => q.unit))].sort();

  const topicSel = $('topicSelect');
  if (topicSel) {
    topicSel.innerHTML = '<option value="all">All Topics</option>';
    units.forEach(u => {
      const opt = document.createElement('option');
      opt.value = u;
      opt.textContent = u;
      topicSel.appendChild(opt);
    });
    topics.forEach(t => {
      const opt = document.createElement('option');
      opt.value = t;
      opt.textContent = t;
      topicSel.appendChild(opt);
    });
  }

  // Count input range
  const countInput = $('countInput');
  const countLabel = $('countLabel');
  if (countInput && countLabel) {
    countInput.addEventListener('input', () => {
      countLabel.textContent = countInput.value;
    });
  }

  // Start buttons
  const startMock  = $('startMock');
  const startQuick = $('startQuick');
  const startCustom= $('startCustom');

  if (startMock)   startMock.addEventListener('click',   () => startMode('mock'));
  if (startQuick)  startQuick.addEventListener('click',  () => startMode('quick'));
  if (startCustom) startCustom.addEventListener('click', () => startMode('custom'));

  // Recent history
  renderRecentHistory();
}

function startMode(mode) {
  const topic = $('topicSelect')  ? $('topicSelect').value  : 'all';
  const count = $('countInput')   ? $('countInput').value   : QUICK_QUESTIONS;
  window.location.href = `quiz.html?mode=${mode}&topic=${encodeURIComponent(topic)}&count=${count}`;
}

function renderRecentHistory() {
  const history = getHistory().slice(0, 5);
  const container = $('recentHistory');
  if (!container) return;

  if (history.length === 0) {
    container.innerHTML = '<p class="text-center" style="color:var(--text-light);padding:1.5rem 0">No quiz history yet. Take your first quiz!</p>';
    return;
  }

  container.innerHTML = history.map(h => {
    const pct  = Math.round(h.score * 100);
    const date = new Date(h.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    return `
      <div class="history-row">
        <span class="history-row__date">${date}</span>
        <span class="history-row__mode">${modeLabel(h.mode)}</span>
        <span class="history-row__score history-row__score--${h.passed ? 'pass' : 'fail'}">${pct}% ${h.passed ? '✓' : '✗'}</span>
      </div>
    `;
  }).join('');
}

// ─── Auto-init based on page ──────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNav();

  const page = window.location.pathname.split('/').pop() || 'index.html';

  if (page === 'quiz.html')    initQuizPage();
  if (page === 'results.html') initResultsPage();
  if (page === 'index.html' || page === '') initHomePage();
});
