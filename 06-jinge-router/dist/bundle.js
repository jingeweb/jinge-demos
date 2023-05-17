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
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge/lib/index.js");
/* harmony import */ var _app_c_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.c.html */ "./app.c.html");
/* harmony import */ var _components_footer_a_c__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/footer_a.c */ "./components/footer_a.c.js");
/* harmony import */ var _components_footer_b_c__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer_b.c */ "./components/footer_b.c.js");
/* harmony import */ var _components_hello_2_c__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/hello_2.c */ "./components/hello_2.c.js");
/* harmony import */ var _components_hello_1_c__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/hello_1.c */ "./components/hello_1.c.js");
/* harmony import */ var _components_about_c__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/about.c */ "./components/about.c.js");
/* harmony import */ var _components_hello_c__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/hello.c */ "./components/hello.c.js");
/* harmony import */ var _components_people_c__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/people.c */ "./components/people.c.js");
/* harmony import */ var _components_person_c__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/person.c */ "./components/person.c.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./api */ "./api.js");















const routes = [{
  path: '/hello',
  redirect: {
    name: 'hello-1',
    query: { a: 10 }
  },
  components: {
    default: _components_hello_c__WEBPACK_IMPORTED_MODULE_7__["default"],
    footer: _components_footer_a_c__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  children: [{
    path: 'a',
    name: 'hello-1',
    component: _components_hello_1_c__WEBPACK_IMPORTED_MODULE_5__["default"]
  }, {
    path: 'b',
    name: 'hello-2',
    component: _components_hello_2_c__WEBPACK_IMPORTED_MODULE_4__["default"]
  }]
}, {
  path: '/about',
  components: {
    default: _components_about_c__WEBPACK_IMPORTED_MODULE_6__["default"],
    footer: _components_footer_b_c__WEBPACK_IMPORTED_MODULE_3__["default"]
  }
}, {
  path: '/people',
  components: {
    default: _components_people_c__WEBPACK_IMPORTED_MODULE_8__["default"],
    footer: _components_footer_a_c__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  resolves: {
    people: () => (0,_api__WEBPACK_IMPORTED_MODULE_10__.getAllPersons)().then(result => (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)(result))
  },
  children: [{
    name: 'person',
    path: '/:personId',
    component: (params, query, resolves) => {
      console.log('async get component:', params, query, resolves);
      /**
       * params: { personId: xx }
       * query: browser location.search
       * resolves: { people, someFn, someFnPromise, person }
       */
      return new Promise(res => setTimeout(() => {
        res(_components_person_c__WEBPACK_IMPORTED_MODULE_9__["default"]);
      }, 2000));
    },
    resolves: {
      someConst: 32,
      someFn: () => 'hello2',
      someFnPromise: () => new Promise(res => setTimeout(() => res('hello3'), 1000)),
      person: (params, query, parentResolves) => {
        console.log('inherited resove people:', parentResolves.people);
        const id = params.personId;
        return (0,_api__WEBPACK_IMPORTED_MODULE_10__.getPersonById)(id).then(result => result);
      }
    }
  }]
}, {
  path: '/dynamic',
  components: {
    // async default() {
    //   return import()
    // },
    async default() {
      return (await __webpack_require__.e(/*! import() */ "components_dynamic_c_js").then(__webpack_require__.bind(__webpack_require__, /*! ./components/dynamic.c */ "./components/dynamic.c.js"))).default;
    },
    async footer() {
      return (await __webpack_require__.e(/*! import() */ "components_footer_c_c_js").then(__webpack_require__.bind(__webpack_require__, /*! ./components/footer_c.c */ "./components/footer_c.c.js"))).default;
    }
  }
}, {
  path: '(.*)',
  redirect: '/hello'
}];

class App extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  static get template() {
    return _app_c_html__WEBPACK_IMPORTED_MODULE_1__["default"];
  }
  constructor(args) {
    super(args);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    _jg0._routes = routes;
    _jg0.newTab = false;
  }
}



/***/ }),

/***/ "./components/about.c.js":
/*!*******************************!*\
  !*** ./components/about.c.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./components/footer_a.c.js":
/*!**********************************!*\
  !*** ./components/footer_a.c.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FooterA)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge/lib/index.js");
/* harmony import */ var _footer_a_c_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer_a.c.html */ "./components/footer_a.c.html");


class FooterA extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  static get template() {
    return _footer_a_c_html__WEBPACK_IMPORTED_MODULE_1__["default"];
  }
}

/***/ }),

/***/ "./components/footer_b.c.js":
/*!**********************************!*\
  !*** ./components/footer_b.c.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FooterB)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge/lib/index.js");
/* harmony import */ var _footer_b_c_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer_b.c.html */ "./components/footer_b.c.html");


class FooterB extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  static get template() {
    return _footer_b_c_html__WEBPACK_IMPORTED_MODULE_1__["default"];
  }
}

/***/ }),

/***/ "./components/hello.c.js":
/*!*******************************!*\
  !*** ./components/hello.c.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  __routeShouldLeave() {
    return confirm('确认要退出？');
  }
  __beforeDestroy() {
    console.log('Hello component will be destroy');
  }
}

/***/ }),

/***/ "./components/hello_1.c.js":
/*!*********************************!*\
  !*** ./components/hello_1.c.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HelloA)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge/lib/index.js");
/* harmony import */ var _hello_1_c_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hello_1.c.html */ "./components/hello_1.c.html");


class HelloA extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  static get template() {
    return _hello_1_c_html__WEBPACK_IMPORTED_MODULE_1__["default"];
  }

  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;


    _jg0._oqc = _jg0._onQueryChange.bind(_jg0);
    _jg0._query = _jg0.__getContext('router').query;
    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.watch)(_jg0._query, '*', _jg0._oqc);
    _jg0._onQueryChange();
  }
  __beforeDestroy() {
    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.unwatch)(this._query, '*', this._oqc);
  }
  _onQueryChange() {
    this.qa = this._query.a;
  }
}

/***/ }),

/***/ "./components/hello_2.c.js":
/*!*********************************!*\
  !*** ./components/hello_2.c.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HelloB)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge/lib/index.js");
/* harmony import */ var _hello_2_c_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hello_2.c.html */ "./components/hello_2.c.html");


class HelloB extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  static get template() {
    return _hello_2_c_html__WEBPACK_IMPORTED_MODULE_1__["default"];
  }
}

/***/ }),

