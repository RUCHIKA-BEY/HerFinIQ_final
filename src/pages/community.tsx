import { appShell } from './shell';

export const communityPage = (lang: string = 'en') => {
    const content = `
<div style="margin-bottom:24px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px">
  <div>
    <h2 style="font-family:'Poppins',sans-serif;font-size:1.5rem;font-weight:700;color:var(--text);margin-bottom:4px">👥 Community</h2>
    <p style="color:var(--text-muted);font-size:0.9rem">Connect, learn, and grow together with women investors across India</p>
  </div>
  <button onclick="openAskQuestion()" class="btn btn-primary">+ Ask a Question</button>
</div>

<div class="grid-2" style="margin-bottom:24px">
  <div>
    <!-- POSTS -->
    <div style="display:flex;flex-direction:column;gap:16px">
      ${[
            { name: 'Ananya K.', city: 'Chennai', time: '2 hours ago', tag: 'Mutual Funds', avatar: 'A', question: 'I have ₹5,000 to invest monthly. Should I put all in one SIP or split across multiple funds?', replies: 8, likes: 24, answer: 'Great question! For ₹5,000/month, I\'d recommend splitting: ₹3,000 in large-cap fund + ₹2,000 in ELSS for tax saving. Diversification reduces risk! 🎯', answerer: 'Meera P.' },
            { name: 'Shruti V.', city: 'Delhi', time: '5 hours ago', tag: 'Emergency Fund', avatar: 'S', question: 'I\'m a homemaker. How do I start building an emergency fund when I don\'t have my own income?', replies: 12, likes: 31, answer: 'Start with whatever you can save from household budget – even ₹200/month helps! PMJDY account offers free banking. Slowly build to 3 months expenses. You\'ve got this! 💪', answerer: 'Divya N.' },
            { name: 'Kavitha R.', city: 'Hyderabad', time: 'Yesterday', tag: 'Government Schemes', avatar: 'K', question: 'What is the best government scheme for women entrepreneurs looking for seed funding?', replies: 15, likes: 42, answer: 'MUDRA Yojana gives up to ₹10 lakhs collateral-free! Also check Startup India Seed Fund (up to ₹20L) if you have a DPIIT-registered startup. Visit our Gov. Schemes section for step-by-step guide!', answerer: 'Priya S.' },
            { name: 'Meena J.', city: 'Pune', time: '2 days ago', tag: 'Stock Market', avatar: 'M', question: 'Is it safe for a beginner with 45% confidence score to start buying individual stocks?', replies: 6, likes: 18, answer: 'I\'d say wait a bit more! Build your foundation first – complete 3-4 learning modules. Once your confidence reaches 65%+, start with index funds before individual stocks. The AI mentor can guide you!', answerer: 'Nithya K.' },
        ].map(p => `<div class="card" style="padding:20px">
        <div style="display:flex;align-items:flex-start;gap:12px;margin-bottom:14px">
          <div style="width:38px;height:38px;border-radius:50%;background:linear-gradient(135deg,var(--primary),var(--accent));display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:0.9rem;flex-shrink:0">${p.avatar}</div>
          <div style="flex:1">
            <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
              <span style="font-weight:700;font-size:0.88rem">${p.name}</span>
              <span style="font-size:0.72rem;color:var(--text-muted)">${p.city}</span>
              <span style="font-size:0.7rem;color:var(--text-light)">• ${p.time}</span>
              <span class="badge badge-primary" style="font-size:0.65rem">${p.tag}</span>
            </div>
          </div>
        </div>
        <div style="font-size:0.9rem;font-weight:600;color:var(--text);margin-bottom:12px;line-height:1.5">${p.question}</div>
        <div style="background:rgba(91,62,255,0.04);border-left:3px solid var(--primary);padding:12px 14px;border-radius:0 10px 10px 0;margin-bottom:12px">
          <div style="font-size:0.72rem;color:var(--primary);font-weight:600;margin-bottom:4px">Best Answer by ${p.answerer}</div>
          <div style="font-size:0.82rem;color:var(--text);line-height:1.5">${p.answer}</div>
        </div>
        <div style="display:flex;align-items:center;gap:16px">
          <button style="background:none;border:none;cursor:pointer;display:flex;align-items:center;gap:4px;font-size:0.78rem;color:var(--text-muted);font-family:'Inter',sans-serif" onclick="like(this)">
            ❤️ <span>${p.likes}</span>
          </button>
          <button style="background:none;border:none;cursor:pointer;display:flex;align-items:center;gap:4px;font-size:0.78rem;color:var(--text-muted);font-family:'Inter',sans-serif">
            💬 ${p.replies} replies
          </button>
          <button style="background:none;border:none;cursor:pointer;font-size:0.78rem;color:var(--primary);font-family:'Inter',sans-serif;font-weight:600;margin-left:auto">Reply →</button>
        </div>
      </div>`).join('')}
    </div>
  </div>
  
  <!-- SIDEBAR -->
  <div style="display:flex;flex-direction:column;gap:16px">
    <div class="card card-body">
      <div class="card-title" style="margin-bottom:14px">🌟 Community Stats</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div style="text-align:center;padding:12px;background:var(--bg);border-radius:10px">
          <div style="font-family:'Poppins',sans-serif;font-size:1.4rem;font-weight:700;color:var(--primary)">50K+</div>
          <div style="font-size:0.72rem;color:var(--text-muted)">Members</div>
        </div>
        <div style="text-align:center;padding:12px;background:var(--bg);border-radius:10px">
          <div style="font-family:'Poppins',sans-serif;font-size:1.4rem;font-weight:700;color:var(--success)">12K+</div>
          <div style="font-size:0.72rem;color:var(--text-muted)">Questions</div>
        </div>
        <div style="text-align:center;padding:12px;background:var(--bg);border-radius:10px">
          <div style="font-family:'Poppins',sans-serif;font-size:1.4rem;font-weight:700;color:var(--warning)">6</div>
          <div style="font-size:0.72rem;color:var(--text-muted)">Languages</div>
        </div>
        <div style="text-align:center;padding:12px;background:var(--bg);border-radius:10px">
          <div style="font-family:'Poppins',sans-serif;font-size:1.4rem;font-weight:700;color:var(--accent)">15+</div>
          <div style="font-size:0.72rem;color:var(--text-muted)">Cities</div>
        </div>
      </div>
    </div>
    
    <div class="card card-body">
      <div class="card-title" style="margin-bottom:14px">🔥 Trending Topics</div>
      ${['SIP for Beginners', 'Tax Saving ELSS', 'MUDRA Loan', 'Gold vs Mutual Fund', 'Emergency Fund', 'Stock Market Basics'].map((t, i) => `<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--border)">
        <span style="font-size:0.72rem;font-weight:700;color:var(--text-muted);width:16px">#${i + 1}</span>
        <span style="font-size:0.84rem;font-weight:500;color:var(--text);flex:1">${t}</span>
        <span class="badge badge-primary" style="font-size:0.65rem">${[234, 189, 156, 142, 127, 98][i]}</span>
      </div>`).join('')}
    </div>
    
    <div class="card card-body">
      <div class="card-title" style="margin-bottom:14px">✨ Success Stories</div>
      ${[
            { name: 'Lakshmi R.', story: 'Started SIP with ₹1,000/month. After 3 years, accumulated ₹45,000! Now investing ₹5,000/month 🎉', city: 'Bangalore' },
            { name: 'Sita D.', story: 'Got MUDRA loan, started tiffin business. Revenue ₹40K/month now! HerFinIQ helped me understand the scheme 💪', city: 'Jaipur' },
        ].map(s => `<div style="padding:12px;background:var(--bg);border-radius:10px;margin-bottom:10px">
        <div style="font-weight:700;font-size:0.82rem;margin-bottom:4px">${s.name} <span style="font-size:0.72rem;color:var(--text-muted);font-weight:400">${s.city}</span></div>
        <div style="font-size:0.78rem;color:var(--text-muted);line-height:1.5">${s.story}</div>
      </div>`).join('')}
    </div>
  </div>
</div>

<!-- ASK QUESTION MODAL -->
<div id="askModal" style="display:none;position:fixed;inset:0;z-index:1000;background:rgba(0,0,0,0.5);align-items:center;justify-content:center;padding:20px">
  <div style="background:white;border-radius:24px;max-width:540px;width:100%;padding:32px">
    <div style="font-family:'Poppins',sans-serif;font-size:1.2rem;font-weight:700;margin-bottom:20px;display:flex;justify-content:space-between">
      Ask the Community <button onclick="document.getElementById('askModal').style.display='none'" style="background:none;border:none;cursor:pointer;font-size:1.2rem;color:var(--text-muted)">✕</button>
    </div>
    <select style="width:100%;padding:10px 14px;border:2px solid var(--border);border-radius:10px;font-size:0.88rem;margin-bottom:14px;font-family:'Inter',sans-serif;outline:none">
      <option>Mutual Funds</option><option>SIP</option><option>Stocks</option><option>Government Schemes</option><option>Budgeting</option><option>Others</option>
    </select>
    <textarea placeholder="Describe your question in detail..." rows="4" style="width:100%;padding:12px 14px;border:2px solid var(--border);border-radius:10px;font-size:0.88rem;font-family:'Inter',sans-serif;resize:none;outline:none;margin-bottom:14px"></textarea>
    <button onclick="postQuestion()" class="btn btn-primary" style="width:100%">Post Question →</button>
  </div>
</div>

<script>
if (!localStorage.getItem('herfiniq_token')) window.location.href = '/login';
function openAskQuestion() { document.getElementById('askModal').style.display = 'flex'; }
function postQuestion() { alert('✅ Your question has been posted! Community members will reply soon.'); document.getElementById('askModal').style.display = 'none'; }
function like(btn) { const span = btn.querySelector('span'); span.textContent = parseInt(span.textContent)+1; btn.style.color='var(--accent)'; }
</script>
`;

    return appShell(content, lang, 'Community') + '</body></html>';
};

