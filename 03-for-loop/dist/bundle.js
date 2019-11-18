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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../jinge-framework/components/class.js":
/*!*****************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/components/class.js ***!
  \*****************************************************************/
/*! exports provided: ToggleClassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleClassComponent", function() { return ToggleClassComponent; });
/* harmony import */ var _viewmodel_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../viewmodel/core */ "../../jinge-framework/viewmodel/core.js");
/* harmony import */ var _viewmodel_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../viewmodel/proxy */ "../../jinge-framework/viewmodel/proxy.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/component */ "../../jinge-framework/core/component.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom */ "../../jinge-framework/dom/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util */ "../../jinge-framework/util/index.js");
/* harmony import */ var _core_messenger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/messenger */ "../../jinge-framework/core/messenger.js");
/* harmony import */ var _core_transition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/transition */ "../../jinge-framework/core/transition.js");











class ToggleClassComponent extends _core_component__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(attrs) {
    if (!attrs || !Object(_util__WEBPACK_IMPORTED_MODULE_4__["isObject"])(attrs.class)) {
      throw new Error('<toggle-class> component require "class" attribute to be Object.');
    }
    const vm_e163cba0ee = super(attrs);
    const fn_e163cba0ee_2 = () => {
      vm_e163cba0ee.class = attrs.class;
    };
    fn_e163cba0ee_2();
    attrs[_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]]('class', fn_e163cba0ee_2);
    const fn_e163cba0ee_3 = () => {
      vm_e163cba0ee.trans = !!attrs.transition;
    };
    fn_e163cba0ee_3();
    attrs[_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]]('transition', fn_e163cba0ee_3);
    vm_e163cba0ee._t = null;
    vm_e163cba0ee._i = null;
    Object(_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["vmWatch"])(this, 'class.**', () => {
      vm_e163cba0ee[_core_component__WEBPACK_IMPORTED_MODULE_2__["UPDATE_IF_NEED"]]();
    });
    return vm_e163cba0ee;
  }

  [_core_component__WEBPACK_IMPORTED_MODULE_2__["RENDER"]]() {
    const rr = super[_core_component__WEBPACK_IMPORTED_MODULE_2__["RENDER"]]();
    this[_core_component__WEBPACK_IMPORTED_MODULE_2__["UPDATE"]](true);
    return rr;
  }

  [_core_component__WEBPACK_IMPORTED_MODULE_2__["UPDATE"]](init) {
    const el = this.trans ? this[_core_component__WEBPACK_IMPORTED_MODULE_2__["GET_TRANSITION_DOM"]]() : this;
    if (el.nodeType !== Node.ELEMENT_NODE) {
      // ignore comment or text-node
      return;
    }
    if (this.trans && !this._t) {
      this._t = new Map();
    }
    const cs = this.class;
    Object.keys(cs).forEach(k => {
      const v = cs[k];
      if (!this.trans) {
        Object(_core_component__WEBPACK_IMPORTED_MODULE_2__["operateRootHtmlDOM"])(
          v ? _dom__WEBPACK_IMPORTED_MODULE_3__["addClass"] : _dom__WEBPACK_IMPORTED_MODULE_3__["removeClass"],
          el, k
        );
        return;
      }

      if (init) {
        this._t.set(k, [
          v ? _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_STATE_ENTERED"] : _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_STATE_LEAVED"], // state
          null // saved onEnd callback
        ]);
        v ? Object(_dom__WEBPACK_IMPORTED_MODULE_3__["addClass"])(el, k) : Object(_dom__WEBPACK_IMPORTED_MODULE_3__["removeClass"])(el, k);
        return;
      }

      const t = this._t.get(k);
      if (!t) {
        console.error('Unsupport <toogle-class> attribute. see https://todo');
        return;
      }
      const s = t[0];
      if ((v && s <= _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_STATE_ENTERED"]) || (!v && s >= _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_STATE_LEAVING"])) {
        return;
      }

      if (s === (v ? _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_STATE_LEAVING"] : _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_STATE_ENTERING"])) {
        // debugger;
        Object(_dom__WEBPACK_IMPORTED_MODULE_3__["removeClass"])(el, k + (v ? _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_C_LEAVE"] : _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_C_ENTER"]));
        Object(_dom__WEBPACK_IMPORTED_MODULE_3__["removeClass"])(el, k + (v ? _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_C_LEAVE_ACTIVE"] : _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_C_ENTER_ACTIVE"]));
        Object(_dom__WEBPACK_IMPORTED_MODULE_3__["removeEvent"])(el, _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_TRANSITION_END"], t[1]);
        Object(_dom__WEBPACK_IMPORTED_MODULE_3__["removeEvent"])(el, _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_ANIMATION_END"], t[1]);
        t[1] = null;
        this[_core_messenger__WEBPACK_IMPORTED_MODULE_5__["NOTIFY"]](_core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_TRANSITION"], v ? _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_LEAVE_CANCELLED"] : _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_ENTER_CANCELLED"], k, el);
      }
      const classOfStart = k + (v ? _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_C_ENTER"] : _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_C_LEAVE"]);
      const classOfActive = k + (v ? _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_C_ENTER_ACTIVE"] : _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_C_LEAVE_ACTIVE"]);
      Object(_dom__WEBPACK_IMPORTED_MODULE_3__["addClass"])(el, classOfStart);
      // force render by calling getComputedStyle
      Object(_core_transition__WEBPACK_IMPORTED_MODULE_6__["getDurationType"])(el);
      Object(_dom__WEBPACK_IMPORTED_MODULE_3__["addClass"])(el, classOfActive);
      const tsEndName = Object(_core_transition__WEBPACK_IMPORTED_MODULE_6__["getDurationType"])(el);
      if (!tsEndName) {
        Object(_dom__WEBPACK_IMPORTED_MODULE_3__["removeClass"])(el, classOfStart);
        Object(_dom__WEBPACK_IMPORTED_MODULE_3__["removeClass"])(el, classOfActive);
        t[0] = v ? _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_STATE_ENTERED"] : _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_STATE_LEAVED"];
        v ? Object(_dom__WEBPACK_IMPORTED_MODULE_3__["addClass"])(el, k) : Object(_dom__WEBPACK_IMPORTED_MODULE_3__["removeClass"])(el, k);
        return;
      }
      const onEnd = () => {
        Object(_dom__WEBPACK_IMPORTED_MODULE_3__["removeEvent"])(el, _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_TRANSITION_END"], onEnd);
        Object(_dom__WEBPACK_IMPORTED_MODULE_3__["removeEvent"])(el, _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_ANIMATION_END"], onEnd);
        Object(_dom__WEBPACK_IMPORTED_MODULE_3__["removeClass"])(el, classOfStart);
        Object(_dom__WEBPACK_IMPORTED_MODULE_3__["removeClass"])(el, classOfActive);
        t[1] = null;
        t[0] = v ? _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_STATE_ENTERED"] : _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_STATE_LEAVED"];
        v ? Object(_dom__WEBPACK_IMPORTED_MODULE_3__["addClass"])(el, k) : Object(_dom__WEBPACK_IMPORTED_MODULE_3__["removeClass"])(el, k);
        this[_core_messenger__WEBPACK_IMPORTED_MODULE_5__["NOTIFY"]](_core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_TRANSITION"], v ? _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_AFTER_ENTER"] : _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_AFTER_LEAVE"], k, el);
      };
      t[0] = v ? _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_STATE_ENTERING"] : _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_STATE_LEAVING"];
      t[1] = onEnd;
      Object(_dom__WEBPACK_IMPORTED_MODULE_3__["addEvent"])(el, tsEndName, onEnd);
      this[_core_messenger__WEBPACK_IMPORTED_MODULE_5__["NOTIFY"]](_core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_TRANSITION"], v ? _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_BEFORE_ENTER"] : _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_BEFORE_LEAVE"], k, el);
      Object(_util__WEBPACK_IMPORTED_MODULE_4__["setImmediate"])(() => {
        this[_core_messenger__WEBPACK_IMPORTED_MODULE_5__["NOTIFY"]](_core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_TRANSITION"], v ? _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_ENTER"] : _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_LEAVE"], k, el);
      });
    });
  }
}


/***/ }),

/***/ "../../jinge-framework/components/for.js":
/*!***************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/components/for.js ***!
  \***************************************************************/
/*! exports provided: FOR_LENGTH, FOR_KEYS, FOR_KEY_NAME, FOR_WAIT_UPDATE, FOR_UPDATE_ITEM, ForEachComponent, ForComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOR_LENGTH", function() { return FOR_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOR_KEYS", function() { return FOR_KEYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOR_KEY_NAME", function() { return FOR_KEY_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOR_WAIT_UPDATE", function() { return FOR_WAIT_UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOR_UPDATE_ITEM", function() { return FOR_UPDATE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForEachComponent", function() { return ForEachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForComponent", function() { return ForComponent; });
/* harmony import */ var _viewmodel_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../viewmodel/core */ "../../jinge-framework/viewmodel/core.js");
/* harmony import */ var _viewmodel_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../viewmodel/proxy */ "../../jinge-framework/viewmodel/proxy.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/component */ "../../jinge-framework/core/component.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ "../../jinge-framework/util/index.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom */ "../../jinge-framework/dom/index.js");
/* harmony import */ var _core_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/style */ "../../jinge-framework/core/style.js");











const FOR_LENGTH = Object(_util__WEBPACK_IMPORTED_MODULE_3__["Symbol"])('length');
const FOR_KEYS = Object(_util__WEBPACK_IMPORTED_MODULE_3__["Symbol"])('keys');
const FOR_KEY_NAME = Object(_util__WEBPACK_IMPORTED_MODULE_3__["Symbol"])('key');
const FOR_WAIT_UPDATE = Object(_util__WEBPACK_IMPORTED_MODULE_3__["Symbol"])('waiting_update');
const FOR_UPDATE_ITEM = Object(_util__WEBPACK_IMPORTED_MODULE_3__["Symbol"])('update_item');

const KEY_INDEX = 'index';
const KEY_EACH = 'each';
const EMP_ARR = [];

class ForEachComponent extends _core_component__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(attrs, item, index, isLast) {
    const vm_e163cba0ee = super(attrs);
    vm_e163cba0ee.each = item;
    vm_e163cba0ee.index = index;
    vm_e163cba0ee.isFirst = index === 0;
    vm_e163cba0ee.isLast = isLast;
    return vm_e163cba0ee;
  }

  [_core_component__WEBPACK_IMPORTED_MODULE_2__["RENDER"]]() {
    const renderFn = this[_core_component__WEBPACK_IMPORTED_MODULE_2__["ARG_COMPONENTS"]][_util__WEBPACK_IMPORTED_MODULE_3__["STR_DEFAULT"]];
    if (!renderFn) Object(_util__WEBPACK_IMPORTED_MODULE_3__["assertFail"])();
    return renderFn(this);
  }
}

function createEl(item, i, isLast, itemRenderFn, context, cstyPid) {
  const el = new ForEachComponent(Object(_viewmodel_proxy__WEBPACK_IMPORTED_MODULE_1__["wrapAttrs"])({
    [_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["VM_DEBUG_NAME"]]: 'attrs_of_<for-each>',
    [_core_component__WEBPACK_IMPORTED_MODULE_2__["CONTEXT"]]: context,
    [_core_component__WEBPACK_IMPORTED_MODULE_2__["ARG_COMPONENTS"]]: {
      [_util__WEBPACK_IMPORTED_MODULE_3__["STR_DEFAULT"]]: itemRenderFn
    }
  }), item, i, isLast);
  cstyPid && Object(_core_style__WEBPACK_IMPORTED_MODULE_5__["addParentStyleId"])(el, cstyPid);
  return el;
}

function appendRenderEach(item, i, isLast, itemRenderFn, roots, context, cstyPid) {
  const el = createEl(item, i, isLast, itemRenderFn, context, cstyPid);
  roots.push(el);
  return el[_core_component__WEBPACK_IMPORTED_MODULE_2__["RENDER"]]();
}

function _assertVm(item, i) {
  if (Object(_util__WEBPACK_IMPORTED_MODULE_3__["isObject"])(item) && !Object(_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["isInnerObj"])(item) && !(_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"] in item)) {
    throw new Error(`loop item [${i}] of <for> component must be ViewModel.`);
  }
}

function _prepareKey(item, i, keyMap, keyName) {
  const key = keyName === KEY_EACH ? item : keyName(item);
  if (keyMap.has(key)) {
    console.error(`loop items [${i}] and [${keyMap.get(key)}] of <for> component both have key '${key}', dulplicated key may cause update error.`);
  }
  keyMap.set(key, i);
  return key;
}

function renderItems(items, itemRenderFn, roots, keys, keyName, context, cstyPid) {
  const result = [];
  const tmpKeyMap = new Map();
  items.forEach((item, i) => {
    _assertVm(item, i);
    if (keyName !== KEY_INDEX) {
      keys.push(_prepareKey(item, i, tmpKeyMap, keyName));
    }
    result.push(...appendRenderEach(item, i, i === items.length - 1, itemRenderFn, roots, context, cstyPid));
  });
  return result;
}

function loopAppend($parent, el) {
  el[_core_component__WEBPACK_IMPORTED_MODULE_2__["ROOT_NODES"]].forEach(node => {
    if (Object(_core_component__WEBPACK_IMPORTED_MODULE_2__["isComponent"])(node)) {
      loopAppend($parent, node);
    } else {
      Object(_dom__WEBPACK_IMPORTED_MODULE_4__["appendChild"])($parent, node);
    }
  });
}

function updateEl(el, i, items) {
  if (el.isFirst !== (i === 0)) {
    el.isFirst = i === 0;
  }
  if (el.isLast !== (i === items.length - 1)) {
    el.isLast = (i === items.length - 1);
  }
  if (el.index !== i) {
    el.index = i;
  }
  if (el.each !== items[i]) {
    el.each = items[i];
  }
}

function _parseIndexPath(p) {
  return (Object(_util__WEBPACK_IMPORTED_MODULE_3__["isString"])(p) && p !== _util__WEBPACK_IMPORTED_MODULE_3__["STR_LENGTH"] && /^\d+$/.test(p)) ? Number(p) : p;
}

class ForComponent extends _core_component__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(attrs) {
    if (attrs.key && !/^(index|each(.[\w\d$_]+)*)$/.test(attrs.key)) {
      throw new Error('Value of "_key" attribute of <for> component is invalidate. See https://[todo]');
    }
    const vm_e163cba0ee = super(attrs);
    const fn_e163cba0ee_2 = () => {
      vm_e163cba0ee.loop = attrs.loop;
    };
    fn_e163cba0ee_2();
    attrs[_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]]('loop', fn_e163cba0ee_2);
    const kn = attrs.key || KEY_INDEX;
    vm_e163cba0ee[FOR_KEY_NAME] = kn;
    vm_e163cba0ee[FOR_LENGTH] = 0;
    vm_e163cba0ee[FOR_KEYS] = null;
    vm_e163cba0ee[FOR_WAIT_UPDATE] = false;
    if (kn !== KEY_INDEX && kn !== KEY_EACH) {
      vm_e163cba0ee[FOR_KEY_NAME] = new Function(KEY_EACH, `return ${ kn }`);
      const propCount = kn.split('.').length + 1;
      Object(_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["vmWatch"])(this, 'loop.*.' + kn.slice(5), propPath => {
        if (propPath.length !== propCount || vm_e163cba0ee[FOR_WAIT_UPDATE]) {
          return;
        }
        const items = vm_e163cba0ee.loop;
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_3__["isArray"])(items) || items.length === 0)
          return;
        const p = _parseIndexPath(propPath[1]);
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_3__["isNumber"])(p) || p >= items.length) {
          return;
        }
        vm_e163cba0ee[FOR_KEYS][p] = vm_e163cba0ee[FOR_KEY_NAME](items[p]);
      });
    }
    Object(_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["vmWatch"])(this, 'loop.*', propPath => {
      if (propPath.length !== 2 || vm_e163cba0ee[FOR_WAIT_UPDATE]) {
        return;
      }
      console.log(propPath);
      const p = _parseIndexPath(propPath[1]);
      if (p === _util__WEBPACK_IMPORTED_MODULE_3__["STR_LENGTH"]) {
        vm_e163cba0ee[FOR_WAIT_UPDATE] = true;
        vm_e163cba0ee[_core_component__WEBPACK_IMPORTED_MODULE_2__["UPDATE_IF_NEED"]]();
      } else if (Object(_util__WEBPACK_IMPORTED_MODULE_3__["isNumber"])(p)) {
        vm_e163cba0ee[FOR_UPDATE_ITEM](p);
      }
    });
    return vm_e163cba0ee;
  }

  get loop() {
    return this._l;
  }

  set loop(v) {
    // console.log('set loop');
    this._l = v;
    this[FOR_WAIT_UPDATE] = true;
    this[_core_component__WEBPACK_IMPORTED_MODULE_2__["UPDATE_IF_NEED"]]();
  }

  [_core_component__WEBPACK_IMPORTED_MODULE_2__["RENDER"]]() {
    const roots = this[_core_component__WEBPACK_IMPORTED_MODULE_2__["ROOT_NODES"]];
    const itemRenderFn = this[_core_component__WEBPACK_IMPORTED_MODULE_2__["ARG_COMPONENTS"]] ? this[_core_component__WEBPACK_IMPORTED_MODULE_2__["ARG_COMPONENTS"]][_util__WEBPACK_IMPORTED_MODULE_3__["STR_DEFAULT"]] : null;
    if (!itemRenderFn) {
      roots.push(Object(_dom__WEBPACK_IMPORTED_MODULE_4__["createComment"])(_util__WEBPACK_IMPORTED_MODULE_3__["STR_EMPTY"]));
      return roots;
    }
    const items = this.loop;
    const keyName = this[FOR_KEY_NAME];
    if (keyName !== KEY_INDEX) this[FOR_KEYS] = [];
    if (!Object(_util__WEBPACK_IMPORTED_MODULE_3__["isArray"])(items) || items.length === 0) {
      roots.push(Object(_dom__WEBPACK_IMPORTED_MODULE_4__["createComment"])(_util__WEBPACK_IMPORTED_MODULE_3__["STR_EMPTY"]));
      return roots;
    }
    this[FOR_LENGTH] = items.length;
    return renderItems(
      items,
      itemRenderFn,
      roots,
      this[FOR_KEYS],
      keyName,
      this[_core_component__WEBPACK_IMPORTED_MODULE_2__["CONTEXT"]],
      this[_core_style__WEBPACK_IMPORTED_MODULE_5__["CSTYLE_PID"]]
    );
  }

  [FOR_UPDATE_ITEM](index) {
    const items = this.loop;
    const roots = this[_core_component__WEBPACK_IMPORTED_MODULE_2__["ROOT_NODES"]];
    if (!Object(_util__WEBPACK_IMPORTED_MODULE_3__["isArray"])(items) || index >= roots.length) return;
    const keys = this[FOR_KEYS];
    const item = items[index];
    const oldEl = roots[index];
    if (oldEl.each === item) {
      return;
    }
    const itemRenderFn = this[_core_component__WEBPACK_IMPORTED_MODULE_2__["ARG_COMPONENTS"]] ? this[_core_component__WEBPACK_IMPORTED_MODULE_2__["ARG_COMPONENTS"]][_util__WEBPACK_IMPORTED_MODULE_3__["STR_DEFAULT"]] : null;
    if (!itemRenderFn) return;
    // console.log('update item:', index);
    const keyName = this[FOR_KEY_NAME];
    if (keyName !== KEY_INDEX) {
      const newKey = keyName === KEY_EACH ? item : keyName(item);
      const oldKey = keys[index];
      if (newKey !== oldKey) {
        const $fd = oldEl[_core_component__WEBPACK_IMPORTED_MODULE_2__["GET_FIRST_DOM"]]();
        const newEl = createEl(
          item, index, oldEl.isLast,
          itemRenderFn, this[_core_component__WEBPACK_IMPORTED_MODULE_2__["CONTEXT"]], this[_core_style__WEBPACK_IMPORTED_MODULE_5__["CSTYLE_PID"]]
        );
        const rr = newEl[_core_component__WEBPACK_IMPORTED_MODULE_2__["RENDER"]]();
        Object(_dom__WEBPACK_IMPORTED_MODULE_4__["insertBefore"])(Object(_dom__WEBPACK_IMPORTED_MODULE_4__["getParent"])($fd), rr, $fd);
        oldEl[_core_component__WEBPACK_IMPORTED_MODULE_2__["DESTROY"]]();
        roots[index] = newEl;
        keys[index] = newKey;
        newEl[_core_component__WEBPACK_IMPORTED_MODULE_2__["HANDLE_AFTER_RENDER"]]();
        // console.log('update item render:', index);
      } else {
        oldEl.each = item;
      }
    } else {
      oldEl.each = item;
    }
  }

  [_core_component__WEBPACK_IMPORTED_MODULE_2__["UPDATE"]]() {
    this[FOR_WAIT_UPDATE] = false;
    // console.log('for update');
    const itemRenderFn = this[_core_component__WEBPACK_IMPORTED_MODULE_2__["ARG_COMPONENTS"]] ? this[_core_component__WEBPACK_IMPORTED_MODULE_2__["ARG_COMPONENTS"]][_util__WEBPACK_IMPORTED_MODULE_3__["STR_DEFAULT"]] : null;
    if (!itemRenderFn) return;

    const newItems = Object(_util__WEBPACK_IMPORTED_MODULE_3__["isArray"])(this.loop) ? this.loop : EMP_ARR;
    const roots = this[_core_component__WEBPACK_IMPORTED_MODULE_2__["ROOT_NODES"]];
    const nl = newItems.length;
    const ol = this[FOR_LENGTH];
    // nothing changed, return directly.
    if (nl === 0 && ol === 0) return;

    const keyName = this[FOR_KEY_NAME];
    // if new length equal 0, clear & render comment.
    if (nl === 0 && ol > 0) {
      const fd = roots[0][_core_component__WEBPACK_IMPORTED_MODULE_2__["GET_FIRST_DOM"]]();
      const $cmt = Object(_dom__WEBPACK_IMPORTED_MODULE_4__["createComment"])(_util__WEBPACK_IMPORTED_MODULE_3__["STR_EMPTY"]);
      Object(_dom__WEBPACK_IMPORTED_MODULE_4__["insertBefore"])(Object(_dom__WEBPACK_IMPORTED_MODULE_4__["getParent"])(fd), $cmt, fd);
      for (let i = 0; i < ol; i++) {
        roots[i][_core_component__WEBPACK_IMPORTED_MODULE_2__["DESTROY"]]();
      }
      roots.length = 1;
      roots[0] = $cmt;
      if (keyName !== KEY_INDEX) {
        this[FOR_KEYS].length = 0;
      }
      this[FOR_LENGTH] = 0;
      return;
    }

    this[FOR_LENGTH] = nl;
    const ctx = this[_core_component__WEBPACK_IMPORTED_MODULE_2__["CONTEXT"]];
    const cstyPid = this[_core_style__WEBPACK_IMPORTED_MODULE_5__["CSTYLE_PID"]];
    const firstEl = roots[0]; // if ol === 0, firstEl is comment, else is component
    const $parent = Object(_dom__WEBPACK_IMPORTED_MODULE_4__["getParent"])(ol === 0 ? firstEl : firstEl[_core_component__WEBPACK_IMPORTED_MODULE_2__["GET_FIRST_DOM"]]());

    if (keyName === KEY_INDEX) {
      let $f = null;
      if (ol === 0) roots.length = 0;

      for (let i = 0; i < nl; i++) {
        if (i < ol) {
          updateEl(roots[i], i, newItems);
        } else {
          if (!$f) $f = Object(_dom__WEBPACK_IMPORTED_MODULE_4__["createFragment"])();
          Object(_dom__WEBPACK_IMPORTED_MODULE_4__["appendChild"])($f, ...appendRenderEach(newItems[i], i, i === nl - 1, itemRenderFn, roots, ctx, cstyPid));
        }
      }
      if ($f) {
        const $le = ol === 0 ? firstEl : roots[ol - 1][_core_component__WEBPACK_IMPORTED_MODULE_2__["GET_LAST_DOM"]]();
        Object(_dom__WEBPACK_IMPORTED_MODULE_4__["insertAfter"])($parent, $f, $le);
        for (let i = ol; i < nl; i++) {
          roots[i][_core_component__WEBPACK_IMPORTED_MODULE_2__["HANDLE_AFTER_RENDER"]]();
        }
      }
      if (ol === 0) {
        Object(_dom__WEBPACK_IMPORTED_MODULE_4__["removeChild"])($parent, firstEl);
      }
      if (nl >= ol) return;
      for (let i = nl; i < ol; i++) {
        roots[i][_core_component__WEBPACK_IMPORTED_MODULE_2__["DESTROY"]]();
      }
      roots.splice(nl);

      return;
    }

    const oldKeys = this[FOR_KEYS];
    if (ol === 0) {
      roots.length = 0;
      const rs = renderItems(
        newItems, itemRenderFn, roots,
        oldKeys, keyName, this[_core_component__WEBPACK_IMPORTED_MODULE_2__["CONTEXT"]], this[_core_style__WEBPACK_IMPORTED_MODULE_5__["CSTYLE_PID"]]
      );
      Object(_dom__WEBPACK_IMPORTED_MODULE_4__["insertAfter"])($parent, Object(_dom__WEBPACK_IMPORTED_MODULE_4__["createFragment"])(rs), firstEl);
      Object(_dom__WEBPACK_IMPORTED_MODULE_4__["removeChild"])($parent, firstEl);
      roots.forEach(el => el[_core_component__WEBPACK_IMPORTED_MODULE_2__["HANDLE_AFTER_RENDER"]]());
      return;
    }

    const oldKeyMap = new Map();
    oldKeys.forEach((k, i) => {
      oldKeyMap.set(k, i);
    });
    const newKeys = [];
    const newKeyMap = new Map();
    newItems.forEach((item, i) => {
      _assertVm(item, i);
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
            $lastS = roots[oi][_core_component__WEBPACK_IMPORTED_MODULE_2__["GET_LAST_DOM"]]().nextSibling;
          }
          break;
        } else {
          if (oi === ol - 1) {
            $lastS = roots[oi][_core_component__WEBPACK_IMPORTED_MODULE_2__["GET_LAST_DOM"]]().nextSibling;
          }
          roots[oi][_core_component__WEBPACK_IMPORTED_MODULE_2__["DESTROY"]]();
          oi++;
        }
      }
      if (oi >= ol) {
        let $f = null;
        const cei = newRoots.length;
        for (; ni < nl; ni++) {
          const el = createEl(newItems[ni], ni, ni === nl - 1, itemRenderFn, ctx, cstyPid);
          if (!$f) $f = Object(_dom__WEBPACK_IMPORTED_MODULE_4__["createFragment"])();
          Object(_dom__WEBPACK_IMPORTED_MODULE_4__["appendChild"])($f, ...el[_core_component__WEBPACK_IMPORTED_MODULE_2__["RENDER"]]());
          newRoots.push(el);
        }
        if ($f) {
          if ($lastS) {
            Object(_dom__WEBPACK_IMPORTED_MODULE_4__["insertBefore"])($parent, $f, $lastS);
          } else {
            Object(_dom__WEBPACK_IMPORTED_MODULE_4__["appendChild"])($parent, $f);
          }
          for (let i = cei; i < newRoots.length; i++) {
            newRoots[i][_core_component__WEBPACK_IMPORTED_MODULE_2__["HANDLE_AFTER_RENDER"]]();
          }
        }
        break;
      }
      const oldKey = oldKeys[oi];
      let $f = null;
      let $nes = null;
      while (ni < nl) {
        const newKey = newKeys[ni];
        if (newKey === oldKey) break;

        let reuseEl = null;
        if (oldKeyMap.has(newKey)) {
          const oldIdx = oldKeyMap.get(newKey);
          if (oldIdx > oi && oldTags[oldIdx] === 0) {
            reuseEl = roots[oldIdx];
            oldTags[oldIdx] = 1;
          }
        }
        if (!$f) $f = Object(_dom__WEBPACK_IMPORTED_MODULE_4__["createFragment"])();
        if (!reuseEl) {
          reuseEl = createEl(newItems[ni], ni, ni === nl - 1, itemRenderFn, ctx, cstyPid);
          Object(_dom__WEBPACK_IMPORTED_MODULE_4__["appendChild"])($f, ...reuseEl[_core_component__WEBPACK_IMPORTED_MODULE_2__["RENDER"]]());
          if (!$nes) $nes = [];
          $nes.push(reuseEl);
        } else {
          loopAppend($f, reuseEl);
          updateEl(reuseEl, ni, newItems);
        }
        newRoots.push(reuseEl);
        ni++;
      }
      if (ni >= nl) {
        Object(_util__WEBPACK_IMPORTED_MODULE_3__["assertFail"])('unimpossible?!');
      }
      const el = roots[oi];
      $f && Object(_dom__WEBPACK_IMPORTED_MODULE_4__["insertBefore"])($parent, $f, el[_core_component__WEBPACK_IMPORTED_MODULE_2__["GET_FIRST_DOM"]]());
      $nes && $nes.forEach(el => el[_core_component__WEBPACK_IMPORTED_MODULE_2__["HANDLE_AFTER_RENDER"]]());
      updateEl(el, ni, newItems);
      newRoots.push(el);
      oi++;
      ni++;
    }

    this[_core_component__WEBPACK_IMPORTED_MODULE_2__["ROOT_NODES"]] = newRoots;
    this[FOR_KEYS] = newKeys;
  }
}


