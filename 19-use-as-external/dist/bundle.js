/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app.html":
/*!******************!*\
  !*** ./app.html ***!
  \******************/
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "jinge");
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jinge__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "h2",
      component[jinge__WEBPACK_IMPORTED_MODULE_0__.CSTYLE_PID],
      "Use jinge as external library"
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.ROOT_NODES].push(el);
    return el;
  })(),
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "p",
      component[jinge__WEBPACK_IMPORTED_MODULE_0__.CSTYLE_PID],
      "\n  This demo load jinge framework library from global window object.\n"
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.ROOT_NODES].push(el);
    return el;
  })(),
  (() => {
    const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "div",
      component[jinge__WEBPACK_IMPORTED_MODULE_0__.CSTYLE_PID],
      (() => {
        const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
          "h3",
          "You have clicked ",
          (() => {
            const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createTextNode)();
            const fn_0 = () => {
              (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setText)(el, vm_0.n);
            };
            fn_0();
            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.VM_ATTRS][jinge__WEBPACK_IMPORTED_MODULE_0__.VM_ON](["n"], fn_0, component);
            return el;
          })(),
          " time",
          (() => {
            const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createTextNode)();
            const fn_0 = () => {
              (0,jinge__WEBPACK_IMPORTED_MODULE_0__.setText)(el, vm_0.n > 1 ? 's' : '');
            };
            fn_0();
            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.VM_ATTRS][jinge__WEBPACK_IMPORTED_MODULE_0__.VM_ON](["n"], fn_0, component);
            return el;
          })()
        );
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__.SET_REF_NODE]('title', el, component)
        return el;
      })(),
      (() => {
        const el = (0,jinge__WEBPACK_IMPORTED_MODULE_0__.createElementWithoutAttrs)(
          "button",
          "Click Me"
        );
        (0,jinge__WEBPACK_IMPORTED_MODULE_0__.addEvent)(el, 'click', function(...args) {vm_0.test(...args)})
        return el;
      })()
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.ROOT_NODES].push(el);
    return el;
  })()
  ];
});

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "jinge");
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jinge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.html */ "./app.html");






class App extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  static get template() {
    return _app_html__WEBPACK_IMPORTED_MODULE_1__.default;
  }
  constructor(args) {
    const vm_3d8bfc3416 = super(args);
    vm_3d8bfc3416.n = 0;
    return vm_3d8bfc3416;
  }
  test(evt) {
    console.log(evt);
    this.n++;
  }
  [jinge__WEBPACK_IMPORTED_MODULE_0__.AFTER_RENDER]() {
    console.log(this[jinge__WEBPACK_IMPORTED_MODULE_0__.GET_REF]('title'))
    Object(jinge__WEBPACK_IMPORTED_MODULE_0__.addClass)(this[jinge__WEBPACK_IMPORTED_MODULE_0__.GET_REF]('title'), 'color-blue');
  }
}

(0,jinge__WEBPACK_IMPORTED_MODULE_0__.bootstrap)(App, document.getElementById('root-app'));


/***/ }),

/***/ "jinge":
/*!************************!*\
  !*** external "jinge" ***!
  \************************/
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = jinge;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		var hasOwnProperty = Object.prototype.hasOwnProperty;
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(hasOwnProperty.call(definition, key) && !hasOwnProperty.call(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map