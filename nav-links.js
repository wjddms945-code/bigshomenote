/* 사이드바 공용: 외부 관리자 페이지 이동 링크
   - 기관운영관리: 기관이 직접 운영하는 관리자 페이지로 이동합니다.
   - 주소는 이 파일의 ORG_OPS_ADMIN_URL 한 곳에서만 관리합니다. */
window.ORG_OPS_ADMIN_URL = ''; // TODO: 기관 관리자 페이지 주소 확정 후 입력 (예: 'https://...')

function goOrgOpsAdmin() {
  var url = window.ORG_OPS_ADMIN_URL;
  if (!url) {
    var t = document.createElement('div');
    t.textContent = '기관 관리자 페이지 주소가 아직 설정되지 않았습니다. (프로토타입: nav-links.js 의 ORG_OPS_ADMIN_URL 에 입력)';
    t.style.cssText = 'position:fixed;left:50%;bottom:28px;transform:translateX(-50%);background:#1A1D2E;color:#fff;padding:11px 18px;border-radius:8px;font-size:13px;z-index:99999;box-shadow:0 8px 28px rgba(0,0,0,.2);max-width:90vw';
    document.body.appendChild(t);
    setTimeout(function () { t.remove(); }, 3800);
    return;
  }
  window.open(url, '_blank', 'noopener');
}
