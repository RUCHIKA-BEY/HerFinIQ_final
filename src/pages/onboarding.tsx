export const onboardingPage = (lang: string = 'en') => {
  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>HerFinIQ – Financial Assessment</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>
  :root { --primary:#5B3EFF; --success:#10B981; --bg:#F9FAFC; --white:#fff; --text:#1F2937; --text-muted:#6B7280; --border:#E5E7EB; --accent:#FF6B6B; --warning:#F59E0B; }
  * { margin:0; padding:0; box-sizing:border-box; }
  body { font-family:'Inter',sans-serif; background:var(--bg); min-height:100vh; display:flex; flex-direction:column; align-items:center; padding:40px 20px; }
  .header { text-align:center; margin-bottom:36px; }
  .logo { font-family:'Poppins',sans-serif; font-size:1.5rem; font-weight:700; color:var(--primary); margin-bottom:8px; }
  .logo span { color:#FF6B6B; }
  h1 { font-family:'Poppins',sans-serif; font-size:1.6rem; font-weight:700; color:var(--text); margin-bottom:6px; }
  .sub { color:var(--text-muted); font-size:0.9rem; }
  
  .progress-header { max-width:700px; width:100%; margin-bottom:28px; }
  .progress-steps { display:flex; align-items:center; justify-content:center; gap:8px; margin-bottom:10px; }
  .step-dot { width:32px; height:32px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:0.75rem; font-weight:700; transition:all 0.3s; }
  .step-dot.done { background:var(--success); color:white; }
  .step-dot.active { background:var(--primary); color:white; box-shadow:0 0 0 4px rgba(91,62,255,0.2); }
  .step-dot.pending { background:var(--border); color:var(--text-muted); }
  .step-line { height:2px; flex:1; max-width:40px; border-radius:100px; }
  .step-line.done { background:var(--success); }
  .step-line.pending { background:var(--border); }
  .progress-text { text-align:center; font-size:0.78rem; color:var(--text-muted); }
  
  .card { background:white; border-radius:20px; padding:32px; max-width:700px; width:100%; box-shadow:0 4px 32px rgba(0,0,0,0.08); }
  .section-title { font-family:'Poppins',sans-serif; font-size:1.2rem; font-weight:700; margin-bottom:6px; color:var(--text); }
  .section-sub { font-size:0.85rem; color:var(--text-muted); margin-bottom:24px; line-height:1.5; }
  
  .q-num { font-size:0.72rem; font-weight:600; color:var(--primary); text-transform:uppercase; letter-spacing:0.08em; margin-bottom:8px; }
  .q-text { font-size:1rem; font-weight:600; color:var(--text); margin-bottom:16px; line-height:1.5; }
  .option { padding:14px 18px; border-radius:12px; border:2px solid var(--border); margin-bottom:10px; cursor:pointer; transition:all 0.2s; font-size:0.88rem; display:flex; align-items:center; gap:12px; }
  .option:hover { border-color:var(--primary); background:rgba(91,62,255,0.04); }
  .option.selected { border-color:var(--primary); background:rgba(91,62,255,0.08); color:var(--primary); font-weight:600; }
  .option-icon { font-size:1.3rem; flex-shrink:0; }
  
  .nav-btns { display:flex; gap:12px; justify-content:space-between; margin-top:24px; }
  .btn { padding:12px 24px; border-radius:10px; font-size:0.9rem; font-weight:600; cursor:pointer; transition:all 0.2s; border:none; font-family:'Inter',sans-serif; }
  .btn-primary { background:var(--primary); color:white; box-shadow:0 4px 12px rgba(91,62,255,0.3); }
  .btn-primary:hover { transform:translateY(-1px); box-shadow:0 6px 20px rgba(91,62,255,0.4); }
  .btn-ghost { background:var(--bg); border:2px solid var(--border); color:var(--text-muted); }
  
  .result-card { text-align:center; padding:20px 0; }
  .score-circle { width:120px; height:120px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-family:'Poppins',sans-serif; font-size:2rem; font-weight:700; margin:0 auto 16px; }
  .score-label { font-size:0.8rem; font-weight:600; text-transform:uppercase; letter-spacing:0.08em; margin-bottom:4px; }
  .profile-grid { display:grid; grid-template-columns:1fr 1fr 1fr; gap:14px; margin:24px 0; }
  .profile-box { border-radius:14px; padding:16px; text-align:center; }
  
  @media(max-width:500px) { .card { padding:24px 16px; } .profile-grid { grid-template-columns:1fr; } }
</style>
</head>
<body>

<div class="header">
  <div style="max-width: 250px; margin: 0 auto 16px;">
    <img src="/static/logo.png" style="width: 100%; height: auto;" alt="HerFinIQ Logo" />
  </div>
  <h1 id="pageTitle">Financial Assessment</h1>
  <p class="sub" id="pageSub">Answer honestly – no right or wrong answers, just your truth</p>
</div>

<div class="progress-header">
  <div class="progress-steps">
    <div class="step-dot active" id="dot1">1</div>
    <div class="step-line pending" id="line1"></div>
    <div class="step-dot pending" id="dot2">2</div>
    <div class="step-line pending" id="line2"></div>
    <div class="step-dot pending" id="dot3">3</div>
    <div class="step-line pending" id="line3"></div>
    <div class="step-dot pending" id="dot4">4</div>
  </div>
  <div class="progress-text" id="progressText">Section 1: Financial Literacy</div>
</div>

<div class="card" id="assessmentCard">
  <!-- Questions rendered by JS -->
</div>

<script>
const sections = [
  {
    title: 'Financial Literacy', sub: 'Test your understanding of key financial concepts',
    questions: [
      { q: 'What does inflation mean?', options:[{icon:'💰',text:'Prices increasing over time'},{icon:'📈',text:'Stock market going up'},{icon:'🏦',text:'Bank interest rates rising'},{icon:'💸',text:'Government printing money'}], answer:0 },
      { q: 'What does SIP stand for in investing?', options:[{icon:'📅',text:'Systematic Investment Plan'},{icon:'🏦',text:'Special Interest Policy'},{icon:'📊',text:'Stock Investment Portfolio'},{icon:'💰',text:'Savings Interest Plan'}], answer:0 },
      { q: 'Which gives better long-term returns on average?', options:[{icon:'🏦',text:'Fixed Deposit (FD)'},{icon:'💵',text:'Keeping cash at home'},{icon:'📈',text:'Equity Mutual Funds'},{icon:'💳',text:'Credit card savings'}], answer:2 },
      { q: 'What is a mutual fund?', options:[{icon:'🏢',text:'A government-run bank'},{icon:'💼',text:'A pooled investment managed by professionals'},{icon:'💰',text:'A type of insurance policy'},{icon:'🎰',text:'A lottery-style investment'}], answer:1 },
      { q: 'What is compound interest? Money where...', options:[{icon:'💰',text:'Interest is earned only on principal'},{icon:'📈',text:'Interest earns interest over time'},{icon:'🏦',text:'Interest is paid monthly always'},{icon:'💸',text:'Interest reduces year by year'}], answer:1 },
    ]
  },
  {
    title: 'Risk Tolerance', sub: 'Understand your comfort with investment risk',
    questions: [
      { q: 'If your ₹10,000 investment falls to ₹8,000 in a month, you would:', options:[{icon:'😱',text:'Immediately sell everything'},{icon:'😰',text:'Feel anxious but hold on'},{icon:'😐',text:'Wait and see for a few months'},{icon:'😊',text:'Invest more – great opportunity!'}], riskScores:[0,1,2,3] },
      { q: 'What is your main financial priority?', options:[{icon:'🛡️',text:'Protect my money – minimum risk'},{icon:'⚖️',text:'Balance – some risk for decent returns'},{icon:'📈',text:'Moderate growth – willing to take some risk'},{icon:'🚀',text:'Maximum growth – comfortable with high risk'}], riskScores:[0,1,2,3] },
      { q: 'How long can you keep money invested without needing it?', options:[{icon:'📅',text:'Less than 1 year'},{icon:'🗓️',text:'1-3 years'},{icon:'📆',text:'3-7 years'},{icon:'🎯',text:'7+ years'}], riskScores:[0,1,2,3] },
      { q: 'If experts predicted market would fall 20% next month, you would:', options:[{icon:'🏃',text:'Sell all my investments now'},{icon:'😰',text:'Sell some to feel safer'},{icon:'🤔',text:'Do nothing and wait it out'},{icon:'🎯',text:'Invest more – buying opportunity!'}], riskScores:[0,1,2,3] },
    ]
  },
  {
    title: 'Confidence Assessment', sub: 'How confident do you feel about managing money?',
    questions: [
      { q: 'I feel confident making my own investment decisions:', options:[{icon:'😔',text:'Not at all – I am scared of making mistakes'},{icon:'😟',text:'Somewhat – I need guidance always'},{icon:'🙂',text:'Fairly – I am learning and comfortable'},{icon:'😊',text:'Very confident – I know what I am doing'}], confScores:[0,1,2,3] },
      { q: 'When thinking about investing money, I feel:', options:[{icon:'😱',text:'Very anxious – afraid of losing money'},{icon:'😰',text:'A bit nervous – uncertain about choices'},{icon:'🤔',text:'Cautiously optimistic – ready to learn'},{icon:'🚀',text:'Excited – I see the opportunity clearly'}], confScores:[0,1,2,3] },
      { q: 'I believe in long-term investing (5-10 years) for wealth building:', options:[{icon:'❌',text:'No – I need money accessible quickly'},{icon:'🤷',text:'Maybe – I am not sure about long-term'},{icon:'✅',text:'Yes – I understand the value of patience'},{icon:'💯',text:'Absolutely – I have clear long-term goals'}], confScores:[0,1,2,3] },
      { q: 'How comfortable are you with financial numbers and calculations?', options:[{icon:'😰',text:'Very uncomfortable'},{icon:'😐',text:'Somewhat uncomfortable'},{icon:'🙂',text:'Fairly comfortable'},{icon:'😊',text:'Very comfortable'}], confScores:[0,1,2,3] },
    ]
  }
];

let currentSection = 0, currentQ = 0;
let answers = [{}, {}, {}];
let allAnswers = [[], [], []];

const sectionTitles = ['Financial Literacy','Risk Tolerance','Confidence Assessment','Results'];
const stepLabels = ['Section 1: Financial Literacy','Section 2: Risk Tolerance','Section 3: Psychological Confidence','Your Results'];

function updateProgress() {
  for (let i = 0; i < 4; i++) {
    const dot = document.getElementById('dot'+(i+1));
    if (!dot) continue;
    dot.className = 'step-dot ' + (i < currentSection ? 'done' : i === currentSection ? 'active' : 'pending');
    dot.textContent = i < currentSection ? '✓' : (i+1);
    if (i < 3) {
      const line = document.getElementById('line'+(i+1));
      if (line) line.className = 'step-line ' + (i < currentSection ? 'done' : 'pending');
    }
  }
  document.getElementById('progressText').textContent = stepLabels[Math.min(currentSection, 3)];
}

function renderQuestion() {
  const sec = sections[currentSection];
  const q = sec.questions[currentQ];
  const card = document.getElementById('assessmentCard');
  const totalQ = sections.reduce((s,sec) => s+sec.questions.length, 0);
  const doneQ = sections.slice(0,currentSection).reduce((s,sec) => s+sec.questions.length, 0) + currentQ;
  
  card.innerHTML = \`
    <div class="section-title">\${sec.title}</div>
    <div class="section-sub">\${sec.sub}</div>
    <div style="background:var(--bg);border-radius:10px;height:6px;margin-bottom:20px">
      <div style="width:\${Math.round(doneQ/totalQ*100)}%;height:100%;border-radius:100px;background:var(--primary);transition:width 0.5s"></div>
    </div>
    <div class="q-num">Question \${doneQ+1} of \${totalQ}</div>
    <div class="q-text">\${q.q}</div>
    <div id="optionsContainer">
      \${q.options.map((opt,i) => \`<div class="option" onclick="selectOption(\${i}, this)" \${allAnswers[currentSection][currentQ] === i ? 'style="border-color:var(--primary);background:rgba(91,62,255,0.08);color:var(--primary);"' : ''}>
        <span class="option-icon">\${opt.icon}</span>
        <span>\${opt.text}</span>
      </div>\`).join('')}
    </div>
    <div class="nav-btns">
      <button class="btn btn-ghost" onclick="prevQ()" style="\${currentSection === 0 && currentQ === 0 ? 'visibility:hidden' : ''}">← Back</button>
      <button class="btn btn-primary" onclick="nextQ()" id="nextBtn">
        \${isLastQ() ? 'See My Results →' : 'Next →'}
      </button>
    </div>
  \`;
  
  const secTitle = document.querySelector('.section-title');
  if (secTitle) secTitle.textContent = sec.title;
  const secSub = document.querySelector('.section-sub');
  if (secSub) secSub.textContent = sec.sub;
}

function isLastQ() {
  return currentSection === sections.length - 1 && currentQ === sections[currentSection].questions.length - 1;
}

function selectOption(idx, el) {
  document.querySelectorAll('.option').forEach(o => { o.style.borderColor='var(--border)'; o.style.background=''; o.style.color=''; o.style.fontWeight=''; });
  el.style.borderColor = 'var(--primary)';
  el.style.background = 'rgba(91,62,255,0.08)';
  el.style.color = 'var(--primary)';
  el.style.fontWeight = '600';
  allAnswers[currentSection][currentQ] = idx;
}

function nextQ() {
  if (allAnswers[currentSection][currentQ] === undefined) { alert('Please select an answer to continue'); return; }
  if (isLastQ()) { showResults(); return; }
  if (currentQ < sections[currentSection].questions.length - 1) {
    currentQ++;
  } else {
    currentSection++;
    currentQ = 0;
    updateProgress();
  }
  renderQuestion();
}

function prevQ() {
  if (currentQ > 0) { currentQ--; }
  else if (currentSection > 0) { currentSection--; currentQ = sections[currentSection].questions.length-1; updateProgress(); }
  renderQuestion();
}

function computeScores() {
  // Literacy score (0-100)
  let litCorrect = 0;
  sections[0].questions.forEach((q, i) => {
    if (allAnswers[0][i] === q.answer) litCorrect++;
  });
  const litScore = Math.round(litCorrect / sections[0].questions.length * 100);
  
  // Risk score (0-3 per question, convert to profile)
  let riskTotal = 0, riskMax = 0;
  sections[1].questions.forEach((q, i) => {
    const ans = allAnswers[1][i] || 0;
    riskTotal += ans;
    riskMax += 3;
  });
  const riskPct = riskTotal / riskMax;
  const risk = riskPct < 0.33 ? 'Conservative' : riskPct < 0.66 ? 'Moderate' : 'Aggressive';
  
  // Confidence score (0-100)
  let confTotal = 0, confMax = 0;
  sections[2].questions.forEach((q, i) => {
    const ans = allAnswers[2][i] || 0;
    confTotal += ans;
    confMax += 3;
  });
  const confScore = Math.round(confTotal / confMax * 100);
  
  return { litScore, risk, confScore };
}

function showResults() {
  const { litScore, risk, confScore } = computeScores();
  currentSection = 3; updateProgress();
  
  document.getElementById('pageTitle').textContent = 'Your Financial Profile';
  document.getElementById('pageSub').textContent = 'Based on your assessment, here are your personalized scores';
  
  const riskColors = { Conservative: '#10B981', Moderate: '#F59E0B', Aggressive: '#EF4444' };
  const riskEmojis = { Conservative: '🛡️', Moderate: '⚖️', Aggressive: '🚀' };
  const riskAdvice = {
    Conservative: 'Start with Fixed Deposits, Liquid Funds, and Government Schemes. Build your knowledge before exploring equity.',
    Moderate: 'Begin with Balanced Mutual Funds and SIP. Great for steady wealth building with managed risk.',
    Aggressive: 'You are ready for equity investing! Explore growth stocks and equity mutual funds for maximum returns.'
  };
  const confAdvice = {
    low: 'Start with our Basics module → then SIP module → then AI Mentor for personalized guidance.',
    medium: 'Complete Mutual Funds module and start with a small SIP. Your confidence is building well!',
    high: 'Excellent! Explore stocks, ELSS tax-saving funds, and advanced portfolio strategies.'
  };
  const confLevel = confScore < 40 ? 'low' : confScore < 70 ? 'medium' : 'high';
  
  document.getElementById('assessmentCard').innerHTML = \`
    <div class="result-card">
      <div style="font-size:3rem;margin-bottom:12px">🎉</div>
      <div style="font-family:'Poppins',sans-serif;font-size:1.4rem;font-weight:700;margin-bottom:6px">Assessment Complete!</div>
      <div style="font-size:0.88rem;color:var(--text-muted);margin-bottom:28px">Here is your personalized financial profile</div>
      
      <div class="profile-grid">
        <div class="profile-box" style="background:rgba(91,62,255,0.08);border:1px solid rgba(91,62,255,0.2)">
          <div style="font-size:2rem;font-weight:700;color:var(--primary);font-family:'Poppins',sans-serif">\${litScore}</div>
          <div style="font-size:0.65rem;color:var(--primary);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:2px">/100</div>
          <div style="font-size:0.82rem;font-weight:600;color:var(--text)">Literacy Score</div>
          <div style="font-size:0.72rem;color:var(--text-muted);margin-top:3px">\${litScore >= 80 ? 'Excellent' : litScore >= 60 ? 'Good' : litScore >= 40 ? 'Average' : 'Beginner'}</div>
        </div>
        <div class="profile-box" style="background:rgba(245,158,11,0.08);border:1px solid rgba(245,158,11,0.2)">
          <div style="font-size:2rem;margin-bottom:2px">\${riskEmojis[risk]}</div>
          <div style="font-size:1rem;font-weight:700;color:\${riskColors[risk]}">\${risk}</div>
          <div style="font-size:0.82rem;font-weight:600;color:var(--text)">Risk Profile</div>
          <div style="font-size:0.72rem;color:var(--text-muted);margin-top:3px">Investor</div>
        </div>
        <div class="profile-box" style="background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.2)">
          <div style="font-size:2rem;font-weight:700;color:var(--success);font-family:'Poppins',sans-serif">\${confScore}</div>
          <div style="font-size:0.65rem;color:var(--success);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:2px">/100</div>
          <div style="font-size:0.82rem;font-weight:600;color:var(--text)">Confidence</div>
          <div style="font-size:0.72rem;color:var(--text-muted);margin-top:3px">\${confLevel === 'high' ? 'Confident' : confLevel === 'medium' ? 'Growing' : 'Building'}</div>
        </div>
      </div>
      
      <div style="background:rgba(91,62,255,0.06);border:1px solid rgba(91,62,255,0.15);border-radius:14px;padding:18px;margin-bottom:20px;text-align:left">
        <div style="font-weight:700;font-size:0.9rem;margin-bottom:8px;color:var(--primary)">🤖 AI Recommendation for You:</div>
        <div style="font-size:0.85rem;color:var(--text);line-height:1.6"><strong>Risk Profile (\${risk}):</strong> \${riskAdvice[risk]}</div>
        <div style="font-size:0.85rem;color:var(--text);line-height:1.6;margin-top:8px"><strong>Confidence Score (\${confScore}):</strong> \${confAdvice[confLevel]}</div>
      </div>
      
      <button onclick="saveAndGo(\${litScore},'\${risk}',\${confScore})" class="btn btn-primary" style="width:100%;padding:16px;font-size:1rem">
        🚀 Go to My Dashboard →
      </button>
    </div>
  \`;
}

// Template literal fix for section title/sub:
const sectTitleEl = document.querySelector('.section-title');

function renderQuestionFixed() {
  const sec = sections[currentSection];
  const q = sec.questions[currentQ];
  const card = document.getElementById('assessmentCard');
  const totalQ = sections.reduce((s,sec) => s+sec.questions.length, 0);
  const doneQ = sections.slice(0,currentSection).reduce((s,sec) => s+sec.questions.length, 0) + currentQ;
  
  card.innerHTML = \`
    <div style="font-family:'Poppins',sans-serif;font-size:1.1rem;font-weight:700;margin-bottom:6px;color:var(--text)">\${sec.title}</div>
    <div style="font-size:0.85rem;color:var(--text-muted);margin-bottom:18px">\${sec.sub}</div>
    <div style="background:var(--bg);border-radius:10px;height:6px;margin-bottom:20px">
      <div style="width:\${Math.round(doneQ/totalQ*100)}%;height:100%;border-radius:100px;background:var(--primary);transition:width 0.5s"></div>
    </div>
    <div class="q-num">Question \${doneQ+1} of \${totalQ}</div>
    <div class="q-text">\${q.q}</div>
    <div id="optionsContainer">
      \${q.options.map((opt,i) => \`<div class="option" onclick="selectOption(\${i}, this)">
        <span class="option-icon">\${opt.icon}</span>
        <span>\${opt.text}</span>
      </div>\`).join('')}
    </div>
    <div class="nav-btns">
      <button class="btn btn-ghost" onclick="prevQ()" style="\${currentSection === 0 && currentQ === 0 ? 'visibility:hidden' : ''}">← Back</button>
      <button class="btn btn-primary" onclick="nextQ()">\${isLastQ() ? 'See My Results →' : 'Next →'}</button>
    </div>
  \`;
  
  // Restore selected if exists
  if (allAnswers[currentSection][currentQ] !== undefined) {
    const opts = document.querySelectorAll('.option');
    if (opts[allAnswers[currentSection][currentQ]]) {
      const el = opts[allAnswers[currentSection][currentQ]];
      el.style.borderColor = 'var(--primary)'; el.style.background = 'rgba(91,62,255,0.08)'; el.style.color = 'var(--primary)'; el.style.fontWeight = '600';
    }
  }
}

// Override renderQuestion with fixed version
window.renderQuestion = renderQuestionFixed;

function saveAndGo(lit, risk, conf) {
  try {
    const userStr = localStorage.getItem('herfiniq_user');
    const user = userStr ? JSON.parse(userStr) : {};
    user.literacyScore = lit;
    user.riskProfile = risk;
    user.confidenceScore = conf;
    user.assessmentDone = true;
    user.level = conf < 30 ? 1 : conf < 50 ? 2 : conf < 70 ? 3 : 4;
    user.xp = Math.round(lit + conf * 5);
    localStorage.setItem('herfiniq_user', JSON.stringify(user));
    
    // Update users repository to keep it consistent
    const usersStr = localStorage.getItem('herfiniq_users');
    const users = usersStr ? JSON.parse(usersStr) : [];
    const idx = users.findIndex(u => u.username === user.username);
    if (idx !== -1) { 
      users[idx] = user; 
      localStorage.setItem('herfiniq_users', JSON.stringify(users)); 
    }
    
    // Simplified redirect
    window.location.href = '/dashboard?lang=${lang}';
  } catch (err) {
    console.error('Save error:', err);
    window.location.href = '/dashboard?lang=${lang}';
  }
}

// Check if already logged in
if (!localStorage.getItem('herfiniq_token')) window.location.href = '/login';

// Init functions
window.selectOption = selectOption;
window.nextQ = nextQ;
window.prevQ = prevQ;
window.showResults = showResults;
window.saveAndGo = saveAndGo;
updateProgress();
renderQuestionFixed();
</script>
</body>
</html>`;
};
