/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app.html":
/*!******************!*\
  !*** ./app.html ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge/lib/index.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "h2",
      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].compStyle,
      "Simple If"
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })(),
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "div",
      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].compStyle,
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
        "p",
        ...(() => {
          const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
            [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
              debugName: "attrs_of_<if>",
              context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
              slots: {
                'default': function(component) {
              return [
              (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, "It's greater than 5.")
              ];
            }
            }
            },
            expect: null
          });
          const fn_0 = () => {
            attrs.expect = vm_0.n > 5;
          };
          fn_0();
          vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["n"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
          const el = jinge__WEBPACK_IMPORTED_MODULE_0__.IfComponent.create(attrs);
          component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
          return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
        })(),
        ...(() => {
          const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
            [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
              debugName: "attrs_of_<if>",
              context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
              slots: {
                'default': function(component) {
              return [
              (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, "It's less or equal than 5.")
              ];
            }
            }
            },
            expect: null
          });
          const fn_0 = () => {
            attrs.expect = vm_0.n <= 5;
          };
          fn_0();
          vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["n"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
          const el = jinge__WEBPACK_IMPORTED_MODULE_0__.IfComponent.create(attrs);
          component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
          return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
        })()
      )
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })(),
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "h2",
      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].compStyle,
      "Multiple Elements Under If"
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })(),
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "div",
      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].compStyle,
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
        "p",
        ...(() => {
          const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
            [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
              debugName: "attrs_of_<if>",
              context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
              slots: {
                'default': function(component) {
              return [
              (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, "\n  It's\n  "),
              (() => {
                const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  "span",
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].compStyle,
                  "greater than "
                );
                const fn_0 = () => {
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setAttribute)(el, "style", 'color: ' + (vm_0.n >= 8 ? 'red' : 'blue'));
                };
                fn_0();
                vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["n"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                return el;
              })(),
              (() => {
                const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  "span",
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].compStyle,
                  "5."
                );
                component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                return el;
              })()
              ];
            }
            }
            },
            expect: null
          });
          const fn_0 = () => {
            attrs.expect = vm_0.n > 5;
          };
          fn_0();
          vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["n"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
          const el = jinge__WEBPACK_IMPORTED_MODULE_0__.IfComponent.create(attrs);
          component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
          return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
        })()
      )
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })(),
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "h2",
      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].compStyle,
      "If and Else"
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })(),
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "div",
      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].compStyle,
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
        "p",
        ...(() => {
          const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
            [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
              debugName: "attrs_of_<if>",
              context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
              slots: {
                'default': function(component) {
              return [
              (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, "\n      It's greater than "),
              (() => {
                const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  "span",
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].compStyle,
                  "5"
                );
                component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                return el;
              })()
              ];
            },
                'else': function(component) {
              return [
              (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, "\n      It's less or equal than "),
              (() => {
                const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  "span",
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].compStyle,
                  "5"
                );
                component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                return el;
              })()
              ];
            }
            }
            },
            expect: null
          });
          const fn_0 = () => {
            attrs.expect = vm_0.n > 5;
          };
          fn_0();
          vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["n"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
          const el = jinge__WEBPACK_IMPORTED_MODULE_0__.IfComponent.create(attrs);
          component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
          return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
        })()
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
        "p",
        ...(() => {
          const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
            [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
              debugName: "attrs_of_<if>",
              context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
              listeners: {
                "branch-switched": { fn: function(...args) { vm_0.log('if updated', ...args) }, opts: null }
            },
              slots: {
                'default': function(component) {
              return [
              (() => {
                const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  "span",
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].compStyle,
                  "It's greater than 5."
                );
                component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                return el;
              })()
              ];
            },
                'else': function(component) {
              return [
              (() => {
                const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  "span",
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].compStyle,
                  "It's less or equal than 5."
                );
                component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                return el;
              })()
              ];
            }
            }
            },
            expect: null
          });
          const fn_0 = () => {
            attrs.expect = vm_0.n > 5;
          };
          fn_0();
          vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["n"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
          const el = jinge__WEBPACK_IMPORTED_MODULE_0__.IfComponent.create(attrs);
          component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
          return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
        })()
      )
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })(),
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "h2",
      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].compStyle,
      "Use class-name instead of If"
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })(),
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "div",
      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].compStyle,
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
        "p",
        (() => {
          const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
            "span",
            "It's greater than 5."
          );
          const fn_0 = () => {
            (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setAttribute)(el, "class", vm_0.n <= 5 ? 'hide' : '');
          };
          fn_0();
          vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["n"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
          return el;
        })(),
        (() => {
          const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
            "span",
            "It's less or equal than 5."
          );
          const fn_0 = () => {
            (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setAttribute)(el, "class", vm_0.n > 5 ? 'hide' : '');
          };
          fn_0();
          vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["n"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
          return el;
        })()
      )
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })(),
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "h2",
      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].compStyle,
      "Switch-Case"
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })(),
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "div",
      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].compStyle,
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
        "p",
        ...(() => {
          const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
            [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
              debugName: "attrs_of_<switch>",
              context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
              listeners: {
                "branch-switched": { fn: function(...args) { vm_0.log('switch updated', ...args) }, opts: null }
            },
              slots: {
                '0': function(component) {
              return [
              (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, "零")
              ];
            },
                '3': function(component) {
              return [
              (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, "三")
              ];
            },
                '8': function(component) {
              return [
              (() => {
                const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  "p",
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].compStyle,
                  "八"
                );
                component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                return el;
              })()
              ];
            },
                'default': function(component) {
              return [
              (() => {
                const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createTextNode)();
                const fn_0 = () => {
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setText)(el, vm_0.n);
                };
                fn_0();
                vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["n"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                return el;
              })(),
              ...(() => {
                const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                  [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                    debugName: "attrs_of_<if>",
                    compStyle: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].compStyle ? { ...component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].compStyle } : null,
                    context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                    slots: {
                      'default': function(component) {
                    return [
                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, " > 5")
                    ];
                  }
                  }
                  },
                  expect: null
                });
                const fn_0 = () => {
                  attrs.expect = vm_0.n > 5;
                };
                fn_0();
                vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["n"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                const el = jinge__WEBPACK_IMPORTED_MODULE_0__.IfComponent.create(attrs);
                component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
              })()
              ];
            }
            }
            },
            test: null
          });
          const fn_0 = () => {
            attrs.test = vm_0.n;
          };
          fn_0();
          vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["n"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
          const el = jinge__WEBPACK_IMPORTED_MODULE_0__.SwitchComponent.create(attrs);
          component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
          return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
        })()
      )
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ }),

/***/ "../../jinge/lib/__export.js":
/*!***********************************!*\
  !*** ../../jinge/lib/__export.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BindHtmlComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.BindHtmlComponent),
/* harmony export */   "DynamicRenderComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.DynamicRenderComponent),
/* harmony export */   "ForComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ForComponent),
/* harmony export */   "ForEachComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ForEachComponent),
/* harmony export */   "HideComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.HideComponent),
/* harmony export */   "I18nComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.I18nComponent),
/* harmony export */   "IfComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.IfComponent),
/* harmony export */   "LogComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.LogComponent),
/* harmony export */   "ParameterComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ParameterComponent),
/* harmony export */   "SwitchComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.SwitchComponent),
/* harmony export */   "ToggleClassComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ToggleClassComponent),
/* harmony export */   "ChunkResourceLoader": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.ChunkResourceLoader),
/* harmony export */   "Component": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.Component),
/* harmony export */   "ComponentStates": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.ComponentStates),
/* harmony export */   "ContextStates": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.ContextStates),
/* harmony export */   "MESSENGER_LISTENERS": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.MESSENGER_LISTENERS),
/* harmony export */   "Messenger": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.Messenger),
/* harmony export */   "TransitionStates": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.TransitionStates),
/* harmony export */   "__": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.__),
/* harmony export */   "_t": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__._t),
/* harmony export */   "assertRenderResults": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.assertRenderResults),
/* harmony export */   "attrs": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.attrs),
/* harmony export */   "bootstrap": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.bootstrap),
/* harmony export */   "chunk": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.chunk),
/* harmony export */   "compile": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.compile),
/* harmony export */   "emptyRenderFn": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.emptyRenderFn),
/* harmony export */   "errorRenderFn": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.errorRenderFn),
/* harmony export */   "getDuration": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.getDuration),
/* harmony export */   "getDurationType": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.getDurationType),
/* harmony export */   "i18n": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.i18n),
/* harmony export */   "i18nRenderFn": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.i18nRenderFn),
/* harmony export */   "isComponent": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.isComponent),
/* harmony export */   "manager": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.manager),
/* harmony export */   "textRenderFn": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.textRenderFn),
/* harmony export */   "addEvent": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.addEvent),
/* harmony export */   "appendChildren": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.appendChildren),
/* harmony export */   "arrayEqual": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.arrayEqual),
/* harmony export */   "arrayPushIfNotExist": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.arrayPushIfNotExist),
/* harmony export */   "arrayRemove": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.arrayRemove),
/* harmony export */   "clearImmediate": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.clearImmediate),
/* harmony export */   "createElement": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.createElement),
/* harmony export */   "createElementWithChild": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.createElementWithChild),
/* harmony export */   "createElementWithoutAttrs": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.createElementWithoutAttrs),
/* harmony export */   "createFragment": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.createFragment),
/* harmony export */   "createSVGElement": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.createSVGElement),
/* harmony export */   "createSVGElementWithoutAttrs": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.createSVGElementWithoutAttrs),
/* harmony export */   "createTextNode": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.createTextNode),
/* harmony export */   "disableWarning": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.disableWarning),
/* harmony export */   "insertAfter": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.insertAfter),
/* harmony export */   "isArray": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.isArray),
/* harmony export */   "isBoolean": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.isBoolean),
/* harmony export */   "isFunction": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.isFunction),
/* harmony export */   "isNumber": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.isNumber),
/* harmony export */   "isObject": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.isObject),
/* harmony export */   "isPromise": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.isPromise),
/* harmony export */   "isString": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.isString),
/* harmony export */   "isUndefined": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.isUndefined),
/* harmony export */   "registerEvent": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.registerEvent),
/* harmony export */   "removeAttribute": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.removeAttribute),
/* harmony export */   "removeEvent": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.removeEvent),
/* harmony export */   "replaceChildren": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.replaceChildren),
/* harmony export */   "setAttribute": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.setAttribute),
/* harmony export */   "setImmediate": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.setImmediate),
/* harmony export */   "setText": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.setText),
/* harmony export */   "typeOf": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.typeOf),
/* harmony export */   "uid": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.uid),
/* harmony export */   "warn": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.warn),
/* harmony export */   "$$": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.$$),
/* harmony export */   "ViewModelCoreImpl": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.ViewModelCoreImpl),
/* harmony export */   "addParent": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.addParent),
/* harmony export */   "createAttributes": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.createAttributes),
/* harmony export */   "createComponent": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.createComponent),
/* harmony export */   "createViewModel": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.createViewModel),
/* harmony export */   "deleteNode": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.deleteNode),
/* harmony export */   "getPropertyName": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.getPropertyName),
/* harmony export */   "handleCancel": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.handleCancel),
/* harmony export */   "handleOnce": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.handleOnce),
/* harmony export */   "isInnerObj": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.isInnerObj),
/* harmony export */   "isPublicProperty": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.isPublicProperty),
/* harmony export */   "isViewModel": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.isViewModel),
/* harmony export */   "loopClearNode": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.loopClearNode),
/* harmony export */   "loopCreateNode": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.loopCreateNode),
/* harmony export */   "loopGetNode": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.loopGetNode),
/* harmony export */   "loopHandle": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.loopHandle),
/* harmony export */   "loopNotify": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.loopNotify),
/* harmony export */   "parsePropertyPath": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.parsePropertyPath),
/* harmony export */   "removeParent": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.removeParent),
/* harmony export */   "shiftParent": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.shiftParent),
/* harmony export */   "unwatch": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.unwatch),
/* harmony export */   "vm": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.vm),
/* harmony export */   "watch": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.watch)
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "../../jinge/lib/components/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "../../jinge/lib/core/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "../../jinge/lib/util/index.js");
/* harmony import */ var _vm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vm */ "../../jinge/lib/vm/index.js");




//# sourceMappingURL=__export.js.map

/***/ }),

/***/ "../../jinge/lib/__register_i18n_render_deps.js":
/*!******************************************************!*\
  !*** ../../jinge/lib/__register_i18n_render_deps.js ***!
  \******************************************************/
/***/ (() => {



/***/ }),

/***/ "../../jinge/lib/components/class.js":
/*!*******************************************!*\
  !*** ../../jinge/lib/components/class.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToggleClassComponent": () => (/* binding */ ToggleClassComponent)
/* harmony export */ });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "../../jinge/lib/vm/common.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/component */ "../../jinge/lib/core/component.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "../../jinge/lib/util/index.js");
/* harmony import */ var _core_transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/transition */ "../../jinge/lib/core/transition.js");




function loopOperateClass(el, isAddOperate, domClass) {
    if ((0,_core_component__WEBPACK_IMPORTED_MODULE_1__.isComponent)(el)) {
        el[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes.forEach((ce) => loopOperateClass(ce, isAddOperate, domClass));
    }
    else if (isAddOperate) {
        el.classList.add(domClass);
    }
    else {
        el.classList.remove(domClass);
    }
}
class ToggleClassComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(attrs) {
      if (!attrs || !(0,_util__WEBPACK_IMPORTED_MODULE_2__.isObject)(attrs.class)) {
        throw new Error('<toggle-class> component require "class" attribute to be Object.');
      }
      super(attrs);
      const __vm_792732ac1261 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
      const fn_2_792732ac1261 = () => {
        __vm_792732ac1261.domClass = attrs.class;
      };
      fn_2_792732ac1261();
      attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__watch('class', fn_2_792732ac1261);
      const fn_3_792732ac1261 = () => {
        __vm_792732ac1261.transition = !!attrs.transition;
      };
      fn_3_792732ac1261();
      attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__watch('transition', fn_3_792732ac1261);
      __vm_792732ac1261._t = null;
      __vm_792732ac1261._i = -1;
      __vm_792732ac1261[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__watch('domClass.**', () => {
        __vm_792732ac1261.__updateIfNeed();
      });
    }
    __render() {
        const rr = super.__render();
        this.__update(true);
        return rr;
    }
    __beforeDestroy() {
        this._t = null; // maybe unnecessary
    }
    __update(first) {
        const el = this.transition ? this.__transitionDOM : null;
        if (el && el.nodeType !== Node.ELEMENT_NODE) {
            // ignore comment or text-node
            return;
        }
        if (this.transition && !this._t) {
            this._t = new Map();
        }
        const cs = this.domClass;
        Object.keys(cs).forEach((k) => {
            const v = cs[k];
            if (!this.transition) {
                loopOperateClass(this, !!v, k);
                return;
            }
            if (first) {
                this._t.set(k, [
                    v ? _core_transition__WEBPACK_IMPORTED_MODULE_3__.TransitionStates.ENTERED : _core_transition__WEBPACK_IMPORTED_MODULE_3__.TransitionStates.LEAVED,
                    null, // saved onEnd callback
                ]);
                if (v) {
                    el.classList.add(k);
                }
                else {
                    el.classList.remove(k);
                }
                return;
            }
            const t = this._t.get(k);
            if (!t) {
                // eslint-disable-next-line no-console
                console.error('Unsupport <toogle-class> attribute. see https://todo');
                return;
            }
            const s = t[0];
            if ((v && s <= _core_transition__WEBPACK_IMPORTED_MODULE_3__.TransitionStates.ENTERED) || (!v && s >= _core_transition__WEBPACK_IMPORTED_MODULE_3__.TransitionStates.LEAVING)) {
                return;
            }
            if (s === (v ? _core_transition__WEBPACK_IMPORTED_MODULE_3__.TransitionStates.LEAVING : _core_transition__WEBPACK_IMPORTED_MODULE_3__.TransitionStates.ENTERING)) {
                el.classList.remove(k + (v ? '-leave-active' : '-enter-active'));
                el.classList.remove(k + (v ? '-leave' : '-enter'));
                (0,_util__WEBPACK_IMPORTED_MODULE_2__.removeEvent)(el, 'transitionend', t[1]);
                (0,_util__WEBPACK_IMPORTED_MODULE_2__.removeEvent)(el, 'animationend', t[1]);
                t[1] = null;
                this.__notify('transition', v ? 'leave-cancelled' : 'enter-cancelled', k, el);
            }
            const classOfStart = k + (v ? '-enter' : '-leave');
            const classOfActive = k + (v ? '-enter-active' : '-leave-active');
            el.classList.add(classOfStart);
            // force render by calling getComputedStyle
            (0,_core_transition__WEBPACK_IMPORTED_MODULE_3__.getDurationType)(el);
            el.classList.add(classOfActive);
            const tsEndName = (0,_core_transition__WEBPACK_IMPORTED_MODULE_3__.getDurationType)(el);
            if (!tsEndName) {
                el.classList.remove(classOfStart);
                el.classList.remove(classOfActive);
                t[0] = v ? _core_transition__WEBPACK_IMPORTED_MODULE_3__.TransitionStates.ENTERED : _core_transition__WEBPACK_IMPORTED_MODULE_3__.TransitionStates.LEAVED;
                if (v) {
                    el.classList.add(k);
                }
                else {
                    el.classList.remove(k);
                }
                return;
            }
            const onEnd = () => {
                (0,_util__WEBPACK_IMPORTED_MODULE_2__.removeEvent)(el, 'transitionend', onEnd);
                (0,_util__WEBPACK_IMPORTED_MODULE_2__.removeEvent)(el, 'animationend', onEnd);
                el.classList.remove(classOfStart);
                el.classList.remove(classOfActive);
                t[1] = null;
                t[0] = v ? _core_transition__WEBPACK_IMPORTED_MODULE_3__.TransitionStates.ENTERED : _core_transition__WEBPACK_IMPORTED_MODULE_3__.TransitionStates.LEAVED;
                if (v) {
                    el.classList.add(k);
                }
                else {
                    el.classList.remove(k);
                }
                this.__notify('transition', v ? 'after-enter' : 'after-leave', k, el);
            };
            t[0] = v ? _core_transition__WEBPACK_IMPORTED_MODULE_3__.TransitionStates.ENTERING : _core_transition__WEBPACK_IMPORTED_MODULE_3__.TransitionStates.LEAVING;
            t[1] = onEnd;
            (0,_util__WEBPACK_IMPORTED_MODULE_2__.addEvent)(el, tsEndName, onEnd);
            this.__notify('transition', v ? 'before-enter' : 'before-leave', k, el);
            (0,_util__WEBPACK_IMPORTED_MODULE_2__.setImmediate)(() => {
                this.__notify('transition', v ? 'enter' : 'leave', k, el);
            });
        });
    }
}
//# sourceMappingURL=class.js.map

/***/ }),

/***/ "../../jinge/lib/components/dynamic.js":
/*!*********************************************!*\
  !*** ../../jinge/lib/components/dynamic.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicRenderComponent": () => (/* binding */ DynamicRenderComponent)
/* harmony export */ });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "../../jinge/lib/vm/common.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/component */ "../../jinge/lib/core/component.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "../../jinge/lib/util/index.js");
/* harmony import */ var _core_render_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/render_fns */ "../../jinge/lib/core/render_fns.js");




