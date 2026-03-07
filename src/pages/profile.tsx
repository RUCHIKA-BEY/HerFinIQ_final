import { appShell } from './shell';
import { useTranslation } from '../i18n';

export const profilePage = (lang: string = 'en') => {
  const { t } = useTranslation(lang);
  const content = `
<div style="margin-bottom:24px">
  <h2 style="font-family:'Poppins',sans-serif;font-size:1.5rem;font-weight:700;color:var(--text);margin-bottom:4px">👤 ${t('profile')}</h2>
  <p style="color:var(--text-muted);font-size:0.9rem">Manage your account, financial goals, and preferences</p>
</div>

<div class="grid-2" style="margin-bottom:24px">
  <!-- PROFILE CARD -->
  <div class="card card-body">
    <div style="text-align:center;padding-bottom:20px;border-bottom:1px solid var(--border);margin-bottom:20px">
      <div style="width:80px;height:80px;border-radius:50%;background:linear-gradient(135deg,var(--primary),var(--accent));display:flex;align-items:center;justify-content:center;color:white;font-family:'Poppins',sans-serif;font-size:2rem;font-weight:700;margin:0 auto 12px" id="profileAvatar">P</div>
      <div style="font-family:'Poppins',sans-serif;font-size:1.2rem;font-weight:700" id="profileName">Priya Sharma</div>
      <span class="badge badge-primary" id="profileBadge">Working Professional</span>
      <div style="font-size:0.8rem;color:var(--text-muted);margin-top:6px" id="profileMobile">📱 +91 98765 43210</div>
    </div>
    
    <div style="display:flex;flex-direction:column;gap:14px">
      <div class="form-group" style="margin:0">
        <label style="font-size:0.78rem;font-weight:600;color:var(--text-muted);display:block;margin-bottom:4px">Full Name</label>
        <input type="text" id="editName" class="form-input" style="font-size:0.9rem">
      </div>
      <div class="form-group" style="margin:0">
        <label style="font-size:0.78rem;font-weight:600;color:var(--text-muted);display:block;margin-bottom:4px">Mobile</label>
        <input type="tel" id="editMobile" class="form-input" style="font-size:0.9rem" disabled style="opacity:0.7">
      </div>
      <div class="form-group" style="margin:0">
        <label style="font-size:0.78rem;font-weight:600;color:var(--text-muted);display:block;margin-bottom:4px">Monthly Income Range</label>
        <select id="editIncome" class="form-input" style="font-size:0.9rem">
          <option>Below ₹25,000</option>
          <option>₹25,000 – ₹50,000</option>
          <option selected>₹50,000 – ₹1 Lakh</option>
          <option>₹1 Lakh – ₹2 Lakhs</option>
          <option>Above ₹2 Lakhs</option>
        </select>
      </div>
      <div class="form-group" style="margin:0">
        <label style="font-size:0.78rem;font-weight:600;color:var(--text-muted);display:block;margin-bottom:4px">Age Group</label>
        <select id="editAge" class="form-input" style="font-size:0.9rem">
          <option>18-25 years</option>
          <option selected>26-35 years</option>
          <option>36-45 years</option>
          <option>46+ years</option>
        </select>
      </div>
      <button onclick="saveProfile()" class="btn btn-primary" style="margin-top:6px">Save Changes</button>
    </div>
  </div>
  
  <!-- SCORES + GOALS -->
  <div style="display:flex;flex-direction:column;gap:16px">
    <div class="card card-body">
      <div class="card-title" style="margin-bottom:16px">📊 Financial Scores</div>
      <div style="display:flex;flex-direction:column;gap:12px">
        <div>
          <div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:6px">
            <span style="font-weight:600">Confidence Score</span>
            <span style="font-weight:700;color:var(--primary)" id="confScoreProfile">72/100</span>
          </div>
          <div class="progress-bar-wrap"><div class="progress-bar" id="confBarProfile" style="width:0%"></div></div>
        </div>
        <div>
          <div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:6px">
            <span style="font-weight:600">Literacy Score</span>
            <span style="font-weight:700;color:var(--success)" id="litScoreProfile">62/100</span>
          </div>
          <div class="progress-bar-wrap"><div class="progress-bar green" id="litBarProfile" style="width:0%"></div></div>
        </div>
        <div style="display:flex;justify-content:space-between;font-size:0.88rem;padding:10px 0;border-top:1px solid var(--border)">
          <span style="color:var(--text-muted)">Risk Profile</span>
          <span class="badge badge-warning" id="riskProfile">Moderate</span>
        </div>
        <div style="display:flex;justify-content:space-between;font-size:0.88rem">
          <span style="color:var(--text-muted)">Level</span>
          <span style="font-weight:700;color:var(--primary)" id="levelProfile">4 – Investor</span>
        </div>
        <a href="/assessment?lang=${lang}" class="btn btn-outline" style="margin-top:6px;justify-content:center">Retake Assessment →</a>
      </div>
    </div>
    
    <div class="card card-body">
      <div class="card-title" style="margin-bottom:14px">🎯 Financial Goals</div>
      <div id="goalsList" style="display:flex;flex-direction:column;gap:8px">
        <div style="padding:10px 14px;border-radius:10px;background:var(--bg);border:1px solid var(--border);display:flex;align-items:center;gap:10px">
          <span>🏠</span>
          <div style="flex:1">
            <div style="font-size:0.82rem;font-weight:600">Build Emergency Fund</div>
            <div style="font-size:0.72rem;color:var(--text-muted)">₹1.5 Lakhs target</div>
          </div>
          <span class="badge badge-success">Active</span>
        </div>
        <div style="padding:10px 14px;border-radius:10px;background:var(--bg);border:1px solid var(--border);display:flex;align-items:center;gap:10px">
          <span>📈</span>
          <div style="flex:1">
            <div style="font-size:0.82rem;font-weight:600">Start SIP Investment</div>
            <div style="font-size:0.72rem;color:var(--text-muted)">₹2,000/month</div>
          </div>
          <span class="badge badge-primary">Planning</span>
        </div>
      </div>
      <button onclick="addGoal()" style="width:100%;margin-top:10px;padding:8px;border-radius:8px;border:2px dashed var(--border);background:transparent;color:var(--text-muted);font-size:0.8rem;cursor:pointer;font-family:'Inter',sans-serif">+ Add Financial Goal</button>
    </div>
  </div>
</div>

<!-- FINANCIAL SETUP -->
<div class="card card-body" style="margin-bottom:24px">
  <div class="card-title" style="margin-bottom:16px">🏦 Financial Details</div>
  <div class="grid-3">
    <div>
      <label style="font-size:0.78rem;font-weight:600;color:var(--text-muted);display:block;margin-bottom:6px">Savings Habit</label>
      <select class="form-input" style="font-size:0.88rem">
        <option>I save irregularly</option>
        <option selected>I save a fixed amount monthly</option>
        <option>I save most of my income</option>
        <option>I don't save currently</option>
      </select>
    </div>
    <div>
      <label style="font-size:0.78rem;font-weight:600;color:var(--text-muted);display:block;margin-bottom:6px">Current Investments</label>
      <select class="form-input" style="font-size:0.88rem">
        <option>None yet</option>
        <option>Fixed Deposits only</option>
        <option selected>SIP in Mutual Funds</option>
        <option>Stocks & Mutual Funds</option>
      </select>
    </div>
    <div>
      <label style="font-size:0.78rem;font-weight:600;color:var(--text-muted);display:block;margin-bottom:6px">Investment Horizon</label>
      <select class="form-input" style="font-size:0.88rem">
        <option>Short-term (< 2 years)</option>
        <option selected>Medium-term (3-7 years)</option>
        <option>Long-term (7+ years)</option>
      </select>
    </div>
  </div>
  <button class="btn btn-primary" style="margin-top:16px">Save Financial Details</button>
</div>

<!-- ACCOUNT SETTINGS -->
<div class="card card-body">
  <div class="card-title" style="margin-bottom:16px">⚙️ Account Settings</div>
  <div style="display:flex;flex-direction:column;gap:12px">
    <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 0;border-bottom:1px solid var(--border)">
      <div>
        <div style="font-size:0.88rem;font-weight:600">Daily Learning Reminders</div>
        <div style="font-size:0.75rem;color:var(--text-muted)">Get notified to maintain your streak</div>
      </div>
      <label style="position:relative;width:44px;height:24px;cursor:pointer">
        <input type="checkbox" checked style="opacity:0;width:0;height:0" id="reminderToggle">
        <span style="position:absolute;inset:0;border-radius:100px;background:var(--primary);transition:0.3s" id="reminderSlider"></span>
        <span style="position:absolute;left:3px;top:3px;width:18px;height:18px;border-radius:50%;background:white;transition:0.3s" id="reminderKnob"></span>
      </label>
    </div>
    <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 0;border-bottom:1px solid var(--border)">
      <div>
        <div style="font-size:0.88rem;font-weight:600">Weekly Progress Reports</div>
        <div style="font-size:0.75rem;color:var(--text-muted)">Summary of your weekly learning</div>
      </div>
      <label style="position:relative;width:44px;height:24px;cursor:pointer">
        <input type="checkbox" checked style="opacity:0;width:0;height:0">
        <span style="position:absolute;inset:0;border-radius:100px;background:var(--primary)"></span>
        <span style="position:absolute;left:3px;top:3px;width:18px;height:18px;border-radius:50%;background:white;transition:0.3s"></span>
      </label>
    </div>
    <div style="padding:12px 0">
      <div style="font-size:0.88rem;font-weight:600;margin-bottom:4px">Change Password</div>
      <div style="display:flex;gap:10px;flex-wrap:wrap">
        <input type="password" placeholder="New password" class="form-input" style="flex:1;min-width:150px;font-size:0.85rem">
        <button class="btn btn-outline btn-sm">Update</button>
      </div>
    </div>
    <div style="padding:12px 0;border-top:1px solid var(--border)">
      <button onclick="if(confirm('Delete your account? This cannot be undone.'))logout()" style="background:rgba(239,68,68,0.08);border:1px solid rgba(239,68,68,0.2);color:#EF4444;padding:8px 16px;border-radius:8px;cursor:pointer;font-size:0.82rem;font-family:'Inter',sans-serif">🗑️ Delete Account</button>
    </div>
  </div>
</div>

<script>
if (!localStorage.getItem('herfiniq_token')) window.location.href = '/login';
const user = JSON.parse(localStorage.getItem('herfiniq_user') || '{}');

// Load data
document.getElementById('profileAvatar').textContent = (user.name || 'P')[0];
document.getElementById('profileName').textContent = user.name || 'User';
document.getElementById('profileBadge').textContent = user.profileType || 'Member';
document.getElementById('profileMobile').textContent = '📱 +91 ' + (user.mobile || '').replace(/(\d{5})(\d{5})/,'$1 $2');
document.getElementById('editName').value = user.name || '';
document.getElementById('editMobile').value = user.mobile || '';
document.getElementById('confScoreProfile').textContent = (user.confidenceScore||72) + '/100';
document.getElementById('litScoreProfile').textContent = (user.literacyScore||62) + '/100';
document.getElementById('riskProfile').textContent = user.riskProfile || 'Moderate';
document.getElementById('levelProfile').textContent = (user.level||4) + ' – Investor';
setTimeout(() => {
  document.getElementById('confBarProfile').style.width = (user.confidenceScore||72) + '%';
  document.getElementById('litBarProfile').style.width = (user.literacyScore||62) + '%';
}, 300);

function saveProfile() {
  const name = document.getElementById('editName').value.trim();
  if (!name) { alert('Please enter a name'); return; }
  user.name = name;
  localStorage.setItem('herfiniq_user', JSON.stringify(user));
  // Update users list
  const users = JSON.parse(localStorage.getItem('herfiniq_users') || '[]');
  const idx = users.findIndex(u => u.username === user.username);
  if (idx !== -1) { users[idx] = user; localStorage.setItem('herfiniq_users', JSON.stringify(users)); }
  alert('✅ Profile saved!');
  location.reload();
}

function addGoal() {
  const goal = prompt('Enter your financial goal (e.g. Buy a car, Save for education):');
  if (!goal) return;
  const goalsList = document.getElementById('goalsList');
  const div = document.createElement('div');
  div.style.cssText = 'padding:10px 14px;border-radius:10px;background:var(--bg);border:1px solid var(--border);display:flex;align-items:center;gap:10px';
  div.innerHTML = \`<span>🎯</span><div style="flex:1"><div style="font-size:0.82rem;font-weight:600">\${goal}</div><div style="font-size:0.72rem;color:var(--text-muted)">New goal</div></div><span class="badge badge-primary">New</span>\`;
  goalsList.appendChild(div);
}
function logout() { localStorage.removeItem('herfiniq_token'); window.location.href = '/login'; }
</script>
`;

  return appShell(content, lang, 'My Profile') + '</body></html>';
};
