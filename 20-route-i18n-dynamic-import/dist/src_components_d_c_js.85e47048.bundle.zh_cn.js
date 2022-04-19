(function() {
const i18nData = {
  locale: "zh_cn",
  dictionary: {
    "y<+oG": "以下随机的文本内容只是为了让代码足够大到 webpack 会抽取成独立的 chunk 文件。"
  }
};
if (typeof jinge !== 'undefined') {
  jinge.i18n.__regLoc(i18nData);
} else {
  window.JINGE_I18N_DATA = i18nData;
}
})();