function createEl(component) {
    var _a, _b;
    let Clazz = (_a = component._r) === null || _a === void 0 ? void 0 : _a._component;
    const pAttrs = component[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].passedAttrs;
    const attrs = (0,_core_component__WEBPACK_IMPORTED_MODULE_1__.attrs)({
        [_core_component__WEBPACK_IMPORTED_MODULE_1__.__]: {
            slots: null,
            context: component[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].context,
            compStyle: component[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].compStyle,
        },
    });
    if (!Clazz) {
        attrs[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].slots = {
            default: ((_b = component._r) === null || _b === void 0 ? void 0 : _b._renderFn) || _core_render_fns__WEBPACK_IMPORTED_MODULE_3__.emptyRenderFn,
        };
        Clazz = _core_component__WEBPACK_IMPORTED_MODULE_1__.Component;
    }
    for (const attrName in pAttrs) {
        attrs[attrName] = pAttrs[attrName];
    }
    component._ca = attrs;
    if (!component._w) {
        // 不需要处理 __unwatch，因为组件销毁时也会销毁 passedAttrs
        pAttrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__watch('*', (prop) => {
            // 注意，不能写成 attrs[prop[0]] = pAttrs[prop[0]]，否则闭包会导致潜在问题
            component._ca[prop[0]] = pAttrs[prop[0]];
        });
        component._w = true;
    }
    return Clazz.create(attrs);
}
/*****
 * 动态渲染组件 `<dynamic/>`。
 *
 * 通常情况下，可以用 `<if/>` 或 `<switch/>` 组件来根据不同的条件渲染不同的组件，但这种方法在条件分支很多的时候，代码会写的很罗嗦。
 * 而使用 `<dynamic/>` 组件可以动态地渲染某个变量指定的组件。也可以使用更底层地方式，动态地使用指定的渲染函数。比如：
 *
 *
 * ````html
 * <!-- app.html -->
 * <dynamic e:render="{_component: _component}"/>
 * <dynamic e:render="{_renderFn: _renderFn}"/>
 * <button on:click="change"/>
 * ````
 *
 *
 * ````js
 * // app.js
 * import { Component, emptyRenderFn } from 'jinge';
 * import { A, B } from './components';
 * class App extends Component {
 *   constructor(attrs) {
 *     super(attrs);
 *     this._component = A;
 *     this._renderFn = emptyRenderFn;
 *   }
 *   change() {
 *     this._component = B;
 *   }
 * }
 * ````
 */
class DynamicRenderComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(attrs) {
      super(attrs);
      const __vm_792732ac1261 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
      __vm_792732ac1261._ca = null;
      __vm_792732ac1261._w = false;
      const fn_3_792732ac1261 = () => {
        __vm_792732ac1261.render = attrs.render;
      };
      fn_3_792732ac1261();
      attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__watch('render', fn_3_792732ac1261);
    }
    get render() {
        return this._r;
    }
    set render(v) {
        var _a, _b;
        if (((_a = this._r) === null || _a === void 0 ? void 0 : _a._component) === (v === null || v === void 0 ? void 0 : v._component) && ((_b = this._r) === null || _b === void 0 ? void 0 : _b._renderFn) === (v === null || v === void 0 ? void 0 : v._renderFn)) {
            return;
        }
        this._r = v;
        this.__updateIfNeed();
    }
    __render() {
        const el = createEl(this);
        this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes.push(el);
        return el.__render();
    }
    __update() {
        const roots = this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes;
        const el = roots[0];
        const fd = el.__firstDOM;
        const pa = fd.parentNode;
        const newEl = createEl(this);
        roots[0] = newEl;
        const nels = newEl.__render();
        pa.insertBefore(nels.length > 1 ? (0,_util__WEBPACK_IMPORTED_MODULE_2__.createFragment)(nels) : nels[0], fd);
        el.__destroy();
        newEl.__handleAfterRender();
    }
}
//# sourceMappingURL=dynamic.js.map

/***/ }),

/***/ "../../jinge/lib/components/for.js":
/*!*****************************************!*\
  !*** ../../jinge/lib/components/for.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForEachComponent": () => (/* binding */ ForEachComponent),
/* harmony export */   "ForComponent": () => (/* binding */ ForComponent)
/* harmony export */ });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "../../jinge/lib/vm/common.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/component */ "../../jinge/lib/core/component.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "../../jinge/lib/util/index.js");



class ForEachComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(attrs, item, index, isLast) {
      super(attrs);
      const __vm_792732ac1261 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
      if ((0,_vm_common__WEBPACK_IMPORTED_MODULE_0__.isViewModel)(item)) {
        __vm_792732ac1261.each = item;
      } else {
        __vm_792732ac1261._e = item;
      }
      __vm_792732ac1261.index = index;
      __vm_792732ac1261.isFirst = index === 0;
      __vm_792732ac1261.isLast = isLast;
    }
    get each() {
        return this._e;
    }
    set each(v) {
        this._e = v;
    }
    __render() {
        return this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].slots.default(this);
    }
}
function createEl(item, i, isLast, itemRenderFn, context, parentCompomentStyles) {
    return new ForEachComponent((0,_core_component__WEBPACK_IMPORTED_MODULE_1__.attrs)({
        [_core_component__WEBPACK_IMPORTED_MODULE_1__.__]: {
            context,
            compStyle: parentCompomentStyles,
            slots: {
                default: itemRenderFn,
            },
        },
    }), item, i, isLast)[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
}
function appendRenderEach(item, i, isLast, itemRenderFn, roots, context, parentCompomentStyles) {
    const el = createEl(item, i, isLast, itemRenderFn, context, parentCompomentStyles);
    roots.push(el);
    return el.__render();
}
// function _assertVm(item, i) {
//   if (isObject(item) && !isInnerObj(item) && !(VM_ATTRS in item)) {
//     throw new Error(`loop item [${i}] of <for> component must be ViewModel.`);
//   }
// }
function _prepareKey(item, i, keyMap, keyName) {
    const key = keyName === 'each' ? item : keyName(item);
    if (keyMap.has(key)) {
        // eslint-disable-next-line no-console
        console.error(`loop items [${i}] and [${keyMap.get(key)}] of <for> component both have key '${key}', dulplicated key may cause update error.`);
    }
    keyMap.set(key, i);
    return key;
}
function renderItems(items, itemRenderFn, roots, keys, keyName, context, parentCompomentStyles) {
    const result = [];
    const tmpKeyMap = new Map();
    items.forEach((item, i) => {
        // _assertVm(item, i);
        if (keyName !== 'index') {
            keys.push(_prepareKey(item, i, tmpKeyMap, keyName));
        }
        result.push(...appendRenderEach(item, i, i === items.length - 1, itemRenderFn, roots, context, parentCompomentStyles));
    });
    return result;
}
function loopAppend($parent, el) {
    el[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes.forEach((node) => {
        if ((0,_core_component__WEBPACK_IMPORTED_MODULE_1__.isComponent)(node)) {
            loopAppend($parent, node);
        }
        else {
            $parent.appendChild(node);
        }
    });
}
function updateEl(el, i, items) {
    if (el.isFirst !== (i === 0)) {
        el.isFirst = i === 0;
    }
    if (el.isLast !== (i === items.length - 1)) {
        el.isLast = i === items.length - 1;
    }
    if (el.index !== i) {
        el.index = i;
    }
    if (el.each !== items[i]) {
        el.each = items[i];
    }
}
function _parseIndexPath(p) {
    return (0,_util__WEBPACK_IMPORTED_MODULE_2__.isString)(p) && p !== 'length' && /^\d+$/.test(p) ? Number(p) : p;
}
class ForComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(attrs) {
      if (attrs.key && !/^(index|each(.[\w\d$_]+)*)$/.test(attrs.key)) {
        throw new Error('Value of "key" attribute of <for> component is invalidate. See https://[todo]');
      }
      super(attrs);
      const __vm_792732ac1261 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
      if ((0,_vm_common__WEBPACK_IMPORTED_MODULE_0__.isViewModel)(attrs.loop)) {
        __vm_792732ac1261.loop = attrs.loop;
      } else {
        __vm_792732ac1261._l = attrs.loop;
      }
      attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__watch('loop', () => {
        __vm_792732ac1261.loop = attrs.loop;
      });
      const kn = attrs.key || 'index';
      __vm_792732ac1261._keyName = kn;
      __vm_792732ac1261._length = 0;
      __vm_792732ac1261._keys = null;
      __vm_792732ac1261._waitingUpdate = false;
      if (kn !== 'index' && kn !== 'each') {
        __vm_792732ac1261._keyName = new Function('each', `return ${ kn }`);
        const propCount = kn.split('.').length + 1;
        __vm_792732ac1261[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__watch('loop.*.' + kn.slice(5), propPath => {
          if (propPath.length !== propCount || __vm_792732ac1261._waitingUpdate) {
            return;
          }
          const items = __vm_792732ac1261.loop;
          if (!(0,_util__WEBPACK_IMPORTED_MODULE_2__.isArray)(items) || items.length === 0)
            return;
          const p = _parseIndexPath(propPath[1]);
          if (!(0,_util__WEBPACK_IMPORTED_MODULE_2__.isNumber)(p) || p >= items.length) {
            return;
          }
          __vm_792732ac1261._keys[p] = __vm_792732ac1261._keyName(items[p]);
        });
      }
      __vm_792732ac1261[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__watch('loop.*', propPath => {
        if (__vm_792732ac1261[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].state !== _core_component__WEBPACK_IMPORTED_MODULE_1__.ComponentStates.RENDERED || propPath.length !== 2 || __vm_792732ac1261._waitingUpdate) {
          return;
        }
        const p = _parseIndexPath(propPath[1]);
        if (p === 'length') {
          __vm_792732ac1261._waitingUpdate = true;
          __vm_792732ac1261.__updateIfNeed();
        } else if ((0,_util__WEBPACK_IMPORTED_MODULE_2__.isNumber)(p)) {
          __vm_792732ac1261._updateItem(p);
        }
      });
    }
    get loop() {
        return this._l;
    }
    set loop(v) {
        // console.log('set loop');
        this._l = v;
        this._waitingUpdate = true;
        this.__updateIfNeed();
    }
    __render() {
        var _a;
        const roots = this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes;
        const itemRenderFn = (_a = this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].slots) === null || _a === void 0 ? void 0 : _a.default;
        if (!itemRenderFn) {
            roots.push(document.createComment('empty'));
            return roots;
        }
        const items = this.loop;
        const keyName = this._keyName;
        if (keyName !== 'index')
            this._keys = [];
        if (!(0,_util__WEBPACK_IMPORTED_MODULE_2__.isArray)(items) || items.length === 0) {
            roots.push(document.createComment('empty'));
            return roots;
        }
        this._length = items.length;
        return renderItems(items, itemRenderFn, roots, this._keys, keyName, this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].context, this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].compStyle);
    }
    _updateItem(index) {
        var _a;
        const items = this.loop;
        const roots = this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes;
        if (!(0,_util__WEBPACK_IMPORTED_MODULE_2__.isArray)(items) || index >= roots.length)
            return;
        const keys = this._keys;
        const item = items[index];
        const oldEl = roots[index];
        if (oldEl.each === item) {
            return;
        }
        const itemRenderFn = (_a = this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].slots) === null || _a === void 0 ? void 0 : _a.default;
        if (!itemRenderFn)
            return;
        // console.log('update item:', index);
        const keyName = this._keyName;
        if (keyName !== 'index') {
            const newKey = keyName === 'each' ? item : keyName(item);
            const oldKey = keys[index];
            if (newKey !== oldKey) {
                const $fd = oldEl.__firstDOM;
                const newEl = createEl(item, index, oldEl.isLast, itemRenderFn, this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].context, this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].compStyle);
                const rr = (0,_core_component__WEBPACK_IMPORTED_MODULE_1__.assertRenderResults)(newEl.__render());
                $fd.parentNode.insertBefore(rr.length > 1 ? (0,_util__WEBPACK_IMPORTED_MODULE_2__.createFragment)(rr) : rr[0], $fd);
                oldEl.__destroy();
                roots[index] = newEl;
                keys[index] = newKey;
                newEl.__handleAfterRender();
                // console.log('update item render:', index);
            }
            else {
                oldEl.each = item;
            }
        }
        else {
            oldEl.each = item;
        }
    }
    __update() {
        var _a;
        this._waitingUpdate = false;
        // console.log('for update');
        const itemRenderFn = (_a = this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].slots) === null || _a === void 0 ? void 0 : _a.default;
        if (!itemRenderFn)
            return;
        const newItems = (0,_util__WEBPACK_IMPORTED_MODULE_2__.isArray)(this.loop) ? this.loop : [];
        const roots = this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes;
        const nl = newItems.length;
        const ol = this._length;
        // nothing changed, return directly.
        if (nl === 0 && ol === 0)
            return;
        const keyName = this._keyName;
        // if new length equal 0, clear & render comment.
        if (nl === 0 && ol > 0) {
            const fd = roots[0].__firstDOM;
            const $cmt = document.createComment('empty');
            fd.parentNode.insertBefore($cmt, fd);
            for (let i = 0; i < ol; i++) {
                roots[i].__destroy();
            }
            roots.length = 1;
            roots[0] = $cmt;
            if (keyName !== 'index') {
                this._keys.length = 0;
            }
            this._length = 0;
            return;
        }
        this._length = nl;
        const ctx = this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].context;
        const parentComponentStyles = this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].compStyle;
        const firstEl = roots[0]; // if ol === 0, firstEl is comment, else is component
        const $parent = (ol === 0 ? firstEl : firstEl.__firstDOM).parentNode;
        if (keyName === 'index') {
            let $f = null;
            if (ol === 0)
                roots.length = 0;
            for (let i = 0; i < nl; i++) {
                if (i < ol) {
                    updateEl(roots[i], i, newItems);
                }
                else {
                    if (!$f)
                        $f = (0,_util__WEBPACK_IMPORTED_MODULE_2__.createFragment)();
                    appendRenderEach(newItems[i], i, i === nl - 1, itemRenderFn, roots, ctx, parentComponentStyles).forEach((el) => {
                        $f.appendChild(el);
                    });
                }
            }
            if ($f) {
                const $le = ol === 0 ? firstEl : roots[ol - 1].__lastDOM;
                (0,_util__WEBPACK_IMPORTED_MODULE_2__.insertAfter)($parent, $f, $le);
                for (let i = ol; i < nl; i++) {
                    roots[i].__handleAfterRender();
                }
            }
            if (ol === 0) {
                $parent.removeChild(firstEl);
            }
            if (nl >= ol)
                return;
            for (let i = nl; i < ol; i++) {
                roots[i].__destroy();
            }
            roots.splice(nl);
            return;
        }
        const oldKeys = this._keys;
        if (ol === 0) {
            roots.length = 0;
            const rs = renderItems(newItems, itemRenderFn, roots, oldKeys, keyName, this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].context, this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].compStyle);
            (0,_util__WEBPACK_IMPORTED_MODULE_2__.insertAfter)($parent, (0,_util__WEBPACK_IMPORTED_MODULE_2__.createFragment)(rs), firstEl);
            $parent.removeChild(firstEl);
            roots.forEach((el) => el.__handleAfterRender());
            return;
        }
        const oldKeyMap = new Map();
        oldKeys.forEach((k, i) => {
            oldKeyMap.set(k, i);
        });
        const newKeys = [];
        const newKeyMap = new Map();
        newItems.forEach((item, i) => {
            // _assertVm(item, i);
            newKeys.push(_prepareKey(item, i, newKeyMap, keyName));
        });
        let oi = 0;
        let ni = 0;
        let $lastS = null;
        const newRoots = [];
        const oldTags = new Uint8Array(ol);
        while (oi < ol || ni < nl) {
            while (oi < ol) {
                if (oldTags[oi] !== 0) {
                    oi++;
                }
                else if (newKeyMap.has(oldKeys[oi]) && newKeyMap.get(oldKeys[oi]) >= ni) {
                    if (oi === ol - 1) {
                        $lastS = roots[oi].__lastDOM.nextSibling;
                    }
                    break;
                }
                else {
                    if (oi === ol - 1) {
                        $lastS = roots[oi].__lastDOM.nextSibling;
                    }
                    roots[oi].__destroy();
                    oi++;
                }
            }
            if (oi >= ol) {
                let $f = null;
                const cei = newRoots.length;
                for (; ni < nl; ni++) {
                    const el = createEl(newItems[ni], ni, ni === nl - 1, itemRenderFn, ctx, parentComponentStyles);
                    if (!$f)
                        $f = (0,_util__WEBPACK_IMPORTED_MODULE_2__.createFragment)();
                    el.__render().forEach(($n) => $f.appendChild($n));
                    newRoots.push(el);
                }
                if ($f) {
                    if ($lastS) {
                        $parent.insertBefore($f, $lastS);
                    }
                    else {
                        $parent.appendChild($f);
                    }
                    for (let i = cei; i < newRoots.length; i++) {
                        newRoots[i].__handleAfterRender();
                    }
                }
                break;
            }
            const oldKey = oldKeys[oi];
            let $f = null;
            let $nes = null;
            while (ni < nl) {
                const newKey = newKeys[ni];
                if (newKey === oldKey)
                    break;
                let reuseEl = null;
                if (oldKeyMap.has(newKey)) {
                    const oldIdx = oldKeyMap.get(newKey);
                    if (oldIdx > oi && oldTags[oldIdx] === 0) {
                        reuseEl = roots[oldIdx];
                        oldTags[oldIdx] = 1;
                    }
                }
                if (!$f)
                    $f = (0,_util__WEBPACK_IMPORTED_MODULE_2__.createFragment)();
                if (!reuseEl) {
                    reuseEl = createEl(newItems[ni], ni, ni === nl - 1, itemRenderFn, ctx, parentComponentStyles);
                    reuseEl.__render().forEach(($n) => $f.appendChild($n));
                    if (!$nes)
                        $nes = [];
                    $nes.push(reuseEl);
                }
                else {
                    loopAppend($f, reuseEl);
                    updateEl(reuseEl, ni, newItems);
                }
                newRoots.push(reuseEl);
                ni++;
            }
            if (ni >= nl) {
                throw new Error('unimpossible?!');
            }
            const el = roots[oi];
            $f && $parent.insertBefore($f, el.__firstDOM);
            $nes && $nes.forEach((el) => el.__handleAfterRender());
            updateEl(el, ni, newItems);
            newRoots.push(el);
            oi++;
            ni++;
        }
        this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes = newRoots;
        this._keys = newKeys;
    }
}
//# sourceMappingURL=for.js.map

/***/ }),

/***/ "../../jinge/lib/components/hide.js":
/*!******************************************!*\
  !*** ../../jinge/lib/components/hide.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HideComponent": () => (/* binding */ HideComponent)
/* harmony export */ });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "../../jinge/lib/vm/common.js");
/* harmony import */ var _vm_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vm/index */ "../../jinge/lib/vm/index.js");
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./class */ "../../jinge/lib/components/class.js");



class HideComponent extends _class__WEBPACK_IMPORTED_MODULE_2__.ToggleClassComponent {
    constructor(attrs) {
        attrs.class = (0,_vm_index__WEBPACK_IMPORTED_MODULE_1__.vm)({
            'jg-hide': attrs.test,
        });
        attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__watch('test', () => {
            if (attrs.class['jg-hide'] !== attrs.test) {
                attrs.class['jg-hide'] = attrs.test;
            }
        });
        super(attrs);
    }
}
//# sourceMappingURL=hide.js.map

/***/ }),

/***/ "../../jinge/lib/components/html.js":
/*!******************************************!*\
  !*** ../../jinge/lib/components/html.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BindHtmlComponent": () => (/* binding */ BindHtmlComponent)
/* harmony export */ });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "../../jinge/lib/vm/common.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/component */ "../../jinge/lib/core/component.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "../../jinge/lib/util/index.js");


