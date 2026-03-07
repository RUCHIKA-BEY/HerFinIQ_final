import { appShell } from './shell';
import { useTranslation } from '../i18n';

export const simulatorPage = (lang: string = 'en') => {
  const { t } = useTranslation(lang);
  const content = `
<div style="margin-bottom:24px">
  <h2 style="font-family:'Poppins',sans-serif;font-size:1.5rem;font-weight:700;color:var(--text);margin-bottom:4px">🎮 Market Simulator</h2>
  <p style="color:var(--text-muted);font-size:0.9rem">Practice investing and trading in a risk-free environment</p>
</div>

<!-- Tabs -->
<div style="display:flex;gap:10px;margin-bottom:24px;background:var(--bg);border-radius:12px;padding:6px;width:fit-content">
  <button id="tabSIP" class="btn btn-primary" onclick="switchSimTab('SIP')">SIP Simulator</button>
  <button id="tabStocks" class="btn btn-ghost" onclick="switchSimTab('Stocks')">Stock Investing</button>
  <button id="tabTrading" class="btn btn-ghost" onclick="switchSimTab('Trading')">Day Trading</button>
</div>

<!-- SIP Simulator -->
<div id="simSIP" style="display:block">
  <div class="card" style="margin-bottom:24px">
    <div class="card-header"><div class="card-title">📈 10-Year SIP Journey Simulator</div></div>
    <div class="card-body">
      <div class="grid-2" style="gap:24px">
        <div>
          <label style="font-size:0.8rem;font-weight:600;display:block;margin-bottom:8px">Monthly Investment (₹)</label>
          <input type="number" id="sipSimAmount" value="5000" style="width:100%;padding:12px;border:2px solid var(--border);border-radius:10px;margin-bottom:16px;outline:none;font-family:'Inter',sans-serif">
          
          <label style="font-size:0.8rem;font-weight:600;display:block;margin-bottom:8px">Market Condition</label>
          <select id="sipSimMarket" style="width:100%;padding:12px;border:2px solid var(--border);border-radius:10px;margin-bottom:24px;outline:none;font-family:'Inter',sans-serif">
            <option value="bull">Bull Market (High Growth, low drops)</option>
            <option value="bear">Bear Market (Slow Growth, frequent drops)</option>
            <option value="volatile" selected>Volatile Market (Realistic Indian Market)</option>
          </select>
          
          <button class="btn btn-primary" style="width:100%;justify-content:center" onclick="runSIPSim()">Run 10-Year Simulation</button>
        </div>
        <div>
          <canvas id="sipSimChart" height="200"></canvas>
          <div style="display:flex;justify-content:space-between;margin-top:16px;background:rgba(91,62,255,0.06);padding:14px;border-radius:12px">
            <div>
              <div style="font-size:0.75rem;color:var(--text-muted)">Total Invested</div>
              <div style="font-weight:700;font-size:1.2rem;color:var(--text)" id="sipSimInvested">₹0</div>
            </div>
            <div style="text-align:right">
              <div style="font-size:0.75rem;color:var(--text-muted)">Final Corpus</div>
              <div style="font-weight:700;font-size:1.2rem;color:var(--primary)" id="sipSimCorpus">₹0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Stocks Simulator -->
<div id="simStocks" style="display:none">
  <div class="card" style="margin-bottom:24px">
    <div class="card-header">
      <div class="card-title">📊 Mock Stock Portfolio</div>
      <div style="font-size:0.85rem;font-weight:600;color:var(--text-muted)">Virtual Cash: <span id="vCash" style="color:var(--success)">₹100,000</span></div>
    </div>
    <div class="card-body">
      <div style="margin-bottom:16px;font-size:0.85rem;color:var(--text-muted)">Market updates every 2 seconds. Buy/Sell without real money!</div>
      <div style="overflow-x:auto">
        <table style="width:100%;text-align:left;border-collapse:collapse">
          <thead>
            <tr style="border-bottom:2px solid var(--border)">
              <th style="padding:10px;font-size:0.75rem;color:var(--text-muted)">STOCK</th>
              <th style="padding:10px;font-size:0.75rem;color:var(--text-muted)">PRICE</th>
              <th style="padding:10px;font-size:0.75rem;color:var(--text-muted)">HOLDINGS</th>
              <th style="padding:10px;font-size:0.75rem;color:var(--text-muted)">ACTION</th>
            </tr>
          </thead>
          <tbody id="stockTbody"></tbody>
        </table>
      </div>
      <div style="margin-top:20px;padding:14px;background:var(--bg);border-radius:10px">
        <div style="font-weight:600;font-size:0.85rem">Portfolio Value: <span id="portValue" style="color:var(--primary)">₹0</span></div>
      </div>
    </div>
  </div>
</div>

<!-- Trading Simulator -->
<div id="simTrading" style="display:none">
  <div class="card" style="margin-bottom:24px">
    <div class="card-header"><div class="card-title">⚡ 1-Minute Day Trading</div></div>
    <div class="card-body">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
        <div>
          <div style="font-size:0.75rem;color:var(--text-muted)">Live Asset Price</div>
          <div style="font-weight:700;font-size:2rem;color:var(--text)" id="tradePrice">₹100.00</div>
        </div>
        <div style="text-align:right">
          <div style="font-size:0.75rem;color:var(--text-muted)">Your Trades Balance</div>
          <div style="font-weight:700;font-size:1.4rem;color:var(--primary)" id="tradeBalance">₹50,000</div>
        </div>
      </div>
      <div style="height:150px;width:100%;margin-bottom:10px">
        <canvas id="tradeChart"></canvas>
      </div>
      <div style="display:flex;gap:10px">
        <button class="btn btn-primary" style="flex:1;background:var(--success);box-shadow:none" onclick="execTrade('buy')">BUY (10 units)</button>
        <button class="btn btn-primary" style="flex:1;background:var(--danger);box-shadow:none" onclick="execTrade('sell')">SELL (10 units)</button>
      </div>
      <div id="tradeLog" style="margin-top:16px;font-size:0.75rem;color:var(--text-muted);height:60px;overflow-y:auto"></div>
    </div>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
<script>
function switchSimTab(tab) {
  document.getElementById('simSIP').style.display = tab === 'SIP' ? 'block' : 'none';
  document.getElementById('simStocks').style.display = tab === 'Stocks' ? 'block' : 'none';
  document.getElementById('simTrading').style.display = tab === 'Trading' ? 'block' : 'none';
  
  document.getElementById('tabSIP').className = tab === 'SIP' ? 'btn btn-primary' : 'btn btn-ghost';
  document.getElementById('tabStocks').className = tab === 'Stocks' ? 'btn btn-primary' : 'btn btn-ghost';
  document.getElementById('tabTrading').className = tab === 'Trading' ? 'btn btn-primary' : 'btn btn-ghost';
  
  if (tab === 'Trading' && !tradeInterval) startTradingSim();
}

// ---- SIP SIMULATOR ----
let sipChart;
function runSIPSim() {
  const amount = parseFloat(document.getElementById('sipSimAmount').value) || 5000;
  const market = document.getElementById('sipSimMarket').value;
  
  let currentVal = 0, totalInv = 0;
  const labels = [], dataInv = [], dataVal = [];
  
  for (let year=1; year<=10; year++) {
    for (let month=1; month<=12; month++) {
      totalInv += amount;
      currentVal += amount;
      
      // Simulate monthly market movement
      let monthReturn = 0;
      if (market === 'bull') monthReturn = 0.01 + (Math.random() * 0.02 - 0.005); // 0.5% to 2.5%
      else if (market === 'bear') monthReturn = 0.005 + (Math.random() * 0.04 - 0.025); // -2% to 2%
      else monthReturn = 0.008 + (Math.random() * 0.08 - 0.04); // -3.2% to 4.8%
      
      currentVal = currentVal * (1 + monthReturn);
    }
    labels.push('Yr ' + year);
    dataInv.push(totalInv);
    dataVal.push(Math.round(currentVal));
  }
  
  document.getElementById('sipSimInvested').textContent = '₹' + totalInv.toLocaleString();
  document.getElementById('sipSimCorpus').textContent = '₹' + Math.round(currentVal).toLocaleString();
  
  if (sipChart) sipChart.destroy();
  sipChart = new Chart(document.getElementById('sipSimChart').getContext('2d'), {
    type: 'line',
    data: {
      labels,
      datasets: [
        { label:'Invested', data:dataInv, borderColor:'#9CA3AF', borderDash:[5,5], fill:false, tension:0.1 },
        { label:'Market Value', data:dataVal, borderColor:'#5B3EFF', backgroundColor:'rgba(91,62,255,0.1)', fill:true, tension:0.4 }
      ]
    },
    options: { responsive:true, maintainAspectRatio:false, plugins:{legend:{position:'top'}} }
  });
}

// ---- STOCKS SIMULATOR ----
let virtualCash = 100000;
let stocks = [
  { sym: 'RELIANCE', name: 'Reliance Ind.', price: 2800, owned: 0 },
  { sym: 'TCS', name: 'Tata Consultancy', price: 3900, owned: 0 },
  { sym: 'HDFC', name: 'HDFC Bank', price: 1600, owned: 0 },
  { sym: 'ZOMATO', name: 'Zomato Ltd', price: 150, owned: 0 }
];

let firstRender = true;
function renderStocks() {
  document.getElementById('vCash').textContent = '₹' + virtualCash.toLocaleString(undefined,{maximumFractionDigits:0});
  let pVal = 0;
  
  if (firstRender) {
    document.getElementById('stockTbody').innerHTML = stocks.map((s, i) => {
      pVal += s.owned * s.price;
      return \`
        <tr style="border-bottom:1px solid var(--border)">
          <td style="padding:12px;font-weight:600">\${s.sym}<br><span style="font-size:0.65rem;font-weight:400;color:var(--text-muted)">\${s.name}</span></td>
          <td style="padding:12px;color:\${s.change >= 0 ? 'var(--success)' : 'var(--danger)'}" id="stkPrice\${i}">₹\${s.price.toFixed(1)}</td>
          <td style="padding:12px" id="stkOwn\${i}">\${s.owned}</td>
          <td style="padding:12px;display:flex;gap:6px">
            <button style="padding:6px 14px;border-radius:6px;border:none;background:var(--success);color:white;cursor:pointer;font-weight:600" onclick="simBuyStock(\${i})">Buy</button>
            <button style="padding:6px 14px;border-radius:6px;border:none;background:var(--danger);color:white;cursor:pointer;font-weight:600" onclick="simSellStock(\${i})">Sell</button>
          </td>
        </tr>
      \`;
    }).join('');
    firstRender = false;
  } else {
    stocks.forEach((s, i) => {
      pVal += s.owned * s.price;
      const pel = document.getElementById('stkPrice' + i);
      if (pel) { pel.textContent = '₹' + s.price.toFixed(1); pel.style.color = s.change >= 0 ? 'var(--success)' : 'var(--danger)'; }
      const oel = document.getElementById('stkOwn' + i);
      if (oel) { oel.textContent = s.owned; }
    });
  }
  
  document.getElementById('portValue').textContent = '₹' + pVal.toLocaleString(undefined,{maximumFractionDigits:0}) + ' (Total Wealth: ₹' + (virtualCash+pVal).toLocaleString(undefined,{maximumFractionDigits:0}) + ')';
}

function simBuyStock(i) {
  if (virtualCash >= stocks[i].price) { virtualCash -= stocks[i].price; stocks[i].owned++; renderStocks(); }
}
function simSellStock(i) {
  if (stocks[i].owned > 0) { virtualCash += stocks[i].price; stocks[i].owned--; renderStocks(); }
}

setInterval(() => {
  stocks.forEach(s => {
    const changePct = (Math.random() - 0.5) * 0.015; // -0.75% to +0.75% change
    s.change = changePct;
    s.price = s.price * (1 + changePct);
  });
  if (document.getElementById('simStocks').style.display !== 'none') renderStocks();
}, 2000);
renderStocks();

// ---- TRADING SIMULATOR ----
let tPrice = 100, tBal = 50000, tHoldings = 0;
let tLabels = Array(20).fill(''), tData = Array(20).fill(100);
let tradeChart, tradeInterval;

function startTradingSim() {
  tradeChart = new Chart(document.getElementById('tradeChart').getContext('2d'), {
    type: 'line',
    data: { labels:tLabels, datasets: [{ label:'Price', data:tData, borderColor:'#FF6B6B', tension:0.1, pointRadius:0 }] },
    options: { animation:false, responsive:true, maintainAspectRatio:false, scales: { x:{display:false} } }
  });
  
  tradeInterval = setInterval(() => {
    tPrice = tPrice + (Math.random() - 0.5) * 2;
    if (tPrice < 10) tPrice = 10;
    document.getElementById('tradePrice').textContent = '₹' + tPrice.toFixed(2);
    
    tData.shift(); tData.push(tPrice);
    tradeChart.update();
  }, 1000);
}

function execTrade(type) {
  const amt = 10;
  if (type === 'buy') {
    const cost = tPrice * amt;
    if (tBal >= cost) { tBal -= cost; tHoldings += amt; logTrade('Bought 10 units @ ₹' + tPrice.toFixed(2)); }
  } else {
    if (tHoldings >= amt) { const gain = tPrice * amt; tBal += gain; tHoldings -= amt; logTrade('Sold 10 units @ ₹' + tPrice.toFixed(2)); }
  }
  document.getElementById('tradeBalance').textContent = '₹' + tBal.toLocaleString(undefined, {maximumFractionDigits:0}) + ' + (' + tHoldings + ' units held)';
}
function logTrade(msg) {
  const d = document.getElementById('tradeLog');
  d.innerHTML = '<div>' + new Date().toLocaleTimeString() + ' - ' + msg + '</div>' + d.innerHTML;
}

window.switchSimTab = switchSimTab;
window.runSIPSim = runSIPSim;
window.simBuyStock = simBuyStock;
window.simSellStock = simSellStock;
window.execTrade = execTrade;
</script>
`;
  return appShell(content, lang, 'Market Simulator') + '</body></html>';
}