/***/ }),

/***/ "../../jinge-framework/components/hide.js":
/*!****************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/components/hide.js ***!
  \****************************************************************/
/*! exports provided: STR_JG_HIDE, HideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STR_JG_HIDE", function() { return STR_JG_HIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HideComponent", function() { return HideComponent; });
/* harmony import */ var _viewmodel_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../viewmodel/proxy */ "../../jinge-framework/viewmodel/proxy.js");
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class */ "../../jinge-framework/components/class.js");
/* harmony import */ var _viewmodel_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../viewmodel/core */ "../../jinge-framework/viewmodel/core.js");




const STR_JG_HIDE = 'jg-hide';

class HideComponent extends _class__WEBPACK_IMPORTED_MODULE_1__["ToggleClassComponent"] {
  constructor(attrs) {
    attrs.class = Object(_viewmodel_proxy__WEBPACK_IMPORTED_MODULE_0__["wrapViewModel"])({
      [STR_JG_HIDE]: !!attrs.test
    });
    Object(_viewmodel_core__WEBPACK_IMPORTED_MODULE_2__["vmWatch"])(attrs, 'test', () => {
      if (attrs.class[STR_JG_HIDE] !== attrs.test) {
        attrs.class[STR_JG_HIDE] = attrs.test;
      }
    });
    // eslint-disable-next-line constructor-super
    return super(attrs);
  }
}


/***/ }),

/***/ "../../jinge-framework/components/html.js":
/*!****************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/components/html.js ***!
  \****************************************************************/
/*! exports provided: BindHtmlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BindHtmlComponent", function() { return BindHtmlComponent; });
/* harmony import */ var _viewmodel_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../viewmodel/core */ "../../jinge-framework/viewmodel/core.js");
/* harmony import */ var _viewmodel_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../viewmodel/proxy */ "../../jinge-framework/viewmodel/proxy.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/component */ "../../jinge-framework/core/component.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom */ "../../jinge-framework/dom/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util */ "../../jinge-framework/util/index.js");








function renderHtml(content) {
  const $d = Object(_dom__WEBPACK_IMPORTED_MODULE_3__["createElementWithoutAttrs"])('div');
  $d.innerHTML = content || '';
  let cn = $d.childNodes;
  if (cn.length === 0) {
    cn = [Object(_dom__WEBPACK_IMPORTED_MODULE_3__["createComment"])(_util__WEBPACK_IMPORTED_MODULE_4__["STR_EMPTY"])];
  } else {
    cn = [].slice.call(cn); // convert NodeList to Array.
  }
  return cn;
}

class BindHtmlComponent extends _core_component__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(attrs) {
    if (attrs[_core_component__WEBPACK_IMPORTED_MODULE_2__["ARG_COMPONENTS"]])
      throw new Error('<bind-html/> don\'t accept any child.');
    if (!('content' in attrs))
      throw new Error('<bind-html/> require "content" attribute');
    const vm_e163cba0ee = super(attrs);
    const fn_e163cba0ee_3 = () => {
      vm_e163cba0ee.c = attrs.content;
    };
    fn_e163cba0ee_3();
    attrs[_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]]('content', fn_e163cba0ee_3);
    return vm_e163cba0ee;
  }

  get c() {
    return this._c;
  }

  set c(v) {
    if (this._c === v) return;
    this._c = v;
    this[_core_component__WEBPACK_IMPORTED_MODULE_2__["UPDATE_IF_NEED"]]();
  }

  [_core_component__WEBPACK_IMPORTED_MODULE_2__["RENDER"]]() {
    return (this[_core_component__WEBPACK_IMPORTED_MODULE_2__["ROOT_NODES"]] = renderHtml(this._c));
  }

  [_core_component__WEBPACK_IMPORTED_MODULE_2__["UPDATE"]]() {
    const roots = this[_core_component__WEBPACK_IMPORTED_MODULE_2__["ROOT_NODES"]];
    const oldFirstEl = roots[0];
    const $p = Object(_dom__WEBPACK_IMPORTED_MODULE_3__["getParent"])(oldFirstEl);
    const newEls = renderHtml(this._c);
    Object(_dom__WEBPACK_IMPORTED_MODULE_3__["insertBefore"])($p, newEls, oldFirstEl);
    roots.forEach(oldEl => Object(_dom__WEBPACK_IMPORTED_MODULE_3__["removeChild"])($p, oldEl));
    this[_core_component__WEBPACK_IMPORTED_MODULE_2__["ROOT_NODES"]] = newEls;
  }
}


/***/ }),

/***/ "../../jinge-framework/components/i18n.js":
/*!****************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/components/i18n.js ***!
  \****************************************************************/
/*! exports provided: I18nComponent, _TComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18nComponent", function() { return I18nComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_TComponent", function() { return _TComponent; });
/* harmony import */ var _viewmodel_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../viewmodel/core */ "../../jinge-framework/viewmodel/core.js");
/* harmony import */ var _viewmodel_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../viewmodel/proxy */ "../../jinge-framework/viewmodel/proxy.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/component */ "../../jinge-framework/core/component.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom */ "../../jinge-framework/dom/index.js");
/* harmony import */ var _core_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/i18n */ "../../jinge-framework/core/i18n.js");
/* harmony import */ var _core_messenger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/messenger */ "../../jinge-framework/core/messenger.js");











function render() {
  if (this._h) {
    const $c = Object(_dom__WEBPACK_IMPORTED_MODULE_3__["createElementWithoutAttrs"])('div');
    $c.innerHTML = this._r();
    this[_core_component__WEBPACK_IMPORTED_MODULE_2__["ROOT_NODES"]].push(...$c.childNodes);
  } else {
    const el = Object(_dom__WEBPACK_IMPORTED_MODULE_3__["createTextNode"])(this._r());
    this[_core_component__WEBPACK_IMPORTED_MODULE_2__["ROOT_NODES"]].push(el);
  }
  return this[_core_component__WEBPACK_IMPORTED_MODULE_2__["ROOT_NODES"]];
}

function update() {
  const roots = this[_core_component__WEBPACK_IMPORTED_MODULE_2__["ROOT_NODES"]];
  if (this._h) {
    const p = Object(_dom__WEBPACK_IMPORTED_MODULE_3__["getParent"])(roots[0]);
    if (roots.length > 0) {
      roots.forEach(n => Object(_dom__WEBPACK_IMPORTED_MODULE_3__["removeChild"])(p, n));
      roots.length = 0;
    }
    Object(_dom__WEBPACK_IMPORTED_MODULE_3__["appendChild"])(p, this[_core_component__WEBPACK_IMPORTED_MODULE_2__["RENDER"]]());
  } else {
    Object(_dom__WEBPACK_IMPORTED_MODULE_3__["setText"])(roots[0], this._r());
  }
}

const I18nComponentsCache = new Map();
class I18nComponent extends _core_component__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  static prefix(prefix, cache = true) {
    let C = I18nComponentsCache.get(prefix);
    if (C) return C;
    /* eslint no-new-func:"off" */
    C = new Function('BaseI18n', `
    return class I18n_${prefix.replace(/\./g, '_')} extends BaseI18n {
      constructor(attrs) {
        const vm = super(attrs);
        this._f = '${prefix}';
        return vm;
      }
    }`)(I18nComponent);
    if (cache) {
      I18nComponentsCache.set(prefix, C);
    }
    return C;
  }

  constructor(attrs) {
    if (!attrs.key)
      throw new Error('I18n component require attribute "key". see https://todo');
    const vm_e163cba0ee = super(attrs);
    const fn_e163cba0ee_2 = () => {
      vm_e163cba0ee.k = attrs.key;
    };
    fn_e163cba0ee_2();
    attrs[_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]]('key', fn_e163cba0ee_2);
    const fn_e163cba0ee_3 = () => {
      vm_e163cba0ee.p = attrs.params;
    };
    fn_e163cba0ee_3();
    attrs[_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]]('params', fn_e163cba0ee_3);
    vm_e163cba0ee._h = !!attrs.html;
    vm_e163cba0ee._f = '';
    vm_e163cba0ee._o = vm_e163cba0ee[_core_component__WEBPACK_IMPORTED_MODULE_2__["UPDATE_IF_NEED"]].bind(this);
    Object(_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["vmWatch"])(this, 'p.**', vm_e163cba0ee._o);
    _core_i18n__WEBPACK_IMPORTED_MODULE_4__["messenger"][_core_messenger__WEBPACK_IMPORTED_MODULE_5__["ON"]](_core_i18n__WEBPACK_IMPORTED_MODULE_4__["I18N_DATA_CHANGED"], vm_e163cba0ee._o);
    return vm_e163cba0ee;
  }

  [_core_component__WEBPACK_IMPORTED_MODULE_2__["BEFORE_DESTROY"]]() {
    Object(_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["vmUnwatch"])(this, 'p.**', this._o);
    _core_i18n__WEBPACK_IMPORTED_MODULE_4__["messenger"][_core_messenger__WEBPACK_IMPORTED_MODULE_5__["OFF"]](_core_i18n__WEBPACK_IMPORTED_MODULE_4__["I18N_DATA_CHANGED"], this._o);
  }

  get k() {
    return this._k;
  }

  set k(v) {
    if (this._k === v) return;
    this._k = v;
    this[_core_component__WEBPACK_IMPORTED_MODULE_2__["UPDATE_IF_NEED"]]();
  }

  /**
   * render text
   */
  _r() {
    return Object(_core_i18n__WEBPACK_IMPORTED_MODULE_4__["i18n"])((this._f ? `${this._f}.` : '') + this._k, this.p);
  }

  [_core_component__WEBPACK_IMPORTED_MODULE_2__["RENDER"]]() {
    return render.call(this);
  }

  [_core_component__WEBPACK_IMPORTED_MODULE_2__["UPDATE"]]() {
    update.call(this);
  }
}

class _TComponent extends _core_component__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(attrs) {
    const vm_e163cba0ee = super(attrs);
    const fn_e163cba0ee_1 = () => {
      vm_e163cba0ee.p = attrs.params;
    };
    fn_e163cba0ee_1();
    attrs[_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]]('params', fn_e163cba0ee_1);
    vm_e163cba0ee._t = attrs.text;
    vm_e163cba0ee._h = !!attrs.html;
    Object(_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["vmWatch"])(this, 'p.**', () => vm_e163cba0ee[_core_component__WEBPACK_IMPORTED_MODULE_2__["UPDATE_IF_NEED"]]());
    return vm_e163cba0ee;
  }

  beforeDestroy() {
    Object(_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["vmUnwatch"])(this, 'p.**');
  }

  _r() {
    return Object(_core_i18n__WEBPACK_IMPORTED_MODULE_4__["_t"])(this._t, this.p);
  }

  [_core_component__WEBPACK_IMPORTED_MODULE_2__["RENDER"]]() {
    return render.call(this);
  }

  [_core_component__WEBPACK_IMPORTED_MODULE_2__["UPDATE"]]() {
    update.call(this);
  }
}


/***/ }),

/***/ "../../jinge-framework/components/if.js":
/*!**************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/components/if.js ***!
  \**************************************************************/
/*! exports provided: IfComponent, SwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IfComponent", function() { return IfComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchComponent", function() { return SwitchComponent; });
/* harmony import */ var _viewmodel_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../viewmodel/core */ "../../jinge-framework/viewmodel/core.js");
/* harmony import */ var _viewmodel_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../viewmodel/proxy */ "../../jinge-framework/viewmodel/proxy.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/component */ "../../jinge-framework/core/component.js");
/* harmony import */ var _core_messenger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/messenger */ "../../jinge-framework/core/messenger.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom */ "../../jinge-framework/dom/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util */ "../../jinge-framework/util/index.js");
/* harmony import */ var _core_transition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/transition */ "../../jinge-framework/core/transition.js");
/* harmony import */ var _core_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/style */ "../../jinge-framework/core/style.js");














const IF_STR_ELSE = 'else';
const T_MAP = Object(_util__WEBPACK_IMPORTED_MODULE_5__["Symbol"])('transition_map');
const P_VAL = Object(_util__WEBPACK_IMPORTED_MODULE_5__["Symbol"])('previous_value');
const OE_H = Object(_util__WEBPACK_IMPORTED_MODULE_5__["Symbol"])('on_end_handler');

const C_BV = Object(_util__WEBPACK_IMPORTED_MODULE_5__["Symbol"])('current_branch_value');
const C_VAL = Object(_util__WEBPACK_IMPORTED_MODULE_5__["Symbol"])('current_value');
const ON_TS_END = Object(_util__WEBPACK_IMPORTED_MODULE_5__["Symbol"])('on_ts_end');

function createEl(renderFn, context, parentStyleIds) {
  const el = new _core_component__WEBPACK_IMPORTED_MODULE_2__["Component"](Object(_viewmodel_proxy__WEBPACK_IMPORTED_MODULE_1__["wrapAttrs"])({
    [_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["VM_DEBUG_NAME"]]: 'attrs_of_<if>',
    [_core_component__WEBPACK_IMPORTED_MODULE_2__["CONTEXT"]]: context,
    [_core_component__WEBPACK_IMPORTED_MODULE_2__["ARG_COMPONENTS"]]: {
      [_util__WEBPACK_IMPORTED_MODULE_5__["STR_DEFAULT"]]: renderFn
    }
  }));
  parentStyleIds && Object(_core_style__WEBPACK_IMPORTED_MODULE_7__["addParentStyleId"])(el, parentStyleIds);
  return el;
}

function renderSwitch(component) {
  const value = component[C_VAL];
  const acs = component[_core_component__WEBPACK_IMPORTED_MODULE_2__["ARG_COMPONENTS"]];
  if (component.ts && acs) {
    const t = Object(_util__WEBPACK_IMPORTED_MODULE_5__["createEmptyObject"])();
    for (const k in acs) {
      t[k] = [
        k === value ? _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_STATE_ENTERED"] : _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_STATE_LEAVED"],
        null // element
      ];
    }
    component[T_MAP] = t;
    component[P_VAL] = value;
    component[OE_H] = component[ON_TS_END].bind(component);
  }
  const renderFn = acs ? acs[value] : null;
  const roots = component[_core_component__WEBPACK_IMPORTED_MODULE_2__["ROOT_NODES"]];
  if (!renderFn) {
    roots.push(Object(_dom__WEBPACK_IMPORTED_MODULE_4__["createComment"])(_util__WEBPACK_IMPORTED_MODULE_5__["STR_EMPTY"]));
    return roots;
  }
  const el = createEl(renderFn, component[_core_component__WEBPACK_IMPORTED_MODULE_2__["CONTEXT"]], component[_core_style__WEBPACK_IMPORTED_MODULE_7__["CSTYLE_PID"]]);
  roots.push(el);
  return el[_core_component__WEBPACK_IMPORTED_MODULE_2__["RENDER"]]();
}

function updateSwitch(component) {
  if (!Object(_core_component__WEBPACK_IMPORTED_MODULE_2__["isComponent"])(component[_core_component__WEBPACK_IMPORTED_MODULE_2__["ROOT_NODES"]][0]) && (
    !component[_core_component__WEBPACK_IMPORTED_MODULE_2__["ARG_COMPONENTS"]] || !component[_core_component__WEBPACK_IMPORTED_MODULE_2__["ARG_COMPONENTS"]][component[C_VAL]]
  )) {
    return;
  }

  if (component[T_MAP]) {
    return updateSwitchWithTransition(component);
  }

  doUpdate(component);
}

function doUpdate(component) {
  const roots = component[_core_component__WEBPACK_IMPORTED_MODULE_2__["ROOT_NODES"]];
  const el = roots[0];
  const isC = Object(_core_component__WEBPACK_IMPORTED_MODULE_2__["isComponent"])(el);
  const fd = isC ? el[_core_component__WEBPACK_IMPORTED_MODULE_2__["GET_FIRST_DOM"]]() : el;
  const pa = Object(_dom__WEBPACK_IMPORTED_MODULE_4__["getParent"])(isC ? fd : el);
  const renderFn = component[_core_component__WEBPACK_IMPORTED_MODULE_2__["ARG_COMPONENTS"]] ? component[_core_component__WEBPACK_IMPORTED_MODULE_2__["ARG_COMPONENTS"]][component[C_VAL]] : null;
  const ne = renderFn ? createEl(renderFn, component[_core_component__WEBPACK_IMPORTED_MODULE_2__["CONTEXT"]], component[_core_style__WEBPACK_IMPORTED_MODULE_7__["CSTYLE_PID"]]) : null;
  roots[0] = ne || Object(_dom__WEBPACK_IMPORTED_MODULE_4__["createComment"])(_util__WEBPACK_IMPORTED_MODULE_5__["STR_EMPTY"]);
  Object(_dom__WEBPACK_IMPORTED_MODULE_4__["insertBefore"])(
    pa,
    ne ? ne[_core_component__WEBPACK_IMPORTED_MODULE_2__["RENDER"]]() : roots[0],
    fd
  );
  if (isC) {
    el[_core_component__WEBPACK_IMPORTED_MODULE_2__["DESTROY"]]();
  } else {
    Object(_dom__WEBPACK_IMPORTED_MODULE_4__["removeChild"])(pa, fd);
  }
  ne && renderFn && ne[_core_component__WEBPACK_IMPORTED_MODULE_2__["HANDLE_AFTER_RENDER"]]();
  component[_core_messenger__WEBPACK_IMPORTED_MODULE_3__["NOTIFY"]]('branch-switched', component[C_BV]);
}

function cancelTs(t, tn, e, component) {
  const el = t[1];
  if (el.nodeType !== Node.ELEMENT_NODE) {
    return;
  }
  const onEnd = component[OE_H];
  Object(_dom__WEBPACK_IMPORTED_MODULE_4__["removeClass"])(el, tn + (e ? _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_C_ENTER"] : _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_C_LEAVE"]));
  Object(_dom__WEBPACK_IMPORTED_MODULE_4__["removeClass"])(el, tn + (e ? _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_C_ENTER_ACTIVE"] : _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_C_LEAVE_ACTIVE"]));
  Object(_dom__WEBPACK_IMPORTED_MODULE_4__["removeEvent"])(el, _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_TRANSITION_END"], onEnd);
  Object(_dom__WEBPACK_IMPORTED_MODULE_4__["removeEvent"])(el, _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_ANIMATION_END"], onEnd);
  component[_core_messenger__WEBPACK_IMPORTED_MODULE_3__["NOTIFY"]](_core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_TRANSITION"], e ? _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_ENTER_CANCELLED"] : _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_LEAVE_CANCELLED"], el);
}

function startTs(t, tn, e, component) {
  const el = t[1];
  const onEnd = component[OE_H];
  if (el.nodeType !== Node.ELEMENT_NODE) {
    Object(_util__WEBPACK_IMPORTED_MODULE_5__["raf"])(onEnd);
    return;
  }
  const classOfStart = tn + (e ? _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_C_ENTER"] : _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_C_LEAVE"]);
  const classOfActive = tn + (e ? _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_C_ENTER_ACTIVE"] : _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_C_LEAVE_ACTIVE"]);

  Object(_dom__WEBPACK_IMPORTED_MODULE_4__["addClass"])(el, classOfStart);
  // force render by calling getComputedStyle
  Object(_core_transition__WEBPACK_IMPORTED_MODULE_6__["getDurationType"])(el);
  Object(_dom__WEBPACK_IMPORTED_MODULE_4__["addClass"])(el, classOfActive);
  const tsEndName = Object(_core_transition__WEBPACK_IMPORTED_MODULE_6__["getDurationType"])(el);
  if (!tsEndName) {
    Object(_util__WEBPACK_IMPORTED_MODULE_5__["raf"])(onEnd);
    return;
  }
  t[0] = e ? _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_STATE_ENTERING"] : _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_STATE_LEAVING"];
  Object(_dom__WEBPACK_IMPORTED_MODULE_4__["addEvent"])(el, tsEndName, onEnd);
  component[_core_messenger__WEBPACK_IMPORTED_MODULE_3__["NOTIFY"]](_core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_TRANSITION"], e ? _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_BEFORE_ENTER"] : _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_BEFORE_LEAVE"], el);
  Object(_util__WEBPACK_IMPORTED_MODULE_5__["raf"])(() => {
    component[_core_messenger__WEBPACK_IMPORTED_MODULE_3__["NOTIFY"]](_core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_TRANSITION"], e ? _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_ENTER"] : _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_LEAVE"], el);
  });
}
function updateSwitchWithTransition(component) {
  const value = component[C_VAL];
  const pv = component[P_VAL];
  const tn = component.ts;
  let pt = component[T_MAP][pv];
  if (!pt) {
    pt = [
      pv === IF_STR_ELSE ? _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_STATE_LEAVED"] : _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_STATE_ENTERED"],
      null, null
    ];
    component[T_MAP][pv] = pt;
  }
  // debugger;
  if (pt[0] === _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_STATE_ENTERING"]) {
    if (value === pv) return;
    cancelTs(pt, tn, true, component);
    startTs(pt, tn, false, component);
  } else if (pt[0] === _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_STATE_LEAVING"]) {
    if (value !== pv) return;
    cancelTs(pt, tn, false, component);
    startTs(pt, tn, true, component);
  } else if (pt[0] === _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_STATE_ENTERED"]) {
    pt[1] = component[_core_component__WEBPACK_IMPORTED_MODULE_2__["GET_TRANSITION_DOM"]]();
    startTs(pt, tn, false, component);
  } else if (pt[0] === _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_STATE_LEAVED"]) {
    pt[1] = component[_core_component__WEBPACK_IMPORTED_MODULE_2__["GET_TRANSITION_DOM"]]();
    startTs(pt, tn, true, component);
  }
}