function renderHtml(content) {
    const $d = document.createElement('div');
    $d.innerHTML = content || '';
    let cn = $d.childNodes;
    if (cn.length === 0) {
        cn = [document.createComment('empty')];
    }
    else {
        cn = [].slice.call(cn); // convert NodeList to Array.
    }
    return cn;
}
class BindHtmlComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(attrs) {
      if (!('content' in attrs))
        throw new Error('<bind-html/> require "content" attribute');
      super(attrs);
      const __vm_792732ac1261 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
      const fn_2_792732ac1261 = () => {
        __vm_792732ac1261.content = attrs.content;
      };
      fn_2_792732ac1261();
      attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__watch('content', fn_2_792732ac1261);
    }
    get content() {
        return this._c;
    }
    set content(v) {
        if (this._c === v)
            return;
        this._c = v;
        this.__updateIfNeed();
    }
    __render() {
        return (this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes = renderHtml(this._c));
    }
    __update() {
        const roots = this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes;
        const oldFirstEl = roots[0];
        const $p = oldFirstEl.parentNode;
        const newEls = renderHtml(this._c);
        $p.insertBefore(newEls.length > 1 ? (0,_util__WEBPACK_IMPORTED_MODULE_2__.createFragment)(newEls) : newEls[0], oldFirstEl);
        roots.forEach((oldEl) => $p.removeChild(oldEl));
        this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes = newEls;
    }
}
//# sourceMappingURL=html.js.map

/***/ }),

/***/ "../../jinge/lib/components/i18n.js":
/*!******************************************!*\
  !*** ../../jinge/lib/components/i18n.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I18nComponent": () => (/* binding */ I18nComponent)
/* harmony export */ });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "../../jinge/lib/vm/common.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/component */ "../../jinge/lib/core/component.js");
/* harmony import */ var _core_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/i18n */ "../../jinge/lib/core/i18n.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ "../../jinge/lib/util/index.js");




class I18nComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(attrs, renderKey, cstyId, renderVms) {
      super(attrs);
      const __vm_792732ac1261 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
      __vm_792732ac1261._key = renderKey;
      __vm_792732ac1261._sty = cstyId;
      __vm_792732ac1261._vms = renderVms;
      __vm_792732ac1261.__i18nWatch(__vm_792732ac1261._onchange);
    }
    __render() {
        const renderFn = _core_i18n__WEBPACK_IMPORTED_MODULE_2__.i18n.__r(this._key, 'components');
        return renderFn(this, this._sty, ...this._vms);
    }
    _onchange() {
        this.__updateIfNeed();
    }
    __update() {
        if (this[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__related) {
            this[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__related.forEach((hooks, origin) => {
                hooks.forEach((hook) => {
                    origin.__unwatch(hook.prop, hook.handler);
                });
            });
            this[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__related.clear();
        }
        let $el = this.__lastDOM;
        const $parentEl = $el.parentNode;
        $el = $el.nextSibling;
        /*
         * 当前实现下，HANDLE_BEFORE_DESTROY 正好可以销毁子组件/子元素。
         * 但要注意，还需要手动清空旧的 rootNodes 和 nonRootCompNodes。
         */
        this.__handleBeforeDestroy(true);
        this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes.length = 0;
        this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].nonRootCompNodes.length = 0;
        /*
         * 将新的元素替换到原来的旧的元素的位置。
         */
        const els = this.__render();
        if ($el) {
            $parentEl.insertBefore(els.length > 1 ? (0,_util__WEBPACK_IMPORTED_MODULE_3__.createFragment)(els) : els[0], $el);
        }
        else {
            $parentEl.appendChild(els.length > 1 ? (0,_util__WEBPACK_IMPORTED_MODULE_3__.createFragment)(els) : els[0]);
        }
        /**
         * 对切换后渲染的组件触发 AFTER_RENDER 生命周期。
         */
        this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes.forEach((n) => {
            if ((0,_core_component__WEBPACK_IMPORTED_MODULE_1__.isComponent)(n))
                n.__handleAfterRender();
        });
        this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].nonRootCompNodes.forEach((n) => {
            n.__handleAfterRender();
        });
    }
    __beforeDestroy() {
        this._vms = null; // unlink vms, maybe not necessary
    }
}
//# sourceMappingURL=i18n.js.map

/***/ }),

/***/ "../../jinge/lib/components/if.js":
/*!****************************************!*\
  !*** ../../jinge/lib/components/if.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IfComponent": () => (/* binding */ IfComponent),
/* harmony export */   "SwitchComponent": () => (/* binding */ SwitchComponent)
/* harmony export */ });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "../../jinge/lib/vm/common.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/component */ "../../jinge/lib/core/component.js");
/* harmony import */ var _core_transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/transition */ "../../jinge/lib/core/transition.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ "../../jinge/lib/util/index.js");



function createEl(renderFn, context, parentComponentStyles) {
    return _core_component__WEBPACK_IMPORTED_MODULE_1__.Component.create((0,_core_component__WEBPACK_IMPORTED_MODULE_1__.attrs)({
        [_core_component__WEBPACK_IMPORTED_MODULE_1__.__]: {
            context,
            compStyle: parentComponentStyles,
            slots: {
                default: renderFn,
            },
        },
    }));
}
function renderSwitch(component) {
    const value = component._currentValue;
    const acs = component[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].slots;
    if (component.transition && acs) {
        component._transitionMap = new Map();
        for (const k in acs) {
            component._transitionMap.set(k, [
                k === value ? _core_transition__WEBPACK_IMPORTED_MODULE_2__.TransitionStates.ENTERED : _core_transition__WEBPACK_IMPORTED_MODULE_2__.TransitionStates.LEAVED,
                null, // element
            ]);
        }
        component._previousValue = value;
        component._onEndHandler = component.onTransitionEnd.bind(component);
    }
    const renderFn = acs ? acs[value] : null;
    const roots = component[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes;
    if (!renderFn) {
        roots.push(document.createComment('empty'));
        return roots;
    }
    const el = createEl(renderFn, component[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].context, component[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].compStyle);
    roots.push(el);
    return el.__render();
}
function doUpdate(component) {
    var _a;
    const roots = component[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes;
    const el = roots[0];
    const isComp = (0,_core_component__WEBPACK_IMPORTED_MODULE_1__.isComponent)(el);
    const firstDOM = (isComp ? el.__firstDOM : el);
    const parentDOM = (isComp ? firstDOM : el).parentNode;
    const renderFn = (_a = component[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].slots) === null || _a === void 0 ? void 0 : _a[component._currentValue];
    if (renderFn) {
        const newEl = createEl(renderFn, component[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].context, component[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].compStyle);
        const nodes = (0,_core_component__WEBPACK_IMPORTED_MODULE_1__.assertRenderResults)(newEl.__render());
        parentDOM.insertBefore(nodes.length > 1 ? (0,_util__WEBPACK_IMPORTED_MODULE_3__.createFragment)(nodes) : nodes[0], firstDOM);
        roots[0] = newEl;
    }
    else {
        roots[0] = document.createComment('empty');
        parentDOM.insertBefore(roots[0], firstDOM);
    }
    if (isComp) {
        el.__destroy();
    }
    else {
        parentDOM.removeChild(firstDOM);
    }
    renderFn && roots[0].__handleAfterRender();
    component.__notify('branch-switched', component._branch);
}
function cancelTs(t, tn, e, component) {
    const el = t[1];
    if (el.nodeType !== Node.ELEMENT_NODE) {
        return;
    }
    const onEnd = component._onEndHandler;
    el.classList.remove(tn + (e ? '-enter' : '-leave'));
    el.classList.remove(tn + (e ? '-enter-active' : '-leave-active'));
    (0,_util__WEBPACK_IMPORTED_MODULE_3__.removeEvent)(el, 'transitionend', onEnd);
    (0,_util__WEBPACK_IMPORTED_MODULE_3__.removeEvent)(el, 'animationend', onEnd);
    component.__notify('transition', e ? 'enter-cancelled' : 'leave-cancelled', el);
}
function startTs(t, tn, e, component) {
    const el = t[1];
    const onEnd = component._onEndHandler;
    if (el.nodeType !== Node.ELEMENT_NODE) {
        onEnd();
        return;
    }
    const classOfStart = tn + (e ? '-enter' : '-leave');
    const classOfActive = tn + (e ? '-enter-active' : '-leave-active');
    el.classList.add(classOfStart);
    // force render by calling getComputedStyle
    (0,_core_transition__WEBPACK_IMPORTED_MODULE_2__.getDurationType)(el);
    el.classList.add(classOfActive);
    const tsEndName = (0,_core_transition__WEBPACK_IMPORTED_MODULE_2__.getDurationType)(el);
    if (!tsEndName) {
        onEnd();
        return;
    }
    t[0] = e ? _core_transition__WEBPACK_IMPORTED_MODULE_2__.TransitionStates.ENTERING : _core_transition__WEBPACK_IMPORTED_MODULE_2__.TransitionStates.LEAVING;
    (0,_util__WEBPACK_IMPORTED_MODULE_3__.addEvent)(el, tsEndName, onEnd);
    component.__notify('transition', e ? 'before-enter' : 'before-leave', el);
    (0,_util__WEBPACK_IMPORTED_MODULE_3__.setImmediate)(() => {
        component.__notify('transition', e ? 'enter' : 'leave', el);
    });
}
function updateSwitchWithTransition(component) {
    const value = component._currentValue;
    const pv = component._previousValue;
    const tn = component.transition;
    let pt = component._transitionMap.get(pv);
    if (!pt) {
        pt = [
            pv === 'else' ? _core_transition__WEBPACK_IMPORTED_MODULE_2__.TransitionStates.LEAVED : _core_transition__WEBPACK_IMPORTED_MODULE_2__.TransitionStates.ENTERED,
            null, // element
        ];
        component._transitionMap.set(pv, pt);
    }
    // debugger;
    if (pt[0] === _core_transition__WEBPACK_IMPORTED_MODULE_2__.TransitionStates.ENTERING) {
        if (value === pv)
            return;
        cancelTs(pt, tn, true, component);
        startTs(pt, tn, false, component);
    }
    else if (pt[0] === _core_transition__WEBPACK_IMPORTED_MODULE_2__.TransitionStates.LEAVING) {
        if (value !== pv)
            return;
        cancelTs(pt, tn, false, component);
        startTs(pt, tn, true, component);
    }
    else if (pt[0] === _core_transition__WEBPACK_IMPORTED_MODULE_2__.TransitionStates.ENTERED) {
        pt[1] = component.__transitionDOM;
        startTs(pt, tn, false, component);
    }
    else if (pt[0] === _core_transition__WEBPACK_IMPORTED_MODULE_2__.TransitionStates.LEAVED) {
        pt[1] = component.__transitionDOM;
        startTs(pt, tn, true, component);
    }
}
function updateSwitch(component) {
    if (!(0,_core_component__WEBPACK_IMPORTED_MODULE_1__.isComponent)(component[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes[0]) &&
        (!component[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].slots || !component[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].slots[component._currentValue])) {
        return;
    }
    if (component._transitionMap) {
        updateSwitchWithTransition(component);
        return;
    }
    doUpdate(component);
}
function updateSwitchOnTransitionEnd(component) {
    // console.log('on end')
    const value = component._currentValue;
    const pv = component._previousValue;
    const tn = component.transition;
    const pt = component._transitionMap.get(pv);
    const e = pt[0] === _core_transition__WEBPACK_IMPORTED_MODULE_2__.TransitionStates.ENTERING;
    const el = pt[1];
    if (el.nodeType === Node.ELEMENT_NODE) {
        (0,_util__WEBPACK_IMPORTED_MODULE_3__.removeEvent)(el, 'transitionend', component._onEndHandler);
        (0,_util__WEBPACK_IMPORTED_MODULE_3__.removeEvent)(el, 'animationend', component._onEndHandler);
        el.classList.remove(tn + (e ? '-enter' : '-leave'));
        el.classList.remove(tn + (e ? '-enter-active' : '-leave-active'));
        component.__notify('transition', e ? 'after-enter' : 'after-leave');
    }
    pt[0] = e ? _core_transition__WEBPACK_IMPORTED_MODULE_2__.TransitionStates.ENTERED : _core_transition__WEBPACK_IMPORTED_MODULE_2__.TransitionStates.LEAVED;
    if (e)
        return;
    doUpdate(component);
    component._previousValue = value;
    const ct = component._transitionMap.get(value);
    if (!ct) {
        return;
    }
    const fd = component.__transitionDOM;
    if (fd.nodeType !== Node.ELEMENT_NODE) {
        ct[0] = _core_transition__WEBPACK_IMPORTED_MODULE_2__.TransitionStates.ENTERED;
        return;
    }
    ct[1] = fd;
    startTs(ct, tn, true, component);
}
function destroySwitch(component) {
    if (component._transitionMap) {
        component._transitionMap.forEach((ts) => {
            const el = ts[1];
            if (el) {
                (0,_util__WEBPACK_IMPORTED_MODULE_3__.removeEvent)(el, 'transitionend', component._onEndHandler);
                (0,_util__WEBPACK_IMPORTED_MODULE_3__.removeEvent)(el, 'animationend', component._onEndHandler);
            }
        });
        component._transitionMap = null;
    }
}
class IfComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(attrs) {
      super(attrs);
      const __vm_792732ac1261 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
      __vm_792732ac1261._currentValue = 'default';
      __vm_792732ac1261._onEndHandler = null;
      __vm_792732ac1261._transitionMap = null;
      __vm_792732ac1261._previousValue = null;
      const fn_5_792732ac1261 = () => {
        __vm_792732ac1261.expect = attrs.expect;
      };
      fn_5_792732ac1261();
      attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__watch('expect', fn_5_792732ac1261);
      const fn_6_792732ac1261 = () => {
        __vm_792732ac1261.transition = attrs.transition;
      };
      fn_6_792732ac1261();
      attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__watch('transition', fn_6_792732ac1261);
    }
    get expect() {
        return this._currentValue === 'default';
    }
    set expect(value) {
        const v = value ? 'default' : 'else';
        if (this._currentValue === v)
            return;
        this._currentValue = v;
        this.__updateIfNeed();
    }
    get _branch() {
        return this.expect;
    }
    onTransitionEnd() {
        updateSwitchOnTransitionEnd(this);
    }
    __render() {
        return renderSwitch(this);
    }
    __update() {
        updateSwitch(this);
    }
    __beforeDestroy() {
        destroySwitch(this);
    }
}
class SwitchComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(attrs) {
      super(attrs);
      const __vm_792732ac1261 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
      __vm_792732ac1261._onEndHandler = null;
      __vm_792732ac1261._transitionMap = null;
      __vm_792732ac1261._previousValue = null;
      __vm_792732ac1261._currentValue = null;
      const fn_5_792732ac1261 = () => {
        __vm_792732ac1261.test = attrs.test;
      };
      fn_5_792732ac1261();
      attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__watch('test', fn_5_792732ac1261);
      const fn_6_792732ac1261 = () => {
        __vm_792732ac1261.transition = attrs.transition;
      };
      fn_6_792732ac1261();
      attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__watch('transition', fn_6_792732ac1261);
    }
    get test() {
        return this._currentValue;
    }
    set test(v) {
        const acs = this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].slots;
        if (!acs || !(v in acs)) {
            v = 'default';
        }
        if (this._currentValue === v)
            return;
        this._currentValue = v;
        this.__updateIfNeed();
    }
    get _branch() {
        return this.test;
    }
    onTransitionEnd() {
        updateSwitchOnTransitionEnd(this);
    }
    __render() {
        return renderSwitch(this);
    }
    __update() {
        updateSwitch(this);
    }
    __beforeDestroy() {
        destroySwitch(this);
    }
}
//# sourceMappingURL=if.js.map

/***/ }),

/***/ "../../jinge/lib/components/index.js":
/*!*******************************************!*\
  !*** ../../jinge/lib/components/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToggleClassComponent": () => (/* reexport safe */ _class__WEBPACK_IMPORTED_MODULE_0__.ToggleClassComponent),
/* harmony export */   "ForComponent": () => (/* reexport safe */ _for__WEBPACK_IMPORTED_MODULE_1__.ForComponent),
/* harmony export */   "ForEachComponent": () => (/* reexport safe */ _for__WEBPACK_IMPORTED_MODULE_1__.ForEachComponent),
/* harmony export */   "HideComponent": () => (/* reexport safe */ _hide__WEBPACK_IMPORTED_MODULE_2__.HideComponent),
/* harmony export */   "BindHtmlComponent": () => (/* reexport safe */ _html__WEBPACK_IMPORTED_MODULE_3__.BindHtmlComponent),
/* harmony export */   "IfComponent": () => (/* reexport safe */ _if__WEBPACK_IMPORTED_MODULE_4__.IfComponent),
/* harmony export */   "SwitchComponent": () => (/* reexport safe */ _if__WEBPACK_IMPORTED_MODULE_4__.SwitchComponent),
/* harmony export */   "ParameterComponent": () => (/* reexport safe */ _parameter__WEBPACK_IMPORTED_MODULE_5__.ParameterComponent),
/* harmony export */   "LogComponent": () => (/* reexport safe */ _log__WEBPACK_IMPORTED_MODULE_6__.LogComponent),
/* harmony export */   "I18nComponent": () => (/* reexport safe */ _i18n__WEBPACK_IMPORTED_MODULE_7__.I18nComponent),
/* harmony export */   "DynamicRenderComponent": () => (/* reexport safe */ _dynamic__WEBPACK_IMPORTED_MODULE_8__.DynamicRenderComponent)
/* harmony export */ });
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class */ "../../jinge/lib/components/class.js");
/* harmony import */ var _for__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./for */ "../../jinge/lib/components/for.js");
/* harmony import */ var _hide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hide */ "../../jinge/lib/components/hide.js");
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html */ "../../jinge/lib/components/html.js");
/* harmony import */ var _if__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./if */ "../../jinge/lib/components/if.js");
/* harmony import */ var _parameter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parameter */ "../../jinge/lib/components/parameter.js");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./log */ "../../jinge/lib/components/log.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./i18n */ "../../jinge/lib/components/i18n.js");
/* harmony import */ var _dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dynamic */ "../../jinge/lib/components/dynamic.js");









//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge/lib/components/log.js":
/*!*****************************************!*\
  !*** ../../jinge/lib/components/log.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogComponent": () => (/* binding */ LogComponent)
/* harmony export */ });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "../../jinge/lib/vm/common.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/component */ "../../jinge/lib/core/component.js");

/**
 * This component is only for development purpose
 */
class LogComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(attrs) {
      super(attrs);
      const __vm_792732ac1261 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
      const fn_1_792732ac1261 = () => {
        __vm_792732ac1261.msg = attrs.msg;
      };
      fn_1_792732ac1261();
      attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__watch('msg', fn_1_792732ac1261);
    }
    set msg(v) {
        // eslint-disable-next-line no-console
        console.log(v);
        this._msg = v;
    }
    get msg() {
        return this._msg;
    }
    __render() {
        return [document.createComment('log placeholder')];
    }
}
//# sourceMappingURL=log.js.map

/***/ }),

/***/ "../../jinge/lib/components/parameter.js":
/*!***********************************************!*\
  !*** ../../jinge/lib/components/parameter.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParameterComponent": () => (/* binding */ ParameterComponent)
/* harmony export */ });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "../../jinge/lib/vm/common.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/component */ "../../jinge/lib/core/component.js");


class ParameterComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(attrs, params) {
      super(attrs);
      const __vm_792732ac1261 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
      params.forEach(p => {
        __vm_792732ac1261[p] = attrs[p];
        attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(p, () => {
          __vm_792732ac1261[p] = attrs[p];
        });
      });
    }
}
//# sourceMappingURL=parameter.js.map

/***/ }),

/***/ "../../jinge/lib/core/bootstrap.js":
/*!*****************************************!*\
  !*** ../../jinge/lib/core/bootstrap.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bootstrap": () => (/* binding */ bootstrap)
/* harmony export */ });
function bootstrap(ComponentClazz, dom, attrs) {
    const app = ComponentClazz.create(attrs);
    app.__renderToDOM(dom, dom !== document.body);
    return app;
}
//# sourceMappingURL=bootstrap.js.map

