// Default CV Template Data (Sanitized Generic Demo Data for Security & Privacy)
const defaultCvData = {
  theme: {
    template: 'harvard', // Default template: Harvard Standard
    fontFamily: 'auto', // Font Family: 'auto' | 'lora' | 'inter' | 'dm-sans' | 'roboto'
    spacingMode: 'normal', // Spacing mode: 'normal' | 'compact' | 'tight'
    skillStyle: 'pills', // Skill layout style: 'pills' | 'text' | 'bullets'
    primaryColor: '#0a6e68',
    lightColor: '#e4f2f1',
    textColor: '#181818',
    mutedColor: '#4a5563',
    mutedColor2: '#8a939e',
    borderColor: '#dde1e6',
    sidebarBg: '#f7f9fa',
    fontSize: '9.8',
    sectionTitles: {
      experience: 'Experience',
      projects: 'Projects',
      certifications: 'Certifications',
      education: 'Education',
      skills: 'Skills',
      languages: 'Languages'
    },
    sectionOrderMain: ['experience', 'projects', 'certifications'],
    sectionOrderSide: ['education', 'skills', 'languages', 'customSections']
  },
  header: {
    name: 'Nguyễn Văn A',
    role: 'Network & Security Engineer',
    summary: 'Network & Security Engineer focused on designing, deploying, and validating high-availability network infrastructures, enterprise firewalls, and cloud security architectures.',
    contacts: [
      { label: 'SĐT', value: '0901 234 567', link: 'tel:0901234567' },
      { label: 'Email', value: 'candidate.demo@email.com', link: 'mailto:candidate.demo@email.com' },
      { label: 'Ngày sinh', value: '01/01/2000', link: '' },
      { label: 'Portfolio', value: 'candidate-demo.github.io', link: 'https://candidate-demo.github.io' },
      { label: 'GitHub', value: 'github.com/candidate-demo', link: 'https://github.com/candidate-demo' },
      { label: 'LinkedIn', value: 'linkedin.com/in/candidate-demo', link: 'https://linkedin.com/in/candidate-demo' },
      { label: 'Địa chỉ', value: 'TP. Hồ Chí Minh, Việt Nam', link: '' }
    ]
  },
  experience: [
    {
      company: 'Enterprise Network & Security Solutions Corp',
      date: 'Jan 2025 – Present',
      role: 'Network & Security Engineer',
      location: 'Ho Chi Minh City, Vietnam',
      bullets: [
        'Deployed and validated enterprise <strong>NGFW security appliances</strong> across lab and production environments — traffic simulation, alert verification, and firmware coordination.',
        'Researched VPN evasion techniques (<strong>Tailscale, Cloudflare WARP, WireGuard</strong>) to assess firewall detection gaps; produced security advisory reports.',
        'Supported Cisco network initiatives: switch upgrades, StackWise stacking, and <strong>SD-WAN evaluation</strong>; assisted with infrastructure deployment.'
      ]
    }
  ],
  projects: [
    {
      name: 'HA Firewall & AI-driven Security Monitoring System',
      subtitle: 'Capstone Project',
      date: '2025 – 2026',
      bullets: [
        'Deployed <strong>Active-Passive OPNsense cluster</strong> (CARP/pfsync) with HAProxy SSL offloading and <strong>ModSecurity WAF</strong>; achieved <strong>2.8s failover</strong>, zero-session-drop.',
        'Built a <strong>Wazuh SIEM</strong> threat monitoring pipeline and trained Random Forest detection models on custom attack datasets with <strong>98.1% accuracy</strong>.'
      ],
      tags: ['OPNsense', 'CARP/pfsync', 'HAProxy', 'ModSecurity', 'Wazuh SIEM', 'Python', 'VMware']
    },
    {
      name: 'Enterprise Cisco SD-WAN Infrastructure',
      subtitle: 'Lab Simulation',
      date: '2025',
      bullets: [
        'Architected a 3-site <strong>Hub-and-Spoke SD-WAN overlay</strong> on Cisco CML; enforced <strong>IPsec AES-256-GCM encryption</strong> across dual transports.',
        'Implemented traffic segmentation via AAR policy pinning critical medical traffic to MPLS with zero manual intervention during failover.'
      ],
      tags: ['Cisco CML', 'SD-WAN', 'vManage', 'IPsec', 'BFD', 'AAR Policy']
    }
  ],
  certifications: [
    {
      name: 'Cisco Certified Network Associate (CCNA)',
      issuer: 'Cisco',
      date: '2025',
      link: ''
    },
    {
      name: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services',
      date: '2025',
      link: ''
    }
  ],
  education: [
    {
      school: 'University of Information Technology (UIT)',
      degree: 'B.Sc. in Computer Networks & Data Communications',
      details: 'GPA 3.2 / 4.0 · 2022 – 2026'
    }
  ],
  skills: [
    {
      category: 'Networking',
      items: [
        { name: 'TCP/IP', primary: true },
        { name: 'Routing/Switching', primary: true },
        { name: 'SD-WAN', primary: true },
        { name: 'Cisco IOS', primary: false },
        { name: 'OSPF/BGP', primary: false },
        { name: 'VLAN/STP', primary: false },
        { name: 'IPsec VPN', primary: false }
      ]
    },
    {
      category: 'Security',
      items: [
        { name: 'OPNsense', primary: true },
        { name: 'Wazuh SIEM', primary: true },
        { name: 'ModSecurity WAF', primary: false },
        { name: 'Suricata IDS/IPS', primary: false },
        { name: 'Wireshark', primary: false }
      ]
    },
    {
      category: 'Cloud & System',
      items: [
        { name: 'AWS', primary: true },
        { name: 'Docker', primary: true },
        { name: 'Linux/Bash', primary: false },
        { name: 'Python', primary: true }
      ]
    }
  ],
  languages: [
    { name: 'Vietnamese', level: 'Native' },
    { name: 'English', level: 'Technical Professional' }
  ],
  customSections: [],
  // Job-application tracking for this CV version (never printed on the CV)
  application: {
    company: '',
    position: '',
    status: 'draft',
    deadline: '',
    sentDate: '',
    jdLink: '',
    notes: '',
    jdText: ''
  }
};

const APPLICATION_STATUSES = [
  ['draft', 'Chưa gửi'],
  ['sent', 'Đã gửi'],
  ['interview', 'Phỏng vấn'],
  ['offer', 'Có offer'],
  ['rejected', 'Bị từ chối'],
  ['noreply', 'Không phản hồi']
];

function blankApplication() {
  return { company: '', position: '', status: 'draft', deadline: '', sentDate: '', jdLink: '', notes: '', jdText: '' };
}

function getStatusLabel(key) {
  const found = APPLICATION_STATUSES.find(([k]) => k === key);
  return found ? found[1] : APPLICATION_STATUSES[0][1];
}

// Helper to format URLs to ensure clickable links in HTML & PDF
function formatUrl(url) {
  if (!url) return '';
  url = url.trim();
  if (/^(f|ht)tps?:\/\//i.test(url) || /^mailto:/i.test(url) || /^tel:/i.test(url)) {
    return url;
  }
  return 'https://' + url;
}

// A4 height in CSS px (297mm @ 96dpi). The on-screen .page only has min-height,
// so its clientHeight grows with the content and cannot be used as the A4 limit.
const A4_HEIGHT_PX = Math.round(297 * 96 / 25.4);
const FALLBACK_NAME = 'Ứng viên';

// Helper to escape HTML characters safely for tags and text
function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  if (typeof str !== 'string') str = String(str);
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ---- Hide / show (nothing is deleted; hidden things are just left off the CV) ----
// A hidden bullet starts with an invisible WORD JOINER so bullet arrays stay plain strings.
const HIDDEN_MARK = '\u2060';
const isHiddenBullet = b => typeof b === 'string' && b.charAt(0) === HIDDEN_MARK;
const bulletText = b => (isHiddenBullet(b) ? b.slice(1) : b);
const HIDEABLE_SECTIONS = ['experience', 'projects', 'certifications', 'education', 'skills', 'languages', 'customSections'];

// What the CV really shows: hidden sections, items and bullets removed.
// Used by the preview and by the JD matcher so both agree with what gets printed.
function visibleData(raw) {
  const off = new Set((raw.theme && raw.theme.hiddenSections) || []);
  const clean = key => {
    if (off.has(key)) return [];
    return (raw[key] || [])
      .filter(x => x && !x.hidden)
      .map(x => (Array.isArray(x.bullets) ? { ...x, bullets: x.bullets.filter(b => !isHiddenBullet(b)) } : x));
  };
  const out = { ...raw };
  HIDEABLE_SECTIONS.forEach(k => { out[k] = clean(k); });
  return out;
}

// Allow only simple inline formatting tags in rich text (bullets, summary).
// Everything else is escaped, so stray '<' or imported JSON cannot break the page.
function sanitizeRichHtml(str) {
  if (str === null || str === undefined) return '';
  const escaped = escapeHtml(String(str));
  return escaped
    .replace(/&lt;(\/?)(strong|b|em|i|u|br|sub|sup|code)\s*(\/?)&gt;/gi, '<$1$2$3>');
}

// Migration helper for backward compatibility with older saved profiles
function migrateData(data) {
  if (!data) return;

  if (!data.theme) data.theme = {};
  if (!data.theme.template || ['classic', 'left-sidebar', 'executive'].includes(data.theme.template)) {
    data.theme.template = 'harvard';
  }
  if (!data.theme.fontFamily) data.theme.fontFamily = 'auto';
  if (!data.theme.spacingMode) data.theme.spacingMode = 'normal';
  if (!data.theme.skillStyle) data.theme.skillStyle = 'pills';
  if (!data.theme.fontSize) data.theme.fontSize = '9.8';
  if (!data.theme.primaryColor) data.theme.primaryColor = '#0a6e68';
  if (!data.theme.lightColor) data.theme.lightColor = '#e4f2f1';
  if (!data.theme.textColor) data.theme.textColor = '#181818';
  if (!data.theme.mutedColor) data.theme.mutedColor = '#4a5563';
  if (!data.theme.mutedColor2) data.theme.mutedColor2 = '#8a939e';
  if (!data.theme.borderColor) data.theme.borderColor = '#dde1e6';
  if (!data.theme.sidebarBg) data.theme.sidebarBg = '#f7f9fa';

  if (!data.theme.sectionTitles) {
    data.theme.sectionTitles = {
      experience: 'Experience',
      projects: 'Projects',
      certifications: 'Certifications',
      education: 'Education',
      skills: 'Skills',
      languages: 'Languages'
    };
  }
  if (!Array.isArray(data.theme.sectionOrderMain)) {
    data.theme.sectionOrderMain = ['experience', 'projects', 'certifications'];
  }
  if (!Array.isArray(data.theme.sectionOrderSide)) {
    data.theme.sectionOrderSide = ['education', 'skills', 'languages', 'customSections'];
  }

  if (!data.header) data.header = {};
  if (!Array.isArray(data.header.contacts)) {
    const contacts = [];
    if (data.header.phone) {
      contacts.push({ label: 'SĐT', value: data.header.phone, link: `tel:${data.header.phone.replace(/[^\d+]/g, '')}` });
    }
    if (data.header.email) {
      contacts.push({ label: 'Email', value: data.header.email, link: `mailto:${data.header.email}` });
    }
    if (data.header.portfolio) {
      contacts.push({ label: 'Portfolio', value: data.header.portfolioLabel || data.header.portfolio, link: formatUrl(data.header.portfolio) });
    }
    if (data.header.github) {
      contacts.push({ label: 'GitHub', value: data.header.githubLabel || data.header.github, link: formatUrl(data.header.github) });
    }
    if (data.header.linkedin) {
      contacts.push({ label: 'LinkedIn', value: data.header.linkedinLabel || data.header.linkedin, link: formatUrl(data.header.linkedin) });
    }
    if (data.header.address) {
      contacts.push({ label: 'Địa chỉ', value: data.header.address, link: '' });
    }
    data.header.contacts = contacts;
  }

  if (!Array.isArray(data.experience)) data.experience = [];
  if (!Array.isArray(data.projects)) data.projects = [];
  if (!Array.isArray(data.certifications)) data.certifications = [];
  if (!Array.isArray(data.education)) data.education = [];
  if (!Array.isArray(data.skills)) data.skills = [];
  if (!Array.isArray(data.languages)) data.languages = [];
  if (!Array.isArray(data.customSections)) data.customSections = [];

  // Application tracking block (company, status, JD...)
  if (!data.application || typeof data.application !== 'object' || Array.isArray(data.application)) {
    data.application = blankApplication();
  }
  const appBlank = blankApplication();
  Object.keys(appBlank).forEach(k => {
    if (typeof data.application[k] !== 'string') data.application[k] = appBlank[k];
  });
  if (!APPLICATION_STATUSES.some(([k]) => k === data.application.status)) data.application.status = 'draft';

  // Normalise nested items so a hand-edited / imported JSON cannot crash the editor.
  // IMPORTANT: fix arrays IN PLACE - the editor keeps references to them between renders.
  const fixStrings = (obj, key) => {
    if (!Array.isArray(obj[key])) { obj[key] = []; return; }
    const arr = obj[key];
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== 'string') arr[i] = String(arr[i] ?? '');
    }
  };
  data.experience.forEach(e => fixStrings(e, 'bullets'));
  data.projects.forEach(p => { fixStrings(p, 'bullets'); fixStrings(p, 'tags'); });
  data.customSections.forEach(c => fixStrings(c, 'bullets'));
  data.skills.forEach(c => { if (!Array.isArray(c.items)) c.items = []; });
  for (let i = data.header.contacts.length - 1; i >= 0; i--) {
    const c = data.header.contacts[i];
    if (!c || typeof c !== 'object') data.header.contacts.splice(i, 1);
  }

  // Make sure every known section appears in exactly one column order
  const known = ['experience', 'projects', 'certifications', 'education', 'skills', 'languages', 'customSections'];
  const main = data.theme.sectionOrderMain;
  const side = data.theme.sectionOrderSide;
  const cleanMain = main.filter((k, i) => known.includes(k) && main.indexOf(k) === i);
  const cleanSide = side.filter((k, i) => known.includes(k) && side.indexOf(k) === i && !cleanMain.includes(k));
  known.forEach(k => {
    if (!cleanMain.includes(k) && !cleanSide.includes(k)) cleanSide.push(k);
  });
  if (!Array.isArray(data.theme.hiddenSections)) data.theme.hiddenSections = [];
  for (let i = data.theme.hiddenSections.length - 1; i >= 0; i--) {
    const k = data.theme.hiddenSections[i];
    if (!known.includes(k) || data.theme.hiddenSections.indexOf(k) !== i) data.theme.hiddenSections.splice(i, 1);
  }
  const setInPlace = (arr, next) => {
    if (arr.length === next.length && arr.every((v, i) => v === next[i])) return;
    arr.length = 0;
    arr.push(...next);
  };
  setInPlace(main, cleanMain);
  setInPlace(side, cleanSide);
}