function updateSwitchOnTransitionEnd(component) {
  // console.log('on end')
  const value = component[C_VAL];
  const pv = component[P_VAL];
  const tn = component.ts;
  const pt = component[T_MAP][pv];
  const e = pt[0] === _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_STATE_ENTERING"];
  const el = pt[1];

  if (el.nodeType === Node.ELEMENT_NODE) {
    Object(_dom__WEBPACK_IMPORTED_MODULE_4__["removeEvent"])(el, _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_TRANSITION_END"], component[OE_H]);
    Object(_dom__WEBPACK_IMPORTED_MODULE_4__["removeEvent"])(el, _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_ANIMATION_END"], component[OE_H]);
    Object(_dom__WEBPACK_IMPORTED_MODULE_4__["removeClass"])(el, tn + (e ? _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_C_ENTER"] : _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_C_LEAVE"]));
    Object(_dom__WEBPACK_IMPORTED_MODULE_4__["removeClass"])(el, tn + (e ? _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_C_ENTER_ACTIVE"] : _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_C_LEAVE_ACTIVE"]));
    component[_core_messenger__WEBPACK_IMPORTED_MODULE_3__["NOTIFY"]](_core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_TRANSITION"], e ? _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_AFTER_ENTER"] : _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_AFTER_LEAVE"]);
  }

  pt[0] = e ? _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_STATE_ENTERED"] : _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_STATE_LEAVED"];

  if (e) return;

  doUpdate(component);
  component[P_VAL] = value;
  const ct = component[T_MAP][value];
  if (!ct) {
    return;
  }
  const fd = component[_core_component__WEBPACK_IMPORTED_MODULE_2__["GET_TRANSITION_DOM"]]();
  if (fd.nodeType !== Node.ELEMENT_NODE) {
    ct[0] = _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_STATE_ENTERED"];
    return;
  }

  ct[1] = fd;
  startTs(ct, tn, true, component);
}

class IfComponent extends _core_component__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(attrs) {
    const vm_e163cba0ee = super(attrs);
    const fn_e163cba0ee_1 = () => {
      vm_e163cba0ee.expect = attrs.expect;
    };
    fn_e163cba0ee_1();
    attrs[_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]]('expect', fn_e163cba0ee_1);
    const fn_e163cba0ee_2 = () => {
      vm_e163cba0ee.ts = attrs.transition;
    };
    fn_e163cba0ee_2();
    attrs[_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]]('transition', fn_e163cba0ee_2);
    return vm_e163cba0ee;
  }

  get expect() {
    return this[C_VAL] === _util__WEBPACK_IMPORTED_MODULE_5__["STR_DEFAULT"];
  }

  set expect(v) {
    v = v ? _util__WEBPACK_IMPORTED_MODULE_5__["STR_DEFAULT"] : IF_STR_ELSE;
    if (this[C_VAL] === v) return;
    this[C_VAL] = v;
    this[_core_component__WEBPACK_IMPORTED_MODULE_2__["UPDATE_IF_NEED"]]();
  }

  get [C_BV]() {
    return this.expect;
  }

  [ON_TS_END]() {
    updateSwitchOnTransitionEnd(this);
  }

  [_core_component__WEBPACK_IMPORTED_MODULE_2__["RENDER"]]() {
    return renderSwitch(this);
  }

  [_core_component__WEBPACK_IMPORTED_MODULE_2__["UPDATE"]]() {
    updateSwitch(this);
  }
}

class SwitchComponent extends _core_component__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(attrs) {
    const vm_e163cba0ee = super(attrs);
    const fn_e163cba0ee_1 = () => {
      vm_e163cba0ee.test = attrs.test;
    };
    fn_e163cba0ee_1();
    attrs[_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]]('test', fn_e163cba0ee_1);
    const fn_e163cba0ee_2 = () => {
      vm_e163cba0ee.ts = attrs.transition;
    };
    fn_e163cba0ee_2();
    attrs[_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]]('transition', fn_e163cba0ee_2);
    return vm_e163cba0ee;
  }

  get test() {
    return this[C_VAL];
  }

  set test(v) {
    const acs = this[_core_component__WEBPACK_IMPORTED_MODULE_2__["ARG_COMPONENTS"]];
    if (!acs || !(v in acs)) {
      v = _util__WEBPACK_IMPORTED_MODULE_5__["STR_DEFAULT"];
    }
    if (this[C_VAL] === v) return;
    this[C_VAL] = v;
    this[_core_component__WEBPACK_IMPORTED_MODULE_2__["UPDATE_IF_NEED"]]();
  }

  get [C_BV]() {
    return this.test;
  }

  [ON_TS_END]() {
    updateSwitchOnTransitionEnd(this);
  }

  [_core_component__WEBPACK_IMPORTED_MODULE_2__["RENDER"]]() {
    return renderSwitch(this);
  }

  [_core_component__WEBPACK_IMPORTED_MODULE_2__["UPDATE"]]() {
    updateSwitch(this);
  }
}


/***/ }),

/***/ "../../jinge-framework/components/index.js":
/*!*****************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/components/index.js ***!
  \*****************************************************************/
/*! exports provided: ToggleClassComponent, FOR_LENGTH, FOR_KEYS, FOR_KEY_NAME, FOR_WAIT_UPDATE, FOR_UPDATE_ITEM, ForEachComponent, ForComponent, STR_JG_HIDE, HideComponent, BindHtmlComponent, I18nComponent, _TComponent, IfComponent, SwitchComponent, ParameterComponent, LogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class */ "../../jinge-framework/components/class.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleClassComponent", function() { return _class__WEBPACK_IMPORTED_MODULE_0__["ToggleClassComponent"]; });

/* harmony import */ var _for__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./for */ "../../jinge-framework/components/for.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FOR_LENGTH", function() { return _for__WEBPACK_IMPORTED_MODULE_1__["FOR_LENGTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FOR_KEYS", function() { return _for__WEBPACK_IMPORTED_MODULE_1__["FOR_KEYS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FOR_KEY_NAME", function() { return _for__WEBPACK_IMPORTED_MODULE_1__["FOR_KEY_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FOR_WAIT_UPDATE", function() { return _for__WEBPACK_IMPORTED_MODULE_1__["FOR_WAIT_UPDATE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FOR_UPDATE_ITEM", function() { return _for__WEBPACK_IMPORTED_MODULE_1__["FOR_UPDATE_ITEM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForEachComponent", function() { return _for__WEBPACK_IMPORTED_MODULE_1__["ForEachComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForComponent", function() { return _for__WEBPACK_IMPORTED_MODULE_1__["ForComponent"]; });

/* harmony import */ var _hide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hide */ "../../jinge-framework/components/hide.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STR_JG_HIDE", function() { return _hide__WEBPACK_IMPORTED_MODULE_2__["STR_JG_HIDE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HideComponent", function() { return _hide__WEBPACK_IMPORTED_MODULE_2__["HideComponent"]; });

/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html */ "../../jinge-framework/components/html.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BindHtmlComponent", function() { return _html__WEBPACK_IMPORTED_MODULE_3__["BindHtmlComponent"]; });

/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./i18n */ "../../jinge-framework/components/i18n.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18nComponent", function() { return _i18n__WEBPACK_IMPORTED_MODULE_4__["I18nComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_TComponent", function() { return _i18n__WEBPACK_IMPORTED_MODULE_4__["_TComponent"]; });

/* harmony import */ var _if__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./if */ "../../jinge-framework/components/if.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IfComponent", function() { return _if__WEBPACK_IMPORTED_MODULE_5__["IfComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitchComponent", function() { return _if__WEBPACK_IMPORTED_MODULE_5__["SwitchComponent"]; });

/* harmony import */ var _parameter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parameter */ "../../jinge-framework/components/parameter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParameterComponent", function() { return _parameter__WEBPACK_IMPORTED_MODULE_6__["ParameterComponent"]; });

/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./log */ "../../jinge-framework/components/log.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogComponent", function() { return _log__WEBPACK_IMPORTED_MODULE_7__["LogComponent"]; });











/***/ }),

/***/ "../../jinge-framework/components/log.js":
/*!***************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/components/log.js ***!
  \***************************************************************/
/*! exports provided: LogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogComponent", function() { return LogComponent; });
/* harmony import */ var _viewmodel_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../viewmodel/core */ "../../jinge-framework/viewmodel/core.js");
/* harmony import */ var _viewmodel_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../viewmodel/proxy */ "../../jinge-framework/viewmodel/proxy.js");
/* harmony import */ var _core_component_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/component.js */ "../../jinge-framework/core/component.js");
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom/index.js */ "../../jinge-framework/dom/index.js");







/**
 * This component is only for development purpose
 */
class LogComponent extends _core_component_js__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(attrs) {
    const vm_e163cba0ee = super(attrs);
    const fn_e163cba0ee_1 = () => {
      vm_e163cba0ee.msg = attrs.msg;
    };
    fn_e163cba0ee_1();
    attrs[_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]]('msg', fn_e163cba0ee_1);
    return vm_e163cba0ee;
  }

  set msg(v) {
    console.log(v);
    this._msg = v;
  }

  get msg() {
    return this._msg;
  }

  [_core_component_js__WEBPACK_IMPORTED_MODULE_2__["RENDER"]]() {
    return [Object(_dom_index_js__WEBPACK_IMPORTED_MODULE_3__["createComment"])('log placeholder')];
  }
}


/***/ }),

/***/ "../../jinge-framework/components/parameter.js":
/*!*********************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/components/parameter.js ***!
  \*********************************************************************/
/*! exports provided: ParameterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParameterComponent", function() { return ParameterComponent; });
/* harmony import */ var _viewmodel_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../viewmodel/core */ "../../jinge-framework/viewmodel/core.js");
/* harmony import */ var _viewmodel_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../viewmodel/proxy */ "../../jinge-framework/viewmodel/proxy.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/component */ "../../jinge-framework/core/component.js");







class ParameterComponent extends _core_component__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(attrs, params) {
    const vm_e163cba0ee = super(attrs);
    params.forEach(p => {
      vm_e163cba0ee[p] = attrs[p];
      attrs[_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]](p, () => {
        vm_e163cba0ee[p] = attrs[p];
      });
    });
    return vm_e163cba0ee;
  }
}


/***/ }),

/***/ "../../jinge-framework/config/index.js":
/*!*************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/config/index.js ***!
  \*************************************************************/
/*! exports provided: CFG_VM_DEBUG, CFG_I18N_WARN_KEY_NOT_FOUND, config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CFG_VM_DEBUG", function() { return CFG_VM_DEBUG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CFG_I18N_WARN_KEY_NOT_FOUND", function() { return CFG_I18N_WARN_KEY_NOT_FOUND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge-framework/util/index.js");


const CFG_VM_DEBUG = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('vm_debug');
const CFG_I18N_WARN_KEY_NOT_FOUND = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('i18n_warn_key_not_found');

const config = {
  [CFG_VM_DEBUG]: false,
  [CFG_I18N_WARN_KEY_NOT_FOUND]: true
};


/***/ }),

/***/ "../../jinge-framework/core/bootstrap.js":
/*!***************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/core/bootstrap.js ***!
  \***************************************************************/
/*! exports provided: bootstrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrap", function() { return bootstrap; });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "../../jinge-framework/core/component.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "../../jinge-framework/util/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "../../jinge-framework/config/index.js");
/* harmony import */ var _viewmodel_proxy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../viewmodel/proxy */ "../../jinge-framework/viewmodel/proxy.js");
/* harmony import */ var _viewmodel_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../viewmodel/core */ "../../jinge-framework/viewmodel/core.js");






function bootstrap(Component, dom, attrs) {
  if (dom === document.body) {
    throw new Error('bootstrap dom cannot be document.body');
  }
  /**
   * as we must pass ViewModel-Object as first argument to Component constructor,
   * we simple pass an empty attrs.
   */
  const bootAttrs = Object(_util__WEBPACK_IMPORTED_MODULE_1__["createEmptyObject"])();
  attrs && Object(_util__WEBPACK_IMPORTED_MODULE_1__["assignObject"])(bootAttrs, attrs);

  if (_config__WEBPACK_IMPORTED_MODULE_2__["config"][_config__WEBPACK_IMPORTED_MODULE_2__["CFG_VM_DEBUG"]]) {
    bootAttrs[_viewmodel_core__WEBPACK_IMPORTED_MODULE_4__["VM_DEBUG_NAME"]] = 'attrs_of_<root>';
  }
  const bootComponent = new Component(Object(_viewmodel_proxy__WEBPACK_IMPORTED_MODULE_3__["wrapAttrs"])(bootAttrs));
  if (!Object(_component__WEBPACK_IMPORTED_MODULE_0__["isComponent"])(bootComponent)) Object(_util__WEBPACK_IMPORTED_MODULE_1__["assertFail"])();
  bootComponent[_component__WEBPACK_IMPORTED_MODULE_0__["RENDER_TO_DOM"]](dom);
}


/***/ }),

/***/ "../../jinge-framework/core/component.js":
/*!***************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/core/component.js ***!
  \***************************************************************/
/*! exports provided: NOTIFY_TRANSITION, TEMPLATE_RENDER, RENDER, RENDER_TO_DOM, ARG_COMPONENTS, PASSED_ATTRS, CLONE, DESTROY, CONTEXT, CONTEXT_STATE, ROOT_NODES, NON_ROOT_COMPONENT_NODES, REF_NODES, SET_REF_NODE, REF_BELONGS, RELATED_DOM_REFS, RELATED_VM_LISTENERS, RELATED_VM_ON, RELATED_VM_OFF, GET_STATE_NAME, AFTER_RENDER, HANDLE_AFTER_RENDER, HANDLE_REMOVE_ROOT_DOMS, HANDLE_BEFORE_DESTROY, GET_FIRST_DOM, GET_LAST_DOM, GET_TRANSITION_DOM, BEFORE_DESTROY, GET_CONTEXT, SET_CONTEXT, GET_REF, UPDATE, UPDATE_IF_NEED, UPDATE_NEXT_MAP, STATE, STATE_INITIALIZE, STATE_RENDERED, STATE_WILLDESTROY, STATE_DESTROIED, STATE_NAMES, DOM_ON, DOM_PASS_LISTENERS, Component, destroyRelatedVM, isComponent, assertRenderResults, operateRootHtmlDOM, emptyRenderFn, errorRenderFn, textRenderFn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTIFY_TRANSITION", function() { return NOTIFY_TRANSITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEMPLATE_RENDER", function() { return TEMPLATE_RENDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RENDER", function() { return RENDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RENDER_TO_DOM", function() { return RENDER_TO_DOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARG_COMPONENTS", function() { return ARG_COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PASSED_ATTRS", function() { return PASSED_ATTRS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLONE", function() { return CLONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESTROY", function() { return DESTROY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTEXT", function() { return CONTEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTEXT_STATE", function() { return CONTEXT_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROOT_NODES", function() { return ROOT_NODES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NON_ROOT_COMPONENT_NODES", function() { return NON_ROOT_COMPONENT_NODES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REF_NODES", function() { return REF_NODES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_REF_NODE", function() { return SET_REF_NODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REF_BELONGS", function() { return REF_BELONGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RELATED_DOM_REFS", function() { return RELATED_DOM_REFS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RELATED_VM_LISTENERS", function() { return RELATED_VM_LISTENERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RELATED_VM_ON", function() { return RELATED_VM_ON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RELATED_VM_OFF", function() { return RELATED_VM_OFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_STATE_NAME", function() { return GET_STATE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AFTER_RENDER", function() { return AFTER_RENDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HANDLE_AFTER_RENDER", function() { return HANDLE_AFTER_RENDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HANDLE_REMOVE_ROOT_DOMS", function() { return HANDLE_REMOVE_ROOT_DOMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HANDLE_BEFORE_DESTROY", function() { return HANDLE_BEFORE_DESTROY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FIRST_DOM", function() { return GET_FIRST_DOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LAST_DOM", function() { return GET_LAST_DOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_TRANSITION_DOM", function() { return GET_TRANSITION_DOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BEFORE_DESTROY", function() { return BEFORE_DESTROY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CONTEXT", function() { return GET_CONTEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CONTEXT", function() { return SET_CONTEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_REF", function() { return GET_REF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE", function() { return UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_IF_NEED", function() { return UPDATE_IF_NEED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_NEXT_MAP", function() { return UPDATE_NEXT_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATE", function() { return STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATE_INITIALIZE", function() { return STATE_INITIALIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATE_RENDERED", function() { return STATE_RENDERED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATE_WILLDESTROY", function() { return STATE_WILLDESTROY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATE_DESTROIED", function() { return STATE_DESTROIED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATE_NAMES", function() { return STATE_NAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOM_ON", function() { return DOM_ON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOM_PASS_LISTENERS", function() { return DOM_PASS_LISTENERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroyRelatedVM", function() { return destroyRelatedVM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComponent", function() { return isComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertRenderResults", function() { return assertRenderResults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operateRootHtmlDOM", function() { return operateRootHtmlDOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyRenderFn", function() { return emptyRenderFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorRenderFn", function() { return errorRenderFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textRenderFn", function() { return textRenderFn; });
/* harmony import */ var _viewmodel_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../viewmodel/core */ "../../jinge-framework/viewmodel/core.js");
/* harmony import */ var _messenger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messenger */ "../../jinge-framework/core/messenger.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "../../jinge-framework/core/style.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ "../../jinge-framework/util/index.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom */ "../../jinge-framework/dom/index.js");
/* harmony import */ var _viewmodel_proxy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../viewmodel/proxy */ "../../jinge-framework/viewmodel/proxy.js");







const NOTIFY_TRANSITION = Object(_util__WEBPACK_IMPORTED_MODULE_3__["Symbol"])('notify_transition');
const TEMPLATE_RENDER = Object(_util__WEBPACK_IMPORTED_MODULE_3__["Symbol"])('template_render');
const RENDER = Object(_util__WEBPACK_IMPORTED_MODULE_3__["Symbol"])('render');
const RENDER_TO_DOM = Object(_util__WEBPACK_IMPORTED_MODULE_3__["Symbol"])('render_to_dom');
const ARG_COMPONENTS = Object(_util__WEBPACK_IMPORTED_MODULE_3__["Symbol"])('arg_components');
const PASSED_ATTRS = Object(_util__WEBPACK_IMPORTED_MODULE_3__["Symbol"])('passed_attrs');
const CLONE = Object(_util__WEBPACK_IMPORTED_MODULE_3__["Symbol"])('clone');
const DESTROY = Object(_util__WEBPACK_IMPORTED_MODULE_3__["Symbol"])('destroy');
const CONTEXT = Object(_util__WEBPACK_IMPORTED_MODULE_3__["Symbol"])('context');
const CONTEXT_STATE = Object(_util__WEBPACK_IMPORTED_MODULE_3__["Symbol"])('context_state');
const ROOT_NODES = Object(_util__WEBPACK_IMPORTED_MODULE_3__["Symbol"])('root_nodes');
const NON_ROOT_COMPONENT_NODES = Object(_util__WEBPACK_IMPORTED_MODULE_3__["Symbol"])('non_root_components');
const REF_NODES = Object(_util__WEBPACK_IMPORTED_MODULE_3__["Symbol"])('ref_nodes');
const SET_REF_NODE = Object(_util__WEBPACK_IMPORTED_MODULE_3__["Symbol"])('setChild');
const REF_BELONGS = Object(_util__WEBPACK_IMPORTED_MODULE_3__["Symbol"])('ref_belongs');
const RELATED_DOM_REFS = Object(_util__WEBPACK_IMPORTED_MODULE_3__["Symbol"])('related_dom_refs');
const RELATED_VM_LISTENERS = Object(_util__WEBPACK_IMPORTED_MODULE_3__["Symbol"])('related_vm_listeners');
const RELATED_VM_ON = Object(_util__WEBPACK_IMPORTED_MODULE_3__["Symbol"])('related_vm_on');
const RELATED_VM_OFF = Object(_util__WEBPACK_IMPORTED_MODULE_3__["Symbol"])('related_vm_off');
const GET_STATE_NAME = Object(_util__WEBPACK_IMPORTED_MODULE_3__["Symbol"])('get_state_name');
const AFTER_RENDER = Object(_util__WEBPACK_IMPORTED_MODULE_3__["Symbol"])('afterRender');
const HANDLE_AFTER_RENDER = Object(_util__WEBPACK_IMPORTED_MODULE_3__["Symbol"])('handleAfterRender');
const HANDLE_REMOVE_ROOT_DOMS = Object(_util__WEBPACK_IMPORTED_MODULE_3__["Symbol"])('handle_remove_root_doms');
const HANDLE_BEFORE_DESTROY = Object(_util__WEBPACK_IMPORTED_MODULE_3__["Symbol"])('handleBeforeDestroy');
const GET_FIRST_DOM = Object(_util__WEBPACK_IMPORTED_MODULE_3__["Symbol"])('getFirstHtmlDOM');
const GET_LAST_DOM = Object(_util__WEBPACK_IMPORTED_MODULE_3__["Symbol"])('getLastHtmlDOM');
const GET_TRANSITION_DOM = Object(_util__WEBPACK_IMPORTED_MODULE_3__["Symbol"])('getTransitionDOM');
const BEFORE_DESTROY = Object(_util__WEBPACK_IMPORTED_MODULE_3__["Symbol"])('beforeDestroy');
const GET_CONTEXT = Object(_util__WEBPACK_IMPORTED_MODULE_3__["Symbol"])('getContext');
const SET_CONTEXT = Object(_util__WEBPACK_IMPORTED_MODULE_3__["Symbol"])('setContext');
const GET_REF = Object(_util__WEBPACK_IMPORTED_MODULE_3__["Symbol"])('getRef');
const UPDATE = Object(_util__WEBPACK_IMPORTED_MODULE_3__["Symbol"])('update');
const UPDATE_IF_NEED = Object(_util__WEBPACK_IMPORTED_MODULE_3__["Symbol"])('update_if_need');
const UPDATE_NEXT_MAP = Object(_util__WEBPACK_IMPORTED_MODULE_3__["Symbol"])('update_next_tick_map');
const STATE = Object(_util__WEBPACK_IMPORTED_MODULE_3__["Symbol"])('state');
const STATE_INITIALIZE = 0;
const STATE_RENDERED = 1;
const STATE_WILLDESTROY = 2;
const STATE_DESTROIED = 4;
const STATE_NAMES = [
  'initialize', 'rendered', 'willdestroy', 'destroied'
];

const DOM_ON = Object(_util__WEBPACK_IMPORTED_MODULE_3__["Symbol"])('add_dom_listener');
const DOM_PASS_LISTENERS = Object(_util__WEBPACK_IMPORTED_MODULE_3__["Symbol"])('pass_all_listeners_to_dom');
const DOM_LISTENER_DEREGISTERS = Object(_util__WEBPACK_IMPORTED_MODULE_3__["Symbol"])('dom_listener_deregisters');

function copyContext(context) {
  if (!context) return null;
  return Object(_util__WEBPACK_IMPORTED_MODULE_3__["assignObject"])(Object(_util__WEBPACK_IMPORTED_MODULE_3__["createEmptyObject"])(), context);
}

class Component extends _messenger__WEBPACK_IMPORTED_MODULE_1__["Messenger"] {
  /**
   * compiler will auto transform the `template` getter's return value from String to Render Function.
   */
  static get template() {
    return null;
  }

  static get style() {
    return null;
  }

