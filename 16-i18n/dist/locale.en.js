(function() {
function i18nRender(
  textRenderFn, createTextNode, setText, VM_ATTRS, VM_ON, ROOT_NODES, createElement, CSTYLE_PID
) { return {
  a: function(component, vm_0, vm_1) { return [
    textRenderFn(component, "Hello, "),
    (() => {
      const el = createTextNode();
      const fn_0 = () => {
        setText(el, function () {
          let _0;
          return (_0 = vm_1.each) === null || _0 === void 0 ? void 0 : _0.name;
      }());
      };
      fn_0();
      vm_1[VM_ATTRS][VM_ON](["each","name"], fn_0, component);
      component[ROOT_NODES].push(el);
      return el;
    })()
  ]},
  b: function(component, vm_0) { return [
    (() => {
      const el = createElement(
        "p",
        component[CSTYLE_PID],
        "i18n support complex dom structure, for example, here is ",
        createElement(
          "span",
          {
            style: "color: blue;"
          },
          "blue english"
        )
      );
      component[ROOT_NODES].push(el);
      return el;
    })()
  ]}
}}
function i18nAttribute(
  setAttribute, VM_ATTRS, VM_ON
) { return {
  a: function(target, attrName, isDOM, component, vm_0, vm_1) {
    const fn_ = () => {
      const __attrV = 'Hello, ' + function () {
        let _0;
        return (_0 = vm_1.each) === null || _0 === void 0 ? void 0 : _0.name;
    }();
          isDOM ? setAttribute(target, attrName, __attrV) : target[attrName] = __attrV;
    };
    fn_();
    vm_1[VM_ATTRS][VM_ON](["each","name"], fn_, component);
  },
  b: function(target, attrName, isDOM, component, vm_0) {
    const fn_ = () => {
      const __attrV = 'Spring sees river tide rise just as that in the sea, Where the ' + vm_0.moon + ' is rising along with the tide.';
          isDOM ? setAttribute(target, attrName, __attrV) : target[attrName] = __attrV;
    };
    fn_();
    vm_0[VM_ATTRS][VM_ON](["moon"], fn_, component);
  }
}}
const i18nData = {
  locale: "en",
  dictionary: {
    a: "bright moon",
    b: "Mr. Ge",
    c: "Son of Mr. Ge",
    d: "Please choose language",
    e: "Hello, World!",
    f: "Quiet for body, Squint for soul"
  },
  render: i18nRender,
  attribute: i18nAttribute
};
if (typeof jinge !== 'undefined') {
  jinge.i18n.r(i18nData);
} else {
  window.JINGE_I18N_DATA = i18nData;
}
})();