// Application State
let appState = {
  profiles: {},
  currentProfileId: ''
};

let zoomLevel = 0.85;

// Global state to track open editor accordion sections across re-renders
const openEditorSections = new Set(['Thông tin cá nhân']);

// Initialize App
window.addEventListener('DOMContentLoaded', () => {
  loadProfilesFromStorage();
  setupEventListeners();
  setupTracker();
  updateBackupHint();
  renderProfileDropdown();
  renderEditor();
  updatePreview();
  setupZoom();
});

// Load profiles from LocalStorage or initialize with default
function loadProfilesFromStorage() {
  let stored = null;
  try { stored = localStorage.getItem('cv_builder_profiles'); } catch (e) { stored = null; }
  if (stored) {
    try {
      appState = JSON.parse(stored);
      Object.keys(appState.profiles).forEach(id => {
        migrateData(appState.profiles[id].data);
      });
    } catch (e) {
      console.error('Error parsing stored profiles', e);
      // Keep the unreadable data instead of silently overwriting it
      try { localStorage.setItem('cv_builder_profiles_backup', stored); } catch (_) {}
      appState = { profiles: {}, currentProfileId: '' };
      initializeDefaultProfile();
    }
  } else {
    initializeDefaultProfile();
  }

  if (!appState.profiles || Object.keys(appState.profiles).length === 0) {
    initializeDefaultProfile();
  }
  if (!appState.currentProfileId || !appState.profiles[appState.currentProfileId]) {
    appState.currentProfileId = Object.keys(appState.profiles)[0];
  }
}

function newProfileId() {
  return 'profile_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7);
}

function initializeDefaultProfile() {
  const id = newProfileId();
  appState.profiles = {};
  appState.profiles[id] = {
    name: 'CV mặc định',
    data: JSON.parse(JSON.stringify(defaultCvData))
  };
  appState.currentProfileId = id;
  saveProfilesToStorage();
}

function saveProfilesToStorage() {
  try {
    localStorage.setItem('cv_builder_profiles', JSON.stringify(appState));
    if (typeof updateBackupHint === 'function') updateBackupHint();
  } catch (e) {
    // Quota exceeded / storage blocked: keep the app working in memory
    console.error('Cannot save profiles to localStorage', e);
  }
}

// Get active CV data with migration check
function getActiveData() {
  const data = appState.profiles[appState.currentProfileId].data;
  migrateData(data);
  return data;
}

// Save active CV data and update preview
let jdLiveRefresh = null;
let jdRefreshTimer = null;

function updateDataAndPreview() {
  saveProfilesToStorage();
  updatePreview();
  // Keep the JD match result in sync while the CV is being edited
  if (jdLiveRefresh) {
    clearTimeout(jdRefreshTimer);
    jdRefreshTimer = setTimeout(() => { if (jdLiveRefresh) jdLiveRefresh(); }, 250);
  }
}

// Setup top control actions
function setupEventListeners() {
  // Profile Switching
  document.getElementById('profile-select').addEventListener('change', (e) => {
    appState.currentProfileId = e.target.value;
    saveProfilesToStorage();
    renderEditor();
    updatePreview();
  });

  // Create Profile
  document.getElementById('btn-new-profile').addEventListener('click', () => {
    const name = prompt('Nhập tên phiên bản CV mới:', 'Bản sao CV');
    if (name && name.trim() !== '') {
      const id = newProfileId();
      const baseData = appState.profiles[appState.currentProfileId]
        ? appState.profiles[appState.currentProfileId].data
        : defaultCvData;
      const copy = JSON.parse(JSON.stringify(baseData));
      copy.application = blankApplication(); // a new version is for a new application
      appState.profiles[id] = {
        name: name.trim(),
        data: copy
      };
      appState.currentProfileId = id;
      saveProfilesToStorage();
      renderProfileDropdown();
      renderEditor();
      updatePreview();
    }
  });

  // Rename Profile
  document.getElementById('btn-rename-profile').addEventListener('click', () => {
    const currentName = appState.profiles[appState.currentProfileId].name;
    const name = prompt('Nhập tên mới cho phiên bản này:', currentName);
    if (name && name.trim() !== '' && name.trim() !== currentName) {
      appState.profiles[appState.currentProfileId].name = name.trim();
      saveProfilesToStorage();
      renderProfileDropdown();
    }
  });

  // Delete Profile
  document.getElementById('btn-delete-profile').addEventListener('click', () => {
    const keys = Object.keys(appState.profiles);
    if (keys.length <= 1) {
      alert('Không thể xóa phiên bản duy nhất còn lại!');
      return;
    }
    if (confirm(`Bạn có chắc chắn muốn xóa phiên bản "${appState.profiles[appState.currentProfileId].name}" không?`)) {
      const deleteId = appState.currentProfileId;
      const remainingKeys = keys.filter(k => k !== deleteId);
      appState.currentProfileId = remainingKeys[0];
      delete appState.profiles[deleteId];
      saveProfilesToStorage();
      renderProfileDropdown();
      renderEditor();
      updatePreview();
    }
  });

  // Export JSON
  document.getElementById('btn-export-json').addEventListener('click', () => {
    const activeProfile = appState.profiles[appState.currentProfileId];
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(activeProfile.data, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    const slug = activeProfile.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/gi, 'd')
      .toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '') || 'cv';
    const filename = slug + '_data.json';
    downloadAnchor.setAttribute("download", filename);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  });

  // Backup everything
  document.getElementById('btn-backup').addEventListener('click', exportBackup);

  // Import JSON
  const fileInput = document.getElementById('import-file-input');
  document.getElementById('btn-import-json').addEventListener('click', () => {
    fileInput.click();
  });
  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(evt) {
      try {
        const importedData = JSON.parse(evt.target.result);
        if (importedData && importedData.format === BACKUP_FORMAT && importedData.profiles) {
          const n = restoreBackup(importedData);
          if (n) alert(`Đã khôi phục ${n} phiên bản CV.`);
          fileInput.value = '';
          return;
        }
        if (!importedData || !importedData.header || !importedData.theme) {
          throw new Error("Không đúng định dạng dữ liệu CV Builder.");
        }
        
        migrateData(importedData);

        const name = prompt('Đặt tên cho phiên bản nhập khẩu này:', file.name.replace('.json', ''));
        if (name) {
          const id = newProfileId();
          appState.profiles[id] = {
            name: name.trim(),
            data: importedData
          };
          appState.currentProfileId = id;
          saveProfilesToStorage();
          renderProfileDropdown();
          renderEditor();
          updatePreview();
          alert('Nhập dữ liệu thành công!');
        }
      } catch (err) {
        alert('Lỗi nhập dữ liệu: ' + err.message);
      }
      fileInput.value = '';
    };
    reader.readAsText(file);
  });

  // Reset to default
  document.getElementById('btn-reset-default').addEventListener('click', () => {
    if (confirm('Bạn có chắc muốn đặt lại phiên bản này về dữ liệu gốc? Mọi thay đổi hiện tại của phiên bản này sẽ bị mất.')) {
      const keepApplication = getActiveData().application;
      const fresh = JSON.parse(JSON.stringify(defaultCvData));
      fresh.application = keepApplication; // resetting the CV content must not erase tracking info
      appState.profiles[appState.currentProfileId].data = fresh;
      saveProfilesToStorage();
      renderEditor();
      updatePreview();
    }
  });

  // Export PDF
  document.getElementById('btn-export-pdf').addEventListener('click', () => {
    const activeData = getActiveData();
    const userName = activeData.header && activeData.header.name ? activeData.header.name.trim() : FALLBACK_NAME;
    document.title = `CV - ${userName}`;
    window.print();
  });

  // Auto-fit 1 page A4
  const btnAutoFit = document.getElementById('btn-auto-fit-page');
  if (btnAutoFit) {
    btnAutoFit.addEventListener('click', () => {
      autoFitToOnePage();
    });
  }
}

// Algorithm to automatically shrink font size and adjust spacing to fit 1 A4 page.
// Only changes anything when the CV really overflows; tries the gentlest option first.
function autoFitToOnePage() {
  const data = getActiveData();
  const preview = document.getElementById('preview-cv');
  if (!preview) return;

  const MIN_SIZE = 7.5;
  const overflows = () => preview.scrollHeight > A4_HEIGHT_PX + 2;
  const apply = () => { updatePreview(); };

  apply();
  if (overflows()) {
    const modes = ['normal', 'compact', 'tight'];
    let modeIdx = Math.max(0, modes.indexOf(data.theme.spacingMode));
    for (; modeIdx < modes.length; modeIdx++) {
      data.theme.spacingMode = modes[modeIdx];
      apply();
      if (!overflows()) break;
      // Shrink the font in 0.2pt steps, but keep it readable until the tightest mode
      const floor = modes[modeIdx] === 'tight' ? MIN_SIZE : 8.8;
      let size = parseFloat(data.theme.fontSize) || 9.8;
      while (overflows() && size - 0.2 >= floor - 1e-9) {
        size = Math.round((size - 0.2) * 10) / 10;
        data.theme.fontSize = size.toFixed(1);
        apply();
      }
      if (!overflows()) break;
    }
  }

  saveProfilesToStorage();
  renderEditor();
  updatePreview();
}

function profileLabel(profile) {
  const a = profile.data && profile.data.application;
  if (!a) return profile.name;
  const extra = [];
  if (a.company) extra.push(a.company);
  if (a.status && a.status !== 'draft') extra.push(getStatusLabel(a.status));
  return extra.length ? `${profile.name} · ${extra.join(' · ')}` : profile.name;
}

function updateTrackerButton() {
  const btn = document.getElementById('btn-tracker');
  if (!btn || typeof deadlineInfo !== 'function') return;
  const urgent = getTrackerRows().filter(r => { const d = deadlineInfo(r.app); return d && d.level !== 'ok'; }).length;
  btn.textContent = urgent ? `📋 Theo dõi (${urgent})` : '📋 Theo dõi';
  btn.classList.toggle('has-alert', urgent > 0);
  btn.title = urgent
    ? `${urgent} CV sắp hoặc đã quá hạn nộp mà chưa gửi`
    : 'Bảng theo dõi các CV đã gửi / đang ứng tuyển';
}

function renderProfileDropdown() {
  const select = document.getElementById('profile-select');
  select.innerHTML = '';
  Object.keys(appState.profiles).forEach(id => {
    const opt = document.createElement('option');
    opt.value = id;
    opt.textContent = profileLabel(appState.profiles[id]);
    opt.selected = (id === appState.currentProfileId);
    select.appendChild(opt);
  });
  updateTrackerButton();
}

// ---- Application tracker + JD matcher ----
function todayIso() {
  const d = new Date();
  const p = n => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

// Whole days from today (local) to an ISO date; negative = already past
function daysUntil(iso) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || '');
  if (!m) return null;
  const now = new Date();
  const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.round((Date.UTC(+m[1], +m[2] - 1, +m[3]) - today) / 86400000);
}

const DEADLINE_SOON_DAYS = 3;

// Only CVs that are still "Chưa gửi" have an actionable deadline
function deadlineInfo(app) {
  if (!app || app.status !== 'draft' || !app.deadline) return null;
  const days = daysUntil(app.deadline);
  if (days === null) return null;
  if (days < 0) return { days, level: 'over', text: `Quá hạn ${-days} ngày` };
  if (days === 0) return { days, level: 'soon', text: 'Hạn là hôm nay' };
  if (days <= DEADLINE_SOON_DAYS) return { days, level: 'soon', text: `Còn ${days} ngày` };
  return { days, level: 'ok', text: `Còn ${days} ngày` };
}

function formatDateVi(iso) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || '');
  return m ? `${m[3]}/${m[2]}/${m[1]}` : '';
}

function createSelectInput(label, options, value, onChange) {
  const grp = document.createElement('div');
  grp.className = 'form-group half';
  const lbl = document.createElement('label');
  lbl.textContent = label;
  const select = document.createElement('select');
  select.className = 'form-control';
  options.forEach(([val, text]) => {
    const opt = document.createElement('option');
    opt.value = val;
    opt.textContent = text;
    opt.selected = (val === value);
    select.appendChild(opt);
  });
  select.addEventListener('change', e => onChange(e.target.value));
  grp.appendChild(lbl);
  grp.appendChild(select);
  grp.select = select;
  return grp;
}