/***/ "./components/people.c.js":
/*!********************************!*\
  !*** ./components/people.c.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    _jg0._person = attrs.person;
  }
  __beforeDestroy() {
    console.log(`person: ${this._person.id} will be destroy.`);
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
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge/lib/index.js");
/* harmony import */ var jinge_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-router */ "../../jinge-router/lib/index.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {  
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
      "h2",
      `Jinge Router`
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })(),
  ...(() => {
    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
        debugName: "attrs_of_<router>",
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
                          debugName: "attrs_of_<router-link>",
                          context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                        },
                        target: undefined,
                        class: `xx`,
                        style: `margin-right: 8px;`,
                        text: `Hello`,
                        to: `/hello`,
                        active: `active`
                      });
                      const fn_0 = () => {
                        attrs.target = vm_0.newTab ? '_black' : '_self';
                      };
                      fn_0();
                      vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["newTab"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                      const el = jinge_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkComponent.create(attrs);
                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                      return el.__render();
                    })(),
                    ...(() => {
                      const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                        [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                          debugName: "attrs_of_<router-link>",
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
                        to: `/about`,
                        active: `active`
                      });
                      const fn_0 = () => {
                        attrs.target = vm_0.newTab ? '_blank' : '_self';
                      };
                      fn_0();
                      vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["newTab"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                      const el = jinge_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkComponent.create(attrs);
                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                      return el.__render();
                    })(),
                    ...(() => {
                      const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                        [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                          debugName: "attrs_of_<router-link>",
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
                        to: `/people`,
                        active: `active`
                      });
                      const fn_0 = () => {
                        attrs.target = vm_0.newTab ? '_blank' : '_self';
                      };
                      fn_0();
                      vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["newTab"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                      const el = jinge_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkComponent.create(attrs);
                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                      return el.__render();
                    })(),
                    ...(() => {
                      const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                        [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                          debugName: "attrs_of_<router-link>",
                          context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                        },
                        style: `margin-left: 8px;`,
                        text: `Person-2`,
                        to: (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)({name: 'person', params: {personId: '002'}}),
                        active: `active`
                      });
                      const el = jinge_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkComponent.create(attrs);
                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                      return el.__render();
                    })(),
                    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                      "a",
                      {
                        style: `margin-left: 20px;`,
                        href: `#/about`
                      },
                      `test`
                    ),
                    ...(() => {
                      const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                        [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                          debugName: "attrs_of_<router-link>",
                          context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                        },
                        to: `/dynamic`,
                        text: `Dynamic Import`
                      });
                      const el = jinge_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkComponent.create(attrs);
                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                      return el.__render();
                    })()
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
                          debugName: "attrs_of_<router-view>",
                          context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                          slots: {
                            'default': function(component) {  
                              return [
                              (() => {
                                const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                                  "div",
                                  `loading...`
                                );
                                component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                return el;
                              })()
                              ];
                            },
                            'error': function(component) {  
                              const vm_1 = component;
                              return [
                              (() => {
                                const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                                  "div",
                                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                                    "p",
                                    `Failed to load!`
                                  ),
                                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
                                    "p",
                                    (() => {
                                      const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createTextNode)();
                                      const fn_0 = () => {
                                        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setText)(el, vm_1.error);
                                      };
                                      fn_0();
                                      vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["error"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                                      return el;
                                    })()
                                  )
                                );
                                component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
                                return el;
                              })()
                              ];
                            }
                          }
                        },
                      });
                      const el = jinge_router__WEBPACK_IMPORTED_MODULE_1__.RouterViewComponent.create(attrs);
                      component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
                      return el.__render();
                    })()
                  ),
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    "div",
                    {
                      class: `footer`
                    },
                    ...(() => {
                      const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
                        [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
                          debugName: "attrs_of_<router-view>",
                          context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                        },
                        name: `footer`
                      });
                      const el = jinge_router__WEBPACK_IMPORTED_MODULE_1__.RouterViewComponent.create(attrs);
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
      routes: vm_0._routes
    });
    const el = jinge_router__WEBPACK_IMPORTED_MODULE_1__.RouterComponent.create(attrs);
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

/***/ "./components/footer_a.c.html":
/*!************************************!*\
  !*** ./components/footer_a.c.html ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
      "p",
      `Footer-A`
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ }),

/***/ "./components/footer_b.c.html":
/*!************************************!*\
  !*** ./components/footer_b.c.html ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
      "p",
      `Footer-B`
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge/lib/index.js");
/* harmony import */ var jinge_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-router */ "../../jinge-router/lib/index.js");


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
  })(),
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
      "div",
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<router-link>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
          },
          text: `hello-1`,
          to: (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)({name: 'hello-1', query: {a: 10}}),
          active: `active`
        });
        const el = jinge_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkComponent.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return el.__render();
      })(),
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<router-link>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
          },
          text: `hello-1-q`,
          to: (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)({name: 'hello-1', query: {a: 30}}),
          active: `active`
        });
        const el = jinge_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkComponent.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return el.__render();
      })(),
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<router-link>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
          },
          text: `hello-2`,
          to: (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)({name: 'hello-2', query: {b: 20}}),
          active: `active`
        });
        const el = jinge_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkComponent.create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].nonRootCompNodes.push(el);
        return el.__render();
      })()
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })(),
  ...(() => {
    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
        debugName: "attrs_of_<router-view>",
        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
      },
    });
    const el = jinge_router__WEBPACK_IMPORTED_MODULE_1__.RouterViewComponent.create(attrs);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el.__render();
  })()
  ];
}

/***/ }),

/***/ "./components/hello_1.c.html":
/*!***********************************!*\
  !*** ./components/hello_1.c.html ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
      "p",
      `Hello-A`
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })(),
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
      "p",
      (() => {
        const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createTextNode)();
        const fn_0 = () => {
          (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setText)(el, `Query: a=${vm_0.qa}`);
        };
        fn_0();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["qa"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
        return el;
      })()
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ }),

/***/ "./components/hello_2.c.html":
/*!***********************************!*\
  !*** ./components/hello_2.c.html ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
      "p",
      `Hello-B`
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge/lib/index.js");
/* harmony import */ var jinge_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-router */ "../../jinge-router/lib/index.js");



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
                              debugName: "attrs_of_<router-link>",
                              context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
                            },
                            text: undefined,
                            to: undefined,
                            active: `active`
                          });
                          const fn_0 = () => {
                            attrs.text = vm_1.each?.name;
                          };
                          fn_0();
                          vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["each","name"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                          const fn_1 = () => {
                            attrs.to = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)({name: 'person', params: {personId: vm_1.each?.id}});
                          };
                          fn_1();
                          vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch(["each","id"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__.$$]);
                          const el = jinge_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkComponent.create(attrs);
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
              debugName: "attrs_of_<router-view>",
              context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
              slots: {
                'default': function(component) {  
                  return [
                  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.textRenderFn)(component, `loading...`)
                  ];
                }
              }
            },
          });
          const el = jinge_router__WEBPACK_IMPORTED_MODULE_1__.RouterViewComponent.create(attrs);
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge/lib/index.js");
/* harmony import */ var jinge_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-router */ "../../jinge-router/lib/index.js");


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
        `Name: ${vm_0._person?.name}`
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
        "div",
        `Id: ${vm_0._person?.id}`
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
        "div",
        `Company: ${vm_0._person?.company}`
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
        "div",
        `Email: ${vm_0._person?.email}`
      ),
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
        "div",
        `Address: ${vm_0._person?.address}`
      ),
      ...(() => {
        const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
          [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
            debugName: "attrs_of_<router-link>",
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
          to: `/people`
        });
        const el = jinge_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkComponent.create(attrs);
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

/***/ "./api.js":
/*!****************!*\
  !*** ./api.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllPersons": () => (/* binding */ getAllPersons),
/* harmony export */   "getPersonById": () => (/* binding */ getPersonById)
/* harmony export */ });
function getAllPersons() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // if (Math.random() < 0.5) {
      //   reject(new Error('test error!'));
      // } else {
        resolve([{id: '001', name: 'xiaoge_001'}, {id: '002', name: 'xiaoge_002'}]);
      // }
    }, 200);
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

/***/ "../../jinge-router/lib/common.js":
/*!****************************************!*\
  !*** ../../jinge-router/lib/common.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VIEW_NAME_PATH": () => (/* binding */ VIEW_NAME_PATH),
/* harmony export */   "cloneParamsOrQuery": () => (/* binding */ cloneParamsOrQuery),
/* harmony export */   "encodeParamsOrQuery": () => (/* binding */ encodeParamsOrQuery),
/* harmony export */   "isParamsOrQuerySameOrInclude": () => (/* binding */ isParamsOrQuerySameOrInclude)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge/lib/index.js");