export const mentorshipPage = (lang: string = 'en') => {
    const content = `
<div style="margin-bottom:24px">
  <h2 style="font-family:'Poppins',sans-serif;font-size:1.5rem;font-weight:700;color:var(--text);margin-bottom:4px">🌟 Mentorship</h2>
  <p style="color:var(--text-muted);font-size:0.9rem">Connect with experienced women investors and financial advisors</p>
</div>

<div class="grid-3" style="margin-bottom:24px">
  ${[
            { name: 'Dr. Priyanka Sharma', exp: 'CFP, 12 years experience', area: 'Mutual Funds & Tax Planning', desc: 'Former SEBI officer, specializes in helping women with financial planning and investment strategies.', icon: '👩‍💼' },
            { name: 'Ananya Krishnamurthy', exp: 'MBA Finance, 8 years', area: 'Stock Market & Portfolio', desc: 'Founded WomenInvest community. Helped 500+ women start their equity journey confidently.', icon: '👩‍🏫' },
            { name: 'Meera Patel', exp: 'CA, 15 years experience', area: 'Business Finance & MSME', desc: 'CA with expertise in MUDRA loans, government schemes, and financial planning for women entrepreneurs.', icon: '💼' },
            { name: 'Kavitha Reddy', exp: 'CFA, 10 years experience', area: 'Wealth Management', desc: 'Wealth manager helping women professionals build investment portfolios aligned with life goals.', icon: '📊' },
            { name: 'Sunita Joshi', exp: 'MBA, 6 years experience', area: 'SIP & Mutual Funds', desc: 'Financial blogger and educator. Made mutual fund investing simple for 10,000+ homemakers.', icon: '📱' },
            { name: 'Rekha Nair', exp: 'PGDM Finance, 9 years', area: 'Insurance & Risk', desc: 'Helps women understand the importance of life insurance, health coverage, and financial protection.', icon: '🛡️' },
        ].map(m => `<div class="mentor-card">
    <div class="mentor-avatar-lg" style="background:linear-gradient(135deg,rgba(91,62,255,0.12),rgba(205,189,255,0.2))">${m.icon}</div>
    <div class="mentor-name">${m.name}</div>
    <div style="font-size:0.72rem;color:var(--primary);font-weight:600;margin-bottom:4px">${m.area}</div>
    <div class="mentor-expertise">${m.exp}</div>
    <div style="font-size:0.78rem;color:var(--text-muted);line-height:1.5;margin-bottom:14px">${m.desc}</div>
    <button onclick="requestMentorship('${m.name}')" class="btn btn-primary btn-sm" style="width:100%;justify-content:center">Request Mentorship</button>
  </div>`).join('')}
</div>

<div class="card card-body">
  <div class="card-title" style="margin-bottom:16px">📅 Upcoming Mentorship Sessions</div>
  <div style="display:flex;flex-direction:column;gap:12px">
    ${[
            { title: 'SIP for Working Women Webinar', mentor: 'Ananya Krishnamurthy', date: 'March 15, 2025', time: '7:00 PM IST', type: 'Webinar', spots: 48 },
            { title: '1:1 Financial Planning Session', mentor: 'Dr. Priyanka Sharma', date: 'March 18, 2025', time: '6:00 PM IST', type: '1-on-1', spots: 5 },
            { title: 'Government Schemes for Women Entrepreneurs', mentor: 'Meera Patel', date: 'March 20, 2025', time: '5:30 PM IST', type: 'Workshop', spots: 25 },
        ].map(s => `<div style="display:flex;align-items:center;gap:16px;padding:14px;border-radius:12px;background:var(--bg);border:1px solid var(--border);flex-wrap:wrap">
      <div style="flex:1">
        <div style="font-weight:700;font-size:0.9rem;margin-bottom:3px">${s.title}</div>
        <div style="font-size:0.78rem;color:var(--text-muted)">${s.mentor} • ${s.date} at ${s.time}</div>
      </div>
      <span class="badge ${s.type === 'Webinar' ? 'badge-primary' : s.type === '1-on-1' ? 'badge-accent' : 'badge-success'}">${s.type}</span>
      <div style="font-size:0.76rem;color:var(--text-muted)">${s.spots} spots left</div>
      <button onclick="joinSession('${s.title}')" class="btn btn-primary btn-sm">Join →</button>
    </div>`).join('')}
  </div>
</div>

<script>
if (!localStorage.getItem('herfiniq_token')) window.location.href = '/login';
function requestMentorship(name) { alert('✅ Mentorship request sent to ' + name + '! They will reach out within 24-48 hours.'); }
function joinSession(title) { alert('✅ You have registered for: ' + title + '! Check your profile for session details.'); }
</script>
`;

    return appShell(content, lang, 'Mentorship') + '</body></html>';
};

