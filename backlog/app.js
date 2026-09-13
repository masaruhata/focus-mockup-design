/* ==========================================================
   Nulab-like PM — 共通UI / ユーティリティ
   ヘッダー・プロジェクトサイドバーの描画、共通部品の生成
   ========================================================== */

const PMUI = (function () {

  /* ── アイコン ── */
  const ICONS = {
    logo:     '<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    home:     '<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h3v-5h4v5h3a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>',
    issue:    '<path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3.707 3.293a1 1 0 00-1.414 1.414l1.5 1.5a1 1 0 001.414 0l3-3a1 1 0 10-1.414-1.414L8.5 8.086l-.793-.793zM11 12H7a1 1 0 100 2h4a1 1 0 100-2z" clip-rule="evenodd"/>',
    board:    '<path d="M3 3h4v14H3V3zm5 0h4v9H8V3zm5 0h4v11h-4V3z"/>',
    gantt:    '<path d="M3 4h9v3H3V4zm3 5h10v3H6V9zm-3 5h7v3H3v-3z"/>',
    flag:     '<path d="M4 2a1 1 0 011 1v1h9l-2 3 2 3H5v7a1 1 0 11-2 0V3a1 1 0 011-1z"/>',
    wiki:     '<path d="M4 3a2 2 0 012-2h8a2 2 0 012 2v14l-6-3-6 3V3z"/>',
    file:     '<path d="M2 5a2 2 0 012-2h4l2 2h6a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V5z"/>',
    git:      '<path fill-rule="evenodd" d="M6 3a2 2 0 11-1 3.732V13.27A2 2 0 116 16.73V6.732A2 2 0 016 3zm8 0a2 2 0 00-1 3.732V8a3 3 0 01-3 3H8.5a3.5 3.5 0 00-1.5.337V9.5A3.5 3.5 0 018.5 13H10a5 5 0 005-5V6.732A2 2 0 0014 3z" clip-rule="evenodd"/>',
    gear:     '<path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.53 1.53 0 01-2.29.95c-1.37-.84-2.94.73-2.1 2.1.54.89.06 2.05-.95 2.29-1.56.38-1.56 2.6 0 2.98.99.24 1.47 1.4.95 2.29-.84 1.37.73 2.94 2.1 2.1a1.53 1.53 0 012.29.95c.38 1.56 2.6 1.56 2.98 0a1.53 1.53 0 012.29-.95c1.37.84 2.94-.73 2.1-2.1a1.53 1.53 0 01.95-2.29c1.56-.38 1.56-2.6 0-2.98a1.53 1.53 0 01-.95-2.29c.84-1.37-.73-2.94-2.1-2.1a1.53 1.53 0 01-2.29-.95zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>',
    plus:     '<path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"/>',
    search:   '<path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"/>',
    bell:     '<path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>',
    chevron:  '<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>',
    clock:    '<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.5 2.5a1 1 0 001.414-1.414L11 9.586V6z" clip-rule="evenodd"/>',
    calendar: '<path fill-rule="evenodd" d="M6 2a1 1 0 011 1v1h6V3a1 1 0 112 0v1h1a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h1V3a1 1 0 011-1zM4 8v8h12V8H4z" clip-rule="evenodd"/>',
    comment:  '<path fill-rule="evenodd" d="M18 10c0 3.87-3.58 7-8 7a8.84 8.84 0 01-4.08-.98L2 17l1.34-3.12A6.98 6.98 0 012 10c0-3.87 3.58-7 8-7s8 3.13 8 7z" clip-rule="evenodd"/>',
    clip:     '<path fill-rule="evenodd" d="M8 4a3 3 0 016 0v6a5 5 0 01-10 0V7a1 1 0 112 0v3a3 3 0 106 0V4a1 1 0 10-2 0v6a1 1 0 11-2 0V4z" clip-rule="evenodd"/>',
    up:       '<path fill-rule="evenodd" d="M10 4l6 7h-4v5H8v-5H4l6-7z" clip-rule="evenodd"/>',
    minus:    '<path fill-rule="evenodd" d="M4 9h12v2H4V9z" clip-rule="evenodd"/>',
    down:     '<path fill-rule="evenodd" d="M10 16l-6-7h4V4h4v5h4l-6 7z" clip-rule="evenodd"/>',
    check:    '<path fill-rule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.58l7.3-7.3a1 1 0 011.4 0z" clip-rule="evenodd"/>',
    close:    '<path fill-rule="evenodd" d="M4.3 4.3a1 1 0 011.4 0L10 8.6l4.3-4.3a1 1 0 111.4 1.4L11.4 10l4.3 4.3a1 1 0 01-1.4 1.4L10 11.4l-4.3 4.3a1 1 0 01-1.4-1.4L8.6 10 4.3 5.7a1 1 0 010-1.4z" clip-rule="evenodd"/>',
    users:    '<path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.05-.33.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>',
    chart:    '<path d="M2 16h16v2H2v-2zm2-5h3v4H4v-4zm5-5h3v9H9V6zm5 3h3v6h-3V9z"/>',
    doc:      '<path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.59A2 2 0 0112 2.59L15.41 6A2 2 0 0116 7.41V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"/>',
    folder:   '<path d="M2 5a2 2 0 012-2h4l2 2h6a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V5z"/>',
    image:    '<path fill-rule="evenodd" d="M4 3h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM5 15h10l-3.5-5-2.5 3.5-1.5-2L5 15z" clip-rule="evenodd"/>',
    sheet:    '<path fill-rule="evenodd" d="M3 3h14v14H3V3zm2 2v3h4V5H5zm6 0v3h4V5h-4zM5 10v2h4v-2H5zm6 0v2h4v-2h-4zM5 14v1h4v-1H5zm6 0v1h4v-1h-4z" clip-rule="evenodd"/>',
    logout:   '<path fill-rule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.7 3.3a1 1 0 010 1.4L9.4 9H17a1 1 0 110 2H9.4l1.3 1.3a1 1 0 01-1.4 1.4l-3-3a1 1 0 010-1.4l3-3a1 1 0 011.4 0z" clip-rule="evenodd"/>',
    star:     '<path d="M10 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L2.2 7.7l5.4-.8L10 2z"/>',
    link:     '<path fill-rule="evenodd" d="M12.6 7.4a3 3 0 010 4.2l-2.1 2.1a3 3 0 11-4.2-4.2l.7-.7 1.4 1.4-.7.7a1 1 0 101.4 1.4l2.1-2.1a1 1 0 000-1.4l1.4-1.4zM7.4 12.6a3 3 0 010-4.2l2.1-2.1a3 3 0 114.2 4.2l-.7.7-1.4-1.4.7-.7a1 1 0 10-1.4-1.4L8.8 9.8a1 1 0 000 1.4l-1.4 1.4z" clip-rule="evenodd"/>'
  };

  function icon(name, cls) {
    return '<svg viewBox="0 0 20 20" fill="currentColor"' + (cls ? ' class="' + cls + '"' : '') + '>' + (ICONS[name] || '') + '</svg>';
  }

  /* ── 文字列 ── */
  function esc(s) {
    return String(s === null || s === undefined ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  /* ── 日付 ── */
  function today() { return PM.TODAY; }
  function toDate(s) { if (!s) return null; return new Date(String(s).slice(0, 10) + 'T00:00:00'); }
  function diffDays(a, b) { return Math.round((toDate(b) - toDate(a)) / 86400000); }
  function fmtDate(s) {
    if (!s) return '—';
    var d = String(s).slice(0, 10).split('-');
    return d[1] + '/' + d[2];
  }
  function fmtDateFull(s) { return s ? String(s).slice(0, 10).replace(/-/g, '/') : '—'; }
  function fmtDateTime(s) { return s ? String(s).replace('-', '/').replace('-', '/') : '—'; }
  function relTime(s) {
    if (!s) return '';
    var d = new Date(String(s).replace(/-/g, '/'));
    var now = new Date(PM.TODAY + ' 19:00');
    var m = Math.round((now - d) / 60000);
    if (isNaN(m)) return s;
    if (m < 0) return fmtDateFull(s);   /* 未来日付はそのまま表示 */
    if (m < 1) return 'たった今';
    if (m < 60) return m + '分前';
    if (m < 1440) return Math.floor(m / 60) + '時間前';
    var days = Math.floor(m / 1440);
    if (days < 30) return days + '日前';
    return fmtDateFull(s);
  }
  function dueClass(due, statusId) {
    if (!due || statusId === 4) return '';
    var d = diffDays(PM.TODAY, due);
    if (d < 0) return 'pm-overdue';
    if (d <= 3) return 'pm-duesoon';
    return '';
  }

  /* ── 部品 ── */
  function avatar(userId, size) {
    var u = PM.user(userId);
    if (!u) return '<span class="pm-avatar ' + (size || 'sm') + '" style="background:#c3cad2">?</span>';
    return '<span class="pm-avatar ' + (size || 'sm') + ' ' + u.c + '" title="' + esc(u.name) + '">' + esc(u.initial) + '</span>';
  }
  function userChip(userId, size) {
    var u = PM.user(userId);
    if (!u) return '<span class="muted fs12">未設定</span>';
    return '<span class="pm-row g6">' + avatar(userId, size || 'xs') + '<span class="fs12">' + esc(u.name) + '</span></span>';
  }
  function statusTag(statusId) {
    var s = PM.status(statusId);
    return '<span class="pm-status ' + s.cls + '">' + s.name + '</span>';
  }
  function priorityTag(priorityId) {
    var p = PM.priority(priorityId);
    var ic = p.cls === 'high' ? 'up' : (p.cls === 'low' ? 'down' : 'minus');
    return '<span class="pm-priority ' + p.cls + '">' + icon(ic) + p.name + '</span>';
  }
  function typeTag(typeId) {
    var t = PM.type(typeId);
    return '<span class="pm-type" style="background:' + t.color + '">' + t.name + '</span>';
  }
  function fileSize(bytes) {
    if (!bytes) return '—';
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / 1048576).toFixed(1) + ' MB';
  }

  /* ── クエリパラメータ ── */
  function param(name, fallback) {
    var v = new URLSearchParams(location.search).get(name);
    return v === null ? (fallback === undefined ? null : fallback) : v;
  }

  /* ── トースト ── */
  function toast(msg) {
    var wrap = document.querySelector('.pm-toast-wrap');
    if (!wrap) {
      wrap = document.createElement('div');
      wrap.className = 'pm-toast-wrap';
      document.body.appendChild(wrap);
    }
    var el = document.createElement('div');
    el.className = 'pm-toast';
    el.innerHTML = icon('check') + '<span>' + esc(msg) + '</span>';
    wrap.appendChild(el);
    setTimeout(function () { el.remove(); }, 2600);
  }

  /* ── モーダル ── */
  function openModal(id) { var m = document.getElementById(id); if (m) m.classList.add('open'); }
  function closeModal(id) { var m = document.getElementById(id); if (m) m.classList.remove('open'); }

  /* ── 簡易Markdownレンダラ（Wiki・課題説明用） ── */
  function markdown(src) {
    var lines = String(src || '').split('\n');
    var out = [], inCode = false, listType = null, tableBuf = [];

    function closeList() { if (listType) { out.push('</' + listType + '>'); listType = null; } }
    function flushTable() {
      if (!tableBuf.length) return;
      var rows = tableBuf.filter(function (r) { return !/^\|?[\s:|-]+\|?$/.test(r.replace(/\s/g, '')) || /[^|\-: ]/.test(r); });
      var html = '<table>';
      tableBuf.forEach(function (line, i) {
        var cells = line.replace(/^\||\|$/g, '').split('|').map(function (c) { return c.trim(); });
        if (/^[\s:-]+$/.test(cells.join(''))) return;
        var tag = i === 0 ? 'th' : 'td';
        html += '<tr>' + cells.map(function (c) { return '<' + tag + '>' + inline(c) + '</' + tag + '>'; }).join('') + '</tr>';
      });
      html += '</table>';
      out.push(html);
      tableBuf = [];
    }
    function inline(t) {
      return esc(t)
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
        .replace(/\b(FOCUS-\d+)\b/g, '<a href="05_issue_detail.html?key=$1">$1</a>');
    }

    lines.forEach(function (line) {
      if (/^```/.test(line)) {
        if (inCode) { out.push('</code></pre>'); inCode = false; }
        else { closeList(); flushTable(); out.push('<pre><code>'); inCode = true; }
        return;
      }
      if (inCode) { out.push(esc(line)); return; }

      if (/^\|/.test(line)) { closeList(); tableBuf.push(line); return; }
      flushTable();

      var h = line.match(/^(#{1,4})\s+(.*)$/);
      if (h) { closeList(); out.push('<h' + h[1].length + '>' + inline(h[2]) + '</h' + h[1].length + '>'); return; }
      if (/^>\s?/.test(line)) { closeList(); out.push('<blockquote>' + inline(line.replace(/^>\s?/, '')) + '</blockquote>'); return; }
      if (/^(-{3,}|\*{3,})$/.test(line.trim())) { closeList(); out.push('<hr>'); return; }
      var ul = line.match(/^[-*]\s+(.*)$/);
      if (ul) { if (listType !== 'ul') { closeList(); out.push('<ul>'); listType = 'ul'; } out.push('<li>' + inline(ul[1]) + '</li>'); return; }
      var ol = line.match(/^\d+\.\s+(.*)$/);
      if (ol) { if (listType !== 'ol') { closeList(); out.push('<ol>'); listType = 'ol'; } out.push('<li>' + inline(ol[1]) + '</li>'); return; }
      if (!line.trim()) { closeList(); return; }
      closeList();
      out.push('<p>' + inline(line) + '</p>');
    });
    if (inCode) out.push('</code></pre>');
    closeList(); flushTable();
    return out.join('\n');
  }

  /* ── ヘッダー ── */
  function headerHTML() {
    var u = PM.currentUser();
    var unread = PM.unreadCount();
    return '' +
      '<header class="pm-header">' +
        '<a href="02_dashboard.html" class="pm-logo"><span class="pm-logo-mark">' + icon('logo') + '</span>Backvog</a>' +
        '<a href="02_dashboard.html" class="pm-space-switch">phm-solution' + icon('chevron') + '</a>' +
        '<form class="pm-header-search" action="16_search.html" method="get">' +
          icon('search') +
          '<input type="search" name="q" placeholder="課題・Wiki・ファイルを検索" value="' + esc(param('q', '') || '') + '">' +
        '</form>' +
        '<div class="pm-header-spacer"></div>' +
        '<a href="04_issues.html?filter=mine" class="pm-icon-btn" title="自分の課題">' + icon('issue') + '</a>' +
        '<a href="13_notifications.html" class="pm-icon-btn" title="お知らせ">' + icon('bell') +
          (unread ? '<span class="pm-badge-dot">' + unread + '</span>' : '') + '</a>' +
        '<a href="15_space_settings.html" class="pm-icon-btn" title="スペース設定">' + icon('gear') + '</a>' +
        '<a href="01_login.html" class="pm-header-user">' + avatar(u.id, 'sm') + '<span>' + esc(u.name) + '</span>' + icon('chevron') + '</a>' +
      '</header>';
  }

  /* ── サイドバー ── */
  function sideHTML(active) {
    var p = PM.currentProject();
    var issues = PM.issues();
    var openCount = issues.filter(function (i) { return i.statusId < 4; }).length;
    var mine = issues.filter(function (i) { return i.assigneeId === PM.db.currentUserId && i.statusId < 4; }).length;

    function item(href, key, ic, label, count) {
      return '<a href="' + href + '" class="pm-side-item' + (active === key ? ' active' : '') + '">' +
        icon(ic) + '<span>' + label + '</span>' +
        (count ? '<span class="pm-side-item-count">' + count + '</span>' : '') + '</a>';
    }

    return '' +
      '<aside class="pm-side">' +
        '<div class="pm-side-project">' +
          '<div class="pm-side-project-mark" style="background:' + p.color + '">' + esc(p.key.slice(0, 2)) + '</div>' +
          '<div class="flex1"><div class="pm-side-project-name">' + esc(p.name) + '</div>' +
          '<div class="pm-side-project-key">' + esc(p.key) + '</div></div>' +
        '</div>' +
        '<div class="pm-side-cta"><a href="06_issue_new.html" class="pm-btn pm-btn-primary">' + icon('plus') + '課題の追加</a></div>' +
        '<div class="pm-side-section">' +
          item('03_project_home.html', 'home', 'home', 'プロジェクトホーム') +
          item('04_issues.html', 'issues', 'issue', '課題', openCount) +
          item('07_board.html', 'board', 'board', 'ボード') +
          item('08_gantt.html', 'gantt', 'gantt', 'ガントチャート') +
          item('09_milestones.html', 'milestones', 'flag', 'マイルストーン') +
        '</div>' +
        '<div class="pm-side-divider"></div>' +
        '<div class="pm-side-section">' +
          '<div class="pm-side-label">ドキュメント</div>' +
          item('10_wiki.html', 'wiki', 'wiki', 'Wiki') +
          item('11_files.html', 'files', 'file', 'ファイル') +
          item('12_git.html', 'git', 'git', 'Git') +
        '</div>' +
        '<div class="pm-side-divider"></div>' +
        '<div class="pm-side-section">' +
          '<div class="pm-side-label">マイページ</div>' +
          item('02_dashboard.html', 'dashboard', 'chart', 'ダッシュボード') +
          item('04_issues.html?filter=mine', 'mine', 'users', '自分の課題', mine) +
          item('13_notifications.html', 'notices', 'bell', 'お知らせ', PM.unreadCount()) +
        '</div>' +
        '<div class="pm-side-divider"></div>' +
        '<div class="pm-side-section">' +
          item('14_project_settings.html', 'settings', 'gear', 'プロジェクト設定') +
          item('index.html', 'index', 'doc', '画面一覧') +
        '</div>' +
      '</aside>';
  }

  /* ── マウント ── */
  function mount(active) {
    var h = document.getElementById('pm-header');
    if (h) h.outerHTML = headerHTML();
    var s = document.getElementById('pm-side');
    if (s) s.outerHTML = sideHTML(active);
  }

  return {
    icon: icon, esc: esc, mount: mount, avatar: avatar, userChip: userChip,
    statusTag: statusTag, priorityTag: priorityTag, typeTag: typeTag,
    fmtDate: fmtDate, fmtDateFull: fmtDateFull, fmtDateTime: fmtDateTime, relTime: relTime,
    dueClass: dueClass, diffDays: diffDays, toDate: toDate, today: today,
    fileSize: fileSize, param: param, toast: toast, markdown: markdown,
    openModal: openModal, closeModal: closeModal
  };
})();
