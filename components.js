/* Focus — 共通コンポーネント (ヘッダー・サイドバー) */

const HEADER_HTML = `
<header class="header">
  <div class="header-logo">Focus<span>.</span></div>
  <div class="header-tab-bar">
    <div class="header-tab active">ホーム</div>
    <div class="header-tab">登録</div>
    <div class="header-tab">ああああ</div>
    <div class="header-tab">★</div>
  </div>
  <div class="header-spacer"></div>
  <div class="header-user">
    <div class="header-user-avatar">秦</div>
    <span>管理者: 秦勝</span>
    <svg viewBox="0 0 20 20" fill="currentColor" style="width:14px;height:14px;opacity:0.5"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
  </div>
</header>`;

const SIDEBAR_HTML = `
<aside class="sidebar">
  <div class="sidebar-section">
    <div class="sidebar-section-label">メイン</div>
    <a href="02_home.html" class="sidebar-item" data-page="home">
      <svg viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/></svg>
      <span class="sidebar-item-text">ホーム</span>
    </a>
    <a href="03_tasks.html" class="sidebar-item" data-page="tasks">
      <svg viewBox="0 0 20 20" fill="currentColor"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/></svg>
      <span class="sidebar-item-text">タスク管理</span>
    </a>
  </div>

  <div class="sidebar-divider"></div>

  <div class="sidebar-section">
    <div class="sidebar-section-label">患者管理</div>
    <a href="04_patient_list.html" class="sidebar-item" data-page="patient_list">
      <svg viewBox="0 0 20 20" fill="currentColor"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/></svg>
      <span class="sidebar-item-text">患者情報一覧</span>
    </a>
    <a href="06_patient_cares.html" class="sidebar-item" data-page="patient_cares">
      <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd"/></svg>
      <span class="sidebar-item-text">患者様対応</span>
    </a>
    <a href="07_marriage_informations.html" class="sidebar-item" data-page="marriage">
      <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/></svg>
      <span class="sidebar-item-text">婚姻情報</span>
    </a>
    <a href="08_insurance_cards.html" class="sidebar-item" data-page="insurance">
      <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"/></svg>
      <span class="sidebar-item-text">保険証</span>
    </a>
    <a href="09_pregnant_patients.html" class="sidebar-item" data-page="pregnant">
      <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/></svg>
      <span class="sidebar-item-text">妊娠患者</span>
    </a>
    <a href="18_list_accounts.html" class="sidebar-item" data-page="accounts">
      <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clip-rule="evenodd"/></svg>
      <span class="sidebar-item-text">患者アカウント</span>
    </a>
  </div>

  <div class="sidebar-divider"></div>

  <div class="sidebar-section">
    <div class="sidebar-section-label">診療記録</div>
    <a href="10_patient_memo.html" class="sidebar-item" data-page="memo">
      <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"/></svg>
      <span class="sidebar-item-text">カルテ情報</span>
    </a>
    <a href="11_payments.html" class="sidebar-item" data-page="payments">
      <svg viewBox="0 0 20 20" fill="currentColor"><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/><path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd"/></svg>
      <span class="sidebar-item-text">診療費請求</span>
    </a>
    <a href="12_visit_info.html" class="sidebar-item" data-page="visit">
      <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/></svg>
      <span class="sidebar-item-text">来院情報</span>
    </a>
    <a href="13_medical_interviews.html" class="sidebar-item" data-page="interview">
      <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/></svg>
      <span class="sidebar-item-text">問診</span>
    </a>
    <a href="15_inspections.html" class="sidebar-item" data-page="inspection">
      <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clip-rule="evenodd"/></svg>
      <span class="sidebar-item-text">検査情報</span>
    </a>
    <a href="22_receipts.html" class="sidebar-item" data-page="receipts">
      <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" clip-rule="evenodd"/></svg>
      <span class="sidebar-item-text">レセプト</span>
    </a>
  </div>

  <div class="sidebar-divider"></div>

  <div class="sidebar-section">
    <div class="sidebar-section-label">不妊治療</div>
    <a href="26_semen_analysis.html" class="sidebar-item" data-page="semen">
      <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7z" clip-rule="evenodd"/></svg>
      <span class="sidebar-item-text">精液検査</span>
    </a>
    <a href="27_artificial_insemination.html" class="sidebar-item" data-page="ai">
      <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/></svg>
      <span class="sidebar-item-text">人工授精</span>
    </a>
    <a href="28_opu_informations.html" class="sidebar-item" data-page="opu">
      <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"/></svg>
      <span class="sidebar-item-text">OPU（採卵）</span>
    </a>
    <a href="29_transplantation.html" class="sidebar-item" data-page="et">
      <svg viewBox="0 0 20 20" fill="currentColor"><path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z"/></svg>
      <span class="sidebar-item-text">移植（ET）</span>
    </a>
    <a href="30_frozen_eggs.html" class="sidebar-item" data-page="frozen_eggs">
      <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
      <span class="sidebar-item-text">凍結胚</span>
    </a>
    <a href="31_frozen_sperm.html" class="sidebar-item" data-page="frozen_sperm">
      <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
      <span class="sidebar-item-text">凍結精子</span>
    </a>
  </div>

  <div class="sidebar-divider"></div>

  <div class="sidebar-section">
    <div class="sidebar-section-label">書類管理</div>
    <a href="19_patient_documents.html" class="sidebar-item" data-page="docs">
      <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd"/></svg>
      <span class="sidebar-item-text">患者文書</span>
    </a>
    <a href="20_resident_registries.html" class="sidebar-item" data-page="resident">
      <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd"/></svg>
      <span class="sidebar-item-text">住民票・戸籍</span>
    </a>
    <a href="21_consent_letters.html" class="sidebar-item" data-page="consent">
      <svg viewBox="0 0 20 20" fill="currentColor"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/></svg>
      <span class="sidebar-item-text">電子同意書</span>
    </a>
    <a href="24_referral_informations.html" class="sidebar-item" data-page="referral">
      <svg viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
      <span class="sidebar-item-text">紹介状</span>
    </a>
    <a href="25_subsidies.html" class="sidebar-item" data-page="subsidy">
      <svg viewBox="0 0 20 20" fill="currentColor"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"/></svg>
      <span class="sidebar-item-text">助成金</span>
    </a>
  </div>

  <div class="sidebar-divider"></div>

  <div class="sidebar-section">
    <div class="sidebar-section-label">倫理委員会</div>
    <a href="38_ethics_dashboard.html" class="sidebar-item" data-page="ethics_dashboard">
      <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 1l7 3v5c0 4.03-2.83 7.79-7 9-4.17-1.21-7-4.97-7-9V4l7-3zm3.707 6.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
      <span class="sidebar-item-text">倫理委員会ホーム</span>
    </a>
    <a href="39_ethics_applications.html" class="sidebar-item" data-page="ethics_applications">
      <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 5a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"/></svg>
      <span class="sidebar-item-text">倫理申請一覧</span>
    </a>
    <a href="42_ethics_meetings.html" class="sidebar-item" data-page="ethics_meetings">
      <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm9 6H5v8h10V8zm-8 2h2v2H7v-2z" clip-rule="evenodd"/></svg>
      <span class="sidebar-item-text">委員会開催管理</span>
    </a>
    <a href="43_ethics_members.html" class="sidebar-item" data-page="ethics_members">
      <svg viewBox="0 0 20 20" fill="currentColor"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.97 5.97 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/></svg>
      <span class="sidebar-item-text">委員名簿・COI</span>
    </a>
  </div>

  <div class="sidebar-divider"></div>

  <div class="sidebar-section">
    <div class="sidebar-section-label">予約・診療</div>
    <a href="14_appointments.html" class="sidebar-item" data-page="appointments">
      <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/></svg>
      <span class="sidebar-item-text">DQ予約情報</span>
    </a>
    <a href="23_online_consultation.html" class="sidebar-item" data-page="online">
      <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clip-rule="evenodd"/></svg>
      <span class="sidebar-item-text">オンライン診療</span>
    </a>
  </div>

  <div class="sidebar-divider"></div>

  <div class="sidebar-section">
    <div class="sidebar-section-label">メール</div>
    <a href="16_mail_inbox.html" class="sidebar-item" data-page="mail">
      <svg viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
      <span class="sidebar-item-text">メール受信箱</span>
    </a>
    <a href="32_mail_template.html" class="sidebar-item" data-page="mail_template">
      <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"/></svg>
      <span class="sidebar-item-text">メールテンプレート</span>
    </a>
    <a href="33_email_campaigns.html" class="sidebar-item" data-page="campaign">
      <svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/></svg>
      <span class="sidebar-item-text">一斉配信</span>
    </a>
  </div>

  <div class="sidebar-divider"></div>

  <div class="sidebar-section">
    <div class="sidebar-section-label">在庫管理</div>
    <a href="17_inventories.html" class="sidebar-item" data-page="inventory">
      <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4z" clip-rule="evenodd"/></svg>
      <span class="sidebar-item-text">在庫一覧</span>
    </a>
    <a href="34_medical_inventories.html" class="sidebar-item" data-page="inventory_log">
      <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z" clip-rule="evenodd"/></svg>
      <span class="sidebar-item-text">入出庫履歴</span>
    </a>
  </div>

  <div class="sidebar-divider"></div>

  <div class="sidebar-section">
    <div class="sidebar-section-label">システム</div>
    <a href="35_notifications.html" class="sidebar-item" data-page="notifications">
      <svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/></svg>
      <span class="sidebar-item-text">お知らせ</span>
    </a>
    <a href="36_admin_accounts.html" class="sidebar-item" data-page="admin">
      <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"/></svg>
      <span class="sidebar-item-text">アカウント管理</span>
    </a>
    <a href="37_settings.html" class="sidebar-item" data-page="settings">
      <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/></svg>
      <span class="sidebar-item-text">設定</span>
    </a>
  </div>
</aside>`;

// ページ読み込み時に共通コンポーネントを挿入
document.addEventListener('DOMContentLoaded', function() {
  const headerEl = document.getElementById('header-container');
  if (headerEl) headerEl.outerHTML = HEADER_HTML;

  const sidebarEl = document.getElementById('sidebar-container');
  if (sidebarEl) sidebarEl.outerHTML = SIDEBAR_HTML;

  // 現在のページに対応するサイドバーアイテムをアクティブに
  const currentPage = document.body.dataset.page;
  if (currentPage) {
    document.querySelectorAll('.sidebar-item[data-page="' + currentPage + '"]').forEach(el => {
      el.classList.add('active');
    });
  }
});
