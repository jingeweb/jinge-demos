/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app.c.js":
/*!******************!*\
  !*** ./app.c.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/index.js");
/* harmony import */ var _app_c_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.c.html */ "./app.c.html");




class App extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  static get template() {
    return _app_c_html__WEBPACK_IMPORTED_MODULE_1__["default"];
  }
  constructor(args) {
    super(args);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    _jg0.data = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)({
      t: 'hello',
      t2: 'hello\njinge',
      t3: true,
      t4: [],
      t5: 'Banana',
      t6: '',
      t7: []
    });
    _jg0.fruits5 = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)(['Apple', 'Orange', 'Banana']);
    _jg0.fruits4 = _jg0.fruits5.map(f => ({name: f, selected: false}));

    _jg0.output = JSON.stringify(_jg0.data, null, 2);
    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.watch)(_jg0, 'data.**', (p) => {
      _jg0.__updateIfNeed();
    });
  }
  log(...args) {
    console.log(...args);
  }
  add(f) {
    console.log('add', f);
    this.data.t4.push(f);
  }
  del(f) {
    const i = this.data.t4.indexOf(f);
    if (i >= 0) this.data.t4.splice(i, 1);
  }
  onMultiSelectChange($select) {
    this.data.t7 = this.data.t4 = this.fruits4.filter((f, i) => {
      return (f.selected = $select.children[i].selected);
    }).map(f => f.name);
  }
  __update() {
    this.output = JSON.stringify(this.data, null, 2);
  }
  test() {
    this.data.t2 = this.data.t = "hello";
    this.data.t6 = this.fruits5[2];
  }
}


/***/ }),

/***/ "./app.c.html":
/*!********************!*\
  !*** ./app.c.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/index.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
      "h2",
      `Form Input`
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })(),
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
      "div",
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
        "form",
        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
          "p",
          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
            "label",
            {
              for: `t`
            },
            `TEXTx:`
          ),
          (() => {
            const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
              "input",
              {
                id: `t`,
                placeholder: `input 1`
              },
            );
            const fn_0 = () => {
              el.value = vm_0.data?.t;
            };
            fn_0();
            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["data","t"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
            (0,jinge__WEBPACK_IMPORTED_MODULE_0__.addEvent)(el, 'input', function(...args) {
              vm_0.data.t = args[0].target.value
            });
            return el;
          })()
        ),
        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
          "p",
          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
            "label",
            {
              for: `t2`
            },
            `TEXTAREA:`
          ),
          (() => {
            const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
              "textarea",
              {
                id: `t2`
              },
            );
            const fn_0 = () => {
              (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setAttribute)(el, "value", vm_0.data?.t2);
            };
            fn_0();
            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["data","t2"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
            const fn_1 = () => {
              (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setAttribute)(el, "placeholder", `input ${vm_0.data?.t}`);
            };
            fn_1();
            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["data","t"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
            (0,jinge__WEBPACK_IMPORTED_MODULE_0__.addEvent)(el, 'input', function(...args) {
              vm_0.data.t2 = args[0].target.value
            });
            return el;
          })()
        ),
        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
          "p",
          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
            "label",
            `CHECKBOX:`
          ),
          (() => {
            const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
              "input",
              {
                id: `t3`,
                type: `checkbox`
              },
            );
            const fn_0 = () => {
              el.checked = !!(vm_0.data?.t3);
            };
            fn_0();
            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["data","t3"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
            (0,jinge__WEBPACK_IMPORTED_MODULE_0__.addEvent)(el, 'change', function(...args) {
              vm_0.data.t3 = args[0].target.checked
            });
            return el;
          })(),
          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
            "label",
            {
              for: `t3`
            },
            (() => {
              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createTextNode)();
              const fn_0 = () => {
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setText)(el, `Click here to check: ${vm_0.data?.t3}`);
              };
              fn_0();
              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["data","t3"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
              return el;
            })()
          )
        ),
        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
          "p",
          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
            "label",
            `MULTI CHECK:`
          ),
          ...(() => {
            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                debugName: "attrs_of_<for>",
                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                slots: {
                  'default': function(component) {
                    const vm_1 = component;
                    return [
                    (() => {
                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                        "label",
                        (() => {
                          const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                            "input",
                            {
                              name: `t4`,
                              type: `checkbox`
                            },
                          );
                          const fn_0 = () => {
                            el.checked = !!(vm_1.each?.selected);
                          };
                          fn_0();
                          vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["each","selected"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.addEvent)(el, 'change', function(...args) {
                            (vm_1.each.selected = args[0].target.checked) ? vm_0.add(vm_1.each.name) : vm_0.del(vm_1.each.name)
                          });
                          return el;
                        })(),
                        (() => {
                          const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createTextNode)();
                          const fn_0 = () => {
                            (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setText)(el, `${vm_1.each?.name}`);
                          };
                          fn_0();
                          vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["each","name"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                          return el;
                        })()
                      );
                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                      return el;
                    })()
                    ];
                  }
                }
              },
              loop: null
            });
            const fn_0 = () => {
              attrs.loop = vm_0.fruits4;
            };
            fn_0();
            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["fruits4"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
            const el = jinge__WEBPACK_IMPORTED_MODULE_0__.ForComponent.create(attrs);
            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
          })()
        ),
        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
          "p",
          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
            "label",
            `RADIO:`
          ),
          ...(() => {
            const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
              [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                debugName: "attrs_of_<for>",
                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                slots: {
                  'default': function(component) {
                    const vm_1 = component;
                    return [
                    (() => {
                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                        "label",
                        (() => {
                          const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                            "input",
                            {
                              name: `t5`,
                              type: `radio`
                            },
                          );
                          const fn_0 = () => {
                            el.checked = !!(vm_1.each === vm_0.data?.t5);
                          };
                          fn_0();
                          vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["each"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                          vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["data","t5"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.addEvent)(el, 'click', function(...args) {
                            vm_0.data.t5 = vm_1.each
                          });
                          return el;
                        })(),
                        (() => {
                          const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createTextNode)();
                          const fn_0 = () => {
                            (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setText)(el, `${vm_1.each}`);
                          };
                          fn_0();
                          vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["each"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                          return el;
                        })()
                      );
                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                      return el;
                    })()
                    ];
                  }
                }
              },
              loop: null
            });
            const fn_0 = () => {
              attrs.loop = vm_0.fruits5;
            };
            fn_0();
            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["fruits5"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
            const el = jinge__WEBPACK_IMPORTED_MODULE_0__.ForComponent.create(attrs);
            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
            return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
          })()
        ),
        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
          "p",
          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
            "label",
            `SELECT:`
          ),
          (() => {
            const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
              "select",
              (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                "option",
                {
                  disabled: true,
                  value: true
                },
                `Please select one`
              ),
              ...(() => {
                const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                  [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                    debugName: "attrs_of_<for>",
                    context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                    slots: {
                      'default': function(component) {
                        const vm_1 = component;
                        return [
                        (() => {
                          const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                            "option",
                            (() => {
                              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createTextNode)();
                              const fn_0 = () => {
                                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setText)(el, `${vm_1.each}`);
                              };
                              fn_0();
                              vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["each"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                              return el;
                            })()
                          );
                          const fn_0 = () => {
                            el.value = `${vm_1.each}`;
                          };
                          fn_0();
                          vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["each"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                          component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                          return el;
                        })()
                        ];
                      }
                    }
                  },
                  loop: null
                });
                const fn_0 = () => {
                  attrs.loop = vm_0.fruits5;
                };
                fn_0();
                vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["fruits5"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                const el = jinge__WEBPACK_IMPORTED_MODULE_0__.ForComponent.create(attrs);
                component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
              })()
            );
            const fn_0 = () => {
              el.value = vm_0.data?.t6;
            };
            fn_0();
            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["data","t6"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
            (0,jinge__WEBPACK_IMPORTED_MODULE_0__.addEvent)(el, 'change', function(...args) {
              vm_0.data.t6 = args[0].target.value
            });
            return el;
          })()
        ),
        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
          "p",
          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
            "label",
            `MULTI SELECT:`
          ),
          (() => {
            const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
              "select",
              {
                multiple: true
              },
              ...(() => {
                const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                  [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                    debugName: "attrs_of_<for>",
                    context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                    slots: {
                      'default': function(component) {
                        const vm_1 = component;
                        return [
                        (() => {
                          const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                            "option",
                            (() => {
                              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createTextNode)();
                              const fn_0 = () => {
                                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setText)(el, `${vm_1.each?.name}:${vm_1.each?.selected}`);
                              };
                              fn_0();
                              vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["each","name"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                              vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["each","selected"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                              return el;
                            })()
                          );
                          const fn_0 = () => {
                            el.value = `${vm_1.each?.name}`;
                          };
                          fn_0();
                          vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["each","name"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                          const fn_1 = () => {
                            el.selected = !!(vm_1.each?.selected);
                          };
                          fn_1();
                          vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["each","selected"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                          component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                          return el;
                        })()
                        ];
                      }
                    }
                  },
                  loop: null
                });
                const fn_0 = () => {
                  attrs.loop = vm_0.fruits4;
                };
                fn_0();
                vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["fruits4"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                const el = jinge__WEBPACK_IMPORTED_MODULE_0__.ForComponent.create(attrs);
                component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                return (0,jinge__WEBPACK_IMPORTED_MODULE_0__.assertRenderResults)(el.__render());
              })()
            );
            (0,jinge__WEBPACK_IMPORTED_MODULE_0__.addEvent)(el, 'change', function(...args) {
              vm_0.onMultiSelectChange(args[0].target)
            });
            return el;
          })()
        )
      )
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })(),
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
      "h4",
      `Input Form Data:`
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })(),
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
      "pre",
      (() => {
        const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createTextNode)();
        const fn_0 = () => {
          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setText)(el, `${vm_0.output}`);
        };
        fn_0();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["output"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        return el;
      })()
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })(),
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
      "p",
      (() => {
        const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
          "button",
          `Test`
        );
        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.addEvent)(el, 'click', function(...args) {
          vm_0.test(...args);
        });
        return el;
      })()
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ }),

/***/ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/components/class.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/components/class.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToggleClassComponent": () => (/* binding */ ToggleClassComponent)
/* harmony export */ });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/vm/common.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/component */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/core/component.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/util/index.js");
/* harmony import */ var _core_transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/transition */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/core/transition.js");




