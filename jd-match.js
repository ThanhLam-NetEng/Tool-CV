// JD <-> CV keyword matcher (pure functions, no DOM).
// Loaded as a classic script before app.js so it works when index.html is opened from disk.
(function (root) {
  'use strict';

  // [canonical name, [aliases...], options?]
  //  - aliases are matched case-insensitively as whole terms
  //  - options.cs:  aliases matched CASE-SENSITIVELY (short acronyms such as AD / IDS / NAS)
  //  - options.not: phrases that must NOT count (e.g. "azure ad" must not count as plain "Azure")
  // Keep tools/products that a person may or may not have used (Intune, Defender...) as their own
  // terms: merging them into a broad group would hide real gaps from the score.
  const TERMS = [
    // --- Networking ---
    ['TCP/IP', ['tcp/ip', 'tcp ip', 'tcpip']],
    ['OSI model', ['osi model', 'osi']],
    ['Routing & Switching', ['routing and switching', 'routing & switching', 'routing/switching', 'switching']],
    ['OSPF', ['ospf']],
    ['BGP', ['bgp']],
    ['EIGRP', ['eigrp']],
    ['VLAN', ['vlan', 'vlans']],
    ['STP', ['stp', 'spanning tree', 'spanning-tree']],
    ['DNS', ['dns']],
    ['DHCP', ['dhcp']],
    ['NAT', [], { cs: ['NAT'] }],
    ['QoS', ['qos']],
    ['MPLS', ['mpls']],
    ['SD-WAN', ['sd-wan', 'sdwan', 'sd wan']],
    ['VPN', ['vpn', 'ipsec', 'site-to-site', 'wireguard', 'openvpn']],
    ['Wi-Fi / WLAN', ['wi-fi', 'wifi', 'wlan', 'wireless', '802.11']],
    ['802.1X / RADIUS', ['802.1x', 'radius', 'tacacs']],
    ['Load balancer', ['load balancer', 'load balancing', 'haproxy', 'f5']],
    ['Cisco', ['cisco', 'cisco ios', 'nx-os']],
    ['Juniper', ['juniper', 'junos']],
    ['MikroTik', ['mikrotik', 'routeros']],
    ['Fortinet', ['fortinet', 'fortigate']],
    ['Palo Alto', ['palo alto', 'pan-os']],
    ['Aruba / ClearPass (NAC)', ['aruba', 'clearpass', 'cppm']],
    ['Network monitoring', ['network monitoring', 'zabbix', 'prtg', 'nagios', 'solarwinds', 'librenms']],
    ['Packet analysis', ['wireshark', 'tcpdump', 'packet capture', 'pcap']],
    ['Cabling', ['cabling', 'rj45', 'structured cabling', 'cat6', 'patch panel', 'đấu nối', 'bấm cáp']],
    // --- Security / SOC ---
    ['Firewall', ['firewall', 'firewalls', 'ngfw', 'tường lửa']],
    ['IDS/IPS', ['ids/ips', 'suricata', 'snort'], { cs: ['IDS', 'IPS'] }],
    ['SIEM', ['siem', 'wazuh', 'splunk', 'qradar', 'elastic', 'sentinel', 'graylog'], { cs: ['ELK'] }],
    ['SOC', ['security operations', 'security operation center'], { cs: ['SOC'] }],
    ['Incident response', ['incident response', 'incident handling', 'ứng phó sự cố', 'xử lý sự cố bảo mật']],
    ['Log analysis', ['log analysis', 'log management', 'phân tích log', 'syslog']],
    ['Threat detection', ['threat detection', 'threat hunting', 'threat intelligence', 'cti']],
    ['MITRE ATT&CK', ['mitre', 'att&ck', 'attack framework']],
    ['EDR / XDR', ['edr', 'xdr', 'endpoint detection', 'crowdstrike', 'sentinelone']],
    ['Microsoft Defender', ['microsoft defender', 'defender for endpoint', 'windows defender', 'defender']],
    ['Antivirus / Endpoint security', ['antivirus', 'anti-virus', 'endpoint security']],
    ['Vulnerability management', ['vulnerability', 'vulnerabilities', 'nessus', 'openvas', 'qualys', 'lỗ hổng']],
    ['Penetration testing', ['penetration testing', 'pentest', 'pen test', 'red team', 'kali']],
    ['OWASP', ['owasp']],
    ['WAF', ['waf', 'modsecurity']],
    ['Nmap', ['nmap']],
    ['Malware analysis', ['malware', 'phishing', 'ransomware']],
    ['PKI / TLS', ['pki', 'tls', 'ssl', 'certificate management']],
    ['IAM / MFA', ['iam', 'mfa', '2fa', 'sso', 'identity and access']],
    ['DLP', ['dlp', 'data loss prevention']],
    ['ISO 27001', ['iso 27001', 'iso27001', '27001']],
    ['NIST', ['nist']],
    ['Security+', ['security+', 'comptia security']],
    ['CEH', ['ceh', 'certified ethical hacker']],
    ['CISSP', ['cissp']],
    ['CCNA', ['ccna']],
    ['CCNP', ['ccnp']],
    ['Network+', ['network+', 'comptia network']],
    // --- Systems / IT support ---
    ['Windows Server', ['windows server']],
    ['Active Directory', ['active directory', 'ad ds', 'group policy', 'gpo', 'ldap'], { cs: ['AD'], not: ['azure ad'] }],
    ['Azure AD / Entra ID', ['azure ad', 'azure active directory', 'entra id', 'entra', 'aad']],
    ['Microsoft Intune', ['intune', 'endpoint manager', 'microsoft endpoint manager', 'memcm']],
    ['User & access management', ['user account', 'user accounts', 'access permission', 'access permissions', 'permission management', 'access control', 'password reset', 'password resets', 'account management', 'phân quyền', 'quản lý tài khoản']],
    ['File Server / NAS', ['file server', 'file share', 'file sharing', 'synology', 'qnap', 'ntfs'], { cs: ['NAS'] }],
    ['Windows (desktop OS)', ['windows'], { not: ['windows server', 'windows defender'] }],
    ['macOS', ['macos', 'mac os', 'os x', 'macbook']],
    ['Linux', ['linux', 'ubuntu', 'centos', 'debian', 'rhel', 'red hat']],
    ['Microsoft 365', ['microsoft 365', 'office 365', 'm365', 'o365', 'exchange online', 'microsoft 365 admin center']],
    ['Adobe Creative Cloud', ['adobe creative cloud', 'adobe cc', 'photoshop', 'illustrator', 'adobe']],
    ['Helpdesk / IT support', ['helpdesk', 'help desk', 'it support', 'service desk', 'technical support', 'hỗ trợ kỹ thuật', 'hỗ trợ người dùng']],
    ['Ticketing', ['ticket', 'tickets', 'ticketing', 'jira', 'servicenow', 'glpi', 'freshdesk', 'zendesk', 'servicedesk plus', 'manageengine']],
    ['SLA', ['sla', 'slas', 'service level']],
    ['ITIL', ['itil']],
    ['Troubleshooting', ['troubleshoot', 'troubleshooting', 'xử lý sự cố', 'khắc phục sự cố']],
    ['Virtualization', ['virtualization', 'virtualisation', 'vmware', 'esxi', 'vsphere', 'hyper-v', 'proxmox', 'virtualbox', 'ảo hóa']],
    ['Backup & DR', ['backup', 'disaster recovery', 'veeam', 'sao lưu']],
    ['Monitoring', ['monitoring', 'giám sát', 'grafana', 'prometheus']],
    ['Remote support', ['remote support', 'anydesk', 'teamviewer', 'ultraviewer', 'rdp', 'remote desktop']],
    ['Hardware & OS setup', ['hardware', 'cài đặt hệ điều hành', 'cài đặt phần mềm', 'install and configure', 'installing and configuring']],
    ['Device / software deployment', ['device management', 'software deployment', 'software distribution', 'mdm', 'sccm', 'imaging']],
    ['WMS', ['wms', 'warehouse management']],
    ['ERP / business systems', ['erp', 'odoo', 'seller center', 'netsuite', 'business system', 'business systems'], { cs: ['SAP'] }],
    // --- Cloud / DevOps / scripting ---
    ['AWS', ['aws', 'amazon web services']],
    ['Azure', ['azure'], { not: ['azure ad', 'azure active directory'] }],
    ['GCP', ['gcp', 'google cloud']],
    ['Cloud', ['cloud'], { not: ['creative cloud'] }],
    ['Docker', ['docker', 'container', 'containers']],
    ['Kubernetes', ['kubernetes', 'k8s']],
    ['Terraform', ['terraform']],
    ['Ansible', ['ansible']],
    ['CI/CD', ['ci/cd', 'cicd', 'jenkins', 'gitlab ci', 'github actions']],
    ['Git', ['git', 'github', 'gitlab']],
    ['Python', ['python']],
    ['Bash / Shell', ['bash', 'shell script', 'shell scripting']],
    ['PowerShell', ['powershell']],
    ['SQL', ['sql', 'mysql', 'postgresql', 'mssql']],
    ['Automation', ['automation', 'scripting', 'tự động hóa']],
    ['Documentation', ['documentation', 'tài liệu hóa', 'báo cáo', 'reporting', 'user guide', 'user guides', 'sop', 'knowledge base', 'hướng dẫn sử dụng']],
    ['English', ['english', 'tiếng anh', 'toeic', 'ielts', 'vstep', 'toefl']],
  ];

  // Acronym-looking words that are NOT useful keywords.
  const ACRONYM_STOP = new Set([
    'AND', 'THE', 'FOR', 'WITH', 'YOU', 'OR', 'OF', 'TO', 'IN', 'ON', 'AT', 'AN', 'AS', 'BY', 'IF', 'IS', 'IT', 'NO', 'OK',
    'VN', 'HCM', 'HN', 'TP', 'VND', 'USD', 'KPI', 'CV', 'CEO', 'CTO', 'HR', 'PM', 'AM', 'ID', 'UI', 'UX', 'NA', 'TBD',
    'ASAP', 'FAQ', 'PDF', 'LTD', 'JSC', 'CO', 'INC', 'II', 'III', 'IV', 'USA', 'UK', 'EU', 'APAC', 'NOTE', 'BHXH', 'BHYT', 'ISO',
    'JOB', 'TOOLS', 'TOOL', 'DESCRIPTION', 'REQUIREMENTS', 'TECHNOLOGIES', 'BENEFITS', 'SKILLS', 'RESPONSIBILITIES', 'ADMIN', 'PLUS',
  ]);

  function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // Whole-term regex: letters/digits/+/# on either side mean "not a standalone term".
  function termRegex(alias) {
    const body = escapeRegex(alias.toLowerCase()).replace(/\s+/g, '\\s+');
    return new RegExp('(?<![a-z0-9+#])' + body + '(?![a-z0-9+#])', 'g');
  }

  // Case-sensitive variant (used as-is on the original text)
  function termRegexCS(alias) {
    const body = escapeRegex(alias).replace(/\s+/g, '\\s+');
    return new RegExp('(?<![A-Za-z0-9+#])' + body + '(?![A-Za-z0-9+#])', 'g');
  }

  const COMPILED = TERMS.map(([name, aliases, opts]) => {
    const o = opts || {};
    return {
      name,
      regexes: aliases.map(termRegex),
      csRegexes: (o.cs || []).map(termRegexCS),
      excludes: (o.not || []).map(termRegex),
    };
  });

  function collectSpans(regexes, text, into) {
    for (const re of regexes) {
      re.lastIndex = 0;
      let m;
      while ((m = re.exec(text)) !== null) {
        into.push([m.index, m.index + m[0].length]);
        if (m[0].length === 0) re.lastIndex++;
      }
    }
    return into;
  }

  // Count distinct mentions: when several aliases hit the same spot (e.g. "ids/ips" also contains
  // "ids") the overlapping hits are merged and counted once. Hits that sit inside an excluded
  // phrase ("azure ad" for Azure, "creative cloud" for Cloud) are dropped.
  function countTerm(text, textLower, entry) {
    let spans = collectSpans(entry.regexes, textLower, []);
    collectSpans(entry.csRegexes, text, spans);
    if (!spans.length) return 0;
    if (entry.excludes.length) {
      const bad = collectSpans(entry.excludes, textLower, []);
      spans = spans.filter(([a, b]) => !bad.some(([x, y]) => a < y && x < b));
      if (!spans.length) return 0;
    }
    spans.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    let count = 1;
    let end = spans[0][1];
    for (let i = 1; i < spans.length; i++) {
      if (spans[i][0] >= end) { count++; end = spans[i][1]; }
      else if (spans[i][1] > end) end = spans[i][1];
    }
    return count;
  }

  // Strip the few allowed inline tags (<strong> ...) before matching CV text.
  function stripTags(str) {
    return String(str || '').replace(/<[^>]*>/g, ' ');
  }

  function buildCvText(data) {
    if (!data) return '';
    const parts = [];
    const h = data.header || {};
    parts.push(h.name, h.role, h.summary);
    (h.contacts || []).forEach(c => parts.push(c && c.value));
    (data.experience || []).forEach(e => {
      parts.push(e.company, e.role, e.location);
      (e.bullets || []).forEach(b => parts.push(b));
    });
    (data.projects || []).forEach(p => {
      parts.push(p.name, p.subtitle);
      (p.bullets || []).forEach(b => parts.push(b));
      (p.tags || []).forEach(t => parts.push(t));
    });
    (data.certifications || []).forEach(c => parts.push(c.name, c.issuer));
    (data.education || []).forEach(e => parts.push(e.school, e.degree, e.details));
    (data.skills || []).forEach(c => {
      parts.push(c.category);
      (c.items || []).forEach(i => parts.push(typeof i === 'string' ? i : i && i.name));
    });
    (data.languages || []).forEach(l => parts.push(l.name, l.level));
    (data.customSections || []).forEach(c => {
      parts.push(c.title);
      (c.bullets || []).forEach(b => parts.push(b));
    });
    return parts.filter(Boolean).map(stripTags).join('\n');
  }

  function weightOf(freq) {
    // appearing many times in the JD = more important, capped so one word cannot dominate
    return 1 + Math.min(freq - 1, 2) * 0.5;
  }

  function analyze(jdText, cvText) {
    const jd = String(jdText || '');
    const cv = String(cvText || '');
    const jdLower = jd.toLowerCase();
    const cvLower = cv.toLowerCase();

    const result = {
      empty: jd.trim().length < 20,
      score: 0,
      matched: [],
      missing: [],
      extras: [],
    };
    if (result.empty) return result;

    let totalW = 0;
    let matchedW = 0;
    COMPILED.forEach(entry => {
      const freq = countTerm(jd, jdLower, entry);
      if (!freq) return;
      const w = weightOf(freq);
      totalW += w;
      if (countTerm(cv, cvLower, entry) > 0) {
        matchedW += w;
        result.matched.push({ term: entry.name, freq });
      } else {
        result.missing.push({ term: entry.name, freq });
      }
    });

    const byImportance = (a, b) => b.freq - a.freq || a.term.localeCompare(b.term);
    result.matched.sort(byImportance);
    result.missing.sort(byImportance);
    result.score = totalW ? Math.round((matchedW / totalW) * 100) : 0;

    // Acronyms in the JD that the dictionary does not know (informational only, not scored).
    const known = new Set();
    TERMS.forEach(([name, aliases, opts]) => {
      known.add(name.toUpperCase());
      aliases.forEach(a => known.add(a.toUpperCase()));
      ((opts && opts.cs) || []).forEach(a => known.add(a.toUpperCase()));
    });
    const seen = new Map();
    (jd.match(/(?<![A-Za-z0-9\/&+#.-])[A-Z][A-Z0-9]{1,7}(?:[-\/&][A-Z][A-Z0-9]{1,7})*(?![A-Za-z0-9+#]|[-\/&][A-Za-z0-9]|\.[A-Za-z0-9])/g) || []).forEach(tok => {
      if (ACRONYM_STOP.has(tok) || known.has(tok)) return;
      seen.set(tok, (seen.get(tok) || 0) + 1);
    });
    result.extras = [...seen.entries()]
      .map(([token, freq]) => ({
        token,
        freq,
        inCv: termRegex(token).test(cvLower),
      }))
      .sort((a, b) => b.freq - a.freq || a.token.localeCompare(b.token))
      .slice(0, 20);

    return result;
  }

  const api = { analyze, buildCvText, TERMS };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.JdMatch = api;
})(typeof window !== 'undefined' ? window : globalThis);
