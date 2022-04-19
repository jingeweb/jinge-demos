(function() {
const i18nData = {
  locale: "en",
  dictionary: {
    "y<+oG": "The following random text content is just to make the code large enough that webpack will extract it into an independent chunk file."
  }
};
if (typeof jinge !== 'undefined') {
  jinge.i18n.__regLoc(i18nData);
} else {
  window.JINGE_I18N_DATA = i18nData;
}
})();