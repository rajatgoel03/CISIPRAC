/**
 * CISI IOC Practice Platform — Progress Dashboard Logic
 * Uses Chart.js (CDN) for visualisations
 */

'use strict';

const LS_HISTORY_KEY_P = 'cisi_history';
const PASS_MARK_P      = 0.70;

function getHistory() {
  try {
    return JSON.parse(localStorage.getItem(LS_HISTORY_KEY_P)) || [];
  } catch { return []; }
}

// ─── Summary statistics ───────────────────────────────────────
function calcStats(history) {
  if (!history.length) return null;

  const scores   = history.map(h => Math.round(h.score * 100));
  const avg      = scores.reduce((a, b) => a + b, 0) / scores.length;
  const best     = Math.max(...scores);
  const total    = history.reduce((a, h) => a + h.total, 0);
  const passes   = history.filter(h => h.passed).length;

  return {
    avg:    Math.round(avg),
    best,
    total,
    passes,
    quizzes: history.length
  };
}

// ─── Topic aggregation ────────────────────────────────────────
function aggregateTopics(history) {
  const map = {};
  history.forEach(h => {
    if (!h.topicMap) return;
    Object.entries(h.topicMap).forEach(([topic, data]) => {
      if (!map[topic]) map[topic] = { correct: 0, total: 0 };
      map[topic].correct += data.correct;
      map[topic].total   += data.total;
    });
  });
  return map;
}

// ─── Render stats cards ───────────────────────────────────────
function renderStats(stats) {
  if (!stats) {
    showEmptyState();
    return;
  }

  const set = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  set('statQuizzes', stats.quizzes);
  set('statAvg',     stats.avg + '%');
  set('statBest',    stats.best + '%');
  set('statTotal',   stats.total);
  set('statPasses',  stats.passes);
}

// ─── Score history chart ──────────────────────────────────────
function renderScoreChart(history) {
  const canvas = document.getElementById('scoreChart');
  if (!canvas || typeof Chart === 'undefined') return;

  const recent = history.slice(0, 10).reverse();
  const labels = recent.map((h, i) => {
    const d = new Date(h.date);
    return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
  });
  const data   = recent.map(h => Math.round(h.score * 100));
  const colors = recent.map(h => h.passed ? 'rgba(46,204,113,0.8)' : 'rgba(231,76,60,0.8)');

  // Destroy existing chart
  if (window._scoreChart) window._scoreChart.destroy();

  window._scoreChart = new Chart(canvas, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: 'Score (%)',
        data,
        backgroundColor: 'rgba(201,162,39,0.15)',
        borderColor:     '#c9a227',
        borderWidth:     2.5,
        pointBackgroundColor: colors,
        pointBorderColor:     colors,
        pointRadius:     6,
        fill:            true,
        tension:         0.3
      }]
    },
    options: {
      responsive:          true,
      maintainAspectRatio: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => `Score: ${ctx.parsed.y}% (${ctx.parsed.y >= 70 ? 'PASS' : 'FAIL'})`
          }
        }
      },
      scales: {
        y: {
          min:   0,
          max:   100,
          ticks: { callback: v => v + '%' },
          grid:  { color: 'rgba(0,0,0,0.06)' }
        },
        x: { grid: { display: false } }
      }
    }
  });

}

// ─── Topic performance chart ──────────────────────────────────
function renderTopicChart(topicMap) {
  const canvas = document.getElementById('topicChart');
  if (!canvas || typeof Chart === 'undefined') return;

  const entries = Object.entries(topicMap).sort((a, b) => {
    const pctA = a[1].total ? a[1].correct / a[1].total : 0;
    const pctB = b[1].total ? b[1].correct / b[1].total : 0;
    return pctA - pctB;
  });

  const labels = entries.map(e => e[0]);
  const data   = entries.map(e => e[1].total ? Math.round((e[1].correct / e[1].total) * 100) : 0);
  const colors = data.map(v => v >= 70 ? 'rgba(46,204,113,0.75)' : v >= 50 ? 'rgba(243,156,18,0.75)' : 'rgba(231,76,60,0.75)');

  if (window._topicChart) window._topicChart.destroy();

  window._topicChart = new Chart(canvas, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: 'Score (%)',
        data,
        backgroundColor: colors,
        borderRadius:    4,
        borderSkipped:   false
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: {
          min:   0,
          max:   100,
          ticks: { callback: v => v + '%' },
          grid:  { color: 'rgba(0,0,0,0.06)' }
        },
        y: { grid: { display: false }, ticks: { font: { size: 11 } } }
      }
    }
  });
}

