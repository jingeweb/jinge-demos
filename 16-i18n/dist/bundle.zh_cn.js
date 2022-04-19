(function() {
const i18nData = {
  locale: "zh_cn",
  dictionary: {
    oClAf: "你好",
    URmtI: "测试"
  }
};
if (typeof jinge !== 'undefined') {
  jinge.i18n.__regLoc(i18nData);
} else {
  window.JINGE_I18N_DATA = i18nData;
}
})();