import { appShell } from './shell';

export const progressPage = (lang: string = 'en') => {
  const content = `
<div style="margin-bottom:24px">
  <h2 style="font-family:'Poppins',sans-serif;font-size:1.5rem;font-weight:700;color:var(--text);margin-bottom:4px">🏆 Progress & Achievements</h2>
  <p style="color:var(--text-muted);font-size:0.9rem">Track your financial literacy journey and celebrate milestones</p>
</div>

<!-- OVERVIEW CARDS -->
<div class="grid-4" style="margin-bottom:24px">
  <div class="stat-card" style="background:linear-gradient(135deg,var(--primary),#7C3AED);color:white;border:none">
    <div style="font-size:2rem;margin-bottom:4px">⭐</div>
    <div style="font-family:'Poppins',sans-serif;font-size:2rem;font-weight:700" id="totalXP">1,240</div>
    <div style="opacity:0.85;font-size:0.78rem">Total XP Earned</div>
  </div>
  <div class="stat-card">
    <div class="stat-icon purple">🎯</div>
    <div class="stat-value" id="currentLevel">4</div>
    <div class="stat-label">Current Level</div>
    <div class="stat-change up">Investor</div>
  </div>
  <div class="stat-card">
    <div class="stat-icon green">🏅</div>
    <div class="stat-value" id="badgesEarned">3</div>
    <div class="stat-label">Badges Earned</div>
    <div class="stat-change up">of 12 total</div>
  </div>
  <div class="stat-card">
    <div class="stat-icon coral">🔥</div>
    <div class="stat-value">12</div>
    <div class="stat-label">Day Streak</div>
    <div class="stat-change up">Keep it up!</div>
  </div>
</div>

<!-- CONFIDENCE CHART + LEVEL PROGRESS -->
<div class="grid-2" style="margin-bottom:24px">
  <div class="card">
    <div class="card-header"><div class="card-title">📈 Confidence Score Journey</div></div>
    <div class="card-body"><canvas id="confidenceChart" height="200"></canvas></div>
  </div>
  
  <div class="card card-body">
    <div class="card-title" style="margin-bottom:20px">🚀 Level Progress</div>
    <div style="display:flex;align-items:center;gap:14px;margin-bottom:20px">
      <div style="width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,var(--primary),var(--primary-light));display:flex;align-items:center;justify-content:center;color:white;font-family:'Poppins',sans-serif;font-weight:700;font-size:1.5rem;flex-shrink:0" id="levelCircle">4</div>
      <div style="flex:1">
        <div style="font-family:'Poppins',sans-serif;font-weight:700;font-size:1rem" id="levelTitle">Level 4 – Investor</div>
        <div style="font-size:0.78rem;color:var(--text-muted);margin:4px 0" id="levelXPText">1,240 / 1,500 XP to next level</div>
        <div class="progress-bar-wrap"><div class="progress-bar" id="levelBar" style="width:0%"></div></div>
        <div style="font-size:0.72rem;color:var(--primary);margin-top:4px" id="levelPct">83% complete</div>
      </div>
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${[
      { level: 1, title: 'Savers', xp: 0, req: 100, done: true },
      { level: 2, title: 'Learner', xp: 100, req: 300, done: true },
      { level: 3, title: 'Explorer', xp: 300, req: 600, done: true },
      { level: 4, title: 'Investor', xp: 600, req: 1500, done: false, current: true },
      { level: 5, title: 'Strategist', xp: 1500, req: 3000, done: false },
      { level: 6, title: 'Expert', xp: 3000, req: 6000, done: false },
    ].map(l => `<div style="display:flex;align-items:center;gap:10px;padding:8px;border-radius:10px;background:${l.current ? 'rgba(91,62,255,0.06)' : l.done ? 'rgba(16,185,129,0.04)' : 'var(--bg)'};border:1px solid ${l.current ? 'rgba(91,62,255,0.2)' : l.done ? 'rgba(16,185,129,0.15)' : 'var(--border)'}">
        <div style="width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:0.75rem;font-weight:700;background:${l.done ? 'var(--success)' : l.current ? 'var(--primary)' : 'var(--border)'};color:${l.done || l.current ? 'white' : 'var(--text-muted)'}">${l.done ? '✓' : l.level}</div>
        <div style="flex:1;font-size:0.82rem;font-weight:${l.current ? '700' : '500'};color:${l.current ? 'var(--primary)' : l.done ? 'var(--success)' : 'var(--text-muted)'}">${l.title}</div>
        <div style="font-size:0.7rem;color:var(--text-muted)">${l.req} XP</div>
      </div>`).join('')}
    </div>
  </div>
</div>

<!-- BADGES -->
<div class="card" style="margin-bottom:24px">
  <div class="card-header">
    <div class="card-title">🏅 Achievement Badges</div>
    <span class="badge badge-primary" id="badgeCount">3 / 12 earned</span>
  </div>
  <div class="card-body">
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:14px" id="badgesGrid">
      ${[
      { id: 'first_steps', name: 'First Steps', desc: 'Completed account setup', icon: '🚀', earned: true },
      { id: 'quick_learner', name: 'Quick Learner', desc: 'Completed first module', icon: '📚', earned: true },
      { id: 'sip_master', name: 'SIP Master', desc: 'Mastered SIP investing', icon: '📈', earned: true },
      { id: 'quiz_ace', name: 'Quiz Ace', desc: 'Score 100% in 3 quizzes', icon: '🧠', earned: false },
      { id: 'saver', name: 'Budget Saver', desc: 'Track 30 days of expenses', icon: '💰', earned: false },
      { id: 'community', name: 'Community Star', desc: 'Help 5 community members', icon: '⭐', earned: false },
      { id: 'risk_aware', name: 'Risk Aware', desc: 'Complete Risk module', icon: '⚖️', earned: false },
      { id: 'stock_explorer', name: 'Stock Explorer', desc: 'Complete Stocks module', icon: '📊', earned: false },
      { id: 'ai_mentor', name: 'AI Mentor', desc: 'Chat with AI 10 times', icon: '🤖', earned: false },
      { id: 'consistency', name: 'Consistency', desc: '7-day learning streak', icon: '🔥', earned: false },
      { id: 'scheme_hunter', name: 'Scheme Hunter', desc: 'Explore 5 gov. schemes', icon: '🏛️', earned: false },
      { id: 'investor_pro', name: 'Investor Pro', desc: 'Reach Level 6', icon: '💎', earned: false },
    ].map(b => `<div style="border-radius:14px;border:2px solid ${b.earned ? 'rgba(91,62,255,0.2)' : 'var(--border)'};padding:16px;text-align:center;background:${b.earned ? 'rgba(91,62,255,0.04)' : 'var(--bg)'};transition:all 0.2s;cursor:${b.earned ? 'default' : 'not-allowed'};opacity:${b.earned ? '1' : '0.6'}">
        <div style="font-size:2.4rem;margin-bottom:6px;filter:${b.earned ? 'none' : 'grayscale(1)saturate(0)'}">${b.icon}</div>
        <div style="font-family:'Poppins',sans-serif;font-size:0.82rem;font-weight:700;color:${b.earned ? 'var(--text)' : 'var(--text-muted)'};margin-bottom:3px">${b.name}</div>
        <div style="font-size:0.68rem;color:var(--text-muted);line-height:1.3">${b.desc}</div>
        ${b.earned ? '<div style="margin-top:8px"><span class="badge badge-success">✓ Earned</span></div>' : '<div style="margin-top:8px"><span class="badge" style="background:var(--bg);color:var(--text-muted);font-size:0.65rem">🔒 Locked</span></div>'}
      </div>`).join('')}
    </div>
  </div>
</div>

<!-- LEADERBOARD -->
<div class="card">
  <div class="card-header">
    <div class="card-title">🏆 Community Leaderboard</div>
    <span class="badge badge-primary">Top Learners This Month</span>
  </div>
  <div class="card-body">
    <div id="leaderboard">
      ${[
      { rank: 1, name: 'Ananya Krishnan', score: 4250, xp: '4,250', city: 'Chennai' },
      { rank: 2, name: 'Meera Patel', score: 3890, xp: '3,890', city: 'Ahmedabad' },
      { rank: 3, name: 'Shruti Verma', score: 3650, xp: '3,650', city: 'Delhi' },
      { rank: 4, name: 'Priya Sharma', score: 1240, xp: '1,240', city: 'Mumbai', isYou: true },
      { rank: 5, name: 'Divya Nair', score: 980, xp: '980', city: 'Bangalore' },
      { rank: 6, name: 'Kavitha Reddy', score: 820, xp: '820', city: 'Hyderabad' },
    ].map(u => `<div class="leaderboard-item">
        <div class="lb-rank ${u.rank === 1 ? 'gold' : u.rank === 2 ? 'silver' : u.rank === 3 ? 'bronze' : 'normal'}">${u.rank}</div>
        <div class="lb-avatar">${u.name[0]}</div>
        <div>
          <div class="lb-name">${u.name} ${u.isYou ? '<span class="badge badge-primary" style="font-size:0.6rem">You</span>' : ''}</div>
          <div class="lb-xp">${u.city}</div>
        </div>
        <div class="lb-score">${u.xp} XP</div>
      </div>`).join('')}
    </div>
  </div>
</div>

<script>
if (!localStorage.getItem('herfiniq_token')) window.location.href = '/login';
const user = JSON.parse(localStorage.getItem('herfiniq_user') || '{}');
const xp = user.xp || 1240;
const level = user.level || 4;
const badges = user.badges || ['first_steps','quick_learner','sip_master'];

document.getElementById('totalXP').textContent = xp.toLocaleString();
document.getElementById('currentLevel').textContent = level;
document.getElementById('badgesEarned').textContent = badges.length;
document.getElementById('levelCircle').textContent = level;
document.getElementById('badgeCount').textContent = badges.length + ' / 12 earned';

const xpInLevel = xp % 500;
const pct = Math.round(xpInLevel/500*100);
document.getElementById('levelXPText').textContent = xp.toLocaleString() + ' / ' + ((Math.floor(xp/500)+1)*500).toLocaleString() + ' XP to next level';
document.getElementById('levelPct').textContent = pct + '% complete';
setTimeout(() => { document.getElementById('levelBar').style.width = pct + '%'; }, 300);

// Confidence chart
const ctx = document.getElementById('confidenceChart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Day 1','Day 5','Day 10','Day 15','Day 20','Day 25','Today'],
    datasets: [{
      label: 'Confidence Score',
      data: [20, 28, 35, 45, 58, 65, user.confidenceScore || 72],
      borderColor: '#5B3EFF', backgroundColor: 'rgba(91,62,255,0.08)',
      tension: 0.4, fill: true, pointRadius: 5, pointBackgroundColor: '#5B3EFF'
    }]
  },
  options: {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: { min: 0, max: 100, ticks: { font: { size: 10 } }, grid: { color: 'rgba(0,0,0,0.04)' } },
      x: { ticks: { font: { size: 10 } }, grid: { display: false } }
    }
  }
});
</script>
`;

  return appShell(content, lang, 'Progress & Badges') + '</body></html>';
};
