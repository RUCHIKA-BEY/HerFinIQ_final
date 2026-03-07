import { appShell } from './shell';
import { useTranslation } from '../i18n';

export const dashboardPage = (lang: string = 'en') => {
  const { t } = useTranslation(lang);
  const content = `
<div class="welcome-banner animate-fade">
  <div class="welcome-text" id="welcomeText">Good Day! 🌸</div>
  <p class="welcome-sub">Your financial confidence score is growing. Keep learning to unlock more opportunities!</p>
  <div class="welcome-actions">
    <a href="/assessment?lang=${lang}" class="welcome-btn primary">📝 Take Assessment</a>
    <a href="/learning?lang=${lang}" class="welcome-btn outline">📚 Continue Learning</a>
    <a href="/ai-assistant?lang=${lang}" class="welcome-btn outline">🤖 Ask AI Mentor</a>
  </div>
</div>

<!-- SCORE CARDS -->
<div class="grid-3 animate-fade" style="margin-bottom:24px">
  <div class="card" style="padding:24px;text-align:center">
    <div style="font-size:0.75rem;color:var(--text-muted);margin-bottom:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em">Credit & Confidence Score</div>
    <div class="conf-arc-wrap" style="height:120px">
      <svg class="gauge-svg" viewBox="0 0 140 90" style="width:180px; height:auto">
        <path d="M 20 80 A 50 50 0 0 1 120 80" fill="none" stroke="#E5E7EB" stroke-width="12" stroke-linecap="round"/>
        <path id="confidenceArc" d="M 20 80 A 50 50 0 0 1 120 80" fill="none" stroke="url(#gradDashboard)" stroke-width="12" stroke-linecap="round" stroke-dasharray="157" stroke-dashoffset="157" style="transition: stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)"/>
        <defs>
          <linearGradient id="gradDashboard" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#F43F5E"/>
            <stop offset="50%" style="stop-color:#F59E0B"/>
            <stop offset="100%" style="stop-color:#10B981"/>
          </linearGradient>
        </defs>
      </svg>
      <div class="gauge-text" style="bottom:10px">
        <div class="gauge-value" id="confScoreDisplay" style="font-size:2.2rem">72</div>
        <div class="gauge-label">Points</div>
      </div>
    </div>
    <div style="margin-top:5px"><span class="badge badge-primary" id="confidenceBadge">Good</span></div>
  </div>
  
  <div class="card" style="padding:24px;text-align:center">
    <div style="font-size:0.75rem;color:var(--text-muted);margin-bottom:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em">Financial Literacy</div>
    <div style="position:relative; width:100px; height:100px; margin:0 auto 10px">
        <svg viewBox="0 0 36 36" style="width:100px; height:100px; transform:rotate(-90deg)">
            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#eee" stroke-width="3" />
            <path id="literacyCircle" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="var(--primary)" stroke-width="3" stroke-dasharray="0, 100" style="transition: stroke-dasharray 1s ease" />
        </svg>
        <div style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); font-family:'Poppins',sans-serif; font-weight:800; font-size:1.6rem" id="literacyDisplay">62</div>
    </div>
    <div style="font-size:0.85rem;color:var(--text-muted);margin-bottom:12px">Advanced Learner</div>
    <div style="margin-top:5px"><span class="badge badge-success">Above Average</span></div>
  </div>
  
  <div class="card" style="padding:24px;text-align:center">
    <div style="font-size:0.75rem;color:var(--text-muted);margin-bottom:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em">Risk Profile</div>
    <div style="font-size:3.5rem;margin-bottom:10px" id="riskEmoji">⚖️</div>
    <div style="font-family:'Poppins',sans-serif;font-size:1.4rem;font-weight:700;color:var(--text);line-height:1" id="riskDisplay">Moderate</div>
    <div style="font-size:0.82rem;color:var(--text-muted);margin-top:8px">Balanced Portfolio</div>
    <div style="margin-top:10px"><span class="badge badge-warning" id="riskBadge">Moderate Risk</span></div>
  </div>
</div>

<!-- XP & LEVEL -->
<div class="grid-2" style="margin-bottom:24px">
  <div class="card card-body">
    <div class="card-title" style="margin-bottom:20px">⭐ Progress Tracker</div>
    <div style="display:flex;align-items:center;gap:20px;margin-bottom:24px">
      <div style="width:64px;height:64px;border-radius:18px;background:linear-gradient(135deg,var(--primary),var(--primary-light));display:flex;align-items:center;justify-content:center;color:white;font-family:'Poppins',sans-serif;font-weight:800;font-size:1.6rem;box-shadow:0 8px 16px rgba(91,62,255,0.2)" id="levelBadge">4</div>
      <div style="flex:1">
        <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:8px">
            <div style="font-family:'Poppins',sans-serif;font-weight:700;font-size:1.1rem">Level <span id="levelNum">4</span> Expert</div>
            <div style="font-size:0.85rem;color:var(--text-muted)" id="xpText">1,240 XP</div>
        </div>
        <div class="progress-bar-wrap" style="height:12px">
          <div class="progress-bar" id="xpBar" style="width:83%"></div>
        </div>
        <div style="font-size:0.75rem;color:var(--text-muted);margin-top:6px" id="xpPct">83% to Level 5</div>
      </div>
    </div>
    
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px">
      <div style="text-align:center;padding:14px;background:var(--bg);border-radius:16px;border:1px solid var(--border)">
        <div style="font-family:'Poppins',sans-serif;font-size:1.4rem;font-weight:800;color:var(--primary)" id="completedModules">5</div>
        <div style="font-size:0.75rem;color:var(--text-muted);margin-top:2px">Modules</div>
      </div>
      <div style="text-align:center;padding:14px;background:var(--bg);border-radius:16px;border:1px solid var(--border)">
        <div style="font-family:'Poppins',sans-serif;font-size:1.4rem;font-weight:800;color:var(--success)" id="badgesCount">8</div>
        <div style="font-size:0.75rem;color:var(--text-muted);margin-top:2px">Badges</div>
      </div>
      <div style="text-align:center;padding:14px;background:var(--bg);border-radius:16px;border:1px solid var(--border)">
        <div style="font-family:'Poppins',sans-serif;font-size:1.4rem;font-weight:800;color:var(--accent)">12</div>
        <div style="font-size:0.75rem;color:var(--text-muted);margin-top:2px">Streak</div>
      </div>
    </div>
  </div>
  
  <div class="card card-body">
    <div class="card-title" style="margin-bottom:20px">⚡ Quick Actions</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
      <a href="/learning?lang=${lang}" class="quick-action">
        <span class="quick-action-icon">📚</span>
        <div class="quick-action-label">Learning Hub</div>
        <div class="quick-action-sub">3 pending</div>
      </a>
      <a href="/planner?lang=${lang}" class="quick-action">
        <span class="quick-action-icon">💰</span>
        <div class="quick-action-label">Budget Tracker</div>
        <div class="quick-action-sub">Log expense</div>
      </a>
      <a href="/ai-assistant?lang=${lang}" class="quick-action">
        <span class="quick-action-icon">🤖</span>
        <div class="quick-action-label">AI Mentor</div>
        <div class="quick-action-sub">Ask anything</div>
      </a>
      <a href="/simulator?lang=${lang}" class="quick-action">
        <span class="quick-action-icon">🎮</span>
        <div class="quick-action-label">Simulate</div>
        <div class="quick-action-sub">Trade stocks</div>
      </a>
    </div>
  </div>
</div>

<!-- FINANCIAL HEALTH CHART -->
<div class="card animate-fade" style="margin-bottom:24px">
  <div class="card-header">
    <div style="display:flex; align-items:center; gap:12px">
        <div style="width:10px; height:24px; background:var(--primary); border-radius:4px"></div>
        <div class="card-title">Financial Health Overview</div>
    </div>
    <select style="font-size:0.8rem;border:1px solid var(--border);border-radius:8px;padding:6px 12px;background:var(--white)" onchange="window.updateDashboardChart(this.value)">
      <option value="month">This Month</option>
      <option value="week">This Week</option>
      <option value="6m">Last 6 Months</option>
    </select>
  </div>
  <div style="padding: 24px; height:340px">
    <canvas id="healthChartMain" style="width:100%; height:300px; display:block;"></canvas>
  </div>
</div>

<div class="grid-2" style="margin-bottom:24px">
  <div class="card">
    <div class="card-header"><div class="card-title">🎯 Continue Learning</div></div>
    <div class="card-body" style="display:flex;flex-direction:column;gap:14px">
      <div class="module-card">
        <div class="module-header">
          <div class="module-icon" style="background:rgba(91,62,255,0.1)">📊</div>
          <div class="module-info">
            <div class="module-title">SIP Investing Mastery</div>
            <div class="module-desc">Systematic wealth building steps.</div>
          </div>
        </div>
        <div class="progress-bar-wrap"><div class="progress-bar" style="width:65%"></div></div>
        <div class="module-meta">
          <span class="badge badge-primary">In Progress</span>
          <span style="font-size:0.7rem; color:var(--text-muted)">65% Done</span>
        </div>
      </div>
      <div class="module-card">
        <div class="module-header">
          <div class="module-icon" style="background:rgba(16,185,129,0.1)">🏗️</div>
          <div class="module-info">
            <div class="module-title">Startup Fundamentals</div>
            <div class="module-desc">How to launch your dream business.</div>
          </div>
        </div>
        <div class="progress-bar-wrap"><div class="progress-bar green" style="width:30%"></div></div>
        <div class="module-meta">
          <span class="badge badge-success">Trending</span>
          <span style="font-size:0.7rem; color:var(--text-muted)">30% Done</span>
        </div>
      </div>
    </div>
  </div>
  
  <div class="card">
    <div class="card-header"><div class="card-title">💡 Insight of the Day</div></div>
    <div class="card-body">
      <div class="tip-card" style="margin-bottom:20px; min-height:120px; display:flex; flex-direction:column; justify-content:center">
        <div class="tip-label">Smart Investing</div>
        <div class="tip-text" id="dailyTipMain">Consistency beats intensity. Investing ₹2,000 every month is better than ₹50,000 once a year. Start early to leverage compounding power!</div>
      </div>
      <button class="btn btn-ghost" style="width:100%" onclick="window.nextDashboardTip()">Get New Tip →</button>
    </div>
  </div>
</div>

<script>
(function() {
  console.log('[HerFinIQ Dashboard] Script tag parsed, scheduling init...');

  function initChart() {
    console.log('[HerFinIQ Dashboard] Trying to init chart...');
    const canvas = document.getElementById('healthChartMain');
    if (!canvas) { console.log('Canvas not found, retrying...'); setTimeout(initChart, 300); return; }
    if (typeof Chart === 'undefined') { console.log('Chart.js not ready, retrying...'); setTimeout(initChart, 300); return; }
    if (window.mainChart) { window.mainChart.destroy(); window.mainChart = null; }
    console.log('[HerFinIQ Dashboard] Creating chart!');
    window.mainChart = new Chart(canvas, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          { label: 'Savings (\u20B9)', data: [8000, 12000, 9500, 15000, 11000, 18000, 14000], borderColor: '#10B981', borderWidth: 3, backgroundColor: 'rgba(16,185,129,0.08)', fill: true, tension: 0.4, pointRadius: 5 },
          { label: 'Expenses (\u20B9)', data: [5000, 7000, 11000, 6000, 9000, 12000, 8000], borderColor: '#FF6B6B', borderWidth: 3, backgroundColor: 'rgba(255,107,107,0.08)', fill: true, tension: 0.4, pointRadius: 5 }
        ]
      },
      options: {
        responsive: false,
        maintainAspectRatio: false,
        plugins: { legend: { position: 'top', labels: { font: { size: 12 }, padding: 16, usePointStyle: true } } },
        scales: {
          y: { grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { callback: function(v) { return '\u20B9' + Number(v).toLocaleString('en-IN'); } } },
          x: { grid: { display: false } }
        }
      }
    });

    window.updateDashboardChart = function(period) {
      if (!window.mainChart) return;
      const m = {
        'week': { l: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'], s: [8000,12000,9500,15000,11000,18000,14000], e: [5000,7000,11000,6000,9000,12000,8000] },
        'month': { l: ['Week 1','Week 2','Week 3','Week 4'], s: [45000,38000,52000,48000], e: [32000,28000,35000,30000] },
        '6m': { l: ['Oct','Nov','Dec','Jan','Feb','Mar'], s: [180000,210000,195000,240000,220000,260000], e: [120000,140000,110000,150000,130000,160000] }
      };
      const d = m[period] || m.month;
      window.mainChart.data.labels = d.l;
      window.mainChart.data.datasets[0].data = d.s;
      window.mainChart.data.datasets[1].data = d.e;
      window.mainChart.update();
    };
  }

  function init() {
    console.log('[HerFinIQ Dashboard] init() called');
    const userData = JSON.parse(localStorage.getItem('herfiniq_user') || '{}');
    if (userData.name) {
      const el = document.getElementById('welcomeText');
      if (el) el.textContent = 'Welcome back, ' + userData.name.split(' ')[0] + '! \uD83C\uDF38';
    }
    const conf = userData.confidenceScore || 72;
    const lit = userData.literacyScore || 62;
    const confEl = document.getElementById('confScoreDisplay');
    if (confEl) confEl.textContent = conf;
    const litEl = document.getElementById('literacyDisplay');
    if (litEl) litEl.textContent = lit;
    const riskEl = document.getElementById('riskDisplay');
    if (riskEl) riskEl.textContent = userData.riskProfile || 'Moderate';

    setTimeout(function() {
      const arc = document.getElementById('confidenceArc');
      if (arc) arc.style.strokeDashoffset = 157 - (157 * conf / 100);
      const circle = document.getElementById('literacyCircle');
      if (circle) circle.style.strokeDasharray = lit + ', 100';
      const xpBar = document.getElementById('xpBar');
      if (xpBar) xpBar.style.width = '83%';
    }, 600);

    const tips = [
      'Consistency beats intensity. Investing \u20B92,000/month beats \u20B950,000 once a year.',
      'Emergency fund first! Save 6 months of expenses before investing aggressively.',
      'Diversify! Do not put all your money in one asset class.',
      'Best time to invest was yesterday. Second best time is today!',
      'Inflation erodes idle cash. Equity usually beats inflation long-term.'
    ];
    window.nextDashboardTip = function() {
      const tipText = document.getElementById('dailyTipMain');
      if (!tipText) return;
      tipText.style.opacity = 0;
      setTimeout(function() {
        tipText.textContent = tips[Math.floor(Math.random() * tips.length)];
        tipText.style.opacity = 1;
      }, 300);
    };
  }

  // Run init immediately (DOM is synchronously available when this script tag is parsed)
  init();
  // Wait a bit then init chart (Chart.js from CDN may need a moment)
  setTimeout(initChart, 800);
})();
</script>
<style>
  #dailyTipMain { transition: opacity 0.3s ease; }
</style>
`;

  return appShell(content, lang, 'Dashboard');
};
