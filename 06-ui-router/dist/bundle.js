/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app.c.js":
/*!******************!*\
  !*** ./app.c.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge/lib/index.js");
/* harmony import */ var _uirouter_visualizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uirouter/visualizer */ "./node_modules/.pnpm/registry.npmmirror.com+@uirouter+visualizer@7.2.1_@uirouter+core@6.1.0/node_modules/@uirouter/visualizer/_bundles/ui-router-visualizer.esm.js");
/* harmony import */ var _app_c_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.c.html */ "./app.c.html");
/* harmony import */ var _components_about_c__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/about.c */ "./components/about.c.js");
/* harmony import */ var _components_hello_c__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/hello.c */ "./components/hello.c.js");
/* harmony import */ var _components_people_c__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/people.c */ "./components/people.c.js");
/* harmony import */ var _components_person_c__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/person.c */ "./components/person.c.js");
/* harmony import */ var _components_redirect_c__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/redirect.c */ "./components/redirect.c.js");
/* harmony import */ var _service_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/api */ "./service/api.js");












const uiStates = [{
  name: 'hello',
  url: '/hello',
  component: _components_hello_c__WEBPACK_IMPORTED_MODULE_4__["default"]
}, {
  name: 'about',
  url: '/about',
  component: _components_about_c__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  name: 'redirect',
  url: '/redirect',
  redirectTo: 'redirect.detail'
}, {
  name: 'redirect.detail',
  url: '/detail',
  component: _components_redirect_c__WEBPACK_IMPORTED_MODULE_7__.RedirectDetail
}, {
  name: 'people',
  url: '/people',
  component: _components_people_c__WEBPACK_IMPORTED_MODULE_5__["default"],
  resolve: {
    people: () => (0,_service_api__WEBPACK_IMPORTED_MODULE_8__.getAllPersons)().then(result => (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)(result))
  }
}, {
  name: 'people.person',
  url: '/:personId',
  component: _components_person_c__WEBPACK_IMPORTED_MODULE_6__["default"],
  /*
   * resolve can be object or array.
   * if it's array, same as usage of @uirouter/react.
   *   see: https://ui-router.github.io/react/tutorial/hellosolarsystem
   * if it's object, it will be convert to array.
   */
  resolve: {
    someFn: () => 'hello2',
    someFnPromise: () => new Promise(res => setTimeout(() => res('hello3'), 1000)),
    /* 
     * if resolve value is array, last item must be function, 
     * non-last items are deps. see https://ui-router.github.io/react/tutorial/hellosolarsystem
     */
    person: ['$transition$', 'people', (trans, people) => {
      console.log('inherited resove people:', people);
      const id = trans.params().personId;
      return (0,_service_api__WEBPACK_IMPORTED_MODULE_8__.getPersonById)(id).then(result => (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)(result));
    }]
  }
}];

class App extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  static template = _app_c_html__WEBPACK_IMPORTED_MODULE_2__["default"];
  constructor(args) {
    super(args);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    _jg0._states = uiStates;
    _jg0._plugins = [_uirouter_visualizer__WEBPACK_IMPORTED_MODULE_1__.Visualizer];
    _jg0.newTab = false;
  }
}


/***/ }),

/***/ "./components/about.c.js":
/*!*******************************!*\
  !*** ./components/about.c.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ About)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge/lib/index.js");
/* harmony import */ var _about_c_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.c.html */ "./components/about.c.html");


class About extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  static get template() {
    return _about_c_html__WEBPACK_IMPORTED_MODULE_1__["default"];
  }
}

/***/ }),

/***/ "./components/hello.c.js":
/*!*******************************!*\
  !*** ./components/hello.c.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Hello)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge/lib/index.js");
/* harmony import */ var _hello_c_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hello.c.html */ "./components/hello.c.html");


class Hello extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  static get template() {
    return _hello_c_html__WEBPACK_IMPORTED_MODULE_1__["default"];
  }
  __afterRender() {
    const router = this.__getContext('ui-router');
    const transition = router.transitionService;

    this._des = transition.onExit({
      from: 'hello.**'
    }, trans => {
      /*
       * 如果直接使用浏览器前进后退，或者直接在浏览器地址栏手动改变 url，
       * 会导致虽然跳转能被阻止，但仍然在历史中产生了记录，从而无法再后退。
       * 
       * TODO: track bug of ui-router v1.0
       * https://stackoverflow.com/questions/44896070/ui-router-browser-back-button-changes-url-even-abort-transition-is-called
       * https://github.com/angular-ui/ui-router/issues/3416
       */
      return confirm('确认要退出？');
    });
  }
  __beforeDestroy() {
    this._des();
    console.log('Hello component will be destroy');
  }
}

/***/ }),

/***/ "./components/people.c.js":
/*!********************************!*\
  !*** ./components/people.c.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ People)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge/lib/index.js");
/* harmony import */ var _people_c_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./people.c.html */ "./components/people.c.html");


class People extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;const f1_jg0402 = () => {
    _jg0.people = attrs.people; }; f1_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("people", f1_jg0402);
  }
  static get template() {
    return _people_c_html__WEBPACK_IMPORTED_MODULE_1__["default"];
  }
}

/***/ }),

/***/ "./components/person.c.js":
/*!********************************!*\
  !*** ./components/person.c.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Person)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge/lib/index.js");
/* harmony import */ var _person_c_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./person.c.html */ "./components/person.c.html");


class Person extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  static get template() {
    return _person_c_html__WEBPACK_IMPORTED_MODULE_1__["default"];
  }
  constructor(attrs) {
    console.log('attrs passed from ui-router resolve:', attrs.someConst, attrs.someFn, attrs.someFnPromise);
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;const f2_jg0402 = () => {
    _jg0.person = attrs.person; }; f2_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("person", f2_jg0402);
  }
  __beforeDestroy() {
    console.log(`person: ${this.person.id} will be destroy.`);
  }
}

/***/ }),

/***/ "./components/redirect.c.js":
/*!**********************************!*\
  !*** ./components/redirect.c.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RedirectDetail: () => (/* binding */ RedirectDetail)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge/lib/index.js");
/* harmony import */ var _redirect_c_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redirect.c.html */ "./components/redirect.c.html");


class RedirectDetail extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  static get template() {
    return _redirect_c_html__WEBPACK_IMPORTED_MODULE_1__["default"];
  }
}

/***/ }),

/***/ "./app.c.html":
/*!********************!*\
  !*** ./app.c.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge/lib/index.js");
/* harmony import */ var jinge_ui_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-ui-router */ "../../jinge-ui-router/lib/index.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {  
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
      "h2",
      `UI-Router`
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })(),
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
      "p",
      `jinge framework does't implement router. we use ui-router.`
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })(),
  ...(() => {
    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
        debugName: "attrs_of_<ui-router>",
        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
        slots: {
          'default': function(component) {  
            return [
            (() => {
              const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                "div",
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  "div",
                  {
                    style: `border-bottom: 1px solid blue; margin-bottom: 10px;`
                  },
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "h3",
                    `Top Menu Area`
                  ),
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "p",
                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                      "label",
                      `Open new tab:`
                    ),
                    (() => {
                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                        "input",
                        {
                          type: `checkbox`
                        },
                      );
                      const fn_0 = () => {
                        el.checked = !!(vm_0.newTab);
                      };
                      fn_0();
                      vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["newTab"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.addEvent)(el, 'change', function(...args) {
                        vm_0.newTab = args[0].target.checked
                      });
                      return el;
                    })()
                  ),
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "p",
                    ...(() => {
                      const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                        [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                          debugName: "attrs_of_<ui-sref>",
                          context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                        },
                        target: undefined,
                        class: `xx`,
                        style: `margin-right: 8px;`,
                        text: `Hello`,
                        to: `hello`,
                        active: `active`
                      });
                      const fn_0 = () => {
                        attrs.target = vm_0.newTab ? '_black' : '_self';
                      };
                      fn_0();
                      vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["newTab"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                      const el = jinge_ui_router__WEBPACK_IMPORTED_MODULE_1__.UISrefComponent.create(attrs);
                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                      return el.__render();
                    })(),
                    ...(() => {
                      const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                        [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                          debugName: "attrs_of_<ui-sref>",
                          context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                          slots: {
                            'default': function(component) {  
                              return [
                              (() => {
                                const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                                  "a",
                                  {
                                    style: `margin: 20px;`
                                  },
                                  `About`
                                );
                                component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                return el;
                              })()
                              ];
                            }
                          }
                        },
                        target: undefined,
                        to: `about`,
                        active: `active`
                      });
                      const fn_0 = () => {
                        attrs.target = vm_0.newTab ? '_blank' : '_self';
                      };
                      fn_0();
                      vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["newTab"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                      const el = jinge_ui_router__WEBPACK_IMPORTED_MODULE_1__.UISrefComponent.create(attrs);
                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                      return el.__render();
                    })(),
                    ...(() => {
                      const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                        [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                          debugName: "attrs_of_<ui-sref>",
                          context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                        },
                        to: `redirect`,
                        active: `active`,
                        text: `Redirect`
                      });
                      const el = jinge_ui_router__WEBPACK_IMPORTED_MODULE_1__.UISrefComponent.create(attrs);
                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                      return el.__render();
                    })(),
                    ...(() => {
                      const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                        [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                          debugName: "attrs_of_<ui-sref>",
                          context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                          slots: {
                            'default': function(component) {  
                              return [
                              (() => {
                                const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                                  "button",
                                  `People`
                                );
                                component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                return el;
                              })()
                              ];
                            }
                          }
                        },
                        target: undefined,
                        to: `people`,
                        active: `active`
                      });
                      const fn_0 = () => {
                        attrs.target = vm_0.newTab ? '_blank' : '_self';
                      };
                      fn_0();
                      vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["newTab"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                      const el = jinge_ui_router__WEBPACK_IMPORTED_MODULE_1__.UISrefComponent.create(attrs);
                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                      return el.__render();
                    })(),
                    ...(() => {
                      const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                        [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                          debugName: "attrs_of_<ui-sref>",
                          context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                        },
                        style: `margin-left: 8px;`,
                        text: `Person-2`,
                        to: `people.person`,
                        params: (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)({personId: '002'}),
                        active: `active`
                      });
                      const el = jinge_ui_router__WEBPACK_IMPORTED_MODULE_1__.UISrefComponent.create(attrs);
                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                      return el.__render();
                    })(),
                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                      "a",
                      {
                        style: `margin-left: 20px;`,
                        href: `#/about`
                      },
                      `bug-test`
                    )
                  )
                ),
                (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                  "div",
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "h3",
                    `Content Area`
                  ),
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    "div",
                    {
                      class: `content`
                    },
                    ...(() => {
                      const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                        [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                          debugName: "attrs_of_<ui-view>",
                          context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                        },
                      });
                      const el = jinge_ui_router__WEBPACK_IMPORTED_MODULE_1__.UIViewComponent.create(attrs);
                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                      return el.__render();
                    })()
                  )
                )
              );
              component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
              return el;
            })()
            ];
          }
        }
      },
      router: `hash`,
      states: vm_0._states,
      plugins: vm_0._plugins,
      otherwise: `hello`
    });
    const el = jinge_ui_router__WEBPACK_IMPORTED_MODULE_1__.UIRouterComponent.create(attrs);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el.__render();
  })()
  ];
}

/***/ }),

/***/ "./components/about.c.html":
/*!*********************************!*\
  !*** ./components/about.c.html ***!
  \*********************************/
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
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
      "h4",
      `About`
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })(),
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
      "p",
      `jinge is a Messenger, Proxy and Compiler based MVVM framework`
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ }),

/***/ "./components/hello.c.html":
/*!*********************************!*\
  !*** ./components/hello.c.html ***!
  \*********************************/
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
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
      "h4",
      `Hello`
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })(),
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
      "p",
      `This is hello content.`
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ }),

/***/ "./components/people.c.html":
/*!**********************************!*\
  !*** ./components/people.c.html ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge/lib/index.js");
/* harmony import */ var jinge_ui_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-ui-router */ "../../jinge-ui-router/lib/index.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {  
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "div",
      {
        style: `display:flex;flex-direction:row;`
      },
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "div",
        {
          style: `margin-right: 20px;`
        },
        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
          "h4",
          `Some People:`
        ),
        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
          "ul",
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
                        "li",
                        ...(() => {
                          const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                            [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                              debugName: "attrs_of_<ui-sref>",
                              context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                            },
                            text: undefined,
                            params: undefined,
                            to: `people.person`,
                            active: `active`
                          });
                          const fn_0 = () => {
                            attrs.text = vm_1.each?.name;
                          };
                          fn_0();
                          vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["each","name"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                          const fn_1 = () => {
                            attrs.params = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)({personId: vm_1.each?.id});
                          };
                          fn_1();
                          vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["each","id"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                          const el = jinge_ui_router__WEBPACK_IMPORTED_MODULE_1__.UISrefComponent.create(attrs);
                          component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                          return el.__render();
                        })()
                      );
                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                      return el;
                    })()
                    ];
                  }
                }
              },
              loop: undefined,
              key: `each.id`
            });
            const fn_0 = () => {
              attrs.loop = vm_0.people;
            };
            fn_0();
            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["people"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
            const el = jinge__WEBPACK_IMPORTED_MODULE_0__.ForComponent.create(attrs);
            component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
            return el.__render();
          })()
        )
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
        "div",
        ...(() => {
          const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
            [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
              debugName: "attrs_of_<ui-view>",
              context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            },
          });
          const el = jinge_ui_router__WEBPACK_IMPORTED_MODULE_1__.UIViewComponent.create(attrs);
          component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
          return el.__render();
        })()
      )
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ }),

/***/ "./components/person.c.html":
/*!**********************************!*\
  !*** ./components/person.c.html ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge/lib/index.js");
/* harmony import */ var jinge_ui_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-ui-router */ "../../jinge-ui-router/lib/index.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {  
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
      "div",
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
        "h4",
        `A person!`
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
        "div",
        (() => {
          const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createTextNode)();
          const fn_0 = () => {
            (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setText)(el, `Name: ${vm_0.person?.name}`);
          };
          fn_0();
          vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["person","name"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
          return el;
        })()
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
        "div",
        (() => {
          const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createTextNode)();
          const fn_0 = () => {
            (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setText)(el, `Id: ${vm_0.person?.id}`);
          };
          fn_0();
          vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["person","id"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
          return el;
        })()
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
        "div",
        (() => {
          const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createTextNode)();
          const fn_0 = () => {
            (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setText)(el, `Company: ${vm_0.person?.company}`);
          };
          fn_0();
          vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["person","company"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
          return el;
        })()
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
        "div",
        (() => {
          const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createTextNode)();
          const fn_0 = () => {
            (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setText)(el, `Email: ${vm_0.person?.email}`);
          };
          fn_0();
          vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["person","email"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
          return el;
        })()
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
        "div",
        (() => {
          const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createTextNode)();
          const fn_0 = () => {
            (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setText)(el, `Address: ${vm_0.person?.address}`);
          };
          fn_0();
          vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["person","address"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
          return el;
        })()
      ),
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<ui-sref>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
            slots: {
              'default': function(component) {  
                return [
                (() => {
                  const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                    "button",
                    `Close`
                  );
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                  return el;
                })()
                ];
              }
            }
          },
          to: `people`
        });
        const el = jinge_ui_router__WEBPACK_IMPORTED_MODULE_1__.UISrefComponent.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return el.__render();
      })()
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ }),

/***/ "./components/redirect.c.html":
/*!************************************!*\
  !*** ./components/redirect.c.html ***!
  \************************************/
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
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
      "h4",
      `Redirect`
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })(),
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
      "p",
      `here is child detail redirect from parent.`
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ }),

/***/ "./node_modules/.pnpm/registry.npmmirror.com+@uirouter+visualizer@7.2.1_@uirouter+core@6.1.0/node_modules/@uirouter/visualizer/_bundles/ui-router-visualizer.esm.js":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmmirror.com+@uirouter+visualizer@7.2.1_@uirouter+core@6.1.0/node_modules/@uirouter/visualizer/_bundles/ui-router-visualizer.esm.js ***!
  \**************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StateSelector: () => (/* binding */ StateSelector),
/* harmony export */   StateTree: () => (/* binding */ StateTree),
/* harmony export */   StateVisualizer: () => (/* binding */ StateVisualizer),
/* harmony export */   TransitionVisualizer: () => (/* binding */ TransitionVisualizer),
/* harmony export */   Visualizer: () => (/* binding */ Visualizer),
/* harmony export */   visualizer: () => (/* binding */ visualizer)
/* harmony export */ });
var n,u,i,t,o,r,f={},e=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s(n,l){for(var u in l)n[u]=l[u];return n}function a(n){var l=n.parentNode;l&&l.removeChild(n);}function v(n,l,u){var i,t,o,r=arguments,f={};for(o in l)"key"==o?i=l[o]:"ref"==o?t=l[o]:f[o]=l[o];if(arguments.length>3)for(u=[u],o=3;o<arguments.length;o++)u.push(r[o]);if(null!=u&&(f.children=u),"function"==typeof n&&null!=n.defaultProps)for(o in n.defaultProps)void 0===f[o]&&(f[o]=n.defaultProps[o]);return h(n,f,i,t,null)}function h(l,u,i,t,o){var r={type:l,props:u,key:i,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o};return null==o&&(r.__v=r),null!=n.vnode&&n.vnode(r),r}function p(n){return n.children}function d(n,l){this.props=n,this.context=l;}function _(n,l){if(null==l)return n.__?_(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?_(n):null}function w(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return w(n)}}function k(l){(!l.__d&&(l.__d=!0)&&u.push(l)&&!m.__r++||t!==n.debounceRendering)&&((t=n.debounceRendering)||i)(m);}function m(){for(var n;m.__r=u.length;)n=u.sort(function(n,l){return n.__v.__b-l.__v.__b}),u=[],n.some(function(n){var l,u,i,t,o,r,f;n.__d&&(r=(o=(l=n).__v).__e,(f=l.__P)&&(u=[],(i=s({},o)).__v=i,t=T(f,o,i,l.__n,void 0!==f.ownerSVGElement,null,u,null==r?_(o):r),$(u,o),t!=r&&w(o)));});}function g(n,l,u,i,t,o,r,c,s,v){var y,d,w,k,m,g,b,A=i&&i.__k||e,P=A.length;for(s==f&&(s=null!=r?r[0]:P?_(i,0):null),u.__k=[],y=0;y<l.length;y++)if(null!=(k=u.__k[y]=null==(k=l[y])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k?h(null,k,null,null,k):Array.isArray(k)?h(p,{children:k},null,null,null):null!=k.__e||null!=k.__c?h(k.type,k.props,k.key,null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(w=A[y])||w&&k.key==w.key&&k.type===w.type)A[y]=void 0;else for(d=0;d<P;d++){if((w=A[d])&&k.key==w.key&&k.type===w.type){A[d]=void 0;break}w=null;}m=T(n,k,w=w||f,t,o,r,c,s,v),(d=k.ref)&&w.ref!=d&&(b||(b=[]),w.ref&&b.push(w.ref,null,k),b.push(d,k.__c||m,k)),null!=m?(null==g&&(g=m),s=x(n,k,w,A,r,m,s),v||"option"!=u.type?"function"==typeof u.type&&(u.__d=s):n.value=""):s&&w.__e==s&&s.parentNode!=n&&(s=_(w));}if(u.__e=g,null!=r&&"function"!=typeof u.type)for(y=r.length;y--;)null!=r[y]&&a(r[y]);for(y=P;y--;)null!=A[y]&&I(A[y],A[y]);if(b)for(y=0;y<b.length;y++)H(b[y],b[++y],b[++y]);}function x(n,l,u,i,t,o,r){var f,e,c;if(void 0!==l.__d)f=l.__d,l.__d=void 0;else if(t==u||o!=r||null==o.parentNode)n:if(null==r||r.parentNode!==n)n.appendChild(o),f=null;else {for(e=r,c=0;(e=e.nextSibling)&&c<i.length;c+=2)if(e==o)break n;n.insertBefore(o,r),f=r;}return void 0!==f?f:o.nextSibling}function A(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||C(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||C(n,o,l[o],u[o],i);}function P(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||c.test(l)?u:u+"px";}function C(n,l,u,i,t){var o,r;if(t&&"className"==l&&(l="class"),"style"===l)if("string"==typeof u)n.style=u;else {if("string"==typeof i&&(n.style=i=""),i)for(l in i)u&&l in u||P(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||P(n.style,l,u[l]);}else "o"===l[0]&&"n"===l[1]?(o=l!==(l=l.replace(/Capture$/,"")),(r=l.toLowerCase())in n&&(l=r),l=l.slice(2),n.l||(n.l={}),n.l[l]=u,u?i||n.addEventListener(l,z,o):n.removeEventListener(l,z,o)):"list"!==l&&"tagName"!==l&&"form"!==l&&"type"!==l&&"size"!==l&&"download"!==l&&"href"!==l&&!t&&l in n?n[l]=null==u?"":u:"function"!=typeof u&&"dangerouslySetInnerHTML"!==l&&(l!==(l=l.replace(/xlink:?/,""))?null==u||!1===u?n.removeAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase()):n.setAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase(),u):null==u||!1===u&&!/^ar/.test(l)?n.removeAttribute(l):n.setAttribute(l,u));}function z(l){this.l[l.type](n.event?n.event(l):l);}function N(n,l,u){var i,t;for(i=0;i<n.__k.length;i++)(t=n.__k[i])&&(t.__=n,t.__e&&("function"==typeof t.type&&t.__k.length>1&&N(t,l,u),l=x(u,t,t,n.__k,null,t.__e,l),"function"==typeof n.type&&(n.__d=l)));}function T(l,u,i,t,o,r,f,e,c){var a,v,h,y,_,w,k,m,b,x,A,P=u.type;if(void 0!==u.constructor)return null;(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(m=u.props,b=(a=P.contextType)&&t[a.__c],x=a?b?b.props.value:a.__:t,i.__c?k=(v=u.__c=i.__c).__=v.__E:("prototype"in P&&P.prototype.render?u.__c=v=new P(m,x):(u.__c=v=new d(m,x),v.constructor=P,v.render=L),b&&b.sub(v),v.props=m,v.state||(v.state={}),v.context=x,v.__n=t,h=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=P.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=s({},v.__s)),s(v.__s,P.getDerivedStateFromProps(m,v.__s))),y=v.props,_=v.state,h)null==P.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&v.__h.push(v.componentDidMount);else {if(null==P.getDerivedStateFromProps&&m!==y&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(m,x),!v.__e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(m,v.__s,x)||u.__v===i.__v){v.props=m,v.state=v.__s,u.__v!==i.__v&&(v.__d=!1),v.__v=u,u.__e=i.__e,u.__k=i.__k,v.__h.length&&f.push(v),N(u,e,l);break n}null!=v.componentWillUpdate&&v.componentWillUpdate(m,v.__s,x),null!=v.componentDidUpdate&&v.__h.push(function(){v.componentDidUpdate(y,_,w);});}v.context=x,v.props=m,v.state=v.__s,(a=n.__r)&&a(u),v.__d=!1,v.__v=u,v.__P=l,a=v.render(v.props,v.state,v.context),v.state=v.__s,null!=v.getChildContext&&(t=s(s({},t),v.getChildContext())),h||null==v.getSnapshotBeforeUpdate||(w=v.getSnapshotBeforeUpdate(y,_)),A=null!=a&&a.type==p&&null==a.key?a.props.children:a,g(l,Array.isArray(A)?A:[A],u,i,t,o,r,f,e,c),v.base=u.__e,v.__h.length&&f.push(v),k&&(v.__E=v.__=null),v.__e=!1;}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=j(i.__e,u,i,t,o,r,f,c);(a=n.diffed)&&a(u);}catch(l){u.__v=null,n.__e(l,u,i);}return u.__e}function $(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u);});}catch(l){n.__e(l,u.__v);}});}function j(n,l,u,i,t,o,r,c){var s,a,v,h,y,p=u.props,d=l.props;if(t="svg"===l.type||t,null!=o)for(s=0;s<o.length;s++)if(null!=(a=o[s])&&((null===l.type?3===a.nodeType:a.localName===l.type)||n==a)){n=a,o[s]=null;break}if(null==n){if(null===l.type)return document.createTextNode(d);n=t?document.createElementNS("http://www.w3.org/2000/svg",l.type):document.createElement(l.type,d.is&&{is:d.is}),o=null,c=!1;}if(null===l.type)p!==d&&n.data!==d&&(n.data=d);else {if(null!=o&&(o=e.slice.call(n.childNodes)),v=(p=u.props||f).dangerouslySetInnerHTML,h=d.dangerouslySetInnerHTML,!c){if(null!=o)for(p={},y=0;y<n.attributes.length;y++)p[n.attributes[y].name]=n.attributes[y].value;(h||v)&&(h&&v&&h.__html==v.__html||(n.innerHTML=h&&h.__html||""));}A(n,d,p,t,c),h?l.__k=[]:(s=l.props.children,g(n,Array.isArray(s)?s:[s],l,u,i,"foreignObject"!==l.type&&t,o,r,f,c)),c||("value"in d&&void 0!==(s=d.value)&&s!==n.value&&C(n,"value",s,p.value,!1),"checked"in d&&void 0!==(s=d.checked)&&s!==n.checked&&C(n,"checked",s,p.checked,!1));}return n}function H(l,u,i){try{"function"==typeof l?l(u):l.current=u;}catch(l){n.__e(l,i);}}function I(l,u,i){var t,o,r;if(n.unmount&&n.unmount(l),(t=l.ref)&&(t.current&&t.current!==l.__e||H(t,null,u)),i||"function"==typeof l.type||(i=null!=(o=l.__e)),l.__e=l.__d=void 0,null!=(t=l.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(l){n.__e(l,u);}t.base=t.__P=null;}if(t=l.__k)for(r=0;r<t.length;r++)t[r]&&I(t[r],u,i);null!=o&&a(o);}function L(n,l,u){return this.constructor(n,u)}function M(l,u,i){var t,r,c;n.__&&n.__(l,u),r=(t=i===o)?null:i&&i.__k||u.__k,l=v(p,null,[l]),c=[],T(u,(t?u:i||u).__k=l,r||f,f,void 0!==u.ownerSVGElement,i&&!t?[i]:r?null:u.childNodes.length?e.slice.call(u.childNodes):null,c,i||f,t),$(c,l);}n={__e:function(n,l){for(var u,i;l=l.__;)if((u=l.__c)&&!u.__)try{if(u.constructor&&null!=u.constructor.getDerivedStateFromError&&(i=!0,u.setState(u.constructor.getDerivedStateFromError(n))),null!=u.componentDidCatch&&(i=!0,u.componentDidCatch(n)),i)return k(u.__E=u)}catch(l){n=l;}throw n}},d.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof n&&(n=n(s({},u),this.props)),n&&s(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),k(this));},d.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),k(this));},d.prototype.render=p,u=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,m.__r=0,o=f,r=0;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var StateSelector = /** @class */ (function (_super) {
    __extends(StateSelector, _super);
    function StateSelector() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            current: null,
            states: [],
            deregisterFn: null,
        };
        _this.selectState = function (event) {
            var $state = _this.props.router.stateService;
            var to = event.target.value;
            if (to)
                $state.go(to);
        };
        return _this;
    }
    StateSelector.prototype.componentDidMount = function () {
        var _this = this;
        var router = this.props.router;
        var updateStates = function () { return _this.setState({ states: router.stateRegistry.get().map(function (state) { return state.name; }) }); };
        var updateCurrent = function (trans) { return _this.setState({ current: trans.to().name }); };
        if (router.stateRegistry.onStatesChanged) {
            this.deregisterStateListenerFn = router.stateRegistry.onStatesChanged(updateStates);
        }
        var deregisterFn = router.transitionService.onSuccess({}, updateCurrent);
        this.setState({ current: router.globals.current.name, states: [], deregisterFn: deregisterFn });
        updateStates();
    };
    StateSelector.prototype.componentWillUnmount = function () {
        if (this.state.deregisterFn) {
            this.state.deregisterFn();
        }
        if (this.deregisterStateListenerFn) {
            this.deregisterStateListenerFn();
        }
    };
    StateSelector.prototype.render = function () {
        return (v("select", { value: this.state.current || '', onChange: this.selectState, style: { maxWidth: 120 } },
            v("option", { value: "" }, "Choose a state"),
            this.state.states.map(function (state) { return (v("option", { key: state, value: state }, state)); })));
    };
    return StateSelector;
}(d));

var hasClass = function (classname) { return function (el) { return !!new RegExp("\\b" + classname + "\\b").exec(el.className); }; };
var addClass = function (classname) { return function (el) { return (el.className = el.className + ' ' + classname); }; };
var removeClass = function (classname) { return function (el) {
    return (el.className = el.className.replace(new RegExp("\\b" + classname + "\\b", 'g'), ''));
}; };
var toggleClass = function (classname) { return function (el) {
    if (hasClass(classname)(el))
        removeClass(classname)(el);
    else
        addClass(classname)(el);
}; };

var moveElement = function (elementToMove) {
    return function _moveElement(elementBeingDragged, event, details) {
        var initialClientX = details.initialClientX, initialClientY = details.initialClientY, lastClientX = details.lastClientX, lastClientY = details.lastClientY, newClientX = details.newClientX, newClientY = details.newClientY;
        var el = elementToMove;
        var bounds = el.getBoundingClientRect();
        var left = bounds.left, top = bounds.top;
        var dx = newClientX - lastClientX;
        var dy = newClientY - lastClientY;
        el.style.right = 'auto';
        el.style.bottom = 'auto';
        el.style.left = left + dx + 'px';
        el.style.top = top + dy + 'px';
    };
};
var dragActions = {
    move: moveElement,
};
function draggable(el, callback) {
    var isDragging = false;
    var initialClientX = 0, initialClientY = 0;
    var lastClientX = 0, lastClientY = 0;
    var mouseDownListener = function (e) {
        isDragging = true;
        lastClientX = initialClientX = e.clientX;
        lastClientY = initialClientY = e.clientY;
        var dragListener = function (e) {
            if ( !isDragging)
                return;
            e.preventDefault();
            var newClientX = e.clientX, newClientY = e.clientY;
            callback(el, e, { initialClientX: initialClientX, initialClientY: initialClientY, lastClientX: lastClientX, lastClientY: lastClientY, newClientX: newClientX, newClientY: newClientY });
            lastClientX = newClientX;
            lastClientY = newClientY;
        };
        var doneDragging = function (e) {
            isDragging = false;
            document.removeEventListener('mousemove', dragListener);
            document.removeEventListener('mouseup', doneDragging);
        };
        document.addEventListener('mousemove', dragListener);
        document.addEventListener('mouseup', doneDragging);
    };
    addClass('draggable')(el);
    el.addEventListener('mousedown', mouseDownListener);
    return function () { return el.removeEventListener('mousedown', mouseDownListener); };
}

var StateNode = /** @class */ (function (_super) {
    __extends(StateNode, _super);
    function StateNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.goTimeout = null;
        _this.handleCollapseClicked = function () {
            clearTimeout(_this.goTimeout);
            _this.props.node._collapsed = !_this.props.node._collapsed;
            _this.props.doLayout();
        };
        _this.handleGoClicked = function () {
            clearTimeout(_this.goTimeout);
            var stateName = _this.props.node.name;
            stateName = stateName.replace(/\.\*\*$/, '');
            _this.goTimeout = setTimeout(function () { return _this.props.router.stateService.go(stateName); }, 200);
        };
        return _this;
    }
    StateNode.prototype.render = function () {
        var renderer = this.props.renderer;
        var _a = this.props, node = _a.node, x = _a.x, y = _a.y, nodeOptions = _a.nodeOptions;
        var baseRadius = renderer.baseRadius, baseFontSize = renderer.baseFontSize, baseNodeStrokeWidth = renderer.baseNodeStrokeWidth, zoom = renderer.zoom;
        var r = baseRadius * zoom;
        var fontSize = baseFontSize * zoom;
        var nodeStrokeWidth = baseNodeStrokeWidth * (node.entered ? 1.5 : 1) * zoom;
        var defaultClasses = ['entered', 'retained', 'exited', 'active', 'inactive', 'future', 'highlight', 'collapsed']
            .filter(function (clazz) { return node[clazz]; })
            .join(' ');
        var nodeClasses = nodeOptions && nodeOptions.classes ? nodeOptions.classes(node) : '';
        var circleClasses = defaultClasses + ' ' + nodeClasses;
        var descendents = node.collapsed ? node.totalDescendents : 0;
        return (v("g", { transform: "translate(" + x + ", " + y + ")", onClick: this.handleGoClicked, onDblClick: this.handleCollapseClicked },
            v("circle", { className: circleClasses, "stroke-width": nodeStrokeWidth, r: r }),
            !node.collapsed ? ('') : (v("text", { className: "label", "text-anchor": "middle", "font-size": fontSize * (descendents < 10 ? 1.0 : 0.8) },
                "(",
                descendents,
                ")")),
            renderer.labelRenderFn(x, y, node, nodeOptions, renderer),
            v("text", { className: "label", "text-anchor": "middle", "font-size": fontSize, transform: "translate(0, " + r * 2 + ")" }, node.label)));
    };
    return StateNode;
}(d));

/* ============================================================
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Open source under the BSD License.
 *
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * https://raw.github.com/danro/jquery-easing/master/LICENSE
 * ======================================================== */
// prettier-ignore
var easing = {
    // time, begin, change, duration
    easeInOutQuad: function (t, b, c, d) {
        if ((t /= d / 2) < 1)
            return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    },
    easeInOutCubic: function (t, b, c, d) {
        if ((t /= d / 2) < 1)
            return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    },
    easeInOutQuart: function (t, b, c, d) {
        if ((t /= d / 2) < 1)
            return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    },
    easeInOutQuint: function (t, b, c, d) {
        if ((t /= d / 2) < 1)
            return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    },
    easeInOutSine: function (t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    },
    easeInOutExpo: function (t, b, c, d) {
        if (t == 0)
            return b;
        if (t == d)
            return b + c;
        if ((t /= d / 2) < 1)
            return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInOutCirc: function (t, b, c, d) {
        if ((t /= d / 2) < 1)
            return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    },
    easeInElastic: function (t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0)
            return b;
        if ((t /= d) == 1)
            return b + c;
        if (!p)
            p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        }
        else
            var s = p / (2 * Math.PI) * Math.asin(c / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    },
    easeOutElastic: function (t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0)
            return b;
        if ((t /= d) == 1)
            return b + c;
        if (!p)
            p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        }
        else
            var s = p / (2 * Math.PI) * Math.asin(c / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    },
    easeInOutElastic: function (t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0)
            return b;
        if ((t /= d / 2) == 2)
            return b + c;
        if (!p)
            p = d * (.3 * 1.5);
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        }
        else
            var s = p / (2 * Math.PI) * Math.asin(c / a);
        if (t < 1)
            return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
    },
    easeInOutBack: function (t, b, c, d, s) {
        if (s == undefined)
            s = 1.70158;
        if ((t /= d / 2) < 1)
            return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
    },
};

function define(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}

function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex = /^#([0-9a-f]{3,8})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

define(Color, color, {
  copy: function(channels) {
    return Object.assign(new this.constructor, this, channels);
  },
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: color_formatHex, // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});

function color_formatHex() {
  return this.rgb().formatHex();
}

function color_formatHsl() {
  return hslConvert(this).formatHsl();
}

function color_formatRgb() {
  return this.rgb().formatRgb();
}

function color(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
      : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
      : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
      : l === 4 ? rgba((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
      : null) // invalid hex
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

define(Rgb, rgb, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return (-0.5 <= this.r && this.r < 255.5)
        && (-0.5 <= this.g && this.g < 255.5)
        && (-0.5 <= this.b && this.b < 255.5)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex, // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));

function rgb_formatHex() {
  return "#" + hex(this.r) + hex(this.g) + hex(this.b);
}

function rgb_formatRgb() {
  var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
  return (a === 1 ? "rgb(" : "rgba(")
      + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
      + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
      + Math.max(0, Math.min(255, Math.round(this.b) || 0))
      + (a === 1 ? ")" : ", " + a + ")");
}

function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

define(Hsl, hsl, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl: function() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "hsl(" : "hsla(")
        + (this.h || 0) + ", "
        + (this.s || 0) * 100 + "%, "
        + (this.l || 0) * 100 + "%"
        + (a === 1 ? ")" : ", " + a + ")");
  }
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}

function constant(x) {
  return function() {
    return x;
  };
}

function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : constant(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : constant(isNaN(a) ? b : a);
}

var rgb$1 = (function rgbGamma(y) {
  var color = gamma(y);

  function rgb$1(start, end) {
    var r = color((start = rgb(start)).r, (end = rgb(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb$1.gamma = rgbGamma;

  return rgb$1;
})(1);

function numberArray(a, b) {
  if (!b) b = [];
  var n = a ? Math.min(b.length, a.length) : 0,
      c = b.slice(),
      i;
  return function(t) {
    for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
    return c;
  };
}

function isNumberArray(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}

function interpolateArray(a, b) {
  return (isNumberArray(b) ? numberArray : genericArray)(a, b);
}

function genericArray(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = value(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
}

function date(a, b) {
  var d = new Date;
  return a = +a, b = +b, function(t) {
    return d.setTime(a * (1 - t) + b * t), d;
  };
}

function number(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
}

function object(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = value(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
}

var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

function string(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: number(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
}

function value(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? constant(b)
      : (t === "number" ? number
      : t === "string" ? ((c = color(b)) ? (b = c, rgb$1) : string)
      : b instanceof color ? rgb$1
      : b instanceof Date ? date
      : isNumberArray(b) ? numberArray
      : Array.isArray(b) ? genericArray
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object
      : number)(a, b);
}

// https://github.com/resin-io/triangular.js
/** This animation code was taken from trangular.js, and is used to interpolate 2 arrays of values using an easing fn */
function animatePath(newValue, oldValue, duration, updateFrame, finishFn, easeFn) {
    if (finishFn === void 0) { finishFn = function () { }; }
    if (easeFn === void 0) { easeFn = easing.easeOutElastic; }
    var start = null, interpolate = interpolateArray(oldValue, newValue);
    var step = function (now) {
        if (duration === -1)
            return finishFn();
        if (start == null)
            start = now;
        var progress = now - start, percent = 1;
        if (progress < duration) {
            requestAnimationFrame(step);
            percent = easeFn(progress, 0, 1, duration);
        }
        updateFrame(interpolate(percent));
    };
    requestAnimationFrame(step);
    return function cancel() {
        duration = -1;
    };
}

function defaultSeparation(a, b) {
  return a.parent === b.parent ? 1 : 2;
}

function meanX(children) {
  return children.reduce(meanXReduce, 0) / children.length;
}

function meanXReduce(x, c) {
  return x + c.x;
}

function maxY(children) {
  return 1 + children.reduce(maxYReduce, 0);
}

function maxYReduce(y, c) {
  return Math.max(y, c.y);
}

function leafLeft(node) {
  var children;
  while (children = node.children) node = children[0];
  return node;
}

function leafRight(node) {
  var children;
  while (children = node.children) node = children[children.length - 1];
  return node;
}

function d3cluster() {
  var separation = defaultSeparation,
      dx = 1,
      dy = 1,
      nodeSize = false;

  function cluster(root) {
    var previousNode,
        x = 0;

    // First walk, computing the initial x & y values.
    root.eachAfter(function(node) {
      var children = node.children;
      if (children) {
        node.x = meanX(children);
        node.y = maxY(children);
      } else {
        node.x = previousNode ? x += separation(node, previousNode) : 0;
        node.y = 0;
        previousNode = node;
      }
    });

    var left = leafLeft(root),
        right = leafRight(root),
        x0 = left.x - separation(left, right) / 2,
        x1 = right.x + separation(right, left) / 2;

    // Second walk, normalizing x & y to the desired size.
    return root.eachAfter(nodeSize ? function(node) {
      node.x = (node.x - root.x) * dx;
      node.y = (root.y - node.y) * dy;
    } : function(node) {
      node.x = (node.x - x0) / (x1 - x0) * dx;
      node.y = (1 - (root.y ? node.y / root.y : 1)) * dy;
    });
  }

  cluster.separation = function(x) {
    return arguments.length ? (separation = x, cluster) : separation;
  };

  cluster.size = function(x) {
    return arguments.length ? (nodeSize = false, dx = +x[0], dy = +x[1], cluster) : (nodeSize ? null : [dx, dy]);
  };

  cluster.nodeSize = function(x) {
    return arguments.length ? (nodeSize = true, dx = +x[0], dy = +x[1], cluster) : (nodeSize ? [dx, dy] : null);
  };

  return cluster;
}

function count(node) {
  var sum = 0,
      children = node.children,
      i = children && children.length;
  if (!i) sum = 1;
  else while (--i >= 0) sum += children[i].value;
  node.value = sum;
}

function node_count() {
  return this.eachAfter(count);
}

function node_each(callback, that) {
  let index = -1;
  for (const node of this) {
    callback.call(that, node, ++index, this);
  }
  return this;
}

function node_eachBefore(callback, that) {
  var node = this, nodes = [node], children, i, index = -1;
  while (node = nodes.pop()) {
    callback.call(that, node, ++index, this);
    if (children = node.children) {
      for (i = children.length - 1; i >= 0; --i) {
        nodes.push(children[i]);
      }
    }
  }
  return this;
}

function node_eachAfter(callback, that) {
  var node = this, nodes = [node], next = [], children, i, n, index = -1;
  while (node = nodes.pop()) {
    next.push(node);
    if (children = node.children) {
      for (i = 0, n = children.length; i < n; ++i) {
        nodes.push(children[i]);
      }
    }
  }
  while (node = next.pop()) {
    callback.call(that, node, ++index, this);
  }
  return this;
}

function node_find(callback, that) {
  let index = -1;
  for (const node of this) {
    if (callback.call(that, node, ++index, this)) {
      return node;
    }
  }
}

function node_sum(value) {
  return this.eachAfter(function(node) {
    var sum = +value(node.data) || 0,
        children = node.children,
        i = children && children.length;
    while (--i >= 0) sum += children[i].value;
    node.value = sum;
  });
}

function node_sort(compare) {
  return this.eachBefore(function(node) {
    if (node.children) {
      node.children.sort(compare);
    }
  });
}

function node_path(end) {
  var start = this,
      ancestor = leastCommonAncestor(start, end),
      nodes = [start];
  while (start !== ancestor) {
    start = start.parent;
    nodes.push(start);
  }
  var k = nodes.length;
  while (end !== ancestor) {
    nodes.splice(k, 0, end);
    end = end.parent;
  }
  return nodes;
}

function leastCommonAncestor(a, b) {
  if (a === b) return a;
  var aNodes = a.ancestors(),
      bNodes = b.ancestors(),
      c = null;
  a = aNodes.pop();
  b = bNodes.pop();
  while (a === b) {
    c = a;
    a = aNodes.pop();
    b = bNodes.pop();
  }
  return c;
}

function node_ancestors() {
  var node = this, nodes = [node];
  while (node = node.parent) {
    nodes.push(node);
  }
  return nodes;
}

function node_descendants() {
  return Array.from(this);
}

function node_leaves() {
  var leaves = [];
  this.eachBefore(function(node) {
    if (!node.children) {
      leaves.push(node);
    }
  });
  return leaves;
}

function node_links() {
  var root = this, links = [];
  root.each(function(node) {
    if (node !== root) { // Don’t include the root’s parent, if any.
      links.push({source: node.parent, target: node});
    }
  });
  return links;
}

function* node_iterator() {
  var node = this, current, next = [node], children, i, n;
  do {
    current = next.reverse(), next = [];
    while (node = current.pop()) {
      yield node;
      if (children = node.children) {
        for (i = 0, n = children.length; i < n; ++i) {
          next.push(children[i]);
        }
      }
    }
  } while (next.length);
}

function hierarchy(data, children) {
  if (data instanceof Map) {
    data = [undefined, data];
    if (children === undefined) children = mapChildren;
  } else if (children === undefined) {
    children = objectChildren;
  }

  var root = new Node(data),
      node,
      nodes = [root],
      child,
      childs,
      i,
      n;

  while (node = nodes.pop()) {
    if ((childs = children(node.data)) && (n = (childs = Array.from(childs)).length)) {
      node.children = childs;
      for (i = n - 1; i >= 0; --i) {
        nodes.push(child = childs[i] = new Node(childs[i]));
        child.parent = node;
        child.depth = node.depth + 1;
      }
    }
  }

  return root.eachBefore(computeHeight);
}

function node_copy() {
  return hierarchy(this).eachBefore(copyData);
}

function objectChildren(d) {
  return d.children;
}

function mapChildren(d) {
  return Array.isArray(d) ? d[1] : null;
}

function copyData(node) {
  if (node.data.value !== undefined) node.value = node.data.value;
  node.data = node.data.data;
}

function computeHeight(node) {
  var height = 0;
  do node.height = height;
  while ((node = node.parent) && (node.height < ++height));
}

function Node(data) {
  this.data = data;
  this.depth =
  this.height = 0;
  this.parent = null;
}

Node.prototype = hierarchy.prototype = {
  constructor: Node,
  count: node_count,
  each: node_each,
  eachAfter: node_eachAfter,
  eachBefore: node_eachBefore,
  find: node_find,
  sum: node_sum,
  sort: node_sort,
  path: node_path,
  ancestors: node_ancestors,
  descendants: node_descendants,
  leaves: node_leaves,
  links: node_links,
  copy: node_copy,
  [Symbol.iterator]: node_iterator
};

function defaultSeparation$1(a, b) {
  return a.parent === b.parent ? 1 : 2;
}

// function radialSeparation(a, b) {
//   return (a.parent === b.parent ? 1 : 2) / a.depth;
// }

// This function is used to traverse the left contour of a subtree (or
// subforest). It returns the successor of v on this contour. This successor is
// either given by the leftmost child of v or by the thread of v. The function
// returns null if and only if v is on the highest level of its subtree.
function nextLeft(v) {
  var children = v.children;
  return children ? children[0] : v.t;
}

// This function works analogously to nextLeft.
function nextRight(v) {
  var children = v.children;
  return children ? children[children.length - 1] : v.t;
}

// Shifts the current subtree rooted at w+. This is done by increasing
// prelim(w+) and mod(w+) by shift.
function moveSubtree(wm, wp, shift) {
  var change = shift / (wp.i - wm.i);
  wp.c -= change;
  wp.s += shift;
  wm.c += change;
  wp.z += shift;
  wp.m += shift;
}

// All other shifts, applied to the smaller subtrees between w- and w+, are
// performed by this function. To prepare the shifts, we have to adjust
// change(w+), shift(w+), and change(w-).
function executeShifts(v) {
  var shift = 0,
      change = 0,
      children = v.children,
      i = children.length,
      w;
  while (--i >= 0) {
    w = children[i];
    w.z += shift;
    w.m += shift;
    shift += w.s + (change += w.c);
  }
}

// If vi-’s ancestor is a sibling of v, returns vi-’s ancestor. Otherwise,
// returns the specified (default) ancestor.
function nextAncestor(vim, v, ancestor) {
  return vim.a.parent === v.parent ? vim.a : ancestor;
}

function TreeNode(node, i) {
  this._ = node;
  this.parent = null;
  this.children = null;
  this.A = null; // default ancestor
  this.a = this; // ancestor
  this.z = 0; // prelim
  this.m = 0; // mod
  this.c = 0; // change
  this.s = 0; // shift
  this.t = null; // thread
  this.i = i; // number
}

TreeNode.prototype = Object.create(Node.prototype);

function treeRoot(root) {
  var tree = new TreeNode(root, 0),
      node,
      nodes = [tree],
      child,
      children,
      i,
      n;

  while (node = nodes.pop()) {
    if (children = node._.children) {
      node.children = new Array(n = children.length);
      for (i = n - 1; i >= 0; --i) {
        nodes.push(child = node.children[i] = new TreeNode(children[i], i));
        child.parent = node;
      }
    }
  }

  (tree.parent = new TreeNode(null, 0)).children = [tree];
  return tree;
}

// Node-link tree diagram using the Reingold-Tilford "tidy" algorithm
function d3tree() {
  var separation = defaultSeparation$1,
      dx = 1,
      dy = 1,
      nodeSize = null;

  function tree(root) {
    var t = treeRoot(root);

    // Compute the layout using Buchheim et al.’s algorithm.
    t.eachAfter(firstWalk), t.parent.m = -t.z;
    t.eachBefore(secondWalk);

    // If a fixed node size is specified, scale x and y.
    if (nodeSize) root.eachBefore(sizeNode);

    // If a fixed tree size is specified, scale x and y based on the extent.
    // Compute the left-most, right-most, and depth-most nodes for extents.
    else {
      var left = root,
          right = root,
          bottom = root;
      root.eachBefore(function(node) {
        if (node.x < left.x) left = node;
        if (node.x > right.x) right = node;
        if (node.depth > bottom.depth) bottom = node;
      });
      var s = left === right ? 1 : separation(left, right) / 2,
          tx = s - left.x,
          kx = dx / (right.x + s + tx),
          ky = dy / (bottom.depth || 1);
      root.eachBefore(function(node) {
        node.x = (node.x + tx) * kx;
        node.y = node.depth * ky;
      });
    }

    return root;
  }

  // Computes a preliminary x-coordinate for v. Before that, FIRST WALK is
  // applied recursively to the children of v, as well as the function
  // APPORTION. After spacing out the children by calling EXECUTE SHIFTS, the
  // node v is placed to the midpoint of its outermost children.
  function firstWalk(v) {
    var children = v.children,
        siblings = v.parent.children,
        w = v.i ? siblings[v.i - 1] : null;
    if (children) {
      executeShifts(v);
      var midpoint = (children[0].z + children[children.length - 1].z) / 2;
      if (w) {
        v.z = w.z + separation(v._, w._);
        v.m = v.z - midpoint;
      } else {
        v.z = midpoint;
      }
    } else if (w) {
      v.z = w.z + separation(v._, w._);
    }
    v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
  }

  // Computes all real x-coordinates by summing up the modifiers recursively.
  function secondWalk(v) {
    v._.x = v.z + v.parent.m;
    v.m += v.parent.m;
  }

  // The core of the algorithm. Here, a new subtree is combined with the
  // previous subtrees. Threads are used to traverse the inside and outside
  // contours of the left and right subtree up to the highest common level. The
  // vertices used for the traversals are vi+, vi-, vo-, and vo+, where the
  // superscript o means outside and i means inside, the subscript - means left
  // subtree and + means right subtree. For summing up the modifiers along the
  // contour, we use respective variables si+, si-, so-, and so+. Whenever two
  // nodes of the inside contours conflict, we compute the left one of the
  // greatest uncommon ancestors using the function ANCESTOR and call MOVE
  // SUBTREE to shift the subtree and prepare the shifts of smaller subtrees.
  // Finally, we add a new thread (if necessary).
  function apportion(v, w, ancestor) {
    if (w) {
      var vip = v,
          vop = v,
          vim = w,
          vom = vip.parent.children[0],
          sip = vip.m,
          sop = vop.m,
          sim = vim.m,
          som = vom.m,
          shift;
      while (vim = nextRight(vim), vip = nextLeft(vip), vim && vip) {
        vom = nextLeft(vom);
        vop = nextRight(vop);
        vop.a = v;
        shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
        if (shift > 0) {
          moveSubtree(nextAncestor(vim, v, ancestor), v, shift);
          sip += shift;
          sop += shift;
        }
        sim += vim.m;
        sip += vip.m;
        som += vom.m;
        sop += vop.m;
      }
      if (vim && !nextRight(vop)) {
        vop.t = vim;
        vop.m += sim - sop;
      }
      if (vip && !nextLeft(vom)) {
        vom.t = vip;
        vom.m += sip - som;
        ancestor = v;
      }
    }
    return ancestor;
  }

  function sizeNode(node) {
    node.x *= dx;
    node.y = node.depth * dy;
  }

  tree.separation = function(x) {
    return arguments.length ? (separation = x, tree) : separation;
  };

  tree.size = function(x) {
    return arguments.length ? (nodeSize = false, dx = +x[0], dy = +x[1], tree) : (nodeSize ? null : [dx, dy]);
  };

  tree.nodeSize = function(x) {
    return arguments.length ? (nodeSize = true, dx = +x[0], dy = +x[1], tree) : (nodeSize ? [dx, dy] : null);
  };

  return tree;
}

var RENDERER_PRESETS = {
    Tree: {
        layoutFn: TREE_LAYOUT,
        sortNodesFn: TOP_TO_BOTTOM_SORT,
        labelRenderFn: SLANTED_TEXT,
        edgeRenderFn: TREE_EDGE,
    },
    Cluster: {
        layoutFn: CLUSTER_LAYOUT,
        sortNodesFn: TOP_TO_BOTTOM_SORT,
        labelRenderFn: SLANTED_TEXT,
        edgeRenderFn: TREE_EDGE,
    },
    Radial: {
        layoutFn: RADIAL_LAYOUT,
        sortNodesFn: BOTTOM_TO_TOP_SORT,
        labelRenderFn: RADIAL_TEXT,
        edgeRenderFn: RADIAL_EDGE,
    },
};
var tree = RENDERER_PRESETS.Tree;
var DEFAULT_RENDERER = {
    baseRadius: 10,
    baseFontSize: 12,
    baseStrokeWidth: 2,
    baseNodeStrokeWidth: 2,
    zoom: 1.0,
    layoutFn: tree.layoutFn,
    sortNodesFn: tree.sortNodesFn,
    labelRenderFn: tree.labelRenderFn,
    edgeRenderFn: tree.edgeRenderFn,
};
///////////////////////////////////////////
// NODE RENDER ORDER
///////////////////////////////////////////
function BOTTOM_TO_TOP_SORT(a, b) {
    var b2t = b.layoutY - a.layoutY; // bottom to top
    if (b2t !== 0)
        return b2t;
    var l2r = a.layoutX - b.layoutX; // left to right
    return l2r;
}
function TOP_TO_BOTTOM_SORT(a, b) {
    var t2b = a.layoutY - b.layoutY; // top to bottom
    if (t2b !== 0)
        return t2b;
    var l2r = a.layoutX - b.layoutX; // left to right
    return l2r;
}
///////////////////////////////////////////
// LAYOUTS
///////////////////////////////////////////
function TREE_LAYOUT(rootNode) {
    var root = hierarchy(rootNode);
    var tree = d3tree();
    return updateNodes(tree(root));
}
function CLUSTER_LAYOUT(rootNode) {
    var root = hierarchy(rootNode);
    var tree = d3cluster();
    return updateNodes(tree(root));
}
/** For RADIAL_LAYOUT: projects x/y coords from a cluster layout to circular layout */
function project(x, y) {
    var angle = ((x - 90) / 180) * Math.PI, radius = y;
    var CENTER = 0.5;
    return { x: CENTER + radius * Math.cos(angle), y: CENTER + radius * Math.sin(angle) };
}
function RADIAL_LAYOUT(rootNode) {
    var root = hierarchy(rootNode);
    var layout = d3cluster()
        .size([360, 0.4])
        .separation(function (a, b) {
        return (a.parent == b.parent ? 1 : 2) / a.depth;
    });
    var nodes = layout(root);
    nodes.each(function (node) {
        var projected = project(node.x, node.y);
        var visNode = node.data;
        visNode.layoutX = node.x;
        visNode.layoutY = node.y;
        visNode.x = projected.x;
        visNode.y = projected.y;
    });
}
/** Mutates each StateVisNode by copying the new x/y values from the d3 HierarchyPointNode structure */
function updateNodes(nodes) {
    nodes.each(function (node) {
        node.data.layoutX = node.data.x = node.x;
        node.data.layoutY = node.data.y = node.y;
    });
    return nodes;
}
///////////////////////////////////////////
// STATE NAME LABEL
///////////////////////////////////////////
function RADIAL_TEXT(x, y, node, nodeOptions, renderer) {
    var baseFontSize = renderer.baseFontSize, zoom = renderer.zoom;
    var fontSize = baseFontSize * zoom;
    var label = (nodeOptions === null || nodeOptions === void 0 ? void 0 : nodeOptions.label) ? nodeOptions.label(node, defaultLabel(node)) : defaultLabel(node);
    var angle = node.layoutX || 0;
    var textAnchor = angle < 180 === !!node.children ? 'start' : 'end';
    var rotation = angle < 180 ? angle - 90 : angle + 90;
    var translation = (textAnchor === 'start' ? 15 : -15) * zoom;
    var transform = "rotate(" + rotation + "),translate(" + translation + ", 0)";
    return (v("text", { className: "name", "text-anchor": textAnchor, transform: transform, "font-size": fontSize },
        ' ',
        label,
        ' '));
}
function defaultLabel(node) {
    var segments = node.name.split('.');
    var name = segments.pop();
    if (name == '**')
        name = segments.pop() + '.**';
    return name;
}
function SLANTED_TEXT(x, y, node, nodeOptions, renderer) {
    var baseFontSize = renderer.baseFontSize, zoom = renderer.zoom;
    var fontSize = baseFontSize * zoom;
    var label = (nodeOptions === null || nodeOptions === void 0 ? void 0 : nodeOptions.label) ? nodeOptions.label(node, defaultLabel(node)) : defaultLabel(node);
    var transform = "rotate(-15),translate(0, " + -15 * zoom + ")";
    return (v("text", { className: "name", "text-anchor": "middle", transform: transform, "font-size": fontSize },
        ' ',
        label,
        ' '));
}
///////////////////////////////////////////
// GRAPH EDGES
///////////////////////////////////////////
/** Straight line */
function RADIAL_EDGE(node, renderer) {
    var strokeWidth = renderer.baseStrokeWidth * renderer.zoom;
    var makeLinkPath = function (node) {
        var s = { x: node.animX, y: node.animY }; // statevisnode
        var p = { x: node._parent.animX, y: node._parent.animY }; // parent
        return ('M' +
            [s.x, s.y] +
            // + "C"  + [s.x, (s.y + p.y) / 2.5]
            // + " "  + [p.x, (s.y + p.y) / 2.5]
            ' ' +
            [p.x, p.y]);
    };
    return v("path", { d: makeLinkPath(node), "stroke-width": strokeWidth, className: "link" });
}
/** Bezier curve */
function TREE_EDGE(node, renderer) {
    var strokeWidth = renderer.baseStrokeWidth * renderer.zoom;
    var makeLinkPath = function (node) {
        var s = { x: node.animX, y: node.animY }; // statevisnode
        var p = { x: node._parent.animX, y: node._parent.animY }; // parent
        var yAvg = (s.y + p.y) / 2;
        return "M " + s.x + " " + s.y + " C " + s.x + " " + yAvg + ", " + p.x + " " + yAvg + ", " + p.x + " " + p.y;
    };
    return v("path", { d: makeLinkPath(node), "stroke-width": strokeWidth, className: "link" });
}

function createStateVisNode(state) {
    var node = Object.create(state);
    Object.defineProperty(node, 'visible', {
        get: function () {
            if (this.entered)
                return true;
            var ancestorCollapsed = this._parent && (this._parent.collapsed || !this._parent.visible);
            return !ancestorCollapsed;
        },
    });
    Object.defineProperty(node, 'children', {
        get: function () {
            return this._children.filter(function (child) { return child.visible; });
        },
    });
    Object.defineProperty(node, 'totalDescendents', {
        get: function () {
            return this._children.reduce(function (acc, child) { return acc + child.totalDescendents; }, this._children.length);
        },
    });
    Object.defineProperty(node, 'collapsed', {
        get: function () {
            return !this.entered && this._collapsed && this._children.length;
        },
    });
    return node;
}

var resetMetadata = {
    label: '',
    highlight: false,
    active: false,
    future: false,
    retained: false,
    entered: false,
    exited: false,
    inactive: true,
};
var StateTree = /** @class */ (function (_super) {
    __extends(StateTree, _super);
    function StateTree() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            nodes: [],
            layout: {},
        };
        _this.nodes = [];
        _this.unmounted = false;
        _this.cancelCurrentAnimation = function () { return null; };
        _this.doLayoutAnimation = function () {
            _this.cancelCurrentAnimation();
            var nodes = _this.getNodes();
            if (!nodes.length)
                return;
            var rootNode = nodes.filter(function (state) { return state.name === ''; })[0];
            _this.props.renderer.layoutFn(rootNode);
            // Move all non-visible nodes to same x/y coords as the nearest visible parent
            nodes
                .filter(function (node) { return !node.visible; })
                .forEach(function (node) {
                var visibleAncestor = node._parent;
                while (visibleAncestor && !visibleAncestor.visible)
                    visibleAncestor = visibleAncestor._parent;
                if (visibleAncestor) {
                    node.x = visibleAncestor.x;
                    node.y = visibleAncestor.y;
                }
            });
            var dimensions = _this.dimensions();
            // Transforms x coord from the tree layout to fit the viewport using scale/offset values
            var transformX = function (xval) { return xval * dimensions.scaleX + dimensions.offsetX; };
            // Transforms y coord from the tree layout to fit the viewport using scale/offset values
            var transformY = function (yval) { return yval * dimensions.scaleY + dimensions.offsetY; };
            var getCurrentCoords = function (node) { return ({
                x: node.animX || _this.props.width / 2,
                y: node.animY || _this.props.height / 2,
            }); };
            // An array containing current x/y coords for all nodes
            // [ x1, y1, x2, y2, x3, y3, x4, y4 ]
            var currentCoords = nodes
                .map(getCurrentCoords)
                .map(function (obj) { return [obj.x, obj.y]; })
                .reduce(function (acc, arr) { return acc.concat(arr); }, []);
            // An array containing target x/y coords for all nodes
            // [ x1', y1', x2', y2', x3', y3', x4', y4' ]
            var targetCoords = nodes
                .map(function (node) { return [transformX(node.x), transformY(node.y)]; })
                .reduce(function (acc, arr) { return acc.concat(arr); }, []);
            // xyValArray is an array containing x/y coords for all nodes,
            // interpolated between currentCoords and targetCoords based on time
            // [ x1'', y1'', x2'', y2'', x3'', y3'', x4'', y4'' ]
            var animationFrame = function (xyValArray) {
                var tupleCount = xyValArray.length / 2;
                for (var i = 0; i < tupleCount && i < nodes.length; i++) {
                    var node = nodes[i];
                    node.animX = xyValArray[i * 2];
                    node.animY = xyValArray[i * 2 + 1];
                }
                _this.setState({ nodes: nodes });
            };
            _this.cancelCurrentAnimation = animatePath(targetCoords, currentCoords, 500, animationFrame, function () { return null; }, easing.easeInOutExpo);
        };
        _this.nodeForState = function (nodes, state) { return nodes.filter(function (node) { return node.name === state.name; })[0]; };
        _this.updateStates = function () {
            var router = _this.props.router;
            var states = router.stateService.get().map(function (s) { return s.$$state(); });
            var known = _this.nodes.map(Object.getPrototypeOf);
            var toAdd = states.filter(function (s) { return known.indexOf(s) === -1; });
            var toDel = known.filter(function (s) { return states.indexOf(s) === -1; });
            var nodes = (_this.nodes = _this.nodes.slice());
            if (toAdd.length || toDel.length) {
                toAdd.map(function (s) { return createStateVisNode(s); }).forEach(function (n) { return nodes.push(n); });
                toDel
                    .map(function (del) { return nodes.filter(function (node) { return del.isPrototypeOf(node); }); })
                    .reduce(function (acc, x) { return acc.concat(x); }, [])
                    .forEach(function (node) { return nodes.splice(nodes.indexOf(node), 1); });
                // Rebuild each node's children array
                nodes.forEach(function (n) { return (n._children = []); });
                nodes.forEach(function (n) {
                    if (!n || !n.parent)
                        return;
                    var parentNode = _this.nodeForState(nodes, n.parent);
                    if (!parentNode)
                        return;
                    parentNode._children.push(n);
                    n._parent = parentNode;
                });
                nodes.forEach(function (n) { return (n.future = !!n.lazyLoad); });
            }
            if (!_this.unmounted && !_this.deregisterStateListenerFn) {
                // poll if ui-router version is 1.0.0-beta.1 or earlier
                setTimeout(_this.updateStates, 1000);
            }
            _this.setState({ nodes: nodes }, _this.doLayoutAnimation);
        };
        _this.updateNodes = function ($transition$) {
            var nodes = _this.nodes.map(function (node) { return Object.assign(node, resetMetadata); });
            nodes.forEach(function (n) { return (n.future = !!n.lazyLoad); });
            if ($transition$) {
                var tc = $transition$.treeChanges();
                var getNode = function (node) { return _this.nodeForState(_this.nodes, node.state); };
                tc.retained
                    .concat(tc.entering)
                    .map(getNode)
                    .filter(function (x) { return x; })
                    .forEach(function (n) { return (n.entered = true); });
                tc.retained
                    .map(getNode)
                    .filter(function (x) { return x; })
                    .forEach(function (n) { return (n.retained = true); });
                tc.exiting
                    .map(getNode)
                    .filter(function (x) { return x; })
                    .forEach(function (n) { return (n.exited = true); });
                tc.to
                    .slice(-1)
                    .map(getNode)
                    .filter(function (x) { return x; })
                    .forEach(function (n) {
                    n.active = true;
                    n.label = 'active';
                });
            }
            _this.setState({ nodes: _this.nodes }, _this.doLayoutAnimation);
        };
        return _this;
    }
    StateTree.create = function (router, element, props) {
        if (props === void 0) { props = {}; }
        if (!element) {
            element = document.createElement('div');
            element.id = 'uirStateTree';
        }
        var initialProps = __assign(__assign({}, props), { router: router });
        var _render = function () {
            document.body.appendChild(element);
            M(v(StateTree, initialProps), element);
        };
        if (document.readyState === 'interactive' || document.readyState === 'complete') {
            _render();
        }
        else {
            document.addEventListener('DOMContentLoaded', _render, false);
        }
        return element;
    };
    StateTree.prototype.componentDidMount = function () {
        var _this = this;
        var registry = this.props.router.stateRegistry;
        var $transitions = this.props.router.transitionService;
        // Register states changed listener
        if (registry.onStatesChanged) {
            this.deregisterStateListenerFn = registry.onStatesChanged(function () { return _this.updateStates(); });
        }
        this.updateStates();
        // Register onSuccess transition hook to toggle the SVG classes
        this.deregisterHookFn = $transitions.onSuccess({}, function (trans) { return _this.updateNodes(trans); });
        this.updateNodes();
        var lastSuccessful = this.props.router.globals.successfulTransitions.peekTail();
        if (lastSuccessful) {
            this.updateNodes(lastSuccessful);
        }
        var pending = this.props.router.globals.transition;
        if (pending) {
            pending.promise.then(function () { return _this.updateNodes(pending); });
        }
    };
    StateTree.prototype.componentWillReceiveProps = function () {
        var nodes = this.state.nodes;
        this.setState({ nodes: nodes }, this.updateStates);
    };
    StateTree.prototype.dimensions = function () {
        var radius = 15;
        var offsetX = 0;
        var offsetY = radius * 2;
        var height = this.props.height || 500;
        var width = this.props.width || 500;
        var scaleX =  width - offsetX * 2;
        var scaleY =  height - offsetY * 2;
        return { radius: radius, offsetX: offsetX, offsetY: offsetY, scaleX: scaleX, scaleY: scaleY };
    };
    StateTree.prototype.componentWillUnmount = function () {
        this.unmounted = true;
        this.deregisterHookFn && this.deregisterHookFn();
    };
    StateTree.prototype.getNodes = function () {
        return this.nodes.slice().sort(this.props.renderer.sortNodesFn);
    };
    StateTree.prototype.render = function () {
        var _this = this;
        var renderer = this.props.renderer;
        var renderNodes = this.getNodes().filter(function (node) { return node.visible && node.animX && node.animY; });
        return (v("div", { className: "statevis" },
            v("svg", { width: this.props.width, height: this.props.height },
                renderNodes.filter(function (node) { return !!node.parent; }).map(function (node) { return renderer.edgeRenderFn(node, renderer); }),
                renderNodes.map(function (node) { return (v(StateNode, { key: node.name, node: node, router: _this.props.router, nodeOptions: _this.props.nodeOptions, renderer: _this.props.renderer, doLayout: _this.doLayoutAnimation.bind(_this), x: node.animX, y: node.animY })); }))));
    };
    StateTree.defaultProps = {
        height: 350,
        width: 250,
        renderer: DEFAULT_RENDERER,
    };
    return StateTree;
}(d));

var LayoutPrefs = /** @class */ (function (_super) {
    __extends(LayoutPrefs, _super);
    function LayoutPrefs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            renderer: DEFAULT_RENDERER,
            presetName: 'Tree',
        };
        return _this;
    }
    LayoutPrefs.prototype.componentDidMount = function () {
        this.props.onRendererChange(this.state.renderer);
    };
    LayoutPrefs.prototype.handleZoom = function (event) {
        var el = event.target;
        var value = parseFloat(el['value']);
        var renderer = __assign(__assign({}, this.state.renderer), { zoom: value });
        this.setState({ renderer: renderer });
        this.props.onRendererChange(renderer);
    };
    LayoutPrefs.prototype.handleLayout = function (event) {
        var presetName = event.target['value'];
        var settings = RENDERER_PRESETS[presetName];
        var renderer = __assign(__assign({}, this.state.renderer), settings);
        this.setState({ renderer: renderer, presetName: presetName });
        this.props.onRendererChange(renderer);
    };
    LayoutPrefs.prototype.render = function () {
        return (v("div", { className: "uirStateVisLayoutPrefs", style: { display: 'flex', flexFlow: 'column nowrap' }, onMouseDown: function (evt) { return evt.stopPropagation(); } },
            v("div", { style: { flex: '1 1 auto', display: 'flex', flexFlow: 'row nowrap', alignItems: 'center' } },
                v("div", null, "Layout:"),
                v("select", { style: { marginLeft: 'auto', maxWidth: '100px' }, onChange: this.handleLayout.bind(this), value: this.state.presetName }, Object.keys(RENDERER_PRESETS).map(function (preset) { return v("option", { value: preset }, preset); }))),
            v("div", { style: { flex: '1 1 auto', display: 'flex', flexFlow: 'row nowrap', alignItems: 'center' } },
                v("span", null, "Node size:"),
                v("input", { style: { marginLeft: 'auto' }, value: '' + this.state.renderer.zoom, type: "range", min: "0.3", max: "3.0", step: "0.1", onInput: this.handleZoom.bind(this) }),
                v("span", null,
                    this.state.renderer.zoom,
                    "x"))));
    };
    return LayoutPrefs;
}(d));

var ChevronDown = function (_a) {
    var size = _a.size;
    return (v("svg", { width: size, height: size, viewBox: "0 0 1792 1792", xmlns: "http://www.w3.org/2000/svg" },
        v("path", { d: "M1683 808l-742 741q-19 19-45 19t-45-19l-742-741q-19-19-19-45.5t19-45.5l166-165q19-19 45-19t45 19l531 531 531-531q19-19 45-19t45 19l166 165q19 19 19 45.5t-19 45.5z" })));
};

var Close = function (_a) {
    var size = _a.size;
    return (v("svg", { width: size, height: size, viewBox: "0 0 1792 1792", xmlns: "http://www.w3.org/2000/svg" },
        v("path", { d: "M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z" })));
};

var Gear = function (_a) {
    var size = _a.size;
    return (v("svg", { width: size, height: size, viewBox: "0 0 1792 1792", xmlns: "http://www.w3.org/2000/svg" },
        v("path", { d: "M1152 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm512-109v222q0 12-8 23t-20 13l-185 28q-19 54-39 91 35 50 107 138 10 12 10 25t-9 23q-27 37-99 108t-94 71q-12 0-26-9l-138-108q-44 23-91 38-16 136-29 186-7 28-36 28h-222q-14 0-24.5-8.5t-11.5-21.5l-28-184q-49-16-90-37l-141 107q-10 9-25 9-14 0-25-11-126-114-165-168-7-10-7-23 0-12 8-23 15-21 51-66.5t54-70.5q-27-50-41-99l-183-27q-13-2-21-12.5t-8-23.5v-222q0-12 8-23t19-13l186-28q14-46 39-92-40-57-107-138-10-12-10-24 0-10 9-23 26-36 98.5-107.5t94.5-71.5q13 0 26 10l138 107q44-23 91-38 16-136 29-186 7-28 36-28h222q14 0 24.5 8.5t11.5 21.5l28 184q49 16 90 37l142-107q9-9 24-9 13 0 25 10 129 119 165 170 7 8 7 22 0 12-8 23-15 21-51 66.5t-54 70.5q26 50 41 98l183 28q13 2 21 12.5t8 23.5z" })));
};

var Help = function (_a) {
    var size = _a.size;
    return (v("svg", { width: size, height: size, viewBox: "0 0 1792 1792", xmlns: "http://www.w3.org/2000/svg" },
        v("path", { d: "M1008 1200v160q0 14-9 23t-23 9h-160q-14 0-23-9t-9-23v-160q0-14 9-23t23-9h160q14 0 23 9t9 23zm256-496q0 50-15 90t-45.5 69-52 44-59.5 36q-32 18-46.5 28t-26 24-11.5 29v32q0 14-9 23t-23 9h-160q-14 0-23-9t-9-23v-68q0-35 10.5-64.5t24-47.5 39-35.5 41-25.5 44.5-21q53-25 75-43t22-49q0-42-43.5-71.5t-95.5-29.5q-56 0-95 27-29 20-80 83-9 12-25 12-11 0-19-6l-108-82q-10-7-12-20t5-23q122-192 349-192 129 0 238.5 89.5t109.5 214.5zm-368-448q-130 0-248.5 51t-204 136.5-136.5 204-51 248.5 51 248.5 136.5 204 204 136.5 248.5 51 248.5-51 204-136.5 136.5-204 51-248.5-51-248.5-136.5-204-204-136.5-248.5-51zm768 640q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" })));
};

var Controls = /** @class */ (function (_super) {
    __extends(Controls, _super);
    function Controls() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            showRendererPrefs: false,
        };
        return _this;
    }
    Controls.prototype.render = function () {
        return (v("div", { style: { width: '100%' } },
            v("div", { className: "uirStateVisControls" },
                v(StateSelector, { router: this.props.router }),
                v("div", { style: { marginLeft: 'auto', cursor: 'pointer' }, className: "uirStateVisIcons" },
                    v("span", { className: "uirStateVisHover" },
                        v(Help, { size: "16px" }),
                        v("div", { className: "hoverBlock" },
                            v("ul", null,
                                v("li", null, "Click a node to activate that state."),
                                v("li", null, "Select a state from the dropdown to activate that state."),
                                v("li", null, "Double click a node to auto-collapse that section of the tree when inactive. Collapsed nodes are displayed with a dotted outline and the count of collapsed children."),
                                v("li", null, "Lazy loaded states (including future states) are displayed with a dashed outline.")))),
                    v("span", { className: "uirStateVisHover" },
                        v(Gear, { size: "16px" }),
                        v("div", { className: "hoverBlock" },
                            v(LayoutPrefs, { onRendererChange: this.props.onRendererChange }))),
                    v("span", { className: "uirStateVisHover", onClick: this.props.onMinimize },
                        v(ChevronDown, { size: "16px" }),
                        v("div", null,
                            v("span", { style: { float: 'right' } }, "Minimize")),
                        v("div", null, "Minimize")),
                    v("span", { className: "uirStateVisHover", onClick: this.props.onClose },
                        v(Close, { size: "16px" }),
                        v("div", null,
                            v("span", { style: { float: 'right' } }, "Close")))))));
    };
    return Controls;
}(d));

/** A floating window that supports minimization and resizing  */
var StateVisWindow = /** @class */ (function (_super) {
    __extends(StateVisWindow, _super);
    function StateVisWindow(props) {
        var _this = _super.call(this, props) || this;
        _this.deregisterFns = [];
        _this.minimize = function () {
            // evt && evt.preventDefault();
            // evt && evt.stopPropagation();
            var el = _this.el;
            var bounds = el.getBoundingClientRect();
            _this.top = bounds.top + 'px';
            _this.left = bounds.left + 'px';
            _this.right = window.innerWidth - bounds.right + 'px';
            _this.bottom = window.innerHeight - bounds.bottom + 'px';
            el.style.top = 'auto';
            el.style.left = 'auto';
            el.style.right = _this.right;
            el.style.bottom = _this.bottom;
            var unminimize = function () {
                el.style.top = 'auto';
                el.style.left = 'auto';
                el.style.right = _this.right;
                el.style.bottom = _this.bottom;
                toggleClass('minimized')(el);
                el.removeEventListener('click', unminimize);
                var animationEndListener = function (evt) {
                    var bounds = el.getBoundingClientRect();
                    el.style.top = bounds.top + 'px';
                    el.style.left = bounds.left + 'px';
                    el.style.right = 'auto';
                    el.style.bottom = 'auto';
                    el.removeEventListener('transitionend', animationEndListener);
                };
                el.addEventListener('transitionend', animationEndListener);
            };
            addClass('minimized')(el);
            // wait 50ms to avoid coordinates jumping directly to 0/0 and avoid animation
            setTimeout(function () { return (el.style.right = el.style.bottom = '0'); }, 50);
            return unminimize;
        };
        _this.state = {
            unminimize: null,
        };
        return _this;
    }
    StateVisWindow.prototype.componentWillReceiveProps = function (nextProps) {
        if (this.props.minimized !== nextProps.minimized) {
            var unminimize_1 = this.state.unminimize;
            if (unminimize_1) {
                this.setState({ unminimize: null }, function () { return unminimize_1(); });
            }
            else {
                this.setState({ unminimize: this.minimize() });
            }
        }
    };
    StateVisWindow.prototype.componentWillUnmount = function () {
        this.deregisterFns.forEach(function (fn) { return fn(); });
    };
    StateVisWindow.prototype.componentDidMount = function () {
        if (typeof MutationObserver === 'function') {
            this.monitorResizeEvents();
        }
    };
    /** The uirStateVisContainer class enables resize: both. This function listens for resize events */
    StateVisWindow.prototype.monitorResizeEvents = function () {
        var _this = this;
        var _width = this.el.style.width;
        var _height = this.el.style.height;
        var observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                if (mutation.attributeName == 'style') {
                    var el = mutation.target, newwidth = el['style'].width, newheight = el['style'].height;
                    if (newwidth !== _width || newheight !== _height) {
                        _width = newwidth;
                        _height = newheight;
                        var width = parseInt(newwidth.replace(/px$/, ''));
                        var height = parseInt(newheight.replace(/px$/, ''));
                        _this.props.onResize({ width: width, height: height });
                    }
                }
            });
        });
        var config = {
            attributes: true,
            childList: false,
            characterData: false,
            subtree: false,
            attributeFilter: ['style'],
        };
        observer.observe(this.el, config);
        this.deregisterFns.push(function () { return observer.disconnect(); });
    };
    StateVisWindow.prototype.render = function () {
        var _this = this;
        return (v("div", { className: "uirStateVisContainer", ref: function (el) { return (_this.el = el); } }, this.props.children));
    };
    return StateVisWindow;
}(d));

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\n#uirStateVisualizer {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 16px;\n  font-family: sans-serif;\n  font-weight: normal;\n  vertical-align: baseline;\n  line-height: 1;\n  display: block;\n  box-sizing: content-box;\n}\n#uirStateVisualizer svg {\n  box-sizing: content-box;\n}\n\n.uirStateVisContainer {\n  z-index: 999;\n  position: fixed;\n  right: 32px;\n  bottom: 64px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.8);\n  transform: scale(1);\n  transform-origin: right bottom;\n  transition: right 0.5s ease, bottom 0.5s ease, transform 0.5s ease;\n  overflow: hidden;\n  resize: both;\n}\n\n.uirStateVisContainer.minimized {\n  cursor: pointer;\n  transform: scale(0.25);\n  z-index: 1000;\n}\n\n.uirStateVisContainer:hover {\n  outline: 2px solid rgba(0, 0, 0, 0.35);\n}\n\n.uirStateVisContainer:hover .uirStateVisControls {\n  visibility: visible;\n}\n\n.uirStateVisContainer .uirStateVisControls {\n  visibility: hidden;\n  display: flex;\n  width: 100%;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  flex: 1 0 auto;\n  z-index: 1;\n}\n\n.uirStateVisContainer .uirStateVisControls .uirStateVisIcons span svg {\n  padding: 3px;\n  fill: #777777;\n}\n\n.uirStateVisContainer .uirStateVisControls .uirStateVisIcons span:hover svg {\n  fill: black;\n}\n\n.uirStateVisHover > div {\n  transition: opacity 500ms ease;\n  opacity: 0;\n  height: 0;\n  padding: 0;\n\n  position: absolute;\n  top: 0;\n  right: 0;\n  overflow: hidden;\n\n  margin-top: 26px;\n  font-size: 14px;\n}\n\n.uirStateVisHover > div.hoverBlock {\n  left: 0;\n  border-bottom: none;\n  background: white;\n}\n\n.uirStateVisHover:hover > div.hoverBlock {\n  border-bottom: 2px solid lightgrey;\n}\n\n.uirStateVisHover:hover > div {\n  opacity: 1;\n  height: auto;\n}\n\n.uirStateVisHover .uirStateVisLayoutPrefs {\n  padding: 12px 24px;\n}\n\n.uirStateVisContainer .statevis {\n  flex: 1 1 auto;\n  transition: all 1s ease;\n}\n\n.uirStateVisWindowOverlay {\n  display: none;\n}\n\n.minimized .uirStateVisWindowOverlay {\n  display: block;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 1000;\n}\n\n.statevis circle {\n  /*r: 10;*/\n  fill: #fff;\n  stroke: grey;\n  /*stroke-width: 3px;*/\n\n  transition-property: r, fill, stroke, stroke-width;\n  transition-duration: 350ms;\n  transition-timing-function: ease-in-out;\n\n  cursor: pointer;\n}\n\n.statevis text {\n  transition-property: x, y, font-size, stroke, stroke-width;\n  transition-duration: 350ms;\n  transition-timing-function: ease-in-out;\n}\n\n.statevis circle.future {\n  /*r: 10;*/\n  stroke: grey;\n  stroke-dasharray: 7, 5;\n  /*stroke-width: 1px;*/\n}\n\n.statevis circle.entered {\n  /*r: 10;*/\n  stroke: black;\n  fill: lightgreen;\n}\n\n.statevis circle.entered:after {\n  content: '<text>Entered</text>';\n}\n\n.statevis circle.active {\n  /*r: 15;*/\n  fill: green;\n  stroke: black;\n}\n\n.statevis circle.collapsed {\n  stroke-dasharray: 2, 2;\n}\n\n.statevis text {\n  font-family: sans-serif;\n}\n\n.statevis .link {\n  fill: none;\n  stroke: #ccc;\n  /*stroke-width: 2px;*/\n}\n\n.statevis text.label {\n  fill: grey;\n  alignment-baseline: middle;\n}\n\n.draggable {\n  cursor: move;\n}\n\n/*.draggable:hover {*/\n/*outline: 3px solid rgba(0,0,0,0.15)*/\n/*}*/\n";
styleInject(css_248z);

var StateVisualizer = /** @class */ (function (_super) {
    __extends(StateVisualizer, _super);
    function StateVisualizer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { height: null, width: null, renderer: DEFAULT_RENDERER, minimized: false };
        _this.deregisterFns = [];
        _this.svgWidth = function () { return _this.props.width || _this.state.width || 350; };
        _this.svgHeight = function () { return (_this.props.height || _this.state.height || 250) - 25; };
        return _this;
    }
    /**
     * Creates a new StateVisualizer and adds it to the document.
     *
     * @param router the UIRouter object
     * @param element (optional) the element where the StateVisualizer should be placed.
     *                If no element is passed, an element will be created in the body.
     * @param props height/width properties default: { height: 350, width: 250 }
     * @param options StateVisualizerOptions used to customise the styling of the visualizer
     *
     * # Angular 1 + UI-Router (1.0.0-beta.2 and higher):
     *
     * Inject the router (`$uiRouter`) in a run block, then call StateVisualizer.create();
     *
     * ```
     * app.run(function($uiRouter) {
     *   StateVisualizer.create($uiRouter);
     * });
     * ```
     *
     * # Angular 1 + UI-Router 1.0.0-alpha.1 through 1.0.0-beta.1:
     *
     * Inject the router (`ng1UIRouter`) in a run block, then call StateVisualizer.create();
     *
     * ```
     * app.run(function(ng1UIRouter) {
     *   StateVisualizer.create(ng1UIRouter);
     * });
     * ```
     *
     * Angular 2:
     *
     * Call StateVisualizer.create() from your UIRouterConfig
     *
     * ```
     * export class MyUIRouterConfig extends UIRouterConfig {
     *   configure(router: UIRouter) {
     *     StateVisualizer.create(router);
     *   }
     * }
     * ```
     *
     * React:
     *
     * Call StateVisualizer.create() from your bootstrap
     *
     * ```
     * let router = new UIRouterReact();
     * StateVisualizer.create(router);
     * router.start();
     * ```
     *
     * @return the element that was bootstrapped.
     *         You can destroy the component using:
     *         [ReactDOM.unmountComponentAtNode](https://facebook.github.io/react/docs/top-level-api.html#reactdom.unmountcomponentatnode)
     */
    StateVisualizer.create = function (router, element, props, options) {
        if (props === void 0) { props = {}; }
        if (!element) {
            element = document.createElement('div');
            element.id = 'uirStateVisualizer';
        }
        var initialProps = Object.assign({}, props, { router: router, minimizeAfter: 2500, visualizationOptions: options });
        var _render = function () {
            document.body.appendChild(element);
            M(v(StateVisualizer, initialProps), element);
        };
        if (document.readyState === 'interactive' || document.readyState === 'complete') {
            _render();
        }
        else {
            document.addEventListener('DOMContentLoaded', _render, false);
        }
        return element;
    };
    StateVisualizer.prototype.dispose = function () {
        M(null, document.getElementById('uirStateVisualizer'), this.rootEl);
    };
    StateVisualizer.prototype.handleRendererChange = function (renderer) {
        this.setState({ renderer: renderer });
    };
    StateVisualizer.prototype.cancelAutoMinimize = function () {
        if (this.minimizeTimeout) {
            clearTimeout(this.minimizeTimeout);
            this.minimizeTimeout = null;
        }
    };
    StateVisualizer.prototype.componentWillUnmount = function () {
        this.deregisterFns.forEach(function (fn) { return fn(); });
    };
    StateVisualizer.prototype.draggable = function () {
        var controlsEl = this.windowEl.querySelector('.uirStateVisControls');
        var visEl = this.windowEl.querySelector('.statevis');
        this.deregisterFns.push(draggable(controlsEl, dragActions.move(this.windowEl)));
        this.deregisterFns.push(draggable(visEl, dragActions.move(this.windowEl)));
    };
    StateVisualizer.prototype.componentDidMount = function () {
        var _this = this;
        this.draggable();
        if (this.props.minimizeAfter) {
            var doMinimize = function () { return _this.setState({ minimized: true }); };
            this.minimizeTimeout = setTimeout(doMinimize, this.props.minimizeAfter);
        }
    };
    StateVisualizer.prototype.render = function () {
        var _this = this;
        var minimized = this.state.minimized;
        return (v("div", { ref: function (el) { return (_this.rootEl = el); }, onMouseDown: this.cancelAutoMinimize.bind(this), onMouseEnter: this.cancelAutoMinimize.bind(this) },
            v(StateVisWindow, { minimized: this.state.minimized, ref: function (windowRef) { return (_this.windowEl = (windowRef && windowRef.el) || _this.windowEl); }, onResize: function (_a) {
                    var width = _a.width, height = _a.height;
                    return _this.setState({ width: width, height: height });
                } },
                v("div", { onClick: function () { return _this.setState({ minimized: false }); }, className: "uirStateVisWindowOverlay " + (minimized ? 'minimized' : '') }),
                v(Controls, { router: this.props.router, onRendererChange: this.handleRendererChange.bind(this), onMinimize: function () { return _this.setState({ minimized: true }); }, onClose: function () { return _this.dispose(); } }),
                v(StateTree, { router: this.props.router, nodeOptions: this.props.visualizationOptions.node, width: this.svgWidth(), height: this.svgHeight(), renderer: this.state.renderer }))));
    };
    return StateVisualizer;
}(d));

var PopoverHeading = /** @class */ (function (_super) {
    __extends(PopoverHeading, _super);
    function PopoverHeading() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PopoverHeading.prototype.render = function () {
        var _this = this;
        var tackClass = function () { return 'uir-icon uir-icon-thumb-tack ' + (_this.props.pinned ? '' : 'uir-rotate-35'); };
        var expandClass = function () {
            return 'uir-icon uirTranVis_tooltipRight ' + (_this.props.expanded ? 'uir-icon-toggle-on' : 'uir-icon-toggle-off');
        };
        return (v("div", { className: "uirTranVis_panelHeading uirTranVis_heading" },
            v("div", { style: { cursor: 'pointer' }, onClick: this.props.togglePinned },
                v("i", { className: tackClass() })),
            v("h3", { className: "uirTranVis_panelTitle" },
                "Transition #",
                this.props.transition.$id),
            v("div", { style: { cursor: 'pointer' }, onClick: this.props.toggleExpand },
                v("i", { className: expandClass() }))));
    };
    return PopoverHeading;
}(d));

var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Modal.prototype.componentDidMount = function () {
        var el = this._ref;
        setTimeout(function () {
            var fades = el.getElementsByClassName('uir-fade');
            [].slice.apply(fades).forEach(function (node) { return (node.className += ' in'); });
        }, 35);
    };
    Modal.prototype.render = function () {
        var _this = this;
        return (v("div", { ref: function (ref) { return (_this._ref = ref); } },
            v("div", { className: "uirTranVis_modal-backdrop uir-fade", style: { zIndex: 1040 } }),
            v("div", { tabIndex: -1, className: "uirTranVis_modal uir-fade", style: { zIndex: 1050, display: 'block' } },
                v("div", { className: "uirTranVis_modal-dialog modal-lg" },
                    v("div", { className: "uirTranVis_modal-content" }, this.props.children)))));
    };
    Modal.show = function (modalTitle, id, value, component) {
        var modal = document.body.querySelector('#uirTranVis_modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'uirTranVis_modal';
            document.body.appendChild(modal);
        }
        var Nothing = function () { return null; };
        var close = function () { return M(v(Nothing, null), document.body, modal); };
        M(v(component, { close: close, modalTitle: modalTitle, id: id, value: value }), modal);
    };
    return Modal;
}(d));

var Pretty = /** @class */ (function (_super) {
    __extends(Pretty, _super);
    function Pretty() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.preStyle = {
            display: 'block',
            padding: '10px 30px',
            margin: '0',
        };
        _this.state = { show: true };
        return _this;
    }
    Pretty.prototype.toggle = function () {
        this.setState({
            show: !this.state.show,
        });
    };
    Pretty.prototype.render = function () {
        return (v("div", null, this.state.show ? v("pre", { style: this.preStyle }, JSON.stringify(this.props.data, null, 2)) : false));
    };
    return Pretty;
}(d));

var ResolveData = /** @class */ (function (_super) {
    __extends(ResolveData, _super);
    function ResolveData() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.close = function () { return _this.props.close(); };
        return _this;
    }
    ResolveData.prototype.render = function () {
        return (v("div", null,
            v(Modal, null,
                v("div", { className: "uirTranVis_modal-header uir-resolve-header" },
                    v("div", { style: { fontSize: '20px' } },
                        this.props.modalTitle,
                        ": ",
                        this.props.id),
                    v("button", { className: "uirTranVis_btn uirTranVis_btnXs uirTranVis_btnPrimary", onClick: this.close },
                        v("i", { className: "uir-icon uir-iconw-close" }))),
                v("div", { className: "uirTranVis_modalBody" },
                    v(Pretty, { data: this.props.value })),
                v("div", { className: "uirTranVis_modalFooter" },
                    v("button", { className: "uirTranVis_btn uirTranVis_btnPrimary", onClick: this.close }, "Close")))));
    };
    return ResolveData;
}(d));

/**
 * Returns a string shortened to a maximum length
 *
 * If the string is already less than the `max` length, return the string.
 * Else return the string, shortened to `max - 3` and append three dots ("...").
 *
 * @param max the maximum length of the string to return
 * @param str the input string
 */
function maxLength(max, str) {
    if (str.length <= max)
        return str;
    return str.substr(0, max - 3) + '...';
}
function stringifyPattern(value) {
    if (value === undefined)
        return 'undefined';
    if (value === null)
        return 'null';
    if (typeof value === 'object' && typeof value.then === 'function')
        return '[Promise]';
    return value;
}
function stringify(o) {
    var seen = [];
    function format(val) {
        if (typeof val === 'object') {
            if (seen.indexOf(val) !== -1)
                return '[circular ref]';
            seen.push(val);
        }
        return stringifyPattern(val);
    }
    return JSON.stringify(o, function (key, val) { return format(val); }).replace(/\\"/g, '"');
}

var KeyValueRow = /** @class */ (function (_super) {
    __extends(KeyValueRow, _super);
    function KeyValueRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KeyValueRow.prototype.render = function () {
        var _a = this.props, _b = _a.tuple, key = _b.key, val = _b.val, classes = _a.classes, modalTitle = _a.modalTitle;
        var showModal = function () { return Modal.show(modalTitle, key, val, ResolveData); };
        // prettier-ignore
        var renderValue = function () {
            if (val === undefined)
                return v("span", { className: "uirTranVis_code" }, "undefined");
            if (val === null)
                return v("span", { className: "uirTranVis_code" }, "null");
            if (typeof val === 'string')
                return v("span", { className: "uirTranVis_code" },
                    "\"",
                    maxLength(100, val),
                    "\"");
            if (typeof val === 'number')
                return v("span", { className: "uirTranVis_code" }, val.toString());
            if (typeof val === 'boolean')
                return v("span", { className: "uirTranVis_code" }, val.toString());
            if (Array.isArray(val))
                return v("span", { className: "link", onClick: showModal }, "[Array]");
            if (typeof val === 'object')
                return v("span", { className: "link", onClick: showModal }, "[Object]");
            if (typeof val.toString === 'function')
                return v("span", null, maxLength(100, val.toString()));
        };
        return (v("div", { className: classes.div },
            v("div", { className: classes.key },
                key,
                ":"),
            v("div", { className: classes.val }, renderValue())));
    };
    return KeyValueRow;
}(d));
var KeysAndValues = /** @class */ (function (_super) {
    __extends(KeysAndValues, _super);
    function KeysAndValues() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { collapseFalsy: true };
        return _this;
    }
    KeysAndValues.prototype.makeBuckets = function (definitions, data) {
        var makeBucket = function (def) { return ({
            label: def.label,
            is: function (val) { return val === def.value; },
            value: def.value,
            count: 0,
            data: {},
        }); };
        var defaultBucket = {
            label: 'default',
            is: function () { return true; },
            count: 0,
            data: {},
        };
        var buckets = definitions.map(makeBucket).concat(defaultBucket);
        Object.keys(data).forEach(function (key) {
            var bucket = buckets.find(function (bucket) { return bucket.is(data[key]); });
            bucket.data[key] = data[key];
            bucket.value = data[key];
            bucket.count++;
        });
        return buckets;
    };
    KeysAndValues.prototype.render = function () {
        var _this = this;
        var _a = this.props, data = _a.data, classes = _a.classes, modalTitle = _a.modalTitle;
        var groupedValues = this.props.groupedValues || KeysAndValues.falsyGroupDefinitions;
        var enableGroupToggle = this.props.enableGroupToggle || false;
        var isCollapsed = this.state.collapseFalsy;
        var buckets = this.makeBuckets(groupedValues, data);
        var defaultBucket = buckets.find(function (bucket) { return bucket.label === 'default'; });
        var groupedBuckets = buckets.filter(function (bucket) { return !!bucket.count && bucket !== defaultBucket; });
        var groupedCount = groupedBuckets.reduce(function (total, bucket) { return (total += bucket.count); }, 0);
        var tuples = Object.keys(defaultBucket.data).map(function (key) { return ({ key: key, val: defaultBucket.data[key] }); });
        var groupedTuples = groupedBuckets.map(function (bucket) {
            var key = Object.keys(bucket.data)
                .sort()
                .join(', ');
            var val = bucket.value;
            return { key: key, val: val };
        });
        var showGroupToggle = enableGroupToggle && groupedCount > 1;
        return (v("div", { className: "uirTranVis_keysAndValues" },
            tuples.map(function (tuple) { return v(KeyValueRow, { key: tuple.key, tuple: tuple, classes: classes, modalTitle: modalTitle }); }),
            showGroupToggle &&
                !!groupedTuples.length && (v("a", { href: "javascript:void(0)", onClick: function () { return _this.setState({ collapseFalsy: !isCollapsed }); }, className: "uirTranVis_keyValue" },
                isCollapsed ? 'show' : 'hide',
                " ",
                groupedCount,
                " ",
                groupedBuckets.map(function (bucket) { return bucket.label; }).join(' or '),
                ' ',
                "parameter values")),
            (!showGroupToggle || !this.state.collapseFalsy) &&
                groupedTuples.map(function (tuple) { return (v(KeyValueRow, { key: tuple.key, tuple: tuple, classes: classes, modalTitle: modalTitle })); })));
    };
    KeysAndValues.falsyGroupDefinitions = [
        { value: undefined, label: 'undefined' },
        { value: null, label: 'null' },
        { value: '', label: 'empty string' },
    ];
    return KeysAndValues;
}(d));

var TransSummary = /** @class */ (function (_super) {
    __extends(TransSummary, _super);
    function TransSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TransSummary.prototype.render = function () {
        return (v("div", { className: "uirTranVis_transSummary" },
            v("div", { className: "uirTranVis_summaryData" },
                v("span", null, "From:"),
                v("strong", null, this.props.trans.from().name || '(root)')),
            v("div", { className: "uirTranVis_summaryData" },
                v("span", null, "To:"),
                v("strong", null, this.props.trans.to().name || '(root)')),
            v("div", { className: "uirTranVis_summaryData" },
                v("span", null, "Result:"),
                v("div", null,
                    v("strong", null, this.props.status),
                    this.props.rejection ? v("span", null,
                        ": ",
                        this.props.rejection) : null)),
            v("div", { className: "uirTranVis_summaryHeading" }, "Parameter Values:"),
            v("div", null,
                v(KeysAndValues, { groupedValues: KeysAndValues.falsyGroupDefinitions, enableGroupToggle: true, data: this.props.trans.params(), modalTitle: "Parameter value", classes: { div: 'uirTranVis_keyValue', key: '', val: '' } }))));
    };
    return TransSummary;
}(d));

var NodeDetail = /** @class */ (function (_super) {
    __extends(NodeDetail, _super);
    function NodeDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NodeDetail.prototype.stateName = function () {
        var node = this.props.node;
        var name = node && node.state && node.state.name;
        if (name === '')
            name = '(root)';
        return name && name.split('.').reverse()[0];
    };
    NodeDetail.prototype.params = function () {
        var node = this.props.node;
        return (node &&
            node.paramSchema.reduce(function (params, param) {
                params[param.id] = node.paramValues[param.id];
                return params;
            }, {}));
    };
    NodeDetail.prototype.resolves = function () {
        var asString = function (val) { return (typeof val === 'string' ? val : maxLength(30, stringify(val))); };
        var node = this.props.node;
        var ignoredTokens = ['$stateParams', '$transition$', '$state$', this.props.trans.constructor];
        return (node &&
            node.resolvables.filter(function (r) { return ignoredTokens.indexOf(r.token) === -1; }).reduce(function (acc, r) {
                acc[asString(r.token)] = r.data;
                return acc;
            }, {}));
    };
    NodeDetail.prototype.render = function () {
        if (!this.props.node)
            return null;
        var params = this.params();
        var resolves = this.resolves();
        return !this.props.node ? null : (v("div", { className: "uirTranVis_nodeDetail" },
            v("div", { className: "uirTranVis_heading" },
                v("div", { className: "uirTranVis_nowrap uirTranVis_deemphasize" },
                    "(",
                    this.props.type,
                    " state)"),
                v("div", { className: "uirTranVis_stateName" }, this.stateName())),
            !!Object.keys(params).length && (v("div", { className: "params" },
                v("div", { className: "uirTranVis_paramsLabel uirTranVis_deemphasize" }, "Parameter values"),
                v(KeysAndValues, { data: this.params(), classes: { div: 'uirTranVis_keyValue' }, modalTitle: "Parameter value" }))),
            !!Object.keys(resolves).length && (v("div", { className: "params resolve" },
                v("div", { className: "uirTranVis_resolveLabel uirTranVis_deemphasize" }, "Resolved data"),
                v(KeysAndValues, { data: this.resolves(), classes: { div: 'uirTranVis_keyValue' }, modalTitle: "Resolved value" })))));
    };
    return NodeDetail;
}(d));

var FlowArrow = /** @class */ (function (_super) {
    __extends(FlowArrow, _super);
    function FlowArrow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.height = 1000;
        _this.renderCurve = function () { return (v("path", { stroke: "white", "stroke-width": "20", fill: "none", d: "M50 " + _this.height + " V 70 Q50 20, 100 20 Q150 20, 150 70 V " + _this.height })); };
        _this.renderVerticalLine = function () { return (v("svg", { viewBox: "0 70 100 " + (_this.height - 70), className: "flowArrowSvg" }, _this.renderCurve())); };
        _this.renderCurveRU = function () { return (v("svg", { viewBox: "0 0 100 " + _this.height, className: "flowArrowSvg top" }, _this.renderCurve())); };
        _this.renderCurveRD = function () { return (v("svg", { viewBox: "100 0 100 " + _this.height, className: "flowArrowSvg top" }, _this.renderCurve())); };
        _this.renderArrowU = function () { return (v("svg", { viewBox: "0 0 100 " + _this.height, className: "flowArrowSvg top" },
            v("path", { stroke: "white", "stroke-width": "20", fill: "none", d: "M50 " + _this.height + " V 20 " }),
            v("polygon", { fill: "white", stroke: "white", "stroke-width": "20", points: "50,20 35,40 65,40" }))); };
        _this.renderArrowD = function () { return (v("svg", { viewBox: "0 0 100 " + _this.height, className: "flowArrowSvg bottom" },
            v("path", { stroke: "white", "stroke-width": "20", fill: "none", d: "M50 0 V " + (_this.height - 20) }),
            v("polygon", { fill: "white", stroke: "white", "stroke-width": "20", points: "50," + (_this.height - 20) + " 35," + (_this.height - 40) + " 65," + (_this.height - 40) }))); };
        return _this;
    }
    FlowArrow.prototype.render = function () {
        var _this = this;
        var renderSvg = function (type) {
            switch (type) {
                case 'V':
                    return _this.renderVerticalLine();
                case 'RU':
                    return _this.renderCurveRU();
                case 'RD':
                    return _this.renderCurveRD();
                case 'AU':
                    return _this.renderArrowU();
                case 'AD':
                    return _this.renderArrowD();
                default:
                    return null;
            }
        };
        return (v("div", { className: "flowArrowCell" },
            v("div", { style: { overflow: 'hidden', position: 'relative', flex: '1' } }, renderSvg(this.props.top)),
            v("div", { style: { overflow: 'hidden', position: 'relative', flex: '1' } }, renderSvg(this.props.bottom))));
    };
    return FlowArrow;
}(d));

var NodePaths = /** @class */ (function (_super) {
    __extends(NodePaths, _super);
    function NodePaths() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            retained: [],
            enterExit: [],
        };
        return _this;
    }
    NodePaths.prototype.componentDidMount = function () {
        var trans = this.props.transition;
        var tcPaths = Object.assign({}, trans.treeChanges());
        // Ignore the root state when drawing paths.
        ['entering', 'exiting', 'retained'].forEach(function (key) { return (tcPaths[key] = tcPaths[key].filter(function (node) { return !!node.state.name; })); });
        var partialKey = function (pathname, idx) {
            var node = tcPaths[pathname][idx];
            return node ? node.state.name : '';
        };
        var key = function (pathname1, pathname2, idx) {
            return trans.$id + "." + partialKey(pathname1, idx) + "-" + partialKey(pathname2, idx);
        };
        var retained = tcPaths.retained.map(function (node, idx) { return ({
            key: key('retained', 'retained', idx),
            to: node,
            toType: 'retain',
            from: node,
            fromType: 'retain',
        }); });
        var enterExit = [];
        var maxPathLength = Math.max(tcPaths.exiting.length, tcPaths.entering.length);
        for (var i = 0; i < maxPathLength; i++) {
            enterExit.push({
                key: key('exiting', 'entering', i),
                to: tcPaths.entering[i],
                toType: tcPaths.entering[i] && 'enter',
                from: tcPaths.exiting[i],
                fromType: tcPaths.exiting[i] && 'exit',
            });
        }
        this.setState({ retained: retained, enterExit: enterExit });
    };
    NodePaths.prototype.render = function () {
        var _this = this;
        var retained = this.state.retained || [];
        var enterExit = this.state.enterExit || [];
        var lastEnterIdx = enterExit.filter(function (x) { return !!x.toType; }).length - 1;
        return (v("table", { className: "uirTranVis_paths" },
            v("thead", null,
                v("tr", null,
                    v("th", null, "From Path"),
                    v("th", null, "To Path"))),
            v("tbody", null,
                retained.map(function (elem) { return (v("tr", { key: elem.key },
                    v("td", { className: elem.fromType, colSpan: 2 },
                        v(NodeDetail, { trans: _this.props.transition, node: elem.from, type: elem.fromType })))); }),
                enterExit.map(function (elem, idx) { return (v("tr", { key: elem.key },
                    v("td", { colSpan: 2 },
                        v("div", { className: "uirTranVis_Row" },
                            v("div", { className: "" + elem.fromType }, !elem.fromType ? null : (v("div", { className: "uirTranVis_nodeContent" },
                                v(NodeDetail, { trans: _this.props.transition, node: elem.from, type: elem.fromType }),
                                v(FlowArrow, { bottom: "V", top: idx ? 'V' : elem.toType ? 'RU' : 'AU' })))),
                            v("div", { className: "" + elem.toType }, !elem.toType ? null : (v("div", { className: "uirTranVis_nodeContent" },
                                v(FlowArrow, { top: idx ? 'V' : elem.fromType ? 'RD' : 'V', bottom: idx == lastEnterIdx ? 'AD' : 'V' }),
                                v(NodeDetail, { trans: _this.props.transition, node: elem.to, type: elem.toType })))))))); }))));
    };
    return NodePaths;
}(d));

var TransitionPopover = /** @class */ (function (_super) {
    __extends(TransitionPopover, _super);
    function TransitionPopover() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TransitionPopover.prototype.render = function () {
        var _this = this;
        if (!this.props.open && !this.props.pinned)
            return null;
        var classes = function () {
            return 'uirTranVis_transitionDetail uirTranVis_panel panel-default ' +
                (_this.props.pinned ? 'pin ' : '') +
                (_this.props.expanded ? 'expand ' : '') +
                (_this.props.open ? 'showDetail ' : '');
        };
        return (v("div", { className: classes() },
            v(PopoverHeading, { transition: this.props.transition, pinned: this.props.pinned, expanded: this.props.expanded, togglePinned: this.props.togglePinned, toggleExpand: this.props.toggleExpand }),
            v("div", { className: "uirTranVis_panelBody" },
                v(TransSummary, { trans: this.props.transition, status: this.props.status, rejection: this.props.rejection }),
                v("hr", null),
                v(NodePaths, { transition: this.props.transition })),
            v("div", { className: "uirTranVis_downArrow" })));
    };
    return TransitionPopover;
}(d));

var BreadcrumbArrow = /** @class */ (function (_super) {
    __extends(BreadcrumbArrow, _super);
    function BreadcrumbArrow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function () { return _this.props.toggleExpand(); };
        return _this;
    }
    BreadcrumbArrow.prototype.iconClass = function () {
        var iconClasses = {
            running: 'uir-icon uir-spin uir-iconw-spinner',
            success: 'uir-icon uir-iconw-check',
            redirected: 'uir-icon uir-iconw-share',
            ignored: 'uir-icon uir-iconw-circle-o',
            error: 'uir-icon uir-iconw-close',
        };
        return iconClasses[this.props.status];
    };
    BreadcrumbArrow.prototype.render = function () {
        return !this.props.transition ? null : (v("div", { className: this.props.status + ' uirTranVis_historyEntry', onClick: this.handleClick },
            v("div", { className: "uirTranVis_historyEntrySummary" },
                v("div", { className: "uirTranVis_transId" }, this.props.transition.$id),
                v("div", { className: "uirTranVis_status" },
                    this.props.status,
                    !this.props.message ? null : v("span", null,
                        ": ",
                        this.props.message)),
                v("div", { className: "uirTranVis_transName" },
                    v("i", { className: this.iconClass() }),
                    v("span", null, this.props.transition.to().name)))));
    };
    return BreadcrumbArrow;
}(d));

var makeCancelable = function (promise) {
    var hasCanceled_ = false;
    var wrappedPromise = new Promise(function (resolve, reject) {
        promise.then(function (val) { return (hasCanceled_ ? reject({ isCanceled: true }) : resolve(val)); }, function (error) { return (hasCanceled_ ? reject({ isCanceled: true }) : reject(error)); });
    });
    var cancelablePromise = {
        promise: wrappedPromise,
        isCanceled: false,
        cancel: function () {
            cancelablePromise.isCanceled = hasCanceled_ = true;
        },
    };
    return cancelablePromise;
};

var TransitionView = /** @class */ (function (_super) {
    __extends(TransitionView, _super);
    function TransitionView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.transitionPromise = null;
        _this.state = {
            status: 'running',
            message: null,
            rejection: null,
            pinned: false,
            expanded: false,
            open: false,
            deregisterFunctions: [],
        };
        _this.togglePin = function () { return _this.setState({ pinned: !_this.state.pinned }); };
        _this.toggleExpand = function () { return _this.setState({ expanded: !_this.state.expanded }); };
        _this.open = function () { return _this.setState({ open: true }); };
        _this.close = function () { return _this.setState({ open: false }); };
        return _this;
    }
    TransitionView.prototype.componentDidMount = function () {
        var _this = this;
        var trans = this.props.transition;
        var setMessage = function (message) {
            // Transition hooks are computed when the trans starts; they can't be removed while the trans is running.
            if (!_this.transitionPromise.isCanceled) {
                _this.setState({ message: message });
            }
        };
        var statename = function (state) { return state.name || '(root)'; };
        var fns = [];
        fns.push(trans.onStart({}, function () { return setMessage('Starting...'); }, { priority: 10000 }));
        fns.push(trans.onExit({}, function (t, state) { return setMessage("Exiting " + statename(state)); }, { priority: 10000 }));
        fns.push(trans.onRetain({}, function (t, state) { return setMessage("Retained " + statename(state)); }, { priority: 10000 }));
        fns.push(trans.onEnter({}, function (t, state) { return setMessage("Entering " + statename(state)); }, { priority: 10000 }));
        fns.push(trans.onFinish({}, function () { return setMessage("Finishing..."); }));
        this.setState({ deregisterFunctions: fns });
        var success = function () { return _this.setState({ status: 'success', message: null }); };
        var error = function (err) {
            if (err && err.isCanceled)
                return;
            var status = 'error', rejection = null;
            if (err) {
                rejection = err && err.message;
                var type = err && err.type;
                if (type == 2 && err.redirected === true) {
                    status = 'redirected';
                    var targetState = err['detail'];
                    var toState = targetState.name();
                    var toParams = JSON.stringify(targetState.params());
                    rejection = maxLength(100, toState + "(" + toParams) + ')';
                }
                if (type == 5) {
                    status = 'ignored';
                    rejection = 'All states and parameters in the To and From paths are identical.';
                }
            }
            _this.setState({ status: status, rejection: rejection, message: null });
        };
        this.transitionPromise = makeCancelable(trans.promise);
        this.transitionPromise.promise.then(success, error);
    };
    TransitionView.prototype.componentWillUnmount = function () {
        this.transitionPromise.cancel();
        if (this.state.deregisterFunctions) {
            this.state.deregisterFunctions.forEach(function (fn) { return fn(); });
        }
    };
    TransitionView.prototype.render = function () {
        return (v("div", { onMouseEnter: this.open, onMouseLeave: this.close },
            v(TransitionPopover, { transition: this.props.transition, status: this.state.status, rejection: this.state.rejection, pinned: this.state.pinned, expanded: this.state.expanded, open: this.state.open, togglePinned: this.togglePin, toggleExpand: this.toggleExpand }),
            v(BreadcrumbArrow, { transition: this.props.transition, status: this.state.status, message: this.state.message, toggleExpand: this.toggleExpand })));
    };
    return TransitionView;
}(d));

var css_248z$1 = "/*\n    .uirTranVis_history is the breadcrumbs and transition details block.\n    It fills the footer of the screen, and scrolls horizontally.\n    Mouse clicks should pass through to the elements underneath.\n*/\n\n.uirTranVis_history {\n    display: flex;\n    align-items: flex-end;\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    padding: 0 16px;\n    overflow-x: scroll;\n    z-index: 999;\n    /* disable mouse clicks, hover, etc, for the overall div */\n    pointer-events: none;\n}\n\n.uirTranVis_history > * {\n    /* Enable mouse for any sub-elements (the breadcrumb elemetns and detail elements) */\n    pointer-events: all;\n    flex: 0 0 auto;\n}\n\n/*  workaround for modal screen, and chrome and safari not allowing it to be\n    visible outside the .uirTranVis_history overflow while the .uirTranVis_history div is scrolled */\n.fullScreen .uirTranVis_history {\n    top: 0;\n}\n\n/* A single history entry (breadcrumb) arrow looking thing */\n.uirTranVis_history .uirTranVis_historyEntry {\n    position: relative;\n    text-align: center;\n    padding: 12px 30px;\n    margin-bottom: 6px;\n    margin-right: 6px;\n    color: #000;\n    cursor: pointer;\n}\n\n\n/* History entry arrow CSS */\n.uirTranVis_history .uirTranVis_historyEntry:before,.uirTranVis_historyEntry:after {\n    content: '';\n    position: absolute;\n    background: darkgrey;\n    left: 0;\n    height: 50.2%; /* +0.2% so firefox doesn't render a white line down the center */\n    width: 100%;\n    border: 1px solid black;\n    box-sizing: border-box;\n    z-index: -1;\n}\n\n.uirTranVis_history .uirTranVis_historyEntry:before {\n    top: 0;\n    border-bottom: 0;\n    -webkit-transform: skew(40deg, 0deg);\n    -ms-transform: skew(40deg, 0deg);\n    transform: skew(40deg, 0deg);\n}\n\n.uirTranVis_history .uirTranVis_historyEntry:after {\n    bottom: 0;\n    border-top: 0;\n    -webkit-transform: skew(-40deg, 0deg);\n    -ms-transform: skew(-40deg, 0deg);\n    transform: skew(-40deg, 0deg);\n}\n\n/*.uirTranVis_historyEntry::before height: 51% (|| ::after) */\n\n/* Styling for breadcrumb contents */\n.uirTranVis_historyEntry .uirTranVis_historyEntrySummary {\n    color: white;\n    white-space: nowrap;\n    font-size: small;\n}\n.uirTranVis_historyEntry .uirTranVis_historyEntrySummary .uirTranVis_transId {\n    position: absolute;\n    top: 3px;\n    left: 10px;\n    font-size: smaller;\n}\n.uirTranVis_historyEntry .uirTranVis_historyEntrySummary .uirTranVis_status {\n    position: absolute;\n    bottom: 3px;\n    left: 10px;\n    font-size: smaller;\n}\n.uirTranVis_historyEntry .uirTranVis_historyEntrySummary .uirTranVis_transName {\n    font-weight: bold;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: center\n}\n.uirTranVis_historyEntry .uirTranVis_historyEntrySummary .uirTranVis_transName span {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    direction: rtl;\n}\n\n.uirTranVis_transSummary {\n    margin: 8px 0;\n}\n.uirTranVis_transSummary .uirTranVis_summaryHeading {\n    background-color: #f5f5f5;\n    margin: 8px -16px;\n    padding: 4px 16px;\n}\n.uirTranVis_transSummary .uirTranVis_summaryData {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: baseline;\n}\n.uirTranVis_transSummary .uirTranVis_summaryData span {\n    min-width: 60px;\n    text-align: right;\n    padding-right: 6px;\n}\n.uirTranVis_transSummary .uirTranVis_summaryData strong {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    direction: rtl;\n}\n\n.uirTranVis_history .uirTranVis_code {\n    padding: 0px 2px;\n    color: black;\n    background: #e6e6e6;\n    margin: 0;\n    font-family: monospace;\n}\n\n/* breadcrumb/history entry color coding */\n.uirTranVis_history .uirTranVis_historyEntry:before,.uirTranVis_historyEntry:after {\n    background: #737373;\n}\n.uirTranVis_history .uirTranVis_historyEntry:hover:before,.uirTranVis_historyEntry:hover:after {\n    background: #a6a6a6;\n}\n\n.uirTranVis_history .uirTranVis_historyEntry.success:before,.uirTranVis_historyEntry.success:after {\n    background: #45803b;\n}\n.uirTranVis_history .uirTranVis_historyEntry.success:hover:before,.uirTranVis_historyEntry.success:hover:after {\n    background: #19a600;\n}\n\n\n.uirTranVis_history .uirTranVis_historyEntry.error:before,.uirTranVis_historyEntry.error:after {\n    background: #bf1f1d;\n}\n.uirTranVis_history .uirTranVis_historyEntry.error:hover:before,.uirTranVis_historyEntry.error:hover:after {\n    background: #e62622;\n}\n\n\n.uirTranVis_history .uirTranVis_historyEntry.ignored:before,.uirTranVis_historyEntry.ignored:after {\n    background: #e68b05;\n}\n.uirTranVis_history .uirTranVis_historyEntry.ignored:hover:before,.uirTranVis_historyEntry.ignored:hover:after {\n    background: #ff9808;\n}\n\n.uirTranVis_history .uirTranVis_historyEntry.redirected:before,.uirTranVis_historyEntry.redirected:after {\n    background: #e68b05;\n}\n.uirTranVis_history .uirTranVis_historyEntry.redirected:hover:before,.uirTranVis_historyEntry.redirected:hover:after {\n    background: #ff9808;\n}\n\n.uirTranVis_history .uirTranVis_keyValue {\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: space-between;\n    align-items: baseline;\n}\n\n.uirTranVis_history .uirTranVis_keyValue + .uirTranVis_keyValue {\n    margin-top: 3px;\n}\n\n\n\n\n/* The transition detail popover (when hovering over a breadcrumb) */\n.uirTranVis_transitionDetail {\n    border: 1px solid lightgrey;\n    font-size: small;\n    transition: box-shadow 0.5s ease,  border 1.0s ease\n}\n\n/* Pointer element points from the uirTranVis_transitionDetail to the breadcrumb */\n.uirTranVis_transitionDetail .uirTranVis_downArrow {\n    position: relative;\n    width: 100%;\n    bottom: -10px;\n    margin-bottom: 10px;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_downArrow:before, .uirTranVis_transitionDetail .uirTranVis_downArrow:after {\n    content: \"\";\n    position: absolute;\n    border-left: 10px solid transparent;\n    border-right: 10px solid transparent;\n    top: 100%;\n    left: 50%;\n    margin-left: -10px;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_downArrow:before {\n    border-top: 10px solid lightgray;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_downArrow:after{\n    border-top: 10px solid white;\n    margin-top: -1px;\n    z-index: 1;\n}\n\n\n/* The layout and styling of the transition detail popover */\n/*.uirTranVis_transitionDetail .panel-heading {*/\n    /*text-align: center;*/\n/*}*/\n\n.uirTranVis_transitionDetail table {\n    border-collapse: collapse;\n}\n\n.uirTranVis_transitionDetail th {\n    text-align: center;\n    font-size: small;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_heading {\n    display: flex;\n    flex-flow: row-reverse nowrap;\n    justify-content: space-between;\n    align-items: baseline;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_heading > *  {\n    flex: 0 1 auto;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_heading > * i {\n    transition: all 0.5s ease;\n}\n\n.uirTranVis_transitionDetail table.uirTranVis_paths {\n    width: 100%;\n}\n\n.uirTranVis_transitionDetail table.uirTranVis_paths td {\n    color: white;\n    border: 0;\n    font-size: small;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_transSummary .uirTranVis_keyValue > div:nth-child(2){\n    padding-left: 8px;\n    font-weight: normal;\n}\n\n\n.uirTranVis_transitionDetail td {\n    padding: 0;\n}\n\n.uirTranVis_transitionDetail td .flowArrowCell {\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: stretch;\n    justify-content: space-between;\n    width: 12px;\n    transition: width 0.25s ease;\n    height: auto;\n    flex: 0 0 auto;\n}\n.uirTranVis_transitionDetail.expand td .flowArrowCell { width: 24px; }\n\n.uirTranVis_transitionDetail .exit  .flowArrowSvg          { right: 0; }\n.uirTranVis_transitionDetail .enter .flowArrowSvg          { left: 0; }\n.uirTranVis_transitionDetail        .flowArrowSvg.bottom   { bottom: 0 }\n.uirTranVis_transitionDetail        .flowArrowSvg.top      { top: 0 }\n.uirTranVis_transitionDetail        .flowArrowSvg {\n    position: absolute;\n    width: 100%;\n    height: auto;\n    transition: width 0.25s ease;\n}\n\n/* color code path elements by retained/exited/entered */\n.uirTranVis_transitionDetail .retain {\n    background-color: #737273;\n}\n\n.uirTranVis_transitionDetail .exit {\n    background-color: #7c1010;\n}\n\n.uirTranVis_transitionDetail .enter {\n    background-color: #31592a;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_deemphasize {\n    color: #eaeaea;\n    font-size: x-small;\n}\n\n/* Styling for parameter values and resolve values */\n.uirTranVis_transitionDetail .params {\n    background-color: rgba(255,255,255,0.15);\n    padding: 0;\n    opacity: 0;\n    overflow: hidden;\n    transition: opacity 1s ease;\n    max-height: 0;\n}\n\n.uirTranVis_transitionDetail.expand .params {\n    display: block;\n    border-radius: 4px;\n    box-shadow: 1px 1px 2px black;\n    padding: 8px;\n    max-height: 250px;\n    overflow-y: auto;\n    opacity: 1;\n    margin: 8px 0;\n}\n\n.uirTranVis_transitionDetail.pin {\n    box-shadow: 4px 4px 12px rgba(0,0,0,0.3);\n    border: 1px solid black;\n}\n\n.uirTranVis_transitionDetail.pin .uirTranVis_downArrow:before {\n    border-top-color: black;\n}\n\n\n/* When showing expanded details, put space between path elements */\n.uirTranVis_transitionDetail.expand table.uirTranVis_paths td {\n    max-height: 100px;\n    vertical-align: top;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_Row {\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: space-between;\n    align-items: stretch;\n    min-width: 400px;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_Row > div {\n    flex: 1 0 50%;\n    min-width: 0;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_nodeContent {\n    display: flex;\n    flex-flow: row nowrap;\n    min-height: 16px;\n    transition: min-height 0.25s ease;\n}\n\n.uirTranVis_transitionDetail.expand .uirTranVis_nodeContent {\n    height: 100%;\n    min-height: 65px;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_nodeDetail {\n    flex: 1 1 auto;\n    padding: 3px 7px;\n    min-width: 0;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_stateName {\n    font-weight: bolder;\n    margin-right: 16px;\n    margin-left: 0;\n}\n.uirTranVis_transitionDetail .enter .uirTranVis_stateName {\n    margin-right: 0;\n    margin-left: 16px;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_nowrap {\n    white-space: nowrap;\n}\n\n.uirTranVis_history .uirTranVis_paramsLabel,\n.uirTranVis_history .uirTranVis_resolveLabel {\n    color: white;\n    margin-top: -8px;\n    text-align: center;\n    font-weight: bold;\n}\n\n\nspan.link {\n    cursor: pointer;\n    text-decoration: underline;\n}\n\n\n.uirTranVis_tooltipRight {\n    display: inline;\n    position: relative;\n    transition: all 1.5s ease;\n}\n\n.uirTranVis_tooltipRight:after {\n    color: rgba(0,0,0,0);\n    text-decoration: none;\n    transition: all 1.5s ease;\n}\n\n.uirTranVis_tooltipRight:hover:after {\n    bottom: 0;\n    color: rgba(0,0,0,0.5);\n    content: attr(title);\n    display: block;\n    position: absolute;\n    white-space: nowrap;\n    font-size: smaller;\n}\n\n\n\n/* Bootstrap stuff */\n\n.uirTranVis_modal .uirTranVis_btnPrimary {\n    color: #fff;\n    background-color: #337ab7;\n    border-color: #2e6da4;\n}\n\n.uirTranVis_modal .uirTranVis_btn {\n    display: inline-block;\n    padding: 6px 12px;\n    margin-bottom: 0;\n    font-size: 14px;\n    font-weight: normal;\n    line-height: 1.42857143;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    -ms-touch-action: manipulation;\n    touch-action: manipulation;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    background-image: none;\n    border: 1px solid transparent;\n    border-radius: 4px;\n}\n\n.uirTranVis_modal .uirTranVis_btnXs, .uirTranVis_btnGroupXs > .uirTranVis_btn {\n    padding: 1px 5px;\n    font-size: 12px;\n    line-height: 1.5;\n    border-radius: 3px;\n}\n\n.uirTranVis_transition {\n    max-width: 550px;\n}\n\n.uirTranVis_transitionDetail span.link {\n    color: white;\n}\n\n.uirTranVis_history *:not(.fa):not(pre):not(.uirTranVis_code) {\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.uirTranVis_transitionDetail .enter .uirTranVis_heading {\n    flex-flow: row nowrap;\n}\n.uirTranVis_transitionDetail .uirTranVis_heading {\n    display: flex;\n    flex-flow: row-reverse nowrap;\n    justify-content: space-between;\n    align-items: baseline;\n}\n\n.uirTranVis_transitionDetail .retain .uirTranVis_heading {\n    justify-content: center;\n}\n\n.uirTranVis_panel {\n    margin-bottom: 20px;\n    background-color: #fff;\n    border: 1px solid lightgrey;\n    border-radius: 4px;\n    -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\n    box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\n}\n\n.uirTranVis_panelHeading {\n    color: #333;\n    background-color: #f5f5f5;\n    border-color: #ddd;\n\n    padding: 10px 16px;\n    border-bottom: 1px solid transparent;\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px;\n}\n\n.uirTranVis_panelTitle {\n    margin-top: 0;\n    margin-bottom: 0;\n    font-size: 16px;\n    color: inherit;\n}\n\n.uirTranVis_panelBody {\n    padding: 0 16px;\n}\n\n\n\n\n\n/* Styles go here */\n.uir-fade {\n    opacity: 0;\n    -webkit-transition: opacity .15s linear;\n    -o-transition: opacity .15s linear;\n    transition: opacity .15s linear;\n}\n\n.uir-fade.in {\n    opacity: 1;\n}\n\n.uirTranVis_modal-backdrop {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1040;\n    background-color: #000;\n}\n\n.uirTranVis_modal-backdrop.in {\n    filter: alpha(opacity=50);\n    opacity: .5;\n}\n\n.uirTranVis_modal {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1050;\n    display: block;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    outline: 0;\n}\n\n\n.uirTranVis_modal-dialog {\n    position: relative;\n    width: auto;\n    margin: 10px;\n}\n\n.uirTranVis_modal-content {\n    position: relative;\n    background-color: #fff;\n    -webkit-background-clip: padding-box;\n    background-clip: padding-box;\n    border: 1px solid #999;\n    border: 1px solid rgba(0, 0, 0, .2);\n    border-radius: 6px;\n    outline: 0;\n    -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, .5);\n    box-shadow: 0 3px 9px rgba(0, 0, 0, .5);\n}\n\n.uirTranVis_modal-header {\n    padding: 16px;\n    border-bottom: 1px solid #e5e5e5;\n}\n\n.uir-resolve-header {\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: space-between;\n    background-color: cornflowerblue;\n}\n\n.uirTranVis_modalBody {\n    color: black;\n    position: relative;\n    padding: 16px;\n}\n\n.uirTranVis_modalFooter {\n    padding: 16px;\n    text-align: right;\n    border-top: 1px solid #e5e5e5;\n}\n\n.uir-icon {\n    display: inline-block;\n    height: 16px; width: 16px;\n    margin: 4px;\n    background-size: cover;\n    background-position: 0 0;\n}\n\n.uir-spin {\n    animation: uirspin 2s infinite;\n    transform: rotate(0deg);\n}\n\n.uir-rotate-35 {\n    transform: rotate(35deg);\n    opacity: 0.5;\n}\n\n@keyframes uirspin {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n}\n\n\n.uir-iconw-spinner       { background-image: url(\"../../images/w/16/spinner.png\"); }\n.uir-iconw-check         { background-image: url(\"../../images/w/16/check.png\"); }\n.uir-iconw-circle-o      { background-image: url(\"../../images/w/16/circle-o.png\"); }\n.uir-iconw-share         { background-image: url(\"../../images/w/16/share.png\"); }\n.uir-iconw-close         { background-image: url(\"../../images/w/16/close.png\"); }\n\n.uir-icon-thumb-tack     { background-image: url(\"../../images/16/thumb-tack.png\"); }\n.uir-icon-toggle-on      { background-image: url(\"../../images/16/toggle-on.png\"); }\n.uir-icon-toggle-off     { background-image: url(\"../../images/16/toggle-off.png\"); }\n";
styleInject(css_248z$1);

/**
 * This outer component manages the list of all transitions (history), and provides a fixed, scrolling viewport.
 * It attaches hooks for lifecycle events and decorates the transition with a descriptive message.
 */
var TransitionVisualizer = /** @class */ (function (_super) {
    __extends(TransitionVisualizer, _super);
    function TransitionVisualizer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.deregisterFns = [];
        _this.state = {
            transitions: [],
            pointerEvents: 'auto',
        };
        _this.cancelPreviousAnim = null;
        /**
         * Disable pointer events when the mouse is above the timeline
         *
         * This allows clicks to pass through the outer div to the user's app components
         * even when a transitionview details box is open and pinned.
         *
         * Enable pointer events when mouse is inside the timeline to allow horizontal scroll & scroll wheel
         */
        _this.onMouseMove = function (evt) {
            var windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            var pointerEvents = windowHeight - evt.clientY < 65 ? 'auto' : 'none';
            if (_this.state.pointerEvents != pointerEvents) {
                _this.setState({ pointerEvents: pointerEvents });
            }
        };
        return _this;
    }
    /**
     * Creates a new TransitionVisualizer and adds it to the document.
     *
     * @param router the UIRouter object
     * @param element (optional) the element where the TransitionVisualizer should be placed.
     *                If no element is passed, an element will be created in the body.
     * @param props maximum transitions default: { maximumTransitions: 15 }
     *
     *
     * # Angular 1 + UI-Router (1.0.0-beta.2 and higher):
     *
     * Inject the router (`$uiRouter`) in a run block, then call TransitionVisualizer.create();
     *
     * ```
     * app.run(function($uiRouter) {
     *   TransitionVisualizer.create($uiRouter);
     * });
     * ```
     *
     * # Angular 1 + UI-Router 1.0.0-alpha.1 through 1.0.0-beta.1:
     *
     * Inject the router (`ng1UIRouter`) in a run block, then call TransitionVisualizer.create();
     *
     * ```
     * app.run(function(ng1UIRouter) {
     *   TransitionVisualizer.create(ng1UIRouter);
     * });
     * ```
     *
     * Angular 2:
     *
     * Call TransitionVisualizer.create() from your UIRouterConfig
     *
     * ```
     * export class MyUIRouterConfig extends UIRouterConfig {
     *   configure(router: UIRouter) {
     *     TransitionVisualizer.create(router);
     *   }
     * }
     * ```
     *
     * React:
     *
     * Call TransitionVisualizer.create() from your bootstrap
     *
     * ```
     * let router = new UIRouterReact();
     * TransitionVisualizer.create(router);
     * router.start();
     * ```
     *
     * @return the element that was bootstrapped.
     *         You can destroy the component using:
     *         [ReactDOM.unmountComponentAtNode](https://facebook.github.io/react/docs/top-level-api.html#reactdom.unmountcomponentatnode)
     */
    TransitionVisualizer.create = function (router, element, props) {
        if (props === void 0) { props = {}; }
        if (!element) {
            element = document.createElement('div');
            element.id = 'uirTransitionVisualizer';
        }
        var initialProps = Object.assign({}, props, { router: router });
        var _render = function () {
            document.body.appendChild(element);
            M(v(TransitionVisualizer, initialProps), element);
        };
        if (document.readyState === 'interactive' || document.readyState === 'complete') {
            _render();
        }
        else {
            document.addEventListener('DOMContentLoaded', _render, false);
        }
        return element;
    };
    TransitionVisualizer.prototype.componentDidMount = function () {
        var _this = this;
        var dereg = this.props.router.transitionService.onBefore({}, function (trans) {
            _this.setState({ transitions: _this.state.transitions.concat(trans) });
            var duration = 750, el = _this._div.children[0];
            var scrollToRight = function () {
                var targetScrollX = el.scrollWidth - el.clientWidth + 200;
                _this.cancelPreviousAnim && _this.cancelPreviousAnim();
                var newVal = [targetScrollX], oldVal = [el.scrollLeft];
                var max = _this.props.maximumTransitions;
                var enforceMax = function () {
                    var list = _this.state.transitions;
                    if (list.length <= max)
                        return;
                    _this.setState({ transitions: list.slice(list.length - max) });
                };
                var callback = function (vals) { return (el.scrollLeft = vals[0]); };
                _this.cancelPreviousAnim = animatePath(newVal, oldVal, duration, callback, enforceMax, easing.easeInOutCubic);
            };
            setTimeout(scrollToRight, 25);
        });
        this.deregisterFns.push(dereg);
        document.body.addEventListener('mousemove', this.onMouseMove);
        this.deregisterFns.push(function () { return document.body.removeEventListener('mousemove', _this.onMouseMove); });
    };
    TransitionVisualizer.prototype.componentWillUnmount = function () {
        while (this.deregisterFns.length)
            this.deregisterFns.pop()();
    };
    TransitionVisualizer.prototype.render = function () {
        var _this = this;
        var pointerEvents = this.state.pointerEvents;
        return (v("div", { ref: function (el) { return (_this._div = el); } },
            v("div", { className: "uirTranVis_history", style: { pointerEvents: pointerEvents } },
                this.state.transitions.map(function (trans) { return (v("div", { key: trans.$id, className: "uirTranVis_transition" },
                    v(TransitionView, { transition: trans }),
                    v("div", { style: { minWidth: '18em', border: '1px solid transparent' } }))); }),
                v("div", { style: { width: '200px', height: '1px' } }))));
    };
    TransitionVisualizer.defaultProps = {
        router: null,
        maximumTransitions: 15,
    };
    return TransitionVisualizer;
}(d));

var visualizer = function (router) { return new Visualizer(router, {}); };
function unmountComponent(node) {
    var Nothing = function () { return null; };
    M(v(Nothing, null), document.body, node);
}
var DEFAULTS = {
    state: true,
    stateVisualizer: {},
    transition: true,
};
var Visualizer = /** @class */ (function () {
    function Visualizer(router, options) {
        this.router = router;
        this.name = 'visualizer';
        options = Object.assign({}, DEFAULTS, options);
        if (options.state) {
            this.stateVisualizerEl = StateVisualizer.create(router, undefined, undefined, options.stateVisualizer);
        }
        if (options.transition) {
            this.transitionVisualizerEl = TransitionVisualizer.create(router);
        }
    }
    Visualizer.prototype.dispose = function (router) {
        this.stateVisualizerEl && unmountComponent(this.stateVisualizerEl);
        this.transitionVisualizerEl && unmountComponent(this.transitionVisualizerEl);
        this.stateVisualizerEl = null;
        this.transitionVisualizerEl = null;
    };
    return Visualizer;
}());


//# sourceMappingURL=ui-router-visualizer.esm.js.map


/***/ }),

/***/ "./service/api.js":
/*!************************!*\
  !*** ./service/api.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAllPersons: () => (/* binding */ getAllPersons),
/* harmony export */   getPersonById: () => (/* binding */ getPersonById)
/* harmony export */ });
function getAllPersons() {
  return new Promise(res => {
    setTimeout(() => {
      res([{id: '001', name: 'xiaoge_001'}, {id: '002', name: 'xiaoge_002'}]);
    }, 100);
  });
}
function getPersonById(id) {
  // simulate api fetch
  return new Promise(res => {
    setTimeout(() => {
      res({
        id,
        name: `xiaoge_${id}`,
        company: 'hansight',
        email: 'abeyuhang@gmail.com',
        address: 'Chengdu, Sichuan, China'
      });
    }, 100);
  });
}

/***/ }),

/***/ "../../jinge-ui-router/lib/components/index.js":
/*!*****************************************************!*\
  !*** ../../jinge-ui-router/lib/components/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UIRedirect: () => (/* reexport safe */ _redirect__WEBPACK_IMPORTED_MODULE_3__.UIRedirect),
/* harmony export */   UIRouterComponent: () => (/* reexport safe */ _router__WEBPACK_IMPORTED_MODULE_2__.UIRouterComponent),
/* harmony export */   UISrefComponent: () => (/* reexport safe */ _sref__WEBPACK_IMPORTED_MODULE_1__.UISrefComponent),
/* harmony export */   UIViewComponent: () => (/* reexport safe */ _view__WEBPACK_IMPORTED_MODULE_0__.UIViewComponent)
/* harmony export */ });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "../../jinge-ui-router/lib/components/view.js");
/* harmony import */ var _sref__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sref */ "../../jinge-ui-router/lib/components/sref.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ "../../jinge-ui-router/lib/components/router.js");
/* harmony import */ var _redirect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redirect */ "../../jinge-ui-router/lib/components/redirect.js");





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-ui-router/lib/components/redirect.js":
/*!********************************************************!*\
  !*** ../../jinge-ui-router/lib/components/redirect.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UIRedirect: () => (/* binding */ UIRedirect)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge/lib/index.js");
/* harmony import */ var _redirect_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redirect.tpl.js */ "../../jinge-ui-router/lib/components/redirect.tpl.js");


class UIRedirect extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
}
UIRedirect.template = _redirect_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"];


//# sourceMappingURL=redirect.js.map

/***/ }),

/***/ "../../jinge-ui-router/lib/components/redirect.tpl.js":
/*!************************************************************!*\
  !*** ../../jinge-ui-router/lib/components/redirect.tpl.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge/lib/index.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "../../jinge-ui-router/lib/components/view.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {  
  const vm_0 = component;
  return [
  ...(() => {
    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
      },
    });
    const el = _view__WEBPACK_IMPORTED_MODULE_1__.UIViewComponent.create(attrs);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el.__render();
  })()
  ];
}

/***/ }),

/***/ "../../jinge-ui-router/lib/components/router.js":
/*!******************************************************!*\
  !*** ../../jinge-ui-router/lib/components/router.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UIRouterComponent: () => (/* binding */ UIRouterComponent)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge/lib/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "../../jinge-ui-router/lib/core.js");


class UIRouterComponent extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    let coreRouter;
    if (!(attrs.router instanceof _core__WEBPACK_IMPORTED_MODULE_1__.BaseRouter)) {
      if (attrs.router === "hash") {
        coreRouter = new _core__WEBPACK_IMPORTED_MODULE_1__.HashRouter();
      } else {
        coreRouter = new _core__WEBPACK_IMPORTED_MODULE_1__.Html5Router();
      }
    } else {
      coreRouter = attrs.router;
    }
    if (attrs.plugins) {
      attrs.plugins.forEach((plugin) => coreRouter.plugin(plugin));
    }
    if (attrs.states) {
      attrs.states.forEach((state) => coreRouter.register(state));
    }
    if (attrs.otherwise) {
      coreRouter.otherwise(attrs.otherwise);
    }
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    _jg0._router = coreRouter;
    _jg0.__setContext("ui-router", coreRouter);
  }
  get baseHref() {
    return this._router.baseHref;
  }
  // set baseHref(v: string) {
  //   this._router.baseHref = v;
  // }
  __afterRender() {
    this._router.start();
  }
  __beforeDestroy() {
    this._router.dispose();
  }
}


//# sourceMappingURL=router.js.map

/***/ }),

/***/ "../../jinge-ui-router/lib/components/sref.js":
/*!****************************************************!*\
  !*** ../../jinge-ui-router/lib/components/sref.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UISrefComponent: () => (/* binding */ UISrefComponent)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge/lib/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "../../jinge-ui-router/lib/core.js");
/* harmony import */ var _sref_tpl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sref.tpl.js */ "../../jinge-ui-router/lib/components/sref.tpl.js");



const SUPPORTED_TARGETS = ["_blank", "_self"];
class UISrefComponent extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    if (attrs.params && !(0,jinge__WEBPACK_IMPORTED_MODULE_0__.isObject)(attrs.params)) {
      throw new Error('<ui-sref> attribute "params" require object.');
    }
    if (attrs.target && SUPPORTED_TARGETS.indexOf(attrs.target) < 0) {
      throw new Error(`<ui-sref> attribute "target" only accept one of ${JSON.stringify(SUPPORTED_TARGETS)}`);
    }
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    const router = _jg0.__getContext("ui-router");
    if (!router || !(router instanceof _core__WEBPACK_IMPORTED_MODULE_1__.BaseRouter)) {
      throw new Error("<ui-sref/> must be used under <ui-router/>");
    }
    _jg0._router = router;
    _jg0._el = null;
    _jg0._dereg = null;
    _jg0._tag = attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.__].slots?.default ? 0 : -1;
    _jg0._clickHandler = _jg0._onClick.bind(_jg0);
    _jg0.isActive = false;const f11_jg0402 = () => {
    _jg0.to = attrs.to; }; f11_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("to", f11_jg0402);const f12_jg0402 = () => {
    _jg0.params = attrs.params; }; f12_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("params", f12_jg0402);const f13_jg0402 = () => {
    _jg0.active = attrs.active; }; f13_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("active", f13_jg0402);const f14_jg0402 = () => {
    _jg0.location = "location" in attrs ? attrs.location : true; }; f14_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("location", f14_jg0402);const f15_jg0402 = () => {
    _jg0.reload = !!attrs.reload; }; f15_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("reload", f15_jg0402);const f16_jg0402 = () => {
    _jg0.text = attrs.text || ""; }; f16_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("text", f16_jg0402);const f17_jg0402 = () => {
    _jg0.target = attrs.target || "_self"; }; f17_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("target", f17_jg0402);const f18_jg0402 = () => {
    _jg0.className = attrs.class; }; f18_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("class", f18_jg0402);const f19_jg0402 = () => {
    _jg0.style = attrs.style; }; f19_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("style", f19_jg0402);
  }
  get target() {
    return this._target;
  }
  set target(v) {
    if (this._target === v)
      return;
    this._target = v;
    this.__updateIfNeed(this._updateTarget);
  }
  get to() {
    return this._to;
  }
  set to(v) {
    if (this._to === v)
      return;
    this._to = v;
    this.__updateIfNeed(this._updateHref);
  }
  get params() {
    return this._params;
  }
  set params(v) {
    this._params = v;
    this.__updateIfNeed(this._updateHref);
  }
  get active() {
    return this._active;
  }
  set active(v) {
    if (this._active === v)
      return;
    if (this._tag >= 0 && this._active && this._el) {
      this._el.classList.remove(this._active);
    }
    this._active = v;
    this.__updateIfNeed(this._updateActive);
  }
  _onClick(e) {
    if (e.defaultPrevented || e.metaKey || e.ctrlKey) {
      return;
    }
    if (this._tag <= 0) {
      e.preventDefault();
    }
    const router = this._router;
    const parent = this.__getContext("ui-router-parent");
    const parentContext = parent?.context || router.stateRegistry.root();
    if (this._target === "_blank") {
      const href = router.href(this._to, this._params, {
        relative: parentContext,
        inherit: true
      });
      window.open(href);
    } else {
      router.go(this._to, this._params, {
        relative: parentContext,
        inherit: true,
        location: this.location,
        reload: this.reload
      });
    }
  }
  __afterRender() {
    const el = this.__firstDOM;
    if (this._tag >= 0) {
      this._tag = el.tagName === "A" ? 0 : 1;
    }
    this._el = el;
    this._dereg = this._router.transitionService.onSuccess({}, () => this._updateActive());
    this._updateTarget();
    this._updateHref();
    this._updateActive();
    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.addEvent)(el, "click", this._clickHandler);
  }
  __beforeDestroy() {
    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.removeEvent)(this._el, "click", this._clickHandler);
    this._dereg();
  }
  _updateTarget() {
    if (this._tag <= 0) {
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setAttribute)(this._el, "target", this._target);
    }
  }
  _updateHref() {
    const router = this._router;
    this.isActive = router.includes(this._to, this._params);
    if (this._tag <= 0) {
      const parent = this.__getContext("ui-router-parent");
      const parentContext = parent?.context || router.stateRegistry.root();
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setAttribute)(
        this._el,
        "href",
        router.href(this._to, this._params, {
          relative: parentContext,
          inherit: true
        })
      );
    }
  }
  _updateActive() {
    this.isActive = this._router.includes(this._to, this._params);
    if (!this._active || this._tag < 0)
      return;
    if (this.isActive) {
      this._el.classList.add(this._active);
    } else {
      this._el.classList.remove(this._active);
    }
  }
}
UISrefComponent.template = _sref_tpl_js__WEBPACK_IMPORTED_MODULE_2__["default"];


//# sourceMappingURL=sref.js.map

/***/ }),

/***/ "../../jinge-ui-router/lib/components/sref.tpl.js":
/*!********************************************************!*\
  !*** ../../jinge-ui-router/lib/components/sref.tpl.js ***!
  \********************************************************/
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
  ...(() => {
    const __ac = vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.__].slots;
    const renderFn = __ac && __ac['default'] ? __ac['default'] :   function(component) {  
      return [
      (() => {
        const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
          "a",
          (() => {
            const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createTextNode)();
            const fn_0 = () => {
              (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setText)(el, vm_0.text);
            };
            fn_0();
            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["text"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
            return el;
          })()
        );
        const fn_0 = () => {
          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setClassAttribute)(el, !vm_0.className && !(vm_0.isActive && vm_0.active) ? vm_0._udef : (vm_0.className || '') + (vm_0.isActive && vm_0.active ? (vm_0.className ? ' ' : '') + vm_0.active : ''));
        };
        fn_0();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["className"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["isActive"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["active"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        const fn_1 = () => {
          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setStyleAttribute)(el, vm_0.style);
        };
        fn_1();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["style"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
        return el;
      })()
      ];
    };
    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
        slots: {
          default: renderFn || jinge__WEBPACK_IMPORTED_MODULE_0__.emptyRenderFn
        }
      }
    });
    const el = (new jinge__WEBPACK_IMPORTED_MODULE_0__.ParameterComponent(attrs, []))[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el.__render();
  })()
  ];
}

/***/ }),

/***/ "../../jinge-ui-router/lib/components/view.js":
/*!****************************************************!*\
  !*** ../../jinge-ui-router/lib/components/view.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UIViewComponent: () => (/* binding */ UIViewComponent)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge/lib/index.js");
/* harmony import */ var _uirouter_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uirouter/core */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "../../jinge-ui-router/lib/core.js");



const TransitionPropCollisionError = new Error(
  "`transition` cannot be used as resolve token. Please rename your resolve to avoid conflicts with the router transition."
);
const EXCLUDES = ["$transition$", "$stateParams", "$state$"];
let AUTO_INC_ID = 0;
function createEl(ComponentClass, resolves, context) {
  const attrs = {
    [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
      context
    }
  };
  if (resolves) {
    Object.assign(attrs, resolves);
  }
  return ComponentClass.create(attrs);
}
class UIViewComponent extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    const router = _jg0.__getContext("ui-router");
    if (!router || !(router instanceof _core__WEBPACK_IMPORTED_MODULE_2__.BaseRouter)) {
      throw new Error("<ui-view/> must be used under <ui-router/>");
    }
    _jg0._router = router;
    const parent = _jg0.__getContext("ui-router-parent") || {
      fqn: "",
      context: _jg0._router.stateRegistry.root()
    };
    const name = attrs.name || "default";
    const uiViewData = {
      $type: "jinge",
      id: ++AUTO_INC_ID,
      name,
      fqn: parent.fqn ? parent.fqn + "." + name : name,
      creationContext: parent.context,
      configUpdated: _jg0._onCfgUpdate.bind(_jg0),
      config: void 0
    };
    const uiViewAddress = {
      fqn: uiViewData.fqn,
      context: void 0
    };
    _jg0.__setContext("ui-router-parent", uiViewAddress, true);
    _jg0._viewComp = null;
    _jg0._viewRes = null;
    _jg0._viewAddr = uiViewAddress;
    _jg0._viewData = uiViewData;
    _jg0._viewDereg = _jg0._router.viewService.registerUIView(uiViewData);
  }
  __render() {
    const roots = this[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes;
    const componentClass = this._viewComp;
    if (!componentClass) {
      roots.push(document.createComment("empty"));
      return roots;
    }
    const el = createEl(componentClass, this._viewRes, this[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context);
    roots.push(el);
    return el.__render();
  }
  _onCfgUpdate(newConfig) {
    const uiViewData = this._viewData;
    if (uiViewData.config === newConfig)
      return;
    let resolves = null;
    if (newConfig) {
      this._viewAddr.context = newConfig.viewDecl?.$context;
      const resolveContext = new _uirouter_core__WEBPACK_IMPORTED_MODULE_1__.ResolveContext(newConfig.path);
      const injector = resolveContext.injector();
      const stringTokens = resolveContext.getTokens().filter((t) => (0,jinge__WEBPACK_IMPORTED_MODULE_0__.isString)(t) && EXCLUDES.indexOf(t) < 0);
      if (stringTokens.indexOf("transition") !== -1) {
        throw TransitionPropCollisionError;
      }
      if (stringTokens.length > 0) {
        resolves = {};
        stringTokens.forEach((token) => {
          resolves[token] = injector.get(token);
        });
      }
    }
    uiViewData.config = newConfig;
    this._viewComp = newConfig?.viewDecl?.component;
    this._viewRes = resolves;
    this.__updateIfNeed(false);
  }
  __update() {
    const roots = this[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes;
    const preEl = roots[0];
    const isC = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.isComponent)(preEl);
    const newComponent = this._viewComp;
    if (!newComponent && !isC) {
      return;
    }
    const el = newComponent ? createEl(newComponent, this._viewRes, this[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context) : document.createComment("empty");
    const fd = isC ? preEl.__firstDOM : preEl;
    const pa = fd.parentNode;
    if (newComponent) {
      const cursorCmt = document.createComment("ui-view-cursor");
      pa.insertBefore(cursorCmt, fd);
      const nels = el.__render();
      pa.replaceChild(nels.length > 1 ? (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createFragment)(nels) : nels[0], cursorCmt);
    } else {
      pa.insertBefore(el, fd);
    }
    if (isC) {
      preEl.__destroy();
    } else {
      pa.removeChild(fd);
    }
    roots[0] = el;
    newComponent && el.__handleAfterRender();
  }
  __beforeDestroy() {
    this._viewDereg();
  }
}


//# sourceMappingURL=view.js.map

/***/ }),

/***/ "../../jinge-ui-router/lib/core.js":
/*!*****************************************!*\
  !*** ../../jinge-ui-router/lib/core.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseRouter: () => (/* binding */ BaseRouter),
/* harmony export */   HashRouter: () => (/* binding */ HashRouter),
/* harmony export */   Html5Router: () => (/* binding */ Html5Router)
/* harmony export */ });
/* harmony import */ var _uirouter_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uirouter/core */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/index.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "../../jinge-ui-router/lib/view.js");
/* harmony import */ var _components_redirect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/redirect */ "../../jinge-ui-router/lib/components/redirect.js");



function viewConfigFactory(path, decl) {
  return new _view__WEBPACK_IMPORTED_MODULE_1__.JingeViewConfig(path, decl);
}
class BaseRouter extends _uirouter_core__WEBPACK_IMPORTED_MODULE_0__.UIRouter {
  constructor(locationPlugin, options) {
    super();
    this.viewService._pluginapi._viewConfigFactory("jinge", viewConfigFactory);
    this.stateRegistry.decorator("views", _view__WEBPACK_IMPORTED_MODULE_1__.jingeViewsBuilder);
    this._started = false;
    if (options?.trace)
      this.trace.enable(1);
    this.plugin(_uirouter_core__WEBPACK_IMPORTED_MODULE_0__.servicesPlugin);
    this.plugin(locationPlugin);
  }
  register(...stateDefines) {
    stateDefines.forEach((stateDef) => {
      if (stateDef.redirectTo && !stateDef.component) {
        stateDef.component = _components_redirect__WEBPACK_IMPORTED_MODULE_2__.UIRedirect;
      }
      this.stateRegistry.register(stateDef);
    });
    return this;
  }
  /**
   * @param {String} stateName name of target state
   */
  otherwise(stateName) {
    this.urlRouter.otherwise({
      state: stateName
    });
    return this;
  }
  start() {
    if (this._started)
      throw new Error("has been started");
    this.urlService.listen();
    this.urlService.sync();
    this._started = true;
  }
  includes(stateOrName, params, options) {
    return this.stateService.includes(stateOrName, params, options);
  }
  href(stateOrName, params, options) {
    return this.stateService.href(stateOrName, params, options);
  }
  go(to, params, options) {
    return this.stateService.go(to, params, options);
  }
  get params() {
    return this.stateService.params;
  }
  get transition() {
    return this.stateService.transition;
  }
  get current() {
    return this.stateService.$current;
  }
  get baseHref() {
    return this.locationConfig.baseHref();
  }
  // set baseHref(v: string) {
  //   this.locationConfig.baseHref(v);
  // }
}
class HashRouter extends BaseRouter {
  constructor(options) {
    super(_uirouter_core__WEBPACK_IMPORTED_MODULE_0__.hashLocationPlugin, options);
  }
}
class Html5Router extends BaseRouter {
  constructor(options) {
    super(_uirouter_core__WEBPACK_IMPORTED_MODULE_0__.pushStateLocationPlugin, options);
  }
}


//# sourceMappingURL=core.js.map

/***/ }),

/***/ "../../jinge-ui-router/lib/index.js":
/*!******************************************!*\
  !*** ../../jinge-ui-router/lib/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseRouter: () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.BaseRouter),
/* harmony export */   HashRouter: () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.HashRouter),
/* harmony export */   Html5Router: () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.Html5Router),
/* harmony export */   JingeViewConfig: () => (/* reexport safe */ _view__WEBPACK_IMPORTED_MODULE_2__.JingeViewConfig),
/* harmony export */   UIRedirect: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.UIRedirect),
/* harmony export */   UIRouterComponent: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.UIRouterComponent),
/* harmony export */   UISrefComponent: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.UISrefComponent),
/* harmony export */   UIViewComponent: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.UIViewComponent),
/* harmony export */   jingeViewsBuilder: () => (/* reexport safe */ _view__WEBPACK_IMPORTED_MODULE_2__.jingeViewsBuilder)
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "../../jinge-ui-router/lib/components/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "../../jinge-ui-router/lib/core.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ "../../jinge-ui-router/lib/view.js");




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-ui-router/lib/view.js":
/*!*****************************************!*\
  !*** ../../jinge-ui-router/lib/view.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JingeViewConfig: () => (/* binding */ JingeViewConfig),
/* harmony export */   jingeViewsBuilder: () => (/* binding */ jingeViewsBuilder)
/* harmony export */ });
/* harmony import */ var _uirouter_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uirouter/core */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/index.js");

function jingeViewsBuilder(state) {
  const views = {};
  let viewsDefinitionObject;
  if (!state.views) {
    viewsDefinitionObject = {
      default: {
        component: state.component
      }
    };
  } else {
    viewsDefinitionObject = Object.fromEntries(
      Object.keys(state.views).map((k) => {
        const _decl = state.views[k];
        if (_decl.component) {
          return [k, _decl];
        }
        return [
          k,
          {
            component: _decl
          }
        ];
      })
    );
  }
  for (const name in viewsDefinitionObject) {
    const config = viewsDefinitionObject[name];
    if (Object.keys(config).length === 0)
      continue;
    config.$type = "jinge";
    config.$context = state;
    config.$name = name || "default";
    const normalized = _uirouter_core__WEBPACK_IMPORTED_MODULE_0__.ViewService.normalizeUIViewTarget(config.$context, config.$name);
    config.$uiViewName = normalized.uiViewName;
    config.$uiViewContextAnchor = normalized.uiViewContextAnchor;
    views[config.$name] = config;
  }
  return views;
}
let AUTO_INC_ID = 0;
class JingeViewConfig {
  constructor(path, viewDecl) {
    this.loaded = true;
    this.$id = AUTO_INC_ID++;
    this.path = path;
    this.viewDecl = viewDecl;
  }
  load() {
    return _uirouter_core__WEBPACK_IMPORTED_MODULE_0__.services.$q.when(this);
  }
}


//# sourceMappingURL=view.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/common.js":
/*!*************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/common.js ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _extend: () => (/* binding */ _extend),
/* harmony export */   _inArray: () => (/* binding */ _inArray),
/* harmony export */   _pushTo: () => (/* binding */ _pushTo),
/* harmony export */   _removeFrom: () => (/* binding */ _removeFrom),
/* harmony export */   allTrueR: () => (/* binding */ allTrueR),
/* harmony export */   ancestors: () => (/* binding */ ancestors),
/* harmony export */   anyTrueR: () => (/* binding */ anyTrueR),
/* harmony export */   applyPairs: () => (/* binding */ applyPairs),
/* harmony export */   arrayTuples: () => (/* binding */ arrayTuples),
/* harmony export */   assertFn: () => (/* binding */ assertFn),
/* harmony export */   assertMap: () => (/* binding */ assertMap),
/* harmony export */   assertPredicate: () => (/* binding */ assertPredicate),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   createProxyFunctions: () => (/* binding */ createProxyFunctions),
/* harmony export */   defaults: () => (/* binding */ defaults),
/* harmony export */   deregAll: () => (/* binding */ deregAll),
/* harmony export */   equals: () => (/* binding */ equals),
/* harmony export */   extend: () => (/* binding */ extend),
/* harmony export */   filter: () => (/* binding */ filter),
/* harmony export */   find: () => (/* binding */ find),
/* harmony export */   flatten: () => (/* binding */ flatten),
/* harmony export */   flattenR: () => (/* binding */ flattenR),
/* harmony export */   forEach: () => (/* binding */ forEach),
/* harmony export */   fromJson: () => (/* binding */ fromJson),
/* harmony export */   identity: () => (/* binding */ identity),
/* harmony export */   inArray: () => (/* binding */ inArray),
/* harmony export */   inherit: () => (/* binding */ inherit),
/* harmony export */   map: () => (/* binding */ map),
/* harmony export */   mapObj: () => (/* binding */ mapObj),
/* harmony export */   mergeR: () => (/* binding */ mergeR),
/* harmony export */   noop: () => (/* binding */ noop),
/* harmony export */   omit: () => (/* binding */ omit),
/* harmony export */   pairs: () => (/* binding */ pairs),
/* harmony export */   pick: () => (/* binding */ pick),
/* harmony export */   pluck: () => (/* binding */ pluck),
/* harmony export */   pushR: () => (/* binding */ pushR),
/* harmony export */   pushTo: () => (/* binding */ pushTo),
/* harmony export */   removeFrom: () => (/* binding */ removeFrom),
/* harmony export */   root: () => (/* binding */ root),
/* harmony export */   silenceUncaughtInPromise: () => (/* binding */ silenceUncaughtInPromise),
/* harmony export */   silentRejection: () => (/* binding */ silentRejection),
/* harmony export */   tail: () => (/* binding */ tail),
/* harmony export */   toJson: () => (/* binding */ toJson),
/* harmony export */   uniqR: () => (/* binding */ uniqR),
/* harmony export */   unnest: () => (/* binding */ unnest),
/* harmony export */   unnestR: () => (/* binding */ unnestR),
/* harmony export */   values: () => (/* binding */ values)
/* harmony export */ });
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./predicates */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _hof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hof */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/hof.js");
/* harmony import */ var _coreservices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coreservices */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/coreservices.js");
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
/**
 * Random utility functions used in the UI-Router code
 *
 * These functions are exported, but are subject to change without notice.
 *
 * @packageDocumentation
 * @preferred
 */



var root = (typeof self === 'object' && self.self === self && self) ||
    (typeof __webpack_require__.g === 'object' && __webpack_require__.g.global === __webpack_require__.g && __webpack_require__.g) ||
    undefined;
var angular = root.angular || {};
var fromJson = angular.fromJson || JSON.parse.bind(JSON);
var toJson = angular.toJson || JSON.stringify.bind(JSON);
var forEach = angular.forEach || _forEach;
var extend = Object.assign || _extend;
var equals = angular.equals || _equals;
function identity(x) {
    return x;
}
function noop() { }
/**
 * Builds proxy functions on the `to` object which pass through to the `from` object.
 *
 * For each key in `fnNames`, creates a proxy function on the `to` object.
 * The proxy function calls the real function on the `from` object.
 *
 *
 * #### Example:
 * This example creates an new class instance whose functions are prebound to the new'd object.
 * ```js
 * class Foo {
 *   constructor(data) {
 *     // Binds all functions from Foo.prototype to 'this',
 *     // then copies them to 'this'
 *     bindFunctions(Foo.prototype, this, this);
 *     this.data = data;
 *   }
 *
 *   log() {
 *     console.log(this.data);
 *   }
 * }
 *
 * let myFoo = new Foo([1,2,3]);
 * var logit = myFoo.log;
 * logit(); // logs [1, 2, 3] from the myFoo 'this' instance
 * ```
 *
 * #### Example:
 * This example creates a bound version of a service function, and copies it to another object
 * ```
 *
 * var SomeService = {
 *   this.data = [3, 4, 5];
 *   this.log = function() {
 *     console.log(this.data);
 *   }
 * }
 *
 * // Constructor fn
 * function OtherThing() {
 *   // Binds all functions from SomeService to SomeService,
 *   // then copies them to 'this'
 *   bindFunctions(SomeService, this, SomeService);
 * }
 *
 * let myOtherThing = new OtherThing();
 * myOtherThing.log(); // logs [3, 4, 5] from SomeService's 'this'
 * ```
 *
 * @param source A function that returns the source object which contains the original functions to be bound
 * @param target A function that returns the target object which will receive the bound functions
 * @param bind A function that returns the object which the functions will be bound to
 * @param fnNames The function names which will be bound (Defaults to all the functions found on the 'from' object)
 * @param latebind If true, the binding of the function is delayed until the first time it's invoked
 */
function createProxyFunctions(source, target, bind, fnNames, latebind) {
    if (latebind === void 0) { latebind = false; }
    var bindFunction = function (fnName) { return source()[fnName].bind(bind()); };
    var makeLateRebindFn = function (fnName) {
        return function lateRebindFunction() {
            target[fnName] = bindFunction(fnName);
            return target[fnName].apply(null, arguments);
        };
    };
    fnNames = fnNames || Object.keys(source());
    return fnNames.reduce(function (acc, name) {
        acc[name] = latebind ? makeLateRebindFn(name) : bindFunction(name);
        return acc;
    }, target);
}
/**
 * prototypal inheritance helper.
 * Creates a new object which has `parent` object as its prototype, and then copies the properties from `extra` onto it
 */
var inherit = function (parent, extra) { return extend(Object.create(parent), extra); };
/** Given an array, returns true if the object is found in the array, (using indexOf) */
var inArray = (0,_hof__WEBPACK_IMPORTED_MODULE_1__.curry)(_inArray);
function _inArray(array, obj) {
    return array.indexOf(obj) !== -1;
}
/**
 * Given an array, and an item, if the item is found in the array, it removes it (in-place).
 * The same array is returned
 */
var removeFrom = (0,_hof__WEBPACK_IMPORTED_MODULE_1__.curry)(_removeFrom);
function _removeFrom(array, obj) {
    var idx = array.indexOf(obj);
    if (idx >= 0)
        array.splice(idx, 1);
    return array;
}
/** pushes a values to an array and returns the value */
var pushTo = (0,_hof__WEBPACK_IMPORTED_MODULE_1__.curry)(_pushTo);
function _pushTo(arr, val) {
    return arr.push(val), val;
}
/** Given an array of (deregistration) functions, calls all functions and removes each one from the source array */
var deregAll = function (functions) {
    return functions.slice().forEach(function (fn) {
        typeof fn === 'function' && fn();
        removeFrom(functions, fn);
    });
};
/**
 * Applies a set of defaults to an options object.  The options object is filtered
 * to only those properties of the objects in the defaultsList.
 * Earlier objects in the defaultsList take precedence when applying defaults.
 */
function defaults(opts) {
    var defaultsList = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        defaultsList[_i - 1] = arguments[_i];
    }
    var defaultVals = extend.apply(void 0, __spreadArrays([{}], defaultsList.reverse()));
    return extend(defaultVals, pick(opts || {}, Object.keys(defaultVals)));
}
/** Reduce function that merges each element of the list into a single object, using extend */
var mergeR = function (memo, item) { return extend(memo, item); };
/**
 * Finds the common ancestor path between two states.
 *
 * @param {Object} first The first state.
 * @param {Object} second The second state.
 * @return {Array} Returns an array of state names in descending order, not including the root.
 */
function ancestors(first, second) {
    var path = [];
    // tslint:disable-next-line:forin
    for (var n in first.path) {
        if (first.path[n] !== second.path[n])
            break;
        path.push(first.path[n]);
    }
    return path;
}
/**
 * Return a copy of the object only containing the whitelisted properties.
 *
 * #### Example:
 * ```
 * var foo = { a: 1, b: 2, c: 3 };
 * var ab = pick(foo, ['a', 'b']); // { a: 1, b: 2 }
 * ```
 * @param obj the source object
 * @param propNames an Array of strings, which are the whitelisted property names
 */
function pick(obj, propNames) {
    var objCopy = {};
    for (var _prop in obj) {
        if (propNames.indexOf(_prop) !== -1) {
            objCopy[_prop] = obj[_prop];
        }
    }
    return objCopy;
}
/**
 * Return a copy of the object omitting the blacklisted properties.
 *
 * @example
 * ```
 *
 * var foo = { a: 1, b: 2, c: 3 };
 * var ab = omit(foo, ['a', 'b']); // { c: 3 }
 * ```
 * @param obj the source object
 * @param propNames an Array of strings, which are the blacklisted property names
 */
function omit(obj, propNames) {
    return Object.keys(obj)
        .filter((0,_hof__WEBPACK_IMPORTED_MODULE_1__.not)(inArray(propNames)))
        .reduce(function (acc, key) { return ((acc[key] = obj[key]), acc); }, {});
}
/**
 * Maps an array, or object to a property (by name)
 */
function pluck(collection, propName) {
    return map(collection, (0,_hof__WEBPACK_IMPORTED_MODULE_1__.prop)(propName));
}
/** Filters an Array or an Object's properties based on a predicate */
function filter(collection, callback) {
    var arr = (0,_predicates__WEBPACK_IMPORTED_MODULE_0__.isArray)(collection), result = arr ? [] : {};
    var accept = arr ? function (x) { return result.push(x); } : function (x, key) { return (result[key] = x); };
    forEach(collection, function (item, i) {
        if (callback(item, i))
            accept(item, i);
    });
    return result;
}
/** Finds an object from an array, or a property of an object, that matches a predicate */
function find(collection, callback) {
    var result;
    forEach(collection, function (item, i) {
        if (result)
            return;
        if (callback(item, i))
            result = item;
    });
    return result;
}
/** Given an object, returns a new object, where each property is transformed by the callback function */
var mapObj = map;
/** Maps an array or object properties using a callback function */
function map(collection, callback, target) {
    target = target || ((0,_predicates__WEBPACK_IMPORTED_MODULE_0__.isArray)(collection) ? [] : {});
    forEach(collection, function (item, i) { return (target[i] = callback(item, i)); });
    return target;
}
/**
 * Given an object, return its enumerable property values
 *
 * @example
 * ```
 *
 * let foo = { a: 1, b: 2, c: 3 }
 * let vals = values(foo); // [ 1, 2, 3 ]
 * ```
 */
var values = function (obj) { return Object.keys(obj).map(function (key) { return obj[key]; }); };
/**
 * Reduce function that returns true if all of the values are truthy.
 *
 * @example
 * ```
 *
 * let vals = [ 1, true, {}, "hello world"];
 * vals.reduce(allTrueR, true); // true
 *
 * vals.push(0);
 * vals.reduce(allTrueR, true); // false
 * ```
 */
var allTrueR = function (memo, elem) { return memo && elem; };
/**
 * Reduce function that returns true if any of the values are truthy.
 *
 *  * @example
 * ```
 *
 * let vals = [ 0, null, undefined ];
 * vals.reduce(anyTrueR, true); // false
 *
 * vals.push("hello world");
 * vals.reduce(anyTrueR, true); // true
 * ```
 */
var anyTrueR = function (memo, elem) { return memo || elem; };
/**
 * Reduce function which un-nests a single level of arrays
 * @example
 * ```
 *
 * let input = [ [ "a", "b" ], [ "c", "d" ], [ [ "double", "nested" ] ] ];
 * input.reduce(unnestR, []) // [ "a", "b", "c", "d", [ "double, "nested" ] ]
 * ```
 */
var unnestR = function (memo, elem) { return memo.concat(elem); };
/**
 * Reduce function which recursively un-nests all arrays
 *
 * @example
 * ```
 *
 * let input = [ [ "a", "b" ], [ "c", "d" ], [ [ "double", "nested" ] ] ];
 * input.reduce(unnestR, []) // [ "a", "b", "c", "d", "double, "nested" ]
 * ```
 */
var flattenR = function (memo, elem) {
    return (0,_predicates__WEBPACK_IMPORTED_MODULE_0__.isArray)(elem) ? memo.concat(elem.reduce(flattenR, [])) : pushR(memo, elem);
};
/**
 * Reduce function that pushes an object to an array, then returns the array.
 * Mostly just for [[flattenR]] and [[uniqR]]
 */
function pushR(arr, obj) {
    arr.push(obj);
    return arr;
}
/** Reduce function that filters out duplicates */
var uniqR = function (acc, token) { return (inArray(acc, token) ? acc : pushR(acc, token)); };
/**
 * Return a new array with a single level of arrays unnested.
 *
 * @example
 * ```
 *
 * let input = [ [ "a", "b" ], [ "c", "d" ], [ [ "double", "nested" ] ] ];
 * unnest(input) // [ "a", "b", "c", "d", [ "double, "nested" ] ]
 * ```
 */
var unnest = function (arr) { return arr.reduce(unnestR, []); };
/**
 * Return a completely flattened version of an array.
 *
 * @example
 * ```
 *
 * let input = [ [ "a", "b" ], [ "c", "d" ], [ [ "double", "nested" ] ] ];
 * flatten(input) // [ "a", "b", "c", "d", "double, "nested" ]
 * ```
 */
var flatten = function (arr) { return arr.reduce(flattenR, []); };
/**
 * Given a .filter Predicate, builds a .filter Predicate which throws an error if any elements do not pass.
 * @example
 * ```
 *
 * let isNumber = (obj) => typeof(obj) === 'number';
 * let allNumbers = [ 1, 2, 3, 4, 5 ];
 * allNumbers.filter(assertPredicate(isNumber)); //OK
 *
 * let oneString = [ 1, 2, 3, 4, "5" ];
 * oneString.filter(assertPredicate(isNumber, "Not all numbers")); // throws Error(""Not all numbers"");
 * ```
 */
var assertPredicate = assertFn;
/**
 * Given a .map function, builds a .map function which throws an error if any mapped elements do not pass a truthyness test.
 * @example
 * ```
 *
 * var data = { foo: 1, bar: 2 };
 *
 * let keys = [ 'foo', 'bar' ]
 * let values = keys.map(assertMap(key => data[key], "Key not found"));
 * // values is [1, 2]
 *
 * let keys = [ 'foo', 'bar', 'baz' ]
 * let values = keys.map(assertMap(key => data[key], "Key not found"));
 * // throws Error("Key not found")
 * ```
 */
var assertMap = assertFn;
function assertFn(predicateOrMap, errMsg) {
    if (errMsg === void 0) { errMsg = 'assert failure'; }
    return function (obj) {
        var result = predicateOrMap(obj);
        if (!result) {
            throw new Error((0,_predicates__WEBPACK_IMPORTED_MODULE_0__.isFunction)(errMsg) ? errMsg(obj) : errMsg);
        }
        return result;
    };
}
/**
 * Like _.pairs: Given an object, returns an array of key/value pairs
 *
 * @example
 * ```
 *
 * pairs({ foo: "FOO", bar: "BAR }) // [ [ "foo", "FOO" ], [ "bar": "BAR" ] ]
 * ```
 */
var pairs = function (obj) { return Object.keys(obj).map(function (key) { return [key, obj[key]]; }); };
/**
 * Given two or more parallel arrays, returns an array of tuples where
 * each tuple is composed of [ a[i], b[i], ... z[i] ]
 *
 * @example
 * ```
 *
 * let foo = [ 0, 2, 4, 6 ];
 * let bar = [ 1, 3, 5, 7 ];
 * let baz = [ 10, 30, 50, 70 ];
 * arrayTuples(foo, bar);       // [ [0, 1], [2, 3], [4, 5], [6, 7] ]
 * arrayTuples(foo, bar, baz);  // [ [0, 1, 10], [2, 3, 30], [4, 5, 50], [6, 7, 70] ]
 * ```
 */
function arrayTuples() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (args.length === 0)
        return [];
    var maxArrayLen = args.reduce(function (min, arr) { return Math.min(arr.length, min); }, 9007199254740991); // aka 2^53 − 1 aka Number.MAX_SAFE_INTEGER
    var result = [];
    var _loop_1 = function (i) {
        // This is a hot function
        // Unroll when there are 1-4 arguments
        switch (args.length) {
            case 1:
                result.push([args[0][i]]);
                break;
            case 2:
                result.push([args[0][i], args[1][i]]);
                break;
            case 3:
                result.push([args[0][i], args[1][i], args[2][i]]);
                break;
            case 4:
                result.push([args[0][i], args[1][i], args[2][i], args[3][i]]);
                break;
            default:
                result.push(args.map(function (array) { return array[i]; }));
                break;
        }
    };
    for (var i = 0; i < maxArrayLen; i++) {
        _loop_1(i);
    }
    return result;
}
/**
 * Reduce function which builds an object from an array of [key, value] pairs.
 *
 * Each iteration sets the key/val pair on the memo object, then returns the memo for the next iteration.
 *
 * Each keyValueTuple should be an array with values [ key: string, value: any ]
 *
 * @example
 * ```
 *
 * var pairs = [ ["fookey", "fooval"], ["barkey", "barval"] ]
 *
 * var pairsToObj = pairs.reduce((memo, pair) => applyPairs(memo, pair), {})
 * // pairsToObj == { fookey: "fooval", barkey: "barval" }
 *
 * // Or, more simply:
 * var pairsToObj = pairs.reduce(applyPairs, {})
 * // pairsToObj == { fookey: "fooval", barkey: "barval" }
 * ```
 */
function applyPairs(memo, keyValTuple) {
    var key, value;
    if ((0,_predicates__WEBPACK_IMPORTED_MODULE_0__.isArray)(keyValTuple))
        key = keyValTuple[0], value = keyValTuple[1];
    if (!(0,_predicates__WEBPACK_IMPORTED_MODULE_0__.isString)(key))
        throw new Error('invalid parameters to applyPairs');
    memo[key] = value;
    return memo;
}
/** Get the last element of an array */
function tail(arr) {
    return (arr.length && arr[arr.length - 1]) || undefined;
}
/**
 * shallow copy from src to dest
 */
function copy(src, dest) {
    if (dest)
        Object.keys(dest).forEach(function (key) { return delete dest[key]; });
    if (!dest)
        dest = {};
    return extend(dest, src);
}
/** Naive forEach implementation works with Objects or Arrays */
function _forEach(obj, cb, _this) {
    if ((0,_predicates__WEBPACK_IMPORTED_MODULE_0__.isArray)(obj))
        return obj.forEach(cb, _this);
    Object.keys(obj).forEach(function (key) { return cb(obj[key], key); });
}
function _extend(toObj) {
    for (var i = 1; i < arguments.length; i++) {
        var obj = arguments[i];
        if (!obj)
            continue;
        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; j++) {
            toObj[keys[j]] = obj[keys[j]];
        }
    }
    return toObj;
}
function _equals(o1, o2) {
    if (o1 === o2)
        return true;
    if (o1 === null || o2 === null)
        return false;
    if (o1 !== o1 && o2 !== o2)
        return true; // NaN === NaN
    var t1 = typeof o1, t2 = typeof o2;
    if (t1 !== t2 || t1 !== 'object')
        return false;
    var tup = [o1, o2];
    if ((0,_hof__WEBPACK_IMPORTED_MODULE_1__.all)(_predicates__WEBPACK_IMPORTED_MODULE_0__.isArray)(tup))
        return _arraysEq(o1, o2);
    if ((0,_hof__WEBPACK_IMPORTED_MODULE_1__.all)(_predicates__WEBPACK_IMPORTED_MODULE_0__.isDate)(tup))
        return o1.getTime() === o2.getTime();
    if ((0,_hof__WEBPACK_IMPORTED_MODULE_1__.all)(_predicates__WEBPACK_IMPORTED_MODULE_0__.isRegExp)(tup))
        return o1.toString() === o2.toString();
    if ((0,_hof__WEBPACK_IMPORTED_MODULE_1__.all)(_predicates__WEBPACK_IMPORTED_MODULE_0__.isFunction)(tup))
        return true; // meh
    var predicates = [_predicates__WEBPACK_IMPORTED_MODULE_0__.isFunction, _predicates__WEBPACK_IMPORTED_MODULE_0__.isArray, _predicates__WEBPACK_IMPORTED_MODULE_0__.isDate, _predicates__WEBPACK_IMPORTED_MODULE_0__.isRegExp];
    if (predicates.map(_hof__WEBPACK_IMPORTED_MODULE_1__.any).reduce(function (b, fn) { return b || !!fn(tup); }, false))
        return false;
    var keys = {};
    // tslint:disable-next-line:forin
    for (var key in o1) {
        if (!_equals(o1[key], o2[key]))
            return false;
        keys[key] = true;
    }
    for (var key in o2) {
        if (!keys[key])
            return false;
    }
    return true;
}
function _arraysEq(a1, a2) {
    if (a1.length !== a2.length)
        return false;
    return arrayTuples(a1, a2).reduce(function (b, t) { return b && _equals(t[0], t[1]); }, true);
}
// issue #2676
var silenceUncaughtInPromise = function (promise) { return promise.catch(function (e) { return 0; }) && promise; };
var silentRejection = function (error) { return silenceUncaughtInPromise(_coreservices__WEBPACK_IMPORTED_MODULE_2__.services.$q.reject(error)); };
//# sourceMappingURL=common.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/coreservices.js":
/*!*******************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/coreservices.js ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeStub: () => (/* binding */ makeStub),
/* harmony export */   services: () => (/* binding */ services)
/* harmony export */ });
var noImpl = function (fnname) { return function () {
    throw new Error("No implementation for " + fnname + ". The framework specific code did not implement this method.");
}; };
var makeStub = function (service, methods) {
    return methods.reduce(function (acc, key) { return ((acc[key] = noImpl(service + "." + key + "()")), acc); }, {});
};
var services = {
    $q: undefined,
    $injector: undefined,
};

//# sourceMappingURL=coreservices.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/glob.js":
/*!***********************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/glob.js ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Glob: () => (/* binding */ Glob)
/* harmony export */ });
/**
 * Matches state names using glob-like pattern strings.
 *
 * Globs can be used in specific APIs including:
 *
 * - [[StateService.is]]
 * - [[StateService.includes]]
 * - The first argument to Hook Registration functions like [[TransitionService.onStart]]
 *    - [[HookMatchCriteria]] and [[HookMatchCriterion]]
 *
 * A `Glob` string is a pattern which matches state names.
 * Nested state names are split into segments (separated by a dot) when processing.
 * The state named `foo.bar.baz` is split into three segments ['foo', 'bar', 'baz']
 *
 * Globs work according to the following rules:
 *
 * ### Exact match:
 *
 * The glob `'A.B'` matches the state named exactly `'A.B'`.
 *
 * | Glob        |Matches states named|Does not match state named|
 * |:------------|:--------------------|:---------------------|
 * | `'A'`       | `'A'`               | `'B'` , `'A.C'`      |
 * | `'A.B'`     | `'A.B'`             | `'A'` , `'A.B.C'`    |
 * | `'foo'`     | `'foo'`             | `'FOO'` , `'foo.bar'`|
 *
 * ### Single star (`*`)
 *
 * A single star (`*`) is a wildcard that matches exactly one segment.
 *
 * | Glob        |Matches states named  |Does not match state named |
 * |:------------|:---------------------|:--------------------------|
 * | `'*'`       | `'A'` , `'Z'`        | `'A.B'` , `'Z.Y.X'`       |
 * | `'A.*'`     | `'A.B'` , `'A.C'`    | `'A'` , `'A.B.C'`         |
 * | `'A.*.*'`   | `'A.B.C'` , `'A.X.Y'`| `'A'`, `'A.B'` , `'Z.Y.X'`|
 *
 * ### Double star (`**`)
 *
 * A double star (`'**'`) is a wildcard that matches *zero or more segments*
 *
 * | Glob        |Matches states named                           |Does not match state named         |
 * |:------------|:----------------------------------------------|:----------------------------------|
 * | `'**'`      | `'A'` , `'A.B'`, `'Z.Y.X'`                    | (matches all states)              |
 * | `'A.**'`    | `'A'` , `'A.B'` , `'A.C.X'`                   | `'Z.Y.X'`                         |
 * | `'**.X'`    | `'X'` , `'A.X'` , `'Z.Y.X'`                   | `'A'` , `'A.login.Z'`             |
 * | `'A.**.X'`  | `'A.X'` , `'A.B.X'` , `'A.B.C.X'`             | `'A'` , `'A.B.C'`                 |
 *
 * @packageDocumentation
 */
var Glob = /** @class */ (function () {
    function Glob(text) {
        this.text = text;
        this.glob = text.split('.');
        var regexpString = this.text
            .split('.')
            .map(function (seg) {
            if (seg === '**')
                return '(?:|(?:\\.[^.]*)*)';
            if (seg === '*')
                return '\\.[^.]*';
            return '\\.' + seg;
        })
            .join('');
        this.regexp = new RegExp('^' + regexpString + '$');
    }
    /** Returns true if the string has glob-like characters in it */
    Glob.is = function (text) {
        return !!/[!,*]+/.exec(text);
    };
    /** Returns a glob from the string, or null if the string isn't Glob-like */
    Glob.fromString = function (text) {
        return Glob.is(text) ? new Glob(text) : null;
    };
    Glob.prototype.matches = function (name) {
        return this.regexp.test('.' + name);
    };
    return Glob;
}());

//# sourceMappingURL=glob.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/hof.js":
/*!**********************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/hof.js ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   all: () => (/* binding */ all),
/* harmony export */   and: () => (/* binding */ and),
/* harmony export */   any: () => (/* binding */ any),
/* harmony export */   compose: () => (/* binding */ compose),
/* harmony export */   curry: () => (/* binding */ curry),
/* harmony export */   eq: () => (/* binding */ eq),
/* harmony export */   invoke: () => (/* binding */ invoke),
/* harmony export */   is: () => (/* binding */ is),
/* harmony export */   not: () => (/* binding */ not),
/* harmony export */   or: () => (/* binding */ or),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   pattern: () => (/* binding */ pattern),
/* harmony export */   pipe: () => (/* binding */ pipe),
/* harmony export */   prop: () => (/* binding */ prop),
/* harmony export */   propEq: () => (/* binding */ propEq),
/* harmony export */   val: () => (/* binding */ val)
/* harmony export */ });
/**
 * Higher order functions
 *
 * These utility functions are exported, but are subject to change without notice.
 *
 * @packageDocumentation
 */
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
/**
 * Returns a new function for [Partial Application](https://en.wikipedia.org/wiki/Partial_application) of the original function.
 *
 * Given a function with N parameters, returns a new function that supports partial application.
 * The new function accepts anywhere from 1 to N parameters.  When that function is called with M parameters,
 * where M is less than N, it returns a new function that accepts the remaining parameters.  It continues to
 * accept more parameters until all N parameters have been supplied.
 *
 *
 * This contrived example uses a partially applied function as an predicate, which returns true
 * if an object is found in both arrays.
 * @example
 * ```
 * // returns true if an object is in both of the two arrays
 * function inBoth(array1, array2, object) {
 *   return array1.indexOf(object) !== -1 &&
 *          array2.indexOf(object) !== 1;
 * }
 * let obj1, obj2, obj3, obj4, obj5, obj6, obj7
 * let foos = [obj1, obj3]
 * let bars = [obj3, obj4, obj5]
 *
 * // A curried "copy" of inBoth
 * let curriedInBoth = curry(inBoth);
 * // Partially apply both the array1 and array2
 * let inFoosAndBars = curriedInBoth(foos, bars);
 *
 * // Supply the final argument; since all arguments are
 * // supplied, the original inBoth function is then called.
 * let obj1InBoth = inFoosAndBars(obj1); // false
 *
 * // Use the inFoosAndBars as a predicate.
 * // Filter, on each iteration, supplies the final argument
 * let allObjs = [ obj1, obj2, obj3, obj4, obj5, obj6, obj7 ];
 * let foundInBoth = allObjs.filter(inFoosAndBars); // [ obj3 ]
 *
 * ```
 *
 * @param fn
 * @returns {*|function(): (*|any)}
 */
function curry(fn) {
    return function curried() {
        if (arguments.length >= fn.length) {
            return fn.apply(this, arguments);
        }
        var args = Array.prototype.slice.call(arguments);
        return curried.bind.apply(curried, __spreadArrays([this], args));
    };
}
/**
 * Given a varargs list of functions, returns a function that composes the argument functions, right-to-left
 * given: f(x), g(x), h(x)
 * let composed = compose(f,g,h)
 * then, composed is: f(g(h(x)))
 */
function compose() {
    var args = arguments;
    var start = args.length - 1;
    return function () {
        var i = start, result = args[start].apply(this, arguments);
        while (i--)
            result = args[i].call(this, result);
        return result;
    };
}
/**
 * Given a varargs list of functions, returns a function that is composes the argument functions, left-to-right
 * given: f(x), g(x), h(x)
 * let piped = pipe(f,g,h);
 * then, piped is: h(g(f(x)))
 */
function pipe() {
    var funcs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        funcs[_i] = arguments[_i];
    }
    return compose.apply(null, [].slice.call(arguments).reverse());
}
/**
 * Given a property name, returns a function that returns that property from an object
 * let obj = { foo: 1, name: "blarg" };
 * let getName = prop("name");
 * getName(obj) === "blarg"
 */
var prop = function (name) { return function (obj) { return obj && obj[name]; }; };
/**
 * Given a property name and a value, returns a function that returns a boolean based on whether
 * the passed object has a property that matches the value
 * let obj = { foo: 1, name: "blarg" };
 * let getName = propEq("name", "blarg");
 * getName(obj) === true
 */
var propEq = curry(function (name, _val, obj) { return obj && obj[name] === _val; });
/**
 * Given a dotted property name, returns a function that returns a nested property from an object, or undefined
 * let obj = { id: 1, nestedObj: { foo: 1, name: "blarg" }, };
 * let getName = prop("nestedObj.name");
 * getName(obj) === "blarg"
 * let propNotFound = prop("this.property.doesnt.exist");
 * propNotFound(obj) === undefined
 */
var parse = function (name) { return pipe.apply(null, name.split('.').map(prop)); };
/**
 * Given a function that returns a truthy or falsey value, returns a
 * function that returns the opposite (falsey or truthy) value given the same inputs
 */
var not = function (fn) { return function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return !fn.apply(null, args);
}; };
/**
 * Given two functions that return truthy or falsey values, returns a function that returns truthy
 * if both functions return truthy for the given arguments
 */
function and(fn1, fn2) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return fn1.apply(null, args) && fn2.apply(null, args);
    };
}
/**
 * Given two functions that return truthy or falsey values, returns a function that returns truthy
 * if at least one of the functions returns truthy for the given arguments
 */
function or(fn1, fn2) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return fn1.apply(null, args) || fn2.apply(null, args);
    };
}
/**
 * Check if all the elements of an array match a predicate function
 *
 * @param fn1 a predicate function `fn1`
 * @returns a function which takes an array and returns true if `fn1` is true for all elements of the array
 */
var all = function (fn1) { return function (arr) { return arr.reduce(function (b, x) { return b && !!fn1(x); }, true); }; };
// tslint:disable-next-line:variable-name
var any = function (fn1) { return function (arr) { return arr.reduce(function (b, x) { return b || !!fn1(x); }, false); }; };
/** Given a class, returns a Predicate function that returns true if the object is of that class */
var is = function (ctor) { return function (obj) {
    return (obj != null && obj.constructor === ctor) || obj instanceof ctor;
}; };
/** Given a value, returns a Predicate function that returns true if another value is === equal to the original value */
var eq = function (value) { return function (other) { return value === other; }; };
/** Given a value, returns a function which returns the value */
var val = function (v) { return function () { return v; }; };
function invoke(fnName, args) {
    return function (obj) { return obj[fnName].apply(obj, args); };
}
/**
 * Sorta like Pattern Matching (a functional programming conditional construct)
 *
 * See http://c2.com/cgi/wiki?PatternMatching
 *
 * This is a conditional construct which allows a series of predicates and output functions
 * to be checked and then applied.  Each predicate receives the input.  If the predicate
 * returns truthy, then its matching output function (mapping function) is provided with
 * the input and, then the result is returned.
 *
 * Each combination (2-tuple) of predicate + output function should be placed in an array
 * of size 2: [ predicate, mapFn ]
 *
 * These 2-tuples should be put in an outer array.
 *
 * @example
 * ```
 *
 * // Here's a 2-tuple where the first element is the isString predicate
 * // and the second element is a function that returns a description of the input
 * let firstTuple = [ angular.isString, (input) => `Heres your string ${input}` ];
 *
 * // Second tuple: predicate "isNumber", mapfn returns a description
 * let secondTuple = [ angular.isNumber, (input) => `(${input}) That's a number!` ];
 *
 * let third = [ (input) => input === null,  (input) => `Oh, null...` ];
 *
 * let fourth = [ (input) => input === undefined,  (input) => `notdefined` ];
 *
 * let descriptionOf = pattern([ firstTuple, secondTuple, third, fourth ]);
 *
 * console.log(descriptionOf(undefined)); // 'notdefined'
 * console.log(descriptionOf(55)); // '(55) That's a number!'
 * console.log(descriptionOf("foo")); // 'Here's your string foo'
 * ```
 *
 * @param struct A 2D array.  Each element of the array should be an array, a 2-tuple,
 * with a Predicate and a mapping/output function
 * @returns {function(any): *}
 */
function pattern(struct) {
    return function (x) {
        for (var i = 0; i < struct.length; i++) {
            if (struct[i][0](x))
                return struct[i][1](x);
        }
    };
}
//# sourceMappingURL=hof.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/index.js":
/*!************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/index.js ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Category: () => (/* reexport safe */ _trace__WEBPACK_IMPORTED_MODULE_7__.Category),
/* harmony export */   Glob: () => (/* reexport safe */ _glob__WEBPACK_IMPORTED_MODULE_2__.Glob),
/* harmony export */   Queue: () => (/* reexport safe */ _queue__WEBPACK_IMPORTED_MODULE_5__.Queue),
/* harmony export */   Trace: () => (/* reexport safe */ _trace__WEBPACK_IMPORTED_MODULE_7__.Trace),
/* harmony export */   _extend: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__._extend),
/* harmony export */   _inArray: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__._inArray),
/* harmony export */   _pushTo: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__._pushTo),
/* harmony export */   _removeFrom: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__._removeFrom),
/* harmony export */   all: () => (/* reexport safe */ _hof__WEBPACK_IMPORTED_MODULE_3__.all),
/* harmony export */   allTrueR: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.allTrueR),
/* harmony export */   ancestors: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.ancestors),
/* harmony export */   and: () => (/* reexport safe */ _hof__WEBPACK_IMPORTED_MODULE_3__.and),
/* harmony export */   any: () => (/* reexport safe */ _hof__WEBPACK_IMPORTED_MODULE_3__.any),
/* harmony export */   anyTrueR: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.anyTrueR),
/* harmony export */   applyPairs: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.applyPairs),
/* harmony export */   arrayTuples: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.arrayTuples),
/* harmony export */   assertFn: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.assertFn),
/* harmony export */   assertMap: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.assertMap),
/* harmony export */   assertPredicate: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.assertPredicate),
/* harmony export */   beforeAfterSubstr: () => (/* reexport safe */ _strings__WEBPACK_IMPORTED_MODULE_6__.beforeAfterSubstr),
/* harmony export */   compose: () => (/* reexport safe */ _hof__WEBPACK_IMPORTED_MODULE_3__.compose),
/* harmony export */   copy: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.copy),
/* harmony export */   createProxyFunctions: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.createProxyFunctions),
/* harmony export */   curry: () => (/* reexport safe */ _hof__WEBPACK_IMPORTED_MODULE_3__.curry),
/* harmony export */   defaults: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.defaults),
/* harmony export */   deregAll: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.deregAll),
/* harmony export */   eq: () => (/* reexport safe */ _hof__WEBPACK_IMPORTED_MODULE_3__.eq),
/* harmony export */   equals: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.equals),
/* harmony export */   extend: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.extend),
/* harmony export */   filter: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.filter),
/* harmony export */   find: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.find),
/* harmony export */   flatten: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.flatten),
/* harmony export */   flattenR: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.flattenR),
/* harmony export */   fnToString: () => (/* reexport safe */ _strings__WEBPACK_IMPORTED_MODULE_6__.fnToString),
/* harmony export */   forEach: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.forEach),
/* harmony export */   fromJson: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.fromJson),
/* harmony export */   functionToString: () => (/* reexport safe */ _strings__WEBPACK_IMPORTED_MODULE_6__.functionToString),
/* harmony export */   hostRegex: () => (/* reexport safe */ _strings__WEBPACK_IMPORTED_MODULE_6__.hostRegex),
/* harmony export */   identity: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.identity),
/* harmony export */   inArray: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.inArray),
/* harmony export */   inherit: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.inherit),
/* harmony export */   invoke: () => (/* reexport safe */ _hof__WEBPACK_IMPORTED_MODULE_3__.invoke),
/* harmony export */   is: () => (/* reexport safe */ _hof__WEBPACK_IMPORTED_MODULE_3__.is),
/* harmony export */   isArray: () => (/* reexport safe */ _predicates__WEBPACK_IMPORTED_MODULE_4__.isArray),
/* harmony export */   isDate: () => (/* reexport safe */ _predicates__WEBPACK_IMPORTED_MODULE_4__.isDate),
/* harmony export */   isDefined: () => (/* reexport safe */ _predicates__WEBPACK_IMPORTED_MODULE_4__.isDefined),
/* harmony export */   isFunction: () => (/* reexport safe */ _predicates__WEBPACK_IMPORTED_MODULE_4__.isFunction),
/* harmony export */   isInjectable: () => (/* reexport safe */ _predicates__WEBPACK_IMPORTED_MODULE_4__.isInjectable),
/* harmony export */   isNull: () => (/* reexport safe */ _predicates__WEBPACK_IMPORTED_MODULE_4__.isNull),
/* harmony export */   isNullOrUndefined: () => (/* reexport safe */ _predicates__WEBPACK_IMPORTED_MODULE_4__.isNullOrUndefined),
/* harmony export */   isNumber: () => (/* reexport safe */ _predicates__WEBPACK_IMPORTED_MODULE_4__.isNumber),
/* harmony export */   isObject: () => (/* reexport safe */ _predicates__WEBPACK_IMPORTED_MODULE_4__.isObject),
/* harmony export */   isPromise: () => (/* reexport safe */ _predicates__WEBPACK_IMPORTED_MODULE_4__.isPromise),
/* harmony export */   isRegExp: () => (/* reexport safe */ _predicates__WEBPACK_IMPORTED_MODULE_4__.isRegExp),
/* harmony export */   isString: () => (/* reexport safe */ _predicates__WEBPACK_IMPORTED_MODULE_4__.isString),
/* harmony export */   isUndefined: () => (/* reexport safe */ _predicates__WEBPACK_IMPORTED_MODULE_4__.isUndefined),
/* harmony export */   joinNeighborsR: () => (/* reexport safe */ _strings__WEBPACK_IMPORTED_MODULE_6__.joinNeighborsR),
/* harmony export */   kebobString: () => (/* reexport safe */ _strings__WEBPACK_IMPORTED_MODULE_6__.kebobString),
/* harmony export */   makeStub: () => (/* reexport safe */ _coreservices__WEBPACK_IMPORTED_MODULE_1__.makeStub),
/* harmony export */   map: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.map),
/* harmony export */   mapObj: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.mapObj),
/* harmony export */   maxLength: () => (/* reexport safe */ _strings__WEBPACK_IMPORTED_MODULE_6__.maxLength),
/* harmony export */   mergeR: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.mergeR),
/* harmony export */   noop: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.noop),
/* harmony export */   not: () => (/* reexport safe */ _hof__WEBPACK_IMPORTED_MODULE_3__.not),
/* harmony export */   omit: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.omit),
/* harmony export */   or: () => (/* reexport safe */ _hof__WEBPACK_IMPORTED_MODULE_3__.or),
/* harmony export */   padString: () => (/* reexport safe */ _strings__WEBPACK_IMPORTED_MODULE_6__.padString),
/* harmony export */   pairs: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.pairs),
/* harmony export */   parse: () => (/* reexport safe */ _hof__WEBPACK_IMPORTED_MODULE_3__.parse),
/* harmony export */   pattern: () => (/* reexport safe */ _hof__WEBPACK_IMPORTED_MODULE_3__.pattern),
/* harmony export */   pick: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.pick),
/* harmony export */   pipe: () => (/* reexport safe */ _hof__WEBPACK_IMPORTED_MODULE_3__.pipe),
/* harmony export */   pluck: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.pluck),
/* harmony export */   prop: () => (/* reexport safe */ _hof__WEBPACK_IMPORTED_MODULE_3__.prop),
/* harmony export */   propEq: () => (/* reexport safe */ _hof__WEBPACK_IMPORTED_MODULE_3__.propEq),
/* harmony export */   pushR: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.pushR),
/* harmony export */   pushTo: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.pushTo),
/* harmony export */   removeFrom: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.removeFrom),
/* harmony export */   root: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.root),
/* harmony export */   services: () => (/* reexport safe */ _coreservices__WEBPACK_IMPORTED_MODULE_1__.services),
/* harmony export */   silenceUncaughtInPromise: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.silenceUncaughtInPromise),
/* harmony export */   silentRejection: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.silentRejection),
/* harmony export */   splitEqual: () => (/* reexport safe */ _strings__WEBPACK_IMPORTED_MODULE_6__.splitEqual),
/* harmony export */   splitHash: () => (/* reexport safe */ _strings__WEBPACK_IMPORTED_MODULE_6__.splitHash),
/* harmony export */   splitOnDelim: () => (/* reexport safe */ _strings__WEBPACK_IMPORTED_MODULE_6__.splitOnDelim),
/* harmony export */   splitQuery: () => (/* reexport safe */ _strings__WEBPACK_IMPORTED_MODULE_6__.splitQuery),
/* harmony export */   stringify: () => (/* reexport safe */ _strings__WEBPACK_IMPORTED_MODULE_6__.stringify),
/* harmony export */   stripLastPathElement: () => (/* reexport safe */ _strings__WEBPACK_IMPORTED_MODULE_6__.stripLastPathElement),
/* harmony export */   tail: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.tail),
/* harmony export */   toJson: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.toJson),
/* harmony export */   trace: () => (/* reexport safe */ _trace__WEBPACK_IMPORTED_MODULE_7__.trace),
/* harmony export */   trimHashVal: () => (/* reexport safe */ _strings__WEBPACK_IMPORTED_MODULE_6__.trimHashVal),
/* harmony export */   uniqR: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.uniqR),
/* harmony export */   unnest: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.unnest),
/* harmony export */   unnestR: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.unnestR),
/* harmony export */   val: () => (/* reexport safe */ _hof__WEBPACK_IMPORTED_MODULE_3__.val),
/* harmony export */   values: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.values)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _coreservices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coreservices */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/coreservices.js");
/* harmony import */ var _glob__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glob */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/glob.js");
/* harmony import */ var _hof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hof */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/hof.js");
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./predicates */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _queue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./queue */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/queue.js");
/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./strings */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/strings.js");
/* harmony import */ var _trace__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./trace */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/trace.js");








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/predicates.js":
/*!*****************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/predicates.js ***!
  \*****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isArray: () => (/* binding */ isArray),
/* harmony export */   isDate: () => (/* binding */ isDate),
/* harmony export */   isDefined: () => (/* binding */ isDefined),
/* harmony export */   isFunction: () => (/* binding */ isFunction),
/* harmony export */   isInjectable: () => (/* binding */ isInjectable),
/* harmony export */   isNull: () => (/* binding */ isNull),
/* harmony export */   isNullOrUndefined: () => (/* binding */ isNullOrUndefined),
/* harmony export */   isNumber: () => (/* binding */ isNumber),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   isPromise: () => (/* binding */ isPromise),
/* harmony export */   isRegExp: () => (/* binding */ isRegExp),
/* harmony export */   isString: () => (/* binding */ isString),
/* harmony export */   isUndefined: () => (/* binding */ isUndefined)
/* harmony export */ });
/* harmony import */ var _hof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hof */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/hof.js");
/**
 * Predicates
 *
 * These predicates return true/false based on the input.
 * Although these functions are exported, they are subject to change without notice.
 *
 * @packageDocumentation
 */

var toStr = Object.prototype.toString;
var tis = function (t) { return function (x) { return typeof x === t; }; };
var isUndefined = tis('undefined');
var isDefined = (0,_hof__WEBPACK_IMPORTED_MODULE_0__.not)(isUndefined);
var isNull = function (o) { return o === null; };
var isNullOrUndefined = (0,_hof__WEBPACK_IMPORTED_MODULE_0__.or)(isNull, isUndefined);
var isFunction = tis('function');
var isNumber = tis('number');
var isString = tis('string');
var isObject = function (x) { return x !== null && typeof x === 'object'; };
var isArray = Array.isArray;
var isDate = (function (x) { return toStr.call(x) === '[object Date]'; });
var isRegExp = (function (x) { return toStr.call(x) === '[object RegExp]'; });
/**
 * Predicate which checks if a value is injectable
 *
 * A value is "injectable" if it is a function, or if it is an ng1 array-notation-style array
 * where all the elements in the array are Strings, except the last one, which is a Function
 */
function isInjectable(val) {
    if (isArray(val) && val.length) {
        var head = val.slice(0, -1), tail = val.slice(-1);
        return !(head.filter((0,_hof__WEBPACK_IMPORTED_MODULE_0__.not)(isString)).length || tail.filter((0,_hof__WEBPACK_IMPORTED_MODULE_0__.not)(isFunction)).length);
    }
    return isFunction(val);
}
/**
 * Predicate which checks if a value looks like a Promise
 *
 * It is probably a Promise if it's an object, and it has a `then` property which is a Function
 */
var isPromise = (0,_hof__WEBPACK_IMPORTED_MODULE_0__.and)(isObject, (0,_hof__WEBPACK_IMPORTED_MODULE_0__.pipe)((0,_hof__WEBPACK_IMPORTED_MODULE_0__.prop)('then'), isFunction));
//# sourceMappingURL=predicates.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/queue.js":
/*!************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/queue.js ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Queue: () => (/* binding */ Queue)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/common.js");

var Queue = /** @class */ (function () {
    function Queue(_items, _limit) {
        if (_items === void 0) { _items = []; }
        if (_limit === void 0) { _limit = null; }
        this._items = _items;
        this._limit = _limit;
        this._evictListeners = [];
        this.onEvict = (0,_common__WEBPACK_IMPORTED_MODULE_0__.pushTo)(this._evictListeners);
    }
    Queue.prototype.enqueue = function (item) {
        var items = this._items;
        items.push(item);
        if (this._limit && items.length > this._limit)
            this.evict();
        return item;
    };
    Queue.prototype.evict = function () {
        var item = this._items.shift();
        this._evictListeners.forEach(function (fn) { return fn(item); });
        return item;
    };
    Queue.prototype.dequeue = function () {
        if (this.size())
            return this._items.splice(0, 1)[0];
    };
    Queue.prototype.clear = function () {
        var current = this._items;
        this._items = [];
        return current;
    };
    Queue.prototype.size = function () {
        return this._items.length;
    };
    Queue.prototype.remove = function (item) {
        var idx = this._items.indexOf(item);
        return idx > -1 && this._items.splice(idx, 1)[0];
    };
    Queue.prototype.peekTail = function () {
        return this._items[this._items.length - 1];
    };
    Queue.prototype.peekHead = function () {
        if (this.size())
            return this._items[0];
    };
    return Queue;
}());

//# sourceMappingURL=queue.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/safeConsole.js":
/*!******************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/safeConsole.js ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   safeConsole: () => (/* binding */ safeConsole)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/common.js");
/**
 * workaround for missing console object in IE9 when dev tools haven't been opened o_O
 * @packageDocumentation
 */
/* tslint:disable:no-console */

var noopConsoleStub = { log: _common__WEBPACK_IMPORTED_MODULE_0__.noop, error: _common__WEBPACK_IMPORTED_MODULE_0__.noop, table: _common__WEBPACK_IMPORTED_MODULE_0__.noop };
function ie9Console(console) {
    var bound = function (fn) { return Function.prototype.bind.call(fn, console); };
    return {
        log: bound(console.log),
        error: bound(console.log),
        table: bound(console.log),
    };
}
function fallbackConsole(console) {
    var log = console.log.bind(console);
    var error = console.error ? console.error.bind(console) : log;
    var table = console.table ? console.table.bind(console) : log;
    return { log: log, error: error, table: table };
}
function getSafeConsole() {
    // @ts-ignore
    var isIE9 = typeof document !== 'undefined' && document.documentMode && document.documentMode === 9;
    if (isIE9) {
        return window && window.console ? ie9Console(window.console) : noopConsoleStub;
    }
    else if (!console.table || !console.error) {
        return fallbackConsole(console);
    }
    else {
        return console;
    }
}
var safeConsole = getSafeConsole();
//# sourceMappingURL=safeConsole.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/strings.js":
/*!**************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/strings.js ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   beforeAfterSubstr: () => (/* binding */ beforeAfterSubstr),
/* harmony export */   fnToString: () => (/* binding */ fnToString),
/* harmony export */   functionToString: () => (/* binding */ functionToString),
/* harmony export */   hostRegex: () => (/* binding */ hostRegex),
/* harmony export */   joinNeighborsR: () => (/* binding */ joinNeighborsR),
/* harmony export */   kebobString: () => (/* binding */ kebobString),
/* harmony export */   maxLength: () => (/* binding */ maxLength),
/* harmony export */   padString: () => (/* binding */ padString),
/* harmony export */   splitEqual: () => (/* binding */ splitEqual),
/* harmony export */   splitHash: () => (/* binding */ splitHash),
/* harmony export */   splitOnDelim: () => (/* binding */ splitOnDelim),
/* harmony export */   splitQuery: () => (/* binding */ splitQuery),
/* harmony export */   stringify: () => (/* binding */ stringify),
/* harmony export */   stripLastPathElement: () => (/* binding */ stripLastPathElement),
/* harmony export */   trimHashVal: () => (/* binding */ trimHashVal)
/* harmony export */ });
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./predicates */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _transition_rejectFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../transition/rejectFactory */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/transition/rejectFactory.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _hof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hof */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/hof.js");
/**
 * Functions that manipulate strings
 *
 * Although these functions are exported, they are subject to change without notice.
 *
 * @packageDocumentation
 */




/**
 * Returns a string shortened to a maximum length
 *
 * If the string is already less than the `max` length, return the string.
 * Else return the string, shortened to `max - 3` and append three dots ("...").
 *
 * @param max the maximum length of the string to return
 * @param str the input string
 */
function maxLength(max, str) {
    if (str.length <= max)
        return str;
    return str.substr(0, max - 3) + '...';
}
/**
 * Returns a string, with spaces added to the end, up to a desired str length
 *
 * If the string is already longer than the desired length, return the string.
 * Else returns the string, with extra spaces on the end, such that it reaches `length` characters.
 *
 * @param length the desired length of the string to return
 * @param str the input string
 */
function padString(length, str) {
    while (str.length < length)
        str += ' ';
    return str;
}
function kebobString(camelCase) {
    return camelCase
        .replace(/^([A-Z])/, function ($1) { return $1.toLowerCase(); }) // replace first char
        .replace(/([A-Z])/g, function ($1) { return '-' + $1.toLowerCase(); }); // replace rest
}
function functionToString(fn) {
    var fnStr = fnToString(fn);
    var namedFunctionMatch = fnStr.match(/^(function [^ ]+\([^)]*\))/);
    var toStr = namedFunctionMatch ? namedFunctionMatch[1] : fnStr;
    var fnName = fn['name'] || '';
    if (fnName && toStr.match(/function \(/)) {
        return 'function ' + fnName + toStr.substr(9);
    }
    return toStr;
}
function fnToString(fn) {
    var _fn = (0,_predicates__WEBPACK_IMPORTED_MODULE_0__.isArray)(fn) ? fn.slice(-1)[0] : fn;
    return (_fn && _fn.toString()) || 'undefined';
}
function stringify(o) {
    var seen = [];
    var isRejection = _transition_rejectFactory__WEBPACK_IMPORTED_MODULE_1__.Rejection.isRejectionPromise;
    var hasToString = function (obj) {
        return (0,_predicates__WEBPACK_IMPORTED_MODULE_0__.isObject)(obj) && !(0,_predicates__WEBPACK_IMPORTED_MODULE_0__.isArray)(obj) && obj.constructor !== Object && (0,_predicates__WEBPACK_IMPORTED_MODULE_0__.isFunction)(obj.toString);
    };
    var stringifyPattern = (0,_hof__WEBPACK_IMPORTED_MODULE_3__.pattern)([
        [_predicates__WEBPACK_IMPORTED_MODULE_0__.isUndefined, (0,_hof__WEBPACK_IMPORTED_MODULE_3__.val)('undefined')],
        [_predicates__WEBPACK_IMPORTED_MODULE_0__.isNull, (0,_hof__WEBPACK_IMPORTED_MODULE_3__.val)('null')],
        [_predicates__WEBPACK_IMPORTED_MODULE_0__.isPromise, (0,_hof__WEBPACK_IMPORTED_MODULE_3__.val)('[Promise]')],
        [isRejection, function (x) { return x._transitionRejection.toString(); }],
        [hasToString, function (x) { return x.toString(); }],
        [_predicates__WEBPACK_IMPORTED_MODULE_0__.isInjectable, functionToString],
        [(0,_hof__WEBPACK_IMPORTED_MODULE_3__.val)(true), _common__WEBPACK_IMPORTED_MODULE_2__.identity],
    ]);
    function format(value) {
        if ((0,_predicates__WEBPACK_IMPORTED_MODULE_0__.isObject)(value)) {
            if (seen.indexOf(value) !== -1)
                return '[circular ref]';
            seen.push(value);
        }
        return stringifyPattern(value);
    }
    if ((0,_predicates__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(o)) {
        // Workaround for IE & Edge Spec incompatibility where replacer function would not be called when JSON.stringify
        // is given `undefined` as value. To work around that, we simply detect `undefined` and bail out early by
        // manually stringifying it.
        return format(o);
    }
    return JSON.stringify(o, function (key, value) { return format(value); }).replace(/\\"/g, '"');
}
/** Returns a function that splits a string on a character or substring */
var beforeAfterSubstr = function (char) {
    return function (str) {
        if (!str)
            return ['', ''];
        var idx = str.indexOf(char);
        if (idx === -1)
            return [str, ''];
        return [str.substr(0, idx), str.substr(idx + 1)];
    };
};
var hostRegex = new RegExp('^(?:[a-z]+:)?//[^/]+/');
var stripLastPathElement = function (str) { return str.replace(/\/[^/]*$/, ''); };
var splitHash = beforeAfterSubstr('#');
var splitQuery = beforeAfterSubstr('?');
var splitEqual = beforeAfterSubstr('=');
var trimHashVal = function (str) { return (str ? str.replace(/^#/, '') : ''); };
/**
 * Splits on a delimiter, but returns the delimiters in the array
 *
 * #### Example:
 * ```js
 * var splitOnSlashes = splitOnDelim('/');
 * splitOnSlashes("/foo"); // ["/", "foo"]
 * splitOnSlashes("/foo/"); // ["/", "foo", "/"]
 * ```
 */
function splitOnDelim(delim) {
    var re = new RegExp('(' + delim + ')', 'g');
    return function (str) { return str.split(re).filter(_common__WEBPACK_IMPORTED_MODULE_2__.identity); };
}
/**
 * Reduce fn that joins neighboring strings
 *
 * Given an array of strings, returns a new array
 * where all neighboring strings have been joined.
 *
 * #### Example:
 * ```js
 * let arr = ["foo", "bar", 1, "baz", "", "qux" ];
 * arr.reduce(joinNeighborsR, []) // ["foobar", 1, "bazqux" ]
 * ```
 */
function joinNeighborsR(acc, x) {
    if ((0,_predicates__WEBPACK_IMPORTED_MODULE_0__.isString)((0,_common__WEBPACK_IMPORTED_MODULE_2__.tail)(acc)) && (0,_predicates__WEBPACK_IMPORTED_MODULE_0__.isString)(x))
        return acc.slice(0, -1).concat((0,_common__WEBPACK_IMPORTED_MODULE_2__.tail)(acc) + x);
    return (0,_common__WEBPACK_IMPORTED_MODULE_2__.pushR)(acc, x);
}
//# sourceMappingURL=strings.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/trace.js":
/*!************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/trace.js ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Category: () => (/* binding */ Category),
/* harmony export */   Trace: () => (/* binding */ Trace),
/* harmony export */   trace: () => (/* binding */ trace)
/* harmony export */ });
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/hof.js");
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./strings */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/strings.js");
/* harmony import */ var _safeConsole__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./safeConsole */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/safeConsole.js");
/**
 * # Transition tracing (debug)
 *
 * Enable transition tracing to print transition information to the console,
 * in order to help debug your application.
 * Tracing logs detailed information about each Transition to your console.
 *
 * To enable tracing, import the [[Trace]] singleton and enable one or more categories.
 *
 * ### ES6
 * ```js
 * import {trace} from "@uirouter/core";
 * trace.enable(1, 5); // TRANSITION and VIEWCONFIG
 * ```
 *
 * ### CJS
 * ```js
 * let trace = require("@uirouter/core").trace;
 * trace.enable("TRANSITION", "VIEWCONFIG");
 * ```
 *
 * ### Globals
 * ```js
 * let trace = window["@uirouter/core"].trace;
 * trace.enable(); // Trace everything (very verbose)
 * ```
 *
 * ### Angular 1:
 * ```js
 * app.run($trace => $trace.enable());
 * ```
 *
 * @packageDocumentation
 */




function uiViewString(uiview) {
    if (!uiview)
        return 'ui-view (defunct)';
    var state = uiview.creationContext ? uiview.creationContext.name || '(root)' : '(none)';
    return "[ui-view#" + uiview.id + " " + uiview.$type + ":" + uiview.fqn + " (" + uiview.name + "@" + state + ")]";
}
var viewConfigString = function (viewConfig) {
    var view = viewConfig.viewDecl;
    var state = view.$context.name || '(root)';
    return "[View#" + viewConfig.$id + " from '" + state + "' state]: target ui-view: '" + view.$uiViewName + "@" + view.$uiViewContextAnchor + "'";
};
function normalizedCat(input) {
    return (0,_common_predicates__WEBPACK_IMPORTED_MODULE_1__.isNumber)(input) ? Category[input] : Category[Category[input]];
}
/**
 * Trace categories Enum
 *
 * Enable or disable a category using [[Trace.enable]] or [[Trace.disable]]
 *
 * `trace.enable(Category.TRANSITION)`
 *
 * These can also be provided using a matching string, or position ordinal
 *
 * `trace.enable("TRANSITION")`
 *
 * `trace.enable(1)`
 */
var Category;
(function (Category) {
    Category[Category["RESOLVE"] = 0] = "RESOLVE";
    Category[Category["TRANSITION"] = 1] = "TRANSITION";
    Category[Category["HOOK"] = 2] = "HOOK";
    Category[Category["UIVIEW"] = 3] = "UIVIEW";
    Category[Category["VIEWCONFIG"] = 4] = "VIEWCONFIG";
})(Category || (Category = {}));

var _tid = (0,_common_hof__WEBPACK_IMPORTED_MODULE_0__.parse)('$id');
var _rid = (0,_common_hof__WEBPACK_IMPORTED_MODULE_0__.parse)('router.$id');
var transLbl = function (trans) { return "Transition #" + _tid(trans) + "-" + _rid(trans); };
/**
 * Prints UI-Router Transition trace information to the console.
 */
var Trace = /** @class */ (function () {
    /** @internal */
    function Trace() {
        /** @internal */
        this._enabled = {};
        this.approximateDigests = 0;
    }
    /** @internal */
    Trace.prototype._set = function (enabled, categories) {
        var _this = this;
        if (!categories.length) {
            categories = Object.keys(Category)
                .map(function (k) { return parseInt(k, 10); })
                .filter(function (k) { return !isNaN(k); })
                .map(function (key) { return Category[key]; });
        }
        categories.map(normalizedCat).forEach(function (category) { return (_this._enabled[category] = enabled); });
    };
    Trace.prototype.enable = function () {
        var categories = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            categories[_i] = arguments[_i];
        }
        this._set(true, categories);
    };
    Trace.prototype.disable = function () {
        var categories = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            categories[_i] = arguments[_i];
        }
        this._set(false, categories);
    };
    /**
     * Retrieves the enabled stateus of a [[Category]]
     *
     * ```js
     * trace.enabled("VIEWCONFIG"); // true or false
     * ```
     *
     * @returns boolean true if the category is enabled
     */
    Trace.prototype.enabled = function (category) {
        return !!this._enabled[normalizedCat(category)];
    };
    /** @internal called by ui-router code */
    Trace.prototype.traceTransitionStart = function (trans) {
        if (!this.enabled(Category.TRANSITION))
            return;
        _safeConsole__WEBPACK_IMPORTED_MODULE_3__.safeConsole.log(transLbl(trans) + ": Started  -> " + (0,_strings__WEBPACK_IMPORTED_MODULE_2__.stringify)(trans));
    };
    /** @internal called by ui-router code */
    Trace.prototype.traceTransitionIgnored = function (trans) {
        if (!this.enabled(Category.TRANSITION))
            return;
        _safeConsole__WEBPACK_IMPORTED_MODULE_3__.safeConsole.log(transLbl(trans) + ": Ignored  <> " + (0,_strings__WEBPACK_IMPORTED_MODULE_2__.stringify)(trans));
    };
    /** @internal called by ui-router code */
    Trace.prototype.traceHookInvocation = function (step, trans, options) {
        if (!this.enabled(Category.HOOK))
            return;
        var event = (0,_common_hof__WEBPACK_IMPORTED_MODULE_0__.parse)('traceData.hookType')(options) || 'internal', context = (0,_common_hof__WEBPACK_IMPORTED_MODULE_0__.parse)('traceData.context.state.name')(options) || (0,_common_hof__WEBPACK_IMPORTED_MODULE_0__.parse)('traceData.context')(options) || 'unknown', name = (0,_strings__WEBPACK_IMPORTED_MODULE_2__.functionToString)(step.registeredHook.callback);
        _safeConsole__WEBPACK_IMPORTED_MODULE_3__.safeConsole.log(transLbl(trans) + ":   Hook -> " + event + " context: " + context + ", " + (0,_strings__WEBPACK_IMPORTED_MODULE_2__.maxLength)(200, name));
    };
    /** @internal called by ui-router code */
    Trace.prototype.traceHookResult = function (hookResult, trans, transitionOptions) {
        if (!this.enabled(Category.HOOK))
            return;
        _safeConsole__WEBPACK_IMPORTED_MODULE_3__.safeConsole.log(transLbl(trans) + ":   <- Hook returned: " + (0,_strings__WEBPACK_IMPORTED_MODULE_2__.maxLength)(200, (0,_strings__WEBPACK_IMPORTED_MODULE_2__.stringify)(hookResult)));
    };
    /** @internal called by ui-router code */
    Trace.prototype.traceResolvePath = function (path, when, trans) {
        if (!this.enabled(Category.RESOLVE))
            return;
        _safeConsole__WEBPACK_IMPORTED_MODULE_3__.safeConsole.log(transLbl(trans) + ":         Resolving " + path + " (" + when + ")");
    };
    /** @internal called by ui-router code */
    Trace.prototype.traceResolvableResolved = function (resolvable, trans) {
        if (!this.enabled(Category.RESOLVE))
            return;
        _safeConsole__WEBPACK_IMPORTED_MODULE_3__.safeConsole.log(transLbl(trans) + ":               <- Resolved  " + resolvable + " to: " + (0,_strings__WEBPACK_IMPORTED_MODULE_2__.maxLength)(200, (0,_strings__WEBPACK_IMPORTED_MODULE_2__.stringify)(resolvable.data)));
    };
    /** @internal called by ui-router code */
    Trace.prototype.traceError = function (reason, trans) {
        if (!this.enabled(Category.TRANSITION))
            return;
        _safeConsole__WEBPACK_IMPORTED_MODULE_3__.safeConsole.log(transLbl(trans) + ": <- Rejected " + (0,_strings__WEBPACK_IMPORTED_MODULE_2__.stringify)(trans) + ", reason: " + reason);
    };
    /** @internal called by ui-router code */
    Trace.prototype.traceSuccess = function (finalState, trans) {
        if (!this.enabled(Category.TRANSITION))
            return;
        _safeConsole__WEBPACK_IMPORTED_MODULE_3__.safeConsole.log(transLbl(trans) + ": <- Success  " + (0,_strings__WEBPACK_IMPORTED_MODULE_2__.stringify)(trans) + ", final state: " + finalState.name);
    };
    /** @internal called by ui-router code */
    Trace.prototype.traceUIViewEvent = function (event, viewData, extra) {
        if (extra === void 0) { extra = ''; }
        if (!this.enabled(Category.UIVIEW))
            return;
        _safeConsole__WEBPACK_IMPORTED_MODULE_3__.safeConsole.log("ui-view: " + (0,_strings__WEBPACK_IMPORTED_MODULE_2__.padString)(30, event) + " " + uiViewString(viewData) + extra);
    };
    /** @internal called by ui-router code */
    Trace.prototype.traceUIViewConfigUpdated = function (viewData, context) {
        if (!this.enabled(Category.UIVIEW))
            return;
        this.traceUIViewEvent('Updating', viewData, " with ViewConfig from context='" + context + "'");
    };
    /** @internal called by ui-router code */
    Trace.prototype.traceUIViewFill = function (viewData, html) {
        if (!this.enabled(Category.UIVIEW))
            return;
        this.traceUIViewEvent('Fill', viewData, " with: " + (0,_strings__WEBPACK_IMPORTED_MODULE_2__.maxLength)(200, html));
    };
    /** @internal called by ui-router code */
    Trace.prototype.traceViewSync = function (pairs) {
        if (!this.enabled(Category.VIEWCONFIG))
            return;
        var uivheader = 'uiview component fqn';
        var cfgheader = 'view config state (view name)';
        var mapping = pairs
            .map(function (_a) {
            var _b;
            var uiView = _a.uiView, viewConfig = _a.viewConfig;
            var uiv = uiView && uiView.fqn;
            var cfg = viewConfig && viewConfig.viewDecl.$context.name + ": (" + viewConfig.viewDecl.$name + ")";
            return _b = {}, _b[uivheader] = uiv, _b[cfgheader] = cfg, _b;
        })
            .sort(function (a, b) { return (a[uivheader] || '').localeCompare(b[uivheader] || ''); });
        _safeConsole__WEBPACK_IMPORTED_MODULE_3__.safeConsole.table(mapping);
    };
    /** @internal called by ui-router code */
    Trace.prototype.traceViewServiceEvent = function (event, viewConfig) {
        if (!this.enabled(Category.VIEWCONFIG))
            return;
        _safeConsole__WEBPACK_IMPORTED_MODULE_3__.safeConsole.log("VIEWCONFIG: " + event + " " + viewConfigString(viewConfig));
    };
    /** @internal called by ui-router code */
    Trace.prototype.traceViewServiceUIViewEvent = function (event, viewData) {
        if (!this.enabled(Category.VIEWCONFIG))
            return;
        _safeConsole__WEBPACK_IMPORTED_MODULE_3__.safeConsole.log("VIEWCONFIG: " + event + " " + uiViewString(viewData));
    };
    return Trace;
}());

/**
 * The [[Trace]] singleton
 *
 * #### Example:
 * ```js
 * import {trace} from "@uirouter/core";
 * trace.enable(1, 5);
 * ```
 */
var trace = new Trace();

//# sourceMappingURL=trace.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/globals.js":
/*!*******************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/globals.js ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UIRouterGlobals: () => (/* binding */ UIRouterGlobals)
/* harmony export */ });
/* harmony import */ var _params_stateParams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./params/stateParams */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/params/stateParams.js");
/* harmony import */ var _common_queue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/queue */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/queue.js");


/**
 * Global router state
 *
 * This is where we hold the global mutable state such as current state, current
 * params, current transition, etc.
 */
var UIRouterGlobals = /** @class */ (function () {
    function UIRouterGlobals() {
        /**
         * Current parameter values
         *
         * The parameter values from the latest successful transition
         */
        this.params = new _params_stateParams__WEBPACK_IMPORTED_MODULE_0__.StateParams();
        /** @internal */
        this.lastStartedTransitionId = -1;
        /** @internal */
        this.transitionHistory = new _common_queue__WEBPACK_IMPORTED_MODULE_1__.Queue([], 1);
        /** @internal */
        this.successfulTransitions = new _common_queue__WEBPACK_IMPORTED_MODULE_1__.Queue([], 1);
    }
    UIRouterGlobals.prototype.dispose = function () {
        this.transitionHistory.clear();
        this.successfulTransitions.clear();
        this.transition = null;
    };
    return UIRouterGlobals;
}());

//# sourceMappingURL=globals.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/hooks/coreResolvables.js":
/*!*********************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/hooks/coreResolvables.js ***!
  \*********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerAddCoreResolvables: () => (/* binding */ registerAddCoreResolvables),
/* harmony export */   treeChangesCleanup: () => (/* binding */ treeChangesCleanup)
/* harmony export */ });
/* harmony import */ var _transition_transition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../transition/transition */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/transition/transition.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/router.js");
/* harmony import */ var _resolve__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resolve */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/resolve/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/index.js");




function addCoreResolvables(trans) {
    trans.addResolvable(_resolve__WEBPACK_IMPORTED_MODULE_2__.Resolvable.fromData(_router__WEBPACK_IMPORTED_MODULE_1__.UIRouter, trans.router), '');
    trans.addResolvable(_resolve__WEBPACK_IMPORTED_MODULE_2__.Resolvable.fromData(_transition_transition__WEBPACK_IMPORTED_MODULE_0__.Transition, trans), '');
    trans.addResolvable(_resolve__WEBPACK_IMPORTED_MODULE_2__.Resolvable.fromData('$transition$', trans), '');
    trans.addResolvable(_resolve__WEBPACK_IMPORTED_MODULE_2__.Resolvable.fromData('$stateParams', trans.params()), '');
    trans.entering().forEach(function (state) {
        trans.addResolvable(_resolve__WEBPACK_IMPORTED_MODULE_2__.Resolvable.fromData('$state$', state), state);
    });
}
var registerAddCoreResolvables = function (transitionService) {
    return transitionService.onCreate({}, addCoreResolvables);
};
var TRANSITION_TOKENS = ['$transition$', _transition_transition__WEBPACK_IMPORTED_MODULE_0__.Transition];
var isTransition = (0,_common__WEBPACK_IMPORTED_MODULE_3__.inArray)(TRANSITION_TOKENS);
// References to Transition in the treeChanges pathnodes makes all
// previous Transitions reachable in memory, causing a memory leak
// This function removes resolves for '$transition$' and `Transition` from the treeChanges.
// Do not use this on current transitions, only on old ones.
var treeChangesCleanup = function (trans) {
    var nodes = (0,_common__WEBPACK_IMPORTED_MODULE_3__.values)(trans.treeChanges()).reduce(_common__WEBPACK_IMPORTED_MODULE_3__.unnestR, []).reduce(_common__WEBPACK_IMPORTED_MODULE_3__.uniqR, []);
    // If the resolvable is a Transition, return a new resolvable with null data
    var replaceTransitionWithNull = function (r) {
        return isTransition(r.token) ? _resolve__WEBPACK_IMPORTED_MODULE_2__.Resolvable.fromData(r.token, null) : r;
    };
    nodes.forEach(function (node) {
        node.resolvables = node.resolvables.map(replaceTransitionWithNull);
    });
};
//# sourceMappingURL=coreResolvables.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/hooks/ignoredTransition.js":
/*!***********************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/hooks/ignoredTransition.js ***!
  \***********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerIgnoredTransitionHook: () => (/* binding */ registerIgnoredTransitionHook)
/* harmony export */ });
/* harmony import */ var _common_trace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/trace */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/trace.js");
/* harmony import */ var _transition_rejectFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../transition/rejectFactory */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/transition/rejectFactory.js");


/**
 * A [[TransitionHookFn]] that skips a transition if it should be ignored
 *
 * This hook is invoked at the end of the onBefore phase.
 *
 * If the transition should be ignored (because no parameter or states changed)
 * then the transition is ignored and not processed.
 */
function ignoredHook(trans) {
    var ignoredReason = trans._ignoredReason();
    if (!ignoredReason)
        return;
    _common_trace__WEBPACK_IMPORTED_MODULE_0__.trace.traceTransitionIgnored(trans);
    var pending = trans.router.globals.transition;
    // The user clicked a link going back to the *current state* ('A')
    // However, there is also a pending transition in flight (to 'B')
    // Abort the transition to 'B' because the user now wants to be back at 'A'.
    if (ignoredReason === 'SameAsCurrent' && pending) {
        pending.abort();
    }
    return _transition_rejectFactory__WEBPACK_IMPORTED_MODULE_1__.Rejection.ignored().toPromise();
}
var registerIgnoredTransitionHook = function (transitionService) {
    return transitionService.onBefore({}, ignoredHook, { priority: -9999 });
};
//# sourceMappingURL=ignoredTransition.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/hooks/invalidTransition.js":
/*!***********************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/hooks/invalidTransition.js ***!
  \***********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerInvalidTransitionHook: () => (/* binding */ registerInvalidTransitionHook)
/* harmony export */ });
/**
 * A [[TransitionHookFn]] that rejects the Transition if it is invalid
 *
 * This hook is invoked at the end of the onBefore phase.
 * If the transition is invalid (for example, param values do not validate)
 * then the transition is rejected.
 */
function invalidTransitionHook(trans) {
    if (!trans.valid()) {
        throw new Error(trans.error().toString());
    }
}
var registerInvalidTransitionHook = function (transitionService) {
    return transitionService.onBefore({}, invalidTransitionHook, { priority: -10000 });
};
//# sourceMappingURL=invalidTransition.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/hooks/lazyLoad.js":
/*!**************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/hooks/lazyLoad.js ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lazyLoadState: () => (/* binding */ lazyLoadState),
/* harmony export */   registerLazyLoadHook: () => (/* binding */ registerLazyLoadHook)
/* harmony export */ });
/* harmony import */ var _common_coreservices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/coreservices */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/coreservices.js");

/**
 * A [[TransitionHookFn]] that performs lazy loading
 *
 * When entering a state "abc" which has a `lazyLoad` function defined:
 * - Invoke the `lazyLoad` function (unless it is already in process)
 *   - Flag the hook function as "in process"
 *   - The function should return a promise (that resolves when lazy loading is complete)
 * - Wait for the promise to settle
 *   - If the promise resolves to a [[LazyLoadResult]], then register those states
 *   - Flag the hook function as "not in process"
 * - If the hook was successful
 *   - Remove the `lazyLoad` function from the state declaration
 * - If all the hooks were successful
 *   - Retry the transition (by returning a TargetState)
 *
 * ```
 * .state('abc', {
 *   component: 'fooComponent',
 *   lazyLoad: () => import('./fooComponent')
 *   });
 * ```
 *
 * See [[StateDeclaration.lazyLoad]]
 */
var lazyLoadHook = function (transition) {
    var router = transition.router;
    function retryTransition() {
        if (transition.originalTransition().options().source !== 'url') {
            // The original transition was not triggered via url sync
            // The lazy state should be loaded now, so re-try the original transition
            var orig = transition.targetState();
            return router.stateService.target(orig.identifier(), orig.params(), orig.options());
        }
        // The original transition was triggered via url sync
        // Run the URL rules and find the best match
        var $url = router.urlService;
        var result = $url.match($url.parts());
        var rule = result && result.rule;
        // If the best match is a state, redirect the transition (instead
        // of calling sync() which supersedes the current transition)
        if (rule && rule.type === 'STATE') {
            var state = rule.state;
            var params = result.match;
            return router.stateService.target(state, params, transition.options());
        }
        // No matching state found, so let .sync() choose the best non-state match/otherwise
        router.urlService.sync();
    }
    var promises = transition
        .entering()
        .filter(function (state) { return !!state.$$state().lazyLoad; })
        .map(function (state) { return lazyLoadState(transition, state); });
    return _common_coreservices__WEBPACK_IMPORTED_MODULE_0__.services.$q.all(promises).then(retryTransition);
};
var registerLazyLoadHook = function (transitionService) {
    return transitionService.onBefore({ entering: function (state) { return !!state.lazyLoad; } }, lazyLoadHook);
};
/**
 * Invokes a state's lazy load function
 *
 * @param transition a Transition context
 * @param state the state to lazy load
 * @returns A promise for the lazy load result
 */
function lazyLoadState(transition, state) {
    var lazyLoadFn = state.$$state().lazyLoad;
    // Store/get the lazy load promise on/from the hookfn so it doesn't get re-invoked
    var promise = lazyLoadFn['_promise'];
    if (!promise) {
        var success = function (result) {
            delete state.lazyLoad;
            delete state.$$state().lazyLoad;
            delete lazyLoadFn['_promise'];
            return result;
        };
        var error = function (err) {
            delete lazyLoadFn['_promise'];
            return _common_coreservices__WEBPACK_IMPORTED_MODULE_0__.services.$q.reject(err);
        };
        promise = lazyLoadFn['_promise'] = _common_coreservices__WEBPACK_IMPORTED_MODULE_0__.services.$q.when(lazyLoadFn(transition, state))
            .then(updateStateRegistry)
            .then(success, error);
    }
    /** Register any lazy loaded state definitions */
    function updateStateRegistry(result) {
        if (result && Array.isArray(result.states)) {
            result.states.forEach(function (_state) { return transition.router.stateRegistry.register(_state); });
        }
        return result;
    }
    return promise;
}
//# sourceMappingURL=lazyLoad.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/hooks/onEnterExitRetain.js":
/*!***********************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/hooks/onEnterExitRetain.js ***!
  \***********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerOnEnterHook: () => (/* binding */ registerOnEnterHook),
/* harmony export */   registerOnExitHook: () => (/* binding */ registerOnExitHook),
/* harmony export */   registerOnRetainHook: () => (/* binding */ registerOnRetainHook)
/* harmony export */ });
/**
 * A factory which creates an onEnter, onExit or onRetain transition hook function
 *
 * The returned function invokes the (for instance) state.onEnter hook when the
 * state is being entered.
 */
function makeEnterExitRetainHook(hookName) {
    return function (transition, state) {
        var _state = state.$$state();
        var hookFn = _state[hookName];
        return hookFn(transition, state);
    };
}
/**
 * The [[TransitionStateHookFn]] for onExit
 *
 * When the state is being exited, the state's .onExit function is invoked.
 *
 * Registered using `transitionService.onExit({ exiting: (state) => !!state.onExit }, onExitHook);`
 *
 * See: [[IHookRegistry.onExit]]
 */
var onExitHook = makeEnterExitRetainHook('onExit');
var registerOnExitHook = function (transitionService) {
    return transitionService.onExit({ exiting: function (state) { return !!state.onExit; } }, onExitHook);
};
/**
 * The [[TransitionStateHookFn]] for onRetain
 *
 * When the state was already entered, and is not being exited or re-entered, the state's .onRetain function is invoked.
 *
 * Registered using `transitionService.onRetain({ retained: (state) => !!state.onRetain }, onRetainHook);`
 *
 * See: [[IHookRegistry.onRetain]]
 */
var onRetainHook = makeEnterExitRetainHook('onRetain');
var registerOnRetainHook = function (transitionService) {
    return transitionService.onRetain({ retained: function (state) { return !!state.onRetain; } }, onRetainHook);
};
/**
 * The [[TransitionStateHookFn]] for onEnter
 *
 * When the state is being entered, the state's .onEnter function is invoked.
 *
 * Registered using `transitionService.onEnter({ entering: (state) => !!state.onEnter }, onEnterHook);`
 *
 * See: [[IHookRegistry.onEnter]]
 */
var onEnterHook = makeEnterExitRetainHook('onEnter');
var registerOnEnterHook = function (transitionService) {
    return transitionService.onEnter({ entering: function (state) { return !!state.onEnter; } }, onEnterHook);
};
//# sourceMappingURL=onEnterExitRetain.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/hooks/redirectTo.js":
/*!****************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/hooks/redirectTo.js ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerRedirectToHook: () => (/* binding */ registerRedirectToHook)
/* harmony export */ });
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _common_coreservices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/coreservices */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/coreservices.js");
/* harmony import */ var _state_targetState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/targetState */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/state/targetState.js");



/**
 * A [[TransitionHookFn]] that redirects to a different state or params
 *
 * Registered using `transitionService.onStart({ to: (state) => !!state.redirectTo }, redirectHook);`
 *
 * See [[StateDeclaration.redirectTo]]
 */
var redirectToHook = function (trans) {
    var redirect = trans.to().redirectTo;
    if (!redirect)
        return;
    var $state = trans.router.stateService;
    function handleResult(result) {
        if (!result)
            return;
        if (result instanceof _state_targetState__WEBPACK_IMPORTED_MODULE_2__.TargetState)
            return result;
        if ((0,_common_predicates__WEBPACK_IMPORTED_MODULE_0__.isString)(result))
            return $state.target(result, trans.params(), trans.options());
        if (result['state'] || result['params'])
            return $state.target(result['state'] || trans.to(), result['params'] || trans.params(), trans.options());
    }
    if ((0,_common_predicates__WEBPACK_IMPORTED_MODULE_0__.isFunction)(redirect)) {
        return _common_coreservices__WEBPACK_IMPORTED_MODULE_1__.services.$q.when(redirect(trans)).then(handleResult);
    }
    return handleResult(redirect);
};
var registerRedirectToHook = function (transitionService) {
    return transitionService.onStart({ to: function (state) { return !!state.redirectTo; } }, redirectToHook);
};
//# sourceMappingURL=redirectTo.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/hooks/resolve.js":
/*!*************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/hooks/resolve.js ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RESOLVE_HOOK_PRIORITY: () => (/* binding */ RESOLVE_HOOK_PRIORITY),
/* harmony export */   registerEagerResolvePath: () => (/* binding */ registerEagerResolvePath),
/* harmony export */   registerLazyResolveState: () => (/* binding */ registerLazyResolveState),
/* harmony export */   registerResolveRemaining: () => (/* binding */ registerResolveRemaining)
/* harmony export */ });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _resolve_resolveContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resolve/resolveContext */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/resolve/resolveContext.js");
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/hof.js");



var RESOLVE_HOOK_PRIORITY = 1000;
/**
 * A [[TransitionHookFn]] which resolves all EAGER Resolvables in the To Path
 *
 * Registered using `transitionService.onStart({}, eagerResolvePath, { priority: 1000 });`
 *
 * When a Transition starts, this hook resolves all the EAGER Resolvables, which the transition then waits for.
 *
 * See [[StateDeclaration.resolve]]
 */
var eagerResolvePath = function (trans) {
    return new _resolve_resolveContext__WEBPACK_IMPORTED_MODULE_1__.ResolveContext(trans.treeChanges().to).resolvePath('EAGER', trans).then(_common_common__WEBPACK_IMPORTED_MODULE_0__.noop);
};
var registerEagerResolvePath = function (transitionService) {
    return transitionService.onStart({}, eagerResolvePath, { priority: RESOLVE_HOOK_PRIORITY });
};
/**
 * A [[TransitionHookFn]] which resolves all LAZY Resolvables for the state (and all its ancestors) in the To Path
 *
 * Registered using `transitionService.onEnter({ entering: () => true }, lazyResolveState, { priority: 1000 });`
 *
 * When a State is being entered, this hook resolves all the Resolvables for this state, which the transition then waits for.
 *
 * See [[StateDeclaration.resolve]]
 */
var lazyResolveState = function (trans, state) {
    return new _resolve_resolveContext__WEBPACK_IMPORTED_MODULE_1__.ResolveContext(trans.treeChanges().to).subContext(state.$$state()).resolvePath('LAZY', trans).then(_common_common__WEBPACK_IMPORTED_MODULE_0__.noop);
};
var registerLazyResolveState = function (transitionService) {
    return transitionService.onEnter({ entering: (0,_common_hof__WEBPACK_IMPORTED_MODULE_2__.val)(true) }, lazyResolveState, { priority: RESOLVE_HOOK_PRIORITY });
};
/**
 * A [[TransitionHookFn]] which resolves any dynamically added (LAZY or EAGER) Resolvables.
 *
 * Registered using `transitionService.onFinish({}, eagerResolvePath, { priority: 1000 });`
 *
 * After all entering states have been entered, this hook resolves any remaining Resolvables.
 * These are typically dynamic resolves which were added by some Transition Hook using [[Transition.addResolvable]].
 *
 * See [[StateDeclaration.resolve]]
 */
var resolveRemaining = function (trans) {
    return new _resolve_resolveContext__WEBPACK_IMPORTED_MODULE_1__.ResolveContext(trans.treeChanges().to).resolvePath('LAZY', trans).then(_common_common__WEBPACK_IMPORTED_MODULE_0__.noop);
};
var registerResolveRemaining = function (transitionService) {
    return transitionService.onFinish({}, resolveRemaining, { priority: RESOLVE_HOOK_PRIORITY });
};
//# sourceMappingURL=resolve.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/hooks/updateGlobals.js":
/*!*******************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/hooks/updateGlobals.js ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerUpdateGlobalState: () => (/* binding */ registerUpdateGlobalState)
/* harmony export */ });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/common.js");

/**
 * A [[TransitionHookFn]] which updates global UI-Router state
 *
 * Registered using `transitionService.onBefore({}, updateGlobalState);`
 *
 * Before a [[Transition]] starts, updates the global value of "the current transition" ([[Globals.transition]]).
 * After a successful [[Transition]], updates the global values of "the current state"
 * ([[Globals.current]] and [[Globals.$current]]) and "the current param values" ([[Globals.params]]).
 *
 * See also the deprecated properties:
 * [[StateService.transition]], [[StateService.current]], [[StateService.params]]
 */
var updateGlobalState = function (trans) {
    var globals = trans.router.globals;
    var transitionSuccessful = function () {
        globals.successfulTransitions.enqueue(trans);
        globals.$current = trans.$to();
        globals.current = globals.$current.self;
        (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.copy)(trans.params(), globals.params);
    };
    var clearCurrentTransition = function () {
        // Do not clear globals.transition if a different transition has started in the meantime
        if (globals.transition === trans)
            globals.transition = null;
    };
    trans.onSuccess({}, transitionSuccessful, { priority: 10000 });
    trans.promise.then(clearCurrentTransition, clearCurrentTransition);
};
var registerUpdateGlobalState = function (transitionService) {
    return transitionService.onCreate({}, updateGlobalState);
};
//# sourceMappingURL=updateGlobals.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/hooks/url.js":
/*!*********************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/hooks/url.js ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerUpdateUrl: () => (/* binding */ registerUpdateUrl)
/* harmony export */ });
/**
 * A [[TransitionHookFn]] which updates the URL after a successful transition
 *
 * Registered using `transitionService.onSuccess({}, updateUrl);`
 */
var updateUrl = function (transition) {
    var options = transition.options();
    var $state = transition.router.stateService;
    var $urlRouter = transition.router.urlRouter;
    // Dont update the url in these situations:
    // The transition was triggered by a URL sync (options.source === 'url')
    // The user doesn't want the url to update (options.location === false)
    // The destination state, and all parents have no navigable url
    if (options.source !== 'url' && options.location && $state.$current.navigable) {
        var urlOptions = { replace: options.location === 'replace' };
        $urlRouter.push($state.$current.navigable.url, $state.params, urlOptions);
    }
    $urlRouter.update(true);
};
var registerUpdateUrl = function (transitionService) {
    return transitionService.onSuccess({}, updateUrl, { priority: 9999 });
};
//# sourceMappingURL=url.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/hooks/views.js":
/*!***********************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/hooks/views.js ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerActivateViews: () => (/* binding */ registerActivateViews),
/* harmony export */   registerLoadEnteringViews: () => (/* binding */ registerLoadEnteringViews)
/* harmony export */ });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_coreservices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/coreservices */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/coreservices.js");


/**
 * A [[TransitionHookFn]] which waits for the views to load
 *
 * Registered using `transitionService.onStart({}, loadEnteringViews);`
 *
 * Allows the views to do async work in [[ViewConfig.load]] before the transition continues.
 * In angular 1, this includes loading the templates.
 */
var loadEnteringViews = function (transition) {
    var $q = _common_coreservices__WEBPACK_IMPORTED_MODULE_1__.services.$q;
    var enteringViews = transition.views('entering');
    if (!enteringViews.length)
        return;
    return $q.all(enteringViews.map(function (view) { return $q.when(view.load()); })).then(_common_common__WEBPACK_IMPORTED_MODULE_0__.noop);
};
var registerLoadEnteringViews = function (transitionService) {
    return transitionService.onFinish({}, loadEnteringViews);
};
/**
 * A [[TransitionHookFn]] which activates the new views when a transition is successful.
 *
 * Registered using `transitionService.onSuccess({}, activateViews);`
 *
 * After a transition is complete, this hook deactivates the old views from the previous state,
 * and activates the new views from the destination state.
 *
 * See [[ViewService]]
 */
var activateViews = function (transition) {
    var enteringViews = transition.views('entering');
    var exitingViews = transition.views('exiting');
    if (!enteringViews.length && !exitingViews.length)
        return;
    var $view = transition.router.viewService;
    exitingViews.forEach(function (vc) { return $view.deactivateViewConfig(vc); });
    enteringViews.forEach(function (vc) { return $view.activateViewConfig(vc); });
    $view.sync();
};
var registerActivateViews = function (transitionService) {
    return transitionService.onSuccess({}, activateViews);
};
//# sourceMappingURL=views.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/index.js":
/*!*****************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/index.js ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Category: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.Category),
/* harmony export */   Glob: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.Glob),
/* harmony export */   HookBuilder: () => (/* reexport safe */ _transition_index__WEBPACK_IMPORTED_MODULE_5__.HookBuilder),
/* harmony export */   NATIVE_INJECTOR_TOKEN: () => (/* reexport safe */ _resolve_index__WEBPACK_IMPORTED_MODULE_3__.NATIVE_INJECTOR_TOKEN),
/* harmony export */   PathNode: () => (/* reexport safe */ _path_index__WEBPACK_IMPORTED_MODULE_2__.PathNode),
/* harmony export */   PathUtils: () => (/* reexport safe */ _path_index__WEBPACK_IMPORTED_MODULE_2__.PathUtils),
/* harmony export */   Queue: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.Queue),
/* harmony export */   RegisteredHook: () => (/* reexport safe */ _transition_index__WEBPACK_IMPORTED_MODULE_5__.RegisteredHook),
/* harmony export */   RejectType: () => (/* reexport safe */ _transition_index__WEBPACK_IMPORTED_MODULE_5__.RejectType),
/* harmony export */   Rejection: () => (/* reexport safe */ _transition_index__WEBPACK_IMPORTED_MODULE_5__.Rejection),
/* harmony export */   Resolvable: () => (/* reexport safe */ _resolve_index__WEBPACK_IMPORTED_MODULE_3__.Resolvable),
/* harmony export */   ResolveContext: () => (/* reexport safe */ _resolve_index__WEBPACK_IMPORTED_MODULE_3__.ResolveContext),
/* harmony export */   Trace: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.Trace),
/* harmony export */   Transition: () => (/* reexport safe */ _transition_index__WEBPACK_IMPORTED_MODULE_5__.Transition),
/* harmony export */   TransitionEventType: () => (/* reexport safe */ _transition_index__WEBPACK_IMPORTED_MODULE_5__.TransitionEventType),
/* harmony export */   TransitionHook: () => (/* reexport safe */ _transition_index__WEBPACK_IMPORTED_MODULE_5__.TransitionHook),
/* harmony export */   TransitionHookPhase: () => (/* reexport safe */ _transition_index__WEBPACK_IMPORTED_MODULE_5__.TransitionHookPhase),
/* harmony export */   TransitionHookScope: () => (/* reexport safe */ _transition_index__WEBPACK_IMPORTED_MODULE_5__.TransitionHookScope),
/* harmony export */   TransitionService: () => (/* reexport safe */ _transition_index__WEBPACK_IMPORTED_MODULE_5__.TransitionService),
/* harmony export */   UIRouter: () => (/* reexport safe */ _router__WEBPACK_IMPORTED_MODULE_9__.UIRouter),
/* harmony export */   UIRouterGlobals: () => (/* reexport safe */ _globals__WEBPACK_IMPORTED_MODULE_8__.UIRouterGlobals),
/* harmony export */   UIRouterPluginBase: () => (/* reexport safe */ _interface__WEBPACK_IMPORTED_MODULE_11__.UIRouterPluginBase),
/* harmony export */   _extend: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__._extend),
/* harmony export */   _inArray: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__._inArray),
/* harmony export */   _pushTo: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__._pushTo),
/* harmony export */   _removeFrom: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__._removeFrom),
/* harmony export */   all: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.all),
/* harmony export */   allTrueR: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.allTrueR),
/* harmony export */   ancestors: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.ancestors),
/* harmony export */   and: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.and),
/* harmony export */   any: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.any),
/* harmony export */   anyTrueR: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.anyTrueR),
/* harmony export */   applyPairs: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.applyPairs),
/* harmony export */   arrayTuples: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.arrayTuples),
/* harmony export */   assertFn: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.assertFn),
/* harmony export */   assertMap: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.assertMap),
/* harmony export */   assertPredicate: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.assertPredicate),
/* harmony export */   beforeAfterSubstr: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.beforeAfterSubstr),
/* harmony export */   compose: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.compose),
/* harmony export */   copy: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.copy),
/* harmony export */   createProxyFunctions: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.createProxyFunctions),
/* harmony export */   curry: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.curry),
/* harmony export */   defaultResolvePolicy: () => (/* reexport safe */ _resolve_index__WEBPACK_IMPORTED_MODULE_3__.defaultResolvePolicy),
/* harmony export */   defaultTransOpts: () => (/* reexport safe */ _transition_index__WEBPACK_IMPORTED_MODULE_5__.defaultTransOpts),
/* harmony export */   defaults: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.defaults),
/* harmony export */   deregAll: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.deregAll),
/* harmony export */   eq: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.eq),
/* harmony export */   equals: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.equals),
/* harmony export */   extend: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.extend),
/* harmony export */   filter: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.filter),
/* harmony export */   find: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.find),
/* harmony export */   flatten: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.flatten),
/* harmony export */   flattenR: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.flattenR),
/* harmony export */   fnToString: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.fnToString),
/* harmony export */   forEach: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.forEach),
/* harmony export */   fromJson: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.fromJson),
/* harmony export */   functionToString: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.functionToString),
/* harmony export */   hostRegex: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.hostRegex),
/* harmony export */   identity: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.identity),
/* harmony export */   inArray: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.inArray),
/* harmony export */   inherit: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.inherit),
/* harmony export */   invoke: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.invoke),
/* harmony export */   is: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.is),
/* harmony export */   isArray: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.isArray),
/* harmony export */   isDate: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.isDate),
/* harmony export */   isDefined: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.isDefined),
/* harmony export */   isFunction: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.isFunction),
/* harmony export */   isInjectable: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.isInjectable),
/* harmony export */   isNull: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.isNull),
/* harmony export */   isNullOrUndefined: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndefined),
/* harmony export */   isNumber: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.isNumber),
/* harmony export */   isObject: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.isObject),
/* harmony export */   isPromise: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.isPromise),
/* harmony export */   isRegExp: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.isRegExp),
/* harmony export */   isString: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.isString),
/* harmony export */   isUndefined: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.isUndefined),
/* harmony export */   joinNeighborsR: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.joinNeighborsR),
/* harmony export */   kebobString: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.kebobString),
/* harmony export */   makeEvent: () => (/* reexport safe */ _transition_index__WEBPACK_IMPORTED_MODULE_5__.makeEvent),
/* harmony export */   makeStub: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.makeStub),
/* harmony export */   map: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.map),
/* harmony export */   mapObj: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.mapObj),
/* harmony export */   matchState: () => (/* reexport safe */ _transition_index__WEBPACK_IMPORTED_MODULE_5__.matchState),
/* harmony export */   maxLength: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.maxLength),
/* harmony export */   mergeR: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.mergeR),
/* harmony export */   noop: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.noop),
/* harmony export */   not: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.not),
/* harmony export */   omit: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.omit),
/* harmony export */   or: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.or),
/* harmony export */   padString: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.padString),
/* harmony export */   pairs: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.pairs),
/* harmony export */   parse: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.parse),
/* harmony export */   pattern: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.pattern),
/* harmony export */   pick: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.pick),
/* harmony export */   pipe: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.pipe),
/* harmony export */   pluck: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.pluck),
/* harmony export */   prop: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.prop),
/* harmony export */   propEq: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.propEq),
/* harmony export */   pushR: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.pushR),
/* harmony export */   pushTo: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.pushTo),
/* harmony export */   removeFrom: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.removeFrom),
/* harmony export */   resolvePolicies: () => (/* reexport safe */ _resolve_index__WEBPACK_IMPORTED_MODULE_3__.resolvePolicies),
/* harmony export */   root: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.root),
/* harmony export */   services: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.services),
/* harmony export */   silenceUncaughtInPromise: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.silenceUncaughtInPromise),
/* harmony export */   silentRejection: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.silentRejection),
/* harmony export */   splitEqual: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.splitEqual),
/* harmony export */   splitHash: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.splitHash),
/* harmony export */   splitOnDelim: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.splitOnDelim),
/* harmony export */   splitQuery: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.splitQuery),
/* harmony export */   stringify: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.stringify),
/* harmony export */   stripLastPathElement: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.stripLastPathElement),
/* harmony export */   tail: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.tail),
/* harmony export */   toJson: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.toJson),
/* harmony export */   trace: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.trace),
/* harmony export */   trimHashVal: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.trimHashVal),
/* harmony export */   uniqR: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.uniqR),
/* harmony export */   unnest: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.unnest),
/* harmony export */   unnestR: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.unnestR),
/* harmony export */   val: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.val),
/* harmony export */   values: () => (/* reexport safe */ _common_index__WEBPACK_IMPORTED_MODULE_0__.values)
/* harmony export */ });
/* harmony import */ var _common_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/index */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/index.js");
/* harmony import */ var _params_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./params/index */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/params/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _params_index__WEBPACK_IMPORTED_MODULE_1__) if(["default","Category","Glob","Queue","Trace","_extend","_inArray","_pushTo","_removeFrom","all","allTrueR","ancestors","and","any","anyTrueR","applyPairs","arrayTuples","assertFn","assertMap","assertPredicate","beforeAfterSubstr","compose","copy","createProxyFunctions","curry","defaults","deregAll","eq","equals","extend","filter","find","flatten","flattenR","fnToString","forEach","fromJson","functionToString","hostRegex","identity","inArray","inherit","invoke","is","isArray","isDate","isDefined","isFunction","isInjectable","isNull","isNullOrUndefined","isNumber","isObject","isPromise","isRegExp","isString","isUndefined","joinNeighborsR","kebobString","makeStub","map","mapObj","maxLength","mergeR","noop","not","omit","or","padString","pairs","parse","pattern","pick","pipe","pluck","prop","propEq","pushR","pushTo","removeFrom","root","services","silenceUncaughtInPromise","silentRejection","splitEqual","splitHash","splitOnDelim","splitQuery","stringify","stripLastPathElement","tail","toJson","trace","trimHashVal","uniqR","unnest","unnestR","val","values"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _params_index__WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _path_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./path/index */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/path/index.js");
/* harmony import */ var _resolve_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolve/index */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/resolve/index.js");
/* harmony import */ var _state_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state/index */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/state/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _state_index__WEBPACK_IMPORTED_MODULE_4__) if(["default","Category","Glob","Queue","Trace","_extend","_inArray","_pushTo","_removeFrom","all","allTrueR","ancestors","and","any","anyTrueR","applyPairs","arrayTuples","assertFn","assertMap","assertPredicate","beforeAfterSubstr","compose","copy","createProxyFunctions","curry","defaults","deregAll","eq","equals","extend","filter","find","flatten","flattenR","fnToString","forEach","fromJson","functionToString","hostRegex","identity","inArray","inherit","invoke","is","isArray","isDate","isDefined","isFunction","isInjectable","isNull","isNullOrUndefined","isNumber","isObject","isPromise","isRegExp","isString","isUndefined","joinNeighborsR","kebobString","makeStub","map","mapObj","maxLength","mergeR","noop","not","omit","or","padString","pairs","parse","pattern","pick","pipe","pluck","prop","propEq","pushR","pushTo","removeFrom","root","services","silenceUncaughtInPromise","silentRejection","splitEqual","splitHash","splitOnDelim","splitQuery","stringify","stripLastPathElement","tail","toJson","trace","trimHashVal","uniqR","unnest","unnestR","val","values","DefType","Param","ParamType","ParamTypes","StateParams","PathNode","PathUtils","NATIVE_INJECTOR_TOKEN","Resolvable","ResolveContext","defaultResolvePolicy","resolvePolicies"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _state_index__WEBPACK_IMPORTED_MODULE_4__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _transition_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transition/index */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/transition/index.js");
/* harmony import */ var _url_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./url/index */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/url/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _url_index__WEBPACK_IMPORTED_MODULE_6__) if(["default","Category","Glob","Queue","Trace","_extend","_inArray","_pushTo","_removeFrom","all","allTrueR","ancestors","and","any","anyTrueR","applyPairs","arrayTuples","assertFn","assertMap","assertPredicate","beforeAfterSubstr","compose","copy","createProxyFunctions","curry","defaults","deregAll","eq","equals","extend","filter","find","flatten","flattenR","fnToString","forEach","fromJson","functionToString","hostRegex","identity","inArray","inherit","invoke","is","isArray","isDate","isDefined","isFunction","isInjectable","isNull","isNullOrUndefined","isNumber","isObject","isPromise","isRegExp","isString","isUndefined","joinNeighborsR","kebobString","makeStub","map","mapObj","maxLength","mergeR","noop","not","omit","or","padString","pairs","parse","pattern","pick","pipe","pluck","prop","propEq","pushR","pushTo","removeFrom","root","services","silenceUncaughtInPromise","silentRejection","splitEqual","splitHash","splitOnDelim","splitQuery","stringify","stripLastPathElement","tail","toJson","trace","trimHashVal","uniqR","unnest","unnestR","val","values","DefType","Param","ParamType","ParamTypes","StateParams","PathNode","PathUtils","NATIVE_INJECTOR_TOKEN","Resolvable","ResolveContext","defaultResolvePolicy","resolvePolicies","StateBuilder","StateMatcher","StateObject","StateQueueManager","StateRegistry","StateService","TargetState","resolvablesBuilder","HookBuilder","RegisteredHook","RejectType","Rejection","Transition","TransitionEventType","TransitionHook","TransitionHookPhase","TransitionHookScope","TransitionService","defaultTransOpts","makeEvent","matchState"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _url_index__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _view_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/index */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/view/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _view_index__WEBPACK_IMPORTED_MODULE_7__) if(["default","Category","Glob","Queue","Trace","_extend","_inArray","_pushTo","_removeFrom","all","allTrueR","ancestors","and","any","anyTrueR","applyPairs","arrayTuples","assertFn","assertMap","assertPredicate","beforeAfterSubstr","compose","copy","createProxyFunctions","curry","defaults","deregAll","eq","equals","extend","filter","find","flatten","flattenR","fnToString","forEach","fromJson","functionToString","hostRegex","identity","inArray","inherit","invoke","is","isArray","isDate","isDefined","isFunction","isInjectable","isNull","isNullOrUndefined","isNumber","isObject","isPromise","isRegExp","isString","isUndefined","joinNeighborsR","kebobString","makeStub","map","mapObj","maxLength","mergeR","noop","not","omit","or","padString","pairs","parse","pattern","pick","pipe","pluck","prop","propEq","pushR","pushTo","removeFrom","root","services","silenceUncaughtInPromise","silentRejection","splitEqual","splitHash","splitOnDelim","splitQuery","stringify","stripLastPathElement","tail","toJson","trace","trimHashVal","uniqR","unnest","unnestR","val","values","DefType","Param","ParamType","ParamTypes","StateParams","PathNode","PathUtils","NATIVE_INJECTOR_TOKEN","Resolvable","ResolveContext","defaultResolvePolicy","resolvePolicies","StateBuilder","StateMatcher","StateObject","StateQueueManager","StateRegistry","StateService","TargetState","resolvablesBuilder","HookBuilder","RegisteredHook","RejectType","Rejection","Transition","TransitionEventType","TransitionHook","TransitionHookPhase","TransitionHookScope","TransitionService","defaultTransOpts","makeEvent","matchState","BaseUrlRule","ParamFactory","UrlConfig","UrlMatcher","UrlMatcherFactory","UrlRouter","UrlRuleFactory","UrlRules","UrlService"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _view_index__WEBPACK_IMPORTED_MODULE_7__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./globals */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/globals.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./router */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/router.js");
/* harmony import */ var _vanilla__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vanilla */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/vanilla.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _vanilla__WEBPACK_IMPORTED_MODULE_10__) if(["default","Category","Glob","Queue","Trace","_extend","_inArray","_pushTo","_removeFrom","all","allTrueR","ancestors","and","any","anyTrueR","applyPairs","arrayTuples","assertFn","assertMap","assertPredicate","beforeAfterSubstr","compose","copy","createProxyFunctions","curry","defaults","deregAll","eq","equals","extend","filter","find","flatten","flattenR","fnToString","forEach","fromJson","functionToString","hostRegex","identity","inArray","inherit","invoke","is","isArray","isDate","isDefined","isFunction","isInjectable","isNull","isNullOrUndefined","isNumber","isObject","isPromise","isRegExp","isString","isUndefined","joinNeighborsR","kebobString","makeStub","map","mapObj","maxLength","mergeR","noop","not","omit","or","padString","pairs","parse","pattern","pick","pipe","pluck","prop","propEq","pushR","pushTo","removeFrom","root","services","silenceUncaughtInPromise","silentRejection","splitEqual","splitHash","splitOnDelim","splitQuery","stringify","stripLastPathElement","tail","toJson","trace","trimHashVal","uniqR","unnest","unnestR","val","values","DefType","Param","ParamType","ParamTypes","StateParams","PathNode","PathUtils","NATIVE_INJECTOR_TOKEN","Resolvable","ResolveContext","defaultResolvePolicy","resolvePolicies","StateBuilder","StateMatcher","StateObject","StateQueueManager","StateRegistry","StateService","TargetState","resolvablesBuilder","HookBuilder","RegisteredHook","RejectType","Rejection","Transition","TransitionEventType","TransitionHook","TransitionHookPhase","TransitionHookScope","TransitionService","defaultTransOpts","makeEvent","matchState","BaseUrlRule","ParamFactory","UrlConfig","UrlMatcher","UrlMatcherFactory","UrlRouter","UrlRuleFactory","UrlRules","UrlService","ViewService","UIRouterGlobals","UIRouter"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _vanilla__WEBPACK_IMPORTED_MODULE_10__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./interface */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/interface.js");












//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/interface.js":
/*!*********************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/interface.js ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UIRouterPluginBase: () => (/* binding */ UIRouterPluginBase)
/* harmony export */ });
var UIRouterPluginBase = /** @class */ (function () {
    function UIRouterPluginBase() {
    }
    UIRouterPluginBase.prototype.dispose = function (router) { };
    return UIRouterPluginBase;
}());

//# sourceMappingURL=interface.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/params/index.js":
/*!************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/params/index.js ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefType: () => (/* reexport safe */ _param__WEBPACK_IMPORTED_MODULE_1__.DefType),
/* harmony export */   Param: () => (/* reexport safe */ _param__WEBPACK_IMPORTED_MODULE_1__.Param),
/* harmony export */   ParamType: () => (/* reexport safe */ _paramType__WEBPACK_IMPORTED_MODULE_4__.ParamType),
/* harmony export */   ParamTypes: () => (/* reexport safe */ _paramTypes__WEBPACK_IMPORTED_MODULE_2__.ParamTypes),
/* harmony export */   StateParams: () => (/* reexport safe */ _stateParams__WEBPACK_IMPORTED_MODULE_3__.StateParams)
/* harmony export */ });
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/params/interface.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_interface__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _interface__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _interface__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _param__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./param */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/params/param.js");
/* harmony import */ var _paramTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paramTypes */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/params/paramTypes.js");
/* harmony import */ var _stateParams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stateParams */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/params/stateParams.js");
/* harmony import */ var _paramType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paramType */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/params/paramType.js");
/**
 * This module contains code for State Parameters.
 *
 * See [[ParamDeclaration]]
 *
 * @packageDocumentation @preferred
 */





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/params/interface.js":
/*!****************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/params/interface.js ***!
  \****************************************************************************************************************************************************/
/***/ (() => {

//# sourceMappingURL=interface.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/params/param.js":
/*!************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/params/param.js ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefType: () => (/* binding */ DefType),
/* harmony export */   Param: () => (/* binding */ Param)
/* harmony export */ });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/hof.js");
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _common_coreservices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/coreservices */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/coreservices.js");
/* harmony import */ var _paramType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paramType */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/params/paramType.js");





var hasOwn = Object.prototype.hasOwnProperty;
var isShorthand = function (cfg) {
    return ['value', 'type', 'squash', 'array', 'dynamic'].filter(hasOwn.bind(cfg || {})).length === 0;
};
var DefType;
(function (DefType) {
    DefType[DefType["PATH"] = 0] = "PATH";
    DefType[DefType["SEARCH"] = 1] = "SEARCH";
    DefType[DefType["CONFIG"] = 2] = "CONFIG";
})(DefType || (DefType = {}));

function getParamDeclaration(paramName, location, state) {
    var noReloadOnSearch = (state.reloadOnSearch === false && location === DefType.SEARCH) || undefined;
    var dynamic = (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.find)([state.dynamic, noReloadOnSearch], _common_predicates__WEBPACK_IMPORTED_MODULE_2__.isDefined);
    var defaultConfig = (0,_common_predicates__WEBPACK_IMPORTED_MODULE_2__.isDefined)(dynamic) ? { dynamic: dynamic } : {};
    var paramConfig = unwrapShorthand(state && state.params && state.params[paramName]);
    return (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.extend)(defaultConfig, paramConfig);
}
function unwrapShorthand(cfg) {
    cfg = isShorthand(cfg) ? { value: cfg } : cfg;
    getStaticDefaultValue['__cacheable'] = true;
    function getStaticDefaultValue() {
        return cfg.value;
    }
    var $$fn = (0,_common_predicates__WEBPACK_IMPORTED_MODULE_2__.isInjectable)(cfg.value) ? cfg.value : getStaticDefaultValue;
    return (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.extend)(cfg, { $$fn: $$fn });
}
function getType(cfg, urlType, location, id, paramTypes) {
    if (cfg.type && urlType && urlType.name !== 'string')
        throw new Error("Param '" + id + "' has two type configurations.");
    if (cfg.type && urlType && urlType.name === 'string' && paramTypes.type(cfg.type))
        return paramTypes.type(cfg.type);
    if (urlType)
        return urlType;
    if (!cfg.type) {
        var type = location === DefType.CONFIG
            ? 'any'
            : location === DefType.PATH
                ? 'path'
                : location === DefType.SEARCH
                    ? 'query'
                    : 'string';
        return paramTypes.type(type);
    }
    return cfg.type instanceof _paramType__WEBPACK_IMPORTED_MODULE_4__.ParamType ? cfg.type : paramTypes.type(cfg.type);
}
/** returns false, true, or the squash value to indicate the "default parameter url squash policy". */
function getSquashPolicy(config, isOptional, defaultPolicy) {
    var squash = config.squash;
    if (!isOptional || squash === false)
        return false;
    if (!(0,_common_predicates__WEBPACK_IMPORTED_MODULE_2__.isDefined)(squash) || squash == null)
        return defaultPolicy;
    if (squash === true || (0,_common_predicates__WEBPACK_IMPORTED_MODULE_2__.isString)(squash))
        return squash;
    throw new Error("Invalid squash policy: '" + squash + "'. Valid policies: false, true, or arbitrary string");
}
function getReplace(config, arrayMode, isOptional, squash) {
    var defaultPolicy = [
        { from: '', to: isOptional || arrayMode ? undefined : '' },
        { from: null, to: isOptional || arrayMode ? undefined : '' },
    ];
    var replace = (0,_common_predicates__WEBPACK_IMPORTED_MODULE_2__.isArray)(config.replace) ? config.replace : [];
    if ((0,_common_predicates__WEBPACK_IMPORTED_MODULE_2__.isString)(squash))
        replace.push({ from: squash, to: undefined });
    var configuredKeys = (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.map)(replace, (0,_common_hof__WEBPACK_IMPORTED_MODULE_1__.prop)('from'));
    return (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.filter)(defaultPolicy, function (item) { return configuredKeys.indexOf(item.from) === -1; }).concat(replace);
}
var Param = /** @class */ (function () {
    function Param(id, type, location, urlConfig, state) {
        var config = getParamDeclaration(id, location, state);
        type = getType(config, type, location, id, urlConfig.paramTypes);
        var arrayMode = getArrayMode();
        type = arrayMode ? type.$asArray(arrayMode, location === DefType.SEARCH) : type;
        var isOptional = config.value !== undefined || location === DefType.SEARCH;
        var dynamic = (0,_common_predicates__WEBPACK_IMPORTED_MODULE_2__.isDefined)(config.dynamic) ? !!config.dynamic : !!type.dynamic;
        var raw = (0,_common_predicates__WEBPACK_IMPORTED_MODULE_2__.isDefined)(config.raw) ? !!config.raw : !!type.raw;
        var squash = getSquashPolicy(config, isOptional, urlConfig.defaultSquashPolicy());
        var replace = getReplace(config, arrayMode, isOptional, squash);
        var inherit = (0,_common_predicates__WEBPACK_IMPORTED_MODULE_2__.isDefined)(config.inherit) ? !!config.inherit : !!type.inherit;
        // array config: param name (param[]) overrides default settings.  explicit config overrides param name.
        function getArrayMode() {
            var arrayDefaults = { array: location === DefType.SEARCH ? 'auto' : false };
            var arrayParamNomenclature = id.match(/\[\]$/) ? { array: true } : {};
            return (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.extend)(arrayDefaults, arrayParamNomenclature, config).array;
        }
        (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.extend)(this, { id: id, type: type, location: location, isOptional: isOptional, dynamic: dynamic, raw: raw, squash: squash, replace: replace, inherit: inherit, array: arrayMode, config: config });
    }
    Param.values = function (params, values) {
        if (values === void 0) { values = {}; }
        var paramValues = {};
        for (var _i = 0, params_1 = params; _i < params_1.length; _i++) {
            var param = params_1[_i];
            paramValues[param.id] = param.value(values[param.id]);
        }
        return paramValues;
    };
    /**
     * Finds [[Param]] objects which have different param values
     *
     * Filters a list of [[Param]] objects to only those whose parameter values differ in two param value objects
     *
     * @param params: The list of Param objects to filter
     * @param values1: The first set of parameter values
     * @param values2: the second set of parameter values
     *
     * @returns any Param objects whose values were different between values1 and values2
     */
    Param.changed = function (params, values1, values2) {
        if (values1 === void 0) { values1 = {}; }
        if (values2 === void 0) { values2 = {}; }
        return params.filter(function (param) { return !param.type.equals(values1[param.id], values2[param.id]); });
    };
    /**
     * Checks if two param value objects are equal (for a set of [[Param]] objects)
     *
     * @param params The list of [[Param]] objects to check
     * @param values1 The first set of param values
     * @param values2 The second set of param values
     *
     * @returns true if the param values in values1 and values2 are equal
     */
    Param.equals = function (params, values1, values2) {
        if (values1 === void 0) { values1 = {}; }
        if (values2 === void 0) { values2 = {}; }
        return Param.changed(params, values1, values2).length === 0;
    };
    /** Returns true if a the parameter values are valid, according to the Param definitions */
    Param.validates = function (params, values) {
        if (values === void 0) { values = {}; }
        return params.map(function (param) { return param.validates(values[param.id]); }).reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__.allTrueR, true);
    };
    Param.prototype.isDefaultValue = function (value) {
        return this.isOptional && this.type.equals(this.value(), value);
    };
    /**
     * [Internal] Gets the decoded representation of a value if the value is defined, otherwise, returns the
     * default value, which may be the result of an injectable function.
     */
    Param.prototype.value = function (value) {
        var _this = this;
        /**
         * [Internal] Get the default value of a parameter, which may be an injectable function.
         */
        var getDefaultValue = function () {
            if (_this._defaultValueCache)
                return _this._defaultValueCache.defaultValue;
            if (!_common_coreservices__WEBPACK_IMPORTED_MODULE_3__.services.$injector)
                throw new Error('Injectable functions cannot be called at configuration time');
            var defaultValue = _common_coreservices__WEBPACK_IMPORTED_MODULE_3__.services.$injector.invoke(_this.config.$$fn);
            if (defaultValue !== null && defaultValue !== undefined && !_this.type.is(defaultValue))
                throw new Error("Default value (" + defaultValue + ") for parameter '" + _this.id + "' is not an instance of ParamType (" + _this.type.name + ")");
            if (_this.config.$$fn['__cacheable']) {
                _this._defaultValueCache = { defaultValue: defaultValue };
            }
            return defaultValue;
        };
        var replaceSpecialValues = function (val) {
            for (var _i = 0, _a = _this.replace; _i < _a.length; _i++) {
                var tuple = _a[_i];
                if (tuple.from === val)
                    return tuple.to;
            }
            return val;
        };
        value = replaceSpecialValues(value);
        return (0,_common_predicates__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(value) ? getDefaultValue() : this.type.$normalize(value);
    };
    Param.prototype.isSearch = function () {
        return this.location === DefType.SEARCH;
    };
    Param.prototype.validates = function (value) {
        // There was no parameter value, but the param is optional
        if (((0,_common_predicates__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(value) || value === null) && this.isOptional)
            return true;
        // The value was not of the correct ParamType, and could not be decoded to the correct ParamType
        var normalized = this.type.$normalize(value);
        if (!this.type.is(normalized))
            return false;
        // The value was of the correct type, but when encoded, did not match the ParamType's regexp
        var encoded = this.type.encode(normalized);
        return !((0,_common_predicates__WEBPACK_IMPORTED_MODULE_2__.isString)(encoded) && !this.type.pattern.exec(encoded));
    };
    Param.prototype.toString = function () {
        return "{Param:" + this.id + " " + this.type + " squash: '" + this.squash + "' optional: " + this.isOptional + "}";
    };
    return Param;
}());

//# sourceMappingURL=param.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/params/paramType.js":
/*!****************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/params/paramType.js ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParamType: () => (/* binding */ ParamType)
/* harmony export */ });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/predicates.js");


/**
 * An internal class which implements [[ParamTypeDefinition]].
 *
 * A [[ParamTypeDefinition]] is a plain javascript object used to register custom parameter types.
 * When a param type definition is registered, an instance of this class is created internally.
 *
 * This class has naive implementations for all the [[ParamTypeDefinition]] methods.
 *
 * Used by [[UrlMatcher]] when matching or formatting URLs, or comparing and validating parameter values.
 *
 * #### Example:
 * ```js
 * var paramTypeDef = {
 *   decode: function(val) { return parseInt(val, 10); },
 *   encode: function(val) { return val && val.toString(); },
 *   equals: function(a, b) { return this.is(a) && a === b; },
 *   is: function(val) { return angular.isNumber(val) && isFinite(val) && val % 1 === 0; },
 *   pattern: /\d+/
 * }
 *
 * var paramType = new ParamType(paramTypeDef);
 * ```
 */
var ParamType = /** @class */ (function () {
    /**
     * @param def  A configuration object which contains the custom type definition.  The object's
     *        properties will override the default methods and/or pattern in `ParamType`'s public interface.
     * @returns a new ParamType object
     */
    function ParamType(def) {
        /** @inheritdoc */
        this.pattern = /.*/;
        /** @inheritdoc */
        this.inherit = true;
        (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.extend)(this, def);
    }
    // consider these four methods to be "abstract methods" that should be overridden
    /** @inheritdoc */
    ParamType.prototype.is = function (val, key) {
        return true;
    };
    /** @inheritdoc */
    ParamType.prototype.encode = function (val, key) {
        return val;
    };
    /** @inheritdoc */
    ParamType.prototype.decode = function (val, key) {
        return val;
    };
    /** @inheritdoc */
    ParamType.prototype.equals = function (a, b) {
        // tslint:disable-next-line:triple-equals
        return a == b;
    };
    ParamType.prototype.$subPattern = function () {
        var sub = this.pattern.toString();
        return sub.substr(1, sub.length - 2);
    };
    ParamType.prototype.toString = function () {
        return "{ParamType:" + this.name + "}";
    };
    /** Given an encoded string, or a decoded object, returns a decoded object */
    ParamType.prototype.$normalize = function (val) {
        return this.is(val) ? val : this.decode(val);
    };
    /**
     * Wraps an existing custom ParamType as an array of ParamType, depending on 'mode'.
     * e.g.:
     * - urlmatcher pattern "/path?{queryParam[]:int}"
     * - url: "/path?queryParam=1&queryParam=2
     * - $stateParams.queryParam will be [1, 2]
     * if `mode` is "auto", then
     * - url: "/path?queryParam=1 will create $stateParams.queryParam: 1
     * - url: "/path?queryParam=1&queryParam=2 will create $stateParams.queryParam: [1, 2]
     */
    ParamType.prototype.$asArray = function (mode, isSearch) {
        if (!mode)
            return this;
        if (mode === 'auto' && !isSearch)
            throw new Error("'auto' array mode is for query parameters only");
        return new ArrayType(this, mode);
    };
    return ParamType;
}());

/** Wraps up a `ParamType` object to handle array values. */
function ArrayType(type, mode) {
    var _this = this;
    // Wrap non-array value as array
    function arrayWrap(val) {
        return (0,_common_predicates__WEBPACK_IMPORTED_MODULE_1__.isArray)(val) ? val : (0,_common_predicates__WEBPACK_IMPORTED_MODULE_1__.isDefined)(val) ? [val] : [];
    }
    // Unwrap array value for "auto" mode. Return undefined for empty array.
    function arrayUnwrap(val) {
        switch (val.length) {
            case 0:
                return undefined;
            case 1:
                return mode === 'auto' ? val[0] : val;
            default:
                return val;
        }
    }
    // Wraps type (.is/.encode/.decode) functions to operate on each value of an array
    function arrayHandler(callback, allTruthyMode) {
        return function handleArray(val) {
            if ((0,_common_predicates__WEBPACK_IMPORTED_MODULE_1__.isArray)(val) && val.length === 0)
                return val;
            var arr = arrayWrap(val);
            var result = (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.map)(arr, callback);
            return allTruthyMode === true ? (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.filter)(result, function (x) { return !x; }).length === 0 : arrayUnwrap(result);
        };
    }
    // Wraps type (.equals) functions to operate on each value of an array
    function arrayEqualsHandler(callback) {
        return function handleArray(val1, val2) {
            var left = arrayWrap(val1), right = arrayWrap(val2);
            if (left.length !== right.length)
                return false;
            for (var i = 0; i < left.length; i++) {
                if (!callback(left[i], right[i]))
                    return false;
            }
            return true;
        };
    }
    ['encode', 'decode', 'equals', '$normalize'].forEach(function (name) {
        var paramTypeFn = type[name].bind(type);
        var wrapperFn = name === 'equals' ? arrayEqualsHandler : arrayHandler;
        _this[name] = wrapperFn(paramTypeFn);
    });
    (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.extend)(this, {
        dynamic: type.dynamic,
        name: type.name,
        pattern: type.pattern,
        inherit: type.inherit,
        raw: type.raw,
        is: arrayHandler(type.is.bind(type), true),
        $arrayMode: mode,
    });
}
//# sourceMappingURL=paramType.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/params/paramTypes.js":
/*!*****************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/params/paramTypes.js ***!
  \*****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParamTypes: () => (/* binding */ ParamTypes)
/* harmony export */ });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/hof.js");
/* harmony import */ var _common_coreservices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/coreservices */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/coreservices.js");
/* harmony import */ var _paramType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paramType */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/params/paramType.js");





/**
 * A registry for parameter types.
 *
 * This registry manages the built-in (and custom) parameter types.
 *
 * The built-in parameter types are:
 *
 * - [[string]]
 * - [[path]]
 * - [[query]]
 * - [[hash]]
 * - [[int]]
 * - [[bool]]
 * - [[date]]
 * - [[json]]
 * - [[any]]
 *
 * To register custom parameter types, use [[UrlConfig.type]], i.e.,
 *
 * ```js
 * router.urlService.config.type(customType)
 * ```
 */
var ParamTypes = /** @class */ (function () {
    function ParamTypes() {
        this.enqueue = true;
        this.typeQueue = [];
        this.defaultTypes = (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.pick)(ParamTypes.prototype, [
            'hash',
            'string',
            'query',
            'path',
            'int',
            'bool',
            'date',
            'json',
            'any',
        ]);
        // Register default types. Store them in the prototype of this.types.
        var makeType = function (definition, name) { return new _paramType__WEBPACK_IMPORTED_MODULE_4__.ParamType((0,_common_common__WEBPACK_IMPORTED_MODULE_0__.extend)({ name: name }, definition)); };
        this.types = (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.inherit)((0,_common_common__WEBPACK_IMPORTED_MODULE_0__.map)(this.defaultTypes, makeType), {});
    }
    ParamTypes.prototype.dispose = function () {
        this.types = {};
    };
    /**
     * Registers a parameter type
     *
     * End users should call [[UrlMatcherFactory.type]], which delegates to this method.
     */
    ParamTypes.prototype.type = function (name, definition, definitionFn) {
        if (!(0,_common_predicates__WEBPACK_IMPORTED_MODULE_1__.isDefined)(definition))
            return this.types[name];
        if (this.types.hasOwnProperty(name))
            throw new Error("A type named '" + name + "' has already been defined.");
        this.types[name] = new _paramType__WEBPACK_IMPORTED_MODULE_4__.ParamType((0,_common_common__WEBPACK_IMPORTED_MODULE_0__.extend)({ name: name }, definition));
        if (definitionFn) {
            this.typeQueue.push({ name: name, def: definitionFn });
            if (!this.enqueue)
                this._flushTypeQueue();
        }
        return this;
    };
    ParamTypes.prototype._flushTypeQueue = function () {
        while (this.typeQueue.length) {
            var type = this.typeQueue.shift();
            if (type.pattern)
                throw new Error("You cannot override a type's .pattern at runtime.");
            (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.extend)(this.types[type.name], _common_coreservices__WEBPACK_IMPORTED_MODULE_3__.services.$injector.invoke(type.def));
        }
    };
    return ParamTypes;
}());

function initDefaultTypes() {
    var makeDefaultType = function (def) {
        var valToString = function (val) { return (val != null ? val.toString() : val); };
        var defaultTypeBase = {
            encode: valToString,
            decode: valToString,
            is: (0,_common_hof__WEBPACK_IMPORTED_MODULE_2__.is)(String),
            pattern: /.*/,
            // tslint:disable-next-line:triple-equals
            equals: function (a, b) { return a == b; },
        };
        return (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.extend)({}, defaultTypeBase, def);
    };
    // Default Parameter Type Definitions
    (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.extend)(ParamTypes.prototype, {
        string: makeDefaultType({}),
        path: makeDefaultType({
            pattern: /[^/]*/,
        }),
        query: makeDefaultType({}),
        hash: makeDefaultType({
            inherit: false,
        }),
        int: makeDefaultType({
            decode: function (val) { return parseInt(val, 10); },
            is: function (val) {
                return !(0,_common_predicates__WEBPACK_IMPORTED_MODULE_1__.isNullOrUndefined)(val) && this.decode(val.toString()) === val;
            },
            pattern: /-?\d+/,
        }),
        bool: makeDefaultType({
            encode: function (val) { return (val && 1) || 0; },
            decode: function (val) { return parseInt(val, 10) !== 0; },
            is: (0,_common_hof__WEBPACK_IMPORTED_MODULE_2__.is)(Boolean),
            pattern: /0|1/,
        }),
        date: makeDefaultType({
            encode: function (val) {
                return !this.is(val)
                    ? undefined
                    : [val.getFullYear(), ('0' + (val.getMonth() + 1)).slice(-2), ('0' + val.getDate()).slice(-2)].join('-');
            },
            decode: function (val) {
                if (this.is(val))
                    return val;
                var match = this.capture.exec(val);
                return match ? new Date(match[1], match[2] - 1, match[3]) : undefined;
            },
            is: function (val) { return val instanceof Date && !isNaN(val.valueOf()); },
            equals: function (l, r) {
                return ['getFullYear', 'getMonth', 'getDate'].reduce(function (acc, fn) { return acc && l[fn]() === r[fn](); }, true);
            },
            pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
            capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/,
        }),
        json: makeDefaultType({
            encode: _common_common__WEBPACK_IMPORTED_MODULE_0__.toJson,
            decode: _common_common__WEBPACK_IMPORTED_MODULE_0__.fromJson,
            is: (0,_common_hof__WEBPACK_IMPORTED_MODULE_2__.is)(Object),
            equals: _common_common__WEBPACK_IMPORTED_MODULE_0__.equals,
            pattern: /[^/]*/,
        }),
        // does not encode/decode
        any: makeDefaultType({
            encode: _common_common__WEBPACK_IMPORTED_MODULE_0__.identity,
            decode: _common_common__WEBPACK_IMPORTED_MODULE_0__.identity,
            is: function () { return true; },
            equals: _common_common__WEBPACK_IMPORTED_MODULE_0__.equals,
        }),
    });
}
initDefaultTypes();
//# sourceMappingURL=paramTypes.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/params/stateParams.js":
/*!******************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/params/stateParams.js ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StateParams: () => (/* binding */ StateParams)
/* harmony export */ });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/common.js");

var StateParams = /** @class */ (function () {
    function StateParams(params) {
        if (params === void 0) { params = {}; }
        (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.extend)(this, params);
    }
    /**
     * Merges a set of parameters with all parameters inherited between the common parents of the
     * current state and a given destination state.
     *
     * @param {Object} newParams The set of parameters which will be composited with inherited params.
     * @param {Object} $current Internal definition of object representing the current state.
     * @param {Object} $to Internal definition of object representing state to transition to.
     */
    StateParams.prototype.$inherit = function (newParams, $current, $to) {
        var parents = (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.ancestors)($current, $to), inherited = {}, inheritList = [];
        for (var i in parents) {
            if (!parents[i] || !parents[i].params)
                continue;
            var parentParams = parents[i].params;
            var parentParamsKeys = Object.keys(parentParams);
            if (!parentParamsKeys.length)
                continue;
            for (var j in parentParamsKeys) {
                if (parentParams[parentParamsKeys[j]].inherit == false || inheritList.indexOf(parentParamsKeys[j]) >= 0)
                    continue;
                inheritList.push(parentParamsKeys[j]);
                inherited[parentParamsKeys[j]] = this[parentParamsKeys[j]];
            }
        }
        return (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.extend)({}, inherited, newParams);
    };
    return StateParams;
}());

//# sourceMappingURL=stateParams.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/path/index.js":
/*!**********************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/path/index.js ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PathNode: () => (/* reexport safe */ _pathNode__WEBPACK_IMPORTED_MODULE_0__.PathNode),
/* harmony export */   PathUtils: () => (/* reexport safe */ _pathUtils__WEBPACK_IMPORTED_MODULE_1__.PathUtils)
/* harmony export */ });
/* harmony import */ var _pathNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pathNode */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/path/pathNode.js");
/* harmony import */ var _pathUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pathUtils */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/path/pathUtils.js");


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/path/pathNode.js":
/*!*************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/path/pathNode.js ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PathNode: () => (/* binding */ PathNode)
/* harmony export */ });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/hof.js");
/* harmony import */ var _params_param__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../params/param */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/params/param.js");



/**
 * A node in a [[TreeChanges]] path
 *
 * For a [[TreeChanges]] path, this class holds the stateful information for a single node in the path.
 * Each PathNode corresponds to a state being entered, exited, or retained.
 * The stateful information includes parameter values and resolve data.
 */
var PathNode = /** @class */ (function () {
    function PathNode(stateOrNode) {
        if (stateOrNode instanceof PathNode) {
            var node = stateOrNode;
            this.state = node.state;
            this.paramSchema = node.paramSchema.slice();
            this.paramValues = (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.extend)({}, node.paramValues);
            this.resolvables = node.resolvables.slice();
            this.views = node.views && node.views.slice();
        }
        else {
            var state = stateOrNode;
            this.state = state;
            this.paramSchema = state.parameters({ inherit: false });
            this.paramValues = {};
            this.resolvables = state.resolvables.map(function (res) { return res.clone(); });
        }
    }
    PathNode.prototype.clone = function () {
        return new PathNode(this);
    };
    /** Sets [[paramValues]] for the node, from the values of an object hash */
    PathNode.prototype.applyRawParams = function (params) {
        var getParamVal = function (paramDef) { return [paramDef.id, paramDef.value(params[paramDef.id])]; };
        this.paramValues = this.paramSchema.reduce(function (memo, pDef) { return (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.applyPairs)(memo, getParamVal(pDef)); }, {});
        return this;
    };
    /** Gets a specific [[Param]] metadata that belongs to the node */
    PathNode.prototype.parameter = function (name) {
        return (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.find)(this.paramSchema, (0,_common_hof__WEBPACK_IMPORTED_MODULE_1__.propEq)('id', name));
    };
    /**
     * @returns true if the state and parameter values for another PathNode are
     * equal to the state and param values for this PathNode
     */
    PathNode.prototype.equals = function (node, paramsFn) {
        var diff = this.diff(node, paramsFn);
        return diff && diff.length === 0;
    };
    /**
     * Finds Params with different parameter values on another PathNode.
     *
     * Given another node (of the same state), finds the parameter values which differ.
     * Returns the [[Param]] (schema objects) whose parameter values differ.
     *
     * Given another node for a different state, returns `false`
     *
     * @param node The node to compare to
     * @param paramsFn A function that returns which parameters should be compared.
     * @returns The [[Param]]s which differ, or null if the two nodes are for different states
     */
    PathNode.prototype.diff = function (node, paramsFn) {
        if (this.state !== node.state)
            return false;
        var params = paramsFn ? paramsFn(this) : this.paramSchema;
        return _params_param__WEBPACK_IMPORTED_MODULE_2__.Param.changed(params, this.paramValues, node.paramValues);
    };
    /**
     * Returns a clone of the PathNode
     * @deprecated use instance method `node.clone()`
     */
    PathNode.clone = function (node) { return node.clone(); };
    return PathNode;
}());

//# sourceMappingURL=pathNode.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/path/pathUtils.js":
/*!**************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/path/pathUtils.js ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PathUtils: () => (/* binding */ PathUtils)
/* harmony export */ });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/hof.js");
/* harmony import */ var _state_targetState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/targetState */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/state/targetState.js");
/* harmony import */ var _pathNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pathNode */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/path/pathNode.js");




/**
 * This class contains functions which convert TargetStates, Nodes and paths from one type to another.
 */
var PathUtils = /** @class */ (function () {
    function PathUtils() {
    }
    /** Given a PathNode[], create an TargetState */
    PathUtils.makeTargetState = function (registry, path) {
        var state = (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.tail)(path).state;
        return new _state_targetState__WEBPACK_IMPORTED_MODULE_2__.TargetState(registry, state, path.map((0,_common_hof__WEBPACK_IMPORTED_MODULE_1__.prop)('paramValues')).reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__.mergeR, {}), {});
    };
    PathUtils.buildPath = function (targetState) {
        var toParams = targetState.params();
        return targetState.$state().path.map(function (state) { return new _pathNode__WEBPACK_IMPORTED_MODULE_3__.PathNode(state).applyRawParams(toParams); });
    };
    /** Given a fromPath: PathNode[] and a TargetState, builds a toPath: PathNode[] */
    PathUtils.buildToPath = function (fromPath, targetState) {
        var toPath = PathUtils.buildPath(targetState);
        if (targetState.options().inherit) {
            return PathUtils.inheritParams(fromPath, toPath, Object.keys(targetState.params()));
        }
        return toPath;
    };
    /**
     * Creates ViewConfig objects and adds to nodes.
     *
     * On each [[PathNode]], creates ViewConfig objects from the views: property of the node's state
     */
    PathUtils.applyViewConfigs = function ($view, path, states) {
        // Only apply the viewConfigs to the nodes for the given states
        path
            .filter(function (node) { return (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.inArray)(states, node.state); })
            .forEach(function (node) {
            var viewDecls = (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.values)(node.state.views || {});
            var subPath = PathUtils.subPath(path, function (n) { return n === node; });
            var viewConfigs = viewDecls.map(function (view) { return $view.createViewConfig(subPath, view); });
            node.views = viewConfigs.reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__.unnestR, []);
        });
    };
    /**
     * Given a fromPath and a toPath, returns a new to path which inherits parameters from the fromPath
     *
     * For a parameter in a node to be inherited from the from path:
     * - The toPath's node must have a matching node in the fromPath (by state).
     * - The parameter name must not be found in the toKeys parameter array.
     *
     * Note: the keys provided in toKeys are intended to be those param keys explicitly specified by some
     * caller, for instance, $state.transitionTo(..., toParams).  If a key was found in toParams,
     * it is not inherited from the fromPath.
     */
    PathUtils.inheritParams = function (fromPath, toPath, toKeys) {
        if (toKeys === void 0) { toKeys = []; }
        function nodeParamVals(path, state) {
            var node = (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.find)(path, (0,_common_hof__WEBPACK_IMPORTED_MODULE_1__.propEq)('state', state));
            return (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.extend)({}, node && node.paramValues);
        }
        var noInherit = fromPath
            .map(function (node) { return node.paramSchema; })
            .reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__.unnestR, [])
            .filter(function (param) { return !param.inherit; })
            .map((0,_common_hof__WEBPACK_IMPORTED_MODULE_1__.prop)('id'));
        /**
         * Given an [[PathNode]] "toNode", return a new [[PathNode]] with param values inherited from the
         * matching node in fromPath.  Only inherit keys that aren't found in "toKeys" from the node in "fromPath""
         */
        function makeInheritedParamsNode(toNode) {
            // All param values for the node (may include default key/vals, when key was not found in toParams)
            var toParamVals = (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.extend)({}, toNode && toNode.paramValues);
            // limited to only those keys found in toParams
            var incomingParamVals = (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.pick)(toParamVals, toKeys);
            toParamVals = (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.omit)(toParamVals, toKeys);
            var fromParamVals = (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.omit)(nodeParamVals(fromPath, toNode.state) || {}, noInherit);
            // extend toParamVals with any fromParamVals, then override any of those those with incomingParamVals
            var ownParamVals = (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.extend)(toParamVals, fromParamVals, incomingParamVals);
            return new _pathNode__WEBPACK_IMPORTED_MODULE_3__.PathNode(toNode.state).applyRawParams(ownParamVals);
        }
        // The param keys specified by the incoming toParams
        return toPath.map(makeInheritedParamsNode);
    };
    /**
     * Computes the tree changes (entering, exiting) between a fromPath and toPath.
     */
    PathUtils.treeChanges = function (fromPath, toPath, reloadState) {
        var max = Math.min(fromPath.length, toPath.length);
        var keep = 0;
        var nodesMatch = function (node1, node2) { return node1.equals(node2, PathUtils.nonDynamicParams); };
        while (keep < max && fromPath[keep].state !== reloadState && nodesMatch(fromPath[keep], toPath[keep])) {
            keep++;
        }
        /** Given a retained node, return a new node which uses the to node's param values */
        function applyToParams(retainedNode, idx) {
            var cloned = retainedNode.clone();
            cloned.paramValues = toPath[idx].paramValues;
            return cloned;
        }
        var from, retained, exiting, entering, to;
        from = fromPath;
        retained = from.slice(0, keep);
        exiting = from.slice(keep);
        // Create a new retained path (with shallow copies of nodes) which have the params of the toPath mapped
        var retainedWithToParams = retained.map(applyToParams);
        entering = toPath.slice(keep);
        to = retainedWithToParams.concat(entering);
        return { from: from, to: to, retained: retained, retainedWithToParams: retainedWithToParams, exiting: exiting, entering: entering };
    };
    /**
     * Returns a new path which is: the subpath of the first path which matches the second path.
     *
     * The new path starts from root and contains any nodes that match the nodes in the second path.
     * It stops before the first non-matching node.
     *
     * Nodes are compared using their state property and their parameter values.
     * If a `paramsFn` is provided, only the [[Param]] returned by the function will be considered when comparing nodes.
     *
     * @param pathA the first path
     * @param pathB the second path
     * @param paramsFn a function which returns the parameters to consider when comparing
     *
     * @returns an array of PathNodes from the first path which match the nodes in the second path
     */
    PathUtils.matching = function (pathA, pathB, paramsFn) {
        var done = false;
        var tuples = (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.arrayTuples)(pathA, pathB);
        return tuples.reduce(function (matching, _a) {
            var nodeA = _a[0], nodeB = _a[1];
            done = done || !nodeA.equals(nodeB, paramsFn);
            return done ? matching : matching.concat(nodeA);
        }, []);
    };
    /**
     * Returns true if two paths are identical.
     *
     * @param pathA
     * @param pathB
     * @param paramsFn a function which returns the parameters to consider when comparing
     * @returns true if the the states and parameter values for both paths are identical
     */
    PathUtils.equals = function (pathA, pathB, paramsFn) {
        return pathA.length === pathB.length && PathUtils.matching(pathA, pathB, paramsFn).length === pathA.length;
    };
    /**
     * Return a subpath of a path, which stops at the first matching node
     *
     * Given an array of nodes, returns a subset of the array starting from the first node,
     * stopping when the first node matches the predicate.
     *
     * @param path a path of [[PathNode]]s
     * @param predicate a [[Predicate]] fn that matches [[PathNode]]s
     * @returns a subpath up to the matching node, or undefined if no match is found
     */
    PathUtils.subPath = function (path, predicate) {
        var node = (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.find)(path, predicate);
        var elementIdx = path.indexOf(node);
        return elementIdx === -1 ? undefined : path.slice(0, elementIdx + 1);
    };
    PathUtils.nonDynamicParams = function (node) {
        return node.state.parameters({ inherit: false }).filter(function (param) { return !param.dynamic; });
    };
    /** Gets the raw parameter values from a path */
    PathUtils.paramValues = function (path) { return path.reduce(function (acc, node) { return (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.extend)(acc, node.paramValues); }, {}); };
    return PathUtils;
}());

//# sourceMappingURL=pathUtils.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/resolve/index.js":
/*!*************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/resolve/index.js ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NATIVE_INJECTOR_TOKEN: () => (/* reexport safe */ _resolveContext__WEBPACK_IMPORTED_MODULE_2__.NATIVE_INJECTOR_TOKEN),
/* harmony export */   Resolvable: () => (/* reexport safe */ _resolvable__WEBPACK_IMPORTED_MODULE_1__.Resolvable),
/* harmony export */   ResolveContext: () => (/* reexport safe */ _resolveContext__WEBPACK_IMPORTED_MODULE_2__.ResolveContext),
/* harmony export */   defaultResolvePolicy: () => (/* reexport safe */ _resolvable__WEBPACK_IMPORTED_MODULE_1__.defaultResolvePolicy),
/* harmony export */   resolvePolicies: () => (/* reexport safe */ _interface__WEBPACK_IMPORTED_MODULE_0__.resolvePolicies)
/* harmony export */ });
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/resolve/interface.js");
/* harmony import */ var _resolvable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resolvable */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/resolve/resolvable.js");
/* harmony import */ var _resolveContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolveContext */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/resolve/resolveContext.js");



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/resolve/interface.js":
/*!*****************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/resolve/interface.js ***!
  \*****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolvePolicies: () => (/* binding */ resolvePolicies)
/* harmony export */ });
var resolvePolicies = {
    when: {
        LAZY: 'LAZY',
        EAGER: 'EAGER',
    },
    async: {
        WAIT: 'WAIT',
        NOWAIT: 'NOWAIT',
    },
};
//# sourceMappingURL=interface.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/resolve/resolvable.js":
/*!******************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/resolve/resolvable.js ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Resolvable: () => (/* binding */ Resolvable),
/* harmony export */   defaultResolvePolicy: () => (/* binding */ defaultResolvePolicy)
/* harmony export */ });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_coreservices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/coreservices */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/coreservices.js");
/* harmony import */ var _common_trace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/trace */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/trace.js");
/* harmony import */ var _common_strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/strings */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/strings.js");
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/predicates.js");






// TODO: explicitly make this user configurable
var defaultResolvePolicy = {
    when: 'LAZY',
    async: 'WAIT',
};
/**
 * The basic building block for the resolve system.
 *
 * Resolvables encapsulate a state's resolve's resolveFn, the resolveFn's declared dependencies, the wrapped (.promise),
 * and the unwrapped-when-complete (.data) result of the resolveFn.
 *
 * Resolvable.get() either retrieves the Resolvable's existing promise, or else invokes resolve() (which invokes the
 * resolveFn) and returns the resulting promise.
 *
 * Resolvable.get() and Resolvable.resolve() both execute within a context path, which is passed as the first
 * parameter to those fns.
 */
var Resolvable = /** @class */ (function () {
    function Resolvable(arg1, resolveFn, deps, policy, data) {
        this.resolved = false;
        this.promise = undefined;
        if (arg1 instanceof Resolvable) {
            (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.extend)(this, arg1);
        }
        else if ((0,_common_predicates__WEBPACK_IMPORTED_MODULE_4__.isFunction)(resolveFn)) {
            if ((0,_common_predicates__WEBPACK_IMPORTED_MODULE_4__.isNullOrUndefined)(arg1))
                throw new Error('new Resolvable(): token argument is required');
            if (!(0,_common_predicates__WEBPACK_IMPORTED_MODULE_4__.isFunction)(resolveFn))
                throw new Error('new Resolvable(): resolveFn argument must be a function');
            this.token = arg1;
            this.policy = policy;
            this.resolveFn = resolveFn;
            this.deps = deps || [];
            this.data = data;
            this.resolved = data !== undefined;
            this.promise = this.resolved ? _common_coreservices__WEBPACK_IMPORTED_MODULE_1__.services.$q.when(this.data) : undefined;
        }
        else if ((0,_common_predicates__WEBPACK_IMPORTED_MODULE_4__.isObject)(arg1) && arg1.token && (arg1.hasOwnProperty('resolveFn') || arg1.hasOwnProperty('data'))) {
            var literal = arg1;
            return new Resolvable(literal.token, literal.resolveFn, literal.deps, literal.policy, literal.data);
        }
    }
    Resolvable.prototype.getPolicy = function (state) {
        var thisPolicy = this.policy || {};
        var statePolicy = (state && state.resolvePolicy) || {};
        return {
            when: thisPolicy.when || statePolicy.when || defaultResolvePolicy.when,
            async: thisPolicy.async || statePolicy.async || defaultResolvePolicy.async,
        };
    };
    /**
     * Asynchronously resolve this Resolvable's data
     *
     * Given a ResolveContext that this Resolvable is found in:
     * Wait for this Resolvable's dependencies, then invoke this Resolvable's function
     * and update the Resolvable's state
     */
    Resolvable.prototype.resolve = function (resolveContext, trans) {
        var _this = this;
        var $q = _common_coreservices__WEBPACK_IMPORTED_MODULE_1__.services.$q;
        // Gets all dependencies from ResolveContext and wait for them to be resolved
        var getResolvableDependencies = function () {
            return $q.all(resolveContext.getDependencies(_this).map(function (resolvable) { return resolvable.get(resolveContext, trans); }));
        };
        // Invokes the resolve function passing the resolved dependencies as arguments
        var invokeResolveFn = function (resolvedDeps) { return _this.resolveFn.apply(null, resolvedDeps); };
        var node = resolveContext.findNode(this);
        var state = node && node.state;
        var asyncPolicy = this.getPolicy(state).async;
        var customAsyncPolicy = (0,_common_predicates__WEBPACK_IMPORTED_MODULE_4__.isFunction)(asyncPolicy) ? asyncPolicy : _common_common__WEBPACK_IMPORTED_MODULE_0__.identity;
        // After the final value has been resolved, update the state of the Resolvable
        var applyResolvedValue = function (resolvedValue) {
            _this.data = resolvedValue;
            _this.resolved = true;
            _this.resolveFn = null;
            _common_trace__WEBPACK_IMPORTED_MODULE_2__.trace.traceResolvableResolved(_this, trans);
            return _this.data;
        };
        // Sets the promise property first, then getsResolvableDependencies in the context of the promise chain. Always waits one tick.
        return (this.promise = $q
            .when()
            .then(getResolvableDependencies)
            .then(invokeResolveFn)
            .then(customAsyncPolicy)
            .then(applyResolvedValue));
    };
    /**
     * Gets a promise for this Resolvable's data.
     *
     * Fetches the data and returns a promise.
     * Returns the existing promise if it has already been fetched once.
     */
    Resolvable.prototype.get = function (resolveContext, trans) {
        return this.promise || this.resolve(resolveContext, trans);
    };
    Resolvable.prototype.toString = function () {
        return "Resolvable(token: " + (0,_common_strings__WEBPACK_IMPORTED_MODULE_3__.stringify)(this.token) + ", requires: [" + this.deps.map(_common_strings__WEBPACK_IMPORTED_MODULE_3__.stringify) + "])";
    };
    Resolvable.prototype.clone = function () {
        return new Resolvable(this);
    };
    Resolvable.fromData = function (token, data) { return new Resolvable(token, function () { return data; }, null, null, data); };
    return Resolvable;
}());

//# sourceMappingURL=resolvable.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/resolve/resolveContext.js":
/*!**********************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/resolve/resolveContext.js ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NATIVE_INJECTOR_TOKEN: () => (/* binding */ NATIVE_INJECTOR_TOKEN),
/* harmony export */   ResolveContext: () => (/* binding */ ResolveContext)
/* harmony export */ });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/hof.js");
/* harmony import */ var _common_trace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/trace */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/trace.js");
/* harmony import */ var _common_coreservices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/coreservices */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/coreservices.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interface */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/resolve/interface.js");
/* harmony import */ var _resolvable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resolvable */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/resolve/resolvable.js");
/* harmony import */ var _path_pathUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../path/pathUtils */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/path/pathUtils.js");
/* harmony import */ var _common_strings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/strings */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/strings.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/index.js");









var whens = _interface__WEBPACK_IMPORTED_MODULE_4__.resolvePolicies.when;
var ALL_WHENS = [whens.EAGER, whens.LAZY];
var EAGER_WHENS = [whens.EAGER];
// tslint:disable-next-line:no-inferrable-types
var NATIVE_INJECTOR_TOKEN = 'Native Injector';
/**
 * Encapsulates Dependency Injection for a path of nodes
 *
 * UI-Router states are organized as a tree.
 * A nested state has a path of ancestors to the root of the tree.
 * When a state is being activated, each element in the path is wrapped as a [[PathNode]].
 * A `PathNode` is a stateful object that holds things like parameters and resolvables for the state being activated.
 *
 * The ResolveContext closes over the [[PathNode]]s, and provides DI for the last node in the path.
 */
var ResolveContext = /** @class */ (function () {
    function ResolveContext(_path) {
        this._path = _path;
    }
    /** Gets all the tokens found in the resolve context, de-duplicated */
    ResolveContext.prototype.getTokens = function () {
        return this._path.reduce(function (acc, node) { return acc.concat(node.resolvables.map(function (r) { return r.token; })); }, []).reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__.uniqR, []);
    };
    /**
     * Gets the Resolvable that matches the token
     *
     * Gets the last Resolvable that matches the token in this context, or undefined.
     * Throws an error if it doesn't exist in the ResolveContext
     */
    ResolveContext.prototype.getResolvable = function (token) {
        var matching = this._path
            .map(function (node) { return node.resolvables; })
            .reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__.unnestR, [])
            .filter(function (r) { return r.token === token; });
        return (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.tail)(matching);
    };
    /** Returns the [[ResolvePolicy]] for the given [[Resolvable]] */
    ResolveContext.prototype.getPolicy = function (resolvable) {
        var node = this.findNode(resolvable);
        return resolvable.getPolicy(node.state);
    };
    /**
     * Returns a ResolveContext that includes a portion of this one
     *
     * Given a state, this method creates a new ResolveContext from this one.
     * The new context starts at the first node (root) and stops at the node for the `state` parameter.
     *
     * #### Why
     *
     * When a transition is created, the nodes in the "To Path" are injected from a ResolveContext.
     * A ResolveContext closes over a path of [[PathNode]]s and processes the resolvables.
     * The "To State" can inject values from its own resolvables, as well as those from all its ancestor state's (node's).
     * This method is used to create a narrower context when injecting ancestor nodes.
     *
     * @example
     * `let ABCD = new ResolveContext([A, B, C, D]);`
     *
     * Given a path `[A, B, C, D]`, where `A`, `B`, `C` and `D` are nodes for states `a`, `b`, `c`, `d`:
     * When injecting `D`, `D` should have access to all resolvables from `A`, `B`, `C`, `D`.
     * However, `B` should only be able to access resolvables from `A`, `B`.
     *
     * When resolving for the `B` node, first take the full "To Path" Context `[A,B,C,D]` and limit to the subpath `[A,B]`.
     * `let AB = ABCD.subcontext(a)`
     */
    ResolveContext.prototype.subContext = function (state) {
        return new ResolveContext(_path_pathUtils__WEBPACK_IMPORTED_MODULE_6__.PathUtils.subPath(this._path, function (node) { return node.state === state; }));
    };
    /**
     * Adds Resolvables to the node that matches the state
     *
     * This adds a [[Resolvable]] (generally one created on the fly; not declared on a [[StateDeclaration.resolve]] block).
     * The resolvable is added to the node matching the `state` parameter.
     *
     * These new resolvables are not automatically fetched.
     * The calling code should either fetch them, fetch something that depends on them,
     * or rely on [[resolvePath]] being called when some state is being entered.
     *
     * Note: each resolvable's [[ResolvePolicy]] is merged with the state's policy, and the global default.
     *
     * @param newResolvables the new Resolvables
     * @param state Used to find the node to put the resolvable on
     */
    ResolveContext.prototype.addResolvables = function (newResolvables, state) {
        var node = (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.find)(this._path, (0,_common_hof__WEBPACK_IMPORTED_MODULE_1__.propEq)('state', state));
        var keys = newResolvables.map(function (r) { return r.token; });
        node.resolvables = node.resolvables.filter(function (r) { return keys.indexOf(r.token) === -1; }).concat(newResolvables);
    };
    /**
     * Returns a promise for an array of resolved path Element promises
     *
     * @param when
     * @param trans
     * @returns {Promise<any>|any}
     */
    ResolveContext.prototype.resolvePath = function (when, trans) {
        var _this = this;
        if (when === void 0) { when = 'LAZY'; }
        // This option determines which 'when' policy Resolvables we are about to fetch.
        var whenOption = (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.inArray)(ALL_WHENS, when) ? when : 'LAZY';
        // If the caller specified EAGER, only the EAGER Resolvables are fetched.
        // if the caller specified LAZY, both EAGER and LAZY Resolvables are fetched.`
        var matchedWhens = whenOption === _interface__WEBPACK_IMPORTED_MODULE_4__.resolvePolicies.when.EAGER ? EAGER_WHENS : ALL_WHENS;
        // get the subpath to the state argument, if provided
        _common_trace__WEBPACK_IMPORTED_MODULE_2__.trace.traceResolvePath(this._path, when, trans);
        var matchesPolicy = function (acceptedVals, whenOrAsync) { return function (resolvable) {
            return (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.inArray)(acceptedVals, _this.getPolicy(resolvable)[whenOrAsync]);
        }; };
        // Trigger all the (matching) Resolvables in the path
        // Reduce all the "WAIT" Resolvables into an array
        var promises = this._path.reduce(function (acc, node) {
            var nodeResolvables = node.resolvables.filter(matchesPolicy(matchedWhens, 'when'));
            var nowait = nodeResolvables.filter(matchesPolicy(['NOWAIT'], 'async'));
            var wait = nodeResolvables.filter((0,_common_hof__WEBPACK_IMPORTED_MODULE_1__.not)(matchesPolicy(['NOWAIT'], 'async')));
            // For the matching Resolvables, start their async fetch process.
            var subContext = _this.subContext(node.state);
            var getResult = function (r) {
                return r
                    .get(subContext, trans)
                    // Return a tuple that includes the Resolvable's token
                    .then(function (value) { return ({ token: r.token, value: value }); });
            };
            nowait.forEach(getResult);
            return acc.concat(wait.map(getResult));
        }, []);
        // Wait for all the "WAIT" resolvables
        return _common_coreservices__WEBPACK_IMPORTED_MODULE_3__.services.$q.all(promises);
    };
    ResolveContext.prototype.injector = function () {
        return this._injector || (this._injector = new UIInjectorImpl(this));
    };
    ResolveContext.prototype.findNode = function (resolvable) {
        return (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.find)(this._path, function (node) { return (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.inArray)(node.resolvables, resolvable); });
    };
    /**
     * Gets the async dependencies of a Resolvable
     *
     * Given a Resolvable, returns its dependencies as a Resolvable[]
     */
    ResolveContext.prototype.getDependencies = function (resolvable) {
        var _this = this;
        var node = this.findNode(resolvable);
        // Find which other resolvables are "visible" to the `resolvable` argument
        // subpath stopping at resolvable's node, or the whole path (if the resolvable isn't in the path)
        var subPath = _path_pathUtils__WEBPACK_IMPORTED_MODULE_6__.PathUtils.subPath(this._path, function (x) { return x === node; }) || this._path;
        var availableResolvables = subPath
            .reduce(function (acc, _node) { return acc.concat(_node.resolvables); }, []) // all of subpath's resolvables
            .filter(function (res) { return res !== resolvable; }); // filter out the `resolvable` argument
        var getDependency = function (token) {
            var matching = availableResolvables.filter(function (r) { return r.token === token; });
            if (matching.length)
                return (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.tail)(matching);
            var fromInjector = _this.injector().getNative(token);
            if ((0,_common__WEBPACK_IMPORTED_MODULE_8__.isUndefined)(fromInjector)) {
                throw new Error('Could not find Dependency Injection token: ' + (0,_common_strings__WEBPACK_IMPORTED_MODULE_7__.stringify)(token));
            }
            return new _resolvable__WEBPACK_IMPORTED_MODULE_5__.Resolvable(token, function () { return fromInjector; }, [], fromInjector);
        };
        return resolvable.deps.map(getDependency);
    };
    return ResolveContext;
}());

/** @internal */
var UIInjectorImpl = /** @class */ (function () {
    function UIInjectorImpl(context) {
        this.context = context;
        this.native = this.get(NATIVE_INJECTOR_TOKEN) || _common_coreservices__WEBPACK_IMPORTED_MODULE_3__.services.$injector;
    }
    UIInjectorImpl.prototype.get = function (token) {
        var resolvable = this.context.getResolvable(token);
        if (resolvable) {
            if (this.context.getPolicy(resolvable).async === 'NOWAIT') {
                return resolvable.get(this.context);
            }
            if (!resolvable.resolved) {
                throw new Error('Resolvable async .get() not complete:' + (0,_common_strings__WEBPACK_IMPORTED_MODULE_7__.stringify)(resolvable.token));
            }
            return resolvable.data;
        }
        return this.getNative(token);
    };
    UIInjectorImpl.prototype.getAsync = function (token) {
        var resolvable = this.context.getResolvable(token);
        if (resolvable)
            return resolvable.get(this.context);
        return _common_coreservices__WEBPACK_IMPORTED_MODULE_3__.services.$q.when(this.native.get(token));
    };
    UIInjectorImpl.prototype.getNative = function (token) {
        return this.native && this.native.get(token);
    };
    return UIInjectorImpl;
}());
//# sourceMappingURL=resolveContext.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/router.js":
/*!******************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/router.js ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UIRouter: () => (/* binding */ UIRouter)
/* harmony export */ });
/* harmony import */ var _url_urlMatcherFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url/urlMatcherFactory */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/url/urlMatcherFactory.js");
/* harmony import */ var _url_urlRouter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./url/urlRouter */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/url/urlRouter.js");
/* harmony import */ var _transition_transitionService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transition/transitionService */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/transition/transitionService.js");
/* harmony import */ var _view_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/view */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/view/view.js");
/* harmony import */ var _state_stateRegistry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state/stateRegistry */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/state/stateRegistry.js");
/* harmony import */ var _state_stateService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state/stateService */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/state/stateService.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./globals */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/globals.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/common */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/predicates */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _url_urlService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./url/urlService */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/url/urlService.js");
/* harmony import */ var _common_trace__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/trace */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/trace.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/index.js");












/** @internal */
var _routerInstance = 0;
/** @internal */
var locSvcFns = ['url', 'path', 'search', 'hash', 'onChange'];
/** @internal */
var locCfgFns = ['port', 'protocol', 'host', 'baseHref', 'html5Mode', 'hashPrefix'];
/** @internal */
var locationServiceStub = (0,_common__WEBPACK_IMPORTED_MODULE_11__.makeStub)('LocationServices', locSvcFns);
/** @internal */
var locationConfigStub = (0,_common__WEBPACK_IMPORTED_MODULE_11__.makeStub)('LocationConfig', locCfgFns);
/**
 * An instance of UI-Router.
 *
 * This object contains references to service APIs which define your application's routing behavior.
 */
var UIRouter = /** @class */ (function () {
    /**
     * Creates a new `UIRouter` object
     *
     * @param locationService a [[LocationServices]] implementation
     * @param locationConfig a [[LocationConfig]] implementation
     * @internal
     */
    function UIRouter(locationService, locationConfig) {
        if (locationService === void 0) { locationService = locationServiceStub; }
        if (locationConfig === void 0) { locationConfig = locationConfigStub; }
        this.locationService = locationService;
        this.locationConfig = locationConfig;
        /** @internal */ this.$id = _routerInstance++;
        /** @internal */ this._disposed = false;
        /** @internal */ this._disposables = [];
        /** Enable/disable tracing to the javascript console */
        this.trace = _common_trace__WEBPACK_IMPORTED_MODULE_10__.trace;
        /** Provides services related to ui-view synchronization */
        this.viewService = new _view_view__WEBPACK_IMPORTED_MODULE_3__.ViewService(this);
        /** An object that contains global router state, such as the current state and params */
        this.globals = new _globals__WEBPACK_IMPORTED_MODULE_6__.UIRouterGlobals();
        /** A service that exposes global Transition Hooks */
        this.transitionService = new _transition_transitionService__WEBPACK_IMPORTED_MODULE_2__.TransitionService(this);
        /**
         * Deprecated for public use. Use [[urlService]] instead.
         * @deprecated Use [[urlService]] instead
         */
        this.urlMatcherFactory = new _url_urlMatcherFactory__WEBPACK_IMPORTED_MODULE_0__.UrlMatcherFactory(this);
        /**
         * Deprecated for public use. Use [[urlService]] instead.
         * @deprecated Use [[urlService]] instead
         */
        this.urlRouter = new _url_urlRouter__WEBPACK_IMPORTED_MODULE_1__.UrlRouter(this);
        /** Provides services related to the URL */
        this.urlService = new _url_urlService__WEBPACK_IMPORTED_MODULE_9__.UrlService(this);
        /** Provides a registry for states, and related registration services */
        this.stateRegistry = new _state_stateRegistry__WEBPACK_IMPORTED_MODULE_4__.StateRegistry(this);
        /** Provides services related to states */
        this.stateService = new _state_stateService__WEBPACK_IMPORTED_MODULE_5__.StateService(this);
        /** @internal plugin instances are registered here */
        this._plugins = {};
        this.viewService._pluginapi._rootViewContext(this.stateRegistry.root());
        this.globals.$current = this.stateRegistry.root();
        this.globals.current = this.globals.$current.self;
        this.disposable(this.globals);
        this.disposable(this.stateService);
        this.disposable(this.stateRegistry);
        this.disposable(this.transitionService);
        this.disposable(this.urlService);
        this.disposable(locationService);
        this.disposable(locationConfig);
    }
    /** Registers an object to be notified when the router is disposed */
    UIRouter.prototype.disposable = function (disposable) {
        this._disposables.push(disposable);
    };
    /**
     * Disposes this router instance
     *
     * When called, clears resources retained by the router by calling `dispose(this)` on all
     * registered [[disposable]] objects.
     *
     * Or, if a `disposable` object is provided, calls `dispose(this)` on that object only.
     *
     * @internal
     * @param disposable (optional) the disposable to dispose
     */
    UIRouter.prototype.dispose = function (disposable) {
        var _this = this;
        if (disposable && (0,_common_predicates__WEBPACK_IMPORTED_MODULE_8__.isFunction)(disposable.dispose)) {
            disposable.dispose(this);
            return undefined;
        }
        this._disposed = true;
        this._disposables.slice().forEach(function (d) {
            try {
                typeof d.dispose === 'function' && d.dispose(_this);
                (0,_common_common__WEBPACK_IMPORTED_MODULE_7__.removeFrom)(_this._disposables, d);
            }
            catch (ignored) { }
        });
    };
    /**
     * Adds a plugin to UI-Router
     *
     * This method adds a UI-Router Plugin.
     * A plugin can enhance or change UI-Router behavior using any public API.
     *
     * #### Example:
     * ```js
     * import { MyCoolPlugin } from "ui-router-cool-plugin";
     *
     * var plugin = router.addPlugin(MyCoolPlugin);
     * ```
     *
     * ### Plugin authoring
     *
     * A plugin is simply a class (or constructor function) which accepts a [[UIRouter]] instance and (optionally) an options object.
     *
     * The plugin can implement its functionality using any of the public APIs of [[UIRouter]].
     * For example, it may configure router options or add a Transition Hook.
     *
     * The plugin can then be published as a separate module.
     *
     * #### Example:
     * ```js
     * export class MyAuthPlugin implements UIRouterPlugin {
     *   constructor(router: UIRouter, options: any) {
     *     this.name = "MyAuthPlugin";
     *     let $transitions = router.transitionService;
     *     let $state = router.stateService;
     *
     *     let authCriteria = {
     *       to: (state) => state.data && state.data.requiresAuth
     *     };
     *
     *     function authHook(transition: Transition) {
     *       let authService = transition.injector().get('AuthService');
     *       if (!authService.isAuthenticated()) {
     *         return $state.target('login');
     *       }
     *     }
     *
     *     $transitions.onStart(authCriteria, authHook);
     *   }
     * }
     * ```
     *
     * @param plugin one of:
     *        - a plugin class which implements [[UIRouterPlugin]]
     *        - a constructor function for a [[UIRouterPlugin]] which accepts a [[UIRouter]] instance
     *        - a factory function which accepts a [[UIRouter]] instance and returns a [[UIRouterPlugin]] instance
     * @param options options to pass to the plugin class/factory
     * @returns the registered plugin instance
     */
    UIRouter.prototype.plugin = function (plugin, options) {
        if (options === void 0) { options = {}; }
        var pluginInstance = new plugin(this, options);
        if (!pluginInstance.name)
            throw new Error('Required property `name` missing on plugin: ' + pluginInstance);
        this._disposables.push(pluginInstance);
        return (this._plugins[pluginInstance.name] = pluginInstance);
    };
    UIRouter.prototype.getPlugin = function (pluginName) {
        return pluginName ? this._plugins[pluginName] : (0,_common_common__WEBPACK_IMPORTED_MODULE_7__.values)(this._plugins);
    };
    return UIRouter;
}());

//# sourceMappingURL=router.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/state/index.js":
/*!***********************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/state/index.js ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StateBuilder: () => (/* reexport safe */ _stateBuilder__WEBPACK_IMPORTED_MODULE_1__.StateBuilder),
/* harmony export */   StateMatcher: () => (/* reexport safe */ _stateMatcher__WEBPACK_IMPORTED_MODULE_3__.StateMatcher),
/* harmony export */   StateObject: () => (/* reexport safe */ _stateObject__WEBPACK_IMPORTED_MODULE_2__.StateObject),
/* harmony export */   StateQueueManager: () => (/* reexport safe */ _stateQueueManager__WEBPACK_IMPORTED_MODULE_4__.StateQueueManager),
/* harmony export */   StateRegistry: () => (/* reexport safe */ _stateRegistry__WEBPACK_IMPORTED_MODULE_5__.StateRegistry),
/* harmony export */   StateService: () => (/* reexport safe */ _stateService__WEBPACK_IMPORTED_MODULE_6__.StateService),
/* harmony export */   TargetState: () => (/* reexport safe */ _targetState__WEBPACK_IMPORTED_MODULE_7__.TargetState),
/* harmony export */   resolvablesBuilder: () => (/* reexport safe */ _stateBuilder__WEBPACK_IMPORTED_MODULE_1__.resolvablesBuilder)
/* harmony export */ });
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/state/interface.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_interface__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _interface__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _interface__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _stateBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stateBuilder */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/state/stateBuilder.js");
/* harmony import */ var _stateObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stateObject */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/state/stateObject.js");
/* harmony import */ var _stateMatcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stateMatcher */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/state/stateMatcher.js");
/* harmony import */ var _stateQueueManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stateQueueManager */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/state/stateQueueManager.js");
/* harmony import */ var _stateRegistry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stateRegistry */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/state/stateRegistry.js");
/* harmony import */ var _stateService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stateService */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/state/stateService.js");
/* harmony import */ var _targetState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./targetState */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/state/targetState.js");
/**
 * # The state subsystem
 *
 * This subsystem implements the ui-router state tree
 *
 * - The [[StateService]] has state-related service methods such as:
 *   - [[StateService.get]]: Get a registered [[StateDeclaration]] object
 *   - [[StateService.go]]: Transition from the current state to a new state
 *   - [[StateService.reload]]: Reload the current state
 *   - [[StateService.target]]: Get a [[TargetState]] (useful when redirecting from a Transition Hook)
 *   - [[StateService.onInvalid]]: Register a callback for when a transition to an invalid state is started
 *   - [[StateService.defaultErrorHandler]]: Register a global callback for when a transition errors
 * - The [[StateDeclaration]] interface defines the shape of a state declaration
 * - The [[StateRegistry]] contains all the registered states
 *   - States can be added/removed using the [[StateRegistry.register]] and [[StateRegistry.deregister]]
 *     - Note: Bootstrap state registration differs by front-end framework.
 *   - Get notified of state registration/deregistration using [[StateRegistry.onStatesChanged]].
 *
 * @packageDocumentation
 */








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/state/interface.js":
/*!***************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/state/interface.js ***!
  \***************************************************************************************************************************************************/
/***/ (() => {

//# sourceMappingURL=interface.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/state/stateBuilder.js":
/*!******************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/state/stateBuilder.js ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StateBuilder: () => (/* binding */ StateBuilder),
/* harmony export */   resolvablesBuilder: () => (/* binding */ resolvablesBuilder)
/* harmony export */ });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _common_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/strings */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/strings.js");
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/hof.js");
/* harmony import */ var _resolve_resolvable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../resolve/resolvable */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/resolve/resolvable.js");
/* harmony import */ var _common_coreservices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/coreservices */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/coreservices.js");






var parseUrl = function (url) {
    if (!(0,_common_predicates__WEBPACK_IMPORTED_MODULE_1__.isString)(url))
        return false;
    var root = url.charAt(0) === '^';
    return { val: root ? url.substring(1) : url, root: root };
};
function nameBuilder(state) {
    return state.name;
}
function selfBuilder(state) {
    state.self.$$state = function () { return state; };
    return state.self;
}
function dataBuilder(state) {
    if (state.parent && state.parent.data) {
        state.data = state.self.data = (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.inherit)(state.parent.data, state.data);
    }
    return state.data;
}
var getUrlBuilder = function ($urlMatcherFactoryProvider, root) {
    return function urlBuilder(stateObject) {
        var stateDec = stateObject.self;
        // For future states, i.e., states whose name ends with `.**`,
        // match anything that starts with the url prefix
        if (stateDec && stateDec.url && stateDec.name && stateDec.name.match(/\.\*\*$/)) {
            var newStateDec = {};
            (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.copy)(stateDec, newStateDec);
            newStateDec.url += '{remainder:any}'; // match any path (.*)
            stateDec = newStateDec;
        }
        var parent = stateObject.parent;
        var parsed = parseUrl(stateDec.url);
        var url = !parsed ? stateDec.url : $urlMatcherFactoryProvider.compile(parsed.val, { state: stateDec });
        if (!url)
            return null;
        if (!$urlMatcherFactoryProvider.isMatcher(url))
            throw new Error("Invalid url '" + url + "' in state '" + stateObject + "'");
        return parsed && parsed.root ? url : ((parent && parent.navigable) || root()).url.append(url);
    };
};
var getNavigableBuilder = function (isRoot) {
    return function navigableBuilder(state) {
        return !isRoot(state) && state.url ? state : state.parent ? state.parent.navigable : null;
    };
};
var getParamsBuilder = function (paramFactory) {
    return function paramsBuilder(state) {
        var makeConfigParam = function (config, id) { return paramFactory.fromConfig(id, null, state.self); };
        var urlParams = (state.url && state.url.parameters({ inherit: false })) || [];
        var nonUrlParams = (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.values)((0,_common_common__WEBPACK_IMPORTED_MODULE_0__.mapObj)((0,_common_common__WEBPACK_IMPORTED_MODULE_0__.omit)(state.params || {}, urlParams.map((0,_common_hof__WEBPACK_IMPORTED_MODULE_3__.prop)('id'))), makeConfigParam));
        return urlParams
            .concat(nonUrlParams)
            .map(function (p) { return [p.id, p]; })
            .reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__.applyPairs, {});
    };
};
function pathBuilder(state) {
    return state.parent ? state.parent.path.concat(state) : /*root*/ [state];
}
function includesBuilder(state) {
    var includes = state.parent ? (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.extend)({}, state.parent.includes) : {};
    includes[state.name] = true;
    return includes;
}
/**
 * This is a [[StateBuilder.builder]] function for the `resolve:` block on a [[StateDeclaration]].
 *
 * When the [[StateBuilder]] builds a [[StateObject]] object from a raw [[StateDeclaration]], this builder
 * validates the `resolve` property and converts it to a [[Resolvable]] array.
 *
 * resolve: input value can be:
 *
 * {
 *   // analyzed but not injected
 *   myFooResolve: function() { return "myFooData"; },
 *
 *   // function.toString() parsed, "DependencyName" dep as string (not min-safe)
 *   myBarResolve: function(DependencyName) { return DependencyName.fetchSomethingAsPromise() },
 *
 *   // Array split; "DependencyName" dep as string
 *   myBazResolve: [ "DependencyName", function(dep) { return dep.fetchSomethingAsPromise() },
 *
 *   // Array split; DependencyType dep as token (compared using ===)
 *   myQuxResolve: [ DependencyType, function(dep) { return dep.fetchSometingAsPromise() },
 *
 *   // val.$inject used as deps
 *   // where:
 *   //     corgeResolve.$inject = ["DependencyName"];
 *   //     function corgeResolve(dep) { dep.fetchSometingAsPromise() }
 *   // then "DependencyName" dep as string
 *   myCorgeResolve: corgeResolve,
 *
 *  // inject service by name
 *  // When a string is found, desugar creating a resolve that injects the named service
 *   myGraultResolve: "SomeService"
 * }
 *
 * or:
 *
 * [
 *   new Resolvable("myFooResolve", function() { return "myFooData" }),
 *   new Resolvable("myBarResolve", function(dep) { return dep.fetchSomethingAsPromise() }, [ "DependencyName" ]),
 *   { provide: "myBazResolve", useFactory: function(dep) { dep.fetchSomethingAsPromise() }, deps: [ "DependencyName" ] }
 * ]
 */
function resolvablesBuilder(state) {
    /** convert resolve: {} and resolvePolicy: {} objects to an array of tuples */
    var objects2Tuples = function (resolveObj, resolvePolicies) {
        return Object.keys(resolveObj || {}).map(function (token) { return ({
            token: token,
            val: resolveObj[token],
            deps: undefined,
            policy: resolvePolicies[token],
        }); });
    };
    /** fetch DI annotations from a function or ng1-style array */
    var annotate = function (fn) {
        var $injector = _common_coreservices__WEBPACK_IMPORTED_MODULE_5__.services.$injector;
        // ng1 doesn't have an $injector until runtime.
        // If the $injector doesn't exist, use "deferred" literal as a
        // marker indicating they should be annotated when runtime starts
        return fn['$inject'] || ($injector && $injector.annotate(fn, $injector.strictDi)) || 'deferred';
    };
    /** true if the object has both `token` and `resolveFn`, and is probably a [[ResolveLiteral]] */
    var isResolveLiteral = function (obj) { return !!(obj.token && obj.resolveFn); };
    /** true if the object looks like a provide literal, or a ng2 Provider */
    var isLikeNg2Provider = function (obj) {
        return !!((obj.provide || obj.token) && (obj.useValue || obj.useFactory || obj.useExisting || obj.useClass));
    };
    /** true if the object looks like a tuple from obj2Tuples */
    var isTupleFromObj = function (obj) {
        return !!(obj && obj.val && ((0,_common_predicates__WEBPACK_IMPORTED_MODULE_1__.isString)(obj.val) || (0,_common_predicates__WEBPACK_IMPORTED_MODULE_1__.isArray)(obj.val) || (0,_common_predicates__WEBPACK_IMPORTED_MODULE_1__.isFunction)(obj.val)));
    };
    /** extracts the token from a Provider or provide literal */
    var getToken = function (p) { return p.provide || p.token; };
    // prettier-ignore: Given a literal resolve or provider object, returns a Resolvable
    var literal2Resolvable = (0,_common_hof__WEBPACK_IMPORTED_MODULE_3__.pattern)([
        [(0,_common_hof__WEBPACK_IMPORTED_MODULE_3__.prop)('resolveFn'), function (p) { return new _resolve_resolvable__WEBPACK_IMPORTED_MODULE_4__.Resolvable(getToken(p), p.resolveFn, p.deps, p.policy); }],
        [(0,_common_hof__WEBPACK_IMPORTED_MODULE_3__.prop)('useFactory'), function (p) { return new _resolve_resolvable__WEBPACK_IMPORTED_MODULE_4__.Resolvable(getToken(p), p.useFactory, p.deps || p.dependencies, p.policy); }],
        [(0,_common_hof__WEBPACK_IMPORTED_MODULE_3__.prop)('useClass'), function (p) { return new _resolve_resolvable__WEBPACK_IMPORTED_MODULE_4__.Resolvable(getToken(p), function () { return new p.useClass(); }, [], p.policy); }],
        [(0,_common_hof__WEBPACK_IMPORTED_MODULE_3__.prop)('useValue'), function (p) { return new _resolve_resolvable__WEBPACK_IMPORTED_MODULE_4__.Resolvable(getToken(p), function () { return p.useValue; }, [], p.policy, p.useValue); }],
        [(0,_common_hof__WEBPACK_IMPORTED_MODULE_3__.prop)('useExisting'), function (p) { return new _resolve_resolvable__WEBPACK_IMPORTED_MODULE_4__.Resolvable(getToken(p), _common_common__WEBPACK_IMPORTED_MODULE_0__.identity, [p.useExisting], p.policy); }],
    ]);
    // prettier-ignore
    var tuple2Resolvable = (0,_common_hof__WEBPACK_IMPORTED_MODULE_3__.pattern)([
        [(0,_common_hof__WEBPACK_IMPORTED_MODULE_3__.pipe)((0,_common_hof__WEBPACK_IMPORTED_MODULE_3__.prop)('val'), _common_predicates__WEBPACK_IMPORTED_MODULE_1__.isString), function (tuple) { return new _resolve_resolvable__WEBPACK_IMPORTED_MODULE_4__.Resolvable(tuple.token, _common_common__WEBPACK_IMPORTED_MODULE_0__.identity, [tuple.val], tuple.policy); }],
        [(0,_common_hof__WEBPACK_IMPORTED_MODULE_3__.pipe)((0,_common_hof__WEBPACK_IMPORTED_MODULE_3__.prop)('val'), _common_predicates__WEBPACK_IMPORTED_MODULE_1__.isArray), function (tuple) { return new _resolve_resolvable__WEBPACK_IMPORTED_MODULE_4__.Resolvable(tuple.token, (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.tail)(tuple.val), tuple.val.slice(0, -1), tuple.policy); }],
        [(0,_common_hof__WEBPACK_IMPORTED_MODULE_3__.pipe)((0,_common_hof__WEBPACK_IMPORTED_MODULE_3__.prop)('val'), _common_predicates__WEBPACK_IMPORTED_MODULE_1__.isFunction), function (tuple) { return new _resolve_resolvable__WEBPACK_IMPORTED_MODULE_4__.Resolvable(tuple.token, tuple.val, annotate(tuple.val), tuple.policy); }],
    ]);
    // prettier-ignore
    var item2Resolvable = (0,_common_hof__WEBPACK_IMPORTED_MODULE_3__.pattern)([
        [(0,_common_hof__WEBPACK_IMPORTED_MODULE_3__.is)(_resolve_resolvable__WEBPACK_IMPORTED_MODULE_4__.Resolvable), function (r) { return r; }],
        [isResolveLiteral, literal2Resolvable],
        [isLikeNg2Provider, literal2Resolvable],
        [isTupleFromObj, tuple2Resolvable],
        [(0,_common_hof__WEBPACK_IMPORTED_MODULE_3__.val)(true), function (obj) { throw new Error('Invalid resolve value: ' + (0,_common_strings__WEBPACK_IMPORTED_MODULE_2__.stringify)(obj)); },],
    ]);
    // If resolveBlock is already an array, use it as-is.
    // Otherwise, assume it's an object and convert to an Array of tuples
    var decl = state.resolve;
    var items = (0,_common_predicates__WEBPACK_IMPORTED_MODULE_1__.isArray)(decl) ? decl : objects2Tuples(decl, state.resolvePolicy || {});
    return items.map(item2Resolvable);
}
/**
 * A internal global service
 *
 * StateBuilder is a factory for the internal [[StateObject]] objects.
 *
 * When you register a state with the [[StateRegistry]], you register a plain old javascript object which
 * conforms to the [[StateDeclaration]] interface.  This factory takes that object and builds the corresponding
 * [[StateObject]] object, which has an API and is used internally.
 *
 * Custom properties or API may be added to the internal [[StateObject]] object by registering a decorator function
 * using the [[builder]] method.
 */
var StateBuilder = /** @class */ (function () {
    function StateBuilder(matcher, urlMatcherFactory) {
        this.matcher = matcher;
        var self = this;
        var root = function () { return matcher.find(''); };
        var isRoot = function (state) { return state.name === ''; };
        function parentBuilder(state) {
            if (isRoot(state))
                return null;
            return matcher.find(self.parentName(state)) || root();
        }
        this.builders = {
            name: [nameBuilder],
            self: [selfBuilder],
            parent: [parentBuilder],
            data: [dataBuilder],
            // Build a URLMatcher if necessary, either via a relative or absolute URL
            url: [getUrlBuilder(urlMatcherFactory, root)],
            // Keep track of the closest ancestor state that has a URL (i.e. is navigable)
            navigable: [getNavigableBuilder(isRoot)],
            params: [getParamsBuilder(urlMatcherFactory.paramFactory)],
            // Each framework-specific ui-router implementation should define its own `views` builder
            // e.g., src/ng1/statebuilders/views.ts
            views: [],
            // Keep a full path from the root down to this state as this is needed for state activation.
            path: [pathBuilder],
            // Speed up $state.includes() as it's used a lot
            includes: [includesBuilder],
            resolvables: [resolvablesBuilder],
        };
    }
    StateBuilder.prototype.builder = function (name, fn) {
        var builders = this.builders;
        var array = builders[name] || [];
        // Backwards compat: if only one builder exists, return it, else return whole arary.
        if ((0,_common_predicates__WEBPACK_IMPORTED_MODULE_1__.isString)(name) && !(0,_common_predicates__WEBPACK_IMPORTED_MODULE_1__.isDefined)(fn))
            return array.length > 1 ? array : array[0];
        if (!(0,_common_predicates__WEBPACK_IMPORTED_MODULE_1__.isString)(name) || !(0,_common_predicates__WEBPACK_IMPORTED_MODULE_1__.isFunction)(fn))
            return;
        builders[name] = array;
        builders[name].push(fn);
        return function () { return builders[name].splice(builders[name].indexOf(fn, 1)) && null; };
    };
    /**
     * Builds all of the properties on an essentially blank State object, returning a State object which has all its
     * properties and API built.
     *
     * @param state an uninitialized State object
     * @returns the built State object
     */
    StateBuilder.prototype.build = function (state) {
        var _a = this, matcher = _a.matcher, builders = _a.builders;
        var parent = this.parentName(state);
        if (parent && !matcher.find(parent, undefined, false)) {
            return null;
        }
        for (var key in builders) {
            if (!builders.hasOwnProperty(key))
                continue;
            var chain = builders[key].reduce(function (parentFn, step) { return function (_state) { return step(_state, parentFn); }; }, _common_common__WEBPACK_IMPORTED_MODULE_0__.noop);
            state[key] = chain(state);
        }
        return state;
    };
    StateBuilder.prototype.parentName = function (state) {
        // name = 'foo.bar.baz.**'
        var name = state.name || '';
        // segments = ['foo', 'bar', 'baz', '.**']
        var segments = name.split('.');
        // segments = ['foo', 'bar', 'baz']
        var lastSegment = segments.pop();
        // segments = ['foo', 'bar'] (ignore .** segment for future states)
        if (lastSegment === '**')
            segments.pop();
        if (segments.length) {
            if (state.parent) {
                throw new Error("States that specify the 'parent:' property should not have a '.' in their name (" + name + ")");
            }
            // 'foo.bar'
            return segments.join('.');
        }
        if (!state.parent)
            return '';
        return (0,_common_predicates__WEBPACK_IMPORTED_MODULE_1__.isString)(state.parent) ? state.parent : state.parent.name;
    };
    StateBuilder.prototype.name = function (state) {
        var name = state.name;
        if (name.indexOf('.') !== -1 || !state.parent)
            return name;
        var parentName = (0,_common_predicates__WEBPACK_IMPORTED_MODULE_1__.isString)(state.parent) ? state.parent : state.parent.name;
        return parentName ? parentName + '.' + name : name;
    };
    return StateBuilder;
}());

//# sourceMappingURL=stateBuilder.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/state/stateMatcher.js":
/*!******************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/state/stateMatcher.js ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StateMatcher: () => (/* binding */ StateMatcher)
/* harmony export */ });
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_safeConsole__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/safeConsole */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/safeConsole.js");



var StateMatcher = /** @class */ (function () {
    function StateMatcher(_states) {
        this._states = _states;
    }
    StateMatcher.prototype.isRelative = function (stateName) {
        stateName = stateName || '';
        return stateName.indexOf('.') === 0 || stateName.indexOf('^') === 0;
    };
    StateMatcher.prototype.find = function (stateOrName, base, matchGlob) {
        if (matchGlob === void 0) { matchGlob = true; }
        if (!stateOrName && stateOrName !== '')
            return undefined;
        var isStr = (0,_common_predicates__WEBPACK_IMPORTED_MODULE_0__.isString)(stateOrName);
        var name = isStr ? stateOrName : stateOrName.name;
        if (this.isRelative(name))
            name = this.resolvePath(name, base);
        var state = this._states[name];
        if (state && (isStr || (!isStr && (state === stateOrName || state.self === stateOrName)))) {
            return state;
        }
        else if (isStr && matchGlob) {
            var _states = (0,_common_common__WEBPACK_IMPORTED_MODULE_1__.values)(this._states);
            var matches = _states.filter(function (_state) { return _state.__stateObjectCache.nameGlob && _state.__stateObjectCache.nameGlob.matches(name); });
            if (matches.length > 1) {
                _common_safeConsole__WEBPACK_IMPORTED_MODULE_2__.safeConsole.error("stateMatcher.find: Found multiple matches for " + name + " using glob: ", matches.map(function (match) { return match.name; }));
            }
            return matches[0];
        }
        return undefined;
    };
    StateMatcher.prototype.resolvePath = function (name, base) {
        if (!base)
            throw new Error("No reference point given for path '" + name + "'");
        var baseState = this.find(base);
        var splitName = name.split('.');
        var pathLength = splitName.length;
        var i = 0, current = baseState;
        for (; i < pathLength; i++) {
            if (splitName[i] === '' && i === 0) {
                current = baseState;
                continue;
            }
            if (splitName[i] === '^') {
                if (!current.parent)
                    throw new Error("Path '" + name + "' not valid for state '" + baseState.name + "'");
                current = current.parent;
                continue;
            }
            break;
        }
        var relName = splitName.slice(i).join('.');
        return current.name + (current.name && relName ? '.' : '') + relName;
    };
    return StateMatcher;
}());

//# sourceMappingURL=stateMatcher.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/state/stateObject.js":
/*!*****************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/state/stateObject.js ***!
  \*****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StateObject: () => (/* binding */ StateObject)
/* harmony export */ });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/hof.js");
/* harmony import */ var _common_glob__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/glob */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/glob.js");
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/predicates.js");




/**
 * Internal representation of a UI-Router state.
 *
 * Instances of this class are created when a [[StateDeclaration]] is registered with the [[StateRegistry]].
 *
 * A registered [[StateDeclaration]] is augmented with a getter ([[StateDeclaration.$$state]]) which returns the corresponding [[StateObject]] object.
 *
 * This class prototypally inherits from the corresponding [[StateDeclaration]].
 * Each of its own properties (i.e., `hasOwnProperty`) are built using builders from the [[StateBuilder]].
 */
var StateObject = /** @class */ (function () {
    /** @deprecated use State.create() */
    function StateObject(config) {
        return StateObject.create(config || {});
    }
    /**
     * Create a state object to put the private/internal implementation details onto.
     * The object's prototype chain looks like:
     * (Internal State Object) -> (Copy of State.prototype) -> (State Declaration object) -> (State Declaration's prototype...)
     *
     * @param stateDecl the user-supplied State Declaration
     * @returns {StateObject} an internal State object
     */
    StateObject.create = function (stateDecl) {
        stateDecl = StateObject.isStateClass(stateDecl) ? new stateDecl() : stateDecl;
        var state = (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.inherit)((0,_common_common__WEBPACK_IMPORTED_MODULE_0__.inherit)(stateDecl, StateObject.prototype));
        stateDecl.$$state = function () { return state; };
        state.self = stateDecl;
        state.__stateObjectCache = {
            nameGlob: _common_glob__WEBPACK_IMPORTED_MODULE_2__.Glob.fromString(state.name),
        };
        return state;
    };
    /**
     * Returns true if the provided parameter is the same state.
     *
     * Compares the identity of the state against the passed value, which is either an object
     * reference to the actual `State` instance, the original definition object passed to
     * `$stateProvider.state()`, or the fully-qualified name.
     *
     * @param ref Can be one of (a) a `State` instance, (b) an object that was passed
     *        into `$stateProvider.state()`, (c) the fully-qualified name of a state as a string.
     * @returns Returns `true` if `ref` matches the current `State` instance.
     */
    StateObject.prototype.is = function (ref) {
        return this === ref || this.self === ref || this.fqn() === ref;
    };
    /**
     * @deprecated this does not properly handle dot notation
     * @returns Returns a dot-separated name of the state.
     */
    StateObject.prototype.fqn = function () {
        if (!this.parent || !(this.parent instanceof this.constructor))
            return this.name;
        var name = this.parent.fqn();
        return name ? name + '.' + this.name : this.name;
    };
    /**
     * Returns the root node of this state's tree.
     *
     * @returns The root of this state's tree.
     */
    StateObject.prototype.root = function () {
        return (this.parent && this.parent.root()) || this;
    };
    /**
     * Gets the state's `Param` objects
     *
     * Gets the list of [[Param]] objects owned by the state.
     * If `opts.inherit` is true, it also includes the ancestor states' [[Param]] objects.
     * If `opts.matchingKeys` exists, returns only `Param`s whose `id` is a key on the `matchingKeys` object
     *
     * @param opts options
     */
    StateObject.prototype.parameters = function (opts) {
        opts = (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.defaults)(opts, { inherit: true, matchingKeys: null });
        var inherited = (opts.inherit && this.parent && this.parent.parameters()) || [];
        return inherited
            .concat((0,_common_common__WEBPACK_IMPORTED_MODULE_0__.values)(this.params))
            .filter(function (param) { return !opts.matchingKeys || opts.matchingKeys.hasOwnProperty(param.id); });
    };
    /**
     * Returns a single [[Param]] that is owned by the state
     *
     * If `opts.inherit` is true, it also searches the ancestor states` [[Param]]s.
     * @param id the name of the [[Param]] to return
     * @param opts options
     */
    StateObject.prototype.parameter = function (id, opts) {
        if (opts === void 0) { opts = {}; }
        return ((this.url && this.url.parameter(id, opts)) ||
            (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.find)((0,_common_common__WEBPACK_IMPORTED_MODULE_0__.values)(this.params), (0,_common_hof__WEBPACK_IMPORTED_MODULE_1__.propEq)('id', id)) ||
            (opts.inherit && this.parent && this.parent.parameter(id)));
    };
    StateObject.prototype.toString = function () {
        return this.fqn();
    };
    /** Predicate which returns true if the object is an class with @State() decorator */
    StateObject.isStateClass = function (stateDecl) {
        return (0,_common_predicates__WEBPACK_IMPORTED_MODULE_3__.isFunction)(stateDecl) && stateDecl['__uiRouterState'] === true;
    };
    /** Predicate which returns true if the object is a [[StateDeclaration]] object */
    StateObject.isStateDeclaration = function (obj) { return (0,_common_predicates__WEBPACK_IMPORTED_MODULE_3__.isFunction)(obj['$$state']); };
    /** Predicate which returns true if the object is an internal [[StateObject]] object */
    StateObject.isState = function (obj) { return (0,_common_predicates__WEBPACK_IMPORTED_MODULE_3__.isObject)(obj['__stateObjectCache']); };
    return StateObject;
}());

//# sourceMappingURL=stateObject.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/state/stateQueueManager.js":
/*!***********************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/state/stateQueueManager.js ***!
  \***********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StateQueueManager: () => (/* binding */ StateQueueManager)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/index.js");
/* harmony import */ var _stateObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stateObject */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/state/stateObject.js");


var StateQueueManager = /** @class */ (function () {
    function StateQueueManager(router, states, builder, listeners) {
        this.router = router;
        this.states = states;
        this.builder = builder;
        this.listeners = listeners;
        this.queue = [];
    }
    StateQueueManager.prototype.dispose = function () {
        this.queue = [];
    };
    StateQueueManager.prototype.register = function (stateDecl) {
        var queue = this.queue;
        var state = _stateObject__WEBPACK_IMPORTED_MODULE_1__.StateObject.create(stateDecl);
        var name = state.name;
        if (!(0,_common__WEBPACK_IMPORTED_MODULE_0__.isString)(name))
            throw new Error('State must have a valid name');
        if (this.states.hasOwnProperty(name) || (0,_common__WEBPACK_IMPORTED_MODULE_0__.inArray)(queue.map((0,_common__WEBPACK_IMPORTED_MODULE_0__.prop)('name')), name))
            throw new Error("State '" + name + "' is already defined");
        queue.push(state);
        this.flush();
        return state;
    };
    StateQueueManager.prototype.flush = function () {
        var _this = this;
        var _a = this, queue = _a.queue, states = _a.states, builder = _a.builder;
        var registered = [], // states that got registered
        orphans = [], // states that don't yet have a parent registered
        previousQueueLength = {}; // keep track of how long the queue when an orphan was first encountered
        var getState = function (name) { return _this.states.hasOwnProperty(name) && _this.states[name]; };
        var notifyListeners = function () {
            if (registered.length) {
                _this.listeners.forEach(function (listener) {
                    return listener('registered', registered.map(function (s) { return s.self; }));
                });
            }
        };
        while (queue.length > 0) {
            var state = queue.shift();
            var name_1 = state.name;
            var result = builder.build(state);
            var orphanIdx = orphans.indexOf(state);
            if (result) {
                var existingState = getState(name_1);
                if (existingState && existingState.name === name_1) {
                    throw new Error("State '" + name_1 + "' is already defined");
                }
                var existingFutureState = getState(name_1 + '.**');
                if (existingFutureState) {
                    // Remove future state of the same name
                    this.router.stateRegistry.deregister(existingFutureState);
                }
                states[name_1] = state;
                this.attachRoute(state);
                if (orphanIdx >= 0)
                    orphans.splice(orphanIdx, 1);
                registered.push(state);
                continue;
            }
            var prev = previousQueueLength[name_1];
            previousQueueLength[name_1] = queue.length;
            if (orphanIdx >= 0 && prev === queue.length) {
                // Wait until two consecutive iterations where no additional states were dequeued successfully.
                // throw new Error(`Cannot register orphaned state '${name}'`);
                queue.push(state);
                notifyListeners();
                return states;
            }
            else if (orphanIdx < 0) {
                orphans.push(state);
            }
            queue.push(state);
        }
        notifyListeners();
        return states;
    };
    StateQueueManager.prototype.attachRoute = function (state) {
        if (state.abstract || !state.url)
            return;
        var rulesApi = this.router.urlService.rules;
        rulesApi.rule(rulesApi.urlRuleFactory.create(state));
    };
    return StateQueueManager;
}());

//# sourceMappingURL=stateQueueManager.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/state/stateRegistry.js":
/*!*******************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/state/stateRegistry.js ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StateRegistry: () => (/* binding */ StateRegistry)
/* harmony export */ });
/* harmony import */ var _stateMatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stateMatcher */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/state/stateMatcher.js");
/* harmony import */ var _stateBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stateBuilder */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/state/stateBuilder.js");
/* harmony import */ var _stateQueueManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stateQueueManager */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/state/stateQueueManager.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/hof.js");





/**
 * A registry for all of the application's [[StateDeclaration]]s
 *
 * This API is found at `router.stateRegistry` ([[UIRouter.stateRegistry]])
 */
var StateRegistry = /** @class */ (function () {
    /** @internal */
    function StateRegistry(router) {
        this.router = router;
        this.states = {};
        /** @internal */
        this.listeners = [];
        this.matcher = new _stateMatcher__WEBPACK_IMPORTED_MODULE_0__.StateMatcher(this.states);
        this.builder = new _stateBuilder__WEBPACK_IMPORTED_MODULE_1__.StateBuilder(this.matcher, router.urlMatcherFactory);
        this.stateQueue = new _stateQueueManager__WEBPACK_IMPORTED_MODULE_2__.StateQueueManager(router, this.states, this.builder, this.listeners);
        this._registerRoot();
    }
    /** @internal */
    StateRegistry.prototype._registerRoot = function () {
        var rootStateDef = {
            name: '',
            url: '^',
            views: null,
            params: {
                '#': { value: null, type: 'hash', dynamic: true },
            },
            abstract: true,
        };
        var _root = (this._root = this.stateQueue.register(rootStateDef));
        _root.navigable = null;
    };
    /** @internal */
    StateRegistry.prototype.dispose = function () {
        var _this = this;
        this.stateQueue.dispose();
        this.listeners = [];
        this.get().forEach(function (state) { return _this.get(state) && _this.deregister(state); });
    };
    /**
     * Listen for a State Registry events
     *
     * Adds a callback that is invoked when states are registered or deregistered with the StateRegistry.
     *
     * #### Example:
     * ```js
     * let allStates = registry.get();
     *
     * // Later, invoke deregisterFn() to remove the listener
     * let deregisterFn = registry.onStatesChanged((event, states) => {
     *   switch(event) {
     *     case: 'registered':
     *       states.forEach(state => allStates.push(state));
     *       break;
     *     case: 'deregistered':
     *       states.forEach(state => {
     *         let idx = allStates.indexOf(state);
     *         if (idx !== -1) allStates.splice(idx, 1);
     *       });
     *       break;
     *   }
     * });
     * ```
     *
     * @param listener a callback function invoked when the registered states changes.
     *        The function receives two parameters, `event` and `state`.
     *        See [[StateRegistryListener]]
     * @return a function that deregisters the listener
     */
    StateRegistry.prototype.onStatesChanged = function (listener) {
        this.listeners.push(listener);
        return function deregisterListener() {
            (0,_common_common__WEBPACK_IMPORTED_MODULE_3__.removeFrom)(this.listeners)(listener);
        }.bind(this);
    };
    /**
     * Gets the implicit root state
     *
     * Gets the root of the state tree.
     * The root state is implicitly created by UI-Router.
     * Note: this returns the internal [[StateObject]] representation, not a [[StateDeclaration]]
     *
     * @return the root [[StateObject]]
     */
    StateRegistry.prototype.root = function () {
        return this._root;
    };
    /**
     * Adds a state to the registry
     *
     * Registers a [[StateDeclaration]] or queues it for registration.
     *
     * Note: a state will be queued if the state's parent isn't yet registered.
     *
     * @param stateDefinition the definition of the state to register.
     * @returns the internal [[StateObject]] object.
     *          If the state was successfully registered, then the object is fully built (See: [[StateBuilder]]).
     *          If the state was only queued, then the object is not fully built.
     */
    StateRegistry.prototype.register = function (stateDefinition) {
        return this.stateQueue.register(stateDefinition);
    };
    /** @internal */
    StateRegistry.prototype._deregisterTree = function (state) {
        var _this = this;
        var all = this.get().map(function (s) { return s.$$state(); });
        var getChildren = function (states) {
            var _children = all.filter(function (s) { return states.indexOf(s.parent) !== -1; });
            return _children.length === 0 ? _children : _children.concat(getChildren(_children));
        };
        var children = getChildren([state]);
        var deregistered = [state].concat(children).reverse();
        deregistered.forEach(function (_state) {
            var rulesApi = _this.router.urlService.rules;
            // Remove URL rule
            rulesApi
                .rules()
                .filter((0,_common_hof__WEBPACK_IMPORTED_MODULE_4__.propEq)('state', _state))
                .forEach(function (rule) { return rulesApi.removeRule(rule); });
            // Remove state from registry
            delete _this.states[_state.name];
        });
        return deregistered;
    };
    /**
     * Removes a state from the registry
     *
     * This removes a state from the registry.
     * If the state has children, they are are also removed from the registry.
     *
     * @param stateOrName the state's name or object representation
     * @returns {StateObject[]} a list of removed states
     */
    StateRegistry.prototype.deregister = function (stateOrName) {
        var _state = this.get(stateOrName);
        if (!_state)
            throw new Error("Can't deregister state; not found: " + stateOrName);
        var deregisteredStates = this._deregisterTree(_state.$$state());
        this.listeners.forEach(function (listener) {
            return listener('deregistered', deregisteredStates.map(function (s) { return s.self; }));
        });
        return deregisteredStates;
    };
    StateRegistry.prototype.get = function (stateOrName, base) {
        var _this = this;
        if (arguments.length === 0)
            return Object.keys(this.states).map(function (name) { return _this.states[name].self; });
        var found = this.matcher.find(stateOrName, base);
        return (found && found.self) || null;
    };
    /**
     * Registers a [[BuilderFunction]] for a specific [[StateObject]] property (e.g., `parent`, `url`, or `path`).
     * More than one BuilderFunction can be registered for a given property.
     *
     * The BuilderFunction(s) will be used to define the property on any subsequently built [[StateObject]] objects.
     *
     * @param property The name of the State property being registered for.
     * @param builderFunction The BuilderFunction which will be used to build the State property
     * @returns a function which deregisters the BuilderFunction
     */
    StateRegistry.prototype.decorator = function (property, builderFunction) {
        return this.builder.builder(property, builderFunction);
    };
    return StateRegistry;
}());

//# sourceMappingURL=stateRegistry.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/state/stateService.js":
/*!******************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/state/stateService.js ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StateService: () => (/* binding */ StateService)
/* harmony export */ });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _common_queue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/queue */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/queue.js");
/* harmony import */ var _common_coreservices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/coreservices */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/coreservices.js");
/* harmony import */ var _path_pathUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../path/pathUtils */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/path/pathUtils.js");
/* harmony import */ var _path_pathNode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../path/pathNode */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/path/pathNode.js");
/* harmony import */ var _transition_transitionService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../transition/transitionService */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/transition/transitionService.js");
/* harmony import */ var _transition_rejectFactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../transition/rejectFactory */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/transition/rejectFactory.js");
/* harmony import */ var _targetState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./targetState */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/state/targetState.js");
/* harmony import */ var _params_param__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../params/param */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/params/param.js");
/* harmony import */ var _common_glob__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/glob */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/glob.js");
/* harmony import */ var _resolve_resolveContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../resolve/resolveContext */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/resolve/resolveContext.js");
/* harmony import */ var _hooks_lazyLoad__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../hooks/lazyLoad */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/hooks/lazyLoad.js");
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/hof.js");














/**
 * Provides services related to ui-router states.
 *
 * This API is located at `router.stateService` ([[UIRouter.stateService]])
 */
var StateService = /** @class */ (function () {
    /** @internal */
    function StateService(/** @internal */ router) {
        this.router = router;
        /** @internal */
        this.invalidCallbacks = [];
        /** @internal */
        this._defaultErrorHandler = function $defaultErrorHandler($error$) {
            if ($error$ instanceof Error && $error$.stack) {
                console.error($error$);
                console.error($error$.stack);
            }
            else if ($error$ instanceof _transition_rejectFactory__WEBPACK_IMPORTED_MODULE_7__.Rejection) {
                console.error($error$.toString());
                if ($error$.detail && $error$.detail.stack)
                    console.error($error$.detail.stack);
            }
            else {
                console.error($error$);
            }
        };
        var getters = ['current', '$current', 'params', 'transition'];
        var boundFns = Object.keys(StateService.prototype).filter((0,_common_hof__WEBPACK_IMPORTED_MODULE_13__.not)((0,_common_common__WEBPACK_IMPORTED_MODULE_0__.inArray)(getters)));
        (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.createProxyFunctions)((0,_common_hof__WEBPACK_IMPORTED_MODULE_13__.val)(StateService.prototype), this, (0,_common_hof__WEBPACK_IMPORTED_MODULE_13__.val)(this), boundFns);
    }
    Object.defineProperty(StateService.prototype, "transition", {
        /**
         * The [[Transition]] currently in progress (or null)
         *
         * @deprecated This is a passthrough through to [[UIRouterGlobals.transition]]
         */
        get: function () {
            return this.router.globals.transition;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StateService.prototype, "params", {
        /**
         * The latest successful state parameters
         *
         * @deprecated This is a passthrough through to [[UIRouterGlobals.params]]
         */
        get: function () {
            return this.router.globals.params;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StateService.prototype, "current", {
        /**
         * The current [[StateDeclaration]]
         *
         * @deprecated This is a passthrough through to [[UIRouterGlobals.current]]
         */
        get: function () {
            return this.router.globals.current;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StateService.prototype, "$current", {
        /**
         * The current [[StateObject]] (an internal API)
         *
         * @deprecated This is a passthrough through to [[UIRouterGlobals.$current]]
         */
        get: function () {
            return this.router.globals.$current;
        },
        enumerable: false,
        configurable: true
    });
    /** @internal */
    StateService.prototype.dispose = function () {
        this.defaultErrorHandler(_common_common__WEBPACK_IMPORTED_MODULE_0__.noop);
        this.invalidCallbacks = [];
    };
    /**
     * Handler for when [[transitionTo]] is called with an invalid state.
     *
     * Invokes the [[onInvalid]] callbacks, in natural order.
     * Each callback's return value is checked in sequence until one of them returns an instance of TargetState.
     * The results of the callbacks are wrapped in $q.when(), so the callbacks may return promises.
     *
     * If a callback returns an TargetState, then it is used as arguments to $state.transitionTo() and the result returned.
     *
     * @internal
     */
    StateService.prototype._handleInvalidTargetState = function (fromPath, toState) {
        var _this = this;
        var fromState = _path_pathUtils__WEBPACK_IMPORTED_MODULE_4__.PathUtils.makeTargetState(this.router.stateRegistry, fromPath);
        var globals = this.router.globals;
        var latestThing = function () { return globals.transitionHistory.peekTail(); };
        var latest = latestThing();
        var callbackQueue = new _common_queue__WEBPACK_IMPORTED_MODULE_2__.Queue(this.invalidCallbacks.slice());
        var injector = new _resolve_resolveContext__WEBPACK_IMPORTED_MODULE_11__.ResolveContext(fromPath).injector();
        var checkForRedirect = function (result) {
            if (!(result instanceof _targetState__WEBPACK_IMPORTED_MODULE_8__.TargetState)) {
                return;
            }
            var target = result;
            // Recreate the TargetState, in case the state is now defined.
            target = _this.target(target.identifier(), target.params(), target.options());
            if (!target.valid()) {
                return _transition_rejectFactory__WEBPACK_IMPORTED_MODULE_7__.Rejection.invalid(target.error()).toPromise();
            }
            if (latestThing() !== latest) {
                return _transition_rejectFactory__WEBPACK_IMPORTED_MODULE_7__.Rejection.superseded().toPromise();
            }
            return _this.transitionTo(target.identifier(), target.params(), target.options());
        };
        function invokeNextCallback() {
            var nextCallback = callbackQueue.dequeue();
            if (nextCallback === undefined)
                return _transition_rejectFactory__WEBPACK_IMPORTED_MODULE_7__.Rejection.invalid(toState.error()).toPromise();
            var callbackResult = _common_coreservices__WEBPACK_IMPORTED_MODULE_3__.services.$q.when(nextCallback(toState, fromState, injector));
            return callbackResult.then(checkForRedirect).then(function (result) { return result || invokeNextCallback(); });
        }
        return invokeNextCallback();
    };
    /**
     * Registers an Invalid State handler
     *
     * Registers a [[OnInvalidCallback]] function to be invoked when [[StateService.transitionTo]]
     * has been called with an invalid state reference parameter
     *
     * Example:
     * ```js
     * stateService.onInvalid(function(to, from, injector) {
     *   if (to.name() === 'foo') {
     *     let lazyLoader = injector.get('LazyLoadService');
     *     return lazyLoader.load('foo')
     *         .then(() => stateService.target('foo'));
     *   }
     * });
     * ```
     *
     * @param {function} callback invoked when the toState is invalid
     *   This function receives the (invalid) toState, the fromState, and an injector.
     *   The function may optionally return a [[TargetState]] or a Promise for a TargetState.
     *   If one is returned, it is treated as a redirect.
     *
     * @returns a function which deregisters the callback
     */
    StateService.prototype.onInvalid = function (callback) {
        this.invalidCallbacks.push(callback);
        return function deregisterListener() {
            (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.removeFrom)(this.invalidCallbacks)(callback);
        }.bind(this);
    };
    /**
     * Reloads the current state
     *
     * A method that force reloads the current state, or a partial state hierarchy.
     * All resolves are re-resolved, and components reinstantiated.
     *
     * #### Example:
     * ```js
     * let app angular.module('app', ['ui.router']);
     *
     * app.controller('ctrl', function ($scope, $state) {
     *   $scope.reload = function(){
     *     $state.reload();
     *   }
     * });
     * ```
     *
     * Note: `reload()` is just an alias for:
     *
     * ```js
     * $state.transitionTo($state.current, $state.params, {
     *   reload: true, inherit: false
     * });
     * ```
     *
     * @param reloadState A state name or a state object.
     *    If present, this state and all its children will be reloaded, but ancestors will not reload.
     *
     * #### Example:
     * ```js
     * //assuming app application consists of 3 states: 'contacts', 'contacts.detail', 'contacts.detail.item'
     * //and current state is 'contacts.detail.item'
     * let app angular.module('app', ['ui.router']);
     *
     * app.controller('ctrl', function ($scope, $state) {
     *   $scope.reload = function(){
     *     //will reload 'contact.detail' and nested 'contact.detail.item' states
     *     $state.reload('contact.detail');
     *   }
     * });
     * ```
     *
     * @returns A promise representing the state of the new transition. See [[StateService.go]]
     */
    StateService.prototype.reload = function (reloadState) {
        return this.transitionTo(this.current, this.params, {
            reload: (0,_common_predicates__WEBPACK_IMPORTED_MODULE_1__.isDefined)(reloadState) ? reloadState : true,
            inherit: false,
            notify: false,
        });
    };
    /**
     * Transition to a different state and/or parameters
     *
     * Convenience method for transitioning to a new state.
     *
     * `$state.go` calls `$state.transitionTo` internally but automatically sets options to
     * `{ location: true, inherit: true, relative: router.globals.$current, notify: true }`.
     * This allows you to use either an absolute or relative `to` argument (because of `relative: router.globals.$current`).
     * It also allows you to specify * only the parameters you'd like to update, while letting unspecified parameters
     * inherit from the current parameter values (because of `inherit: true`).
     *
     * #### Example:
     * ```js
     * let app = angular.module('app', ['ui.router']);
     *
     * app.controller('ctrl', function ($scope, $state) {
     *   $scope.changeState = function () {
     *     $state.go('contact.detail');
     *   };
     * });
     * ```
     *
     * @param to Absolute state name, state object, or relative state path (relative to current state).
     *
     * Some examples:
     *
     * - `$state.go('contact.detail')` - will go to the `contact.detail` state
     * - `$state.go('^')` - will go to the parent state
     * - `$state.go('^.sibling')` - if current state is `home.child`, will go to the `home.sibling` state
     * - `$state.go('.child.grandchild')` - if current state is home, will go to the `home.child.grandchild` state
     *
     * @param params A map of the parameters that will be sent to the state, will populate $stateParams.
     *
     *    Any parameters that are not specified will be inherited from current parameter values (because of `inherit: true`).
     *    This allows, for example, going to a sibling state that shares parameters defined by a parent state.
     *
     * @param options Transition options
     *
     * @returns {promise} A promise representing the state of the new transition.
     */
    StateService.prototype.go = function (to, params, options) {
        var defautGoOpts = { relative: this.$current, inherit: true };
        var transOpts = (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.defaults)(options, defautGoOpts, _transition_transitionService__WEBPACK_IMPORTED_MODULE_6__.defaultTransOpts);
        return this.transitionTo(to, params, transOpts);
    };
    /**
     * Creates a [[TargetState]]
     *
     * This is a factory method for creating a TargetState
     *
     * This may be returned from a Transition Hook to redirect a transition, for example.
     */
    StateService.prototype.target = function (identifier, params, options) {
        if (options === void 0) { options = {}; }
        // If we're reloading, find the state object to reload from
        if ((0,_common_predicates__WEBPACK_IMPORTED_MODULE_1__.isObject)(options.reload) && !options.reload.name)
            throw new Error('Invalid reload state object');
        var reg = this.router.stateRegistry;
        options.reloadState =
            options.reload === true ? reg.root() : reg.matcher.find(options.reload, options.relative);
        if (options.reload && !options.reloadState)
            throw new Error("No such reload state '" + ((0,_common_predicates__WEBPACK_IMPORTED_MODULE_1__.isString)(options.reload) ? options.reload : options.reload.name) + "'");
        return new _targetState__WEBPACK_IMPORTED_MODULE_8__.TargetState(this.router.stateRegistry, identifier, params, options);
    };
    /** @internal */
    StateService.prototype.getCurrentPath = function () {
        var _this = this;
        var globals = this.router.globals;
        var latestSuccess = globals.successfulTransitions.peekTail();
        var rootPath = function () { return [new _path_pathNode__WEBPACK_IMPORTED_MODULE_5__.PathNode(_this.router.stateRegistry.root())]; };
        return latestSuccess ? latestSuccess.treeChanges().to : rootPath();
    };
    /**
     * Low-level method for transitioning to a new state.
     *
     * The [[go]] method (which uses `transitionTo` internally) is recommended in most situations.
     *
     * #### Example:
     * ```js
     * let app = angular.module('app', ['ui.router']);
     *
     * app.controller('ctrl', function ($scope, $state) {
     *   $scope.changeState = function () {
     *     $state.transitionTo('contact.detail');
     *   };
     * });
     * ```
     *
     * @param to State name or state object.
     * @param toParams A map of the parameters that will be sent to the state,
     *      will populate $stateParams.
     * @param options Transition options
     *
     * @returns A promise representing the state of the new transition. See [[go]]
     */
    StateService.prototype.transitionTo = function (to, toParams, options) {
        var _this = this;
        if (toParams === void 0) { toParams = {}; }
        if (options === void 0) { options = {}; }
        var router = this.router;
        var globals = router.globals;
        options = (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.defaults)(options, _transition_transitionService__WEBPACK_IMPORTED_MODULE_6__.defaultTransOpts);
        var getCurrent = function () { return globals.transition; };
        options = (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.extend)(options, { current: getCurrent });
        var ref = this.target(to, toParams, options);
        var currentPath = this.getCurrentPath();
        if (!ref.exists())
            return this._handleInvalidTargetState(currentPath, ref);
        if (!ref.valid())
            return (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.silentRejection)(ref.error());
        if (options.supercede === false && getCurrent()) {
            return (_transition_rejectFactory__WEBPACK_IMPORTED_MODULE_7__.Rejection.ignored('Another transition is in progress and supercede has been set to false in TransitionOptions for the transition. So the transition was ignored in favour of the existing one in progress.').toPromise());
        }
        /**
         * Special handling for Ignored, Aborted, and Redirected transitions
         *
         * The semantics for the transition.run() promise and the StateService.transitionTo()
         * promise differ. For instance, the run() promise may be rejected because it was
         * IGNORED, but the transitionTo() promise is resolved because from the user perspective
         * no error occurred.  Likewise, the transition.run() promise may be rejected because of
         * a Redirect, but the transitionTo() promise is chained to the new Transition's promise.
         */
        var rejectedTransitionHandler = function (trans) { return function (error) {
            if (error instanceof _transition_rejectFactory__WEBPACK_IMPORTED_MODULE_7__.Rejection) {
                var isLatest = router.globals.lastStartedTransitionId <= trans.$id;
                if (error.type === _transition_rejectFactory__WEBPACK_IMPORTED_MODULE_7__.RejectType.IGNORED) {
                    isLatest && router.urlRouter.update();
                    // Consider ignored `Transition.run()` as a successful `transitionTo`
                    return _common_coreservices__WEBPACK_IMPORTED_MODULE_3__.services.$q.when(globals.current);
                }
                var detail = error.detail;
                if (error.type === _transition_rejectFactory__WEBPACK_IMPORTED_MODULE_7__.RejectType.SUPERSEDED && error.redirected && detail instanceof _targetState__WEBPACK_IMPORTED_MODULE_8__.TargetState) {
                    // If `Transition.run()` was redirected, allow the `transitionTo()` promise to resolve successfully
                    // by returning the promise for the new (redirect) `Transition.run()`.
                    var redirect = trans.redirect(detail);
                    return redirect.run().catch(rejectedTransitionHandler(redirect));
                }
                if (error.type === _transition_rejectFactory__WEBPACK_IMPORTED_MODULE_7__.RejectType.ABORTED) {
                    isLatest && router.urlRouter.update();
                    return _common_coreservices__WEBPACK_IMPORTED_MODULE_3__.services.$q.reject(error);
                }
            }
            var errorHandler = _this.defaultErrorHandler();
            errorHandler(error);
            return _common_coreservices__WEBPACK_IMPORTED_MODULE_3__.services.$q.reject(error);
        }; };
        var transition = this.router.transitionService.create(currentPath, ref);
        var transitionToPromise = transition.run().catch(rejectedTransitionHandler(transition));
        (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.silenceUncaughtInPromise)(transitionToPromise); // issue #2676
        // Return a promise for the transition, which also has the transition object on it.
        return (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.extend)(transitionToPromise, { transition: transition });
    };
    /**
     * Checks if the current state *is* the provided state
     *
     * Similar to [[includes]] but only checks for the full state name.
     * If params is supplied then it will be tested for strict equality against the current
     * active params object, so all params must match with none missing and no extras.
     *
     * #### Example:
     * ```js
     * $state.$current.name = 'contacts.details.item';
     *
     * // absolute name
     * $state.is('contact.details.item'); // returns true
     * $state.is(contactDetailItemStateObject); // returns true
     * ```
     *
     * // relative name (. and ^), typically from a template
     * // E.g. from the 'contacts.details' template
     * ```html
     * <div ng-class="{highlighted: $state.is('.item')}">Item</div>
     * ```
     *
     * @param stateOrName The state name (absolute or relative) or state object you'd like to check.
     * @param params A param object, e.g. `{sectionId: section.id}`, that you'd like
     * to test against the current active state.
     * @param options An options object. The options are:
     *   - `relative`: If `stateOrName` is a relative state name and `options.relative` is set, .is will
     *     test relative to `options.relative` state (or name).
     *
     * @returns Returns true if it is the state.
     */
    StateService.prototype.is = function (stateOrName, params, options) {
        options = (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.defaults)(options, { relative: this.$current });
        var state = this.router.stateRegistry.matcher.find(stateOrName, options.relative);
        if (!(0,_common_predicates__WEBPACK_IMPORTED_MODULE_1__.isDefined)(state))
            return undefined;
        if (this.$current !== state)
            return false;
        if (!params)
            return true;
        var schema = state.parameters({ inherit: true, matchingKeys: params });
        return _params_param__WEBPACK_IMPORTED_MODULE_9__.Param.equals(schema, _params_param__WEBPACK_IMPORTED_MODULE_9__.Param.values(schema, params), this.params);
    };
    /**
     * Checks if the current state *includes* the provided state
     *
     * A method to determine if the current active state is equal to or is the child of the
     * state stateName. If any params are passed then they will be tested for a match as well.
     * Not all the parameters need to be passed, just the ones you'd like to test for equality.
     *
     * #### Example when `$state.$current.name === 'contacts.details.item'`
     * ```js
     * // Using partial names
     * $state.includes("contacts"); // returns true
     * $state.includes("contacts.details"); // returns true
     * $state.includes("contacts.details.item"); // returns true
     * $state.includes("contacts.list"); // returns false
     * $state.includes("about"); // returns false
     * ```
     *
     * #### Glob Examples when `* $state.$current.name === 'contacts.details.item.url'`:
     * ```js
     * $state.includes("*.details.*.*"); // returns true
     * $state.includes("*.details.**"); // returns true
     * $state.includes("**.item.**"); // returns true
     * $state.includes("*.details.item.url"); // returns true
     * $state.includes("*.details.*.url"); // returns true
     * $state.includes("*.details.*"); // returns false
     * $state.includes("item.**"); // returns false
     * ```
     *
     * @param stateOrName A partial name, relative name, glob pattern,
     *   or state object to be searched for within the current state name.
     * @param params A param object, e.g. `{sectionId: section.id}`,
     *   that you'd like to test against the current active state.
     * @param options An options object. The options are:
     *   - `relative`: If `stateOrName` is a relative state name and `options.relative` is set, .is will
     *     test relative to `options.relative` state (or name).
     *
     * @returns {boolean} Returns true if it does include the state
     */
    StateService.prototype.includes = function (stateOrName, params, options) {
        options = (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.defaults)(options, { relative: this.$current });
        var glob = (0,_common_predicates__WEBPACK_IMPORTED_MODULE_1__.isString)(stateOrName) && _common_glob__WEBPACK_IMPORTED_MODULE_10__.Glob.fromString(stateOrName);
        if (glob) {
            if (!glob.matches(this.$current.name))
                return false;
            stateOrName = this.$current.name;
        }
        var state = this.router.stateRegistry.matcher.find(stateOrName, options.relative), include = this.$current.includes;
        if (!(0,_common_predicates__WEBPACK_IMPORTED_MODULE_1__.isDefined)(state))
            return undefined;
        if (!(0,_common_predicates__WEBPACK_IMPORTED_MODULE_1__.isDefined)(include[state.name]))
            return false;
        if (!params)
            return true;
        var schema = state.parameters({ inherit: true, matchingKeys: params });
        return _params_param__WEBPACK_IMPORTED_MODULE_9__.Param.equals(schema, _params_param__WEBPACK_IMPORTED_MODULE_9__.Param.values(schema, params), this.params);
    };
    /**
     * Generates a URL for a state and parameters
     *
     * Returns the url for the given state populated with the given params.
     *
     * #### Example:
     * ```js
     * expect($state.href("about.person", { person: "bob" })).toEqual("/about/bob");
     * ```
     *
     * @param stateOrName The state name or state object you'd like to generate a url from.
     * @param params An object of parameter values to fill the state's required parameters.
     * @param options Options object. The options are:
     *
     * @returns {string} compiled state url
     */
    StateService.prototype.href = function (stateOrName, params, options) {
        var defaultHrefOpts = {
            lossy: true,
            inherit: true,
            absolute: false,
            relative: this.$current,
        };
        options = (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.defaults)(options, defaultHrefOpts);
        params = params || {};
        var state = this.router.stateRegistry.matcher.find(stateOrName, options.relative);
        if (!(0,_common_predicates__WEBPACK_IMPORTED_MODULE_1__.isDefined)(state))
            return null;
        if (options.inherit)
            params = this.params.$inherit(params, this.$current, state);
        var nav = state && options.lossy ? state.navigable : state;
        if (!nav || nav.url === undefined || nav.url === null) {
            return null;
        }
        return this.router.urlRouter.href(nav.url, params, { absolute: options.absolute });
    };
    /**
     * Sets or gets the default [[transitionTo]] error handler.
     *
     * The error handler is called when a [[Transition]] is rejected or when any error occurred during the Transition.
     * This includes errors caused by resolves and transition hooks.
     *
     * Note:
     * This handler does not receive certain Transition rejections.
     * Redirected and Ignored Transitions are not considered to be errors by [[StateService.transitionTo]].
     *
     * The built-in default error handler logs the error to the console.
     *
     * You can provide your own custom handler.
     *
     * #### Example:
     * ```js
     * stateService.defaultErrorHandler(function() {
     *   // Do not log transitionTo errors
     * });
     * ```
     *
     * @param handler a global error handler function
     * @returns the current global error handler
     */
    StateService.prototype.defaultErrorHandler = function (handler) {
        return (this._defaultErrorHandler = handler || this._defaultErrorHandler);
    };
    StateService.prototype.get = function (stateOrName, base) {
        var reg = this.router.stateRegistry;
        if (arguments.length === 0)
            return reg.get();
        return reg.get(stateOrName, base || this.$current);
    };
    /**
     * Lazy loads a state
     *
     * Explicitly runs a state's [[StateDeclaration.lazyLoad]] function.
     *
     * @param stateOrName the state that should be lazy loaded
     * @param transition the optional Transition context to use (if the lazyLoad function requires an injector, etc)
     * Note: If no transition is provided, a noop transition is created using the from the current state to the current state.
     * This noop transition is not actually run.
     *
     * @returns a promise to lazy load
     */
    StateService.prototype.lazyLoad = function (stateOrName, transition) {
        var state = this.get(stateOrName);
        if (!state || !state.lazyLoad)
            throw new Error('Can not lazy load ' + stateOrName);
        var currentPath = this.getCurrentPath();
        var target = _path_pathUtils__WEBPACK_IMPORTED_MODULE_4__.PathUtils.makeTargetState(this.router.stateRegistry, currentPath);
        transition = transition || this.router.transitionService.create(currentPath, target);
        return (0,_hooks_lazyLoad__WEBPACK_IMPORTED_MODULE_12__.lazyLoadState)(transition, state);
    };
    return StateService;
}());

//# sourceMappingURL=stateService.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/state/targetState.js":
/*!*****************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/state/targetState.js ***!
  \*****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TargetState: () => (/* binding */ TargetState)
/* harmony export */ });
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _common_strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/strings */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/strings.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/index.js");



/**
 * Encapsulate the target (destination) state/params/options of a [[Transition]].
 *
 * This class is frequently used to redirect a transition to a new destination.
 *
 * See:
 *
 * - [[HookResult]]
 * - [[TransitionHookFn]]
 * - [[TransitionService.onStart]]
 *
 * To create a `TargetState`, use [[StateService.target]].
 *
 * ---
 *
 * This class wraps:
 *
 * 1) an identifier for a state
 * 2) a set of parameters
 * 3) and transition options
 * 4) the registered state object (the [[StateDeclaration]])
 *
 * Many UI-Router APIs such as [[StateService.go]] take a [[StateOrName]] argument which can
 * either be a *state object* (a [[StateDeclaration]] or [[StateObject]]) or a *state name* (a string).
 * The `TargetState` class normalizes those options.
 *
 * A `TargetState` may be valid (the state being targeted exists in the registry)
 * or invalid (the state being targeted is not registered).
 */
var TargetState = /** @class */ (function () {
    /**
     * The TargetState constructor
     *
     * Note: Do not construct a `TargetState` manually.
     * To create a `TargetState`, use the [[StateService.target]] factory method.
     *
     * @param _stateRegistry The StateRegistry to use to look up the _definition
     * @param _identifier An identifier for a state.
     *    Either a fully-qualified state name, or the object used to define the state.
     * @param _params Parameters for the target state
     * @param _options Transition options.
     *
     * @internal
     */
    function TargetState(_stateRegistry, _identifier, _params, _options) {
        this._stateRegistry = _stateRegistry;
        this._identifier = _identifier;
        this._identifier = _identifier;
        this._params = (0,_common__WEBPACK_IMPORTED_MODULE_2__.extend)({}, _params || {});
        this._options = (0,_common__WEBPACK_IMPORTED_MODULE_2__.extend)({}, _options || {});
        this._definition = _stateRegistry.matcher.find(_identifier, this._options.relative);
    }
    /** The name of the state this object targets */
    TargetState.prototype.name = function () {
        return (this._definition && this._definition.name) || this._identifier;
    };
    /** The identifier used when creating this TargetState */
    TargetState.prototype.identifier = function () {
        return this._identifier;
    };
    /** The target parameter values */
    TargetState.prototype.params = function () {
        return this._params;
    };
    /** The internal state object (if it was found) */
    TargetState.prototype.$state = function () {
        return this._definition;
    };
    /** The internal state declaration (if it was found) */
    TargetState.prototype.state = function () {
        return this._definition && this._definition.self;
    };
    /** The target options */
    TargetState.prototype.options = function () {
        return this._options;
    };
    /** True if the target state was found */
    TargetState.prototype.exists = function () {
        return !!(this._definition && this._definition.self);
    };
    /** True if the object is valid */
    TargetState.prototype.valid = function () {
        return !this.error();
    };
    /** If the object is invalid, returns the reason why */
    TargetState.prototype.error = function () {
        var base = this.options().relative;
        if (!this._definition && !!base) {
            var stateName = base.name ? base.name : base;
            return "Could not resolve '" + this.name() + "' from state '" + stateName + "'";
        }
        if (!this._definition)
            return "No such state '" + this.name() + "'";
        if (!this._definition.self)
            return "State '" + this.name() + "' has an invalid definition";
    };
    TargetState.prototype.toString = function () {
        return "'" + this.name() + "'" + (0,_common_strings__WEBPACK_IMPORTED_MODULE_1__.stringify)(this.params());
    };
    /**
     * Returns a copy of this TargetState which targets a different state.
     * The new TargetState has the same parameter values and transition options.
     *
     * @param state The new state that should be targeted
     */
    TargetState.prototype.withState = function (state) {
        return new TargetState(this._stateRegistry, state, this._params, this._options);
    };
    /**
     * Returns a copy of this TargetState, using the specified parameter values.
     *
     * @param params the new parameter values to use
     * @param replace When false (default) the new parameter values will be merged with the current values.
     *                When true the parameter values will be used instead of the current values.
     */
    TargetState.prototype.withParams = function (params, replace) {
        if (replace === void 0) { replace = false; }
        var newParams = replace ? params : (0,_common__WEBPACK_IMPORTED_MODULE_2__.extend)({}, this._params, params);
        return new TargetState(this._stateRegistry, this._identifier, newParams, this._options);
    };
    /**
     * Returns a copy of this TargetState, using the specified Transition Options.
     *
     * @param options the new options to use
     * @param replace When false (default) the new options will be merged with the current options.
     *                When true the options will be used instead of the current options.
     */
    TargetState.prototype.withOptions = function (options, replace) {
        if (replace === void 0) { replace = false; }
        var newOpts = replace ? options : (0,_common__WEBPACK_IMPORTED_MODULE_2__.extend)({}, this._options, options);
        return new TargetState(this._stateRegistry, this._identifier, this._params, newOpts);
    };
    /** Returns true if the object has a state property that might be a state or state name */
    TargetState.isDef = function (obj) {
        return obj && obj.state && ((0,_common_predicates__WEBPACK_IMPORTED_MODULE_0__.isString)(obj.state) || ((0,_common_predicates__WEBPACK_IMPORTED_MODULE_0__.isObject)(obj.state) && (0,_common_predicates__WEBPACK_IMPORTED_MODULE_0__.isString)(obj.state.name)));
    };
    return TargetState;
}());

//# sourceMappingURL=targetState.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/transition/hookBuilder.js":
/*!**********************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/transition/hookBuilder.js ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HookBuilder: () => (/* binding */ HookBuilder)
/* harmony export */ });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interface */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/transition/interface.js");
/* harmony import */ var _transitionHook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transitionHook */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/transition/transitionHook.js");




/**
 * This class returns applicable TransitionHooks for a specific Transition instance.
 *
 * Hooks ([[RegisteredHook]]) may be registered globally, e.g., $transitions.onEnter(...), or locally, e.g.
 * myTransition.onEnter(...).  The HookBuilder finds matching RegisteredHooks (where the match criteria is
 * determined by the type of hook)
 *
 * The HookBuilder also converts RegisteredHooks objects to TransitionHook objects, which are used to run a Transition.
 *
 * The HookBuilder constructor is given the $transitions service and a Transition instance.  Thus, a HookBuilder
 * instance may only be used for one specific Transition object. (side note: the _treeChanges accessor is private
 * in the Transition class, so we must also provide the Transition's _treeChanges)
 */
var HookBuilder = /** @class */ (function () {
    function HookBuilder(transition) {
        this.transition = transition;
    }
    HookBuilder.prototype.buildHooksForPhase = function (phase) {
        var _this = this;
        var $transitions = this.transition.router.transitionService;
        return $transitions._pluginapi
            ._getEvents(phase)
            .map(function (type) { return _this.buildHooks(type); })
            .reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__.unnestR, [])
            .filter(_common_common__WEBPACK_IMPORTED_MODULE_0__.identity);
    };
    /**
     * Returns an array of newly built TransitionHook objects.
     *
     * - Finds all RegisteredHooks registered for the given `hookType` which matched the transition's [[TreeChanges]].
     * - Finds [[PathNode]] (or `PathNode[]`) to use as the TransitionHook context(s)
     * - For each of the [[PathNode]]s, creates a TransitionHook
     *
     * @param hookType the type of the hook registration function, e.g., 'onEnter', 'onFinish'.
     */
    HookBuilder.prototype.buildHooks = function (hookType) {
        var transition = this.transition;
        var treeChanges = transition.treeChanges();
        // Find all the matching registered hooks for a given hook type
        var matchingHooks = this.getMatchingHooks(hookType, treeChanges, transition);
        if (!matchingHooks)
            return [];
        var baseHookOptions = {
            transition: transition,
            current: transition.options().current,
        };
        var makeTransitionHooks = function (hook) {
            // Fetch the Nodes that caused this hook to match.
            var matches = hook.matches(treeChanges, transition);
            // Select the PathNode[] that will be used as TransitionHook context objects
            var matchingNodes = matches[hookType.criteriaMatchPath.name];
            // Return an array of HookTuples
            return matchingNodes.map(function (node) {
                var _options = (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.extend)({
                    bind: hook.bind,
                    traceData: { hookType: hookType.name, context: node },
                }, baseHookOptions);
                var state = hookType.criteriaMatchPath.scope === _interface__WEBPACK_IMPORTED_MODULE_2__.TransitionHookScope.STATE ? node.state.self : null;
                var transitionHook = new _transitionHook__WEBPACK_IMPORTED_MODULE_3__.TransitionHook(transition, state, hook, _options);
                return { hook: hook, node: node, transitionHook: transitionHook };
            });
        };
        return matchingHooks
            .map(makeTransitionHooks)
            .reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__.unnestR, [])
            .sort(tupleSort(hookType.reverseSort))
            .map(function (tuple) { return tuple.transitionHook; });
    };
    /**
     * Finds all RegisteredHooks from:
     * - The Transition object instance hook registry
     * - The TransitionService ($transitions) global hook registry
     *
     * which matched:
     * - the eventType
     * - the matchCriteria (to, from, exiting, retained, entering)
     *
     * @returns an array of matched [[RegisteredHook]]s
     */
    HookBuilder.prototype.getMatchingHooks = function (hookType, treeChanges, transition) {
        var isCreate = hookType.hookPhase === _interface__WEBPACK_IMPORTED_MODULE_2__.TransitionHookPhase.CREATE;
        // Instance and Global hook registries
        var $transitions = this.transition.router.transitionService;
        var registries = isCreate ? [$transitions] : [this.transition, $transitions];
        return registries
            .map(function (reg) { return reg.getHooks(hookType.name); }) // Get named hooks from registries
            .filter((0,_common_common__WEBPACK_IMPORTED_MODULE_0__.assertPredicate)(_common_predicates__WEBPACK_IMPORTED_MODULE_1__.isArray, "broken event named: " + hookType.name)) // Sanity check
            .reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__.unnestR, []) // Un-nest RegisteredHook[][] to RegisteredHook[] array
            .filter(function (hook) { return hook.matches(treeChanges, transition); }); // Only those satisfying matchCriteria
    };
    return HookBuilder;
}());

/**
 * A factory for a sort function for HookTuples.
 *
 * The sort function first compares the PathNode depth (how deep in the state tree a node is), then compares
 * the EventHook priority.
 *
 * @param reverseDepthSort a boolean, when true, reverses the sort order for the node depth
 * @returns a tuple sort function
 */
function tupleSort(reverseDepthSort) {
    if (reverseDepthSort === void 0) { reverseDepthSort = false; }
    return function nodeDepthThenPriority(l, r) {
        var factor = reverseDepthSort ? -1 : 1;
        var depthDelta = (l.node.state.path.length - r.node.state.path.length) * factor;
        return depthDelta !== 0 ? depthDelta : r.hook.priority - l.hook.priority;
    };
}
//# sourceMappingURL=hookBuilder.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/transition/hookRegistry.js":
/*!***********************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/transition/hookRegistry.js ***!
  \***********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisteredHook: () => (/* binding */ RegisteredHook),
/* harmony export */   makeEvent: () => (/* binding */ makeEvent),
/* harmony export */   matchState: () => (/* binding */ matchState)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/index.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interface */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/transition/interface.js");


/**
 * Determines if the given state matches the matchCriteria
 *
 * @internal
 *
 * @param state a State Object to test against
 * @param criterion
 * - If a string, matchState uses the string as a glob-matcher against the state name
 * - If an array (of strings), matchState uses each string in the array as a glob-matchers against the state name
 *   and returns a positive match if any of the globs match.
 * - If a function, matchState calls the function with the state and returns true if the function's result is truthy.
 * @returns {boolean}
 */
function matchState(state, criterion, transition) {
    var toMatch = (0,_common__WEBPACK_IMPORTED_MODULE_0__.isString)(criterion) ? [criterion] : criterion;
    function matchGlobs(_state) {
        var globStrings = toMatch;
        for (var i = 0; i < globStrings.length; i++) {
            var glob = new _common__WEBPACK_IMPORTED_MODULE_0__.Glob(globStrings[i]);
            if ((glob && glob.matches(_state.name)) || (!glob && globStrings[i] === _state.name)) {
                return true;
            }
        }
        return false;
    }
    var matchFn = ((0,_common__WEBPACK_IMPORTED_MODULE_0__.isFunction)(toMatch) ? toMatch : matchGlobs);
    return !!matchFn(state, transition);
}
/**
 * The registration data for a registered transition hook
 */
var RegisteredHook = /** @class */ (function () {
    function RegisteredHook(tranSvc, eventType, callback, matchCriteria, removeHookFromRegistry, options) {
        if (options === void 0) { options = {}; }
        this.tranSvc = tranSvc;
        this.eventType = eventType;
        this.callback = callback;
        this.matchCriteria = matchCriteria;
        this.removeHookFromRegistry = removeHookFromRegistry;
        this.invokeCount = 0;
        this._deregistered = false;
        this.priority = options.priority || 0;
        this.bind = options.bind || null;
        this.invokeLimit = options.invokeLimit;
    }
    /**
     * Gets the matching [[PathNode]]s
     *
     * Given an array of [[PathNode]]s, and a [[HookMatchCriterion]], returns an array containing
     * the [[PathNode]]s that the criteria matches, or `null` if there were no matching nodes.
     *
     * Returning `null` is significant to distinguish between the default
     * "match-all criterion value" of `true` compared to a `() => true` function,
     * when the nodes is an empty array.
     *
     * This is useful to allow a transition match criteria of `entering: true`
     * to still match a transition, even when `entering === []`.  Contrast that
     * with `entering: (state) => true` which only matches when a state is actually
     * being entered.
     */
    RegisteredHook.prototype._matchingNodes = function (nodes, criterion, transition) {
        if (criterion === true)
            return nodes;
        var matching = nodes.filter(function (node) { return matchState(node.state, criterion, transition); });
        return matching.length ? matching : null;
    };
    /**
     * Gets the default match criteria (all `true`)
     *
     * Returns an object which has all the criteria match paths as keys and `true` as values, i.e.:
     *
     * ```js
     * {
     *   to: true,
     *   from: true,
     *   entering: true,
     *   exiting: true,
     *   retained: true,
     * }
     */
    RegisteredHook.prototype._getDefaultMatchCriteria = function () {
        return (0,_common__WEBPACK_IMPORTED_MODULE_0__.mapObj)(this.tranSvc._pluginapi._getPathTypes(), function () { return true; });
    };
    /**
     * Gets matching nodes as [[IMatchingNodes]]
     *
     * Create a IMatchingNodes object from the TransitionHookTypes that is roughly equivalent to:
     *
     * ```js
     * let matches: IMatchingNodes = {
     *   to:       _matchingNodes([tail(treeChanges.to)],   mc.to),
     *   from:     _matchingNodes([tail(treeChanges.from)], mc.from),
     *   exiting:  _matchingNodes(treeChanges.exiting,      mc.exiting),
     *   retained: _matchingNodes(treeChanges.retained,     mc.retained),
     *   entering: _matchingNodes(treeChanges.entering,     mc.entering),
     * };
     * ```
     */
    RegisteredHook.prototype._getMatchingNodes = function (treeChanges, transition) {
        var _this = this;
        var criteria = (0,_common__WEBPACK_IMPORTED_MODULE_0__.extend)(this._getDefaultMatchCriteria(), this.matchCriteria);
        var paths = (0,_common__WEBPACK_IMPORTED_MODULE_0__.values)(this.tranSvc._pluginapi._getPathTypes());
        return paths.reduce(function (mn, pathtype) {
            // STATE scope criteria matches against every node in the path.
            // TRANSITION scope criteria matches against only the last node in the path
            var isStateHook = pathtype.scope === _interface__WEBPACK_IMPORTED_MODULE_1__.TransitionHookScope.STATE;
            var path = treeChanges[pathtype.name] || [];
            var nodes = isStateHook ? path : [(0,_common__WEBPACK_IMPORTED_MODULE_0__.tail)(path)];
            mn[pathtype.name] = _this._matchingNodes(nodes, criteria[pathtype.name], transition);
            return mn;
        }, {});
    };
    /**
     * Determines if this hook's [[matchCriteria]] match the given [[TreeChanges]]
     *
     * @returns an IMatchingNodes object, or null. If an IMatchingNodes object is returned, its values
     * are the matching [[PathNode]]s for each [[HookMatchCriterion]] (to, from, exiting, retained, entering)
     */
    RegisteredHook.prototype.matches = function (treeChanges, transition) {
        var matches = this._getMatchingNodes(treeChanges, transition);
        // Check if all the criteria matched the TreeChanges object
        var allMatched = (0,_common__WEBPACK_IMPORTED_MODULE_0__.values)(matches).every(_common__WEBPACK_IMPORTED_MODULE_0__.identity);
        return allMatched ? matches : null;
    };
    RegisteredHook.prototype.deregister = function () {
        this.removeHookFromRegistry(this);
        this._deregistered = true;
    };
    return RegisteredHook;
}());

/** Return a registration function of the requested type. */
function makeEvent(registry, transitionService, eventType) {
    // Create the object which holds the registered transition hooks.
    var _registeredHooks = (registry._registeredHooks = registry._registeredHooks || {});
    var hooks = (_registeredHooks[eventType.name] = []);
    var removeHookFn = (0,_common__WEBPACK_IMPORTED_MODULE_0__.removeFrom)(hooks);
    // Create hook registration function on the IHookRegistry for the event
    registry[eventType.name] = hookRegistrationFn;
    function hookRegistrationFn(matchObject, callback, options) {
        if (options === void 0) { options = {}; }
        var registeredHook = new RegisteredHook(transitionService, eventType, callback, matchObject, removeHookFn, options);
        hooks.push(registeredHook);
        return registeredHook.deregister.bind(registeredHook);
    }
    return hookRegistrationFn;
}
//# sourceMappingURL=hookRegistry.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/transition/index.js":
/*!****************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/transition/index.js ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HookBuilder: () => (/* reexport safe */ _hookBuilder__WEBPACK_IMPORTED_MODULE_1__.HookBuilder),
/* harmony export */   RegisteredHook: () => (/* reexport safe */ _hookRegistry__WEBPACK_IMPORTED_MODULE_2__.RegisteredHook),
/* harmony export */   RejectType: () => (/* reexport safe */ _rejectFactory__WEBPACK_IMPORTED_MODULE_3__.RejectType),
/* harmony export */   Rejection: () => (/* reexport safe */ _rejectFactory__WEBPACK_IMPORTED_MODULE_3__.Rejection),
/* harmony export */   Transition: () => (/* reexport safe */ _transition__WEBPACK_IMPORTED_MODULE_4__.Transition),
/* harmony export */   TransitionEventType: () => (/* reexport safe */ _transitionEventType__WEBPACK_IMPORTED_MODULE_6__.TransitionEventType),
/* harmony export */   TransitionHook: () => (/* reexport safe */ _transitionHook__WEBPACK_IMPORTED_MODULE_5__.TransitionHook),
/* harmony export */   TransitionHookPhase: () => (/* reexport safe */ _interface__WEBPACK_IMPORTED_MODULE_0__.TransitionHookPhase),
/* harmony export */   TransitionHookScope: () => (/* reexport safe */ _interface__WEBPACK_IMPORTED_MODULE_0__.TransitionHookScope),
/* harmony export */   TransitionService: () => (/* reexport safe */ _transitionService__WEBPACK_IMPORTED_MODULE_7__.TransitionService),
/* harmony export */   defaultTransOpts: () => (/* reexport safe */ _transitionService__WEBPACK_IMPORTED_MODULE_7__.defaultTransOpts),
/* harmony export */   makeEvent: () => (/* reexport safe */ _hookRegistry__WEBPACK_IMPORTED_MODULE_2__.makeEvent),
/* harmony export */   matchState: () => (/* reexport safe */ _hookRegistry__WEBPACK_IMPORTED_MODULE_2__.matchState)
/* harmony export */ });
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/transition/interface.js");
/* harmony import */ var _hookBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hookBuilder */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/transition/hookBuilder.js");
/* harmony import */ var _hookRegistry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hookRegistry */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/transition/hookRegistry.js");
/* harmony import */ var _rejectFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rejectFactory */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/transition/rejectFactory.js");
/* harmony import */ var _transition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transition */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/transition/transition.js");
/* harmony import */ var _transitionHook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transitionHook */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/transition/transitionHook.js");
/* harmony import */ var _transitionEventType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transitionEventType */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/transition/transitionEventType.js");
/* harmony import */ var _transitionService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transitionService */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/transition/transitionService.js");
/**
 * # Transition subsystem
 *
 * This module contains APIs related to a Transition.
 *
 * See:
 * - [[TransitionService]]
 * - [[Transition]]
 * - [[HookFn]], [[TransitionHookFn]], [[TransitionStateHookFn]], [[HookMatchCriteria]], [[HookResult]]
 *
 * @packageDocumentation @preferred
 */








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/transition/interface.js":
/*!********************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/transition/interface.js ***!
  \********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransitionHookPhase: () => (/* binding */ TransitionHookPhase),
/* harmony export */   TransitionHookScope: () => (/* binding */ TransitionHookScope)
/* harmony export */ });
var TransitionHookPhase;
(function (TransitionHookPhase) {
    TransitionHookPhase[TransitionHookPhase["CREATE"] = 0] = "CREATE";
    TransitionHookPhase[TransitionHookPhase["BEFORE"] = 1] = "BEFORE";
    TransitionHookPhase[TransitionHookPhase["RUN"] = 2] = "RUN";
    TransitionHookPhase[TransitionHookPhase["SUCCESS"] = 3] = "SUCCESS";
    TransitionHookPhase[TransitionHookPhase["ERROR"] = 4] = "ERROR";
})(TransitionHookPhase || (TransitionHookPhase = {}));
var TransitionHookScope;
(function (TransitionHookScope) {
    TransitionHookScope[TransitionHookScope["TRANSITION"] = 0] = "TRANSITION";
    TransitionHookScope[TransitionHookScope["STATE"] = 1] = "STATE";
})(TransitionHookScope || (TransitionHookScope = {}));

//# sourceMappingURL=interface.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/transition/rejectFactory.js":
/*!************************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/transition/rejectFactory.js ***!
  \************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RejectType: () => (/* binding */ RejectType),
/* harmony export */   Rejection: () => (/* binding */ Rejection)
/* harmony export */ });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/strings */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/strings.js");
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/hof.js");




/** An enum for Transition Rejection reasons */
var RejectType;
(function (RejectType) {
    /**
     * A new transition superseded this one.
     *
     * While this transition was running, a new transition started.
     * This transition is cancelled because it was superseded by new transition.
     */
    RejectType[RejectType["SUPERSEDED"] = 2] = "SUPERSEDED";
    /**
     * The transition was aborted
     *
     * The transition was aborted by a hook which returned `false`
     */
    RejectType[RejectType["ABORTED"] = 3] = "ABORTED";
    /**
     * The transition was invalid
     *
     * The transition was never started because it was invalid
     */
    RejectType[RejectType["INVALID"] = 4] = "INVALID";
    /**
     * The transition was ignored
     *
     * The transition was ignored because it would have no effect.
     *
     * Either:
     *
     * - The transition is targeting the current state and parameter values
     * - The transition is targeting the same state and parameter values as the currently running transition.
     */
    RejectType[RejectType["IGNORED"] = 5] = "IGNORED";
    /**
     * The transition errored.
     *
     * This generally means a hook threw an error or returned a rejected promise
     */
    RejectType[RejectType["ERROR"] = 6] = "ERROR";
})(RejectType || (RejectType = {}));

/** @internal */
var id = 0;
var Rejection = /** @class */ (function () {
    function Rejection(type, message, detail) {
        /** @internal */
        this.$id = id++;
        this.type = type;
        this.message = message;
        this.detail = detail;
    }
    /** Returns true if the obj is a rejected promise created from the `asPromise` factory */
    Rejection.isRejectionPromise = function (obj) {
        return obj && typeof obj.then === 'function' && (0,_common_hof__WEBPACK_IMPORTED_MODULE_2__.is)(Rejection)(obj._transitionRejection);
    };
    /** Returns a Rejection due to transition superseded */
    Rejection.superseded = function (detail, options) {
        var message = 'The transition has been superseded by a different transition';
        var rejection = new Rejection(RejectType.SUPERSEDED, message, detail);
        if (options && options.redirected) {
            rejection.redirected = true;
        }
        return rejection;
    };
    /** Returns a Rejection due to redirected transition */
    Rejection.redirected = function (detail) {
        return Rejection.superseded(detail, { redirected: true });
    };
    /** Returns a Rejection due to invalid transition */
    Rejection.invalid = function (detail) {
        var message = 'This transition is invalid';
        return new Rejection(RejectType.INVALID, message, detail);
    };
    /** Returns a Rejection due to ignored transition */
    Rejection.ignored = function (detail) {
        var message = 'The transition was ignored';
        return new Rejection(RejectType.IGNORED, message, detail);
    };
    /** Returns a Rejection due to aborted transition */
    Rejection.aborted = function (detail) {
        var message = 'The transition has been aborted';
        return new Rejection(RejectType.ABORTED, message, detail);
    };
    /** Returns a Rejection due to aborted transition */
    Rejection.errored = function (detail) {
        var message = 'The transition errored';
        return new Rejection(RejectType.ERROR, message, detail);
    };
    /**
     * Returns a Rejection
     *
     * Normalizes a value as a Rejection.
     * If the value is already a Rejection, returns it.
     * Otherwise, wraps and returns the value as a Rejection (Rejection type: ERROR).
     *
     * @returns `detail` if it is already a `Rejection`, else returns an ERROR Rejection.
     */
    Rejection.normalize = function (detail) {
        return (0,_common_hof__WEBPACK_IMPORTED_MODULE_2__.is)(Rejection)(detail) ? detail : Rejection.errored(detail);
    };
    Rejection.prototype.toString = function () {
        var detailString = function (d) { return (d && d.toString !== Object.prototype.toString ? d.toString() : (0,_common_strings__WEBPACK_IMPORTED_MODULE_1__.stringify)(d)); };
        var detail = detailString(this.detail);
        var _a = this, $id = _a.$id, type = _a.type, message = _a.message;
        return "Transition Rejection($id: " + $id + " type: " + type + ", message: " + message + ", detail: " + detail + ")";
    };
    Rejection.prototype.toPromise = function () {
        return (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.extend)((0,_common_common__WEBPACK_IMPORTED_MODULE_0__.silentRejection)(this), { _transitionRejection: this });
    };
    return Rejection;
}());

//# sourceMappingURL=rejectFactory.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/transition/transition.js":
/*!*********************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/transition/transition.js ***!
  \*********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Transition: () => (/* binding */ Transition)
/* harmony export */ });
/* harmony import */ var _common_trace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/trace */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/trace.js");
/* harmony import */ var _common_coreservices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/coreservices */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/coreservices.js");
/* harmony import */ var _common_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/strings */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/strings.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/hof.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interface */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/transition/interface.js");
/* harmony import */ var _transitionHook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transitionHook */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/transition/transitionHook.js");
/* harmony import */ var _hookRegistry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hookRegistry */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/transition/hookRegistry.js");
/* harmony import */ var _hookBuilder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hookBuilder */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/transition/hookBuilder.js");
/* harmony import */ var _path_pathUtils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../path/pathUtils */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/path/pathUtils.js");
/* harmony import */ var _params_param__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../params/param */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/params/param.js");
/* harmony import */ var _resolve_resolvable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../resolve/resolvable */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/resolve/resolvable.js");
/* harmony import */ var _resolve_resolveContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../resolve/resolveContext */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/resolve/resolveContext.js");
/* harmony import */ var _rejectFactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./rejectFactory */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/transition/rejectFactory.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/index.js");






 // has or is using









/** @internal */
var stateSelf = (0,_common_hof__WEBPACK_IMPORTED_MODULE_5__.prop)('self');
/**
 * Represents a transition between two states.
 *
 * When navigating to a state, we are transitioning **from** the current state **to** the new state.
 *
 * This object contains all contextual information about the to/from states, parameters, resolves.
 * It has information about all states being entered and exited as a result of the transition.
 */
var Transition = /** @class */ (function () {
    /**
     * Creates a new Transition object.
     *
     * If the target state is not valid, an error is thrown.
     *
     * @internal
     *
     * @param fromPath The path of [[PathNode]]s from which the transition is leaving.  The last node in the `fromPath`
     *        encapsulates the "from state".
     * @param targetState The target state and parameters being transitioned to (also, the transition options)
     * @param router The [[UIRouter]] instance
     * @internal
     */
    function Transition(fromPath, targetState, router) {
        var _this = this;
        /** @internal */
        this._deferred = _common_coreservices__WEBPACK_IMPORTED_MODULE_1__.services.$q.defer();
        /**
         * This promise is resolved or rejected based on the outcome of the Transition.
         *
         * When the transition is successful, the promise is resolved
         * When the transition is unsuccessful, the promise is rejected with the [[Rejection]] or javascript error
         */
        this.promise = this._deferred.promise;
        /** @internal Holds the hook registration functions such as those passed to Transition.onStart() */
        this._registeredHooks = {};
        /** @internal */
        this._hookBuilder = new _hookBuilder__WEBPACK_IMPORTED_MODULE_9__.HookBuilder(this);
        /** Checks if this transition is currently active/running. */
        this.isActive = function () { return _this.router.globals.transition === _this; };
        this.router = router;
        this._targetState = targetState;
        if (!targetState.valid()) {
            throw new Error(targetState.error());
        }
        // current() is assumed to come from targetState.options, but provide a naive implementation otherwise.
        this._options = (0,_common_common__WEBPACK_IMPORTED_MODULE_3__.extend)({ current: (0,_common_hof__WEBPACK_IMPORTED_MODULE_5__.val)(this) }, targetState.options());
        this.$id = router.transitionService._transitionCount++;
        var toPath = _path_pathUtils__WEBPACK_IMPORTED_MODULE_10__.PathUtils.buildToPath(fromPath, targetState);
        this._treeChanges = _path_pathUtils__WEBPACK_IMPORTED_MODULE_10__.PathUtils.treeChanges(fromPath, toPath, this._options.reloadState);
        this.createTransitionHookRegFns();
        var onCreateHooks = this._hookBuilder.buildHooksForPhase(_interface__WEBPACK_IMPORTED_MODULE_6__.TransitionHookPhase.CREATE);
        _transitionHook__WEBPACK_IMPORTED_MODULE_7__.TransitionHook.invokeHooks(onCreateHooks, function () { return null; });
        this.applyViewConfigs(router);
    }
    /** @internal */
    Transition.prototype.onBefore = function (criteria, callback, options) {
        return;
    };
    /** @inheritdoc */
    Transition.prototype.onStart = function (criteria, callback, options) {
        return;
    };
    /** @inheritdoc */
    Transition.prototype.onExit = function (criteria, callback, options) {
        return;
    };
    /** @inheritdoc */
    Transition.prototype.onRetain = function (criteria, callback, options) {
        return;
    };
    /** @inheritdoc */
    Transition.prototype.onEnter = function (criteria, callback, options) {
        return;
    };
    /** @inheritdoc */
    Transition.prototype.onFinish = function (criteria, callback, options) {
        return;
    };
    /** @inheritdoc */
    Transition.prototype.onSuccess = function (criteria, callback, options) {
        return;
    };
    /** @inheritdoc */
    Transition.prototype.onError = function (criteria, callback, options) {
        return;
    };
    /** @internal
     * Creates the transition-level hook registration functions
     * (which can then be used to register hooks)
     */
    Transition.prototype.createTransitionHookRegFns = function () {
        var _this = this;
        this.router.transitionService._pluginapi
            ._getEvents()
            .filter(function (type) { return type.hookPhase !== _interface__WEBPACK_IMPORTED_MODULE_6__.TransitionHookPhase.CREATE; })
            .forEach(function (type) { return (0,_hookRegistry__WEBPACK_IMPORTED_MODULE_8__.makeEvent)(_this, _this.router.transitionService, type); });
    };
    /** @internal */
    Transition.prototype.getHooks = function (hookName) {
        return this._registeredHooks[hookName];
    };
    Transition.prototype.applyViewConfigs = function (router) {
        var enteringStates = this._treeChanges.entering.map(function (node) { return node.state; });
        _path_pathUtils__WEBPACK_IMPORTED_MODULE_10__.PathUtils.applyViewConfigs(router.transitionService.$view, this._treeChanges.to, enteringStates);
    };
    /**
     * @internal
     * @returns the internal from [State] object
     */
    Transition.prototype.$from = function () {
        return (0,_common_common__WEBPACK_IMPORTED_MODULE_3__.tail)(this._treeChanges.from).state;
    };
    /**
     * @internal
     * @returns the internal to [State] object
     */
    Transition.prototype.$to = function () {
        return (0,_common_common__WEBPACK_IMPORTED_MODULE_3__.tail)(this._treeChanges.to).state;
    };
    /**
     * Returns the "from state"
     *
     * Returns the state that the transition is coming *from*.
     *
     * @returns The state declaration object for the Transition's ("from state").
     */
    Transition.prototype.from = function () {
        return this.$from().self;
    };
    /**
     * Returns the "to state"
     *
     * Returns the state that the transition is going *to*.
     *
     * @returns The state declaration object for the Transition's target state ("to state").
     */
    Transition.prototype.to = function () {
        return this.$to().self;
    };
    /**
     * Gets the Target State
     *
     * A transition's [[TargetState]] encapsulates the [[to]] state, the [[params]], and the [[options]] as a single object.
     *
     * @returns the [[TargetState]] of this Transition
     */
    Transition.prototype.targetState = function () {
        return this._targetState;
    };
    /**
     * Determines whether two transitions are equivalent.
     * @deprecated
     */
    Transition.prototype.is = function (compare) {
        if (compare instanceof Transition) {
            // TODO: Also compare parameters
            return this.is({ to: compare.$to().name, from: compare.$from().name });
        }
        return !((compare.to && !(0,_hookRegistry__WEBPACK_IMPORTED_MODULE_8__.matchState)(this.$to(), compare.to, this)) ||
            (compare.from && !(0,_hookRegistry__WEBPACK_IMPORTED_MODULE_8__.matchState)(this.$from(), compare.from, this)));
    };
    Transition.prototype.params = function (pathname) {
        if (pathname === void 0) { pathname = 'to'; }
        return Object.freeze(this._treeChanges[pathname].map((0,_common_hof__WEBPACK_IMPORTED_MODULE_5__.prop)('paramValues')).reduce(_common_common__WEBPACK_IMPORTED_MODULE_3__.mergeR, {}));
    };
    Transition.prototype.paramsChanged = function () {
        var fromParams = this.params('from');
        var toParams = this.params('to');
        // All the parameters declared on both the "to" and "from" paths
        var allParamDescriptors = []
            .concat(this._treeChanges.to)
            .concat(this._treeChanges.from)
            .map(function (pathNode) { return pathNode.paramSchema; })
            .reduce(_common__WEBPACK_IMPORTED_MODULE_15__.flattenR, [])
            .reduce(_common__WEBPACK_IMPORTED_MODULE_15__.uniqR, []);
        var changedParamDescriptors = _params_param__WEBPACK_IMPORTED_MODULE_11__.Param.changed(allParamDescriptors, fromParams, toParams);
        return changedParamDescriptors.reduce(function (changedValues, descriptor) {
            changedValues[descriptor.id] = toParams[descriptor.id];
            return changedValues;
        }, {});
    };
    /**
     * Creates a [[UIInjector]] Dependency Injector
     *
     * Returns a Dependency Injector for the Transition's target state (to state).
     * The injector provides resolve values which the target state has access to.
     *
     * The `UIInjector` can also provide values from the native root/global injector (ng1/ng2).
     *
     * #### Example:
     * ```js
     * .onEnter({ entering: 'myState' }, trans => {
     *   var myResolveValue = trans.injector().get('myResolve');
     *   // Inject a global service from the global/native injector (if it exists)
     *   var MyService = trans.injector().get('MyService');
     * })
     * ```
     *
     * In some cases (such as `onBefore`), you may need access to some resolve data but it has not yet been fetched.
     * You can use [[UIInjector.getAsync]] to get a promise for the data.
     * #### Example:
     * ```js
     * .onBefore({}, trans => {
     *   return trans.injector().getAsync('myResolve').then(myResolveValue =>
     *     return myResolveValue !== 'ABORT';
     *   });
     * });
     * ```
     *
     * If a `state` is provided, the injector that is returned will be limited to resolve values that the provided state has access to.
     * This can be useful if both a parent state `foo` and a child state `foo.bar` have both defined a resolve such as `data`.
     * #### Example:
     * ```js
     * .onEnter({ to: 'foo.bar' }, trans => {
     *   // returns result of `foo` state's `myResolve` resolve
     *   // even though `foo.bar` also has a `myResolve` resolve
     *   var fooData = trans.injector('foo').get('myResolve');
     * });
     * ```
     *
     * If you need resolve data from the exiting states, pass `'from'` as `pathName`.
     * The resolve data from the `from` path will be returned.
     * #### Example:
     * ```js
     * .onExit({ exiting: 'foo.bar' }, trans => {
     *   // Gets the resolve value of `myResolve` from the state being exited
     *   var fooData = trans.injector(null, 'from').get('myResolve');
     * });
     * ```
     *
     *
     * @param state Limits the resolves provided to only the resolves the provided state has access to.
     * @param pathName Default: `'to'`: Chooses the path for which to create the injector. Use this to access resolves for `exiting` states.
     *
     * @returns a [[UIInjector]]
     */
    Transition.prototype.injector = function (state, pathName) {
        if (pathName === void 0) { pathName = 'to'; }
        var path = this._treeChanges[pathName];
        if (state)
            path = _path_pathUtils__WEBPACK_IMPORTED_MODULE_10__.PathUtils.subPath(path, function (node) { return node.state === state || node.state.name === state; });
        return new _resolve_resolveContext__WEBPACK_IMPORTED_MODULE_13__.ResolveContext(path).injector();
    };
    /**
     * Gets all available resolve tokens (keys)
     *
     * This method can be used in conjunction with [[injector]] to inspect the resolve values
     * available to the Transition.
     *
     * This returns all the tokens defined on [[StateDeclaration.resolve]] blocks, for the states
     * in the Transition's [[TreeChanges.to]] path.
     *
     * #### Example:
     * This example logs all resolve values
     * ```js
     * let tokens = trans.getResolveTokens();
     * tokens.forEach(token => console.log(token + " = " + trans.injector().get(token)));
     * ```
     *
     * #### Example:
     * This example creates promises for each resolve value.
     * This triggers fetches of resolves (if any have not yet been fetched).
     * When all promises have all settled, it logs the resolve values.
     * ```js
     * let tokens = trans.getResolveTokens();
     * let promise = tokens.map(token => trans.injector().getAsync(token));
     * Promise.all(promises).then(values => console.log("Resolved values: " + values));
     * ```
     *
     * Note: Angular 1 users whould use `$q.all()`
     *
     * @param pathname resolve context's path name (e.g., `to` or `from`)
     *
     * @returns an array of resolve tokens (keys)
     */
    Transition.prototype.getResolveTokens = function (pathname) {
        if (pathname === void 0) { pathname = 'to'; }
        return new _resolve_resolveContext__WEBPACK_IMPORTED_MODULE_13__.ResolveContext(this._treeChanges[pathname]).getTokens();
    };
    /**
     * Dynamically adds a new [[Resolvable]] (i.e., [[StateDeclaration.resolve]]) to this transition.
     *
     * Allows a transition hook to dynamically add a Resolvable to this Transition.
     *
     * Use the [[Transition.injector]] to retrieve the resolved data in subsequent hooks ([[UIInjector.get]]).
     *
     * If a `state` argument is provided, the Resolvable is processed when that state is being entered.
     * If no `state` is provided then the root state is used.
     * If the given `state` has already been entered, the Resolvable is processed when any child state is entered.
     * If no child states will be entered, the Resolvable is processed during the `onFinish` phase of the Transition.
     *
     * The `state` argument also scopes the resolved data.
     * The resolved data is available from the injector for that `state` and any children states.
     *
     * #### Example:
     * ```js
     * transitionService.onBefore({}, transition => {
     *   transition.addResolvable({
     *     token: 'myResolve',
     *     deps: ['MyService'],
     *     resolveFn: myService => myService.getData()
     *   });
     * });
     * ```
     *
     * @param resolvable a [[ResolvableLiteral]] object (or a [[Resolvable]])
     * @param state the state in the "to path" which should receive the new resolve (otherwise, the root state)
     */
    Transition.prototype.addResolvable = function (resolvable, state) {
        if (state === void 0) { state = ''; }
        resolvable = (0,_common_hof__WEBPACK_IMPORTED_MODULE_5__.is)(_resolve_resolvable__WEBPACK_IMPORTED_MODULE_12__.Resolvable)(resolvable) ? resolvable : new _resolve_resolvable__WEBPACK_IMPORTED_MODULE_12__.Resolvable(resolvable);
        var stateName = typeof state === 'string' ? state : state.name;
        var topath = this._treeChanges.to;
        var targetNode = (0,_common_common__WEBPACK_IMPORTED_MODULE_3__.find)(topath, function (node) { return node.state.name === stateName; });
        var resolveContext = new _resolve_resolveContext__WEBPACK_IMPORTED_MODULE_13__.ResolveContext(topath);
        resolveContext.addResolvables([resolvable], targetNode.state);
    };
    /**
     * Gets the transition from which this transition was redirected.
     *
     * If the current transition is a redirect, this method returns the transition that was redirected.
     *
     * #### Example:
     * ```js
     * let transitionA = $state.go('A').transition
     * transitionA.onStart({}, () => $state.target('B'));
     * $transitions.onSuccess({ to: 'B' }, (trans) => {
     *   trans.to().name === 'B'; // true
     *   trans.redirectedFrom() === transitionA; // true
     * });
     * ```
     *
     * @returns The previous Transition, or null if this Transition is not the result of a redirection
     */
    Transition.prototype.redirectedFrom = function () {
        return this._options.redirectedFrom || null;
    };
    /**
     * Gets the original transition in a redirect chain
     *
     * A transition might belong to a long chain of multiple redirects.
     * This method walks the [[redirectedFrom]] chain back to the original (first) transition in the chain.
     *
     * #### Example:
     * ```js
     * // states
     * registry.register({ name: 'A', redirectTo: 'B' });
     * registry.register({ name: 'B', redirectTo: 'C' });
     * registry.register({ name: 'C', redirectTo: 'D' });
     * registry.register({ name: 'D' });
     *
     * let transitionA = $state.go('A').transition
     *
     * $transitions.onSuccess({ to: 'D' }, (trans) => {
     *   trans.to().name === 'D'; // true
     *   trans.redirectedFrom().to().name === 'C'; // true
     *   trans.originalTransition() === transitionA; // true
     *   trans.originalTransition().to().name === 'A'; // true
     * });
     * ```
     *
     * @returns The original Transition that started a redirect chain
     */
    Transition.prototype.originalTransition = function () {
        var rf = this.redirectedFrom();
        return (rf && rf.originalTransition()) || this;
    };
    /**
     * Get the transition options
     *
     * @returns the options for this Transition.
     */
    Transition.prototype.options = function () {
        return this._options;
    };
    /**
     * Gets the states being entered.
     *
     * @returns an array of states that will be entered during this transition.
     */
    Transition.prototype.entering = function () {
        return (0,_common_common__WEBPACK_IMPORTED_MODULE_3__.map)(this._treeChanges.entering, (0,_common_hof__WEBPACK_IMPORTED_MODULE_5__.prop)('state')).map(stateSelf);
    };
    /**
     * Gets the states being exited.
     *
     * @returns an array of states that will be exited during this transition.
     */
    Transition.prototype.exiting = function () {
        return (0,_common_common__WEBPACK_IMPORTED_MODULE_3__.map)(this._treeChanges.exiting, (0,_common_hof__WEBPACK_IMPORTED_MODULE_5__.prop)('state')).map(stateSelf).reverse();
    };
    /**
     * Gets the states being retained.
     *
     * @returns an array of states that are already entered from a previous Transition, that will not be
     *    exited during this Transition
     */
    Transition.prototype.retained = function () {
        return (0,_common_common__WEBPACK_IMPORTED_MODULE_3__.map)(this._treeChanges.retained, (0,_common_hof__WEBPACK_IMPORTED_MODULE_5__.prop)('state')).map(stateSelf);
    };
    /**
     * Get the [[ViewConfig]]s associated with this Transition
     *
     * Each state can define one or more views (template/controller), which are encapsulated as `ViewConfig` objects.
     * This method fetches the `ViewConfigs` for a given path in the Transition (e.g., "to" or "entering").
     *
     * @param pathname the name of the path to fetch views for:
     *   (`'to'`, `'from'`, `'entering'`, `'exiting'`, `'retained'`)
     * @param state If provided, only returns the `ViewConfig`s for a single state in the path
     *
     * @returns a list of ViewConfig objects for the given path.
     */
    Transition.prototype.views = function (pathname, state) {
        if (pathname === void 0) { pathname = 'entering'; }
        var path = this._treeChanges[pathname];
        path = !state ? path : path.filter((0,_common_hof__WEBPACK_IMPORTED_MODULE_5__.propEq)('state', state));
        return path.map((0,_common_hof__WEBPACK_IMPORTED_MODULE_5__.prop)('views')).filter(_common_common__WEBPACK_IMPORTED_MODULE_3__.identity).reduce(_common_common__WEBPACK_IMPORTED_MODULE_3__.unnestR, []);
    };
    Transition.prototype.treeChanges = function (pathname) {
        return pathname ? this._treeChanges[pathname] : this._treeChanges;
    };
    /**
     * Creates a new transition that is a redirection of the current one.
     *
     * This transition can be returned from a [[TransitionService]] hook to
     * redirect a transition to a new state and/or set of parameters.
     *
     * @internal
     *
     * @returns Returns a new [[Transition]] instance.
     */
    Transition.prototype.redirect = function (targetState) {
        var redirects = 1, trans = this;
        // tslint:disable-next-line:no-conditional-assignment
        while ((trans = trans.redirectedFrom()) != null) {
            if (++redirects > 20)
                throw new Error("Too many consecutive Transition redirects (20+)");
        }
        var redirectOpts = { redirectedFrom: this, source: 'redirect' };
        // If the original transition was caused by URL sync, then use { location: 'replace' }
        // on the new transition (unless the target state explicitly specifies location: false).
        // This causes the original url to be replaced with the url for the redirect target
        // so the original url disappears from the browser history.
        if (this.options().source === 'url' && targetState.options().location !== false) {
            redirectOpts.location = 'replace';
        }
        var newOptions = (0,_common_common__WEBPACK_IMPORTED_MODULE_3__.extend)({}, this.options(), targetState.options(), redirectOpts);
        targetState = targetState.withOptions(newOptions, true);
        var newTransition = this.router.transitionService.create(this._treeChanges.from, targetState);
        var originalEnteringNodes = this._treeChanges.entering;
        var redirectEnteringNodes = newTransition._treeChanges.entering;
        // --- Re-use resolve data from original transition ---
        // When redirecting from a parent state to a child state where the parent parameter values haven't changed
        // (because of the redirect), the resolves fetched by the original transition are still valid in the
        // redirected transition.
        //
        // This allows you to define a redirect on a parent state which depends on an async resolve value.
        // You can wait for the resolve, then redirect to a child state based on the result.
        // The redirected transition does not have to re-fetch the resolve.
        // ---------------------------------------------------------
        var nodeIsReloading = function (reloadState) { return function (node) {
            return reloadState && node.state.includes[reloadState.name];
        }; };
        // Find any "entering" nodes in the redirect path that match the original path and aren't being reloaded
        var matchingEnteringNodes = _path_pathUtils__WEBPACK_IMPORTED_MODULE_10__.PathUtils.matching(redirectEnteringNodes, originalEnteringNodes, _path_pathUtils__WEBPACK_IMPORTED_MODULE_10__.PathUtils.nonDynamicParams).filter((0,_common_hof__WEBPACK_IMPORTED_MODULE_5__.not)(nodeIsReloading(targetState.options().reloadState)));
        // Use the existing (possibly pre-resolved) resolvables for the matching entering nodes.
        matchingEnteringNodes.forEach(function (node, idx) {
            node.resolvables = originalEnteringNodes[idx].resolvables;
        });
        return newTransition;
    };
    /** @internal If a transition doesn't exit/enter any states, returns any [[Param]] whose value changed */
    Transition.prototype._changedParams = function () {
        var tc = this._treeChanges;
        /** Return undefined if it's not a "dynamic" transition, for the following reasons */
        // If user explicitly wants a reload
        if (this._options.reload)
            return undefined;
        // If any states are exiting or entering
        if (tc.exiting.length || tc.entering.length)
            return undefined;
        // If to/from path lengths differ
        if (tc.to.length !== tc.from.length)
            return undefined;
        // If the to/from paths are different
        var pathsDiffer = (0,_common_common__WEBPACK_IMPORTED_MODULE_3__.arrayTuples)(tc.to, tc.from)
            .map(function (tuple) { return tuple[0].state !== tuple[1].state; })
            .reduce(_common_common__WEBPACK_IMPORTED_MODULE_3__.anyTrueR, false);
        if (pathsDiffer)
            return undefined;
        // Find any parameter values that differ
        var nodeSchemas = tc.to.map(function (node) { return node.paramSchema; });
        var _a = [tc.to, tc.from].map(function (path) { return path.map(function (x) { return x.paramValues; }); }), toValues = _a[0], fromValues = _a[1];
        var tuples = (0,_common_common__WEBPACK_IMPORTED_MODULE_3__.arrayTuples)(nodeSchemas, toValues, fromValues);
        return tuples.map(function (_a) {
            var schema = _a[0], toVals = _a[1], fromVals = _a[2];
            return _params_param__WEBPACK_IMPORTED_MODULE_11__.Param.changed(schema, toVals, fromVals);
        }).reduce(_common_common__WEBPACK_IMPORTED_MODULE_3__.unnestR, []);
    };
    /**
     * Returns true if the transition is dynamic.
     *
     * A transition is dynamic if no states are entered nor exited, but at least one dynamic parameter has changed.
     *
     * @returns true if the Transition is dynamic
     */
    Transition.prototype.dynamic = function () {
        var changes = this._changedParams();
        return !changes ? false : changes.map(function (x) { return x.dynamic; }).reduce(_common_common__WEBPACK_IMPORTED_MODULE_3__.anyTrueR, false);
    };
    /**
     * Returns true if the transition is ignored.
     *
     * A transition is ignored if no states are entered nor exited, and no parameter values have changed.
     *
     * @returns true if the Transition is ignored.
     */
    Transition.prototype.ignored = function () {
        return !!this._ignoredReason();
    };
    /** @internal */
    Transition.prototype._ignoredReason = function () {
        var pending = this.router.globals.transition;
        var reloadState = this._options.reloadState;
        var same = function (pathA, pathB) {
            if (pathA.length !== pathB.length)
                return false;
            var matching = _path_pathUtils__WEBPACK_IMPORTED_MODULE_10__.PathUtils.matching(pathA, pathB);
            return pathA.length === matching.filter(function (node) { return !reloadState || !node.state.includes[reloadState.name]; }).length;
        };
        var newTC = this.treeChanges();
        var pendTC = pending && pending.treeChanges();
        if (pendTC && same(pendTC.to, newTC.to) && same(pendTC.exiting, newTC.exiting))
            return 'SameAsPending';
        if (newTC.exiting.length === 0 && newTC.entering.length === 0 && same(newTC.from, newTC.to))
            return 'SameAsCurrent';
    };
    /**
     * Runs the transition
     *
     * This method is generally called from the [[StateService.transitionTo]]
     *
     * @internal
     *
     * @returns a promise for a successful transition.
     */
    Transition.prototype.run = function () {
        var _this = this;
        var runAllHooks = _transitionHook__WEBPACK_IMPORTED_MODULE_7__.TransitionHook.runAllHooks;
        // Gets transition hooks array for the given phase
        var getHooksFor = function (phase) { return _this._hookBuilder.buildHooksForPhase(phase); };
        // When the chain is complete, then resolve or reject the deferred
        var transitionSuccess = function () {
            _common_trace__WEBPACK_IMPORTED_MODULE_0__.trace.traceSuccess(_this.$to(), _this);
            _this.success = true;
            _this._deferred.resolve(_this.to());
            runAllHooks(getHooksFor(_interface__WEBPACK_IMPORTED_MODULE_6__.TransitionHookPhase.SUCCESS));
        };
        var transitionError = function (reason) {
            _common_trace__WEBPACK_IMPORTED_MODULE_0__.trace.traceError(reason, _this);
            _this.success = false;
            _this._deferred.reject(reason);
            _this._error = reason;
            runAllHooks(getHooksFor(_interface__WEBPACK_IMPORTED_MODULE_6__.TransitionHookPhase.ERROR));
        };
        var runTransition = function () {
            // Wait to build the RUN hook chain until the BEFORE hooks are done
            // This allows a BEFORE hook to dynamically add additional RUN hooks via the Transition object.
            var allRunHooks = getHooksFor(_interface__WEBPACK_IMPORTED_MODULE_6__.TransitionHookPhase.RUN);
            var done = function () { return _common_coreservices__WEBPACK_IMPORTED_MODULE_1__.services.$q.when(undefined); };
            return _transitionHook__WEBPACK_IMPORTED_MODULE_7__.TransitionHook.invokeHooks(allRunHooks, done);
        };
        var startTransition = function () {
            var globals = _this.router.globals;
            globals.lastStartedTransitionId = _this.$id;
            globals.transition = _this;
            globals.transitionHistory.enqueue(_this);
            _common_trace__WEBPACK_IMPORTED_MODULE_0__.trace.traceTransitionStart(_this);
            return _common_coreservices__WEBPACK_IMPORTED_MODULE_1__.services.$q.when(undefined);
        };
        var allBeforeHooks = getHooksFor(_interface__WEBPACK_IMPORTED_MODULE_6__.TransitionHookPhase.BEFORE);
        _transitionHook__WEBPACK_IMPORTED_MODULE_7__.TransitionHook.invokeHooks(allBeforeHooks, startTransition)
            .then(runTransition)
            .then(transitionSuccess, transitionError);
        return this.promise;
    };
    /**
     * Checks if the Transition is valid
     *
     * @returns true if the Transition is valid
     */
    Transition.prototype.valid = function () {
        return !this.error() || this.success !== undefined;
    };
    /**
     * Aborts this transition
     *
     * Imperative API to abort a Transition.
     * This only applies to Transitions that are not yet complete.
     */
    Transition.prototype.abort = function () {
        // Do not set flag if the transition is already complete
        if ((0,_common_predicates__WEBPACK_IMPORTED_MODULE_4__.isUndefined)(this.success)) {
            this._aborted = true;
        }
    };
    /**
     * The Transition error reason.
     *
     * If the transition is invalid (and could not be run), returns the reason the transition is invalid.
     * If the transition was valid and ran, but was not successful, returns the reason the transition failed.
     *
     * @returns a transition rejection explaining why the transition is invalid, or the reason the transition failed.
     */
    Transition.prototype.error = function () {
        var state = this.$to();
        if (state.self.abstract) {
            return _rejectFactory__WEBPACK_IMPORTED_MODULE_14__.Rejection.invalid("Cannot transition to abstract state '" + state.name + "'");
        }
        var paramDefs = state.parameters();
        var values = this.params();
        var invalidParams = paramDefs.filter(function (param) { return !param.validates(values[param.id]); });
        if (invalidParams.length) {
            var invalidValues = invalidParams.map(function (param) { return "[" + param.id + ":" + (0,_common_strings__WEBPACK_IMPORTED_MODULE_2__.stringify)(values[param.id]) + "]"; }).join(', ');
            var detail = "The following parameter values are not valid for state '" + state.name + "': " + invalidValues;
            return _rejectFactory__WEBPACK_IMPORTED_MODULE_14__.Rejection.invalid(detail);
        }
        if (this.success === false)
            return this._error;
    };
    /**
     * A string representation of the Transition
     *
     * @returns A string representation of the Transition
     */
    Transition.prototype.toString = function () {
        var fromStateOrName = this.from();
        var toStateOrName = this.to();
        var avoidEmptyHash = function (params) {
            return params['#'] !== null && params['#'] !== undefined ? params : (0,_common_common__WEBPACK_IMPORTED_MODULE_3__.omit)(params, ['#']);
        };
        // (X) means the to state is invalid.
        var id = this.$id, from = (0,_common_predicates__WEBPACK_IMPORTED_MODULE_4__.isObject)(fromStateOrName) ? fromStateOrName.name : fromStateOrName, fromParams = (0,_common_strings__WEBPACK_IMPORTED_MODULE_2__.stringify)(avoidEmptyHash(this._treeChanges.from.map((0,_common_hof__WEBPACK_IMPORTED_MODULE_5__.prop)('paramValues')).reduce(_common_common__WEBPACK_IMPORTED_MODULE_3__.mergeR, {}))), toValid = this.valid() ? '' : '(X) ', to = (0,_common_predicates__WEBPACK_IMPORTED_MODULE_4__.isObject)(toStateOrName) ? toStateOrName.name : toStateOrName, toParams = (0,_common_strings__WEBPACK_IMPORTED_MODULE_2__.stringify)(avoidEmptyHash(this.params()));
        return "Transition#" + id + "( '" + from + "'" + fromParams + " -> " + toValid + "'" + to + "'" + toParams + " )";
    };
    /** @internal */
    Transition.diToken = Transition;
    return Transition;
}());

//# sourceMappingURL=transition.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/transition/transitionEventType.js":
/*!******************************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/transition/transitionEventType.js ***!
  \******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransitionEventType: () => (/* binding */ TransitionEventType)
/* harmony export */ });
/* harmony import */ var _transitionHook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transitionHook */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/transition/transitionHook.js");

/**
 * This class defines a type of hook, such as `onBefore` or `onEnter`.
 * Plugins can define custom hook types, such as sticky states does for `onInactive`.
 */
var TransitionEventType = /** @class */ (function () {
    /* tslint:disable:no-inferrable-types */
    function TransitionEventType(name, hookPhase, hookOrder, criteriaMatchPath, reverseSort, getResultHandler, getErrorHandler, synchronous) {
        if (reverseSort === void 0) { reverseSort = false; }
        if (getResultHandler === void 0) { getResultHandler = _transitionHook__WEBPACK_IMPORTED_MODULE_0__.TransitionHook.HANDLE_RESULT; }
        if (getErrorHandler === void 0) { getErrorHandler = _transitionHook__WEBPACK_IMPORTED_MODULE_0__.TransitionHook.REJECT_ERROR; }
        if (synchronous === void 0) { synchronous = false; }
        this.name = name;
        this.hookPhase = hookPhase;
        this.hookOrder = hookOrder;
        this.criteriaMatchPath = criteriaMatchPath;
        this.reverseSort = reverseSort;
        this.getResultHandler = getResultHandler;
        this.getErrorHandler = getErrorHandler;
        this.synchronous = synchronous;
    }
    return TransitionEventType;
}());

//# sourceMappingURL=transitionEventType.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/transition/transitionHook.js":
/*!*************************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/transition/transitionHook.js ***!
  \*************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransitionHook: () => (/* binding */ TransitionHook)
/* harmony export */ });
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/transition/interface.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/strings */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/strings.js");
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/hof.js");
/* harmony import */ var _common_trace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/trace */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/trace.js");
/* harmony import */ var _common_coreservices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/coreservices */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/coreservices.js");
/* harmony import */ var _rejectFactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rejectFactory */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/transition/rejectFactory.js");
/* harmony import */ var _state_targetState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../state/targetState */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/state/targetState.js");









var defaultOptions = {
    current: _common_common__WEBPACK_IMPORTED_MODULE_1__.noop,
    transition: null,
    traceData: {},
    bind: null,
};
var TransitionHook = /** @class */ (function () {
    function TransitionHook(transition, stateContext, registeredHook, options) {
        var _this = this;
        this.transition = transition;
        this.stateContext = stateContext;
        this.registeredHook = registeredHook;
        this.options = options;
        this.isSuperseded = function () { return _this.type.hookPhase === _interface__WEBPACK_IMPORTED_MODULE_0__.TransitionHookPhase.RUN && !_this.options.transition.isActive(); };
        this.options = (0,_common_common__WEBPACK_IMPORTED_MODULE_1__.defaults)(options, defaultOptions);
        this.type = registeredHook.eventType;
    }
    /**
     * Chains together an array of TransitionHooks.
     *
     * Given a list of [[TransitionHook]] objects, chains them together.
     * Each hook is invoked after the previous one completes.
     *
     * #### Example:
     * ```js
     * var hooks: TransitionHook[] = getHooks();
     * let promise: Promise<any> = TransitionHook.chain(hooks);
     *
     * promise.then(handleSuccess, handleError);
     * ```
     *
     * @param hooks the list of hooks to chain together
     * @param waitFor if provided, the chain is `.then()`'ed off this promise
     * @returns a `Promise` for sequentially invoking the hooks (in order)
     */
    TransitionHook.chain = function (hooks, waitFor) {
        // Chain the next hook off the previous
        var createHookChainR = function (prev, nextHook) { return prev.then(function () { return nextHook.invokeHook(); }); };
        return hooks.reduce(createHookChainR, waitFor || _common_coreservices__WEBPACK_IMPORTED_MODULE_6__.services.$q.when());
    };
    /**
     * Invokes all the provided TransitionHooks, in order.
     * Each hook's return value is checked.
     * If any hook returns a promise, then the rest of the hooks are chained off that promise, and the promise is returned.
     * If no hook returns a promise, then all hooks are processed synchronously.
     *
     * @param hooks the list of TransitionHooks to invoke
     * @param doneCallback a callback that is invoked after all the hooks have successfully completed
     *
     * @returns a promise for the async result, or the result of the callback
     */
    TransitionHook.invokeHooks = function (hooks, doneCallback) {
        for (var idx = 0; idx < hooks.length; idx++) {
            var hookResult = hooks[idx].invokeHook();
            if ((0,_common_predicates__WEBPACK_IMPORTED_MODULE_3__.isPromise)(hookResult)) {
                var remainingHooks = hooks.slice(idx + 1);
                return TransitionHook.chain(remainingHooks, hookResult).then(doneCallback);
            }
        }
        return doneCallback();
    };
    /**
     * Run all TransitionHooks, ignoring their return value.
     */
    TransitionHook.runAllHooks = function (hooks) {
        hooks.forEach(function (hook) { return hook.invokeHook(); });
    };
    TransitionHook.prototype.logError = function (err) {
        this.transition.router.stateService.defaultErrorHandler()(err);
    };
    TransitionHook.prototype.invokeHook = function () {
        var _this = this;
        var hook = this.registeredHook;
        if (hook._deregistered)
            return;
        var notCurrent = this.getNotCurrentRejection();
        if (notCurrent)
            return notCurrent;
        var options = this.options;
        _common_trace__WEBPACK_IMPORTED_MODULE_5__.trace.traceHookInvocation(this, this.transition, options);
        var invokeCallback = function () { return hook.callback.call(options.bind, _this.transition, _this.stateContext); };
        var normalizeErr = function (err) { return _rejectFactory__WEBPACK_IMPORTED_MODULE_7__.Rejection.normalize(err).toPromise(); };
        var handleError = function (err) { return hook.eventType.getErrorHandler(_this)(err); };
        var handleResult = function (result) { return hook.eventType.getResultHandler(_this)(result); };
        try {
            var result = invokeCallback();
            if (!this.type.synchronous && (0,_common_predicates__WEBPACK_IMPORTED_MODULE_3__.isPromise)(result)) {
                return result.catch(normalizeErr).then(handleResult, handleError);
            }
            else {
                return handleResult(result);
            }
        }
        catch (err) {
            // If callback throws (synchronously)
            return handleError(_rejectFactory__WEBPACK_IMPORTED_MODULE_7__.Rejection.normalize(err));
        }
        finally {
            if (hook.invokeLimit && ++hook.invokeCount >= hook.invokeLimit) {
                hook.deregister();
            }
        }
    };
    /**
     * This method handles the return value of a Transition Hook.
     *
     * A hook can return false (cancel), a TargetState (redirect),
     * or a promise (which may later resolve to false or a redirect)
     *
     * This also handles "transition superseded" -- when a new transition
     * was started while the hook was still running
     */
    TransitionHook.prototype.handleHookResult = function (result) {
        var _this = this;
        var notCurrent = this.getNotCurrentRejection();
        if (notCurrent)
            return notCurrent;
        // Hook returned a promise
        if ((0,_common_predicates__WEBPACK_IMPORTED_MODULE_3__.isPromise)(result)) {
            // Wait for the promise, then reprocess with the resulting value
            return result.then(function (val) { return _this.handleHookResult(val); });
        }
        _common_trace__WEBPACK_IMPORTED_MODULE_5__.trace.traceHookResult(result, this.transition, this.options);
        // Hook returned false
        if (result === false) {
            // Abort this Transition
            return _rejectFactory__WEBPACK_IMPORTED_MODULE_7__.Rejection.aborted('Hook aborted transition').toPromise();
        }
        var isTargetState = (0,_common_hof__WEBPACK_IMPORTED_MODULE_4__.is)(_state_targetState__WEBPACK_IMPORTED_MODULE_8__.TargetState);
        // hook returned a TargetState
        if (isTargetState(result)) {
            // Halt the current Transition and redirect (a new Transition) to the TargetState.
            return _rejectFactory__WEBPACK_IMPORTED_MODULE_7__.Rejection.redirected(result).toPromise();
        }
    };
    /**
     * Return a Rejection promise if the transition is no longer current due
     * to a stopped router (disposed), or a new transition has started and superseded this one.
     */
    TransitionHook.prototype.getNotCurrentRejection = function () {
        var router = this.transition.router;
        // The router is stopped
        if (router._disposed) {
            return _rejectFactory__WEBPACK_IMPORTED_MODULE_7__.Rejection.aborted("UIRouter instance #" + router.$id + " has been stopped (disposed)").toPromise();
        }
        if (this.transition._aborted) {
            return _rejectFactory__WEBPACK_IMPORTED_MODULE_7__.Rejection.aborted().toPromise();
        }
        // This transition is no longer current.
        // Another transition started while this hook was still running.
        if (this.isSuperseded()) {
            // Abort this transition
            return _rejectFactory__WEBPACK_IMPORTED_MODULE_7__.Rejection.superseded(this.options.current()).toPromise();
        }
    };
    TransitionHook.prototype.toString = function () {
        var _a = this, options = _a.options, registeredHook = _a.registeredHook;
        var event = (0,_common_hof__WEBPACK_IMPORTED_MODULE_4__.parse)('traceData.hookType')(options) || 'internal', context = (0,_common_hof__WEBPACK_IMPORTED_MODULE_4__.parse)('traceData.context.state.name')(options) || (0,_common_hof__WEBPACK_IMPORTED_MODULE_4__.parse)('traceData.context')(options) || 'unknown', name = (0,_common_strings__WEBPACK_IMPORTED_MODULE_2__.fnToString)(registeredHook.callback);
        return event + " context: " + context + ", " + (0,_common_strings__WEBPACK_IMPORTED_MODULE_2__.maxLength)(200, name);
    };
    /**
     * These GetResultHandler(s) are used by [[invokeHook]] below
     * Each HookType chooses a GetResultHandler (See: [[TransitionService._defineCoreEvents]])
     */
    TransitionHook.HANDLE_RESULT = function (hook) { return function (result) {
        return hook.handleHookResult(result);
    }; };
    /**
     * If the result is a promise rejection, log it.
     * Otherwise, ignore the result.
     */
    TransitionHook.LOG_REJECTED_RESULT = function (hook) { return function (result) {
        (0,_common_predicates__WEBPACK_IMPORTED_MODULE_3__.isPromise)(result) && result.catch(function (err) { return hook.logError(_rejectFactory__WEBPACK_IMPORTED_MODULE_7__.Rejection.normalize(err)); });
        return undefined;
    }; };
    /**
     * These GetErrorHandler(s) are used by [[invokeHook]] below
     * Each HookType chooses a GetErrorHandler (See: [[TransitionService._defineCoreEvents]])
     */
    TransitionHook.LOG_ERROR = function (hook) { return function (error) { return hook.logError(error); }; };
    TransitionHook.REJECT_ERROR = function (hook) { return function (error) { return (0,_common_common__WEBPACK_IMPORTED_MODULE_1__.silentRejection)(error); }; };
    TransitionHook.THROW_ERROR = function (hook) { return function (error) {
        throw error;
    }; };
    return TransitionHook;
}());

//# sourceMappingURL=transitionHook.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/transition/transitionService.js":
/*!****************************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/transition/transitionService.js ***!
  \****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransitionService: () => (/* binding */ TransitionService),
/* harmony export */   defaultTransOpts: () => (/* binding */ defaultTransOpts)
/* harmony export */ });
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/transition/interface.js");
/* harmony import */ var _transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transition */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/transition/transition.js");
/* harmony import */ var _hookRegistry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hookRegistry */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/transition/hookRegistry.js");
/* harmony import */ var _hooks_coreResolvables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/coreResolvables */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/hooks/coreResolvables.js");
/* harmony import */ var _hooks_redirectTo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/redirectTo */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/hooks/redirectTo.js");
/* harmony import */ var _hooks_onEnterExitRetain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/onEnterExitRetain */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/hooks/onEnterExitRetain.js");
/* harmony import */ var _hooks_resolve__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/resolve */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/hooks/resolve.js");
/* harmony import */ var _hooks_views__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/views */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/hooks/views.js");
/* harmony import */ var _hooks_updateGlobals__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/updateGlobals */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/hooks/updateGlobals.js");
/* harmony import */ var _hooks_url__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/url */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/hooks/url.js");
/* harmony import */ var _hooks_lazyLoad__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks/lazyLoad */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/hooks/lazyLoad.js");
/* harmony import */ var _transitionEventType__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./transitionEventType */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/transition/transitionEventType.js");
/* harmony import */ var _transitionHook__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./transitionHook */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/transition/transitionHook.js");
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/hof.js");
/* harmony import */ var _hooks_ignoredTransition__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../hooks/ignoredTransition */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/hooks/ignoredTransition.js");
/* harmony import */ var _hooks_invalidTransition__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../hooks/invalidTransition */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/hooks/invalidTransition.js");


















/**
 * The default [[Transition]] options.
 *
 * Include this object when applying custom defaults:
 * let reloadOpts = { reload: true, notify: true }
 * let options = defaults(theirOpts, customDefaults, defaultOptions);
 */
var defaultTransOpts = {
    location: true,
    relative: null,
    inherit: false,
    notify: true,
    reload: false,
    supercede: true,
    custom: {},
    current: function () { return null; },
    source: 'unknown',
};
/**
 * This class provides services related to Transitions.
 *
 * - Most importantly, it allows global Transition Hooks to be registered.
 * - It allows the default transition error handler to be set.
 * - It also has a factory function for creating new [[Transition]] objects, (used internally by the [[StateService]]).
 *
 * At bootstrap, [[UIRouter]] creates a single instance (singleton) of this class.
 *
 * This API is located at `router.transitionService` ([[UIRouter.transitionService]])
 */
var TransitionService = /** @class */ (function () {
    /** @internal */
    function TransitionService(_router) {
        /** @internal */
        this._transitionCount = 0;
        /** The transition hook types, such as `onEnter`, `onStart`, etc */
        this._eventTypes = [];
        /** @internal The registered transition hooks */
        this._registeredHooks = {};
        /** The  paths on a criteria object */
        this._criteriaPaths = {};
        this._router = _router;
        this.$view = _router.viewService;
        this._deregisterHookFns = {};
        this._pluginapi = ((0,_common_common__WEBPACK_IMPORTED_MODULE_14__.createProxyFunctions)((0,_common_hof__WEBPACK_IMPORTED_MODULE_15__.val)(this), {}, (0,_common_hof__WEBPACK_IMPORTED_MODULE_15__.val)(this), [
            '_definePathType',
            '_defineEvent',
            '_getPathTypes',
            '_getEvents',
            'getHooks',
        ]));
        this._defineCorePaths();
        this._defineCoreEvents();
        this._registerCoreTransitionHooks();
        _router.globals.successfulTransitions.onEvict(_hooks_coreResolvables__WEBPACK_IMPORTED_MODULE_3__.treeChangesCleanup);
    }
    /**
     * Registers a [[TransitionHookFn]], called *while a transition is being constructed*.
     *
     * Registers a transition lifecycle hook, which is invoked during transition construction.
     *
     * This low level hook should only be used by plugins.
     * This can be a useful time for plugins to add resolves or mutate the transition as needed.
     * The Sticky States plugin uses this hook to modify the treechanges.
     *
     * ### Lifecycle
     *
     * `onCreate` hooks are invoked *while a transition is being constructed*.
     *
     * ### Return value
     *
     * The hook's return value is ignored
     *
     * @internal
     * @param criteria defines which Transitions the Hook should be invoked for.
     * @param callback the hook function which will be invoked.
     * @param options the registration options
     * @returns a function which deregisters the hook.
     */
    TransitionService.prototype.onCreate = function (criteria, callback, options) {
        return;
    };
    /** @inheritdoc */
    TransitionService.prototype.onBefore = function (criteria, callback, options) {
        return;
    };
    /** @inheritdoc */
    TransitionService.prototype.onStart = function (criteria, callback, options) {
        return;
    };
    /** @inheritdoc */
    TransitionService.prototype.onExit = function (criteria, callback, options) {
        return;
    };
    /** @inheritdoc */
    TransitionService.prototype.onRetain = function (criteria, callback, options) {
        return;
    };
    /** @inheritdoc */
    TransitionService.prototype.onEnter = function (criteria, callback, options) {
        return;
    };
    /** @inheritdoc */
    TransitionService.prototype.onFinish = function (criteria, callback, options) {
        return;
    };
    /** @inheritdoc */
    TransitionService.prototype.onSuccess = function (criteria, callback, options) {
        return;
    };
    /** @inheritdoc */
    TransitionService.prototype.onError = function (criteria, callback, options) {
        return;
    };
    /**
     * dispose
     * @internal
     */
    TransitionService.prototype.dispose = function (router) {
        (0,_common_common__WEBPACK_IMPORTED_MODULE_14__.values)(this._registeredHooks).forEach(function (hooksArray) {
            return hooksArray.forEach(function (hook) {
                hook._deregistered = true;
                (0,_common_common__WEBPACK_IMPORTED_MODULE_14__.removeFrom)(hooksArray, hook);
            });
        });
    };
    /**
     * Creates a new [[Transition]] object
     *
     * This is a factory function for creating new Transition objects.
     * It is used internally by the [[StateService]] and should generally not be called by application code.
     *
     * @internal
     * @param fromPath the path to the current state (the from state)
     * @param targetState the target state (destination)
     * @returns a Transition
     */
    TransitionService.prototype.create = function (fromPath, targetState) {
        return new _transition__WEBPACK_IMPORTED_MODULE_1__.Transition(fromPath, targetState, this._router);
    };
    /** @internal */
    TransitionService.prototype._defineCoreEvents = function () {
        var Phase = _interface__WEBPACK_IMPORTED_MODULE_0__.TransitionHookPhase;
        var TH = _transitionHook__WEBPACK_IMPORTED_MODULE_12__.TransitionHook;
        var paths = this._criteriaPaths;
        var NORMAL_SORT = false, REVERSE_SORT = true;
        var SYNCHRONOUS = true;
        this._defineEvent('onCreate', Phase.CREATE, 0, paths.to, NORMAL_SORT, TH.LOG_REJECTED_RESULT, TH.THROW_ERROR, SYNCHRONOUS);
        this._defineEvent('onBefore', Phase.BEFORE, 0, paths.to);
        this._defineEvent('onStart', Phase.RUN, 0, paths.to);
        this._defineEvent('onExit', Phase.RUN, 100, paths.exiting, REVERSE_SORT);
        this._defineEvent('onRetain', Phase.RUN, 200, paths.retained);
        this._defineEvent('onEnter', Phase.RUN, 300, paths.entering);
        this._defineEvent('onFinish', Phase.RUN, 400, paths.to);
        this._defineEvent('onSuccess', Phase.SUCCESS, 0, paths.to, NORMAL_SORT, TH.LOG_REJECTED_RESULT, TH.LOG_ERROR, SYNCHRONOUS);
        this._defineEvent('onError', Phase.ERROR, 0, paths.to, NORMAL_SORT, TH.LOG_REJECTED_RESULT, TH.LOG_ERROR, SYNCHRONOUS);
    };
    /** @internal */
    TransitionService.prototype._defineCorePaths = function () {
        var STATE = _interface__WEBPACK_IMPORTED_MODULE_0__.TransitionHookScope.STATE, TRANSITION = _interface__WEBPACK_IMPORTED_MODULE_0__.TransitionHookScope.TRANSITION;
        this._definePathType('to', TRANSITION);
        this._definePathType('from', TRANSITION);
        this._definePathType('exiting', STATE);
        this._definePathType('retained', STATE);
        this._definePathType('entering', STATE);
    };
    /** @internal */
    TransitionService.prototype._defineEvent = function (name, hookPhase, hookOrder, criteriaMatchPath, reverseSort, getResultHandler, getErrorHandler, synchronous) {
        if (reverseSort === void 0) { reverseSort = false; }
        if (getResultHandler === void 0) { getResultHandler = _transitionHook__WEBPACK_IMPORTED_MODULE_12__.TransitionHook.HANDLE_RESULT; }
        if (getErrorHandler === void 0) { getErrorHandler = _transitionHook__WEBPACK_IMPORTED_MODULE_12__.TransitionHook.REJECT_ERROR; }
        if (synchronous === void 0) { synchronous = false; }
        var eventType = new _transitionEventType__WEBPACK_IMPORTED_MODULE_11__.TransitionEventType(name, hookPhase, hookOrder, criteriaMatchPath, reverseSort, getResultHandler, getErrorHandler, synchronous);
        this._eventTypes.push(eventType);
        (0,_hookRegistry__WEBPACK_IMPORTED_MODULE_2__.makeEvent)(this, this, eventType);
    };
    /** @internal */
    TransitionService.prototype._getEvents = function (phase) {
        var transitionHookTypes = (0,_common_predicates__WEBPACK_IMPORTED_MODULE_13__.isDefined)(phase)
            ? this._eventTypes.filter(function (type) { return type.hookPhase === phase; })
            : this._eventTypes.slice();
        return transitionHookTypes.sort(function (l, r) {
            var cmpByPhase = l.hookPhase - r.hookPhase;
            return cmpByPhase === 0 ? l.hookOrder - r.hookOrder : cmpByPhase;
        });
    };
    /**
     * Adds a Path to be used as a criterion against a TreeChanges path
     *
     * For example: the `exiting` path in [[HookMatchCriteria]] is a STATE scoped path.
     * It was defined by calling `defineTreeChangesCriterion('exiting', TransitionHookScope.STATE)`
     * Each state in the exiting path is checked against the criteria and returned as part of the match.
     *
     * Another example: the `to` path in [[HookMatchCriteria]] is a TRANSITION scoped path.
     * It was defined by calling `defineTreeChangesCriterion('to', TransitionHookScope.TRANSITION)`
     * Only the tail of the `to` path is checked against the criteria and returned as part of the match.
     *
     * @internal
     */
    TransitionService.prototype._definePathType = function (name, hookScope) {
        this._criteriaPaths[name] = { name: name, scope: hookScope };
    };
    /** @internal */
    // tslint:disable-next-line
    TransitionService.prototype._getPathTypes = function () {
        return this._criteriaPaths;
    };
    /** @internal */
    TransitionService.prototype.getHooks = function (hookName) {
        return this._registeredHooks[hookName];
    };
    /** @internal */
    TransitionService.prototype._registerCoreTransitionHooks = function () {
        var fns = this._deregisterHookFns;
        fns.addCoreResolves = (0,_hooks_coreResolvables__WEBPACK_IMPORTED_MODULE_3__.registerAddCoreResolvables)(this);
        fns.ignored = (0,_hooks_ignoredTransition__WEBPACK_IMPORTED_MODULE_16__.registerIgnoredTransitionHook)(this);
        fns.invalid = (0,_hooks_invalidTransition__WEBPACK_IMPORTED_MODULE_17__.registerInvalidTransitionHook)(this);
        // Wire up redirectTo hook
        fns.redirectTo = (0,_hooks_redirectTo__WEBPACK_IMPORTED_MODULE_4__.registerRedirectToHook)(this);
        // Wire up onExit/Retain/Enter state hooks
        fns.onExit = (0,_hooks_onEnterExitRetain__WEBPACK_IMPORTED_MODULE_5__.registerOnExitHook)(this);
        fns.onRetain = (0,_hooks_onEnterExitRetain__WEBPACK_IMPORTED_MODULE_5__.registerOnRetainHook)(this);
        fns.onEnter = (0,_hooks_onEnterExitRetain__WEBPACK_IMPORTED_MODULE_5__.registerOnEnterHook)(this);
        // Wire up Resolve hooks
        fns.eagerResolve = (0,_hooks_resolve__WEBPACK_IMPORTED_MODULE_6__.registerEagerResolvePath)(this);
        fns.lazyResolve = (0,_hooks_resolve__WEBPACK_IMPORTED_MODULE_6__.registerLazyResolveState)(this);
        fns.resolveAll = (0,_hooks_resolve__WEBPACK_IMPORTED_MODULE_6__.registerResolveRemaining)(this);
        // Wire up the View management hooks
        fns.loadViews = (0,_hooks_views__WEBPACK_IMPORTED_MODULE_7__.registerLoadEnteringViews)(this);
        fns.activateViews = (0,_hooks_views__WEBPACK_IMPORTED_MODULE_7__.registerActivateViews)(this);
        // Updates global state after a transition
        fns.updateGlobals = (0,_hooks_updateGlobals__WEBPACK_IMPORTED_MODULE_8__.registerUpdateGlobalState)(this);
        // After globals.current is updated at priority: 10000
        fns.updateUrl = (0,_hooks_url__WEBPACK_IMPORTED_MODULE_9__.registerUpdateUrl)(this);
        // Lazy load state trees
        fns.lazyLoad = (0,_hooks_lazyLoad__WEBPACK_IMPORTED_MODULE_10__.registerLazyLoadHook)(this);
    };
    return TransitionService;
}());

//# sourceMappingURL=transitionService.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/url/index.js":
/*!*********************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/url/index.js ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseUrlRule: () => (/* reexport safe */ _urlRule__WEBPACK_IMPORTED_MODULE_4__.BaseUrlRule),
/* harmony export */   ParamFactory: () => (/* reexport safe */ _urlMatcherFactory__WEBPACK_IMPORTED_MODULE_2__.ParamFactory),
/* harmony export */   UrlConfig: () => (/* reexport safe */ _urlConfig__WEBPACK_IMPORTED_MODULE_7__.UrlConfig),
/* harmony export */   UrlMatcher: () => (/* reexport safe */ _urlMatcher__WEBPACK_IMPORTED_MODULE_1__.UrlMatcher),
/* harmony export */   UrlMatcherFactory: () => (/* reexport safe */ _urlMatcherFactory__WEBPACK_IMPORTED_MODULE_2__.UrlMatcherFactory),
/* harmony export */   UrlRouter: () => (/* reexport safe */ _urlRouter__WEBPACK_IMPORTED_MODULE_3__.UrlRouter),
/* harmony export */   UrlRuleFactory: () => (/* reexport safe */ _urlRule__WEBPACK_IMPORTED_MODULE_4__.UrlRuleFactory),
/* harmony export */   UrlRules: () => (/* reexport safe */ _urlRules__WEBPACK_IMPORTED_MODULE_6__.UrlRules),
/* harmony export */   UrlService: () => (/* reexport safe */ _urlService__WEBPACK_IMPORTED_MODULE_5__.UrlService)
/* harmony export */ });
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/url/interface.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_interface__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _interface__WEBPACK_IMPORTED_MODULE_0__) if(["default","UrlRules","UrlConfig"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _interface__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _urlMatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./urlMatcher */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/url/urlMatcher.js");
/* harmony import */ var _urlMatcherFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./urlMatcherFactory */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/url/urlMatcherFactory.js");
/* harmony import */ var _urlRouter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./urlRouter */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/url/urlRouter.js");
/* harmony import */ var _urlRule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./urlRule */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/url/urlRule.js");
/* harmony import */ var _urlService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./urlService */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/url/urlService.js");
/* harmony import */ var _urlRules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./urlRules */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/url/urlRules.js");
/* harmony import */ var _urlConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./urlConfig */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/url/urlConfig.js");








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/url/interface.js":
/*!*************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/url/interface.js ***!
  \*************************************************************************************************************************************************/
/***/ (() => {

//# sourceMappingURL=interface.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/url/urlConfig.js":
/*!*************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/url/urlConfig.js ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UrlConfig: () => (/* binding */ UrlConfig)
/* harmony export */ });
/* harmony import */ var _params__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../params */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/params/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/index.js");


/**
 * An API to customize the URL behavior and retrieve URL configuration
 *
 * This API is used to customize the behavior of the URL.
 * This includes optional trailing slashes ([[strictMode]]), case sensitivity ([[caseInsensitive]]),
 * and custom parameter encoding (custom [[type]]).
 *
 * It also has information about the location (url) configuration such as [[port]] and [[baseHref]].
 * This information can be used to build absolute URLs, such as
 * `https://example.com:443/basepath/state/substate?param1=a#hashvalue`;
 *
 * This API is found at `router.urlService.config` (see: [[UIRouter.urlService]], [[URLService.config]])
 */
var UrlConfig = /** @class */ (function () {
    /** @internal */ function UrlConfig(/** @internal */ router) {
        var _this = this;
        this.router = router;
        /** @internal */ this.paramTypes = new _params__WEBPACK_IMPORTED_MODULE_0__.ParamTypes();
        /** @internal */ this._decodeParams = true;
        /** @internal */ this._isCaseInsensitive = false;
        /** @internal */ this._isStrictMode = true;
        /** @internal */ this._defaultSquashPolicy = false;
        /** @internal */ this.dispose = function () { return _this.paramTypes.dispose(); };
        // Delegate these calls to the current LocationConfig implementation
        /**
         * Gets the base Href, e.g., `http://localhost/approot/`
         *
         * @return the application's base href
         */
        this.baseHref = function () { return _this.router.locationConfig.baseHref(); };
        /**
         * Gets or sets the hashPrefix
         *
         * This only applies when not running in [[html5Mode]] (pushstate mode)
         *
         * If the current url is `http://localhost/app#!/uirouter/path/#anchor`, it returns `!` which is the prefix for the "hashbang" portion.
         *
         * @return the hash prefix
         */
        this.hashPrefix = function (newprefix) { return _this.router.locationConfig.hashPrefix(newprefix); };
        /**
         * Gets the host, e.g., `localhost`
         *
         * @return the protocol
         */
        this.host = function () { return _this.router.locationConfig.host(); };
        /**
         * Returns true when running in pushstate mode
         *
         * @return true when running in html5 mode (pushstate mode).
         */
        this.html5Mode = function () { return _this.router.locationConfig.html5Mode(); };
        /**
         * Gets the port, e.g., `80`
         *
         * @return the port number
         */
        this.port = function () { return _this.router.locationConfig.port(); };
        /**
         * Gets the protocol, e.g., `http`
         *
         * @return the protocol
         */
        this.protocol = function () { return _this.router.locationConfig.protocol(); };
    }
    /**
     * Defines whether URL matching should be case sensitive (the default behavior), or not.
     *
     * #### Example:
     * ```js
     * // Allow case insensitive url matches
     * urlService.config.caseInsensitive(true);
     * ```
     *
     * @param value `false` to match URL in a case sensitive manner; otherwise `true`;
     * @returns the current value of caseInsensitive
     */
    UrlConfig.prototype.caseInsensitive = function (value) {
        return (this._isCaseInsensitive = (0,_common__WEBPACK_IMPORTED_MODULE_1__.isDefined)(value) ? value : this._isCaseInsensitive);
    };
    /**
     * Sets the default behavior when generating or matching URLs with default parameter values.
     *
     * #### Example:
     * ```js
     * // Remove default parameter values from the url
     * urlService.config.defaultSquashPolicy(true);
     * ```
     *
     * @param value A string that defines the default parameter URL squashing behavior.
     *    - `nosquash`: When generating an href with a default parameter value, do not squash the parameter value from the URL
     *    - `slash`: When generating an href with a default parameter value, squash (remove) the parameter value, and, if the
     *      parameter is surrounded by slashes, squash (remove) one slash from the URL
     *    - any other string, e.g. "~": When generating an href with a default parameter value, squash (remove)
     *      the parameter value from the URL and replace it with this string.
     * @returns the current value of defaultSquashPolicy
     */
    UrlConfig.prototype.defaultSquashPolicy = function (value) {
        if ((0,_common__WEBPACK_IMPORTED_MODULE_1__.isDefined)(value) && value !== true && value !== false && !(0,_common__WEBPACK_IMPORTED_MODULE_1__.isString)(value))
            throw new Error("Invalid squash policy: " + value + ". Valid policies: false, true, arbitrary-string");
        return (this._defaultSquashPolicy = (0,_common__WEBPACK_IMPORTED_MODULE_1__.isDefined)(value) ? value : this._defaultSquashPolicy);
    };
    /**
     * Defines whether URLs should match trailing slashes, or not (the default behavior).
     *
     * #### Example:
     * ```js
     * // Allow optional trailing slashes
     * urlService.config.strictMode(false);
     * ```
     *
     * @param value `false` to match trailing slashes in URLs, otherwise `true`.
     * @returns the current value of strictMode
     */
    UrlConfig.prototype.strictMode = function (value) {
        return (this._isStrictMode = (0,_common__WEBPACK_IMPORTED_MODULE_1__.isDefined)(value) ? value : this._isStrictMode);
    };
    /**
     * Creates and registers a custom [[ParamType]] object
     *
     * A custom parameter type can be used to generate URLs with typed parameters or custom encoding/decoding.
     *
     * #### Note: Register custom types *before using them* in a state definition.
     *
     * #### Example:
     * ```js
     * // Encode object parameter as JSON string
     * urlService.config.type('myjson', {
     *   encode: (obj) => JSON.stringify(obj),
     *   decode: (str) => JSON.parse(str),
     *   is: (val) => typeof(val) === 'object',
     *   pattern: /[^/]+/,
     *   equals: (a, b) => _.isEqual(a, b),
     * });
     * ```
     *
     * See [[ParamTypeDefinition]] for more examples
     *
     * @param name The type name.
     * @param definition The type definition. See [[ParamTypeDefinition]] for information on the values accepted.
     * @param definitionFn A function that is injected before the app runtime starts.
     *        The result of this function should be a [[ParamTypeDefinition]].
     *        The result is merged into the existing `definition`.
     *        See [[ParamType]] for information on the values accepted.
     *
     * @returns if only the `name` parameter was specified: the currently registered [[ParamType]] object, or undefined
     */
    UrlConfig.prototype.type = function (name, definition, definitionFn) {
        var type = this.paramTypes.type(name, definition, definitionFn);
        return !(0,_common__WEBPACK_IMPORTED_MODULE_1__.isDefined)(definition) ? type : this;
    };
    return UrlConfig;
}());

//# sourceMappingURL=urlConfig.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/url/urlMatcher.js":
/*!**************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/url/urlMatcher.js ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UrlMatcher: () => (/* binding */ UrlMatcher)
/* harmony export */ });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/hof.js");
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _params_param__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../params/param */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/params/param.js");
/* harmony import */ var _common_strings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/strings */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/strings.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/index.js");






function quoteRegExp(str, param) {
    var surroundPattern = ['', ''], result = str.replace(/[\\\[\]\^$*+?.()|{}]/g, '\\$&');
    if (!param)
        return result;
    switch (param.squash) {
        case false:
            surroundPattern = ['(', ')' + (param.isOptional ? '?' : '')];
            break;
        case true:
            result = result.replace(/\/$/, '');
            surroundPattern = ['(?:/(', ')|/)?'];
            break;
        default:
            surroundPattern = ["(" + param.squash + "|", ')?'];
            break;
    }
    return result + surroundPattern[0] + param.type.pattern.source + surroundPattern[1];
}
var memoizeTo = function (obj, _prop, fn) { return (obj[_prop] = obj[_prop] || fn()); };
var splitOnSlash = (0,_common_strings__WEBPACK_IMPORTED_MODULE_4__.splitOnDelim)('/');
var defaultConfig = {
    state: { params: {} },
    strict: true,
    caseInsensitive: true,
    decodeParams: true,
};
/**
 * Matches URLs against patterns.
 *
 * Matches URLs against patterns and extracts named parameters from the path or the search
 * part of the URL.
 *
 * A URL pattern consists of a path pattern, optionally followed by '?' and a list of search (query)
 * parameters. Multiple search parameter names are separated by '&'. Search parameters
 * do not influence whether or not a URL is matched, but their values are passed through into
 * the matched parameters returned by [[UrlMatcher.exec]].
 *
 * - *Path parameters* are defined using curly brace placeholders (`/somepath/{param}`)
 * or colon placeholders (`/somePath/:param`).
 *
 * - *A parameter RegExp* may be defined for a param after a colon
 * (`/somePath/{param:[a-zA-Z0-9]+}`) in a curly brace placeholder.
 * The regexp must match for the url to be matched.
 * Should the regexp itself contain curly braces, they must be in matched pairs or escaped with a backslash.
 *
 * Note: a RegExp parameter will encode its value using either [[ParamTypes.path]] or [[ParamTypes.query]].
 *
 * - *Custom parameter types* may also be specified after a colon (`/somePath/{param:int}`) in curly brace parameters.
 *   See [[UrlMatcherFactory.type]] for more information.
 *
 * - *Catch-all parameters* are defined using an asterisk placeholder (`/somepath/*catchallparam`).
 *   A catch-all * parameter value will contain the remainder of the URL.
 *
 * ---
 *
 * Parameter names may contain only word characters (latin letters, digits, and underscore) and
 * must be unique within the pattern (across both path and search parameters).
 * A path parameter matches any number of characters other than '/'. For catch-all
 * placeholders the path parameter matches any number of characters.
 *
 * Examples:
 *
 * * `'/hello/'` - Matches only if the path is exactly '/hello/'. There is no special treatment for
 *   trailing slashes, and patterns have to match the entire path, not just a prefix.
 * * `'/user/:id'` - Matches '/user/bob' or '/user/1234!!!' or even '/user/' but not '/user' or
 *   '/user/bob/details'. The second path segment will be captured as the parameter 'id'.
 * * `'/user/{id}'` - Same as the previous example, but using curly brace syntax.
 * * `'/user/{id:[^/]*}'` - Same as the previous example.
 * * `'/user/{id:[0-9a-fA-F]{1,8}}'` - Similar to the previous example, but only matches if the id
 *   parameter consists of 1 to 8 hex digits.
 * * `'/files/{path:.*}'` - Matches any URL starting with '/files/' and captures the rest of the
 *   path into the parameter 'path'.
 * * `'/files/*path'` - ditto.
 * * `'/calendar/{start:date}'` - Matches "/calendar/2014-11-12" (because the pattern defined
 *   in the built-in  `date` ParamType matches `2014-11-12`) and provides a Date object in $stateParams.start
 *
 */
var UrlMatcher = /** @class */ (function () {
    /**
     * @param pattern The pattern to compile into a matcher.
     * @param paramTypes The [[ParamTypes]] registry
     * @param paramFactory A [[ParamFactory]] object
     * @param config  A [[UrlMatcherCompileConfig]] configuration object
     */
    function UrlMatcher(pattern, paramTypes, paramFactory, config) {
        var _this = this;
        /** @internal */
        this._cache = { path: [this] };
        /** @internal */
        this._children = [];
        /** @internal */
        this._params = [];
        /** @internal */
        this._segments = [];
        /** @internal */
        this._compiled = [];
        this.config = config = (0,_common__WEBPACK_IMPORTED_MODULE_5__.defaults)(config, defaultConfig);
        this.pattern = pattern;
        // Find all placeholders and create a compiled pattern, using either classic or curly syntax:
        //   '*' name
        //   ':' name
        //   '{' name '}'
        //   '{' name ':' regexp '}'
        // The regular expression is somewhat complicated due to the need to allow curly braces
        // inside the regular expression. The placeholder regexp breaks down as follows:
        //    ([:*])([\w\[\]]+)              - classic placeholder ($1 / $2) (search version has - for snake-case)
        //    \{([\w\[\]]+)(?:\:\s*( ... ))?\}  - curly brace placeholder ($3) with optional regexp/type ... ($4) (search version has - for snake-case
        //    (?: ... | ... | ... )+         - the regexp consists of any number of atoms, an atom being either
        //    [^{}\\]+                       - anything other than curly braces or backslash
        //    \\.                            - a backslash escape
        //    \{(?:[^{}\\]+|\\.)*\}          - a matched set of curly braces containing other atoms
        var placeholder = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g;
        var searchPlaceholder = /([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g;
        var patterns = [];
        var last = 0;
        var matchArray;
        var checkParamErrors = function (id) {
            if (!UrlMatcher.nameValidator.test(id))
                throw new Error("Invalid parameter name '" + id + "' in pattern '" + pattern + "'");
            if ((0,_common_common__WEBPACK_IMPORTED_MODULE_0__.find)(_this._params, (0,_common_hof__WEBPACK_IMPORTED_MODULE_1__.propEq)('id', id)))
                throw new Error("Duplicate parameter name '" + id + "' in pattern '" + pattern + "'");
        };
        // Split into static segments separated by path parameter placeholders.
        // The number of segments is always 1 more than the number of parameters.
        var matchDetails = function (m, isSearch) {
            // IE[78] returns '' for unmatched groups instead of null
            var id = m[2] || m[3];
            var regexp = isSearch ? m[4] : m[4] || (m[1] === '*' ? '[\\s\\S]*' : null);
            var makeRegexpType = function (str) {
                return (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.inherit)(paramTypes.type(isSearch ? 'query' : 'path'), {
                    pattern: new RegExp(str, _this.config.caseInsensitive ? 'i' : undefined),
                });
            };
            return {
                id: id,
                regexp: regexp,
                segment: pattern.substring(last, m.index),
                type: !regexp ? null : paramTypes.type(regexp) || makeRegexpType(regexp),
            };
        };
        var details;
        var segment;
        // tslint:disable-next-line:no-conditional-assignment
        while ((matchArray = placeholder.exec(pattern))) {
            details = matchDetails(matchArray, false);
            if (details.segment.indexOf('?') >= 0)
                break; // we're into the search part
            checkParamErrors(details.id);
            this._params.push(paramFactory.fromPath(details.id, details.type, config.state));
            this._segments.push(details.segment);
            patterns.push([details.segment, (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.tail)(this._params)]);
            last = placeholder.lastIndex;
        }
        segment = pattern.substring(last);
        // Find any search parameter names and remove them from the last segment
        var i = segment.indexOf('?');
        if (i >= 0) {
            var search = segment.substring(i);
            segment = segment.substring(0, i);
            if (search.length > 0) {
                last = 0;
                // tslint:disable-next-line:no-conditional-assignment
                while ((matchArray = searchPlaceholder.exec(search))) {
                    details = matchDetails(matchArray, true);
                    checkParamErrors(details.id);
                    this._params.push(paramFactory.fromSearch(details.id, details.type, config.state));
                    last = placeholder.lastIndex;
                    // check if ?&
                }
            }
        }
        this._segments.push(segment);
        this._compiled = patterns.map(function (_pattern) { return quoteRegExp.apply(null, _pattern); }).concat(quoteRegExp(segment));
    }
    /** @internal */
    UrlMatcher.encodeDashes = function (str) {
        // Replace dashes with encoded "\-"
        return encodeURIComponent(str).replace(/-/g, function (c) { return "%5C%" + c.charCodeAt(0).toString(16).toUpperCase(); });
    };
    /** @internal Given a matcher, return an array with the matcher's path segments and path params, in order */
    UrlMatcher.pathSegmentsAndParams = function (matcher) {
        var staticSegments = matcher._segments;
        var pathParams = matcher._params.filter(function (p) { return p.location === _params_param__WEBPACK_IMPORTED_MODULE_3__.DefType.PATH; });
        return (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.arrayTuples)(staticSegments, pathParams.concat(undefined))
            .reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__.unnestR, [])
            .filter(function (x) { return x !== '' && (0,_common_predicates__WEBPACK_IMPORTED_MODULE_2__.isDefined)(x); });
    };
    /** @internal Given a matcher, return an array with the matcher's query params */
    UrlMatcher.queryParams = function (matcher) {
        return matcher._params.filter(function (p) { return p.location === _params_param__WEBPACK_IMPORTED_MODULE_3__.DefType.SEARCH; });
    };
    /**
     * Compare two UrlMatchers
     *
     * This comparison function converts a UrlMatcher into static and dynamic path segments.
     * Each static path segment is a static string between a path separator (slash character).
     * Each dynamic segment is a path parameter.
     *
     * The comparison function sorts static segments before dynamic ones.
     */
    UrlMatcher.compare = function (a, b) {
        /**
         * Turn a UrlMatcher and all its parent matchers into an array
         * of slash literals '/', string literals, and Param objects
         *
         * This example matcher matches strings like "/foo/:param/tail":
         * var matcher = $umf.compile("/foo").append($umf.compile("/:param")).append($umf.compile("/")).append($umf.compile("tail"));
         * var result = segments(matcher); // [ '/', 'foo', '/', Param, '/', 'tail' ]
         *
         * Caches the result as `matcher._cache.segments`
         */
        var segments = function (matcher) {
            return (matcher._cache.segments =
                matcher._cache.segments ||
                    matcher._cache.path
                        .map(UrlMatcher.pathSegmentsAndParams)
                        .reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__.unnestR, [])
                        .reduce(_common_strings__WEBPACK_IMPORTED_MODULE_4__.joinNeighborsR, [])
                        .map(function (x) { return ((0,_common_predicates__WEBPACK_IMPORTED_MODULE_2__.isString)(x) ? splitOnSlash(x) : x); })
                        .reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__.unnestR, []));
        };
        /**
         * Gets the sort weight for each segment of a UrlMatcher
         *
         * Caches the result as `matcher._cache.weights`
         */
        var weights = function (matcher) {
            return (matcher._cache.weights =
                matcher._cache.weights ||
                    segments(matcher).map(function (segment) {
                        // Sort slashes first, then static strings, the Params
                        if (segment === '/')
                            return 1;
                        if ((0,_common_predicates__WEBPACK_IMPORTED_MODULE_2__.isString)(segment))
                            return 2;
                        if (segment instanceof _params_param__WEBPACK_IMPORTED_MODULE_3__.Param)
                            return 3;
                    }));
        };
        /**
         * Pads shorter array in-place (mutates)
         */
        var padArrays = function (l, r, padVal) {
            var len = Math.max(l.length, r.length);
            while (l.length < len)
                l.push(padVal);
            while (r.length < len)
                r.push(padVal);
        };
        var weightsA = weights(a), weightsB = weights(b);
        padArrays(weightsA, weightsB, 0);
        var _pairs = (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.arrayTuples)(weightsA, weightsB);
        var cmp, i;
        for (i = 0; i < _pairs.length; i++) {
            cmp = _pairs[i][0] - _pairs[i][1];
            if (cmp !== 0)
                return cmp;
        }
        return 0;
    };
    /**
     * Creates a new concatenated UrlMatcher
     *
     * Builds a new UrlMatcher by appending another UrlMatcher to this one.
     *
     * @param url A `UrlMatcher` instance to append as a child of the current `UrlMatcher`.
     */
    UrlMatcher.prototype.append = function (url) {
        this._children.push(url);
        url._cache = {
            path: this._cache.path.concat(url),
            parent: this,
            pattern: null,
        };
        return url;
    };
    /** @internal */
    UrlMatcher.prototype.isRoot = function () {
        return this._cache.path[0] === this;
    };
    /** Returns the input pattern string */
    UrlMatcher.prototype.toString = function () {
        return this.pattern;
    };
    UrlMatcher.prototype._getDecodedParamValue = function (value, param) {
        if ((0,_common_predicates__WEBPACK_IMPORTED_MODULE_2__.isDefined)(value)) {
            if (this.config.decodeParams && !param.type.raw) {
                if ((0,_common_predicates__WEBPACK_IMPORTED_MODULE_2__.isArray)(value)) {
                    value = value.map(function (paramValue) { return decodeURIComponent(paramValue); });
                }
                else {
                    value = decodeURIComponent(value);
                }
            }
            value = param.type.decode(value);
        }
        return param.value(value);
    };
    /**
     * Tests the specified url/path against this matcher.
     *
     * Tests if the given url matches this matcher's pattern, and returns an object containing the captured
     * parameter values.  Returns null if the path does not match.
     *
     * The returned object contains the values
     * of any search parameters that are mentioned in the pattern, but their value may be null if
     * they are not present in `search`. This means that search parameters are always treated
     * as optional.
     *
     * #### Example:
     * ```js
     * new UrlMatcher('/user/{id}?q&r').exec('/user/bob', {
     *   x: '1', q: 'hello'
     * });
     * // returns { id: 'bob', q: 'hello', r: null }
     * ```
     *
     * @param path    The URL path to match, e.g. `$location.path()`.
     * @param search  URL search parameters, e.g. `$location.search()`.
     * @param hash    URL hash e.g. `$location.hash()`.
     * @param options
     *
     * @returns The captured parameter values.
     */
    UrlMatcher.prototype.exec = function (path, search, hash, options) {
        var _this = this;
        if (search === void 0) { search = {}; }
        if (options === void 0) { options = {}; }
        var match = memoizeTo(this._cache, 'pattern', function () {
            return new RegExp([
                '^',
                (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.unnest)(_this._cache.path.map((0,_common_hof__WEBPACK_IMPORTED_MODULE_1__.prop)('_compiled'))).join(''),
                _this.config.strict === false ? '/?' : '',
                '$',
            ].join(''), _this.config.caseInsensitive ? 'i' : undefined);
        }).exec(path);
        if (!match)
            return null;
        // options = defaults(options, { isolate: false });
        var allParams = this.parameters(), pathParams = allParams.filter(function (param) { return !param.isSearch(); }), searchParams = allParams.filter(function (param) { return param.isSearch(); }), nPathSegments = this._cache.path.map(function (urlm) { return urlm._segments.length - 1; }).reduce(function (a, x) { return a + x; }), values = {};
        if (nPathSegments !== match.length - 1)
            throw new Error("Unbalanced capture group in route '" + this.pattern + "'");
        function decodePathArray(paramVal) {
            var reverseString = function (str) { return str.split('').reverse().join(''); };
            var unquoteDashes = function (str) { return str.replace(/\\-/g, '-'); };
            var split = reverseString(paramVal).split(/-(?!\\)/);
            var allReversed = (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.map)(split, reverseString);
            return (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.map)(allReversed, unquoteDashes).reverse();
        }
        for (var i = 0; i < nPathSegments; i++) {
            var param = pathParams[i];
            var value = match[i + 1];
            // if the param value matches a pre-replace pair, replace the value before decoding.
            for (var j = 0; j < param.replace.length; j++) {
                if (param.replace[j].from === value)
                    value = param.replace[j].to;
            }
            if (value && param.array === true)
                value = decodePathArray(value);
            values[param.id] = this._getDecodedParamValue(value, param);
        }
        searchParams.forEach(function (param) {
            var value = search[param.id];
            for (var j = 0; j < param.replace.length; j++) {
                if (param.replace[j].from === value)
                    value = param.replace[j].to;
            }
            values[param.id] = _this._getDecodedParamValue(value, param);
        });
        if (hash)
            values['#'] = hash;
        return values;
    };
    /**
     * @internal
     * Returns all the [[Param]] objects of all path and search parameters of this pattern in order of appearance.
     *
     * @returns {Array.<Param>}  An array of [[Param]] objects. Must be treated as read-only. If the
     *    pattern has no parameters, an empty array is returned.
     */
    UrlMatcher.prototype.parameters = function (opts) {
        if (opts === void 0) { opts = {}; }
        if (opts.inherit === false)
            return this._params;
        return (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.unnest)(this._cache.path.map(function (matcher) { return matcher._params; }));
    };
    /**
     * @internal
     * Returns a single parameter from this UrlMatcher by id
     *
     * @param id
     * @param opts
     * @returns {T|Param|any|boolean|UrlMatcher|null}
     */
    UrlMatcher.prototype.parameter = function (id, opts) {
        var _this = this;
        if (opts === void 0) { opts = {}; }
        var findParam = function () {
            for (var _i = 0, _a = _this._params; _i < _a.length; _i++) {
                var param = _a[_i];
                if (param.id === id)
                    return param;
            }
        };
        var parent = this._cache.parent;
        return findParam() || (opts.inherit !== false && parent && parent.parameter(id, opts)) || null;
    };
    /**
     * Validates the input parameter values against this UrlMatcher
     *
     * Checks an object hash of parameters to validate their correctness according to the parameter
     * types of this `UrlMatcher`.
     *
     * @param params The object hash of parameters to validate.
     * @returns Returns `true` if `params` validates, otherwise `false`.
     */
    UrlMatcher.prototype.validates = function (params) {
        var validParamVal = function (param, val) { return !param || param.validates(val); };
        params = params || {};
        // I'm not sure why this checks only the param keys passed in, and not all the params known to the matcher
        var paramSchema = this.parameters().filter(function (paramDef) { return params.hasOwnProperty(paramDef.id); });
        return paramSchema.map(function (paramDef) { return validParamVal(paramDef, params[paramDef.id]); }).reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__.allTrueR, true);
    };
    /**
     * Given a set of parameter values, creates a URL from this UrlMatcher.
     *
     * Creates a URL that matches this pattern by substituting the specified values
     * for the path and search parameters.
     *
     * #### Example:
     * ```js
     * new UrlMatcher('/user/{id}?q').format({ id:'bob', q:'yes' });
     * // returns '/user/bob?q=yes'
     * ```
     *
     * @param values  the values to substitute for the parameters in this pattern.
     * @returns the formatted URL (path and optionally search part).
     */
    UrlMatcher.prototype.format = function (values) {
        if (values === void 0) { values = {}; }
        // Build the full path of UrlMatchers (including all parent UrlMatchers)
        var urlMatchers = this._cache.path;
        // Extract all the static segments and Params (processed as ParamDetails)
        // into an ordered array
        var pathSegmentsAndParams = urlMatchers
            .map(UrlMatcher.pathSegmentsAndParams)
            .reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__.unnestR, [])
            .map(function (x) { return ((0,_common_predicates__WEBPACK_IMPORTED_MODULE_2__.isString)(x) ? x : getDetails(x)); });
        // Extract the query params into a separate array
        var queryParams = urlMatchers
            .map(UrlMatcher.queryParams)
            .reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__.unnestR, [])
            .map(getDetails);
        var isInvalid = function (param) { return param.isValid === false; };
        if (pathSegmentsAndParams.concat(queryParams).filter(isInvalid).length) {
            return null;
        }
        /**
         * Given a Param, applies the parameter value, then returns detailed information about it
         */
        function getDetails(param) {
            // Normalize to typed value
            var value = param.value(values[param.id]);
            var isValid = param.validates(value);
            var isDefaultValue = param.isDefaultValue(value);
            // Check if we're in squash mode for the parameter
            var squash = isDefaultValue ? param.squash : false;
            // Allow the Parameter's Type to encode the value
            var encoded = param.type.encode(value);
            return { param: param, value: value, isValid: isValid, isDefaultValue: isDefaultValue, squash: squash, encoded: encoded };
        }
        // Build up the path-portion from the list of static segments and parameters
        var pathString = pathSegmentsAndParams.reduce(function (acc, x) {
            // The element is a static segment (a raw string); just append it
            if ((0,_common_predicates__WEBPACK_IMPORTED_MODULE_2__.isString)(x))
                return acc + x;
            // Otherwise, it's a ParamDetails.
            var squash = x.squash, encoded = x.encoded, param = x.param;
            // If squash is === true, try to remove a slash from the path
            if (squash === true)
                return acc.match(/\/$/) ? acc.slice(0, -1) : acc;
            // If squash is a string, use the string for the param value
            if ((0,_common_predicates__WEBPACK_IMPORTED_MODULE_2__.isString)(squash))
                return acc + squash;
            if (squash !== false)
                return acc; // ?
            if (encoded == null)
                return acc;
            // If this parameter value is an array, encode the value using encodeDashes
            if ((0,_common_predicates__WEBPACK_IMPORTED_MODULE_2__.isArray)(encoded))
                return acc + (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.map)(encoded, UrlMatcher.encodeDashes).join('-');
            // If the parameter type is "raw", then do not encodeURIComponent
            if (param.raw)
                return acc + encoded;
            // Encode the value
            return acc + encodeURIComponent(encoded);
        }, '');
        // Build the query string by applying parameter values (array or regular)
        // then mapping to key=value, then flattening and joining using "&"
        var queryString = queryParams
            .map(function (paramDetails) {
            var param = paramDetails.param, squash = paramDetails.squash, encoded = paramDetails.encoded, isDefaultValue = paramDetails.isDefaultValue;
            if (encoded == null || (isDefaultValue && squash !== false))
                return;
            if (!(0,_common_predicates__WEBPACK_IMPORTED_MODULE_2__.isArray)(encoded))
                encoded = [encoded];
            if (encoded.length === 0)
                return;
            if (!param.raw)
                encoded = (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.map)(encoded, encodeURIComponent);
            return encoded.map(function (val) { return param.id + "=" + val; });
        })
            .filter(_common_common__WEBPACK_IMPORTED_MODULE_0__.identity)
            .reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__.unnestR, [])
            .join('&');
        // Concat the pathstring with the queryString (if exists) and the hashString (if exists)
        return pathString + (queryString ? "?" + queryString : '') + (values['#'] ? '#' + values['#'] : '');
    };
    /** @internal */
    UrlMatcher.nameValidator = /^\w+([-.]+\w+)*(?:\[\])?$/;
    return UrlMatcher;
}());

//# sourceMappingURL=urlMatcher.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/url/urlMatcherFactory.js":
/*!*********************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/url/urlMatcherFactory.js ***!
  \*********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParamFactory: () => (/* binding */ ParamFactory),
/* harmony export */   UrlMatcherFactory: () => (/* binding */ UrlMatcherFactory)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/index.js");
/* harmony import */ var _urlMatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./urlMatcher */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/url/urlMatcher.js");
/* harmony import */ var _params__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../params */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/params/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var ParamFactory = /** @class */ (function () {
    function ParamFactory(router) {
        this.router = router;
    }
    ParamFactory.prototype.fromConfig = function (id, type, state) {
        return new _params__WEBPACK_IMPORTED_MODULE_2__.Param(id, type, _params__WEBPACK_IMPORTED_MODULE_2__.DefType.CONFIG, this.router.urlService.config, state);
    };
    ParamFactory.prototype.fromPath = function (id, type, state) {
        return new _params__WEBPACK_IMPORTED_MODULE_2__.Param(id, type, _params__WEBPACK_IMPORTED_MODULE_2__.DefType.PATH, this.router.urlService.config, state);
    };
    ParamFactory.prototype.fromSearch = function (id, type, state) {
        return new _params__WEBPACK_IMPORTED_MODULE_2__.Param(id, type, _params__WEBPACK_IMPORTED_MODULE_2__.DefType.SEARCH, this.router.urlService.config, state);
    };
    return ParamFactory;
}());

/**
 * Factory for [[UrlMatcher]] instances.
 *
 * The factory is available to ng1 services as
 * `$urlMatcherFactory` or ng1 providers as `$urlMatcherFactoryProvider`.
 */
var UrlMatcherFactory = /** @class */ (function () {
    // TODO: move implementations to UrlConfig (urlService.config)
    function UrlMatcherFactory(/** @internal */ router) {
        var _this = this;
        this.router = router;
        /** Creates a new [[Param]] for a given location (DefType) */
        this.paramFactory = new ParamFactory(this.router);
        // TODO: Check if removal of this will break anything, then remove these
        this.UrlMatcher = _urlMatcher__WEBPACK_IMPORTED_MODULE_1__.UrlMatcher;
        this.Param = _params__WEBPACK_IMPORTED_MODULE_2__.Param;
        /** @deprecated use [[UrlConfig.caseInsensitive]] */
        this.caseInsensitive = function (value) { return _this.router.urlService.config.caseInsensitive(value); };
        /** @deprecated use [[UrlConfig.defaultSquashPolicy]] */
        this.defaultSquashPolicy = function (value) { return _this.router.urlService.config.defaultSquashPolicy(value); };
        /** @deprecated use [[UrlConfig.strictMode]] */
        this.strictMode = function (value) { return _this.router.urlService.config.strictMode(value); };
        /** @deprecated use [[UrlConfig.type]] */
        this.type = function (name, definition, definitionFn) {
            return _this.router.urlService.config.type(name, definition, definitionFn) || _this;
        };
    }
    /**
     * Creates a [[UrlMatcher]] for the specified pattern.
     *
     * @param pattern  The URL pattern.
     * @param config  The config object hash.
     * @returns The UrlMatcher.
     */
    UrlMatcherFactory.prototype.compile = function (pattern, config) {
        var urlConfig = this.router.urlService.config;
        // backward-compatible support for config.params -> config.state.params
        var params = config && !config.state && config.params;
        config = params ? __assign({ state: { params: params } }, config) : config;
        var globalConfig = {
            strict: urlConfig._isStrictMode,
            caseInsensitive: urlConfig._isCaseInsensitive,
            decodeParams: urlConfig._decodeParams,
        };
        return new _urlMatcher__WEBPACK_IMPORTED_MODULE_1__.UrlMatcher(pattern, urlConfig.paramTypes, this.paramFactory, (0,_common__WEBPACK_IMPORTED_MODULE_0__.extend)(globalConfig, config));
    };
    /**
     * Returns true if the specified object is a [[UrlMatcher]], or false otherwise.
     *
     * @param object  The object to perform the type check against.
     * @returns `true` if the object matches the `UrlMatcher` interface, by
     *          implementing all the same methods.
     */
    UrlMatcherFactory.prototype.isMatcher = function (object) {
        // TODO: typeof?
        if (!(0,_common__WEBPACK_IMPORTED_MODULE_0__.isObject)(object))
            return false;
        var result = true;
        (0,_common__WEBPACK_IMPORTED_MODULE_0__.forEach)(_urlMatcher__WEBPACK_IMPORTED_MODULE_1__.UrlMatcher.prototype, function (val, name) {
            if ((0,_common__WEBPACK_IMPORTED_MODULE_0__.isFunction)(val))
                result = result && (0,_common__WEBPACK_IMPORTED_MODULE_0__.isDefined)(object[name]) && (0,_common__WEBPACK_IMPORTED_MODULE_0__.isFunction)(object[name]);
        });
        return result;
    };
    /** @internal */
    UrlMatcherFactory.prototype.$get = function () {
        var urlConfig = this.router.urlService.config;
        urlConfig.paramTypes.enqueue = false;
        urlConfig.paramTypes._flushTypeQueue();
        return this;
    };
    return UrlMatcherFactory;
}());

//# sourceMappingURL=urlMatcherFactory.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/url/urlRouter.js":
/*!*************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/url/urlRouter.js ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UrlRouter: () => (/* binding */ UrlRouter)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/index.js");
/* harmony import */ var _urlRule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./urlRule */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/url/urlRule.js");


function appendBasePath(url, isHtml5, absolute, baseHref) {
    if (baseHref === '/')
        return url;
    if (isHtml5)
        return (0,_common__WEBPACK_IMPORTED_MODULE_0__.stripLastPathElement)(baseHref) + url;
    if (absolute)
        return baseHref.slice(1) + url;
    return url;
}
/**
 * Updates URL and responds to URL changes
 *
 * ### Deprecation warning:
 * This class is now considered to be an internal API
 * Use the [[UrlService]] instead.
 * For configuring URL rules, use the [[UrlRules]] which can be found as [[UrlService.rules]].
 */
var UrlRouter = /** @class */ (function () {
    /** @internal */
    function UrlRouter(/** @internal */ router) {
        var _this = this;
        this.router = router;
        // Delegate these calls to [[UrlService]]
        /** @deprecated use [[UrlService.sync]]*/
        this.sync = function (evt) { return _this.router.urlService.sync(evt); };
        /** @deprecated use [[UrlService.listen]]*/
        this.listen = function (enabled) { return _this.router.urlService.listen(enabled); };
        /** @deprecated use [[UrlService.deferIntercept]]*/
        this.deferIntercept = function (defer) { return _this.router.urlService.deferIntercept(defer); };
        /** @deprecated use [[UrlService.match]]*/
        this.match = function (urlParts) { return _this.router.urlService.match(urlParts); };
        // Delegate these calls to [[UrlRules]]
        /** @deprecated use [[UrlRules.initial]]*/
        this.initial = function (handler) {
            return _this.router.urlService.rules.initial(handler);
        };
        /** @deprecated use [[UrlRules.otherwise]]*/
        this.otherwise = function (handler) {
            return _this.router.urlService.rules.otherwise(handler);
        };
        /** @deprecated use [[UrlRules.removeRule]]*/
        this.removeRule = function (rule) { return _this.router.urlService.rules.removeRule(rule); };
        /** @deprecated use [[UrlRules.rule]]*/
        this.rule = function (rule) { return _this.router.urlService.rules.rule(rule); };
        /** @deprecated use [[UrlRules.rules]]*/
        this.rules = function () { return _this.router.urlService.rules.rules(); };
        /** @deprecated use [[UrlRules.sort]]*/
        this.sort = function (compareFn) { return _this.router.urlService.rules.sort(compareFn); };
        /** @deprecated use [[UrlRules.when]]*/
        this.when = function (matcher, handler, options) { return _this.router.urlService.rules.when(matcher, handler, options); };
        this.urlRuleFactory = new _urlRule__WEBPACK_IMPORTED_MODULE_1__.UrlRuleFactory(router);
    }
    /** Internal API. */
    UrlRouter.prototype.update = function (read) {
        var $url = this.router.locationService;
        if (read) {
            this.location = $url.url();
            return;
        }
        if ($url.url() === this.location)
            return;
        $url.url(this.location, true);
    };
    /**
     * Internal API.
     *
     * Pushes a new location to the browser history.
     *
     * @internal
     * @param urlMatcher
     * @param params
     * @param options
     */
    UrlRouter.prototype.push = function (urlMatcher, params, options) {
        var replace = options && !!options.replace;
        this.router.urlService.url(urlMatcher.format(params || {}), replace);
    };
    /**
     * Builds and returns a URL with interpolated parameters
     *
     * #### Example:
     * ```js
     * matcher = $umf.compile("/about/:person");
     * params = { person: "bob" };
     * $bob = $urlRouter.href(matcher, params);
     * // $bob == "/about/bob";
     * ```
     *
     * @param urlMatcher The [[UrlMatcher]] object which is used as the template of the URL to generate.
     * @param params An object of parameter values to fill the matcher's required parameters.
     * @param options Options object. The options are:
     *
     * - **`absolute`** - {boolean=false},  If true will generate an absolute url, e.g. "http://www.example.com/fullurl".
     *
     * @returns Returns the fully compiled URL, or `null` if `params` fail validation against `urlMatcher`
     */
    UrlRouter.prototype.href = function (urlMatcher, params, options) {
        var url = urlMatcher.format(params);
        if (url == null)
            return null;
        options = options || { absolute: false };
        var cfg = this.router.urlService.config;
        var isHtml5 = cfg.html5Mode();
        if (!isHtml5 && url !== null) {
            url = '#' + cfg.hashPrefix() + url;
        }
        url = appendBasePath(url, isHtml5, options.absolute, cfg.baseHref());
        if (!options.absolute || !url) {
            return url;
        }
        var slash = !isHtml5 && url ? '/' : '';
        var cfgPort = cfg.port();
        var port = (cfgPort === 80 || cfgPort === 443 ? '' : ':' + cfgPort);
        return [cfg.protocol(), '://', cfg.host(), port, slash, url].join('');
    };
    Object.defineProperty(UrlRouter.prototype, "interceptDeferred", {
        /** @deprecated use [[UrlService.interceptDeferred]]*/
        get: function () {
            return this.router.urlService.interceptDeferred;
        },
        enumerable: false,
        configurable: true
    });
    return UrlRouter;
}());

//# sourceMappingURL=urlRouter.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/url/urlRule.js":
/*!***********************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/url/urlRule.js ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseUrlRule: () => (/* binding */ BaseUrlRule),
/* harmony export */   UrlRuleFactory: () => (/* binding */ UrlRuleFactory)
/* harmony export */ });
/* harmony import */ var _urlMatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./urlMatcher */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/url/urlMatcher.js");
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/hof.js");
/* harmony import */ var _state_stateObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state/stateObject */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/state/stateObject.js");





/**
 * Creates a [[UrlRule]]
 *
 * Creates a [[UrlRule]] from a:
 *
 * - `string`
 * - [[UrlMatcher]]
 * - `RegExp`
 * - [[StateObject]]
 */
var UrlRuleFactory = /** @class */ (function () {
    function UrlRuleFactory(router) {
        this.router = router;
    }
    UrlRuleFactory.prototype.compile = function (str) {
        return this.router.urlMatcherFactory.compile(str);
    };
    UrlRuleFactory.prototype.create = function (what, handler) {
        var _this = this;
        var isState = _state_stateObject__WEBPACK_IMPORTED_MODULE_4__.StateObject.isState, isStateDeclaration = _state_stateObject__WEBPACK_IMPORTED_MODULE_4__.StateObject.isStateDeclaration;
        var makeRule = (0,_common_hof__WEBPACK_IMPORTED_MODULE_3__.pattern)([
            [_common_predicates__WEBPACK_IMPORTED_MODULE_1__.isString, function (_what) { return makeRule(_this.compile(_what)); }],
            [(0,_common_hof__WEBPACK_IMPORTED_MODULE_3__.is)(_urlMatcher__WEBPACK_IMPORTED_MODULE_0__.UrlMatcher), function (_what) { return _this.fromUrlMatcher(_what, handler); }],
            [(0,_common_hof__WEBPACK_IMPORTED_MODULE_3__.or)(isState, isStateDeclaration), function (_what) { return _this.fromState(_what, _this.router); }],
            [(0,_common_hof__WEBPACK_IMPORTED_MODULE_3__.is)(RegExp), function (_what) { return _this.fromRegExp(_what, handler); }],
            [_common_predicates__WEBPACK_IMPORTED_MODULE_1__.isFunction, function (_what) { return new BaseUrlRule(_what, handler); }],
        ]);
        var rule = makeRule(what);
        if (!rule)
            throw new Error("invalid 'what' in when()");
        return rule;
    };
    /**
     * A UrlRule which matches based on a UrlMatcher
     *
     * The `handler` may be either a `string`, a [[UrlRuleHandlerFn]] or another [[UrlMatcher]]
     *
     * ## Handler as a function
     *
     * If `handler` is a function, the function is invoked with:
     *
     * - matched parameter values ([[RawParams]] from [[UrlMatcher.exec]])
     * - url: the current Url ([[UrlParts]])
     * - router: the router object ([[UIRouter]])
     *
     * #### Example:
     * ```js
     * var urlMatcher = $umf.compile("/foo/:fooId/:barId");
     * var rule = factory.fromUrlMatcher(urlMatcher, match => "/home/" + match.fooId + "/" + match.barId);
     * var match = rule.match('/foo/123/456'); // results in { fooId: '123', barId: '456' }
     * var result = rule.handler(match); // '/home/123/456'
     * ```
     *
     * ## Handler as UrlMatcher
     *
     * If `handler` is a UrlMatcher, the handler matcher is used to create the new url.
     * The `handler` UrlMatcher is formatted using the matched param from the first matcher.
     * The url is replaced with the result.
     *
     * #### Example:
     * ```js
     * var urlMatcher = $umf.compile("/foo/:fooId/:barId");
     * var handler = $umf.compile("/home/:fooId/:barId");
     * var rule = factory.fromUrlMatcher(urlMatcher, handler);
     * var match = rule.match('/foo/123/456'); // results in { fooId: '123', barId: '456' }
     * var result = rule.handler(match); // '/home/123/456'
     * ```
     */
    UrlRuleFactory.prototype.fromUrlMatcher = function (urlMatcher, handler) {
        var _handler = handler;
        if ((0,_common_predicates__WEBPACK_IMPORTED_MODULE_1__.isString)(handler))
            handler = this.router.urlMatcherFactory.compile(handler);
        if ((0,_common_hof__WEBPACK_IMPORTED_MODULE_3__.is)(_urlMatcher__WEBPACK_IMPORTED_MODULE_0__.UrlMatcher)(handler))
            _handler = function (match) { return handler.format(match); };
        function matchUrlParamters(url) {
            var params = urlMatcher.exec(url.path, url.search, url.hash);
            return urlMatcher.validates(params) && params;
        }
        // Prioritize URLs, lowest to highest:
        // - Some optional URL parameters, but none matched
        // - No optional parameters in URL
        // - Some optional parameters, some matched
        // - Some optional parameters, all matched
        function matchPriority(params) {
            var optional = urlMatcher.parameters().filter(function (param) { return param.isOptional; });
            if (!optional.length)
                return 0.000001;
            var matched = optional.filter(function (param) { return params[param.id]; });
            return matched.length / optional.length;
        }
        var details = { urlMatcher: urlMatcher, matchPriority: matchPriority, type: 'URLMATCHER' };
        return (0,_common_common__WEBPACK_IMPORTED_MODULE_2__.extend)(new BaseUrlRule(matchUrlParamters, _handler), details);
    };
    /**
     * A UrlRule which matches a state by its url
     *
     * #### Example:
     * ```js
     * var rule = factory.fromState($state.get('foo'), router);
     * var match = rule.match('/foo/123/456'); // results in { fooId: '123', barId: '456' }
     * var result = rule.handler(match);
     * // Starts a transition to 'foo' with params: { fooId: '123', barId: '456' }
     * ```
     */
    UrlRuleFactory.prototype.fromState = function (stateOrDecl, router) {
        var state = _state_stateObject__WEBPACK_IMPORTED_MODULE_4__.StateObject.isStateDeclaration(stateOrDecl) ? stateOrDecl.$$state() : stateOrDecl;
        /**
         * Handles match by transitioning to matched state
         *
         * First checks if the router should start a new transition.
         * A new transition is not required if the current state's URL
         * and the new URL are already identical
         */
        var handler = function (match) {
            var $state = router.stateService;
            var globals = router.globals;
            if ($state.href(state, match) !== $state.href(globals.current, globals.params)) {
                $state.transitionTo(state, match, { inherit: true, source: 'url' });
            }
        };
        var details = { state: state, type: 'STATE' };
        return (0,_common_common__WEBPACK_IMPORTED_MODULE_2__.extend)(this.fromUrlMatcher(state.url, handler), details);
    };
    /**
     * A UrlRule which matches based on a regular expression
     *
     * The `handler` may be either a [[UrlRuleHandlerFn]] or a string.
     *
     * ## Handler as a function
     *
     * If `handler` is a function, the function is invoked with:
     *
     * - regexp match array (from `regexp`)
     * - url: the current Url ([[UrlParts]])
     * - router: the router object ([[UIRouter]])
     *
     * #### Example:
     * ```js
     * var rule = factory.fromRegExp(/^\/foo\/(bar|baz)$/, match => "/home/" + match[1])
     * var match = rule.match('/foo/bar'); // results in [ '/foo/bar', 'bar' ]
     * var result = rule.handler(match); // '/home/bar'
     * ```
     *
     * ## Handler as string
     *
     * If `handler` is a string, the url is *replaced by the string* when the Rule is invoked.
     * The string is first interpolated using `string.replace()` style pattern.
     *
     * #### Example:
     * ```js
     * var rule = factory.fromRegExp(/^\/foo\/(bar|baz)$/, "/home/$1")
     * var match = rule.match('/foo/bar'); // results in [ '/foo/bar', 'bar' ]
     * var result = rule.handler(match); // '/home/bar'
     * ```
     */
    UrlRuleFactory.prototype.fromRegExp = function (regexp, handler) {
        if (regexp.global || regexp.sticky)
            throw new Error('Rule RegExp must not be global or sticky');
        /**
         * If handler is a string, the url will be replaced by the string.
         * If the string has any String.replace() style variables in it (like `$2`),
         * they will be replaced by the captures from [[match]]
         */
        var redirectUrlTo = function (match) {
            // Interpolates matched values into $1 $2, etc using a String.replace()-style pattern
            return handler.replace(/\$(\$|\d{1,2})/, function (m, what) { return match[what === '$' ? 0 : Number(what)]; });
        };
        var _handler = (0,_common_predicates__WEBPACK_IMPORTED_MODULE_1__.isString)(handler) ? redirectUrlTo : handler;
        var matchParamsFromRegexp = function (url) { return regexp.exec(url.path); };
        var details = { regexp: regexp, type: 'REGEXP' };
        return (0,_common_common__WEBPACK_IMPORTED_MODULE_2__.extend)(new BaseUrlRule(matchParamsFromRegexp, _handler), details);
    };
    UrlRuleFactory.isUrlRule = function (obj) { return obj && ['type', 'match', 'handler'].every(function (key) { return (0,_common_predicates__WEBPACK_IMPORTED_MODULE_1__.isDefined)(obj[key]); }); };
    return UrlRuleFactory;
}());

/**
 * A base rule which calls `match`
 *
 * The value from the `match` function is passed through to the `handler`.
 * @internal
 */
var BaseUrlRule = /** @class */ (function () {
    function BaseUrlRule(match, handler) {
        var _this = this;
        this.match = match;
        this.type = 'RAW';
        this.matchPriority = function (match) { return 0 - _this.$id; };
        this.handler = handler || _common_common__WEBPACK_IMPORTED_MODULE_2__.identity;
    }
    return BaseUrlRule;
}());

//# sourceMappingURL=urlRule.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/url/urlRules.js":
/*!************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/url/urlRules.js ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UrlRules: () => (/* binding */ UrlRules)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/state/index.js");
/* harmony import */ var _urlMatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./urlMatcher */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/url/urlMatcher.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/index.js");
/* harmony import */ var _urlRule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./urlRule */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/url/urlRule.js");




var prioritySort = function (a, b) { return (b.priority || 0) - (a.priority || 0); };
var typeSort = function (a, b) {
    var weights = { STATE: 4, URLMATCHER: 4, REGEXP: 3, RAW: 2, OTHER: 1 };
    return (weights[a.type] || 0) - (weights[b.type] || 0);
};
var urlMatcherSort = function (a, b) {
    return !a.urlMatcher || !b.urlMatcher ? 0 : _urlMatcher__WEBPACK_IMPORTED_MODULE_1__.UrlMatcher.compare(a.urlMatcher, b.urlMatcher);
};
var idSort = function (a, b) {
    // Identically sorted STATE and URLMATCHER best rule will be chosen by `matchPriority` after each rule matches the URL
    var useMatchPriority = { STATE: true, URLMATCHER: true };
    var equal = useMatchPriority[a.type] && useMatchPriority[b.type];
    return equal ? 0 : (a.$id || 0) - (b.$id || 0);
};
/**
 * Default rule priority sorting function.
 *
 * Sorts rules by:
 *
 * - Explicit priority (set rule priority using [[UrlRules.when]])
 * - Rule type (STATE: 4, URLMATCHER: 4, REGEXP: 3, RAW: 2, OTHER: 1)
 * - `UrlMatcher` specificity ([[UrlMatcher.compare]]): works for STATE and URLMATCHER types to pick the most specific rule.
 * - Rule registration order (for rule types other than STATE and URLMATCHER)
 *   - Equally sorted State and UrlMatcher rules will each match the URL.
 *     Then, the *best* match is chosen based on how many parameter values were matched.
 */
var defaultRuleSortFn;
defaultRuleSortFn = function (a, b) {
    var cmp = prioritySort(a, b);
    if (cmp !== 0)
        return cmp;
    cmp = typeSort(a, b);
    if (cmp !== 0)
        return cmp;
    cmp = urlMatcherSort(a, b);
    if (cmp !== 0)
        return cmp;
    return idSort(a, b);
};
function getHandlerFn(handler) {
    if (!(0,_common__WEBPACK_IMPORTED_MODULE_2__.isFunction)(handler) && !(0,_common__WEBPACK_IMPORTED_MODULE_2__.isString)(handler) && !(0,_common__WEBPACK_IMPORTED_MODULE_2__.is)(_state__WEBPACK_IMPORTED_MODULE_0__.TargetState)(handler) && !_state__WEBPACK_IMPORTED_MODULE_0__.TargetState.isDef(handler)) {
        throw new Error("'handler' must be a string, function, TargetState, or have a state: 'newtarget' property");
    }
    return (0,_common__WEBPACK_IMPORTED_MODULE_2__.isFunction)(handler) ? handler : (0,_common__WEBPACK_IMPORTED_MODULE_2__.val)(handler);
}
/**
 * API for managing URL rules
 *
 * This API is used to create and manage URL rules.
 * URL rules are a mechanism to respond to specific URL patterns.
 *
 * The most commonly used methods are [[otherwise]] and [[when]].
 *
 * This API is found at `router.urlService.rules` (see: [[UIRouter.urlService]], [[URLService.rules]])
 */
var UrlRules = /** @class */ (function () {
    /** @internal */
    function UrlRules(/** @internal */ router) {
        this.router = router;
        /** @internal */ this._sortFn = defaultRuleSortFn;
        /** @internal */ this._rules = [];
        /** @internal */ this._id = 0;
        this.urlRuleFactory = new _urlRule__WEBPACK_IMPORTED_MODULE_3__.UrlRuleFactory(router);
    }
    /** @internal */
    UrlRules.prototype.dispose = function (router) {
        this._rules = [];
        delete this._otherwiseFn;
    };
    /**
     * Defines the initial state, path, or behavior to use when the app starts.
     *
     * This rule defines the initial/starting state for the application.
     *
     * This rule is triggered the first time the URL is checked (when the app initially loads).
     * The rule is triggered only when the url matches either `""` or `"/"`.
     *
     * Note: The rule is intended to be used when the root of the application is directly linked to.
     * When the URL is *not* `""` or `"/"` and doesn't match other rules, the [[otherwise]] rule is triggered.
     * This allows 404-like behavior when an unknown URL is deep-linked.
     *
     * #### Example:
     * Start app at `home` state.
     * ```js
     * .initial({ state: 'home' });
     * ```
     *
     * #### Example:
     * Start app at `/home` (by url)
     * ```js
     * .initial('/home');
     * ```
     *
     * #### Example:
     * When no other url rule matches, go to `home` state
     * ```js
     * .initial((matchValue, url, router) => {
     *   console.log('initial state');
     *   return { state: 'home' };
     * })
     * ```
     *
     * @param handler The initial state or url path, or a function which returns the state or url path (or performs custom logic).
     */
    UrlRules.prototype.initial = function (handler) {
        var handlerFn = getHandlerFn(handler);
        var matchFn = function (urlParts, router) {
            return router.globals.transitionHistory.size() === 0 && !!/^\/?$/.exec(urlParts.path);
        };
        this.rule(this.urlRuleFactory.create(matchFn, handlerFn));
    };
    /**
     * Defines the state, url, or behavior to use when no other rule matches the URL.
     *
     * This rule is matched when *no other rule* matches.
     * It is generally used to handle unknown URLs (similar to "404" behavior, but on the client side).
     *
     * - If `handler` a string, it is treated as a url redirect
     *
     * #### Example:
     * When no other url rule matches, redirect to `/index`
     * ```js
     * .otherwise('/index');
     * ```
     *
     * - If `handler` is an object with a `state` property, the state is activated.
     *
     * #### Example:
     * When no other url rule matches, redirect to `home` and provide a `dashboard` parameter value.
     * ```js
     * .otherwise({ state: 'home', params: { dashboard: 'default' } });
     * ```
     *
     * - If `handler` is a function, the function receives the current url ([[UrlParts]]) and the [[UIRouter]] object.
     *   The function can perform actions, and/or return a value.
     *
     * #### Example:
     * When no other url rule matches, manually trigger a transition to the `home` state
     * ```js
     * .otherwise((matchValue, urlParts, router) => {
     *   router.stateService.go('home');
     * });
     * ```
     *
     * #### Example:
     * When no other url rule matches, go to `home` state
     * ```js
     * .otherwise((matchValue, urlParts, router) => {
     *   return { state: 'home' };
     * });
     * ```
     *
     * @param handler The url path to redirect to, or a function which returns the url path (or performs custom logic).
     */
    UrlRules.prototype.otherwise = function (handler) {
        var handlerFn = getHandlerFn(handler);
        this._otherwiseFn = this.urlRuleFactory.create((0,_common__WEBPACK_IMPORTED_MODULE_2__.val)(true), handlerFn);
        this._sorted = false;
    };
    /**
     * Remove a rule previously registered
     *
     * @param rule the matcher rule that was previously registered using [[rule]]
     */
    UrlRules.prototype.removeRule = function (rule) {
        (0,_common__WEBPACK_IMPORTED_MODULE_2__.removeFrom)(this._rules, rule);
    };
    /**
     * Manually adds a URL Rule.
     *
     * Usually, a url rule is added using [[StateDeclaration.url]] or [[when]].
     * This api can be used directly for more control (to register a [[BaseUrlRule]], for example).
     * Rules can be created using [[urlRuleFactory]], or created manually as simple objects.
     *
     * A rule should have a `match` function which returns truthy if the rule matched.
     * It should also have a `handler` function which is invoked if the rule is the best match.
     *
     * @return a function that deregisters the rule
     */
    UrlRules.prototype.rule = function (rule) {
        var _this = this;
        if (!_urlRule__WEBPACK_IMPORTED_MODULE_3__.UrlRuleFactory.isUrlRule(rule))
            throw new Error('invalid rule');
        rule.$id = this._id++;
        rule.priority = rule.priority || 0;
        this._rules.push(rule);
        this._sorted = false;
        return function () { return _this.removeRule(rule); };
    };
    /**
     * Gets all registered rules
     *
     * @returns an array of all the registered rules
     */
    UrlRules.prototype.rules = function () {
        this.ensureSorted();
        return this._rules.concat(this._otherwiseFn ? [this._otherwiseFn] : []);
    };
    /**
     * Defines URL Rule priorities
     *
     * More than one rule ([[UrlRule]]) might match a given URL.
     * This `compareFn` is used to sort the rules by priority.
     * Higher priority rules should sort earlier.
     *
     * The [[defaultRuleSortFn]] is used by default.
     *
     * You only need to call this function once.
     * The `compareFn` will be used to sort the rules as each is registered.
     *
     * If called without any parameter, it will re-sort the rules.
     *
     * ---
     *
     * Url rules may come from multiple sources: states's urls ([[StateDeclaration.url]]), [[when]], and [[rule]].
     * Each rule has a (user-provided) [[UrlRule.priority]], a [[UrlRule.type]], and a [[UrlRule.$id]]
     * The `$id` is is the order in which the rule was registered.
     *
     * The sort function should use these data, or data found on a specific type
     * of [[UrlRule]] (such as [[StateRule.state]]), to order the rules as desired.
     *
     * #### Example:
     * This compare function prioritizes rules by the order in which the rules were registered.
     * A rule registered earlier has higher priority.
     *
     * ```js
     * function compareFn(a, b) {
     *   return a.$id - b.$id;
     * }
     * ```
     *
     * @param compareFn a function that compares to [[UrlRule]] objects.
     *    The `compareFn` should abide by the `Array.sort` compare function rules.
     *    Given two rules, `a` and `b`, return a negative number if `a` should be higher priority.
     *    Return a positive number if `b` should be higher priority.
     *    Return `0` if the rules are identical.
     *
     *    See the [mozilla reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Description)
     *    for details.
     */
    UrlRules.prototype.sort = function (compareFn) {
        var sorted = this.stableSort(this._rules, (this._sortFn = compareFn || this._sortFn));
        // precompute _sortGroup values and apply to each rule
        var group = 0;
        for (var i = 0; i < sorted.length; i++) {
            sorted[i]._group = group;
            if (i < sorted.length - 1 && this._sortFn(sorted[i], sorted[i + 1]) !== 0) {
                group++;
            }
        }
        this._rules = sorted;
        this._sorted = true;
    };
    /** @internal */
    UrlRules.prototype.ensureSorted = function () {
        this._sorted || this.sort();
    };
    /** @internal */
    UrlRules.prototype.stableSort = function (arr, compareFn) {
        var arrOfWrapper = arr.map(function (elem, idx) { return ({ elem: elem, idx: idx }); });
        arrOfWrapper.sort(function (wrapperA, wrapperB) {
            var cmpDiff = compareFn(wrapperA.elem, wrapperB.elem);
            return cmpDiff === 0 ? wrapperA.idx - wrapperB.idx : cmpDiff;
        });
        return arrOfWrapper.map(function (wrapper) { return wrapper.elem; });
    };
    /**
     * Registers a `matcher` and `handler` for custom URLs handling.
     *
     * The `matcher` can be:
     *
     * - a [[UrlMatcher]]: See: [[UrlMatcherFactory.compile]]
     * - a `string`: The string is compiled to a [[UrlMatcher]]
     * - a `RegExp`: The regexp is used to match the url.
     *
     * The `handler` can be:
     *
     * - a string: The url is redirected to the value of the string.
     * - a function: The url is redirected to the return value of the function.
     *
     * ---
     *
     * When the `handler` is a `string` and the `matcher` is a `UrlMatcher` (or string), the redirect
     * string is interpolated with parameter values.
     *
     * #### Example:
     * When the URL is `/foo/123` the rule will redirect to `/bar/123`.
     * ```js
     * .when("/foo/:param1", "/bar/:param1")
     * ```
     *
     * ---
     *
     * When the `handler` is a string and the `matcher` is a `RegExp`, the redirect string is
     * interpolated with capture groups from the RegExp.
     *
     * #### Example:
     * When the URL is `/foo/123` the rule will redirect to `/bar/123`.
     * ```js
     * .when(new RegExp("^/foo/(.*)$"), "/bar/$1");
     * ```
     *
     * ---
     *
     * When the handler is a function, it receives the matched value, the current URL, and the `UIRouter` object (See [[UrlRuleHandlerFn]]).
     * The "matched value" differs based on the `matcher`.
     * For [[UrlMatcher]]s, it will be the matched state params.
     * For `RegExp`, it will be the match array from `regexp.exec()`.
     *
     * If the handler returns a string, the URL is redirected to the string.
     *
     * #### Example:
     * When the URL is `/foo/123` the rule will redirect to `/bar/123`.
     * ```js
     * .when(new RegExp("^/foo/(.*)$"), match => "/bar/" + match[1]);
     * ```
     *
     * Note: the `handler` may also invoke arbitrary code, such as `$state.go()`
     *
     * @param matcher A pattern `string` to match, compiled as a [[UrlMatcher]], or a `RegExp`.
     * @param handler The path to redirect to, or a function that returns the path.
     * @param options `{ priority: number }`
     *
     * @return the registered [[UrlRule]]
     */
    UrlRules.prototype.when = function (matcher, handler, options) {
        var rule = this.urlRuleFactory.create(matcher, handler);
        if ((0,_common__WEBPACK_IMPORTED_MODULE_2__.isDefined)(options && options.priority))
            rule.priority = options.priority;
        this.rule(rule);
        return rule;
    };
    return UrlRules;
}());

//# sourceMappingURL=urlRules.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/url/urlService.js":
/*!**************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/url/urlService.js ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UrlService: () => (/* binding */ UrlService)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/index.js");
/* harmony import */ var _urlRules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./urlRules */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/url/urlRules.js");
/* harmony import */ var _urlConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./urlConfig */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/url/urlConfig.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/state/index.js");




/**
 * API for URL management
 */
var UrlService = /** @class */ (function () {
    /** @internal */
    function UrlService(/** @internal */ router) {
        var _this = this;
        this.router = router;
        /** @internal */ this.interceptDeferred = false;
        /**
         * The nested [[UrlRules]] API for managing URL rules and rewrites
         *
         * See: [[UrlRules]] for details
         */
        this.rules = new _urlRules__WEBPACK_IMPORTED_MODULE_1__.UrlRules(this.router);
        /**
         * The nested [[UrlConfig]] API to configure the URL and retrieve URL information
         *
         * See: [[UrlConfig]] for details
         */
        this.config = new _urlConfig__WEBPACK_IMPORTED_MODULE_2__.UrlConfig(this.router);
        // Delegate these calls to the current LocationServices implementation
        /**
         * Gets the current url, or updates the url
         *
         * ### Getting the current URL
         *
         * When no arguments are passed, returns the current URL.
         * The URL is normalized using the internal [[path]]/[[search]]/[[hash]] values.
         *
         * For example, the URL may be stored in the hash ([[HashLocationServices]]) or
         * have a base HREF prepended ([[PushStateLocationServices]]).
         *
         * The raw URL in the browser might be:
         *
         * ```
         * http://mysite.com/somepath/index.html#/internal/path/123?param1=foo#anchor
         * ```
         *
         * or
         *
         * ```
         * http://mysite.com/basepath/internal/path/123?param1=foo#anchor
         * ```
         *
         * then this method returns:
         *
         * ```
         * /internal/path/123?param1=foo#anchor
         * ```
         *
         *
         * #### Example:
         * ```js
         * locationServices.url(); // "/some/path?query=value#anchor"
         * ```
         *
         * ### Updating the URL
         *
         * When `newurl` arguments is provided, changes the URL to reflect `newurl`
         *
         * #### Example:
         * ```js
         * locationServices.url("/some/path?query=value#anchor", true);
         * ```
         *
         * @param newurl The new value for the URL.
         *               This url should reflect only the new internal [[path]], [[search]], and [[hash]] values.
         *               It should not include the protocol, site, port, or base path of an absolute HREF.
         * @param replace When true, replaces the current history entry (instead of appending it) with this new url
         * @param state The history's state object, i.e., pushState (if the LocationServices implementation supports it)
         *
         * @return the url (after potentially being processed)
         */
        this.url = function (newurl, replace, state) {
            return _this.router.locationService.url(newurl, replace, state);
        };
        /**
         * Gets the path part of the current url
         *
         * If the current URL is `/some/path?query=value#anchor`, this returns `/some/path`
         *
         * @return the path portion of the url
         */
        this.path = function () { return _this.router.locationService.path(); };
        /**
         * Gets the search part of the current url as an object
         *
         * If the current URL is `/some/path?query=value#anchor`, this returns `{ query: 'value' }`
         *
         * @return the search (query) portion of the url, as an object
         */
        this.search = function () { return _this.router.locationService.search(); };
        /**
         * Gets the hash part of the current url
         *
         * If the current URL is `/some/path?query=value#anchor`, this returns `anchor`
         *
         * @return the hash (anchor) portion of the url
         */
        this.hash = function () { return _this.router.locationService.hash(); };
        /**
         * @internal
         *
         * Registers a low level url change handler
         *
         * Note: Because this is a low level handler, it's not recommended for general use.
         *
         * #### Example:
         * ```js
         * let deregisterFn = locationServices.onChange((evt) => console.log("url change", evt));
         * ```
         *
         * @param callback a function that will be called when the url is changing
         * @return a function that de-registers the callback
         */
        this.onChange = function (callback) { return _this.router.locationService.onChange(callback); };
    }
    /** @internal */
    UrlService.prototype.dispose = function () {
        this.listen(false);
        this.rules.dispose();
    };
    /**
     * Gets the current URL parts
     *
     * This method returns the different parts of the current URL (the [[path]], [[search]], and [[hash]]) as a [[UrlParts]] object.
     */
    UrlService.prototype.parts = function () {
        return { path: this.path(), search: this.search(), hash: this.hash() };
    };
    /**
     * Activates the best rule for the current URL
     *
     * Checks the current URL for a matching [[UrlRule]], then invokes that rule's handler.
     * This method is called internally any time the URL has changed.
     *
     * This effectively activates the state (or redirect, etc) which matches the current URL.
     *
     * #### Example:
     * ```js
     * urlService.deferIntercept();
     *
     * fetch('/states.json').then(resp => resp.json()).then(data => {
     *   data.forEach(state => $stateRegistry.register(state));
     *   urlService.listen();
     *   // Find the matching URL and invoke the handler.
     *   urlService.sync();
     * });
     * ```
     */
    UrlService.prototype.sync = function (evt) {
        if (evt && evt.defaultPrevented)
            return;
        var _a = this.router, urlService = _a.urlService, stateService = _a.stateService;
        var url = { path: urlService.path(), search: urlService.search(), hash: urlService.hash() };
        var best = this.match(url);
        var applyResult = (0,_common__WEBPACK_IMPORTED_MODULE_0__.pattern)([
            [_common__WEBPACK_IMPORTED_MODULE_0__.isString, function (newurl) { return urlService.url(newurl, true); }],
            [_state__WEBPACK_IMPORTED_MODULE_3__.TargetState.isDef, function (def) { return stateService.go(def.state, def.params, def.options); }],
            [(0,_common__WEBPACK_IMPORTED_MODULE_0__.is)(_state__WEBPACK_IMPORTED_MODULE_3__.TargetState), function (target) { return stateService.go(target.state(), target.params(), target.options()); }],
        ]);
        applyResult(best && best.rule.handler(best.match, url, this.router));
    };
    /**
     * Starts or stops listening for URL changes
     *
     * Call this sometime after calling [[deferIntercept]] to start monitoring the url.
     * This causes UI-Router to start listening for changes to the URL, if it wasn't already listening.
     *
     * If called with `false`, UI-Router will stop listening (call listen(true) to start listening again).
     *
     * #### Example:
     * ```js
     * urlService.deferIntercept();
     *
     * fetch('/states.json').then(resp => resp.json()).then(data => {
     *   data.forEach(state => $stateRegistry.register(state));
     *   // Start responding to URL changes
     *   urlService.listen();
     *   urlService.sync();
     * });
     * ```
     *
     * @param enabled `true` or `false` to start or stop listening to URL changes
     */
    UrlService.prototype.listen = function (enabled) {
        var _this = this;
        if (enabled === false) {
            this._stopListeningFn && this._stopListeningFn();
            delete this._stopListeningFn;
        }
        else {
            return (this._stopListeningFn =
                this._stopListeningFn || this.router.urlService.onChange(function (evt) { return _this.sync(evt); }));
        }
    };
    /**
     * Disables monitoring of the URL.
     *
     * Call this method before UI-Router has bootstrapped.
     * It will stop UI-Router from performing the initial url sync.
     *
     * This can be useful to perform some asynchronous initialization before the router starts.
     * Once the initialization is complete, call [[listen]] to tell UI-Router to start watching and synchronizing the URL.
     *
     * #### Example:
     * ```js
     * // Prevent UI-Router from automatically intercepting URL changes when it starts;
     * urlService.deferIntercept();
     *
     * fetch('/states.json').then(resp => resp.json()).then(data => {
     *   data.forEach(state => $stateRegistry.register(state));
     *   urlService.listen();
     *   urlService.sync();
     * });
     * ```
     *
     * @param defer Indicates whether to defer location change interception.
     *        Passing no parameter is equivalent to `true`.
     */
    UrlService.prototype.deferIntercept = function (defer) {
        if (defer === undefined)
            defer = true;
        this.interceptDeferred = defer;
    };
    /**
     * Matches a URL
     *
     * Given a URL (as a [[UrlParts]] object), check all rules and determine the best matching rule.
     * Return the result as a [[MatchResult]].
     */
    UrlService.prototype.match = function (url) {
        var _this = this;
        url = (0,_common__WEBPACK_IMPORTED_MODULE_0__.extend)({ path: '', search: {}, hash: '' }, url);
        var rules = this.rules.rules();
        // Checks a single rule. Returns { rule: rule, match: match, weight: weight } if it matched, or undefined
        var checkRule = function (rule) {
            var match = rule.match(url, _this.router);
            return match && { match: match, rule: rule, weight: rule.matchPriority(match) };
        };
        // The rules are pre-sorted.
        // - Find the first matching rule.
        // - Find any other matching rule that sorted *exactly the same*, according to `.sort()`.
        // - Choose the rule with the highest match weight.
        var best;
        for (var i = 0; i < rules.length; i++) {
            // Stop when there is a 'best' rule and the next rule sorts differently than it.
            if (best && best.rule._group !== rules[i]._group)
                break;
            var current = checkRule(rules[i]);
            // Pick the best MatchResult
            best = !best || (current && current.weight > best.weight) ? current : best;
        }
        return best;
    };
    return UrlService;
}());

//# sourceMappingURL=urlService.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/vanilla.js":
/*!*******************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/vanilla.js ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vanilla_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vanilla/index */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/vanilla/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _vanilla_index__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _vanilla_index__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

//# sourceMappingURL=vanilla.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/vanilla/baseLocationService.js":
/*!***************************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/vanilla/baseLocationService.js ***!
  \***************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseLocationServices: () => (/* binding */ BaseLocationServices)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/vanilla/utils.js");


/** A base `LocationServices` */
var BaseLocationServices = /** @class */ (function () {
    function BaseLocationServices(router, fireAfterUpdate) {
        var _this = this;
        this.fireAfterUpdate = fireAfterUpdate;
        this._listeners = [];
        this._listener = function (evt) { return _this._listeners.forEach(function (cb) { return cb(evt); }); };
        this.hash = function () { return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.parseUrl)(_this._get()).hash; };
        this.path = function () { return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.parseUrl)(_this._get()).path; };
        this.search = function () { return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getParams)((0,_utils__WEBPACK_IMPORTED_MODULE_1__.parseUrl)(_this._get()).search); };
        this._location = _common__WEBPACK_IMPORTED_MODULE_0__.root.location;
        this._history = _common__WEBPACK_IMPORTED_MODULE_0__.root.history;
    }
    BaseLocationServices.prototype.url = function (url, replace) {
        if (replace === void 0) { replace = true; }
        if ((0,_common__WEBPACK_IMPORTED_MODULE_0__.isDefined)(url) && url !== this._get()) {
            this._set(null, null, url, replace);
            if (this.fireAfterUpdate) {
                this._listeners.forEach(function (cb) { return cb({ url: url }); });
            }
        }
        return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.buildUrl)(this);
    };
    BaseLocationServices.prototype.onChange = function (cb) {
        var _this = this;
        this._listeners.push(cb);
        return function () { return (0,_common__WEBPACK_IMPORTED_MODULE_0__.removeFrom)(_this._listeners, cb); };
    };
    BaseLocationServices.prototype.dispose = function (router) {
        (0,_common__WEBPACK_IMPORTED_MODULE_0__.deregAll)(this._listeners);
    };
    return BaseLocationServices;
}());

//# sourceMappingURL=baseLocationService.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/vanilla/browserLocationConfig.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/vanilla/browserLocationConfig.js ***!
  \*****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrowserLocationConfig: () => (/* binding */ BrowserLocationConfig)
/* harmony export */ });
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/predicates.js");

/** A `LocationConfig` that delegates to the browser's `location` object */
var BrowserLocationConfig = /** @class */ (function () {
    function BrowserLocationConfig(router, _isHtml5) {
        if (_isHtml5 === void 0) { _isHtml5 = false; }
        this._isHtml5 = _isHtml5;
        this._baseHref = undefined;
        this._hashPrefix = '';
    }
    BrowserLocationConfig.prototype.port = function () {
        if (location.port) {
            return Number(location.port);
        }
        return this.protocol() === 'https' ? 443 : 80;
    };
    BrowserLocationConfig.prototype.protocol = function () {
        return location.protocol.replace(/:/g, '');
    };
    BrowserLocationConfig.prototype.host = function () {
        return location.hostname;
    };
    BrowserLocationConfig.prototype.html5Mode = function () {
        return this._isHtml5;
    };
    BrowserLocationConfig.prototype.hashPrefix = function (newprefix) {
        return (0,_common_predicates__WEBPACK_IMPORTED_MODULE_0__.isDefined)(newprefix) ? (this._hashPrefix = newprefix) : this._hashPrefix;
    };
    BrowserLocationConfig.prototype.baseHref = function (href) {
        if ((0,_common_predicates__WEBPACK_IMPORTED_MODULE_0__.isDefined)(href))
            this._baseHref = href;
        if ((0,_common_predicates__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(this._baseHref))
            this._baseHref = this.getBaseHref();
        return this._baseHref;
    };
    BrowserLocationConfig.prototype.getBaseHref = function () {
        var baseTag = document.getElementsByTagName('base')[0];
        if (baseTag && baseTag.href) {
            return baseTag.href.replace(/^([^/:]*:)?\/\/[^/]*/, '');
        }
        return this._isHtml5 ? '/' : location.pathname || '/';
    };
    BrowserLocationConfig.prototype.dispose = function () { };
    return BrowserLocationConfig;
}());

//# sourceMappingURL=browserLocationConfig.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/vanilla/hashLocationService.js":
/*!***************************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/vanilla/hashLocationService.js ***!
  \***************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HashLocationService: () => (/* binding */ HashLocationService)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/index.js");
/* harmony import */ var _baseLocationService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseLocationService */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/vanilla/baseLocationService.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/** A `LocationServices` that uses the browser hash "#" to get/set the current location */
var HashLocationService = /** @class */ (function (_super) {
    __extends(HashLocationService, _super);
    function HashLocationService(router) {
        var _this = _super.call(this, router, false) || this;
        _common__WEBPACK_IMPORTED_MODULE_0__.root.addEventListener('hashchange', _this._listener, false);
        return _this;
    }
    HashLocationService.prototype._get = function () {
        return (0,_common__WEBPACK_IMPORTED_MODULE_0__.trimHashVal)(this._location.hash);
    };
    HashLocationService.prototype._set = function (state, title, url, replace) {
        this._location.hash = url;
    };
    HashLocationService.prototype.dispose = function (router) {
        _super.prototype.dispose.call(this, router);
        _common__WEBPACK_IMPORTED_MODULE_0__.root.removeEventListener('hashchange', this._listener);
    };
    return HashLocationService;
}(_baseLocationService__WEBPACK_IMPORTED_MODULE_1__.BaseLocationServices));

//# sourceMappingURL=hashLocationService.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/vanilla/index.js":
/*!*************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/vanilla/index.js ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $injector: () => (/* reexport safe */ _injector__WEBPACK_IMPORTED_MODULE_2__.$injector),
/* harmony export */   $q: () => (/* reexport safe */ _q__WEBPACK_IMPORTED_MODULE_1__.$q),
/* harmony export */   BaseLocationServices: () => (/* reexport safe */ _baseLocationService__WEBPACK_IMPORTED_MODULE_3__.BaseLocationServices),
/* harmony export */   BrowserLocationConfig: () => (/* reexport safe */ _browserLocationConfig__WEBPACK_IMPORTED_MODULE_8__.BrowserLocationConfig),
/* harmony export */   HashLocationService: () => (/* reexport safe */ _hashLocationService__WEBPACK_IMPORTED_MODULE_4__.HashLocationService),
/* harmony export */   MemoryLocationConfig: () => (/* reexport safe */ _memoryLocationConfig__WEBPACK_IMPORTED_MODULE_7__.MemoryLocationConfig),
/* harmony export */   MemoryLocationService: () => (/* reexport safe */ _memoryLocationService__WEBPACK_IMPORTED_MODULE_5__.MemoryLocationService),
/* harmony export */   PushStateLocationService: () => (/* reexport safe */ _pushStateLocationService__WEBPACK_IMPORTED_MODULE_6__.PushStateLocationService),
/* harmony export */   buildUrl: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_9__.buildUrl),
/* harmony export */   getParams: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_9__.getParams),
/* harmony export */   hashLocationPlugin: () => (/* reexport safe */ _plugins__WEBPACK_IMPORTED_MODULE_10__.hashLocationPlugin),
/* harmony export */   keyValsToObjectR: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_9__.keyValsToObjectR),
/* harmony export */   locationPluginFactory: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_9__.locationPluginFactory),
/* harmony export */   memoryLocationPlugin: () => (/* reexport safe */ _plugins__WEBPACK_IMPORTED_MODULE_10__.memoryLocationPlugin),
/* harmony export */   parseUrl: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_9__.parseUrl),
/* harmony export */   pushStateLocationPlugin: () => (/* reexport safe */ _plugins__WEBPACK_IMPORTED_MODULE_10__.pushStateLocationPlugin),
/* harmony export */   servicesPlugin: () => (/* reexport safe */ _plugins__WEBPACK_IMPORTED_MODULE_10__.servicesPlugin)
/* harmony export */ });
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/vanilla/interface.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_interface__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _interface__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _interface__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _q__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./q */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/vanilla/q.js");
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./injector */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/vanilla/injector.js");
/* harmony import */ var _baseLocationService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./baseLocationService */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/vanilla/baseLocationService.js");
/* harmony import */ var _hashLocationService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hashLocationService */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/vanilla/hashLocationService.js");
/* harmony import */ var _memoryLocationService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./memoryLocationService */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/vanilla/memoryLocationService.js");
/* harmony import */ var _pushStateLocationService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pushStateLocationService */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/vanilla/pushStateLocationService.js");
/* harmony import */ var _memoryLocationConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./memoryLocationConfig */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/vanilla/memoryLocationConfig.js");
/* harmony import */ var _browserLocationConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./browserLocationConfig */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/vanilla/browserLocationConfig.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/vanilla/utils.js");
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./plugins */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/vanilla/plugins.js");
/**
 * Naive, pure JS implementation of core ui-router services
 *
 * @packageDocumentation
 */











//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/vanilla/injector.js":
/*!****************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/vanilla/injector.js ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $injector: () => (/* binding */ $injector)
/* harmony export */ });
/* harmony import */ var _common_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/index */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/index.js");

// globally available injectables
var globals = {};
var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
var ARGUMENT_NAMES = /([^\s,]+)/g;
/**
 * A basic angular1-like injector api
 *
 * This object implements four methods similar to the
 * [angular 1 dependency injector](https://docs.angularjs.org/api/auto/service/$injector)
 *
 * UI-Router evolved from an angular 1 library to a framework agnostic library.
 * However, some of the `@uirouter/core` code uses these ng1 style APIs to support ng1 style dependency injection.
 *
 * This object provides a naive implementation of a globally scoped dependency injection system.
 * It supports the following DI approaches:
 *
 * ### Function parameter names
 *
 * A function's `.toString()` is called, and the parameter names are parsed.
 * This only works when the parameter names aren't "mangled" by a minifier such as UglifyJS.
 *
 * ```js
 * function injectedFunction(FooService, BarService) {
 *   // FooService and BarService are injected
 * }
 * ```
 *
 * ### Function annotation
 *
 * A function may be annotated with an array of dependency names as the `$inject` property.
 *
 * ```js
 * injectedFunction.$inject = [ 'FooService', 'BarService' ];
 * function injectedFunction(fs, bs) {
 *   // FooService and BarService are injected as fs and bs parameters
 * }
 * ```
 *
 * ### Array notation
 *
 * An array provides the names of the dependencies to inject (as strings).
 * The function is the last element of the array.
 *
 * ```js
 * [ 'FooService', 'BarService', function (fs, bs) {
 *   // FooService and BarService are injected as fs and bs parameters
 * }]
 * ```
 *
 * @type {$InjectorLike}
 */
var $injector = {
    /** Gets an object from DI based on a string token */
    get: function (name) { return globals[name]; },
    /** Returns true if an object named `name` exists in global DI */
    has: function (name) { return $injector.get(name) != null; },
    /**
     * Injects a function
     *
     * @param fn the function to inject
     * @param context the function's `this` binding
     * @param locals An object with additional DI tokens and values, such as `{ someToken: { foo: 1 } }`
     */
    invoke: function (fn, context, locals) {
        var all = (0,_common_index__WEBPACK_IMPORTED_MODULE_0__.extend)({}, globals, locals || {});
        var params = $injector.annotate(fn);
        var ensureExist = (0,_common_index__WEBPACK_IMPORTED_MODULE_0__.assertPredicate)(function (key) { return all.hasOwnProperty(key); }, function (key) { return "DI can't find injectable: '" + key + "'"; });
        var args = params.filter(ensureExist).map(function (x) { return all[x]; });
        if ((0,_common_index__WEBPACK_IMPORTED_MODULE_0__.isFunction)(fn))
            return fn.apply(context, args);
        else
            return fn.slice(-1)[0].apply(context, args);
    },
    /**
     * Returns a function's dependencies
     *
     * Analyzes a function (or array) and returns an array of DI tokens that the function requires.
     * @return an array of `string`s
     */
    annotate: function (fn) {
        if (!(0,_common_index__WEBPACK_IMPORTED_MODULE_0__.isInjectable)(fn))
            throw new Error("Not an injectable function: " + fn);
        if (fn && fn.$inject)
            return fn.$inject;
        if ((0,_common_index__WEBPACK_IMPORTED_MODULE_0__.isArray)(fn))
            return fn.slice(0, -1);
        var fnStr = fn.toString().replace(STRIP_COMMENTS, '');
        var result = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);
        return result || [];
    },
};
//# sourceMappingURL=injector.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/vanilla/interface.js":
/*!*****************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/vanilla/interface.js ***!
  \*****************************************************************************************************************************************************/
/***/ (() => {

//# sourceMappingURL=interface.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/vanilla/memoryLocationConfig.js":
/*!****************************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/vanilla/memoryLocationConfig.js ***!
  \****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MemoryLocationConfig: () => (/* binding */ MemoryLocationConfig)
/* harmony export */ });
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/common.js");


/** A `LocationConfig` mock that gets/sets all config from an in-memory object */
var MemoryLocationConfig = /** @class */ (function () {
    function MemoryLocationConfig() {
        var _this = this;
        this.dispose = _common_common__WEBPACK_IMPORTED_MODULE_1__.noop;
        this._baseHref = '';
        this._port = 80;
        this._protocol = 'http';
        this._host = 'localhost';
        this._hashPrefix = '';
        this.port = function () { return _this._port; };
        this.protocol = function () { return _this._protocol; };
        this.host = function () { return _this._host; };
        this.baseHref = function () { return _this._baseHref; };
        this.html5Mode = function () { return false; };
        this.hashPrefix = function (newval) { return ((0,_common_predicates__WEBPACK_IMPORTED_MODULE_0__.isDefined)(newval) ? (_this._hashPrefix = newval) : _this._hashPrefix); };
    }
    return MemoryLocationConfig;
}());

//# sourceMappingURL=memoryLocationConfig.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/vanilla/memoryLocationService.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/vanilla/memoryLocationService.js ***!
  \*****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MemoryLocationService: () => (/* binding */ MemoryLocationService)
/* harmony export */ });
/* harmony import */ var _baseLocationService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseLocationService */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/vanilla/baseLocationService.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/** A `LocationServices` that gets/sets the current location from an in-memory object */
var MemoryLocationService = /** @class */ (function (_super) {
    __extends(MemoryLocationService, _super);
    function MemoryLocationService(router) {
        return _super.call(this, router, true) || this;
    }
    MemoryLocationService.prototype._get = function () {
        return this._url;
    };
    MemoryLocationService.prototype._set = function (state, title, url, replace) {
        this._url = url;
    };
    return MemoryLocationService;
}(_baseLocationService__WEBPACK_IMPORTED_MODULE_0__.BaseLocationServices));

//# sourceMappingURL=memoryLocationService.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/vanilla/plugins.js":
/*!***************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/vanilla/plugins.js ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hashLocationPlugin: () => (/* binding */ hashLocationPlugin),
/* harmony export */   memoryLocationPlugin: () => (/* binding */ memoryLocationPlugin),
/* harmony export */   pushStateLocationPlugin: () => (/* binding */ pushStateLocationPlugin),
/* harmony export */   servicesPlugin: () => (/* binding */ servicesPlugin)
/* harmony export */ });
/* harmony import */ var _browserLocationConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browserLocationConfig */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/vanilla/browserLocationConfig.js");
/* harmony import */ var _hashLocationService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hashLocationService */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/vanilla/hashLocationService.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/vanilla/utils.js");
/* harmony import */ var _pushStateLocationService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pushStateLocationService */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/vanilla/pushStateLocationService.js");
/* harmony import */ var _memoryLocationService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./memoryLocationService */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/vanilla/memoryLocationService.js");
/* harmony import */ var _memoryLocationConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./memoryLocationConfig */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/vanilla/memoryLocationConfig.js");
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./injector */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/vanilla/injector.js");
/* harmony import */ var _q__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./q */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/vanilla/q.js");
/* harmony import */ var _common_coreservices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/coreservices */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/coreservices.js");









function servicesPlugin(router) {
    _common_coreservices__WEBPACK_IMPORTED_MODULE_8__.services.$injector = _injector__WEBPACK_IMPORTED_MODULE_6__.$injector;
    _common_coreservices__WEBPACK_IMPORTED_MODULE_8__.services.$q = _q__WEBPACK_IMPORTED_MODULE_7__.$q;
    return { name: 'vanilla.services', $q: _q__WEBPACK_IMPORTED_MODULE_7__.$q, $injector: _injector__WEBPACK_IMPORTED_MODULE_6__.$injector, dispose: function () { return null; } };
}
/** A `UIRouterPlugin` uses the browser hash to get/set the current location */
var hashLocationPlugin = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.locationPluginFactory)('vanilla.hashBangLocation', false, _hashLocationService__WEBPACK_IMPORTED_MODULE_1__.HashLocationService, _browserLocationConfig__WEBPACK_IMPORTED_MODULE_0__.BrowserLocationConfig);
/** A `UIRouterPlugin` that gets/sets the current location using the browser's `location` and `history` apis */
var pushStateLocationPlugin = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.locationPluginFactory)('vanilla.pushStateLocation', true, _pushStateLocationService__WEBPACK_IMPORTED_MODULE_3__.PushStateLocationService, _browserLocationConfig__WEBPACK_IMPORTED_MODULE_0__.BrowserLocationConfig);
/** A `UIRouterPlugin` that gets/sets the current location from an in-memory object */
var memoryLocationPlugin = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.locationPluginFactory)('vanilla.memoryLocation', false, _memoryLocationService__WEBPACK_IMPORTED_MODULE_4__.MemoryLocationService, _memoryLocationConfig__WEBPACK_IMPORTED_MODULE_5__.MemoryLocationConfig);
//# sourceMappingURL=plugins.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/vanilla/pushStateLocationService.js":
/*!********************************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/vanilla/pushStateLocationService.js ***!
  \********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PushStateLocationService: () => (/* binding */ PushStateLocationService)
/* harmony export */ });
/* harmony import */ var _baseLocationService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseLocationService */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/vanilla/baseLocationService.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 * A `LocationServices` that gets/sets the current location using the browser's `location` and `history` apis
 *
 * Uses `history.pushState` and `history.replaceState`
 */
var PushStateLocationService = /** @class */ (function (_super) {
    __extends(PushStateLocationService, _super);
    function PushStateLocationService(router) {
        var _this = _super.call(this, router, true) || this;
        _this._config = router.urlService.config;
        _common__WEBPACK_IMPORTED_MODULE_1__.root.addEventListener('popstate', _this._listener, false);
        return _this;
    }
    /**
     * Gets the base prefix without:
     * - trailing slash
     * - trailing filename
     * - protocol and hostname
     *
     * If <base href='/base/'>, this returns '/base'.
     * If <base href='/foo/base/'>, this returns '/foo/base'.
     * If <base href='/base/index.html'>, this returns '/base'.
     * If <base href='http://localhost:8080/base/index.html'>, this returns '/base'.
     * If <base href='/base'>, this returns ''.
     * If <base href='http://localhost:8080'>, this returns ''.
     * If <base href='http://localhost:8080/'>, this returns ''.
     *
     * See: https://html.spec.whatwg.org/dev/semantics.html#the-base-element
     */
    PushStateLocationService.prototype._getBasePrefix = function () {
        return (0,_common__WEBPACK_IMPORTED_MODULE_1__.stripLastPathElement)(this._config.baseHref());
    };
    PushStateLocationService.prototype._get = function () {
        var _a = this._location, pathname = _a.pathname, hash = _a.hash, search = _a.search;
        search = (0,_common__WEBPACK_IMPORTED_MODULE_1__.splitQuery)(search)[1]; // strip ? if found
        hash = (0,_common__WEBPACK_IMPORTED_MODULE_1__.splitHash)(hash)[1]; // strip # if found
        var basePrefix = this._getBasePrefix();
        var exactBaseHrefMatch = pathname === this._config.baseHref();
        var startsWithBase = pathname.substr(0, basePrefix.length) === basePrefix;
        pathname = exactBaseHrefMatch ? '/' : startsWithBase ? pathname.substring(basePrefix.length) : pathname;
        return pathname + (search ? '?' + search : '') + (hash ? '#' + hash : '');
    };
    PushStateLocationService.prototype._set = function (state, title, url, replace) {
        var basePrefix = this._getBasePrefix();
        var slash = url && url[0] !== '/' ? '/' : '';
        var fullUrl = url === '' || url === '/' ? this._config.baseHref() : basePrefix + slash + url;
        if (replace) {
            this._history.replaceState(state, title, fullUrl);
        }
        else {
            this._history.pushState(state, title, fullUrl);
        }
    };
    PushStateLocationService.prototype.dispose = function (router) {
        _super.prototype.dispose.call(this, router);
        _common__WEBPACK_IMPORTED_MODULE_1__.root.removeEventListener('popstate', this._listener);
    };
    return PushStateLocationService;
}(_baseLocationService__WEBPACK_IMPORTED_MODULE_0__.BaseLocationServices));

//# sourceMappingURL=pushStateLocationService.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/vanilla/q.js":
/*!*********************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/vanilla/q.js ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $q: () => (/* binding */ $q)
/* harmony export */ });
/* harmony import */ var _common_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/index */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/index.js");

/**
 * An angular1-like promise api
 *
 * This object implements four methods similar to the
 * [angular 1 promise api](https://docs.angularjs.org/api/ng/service/$q)
 *
 * UI-Router evolved from an angular 1 library to a framework agnostic library.
 * However, some of the `@uirouter/core` code uses these ng1 style APIs to support ng1 style dependency injection.
 *
 * This API provides native ES6 promise support wrapped as a $q-like API.
 * Internally, UI-Router uses this $q object to perform promise operations.
 * The `angular-ui-router` (ui-router for angular 1) uses the $q API provided by angular.
 *
 * $q-like promise api
 */
var $q = {
    /** Normalizes a value as a promise */
    when: function (val) { return new Promise(function (resolve, reject) { return resolve(val); }); },
    /** Normalizes a value as a promise rejection */
    reject: function (val) {
        return new Promise(function (resolve, reject) {
            reject(val);
        });
    },
    /** @returns a deferred object, which has `resolve` and `reject` functions */
    defer: function () {
        var deferred = {};
        deferred.promise = new Promise(function (resolve, reject) {
            deferred.resolve = resolve;
            deferred.reject = reject;
        });
        return deferred;
    },
    /** Like Promise.all(), but also supports object key/promise notation like $q */
    all: function (promises) {
        if ((0,_common_index__WEBPACK_IMPORTED_MODULE_0__.isArray)(promises)) {
            return Promise.all(promises);
        }
        if ((0,_common_index__WEBPACK_IMPORTED_MODULE_0__.isObject)(promises)) {
            // Convert promises map to promises array.
            // When each promise resolves, map it to a tuple { key: key, val: val }
            var chain = Object.keys(promises).map(function (key) { return promises[key].then(function (val) { return ({ key: key, val: val }); }); });
            // Then wait for all promises to resolve, and convert them back to an object
            return $q.all(chain).then(function (values) {
                return values.reduce(function (acc, tuple) {
                    acc[tuple.key] = tuple.val;
                    return acc;
                }, {});
            });
        }
    },
};
//# sourceMappingURL=q.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/vanilla/utils.js":
/*!*************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/vanilla/utils.js ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildUrl: () => (/* binding */ buildUrl),
/* harmony export */   getParams: () => (/* binding */ getParams),
/* harmony export */   keyValsToObjectR: () => (/* binding */ keyValsToObjectR),
/* harmony export */   locationPluginFactory: () => (/* binding */ locationPluginFactory),
/* harmony export */   parseUrl: () => (/* binding */ parseUrl)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/index.js");

var keyValsToObjectR = function (accum, _a) {
    var key = _a[0], val = _a[1];
    if (!accum.hasOwnProperty(key)) {
        accum[key] = val;
    }
    else if ((0,_common__WEBPACK_IMPORTED_MODULE_0__.isArray)(accum[key])) {
        accum[key].push(val);
    }
    else {
        accum[key] = [accum[key], val];
    }
    return accum;
};
var getParams = function (queryString) {
    return queryString.split('&').filter(_common__WEBPACK_IMPORTED_MODULE_0__.identity).map(_common__WEBPACK_IMPORTED_MODULE_0__.splitEqual).reduce(keyValsToObjectR, {});
};
function parseUrl(url) {
    var orEmptyString = function (x) { return x || ''; };
    var _a = (0,_common__WEBPACK_IMPORTED_MODULE_0__.splitHash)(url).map(orEmptyString), beforehash = _a[0], hash = _a[1];
    var _b = (0,_common__WEBPACK_IMPORTED_MODULE_0__.splitQuery)(beforehash).map(orEmptyString), path = _b[0], search = _b[1];
    return { path: path, search: search, hash: hash, url: url };
}
var buildUrl = function (loc) {
    var path = loc.path();
    var searchObject = loc.search();
    var hash = loc.hash();
    var search = Object.keys(searchObject)
        .map(function (key) {
        var param = searchObject[key];
        var vals = (0,_common__WEBPACK_IMPORTED_MODULE_0__.isArray)(param) ? param : [param];
        return vals.map(function (val) { return key + '=' + val; });
    })
        .reduce(_common__WEBPACK_IMPORTED_MODULE_0__.unnestR, [])
        .join('&');
    return path + (search ? '?' + search : '') + (hash ? '#' + hash : '');
};
function locationPluginFactory(name, isHtml5, serviceClass, configurationClass) {
    return function (uiRouter) {
        var service = (uiRouter.locationService = new serviceClass(uiRouter));
        var configuration = (uiRouter.locationConfig = new configurationClass(uiRouter, isHtml5));
        function dispose(router) {
            router.dispose(service);
            router.dispose(configuration);
        }
        return { name: name, service: service, configuration: configuration, dispose: dispose };
    };
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/view/index.js":
/*!**********************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/view/index.js ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewService: () => (/* reexport safe */ _view__WEBPACK_IMPORTED_MODULE_1__.ViewService)
/* harmony export */ });
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/view/interface.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_interface__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _interface__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _interface__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/view/view.js");


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/view/interface.js":
/*!**************************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/view/interface.js ***!
  \**************************************************************************************************************************************************/
/***/ (() => {

//# sourceMappingURL=interface.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/view/view.js":
/*!*********************************************************************************************************************************************!*\
  !*** ../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/view/view.js ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewService: () => (/* binding */ ViewService)
/* harmony export */ });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/hof.js");
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _common_trace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/trace */ "../../jinge-ui-router/node_modules/.pnpm/registry.npmmirror.com+@uirouter+core@6.1.0/node_modules/@uirouter/core/lib-esm/common/trace.js");




/**
 * The View service
 *
 * This service pairs existing `ui-view` components (which live in the DOM)
 * with view configs (from the state declaration objects: [[StateDeclaration.views]]).
 *
 * - After a successful Transition, the views from the newly entered states are activated via [[activateViewConfig]].
 *   The views from exited states are deactivated via [[deactivateViewConfig]].
 *   (See: the [[registerActivateViews]] Transition Hook)
 *
 * - As `ui-view` components pop in and out of existence, they register themselves using [[registerUIView]].
 *
 * - When the [[sync]] function is called, the registered `ui-view`(s) ([[ActiveUIView]])
 * are configured with the matching [[ViewConfig]](s)
 *
 */
var ViewService = /** @class */ (function () {
    /** @internal */
    function ViewService(/** @internal */ router) {
        var _this = this;
        this.router = router;
        /** @internal */ this._uiViews = [];
        /** @internal */ this._viewConfigs = [];
        /** @internal */ this._viewConfigFactories = {};
        /** @internal */ this._listeners = [];
        /** @internal */
        this._pluginapi = {
            _rootViewContext: this._rootViewContext.bind(this),
            _viewConfigFactory: this._viewConfigFactory.bind(this),
            _registeredUIView: function (id) { return (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.find)(_this._uiViews, function (view) { return _this.router.$id + "." + view.id === id; }); },
            _registeredUIViews: function () { return _this._uiViews; },
            _activeViewConfigs: function () { return _this._viewConfigs; },
            _onSync: function (listener) {
                _this._listeners.push(listener);
                return function () { return (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.removeFrom)(_this._listeners, listener); };
            },
        };
    }
    /**
     * Normalizes a view's name from a state.views configuration block.
     *
     * This should be used by a framework implementation to calculate the values for
     * [[_ViewDeclaration.$uiViewName]] and [[_ViewDeclaration.$uiViewContextAnchor]].
     *
     * @param context the context object (state declaration) that the view belongs to
     * @param rawViewName the name of the view, as declared in the [[StateDeclaration.views]]
     *
     * @returns the normalized uiViewName and uiViewContextAnchor that the view targets
     */
    ViewService.normalizeUIViewTarget = function (context, rawViewName) {
        if (rawViewName === void 0) { rawViewName = ''; }
        // TODO: Validate incoming view name with a regexp to allow:
        // ex: "view.name@foo.bar" , "^.^.view.name" , "view.name@^.^" , "" ,
        // "@" , "$default@^" , "!$default.$default" , "!foo.bar"
        var viewAtContext = rawViewName.split('@');
        var uiViewName = viewAtContext[0] || '$default'; // default to unnamed view
        var uiViewContextAnchor = (0,_common_predicates__WEBPACK_IMPORTED_MODULE_2__.isString)(viewAtContext[1]) ? viewAtContext[1] : '^'; // default to parent context
        // Handle relative view-name sugar syntax.
        // Matches rawViewName "^.^.^.foo.bar" into array: ["^.^.^.foo.bar", "^.^.^", "foo.bar"],
        var relativeViewNameSugar = /^(\^(?:\.\^)*)\.(.*$)/.exec(uiViewName);
        if (relativeViewNameSugar) {
            // Clobbers existing contextAnchor (rawViewName validation will fix this)
            uiViewContextAnchor = relativeViewNameSugar[1]; // set anchor to "^.^.^"
            uiViewName = relativeViewNameSugar[2]; // set view-name to "foo.bar"
        }
        if (uiViewName.charAt(0) === '!') {
            uiViewName = uiViewName.substr(1);
            uiViewContextAnchor = ''; // target absolutely from root
        }
        // handle parent relative targeting "^.^.^"
        var relativeMatch = /^(\^(?:\.\^)*)$/;
        if (relativeMatch.exec(uiViewContextAnchor)) {
            var anchorState = uiViewContextAnchor.split('.').reduce(function (anchor, x) { return anchor.parent; }, context);
            uiViewContextAnchor = anchorState.name;
        }
        else if (uiViewContextAnchor === '.') {
            uiViewContextAnchor = context.name;
        }
        return { uiViewName: uiViewName, uiViewContextAnchor: uiViewContextAnchor };
    };
    /** @internal */
    ViewService.prototype._rootViewContext = function (context) {
        return (this._rootContext = context || this._rootContext);
    };
    /** @internal */
    ViewService.prototype._viewConfigFactory = function (viewType, factory) {
        this._viewConfigFactories[viewType] = factory;
    };
    ViewService.prototype.createViewConfig = function (path, decl) {
        var cfgFactory = this._viewConfigFactories[decl.$type];
        if (!cfgFactory)
            throw new Error('ViewService: No view config factory registered for type ' + decl.$type);
        var cfgs = cfgFactory(path, decl);
        return (0,_common_predicates__WEBPACK_IMPORTED_MODULE_2__.isArray)(cfgs) ? cfgs : [cfgs];
    };
    /**
     * Deactivates a ViewConfig.
     *
     * This function deactivates a `ViewConfig`.
     * After calling [[sync]], it will un-pair from any `ui-view` with which it is currently paired.
     *
     * @param viewConfig The ViewConfig view to deregister.
     */
    ViewService.prototype.deactivateViewConfig = function (viewConfig) {
        _common_trace__WEBPACK_IMPORTED_MODULE_3__.trace.traceViewServiceEvent('<- Removing', viewConfig);
        (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.removeFrom)(this._viewConfigs, viewConfig);
    };
    ViewService.prototype.activateViewConfig = function (viewConfig) {
        _common_trace__WEBPACK_IMPORTED_MODULE_3__.trace.traceViewServiceEvent('-> Registering', viewConfig);
        this._viewConfigs.push(viewConfig);
    };
    ViewService.prototype.sync = function () {
        var _this = this;
        var uiViewsByFqn = this._uiViews.map(function (uiv) { return [uiv.fqn, uiv]; }).reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__.applyPairs, {});
        // Return a weighted depth value for a uiView.
        // The depth is the nesting depth of ui-views (based on FQN; times 10,000)
        // plus the depth of the state that is populating the uiView
        function uiViewDepth(uiView) {
            var stateDepth = function (context) { return (context && context.parent ? stateDepth(context.parent) + 1 : 1); };
            return uiView.fqn.split('.').length * 10000 + stateDepth(uiView.creationContext);
        }
        // Return the ViewConfig's context's depth in the context tree.
        function viewConfigDepth(config) {
            var context = config.viewDecl.$context, count = 0;
            while (++count && context.parent)
                context = context.parent;
            return count;
        }
        // Given a depth function, returns a compare function which can return either ascending or descending order
        var depthCompare = (0,_common_hof__WEBPACK_IMPORTED_MODULE_1__.curry)(function (depthFn, posNeg, left, right) { return posNeg * (depthFn(left) - depthFn(right)); });
        var matchingConfigPair = function (uiView) {
            var matchingConfigs = _this._viewConfigs.filter(ViewService.matches(uiViewsByFqn, uiView));
            if (matchingConfigs.length > 1) {
                // This is OK.  Child states can target a ui-view that the parent state also targets (the child wins)
                // Sort by depth and return the match from the deepest child
                // console.log(`Multiple matching view configs for ${uiView.fqn}`, matchingConfigs);
                matchingConfigs.sort(depthCompare(viewConfigDepth, -1)); // descending
            }
            return { uiView: uiView, viewConfig: matchingConfigs[0] };
        };
        var configureUIView = function (tuple) {
            // If a parent ui-view is reconfigured, it could destroy child ui-views.
            // Before configuring a child ui-view, make sure it's still in the active uiViews array.
            if (_this._uiViews.indexOf(tuple.uiView) !== -1)
                tuple.uiView.configUpdated(tuple.viewConfig);
        };
        // Sort views by FQN and state depth. Process uiviews nearest the root first.
        var uiViewTuples = this._uiViews.sort(depthCompare(uiViewDepth, 1)).map(matchingConfigPair);
        var matchedViewConfigs = uiViewTuples.map(function (tuple) { return tuple.viewConfig; });
        var unmatchedConfigTuples = this._viewConfigs
            .filter(function (config) { return !(0,_common_common__WEBPACK_IMPORTED_MODULE_0__.inArray)(matchedViewConfigs, config); })
            .map(function (viewConfig) { return ({ uiView: undefined, viewConfig: viewConfig }); });
        uiViewTuples.forEach(configureUIView);
        var allTuples = uiViewTuples.concat(unmatchedConfigTuples);
        this._listeners.forEach(function (cb) { return cb(allTuples); });
        _common_trace__WEBPACK_IMPORTED_MODULE_3__.trace.traceViewSync(allTuples);
    };
    /**
     * Registers a `ui-view` component
     *
     * When a `ui-view` component is created, it uses this method to register itself.
     * After registration the [[sync]] method is used to ensure all `ui-view` are configured with the proper [[ViewConfig]].
     *
     * Note: the `ui-view` component uses the `ViewConfig` to determine what view should be loaded inside the `ui-view`,
     * and what the view's state context is.
     *
     * Note: There is no corresponding `deregisterUIView`.
     *       A `ui-view` should hang on to the return value of `registerUIView` and invoke it to deregister itself.
     *
     * @param uiView The metadata for a UIView
     * @return a de-registration function used when the view is destroyed.
     */
    ViewService.prototype.registerUIView = function (uiView) {
        _common_trace__WEBPACK_IMPORTED_MODULE_3__.trace.traceViewServiceUIViewEvent('-> Registering', uiView);
        var uiViews = this._uiViews;
        var fqnAndTypeMatches = function (uiv) { return uiv.fqn === uiView.fqn && uiv.$type === uiView.$type; };
        if (uiViews.filter(fqnAndTypeMatches).length)
            _common_trace__WEBPACK_IMPORTED_MODULE_3__.trace.traceViewServiceUIViewEvent('!!!! duplicate uiView named:', uiView);
        uiViews.push(uiView);
        this.sync();
        return function () {
            var idx = uiViews.indexOf(uiView);
            if (idx === -1) {
                _common_trace__WEBPACK_IMPORTED_MODULE_3__.trace.traceViewServiceUIViewEvent('Tried removing non-registered uiView', uiView);
                return;
            }
            _common_trace__WEBPACK_IMPORTED_MODULE_3__.trace.traceViewServiceUIViewEvent('<- Deregistering', uiView);
            (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.removeFrom)(uiViews)(uiView);
        };
    };
    /**
     * Returns the list of views currently available on the page, by fully-qualified name.
     *
     * @return {Array} Returns an array of fully-qualified view names.
     */
    ViewService.prototype.available = function () {
        return this._uiViews.map((0,_common_hof__WEBPACK_IMPORTED_MODULE_1__.prop)('fqn'));
    };
    /**
     * Returns the list of views on the page containing loaded content.
     *
     * @return {Array} Returns an array of fully-qualified view names.
     */
    ViewService.prototype.active = function () {
        return this._uiViews.filter((0,_common_hof__WEBPACK_IMPORTED_MODULE_1__.prop)('$config')).map((0,_common_hof__WEBPACK_IMPORTED_MODULE_1__.prop)('name'));
    };
    /**
     * Given a ui-view and a ViewConfig, determines if they "match".
     *
     * A ui-view has a fully qualified name (fqn) and a context object.  The fqn is built from its overall location in
     * the DOM, describing its nesting relationship to any parent ui-view tags it is nested inside of.
     *
     * A ViewConfig has a target ui-view name and a context anchor.  The ui-view name can be a simple name, or
     * can be a segmented ui-view path, describing a portion of a ui-view fqn.
     *
     * In order for a ui-view to match ViewConfig, ui-view's $type must match the ViewConfig's $type
     *
     * If the ViewConfig's target ui-view name is a simple name (no dots), then a ui-view matches if:
     * - the ui-view's name matches the ViewConfig's target name
     * - the ui-view's context matches the ViewConfig's anchor
     *
     * If the ViewConfig's target ui-view name is a segmented name (with dots), then a ui-view matches if:
     * - There exists a parent ui-view where:
     *    - the parent ui-view's name matches the first segment (index 0) of the ViewConfig's target name
     *    - the parent ui-view's context matches the ViewConfig's anchor
     * - And the remaining segments (index 1..n) of the ViewConfig's target name match the tail of the ui-view's fqn
     *
     * Example:
     *
     * DOM:
     * <ui-view>                        <!-- created in the root context (name: "") -->
     *   <ui-view name="foo">                <!-- created in the context named: "A"      -->
     *     <ui-view>                    <!-- created in the context named: "A.B"    -->
     *       <ui-view name="bar">            <!-- created in the context named: "A.B.C"  -->
     *       </ui-view>
     *     </ui-view>
     *   </ui-view>
     * </ui-view>
     *
     * uiViews: [
     *  { fqn: "$default",                  creationContext: { name: "" } },
     *  { fqn: "$default.foo",              creationContext: { name: "A" } },
     *  { fqn: "$default.foo.$default",     creationContext: { name: "A.B" } }
     *  { fqn: "$default.foo.$default.bar", creationContext: { name: "A.B.C" } }
     * ]
     *
     * These four view configs all match the ui-view with the fqn: "$default.foo.$default.bar":
     *
     * - ViewConfig1: { uiViewName: "bar",                       uiViewContextAnchor: "A.B.C" }
     * - ViewConfig2: { uiViewName: "$default.bar",              uiViewContextAnchor: "A.B" }
     * - ViewConfig3: { uiViewName: "foo.$default.bar",          uiViewContextAnchor: "A" }
     * - ViewConfig4: { uiViewName: "$default.foo.$default.bar", uiViewContextAnchor: "" }
     *
     * Using ViewConfig3 as an example, it matches the ui-view with fqn "$default.foo.$default.bar" because:
     * - The ViewConfig's segmented target name is: [ "foo", "$default", "bar" ]
     * - There exists a parent ui-view (which has fqn: "$default.foo") where:
     *    - the parent ui-view's name "foo" matches the first segment "foo" of the ViewConfig's target name
     *    - the parent ui-view's context "A" matches the ViewConfig's anchor context "A"
     * - And the remaining segments [ "$default", "bar" ].join("."_ of the ViewConfig's target name match
     *   the tail of the ui-view's fqn "default.bar"
     *
     * @internal
     */
    ViewService.matches = function (uiViewsByFqn, uiView) { return function (viewConfig) {
        // Don't supply an ng1 ui-view with an ng2 ViewConfig, etc
        if (uiView.$type !== viewConfig.viewDecl.$type)
            return false;
        // Split names apart from both viewConfig and uiView into segments
        var vc = viewConfig.viewDecl;
        var vcSegments = vc.$uiViewName.split('.');
        var uivSegments = uiView.fqn.split('.');
        // Check if the tails of the segment arrays match. ex, these arrays' tails match:
        // vc: ["foo", "bar"], uiv fqn: ["$default", "foo", "bar"]
        if (!(0,_common_common__WEBPACK_IMPORTED_MODULE_0__.equals)(vcSegments, uivSegments.slice(0 - vcSegments.length)))
            return false;
        // Now check if the fqn ending at the first segment of the viewConfig matches the context:
        // ["$default", "foo"].join(".") == "$default.foo", does the ui-view $default.foo context match?
        var negOffset = 1 - vcSegments.length || undefined;
        var fqnToFirstSegment = uivSegments.slice(0, negOffset).join('.');
        var uiViewContext = uiViewsByFqn[fqnToFirstSegment].creationContext;
        return vc.$uiViewContextAnchor === (uiViewContext && uiViewContext.name);
    }; };
    return ViewService;
}());

//# sourceMappingURL=view.js.map

/***/ }),

/***/ "../../jinge/lib/components/dynamic.js":
/*!*********************************************!*\
  !*** ../../jinge/lib/components/dynamic.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DynamicRenderComponent: () => (/* binding */ DynamicRenderComponent)
/* harmony export */ });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "../../jinge/lib/vm/common.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/component */ "../../jinge/lib/core/component.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "../../jinge/lib/util/index.js");
/* harmony import */ var _core_render_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/render_fns */ "../../jinge/lib/core/render_fns.js");




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

/***/ "../../jinge/lib/components/for.js":
/*!*****************************************!*\
  !*** ../../jinge/lib/components/for.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForComponent: () => (/* binding */ ForComponent),
/* harmony export */   ForEachComponent: () => (/* binding */ ForEachComponent)
/* harmony export */ });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "../../jinge/lib/vm/common.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/component */ "../../jinge/lib/core/component.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "../../jinge/lib/util/index.js");



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
}
function createEl(item, i, isLast, itemRenderFn, context) {
  return new ForEachComponent(
    (0,_core_component__WEBPACK_IMPORTED_MODULE_1__.attrs)({
      [_core_component__WEBPACK_IMPORTED_MODULE_1__.__]: {
        context,
        slots: {
          default: itemRenderFn
        }
      }
    }),
    item,
    i,
    isLast
  )[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
}
function appendRenderEach(item, i, isLast, itemRenderFn, roots, context) {
  const el = createEl(item, i, isLast, itemRenderFn, context);
  roots.push(el);
  return el.__render();
}
function _prepareKey(item, i, keyMap, keyName) {
  const key = keyName === "each" ? item : keyName(item);
  if (keyMap.has(key)) {
    console.error(
      `loop items [${i}] and [${keyMap.get(
        key
      )}] of <for> component both have key '${key}', dulplicated key may cause update error.`
    );
  }
  keyMap.set(key, i);
  return key;
}
function renderItems(items, itemRenderFn, roots, keys, keyName, context) {
  const result = [];
  const tmpKeyMap = /* @__PURE__ */ new Map();
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (keyName !== "index") {
      keys.push(_prepareKey(item, i, tmpKeyMap, keyName));
    }
    const els = appendRenderEach(item, i, i === items.length - 1, itemRenderFn, roots, context);
    result.push(...els);
  }
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
    if ((0,_util__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(attrs2.loop) || attrs2.loop === null || (0,_vm_common__WEBPACK_IMPORTED_MODULE_0__.isViewModel)(attrs2.loop)) {
      _jg0.loop = attrs2.loop;
      attrs2[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("loop", () => {
        _jg0.loop = attrs2.loop;
      });
    } else {
      _jg0._l = attrs2.loop;
    }
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
        const rr = newEl.__render();
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
          const doms = appendRenderEach(newItems[i], i, i === nl - 1, itemRenderFn, roots, ctx);
          doms.forEach((el) => {
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
      for (const el of roots) {
        el.__handleAfterRender();
      }
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
          const doms = el2.__render();
          doms.forEach(($n) => $f2.appendChild($n));
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
          const doms = reuseEl.__render();
          doms.forEach(($n) => $f.appendChild($n));
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
      if ($nes?.length) {
        for (const el2 of $nes) {
          el2.__handleAfterRender();
        }
      }
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

/***/ "../../jinge/lib/components/html.js":
/*!******************************************!*\
  !*** ../../jinge/lib/components/html.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BindHtmlComponent: () => (/* binding */ BindHtmlComponent)
/* harmony export */ });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "../../jinge/lib/vm/common.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/component */ "../../jinge/lib/core/component.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "../../jinge/lib/util/index.js");


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

/***/ "../../jinge/lib/components/if.js":
/*!****************************************!*\
  !*** ../../jinge/lib/components/if.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IfComponent: () => (/* binding */ IfComponent),
/* harmony export */   SwitchComponent: () => (/* binding */ SwitchComponent)
/* harmony export */ });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "../../jinge/lib/vm/common.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/component */ "../../jinge/lib/core/component.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "../../jinge/lib/util/index.js");
/* harmony import */ var _transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transition */ "../../jinge/lib/components/transition.js");



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
function renderSwitch(component, slot) {
  const slots = component[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].slots;
  const renderFn = slots ? slots[slot] : null;
  const roots = component[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes;
  if (!renderFn) {
    roots.push(document.createComment("empty"));
    return roots;
  }
  const el = createEl(renderFn, component[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].context);
  roots.push(el);
  const doms = el.__render();
  for (const node of el[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes) {
    if ((0,_core_component__WEBPACK_IMPORTED_MODULE_1__.isComponent)(node) && node instanceof _transition__WEBPACK_IMPORTED_MODULE_3__.TransitionComponent) {
      node.__transition(this.test, true);
    }
  }
  return doms;
}
function doUpdate(component, slot) {
  const roots = component[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes;
  const el = roots[0];
  const isComp = (0,_core_component__WEBPACK_IMPORTED_MODULE_1__.isComponent)(el);
  const firstDOM = isComp ? el.__firstDOM : el;
  const parentDOM = (isComp ? firstDOM : el).parentNode;
  const renderFn = component[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].slots?.[slot];
  if (renderFn) {
    const newEl = createEl(renderFn, component[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].context);
    const nodes = newEl.__render();
    parentDOM.insertBefore(nodes.length > 1 ? (0,_util__WEBPACK_IMPORTED_MODULE_2__.createFragment)(nodes) : nodes[0], firstDOM);
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
}
function getIfSlot(component, expect) {
  const slots = component[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].slots;
  if (!slots)
    return "default";
  if (expect) {
    return "true" in slots ? "true" : "default";
  } else {
    return "false" in slots ? "false" : "else";
  }
}
class IfComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;const f1_jg0402 = () => {
    _jg0.expect = attrs.expect; }; f1_jg0402(); attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("expect", f1_jg0402);
  }
  get expect() {
    return this._e;
  }
  set expect(value) {
    if (this._e === value)
      return;
    this._e = value;
    this.__updateIfNeed();
  }
  __render() {
    const els = renderSwitch(this, getIfSlot(this, this._e));
    this.__notify("branch-switched", this._e);
    return els;
  }
  __update() {
    const s = getIfSlot(this, this._e);
    if (!(0,_core_component__WEBPACK_IMPORTED_MODULE_1__.isComponent)(this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes[0]) && !this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].slots?.[s]) {
      return;
    }
    doUpdate(this, s);
    this.__notify("branch-switched", this._e);
  }
}
class SwitchComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;const f1_jg0402 = () => {
    _jg0.test = attrs.test; }; f1_jg0402(); attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("test", f1_jg0402);
  }
  get test() {
    return this._v;
  }
  set test(v) {
    if (this._v === v)
      return;
    this._v = v;
    this.__updateIfNeed();
  }
  __render() {
    const els = renderSwitch(this, this._v);
    this.__notify("branch-switched", this._v);
    return els;
  }
  __update() {
    if (!(0,_core_component__WEBPACK_IMPORTED_MODULE_1__.isComponent)(this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes[0]) && !this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].slots?.[this._v]) {
      return;
    }
    doUpdate(this, this._v);
    this.__notify("branch-switched", this._v);
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
/* harmony export */   BindHtmlComponent: () => (/* reexport safe */ _html__WEBPACK_IMPORTED_MODULE_2__.BindHtmlComponent),
/* harmony export */   DynamicRenderComponent: () => (/* reexport safe */ _dynamic__WEBPACK_IMPORTED_MODULE_6__.DynamicRenderComponent),
/* harmony export */   ForComponent: () => (/* reexport safe */ _for__WEBPACK_IMPORTED_MODULE_0__.ForComponent),
/* harmony export */   ForEachComponent: () => (/* reexport safe */ _for__WEBPACK_IMPORTED_MODULE_0__.ForEachComponent),
/* harmony export */   IfComponent: () => (/* reexport safe */ _if__WEBPACK_IMPORTED_MODULE_3__.IfComponent),
/* harmony export */   LogComponent: () => (/* reexport safe */ _log__WEBPACK_IMPORTED_MODULE_5__.LogComponent),
/* harmony export */   ParameterComponent: () => (/* reexport safe */ _parameter__WEBPACK_IMPORTED_MODULE_4__.ParameterComponent),
/* harmony export */   ShowComponent: () => (/* reexport safe */ _show__WEBPACK_IMPORTED_MODULE_1__.ShowComponent),
/* harmony export */   SwitchComponent: () => (/* reexport safe */ _if__WEBPACK_IMPORTED_MODULE_3__.SwitchComponent),
/* harmony export */   TransitionComponent: () => (/* reexport safe */ _transition__WEBPACK_IMPORTED_MODULE_7__.TransitionComponent)
/* harmony export */ });
/* harmony import */ var _for__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./for */ "../../jinge/lib/components/for.js");
/* harmony import */ var _show__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show */ "../../jinge/lib/components/show.js");
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./html */ "../../jinge/lib/components/html.js");
/* harmony import */ var _if__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./if */ "../../jinge/lib/components/if.js");
/* harmony import */ var _parameter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parameter */ "../../jinge/lib/components/parameter.js");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./log */ "../../jinge/lib/components/log.js");
/* harmony import */ var _dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dynamic */ "../../jinge/lib/components/dynamic.js");
/* harmony import */ var _transition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transition */ "../../jinge/lib/components/transition.js");









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
/* harmony export */   LogComponent: () => (/* binding */ LogComponent)
/* harmony export */ });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "../../jinge/lib/vm/common.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/component */ "../../jinge/lib/core/component.js");

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
    return [document.createComment(this._msg.toString())];
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
/* harmony export */   ParameterComponent: () => (/* binding */ ParameterComponent)
/* harmony export */ });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "../../jinge/lib/vm/common.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/component */ "../../jinge/lib/core/component.js");


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

/***/ "../../jinge/lib/components/show.js":
/*!******************************************!*\
  !*** ../../jinge/lib/components/show.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShowComponent: () => (/* binding */ ShowComponent)
/* harmony export */ });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "../../jinge/lib/vm/common.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/component */ "../../jinge/lib/core/component.js");
/* harmony import */ var _transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transition */ "../../jinge/lib/components/transition.js");


function setDisplay(el, show) {
  if (el.nodeType === Node.ELEMENT_NODE) {
    el.style.display = show ? "" : "none";
  }
}
class ShowComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;const f1_jg0402 = () => {
    _jg0.test = attrs.test; }; f1_jg0402(); attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("test", f1_jg0402);
  }
  get test() {
    return this._test;
  }
  set test(v) {
    if (this._test === v)
      return;
    this._test = v;
    this.__updateIfNeed();
  }
  __render() {
    const els = super.__render();
    this.__update(true);
    return els;
  }
  __update(isFirst = false) {
    for (const node of this[_core_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes) {
      if ((0,_core_component__WEBPACK_IMPORTED_MODULE_1__.isComponent)(node)) {
        if (node instanceof _transition__WEBPACK_IMPORTED_MODULE_2__.TransitionComponent) {
          node.__cancel();
          if (this.test) {
            node.__on("before-enter", () => setDisplay(node.__firstDOM, true), { once: true });
          } else {
            node.__on("after-leave", () => setDisplay(node.__firstDOM, false), { once: true });
          }
          node.__transition(this.test, isFirst);
        } else {
          setDisplay(node.__firstDOM, this.test);
        }
      } else {
        setDisplay(node, this.test);
      }
    }
  }
}


//# sourceMappingURL=show.js.map

/***/ }),

/***/ "../../jinge/lib/components/transition.js":
/*!************************************************!*\
  !*** ../../jinge/lib/components/transition.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransitionComponent: () => (/* binding */ TransitionComponent)
/* harmony export */ });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "../../jinge/lib/vm/common.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "../../jinge/lib/util/index.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/component */ "../../jinge/lib/core/component.js");
/* harmony import */ var _core_transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/transition */ "../../jinge/lib/core/transition.js");



function genClassNames(name) {
  name = name || "jg";
  return {
    enterFrom: `${name}-enter-from`,
    enterActive: `${name}-enter-active`,
    enterTo: `${name}-enter-to`,
    leaveFrom: `${name}-leave-from`,
    leaveActive: `${name}-leave-active`,
    leaveTo: `${name}-leave-to`
  };
}
function doTrans(comp, isEnter, el) {
  const type = isEnter ? "enter" : "leave";
  const fromClass = comp._cs[`${type}From`];
  const activeClass = comp._cs[`${type}Active`];
  const toClass = comp._cs[`${type}To`];
  el.classList.add(fromClass, activeClass);
  comp.__notify(`before-${type}`, el);
  let cancel = void 0;
  let imm = (0,_util__WEBPACK_IMPORTED_MODULE_1__.setImmediate)(() => {
    imm = 0;
    const dt = (0,_core_transition__WEBPACK_IMPORTED_MODULE_3__.getDurationType)(el);
    if (!dt) {
      comp.__notify(`after-${type}`, el);
      return;
    }
    const clear = () => {
      cancel = void 0;
      comp._t = void 0;
      (0,_util__WEBPACK_IMPORTED_MODULE_1__.removeEvent)(el, dt, onEnd);
      el.classList.remove(activeClass, toClass);
    };
    const onEnd = () => {
      clear();
      comp.__notify(`after-${type}`, el);
    };
    (0,_util__WEBPACK_IMPORTED_MODULE_1__.addEvent)(el, dt, onEnd);
    cancel = () => {
      clear();
      comp.__notify(`${type}-cancelled`, el);
    };
    el.classList.remove(fromClass);
    el.classList.add(toClass);
    comp.__notify(type, el);
  });
  comp._t = () => {
    if (imm)
      (0,_util__WEBPACK_IMPORTED_MODULE_1__.clearImmediate)(imm);
    if (cancel)
      cancel();
  };
}
class TransitionComponent extends _core_component__WEBPACK_IMPORTED_MODULE_2__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    _jg0._cs = attrs.classNames || genClassNames(attrs.name);
    _jg0._appear = attrs.appear === true;
  }
  __transition(isEnter, isFirst) {
    if (isFirst && !this._appear) {
      return;
    }
    this.__cancel();
    const el = this.__firstDOM;
    if (el.nodeType === Node.ELEMENT_NODE) {
      doTrans(this, isEnter, el);
    }
  }
  /**
   * 取消当前正在进行的渡（如果当前处于过渡中的话）
   */
  __cancel() {
    if (this._t) {
      this._t();
      this._t = void 0;
    }
  }
  __destroy(removeDOM) {
    this.__cancel();
    return super.__destroy(removeDOM);
  }
}


//# sourceMappingURL=transition.js.map

/***/ }),

/***/ "../../jinge/lib/core/bootstrap.js":
/*!*****************************************!*\
  !*** ../../jinge/lib/core/bootstrap.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bootstrap: () => (/* binding */ bootstrap)
/* harmony export */ });
function bootstrap(ComponentClazz, dom, attrs) {
  const app = ComponentClazz.create(attrs);
  app.__renderToDOM(dom, dom !== document.body);
  return app;
}


//# sourceMappingURL=bootstrap.js.map

/***/ }),

/***/ "../../jinge/lib/core/component.js":
/*!*****************************************!*\
  !*** ../../jinge/lib/core/component.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Component: () => (/* binding */ Component),
/* harmony export */   ComponentStates: () => (/* binding */ ComponentStates),
/* harmony export */   ContextStates: () => (/* binding */ ContextStates),
/* harmony export */   __: () => (/* binding */ __),
/* harmony export */   assertRenderResults: () => (/* binding */ assertRenderResults),
/* harmony export */   attrs: () => (/* binding */ wrapAttrs),
/* harmony export */   isComponent: () => (/* binding */ isComponent)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge/lib/util/index.js");
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vm/common */ "../../jinge/lib/vm/common.js");
/* harmony import */ var _vm_proxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vm/proxy */ "../../jinge/lib/vm/proxy.js");
/* harmony import */ var _messenger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messenger */ "../../jinge/lib/core/messenger.js");
var _a;




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
  /**
   * ATTENTION!!!
   *
   * Don't use constructor directly, use static factory method `create(attrs)` instead.
   */
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
    const $proxy = this[_vm_common__WEBPACK_IMPORTED_MODULE_1__.$$].proxy;
    ["class", "style"].forEach((attrN) => {
      if (!(attrN in attrs))
        return;
      const f = () => $proxy[attrN] = attrs[attrN];
      f();
      attrs[_vm_common__WEBPACK_IMPORTED_MODULE_1__.$$].__watch(attrN, f);
    });
  }
  static create(attrs) {
    const isObj = (0,_util__WEBPACK_IMPORTED_MODULE_0__.isObject)(attrs);
    const vmAttrs = isObj && _vm_common__WEBPACK_IMPORTED_MODULE_1__.$$ in attrs ? attrs : wrapAttrs(isObj ? attrs : {});
    return new this(vmAttrs)[_vm_common__WEBPACK_IMPORTED_MODULE_1__.$$].proxy;
  }
  /**
   * store deregisterFn and auto call it when component is being destroy.
   */
  __addDeregisterFn(deregisterFn) {
    let deregs = this[__].deregFns;
    if (!deregs) {
      this[__].deregFns = deregs = /* @__PURE__ */ new Set();
    }
    deregs.add(deregisterFn);
  }
  /**
   * Helper function to add i18n change listener.
   * The listener will be auto removed when component is destroied.
   */
  // __i18nWatch(listener: (locale: string) => void, immediate = false): void {
  //   this.__addDeregisterFn(
  //     i18n.watch((locale) => {
  //       // bind component to listener's function context.
  //       listener.call(this, locale);
  //     }, immediate),
  //   );
  // }
  /**
   * Helper function to add dom event listener.
   * Return deregister function which will remove event listener.
   * If you do dot call deregister function, it will be auto called when component is destroied.
   * @returns {Function} deregister function to remove listener
   */
  __domAddListener($el, eventName, listener, capture) {
    const deregEvtFn = (0,_util__WEBPACK_IMPORTED_MODULE_0__.registerEvent)(
      $el,
      eventName,
      ($event) => {
        listener.call(this, $event);
      },
      capture
    );
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
        const deregFn = (0,_util__WEBPACK_IMPORTED_MODULE_0__.registerEvent)(
          targetEl,
          eventName,
          opts && (opts.stop || opts.prevent) ? ($evt) => {
            opts.stop && $evt.stopPropagation();
            opts.prevent && $evt.preventDefault();
            handler.call(this, $evt);
          } : ($evt) => {
            handler.call(this, $evt);
          },
          opts
        );
        this.__addDeregisterFn(deregFn);
      });
    });
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
   * 组件的实际渲染函数，渲染模板或默认插槽。
   * 该函数可被子组件重载，进而覆盖渲染逻辑。
   * 该函数可以是同步或异步函数，但通常推荐使用同步函数，将异步初始化逻辑放到 __beforeRender 生命周期函数中。
   */
  __render() {
    const Clazz = this.constructor;
    let renderFn = Clazz.template;
    if (!renderFn && this[__].slots) {
      renderFn = this[__].slots.default;
    }
    if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isFunction)(renderFn)) {
      throw new Error(`Template of ${Clazz.name} not found. Forget static getter "template"?`);
    }
    return assertRenderResults(renderFn(this));
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
      for (const deregFn of Array.from(comp.deregFns)) {
        deregFn();
      }
      comp.deregFns.clear();
      comp.deregFns = null;
    }
    comp.state = 3 /* DESTROIED */;
    comp.rootNodes = comp.nonRootCompNodes = comp.refs = comp.slots = comp.context = null;
  }
  __handleBeforeDestroy(removeDOM = false) {
    for (const component of this[__].nonRootCompNodes) {
      component.__destroy(false);
    }
    let $parent;
    for (const node of this[__].rootNodes) {
      if (isComponent(node)) {
        node.__destroy(removeDOM);
      } else if (removeDOM) {
        if (!$parent) {
          $parent = node.parentNode;
        }
        $parent.removeChild(node);
      }
    }
  }
  __handleAfterRender() {
    this[__].passedAttrs[_vm_common__WEBPACK_IMPORTED_MODULE_1__.$$].__notifiable = true;
    this[_vm_common__WEBPACK_IMPORTED_MODULE_1__.$$].__notifiable = true;
    for (const n of this[__].rootNodes) {
      if (isComponent(n)) {
        n.__handleAfterRender();
      }
    }
    for (const n of this[__].nonRootCompNodes) {
      n.__handleAfterRender();
    }
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
      this.__update();
      return;
    }
    if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isFunction)(handler)) {
      if (!nextTick) {
        this.__update();
        return;
      } else {
        handler = this.__update;
      }
    } else if (!nextTick) {
      handler.call(this);
      return;
    }
    let ntMap = this[__].upNextMap;
    if (!ntMap)
      ntMap = this[__].upNextMap = /* @__PURE__ */ new Map();
    if (ntMap.has(handler)) {
      return;
    }
    ntMap.set(
      handler,
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.setImmediate)(() => {
        ntMap.delete(handler);
        handler.call(this);
      })
    );
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
        throw new Error(
          `Contenxt with key: ${key.toString()} is exist. Pass third argument forceOverride=true to override it.`
        );
      }
    }
    this[__].context[key] = value;
  }
  __getContext(key) {
    return this[__].context?.[key];
  }
  /**
   * This method is used for compiler generated code.
   * Do not use it manually.
   */
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
  /**
   * Get child node(or nodes) marked by 'ref:' attribute in template
   */
  __getRef(ref) {
    if (this[__].state !== 1 /* RENDERED */) {
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.warn)(
        `Warning: call __getRef before component '${this.constructor.name}' rendered will get nothing. see https://[TODO]`
      );
    }
    return this[__].refs?.get(ref);
  }
  /**
   * lifecycle hook, called after rendered.
   */
  __afterRender() {
  }
  /**
   * lifecycle hook, called before destroy.
   */
  __beforeDestroy() {
  }
}
_a = __, __, _vm_common__WEBPACK_IMPORTED_MODULE_1__.$$;
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

/***/ "../../jinge/lib/core/index.js":
/*!*************************************!*\
  !*** ../../jinge/lib/core/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Component: () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_1__.Component),
/* harmony export */   ComponentStates: () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_1__.ComponentStates),
/* harmony export */   ContextStates: () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_1__.ContextStates),
/* harmony export */   MESSENGER_LISTENERS: () => (/* reexport safe */ _messenger__WEBPACK_IMPORTED_MODULE_2__.MESSENGER_LISTENERS),
/* harmony export */   Messenger: () => (/* reexport safe */ _messenger__WEBPACK_IMPORTED_MODULE_2__.Messenger),
/* harmony export */   TransitionStates: () => (/* reexport safe */ _transition__WEBPACK_IMPORTED_MODULE_4__.TransitionStates),
/* harmony export */   __: () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_1__.__),
/* harmony export */   assertRenderResults: () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_1__.assertRenderResults),
/* harmony export */   attrs: () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_1__.attrs),
/* harmony export */   bootstrap: () => (/* reexport safe */ _bootstrap__WEBPACK_IMPORTED_MODULE_0__.bootstrap),
/* harmony export */   emptyRenderFn: () => (/* reexport safe */ _render_fns__WEBPACK_IMPORTED_MODULE_3__.emptyRenderFn),
/* harmony export */   errorRenderFn: () => (/* reexport safe */ _render_fns__WEBPACK_IMPORTED_MODULE_3__.errorRenderFn),
/* harmony export */   getDuration: () => (/* reexport safe */ _transition__WEBPACK_IMPORTED_MODULE_4__.getDuration),
/* harmony export */   getDurationType: () => (/* reexport safe */ _transition__WEBPACK_IMPORTED_MODULE_4__.getDurationType),
/* harmony export */   isComponent: () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_1__.isComponent),
/* harmony export */   textRenderFn: () => (/* reexport safe */ _render_fns__WEBPACK_IMPORTED_MODULE_3__.textRenderFn)
/* harmony export */ });
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap */ "../../jinge/lib/core/bootstrap.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "../../jinge/lib/core/component.js");
/* harmony import */ var _messenger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messenger */ "../../jinge/lib/core/messenger.js");
/* harmony import */ var _render_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render_fns */ "../../jinge/lib/core/render_fns.js");
/* harmony import */ var _transition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transition */ "../../jinge/lib/core/transition.js");






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
/* harmony export */   MESSENGER_LISTENERS: () => (/* binding */ MESSENGER_LISTENERS),
/* harmony export */   Messenger: () => (/* binding */ Messenger)
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
    for (const [handler, opts] of listeners) {
      try {
        handler(...args);
      } catch (ex) {
        console.error("failed __notify", eventName, "due to:", ex);
      }
      if (opts?.once) {
        listeners.delete(handler);
      }
    }
  }
  /**
   * 监听事件，返回该监听的卸载函数
   */
  __on(eventName, eventListener, options) {
    if (!this[MESSENGER_LISTENERS]) {
      this[MESSENGER_LISTENERS] = /* @__PURE__ */ new Map();
    }
    let listeners = this[MESSENGER_LISTENERS].get(eventName);
    if (!listeners) {
      this[MESSENGER_LISTENERS].set(eventName, listeners = /* @__PURE__ */ new Map());
    }
    listeners.set(eventListener, options);
    return () => {
      this.__off(eventName, eventListener);
    };
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

/***/ "../../jinge/lib/core/render_fns.js":
/*!******************************************!*\
  !*** ../../jinge/lib/core/render_fns.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   emptyRenderFn: () => (/* binding */ emptyRenderFn),
/* harmony export */   errorRenderFn: () => (/* binding */ errorRenderFn),
/* harmony export */   textRenderFn: () => (/* binding */ textRenderFn)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge/lib/util/index.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "../../jinge/lib/core/component.js");


function emptyRenderFn(component) {
  const el = document.createComment("empty");
  component[_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes.push(el);
  return [el];
}
function errorRenderFn(component, message) {
  const el = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createElement)("code", {
    style: "color: red !important;"
  });
  el.innerHTML = message;
  component[_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes.push(el);
  return [el];
}
function textRenderFn(component, txtContent) {
  const el = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createTextNode)(txtContent);
  component[_component__WEBPACK_IMPORTED_MODULE_1__.__].rootNodes.push(el);
  return el;
}


//# sourceMappingURL=render_fns.js.map

/***/ }),

/***/ "../../jinge/lib/core/transition.js":
/*!******************************************!*\
  !*** ../../jinge/lib/core/transition.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransitionStates: () => (/* binding */ TransitionStates),
/* harmony export */   getDuration: () => (/* binding */ getDuration),
/* harmony export */   getDurationType: () => (/* binding */ getDurationType)
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

/***/ "../../jinge/lib/index.js":
/*!********************************!*\
  !*** ../../jinge/lib/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$: () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.$$),
/* harmony export */   BindHtmlComponent: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.BindHtmlComponent),
/* harmony export */   Component: () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.Component),
/* harmony export */   ComponentStates: () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.ComponentStates),
/* harmony export */   ContextStates: () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.ContextStates),
/* harmony export */   DynamicRenderComponent: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.DynamicRenderComponent),
/* harmony export */   ForComponent: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ForComponent),
/* harmony export */   ForEachComponent: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ForEachComponent),
/* harmony export */   IfComponent: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.IfComponent),
/* harmony export */   LogComponent: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.LogComponent),
/* harmony export */   MESSENGER_LISTENERS: () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.MESSENGER_LISTENERS),
/* harmony export */   Messenger: () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.Messenger),
/* harmony export */   ParameterComponent: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ParameterComponent),
/* harmony export */   ShowComponent: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ShowComponent),
/* harmony export */   SwitchComponent: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.SwitchComponent),
/* harmony export */   TransitionComponent: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.TransitionComponent),
/* harmony export */   TransitionStates: () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.TransitionStates),
/* harmony export */   ViewModelCoreImpl: () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.ViewModelCoreImpl),
/* harmony export */   __: () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.__),
/* harmony export */   addEvent: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.addEvent),
/* harmony export */   addParent: () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.addParent),
/* harmony export */   appendChildren: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.appendChildren),
/* harmony export */   arrayEqual: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.arrayEqual),
/* harmony export */   arrayPushIfNotExist: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.arrayPushIfNotExist),
/* harmony export */   arrayRemove: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.arrayRemove),
/* harmony export */   assertRenderResults: () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.assertRenderResults),
/* harmony export */   attrs: () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.attrs),
/* harmony export */   bootstrap: () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.bootstrap),
/* harmony export */   class2str: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.class2str),
/* harmony export */   clearImmediate: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.clearImmediate),
/* harmony export */   createAttributes: () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.createAttributes),
/* harmony export */   createComponent: () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.createComponent),
/* harmony export */   createElement: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.createElement),
/* harmony export */   createElementWithChild: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.createElementWithChild),
/* harmony export */   createElementWithoutAttrs: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.createElementWithoutAttrs),
/* harmony export */   createFragment: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.createFragment),
/* harmony export */   createSVGElement: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.createSVGElement),
/* harmony export */   createSVGElementWithoutAttrs: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.createSVGElementWithoutAttrs),
/* harmony export */   createTextNode: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.createTextNode),
/* harmony export */   createViewModel: () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.createViewModel),
/* harmony export */   deleteNode: () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.deleteNode),
/* harmony export */   disableWarning: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.disableWarning),
/* harmony export */   emptyRenderFn: () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.emptyRenderFn),
/* harmony export */   errorRenderFn: () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.errorRenderFn),
/* harmony export */   getDuration: () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.getDuration),
/* harmony export */   getDurationType: () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.getDurationType),
/* harmony export */   getPropertyName: () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.getPropertyName),
/* harmony export */   handleCancel: () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.handleCancel),
/* harmony export */   handleOnce: () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.handleOnce),
/* harmony export */   insertAfter: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.insertAfter),
/* harmony export */   isArray: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.isArray),
/* harmony export */   isBoolean: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.isBoolean),
/* harmony export */   isComponent: () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.isComponent),
/* harmony export */   isFunction: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.isFunction),
/* harmony export */   isInnerObj: () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.isInnerObj),
/* harmony export */   isNumber: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.isNumber),
/* harmony export */   isObject: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.isObject),
/* harmony export */   isPromise: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.isPromise),
/* harmony export */   isPublicProperty: () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.isPublicProperty),
/* harmony export */   isString: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.isString),
/* harmony export */   isUndefined: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.isUndefined),
/* harmony export */   isViewModel: () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.isViewModel),
/* harmony export */   loopClearNode: () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.loopClearNode),
/* harmony export */   loopCreateNode: () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.loopCreateNode),
/* harmony export */   loopGetNode: () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.loopGetNode),
/* harmony export */   loopHandle: () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.loopHandle),
/* harmony export */   loopNotify: () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.loopNotify),
/* harmony export */   parsePropertyPath: () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.parsePropertyPath),
/* harmony export */   registerEvent: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.registerEvent),
/* harmony export */   removeAttribute: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.removeAttribute),
/* harmony export */   removeEvent: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.removeEvent),
/* harmony export */   removeParent: () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.removeParent),
/* harmony export */   replaceChildren: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.replaceChildren),
/* harmony export */   setAttribute: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.setAttribute),
/* harmony export */   setClassAttribute: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.setClassAttribute),
/* harmony export */   setImmediate: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.setImmediate),
/* harmony export */   setStyleAttribute: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.setStyleAttribute),
/* harmony export */   setText: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.setText),
/* harmony export */   shiftParent: () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.shiftParent),
/* harmony export */   style2str: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.style2str),
/* harmony export */   textRenderFn: () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.textRenderFn),
/* harmony export */   typeOf: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.typeOf),
/* harmony export */   uid: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.uid),
/* harmony export */   unwatch: () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.unwatch),
/* harmony export */   vm: () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.vm),
/* harmony export */   warn: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.warn),
/* harmony export */   watch: () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.watch)
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "../../jinge/lib/components/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "../../jinge/lib/core/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "../../jinge/lib/util/index.js");
/* harmony import */ var _vm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vm */ "../../jinge/lib/vm/index.js");





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
/* harmony export */   arrayEqual: () => (/* binding */ arrayEqual),
/* harmony export */   arrayPushIfNotExist: () => (/* binding */ arrayPushIfNotExist),
/* harmony export */   arrayRemove: () => (/* binding */ arrayRemove)
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
/* harmony export */   disableWarning: () => (/* binding */ disableWarning),
/* harmony export */   uid: () => (/* binding */ uid),
/* harmony export */   warn: () => (/* binding */ warn)
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

/***/ "../../jinge/lib/util/dom.js":
/*!***********************************!*\
  !*** ../../jinge/lib/util/dom.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addEvent: () => (/* binding */ addEvent),
/* harmony export */   appendChildren: () => (/* binding */ appendChildren),
/* harmony export */   class2str: () => (/* binding */ class2str),
/* harmony export */   createElement: () => (/* binding */ createElement),
/* harmony export */   createElementWithChild: () => (/* binding */ createElementWithChild),
/* harmony export */   createElementWithoutAttrs: () => (/* binding */ createElementWithoutAttrs),
/* harmony export */   createFragment: () => (/* binding */ createFragment),
/* harmony export */   createSVGElement: () => (/* binding */ createSVGElement),
/* harmony export */   createSVGElementWithoutAttrs: () => (/* binding */ createSVGElementWithoutAttrs),
/* harmony export */   createTextNode: () => (/* binding */ createTextNode),
/* harmony export */   insertAfter: () => (/* binding */ insertAfter),
/* harmony export */   registerEvent: () => (/* binding */ registerEvent),
/* harmony export */   removeAttribute: () => (/* binding */ removeAttribute),
/* harmony export */   removeEvent: () => (/* binding */ removeEvent),
/* harmony export */   replaceChildren: () => (/* binding */ replaceChildren),
/* harmony export */   setAttribute: () => (/* binding */ setAttribute),
/* harmony export */   setClassAttribute: () => (/* binding */ setClassAttribute),
/* harmony export */   setStyleAttribute: () => (/* binding */ setStyleAttribute),
/* harmony export */   setText: () => (/* binding */ setText),
/* harmony export */   style2str: () => (/* binding */ style2str)
/* harmony export */ });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "../../jinge/lib/util/type.js");

function setText($element, text) {
  if ((0,_type__WEBPACK_IMPORTED_MODULE_0__.isObject)(text)) {
    text = JSON.stringify(text);
  }
  $element.textContent = text;
}
function createTextNode(text = "") {
  return document.createTextNode((0,_type__WEBPACK_IMPORTED_MODULE_0__.isObject)(text) ? JSON.stringify(text) : text);
}
function createFragment(children) {
  const f = document.createDocumentFragment();
  children?.forEach((n) => {
    f.appendChild((0,_type__WEBPACK_IMPORTED_MODULE_0__.isString)(n) ? document.createTextNode(n) : n);
  });
  return f;
}
function appendChildren($parent, children) {
  $parent.appendChild(
    children.length > 1 ? createFragment(children) : (0,_type__WEBPACK_IMPORTED_MODULE_0__.isString)(children[0]) ? createTextNode(children[0]) : children[0]
  );
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
function class2str(className) {
  if (!className)
    return className;
  if ((0,_type__WEBPACK_IMPORTED_MODULE_0__.isString)(className)) {
    return className.trim();
  }
  if ((0,_type__WEBPACK_IMPORTED_MODULE_0__.isArray)(className)) {
    const clist = [];
    className.forEach((cn) => {
      const seg = class2str(cn);
      seg && clist.push(seg);
    });
    return clist.join(" ").trim();
  }
  return Object.keys(className).filter((k) => !!className[k]).join(" ").trim();
}
function setClassAttribute($ele, className) {
  className = class2str(className);
  if (!className)
    $ele.removeAttribute("class");
  else
    $ele.setAttribute("class", className);
}
const UNITLESS = /* @__PURE__ */ new Set([
  "box-flex",
  "box-flex-group",
  "column-count",
  "flex",
  "flex-grow",
  "flex-positive",
  "flex-shrink",
  "flex-negative",
  "font-weight",
  "line-clamp",
  "line-height",
  "opacity",
  "order",
  "orphans",
  "tab-size",
  "widows",
  "z-index",
  "zoom",
  "fill-opacity",
  "stroke-dashoffset",
  "stroke-opacity",
  "stroke-width"
]);
function style2str(style) {
  if (!style)
    return style;
  if ((0,_type__WEBPACK_IMPORTED_MODULE_0__.isString)(style))
    return style.trim();
  if (Array.isArray(style)) {
    const slist = [];
    style.forEach((sty) => {
      const seg = style2str(sty);
      seg && slist.push(seg);
    });
    return slist.join("").trim();
  }
  const segs = [];
  Object.keys(style).forEach((k) => {
    let v = style[k];
    if (!v && v !== 0)
      return;
    k = k.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
    if ((0,_type__WEBPACK_IMPORTED_MODULE_0__.isNumber)(v) && !UNITLESS.has(k)) {
      v = `${v}px`;
    } else {
      v = v.toString();
    }
    segs.push(`${k}:${v};`);
  });
  return segs.join("").trim();
}
function setStyleAttribute($ele, style) {
  style = style2str(style);
  if (!style)
    $ele.removeAttribute("style");
  else
    $ele.setAttribute("style", style);
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
/* harmony export */   addEvent: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.addEvent),
/* harmony export */   appendChildren: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.appendChildren),
/* harmony export */   arrayEqual: () => (/* reexport safe */ _array__WEBPACK_IMPORTED_MODULE_1__.arrayEqual),
/* harmony export */   arrayPushIfNotExist: () => (/* reexport safe */ _array__WEBPACK_IMPORTED_MODULE_1__.arrayPushIfNotExist),
/* harmony export */   arrayRemove: () => (/* reexport safe */ _array__WEBPACK_IMPORTED_MODULE_1__.arrayRemove),
/* harmony export */   class2str: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.class2str),
/* harmony export */   clearImmediate: () => (/* reexport safe */ _setimm__WEBPACK_IMPORTED_MODULE_3__.clearImmediate),
/* harmony export */   createElement: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.createElement),
/* harmony export */   createElementWithChild: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.createElementWithChild),
/* harmony export */   createElementWithoutAttrs: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.createElementWithoutAttrs),
/* harmony export */   createFragment: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.createFragment),
/* harmony export */   createSVGElement: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.createSVGElement),
/* harmony export */   createSVGElementWithoutAttrs: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.createSVGElementWithoutAttrs),
/* harmony export */   createTextNode: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.createTextNode),
/* harmony export */   disableWarning: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_2__.disableWarning),
/* harmony export */   insertAfter: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.insertAfter),
/* harmony export */   isArray: () => (/* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_0__.isArray),
/* harmony export */   isBoolean: () => (/* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_0__.isBoolean),
/* harmony export */   isFunction: () => (/* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_0__.isFunction),
/* harmony export */   isNumber: () => (/* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_0__.isNumber),
/* harmony export */   isObject: () => (/* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_0__.isObject),
/* harmony export */   isPromise: () => (/* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_0__.isPromise),
/* harmony export */   isString: () => (/* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_0__.isString),
/* harmony export */   isUndefined: () => (/* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_0__.isUndefined),
/* harmony export */   registerEvent: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.registerEvent),
/* harmony export */   removeAttribute: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.removeAttribute),
/* harmony export */   removeEvent: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.removeEvent),
/* harmony export */   replaceChildren: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.replaceChildren),
/* harmony export */   setAttribute: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.setAttribute),
/* harmony export */   setClassAttribute: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.setClassAttribute),
/* harmony export */   setImmediate: () => (/* reexport safe */ _setimm__WEBPACK_IMPORTED_MODULE_3__.setImmediate),
/* harmony export */   setStyleAttribute: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.setStyleAttribute),
/* harmony export */   setText: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.setText),
/* harmony export */   style2str: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.style2str),
/* harmony export */   typeOf: () => (/* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_0__.typeOf),
/* harmony export */   uid: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_2__.uid),
/* harmony export */   warn: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_2__.warn)
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
/* harmony export */   clearImmediate: () => (/* binding */ clearImmediate),
/* harmony export */   setImmediate: () => (/* binding */ setImmediate)
/* harmony export */ });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "../../jinge/lib/util/type.js");

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
  win.addEventListener(
    "message",
    (event) => {
      if (event.source === window && (0,_type__WEBPACK_IMPORTED_MODULE_0__.isString)(event.data) && event.data.startsWith(messagePrefix)) {
        runIfPresent(Number(event.data.slice(messagePrefix.length)));
      }
    },
    false
  );
  registerImmediate = function(handle) {
    win.postMessage(messagePrefix + handle, "*");
  };
}
const setImmediate = win.setImmediate || setImmediateFallback;
const clearImmediate = win.clearImmediate || clearImmediateFallback;


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
/* harmony export */   isArray: () => (/* binding */ isArray),
/* harmony export */   isBoolean: () => (/* binding */ isBoolean),
/* harmony export */   isFunction: () => (/* binding */ isFunction),
/* harmony export */   isNumber: () => (/* binding */ isNumber),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   isPromise: () => (/* binding */ isPromise),
/* harmony export */   isString: () => (/* binding */ isString),
/* harmony export */   isUndefined: () => (/* binding */ isUndefined),
/* harmony export */   typeOf: () => (/* binding */ typeOf)
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

/***/ "../../jinge/lib/vm/common.js":
/*!************************************!*\
  !*** ../../jinge/lib/vm/common.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$: () => (/* binding */ $$),
/* harmony export */   addParent: () => (/* binding */ addParent),
/* harmony export */   getPropertyName: () => (/* binding */ getPropertyName),
/* harmony export */   isInnerObj: () => (/* binding */ isInnerObj),
/* harmony export */   isPublicProperty: () => (/* binding */ isPublicProperty),
/* harmony export */   isViewModel: () => (/* binding */ isViewModel),
/* harmony export */   parsePropertyPath: () => (/* binding */ parsePropertyPath),
/* harmony export */   removeParent: () => (/* binding */ removeParent),
/* harmony export */   shiftParent: () => (/* binding */ shiftParent)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge/lib/util/index.js");

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

/***/ "../../jinge/lib/vm/core.js":
/*!**********************************!*\
  !*** ../../jinge/lib/vm/core.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewModelCoreImpl: () => (/* binding */ ViewModelCoreImpl)
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

/***/ "../../jinge/lib/vm/index.js":
/*!***********************************!*\
  !*** ../../jinge/lib/vm/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.$$),
/* harmony export */   ViewModelCoreImpl: () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.ViewModelCoreImpl),
/* harmony export */   addParent: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.addParent),
/* harmony export */   createAttributes: () => (/* reexport safe */ _proxy__WEBPACK_IMPORTED_MODULE_4__.createAttributes),
/* harmony export */   createComponent: () => (/* reexport safe */ _proxy__WEBPACK_IMPORTED_MODULE_4__.createComponent),
/* harmony export */   createViewModel: () => (/* reexport safe */ _proxy__WEBPACK_IMPORTED_MODULE_4__.createViewModel),
/* harmony export */   deleteNode: () => (/* reexport safe */ _node__WEBPACK_IMPORTED_MODULE_2__.deleteNode),
/* harmony export */   getPropertyName: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.getPropertyName),
/* harmony export */   handleCancel: () => (/* reexport safe */ _notify__WEBPACK_IMPORTED_MODULE_3__.handleCancel),
/* harmony export */   handleOnce: () => (/* reexport safe */ _notify__WEBPACK_IMPORTED_MODULE_3__.handleOnce),
/* harmony export */   isInnerObj: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.isInnerObj),
/* harmony export */   isPublicProperty: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.isPublicProperty),
/* harmony export */   isViewModel: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.isViewModel),
/* harmony export */   loopClearNode: () => (/* reexport safe */ _node__WEBPACK_IMPORTED_MODULE_2__.loopClearNode),
/* harmony export */   loopCreateNode: () => (/* reexport safe */ _node__WEBPACK_IMPORTED_MODULE_2__.loopCreateNode),
/* harmony export */   loopGetNode: () => (/* reexport safe */ _node__WEBPACK_IMPORTED_MODULE_2__.loopGetNode),
/* harmony export */   loopHandle: () => (/* reexport safe */ _notify__WEBPACK_IMPORTED_MODULE_3__.loopHandle),
/* harmony export */   loopNotify: () => (/* reexport safe */ _notify__WEBPACK_IMPORTED_MODULE_3__.loopNotify),
/* harmony export */   parsePropertyPath: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.parsePropertyPath),
/* harmony export */   removeParent: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.removeParent),
/* harmony export */   shiftParent: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.shiftParent),
/* harmony export */   unwatch: () => (/* reexport safe */ _proxy__WEBPACK_IMPORTED_MODULE_4__.unwatch),
/* harmony export */   vm: () => (/* reexport safe */ _proxy__WEBPACK_IMPORTED_MODULE_4__.vm),
/* harmony export */   watch: () => (/* reexport safe */ _proxy__WEBPACK_IMPORTED_MODULE_4__.watch)
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
/* harmony export */   deleteNode: () => (/* binding */ deleteNode),
/* harmony export */   loopClearNode: () => (/* binding */ loopClearNode),
/* harmony export */   loopCreateNode: () => (/* binding */ loopCreateNode),
/* harmony export */   loopGetNode: () => (/* binding */ loopGetNode)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "../../jinge/lib/vm/common.js");
/* harmony import */ var _notify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notify */ "../../jinge/lib/vm/notify.js");


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

/***/ "../../jinge/lib/vm/notify.js":
/*!************************************!*\
  !*** ../../jinge/lib/vm/notify.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleCancel: () => (/* binding */ handleCancel),
/* harmony export */   handleOnce: () => (/* binding */ handleOnce),
/* harmony export */   loopHandle: () => (/* binding */ loopHandle),
/* harmony export */   loopNotify: () => (/* binding */ loopNotify)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge/lib/util/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "../../jinge/lib/vm/common.js");


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

/***/ "../../jinge/lib/vm/proxy.js":
/*!***********************************!*\
  !*** ../../jinge/lib/vm/proxy.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAttributes: () => (/* binding */ createAttributes),
/* harmony export */   createComponent: () => (/* binding */ createComponent),
/* harmony export */   createViewModel: () => (/* binding */ createViewModel),
/* harmony export */   unwatch: () => (/* binding */ unwatch),
/* harmony export */   vm: () => (/* binding */ vm),
/* harmony export */   watch: () => (/* binding */ watch)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge/lib/util/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "../../jinge/lib/vm/common.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core */ "../../jinge/lib/vm/core.js");



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
    (0,_util__WEBPACK_IMPORTED_MODULE_0__.warn)(
      `call setter "${prop.toString()}" after destroied, resources such as setInterval maybe not released before destroy. component:`,
      target
    );
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
  return vmCore.proxy = new Proxy(
    target,
    isArr ? ArrayProxyHandler : (0,_util__WEBPACK_IMPORTED_MODULE_0__.isPromise)(target) ? PromiseProxyHandler : ObjectProxyHandler
  );
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/* harmony import */ var _app_c__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.c */ "./app.c.js");



(0,jinge__WEBPACK_IMPORTED_MODULE_0__.bootstrap)(_app_c__WEBPACK_IMPORTED_MODULE_1__["default"], document.getElementById('root-app'));

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map