const VIEW_NAME_PATH = Symbol("#viewNamePath");
function isParamsOrQuerySameOrInclude(src, dst, strict = true) {
  if (!src)
    return !dst;
  if (!dst)
    return !src;
  let kc = 0;
  for (const k in src) {
    const sv = src[k];
    const dv = dst[k];
    if (strict) {
      if (sv !== dv)
        return false;
    } else {
      if ((0,jinge__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(dv) || dv === null) {
        if (!(0,jinge__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(sv) && sv !== null) {
          return false;
        }
      } else if (sv !== dv) {
        return false;
      }
    }
    kc++;
  }
  if (strict && kc !== Object.keys(dst).length) {
    return false;
  }
  return true;
}
function cloneParamsOrQuery(v) {
  return Object.fromEntries(
    Object.keys(v).map((k) => {
      return [k, v[k]];
    })
  );
}
function encodeParamsOrQuery(v) {
  if (!(0,jinge__WEBPACK_IMPORTED_MODULE_0__.isObject)(v))
    return "";
  return Object.keys(v).map((k) => {
    return encodeURIComponent(k) + "=" + encodeURIComponent(v[k]);
  }).join("&");
}


//# sourceMappingURL=common.js.map

/***/ }),

/***/ "../../jinge-router/lib/components/index.js":
/*!**************************************************!*\
  !*** ../../jinge-router/lib/components/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouterComponent": () => (/* reexport safe */ _router__WEBPACK_IMPORTED_MODULE_2__.RouterComponent),
/* harmony export */   "RouterLinkComponent": () => (/* reexport safe */ _link__WEBPACK_IMPORTED_MODULE_1__.RouterLinkComponent),
/* harmony export */   "RouterViewComponent": () => (/* reexport safe */ _view__WEBPACK_IMPORTED_MODULE_0__.RouterViewComponent)
/* harmony export */ });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "../../jinge-router/lib/components/view.js");
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link */ "../../jinge-router/lib/components/link.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ "../../jinge-router/lib/components/router.js");




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-router/lib/components/link.js":
/*!*************************************************!*\
  !*** ../../jinge-router/lib/components/link.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouterLinkComponent": () => (/* binding */ RouterLinkComponent)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge/lib/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common */ "../../jinge-router/lib/common.js");
/* harmony import */ var _link_tpl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./link.tpl.js */ "../../jinge-router/lib/components/link.tpl.js");



class RouterLinkComponent extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;const f1_jg0402 = () => {
    _jg0.to = attrs.to; }; f1_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("to", f1_jg0402);const f2_jg0402 = () => {
    _jg0.text = attrs.text || ""; }; f2_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("text", f2_jg0402);const f3_jg0402 = () => {
    _jg0.target = attrs.target || "_self"; }; f3_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("target", f3_jg0402);const f4_jg0402 = () => {
    _jg0.replace = !!attrs.replace; }; f4_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("replace", f4_jg0402);const f5_jg0402 = () => {
    _jg0.className = attrs.class; }; f5_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("class", f5_jg0402);const f6_jg0402 = () => {
    _jg0.style = attrs.style; }; f6_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("style", f6_jg0402);const f7_jg0402 = () => {
    _jg0.active = attrs.active; }; f7_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("active", f7_jg0402);
    _jg0._router = _jg0.__getContext("router");
    if (!_jg0._router) {
      throw new Error('Context named "router" not found.');
    }
    _jg0._tag = attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.__].slots?.default ? 0 : -1;
    _jg0._el = null;
    _jg0._qw = false;
    _jg0._clh = _jg0._onClick.bind(_jg0);
    _jg0._rch = _jg0._onRc.bind(_jg0);
    _jg0._rcd = null;
  }
  /**
   * @internal
   *
   * handle router changed event/guard
   */
  _onRc() {
    this._upA();
  }
  get target() {
    return this._target;
  }
  set target(v) {
    if (this._target === v)
      return;
    this._target = v;
    this._upT();
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
    this.__updateIfNeed(this._upA);
  }
  get to() {
    return this._to;
  }
  set to(v) {
    if (this._to === v)
      return;
    this._to = v;
    this.__updateIfNeed(this._upHa);
  }
  /**
   * @internal
   */
  _onClick(e) {
    if (e.defaultPrevented || e.metaKey || e.ctrlKey) {
      return;
    }
    if (this._tag <= 0) {
      e.preventDefault();
    }
    this._router.go(this._to, {
      target: this.target,
      replace: this.replace
    });
  }
  __afterRender() {
    const el = this.__firstDOM;
    if (this._tag >= 0) {
      this._tag = el.tagName === "A" ? 0 : 1;
    }
    this._el = el;
    this._upT();
    this._upHa();
    this._rcd = this._router.afterEach(() => {
      this._onRc();
    });
    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.addEvent)(el, "click", this._clh);
  }
  __beforeDestroy() {
    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.removeEvent)(this._el, "click", this._clh);
    this._rcd();
    if (this._qw) {
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.unwatch)(this._router.__info, "query.*", this._rch);
    }
  }
  /**
   * @internal
   *
   * update target attribute of link
   */
  _upT() {
    if (this._tag <= 0) {
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setAttribute)(this._el, "target", this.target);
    }
  }
  /**
   * @internal
   *
   * update href and active class
   */
  _upHa() {
    this._upH();
    this._upA();
  }
  /**
   * @internal
   *
   * update href attribute of link
   */
  _upH() {
    if (this._tag <= 0) {
      let href;
      if (!this._to || !(href = this._router.href(this._to))) {
        this._el.removeAttribute("href");
      } else {
        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setAttribute)(this._el, "href", href);
      }
    }
  }
  /**
   * @internal
   *
   * update active class of link
   */
  _upA() {
    let isActive = this._to && this._router.includes(this._to);
    if (isActive && (0,jinge__WEBPACK_IMPORTED_MODULE_0__.isObject)(this._to) && this._to.query) {
      if (!this._qw) {
        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.watch)(this._router.__info, "query.*", this._rch);
        this._qw = true;
      }
      isActive = (0,_common__WEBPACK_IMPORTED_MODULE_1__.isParamsOrQuerySameOrInclude)(this._to.query, this._router.__info?.query);
    } else if (this._qw) {
      this._qw = false;
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.unwatch)(this._router.__info, "query.*", this._rch);
    }
    if (this.isActive === isActive) {
      return;
    }
    this.isActive = isActive;
    if (!this._active || this._tag < 0) {
      return;
    }
    if (this.isActive) {
      this._el.classList.add(this._active);
    } else {
      this._el.classList.remove(this._active);
    }
  }
}
RouterLinkComponent.template = _link_tpl_js__WEBPACK_IMPORTED_MODULE_2__["default"];


//# sourceMappingURL=link.js.map

/***/ }),

/***/ "../../jinge-router/lib/components/link.tpl.js":
/*!*****************************************************!*\
  !*** ../../jinge-router/lib/components/link.tpl.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "../../jinge-router/lib/components/redirect.js":
/*!*****************************************************!*\
  !*** ../../jinge-router/lib/components/redirect.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouterParentComponent": () => (/* binding */ RouterParentComponent)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge/lib/index.js");
/* harmony import */ var _redirect_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redirect.tpl.js */ "../../jinge-router/lib/components/redirect.tpl.js");


class RouterParentComponent extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
}
RouterParentComponent.template = _redirect_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"];


//# sourceMappingURL=redirect.js.map

/***/ }),

/***/ "../../jinge-router/lib/components/redirect.tpl.js":
/*!*********************************************************!*\
  !*** ../../jinge-router/lib/components/redirect.tpl.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge/lib/index.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "../../jinge-router/lib/components/view.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {  
  const vm_0 = component;
  return [
  ...(() => {
    const attrs = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context,
      },
      doc: `after`
    });
    const el = _view__WEBPACK_IMPORTED_MODULE_1__.RouterViewComponent.create(attrs);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el.__render();
  })()
  ];
}

/***/ }),

/***/ "../../jinge-router/lib/components/router.js":
/*!***************************************************!*\
  !*** ../../jinge-router/lib/components/router.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouterComponent": () => (/* binding */ RouterComponent)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge/lib/index.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router */ "../../jinge-router/lib/router.js");