// ─── Weak areas ───────────────────────────────────────────────
function renderWeakAreas(topicMap) {
  const container = document.getElementById('weakAreas');
  if (!container) return;

  const weak = Object.entries(topicMap)
    .filter(([, d]) => d.total >= 2 && (d.correct / d.total) < 0.60)
    .sort((a, b) => (a[1].correct / a[1].total) - (b[1].correct / b[1].total));

  if (weak.length === 0) {
    container.innerHTML = '<p style="color:var(--success);font-weight:500">🎉 No significant weak areas identified yet!</p>';
    return;
  }

  container.innerHTML = weak.map(([topic, d]) => {
    const pct = Math.round((d.correct / d.total) * 100);
    return `<span class="weak-tag">${topic} (${pct}%)</span>`;
  }).join('');
}

// ─── History list ─────────────────────────────────────────────
function renderHistoryList(history) {
  const container = document.getElementById('historyList');
  if (!container) return;

  if (!history.length) {
    container.innerHTML = '<div class="empty-state"><div class="empty-state__icon">📊</div><h3>No quiz history yet</h3><p>Complete a quiz to see your progress here.</p></div>';
    return;
  }

  container.innerHTML = history.slice(0, 10).map(h => {
    const pct  = Math.round(h.score * 100);
    const date = new Date(h.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
    const mode = ({ mock: 'Mock Exam', quick: 'Quick Practice', custom: 'Custom Quiz' })[h.mode] || h.mode;
    return `
      <div class="history-row">
        <span class="history-row__date">${date}</span>
        <span class="history-row__mode">${mode} · ${h.correct}/${h.total}</span>
        <span class="history-row__score history-row__score--${h.passed ? 'pass' : 'fail'}">${pct}% ${h.passed ? '✓ PASS' : '✗ FAIL'}</span>
      </div>
    `;
  }).join('');
}

// ─── Empty / no data state ────────────────────────────────────
function showEmptyState() {
  const statFields = ['statQuizzes','statAvg','statBest','statTotal','statPasses'];
  statFields.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = '—';
  });

  const scoreChart = document.getElementById('scoreChart');
  const topicChart = document.getElementById('topicChart');
  const scoreMsg   = document.getElementById('scoreChartEmpty');
  const topicMsg   = document.getElementById('topicChartEmpty');

  if (scoreChart) scoreChart.style.display = 'none';
  if (topicChart) topicChart.style.display = 'none';
  if (scoreMsg)   scoreMsg.style.display  = 'block';
  if (topicMsg)   topicMsg.style.display  = 'block';
}

// ─── Reset ────────────────────────────────────────────────────
function resetProgress() {
  if (!confirm('Are you sure you want to reset ALL progress? This cannot be undone.')) return;
  localStorage.removeItem(LS_HISTORY_KEY_P);
  localStorage.removeItem('cisi_last_results');
  localStorage.removeItem('cisi_flashcards');
  location.reload();
}

// ─── Navbar init ──────────────────────────────────────────────
function initNavP() {
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
  initNavP();

  const history  = getHistory();
  const stats    = calcStats(history);
  const topicMap = aggregateTopics(history);

  renderStats(stats);
  renderHistoryList(history);

  if (history.length) {
    renderWeakAreas(topicMap);
    // Charts require Chart.js — wait for CDN load
    if (typeof Chart !== 'undefined') {
      renderScoreChart(history);
      renderTopicChart(topicMap);
    } else {
      // Retry after short delay
      setTimeout(() => {
        if (typeof Chart !== 'undefined') {
          renderScoreChart(history);
          renderTopicChart(topicMap);
        }
      }, 1000);
    }
  } else {
    showEmptyState();
  }

  // Reset button
  const resetBtn = document.getElementById('resetBtn');
  if (resetBtn) resetBtn.addEventListener('click', resetProgress);
});