function loopOperateClass(el, isAddOperate, domClass) {
  if ((0,_core_component__WEBPACK_IMPORTED_MODULE_1__.isComponent)(el)) {
    el[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes.forEach((ce) => loopOperateClass(ce, isAddOperate, domClass));
  } else if (isAddOperate) {
    el.classList.add(domClass);
  } else {
    el.classList.remove(domClass);
  }
}
class ToggleClassComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(attrs) {
    if (!attrs || !(0,_util__WEBPACK_IMPORTED_MODULE_2__.isObject)(attrs.class)) {
      throw new Error('<toggle-class> component require "class" attribute to be Object.');
    }
    super(attrs);const _jg0 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;const f2_jg0402 = () => {
    _jg0.domClass = attrs.class; }; f2_jg0402(); attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("class", f2_jg0402);const f3_jg0402 = () => {
    _jg0.transition = !!attrs.transition; }; f3_jg0402(); attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("transition", f3_jg0402);
    _jg0._t = null;
    _jg0._i = -1;
    _jg0[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("domClass.**", () => {
      _jg0.__updateIfNeed();
    });
  }
  __render() {
    const rr = super.__render();
    this.__update(true);
    return rr;
  }
  __beforeDestroy() {
    this._t = null;
  }
  __update(first) {
    const el = this.transition ? this.__transitionDOM : null;
    if (el && el.nodeType !== Node.ELEMENT_NODE) {
      return;
    }
    if (this.transition && !this._t) {
      this._t = /* @__PURE__ */ new Map();
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
          null
        ]);
        if (v) {
          el.classList.add(k);
        } else {
          el.classList.remove(k);
        }
        return;
      }
      const t = this._t.get(k);
      if (!t) {
        console.error("Unsupport <toogle-class> attribute. see https://todo");
        return;
      }
      const s = t[0];
      if (v && s <= _core_transition__WEBPACK_IMPORTED_MODULE_3__.TransitionStates.ENTERED || !v && s >= _core_transition__WEBPACK_IMPORTED_MODULE_3__.TransitionStates.LEAVING) {
        return;
      }
      if (s === (v ? _core_transition__WEBPACK_IMPORTED_MODULE_3__.TransitionStates.LEAVING : _core_transition__WEBPACK_IMPORTED_MODULE_3__.TransitionStates.ENTERING)) {
        el.classList.remove(k + (v ? "-leave-active" : "-enter-active"));
        el.classList.remove(k + (v ? "-leave" : "-enter"));
        (0,_util__WEBPACK_IMPORTED_MODULE_2__.removeEvent)(el, "transitionend", t[1]);
        (0,_util__WEBPACK_IMPORTED_MODULE_2__.removeEvent)(el, "animationend", t[1]);
        t[1] = null;
        this.__notify("transition", v ? "leave-cancelled" : "enter-cancelled", k, el);
      }
      const classOfStart = k + (v ? "-enter" : "-leave");
      const classOfActive = k + (v ? "-enter-active" : "-leave-active");
      el.classList.add(classOfStart);
      (0,_core_transition__WEBPACK_IMPORTED_MODULE_3__.getDurationType)(el);
      el.classList.add(classOfActive);
      const tsEndName = (0,_core_transition__WEBPACK_IMPORTED_MODULE_3__.getDurationType)(el);
      if (!tsEndName) {
        el.classList.remove(classOfStart);
        el.classList.remove(classOfActive);
        t[0] = v ? _core_transition__WEBPACK_IMPORTED_MODULE_3__.TransitionStates.ENTERED : _core_transition__WEBPACK_IMPORTED_MODULE_3__.TransitionStates.LEAVED;
        if (v) {
          el.classList.add(k);
        } else {
          el.classList.remove(k);
        }
        return;
      }
      const onEnd = () => {
        (0,_util__WEBPACK_IMPORTED_MODULE_2__.removeEvent)(el, "transitionend", onEnd);
        (0,_util__WEBPACK_IMPORTED_MODULE_2__.removeEvent)(el, "animationend", onEnd);
        el.classList.remove(classOfStart);
        el.classList.remove(classOfActive);
        t[1] = null;
        t[0] = v ? _core_transition__WEBPACK_IMPORTED_MODULE_3__.TransitionStates.ENTERED : _core_transition__WEBPACK_IMPORTED_MODULE_3__.TransitionStates.LEAVED;
        if (v) {
          el.classList.add(k);
        } else {
          el.classList.remove(k);
        }
        this.__notify("transition", v ? "after-enter" : "after-leave", k, el);
      };
      t[0] = v ? _core_transition__WEBPACK_IMPORTED_MODULE_3__.TransitionStates.ENTERING : _core_transition__WEBPACK_IMPORTED_MODULE_3__.TransitionStates.LEAVING;
      t[1] = onEnd;
      (0,_util__WEBPACK_IMPORTED_MODULE_2__.addEvent)(el, tsEndName, onEnd);
      this.__notify("transition", v ? "before-enter" : "before-leave", k, el);
      (0,_util__WEBPACK_IMPORTED_MODULE_2__.setImmediate)(() => {
        this.__notify("transition", v ? "enter" : "leave", k, el);
      });
    });
  }
}


//# sourceMappingURL=class.js.map

/***/ }),

/***/ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/components/dynamic.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/components/dynamic.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicRenderComponent": () => (/* binding */ DynamicRenderComponent)
/* harmony export */ });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/vm/common.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/component */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/core/component.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/util/index.js");
/* harmony import */ var _core_render_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/render_fns */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/core/render_fns.js");




function createEl(component) {
  let Clazz = component._r?.component;
  const pAttrs = component[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].passedAttrs;
  const attrs = (0,_core_component__WEBPACK_IMPORTED_MODULE_1__.attrs)({
    [_core_component__WEBPACK_IMPORTED_MODULE_1__.__]: {
      slots: null,
      context: component[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].context
    }
  });
  if (!Clazz) {
    attrs[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].slots = {
      default: component._r?.renderFn || _core_render_fns__WEBPACK_IMPORTED_MODULE_3__.emptyRenderFn
    };
    Clazz = _core_component__WEBPACK_IMPORTED_MODULE_1__.Component;
  }
  for (const attrName in pAttrs) {
    attrs[attrName] = pAttrs[attrName];
  }
  component._ca = attrs;
  if (!component._w) {
    pAttrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("*", (prop) => {
      component._ca[prop[0]] = pAttrs[prop[0]];
    });
    component._w = true;
  }
  return Clazz.create(attrs);
}
class DynamicRenderComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    _jg0._ca = null;
    _jg0._w = false;const f3_jg0402 = () => {
    _jg0.render = attrs.render; }; f3_jg0402(); attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("render", f3_jg0402);
  }
  get render() {
    return this._r;
  }
  set render(v) {
    if (this._r?.component === v?.component && this._r?.renderFn === v?.renderFn) {
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

/***/ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/components/for.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/components/for.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForComponent": () => (/* binding */ ForComponent),
/* harmony export */   "ForEachComponent": () => (/* binding */ ForEachComponent)
/* harmony export */ });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/vm/common.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/component */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/core/component.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/util/index.js");



class ForEachComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(attrs2, item, index, isLast) {
    super(attrs2);const _jg0 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    if ((0,_vm_common__WEBPACK_IMPORTED_MODULE_0__.isViewModel)(item)) {
      _jg0.each = item;
    } else {
      _jg0._e = item;
    }
    _jg0.index = index;
    _jg0.isFirst = index === 0;
    _jg0.isLast = isLast;
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
function createEl(item, i, isLast, itemRenderFn, context) {
  return new ForEachComponent((0,_core_component__WEBPACK_IMPORTED_MODULE_1__.attrs)({
    [_core_component__WEBPACK_IMPORTED_MODULE_1__.__]: {
      context,
      slots: {
        default: itemRenderFn
      }
    }
  }), item, i, isLast)[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
}
function appendRenderEach(item, i, isLast, itemRenderFn, roots, context) {
  const el = createEl(item, i, isLast, itemRenderFn, context);
  roots.push(el);
  return el.__render();
}
function _prepareKey(item, i, keyMap, keyName) {
  const key = keyName === "each" ? item : keyName(item);
  if (keyMap.has(key)) {
    console.error(`loop items [${i}] and [${keyMap.get(key)}] of <for> component both have key '${key}', dulplicated key may cause update error.`);
  }
  keyMap.set(key, i);
  return key;
}
function renderItems(items, itemRenderFn, roots, keys, keyName, context) {
  const result = [];
  const tmpKeyMap = /* @__PURE__ */ new Map();
  items.forEach((item, i) => {
    if (keyName !== "index") {
      keys.push(_prepareKey(item, i, tmpKeyMap, keyName));
    }
    result.push(...appendRenderEach(item, i, i === items.length - 1, itemRenderFn, roots, context));
  });
  return result;
}
function loopAppend($parent, el) {
  el[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes.forEach((node) => {
    if ((0,_core_component__WEBPACK_IMPORTED_MODULE_1__.isComponent)(node)) {
      loopAppend($parent, node);
    } else {
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
  return (0,_util__WEBPACK_IMPORTED_MODULE_2__.isString)(p) && p !== "length" && /^\d+$/.test(p) ? Number(p) : p;
}
class ForComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(attrs2) {
    if (attrs2.key && !/^(index|each(.[\w\d$_]+)*)$/.test(attrs2.key)) {
      throw new Error('Value of "key" attribute of <for> component is invalidate. See https://[todo]');
    }
    super(attrs2);const _jg0 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    if (!(0,_vm_common__WEBPACK_IMPORTED_MODULE_0__.isViewModel)(attrs2.loop)) {
      throw new Error("require ViewModelArray");
    }const f3_jg0402 = () => {
    _jg0.loop = attrs2.loop; }; f3_jg0402(); attrs2[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("loop", f3_jg0402);
    const kn = attrs2.key || "index";
    _jg0._keyName = kn;
    _jg0._length = 0;
    _jg0._keys = null;
    _jg0._waitingUpdate = false;
    if (kn !== "index" && kn !== "each") {
      _jg0._keyName = new Function("each", `return ${kn}`);
      const propCount = kn.split(".").length + 1;
      _jg0[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("loop.*." + kn.slice(5), (propPath) => {
        if (propPath.length !== propCount || _jg0._waitingUpdate) {
          return;
        }
        const items = _jg0.loop;
        if (!(0,_util__WEBPACK_IMPORTED_MODULE_2__.isArray)(items) || items.length === 0)
          return;
        const p = _parseIndexPath(propPath[1]);
        if (!(0,_util__WEBPACK_IMPORTED_MODULE_2__.isNumber)(p) || p >= items.length) {
          return;
        }
        _jg0._keys[p] = _jg0._keyName(items[p]);
      });
    }
    _jg0[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("loop.*", (propPath) => {
      if (_jg0[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].state !== _core_component__WEBPACK_IMPORTED_MODULE_1__.ComponentStates.RENDERED || propPath.length !== 2 || _jg0._waitingUpdate) {
        return;
      }
      const p = _parseIndexPath(propPath[1]);
      if (p === "length") {
        _jg0._waitingUpdate = true;
        _jg0.__updateIfNeed();
      } else if ((0,_util__WEBPACK_IMPORTED_MODULE_2__.isNumber)(p)) {
        _jg0._updateItem(p);
      }
    });
  }
  get loop() {
    return this._l;
  }
  set loop(v) {
    this._l = v;
    this._waitingUpdate = true;
    this.__updateIfNeed();
  }
  __render() {
    const roots = this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes;
    const itemRenderFn = this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].slots?.default;
    if (!itemRenderFn) {
      roots.push(document.createComment("empty"));
      return roots;
    }
    const items = this.loop;
    const keyName = this._keyName;
    if (keyName !== "index")
      this._keys = [];
    if (!(0,_util__WEBPACK_IMPORTED_MODULE_2__.isArray)(items) || items.length === 0) {
      roots.push(document.createComment("empty"));
      return roots;
    }
    this._length = items.length;
    return renderItems(items, itemRenderFn, roots, this._keys, keyName, this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].context);
  }
  _updateItem(index) {
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
    const itemRenderFn = this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].slots?.default;
    if (!itemRenderFn)
      return;
    const keyName = this._keyName;
    if (keyName !== "index") {
      const newKey = keyName === "each" ? item : keyName(item);
      const oldKey = keys[index];
      if (newKey !== oldKey) {
        const $fd = oldEl.__firstDOM;
        const newEl = createEl(item, index, oldEl.isLast, itemRenderFn, this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].context);
        const rr = (0,_core_component__WEBPACK_IMPORTED_MODULE_1__.assertRenderResults)(newEl.__render());
        $fd.parentNode.insertBefore(rr.length > 1 ? (0,_util__WEBPACK_IMPORTED_MODULE_2__.createFragment)(rr) : rr[0], $fd);
        oldEl.__destroy();
        roots[index] = newEl;
        keys[index] = newKey;
        newEl.__handleAfterRender();
      } else {
        oldEl.each = item;
      }
    } else {
      oldEl.each = item;
    }
  }
  __update() {
    this._waitingUpdate = false;
    const itemRenderFn = this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].slots?.default;
    if (!itemRenderFn)
      return;
    const newItems = (0,_util__WEBPACK_IMPORTED_MODULE_2__.isArray)(this.loop) ? this.loop : [];
    const roots = this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes;
    const nl = newItems.length;
    const ol = this._length;
    if (nl === 0 && ol === 0)
      return;
    const keyName = this._keyName;
    if (nl === 0 && ol > 0) {
      const fd = roots[0].__firstDOM;
      const $cmt = document.createComment("empty");
      fd.parentNode.insertBefore($cmt, fd);
      for (let i = 0; i < ol; i++) {
        roots[i].__destroy();
      }
      roots.length = 1;
      roots[0] = $cmt;
      if (keyName !== "index") {
        this._keys.length = 0;
      }
      this._length = 0;
      return;
    }
    this._length = nl;
    const ctx = this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].context;
    const firstEl = roots[0];
    const $parent = (ol === 0 ? firstEl : firstEl.__firstDOM).parentNode;
    if (keyName === "index") {
      let $f = null;
      if (ol === 0)
        roots.length = 0;
      for (let i = 0; i < nl; i++) {
        if (i < ol) {
          updateEl(roots[i], i, newItems);
        } else {
          if (!$f)
            $f = (0,_util__WEBPACK_IMPORTED_MODULE_2__.createFragment)();
          appendRenderEach(newItems[i], i, i === nl - 1, itemRenderFn, roots, ctx).forEach((el) => {
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
      const rs = renderItems(newItems, itemRenderFn, roots, oldKeys, keyName, this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].context);
      (0,_util__WEBPACK_IMPORTED_MODULE_2__.insertAfter)($parent, (0,_util__WEBPACK_IMPORTED_MODULE_2__.createFragment)(rs), firstEl);
      $parent.removeChild(firstEl);
      roots.forEach((el) => el.__handleAfterRender());
      return;
    }
    const oldKeyMap = /* @__PURE__ */ new Map();
    oldKeys.forEach((k, i) => {
      oldKeyMap.set(k, i);
    });
    const newKeys = [];
    const newKeyMap = /* @__PURE__ */ new Map();
    newItems.forEach((item, i) => {
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
        } else if (newKeyMap.has(oldKeys[oi]) && newKeyMap.get(oldKeys[oi]) >= ni) {
          if (oi === ol - 1) {
            $lastS = roots[oi].__lastDOM.nextSibling;
          }
          break;
        } else {
          if (oi === ol - 1) {
            $lastS = roots[oi].__lastDOM.nextSibling;
          }
          roots[oi].__destroy();
          oi++;
        }
      }
      if (oi >= ol) {
        let $f2 = null;
        const cei = newRoots.length;
        for (; ni < nl; ni++) {
          const el2 = createEl(newItems[ni], ni, ni === nl - 1, itemRenderFn, ctx);
          if (!$f2)
            $f2 = (0,_util__WEBPACK_IMPORTED_MODULE_2__.createFragment)();
          el2.__render().forEach(($n) => $f2.appendChild($n));
          newRoots.push(el2);
        }
        if ($f2) {
          if ($lastS) {
            $parent.insertBefore($f2, $lastS);
          } else {
            $parent.appendChild($f2);
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
          reuseEl = createEl(newItems[ni], ni, ni === nl - 1, itemRenderFn, ctx);
          reuseEl.__render().forEach(($n) => $f.appendChild($n));
          if (!$nes)
            $nes = [];
          $nes.push(reuseEl);
        } else {
          loopAppend($f, reuseEl);
          updateEl(reuseEl, ni, newItems);
        }
        newRoots.push(reuseEl);
        ni++;
      }
      if (ni >= nl) {
        throw new Error("unimpossible?!");
      }
      const el = roots[oi];
      $f && $parent.insertBefore($f, el.__firstDOM);
      $nes?.forEach((el2) => el2.__handleAfterRender());
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

/***/ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/components/hide.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/components/hide.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HideComponent": () => (/* binding */ HideComponent)
/* harmony export */ });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/vm/common.js");
/* harmony import */ var _vm_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vm/index */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/vm/index.js");
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./class */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/components/class.js");



class HideComponent extends _class__WEBPACK_IMPORTED_MODULE_2__.ToggleClassComponent {
  constructor(attrs) {
    attrs.class = (0,_vm_index__WEBPACK_IMPORTED_MODULE_1__.vm)({
      "jg-hide": attrs.test
    });
    attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("test", () => {
      attrs.class["jg-hide"] = attrs.test;
    });
    super(attrs);const _jg0 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
  }
}


//# sourceMappingURL=hide.js.map

/***/ }),

/***/ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/components/html.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/components/html.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BindHtmlComponent": () => (/* binding */ BindHtmlComponent)
/* harmony export */ });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/vm/common.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/component */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/core/component.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/util/index.js");


function renderHtml(content) {
  const $d = document.createElement("div");
  $d.innerHTML = content || "";
  let cn = $d.childNodes;
  if (cn.length === 0) {
    cn = [document.createComment("empty")];
  } else {
    cn = [].slice.call(cn);
  }
  return cn;
}
class BindHtmlComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(attrs) {
    if (!("content" in attrs))
      throw new Error('<bind-html/> require "content" attribute');
    super(attrs);const _jg0 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;const f2_jg0402 = () => {
    _jg0.content = attrs.content; }; f2_jg0402(); attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("content", f2_jg0402);
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
    return this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes = renderHtml(this._c);
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

/***/ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/components/if.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/components/if.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IfComponent": () => (/* binding */ IfComponent),
/* harmony export */   "SwitchComponent": () => (/* binding */ SwitchComponent)
/* harmony export */ });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/vm/common.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/component */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/core/component.js");
/* harmony import */ var _core_transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/transition */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/core/transition.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/util/index.js");



function createEl(renderFn, context) {
  const attrs = (0,_core_component__WEBPACK_IMPORTED_MODULE_1__.attrs)({
    [_core_component__WEBPACK_IMPORTED_MODULE_1__.__]: {
      context,
      slots: {
        default: renderFn
      }
    }
  });
  return _core_component__WEBPACK_IMPORTED_MODULE_1__.Component.create(attrs);
}
function renderSwitch(component) {
  const value = component._currentValue;
  const acs = component[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].slots;
  if (component.transition && acs) {
    component._transitionMap = /* @__PURE__ */ new Map();
    for (const k in acs) {
      component._transitionMap.set(k, [
        k === value ? _core_transition__WEBPACK_IMPORTED_MODULE_2__.TransitionStates.ENTERED : _core_transition__WEBPACK_IMPORTED_MODULE_2__.TransitionStates.LEAVED,
        null
      ]);
    }
    component._previousValue = value;
    component._onEndHandler = component.onTransitionEnd.bind(component);
  }
  const renderFn = acs ? acs[value] : null;
  const roots = component[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes;
  if (!renderFn) {
    roots.push(document.createComment("empty"));
    return roots;
  }
  const el = createEl(renderFn, component[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].context);
  roots.push(el);
  return el.__render();
}
function doUpdate(component) {
  const roots = component[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes;
  const el = roots[0];
  const isComp = (0,_core_component__WEBPACK_IMPORTED_MODULE_1__.isComponent)(el);
  const firstDOM = isComp ? el.__firstDOM : el;
  const parentDOM = (isComp ? firstDOM : el).parentNode;
  const renderFn = component[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].slots?.[component._currentValue];
  if (renderFn) {
    const newEl = createEl(renderFn, component[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].context);
    const nodes = (0,_core_component__WEBPACK_IMPORTED_MODULE_1__.assertRenderResults)(newEl.__render());
    parentDOM.insertBefore(nodes.length > 1 ? (0,_util__WEBPACK_IMPORTED_MODULE_3__.createFragment)(nodes) : nodes[0], firstDOM);
    roots[0] = newEl;
  } else {
    roots[0] = document.createComment("empty");
    parentDOM.insertBefore(roots[0], firstDOM);
  }
  if (isComp) {
    el.__destroy();
  } else {
    parentDOM.removeChild(firstDOM);
  }
  renderFn && roots[0].__handleAfterRender();
  component.__notify("branch-switched", component._branch);
}
function cancelTs(t, tn, e, component) {
  const el = t[1];
  if (el.nodeType !== Node.ELEMENT_NODE) {
    return;
  }
  const onEnd = component._onEndHandler;
  el.classList.remove(tn + (e ? "-enter" : "-leave"));
  el.classList.remove(tn + (e ? "-enter-active" : "-leave-active"));
  (0,_util__WEBPACK_IMPORTED_MODULE_3__.removeEvent)(el, "transitionend", onEnd);
  (0,_util__WEBPACK_IMPORTED_MODULE_3__.removeEvent)(el, "animationend", onEnd);
  component.__notify("transition", e ? "enter-cancelled" : "leave-cancelled", el);
}
function startTs(t, tn, e, component) {
  const el = t[1];
  const onEnd = component._onEndHandler;
  if (el.nodeType !== Node.ELEMENT_NODE) {
    onEnd();
    return;
  }
  const classOfStart = tn + (e ? "-enter" : "-leave");
  const classOfActive = tn + (e ? "-enter-active" : "-leave-active");
  el.classList.add(classOfStart);
  (0,_core_transition__WEBPACK_IMPORTED_MODULE_2__.getDurationType)(el);
  el.classList.add(classOfActive);
  const tsEndName = (0,_core_transition__WEBPACK_IMPORTED_MODULE_2__.getDurationType)(el);
  if (!tsEndName) {
    onEnd();
    return;
  }
  t[0] = e ? _core_transition__WEBPACK_IMPORTED_MODULE_2__.TransitionStates.ENTERING : _core_transition__WEBPACK_IMPORTED_MODULE_2__.TransitionStates.LEAVING;
  (0,_util__WEBPACK_IMPORTED_MODULE_3__.addEvent)(el, tsEndName, onEnd);
  component.__notify("transition", e ? "before-enter" : "before-leave", el);
  (0,_util__WEBPACK_IMPORTED_MODULE_3__.setImmediate)(() => {
    component.__notify("transition", e ? "enter" : "leave", el);
  });
}
function updateSwitchWithTransition(component) {
  const value = component._currentValue;
  const pv = component._previousValue;
  const tn = component.transition;
  let pt = component._transitionMap.get(pv);
  if (!pt) {
    pt = [
      pv === "else" ? _core_transition__WEBPACK_IMPORTED_MODULE_2__.TransitionStates.LEAVED : _core_transition__WEBPACK_IMPORTED_MODULE_2__.TransitionStates.ENTERED,
      null
    ];
    component._transitionMap.set(pv, pt);
  }
  if (pt[0] === _core_transition__WEBPACK_IMPORTED_MODULE_2__.TransitionStates.ENTERING) {
    if (value === pv)
      return;
    cancelTs(pt, tn, true, component);
    startTs(pt, tn, false, component);
  } else if (pt[0] === _core_transition__WEBPACK_IMPORTED_MODULE_2__.TransitionStates.LEAVING) {
    if (value !== pv)
      return;
    cancelTs(pt, tn, false, component);
    startTs(pt, tn, true, component);
  } else if (pt[0] === _core_transition__WEBPACK_IMPORTED_MODULE_2__.TransitionStates.ENTERED) {
    pt[1] = component.__transitionDOM;
    startTs(pt, tn, false, component);
  } else if (pt[0] === _core_transition__WEBPACK_IMPORTED_MODULE_2__.TransitionStates.LEAVED) {
    pt[1] = component.__transitionDOM;
    startTs(pt, tn, true, component);
  }
}
function updateSwitch(component) {
  if (!(0,_core_component__WEBPACK_IMPORTED_MODULE_1__.isComponent)(component[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes[0]) && (!component[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].slots || !component[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].slots[component._currentValue])) {
    return;
  }
  if (component._transitionMap) {
    updateSwitchWithTransition(component);
    return;
  }
  doUpdate(component);
}
function updateSwitchOnTransitionEnd(component) {
  const value = component._currentValue;
  const pv = component._previousValue;
  const tn = component.transition;
  const pt = component._transitionMap.get(pv);
  const e = pt[0] === _core_transition__WEBPACK_IMPORTED_MODULE_2__.TransitionStates.ENTERING;
  const el = pt[1];
  if (el.nodeType === Node.ELEMENT_NODE) {
    (0,_util__WEBPACK_IMPORTED_MODULE_3__.removeEvent)(el, "transitionend", component._onEndHandler);
    (0,_util__WEBPACK_IMPORTED_MODULE_3__.removeEvent)(el, "animationend", component._onEndHandler);
    el.classList.remove(tn + (e ? "-enter" : "-leave"));
    el.classList.remove(tn + (e ? "-enter-active" : "-leave-active"));
    component.__notify("transition", e ? "after-enter" : "after-leave");
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
        (0,_util__WEBPACK_IMPORTED_MODULE_3__.removeEvent)(el, "transitionend", component._onEndHandler);
        (0,_util__WEBPACK_IMPORTED_MODULE_3__.removeEvent)(el, "animationend", component._onEndHandler);
      }
    });
    component._transitionMap = null;
  }
}
class IfComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    _jg0._currentValue = "default";
    _jg0._onEndHandler = null;
    _jg0._transitionMap = null;
    _jg0._previousValue = null;const f5_jg0402 = () => {
    _jg0.expect = attrs.expect; }; f5_jg0402(); attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("expect", f5_jg0402);const f6_jg0402 = () => {
    _jg0.transition = attrs.transition; }; f6_jg0402(); attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("transition", f6_jg0402);
  }
  get expect() {
    return this._currentValue === "default";
  }
  set expect(value) {
    const v = value ? "default" : "else";
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
    super(attrs);const _jg0 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    _jg0._onEndHandler = null;
    _jg0._transitionMap = null;
    _jg0._previousValue = null;
    _jg0._currentValue = null;const f5_jg0402 = () => {
    _jg0.test = attrs.test; }; f5_jg0402(); attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("test", f5_jg0402);const f6_jg0402 = () => {
    _jg0.transition = attrs.transition; }; f6_jg0402(); attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("transition", f6_jg0402);
  }
  get test() {
    return this._currentValue;
  }
  set test(v) {
    const acs = this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].slots;
    if (!acs || !(v in acs)) {
      v = "default";
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

/***/ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/components/index.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/components/index.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BindHtmlComponent": () => (/* reexport safe */ _html__WEBPACK_IMPORTED_MODULE_3__.BindHtmlComponent),
/* harmony export */   "DynamicRenderComponent": () => (/* reexport safe */ _dynamic__WEBPACK_IMPORTED_MODULE_7__.DynamicRenderComponent),
/* harmony export */   "ForComponent": () => (/* reexport safe */ _for__WEBPACK_IMPORTED_MODULE_1__.ForComponent),
/* harmony export */   "ForEachComponent": () => (/* reexport safe */ _for__WEBPACK_IMPORTED_MODULE_1__.ForEachComponent),
/* harmony export */   "HideComponent": () => (/* reexport safe */ _hide__WEBPACK_IMPORTED_MODULE_2__.HideComponent),
/* harmony export */   "IfComponent": () => (/* reexport safe */ _if__WEBPACK_IMPORTED_MODULE_4__.IfComponent),
/* harmony export */   "LogComponent": () => (/* reexport safe */ _log__WEBPACK_IMPORTED_MODULE_6__.LogComponent),
/* harmony export */   "ParameterComponent": () => (/* reexport safe */ _parameter__WEBPACK_IMPORTED_MODULE_5__.ParameterComponent),
/* harmony export */   "SwitchComponent": () => (/* reexport safe */ _if__WEBPACK_IMPORTED_MODULE_4__.SwitchComponent),
/* harmony export */   "ToggleClassComponent": () => (/* reexport safe */ _class__WEBPACK_IMPORTED_MODULE_0__.ToggleClassComponent)
/* harmony export */ });
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/components/class.js");
/* harmony import */ var _for__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./for */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/components/for.js");
/* harmony import */ var _hide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hide */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/components/hide.js");
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/components/html.js");
/* harmony import */ var _if__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./if */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/components/if.js");
/* harmony import */ var _parameter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parameter */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/components/parameter.js");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./log */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/components/log.js");
/* harmony import */ var _dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dynamic */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/components/dynamic.js");