class RouterComponent extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs) {
    let router;
    if (attrs.router instanceof _router__WEBPACK_IMPORTED_MODULE_1__.Router) {
      router = attrs.router;
    } else if (attrs.router === "hash") {
      router = new _router__WEBPACK_IMPORTED_MODULE_1__.Router({
        mode: "hash"
      });
    } else {
      router = new _router__WEBPACK_IMPORTED_MODULE_1__.Router({
        mode: "html5"
      });
    }
    attrs.routes?.forEach((rd) => {
      router.register(rd);
    });
    super(attrs);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    _jg0._router = router;const f5_jg0402 = () => {
    _jg0.baseHref = attrs.baseHref || "/"; }; f5_jg0402(); attrs[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].__watch("baseHref", f5_jg0402);
    _jg0.__setContext("router", router);
    _jg0.__notify("load", _jg0._router);
  }
  get baseHref() {
    return this._router.baseHref;
  }
  set baseHref(v) {
    this._router.baseHref = v;
  }
  __afterRender() {
    this._router.start();
  }
}


//# sourceMappingURL=router.js.map

/***/ }),

/***/ "../../jinge-router/lib/components/view.js":
/*!*************************************************!*\
  !*** ../../jinge-router/lib/components/view.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouterViewComponent": () => (/* binding */ RouterViewComponent)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge/lib/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common */ "../../jinge-router/lib/common.js");


function createEl(renderFn, context) {
  const el = new jinge__WEBPACK_IMPORTED_MODULE_0__.Component(
    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
      [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
        context,
        slots: {
          default: renderFn
        }
      }
    })
  );
  return el[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
}
class RouterViewComponent extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(attrs2) {
    super(attrs2);const _jg0 = this[jinge__WEBPACK_IMPORTED_MODULE_0__.$$].proxy;
    _jg0._name = attrs2.name || "default";
    _jg0._doc = attrs2.doc || "before";
    _jg0._router = _jg0.__getContext("router");
    if (!_jg0._router) {
      throw new Error('Context named "router" not found.');
    }
    const parentNamePath = _jg0.__getContext(_common__WEBPACK_IMPORTED_MODULE_1__.VIEW_NAME_PATH);
    _jg0._path = [...parentNamePath || [], _jg0._name];
    _jg0.__setContext(_common__WEBPACK_IMPORTED_MODULE_1__.VIEW_NAME_PATH, _jg0._path, true);
    _jg0.resolving = false;
  }
  __afterRender() {
    this._router.__regView(this._path, this);
  }
  __render() {
    const el = document.createComment("router-view");
    this[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return this[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes;
  }
  /**
   * @internal
   */
  async _shouldUpdateView(from, to) {
    const el = this[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes[0];
    if (!(0,jinge__WEBPACK_IMPORTED_MODULE_0__.isComponent)(el)) {
      return true;
    }
    if ((0,jinge__WEBPACK_IMPORTED_MODULE_0__.isFunction)(el.__routeShouldLeave)) {
      return await el.__routeShouldLeave(from, to);
    }
    return true;
  }
  /**
   * @internal
   */
  _doUpdateView(err, current, routeMatchItem) {
    const roots = this[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes;
    const oldEl = roots[0];
    const oldIsComp = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.isComponent)(oldEl);
    const $el = oldIsComp ? oldEl.__firstDOM : oldEl;
    const $pa = $el.parentNode;
    const removeOldEl = () => {
      if (oldIsComp) {
        oldEl.__destroy(true);
      } else {
        $pa.removeChild($el);
      }
    };
    if (err) {
      err = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.isObject)(err) ? err.message || err.toString() : err;
      const errRenderFn = this[jinge__WEBPACK_IMPORTED_MODULE_0__.__].slots?.error;
      if (!errRenderFn) {
        const newEl3 = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", { style: "color: red;" }, err);
        $pa.insertBefore(newEl3, $el);
        removeOldEl();
        roots[0] = newEl3;
        return;
      }
      const newEl2 = createEl(errRenderFn, this[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context);
      newEl2.error = err;
      const ns2 = newEl2.__render();
      $pa.insertBefore(ns2.length > 1 ? (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createFragment)(ns2) : ns2[0], $el);
      removeOldEl();
      roots[0] = newEl2;
      newEl2.__handleAfterRender();
      return;
    }
    let CompClazz = null;
    if (routeMatchItem) {
      CompClazz = routeMatchItem.route.components[this._name];
      if (!CompClazz) {
        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.warn)(`Component of <router-view/> named "${this._name}" not provided.`);
      }
    }
    if (!CompClazz) {
      const newEl2 = document.createComment("router-view");
      $pa.insertBefore(newEl2, $el);
      removeOldEl();
      roots[0] = newEl2;
      return;
    }
    const newEl = CompClazz.create(
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.attrs)({
        ...routeMatchItem.resolves,
        [jinge__WEBPACK_IMPORTED_MODULE_0__.__]: {
          context: this[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context
        }
      })
    );
    const ns = newEl.__render();
    $pa.insertBefore(ns.length > 1 ? (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createFragment)(ns) : ns[0], $el);
    removeOldEl();
    roots[0] = newEl;
    newEl.__handleAfterRender();
  }
  /**
   * @internal
   */
  _prepareUpdateView() {
    if (this._doc !== "before") {
      return;
    }
    const roots = this[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes;
    const oldEl = roots[0];
    const oldIsComp = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.isComponent)(oldEl);
    const $el = oldIsComp ? oldEl.__firstDOM : oldEl;
    const $pa = $el.parentNode;
    const $cursor = document.createComment("--");
    $pa.insertBefore($cursor, $el);
    if (oldIsComp) {
      oldEl.__destroy(true);
    } else {
      $pa.removeChild($el);
    }
    const loadingRenderFn = this[jinge__WEBPACK_IMPORTED_MODULE_0__.__].slots?.default;
    if (!loadingRenderFn) {
      roots[0] = $cursor;
      return;
    }
    const loadingEl = createEl(loadingRenderFn, this[jinge__WEBPACK_IMPORTED_MODULE_0__.__].context);
    const ns = loadingEl.__render();
    $pa.insertBefore(ns.length > 1 ? (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createFragment)(ns) : ns[0], $cursor);
    $pa.removeChild($cursor);
    roots[0] = loadingEl;
  }
  __beforeDestroy() {
    this._router.__deregView(this._path);
  }
}


//# sourceMappingURL=view.js.map

/***/ }),

/***/ "../../jinge-router/lib/index.js":
/*!***************************************!*\
  !*** ../../jinge-router/lib/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Router": () => (/* reexport safe */ _router__WEBPACK_IMPORTED_MODULE_1__.Router),
/* harmony export */   "RouterComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.RouterComponent),
/* harmony export */   "RouterLinkComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.RouterLinkComponent),
/* harmony export */   "RouterViewComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.RouterViewComponent),
/* harmony export */   "VIEW_NAME_PATH": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.VIEW_NAME_PATH),
/* harmony export */   "cloneParamsOrQuery": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.cloneParamsOrQuery),
/* harmony export */   "encodeParamsOrQuery": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.encodeParamsOrQuery),
/* harmony export */   "isParamsOrQuerySameOrInclude": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.isParamsOrQuerySameOrInclude)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "../../jinge-router/lib/common.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router */ "../../jinge-router/lib/router.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "../../jinge-router/lib/components/index.js");




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-router/lib/router.js":
/*!****************************************!*\
  !*** ../../jinge-router/lib/router.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Router": () => (/* binding */ Router)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge/lib/index.js");
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path-to-regexp */ "../../jinge-router/node_modules/.pnpm/registry.npmmirror.com+path-to-regexp@6.2.1/node_modules/path-to-regexp/dist.es2015/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "../../jinge-router/lib/common.js");
/* harmony import */ var _components_redirect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/redirect */ "../../jinge-router/lib/components/redirect.js");




