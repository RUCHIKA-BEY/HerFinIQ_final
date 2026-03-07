import { appShell } from './shell';
import { schemes } from '../data/schemes';

export const schemesPage = (lang: string = 'en') => {
  const categoryColors: Record<string, string> = {
    'Central Government': 'badge-primary',
    'State Government': 'badge-success',
    'Sector-Specific Grant': 'badge-accent',
  };

  const schemesHTML = schemes.map(s => `
    <div class="scheme-card" data-category="${s.category}" data-sector="${s.sector.join(',')}" id="scheme-${s.id}">
      <div class="scheme-ministry">${s.ministry}</div>
      <div class="scheme-name">${s.name}</div>
      <div class="scheme-amount">${s.fundingAmount}</div>
      <div class="scheme-desc">${s.description}</div>
      <div style="margin-bottom:10px">
        <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted)">Eligibility: </span>
        <span style="font-size:0.78rem;color:var(--text)">${s.eligibility}</span>
      </div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px">
        <span class="badge ${categoryColors[s.category] || 'badge-primary'}">${s.category}</span>
        ${s.stage.map(st => `<span class="badge" style="background:rgba(0,0,0,0.05);color:var(--text-muted);font-size:0.65rem">${st}</span>`).join('')}
      </div>
      <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
        <a href="${s.applicationLink}" target="_blank" class="scheme-link">Apply Now →</a>
        <button onclick="viewSchemeDetails('${s.id}')" style="padding:6px 12px;border-radius:8px;border:1px solid var(--border);background:transparent;font-size:0.78rem;cursor:pointer;font-family:'Inter',sans-serif;color:var(--text-muted)">View Details</button>
      </div>
    </div>
  `).join('');

  const schemeDetailsModal = `
    <div id="schemeModal" style="display:none;position:fixed;inset:0;z-index:1000;background:rgba(0,0,0,0.5);backdrop-filter:blur(6px);align-items:center;justify-content:center;padding:20px">
      <div style="background:white;border-radius:24px;max-width:600px;width:100%;max-height:90vh;overflow-y:auto;box-shadow:0 24px 80px rgba(0,0,0,0.2)">
        <div style="padding:24px 28px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;background:white;z-index:1">
          <div style="font-family:'Poppins',sans-serif;font-size:1.1rem;font-weight:700" id="modalSchemeTitle">Scheme Details</div>
          <button onclick="document.getElementById('schemeModal').style.display='none'" style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:6px 12px;cursor:pointer">✕ Close</button>
        </div>
        <div id="modalSchemeContent" style="padding:28px"></div>
      </div>
    </div>
  `;

  const content = `
<div style="margin-bottom:24px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px">
  <div>
    <h2 style="font-family:'Poppins',sans-serif;font-size:1.5rem;font-weight:700;color:var(--text);margin-bottom:4px">🏛️ Government Schemes</h2>
    <p style="color:var(--text-muted);font-size:0.9rem">Discover ${schemes.length} government schemes, grants, and loans for women entrepreneurs & investors</p>
  </div>
</div>

<!-- FILTER BAR -->
<div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:20px;align-items:center">
  <div style="display:flex;align-items:center;gap:8px;background:white;border:1px solid var(--border);border-radius:10px;padding:8px 14px;flex:1;min-width:200px">
    <span>🔍</span>
    <input type="text" placeholder="Search schemes..." id="schemeSearch" oninput="filterSchemes()" style="border:none;outline:none;font-size:0.85rem;font-family:'Inter',sans-serif;width:100%;background:transparent">
  </div>
  <select onchange="filterSchemes()" id="categoryFilter" style="padding:9px 14px;border:1px solid var(--border);border-radius:10px;font-size:0.82rem;background:white;color:var(--text);font-family:'Inter',sans-serif">
    <option value="">All Categories</option>
    <option value="Central Government">Central Government</option>
    <option value="State Government">State Government</option>
    <option value="Sector-Specific Grant">Sector-Specific</option>
  </select>
  <select onchange="filterSchemes()" id="sectorFilter" style="padding:9px 14px;border:1px solid var(--border);border-radius:10px;font-size:0.82rem;background:white;color:var(--text);font-family:'Inter',sans-serif">
    <option value="">All Sectors</option>
    <option value="Manufacturing">Manufacturing</option>
    <option value="Technology">Technology</option>
    <option value="Food Processing">Food Processing</option>
    <option value="Trade">Trade</option>
    <option value="Skill Development">Skill Development</option>
  </select>
</div>

<!-- STATS ROW -->
<div class="grid-4" style="margin-bottom:24px">
  <div class="stat-card"><div class="stat-icon purple">🏛️</div><div class="stat-value">${schemes.filter(s => s.category === 'Central Government').length}</div><div class="stat-label">Central Schemes</div></div>
  <div class="stat-card"><div class="stat-icon green">🏢</div><div class="stat-value">${schemes.filter(s => s.category === 'State Government').length}</div><div class="stat-label">State Schemes</div></div>
  <div class="stat-card"><div class="stat-icon coral">💰</div><div class="stat-value">₹20L</div><div class="stat-label">Up to Per Scheme</div></div>
  <div class="stat-card"><div class="stat-icon yellow">⏱️</div><div class="stat-value">${schemes.filter(s => s.deadline.includes('Rolling')).length}</div><div class="stat-label">Rolling Deadlines</div></div>
</div>

<!-- SCHEMES GRID -->
<div class="grid-3" id="schemesGrid">
${schemesHTML}
</div>

<div id="noResults" style="display:none;text-align:center;padding:60px 20px;color:var(--text-muted)">
  <div style="font-size:3rem;margin-bottom:12px">🔍</div>
  <div style="font-size:1rem;font-weight:600">No schemes found</div>
  <div style="font-size:0.85rem;margin-top:6px">Try different search terms or filters</div>
</div>

${schemeDetailsModal}

<script>
if (!localStorage.getItem('herfiniq_token')) window.location.href = '/login';

const schemeData = ${JSON.stringify(schemes)};

function filterSchemes() {
  const search = document.getElementById('schemeSearch').value.toLowerCase();
  const category = document.getElementById('categoryFilter').value;
  const sector = document.getElementById('sectorFilter').value;
  
  let visible = 0;
  schemeData.forEach(s => {
    const card = document.getElementById('scheme-' + s.id);
    if (!card) return;
    const matchSearch = !search || s.name.toLowerCase().includes(search) || s.description.toLowerCase().includes(search) || s.ministry.toLowerCase().includes(search);
    const matchCat = !category || s.category === category;
    const matchSector = !sector || s.sector.includes(sector);
    
    const show = matchSearch && matchCat && matchSector;
    card.style.display = show ? 'flex' : 'none';
    if (show) visible++;
  });
  
  document.getElementById('noResults').style.display = visible === 0 ? 'block' : 'none';
}

function viewSchemeDetails(id) {
  const s = schemeData.find(s => s.id === id);
  if (!s) return;
  document.getElementById('modalSchemeTitle').textContent = s.name;
  document.getElementById('modalSchemeContent').innerHTML = \`
    <div style="background:linear-gradient(135deg,rgba(91,62,255,0.06),rgba(205,189,255,0.08));border-radius:14px;padding:20px;margin-bottom:20px">
      <div style="font-size:0.72rem;color:var(--primary);font-weight:700;text-transform:uppercase;margin-bottom:4px">\${s.ministry}</div>
      <div style="font-family:'Poppins',sans-serif;font-size:1.2rem;font-weight:700;margin-bottom:8px">\${s.name}</div>
      <div style="font-size:1.3rem;font-weight:700;color:var(--primary)">\${s.fundingAmount}</div>
    </div>
    <div style="margin-bottom:16px">
      <div style="font-weight:700;font-size:0.9rem;margin-bottom:8px">📋 Description</div>
      <div style="font-size:0.85rem;color:var(--text-muted);line-height:1.6">\${s.description}</div>
    </div>
    <div style="margin-bottom:16px">
      <div style="font-weight:700;font-size:0.9rem;margin-bottom:8px">✅ Eligibility</div>
      <div style="font-size:0.85rem;color:var(--text-muted);line-height:1.6">\${s.eligibility}</div>
    </div>
    <div style="margin-bottom:16px">
      <div style="font-weight:700;font-size:0.9rem;margin-bottom:8px">🎁 Benefits</div>
      <div style="font-size:0.85rem;color:var(--text-muted);line-height:1.6">\${s.benefit}</div>
    </div>
    <div style="margin-bottom:20px">
      <div style="font-weight:700;font-size:0.9rem;margin-bottom:8px">📄 Required Documents</div>
      <div style="display:flex;flex-wrap:wrap;gap:6px">
        \${s.documents.map(d => \`<span style="padding:4px 10px;border-radius:20px;border:1px solid var(--border);background:var(--bg);font-size:0.75rem;color:var(--text-muted)">\${d}</span>\`).join('')}
      </div>
    </div>
    <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;padding:16px;background:var(--bg);border-radius:12px;margin-bottom:20px">
      <div><div style="font-size:0.72rem;color:var(--text-muted);margin-bottom:3px">Deadline</div><div style="font-weight:600;font-size:0.85rem">\${s.deadline}</div></div>
      <div><div style="font-size:0.72rem;color:var(--text-muted);margin-bottom:3px">Category</div><div style="font-weight:600;font-size:0.85rem">\${s.category}</div></div>
      <div><div style="font-size:0.72rem;color:var(--text-muted);margin-bottom:3px">Stages</div><div style="font-weight:600;font-size:0.85rem">\${s.stage.join(', ')}</div></div>
    </div>
    <a href="\${s.applicationLink}" target="_blank" style="display:flex;align-items:center;justify-content:center;gap:8px;width:100%;padding:14px;border-radius:12px;background:linear-gradient(135deg,var(--primary),#7C3AED);color:white;font-weight:700;font-size:0.95rem;text-decoration:none">
      Apply for \${s.name} →
    </a>
  \`;
  document.getElementById('schemeModal').style.display = 'flex';
}
</script>
`;

  return appShell(content, lang, 'Government Schemes') + '</body></html>';
};
