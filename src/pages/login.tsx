import { getAppLogo } from './shell';

export const loginPage = (lang: string = 'en') => {
  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>HerFinIQ – Sign In / Sign Up</title>
<meta name="description" content="Join HerFinIQ – Your Financial DNA & Growth Companion. Sign up or sign in to start your financial literacy journey.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>
  :root {
    --primary: #5B3EFF;
    --primary-light: #7B6FFF;
    --accent: #FF6B6B;
    --bg: #F9FAFC;
    --white: #FFFFFF;
    --text: #1F2937;
    --text-muted: #6B7280;
    --success: #10B981;
    --border: #E5E7EB;
  }
  * { margin:0; padding:0; box-sizing:border-box; }
  body { font-family:'Inter',sans-serif; background:var(--bg); min-height:100vh; display:flex; }
  
  .left-panel {
    width:45%; background:linear-gradient(135deg, #5B3EFF 0%, #7C3AED 50%, #A855F7 100%);
    padding:48px 40px; display:flex; flex-direction:column; position:relative; overflow:hidden;
  }
  .left-panel::before { content:''; position:absolute; top:-100px; right:-60px; width:300px; height:300px; background:rgba(255,255,255,0.06); border-radius:50%; }
  .left-panel::after { content:''; position:absolute; bottom:-80px; left:-40px; width:220px; height:220px; background:rgba(255,107,107,0.1); border-radius:50%; }
  
  .panel-logo { display:flex; align-items:center; gap:12px; position:relative; z-index:1; margin-bottom:48px; }
  .panel-logo-icon { width:48px; height:48px; background:rgba(255,255,255,0.2); border-radius:14px; display:flex; align-items:center; justify-content:center; font-size:1.5rem; backdrop-filter:blur(10px); }
  .panel-logo-text { font-family:'Poppins',sans-serif; font-size:1.6rem; font-weight:700; color:white; }
  .panel-logo-text span { color:#FFD166; }
  
  .panel-content { flex:1; display:flex; flex-direction:column; justify-content:center; position:relative; z-index:1; }
  .panel-title { font-family:'Poppins',sans-serif; font-size:2.2rem; font-weight:700; color:white; line-height:1.2; margin-bottom:14px; }
  .panel-sub { font-size:0.95rem; color:rgba(255,255,255,0.8); line-height:1.7; margin-bottom:36px; }
  
  .feature-list { display:flex; flex-direction:column; gap:14px; }
  .feature-item { display:flex; align-items:center; gap:12px; }
  .feature-icon { width:36px; height:36px; background:rgba(255,255,255,0.15); border-radius:10px; display:flex; align-items:center; justify-content:center; font-size:1.1rem; flex-shrink:0; }
  .feature-text { font-size:0.88rem; color:rgba(255,255,255,0.9); line-height:1.4; }
  .feature-text strong { color:white; }
  
  .panel-stats { display:flex; gap:24px; margin-top:48px; }
  .panel-stat { text-align:center; }
  .panel-stat-val { font-family:'Poppins',sans-serif; font-size:1.5rem; font-weight:700; color:white; }
  .panel-stat-lbl { font-size:0.72rem; color:rgba(255,255,255,0.7); margin-top:2px; }
  .stat-divider { width:1px; background:rgba(255,255,255,0.2); }
  
  .right-panel { flex:1; display:flex; align-items:center; justify-content:center; padding:40px; }
  
  .auth-card { background:white; border-radius:24px; padding:40px; max-width:460px; width:100%; box-shadow:0 8px 48px rgba(0,0,0,0.08); }
  
  .tabs { display:flex; gap:0; background:var(--bg); border-radius:12px; padding:4px; margin-bottom:32px; }
  .tab { flex:1; padding:10px; text-align:center; border-radius:10px; cursor:pointer; font-size:0.88rem; font-weight:600; transition:all 0.2s; border:none; background:transparent; font-family:'Inter',sans-serif; color:var(--text-muted); }
  .tab.active { background:white; color:var(--primary); box-shadow:0 2px 10px rgba(0,0,0,0.08); }
  
  .form-title { font-family:'Poppins',sans-serif; font-size:1.4rem; font-weight:700; color:var(--text); margin-bottom:6px; }
  .form-sub { font-size:0.85rem; color:var(--text-muted); margin-bottom:24px; }
  
  .form-group { margin-bottom:18px; }
  .form-label { display:block; font-size:0.8rem; font-weight:600; color:var(--text); margin-bottom:6px; }
  .form-input {
    width:100%; padding:12px 14px; border-radius:10px; border:2px solid var(--border);
    font-size:0.88rem; font-family:'Inter',sans-serif; color:var(--text);
    outline:none; transition:all 0.2s; background:var(--bg);
  }
  .form-input:focus { border-color:var(--primary); background:white; box-shadow:0 0 0 4px rgba(91,62,255,0.08); }
  .form-input::placeholder { color:#9CA3AF; }
  
  .profile-select-grid { display:grid; grid-template-columns:1fr 1fr; gap:10px; }
  .profile-option {
    padding:12px; border-radius:12px; border:2px solid var(--border); cursor:pointer;
    text-align:center; transition:all 0.2s; font-size:0.82rem; font-weight:500;
  }
  .profile-option:hover { border-color:var(--primary); background:rgba(91,62,255,0.04); }
  .profile-option.selected { border-color:var(--primary); background:rgba(91,62,255,0.08); color:var(--primary); }
  .profile-option .icon { font-size:1.4rem; display:block; margin-bottom:4px; }
  
  .submit-btn {
    width:100%; padding:14px; border-radius:12px;
    background:linear-gradient(135deg, var(--primary), var(--primary-light));
    color:white; font-size:0.95rem; font-weight:700;
    border:none; cursor:pointer; font-family:'Inter',sans-serif;
    transition:all 0.2s; box-shadow:0 4px 16px rgba(91,62,255,0.3); margin-top:6px;
  }
  .submit-btn:hover { transform:translateY(-1px); box-shadow:0 6px 24px rgba(91,62,255,0.4); }
  .submit-btn:active { transform:translateY(0); }
  
  .divider-row { display:flex; align-items:center; gap:12px; margin:20px 0; }
  .divider-line { flex:1; height:1px; background:var(--border); }
  .divider-text { font-size:0.75rem; color:var(--text-muted); }
  
  .error-msg { background:rgba(239,68,68,0.08); border:1px solid rgba(239,68,68,0.2); border-radius:10px; padding:10px 14px; font-size:0.82rem; color:#EF4444; margin-bottom:16px; display:none; }
  .success-msg { background:rgba(16,185,129,0.08); border:1px solid rgba(16,185,129,0.2); border-radius:10px; padding:10px 14px; font-size:0.82rem; color:var(--success); margin-bottom:16px; display:none; }
  
  .lang-back { display:inline-flex; align-items:center; gap:6px; color:rgba(255,255,255,0.7); font-size:0.82rem; text-decoration:none; transition:color 0.2s; }
  .lang-back:hover { color:white; }
  
  @media(max-width:768px){
    body { flex-direction:column; }
    .left-panel { width:100%; padding:28px 24px; min-height:200px; }
    .panel-title { font-size:1.5rem; }
    .feature-list { display:none; }
    .right-panel { padding:24px; }
    .profile-select-grid { grid-template-columns:1fr 1fr; }
  }
</style>
</head>
<body>

<div class="left-panel">
  <a href="/" class="lang-back">← Back to Language Selection</a>
  <div class="panel-logo" style="margin-top:20px; max-width: 250px;">
    <img src="/static/logo.png" style="width: 100%; height: auto;" alt="HerFinIQ Logo" />
  </div>
  
  <div class="panel-content">
    <h1 class="panel-title">Your Financial Confidence Journey Starts Here</h1>
    <p class="panel-sub">Join thousands of women across India who are transforming from savers into confident investors with personalized AI guidance.</p>
    
    <div class="feature-list">
      <div class="feature-item">
        <div class="feature-icon">📊</div>
        <div class="feature-text"><strong>Personalized Assessment</strong><br>Know your financial literacy score & risk profile</div>
      </div>
      <div class="feature-item">
        <div class="feature-icon">🎮</div>
        <div class="feature-text"><strong>Gamified Learning</strong><br>Earn XP, badges, and level up your financial IQ</div>
      </div>
      <div class="feature-item">
        <div class="feature-icon">🤖</div>
        <div class="feature-text"><strong>AI Financial Mentor</strong><br>Get personalized investing guidance in your language</div>
      </div>
      <div class="feature-item">
        <div class="feature-icon">💰</div>
        <div class="feature-text"><strong>Smart Budget Planner</strong><br>Track daily expenses and build wealth habits</div>
      </div>
    </div>
    
    <div class="panel-stats">
      <div class="panel-stat">
        <div class="panel-stat-val">50K+</div>
        <div class="panel-stat-lbl">Women Members</div>
      </div>
      <div class="stat-divider"></div>
      <div class="panel-stat">
        <div class="panel-stat-val">6</div>
        <div class="panel-stat-lbl">Languages</div>
      </div>
      <div class="stat-divider"></div>
      <div class="panel-stat">
        <div class="panel-stat-val">12+</div>
        <div class="panel-stat-lbl">Gov. Schemes</div>
      </div>
    </div>
  </div>
</div>

<div class="right-panel">
  <div class="auth-card">
    <div class="tabs">
      <button class="tab active" id="loginTab" onclick="switchTab('login')">Sign In</button>
      <button class="tab" id="signupTab" onclick="switchTab('signup')">Create Account</button>
    </div>
    
    <!-- LOGIN FORM -->
    <div id="loginForm">
      <div class="form-title">Welcome back 👋</div>
      <p class="form-sub">Sign in to continue your learning journey</p>
      
      <div class="error-msg" id="loginError"></div>
      
      <div class="form-group">
        <label class="form-label">Username or Mobile</label>
        <input type="text" class="form-input" id="loginUsername" placeholder="Enter your username or mobile" autocomplete="username">
      </div>
      <div class="form-group">
        <label class="form-label">Password</label>
        <input type="password" class="form-input" id="loginPassword" placeholder="Enter your password" autocomplete="current-password">
      </div>
      
      <button class="submit-btn" onclick="doLogin()">Sign In to HerFinIQ →</button>
      
      <div class="divider-row"><div class="divider-line"></div><div class="divider-text">or</div><div class="divider-line"></div></div>
      
      <button class="submit-btn" style="background:white; color:var(--text); border:2px solid var(--border); box-shadow:none; margin-bottom:14px;" onclick="document.getElementById('loginUsername').value='demo';document.getElementById('loginPassword').value='demo123';doLogin();">Try Demo Account 🚀</button>

      <div style="text-align:center; font-size:0.83rem; color:var(--text-muted)">
        New here? <a href="#" onclick="switchTab('signup')" style="color:var(--primary); font-weight:600">Create free account</a>
      </div>
    </div>
    
    <!-- SIGNUP FORM -->
    <div id="signupForm" style="display:none">
      <div class="form-title">Join HerFinIQ 🌸</div>
      <p class="form-sub">Start your financial empowerment journey today</p>
      
      <div class="error-msg" id="signupError"></div>
      <div class="success-msg" id="signupSuccess"></div>
      
      <div class="form-group">
        <label class="form-label">Full Name</label>
        <input type="text" class="form-input" id="signupName" placeholder="e.g. Priya Sharma">
      </div>
      <div class="form-group">
        <label class="form-label">Mobile Number</label>
        <input type="tel" class="form-input" id="signupMobile" placeholder="10-digit mobile number" maxlength="10">
      </div>
      <div class="form-group">
        <label class="form-label">Username</label>
        <input type="text" class="form-input" id="signupUsername" placeholder="Choose a unique username">
      </div>
      <div class="form-group">
        <label class="form-label">Password</label>
        <input type="password" class="form-input" id="signupPassword" placeholder="Min 8 characters">
      </div>
      
      <div class="form-group">
        <label class="form-label">I am a...</label>
        <div class="profile-select-grid">
          <div class="profile-option" onclick="selectProfile('Working Professional', this)">
            <span class="icon">💼</span>Working Professional
          </div>
          <div class="profile-option" onclick="selectProfile('Entrepreneur', this)">
            <span class="icon">🚀</span>Entrepreneur
          </div>
          <div class="profile-option" onclick="selectProfile('Homemaker', this)">
            <span class="icon">🏠</span>Homemaker
          </div>
          <div class="profile-option" onclick="selectProfile('Student', this)">
            <span class="icon">📖</span>Student
          </div>
        </div>
      </div>
      
      <button class="submit-btn" onclick="doSignup()">Create My Account →</button>
      
      <div style="text-align:center; font-size:0.83rem; color:var(--text-muted); margin-top:14px">
        Already have an account? <a href="#" onclick="switchTab('login')" style="color:var(--primary); font-weight:600">Sign in</a>
      </div>
    </div>
  </div>
</div>

<script>
let selectedProfile = '';

function switchTab(tab) {
  document.getElementById('loginForm').style.display = tab === 'login' ? 'block' : 'none';
  document.getElementById('signupForm').style.display = tab === 'signup' ? 'block' : 'none';
  document.getElementById('loginTab').classList.toggle('active', tab === 'login');
  document.getElementById('signupTab').classList.toggle('active', tab === 'signup');
}

function selectProfile(profile, el) {
  document.querySelectorAll('.profile-option').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');
  selectedProfile = profile;
}

function showError(id, msg) {
  const el = document.getElementById(id);
  el.textContent = msg; el.style.display = 'block';
  setTimeout(() => el.style.display = 'none', 4000);
}
function showSuccess(id, msg) {
  const el = document.getElementById(id);
  el.textContent = msg; el.style.display = 'block';
}

function doLogin() {
  const username = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('loginPassword').value;
  if (!username || !password) { showError('loginError', 'Please fill all fields'); return; }
  
  // Simulate auth - check localStorage first
  const users = JSON.parse(localStorage.getItem('herfiniq_users') || '[]');
  const user = users.find(u => (u.username === username || u.mobile === username) && u.password === password);
  
  if (user) {
    localStorage.setItem('herfiniq_user', JSON.stringify(user));
    localStorage.setItem('herfiniq_token', 'tok_' + Date.now());
    // Check if assessment done
    if (!user.assessmentDone) {
      window.location.href = '/onboarding?lang=${lang}';
    } else {
      window.location.href = '/dashboard?lang=${lang}';
    }
  } else {
    showError('loginError', 'Invalid credentials. Try demo login: username "demo", password "demo123"');
  }
}

function doSignup() {
  const name = document.getElementById('signupName').value.trim();
  const mobile = document.getElementById('signupMobile').value.trim();
  const username = document.getElementById('signupUsername').value.trim();
  const password = document.getElementById('signupPassword').value;
  
  if (!name || !mobile || !username || !password) { showError('signupError', 'Please fill all fields'); return; }
  if (mobile.length !== 10 || !/^[0-9]+$/.test(mobile)) { showError('signupError', 'Enter a valid 10-digit mobile number'); return; }
  if (password.length < 8) { showError('signupError', 'Password must be at least 8 characters'); return; }
  if (!selectedProfile) { showError('signupError', 'Please select your profile type'); return; }
  
  const newUser = {
    name, mobile, username, password,
    profileType: selectedProfile,
    literacyScore: 0, confidenceScore: 0, riskProfile: 'Unknown',
    xp: 0, level: 1, badges: [], modulesCompleted: [],
    assessmentDone: false,
    createdAt: new Date().toISOString()
  };
  
  const users = JSON.parse(localStorage.getItem('herfiniq_users') || '[]');
  if (users.find(u => u.username === username)) { showError('signupError', 'Username already taken'); return; }
  users.push(newUser);
  localStorage.setItem('herfiniq_users', JSON.stringify(users));
  localStorage.setItem('herfiniq_user', JSON.stringify(newUser));
  localStorage.setItem('herfiniq_token', 'tok_' + Date.now());
  
  showSuccess('signupSuccess', '🎉 Account created! Redirecting to setup...');
  setTimeout(() => window.location.href = '/onboarding?lang=${lang}', 1500);
}

// Demo login on load
const users = JSON.parse(localStorage.getItem('herfiniq_users') || '[]');
if (!users.find(u => u.username === 'demo')) {
  users.push({
    name: 'Sandra', mobile: '9876543210', username: 'demo', password: 'demo123',
    profileType: 'Homemaker',
    literacyScore: 62, confidenceScore: 72, riskProfile: 'Moderate',
    xp: 1240, level: 4, badges: ['First Steps', 'Quick Learner', 'SIP Master'],
    modulesCompleted: ['basics', 'sip'],
    assessmentDone: true,
    createdAt: new Date().toISOString()
  });
  localStorage.setItem('herfiniq_users', JSON.stringify(users));
}

// Auto-redirect if already logged in
if (localStorage.getItem('herfiniq_token') && localStorage.getItem('herfiniq_user')) {
  const u = JSON.parse(localStorage.getItem('herfiniq_user') || '{}');
  if (u.assessmentDone) window.location.href = '/dashboard?lang=${lang}';
}

window.switchTab = switchTab;
window.selectProfile = selectProfile;
window.doLogin = doLogin;
window.doSignup = doSignup;
</script>
</body>
</html>`;
};