function normPath(p) {
  if (!p?.startsWith("/"))
    p = "/" + p;
  return p.replace(/[/\\]+/g, "/");
}
function parseVal(v) {
  if (v === "true") {
    return true;
  } else if (v === "false") {
    return false;
  } else if (/^\d+$/.test(v)) {
    return Number(v);
  } else {
    return v;
  }
}
function parseQuery(search) {
  const segments = search.split("&").map((s) => s.trim()).filter((s) => !!s);
  if (segments.length === 0)
    return {};
  return Object.fromEntries(
    segments.map((seg) => {
      const pair = seg.split("=").map(decodeURIComponent);
      return [pair[0], pair.length <= 1 ? true : parseVal(pair[1])];
    })
  );
}
function addRoute(map, route, container, parent = null) {
  const hasChild = route.children && route.children.length > 0;
  const path = normPath(route.path + (hasChild ? "/" : ""));
  const name = route.name || (parent ? parent.name : "") + route.path;
  if (map.has(name)) {
    throw new Error("duplicated route name: " + name);
  }
  if (hasChild && !route.component && !route.components) {
    route.component = _components_redirect__WEBPACK_IMPORTED_MODULE_2__.RouterParentComponent;
  }
  const _route = {
    name,
    parent,
    p2r: {
      match: (0,path_to_regexp__WEBPACK_IMPORTED_MODULE_3__.match)(path, { end: !hasChild, decode: decodeURIComponent }),
      toPath: (0,path_to_regexp__WEBPACK_IMPORTED_MODULE_3__.compile)(path)
    },
    define: route,
    components: null,
    redirect: route.redirect
  };
  map.set(name, _route);
  if (hasChild) {
    _route.children = [];
    route.children.forEach((cr) => {
      addRoute(map, cr, _route.children, _route);
    });
  }
  container.push(_route);
}
function matchRoutePath(pathname, routes, parentPath = []) {
  routes.find((route) => {
    const matches = route.p2r.match(pathname);
    if (matches) {
      const params = parentPath.reduce((pv, it) => {
        return Object.assign(pv, it.params);
      }, {});
      parentPath.push({
        route,
        params: Object.assign(params, matches.params)
      });
      if (route.children) {
        matchRoutePath(pathname.substring(matches.path.length - 1), route.children, parentPath);
      }
    }
    return !!matches;
  });
  return parentPath;
}
function rollback(currentInfo, mode) {
  const _search = (0,_common__WEBPACK_IMPORTED_MODULE_1__.encodeParamsOrQuery)(currentInfo.query);
  const _url = currentInfo._pathname + (_search ? "?" + _search : "");
  history.replaceState(null, "", (mode === "hash" ? "#" : "") + _url);
}
function getPathnameAndSearch(destination, __map, baseHref) {
  if ((0,jinge__WEBPACK_IMPORTED_MODULE_0__.isString)(destination)) {
    destination = { name: destination };
  }
  const name = destination.name;
  const route = __map.get(name);
  if (!route) {
    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.warn)(`target route name "${name}" not found.`);
    return null;
  }
  const rs = [route];
  let _p = route;
  while (_p = _p.parent) {
    rs.unshift(_p);
  }
  return {
    pathname: normPath(
      baseHref + "/" + rs.reduce((pv, it) => {
        return pv + "/" + it.p2r.toPath(destination.params);
      }, "")
    ),
    search: Object.keys(destination.query || {}).map((k) => {
      return encodeURIComponent(k) + "=" + encodeURIComponent(destination.query[k]);
    }).join("&")
  };
}
function getViewsToUpdate(views, resetLv, curLv = 0, viewsToUpdate = []) {
  views.forEach((node) => {
    if (curLv >= resetLv) {
      viewsToUpdate.push(node);
    } else if (node.__views) {
      getViewsToUpdate(node.__views, resetLv, curLv + 1, viewsToUpdate);
    }
  });
  return viewsToUpdate;
}
function addGuard(arr, fn) {
  (0,jinge__WEBPACK_IMPORTED_MODULE_0__.arrayPushIfNotExist)(arr, fn);
  return () => {
    (0,jinge__WEBPACK_IMPORTED_MODULE_0__.arrayRemove)(arr, fn);
  };
}
class Router {
  constructor({ mode, baseHref = "/" }) {
    this.__mode = mode;
    this.__started = false;
    this.__dereg = null;
    this.__routes = [];
    this.__map = /* @__PURE__ */ new Map();
    this.__views = null;
    this.__guard = {
      before: [],
      after: []
    };
    this.__info = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)({
      _pathname: null,
      _routePath: [],
      params: (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)({}),
      query: (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)({})
    });
    this.__asyncKey = 0;
    this.baseHref = baseHref;
  }
  get baseHref() {
    return this.__base;
  }
  set baseHref(v) {
    v = normPath(v);
    if (!v.endsWith("/")) {
      v += "/";
    }
    this.__base = v;
  }
  beforeEach(guardFn) {
    return addGuard(this.__guard.before, guardFn);
  }
  afterEach(guardFn) {
    return addGuard(this.__guard.after, guardFn);
  }
  /**
   * @internal
   */
  __regView(viewNamePath, viewComponent) {
    let node = this;
    for (let i = 0; i < viewNamePath.length - 1; i++) {
      node = node.__views.get(viewNamePath[i]);
    }
    if (!node.__views) {
      node.__views = /* @__PURE__ */ new Map();
    }
    const viewName = viewNamePath[viewNamePath.length - 1];
    if (node.__views.has(viewName)) {
      throw new Error("dulplicated view name: " + viewName + " at path: " + viewNamePath.join("->"));
    }
    node.__views.set(viewName, {
      component: viewComponent,
      __views: null
    });
    if (viewNamePath.length > this.__info._routePath.length) {
      return;
    }
    viewComponent._doUpdateView(null, this.__info, this.__info._routePath[viewNamePath.length - 1]);
  }
  /**
   * @internal
   */
  __deregView(viewNamePath) {
    let node = this;
    for (let i = 0; i < viewNamePath.length - 1; i++) {
      node = node.__views.get(viewNamePath[i]);
      if (!node)
        return;
    }
    if (!node.__views) {
      return;
    }
    node.__views.delete(viewNamePath[viewNamePath.length - 1]);
  }
  register(route) {
    if (this.__started) {
      throw new Error("can't register after Router.start()");
    }
    addRoute(this.__map, route, this.__routes);
    return this;
  }
  start() {
    if (this.__started)
      return;
    this.__started = true;
    const isHashMode = this.__mode === "hash";
    this.__dereg = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.registerEvent)(
      window,
      isHashMode ? "hashchange" : "popstate",
      isHashMode ? this._onHashChange.bind(this) : this._onStateChange.bind(this)
    );
    if (isHashMode) {
      this._onHashChange();
    } else {
      this._onStateChange();
    }
  }
  destroy() {
    if (!this.__started)
      return;
    this.__dereg?.();
  }
  /**
   * @internal
   */
  _onErr(err) {
    console.error(err);
  }
  /**
   * @internal
   */
  _onHashChange() {
    const hash = location.hash.slice(1);
    const qi = hash.indexOf("?");
    this._update(qi > 0 ? hash.substring(0, qi) : hash, qi > 0 ? hash.substring(qi + 1) : "").catch(
      (err) => this._onErr(err)
    );
  }
  /**
   * @internal
   */
  _onStateChange() {
    this._update(location.pathname, location.search ? location.search.substring(1) : "").catch(
      (err) => this._onErr(err)
    );
  }
  /**
   * @internal
   */
  async _update(pathname, search) {
    pathname = normPath(pathname);
    if (this.__base !== "/" && pathname.startsWith(this.__base)) {
      pathname = pathname.substring(this.__base.length - 1);
    }
    const query = search ? (0,jinge__WEBPACK_IMPORTED_MODULE_0__.isString)(search) ? parseQuery(search) : (0,_common__WEBPACK_IMPORTED_MODULE_1__.cloneParamsOrQuery)(search) : {};
    const asyncKey = ++this.__asyncKey;
    const currentInfo = this.__info;
    if (pathname === currentInfo._pathname) {
      if (!(0,_common__WEBPACK_IMPORTED_MODULE_1__.isParamsOrQuerySameOrInclude)(query, currentInfo.query)) {
        currentInfo.query = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)(query);
      }
      return;
    }
    const newMatchPath = matchRoutePath(pathname, this.__routes);
    if (newMatchPath.length === 0) {
      (0,jinge__WEBPACK_IMPORTED_MODULE_0__.warn)("no route match path:", pathname);
      return;
    }
    const last = newMatchPath[newMatchPath.length - 1];
    const newRouteInfo = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)({
      _pathname: pathname,
      _routePath: newMatchPath,
      query: (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)(query),
      // clone last route params as final params
      params: (0,jinge__WEBPACK_IMPORTED_MODULE_0__.vm)(Object.assign({}, last.params))
    });
    let redirect = last.route.redirect;
    if (redirect) {
      if ((0,jinge__WEBPACK_IMPORTED_MODULE_0__.isFunction)(redirect)) {
        redirect = await redirect(newRouteInfo.params, newRouteInfo.query);
        if (asyncKey !== this.__asyncKey) {
          return;
        }
      } else if ((0,jinge__WEBPACK_IMPORTED_MODULE_0__.isString)(redirect)) {
        redirect = {
          name: redirect,
          params: newRouteInfo.params,
          query: newRouteInfo.query
        };
      }
      this.go(redirect, {
        replace: true
      });
      return;
    }
    let sameLevel = -1;
    let shouldUpdateParams = false;
    for (let i = 0; i < currentInfo._routePath.length; i++) {
      if (i >= newMatchPath.length)
        break;
      const oldIt = currentInfo._routePath[i];
      const newIt = newMatchPath[i];
      if (oldIt.route !== newIt.route) {
        break;
      }
      if (!(0,_common__WEBPACK_IMPORTED_MODULE_1__.isParamsOrQuerySameOrInclude)(newIt.params, oldIt.params)) {
        if (newIt.route.define.dynamic) {
          oldIt.params = newIt.params;
          shouldUpdateParams = true;
        } else {
          break;
        }
      }
      sameLevel = i;
    }
    if (currentInfo._routePath.length === newMatchPath.length && sameLevel === newMatchPath.length - 1) {
      const shouldUpdateQuery = !(0,_common__WEBPACK_IMPORTED_MODULE_1__.isParamsOrQuerySameOrInclude)(query, currentInfo.query);
      const oldRouteInfo2 = shouldUpdateQuery || shouldUpdateParams ? Object.assign({}, currentInfo) : currentInfo;
      if (shouldUpdateParams) {
        Object.assign(currentInfo.params, newRouteInfo.params);
        currentInfo._pathname = newRouteInfo._pathname;
      }
      if (shouldUpdateQuery) {
        Object.assign(currentInfo.query, query);
      }
      this.__guard.after.forEach((fn) => {
        fn(oldRouteInfo2, newRouteInfo);
      });
      return;
    }
    const routeIdxToUpdate = sameLevel + 1;
    const viewsToUpdate = getViewsToUpdate(this.__views, routeIdxToUpdate);
    for (let i = 0; i < viewsToUpdate.length; i++) {
      const vtp = viewsToUpdate[i];
      const shouldUpdate = await vtp.component._shouldUpdateView(currentInfo, newRouteInfo);
      if (asyncKey !== this.__asyncKey) {
        return;
      }
      if (shouldUpdate === false) {
        return rollback(currentInfo, this.__mode);
      }
    }
    if (currentInfo._routePath.length > routeIdxToUpdate) {
      const beforeEachGuardFns = this.__guard.before;
      for (let i = 0; i < beforeEachGuardFns.length; i++) {
        const shouldLeave = await beforeEachGuardFns[i](currentInfo, newRouteInfo);
        if (this.__asyncKey !== asyncKey) {
          return;
        }
        if (shouldLeave === false) {
          return rollback(currentInfo, this.__mode);
        }
      }
      const routeDef = currentInfo._routePath[routeIdxToUpdate].route.define;
      if ((0,jinge__WEBPACK_IMPORTED_MODULE_0__.isFunction)(routeDef.onLeave)) {
        const shouldLeave = await routeDef.onLeave(currentInfo, newRouteInfo);
        if (this.__asyncKey !== asyncKey) {
          return;
        }
        if (shouldLeave === false) {
          return rollback(currentInfo, this.__mode);
        }
      }
    }
    for (const vtp of viewsToUpdate) {
      vtp.__views?.clear();
      vtp.component._prepareUpdateView(newRouteInfo, newMatchPath[routeIdxToUpdate]);
    }
    if (newRouteInfo._routePath.length > routeIdxToUpdate) {
      for (let i = routeIdxToUpdate; i < newRouteInfo._routePath.length; i++) {
        const routeDef = newRouteInfo._routePath[i].route.define;
        if ((0,jinge__WEBPACK_IMPORTED_MODULE_0__.isFunction)(routeDef.onEnter)) {
          await routeDef.onEnter(currentInfo, newRouteInfo);
          if (this.__asyncKey !== asyncKey) {
            return;
          }
        }
      }
    }
    let parentResolves = newMatchPath.slice(0, routeIdxToUpdate).reduce((pv, it) => {
      return Object.assign(pv, it.resolves);
    }, {});
    for (let i = routeIdxToUpdate; i < newMatchPath.length; i++) {
      const matchedRoute = newMatchPath[i];
      const resolveDefs = matchedRoute.route.define.resolves;
      const currentResolves = { ...parentResolves };
      const promises = [];
      if (resolveDefs) {
        for await (const k of Object.keys(resolveDefs)) {
          const resolveOrFn = resolveDefs[k];
          if ((0,jinge__WEBPACK_IMPORTED_MODULE_0__.isFunction)(resolveOrFn)) {
            try {
              const rtn = resolveOrFn(matchedRoute.params, newRouteInfo.query, parentResolves);
              if ((0,jinge__WEBPACK_IMPORTED_MODULE_0__.isObject)(rtn) && (0,jinge__WEBPACK_IMPORTED_MODULE_0__.isFunction)(rtn.then)) {
                promises.push(
                  rtn.then((rr) => {
                    currentResolves[k] = rr;
                  })
                );
              } else {
                currentResolves[k] = rtn;
              }
            } catch (ex) {
              for (const vtp of viewsToUpdate) {
                vtp.component._doUpdateView(ex);
              }
              throw ex;
            }
          } else {
            currentResolves[k] = resolveOrFn;
          }
        }
      }
      let loadedComClasses = matchedRoute.route.components;
      if (!loadedComClasses) {
        const comClasses = matchedRoute.route.define.components || {};
        loadedComClasses = {};
        if (matchedRoute.route.define.component) {
          comClasses.default = matchedRoute.route.define.component;
        }
        for await (const cn of Object.keys(comClasses)) {
          const CompClazz = comClasses[cn];
          if ((0,jinge__WEBPACK_IMPORTED_MODULE_0__.isFunction)(CompClazz) && !(0,jinge__WEBPACK_IMPORTED_MODULE_0__.isComponent)(CompClazz)) {
            try {
              const r = CompClazz(matchedRoute.params, newRouteInfo.query, currentResolves);
              if ((0,jinge__WEBPACK_IMPORTED_MODULE_0__.isObject)(r) && (0,jinge__WEBPACK_IMPORTED_MODULE_0__.isFunction)(r.then)) {
                promises.push(
                  r.then((rr) => {
                    loadedComClasses[cn] = rr;
                  })
                );
              } else {
                loadedComClasses[cn] = CompClazz;
              }
            } catch (ex) {
              for (const vtp of viewsToUpdate) {
                vtp.component._doUpdateView(ex);
              }
              throw ex;
            }
          } else {
            loadedComClasses[cn] = CompClazz;
          }
        }
      }
      try {
        await Promise.all(promises);
      } catch (ex) {
        if (asyncKey === this.__asyncKey) {
          for (const vtp of viewsToUpdate) {
            vtp.component._doUpdateView(ex);
          }
        }
        throw ex;
      }
      if (asyncKey !== this.__asyncKey) {
        return;
      }
      matchedRoute.route.components = loadedComClasses;
      matchedRoute.resolves = currentResolves;
      parentResolves = currentResolves;
    }
    const oldRouteInfo = Object.assign({}, currentInfo);
    Object.assign(currentInfo, newRouteInfo);
    for (const vtp of viewsToUpdate) {
      vtp.component._doUpdateView(null, newRouteInfo, newMatchPath[routeIdxToUpdate]);
    }
    this.__guard.after.forEach((fn) => {
      fn(oldRouteInfo, newRouteInfo);
    });
  }
  /**
   * current location url path parameters
   */
  get params() {
    return this.__info?.params;
  }
  /**
   * current location url query/search
   */
  get query() {
    return this.__info?.query;
  }
  /**
   * current matched route
   */
  get current() {
    const rp = this.__info?._routePath;
    if (!rp || rp.length === 0)
      return null;
    return rp[rp.length - 1];
  }
  includes(destination, checkQuery = false) {
    if (!this.__info || this.__info._routePath.length === 0)
      return false;
    if ((0,jinge__WEBPACK_IMPORTED_MODULE_0__.isString)(destination)) {
      destination = { name: destination };
    }
    const name = destination.name;
    const route = this.__map.get(name);
    if (!route) {
      return false;
    }
    if (checkQuery && destination.query && !(0,_common__WEBPACK_IMPORTED_MODULE_1__.isParamsOrQuerySameOrInclude)(destination.query, this.__info.query, false)) {
      return false;
    }
    return this.__info._routePath.findIndex((it) => {
      return it.route === route && (0,_common__WEBPACK_IMPORTED_MODULE_1__.isParamsOrQuerySameOrInclude)(destination.params || {}, it.params || {}, false);
    }) >= 0;
  }
  href(destination) {
    const pathAndSearch = getPathnameAndSearch(destination, this.__map, this.__base);
    if (!pathAndSearch) {
      return null;
    }
    const { pathname, search } = pathAndSearch;
    const path = search ? pathname + "?" + search : pathname;
    return this.__mode === "hash" ? "#" + path : path;
  }
  go(destination, { target = "_self", replace = false } = {
    target: "_self",
    replace: false
  }) {
    const pathAndSearch = getPathnameAndSearch(destination, this.__map, this.__base);
    if (!pathAndSearch) {
      return;
    }
    const { pathname, search } = pathAndSearch;
    const path = search ? pathname + "?" + search : pathname;
    const isHashMode = this.__mode === "hash";
    const url = isHashMode ? location.pathname + "#" + path : path;
    if (target === "_blank") {
      window.open(url, "_blank");
      return;
    }
    if (replace) {
      history.replaceState(null, "", url);
    } else {
      history.pushState(null, "", url);
    }
    this._update(pathname, destination.query);
  }
}