//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/components/log.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/components/log.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogComponent": () => (/* binding */ LogComponent)
/* harmony export */ });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/vm/common.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/component */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/core/component.js");

class LogComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;const f1_jg0402 = () => {
    _jg0.msg = attrs.msg; }; f1_jg0402(); attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("msg", f1_jg0402);
  }
  set msg(v) {
    console.log(v);
    this._msg = v;
  }
  get msg() {
    return this._msg;
  }
  __render() {
    return [document.createComment("log placeholder")];
  }
}


//# sourceMappingURL=log.js.map

/***/ }),

/***/ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/components/parameter.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/components/parameter.js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParameterComponent": () => (/* binding */ ParameterComponent)
/* harmony export */ });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/vm/common.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/component */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/core/component.js");


class ParameterComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(attrs, params) {
    super(attrs);const _jg0 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    params.forEach((p) => {
      _jg0[p] = attrs[p];
      attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(p, () => {
        _jg0[p] = attrs[p];
      });
    });
  }
}


//# sourceMappingURL=parameter.js.map

/***/ }),

/***/ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/core/bootstrap.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/core/bootstrap.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/core/component.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/core/component.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* binding */ Component),
/* harmony export */   "ComponentStates": () => (/* binding */ ComponentStates),
/* harmony export */   "ContextStates": () => (/* binding */ ContextStates),
/* harmony export */   "__": () => (/* binding */ __),
/* harmony export */   "assertRenderResults": () => (/* binding */ assertRenderResults),
/* harmony export */   "attrs": () => (/* binding */ wrapAttrs),
/* harmony export */   "isComponent": () => (/* binding */ isComponent)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/util/index.js");
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vm/common */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/vm/common.js");
/* harmony import */ var _vm_proxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vm/proxy */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/vm/proxy.js");
/* harmony import */ var _messenger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messenger */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/core/messenger.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/core/style.js");
var _a;





(0,_style__WEBPACK_IMPORTED_MODULE_4__.initStyle)();
var ComponentStates = /* @__PURE__ */ ((ComponentStates2) => {
  ComponentStates2[ComponentStates2["INITIALIZE"] = 0] = "INITIALIZE";
  ComponentStates2[ComponentStates2["RENDERED"] = 1] = "RENDERED";
  ComponentStates2[ComponentStates2["WILLDESTROY"] = 2] = "WILLDESTROY";
  ComponentStates2[ComponentStates2["DESTROIED"] = 3] = "DESTROIED";
  return ComponentStates2;
})(ComponentStates || {});
var ContextStates = /* @__PURE__ */ ((ContextStates2) => {
  ContextStates2[ContextStates2["UNTOUCH"] = 0] = "UNTOUCH";
  ContextStates2[ContextStates2["TOUCHED"] = 1] = "TOUCHED";
  ContextStates2[ContextStates2["UNTOUCH_FREEZED"] = 2] = "UNTOUCH_FREEZED";
  ContextStates2[ContextStates2["TOUCHED_FREEZED"] = 3] = "TOUCHED_FREEZED";
  return ContextStates2;
})(ContextStates || {});
const __ = Symbol("__");
function isComponent(v) {
  return __ in v;
}
function assertRenderResults(renderResults) {
  if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isArray)(renderResults) || renderResults.length === 0) {
    throw new Error("Render results of component is empty");
  }
  return renderResults;
}
function wrapAttrs(target) {
  if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isObject)(target) || (0,_util__WEBPACK_IMPORTED_MODULE_0__.isArray)(target)) {
    throw new Error("attrs() traget must be plain object.");
  }
  return (0,_vm_proxy__WEBPACK_IMPORTED_MODULE_2__.createAttributes)(target);
}
class Component extends _messenger__WEBPACK_IMPORTED_MODULE_3__.Messenger {
  constructor(attrs) {
    if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isObject)(attrs) || !(_vm_common__WEBPACK_IMPORTED_MODULE_1__.$$ in attrs)) {
      throw new Error("Attributes passed to Component constructor must be ViewModel. See https://[todo]");
    }
    const compilerAttrs = attrs[__] || {};
    super(compilerAttrs.listeners);
    (0,_vm_proxy__WEBPACK_IMPORTED_MODULE_2__.createComponent)(this);
    this[__] = {
      passedAttrs: attrs,
      context: compilerAttrs.context || null,
      contextState: 0 /* UNTOUCH */,
      slots: compilerAttrs.slots,
      state: 0 /* INITIALIZE */,
      rootNodes: [],
      nonRootCompNodes: [],
      refs: null,
      relatedRefs: null,
      upNextMap: null,
      deregFns: null
    };
  }
  static create(attrs) {
    const isObj = (0,_util__WEBPACK_IMPORTED_MODULE_0__.isObject)(attrs);
    const vmAttrs = isObj && _vm_common__WEBPACK_IMPORTED_MODULE_1__.$$ in attrs ? attrs : wrapAttrs(isObj ? attrs : {});
    return new this(vmAttrs)[_vm_common__WEBPACK_IMPORTED_MODULE_1__.$$].proxy;
  }
  __addDeregisterFn(deregisterFn) {
    let deregs = this[__].deregFns;
    if (!deregs) {
      this[__].deregFns = deregs = /* @__PURE__ */ new Set();
    }
    deregs.add(deregisterFn);
  }
  __domAddListener($el, eventName, listener, capture) {
    const deregEvtFn = (0,_util__WEBPACK_IMPORTED_MODULE_0__.registerEvent)($el, eventName, ($event) => {
      listener.call(this, $event);
    }, capture);
    this.__addDeregisterFn(deregEvtFn);
    return () => {
      deregEvtFn();
      this[__].deregFns.delete(deregEvtFn);
    };
  }
  __domPassListeners(ignoredEventNames, targetEl) {
    if (this[__].state !== 1 /* RENDERED */) {
      throw new Error("domPassListeners must be applied to component which is rendered.");
    }
    const lis = this[_messenger__WEBPACK_IMPORTED_MODULE_3__.MESSENGER_LISTENERS];
    if (!lis || lis.size === 0) {
      return;
    }
    if (ignoredEventNames && !(0,_util__WEBPACK_IMPORTED_MODULE_0__.isArray)(ignoredEventNames)) {
      targetEl = ignoredEventNames;
      ignoredEventNames = null;
    } else if (!targetEl) {
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
        const deregFn = (0,_util__WEBPACK_IMPORTED_MODULE_0__.registerEvent)(targetEl, eventName, opts && (opts.stop || opts.prevent) ? ($evt) => {
          opts.stop && $evt.stopPropagation();
          opts.prevent && $evt.preventDefault();
          handler.call(this, $evt);
        } : ($evt) => {
          handler.call(this, $evt);
        }, opts);
        this.__addDeregisterFn(deregFn);
      });
    });
  }
  get __transitionDOM() {
    const el = this[__].rootNodes[0];
    return isComponent(el) ? el.__transitionDOM : el;
  }
  get __firstDOM() {
    const el = this[__].rootNodes[0];
    return isComponent(el) ? el.__firstDOM : el;
  }
  get __lastDOM() {
    const rns = this[__].rootNodes;
    const el = rns[rns.length - 1];
    return isComponent(el) ? el.__lastDOM : el;
  }
  __render() {
    const Clazz = this.constructor;
    let renderFn = Clazz.template;
    if (!renderFn && this[__].slots) {
      renderFn = this[__].slots.default;
    }
    if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isFunction)(renderFn)) {
      throw new Error(`Template of ${Clazz.name} not found. Forget static getter "template"?`);
    }
    return renderFn(this);
  }
  __renderToDOM(targetEl, replaceMode = true) {
    if (this[__].state !== 0 /* INITIALIZE */) {
      throw new Error("component has already been rendered.");
    }
    const rr = assertRenderResults(this.__render());
    if (replaceMode) {
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.replaceChildren)(targetEl.parentNode, rr, targetEl);
    } else {
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(targetEl, rr);
    }
    this.__handleAfterRender();
  }
  __destroy(removeDOM = true) {
    const comp = this[__];
    if (comp.state > 2 /* WILLDESTROY */)
      return;
    comp.state = 2 /* WILLDESTROY */;
    this[_vm_common__WEBPACK_IMPORTED_MODULE_1__.$$].__notifiable = false;
    comp.passedAttrs[_vm_common__WEBPACK_IMPORTED_MODULE_1__.$$].__notifiable = false;
    this.__notify("before-destroy");
    this.__beforeDestroy();
    this.__handleBeforeDestroy(removeDOM);
    super.__off();
    comp.passedAttrs[_vm_common__WEBPACK_IMPORTED_MODULE_1__.$$].__destroy();
    comp.passedAttrs = null;
    this[_vm_common__WEBPACK_IMPORTED_MODULE_1__.$$].__destroy();
    if (comp.upNextMap) {
      comp.upNextMap.forEach((imm) => {
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.clearImmediate)(imm);
      });
      comp.upNextMap = null;
    }
    if (comp.relatedRefs) {
      comp.relatedRefs.forEach((info) => {
        const refs = info.origin[__].refs;
        if (!refs)
          return;
        const rns = refs.get(info.ref);
        if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isArray)(rns)) {
          (0,_util__WEBPACK_IMPORTED_MODULE_0__.arrayRemove)(rns, info.node || this);
        } else {
          refs.delete(info.ref);
        }
      });
      comp.relatedRefs = null;
    }
    if (comp.deregFns) {
      comp.deregFns.forEach((deregFn) => deregFn());
      comp.deregFns.clear();
      comp.deregFns = null;
    }
    comp.state = 3 /* DESTROIED */;
    comp.rootNodes = comp.nonRootCompNodes = comp.refs = comp.slots = comp.context = null;
  }
  __handleBeforeDestroy(removeDOM = false) {
    this[__].nonRootCompNodes.forEach((component) => {
      component.__destroy(false);
    });
    let $parent;
    this[__].rootNodes.forEach((node) => {
      if (isComponent(node)) {
        node.__destroy(removeDOM);
      } else if (removeDOM) {
        if (!$parent) {
          $parent = node.parentNode;
        }
        $parent.removeChild(node);
      }
    });
  }
  __handleAfterRender() {
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
    this[__].state = 1 /* RENDERED */;
    this[__].contextState = this[__].contextState === 1 /* TOUCHED */ ? 3 /* TOUCHED_FREEZED */ : 2 /* UNTOUCH_FREEZED */;
    this.__afterRender();
    this.__notify("after-render");
  }
  __updateIfNeed(handler, nextTick = true) {
    if (this[__].state !== 1 /* RENDERED */) {
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
      ntMap = this[__].upNextMap = /* @__PURE__ */ new Map();
    if (ntMap.has(handler)) {
      return;
    }
    ntMap.set(handler, (0,_util__WEBPACK_IMPORTED_MODULE_0__.setImmediate)(() => {
      ntMap.delete(handler);
      handler.call(this);
    }));
  }
  __update(first) {
  }
  __setContext(key, value, forceOverride = false) {
    if (this[__].contextState === 2 /* UNTOUCH_FREEZED */ || this[__].contextState === 3 /* TOUCHED_FREEZED */) {
      throw new Error("Can't setContext after component has been rendered. Try put setContext code into constructor.");
    }
    if (this[__].contextState === 0 /* UNTOUCH */) {
      this[__].context = Object.assign({}, this[__].context);
      this[__].contextState = 1 /* TOUCHED */;
    }
    if (key in this[__].context) {
      if (!forceOverride) {
        throw new Error(`Contenxt with key: ${key.toString()} is exist. Pass third argument forceOverride=true to override it.`);
      }
    }
    this[__].context[key] = value;
  }
  __getContext(key) {
    return this[__].context ? this[__].context[key] : null;
  }
  __setRef(ref, el, relatedComponent) {
    let rns = this[__].refs;
    if (!rns) {
      this[__].refs = rns = /* @__PURE__ */ new Map();
    }
    let elOrArr = rns.get(ref);
    if (!elOrArr) {
      rns.set(ref, el);
    } else if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isArray)(elOrArr)) {
      elOrArr.push(el);
    } else {
      elOrArr = [elOrArr, el];
      rns.set(ref, elOrArr);
    }
    const isComp = isComponent(el);
    if (!isComp && this === relatedComponent) {
      return;
    }
    let rbs = (isComp ? el : relatedComponent)[__].relatedRefs;
    if (!rbs) {
      (isComp ? el : relatedComponent)[__].relatedRefs = rbs = [];
    }
    rbs.push({
      origin: this,
      ref,
      node: isComp ? null : el
    });
  }
  __getRef(ref) {
    if (this[__].state !== 1 /* RENDERED */) {
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.warn)(`Warning: call __getRef before component '${this.constructor.name}' rendered will get nothing. see https://[TODO]`);
    }
    return this[__].refs ? this[__].refs.get(ref) : null;
  }
  __afterRender() {
  }
  __beforeDestroy() {
  }
}
_a = __, __, _vm_common__WEBPACK_IMPORTED_MODULE_1__.$$;
Component[_a] = true;