/***/ }),

/***/ "../../jinge/lib/core/chunk.js":
/*!*************************************!*\
  !*** ../../jinge/lib/core/chunk.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChunkResourceLoader": () => (/* binding */ ChunkResourceLoader),
/* harmony export */   "chunk": () => (/* binding */ chunk)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge/lib/util/index.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./i18n */ "../../jinge/lib/core/i18n.js");


const fileCache = new Map();
function loadLink(href) {
    return new Promise((resolve, reject) => {
        if (fileCache.has(href)) {
            return resolve();
        }
        const $s = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createElement)('link', {
            rel: 'stylesheet',
            href: href,
        });
        $s.onload = () => {
            fileCache.set(href, true);
            resolve();
        };
        $s.onerror = reject;
        document.head.appendChild($s);
    });
}
function loadLocale(url) {
    return fileCache.has(url)
        ? Promise.resolve()
        : fetch(url)
            .then((res) => res.text())
            .then((code) => {
            fileCache.set(url, true);
            new Function('jinge', code)({
                i18n: _i18n__WEBPACK_IMPORTED_MODULE_1__.i18n,
            });
        });
}
function load(fn, file, chunkName, loadedSet, baseHref) {
    if (!file) {
        loadedSet.add(chunkName);
        return Promise.resolve();
    }
    if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isArray)(file)) {
        return Promise.all(file.map((lf) => fn(baseHref + lf))).then(() => {
            loadedSet.add(chunkName);
        });
    }
    else {
        return fn(baseHref + file).then(() => {
            loadedSet.add(chunkName);
        });
    }
}
class ChunkResourceLoader {
    constructor() {
        this.meta = null;
        this._acs = new Set();
        this._lcs = { style: new Set(), locale: {} };
    }
    /**
     * @interval
     * get locale entry file url
     */
    _get(locale) {
        if (!this.meta)
            return null;
        return this.meta.public + this.meta.locale[locale].entry;
    }
    /**
     * @internal
     */
    async _load(locale) {
        if (this._acs.size === 0)
            return;
        if (!locale)
            locale = _i18n__WEBPACK_IMPORTED_MODULE_1__.i18n.locale;
        const meta = this.meta;
        if (!meta)
            throw new Error('meta required.');
        const promises = [];
        const baseHref = meta.public;
        const lsty = this._lcs.style;
        let lloc = this._lcs.locale[locale];
        if (!lloc) {
            this._lcs.locale[locale] = lloc = new Set();
        }
        this._acs.forEach((chunkName) => {
            if (!lsty.has(chunkName)) {
                promises.push(load(loadLink, meta.style.chunks[chunkName], chunkName, lsty, baseHref));
            }
            if (!lloc.has(chunkName)) {
                promises.push(load(loadLocale, meta.locale[locale].chunks[chunkName], chunkName, lloc, baseHref));
            }
        });
        if (promises.length > 0) {
            await Promise.all(promises);
        }
    }
    active(chunkName) {
        this._acs.add(chunkName);
        return this._load();
    }
    deactive(chunkName) {
        this._acs.delete(chunkName);
    }
}
// singleton
const chunk = new ChunkResourceLoader();
_i18n__WEBPACK_IMPORTED_MODULE_1__.i18n.__loader = chunk;
//# sourceMappingURL=chunk.js.map

/***/ }),

/***/ "../../jinge/lib/core/component.js":
/*!*****************************************!*\
  !*** ../../jinge/lib/core/component.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentStates": () => (/* binding */ ComponentStates),
/* harmony export */   "ContextStates": () => (/* binding */ ContextStates),
/* harmony export */   "__": () => (/* binding */ __),
/* harmony export */   "isComponent": () => (/* binding */ isComponent),
/* harmony export */   "assertRenderResults": () => (/* binding */ assertRenderResults),
/* harmony export */   "attrs": () => (/* binding */ wrapAttrs),
/* harmony export */   "Component": () => (/* binding */ Component)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge/lib/util/index.js");
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vm/common */ "../../jinge/lib/vm/common.js");
/* harmony import */ var _vm_proxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vm/proxy */ "../../jinge/lib/vm/proxy.js");
/* harmony import */ var _messenger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messenger */ "../../jinge/lib/core/messenger.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "../../jinge/lib/core/style.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./i18n */ "../../jinge/lib/core/i18n.js");
var _a;






var ComponentStates;
(function (ComponentStates) {
    ComponentStates[ComponentStates["INITIALIZE"] = 0] = "INITIALIZE";
    ComponentStates[ComponentStates["RENDERED"] = 1] = "RENDERED";
    ComponentStates[ComponentStates["WILLDESTROY"] = 2] = "WILLDESTROY";
    ComponentStates[ComponentStates["DESTROIED"] = 3] = "DESTROIED";
})(ComponentStates || (ComponentStates = {}));
var ContextStates;
(function (ContextStates) {
    ContextStates[ContextStates["UNTOUCH"] = 0] = "UNTOUCH";
    ContextStates[ContextStates["TOUCHED"] = 1] = "TOUCHED";
    ContextStates[ContextStates["UNTOUCH_FREEZED"] = 2] = "UNTOUCH_FREEZED";
    ContextStates[ContextStates["TOUCHED_FREEZED"] = 3] = "TOUCHED_FREEZED";
})(ContextStates || (ContextStates = {}));
const __ = Symbol('__');
/** Bellow is utility functions **/
function isComponent(v) {
    return __ in v;
}
function assertRenderResults(renderResults) {
    if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isArray)(renderResults) || renderResults.length === 0) {
        throw new Error('Render results of component is empty');
    }
    return renderResults;
}
function wrapAttrs(target) {
    if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isObject)(target) || (0,_util__WEBPACK_IMPORTED_MODULE_0__.isArray)(target)) {
        throw new Error('attrs() traget must be plain object.');
    }
    return (0,_vm_proxy__WEBPACK_IMPORTED_MODULE_2__.createAttributes)(target);
}

class Component extends _messenger__WEBPACK_IMPORTED_MODULE_3__.Messenger {
    /**
     * ATTENTION!!!
     *
     * Don't use constructor directly, use static factory method `create(attrs)` instead.
     */
    constructor(attrs) {
        if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isObject)(attrs) || !(_vm_common__WEBPACK_IMPORTED_MODULE_1__.$$ in attrs)) {
            throw new Error('Attributes passed to Component constructor must be ViewModel. See https://[todo]');
        }
        const compilerAttrs = attrs[__] || {};
        super(compilerAttrs.listeners);
        (0,_vm_proxy__WEBPACK_IMPORTED_MODULE_2__.createComponent)(this);
        this[__] = {
            passedAttrs: attrs,
            context: compilerAttrs.context || null,
            contextState: ContextStates.UNTOUCH,
            slots: compilerAttrs.slots,
            state: ComponentStates.INITIALIZE,
            rootNodes: [],
            nonRootCompNodes: [],
            refs: null,
            relatedRefs: null,
            upNextMap: null,
            compStyle: compilerAttrs.compStyle || null,
            deregFns: null,
        };
    }
    static create(attrs) {
        attrs = attrs || wrapAttrs({});
        if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isObject)(attrs) || !(_vm_common__WEBPACK_IMPORTED_MODULE_1__.$$ in attrs)) {
            attrs = wrapAttrs(attrs || {});
        }
        return new this(attrs)[_vm_common__WEBPACK_IMPORTED_MODULE_1__.$$].proxy;
    }
    /**
     * store deregisterFn and auto call it when component is being destroy.
     */
    __addDeregisterFn(deregisterFn) {
        let deregs = this[__].deregFns;
        if (!deregs) {
            this[__].deregFns = deregs = new Set();
        }
        deregs.add(deregisterFn);
    }
    /**
     * Helper function to add i18n change listener.
     * The listener will be auto removed when component is destroied.
     */
    __i18nWatch(listener, immediate = false) {
        this.__addDeregisterFn(_i18n__WEBPACK_IMPORTED_MODULE_5__.i18n.watch((locale) => {
            // bind component to listener's function context.
            listener.call(this, locale);
        }, immediate));
    }
    /**
     * Helper function to add dom event listener.
     * Return deregister function which will remove event listener.
     * If you do dot call deregister function, it will be auto called when component is destroied.
     * @returns {Function} deregister function to remove listener
     */
    __domAddListener($el, eventName, listener, capture) {
        const deregEvtFn = (0,_util__WEBPACK_IMPORTED_MODULE_0__.registerEvent)($el, eventName, ($event) => {
            // bind component to listener's function context.
            listener.call(this, $event);
        }, capture);
        this.__addDeregisterFn(deregEvtFn);
        return () => {
            deregEvtFn();
            this[__].deregFns.delete(deregEvtFn);
        };
    }
    __domPassListeners(ignoredEventNames, targetEl) {
        if (this[__].state !== ComponentStates.RENDERED) {
            throw new Error('domPassListeners must be applied to component which is rendered.');
        }
        const lis = this[_messenger__WEBPACK_IMPORTED_MODULE_3__.MESSENGER_LISTENERS];
        if (!lis || lis.size === 0) {
            return;
        }
        if (ignoredEventNames && !(0,_util__WEBPACK_IMPORTED_MODULE_0__.isArray)(ignoredEventNames)) {
            targetEl = ignoredEventNames;
            ignoredEventNames = null;
        }
        else if (!targetEl) {
            targetEl = this.__firstDOM;
        }
        if (targetEl.nodeType !== Node.ELEMENT_NODE) {
            return;
        }
        lis.forEach((handlers, eventName) => {
            if (ignoredEventNames && ignoredEventNames.indexOf(eventName) >= 0) {
                return;
            }
            handlers.forEach((opts, handler) => {
                const deregFn = (0,_util__WEBPACK_IMPORTED_MODULE_0__.registerEvent)(targetEl, eventName, opts && (opts.stop || opts.prevent)
                    ? ($evt) => {
                        opts.stop && $evt.stopPropagation();
                        opts.prevent && $evt.preventDefault();
                        handler.call(this, $evt);
                    }
                    : ($evt) => {
                        handler.call(this, $evt);
                    }, opts);
                this.__addDeregisterFn(deregFn);
            });
        });
    }
    /**
     * Get rendered DOM Node which should be apply transition.
     *
     * 返回在 transition 动画时应该被应用到的 DOM 节点。
     */
    get __transitionDOM() {
        const el = this[__].rootNodes[0];
        return isComponent(el) ? el.__transitionDOM : el;
    }
    /**
     * Get first rendered DOM Node after Component is rendered.
     *
     * 按从左往右从上到下的深度遍历，找到的第一个 DOM 节点。
     */
    get __firstDOM() {
        const el = this[__].rootNodes[0];
        return isComponent(el) ? el.__firstDOM : el;
    }
    /**
     * Get last rendered DOM Node after Component is rendered.
     *
     * 按从右往左，从上到下的深度遍历，找到的第一个 DOM 节点（相对于从左到右的顺序是最后一个 DOM 节点）。
     */
    get __lastDOM() {
        const rns = this[__].rootNodes;
        const el = rns[rns.length - 1];
        return isComponent(el) ? el.__lastDOM : el;
    }
    /**
     * 对模板进行渲染的函数，也可能是渲染编译器传递进来的默认渲染函数。
     * 如果子组件需要进行自定义的渲染行为，需要重载该函数。
     */
    __render() {
        const Clazz = this.constructor;
        let renderFn = Clazz.template; // jinge-loader 已经将 string 转成了 RenderFn，此处强制转换类型以绕开 typescript.
        if (!renderFn && this[__].slots) {
            renderFn = this[__].slots.default;
        }
        if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isFunction)(renderFn)) {
            throw new Error(`Template of ${Clazz.name} not found. Forget static getter "template"?`);
        }
        _style__WEBPACK_IMPORTED_MODULE_4__.manager.add(Clazz.style); // jinge-loader 已经将 string 转成了 ComponentStyle，此处强制转换类型以绕开 typescript.
        return renderFn(this);
    }
    /**
     * Render Component to HTMLElement.
     * This method is usually used to render the entire application.
     * See the `bootstrap()` function in `./bootstrap.js`.
     *
     * By default, the target element will be replaced(that means deleted).
     * But you can disable it by pass `replaceMode`=`false`,
     * which means component append to target as it's children.
     */
    __renderToDOM(targetEl, replaceMode = true) {
        if (this[__].state !== ComponentStates.INITIALIZE) {
            throw new Error('component has already been rendered.');
        }
        const rr = assertRenderResults(this.__render());
        _style__WEBPACK_IMPORTED_MODULE_4__.manager.attch();
        if (replaceMode) {
            (0,_util__WEBPACK_IMPORTED_MODULE_0__.replaceChildren)(targetEl.parentNode, rr, targetEl);
        }
        else {
            (0,_util__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(targetEl, rr);
        }
        this.__handleAfterRender();
    }
    __destroy(removeDOM = true) {
        const comp = this[__];
        if (comp.state > ComponentStates.WILLDESTROY)
            return;
        comp.state = ComponentStates.WILLDESTROY;
        /*
         * once component is being destroied,
         *   we mark component and it's passed-attrs un-notifiable to ignore
         *   possible messeges occurs in BEFORE_DESTROY lifecycle callback.
         */
        this[_vm_common__WEBPACK_IMPORTED_MODULE_1__.$$].__notifiable = false;
        comp.passedAttrs[_vm_common__WEBPACK_IMPORTED_MODULE_1__.$$].__notifiable = false;
        // notify before destroy lifecycle
        // 需要注意，必须先 NOTIFY 向外通知销毁消息，再执行 BEFORE_DESTROY 生命周期函数。
        //   因为在 BEFORE_DESTROY 里会销毁外部消息回调函数里可能会用到的属性等资源。
        this.__notify('before-destroy');
        this.__beforeDestroy();
        // destroy children(include child component and html nodes)
        this.__handleBeforeDestroy(removeDOM);
        // clear messenger listeners.
        super.__off();
        // remove component style
        _style__WEBPACK_IMPORTED_MODULE_4__.manager.remove(this.constructor.style);
        // destroy attrs passed to constructor
        comp.passedAttrs[_vm_common__WEBPACK_IMPORTED_MODULE_1__.$$].__destroy();
        comp.passedAttrs = null;
        // destroy view model
        this[_vm_common__WEBPACK_IMPORTED_MODULE_1__.$$].__destroy();
        // clear next tick update setImmediate
        if (comp.upNextMap) {
            comp.upNextMap.forEach((imm) => {
                (0,_util__WEBPACK_IMPORTED_MODULE_0__.clearImmediate)(imm);
            });
            comp.upNextMap = null;
        }
        // destroy related refs:
        if (comp.relatedRefs) {
            comp.relatedRefs.forEach((info) => {
                const refs = info.origin[__].refs;
                if (!refs)
                    return;
                const rns = refs.get(info.ref);
                if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isArray)(rns)) {
                    (0,_util__WEBPACK_IMPORTED_MODULE_0__.arrayRemove)(rns, info.node || this);
                }
                else {
                    refs.delete(info.ref);
                }
            });
            comp.relatedRefs = null;
        }
        // auto call all deregister functions
        if (comp.deregFns) {
            comp.deregFns.forEach((deregFn) => deregFn());
            comp.deregFns.clear();
            comp.deregFns = null;
        }
        // clear properties
        comp.state = ComponentStates.DESTROIED;
        // unlink all symbol properties. maybe unnecessary.
        comp.rootNodes = comp.nonRootCompNodes = comp.refs = comp.slots = comp.context = null;
    }
    __handleBeforeDestroy(removeDOM = false) {
        this[__].nonRootCompNodes.forEach((component) => {
            // it's not necessary to remove dom when destroy non-root component,
            // because those dom nodes will be auto removed when their parent dom is removed.
            component.__destroy(false);
        });
        let $parent;
        this[__].rootNodes.forEach((node) => {
            if (isComponent(node)) {
                node.__destroy(removeDOM);
            }
            else if (removeDOM) {
                if (!$parent) {
                    $parent = node.parentNode;
                }
                $parent.removeChild(node);
            }
        });
    }
    __handleAfterRender() {
        /*
         * Set NOTIFIABLE=true to enable ViewModel notify.
         * Don't forgot to add these code if you override HANDLE_AFTER_RENDER
         */
        this[__].passedAttrs[_vm_common__WEBPACK_IMPORTED_MODULE_1__.$$].__notifiable = true;
        this[_vm_common__WEBPACK_IMPORTED_MODULE_1__.$$].__notifiable = true;
        this[__].rootNodes.forEach((n) => {
            if (isComponent(n))
                n.__handleAfterRender();
        });
        this[__].nonRootCompNodes.forEach((n) => {
            if (isComponent(n))
                n.__handleAfterRender();
        });
        this[__].state = ComponentStates.RENDERED;
        this[__].contextState =
            this[__].contextState === ContextStates.TOUCHED ? ContextStates.TOUCHED_FREEZED : ContextStates.UNTOUCH_FREEZED; // has been rendered, can't modify context
        this.__afterRender();
        this.__notify('after-render');
    }
    __updateIfNeed(handler, nextTick = true) {
        if (this[__].state !== ComponentStates.RENDERED) {
            return;
        }
        if (handler === false) {
            return this.__update();
        }
        if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isFunction)(handler)) {
            handler = this.__update;
        }
        if (!nextTick) {
            handler.call(this);
            return;
        }
        let ntMap = this[__].upNextMap;
        if (!ntMap)
            ntMap = this[__].upNextMap = new Map();
        if (ntMap.has(handler)) {
            // already in queue.
            return;
        }
        ntMap.set(handler, (0,_util__WEBPACK_IMPORTED_MODULE_0__.setImmediate)(() => {
            ntMap.delete(handler);
            handler.call(this);
        }));
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    __update(first) {
        // by default, do nothing.
    }
    __setContext(key, value, forceOverride = false) {
        if (this[__].contextState === ContextStates.UNTOUCH_FREEZED ||
            this[__].contextState === ContextStates.TOUCHED_FREEZED) {
            throw new Error("Can't setContext after component has been rendered. Try put setContext code into constructor.");
        }
        if (this[__].contextState === ContextStates.UNTOUCH) {
            // we copy context to make sure child component do not modify context passed from parent.
            // we do not copy it by default until setContext function is called, because it unnecessary to waste memory if
            // child component do not modify the context.
            this[__].context = Object.assign({}, this[__].context);
            this[__].contextState = ContextStates.TOUCHED; // has been copied.
        }
        if (key in this[__].context) {
            // override exist may case hidden bug hard to debug.
            // so we force programmer to pass third argument to
            //   tell us he/she know what he/she is doing.
            if (!forceOverride) {
                throw new Error(`Contenxt with key: ${key.toString()} is exist. Pass third argument forceOverride=true to override it.`);
            }
        }
        this[__].context[key] = value;
    }
    __getContext(key) {
        return this[__].context ? this[__].context[key] : null;
    }
    /**
     * This method is used for compiler generated code.
     * Do not use it manually.
     */
    __setRef(ref, el, relatedComponent) {
        let rns = this[__].refs;
        if (!rns) {
            this[__].refs = rns = new Map();
        }
        let elOrArr = rns.get(ref);
        if (!elOrArr) {
            rns.set(ref, el);
        }
        else if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isArray)(elOrArr)) {
            elOrArr.push(el);
        }
        else {
            elOrArr = [elOrArr, el];
            rns.set(ref, elOrArr);
        }
        const isComp = isComponent(el);
        if (!isComp && this === relatedComponent) {
            return;
        }
        /**
         * 如果被 ref: 标记的元素（el）本身就是组件（Component）节点，
         *   那么 el 自身就是关联组件，el 自身在被销毁时可以执行删除关联 refs 的操作；
         * 如果 el 是 DOM 节点，则必须将它添加到关联组件（比如 <if>） relatedComponent 里，
         *   在 relatedComponent 被销毁时执行关联 refs 的删除。
         */
        let rbs = (isComp ? el : relatedComponent)[__].relatedRefs;
        if (!rbs) {
            (isComp ? el : relatedComponent)[__].relatedRefs = rbs = [];
        }
        rbs.push({
            origin: this,
            ref,
            node: isComp ? null : el,
        });
    }
    /**
     * Get child node(or nodes) marked by 'ref:' attribute in template
     */
    __getRef(ref) {
        if (this[__].state !== ComponentStates.RENDERED) {
            (0,_util__WEBPACK_IMPORTED_MODULE_0__.warn)(`Warning: call __getRef before component '${this.constructor.name}' rendered will get nothing. see https://[TODO]`);
        }
        return this[__].refs ? this[__].refs.get(ref) : null;
    }
    /**
     * lifecycle hook, called after rendered.
     */
    __afterRender() {
        // lifecycle hook, default do nothing.
    }
    /**
     * lifecycle hook, called before destroy.
     */
    __beforeDestroy() {
        // lifecycle hook, default do nothing.
    }
}
_a = __;
/**
 * 某些情况下，需要判断一个函数是否是组件的构造函数。添加一个静态成员属性符号用于进行该判断。
 * isComponent 函数既可以判断是否是构造函数（配合 isFunction），又可以判断一个对像是否是组件实例。
 *
 * 示例：
 *
 * ````js
 * import { isComponent, Component } from 'jinge';
 *
 * class A {};
 * class B extends Component {};
 * console.log(isComponent(A)); // false
 * console.log(isComponent(B)); // true
 * ````
 */