  /**
   * @param {Attributes} attrs Attributes passed from parent Component
   */
  constructor(attrs) {
    if (!Object(_util__WEBPACK_IMPORTED_MODULE_3__["isObject"])(attrs) || !(_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"] in attrs)) {
      throw new Error('First argument passed to Component constructor must be ViewModel with Messenger interface. See https://[todo]');
    }
    super(attrs[_messenger__WEBPACK_IMPORTED_MODULE_1__["LISTENERS"]]);

    this[PASSED_ATTRS] = attrs;

    this[_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]] = null;
    this[_viewmodel_proxy__WEBPACK_IMPORTED_MODULE_5__["VM_SETTER_FN_MAP"]] = new Map();

    this[UPDATE_NEXT_MAP] = null;
    this[_style__WEBPACK_IMPORTED_MODULE_2__["CSTYLE_PID"]] = null;
    this[CONTEXT] = attrs[CONTEXT];
    this[CONTEXT_STATE] = 0;
    this[ARG_COMPONENTS] = attrs[ARG_COMPONENTS];
    this[STATE] = STATE_INITIALIZE;
    /**
     * ROOT_NODES means root children of this component,
     *   include html-nodes and component-nodes.
     * We use this infomation to remove DOM after this component is destroied.
     * We do not maintain the whole parent-child view-tree but only root children,
     * because when we remove the root children, whole view-tree will be
     * removed, so we do not need waste memory to maintain whole view-tree.
     */
    this[ROOT_NODES] = [];
    /**
     * NON_ROOT_COMPONENT_NODES means nearest non-root component-nodes in the view-tree.
     * Node in view-tree have two types, html-node and component-node.
     *   html-node include html dom node and html text node,
     *   component-node is an instance of a Component.
     * For example, we have rendered a view-tree:
     *             RootApp(Component)
     *             /     |          \
     *         h1(Html)  h2(Html)  A(Component)
     *            |                 |
     *        C(Component)     D(Component)
     *
     * The nearest non-root component-nodes of RootApp include C,
     *   but not include A(as it's root) or D(as it's not nearest).
     *
     * By the way, the ROOT_NODES of view-tree above is [h1, h2, A]
     */
    this[NON_ROOT_COMPONENT_NODES] = [];
    /**
     * REF_NODES contains all children with ref: attribute.
     * REF_BELONGS contains all parent components which has this component as ref.
     *
     * 使用 ref: 标记的元素（Component 或 html node），会保存在 REF_NODES 中，
     *   之后通过 GET_REF 函数可以获取到元素实例。
     * 当标记的元素属于 <if> 或 <for> 等组件的 slot 时，这些元素可能被动态产生或销毁。
     *   需要在元素产生或销毁时，相应地把它从它所属于的 REF_NODES 中添加或删除。
     * 为了实现这个目的，对于 Component 元素，在将它添加到目标父组件的 REF_NODES 中的同时，
     *   会将目标父组件反向记录到该元素的 REF_BELONGS 中，从而实现当该元素被销毁时，
     *   可以将自己从它所属于的 REF_NODES 中删除；
     * 对于 html node 元素，我们会将其目标父组件记录到该元素的渲染关联组件的 RELATED_DOM_REFS。
     *   比如说，如果该 html 元素是 <if> 组件的 slot ，那它的渲染关联组件就是 <if> 内部的 Slot 组件，
     *   当 <if> 的条件发生变化时，实际上会销毁这个 Slot 组件。由于前面提到的 html 元素
     *   的 ref: 信息记录到了该 Slot 组件的 RELATED_DOM_REFS 里，因此就能反向地将
     *   这个 html 元素从它所属于的 REF_NODES 中删除。
     */
    this[REF_NODES] = null;
    this[REF_BELONGS] = null;
    this[RELATED_DOM_REFS] = null;

    /**
     * If some child of this component is passed as argument(ie.
     * use arg:pass attribute) like ng-tranclude in angular 1.x,
     * the child may contain some messenger listeners not belong to
     * this component but belong to outer parent.
     *
     * When destroy this component, we should also remove messenger listeners
     *   belong to outer parent to prevent memory leak.
     * To implement this goal, we maitain RELATED_VM_LISTENERS.
     * When render view-tree, any messenger listeners belong to outer
     * parent, will be also linked under RELATED_VM_LISTENERS, then
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
    this[RELATED_VM_LISTENERS] = null;
    /**
     * Store all dom listener deregisters.
     */
    this[DOM_LISTENER_DEREGISTERS] = null;
    return Object(_viewmodel_proxy__WEBPACK_IMPORTED_MODULE_5__["wrapComponent"])(this);
  }

  /**
   * Helper function to add dom event listener.
   * Return deregister function which will remove event listener.
   * If you do dot call deregister function, it will be auto called when component is destroied.
   * @param {HtmlElement} $el
   * @param {String} eventName
   * @param {Function} listener
   * @param {Boolean|Object} capture
   * @returns {Function} deregister function to remove listener
   */
  [DOM_ON]($el, eventName, listener, capture) {
    const lisDeregister = Object(_dom__WEBPACK_IMPORTED_MODULE_4__["registerEvent"])($el, eventName, $event => {
      listener.call(this, $event);
    }, capture);

    const deregs = Object(_util__WEBPACK_IMPORTED_MODULE_3__["getOrCreateArrayProperty"])(this, DOM_LISTENER_DEREGISTERS);
    const deregister = () => {
      lisDeregister();
      Object(_util__WEBPACK_IMPORTED_MODULE_3__["arrayRemove"])(deregs, deregister);
    };
    deregs.push(deregister);
    return deregister;
  }

  /**
   * Helper function to pass all listener to first dom element.
   * @param {Array} ignoredEventNames event names not passed
   */
  [DOM_PASS_LISTENERS](ignoredEventNames) {
    if (this[STATE] !== STATE_RENDERED) {
      throw new Error('bindDOMListeners must be applied to component which is rendered.');
    }
    const lis = this[_messenger__WEBPACK_IMPORTED_MODULE_1__["LISTENERS"]];
    if (!lis || lis.length === 0) {
      return;
    }
    const $el = this[GET_FIRST_DOM]();
    if ($el.nodeType !== Node.ELEMENT_NODE) {
      return;
    }
    lis.forEach((handlers, eventName) => {
      if (ignoredEventNames && ignoredEventNames.indexOf(eventName) >= 0) {
        return;
      }
      handlers.forEach(fn => {
        this[DOM_ON]($el, eventName, fn.tag ? $evt => {
          fn.tag.stop && $evt.stopPropagation();
          fn.tag.prevent && $evt.preventDefault();
          fn($evt);
        } : fn);
      });
    });
  }

  [GET_TRANSITION_DOM]() {
    const rns = this[ROOT_NODES];
    if (rns.length === 0) Object(_util__WEBPACK_IMPORTED_MODULE_3__["assertFail"])();
    const el = rns[0];
    return isComponent(el) ? el[GET_TRANSITION_DOM]() : el;
  }

  [GET_FIRST_DOM]() {
    const rns = this[ROOT_NODES];
    if (rns.length === 0) Object(_util__WEBPACK_IMPORTED_MODULE_3__["assertFail"])();
    const el = rns[0];
    return isComponent(el) ? el[GET_FIRST_DOM]() : el;
  }

  [GET_LAST_DOM]() {
    const rns = this[ROOT_NODES];
    if (rns.length === 0) Object(_util__WEBPACK_IMPORTED_MODULE_3__["assertFail"])();
    const el = rns[rns.length - 1];
    return isComponent(el) ? el[GET_LAST_DOM]() : el;
  }

  [_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]](prop, handler, componentCtx) {
    this[_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]](prop, handler);
    if (!componentCtx || !isComponent(componentCtx) || componentCtx === this) return;
    componentCtx[RELATED_VM_ON](this, prop, handler);
  }

  [RELATED_VM_ON](vm, prop, handler) {
    const rvl = Object(_util__WEBPACK_IMPORTED_MODULE_3__["getOrCreateMapProperty"])(this, RELATED_VM_LISTENERS);
    let hook = rvl.get(vm);
    if (!hook) {
      hook = [];
      rvl.set(vm, hook);
    }
    hook.push([prop, handler]);
  }

  [RELATED_VM_OFF](vm, prop, handler) {
    const rvl = this[RELATED_VM_LISTENERS];
    if (!rvl) return;
    const hook = rvl.get(vm);
    if (!hook) return;
    const isPropArray = Object(_util__WEBPACK_IMPORTED_MODULE_3__["isArray"])(prop);
    const i = Object(_util__WEBPACK_IMPORTED_MODULE_3__["arrayFindIndex"])(hook, it => {
      if (handler === it[1] && (isPropArray ? Object(_util__WEBPACK_IMPORTED_MODULE_3__["arrayEqual"])(prop, it[0]) : prop === it[0])) {
        return true;
      } else {
        return false;
      }
    });
    if (i >= 0) hook.splice(i, 1);
  }

  [_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["VM_OFF"]](prop, handler, componentCtx) {
    this[_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["VM_OFF"]](prop, handler);
    if (!componentCtx || !isComponent(componentCtx) || componentCtx === this) return;
    componentCtx[RELATED_VM_OFF](this, prop, handler);
  }

  [_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["VM_NOTIFY"]](prop) {
    return this[_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["VM_NOTIFY"]](prop);
  }

  [CLONE]() {
    throw new Error('abstract method');
  }

  [RENDER]() {
    const Clazz = this.constructor;
    let renderFn = Clazz.template;
    if (!renderFn && this[ARG_COMPONENTS]) {
      renderFn = this[ARG_COMPONENTS][_util__WEBPACK_IMPORTED_MODULE_3__["STR_DEFAULT"]];
    }
    if (!Object(_util__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(renderFn)) {
      Object(_util__WEBPACK_IMPORTED_MODULE_3__["assertFail"])(`render function of ${Clazz.name} not found. Forget static getter "template"?`);
    }
    _style__WEBPACK_IMPORTED_MODULE_2__["manager"][_style__WEBPACK_IMPORTED_MODULE_2__["CSTYLE_ADD"]](Clazz.style);
    return renderFn(this);
  }

  /**
   *
   * @param {HTMLElement} $targetDOM
   * @param {Boolean} replaceMode if false, use append mode
   */
  [RENDER_TO_DOM]($targetDOM, replaceMode = true) {
    if (!Object(_util__WEBPACK_IMPORTED_MODULE_3__["isDOMNode"])($targetDOM)) Object(_util__WEBPACK_IMPORTED_MODULE_3__["assertFail"])();
    if (this[STATE] !== STATE_INITIALIZE) {
      Object(_util__WEBPACK_IMPORTED_MODULE_3__["assertFail"])();
    }
    const rr = assertRenderResults(this[RENDER]());
    _style__WEBPACK_IMPORTED_MODULE_2__["manager"][_style__WEBPACK_IMPORTED_MODULE_2__["CSTYLE_ATTACH"]]();
    if (replaceMode) {
      Object(_dom__WEBPACK_IMPORTED_MODULE_4__["replaceChild"])(Object(_dom__WEBPACK_IMPORTED_MODULE_4__["getParent"])($targetDOM), rr, $targetDOM);
    } else {
      Object(_dom__WEBPACK_IMPORTED_MODULE_4__["appendChild"])($targetDOM, rr);
    }
    this[HANDLE_AFTER_RENDER]();
  }

  [DESTROY](removeDOM = true) {
    if (this[STATE] > STATE_WILLDESTROY) return;
    this[STATE] = STATE_WILLDESTROY;

    this[HANDLE_BEFORE_DESTROY](); // destroy children first
    this[_messenger__WEBPACK_IMPORTED_MODULE_1__["NOTIFY"]](_util__WEBPACK_IMPORTED_MODULE_3__["BEFORE_DESTROY_EVENT_NAME"], this);
    this[BEFORE_DESTROY]();

    // clear messenger listeners.
    super[_messenger__WEBPACK_IMPORTED_MODULE_1__["CLEAR"]]();
    // remove component style
    _style__WEBPACK_IMPORTED_MODULE_2__["manager"][_style__WEBPACK_IMPORTED_MODULE_2__["CSTYLE_DEL"]](this.constructor.style);

    // destroy attrs passed to constructor
    const attrs = this[PASSED_ATTRS];
    attrs[_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["DESTROY"]]();
    // unlink all symbol property. may be unnecessary.
    Object(_util__WEBPACK_IMPORTED_MODULE_3__["getOwnPropertySymbols"])(attrs, p => {
      attrs[p] = null;
    });
    this[PASSED_ATTRS] = null;

    // destroy view model
    this[_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["DESTROY"]]();
    this[_viewmodel_proxy__WEBPACK_IMPORTED_MODULE_5__["VM_SETTER_FN_MAP"]].clear();

    // clear next tick update setImmediate
    if (this[UPDATE_NEXT_MAP]) {
      this[UPDATE_NEXT_MAP].forEach(imm => {
        Object(_util__WEBPACK_IMPORTED_MODULE_3__["clearImmediate"])(imm);
      });
      this[UPDATE_NEXT_MAP].clear();
    }

    // destroy related listener and ref:
    destroyRelatedVM(this);
    // clear context.
    destroyContext(this);
    // clear all dom event listener
    destroyDOMListeners(this);

    // clear properties
    this[STATE] = STATE_DESTROIED;
    // unlink all symbol properties. maybe unnecessary.
    this[RELATED_VM_LISTENERS] =
      this[_viewmodel_proxy__WEBPACK_IMPORTED_MODULE_5__["VM_SETTER_FN_MAP"]] =
      this[_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]] =
      this[NON_ROOT_COMPONENT_NODES] =
      this[REF_NODES] =
      this[REF_BELONGS] =
      this[ARG_COMPONENTS] = null;

    // remove dom
    if (removeDOM) {
      this[HANDLE_REMOVE_ROOT_DOMS]();
    }
  }

  [HANDLE_BEFORE_DESTROY]() {
    this[NON_ROOT_COMPONENT_NODES].forEach(component => {
      component[DESTROY](false);
    });
    this[ROOT_NODES].forEach(node => {
      if (isComponent(node)) {
        node[DESTROY](false);
      }
    });
  }

  [HANDLE_REMOVE_ROOT_DOMS]($parent) {
    this[ROOT_NODES].forEach(node => {
      if (isComponent(node)) {
        node[HANDLE_REMOVE_ROOT_DOMS]($parent);
      } else {
        if (!$parent) $parent = Object(_dom__WEBPACK_IMPORTED_MODULE_4__["getParent"])(node);
        Object(_dom__WEBPACK_IMPORTED_MODULE_4__["removeChild"])($parent, node);
      }
    });
    this[ROOT_NODES] = null;
  }

  [HANDLE_AFTER_RENDER]() {
    /*
     * Set NOTIFIABLE=true to enable ViewModel notify.
     * Don't forgot to add these code if you override HANDLE_AFTER_RENDER
     */
    this[_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["NOTIFIABLE"]] = true;
    this[PASSED_ATTRS][_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["NOTIFIABLE"]] = true;

    this[ROOT_NODES].forEach(n => {
      if (isComponent(n)) n[HANDLE_AFTER_RENDER]();
    });
    this[NON_ROOT_COMPONENT_NODES].forEach(n => {
      if (isComponent(n)) n[HANDLE_AFTER_RENDER]();
    });
    this[STATE] = STATE_RENDERED;
    this[CONTEXT_STATE] = this[CONTEXT_STATE] > 0 ? -2 : -1; // has been rendered, can't modify context
    this[AFTER_RENDER]();
    this[_messenger__WEBPACK_IMPORTED_MODULE_1__["NOTIFY"]](_util__WEBPACK_IMPORTED_MODULE_3__["AFTER_RENDER_EVENT_NAME"], this);
  }

  /**
   *
   * @param {Function|boolean} handler
   * @param {boolean} nextTick
   */
  [UPDATE_IF_NEED](handler = null, nextTick = true) {
    if (this[STATE] !== STATE_RENDERED) {
      return;
    }
    if (handler === false) {
      return this[UPDATE]();
    }

    if (!Object(_util__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(handler)) {
      handler = this[UPDATE];
    }

    if (!nextTick) {
      handler.call(this);
      return;
    }

    const ntMap = Object(_util__WEBPACK_IMPORTED_MODULE_3__["getOrCreateMapProperty"])(this, UPDATE_NEXT_MAP);
    if (ntMap.has(handler)) {
      // already in queue.
      return;
    }
    ntMap.set(handler, Object(_util__WEBPACK_IMPORTED_MODULE_3__["setImmediate"])(() => {
      ntMap.delete(handler);
      handler.call(this);
    }));
  }

  [UPDATE]() {
    throw new Error('abstract method');
  }

  [GET_STATE_NAME]() {
    return STATE_NAMES[this[STATE]];
  }

  [SET_CONTEXT](id, ctx, forceOverride = false) {
    if (this[CONTEXT_STATE] < 0) {
      throw new Error('Can\'t setContext after component has been rendered. Try put setContext code into constructor.');
    }
    if (this[CONTEXT_STATE] === 0) {
      // we copy context to make sure child component do not modify context passed from parent.
      // we do not copy it by default until setContext function is called, because it unnecessary to waste memory if
      // child component do not modify the context.
      if (!this[CONTEXT]) {
        this[CONTEXT] = Object(_util__WEBPACK_IMPORTED_MODULE_3__["createEmptyObject"])();
      } else {
        this[CONTEXT] = copyContext(this[CONTEXT]);
      }
      this[CONTEXT_STATE] = 1; // has been copied.
    }
    if (id in this[CONTEXT]) {
      // override exist may case hidden bug hard to debug.
      // so we force programmer to pass third argument to
      //   tell us he/she know what he/she is doing.
      if (!forceOverride) {
        throw new Error(`Contenxt with id: ${id.toString()} is exist. Pass third argument forceOverride=true to override it.`);
      }
    }
    this[CONTEXT][id] = ctx;
  }

  [GET_CONTEXT](id) {
    return this[CONTEXT] ? this[CONTEXT][id] : null;
  }

  [SET_REF_NODE](ref, el, relatedComponent) {
    const rns = Object(_util__WEBPACK_IMPORTED_MODULE_3__["getOrCreateMapProperty"])(this, REF_NODES);
    let elOrArr = rns.get(ref);
    if (!elOrArr) {
      rns.set(ref, el);
    } else if (Object(_util__WEBPACK_IMPORTED_MODULE_3__["isArray"])(elOrArr)) {
      elOrArr.push(el);
    } else {
      elOrArr = [elOrArr, el];
      rns.set(ref, elOrArr);
    }
    if (isComponent(el)) {
      Object(_util__WEBPACK_IMPORTED_MODULE_3__["getOrCreateArrayProperty"])(el, REF_BELONGS).push([
        this, ref
      ]);
      return;
    }
    if (this === relatedComponent) {
      return;
    }
    Object(_util__WEBPACK_IMPORTED_MODULE_3__["getOrCreateArrayProperty"])(
      relatedComponent, RELATED_DOM_REFS
    ).push([this, ref, el]);
  }

  /**
   * Get child node(or nodes) marked by 'ref:' attribute in template
   * @param {String} ref
   * @returns {Node|Array<Node>}
   */
  [GET_REF](ref) {
    if (this[STATE] !== STATE_RENDERED) {
      console.error(`Warning: call getChild before component '${this.constructor.name}' is rendered will get nothing, try put getChild into afterRender lifecycle hook.`);
    }
    return this[REF_NODES] ? this[REF_NODES].get(ref) : null;
  }

  /**
   * lifecycle hook, called after rendered.
   */
  [AFTER_RENDER]() {
    // lifecycle hook, default do nothing.
  }

  /**
   * lifecycle hook, called before destroy.
   */
  [BEFORE_DESTROY]() {
    // lifecycle hook, default do nothing.
  }
}

function destroyContext(comp) {
  const ctx = comp[CONTEXT];
  if (!ctx) return;
  if (comp[CONTEXT_STATE] === -2) {
    // maybe unnecessary to reset properties
    Object(_util__WEBPACK_IMPORTED_MODULE_3__["getOwnPropertyNames"])(ctx, propN => {
      ctx[propN] = null;
    });
    Object(_util__WEBPACK_IMPORTED_MODULE_3__["getOwnPropertySymbols"])(ctx, propN => {
      ctx[propN] = null;
    });
  }
  comp[CONTEXT] = null;
}

function destroyDOMListeners(component) {
  const deregisters = component[DOM_LISTENER_DEREGISTERS];
  if (!deregisters) return;
  deregisters.forEach(deregister => deregister());
  component[DOM_LISTENER_DEREGISTERS] = null;
}

function destroyRelatedVM(comp) {
  function _destroy(prop, cb) {
    const m = comp[prop];
    if (!m) return;
    m.forEach((arr, ctx) => {
      arr.forEach(k => cb(ctx, k));
      arr.length = 0;
    });
    m.clear();
  }
  function _unref(refBelongs, el) {
    if (!refBelongs) return;
    refBelongs.forEach(info => {
      const map = info[0][REF_NODES];
      if (!map) return;
      const rns = map.get(info[1]);
      if (Object(_util__WEBPACK_IMPORTED_MODULE_3__["isArray"])(rns)) {
        Object(_util__WEBPACK_IMPORTED_MODULE_3__["arrayRemove"])(rns, el || info[2]);
      } else {
        map.delete(info[1]);
      }
    });
  }
  _destroy(RELATED_VM_LISTENERS, (ctx, hook) => {
    ctx[_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__["VM_OFF"]](hook[0], hook[1]);
  });

  _unref(comp[REF_BELONGS], comp);
  _unref(comp[RELATED_DOM_REFS]);
}

function isComponent(c) {
  return ROOT_NODES in c;
}

function assertRenderResults(renderResults) {
  if (!Object(_util__WEBPACK_IMPORTED_MODULE_3__["isArray"])(renderResults) || renderResults.length === 0) {
    throw new Error('Render results of component is empty');
  }
  return renderResults;
}

function operateRootHtmlDOM(fn, el, ...args) {
  if (!isComponent(el)) return fn(el, ...args);
  el[ROOT_NODES].forEach(ce => {
    operateRootHtmlDOM(fn, ce, ...args);
  });
}

function emptyRenderFn(component) {
  const el = Object(_dom__WEBPACK_IMPORTED_MODULE_4__["createComment"])(_util__WEBPACK_IMPORTED_MODULE_3__["STR_EMPTY"]);
  component[ROOT_NODES].push(el);
  return [el];
}

function errorRenderFn(component) {
  const el = Object(_dom__WEBPACK_IMPORTED_MODULE_4__["createElement"])('span', {
    style: 'color: red !important;'
  });
  el.textContent = 'template parsing failed! please check webpack log.';
  component[ROOT_NODES].push(el);
  return [el];
}

function textRenderFn(component, txtContent) {
  const el = Object(_dom__WEBPACK_IMPORTED_MODULE_4__["createTextNode"])(txtContent);
  component[ROOT_NODES].push(el);
  return el;
}


/***/ }),

/***/ "../../jinge-framework/core/i18n.js":
/*!**********************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/core/i18n.js ***!
  \**********************************************************/
/*! exports provided: messenger, I18N_DATA_CHANGED, _t, format, i18n, prefix, registerData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messenger", function() { return messenger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18N_DATA_CHANGED", function() { return I18N_DATA_CHANGED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_t", function() { return _t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i18n", function() { return i18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefix", function() { return prefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerData", function() { return registerData; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge-framework/util/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "../../jinge-framework/config/index.js");
/* harmony import */ var _messenger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messenger */ "../../jinge-framework/core/messenger.js");




const messenger = new _messenger__WEBPACK_IMPORTED_MODULE_2__["Messenger"]();
const I18N_DATA_CHANGED = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('data-changed');

let dictStore = window.JINGE_I18N_DATA || null;

/**
 * @param {String} text text to translate
 * @param {Object|String} params params or translate key
 */
function _t(text, params) {
  return format(text, params);
}

function format(text, params) {
  if (!params || !Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(params) || text.indexOf('{') < 0) {
    return text;
  }
  return text.replace(/\$\{\s*([\w\d._$]+)\s*\}/g, function(m, n) {
    // 因为支持 ${ a.b.c } 这样的写法，所以直接构造 eval 函数获取。
    if (n.indexOf('.') >= 0) {
      /* eslint no-new-func: "off" */
      return (new Function(`return obj.${n}`, 'obj'))(params);
    } else {
      return params[n];
    }
  });
}

function i18n(key, params) {
  if (!dictStore || !(key in dictStore)) {
    if (_config__WEBPACK_IMPORTED_MODULE_1__["config"][_config__WEBPACK_IMPORTED_MODULE_1__["CFG_I18N_WARN_KEY_NOT_FOUND"]]) {
      console.error('Warning: i18n key', key, 'not found.');
    }
    return key;
  }
  return _t(dictStore[key], params);
}

function prefix(prefix) {
  return function(key, params) {
    return i18n(prefix + '.' + key, params);
  };
}

function registerData(dict) {
  if (window.JINGE_I18N_DATA) {
    /**
     * 当 window.JINGE_I18N_DATA 存在的情况下，可以不用主动调用
     *   registerI18nData 就能直接使用 i18n 函数来取多语言文本。
     *   这种使用方式下， i18n 函数可以在代码文件的任意位置书写，
     *   包括书写在文件的最顶部。
     *   但是，书写在文件最顶部的 i18n 代码，都几乎只是用于将多语言
     *   文本赋予一个常量，然后在其它地方使用。
     *   我们认为，这种使用方式下，不应该再使用 registerI18nData 来覆盖
     *   字典数据（从而实现不重新加载 app 的情况下，热更新界面的多语言文本展示）。
     *
     * 如果想要通过 registerI18nData 来覆盖字典数据实现热更新，则 i18n 函数
     *   不应该在文件顶部书写。原因在于，文件顶部的代码，在整个 bundle 加载时就已经被
     *   执行了，这时候 bootstrap 函数和 registerI18nData 函数是否已经执行
     *   很难确定（因为各文件的顶部代码的执行顺序取决于文件之间的依赖关系，即打包
     *   后在 bundle 里的次序）。
     *
     * 对于 window.JINGE_I18N_DATA 已经存在的情况下，仍然试图热更新的行为，
     *   我们给予告警提示，帮助用户尽量避免踩坑。
     */
    console.error('Warning: try change i18n dictionary data when window.JINGE_I18N_DATA is set. see https://todo');
  }
  const hasOld = !!dictStore;
  dictStore = dict;
  if (hasOld) {
    messenger[_messenger__WEBPACK_IMPORTED_MODULE_2__["NOTIFY"]](I18N_DATA_CHANGED);
  }
}


