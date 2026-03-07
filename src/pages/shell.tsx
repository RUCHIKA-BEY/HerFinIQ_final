import { useTranslation } from '../i18n';

export const getAppLogo = (width: number = 34, height: number = 34) => `
<img src="/static/logo.png" width="${width}" height="${height}" style="object-fit: contain; display: block;" alt="HerFinIQ Logo" />
`;

export const appShell = (page: string, lang: string = 'en', pageTitle: string = 'HerFinIQ') => {
  const { t } = useTranslation(lang);

  const navItems = [
    { icon: '🏠', key: 'dashboard', href: `/dashboard?lang=${lang}` },
    { icon: '📚', key: 'learning_hub', href: `/learning?lang=${lang}` },
    { icon: '🤖', key: 'ai_assistant', href: `/ai-assistant?lang=${lang}` },
    { icon: '📊', key: 'financial_tools', href: `/tools?lang=${lang}` },
    { icon: '💰', key: 'expense_planner', href: `/planner?lang=${lang}` },
    { icon: '🏛️', key: 'gov_schemes', href: `/schemes?lang=${lang}` },
    { icon: '🗺️', key: 'roadmap', href: `/roadmap?lang=${lang}` },
    { icon: '🎮', key: 'market_simulator', href: `/simulator?lang=${lang}` },
    { icon: '🚀', key: 'entrepreneur_hub', href: `/entrepreneur?lang=${lang}` },
    { icon: '👥', key: 'community', href: `/community?lang=${lang}` },
    { icon: '🌟', key: 'mentorship', href: `/mentorship?lang=${lang}` },
    { icon: '🏆', key: 'progress', href: `/progress?lang=${lang}` },
    { icon: '👤', key: 'profile', href: `/profile?lang=${lang}` },
  ];

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${pageTitle} – HerFinIQ</title>
<meta name="description" content="HerFinIQ – Your Financial DNA & Growth Companion. Empowering women through financial literacy and investing confidence.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
<style>
  :root {
    --primary: #5B3EFF;
    --primary-light: #7B6FFF;
    --primary-dark: #4528E8;
    --secondary: #CDBDFF;
    --accent: #FF6B6B;
    --bg: #F9FAFC;
    --white: #FFFFFF;
    --text: #1F2937;
    --text-muted: #6B7280;
    --text-light: #9CA3AF;
    --success: #10B981;
    --warning: #F59E0B;
    --danger: #EF4444;
    --border: #E5E7EB;
    --card-shadow: 0 2px 16px rgba(91,62,255,0.08);
    --card-shadow-hover: 0 8px 32px rgba(91,62,255,0.16);
    --sidebar-width: 260px;
  }
  * { margin:0; padding:0; box-sizing:border-box; }
  html { scroll-behavior: smooth; }
  body { font-family:'Inter',sans-serif; background:var(--bg); color:var(--text); display:flex; min-height:100vh; }
  
  /* SIDEBAR */
  .sidebar {
    width: var(--sidebar-width); height:100vh; position:fixed; left:0; top:0;
    background:var(--white); border-right:1px solid var(--border);
    display:flex; flex-direction:column; z-index:100;
    box-shadow: 2px 0 12px rgba(0,0,0,0.04);
    overflow-y: auto;
  }
  .sidebar-logo {
    padding: 20px 20px 16px;
    border-bottom: 1px solid var(--border);
    display: flex; align-items: center; gap: 10px; flex-shrink: 0;
  }
  .logo-icon {
    width:40px; height:40px; border-radius:12px;
    background:linear-gradient(135deg, var(--primary), var(--primary-light));
    display:flex; align-items:center; justify-content:center;
    font-size:1.3rem; flex-shrink:0;
  }
  .logo-text { font-family:'Poppins',sans-serif; font-size:1.2rem; font-weight:700; color:var(--text); }
  .logo-text span { color:var(--primary); }
  .logo-sub { font-size:0.65rem; color:var(--text-muted); margin-top:1px; }
  
  .sidebar-user {
    padding: 14px 16px;
    background: linear-gradient(135deg, rgba(91,62,255,0.06), rgba(205,189,255,0.08));
    border-bottom: 1px solid var(--border);
    display:flex; align-items:center; gap:10px;
  }
  .user-avatar {
    width:36px; height:36px; border-radius:50%;
    background:linear-gradient(135deg, var(--primary), var(--accent));
    display:flex; align-items:center; justify-content:center;
    font-size:0.9rem; font-weight:600; color:white; flex-shrink:0;
  }
  .user-name { font-size:0.85rem; font-weight:600; color:var(--text); }
  .user-badge { font-size:0.68rem; color:var(--primary); background:rgba(91,62,255,0.1); padding:1px 8px; border-radius:20px; display:inline-block; margin-top:2px; }
  
  .sidebar-nav { flex:1; padding:12px 10px; }
  .nav-section-title { font-size:0.65rem; color:var(--text-light); text-transform:uppercase; letter-spacing:0.08em; padding:8px 10px 4px; font-weight:600; }
  
  .nav-item {
    display:flex; align-items:center; gap:10px;
    padding:10px 12px; border-radius:12px;
    text-decoration:none; color:var(--text-muted);
    font-size:0.86rem; font-weight:500;
    transition:all 0.2s; margin-bottom:2px;
    cursor:pointer;
  }
  .nav-item:hover { background:rgba(91,62,255,0.07); color:var(--primary); }
  .nav-item.active { background:rgba(91,62,255,0.12); color:var(--primary); font-weight:600; }
  .nav-item .nav-icon { font-size:1.1rem; width:20px; text-align:center; flex-shrink:0; }
  .nav-item .nav-badge { margin-left:auto; background:var(--accent); color:white; font-size:0.6rem; padding:1px 6px; border-radius:10px; font-weight:600; }
  
  .sidebar-bottom {
    padding: 12px 10px; border-top:1px solid var(--border);
    display:flex; gap:6px;
  }
  .lang-select-mini {
    flex:1; background:var(--bg); border:1px solid var(--border); border-radius:8px;
    padding:6px 8px; font-size:0.75rem; color:var(--text); font-family:'Inter',sans-serif;
    cursor:pointer;
  }
  .sidebar-logout {
    display:flex; align-items:center; gap:6px;
    padding:8px 12px; border-radius:10px; text-decoration:none;
    color:var(--text-muted); font-size:0.78rem; transition:all 0.2s;
    background:transparent; border:none; cursor:pointer; font-family:'Inter',sans-serif;
  }
  .sidebar-logout:hover { color:var(--danger); background:rgba(239,68,68,0.06); }
  
  /* MAIN */
  .main { margin-left:var(--sidebar-width); flex:1; min-height:100vh; display:flex; flex-direction:column; }
  
  /* TOPBAR */
  .topbar {
    height:64px; background:var(--white); border-bottom:1px solid var(--border);
    display:flex; align-items:center; padding:0 28px;
    position:sticky; top:0; z-index:50;
    box-shadow:0 1px 8px rgba(0,0,0,0.04);
  }
  .topbar-title { font-family:'Poppins',sans-serif; font-size:1.15rem; font-weight:600; color:var(--text); }
  .topbar-right { margin-left:auto; display:flex; align-items:center; gap:12px; }
  .topbar-search {
    display:flex; align-items:center; gap:8px;
    background:var(--bg); border:1px solid var(--border); border-radius:10px;
    padding:7px 14px; font-size:0.83rem;
  }
  .topbar-search input { border:none; outline:none; background:transparent; font-size:0.83rem; color:var(--text); width:160px; font-family:'Inter',sans-serif; }
  .topbar-search input::placeholder { color:var(--text-light); }
  .topbar-btn {
    width:36px; height:36px; border-radius:10px;
    display:flex; align-items:center; justify-content:center;
    background:var(--bg); border:1px solid var(--border);
    cursor:pointer; font-size:1rem; transition:all 0.2s; position:relative;
    text-decoration:none; color:var(--text);
  }
  .topbar-btn:hover { background:rgba(91,62,255,0.08); border-color:var(--primary); }
  .notification-dot {
    position:absolute; top:6px; right:6px;
    width:8px; height:8px; border-radius:50%; background:var(--accent);
    border:2px solid white;
  }
  .confidence-pill {
    display:flex; align-items:center; gap:6px;
    background:linear-gradient(135deg, rgba(91,62,255,0.1), rgba(205,189,255,0.2));
    border:1px solid rgba(91,62,255,0.2); border-radius:20px;
    padding:5px 12px; font-size:0.78rem; font-weight:600; color:var(--primary);
  }
  .confidence-pill .dot { width:7px; height:7px; border-radius:50%; background:var(--success); box-shadow:0 0 6px var(--success); }
  
  /* CONTENT */
  .content { flex:1; padding:28px; }
  
  /* CARDS */
  .card {
    background:var(--white); border-radius:16px; border:1px solid var(--border);
    box-shadow:var(--card-shadow); transition:box-shadow 0.25s;
  }
  .card:hover { box-shadow:var(--card-shadow-hover); }
  .card-header { padding:20px 24px; border-bottom:1px solid var(--border); display:flex; align-items:center; justify-content:space-between; }
  .card-title { font-family:'Poppins',sans-serif; font-size:1rem; font-weight:600; color:var(--text); }
  .card-body { padding:24px; }
  
  /* GRID */
  .grid-2 { display:grid; grid-template-columns:1fr 1fr; gap:20px; }
  .grid-3 { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
  .grid-4 { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; }
  
  /* STAT CARDS */
  .stat-card {
    background:var(--white); border-radius:16px; border:1px solid var(--border);
    padding:20px 20px 18px; box-shadow:var(--card-shadow);
    display:flex; flex-direction:column; gap:8px;
    transition:all 0.25s;
  }
  .stat-card:hover { transform:translateY(-2px); box-shadow:var(--card-shadow-hover); }
  .stat-icon { width:44px; height:44px; border-radius:12px; display:flex; align-items:center; justify-content:center; font-size:1.3rem; }
  .stat-icon.purple { background:rgba(91,62,255,0.1); }
  .stat-icon.green { background:rgba(16,185,129,0.1); }
  .stat-icon.coral { background:rgba(255,107,107,0.1); }
  .stat-icon.yellow { background:rgba(245,158,11,0.1); }
  .stat-value { font-family:'Poppins',sans-serif; font-size:1.6rem; font-weight:700; color:var(--text); line-height:1; }
  .stat-label { font-size:0.78rem; color:var(--text-muted); font-weight:500; }
  .stat-change { font-size:0.72rem; display:flex; align-items:center; gap:3px; }
  .stat-change.up { color:var(--success); }
  .stat-change.down { color:var(--danger); }
  
  /* PROGRESS BAR */
  .progress-bar-wrap { background:#F3F4F6; border-radius:100px; height:8px; overflow:hidden; }
  .progress-bar { height:100%; border-radius:100px; background:linear-gradient(90deg, var(--primary), var(--primary-light)); transition:width 0.8s ease; }
  .progress-bar.green { background:linear-gradient(90deg, var(--success), #34D399); }
  .progress-bar.coral { background:linear-gradient(90deg, var(--accent), #FF8E8E); }
  
  /* BADGES */
  .badge { display:inline-flex; align-items:center; gap:4px; padding:3px 10px; border-radius:20px; font-size:0.72rem; font-weight:600; }
  .badge-primary { background:rgba(91,62,255,0.1); color:var(--primary); }
  .badge-success { background:rgba(16,185,129,0.1); color:var(--success); }
  .badge-accent { background:rgba(255,107,107,0.1); color:var(--accent); }
  .badge-warning { background:rgba(245,158,11,0.1); color:var(--warning); }
  
  /* BUTTONS */
  .btn { display:inline-flex; align-items:center; gap:8px; padding:10px 18px; border-radius:10px; font-size:0.85rem; font-weight:600; cursor:pointer; transition:all 0.2s; text-decoration:none; border:none; font-family:'Inter',sans-serif; }
  .btn-primary { background:var(--primary); color:white; box-shadow:0 4px 12px rgba(91,62,255,0.3); }
  .btn-primary:hover { background:var(--primary-dark); box-shadow:0 6px 20px rgba(91,62,255,0.4); transform:translateY(-1px); }
  .btn-outline { background:transparent; border:2px solid var(--primary); color:var(--primary); }
  .btn-outline:hover { background:rgba(91,62,255,0.06); }
  .btn-ghost { background:var(--bg); border:1px solid var(--border); color:var(--text-muted); }
  .btn-ghost:hover { border-color:var(--primary); color:var(--primary); }
  .btn-sm { padding:6px 12px; font-size:0.78rem; border-radius:8px; }
  
  /* GAUGE */
  .gauge-wrap { position:relative; width:140px; height:80px; margin:0 auto; }
  .gauge-svg { width:140px; height:80px; }
  .gauge-text { position:absolute; bottom:0; left:50%; transform:translateX(-50%); text-align:center; }
  .gauge-value { font-family:'Poppins',sans-serif; font-size:1.6rem; font-weight:700; color:var(--primary); line-height:1; }
  .gauge-label { font-size:0.7rem; color:var(--text-muted); }
  
  /* MOBILE */
  @media(max-width:768px){
    .sidebar { transform:translateX(-100%); transition:transform 0.3s; }
    .sidebar.open { transform:translateX(0); }
    .main { margin-left:0; }
    .grid-2,.grid-3,.grid-4 { grid-template-columns:1fr; }
    .mobile-nav {
      position:fixed; bottom:0; left:0; right:0; z-index:100;
      background:white; border-top:1px solid var(--border);
      display:flex; justify-content:space-around;
      padding:8px 0 16px;
      box-shadow:0 -4px 20px rgba(0,0,0,0.1);
    }
    .mobile-nav-item { display:flex; flex-direction:column; align-items:center; gap:2px; text-decoration:none; color:var(--text-muted); font-size:0.6rem; padding:4px 8px; border-radius:10px; transition:all 0.2s; }
    .mobile-nav-item .icon { font-size:1.3rem; }
    .mobile-nav-item.active { color:var(--primary); }
    .content { padding:16px; padding-bottom:80px; }
    .topbar { padding:0 16px; }
    .hamburger { display:flex; }
  }
  @media(min-width:769px){ 
    .mobile-nav { display:none; }
    .hamburger { display:none; }
  }
  .hamburger { background:none; border:none; cursor:pointer; font-size:1.5rem; color:var(--text); padding:4px; }
  
  @keyframes fadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
  @keyframes pulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.05)} }
  .animate-fade { animation:fadeUp 0.5s ease both; }
  
  /* TOOLTIP */
  .tooltip-wrap { position:relative; }
  .tooltip-wrap:hover .tooltip-content { opacity:1; pointer-events:auto; }
  .tooltip-content { position:absolute; bottom:110%; left:50%; transform:translateX(-50%); background:#1F2937; color:white; font-size:0.72rem; padding:5px 10px; border-radius:6px; white-space:nowrap; opacity:0; pointer-events:none; transition:opacity 0.2s; z-index:200; }
  
  /* MODULE CARDS */
  .module-card {
    background:white; border-radius:16px; border:1px solid var(--border);
    padding:20px; display:flex; flex-direction:column; gap:12px;
    box-shadow:var(--card-shadow); transition:all 0.25s; cursor:pointer;
  }
  .module-card:hover { transform:translateY(-3px); box-shadow:var(--card-shadow-hover); border-color:var(--secondary); }
  .module-header { display:flex; align-items:flex-start; gap:12px; }
  .module-icon { width:48px; height:48px; border-radius:14px; display:flex; align-items:center; justify-content:center; font-size:1.5rem; flex-shrink:0; }
  .module-info .module-title { font-family:'Poppins',sans-serif; font-size:0.95rem; font-weight:600; color:var(--text); }
  .module-info .module-desc { font-size:0.78rem; color:var(--text-muted); margin-top:3px; line-height:1.4; }
  .module-meta { display:flex; align-items:center; gap:8px; flex-wrap:wrap; }
  .module-tag { font-size:0.68rem; padding:2px 8px; border-radius:20px; background:var(--bg); border:1px solid var(--border); color:var(--text-muted); }
  .module-progress-wrap { display:flex; align-items:center; gap:8px; }
  .module-progress-wrap .label { font-size:0.72rem; color:var(--text-muted); white-space:nowrap; }
  .module-progress-wrap .pct { font-size:0.72rem; font-weight:600; color:var(--primary); white-space:nowrap; }
  
  /* CHAT (AI) */
  .chat-container { height:calc(100vh - 180px); display:flex; flex-direction:column; }
  .chat-messages { flex:1; overflow-y:auto; padding:20px; display:flex; flex-direction:column; gap:16px; }
  .chat-messages::-webkit-scrollbar { width:4px; }
  .chat-messages::-webkit-scrollbar-thumb { background:var(--border); border-radius:2px; }
  .msg { display:flex; gap:10px; animation:fadeUp 0.3s ease; }
  .msg.user { flex-direction:row-reverse; }
  .msg-avatar-sm { width:32px; height:32px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:0.8rem; flex-shrink:0; }
  .msg-avatar-sm.ai { background:linear-gradient(135deg, var(--primary), var(--primary-light)); color:white; }
  .msg-avatar-sm.user-av { background:var(--bg); border:1px solid var(--border); color:var(--text-muted); }
  .msg-bubble { max-width:70%; padding:12px 16px; border-radius:16px; font-size:0.86rem; line-height:1.6; }
  .msg-bubble.ai { background:var(--white); border:1px solid var(--border); border-bottom-left-radius:4px; }
  
  /* NOTIFICATION MODAL */
  #notificationPanel {
    display: none; position: absolute; top: 70px; right: 28px; width: 320px;
    background: white; border: 1px solid var(--border); border-radius: 16px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.12); z-index: 1000; overflow: hidden;
    animation: fadeUp 0.3s ease;
  }
  #notificationPanel.show { display: block; }
  .notif-header { padding: 16px; border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; background: var(--bg); }
  .notif-title { font-weight: 700; font-size: 0.9rem; font-family: 'Poppins', sans-serif; }
  .notif-list { max-height: 380px; overflow-y: auto; }
  .notif-item { padding: 14px 16px; border-bottom: 1px solid var(--bg); display: flex; gap: 12px; transition: background 0.2s; cursor: pointer; }
  .notif-item:hover { background: rgba(91,62,255,0.04); }
  .notif-item.unread { background: rgba(91,62,255,0.02); }
  .notif-icon { width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; flex-shrink: 0; }
  .notif-content { flex: 1; }
  .notif-text { font-size: 0.8rem; line-height: 1.4; color: var(--text); }
  .notif-time { font-size: 0.68rem; color: var(--text-light); margin-top: 4px; }
  .msg-bubble.user { background:linear-gradient(135deg, var(--primary), var(--primary-light)); color:white; border-bottom-right-radius:4px; }
  .chat-input-area { padding:16px 20px; border-top:1px solid var(--border); }
  .chat-input-row { display:flex; align-items:center; gap:10px; background:var(--bg); border:2px solid var(--border); border-radius:14px; padding:8px 12px; transition:border-color 0.2s; }
  .chat-input-row:focus-within { border-color:var(--primary); }
  .chat-input-row textarea { flex:1; border:none; outline:none; background:transparent; font-family:'Inter',sans-serif; font-size:0.85rem; resize:none; max-height:80px; line-height:1.5; }
  .chat-send { width:36px; height:36px; border-radius:10px; background:var(--primary); border:none; color:white; cursor:pointer; font-size:1rem; display:flex; align-items:center; justify-content:center; transition:all 0.2s; flex-shrink:0; }
  .chat-send:hover { background:var(--primary-dark); transform:scale(1.05); }
  .typing-indicator { display:flex; gap:4px; align-items:center; padding:10px 14px; }
  .typing-dot { width:7px; height:7px; border-radius:50%; background:var(--primary); opacity:0.4; animation:typingBounce 1.2s ease infinite; }
  .typing-dot:nth-child(2){animation-delay:0.2s} .typing-dot:nth-child(3){animation-delay:0.4s}
  @keyframes typingBounce{0%,60%,100%{transform:translateY(0);opacity:0.4}30%{transform:translateY(-6px);opacity:1}}
  
  /* WELCOME BANNER */
  .welcome-banner {
    background:linear-gradient(135deg, var(--primary) 0%, #7C3AED 60%, #A855F7 100%);
    border-radius:20px; padding:28px 32px; color:white; position:relative; overflow:hidden; margin-bottom:24px;
  }
  .welcome-banner::before { content:''; position:absolute; top:-60px; right:-60px; width:200px; height:200px; background:rgba(255,255,255,0.07); border-radius:50%; }
  .welcome-banner::after { content:''; position:absolute; bottom:-40px; right:80px; width:140px; height:140px; background:rgba(255,255,255,0.05); border-radius:50%; }
  .welcome-text { font-family:'Poppins',sans-serif; font-size:1.5rem; font-weight:700; margin-bottom:6px; position:relative; z-index:1; }
  .welcome-sub { font-size:0.88rem; opacity:0.85; position:relative; z-index:1; margin-bottom:18px; }
  .welcome-actions { display:flex; gap:10px; flex-wrap:wrap; position:relative; z-index:1; }
  .welcome-btn { padding:9px 18px; border-radius:10px; font-size:0.82rem; font-weight:600; cursor:pointer; transition:all 0.2s; border:none; font-family:'Inter',sans-serif; }
  .welcome-btn.primary { background:white; color:var(--primary); }
  .welcome-btn.primary:hover { background:#F0EDFF; transform:translateY(-1px); }
  .welcome-btn.outline { background:rgba(255,255,255,0.15); color:white; border:2px solid rgba(255,255,255,0.4); }
  .welcome-btn.outline:hover { background:rgba(255,255,255,0.25); }
  
  /* QUICK ACTIONS GRID */
  .quick-action {
    background:white; border-radius:14px; border:1px solid var(--border);
    padding:18px 16px; text-align:center;
    box-shadow:var(--card-shadow); cursor:pointer; transition:all 0.25s; text-decoration:none; display:block;
  }
  .quick-action:hover { transform:translateY(-3px); box-shadow:var(--card-shadow-hover); border-color:var(--secondary); }
  .quick-action-icon { font-size:2rem; margin-bottom:8px; display:block; }
  .quick-action-label { font-size:0.82rem; font-weight:600; color:var(--text); }
  .quick-action-sub { font-size:0.72rem; color:var(--text-muted); margin-top:2px; }
  
  /* OPPORTUNITY CARDS */
  .opportunity-card {
    background:white; border-radius:14px; border:1px solid var(--border);
    padding:18px; box-shadow:var(--card-shadow); display:flex; gap:14px; align-items:flex-start;
    transition:all 0.25s;
  }
  .opportunity-card:hover { box-shadow:var(--card-shadow-hover); }
  .opp-icon { width:44px; height:44px; border-radius:12px; display:flex; align-items:center; justify-content:center; font-size:1.4rem; flex-shrink:0; }
  .opp-title { font-weight:600; font-size:0.9rem; color:var(--text); margin-bottom:4px; }
  .opp-desc { font-size:0.78rem; color:var(--text-muted); line-height:1.4; }
  .opp-tags { display:flex; gap:4px; flex-wrap:wrap; margin-top:8px; }
  
  /* PLANNER TABLE */
  .expense-table { width:100%; border-collapse:collapse; }
  .expense-table th { font-size:0.72rem; font-weight:600; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.05em; padding:10px 14px; border-bottom:2px solid var(--border); text-align:left; }
  .expense-table td { padding:12px 14px; border-bottom:1px solid var(--border); font-size:0.84rem; color:var(--text); }
  .expense-table tr:hover td { background:rgba(91,62,255,0.02); }
  .category-dot { width:8px; height:8px; border-radius:50%; display:inline-block; margin-right:6px; }
  
  /* ROADMAP */
  .roadmap-step { display:flex; gap:16px; align-items:flex-start; padding:16px 0; }
  .roadmap-step:not(:last-child) { border-bottom:1px solid var(--border); }
  .step-num { width:36px; height:36px; border-radius:50%; background:linear-gradient(135deg, var(--primary), var(--primary-light)); color:white; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:0.85rem; flex-shrink:0; }
  .step-num.done { background:linear-gradient(135deg, var(--success), #34D399); }
  .step-num.locked { background:var(--border); color:var(--text-muted); }
  .step-content { flex:1; }
  .step-title { font-weight:600; font-size:0.92rem; color:var(--text); margin-bottom:4px; }
  .step-desc { font-size:0.78rem; color:var(--text-muted); line-height:1.5; }
  
  /* SCHEME CARDS */
  .scheme-card { background:white; border-radius:16px; border:1px solid var(--border); padding:20px; box-shadow:var(--card-shadow); }
  .scheme-ministry { font-size:0.68rem; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.06em; margin-bottom:6px; }
  .scheme-name { font-family:'Poppins',sans-serif; font-size:0.95rem; font-weight:600; color:var(--text); margin-bottom:8px; line-height:1.3; }
  .scheme-amount { font-size:1.1rem; font-weight:700; color:var(--primary); margin-bottom:8px; }
  .scheme-desc { font-size:0.78rem; color:var(--text-muted); line-height:1.5; margin-bottom:12px; }
  .scheme-link { display:inline-flex; align-items:center; gap:6px; font-size:0.78rem; font-weight:600; color:var(--primary); text-decoration:none; }
  .scheme-link:hover { text-decoration:underline; }
  
  /* MENTORSHIP */
  .mentor-card { background:white; border-radius:16px; border:1px solid var(--border); padding:20px; text-align:center; box-shadow:var(--card-shadow); }
  .mentor-avatar-lg { width:72px; height:72px; border-radius:50%; margin:0 auto 12px; font-size:2rem; display:flex; align-items:center; justify-content:center; }
  .mentor-name { font-family:'Poppins',sans-serif; font-size:1rem; font-weight:600; color:var(--text); }
  .mentor-expertise { font-size:0.78rem; color:var(--text-muted); margin:4px 0 12px; }
  
  /* LEADERBOARD */
  .leaderboard-item { display:flex; align-items:center; gap:12px; padding:12px 0; border-bottom:1px solid var(--border); }
  .lb-rank { width:28px; height:28px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:0.78rem; font-weight:700; flex-shrink:0; }
  .lb-rank.gold { background:linear-gradient(135deg, #F59E0B, #FCD34D); color:white; }
  .lb-rank.silver { background:linear-gradient(135deg, #6B7280, #9CA3AF); color:white; }
  .lb-rank.bronze { background:linear-gradient(135deg, #92400E, #D97706); color:white; }
  .lb-rank.normal { background:var(--bg); border:1px solid var(--border); color:var(--text-muted); }
  .lb-avatar { width:36px; height:36px; border-radius:50%; background:linear-gradient(135deg, var(--primary), var(--accent)); display:flex; align-items:center; justify-content:center; color:white; font-size:0.8rem; font-weight:600; }
  .lb-name { font-size:0.86rem; font-weight:600; color:var(--text); }
  .lb-score { margin-left:auto; font-weight:700; color:var(--primary); font-size:0.86rem; }
  .lb-xp { font-size:0.7rem; color:var(--text-muted); }
  
  /* TIPS */
  .tip-card { background:linear-gradient(135deg, rgba(91,62,255,0.06), rgba(205,189,255,0.12)); border:1px solid rgba(91,62,255,0.15); border-radius:14px; padding:18px; }
  .tip-label { font-size:0.68rem; color:var(--primary); font-weight:600; text-transform:uppercase; letter-spacing:0.08em; margin-bottom:6px; }
  .tip-text { font-size:0.85rem; color:var(--text); line-height:1.5; }
  
  /* QUIZ */
  .quiz-option { padding:14px 18px; border-radius:12px; border:2px solid var(--border); margin-bottom:10px; cursor:pointer; transition:all 0.2s; font-size:0.86rem; }
  .quiz-option:hover { border-color:var(--primary); background:rgba(91,62,255,0.04); }
  .quiz-option.selected { border-color:var(--primary); background:rgba(91,62,255,0.08); color:var(--primary); font-weight:600; }
  .quiz-option.correct { border-color:var(--success); background:rgba(16,185,129,0.08); color:var(--success); }
  .quiz-option.wrong { border-color:var(--danger); background:rgba(239,68,68,0.06); color:var(--danger); }

  /* CONFIDENCE METER */
  .conf-meter { text-align:center; padding:20px 0; }
  .conf-arc-wrap { position:relative; width:180px; height:100px; margin:0 auto; }
  #confidenceArc { transition: stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1); }
  .conf-value { font-family:'Poppins',sans-serif; font-size:2.2rem; font-weight:700; color:var(--primary); line-height:1; }
  .conf-label { font-size:0.78rem; color:var(--text-muted); margin-top:4px; }

  /* HOTLINE */
  .hotline-btn {
    position: fixed; bottom: 28px; right: 28px; z-index: 1000;
    background: linear-gradient(135deg, #10B981, #059669);
    color: white; padding: 12px 24px; border-radius: 50px;
    box-shadow: 0 4px 24px rgba(16,185,129,0.4);
    display: flex; align-items: center; gap: 10px; cursor: pointer;
    font-weight: 700; font-size: 0.95rem; transition: all 0.3s;
    border: 2px solid rgba(255,255,255,0.2);
    font-family: 'Poppins', sans-serif;
  }
  .hotline-btn:hover { transform: scale(1.05) translateY(-4px); box-shadow: 0 12px 32px rgba(16,185,129,0.5); }
  .hotline-icon { font-size: 1.3rem; animation: shake 1s infinite alternate; }
  @keyframes shake { from { transform: rotate(-10deg); } to { transform: rotate(10deg); } }
  @media(max-width: 768px) { 
    .hotline-btn { bottom: 90px; right: 16px; padding: 10px; border-radius: 50%; width: 56px; height: 56px; justify-content: center; }
    .hotline-text { display: none; }
  }
</style>
</head>
<body>

<!-- SIDEBAR -->
<aside class="sidebar" id="sidebar">
  <div class="sidebar-logo" style="padding: 20px 24px; display: flex; align-items: center; justify-content: flex-start; gap: 10px; margin-bottom: 20px;">
    <a href="/dashboard?lang=${lang}" style="display: block; width: 100%; max-width: 180px;">
      <img src="/static/logo.png" style="width: 100%; height: auto; display: block;" alt="HerFinIQ Logo" />
    </a>
  </div>
  
  <div class="sidebar-user">
    <div class="user-avatar" id="sidebarAvatar">S</div>
    <div>
      <div class="user-name" id="sidebarName">Sandra</div>
      <div class="user-badge" id="sidebarBadge">Homemaker</div>
    </div>
  </div>
  
  <nav class="sidebar-nav">
    <div class="nav-section-title">Main</div>
    ${navItems.slice(0, 3).map(item => `<a href="${item.href}" class="nav-item ${page === item.key || (page === 'learning' && item.key === 'learning_hub') || (page === 'aiAssistant' && item.key === 'ai_assistant') ? 'active' : ''}">
      <span class="nav-icon">${item.icon}</span>
      <span>${t(item.key)}</span>
      ${item.key === 'ai_assistant' ? '<span class="nav-badge">AI</span>' : ''}
    </a>`).join('')}
    
    <div class="nav-section-title" style="margin-top:6px">Finance</div>
    ${navItems.slice(3, 6).map(item => `<a href="${item.href}" class="nav-item ${page === item.key || (page === 'tools' && item.key === 'financial_tools') || (page === 'planner' && item.key === 'expense_planner') || (page === 'schemes' && item.key === 'gov_schemes') ? 'active' : ''}">
      <span class="nav-icon">${item.icon}</span>
      <span>${t(item.key)}</span>
    </a>`).join('')}
    
    <div class="nav-section-title" style="margin-top:6px">Grow</div>
    ${navItems.slice(6).map(item => `<a href="${item.href}" class="nav-item ${page === item.key ? 'active' : ''}">
      <span class="nav-icon">${item.icon}</span>
      <span>${t(item.key)}</span>
    </a>`).join('')}
  </nav>
  
  <div class="sidebar-bottom">
    <select class="lang-select-mini" onchange="changeLang(this.value)">
      <option value="en" ${lang === 'en' ? 'selected' : ''}>English</option>
      <option value="hi" ${lang === 'hi' ? 'selected' : ''}>हिंदी</option>
      <option value="ta" ${lang === 'ta' ? 'selected' : ''}>தமிழ்</option>
      <option value="te" ${lang === 'te' ? 'selected' : ''}>తెలుగు</option>
      <option value="mr" ${lang === 'mr' ? 'selected' : ''}>मराठी</option>
      <option value="kn" ${lang === 'kn' ? 'selected' : ''}>ಕನ್ನಡ</option>
    </select>
    <button class="sidebar-logout" onclick="logout()">🚪 ${t('logout')}</button>
  </div>
</aside>

<!-- MAIN -->
<div class="main">
  <header class="topbar">
    <button class="hamburger" onclick="toggleSidebar()">☰</button>
    <div class="topbar-title">${pageTitle}</div>
    <div class="topbar-right">
      <div class="topbar-search">
        <span>🔍</span>
        <input type="text" placeholder="Search...">
      </div>
      <div class="confidence-pill tooltip-wrap">
        <span class="dot"></span>
        <span id="topbarConfidence">72 pts</span>
        <div class="tooltip-content">Your Confidence Score</div>
      </div>
      <button onclick="toggleNotifications(event)" class="topbar-btn tooltip-wrap" title="Notifications">
        🔔
        <span class="notification-dot"></span>
        <div class="tooltip-content">Notifications</div>
      </button>

      <!-- NOTIFICATION PANEL -->
      <div id="notificationPanel">
        <div class="notif-header">
           <span class="notif-title">Notifications</span>
           <button style="background:none; border:none; color:var(--primary); font-size:0.75rem; font-weight:600; cursor:pointer">Mark as read</button>
        </div>
        <div class="notif-list" id="notifList">
          <!-- Populated by JS -->
        </div>
      </div>
      <a href="/profile?lang=${lang}" class="topbar-btn tooltip-wrap" title="Profile">
        👤
        <div class="tooltip-content">Profile</div>
      </a>
      <!-- Topbar Language Selector -->
      <select class="lang-select-mini" style="margin-left:8px; border:1px solid var(--border); border-radius:8px; padding:4px 8px; font-size:0.75rem" onchange="changeLang(this.value)">
        <option value="en" ${lang === 'en' ? 'selected' : ''}>EN</option>
        <option value="hi" ${lang === 'hi' ? 'selected' : ''}>HI</option>
        <option value="ta" ${lang === 'ta' ? 'selected' : ''}>TA</option>
        <option value="te" ${lang === 'te' ? 'selected' : ''}>TE</option>
        <option value="mr" ${lang === 'mr' ? 'selected' : ''}>MR</option>
        <option value="kn" ${lang === 'kn' ? 'selected' : ''}>KN</option>
      </select>
    </div>
  </header>
  
  <div class="content" id="mainContent">
${page}
  </div>
</div>

<!-- MOBILE NAV -->
<nav class="mobile-nav">
  <a href="/dashboard?lang=${lang}" class="mobile-nav-item ${page === 'dashboard' ? 'active' : ''}"><span class="icon">🏠</span>${t('dashboard')}</a>
  <a href="/learning?lang=${lang}" class="mobile-nav-item ${page === 'learning' ? 'active' : ''}"><span class="icon">📚</span>${t('learning_hub')}</a>
  <a href="/ai-assistant?lang=${lang}" class="mobile-nav-item ${page === 'aiAssistant' ? 'active' : ''}"><span class="icon">🤖</span>${t('ai_assistant')}</a>
  <a href="/planner?lang=${lang}" class="mobile-nav-item ${page === 'planner' ? 'active' : ''}"><span class="icon">💰</span>${t('expense_planner')}</a>
  <a href="/progress?lang=${lang}" class="mobile-nav-item ${page === 'progress' ? 'active' : ''}"><span class="icon">🏆</span>${t('progress')}</a>
</nav>

<script>
// Load user data from localStorage
function loadUser() {
  let u = JSON.parse(localStorage.getItem('herfiniq_user') || '{}');
  
  // Force update demo user to Sandra if needed
  if (u.username === 'demo' && u.name !== 'Sandra') {
    u.name = 'Sandra';
    u.profileType = 'Homemaker';
    localStorage.setItem('herfiniq_user', JSON.stringify(u));
  }
  
  if (u.name) {
    document.getElementById('sidebarName').textContent = u.name;
    document.getElementById('sidebarAvatar').textContent = u.name[0].toUpperCase();
    if (u.profileType) document.getElementById('sidebarBadge').textContent = u.profileType;
  } else {
    // Default demo user
    document.getElementById('sidebarName').textContent = 'Sandra';
    document.getElementById('sidebarAvatar').textContent = 'S';
    document.getElementById('sidebarBadge').textContent = 'Homemaker';
  }
  const score = parseInt(u.confidenceScore) || 72;
  const scoreEl = document.getElementById('topbarConfidence');
  if (scoreEl) scoreEl.textContent = score + ' pts';
  
  // Set notifications
  const notifs = [
    { title: 'New Course Available!', body: 'Check out "Stock Market Basics" now.', time: '2h ago', icon: '🎓', color: '#5B3EFF' },
    { title: 'Goal Achieved!', body: 'You reached your savings goal for Feb.', time: '1d ago', icon: '🏆', color: '#10B981' },
    { title: 'Assessment Pending', body: 'Refresh your profile with a new assessment.', time: '3d ago', icon: '📝', color: '#F59E0B' }
  ];
  const list = document.getElementById('notifList');
  if (list) {
    list.innerHTML = notifs.map(n => 
      '<div class="notif-item">' +
        '<div class="notif-icon" style="background:'+n.color+'15; color:'+n.color+'">'+n.icon+'</div>' +
        '<div class="notif-content">' +
          '<div class="notif-text" style="font-weight:600">'+n.title+'</div>' +
          '<div class="notif-text">'+n.body+'</div>' +
          '<div class="notif-time">'+n.time+'</div>' +
        '</div>' +
      '</div>'
    ).join('');
  }
}
loadUser();

window.toggleNotifications = function(e) {
  if (e) e.stopPropagation();
  const panel = document.getElementById('notificationPanel');
  if (panel) panel.classList.toggle('show');
};

window.toggleSidebar = function() {
  const s = document.getElementById('sidebar');
  if (s) s.classList.toggle('open');
};

window.changeLang = function(lang) {
  const cur = window.location.pathname;
  const params = new URLSearchParams(window.location.search);
  params.set('lang', lang);
  window.location.href = cur + '?' + params.toString();
};

window.logout = function() {
  localStorage.removeItem('herfiniq_user');
  localStorage.removeItem('herfiniq_token');
  // Use a small timeout to ensure storage is cleared before redirect
  setTimeout(() => {
    window.location.href = '/login?lang=${lang}';
  }, 100);
};

// Global click listeners
document.addEventListener('click', function(e) {
  // Close notifications
  const panel = document.getElementById('notificationPanel');
  const bell = document.querySelector('.notif-bell');
  if (panel && panel.classList.contains('show') && !panel.contains(e.target)) {
    panel.classList.remove('show');
  }

  // Close sidebar (mobile)
  const sidebar = document.getElementById('sidebar');
  if (sidebar && window.innerWidth <= 768 && !sidebar.contains(e.target) && !e.target.closest('.hamburger')) {
    sidebar.classList.remove('open');
  }
});
</script>

<!-- AI HOTLINE BUTTON -->
<div class="hotline-btn" onclick="window.location.href='tel:9090909090'" title="AI Mentor Hotline">
  <span class="hotline-icon">📞</span>
  <span class="hotline-text">AI Hotline: 9090909090</span>
</div>

</body>
</html>`;
};
