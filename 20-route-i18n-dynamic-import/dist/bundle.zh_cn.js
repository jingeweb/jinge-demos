(function() {
const i18nData = {
  locale: "zh_cn",
  dictionary: {
    "3ylu$": "请选择语言",
    "Pq*},": "这个示例整合了多语言、路由和模块按需动态加载能力。",
    "I2)`L": "你好，世界！",
    "w`eVn": "模块 A",
    "Nd&Jm": "模块 B",
    "H5*]|": "模块 C",
    "hv+H7": "春江花月夜"
  }
};
if (typeof jinge !== 'undefined') {
  jinge.i18n.__regLoc(i18nData);
} else {
  window.JINGE_I18N_DATA = i18nData;
}
})();