//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/core/index.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/core/index.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_1__.Component),
/* harmony export */   "ComponentStates": () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_1__.ComponentStates),
/* harmony export */   "ContextStates": () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_1__.ContextStates),
/* harmony export */   "MESSENGER_LISTENERS": () => (/* reexport safe */ _messenger__WEBPACK_IMPORTED_MODULE_2__.MESSENGER_LISTENERS),
/* harmony export */   "Messenger": () => (/* reexport safe */ _messenger__WEBPACK_IMPORTED_MODULE_2__.Messenger),
/* harmony export */   "TransitionStates": () => (/* reexport safe */ _transition__WEBPACK_IMPORTED_MODULE_5__.TransitionStates),
/* harmony export */   "__": () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_1__.__),
/* harmony export */   "assertRenderResults": () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_1__.assertRenderResults),
/* harmony export */   "attrs": () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_1__.attrs),
/* harmony export */   "bootstrap": () => (/* reexport safe */ _bootstrap__WEBPACK_IMPORTED_MODULE_0__.bootstrap),
/* harmony export */   "emptyRenderFn": () => (/* reexport safe */ _render_fns__WEBPACK_IMPORTED_MODULE_3__.emptyRenderFn),
/* harmony export */   "errorRenderFn": () => (/* reexport safe */ _render_fns__WEBPACK_IMPORTED_MODULE_3__.errorRenderFn),
/* harmony export */   "getDuration": () => (/* reexport safe */ _transition__WEBPACK_IMPORTED_MODULE_5__.getDuration),
/* harmony export */   "getDurationType": () => (/* reexport safe */ _transition__WEBPACK_IMPORTED_MODULE_5__.getDurationType),
/* harmony export */   "initStyle": () => (/* reexport safe */ _style__WEBPACK_IMPORTED_MODULE_4__.initStyle),
/* harmony export */   "isComponent": () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_1__.isComponent),
/* harmony export */   "textRenderFn": () => (/* reexport safe */ _render_fns__WEBPACK_IMPORTED_MODULE_3__.textRenderFn)
/* harmony export */ });
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/core/bootstrap.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/core/component.js");
/* harmony import */ var _messenger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messenger */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/core/messenger.js");
/* harmony import */ var _render_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render_fns */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/core/render_fns.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/core/style.js");
/* harmony import */ var _transition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transition */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/core/transition.js");







//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/core/messenger.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/core/messenger.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MESSENGER_LISTENERS": () => (/* binding */ MESSENGER_LISTENERS),
/* harmony export */   "Messenger": () => (/* binding */ Messenger)
/* harmony export */ });
const MESSENGER_LISTENERS = Symbol("listeners");
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
      if (opts?.once) {
        listeners.delete(handler);
      }
    });
  }
  __on(eventName, eventListener, options) {
    if (!this[MESSENGER_LISTENERS]) {
      this[MESSENGER_LISTENERS] = /* @__PURE__ */ new Map();
    }
    let listeners = this[MESSENGER_LISTENERS].get(eventName);
    if (!listeners) {
      this[MESSENGER_LISTENERS].set(eventName, listeners = /* @__PURE__ */ new Map());
    }
    listeners.set(eventListener, options);
  }
  __off(eventName, eventListener) {
    const lisMap = this[MESSENGER_LISTENERS];
    if (!lisMap) {
      return;
    }
    if (!eventName) {
      lisMap.forEach((listeners2) => listeners2.clear());
      lisMap.clear();
      return;
    }
    const listeners = lisMap.get(eventName);
    if (!listeners) {
      return;
    }
    if (!eventListener) {
      listeners.clear();
    } else {
      listeners.delete(eventListener);
    }
  }
}
MESSENGER_LISTENERS;


//# sourceMappingURL=messenger.js.map

/***/ }),

/***/ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/core/render_fns.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/core/render_fns.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emptyRenderFn": () => (/* binding */ emptyRenderFn),
/* harmony export */   "errorRenderFn": () => (/* binding */ errorRenderFn),
/* harmony export */   "textRenderFn": () => (/* binding */ textRenderFn)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/util/index.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/core/component.js");


function emptyRenderFn(component) {
  const el = document.createComment("empty");
  component[_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes.push(el);
  return [el];
}
function errorRenderFn(component) {
  const el = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    style: "color: red !important;"
  });
  el.textContent = "template parsing failed! please check webpack log.";
  component[_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes.push(el);
  return el;
}
function textRenderFn(component, txtContent) {
  const el = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createTextNode)(txtContent);
  component[_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes.push(el);
  return el;
}


//# sourceMappingURL=render_fns.js.map

/***/ }),

/***/ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/core/style.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/core/style.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initStyle": () => (/* binding */ initStyle)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/util/index.js");

const CSS = ".jg-hide{display:none!important}.jg-hide.jg-hide-enter,.jg-hide.jg-hide-leave{display:block!important}";
let inited = false;
function initStyle() {
  if (inited)
    return;
  inited = true;
  const $style = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", {
    type: "text/css"
  });
  if ($style.styleSheet)
    $style.styleSheet.cssText = CSS;
  else
    $style.textContent = CSS;
  document.head.appendChild($style);
}


//# sourceMappingURL=style.js.map

/***/ }),

/***/ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/core/transition.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/core/transition.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransitionStates": () => (/* binding */ TransitionStates),
/* harmony export */   "getDuration": () => (/* binding */ getDuration),
/* harmony export */   "getDurationType": () => (/* binding */ getDurationType)
/* harmony export */ });
var TransitionStates = /* @__PURE__ */ ((TransitionStates2) => {
  TransitionStates2[TransitionStates2["ENTERING"] = 1] = "ENTERING";
  TransitionStates2[TransitionStates2["ENTERED"] = 2] = "ENTERED";
  TransitionStates2[TransitionStates2["LEAVING"] = 3] = "LEAVING";
  TransitionStates2[TransitionStates2["LEAVED"] = 4] = "LEAVED";
  return TransitionStates2;
})(TransitionStates || {});
function getDurationType(el) {
  const cst = getComputedStyle(el);
  if (cst.getPropertyValue("transition-duration") !== "0s") {
    return "transitionend";
  } else if (cst.getPropertyValue("animation-duration") !== "0s") {
    return "animationend";
  }
  return null;
}
function parseDuration(v) {
  if (/ms$/.test(v)) {
    return parseInt(v);
  } else if (/s$/.test(v)) {
    return parseFloat(v) * 1e3;
  } else {
    return 0;
  }
}
function getDuration(el) {
  const cst = getComputedStyle(el);
  let dur = cst.getPropertyValue("transition-duration");
  if (dur !== "0s") {
    return {
      type: "transitionend",
      time: parseDuration(dur)
    };
  }
  dur = cst.getPropertyValue("animation-duration");
  if (dur !== "0s") {
    return {
      type: "animationend",
      time: parseDuration(dur)
    };
  }
  return {
    type: null,
    time: 0
  };
}


//# sourceMappingURL=transition.js.map

/***/ }),

