(function() {
function i18nRender(
  textRenderFn, createTextNode, setText, VM_ATTRS, VM_ON, ROOT_NODES, createElement, CSTYLE_PID
) { return {
  a: function(component, vm_0, vm_1) { return [
    textRenderFn(component, "你好，"),
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
        "多语言支持不同的DOM结构，比如这里是",
        createElement(
          "span",
          {
            style: "color: red;"
          },
          "红色的中文"
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
      const __attrV = '你好\uFF0C' + function () {
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
      const __attrV = '春江潮水连海平\uFF0C海上' + vm_0.moon + '共潮生';
          isDOM ? setAttribute(target, attrName, __attrV) : target[attrName] = __attrV;
    };
    fn_();
    vm_0[VM_ATTRS][VM_ON](["moon"], fn_, component);
  }
}}
const i18nData = {
  locale: "zh_cn",
  dictionary: {
    a: "明月",
    b: "大葛",
    c: "小葛",
    d: "请选择语言",
    e: "你好，世界！",
    f: "静以修身，检以养德"
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