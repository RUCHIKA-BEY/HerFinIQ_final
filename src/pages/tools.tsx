import { appShell } from './shell';
import { useTranslation } from '../i18n';

export const toolsPage = (lang: string = 'en') => {
  const { t } = useTranslation(lang);
  const content = `
<div style="margin-bottom:24px">
  <h2 style="font-family:'Poppins',sans-serif;font-size:1.5rem;font-weight:700;color:var(--text);margin-bottom:4px">🔧 ${t('financial_tools')}</h2>
  <p style="color:var(--text-muted);font-size:0.9rem">Practical calculators to plan, project, and optimize your financial future</p>
</div>

<!-- TOOL CARDS GRID -->
<div class="grid-3" style="margin-bottom:28px" id="toolsGrid">
  ${[
      { icon: '📈', title: 'SIP Calculator', desc: 'Project your SIP returns and see the power of compounding', color: 'rgba(91,62,255,0.1)', id: 'sip' },
      { icon: '🛡️', title: 'Emergency Fund', desc: 'Calculate exactly how much safety net you need', color: 'rgba(16,185,129,0.1)', id: 'emergency' },
      { icon: '🏦', title: 'FD vs Mutual Fund', desc: 'Compare Fixed Deposit vs Equity fund returns side by side', color: 'rgba(245,158,11,0.1)', id: 'fdmf' },
      { icon: '🎯', title: 'Goal Planner', desc: 'Work backwards from your dream goal to monthly savings needed', color: 'rgba(255,107,107,0.1)', id: 'goal' },
      { icon: '💸', title: 'Tax Saver (80C)', desc: 'Estimate your tax savings with ELSS and 80C instruments', color: 'rgba(168,85,247,0.1)', id: 'tax' },
      { icon: '⚖️', title: 'Risk Profiler', desc: 'Quick 4-question assessment to find your investor risk type', color: 'rgba(59,130,246,0.1)', id: 'risk' },
      { icon: '🏠', title: 'EMI Calculator', desc: 'Calculate your monthly loan payments easily', color: 'rgba(239,68,68,0.1)', id: 'emi' },
      { icon: '🏢', title: 'DSCR Calculator', desc: 'Check Debt Service Coverage Ratio for business loans', color: 'rgba(56,189,248,0.1)', id: 'dscr' },
      { icon: '🏛️', title: 'MUDRA Loan Check', desc: 'Check eligibility for PM MUDRA Yojana', color: 'rgba(250,204,21,0.1)', id: 'mudra' },
      { icon: '⏳', title: 'Future Value (FV)', desc: 'Calculate the future value of a lumpsum investment', color: 'rgba(244,114,182,0.1)', id: 'fv' },
    ].map(t => `
  <div class="card" style="padding:24px;cursor:pointer;transition:all 0.25s;border:2px solid transparent" 
       id="card-${t.id}" onclick="openTool('${t.id}')"
       onmouseover="this.style.transform='translateY(-4px)';this.style.borderColor='var(--primary)'"
       onmouseout="this.style.transform='';this.style.borderColor='transparent'">
    <div style="width:56px;height:56px;border-radius:16px;background:${t.color};display:flex;align-items:center;justify-content:center;font-size:1.7rem;margin-bottom:16px">${t.icon}</div>
    <div style="font-family:'Poppins',sans-serif;font-size:1rem;font-weight:700;margin-bottom:8px;color:var(--text)">${t.title}</div>
    <div style="font-size:0.8rem;color:var(--text-muted);line-height:1.55;margin-bottom:16px">${t.desc}</div>
    <div style="display:flex;align-items:center;gap:4px;font-size:0.82rem;font-weight:600;color:var(--primary)">Open Tool <span>→</span></div>
  </div>`).join('')}
</div>

<!-- TOOL PANELS (hidden by default) -->

<!-- SIP CALCULATOR -->
<div id="tool-sip" class="card" style="display:none;margin-bottom:24px">
  <div class="card-header">
    <div class="card-title">📈 SIP Calculator — Power of Compounding</div>
    <button onclick="closeTool()" style="background:none;border:none;cursor:pointer;font-size:1.2rem;color:var(--text-muted);padding:4px 8px">✕</button>
  </div>
  <div class="card-body">
    <div class="grid-2" style="gap:32px">
      <div>
        <div style="margin-bottom:20px">
          <label style="font-size:0.8rem;font-weight:600;color:var(--text-muted);display:block;margin-bottom:8px">Monthly SIP (₹)</label>
          <input type="number" id="sipAmt" value="2000" min="100" max="100000" step="100" oninput="calcSIP()" style="width:100%;padding:12px 14px;border:2px solid var(--border);border-radius:10px;font-size:1.2rem;font-weight:700;color:var(--primary);outline:none;font-family:'Inter',sans-serif">
        </div>
        <div style="margin-bottom:20px">
          <label style="font-size:0.8rem;font-weight:600;color:var(--text-muted);display:block;margin-bottom:8px">Expected Annual Returns: <span id="sipRetLbl" style="color:var(--primary)">12%</span></label>
          <input type="range" id="sipRet" min="6" max="20" value="12" step="0.5" oninput="calcSIP();document.getElementById('sipRetLbl').textContent=this.value+'%'" style="width:100%;accent-color:var(--primary)">
          <div style="display:flex;justify-content:space-between;font-size:0.7rem;color:var(--text-muted);margin-top:4px"><span>6% FD-like</span><span>12% Equity</span><span>20% Aggressive</span></div>
        </div>
        <div>
          <label style="font-size:0.8rem;font-weight:600;color:var(--text-muted);display:block;margin-bottom:8px">Investment Period: <span id="sipYrLbl" style="color:var(--primary)">10 years</span></label>
          <input type="range" id="sipYrs" min="1" max="30" value="10" oninput="calcSIP();document.getElementById('sipYrLbl').textContent=this.value+' years'" style="width:100%;accent-color:var(--primary)">
          <div style="display:flex;justify-content:space-between;font-size:0.7rem;color:var(--text-muted);margin-top:4px"><span>1 yr</span><span>15 yrs</span><span>30 yrs</span></div>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:0">
        <div style="background:linear-gradient(135deg,rgba(91,62,255,0.08),rgba(205,189,255,0.15));border-radius:20px;padding:28px;flex:1">
          <div style="margin-bottom:20px">
            <div style="font-size:0.72rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:6px">💰 Total Invested</div>
            <div style="font-family:'Poppins',sans-serif;font-size:1.8rem;font-weight:700;color:var(--text)" id="sipInv">₹2,40,000</div>
          </div>
          <div style="margin-bottom:20px">
            <div style="font-size:0.72rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:6px">📈 Returns Earned</div>
            <div style="font-family:'Poppins',sans-serif;font-size:1.6rem;font-weight:700;color:var(--success)" id="sipRet2">₹2,23,482</div>
          </div>
          <div style="border-top:2px solid rgba(91,62,255,0.2);padding-top:20px">
            <div style="font-size:0.72rem;font-weight:700;color:var(--primary);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:6px">🎯 Total Corpus</div>
            <div style="font-family:'Poppins',sans-serif;font-size:2.4rem;font-weight:800;color:var(--primary)" id="sipTotal">₹4,63,482</div>
            <div style="font-size:0.78rem;color:var(--text-muted);margin-top:6px" id="sipMultiple">Wealth grows 1.9x</div>
          </div>
        </div>
        <div style="background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.2);border-radius:12px;padding:14px;margin-top:12px">
          <div style="font-size:0.78rem;color:var(--success);font-weight:600" id="sipTip">💡 Starting early is your biggest advantage!</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- EMERGENCY FUND -->
<div id="tool-emergency" class="card" style="display:none;margin-bottom:24px">
  <div class="card-header">
    <div class="card-title">🛡️ Emergency Fund Calculator</div>
    <button onclick="closeTool()" style="background:none;border:none;cursor:pointer;font-size:1.2rem;color:var(--text-muted);padding:4px 8px">✕</button>
  </div>
  <div class="card-body">
    <div class="grid-2" style="gap:32px">
      <div>
        <div style="margin-bottom:16px">
          <label style="font-size:0.8rem;font-weight:600;color:var(--text-muted);display:block;margin-bottom:8px">Monthly Expenses (₹)</label>
          <input type="number" id="emgExp" value="25000" oninput="calcEmergency()" style="width:100%;padding:12px 14px;border:2px solid var(--border);border-radius:10px;font-size:1.1rem;font-weight:700;color:var(--primary);outline:none;font-family:'Inter',sans-serif">
        </div>
        <div style="margin-bottom:16px">
          <label style="font-size:0.8rem;font-weight:600;color:var(--text-muted);display:block;margin-bottom:8px">Number of Dependents</label>
          <select id="emgDep" onchange="calcEmergency()" style="width:100%;padding:12px 14px;border:2px solid var(--border);border-radius:10px;font-size:0.9rem;font-family:'Inter',sans-serif;outline:none">
            <option value="0">0 — Single / No dependents</option>
            <option value="1">1 — Spouse or 1 child</option>
            <option value="2" selected>2 — Spouse + 1 child or 2 children</option>
            <option value="3">3+ — Large family</option>
          </select>
        </div>
        <div style="margin-bottom:16px">
          <label style="font-size:0.8rem;font-weight:600;color:var(--text-muted);display:block;margin-bottom:8px">Job Stability</label>
          <select id="emgStab" onchange="calcEmergency()" style="width:100%;padding:12px 14px;border:2px solid var(--border);border-radius:10px;font-size:0.9rem;font-family:'Inter',sans-serif;outline:none">
            <option value="3">Government Job / Very Stable</option>
            <option value="6" selected>Private Job / Medium Stability</option>
            <option value="9">Freelancer / Entrepreneur / Variable Income</option>
          </select>
        </div>
        <div>
          <label style="font-size:0.8rem;font-weight:600;color:var(--text-muted);display:block;margin-bottom:8px">Current Emergency Savings (₹)</label>
          <input type="number" id="emgCurr" value="10000" oninput="calcEmergency()" style="width:100%;padding:12px 14px;border:2px solid var(--border);border-radius:10px;font-size:1.1rem;font-weight:700;color:var(--success);outline:none;font-family:'Inter',sans-serif">
        </div>
      </div>
      <div>
        <div style="background:linear-gradient(135deg,rgba(16,185,129,0.08),rgba(16,185,129,0.04));border-radius:20px;padding:24px;margin-bottom:16px">
          <div style="font-size:0.72rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:6px">Recommended Fund</div>
          <div style="font-family:'Poppins',sans-serif;font-size:2.2rem;font-weight:800;color:var(--success)" id="emgTarget">₹1,50,000</div>
          <div style="font-size:0.78rem;color:var(--text-muted);margin-top:4px" id="emgMonths">6 months of expenses</div>
        </div>
        <div style="background:var(--bg);border-radius:14px;padding:18px;margin-bottom:14px">
          <div style="display:flex;justify-content:space-between;margin-bottom:8px">
            <span style="font-size:0.82rem;color:var(--text-muted)">Current Savings</span>
            <span style="font-weight:700;color:var(--success)" id="emgCurrLbl">₹10,000</span>
          </div>
          <div style="display:flex;justify-content:space-between;margin-bottom:10px">
            <span style="font-size:0.82rem;color:var(--text-muted)">Still Need</span>
            <span style="font-weight:700;color:var(--accent)" id="emgGap">₹1,40,000</span>
          </div>
          <div style="background:var(--border);border-radius:100px;height:8px">
            <div id="emgBar" style="height:100%;border-radius:100px;background:linear-gradient(90deg,var(--success),#34D399);width:7%;transition:width 0.6s"></div>
          </div>
          <div style="font-size:0.72rem;color:var(--text-muted);margin-top:6px;text-align:right" id="emgPct">7% funded</div>
        </div>
        <div style="background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.2);border-radius:12px;padding:14px">
          <div style="font-size:0.78rem;color:var(--success);font-weight:600">💡 Save <span id="emgMonthly">₹11,667</span>/month to reach your goal in 12 months</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- FD VS MUTUAL FUND -->
<div id="tool-fdmf" class="card" style="display:none;margin-bottom:24px">
  <div class="card-header">
    <div class="card-title">🏦 FD vs Mutual Fund Comparison</div>
    <button onclick="closeTool()" style="background:none;border:none;cursor:pointer;font-size:1.2rem;color:var(--text-muted);padding:4px 8px">✕</button>
  </div>
  <div class="card-body">
    <div class="grid-2" style="gap:28px;margin-bottom:24px">
      <div>
        <div style="margin-bottom:16px">
          <label style="font-size:0.8rem;font-weight:600;color:var(--text-muted);display:block;margin-bottom:8px">Investment Amount (₹)</label>
          <input type="number" id="fdAmt" value="100000" oninput="calcFDMF()" style="width:100%;padding:12px 14px;border:2px solid var(--border);border-radius:10px;font-size:1.1rem;font-weight:700;color:var(--primary);outline:none;font-family:'Inter',sans-serif">
        </div>
        <div style="margin-bottom:16px">
          <label style="font-size:0.8rem;font-weight:600;color:var(--text-muted);display:block;margin-bottom:8px">FD Interest Rate: <span id="fdRateLbl" style="color:var(--warning)">6.5%</span></label>
          <input type="range" id="fdRate" min="4" max="9" value="6.5" step="0.25" oninput="calcFDMF();document.getElementById('fdRateLbl').textContent=this.value+'%'" style="width:100%;accent-color:var(--warning)">
        </div>
        <div style="margin-bottom:16px">
          <label style="font-size:0.8rem;font-weight:600;color:var(--text-muted);display:block;margin-bottom:8px">MF Expected Returns: <span id="mfRateLbl" style="color:var(--primary)">12%</span></label>
          <input type="range" id="mfRate" min="8" max="20" value="12" step="0.5" oninput="calcFDMF();document.getElementById('mfRateLbl').textContent=this.value+'%'" style="width:100%;accent-color:var(--primary)">
        </div>
        <div>
          <label style="font-size:0.8rem;font-weight:600;color:var(--text-muted);display:block;margin-bottom:8px">Period: <span id="fdYrsLbl" style="color:var(--text)">5 years</span></label>
          <input type="range" id="fdYrs" min="1" max="20" value="5" oninput="calcFDMF();document.getElementById('fdYrsLbl').textContent=this.value+' years'" style="width:100%;accent-color:var(--text)">
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:12px">
        <div style="background:rgba(245,158,11,0.1);border:2px solid rgba(245,158,11,0.25);border-radius:16px;padding:20px">
          <div style="font-size:0.72rem;font-weight:700;color:var(--warning);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:8px">🏦 Fixed Deposit</div>
          <div style="font-family:'Poppins',sans-serif;font-size:1.8rem;font-weight:700;color:var(--text)" id="fdResult">₹1,37,279</div>
          <div style="font-size:0.78rem;color:var(--text-muted);margin-top:4px" id="fdGain">Gain: ₹37,279</div>
        </div>
        <div style="background:rgba(91,62,255,0.1);border:2px solid rgba(91,62,255,0.25);border-radius:16px;padding:20px">
          <div style="font-size:0.72rem;font-weight:700;color:var(--primary);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:8px">📈 Mutual Fund (Equity)</div>
          <div style="font-family:'Poppins',sans-serif;font-size:1.8rem;font-weight:700;color:var(--primary)" id="mfResult">₹1,76,234</div>
          <div style="font-size:0.78rem;color:var(--text-muted);margin-top:4px" id="mfGain">Gain: ₹76,234</div>
        </div>
        <div style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.2);border-radius:12px;padding:14px;text-align:center">
          <div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:4px">MF earns you extra</div>
          <div style="font-family:'Poppins',sans-serif;font-size:1.4rem;font-weight:700;color:var(--success)" id="fdmfDiff">₹38,955</div>
          <div style="font-size:0.72rem;color:var(--text-muted)" id="fdmfNote">more over 5 years with MF</div>
        </div>
      </div>
    </div>
    <div style="background:rgba(91,62,255,0.06);border-radius:12px;padding:14px;font-size:0.82rem;color:var(--text);line-height:1.6">
      ⚠️ <strong>Important:</strong> FD returns are guaranteed; MF returns are market-linked and can vary. MF is better for long-term (5+ years) goals. FD is better for short-term and guaranteed return needs.
    </div>
  </div>
</div>

<!-- GOAL PLANNER -->
<div id="tool-goal" class="card" style="display:none;margin-bottom:24px">
  <div class="card-header">
    <div class="card-title">🎯 Goal Planner</div>
    <button onclick="closeTool()" style="background:none;border:none;cursor:pointer;font-size:1.2rem;color:var(--text-muted);padding:4px 8px">✕</button>
  </div>
  <div class="card-body">
    <div class="grid-2" style="gap:32px">
      <div>
        <div style="margin-bottom:16px">
          <label style="font-size:0.8rem;font-weight:600;color:var(--text-muted);display:block;margin-bottom:8px">What is your goal?</label>
          <select id="goalType" onchange="calcGoal()" style="width:100%;padding:12px 14px;border:2px solid var(--border);border-radius:10px;font-size:0.9rem;font-family:'Inter',sans-serif;outline:none">
            <option value="500000">House Down Payment (₹5 Lakhs)</option>
            <option value="1000000">Child Education Fund (₹10 Lakhs)</option>
            <option value="2000000">Retirement Corpus (₹20 Lakhs)</option>
            <option value="200000">International Trip (₹2 Lakhs)</option>
            <option value="custom">Custom Amount</option>
          </select>
        </div>
        <div style="margin-bottom:16px" id="goalCustomDiv" style="display:none">
          <label style="font-size:0.8rem;font-weight:600;color:var(--text-muted);display:block;margin-bottom:8px">Goal Amount (₹)</label>
          <input type="number" id="goalAmt" value="500000" oninput="calcGoal()" style="width:100%;padding:12px 14px;border:2px solid var(--border);border-radius:10px;font-size:1.1rem;font-weight:700;color:var(--accent);outline:none;font-family:'Inter',sans-serif">
        </div>
        <div style="margin-bottom:16px">
          <label style="font-size:0.8rem;font-weight:600;color:var(--text-muted);display:block;margin-bottom:8px">Time to achieve: <span id="goalYrsLbl" style="color:var(--primary)">5 years</span></label>
          <input type="range" id="goalYrs" min="1" max="25" value="5" oninput="calcGoal();document.getElementById('goalYrsLbl').textContent=this.value+' years'" style="width:100%;accent-color:var(--primary)">
        </div>
        <div>
          <label style="font-size:0.8rem;font-weight:600;color:var(--text-muted);display:block;margin-bottom:8px">Expected Returns: <span id="goalRetLbl" style="color:var(--primary)">12%</span></label>
          <input type="range" id="goalRet" min="6" max="18" value="12" oninput="calcGoal();document.getElementById('goalRetLbl').textContent=this.value+'%'" style="width:100%;accent-color:var(--primary)">
        </div>
      </div>
      <div>
        <div style="background:linear-gradient(135deg,rgba(255,107,107,0.1),rgba(255,107,107,0.04));border-radius:20px;padding:24px;margin-bottom:16px">
          <div style="font-size:0.72rem;font-weight:700;color:var(--accent);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:6px">🎯 Your Goal</div>
          <div style="font-family:'Poppins',sans-serif;font-size:2rem;font-weight:800;color:var(--accent)" id="goalTarget">₹5,00,000</div>
          <div style="font-size:0.78rem;color:var(--text-muted);margin-top:4px">Target amount</div>
        </div>
        <div style="background:linear-gradient(135deg,rgba(91,62,255,0.08),rgba(205,189,255,0.12));border-radius:16px;padding:20px;margin-bottom:16px">
          <div style="font-size:0.72rem;font-weight:700;color:var(--primary);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:6px">📅 Monthly SIP Needed</div>
          <div style="font-family:'Poppins',sans-serif;font-size:2.4rem;font-weight:800;color:var(--primary)" id="goalSIP">₹6,131</div>
          <div style="font-size:0.78rem;color:var(--text-muted);margin-top:4px" id="goalNote">to achieve your goal in 5 years at 12% returns</div>
        </div>
        <div style="background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.2);border-radius:12px;padding:14px">
          <div style="font-size:0.78rem;color:var(--success);font-weight:600">💡 <span id="goalTip">Starting now vs 1 year later costs ₹88,000 extra!</span></div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- TAX SAVER -->
<div id="tool-tax" class="card" style="display:none;margin-bottom:24px">
  <div class="card-header">
    <div class="card-title">💸 Tax Saver Calculator (Section 80C)</div>
    <button onclick="closeTool()" style="background:none;border:none;cursor:pointer;font-size:1.2rem;color:var(--text-muted);padding:4px 8px">✕</button>
  </div>
  <div class="card-body">
    <div class="grid-2" style="gap:32px">
      <div>
        <div style="margin-bottom:16px">
          <label style="font-size:0.8rem;font-weight:600;color:var(--text-muted);display:block;margin-bottom:8px">Annual Income (₹)</label>
          <input type="number" id="taxIncome" value="600000" oninput="calcTax()" style="width:100%;padding:12px 14px;border:2px solid var(--border);border-radius:10px;font-size:1.1rem;font-weight:700;color:var(--primary);outline:none;font-family:'Inter',sans-serif">
        </div>
        <div style="margin-bottom:16px">
          <label style="font-size:0.8rem;font-weight:600;color:var(--text-muted);display:block;margin-bottom:8px">Current 80C Investments (₹) <span style="font-size:0.7rem;color:var(--text-light)">(max ₹1.5L)</span></label>
          <input type="number" id="taxInvest" value="0" max="150000" oninput="calcTax()" style="width:100%;padding:12px 14px;border:2px solid var(--border);border-radius:10px;font-size:1.1rem;font-weight:700;color:var(--warning);outline:none;font-family:'Inter',sans-serif">
        </div>
        <div style="background:var(--bg);border-radius:12px;padding:16px;font-size:0.82rem;color:var(--text-muted);line-height:1.7">
          <div style="font-weight:700;color:var(--text);margin-bottom:8px">80C Eligible Instruments:</div>
          <div>📈 ELSS Mutual Funds (Tax + Returns)</div>
          <div>🏠 EPF / PPF contributions</div>
          <div>📜 NSC / 5-year FD</div>
          <div>🏡 Home loan principal</div>
          <div>🎓 Children's tuition fees</div>
          <div>💛 LIC premium</div>
        </div>
      </div>
      <div>
        <div style="background:linear-gradient(135deg,rgba(168,85,247,0.1),rgba(168,85,247,0.04));border-radius:20px;padding:24px;margin-bottom:14px">
          <div style="font-size:0.72rem;font-weight:700;color:#7C3AED;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:6px">💸 Tax Without 80C</div>
          <div style="font-family:'Poppins',sans-serif;font-size:2rem;font-weight:700;color:var(--accent)" id="taxBefore">₹32,500</div>
        </div>
        <div style="background:linear-gradient(135deg,rgba(16,185,129,0.1),rgba(16,185,129,0.04));border-radius:16px;padding:20px;margin-bottom:14px">
          <div style="font-size:0.72rem;font-weight:700;color:var(--success);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:6px">✅ Tax With 80C</div>
          <div style="font-family:'Poppins',sans-serif;font-size:2rem;font-weight:700;color:var(--success)" id="taxAfter">₹32,500</div>
          <div style="font-size:0.78rem;font-weight:700;color:var(--success);margin-top:6px" id="taxSaved">You save: ₹0</div>
        </div>
        <div style="background:rgba(168,85,247,0.06);border:1px solid rgba(168,85,247,0.2);border-radius:12px;padding:14px">
          <div style="font-size:0.8rem;color:#7C3AED;font-weight:600" id="taxTip">💡 Invest ₹1,50,000 in ELSS to maximize your 80C benefit!</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- RISK PROFILER -->
<div id="tool-risk" class="card" style="display:none;margin-bottom:24px">
  <div class="card-header">
    <div class="card-title">⚖️ Quick Risk Profiler</div>
    <button onclick="closeTool()" style="background:none;border:none;cursor:pointer;font-size:1.2rem;color:var(--text-muted);padding:4px 8px">✕</button>
  </div>
  <div class="card-body" id="riskBody">
    <div style="text-align:center;padding:20px 0 0">
      <div id="riskQ" style="font-size:1.05rem;font-weight:600;color:var(--text);margin-bottom:24px;line-height:1.5"></div>
      <div id="riskOpts" style="display:flex;flex-direction:column;gap:10px;max-width:500px;margin:0 auto"></div>
      <div style="margin-top:24px;font-size:0.78rem;color:var(--text-muted)" id="riskProgress"></div>
    </div>
  </div>
</div>

<!-- EMI CALCULATOR -->
<div id="tool-emi" class="card" style="display:none;margin-bottom:24px">
  <div class="card-header">
    <div class="card-title">🏠 EMI Calculator</div>
    <button onclick="closeTool()" style="background:none;border:none;cursor:pointer;font-size:1.2rem;color:var(--text-muted);padding:4px 8px">✕</button>
  </div>
  <div class="card-body grid-2" style="gap:24px">
    <div>
      <label style="font-size:0.8rem;font-weight:600;color:var(--text-muted);display:block;margin-bottom:8px">Loan Amount (₹)</label>
      <input type="number" id="emiAmt" value="500000" oninput="calcEMI()" style="width:100%;padding:10px;border:2px solid var(--border);border-radius:8px;margin-bottom:16px;outline:none">
      <label style="font-size:0.8rem;font-weight:600;color:var(--text-muted);display:block;margin-bottom:8px">Interest Rate (% p.a.)</label>
      <input type="number" id="emiRate" value="8.5" step="0.5" oninput="calcEMI()" style="width:100%;padding:10px;border:2px solid var(--border);border-radius:8px;margin-bottom:16px;outline:none">
      <label style="font-size:0.8rem;font-weight:600;color:var(--text-muted);display:block;margin-bottom:8px">Tenure (Years)</label>
      <input type="number" id="emiYrs" value="5" oninput="calcEMI()" style="width:100%;padding:10px;border:2px solid var(--border);border-radius:8px;margin-bottom:16px;outline:none">
    </div>
    <div style="background:var(--bg);padding:24px;border-radius:16px">
      <div style="font-size:0.8rem;color:var(--text-muted);margin-bottom:4px;text-transform:uppercase;font-weight:700">Monthly EMI</div>
      <div style="font-size:2.2rem;font-family:'Poppins',sans;font-weight:700;color:var(--danger);margin-bottom:16px" id="emiResult">₹10,258</div>
      <div style="display:flex;justify-content:space-between;margin-bottom:8px;font-size:0.9rem"><span style="color:var(--text-muted)">Total Interest</span> <strong id="emiInterest">₹1,15,496</strong></div>
      <div style="display:flex;justify-content:space-between;font-size:0.9rem"><span style="color:var(--text-muted)">Total Payment</span> <strong id="emiTotal">₹6,15,496</strong></div>
    </div>
  </div>
</div>

<!-- DSCR CALCULATOR -->
<div id="tool-dscr" class="card" style="display:none;margin-bottom:24px">
  <div class="card-header">
    <div class="card-title">🏢 DSCR Calculator</div>
    <button onclick="closeTool()" style="background:none;border:none;cursor:pointer;font-size:1.2rem;color:var(--text-muted);padding:4px 8px">✕</button>
  </div>
  <div class="card-body grid-2" style="gap:24px">
    <div>
      <label style="font-size:0.8rem;font-weight:600;color:var(--text-muted);display:block;margin-bottom:8px">Annual Net Operating Income (NOI) (₹)</label>
      <input type="number" id="dscrNOI" value="1200000" oninput="calcDSCR()" style="width:100%;padding:10px;border:2px solid var(--border);border-radius:8px;margin-bottom:16px;outline:none">
      <label style="font-size:0.8rem;font-weight:600;color:var(--text-muted);display:block;margin-bottom:8px">Annual Debt Service (Loans) (₹)</label>
      <input type="number" id="dscrDebt" value="800000" oninput="calcDSCR()" style="width:100%;padding:10px;border:2px solid var(--border);border-radius:8px;margin-bottom:16px;outline:none">
      <p style="font-size:0.8rem;color:var(--text-muted)">DSCR mostly required for business/commercial loans.</p>
    </div>
    <div style="background:var(--bg);padding:24px;border-radius:16px">
      <div style="font-size:0.8rem;color:var(--text-muted);margin-bottom:4px;text-transform:uppercase;font-weight:700">DSCR Ratio</div>
      <div style="font-size:2.4rem;font-family:'Poppins',sans;font-weight:700;color:var(--primary);margin-bottom:8px" id="dscrResult">1.50</div>
      <div style="font-size:0.9rem;font-weight:600" id="dscrStatus">Loading...</div>
    </div>
  </div>
</div>

<!-- MUDRA LOAN -->
<div id="tool-mudra" class="card" style="display:none;margin-bottom:24px">
  <div class="card-header">
    <div class="card-title">🏛️ PM MUDRA Loan Eligibility</div>
    <button onclick="closeTool()" style="background:none;border:none;cursor:pointer;font-size:1.2rem;color:var(--text-muted);padding:4px 8px">✕</button>
  </div>
  <div class="card-body grid-2" style="gap:24px">
    <div>
      <label style="font-size:0.8rem;font-weight:600;color:var(--text-muted);display:block;margin-bottom:8px">Loan Amount Required (₹)</label>
      <input type="number" id="mudraAmt" value="450000" oninput="calcMudra()" style="width:100%;padding:10px;border:2px solid var(--border);border-radius:8px;margin-bottom:16px;outline:none">
      <label style="font-size:0.8rem;font-weight:600;color:var(--text-muted);display:block;margin-bottom:8px">Business Type</label>
      <select style="width:100%;padding:10px;border:2px solid var(--border);border-radius:8px;margin-bottom:16px;outline:none"><option>Manufacturing</option><option>Trading</option><option>Services</option></select>
    </div>
    <div style="background:var(--bg);padding:24px;border-radius:16px">
      <div style="font-size:0.8rem;color:var(--text-muted);margin-bottom:4px;text-transform:uppercase;font-weight:700">MUDRA Category</div>
      <div style="font-size:2rem;font-family:'Poppins',sans;font-weight:700;margin-bottom:8px" id="mudraCat">Kishore</div>
      <div style="font-size:0.85rem;color:var(--text-muted)" id="mudraDesc">Loading...</div>
      <div style="margin-top:16px;font-size:0.85rem"><strong>Note:</strong> Women entrepreneurs get concessional interest rates under MUDRA!</div>
    </div>
  </div>
</div>

<!-- FV CALCULATOR -->
<div id="tool-fv" class="card" style="display:none;margin-bottom:24px">
  <div class="card-header">
    <div class="card-title">⏳ Future Value (Lumpsum)</div>
    <button onclick="closeTool()" style="background:none;border:none;cursor:pointer;font-size:1.2rem;color:var(--text-muted);padding:4px 8px">✕</button>
  </div>
  <div class="card-body grid-2" style="gap:24px">
    <div>
      <label style="font-size:0.8rem;font-weight:600;color:var(--text-muted);display:block;margin-bottom:8px">Present Value (Investment) (₹)</label>
      <input type="number" id="fvAmt" value="100000" oninput="calcFV()" style="width:100%;padding:10px;border:2px solid var(--border);border-radius:8px;margin-bottom:16px;outline:none">
      <label style="font-size:0.8rem;font-weight:600;color:var(--text-muted);display:block;margin-bottom:8px">Expected Annual Return (%)</label>
      <input type="number" id="fvRate" value="10" step="0.5" oninput="calcFV()" style="width:100%;padding:10px;border:2px solid var(--border);border-radius:8px;margin-bottom:16px;outline:none">
      <label style="font-size:0.8rem;font-weight:600;color:var(--text-muted);display:block;margin-bottom:8px">Time Period (Years)</label>
      <input type="number" id="fvYrs" value="10" oninput="calcFV()" style="width:100%;padding:10px;border:2px solid var(--border);border-radius:8px;margin-bottom:16px;outline:none">
    </div>
    <div style="background:linear-gradient(135deg,rgba(168,85,247,0.1),rgba(168,85,247,0.04));padding:24px;border-radius:16px">
      <div style="font-size:0.8rem;color:#7C3AED;margin-bottom:4px;text-transform:uppercase;font-weight:700">Future Value</div>
      <div style="font-size:2.4rem;font-family:'Poppins',sans;font-weight:700;color:var(--accent);margin-bottom:8px" id="fvResult">₹2,59,374</div>
      <div style="font-size:0.9rem;font-weight:600;color:var(--text-muted)" id="fvGain">Wealth created: ₹1,59,374</div>
    </div>
  </div>
</div>

<script>
if (!localStorage.getItem('herfiniq_token')) window.location.href = '/login';

// ---- TOOL OPEN/CLOSE ----
function openTool(id) {
  document.querySelectorAll('[id^="tool-"]').forEach(el => el.style.display = 'none');
  const el = document.getElementById('tool-' + id);
  if (el) {
    el.style.display = 'block';
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Init calculators
    if (id === 'sip') calcSIP();
    if (id === 'emergency') calcEmergency();
    if (id === 'fdmf') calcFDMF();
    if (id === 'goal') calcGoal();
    if (id === 'tax') calcTax();
    if (id === 'risk') initRisk();
    if (id === 'emi') calcEMI();
    if (id === 'dscr') calcDSCR();
    if (id === 'mudra') initMudra();
    if (id === 'fv') calcFV();
  }
}
function closeTool() {
  document.querySelectorAll('[id^="tool-"]').forEach(el => el.style.display = 'none');
  document.getElementById('toolsGrid').scrollIntoView({ behavior: 'smooth' });
}
const fmt = v => '₹' + Math.round(v).toLocaleString('en-IN');

// ---- SIP CALCULATOR ----
function calcSIP() {
  const P = parseFloat(document.getElementById('sipAmt').value) || 0;
  const r = parseFloat(document.getElementById('sipRet').value) / 100 / 12;
  const n = parseInt(document.getElementById('sipYrs').value) * 12;
  const total = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
  const invested = P * n;
  const returns = total - invested;
  document.getElementById('sipInv').textContent = fmt(invested);
  document.getElementById('sipRet2').textContent = fmt(returns);
  document.getElementById('sipTotal').textContent = fmt(total);
  document.getElementById('sipMultiple').textContent = 'Wealth grows ' + (total / invested).toFixed(1) + 'x';
  const yrs = parseInt(document.getElementById('sipYrs').value);
  const tip = yrs >= 15 ? '🚀 Long-term power! 15+ years of SIP is your wealth supercharger!' : 
              yrs >= 10 ? '💡 Great horizon! 10 years of consistent SIP creates real wealth.' :
              '⏰ The longer you invest, the more compounding works for you!';
  document.getElementById('sipTip').textContent = tip;
}

// ---- EMERGENCY FUND ----
function calcEmergency() {
  const exp = parseFloat(document.getElementById('emgExp').value) || 0;
  const dep = parseInt(document.getElementById('emgDep').value) || 0;
  const months = parseInt(document.getElementById('emgStab').value) || 6;
  const curr = parseFloat(document.getElementById('emgCurr').value) || 0;
  const extraMonths = dep >= 3 ? 2 : dep >= 1 ? 1 : 0;
  const totalMonths = months + extraMonths;
  const target = exp * totalMonths;
  const gap = Math.max(0, target - curr);
  const pct = Math.min(100, (curr / target) * 100);
  document.getElementById('emgTarget').textContent = fmt(target);
  document.getElementById('emgMonths').textContent = totalMonths + ' months of expenses';
  document.getElementById('emgCurrLbl').textContent = fmt(curr);
  document.getElementById('emgGap').textContent = fmt(gap);
  document.getElementById('emgBar').style.width = pct.toFixed(1) + '%';
  document.getElementById('emgPct').textContent = pct.toFixed(0) + '% funded';
  document.getElementById('emgMonthly').textContent = fmt(gap / 12);
}

// ---- FD vs MF ----
function calcFDMF() {
  const P = parseFloat(document.getElementById('fdAmt').value) || 0;
  const fdR = parseFloat(document.getElementById('fdRate').value) / 100;
  const mfR = parseFloat(document.getElementById('mfRate').value) / 100;
  const yrs = parseInt(document.getElementById('fdYrs').value);
  const fdTotal = P * Math.pow(1 + fdR, yrs);
  const mfTotal = P * Math.pow(1 + mfR, yrs);
  const diff = mfTotal - fdTotal;
  document.getElementById('fdResult').textContent = fmt(fdTotal);
  document.getElementById('fdGain').textContent = 'Gain: ' + fmt(fdTotal - P);
  document.getElementById('mfResult').textContent = fmt(mfTotal);
  document.getElementById('mfGain').textContent = 'Gain: ' + fmt(mfTotal - P);
  document.getElementById('fdmfDiff').textContent = fmt(diff);
  document.getElementById('fdmfNote').textContent = 'more over ' + yrs + ' years with MF';
}

// ---- GOAL PLANNER ----
function calcGoal() {
  const sel = document.getElementById('goalType').value;
  const goalDiv = document.getElementById('goalCustomDiv');
  let target;
  if (sel === 'custom') {
    goalDiv.style.display = 'block';
    target = parseFloat(document.getElementById('goalAmt').value) || 0;
  } else {
    goalDiv.style.display = 'none';
    target = parseFloat(sel);
    document.getElementById('goalAmt').value = target;
  }
  const r = parseFloat(document.getElementById('goalRet').value) / 100 / 12;
  const n = parseInt(document.getElementById('goalYrs').value) * 12;
  const sip = target * r / ((Math.pow(1 + r, n) - 1) * (1 + r));
  document.getElementById('goalTarget').textContent = fmt(target);
  document.getElementById('goalSIP').textContent = fmt(sip);
  document.getElementById('goalNote').textContent = 'to achieve ₹' + (target / 100000).toFixed(1) + 'L in ' + (n / 12) + ' years at ' + document.getElementById('goalRet').value + '% returns';
  const sipExtra = target * r / ((Math.pow(1 + r, n - 12) - 1) * (1 + r));
  document.getElementById('goalTip').textContent = '💡 Starting now vs 1 year later needs ₹' + Math.round(sipExtra - sip).toLocaleString('en-IN') + ' extra/month!';
}

// ---- TAX SAVER ----
function calcTax() {
  const income = parseFloat(document.getElementById('taxIncome').value) || 0;
  const invested = Math.min(150000, parseFloat(document.getElementById('taxInvest').value) || 0);
  function calcTaxAmount(taxableIncome) {
    let tax = 0;
    if (taxableIncome <= 250000) tax = 0;
    else if (taxableIncome <= 500000) tax = (taxableIncome - 250000) * 0.05;
    else if (taxableIncome <= 1000000) tax = 12500 + (taxableIncome - 500000) * 0.20;
    else tax = 112500 + (taxableIncome - 1000000) * 0.30;
    return tax * 1.04; // 4% cess
  }
  const taxBefore = calcTaxAmount(income - 50000); // standard deduction
  const taxAfter = calcTaxAmount(income - 50000 - invested);
  const saved = taxBefore - taxAfter;
  document.getElementById('taxBefore').textContent = fmt(taxBefore);
  document.getElementById('taxAfter').textContent = fmt(taxAfter);
  document.getElementById('taxSaved').textContent = 'You save: ' + fmt(saved);
  const remaining = 150000 - invested;
  document.getElementById('taxTip').textContent = remaining > 0 
    ? '💡 Invest ₹' + remaining.toLocaleString('en-IN') + ' more in ELSS to maximize your 80C benefit!'
    : '✅ Great! You have maximized your 80C limit of ₹1,50,000!';
}

// ---- RISK PROFILER ----
const riskQs = [
  { q: 'If your ₹10,000 investment drops to ₹8,000, you would:', opts: ['Sell immediately 😱', 'Feel anxious but hold 😰', 'Wait patiently 😐', 'Invest more! 🚀'], scores: [0,1,2,3] },
  { q: 'How long can you stay invested without needing the money?', opts: ['Less than 1 year', '1–3 years', '3–7 years', '7+ years'], scores: [0,1,2,3] },
  { q: 'What best describes your investment goal?', opts: ['Protect my money', 'Steady small returns', 'Moderate growth', 'Maximum growth'], scores: [0,1,2,3] },
  { q: 'How do you feel about investing in stock market?', opts: ['Very scared – avoid it', 'Nervous but willing', 'Comfortable with basics', 'Excited – I follow it!'], scores: [0,1,2,3] },
];
let riskAnswers = [], riskCurrent = 0;

function initRisk() {
  riskAnswers = []; riskCurrent = 0; showRiskQ();
}

function showRiskQ() {
  if (riskCurrent >= riskQs.length) { showRiskResult(); return; }
  const q = riskQs[riskCurrent];
  document.getElementById('riskQ').textContent = q.q;
  document.getElementById('riskProgress').textContent = 'Question ' + (riskCurrent + 1) + ' of ' + riskQs.length;
  document.getElementById('riskOpts').innerHTML = q.opts.map((opt, i) => 
    '<button onclick="pickRisk(' + i + ')" style="padding:14px 20px;border-radius:12px;border:2px solid var(--border);background:white;font-size:0.9rem;font-family:\\'Inter\\',sans-serif;cursor:pointer;text-align:left;transition:all 0.2s" onmouseover="this.style.borderColor=\\'var(--primary)\\';this.style.background=\\'rgba(91,62,255,0.05)\\'" onmouseout="this.style.borderColor=\\'var(--border)\\';this.style.background=\\'white\\'">' + opt + '</button>'
  ).join('');
}

function pickRisk(i) {
  riskAnswers.push(riskQs[riskCurrent].scores[i]);
  riskCurrent++;
  showRiskQ();
}

function showRiskResult() {
  const total = riskAnswers.reduce((a, b) => a + b, 0);
  const max = riskQs.length * 3;
  const pct = total / max;
  const profile = pct < 0.33 ? 'Conservative' : pct < 0.66 ? 'Moderate' : 'Aggressive';
  const colors = { Conservative: '#10B981', Moderate: '#F59E0B', Aggressive: '#EF4444' };
  const advice = {
    Conservative: { emoji: '🛡️', text: 'You prefer safety. Start with Fixed Deposits, Liquid Funds, and PPF. Explore Debt Mutual Funds as a next step.', funds: ['Liquid Funds', 'Short-term Debt Funds', 'PPF', 'FD'] },
    Moderate: { emoji: '⚖️', text: 'You balance growth with safety. Balanced/Hybrid Mutual Funds and SIP in Large-Cap funds suit you well.', funds: ['Balanced Advantage Funds', 'Large-Cap Equity SIP', 'ELSS', 'Corporate Bond Funds'] },
    Aggressive: { emoji: '🚀', text: 'You are comfortable with volatility for high returns. Mid & Small Cap funds and direct equity investing suit you!', funds: ['Mid-Cap Funds', 'Small-Cap Funds', 'Direct Equity', 'International Funds'] },
  };
  const a = advice[profile];
  document.getElementById('riskBody').innerHTML = \`
    <div style="text-align:center;padding:20px 0">
      <div style="font-size:3rem;margin-bottom:12px">\${a.emoji}</div>
      <div style="font-family:'Poppins',sans-serif;font-size:1.8rem;font-weight:800;color:\${colors[profile]};margin-bottom:6px">\${profile} Investor</div>
      <div style="font-size:0.88rem;color:var(--text-muted);max-width:400px;margin:0 auto 24px;line-height:1.6">\${a.text}</div>
      <div style="background:var(--bg);border-radius:14px;padding:18px;max-width:400px;margin:0 auto 20px;text-align:left">
        <div style="font-weight:700;font-size:0.86rem;margin-bottom:10px">Recommended for you:</div>
        \${a.funds.map(f => '<div style="padding:6px 0;border-bottom:1px solid var(--border);font-size:0.84rem;color:var(--text)">✅ ' + f + '</div>').join('')}
      </div>
      <button onclick="initRisk()" style="padding:10px 24px;border-radius:10px;border:2px solid var(--primary);background:transparent;color:var(--primary);font-weight:600;cursor:pointer;font-family:\\'Inter\\',sans-serif">Retake Quiz</button>
    </div>
  \`;
}

// ---- EMI CALCULATOR ----
function calcEMI() {
  const P = parseFloat(document.getElementById('emiAmt').value) || 0;
  const R = (parseFloat(document.getElementById('emiRate').value) || 0) / 12 / 100;
  const N = (parseInt(document.getElementById('emiYrs').value) || 0) * 12;
  let emi = 0, total = 0, interest = 0;
  if (P && R && N) {
    emi = P * R * Math.pow(1+R, N) / (Math.pow(1+R, N) - 1);
    total = emi * N;
    interest = total - P;
  }
  document.getElementById('emiResult').textContent = fmt(emi);
  document.getElementById('emiInterest').textContent = fmt(interest);
  document.getElementById('emiTotal').textContent = fmt(total);
}

// ---- DSCR CALCULATOR ----
function calcDSCR() {
  const noi = parseFloat(document.getElementById('dscrNOI').value) || 0;
  const debt = parseFloat(document.getElementById('dscrDebt').value) || 0;
  const dscr = debt > 0 ? (noi / debt).toFixed(2) : 0;
  document.getElementById('dscrResult').textContent = dscr;
  const el = document.getElementById('dscrStatus');
  if (dscr >= 1.25) { el.textContent = 'Excellent (High approval chance)'; el.style.color='var(--success)'; }
  else if (dscr >= 1.0) { el.textContent = 'Acceptable (Tight cashflow)'; el.style.color='var(--warning)'; }
  else { el.textContent = 'Poor (High rejection chance)'; el.style.color='var(--danger)'; }
}

// ---- MUDRA LOAN ----
function initMudra() {
  calcMudra();
}
function calcMudra() {
  const amt = parseFloat(document.getElementById('mudraAmt').value) || 0;
  let cat = '', color = '', desc = '';
  if (amt <= 50000) { cat = 'Shishu'; color = 'var(--success)'; desc = 'For starting new businesses. Very high approval rate for women.'; }
  else if (amt <= 500000) { cat = 'Kishore'; color = 'var(--warning)'; desc = 'For expanding existing businesses. Needs basic business proof.'; }
  else if (amt <= 1000000) { cat = 'Tarun'; color = 'var(--primary)'; desc = 'For fully established businesses looking for major expansion.'; }
  else { cat = 'Ineligible'; color = 'var(--danger)'; desc = 'MUDRA loans are capped at ₹10 Lakhs. Look into Stand-up India scheme instead.'; }
  
  document.getElementById('mudraCat').textContent = cat;
  document.getElementById('mudraCat').style.color = color;
  document.getElementById('mudraDesc').textContent = desc;
}

// ---- FV CALCULATOR ----
function calcFV() {
  const P = parseFloat(document.getElementById('fvAmt').value) || 0;
  const r = parseFloat(document.getElementById('fvRate').value) / 100;
  const n = parseInt(document.getElementById('fvYrs').value) || 0;
  const fv = P * Math.pow(1 + r, n);
  document.getElementById('fvResult').textContent = fmt(fv);
  document.getElementById('fvGain').textContent = 'Wealth created: ' + fmt(fv - P);
}
</script>
`;
  return appShell(content, lang, 'Financial Tools') + '</body></html>';
};
