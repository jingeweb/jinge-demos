/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.html":
/*!******************!*\
  !*** ./app.html ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "jinge");
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jinge__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
      "h2",
      component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].compStylePid,
      "Use jinge as external library"
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].rootNodes.push(el);
    return el;
  })(),
  (() => {
    const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
      "p",
      component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].compStylePid,
      "\n  This demo load jinge framework library from global window object.\n"
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].rootNodes.push(el);
    return el;
  })(),
  (() => {
    const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
      "div",
      component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].compStylePid,
      (() => {
        const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
          "h3",
          "You have clicked ",
          (() => {
            const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createTextNode"])();
            const fn_0 = () => {
              Object(jinge__WEBPACK_IMPORTED_MODULE_0__["setText"])(el, vm_0.n);
            };
            fn_0();
            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch(["n"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]]);
            return el;
          })(),
          " time",
          (() => {
            const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createTextNode"])();
            const fn_0 = () => {
              Object(jinge__WEBPACK_IMPORTED_MODULE_0__["setText"])(el, vm_0.n > 1 ? 's' : '');
            };
            fn_0();
            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch(["n"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]]);
            return el;
          })()
        );
        vm_0.__setRef('title', el, component)
        return el;
      })(),
      (() => {
        const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
          "button",
          "Click Me"
        );
        Object(jinge__WEBPACK_IMPORTED_MODULE_0__["addEvent"])(el, 'click', function(...args) {vm_0.test(...args)})
        return el;
      })()
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].rootNodes.push(el);
    return el;
  })()
  ];
});

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "jinge");
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jinge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.html */ "./app.html");




class App extends jinge__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  static get template() {
    return _app_html__WEBPACK_IMPORTED_MODULE_1__["default"];
  }
  constructor(args) {
    super(args);
    const __vm_d39395dd5f1f = this[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
    __vm_d39395dd5f1f.n = 0;
  }
  test(evt) {
    console.log(evt);
    this.n++;
  }
  __afterRender() {
    console.log(this.__getRef('title'))
    this.__getRef('title').classList.add('color-blue');
  }
}

Object(jinge__WEBPACK_IMPORTED_MODULE_0__["bootstrap"])(App, document.getElementById('root-app'));


/***/ }),

/***/ "jinge":
/*!************************!*\
  !*** external "jinge" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jinge;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map