function createDateInput(label, value, onChange) {
  const grp = document.createElement('div');
  grp.className = 'form-group half';
  const lbl = document.createElement('label');
  lbl.textContent = label;
  const input = document.createElement('input');
  input.type = 'date';
  input.className = 'form-control';
  input.value = value || '';
  input.addEventListener('input', e => onChange(e.target.value));
  grp.appendChild(lbl);
  grp.appendChild(input);
  grp.input = input;
  return grp;
}

function makeChip(text, kind, title) {
  const chip = document.createElement('span');
  chip.className = `jd-chip jd-chip-${kind}`;
  chip.textContent = text;
  if (title) chip.title = title;
  return chip;
}

function makeChipGroup(titleText, chips) {
  const wrap = document.createElement('div');
  wrap.className = 'jd-group';
  const h = document.createElement('div');
  h.className = 'jd-group-title';
  h.textContent = titleText;
  const list = document.createElement('div');
  list.className = 'jd-chips';
  chips.forEach(c => list.appendChild(c));
  wrap.appendChild(h);
  wrap.appendChild(list);
  return wrap;
}

function renderJdResult(container, data) {
  container.innerHTML = '';
  const note = text => {
    const p = document.createElement('p');
    p.className = 'helper-text';
    p.textContent = text;
    container.appendChild(p);
  };
  if (!window.JdMatch) {
    note('Không tải được jd-match.js — hãy kiểm tra file này nằm cùng thư mục với index.html.');
    return;
  }
  const res = window.JdMatch.analyze(data.application.jdText, window.JdMatch.buildCvText(visibleData(data)));
  if (res.empty) {
    note('Hãy dán nội dung JD (ít nhất vài dòng) rồi bấm "Phân tích".');
    return;
  }
  if (res.matched.length + res.missing.length === 0) {
    note('Không nhận ra từ khóa kỹ thuật quen thuộc nào trong JD này. Bạn thử dán đủ phần Yêu cầu / Requirements nhé.');
  } else {
    const level = res.score >= 70 ? 'good' : res.score >= 40 ? 'mid' : 'low';
    const levelText = res.score >= 70 ? 'Khớp tốt' : res.score >= 40 ? 'Khớp khá' : 'Khớp thấp';
    const scoreRow = document.createElement('div');
    scoreRow.className = `jd-score jd-score-${level}`;
    const num = document.createElement('span');
    num.className = 'jd-score-num';
    num.textContent = `${res.score}%`;
    const lab = document.createElement('span');
    lab.className = 'jd-score-label';
    lab.textContent = `${levelText} — ${res.matched.length}/${res.matched.length + res.missing.length} từ khóa của JD đã có trong CV`;
    const bar = document.createElement('div');
    bar.className = 'jd-bar';
    const fill = document.createElement('div');
    fill.className = 'jd-bar-fill';
    fill.style.width = `${res.score}%`;
    bar.appendChild(fill);
    scoreRow.appendChild(num);
    scoreRow.appendChild(lab);
    container.appendChild(scoreRow);
    container.appendChild(bar);

    const fmt = x => (x.freq > 1 ? `${x.term} ×${x.freq}` : x.term);
    if (res.missing.length) {
      container.appendChild(makeChipGroup(
        `Thiếu trong CV (${res.missing.length}) — xếp theo mức nhắc đến trong JD`,
        res.missing.map(x => makeChip(fmt(x), 'miss'))
      ));
    }
    if (res.matched.length) {
      container.appendChild(makeChipGroup(
        `Đã có trong CV (${res.matched.length})`,
        res.matched.map(x => makeChip(fmt(x), 'ok'))
      ));
    }
  }
  if (res.extras.length) {
    container.appendChild(makeChipGroup(
      'Thuật ngữ viết tắt khác trong JD (không tính điểm)',
      res.extras.map(x => makeChip(x.freq > 1 ? `${x.token} ×${x.freq}` : x.token, x.inCv ? 'ok' : 'neutral'))
    ));
  }
  note('Chỉ thêm vào CV những kỹ năng bạn thật sự biết / đã làm. Từ khóa thiếu là gợi ý để bạn rà lại, không phải việc bắt buộc phải điền cho đủ.');
}

function buildApplicationSection(data) {
  const app = data.application;
  const sec = createFormSection('🎯 Ứng tuyển & Khớp JD (không in ra CV)');

  const hint = document.createElement('p');
  hint.className = 'helper-text mb-2';
  hint.textContent = 'Ghi lại vị trí đang ứng tuyển bằng phiên bản CV này, rồi dán JD để xem CV đã có / còn thiếu từ khóa nào. Mục này không xuất hiện trên CV/PDF.';
  sec.appendChild(hint);

  const onMetaChange = () => {
    saveProfilesToStorage();
    renderProfileDropdown();
    if (typeof refreshTrackerIfOpen === 'function') refreshTrackerIfOpen();
  };

  const rowNames = document.createElement('div');
  rowNames.className = 'form-group-row';
  rowNames.appendChild(createTextInput('Công ty', app.company, val => { app.company = val; onMetaChange(); }, 'half'));
  rowNames.appendChild(createTextInput('Vị trí ứng tuyển', app.position, val => { app.position = val; onMetaChange(); }, 'half'));
  sec.appendChild(rowNames);

  const rowStatus = document.createElement('div');
  rowStatus.className = 'form-group-row';
  const dateGrp = createDateInput('Ngày gửi CV', app.sentDate, val => { app.sentDate = val; onMetaChange(); });
  const statusGrp = createSelectInput('Trạng thái', APPLICATION_STATUSES, app.status, val => {
    app.status = val;
    // Convenience: the first time it becomes "Đã gửi", stamp today's date
    if (val === 'sent' && !app.sentDate) {
      app.sentDate = todayIso();
      dateGrp.input.value = app.sentDate;
    }
    onMetaChange();
  });
  const deadlineGrp = createDateInput('Hạn nộp', app.deadline, val => { app.deadline = val; onMetaChange(); });
  rowStatus.appendChild(statusGrp);
  rowStatus.appendChild(deadlineGrp);
  rowStatus.appendChild(dateGrp);
  sec.appendChild(rowStatus);

  sec.appendChild(createTextInput('Link tin tuyển dụng (TopCV, LinkedIn...)', app.jdLink, val => { app.jdLink = val; onMetaChange(); }));
  sec.appendChild(createTextareaInput('Ghi chú (người liên hệ, hạn nộp, lịch phỏng vấn...)', app.notes, val => { app.notes = val; saveProfilesToStorage(); }));

  // --- JD matcher ---
  const jdTitle = document.createElement('label');
  jdTitle.className = 'mt-2';
  jdTitle.style.cssText = 'display:block;font-weight:600;font-size:0.8rem;color:var(--app-text);margin-bottom:0.25rem;';
  jdTitle.textContent = 'Khớp CV với JD (phân tích từ khóa ATS)';
  sec.appendChild(jdTitle);

  const result = document.createElement('div');
  result.className = 'jd-result';
  let analyzed = false;
  const run = () => { analyzed = true; renderJdResult(result, data); };

  const jdGrp = createTextareaInput('Dán nội dung JD (Mô tả công việc + Yêu cầu)', app.jdText, val => {
    app.jdText = val;
    saveProfilesToStorage();
  });
  jdGrp.querySelector('textarea').rows = 8;
  sec.appendChild(jdGrp);

  const btnRun = document.createElement('button');
  btnRun.type = 'button';
  btnRun.className = 'btn btn-block btn-analyze-jd';
  btnRun.textContent = '🔍 Phân tích độ khớp CV ↔ JD';
  btnRun.addEventListener('click', run);
  sec.appendChild(btnRun);
  sec.appendChild(result);

  // After the first analysis the result follows CV edits automatically
  jdLiveRefresh = () => {
    if (analyzed && result.isConnected) renderJdResult(result, getActiveData());
  };
  return sec;
}

// ---- Tracker overlay (table of every CV version + its application status) ----
function getTrackerRows() {
  const rows = Object.entries(appState.profiles).map(([id, p]) => ({
    id,
    name: p.name,
    app: (p.data && p.data.application) || blankApplication()
  }));
  const urgentKey = r => (r.app.status === 'draft' && r.app.deadline ? r.app.deadline : null);
  rows.sort((a, b) => {
    const ua = urgentKey(a), ub = urgentKey(b);
    if (ua && ub) return ua.localeCompare(ub);   // nearest deadline first
    if (ua) return -1;
    if (ub) return 1;
    if (a.app.sentDate && b.app.sentDate) return b.app.sentDate.localeCompare(a.app.sentDate);
    if (a.app.sentDate) return -1;
    if (b.app.sentDate) return 1;
    return a.name.localeCompare(b.name);
  });
  return rows;
}

function renderTracker() {
  const body = document.getElementById('tracker-body');
  const summary = document.getElementById('tracker-summary');
  if (!body || !summary) return;
  body.innerHTML = '';
  summary.innerHTML = '';
  const rows = getTrackerRows();

  const counts = {};
  rows.forEach(r => { counts[r.app.status] = (counts[r.app.status] || 0) + 1; });
  APPLICATION_STATUSES.forEach(([key, label]) => {
    if (!counts[key]) return;
    const badge = document.createElement('span');
    badge.className = `status-badge st-${key}`;
    badge.textContent = `${label}: ${counts[key]}`;
    summary.appendChild(badge);
  });

  const urgent = rows.filter(r => { const d = deadlineInfo(r.app); return d && d.level !== 'ok'; }).length;
  if (urgent) {
    const badge = document.createElement('span');
    badge.className = 'status-badge dl-over';
    badge.textContent = `⏰ Sắp / quá hạn nộp: ${urgent}`;
    summary.insertBefore(badge, summary.firstChild);
  }

  rows.forEach(r => {
    const tr = document.createElement('tr');
    if (r.id === appState.currentProfileId) tr.className = 'is-current';
    const cell = text => {
      const td = document.createElement('td');
      td.textContent = text;
      tr.appendChild(td);
      return td;
    };
    cell(r.name + (r.id === appState.currentProfileId ? '  ◀ đang mở' : ''));
    cell(r.app.company || '—');
    cell(r.app.position || '—');
    const tdStatus = document.createElement('td');
    const st = document.createElement('span');
    st.className = `status-badge st-${r.app.status}`;
    st.textContent = getStatusLabel(r.app.status);
    tdStatus.appendChild(st);
    tr.appendChild(tdStatus);
    const tdDeadline = document.createElement('td');
    const dl = deadlineInfo(r.app);
    if (r.app.deadline) {
      tdDeadline.appendChild(document.createTextNode(formatDateVi(r.app.deadline) + ' '));
      if (dl) {
        const b = document.createElement('span');
        b.className = `status-badge dl-${dl.level}`;
        b.textContent = dl.text;
        tdDeadline.appendChild(b);
      }
    } else {
      tdDeadline.textContent = '—';
    }
    tr.appendChild(tdDeadline);
    cell(formatDateVi(r.app.sentDate) || '—');
    const tdLink = document.createElement('td');
    const url = r.app.jdLink ? formatUrl(r.app.jdLink) : '';
    if (/^https?:\/\//i.test(url)) {
      const a = document.createElement('a');
      a.href = url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.textContent = 'Mở';
      a.addEventListener('click', e => e.stopPropagation());
      tdLink.appendChild(a);
    } else {
      tdLink.textContent = '—';
    }
    tr.appendChild(tdLink);
    tr.addEventListener('click', () => {
      appState.currentProfileId = r.id;
      saveProfilesToStorage();
      closeTracker();
      renderProfileDropdown();
      renderEditor();
      updatePreview();
    });
    body.appendChild(tr);
  });
}

function openTracker() {
  const overlay = document.getElementById('tracker-overlay');
  if (!overlay) return;
  renderTracker();
  overlay.hidden = false;
}

function closeTracker() {
  const overlay = document.getElementById('tracker-overlay');
  if (overlay) overlay.hidden = true;
}

function refreshTrackerIfOpen() {
  const overlay = document.getElementById('tracker-overlay');
  if (overlay && !overlay.hidden) renderTracker();
}