export const toolsPage = (lang: string = 'en') => {
    const content = `
<div style="margin-bottom:24px">
  <h2 style="font-family:'Poppins',sans-serif;font-size:1.5rem;font-weight:700;color:var(--text);margin-bottom:4px">🔧 Financial Tools</h2>
  <p style="color:var(--text-muted);font-size:0.9rem">Practical tools to help you plan, track, and grow your financial wealth</p>
</div>

<div class="grid-3" style="margin-bottom:24px">
  ${[
            { icon: '📈', title: 'SIP Calculator', desc: 'Calculate your SIP returns and reach your goal efficiently', color: 'rgba(91,62,255,0.1)', id: 'sip-calc' },
            { icon: '💰', title: 'Emergency Fund Planner', desc: 'Calculate how much emergency fund you need', color: 'rgba(16,185,129,0.1)', id: 'emergency-calc' },
            { icon: '🏦', title: 'FD vs Mutual Fund', desc: 'Compare Fixed Deposit vs Mutual Fund returns', color: 'rgba(245,158,11,0.1)', id: 'fd-mf-calc' },
            { icon: '🎯', title: 'Goal Planner', desc: 'Calculate savings needed to reach your financial goals', color: 'rgba(255,107,107,0.1)', id: 'goal-calc' },
            { icon: '📊', title: 'Tax Saver', desc: 'Estimate tax savings with ELSS and 80C investments', color: 'rgba(91,62,255,0.1)', id: 'tax-calc' },
            { icon: '⚖️', title: 'Risk Profiler', desc: 'Quick investment risk assessment tool', color: 'rgba(168,85,247,0.1)', id: 'risk-profiler' },
        ].map(t => `<div class="card" style="padding:24px;cursor:pointer;transition:all 0.25s" onclick="openTool('${t.id}')" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform='translateY(0)'">
    <div style="width:52px;height:52px;border-radius:14px;background:${t.color};display:flex;align-items:center;justify-content:center;font-size:1.6rem;margin-bottom:14px">${t.icon}</div>
    <div style="font-family:'Poppins',sans-serif;font-size:1rem;font-weight:700;margin-bottom:6px">${t.title}</div>
    <div style="font-size:0.8rem;color:var(--text-muted);line-height:1.5;margin-bottom:14px">${t.desc}</div>
    <button style="padding:8px 16px;border-radius:8px;border:none;background:var(--primary);color:white;font-size:0.78rem;font-weight:600;cursor:pointer;font-family:'Inter',sans-serif">Open Tool →</button>
  </div>`).join('')}
</div>

<!-- SIP CALCULATOR -->
<div id="sip-calc-card" style="display:none" class="card card-body">
  <div style="font-family:'Poppins',sans-serif;font-size:1.1rem;font-weight:700;margin-bottom:20px;display:flex;align-items:center;justify-content:space-between">
    📈 SIP Calculator
    <button onclick="closeTool('sip-calc')" style="background:none;border:none;cursor:pointer;color:var(--text-muted);font-size:1.1rem">✕</button>
  </div>
  <div class="grid-2">
    <div>
      <div style="margin-bottom:14px">
        <label style="font-size:0.8rem;font-weight:600;color:var(--text-muted);display:block;margin-bottom:6px">Monthly SIP Amount (₹)</label>
        <input type="number" id="sipAmount" value="2000" oninput="calcSIP()" style="width:100%;padding:10px 14px;border:2px solid var(--border);border-radius:10px;font-size:1rem;font-weight:700;color:var(--primary);outline:none;font-family:'Inter',sans-serif">
      </div>
      <div style="margin-bottom:14px">
        <label style="font-size:0.8rem;font-weight:600;color:var(--text-muted);display:block;margin-bottom:6px">Expected Annual Returns (%)</label>
        <input type="range" id="sipReturn" min="6" max="18" value="12" oninput="calcSIP();document.getElementById('sipReturnVal').textContent=this.value+'%'" style="width:100%;margin-bottom:4px">
        <div style="font-size:0.88rem;color:var(--primary);font-weight:700" id="sipReturnVal">12%</div>
      </div>
      <div>
        <label style="font-size:0.8rem;font-weight:600;color:var(--text-muted);display:block;margin-bottom:6px">Investment Period (Years)</label>
        <input type="range" id="sipYears" min="1" max="30" value="10" oninput="calcSIP();document.getElementById('sipYearsVal').textContent=this.value+' years'" style="width:100%;margin-bottom:4px">
        <div style="font-size:0.88rem;color:var(--primary);font-weight:700" id="sipYearsVal">10 years</div>
      </div>
    </div>
    <div style="background:linear-gradient(135deg,rgba(91,62,255,0.08),rgba(205,189,255,0.12));border-radius:16px;padding:24px;display:flex;flex-direction:column;gap:14px">
      <div>
        <div style="font-size:0.75rem;font-weight:600;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:4px">Total Invested</div>
        <div style="font-family:'Poppins',sans-serif;font-size:1.6rem;font-weight:700;color:var(--text)" id="sipInvested">₹2,40,000</div>
      </div>
      <div>
        <div style="font-size:0.75rem;font-weight:600;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:4px">Returns Earned</div>
        <div style="font-family:'Poppins',sans-serif;font-size:1.4rem;font-weight:700;color:var(--success)" id="sipReturns">₹2,25,000</div>
      </div>
      <div style="border-top:2px solid rgba(91,62,255,0.2);padding-top:14px">
        <div style="font-size:0.75rem;font-weight:600;color:var(--primary);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:4px">Total Value</div>
        <div style="font-family:'Poppins',sans-serif;font-size:2rem;font-weight:700;color:var(--primary)" id="sipTotal">₹4,65,000</div>
      </div>
    </div>
  </div>
</div>

<script>
if (!localStorage.getItem('herfiniq_token')) window.location.href = '/login';
function openTool(id) {
  document.querySelectorAll('[id$="-card"]').forEach(el => el.style.display='none');
  const card = document.getElementById(id+'-card');
  if (card) { card.style.display='block'; card.scrollIntoView({behavior:'smooth'}); }
  else { alert('This tool is coming soon! 🚀'); }
}
function closeTool(id) { document.getElementById(id+'-card').style.display='none'; }
function calcSIP() {
  const P = parseFloat(document.getElementById('sipAmount').value)||0;
  const r = parseFloat(document.getElementById('sipReturn').value)/100/12;
  const n = parseInt(document.getElementById('sipYears').value)*12;
  const total = P * ((Math.pow(1+r,n)-1)/r) * (1+r);
  const invested = P*n;
  const returns = total-invested;
  const fmt = v => '₹' + Math.round(v).toLocaleString('en-IN');
  document.getElementById('sipInvested').textContent = fmt(invested);
  document.getElementById('sipReturns').textContent = fmt(returns);
  document.getElementById('sipTotal').textContent = fmt(total);
}
</script>
`;

    return appShell(content, lang, 'Financial Tools') + '</body></html>';
};
