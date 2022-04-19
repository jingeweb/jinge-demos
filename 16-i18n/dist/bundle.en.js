(function() {
const i18nData = {
  locale: "en",
  dictionary: {
    oClAf: "Hello",
    URmtI: "Test"
  }
};
if (typeof jinge !== 'undefined') {
  jinge.i18n.__regLoc(i18nData);
} else {
  window.JINGE_I18N_DATA = i18nData;
}
})();