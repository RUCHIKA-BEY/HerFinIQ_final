export const incubatorsPage = () => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Incubators — SheLaunch AI</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
<style>
  :root {
    --bg: #0a0b0e;
    --bg-card: #13161e;
    --border: rgba(255,255,255,0.07);
    --text: #e8e6f0;
    --accent: #b48cff;
  }
  body { background: var(--bg); color: var(--text); font-family: 'DM Sans', sans-serif; display: flex; flex-direction: column; min-height: 100vh; margin: 0; }
  nav { padding: 16px 48px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; }
  .nav-logo { font-family: 'Cormorant Garamond', serif; font-size: 1.3rem; text-decoration: none; color: var(--text); }
  .nav-logo span { color: var(--accent); }
  .container { max-width: 800px; margin: 80px auto; padding: 0 20px; }
  h1 { font-family: 'Cormorant Garamond', serif; font-size: 2.5rem; margin-bottom: 20px; }
  .placeholder-card { background: var(--bg-card); border: 1px solid var(--border); padding: 40px; border-radius: 16px; text-align: center; }
</style>
</head>
<body>
<nav>
  <a href="/" class="nav-logo">She<span>Launch</span> AI</a>
</nav>
<div class="container">
  <h1>Incubators</h1>
  <div class="placeholder-card">
    <p>Incubator Aggregator module implementation in progress...</p>
    <a href="/" style="color: var(--accent); text-decoration: none;">← Back to Home</a>
  </div>
</div>
</body>
</html>
  `;
};