//# sourceMappingURL=router.js.map

/***/ }),

/***/ "../../jinge-router/node_modules/.pnpm/registry.npmmirror.com+path-to-regexp@6.2.1/node_modules/path-to-regexp/dist.es2015/index.js":
/*!******************************************************************************************************************************************!*\
  !*** ../../jinge-router/node_modules/.pnpm/registry.npmmirror.com+path-to-regexp@6.2.1/node_modules/path-to-regexp/dist.es2015/index.js ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compile": () => (/* binding */ compile),
/* harmony export */   "match": () => (/* binding */ match),
/* harmony export */   "parse": () => (/* binding */ parse),
/* harmony export */   "pathToRegexp": () => (/* binding */ pathToRegexp),
/* harmony export */   "regexpToFunction": () => (/* binding */ regexpToFunction),
/* harmony export */   "tokensToFunction": () => (/* binding */ tokensToFunction),
/* harmony export */   "tokensToRegexp": () => (/* binding */ tokensToRegexp)
/* harmony export */ });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at ".concat(i));
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at ".concat(j));
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at ".concat(j));
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at ".concat(i));
            if (!pattern)
                throw new TypeError("Missing pattern at ".concat(i));
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^".concat(escapeString(options.delimiter || "/#?"), "]+?");
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
    };
    var consumeText = function () {
        var result = "";
        var value;
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to not repeat, but got an array"));
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"".concat(token.name, "\" to not be empty"));
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"".concat(token.name, "\" to be ").concat(typeOfMessage));
        }
        return path;
    };
}
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
    var index = 0;
    var execResult = groupsRegex.exec(path.source);
    while (execResult) {
        keys.push({
            // Use parenthesized substring match if available, index otherwise
            name: execResult[1] || index++,
            prefix: "",
            suffix: "",
            modifier: "",
            pattern: "",
        });
        execResult = groupsRegex.exec(path.source);
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
    var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
    var delimiterRe = "[".concat(escapeString(delimiter), "]");
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
                    }
                    else {
                        route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
                    }
                }
                else {
                    if (token.modifier === "+" || token.modifier === "*") {
                        route += "((?:".concat(token.pattern, ")").concat(token.modifier, ")");
                    }
                    else {
                        route += "(".concat(token.pattern, ")").concat(token.modifier);
                    }
                }
            }
            else {
                route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
            }
        }
    }
    if (end) {
        if (!strict)
            route += "".concat(delimiterRe, "?");
        route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1
            : endToken === undefined;
        if (!strict) {
            route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
        }
        if (!isEndDelimited) {
            route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
        }
    }
    return new RegExp(route, flags(options));
}
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge/lib/components/dynamic.js":
/*!*********************************************!*\
  !*** ../../jinge/lib/components/dynamic.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicRenderComponent": () => (/* binding */ DynamicRenderComponent)
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForComponent": () => (/* binding */ ForComponent),
/* harmony export */   "ForEachComponent": () => (/* binding */ ForEachComponent)
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BindHtmlComponent": () => (/* binding */ BindHtmlComponent)
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IfComponent": () => (/* binding */ IfComponent),
/* harmony export */   "SwitchComponent": () => (/* binding */ SwitchComponent)
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BindHtmlComponent": () => (/* reexport safe */ _html__WEBPACK_IMPORTED_MODULE_2__.BindHtmlComponent),
/* harmony export */   "DynamicRenderComponent": () => (/* reexport safe */ _dynamic__WEBPACK_IMPORTED_MODULE_6__.DynamicRenderComponent),
/* harmony export */   "ForComponent": () => (/* reexport safe */ _for__WEBPACK_IMPORTED_MODULE_0__.ForComponent),
/* harmony export */   "ForEachComponent": () => (/* reexport safe */ _for__WEBPACK_IMPORTED_MODULE_0__.ForEachComponent),
/* harmony export */   "IfComponent": () => (/* reexport safe */ _if__WEBPACK_IMPORTED_MODULE_3__.IfComponent),
/* harmony export */   "LogComponent": () => (/* reexport safe */ _log__WEBPACK_IMPORTED_MODULE_5__.LogComponent),
/* harmony export */   "ParameterComponent": () => (/* reexport safe */ _parameter__WEBPACK_IMPORTED_MODULE_4__.ParameterComponent),
/* harmony export */   "ShowComponent": () => (/* reexport safe */ _show__WEBPACK_IMPORTED_MODULE_1__.ShowComponent),
/* harmony export */   "SwitchComponent": () => (/* reexport safe */ _if__WEBPACK_IMPORTED_MODULE_3__.SwitchComponent),
/* harmony export */   "TransitionComponent": () => (/* reexport safe */ _transition__WEBPACK_IMPORTED_MODULE_7__.TransitionComponent)
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogComponent": () => (/* binding */ LogComponent)
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParameterComponent": () => (/* binding */ ParameterComponent)
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowComponent": () => (/* binding */ ShowComponent)
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransitionComponent": () => (/* binding */ TransitionComponent)
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