/***/ }),

/***/ "../../jinge-framework/core/index.js":
/*!***********************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/core/index.js ***!
  \***********************************************************/
/*! exports provided: bootstrap, component, i18n, messenger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap */ "../../jinge-framework/core/bootstrap.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "bootstrap", function() { return _bootstrap__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "../../jinge-framework/core/component.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "component", function() { return _component__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./i18n */ "../../jinge-framework/core/i18n.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "i18n", function() { return _i18n__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _messenger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messenger */ "../../jinge-framework/core/messenger.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "messenger", function() { return _messenger__WEBPACK_IMPORTED_MODULE_3__; });








/***/ }),

/***/ "../../jinge-framework/core/messenger.js":
/*!***************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/core/messenger.js ***!
  \***************************************************************/
/*! exports provided: LISTENERS, notifyHelper, onHelper, offHelper, clearHelper, onceHelper, NOTIFY, ON, OFF, CLEAR, Messenger, passListeners */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LISTENERS", function() { return LISTENERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifyHelper", function() { return notifyHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onHelper", function() { return onHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offHelper", function() { return offHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearHelper", function() { return clearHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onceHelper", function() { return onceHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTIFY", function() { return NOTIFY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON", function() { return ON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OFF", function() { return OFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR", function() { return CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Messenger", function() { return Messenger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passListeners", function() { return passListeners; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge-framework/util/index.js");


const LISTENERS = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('listeners');

function notifyHelper(listenersMap, notifyKey, ...notifyArgs) {
  if (!listenersMap) return;
  const listeners = listenersMap.get(notifyKey);
  if (!listeners) return;
  listeners.forEach(handler => handler(...notifyArgs));
}

function onHelper(listenersMap, notifyKey, listener) {
  const listeners = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getOrCreateArrayValueOfMap"])(listenersMap, notifyKey);
  if (listeners.indexOf(listener) < 0) {
    listeners.push(listener);
  }
}

function offHelper(listenersMap, notifyKey, listener) {
  if (!listenersMap) return;
  if (!notifyKey) {
    listenersMap.forEach(ls => {
      ls.length = 0;
    });
    listenersMap.clear();
    return;
  }
  const listeners = listenersMap.get(notifyKey);
  if (!listeners) return;
  if (!listener) {
    listeners.length = 0; // clear all if listener is not provided
    return;
  }
  const idx = listeners.indexOf(listener);
  if (idx < 0) return;
  listeners.splice(idx, 1);
}

function clearHelper(listenersMap, notifyKey) {
  if (!listenersMap) return;
  if (!notifyKey) {
    listenersMap.clear();
  } else {
    listenersMap.delete(notifyKey);
  }
}

function onceHelper(listenersMap, notifyKey, listener) {
  function onceListener(...args) {
    listener(...args);
    offHelper(listenersMap, notifyKey, onceListener);
  }
  onHelper(listenersMap, notifyKey, onceListener);
}

const NOTIFY = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('notify');
const ON = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('on');
const OFF = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('off');
const CLEAR = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('clear');

class Messenger {
  /**
   * Listeners compiled from template.
   * @param {Object} templateListeners
   */
  constructor(templateListeners) {
    this[LISTENERS] = null;
    if (templateListeners) {
      for (const eventName in templateListeners) {
        this[ON](eventName, ...templateListeners[eventName]);
      }
    }
  }

  [NOTIFY](eventName, ...args) {
    notifyHelper(this[LISTENERS], eventName, ...args);
  }

  [ON](eventName, eventListener, opts) {
    const listeners = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getOrCreateMapProperty"])(this, LISTENERS);
    if (opts) {
      eventListener.tag = opts;
    }
    if (opts && opts.once) {
      onceHelper(listeners, eventName, eventListener);
    } else {
      onHelper(listeners, eventName, eventListener);
    }
  }

  [OFF](eventName, eventListener) {
    offHelper(this[LISTENERS], eventName, eventListener);
  }

  [CLEAR](eventName) {
    clearHelper(this[LISTENERS], eventName);
  }
}

/**
 * pass all listeners on srcMessenger to dstMessenger
 * @param {Messenger} srcMessenger
 * @param {Messenger} dstMessenger
 */
function passListeners(srcMessenger, dstMessenger) {
  if (!(LISTENERS in srcMessenger) || !(LISTENERS in dstMessenger)) {
    // src or dst is not instance of Messenger
    return;
  }
  const srcLis = srcMessenger[LISTENERS];
  if (!srcLis) return;
  srcLis.forEach((lis, key) => {
    const dstLis = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getOrCreateMapProperty"])(dstMessenger, LISTENERS);
    lis.forEach(listener => {
      const tag = listener.tag;
      if (tag && tag.once) {
        onceHelper(dstLis, key, listener);
      } else {
        onHelper(dstLis, key, listener);
      }
    });
  });
}


/***/ }),

/***/ "../../jinge-framework/core/style.js":
/*!***********************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/core/style.js ***!
  \***********************************************************/
/*! exports provided: CSTYLE_PID, CSTYLE_ADD, CSTYLE_DEL, CSTYLE_ATTACH, addParentStyleId, manager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSTYLE_PID", function() { return CSTYLE_PID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSTYLE_ADD", function() { return CSTYLE_ADD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSTYLE_DEL", function() { return CSTYLE_DEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSTYLE_ATTACH", function() { return CSTYLE_ATTACH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addParentStyleId", function() { return addParentStyleId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manager", function() { return manager; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge-framework/util/index.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom */ "../../jinge-framework/dom/index.js");



const CSTYLE_PID = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('cstyle_pids');
const CSTYLE_ADD = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('add');
const CSTYLE_DEL = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('del');
const CSTYLE_ATTACH = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('attach');

function addParentStyleId(component, inheritIds, styleId) {
  if (!inheritIds && !styleId) return;
  let ids = component[CSTYLE_PID];
  if (!ids) {
    ids = component[CSTYLE_PID] = Object(_util__WEBPACK_IMPORTED_MODULE_0__["createEmptyObject"])();
  }
  if (inheritIds) {
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["assignObject"])(ids, inheritIds);
  }
  if (styleId) {
    ids[styleId] = '';
  }
}

function isHideCssExists() {
  const $e = Object(_dom__WEBPACK_IMPORTED_MODULE_1__["createElement"])('span', {
    style: 'position:absolute;left:-10000px;',
    class: 'jg-hide'
  });
  Object(_dom__WEBPACK_IMPORTED_MODULE_1__["appendChild"])(document.body, $e);
  return Object(_dom__WEBPACK_IMPORTED_MODULE_1__["getCSPropertyValue"])(getComputedStyle($e), 'display') === 'none';
}

class ComponentStyleManager {
  constructor() {
    this.m = new Map();
    /**
     * State
     * 0: not attached
     * 1: attached
     */
    this.s = 0;
  }

  _c(sty) {
    if (this.s === 0) return;
    const $style = Object(_dom__WEBPACK_IMPORTED_MODULE_1__["createElement"])('style', {
      type: 'text/css',
      id: sty.dom
    });
    Object(_dom__WEBPACK_IMPORTED_MODULE_1__["appendChild"])(document.head, $style);
    if ($style.styleSheet) {
      $style.styleSheet.cssText = sty.css;
    } else {
      $style.textContent = sty.css;
    }
  }

  [CSTYLE_ADD](sty) {
    if (!sty) return;
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
      refs: 1
    };
    styleMap.set(sty.id, info);
    this._c(info);
  }

  [CSTYLE_ATTACH]() {
    if (this.s !== 0) return;
    this.s = 1;
    if (!isHideCssExists()) {
      this._c({
        dom: `__jgsty_${Object(_util__WEBPACK_IMPORTED_MODULE_0__["uid"])()}__`,
        css: '.jg-hide{display:none!important}.jg-hide.jg-hide-enter,.jg-hide.jg-hide-leave{display:block!important}'
      });
    }
    this.m.forEach(info => this._c(info));
  }

  [CSTYLE_DEL](sty) {
    if (!sty) return;
    const info = this.m.get(sty.id);
    if (!info) return;
    info.refs--;
    if (info.refs > 0) {
      return;
    }
    this.m.delete(info.id);
    if (this.s === 0) return;
    document.head.removeChild(
      document.getElementById(info.dom)
    );
  }
}

// singleton
const manager = new ComponentStyleManager();


/***/ }),

/***/ "../../jinge-framework/core/transition.js":
/*!****************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/core/transition.js ***!
  \****************************************************************/
/*! exports provided: TS_TRANSITION_END, TS_ANIMATION_END, TS_TRANSITION_DURATION, TS_ANIMATION_DURATION, TS_TRANSITION, TS_ZERO_S, TS_ENTER, TS_LEAVE, TS_C_ENTER, TS_C_LEAVE, TS_C_ENTER_ACTIVE, TS_C_LEAVE_ACTIVE, TS_BEFORE_ENTER, TS_AFTER_ENTER, TS_BEFORE_LEAVE, TS_AFTER_LEAVE, TS_ENTER_CANCELLED, TS_LEAVE_CANCELLED, TS_STATE_ENTERING, TS_STATE_ENTERED, TS_STATE_LEAVING, TS_STATE_LEAVED, getDurationType, getDuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_TRANSITION_END", function() { return TS_TRANSITION_END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_ANIMATION_END", function() { return TS_ANIMATION_END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_TRANSITION_DURATION", function() { return TS_TRANSITION_DURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_ANIMATION_DURATION", function() { return TS_ANIMATION_DURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_TRANSITION", function() { return TS_TRANSITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_ZERO_S", function() { return TS_ZERO_S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_ENTER", function() { return TS_ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_LEAVE", function() { return TS_LEAVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_C_ENTER", function() { return TS_C_ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_C_LEAVE", function() { return TS_C_LEAVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_C_ENTER_ACTIVE", function() { return TS_C_ENTER_ACTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_C_LEAVE_ACTIVE", function() { return TS_C_LEAVE_ACTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_BEFORE_ENTER", function() { return TS_BEFORE_ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_AFTER_ENTER", function() { return TS_AFTER_ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_BEFORE_LEAVE", function() { return TS_BEFORE_LEAVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_AFTER_LEAVE", function() { return TS_AFTER_LEAVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_ENTER_CANCELLED", function() { return TS_ENTER_CANCELLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_LEAVE_CANCELLED", function() { return TS_LEAVE_CANCELLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_STATE_ENTERING", function() { return TS_STATE_ENTERING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_STATE_ENTERED", function() { return TS_STATE_ENTERED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_STATE_LEAVING", function() { return TS_STATE_LEAVING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_STATE_LEAVED", function() { return TS_STATE_LEAVED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDurationType", function() { return getDurationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDuration", function() { return getDuration; });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom */ "../../jinge-framework/dom/index.js");


const TS_TRANSITION_END = 'transitionend';
const TS_ANIMATION_END = 'animationend';
const TS_TRANSITION_DURATION = 'transition-duration';
const TS_ANIMATION_DURATION = 'animation-duration';
const TS_TRANSITION = 'transition';
const TS_ZERO_S = '0s';
const TS_ENTER = 'enter';
const TS_LEAVE = 'leave';
const TS_C_ENTER = '-enter';
const TS_C_LEAVE = '-leave';
const TS_C_ENTER_ACTIVE = '-enter-active';
const TS_C_LEAVE_ACTIVE = '-leave-active';
const TS_BEFORE_ENTER = 'before-enter';
const TS_AFTER_ENTER = 'after-enter';
const TS_BEFORE_LEAVE = 'before-leave';
const TS_AFTER_LEAVE = 'after-leave';
const TS_ENTER_CANCELLED = 'enter-cancelled';
const TS_LEAVE_CANCELLED = 'leave-cancelled';

const TS_STATE_ENTERING = 1;
const TS_STATE_ENTERED = 2;
const TS_STATE_LEAVING = 3;
const TS_STATE_LEAVED = 4;

function getDurationType(el) {
  const cst = Object(_dom__WEBPACK_IMPORTED_MODULE_0__["getComputedStyle"])(el);
  if (Object(_dom__WEBPACK_IMPORTED_MODULE_0__["getCSPropertyValue"])(cst, TS_TRANSITION_DURATION) !== TS_ZERO_S) {
    return TS_TRANSITION_END;
  } else if (Object(_dom__WEBPACK_IMPORTED_MODULE_0__["getCSPropertyValue"])(cst, TS_ANIMATION_DURATION) !== TS_ZERO_S) {
    return TS_ANIMATION_END;
  }
  return null;
}

function parseDuration(v) {
  if (/ms$/.test(v)) {
    return parseInt(v);
  } else if (/s$/.test(v)) {
    return parseFloat(v) * 1000;
  } else {
    return 0;
  }
}

function getDuration(el) {
  const cst = Object(_dom__WEBPACK_IMPORTED_MODULE_0__["getComputedStyle"])(el);
  let dur = Object(_dom__WEBPACK_IMPORTED_MODULE_0__["getCSPropertyValue"])(cst, TS_TRANSITION_DURATION);
  if (dur !== TS_ZERO_S) {
    return [TS_TRANSITION_END, parseDuration(dur)];
  }
  dur = Object(_dom__WEBPACK_IMPORTED_MODULE_0__["getCSPropertyValue"])(cst, TS_ANIMATION_DURATION);
  if (dur !== TS_ZERO_S) {
    return [TS_ANIMATION_END, parseDuration(dur)];
  }
  return [null, 0];
}


/***/ }),

/***/ "../../jinge-framework/dom/index.js":
/*!**********************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/dom/index.js ***!
  \**********************************************************/
/*! exports provided: getParent, setText, setAttribute, removeAttribute, setInputValue, createElement, createElementWithoutAttrs, createSVGElement, createSVGElementWithoutAttrs, createFragment, createTextNode, createElementWithChild, createComment, replaceChild, insertBefore, insertAfter, removeChild, appendChild, hasClass, toggleClass, addClass, removeClass, replaceClass, addEvent, removeEvent, registerEvent, getComputedStyle, getCSPropertyValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParent", function() { return getParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setText", function() { return setText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAttribute", function() { return setAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAttribute", function() { return removeAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInputValue", function() { return setInputValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElementWithoutAttrs", function() { return createElementWithoutAttrs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSVGElement", function() { return createSVGElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSVGElementWithoutAttrs", function() { return createSVGElementWithoutAttrs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFragment", function() { return createFragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTextNode", function() { return createTextNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElementWithChild", function() { return createElementWithChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComment", function() { return createComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceChild", function() { return replaceChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertBefore", function() { return insertBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertAfter", function() { return insertAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeChild", function() { return removeChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendChild", function() { return appendChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasClass", function() { return hasClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleClass", function() { return toggleClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceClass", function() { return replaceClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEvent", function() { return addEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEvent", function() { return removeEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerEvent", function() { return registerEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComputedStyle", function() { return getComputedStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCSPropertyValue", function() { return getCSPropertyValue; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge-framework/util/index.js");


function getParent($ele) {
  return $ele.parentNode;
}

function setText($element, text) {
  if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isArray"])(text)) {
    text = JSON.stringify(text);
  }
  $element.textContent = text;
}

function setAttribute($ele, attrName, attrValue) {
  if (!attrName) return;
  if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(attrName)) {
    for (const attrN in attrName) {
      setAttribute($ele, attrN, attrName[attrN]);
    }
    return;
  }
  if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(attrValue) || attrValue === null) {
    removeAttribute($ele, attrName);
  } else {
    $ele.setAttribute(attrName, attrValue);
  }
}

function removeAttribute($ele, attrName) {
  if (!attrName) return;
  if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(attrName)) {
    for (const attrN in attrName) {
      removeAttribute($ele, attrN);
    }
    return;
  }
  return $ele.removeAttribute(attrName);
}

function setInputValue($inputOrTextarea, value) {
  $inputOrTextarea.value = value;
}

function _createEl($el, attrs, children) {
  if (attrs) {
    for (const an in attrs) {
      if (an && !Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(attrs[an])) {
        setAttribute($el, an, attrs[an]);
      }
    }
  }
  children.forEach(child => appendChild($el, child));
  return $el;
}
function createElement(tag, attrs, ...children) {
  return _createEl(
    document.createElement(tag),
    attrs, children
  );
}

function createElementWithoutAttrs(tag, ...children) {
  return createElement(tag, null, ...children);
}

function createSVGElement(tag, attrs, ...children) {
  return _createEl(
    document.createElementNS('http://www.w3.org/2000/svg', tag),
    attrs, children
  );
}

function createSVGElementWithoutAttrs(tag, ...children) {
  return createSVGElement(tag, null, ...children);
}

function createFragment(children) {
  const $f = document.createDocumentFragment();
  if (children) children.forEach(c => appendChild($f, c));
  return $f;
}

function createTextNode(text) {
  return document.createTextNode(text);
}

function createElementWithChild(tag, attrs, child) {
  const $e = createElement(tag, attrs);
  appendChild($e, child);
  return $e;
}

function createComment(data) {
  return document.createComment(data);
}

function prepareNewNode(newNode) {
  if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isArray"])(newNode)) return newNode;
  if (newNode.length === 0) return null;
  else if (newNode.length === 1) return newNode[0];
  else {
    return createFragment(newNode);
  }
}

function replaceChild($parent, newNode, oldNode) {
  if (!(newNode = prepareNewNode(newNode))) {
    return;
  }
  $parent.replaceChild(newNode, oldNode);
}

function insertBefore($parent, newNode, referenceNode) {
  if (!(newNode = prepareNewNode(newNode))) {
    return;
  }
  $parent.insertBefore(newNode, referenceNode);
}

function insertAfter($parent, newNode, referenceNode) {
  if (!(newNode = prepareNewNode(newNode))) {
    return;
  }
  const rn = referenceNode.nextSibling;
  if (!rn) {
    appendChild($parent, newNode);
  } else {
    insertBefore($parent, newNode, rn);
  }
}

function removeChild($parent, $child) {
  $parent.removeChild($child);
}

function appendChild($parent, ...children) {
  children.forEach(ch => {
    if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isArray"])(ch)) {
      return ch.forEach(cc => appendChild($parent, cc));
    }
    if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isString"])(ch)) {
      ch = createTextNode(ch);
    }
    $parent.appendChild(ch);
  });
}

function hasClass($ele, className) {
  return $ele.classList.contains(className);
}

function toggleClass($ele, ...args) {
  return $ele.classList.toggle(...args);
}
function addClass($ele, className) {
  return toggleClass($ele, className, true);
}

function removeClass($ele, className) {
  return toggleClass($ele, className, false);
}

function replaceClass($ele, oldClass, newClass) {
  return $ele.classList.replace(oldClass, newClass);
}

function addEvent($element, eventName, handler, capture = false) {
  $element.addEventListener(eventName, handler, capture);
}

function removeEvent($element, eventName, handler) {
  $element.removeEventListener(eventName, handler);
}

/**
 * Add event to DOM element, similar as addEventListener,
 * but return deregister function which will call removeEventListener.
 *
 * @param {HtmlElement} $element
 * @param {String} eventName
 * @param {Function} handler
 * @param {Boolean|Object} capture
 * @returns {Function} deregister function which will removeEventListener
 */
function registerEvent($element, eventName, handler, capture) {
  addEvent($element, eventName, handler, capture);
  return function deregister() {
    removeEvent($element, eventName, handler);
  };
}

function getComputedStyle(el, pseudoElt) {
  return window.getComputedStyle(el, pseudoElt);
}

function getCSPropertyValue(cst, prop) {
  return cst.getPropertyValue(prop);
}


/***/ }),

/***/ "../../jinge-framework/index.js":
/*!******************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/index.js ***!
  \******************************************************/
/*! exports provided: ForComponent, LogComponent, IfComponent, SwitchComponent, I18nComponent, _TComponent, ParameterComponent, ToggleClassComponent, HideComponent, BindHtmlComponent, Component, AFTER_RENDER, BEFORE_DESTROY, UPDATE_IF_NEED, UPDATE, GET_REF, CONTEXT, GET_CONTEXT, SET_CONTEXT, DOM_ON, DOM_PASS_LISTENERS, RENDER, ARG_COMPONENTS, ROOT_NODES, NON_ROOT_COMPONENT_NODES, GET_FIRST_DOM, GET_LAST_DOM, GET_TRANSITION_DOM, isComponent, VM, wrapAttrs, vmWatch, vmUnwatch, VM_ON, VM_OFF, VM_NOTIFY, Messenger, NOTIFY, LISTENERS, ON, OFF, passMessengerListeners, _t, i18n, i18nPrefix, registerI18nData, i18nMessenger, I18N_DATA_CHANGED, bootstrap, Symbol, STR_DEFAULT, STR_JINGE, STR_EMPTY, isString, isObject, isFunction, isNumber, instanceOf, isUndefined, isBoolean, isArray, uid, obj2class, obj2style, setImmediate, clearImmediate, components, config, dom, core, util, viewmodel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "../../jinge-framework/components/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _components__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "../../jinge-framework/config/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "config", function() { return _config__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "../../jinge-framework/dom/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "dom", function() { return _dom__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core */ "../../jinge-framework/core/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "core", function() { return _core__WEBPACK_IMPORTED_MODULE_3__; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "../../jinge-framework/util/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "util", function() { return _util__WEBPACK_IMPORTED_MODULE_4__; });
/* harmony import */ var _viewmodel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./viewmodel */ "../../jinge-framework/viewmodel/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "viewmodel", function() { return _viewmodel__WEBPACK_IMPORTED_MODULE_5__; });
/* harmony import */ var _components_for__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/for */ "../../jinge-framework/components/for.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForComponent", function() { return _components_for__WEBPACK_IMPORTED_MODULE_6__["ForComponent"]; });

/* harmony import */ var _components_log__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/log */ "../../jinge-framework/components/log.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogComponent", function() { return _components_log__WEBPACK_IMPORTED_MODULE_7__["LogComponent"]; });

/* harmony import */ var _components_if__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/if */ "../../jinge-framework/components/if.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IfComponent", function() { return _components_if__WEBPACK_IMPORTED_MODULE_8__["IfComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitchComponent", function() { return _components_if__WEBPACK_IMPORTED_MODULE_8__["SwitchComponent"]; });

/* harmony import */ var _components_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/i18n */ "../../jinge-framework/components/i18n.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18nComponent", function() { return _components_i18n__WEBPACK_IMPORTED_MODULE_9__["I18nComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_TComponent", function() { return _components_i18n__WEBPACK_IMPORTED_MODULE_9__["_TComponent"]; });

/* harmony import */ var _components_parameter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/parameter */ "../../jinge-framework/components/parameter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParameterComponent", function() { return _components_parameter__WEBPACK_IMPORTED_MODULE_10__["ParameterComponent"]; });

/* harmony import */ var _components_class__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/class */ "../../jinge-framework/components/class.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleClassComponent", function() { return _components_class__WEBPACK_IMPORTED_MODULE_11__["ToggleClassComponent"]; });

/* harmony import */ var _components_hide__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/hide */ "../../jinge-framework/components/hide.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HideComponent", function() { return _components_hide__WEBPACK_IMPORTED_MODULE_12__["HideComponent"]; });

/* harmony import */ var _components_html__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/html */ "../../jinge-framework/components/html.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BindHtmlComponent", function() { return _components_html__WEBPACK_IMPORTED_MODULE_13__["BindHtmlComponent"]; });