// CSV cell: quote everything, and neutralise spreadsheet formulas (=, +, -, @)
function csvCell(value) {
  let str = String(value === null || value === undefined ? '' : value);
  if (/^[=+\-@\t\r]/.test(str)) str = "'" + str;
  return '"' + str.replace(/"/g, '""') + '"';
}

function buildTrackerCsv() {
  const header = ['Phiên bản CV', 'Công ty', 'Vị trí', 'Trạng thái', 'Hạn nộp', 'Ngày gửi', 'Link JD', 'Ghi chú'];
  const lines = [header.map(csvCell).join(',')];
  getTrackerRows().forEach(r => {
    lines.push([
      r.name, r.app.company, r.app.position, getStatusLabel(r.app.status),
      formatDateVi(r.app.deadline), formatDateVi(r.app.sentDate), r.app.jdLink, r.app.notes
    ].map(csvCell).join(','));
  });
  return '﻿' + lines.join('\r\n'); // BOM so Excel reads Vietnamese correctly
}

function exportTrackerCsv() {
  const blob = new Blob([buildTrackerCsv()], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `theo_doi_ung_tuyen_${todayIso()}.csv`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function setupTracker() {
  const bind = (id, fn) => { const el = document.getElementById(id); if (el) el.addEventListener('click', fn); };
  bind('btn-tracker', openTracker);
  bind('btn-tracker-close', closeTracker);
  bind('btn-tracker-csv', exportTrackerCsv);
  const overlay = document.getElementById('tracker-overlay');
  if (overlay) {
    overlay.addEventListener('click', e => { if (e.target === overlay) closeTracker(); });
  }
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeTracker(); });
}

// ---- Backup / restore of ALL profiles ----
const BACKUP_FORMAT = 'cv-builder-backup';
const BACKUP_KEY = 'cv_builder_last_backup';
const BACKUP_REMIND_DAYS = 7;

function buildBackupObject() {
  return {
    format: BACKUP_FORMAT,
    version: 1,
    exportedAt: new Date().toISOString(),
    currentProfileId: appState.currentProfileId,
    profiles: JSON.parse(JSON.stringify(appState.profiles))
  };
}

function hasUserWork() {
  const pristine = JSON.stringify(defaultCvData);
  return Object.keys(appState.profiles).length > 1 ||
    Object.values(appState.profiles).some(p => JSON.stringify(p.data) !== pristine);
}

function updateBackupHint() {
  const btn = document.getElementById('btn-backup');
  if (!btn) return;
  let last = null;
  try { last = localStorage.getItem(BACKUP_KEY); } catch (e) { last = null; }
  const ageDays = last ? (Date.now() - new Date(last).getTime()) / 86400000 : Infinity;
  const needs = hasUserWork() && !(ageDays < BACKUP_REMIND_DAYS);
  btn.classList.toggle('needs-backup', needs);
  btn.title = needs
    ? (last ? `Lần sao lưu gần nhất đã hơn ${BACKUP_REMIND_DAYS} ngày — nên sao lưu lại` : 'Bạn chưa sao lưu lần nào — dữ liệu chỉ nằm trong trình duyệt này')
    : 'Sao lưu TẤT CẢ phiên bản CV ra một file (khôi phục bằng nút Nhập JSON)';
}

function exportBackup() {
  const json = JSON.stringify(buildBackupObject(), null, 2);
  const blob = new Blob([json], { type: 'application/json;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `cv_builder_backup_${todayIso()}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  try { localStorage.setItem(BACKUP_KEY, new Date().toISOString()); } catch (e) { /* ignore */ }
  updateBackupHint();
}

// Merge a backup into the current state. Existing profiles are NEVER overwritten or removed.
function restoreBackup(parsed) {
  const entries = Object.values(parsed.profiles || {}).filter(p =>
    p && typeof p === 'object' && p.data && typeof p.data === 'object' &&
    p.data.header && p.data.theme);
  if (!entries.length) throw new Error('File sao lưu không có phiên bản CV hợp lệ.');
  if (entries.length > 200) throw new Error('File sao lưu có quá nhiều phiên bản (tối đa 200).');
  if (!confirm(`Khôi phục ${entries.length} phiên bản CV từ file sao lưu?\nCác phiên bản hiện có được giữ nguyên (bản khôi phục được thêm vào).`)) return 0;

  const existing = new Set(Object.values(appState.profiles).map(p => p.name));
  let firstId = null;
  entries.forEach(p => {
    migrateData(p.data);
    let name = String(p.name || 'CV').trim().slice(0, 120) || 'CV';
    if (existing.has(name)) name += ' (khôi phục)';
    existing.add(name);
    const id = newProfileId();
    appState.profiles[id] = { name, data: p.data };
    if (!firstId) firstId = id;
  });
  appState.currentProfileId = firstId;
  saveProfilesToStorage();
  renderProfileDropdown();
  renderEditor();
  updatePreview();
  updateBackupHint();
  return entries.length;
}

// ---- Hide / show toggles in the editor ----
function setHideButtonState(btn, hidden, what) {
  btn.textContent = hidden ? '🚫' : '👁';
  btn.title = hidden
    ? `${what} đang ẨN khỏi CV — bấm để hiện lại`
    : `${what} đang hiện trên CV — bấm để ẩn (không xóa dữ liệu)`;
  btn.classList.toggle('is-off', hidden);
  btn.setAttribute('aria-pressed', String(hidden));
}

function newHideButton(extraClass) {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = `btn-icon btn-hide-toggle ${extraClass || ''}`.trim();
  return btn;
}

// Eye button for a card / row of an array of items (experience, projects, ... languages)
function addHideToggle(root, arr, idx) {
  const actions = root.querySelector('.card-actions');
  if (!actions || !arr[idx]) return;
  const btn = newHideButton();
  const apply = () => {
    const off = !!(arr[idx] && arr[idx].hidden);
    setHideButtonState(btn, off, 'Mục này');
    root.classList.toggle('is-hidden-item', off);
  };
  btn.addEventListener('click', () => {
    const cur = arr[idx];
    if (cur.hidden) delete cur.hidden; else cur.hidden = true;
    apply();
    updateDataAndPreview();
  });
  apply();
  actions.insertBefore(btn, actions.firstChild);
}

// Eye button for a whole section in the ordering lists
function addSectionHideToggle(itemDiv, data, key) {
  const actions = itemDiv.querySelector('.card-actions');
  if (!actions) return;
  const list = data.theme.hiddenSections;
  const btn = newHideButton();
  const apply = () => {
    const off = list.includes(key);
    setHideButtonState(btn, off, 'Cả phần này');
    itemDiv.classList.toggle('is-hidden-item', off);
  };
  btn.addEventListener('click', () => {
    const at = list.indexOf(key);
    if (at >= 0) list.splice(at, 1); else list.push(key);
    apply();
    updateDataAndPreview();
  });
  apply();
  actions.insertBefore(btn, actions.firstChild);
}

// ---- Shared list helpers (move up / move down / delete for editor cards) ----
function bindMoveActions(root, arr, idx) {
  const swapWith = (j) => {
    if (j < 0 || j >= arr.length) return;
    [arr[idx], arr[j]] = [arr[j], arr[idx]];
    updateDataAndPreview();
    renderEditor();
  };
  const up = root.querySelector('.btn-move-up');
  const down = root.querySelector('.btn-move-down');
  if (up) up.addEventListener('click', () => swapWith(idx - 1));
  if (down) down.addEventListener('click', () => swapWith(idx + 1));
}

// confirmMsg: optional function returning the confirm text (evaluated on click, so renamed items show the new name)
function bindDeleteAction(root, selector, arr, idx, confirmMsg) {
  const btn = root.querySelector(selector);
  if (!btn) return;
  btn.addEventListener('click', () => {
    if (confirmMsg && !confirm(confirmMsg())) return;
    arr.splice(idx, 1);
    updateDataAndPreview();
    renderEditor();
  });
}

// Dynamic UI rendering of the Editor form
function renderEditor() {
  // Save state of currently open details before clearing DOM
  document.querySelectorAll('.editor-section').forEach(sec => {
    const title = sec.querySelector('.editor-section-title')?.textContent;
    if (title) {
      if (sec.open) {
        openEditorSections.add(title);
      } else {
        openEditorSections.delete(title);
      }
    }
  });

  const data = getActiveData();
  const editor = document.getElementById('editor-form');
  editor.innerHTML = '';

  // Update document title dynamically
  const currentUserName = data.header && data.header.name ? data.header.name.trim() : FALLBACK_NAME;
  document.title = `CV - ${currentUserName}`;

  // 0. Application tracking + JD matcher
  jdLiveRefresh = null;
  editor.appendChild(buildApplicationSection(data));

  // 1. Theme and Fonts Section
  const secTheme = createFormSection('Theme & Font (Màu sắc và Bố cục)');
  
  // Template Selection
  const grpTpl = document.createElement('div');
  grpTpl.className = 'form-group';
  grpTpl.innerHTML = `
    <label>Mẫu thiết kế CV (Chuẩn Quốc tế & IT)</label>
    <select class="form-control select-cv-template">
      <option value="harvard" ${(!data.theme.template || data.theme.template === 'harvard') ? 'selected' : ''}>Mẫu 1: Harvard Standard 🎓 (1 Cột Chuẩn IVY League / HBS)</option>
      <option value="slate-banner" ${data.theme.template === 'slate-banner' ? 'selected' : ''}>Mẫu 2: Modern Tech Slate 💼 (2 Cột Header Băng Nổi Bật)</option>
      <option value="silicon-valley" ${data.theme.template === 'silicon-valley' ? 'selected' : ''}>Mẫu 3: Silicon Valley Accent ⚡ (2 Cột Accent Vạch Màu Trái)</option>
      <option value="minimal" ${data.theme.template === 'minimal' ? 'selected' : ''}>Mẫu 4: Minimalist Engineering 📄 (1 Cột Tối giản Chuẩn ATS)</option>
    </select>
  `;
  grpTpl.querySelector('.select-cv-template').addEventListener('change', (e) => {
    data.theme.template = e.target.value;
    updateDataAndPreview();
  });
  secTheme.appendChild(grpTpl);

  // Font Family Selection (Typography Engine)
  const grpFont = document.createElement('div');
  grpFont.className = 'form-group';
  grpFont.innerHTML = `
    <label>Kiểu Font chữ (Typography Engine)</label>
    <select class="form-control select-cv-font">
      <option value="auto" ${(!data.theme.fontFamily || data.theme.fontFamily === 'auto') ? 'selected' : ''}>Tự động theo Mẫu (Auto Default)</option>
      <option value="lora" ${data.theme.fontFamily === 'lora' ? 'selected' : ''}>Lora (Serif Cổ điển & Sang trọng — Chuẩn Harvard)</option>
      <option value="inter" ${data.theme.fontFamily === 'inter' ? 'selected' : ''}>Inter (Sans UI/UX — Chuẩn Tech International)</option>
      <option value="dm-sans" ${data.theme.fontFamily === 'dm-sans' ? 'selected' : ''}>DM Sans (Geometric Modern — Tinh tế & Sắc nét)</option>
      <option value="roboto" ${data.theme.fontFamily === 'roboto' ? 'selected' : ''}>Roboto (Google Clean — Tiêu chuẩn & Dễ đọc)</option>
    </select>
  `;
  grpFont.querySelector('.select-cv-font').addEventListener('change', (e) => {
    data.theme.fontFamily = e.target.value;
    updateDataAndPreview();
  });
  secTheme.appendChild(grpFont);

  // Quick Color Schemes
  const grpSchemes = document.createElement('div');
  grpSchemes.className = 'form-group';
  grpSchemes.innerHTML = `
    <label>Chọn nhanh bảng màu (IT Schemes)</label>
    <div class="color-schemes">
      <button type="button" class="scheme-btn teal" data-primary="#0a6e68" data-light="#e4f2f1">Teal</button>
      <button type="button" class="scheme-btn navy" data-primary="#0c4a6e" data-light="#e0f2fe">Navy</button>
      <button type="button" class="scheme-btn emerald" data-primary="#065f46" data-light="#d1fae5">Emerald</button>
      <button type="button" class="scheme-btn slate" data-primary="#334155" data-light="#f1f5f9">Slate</button>
    </div>
  `;
  grpSchemes.querySelectorAll('.scheme-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      data.theme.primaryColor = e.target.getAttribute('data-primary');
      data.theme.lightColor = e.target.getAttribute('data-light');
      updateDataAndPreview();
      renderEditor();
    });
  });
  secTheme.appendChild(grpSchemes);

  secTheme.appendChild(createColorInput('Màu chủ đạo (Primary Color)', data.theme.primaryColor, val => {
    data.theme.primaryColor = val;
    updateDataAndPreview();
  }));
  secTheme.appendChild(createColorInput('Nền thẻ tag (Light BG)', data.theme.lightColor, val => {
    data.theme.lightColor = val;
    updateDataAndPreview();
  }));
  secTheme.appendChild(createColorInput('Màu chữ chính', data.theme.textColor, val => {
    data.theme.textColor = val;
    updateDataAndPreview();
  }));
  secTheme.appendChild(createColorInput('Màu chữ phụ (Muted)', data.theme.mutedColor, val => {
    data.theme.mutedColor = val;
    updateDataAndPreview();
  }));
  secTheme.appendChild(createColorInput('Màu chữ phụ 2 (Muted Light)', data.theme.mutedColor2, val => {
    data.theme.mutedColor2 = val;
    updateDataAndPreview();
  }));
  secTheme.appendChild(createColorInput('Màu đường viền (Border)', data.theme.borderColor, val => {
    data.theme.borderColor = val;
    updateDataAndPreview();
  }));
  secTheme.appendChild(createColorInput('Màu nền Sidebar', data.theme.sidebarBg, val => {
    data.theme.sidebarBg = val;
    updateDataAndPreview();
  }));
  // Spacing Density Mode Selection
  const grpSpacing = document.createElement('div');
  grpSpacing.className = 'form-group';
  grpSpacing.innerHTML = `
    <label>Mật độ khoảng cách (Spacing Density)</label>
    <select class="form-control select-spacing-mode">
      <option value="normal" ${data.theme.spacingMode === 'normal' ? 'selected' : ''}>Tiêu chuẩn (Normal Spacing)</option>
      <option value="compact" ${data.theme.spacingMode === 'compact' ? 'selected' : ''}>Rút gọn (Compact — Tối ưu vừa 1 trang A4)</option>
      <option value="tight" ${data.theme.spacingMode === 'tight' ? 'selected' : ''}>Siêu tối ưu (Tight — Dành cho CV nhiều chữ)</option>
    </select>
  `;
  grpSpacing.querySelector('.select-spacing-mode').addEventListener('change', (e) => {
    data.theme.spacingMode = e.target.value;
    updateDataAndPreview();
  });
  secTheme.appendChild(grpSpacing);

  secTheme.appendChild(createSliderInput('Cỡ chữ CV (pt)', 6, 14, 0.1, data.theme.fontSize, val => {
    data.theme.fontSize = val;
    updateDataAndPreview();
  }));
  editor.appendChild(secTheme);

  // 1.5. Section Titles & Language Presets
  const secTitles = createFormSection('Quản lý Tiêu đề & Ngôn ngữ CV (VI / EN)');
  
  const grpLangPreset = document.createElement('div');
  grpLangPreset.className = 'form-group';
  grpLangPreset.innerHTML = `
    <label>Áp dụng bộ Tiêu đề chuẩn (1-Click Preset):</label>
    <div style="display:flex; gap:0.5rem; margin-top:0.25rem; margin-bottom:0.75rem;">
      <button type="button" class="btn btn-secondary btn-sm preset-en" style="flex:1;">🇬🇧 Tiếng Anh chuẩn (Experience, Projects...)</button>
      <button type="button" class="btn btn-secondary btn-sm preset-vi" style="flex:1;">🇻🇳 Tiếng Việt chuẩn (Kinh nghiệm, Dự án...)</button>
    </div>
  `;
  grpLangPreset.querySelector('.preset-en').addEventListener('click', () => {
    data.theme.sectionTitles = {
      experience: 'Experience',
      projects: 'Projects',
      certifications: 'Certifications',
      education: 'Education',
      skills: 'Skills',
      languages: 'Languages'
    };
    updateDataAndPreview();
    renderEditor();
  });
  grpLangPreset.querySelector('.preset-vi').addEventListener('click', () => {
    data.theme.sectionTitles = {
      experience: 'Kinh nghiệm làm việc',
      projects: 'Dự án thực tế',
      certifications: 'Chứng chỉ chuyên môn',
      education: 'Học vấn & Bằng cấp',
      skills: 'Kỹ năng chuyên môn',
      languages: 'Ngoại ngữ'
    };
    updateDataAndPreview();
    renderEditor();
  });
  secTitles.appendChild(grpLangPreset);

  const tTitles = data.theme.sectionTitles || {};
  secTitles.appendChild(createTextInput('Tên mục Kinh nghiệm', tTitles.experience || 'Experience', val => {
    tTitles.experience = val;
    updateDataAndPreview();
  }));
  secTitles.appendChild(createTextInput('Tên mục Dự án', tTitles.projects || 'Projects', val => {
    tTitles.projects = val;
    updateDataAndPreview();
  }));
  secTitles.appendChild(createTextInput('Tên mục Chứng chỉ', tTitles.certifications || 'Certifications', val => {
    tTitles.certifications = val;
    updateDataAndPreview();
  }));
  secTitles.appendChild(createTextInput('Tên mục Học vấn', tTitles.education || 'Education', val => {
    tTitles.education = val;
    updateDataAndPreview();
  }));
  secTitles.appendChild(createTextInput('Tên mục Kỹ năng', tTitles.skills || 'Skills', val => {
    tTitles.skills = val;
    updateDataAndPreview();
  }));
  secTitles.appendChild(createTextInput('Tên mục Ngoại ngữ', tTitles.languages || 'Languages', val => {
    tTitles.languages = val;
    updateDataAndPreview();
  }));
  editor.appendChild(secTitles);

  // 1.6. Section Ordering Section
  const secOrder = createFormSection('Thứ tự hiển thị các Phần lớn (Section Ordering)');
  const orderHelp = document.createElement('p');
  orderHelp.className = 'helper-text mb-2';
  orderHelp.innerHTML = 'Thay đổi thứ tự hiển thị các mục lớn. VD: Đẩy <strong>Kỹ năng (Skills)</strong> hoặc <strong>Dự án (Projects)</strong> lên vị trí ưu tiên đầu tiên.';
  secOrder.appendChild(orderHelp);

  const sectionNameMap = {
    experience: 'Kinh nghiệm làm việc (Experience)',
    projects: 'Dự án (Projects)',
    certifications: 'Chứng chỉ (Certifications)',
    education: 'Học vấn (Education)',
    skills: 'Kỹ năng (Skills)',
    languages: 'Ngoại ngữ (Languages)',
    customSections: 'Mục bổ sung (Custom Sections)'
  };

  // Main Column Ordering
  const lblMainOrder = document.createElement('label');
  lblMainOrder.style.fontWeight = '600';
  lblMainOrder.style.fontSize = '0.8rem';
  lblMainOrder.style.display = 'block';
  lblMainOrder.style.marginTop = '0.5rem';
  lblMainOrder.textContent = 'Thứ tự các mục ở Cột chính (Main Column):';
  secOrder.appendChild(lblMainOrder);

  const mainListDiv = document.createElement('div');
  mainListDiv.className = 'section-reorder-list mb-3';

  data.theme.sectionOrderMain.forEach((key, idx) => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'section-reorder-item';
    itemDiv.innerHTML = `
      <span><strong>#${idx + 1}</strong> ${sectionNameMap[key] || key}</span>
      <div class="card-actions">
        <button type="button" class="btn-icon btn-move-up" title="Di chuyển lên" ${idx === 0 ? 'disabled' : ''}>↑</button>
        <button type="button" class="btn-icon btn-move-down" title="Di chuyển xuống" ${idx === data.theme.sectionOrderMain.length - 1 ? 'disabled' : ''}>↓</button>
      </div>
    `;
    bindMoveActions(itemDiv, data.theme.sectionOrderMain, idx);
    addSectionHideToggle(itemDiv, data, key);
    mainListDiv.appendChild(itemDiv);
  });
  secOrder.appendChild(mainListDiv);

  // Side Column Ordering
  const lblSideOrder = document.createElement('label');
  lblSideOrder.style.fontWeight = '600';
  lblSideOrder.style.fontSize = '0.8rem';
  lblSideOrder.style.display = 'block';
  lblSideOrder.style.marginTop = '0.5rem';
  lblSideOrder.textContent = 'Thứ tự các mục ở Cột phụ (Sidebar Column):';
  secOrder.appendChild(lblSideOrder);

  const sideListDiv = document.createElement('div');
  sideListDiv.className = 'section-reorder-list';

  data.theme.sectionOrderSide.forEach((key, idx) => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'section-reorder-item';
    itemDiv.innerHTML = `
      <span><strong>#${idx + 1}</strong> ${sectionNameMap[key] || key}</span>
      <div class="card-actions">
        <button type="button" class="btn-icon btn-move-up" title="Di chuyển lên" ${idx === 0 ? 'disabled' : ''}>↑</button>
        <button type="button" class="btn-icon btn-move-down" title="Di chuyển xuống" ${idx === data.theme.sectionOrderSide.length - 1 ? 'disabled' : ''}>↓</button>
      </div>
    `;
    bindMoveActions(itemDiv, data.theme.sectionOrderSide, idx);
    addSectionHideToggle(itemDiv, data, key);
    sideListDiv.appendChild(itemDiv);
  });
  secOrder.appendChild(sideListDiv);
  editor.appendChild(secOrder);

  // 1.7. ATS & STAR Guide Widget
  const secAtsGuide = createFormSection('💡 Mẹo viết CV IT chuẩn ATS & STAR');
  const atsContent = document.createElement('div');
  atsContent.style.fontSize = '0.78rem';
  atsContent.style.lineHeight = '1.5';
  atsContent.style.color = 'var(--app-text-muted)';
  atsContent.innerHTML = `
    <p style="margin-bottom:0.4rem;"><strong style="color:var(--app-primary);">1. Quy tắc STAR viết gạch đầu dòng:</strong></p>
    <ul style="padding-left:1.2rem; margin-bottom:0.6rem;">
      <li><strong>Situation:</strong> Bối cảnh / Vấn đề hệ thống cần giải quyết.</li>
      <li><strong>Task:</strong> Mục tiêu kỹ thuật cần đạt được.</li>
      <li><strong>Action:</strong> Đã triển khai gì, dùng công nghệ nào (VD: <em>OPNsense, Python, AWS</em>).</li>
      <li><strong>Result:</strong> Số liệu đo lường thực tế (VD: <em>2.8s failover, 100% DR, 80% RAM reduction</em>).</li>
    </ul>
    <p style="margin-bottom:0.4rem;"><strong style="color:var(--app-primary);">2. Mẹo tối ưu máy quét ATS:</strong></p>
    <ul style="padding-left:1.2rem;">
      <li>Dùng <code>&lt;strong&gt;tên_công_nghệ&lt;/strong&gt;</code> để in đậm từ khóa kỹ thuật.</li>
      <li>Giữ CV nằm gọn trong <strong>1 trang A4 chuẩn</strong> (theo dõi thanh trạng thái <em>A4 Live Preview</em> ở góc trên).</li>
      <li>Đính kèm các liên kết Credly / GitHub / Portfolio để ATS trích xuất thông tin tự động.</li>
    </ul>
  `;
  secAtsGuide.appendChild(atsContent);
  editor.appendChild(secAtsGuide);

  // 2. Header Section (Fully Dynamic Contacts with Add, Reorder, Delete)
  const secHeader = createFormSection('Thông tin cá nhân');
  secHeader.appendChild(createTextInput('Họ và Tên', data.header.name, val => {
    data.header.name = val;
    document.title = `CV - ${val.trim() || FALLBACK_NAME}`;
    updateDataAndPreview();
  }));
  secHeader.appendChild(createTextInput('Chức danh / Chuyên môn', data.header.role, val => {
    data.header.role = val;
    updateDataAndPreview();
  }));
  secHeader.appendChild(createTextareaInput('Tóm tắt giới thiệu', data.header.summary, val => {
    data.header.summary = val;
    updateDataAndPreview();
  }));

  // Contact items container
  const lblContacts = document.createElement('label');
  lblContacts.className = 'mt-2 mb-1';
  lblContacts.style.display = 'block';
  lblContacts.style.fontWeight = '600';
  lblContacts.style.fontSize = '0.8rem';
  lblContacts.style.color = 'var(--app-text)';
  lblContacts.textContent = 'Danh sách thông tin liên hệ & cá nhân (SĐT, Email, Ngày sinh, Social...):';
  secHeader.appendChild(lblContacts);

  const contactsContainer = document.createElement('div');
  contactsContainer.className = 'list-items-container';

  data.header.contacts.forEach((contact, index) => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
      <div class="card-header">
        <span>Thông tin #${index + 1}: ${escapeHtml(contact.label || contact.value || 'Trống')}</span>
        <div class="card-actions">
          <button type="button" class="btn-icon btn-move-up" title="Di chuyển lên" ${index === 0 ? 'disabled' : ''}>↑</button>
          <button type="button" class="btn-icon btn-move-down" title="Di chuyển xuống" ${index === data.header.contacts.length - 1 ? 'disabled' : ''}>↓</button>
          <button type="button" class="btn-icon btn-delete text-danger" title="Xóa">✕</button>
        </div>
      </div>
      <div class="card-body"></div>
    `;

    const cardBody = card.querySelector('.card-body');
    
    const row = document.createElement('div');
    row.className = 'form-group-row';
    row.appendChild(createTextInput('Nhãn (VD: Ngày sinh, SĐT, Email)', contact.label || '', val => {
      contact.label = val;
      updateDataAndPreview();
      card.querySelector('.card-header span').textContent = `Thông tin #${index + 1}: ${val || contact.value || 'Trống'}`;
    }, 'half'));
    
    row.appendChild(createTextInput('Nội dung hiển thị (VD: 15/10/2004)', contact.value || '', val => {
      contact.value = val;
      updateDataAndPreview();
    }, 'half'));
    cardBody.appendChild(row);

    cardBody.appendChild(createTextInput('Đường dẫn Link (Không bắt buộc, VD: tel:..., https://...)', contact.link || '', val => {
      contact.link = val;
      updateDataAndPreview();
    }));

    // Actions
    bindDeleteAction(card, '.btn-delete', data.header.contacts, index, () => 'Xóa thông tin này?');
    bindMoveActions(card, data.header.contacts, index);

    contactsContainer.appendChild(card);
  });

  const btnAddContact = document.createElement('button');
  btnAddContact.type = 'button';
  btnAddContact.className = 'btn btn-secondary btn-block mt-2';
  btnAddContact.innerHTML = '+ Thêm thông tin liên hệ / cá nhân';
  btnAddContact.addEventListener('click', () => {
    openEditorSections.add('Thông tin cá nhân');
    data.header.contacts.push({
      label: 'Thông tin mới',
      value: 'Nội dung',
      link: ''
    });
    updateDataAndPreview();
    renderEditor();
  });

  secHeader.appendChild(contactsContainer);
  secHeader.appendChild(btnAddContact);
  editor.appendChild(secHeader);

  // 3. Experience Section
  const secExp = createFormSection('Kinh nghiệm làm việc');
  const expContainer = document.createElement('div');
  expContainer.className = 'list-items-container';
  
  data.experience.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
      <div class="card-header">
        <span>Kinh nghiệm #${index + 1}: ${escapeHtml(item.company || 'Trống')}</span>
        <div class="card-actions">
          <button type="button" class="btn-icon btn-move-up" title="Di chuyển lên" ${index === 0 ? 'disabled' : ''}>↑</button>
          <button type="button" class="btn-icon btn-move-down" title="Di chuyển xuống" ${index === data.experience.length - 1 ? 'disabled' : ''}>↓</button>
          <button type="button" class="btn-icon btn-delete text-danger" title="Xóa">✕</button>
        </div>
      </div>
      <div class="card-body"></div>
    `;

    const cardBody = card.querySelector('.card-body');
    cardBody.appendChild(createTextInput('Công ty', item.company, val => {
      item.company = val;
      updateDataAndPreview();
      card.querySelector('.card-header span').textContent = `Kinh nghiệm #${index + 1}: ${val || 'Trống'}`;
    }));

    const row = document.createElement('div');
    row.className = 'form-group-row';
    row.appendChild(createTextInput('Chức vụ', item.role, val => {
      item.role = val;
      updateDataAndPreview();
    }, 'half'));
    row.appendChild(createTextInput('Thời gian', item.date, val => {
      item.date = val;
      updateDataAndPreview();
    }, 'half'));
    cardBody.appendChild(row);

    cardBody.appendChild(createTextInput('Địa điểm', item.location, val => {
      item.location = val;
      updateDataAndPreview();
    }));

    cardBody.appendChild(createBulletListInput('Các công việc chính (Hỗ trợ định dạng HTML như &lt;strong&gt;)', item.bullets, () => {
      updateDataAndPreview();
    }));

    bindDeleteAction(card, '.btn-delete', data.experience, index, () => 'Xóa mục kinh nghiệm này?');
    bindMoveActions(card, data.experience, index);
    addHideToggle(card, data.experience, index);

    expContainer.appendChild(card);
  });

  const btnAddExp = document.createElement('button');
  btnAddExp.type = 'button';
  btnAddExp.className = 'btn btn-secondary btn-block mt-2';
  btnAddExp.innerHTML = '+ Thêm kinh nghiệm làm việc';
  btnAddExp.addEventListener('click', () => {
    openEditorSections.add('Kinh nghiệm làm việc');
    data.experience.push({
      company: 'Công ty mới',
      date: 'Tháng/Năm – Tháng/Năm',
      role: 'Chức vụ',
      location: 'Địa chỉ',
      bullets: ['Nội dung công việc 1']
    });
    updateDataAndPreview();
    renderEditor();
  });

  secExp.appendChild(expContainer);
  secExp.appendChild(btnAddExp);
  editor.appendChild(secExp);

  // 4. Projects Section
  const secProj = createFormSection('Dự án');
  const projContainer = document.createElement('div');
  projContainer.className = 'list-items-container';

  data.projects.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
      <div class="card-header">
        <span>Dự án #${index + 1}: ${escapeHtml(item.name || 'Trống')}</span>
        <div class="card-actions">
          <button type="button" class="btn-icon btn-move-up" title="Di chuyển lên" ${index === 0 ? 'disabled' : ''}>↑</button>
          <button type="button" class="btn-icon btn-move-down" title="Di chuyển xuống" ${index === data.projects.length - 1 ? 'disabled' : ''}>↓</button>
          <button type="button" class="btn-icon btn-delete text-danger" title="Xóa">✕</button>
        </div>
      </div>
      <div class="card-body"></div>
    `;

    const cardBody = card.querySelector('.card-body');
    cardBody.appendChild(createTextInput('Tên dự án', item.name, val => {
      item.name = val;
      updateDataAndPreview();
      card.querySelector('.card-header span').textContent = `Dự án #${index + 1}: ${val || 'Trống'}`;
    }));

    const row = document.createElement('div');
    row.className = 'form-group-row';
    row.appendChild(createTextInput('Chú thích (Ví dụ: Đồ án tốt nghiệp)', item.subtitle, val => {
      item.subtitle = val;
      updateDataAndPreview();
    }, 'half'));
    row.appendChild(createTextInput('Thời gian', item.date, val => {
      item.date = val;
      updateDataAndPreview();
    }, 'half'));
    cardBody.appendChild(row);

    cardBody.appendChild(createBulletListInput('Mô tả chi tiết công việc', item.bullets, () => {
      updateDataAndPreview();
    }));

    const tagText = item.tags ? item.tags.join(', ') : '';
    cardBody.appendChild(createTextInput('Thẻ tags công nghệ (ngăn cách bởi dấu phẩy)', tagText, val => {
      item.tags = val.split(',').map(s => s.trim()).filter(s => s.length > 0);
      updateDataAndPreview();
    }));

    bindDeleteAction(card, '.btn-delete', data.projects, index, () => 'Xóa dự án này?');
    bindMoveActions(card, data.projects, index);
    addHideToggle(card, data.projects, index);

    projContainer.appendChild(card);
  });

  const btnAddProj = document.createElement('button');
  btnAddProj.type = 'button';
  btnAddProj.className = 'btn btn-secondary btn-block mt-2';
  btnAddProj.innerHTML = '+ Thêm dự án mới';
  btnAddProj.addEventListener('click', () => {
    openEditorSections.add('Dự án');
    data.projects.push({
      name: 'Tên dự án mới',
      subtitle: 'Chú thích',
      date: 'Thời gian',
      bullets: ['Nội dung dự án 1'],
      tags: ['Tag 1', 'Tag 2']
    });
    updateDataAndPreview();
    renderEditor();
  });

  secProj.appendChild(projContainer);
  secProj.appendChild(btnAddProj);
  editor.appendChild(secProj);

  // 5. Certifications Section
  const secCert = createFormSection('Chứng chỉ');
  const certContainer = document.createElement('div');
  certContainer.className = 'list-items-container';

  data.certifications.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
      <div class="card-header">
        <span>Chứng chỉ #${index + 1}: ${escapeHtml(item.name || 'Trống')}</span>
        <div class="card-actions">
          <button type="button" class="btn-icon btn-move-up" title="Di chuyển lên" ${index === 0 ? 'disabled' : ''}>↑</button>
          <button type="button" class="btn-icon btn-move-down" title="Di chuyển xuống" ${index === data.certifications.length - 1 ? 'disabled' : ''}>↓</button>
          <button type="button" class="btn-icon btn-delete text-danger" title="Xóa">✕</button>
        </div>
      </div>
      <div class="card-body"></div>
    `;

    const cardBody = card.querySelector('.card-body');
    cardBody.appendChild(createTextInput('Tên chứng chỉ', item.name, val => {
      item.name = val;
      updateDataAndPreview();
      card.querySelector('.card-header span').textContent = `Chứng chỉ #${index + 1}: ${val || 'Trống'}`;
    }));

    const row = document.createElement('div');
    row.className = 'form-group-row';
    row.appendChild(createTextInput('Đơn vị cấp (Issuer)', item.issuer, val => {
      item.issuer = val;
      updateDataAndPreview();
    }, 'half'));
    row.appendChild(createTextInput('Năm cấp', item.date, val => {
      item.date = val;
      updateDataAndPreview();
    }, 'half'));
    cardBody.appendChild(row);

    cardBody.appendChild(createTextInput('Đường dẫn chứng chỉ (Credential URL)', item.link || '', val => {
      item.link = val;
      updateDataAndPreview();
    }));

    bindDeleteAction(card, '.btn-delete', data.certifications, index, () => 'Xóa chứng chỉ này?');
    bindMoveActions(card, data.certifications, index);
    addHideToggle(card, data.certifications, index);

    certContainer.appendChild(card);
  });

  const btnAddCert = document.createElement('button');
  btnAddCert.type = 'button';
  btnAddCert.className = 'btn btn-secondary btn-block mt-2';
  btnAddCert.innerHTML = '+ Thêm chứng chỉ';
  btnAddCert.addEventListener('click', () => {
    openEditorSections.add('Chứng chỉ');
    data.certifications.push({
      name: 'Chứng chỉ mới',
      issuer: 'Cơ quan cấp',
      date: '2026',
      link: ''
    });
    updateDataAndPreview();
    renderEditor();
  });

  secCert.appendChild(certContainer);
  secCert.appendChild(btnAddCert);
  editor.appendChild(secCert);

  // 6. Education Section (Dynamic List with Add, Move, Delete)
  const secEdu = createFormSection('Học vấn');
  const eduContainer = document.createElement('div');
  eduContainer.className = 'list-items-container';

  data.education.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
      <div class="card-header">
        <span>Học vấn #${index + 1}: ${escapeHtml(item.school || 'Trống')}</span>
        <div class="card-actions">
          <button type="button" class="btn-icon btn-move-up" title="Di chuyển lên" ${index === 0 ? 'disabled' : ''}>↑</button>
          <button type="button" class="btn-icon btn-move-down" title="Di chuyển xuống" ${index === data.education.length - 1 ? 'disabled' : ''}>↓</button>
          <button type="button" class="btn-icon btn-delete text-danger" title="Xóa">✕</button>
        </div>
      </div>
      <div class="card-body"></div>
    `;

    const cardBody = card.querySelector('.card-body');
    cardBody.appendChild(createTextInput('Trường học / Cơ sở đào tạo', item.school, val => {
      item.school = val;
      updateDataAndPreview();
      card.querySelector('.card-header span').textContent = `Học vấn #${index + 1}: ${val || 'Trống'}`;
    }));
    cardBody.appendChild(createTextInput('Ngành học / Bằng cấp', item.degree, val => {
      item.degree = val;
      updateDataAndPreview();
    }));
    cardBody.appendChild(createTextInput('GPA / Chú thích & Thời gian', item.details, val => {
      item.details = val;
      updateDataAndPreview();
    }));

    bindDeleteAction(card, '.btn-delete', data.education, index, () => 'Xóa mục học vấn này?');
    bindMoveActions(card, data.education, index);
    addHideToggle(card, data.education, index);

    eduContainer.appendChild(card);
  });

  const btnAddEdu = document.createElement('button');
  btnAddEdu.type = 'button';
  btnAddEdu.className = 'btn btn-secondary btn-block mt-2';
  btnAddEdu.textContent = '+ Thêm mục học vấn';
  btnAddEdu.addEventListener('click', () => {
    openEditorSections.add('Học vấn');
    data.education.push({
      school: 'Trường học mới',
      degree: 'Bằng cấp / Chuyên ngành',
      details: 'Thời gian & GPA'
    });
    updateDataAndPreview();
    renderEditor();
  });

  secEdu.appendChild(eduContainer);
  secEdu.appendChild(btnAddEdu);
  editor.appendChild(secEdu);

  // 7. Skills Section
  const secSkills = createFormSection('Kỹ năng');

  // Skill Display Style selector
  const grpSkillStyle = document.createElement('div');
  grpSkillStyle.className = 'form-group mb-3';
  grpSkillStyle.innerHTML = `
    <label style="font-weight:600; color:var(--app-text);">Kiểu hiển thị Kỹ năng (Skill Layout Style):</label>
    <select class="form-control select-skill-style">
      <option value="pills" ${(!data.theme.skillStyle || data.theme.skillStyle === 'pills') ? 'selected' : ''}>Mẫu 1: Thẻ Tag / Pills (Mặc định — Nổi bật & Hiện đại)</option>
      <option value="text" ${data.theme.skillStyle === 'text' ? 'selected' : ''}>Mẫu 2: Dạng Liệt kê Chữ (Inline Text — Siêu tiết kiệm diện tích & chuẩn ATS)</option>
      <option value="bullets" ${data.theme.skillStyle === 'bullets' ? 'selected' : ''}>Mẫu 3: Dạng Gạch đầu dòng (Compact Bullets — Rõ ràng theo hàng)</option>
    </select>
  `;
  grpSkillStyle.querySelector('.select-skill-style').addEventListener('change', (e) => {
    data.theme.skillStyle = e.target.value;
    updateDataAndPreview();
  });
  secSkills.appendChild(grpSkillStyle);

  const skillsContainer = document.createElement('div');
  skillsContainer.className = 'skills-editor-container';

  data.skills.forEach((skillCat, catIdx) => {
    const catDiv = document.createElement('div');
    catDiv.className = 'skill-category-box';
    
    // Format items to comma-separated text
    const textVal = (skillCat.items || []).map(item => {
      if (typeof item === 'string') return item;
      return (item.name || '') + (item.primary ? '*' : '');
    }).filter(s => s.length > 0).join(', ');

    catDiv.innerHTML = `
      <div class="skill-cat-header">
        <input type="text" class="input-inline input-cat-name" value="${escapeHtml(skillCat.category)}" title="Tên nhóm kỹ năng">
        <div class="card-actions">
          <button type="button" class="btn-icon btn-move-up" title="Di chuyển lên" ${catIdx === 0 ? 'disabled' : ''}>↑</button>
          <button type="button" class="btn-icon btn-move-down" title="Di chuyển xuống" ${catIdx === data.skills.length - 1 ? 'disabled' : ''}>↓</button>
          <button type="button" class="btn-icon text-danger btn-delete-cat" title="Xóa nhóm kỹ năng">✕</button>
        </div>
      </div>
      <div class="form-group mb-1">
        <textarea class="form-control input-cat-skills" rows="2" placeholder="VD: TCP/IP*, Routing/Switching*, SD-WAN, Cisco IOS">${escapeHtml(textVal)}</textarea>
      </div>
      <div class="helper-text">Liệt kê các kỹ năng phân cách bởi dấu phẩy. Thêm dấu <strong>*</strong> vào sau để in đậm (VD: <code>TCP/IP*, OSPF</code>).</div>
    `;

    // Category name rename
    catDiv.querySelector('.input-cat-name').addEventListener('input', (e) => {
      skillCat.category = e.target.value;
      updateDataAndPreview();
    });

    // Parse comma-separated skills textarea
    catDiv.querySelector('.input-cat-skills').addEventListener('input', (e) => {
      const rawText = e.target.value;
      const parsedItems = rawText.split(',').map(s => s.trim()).filter(s => s.length > 0).map(s => {
        if (s.endsWith('*')) {
          return { name: s.slice(0, -1).trim(), primary: true };
        }
        return { name: s, primary: false };
      });
      skillCat.items = parsedItems;
      updateDataAndPreview();
    });

    bindMoveActions(catDiv, data.skills, catIdx);
    addHideToggle(catDiv, data.skills, catIdx);


    // Delete category
    bindDeleteAction(catDiv, '.btn-delete-cat', data.skills, catIdx, () => `Xóa toàn bộ nhóm kỹ năng "${skillCat.category}"?`);

    skillsContainer.appendChild(catDiv);
  });

  const btnAddCat = document.createElement('button');
  btnAddCat.type = 'button';
  btnAddCat.className = 'btn btn-secondary btn-block mt-2';
  btnAddCat.textContent = '+ Thêm nhóm kỹ năng mới';
  btnAddCat.addEventListener('click', () => {
    openEditorSections.add('Kỹ năng');
    data.skills.push({
      category: 'Nhóm kỹ năng mới',
      items: []
    });
    updateDataAndPreview();
    renderEditor();
  });

  secSkills.appendChild(skillsContainer);
  secSkills.appendChild(btnAddCat);
  editor.appendChild(secSkills);

  // 8. Languages Section (Dynamic List with Add, Move, Delete)
  const secLang = createFormSection('Ngoại ngữ');
  const langContainer = document.createElement('div');
  langContainer.className = 'list-items-container';

  data.languages.forEach((item, index) => {
    const row = document.createElement('div');
    row.className = 'form-group-row items-row-align mb-1';
    row.innerHTML = `
      <div style="flex: 2;">
        <input type="text" class="form-control lang-name-input" placeholder="Ngôn ngữ" value="${escapeHtml(item.name)}">
      </div>
      <div style="flex: 2;">
        <input type="text" class="form-control lang-level-input" placeholder="Trình độ (VD: Bản xứ, IELTS 6.5)" value="${escapeHtml(item.level)}">
      </div>
      <div class="card-actions" style="flex: 0.8; justify-content: flex-end;">
        <button type="button" class="btn-icon btn-move-up" title="Di chuyển lên" ${index === 0 ? 'disabled' : ''}>↑</button>
        <button type="button" class="btn-icon btn-move-down" title="Di chuyển xuống" ${index === data.languages.length - 1 ? 'disabled' : ''}>↓</button>
        <button type="button" class="btn-icon text-danger btn-delete-lang" title="Xóa">✕</button>
      </div>
    `;

    row.querySelector('.lang-name-input').addEventListener('input', (e) => {
      item.name = e.target.value;
      updateDataAndPreview();
    });
    row.querySelector('.lang-level-input').addEventListener('input', (e) => {
      item.level = e.target.value;
      updateDataAndPreview();
    });
    bindDeleteAction(row, '.btn-delete-lang', data.languages, index);
    bindMoveActions(row, data.languages, index);
    addHideToggle(row, data.languages, index);

    langContainer.appendChild(row);
  });

  const btnAddLang = document.createElement('button');
  btnAddLang.type = 'button';
  btnAddLang.className = 'btn btn-secondary btn-block mt-2';
  btnAddLang.textContent = '+ Thêm ngoại ngữ';
  btnAddLang.addEventListener('click', () => {
    openEditorSections.add('Ngoại ngữ');
    data.languages.push({ name: 'Tên ngôn ngữ', level: 'Trình độ' });
    updateDataAndPreview();
    renderEditor();
  });

  secLang.appendChild(langContainer);
  secLang.appendChild(btnAddLang);
  editor.appendChild(secLang);

  // 9. Custom Sections (Mục bổ sung / Tùy chỉnh)
  const secCustom = createFormSection('Các mục bổ sung / Tùy chỉnh (Hoạt động, Giải thưởng...)');
  const customContainer = document.createElement('div');
  customContainer.className = 'list-items-container';

  data.customSections.forEach((cSec, secIdx) => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
      <div class="card-header">
        <span>Mục tùy chỉnh #${secIdx + 1}: ${escapeHtml(cSec.title || 'Trống')}</span>
        <div class="card-actions">
          <button type="button" class="btn-icon btn-move-up" title="Di chuyển lên" ${secIdx === 0 ? 'disabled' : ''}>↑</button>
          <button type="button" class="btn-icon btn-move-down" title="Di chuyển xuống" ${secIdx === data.customSections.length - 1 ? 'disabled' : ''}>↓</button>
          <button type="button" class="btn-icon btn-delete text-danger" title="Xóa">✕</button>
        </div>
      </div>
      <div class="card-body"></div>
    `;

    const cardBody = card.querySelector('.card-body');
    cardBody.appendChild(createTextInput('Tiêu đề mục (VD: Giải thưởng, Hoạt động ngoại khóa)', cSec.title, val => {
      cSec.title = val;
      updateDataAndPreview();
      card.querySelector('.card-header span').textContent = `Mục tùy chỉnh #${secIdx + 1}: ${val || 'Trống'}`;
    }));

    if (!cSec.bullets) cSec.bullets = [];
    cardBody.appendChild(createBulletListInput('Nội dung gạch đầu dòng', cSec.bullets, () => {
      updateDataAndPreview();
    }));

    bindDeleteAction(card, '.btn-delete', data.customSections, secIdx, () => `Xóa mục tùy chỉnh "${cSec.title}"?`);
    bindMoveActions(card, data.customSections, secIdx);
    addHideToggle(card, data.customSections, secIdx);

    customContainer.appendChild(card);
  });

  const btnAddCustom = document.createElement('button');
  btnAddCustom.type = 'button';
  btnAddCustom.className = 'btn btn-secondary btn-block mt-2';
  btnAddCustom.textContent = '+ Thêm mục tùy chỉnh mới';
  btnAddCustom.addEventListener('click', () => {
    openEditorSections.add('Các mục bổ sung / Tùy chỉnh (Hoạt động, Giải thưởng...)');
    data.customSections.push({
      title: 'Tiêu đề mục mới',
      bullets: ['Nội dung gạch đầu dòng 1']
    });
    updateDataAndPreview();
    renderEditor();
  });

  secCustom.appendChild(customContainer);
  secCustom.appendChild(btnAddCustom);
  editor.appendChild(secCustom);
}