/***/ "../../jinge/lib/core/component.js":
/*!*****************************************!*\
  !*** ../../jinge/lib/core/component.js ***!
  \*****************************************/
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_1__.Component),
/* harmony export */   "ComponentStates": () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_1__.ComponentStates),
/* harmony export */   "ContextStates": () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_1__.ContextStates),
/* harmony export */   "MESSENGER_LISTENERS": () => (/* reexport safe */ _messenger__WEBPACK_IMPORTED_MODULE_2__.MESSENGER_LISTENERS),
/* harmony export */   "Messenger": () => (/* reexport safe */ _messenger__WEBPACK_IMPORTED_MODULE_2__.Messenger),
/* harmony export */   "TransitionStates": () => (/* reexport safe */ _transition__WEBPACK_IMPORTED_MODULE_4__.TransitionStates),
/* harmony export */   "__": () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_1__.__),
/* harmony export */   "assertRenderResults": () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_1__.assertRenderResults),
/* harmony export */   "attrs": () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_1__.attrs),
/* harmony export */   "bootstrap": () => (/* reexport safe */ _bootstrap__WEBPACK_IMPORTED_MODULE_0__.bootstrap),
/* harmony export */   "emptyRenderFn": () => (/* reexport safe */ _render_fns__WEBPACK_IMPORTED_MODULE_3__.emptyRenderFn),
/* harmony export */   "errorRenderFn": () => (/* reexport safe */ _render_fns__WEBPACK_IMPORTED_MODULE_3__.errorRenderFn),
/* harmony export */   "getDuration": () => (/* reexport safe */ _transition__WEBPACK_IMPORTED_MODULE_4__.getDuration),
/* harmony export */   "getDurationType": () => (/* reexport safe */ _transition__WEBPACK_IMPORTED_MODULE_4__.getDurationType),
/* harmony export */   "isComponent": () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_1__.isComponent),
/* harmony export */   "textRenderFn": () => (/* reexport safe */ _render_fns__WEBPACK_IMPORTED_MODULE_3__.textRenderFn)
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emptyRenderFn": () => (/* binding */ emptyRenderFn),
/* harmony export */   "errorRenderFn": () => (/* binding */ errorRenderFn),
/* harmony export */   "textRenderFn": () => (/* binding */ textRenderFn)
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