/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/component */ "../../jinge-framework/core/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return _core_component__WEBPACK_IMPORTED_MODULE_14__["Component"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AFTER_RENDER", function() { return _core_component__WEBPACK_IMPORTED_MODULE_14__["AFTER_RENDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BEFORE_DESTROY", function() { return _core_component__WEBPACK_IMPORTED_MODULE_14__["BEFORE_DESTROY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_IF_NEED", function() { return _core_component__WEBPACK_IMPORTED_MODULE_14__["UPDATE_IF_NEED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE", function() { return _core_component__WEBPACK_IMPORTED_MODULE_14__["UPDATE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_REF", function() { return _core_component__WEBPACK_IMPORTED_MODULE_14__["GET_REF"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CONTEXT", function() { return _core_component__WEBPACK_IMPORTED_MODULE_14__["CONTEXT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_CONTEXT", function() { return _core_component__WEBPACK_IMPORTED_MODULE_14__["GET_CONTEXT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_CONTEXT", function() { return _core_component__WEBPACK_IMPORTED_MODULE_14__["SET_CONTEXT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DOM_ON", function() { return _core_component__WEBPACK_IMPORTED_MODULE_14__["DOM_ON"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DOM_PASS_LISTENERS", function() { return _core_component__WEBPACK_IMPORTED_MODULE_14__["DOM_PASS_LISTENERS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RENDER", function() { return _core_component__WEBPACK_IMPORTED_MODULE_14__["RENDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ARG_COMPONENTS", function() { return _core_component__WEBPACK_IMPORTED_MODULE_14__["ARG_COMPONENTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ROOT_NODES", function() { return _core_component__WEBPACK_IMPORTED_MODULE_14__["ROOT_NODES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NON_ROOT_COMPONENT_NODES", function() { return _core_component__WEBPACK_IMPORTED_MODULE_14__["NON_ROOT_COMPONENT_NODES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_FIRST_DOM", function() { return _core_component__WEBPACK_IMPORTED_MODULE_14__["GET_FIRST_DOM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_LAST_DOM", function() { return _core_component__WEBPACK_IMPORTED_MODULE_14__["GET_LAST_DOM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_TRANSITION_DOM", function() { return _core_component__WEBPACK_IMPORTED_MODULE_14__["GET_TRANSITION_DOM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isComponent", function() { return _core_component__WEBPACK_IMPORTED_MODULE_14__["isComponent"]; });

/* harmony import */ var _viewmodel_proxy__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./viewmodel/proxy */ "../../jinge-framework/viewmodel/proxy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM", function() { return _viewmodel_proxy__WEBPACK_IMPORTED_MODULE_15__["wrapViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrapAttrs", function() { return _viewmodel_proxy__WEBPACK_IMPORTED_MODULE_15__["wrapAttrs"]; });

/* harmony import */ var _viewmodel_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./viewmodel/core */ "../../jinge-framework/viewmodel/core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vmWatch", function() { return _viewmodel_core__WEBPACK_IMPORTED_MODULE_16__["vmWatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vmUnwatch", function() { return _viewmodel_core__WEBPACK_IMPORTED_MODULE_16__["vmUnwatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_ON", function() { return _viewmodel_core__WEBPACK_IMPORTED_MODULE_16__["VM_ON"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_OFF", function() { return _viewmodel_core__WEBPACK_IMPORTED_MODULE_16__["VM_OFF"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_NOTIFY", function() { return _viewmodel_core__WEBPACK_IMPORTED_MODULE_16__["VM_NOTIFY"]; });

/* harmony import */ var _core_messenger__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./core/messenger */ "../../jinge-framework/core/messenger.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Messenger", function() { return _core_messenger__WEBPACK_IMPORTED_MODULE_17__["Messenger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NOTIFY", function() { return _core_messenger__WEBPACK_IMPORTED_MODULE_17__["NOTIFY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LISTENERS", function() { return _core_messenger__WEBPACK_IMPORTED_MODULE_17__["LISTENERS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ON", function() { return _core_messenger__WEBPACK_IMPORTED_MODULE_17__["ON"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OFF", function() { return _core_messenger__WEBPACK_IMPORTED_MODULE_17__["OFF"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "passMessengerListeners", function() { return _core_messenger__WEBPACK_IMPORTED_MODULE_17__["passListeners"]; });

/* harmony import */ var _core_i18n__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./core/i18n */ "../../jinge-framework/core/i18n.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_t", function() { return _core_i18n__WEBPACK_IMPORTED_MODULE_18__["_t"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i18n", function() { return _core_i18n__WEBPACK_IMPORTED_MODULE_18__["i18n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i18nPrefix", function() { return _core_i18n__WEBPACK_IMPORTED_MODULE_18__["prefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerI18nData", function() { return _core_i18n__WEBPACK_IMPORTED_MODULE_18__["registerData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i18nMessenger", function() { return _core_i18n__WEBPACK_IMPORTED_MODULE_18__["messenger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18N_DATA_CHANGED", function() { return _core_i18n__WEBPACK_IMPORTED_MODULE_18__["I18N_DATA_CHANGED"]; });

/* harmony import */ var _core_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./core/bootstrap */ "../../jinge-framework/core/bootstrap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bootstrap", function() { return _core_bootstrap__WEBPACK_IMPORTED_MODULE_19__["bootstrap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Symbol", function() { return _util__WEBPACK_IMPORTED_MODULE_4__["Symbol"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STR_DEFAULT", function() { return _util__WEBPACK_IMPORTED_MODULE_4__["STR_DEFAULT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STR_JINGE", function() { return _util__WEBPACK_IMPORTED_MODULE_4__["STR_JINGE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STR_EMPTY", function() { return _util__WEBPACK_IMPORTED_MODULE_4__["STR_EMPTY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _util__WEBPACK_IMPORTED_MODULE_4__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _util__WEBPACK_IMPORTED_MODULE_4__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _util__WEBPACK_IMPORTED_MODULE_4__["isFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _util__WEBPACK_IMPORTED_MODULE_4__["isNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "instanceOf", function() { return _util__WEBPACK_IMPORTED_MODULE_4__["instanceOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _util__WEBPACK_IMPORTED_MODULE_4__["isUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return _util__WEBPACK_IMPORTED_MODULE_4__["isBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _util__WEBPACK_IMPORTED_MODULE_4__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uid", function() { return _util__WEBPACK_IMPORTED_MODULE_4__["uid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "obj2class", function() { return _util__WEBPACK_IMPORTED_MODULE_4__["obj2class"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "obj2style", function() { return _util__WEBPACK_IMPORTED_MODULE_4__["obj2style"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setImmediate", function() { return _util__WEBPACK_IMPORTED_MODULE_4__["setImmediate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearImmediate", function() { return _util__WEBPACK_IMPORTED_MODULE_4__["clearImmediate"]; });



























/***/ }),

/***/ "../../jinge-framework/util/array.js":
/*!***********************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/util/array.js ***!
  \***********************************************************/
/*! exports provided: arrayIndexOf, arrayRemove, arrayPushIfNotExist, arrayFind, arrayFindIndex, arrayEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayIndexOf", function() { return arrayIndexOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayRemove", function() { return arrayRemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayPushIfNotExist", function() { return arrayPushIfNotExist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayFind", function() { return arrayFind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayFindIndex", function() { return arrayFindIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayEqual", function() { return arrayEqual; });

function arrayIndexOf(array, item) {
  return array.indexOf(item);
}

function arrayRemove(array, item) {
  const idx = arrayIndexOf(array, item);
  if (idx < 0) return false;
  array.splice(idx, 1);
  return true;
}

function arrayPushIfNotExist(array, item) {
  const idx = arrayIndexOf(array, item);
  if (idx >= 0) return;
  array.push(item);
}

function arrayFind(array, predicate) {
  if (array.find) {
    return array.find(predicate);
  } else {
    const i = arrayFindIndex(array, predicate);
    return i >= 0 ? array[i] : null;
  }
}

function arrayFindIndex(array, predicate) {
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i], i)) return i;
  }
  return -1;
}

function arrayEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}


/***/ }),

/***/ "../../jinge-framework/util/common.js":
/*!************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/util/common.js ***!
  \************************************************************/
/*! exports provided: Symbol, assertFail, startsWith, endsWith, defineProperty, assignObject, obj2class, obj2style, defineProperties, getOwnPropertyNames, getOwnPropertySymbols, isPropertyEnumerable, createEmptyObject, uid, raf, caf, mapObject, getOrCreateProperty, getOrCreateValueOfMap, getOrCreateMapProperty, getOrCreateArrayValueOfMap, getOrCreateArrayProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Symbol", function() { return Symbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertFail", function() { return assertFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startsWith", function() { return startsWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endsWith", function() { return endsWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineProperty", function() { return defineProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignObject", function() { return assignObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "obj2class", function() { return obj2class; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "obj2style", function() { return obj2style; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineProperties", function() { return defineProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOwnPropertyNames", function() { return getOwnPropertyNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOwnPropertySymbols", function() { return getOwnPropertySymbols; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPropertyEnumerable", function() { return isPropertyEnumerable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEmptyObject", function() { return createEmptyObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uid", function() { return uid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raf", function() { return raf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caf", function() { return caf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapObject", function() { return mapObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrCreateProperty", function() { return getOrCreateProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrCreateValueOfMap", function() { return getOrCreateValueOfMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrCreateMapProperty", function() { return getOrCreateMapProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrCreateArrayValueOfMap", function() { return getOrCreateArrayValueOfMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrCreateArrayProperty", function() { return getOrCreateArrayProperty; });

function Symbol(description) {
  return window.Symbol(description);
}

function assertFail(msg) {
  msg && console.error(msg);
  throw new Error('assert failed!');
}

function startsWith(str, search, position = 0) {
  return str.startsWith(search, position);
}

function endsWith(str, search, endPosition) {
  return str.endsWith(search, endPosition);
}

function defineProperty(...args) {
  return Object.defineProperty(...args);
}

function assignObject(target, ...srcs) {
  return Object.assign(target, ...srcs);
}

function obj2class(obj, prepend) {
  const classes = Object.keys(obj).filter(k => obj[k]).join(' ').trim();
  return prepend ? `${prepend}${classes ? ' ' + classes : ''}` : classes;
}

function obj2style(obj) {
  return Object.keys(obj).map(k => {
    return `${k}: ${obj[k]}`;
  }).join(';').trim();
}

function defineProperties(...args) {
  return Object.defineProperties(...args);
}

/**
 * @param {Object} obj
 * @param {Function} enumFn
 */
function getOwnPropertyNames(obj, enumFn) {
  const ns = Object.getOwnPropertyNames(obj);
  if (enumFn) ns.forEach(enumFn);
  return ns;
}

/**
 * @param {Object} obj
 * @param {Function} enumFn
 */
function getOwnPropertySymbols(obj, enumFn) {
  const ss = Object.getOwnPropertySymbols(obj);
  if (enumFn) ss.forEach(enumFn);
  return ss;
}

function isPropertyEnumerable(obj, key) {
  return Object.prototype.propertyIsEnumerable.call(obj, key);
}

function createEmptyObject(o) {
  return Object.create(o || null);
}

function uid() {
  return Date.now().toString(32) + Math.floor(Math.random() * 0xffff).toString(32);
}

const raf = window.requestAnimationFrame;
const caf = window.cancelAnimationFrame;

function mapObject(obj, fn) {
  const newObj = {};
  for (const k in obj) {
    newObj[k] = fn(obj[k], k);
  }
  return newObj;
}

function getOrCreateProperty(obj, property, fn) {
  let v = obj[property];
  if (!v) {
    v = obj[property] = fn();
  }
  return v;
}

function getOrCreateValueOfMap(map, key, fn) {
  let v = map.get(key);
  if (!v) {
    v = fn();
    map.set(key, v);
  }
  return v;
}

function getOrCreateMapProperty(obj, property) {
  return getOrCreateProperty(obj, property, () => new Map());
}

function getOrCreateArrayValueOfMap(map, key) {
  return getOrCreateValueOfMap(map, key, () => []);
}

function getOrCreateArrayProperty(obj, property) {
  return getOrCreateProperty(obj, property, () => []);
}


/***/ }),

/***/ "../../jinge-framework/util/const.js":
/*!***********************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/util/const.js ***!
  \***********************************************************/
/*! exports provided: STR_DEFAULT, STR_JINGE, STR_EMPTY, STR_LENGTH, BEFORE_DESTROY_EVENT_NAME, AFTER_RENDER_EVENT_NAME, HTML_ATTR_checked, HTML_ATTR_disabled, HTML_ATTR_selected, HTML_ATTR_readOnly, HTML_ATTR_autofocus, HTML_ATTR_autocomplete, HTML_ATTR_required, HTML_ATTR_controls, HTML_ATTR_autoplay, HTML_ATTR_draggable, HTML_ATTR_multiple, HTML_ATTR_muted, HTML_ATTR_value */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STR_DEFAULT", function() { return STR_DEFAULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STR_JINGE", function() { return STR_JINGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STR_EMPTY", function() { return STR_EMPTY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STR_LENGTH", function() { return STR_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BEFORE_DESTROY_EVENT_NAME", function() { return BEFORE_DESTROY_EVENT_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AFTER_RENDER_EVENT_NAME", function() { return AFTER_RENDER_EVENT_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_checked", function() { return HTML_ATTR_checked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_disabled", function() { return HTML_ATTR_disabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_selected", function() { return HTML_ATTR_selected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_readOnly", function() { return HTML_ATTR_readOnly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_autofocus", function() { return HTML_ATTR_autofocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_autocomplete", function() { return HTML_ATTR_autocomplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_required", function() { return HTML_ATTR_required; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_controls", function() { return HTML_ATTR_controls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_autoplay", function() { return HTML_ATTR_autoplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_draggable", function() { return HTML_ATTR_draggable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_multiple", function() { return HTML_ATTR_multiple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_muted", function() { return HTML_ATTR_muted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_value", function() { return HTML_ATTR_value; });
const STR_DEFAULT = 'default';
const STR_JINGE = 'jinge';
const STR_EMPTY = 'empty';
const STR_LENGTH = 'length';

const BEFORE_DESTROY_EVENT_NAME = 'jinge.before-destroy';
const AFTER_RENDER_EVENT_NAME = 'jinge.after-render';

/* eslint camelcase: "off" */
/**
 * Constants below are prepared for code auto generated by compiler.
 */
const HTML_ATTR_checked = 'checked';
const HTML_ATTR_disabled = 'disabled';
const HTML_ATTR_selected = 'selected';
const HTML_ATTR_readOnly = 'readOnly';
const HTML_ATTR_autofocus = 'autofocus';
const HTML_ATTR_autocomplete = 'autocomplete';
const HTML_ATTR_required = 'required';
const HTML_ATTR_controls = 'controls';
const HTML_ATTR_autoplay = 'autoplay';
const HTML_ATTR_draggable = 'draggable';
const HTML_ATTR_multiple = 'multiple';
const HTML_ATTR_muted = 'muted';
const HTML_ATTR_value = 'value';


/***/ }),

/***/ "../../jinge-framework/util/diff.js":
/*!**********************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/util/diff.js ***!
  \**********************************************************/
/*! exports provided: diffArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diffArray", function() { return diffArray; });
/**
 * A javascript array differencing implementation.
 * Based on the algorithm proposed in ["An O(ND) Difference Algorithm and its Variations" (Myers, 1986)](http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.4.6927).
 *
 * Code bellow is copied from https://github.com/kpdecker/jsdiff/blob/master/src/diff/base.js
 * Modified by Yuhang Ge.
 *
 * NOTICE: This file is not used!
 */

function createSeg(type, count, value = null) {
  return {
    type, count, value
  };
}

function extractCommon(basePath, newArr, oldArr, diagonalPath) {
  const newLen = newArr.length;
  const oldLen = oldArr.length;
  let newPos = basePath.newPos;
  let oldPos = newPos - diagonalPath;
  let commonCount = 0;
  while (newPos + 1 < newLen && oldPos + 1 < oldLen && newArr[newPos + 1] === oldArr[oldPos + 1]) {
    newPos++;
    oldPos++;
    commonCount++;
  }

  if (commonCount) {
    basePath.components.push(createSeg(0, commonCount));
  }

  basePath.newPos = newPos;
  return oldPos;
}

function pushComponent(components, type) {
  const last = components[components.length - 1];
  if (last && last.type === type) {
    // We need to clone here as the component clone operation is just
    // as shallow array clone
    components[components.length - 1] = createSeg(type, last.count + 1);
  } else {
    components.push(createSeg(type, 1));
  }
}

function clonePath(path) {
  return createPath(path.newPos, path.components.slice());
}

function createPath(newPos, components) {
  return {
    newPos, components
  };
}

function buildValues(components, newArr, oldArr, useLongestToken) {
  const componentLen = components.length;
  let componentPos = 0;
  let newPos = 0;
  let oldPos = 0;

  for (; componentPos < componentLen; componentPos++) {
    const component = components[componentPos];
    if (component.type >= 0) {
      if (component.type <= 0 && useLongestToken) {
        let value = newArr.slice(newPos, newPos + component.count);
        value = value.map(function(value, i) {
          const oldValue = oldArr[oldPos + i];
          return oldValue.length > value.length ? oldValue : value;
        });

        component.value = value;
      } else {
        component.value = newArr.slice(newPos, newPos + component.count);
      }
      newPos += component.count;

      // Common case
      if (component.type <= 0) {
        oldPos += component.count;
      }
    } else {
      component.value = oldArr.slice(oldPos, oldPos + component.count);
      oldPos += component.count;

      // Reverse add and remove so removes are output first to match common convention
      // The diffing algorithm is tied to add then remove output and this is the simplest
      // route to get the desired output with minimal overhead.
      if (componentPos && components[componentPos - 1].type > 0) {
        const tmp = components[componentPos - 1];
        components[componentPos - 1] = components[componentPos];
        components[componentPos] = tmp;
      }
    }
  }

  return components;
}

function diffArray(oldArr, newArr) {
  const newLen = newArr.length;
  const oldLen = oldArr.length;
  const maxEditLength = newLen + oldLen;
  const bestPath = [createPath(-1, [])];

  // Seed editLength = 0, i.e. the content starts with the same values
  const oldPos = extractCommon(bestPath[0], newArr, oldArr, 0);
  if (bestPath[0].newPos + 1 >= newLen && oldPos + 1 >= oldLen) {
    // Identity per the equality and tokenizer
    return [createSeg(0, newArr.length, newArr)]; // nothing changed.
  }

  let editLength = 1;
  // Main worker method. checks all permutations of a given edit length for acceptance.
  function execEditLength() {
    for (let diagonalPath = -1 * editLength; diagonalPath <= editLength; diagonalPath += 2) {
      let basePath;
      const addPath = bestPath[diagonalPath - 1];
      const removePath = bestPath[diagonalPath + 1];
      let oldPos = (removePath ? removePath.newPos : 0) - diagonalPath;
      if (addPath) {
        // No one else is going to attempt to use this value, clear it
        bestPath[diagonalPath - 1] = null;
      }

      const canAdd = addPath && addPath.newPos + 1 < newLen;
      const canRemove = removePath && oldPos >= 0 && oldPos < oldLen;
      if (!canAdd && !canRemove) {
        // If this path is a terminal then prune
        bestPath[diagonalPath] = null;
        continue;
      }

      // Select the diagonal that we want to branch from. We select the prior
      // path whose position in the new string is the farthest from the origin
      // and does not pass the bounds of the diff graph
      if (!canAdd || (canRemove && addPath.newPos < removePath.newPos)) {
        basePath = clonePath(removePath);
        pushComponent(basePath.components, -1);
      } else {
        basePath = addPath; // No need to clone, we've pulled it from the list
        basePath.newPos++;
        pushComponent(basePath.components, 1);
      }

      oldPos = extractCommon(basePath, newArr, oldArr, diagonalPath);

      // If we have hit the end of both strings, then we are done
      if (basePath.newPos + 1 >= newLen && oldPos + 1 >= oldLen) {
        return buildValues(basePath.components, newArr, oldArr);
      } else {
        // Otherwise track this path as a potential candidate and continue.
        bestPath[diagonalPath] = basePath;
      }
    }

    editLength++;
  }

  while (editLength <= maxEditLength) {
    const ret = execEditLength();
    if (ret) {
      return ret;
    }
  }

  // This should never happen, but we want to be safe.
  // Return null means nothing changed.
  return null;
}


/***/ }),

/***/ "../../jinge-framework/util/index.js":
/*!***********************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/util/index.js ***!
  \***********************************************************/
/*! exports provided: typeOf, isObject, isString, isNumber, isUndefined, isArray, isBoolean, isFunction, instanceOf, isDOMNode, isPromise, arrayIndexOf, arrayRemove, arrayPushIfNotExist, arrayFind, arrayFindIndex, arrayEqual, diffArray, STR_DEFAULT, STR_JINGE, STR_EMPTY, STR_LENGTH, BEFORE_DESTROY_EVENT_NAME, AFTER_RENDER_EVENT_NAME, HTML_ATTR_checked, HTML_ATTR_disabled, HTML_ATTR_selected, HTML_ATTR_readOnly, HTML_ATTR_autofocus, HTML_ATTR_autocomplete, HTML_ATTR_required, HTML_ATTR_controls, HTML_ATTR_autoplay, HTML_ATTR_draggable, HTML_ATTR_multiple, HTML_ATTR_muted, HTML_ATTR_value, Symbol, assertFail, startsWith, endsWith, defineProperty, assignObject, obj2class, obj2style, defineProperties, getOwnPropertyNames, getOwnPropertySymbols, isPropertyEnumerable, createEmptyObject, uid, raf, caf, mapObject, getOrCreateProperty, getOrCreateValueOfMap, getOrCreateMapProperty, getOrCreateArrayValueOfMap, getOrCreateArrayProperty, setImmediate, clearImmediate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "../../jinge-framework/util/type.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "typeOf", function() { return _type__WEBPACK_IMPORTED_MODULE_0__["typeOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _type__WEBPACK_IMPORTED_MODULE_0__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _type__WEBPACK_IMPORTED_MODULE_0__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _type__WEBPACK_IMPORTED_MODULE_0__["isNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _type__WEBPACK_IMPORTED_MODULE_0__["isUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _type__WEBPACK_IMPORTED_MODULE_0__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return _type__WEBPACK_IMPORTED_MODULE_0__["isBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _type__WEBPACK_IMPORTED_MODULE_0__["isFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "instanceOf", function() { return _type__WEBPACK_IMPORTED_MODULE_0__["instanceOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDOMNode", function() { return _type__WEBPACK_IMPORTED_MODULE_0__["isDOMNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return _type__WEBPACK_IMPORTED_MODULE_0__["isPromise"]; });

/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "../../jinge-framework/util/array.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayIndexOf", function() { return _array__WEBPACK_IMPORTED_MODULE_1__["arrayIndexOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayRemove", function() { return _array__WEBPACK_IMPORTED_MODULE_1__["arrayRemove"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayPushIfNotExist", function() { return _array__WEBPACK_IMPORTED_MODULE_1__["arrayPushIfNotExist"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayFind", function() { return _array__WEBPACK_IMPORTED_MODULE_1__["arrayFind"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayFindIndex", function() { return _array__WEBPACK_IMPORTED_MODULE_1__["arrayFindIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayEqual", function() { return _array__WEBPACK_IMPORTED_MODULE_1__["arrayEqual"]; });

/* harmony import */ var _diff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./diff */ "../../jinge-framework/util/diff.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "diffArray", function() { return _diff__WEBPACK_IMPORTED_MODULE_2__["diffArray"]; });

/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./const */ "../../jinge-framework/util/const.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STR_DEFAULT", function() { return _const__WEBPACK_IMPORTED_MODULE_3__["STR_DEFAULT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STR_JINGE", function() { return _const__WEBPACK_IMPORTED_MODULE_3__["STR_JINGE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STR_EMPTY", function() { return _const__WEBPACK_IMPORTED_MODULE_3__["STR_EMPTY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STR_LENGTH", function() { return _const__WEBPACK_IMPORTED_MODULE_3__["STR_LENGTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BEFORE_DESTROY_EVENT_NAME", function() { return _const__WEBPACK_IMPORTED_MODULE_3__["BEFORE_DESTROY_EVENT_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AFTER_RENDER_EVENT_NAME", function() { return _const__WEBPACK_IMPORTED_MODULE_3__["AFTER_RENDER_EVENT_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_checked", function() { return _const__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTR_checked"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_disabled", function() { return _const__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTR_disabled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_selected", function() { return _const__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTR_selected"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_readOnly", function() { return _const__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTR_readOnly"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_autofocus", function() { return _const__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTR_autofocus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_autocomplete", function() { return _const__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTR_autocomplete"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_required", function() { return _const__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTR_required"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_controls", function() { return _const__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTR_controls"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_autoplay", function() { return _const__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTR_autoplay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_draggable", function() { return _const__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTR_draggable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_multiple", function() { return _const__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTR_multiple"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_muted", function() { return _const__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTR_muted"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_value", function() { return _const__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTR_value"]; });

/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common */ "../../jinge-framework/util/common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Symbol", function() { return _common__WEBPACK_IMPORTED_MODULE_4__["Symbol"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertFail", function() { return _common__WEBPACK_IMPORTED_MODULE_4__["assertFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startsWith", function() { return _common__WEBPACK_IMPORTED_MODULE_4__["startsWith"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endsWith", function() { return _common__WEBPACK_IMPORTED_MODULE_4__["endsWith"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineProperty", function() { return _common__WEBPACK_IMPORTED_MODULE_4__["defineProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assignObject", function() { return _common__WEBPACK_IMPORTED_MODULE_4__["assignObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "obj2class", function() { return _common__WEBPACK_IMPORTED_MODULE_4__["obj2class"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "obj2style", function() { return _common__WEBPACK_IMPORTED_MODULE_4__["obj2style"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineProperties", function() { return _common__WEBPACK_IMPORTED_MODULE_4__["defineProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOwnPropertyNames", function() { return _common__WEBPACK_IMPORTED_MODULE_4__["getOwnPropertyNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOwnPropertySymbols", function() { return _common__WEBPACK_IMPORTED_MODULE_4__["getOwnPropertySymbols"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPropertyEnumerable", function() { return _common__WEBPACK_IMPORTED_MODULE_4__["isPropertyEnumerable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createEmptyObject", function() { return _common__WEBPACK_IMPORTED_MODULE_4__["createEmptyObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uid", function() { return _common__WEBPACK_IMPORTED_MODULE_4__["uid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "raf", function() { return _common__WEBPACK_IMPORTED_MODULE_4__["raf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "caf", function() { return _common__WEBPACK_IMPORTED_MODULE_4__["caf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapObject", function() { return _common__WEBPACK_IMPORTED_MODULE_4__["mapObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOrCreateProperty", function() { return _common__WEBPACK_IMPORTED_MODULE_4__["getOrCreateProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOrCreateValueOfMap", function() { return _common__WEBPACK_IMPORTED_MODULE_4__["getOrCreateValueOfMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOrCreateMapProperty", function() { return _common__WEBPACK_IMPORTED_MODULE_4__["getOrCreateMapProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOrCreateArrayValueOfMap", function() { return _common__WEBPACK_IMPORTED_MODULE_4__["getOrCreateArrayValueOfMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOrCreateArrayProperty", function() { return _common__WEBPACK_IMPORTED_MODULE_4__["getOrCreateArrayProperty"]; });

/* harmony import */ var _setimm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setimm */ "../../jinge-framework/util/setimm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setImmediate", function() { return _setimm__WEBPACK_IMPORTED_MODULE_5__["setImmediate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearImmediate", function() { return _setimm__WEBPACK_IMPORTED_MODULE_5__["clearImmediate"]; });










/***/ }),

/***/ "../../jinge-framework/util/setimm.js":
/*!************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/util/setimm.js ***!
  \************************************************************/
/*! exports provided: setImmediate, clearImmediate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setImmediate", function() { return setImmediate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearImmediate", function() { return clearImmediate; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "../../jinge-framework/util/type.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "../../jinge-framework/util/common.js");
/**
 * setImmediate polyfill only for modern browsers
 * Copied from https://github.com/YuzuJS/setImmediate/blob/master/setImmediate.js
 * Simplified by Yuhang-Ge<abeyuhang@gmail.com>
 */



let nextHandle = 1; // Spec says greater than zero
let tasksByHandle;
let currentlyRunningATask = false;
let registerImmediate;

function setImmediateFallback(callback) {
  if (!Object(_type__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(callback) || arguments.length > 1) Object(_common__WEBPACK_IMPORTED_MODULE_1__["assertFail"])();
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
    return setTimeout(runIfPresent, 0, handle);
  }
  const callback = tasksByHandle.get(handle);
  // console.log('stttt', handle, callback);

  if (!callback) return;
  currentlyRunningATask = true;
  try {
    callback();
  } finally {
    clearImmediateFallback(handle);
    currentlyRunningATask = false;
  }
}

if (Object(_type__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(window.setImmediate)) {
  tasksByHandle = new Map();
  const messagePrefix = 'setImmediate$' + Object(_common__WEBPACK_IMPORTED_MODULE_1__["uid"])() + '$';
  window.addEventListener('message', event => {
    if (event.source === window &&
      Object(_type__WEBPACK_IMPORTED_MODULE_0__["isString"])(event.data) &&
      Object(_common__WEBPACK_IMPORTED_MODULE_1__["startsWith"])(event.data, messagePrefix)) {
      runIfPresent(Number(event.data.slice(messagePrefix.length)));
    }
  }, false);

  registerImmediate = function(handle) {
    window.postMessage(messagePrefix + handle, '*');
  };
}

const setImmediate = window.setImmediate || setImmediateFallback;
const clearImmediate = window.clearImmediate || clearImmediateFallback;


/***/ }),

/***/ "../../jinge-framework/util/type.js":
/*!**********************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/util/type.js ***!
  \**********************************************************/
/*! exports provided: typeOf, isObject, isString, isNumber, isUndefined, isArray, isBoolean, isFunction, instanceOf, isDOMNode, isPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeOf", function() { return typeOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return isBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instanceOf", function() { return instanceOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDOMNode", function() { return isDOMNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return isPromise; });
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
  // const ov = isObject(v) && v.constructor === Array;
  // const nv = Array.isArray(v);
  // if (ov !== nv) debugger
  return Array.isArray(v);
  // return isObject(v) && (
  //   v.constructor === Array ||
  //   Object.prototype.toString.call(v) === '[object Array]'
  // );
}

function isBoolean(v) {
  return typeof v === 'boolean' || instanceOf(v, Boolean);
}

function isFunction(v) {
  return typeOf(v) === 'function';
}

function instanceOf(v, Clazz) {
  return v instanceof Clazz;
}

function isDOMNode(ele) {
  return instanceOf(ele, Node);
}

function isPromise(obj) {
  return isObject(obj) && isFunction(obj.then);
}


/***/ }),

/***/ "../../jinge-framework/viewmodel/core.js":
/*!***************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/viewmodel/core.js ***!
  \***************************************************************/
/*! exports provided: VM_ATTRS, VM_DEBUG_ID, VM_DEBUG_NAME, PROXY, VM_ON, VM_OFF, VM_NOTIFY, NOTIFIABLE, ADD_PARENT, REMOVE_PARENT, SHIFT_PARENT, DESTROY, isInnerObj, isViewModel, isPublicProp, ViewModelAttrs, vmWatch, vmUnwatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(setImmediate) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VM_ATTRS", function() { return VM_ATTRS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VM_DEBUG_ID", function() { return VM_DEBUG_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VM_DEBUG_NAME", function() { return VM_DEBUG_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROXY", function() { return PROXY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VM_ON", function() { return VM_ON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VM_OFF", function() { return VM_OFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VM_NOTIFY", function() { return VM_NOTIFY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTIFIABLE", function() { return NOTIFIABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_PARENT", function() { return ADD_PARENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_PARENT", function() { return REMOVE_PARENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHIFT_PARENT", function() { return SHIFT_PARENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESTROY", function() { return DESTROY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInnerObj", function() { return isInnerObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isViewModel", function() { return isViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPublicProp", function() { return isPublicProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewModelAttrs", function() { return ViewModelAttrs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vmWatch", function() { return vmWatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vmUnwatch", function() { return vmUnwatch; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge-framework/util/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "../../jinge-framework/config/index.js");



const VM_ATTRS = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('vm_injected_attrs');
const VM_DEBUG_ID = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('id');
const VM_DEBUG_NAME = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('name');
const PROXY = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('wrapper_proxy_of_host');
const VM_ON = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('fn_add_listener');
const VM_OFF = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('fn_remove_listener');
const VM_NOTIFY = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('fn_notify_listener');

const NOTIFIABLE = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('notifiable');
const HOST = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('host');
const PARENTS = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('parents');
const LISTENERS_STAR = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('*');
const LISTENERS_DBSTAR = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('**');
const LISTENERS = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('listeners');
const LISTENERS_ID = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('listenrs_id');
const LISTENERS_PARENT = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('vm_listeners_parent');
const LISTENERS_HANDLERS = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('vm_listeners_handlers');
const LISTENERS_IMMS = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('vm_listeners_imms');

const ADD_PARENT = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('fn_add_parent');
const REMOVE_PARENT = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('fn_remove_parent');
const SHIFT_PARENT = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('fn_shift_parent');
const DESTROY = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('fn_destroy');

function isInnerObj(v) {
  const clazz = v.constructor;
  return clazz === RegExp || clazz === Date || clazz === Boolean;
}
function isViewModel(obj) {
  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(obj) && !isInnerObj(obj) && (VM_ATTRS in obj);
}

function isPublicProp(v) {
  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["isString"])(v) && v.charCodeAt(0) !== 95;
}

class Node {
  constructor(parentNode, propertyName) {
    this[LISTENERS_PARENT] = parentNode;
    this[LISTENERS_ID] = propertyName;
    this[LISTENERS] = null;
    this[LISTENERS_HANDLERS] = null;
  }
}

function getPropN(v) {
  if (v === LISTENERS_DBSTAR || v === LISTENERS_STAR || Object(_util__WEBPACK_IMPORTED_MODULE_0__["isString"])(v)) {
    return v;
  }
  return v.toString();
}

function loopCreateNode(vm, props, level = 0) {
  const propertyName = getPropN(props[level]);
  const listeners = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getOrCreateMapProperty"])(vm, LISTENERS);
  let node = listeners.get(propertyName);
  if (!node) {
    node = new Node(vm, propertyName);
    listeners.set(propertyName, node);
  }
  if (props.length - 1 === level) {
    return node;
  } else {
    return loopCreateNode(node, props, level + 1);
  }
}

function loopGetNode(vm, props, level = 0) {
  const propertyName = getPropN(props[level]);
  const listeners = vm[LISTENERS];
  const node = listeners.get(propertyName);
  if (!node) {
    return null;
  }
  if (props.length - 1 === level) {
    return node;
  } else {
    return loopGetNode(node, props, level + 1);
  }
}

function loopDelNode(node) {
  if (!node[LISTENERS_HANDLERS] ||
    !node[LISTENERS] ||
    node[LISTENERS_HANDLERS].length > 0 ||
    node[LISTENERS].size > 0
  ) {
    return;
  }
  /**
   * if one node don't have any listener or child, delete it.
   */
  const parent = node[LISTENERS_PARENT];
  const id = node[LISTENERS_ID];
  node[LISTENERS_PARENT] = null; // unlink parent.
  parent[LISTENERS].delete(id);
  loopDelNode(parent);
}

function loopClearNode(node) {
  const listeners = node[LISTENERS];
  if (listeners) {
    listeners.forEach(sn => loopClearNode(sn));
    listeners.clear();
  }
  const handlers = node[LISTENERS_HANDLERS];
  if (handlers) {
    handlers.length = 0;
  }
  node[LISTENERS] =
    node[LISTENERS_HANDLERS] = null;
}

const _handleTasks = new Map();
function _handleOnce(node, handler, propPath, imms) {
  const _has = _handleTasks.has(handler);
  _handleTasks.set(handler, propPath);
  if (_has) {
    return;
  }
  const imm = setImmediate(() => {
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["arrayRemove"])(imms, imm);
    try {
      handler(_handleTasks.get(handler));
    } finally {
      _handleTasks.delete(handler);
    }
  });
  imms.push(imm);
}

function loopHandle(propPath, node, imms) {
  const handlers = node[LISTENERS_HANDLERS];
  handlers && handlers.forEach(handler => {
    imms ? _handleOnce(node, handler, propPath, imms) : handler(propPath);
  });
  const listeners = node[LISTENERS];
  listeners && listeners.forEach(c => {
    loopHandle(propPath, c, imms);
  });
}

function loopNotify(vm, props, imms, level = 0) {
  const listeners = vm[LISTENERS];
  if (!listeners) return;

  const propertyName = getPropN(props[level]);
  let node = listeners.get(propertyName);
  if (node) {
    if (props.length - 1 === level) {
      loopHandle(props, node, _config__WEBPACK_IMPORTED_MODULE_1__["config"][_config__WEBPACK_IMPORTED_MODULE_1__["CFG_VM_DEBUG"]] ? null : imms);
    } else {
      loopNotify(node, props, imms, level + 1);
    }
  }
  node = listeners.get(LISTENERS_STAR);
  if (node) {
    if (props.length - 1 === level) {
      loopHandle(props, node, null);
    } else {
      loopNotify(node, props, imms, level + 1);
    }
  }
  node = listeners.get(LISTENERS_DBSTAR);
  if (node) {
    loopHandle(props, node, null);
  }
}

function getProps(prop) {
  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["isString"])(prop) ? (
    prop.indexOf('.') > 0 ? prop.split('.') : [prop]
  ) : prop;
}

class ViewModelAttrs {
  constructor(host) {
    this[HOST] = host;
    this[NOTIFIABLE] = true;
    this[VM_DEBUG_ID] = null;
    this[VM_DEBUG_NAME] = null;
    this[PARENTS] = null;
    this[PROXY] = null;
    this[LISTENERS] = null;
    this[LISTENERS_IMMS] = null;
  }

  [ADD_PARENT](parent, prop) {
    const pArr = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getOrCreateArrayProperty"])(this, PARENTS);
    pArr.push([parent, prop]);
  }

  [REMOVE_PARENT](parent, prop) {
    const pArr = this[PARENTS];
    if (!pArr) return;
    const idx = pArr.findIndex(ps => ps[0] === parent && ps[1] === prop);
    if (idx >= 0) pArr.splice(idx, 1);
  }

  [SHIFT_PARENT](parent, prop, delta) {
    const pArr = this[PARENTS];
    if (!pArr) return;
    const ps = pArr.find(ps => ps[0] === parent && ps[1] === prop);
    if (ps) {
      ps[1] += delta;
    }
  }

  [VM_ON](prop, handler) {
    const node = loopCreateNode(this, getProps(prop));
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["arrayPushIfNotExist"])(
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["getOrCreateArrayProperty"])(node, LISTENERS_HANDLERS),
      handler
    );
  }

  [VM_OFF](prop, handler) {
    const node = loopGetNode(this, getProps(prop));
    if (!node) return;
    const hs = node[LISTENERS_HANDLERS];
    if (!handler) hs.length = 0; // remove all
    else Object(_util__WEBPACK_IMPORTED_MODULE_0__["arrayRemove"])(hs, handler);

    loopDelNode(node);
  }

  [VM_NOTIFY](prop) {
    if (!this[NOTIFIABLE]) {
      return;
    }
    const props = getProps(prop);
    if (this[LISTENERS]) {
      const imms = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getOrCreateArrayProperty"])(this, LISTENERS_IMMS);
      loopNotify(this, props, imms);
    }
    const pArr = this[PARENTS];
    pArr && pArr.forEach(ps => {
      ps[0][VM_ATTRS][VM_NOTIFY](
        [ps[1]].concat(props)
      );
    });
  }

  [DESTROY]() {
    // mark as non-notifiable
    this[NOTIFIABLE] = false;
    // unlink all view model property
    const obj = this[HOST];
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["getOwnPropertyNames"])(obj, prop => {
      obj[prop] = null;
    });
    // unlink host
    this[HOST] = null;
    // unlink host object wrapper proxy
    this[PROXY] = null;

    // clear assignment parents
    const pArr = this[PARENTS];
    pArr && (pArr.length = 0);
    this[PARENTS] = null;

    // clear listeners
    loopClearNode(this);
  }
}

function vmWatch(vm, prop, handler) {
  const vmAttrs = vm[VM_ATTRS];
  if (!vmAttrs) {
    throw new Error('vmWatch require ViewModel object');
  }
  let dbStarIdx = -1;
  const props = getProps(prop).map((p, i) => {
    if (p === '**') {
      dbStarIdx = i;
      return LISTENERS_DBSTAR;
    }
    return p === '*' ? LISTENERS_STAR : p;
  });
  if (dbStarIdx >= 0 && dbStarIdx !== props.length - 1) {
    /**
     * 'a.b.**' is good.
     * 'a.b.**.c' is bad.
     */
    throw new Error('wizard "**" must be last element in path.');
  }
  vmAttrs[VM_ON](props, handler);
}

function vmUnwatch(vm, prop, handler) {
  const vmAttrs = vm[VM_ATTRS];
  if (!prop) {
    loopClearNode(vmAttrs);
  } else {
    vmAttrs[VM_OFF](prop, handler);
  }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../jinge-demos/03-for-loop/node_modules/timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "../../jinge-framework/viewmodel/index.js":
/*!****************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/viewmodel/index.js ***!
  \****************************************************************/
/*! exports provided: core, proxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "../../jinge-framework/viewmodel/core.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "core", function() { return _core__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./proxy */ "../../jinge-framework/viewmodel/proxy.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "proxy", function() { return _proxy__WEBPACK_IMPORTED_MODULE_1__; });






/***/ }),

/***/ "../../jinge-framework/viewmodel/proxy.js":
/*!****************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/viewmodel/proxy.js ***!
  \****************************************************************/
/*! exports provided: VM_SETTER_FN_MAP, ObjectProxyHandler, ComponentProxyHandler, PromiseProxyHandler, ArrayProxyHandler, wrapViewModel, wrapComponent, wrapAttrs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VM_SETTER_FN_MAP", function() { return VM_SETTER_FN_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectProxyHandler", function() { return ObjectProxyHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentProxyHandler", function() { return ComponentProxyHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromiseProxyHandler", function() { return PromiseProxyHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayProxyHandler", function() { return ArrayProxyHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapViewModel", function() { return wrapViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapComponent", function() { return wrapComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapAttrs", function() { return wrapAttrs; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge-framework/util/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "../../jinge-framework/viewmodel/core.js");



const VM_SETTER_FN_MAP = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('vm_setter_fn_map');

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
  const map = obj[VM_SETTER_FN_MAP];
  if (!map.has(prop)) {
    let clazz = obj.constructor;
    let desc = Object.getOwnPropertyDescriptor(clazz.prototype, prop);
    let fn;
    if (desc) {
      fn = Object(_util__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(desc.set) ? desc.set : null;
      map.set(prop, fn);
      return fn;
    }
    // lookup to check parent classes
    clazz = Object.getPrototypeOf(clazz);
    while (clazz && clazz.prototype) {
      desc = Object.getOwnPropertyDescriptor(clazz.prototype, prop);
      if (desc) {
        fn = Object(_util__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(desc.set) ? desc.set : null;
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

function notifyPropChanged(vm, prop) {
  vm[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["VM_NOTIFY"]](prop);
}

function __propSetHandler(target, prop, value, setFn) {
  if (!Object(_core__WEBPACK_IMPORTED_MODULE_1__["isPublicProp"])(prop)) {
    target[prop] = value;
    return true;
  }
  const oldVal = target[prop];
  if (oldVal === value && !Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(value)) {
    return true;
  }
  const newValIsVM = Object(_core__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(value);
  if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value) && !Object(_core__WEBPACK_IMPORTED_MODULE_1__["isInnerObj"])(value) && !newValIsVM) {
    throw new Error('public property of ViewModel must also be ViewModel');
  }
  // console.log(`'${prop}' changed from ${store[prop]} to ${value}`);
  if (Object(_core__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(oldVal)) {
    oldVal[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["REMOVE_PARENT"]](target, prop);
  }
  setFn(target, prop, value);
  if (newValIsVM) {
    value[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["ADD_PARENT"]](target, prop);
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
  if (!target[VM_SETTER_FN_MAP]) {
    console.warn(`call setter "${prop}" after destroied, resources such as setInterval maybe not released before destroy. component:`, target);
    return;
  }
  const setterFn = getSetterFnIfPropIsSetter(target, prop);
  if (setterFn) {
    setterFn.call(target[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["PROXY"]], value);
  } else {
    target[prop] = value;
  }
}

function objectPropSetHandler(target, prop, value) {
  return __propSetHandler(target, prop, value, __objectPropSetFn);
}

function componentPropSetHandler(target, prop, value) {
  return __propSetHandler(target, prop, value, __componentPropSetFn);
}

function arrayPropSetHandler(target, prop, value) {
  if (prop === _util__WEBPACK_IMPORTED_MODULE_0__["STR_LENGTH"]) {
    return arrayLengthSetHandler(target, value);
  }
  return objectPropSetHandler(target, prop, value);
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
  if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(value)) throw new Error('bad argument. array length must be validate number.');
  const oldLen = target.length;
  if (oldLen > value) {
    for (let i = value; i < oldLen; i++) {
      const v = target[i];
      Object(_core__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(v) && v[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["REMOVE_PARENT"]](target, i);
    }
  }
  target.length = value;
  // console.log('set .length from', oldLen, 'to', value);
  if (oldLen !== value) {
    notifyPropChanged(target, _util__WEBPACK_IMPORTED_MODULE_0__["STR_LENGTH"]);
    arrayNotifyItems(target, oldLen, value);
  }
  return true;
}

const ObjectProxyHandler = {
  set: objectPropSetHandler
};

const ComponentProxyHandler = {
  set: componentPropSetHandler
};

const PromiseProxyHandler = {
  get(target, prop) {
    if (prop === 'then' || prop === 'catch') {
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

function _arrayFill(target, v) {
  target.forEach((it, i) => {
    if (it === v && !Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(it)) {
      return;
    }
    if (Object(_core__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(it)) {
      it[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["REMOVE_PARENT"]](target, i);
    }
    target[i] = v;
    if (Object(_core__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(it)) {
      it[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["ADD_PARENT"]](target, i);
    }
    notifyPropChanged(target, i);
  });
  return target[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["PROXY"]];
}

function _arrayReverseSort(target, fn, arg) {
  target.forEach((it, i) => {
    if (Object(_core__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(it)) {
      it[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["ADD_PARENT"]](target, i);
    }
  });
  target[fn](arg);
  target.forEach((it, i) => {
    if (Object(_core__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(it)) {
      it[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["REMOVE_PARENT"]](parent, i);
    }
  });
  arrayNotifyItems(target, 0, target.length);
  // return wrapper proxy to ensure `arr.reverse() === arr`
  return target[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["PROXY"]];
}

function _arrayWrapSub(arr, wrapEachItem = false) {
  const rtn = wrapProxy(arr, true);
  // handleVMDebug(arr);
  arr.forEach((it, i) => {
    if (Object(_core__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(it)) {
      it[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["ADD_PARENT"]](arr, i);
    } else if (wrapEachItem) {
      arr[i] = loopWrapVM(it);
    }
  });
  return rtn;
}

function _arrayShiftOrUnshiftProp(arr, delta) {
  arr.forEach((el, i) => {
    if (!Object(_core__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(el)) return;
    el[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["SHIFT_PARENT"]](arr, i, delta);
  });
}

function _argAssert(arg, fn) {
  if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(arg)) {
    if (!(_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"] in arg)) {
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
    if (idx < 0) idx = 0;
    args.forEach((arg, i) => {
      if (_argAssert(arg, 'splice')) {
        arg[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["ADD_PARENT"]](target, idx + i);
      }
    });
    for (let i = 0; i < delCount; i++) {
      if (idx + i >= target.length) break;
      const el = target[idx + i];
      if (Object(_core__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(el)) {
        el[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["REMOVE_PARENT"]](target, idx + i);
      }
    }
    const delta = args.length - delCount;
    if (delta !== 0) {
      for (let i = idx + delCount; i < target.length; i++) {
        const el = target[i];
        if (!Object(_core__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(el)) continue;
        el[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["SHIFT_PARENT"]](target, i, delta);
      }
    }
    const rtn = _arrayWrapSub(target.splice(idx, delCount, ...args));
    if (delta !== 0) {
      notifyPropChanged(target, _util__WEBPACK_IMPORTED_MODULE_0__["STR_LENGTH"]);
      for (let i = idx; i < target.length; i++) {
        notifyPropChanged(target, i);
      }
    }
    return rtn;
  },
  shift(target) {
    if (target.length === 0) return target.shift();
    _arrayShiftOrUnshiftProp(target, -1);
    const el = target.shift();
    if (Object(_core__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(el)) {
      el[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["REMOVE_PARENT"]](target, -1);
    }
    notifyPropChanged(target, _util__WEBPACK_IMPORTED_MODULE_0__["STR_LENGTH"]);
    for (let i = 0; i < target.length + 1; i++) {
      notifyPropChanged(target, i);
    }
    return el;
  },
  unshift(target, ...args) {
    if (args.length === 0) return target.unshift();
    args.forEach((arg, i) => {
      if (_argAssert(arg, 'unshift')) {
        arg[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["ADD_PARENT"]](target, i);
      }
    });
    _arrayShiftOrUnshiftProp(target, args.length);
    const rtn = target.unshift(...args);
    notifyPropChanged(target, _util__WEBPACK_IMPORTED_MODULE_0__["STR_LENGTH"]);
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
    if (Object(_core__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(el)) {
      el[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["REMOVE_PARENT"]](target, target.length);
    }
    notifyPropChanged(target, _util__WEBPACK_IMPORTED_MODULE_0__["STR_LENGTH"]);
    notifyPropChanged(target, target.length);
    return el;
  },
  push(target, ...args) {
    if (args.length === 0) return target.push();
    args.forEach((arg, i) => {
      if (_argAssert(arg, 'push')) {
        arg[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["ADD_PARENT"]](target, target.length + i);
      }
    });
    const rtn = target.push(...args);
    notifyPropChanged(target, _util__WEBPACK_IMPORTED_MODULE_0__["STR_LENGTH"]);
    for (let i = target.length - 1 - args.length; i < target.length; i++) {
      notifyPropChanged(target, i);
    }
    return rtn;
  },
  fill(target, v) {
    _argAssert(v, 'fill');
    return _arrayFill(target, v);
  },
  reverse(target) {
    return _arrayReverseSort(target, 'reverse');
  },
  sort(target, fn) {
    return _arrayReverseSort(target, 'sort', fn);
  },
  concat(target, arr) {
    _argAssert(arr, 'concat');
    return _arrayWrapSub(target.concat(arr));
  },
  filter(target, fn) {
    return _arrayWrapSub(target.filter(fn));
  },
  slice(target, si, ei) {
    return _arrayWrapSub(target.slice(si, ei));
  },
  map(target, fn) {
    return _arrayWrapSub(target.map(fn), true);
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

function wrapProp(vm, prop) {
  const v = vm[prop];
  if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(v) || Object(_core__WEBPACK_IMPORTED_MODULE_1__["isInnerObj"])(v)) {
    return;
  }
  if (_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"] in v) {
    v[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["ADD_PARENT"]](vm, prop);
    return;
  }
  vm[prop] = loopWrapVM(v);
  v[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["ADD_PARENT"]](vm, prop);
}

function wrapProxy(vm, isArr) {
  const vmAttrs = new _core__WEBPACK_IMPORTED_MODULE_1__["ViewModelAttrs"](vm);
  vm[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]] = vmAttrs;
  const p = new Proxy(vm, isArr ? ArrayProxyHandler : (
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["isPromise"])(vm) ? PromiseProxyHandler : ObjectProxyHandler
  ));
  vmAttrs[_core__WEBPACK_IMPORTED_MODULE_1__["PROXY"]] = p;
  return p;
}

function loopWrapVM(plainObjectOrArray) {
  if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(plainObjectOrArray)) {
    // directly return if alreay is ViewModel or inner object(Date/RegExp/Boolean).
    if (Object(_core__WEBPACK_IMPORTED_MODULE_1__["isInnerObj"])(plainObjectOrArray) || (_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"] in plainObjectOrArray)) {
      return plainObjectOrArray;
    }

    if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isArray"])(plainObjectOrArray)) {
      for (let i = 0; i < plainObjectOrArray.length; i++) {
        wrapProp(plainObjectOrArray, i);
      }
      return wrapProxy(plainObjectOrArray, true);
    } else {
      for (const k in plainObjectOrArray) {
        if (Object(_core__WEBPACK_IMPORTED_MODULE_1__["isPublicProp"])(k)) {
          wrapProp(plainObjectOrArray, k);
        }
      }
      return wrapProxy(plainObjectOrArray, false);
    }
  } else {
    return plainObjectOrArray;
  }
}

function wrapViewModel(plainObjectOrArray) {
  const vm = loopWrapVM(plainObjectOrArray);
  // if (vm !== plainObjectOrArray) {
  //   handleVMDebug(plainObjectOrArray);
  // }
  return vm;
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

function wrapComponent(component) {
  if (component[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]]) {
    throw new Error('alreay wraped.');
  }
  // handleVMDebug(component);
  const vmAttrs = new _core__WEBPACK_IMPORTED_MODULE_1__["ViewModelAttrs"](component);
  component[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]] = vmAttrs;
  // 初始化时 Component 默认的 NOTIFIABLE 为 false，
  // 待 RENDER 结束后才修改为 true，用于避免无谓的消息通知。
  component[_core__WEBPACK_IMPORTED_MODULE_1__["NOTIFIABLE"]] = false;
  const p = new Proxy(component, ComponentProxyHandler);
  vmAttrs[_core__WEBPACK_IMPORTED_MODULE_1__["PROXY"]] = p;
  return p;
}

function wrapAttrs(attrsObj) {
  for (const k in attrsObj) {
    if (Object(_core__WEBPACK_IMPORTED_MODULE_1__["isPublicProp"])(k)) {
      const v = attrsObj[k];
      if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(v) && !Object(_core__WEBPACK_IMPORTED_MODULE_1__["isInnerObj"])(v) && !(_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"] in v)) {
        throw new Error(`value passed to attribute "${k}" must be ViewModel.`);
      }
    }
  }
  const attrs = wrapViewModel(attrsObj);
  // 初始化时 Component 默认的 NOTIFIABLE 为 false，
  // 待 RENDER 结束后才修改为 true，用于避免无谓的消息通知。
  attrs[_core__WEBPACK_IMPORTED_MODULE_1__["NOTIFIABLE"]] = false;
  return attrs;
}


/***/ }),

/***/ "./app.html":
/*!******************!*\
  !*** ./app.html ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jinge_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge/dom */ "../../jinge-framework/dom/index.js");
/* harmony import */ var jinge_viewmodel_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge/viewmodel/core */ "../../jinge-framework/viewmodel/core.js");
/* harmony import */ var jinge_core_messenger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jinge/core/messenger */ "../../jinge-framework/core/messenger.js");
/* harmony import */ var jinge_core_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jinge/core/style */ "../../jinge-framework/core/style.js");
/* harmony import */ var jinge_core_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jinge/core/component */ "../../jinge-framework/core/component.js");
/* harmony import */ var jinge_viewmodel_proxy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jinge/viewmodel/proxy */ "../../jinge-framework/viewmodel/proxy.js");
/* harmony import */ var jinge_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jinge/util */ "../../jinge-framework/util/index.js");
/* harmony import */ var jinge_components_parameter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jinge/components/parameter */ "../../jinge-framework/components/parameter.js");
/* harmony import */ var jinge_util_const__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jinge/util/const */ "../../jinge-framework/util/const.js");
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jinge */ "../../jinge-framework/index.js");












/* harmony default export */ __webpack_exports__["default"] = (function(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = Object(jinge_dom__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
      "h2",
      component[jinge_core_style__WEBPACK_IMPORTED_MODULE_3__["CSTYLE_PID"]],
      "Simple Array For-loop"
    );
    component[jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["ROOT_NODES"]].push(el);
    return el;
  })(),
  (() => {
    const el = Object(jinge_dom__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
      "div",
      component[jinge_core_style__WEBPACK_IMPORTED_MODULE_3__["CSTYLE_PID"]],
      Object(jinge_dom__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
        "p",
        ...(() => {
          const attrs = Object(jinge_viewmodel_proxy__WEBPACK_IMPORTED_MODULE_5__["wrapAttrs"])({
            [jinge_viewmodel_core__WEBPACK_IMPORTED_MODULE_1__["VM_DEBUG_NAME"]]: "attrs_of_<for>",
            [jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["CONTEXT"]]: component[jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["CONTEXT"]],
            loop: null,
            [jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["ARG_COMPONENTS"]]: {
              [jinge_util__WEBPACK_IMPORTED_MODULE_6__["STR_DEFAULT"]]: function(component) {
                const vm_1 = component;
                return [
                ...(() => {
                  const attrs = Object(jinge_viewmodel_proxy__WEBPACK_IMPORTED_MODULE_5__["wrapAttrs"])({
                    [jinge_viewmodel_core__WEBPACK_IMPORTED_MODULE_1__["VM_DEBUG_NAME"]]: "attrs_of_<if>",
                    [jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["CONTEXT"]]: component[jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["CONTEXT"]],
                    expect: null,
                    [jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["ARG_COMPONENTS"]]: {
                      [jinge_util__WEBPACK_IMPORTED_MODULE_6__["STR_DEFAULT"]]: function(component) {
                        return [
                        Object(jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["textRenderFn"])(component, "First: ")
                        ];
                      }
                    }
                  });
                  const fn_0 = () => {
                    attrs.expect = Object(jinge_viewmodel_proxy__WEBPACK_IMPORTED_MODULE_5__["wrapViewModel"])(vm_1.isFirst);
                  };
                  fn_0();
                  vm_1[jinge_viewmodel_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][jinge_viewmodel_core__WEBPACK_IMPORTED_MODULE_1__["VM_ON"]]("isFirst", fn_0, component);
                  const el = new jinge__WEBPACK_IMPORTED_MODULE_9__["IfComponent"](attrs);
                  Object(jinge_core_style__WEBPACK_IMPORTED_MODULE_3__["addParentStyleId"])(el, component[jinge_core_style__WEBPACK_IMPORTED_MODULE_3__["CSTYLE_PID"]]);
                  component[jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["ROOT_NODES"]].push(el);
                  return Object(jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["assertRenderResults"])(el[jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["RENDER"]](component));
                })(),
                (() => {
                  const el = Object(jinge_dom__WEBPACK_IMPORTED_MODULE_0__["createTextNode"])('');
                  const fn_0 = () => {
                    Object(jinge_dom__WEBPACK_IMPORTED_MODULE_0__["setText"])(el, vm_1.index);
                  };
                  fn_0();
                  vm_1[jinge_viewmodel_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][jinge_viewmodel_core__WEBPACK_IMPORTED_MODULE_1__["VM_ON"]]("index", fn_0, component);
                  component[jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["ROOT_NODES"]].push(el);
                  return el;
                })(),
                Object(jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["textRenderFn"])(component, ": "),
                (() => {
                  const el = Object(jinge_dom__WEBPACK_IMPORTED_MODULE_0__["createTextNode"])('');
                  const fn_0 = () => {
                    Object(jinge_dom__WEBPACK_IMPORTED_MODULE_0__["setText"])(el, vm_1.each);
                  };
                  fn_0();
                  vm_1[jinge_viewmodel_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][jinge_viewmodel_core__WEBPACK_IMPORTED_MODULE_1__["VM_ON"]]("each", fn_0, component);
                  component[jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["ROOT_NODES"]].push(el);
                  return el;
                })(),
                ...(() => {
                  const attrs = Object(jinge_viewmodel_proxy__WEBPACK_IMPORTED_MODULE_5__["wrapAttrs"])({
                    [jinge_viewmodel_core__WEBPACK_IMPORTED_MODULE_1__["VM_DEBUG_NAME"]]: "attrs_of_<if>",
                    [jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["CONTEXT"]]: component[jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["CONTEXT"]],
                    expect: null,
                    [jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["ARG_COMPONENTS"]]: {
                      [jinge_util__WEBPACK_IMPORTED_MODULE_6__["STR_DEFAULT"]]: function(component) {
                        return [
                        Object(jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["textRenderFn"])(component, ";")
                        ];
                      }
                    }
                  });
                  const fn_0 = () => {
                    attrs.expect = Object(jinge_viewmodel_proxy__WEBPACK_IMPORTED_MODULE_5__["wrapViewModel"])(!vm_1.isLast);
                  };
                  fn_0();
                  vm_1[jinge_viewmodel_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][jinge_viewmodel_core__WEBPACK_IMPORTED_MODULE_1__["VM_ON"]]("isLast", fn_0, component);
                  const el = new jinge__WEBPACK_IMPORTED_MODULE_9__["IfComponent"](attrs);
                  Object(jinge_core_style__WEBPACK_IMPORTED_MODULE_3__["addParentStyleId"])(el, component[jinge_core_style__WEBPACK_IMPORTED_MODULE_3__["CSTYLE_PID"]]);
                  component[jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["ROOT_NODES"]].push(el);
                  return Object(jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["assertRenderResults"])(el[jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["RENDER"]](component));
                })()
                ];
              }
            }
          });
          const fn_0 = () => {
            attrs.loop = Object(jinge_viewmodel_proxy__WEBPACK_IMPORTED_MODULE_5__["wrapViewModel"])(vm_0.numbers);
          };
          fn_0();
          vm_0[jinge_viewmodel_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][jinge_viewmodel_core__WEBPACK_IMPORTED_MODULE_1__["VM_ON"]]("numbers", fn_0, component);
          const el = new jinge__WEBPACK_IMPORTED_MODULE_9__["ForComponent"](attrs);
          component[jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["NON_ROOT_COMPONENT_NODES"]].push(el);
          return Object(jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["assertRenderResults"])(el[jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["RENDER"]](component));
        })()
      ),
      Object(jinge_dom__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
        "div",
        (() => {
          const el = Object(jinge_dom__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
            "button",
            "Test"
          );
          Object(jinge_dom__WEBPACK_IMPORTED_MODULE_0__["addEvent"])(el, 'click', function(...args) {vm_0.test(...args)})
          return el;
        })(),
        (() => {
          const el = Object(jinge_dom__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
            "button",
            "Push Large"
          );
          Object(jinge_dom__WEBPACK_IMPORTED_MODULE_0__["addEvent"])(el, 'click', function(...args) {vm_0.push(...args)})
          return el;
        })()
      )
    );
    component[jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["ROOT_NODES"]].push(el);
    return el;
  })(),
  (() => {
    const el = Object(jinge_dom__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
      "h2",
      component[jinge_core_style__WEBPACK_IMPORTED_MODULE_3__["CSTYLE_PID"]],
      "For & If"
    );
    component[jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["ROOT_NODES"]].push(el);
    return el;
  })(),
  (() => {
    const el = Object(jinge_dom__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
      "div",
      component[jinge_core_style__WEBPACK_IMPORTED_MODULE_3__["CSTYLE_PID"]],
      Object(jinge_dom__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
        "p",
        ...(() => {
          const attrs = Object(jinge_viewmodel_proxy__WEBPACK_IMPORTED_MODULE_5__["wrapAttrs"])({
            [jinge_viewmodel_core__WEBPACK_IMPORTED_MODULE_1__["VM_DEBUG_NAME"]]: "attrs_of_<for>",
            [jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["CONTEXT"]]: component[jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["CONTEXT"]],
            loop: null,
            key: "each",
            [jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["ARG_COMPONENTS"]]: {
              [jinge_util__WEBPACK_IMPORTED_MODULE_6__["STR_DEFAULT"]]: function(component) {
                const vm_1 = component;
                return [
                ...(() => {
                  const attrs = Object(jinge_viewmodel_proxy__WEBPACK_IMPORTED_MODULE_5__["wrapAttrs"])({
                    [jinge_viewmodel_core__WEBPACK_IMPORTED_MODULE_1__["VM_DEBUG_NAME"]]: "attrs_of_<if>",
                    [jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["CONTEXT"]]: component[jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["CONTEXT"]],
                    expect: null,
                    [jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["ARG_COMPONENTS"]]: {
                      [jinge_util__WEBPACK_IMPORTED_MODULE_6__["STR_DEFAULT"]]: function(component) {
                        return [
                        (() => {
                          const el = Object(jinge_dom__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
                            "span",
                            component[jinge_core_style__WEBPACK_IMPORTED_MODULE_3__["CSTYLE_PID"]],
                            "odd: "
                          );
                          component[jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["ROOT_NODES"]].push(el);
                          return el;
                        })()
                        ];
                      },
                      ['else']: function(component) {
                        return [
                        (() => {
                          const el = Object(jinge_dom__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
                            "span",
                            component[jinge_core_style__WEBPACK_IMPORTED_MODULE_3__["CSTYLE_PID"]],
                            "even: "
                          );
                          component[jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["ROOT_NODES"]].push(el);
                          return el;
                        })()
                        ];
                      }
                    }
                  });
                  const fn_0 = () => {
                    attrs.expect = Object(jinge_viewmodel_proxy__WEBPACK_IMPORTED_MODULE_5__["wrapViewModel"])(vm_1.index % 2 === 0);
                  };
                  fn_0();
                  vm_1[jinge_viewmodel_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][jinge_viewmodel_core__WEBPACK_IMPORTED_MODULE_1__["VM_ON"]]("index", fn_0, component);
                  const el = new jinge__WEBPACK_IMPORTED_MODULE_9__["IfComponent"](attrs);
                  Object(jinge_core_style__WEBPACK_IMPORTED_MODULE_3__["addParentStyleId"])(el, component[jinge_core_style__WEBPACK_IMPORTED_MODULE_3__["CSTYLE_PID"]]);
                  component[jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["ROOT_NODES"]].push(el);
                  return Object(jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["assertRenderResults"])(el[jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["RENDER"]](component));
                })(),
                ...(() => {
                  const attrs = Object(jinge_viewmodel_proxy__WEBPACK_IMPORTED_MODULE_5__["wrapAttrs"])({
                    [jinge_viewmodel_core__WEBPACK_IMPORTED_MODULE_1__["VM_DEBUG_NAME"]]: "attrs_of_<if>",
                    [jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["CONTEXT"]]: component[jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["CONTEXT"]],
                    expect: null,
                    [jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["ARG_COMPONENTS"]]: {
                      [jinge_util__WEBPACK_IMPORTED_MODULE_6__["STR_DEFAULT"]]: function(component) {
                        return [
                        (() => {
                          const el = Object(jinge_dom__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
                            "span",
                            Object(jinge_util__WEBPACK_IMPORTED_MODULE_6__["assignObject"])({
                              style: "margin-right: 10px;"
                            }, component[jinge_core_style__WEBPACK_IMPORTED_MODULE_3__["CSTYLE_PID"]]),
                            (() => {
                              const el = Object(jinge_dom__WEBPACK_IMPORTED_MODULE_0__["createTextNode"])('');
                              const fn_0 = () => {
                                Object(jinge_dom__WEBPACK_IMPORTED_MODULE_0__["setText"])(el, vm_1.index);
                              };
                              fn_0();
                              vm_1[jinge_viewmodel_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][jinge_viewmodel_core__WEBPACK_IMPORTED_MODULE_1__["VM_ON"]]("index", fn_0, component);
                              return el;
                            })(),
                            ": ",
                            (() => {
                              const el = Object(jinge_dom__WEBPACK_IMPORTED_MODULE_0__["createTextNode"])('');
                              const fn_0 = () => {
                                Object(jinge_dom__WEBPACK_IMPORTED_MODULE_0__["setText"])(el, vm_1.each);
                              };
                              fn_0();
                              vm_1[jinge_viewmodel_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][jinge_viewmodel_core__WEBPACK_IMPORTED_MODULE_1__["VM_ON"]]("each", fn_0, component);
                              return el;
                            })(),
                            ";"
                          );
                          component[jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["ROOT_NODES"]].push(el);
                          return el;
                        })()
                        ];
                      }
                    }
                  });
                  const fn_0 = () => {
                    attrs.expect = Object(jinge_viewmodel_proxy__WEBPACK_IMPORTED_MODULE_5__["wrapViewModel"])(vm_1.each % 2 === 0);
                  };
                  fn_0();
                  vm_1[jinge_viewmodel_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][jinge_viewmodel_core__WEBPACK_IMPORTED_MODULE_1__["VM_ON"]]("each", fn_0, component);
                  const el = new jinge__WEBPACK_IMPORTED_MODULE_9__["IfComponent"](attrs);
                  Object(jinge_core_style__WEBPACK_IMPORTED_MODULE_3__["addParentStyleId"])(el, component[jinge_core_style__WEBPACK_IMPORTED_MODULE_3__["CSTYLE_PID"]]);
                  component[jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["ROOT_NODES"]].push(el);
                  return Object(jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["assertRenderResults"])(el[jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["RENDER"]](component));
                })(),
                ...(() => {
                  const attrs = Object(jinge_viewmodel_proxy__WEBPACK_IMPORTED_MODULE_5__["wrapAttrs"])({
                    [jinge_viewmodel_core__WEBPACK_IMPORTED_MODULE_1__["VM_DEBUG_NAME"]]: "attrs_of_<if>",
                    [jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["CONTEXT"]]: component[jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["CONTEXT"]],
                    expect: null,
                    [jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["ARG_COMPONENTS"]]: {
                      [jinge_util__WEBPACK_IMPORTED_MODULE_6__["STR_DEFAULT"]]: function(component) {
                        return [
                        (() => {
                          const el = Object(jinge_dom__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
                            "span",
                            Object(jinge_util__WEBPACK_IMPORTED_MODULE_6__["assignObject"])({
                              style: "margin-right: 10px; color: blue;"
                            }, component[jinge_core_style__WEBPACK_IMPORTED_MODULE_3__["CSTYLE_PID"]]),
                            (() => {
                              const el = Object(jinge_dom__WEBPACK_IMPORTED_MODULE_0__["createTextNode"])('');
                              const fn_0 = () => {
                                Object(jinge_dom__WEBPACK_IMPORTED_MODULE_0__["setText"])(el, vm_1.each);
                              };
                              fn_0();
                              vm_1[jinge_viewmodel_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][jinge_viewmodel_core__WEBPACK_IMPORTED_MODULE_1__["VM_ON"]]("each", fn_0, component);
                              return el;
                            })()
                          );
                          component[jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["ROOT_NODES"]].push(el);
                          return el;
                        })()
                        ];
                      }
                    }
                  });
                  const fn_0 = () => {
                    attrs.expect = Object(jinge_viewmodel_proxy__WEBPACK_IMPORTED_MODULE_5__["wrapViewModel"])(vm_1.each % 2 === 1);
                  };
                  fn_0();
                  vm_1[jinge_viewmodel_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][jinge_viewmodel_core__WEBPACK_IMPORTED_MODULE_1__["VM_ON"]]("each", fn_0, component);
                  const el = new jinge__WEBPACK_IMPORTED_MODULE_9__["IfComponent"](attrs);
                  Object(jinge_core_style__WEBPACK_IMPORTED_MODULE_3__["addParentStyleId"])(el, component[jinge_core_style__WEBPACK_IMPORTED_MODULE_3__["CSTYLE_PID"]]);
                  component[jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["ROOT_NODES"]].push(el);
                  return Object(jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["assertRenderResults"])(el[jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["RENDER"]](component));
                })()
                ];
              }
            }
          });
          const fn_0 = () => {
            attrs.loop = Object(jinge_viewmodel_proxy__WEBPACK_IMPORTED_MODULE_5__["wrapViewModel"])(vm_0.numbers);
          };
          fn_0();
          vm_0[jinge_viewmodel_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][jinge_viewmodel_core__WEBPACK_IMPORTED_MODULE_1__["VM_ON"]]("numbers", fn_0, component);
          const el = new jinge__WEBPACK_IMPORTED_MODULE_9__["ForComponent"](attrs);
          component[jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["NON_ROOT_COMPONENT_NODES"]].push(el);
          return Object(jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["assertRenderResults"])(el[jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["RENDER"]](component));
        })()
      )
    );
    component[jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["ROOT_NODES"]].push(el);
    return el;
  })(),
  (() => {
    const el = Object(jinge_dom__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
      "h2",
      component[jinge_core_style__WEBPACK_IMPORTED_MODULE_3__["CSTYLE_PID"]],
      "Key: id"
    );
    component[jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["ROOT_NODES"]].push(el);
    return el;
  })(),
  (() => {
    const el = Object(jinge_dom__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
      "div",
      component[jinge_core_style__WEBPACK_IMPORTED_MODULE_3__["CSTYLE_PID"]],
      Object(jinge_dom__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
        "p",
        Object(jinge_dom__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
          "ul",
          ...(() => {
            const attrs = Object(jinge_viewmodel_proxy__WEBPACK_IMPORTED_MODULE_5__["wrapAttrs"])({
              [jinge_viewmodel_core__WEBPACK_IMPORTED_MODULE_1__["VM_DEBUG_NAME"]]: "attrs_of_<for>",
              [jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["CONTEXT"]]: component[jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["CONTEXT"]],
              loop: null,
              key: "each.id",
              [jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["ARG_COMPONENTS"]]: {
                [jinge_util__WEBPACK_IMPORTED_MODULE_6__["STR_DEFAULT"]]: function(component) {
                  const vm_1 = component;
                  return [
                  (() => {
                    const el = Object(jinge_dom__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
                      "li",
                      component[jinge_core_style__WEBPACK_IMPORTED_MODULE_3__["CSTYLE_PID"]],
                      (() => {
                        const el = Object(jinge_dom__WEBPACK_IMPORTED_MODULE_0__["createTextNode"])('');
                        const fn_0 = () => {
                          Object(jinge_dom__WEBPACK_IMPORTED_MODULE_0__["setText"])(el, vm_1.each.name);
                        };
                        fn_0();
                        vm_1[jinge_viewmodel_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][jinge_viewmodel_core__WEBPACK_IMPORTED_MODULE_1__["VM_ON"]]("each.name", fn_0, component);
                        return el;
                      })()
                    );
                    component[jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["ROOT_NODES"]].push(el);
                    return el;
                  })()
                  ];
                }
              }
            });
            const fn_0 = () => {
              attrs.loop = Object(jinge_viewmodel_proxy__WEBPACK_IMPORTED_MODULE_5__["wrapViewModel"])(vm_0.persons);
            };
            fn_0();
            vm_0[jinge_viewmodel_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][jinge_viewmodel_core__WEBPACK_IMPORTED_MODULE_1__["VM_ON"]]("persons", fn_0, component);
            const el = new jinge__WEBPACK_IMPORTED_MODULE_9__["ForComponent"](attrs);
            component[jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["NON_ROOT_COMPONENT_NODES"]].push(el);
            return Object(jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["assertRenderResults"])(el[jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["RENDER"]](component));
          })()
        )
      )
    );
    component[jinge_core_component__WEBPACK_IMPORTED_MODULE_4__["ROOT_NODES"]].push(el);
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
/* harmony import */ var jinge_viewmodel_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge/viewmodel/core */ "../../jinge-framework/viewmodel/core.js");
/* harmony import */ var jinge_viewmodel_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge/viewmodel/proxy */ "../../jinge-framework/viewmodel/proxy.js");
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jinge */ "../../jinge-framework/index.js");
/* harmony import */ var _app_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.html */ "./app.html");








let AUTO_INC = 1000;

class App extends jinge__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  static get template() {
    return _app_html__WEBPACK_IMPORTED_MODULE_3__["default"];
  }
  constructor(args) {
    const vm_e163cba0ee = super(args);
    vm_e163cba0ee.INC = 10;
    vm_e163cba0ee.numbers = Object(jinge__WEBPACK_IMPORTED_MODULE_2__["VM"])([
      0,
      1,
      2
    ]);
    vm_e163cba0ee.persons = Object(jinge__WEBPACK_IMPORTED_MODULE_2__["VM"])([
      {
        id: '001',
        name: 'XiaoGe'
      },
      {
        id: '002',
        name: 'Jinge'
      }
    ]);
    setInterval(() => {
      vm_e163cba0ee.numbers.push(AUTO_INC++);
      vm_e163cba0ee.persons.push(Object(jinge__WEBPACK_IMPORTED_MODULE_2__["VM"])({
        id: Date.now().toString(32),
        name: Date.now().toString(32)
      }));
    }, 3000);
    return vm_e163cba0ee;
  }
  test($evt) {
    // this.numbers.push(AUTO_INC++);
    // return;
    // console.log($evt);
    // this.numbers = VM([6, 0, 7, 3, 2]);
    window.__dd = true;
    this.persons.length = 0;
  }
  push() {
    const tmp = [];
    for(let i = 0; i < 10000; i++) {
      tmp.push(AUTO_INC++);
    }
    this.numbers.push(...tmp);
  }
}

Object(jinge__WEBPACK_IMPORTED_MODULE_2__["bootstrap"])(App, document.getElementById('root-app'));


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map