// Editor DOM Helpers
function createFormSection(title) {
  const details = document.createElement('details');
  details.className = 'editor-section';
  details.open = openEditorSections.has(title);
  
  details.addEventListener('toggle', () => {
    if (details.open) {
      openEditorSections.add(title);
    } else {
      openEditorSections.delete(title);
    }
  });

  const summary = document.createElement('summary');
  summary.className = 'editor-section-title';
  summary.textContent = title;
  
  details.appendChild(summary);
  return details;
}

function createTextInput(label, value, onChange, size = 'full') {
  const grp = document.createElement('div');
  grp.className = `form-group ${size}`;
  
  const lbl = document.createElement('label');
  lbl.textContent = label;
  
  const input = document.createElement('input');
  input.type = 'text';
  input.className = 'form-control';
  input.value = value || '';
  input.addEventListener('input', (e) => onChange(e.target.value));
  
  grp.appendChild(lbl);
  grp.appendChild(input);
  return grp;
}

function createTextareaInput(label, value, onChange) {
  const grp = document.createElement('div');
  grp.className = 'form-group';
  
  const lbl = document.createElement('label');
  lbl.textContent = label;
  
  const textarea = document.createElement('textarea');
  textarea.className = 'form-control';
  textarea.rows = 3;
  textarea.value = value || '';
  textarea.addEventListener('input', (e) => onChange(e.target.value));
  
  grp.appendChild(lbl);
  grp.appendChild(textarea);
  return grp;
}