/***/ "../../jinge/lib/index.js":
/*!********************************!*\
  !*** ../../jinge/lib/index.js ***!
  \********************************/
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
/* harmony export */   "IfComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.IfComponent),
/* harmony export */   "LogComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.LogComponent),
/* harmony export */   "MESSENGER_LISTENERS": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.MESSENGER_LISTENERS),
/* harmony export */   "Messenger": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.Messenger),
/* harmony export */   "ParameterComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ParameterComponent),
/* harmony export */   "ShowComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ShowComponent),
/* harmony export */   "SwitchComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.SwitchComponent),
/* harmony export */   "TransitionComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.TransitionComponent),
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
/* harmony export */   "class2str": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.class2str),
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
/* harmony export */   "setClassAttribute": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.setClassAttribute),
/* harmony export */   "setImmediate": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.setImmediate),
/* harmony export */   "setStyleAttribute": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.setStyleAttribute),
/* harmony export */   "setText": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.setText),
/* harmony export */   "shiftParent": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.shiftParent),
/* harmony export */   "style2str": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.style2str),
/* harmony export */   "textRenderFn": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.textRenderFn),
/* harmony export */   "typeOf": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.typeOf),
/* harmony export */   "uid": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.uid),
/* harmony export */   "unwatch": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.unwatch),
/* harmony export */   "vm": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.vm),
/* harmony export */   "warn": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_2__.warn),
/* harmony export */   "watch": () => (/* reexport safe */ _vm__WEBPACK_IMPORTED_MODULE_3__.watch)
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

/***/ "../../jinge/lib/util/common.js":
/*!**************************************!*\
  !*** ../../jinge/lib/util/common.js ***!
  \**************************************/
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

/***/ "../../jinge/lib/util/dom.js":
/*!***********************************!*\
  !*** ../../jinge/lib/util/dom.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addEvent": () => (/* binding */ addEvent),
/* harmony export */   "appendChildren": () => (/* binding */ appendChildren),
/* harmony export */   "class2str": () => (/* binding */ class2str),
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
/* harmony export */   "setClassAttribute": () => (/* binding */ setClassAttribute),
/* harmony export */   "setStyleAttribute": () => (/* binding */ setStyleAttribute),
/* harmony export */   "setText": () => (/* binding */ setText),
/* harmony export */   "style2str": () => (/* binding */ style2str)
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addEvent": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.addEvent),
/* harmony export */   "appendChildren": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.appendChildren),
/* harmony export */   "arrayEqual": () => (/* reexport safe */ _array__WEBPACK_IMPORTED_MODULE_1__.arrayEqual),
/* harmony export */   "arrayPushIfNotExist": () => (/* reexport safe */ _array__WEBPACK_IMPORTED_MODULE_1__.arrayPushIfNotExist),
/* harmony export */   "arrayRemove": () => (/* reexport safe */ _array__WEBPACK_IMPORTED_MODULE_1__.arrayRemove),
/* harmony export */   "class2str": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.class2str),
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
/* harmony export */   "setClassAttribute": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.setClassAttribute),
/* harmony export */   "setImmediate": () => (/* reexport safe */ _setimm__WEBPACK_IMPORTED_MODULE_3__.setImmediate),
/* harmony export */   "setStyleAttribute": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.setStyleAttribute),
/* harmony export */   "setText": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.setText),
/* harmony export */   "style2str": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_4__.style2str),
/* harmony export */   "typeOf": () => (/* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_0__.typeOf),
/* harmony export */   "uid": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_2__.uid),
/* harmony export */   "warn": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_2__.warn)
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearImmediate": () => (/* binding */ clearImmediate),
/* harmony export */   "setImmediate": () => (/* binding */ setImmediate)
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

/***/ "../../jinge/lib/vm/common.js":
/*!************************************!*\
  !*** ../../jinge/lib/vm/common.js ***!
  \************************************/
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteNode": () => (/* binding */ deleteNode),
/* harmony export */   "loopClearNode": () => (/* binding */ loopClearNode),
/* harmony export */   "loopCreateNode": () => (/* binding */ loopCreateNode),
/* harmony export */   "loopGetNode": () => (/* binding */ loopGetNode)
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleCancel": () => (/* binding */ handleCancel),
/* harmony export */   "handleOnce": () => (/* binding */ handleOnce),
/* harmony export */   "loopHandle": () => (/* binding */ loopHandle),
/* harmony export */   "loopNotify": () => (/* binding */ loopNotify)
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAttributes": () => (/* binding */ createAttributes),
/* harmony export */   "createComponent": () => (/* binding */ createComponent),
/* harmony export */   "createViewModel": () => (/* binding */ createViewModel),
/* harmony export */   "unwatch": () => (/* binding */ unwatch),
/* harmony export */   "vm": () => (/* binding */ vm),
/* harmony export */   "watch": () => (/* binding */ watch)
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + {"components_dynamic_c_js":"3d2d3af0","components_footer_c_c_js":"fd6918e3"}[chunkId] + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "jinge-demo-ui-router:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "dist/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkjinge_demo_ui_router"] = self["webpackChunkjinge_demo_ui_router"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
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
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge/lib/index.js");
/* harmony import */ var _app_c__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.c */ "./app.c.js");


(0,jinge__WEBPACK_IMPORTED_MODULE_0__.bootstrap)(_app_c__WEBPACK_IMPORTED_MODULE_1__["default"], document.getElementById('root-app'));

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map