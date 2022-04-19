(function() {
function renderFactory(
  textRenderFn792732ac12612c8319900402, createElementWithoutAttrs792732ac12612c8319900402, __792732ac12612c8319900402, attrs792732ac12612c8319900402, assertRenderResults792732ac12612c8319900402, Printer_ed2d81e4de7e_ed15ca9c6fcf
) {
  return {
components: {
  "4< 8'": function(component, vm_0) { return [
    textRenderFn792732ac12612c8319900402(component, "And with the river's tide uprises the "),
    (() => {
      const el = createElementWithoutAttrs792732ac12612c8319900402(
        "span",
        "moon"
      );
      component[__792732ac12612c8319900402].rootNodes.push(el);
      return el;
    })(),
    textRenderFn792732ac12612c8319900402(component, " bright")
  ]},
  "Y?`OX": function(component, vm_0) { return [
    textRenderFn792732ac12612c8319900402(component, "Oh,oh: "),
    ...(() => {
      const attrs = attrs792732ac12612c8319900402({
        [__792732ac12612c8319900402]: {
          debugName: "attrs_of_<Printer>",
          context: component[__792732ac12612c8319900402].context,
        },
      });
      const el = Printer_ed2d81e4de7e_ed15ca9c6fcf.create(attrs);
      component[__792732ac12612c8319900402].rootNodes.push(el);
      return assertRenderResults792732ac12612c8319900402(el.__render());
    })()
  ]}
},
attributes: {

}
}}
const i18nData = {
  locale: "en",
  dictionary: {
    "uh,p^": "In spring the river rises as high as the sea.",
    "N.>P]": "She follows the rolling waves for then thousandli; Where'er the river flows, there overflows her light."
  },
  render: renderFactory
};
if (typeof jinge !== 'undefined') {
  jinge.i18n.__regLoc(i18nData);
} else {
  window.JINGE_I18N_DATA = i18nData;
}
})();