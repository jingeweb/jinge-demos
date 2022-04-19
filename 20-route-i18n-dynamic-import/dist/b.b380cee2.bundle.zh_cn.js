(function() {
function renderFactory(
  textRenderFn792732ac12612c8319900402, createElementWithoutAttrs792732ac12612c8319900402, __792732ac12612c8319900402, attrs792732ac12612c8319900402, assertRenderResults792732ac12612c8319900402, Printer_ed2d81e4de7e_ed15ca9c6fcf
) {
  return {
components: {
  "4< 8'": function(component, vm_0) { return [
    textRenderFn792732ac12612c8319900402(component, "海上明"),
    (() => {
      const el = createElementWithoutAttrs792732ac12612c8319900402(
        "span",
        "月"
      );
      component[__792732ac12612c8319900402].rootNodes.push(el);
      return el;
    })(),
    textRenderFn792732ac12612c8319900402(component, "共潮生")
  ]}
},
attributes: {

}
}}
const i18nData = {
  locale: "zh_cn",
  dictionary: {
    "uh,p^": "春江潮水连海平，",
    "N.>P]": "滟滟随波千万里，何处春江无月明！",
    "y)w}-": "江畔何人初见月？江月何年初照人？",
    "F{@C-": "人生代代无穷已，江月年年望相似。"
  },
  render: renderFactory
};
if (typeof jinge !== 'undefined') {
  jinge.i18n.__regLoc(i18nData);
} else {
  window.JINGE_I18N_DATA = i18nData;
}
})();