/***/ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/index.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/index.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$$": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.$$),
/* harmony export */   "BindHtmlComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.BindHtmlComponent),
/* harmony export */   "Component": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.Component),
/* harmony export */   "ComponentStates": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.ComponentStates),
/* harmony export */   "ContextStates": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.ContextStates),
/* harmony export */   "DynamicRenderComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.DynamicRenderComponent),
/* harmony export */   "ForComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ForComponent),
/* harmony export */   "ForEachComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ForEachComponent),
/* harmony export */   "HideComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.HideComponent),
/* harmony export */   "IfComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.IfComponent),
/* harmony export */   "LogComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.LogComponent),
/* harmony export */   "MESSENGER_LISTENERS": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.MESSENGER_LISTENERS),
/* harmony export */   "Messenger": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.Messenger),
/* harmony export */   "ParameterComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ParameterComponent),
/* harmony export */   "SwitchComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.SwitchComponent),
/* harmony export */   "ToggleClassComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ToggleClassComponent),
/* harmony export */   "TransitionStates": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.TransitionStates),
/* harmony export */   "ViewModelCoreImpl": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.ViewModelCoreImpl),
/* harmony export */   "__": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.__),
/* harmony export */   "addEvent": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.addEvent),
/* harmony export */   "addParent": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.addParent),
/* harmony export */   "appendChildren": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.appendChildren),
/* harmony export */   "arrayEqual": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.arrayEqual),
/* harmony export */   "arrayPushIfNotExist": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.arrayPushIfNotExist),
/* harmony export */   "arrayRemove": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.arrayRemove),
/* harmony export */   "assertRenderResults": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.assertRenderResults),
/* harmony export */   "attrs": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.attrs),
/* harmony export */   "bootstrap": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.bootstrap),
/* harmony export */   "clearImmediate": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.clearImmediate),
/* harmony export */   "createAttributes": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.createAttributes),
/* harmony export */   "createComponent": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.createComponent),
/* harmony export */   "createElement": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.createElement),
/* harmony export */   "createElementWithChild": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.createElementWithChild),
/* harmony export */   "createElementWithoutAttrs": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.createElementWithoutAttrs),
/* harmony export */   "createFragment": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.createFragment),
/* harmony export */   "createSVGElement": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.createSVGElement),
/* harmony export */   "createSVGElementWithoutAttrs": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.createSVGElementWithoutAttrs),
/* harmony export */   "createTextNode": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.createTextNode),
/* harmony export */   "createViewModel": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.createViewModel),
/* harmony export */   "deleteNode": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.deleteNode),
/* harmony export */   "disableWarning": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.disableWarning),
/* harmony export */   "emptyRenderFn": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.emptyRenderFn),
/* harmony export */   "errorRenderFn": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.errorRenderFn),
/* harmony export */   "getDuration": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.getDuration),
/* harmony export */   "getDurationType": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.getDurationType),
/* harmony export */   "getPropertyName": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.getPropertyName),
/* harmony export */   "handleCancel": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.handleCancel),
/* harmony export */   "handleOnce": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.handleOnce),
/* harmony export */   "initStyle": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.initStyle),
/* harmony export */   "insertAfter": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.insertAfter),
/* harmony export */   "isArray": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.isArray),
/* harmony export */   "isBoolean": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.isBoolean),
/* harmony export */   "isComponent": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.isComponent),
/* harmony export */   "isFunction": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.isFunction),
/* harmony export */   "isInnerObj": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.isInnerObj),
/* harmony export */   "isNumber": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.isNumber),
/* harmony export */   "isObject": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.isObject),
/* harmony export */   "isPromise": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.isPromise),
/* harmony export */   "isPublicProperty": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.isPublicProperty),
/* harmony export */   "isString": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.isString),
/* harmony export */   "isUndefined": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.isUndefined),
/* harmony export */   "isViewModel": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.isViewModel),
/* harmony export */   "loopClearNode": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.loopClearNode),
/* harmony export */   "loopCreateNode": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.loopCreateNode),
/* harmony export */   "loopGetNode": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.loopGetNode),
/* harmony export */   "loopHandle": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.loopHandle),
/* harmony export */   "loopNotify": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.loopNotify),
/* harmony export */   "parsePropertyPath": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.parsePropertyPath),
/* harmony export */   "registerEvent": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.registerEvent),
/* harmony export */   "removeAttribute": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.removeAttribute),
/* harmony export */   "removeEvent": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.removeEvent),
/* harmony export */   "removeParent": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.removeParent),
/* harmony export */   "replaceChildren": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.replaceChildren),
/* harmony export */   "setAttribute": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.setAttribute),
/* harmony export */   "setImmediate": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.setImmediate),
/* harmony export */   "setText": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.setText),
/* harmony export */   "shiftParent": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.shiftParent),
/* harmony export */   "textRenderFn": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.textRenderFn),
/* harmony export */   "typeOf": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.typeOf),
/* harmony export */   "uid": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.uid),
/* harmony export */   "unwatch": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.unwatch),
/* harmony export */   "vm": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.vm),
/* harmony export */   "warn": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.warn),
/* harmony export */   "watch": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.watch)
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/components/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/core/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/util/index.js");
/* harmony import */ var _vm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vm */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/vm/index.js");





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/util/array.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/util/array.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrayEqual": () => (/* binding */ arrayEqual),
/* harmony export */   "arrayPushIfNotExist": () => (/* binding */ arrayPushIfNotExist),
/* harmony export */   "arrayRemove": () => (/* binding */ arrayRemove)
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

/***/ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/util/common.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/util/common.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "disableWarning": () => (/* binding */ disableWarning),
/* harmony export */   "uid": () => (/* binding */ uid),
/* harmony export */   "warn": () => (/* binding */ warn)
/* harmony export */ });
let UID_INC = 0;
function uid() {
  return Date.now().toString(32) + "-" + Math.floor(Math.random() * 16777215).toString(32) + "-" + (UID_INC++).toString(32);
}
let warning = true;
function warn(...args) {
  warning && console.warn(...args);
}
function disableWarning() {
  warning = false;
}


//# sourceMappingURL=common.js.map

/***/ }),

/***/ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/util/dom.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/util/dom.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addEvent": () => (/* binding */ addEvent),
/* harmony export */   "appendChildren": () => (/* binding */ appendChildren),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "createElementWithChild": () => (/* binding */ createElementWithChild),
/* harmony export */   "createElementWithoutAttrs": () => (/* binding */ createElementWithoutAttrs),
/* harmony export */   "createFragment": () => (/* binding */ createFragment),
/* harmony export */   "createSVGElement": () => (/* binding */ createSVGElement),
/* harmony export */   "createSVGElementWithoutAttrs": () => (/* binding */ createSVGElementWithoutAttrs),
/* harmony export */   "createTextNode": () => (/* binding */ createTextNode),
/* harmony export */   "insertAfter": () => (/* binding */ insertAfter),
/* harmony export */   "registerEvent": () => (/* binding */ registerEvent),
/* harmony export */   "removeAttribute": () => (/* binding */ removeAttribute),
/* harmony export */   "removeEvent": () => (/* binding */ removeEvent),
/* harmony export */   "replaceChildren": () => (/* binding */ replaceChildren),
/* harmony export */   "setAttribute": () => (/* binding */ setAttribute),
/* harmony export */   "setText": () => (/* binding */ setText)
/* harmony export */ });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/util/type.js");

function setText($element, text) {
  if (!(0,_type__WEBPACK_IMPORTED_MODULE_0__.isString)(text)) {
    text = JSON.stringify(text);
  }
  $element.textContent = text;
}
function createTextNode(text = "") {
  return document.createTextNode((0,_type__WEBPACK_IMPORTED_MODULE_0__.isString)(text) ? text : JSON.stringify(text));
}
function createFragment(children) {
  const f = document.createDocumentFragment();
  children?.forEach((n) => {
    f.appendChild((0,_type__WEBPACK_IMPORTED_MODULE_0__.isString)(n) ? document.createTextNode(n) : n);
  });
  return f;
}
function appendChildren($parent, children) {
  $parent.appendChild(children.length > 1 ? createFragment(children) : (0,_type__WEBPACK_IMPORTED_MODULE_0__.isString)(children[0]) ? createTextNode(children[0]) : children[0]);
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
  } else {
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
  return _createEl(document.createElementNS("http://www.w3.org/2000/svg", tag), attrs, children);
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
  } else {
    $parent.insertBefore(newNode, rn);
  }
}
function addEvent($element, eventName, handler, capture) {
  (0,_type__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(capture) && (capture = eventName.startsWith("touch") ? {
    capture: false,
    passive: true
  } : false);
  $element.addEventListener(eventName, handler, capture);
}
function removeEvent($element, eventName, handler) {
  $element.removeEventListener(eventName, handler);
}
function registerEvent($element, eventName, handler, capture) {
  addEvent($element, eventName, handler, capture);
  return function deregister() {
    removeEvent($element, eventName, handler);
  };
}


//# sourceMappingURL=dom.js.map

/***/ }),

/***/ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/util/index.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/util/index.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addEvent": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.addEvent),
/* harmony export */   "appendChildren": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.appendChildren),
/* harmony export */   "arrayEqual": () => (/* reexport safe */ _array__WEBPACK_IMPORTED_MODULE_1__.arrayEqual),
/* harmony export */   "arrayPushIfNotExist": () => (/* reexport safe */ _array__WEBPACK_IMPORTED_MODULE_1__.arrayPushIfNotExist),
/* harmony export */   "arrayRemove": () => (/* reexport safe */ _array__WEBPACK_IMPORTED_MODULE_1__.arrayRemove),
/* harmony export */   "clearImmediate": () => (/* reexport safe */ _setimm__WEBPACK_IMPORTED_MODULE_3__.clearImmediate),
/* harmony export */   "createElement": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.createElement),
/* harmony export */   "createElementWithChild": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.createElementWithChild),
/* harmony export */   "createElementWithoutAttrs": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.createElementWithoutAttrs),
/* harmony export */   "createFragment": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.createFragment),
/* harmony export */   "createSVGElement": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.createSVGElement),
/* harmony export */   "createSVGElementWithoutAttrs": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.createSVGElementWithoutAttrs),
/* harmony export */   "createTextNode": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.createTextNode),
/* harmony export */   "disableWarning": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_2__.disableWarning),
/* harmony export */   "insertAfter": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.insertAfter),
/* harmony export */   "isArray": () => (/* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_0__.isArray),
/* harmony export */   "isBoolean": () => (/* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_0__.isBoolean),
/* harmony export */   "isFunction": () => (/* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_0__.isFunction),
/* harmony export */   "isNumber": () => (/* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_0__.isNumber),
/* harmony export */   "isObject": () => (/* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_0__.isObject),
/* harmony export */   "isPromise": () => (/* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_0__.isPromise),
/* harmony export */   "isString": () => (/* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_0__.isString),
/* harmony export */   "isUndefined": () => (/* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_0__.isUndefined),
/* harmony export */   "registerEvent": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.registerEvent),
/* harmony export */   "removeAttribute": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.removeAttribute),
/* harmony export */   "removeEvent": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.removeEvent),
/* harmony export */   "replaceChildren": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.replaceChildren),
/* harmony export */   "setAttribute": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.setAttribute),
/* harmony export */   "setImmediate": () => (/* reexport safe */ _setimm__WEBPACK_IMPORTED_MODULE_3__.setImmediate),
/* harmony export */   "setText": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.setText),
/* harmony export */   "typeOf": () => (/* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_0__.typeOf),
/* harmony export */   "uid": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_2__.uid),
/* harmony export */   "warn": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_2__.warn)
/* harmony export */ });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/util/type.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/util/array.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/util/common.js");
/* harmony import */ var _setimm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setimm */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/util/setimm.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/util/dom.js");






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/util/setimm.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/util/setimm.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearImmediate": () => (/* binding */ clearImmediate),
/* harmony export */   "setImmediate": () => (/* binding */ setImmediate)
/* harmony export */ });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/util/type.js");

