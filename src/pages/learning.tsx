import { appShell } from './shell';
import { useTranslation } from '../i18n';

export const learningPage = (lang: string = 'en') => {
  const { t } = useTranslation(lang);
  const content = `
<div style="margin-bottom:24px">
  <h2 style="font-family:'Poppins',sans-serif;font-size:1.5rem;font-weight:700;color:var(--text);margin-bottom:4px">📚 ${t('learning_hub')}</h2>
  <p style="color:var(--text-muted);font-size:0.9rem">Master financial literacy through gamified modules tailored to your profile</p>
</div>

<!-- PROGRESS BANNER -->
<div style="background:linear-gradient(135deg,var(--primary),#7C3AED);border-radius:18px;padding:24px 28px;color:white;display:flex;align-items:center;justify-content:space-between;margin-bottom:24px;flex-wrap:wrap;gap:16px">
  <div>
    <div style="font-family:'Poppins',sans-serif;font-size:1.1rem;font-weight:700;margin-bottom:4px">Your Learning Journey</div>
    <div style="font-size:0.85rem;opacity:0.85;margin-bottom:14px" id="learningProgressText">2 of 8 modules completed • 1,240 XP earned</div>
    <div style="background:rgba(255,255,255,0.2);border-radius:100px;height:8px;width:280px;max-width:100%">
      <div style="width:25%;height:100%;border-radius:100px;background:white;transition:width 1s ease" id="overallProgress"></div>
    </div>
  </div>
  <div style="display:flex;gap:24px">
    <div style="text-align:center">
      <div style="font-family:'Poppins',sans-serif;font-size:1.8rem;font-weight:700" id="xpDisplay">1,240</div>
      <div style="font-size:0.75rem;opacity:0.8">XP Points</div>
    </div>
    <div style="text-align:center">
      <div style="font-family:'Poppins',sans-serif;font-size:1.8rem;font-weight:700" id="streakDisplay">12</div>
      <div style="font-size:0.75rem;opacity:0.8">Day Streak 🔥</div>
    </div>
    <div style="text-align:center">
      <div style="font-family:'Poppins',sans-serif;font-size:1.8rem;font-weight:700" id="badgeDisplay">3</div>
      <div style="font-size:0.75rem;opacity:0.8">Badges 🏅</div>
    </div>
  </div>
</div>

<!-- FILTER TABS -->
<div style="display:flex;gap:10px;margin-bottom:20px;flex-wrap:wrap">
  <button class="btn btn-primary btn-sm" id="filterAll" onclick="filterModules('all', this)">All Modules</button>
  <button class="btn btn-ghost btn-sm" id="filterProgress" onclick="filterModules('inprogress', this)">In Progress</button>
  <button class="btn btn-ghost btn-sm" id="filterCompleted" onclick="filterModules('completed', this)">Completed</button>
  <button class="btn btn-ghost btn-sm" id="filterRecommended" onclick="filterModules('recommended', this)">Recommended</button>
</div>

<!-- MODULES GRID -->
<div class="grid-3" id="modulesGrid" style="margin-bottom:28px">
  
  <div class="module-card" data-status="available" data-id="basics" onclick="openModule('basics')">
    <div class="module-header">
      <div class="module-icon" style="background:rgba(16,185,129,0.12)">🌱</div>
      <div class="module-info">
        <div class="module-title">Basics of Investing</div>
        <div class="module-desc">Understand what investing means, how money grows, and key financial concepts every woman must know.</div>
      </div>
    </div>
    <div style="display:flex;align-items:center;gap:8px">
      <div style="flex:1"><div class="progress-bar-wrap"><div class="progress-bar green" style="width:0%"></div></div></div>
      <div class="module-pct" style="font-size:0.72rem;font-weight:700;color:var(--text-muted)">0%</div>
    </div>
    <div class="module-meta">
      <span class="module-tag">+200 XP</span><span class="module-tag">Info+Quiz</span>
    </div>
    <div class="module-footer" style="display:flex;align-items:center;justify-content:space-between">
      <span class="badge badge-primary">Available</span><button class="btn btn-primary btn-sm">Start →</button>
    </div>
  </div>

  <div class="module-card" data-status="available" data-id="sip" onclick="openModule('sip')">
    <div class="module-header">
      <div class="module-icon" style="background:rgba(91,62,255,0.12)">📈</div>
      <div class="module-info">
        <div class="module-title">SIP Investing</div>
        <div class="module-desc">Master Systematic Investment Plans — how to start, choose amounts, and build long-term wealth.</div>
      </div>
    </div>
    <div style="display:flex;align-items:center;gap:8px">
      <div style="flex:1"><div class="progress-bar-wrap"><div class="progress-bar" style="width:0%"></div></div></div>
      <div class="module-pct" style="font-size:0.72rem;font-weight:700;color:var(--text-muted)">0%</div>
    </div>
    <div class="module-meta">
      <span class="module-tag">+250 XP</span><span class="module-tag">Info+Quiz</span>
    </div>
    <div class="module-footer" style="display:flex;align-items:center;justify-content:space-between">
      <span class="badge badge-primary">Available</span><button class="btn btn-primary btn-sm">Start →</button>
    </div>
  </div>

  <div class="module-card" data-status="available" data-id="mutual-funds" onclick="openModule('mutual-funds')">
    <div class="module-header">
      <div class="module-icon" style="background:rgba(245,158,11,0.12)">🏦</div>
      <div class="module-info">
        <div class="module-title">Mutual Funds Guide</div>
        <div class="module-desc">Understand NAV, fund categories, ELSS, and how to pick the right mutual fund for your goals.</div>
      </div>
    </div>
    <div style="display:flex;align-items:center;gap:8px">
      <div style="flex:1"><div class="progress-bar-wrap"><div class="progress-bar coral" style="width:0%"></div></div></div>
      <div class="module-pct" style="font-size:0.72rem;font-weight:700;color:var(--text-muted)">0%</div>
    </div>
    <div class="module-meta">
      <span class="module-tag">🕐 35 min</span><span class="module-tag">+200 XP</span><span class="module-tag">Info+Quiz</span>
    </div>
    <div class="module-footer" style="display:flex;align-items:center;justify-content:space-between">
      <span class="badge badge-accent">Recommended</span><button class="btn btn-primary btn-sm">Start →</button>
    </div>
  </div>

  <div class="module-card" data-status="available" data-id="risk" onclick="openModule('risk')">
    <div class="module-header">
      <div class="module-icon" style="background:rgba(239,68,68,0.1)">⚖️</div>
      <div class="module-info">
        <div class="module-title">Risk Diversification</div>
        <div class="module-desc">Learn how to spread investments across assets, manage portfolio risk, and balance growth vs safety.</div>
      </div>
    </div>
    <div style="display:flex;align-items:center;gap:8px">
      <div style="flex:1"><div class="progress-bar-wrap"><div class="progress-bar" style="width:0%"></div></div></div>
      <div class="module-pct" style="font-size:0.72rem;font-weight:700;color:var(--text-muted)">0%</div>
    </div>
    <div class="module-meta">
      <span class="module-tag">🕐 40 min</span><span class="module-tag">+225 XP</span><span class="module-tag">Info+Quiz</span>
    </div>
    <div class="module-footer" style="display:flex;align-items:center;justify-content:space-between">
      <span class="badge badge-primary">Available</span><button class="btn btn-primary btn-sm">Start →</button>
    </div>
  </div>

  <div class="module-card" data-status="available" data-id="stocks" onclick="openModule('stocks')">
    <div class="module-header">
      <div class="module-icon" style="background:rgba(16,185,129,0.1)">📊</div>
      <div class="module-info">
        <div class="module-title">Stock Market Basics</div>
        <div class="module-desc">BSE, NSE, fundamentals, reading charts, and how to start buying stocks as a beginner.</div>
      </div>
    </div>
    <div style="display:flex;align-items:center;gap:8px">
      <div style="flex:1"><div class="progress-bar-wrap"><div class="progress-bar" style="width:0%"></div></div></div>
      <div class="module-pct" style="font-size:0.72rem;font-weight:700;color:var(--text-muted)">0%</div>
    </div>
    <div class="module-meta">
      <span class="module-tag">🕐 50 min</span><span class="module-tag">+300 XP</span><span class="module-tag">Info+Quiz</span>
    </div>
    <div class="module-footer" style="display:flex;align-items:center;justify-content:space-between">
      <span class="badge badge-primary">Available</span><button class="btn btn-primary btn-sm">Start →</button>
    </div>
  </div>

  <div class="module-card" data-status="available" data-id="personal-finance" onclick="openModule('personal-finance')">
    <div class="module-header">
      <div class="module-icon" style="background:rgba(255,107,107,0.1)">💝</div>
      <div class="module-info">
        <div class="module-title">Personal Finance for Women</div>
        <div class="module-desc">Budgeting, salary negotiation, planning for life events, and building wealth as a modern Indian woman.</div>
      </div>
    </div>
    <div style="display:flex;align-items:center;gap:8px">
      <div style="flex:1"><div class="progress-bar-wrap"><div class="progress-bar coral" style="width:0%"></div></div></div>
      <div class="module-pct" style="font-size:0.72rem;font-weight:700;color:var(--text-muted)">0%</div>
    </div>
    <div class="module-meta">
      <span class="module-tag">🕐 45 min</span><span class="module-tag">+275 XP</span><span class="module-tag">Info+Quiz</span>
    </div>
    <div class="module-footer" style="display:flex;align-items:center;justify-content:space-between">
      <span class="badge badge-primary">Available</span><button class="btn btn-primary btn-sm">Start →</button>
    </div>
  </div>

  <div class="module-card" data-status="available" data-id="crypto" onclick="openModule('crypto')">
    <div class="module-header">
      <div class="module-icon" style="background:rgba(245,158,11,0.1)">🪙</div>
      <div class="module-info">
        <div class="module-title">Crypto & Web3 Basics</div>
        <div class="module-desc">Learn about Blockchain, Bitcoin, Ethereum, and the risks of crypto investments.</div>
      </div>
    </div>
    <div style="display:flex;align-items:center;gap:8px">
      <div style="flex:1"><div class="progress-bar-wrap"><div class="progress-bar" style="width:0%"></div></div></div>
      <div class="module-pct" style="font-size:0.72rem;font-weight:700;color:var(--text-muted)">0%</div>
    </div>
    <div class="module-meta">
      <span class="module-tag">🕐 20 min</span><span class="module-tag">+150 XP</span><span class="module-tag">Info+Quiz</span>
    </div>
    <div class="module-footer" style="display:flex;align-items:center;justify-content:space-between">
      <span class="badge badge-primary">Available</span><button class="btn btn-primary btn-sm">Start →</button>
    </div>
  </div>

  <div class="module-card" data-status="available" data-id="tax" onclick="openModule('tax')">
    <div class="module-header">
      <div class="module-icon" style="background:rgba(16,185,129,0.1)">🧾</div>
      <div class="module-info">
        <div class="module-title">Tax Planning & 80C</div>
        <div class="module-desc">Understand Income Tax in India, old vs new regime, and ways to save tax legally.</div>
      </div>
    </div>
    <div style="display:flex;align-items:center;gap:8px">
      <div style="flex:1"><div class="progress-bar-wrap"><div class="progress-bar" style="width:0%"></div></div></div>
      <div class="module-pct" style="font-size:0.72rem;font-weight:700;color:var(--text-muted)">0%</div>
    </div>
    <div class="module-meta">
      <span class="module-tag">🕐 30 min</span><span class="module-tag">+250 XP</span><span class="module-tag">Info+Quiz</span>
    </div>
    <div class="module-footer" style="display:flex;align-items:center;justify-content:space-between">
      <span class="badge badge-primary">Available</span><button class="btn btn-primary btn-sm">Start →</button>
    </div>
  </div>

</div>

<!-- MODULE MODAL -->
<div id="moduleModal" style="display:none;position:fixed;inset:0;z-index:1000;background:rgba(0,0,0,0.5);backdrop-filter:blur(6px);align-items:center;justify-content:center;padding:20px">
  <div style="background:white;border-radius:24px;max-width:700px;width:100%;max-height:90vh;overflow-y:auto;box-shadow:0 24px 80px rgba(0,0,0,0.2)">
    <div style="padding:28px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between">
      <div id="modalModuleTitle" style="font-family:'Poppins',sans-serif;font-size:1.2rem;font-weight:700">Module Title</div>
      <button onclick="closeModal()" style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:6px 12px;cursor:pointer;font-family:'Inter',sans-serif;font-size:0.82rem">✕ Close</button>
    </div>
    <div id="modalContent" style="padding:28px"></div>
  </div>
</div>

<script>
const user = JSON.parse(localStorage.getItem('herfiniq_user') || '{}');
if (!localStorage.getItem('herfiniq_token')) window.location.href = '/login';

document.getElementById('xpDisplay').textContent = (user.xp || 1240).toLocaleString();
document.getElementById('streakDisplay').textContent = 12;
document.getElementById('badgeDisplay').textContent = (user.badges || []).length || 3;
const completed = (user.modulesCompleted || ['basics','sip']).length;
document.getElementById('learningProgressText').textContent = completed + ' of 8 modules completed • ' + (user.xp || 1240).toLocaleString() + ' XP earned';
setTimeout(() => { document.getElementById('overallProgress').style.width = Math.round(completed/8*100) + '%'; }, 300);

function refreshModules() {
  const u = JSON.parse(localStorage.getItem('herfiniq_user') || '{}');
  const completedList = u.modulesCompleted || ['basics','sip'];
  
  document.querySelectorAll('.module-card').forEach(card => {
    const id = card.getAttribute('data-id');
    if (completedList.includes(id)) {
      card.setAttribute('data-status', 'completed');
      const pb = card.querySelector('.progress-bar');
      if (pb) { pb.style.width = '100%'; pb.className = 'progress-bar green'; }
      const pct = card.querySelector('.module-pct');
      if (pct) { pct.textContent = '100%'; pct.style.color = 'var(--success)'; }
      const footer = card.querySelector('.module-footer');
      if (footer) {
        const isBadge = id === 'basics' ? '🏅' : id === 'sip' ? '🏆' : '⭐';
        footer.innerHTML = '<span class="badge badge-success">✓ Completed</span><span style="font-size:1.5rem">' + isBadge + '</span>';
      }
    }
  });
}
refreshModules();

function filterModules(filter, btn) {
  document.querySelectorAll('[id^=filter]').forEach(b => { b.classList.remove('btn-primary'); b.classList.add('btn-ghost','btn-sm'); });
  btn.classList.add('btn-primary'); btn.classList.remove('btn-ghost');
  document.querySelectorAll('.module-card').forEach(card => {
    const status = card.dataset.status;
    if (filter === 'all') { card.style.display = 'flex'; return; }
    card.style.display = (status === filter || (filter === 'inprogress' && status === 'inprogress')) ? 'flex' : 'none';
  });
}

const moduleData = {
  'basics': {
    title: '🌱 Basics of Investing',
    info: 'Investing means putting your money to work to earn more money over time. When you invest, you are buying assets that can grow in value or provide income. It is the best way to beat inflation. Compound interest is the 8th wonder of the world! If you invest ₹1,000 at 15% annual return: After 1 year: ₹1,150. After 10 years: ₹4,046. After 20 years: ₹16,367. Start early — time is your biggest asset!',
    flashcards: [
      { front: 'What is Compound Interest?', back: 'Interest on interest, meaning your wealth grows exponentially over time.' },
      { front: 'What is Inflation?', back: 'The general increase in prices and fall in the purchasing value of money.' }
    ],
    quiz: [
      { q: 'What is the primary goal of investing?', options: ['To keep money safe in a bank', 'To make money grow over time', 'To spend money efficiently', 'To avoid taxes'], answer: 1 },
      { q: 'What makes compound interest powerful?', options: ['You get interest only on principal', 'Interest earns interest over time', 'Returns are guaranteed', 'Taxes are automatically deducted'], answer: 1 },
      { q: 'What is inflation?', options: ['Money growth', 'Price rise over time', 'Taxes', 'Wealth'], answer: 1 },
      { q: 'Which investment type typically has the highest risk/reward?', options: ['Fixed Deposits', 'Government Bonds', 'Stocks', 'Savings Account'], answer: 2 },
      { q: 'Best time to start investing?', options: ['Tomorrow', 'When rich', 'As early as possible', 'Never'], answer: 2 }
    ]
  },
  'mutual-funds': {
    title: '🏦 Mutual Funds Guide',
    info: 'A mutual fund pools money from many investors and invests it in stocks, bonds, or other assets. A professional fund manager manages this money. Even ₹500/month can get you started via SIP! NAV (Net Asset Value) is the price per unit of a mutual fund.',
    flashcards: [
      { front: 'What is a Fund Manager?', back: 'A professional who decides where to invest the mutual fund\\'s money.' },
      { front: 'What is ELSS?', back: 'Equity Linked Savings Scheme - a mutual fund that offers tax benefits under Section 80C.' }
    ],
    quiz: [
      { q: 'Who manages money in a mutual fund?', options: ['You personally', 'A professional fund manager', 'The government', 'A bank teller'], answer: 1 },
      { q: 'If you invest ₹10,000 at NAV of ₹100, how many units do you get?', options: ['10 units', '100 units', '1000 units', '50 units'], answer: 1 },
      { q: 'What is the lock-in period for ELSS mutual funds?', options: ['1 year', '3 years', '5 years', '7 years'], answer: 1 },
      { q: 'What does NAV stand for?', options: ['National Asset Value', 'Net Asset Value', 'New Asset Valuation', 'None of the above'], answer: 1 },
      { q: 'Can you start a mutual fund with small amounts?', options: ['No, requires ₹1 Lakh', 'Yes, even ₹500/month via SIP', 'Only with a demat account', 'No, only for HNIs'], answer: 1 }
    ]
  },
  'sip': {
    title: '📈 SIP Investing',
    info: 'SIP (Systematic Investment Plan) means investing a fixed amount regularly (monthly/quarterly) in a mutual fund. Benefits: Rupee Cost Averaging, discipline, no need to time the market, start with just ₹500/month.',
    flashcards: [
      { front: 'What is Rupee Cost Averaging?', back: 'Buying more units when market is down and fewer when market is up, averaging your cost.' },
      { front: 'Best trait of SIP?', back: 'Discipline and Automation. No need to time the market.' }
    ],
    quiz: [
      { q: 'What is the key benefit of SIP investing?', options: ['Guaranteed returns', 'Rupee cost averaging and discipline', 'No tax on gains', 'No risk involved'], answer: 1 },
      { q: 'What happens when market falls during SIP?', options: ['You lose money permanently', 'You get more units for the same money', 'SIP stops automatically', 'Your returns increase immediately'], answer: 1 },
      { q: 'How often can SIP be done?', options: ['Only Yearly', 'Only Monthly', 'Daily, Weekly, Monthly, etc.', 'Only once'], answer: 2 },
      { q: 'Does SIP guarantee a profit?', options: ['Yes always', 'No, it is market linked', 'Yes if ELSS', 'Only for 5+ years'], answer: 1 },
      { q: 'Can you stop an SIP anytime?', options: ['No, strict lock-in', 'Yes, you can pause or stop anytime (except ELSS lock-in)', 'Only with a penalty', 'No, it is a loan'], answer: 1 }
    ]
  }
};

let currentModule = null;
let currentStep = 'info'; // info, flashcards, quiz
let infoDone = false;
let flashcardIdx = 0;
let quizAnswers = [];
let quizScore = 0;

function openModule(id) {
  const data = moduleData[id];
  if (!data) {
    showModulePreview(id);
    return;
  }
  currentModule = id; currentStep = 'info'; infoDone = false; flashcardIdx = 0; quizAnswers = []; quizScore = 0;
  document.getElementById('modalModuleTitle').textContent = data.title;
  renderModuleView();
  document.getElementById('moduleModal').style.display = 'flex';
}

function renderModuleView() {
  const data = moduleData[currentModule];
  const container = document.getElementById('modalContent');
  
  if (currentStep === 'info') {
    container.innerHTML = \`
      <div style="background:var(--bg);border-radius:14px;padding:20px;margin-bottom:20px;font-size:0.9rem;line-height:1.7;color:var(--text)">
        <h3 style="margin-bottom:12px">📖 Study Material</h3>
        \${data.info}
      </div>
      <button onclick="nextStep()" class="btn btn-primary" style="width:100%">Next: Flashcards 🃏</button>
    \`;
  }
  else if (currentStep === 'flashcards') {
    const card = data.flashcards[flashcardIdx];
    container.innerHTML = \`
      <div style="text-align:center;margin-bottom:16px"><span style="font-size:0.8rem;color:var(--text-muted)">Flashcard \${flashcardIdx+1} of \${data.flashcards.length}</span></div>
      <div class="flashcard-container" style="background:#fff;border:2px solid var(--border);border-radius:16px;padding:40px 20px;text-align:center;cursor:pointer;min-height:200px;display:flex;align-items:center;justify-content:center;box-shadow:0 10px 30px rgba(0,0,0,0.05)" onclick="toggleFlashcard(this)">
        <div class="fc-front" style="font-size:1.2rem;font-weight:600">\${card.front}</div>
        <div class="fc-back" style="display:none;font-size:1.1rem;color:var(--primary);font-weight:600">\${card.back}</div>
      </div>
      <p style="text-align:center;font-size:0.75rem;color:var(--text-muted);margin-top:10px">Click card to reveal answer</p>
      <div style="display:flex;justify-content:space-between;margin-top:20px">
        <button onclick="prevFlashcard()" class="btn btn-ghost" \${flashcardIdx === 0 ? 'disabled' : ''}>← Previous</button>
        \${flashcardIdx < data.flashcards.length - 1 
          ? \`<button onclick="nextFlashcard()" class="btn btn-primary">Next Card →</button>\`
          : \`<button onclick="startQuiz()" class="btn btn-primary">Start Quiz 🧠</button>\`}
      </div>
    \`;
  }
  else if (currentStep === 'quiz') {
    // Render all questions
    let html = '<h3 style="margin-bottom:20px">🧠 Final Quiz (Need 80% to pass)</h3>';
    data.quiz.forEach((q, qIndex) => {
      html += \`
        <div style="margin-bottom:24px;border-bottom:1px solid var(--border);padding-bottom:16px">
          <div style="font-weight:600;margin-bottom:10px">\${qIndex+1}. \${q.q}</div>
          <div style="display:flex;flex-direction:column;gap:8px">
            \${q.options.map((opt, oIndex) => \`
              <label style="display:flex;align-items:center;padding:10px 14px;border:1px solid var(--border);border-radius:8px;cursor:pointer" id="lbl-\${qIndex}-\${oIndex}">
                <input type="radio" name="q\${qIndex}" value="\${oIndex}" onchange="selectQuizOption(\${qIndex}, \${oIndex})" style="margin-right:10px">
                \${opt}
              </label>
            \`).join('')}
          </div>
        </div>
      \`;
    });
    html += \`<button onclick="submitQuiz()" class="btn btn-primary" style="width:100%;font-size:1.1rem;padding:14px">Submit Quiz →</button>\`;
    container.innerHTML = html;
  }
}

function nextStep() {
  if (currentStep === 'info') currentStep = 'flashcards';
  renderModuleView();
}

function toggleFlashcard(el) {
  const f = el.querySelector('.fc-front');
  const b = el.querySelector('.fc-back');
  if (f.style.display !== 'none') { f.style.display = 'none'; b.style.display = 'block'; el.style.background = 'rgba(91,62,255,0.05)'; el.style.borderColor = 'var(--primary)'; }
  else { f.style.display = 'block'; b.style.display = 'none'; el.style.background = '#fff'; el.style.borderColor = 'var(--border)'; }
}

function nextFlashcard() { flashcardIdx++; renderModuleView(); }
function prevFlashcard() { flashcardIdx--; renderModuleView(); }
function startQuiz() { currentStep = 'quiz'; quizAnswers = new Array(moduleData[currentModule].quiz.length).fill(null); renderModuleView(); }

function selectQuizOption(qIdx, oIdx) {
  quizAnswers[qIdx] = oIdx;
  document.querySelectorAll(\`[id^='lbl-\${qIdx}-']\`).forEach(el => { el.style.borderColor='var(--border)'; el.style.background='#fff';});
  const lbl = document.getElementById(\`lbl-\${qIdx}-\${oIdx}\`);
  lbl.style.borderColor='var(--primary)'; lbl.style.background='rgba(91,62,255,0.05)';
}

function submitQuiz() {
  if (quizAnswers.includes(null)) { alert('Please answer all questions!'); return; }
  
  const data = moduleData[currentModule];
  let correct = 0;
  quizAnswers.forEach((ans, idx) => { if (ans === data.quiz[idx].answer) correct++; });
  const scorePct = (correct / data.quiz.length) * 100;
  
  document.getElementById('modalContent').innerHTML = \`
    <div style="text-align:center;padding:40px 20px">
      <div style="font-size:4rem;margin-bottom:16px">\${scorePct >= 80 ? '🏆' : '😢'}</div>
      <div style="font-family:'Poppins',sans-serif;font-size:1.4rem;font-weight:700;margin-bottom:8px">\${scorePct >= 80 ? 'Module Complete!' : 'Try Again'}</div>
      <div style="font-size:1.1rem;font-weight:600;margin-bottom:8px">You scored \${Math.round(scorePct)}% (\${correct}/\${data.quiz.length})</div>
      <div style="font-size:0.9rem;color:var(--text-muted);margin-bottom:24px">\${scorePct >= 80 ? 'You earned +200 XP and unlocked a badge!' : 'You need 80% to pass. Please review the flashcards and try the quiz again.'}</div>
      <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
        \${scorePct >= 80 
          ? \`<button onclick="markModuleComplete(); closeModal()" class="btn btn-primary">Awesome!</button>\`
          : \`<button onclick="startQuiz()" class="btn btn-primary">Retake Quiz</button>\`}
      </div>
    </div>
  \`;
}

function markModuleComplete() {
  const user = JSON.parse(localStorage.getItem('herfiniq_user') || '{}');
  if (!user.modulesCompleted) user.modulesCompleted = [];
  if (!user.modulesCompleted.includes(currentModule)) {
    user.modulesCompleted.push(currentModule);
    user.xp = (user.xp || 0) + 200;
    user.confidenceScore = Math.min(100, (user.confidenceScore || 0) + 8);
    if (!user.badges) user.badges = [];
    user.badges.push(currentModule + '_badge');
    localStorage.setItem('herfiniq_user', JSON.stringify(user));
  }
}

function showModulePreview(id) {
  document.getElementById('modalModuleTitle').textContent = 'Module Locked/Preview';
  document.getElementById('modalContent').innerHTML = \`
    <div style="text-align:center;padding:40px 20px">
      <div style="font-size:3rem;margin-bottom:16px">📚</div>
      <div style="font-family:'Poppins',sans-serif;font-size:1.1rem;font-weight:600;margin-bottom:8px">Content Preparation</div>
      <div style="font-size:0.85rem;color:var(--text-muted);margin-bottom:20px">This module is currently generating adaptive content. Complete unlocked modules first!</div>
      <button onclick="closeModal()" class="btn btn-primary">Back to Modules</button>
    </div>
  \`;
  document.getElementById('moduleModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('moduleModal').style.display = 'none';
  refreshModules();
  const u = JSON.parse(localStorage.getItem('herfiniq_user') || '{}');
  document.getElementById('xpDisplay').textContent = (u.xp || 1240).toLocaleString();
  document.getElementById('badgeDisplay').textContent = (u.badges || []).length || 3;
}

window.openModule = openModule;
window.filterModules = filterModules;
window.closeModal = closeModal;
window.nextStep = nextStep;
window.toggleFlashcard = toggleFlashcard;
window.nextFlashcard = nextFlashcard;
window.prevFlashcard = prevFlashcard;
window.startQuiz = startQuiz;
window.selectQuizOption = selectQuizOption;
window.submitQuiz = submitQuiz;
window.markModuleComplete = markModuleComplete;
</script>
`;
  return appShell(content, lang, 'Learning Hub') + '</body></html>';
};
