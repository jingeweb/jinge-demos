"use strict";
(self["webpackChunkjinge_demo_ui_router"] = self["webpackChunkjinge_demo_ui_router"] || []).push([["components_dynamic_c_js"],{

/***/ "./components/dynamic.c.js":
/*!*********************************!*\
  !*** ./components/dynamic.c.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Dynamic)
/* harmony export */ });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge/lib/index.js");
/* harmony import */ var _dynamic_c_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic.c.html */ "./components/dynamic.c.html");


class Dynamic extends jinge__WEBPACK_IMPORTED_MODULE_0__.Component {
  static get template() {
    return _dynamic_c_html__WEBPACK_IMPORTED_MODULE_1__["default"];
  }
}

/***/ }),

/***/ "./components/dynamic.c.html":
/*!***********************************!*\
  !*** ./components/dynamic.c.html ***!
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
      `Dynamic-Loaded-by-import()`
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__.__].rootNodes.push(el);
    return el;
  })()
  ];
}

/***/ })

}]);
//# sourceMappingURL=components_dynamic_c_js.3d2d3af0.js.map