function createColorInput(label, value, onChange) {
  const grp = document.createElement('div');
  grp.className = 'form-group form-group-color';
  
  const lbl = document.createElement('label');
  lbl.textContent = label;
  
  const pickerContainer = document.createElement('div');
  pickerContainer.className = 'color-picker-container';

  const input = document.createElement('input');
  input.type = 'color';
  input.value = value;
  input.addEventListener('input', (e) => {
    txt.value = e.target.value;
    onChange(e.target.value);
  });
  
  const txt = document.createElement('input');
  txt.type = 'text';
  txt.className = 'form-control form-control-color-text';
  txt.value = value;
  txt.addEventListener('input', (e) => {
    if (e.target.value.match(/^#[0-9A-Fa-f]{6}$/)) {
      input.value = e.target.value;
      onChange(e.target.value);
    }
  });

  pickerContainer.appendChild(input);
  pickerContainer.appendChild(txt);
  
  grp.appendChild(lbl);
  grp.appendChild(pickerContainer);
  return grp;
}

function createSliderInput(label, min, max, step, value, onChange) {
  const grp = document.createElement('div');
  grp.className = 'form-group';
  
  const lbl = document.createElement('label');
  lbl.innerHTML = `${label}: <span class="slider-val-display">${value}</span>`;
  
  const container = document.createElement('div');
  container.className = 'slider-container';

  const slider = document.createElement('input');
  slider.type = 'range';
  slider.min = min;
  slider.max = max;
  slider.step = step;
  slider.value = value;
  slider.className = 'form-slider';
  
  slider.addEventListener('input', (e) => {
    grp.querySelector('.slider-val-display').textContent = e.target.value;
    onChange(e.target.value);
  });
  
  container.appendChild(slider);
  grp.appendChild(lbl);
  grp.appendChild(container);
  return grp;
}

function createBulletListInput(label, bullets, onUpdate) {
  const grp = document.createElement('div');
  grp.className = 'form-group';
  
  const lbl = document.createElement('label');
  lbl.innerHTML = label;
  grp.appendChild(lbl);

  const container = document.createElement('div');
  container.className = 'bullet-inputs-list';

  const renderBullets = () => {
    container.innerHTML = '';
    bullets.forEach((bullet, idx) => {
      const itemRow = document.createElement('div');
      itemRow.className = 'bullet-item-row';
      itemRow.innerHTML = `
        <div style="flex: 1;">
          <textarea class="form-control bullet-text-input" rows="2" placeholder="Nhập nội dung gạch đầu dòng...">${escapeHtml(bulletText(bullet))}</textarea>
        </div>
        <div class="bullet-row-actions">
          <button type="button" class="btn-icon btn-bullet-hide"></button>
          <button type="button" class="btn-icon btn-bullet-up" ${idx === 0 ? 'disabled' : ''}>↑</button>
          <button type="button" class="btn-icon btn-bullet-down" ${idx === bullets.length - 1 ? 'disabled' : ''}>↓</button>
          <button type="button" class="btn-icon btn-bullet-delete text-danger">✕</button>
        </div>
      `;

      itemRow.querySelector('.bullet-text-input').addEventListener('input', (e) => {
        // keep the hidden marker when the bullet is currently hidden
        bullets[idx] = (isHiddenBullet(bullets[idx]) ? HIDDEN_MARK : '') + e.target.value;
        onUpdate();
      });

      const hideBtn = itemRow.querySelector('.btn-bullet-hide');
      hideBtn.classList.add('btn-hide-toggle');
      const applyHide = () => {
        const off = isHiddenBullet(bullets[idx]);
        setHideButtonState(hideBtn, off, 'Dòng này');
        itemRow.classList.toggle('is-hidden-item', off);
      };
      hideBtn.addEventListener('click', () => {
        bullets[idx] = isHiddenBullet(bullets[idx]) ? bulletText(bullets[idx]) : HIDDEN_MARK + bullets[idx];
        applyHide();
        onUpdate();
      });
      applyHide();

      itemRow.querySelector('.btn-bullet-delete').addEventListener('click', () => {
        bullets.splice(idx, 1);
        onUpdate();
        renderBullets();
      });

      if (idx > 0) {
        itemRow.querySelector('.btn-bullet-up').addEventListener('click', () => {
          const temp = bullets[idx];
          bullets[idx] = bullets[idx - 1];
          bullets[idx - 1] = temp;
          onUpdate();
          renderBullets();
        });
      }
      if (idx < bullets.length - 1) {
        itemRow.querySelector('.btn-bullet-down').addEventListener('click', () => {
          const temp = bullets[idx];
          bullets[idx] = bullets[idx + 1];
          bullets[idx + 1] = temp;
          onUpdate();
          renderBullets();
        });
      }

      container.appendChild(itemRow);
    });
  };

  renderBullets();

  const btnAdd = document.createElement('button');
  btnAdd.type = 'button';
  btnAdd.className = 'btn btn-secondary btn-sm mt-1';
  btnAdd.textContent = '+ Thêm gạch đầu dòng';
  btnAdd.addEventListener('click', () => {
    bullets.push('Gạch đầu dòng mới');
    onUpdate();
    renderBullets();
  });

  grp.appendChild(container);
  grp.appendChild(btnAdd);
  return grp;
}

// Live Preview Updater
function updatePreview() {
  const data = visibleData(getActiveData());
  const preview = document.getElementById('preview-cv');
  
  if (!preview) return;

  // Sync document title to user's name
  const userName = data.header && data.header.name ? data.header.name.trim() : FALLBACK_NAME;
  document.title = `CV - ${userName}`;

  // Set Template & Spacing Density Class
  const activeTemplate = data.theme.template || 'harvard';
  const spacingMode = data.theme.spacingMode || 'normal';
  preview.className = `page tpl-${activeTemplate} density-${spacingMode}`;

  // Render Theme Colors, Font Family, and Font Size dynamically on the Preview element
  const t = data.theme;
  preview.style.setProperty('--a', t.primaryColor);
  preview.style.setProperty('--al', t.lightColor);
  preview.style.setProperty('--t', t.textColor);
  preview.style.setProperty('--m', t.mutedColor);
  preview.style.setProperty('--m2', t.mutedColor2);
  preview.style.setProperty('--b', t.borderColor);
  preview.style.setProperty('--sb', t.sidebarBg);
  preview.style.fontSize = t.fontSize + 'pt';

  // Apply Font Family
  const fontMap = {
    'lora': "'Lora', 'Georgia', serif",
    'inter': "'Inter', sans-serif",
    'dm-sans': "'DM Sans', sans-serif",
    'roboto': "'Roboto', sans-serif"
  };

  if (t.fontFamily && t.fontFamily !== 'auto' && fontMap[t.fontFamily]) {
    preview.style.fontFamily = fontMap[t.fontFamily];
  } else if (activeTemplate === 'harvard') {
    preview.style.fontFamily = "'Lora', 'Georgia', serif";
  } else if (activeTemplate === 'slate-banner' || activeTemplate === 'silicon-valley') {
    preview.style.fontFamily = "'Inter', sans-serif";
  } else {
    preview.style.fontFamily = "'DM Sans', sans-serif";
  }

  // Section titles
  const titles = t.sectionTitles || {
    experience: 'Experience',
    projects: 'Projects',
    certifications: 'Certifications',
    education: 'Education',
    skills: 'Skills',
    languages: 'Languages'
  };

  // Construct HTML matching A4 layout
  
  // Header Contacts HTML (Dynamic List with Link support)
  let headerCtHtml = '';
  if (data.header.contacts && data.header.contacts.length > 0) {
    data.header.contacts.forEach(item => {
      if (!item.value) return;
      const formattedLink = item.link ? formatUrl(item.link) : '';
      if (formattedLink) {
        headerCtHtml += `
          <div class="ci">
            <span class="dot"></span>
            <a href="${escapeHtml(formattedLink)}" target="_blank" rel="noopener">${escapeHtml(item.value)}</a>
          </div>
        `;
      } else {
        headerCtHtml += `
          <div class="ci">
            <span class="dot"></span>
            <span>${item.label ? `<strong style="font-weight:500;color:var(--t);">${escapeHtml(item.label)}:</strong> ` : ''}${escapeHtml(item.value)}</span>
          </div>
        `;
      }
    });
  }

  const headerHtml = `
    <header class="hd">
      <div>
        <div class="hd-name">${escapeHtml(data.header.name)}</div>
        <div class="hd-role">${escapeHtml(data.header.role)}</div>
        <p class="hd-sum">${sanitizeRichHtml(data.header.summary)}</p>
      </div>
      <div class="hd-ct">
        ${headerCtHtml}
      </div>
    </header>
  `;

  // Experience HTML
  let expHtml = '';
  if (data.experience && data.experience.length > 0) {
    let expItemsHtml = '';
    data.experience.forEach(exp => {
      let bulletsHtml = '';
      if (exp.bullets && exp.bullets.length > 0) {
        bulletsHtml = `<ul class="bl">` + exp.bullets.map(b => `<li>${sanitizeRichHtml(b)}</li>`).join('') + `</ul>`;
      }
      expItemsHtml += `
        <div class="en">
          <div class="en-hd">
            <div class="en-t">${escapeHtml(exp.company)}</div>
            <div class="en-p">${escapeHtml(exp.date)}</div>
          </div>
          <div class="en-r">${escapeHtml(exp.role)}</div>
          <div class="en-l">${escapeHtml(exp.location)}</div>
          ${bulletsHtml}
        </div>
      `;
    });
    expHtml = `
      <div class="sec">
        <div class="sec-t">${escapeHtml(titles.experience || 'Experience')}</div>
        ${expItemsHtml}
      </div>
    `;
  }

  // Projects HTML
  let projHtml = '';
  if (data.projects && data.projects.length > 0) {
    let projItemsHtml = '';
    data.projects.forEach(proj => {
      let bulletsHtml = '';
      if (proj.bullets && proj.bullets.length > 0) {
        bulletsHtml = `<ul class="bl">` + proj.bullets.map(b => `<li>${sanitizeRichHtml(b)}</li>`).join('') + `</ul>`;
      }
      let tagsHtml = '';
      if (proj.tags && proj.tags.length > 0) {
        tagsHtml = `<div class="tags">` + proj.tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('') + `</div>`;
      }
      projItemsHtml += `
        <div class="en">
          <div class="en-hd">
            <div class="en-t">
              ${escapeHtml(proj.name)}
              ${proj.subtitle ? `<span class="en-tn">— ${escapeHtml(proj.subtitle)}</span>` : ''}
            </div>
            <div class="en-p">${escapeHtml(proj.date)}</div>
          </div>
          ${bulletsHtml}
          ${tagsHtml}
        </div>
      `;
    });
    projHtml = `
      <div class="sec">
        <div class="sec-t">${escapeHtml(titles.projects || 'Projects')}</div>
        ${projItemsHtml}
      </div>
    `;
  }

  // Certifications HTML (with clickable & formatted links)
  let certHtml = '';
  if (data.certifications && data.certifications.length > 0) {
    let certItemsHtml = '';
    data.certifications.forEach(cert => {
      const formattedLink = cert.link ? formatUrl(cert.link) : '';
      certItemsHtml += `
        <div class="cert-item" style="color:var(--m);display:flex;justify-content:space-between;align-items:baseline;gap:0.5rem;margin-bottom:0.18rem;">
          ${formattedLink ? 
            `<a href="${escapeHtml(formattedLink)}" target="_blank" rel="noopener" style="color:var(--t);font-weight:500;text-decoration:underline;text-underline-offset:2px;text-decoration-color:var(--b);">${escapeHtml(cert.name)}</a>` :
            `<span style="color:var(--t);font-weight:500;">${escapeHtml(cert.name)}</span>`
          }
          <span class="cert-date" style="font-family:'DM Mono',monospace;color:var(--m2);white-space:nowrap;">${[cert.issuer, cert.date].filter(Boolean).map(escapeHtml).join(' · ')}</span>
        </div>
      `;
    });
    certHtml = `
      <div class="sec">
        <div class="sec-t">${escapeHtml(titles.certifications || 'Certifications')}</div>
        <div style="display:flex;flex-direction:column;gap:0.12rem;">
          ${certItemsHtml}
        </div>
      </div>
    `;
  }

  // Education HTML (Dynamic List)
  let eduHtml = '';
  if (data.education && data.education.length > 0) {
    let eduItemsHtml = '';
    data.education.forEach(edu => {
      eduItemsHtml += `
        <div style="margin-bottom: 0.4rem;">
          <div class="edu-s">${escapeHtml(edu.school)}</div>
          <div class="edu-m">${escapeHtml(edu.degree)}</div>
          <div class="edu-g">${escapeHtml(edu.details)}</div>
        </div>
      `;
    });
    eduHtml = `
      <div class="sec">
        <div class="sec-t">${escapeHtml(titles.education || 'Education')}</div>
        ${eduItemsHtml}
      </div>
    `;
  }

  // Skills HTML (Sidebar) - Support for Pills, Inline Text List, and Bullet List
  let skillsHtml = '';
  const skillStyle = t.skillStyle || 'pills';
  if (data.skills && data.skills.length > 0) {
    let skillCatsHtml = '';
    data.skills.forEach(skillCat => {
      if (skillCat.items && skillCat.items.length > 0) {
        if (skillStyle === 'text') {
          // Compact Inline Text List format (Networking: TCP/IP, Routing/Switching...)
          const textItemsHtml = skillCat.items.map(s => {
            let name = '';
            let isPrimary = false;
            if (typeof s === 'string') {
              if (s.endsWith('*')) { name = s.slice(0, -1).trim(); isPrimary = true; }
              else { name = s.trim(); }
            } else if (s && typeof s === 'object') {
              name = s.name || '';
              isPrimary = !!s.primary;
            }
            if (!name) return '';
            return isPrimary ? `<strong>${escapeHtml(name)}</strong>` : escapeHtml(name);
          }).filter(Boolean).join(', ');

          skillCatsHtml += `
            <div class="sb sb-text-style" style="margin-bottom: 0.35rem; font-size: 0.8em; line-height: 1.45; color: var(--m);">
              <span style="font-weight: 600; color: var(--t); margin-right: 0.25rem;">${escapeHtml(skillCat.category)}:</span>
              <span>${textItemsHtml}</span>
            </div>
          `;
        } else if (skillStyle === 'bullets') {
          // Bullet list format
          const textItemsHtml = skillCat.items.map(s => {
            let name = '';
            let isPrimary = false;
            if (typeof s === 'string') {
              if (s.endsWith('*')) { name = s.slice(0, -1).trim(); isPrimary = true; }
              else { name = s.trim(); }
            } else if (s && typeof s === 'object') {
              name = s.name || '';
              isPrimary = !!s.primary;
            }
            if (!name) return '';
            return isPrimary ? `<strong>${escapeHtml(name)}</strong>` : escapeHtml(name);
          }).filter(Boolean).join(', ');

          skillCatsHtml += `
            <div class="sb sb-bullet-style" style="margin-bottom: 0.4rem;">
              <div class="sb-t" style="margin-bottom: 0.15rem;">${escapeHtml(skillCat.category)}</div>
              <ul class="bl">
                <li style="font-size: 0.8em; color: var(--m);">${textItemsHtml}</li>
              </ul>
            </div>
          `;
        } else {
          // Default: Pill Badges
          const pillsHtml = skillCat.items.map(s => {
            let name = '';
            let isPrimary = false;
            if (typeof s === 'string') {
              if (s.endsWith('*')) { name = s.slice(0, -1).trim(); isPrimary = true; }
              else { name = s.trim(); }
            } else if (s && typeof s === 'object') {
              name = s.name || '';
              isPrimary = !!s.primary;
            }
            if (!name) return '';
            return `<span class="pl ${isPrimary ? 'p' : ''}">${escapeHtml(name)}</span>`;
          }).join('');

          skillCatsHtml += `
            <div class="sb">
              <div class="sb-t">${escapeHtml(skillCat.category)}</div>
              <div class="pills">${pillsHtml}</div>
            </div>
          `;
        }
      }
    });
    if (skillCatsHtml) {
      skillsHtml = `
      <div class="sec">
        <div class="sec-t">${escapeHtml(titles.skills || 'Skills')}</div>
        ${skillCatsHtml}
      </div>
    `;
    }
  }

  // Languages HTML (Sidebar)
  let langHtml = '';
  if (data.languages && data.languages.length > 0) {
    const langItemsHtml = data.languages.map(l => `
      <div class="lang">
        <span class="ln">${escapeHtml(l.name)}</span><span class="ll">${escapeHtml(l.level)}</span>
      </div>
    `).join('');
    langHtml = `
      <div class="sec">
        <div class="sec-t">${escapeHtml(titles.languages || 'Languages')}</div>
        ${langItemsHtml}
      </div>
    `;
  }

  // Custom Sections HTML
  let customHtml = '';
  if (data.customSections && data.customSections.length > 0) {
    data.customSections.forEach(cSec => {
      if (!cSec.title) return;
      let bulletsHtml = '';
      if (cSec.bullets && cSec.bullets.length > 0) {
        bulletsHtml = `<ul class="bl">` + cSec.bullets.map(b => `<li>${sanitizeRichHtml(b)}</li>`).join('') + `</ul>`;
      }
      customHtml += `
        <div class="sec">
          <div class="sec-t">${escapeHtml(cSec.title)}</div>
          ${bulletsHtml}
        </div>
      `;
    });
  }

  // Map sections to dynamic section order
  const sectionMap = {
    experience: expHtml,
    projects: projHtml,
    certifications: certHtml,
    education: eduHtml,
    skills: skillsHtml,
    languages: langHtml,
    customSections: customHtml
  };

  const mainOrder = t.sectionOrderMain || ['experience', 'projects', 'certifications'];
  const sideOrder = t.sectionOrderSide || ['education', 'skills', 'languages', 'customSections'];

  const mainContentHtml = mainOrder.map(k => sectionMap[k] || '').filter(Boolean).join('');
  
  // Format side content with dividers where appropriate
  const sidePieces = sideOrder.map(k => sectionMap[k] || '').filter(Boolean);
  const sideContentHtml = sidePieces.join('<div class="div"></div>');

  // Assemble full CV grid
  const fullHtml = `
    ${headerHtml}
    <div class="main">
      ${mainContentHtml}
    </div>
    <div class="side">
      ${sideContentHtml}
    </div>
  `;

  preview.innerHTML = fullHtml;

  // Live A4 Page Overflow Detection
  setTimeout(() => {
    const pageElem = document.getElementById('preview-cv');
    const statusElem = document.getElementById('a4-page-status');
    if (pageElem && statusElem) {
      const actualPx = pageElem.scrollHeight;
      const a4Px = A4_HEIGHT_PX; // 297mm standard page height
      
      if (actualPx > a4Px + 2) {
        const pct = Math.round((actualPx / a4Px) * 100);
        statusElem.textContent = `⚠️ Tràn A4 (~${pct}%)`;
        statusElem.className = 'a4-status-badge over';
        statusElem.title = `CV của bạn đang dài ${actualPx}px (chuẩn 1 trang A4 là ${a4Px}px). Bạn nên chọn Compact Mode hoặc hạ cỡ chữ xuống để vừa khít 1 trang!`;
      } else {
        statusElem.textContent = `✓ Vừa khít 1 trang A4`;
        statusElem.className = 'a4-status-badge fit';
        statusElem.title = `CV của bạn nằm gọn trong 1 trang A4.`;
      }
    }
  }, 100);
}

// Zoom / Scale functionality
function setupZoom() {
  const wrapper = document.getElementById('preview-scale-wrapper');
  
  const applyZoom = () => {
    wrapper.style.transform = `scale(${zoomLevel})`;
    document.getElementById('zoom-display').textContent = `${Math.round(zoomLevel * 100)}%`;
  };

  document.getElementById('btn-zoom-in').addEventListener('click', () => {
    if (zoomLevel < 2.0) {
      zoomLevel += 0.05;
      applyZoom();
    }
  });

  document.getElementById('btn-zoom-out').addEventListener('click', () => {
    if (zoomLevel > 0.3) {
      zoomLevel -= 0.05;
      applyZoom();
    }
  });

  document.getElementById('btn-zoom-reset').addEventListener('click', () => {
    zoomLevel = 1;
    applyZoom();
  });

  document.getElementById('btn-zoom-fit').addEventListener('click', () => {
    const containerWidth = document.querySelector('.preview-pane').clientWidth;
    const a4Width = 794;
    zoomLevel = (containerWidth - 40) / a4Width;
    if (zoomLevel < 0.3) zoomLevel = 0.3;
    if (zoomLevel > 1.5) zoomLevel = 1.5;
    applyZoom();
  });

  setTimeout(() => {
    const containerWidth = document.querySelector('.preview-pane').clientWidth;
    const a4Width = 794;
    zoomLevel = (containerWidth - 40) / a4Width;
    if (zoomLevel < 0.3) zoomLevel = 0.3;
    if (zoomLevel > 1.0) zoomLevel = 1.0;
    applyZoom();
  }, 300);
}
