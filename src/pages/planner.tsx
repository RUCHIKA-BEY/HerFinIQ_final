import { appShell } from './shell';

export const plannerPage = (lang: string = 'en') => {
  const content = `
<div style="margin-bottom:20px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px">
  <div>
    <h2 style="font-family:'Poppins',sans-serif;font-size:1.5rem;font-weight:700;color:var(--text);margin-bottom:4px">💰 Expense Planner</h2>
    <p style="color:var(--text-muted);font-size:0.88rem">Track daily expenses, visualize spending, and build financial discipline</p>
  </div>
  <button onclick="openAddExpense()" class="btn btn-primary">+ Add Expense</button>
</div>

<!-- SUMMARY CARDS -->
<div class="grid-4" style="margin-bottom:24px">
  <div class="stat-card">
    <div class="stat-icon purple">💸</div>
    <div class="stat-value" id="totalSpent">₹0</div>
    <div class="stat-label">Total This Month</div>
    <div class="stat-change down" id="spentChange">▲ Track to compare</div>
  </div>
  <div class="stat-card">
    <div class="stat-icon green">💚</div>
    <div class="stat-value" id="savedAmount">₹0</div>
    <div class="stat-label">Saved This Month</div>
    <div class="stat-change up" id="savedChange">Remaining from income</div>
  </div>
  <div class="stat-card">
    <div class="stat-icon coral">📅</div>
    <div class="stat-value" id="todaySpent">₹0</div>
    <div class="stat-label">Today's Spend</div>
    <div class="stat-change" id="todayCount" style="color:var(--text-muted)">0 transactions</div>
  </div>
  <div class="stat-card">
    <div class="stat-icon yellow">🎯</div>
    <div class="stat-value" id="topCategory">Food</div>
    <div class="stat-label">Top Category</div>
    <div class="stat-change" style="color:var(--text-muted)" id="topCategoryPct">0% of spend</div>
  </div>
</div>

<!-- ADD EXPENSE MODAL -->
<div id="addExpenseModal" style="display:none;position:fixed;inset:0;z-index:1000;background:rgba(0,0,0,0.5);backdrop-filter:blur(6px);align-items:center;justify-content:center;padding:20px">
  <div style="background:white;border-radius:24px;max-width:480px;width:100%;padding:32px;box-shadow:0 24px 80px rgba(0,0,0,0.2)">
    <div style="font-family:'Poppins',sans-serif;font-size:1.2rem;font-weight:700;margin-bottom:20px;display:flex;justify-content:space-between">
      Add Expense
      <button onclick="closeExpenseModal()" style="background:none;border:none;font-size:1.2rem;cursor:pointer;color:var(--text-muted)">✕</button>
    </div>
    
    <div class="form-group" style="margin-bottom:14px">
      <label style="font-size:0.8rem;font-weight:600;color:var(--text);display:block;margin-bottom:6px">Amount (₹)</label>
      <input type="number" id="expAmount" placeholder="e.g. 250" style="width:100%;padding:12px 14px;border-radius:10px;border:2px solid var(--border);font-size:1.1rem;font-family:'Inter',sans-serif;font-weight:700;color:var(--primary);outline:none" oninput="this.style.borderColor='var(--primary)'">
    </div>
    
    <div class="form-group" style="margin-bottom:14px">
      <label style="font-size:0.8rem;font-weight:600;color:var(--text);display:block;margin-bottom:6px">Category</label>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">
        ${[
      { icon: '🍔', label: 'Food' },
      { icon: '🚗', label: 'Transport' },
      { icon: '🛒', label: 'Grocery' },
      { icon: '⚡', label: 'Electricity' },
      { icon: '💊', label: 'Health' },
      { icon: '🎓', label: 'Education' },
      { icon: '🎬', label: 'Entertain.' },
      { icon: '👗', label: 'Shopping' },
      { icon: '🏠', label: 'Housing' },
      { icon: '📱', label: 'Bills' },
      { icon: '💰', label: 'Savings' },
      { icon: '📦', label: 'Others' },
    ].map(({ icon, label }) => `<div class="profile-option" style="padding:8px 4px" onclick="selectCategory('${label}', this)">
          <span style="font-size:1.4rem;display:block;margin-bottom:3px">${icon}</span>
          <span style="font-size:0.68rem">${label}</span>
        </div>`).join('')}
      </div>
    </div>
    
    <div class="form-group" style="margin-bottom:14px">
      <label style="font-size:0.8rem;font-weight:600;color:var(--text);display:block;margin-bottom:6px">Description (optional)</label>
      <input type="text" id="expDescription" placeholder="e.g. Lunch at office" style="width:100%;padding:10px 14px;border-radius:10px;border:2px solid var(--border);font-size:0.88rem;font-family:'Inter',sans-serif;outline:none">
    </div>
    
    <div class="form-group" style="margin-bottom:20px">
      <label style="font-size:0.8rem;font-weight:600;color:var(--text);display:block;margin-bottom:6px">Date</label>
      <input type="date" id="expDate" style="width:100%;padding:10px 14px;border-radius:10px;border:2px solid var(--border);font-size:0.88rem;font-family:'Inter',sans-serif;outline:none">
    </div>
    
    <button onclick="saveExpense()" style="width:100%;padding:14px;border-radius:12px;background:linear-gradient(135deg,var(--primary),#7C3AED);color:white;font-size:0.95rem;font-weight:700;border:none;cursor:pointer;font-family:'Inter',sans-serif">Save Expense</button>
  </div>
</div>

<!-- CHARTS + TABLE -->
<div class="grid-2" style="margin-bottom:24px">
  <!-- SPENDING BY CATEGORY -->
  <div class="card">
    <div class="card-header">
      <div class="card-title">🍩 Spending by Category</div>
      <div style="display:flex;gap:8px">
        <button onclick="switchView('daily')" id="viewDaily" class="btn btn-primary btn-sm">Daily</button>
        <button onclick="switchView('weekly')" id="viewWeekly" class="btn btn-ghost btn-sm">Weekly</button>
        <button onclick="switchView('monthly')" id="viewMonthly" class="btn btn-ghost btn-sm">Monthly</button>
      </div>
    </div>
    <div class="card-body">
      <canvas id="categoryChart" height="220"></canvas>
    </div>
  </div>
  
  <!-- SPENDING TREND -->
  <div class="card">
    <div class="card-header">
      <div class="card-title">📈 Spending Trend</div>
      <span class="badge badge-primary" id="trendPeriod">Last 7 Days</span>
    </div>
    <div class="card-body">
      <canvas id="trendChart" height="220"></canvas>
    </div>
  </div>
</div>

<!-- EXPENSE LIST -->
<div class="card">
  <div class="card-header">
    <div class="card-title">📋 Transaction History</div>
    <div style="display:flex;gap:8px;align-items:center">
      <select id="filterCat" onchange="renderList()" style="font-size:0.78rem;border:1px solid var(--border);border-radius:8px;padding:6px 10px;background:white;color:var(--text-muted);font-family:'Inter',sans-serif">
        <option value="">All Categories</option>
        <option>Food</option><option>Transport</option><option>Grocery</option><option>Electricity</option>
        <option>Health</option><option>Education</option><option>Entertainment</option><option>Shopping</option>
        <option>Housing</option><option>Bills</option><option>Savings</option><option>Others</option>
      </select>
    </div>
  </div>
  <div style="padding:0 4px">
    <table class="expense-table">
      <thead><tr>
        <th>Date</th><th>Category</th><th>Description</th><th>Amount</th><th>Action</th>
      </tr></thead>
      <tbody id="expenseList">
        <tr><td colspan="5" style="text-align:center;color:var(--text-muted);padding:40px 0;font-size:0.88rem">No expenses yet. Click "Add Expense" to start tracking! 💰</td></tr>
      </tbody>
    </table>
  </div>
</div>

<!-- INCOME SETUP BANNER -->
<div style="margin-top:20px;background:linear-gradient(135deg,rgba(16,185,129,0.08),rgba(16,185,129,0.04));border:1px solid rgba(16,185,129,0.2);border-radius:16px;padding:20px 24px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px">
  <div>
    <div style="font-family:'Poppins',sans-serif;font-weight:700;font-size:1rem;color:var(--text)">Set Your Monthly Income</div>
    <div style="font-size:0.82rem;color:var(--text-muted);margin-top:2px">Track savings automatically and get personalized budgeting advice</div>
  </div>
  <div style="display:flex;gap:10px;align-items:center">
    <div style="display:flex;align-items:center;gap:8px;background:white;border:1px solid var(--border);border-radius:10px;padding:6px 12px">
      <span style="font-size:0.88rem;color:var(--text-muted)">₹</span>
      <input type="number" id="incomeInput" placeholder="e.g. 50000" style="border:none;outline:none;font-size:0.88rem;font-family:'Inter',sans-serif;width:100px" onchange="saveIncome()">
    </div>
    <button onclick="saveIncome()" style="padding:8px 16px;border-radius:10px;background:var(--success);color:white;border:none;cursor:pointer;font-size:0.82rem;font-weight:600;font-family:'Inter',sans-serif">Save</button>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
<script>
if (!localStorage.getItem('herfiniq_token')) window.location.href = '/login';

const _u = JSON.parse(localStorage.getItem('herfiniq_user') || '{}');
const _uId = _u.username || 'demo';

let expenses = JSON.parse(localStorage.getItem('herfiniq_expenses_' + _uId) || '[]');
let selectedCategory = '';
let categoryChart, trendChart;

const catColors = {
  Food:'#FF6B6B', Transport:'#FFD166', Grocery:'#06D6A0', Electricity:'#FFB347',
  Health:'#4ECDC4', Education:'#5B3EFF', 'Entertain.':'#A855F7', Shopping:'#F59E0B',
  Entertainment:'#A855F7', Housing:'#6B7280', Bills:'#14B8A6', Savings:'#10B981', Others:'#9CA3AF'
};

document.getElementById('expDate').value = new Date().toISOString().split('T')[0];

// Load income
const income = parseInt(localStorage.getItem('herfiniq_income_' + _uId) || '0');
if (income > 0) document.getElementById('incomeInput').value = income;

function saveIncome() {
  const v = document.getElementById('incomeInput').value;
  localStorage.setItem('herfiniq_income_' + _uId, v);
  updateSummary();
}

function selectCategory(cat, el) {
  document.querySelectorAll('#addExpenseModal .profile-option').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');
  selectedCategory = cat;
}

function openAddExpense() {
  document.getElementById('addExpenseModal').style.display = 'flex';
  document.getElementById('expAmount').focus();
}
function closeExpenseModal() { document.getElementById('addExpenseModal').style.display = 'none'; }

function saveExpense() {
  const amount = parseFloat(document.getElementById('expAmount').value);
  const date = document.getElementById('expDate').value;
  const desc = document.getElementById('expDescription').value.trim();
  if (!amount || !date || !selectedCategory) { alert('Please fill amount, select category and date'); return; }
  
  const expense = { id: Date.now(), amount, category: selectedCategory, description: desc || selectedCategory, date };
  expenses.unshift(expense);
  localStorage.setItem('herfiniq_expenses_' + _uId, JSON.stringify(expenses));
  
  closeExpenseModal();
  document.getElementById('expAmount').value = '';
  document.getElementById('expDescription').value = '';
  selectedCategory = '';
  document.querySelectorAll('#addExpenseModal .profile-option').forEach(o => o.classList.remove('selected'));
  
  updateAll();
}

function deleteExpense(id) {
  expenses = expenses.filter(e => e.id !== id);
  localStorage.setItem('herfiniq_expenses_' + _uId, JSON.stringify(expenses));
  updateAll();
}

function updateSummary() {
  const now = new Date();
  const monthStr = now.toISOString().slice(0,7);
  const todayStr = now.toISOString().split('T')[0];
  
  const monthlyExpenses = expenses.filter(e => e.date && e.date.startsWith(monthStr));
  const todayExpenses = expenses.filter(e => e.date === todayStr);
  const total = monthlyExpenses.reduce((s,e) => s+e.amount, 0);
  const today = todayExpenses.reduce((s,e) => s+e.amount, 0);
  
  document.getElementById('totalSpent').textContent = '₹' + total.toLocaleString('en-IN');
  document.getElementById('todaySpent').textContent = '₹' + today.toLocaleString('en-IN');
  document.getElementById('todayCount').textContent = todayExpenses.length + ' transactions';
  
  const income = parseInt(localStorage.getItem('herfiniq_income_' + _uId) || '0');
  if (income > 0) {
    const saved = income - total;
    document.getElementById('savedAmount').textContent = '₹' + Math.max(0, saved).toLocaleString('en-IN');
    document.getElementById('savedChange').textContent = Math.round(saved/income*100) + '% of income saved';
  }
  
  // Top category
  const catTotals = {};
  monthlyExpenses.forEach(e => { catTotals[e.category] = (catTotals[e.category] || 0) + e.amount; });
  const topCat = Object.entries(catTotals).sort((a,b) => b[1]-a[1])[0];
  if (topCat) {
    document.getElementById('topCategory').textContent = topCat[0];
    document.getElementById('topCategoryPct').textContent = Math.round(topCat[1]/total*100) + '% of spend';
  }
}

function renderList() {
  const filterCat = document.getElementById('filterCat').value;
  const filtered = filterCat ? expenses.filter(e => e.category === filterCat || e.category === filterCat.replace('.','')) : expenses;
  const tbody = document.getElementById('expenseList');
  if (filtered.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;color:var(--text-muted);padding:40px 0;font-size:0.88rem">No expenses found. Add some to get started! 💰</td></tr>'; return;
  }
  tbody.innerHTML = filtered.map(e => \`
    <tr>
      <td style="white-space:nowrap">\${e.date ? new Date(e.date).toLocaleDateString('en-IN',{day:'numeric',month:'short'}) : '-'}</td>
      <td><span class="category-dot" style="background:\${catColors[e.category]||'#9CA3AF'}"></span>\${e.category}</td>
      <td style="color:var(--text-muted)">\${e.description || ''}</td>
      <td style="font-weight:700;color:var(--text)">₹\${e.amount.toLocaleString('en-IN')}</td>
      <td><button onclick="deleteExpense(\${e.id})" style="background:none;border:none;cursor:pointer;color:var(--accent);font-size:1rem" title="Delete">🗑️</button></td>
    </tr>
  \`).join('');
}

function updateCharts() {
  const now = new Date();
  const monthStr = now.toISOString().slice(0,7);
  const monthlyExpenses = expenses.filter(e => e.date && e.date.startsWith(monthStr));
  
  // Category chart
  const catTotals = {};
  monthlyExpenses.forEach(e => { catTotals[e.category] = (catTotals[e.category]||0)+e.amount; });
  const cats = Object.keys(catTotals);
  const vals = cats.map(c => catTotals[c]);
  const colors = cats.map(c => catColors[c] || '#9CA3AF');
  
  if (categoryChart) categoryChart.destroy();
  categoryChart = new Chart(document.getElementById('categoryChart').getContext('2d'), {
    type: 'doughnut',
    data: { labels: cats.length ? cats : ['No data'], datasets: [{ data: cats.length ? vals : [1], backgroundColor: cats.length ? colors : ['#E5E7EB'], borderWidth: 0, hoverOffset: 8 }] },
    options: { responsive:true, maintainAspectRatio:false, plugins:{ legend:{position:'right',labels:{font:{size:11},boxWidth:12}} } }
  });
  
  // Trend chart (last 7 days)
  const last7 = Array.from({length:7},(_,i) => { const d=new Date(); d.setDate(d.getDate()-6+i); return d.toISOString().split('T')[0]; });
  const dayLabels = last7.map(d => new Date(d).toLocaleDateString('en-IN',{weekday:'short'}));
  const dayTotals = last7.map(d => expenses.filter(e=>e.date===d).reduce((s,e)=>s+e.amount,0));
  
  if (trendChart) trendChart.destroy();
  trendChart = new Chart(document.getElementById('trendChart').getContext('2d'), {
    type: 'bar',
    data: { labels: dayLabels, datasets: [{ label:'Daily Spend (₹)', data:dayTotals, backgroundColor:'rgba(91,62,255,0.15)', borderColor:'#5B3EFF', borderWidth:2, borderRadius:8 }] },
    options: { responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}}, scales:{ y:{ticks:{callback:v=>'₹'+v.toLocaleString()},grid:{color:'rgba(0,0,0,0.04)'}}, x:{grid:{display:false}} } }
  });
}

function updateAll() { updateSummary(); renderList(); updateCharts(); }
function switchView(view) {
  ['daily','weekly','monthly'].forEach(v => {
    const btn = document.getElementById('view'+v.charAt(0).toUpperCase()+v.slice(1));
    btn.classList.toggle('btn-primary', v===view); btn.classList.toggle('btn-ghost', v!==view);
  });
  document.getElementById('trendPeriod').textContent = view==='daily'?'Today':view==='weekly'?'Last 7 Days':'Last 30 Days';
  updateCharts();
}

// Initialize with sample data
if (expenses.length === 0) {
  const today = new Date().toISOString().split('T')[0];
  const yesterday = new Date(Date.now()-86400000).toISOString().split('T')[0];
  const twoDaysAgo = new Date(Date.now()-172800000).toISOString().split('T')[0];
  expenses = [
    {id:1,amount:250,category:'Food',description:'Lunch at office',date:today},
    {id:2,amount:45,category:'Transport',description:'Auto to work',date:today},
    {id:3,amount:1800,category:'Grocery',description:'Vegetables & groceries',date:yesterday},
    {id:4,amount:500,category:'Bills',description:'Internet bill',date:yesterday},
    {id:5,amount:320,category:'Food',description:'Dinner with family',date:twoDaysAgo},
    {id:6,amount:1200,category:'Shopping',description:'Clothes',date:twoDaysAgo},
  ];
  localStorage.setItem('herfiniq_expenses_' + _uId, JSON.stringify(expenses));
}
updateAll();

window.openAddExpense = openAddExpense;
window.closeExpenseModal = closeExpenseModal;
window.saveExpense = saveExpense;
window.deleteExpense = deleteExpense;
window.saveIncome = saveIncome;
window.selectCategory = selectCategory;
window.renderList = renderList;
window.switchView = switchView;
</script>
`;

  return appShell(content, lang, 'Expense Planner') + '</body></html>';
};
