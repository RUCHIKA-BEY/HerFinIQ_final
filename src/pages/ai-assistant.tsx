import { appShell, getAppLogo } from './shell';
import i18next from 'i18next';

export const aiAssistantPage = (lang: string = 'en') => {
  const t = (key: string) => i18next.t(key, { lng: lang });

  const content = `
<div style="margin-bottom:20px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px">
  <div style="display:flex;align-items:center;gap:12px">
    <div style="background:var(--primary);border-radius:10px;padding:6px">${getAppLogo(28, 28)}</div>
    <div>
      <h2 style="font-family:'Poppins',sans-serif;font-size:1.5rem;font-weight:700;color:var(--text);margin-bottom:4px">${t('ai_mentor_title')}</h2>
      <p style="color:var(--text-muted);font-size:0.88rem">${t('ai_mentor_sub')}</p>
    </div>
  </div>
  <div style="display:flex;align-items:center;gap:10px">
    <select id="langSelect" style="padding:7px 12px;border:1px solid var(--border);border-radius:10px;font-size:0.8rem;background:white;color:var(--text);font-family:'Inter',sans-serif" onchange="changeLangSelect(this.value)">
      <option value="en" ${lang === 'en' ? 'selected' : ''}>English</option>
      <option value="hi" ${lang === 'hi' ? 'selected' : ''}>हिंदी</option>
      <option value="ta" ${lang === 'ta' ? 'selected' : ''}>தமிழ்</option>
      <option value="te" ${lang === 'te' ? 'selected' : ''}>తెలుగు</option>
      <option value="mr" ${lang === 'mr' ? 'selected' : ''}>मराठी</option>
      <option value="kn" ${lang === 'kn' ? 'selected' : ''}>ಕನ್ನಡ</option>
    </select>
    <button onclick="clearChat()" style="padding:7px 14px;border-radius:10px;border:1px solid var(--border);background:white;color:var(--text-muted);font-size:0.8rem;cursor:pointer;font-family:'Inter',sans-serif">↺ ${t('clear_chat')}</button>
  </div>
</div>

<div style="display:grid;grid-template-columns:300px 1fr;gap:20px;height:calc(100vh - 200px)">

  <div style="display:flex;flex-direction:column;gap:14px;overflow-y:auto;padding-right:4px">
    <div class="card card-body">
      <div style="font-size:0.75rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:12px">${t('your_profile')}</div>
      <div style="display:flex;flex-direction:column;gap:8px">
        <div style="display:flex;justify-content:space-between;font-size:0.82rem">
          <span style="color:var(--text-muted)">${t('confidence')}:</span>
          <span style="font-weight:700;color:var(--primary)" id="profileConf">72/100</span>
        </div>
        <div class="progress-bar-wrap"><div class="progress-bar" id="confBar" style="width:0%"></div></div>
        <div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-top:4px">
          <span style="color:var(--text-muted)">${t('literacy')}:</span>
          <span style="font-weight:700;color:var(--success)" id="profileLit">62/100</span>
        </div>
        <div class="progress-bar-wrap"><div class="progress-bar green" id="litBar" style="width:0%"></div></div>
        <div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-top:4px">
          <span style="color:var(--text-muted)">${t('risk_profile')}:</span>
          <span style="font-weight:700;color:var(--warning)" id="profileRisk">Moderate</span>
        </div>
      </div>
    </div>
    
    <div class="tip-card">
      <div class="tip-label">🤖 ${t('ai_mode')}</div>
      <div id="aiModeText" style="font-size:0.82rem;color:var(--text);line-height:1.5">Personalized mentor using ${t('ai_mode')} based on your ${t('confidence')} level.</div>
    </div>
    
    <div class="card card-body">
      <div style="font-size:0.75rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:10px">${t('quick_questions')}</div>
      <div style="display:flex;flex-direction:column;gap:6px" id="quickQuestions">
        <button class="quiz-option" style="font-size:0.78rem;padding:10px 12px;text-align:left" onclick="sendQuick(this.textContent)">What is a SIP?</button>
        <button class="quiz-option" style="font-size:0.78rem;padding:10px 12px;text-align:left" onclick="sendQuick(this.textContent)">How do mutual funds work?</button>
        <button class="quiz-option" style="font-size:0.78rem;padding:10px 12px;text-align:left" onclick="sendQuick(this.textContent)">Is stock market risky for beginners?</button>
        <button class="quiz-option" style="font-size:0.78rem;padding:10px 12px;text-align:left" onclick="sendQuick(this.textContent)">How much should I save each month?</button>
      </div>
    </div>
    
    <div class="card card-body">
      <div style="font-size:0.75rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:10px">🤖 ${t('select_ai_model')}</div>
      <select id="aiModelSelect" style="width:100%;padding:8px 10px;border:1px solid var(--border);border-radius:8px;font-size:0.75rem;font-family:'Inter',sans-serif;margin-bottom:12px;outline:none">
        <option value="sarvam-v3">Sarvam V3 (Indic Focus)</option>
        <option value="bulbul-v3">Bulbul V3 (Fast)</option>
        <option value="sarvam-vision">Sarvam Vision</option>
        <option value="gemini-pro" selected>Gemini Pro</option>
      </select>
      <div style="font-size:0.75rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:10px">🔑 ${t('api_key')}</div>
      <input type="password" id="apiKeyInput" placeholder="${t('api_key_placeholder')}" style="width:100%;padding:8px 10px;border:1px solid var(--border);border-radius:8px;font-size:0.78rem;font-family:'Inter',sans-serif;margin-bottom:8px;outline:none">
      <button onclick="saveApiKey()" style="width:100%;padding:8px;border-radius:8px;border:none;background:var(--primary);color:white;font-size:0.78rem;font-weight:600;cursor:pointer;font-family:'Inter',sans-serif">${t('connect_model')}</button>
    </div>
  </div>

  <!-- CHAT AREA -->
  <div class="card" style="display:flex;flex-direction:column;overflow:hidden;padding:0">
    <div style="padding:16px 20px;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:12px;flex-shrink:0">
      <div style="width:40px;height:40px;border-radius:12px;background:linear-gradient(135deg,var(--primary),#A855F7);display:flex;align-items:center;justify-content:center;color:white;font-size:0.9rem;font-weight:700">AI</div>
      <div>
        <div style="font-family:'Poppins',sans-serif;font-weight:700;font-size:0.95rem">HerFinIQ Mentor</div>
        <div style="font-size:0.72rem;color:var(--text-muted);display:flex;align-items:center;gap:4px"><span style="width:6px;height:6px;border-radius:50%;background:var(--success);display:inline-block"></span> <span id="statusText">${t('ai_ready')}</span></div>
      </div>
    </div>
    
    <div class="chat-messages" id="chatMessages">
      <!-- Initial message rendered by JS -->
    </div>
    
    <div class="chat-input-area" style="flex-shrink:0">
      <div class="chat-input-row">
        <textarea id="chatInput" rows="1" placeholder="${t('ask_anything_placeholder')}" onkeydown="handleKey(event)" oninput="autoResize(this)"></textarea>
        <button class="chat-send" onclick="sendMessage()" id="sendBtn">→</button>
      </div>
      <div style="font-size:0.7rem;color:var(--text-muted);margin-top:6px">${t('press_enter')}</div>
    </div>
  </div>
</div>

<script>
if (!localStorage.getItem('herfiniq_token')) window.location.href = '/login';
const user = JSON.parse(localStorage.getItem('herfiniq_user') || '{}');
const conf = user.confidenceScore !== undefined ? user.confidenceScore : 72;
const lit = user.literacyScore !== undefined ? user.literacyScore : 62;
const risk = user.riskProfile || 'Moderate';
let AI_KEY = sessionStorage.getItem('ai_api_key') || '';
const conversationHistory = [];

document.getElementById('profileConf').textContent = conf + '/100';
document.getElementById('profileLit').textContent = lit + '/100';
document.getElementById('profileRisk').textContent = risk;
setTimeout(() => {
  const cBar = document.getElementById('confBar');
  const lBar = document.getElementById('litBar');
  if (cBar) cBar.style.width = conf + '%';
  if (lBar) lBar.style.width = lit + '%';
}, 300);

function saveApiKey() {
  const key = document.getElementById('apiKeyInput').value.trim();
  if (key) { sessionStorage.setItem('ai_api_key', key); AI_KEY = key; alert('✅ API key connected successfully!'); }
}

// Initial greeting
window.onload = () => {
  const greetings = {
    low: 'Namaste! 🙏 I see you\\'re at the beginning of your financial journey with a ' + conf + '% confidence score. That\\'s perfectly fine! Let\\'s start with the basics. I recommend exploring **SIP investing** before trying stocks. Every expert was once a beginner. What would you like to learn today?',
    medium: 'Hello! 👋 Great to see you here. With your ' + conf + '% confidence score and ' + risk + ' risk profile, you\\'re ready to explore **Mutual Funds and SIP strategies**. Your financial literacy is growing nicely! What investing question can I help you with today?',
    high: 'Welcome! 🚀 With your impressive ' + conf + '% confidence score and ' + risk + ' risk profile, you\\'re ready for more advanced topics like **equity investing, portfolio rebalancing, and tax-efficient strategies**. What strategic question can I help you with today?'
  };
  const greeting = conf < 40 ? greetings.low : conf < 70 ? greetings.medium : greetings.high;
  addMessage('ai', greeting);
};

function addMessage(role, text) {
  const msgs = document.getElementById('chatMessages');
  if (!msgs) return;
  const time = new Date().toLocaleTimeString('en-IN', {hour:'2-digit',minute:'2-digit'});
  const div = document.createElement('div');
  div.className = 'msg ' + (role === 'user' ? 'user' : '');
  const formatted = text.replace(/\\*\\*(.*?)\\*\\*/g, '<strong>$1</strong>').replace(/\\n/g, '<br>');
  div.innerHTML = \`
    <div class="msg-avatar-sm \${role === 'ai' ? 'ai' : 'user-av'}">\${role === 'ai' ? 'AI' : (user.name || 'U')[0]}</div>
    <div>
      <div class="msg-bubble \${role === 'ai' ? 'ai' : 'user'}">\${formatted}</div>
      <div style="font-size:0.65rem;color:var(--text-muted);margin-top:3px;\${role === 'user' ? 'text-align:right' : ''}">\${time}</div>
    </div>
  \`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
  // History for API
  conversationHistory.push({role: role === 'ai' ? 'model' : 'user', parts: [{text: text}]});
}

function addTyping() {
  const msgs = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = 'msg'; div.id = 'typingIndicator';
  div.innerHTML = \`<div class="msg-avatar-sm ai">AI</div><div class="msg-bubble ai"><div class="typing-indicator"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div></div>\`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

async function sendMessage() {
  const input = document.getElementById('chatInput');
  const msg = input.value.trim();
  if (!msg) return;
  input.value = ''; input.style.height = 'auto';
  addMessage('user', msg);
  addTyping();
  document.getElementById('sendBtn').disabled = true;
  
  let reply;
  const modelBox = document.getElementById('aiModelSelect');
  const model = modelBox ? modelBox.value : 'gemini-pro';

  if (AI_KEY) {
    try {
      const languageMap = { en: 'English', hi: 'Hindi', ta: 'Tamil', te: 'Telugu', mr: 'Marathi', kn: 'Kannada' };
      const selectedLanguage = languageMap['${lang}'] || 'English';
      
      const systemPrompt = \`You are HerFinIQ AI Mentor — a warm, encouraging financial advisor for women in India. 
Explain concepts simply and respond in the following language: \${selectedLanguage}.
User profile: Confidence Score: \${conf}/100, Literacy Score: \${lit}/100, Risk Profile: \${risk}.
IMPORTANT RULE: If confidence < 40, discourage complex investments (stocks, derivatives) and suggest starting with basics and SIP. If confidence 40-70, suggest mutual funds, SIP, government schemes. If confidence > 70, can discuss equity, diversified portfolio.
Always use Indian context (₹ currency, Indian schemes like MUDRA, PMJDY, SIP). Be encouraging but realistic. Keep responses concise (3-5 sentences). Format with clear paragraphs.\`;
      
      if (model === 'gemini-pro') {
          // chatHistory includes the last user message already
          const chatHistory = conversationHistory.slice(-6); 
          const res = await fetch(\`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=\${AI_KEY}\`, {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({ 
              contents: chatHistory,
              // Use system_instruction if available or just prepend
               system_instruction: { parts: [{ text: systemPrompt }] }
            })
          });
          const data = await res.json();
          reply = data.candidates?.[0]?.content?.parts?.[0]?.text || getSmartResponse(msg);
      } else {
          // Sarvam models integration
          const res = await fetch('https://api.sarvam.ai/chat/completions', {
             method: 'POST',
             headers: {'Content-Type':'application/json', 'Authorization': 'Bearer ' + AI_KEY},
             body: JSON.stringify({
                 model: model,
                 messages: [
                     {role:'system', content:systemPrompt},
                     ...conversationHistory.slice(-6).map((m) => ({role: m.role==='model'?'assistant':'user', content:m.parts[0].text}))
                 ],
                 temperature: 0.7
             })
          });
          const data = await res.json();
          reply = data.choices?.[0]?.message?.content || getSmartResponse(msg);
      }
    } catch(e) { 
      console.error('AI Fetch error:', e);
      reply = getSmartResponse(msg); 
    }
  } else {
    reply = getSmartResponse(msg);
  }
  
  const typing = document.getElementById('typingIndicator');
  if (typing) typing.remove();
  addMessage('ai', reply);
  document.getElementById('sendBtn').disabled = false;
}

function getSmartResponse(msg) {
  const q = msg.toLowerCase();
  if (conf < 40) {
    if (q.includes('stock') || q.includes('equity') || q.includes('share')) return "I can see your confidence is still building at " + conf + "%! While stocks are exciting, they carry high risk and require strong financial knowledge. I'd suggest first completing our **Basics of Investing** and **SIP** modules. Once your confidence reaches 60%+, we can explore equity investments together! 🌱";
    if (q.includes('sip')) return "**SIP (Systematic Investment Plan)** is perfect for you right now! Start with just ₹500/month in a diversified mutual fund. It's automatic, disciplined, and averages your buying cost. The key is to start **small and consistent**. Want me to explain how to open your first SIP account? 📈";
  }
  const responses = {
    sip: "**SIP (Systematic Investment Plan)** means investing a fixed amount (₹500-₹5000) every month in a mutual fund. Benefits: \\n• Rupee cost averaging – you buy more units when market falls\\n• Disciplined investing habit\\n• Start small with just ₹100/month\\n• No need to time the market!\\n\\nGiven your " + risk + " risk profile, consider starting with a **balanced or large-cap fund**. Shall I recommend specific funds?",
    'mutual fund': "**Mutual Funds** pool money from thousands of investors and invest in a diversified portfolio. A professional fund manager handles everything.\\n\\n🏆 For you ("+risk+" risk): ELSS funds for tax savings + Large-cap equity funds for growth.\\n\\nKey terms: **NAV** (price per unit), **SIP** (monthly investment), **ELSS** (tax saving). Want to know how to pick your first fund?",
    inflation: "**Inflation** reduces the purchasing power of your money over time. At 6% inflation, ₹1 lakh today will only be worth ₹74,000 in 10 years!\\n\\nThis is why keeping cash idle is risky. Investing in equity mutual funds historically beats inflation at 12-15% annual returns. Your savings MUST grow faster than inflation!",
    'government scheme': "Based on your profile, here are the best schemes for you:\\n\\n🏛️ **MUDRA Yojana** – Loans up to ₹10 Lakhs for women entrepreneurs\\n📚 **Stand-Up India** – ₹10L-₹1Cr for greenfield businesses\\n💰 **PMJDY** – Zero-balance bank account with insurance\\n🎓 **Startup India Seed Fund** – Up to ₹20L for startups\\n\\nVisit our **Gov. Schemes** section for detailed eligibility and application links!",
    'budget': "The **50-30-20 Rule** works great for women professionals:\\n• **50%** → Essential needs (rent, food, transport)\\n• **30%** → Personal wants (entertainment, shopping)\\n• **20%** → Savings & investments (SIP, FD, emergency fund)\\n\\nFor homemakers managing household budgets, track every expense in our **Expense Planner** section. Start today!",
    'emergency fund': "Every woman needs an **Emergency Fund** of 6 months of expenses BEFORE investing!\\n\\nIf your monthly expenses are ₹25,000, your emergency fund should be ₹1.5 Lakhs.\\n\\nKeep it in a **high-interest savings account or liquid mutual fund** – accessible but earning some return. This financial safety net gives you confidence to invest without fear!",
    'stock': conf > 65 ? "**Stocks** are ownership shares in companies. With your " + conf + "% confidence and " + risk + " risk profile, you're ready to explore equity investing!\\n\\n📊 Start with:\\n• **Index funds** (Nifty 50, Sensex) – diversified, low cost\\n• **Large-cap stocks** – more stable\\n• **Use learning modules** to understand fundamentals first\\n\\nRemember: Never invest money you can't afford to lose in 5+ years!" : "With " + conf + "% confidence, I'd recommend building your base first. Complete **2-3 learning modules** to understand risk before touching stocks. Let's start with SIP – much safer for your current stage!",
  };
  for (const [key, response] of Object.entries(responses)) {
    if (q.includes(key)) return response;
  }
  return "That's a great question! As your AI mentor, I want to give you advice aligned with your " + conf + "% confidence score and " + risk + " risk profile. \\n\\nIn general, focus on: building a 6-month emergency fund first, then starting a small SIP in diversified mutual funds. Would you like specific guidance on any of these steps? 🌸";
}

function sendQuick(text) { document.getElementById('chatInput').value = text; sendMessage(); }
function clearChat() { document.getElementById('chatMessages').innerHTML = ''; conversationHistory.length = 0; window.onload(); }
function handleKey(e) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); } }
function autoResize(el) { el.style.height = 'auto'; el.style.height = Math.min(el.scrollHeight, 120) + 'px'; }
function changeLangSelect(v) { window.location.href = '/ai-assistant?lang=' + v; }
</script>
`;

  return appShell(content, lang, t('ai_assistant'));
};