Component[_a] = true;
//# sourceMappingURL=component.js.map

/***/ }),

/***/ "../../jinge/lib/core/i18n.js":
/*!************************************!*\
  !*** ../../jinge/lib/core/i18n.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compile": () => (/* binding */ compile),
/* harmony export */   "i18n": () => (/* binding */ i18n),
/* harmony export */   "_t": () => (/* binding */ _t)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge/lib/util/index.js");
/* harmony import */ var _messenger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messenger */ "../../jinge/lib/core/messenger.js");


const TextFnCache = new Map();
/**
 * convert i18n text template to function
 * @param {String} text i18n formatted text template
 */
function compile(text) {
    let fn = TextFnCache.get(text);
    if (!fn) {
        fn = new Function('__ctx', `return \`${text.replace(/`/g, '\\`').replace(/\$\{\s*([\w\d._$]+)\s*\}/g, (m, n) => {
            return '${ __ctx.' + n + ' }';
        })}\`;`);
        TextFnCache.set(text, fn);
    }
    return fn;
}
function defaultFetchFn(url) {
    return window.fetch(url).then((res) => res.text());
}
function mergeDictOrRender(main, chunk) {
    for (const k in chunk) {
        if (!(k in main)) {
            main[k] = chunk[k];
        }
    }
}
function _assert(s) {
    if (!s.__data)
        throw new Error('i18n data not found. Forgot to load i18n resource script?');
}
class I18nService extends _messenger__WEBPACK_IMPORTED_MODULE_1__.Messenger {
    constructor() {
        super();
        this.__deps = null;
        this.__data = null;
        this.__cache = new Map();
        this.__key = null;
        this.__loader = null;
        const d = window.JINGE_I18N_DATA;
        d && this.__regLoc(d);
    }
    get locale() {
        _assert(this);
        return this.__data.locale;
    }
    /**
     * Register i18n render depedent.
     * This method will be called by compiler generated code, don't call it manully.
     */
    __regDep(idx, depent) {
        const deps = this.__deps || (this.__deps = []);
        if (deps[idx]) {
            if (deps[idx] !== depent)
                throw new Error(`conflict at ${idx}`);
            return;
        }
        deps[idx] = depent;
    }
    /**
     * Register locale data, will be called in locale resource script.
     * Usually you don't need call this method manully.
     */
    __regLoc(data) {
        const cache = this.__cache;
        if (!cache.has(data.locale)) {
            cache.set(data.locale, {
                locale: data.locale,
                dictionary: null,
                render: { components: {}, attributes: {} },
                __renders: [],
            });
        }
        const localeData = cache.get(data.locale);
        if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isFunction)(data.render)) {
            localeData.__renders.push(data.render);
        }
        if (data.dictionary) {
            if (!localeData.dictionary)
                localeData.dictionary = data.dictionary;
            else
                mergeDictOrRender(localeData.dictionary, data.dictionary);
        }
        if (!this.__data) {
            this.__data = localeData;
        }
    }
    /**
     * switch to another locale/language
     * @param locale 目标语言
     * @param filenameOrLoadFn 目标语言的资源包文件路径。如果为 chunk 服务指定了 meta 信息，则该参数可忽略，自动从 meta 信息里取。
     */
    async switch(locale, filenameOrLoadFn) {
        var _a;
        if (this.__data.locale === locale) {
            return;
        }
        if (!filenameOrLoadFn) {
            filenameOrLoadFn = (_a = this.__loader) === null || _a === void 0 ? void 0 : _a._get(locale);
            if (!filenameOrLoadFn)
                throw new Error('filename required.');
        }
        const key = (0,_util__WEBPACK_IMPORTED_MODULE_0__.uid)();
        this.__key = key;
        this.__notify('before-change', this.locale, locale);
        let data = this.__cache.get(locale);
        if (!data) {
            const code = await ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isString)(filenameOrLoadFn)
                ? defaultFetchFn(filenameOrLoadFn)
                : filenameOrLoadFn(locale));
            new Function('jinge', code)({
                i18n: this,
            });
            if (this.__key !== key) {
                /*
                 * ignore if callback has been expired.
                 * 使用闭包的技巧来检测当前回调是否已经过期，
                 */
                return;
            }
            data = this.__cache.get(locale);
        }
        this.__data = data;
        if (this.__loader) {
            await this.__loader._load(locale);
            if (this.__key !== key) {
                return;
            }
        }
        this.__notify('change', this.locale);
    }
    __t(key, params) {
        _assert(this);
        const dict = this.__data.dictionary;
        if (!(key in dict)) {
            return 'i18n_missing';
        }
        let text = dict[key];
        if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isString)(text)) {
            // text.startsWith("«") means reference to another key
            if (text.charCodeAt(0) === 171) {
                text = dict[text.substring(1)];
                if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isString)(text)) {
                    text = compile(text);
                }
            }
            else {
                text = compile(text);
            }
            dict[key] = text;
        }
        return text(params);
    }
    __r(key, type) {
        _assert(this);
        const __renders = this.__data.__renders;
        const render = this.__data.render;
        if (__renders && __renders.length > 0) {
            if (!this.__deps)
                throw new Error('missing deps');
            __renders.forEach((renderFactory) => {
                const r = renderFactory(...this.__deps);
                mergeDictOrRender(render.components, r.components);
                mergeDictOrRender(render.attributes, r.attributes);
            });
            __renders.length = 0;
        }
        const renderDict = render[type];
        if (!(key in renderDict)) {
            throw new Error(`missing ${type} key: ${key}`);
        }
        let fn = renderDict[key];
        if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isString)(fn)) {
            // if fn is string, it's a reference to another key.
            renderDict[key] = fn = renderDict[fn];
        }
        return fn;
    }
    /**
     * @param handler a listener bind to change event
     * @param immediate call listener immediately, default is false.
     * @returns a function auto remove listener
     */
    watch(listener, immediate = false) {
        this.__on('change', listener);
        if (immediate) {
            listener(this.locale);
        }
        return () => {
            this.__off('change', listener);
        };
    }
}
/* Singleton */
const i18n = new I18nService();
/**
 * Compiler helper function, the first parameter will be convert to i18n dictionary key,
 * and the whole function will be transform to `i18nService._t(key, params)`
 *
 * But after i18n locale resource script had been written, compiler won't transform it,
 * the function will work as text parse util.
 *
 * @param {String|Object} text
 * @param {Object} params
 */
function _t(text, params) {
    return params ? compile(text)(params) : text;
}
//# sourceMappingURL=i18n.js.map

/***/ }),

/***/ "../../jinge/lib/core/index.js":
/*!*************************************!*\
  !*** ../../jinge/lib/core/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bootstrap": () => (/* reexport safe */ _bootstrap__WEBPACK_IMPORTED_MODULE_0__.bootstrap),
/* harmony export */   "Component": () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_1__.Component),
/* harmony export */   "ComponentStates": () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_1__.ComponentStates),
/* harmony export */   "ContextStates": () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_1__.ContextStates),
/* harmony export */   "__": () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_1__.__),
/* harmony export */   "assertRenderResults": () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_1__.assertRenderResults),
/* harmony export */   "attrs": () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_1__.attrs),
/* harmony export */   "isComponent": () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_1__.isComponent),
/* harmony export */   "_t": () => (/* reexport safe */ _i18n__WEBPACK_IMPORTED_MODULE_2__._t),
/* harmony export */   "compile": () => (/* reexport safe */ _i18n__WEBPACK_IMPORTED_MODULE_2__.compile),
/* harmony export */   "i18n": () => (/* reexport safe */ _i18n__WEBPACK_IMPORTED_MODULE_2__.i18n),
/* harmony export */   "MESSENGER_LISTENERS": () => (/* reexport safe */ _messenger__WEBPACK_IMPORTED_MODULE_3__.MESSENGER_LISTENERS),
/* harmony export */   "Messenger": () => (/* reexport safe */ _messenger__WEBPACK_IMPORTED_MODULE_3__.Messenger),
/* harmony export */   "emptyRenderFn": () => (/* reexport safe */ _render_fns__WEBPACK_IMPORTED_MODULE_4__.emptyRenderFn),
/* harmony export */   "errorRenderFn": () => (/* reexport safe */ _render_fns__WEBPACK_IMPORTED_MODULE_4__.errorRenderFn),
/* harmony export */   "i18nRenderFn": () => (/* reexport safe */ _render_fns__WEBPACK_IMPORTED_MODULE_4__.i18nRenderFn),
/* harmony export */   "textRenderFn": () => (/* reexport safe */ _render_fns__WEBPACK_IMPORTED_MODULE_4__.textRenderFn),
/* harmony export */   "manager": () => (/* reexport safe */ _style__WEBPACK_IMPORTED_MODULE_5__.manager),
/* harmony export */   "TransitionStates": () => (/* reexport safe */ _transition__WEBPACK_IMPORTED_MODULE_6__.TransitionStates),
/* harmony export */   "getDuration": () => (/* reexport safe */ _transition__WEBPACK_IMPORTED_MODULE_6__.getDuration),
/* harmony export */   "getDurationType": () => (/* reexport safe */ _transition__WEBPACK_IMPORTED_MODULE_6__.getDurationType),
/* harmony export */   "ChunkResourceLoader": () => (/* reexport safe */ _chunk__WEBPACK_IMPORTED_MODULE_7__.ChunkResourceLoader),
/* harmony export */   "chunk": () => (/* reexport safe */ _chunk__WEBPACK_IMPORTED_MODULE_7__.chunk)
/* harmony export */ });
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap */ "../../jinge/lib/core/bootstrap.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "../../jinge/lib/core/component.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./i18n */ "../../jinge/lib/core/i18n.js");
/* harmony import */ var _messenger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messenger */ "../../jinge/lib/core/messenger.js");
/* harmony import */ var _render_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./render_fns */ "../../jinge/lib/core/render_fns.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "../../jinge/lib/core/style.js");
/* harmony import */ var _transition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transition */ "../../jinge/lib/core/transition.js");
/* harmony import */ var _chunk__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chunk */ "../../jinge/lib/core/chunk.js");








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge/lib/core/messenger.js":
/*!*****************************************!*\
  !*** ../../jinge/lib/core/messenger.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MESSENGER_LISTENERS": () => (/* binding */ MESSENGER_LISTENERS),
/* harmony export */   "Messenger": () => (/* binding */ Messenger)
/* harmony export */ });
const MESSENGER_LISTENERS = Symbol('listeners');
class Messenger {
    constructor(templateListeners) {
        this[MESSENGER_LISTENERS] = null;
        if (templateListeners) {
            for (const eventName in templateListeners) {
                const handler = templateListeners[eventName];
                this.__on(eventName, handler.fn, handler.opts);
            }
        }
    }
    __notify(eventName, ...args) {
        if (!this[MESSENGER_LISTENERS])
            return;
        const listeners = this[MESSENGER_LISTENERS].get(eventName);
        if (!listeners)
            return;
        listeners.forEach((opts, handler) => {
            handler(...args);
            if (opts && opts.once) {
                listeners.delete(handler);
            }
        });
    }
    __on(eventName, eventListener, options) {
        if (!this[MESSENGER_LISTENERS]) {
            this[MESSENGER_LISTENERS] = new Map();
        }
        let listeners = this[MESSENGER_LISTENERS].get(eventName);
        if (!listeners) {
            this[MESSENGER_LISTENERS].set(eventName, (listeners = new Map()));
        }
        listeners.set(eventListener, options);
    }
    __off(eventName, eventListener) {
        const lisMap = this[MESSENGER_LISTENERS];
        if (!lisMap) {
            return;
        }
        if (!eventName) {
            lisMap.forEach((listeners) => listeners.clear());
            lisMap.clear();
            return;
        }
        const listeners = lisMap.get(eventName);
        if (!listeners) {
            return;
        }
        if (!eventListener) {
            listeners.clear();
        }
        else {
            listeners.delete(eventListener);
        }
    }
}
//# sourceMappingURL=messenger.js.map

/***/ }),

/***/ "../../jinge/lib/core/render_fns.js":
/*!******************************************!*\
  !*** ../../jinge/lib/core/render_fns.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emptyRenderFn": () => (/* binding */ emptyRenderFn),
/* harmony export */   "errorRenderFn": () => (/* binding */ errorRenderFn),
/* harmony export */   "textRenderFn": () => (/* binding */ textRenderFn),
/* harmony export */   "i18nRenderFn": () => (/* binding */ i18nRenderFn)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge/lib/util/index.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./i18n */ "../../jinge/lib/core/i18n.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component */ "../../jinge/lib/core/component.js");



function emptyRenderFn(component) {
    const el = document.createComment('empty');
    component[_component__WEBPACK_IMPORTED_MODULE_2__.__].rootNodes.push(el);
    return [el];
}
function errorRenderFn(component) {
    const el = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', {
        style: 'color: red !important;',
    });
    el.textContent = 'template parsing failed! please check webpack log.';
    component[_component__WEBPACK_IMPORTED_MODULE_2__.__].rootNodes.push(el);
    return el;
}
function textRenderFn(component, txtContent) {
    const el = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createTextNode)(txtContent);
    component[_component__WEBPACK_IMPORTED_MODULE_2__.__].rootNodes.push(el);
    return el;
}
function i18nRenderFn(component, key, isRoot = false) {
    const el = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createTextNode)();
    const fn = () => {
        el.textContent = _i18n__WEBPACK_IMPORTED_MODULE_1__.i18n.__t(key);
    };
    fn();
    component.__i18nWatch(fn);
    isRoot && component[_component__WEBPACK_IMPORTED_MODULE_2__.__].rootNodes.push(el);
    return el;
}
//# sourceMappingURL=render_fns.js.map

/***/ }),

/***/ "../../jinge/lib/core/style.js":
/*!*************************************!*\
  !*** ../../jinge/lib/core/style.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "manager": () => (/* binding */ manager)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge/lib/util/index.js");

function isHideCssExists() {
    const $e = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', {
        style: 'position:absolute;left:-10000px;',
        class: 'jg-hide',
    });
    document.body.appendChild($e);
    const exist = getComputedStyle($e).getPropertyValue('display') === 'none';
    document.body.removeChild($e);
    return exist;
}
class ComponentStyleManager {
    constructor() {
        this.m = new Map();
        this.s = 0;
    }
    create(sty) {
        if (this.s === 0)
            return;
        const $style = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createElement)('style', {
            type: 'text/css',
            id: sty.dom,
        });
        document.head.appendChild($style);
        if ($style.styleSheet) {
            $style.styleSheet.cssText = sty.css;
        }
        else {
            $style.textContent = sty.css;
        }
    }
    add(sty) {
        if (!sty)
            return;
        const styleMap = this.m;
        let info = styleMap.get(sty.id);
        if (info) {
            info.refs++;
            return;
        }
        info = {
            id: sty.id,
            css: sty.css,
            dom: `__${sty.id}__`,
            refs: 1,
        };
        styleMap.set(sty.id, info);
        this.create(info);
    }
    attch() {
        if (this.s !== 0) {
            return;
        }
        this.s = 1;
        if (!isHideCssExists()) {
            this.create({
                dom: `__jgsty_${(0,_util__WEBPACK_IMPORTED_MODULE_0__.uid)()}__`,
                css: '.jg-hide{display:none!important}.jg-hide.jg-hide-enter,.jg-hide.jg-hide-leave{display:block!important}',
            });
        }
        this.m.forEach((info) => {
            this.create(info);
        });
    }
    remove(sty) {
        if (!sty)
            return;
        const info = this.m.get(sty.id);
        if (!info)
            return;
        info.refs--;
        if (info.refs > 0) {
            return;
        }
        this.m.delete(info.id);
        if (this.s === 0) {
            return;
        }
        document.head.removeChild(document.getElementById(info.dom));
    }
}
// singleton
const manager = new ComponentStyleManager();
//# sourceMappingURL=style.js.map

/***/ }),

/***/ "../../jinge/lib/core/transition.js":
/*!******************************************!*\
  !*** ../../jinge/lib/core/transition.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransitionStates": () => (/* binding */ TransitionStates),
/* harmony export */   "getDurationType": () => (/* binding */ getDurationType),
/* harmony export */   "getDuration": () => (/* binding */ getDuration)
/* harmony export */ });
var TransitionStates;
(function (TransitionStates) {
    TransitionStates[TransitionStates["ENTERING"] = 1] = "ENTERING";
    TransitionStates[TransitionStates["ENTERED"] = 2] = "ENTERED";
    TransitionStates[TransitionStates["LEAVING"] = 3] = "LEAVING";
    TransitionStates[TransitionStates["LEAVED"] = 4] = "LEAVED";
})(TransitionStates || (TransitionStates = {}));
function getDurationType(el) {
    const cst = getComputedStyle(el);
    if (cst.getPropertyValue('transition-duration') !== '0s') {
        return 'transitionend';
    }
    else if (cst.getPropertyValue('animation-duration') !== '0s') {
        return 'animationend';
    }
    return null;
}
function parseDuration(v) {
    if (/ms$/.test(v)) {
        return parseInt(v);
    }
    else if (/s$/.test(v)) {
        return parseFloat(v) * 1000;
    }
    else {
        return 0;
    }
}
function getDuration(el) {
    const cst = getComputedStyle(el);
    let dur = cst.getPropertyValue('transition-duration');
    if (dur !== '0s') {
        return {
            type: 'transitionend',
            time: parseDuration(dur),
        };
    }
    dur = cst.getPropertyValue('animation-duration');
    if (dur !== '0s') {
        return {
            type: 'animationend',
            time: parseDuration(dur),
        };
    }
    return {
        type: null,
        time: 0,
    };
}
//# sourceMappingURL=transition.js.map

/***/ }),

