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
  ]}
},
attributes: {

}
}}
const i18nData = {
  locale: "en",
  dictionary: {
    "uh,p^": "In spring the river rises as high as the sea.",
    "N.>P]": "She follows the rolling waves for then thousandli; Where'er the river flows, there overflows her light.",
    "y)w}-": "Who by the riverside did first see the moon rise? When did the moon first see a man by riverside?",
    "F{@C-": "Many generations have come and passed away; From year to year the moons look alike, old and new.",
    "F,AL?": "We do not know tonight for whom she sheds her ray, But hear the river say to its water adieu.",
    "A5b1=": "Away, away is sailing a single cloud white; On Farewell Beach are pining away maples green."
  },
  render: renderFactory
};
if (typeof jinge !== 'undefined') {
  jinge.i18n.__regLoc(i18nData);
} else {
  window.JINGE_I18N_DATA = i18nData;
}
})();