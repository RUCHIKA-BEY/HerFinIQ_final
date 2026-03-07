import { getAppLogo } from './shell';

export const languagePage = () => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>HerFinIQ – Choose Your Language</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
<style>
  :root {
    --primary: #5B3EFF;
    --primary-light: #7B6FFF;
    --secondary: #CDBDFF;
    --accent: #FF6B6B;
    --bg: #F9FAFC;
    --white: #FFFFFF;
    --text: #1F2937;
    --text-muted: #6B7280;
    --success: #10B981;
    --card-shadow: 0 4px 24px rgba(91,62,255,0.10);
  }
  * { margin:0; padding:0; box-sizing:border-box; }
  body {
    font-family: 'Inter', sans-serif;
    background: linear-gradient(135deg, #5B3EFF 0%, #7C3AED 50%, #A855F7 100%);
    min-height: 100vh;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    padding: 24px;
    position: relative; overflow: hidden;
  }
  body::before {
    content: '';
    position: absolute; inset: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    pointer-events: none;
  }
  .orb { position:absolute; border-radius:50%; filter:blur(80px); pointer-events:none; }
  .orb-1 { width:400px; height:400px; background:rgba(255,255,255,0.08); top:-100px; right:-100px; }
  .orb-2 { width:300px; height:300px; background:rgba(255,107,107,0.12); bottom:-80px; left:-80px; }
  
  .logo-section {
    text-align: center; margin-bottom: 40px; position: relative; z-index: 1;
    animation: fadeDown 0.7s ease both;
  }
  .logo-img { width: 72px; height: 72px; border-radius: 16px; margin-bottom: 12px; box-shadow: 0 8px 32px rgba(0,0,0,0.2); }
  .logo-name {
    font-family: 'Poppins', sans-serif; font-size: 2.4rem; font-weight: 700;
    color: white; letter-spacing: -0.02em;
  }
  .logo-name span { color: #FFD166; }
  .logo-tagline { font-size: 0.95rem; color: rgba(255,255,255,0.75); margin-top: 4px; }
  
  .card {
    background: white; border-radius: 24px;
    padding: 40px; max-width: 600px; width: 100%;
    box-shadow: 0 24px 80px rgba(0,0,0,0.25);
    animation: fadeUp 0.7s 0.2s ease both;
    position: relative; z-index: 1;
  }
  .card-title {
    font-family: 'Poppins', sans-serif; font-size: 1.5rem; font-weight: 600;
    color: var(--text); text-align: center; margin-bottom: 6px;
  }
  .card-sub { color: var(--text-muted); text-align: center; font-size: 0.9rem; margin-bottom: 32px; }
  
  .lang-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 14px;
  }
  .lang-btn {
    display: flex; align-items: center; gap: 14px;
    padding: 16px 20px; border-radius: 16px;
    border: 2px solid #E5E7EB; background: var(--bg);
    cursor: pointer; transition: all 0.25s; text-decoration: none;
    position: relative; overflow: hidden;
  }
  .lang-btn::before {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(135deg, var(--primary), var(--primary-light));
    opacity: 0; transition: opacity 0.25s;
  }
  .lang-btn:hover { border-color: var(--primary); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(91,62,255,0.2); }
  .lang-btn:hover::before { opacity: 0.06; }
  .lang-btn:hover .lang-name { color: var(--primary); }
  .lang-flag { font-size: 2rem; flex-shrink: 0; position: relative; z-index: 1; }
  .lang-info { position: relative; z-index: 1; }
  .lang-name { font-family: 'Poppins', sans-serif; font-size: 1rem; font-weight: 600; color: var(--text); }
  .lang-native { font-size: 0.82rem; color: var(--text-muted); margin-top: 1px; }
  .lang-arrow { margin-left: auto; color: var(--text-muted); font-size: 1.1rem; position: relative; z-index: 1; transition: transform 0.2s; }
  .lang-btn:hover .lang-arrow { transform: translateX(4px); color: var(--primary); }
  
  .divider { display: flex; align-items: center; gap: 12px; margin: 24px 0 0; }
  .divider-line { flex: 1; height: 1px; background: #E5E7EB; }
  .divider-text { font-size: 0.78rem; color: var(--text-muted); }
  
  @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
  @keyframes fadeDown { from { opacity:0; transform:translateY(-24px); } to { opacity:1; transform:translateY(0); } }
  
  @media (max-width: 500px) {
    .lang-grid { grid-template-columns: 1fr; }
    .card { padding: 28px 20px; }
  }
</style>
</head>
<body>
<div class="orb orb-1"></div>
<div class="orb orb-2"></div>

<div class="logo-section" style="max-width: 400px; margin: 0 auto 40px;">
  <img src="/static/logo.png" style="width: 100%; height: auto;" alt="HerFinIQ Logo" />
</div>

<div class="card">
  <div class="card-title">🌐 Choose Your Language</div>
  <p class="card-sub">Select your preferred language to personalize your experience / अपनी पसंदीदा भाषा चुनें</p>
  
  <div class="lang-grid">
    <a href="/home?lang=en" class="lang-btn">
      <span class="lang-flag">🇮🇳</span>
      <div class="lang-info">
        <div class="lang-name">English</div>
        <div class="lang-native">English</div>
      </div>
      <span class="lang-arrow">→</span>
    </a>
    <a href="/home?lang=hi" class="lang-btn">
      <span class="lang-flag">🇮🇳</span>
      <div class="lang-info">
        <div class="lang-name">हिंदी</div>
        <div class="lang-native">Hindi</div>
      </div>
      <span class="lang-arrow">→</span>
    </a>
    <a href="/home?lang=ta" class="lang-btn">
      <span class="lang-flag">🇮🇳</span>
      <div class="lang-info">
        <div class="lang-name">தமிழ்</div>
        <div class="lang-native">Tamil</div>
      </div>
      <span class="lang-arrow">→</span>
    </a>
    <a href="/home?lang=te" class="lang-btn">
      <span class="lang-flag">🇮🇳</span>
      <div class="lang-info">
        <div class="lang-name">తెలుగు</div>
        <div class="lang-native">Telugu</div>
      </div>
      <span class="lang-arrow">→</span>
    </a>
    <a href="/home?lang=mr" class="lang-btn">
      <span class="lang-flag">🇮🇳</span>
      <div class="lang-info">
        <div class="lang-name">मराठी</div>
        <div class="lang-native">Marathi</div>
      </div>
      <span class="lang-arrow">→</span>
    </a>
    <a href="/home?lang=kn" class="lang-btn">
      <span class="lang-flag">🇮🇳</span>
      <div class="lang-info">
        <div class="lang-name">ಕನ್ನಡ</div>
        <div class="lang-native">Kannada</div>
      </div>
      <span class="lang-arrow">→</span>
    </a>
  </div>
  
  <div class="divider">
    <div class="divider-line"></div>
    <div class="divider-text">You can change this anytime</div>
    <div class="divider-line"></div>
  </div>
</div>
<script>
  function setLanguage(lang) {
    localStorage.setItem('i18nextLng', lang);
    window.location.href = '/home?lang=' + lang;
  }
  
  // Auto-detection
  document.addEventListener("DOMContentLoaded", () => {
    // If the user visited before
    if (localStorage.getItem('i18nextLng')) return;
    
    const browserLang = navigator.language || navigator.userLanguage;
    let mappedLang = 'en';
    if (browserLang.startsWith('hi')) mappedLang = 'hi';
    else if (browserLang.startsWith('kn')) mappedLang = 'kn';
    else if (browserLang.startsWith('ta')) mappedLang = 'ta';
    else if (browserLang.startsWith('te')) mappedLang = 'te';
    else if (browserLang.startsWith('mr')) mappedLang = 'mr';
    
    if (mappedLang !== 'en') {
      setTimeout(() => {
        setLanguage(mappedLang);
      }, 1500); // Gives time to see the screen briefly
    }
  });
</script>
</body>
</html>`;
};
