(function() {
const i18nData = {
  locale: "en",
  dictionary: {
    "3ylu$": "Please choose language",
    "Pq*},": "This example integrates multi-language, routing and dynamic import code splitting.",
    "I2)`L": "Hello, World!",
    "w`eVn": "Module A",
    "Nd&Jm": "Module B",
    "H5*]|": "Module C",
    "hv+H7": "The Moon over the River on a Spring Night"
  }
};
if (typeof jinge !== 'undefined') {
  jinge.i18n.__regLoc(i18nData);
} else {
  window.JINGE_I18N_DATA = i18nData;
}
})();