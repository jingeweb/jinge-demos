(function() {
function renderFactory(
  textRenderFn, createTextNode, setText, VM_ATTRS, VM_ON, ROOT_NODES, setAttribute, wrapAttrs, VM_DEBUG_NAME, CONTEXT, addParentStyleId, CSTYLE_PID, assertRenderResults, RENDER, Printer_4f3eb8aecd17, createElement
) { return {
components: {
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
    textRenderFn(component, "hello, "),
    ...(() => {
      const attrs = wrapAttrs({
        [VM_DEBUG_NAME]: "attrs_of_<Printer>",
        [VM_ATTRS]: null,
        [CONTEXT]: component[CONTEXT],
      });
      const el = new Printer_4f3eb8aecd17(attrs);
      addParentStyleId(el, component[CSTYLE_PID]);
      component[ROOT_NODES].push(el);
      return assertRenderResults(el[RENDER](component));
    })()
  ]},
  c: function(component, vm_0) { return [
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
},
attributes: {
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
  render: renderFactory
};
if (typeof jinge !== 'undefined') {
  jinge.i18n.r(i18nData);
} else {
  window.JINGE_I18N_DATA = i18nData;
}
})();