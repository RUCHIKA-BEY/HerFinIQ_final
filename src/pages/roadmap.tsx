import { appShell } from './shell';

export const roadmapPage = (lang: string = 'en') => {
    const content = `
<div style="margin-bottom:24px">
  <h2 style="font-family:'Poppins',sans-serif;font-size:1.5rem;font-weight:700;color:var(--text);margin-bottom:4px">🗺️ Your Financial Road Map</h2>
  <p style="color:var(--text-muted);font-size:0.9rem">A personalized step-by-step path from financial beginner to confident investor</p>
</div>

<!-- ROADMAP HEADER -->
<div style="background:linear-gradient(135deg,#5B3EFF,#7C3AED);border-radius:20px;padding:28px;color:white;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:absolute;top:-60px;right:-40px;width:200px;height:200px;background:rgba(255,255,255,0.06);border-radius:50%"></div>
  <div style="font-family:'Poppins',sans-serif;font-size:1.2rem;font-weight:700;margin-bottom:6px">Your Journey: Saver → Confident Investor</div>
  <div style="font-size:0.88rem;opacity:0.85;margin-bottom:16px">Based on your Moderate risk profile and 72% confidence score</div>
  <div style="display:flex;gap:8px;flex-wrap:wrap">
    <span style="padding:5px 14px;background:rgba(255,255,255,0.2);border-radius:20px;font-size:0.8rem">Phase 1: Foundation ✓</span>
    <span style="padding:5px 14px;background:rgba(255,255,255,0.3);border-radius:20px;font-size:0.8rem;font-weight:600">Phase 2: Growth ← You are here</span>
    <span style="padding:5px 14px;background:rgba(255,255,255,0.1);border-radius:20px;font-size:0.8rem">Phase 3: Advanced</span>
  </div>
</div>

<!-- PHASE 1 -->
<div class="card card-body" style="margin-bottom:20px">
  <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px">
    <div style="width:40px;height:40px;border-radius:12px;background:rgba(16,185,129,0.12);display:flex;align-items:center;justify-content:center;font-size:1.2rem;flex-shrink:0">🌱</div>
    <div>
      <div style="font-family:'Poppins',sans-serif;font-size:1.1rem;font-weight:700;color:var(--success)">Phase 1: Foundation (Completed ✓)</div>
      <div style="font-size:0.8rem;color:var(--text-muted)">Build your financial knowledge base</div>
    </div>
    <span class="badge badge-success" style="margin-left:auto">100% Done</span>
  </div>
  
  ${[
            { num: '01', title: 'Complete Account Setup', desc: 'Set up your profile, income details, and financial goals.', status: 'done' },
            { num: '02', title: 'Take Financial Assessment', desc: 'Understand your literacy score, risk profile, and confidence level.', status: 'done' },
            { num: '03', title: 'Basics of Investing Module', desc: 'Learn fundamental concepts: compounding, inflation, asset classes.', status: 'done' },
            { num: '04', title: 'Open a Bank Account & UPI', desc: 'Link a savings account and set up PMJDY if needed. Emergency ready!', status: 'done' },
            { num: '05', title: 'Build ₹500 Emergency Fund', desc: 'Start small – save ₹500 in a liquid fund or high-yield savings account.', status: 'done' },
        ].map(s => `<div class="roadmap-step" style="border-bottom:1px solid var(--border)">
    <div class="step-num done">${s.status === 'done' ? '✓' : s.num}</div>
    <div class="step-content">
      <div class="step-title" style="color:var(--success)">${s.title}</div>
      <div class="step-desc">${s.desc}</div>
    </div>
  </div>`).join('')}
</div>

<!-- PHASE 2 -->
<div class="card card-body" style="margin-bottom:20px;border:2px solid var(--primary)">
  <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px">
    <div style="width:40px;height:40px;border-radius:12px;background:rgba(91,62,255,0.12);display:flex;align-items:center;justify-content:center;font-size:1.2rem;flex-shrink:0">🚀</div>
    <div>
      <div style="font-family:'Poppins',sans-serif;font-size:1.1rem;font-weight:700;color:var(--primary)">Phase 2: Growth (In Progress)</div>
      <div style="font-size:0.8rem;color:var(--text-muted)">Learn to invest and grow your money systematically</div>
    </div>
    <span class="badge badge-primary" style="margin-left:auto">Active Phase</span>
  </div>
  
  ${[
            { num: '06', title: 'SIP Investing Module', desc: 'Master SIPs — set up your first SIP in a diversified mutual fund starting ₹500/month.', status: 'done' },
            { num: '07', title: 'Start First SIP', desc: 'Open a Zerodha Coin, Groww, or ET Money account and start your first SIP.', status: 'current' },
            { num: '08', title: 'Mutual Funds Guide Module', desc: 'Learn NAV, fund types (ELSS, Large-cap, Balanced), and how to pick the right fund.', status: 'pending' },
            { num: '09', title: 'Tax Planning with ELSS', desc: 'Save up to ₹46,800 in taxes annually by investing in ELSS mutual funds under 80C.', status: 'pending' },
            { num: '10', title: 'Build Emergency Fund (Full)', desc: 'Save 6 months of expenses in a liquid fund. This is your financial safety net.', status: 'pending' },
        ].map(s => `<div class="roadmap-step" style="border-bottom:1px solid var(--border)">
    <div class="step-num ${s.status === 'done' ? 'done' : s.status === 'current' ? '' : 'locked'}" style="${s.status === 'current' ? 'background:linear-gradient(135deg,var(--primary),var(--primary-light));color:white' : ''}">${s.status === 'done' ? '✓' : s.num}</div>
    <div class="step-content">
      <div class="step-title" style="color:${s.status === 'done' ? 'var(--success)' : s.status === 'current' ? 'var(--primary)' : 'var(--text)'}">${s.title} ${s.status === 'current' ? '← <span style="font-size:0.75rem;background:rgba(91,62,255,0.1);color:var(--primary);padding:2px 8px;border-radius:20px">Now</span>' : ''}</div>
      <div class="step-desc">${s.desc}</div>
    </div>
  </div>`).join('')}
</div>

<!-- PHASE 3 -->
<div class="card card-body" style="margin-bottom:20px;opacity:0.7">
  <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px">
    <div style="width:40px;height:40px;border-radius:12px;background:rgba(245,158,11,0.1);display:flex;align-items:center;justify-content:center;font-size:1.2rem;flex-shrink:0">💎</div>
    <div>
      <div style="font-family:'Poppins',sans-serif;font-size:1.1rem;font-weight:700;color:var(--warning)">Phase 3: Advanced Investing (Locked)</div>
      <div style="font-size:0.8rem;color:var(--text-muted)">Complete Phase 2 to unlock advanced strategies</div>
    </div>
    <span class="badge badge-warning" style="margin-left:auto">🔒 Complete Phase 2</span>
  </div>
  
  ${[
            { num: '11', title: 'Stock Market Basics', desc: 'Learn fundamentals, technical analysis, and how to read financial statements.' },
            { num: '12', title: 'Risk Diversification', desc: 'Balance your portfolio across equity, debt, gold, and real estate.' },
            { num: '13', title: 'Portfolio Management', desc: 'Monitor, rebalance, and optimize your investment portfolio quarterly.' },
            { num: '14', title: 'Advanced Tax Strategies', desc: 'Optimize LTCG, STCG, and use all available tax-saving investments.' },
            { num: '15', title: 'Financial Independence Goal', desc: 'Calculate your FI number and plan your path to financial freedom!' },
        ].map(s => `<div class="roadmap-step" style="border-bottom:1px solid var(--border)">
    <div class="step-num locked">${s.num}</div>
    <div class="step-content">
      <div class="step-title" style="color:var(--text-muted)">${s.title}</div>
      <div class="step-desc">${s.desc}</div>
    </div>
  </div>`).join('')}
</div>

<!-- RESOURCES -->
<div class="card card-body">
  <div class="card-title" style="margin-bottom:16px">📚 Recommended Resources</div>
  <div class="grid-3">
    ${[
            { icon: '📱', title: 'Groww App', desc: 'Start SIP with just ₹100. Zero commission mutual funds.', url: 'https://groww.in' },
            { icon: '📊', title: 'Zerodha Varsity', desc: 'Free stock market & investing education modules.', url: 'https://zerodha.com/varsity' },
            { icon: '🏛️', title: 'AMFI India', desc: 'Registered mutual fund portal - check fund ratings.', url: 'https://www.amfiindia.com' },
            { icon: '💰', title: 'ET Money App', desc: 'Track investments, SIP tracker, tax planner in one app.', url: 'https://etmoney.com' },
            { icon: '📖', title: 'RBI Financial Education', desc: 'Official financial literacy material from RBI.', url: 'https://rbi.org.in' },
            { icon: '🎓', title: 'SEBI Investor Corner', desc: 'Regulatory guidance and investor education by SEBI.', url: 'https://www.sebi.gov.in' },
        ].map(r => `<a href="${r.url}" target="_blank" style="display:block;padding:14px;border-radius:12px;border:1px solid var(--border);text-decoration:none;transition:all 0.2s;background:var(--bg)" onmouseover="this.style.borderColor='var(--primary)';this.style.background='rgba(91,62,255,0.04)'" onmouseout="this.style.borderColor='var(--border)';this.style.background='var(--bg)'">
      <div style="font-size:1.5rem;margin-bottom:6px">${r.icon}</div>
      <div style="font-size:0.85rem;font-weight:700;color:var(--text);margin-bottom:4px">${r.title}</div>
      <div style="font-size:0.75rem;color:var(--text-muted);line-height:1.4">${r.desc}</div>
    </a>`).join('')}
  </div>
</div>

<script>if (!localStorage.getItem('herfiniq_token')) window.location.href = '/login';</script>
`;

    return appShell(content, lang, 'Financial Road Map') + '</body></html>';
};