/***/ "../../jinge/lib/index.js":
/*!********************************!*\
  !*** ../../jinge/lib/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$$": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.$$),
/* harmony export */   "BindHtmlComponent": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.BindHtmlComponent),
/* harmony export */   "ChunkResourceLoader": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.ChunkResourceLoader),
/* harmony export */   "Component": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.Component),
/* harmony export */   "ComponentStates": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.ComponentStates),
/* harmony export */   "ContextStates": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.ContextStates),
/* harmony export */   "DynamicRenderComponent": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.DynamicRenderComponent),
/* harmony export */   "ForComponent": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.ForComponent),
/* harmony export */   "ForEachComponent": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.ForEachComponent),
/* harmony export */   "HideComponent": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.HideComponent),
/* harmony export */   "I18nComponent": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.I18nComponent),
/* harmony export */   "IfComponent": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.IfComponent),
/* harmony export */   "LogComponent": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.LogComponent),
/* harmony export */   "MESSENGER_LISTENERS": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.MESSENGER_LISTENERS),
/* harmony export */   "Messenger": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.Messenger),
/* harmony export */   "ParameterComponent": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.ParameterComponent),
/* harmony export */   "SwitchComponent": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.SwitchComponent),
/* harmony export */   "ToggleClassComponent": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.ToggleClassComponent),
/* harmony export */   "TransitionStates": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.TransitionStates),
/* harmony export */   "ViewModelCoreImpl": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.ViewModelCoreImpl),
/* harmony export */   "__": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.__),
/* harmony export */   "_t": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__._t),
/* harmony export */   "addEvent": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.addEvent),
/* harmony export */   "addParent": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.addParent),
/* harmony export */   "appendChildren": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.appendChildren),
/* harmony export */   "arrayEqual": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.arrayEqual),
/* harmony export */   "arrayPushIfNotExist": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.arrayPushIfNotExist),
/* harmony export */   "arrayRemove": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.arrayRemove),
/* harmony export */   "assertRenderResults": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.assertRenderResults),
/* harmony export */   "attrs": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.attrs),
/* harmony export */   "bootstrap": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.bootstrap),
/* harmony export */   "chunk": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.chunk),
/* harmony export */   "clearImmediate": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.clearImmediate),
/* harmony export */   "compile": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.compile),
/* harmony export */   "createAttributes": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.createAttributes),
/* harmony export */   "createComponent": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.createComponent),
/* harmony export */   "createElement": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.createElement),
/* harmony export */   "createElementWithChild": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.createElementWithChild),
/* harmony export */   "createElementWithoutAttrs": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.createElementWithoutAttrs),
/* harmony export */   "createFragment": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.createFragment),
/* harmony export */   "createSVGElement": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.createSVGElement),
/* harmony export */   "createSVGElementWithoutAttrs": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.createSVGElementWithoutAttrs),
/* harmony export */   "createTextNode": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.createTextNode),
/* harmony export */   "createViewModel": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.createViewModel),
/* harmony export */   "deleteNode": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.deleteNode),
/* harmony export */   "disableWarning": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.disableWarning),
/* harmony export */   "emptyRenderFn": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.emptyRenderFn),
/* harmony export */   "errorRenderFn": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.errorRenderFn),
/* harmony export */   "getDuration": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.getDuration),
/* harmony export */   "getDurationType": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.getDurationType),
/* harmony export */   "getPropertyName": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.getPropertyName),
/* harmony export */   "handleCancel": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.handleCancel),
/* harmony export */   "handleOnce": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.handleOnce),
/* harmony export */   "i18n": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.i18n),
/* harmony export */   "i18nRenderFn": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.i18nRenderFn),
/* harmony export */   "insertAfter": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.insertAfter),
/* harmony export */   "isArray": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.isArray),
/* harmony export */   "isBoolean": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.isBoolean),
/* harmony export */   "isComponent": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.isComponent),
/* harmony export */   "isFunction": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.isFunction),
/* harmony export */   "isInnerObj": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.isInnerObj),
/* harmony export */   "isNumber": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.isNumber),
/* harmony export */   "isObject": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.isObject),
/* harmony export */   "isPromise": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.isPromise),
/* harmony export */   "isPublicProperty": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.isPublicProperty),
/* harmony export */   "isString": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.isString),
/* harmony export */   "isUndefined": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.isUndefined),
/* harmony export */   "isViewModel": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.isViewModel),
/* harmony export */   "loopClearNode": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.loopClearNode),
/* harmony export */   "loopCreateNode": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.loopCreateNode),
/* harmony export */   "loopGetNode": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.loopGetNode),
/* harmony export */   "loopHandle": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.loopHandle),
/* harmony export */   "loopNotify": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.loopNotify),
/* harmony export */   "manager": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.manager),
/* harmony export */   "parsePropertyPath": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.parsePropertyPath),
/* harmony export */   "registerEvent": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.registerEvent),
/* harmony export */   "removeAttribute": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.removeAttribute),
/* harmony export */   "removeEvent": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.removeEvent),
/* harmony export */   "removeParent": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.removeParent),
/* harmony export */   "replaceChildren": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.replaceChildren),
/* harmony export */   "setAttribute": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.setAttribute),
/* harmony export */   "setImmediate": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.setImmediate),
/* harmony export */   "setText": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.setText),
/* harmony export */   "shiftParent": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.shiftParent),
/* harmony export */   "textRenderFn": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.textRenderFn),
/* harmony export */   "typeOf": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.typeOf),
/* harmony export */   "uid": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.uid),
/* harmony export */   "unwatch": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.unwatch),
/* harmony export */   "vm": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.vm),
/* harmony export */   "warn": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.warn),
/* harmony export */   "watch": () => (/* reexport safe */ _export__WEBPACK_IMPORTED_MODULE_1__.watch)
/* harmony export */ });
/* harmony import */ var _register_i18n_render_deps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./__register_i18n_render_deps */ "../../jinge/lib/__register_i18n_render_deps.js");
/* harmony import */ var _register_i18n_render_deps__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_register_i18n_render_deps__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _export__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./__export */ "../../jinge/lib/__export.js");


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge/lib/util/array.js":
/*!*************************************!*\
  !*** ../../jinge/lib/util/array.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrayRemove": () => (/* binding */ arrayRemove),
/* harmony export */   "arrayPushIfNotExist": () => (/* binding */ arrayPushIfNotExist),
/* harmony export */   "arrayEqual": () => (/* binding */ arrayEqual)
/* harmony export */ });
function arrayRemove(array, item) {
    const idx = array.indexOf(item);
    if (idx < 0)
        return false;
    array.splice(idx, 1);
    return true;
}
function arrayPushIfNotExist(array, item) {
    const idx = array.indexOf(item);
    if (idx >= 0)
        return;
    array.push(item);
}
function arrayEqual(arr1, arr2) {
    if (arr1.length !== arr2.length)
        return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i])
            return false;
    }
    return true;
}
//# sourceMappingURL=array.js.map

/***/ }),

/***/ "../../jinge/lib/util/common.js":
/*!**************************************!*\
  !*** ../../jinge/lib/util/common.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uid": () => (/* binding */ uid),
/* harmony export */   "warn": () => (/* binding */ warn),
/* harmony export */   "disableWarning": () => (/* binding */ disableWarning)
/* harmony export */ });
let UID_INC = 0;
function uid() {
    return (Date.now().toString(32) + '-' + Math.floor(Math.random() * 0xffffff).toString(32) + '-' + (UID_INC++).toString(32));
}
let warning = true;
function warn(...args) {
    // eslint-disable-next-line no-console
    warning && console.warn(...args);
}
function disableWarning() {
    warning = false;
}
//# sourceMappingURL=common.js.map

/***/ }),

/***/ "../../jinge/lib/util/dom.js":
/*!***********************************!*\
  !*** ../../jinge/lib/util/dom.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setText": () => (/* binding */ setText),
/* harmony export */   "createTextNode": () => (/* binding */ createTextNode),
/* harmony export */   "createFragment": () => (/* binding */ createFragment),
/* harmony export */   "appendChildren": () => (/* binding */ appendChildren),
/* harmony export */   "replaceChildren": () => (/* binding */ replaceChildren),
/* harmony export */   "removeAttribute": () => (/* binding */ removeAttribute),
/* harmony export */   "setAttribute": () => (/* binding */ setAttribute),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "createElementWithoutAttrs": () => (/* binding */ createElementWithoutAttrs),
/* harmony export */   "createSVGElement": () => (/* binding */ createSVGElement),
/* harmony export */   "createSVGElementWithoutAttrs": () => (/* binding */ createSVGElementWithoutAttrs),
/* harmony export */   "createElementWithChild": () => (/* binding */ createElementWithChild),
/* harmony export */   "insertAfter": () => (/* binding */ insertAfter),
/* harmony export */   "addEvent": () => (/* binding */ addEvent),
/* harmony export */   "removeEvent": () => (/* binding */ removeEvent),
/* harmony export */   "registerEvent": () => (/* binding */ registerEvent)
/* harmony export */ });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "../../jinge/lib/util/type.js");

function setText($element, text) {
    if (!(0,_type__WEBPACK_IMPORTED_MODULE_0__.isString)(text)) {
        text = JSON.stringify(text);
    }
    $element.textContent = text;
}
function createTextNode(text = '') {
    return document.createTextNode((0,_type__WEBPACK_IMPORTED_MODULE_0__.isString)(text) ? text : JSON.stringify(text));
}
function createFragment(children) {
    const f = document.createDocumentFragment();
    children &&
        children.forEach((n) => {
            f.appendChild((0,_type__WEBPACK_IMPORTED_MODULE_0__.isString)(n) ? document.createTextNode(n) : n);
        });
    return f;
}
function appendChildren($parent, children) {
    $parent.appendChild(children.length > 1
        ? createFragment(children)
        : (0,_type__WEBPACK_IMPORTED_MODULE_0__.isString)(children[0])
            ? createTextNode(children[0])
            : children[0]);
}
function replaceChildren($parent, children, oldNode) {
    $parent.replaceChild(createFragment(children), oldNode);
}
function removeAttribute($ele, attrName) {
    if (!attrName)
        return;
    if ((0,_type__WEBPACK_IMPORTED_MODULE_0__.isObject)(attrName)) {
        for (const attrN in attrName) {
            removeAttribute($ele, attrN);
        }
        return;
    }
    return $ele.removeAttribute(attrName);
}
function setAttribute($ele, attrName, attrValue) {
    if (!attrName)
        return;
    if ((0,_type__WEBPACK_IMPORTED_MODULE_0__.isObject)(attrName)) {
        for (const attrN in attrName) {
            setAttribute($ele, attrN, attrName[attrN]);
        }
        return;
    }
    if ((0,_type__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(attrValue) || attrValue === null) {
        removeAttribute($ele, attrName);
    }
    else {
        $ele.setAttribute(attrName, attrValue);
    }
}
function _createEl($el, attrs, children) {
    if (attrs) {
        for (const an in attrs) {
            if (an && !(0,_type__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(attrs[an])) {
                setAttribute($el, an, attrs[an]);
            }
        }
    }
    children.length > 0 && appendChildren($el, children);
    return $el;
}
function createElement(tag, attrs, ...children) {
    return _createEl(document.createElement(tag), attrs, children);
}
function createElementWithoutAttrs(tag, ...children) {
    return createElement(tag, null, ...children);
}
function createSVGElement(tag, attrs, ...children) {
    return _createEl(document.createElementNS('http://www.w3.org/2000/svg', tag), attrs, children);
}
function createSVGElementWithoutAttrs(tag, ...children) {
    return createSVGElement(tag, null, ...children);
}
function createElementWithChild(tag, attrs, child) {
    const $e = createElement(tag, attrs);
    $e.appendChild((0,_type__WEBPACK_IMPORTED_MODULE_0__.isString)(child) ? createTextNode(child) : child);
    return $e;
}
function insertAfter($parent, newNode, referenceNode) {
    const rn = referenceNode.nextSibling;
    if (!rn) {
        $parent.appendChild(newNode);
    }
    else {
        $parent.insertBefore(newNode, rn);
    }
}
function addEvent($element, eventName, handler, capture) {
    (0,_type__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(capture) &&
        (capture = eventName.startsWith('touch')
            ? {
                capture: false,
                passive: true,
            }
            : false);
    $element.addEventListener(eventName, handler, capture);
}
function removeEvent($element, eventName, handler) {
    $element.removeEventListener(eventName, handler);
}
/**
 * Add event to DOM element, similar as addEventListener,
 * but return deregister function which will call removeEventListener.
 *
 * @returns {Function} deregister function which will removeEventListener
 */
function registerEvent($element, eventName, handler, capture) {
    addEvent($element, eventName, handler, capture);
    return function deregister() {
        removeEvent($element, eventName, handler);
    };
}
//# sourceMappingURL=dom.js.map

/***/ }),

/***/ "../../jinge/lib/util/index.js":
/*!*************************************!*\
  !*** ../../jinge/lib/util/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isArray": () => (/* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_0__.isArray),
/* harmony export */   "isBoolean": () => (/* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_0__.isBoolean),
/* harmony export */   "isFunction": () => (/* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_0__.isFunction),
/* harmony export */   "isNumber": () => (/* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_0__.isNumber),
/* harmony export */   "isObject": () => (/* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_0__.isObject),
/* harmony export */   "isPromise": () => (/* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_0__.isPromise),
/* harmony export */   "isString": () => (/* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_0__.isString),
/* harmony export */   "isUndefined": () => (/* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_0__.isUndefined),
/* harmony export */   "typeOf": () => (/* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_0__.typeOf),
/* harmony export */   "arrayEqual": () => (/* reexport safe */ _array__WEBPACK_IMPORTED_MODULE_1__.arrayEqual),
/* harmony export */   "arrayPushIfNotExist": () => (/* reexport safe */ _array__WEBPACK_IMPORTED_MODULE_1__.arrayPushIfNotExist),
/* harmony export */   "arrayRemove": () => (/* reexport safe */ _array__WEBPACK_IMPORTED_MODULE_1__.arrayRemove),
/* harmony export */   "disableWarning": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_2__.disableWarning),
/* harmony export */   "uid": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_2__.uid),
/* harmony export */   "warn": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_2__.warn),
/* harmony export */   "clearImmediate": () => (/* reexport safe */ _setimm__WEBPACK_IMPORTED_MODULE_3__.clearImmediate),
/* harmony export */   "setImmediate": () => (/* reexport safe */ _setimm__WEBPACK_IMPORTED_MODULE_3__.setImmediate),
/* harmony export */   "addEvent": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.addEvent),
/* harmony export */   "appendChildren": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.appendChildren),
/* harmony export */   "createElement": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.createElement),
/* harmony export */   "createElementWithChild": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.createElementWithChild),
/* harmony export */   "createElementWithoutAttrs": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.createElementWithoutAttrs),
/* harmony export */   "createFragment": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.createFragment),
/* harmony export */   "createSVGElement": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.createSVGElement),
/* harmony export */   "createSVGElementWithoutAttrs": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.createSVGElementWithoutAttrs),
/* harmony export */   "createTextNode": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.createTextNode),
/* harmony export */   "insertAfter": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.insertAfter),
/* harmony export */   "registerEvent": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.registerEvent),
/* harmony export */   "removeAttribute": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.removeAttribute),
/* harmony export */   "removeEvent": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.removeEvent),
/* harmony export */   "replaceChildren": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.replaceChildren),
/* harmony export */   "setAttribute": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.setAttribute),
/* harmony export */   "setText": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.setText)
/* harmony export */ });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "../../jinge/lib/util/type.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "../../jinge/lib/util/array.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "../../jinge/lib/util/common.js");
/* harmony import */ var _setimm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setimm */ "../../jinge/lib/util/setimm.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom */ "../../jinge/lib/util/dom.js");





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge/lib/util/setimm.js":
/*!**************************************!*\
  !*** ../../jinge/lib/util/setimm.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setImmediate": () => (/* binding */ setImmediate),
/* harmony export */   "clearImmediate": () => (/* binding */ clearImmediate)
/* harmony export */ });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "../../jinge/lib/util/type.js");
/**
 * setImmediate polyfill only for modern browsers
 * Copied from https://github.com/YuzuJS/setImmediate/blob/master/setImmediate.js
 * Simplified by Yuhang-Ge<abeyuhang@gmail.com>
 */

let autoIncrement = 0;
let nextHandle = 1; // Spec says greater than zero
let tasksByHandle;
let currentlyRunningATask = false;
let registerImmediate;
function setImmediateFallback(callback) {
    if (!(0,_type__WEBPACK_IMPORTED_MODULE_0__.isFunction)(callback) || arguments.length > 1) {
        throw new Error('setImmediate require callback function.');
    }
    tasksByHandle.set(nextHandle, callback);
    registerImmediate(nextHandle);
    // console.log('siiii', callback);
    return nextHandle++;
}
function clearImmediateFallback(handle) {
    tasksByHandle.delete(handle);
}
function runIfPresent(handle) {
    // From the spec: 'Wait until any invocations of this algorithm started before this one have completed.'
    // So if we're currently running a task, we'll need to delay this invocation.
    if (currentlyRunningATask) {
        // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
        // 'too much recursion' error.
        setTimeout(runIfPresent, 0, handle);
        return;
    }
    const callback = tasksByHandle.get(handle);
    // console.log('stttt', handle, callback);
    if (!callback)
        return;
    currentlyRunningATask = true;
    try {
        callback();
    }
    finally {
        clearImmediateFallback(handle);
        currentlyRunningATask = false;
    }
}
if ((0,_type__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(window.setImmediate)) {
    tasksByHandle = new Map();
    const messagePrefix = 'setImmediate$' + (autoIncrement++).toString(32) + '$';
    window.addEventListener('message', (event) => {
        if (event.source === window && (0,_type__WEBPACK_IMPORTED_MODULE_0__.isString)(event.data) && event.data.startsWith(messagePrefix)) {
            runIfPresent(Number(event.data.slice(messagePrefix.length)));
        }
    }, false);
    registerImmediate = function (handle) {
        window.postMessage(messagePrefix + handle, '*');
    };
}
const setImmediate = window.setImmediate || setImmediateFallback;
const clearImmediate = window.clearImmediate || clearImmediateFallback;
//# sourceMappingURL=setimm.js.map

/***/ }),

/***/ "../../jinge/lib/util/type.js":
/*!************************************!*\
  !*** ../../jinge/lib/util/type.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "typeOf": () => (/* binding */ typeOf),
/* harmony export */   "isObject": () => (/* binding */ isObject),
/* harmony export */   "isString": () => (/* binding */ isString),
/* harmony export */   "isNumber": () => (/* binding */ isNumber),
/* harmony export */   "isUndefined": () => (/* binding */ isUndefined),
/* harmony export */   "isArray": () => (/* binding */ isArray),
/* harmony export */   "isBoolean": () => (/* binding */ isBoolean),
/* harmony export */   "isFunction": () => (/* binding */ isFunction),
/* harmony export */   "isPromise": () => (/* binding */ isPromise)
/* harmony export */ });
function typeOf(v) {
    return typeof v;
}
function isObject(v) {
    return v !== null && typeOf(v) === 'object';
}
function isString(v) {
    return typeOf(v) === 'string';
}
function isNumber(v) {
    return typeOf(v) === 'number' && !Number.isNaN(v) && Number.isFinite(v);
}
function isUndefined(v) {
    return typeOf(v) === 'undefined';
}
function isArray(v) {
    return Array.isArray(v);
}
function isBoolean(v) {
    return typeof v === 'boolean' || v instanceof Boolean;
}
function isFunction(v) {
    return typeOf(v) === 'function';
}
function isPromise(obj) {
    return isObject(obj) && isFunction(obj.then);
}
//# sourceMappingURL=type.js.map

/***/ }),

/***/ "../../jinge/lib/vm/common.js":
/*!************************************!*\
  !*** ../../jinge/lib/vm/common.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$$": () => (/* binding */ $$),
/* harmony export */   "isInnerObj": () => (/* binding */ isInnerObj),
/* harmony export */   "isViewModel": () => (/* binding */ isViewModel),
/* harmony export */   "isPublicProperty": () => (/* binding */ isPublicProperty),
/* harmony export */   "getPropertyName": () => (/* binding */ getPropertyName),
/* harmony export */   "parsePropertyPath": () => (/* binding */ parsePropertyPath),
/* harmony export */   "addParent": () => (/* binding */ addParent),
/* harmony export */   "removeParent": () => (/* binding */ removeParent),
/* harmony export */   "shiftParent": () => (/* binding */ shiftParent)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge/lib/util/index.js");