let autoIncrement = 0;
let nextHandle = 1;
let tasksByHandle;
let currentlyRunningATask = false;
let registerImmediate;
function setImmediateFallback(callback) {
  if (!(0,_type__WEBPACK_IMPORTED_MODULE_0__.isFunction)(callback) || arguments.length > 1) {
    throw new Error("setImmediate require callback function.");
  }
  tasksByHandle.set(nextHandle, callback);
  registerImmediate(nextHandle);
  return nextHandle++;
}
function clearImmediateFallback(handle) {
  tasksByHandle.delete(handle);
}
function runIfPresent(handle) {
  if (currentlyRunningATask) {
    setTimeout(runIfPresent, 0, handle);
    return;
  }
  const callback = tasksByHandle.get(handle);
  if (!callback)
    return;
  currentlyRunningATask = true;
  try {
    callback();
  } finally {
    clearImmediateFallback(handle);
    currentlyRunningATask = false;
  }
}
const win = typeof window === "undefined" ? globalThis : window;
if ((0,_type__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(win.setImmediate)) {
  tasksByHandle = /* @__PURE__ */ new Map();
  const messagePrefix = "setImmediate$" + (autoIncrement++).toString(32) + "$";
  win.addEventListener("message", (event) => {
    if (event.source === window && (0,_type__WEBPACK_IMPORTED_MODULE_0__.isString)(event.data) && event.data.startsWith(messagePrefix)) {
      runIfPresent(Number(event.data.slice(messagePrefix.length)));
    }
  }, false);
  registerImmediate = function(handle) {
    win.postMessage(messagePrefix + handle, "*");
  };
}
const setImmediate = win.setImmediate || setImmediateFallback;
const clearImmediate = win.clearImmediate || clearImmediateFallback;


//# sourceMappingURL=setimm.js.map

/***/ }),

/***/ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/util/type.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/util/type.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isArray": () => (/* binding */ isArray),
/* harmony export */   "isBoolean": () => (/* binding */ isBoolean),
/* harmony export */   "isFunction": () => (/* binding */ isFunction),
/* harmony export */   "isNumber": () => (/* binding */ isNumber),
/* harmony export */   "isObject": () => (/* binding */ isObject),
/* harmony export */   "isPromise": () => (/* binding */ isPromise),
/* harmony export */   "isString": () => (/* binding */ isString),
/* harmony export */   "isUndefined": () => (/* binding */ isUndefined),
/* harmony export */   "typeOf": () => (/* binding */ typeOf)
/* harmony export */ });
function typeOf(v) {
  return typeof v;
}
function isObject(v) {
  return v !== null && typeOf(v) === "object";
}
function isString(v) {
  return typeOf(v) === "string";
}
function isNumber(v) {
  return typeOf(v) === "number" && !Number.isNaN(v) && Number.isFinite(v);
}
function isUndefined(v) {
  return typeOf(v) === "undefined";
}
function isArray(v) {
  return Array.isArray(v);
}
function isBoolean(v) {
  return typeof v === "boolean" || v instanceof Boolean;
}
function isFunction(v) {
  return typeOf(v) === "function";
}
function isPromise(obj) {
  return isObject(obj) && isFunction(obj.then);
}


//# sourceMappingURL=type.js.map

/***/ }),

/***/ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/vm/common.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/vm/common.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$$": () => (/* binding */ $$),
/* harmony export */   "addParent": () => (/* binding */ addParent),
/* harmony export */   "getPropertyName": () => (/* binding */ getPropertyName),
/* harmony export */   "isInnerObj": () => (/* binding */ isInnerObj),
/* harmony export */   "isPublicProperty": () => (/* binding */ isPublicProperty),
/* harmony export */   "isViewModel": () => (/* binding */ isViewModel),
/* harmony export */   "parsePropertyPath": () => (/* binding */ parsePropertyPath),
/* harmony export */   "removeParent": () => (/* binding */ removeParent),
/* harmony export */   "shiftParent": () => (/* binding */ shiftParent)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/util/index.js");

const $$ = Symbol("$$");
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
function getPropertyName(v) {
  if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isString)(v)) {
    return v;
  }
  if (v === null) {
    return "null";
  }
  if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(v)) {
    return "undefined";
  }
  return v.toString();
}
function parsePropertyPath(propertyPath) {
  return (0,_util__WEBPACK_IMPORTED_MODULE_0__.isString)(propertyPath) ? propertyPath.indexOf(".") > 0 ? propertyPath.split(".") : [propertyPath] : (0,_util__WEBPACK_IMPORTED_MODULE_0__.isArray)(propertyPath) ? propertyPath : [propertyPath];
}
function addParent(child, parent, property) {
  if (!child.__parents) {
    child.__parents = [];
  }
  child.__parents.push({
    core: parent,
    prop: property
  });
}
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

/***/ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/vm/core.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/vm/core.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewModelCoreImpl": () => (/* binding */ ViewModelCoreImpl)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/util/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/vm/common.js");
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/vm/node.js");
/* harmony import */ var _notify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notify */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/vm/notify.js");




class ViewModelCoreImpl {
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
      enumerable: false
    });
  }
  __watch(propertyPath, handler, related) {
    propertyPath = (0,_common__WEBPACK_IMPORTED_MODULE_1__.parsePropertyPath)(propertyPath);
    const dbStarIdx = propertyPath.indexOf("**");
    if (dbStarIdx >= 0 && dbStarIdx !== propertyPath.length - 1) {
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
      handlers.forEach(_notify__WEBPACK_IMPORTED_MODULE_3__.handleCancel);
      handlers.length = 0;
    } else {
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
    parents?.forEach((ps) => {
      const vm = ps.core;
      if (!vm) {
        console.error("dev-warn-unexpected: parent of ViewModelCore has been destroied but not unlink.");
        return;
      }
      vm.__notify([ps.prop].concat(propertyPath), immediate);
    });
  }
  __destroy() {
    this.__notifiable = false;
    this.__parents = null;
    (0,_node__WEBPACK_IMPORTED_MODULE_2__.loopClearNode)(this);
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
    delete target[_common__WEBPACK_IMPORTED_MODULE_1__.$$];
    this.target = null;
  }
  __addRelated(origin, propertyPath, handler) {
    if (!this.__related)
      this.__related = /* @__PURE__ */ new Map();
    let hook = this.__related.get(origin);
    if (!hook) {
      this.__related.set(origin, hook = []);
    }
    hook.push({
      prop: propertyPath,
      handler
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
      return handler === it.handler && (isPropArray ? (0,_util__WEBPACK_IMPORTED_MODULE_0__.arrayEqual)(propertyPath, it.prop) : propertyPath === it.prop);
    });
    if (i >= 0) {
      hook.splice(i, 1);
    }
  }
}


//# sourceMappingURL=core.js.map

/***/ }),

/***/ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/vm/index.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/vm/index.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$$": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.$$),
/* harmony export */   "ViewModelCoreImpl": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.ViewModelCoreImpl),
/* harmony export */   "addParent": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.addParent),
/* harmony export */   "createAttributes": () => (/* reexport safe */ _proxy__WEBPACK_IMPORTED_MODULE_4__.createAttributes),
/* harmony export */   "createComponent": () => (/* reexport safe */ _proxy__WEBPACK_IMPORTED_MODULE_4__.createComponent),
/* harmony export */   "createViewModel": () => (/* reexport safe */ _proxy__WEBPACK_IMPORTED_MODULE_4__.createViewModel),
/* harmony export */   "deleteNode": () => (/* reexport safe */ _node__WEBPACK_IMPORTED_MODULE_2__.deleteNode),
/* harmony export */   "getPropertyName": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.getPropertyName),
/* harmony export */   "handleCancel": () => (/* reexport safe */ _notify__WEBPACK_IMPORTED_MODULE_3__.handleCancel),
/* harmony export */   "handleOnce": () => (/* reexport safe */ _notify__WEBPACK_IMPORTED_MODULE_3__.handleOnce),
/* harmony export */   "isInnerObj": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.isInnerObj),
/* harmony export */   "isPublicProperty": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.isPublicProperty),
/* harmony export */   "isViewModel": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.isViewModel),
/* harmony export */   "loopClearNode": () => (/* reexport safe */ _node__WEBPACK_IMPORTED_MODULE_2__.loopClearNode),
/* harmony export */   "loopCreateNode": () => (/* reexport safe */ _node__WEBPACK_IMPORTED_MODULE_2__.loopCreateNode),
/* harmony export */   "loopGetNode": () => (/* reexport safe */ _node__WEBPACK_IMPORTED_MODULE_2__.loopGetNode),
/* harmony export */   "loopHandle": () => (/* reexport safe */ _notify__WEBPACK_IMPORTED_MODULE_3__.loopHandle),
/* harmony export */   "loopNotify": () => (/* reexport safe */ _notify__WEBPACK_IMPORTED_MODULE_3__.loopNotify),
/* harmony export */   "parsePropertyPath": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.parsePropertyPath),
/* harmony export */   "removeParent": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.removeParent),
/* harmony export */   "shiftParent": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.shiftParent),
/* harmony export */   "unwatch": () => (/* reexport safe */ _proxy__WEBPACK_IMPORTED_MODULE_4__.unwatch),
/* harmony export */   "vm": () => (/* reexport safe */ _proxy__WEBPACK_IMPORTED_MODULE_4__.vm),
/* harmony export */   "watch": () => (/* reexport safe */ _proxy__WEBPACK_IMPORTED_MODULE_4__.watch)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/vm/common.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/vm/core.js");
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/vm/node.js");
/* harmony import */ var _notify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notify */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/vm/notify.js");
/* harmony import */ var _proxy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./proxy */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/vm/proxy.js");






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/vm/node.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/vm/node.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteNode": () => (/* binding */ deleteNode),
/* harmony export */   "loopClearNode": () => (/* binding */ loopClearNode),
/* harmony export */   "loopCreateNode": () => (/* binding */ loopCreateNode),
/* harmony export */   "loopGetNode": () => (/* binding */ loopGetNode)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/vm/common.js");
/* harmony import */ var _notify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notify */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/vm/notify.js");


function loopCreateNode(parentNode, propertyPath, level = 0) {
  const propertyName = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getPropertyName)(propertyPath[level]);
  if (!parentNode.__listeners) {
    parentNode.__listeners = /* @__PURE__ */ new Map();
  }
  let node = parentNode.__listeners.get(propertyName);
  if (!node) {
    node = {
      __parent: parentNode,
      __property: propertyName,
      __handlers: null,
      __listeners: null
    };
    parentNode.__listeners.set(propertyName, node);
  }
  if (propertyPath.length - 1 === level) {
    return node;
  } else {
    return loopCreateNode(node, propertyPath, level + 1);
  }
}
function loopGetNode(parentNode, propertyPath, level = 0) {
  const propertyName = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getPropertyName)(propertyPath[level]);
  if (!propertyName) {
    return null;
  }
  const node = parentNode.__listeners?.get(propertyName);
  if (!node) {
    return null;
  }
  if (propertyPath.length - 1 === level) {
    return node;
  } else {
    return loopGetNode(node, propertyPath, level + 1);
  }
}
function deleteNode(node) {
  if (node?.__handlers && node.__handlers.length > 0 || node.__listeners && node.__listeners.size > 0) {
    return null;
  }
  const parent = node.__parent;
  const property = node.__property;
  node.__parent = null;
  parent.__listeners.delete(property);
  return parent;
}
function loopClearNode(node) {
  const listeners = node.__listeners;
  if (listeners) {
    listeners.forEach((sn) => loopClearNode(sn));
    node.__listeners = null;
  }
  const handlers = node.__handlers;
  if (handlers) {
    handlers.forEach(_notify__WEBPACK_IMPORTED_MODULE_1__.handleCancel);
    node.__handlers = null;
  }
  node.__parent = null;
}


//# sourceMappingURL=node.js.map

/***/ }),

/***/ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/vm/notify.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/vm/notify.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleCancel": () => (/* binding */ handleCancel),
/* harmony export */   "handleOnce": () => (/* binding */ handleOnce),
/* harmony export */   "loopHandle": () => (/* binding */ loopHandle),
/* harmony export */   "loopNotify": () => (/* binding */ loopNotify)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/util/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/vm/common.js");


