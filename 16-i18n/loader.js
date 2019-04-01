let locale = sessionStorage.getItem('locale') || navigator.language.toLowerCase().replace(/-/g, '_');

if (locale !== 'zh_cn' && locale !== 'en') {
  locale = 'en';
}

fetch(`i18n/${locale}.json`).then(res => res.json()).then(dictData => {
  // pass i18n data to jinge framework by window.JingeI18nData
  window.JingeI18nData = dictData;
  return loadScript('dist/app.js');
}).catch(err => {
  console.error(err);
  alert(err.message);
});

function loadScript(file) {
  return new Promise((resolve, reject) => {
    const $s = document.createElement('script');
    $s.src = file;
    $s.onload = resolve;
    $s.onerror = reject;
    document.getElementsByTagName('head')[0].appendChild($s);
  });
}