const $$ = Symbol('$$');
function isInnerObj(v) {
    const clazz = v.constructor;
    return clazz === RegExp || clazz === Date || clazz === Boolean;
}
function isViewModel(v) {
    return (0,_util__WEBPACK_IMPORTED_MODULE_0__.isObject)(v) && $$ in v;
}
function isPublicProperty(v) {
    return (0,_util__WEBPACK_IMPORTED_MODULE_0__.isString)(v) && v.charCodeAt(0) !== 95;
}
/**
 * @internal
 */
function getPropertyName(v) {
    if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isString)(v)) {
        return v;
    }
    if (v === null) {
        return 'null';
    }
    if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(v)) {
        return 'undefined';
    }
    return v.toString();
}
/**
 * @internal
 */
function parsePropertyPath(propertyPath) {
    return (0,_util__WEBPACK_IMPORTED_MODULE_0__.isString)(propertyPath)
        ? propertyPath.indexOf('.') > 0
            ? propertyPath.split('.')
            : [propertyPath]
        : (0,_util__WEBPACK_IMPORTED_MODULE_0__.isArray)(propertyPath)
            ? propertyPath
            : [propertyPath];
}
/**
 * @internal
 */
function addParent(child, parent, property) {
    if (!child.__parents) {
        child.__parents = [];
    }
    child.__parents.push({
        core: parent,
        prop: property,
    });
}
/**
 * @internal
 */
function removeParent(child, parent, property) {
    if (!child.__parents) {
        return;
    }
    const idx = child.__parents.findIndex((item) => {
        return item.core === parent && item.prop === property;
    });
    if (idx >= 0) {
        child.__parents.splice(idx, 1);
    }
}
/**
 * @internal
 */
function shiftParent(child, parent, property, delta) {
    if (!child.__parents)
        return;
    const item = child.__parents.find((it) => {
        return it.core === parent && it.prop === property;
    });
    if (item) {
        item.prop += delta;
    }
}
//# sourceMappingURL=common.js.map

/***/ }),

/***/ "../../jinge/lib/vm/core.js":
/*!**********************************!*\
  !*** ../../jinge/lib/vm/core.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewModelCoreImpl": () => (/* binding */ ViewModelCoreImpl)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge/lib/util/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "../../jinge/lib/vm/common.js");
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node */ "../../jinge/lib/vm/node.js");
/* harmony import */ var _notify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notify */ "../../jinge/lib/vm/notify.js");




class ViewModelCoreImpl {
    /**
     * Don't use the constructor. Use createViewModel instead.
     */
    constructor(target) {
        this.__notifiable = true;
        this.__parents = null;
        this.__listeners = null;
        this.__related = null;
        this.__setters = null;
        this.target = target;
        this.proxy = null;
        Object.defineProperty(target, _common__WEBPACK_IMPORTED_MODULE_1__.$$, {
            value: this,
            writable: false,
            configurable: true,
            enumerable: false,
        });
    }
    __watch(propertyPath, handler, related) {
        propertyPath = (0,_common__WEBPACK_IMPORTED_MODULE_1__.parsePropertyPath)(propertyPath);
        const dbStarIdx = propertyPath.indexOf('**');
        if (dbStarIdx >= 0 && dbStarIdx !== propertyPath.length - 1) {
            /**
             * 'a.b.**' is good.
             * 'a.b.**.c' is bad.
             */
            throw new Error('wizard "**" must be last element in path.');
        }
        const node = (0,_node__WEBPACK_IMPORTED_MODULE_2__.loopCreateNode)(this, propertyPath);
        if (!node.__handlers) {
            node.__handlers = [];
        }
        if (node.__handlers.indexOf(handler) < 0) {
            node.__handlers.push(handler);
        }
        if (related && related !== this) {
            /**
             * If some child of this component is passed as argument(ie.
             * use arg:pass attribute) like ng-tranclude in angular 1.x,
             * the child may contain some messenger listeners not belong to
             * this component but belong to outer parent.
             *
             * When destroy this component, we should also remove messenger listeners
             *   belong to outer parent to prevent memory leak.
             * To implement this goal, we maitain VM_RELATED_LISTENERS.
             * When render view-tree, any messenger listeners belong to outer
             * parent, will be also linked under VM_RELATED_LISTENERS, then
             * when we destroy this component, the listeners can also be clear.
             *
             * For examle:
             *
             * <!-- outer parent: RootApp -->
             * <div>
             * <if expect="show">
             * <Tooltip>
             * <argument arg:pass="default">
             * <p>hello, world. my name is ${name}</p>
             * </argument>
             * </Tooltip>
             * </if>
             * </div>
             *
             * when the `show` variable changed from true to false, the
             * Tooltip component will be destroy. The messenger listener belong
             * to the outer parent RootApp which watch `name` variable should
             * also be removed.
             */
            related.__addRelated(this, propertyPath, handler);
        }
    }
    __unwatch(propertyPath, handler, related) {
        if (!propertyPath) {
            (0,_node__WEBPACK_IMPORTED_MODULE_2__.loopClearNode)(this);
            return;
        }
        const node = (0,_node__WEBPACK_IMPORTED_MODULE_2__.loopGetNode)(this, (0,_common__WEBPACK_IMPORTED_MODULE_1__.parsePropertyPath)(propertyPath));
        if (!node) {
            return;
        }
        const handlers = node.__handlers;
        if (!handlers) {
            return;
        }
        if (!handler) {
            // remove all if second parameter is not provided
            handlers.forEach(_notify__WEBPACK_IMPORTED_MODULE_3__.handleCancel);
            handlers.length = 0;
        }
        else {
            (0,_notify__WEBPACK_IMPORTED_MODULE_3__.handleCancel)(handler);
            (0,_util__WEBPACK_IMPORTED_MODULE_0__.arrayRemove)(handlers, handler);
        }
        (0,_node__WEBPACK_IMPORTED_MODULE_2__.deleteNode)(node);
        if (related && related !== this) {
            related.__rmRelated(this, propertyPath, handler);
        }
    }
    __notify(propertyPath, immediate = false) {
        if (!this.__notifiable) {
            return;
        }
        propertyPath = (0,_common__WEBPACK_IMPORTED_MODULE_1__.parsePropertyPath)(propertyPath);
        if (this.__listeners) {
            (0,_notify__WEBPACK_IMPORTED_MODULE_3__.loopNotify)(this, propertyPath, immediate);
        }
        const parents = this.__parents;
        parents &&
            parents.forEach((ps) => {
                const vm = ps.core;
                if (!vm) {
                    // eslint-disable-next-line no-console
                    console.error('dev-warn-unexpected: parent of ViewModelCore has been destroied but not unlink.');
                    return;
                }
                vm.__notify([ps.prop].concat(propertyPath), immediate);
            });
    }
    __destroy() {
        this.__notifiable = false;
        this.__parents = null;
        // clear listeners
        (0,_node__WEBPACK_IMPORTED_MODULE_2__.loopClearNode)(this);
        // unlink wrapper proxy
        this.proxy = null;
        if (this.__related) {
            this.__related.forEach((hooks, origin) => {
                hooks.forEach((hook) => {
                    origin.__unwatch(hook.prop, hook.handler);
                });
            });
            this.__related = null;
        }
        const target = this.target;
        /*
         * 解除 ViewModel 之间的 VM_PARENTS 关联。
         * 使用 getOwnPropertyNames 可以获取所有属性，但无法获取 setter 函数定义的属性。
         */
        const sfm = this.__setters;
        if (sfm) {
            sfm.forEach((fn, prop) => {
                if (fn === null) {
                    return;
                }
                const v = target[prop];
                if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isObject)(v) || !(_common__WEBPACK_IMPORTED_MODULE_1__.$$ in v)) {
                    return;
                }
                (0,_common__WEBPACK_IMPORTED_MODULE_1__.removeParent)(v[_common__WEBPACK_IMPORTED_MODULE_1__.$$], this, prop);
            });
            this.__setters = null;
        }
        Object.getOwnPropertyNames(target).forEach((prop) => {
            const v = target[prop];
            if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isObject)(v) || !(_common__WEBPACK_IMPORTED_MODULE_1__.$$ in v)) {
                return;
            }
            (0,_common__WEBPACK_IMPORTED_MODULE_1__.removeParent)(v[_common__WEBPACK_IMPORTED_MODULE_1__.$$], this, prop);
        });
        // unlink vm target
        delete target[_common__WEBPACK_IMPORTED_MODULE_1__.$$];
        this.target = null;
    }
    __addRelated(origin, propertyPath, handler) {
        if (!this.__related)
            this.__related = new Map();
        let hook = this.__related.get(origin);
        if (!hook) {
            this.__related.set(origin, (hook = []));
        }
        hook.push({
            prop: propertyPath,
            handler,
        });
    }
    __rmRelated(origin, propertyPath, handler) {
        if (!this.__related)
            return;
        const hook = this.__related.get(origin);
        if (!hook)
            return;
        const isPropArray = (0,_util__WEBPACK_IMPORTED_MODULE_0__.isArray)(propertyPath);
        const i = hook.findIndex((it) => {
            return (handler === it.handler &&
                (isPropArray
                    ? (0,_util__WEBPACK_IMPORTED_MODULE_0__.arrayEqual)(propertyPath, it.prop)
                    : propertyPath === it.prop));
        });
        if (i >= 0) {
            hook.splice(i, 1);
        }
    }
}
//# sourceMappingURL=core.js.map

/***/ }),

/***/ "../../jinge/lib/vm/index.js":
/*!***********************************!*\
  !*** ../../jinge/lib/vm/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$$": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.$$),
/* harmony export */   "addParent": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.addParent),
/* harmony export */   "getPropertyName": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.getPropertyName),
/* harmony export */   "isInnerObj": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.isInnerObj),
/* harmony export */   "isPublicProperty": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.isPublicProperty),
/* harmony export */   "isViewModel": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.isViewModel),
/* harmony export */   "parsePropertyPath": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.parsePropertyPath),
/* harmony export */   "removeParent": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.removeParent),
/* harmony export */   "shiftParent": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.shiftParent),
/* harmony export */   "ViewModelCoreImpl": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.ViewModelCoreImpl),
/* harmony export */   "deleteNode": () => (/* reexport safe */ _node__WEBPACK_IMPORTED_MODULE_2__.deleteNode),
/* harmony export */   "loopClearNode": () => (/* reexport safe */ _node__WEBPACK_IMPORTED_MODULE_2__.loopClearNode),
/* harmony export */   "loopCreateNode": () => (/* reexport safe */ _node__WEBPACK_IMPORTED_MODULE_2__.loopCreateNode),
/* harmony export */   "loopGetNode": () => (/* reexport safe */ _node__WEBPACK_IMPORTED_MODULE_2__.loopGetNode),
/* harmony export */   "handleCancel": () => (/* reexport safe */ _notify__WEBPACK_IMPORTED_MODULE_3__.handleCancel),
/* harmony export */   "handleOnce": () => (/* reexport safe */ _notify__WEBPACK_IMPORTED_MODULE_3__.handleOnce),
/* harmony export */   "loopHandle": () => (/* reexport safe */ _notify__WEBPACK_IMPORTED_MODULE_3__.loopHandle),
/* harmony export */   "loopNotify": () => (/* reexport safe */ _notify__WEBPACK_IMPORTED_MODULE_3__.loopNotify),
/* harmony export */   "createAttributes": () => (/* reexport safe */ _proxy__WEBPACK_IMPORTED_MODULE_4__.createAttributes),
/* harmony export */   "createComponent": () => (/* reexport safe */ _proxy__WEBPACK_IMPORTED_MODULE_4__.createComponent),
/* harmony export */   "createViewModel": () => (/* reexport safe */ _proxy__WEBPACK_IMPORTED_MODULE_4__.createViewModel),
/* harmony export */   "unwatch": () => (/* reexport safe */ _proxy__WEBPACK_IMPORTED_MODULE_4__.unwatch),
/* harmony export */   "vm": () => (/* reexport safe */ _proxy__WEBPACK_IMPORTED_MODULE_4__.vm),
/* harmony export */   "watch": () => (/* reexport safe */ _proxy__WEBPACK_IMPORTED_MODULE_4__.watch)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "../../jinge/lib/vm/common.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "../../jinge/lib/vm/core.js");
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node */ "../../jinge/lib/vm/node.js");
/* harmony import */ var _notify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notify */ "../../jinge/lib/vm/notify.js");
/* harmony import */ var _proxy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./proxy */ "../../jinge/lib/vm/proxy.js");





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge/lib/vm/node.js":
/*!**********************************!*\
  !*** ../../jinge/lib/vm/node.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loopCreateNode": () => (/* binding */ loopCreateNode),
/* harmony export */   "loopGetNode": () => (/* binding */ loopGetNode),
/* harmony export */   "deleteNode": () => (/* binding */ deleteNode),
/* harmony export */   "loopClearNode": () => (/* binding */ loopClearNode)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "../../jinge/lib/vm/common.js");
/* harmony import */ var _notify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notify */ "../../jinge/lib/vm/notify.js");


/**
 * @internal
 */
function loopCreateNode(parentNode, propertyPath, level = 0) {
    const propertyName = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getPropertyName)(propertyPath[level]);
    if (!parentNode.__listeners) {
        parentNode.__listeners = new Map();
    }
    let node = parentNode.__listeners.get(propertyName);
    if (!node) {
        node = {
            __parent: parentNode,
            __property: propertyName,
            __handlers: null,
            __listeners: null,
        };
        parentNode.__listeners.set(propertyName, node);
    }
    if (propertyPath.length - 1 === level) {
        return node;
    }
    else {
        return loopCreateNode(node, propertyPath, level + 1);
    }
}
/**
 * @internal
 */
function loopGetNode(parentNode, propertyPath, level = 0) {
    var _a;
    const propertyName = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getPropertyName)(propertyPath[level]);
    if (!propertyName) {
        return null;
    }
    const node = (_a = parentNode.__listeners) === null || _a === void 0 ? void 0 : _a.get(propertyName);
    if (!node) {
        return null;
    }
    if (propertyPath.length - 1 === level) {
        return node;
    }
    else {
        return loopGetNode(node, propertyPath, level + 1);
    }
}
/**
 * @internal
 */
function deleteNode(node) {
    if ((node && node.__handlers && node.__handlers.length > 0) || (node.__listeners && node.__listeners.size > 0)) {
        return null;
    }
    /**
     * if one node don't have any listener or child, delete it.
     */
    const parent = node.__parent;
    const property = node.__property;
    node.__parent = null; // unlink parent.
    parent.__listeners.delete(property);
    return parent;
}
/**
 * @internal
 */
function loopClearNode(node) {
    const listeners = node.__listeners;
    if (listeners) {
        // loop clear all child nodes
        listeners.forEach((sn) => loopClearNode(sn));
        node.__listeners = null;
    }
    // destroy all handlers
    const handlers = node.__handlers;
    if (handlers) {
        // clear handler waiting to execute
        handlers.forEach(_notify__WEBPACK_IMPORTED_MODULE_1__.handleCancel);
        node.__handlers = null;
    }
    // unlink parent
    node.__parent = null;
}
//# sourceMappingURL=node.js.map

/***/ }),

/***/ "../../jinge/lib/vm/notify.js":
/*!************************************!*\
  !*** ../../jinge/lib/vm/notify.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleCancel": () => (/* binding */ handleCancel),
/* harmony export */   "handleOnce": () => (/* binding */ handleOnce),
/* harmony export */   "loopHandle": () => (/* binding */ loopHandle),
/* harmony export */   "loopNotify": () => (/* binding */ loopNotify)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge/lib/util/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "../../jinge/lib/vm/common.js");


const handleTasks = new Map();
/**
 * @internal
 */
function handleCancel(handler) {
    const t = handleTasks.get(handler);
    if (t) {
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.clearImmediate)(t.immediate);
        handleTasks.delete(handler);
    }
}
/**
 * @internal
 */
function handleOnce(handler, propertyPath) {
    if (handleTasks.has(handler)) {
        return;
    }
    const imm = (0,_util__WEBPACK_IMPORTED_MODULE_0__.setImmediate)(() => {
        const arg = handleTasks.get(handler);
        try {
            handler(arg.propertyPath);
        }
        finally {
            handleTasks.delete(handler);
        }
    });
    handleTasks.set(handler, {
        immediate: imm,
        propertyPath: propertyPath,
    });
}
/**
 * @internal
 */
function loopHandle(propertyPath, node, immediate) {
    const handlers = node.__handlers;
    handlers &&
        handlers.forEach((handler) => {
            if (immediate) {
                handler(propertyPath);
            }
            else {
                handleOnce(handler, propertyPath);
            }
        });
    const listeners = node.__listeners;
    listeners &&
        listeners.forEach((c) => {
            loopHandle(propertyPath, c, immediate);
        });
}
/**
 * @internal
 */
function loopNotify(vm, propertyPath, immediate, level = 0) {
    const listeners = vm.__listeners;
    if (!listeners) {
        return;
    }
    const propertyName = (0,_common__WEBPACK_IMPORTED_MODULE_1__.getPropertyName)(propertyPath[level]);
    if (!propertyName) {
        return;
    }
    let node = listeners.get(propertyName);
    if (node) {
        if (propertyPath.length - 1 === level) {
            // loopHandle(props, node, config[CFG_VM_DEBUG] ? null : imms);
            loopHandle(propertyPath, node, immediate);
        }
        else {
            loopNotify(node, propertyPath, immediate, level + 1);
        }
    }
    node = listeners.get('*');
    if (node) {
        if (propertyPath.length - 1 === level) {
            loopHandle(propertyPath, node, true);
        }
        else {
            loopNotify(node, propertyPath, immediate, level + 1);
        }
    }
    node = listeners.get('**');
    if (node) {
        loopHandle(propertyPath, node, true);
    }
}
//# sourceMappingURL=notify.js.map

/***/ }),

/***/ "../../jinge/lib/vm/proxy.js":
/*!***********************************!*\
  !*** ../../jinge/lib/vm/proxy.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createViewModel": () => (/* binding */ createViewModel),
/* harmony export */   "createAttributes": () => (/* binding */ createAttributes),
/* harmony export */   "createComponent": () => (/* binding */ createComponent),
/* harmony export */   "vm": () => (/* binding */ vm),
/* harmony export */   "watch": () => (/* binding */ watch),
/* harmony export */   "unwatch": () => (/* binding */ unwatch)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge/lib/util/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "../../jinge/lib/vm/common.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core */ "../../jinge/lib/vm/core.js");



/**
 * check if property named "prop" is setter of instance "obj",
 * if it's setter, return setter function, otherwise return null.
 * @param {Object} obj
 * @param {String} prop
 *
 * 检测名称为 "prop" 的属性是否是 setter，如果是，返回该 setter 函数，
 * 否则，返回 null。
 * 由于 obj 可能是有继承关系的类的实例，因此需要向上检测继承的类的 prototype。
 */