const handleTasks = /* @__PURE__ */ new Map();
function handleCancel(handler) {
  const t = handleTasks.get(handler);
  if (t) {
    (0,_util__WEBPACK_IMPORTED_MODULE_0__.clearImmediate)(t.immediate);
    handleTasks.delete(handler);
  }
}
function handleOnce(handler, propertyPath) {
  if (handleTasks.has(handler)) {
    return;
  }
  const imm = (0,_util__WEBPACK_IMPORTED_MODULE_0__.setImmediate)(() => {
    const arg = handleTasks.get(handler);
    try {
      handler(arg.propertyPath);
    } finally {
      handleTasks.delete(handler);
    }
  });
  handleTasks.set(handler, {
    immediate: imm,
    propertyPath
  });
}
function loopHandle(propertyPath, node, immediate) {
  const handlers = node.__handlers;
  handlers?.forEach((handler) => {
    if (immediate) {
      handler(propertyPath);
    } else {
      handleOnce(handler, propertyPath);
    }
  });
  const listeners = node.__listeners;
  listeners?.forEach((c) => {
    loopHandle(propertyPath, c, immediate);
  });
}
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
      loopHandle(propertyPath, node, immediate);
    } else {
      loopNotify(node, propertyPath, immediate, level + 1);
    }
  }
  node = listeners.get("*");
  if (node) {
    if (propertyPath.length - 1 === level) {
      loopHandle(propertyPath, node, true);
    } else {
      loopNotify(node, propertyPath, immediate, level + 1);
    }
  }
  node = listeners.get("**");
  if (node) {
    loopHandle(propertyPath, node, true);
  }
}


//# sourceMappingURL=notify.js.map

/***/ }),

/***/ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/vm/proxy.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/vm/proxy.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAttributes": () => (/* binding */ createAttributes),
/* harmony export */   "createComponent": () => (/* binding */ createComponent),
/* harmony export */   "createViewModel": () => (/* binding */ createViewModel),
/* harmony export */   "unwatch": () => (/* binding */ unwatch),
/* harmony export */   "vm": () => (/* binding */ vm),
/* harmony export */   "watch": () => (/* binding */ watch)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/util/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/vm/common.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/vm/core.js");



function getSetterFnIfPropIsSetter(obj, prop) {
  let map = obj[_common__WEBPACK_IMPORTED_MODULE_1__.$$].__setters;
  if (!map) {
    obj[_common__WEBPACK_IMPORTED_MODULE_1__.$$].__setters = map = /* @__PURE__ */ new Map();
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
    clazz = Object.getPrototypeOf(clazz);
    while (clazz?.prototype) {
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
  } else {
    return map.get(prop);
  }
}
function notifyPropChanged(vm2, prop) {
  vm2[_common__WEBPACK_IMPORTED_MODULE_1__.$$].__notify(prop);
}
function __propSetHandler(target, prop, value, setFn, assertVM = true) {
  if (!(0,_common__WEBPACK_IMPORTED_MODULE_1__.isPublicProperty)(prop)) {
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
  const setterFn = getSetterFnIfPropIsSetter(target, prop);
  if (setterFn) {
    setterFn.call(target[_common__WEBPACK_IMPORTED_MODULE_1__.$$].proxy, value);
  } else {
    target[prop] = value;
  }
}
function objectPropSetHandler(target, prop, value) {
  if (!(_common__WEBPACK_IMPORTED_MODULE_1__.$$ in target)) {
    return true;
  }
  return __propSetHandler(target, prop, value, __objectPropSetFn);
}
function attrsPropSetHandler(target, prop, value) {
  if (!(_common__WEBPACK_IMPORTED_MODULE_1__.$$ in target)) {
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
    notifyPropChanged(target, i);
  }
}
function arrayLengthSetHandler(target, value) {
  if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isNumber)(value)) {
    throw new Error("bad argument. array length must be validate number.");
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
  if (oldLen !== value) {
    notifyPropChanged(target, "length");
    arrayNotifyItems(target, oldLen, value);
  }
  return true;
}
function arrayPropSetHandler(target, prop, value) {
  if (!(_common__WEBPACK_IMPORTED_MODULE_1__.$$ in target)) {
    return true;
  }
  if (prop === "length") {
    return arrayLengthSetHandler(target, value);
  }
  return __propSetHandler(target, prop, value, __objectPropSetFn);
}
const ObjectProxyHandler = {
  set: objectPropSetHandler
};
const PromiseProxyHandler = {
  get(target, prop) {
    if (prop === "then" || prop === "catch") {
      const v = target[prop];
      return function(...args) {
        return v.call(target, ...args);
      };
    } else {
      return target[prop];
    }
  },
  set: objectPropSetHandler
};
function _arrayReverseSort(target, fn) {
  target.forEach((it, i) => {
    if ((0,_common__WEBPACK_IMPORTED_MODULE_1__.isViewModel)(it)) {
      (0,_common__WEBPACK_IMPORTED_MODULE_1__.addParent)(it[_common__WEBPACK_IMPORTED_MODULE_1__.$$], target[_common__WEBPACK_IMPORTED_MODULE_1__.$$], i);
    }
  });
  fn();
  target.forEach((it, i) => {
    if ((0,_common__WEBPACK_IMPORTED_MODULE_1__.isViewModel)(it)) {
      (0,_common__WEBPACK_IMPORTED_MODULE_1__.removeParent)(it[_common__WEBPACK_IMPORTED_MODULE_1__.$$], target[_common__WEBPACK_IMPORTED_MODULE_1__.$$], i);
    }
  });
  arrayNotifyItems(target, 0, target.length);
  return target[_common__WEBPACK_IMPORTED_MODULE_1__.$$].proxy;
}
function wrapSubArray(arr, wrapEachItem = false) {
  const rtn = wrapProxy(arr, true);
  arr.forEach((it, i) => {
    if ((0,_common__WEBPACK_IMPORTED_MODULE_1__.isViewModel)(it)) {
      (0,_common__WEBPACK_IMPORTED_MODULE_1__.addParent)(it[_common__WEBPACK_IMPORTED_MODULE_1__.$$], arr[_common__WEBPACK_IMPORTED_MODULE_1__.$$], i);
    } else if (wrapEachItem) {
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
    } else {
      return true;
    }
  } else {
    return false;
  }
}
const ArrayFns = {
  splice(target, idx, delCount, ...args) {
    if (idx < 0)
      idx = 0;
    args.forEach((arg, i) => {
      if (_argAssert(arg, "splice")) {
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
      notifyPropChanged(target, "length");
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
    notifyPropChanged(target, "length");
    for (let i = 0; i < target.length + 1; i++) {
      notifyPropChanged(target, i);
    }
    return el;
  },
  unshift(target, ...args) {
    if (args.length === 0)
      return target.unshift();
    args.forEach((arg, i) => {
      if (_argAssert(arg, "unshift")) {
        (0,_common__WEBPACK_IMPORTED_MODULE_1__.addParent)(arg[_common__WEBPACK_IMPORTED_MODULE_1__.$$], target[_common__WEBPACK_IMPORTED_MODULE_1__.$$], i);
      }
    });
    _arrayShiftOrUnshiftProp(target, args.length);
    const rtn = target.unshift(...args);
    notifyPropChanged(target, "length");
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
    notifyPropChanged(target, "length");
    notifyPropChanged(target, target.length);
    return el;
  },
  push(target, ...args) {
    if (args.length === 0)
      return 0;
    args.forEach((arg, i) => {
      if (_argAssert(arg, "push")) {
        (0,_common__WEBPACK_IMPORTED_MODULE_1__.addParent)(arg[_common__WEBPACK_IMPORTED_MODULE_1__.$$], target[_common__WEBPACK_IMPORTED_MODULE_1__.$$], target.length + i);
      }
    });
    const rtn = target.push(...args);
    notifyPropChanged(target, "length");
    for (let i = target.length - args.length; i < target.length; i++) {
      notifyPropChanged(target, i);
    }
    return rtn;
  },
  fill(target, v) {
    _argAssert(v, "fill");
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
    return _arrayReverseSort(target, () => target.reverse());
  },
  sort(target, fn) {
    return _arrayReverseSort(target, () => target.sort(fn));
  },
  concat(target, arr) {
    _argAssert(arr, "concat");
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
  }
};
const ArrayProxyHandler = {
  get(target, prop) {
    if (prop in ArrayFns) {
      const fn = ArrayFns[prop];
      return function(...args) {
        return fn(target, ...args);
      };
    } else {
      return target[prop];
    }
  },
  set: arrayPropSetHandler
};
function wrapProxy(target, isArr) {
  const vmCore = new _core__WEBPACK_IMPORTED_MODULE_2__.ViewModelCoreImpl(target);
  return vmCore.proxy = new Proxy(target, isArr ? ArrayProxyHandler : (0,_util__WEBPACK_IMPORTED_MODULE_0__.isPromise)(target) ? PromiseProxyHandler : ObjectProxyHandler);
}
function wrapProp(parent, child, property) {
  if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isObject)(child) || (0,_common__WEBPACK_IMPORTED_MODULE_1__.isInnerObj)(child)) {
    return;
  }
  if (!(_common__WEBPACK_IMPORTED_MODULE_1__.$$ in child)) {
    parent[property] = child = createViewModel(child);
  }
  (0,_common__WEBPACK_IMPORTED_MODULE_1__.addParent)(child[_common__WEBPACK_IMPORTED_MODULE_1__.$$], parent[_common__WEBPACK_IMPORTED_MODULE_1__.$$], property);
}
function createViewModel(target) {
  if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isObject)(target)) {
    if ((0,_common__WEBPACK_IMPORTED_MODULE_1__.isInnerObj)(target) || _common__WEBPACK_IMPORTED_MODULE_1__.$$ in target) {
      return target;
    }
    const isArr = (0,_util__WEBPACK_IMPORTED_MODULE_0__.isArray)(target);
    const rtn = wrapProxy(target, isArr);
    if (isArr) {
      for (let i = 0; i < target.length; i++) {
        wrapProp(target, target[i], i);
      }
    } else {
      for (const k in target) {
        if ((0,_common__WEBPACK_IMPORTED_MODULE_1__.isPublicProperty)(k)) {
          wrapProp(target, target[k], k);
        }
      }
    }
    return rtn;
  } else {
    return target;
  }
}
function createAttributes(attributes) {
  const vmCore = new _core__WEBPACK_IMPORTED_MODULE_2__.ViewModelCoreImpl(attributes);
  vmCore.__notifiable = false;
  return vmCore.proxy = new Proxy(attributes, {
    set: attrsPropSetHandler
  });
}
function createComponent(component) {
  if (_common__WEBPACK_IMPORTED_MODULE_1__.$$ in component) {
    throw new Error("component has alreay been wrapped.");
  }
  const vmCore = new _core__WEBPACK_IMPORTED_MODULE_2__.ViewModelCoreImpl(component);
  vmCore.__notifiable = false;
  return vmCore.proxy = new Proxy(component, {
    set: componentPropSetHandler
  });
}
function vm(target) {
  if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isObject)(target)) {
    throw new Error("vm() target must be object or array.");
  }
  return createViewModel(target);
}
function watch(vm2, propertyPath, handler) {
  vm2[_common__WEBPACK_IMPORTED_MODULE_1__.$$].__watch(propertyPath, handler);
}
function unwatch(vm2, propertyPath, handler) {
  vm2[_common__WEBPACK_IMPORTED_MODULE_1__.$$].__unwatch(propertyPath, handler);
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "./node_modules/.pnpm/registry.npmmirror.com+jinge@3.2.0/node_modules/jinge/lib/index.js");
/* harmony import */ var _app_c__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.c */ "./app.c.js");




(0,jinge__WEBPACK_IMPORTED_MODULE_0__.bootstrap)(_app_c__WEBPACK_IMPORTED_MODULE_1__["default"], document.getElementById('root-app'));

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map