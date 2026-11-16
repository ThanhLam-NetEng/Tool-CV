// CV quality checker (pure functions, no DOM). Works on the VISIBLE data (hidden parts excluded).
// Loaded as a classic script before app.js so it works when index.html is opened from disk.
(function (root) {
  'use strict';

  const plain = s => String(s || '').replace(/<[^>]*>/g, ' ').replace(/⁠/g, '').replace(/\s+/g, ' ').trim();
  const norm = s => plain(s).toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
  const short = (s, n = 60) => { const p = plain(s); return p.length > n ? p.slice(0, n - 1) + '…' : p; };

  // Openers that describe duties instead of results. Kept small on purpose:
  // "Hỗ trợ"/"Support" is a normal IT-support verb, so it is NOT flagged.
  const WEAK_OPENERS = [
    ['responsible for', 'Thay bằng động từ hành động: Managed, Resolved, Configured…'],
    ['responsibilities include', 'Viết thành việc bạn đã làm, bắt đầu bằng động từ'],
    ['duties included', 'Viết thành việc bạn đã làm, bắt đầu bằng động từ'],
    ['helped', 'Nói rõ phần bạn làm: Resolved, Set up, Documented…'],
    ['assisted with', 'Nói rõ phần bạn làm: Resolved, Set up, Documented…'],
    ['worked on', 'Nêu hành động cụ thể: Built, Deployed, Migrated…'],
    ['was involved in', 'Nêu vai trò cụ thể của bạn'],
    ['participated in', 'Nêu vai trò cụ thể của bạn'],
    ['tasked with', 'Viết thành việc bạn đã làm'],
    ['in charge of', 'Thay bằng động từ hành động: Managed, Led…'],
    ['chịu trách nhiệm', 'Viết thành việc đã làm: Quản lý, Xử lý, Triển khai…'],
    ['được giao', 'Viết thành việc đã làm và kết quả'],
    ['tham gia', 'Nêu rõ phần việc bạn đảm nhận'],
    ['phụ trách', 'Thay bằng động từ hành động và kết quả'],
  ];

  const MAX_BULLET = 220;  // characters; ~2 lines on A4
  const MIN_BULLET = 25;
  const MAX_SUMMARY = 450;

  function analyzeDates(entries) {
    // entries: [{where, value}]
    const styles = new Map();
    const dashes = new Set();
    const add = (map, k, where) => { if (!map.has(k)) map.set(k, []); map.get(k).push(where); };
    entries.forEach(({ where, value }) => {
      const v = plain(value);
      if (!v) return;
      let style = null;
      if (/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|sept|oct|nov|dec)[a-z]*\.?\s+\d{4}/i.test(v)) style = 'Tên tháng (Jan 2025)';
      else if (/\btháng\s*\d{1,2}/i.test(v) || /\bT\d{1,2}\s*\/\s*\d{4}/.test(v)) style = 'Tháng tiếng Việt (Tháng 1/2025, T1/2025)';
      else if (/\b\d{1,2}\s*\/\s*\d{4}\b/.test(v)) style = 'Số (01/2025)';
      else if (/\b\d{4}\b/.test(v)) style = 'Chỉ năm (2025)';
      if (style) add(styles, style, where);
      const m = v.match(/\d\s*([-–—])\s*(?=\S)/) || v.match(/\S\s+([-–—])\s+\S/);
      if (m) dashes.add(m[1]);
    });
    return { styles, dashes };
  }

  function lint(data) {
    const issues = [];
    const push = (level, where, msg, tip) => issues.push({ level, where, msg, tip: tip || '' });
    if (!data) return { issues, counts: { error: 0, warn: 0, info: 0 }, bullets: 0, withNumbers: 0 };
    const h = data.header || {};

    // ---- header ----
    if (!plain(h.name)) push('error', 'Thông tin cá nhân', 'Chưa có Họ và Tên');
    if (!plain(h.role)) push('warn', 'Thông tin cá nhân', 'Chưa có Chức danh / vị trí mong muốn');
    const sum = plain(h.summary);
    if (!sum) push('info', 'Thông tin cá nhân', 'Chưa có đoạn tóm tắt (Summary)', '2–3 câu: bạn là ai, mạnh gì, muốn làm gì');
    else if (sum.length > MAX_SUMMARY) push('warn', 'Tóm tắt', `Đoạn tóm tắt dài ${sum.length} ký tự`, `Nên dưới ${MAX_SUMMARY} ký tự (2–3 câu)`);

    // ---- contacts ----
    const contacts = (h.contacts || []).filter(c => c && plain(c.value));
    let hasEmail = false, hasPhone = false;
    contacts.forEach(c => {
      const v = plain(c.value);
      const lab = plain(c.label) || v;
      if (v.includes('@') && !/^https?:/i.test(v)) {
        hasEmail = true;
        if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(v)) push('error', `Liên hệ: ${short(lab, 30)}`, `Email có vẻ sai định dạng: "${short(v, 40)}"`);
        else if (/^(hot|cute|baby|sexy|kute|pro|vip)|[0-9]{6,}@/i.test(v.split('@')[0])) push('info', `Liên hệ: ${short(lab, 30)}`, 'Email nên là dạng tên thật, trông chuyên nghiệp hơn');
        return;
      }
      const digits = v.replace(/\D/g, '');
      const looksPhone = /^[+\d][\d\s.()-]{6,}$/.test(v);
      if (looksPhone) {
        hasPhone = true;
        const vn = digits.startsWith('84') ? digits.slice(2) : digits.replace(/^0/, '');
        if (vn.length !== 9) push('warn', `Liên hệ: ${short(lab, 30)}`, `Số điện thoại có ${digits.length} chữ số, kiểm tra lại: "${v}"`, 'Số di động VN: 10 số (0xxx xxx xxx)');
        return;
      }
      if (/(\.com|\.io|\.net|\.vn|github|linkedin|http)/i.test(v) && /\s/.test(v)) {
        push('warn', `Liên hệ: ${short(lab, 30)}`, `Link có khoảng trắng: "${short(v, 40)}"`);
      }
    });
    if (!hasEmail) push('error', 'Liên hệ', 'Chưa có email');
    if (!hasPhone) push('warn', 'Liên hệ', 'Chưa có số điện thoại');

    // ---- bullets ----
    const bulletEntries = [];
    (data.experience || []).forEach((e, i) => (e.bullets || []).forEach((b, j) =>
      bulletEntries.push({ where: `Kinh nghiệm #${i + 1} (${short(e.company, 28) || 'chưa đặt tên'}) · dòng ${j + 1}`, text: b, scored: true })));
    (data.projects || []).forEach((p, i) => (p.bullets || []).forEach((b, j) =>
      bulletEntries.push({ where: `Dự án #${i + 1} (${short(p.name, 28) || 'chưa đặt tên'}) · dòng ${j + 1}`, text: b, scored: true })));
    (data.customSections || []).forEach((c, i) => (c.bullets || []).forEach((b, j) =>
      bulletEntries.push({ where: `${short(c.title, 28) || 'Mục tùy chỉnh #' + (i + 1)} · dòng ${j + 1}`, text: b, scored: false })));

    const seen = new Map();
    let scoredCount = 0, withNumbers = 0, endDot = 0, noDot = 0;
    const noNumberWheres = [];
    bulletEntries.forEach(({ where, text, scored }) => {
      const p = plain(text);
      if (!p) { push('warn', where, 'Dòng trống — xóa hoặc ẩn đi'); return; }
      const lower = p.toLowerCase();
      if (p.length > MAX_BULLET) push('warn', where, `Dòng dài ${p.length} ký tự (quá 2 dòng trên A4)`, 'Cắt bớt hoặc tách thành 2 ý');
      else if (p.length < MIN_BULLET && scored) push('info', where, 'Dòng quá ngắn, nhà tuyển dụng khó hiểu bạn đã làm gì', 'Thêm công cụ / phạm vi / kết quả');
      const weak = WEAK_OPENERS.find(([w]) => lower.startsWith(w));
      if (weak) push('warn', where, `Mở đầu yếu: "${p.slice(0, weak[0].length)}…"`, weak[1]);
      if (/^(i|my|we|tôi|em|mình)\s/i.test(p)) push('info', where, 'CV thường không dùng ngôi thứ nhất (I / Tôi / Em)', 'Bỏ chủ ngữ, bắt đầu bằng động từ');
      if (scored) {
        scoredCount++;
        if (/\d/.test(p)) withNumbers++;
        else noNumberWheres.push(where);
        if (/[.。]$/.test(p)) endDot++; else noDot++;
      }
      const key = norm(p);
      if (key.length > 15) {
        if (seen.has(key)) push('warn', where, `Trùng nội dung với ${seen.get(key)}`);
        else seen.set(key, where);
      }
    });

    if (scoredCount >= 3) {
      const ratio = withNumbers / scoredCount;
      if (ratio < 0.4) {
        push('info', 'Kinh nghiệm & Dự án',
          `Chỉ ${withNumbers}/${scoredCount} dòng có con số / kết quả đo được`,
          'VD: "~100 ticket", "100+ người dùng", "giảm 30% thời gian". Chỉ ghi số bạn chắc chắn. Chưa có số: ' + noNumberWheres.slice(0, 3).join('; ') + (noNumberWheres.length > 3 ? '…' : ''));
      }
      if (endDot && noDot && Math.min(endDot, noDot) / scoredCount >= 0.15) {
        push('info', 'Kinh nghiệm & Dự án', `Dấu chấm cuối dòng không đồng nhất (${endDot} dòng có, ${noDot} dòng không)`, 'Chọn một kiểu và dùng cho tất cả');
      }
    }

    // ---- item-level gaps ----
    (data.experience || []).forEach((e, i) => {
      const where = `Kinh nghiệm #${i + 1} (${short(e.company, 28) || 'chưa đặt tên'})`;
      if (!plain(e.company)) push('warn', where, 'Thiếu tên công ty');
      if (!plain(e.role)) push('warn', where, 'Thiếu chức vụ');
      if (!plain(e.date)) push('warn', where, 'Thiếu thời gian làm việc');
      if (!(e.bullets || []).some(b => plain(b))) push('warn', where, 'Chưa có dòng mô tả công việc nào');
    });
    (data.education || []).forEach((e, i) => {
      if (!plain(e.school)) push('warn', `Học vấn #${i + 1}`, 'Thiếu tên trường');
    });

    // ---- date consistency ----
    const dateEntries = [];
    (data.experience || []).forEach((e, i) => dateEntries.push({ where: `Kinh nghiệm #${i + 1}`, value: e.date }));
    (data.projects || []).forEach((p, i) => dateEntries.push({ where: `Dự án #${i + 1}`, value: p.date }));
    const { styles, dashes } = analyzeDates(dateEntries);
    styles.delete('Chỉ năm (2025)'); // year-only next to month dates is normal (e.g. projects)
    if (styles.size > 1) {
      const detail = [...styles.entries()].map(([k, w]) => `${k}: ${w.join(', ')}`).join(' | ');
      push('info', 'Ngày tháng', 'Định dạng ngày tháng không đồng nhất giữa các mục', detail);
    }
    if (dashes.size > 1) push('info', 'Ngày tháng', `Dùng lẫn các dấu gạch nối ${[...dashes].join(' ')}`, 'Chọn một loại, VD: "Jan 2025 – Present"');

    const order = { error: 0, warn: 1, info: 2 };
    issues.sort((a, b) => order[a.level] - order[b.level]);
    const counts = { error: 0, warn: 0, info: 0 };
    issues.forEach(i => { counts[i.level]++; });
    return { issues, counts, bullets: scoredCount, withNumbers };
  }

  const api = { lint };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.CvLint = api;
})(typeof window !== 'undefined' ? window : globalThis);