function getSetterFnIfPropIsSetter(obj, prop) {
    let map = obj[_common__WEBPACK_IMPORTED_MODULE_1__.$$].__setters;
    if (!map) {
        obj[_common__WEBPACK_IMPORTED_MODULE_1__.$$].__setters = map = new Map();
    }
    if (!map.has(prop)) {
        let clazz = obj.constructor;
        let desc = Object.getOwnPropertyDescriptor(clazz.prototype, prop);
        let fn;
        if (desc) {
            fn = (0,_util__WEBPACK_IMPORTED_MODULE_0__.isFunction)(desc.set) ? desc.set : null;
            map.set(prop, fn);
            return fn;
        }
        // lookup to check parent classes
        clazz = Object.getPrototypeOf(clazz);
        while (clazz && clazz.prototype) {
            desc = Object.getOwnPropertyDescriptor(clazz.prototype, prop);
            if (desc) {
                fn = (0,_util__WEBPACK_IMPORTED_MODULE_0__.isFunction)(desc.set) ? desc.set : null;
                map.set(prop, fn);
                return fn;
            }
            clazz = Object.getPrototypeOf(clazz);
        }
        map.set(prop, null);
        return null;
    }
    else {
        return map.get(prop);
    }
}
function notifyPropChanged(vm, prop) {
    vm[_common__WEBPACK_IMPORTED_MODULE_1__.$$].__notify(prop);
}
function __propSetHandler(target, prop, value, setFn, assertVM = true) {
    if (!(0,_common__WEBPACK_IMPORTED_MODULE_1__.isPublicProperty)(prop)) {
        /**
         * 如果不强制转成 string，typescript 会报：Type 'symbol' cannot be used as an index type
         */
        target[prop] = value;
        return true;
    }
    const oldVal = target[prop];
    if (oldVal === value && !(0,_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(value)) {
        return true;
    }
    let newValIsVM = (0,_util__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) && !(0,_common__WEBPACK_IMPORTED_MODULE_1__.isInnerObj)(value);
    if (newValIsVM) {
        newValIsVM = _common__WEBPACK_IMPORTED_MODULE_1__.$$ in value;
        if (assertVM && !newValIsVM) {
            throw new Error(`public property "${prop.toString()}" of ViewModel must also be ViewModel`);
        }
    }
    // console.log(`'${prop}' changed from ${store[prop]} to ${value}`);
    if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isObject)(oldVal) && _common__WEBPACK_IMPORTED_MODULE_1__.$$ in oldVal) {
        (0,_common__WEBPACK_IMPORTED_MODULE_1__.removeParent)(oldVal[_common__WEBPACK_IMPORTED_MODULE_1__.$$], target[_common__WEBPACK_IMPORTED_MODULE_1__.$$], prop);
    }
    setFn(target, prop, value);
    if (newValIsVM) {
        (0,_common__WEBPACK_IMPORTED_MODULE_1__.addParent)(value[_common__WEBPACK_IMPORTED_MODULE_1__.$$], target[_common__WEBPACK_IMPORTED_MODULE_1__.$$], prop);
    }
    notifyPropChanged(target, prop);
    return true;
}
function __objectPropSetFn(target, prop, value) {
    target[prop] = value;
}
function __componentPropSetFn(target, prop, value) {
    /**
     * we must ensure `this` in setter function to be `Proxy`
     *
     * 首先判断当前赋值的变量名，是否对应了一个 setter 函数，
     * 如果是 setter 函数，则应该显式地调用，
     *   并将 `this` 设置为该 target 的包装 Proxy，
     *   这样才能保正 setter 函数中其它赋值语句能触发 notify。
     * 如果不是 setter 函数，则简单地使用 target\[prop\] 赋值即可。
     */
    const setterFn = getSetterFnIfPropIsSetter(target, prop);
    if (setterFn) {
        setterFn.call(target[_common__WEBPACK_IMPORTED_MODULE_1__.$$].proxy, value);
    }
    else {
        target[prop] = value;
    }
}
function objectPropSetHandler(target, prop, value) {
    if (!(_common__WEBPACK_IMPORTED_MODULE_1__.$$ in target)) {
        // ViewModel has been destroied.
        return true;
    }
    return __propSetHandler(target, prop, value, __objectPropSetFn);
}
function attrsPropSetHandler(target, prop, value) {
    if (!(_common__WEBPACK_IMPORTED_MODULE_1__.$$ in target)) {
        // ViewModel has been destroied.
        return true;
    }
    return __propSetHandler(target, prop, value, __objectPropSetFn, false);
}
function componentPropSetHandler(target, prop, value) {
    if (!(_common__WEBPACK_IMPORTED_MODULE_1__.$$ in target)) {
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.warn)(`call setter "${prop.toString()}" after destroied, resources such as setInterval maybe not released before destroy. component:`, target);
        return true;
    }
    return __propSetHandler(target, prop, value, __componentPropSetFn);
}
function arrayNotifyItems(target, idxStart, idxEnd) {
    let i = idxStart;
    if (idxStart > idxEnd) {
        i = idxEnd;
        idxEnd = idxStart;
    }
    for (; i < idxEnd; i++) {
        // console.log('npc', i);
        notifyPropChanged(target, i);
    }
}
function arrayLengthSetHandler(target, value) {
    if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isNumber)(value)) {
        throw new Error('bad argument. array length must be validate number.');
    }
    const oldLen = target.length;
    if (oldLen > value) {
        for (let i = value; i < oldLen; i++) {
            const v = target[i];
            if ((0,_common__WEBPACK_IMPORTED_MODULE_1__.isViewModel)(v)) {
                (0,_common__WEBPACK_IMPORTED_MODULE_1__.removeParent)(v[_common__WEBPACK_IMPORTED_MODULE_1__.$$], target[_common__WEBPACK_IMPORTED_MODULE_1__.$$], i);
            }
        }
    }
    target.length = value;
    // console.log('set .length from', oldLen, 'to', value);
    if (oldLen !== value) {
        notifyPropChanged(target, 'length');
        arrayNotifyItems(target, oldLen, value);
    }
    return true;
}
function arrayPropSetHandler(target, prop, value) {
    if (!(_common__WEBPACK_IMPORTED_MODULE_1__.$$ in target)) {
        return true;
    }
    if (prop === 'length') {
        return arrayLengthSetHandler(target, value);
    }
    /**
     * 即便是 arr[0] 这样的取值，在 Proxy 的 set 里面，传递的 property 也是 string 类型，即 "0"。
     * 因此，对数组也使用和对象一致的 objectPropSetHandler 来处理。
     */
    return __propSetHandler(target, prop, value, __objectPropSetFn);
}
const ObjectProxyHandler = {
    set: objectPropSetHandler,
};
const PromiseProxyHandler = {
    get(target, prop) {
        if (prop === 'then' || prop === 'catch') {
            const v = target[prop];
            return function (...args) {
                return v.call(target, ...args);
            };
        }
        else {
            return target[prop];
        }
    },
    set: objectPropSetHandler,
};
function _arrayReverseSort(target, fn, arg) {
    target.forEach((it, i) => {
        if ((0,_common__WEBPACK_IMPORTED_MODULE_1__.isViewModel)(it)) {
            (0,_common__WEBPACK_IMPORTED_MODULE_1__.addParent)(it[_common__WEBPACK_IMPORTED_MODULE_1__.$$], target[_common__WEBPACK_IMPORTED_MODULE_1__.$$], i);
        }
    });
    target[fn](arg);
    target.forEach((it, i) => {
        if ((0,_common__WEBPACK_IMPORTED_MODULE_1__.isViewModel)(it)) {
            (0,_common__WEBPACK_IMPORTED_MODULE_1__.removeParent)(it[_common__WEBPACK_IMPORTED_MODULE_1__.$$], target[_common__WEBPACK_IMPORTED_MODULE_1__.$$], i);
        }
    });
    arrayNotifyItems(target, 0, target.length);
    // return wrapper proxy to ensure `arr.reverse() === arr`
    return target[_common__WEBPACK_IMPORTED_MODULE_1__.$$].proxy;
}
function wrapSubArray(arr, wrapEachItem = false) {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    const rtn = wrapProxy(arr, true);
    // handleVMDebug(arr);
    arr.forEach((it, i) => {
        if ((0,_common__WEBPACK_IMPORTED_MODULE_1__.isViewModel)(it)) {
            (0,_common__WEBPACK_IMPORTED_MODULE_1__.addParent)(it[_common__WEBPACK_IMPORTED_MODULE_1__.$$], arr[_common__WEBPACK_IMPORTED_MODULE_1__.$$], i);
        }
        else if (wrapEachItem) {
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            arr[i] = createViewModel(it);
        }
    });
    return rtn;
}
function _arrayShiftOrUnshiftProp(arr, delta) {
    arr.forEach((el, i) => {
        if (!(0,_common__WEBPACK_IMPORTED_MODULE_1__.isViewModel)(el))
            return;
        (0,_common__WEBPACK_IMPORTED_MODULE_1__.shiftParent)(el[_common__WEBPACK_IMPORTED_MODULE_1__.$$], arr[_common__WEBPACK_IMPORTED_MODULE_1__.$$], i, delta);
    });
}
function _argAssert(arg, fn) {
    if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isObject)(arg)) {
        if (!(_common__WEBPACK_IMPORTED_MODULE_1__.$$ in arg)) {
            throw new Error(`argument passed to Array.${fn} must be ViewModel if the array is ViewModel`);
        }
        else {
            return true;
        }
    }
    else {
        return false;
    }
}
const ArrayFns = {
    splice(target, idx, delCount, ...args) {
        if (idx < 0)
            idx = 0;
        args.forEach((arg, i) => {
            if (_argAssert(arg, 'splice')) {
                (0,_common__WEBPACK_IMPORTED_MODULE_1__.addParent)(arg[_common__WEBPACK_IMPORTED_MODULE_1__.$$], target[_common__WEBPACK_IMPORTED_MODULE_1__.$$], idx + i);
            }
        });
        for (let i = 0; i < delCount; i++) {
            if (idx + i >= target.length)
                break;
            const el = target[idx + i];
            if ((0,_common__WEBPACK_IMPORTED_MODULE_1__.isViewModel)(el)) {
                (0,_common__WEBPACK_IMPORTED_MODULE_1__.removeParent)(el[_common__WEBPACK_IMPORTED_MODULE_1__.$$], target[_common__WEBPACK_IMPORTED_MODULE_1__.$$], idx + i);
            }
        }
        const delta = args.length - delCount;
        if (delta !== 0) {
            for (let i = idx + delCount; i < target.length; i++) {
                const el = target[i];
                if (!(0,_common__WEBPACK_IMPORTED_MODULE_1__.isViewModel)(el)) {
                    continue;
                }
                (0,_common__WEBPACK_IMPORTED_MODULE_1__.shiftParent)(el[_common__WEBPACK_IMPORTED_MODULE_1__.$$], target[_common__WEBPACK_IMPORTED_MODULE_1__.$$], i, delta);
            }
        }
        const rtn = wrapSubArray(target.splice(idx, delCount, ...args));
        if (delta !== 0) {
            notifyPropChanged(target, 'length');
            for (let i = idx; i < target.length; i++) {
                notifyPropChanged(target, i);
            }
        }
        return rtn;
    },
    shift(target) {
        if (target.length === 0)
            return target.shift();
        _arrayShiftOrUnshiftProp(target, -1);
        const el = target.shift();
        if ((0,_common__WEBPACK_IMPORTED_MODULE_1__.isViewModel)(el)) {
            (0,_common__WEBPACK_IMPORTED_MODULE_1__.removeParent)(el[_common__WEBPACK_IMPORTED_MODULE_1__.$$], target[_common__WEBPACK_IMPORTED_MODULE_1__.$$], -1);
        }
        notifyPropChanged(target, 'length');
        for (let i = 0; i < target.length + 1; i++) {
            notifyPropChanged(target, i);
        }
        return el;
    },
    unshift(target, ...args) {
        if (args.length === 0)
            return target.unshift();
        args.forEach((arg, i) => {
            if (_argAssert(arg, 'unshift')) {
                (0,_common__WEBPACK_IMPORTED_MODULE_1__.addParent)(arg[_common__WEBPACK_IMPORTED_MODULE_1__.$$], target[_common__WEBPACK_IMPORTED_MODULE_1__.$$], i);
            }
        });
        _arrayShiftOrUnshiftProp(target, args.length);
        const rtn = target.unshift(...args);
        notifyPropChanged(target, 'length');
        for (let i = 0; i < target.length; i++) {
            notifyPropChanged(target, i);
        }
        return rtn;
    },
    pop(target) {
        if (target.length === 0) {
            return target.pop();
        }
        const el = target.pop();
        if ((0,_common__WEBPACK_IMPORTED_MODULE_1__.isViewModel)(el)) {
            (0,_common__WEBPACK_IMPORTED_MODULE_1__.removeParent)(el[_common__WEBPACK_IMPORTED_MODULE_1__.$$], target[_common__WEBPACK_IMPORTED_MODULE_1__.$$], target.length);
        }
        notifyPropChanged(target, 'length');
        notifyPropChanged(target, target.length);
        return el;
    },
    push(target, ...args) {
        if (args.length === 0)
            return target.push();
        args.forEach((arg, i) => {
            if (_argAssert(arg, 'push')) {
                (0,_common__WEBPACK_IMPORTED_MODULE_1__.addParent)(arg[_common__WEBPACK_IMPORTED_MODULE_1__.$$], target[_common__WEBPACK_IMPORTED_MODULE_1__.$$], target.length + i);
            }
        });
        const rtn = target.push(...args);
        notifyPropChanged(target, 'length');
        for (let i = target.length - 1 - args.length; i < target.length; i++) {
            notifyPropChanged(target, i);
        }
        return rtn;
    },
    fill(target, v) {
        _argAssert(v, 'fill');
        target.forEach((it, i) => {
            if (it === v && !(0,_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(it)) {
                return;
            }
            if ((0,_common__WEBPACK_IMPORTED_MODULE_1__.isViewModel)(it)) {
                (0,_common__WEBPACK_IMPORTED_MODULE_1__.removeParent)(it[_common__WEBPACK_IMPORTED_MODULE_1__.$$], target[_common__WEBPACK_IMPORTED_MODULE_1__.$$], i);
            }
            target[i] = v;
            if ((0,_common__WEBPACK_IMPORTED_MODULE_1__.isViewModel)(v)) {
                (0,_common__WEBPACK_IMPORTED_MODULE_1__.addParent)(v[_common__WEBPACK_IMPORTED_MODULE_1__.$$], target[_common__WEBPACK_IMPORTED_MODULE_1__.$$], i);
            }
            notifyPropChanged(target, i);
        });
        return target[_common__WEBPACK_IMPORTED_MODULE_1__.$$].proxy;
    },
    reverse(target) {
        return _arrayReverseSort(target, 'reverse');
    },
    sort(target, fn) {
        return _arrayReverseSort(target, 'sort', fn);
    },
    concat(target, arr) {
        _argAssert(arr, 'concat');
        return wrapSubArray(target.concat(arr));
    },
    filter(target, fn) {
        return wrapSubArray(target.filter(fn));
    },
    slice(target, si, ei) {
        return wrapSubArray(target.slice(si, ei));
    },
    map(target, fn) {
        return wrapSubArray(target.map(fn), true);
    },
};
const ArrayProxyHandler = {
    get(target, prop) {
        if (prop in ArrayFns) {
            const fn = ArrayFns[prop];
            return function (...args) {
                return fn(target, ...args);
            };
        }
        else {
            return target[prop];
        }
    },
    set: arrayPropSetHandler,
};
function wrapProxy(target, isArr) {
    const vmCore = new _core__WEBPACK_IMPORTED_MODULE_2__.ViewModelCoreImpl(target);
    // eslint-disable-next-line @typescript-eslint/ban-types
    return (vmCore.proxy = new Proxy(target, isArr ? ArrayProxyHandler : (0,_util__WEBPACK_IMPORTED_MODULE_0__.isPromise)(target) ? PromiseProxyHandler : ObjectProxyHandler));
}
function wrapProp(parent, child, property) {
    // const v = vm[property];
    if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isObject)(child) || (0,_common__WEBPACK_IMPORTED_MODULE_1__.isInnerObj)(child)) {
        return;
    }
    if (!(_common__WEBPACK_IMPORTED_MODULE_1__.$$ in child)) {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        parent[property] = child = createViewModel(child);
    }
    (0,_common__WEBPACK_IMPORTED_MODULE_1__.addParent)(child[_common__WEBPACK_IMPORTED_MODULE_1__.$$], parent[_common__WEBPACK_IMPORTED_MODULE_1__.$$], property);
}
/**
 * @internal
 */
function createViewModel(target) {
    if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isObject)(target)) {
        // directly return if alreay is ViewModel or inner object(Date/RegExp/Boolean).
        if ((0,_common__WEBPACK_IMPORTED_MODULE_1__.isInnerObj)(target) || _common__WEBPACK_IMPORTED_MODULE_1__.$$ in target) {
            return target;
        }
        const isArr = (0,_util__WEBPACK_IMPORTED_MODULE_0__.isArray)(target);
        const rtn = wrapProxy(target, isArr);
        if (isArr) {
            for (let i = 0; i < target.length; i++) {
                wrapProp(target, target[i], i);
            }
        }
        else {
            for (const k in target) {
                if ((0,_common__WEBPACK_IMPORTED_MODULE_1__.isPublicProperty)(k)) {
                    wrapProp(target, target[k], k);
                }
            }
        }
        return rtn;
    }
    else {
        return target;
    }
}
/**
 * @internal
 */
function createAttributes(attributes) {
    const vmCore = new _core__WEBPACK_IMPORTED_MODULE_2__.ViewModelCoreImpl(attributes);
    // 初始化时默认的 notifiable 为 false，
    // 待 RENDER 结束后才修改为 true，用于避免无谓的消息通知。
    vmCore.__notifiable = false;
    // eslint-disable-next-line @typescript-eslint/ban-types
    return (vmCore.proxy = new Proxy(attributes, {
        set: attrsPropSetHandler,
    }));
}
// function handleVMDebug(vm) {
//   if (!config[CFG_VM_DEBUG]) {
//     return;
//   }
//   let _di = window._VM_DEBUG;
//   if (!_di) {
//     _di = window._VM_DEBUG = {
//       id: 0, vms: []
//     };
//   }
//   vm[VM_DEBUG_ID] = _di.id++;
//   // if (isComponent(vm) && !(VM_DEBUG_NAME in vm)) {
//   //   vm[VM_DEBUG_NAME] = `<${vm.constructor.name}>`;
//   // }
//   _di.vms.push(vm);
// }
/**
 * @internal
 */
function createComponent(component) {
    if (_common__WEBPACK_IMPORTED_MODULE_1__.$$ in component) {
        throw new Error('component has alreay been wrapped.');
    }
    // handleVMDebug(component);
    const vmCore = new _core__WEBPACK_IMPORTED_MODULE_2__.ViewModelCoreImpl(component);
    // 初始化时 Component 默认的 VM_NOTIFIABLE 为 false，
    // 待 RENDER 结束后才修改为 true，用于避免无谓的消息通知。
    vmCore.__notifiable = false;
    // eslint-disable-next-line @typescript-eslint/ban-types
    return (vmCore.proxy = new Proxy(component, {
        set: componentPropSetHandler,
    }));
}
function vm(target) {
    if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isObject)(target)) {
        throw new Error('vm() target must be object or array.');
    }
    return createViewModel(target);
}
function watch(vm, propertyPath, handler) {
    vm[_common__WEBPACK_IMPORTED_MODULE_1__.$$].__watch(propertyPath, handler);
}
function unwatch(vm, propertyPath, handler) {
    vm[_common__WEBPACK_IMPORTED_MODULE_1__.$$].__unwatch(propertyPath, handler);
}
//# sourceMappingURL=proxy.js.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge/lib/index.js");
/* harmony import */ var _app_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.html */ "./app.html");




class App extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  static get template() {
    return _app_html__WEBPACK_IMPORTED_MODULE_1__["default"];
  }
  constructor(args) {
    super(args);
    const __vm_792732ac1261 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    __vm_792732ac1261.n = Math.random() * 10 | 0;
    setInterval(() => {
      __vm_792732ac1261.n = Math.random() * 10 | 0;
      console.log(__vm_792732ac1261.n);
    }, 1000);
  }
  log(...args) {
    console.log(...args);
  }
}

(0,jinge__WEBPACK_IMPORTED_MODULE_0__.bootstrap)(App, document.getElementById('root-app'));

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map