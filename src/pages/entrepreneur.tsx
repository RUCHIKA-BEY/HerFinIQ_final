import { appShell } from './shell';
import { useTranslation } from '../i18n';

export const entrepreneurPage = (lang: string = 'en') => {
  const { t } = useTranslation(lang);

  const content = `
<div class="hub-header animate-fade">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px">
    <div>
      <h1 style="font-family:'Poppins',sans-serif; font-size:2rem; font-weight:800; color:var(--text); letter-spacing:-0.02em">🚀 Entrepreneur Hub</h1>
      <p style="color:var(--text-muted); font-size:0.95rem">Empowering women founders with AI-driven readiness and funding pathways.</p>
    </div>
    <div style="display:flex; gap:12px">
      <button class="btn btn-outline btn-sm" onclick="hubSwitchTab('aggregator')">📂 Schemes</button>
      <button class="btn btn-outline btn-sm" onclick="hubSwitchTab('incubators')">🏢 Incubators</button>
      <button class="btn btn-primary btn-sm" onclick="hubSwitchTab('assessment')">📝 New Assessment</button>
    </div>
  </div>

  <div class="hub-tabs-container">
    <div class="hub-tabs">
      <button class="hub-tab active" id="tab-assessment" onclick="hubSwitchTab('assessment')">Readiness Diagnostic</button>
      <button class="hub-tab" id="tab-aggregator" onclick="hubSwitchTab('aggregator')">Scheme Aggregator</button>
      <button class="hub-tab" id="tab-incubators" onclick="hubSwitchTab('incubators')">Incubator Matcher</button>
      <button class="hub-tab" id="tab-advisor" onclick="hubSwitchTab('advisor')" style="display:none; color:var(--primary)">✨ My Roadmap (AI)</button>
    </div>
  </div>
</div>

<div id="hub-content" class="animate-fade">
  <!-- ASSESSMENT SECTION -->
  <div id="section-assessment" class="hub-section active">
    <div class="card glass-card" style="padding:48px; text-align:center; max-width:850px; margin:0 auto">
      <div id="assessment-intro">
        <div class="hero-icon-pulse" style="font-size:4rem; margin-bottom:24px">👑</div>
        <h2 style="font-family:'Poppins',sans-serif; font-size:1.8rem; margin-bottom:16px; font-weight:700">Are you ready for Investment?</h2>
        <p style="color:var(--text-muted); margin-bottom:32px; font-size:1.05rem; line-height:1.6">Our Gemini-powered hub analyzes your business across 10 critical dimensions to build your personalized success track.</p>
        <button class="btn btn-primary" style="padding:16px 40px; font-size:1rem; border-radius:14px" onclick="hubStartAssessment()">Start Diagnostic →</button>
      </div>

      <div id="assessment-quiz" style="display:none; text-align:left">
        <div class="q-header-sticky">
            <div class="q-progress-wrap" style="margin-bottom:32px">
              <div style="display:flex; justify-content:space-between; margin-bottom:12px; font-size:0.85rem; font-weight:700; color:var(--primary)">
                <span id="q-count">Phase 1: Diagnostic</span>
                <span id="q-pct">0% Complete</span>
              </div>
              <div class="progress-bar-wrap" style="height:10px"><div id="entrepreneur-progress-bar" class="progress-bar" style="width:0%"></div></div>
            </div>
        </div>
        
        <div id="q-container" class="animate-fade">
          <h3 id="current-q-text" style="font-family:'Poppins',sans-serif; margin-bottom:24px; font-size:1.25rem; font-weight:650">Loading question...</h3>
          <div id="options-grid" style="display:grid; grid-template-columns:1fr; gap:14px">
            <!-- Options dynamically loaded -->
          </div>
        </div>
        
        <div style="margin-top:40px; display:flex; justify-content:space-between; align-items:center">
           <button class="btn btn-ghost" id="btn-entre-prev" onclick="hubPrevQ()">← Back</button>
           <button class="btn btn-primary" id="btn-entre-next" onclick="hubNextQ()" style="min-width:140px">Continue →</button>
        </div>
      </div>

      <div id="assessment-results" style="display:none">
        <div class="success-check-anim" style="font-size:4rem; margin-bottom:16px">✨</div>
        <h2 style="font-family:'Poppins',sans-serif; font-size:1.6rem; margin-bottom:8px">Diagnostic Complete!</h2>
        
        <div class="score-showcase">
           <div class="score-circle-wrap">
              <svg viewBox="0 0 100 100" class="score-svg">
                <circle class="score-bg" cx="50" cy="50" r="45"></circle>
                <circle class="score-fill" cx="50" cy="50" r="45" id="score-ring-fill" style="stroke-dasharray: 283; stroke-dashoffset: 283;"></circle>
              </svg>
              <div class="score-inner">
                 <span id="readiness-score" class="score-num">0</span>
                 <span class="score-label">Points</span>
              </div>
           </div>
           <div style="text-align:left">
              <div id="readiness-category" class="category-badge">Growth Ready</div>
              <p style="font-size:0.85rem; color:var(--text-muted); max-width:260px">Based on your market validation and financial clarity indicators.</p>
           </div>
        </div>

        <div class="grid-2" style="gap:24px; text-align:left; margin-bottom:32px">
           <div class="insight-box green">
              <div class="box-title">🏆 Strengths</div>
              <ul id="strength-list" class="insight-list"></ul>
           </div>
           <div class="insight-box coral">
              <div class="box-title">🚩 Focus Areas</div>
              <ul id="risk-list" class="insight-list"></ul>
           </div>
        </div>

        <button class="btn btn-primary btn-glow" style="width:100%; padding:18px; font-size:1rem; border-radius:14px" onclick="hubGenerateAdvisor()">
            <span class="icon">🪄</span> Map My Success Track (AI)
        </button>
      </div>
    </div>
  </div>

  <!-- SCHEME AGGREGATOR SECTION -->
  <div id="section-aggregator" class="hub-section">
    <div class="card glass-card" style="padding:24px; margin-bottom:24px">
        <div style="display:flex; gap:16px; align-items:center">
          <div class="topbar-search" style="flex:1; background:var(--white)">
            <span style="opacity:0.6">🔍</span>
            <input type="text" placeholder="Search government schemes for women founders..." id="scheme-search" oninput="hubFilterSchemes()">
          </div>
          <select id="scheme-cat-filter" class="lang-select-mini" style="width:220px; height:44px" onchange="hubFilterSchemes()">
            <option value="all">All Funding Types</option>
            <option value="Central Government">Central Government</option>
            <option value="State Government">State Government</option>
            <option value="Equity Support">Equity / SIDBI</option>
          </select>
        </div>
    </div>
    
    <div id="schemes-hub-list" class="grid-3" style="gap:24px">
      <!-- Populated by JS -->
    </div>
  </div>

  <!-- INCUBATOR SECTION -->
  <div id="section-incubators" class="hub-section">
    <div id="incubators-list" class="grid-2" style="gap:24px">
      <!-- Populated by JS -->
    </div>
  </div>

  <!-- ADVISOR SECTION (CANDY CRUSH TRACK) -->
  <div id="section-advisor" class="hub-section">
    <div id="advisor-loading" class="card glass-card" style="padding:80px; text-align:center; display:none">
       <div class="spinner-xl" style="margin:0 auto 24px"></div>
       <h3 style="font-family:'Poppins',sans-serif">Gemini AI is building your track...</h3>
       <p style="color:var(--text-muted)">Analyzing 15+ Indian Government Schemes and Venture Capital trends for your profile.</p>
    </div>
    
    <div id="advisor-content" style="display:none">
       <div class="advisor-top" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:30px">
          <div>
            <h2 style="font-family:'Poppins',sans-serif; font-size:1.6rem; font-weight:800">Your Funding Success Track</h2>
            <p style="color:var(--text-muted)">Master Level 1-7 to reach your investment milestone.</p>
          </div>
          <button class="btn btn-outline" onclick="hubVernacularSummary()">
            <span class="icon">🌍</span> Explain in Hindi / Local Language (Sarvam AI)
          </button>
       </div>

       <div class="track-wrap" id="track-path-container">
          <svg class="track-svg" id="track-svg-path" style="width:100%; height:100%">
            <path id="winding-path" d="" fill="none" stroke="#e2e8f0" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" />
            <path id="active-winding-path" d="" fill="none" stroke="var(--primary)" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <!-- Nodes will be injected here -->
       </div>

       <div id="node-details-panel" class="card modal-panel animate-fade" style="display:none">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:20px">
             <div id="node-badge" class="badge badge-primary">Level 1</div>
             <button class="btn-close" onclick="closeNodeDetails()">✕</button>
          </div>
          <h3 id="node-title" style="font-family:'Poppins',sans-serif; margin-bottom:12px; font-weight:700"></h3>
          <p id="node-desc" style="font-size:0.95rem; color:var(--text-muted); line-height:1.6; margin-bottom:20px"></p>
          <div id="node-tasks" class="task-checklist"></div>
          <div class="ai-insight-small" id="node-ai-tip"></div>
       </div>
    </div>
  </div>
</div>

<style>
  .hub-tabs-container { overflow-x: auto; margin-bottom:32px; -webkit-overflow-scrolling: touch; }
  .hub-tabs { display:flex; gap:32px; border-bottom:1px solid var(--border); min-width:600px; }
  .hub-tab { background:none; border:none; padding:16px 4px; font-size:0.95rem; font-weight:700; color:var(--text-muted); cursor:pointer; position:relative; transition:all 0.3s; }
  .hub-tab:hover { color:var(--primary); }
  .hub-tab.active { color:var(--primary); }
  .hub-tab.active::after { content:''; position:absolute; bottom:-1px; left:0; right:0; height:4px; background:var(--primary); border-radius:100px; }
  
  .hub-section { display:none; }
  .hub-section.active { display:block; animation:fadeUp 0.6s ease both; }
  
  .glass-card { background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.4); }
  
  .hero-icon-pulse { animation: pulseIcon 2s infinite ease-in-out; }
  @keyframes pulseIcon { 0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(91,62,255,0)); } 50% { transform: scale(1.1); filter: drop-shadow(0 0 15px rgba(91,62,255,0.4)); } }
  
  .entre-option { padding:18px 24px; border:2.5px solid var(--border); border-radius:16px; cursor:pointer; transition:all 0.25s; display:flex; align-items:center; gap:16px; font-size:1rem; font-weight:500; }
  .entre-option:hover { border-color:var(--primary); background:rgba(91,62,255,0.03); transform:translateX(4px); }
  .entre-option.selected { border-color:var(--primary); background:rgba(91,62,255,0.08); font-weight:700; color:var(--primary); }
  
  .score-showcase { display:flex; align-items:center; justify-content:center; gap:40px; margin:40px 0; }
  .score-circle-wrap { width:130px; height:130px; position:relative; }
  .score-svg { transform: rotate(-90deg); width:100%; height:100%; }
  .score-bg { fill: none; stroke: var(--border); stroke-width: 8; }
  .score-fill { fill: none; stroke: var(--primary); stroke-width: 8; stroke-linecap: round; transition: stroke-dashoffset 1s ease-out; }
  .score-inner { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); text-align:center; }
  .score-num { display:block; font-size:2.4rem; font-weight:800; color:var(--text); line-height:1; }
  .score-label { font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:600; }
  
  .category-badge { display:inline-block; padding:8px 16px; border-radius:10px; background:var(--primary); color:white; font-weight:800; font-size:1.1rem; margin-bottom:10px; }
  
  .insight-box { padding:20px; border-radius:16px; border:1px solid rgba(0,0,0,0.05); }
  .insight-box.green { background:rgba(16,185,129,0.05); border-color:rgba(16,185,129,0.1); }
  .insight-box.coral { background:rgba(239,68,68,0.05); border-color:rgba(239,68,68,0.1); }
  .box-title { font-weight:800; font-size:0.9rem; margin-bottom:12px; }
  .insight-list { font-size:0.88rem; padding-left:18px; line-height:1.7; color:var(--text); }
  
  /* TRACK UI */
  .track-wrap { 
      min-height: 1200px; width: 100%; position: relative; display: flex; flex-direction: column; align-items: center; justify-content: flex-start;
      padding-top: 100px; background-image: radial-gradient(#cbd5e1 1px, transparent 1px); background-size: 30px 30px; border-radius:40px;
  }
  .track-node {
      width: 100px; height: 100px; border-radius: 50%; background: white; border: 6px solid #e2e8f0;
      position: absolute; display: flex; align-items: center; justify-content: center; font-size: 2.5rem;
      cursor: pointer; z-index: 10; transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  }
  .track-node:hover { transform: scale(1.25) rotate(5deg); box-shadow: 0 20px 40px rgba(91,62,255,0.3); border-color: var(--primary); }
  .track-node.active { border-color: var(--primary); background: linear-gradient(135deg, white, var(--bg)); }
  .track-node.done { background: var(--success); border-color: #059669; color: white; border-width: 4px; }
  
  .node-label { position:absolute; top: 110%; font-size: 0.85rem; font-weight: 800; white-space: nowrap; color: var(--text); background: white; padding: 4px 12px; border-radius: 20px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
  
  .track-svg { position:absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 1; }
  
  .modal-panel { position: fixed; bottom: 40px; right: 40px; width: 400px; max-width: 90vw; max-height: 80vh; overflow-y: auto; z-index: 1000; box-shadow: 0 20px 60px rgba(0,0,0,0.25); border-radius: 24px; padding:32px; display:none; }
  .btn-close { background:var(--bg); border:none; width:30px; height:30px; border-radius:50%; font-weight:800; cursor:pointer; }
  .task-checklist { display:flex; flex-direction:column; gap:10px; margin-bottom:20px; }
  .task-item { display:flex; gap:10px; align-items:flex-start; font-size:0.9rem; }
  .task-item input { margin-top:4px; }
  
  .ai-insight-small { background: #EEF2FF; padding: 14px; border-radius: 12px; font-size: 0.8rem; line-height: 1.5; color: #4338CA; border-left: 4px solid #4338CA; }
  
  .spinner-xl { width:60px; height:60px; border:4px solid var(--border); border-top-color:var(--primary); border-radius:50%; animation:spin 1s linear infinite; }
  @keyframes spin { 100% { transform:rotate(360deg); } }
</style>

<script>
(function() {
  const GEMINI_KEY = 'AIzaSyCW9RHSd7URDG-qWFSeaeFqPWbEa8xyRe4';
  const SARVAM_KEY = 'sk_qceij9ua_egw86xP58cvECfhOqv5ZE2Hi';
  
  let hubDataRaw = { schemes: [], incubators: [] };
  let hubState = { currentQ: 0, scores: [], roadmap: [] };
  const hubQuestions = [
    { q: "Business Stage: Do you have a working prototype or MVP?", options: ["No, just an idea", "Yes, prototype done", "Yes, MVP launched with users", "Yes, generating revenue"], weight: [0, 5, 8, 10] },
    { q: "Market Knowledge: Do you know your TAM/SAM/SOM?", options: ["Not yet", "General idea", "Done detailed research", "Validated with pilots"], weight: [0, 3, 7, 10] },
    { q: "Financial Clarity: Do you have a 12-month financial projection?", options: ["No", "Rough estimates", "Detailed excel ready", "Audited/Verified numbers"], weight: [0, 4, 8, 10] },
    { q: "Team: Do you have a core co-founding team?", options: ["Solopreneur", "Part-time help", "Full-time co-founders", "Core team + specialized hires"], weight: [2, 5, 8, 10] },
    { q: "Legal: Is your business incorporated (Pvt Ltd / LLP)?", options: ["No", "In process", "Yes, registered", "Registered + IP/Patents filed"], weight: [0, 5, 10, 15] },
    { q: "Customer Validation: How many paying customers do you have?", options: ["0", "1-5", "5-50", "50+"], weight: [0, 3, 7, 10] },
    { q: "Compliance: Are you familiar with MSME/Startup India benefits?", options: ["Not at all", "Heard about it", "Applying soon", "Registered and verified"], weight: [0, 2, 5, 10] },
    { q: "Scalability: Can your product serve 100x users with 2x effort?", options: ["Unsure", "Needs manual work", "Mostly automated", "Built for scale"], weight: [0, 3, 7, 10] },
    { q: "Risk: Do you have an exit strategy or pivot plan?", options: ["No", "Vague idea", "Discussed options", "Formal plan in place"], weight: [0, 3, 6, 10] },
    { q: "Funding: Have you raised any funds so far?", options: ["Zero/Bootstrap", "Friends & Family", "Government Grant", "Angel/Seed Round"], weight: [5, 7, 10, 15] }
  ];

  window.hubSwitchTab = function(id) {
    document.querySelectorAll('.hub-section').forEach(function(s) { s.classList.remove('active'); });
    document.querySelectorAll('.hub-tab').forEach(function(t) { t.classList.remove('active'); });
    
    document.getElementById('section-' + id).classList.add('active');
    document.getElementById('tab-' + id).classList.add('active');
  };

  window.hubStartAssessment = function() {
    document.getElementById('assessment-intro').style.display = 'none';
    document.getElementById('assessment-quiz').style.display = 'block';
    hubState.scores = Array(hubQuestions.length).fill(-1);
    hubState.currentQ = 0;
    hubRenderQuestion();
  };

  function hubRenderQuestion() {
    const q = hubQuestions[hubState.currentQ];
    const pct = Math.round(((hubState.currentQ) / hubQuestions.length) * 100);
    document.getElementById('q-count').textContent = 'Question ' + (hubState.currentQ + 1) + ' of ' + hubQuestions.length;
    document.getElementById('q-pct').textContent = pct + '% Complete';
    document.getElementById('entrepreneur-progress-bar').style.width = pct + '%';
    document.getElementById('current-q-text').textContent = q.q;
    
    document.getElementById('options-grid').innerHTML = q.options.map(function(opt, i) {
      const isSelected = hubState.scores[hubState.currentQ] === i;
      return '<div class="entre-option ' + (isSelected ? 'selected' : '') + '" onclick="hubSelectOption(' + i + ')">' +
        '<div style="width:24px; height:24px; border-radius:50%; border:2px solid currentColor; display:flex; align-items:center; justify-content:center; flex-shrink:0">' +
          (isSelected ? '<div style="width:12px; height:12px; border-radius:50%; background:currentColor"></div>' : '') +
        '</div>' +
        '<span>' + opt + '</span>' +
      '</div>';
    }).join('');
    
    document.getElementById('btn-entre-prev').style.visibility = hubState.currentQ === 0 ? 'hidden' : 'visible';
    document.getElementById('btn-entre-next').textContent = hubState.currentQ === hubQuestions.length - 1 ? 'See Results ✨' : 'Continue';
  }

  window.hubSelectOption = function(i) {
    hubState.scores[hubState.currentQ] = i;
    hubRenderQuestion();
  };

  window.hubNextQ = function() {
    if (hubState.scores[hubState.currentQ] === -1) { alert('Please select an option'); return; }
    if (hubState.currentQ < hubQuestions.length - 1) {
      hubState.currentQ++;
      hubRenderQuestion();
    } else {
      hubShowResults();
    }
  };

  window.hubPrevQ = function() {
    if (hubState.currentQ > 0) {
      hubState.currentQ--;
      hubRenderQuestion();
    }
  };

  function hubShowResults() {
    let total = 0, max = 0;
    hubQuestions.forEach(function(q, i) {
      total += q.weight[hubState.scores[i]];
      max += Math.max.apply(Math, q.weight);
    });
    const score = Math.round((total / max) * 100);
    document.getElementById('assessment-quiz').style.display = 'none';
    document.getElementById('assessment-results').style.display = 'block';
    
    const fill = document.getElementById('score-ring-fill');
    const offset = 283 - (283 * score / 100);
    setTimeout(function() { if(fill) fill.style.strokeDashoffset = offset.toString(); }, 100);
    
    document.getElementById('readiness-score').textContent = score;
    const cat = score > 75 ? 'Growth Ready' : (score > 40 ? 'Emerging' : 'Early Stage');
    document.getElementById('readiness-category').textContent = cat;
    
    const strengths = []; const risks = [];
    hubQuestions.forEach(function(q, i) {
        if(hubState.scores[i] >= 2) strengths.push(q.q.split(':')[0]);
        else risks.push(q.q.split(':')[0]);
    });
    
    document.getElementById('strength-list').innerHTML = strengths.slice(0,3).map(function(s) { return '<li>'+s+'</li>'; }).join('') || '<li>Starting the journey</li>';
    document.getElementById('risk-list').innerHTML = risks.slice(0,3).map(function(r) { return '<li>'+r+'</li>'; }).join('') || '<li>Balanced profile</li>';
    
    hubState.finalScore = score; hubState.finalCat = cat;
  }

  window.hubGenerateAdvisor = async function() {
    document.getElementById('section-assessment').style.display = 'none';
    document.getElementById('advisor-loading').style.display = 'block';
    window.hubSwitchTab('advisor');
    document.getElementById('tab-advisor').style.display = 'block';
    
    try {
        const prompt = 'As a specialized Startup Advisor for Indian women founders, create a 7-step success track for a ' + hubState.finalCat + ' founder with a readiness score of ' + hubState.finalScore + '/100. ' +
                      'Return ONLY a JSON array of objects with fields: title, description, tasks (array of 3 strings), icon (emoji), and ai_tip. Use Indian context (schemes like MUDRA, Stand-Up India, WE Hub).';
        
        const urlWithKey = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=' + GEMINI_KEY;
        const res = await fetch(urlWithKey, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }], generationConfig: { responseMimeType: "application/json" } })
        });
        const data = await res.json();
        const textResponse = data.candidates[0].content.parts[0].text;
        hubState.roadmap = JSON.parse(textResponse);
        
        renderCandyCrushTrack(hubState.roadmap);
    } catch (e) {
        console.error('Gemini Error:', e);
        hubState.roadmap = [
            { title: "Idea Validation", description: "Refine your value proposition.", tasks: ["Market Survey", "Competitor Audit", "Focus Groups"], icon: "💡", ai_tip: "Start with non-dilutive grants." },
            { title: "Legal Structure", description: "Incorporate and register.", tasks: ["Pvt Ltd Setup", "Startup India Reg", "PAN/GST"], icon: "📜", ai_tip: "MUDRA yojana matches your stage." },
            { title: "MVP Build", description: "Develop base features.", tasks: ["Prototype Prep", "Beta Testers", "Tech Stack"], icon: "🛠️", ai_tip: "Look for TIDE 2.0 grants." }
        ];
        renderCandyCrushTrack(hubState.roadmap);
    }
  };

  function renderCandyCrushTrack(roadmap) {
    document.getElementById('advisor-loading').style.display = 'none';
    document.getElementById('advisor-content').style.display = 'block';

    const container = document.getElementById('track-path-container');
    const svgPath = document.getElementById('winding-path');
    const activePath = document.getElementById('active-winding-path');

    container.querySelectorAll('.track-node').forEach(function(n) { n.remove(); });

    const width = container.offsetWidth;
    const spacing = 180;

    let pathD = "M " + (width / 2) + " 50";
    const nodesPositions = [];

    roadmap.forEach(function(stage, i) {
      const y = 100 + (i * spacing);
      let x = width / 2;
      if (i % 2 === 1) x = (width / 2) + 120;
      if (i % 4 === 3) x = (width / 2) - 120;

      nodesPositions.push({ x: x, y: y, data: stage });

      if (i === 0) pathD = "M " + x + " " + y;
      else {
        const prev = nodesPositions[i - 1];
        const cx1 = prev.x;
        const cy1 = prev.y + (spacing / 2);
        const cx2 = x;
        const cy2 = y - (spacing / 2);
        pathD += ' C ' + cx1 + ' ' + cy1 + ', ' + cx2 + ' ' + cy2 + ', ' + x + ' ' + y;
      }
    });
    
    svgPath.setAttribute('d', pathD);
    activePath.setAttribute('d', pathD);
    
    container.style.height = (nodesPositions.length * spacing + 200) + 'px';
    
    nodesPositions.forEach(function(n, i) {
        const div = document.createElement('div');
        div.className = 'track-node ' + (i === 0 ? 'active' : (i < 2 ? 'done' : ''));
        div.style.left = (n.x - 50) + 'px';
        div.style.top = (n.y - 50) + 'px';
        div.innerHTML = '<span style="margin-top:-5px">' + n.data.icon + '</span><div class="node-label">' + n.data.title + '</div>';
        div.onclick = function() { showNodeDetails(n.data, i); };
        container.appendChild(div);
    });
  }

  window.showNodeDetails = function(data, index) {
    const panel = document.getElementById('node-details-panel');
    panel.style.display = 'block';
    document.getElementById('node-badge').textContent = 'Level ' + (index + 1);
    document.getElementById('node-title').textContent = data.title;
    document.getElementById('node-desc').textContent = data.description;
    document.getElementById('node-tasks').innerHTML = data.tasks.map(function(t) { 
       return '<div class="task-item"><input type="checkbox"> <span>' + t + '</span></div>';
    }).join('');
    document.getElementById('node-ai-tip').innerHTML = '<strong>AI Insight:</strong> ' + data.ai_tip;
  };

  window.closeNodeDetails = function() {
    document.getElementById('node-details-panel').style.display = 'none';
  };

  window.hubVernacularSummary = async function() {
    if (!hubState.roadmap.length) return;
    const btn = event.target.closest('button');
    const oldHtml = btn.innerHTML;
    btn.innerHTML = 'AI Translating...';
    
    try {
        const textToTranslate = "Our recommended startup roadmap for you includes: " + hubState.roadmap.map(function(r) { return r.title; }).join(", ");
        const res = await fetch('https://api.sarvam.ai/translate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api-subscription-key': SARVAM_KEY
            },
            body: JSON.stringify({
                input: textToTranslate,
                source_language_code: "en-IN",
                target_language_code: "hi-IN"
            })
        });
        const data = await res.json();
        alert("Hindi Summary (Sarvam AI):\\n" + data.translated_text);
    } catch(e) {
        console.error('Sarvam Error:', e);
        alert('Could not translate at this moment. Please check your network.');
    } finally {
        btn.innerHTML = oldHtml;
    }
  };

  async function hubInitData() {
    try {
      const res = await fetch('/api/schemes');
      const json = await res.json();
      hubDataRaw.schemes = json.data || []; 
      const schemesList = document.getElementById('schemes-hub-list');
      if(schemesList) {
        schemesList.innerHTML = hubDataRaw.schemes.map(function(s) { 
          return '<div class="card glass-card" style="padding:24px; display:flex; flex-direction:column; gap:12px">' +
            '<div class="scheme-ministry">' + s.category + '</div>' +
            '<div class="scheme-name">' + s.name + '</div>' +
            '<div class="scheme-amount">' + (s.fundingAmount || '₹ 5 Lacs - 1 Cr') + '</div>' +
            '<p class="scheme-desc">' + s.description + '</p>' +
            '<div style="margin-top:auto">' +
              '<button class="btn btn-ghost btn-sm" style="width:100%">Apply via Portal →</button>' +
            '</div>' +
          '</div>';
        }).join('');
      }
    } catch(e) { console.error(e); }
  }

  // Initial incubators
  document.getElementById('incubators-list').innerHTML = [
    { n: "WE Hub", l: "Telangana", d: "First state-led incubator for women." },
    { n: "NSRCEL-IIMB", l: "Bengaluru", d: "Premier academic mentoring program." },
    { n: "IITM Incubation", l: "Chennai", d: "Tech-focused deeptech support." },
    { n: "Zone Startups", l: "Mumbai", d: "Accelerator for scale-ups." }
  ].map(function(i) { 
    return '<div class="card glass-card" style="padding:24px">' +
      '<div style="font-size:2rem; margin-bottom:12px">🏢</div>' +
      '<div style="font-weight:800; font-size:1.1rem">' + i.n + '</div>' +
      '<div style="color:var(--primary); font-size:0.8rem; font-weight:700; margin-bottom:8px">📍 ' + i.l + '</div>' +
      '<p style="font-size:0.85rem; color:var(--text-muted)">' + i.d + '</p>' +
      '<button class="btn btn-outline btn-sm" style="margin-top:16px">Check Cohort →</button>' +
    '</div>';
  }).join('');

  hubInitData();
})();
</script>
`;

  return appShell(content, lang, 'Entrepreneur Hub');
};
