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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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
/* harmony import */ var _vm_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/core */ "../../jinge-framework/vm/core.js");
/* harmony import */ var _vm_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vm/proxy */ "../../jinge-framework/vm/proxy.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/component */ "../../jinge-framework/core/component.js");
/* harmony import */ var _util_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/dom */ "../../jinge-framework/util/dom.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util */ "../../jinge-framework/util/index.js");
/* harmony import */ var _core_messenger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/messenger */ "../../jinge-framework/core/messenger.js");
/* harmony import */ var _core_transition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/transition */ "../../jinge-framework/core/transition.js");











class ToggleClassComponent extends _core_component__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(attrs) {
    if (!attrs || !Object(_util__WEBPACK_IMPORTED_MODULE_4__["isObject"])(attrs.class)) {
      throw new Error('<toggle-class> component require "class" attribute to be Object.');
    }
    const vm_3a7572e857 = super(attrs);
    const fn_3a7572e857_2 = () => {
      vm_3a7572e857.class = attrs.class;
    };
    fn_3a7572e857_2();
    attrs[_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]]('class', fn_3a7572e857_2);
    const fn_3a7572e857_3 = () => {
      vm_3a7572e857.trans = !!attrs.transition;
    };
    fn_3a7572e857_3();
    attrs[_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]]('transition', fn_3a7572e857_3);
    vm_3a7572e857._t = null;
    vm_3a7572e857._i = null;
    Object(_vm_core__WEBPACK_IMPORTED_MODULE_0__["vmWatch"])(this, 'class.**', () => {
      vm_3a7572e857[_core_component__WEBPACK_IMPORTED_MODULE_2__["UPDATE_IF_NEED"]]();
    });
    return vm_3a7572e857;
  }

  [_core_component__WEBPACK_IMPORTED_MODULE_2__["RENDER"]]() {
    const rr = super[_core_component__WEBPACK_IMPORTED_MODULE_2__["RENDER"]]();
    this[_core_component__WEBPACK_IMPORTED_MODULE_2__["UPDATE"]](true);
    return rr;
  }

  [_core_component__WEBPACK_IMPORTED_MODULE_2__["BEFORE_DESTROY"]]() {
    this._t && this._t.clear();
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
          v ? _util_dom__WEBPACK_IMPORTED_MODULE_3__["addClass"] : _util_dom__WEBPACK_IMPORTED_MODULE_3__["removeClass"],
          el, k
        );
        return;
      }

      if (init) {
        this._t.set(k, [
          v ? _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_STATE_ENTERED"] : _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_STATE_LEAVED"], // state
          null // saved onEnd callback
        ]);
        v ? Object(_util_dom__WEBPACK_IMPORTED_MODULE_3__["addClass"])(el, k) : Object(_util_dom__WEBPACK_IMPORTED_MODULE_3__["removeClass"])(el, k);
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
        Object(_util_dom__WEBPACK_IMPORTED_MODULE_3__["removeClass"])(el, k + (v ? _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_C_LEAVE"] : _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_C_ENTER"]));
        Object(_util_dom__WEBPACK_IMPORTED_MODULE_3__["removeClass"])(el, k + (v ? _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_C_LEAVE_ACTIVE"] : _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_C_ENTER_ACTIVE"]));
        Object(_util_dom__WEBPACK_IMPORTED_MODULE_3__["removeEvent"])(el, _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_TRANSITION_END"], t[1]);
        Object(_util_dom__WEBPACK_IMPORTED_MODULE_3__["removeEvent"])(el, _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_ANIMATION_END"], t[1]);
        t[1] = null;
        this[_core_messenger__WEBPACK_IMPORTED_MODULE_5__["NOTIFY"]](_core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_TRANSITION"], v ? _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_LEAVE_CANCELLED"] : _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_ENTER_CANCELLED"], k, el);
      }
      const classOfStart = k + (v ? _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_C_ENTER"] : _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_C_LEAVE"]);
      const classOfActive = k + (v ? _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_C_ENTER_ACTIVE"] : _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_C_LEAVE_ACTIVE"]);
      Object(_util_dom__WEBPACK_IMPORTED_MODULE_3__["addClass"])(el, classOfStart);
      // force render by calling getComputedStyle
      Object(_core_transition__WEBPACK_IMPORTED_MODULE_6__["getDurationType"])(el);
      Object(_util_dom__WEBPACK_IMPORTED_MODULE_3__["addClass"])(el, classOfActive);
      const tsEndName = Object(_core_transition__WEBPACK_IMPORTED_MODULE_6__["getDurationType"])(el);
      if (!tsEndName) {
        Object(_util_dom__WEBPACK_IMPORTED_MODULE_3__["removeClass"])(el, classOfStart);
        Object(_util_dom__WEBPACK_IMPORTED_MODULE_3__["removeClass"])(el, classOfActive);
        t[0] = v ? _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_STATE_ENTERED"] : _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_STATE_LEAVED"];
        v ? Object(_util_dom__WEBPACK_IMPORTED_MODULE_3__["addClass"])(el, k) : Object(_util_dom__WEBPACK_IMPORTED_MODULE_3__["removeClass"])(el, k);
        return;
      }
      const onEnd = () => {
        Object(_util_dom__WEBPACK_IMPORTED_MODULE_3__["removeEvent"])(el, _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_TRANSITION_END"], onEnd);
        Object(_util_dom__WEBPACK_IMPORTED_MODULE_3__["removeEvent"])(el, _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_ANIMATION_END"], onEnd);
        Object(_util_dom__WEBPACK_IMPORTED_MODULE_3__["removeClass"])(el, classOfStart);
        Object(_util_dom__WEBPACK_IMPORTED_MODULE_3__["removeClass"])(el, classOfActive);
        t[1] = null;
        t[0] = v ? _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_STATE_ENTERED"] : _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_STATE_LEAVED"];
        v ? Object(_util_dom__WEBPACK_IMPORTED_MODULE_3__["addClass"])(el, k) : Object(_util_dom__WEBPACK_IMPORTED_MODULE_3__["removeClass"])(el, k);
        this[_core_messenger__WEBPACK_IMPORTED_MODULE_5__["NOTIFY"]](_core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_TRANSITION"], v ? _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_AFTER_ENTER"] : _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_AFTER_LEAVE"], k, el);
      };
      t[0] = v ? _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_STATE_ENTERING"] : _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_STATE_LEAVING"];
      t[1] = onEnd;
      Object(_util_dom__WEBPACK_IMPORTED_MODULE_3__["addEvent"])(el, tsEndName, onEnd);
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
/* harmony import */ var _vm_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/core */ "../../jinge-framework/vm/core.js");
/* harmony import */ var _vm_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vm/proxy */ "../../jinge-framework/vm/proxy.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/component */ "../../jinge-framework/core/component.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ "../../jinge-framework/util/index.js");
/* harmony import */ var _util_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/dom */ "../../jinge-framework/util/dom.js");
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
    const vm_3a7572e857 = super(attrs);
    vm_3a7572e857.each = item;
    vm_3a7572e857.index = index;
    vm_3a7572e857.isFirst = index === 0;
    vm_3a7572e857.isLast = isLast;
    return vm_3a7572e857;
  }

  [_core_component__WEBPACK_IMPORTED_MODULE_2__["RENDER"]]() {
    const renderFn = this[_core_component__WEBPACK_IMPORTED_MODULE_2__["ARG_COMPONENTS"]][_util__WEBPACK_IMPORTED_MODULE_3__["STR_DEFAULT"]];
    if (!renderFn) Object(_util__WEBPACK_IMPORTED_MODULE_3__["assertFail"])();
    return renderFn(this);
  }
}

function createEl(item, i, isLast, itemRenderFn, context, cstyPid) {
  const el = new ForEachComponent(Object(_vm_proxy__WEBPACK_IMPORTED_MODULE_1__["wrapAttrs"])({
    [_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_DEBUG_NAME"]]: 'attrs_of_<for-each>',
    [_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]]: null,
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
  if (Object(_util__WEBPACK_IMPORTED_MODULE_3__["isObject"])(item) && !Object(_vm_core__WEBPACK_IMPORTED_MODULE_0__["isInnerObj"])(item) && !(_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"] in item)) {
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
      Object(_util_dom__WEBPACK_IMPORTED_MODULE_4__["appendChild"])($parent, node);
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

let INC = 0;
const ID = Object(_util__WEBPACK_IMPORTED_MODULE_3__["Symbol"])('id');

class ForComponent extends _core_component__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(attrs) {
    if (attrs.key && !/^(index|each(.[\w\d$_]+)*)$/.test(attrs.key)) {
      throw new Error('Value of "_key" attribute of <for> component is invalidate. See https://[todo]');
    }
    const vm_3a7572e857 = super(attrs);
    const fn_3a7572e857_2 = () => {
      vm_3a7572e857.loop = attrs.loop;
    };
    fn_3a7572e857_2();
    attrs[_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]]('loop', fn_3a7572e857_2);
    vm_3a7572e857[ID] = INC++;
    const kn = attrs.key || KEY_INDEX;
    vm_3a7572e857[FOR_KEY_NAME] = kn;
    vm_3a7572e857[FOR_LENGTH] = 0;
    vm_3a7572e857[FOR_KEYS] = null;
    vm_3a7572e857[FOR_WAIT_UPDATE] = false;
    if (kn !== KEY_INDEX && kn !== KEY_EACH) {
      vm_3a7572e857[FOR_KEY_NAME] = new Function(KEY_EACH, `return ${ kn }`);
      const propCount = kn.split('.').length + 1;
      Object(_vm_core__WEBPACK_IMPORTED_MODULE_0__["vmWatch"])(this, 'loop.*.' + kn.slice(5), propPath => {
        if (propPath.length !== propCount || vm_3a7572e857[FOR_WAIT_UPDATE]) {
          return;
        }
        const items = vm_3a7572e857.loop;
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_3__["isArray"])(items) || items.length === 0)
          return;
        const p = _parseIndexPath(propPath[1]);
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_3__["isNumber"])(p) || p >= items.length) {
          return;
        }
        vm_3a7572e857[FOR_KEYS][p] = vm_3a7572e857[FOR_KEY_NAME](items[p]);
      });
    }
    Object(_vm_core__WEBPACK_IMPORTED_MODULE_0__["vmWatch"])(this, 'loop.*', propPath => {
      if (vm_3a7572e857[_core_component__WEBPACK_IMPORTED_MODULE_2__["STATE"]] !== _core_component__WEBPACK_IMPORTED_MODULE_2__["STATE_RENDERED"] || propPath.length !== 2 || vm_3a7572e857[FOR_WAIT_UPDATE]) {
        return;
      }
      const p = _parseIndexPath(propPath[1]);
      if (p === _util__WEBPACK_IMPORTED_MODULE_3__["STR_LENGTH"]) {
        vm_3a7572e857[FOR_WAIT_UPDATE] = true;
        vm_3a7572e857[_core_component__WEBPACK_IMPORTED_MODULE_2__["UPDATE_IF_NEED"]]();
      } else if (Object(_util__WEBPACK_IMPORTED_MODULE_3__["isNumber"])(p)) {
        vm_3a7572e857[FOR_UPDATE_ITEM](p);
      }
    });
    return vm_3a7572e857;
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
      roots.push(Object(_util_dom__WEBPACK_IMPORTED_MODULE_4__["createComment"])(_util__WEBPACK_IMPORTED_MODULE_3__["STR_EMPTY"]));
      return roots;
    }
    const items = this.loop;
    const keyName = this[FOR_KEY_NAME];
    if (keyName !== KEY_INDEX) this[FOR_KEYS] = [];
    if (!Object(_util__WEBPACK_IMPORTED_MODULE_3__["isArray"])(items) || items.length === 0) {
      roots.push(Object(_util_dom__WEBPACK_IMPORTED_MODULE_4__["createComment"])(_util__WEBPACK_IMPORTED_MODULE_3__["STR_EMPTY"]));
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
        Object(_util_dom__WEBPACK_IMPORTED_MODULE_4__["insertBefore"])(Object(_util_dom__WEBPACK_IMPORTED_MODULE_4__["getParent"])($fd), rr, $fd);
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
      const $cmt = Object(_util_dom__WEBPACK_IMPORTED_MODULE_4__["createComment"])(_util__WEBPACK_IMPORTED_MODULE_3__["STR_EMPTY"]);
      Object(_util_dom__WEBPACK_IMPORTED_MODULE_4__["insertBefore"])(Object(_util_dom__WEBPACK_IMPORTED_MODULE_4__["getParent"])(fd), $cmt, fd);
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
    const $parent = Object(_util_dom__WEBPACK_IMPORTED_MODULE_4__["getParent"])(ol === 0 ? firstEl : firstEl[_core_component__WEBPACK_IMPORTED_MODULE_2__["GET_FIRST_DOM"]]());

    if (keyName === KEY_INDEX) {
      let $f = null;
      if (ol === 0) roots.length = 0;

      for (let i = 0; i < nl; i++) {
        if (i < ol) {
          updateEl(roots[i], i, newItems);
        } else {
          if (!$f) $f = Object(_util_dom__WEBPACK_IMPORTED_MODULE_4__["createFragment"])();
          Object(_util_dom__WEBPACK_IMPORTED_MODULE_4__["appendChild"])($f, ...appendRenderEach(newItems[i], i, i === nl - 1, itemRenderFn, roots, ctx, cstyPid));
        }
      }
      if ($f) {
        const $le = ol === 0 ? firstEl : roots[ol - 1][_core_component__WEBPACK_IMPORTED_MODULE_2__["GET_LAST_DOM"]]();
        Object(_util_dom__WEBPACK_IMPORTED_MODULE_4__["insertAfter"])($parent, $f, $le);
        for (let i = ol; i < nl; i++) {
          roots[i][_core_component__WEBPACK_IMPORTED_MODULE_2__["HANDLE_AFTER_RENDER"]]();
        }
      }
      if (ol === 0) {
        Object(_util_dom__WEBPACK_IMPORTED_MODULE_4__["removeChild"])($parent, firstEl);
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
      Object(_util_dom__WEBPACK_IMPORTED_MODULE_4__["insertAfter"])($parent, Object(_util_dom__WEBPACK_IMPORTED_MODULE_4__["createFragment"])(rs), firstEl);
      Object(_util_dom__WEBPACK_IMPORTED_MODULE_4__["removeChild"])($parent, firstEl);
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
          if (!$f) $f = Object(_util_dom__WEBPACK_IMPORTED_MODULE_4__["createFragment"])();
          Object(_util_dom__WEBPACK_IMPORTED_MODULE_4__["appendChild"])($f, ...el[_core_component__WEBPACK_IMPORTED_MODULE_2__["RENDER"]]());
          newRoots.push(el);
        }
        if ($f) {
          if ($lastS) {
            Object(_util_dom__WEBPACK_IMPORTED_MODULE_4__["insertBefore"])($parent, $f, $lastS);
          } else {
            Object(_util_dom__WEBPACK_IMPORTED_MODULE_4__["appendChild"])($parent, $f);
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
        if (!$f) $f = Object(_util_dom__WEBPACK_IMPORTED_MODULE_4__["createFragment"])();
        if (!reuseEl) {
          reuseEl = createEl(newItems[ni], ni, ni === nl - 1, itemRenderFn, ctx, cstyPid);
          Object(_util_dom__WEBPACK_IMPORTED_MODULE_4__["appendChild"])($f, ...reuseEl[_core_component__WEBPACK_IMPORTED_MODULE_2__["RENDER"]]());
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
      $f && Object(_util_dom__WEBPACK_IMPORTED_MODULE_4__["insertBefore"])($parent, $f, el[_core_component__WEBPACK_IMPORTED_MODULE_2__["GET_FIRST_DOM"]]());
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
/* harmony import */ var _vm_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/proxy */ "../../jinge-framework/vm/proxy.js");
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class */ "../../jinge-framework/components/class.js");
/* harmony import */ var _vm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vm/core */ "../../jinge-framework/vm/core.js");




const STR_JG_HIDE = 'jg-hide';

class HideComponent extends _class__WEBPACK_IMPORTED_MODULE_1__["ToggleClassComponent"] {
  constructor(attrs) {
    attrs.class = Object(_vm_proxy__WEBPACK_IMPORTED_MODULE_0__["wrapViewModel"])({
      [STR_JG_HIDE]: !!attrs.test
    });
    Object(_vm_core__WEBPACK_IMPORTED_MODULE_2__["vmWatch"])(attrs, 'test', () => {
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
/* harmony import */ var _vm_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/core */ "../../jinge-framework/vm/core.js");
/* harmony import */ var _vm_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vm/proxy */ "../../jinge-framework/vm/proxy.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/component */ "../../jinge-framework/core/component.js");
/* harmony import */ var _util_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/dom */ "../../jinge-framework/util/dom.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util */ "../../jinge-framework/util/index.js");








function renderHtml(content) {
  const $d = Object(_util_dom__WEBPACK_IMPORTED_MODULE_3__["createElementWithoutAttrs"])('div');
  $d.innerHTML = content || '';
  let cn = $d.childNodes;
  if (cn.length === 0) {
    cn = [Object(_util_dom__WEBPACK_IMPORTED_MODULE_3__["createComment"])(_util__WEBPACK_IMPORTED_MODULE_4__["STR_EMPTY"])];
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
    const vm_3a7572e857 = super(attrs);
    const fn_3a7572e857_3 = () => {
      vm_3a7572e857.c = attrs.content;
    };
    fn_3a7572e857_3();
    attrs[_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]]('content', fn_3a7572e857_3);
    return vm_3a7572e857;
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
    const $p = Object(_util_dom__WEBPACK_IMPORTED_MODULE_3__["getParent"])(oldFirstEl);
    const newEls = renderHtml(this._c);
    Object(_util_dom__WEBPACK_IMPORTED_MODULE_3__["insertBefore"])($p, newEls, oldFirstEl);
    roots.forEach(oldEl => Object(_util_dom__WEBPACK_IMPORTED_MODULE_3__["removeChild"])($p, oldEl));
    this[_core_component__WEBPACK_IMPORTED_MODULE_2__["ROOT_NODES"]] = newEls;
  }
}


/***/ }),

/***/ "../../jinge-framework/components/i18n.js":
/*!****************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/components/i18n.js ***!
  \****************************************************************/
/*! exports provided: I18nComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18nComponent", function() { return I18nComponent; });
/* harmony import */ var _vm_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/core */ "../../jinge-framework/vm/core.js");
/* harmony import */ var _vm_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vm/proxy */ "../../jinge-framework/vm/proxy.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/component */ "../../jinge-framework/core/component.js");
/* harmony import */ var _core_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/i18n */ "../../jinge-framework/core/i18n.js");
/* harmony import */ var _core_messenger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/messenger */ "../../jinge-framework/core/messenger.js");
/* harmony import */ var _util_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/dom */ "../../jinge-framework/util/dom.js");











const RENDER_KEY = Symbol('render_key');
const RENDER_VMS = Symbol('render_vms');
const ON_LOCALE_CHANGE = Symbol('fn_on_locale_change');
const LC_HANDLER = Symbol('locale_change_handler');

class I18nComponent extends _core_component__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(attrs, renderKey, renderVms) {
    const vm_3a7572e857 = super(attrs);
    vm_3a7572e857[RENDER_KEY] = renderKey;
    vm_3a7572e857[RENDER_VMS] = renderVms;
    vm_3a7572e857[LC_HANDLER] = vm_3a7572e857[ON_LOCALE_CHANGE].bind(this);
    _core_i18n__WEBPACK_IMPORTED_MODULE_3__["i18nService"][_core_messenger__WEBPACK_IMPORTED_MODULE_4__["ON"]](_core_i18n__WEBPACK_IMPORTED_MODULE_3__["LOCALE_CHANGE"], vm_3a7572e857[LC_HANDLER]);
    return vm_3a7572e857;
  }

  [_core_component__WEBPACK_IMPORTED_MODULE_2__["RENDER"]]() {
    const renderFn = _core_i18n__WEBPACK_IMPORTED_MODULE_3__["i18nService"][_core_i18n__WEBPACK_IMPORTED_MODULE_3__["GET_RENDER"]](this[RENDER_KEY]);
    return renderFn(this, ...this[RENDER_VMS]);
  }

  [ON_LOCALE_CHANGE]() {
    this[_core_component__WEBPACK_IMPORTED_MODULE_2__["UPDATE_IF_NEED"]]();
  }

  [_core_component__WEBPACK_IMPORTED_MODULE_2__["UPDATE"]]() {
    Object(_vm_core__WEBPACK_IMPORTED_MODULE_0__["vmRelatedClear"])(this[_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_RELATED_LISTENERS"]]);

    let $el = this[_core_component__WEBPACK_IMPORTED_MODULE_2__["GET_LAST_DOM"]]();
    const $parentEl = Object(_util_dom__WEBPACK_IMPORTED_MODULE_5__["getParent"])($el);
    $el = $el.nextSibling;

    /*
     * 当前实现下，HANDLE_BEFORE_DESTROY 正好可以销毁子组件/子元素。
     */
    this[_core_component__WEBPACK_IMPORTED_MODULE_2__["HANDLE_BEFORE_DESTROY"]](true);
    /*
     * 将新的元素替换到原来的旧的元素的位置。
     */
    const els = this[_core_component__WEBPACK_IMPORTED_MODULE_2__["RENDER"]]();
    if ($el) {
      Object(_util_dom__WEBPACK_IMPORTED_MODULE_5__["insertBefore"])($parentEl, els, $el);
    } else {
      Object(_util_dom__WEBPACK_IMPORTED_MODULE_5__["appendChild"])($parentEl, els);
    }
  }

  [_core_component__WEBPACK_IMPORTED_MODULE_2__["BEFORE_DESTROY"]]() {
    _core_i18n__WEBPACK_IMPORTED_MODULE_3__["i18nService"][_core_messenger__WEBPACK_IMPORTED_MODULE_4__["OFF"]](_core_i18n__WEBPACK_IMPORTED_MODULE_3__["LOCALE_CHANGE"], this[LC_HANDLER]);
    this[RENDER_VMS] = null; // unlink vms
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
/* harmony import */ var _vm_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/core */ "../../jinge-framework/vm/core.js");
/* harmony import */ var _vm_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vm/proxy */ "../../jinge-framework/vm/proxy.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/component */ "../../jinge-framework/core/component.js");
/* harmony import */ var _core_messenger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/messenger */ "../../jinge-framework/core/messenger.js");
/* harmony import */ var _util_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/dom */ "../../jinge-framework/util/dom.js");
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
  const el = new _core_component__WEBPACK_IMPORTED_MODULE_2__["Component"](Object(_vm_proxy__WEBPACK_IMPORTED_MODULE_1__["wrapAttrs"])({
    [_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_DEBUG_NAME"]]: 'attrs_of_<if>',
    [_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]]: null,
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
    const t = new Map();
    for (const k in acs) {
      t.set(k, [
        k === value ? _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_STATE_ENTERED"] : _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_STATE_LEAVED"],
        null // element
      ]);
    }
    component[T_MAP] = t;
    component[P_VAL] = value;
    component[OE_H] = component[ON_TS_END].bind(component);
  }
  const renderFn = acs ? acs[value] : null;
  const roots = component[_core_component__WEBPACK_IMPORTED_MODULE_2__["ROOT_NODES"]];
  if (!renderFn) {
    roots.push(Object(_util_dom__WEBPACK_IMPORTED_MODULE_4__["createComment"])(_util__WEBPACK_IMPORTED_MODULE_5__["STR_EMPTY"]));
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
  const pa = Object(_util_dom__WEBPACK_IMPORTED_MODULE_4__["getParent"])(isC ? fd : el);
  const renderFn = component[_core_component__WEBPACK_IMPORTED_MODULE_2__["ARG_COMPONENTS"]] ? component[_core_component__WEBPACK_IMPORTED_MODULE_2__["ARG_COMPONENTS"]][component[C_VAL]] : null;
  const ne = renderFn ? createEl(renderFn, component[_core_component__WEBPACK_IMPORTED_MODULE_2__["CONTEXT"]], component[_core_style__WEBPACK_IMPORTED_MODULE_7__["CSTYLE_PID"]]) : null;
  roots[0] = ne || Object(_util_dom__WEBPACK_IMPORTED_MODULE_4__["createComment"])(_util__WEBPACK_IMPORTED_MODULE_5__["STR_EMPTY"]);
  Object(_util_dom__WEBPACK_IMPORTED_MODULE_4__["insertBefore"])(
    pa,
    ne ? ne[_core_component__WEBPACK_IMPORTED_MODULE_2__["RENDER"]]() : roots[0],
    fd
  );
  if (isC) {
    el[_core_component__WEBPACK_IMPORTED_MODULE_2__["DESTROY"]]();
  } else {
    Object(_util_dom__WEBPACK_IMPORTED_MODULE_4__["removeChild"])(pa, fd);
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
  Object(_util_dom__WEBPACK_IMPORTED_MODULE_4__["removeClass"])(el, tn + (e ? _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_C_ENTER"] : _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_C_LEAVE"]));
  Object(_util_dom__WEBPACK_IMPORTED_MODULE_4__["removeClass"])(el, tn + (e ? _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_C_ENTER_ACTIVE"] : _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_C_LEAVE_ACTIVE"]));
  Object(_util_dom__WEBPACK_IMPORTED_MODULE_4__["removeEvent"])(el, _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_TRANSITION_END"], onEnd);
  Object(_util_dom__WEBPACK_IMPORTED_MODULE_4__["removeEvent"])(el, _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_ANIMATION_END"], onEnd);
  component[_core_messenger__WEBPACK_IMPORTED_MODULE_3__["NOTIFY"]](_core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_TRANSITION"], e ? _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_ENTER_CANCELLED"] : _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_LEAVE_CANCELLED"], el);
}

function startTs(t, tn, e, component) {
  const el = t[1];
  const onEnd = component[OE_H];
  if (el.nodeType !== Node.ELEMENT_NODE) {
    onEnd();
    return;
  }
  const classOfStart = tn + (e ? _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_C_ENTER"] : _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_C_LEAVE"]);
  const classOfActive = tn + (e ? _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_C_ENTER_ACTIVE"] : _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_C_LEAVE_ACTIVE"]);

  Object(_util_dom__WEBPACK_IMPORTED_MODULE_4__["addClass"])(el, classOfStart);
  // force render by calling getComputedStyle
  Object(_core_transition__WEBPACK_IMPORTED_MODULE_6__["getDurationType"])(el);
  Object(_util_dom__WEBPACK_IMPORTED_MODULE_4__["addClass"])(el, classOfActive);
  const tsEndName = Object(_core_transition__WEBPACK_IMPORTED_MODULE_6__["getDurationType"])(el);
  if (!tsEndName) {
    onEnd();
    return;
  }
  t[0] = e ? _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_STATE_ENTERING"] : _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_STATE_LEAVING"];
  Object(_util_dom__WEBPACK_IMPORTED_MODULE_4__["addEvent"])(el, tsEndName, onEnd);
  component[_core_messenger__WEBPACK_IMPORTED_MODULE_3__["NOTIFY"]](_core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_TRANSITION"], e ? _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_BEFORE_ENTER"] : _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_BEFORE_LEAVE"], el);
  Object(_util__WEBPACK_IMPORTED_MODULE_5__["setImmediate"])(() => {
    component[_core_messenger__WEBPACK_IMPORTED_MODULE_3__["NOTIFY"]](_core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_TRANSITION"], e ? _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_ENTER"] : _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_LEAVE"], el);
  });
}
function updateSwitchWithTransition(component) {
  const value = component[C_VAL];
  const pv = component[P_VAL];
  const tn = component.ts;
  let pt = component[T_MAP].get(pv);
  if (!pt) {
    pt = [
      pv === IF_STR_ELSE ? _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_STATE_LEAVED"] : _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_STATE_ENTERED"],
      null // element
    ];
    component[T_MAP].set(pv, pt);
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
  const pt = component[T_MAP].get(pv);
  const e = pt[0] === _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_STATE_ENTERING"];
  const el = pt[1];

  if (el.nodeType === Node.ELEMENT_NODE) {
    Object(_util_dom__WEBPACK_IMPORTED_MODULE_4__["removeEvent"])(el, _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_TRANSITION_END"], component[OE_H]);
    Object(_util_dom__WEBPACK_IMPORTED_MODULE_4__["removeEvent"])(el, _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_ANIMATION_END"], component[OE_H]);
    Object(_util_dom__WEBPACK_IMPORTED_MODULE_4__["removeClass"])(el, tn + (e ? _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_C_ENTER"] : _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_C_LEAVE"]));
    Object(_util_dom__WEBPACK_IMPORTED_MODULE_4__["removeClass"])(el, tn + (e ? _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_C_ENTER_ACTIVE"] : _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_C_LEAVE_ACTIVE"]));
    component[_core_messenger__WEBPACK_IMPORTED_MODULE_3__["NOTIFY"]](_core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_TRANSITION"], e ? _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_AFTER_ENTER"] : _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_AFTER_LEAVE"]);
  }

  pt[0] = e ? _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_STATE_ENTERED"] : _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_STATE_LEAVED"];

  if (e) return;

  doUpdate(component);
  component[P_VAL] = value;
  const ct = component[T_MAP].get(value);
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

function destroySwitch(component) {
  const tMap = component[T_MAP];
  if (tMap) {
    tMap.forEach((ts, v) => {
      if (ts[1]) {
        Object(_util_dom__WEBPACK_IMPORTED_MODULE_4__["removeEvent"])(ts[1], _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_TRANSITION_END"], component[OE_H]);
        Object(_util_dom__WEBPACK_IMPORTED_MODULE_4__["removeEvent"])(ts[1], _core_transition__WEBPACK_IMPORTED_MODULE_6__["TS_ANIMATION_END"], component[OE_H]);
      }
      ts.length = 0;
    });
    tMap.clear();
  }
}

class IfComponent extends _core_component__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(attrs) {
    const vm_3a7572e857 = super(attrs);
    vm_3a7572e857[C_VAL] = _util__WEBPACK_IMPORTED_MODULE_5__["STR_DEFAULT"];
    vm_3a7572e857[OE_H] = null;
    vm_3a7572e857[T_MAP] = null;
    vm_3a7572e857[P_VAL] = null;
    const fn_3a7572e857_5 = () => {
      vm_3a7572e857.expect = attrs.expect;
    };
    fn_3a7572e857_5();
    attrs[_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]]('expect', fn_3a7572e857_5);
    const fn_3a7572e857_6 = () => {
      vm_3a7572e857.ts = attrs.transition;
    };
    fn_3a7572e857_6();
    attrs[_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]]('transition', fn_3a7572e857_6);
    return vm_3a7572e857;
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

  [_core_component__WEBPACK_IMPORTED_MODULE_2__["BEFORE_DESTROY"]]() {
    destroySwitch(this);
  }
}

class SwitchComponent extends _core_component__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(attrs) {
    const vm_3a7572e857 = super(attrs);
    vm_3a7572e857[OE_H] = null;
    vm_3a7572e857[T_MAP] = null;
    vm_3a7572e857[P_VAL] = null;
    const fn_3a7572e857_4 = () => {
      vm_3a7572e857.test = attrs.test;
    };
    fn_3a7572e857_4();
    attrs[_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]]('test', fn_3a7572e857_4);
    const fn_3a7572e857_5 = () => {
      vm_3a7572e857.ts = attrs.transition;
    };
    fn_3a7572e857_5();
    attrs[_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]]('transition', fn_3a7572e857_5);
    return vm_3a7572e857;
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

  [_core_component__WEBPACK_IMPORTED_MODULE_2__["BEFORE_DESTROY"]]() {
    destroySwitch(this);
  }
}


/***/ }),

/***/ "../../jinge-framework/components/index.js":
/*!*****************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/components/index.js ***!
  \*****************************************************************/
/*! exports provided: ParameterComponent, I18nComponent, ToggleClassComponent, FOR_LENGTH, FOR_KEYS, FOR_KEY_NAME, FOR_WAIT_UPDATE, FOR_UPDATE_ITEM, ForEachComponent, ForComponent, STR_JG_HIDE, HideComponent, BindHtmlComponent, IfComponent, SwitchComponent, LogComponent */
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

/* harmony import */ var _if__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./if */ "../../jinge-framework/components/if.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IfComponent", function() { return _if__WEBPACK_IMPORTED_MODULE_4__["IfComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitchComponent", function() { return _if__WEBPACK_IMPORTED_MODULE_4__["SwitchComponent"]; });

/* harmony import */ var _parameter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parameter */ "../../jinge-framework/components/parameter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParameterComponent", function() { return _parameter__WEBPACK_IMPORTED_MODULE_5__["ParameterComponent"]; });

/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./log */ "../../jinge-framework/components/log.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogComponent", function() { return _log__WEBPACK_IMPORTED_MODULE_6__["LogComponent"]; });

/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./i18n */ "../../jinge-framework/components/i18n.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18nComponent", function() { return _i18n__WEBPACK_IMPORTED_MODULE_7__["I18nComponent"]; });











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
/* harmony import */ var _vm_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/core */ "../../jinge-framework/vm/core.js");
/* harmony import */ var _vm_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vm/proxy */ "../../jinge-framework/vm/proxy.js");
/* harmony import */ var _core_component_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/component.js */ "../../jinge-framework/core/component.js");
/* harmony import */ var _util_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/dom */ "../../jinge-framework/util/dom.js");







/**
 * This component is only for development purpose
 */
class LogComponent extends _core_component_js__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(attrs) {
    const vm_3a7572e857 = super(attrs);
    const fn_3a7572e857_1 = () => {
      vm_3a7572e857.msg = attrs.msg;
    };
    fn_3a7572e857_1();
    attrs[_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]]('msg', fn_3a7572e857_1);
    return vm_3a7572e857;
  }

  set msg(v) {
    console.log(v);
    this._msg = v;
  }

  get msg() {
    return this._msg;
  }

  [_core_component_js__WEBPACK_IMPORTED_MODULE_2__["RENDER"]]() {
    return [Object(_util_dom__WEBPACK_IMPORTED_MODULE_3__["createComment"])('log placeholder')];
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
/* harmony import */ var _vm_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/core */ "../../jinge-framework/vm/core.js");
/* harmony import */ var _vm_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vm/proxy */ "../../jinge-framework/vm/proxy.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/component */ "../../jinge-framework/core/component.js");







class ParameterComponent extends _core_component__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(attrs, params) {
    const vm_3a7572e857 = super(attrs);
    params.forEach(p => {
      vm_3a7572e857[p] = attrs[p];
      attrs[_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]](p, () => {
        vm_3a7572e857[p] = attrs[p];
      });
    });
    return vm_3a7572e857;
  }
}


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
/* harmony import */ var _vm_proxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vm/proxy */ "../../jinge-framework/vm/proxy.js");




function bootstrap(Component, dom, attrs) {
  if (dom === document.body) {
    throw new Error('bootstrap dom cannot be document.body');
  }
  /**
   * as we must pass ViewModel-Object as first argument to Component constructor,
   * we simple pass an empty attrs.
   */
  const bootAttrs = attrs || {};
  const bootComponent = new Component(Object(_vm_proxy__WEBPACK_IMPORTED_MODULE_2__["wrapAttrs"])(bootAttrs));
  if (!Object(_component__WEBPACK_IMPORTED_MODULE_0__["isComponent"])(bootComponent)) Object(_util__WEBPACK_IMPORTED_MODULE_1__["assertFail"])();
  bootComponent[_component__WEBPACK_IMPORTED_MODULE_0__["RENDER_TO_DOM"]](dom);
}


/***/ }),

/***/ "../../jinge-framework/core/component.js":
/*!***************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/core/component.js ***!
  \***************************************************************/
/*! exports provided: NOTIFY_TRANSITION, TEMPLATE_RENDER, RENDER, RENDER_TO_DOM, ARG_COMPONENTS, PASSED_ATTRS, CLONE, DESTROY, CONTEXT, CONTEXT_STATE, ROOT_NODES, NON_ROOT_COMPONENT_NODES, REF_NODES, SET_REF_NODE, REF_BELONGS, RELATED_DOM_REFS, GET_STATE_NAME, AFTER_RENDER, HANDLE_AFTER_RENDER, HANDLE_BEFORE_DESTROY, GET_FIRST_DOM, GET_LAST_DOM, GET_TRANSITION_DOM, BEFORE_DESTROY, GET_CONTEXT, SET_CONTEXT, GET_REF, UPDATE, UPDATE_IF_NEED, UPDATE_NEXT_MAP, STATE, STATE_INITIALIZE, STATE_RENDERED, STATE_WILLDESTROY, STATE_DESTROIED, STATE_NAMES, DOM_ON, DOM_PASS_LISTENERS, I18N_WATCH, Component, destroyRelatedRefs, isComponent, assertRenderResults, operateRootHtmlDOM */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_STATE_NAME", function() { return GET_STATE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AFTER_RENDER", function() { return AFTER_RENDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HANDLE_AFTER_RENDER", function() { return HANDLE_AFTER_RENDER; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18N_WATCH", function() { return I18N_WATCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroyRelatedRefs", function() { return destroyRelatedRefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComponent", function() { return isComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertRenderResults", function() { return assertRenderResults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operateRootHtmlDOM", function() { return operateRootHtmlDOM; });
/* harmony import */ var _vm_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/core */ "../../jinge-framework/vm/core.js");
/* harmony import */ var _messenger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messenger */ "../../jinge-framework/core/messenger.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "../../jinge-framework/core/style.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ "../../jinge-framework/util/index.js");
/* harmony import */ var _util_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/dom */ "../../jinge-framework/util/dom.js");
/* harmony import */ var _vm_proxy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../vm/proxy */ "../../jinge-framework/vm/proxy.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./i18n */ "../../jinge-framework/core/i18n.js");








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
const GET_STATE_NAME = Object(_util__WEBPACK_IMPORTED_MODULE_3__["Symbol"])('get_state_name');
const AFTER_RENDER = Object(_util__WEBPACK_IMPORTED_MODULE_3__["Symbol"])('afterRender');
const HANDLE_AFTER_RENDER = Object(_util__WEBPACK_IMPORTED_MODULE_3__["Symbol"])('handleAfterRender');
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

const I18N_WATCH = Object(_util__WEBPACK_IMPORTED_MODULE_3__["Symbol"])('i18n_watch');
const DOM_LISTENER_DEREGISTERS = Object(_util__WEBPACK_IMPORTED_MODULE_3__["Symbol"])('dom_listener_deregisters');
const I18N_LISTENER_DEREGISTERS = Object(_util__WEBPACK_IMPORTED_MODULE_3__["Symbol"])('i18n_listener_deregisters');

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
    if (!Object(_util__WEBPACK_IMPORTED_MODULE_3__["isObject"])(attrs) || !(_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"] in attrs)) {
      throw new Error('First argument passed to Component constructor must be ViewModel with Messenger interface. See https://[todo]');
    }
    super(attrs[_messenger__WEBPACK_IMPORTED_MODULE_1__["LISTENERS"]]);

    this[PASSED_ATTRS] = attrs;

    this[_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]] = null;
    this[_vm_proxy__WEBPACK_IMPORTED_MODULE_5__["VM_SETTER_FN_MAP"]] = null;

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
    this[_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_RELATED_LISTENERS"]] = null;

    // saved listener deregisters, will be auto called when component is destroied
    this[DOM_LISTENER_DEREGISTERS] = null;
    this[I18N_LISTENER_DEREGISTERS] = null;

    return Object(_vm_proxy__WEBPACK_IMPORTED_MODULE_5__["wrapComponent"])(this);
  }

  /**
   * Helper function to add i18n LOCALE_CHANGE listener.
   * Return deregister function which will remove event listener.
   * If you do dot call deregister function, it will be auto called when component is destroied.
   * @param {Function} listener listener bind to LOCALE_CHANGE event.
   * @param {Boolean} immediate call listener immediately, useful for component property initialize
   * @returns {Function} deregister function to remove listener
   */
  [I18N_WATCH](listener, immediate) {
    const deregs = Object(_util__WEBPACK_IMPORTED_MODULE_3__["getOrCreateArrayProperty"])(
      this,
      I18N_LISTENER_DEREGISTERS
    );
    const unwatcher = _i18n__WEBPACK_IMPORTED_MODULE_6__["i18nService"].watch(() => {
      // bind component to listener's function context.
      listener.call(this);
    }, immediate);
    const deregister = () => {
      unwatcher();
      Object(_util__WEBPACK_IMPORTED_MODULE_3__["arrayRemove"])(deregs, deregister);
    };
    deregs.push(deregister);
    return deregister;
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
    const lisDeregister = Object(_util_dom__WEBPACK_IMPORTED_MODULE_4__["registerEvent"])($el, eventName, $event => {
      // bind component to listener's function context.
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
      Object(_util_dom__WEBPACK_IMPORTED_MODULE_4__["replaceChild"])(Object(_util_dom__WEBPACK_IMPORTED_MODULE_4__["getParent"])($targetDOM), rr, $targetDOM);
    } else {
      Object(_util_dom__WEBPACK_IMPORTED_MODULE_4__["appendChild"])($targetDOM, rr);
    }
    this[HANDLE_AFTER_RENDER]();
  }

  [DESTROY](removeDOM = true) {
    if (this[STATE] > STATE_WILLDESTROY) return;
    this[STATE] = STATE_WILLDESTROY;
    /*
     * once component is being destroied,
     *   we mark component and it's passed-attrs un-notifiable to ignore
     *   possible messeges occurs in BEFORE_DESTROY lifecycle callback.
     */
    this[_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_NOTIFIABLE"]] = false;
    this[PASSED_ATTRS][_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_NOTIFIABLE"]] = false;

    // notify before destroy lifecycle
    // 需要注意，必须先 NOTIFY 向外通知销毁消息，再执行 BEFORE_DESTROY 生命周期函数。
    //   因为在 BEFORE_DESTROY 里会销毁外部消息回调函数里可能会用到的属性等资源。
    this[_messenger__WEBPACK_IMPORTED_MODULE_1__["NOTIFY"]](_util__WEBPACK_IMPORTED_MODULE_3__["BEFORE_DESTROY_EVENT_NAME"], this);
    this[BEFORE_DESTROY]();
    // destroy children(include child component and html nodes)
    this[HANDLE_BEFORE_DESTROY](removeDOM);
    // clear messenger listeners.
    super[_messenger__WEBPACK_IMPORTED_MODULE_1__["CLEAR"]]();
    // remove component style
    _style__WEBPACK_IMPORTED_MODULE_2__["manager"][_style__WEBPACK_IMPORTED_MODULE_2__["CSTYLE_DEL"]](this.constructor.style);
    // destroy attrs passed to constructor
    const attrs = this[PASSED_ATTRS];
    attrs[_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_vm_core__WEBPACK_IMPORTED_MODULE_0__["DESTROY"]]();
    // unlink all symbol property. may be unnecessary.
    Object(_util__WEBPACK_IMPORTED_MODULE_3__["getOwnPropertySymbols"])(attrs, p => {
      attrs[p] = null;
    });

    /*
     * reset HOST object's all public properties to null
     *   to remove HOST object from old property value's VM_PARENTS
     *
     * 将所有公共属性的属性值重置为 null，从而解除 ViewModel 之间的 VM_PARENTS 关联，回收资源和防止潜在 bug。
     *   使用 getOwnPropertyNames 可以获取所有属性，但无法获取 setter 函数定义的属性。
     *   因此，先从 VM_SETTER_FN_MAP 中取到所有使用过的属性，主动调用属性值的 REMOVE_PARENT；然后使用 getOwnPropertyNames 简单地重置 null。
     */
    const sfm = this[_vm_proxy__WEBPACK_IMPORTED_MODULE_5__["VM_SETTER_FN_MAP"]];
    if (sfm) {
      sfm.forEach((fn, prop) => {
        if (fn === null) return;
        const v = this[prop];
        if (Object(_util__WEBPACK_IMPORTED_MODULE_3__["isObject"])(v) && (_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"] in v)) {
          v[_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_vm_core__WEBPACK_IMPORTED_MODULE_0__["REMOVE_PARENT"]](
            this[_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_HOST"]],
            prop
          );
        }
      });
      sfm.clear();
      this[_vm_proxy__WEBPACK_IMPORTED_MODULE_5__["VM_SETTER_FN_MAP"]] = null;
    }
    Object(_util__WEBPACK_IMPORTED_MODULE_3__["getOwnPropertyNames"])(this, prop => {
      if (Object(_util__WEBPACK_IMPORTED_MODULE_3__["isObject"])(this[prop])) {
        this[prop] = null;
      }
    });
    // destroy view model, it's import to pass false as argument
    this[_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_vm_core__WEBPACK_IMPORTED_MODULE_0__["DESTROY"]](false);

    // clear next tick update setImmediate
    const unm = this[UPDATE_NEXT_MAP];
    if (unm) {
      unm.forEach(imm => {
        Object(_util__WEBPACK_IMPORTED_MODULE_3__["clearImmediate"])(imm);
      });
      unm.clear();
      this[UPDATE_NEXT_MAP] = null;
    }

    // destroy related refs:
    destroyRelatedRefs(this);
    // clear context.
    destroyContext(this);
    // clear all dom event listener and i18n watcher
    releaseDeregisters(this, DOM_LISTENER_DEREGISTERS);
    releaseDeregisters(this, I18N_LISTENER_DEREGISTERS);

    // clear properties
    this[STATE] = STATE_DESTROIED;
    // unlink all symbol properties. maybe unnecessary.
    this[_vm_proxy__WEBPACK_IMPORTED_MODULE_5__["VM_SETTER_FN_MAP"]] =
      this[PASSED_ATTRS] =
      this[NON_ROOT_COMPONENT_NODES] =
      this[ROOT_NODES] =
      this[REF_NODES] =
      this[REF_BELONGS] =
      this[ARG_COMPONENTS] = null;
    // unlink VM_ATTRS, mark component destroied
    // 这行代码必须放在最后，因为在 ../viewmodel/proxy.js 里面，
    //   需要使用 VM_ATTRS 是否存在来判断组件是否已经销毁。
    this[_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]] = null;
  }

  [HANDLE_BEFORE_DESTROY](removeDOM) {
    this[NON_ROOT_COMPONENT_NODES].forEach(component => {
      // it's not necessary to remove dom when destroy non-root component,
      // because those dom nodes will be auto removed when their parent dom is removed.
      component[DESTROY](false);
    });
    this[NON_ROOT_COMPONENT_NODES].length = 0;

    let $parent;
    this[ROOT_NODES].forEach(node => {
      if (isComponent(node)) {
        node[DESTROY](removeDOM);
      } else if (removeDOM) {
        if (!$parent) {
          $parent = Object(_util_dom__WEBPACK_IMPORTED_MODULE_4__["getParent"])(node);
        }
        Object(_util_dom__WEBPACK_IMPORTED_MODULE_4__["removeChild"])($parent, node);
      }
    });
    this[ROOT_NODES].length = 0;
  }

  [HANDLE_AFTER_RENDER]() {
    /*
     * Set NOTIFIABLE=true to enable ViewModel notify.
     * Don't forgot to add these code if you override HANDLE_AFTER_RENDER
     */
    this[PASSED_ATTRS][_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_NOTIFIABLE"]] = true;
    this[_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_NOTIFIABLE"]] = true;

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

function releaseDeregisters(component, nameOfDeregisters) {
  if (component[nameOfDeregisters]) {
    component[nameOfDeregisters].forEach(deregister => deregister());
    component[nameOfDeregisters] = null;
  }
}

function destroyRelatedRefs(comp) {
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


/***/ }),

/***/ "../../jinge-framework/core/i18n.js":
/*!**********************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/core/i18n.js ***!
  \**********************************************************/
/*! exports provided: GET_RENDER, GET_TEXT, GET_ATTR, LOCALE_CHANGE, SWITCH_LOCALE, REGISTER_DEP_FNS, CURRENT_LOCALE, i18nService, _t */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_RENDER", function() { return GET_RENDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_TEXT", function() { return GET_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ATTR", function() { return GET_ATTR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCALE_CHANGE", function() { return LOCALE_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWITCH_LOCALE", function() { return SWITCH_LOCALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_DEP_FNS", function() { return REGISTER_DEP_FNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENT_LOCALE", function() { return CURRENT_LOCALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i18nService", function() { return i18nService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_t", function() { return _t; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge-framework/util/index.js");
/* harmony import */ var _messenger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messenger */ "../../jinge-framework/core/messenger.js");



const GET_RENDER = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('fn_get_render');
const GET_TEXT = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('fn_get_text');
const GET_ATTR = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('fn_get_attr');
const LOCALE_CHANGE = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('locale_change');
const SWITCH_LOCALE = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('switch_locale');
const REGISTER_DEP_FNS = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('register_render_dependent_functions');
const CURRENT_LOCALE = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('current_locale');

const DEP_FNS = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('render_dependent_functions');
const LAST_FETCHING_KEY = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('last_fetching_key');
const CURRENT_DATA = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('current_data');
const CACHE = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('cache');

function compile(text) {
  // eslint-disable-next-line no-new-func
  return new Function('__ctx', `return \`${text.replace(/\$\{\s*([\w\d._$]+)\s*\}/g, (m, n) => {
    return '${ __ctx.' + n + ' }';
  })}\`;`);
}

function defaultFetchFn(locale) {
  return window.fetch('dist/locale.' + locale + '.js').then(res => res.text());
}

class I18nService extends _messenger__WEBPACK_IMPORTED_MODULE_1__["Messenger"] {
  constructor(attrs) {
    super(attrs);
    this[DEP_FNS] = null;
    this[CURRENT_DATA] = null;
    this[CACHE] = new Map();
    this[LAST_FETCHING_KEY] = null;

    this.r(window.JINGE_I18N_DATA);
  }

  get locale() {
    return this[CURRENT_DATA].locale;
  }

  /**
   * Register locale data, will be called in locale resource script.
   * Usually you don't need call this method manully.
   */
  r(data) {
    if (!data || this[CACHE].has(data.locale)) {
      return;
    }
    this[CACHE].set(data.locale, data);
    if (!this[CURRENT_DATA]) {
      this[CURRENT_DATA] = data;
    }
  }

  /**
   * This method is used only for compiler auto generated code.
   * Don't call it manually!
   */
  [REGISTER_DEP_FNS](depFns) {
    if (this[DEP_FNS]) {
      console.warn('register i18n render dependent functions multiply times.');
      return;
    }
    this[DEP_FNS] = depFns;
  }

  /**
   * switch to another locale/language
   * @param {String} locale locale to swtiched
   * @param {Function} fetchFn a function to fetch locale resource script.
   */
  switch(locale, fetchFn = defaultFetchFn) {
    if (this[CURRENT_DATA].locale === locale) {
      return;
    }
    const data = this[CACHE].get(locale);
    if (!data) {
      if (fetchFn) {
        const key = Object(_util__WEBPACK_IMPORTED_MODULE_0__["uid"])();
        this[LAST_FETCHING_KEY] = key;
        fetchFn(locale).then(code => {
          // eslint-disable-next-line no-new-func
          (new Function('JINGE_I18N_SERVICE', code))(this);
          if (this[LAST_FETCHING_KEY] !== key || this[CURRENT_LOCALE] === locale) {
            /*
             * ignore if callback has been expired.
             * 使用闭包的技巧来检测当前回调是否已经过期，
             * 即，是否已经有新的 fetchFn 函数的调用。
             */
            return;
          }
          const data = this[CACHE].get(locale);
          this[CURRENT_DATA] = data;
          this[_messenger__WEBPACK_IMPORTED_MODULE_1__["NOTIFY"]](LOCALE_CHANGE, this.locale);
        });
      } else {
        throw new Error(`i18n data of "${locale}" is not found. `);
      }
    } else {
      this[CURRENT_DATA] = data;
      this[_messenger__WEBPACK_IMPORTED_MODULE_1__["NOTIFY"]](LOCALE_CHANGE, this.locale);
    }
  }

  [GET_TEXT](key, params) {
    const dict = this[CURRENT_DATA].dictionary;
    if (!(key in dict)) {
      return 'i18n_missing';
    }
    let text = dict[key];
    if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isString"])(text)) {
      // text.startsWith("«") means reference to another key
      if (text.charCodeAt(0) === 171) {
        text = dict[text.substring(1)];
      } else {
        text = compile(text);
      }
      dict[key] = text;
    }
    return text(params);
  }

  [GET_RENDER](key) {
    return getRenderOrAttr(this[CURRENT_DATA], this[DEP_FNS], 'render', key);
  }

  [GET_ATTR](key) {
    return getRenderOrAttr(this[CURRENT_DATA], this[DEP_FNS], 'attribute', key);
  }

  /**
   * Bind listener to LOCALE_CHANGE event,
   * return a function auto remove this listener
   * @param {Function} handler a listener bind to LOCALE_CHANGE event
   * @param {Boolean} immediate call listener immediately, default is false.
   * @returns {Function} a function auto remove listener
   */
  watch(listener, immediate) {
    this[_messenger__WEBPACK_IMPORTED_MODULE_1__["ON"]](LOCALE_CHANGE, listener);
    if (immediate) listener(this.locale);
    return function unwatcher() {
      this[_messenger__WEBPACK_IMPORTED_MODULE_1__["OFF"]](LOCALE_CHANGE, listener);
    };
  }
}

function getRenderOrAttr(data, depFns, type, key) {
  let renderOrAttr = data[type];
  if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(renderOrAttr)) {
    data[type] = renderOrAttr = (depFns ? renderOrAttr(...depFns[type]) : {});
  }
  if (!(key in renderOrAttr)) {
    throw new Error(`missing i18n ${type} for key: ${key}`);
  }
  let fn = renderOrAttr[key];
  if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isString"])(fn)) {
    // if fn is string, it's a reference to another key.
    renderOrAttr[key] = fn = renderOrAttr[fn];
  }
  return fn;
}

/* Singleton */
const i18nService = new I18nService();

/**
 * Compiler helper function, the first parameter will be convert to i18n dictionary key,
 * and the whole function will be transform to `i18nService[GET_TEXT](key, params)`
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

/***/ "../../jinge-framework/core/render-fns.js":
/*!****************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/core/render-fns.js ***!
  \****************************************************************/
/*! exports provided: emptyRenderFn, errorRenderFn, textRenderFn, i18nRenderFn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyRenderFn", function() { return emptyRenderFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorRenderFn", function() { return errorRenderFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textRenderFn", function() { return textRenderFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i18nRenderFn", function() { return i18nRenderFn; });
/* harmony import */ var _util_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/const */ "../../jinge-framework/util/const.js");
/* harmony import */ var _util_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/dom */ "../../jinge-framework/util/dom.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component */ "../../jinge-framework/core/component.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./i18n */ "../../jinge-framework/core/i18n.js");
/* harmony import */ var _messenger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messenger */ "../../jinge-framework/core/messenger.js");






function emptyRenderFn(component) {
  const el = Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__["createComment"])(_util_const__WEBPACK_IMPORTED_MODULE_0__["STR_EMPTY"]);
  component[_component__WEBPACK_IMPORTED_MODULE_2__["ROOT_NODES"]].push(el);
  return [el];
}

function errorRenderFn(component) {
  const el = Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__["createElement"])('span', {
    style: 'color: red !important;'
  });
  el.textContent = 'template parsing failed! please check webpack log.';
  component[_component__WEBPACK_IMPORTED_MODULE_2__["ROOT_NODES"]].push(el);
  return [el];
}

function textRenderFn(component, txtContent) {
  const el = Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__["createTextNode"])(txtContent);
  component[_component__WEBPACK_IMPORTED_MODULE_2__["ROOT_NODES"]].push(el);
  return el;
}

function i18nRenderFn(component, key) {
  const el = Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__["createTextNode"])();
  const fn = () => {
    el.textContent = _i18n__WEBPACK_IMPORTED_MODULE_3__["i18nService"][_i18n__WEBPACK_IMPORTED_MODULE_3__["GET_TEXT"]](key);
  };
  fn();
  _i18n__WEBPACK_IMPORTED_MODULE_3__["i18nService"][_messenger__WEBPACK_IMPORTED_MODULE_4__["ON"]](_i18n__WEBPACK_IMPORTED_MODULE_3__["LOCALE_CHANGE"], fn);
  component[_messenger__WEBPACK_IMPORTED_MODULE_4__["ON"]](_util_const__WEBPACK_IMPORTED_MODULE_0__["BEFORE_DESTROY_EVENT_NAME"], () => {
    _i18n__WEBPACK_IMPORTED_MODULE_3__["i18nService"][_messenger__WEBPACK_IMPORTED_MODULE_4__["OFF"]](_i18n__WEBPACK_IMPORTED_MODULE_3__["LOCALE_CHANGE"], fn);
  });
  component[_component__WEBPACK_IMPORTED_MODULE_2__["ROOT_NODES"]].push(el);
  return el;
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
/* harmony import */ var _util_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/dom */ "../../jinge-framework/util/dom.js");



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
  const $e = Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__["createElement"])('span', {
    style: 'position:absolute;left:-10000px;',
    class: 'jg-hide'
  });
  Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__["appendChild"])(document.body, $e);
  return Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__["getCSPropertyValue"])(getComputedStyle($e), 'display') === 'none';
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
    const $style = Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__["createElement"])('style', {
      type: 'text/css',
      id: sty.dom
    });
    Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__["appendChild"])(document.head, $style);
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
/* harmony import */ var _util_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/dom */ "../../jinge-framework/util/dom.js");


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
  const cst = Object(_util_dom__WEBPACK_IMPORTED_MODULE_0__["getComputedStyle"])(el);
  if (Object(_util_dom__WEBPACK_IMPORTED_MODULE_0__["getCSPropertyValue"])(cst, TS_TRANSITION_DURATION) !== TS_ZERO_S) {
    return TS_TRANSITION_END;
  } else if (Object(_util_dom__WEBPACK_IMPORTED_MODULE_0__["getCSPropertyValue"])(cst, TS_ANIMATION_DURATION) !== TS_ZERO_S) {
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
  const cst = Object(_util_dom__WEBPACK_IMPORTED_MODULE_0__["getComputedStyle"])(el);
  let dur = Object(_util_dom__WEBPACK_IMPORTED_MODULE_0__["getCSPropertyValue"])(cst, TS_TRANSITION_DURATION);
  if (dur !== TS_ZERO_S) {
    return [TS_TRANSITION_END, parseDuration(dur)];
  }
  dur = Object(_util_dom__WEBPACK_IMPORTED_MODULE_0__["getCSPropertyValue"])(cst, TS_ANIMATION_DURATION);
  if (dur !== TS_ZERO_S) {
    return [TS_ANIMATION_END, parseDuration(dur)];
  }
  return [null, 0];
}


/***/ }),

/***/ "../../jinge-framework/index.js":
/*!******************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/index.js ***!
  \******************************************************/
/*! exports provided: ForComponent, LogComponent, IfComponent, SwitchComponent, I18nComponent, ParameterComponent, ToggleClassComponent, HideComponent, BindHtmlComponent, Component, AFTER_RENDER, BEFORE_DESTROY, UPDATE_IF_NEED, UPDATE, GET_REF, CONTEXT, GET_CONTEXT, SET_CONTEXT, DOM_ON, DOM_PASS_LISTENERS, RENDER, ARG_COMPONENTS, ROOT_NODES, NON_ROOT_COMPONENT_NODES, GET_FIRST_DOM, GET_LAST_DOM, GET_TRANSITION_DOM, I18N_WATCH, isComponent, VM, wrapAttrs, vmWatch, vmUnwatch, VM_ON, VM_OFF, VM_NOTIFY, VM_ATTRS, Messenger, NOTIFY, LISTENERS, ON, OFF, passMessengerListeners, _t, i18n, bootstrap, Symbol, STR_DEFAULT, STR_JINGE, STR_EMPTY, isString, isObject, isFunction, isNumber, instanceOf, isUndefined, isBoolean, isArray, uid, obj2class, obj2style, setImmediate, clearImmediate, components, core, util, vm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "../../jinge-framework/components/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _components__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "../../jinge-framework/core/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "core", function() { return _core__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "../../jinge-framework/util/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "util", function() { return _util__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _vm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vm */ "../../jinge-framework/vm/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "vm", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__; });
/* harmony import */ var _components_for__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/for */ "../../jinge-framework/components/for.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForComponent", function() { return _components_for__WEBPACK_IMPORTED_MODULE_4__["ForComponent"]; });

/* harmony import */ var _components_log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/log */ "../../jinge-framework/components/log.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogComponent", function() { return _components_log__WEBPACK_IMPORTED_MODULE_5__["LogComponent"]; });

/* harmony import */ var _components_if__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/if */ "../../jinge-framework/components/if.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IfComponent", function() { return _components_if__WEBPACK_IMPORTED_MODULE_6__["IfComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitchComponent", function() { return _components_if__WEBPACK_IMPORTED_MODULE_6__["SwitchComponent"]; });

/* harmony import */ var _components_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/i18n */ "../../jinge-framework/components/i18n.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18nComponent", function() { return _components_i18n__WEBPACK_IMPORTED_MODULE_7__["I18nComponent"]; });

/* harmony import */ var _components_parameter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/parameter */ "../../jinge-framework/components/parameter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParameterComponent", function() { return _components_parameter__WEBPACK_IMPORTED_MODULE_8__["ParameterComponent"]; });

/* harmony import */ var _components_class__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/class */ "../../jinge-framework/components/class.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleClassComponent", function() { return _components_class__WEBPACK_IMPORTED_MODULE_9__["ToggleClassComponent"]; });

/* harmony import */ var _components_hide__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/hide */ "../../jinge-framework/components/hide.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HideComponent", function() { return _components_hide__WEBPACK_IMPORTED_MODULE_10__["HideComponent"]; });

/* harmony import */ var _components_html__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/html */ "../../jinge-framework/components/html.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BindHtmlComponent", function() { return _components_html__WEBPACK_IMPORTED_MODULE_11__["BindHtmlComponent"]; });

/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/component */ "../../jinge-framework/core/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return _core_component__WEBPACK_IMPORTED_MODULE_12__["Component"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AFTER_RENDER", function() { return _core_component__WEBPACK_IMPORTED_MODULE_12__["AFTER_RENDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BEFORE_DESTROY", function() { return _core_component__WEBPACK_IMPORTED_MODULE_12__["BEFORE_DESTROY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_IF_NEED", function() { return _core_component__WEBPACK_IMPORTED_MODULE_12__["UPDATE_IF_NEED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE", function() { return _core_component__WEBPACK_IMPORTED_MODULE_12__["UPDATE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_REF", function() { return _core_component__WEBPACK_IMPORTED_MODULE_12__["GET_REF"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CONTEXT", function() { return _core_component__WEBPACK_IMPORTED_MODULE_12__["CONTEXT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_CONTEXT", function() { return _core_component__WEBPACK_IMPORTED_MODULE_12__["GET_CONTEXT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_CONTEXT", function() { return _core_component__WEBPACK_IMPORTED_MODULE_12__["SET_CONTEXT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DOM_ON", function() { return _core_component__WEBPACK_IMPORTED_MODULE_12__["DOM_ON"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DOM_PASS_LISTENERS", function() { return _core_component__WEBPACK_IMPORTED_MODULE_12__["DOM_PASS_LISTENERS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RENDER", function() { return _core_component__WEBPACK_IMPORTED_MODULE_12__["RENDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ARG_COMPONENTS", function() { return _core_component__WEBPACK_IMPORTED_MODULE_12__["ARG_COMPONENTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ROOT_NODES", function() { return _core_component__WEBPACK_IMPORTED_MODULE_12__["ROOT_NODES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NON_ROOT_COMPONENT_NODES", function() { return _core_component__WEBPACK_IMPORTED_MODULE_12__["NON_ROOT_COMPONENT_NODES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_FIRST_DOM", function() { return _core_component__WEBPACK_IMPORTED_MODULE_12__["GET_FIRST_DOM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_LAST_DOM", function() { return _core_component__WEBPACK_IMPORTED_MODULE_12__["GET_LAST_DOM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_TRANSITION_DOM", function() { return _core_component__WEBPACK_IMPORTED_MODULE_12__["GET_TRANSITION_DOM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18N_WATCH", function() { return _core_component__WEBPACK_IMPORTED_MODULE_12__["I18N_WATCH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isComponent", function() { return _core_component__WEBPACK_IMPORTED_MODULE_12__["isComponent"]; });

/* harmony import */ var _vm_proxy__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./vm/proxy */ "../../jinge-framework/vm/proxy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM", function() { return _vm_proxy__WEBPACK_IMPORTED_MODULE_13__["wrapViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrapAttrs", function() { return _vm_proxy__WEBPACK_IMPORTED_MODULE_13__["wrapAttrs"]; });

/* harmony import */ var _vm_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./vm/core */ "../../jinge-framework/vm/core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vmWatch", function() { return _vm_core__WEBPACK_IMPORTED_MODULE_14__["vmWatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vmUnwatch", function() { return _vm_core__WEBPACK_IMPORTED_MODULE_14__["vmUnwatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_ON", function() { return _vm_core__WEBPACK_IMPORTED_MODULE_14__["VM_ON"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_OFF", function() { return _vm_core__WEBPACK_IMPORTED_MODULE_14__["VM_OFF"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_NOTIFY", function() { return _vm_core__WEBPACK_IMPORTED_MODULE_14__["VM_NOTIFY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_ATTRS", function() { return _vm_core__WEBPACK_IMPORTED_MODULE_14__["VM_ATTRS"]; });

/* harmony import */ var _core_messenger__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/messenger */ "../../jinge-framework/core/messenger.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Messenger", function() { return _core_messenger__WEBPACK_IMPORTED_MODULE_15__["Messenger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NOTIFY", function() { return _core_messenger__WEBPACK_IMPORTED_MODULE_15__["NOTIFY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LISTENERS", function() { return _core_messenger__WEBPACK_IMPORTED_MODULE_15__["LISTENERS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ON", function() { return _core_messenger__WEBPACK_IMPORTED_MODULE_15__["ON"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OFF", function() { return _core_messenger__WEBPACK_IMPORTED_MODULE_15__["OFF"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "passMessengerListeners", function() { return _core_messenger__WEBPACK_IMPORTED_MODULE_15__["passListeners"]; });

/* harmony import */ var _core_i18n__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core/i18n */ "../../jinge-framework/core/i18n.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_t", function() { return _core_i18n__WEBPACK_IMPORTED_MODULE_16__["_t"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i18n", function() { return _core_i18n__WEBPACK_IMPORTED_MODULE_16__["i18nService"]; });

/* harmony import */ var _core_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./core/bootstrap */ "../../jinge-framework/core/bootstrap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bootstrap", function() { return _core_bootstrap__WEBPACK_IMPORTED_MODULE_17__["bootstrap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Symbol", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["Symbol"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STR_DEFAULT", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["STR_DEFAULT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STR_JINGE", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["STR_JINGE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STR_EMPTY", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["STR_EMPTY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "instanceOf", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["instanceOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uid", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["uid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "obj2class", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["obj2class"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "obj2style", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["obj2style"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setImmediate", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["setImmediate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearImmediate", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["clearImmediate"]; });

























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
/*! exports provided: Symbol, assertFail, startsWith, endsWith, defineProperty, assignObject, obj2class, obj2style, defineProperties, getOwnPropertyNames, getOwnPropertySymbols, isPropertyEnumerable, createEmptyObject, uid, mapObject, getOrCreateProperty, getOrCreateValueOfMap, getOrCreateMapProperty, getOrCreateArrayValueOfMap, getOrCreateArrayProperty */
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

/***/ "../../jinge-framework/util/dom.js":
/*!*********************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/util/dom.js ***!
  \*********************************************************/
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

function createTextNode(text = '') {
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

/***/ "../../jinge-framework/util/index.js":
/*!***********************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/util/index.js ***!
  \***********************************************************/
/*! exports provided: STR_DEFAULT, STR_JINGE, STR_EMPTY, STR_LENGTH, BEFORE_DESTROY_EVENT_NAME, AFTER_RENDER_EVENT_NAME, HTML_ATTR_checked, HTML_ATTR_disabled, HTML_ATTR_selected, HTML_ATTR_readOnly, HTML_ATTR_autofocus, HTML_ATTR_autocomplete, HTML_ATTR_required, HTML_ATTR_controls, HTML_ATTR_autoplay, HTML_ATTR_draggable, HTML_ATTR_multiple, HTML_ATTR_muted, HTML_ATTR_value, typeOf, isObject, isString, isNumber, isUndefined, isArray, isBoolean, isFunction, instanceOf, isDOMNode, isPromise, arrayIndexOf, arrayRemove, arrayPushIfNotExist, arrayFind, arrayFindIndex, arrayEqual, Symbol, assertFail, startsWith, endsWith, defineProperty, assignObject, obj2class, obj2style, defineProperties, getOwnPropertyNames, getOwnPropertySymbols, isPropertyEnumerable, createEmptyObject, uid, mapObject, getOrCreateProperty, getOrCreateValueOfMap, getOrCreateMapProperty, getOrCreateArrayValueOfMap, getOrCreateArrayProperty, setImmediate, clearImmediate */
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

/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./const */ "../../jinge-framework/util/const.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STR_DEFAULT", function() { return _const__WEBPACK_IMPORTED_MODULE_2__["STR_DEFAULT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STR_JINGE", function() { return _const__WEBPACK_IMPORTED_MODULE_2__["STR_JINGE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STR_EMPTY", function() { return _const__WEBPACK_IMPORTED_MODULE_2__["STR_EMPTY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STR_LENGTH", function() { return _const__WEBPACK_IMPORTED_MODULE_2__["STR_LENGTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BEFORE_DESTROY_EVENT_NAME", function() { return _const__WEBPACK_IMPORTED_MODULE_2__["BEFORE_DESTROY_EVENT_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AFTER_RENDER_EVENT_NAME", function() { return _const__WEBPACK_IMPORTED_MODULE_2__["AFTER_RENDER_EVENT_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_checked", function() { return _const__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_checked"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_disabled", function() { return _const__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_disabled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_selected", function() { return _const__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_selected"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_readOnly", function() { return _const__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_readOnly"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_autofocus", function() { return _const__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_autofocus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_autocomplete", function() { return _const__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_autocomplete"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_required", function() { return _const__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_required"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_controls", function() { return _const__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_controls"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_autoplay", function() { return _const__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_autoplay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_draggable", function() { return _const__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_draggable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_multiple", function() { return _const__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_multiple"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_muted", function() { return _const__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_muted"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_value", function() { return _const__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_value"]; });

/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common */ "../../jinge-framework/util/common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Symbol", function() { return _common__WEBPACK_IMPORTED_MODULE_3__["Symbol"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertFail", function() { return _common__WEBPACK_IMPORTED_MODULE_3__["assertFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startsWith", function() { return _common__WEBPACK_IMPORTED_MODULE_3__["startsWith"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endsWith", function() { return _common__WEBPACK_IMPORTED_MODULE_3__["endsWith"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineProperty", function() { return _common__WEBPACK_IMPORTED_MODULE_3__["defineProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assignObject", function() { return _common__WEBPACK_IMPORTED_MODULE_3__["assignObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "obj2class", function() { return _common__WEBPACK_IMPORTED_MODULE_3__["obj2class"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "obj2style", function() { return _common__WEBPACK_IMPORTED_MODULE_3__["obj2style"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineProperties", function() { return _common__WEBPACK_IMPORTED_MODULE_3__["defineProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOwnPropertyNames", function() { return _common__WEBPACK_IMPORTED_MODULE_3__["getOwnPropertyNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOwnPropertySymbols", function() { return _common__WEBPACK_IMPORTED_MODULE_3__["getOwnPropertySymbols"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPropertyEnumerable", function() { return _common__WEBPACK_IMPORTED_MODULE_3__["isPropertyEnumerable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createEmptyObject", function() { return _common__WEBPACK_IMPORTED_MODULE_3__["createEmptyObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uid", function() { return _common__WEBPACK_IMPORTED_MODULE_3__["uid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapObject", function() { return _common__WEBPACK_IMPORTED_MODULE_3__["mapObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOrCreateProperty", function() { return _common__WEBPACK_IMPORTED_MODULE_3__["getOrCreateProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOrCreateValueOfMap", function() { return _common__WEBPACK_IMPORTED_MODULE_3__["getOrCreateValueOfMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOrCreateMapProperty", function() { return _common__WEBPACK_IMPORTED_MODULE_3__["getOrCreateMapProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOrCreateArrayValueOfMap", function() { return _common__WEBPACK_IMPORTED_MODULE_3__["getOrCreateArrayValueOfMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOrCreateArrayProperty", function() { return _common__WEBPACK_IMPORTED_MODULE_3__["getOrCreateArrayProperty"]; });

/* harmony import */ var _setimm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setimm */ "../../jinge-framework/util/setimm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setImmediate", function() { return _setimm__WEBPACK_IMPORTED_MODULE_4__["setImmediate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearImmediate", function() { return _setimm__WEBPACK_IMPORTED_MODULE_4__["clearImmediate"]; });









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
  return Array.isArray(v);
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

/***/ "../../jinge-framework/vm/core.js":
/*!********************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/vm/core.js ***!
  \********************************************************/
/*! exports provided: VM_ATTRS, VM_DEBUG_NAME, VM_PROXY, VM_ON, VM_OFF, VM_NOTIFY, VM_NOTIFIABLE, VM_HOST, VM_RELATED_LISTENERS, ADD_PARENT, REMOVE_PARENT, SHIFT_PARENT, DESTROY, isInnerObj, isViewModel, isPublicProp, ViewModelAttrs, vmRelatedClear, RelatedListenersStore, vmWatch, vmUnwatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VM_ATTRS", function() { return VM_ATTRS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VM_DEBUG_NAME", function() { return VM_DEBUG_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VM_PROXY", function() { return VM_PROXY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VM_ON", function() { return VM_ON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VM_OFF", function() { return VM_OFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VM_NOTIFY", function() { return VM_NOTIFY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VM_NOTIFIABLE", function() { return VM_NOTIFIABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VM_HOST", function() { return VM_HOST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VM_RELATED_LISTENERS", function() { return VM_RELATED_LISTENERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_PARENT", function() { return ADD_PARENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_PARENT", function() { return REMOVE_PARENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHIFT_PARENT", function() { return SHIFT_PARENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESTROY", function() { return DESTROY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInnerObj", function() { return isInnerObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isViewModel", function() { return isViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPublicProp", function() { return isPublicProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewModelAttrs", function() { return ViewModelAttrs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vmRelatedClear", function() { return vmRelatedClear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatedListenersStore", function() { return RelatedListenersStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vmWatch", function() { return vmWatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vmUnwatch", function() { return vmUnwatch; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge-framework/util/index.js");

// import {
//   config,
//   CFG_VM_DEBUG
// } from '../config';

const VM_ATTRS = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('vm_injected_attrs');
const VM_DEBUG_NAME = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('name');
const VM_PROXY = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('wrapper_proxy_of_host');
const VM_ON = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('fn_add_listener');
const VM_OFF = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('fn_remove_listener');
const VM_NOTIFY = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('fn_notify_listener');
const VM_NOTIFIABLE = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('notifiable');
const VM_HOST = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('host');
const VM_RELATED_LISTENERS = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('vm_related_listeners');

const PARENTS = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('parents');
const LISTENERS_STAR = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('*');
const LISTENERS_DBSTAR = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('**');
const LISTENERS = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('listeners');
const LISTENERS_ID = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('listenrs_id');
const LISTENERS_PARENT = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('vm_listeners_parent');
const LISTENERS_HANDLERS = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('vm_listeners_handlers');

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
  if (v === null) {
    return 'null';
  }
  if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(v)) {
    return 'undefined';
  }
  return v.toString();
}

function loopCreateNode(vm, props, level = 0) {
  const propertyName = getPropN(props[level]);
  if (!propertyName) {
    return null;
  }
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
  if (!propertyName) {
    return null;
  }
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

function delNode(node) {
  if ((node[LISTENERS_HANDLERS] && node[LISTENERS_HANDLERS].length > 0) ||
    (node[LISTENERS] && node[LISTENERS].size > 0)
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
  return parent;
}

function loopClearNode(node, isRoot = true) {
  const listeners = node[LISTENERS];
  if (listeners) {
    // loop clear all child nodes
    listeners.forEach(sn => loopClearNode(sn, false));
    listeners.clear();
    node[LISTENERS] = null;
  }
  if (isRoot) {
    return;
  }
  // destroy all handlers
  const handlers = node[LISTENERS_HANDLERS];
  if (handlers) {
    // clear handler waiting to execute
    handlers.forEach(_handleCancel);
    handlers.length = 0;
    node[LISTENERS_HANDLERS] = null;
  }
  // unlink parent
  node[LISTENERS_PARENT] = null;
}

const _handleTasks = new Map();
function _handleCancel(handler) {
  const t = _handleTasks.get(handler);
  if (t) {
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["clearImmediate"])(t.i);
    _handleTasks.delete(handler);
  }
}
function _handleOnce(node, handler, propPath) {
  if (_handleTasks.has(handler)) {
    return;
  }
  const imm = Object(_util__WEBPACK_IMPORTED_MODULE_0__["setImmediate"])(() => {
    const arg = _handleTasks.get(handler);
    try {
      handler(arg.p);
    } finally {
      _handleTasks.delete(handler);
    }
  });
  _handleTasks.set(handler, {
    i: imm,
    p: propPath
  });
}

function loopHandle(propPath, node) {
  const handlers = node[LISTENERS_HANDLERS];
  handlers && handlers.forEach(handler => {
    _handleOnce(node, handler, propPath);
    // imms ? _handleOnce(node, handler, propPath) : handler(propPath);
  });
  const listeners = node[LISTENERS];
  listeners && listeners.forEach(c => {
    loopHandle(propPath, c);
  });
}

function loopNotify(vm, props, level = 0) {
  const listeners = vm[LISTENERS];
  if (!listeners) {
    return;
  }
  const propertyName = getPropN(props[level]);
  if (!propertyName) {
    return;
  }
  let node = listeners.get(propertyName);
  if (node) {
    if (props.length - 1 === level) {
      // loopHandle(props, node, config[CFG_VM_DEBUG] ? null : imms);
      loopHandle(props, node);
    } else {
      loopNotify(node, props, level + 1);
    }
  }
  node = listeners.get(LISTENERS_STAR);
  if (node) {
    if (props.length - 1 === level) {
      loopHandle(props, node, null);
    } else {
      loopNotify(node, props, level + 1);
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
    this[VM_HOST] = host;
    this[VM_NOTIFIABLE] = true;
    this[VM_PROXY] = null;
    this[PARENTS] = null;
    this[LISTENERS] = null;
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

  [VM_ON](prop, handler, relatedComponent) {
    const node = loopCreateNode(this, getProps(prop));
    if (!node) {
      return;
    }
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["arrayPushIfNotExist"])(
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["getOrCreateArrayProperty"])(node, LISTENERS_HANDLERS),
      handler
    );
    const host = this[VM_HOST];
    if (!relatedComponent || !(VM_RELATED_LISTENERS in relatedComponent)) {
      return;
    }
    // unwrap component out of wrapper proxy
    relatedComponent = relatedComponent[VM_ATTRS][VM_HOST];
    if (host === relatedComponent) {
      return;
    }
    vmRelatedOn(relatedComponent, host, prop, handler);
  }

  [VM_OFF](prop, handler, relatedComponent) {
    const node = loopGetNode(this, getProps(prop));
    if (!node) {
      return;
    }

    const hs = node[LISTENERS_HANDLERS];
    if (!handler) { // remove all if second parameter is not provided
      hs.forEach(_handleCancel);
      hs.length = 0;
    } else {
      _handleCancel(handler);
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["arrayRemove"])(hs, handler);
    }

    delNode(node);

    const host = this[VM_HOST];
    if (!relatedComponent || !(VM_RELATED_LISTENERS in relatedComponent)) {
      return;
    }
    // unwrap component out of wrapper proxy
    relatedComponent = relatedComponent[VM_ATTRS][VM_HOST];
    if (host === relatedComponent) {
      return;
    }
    vmRelatedOff(relatedComponent, host, prop, handler);
  }

  [VM_NOTIFY](prop) {
    if (!this[VM_NOTIFIABLE]) {
      return;
    }
    const props = getProps(prop);
    if (this[LISTENERS]) {
      loopNotify(this, props);
    }
    const pArr = this[PARENTS];
    pArr && pArr.forEach(ps => {
      const vmAttrs = ps[0][VM_ATTRS];
      if (!vmAttrs) {
        console.error('dev-warn-unexpected: parent of ViewModelAttrs has been destroied but not unlink.');
        return;
      }
      vmAttrs[VM_NOTIFY](
        [ps[1]].concat(props)
      );
    });
  }

  [DESTROY](unlinkHostProperties = true) {
    // mark as non-notifiable
    this[VM_NOTIFIABLE] = false;
    // clear assignment parents
    const pArr = this[PARENTS];
    pArr && (pArr.length = 0);
    this[PARENTS] = null;
    // clear listeners
    loopClearNode(this);
    // unlink host object wrapper proxy
    this[VM_PROXY] = null;

    const host = this[VM_HOST];

    // destroy related listeners
    if (VM_RELATED_LISTENERS in host) {
      vmRelatedClear(host[VM_RELATED_LISTENERS]);
      host[VM_RELATED_LISTENERS] = null;
    }
    // unlink vm host
    this[VM_HOST] = null;
    /*
     * by default, we will reset VM_HOST object's all public properties to null
     *   to remove VM_HOST object from old property value's VM_PARENTS
     *
     * 默认情况下（即 === true），会将 VM_HOST 对象的所有（不以 '_' 打头的）公共属性重置为 null，这个赋值会触发 ./proxy.js 中的逻辑，
     *   将该对象从属性原来的值的 VM_PARENTS 中移除，从而达到解除 ViewModel 之间的关联，回收资源和防止潜在 bug 的目的。
     *
     * 当 VM 对象是某个类的实例时，由于类可以通过 setter 函数定义公共属性，而这一类的公共属性不能
     *   通过 getOwnPropertyNames 来遍历。因此这种情况，需要主动传递 unlinkHostProperties = false
     *   来禁用默认的重置属性逻辑，然后自己处理相关的重置逻辑。比如 Component 组件。
     */
    unlinkHostProperties && Object(_util__WEBPACK_IMPORTED_MODULE_0__["getOwnPropertyNames"])(host, prop => {
      if (prop.charCodeAt(0) === 95) {
        return;
      }
      const v = host[prop];
      if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(v)) {
        return;
      }
      const a = v[VM_ATTRS];
      a && a[REMOVE_PARENT](host, prop);
      host[prop] = null;
    });
  }
}

function vmRelatedOn(relatedComponent, hostViewModel, prop, handler) {
  const rvl = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getOrCreateMapProperty"])(relatedComponent, VM_RELATED_LISTENERS);
  let hook = rvl.get(hostViewModel);
  if (!hook) {
    hook = [];
    rvl.set(hostViewModel, hook);
  }
  hook.push([prop, handler]);
}

function vmRelatedOff(relatedComponent, hostViewModel, prop, handler) {
  const rvl = relatedComponent[VM_RELATED_LISTENERS];
  if (!rvl) return;
  const hook = rvl.get(hostViewModel);
  if (!hook) return;
  const isPropArray = Object(_util__WEBPACK_IMPORTED_MODULE_0__["isArray"])(prop);
  const i = hook.findIndex(it => {
    return handler === it[1] &&
      (isPropArray
        ? Object(_util__WEBPACK_IMPORTED_MODULE_0__["arrayEqual"])(prop, it[0])
        : prop === it[0]
      );
  });
  if (i >= 0) {
    hook.splice(i, 1);
  }
}

function vmRelatedClear(relatedListeners) {
  if (!relatedListeners) return;
  relatedListeners.forEach((arr, component) => {
    arr.forEach(hook => {
      component[VM_ATTRS][VM_OFF](hook[0], hook[1]);
    });
    arr.length = 0;
  });
  relatedListeners.clear();
}

class RelatedListenersStore {
  constructor() {
    /**
     * VM_ON/VM_OFF 绑定属性监听接受三个参数，其中第三个参数为关联组件。
     *   当关联组件被销毁时，可以同时销毁保存在其 VM_RELATED_LISTENERS 中的父亲 ViewModel 的
     *   属性监听函数（参看 ../core/component.js 里 VM_RELATED_LISTENERS 的注释）。
     *
     * 在多语言国际化方案中，当 attrs 渲染函数代码被提取到独立的多语言资源文件后，除了关联组件被销毁时需要销毁父 ViewModel 的属性监听，
     *   当 locale 发生变化时，这些监听函数也要销毁。为了实现这个目标，采用了一个取巧的思路，传递一个模拟的关联组件，
     *   即 RelatedListenersStore 来存储 VM_RELATED_LISTENERS。
     *
     * 以下的 VM_RELATED_LISTENERS 和 VM_ATTRS 的定义就是为了实现该模拟，使得
     *   VM_ON/VM_OFF 函数可以正常执行关联组件的逻辑。
     */
    this[VM_RELATED_LISTENERS] = null;
    this[VM_ATTRS] = {
      [VM_HOST]: this
    };
  }

  // destroy
  d() {
    vmRelatedClear(this[VM_RELATED_LISTENERS]);
    this[VM_RELATED_LISTENERS] = null;
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
  if (!vmAttrs[VM_NOTIFIABLE]) {
    return;
  }
  if (!prop) {
    loopClearNode(vmAttrs);
  } else {
    vmAttrs[VM_OFF](prop, handler);
  }
}


/***/ }),

/***/ "../../jinge-framework/vm/index.js":
/*!*********************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/vm/index.js ***!
  \*********************************************************/
/*! exports provided: core, proxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "../../jinge-framework/vm/core.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "core", function() { return _core__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./proxy */ "../../jinge-framework/vm/proxy.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "proxy", function() { return _proxy__WEBPACK_IMPORTED_MODULE_1__; });






/***/ }),

/***/ "../../jinge-framework/vm/proxy.js":
/*!*********************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/vm/proxy.js ***!
  \*********************************************************/
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
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "../../jinge-framework/vm/core.js");



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
  const map = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getOrCreateMapProperty"])(obj, VM_SETTER_FN_MAP);
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
  const newValIsVM = Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value) && !Object(_core__WEBPACK_IMPORTED_MODULE_1__["isInnerObj"])(value);
  if (newValIsVM && !(_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"] in value)) {
    throw new Error(`public property "${prop}" of ViewModel must also be ViewModel`);
  }
  // console.log(`'${prop}' changed from ${store[prop]} to ${value}`);
  if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(oldVal)) {
    const a = oldVal[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]];
    a && a[_core__WEBPACK_IMPORTED_MODULE_1__["REMOVE_PARENT"]](target, prop);
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
  const setterFn = getSetterFnIfPropIsSetter(target, prop);
  if (setterFn) {
    setterFn.call(target[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["VM_PROXY"]], value);
  } else {
    target[prop] = value;
  }
}

function objectPropSetHandler(target, prop, value) {
  if (!target[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]]) {
    // ViewModel has been destroied.
    return true;
  }
  return __propSetHandler(target, prop, value, __objectPropSetFn);
}

function componentPropSetHandler(target, prop, value) {
  if (!target[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]]) {
    console.warn(`call setter "${prop.toString()}" after destroied, resources such as setInterval maybe not released before destroy. component:`, target);
    return true;
  }
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
  return target[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["VM_PROXY"]];
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
  return target[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["VM_PROXY"]];
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
  vmAttrs[_core__WEBPACK_IMPORTED_MODULE_1__["VM_PROXY"]] = p;
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
  // 初始化时 Component 默认的 VM_NOTIFIABLE 为 false，
  // 待 RENDER 结束后才修改为 true，用于避免无谓的消息通知。
  vmAttrs[_core__WEBPACK_IMPORTED_MODULE_1__["VM_NOTIFIABLE"]] = false;
  component[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]] = vmAttrs;
  const p = new Proxy(component, ComponentProxyHandler);
  vmAttrs[_core__WEBPACK_IMPORTED_MODULE_1__["VM_PROXY"]] = p;
  return p;
}

function wrapAttrs(attrsObj) {
  if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(attrsObj)) {
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["assertFail"])();
  }
  for (const k in attrsObj) {
    if (Object(_core__WEBPACK_IMPORTED_MODULE_1__["isPublicProp"])(k)) {
      const v = attrsObj[k];
      if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(v) && !Object(_core__WEBPACK_IMPORTED_MODULE_1__["isInnerObj"])(v) && !(_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"] in v)) {
        throw new Error(`value passed to attribute "${k}" must be ViewModel.`);
      }
    }
  }
  const attrs = wrapProxy(attrsObj, false);
  // 初始化时 Component 默认的 VM_NOTIFIABLE 为 false，
  // 待 RENDER 结束后才修改为 true，用于避免无谓的消息通知。
  attrs[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["VM_NOTIFIABLE"]] = false;
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
/* harmony import */ var jinge_vm_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge/vm/core */ "../../jinge-framework/vm/core.js");
/* harmony import */ var jinge_vm_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge/vm/proxy */ "../../jinge-framework/vm/proxy.js");
/* harmony import */ var jinge_core_messenger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jinge/core/messenger */ "../../jinge-framework/core/messenger.js");
/* harmony import */ var jinge_core_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jinge/core/i18n */ "../../jinge-framework/core/i18n.js");
/* harmony import */ var jinge_core_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jinge/core/style */ "../../jinge-framework/core/style.js");
/* harmony import */ var jinge_core_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jinge/core/component */ "../../jinge-framework/core/component.js");
/* harmony import */ var jinge_core_render_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jinge/core/render-fns */ "../../jinge-framework/core/render-fns.js");
/* harmony import */ var jinge_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jinge/util */ "../../jinge-framework/util/index.js");
/* harmony import */ var jinge_util_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jinge/util/dom */ "../../jinge-framework/util/dom.js");
/* harmony import */ var jinge_components_parameter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jinge/components/parameter */ "../../jinge-framework/components/parameter.js");
/* harmony import */ var jinge_components_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jinge/components/i18n */ "../../jinge-framework/components/i18n.js");
/* harmony import */ var jinge_util_const__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jinge/util/const */ "../../jinge-framework/util/const.js");
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! jinge */ "../../jinge-framework/index.js");
/* harmony import */ var _boy__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./boy */ "./boy.js");














/* harmony default export */ __webpack_exports__["default"] = (function(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = Object(jinge_util_dom__WEBPACK_IMPORTED_MODULE_8__["createElement"])(
      "h2",
      component[jinge_core_style__WEBPACK_IMPORTED_MODULE_4__["CSTYLE_PID"]],
      "Lifecycle demo"
    );
    component[jinge_core_component__WEBPACK_IMPORTED_MODULE_5__["ROOT_NODES"]].push(el);
    return el;
  })(),
  (() => {
    const el = Object(jinge_util_dom__WEBPACK_IMPORTED_MODULE_8__["createElement"])(
      "p",
      component[jinge_core_style__WEBPACK_IMPORTED_MODULE_4__["CSTYLE_PID"]],
      "\n  Each component have two lifecycle hooks,\n  afterRender and beforeDestroy.\n"
    );
    component[jinge_core_component__WEBPACK_IMPORTED_MODULE_5__["ROOT_NODES"]].push(el);
    return el;
  })(),
  (() => {
    const el = Object(jinge_util_dom__WEBPACK_IMPORTED_MODULE_8__["createElement"])(
      "p",
      component[jinge_core_style__WEBPACK_IMPORTED_MODULE_4__["CSTYLE_PID"]],
      ...(() => {
        const attrs = Object(jinge_vm_proxy__WEBPACK_IMPORTED_MODULE_1__["wrapAttrs"])({
          [jinge_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_DEBUG_NAME"]]: "attrs_of_<if>",
          [jinge_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]]: null,
          [jinge_core_component__WEBPACK_IMPORTED_MODULE_5__["CONTEXT"]]: component[jinge_core_component__WEBPACK_IMPORTED_MODULE_5__["CONTEXT"]],
          expect: null,
          [jinge_core_component__WEBPACK_IMPORTED_MODULE_5__["ARG_COMPONENTS"]]: {
            [jinge_util__WEBPACK_IMPORTED_MODULE_7__["STR_DEFAULT"]]: function(component) {
              return [
              ...(() => {
                const attrs = Object(jinge_vm_proxy__WEBPACK_IMPORTED_MODULE_1__["wrapAttrs"])({
                  [jinge_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_DEBUG_NAME"]]: "attrs_of_<Boy>",
                  [jinge_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]]: null,
                  [jinge_core_component__WEBPACK_IMPORTED_MODULE_5__["CONTEXT"]]: component[jinge_core_component__WEBPACK_IMPORTED_MODULE_5__["CONTEXT"]],
                  [jinge_core_messenger__WEBPACK_IMPORTED_MODULE_2__["LISTENERS"]]: {
                    someApiCalled: [function(...args) {vm_0.onBoyApiCalled(...args)}, null]
                  },
                  name: null
                });
                const fn_0 = () => {
                  attrs.name = vm_0.name + '_' + vm_0.inc;
                };
                fn_0();
                vm_0[jinge_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][jinge_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]](["name"], fn_0, component);
                vm_0[jinge_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][jinge_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]](["inc"], fn_0, component);
                const el = new _boy__WEBPACK_IMPORTED_MODULE_13__["default"](attrs);
                Object(jinge_core_style__WEBPACK_IMPORTED_MODULE_4__["addParentStyleId"])(el, component[jinge_core_style__WEBPACK_IMPORTED_MODULE_4__["CSTYLE_PID"]]);
                vm_0[jinge_core_component__WEBPACK_IMPORTED_MODULE_5__["SET_REF_NODE"]]('boy', el, component)
                component[jinge_core_component__WEBPACK_IMPORTED_MODULE_5__["ROOT_NODES"]].push(el);
                return Object(jinge_core_component__WEBPACK_IMPORTED_MODULE_5__["assertRenderResults"])(el[jinge_core_component__WEBPACK_IMPORTED_MODULE_5__["RENDER"]](component));
              })()
              ];
            }
          }
        });
        const fn_0 = () => {
          attrs.expect = vm_0.showBoy;
        };
        fn_0();
        vm_0[jinge_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][jinge_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]](["showBoy"], fn_0, component);
        const el = new jinge__WEBPACK_IMPORTED_MODULE_12__["IfComponent"](attrs);
        component[jinge_core_component__WEBPACK_IMPORTED_MODULE_5__["NON_ROOT_COMPONENT_NODES"]].push(el);
        return Object(jinge_core_component__WEBPACK_IMPORTED_MODULE_5__["assertRenderResults"])(el[jinge_core_component__WEBPACK_IMPORTED_MODULE_5__["RENDER"]](component));
      })()
    );
    component[jinge_core_component__WEBPACK_IMPORTED_MODULE_5__["ROOT_NODES"]].push(el);
    return el;
  })(),
  (() => {
    const el = Object(jinge_util_dom__WEBPACK_IMPORTED_MODULE_8__["createElement"])(
      "p",
      component[jinge_core_style__WEBPACK_IMPORTED_MODULE_4__["CSTYLE_PID"]],
      (() => {
        const el = Object(jinge_util_dom__WEBPACK_IMPORTED_MODULE_8__["createElementWithoutAttrs"])(
          "button",
          (() => {
            const el = Object(jinge_util_dom__WEBPACK_IMPORTED_MODULE_8__["createTextNode"])();
            const fn_0 = () => {
              Object(jinge_util_dom__WEBPACK_IMPORTED_MODULE_8__["setText"])(el, vm_0.showBoy ? 'Hide' : 'Show');
            };
            fn_0();
            vm_0[jinge_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][jinge_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]](["showBoy"], fn_0, component);
            return el;
          })(),
          " Boy"
        );
        Object(jinge_util_dom__WEBPACK_IMPORTED_MODULE_8__["addEvent"])(el, 'click', function(...args) {vm_0.showBoy = !vm_0.showBoy;vm_0.inc++;vm_0.log(args[0], vm_0.inc)})
        return el;
      })(),
      ...(() => {
        const attrs = Object(jinge_vm_proxy__WEBPACK_IMPORTED_MODULE_1__["wrapAttrs"])({
          [jinge_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_DEBUG_NAME"]]: "attrs_of_<if>",
          [jinge_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]]: null,
          [jinge_core_component__WEBPACK_IMPORTED_MODULE_5__["CONTEXT"]]: component[jinge_core_component__WEBPACK_IMPORTED_MODULE_5__["CONTEXT"]],
          expect: null,
          [jinge_core_component__WEBPACK_IMPORTED_MODULE_5__["ARG_COMPONENTS"]]: {
            [jinge_util__WEBPACK_IMPORTED_MODULE_7__["STR_DEFAULT"]]: function(component) {
              return [
              (() => {
                const el = Object(jinge_util_dom__WEBPACK_IMPORTED_MODULE_8__["createElement"])(
                  "button",
                  component[jinge_core_style__WEBPACK_IMPORTED_MODULE_4__["CSTYLE_PID"]],
                  "Call Api"
                );
                Object(jinge_util_dom__WEBPACK_IMPORTED_MODULE_8__["addEvent"])(el, 'click', function(...args) {vm_0.callApi(...args)})
                component[jinge_core_component__WEBPACK_IMPORTED_MODULE_5__["ROOT_NODES"]].push(el);
                return el;
              })()
              ];
            }
          }
        });
        const fn_0 = () => {
          attrs.expect = vm_0.showBoy;
        };
        fn_0();
        vm_0[jinge_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][jinge_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]](["showBoy"], fn_0, component);
        const el = new jinge__WEBPACK_IMPORTED_MODULE_12__["IfComponent"](attrs);
        component[jinge_core_component__WEBPACK_IMPORTED_MODULE_5__["NON_ROOT_COMPONENT_NODES"]].push(el);
        return Object(jinge_core_component__WEBPACK_IMPORTED_MODULE_5__["assertRenderResults"])(el[jinge_core_component__WEBPACK_IMPORTED_MODULE_5__["RENDER"]](component));
      })()
    );
    component[jinge_core_component__WEBPACK_IMPORTED_MODULE_5__["ROOT_NODES"]].push(el);
    return el;
  })()
  ];
});

/***/ }),

/***/ "./boy.html":
/*!******************!*\
  !*** ./boy.html ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jinge_vm_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge/vm/core */ "../../jinge-framework/vm/core.js");
/* harmony import */ var jinge_vm_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge/vm/proxy */ "../../jinge-framework/vm/proxy.js");
/* harmony import */ var jinge_core_messenger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jinge/core/messenger */ "../../jinge-framework/core/messenger.js");
/* harmony import */ var jinge_core_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jinge/core/i18n */ "../../jinge-framework/core/i18n.js");
/* harmony import */ var jinge_core_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jinge/core/style */ "../../jinge-framework/core/style.js");
/* harmony import */ var jinge_core_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jinge/core/component */ "../../jinge-framework/core/component.js");
/* harmony import */ var jinge_core_render_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jinge/core/render-fns */ "../../jinge-framework/core/render-fns.js");
/* harmony import */ var jinge_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jinge/util */ "../../jinge-framework/util/index.js");
/* harmony import */ var jinge_util_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jinge/util/dom */ "../../jinge-framework/util/dom.js");
/* harmony import */ var jinge_components_parameter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jinge/components/parameter */ "../../jinge-framework/components/parameter.js");
/* harmony import */ var jinge_components_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jinge/components/i18n */ "../../jinge-framework/components/i18n.js");
/* harmony import */ var jinge_util_const__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jinge/util/const */ "../../jinge-framework/util/const.js");














/* harmony default export */ __webpack_exports__["default"] = (function(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = Object(jinge_util_dom__WEBPACK_IMPORTED_MODULE_8__["createElement"])(
      "span",
      component[jinge_core_style__WEBPACK_IMPORTED_MODULE_4__["CSTYLE_PID"]],
      "\n  Hello, Everyone!\n  My name is ",
      (() => {
        const el = Object(jinge_util_dom__WEBPACK_IMPORTED_MODULE_8__["createTextNode"])();
        const fn_0 = () => {
          Object(jinge_util_dom__WEBPACK_IMPORTED_MODULE_8__["setText"])(el, vm_0.name);
        };
        fn_0();
        vm_0[jinge_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][jinge_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]](["name"], fn_0, component);
        return el;
      })(),
      "!\n"
    );
    vm_0[jinge_core_component__WEBPACK_IMPORTED_MODULE_5__["SET_REF_NODE"]]('someId', el, component)
    component[jinge_core_component__WEBPACK_IMPORTED_MODULE_5__["ROOT_NODES"]].push(el);
    return el;
  })()
  ];
});

/***/ }),

/***/ "./boy.js":
/*!****************!*\
  !*** ./boy.js ***!
  \****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Boy; });
/* harmony import */ var jinge_vm_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge/vm/core */ "../../jinge-framework/vm/core.js");
/* harmony import */ var jinge_vm_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge/vm/proxy */ "../../jinge-framework/vm/proxy.js");
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jinge */ "../../jinge-framework/index.js");
/* harmony import */ var _boy_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./boy.html */ "./boy.html");








class Boy extends jinge__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  static get template() {
    return _boy_html__WEBPACK_IMPORTED_MODULE_3__["default"];
  }
  constructor(attrs) {
    const vm_3a7572e857 = super(attrs);
    const fn_3a7572e857_1 = () => {
      vm_3a7572e857.name = attrs.name;
    };
    fn_3a7572e857_1();
    attrs[jinge_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][jinge_vm_core__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]]('name', fn_3a7572e857_1);
    return vm_3a7572e857;
  }
  someApi() {
    alert(`Hello, everyone. My name is ${this.name}`);
    this[jinge__WEBPACK_IMPORTED_MODULE_2__["NOTIFY"]]('someApiCalled', this.name);
  }
  [jinge__WEBPACK_IMPORTED_MODULE_2__["AFTER_RENDER"]]() {
    console.log('after render');
    /**
     * you can use this.getChild to get DOM node.
     */
    console.log(this[jinge__WEBPACK_IMPORTED_MODULE_2__["GET_REF"]]('someId'));
  }
  [jinge__WEBPACK_IMPORTED_MODULE_2__["BEFORE_DESTROY"]]() {
    console.log('before destroy');
  }
}

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jinge_vm_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge/vm/core */ "../../jinge-framework/vm/core.js");
/* harmony import */ var jinge_vm_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge/vm/proxy */ "../../jinge-framework/vm/proxy.js");
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jinge */ "../../jinge-framework/index.js");
/* harmony import */ var _app_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.html */ "./app.html");








class App extends jinge__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  static get template() {
    return _app_html__WEBPACK_IMPORTED_MODULE_3__["default"];
  }
  constructor(args) {
    const vm_3a7572e857 = super(args);
    vm_3a7572e857.showBoy = true;
    vm_3a7572e857.inc = 0;
    vm_3a7572e857.name = 'Jinge';
    return vm_3a7572e857;
  }
  [jinge__WEBPACK_IMPORTED_MODULE_2__["AFTER_RENDER"]]() {
    /**
     * if Component node have ref: attribute,
     * the component instance can be directly got by this.getChild.
     * After got component instance, it's api can be directly called.
     */
    this.callApi();
  }
  log(...args) {
    console.log(...args);
  }
  callApi($evt) {
    console.log($evt);
    const boy = this[jinge__WEBPACK_IMPORTED_MODULE_2__["GET_REF"]]('boy');
    boy.someApi();
  }
  onBoyApiCalled(name) {
    console.log('boy', name, 'send message: someApiCalled');
  }
}

Object(jinge__WEBPACK_IMPORTED_MODULE_2__["bootstrap"])(App, document.getElementById('root-app'));


/***/ }),

/***/ "./node_modules/ansi-html/index.js":
/*!*****************************************!*\
  !*** ./node_modules/ansi-html/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = ansiHTML

// Reference to https://github.com/sindresorhus/ansi-regex
var _regANSI = /(?:(?:\u001b\[)|\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\u001b[A-M]/

var _defColors = {
  reset: ['fff', '000'], // [FOREGROUD_COLOR, BACKGROUND_COLOR]
  black: '000',
  red: 'ff0000',
  green: '209805',
  yellow: 'e8bf03',
  blue: '0000ff',
  magenta: 'ff00ff',
  cyan: '00ffee',
  lightgrey: 'f0f0f0',
  darkgrey: '888'
}
var _styles = {
  30: 'black',
  31: 'red',
  32: 'green',
  33: 'yellow',
  34: 'blue',
  35: 'magenta',
  36: 'cyan',
  37: 'lightgrey'
}
var _openTags = {
  '1': 'font-weight:bold', // bold
  '2': 'opacity:0.5', // dim
  '3': '<i>', // italic
  '4': '<u>', // underscore
  '8': 'display:none', // hidden
  '9': '<del>' // delete
}
var _closeTags = {
  '23': '</i>', // reset italic
  '24': '</u>', // reset underscore
  '29': '</del>' // reset delete
}

;[0, 21, 22, 27, 28, 39, 49].forEach(function (n) {
  _closeTags[n] = '</span>'
})

/**
 * Converts text with ANSI color codes to HTML markup.
 * @param {String} text
 * @returns {*}
 */
function ansiHTML (text) {
  // Returns the text if the string has no ANSI escape code.
  if (!_regANSI.test(text)) {
    return text
  }

  // Cache opened sequence.
  var ansiCodes = []
  // Replace with markup.
  var ret = text.replace(/\033\[(\d+)*m/g, function (match, seq) {
    var ot = _openTags[seq]
    if (ot) {
      // If current sequence has been opened, close it.
      if (!!~ansiCodes.indexOf(seq)) { // eslint-disable-line no-extra-boolean-cast
        ansiCodes.pop()
        return '</span>'
      }
      // Open tag.
      ansiCodes.push(seq)
      return ot[0] === '<' ? ot : '<span style="' + ot + ';">'
    }

    var ct = _closeTags[seq]
    if (ct) {
      // Pop sequence
      ansiCodes.pop()
      return ct
    }
    return ''
  })

  // Make sure tags are closed.
  var l = ansiCodes.length
  ;(l > 0) && (ret += Array(l + 1).join('</span>'))

  return ret
}

/**
 * Customize colors.
 * @param {Object} colors reference to _defColors
 */
ansiHTML.setColors = function (colors) {
  if (typeof colors !== 'object') {
    throw new Error('`colors` parameter must be an Object.')
  }

  var _finalColors = {}
  for (var key in _defColors) {
    var hex = colors.hasOwnProperty(key) ? colors[key] : null
    if (!hex) {
      _finalColors[key] = _defColors[key]
      continue
    }
    if ('reset' === key) {
      if (typeof hex === 'string') {
        hex = [hex]
      }
      if (!Array.isArray(hex) || hex.length === 0 || hex.some(function (h) {
        return typeof h !== 'string'
      })) {
        throw new Error('The value of `' + key + '` property must be an Array and each item could only be a hex string, e.g.: FF0000')
      }
      var defHexColor = _defColors[key]
      if (!hex[0]) {
        hex[0] = defHexColor[0]
      }
      if (hex.length === 1 || !hex[1]) {
        hex = [hex[0]]
        hex.push(defHexColor[1])
      }

      hex = hex.slice(0, 2)
    } else if (typeof hex !== 'string') {
      throw new Error('The value of `' + key + '` property must be a hex string, e.g.: FF0000')
    }
    _finalColors[key] = hex
  }
  _setTags(_finalColors)
}

/**
 * Reset colors.
 */
ansiHTML.reset = function () {
  _setTags(_defColors)
}

/**
 * Expose tags, including open and close.
 * @type {Object}
 */
ansiHTML.tags = {}

if (Object.defineProperty) {
  Object.defineProperty(ansiHTML.tags, 'open', {
    get: function () { return _openTags }
  })
  Object.defineProperty(ansiHTML.tags, 'close', {
    get: function () { return _closeTags }
  })
} else {
  ansiHTML.tags.open = _openTags
  ansiHTML.tags.close = _closeTags
}

function _setTags (colors) {
  // reset all
  _openTags['0'] = 'font-weight:normal;opacity:1;color:#' + colors.reset[0] + ';background:#' + colors.reset[1]
  // inverse
  _openTags['7'] = 'color:#' + colors.reset[1] + ';background:#' + colors.reset[0]
  // dark grey
  _openTags['90'] = 'color:#' + colors.darkgrey

  for (var code in _styles) {
    var color = _styles[code]
    var oriColor = colors[color] || '000'
    _openTags[code] = 'color:#' + oriColor
    code = parseInt(code)
    _openTags[(code + 10).toString()] = 'background:#' + oriColor
  }
}

ansiHTML.reset()


/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = $getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  var args = [];
  for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    ReflectApply(this.listener, this.target, args);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


/***/ }),

/***/ "./node_modules/html-entities/index.js":
/*!*********************************************!*\
  !*** ./node_modules/html-entities/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  XmlEntities: __webpack_require__(/*! ./lib/xml-entities.js */ "./node_modules/html-entities/lib/xml-entities.js"),
  Html4Entities: __webpack_require__(/*! ./lib/html4-entities.js */ "./node_modules/html-entities/lib/html4-entities.js"),
  Html5Entities: __webpack_require__(/*! ./lib/html5-entities.js */ "./node_modules/html-entities/lib/html5-entities.js"),
  AllHtmlEntities: __webpack_require__(/*! ./lib/html5-entities.js */ "./node_modules/html-entities/lib/html5-entities.js")
};


/***/ }),

/***/ "./node_modules/html-entities/lib/html4-entities.js":
/*!**********************************************************!*\
  !*** ./node_modules/html-entities/lib/html4-entities.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var HTML_ALPHA = ['apos', 'nbsp', 'iexcl', 'cent', 'pound', 'curren', 'yen', 'brvbar', 'sect', 'uml', 'copy', 'ordf', 'laquo', 'not', 'shy', 'reg', 'macr', 'deg', 'plusmn', 'sup2', 'sup3', 'acute', 'micro', 'para', 'middot', 'cedil', 'sup1', 'ordm', 'raquo', 'frac14', 'frac12', 'frac34', 'iquest', 'Agrave', 'Aacute', 'Acirc', 'Atilde', 'Auml', 'Aring', 'Aelig', 'Ccedil', 'Egrave', 'Eacute', 'Ecirc', 'Euml', 'Igrave', 'Iacute', 'Icirc', 'Iuml', 'ETH', 'Ntilde', 'Ograve', 'Oacute', 'Ocirc', 'Otilde', 'Ouml', 'times', 'Oslash', 'Ugrave', 'Uacute', 'Ucirc', 'Uuml', 'Yacute', 'THORN', 'szlig', 'agrave', 'aacute', 'acirc', 'atilde', 'auml', 'aring', 'aelig', 'ccedil', 'egrave', 'eacute', 'ecirc', 'euml', 'igrave', 'iacute', 'icirc', 'iuml', 'eth', 'ntilde', 'ograve', 'oacute', 'ocirc', 'otilde', 'ouml', 'divide', 'oslash', 'ugrave', 'uacute', 'ucirc', 'uuml', 'yacute', 'thorn', 'yuml', 'quot', 'amp', 'lt', 'gt', 'OElig', 'oelig', 'Scaron', 'scaron', 'Yuml', 'circ', 'tilde', 'ensp', 'emsp', 'thinsp', 'zwnj', 'zwj', 'lrm', 'rlm', 'ndash', 'mdash', 'lsquo', 'rsquo', 'sbquo', 'ldquo', 'rdquo', 'bdquo', 'dagger', 'Dagger', 'permil', 'lsaquo', 'rsaquo', 'euro', 'fnof', 'Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta', 'Eta', 'Theta', 'Iota', 'Kappa', 'Lambda', 'Mu', 'Nu', 'Xi', 'Omicron', 'Pi', 'Rho', 'Sigma', 'Tau', 'Upsilon', 'Phi', 'Chi', 'Psi', 'Omega', 'alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta', 'eta', 'theta', 'iota', 'kappa', 'lambda', 'mu', 'nu', 'xi', 'omicron', 'pi', 'rho', 'sigmaf', 'sigma', 'tau', 'upsilon', 'phi', 'chi', 'psi', 'omega', 'thetasym', 'upsih', 'piv', 'bull', 'hellip', 'prime', 'Prime', 'oline', 'frasl', 'weierp', 'image', 'real', 'trade', 'alefsym', 'larr', 'uarr', 'rarr', 'darr', 'harr', 'crarr', 'lArr', 'uArr', 'rArr', 'dArr', 'hArr', 'forall', 'part', 'exist', 'empty', 'nabla', 'isin', 'notin', 'ni', 'prod', 'sum', 'minus', 'lowast', 'radic', 'prop', 'infin', 'ang', 'and', 'or', 'cap', 'cup', 'int', 'there4', 'sim', 'cong', 'asymp', 'ne', 'equiv', 'le', 'ge', 'sub', 'sup', 'nsub', 'sube', 'supe', 'oplus', 'otimes', 'perp', 'sdot', 'lceil', 'rceil', 'lfloor', 'rfloor', 'lang', 'rang', 'loz', 'spades', 'clubs', 'hearts', 'diams'];
var HTML_CODES = [39, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 34, 38, 60, 62, 338, 339, 352, 353, 376, 710, 732, 8194, 8195, 8201, 8204, 8205, 8206, 8207, 8211, 8212, 8216, 8217, 8218, 8220, 8221, 8222, 8224, 8225, 8240, 8249, 8250, 8364, 402, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 931, 932, 933, 934, 935, 936, 937, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 977, 978, 982, 8226, 8230, 8242, 8243, 8254, 8260, 8472, 8465, 8476, 8482, 8501, 8592, 8593, 8594, 8595, 8596, 8629, 8656, 8657, 8658, 8659, 8660, 8704, 8706, 8707, 8709, 8711, 8712, 8713, 8715, 8719, 8721, 8722, 8727, 8730, 8733, 8734, 8736, 8743, 8744, 8745, 8746, 8747, 8756, 8764, 8773, 8776, 8800, 8801, 8804, 8805, 8834, 8835, 8836, 8838, 8839, 8853, 8855, 8869, 8901, 8968, 8969, 8970, 8971, 9001, 9002, 9674, 9824, 9827, 9829, 9830];

var alphaIndex = {};
var numIndex = {};

var i = 0;
var length = HTML_ALPHA.length;
while (i < length) {
    var a = HTML_ALPHA[i];
    var c = HTML_CODES[i];
    alphaIndex[a] = String.fromCharCode(c);
    numIndex[c] = a;
    i++;
}

/**
 * @constructor
 */
function Html4Entities() {}

/**
 * @param {String} str
 * @returns {String}
 */
Html4Entities.prototype.decode = function(str) {
    if (!str || !str.length) {
        return '';
    }
    return str.replace(/&(#?[\w\d]+);?/g, function(s, entity) {
        var chr;
        if (entity.charAt(0) === "#") {
            var code = entity.charAt(1).toLowerCase() === 'x' ?
                parseInt(entity.substr(2), 16) :
                parseInt(entity.substr(1));

            if (!(isNaN(code) || code < -32768 || code > 65535)) {
                chr = String.fromCharCode(code);
            }
        } else {
            chr = alphaIndex[entity];
        }
        return chr || s;
    });
};

/**
 * @param {String} str
 * @returns {String}
 */
Html4Entities.decode = function(str) {
    return new Html4Entities().decode(str);
};

/**
 * @param {String} str
 * @returns {String}
 */
Html4Entities.prototype.encode = function(str) {
    if (!str || !str.length) {
        return '';
    }
    var strLength = str.length;
    var result = '';
    var i = 0;
    while (i < strLength) {
        var alpha = numIndex[str.charCodeAt(i)];
        result += alpha ? "&" + alpha + ";" : str.charAt(i);
        i++;
    }
    return result;
};

/**
 * @param {String} str
 * @returns {String}
 */
Html4Entities.encode = function(str) {
    return new Html4Entities().encode(str);
};

/**
 * @param {String} str
 * @returns {String}
 */
Html4Entities.prototype.encodeNonUTF = function(str) {
    if (!str || !str.length) {
        return '';
    }
    var strLength = str.length;
    var result = '';
    var i = 0;
    while (i < strLength) {
        var cc = str.charCodeAt(i);
        var alpha = numIndex[cc];
        if (alpha) {
            result += "&" + alpha + ";";
        } else if (cc < 32 || cc > 126) {
            result += "&#" + cc + ";";
        } else {
            result += str.charAt(i);
        }
        i++;
    }
    return result;
};

/**
 * @param {String} str
 * @returns {String}
 */
Html4Entities.encodeNonUTF = function(str) {
    return new Html4Entities().encodeNonUTF(str);
};

/**
 * @param {String} str
 * @returns {String}
 */
Html4Entities.prototype.encodeNonASCII = function(str) {
    if (!str || !str.length) {
        return '';
    }
    var strLength = str.length;
    var result = '';
    var i = 0;
    while (i < strLength) {
        var c = str.charCodeAt(i);
        if (c <= 255) {
            result += str[i++];
            continue;
        }
        result += '&#' + c + ';';
        i++;
    }
    return result;
};

/**
 * @param {String} str
 * @returns {String}
 */
Html4Entities.encodeNonASCII = function(str) {
    return new Html4Entities().encodeNonASCII(str);
};

module.exports = Html4Entities;


/***/ }),

/***/ "./node_modules/html-entities/lib/html5-entities.js":
/*!**********************************************************!*\
  !*** ./node_modules/html-entities/lib/html5-entities.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ENTITIES = [['Aacute', [193]], ['aacute', [225]], ['Abreve', [258]], ['abreve', [259]], ['ac', [8766]], ['acd', [8767]], ['acE', [8766, 819]], ['Acirc', [194]], ['acirc', [226]], ['acute', [180]], ['Acy', [1040]], ['acy', [1072]], ['AElig', [198]], ['aelig', [230]], ['af', [8289]], ['Afr', [120068]], ['afr', [120094]], ['Agrave', [192]], ['agrave', [224]], ['alefsym', [8501]], ['aleph', [8501]], ['Alpha', [913]], ['alpha', [945]], ['Amacr', [256]], ['amacr', [257]], ['amalg', [10815]], ['amp', [38]], ['AMP', [38]], ['andand', [10837]], ['And', [10835]], ['and', [8743]], ['andd', [10844]], ['andslope', [10840]], ['andv', [10842]], ['ang', [8736]], ['ange', [10660]], ['angle', [8736]], ['angmsdaa', [10664]], ['angmsdab', [10665]], ['angmsdac', [10666]], ['angmsdad', [10667]], ['angmsdae', [10668]], ['angmsdaf', [10669]], ['angmsdag', [10670]], ['angmsdah', [10671]], ['angmsd', [8737]], ['angrt', [8735]], ['angrtvb', [8894]], ['angrtvbd', [10653]], ['angsph', [8738]], ['angst', [197]], ['angzarr', [9084]], ['Aogon', [260]], ['aogon', [261]], ['Aopf', [120120]], ['aopf', [120146]], ['apacir', [10863]], ['ap', [8776]], ['apE', [10864]], ['ape', [8778]], ['apid', [8779]], ['apos', [39]], ['ApplyFunction', [8289]], ['approx', [8776]], ['approxeq', [8778]], ['Aring', [197]], ['aring', [229]], ['Ascr', [119964]], ['ascr', [119990]], ['Assign', [8788]], ['ast', [42]], ['asymp', [8776]], ['asympeq', [8781]], ['Atilde', [195]], ['atilde', [227]], ['Auml', [196]], ['auml', [228]], ['awconint', [8755]], ['awint', [10769]], ['backcong', [8780]], ['backepsilon', [1014]], ['backprime', [8245]], ['backsim', [8765]], ['backsimeq', [8909]], ['Backslash', [8726]], ['Barv', [10983]], ['barvee', [8893]], ['barwed', [8965]], ['Barwed', [8966]], ['barwedge', [8965]], ['bbrk', [9141]], ['bbrktbrk', [9142]], ['bcong', [8780]], ['Bcy', [1041]], ['bcy', [1073]], ['bdquo', [8222]], ['becaus', [8757]], ['because', [8757]], ['Because', [8757]], ['bemptyv', [10672]], ['bepsi', [1014]], ['bernou', [8492]], ['Bernoullis', [8492]], ['Beta', [914]], ['beta', [946]], ['beth', [8502]], ['between', [8812]], ['Bfr', [120069]], ['bfr', [120095]], ['bigcap', [8898]], ['bigcirc', [9711]], ['bigcup', [8899]], ['bigodot', [10752]], ['bigoplus', [10753]], ['bigotimes', [10754]], ['bigsqcup', [10758]], ['bigstar', [9733]], ['bigtriangledown', [9661]], ['bigtriangleup', [9651]], ['biguplus', [10756]], ['bigvee', [8897]], ['bigwedge', [8896]], ['bkarow', [10509]], ['blacklozenge', [10731]], ['blacksquare', [9642]], ['blacktriangle', [9652]], ['blacktriangledown', [9662]], ['blacktriangleleft', [9666]], ['blacktriangleright', [9656]], ['blank', [9251]], ['blk12', [9618]], ['blk14', [9617]], ['blk34', [9619]], ['block', [9608]], ['bne', [61, 8421]], ['bnequiv', [8801, 8421]], ['bNot', [10989]], ['bnot', [8976]], ['Bopf', [120121]], ['bopf', [120147]], ['bot', [8869]], ['bottom', [8869]], ['bowtie', [8904]], ['boxbox', [10697]], ['boxdl', [9488]], ['boxdL', [9557]], ['boxDl', [9558]], ['boxDL', [9559]], ['boxdr', [9484]], ['boxdR', [9554]], ['boxDr', [9555]], ['boxDR', [9556]], ['boxh', [9472]], ['boxH', [9552]], ['boxhd', [9516]], ['boxHd', [9572]], ['boxhD', [9573]], ['boxHD', [9574]], ['boxhu', [9524]], ['boxHu', [9575]], ['boxhU', [9576]], ['boxHU', [9577]], ['boxminus', [8863]], ['boxplus', [8862]], ['boxtimes', [8864]], ['boxul', [9496]], ['boxuL', [9563]], ['boxUl', [9564]], ['boxUL', [9565]], ['boxur', [9492]], ['boxuR', [9560]], ['boxUr', [9561]], ['boxUR', [9562]], ['boxv', [9474]], ['boxV', [9553]], ['boxvh', [9532]], ['boxvH', [9578]], ['boxVh', [9579]], ['boxVH', [9580]], ['boxvl', [9508]], ['boxvL', [9569]], ['boxVl', [9570]], ['boxVL', [9571]], ['boxvr', [9500]], ['boxvR', [9566]], ['boxVr', [9567]], ['boxVR', [9568]], ['bprime', [8245]], ['breve', [728]], ['Breve', [728]], ['brvbar', [166]], ['bscr', [119991]], ['Bscr', [8492]], ['bsemi', [8271]], ['bsim', [8765]], ['bsime', [8909]], ['bsolb', [10693]], ['bsol', [92]], ['bsolhsub', [10184]], ['bull', [8226]], ['bullet', [8226]], ['bump', [8782]], ['bumpE', [10926]], ['bumpe', [8783]], ['Bumpeq', [8782]], ['bumpeq', [8783]], ['Cacute', [262]], ['cacute', [263]], ['capand', [10820]], ['capbrcup', [10825]], ['capcap', [10827]], ['cap', [8745]], ['Cap', [8914]], ['capcup', [10823]], ['capdot', [10816]], ['CapitalDifferentialD', [8517]], ['caps', [8745, 65024]], ['caret', [8257]], ['caron', [711]], ['Cayleys', [8493]], ['ccaps', [10829]], ['Ccaron', [268]], ['ccaron', [269]], ['Ccedil', [199]], ['ccedil', [231]], ['Ccirc', [264]], ['ccirc', [265]], ['Cconint', [8752]], ['ccups', [10828]], ['ccupssm', [10832]], ['Cdot', [266]], ['cdot', [267]], ['cedil', [184]], ['Cedilla', [184]], ['cemptyv', [10674]], ['cent', [162]], ['centerdot', [183]], ['CenterDot', [183]], ['cfr', [120096]], ['Cfr', [8493]], ['CHcy', [1063]], ['chcy', [1095]], ['check', [10003]], ['checkmark', [10003]], ['Chi', [935]], ['chi', [967]], ['circ', [710]], ['circeq', [8791]], ['circlearrowleft', [8634]], ['circlearrowright', [8635]], ['circledast', [8859]], ['circledcirc', [8858]], ['circleddash', [8861]], ['CircleDot', [8857]], ['circledR', [174]], ['circledS', [9416]], ['CircleMinus', [8854]], ['CirclePlus', [8853]], ['CircleTimes', [8855]], ['cir', [9675]], ['cirE', [10691]], ['cire', [8791]], ['cirfnint', [10768]], ['cirmid', [10991]], ['cirscir', [10690]], ['ClockwiseContourIntegral', [8754]], ['clubs', [9827]], ['clubsuit', [9827]], ['colon', [58]], ['Colon', [8759]], ['Colone', [10868]], ['colone', [8788]], ['coloneq', [8788]], ['comma', [44]], ['commat', [64]], ['comp', [8705]], ['compfn', [8728]], ['complement', [8705]], ['complexes', [8450]], ['cong', [8773]], ['congdot', [10861]], ['Congruent', [8801]], ['conint', [8750]], ['Conint', [8751]], ['ContourIntegral', [8750]], ['copf', [120148]], ['Copf', [8450]], ['coprod', [8720]], ['Coproduct', [8720]], ['copy', [169]], ['COPY', [169]], ['copysr', [8471]], ['CounterClockwiseContourIntegral', [8755]], ['crarr', [8629]], ['cross', [10007]], ['Cross', [10799]], ['Cscr', [119966]], ['cscr', [119992]], ['csub', [10959]], ['csube', [10961]], ['csup', [10960]], ['csupe', [10962]], ['ctdot', [8943]], ['cudarrl', [10552]], ['cudarrr', [10549]], ['cuepr', [8926]], ['cuesc', [8927]], ['cularr', [8630]], ['cularrp', [10557]], ['cupbrcap', [10824]], ['cupcap', [10822]], ['CupCap', [8781]], ['cup', [8746]], ['Cup', [8915]], ['cupcup', [10826]], ['cupdot', [8845]], ['cupor', [10821]], ['cups', [8746, 65024]], ['curarr', [8631]], ['curarrm', [10556]], ['curlyeqprec', [8926]], ['curlyeqsucc', [8927]], ['curlyvee', [8910]], ['curlywedge', [8911]], ['curren', [164]], ['curvearrowleft', [8630]], ['curvearrowright', [8631]], ['cuvee', [8910]], ['cuwed', [8911]], ['cwconint', [8754]], ['cwint', [8753]], ['cylcty', [9005]], ['dagger', [8224]], ['Dagger', [8225]], ['daleth', [8504]], ['darr', [8595]], ['Darr', [8609]], ['dArr', [8659]], ['dash', [8208]], ['Dashv', [10980]], ['dashv', [8867]], ['dbkarow', [10511]], ['dblac', [733]], ['Dcaron', [270]], ['dcaron', [271]], ['Dcy', [1044]], ['dcy', [1076]], ['ddagger', [8225]], ['ddarr', [8650]], ['DD', [8517]], ['dd', [8518]], ['DDotrahd', [10513]], ['ddotseq', [10871]], ['deg', [176]], ['Del', [8711]], ['Delta', [916]], ['delta', [948]], ['demptyv', [10673]], ['dfisht', [10623]], ['Dfr', [120071]], ['dfr', [120097]], ['dHar', [10597]], ['dharl', [8643]], ['dharr', [8642]], ['DiacriticalAcute', [180]], ['DiacriticalDot', [729]], ['DiacriticalDoubleAcute', [733]], ['DiacriticalGrave', [96]], ['DiacriticalTilde', [732]], ['diam', [8900]], ['diamond', [8900]], ['Diamond', [8900]], ['diamondsuit', [9830]], ['diams', [9830]], ['die', [168]], ['DifferentialD', [8518]], ['digamma', [989]], ['disin', [8946]], ['div', [247]], ['divide', [247]], ['divideontimes', [8903]], ['divonx', [8903]], ['DJcy', [1026]], ['djcy', [1106]], ['dlcorn', [8990]], ['dlcrop', [8973]], ['dollar', [36]], ['Dopf', [120123]], ['dopf', [120149]], ['Dot', [168]], ['dot', [729]], ['DotDot', [8412]], ['doteq', [8784]], ['doteqdot', [8785]], ['DotEqual', [8784]], ['dotminus', [8760]], ['dotplus', [8724]], ['dotsquare', [8865]], ['doublebarwedge', [8966]], ['DoubleContourIntegral', [8751]], ['DoubleDot', [168]], ['DoubleDownArrow', [8659]], ['DoubleLeftArrow', [8656]], ['DoubleLeftRightArrow', [8660]], ['DoubleLeftTee', [10980]], ['DoubleLongLeftArrow', [10232]], ['DoubleLongLeftRightArrow', [10234]], ['DoubleLongRightArrow', [10233]], ['DoubleRightArrow', [8658]], ['DoubleRightTee', [8872]], ['DoubleUpArrow', [8657]], ['DoubleUpDownArrow', [8661]], ['DoubleVerticalBar', [8741]], ['DownArrowBar', [10515]], ['downarrow', [8595]], ['DownArrow', [8595]], ['Downarrow', [8659]], ['DownArrowUpArrow', [8693]], ['DownBreve', [785]], ['downdownarrows', [8650]], ['downharpoonleft', [8643]], ['downharpoonright', [8642]], ['DownLeftRightVector', [10576]], ['DownLeftTeeVector', [10590]], ['DownLeftVectorBar', [10582]], ['DownLeftVector', [8637]], ['DownRightTeeVector', [10591]], ['DownRightVectorBar', [10583]], ['DownRightVector', [8641]], ['DownTeeArrow', [8615]], ['DownTee', [8868]], ['drbkarow', [10512]], ['drcorn', [8991]], ['drcrop', [8972]], ['Dscr', [119967]], ['dscr', [119993]], ['DScy', [1029]], ['dscy', [1109]], ['dsol', [10742]], ['Dstrok', [272]], ['dstrok', [273]], ['dtdot', [8945]], ['dtri', [9663]], ['dtrif', [9662]], ['duarr', [8693]], ['duhar', [10607]], ['dwangle', [10662]], ['DZcy', [1039]], ['dzcy', [1119]], ['dzigrarr', [10239]], ['Eacute', [201]], ['eacute', [233]], ['easter', [10862]], ['Ecaron', [282]], ['ecaron', [283]], ['Ecirc', [202]], ['ecirc', [234]], ['ecir', [8790]], ['ecolon', [8789]], ['Ecy', [1069]], ['ecy', [1101]], ['eDDot', [10871]], ['Edot', [278]], ['edot', [279]], ['eDot', [8785]], ['ee', [8519]], ['efDot', [8786]], ['Efr', [120072]], ['efr', [120098]], ['eg', [10906]], ['Egrave', [200]], ['egrave', [232]], ['egs', [10902]], ['egsdot', [10904]], ['el', [10905]], ['Element', [8712]], ['elinters', [9191]], ['ell', [8467]], ['els', [10901]], ['elsdot', [10903]], ['Emacr', [274]], ['emacr', [275]], ['empty', [8709]], ['emptyset', [8709]], ['EmptySmallSquare', [9723]], ['emptyv', [8709]], ['EmptyVerySmallSquare', [9643]], ['emsp13', [8196]], ['emsp14', [8197]], ['emsp', [8195]], ['ENG', [330]], ['eng', [331]], ['ensp', [8194]], ['Eogon', [280]], ['eogon', [281]], ['Eopf', [120124]], ['eopf', [120150]], ['epar', [8917]], ['eparsl', [10723]], ['eplus', [10865]], ['epsi', [949]], ['Epsilon', [917]], ['epsilon', [949]], ['epsiv', [1013]], ['eqcirc', [8790]], ['eqcolon', [8789]], ['eqsim', [8770]], ['eqslantgtr', [10902]], ['eqslantless', [10901]], ['Equal', [10869]], ['equals', [61]], ['EqualTilde', [8770]], ['equest', [8799]], ['Equilibrium', [8652]], ['equiv', [8801]], ['equivDD', [10872]], ['eqvparsl', [10725]], ['erarr', [10609]], ['erDot', [8787]], ['escr', [8495]], ['Escr', [8496]], ['esdot', [8784]], ['Esim', [10867]], ['esim', [8770]], ['Eta', [919]], ['eta', [951]], ['ETH', [208]], ['eth', [240]], ['Euml', [203]], ['euml', [235]], ['euro', [8364]], ['excl', [33]], ['exist', [8707]], ['Exists', [8707]], ['expectation', [8496]], ['exponentiale', [8519]], ['ExponentialE', [8519]], ['fallingdotseq', [8786]], ['Fcy', [1060]], ['fcy', [1092]], ['female', [9792]], ['ffilig', [64259]], ['fflig', [64256]], ['ffllig', [64260]], ['Ffr', [120073]], ['ffr', [120099]], ['filig', [64257]], ['FilledSmallSquare', [9724]], ['FilledVerySmallSquare', [9642]], ['fjlig', [102, 106]], ['flat', [9837]], ['fllig', [64258]], ['fltns', [9649]], ['fnof', [402]], ['Fopf', [120125]], ['fopf', [120151]], ['forall', [8704]], ['ForAll', [8704]], ['fork', [8916]], ['forkv', [10969]], ['Fouriertrf', [8497]], ['fpartint', [10765]], ['frac12', [189]], ['frac13', [8531]], ['frac14', [188]], ['frac15', [8533]], ['frac16', [8537]], ['frac18', [8539]], ['frac23', [8532]], ['frac25', [8534]], ['frac34', [190]], ['frac35', [8535]], ['frac38', [8540]], ['frac45', [8536]], ['frac56', [8538]], ['frac58', [8541]], ['frac78', [8542]], ['frasl', [8260]], ['frown', [8994]], ['fscr', [119995]], ['Fscr', [8497]], ['gacute', [501]], ['Gamma', [915]], ['gamma', [947]], ['Gammad', [988]], ['gammad', [989]], ['gap', [10886]], ['Gbreve', [286]], ['gbreve', [287]], ['Gcedil', [290]], ['Gcirc', [284]], ['gcirc', [285]], ['Gcy', [1043]], ['gcy', [1075]], ['Gdot', [288]], ['gdot', [289]], ['ge', [8805]], ['gE', [8807]], ['gEl', [10892]], ['gel', [8923]], ['geq', [8805]], ['geqq', [8807]], ['geqslant', [10878]], ['gescc', [10921]], ['ges', [10878]], ['gesdot', [10880]], ['gesdoto', [10882]], ['gesdotol', [10884]], ['gesl', [8923, 65024]], ['gesles', [10900]], ['Gfr', [120074]], ['gfr', [120100]], ['gg', [8811]], ['Gg', [8921]], ['ggg', [8921]], ['gimel', [8503]], ['GJcy', [1027]], ['gjcy', [1107]], ['gla', [10917]], ['gl', [8823]], ['glE', [10898]], ['glj', [10916]], ['gnap', [10890]], ['gnapprox', [10890]], ['gne', [10888]], ['gnE', [8809]], ['gneq', [10888]], ['gneqq', [8809]], ['gnsim', [8935]], ['Gopf', [120126]], ['gopf', [120152]], ['grave', [96]], ['GreaterEqual', [8805]], ['GreaterEqualLess', [8923]], ['GreaterFullEqual', [8807]], ['GreaterGreater', [10914]], ['GreaterLess', [8823]], ['GreaterSlantEqual', [10878]], ['GreaterTilde', [8819]], ['Gscr', [119970]], ['gscr', [8458]], ['gsim', [8819]], ['gsime', [10894]], ['gsiml', [10896]], ['gtcc', [10919]], ['gtcir', [10874]], ['gt', [62]], ['GT', [62]], ['Gt', [8811]], ['gtdot', [8919]], ['gtlPar', [10645]], ['gtquest', [10876]], ['gtrapprox', [10886]], ['gtrarr', [10616]], ['gtrdot', [8919]], ['gtreqless', [8923]], ['gtreqqless', [10892]], ['gtrless', [8823]], ['gtrsim', [8819]], ['gvertneqq', [8809, 65024]], ['gvnE', [8809, 65024]], ['Hacek', [711]], ['hairsp', [8202]], ['half', [189]], ['hamilt', [8459]], ['HARDcy', [1066]], ['hardcy', [1098]], ['harrcir', [10568]], ['harr', [8596]], ['hArr', [8660]], ['harrw', [8621]], ['Hat', [94]], ['hbar', [8463]], ['Hcirc', [292]], ['hcirc', [293]], ['hearts', [9829]], ['heartsuit', [9829]], ['hellip', [8230]], ['hercon', [8889]], ['hfr', [120101]], ['Hfr', [8460]], ['HilbertSpace', [8459]], ['hksearow', [10533]], ['hkswarow', [10534]], ['hoarr', [8703]], ['homtht', [8763]], ['hookleftarrow', [8617]], ['hookrightarrow', [8618]], ['hopf', [120153]], ['Hopf', [8461]], ['horbar', [8213]], ['HorizontalLine', [9472]], ['hscr', [119997]], ['Hscr', [8459]], ['hslash', [8463]], ['Hstrok', [294]], ['hstrok', [295]], ['HumpDownHump', [8782]], ['HumpEqual', [8783]], ['hybull', [8259]], ['hyphen', [8208]], ['Iacute', [205]], ['iacute', [237]], ['ic', [8291]], ['Icirc', [206]], ['icirc', [238]], ['Icy', [1048]], ['icy', [1080]], ['Idot', [304]], ['IEcy', [1045]], ['iecy', [1077]], ['iexcl', [161]], ['iff', [8660]], ['ifr', [120102]], ['Ifr', [8465]], ['Igrave', [204]], ['igrave', [236]], ['ii', [8520]], ['iiiint', [10764]], ['iiint', [8749]], ['iinfin', [10716]], ['iiota', [8489]], ['IJlig', [306]], ['ijlig', [307]], ['Imacr', [298]], ['imacr', [299]], ['image', [8465]], ['ImaginaryI', [8520]], ['imagline', [8464]], ['imagpart', [8465]], ['imath', [305]], ['Im', [8465]], ['imof', [8887]], ['imped', [437]], ['Implies', [8658]], ['incare', [8453]], ['in', [8712]], ['infin', [8734]], ['infintie', [10717]], ['inodot', [305]], ['intcal', [8890]], ['int', [8747]], ['Int', [8748]], ['integers', [8484]], ['Integral', [8747]], ['intercal', [8890]], ['Intersection', [8898]], ['intlarhk', [10775]], ['intprod', [10812]], ['InvisibleComma', [8291]], ['InvisibleTimes', [8290]], ['IOcy', [1025]], ['iocy', [1105]], ['Iogon', [302]], ['iogon', [303]], ['Iopf', [120128]], ['iopf', [120154]], ['Iota', [921]], ['iota', [953]], ['iprod', [10812]], ['iquest', [191]], ['iscr', [119998]], ['Iscr', [8464]], ['isin', [8712]], ['isindot', [8949]], ['isinE', [8953]], ['isins', [8948]], ['isinsv', [8947]], ['isinv', [8712]], ['it', [8290]], ['Itilde', [296]], ['itilde', [297]], ['Iukcy', [1030]], ['iukcy', [1110]], ['Iuml', [207]], ['iuml', [239]], ['Jcirc', [308]], ['jcirc', [309]], ['Jcy', [1049]], ['jcy', [1081]], ['Jfr', [120077]], ['jfr', [120103]], ['jmath', [567]], ['Jopf', [120129]], ['jopf', [120155]], ['Jscr', [119973]], ['jscr', [119999]], ['Jsercy', [1032]], ['jsercy', [1112]], ['Jukcy', [1028]], ['jukcy', [1108]], ['Kappa', [922]], ['kappa', [954]], ['kappav', [1008]], ['Kcedil', [310]], ['kcedil', [311]], ['Kcy', [1050]], ['kcy', [1082]], ['Kfr', [120078]], ['kfr', [120104]], ['kgreen', [312]], ['KHcy', [1061]], ['khcy', [1093]], ['KJcy', [1036]], ['kjcy', [1116]], ['Kopf', [120130]], ['kopf', [120156]], ['Kscr', [119974]], ['kscr', [120000]], ['lAarr', [8666]], ['Lacute', [313]], ['lacute', [314]], ['laemptyv', [10676]], ['lagran', [8466]], ['Lambda', [923]], ['lambda', [955]], ['lang', [10216]], ['Lang', [10218]], ['langd', [10641]], ['langle', [10216]], ['lap', [10885]], ['Laplacetrf', [8466]], ['laquo', [171]], ['larrb', [8676]], ['larrbfs', [10527]], ['larr', [8592]], ['Larr', [8606]], ['lArr', [8656]], ['larrfs', [10525]], ['larrhk', [8617]], ['larrlp', [8619]], ['larrpl', [10553]], ['larrsim', [10611]], ['larrtl', [8610]], ['latail', [10521]], ['lAtail', [10523]], ['lat', [10923]], ['late', [10925]], ['lates', [10925, 65024]], ['lbarr', [10508]], ['lBarr', [10510]], ['lbbrk', [10098]], ['lbrace', [123]], ['lbrack', [91]], ['lbrke', [10635]], ['lbrksld', [10639]], ['lbrkslu', [10637]], ['Lcaron', [317]], ['lcaron', [318]], ['Lcedil', [315]], ['lcedil', [316]], ['lceil', [8968]], ['lcub', [123]], ['Lcy', [1051]], ['lcy', [1083]], ['ldca', [10550]], ['ldquo', [8220]], ['ldquor', [8222]], ['ldrdhar', [10599]], ['ldrushar', [10571]], ['ldsh', [8626]], ['le', [8804]], ['lE', [8806]], ['LeftAngleBracket', [10216]], ['LeftArrowBar', [8676]], ['leftarrow', [8592]], ['LeftArrow', [8592]], ['Leftarrow', [8656]], ['LeftArrowRightArrow', [8646]], ['leftarrowtail', [8610]], ['LeftCeiling', [8968]], ['LeftDoubleBracket', [10214]], ['LeftDownTeeVector', [10593]], ['LeftDownVectorBar', [10585]], ['LeftDownVector', [8643]], ['LeftFloor', [8970]], ['leftharpoondown', [8637]], ['leftharpoonup', [8636]], ['leftleftarrows', [8647]], ['leftrightarrow', [8596]], ['LeftRightArrow', [8596]], ['Leftrightarrow', [8660]], ['leftrightarrows', [8646]], ['leftrightharpoons', [8651]], ['leftrightsquigarrow', [8621]], ['LeftRightVector', [10574]], ['LeftTeeArrow', [8612]], ['LeftTee', [8867]], ['LeftTeeVector', [10586]], ['leftthreetimes', [8907]], ['LeftTriangleBar', [10703]], ['LeftTriangle', [8882]], ['LeftTriangleEqual', [8884]], ['LeftUpDownVector', [10577]], ['LeftUpTeeVector', [10592]], ['LeftUpVectorBar', [10584]], ['LeftUpVector', [8639]], ['LeftVectorBar', [10578]], ['LeftVector', [8636]], ['lEg', [10891]], ['leg', [8922]], ['leq', [8804]], ['leqq', [8806]], ['leqslant', [10877]], ['lescc', [10920]], ['les', [10877]], ['lesdot', [10879]], ['lesdoto', [10881]], ['lesdotor', [10883]], ['lesg', [8922, 65024]], ['lesges', [10899]], ['lessapprox', [10885]], ['lessdot', [8918]], ['lesseqgtr', [8922]], ['lesseqqgtr', [10891]], ['LessEqualGreater', [8922]], ['LessFullEqual', [8806]], ['LessGreater', [8822]], ['lessgtr', [8822]], ['LessLess', [10913]], ['lesssim', [8818]], ['LessSlantEqual', [10877]], ['LessTilde', [8818]], ['lfisht', [10620]], ['lfloor', [8970]], ['Lfr', [120079]], ['lfr', [120105]], ['lg', [8822]], ['lgE', [10897]], ['lHar', [10594]], ['lhard', [8637]], ['lharu', [8636]], ['lharul', [10602]], ['lhblk', [9604]], ['LJcy', [1033]], ['ljcy', [1113]], ['llarr', [8647]], ['ll', [8810]], ['Ll', [8920]], ['llcorner', [8990]], ['Lleftarrow', [8666]], ['llhard', [10603]], ['lltri', [9722]], ['Lmidot', [319]], ['lmidot', [320]], ['lmoustache', [9136]], ['lmoust', [9136]], ['lnap', [10889]], ['lnapprox', [10889]], ['lne', [10887]], ['lnE', [8808]], ['lneq', [10887]], ['lneqq', [8808]], ['lnsim', [8934]], ['loang', [10220]], ['loarr', [8701]], ['lobrk', [10214]], ['longleftarrow', [10229]], ['LongLeftArrow', [10229]], ['Longleftarrow', [10232]], ['longleftrightarrow', [10231]], ['LongLeftRightArrow', [10231]], ['Longleftrightarrow', [10234]], ['longmapsto', [10236]], ['longrightarrow', [10230]], ['LongRightArrow', [10230]], ['Longrightarrow', [10233]], ['looparrowleft', [8619]], ['looparrowright', [8620]], ['lopar', [10629]], ['Lopf', [120131]], ['lopf', [120157]], ['loplus', [10797]], ['lotimes', [10804]], ['lowast', [8727]], ['lowbar', [95]], ['LowerLeftArrow', [8601]], ['LowerRightArrow', [8600]], ['loz', [9674]], ['lozenge', [9674]], ['lozf', [10731]], ['lpar', [40]], ['lparlt', [10643]], ['lrarr', [8646]], ['lrcorner', [8991]], ['lrhar', [8651]], ['lrhard', [10605]], ['lrm', [8206]], ['lrtri', [8895]], ['lsaquo', [8249]], ['lscr', [120001]], ['Lscr', [8466]], ['lsh', [8624]], ['Lsh', [8624]], ['lsim', [8818]], ['lsime', [10893]], ['lsimg', [10895]], ['lsqb', [91]], ['lsquo', [8216]], ['lsquor', [8218]], ['Lstrok', [321]], ['lstrok', [322]], ['ltcc', [10918]], ['ltcir', [10873]], ['lt', [60]], ['LT', [60]], ['Lt', [8810]], ['ltdot', [8918]], ['lthree', [8907]], ['ltimes', [8905]], ['ltlarr', [10614]], ['ltquest', [10875]], ['ltri', [9667]], ['ltrie', [8884]], ['ltrif', [9666]], ['ltrPar', [10646]], ['lurdshar', [10570]], ['luruhar', [10598]], ['lvertneqq', [8808, 65024]], ['lvnE', [8808, 65024]], ['macr', [175]], ['male', [9794]], ['malt', [10016]], ['maltese', [10016]], ['Map', [10501]], ['map', [8614]], ['mapsto', [8614]], ['mapstodown', [8615]], ['mapstoleft', [8612]], ['mapstoup', [8613]], ['marker', [9646]], ['mcomma', [10793]], ['Mcy', [1052]], ['mcy', [1084]], ['mdash', [8212]], ['mDDot', [8762]], ['measuredangle', [8737]], ['MediumSpace', [8287]], ['Mellintrf', [8499]], ['Mfr', [120080]], ['mfr', [120106]], ['mho', [8487]], ['micro', [181]], ['midast', [42]], ['midcir', [10992]], ['mid', [8739]], ['middot', [183]], ['minusb', [8863]], ['minus', [8722]], ['minusd', [8760]], ['minusdu', [10794]], ['MinusPlus', [8723]], ['mlcp', [10971]], ['mldr', [8230]], ['mnplus', [8723]], ['models', [8871]], ['Mopf', [120132]], ['mopf', [120158]], ['mp', [8723]], ['mscr', [120002]], ['Mscr', [8499]], ['mstpos', [8766]], ['Mu', [924]], ['mu', [956]], ['multimap', [8888]], ['mumap', [8888]], ['nabla', [8711]], ['Nacute', [323]], ['nacute', [324]], ['nang', [8736, 8402]], ['nap', [8777]], ['napE', [10864, 824]], ['napid', [8779, 824]], ['napos', [329]], ['napprox', [8777]], ['natural', [9838]], ['naturals', [8469]], ['natur', [9838]], ['nbsp', [160]], ['nbump', [8782, 824]], ['nbumpe', [8783, 824]], ['ncap', [10819]], ['Ncaron', [327]], ['ncaron', [328]], ['Ncedil', [325]], ['ncedil', [326]], ['ncong', [8775]], ['ncongdot', [10861, 824]], ['ncup', [10818]], ['Ncy', [1053]], ['ncy', [1085]], ['ndash', [8211]], ['nearhk', [10532]], ['nearr', [8599]], ['neArr', [8663]], ['nearrow', [8599]], ['ne', [8800]], ['nedot', [8784, 824]], ['NegativeMediumSpace', [8203]], ['NegativeThickSpace', [8203]], ['NegativeThinSpace', [8203]], ['NegativeVeryThinSpace', [8203]], ['nequiv', [8802]], ['nesear', [10536]], ['nesim', [8770, 824]], ['NestedGreaterGreater', [8811]], ['NestedLessLess', [8810]], ['nexist', [8708]], ['nexists', [8708]], ['Nfr', [120081]], ['nfr', [120107]], ['ngE', [8807, 824]], ['nge', [8817]], ['ngeq', [8817]], ['ngeqq', [8807, 824]], ['ngeqslant', [10878, 824]], ['nges', [10878, 824]], ['nGg', [8921, 824]], ['ngsim', [8821]], ['nGt', [8811, 8402]], ['ngt', [8815]], ['ngtr', [8815]], ['nGtv', [8811, 824]], ['nharr', [8622]], ['nhArr', [8654]], ['nhpar', [10994]], ['ni', [8715]], ['nis', [8956]], ['nisd', [8954]], ['niv', [8715]], ['NJcy', [1034]], ['njcy', [1114]], ['nlarr', [8602]], ['nlArr', [8653]], ['nldr', [8229]], ['nlE', [8806, 824]], ['nle', [8816]], ['nleftarrow', [8602]], ['nLeftarrow', [8653]], ['nleftrightarrow', [8622]], ['nLeftrightarrow', [8654]], ['nleq', [8816]], ['nleqq', [8806, 824]], ['nleqslant', [10877, 824]], ['nles', [10877, 824]], ['nless', [8814]], ['nLl', [8920, 824]], ['nlsim', [8820]], ['nLt', [8810, 8402]], ['nlt', [8814]], ['nltri', [8938]], ['nltrie', [8940]], ['nLtv', [8810, 824]], ['nmid', [8740]], ['NoBreak', [8288]], ['NonBreakingSpace', [160]], ['nopf', [120159]], ['Nopf', [8469]], ['Not', [10988]], ['not', [172]], ['NotCongruent', [8802]], ['NotCupCap', [8813]], ['NotDoubleVerticalBar', [8742]], ['NotElement', [8713]], ['NotEqual', [8800]], ['NotEqualTilde', [8770, 824]], ['NotExists', [8708]], ['NotGreater', [8815]], ['NotGreaterEqual', [8817]], ['NotGreaterFullEqual', [8807, 824]], ['NotGreaterGreater', [8811, 824]], ['NotGreaterLess', [8825]], ['NotGreaterSlantEqual', [10878, 824]], ['NotGreaterTilde', [8821]], ['NotHumpDownHump', [8782, 824]], ['NotHumpEqual', [8783, 824]], ['notin', [8713]], ['notindot', [8949, 824]], ['notinE', [8953, 824]], ['notinva', [8713]], ['notinvb', [8951]], ['notinvc', [8950]], ['NotLeftTriangleBar', [10703, 824]], ['NotLeftTriangle', [8938]], ['NotLeftTriangleEqual', [8940]], ['NotLess', [8814]], ['NotLessEqual', [8816]], ['NotLessGreater', [8824]], ['NotLessLess', [8810, 824]], ['NotLessSlantEqual', [10877, 824]], ['NotLessTilde', [8820]], ['NotNestedGreaterGreater', [10914, 824]], ['NotNestedLessLess', [10913, 824]], ['notni', [8716]], ['notniva', [8716]], ['notnivb', [8958]], ['notnivc', [8957]], ['NotPrecedes', [8832]], ['NotPrecedesEqual', [10927, 824]], ['NotPrecedesSlantEqual', [8928]], ['NotReverseElement', [8716]], ['NotRightTriangleBar', [10704, 824]], ['NotRightTriangle', [8939]], ['NotRightTriangleEqual', [8941]], ['NotSquareSubset', [8847, 824]], ['NotSquareSubsetEqual', [8930]], ['NotSquareSuperset', [8848, 824]], ['NotSquareSupersetEqual', [8931]], ['NotSubset', [8834, 8402]], ['NotSubsetEqual', [8840]], ['NotSucceeds', [8833]], ['NotSucceedsEqual', [10928, 824]], ['NotSucceedsSlantEqual', [8929]], ['NotSucceedsTilde', [8831, 824]], ['NotSuperset', [8835, 8402]], ['NotSupersetEqual', [8841]], ['NotTilde', [8769]], ['NotTildeEqual', [8772]], ['NotTildeFullEqual', [8775]], ['NotTildeTilde', [8777]], ['NotVerticalBar', [8740]], ['nparallel', [8742]], ['npar', [8742]], ['nparsl', [11005, 8421]], ['npart', [8706, 824]], ['npolint', [10772]], ['npr', [8832]], ['nprcue', [8928]], ['nprec', [8832]], ['npreceq', [10927, 824]], ['npre', [10927, 824]], ['nrarrc', [10547, 824]], ['nrarr', [8603]], ['nrArr', [8655]], ['nrarrw', [8605, 824]], ['nrightarrow', [8603]], ['nRightarrow', [8655]], ['nrtri', [8939]], ['nrtrie', [8941]], ['nsc', [8833]], ['nsccue', [8929]], ['nsce', [10928, 824]], ['Nscr', [119977]], ['nscr', [120003]], ['nshortmid', [8740]], ['nshortparallel', [8742]], ['nsim', [8769]], ['nsime', [8772]], ['nsimeq', [8772]], ['nsmid', [8740]], ['nspar', [8742]], ['nsqsube', [8930]], ['nsqsupe', [8931]], ['nsub', [8836]], ['nsubE', [10949, 824]], ['nsube', [8840]], ['nsubset', [8834, 8402]], ['nsubseteq', [8840]], ['nsubseteqq', [10949, 824]], ['nsucc', [8833]], ['nsucceq', [10928, 824]], ['nsup', [8837]], ['nsupE', [10950, 824]], ['nsupe', [8841]], ['nsupset', [8835, 8402]], ['nsupseteq', [8841]], ['nsupseteqq', [10950, 824]], ['ntgl', [8825]], ['Ntilde', [209]], ['ntilde', [241]], ['ntlg', [8824]], ['ntriangleleft', [8938]], ['ntrianglelefteq', [8940]], ['ntriangleright', [8939]], ['ntrianglerighteq', [8941]], ['Nu', [925]], ['nu', [957]], ['num', [35]], ['numero', [8470]], ['numsp', [8199]], ['nvap', [8781, 8402]], ['nvdash', [8876]], ['nvDash', [8877]], ['nVdash', [8878]], ['nVDash', [8879]], ['nvge', [8805, 8402]], ['nvgt', [62, 8402]], ['nvHarr', [10500]], ['nvinfin', [10718]], ['nvlArr', [10498]], ['nvle', [8804, 8402]], ['nvlt', [60, 8402]], ['nvltrie', [8884, 8402]], ['nvrArr', [10499]], ['nvrtrie', [8885, 8402]], ['nvsim', [8764, 8402]], ['nwarhk', [10531]], ['nwarr', [8598]], ['nwArr', [8662]], ['nwarrow', [8598]], ['nwnear', [10535]], ['Oacute', [211]], ['oacute', [243]], ['oast', [8859]], ['Ocirc', [212]], ['ocirc', [244]], ['ocir', [8858]], ['Ocy', [1054]], ['ocy', [1086]], ['odash', [8861]], ['Odblac', [336]], ['odblac', [337]], ['odiv', [10808]], ['odot', [8857]], ['odsold', [10684]], ['OElig', [338]], ['oelig', [339]], ['ofcir', [10687]], ['Ofr', [120082]], ['ofr', [120108]], ['ogon', [731]], ['Ograve', [210]], ['ograve', [242]], ['ogt', [10689]], ['ohbar', [10677]], ['ohm', [937]], ['oint', [8750]], ['olarr', [8634]], ['olcir', [10686]], ['olcross', [10683]], ['oline', [8254]], ['olt', [10688]], ['Omacr', [332]], ['omacr', [333]], ['Omega', [937]], ['omega', [969]], ['Omicron', [927]], ['omicron', [959]], ['omid', [10678]], ['ominus', [8854]], ['Oopf', [120134]], ['oopf', [120160]], ['opar', [10679]], ['OpenCurlyDoubleQuote', [8220]], ['OpenCurlyQuote', [8216]], ['operp', [10681]], ['oplus', [8853]], ['orarr', [8635]], ['Or', [10836]], ['or', [8744]], ['ord', [10845]], ['order', [8500]], ['orderof', [8500]], ['ordf', [170]], ['ordm', [186]], ['origof', [8886]], ['oror', [10838]], ['orslope', [10839]], ['orv', [10843]], ['oS', [9416]], ['Oscr', [119978]], ['oscr', [8500]], ['Oslash', [216]], ['oslash', [248]], ['osol', [8856]], ['Otilde', [213]], ['otilde', [245]], ['otimesas', [10806]], ['Otimes', [10807]], ['otimes', [8855]], ['Ouml', [214]], ['ouml', [246]], ['ovbar', [9021]], ['OverBar', [8254]], ['OverBrace', [9182]], ['OverBracket', [9140]], ['OverParenthesis', [9180]], ['para', [182]], ['parallel', [8741]], ['par', [8741]], ['parsim', [10995]], ['parsl', [11005]], ['part', [8706]], ['PartialD', [8706]], ['Pcy', [1055]], ['pcy', [1087]], ['percnt', [37]], ['period', [46]], ['permil', [8240]], ['perp', [8869]], ['pertenk', [8241]], ['Pfr', [120083]], ['pfr', [120109]], ['Phi', [934]], ['phi', [966]], ['phiv', [981]], ['phmmat', [8499]], ['phone', [9742]], ['Pi', [928]], ['pi', [960]], ['pitchfork', [8916]], ['piv', [982]], ['planck', [8463]], ['planckh', [8462]], ['plankv', [8463]], ['plusacir', [10787]], ['plusb', [8862]], ['pluscir', [10786]], ['plus', [43]], ['plusdo', [8724]], ['plusdu', [10789]], ['pluse', [10866]], ['PlusMinus', [177]], ['plusmn', [177]], ['plussim', [10790]], ['plustwo', [10791]], ['pm', [177]], ['Poincareplane', [8460]], ['pointint', [10773]], ['popf', [120161]], ['Popf', [8473]], ['pound', [163]], ['prap', [10935]], ['Pr', [10939]], ['pr', [8826]], ['prcue', [8828]], ['precapprox', [10935]], ['prec', [8826]], ['preccurlyeq', [8828]], ['Precedes', [8826]], ['PrecedesEqual', [10927]], ['PrecedesSlantEqual', [8828]], ['PrecedesTilde', [8830]], ['preceq', [10927]], ['precnapprox', [10937]], ['precneqq', [10933]], ['precnsim', [8936]], ['pre', [10927]], ['prE', [10931]], ['precsim', [8830]], ['prime', [8242]], ['Prime', [8243]], ['primes', [8473]], ['prnap', [10937]], ['prnE', [10933]], ['prnsim', [8936]], ['prod', [8719]], ['Product', [8719]], ['profalar', [9006]], ['profline', [8978]], ['profsurf', [8979]], ['prop', [8733]], ['Proportional', [8733]], ['Proportion', [8759]], ['propto', [8733]], ['prsim', [8830]], ['prurel', [8880]], ['Pscr', [119979]], ['pscr', [120005]], ['Psi', [936]], ['psi', [968]], ['puncsp', [8200]], ['Qfr', [120084]], ['qfr', [120110]], ['qint', [10764]], ['qopf', [120162]], ['Qopf', [8474]], ['qprime', [8279]], ['Qscr', [119980]], ['qscr', [120006]], ['quaternions', [8461]], ['quatint', [10774]], ['quest', [63]], ['questeq', [8799]], ['quot', [34]], ['QUOT', [34]], ['rAarr', [8667]], ['race', [8765, 817]], ['Racute', [340]], ['racute', [341]], ['radic', [8730]], ['raemptyv', [10675]], ['rang', [10217]], ['Rang', [10219]], ['rangd', [10642]], ['range', [10661]], ['rangle', [10217]], ['raquo', [187]], ['rarrap', [10613]], ['rarrb', [8677]], ['rarrbfs', [10528]], ['rarrc', [10547]], ['rarr', [8594]], ['Rarr', [8608]], ['rArr', [8658]], ['rarrfs', [10526]], ['rarrhk', [8618]], ['rarrlp', [8620]], ['rarrpl', [10565]], ['rarrsim', [10612]], ['Rarrtl', [10518]], ['rarrtl', [8611]], ['rarrw', [8605]], ['ratail', [10522]], ['rAtail', [10524]], ['ratio', [8758]], ['rationals', [8474]], ['rbarr', [10509]], ['rBarr', [10511]], ['RBarr', [10512]], ['rbbrk', [10099]], ['rbrace', [125]], ['rbrack', [93]], ['rbrke', [10636]], ['rbrksld', [10638]], ['rbrkslu', [10640]], ['Rcaron', [344]], ['rcaron', [345]], ['Rcedil', [342]], ['rcedil', [343]], ['rceil', [8969]], ['rcub', [125]], ['Rcy', [1056]], ['rcy', [1088]], ['rdca', [10551]], ['rdldhar', [10601]], ['rdquo', [8221]], ['rdquor', [8221]], ['CloseCurlyDoubleQuote', [8221]], ['rdsh', [8627]], ['real', [8476]], ['realine', [8475]], ['realpart', [8476]], ['reals', [8477]], ['Re', [8476]], ['rect', [9645]], ['reg', [174]], ['REG', [174]], ['ReverseElement', [8715]], ['ReverseEquilibrium', [8651]], ['ReverseUpEquilibrium', [10607]], ['rfisht', [10621]], ['rfloor', [8971]], ['rfr', [120111]], ['Rfr', [8476]], ['rHar', [10596]], ['rhard', [8641]], ['rharu', [8640]], ['rharul', [10604]], ['Rho', [929]], ['rho', [961]], ['rhov', [1009]], ['RightAngleBracket', [10217]], ['RightArrowBar', [8677]], ['rightarrow', [8594]], ['RightArrow', [8594]], ['Rightarrow', [8658]], ['RightArrowLeftArrow', [8644]], ['rightarrowtail', [8611]], ['RightCeiling', [8969]], ['RightDoubleBracket', [10215]], ['RightDownTeeVector', [10589]], ['RightDownVectorBar', [10581]], ['RightDownVector', [8642]], ['RightFloor', [8971]], ['rightharpoondown', [8641]], ['rightharpoonup', [8640]], ['rightleftarrows', [8644]], ['rightleftharpoons', [8652]], ['rightrightarrows', [8649]], ['rightsquigarrow', [8605]], ['RightTeeArrow', [8614]], ['RightTee', [8866]], ['RightTeeVector', [10587]], ['rightthreetimes', [8908]], ['RightTriangleBar', [10704]], ['RightTriangle', [8883]], ['RightTriangleEqual', [8885]], ['RightUpDownVector', [10575]], ['RightUpTeeVector', [10588]], ['RightUpVectorBar', [10580]], ['RightUpVector', [8638]], ['RightVectorBar', [10579]], ['RightVector', [8640]], ['ring', [730]], ['risingdotseq', [8787]], ['rlarr', [8644]], ['rlhar', [8652]], ['rlm', [8207]], ['rmoustache', [9137]], ['rmoust', [9137]], ['rnmid', [10990]], ['roang', [10221]], ['roarr', [8702]], ['robrk', [10215]], ['ropar', [10630]], ['ropf', [120163]], ['Ropf', [8477]], ['roplus', [10798]], ['rotimes', [10805]], ['RoundImplies', [10608]], ['rpar', [41]], ['rpargt', [10644]], ['rppolint', [10770]], ['rrarr', [8649]], ['Rrightarrow', [8667]], ['rsaquo', [8250]], ['rscr', [120007]], ['Rscr', [8475]], ['rsh', [8625]], ['Rsh', [8625]], ['rsqb', [93]], ['rsquo', [8217]], ['rsquor', [8217]], ['CloseCurlyQuote', [8217]], ['rthree', [8908]], ['rtimes', [8906]], ['rtri', [9657]], ['rtrie', [8885]], ['rtrif', [9656]], ['rtriltri', [10702]], ['RuleDelayed', [10740]], ['ruluhar', [10600]], ['rx', [8478]], ['Sacute', [346]], ['sacute', [347]], ['sbquo', [8218]], ['scap', [10936]], ['Scaron', [352]], ['scaron', [353]], ['Sc', [10940]], ['sc', [8827]], ['sccue', [8829]], ['sce', [10928]], ['scE', [10932]], ['Scedil', [350]], ['scedil', [351]], ['Scirc', [348]], ['scirc', [349]], ['scnap', [10938]], ['scnE', [10934]], ['scnsim', [8937]], ['scpolint', [10771]], ['scsim', [8831]], ['Scy', [1057]], ['scy', [1089]], ['sdotb', [8865]], ['sdot', [8901]], ['sdote', [10854]], ['searhk', [10533]], ['searr', [8600]], ['seArr', [8664]], ['searrow', [8600]], ['sect', [167]], ['semi', [59]], ['seswar', [10537]], ['setminus', [8726]], ['setmn', [8726]], ['sext', [10038]], ['Sfr', [120086]], ['sfr', [120112]], ['sfrown', [8994]], ['sharp', [9839]], ['SHCHcy', [1065]], ['shchcy', [1097]], ['SHcy', [1064]], ['shcy', [1096]], ['ShortDownArrow', [8595]], ['ShortLeftArrow', [8592]], ['shortmid', [8739]], ['shortparallel', [8741]], ['ShortRightArrow', [8594]], ['ShortUpArrow', [8593]], ['shy', [173]], ['Sigma', [931]], ['sigma', [963]], ['sigmaf', [962]], ['sigmav', [962]], ['sim', [8764]], ['simdot', [10858]], ['sime', [8771]], ['simeq', [8771]], ['simg', [10910]], ['simgE', [10912]], ['siml', [10909]], ['simlE', [10911]], ['simne', [8774]], ['simplus', [10788]], ['simrarr', [10610]], ['slarr', [8592]], ['SmallCircle', [8728]], ['smallsetminus', [8726]], ['smashp', [10803]], ['smeparsl', [10724]], ['smid', [8739]], ['smile', [8995]], ['smt', [10922]], ['smte', [10924]], ['smtes', [10924, 65024]], ['SOFTcy', [1068]], ['softcy', [1100]], ['solbar', [9023]], ['solb', [10692]], ['sol', [47]], ['Sopf', [120138]], ['sopf', [120164]], ['spades', [9824]], ['spadesuit', [9824]], ['spar', [8741]], ['sqcap', [8851]], ['sqcaps', [8851, 65024]], ['sqcup', [8852]], ['sqcups', [8852, 65024]], ['Sqrt', [8730]], ['sqsub', [8847]], ['sqsube', [8849]], ['sqsubset', [8847]], ['sqsubseteq', [8849]], ['sqsup', [8848]], ['sqsupe', [8850]], ['sqsupset', [8848]], ['sqsupseteq', [8850]], ['square', [9633]], ['Square', [9633]], ['SquareIntersection', [8851]], ['SquareSubset', [8847]], ['SquareSubsetEqual', [8849]], ['SquareSuperset', [8848]], ['SquareSupersetEqual', [8850]], ['SquareUnion', [8852]], ['squarf', [9642]], ['squ', [9633]], ['squf', [9642]], ['srarr', [8594]], ['Sscr', [119982]], ['sscr', [120008]], ['ssetmn', [8726]], ['ssmile', [8995]], ['sstarf', [8902]], ['Star', [8902]], ['star', [9734]], ['starf', [9733]], ['straightepsilon', [1013]], ['straightphi', [981]], ['strns', [175]], ['sub', [8834]], ['Sub', [8912]], ['subdot', [10941]], ['subE', [10949]], ['sube', [8838]], ['subedot', [10947]], ['submult', [10945]], ['subnE', [10955]], ['subne', [8842]], ['subplus', [10943]], ['subrarr', [10617]], ['subset', [8834]], ['Subset', [8912]], ['subseteq', [8838]], ['subseteqq', [10949]], ['SubsetEqual', [8838]], ['subsetneq', [8842]], ['subsetneqq', [10955]], ['subsim', [10951]], ['subsub', [10965]], ['subsup', [10963]], ['succapprox', [10936]], ['succ', [8827]], ['succcurlyeq', [8829]], ['Succeeds', [8827]], ['SucceedsEqual', [10928]], ['SucceedsSlantEqual', [8829]], ['SucceedsTilde', [8831]], ['succeq', [10928]], ['succnapprox', [10938]], ['succneqq', [10934]], ['succnsim', [8937]], ['succsim', [8831]], ['SuchThat', [8715]], ['sum', [8721]], ['Sum', [8721]], ['sung', [9834]], ['sup1', [185]], ['sup2', [178]], ['sup3', [179]], ['sup', [8835]], ['Sup', [8913]], ['supdot', [10942]], ['supdsub', [10968]], ['supE', [10950]], ['supe', [8839]], ['supedot', [10948]], ['Superset', [8835]], ['SupersetEqual', [8839]], ['suphsol', [10185]], ['suphsub', [10967]], ['suplarr', [10619]], ['supmult', [10946]], ['supnE', [10956]], ['supne', [8843]], ['supplus', [10944]], ['supset', [8835]], ['Supset', [8913]], ['supseteq', [8839]], ['supseteqq', [10950]], ['supsetneq', [8843]], ['supsetneqq', [10956]], ['supsim', [10952]], ['supsub', [10964]], ['supsup', [10966]], ['swarhk', [10534]], ['swarr', [8601]], ['swArr', [8665]], ['swarrow', [8601]], ['swnwar', [10538]], ['szlig', [223]], ['Tab', [9]], ['target', [8982]], ['Tau', [932]], ['tau', [964]], ['tbrk', [9140]], ['Tcaron', [356]], ['tcaron', [357]], ['Tcedil', [354]], ['tcedil', [355]], ['Tcy', [1058]], ['tcy', [1090]], ['tdot', [8411]], ['telrec', [8981]], ['Tfr', [120087]], ['tfr', [120113]], ['there4', [8756]], ['therefore', [8756]], ['Therefore', [8756]], ['Theta', [920]], ['theta', [952]], ['thetasym', [977]], ['thetav', [977]], ['thickapprox', [8776]], ['thicksim', [8764]], ['ThickSpace', [8287, 8202]], ['ThinSpace', [8201]], ['thinsp', [8201]], ['thkap', [8776]], ['thksim', [8764]], ['THORN', [222]], ['thorn', [254]], ['tilde', [732]], ['Tilde', [8764]], ['TildeEqual', [8771]], ['TildeFullEqual', [8773]], ['TildeTilde', [8776]], ['timesbar', [10801]], ['timesb', [8864]], ['times', [215]], ['timesd', [10800]], ['tint', [8749]], ['toea', [10536]], ['topbot', [9014]], ['topcir', [10993]], ['top', [8868]], ['Topf', [120139]], ['topf', [120165]], ['topfork', [10970]], ['tosa', [10537]], ['tprime', [8244]], ['trade', [8482]], ['TRADE', [8482]], ['triangle', [9653]], ['triangledown', [9663]], ['triangleleft', [9667]], ['trianglelefteq', [8884]], ['triangleq', [8796]], ['triangleright', [9657]], ['trianglerighteq', [8885]], ['tridot', [9708]], ['trie', [8796]], ['triminus', [10810]], ['TripleDot', [8411]], ['triplus', [10809]], ['trisb', [10701]], ['tritime', [10811]], ['trpezium', [9186]], ['Tscr', [119983]], ['tscr', [120009]], ['TScy', [1062]], ['tscy', [1094]], ['TSHcy', [1035]], ['tshcy', [1115]], ['Tstrok', [358]], ['tstrok', [359]], ['twixt', [8812]], ['twoheadleftarrow', [8606]], ['twoheadrightarrow', [8608]], ['Uacute', [218]], ['uacute', [250]], ['uarr', [8593]], ['Uarr', [8607]], ['uArr', [8657]], ['Uarrocir', [10569]], ['Ubrcy', [1038]], ['ubrcy', [1118]], ['Ubreve', [364]], ['ubreve', [365]], ['Ucirc', [219]], ['ucirc', [251]], ['Ucy', [1059]], ['ucy', [1091]], ['udarr', [8645]], ['Udblac', [368]], ['udblac', [369]], ['udhar', [10606]], ['ufisht', [10622]], ['Ufr', [120088]], ['ufr', [120114]], ['Ugrave', [217]], ['ugrave', [249]], ['uHar', [10595]], ['uharl', [8639]], ['uharr', [8638]], ['uhblk', [9600]], ['ulcorn', [8988]], ['ulcorner', [8988]], ['ulcrop', [8975]], ['ultri', [9720]], ['Umacr', [362]], ['umacr', [363]], ['uml', [168]], ['UnderBar', [95]], ['UnderBrace', [9183]], ['UnderBracket', [9141]], ['UnderParenthesis', [9181]], ['Union', [8899]], ['UnionPlus', [8846]], ['Uogon', [370]], ['uogon', [371]], ['Uopf', [120140]], ['uopf', [120166]], ['UpArrowBar', [10514]], ['uparrow', [8593]], ['UpArrow', [8593]], ['Uparrow', [8657]], ['UpArrowDownArrow', [8645]], ['updownarrow', [8597]], ['UpDownArrow', [8597]], ['Updownarrow', [8661]], ['UpEquilibrium', [10606]], ['upharpoonleft', [8639]], ['upharpoonright', [8638]], ['uplus', [8846]], ['UpperLeftArrow', [8598]], ['UpperRightArrow', [8599]], ['upsi', [965]], ['Upsi', [978]], ['upsih', [978]], ['Upsilon', [933]], ['upsilon', [965]], ['UpTeeArrow', [8613]], ['UpTee', [8869]], ['upuparrows', [8648]], ['urcorn', [8989]], ['urcorner', [8989]], ['urcrop', [8974]], ['Uring', [366]], ['uring', [367]], ['urtri', [9721]], ['Uscr', [119984]], ['uscr', [120010]], ['utdot', [8944]], ['Utilde', [360]], ['utilde', [361]], ['utri', [9653]], ['utrif', [9652]], ['uuarr', [8648]], ['Uuml', [220]], ['uuml', [252]], ['uwangle', [10663]], ['vangrt', [10652]], ['varepsilon', [1013]], ['varkappa', [1008]], ['varnothing', [8709]], ['varphi', [981]], ['varpi', [982]], ['varpropto', [8733]], ['varr', [8597]], ['vArr', [8661]], ['varrho', [1009]], ['varsigma', [962]], ['varsubsetneq', [8842, 65024]], ['varsubsetneqq', [10955, 65024]], ['varsupsetneq', [8843, 65024]], ['varsupsetneqq', [10956, 65024]], ['vartheta', [977]], ['vartriangleleft', [8882]], ['vartriangleright', [8883]], ['vBar', [10984]], ['Vbar', [10987]], ['vBarv', [10985]], ['Vcy', [1042]], ['vcy', [1074]], ['vdash', [8866]], ['vDash', [8872]], ['Vdash', [8873]], ['VDash', [8875]], ['Vdashl', [10982]], ['veebar', [8891]], ['vee', [8744]], ['Vee', [8897]], ['veeeq', [8794]], ['vellip', [8942]], ['verbar', [124]], ['Verbar', [8214]], ['vert', [124]], ['Vert', [8214]], ['VerticalBar', [8739]], ['VerticalLine', [124]], ['VerticalSeparator', [10072]], ['VerticalTilde', [8768]], ['VeryThinSpace', [8202]], ['Vfr', [120089]], ['vfr', [120115]], ['vltri', [8882]], ['vnsub', [8834, 8402]], ['vnsup', [8835, 8402]], ['Vopf', [120141]], ['vopf', [120167]], ['vprop', [8733]], ['vrtri', [8883]], ['Vscr', [119985]], ['vscr', [120011]], ['vsubnE', [10955, 65024]], ['vsubne', [8842, 65024]], ['vsupnE', [10956, 65024]], ['vsupne', [8843, 65024]], ['Vvdash', [8874]], ['vzigzag', [10650]], ['Wcirc', [372]], ['wcirc', [373]], ['wedbar', [10847]], ['wedge', [8743]], ['Wedge', [8896]], ['wedgeq', [8793]], ['weierp', [8472]], ['Wfr', [120090]], ['wfr', [120116]], ['Wopf', [120142]], ['wopf', [120168]], ['wp', [8472]], ['wr', [8768]], ['wreath', [8768]], ['Wscr', [119986]], ['wscr', [120012]], ['xcap', [8898]], ['xcirc', [9711]], ['xcup', [8899]], ['xdtri', [9661]], ['Xfr', [120091]], ['xfr', [120117]], ['xharr', [10231]], ['xhArr', [10234]], ['Xi', [926]], ['xi', [958]], ['xlarr', [10229]], ['xlArr', [10232]], ['xmap', [10236]], ['xnis', [8955]], ['xodot', [10752]], ['Xopf', [120143]], ['xopf', [120169]], ['xoplus', [10753]], ['xotime', [10754]], ['xrarr', [10230]], ['xrArr', [10233]], ['Xscr', [119987]], ['xscr', [120013]], ['xsqcup', [10758]], ['xuplus', [10756]], ['xutri', [9651]], ['xvee', [8897]], ['xwedge', [8896]], ['Yacute', [221]], ['yacute', [253]], ['YAcy', [1071]], ['yacy', [1103]], ['Ycirc', [374]], ['ycirc', [375]], ['Ycy', [1067]], ['ycy', [1099]], ['yen', [165]], ['Yfr', [120092]], ['yfr', [120118]], ['YIcy', [1031]], ['yicy', [1111]], ['Yopf', [120144]], ['yopf', [120170]], ['Yscr', [119988]], ['yscr', [120014]], ['YUcy', [1070]], ['yucy', [1102]], ['yuml', [255]], ['Yuml', [376]], ['Zacute', [377]], ['zacute', [378]], ['Zcaron', [381]], ['zcaron', [382]], ['Zcy', [1047]], ['zcy', [1079]], ['Zdot', [379]], ['zdot', [380]], ['zeetrf', [8488]], ['ZeroWidthSpace', [8203]], ['Zeta', [918]], ['zeta', [950]], ['zfr', [120119]], ['Zfr', [8488]], ['ZHcy', [1046]], ['zhcy', [1078]], ['zigrarr', [8669]], ['zopf', [120171]], ['Zopf', [8484]], ['Zscr', [119989]], ['zscr', [120015]], ['zwj', [8205]], ['zwnj', [8204]]];

var alphaIndex = {};
var charIndex = {};

createIndexes(alphaIndex, charIndex);

/**
 * @constructor
 */
function Html5Entities() {}

/**
 * @param {String} str
 * @returns {String}
 */
Html5Entities.prototype.decode = function(str) {
    if (!str || !str.length) {
        return '';
    }
    return str.replace(/&(#?[\w\d]+);?/g, function(s, entity) {
        var chr;
        if (entity.charAt(0) === "#") {
            var code = entity.charAt(1) === 'x' ?
                parseInt(entity.substr(2).toLowerCase(), 16) :
                parseInt(entity.substr(1));

            if (!(isNaN(code) || code < -32768 || code > 65535)) {
                chr = String.fromCharCode(code);
            }
        } else {
            chr = alphaIndex[entity];
        }
        return chr || s;
    });
};

/**
 * @param {String} str
 * @returns {String}
 */
 Html5Entities.decode = function(str) {
    return new Html5Entities().decode(str);
 };

/**
 * @param {String} str
 * @returns {String}
 */
Html5Entities.prototype.encode = function(str) {
    if (!str || !str.length) {
        return '';
    }
    var strLength = str.length;
    var result = '';
    var i = 0;
    while (i < strLength) {
        var charInfo = charIndex[str.charCodeAt(i)];
        if (charInfo) {
            var alpha = charInfo[str.charCodeAt(i + 1)];
            if (alpha) {
                i++;
            } else {
                alpha = charInfo[''];
            }
            if (alpha) {
                result += "&" + alpha + ";";
                i++;
                continue;
            }
        }
        result += str.charAt(i);
        i++;
    }
    return result;
};

/**
 * @param {String} str
 * @returns {String}
 */
 Html5Entities.encode = function(str) {
    return new Html5Entities().encode(str);
 };

/**
 * @param {String} str
 * @returns {String}
 */
Html5Entities.prototype.encodeNonUTF = function(str) {
    if (!str || !str.length) {
        return '';
    }
    var strLength = str.length;
    var result = '';
    var i = 0;
    while (i < strLength) {
        var c = str.charCodeAt(i);
        var charInfo = charIndex[c];
        if (charInfo) {
            var alpha = charInfo[str.charCodeAt(i + 1)];
            if (alpha) {
                i++;
            } else {
                alpha = charInfo[''];
            }
            if (alpha) {
                result += "&" + alpha + ";";
                i++;
                continue;
            }
        }
        if (c < 32 || c > 126) {
            result += '&#' + c + ';';
        } else {
            result += str.charAt(i);
        }
        i++;
    }
    return result;
};

/**
 * @param {String} str
 * @returns {String}
 */
 Html5Entities.encodeNonUTF = function(str) {
    return new Html5Entities().encodeNonUTF(str);
 };

/**
 * @param {String} str
 * @returns {String}
 */
Html5Entities.prototype.encodeNonASCII = function(str) {
    if (!str || !str.length) {
        return '';
    }
    var strLength = str.length;
    var result = '';
    var i = 0;
    while (i < strLength) {
        var c = str.charCodeAt(i);
        if (c <= 255) {
            result += str[i++];
            continue;
        }
        result += '&#' + c + ';';
        i++
    }
    return result;
};

/**
 * @param {String} str
 * @returns {String}
 */
 Html5Entities.encodeNonASCII = function(str) {
    return new Html5Entities().encodeNonASCII(str);
 };

/**
 * @param {Object} alphaIndex Passed by reference.
 * @param {Object} charIndex Passed by reference.
 */
function createIndexes(alphaIndex, charIndex) {
    var i = ENTITIES.length;
    var _results = [];
    while (i--) {
        var e = ENTITIES[i];
        var alpha = e[0];
        var chars = e[1];
        var chr = chars[0];
        var addChar = (chr < 32 || chr > 126) || chr === 62 || chr === 60 || chr === 38 || chr === 34 || chr === 39;
        var charInfo;
        if (addChar) {
            charInfo = charIndex[chr] = charIndex[chr] || {};
        }
        if (chars[1]) {
            var chr2 = chars[1];
            alphaIndex[alpha] = String.fromCharCode(chr) + String.fromCharCode(chr2);
            _results.push(addChar && (charInfo[chr2] = alpha));
        } else {
            alphaIndex[alpha] = String.fromCharCode(chr);
            _results.push(addChar && (charInfo[''] = alpha));
        }
    }
}

module.exports = Html5Entities;


/***/ }),

/***/ "./node_modules/html-entities/lib/xml-entities.js":
/*!********************************************************!*\
  !*** ./node_modules/html-entities/lib/xml-entities.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ALPHA_INDEX = {
    '&lt': '<',
    '&gt': '>',
    '&quot': '"',
    '&apos': '\'',
    '&amp': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&apos;': '\'',
    '&amp;': '&'
};

var CHAR_INDEX = {
    60: 'lt',
    62: 'gt',
    34: 'quot',
    39: 'apos',
    38: 'amp'
};

var CHAR_S_INDEX = {
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&apos;',
    '&': '&amp;'
};

/**
 * @constructor
 */
function XmlEntities() {}

/**
 * @param {String} str
 * @returns {String}
 */
XmlEntities.prototype.encode = function(str) {
    if (!str || !str.length) {
        return '';
    }
    return str.replace(/<|>|"|'|&/g, function(s) {
        return CHAR_S_INDEX[s];
    });
};

/**
 * @param {String} str
 * @returns {String}
 */
 XmlEntities.encode = function(str) {
    return new XmlEntities().encode(str);
 };

/**
 * @param {String} str
 * @returns {String}
 */
XmlEntities.prototype.decode = function(str) {
    if (!str || !str.length) {
        return '';
    }
    return str.replace(/&#?[0-9a-zA-Z]+;?/g, function(s) {
        if (s.charAt(1) === '#') {
            var code = s.charAt(2).toLowerCase() === 'x' ?
                parseInt(s.substr(3), 16) :
                parseInt(s.substr(2));

            if (isNaN(code) || code < -32768 || code > 65535) {
                return '';
            }
            return String.fromCharCode(code);
        }
        return ALPHA_INDEX[s] || s;
    });
};

/**
 * @param {String} str
 * @returns {String}
 */
 XmlEntities.decode = function(str) {
    return new XmlEntities().decode(str);
 };

/**
 * @param {String} str
 * @returns {String}
 */
XmlEntities.prototype.encodeNonUTF = function(str) {
    if (!str || !str.length) {
        return '';
    }
    var strLength = str.length;
    var result = '';
    var i = 0;
    while (i < strLength) {
        var c = str.charCodeAt(i);
        var alpha = CHAR_INDEX[c];
        if (alpha) {
            result += "&" + alpha + ";";
            i++;
            continue;
        }
        if (c < 32 || c > 126) {
            result += '&#' + c + ';';
        } else {
            result += str.charAt(i);
        }
        i++;
    }
    return result;
};

/**
 * @param {String} str
 * @returns {String}
 */
 XmlEntities.encodeNonUTF = function(str) {
    return new XmlEntities().encodeNonUTF(str);
 };

/**
 * @param {String} str
 * @returns {String}
 */
XmlEntities.prototype.encodeNonASCII = function(str) {
    if (!str || !str.length) {
        return '';
    }
    var strLenght = str.length;
    var result = '';
    var i = 0;
    while (i < strLenght) {
        var c = str.charCodeAt(i);
        if (c <= 255) {
            result += str[i++];
            continue;
        }
        result += '&#' + c + ';';
        i++;
    }
    return result;
};

/**
 * @param {String} str
 * @returns {String}
 */
 XmlEntities.encodeNonASCII = function(str) {
    return new XmlEntities().encodeNonASCII(str);
 };

module.exports = XmlEntities;


/***/ }),

/***/ "./node_modules/loglevel/lib/loglevel.js":
/*!***********************************************!*\
  !*** ./node_modules/loglevel/lib/loglevel.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
* loglevel - https://github.com/pimterry/loglevel
*
* Copyright (c) 2013 Tim Perry
* Licensed under the MIT license.
*/
(function (root, definition) {
    "use strict";
    if (true) {
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(this, function () {
    "use strict";

    // Slightly dubious tricks to cut down minimized file size
    var noop = function() {};
    var undefinedType = "undefined";
    var isIE = (typeof window !== undefinedType) && (
        /Trident\/|MSIE /.test(window.navigator.userAgent)
    );

    var logMethods = [
        "trace",
        "debug",
        "info",
        "warn",
        "error"
    ];

    // Cross-browser bind equivalent that works at least back to IE6
    function bindMethod(obj, methodName) {
        var method = obj[methodName];
        if (typeof method.bind === 'function') {
            return method.bind(obj);
        } else {
            try {
                return Function.prototype.bind.call(method, obj);
            } catch (e) {
                // Missing bind shim or IE8 + Modernizr, fallback to wrapping
                return function() {
                    return Function.prototype.apply.apply(method, [obj, arguments]);
                };
            }
        }
    }

    // Trace() doesn't print the message in IE, so for that case we need to wrap it
    function traceForIE() {
        if (console.log) {
            if (console.log.apply) {
                console.log.apply(console, arguments);
            } else {
                // In old IE, native console methods themselves don't have apply().
                Function.prototype.apply.apply(console.log, [console, arguments]);
            }
        }
        if (console.trace) console.trace();
    }

    // Build the best logging method possible for this env
    // Wherever possible we want to bind, not wrap, to preserve stack traces
    function realMethod(methodName) {
        if (methodName === 'debug') {
            methodName = 'log';
        }

        if (typeof console === undefinedType) {
            return false; // No method possible, for now - fixed later by enableLoggingWhenConsoleArrives
        } else if (methodName === 'trace' && isIE) {
            return traceForIE;
        } else if (console[methodName] !== undefined) {
            return bindMethod(console, methodName);
        } else if (console.log !== undefined) {
            return bindMethod(console, 'log');
        } else {
            return noop;
        }
    }

    // These private functions always need `this` to be set properly

    function replaceLoggingMethods(level, loggerName) {
        /*jshint validthis:true */
        for (var i = 0; i < logMethods.length; i++) {
            var methodName = logMethods[i];
            this[methodName] = (i < level) ?
                noop :
                this.methodFactory(methodName, level, loggerName);
        }

        // Define log.log as an alias for log.debug
        this.log = this.debug;
    }

    // In old IE versions, the console isn't present until you first open it.
    // We build realMethod() replacements here that regenerate logging methods
    function enableLoggingWhenConsoleArrives(methodName, level, loggerName) {
        return function () {
            if (typeof console !== undefinedType) {
                replaceLoggingMethods.call(this, level, loggerName);
                this[methodName].apply(this, arguments);
            }
        };
    }

    // By default, we use closely bound real methods wherever possible, and
    // otherwise we wait for a console to appear, and then try again.
    function defaultMethodFactory(methodName, level, loggerName) {
        /*jshint validthis:true */
        return realMethod(methodName) ||
               enableLoggingWhenConsoleArrives.apply(this, arguments);
    }

    function Logger(name, defaultLevel, factory) {
      var self = this;
      var currentLevel;
      var storageKey = "loglevel";
      if (name) {
        storageKey += ":" + name;
      }

      function persistLevelIfPossible(levelNum) {
          var levelName = (logMethods[levelNum] || 'silent').toUpperCase();

          if (typeof window === undefinedType) return;

          // Use localStorage if available
          try {
              window.localStorage[storageKey] = levelName;
              return;
          } catch (ignore) {}

          // Use session cookie as fallback
          try {
              window.document.cookie =
                encodeURIComponent(storageKey) + "=" + levelName + ";";
          } catch (ignore) {}
      }

      function getPersistedLevel() {
          var storedLevel;

          if (typeof window === undefinedType) return;

          try {
              storedLevel = window.localStorage[storageKey];
          } catch (ignore) {}

          // Fallback to cookies if local storage gives us nothing
          if (typeof storedLevel === undefinedType) {
              try {
                  var cookie = window.document.cookie;
                  var location = cookie.indexOf(
                      encodeURIComponent(storageKey) + "=");
                  if (location !== -1) {
                      storedLevel = /^([^;]+)/.exec(cookie.slice(location))[1];
                  }
              } catch (ignore) {}
          }

          // If the stored level is not valid, treat it as if nothing was stored.
          if (self.levels[storedLevel] === undefined) {
              storedLevel = undefined;
          }

          return storedLevel;
      }

      /*
       *
       * Public logger API - see https://github.com/pimterry/loglevel for details
       *
       */

      self.name = name;

      self.levels = { "TRACE": 0, "DEBUG": 1, "INFO": 2, "WARN": 3,
          "ERROR": 4, "SILENT": 5};

      self.methodFactory = factory || defaultMethodFactory;

      self.getLevel = function () {
          return currentLevel;
      };

      self.setLevel = function (level, persist) {
          if (typeof level === "string" && self.levels[level.toUpperCase()] !== undefined) {
              level = self.levels[level.toUpperCase()];
          }
          if (typeof level === "number" && level >= 0 && level <= self.levels.SILENT) {
              currentLevel = level;
              if (persist !== false) {  // defaults to true
                  persistLevelIfPossible(level);
              }
              replaceLoggingMethods.call(self, level, name);
              if (typeof console === undefinedType && level < self.levels.SILENT) {
                  return "No console available for logging";
              }
          } else {
              throw "log.setLevel() called with invalid level: " + level;
          }
      };

      self.setDefaultLevel = function (level) {
          if (!getPersistedLevel()) {
              self.setLevel(level, false);
          }
      };

      self.enableAll = function(persist) {
          self.setLevel(self.levels.TRACE, persist);
      };

      self.disableAll = function(persist) {
          self.setLevel(self.levels.SILENT, persist);
      };

      // Initialize with the right level
      var initialLevel = getPersistedLevel();
      if (initialLevel == null) {
          initialLevel = defaultLevel == null ? "WARN" : defaultLevel;
      }
      self.setLevel(initialLevel, false);
    }

    /*
     *
     * Top-level API
     *
     */

    var defaultLogger = new Logger();

    var _loggersByName = {};
    defaultLogger.getLogger = function getLogger(name) {
        if (typeof name !== "string" || name === "") {
          throw new TypeError("You must supply a name when creating a logger.");
        }

        var logger = _loggersByName[name];
        if (!logger) {
          logger = _loggersByName[name] = new Logger(
            name, defaultLogger.getLevel(), defaultLogger.methodFactory);
        }
        return logger;
    };

    // Grab the current global log variable in case of overwrite
    var _log = (typeof window !== undefinedType) ? window.log : undefined;
    defaultLogger.noConflict = function() {
        if (typeof window !== undefinedType &&
               window.log === defaultLogger) {
            window.log = _log;
        }

        return defaultLogger;
    };

    defaultLogger.getLoggers = function getLoggers() {
        return _loggersByName;
    };

    return defaultLogger;
}));


/***/ }),

/***/ "./node_modules/node-libs-browser/node_modules/punycode/punycode.js":
/*!**************************************************************************!*\
  !*** ./node_modules/node-libs-browser/node_modules/punycode/punycode.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports =  true && exports &&
		!exports.nodeType && exports;
	var freeModule =  true && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return punycode;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module), __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/sockjs-client/dist/sockjs.js":
/*!***************************************************!*\
  !*** ./node_modules/sockjs-client/dist/sockjs.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var require;var require;/* sockjs-client v1.4.0 | http://sockjs.org | MIT license */
(function(f){if(true){module.exports=f()}else { var g; }})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return require(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
'use strict';

var transportList = require('./transport-list');

module.exports = require('./main')(transportList);

// TODO can't get rid of this until all servers do
if ('_sockjs_onload' in global) {
  setTimeout(global._sockjs_onload, 1);
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./main":14,"./transport-list":16}],2:[function(require,module,exports){
'use strict';

var inherits = require('inherits')
  , Event = require('./event')
  ;

function CloseEvent() {
  Event.call(this);
  this.initEvent('close', false, false);
  this.wasClean = false;
  this.code = 0;
  this.reason = '';
}

inherits(CloseEvent, Event);

module.exports = CloseEvent;

},{"./event":4,"inherits":57}],3:[function(require,module,exports){
'use strict';

var inherits = require('inherits')
  , EventTarget = require('./eventtarget')
  ;

function EventEmitter() {
  EventTarget.call(this);
}

inherits(EventEmitter, EventTarget);

EventEmitter.prototype.removeAllListeners = function(type) {
  if (type) {
    delete this._listeners[type];
  } else {
    this._listeners = {};
  }
};

EventEmitter.prototype.once = function(type, listener) {
  var self = this
    , fired = false;

  function g() {
    self.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  this.on(type, g);
};

EventEmitter.prototype.emit = function() {
  var type = arguments[0];
  var listeners = this._listeners[type];
  if (!listeners) {
    return;
  }
  // equivalent of Array.prototype.slice.call(arguments, 1);
  var l = arguments.length;
  var args = new Array(l - 1);
  for (var ai = 1; ai < l; ai++) {
    args[ai - 1] = arguments[ai];
  }
  for (var i = 0; i < listeners.length; i++) {
    listeners[i].apply(this, args);
  }
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener = EventTarget.prototype.addEventListener;
EventEmitter.prototype.removeListener = EventTarget.prototype.removeEventListener;

module.exports.EventEmitter = EventEmitter;

},{"./eventtarget":5,"inherits":57}],4:[function(require,module,exports){
'use strict';

function Event(eventType) {
  this.type = eventType;
}

Event.prototype.initEvent = function(eventType, canBubble, cancelable) {
  this.type = eventType;
  this.bubbles = canBubble;
  this.cancelable = cancelable;
  this.timeStamp = +new Date();
  return this;
};

Event.prototype.stopPropagation = function() {};
Event.prototype.preventDefault = function() {};

Event.CAPTURING_PHASE = 1;
Event.AT_TARGET = 2;
Event.BUBBLING_PHASE = 3;

module.exports = Event;

},{}],5:[function(require,module,exports){
'use strict';

/* Simplified implementation of DOM2 EventTarget.
 *   http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-EventTarget
 */

function EventTarget() {
  this._listeners = {};
}

EventTarget.prototype.addEventListener = function(eventType, listener) {
  if (!(eventType in this._listeners)) {
    this._listeners[eventType] = [];
  }
  var arr = this._listeners[eventType];
  // #4
  if (arr.indexOf(listener) === -1) {
    // Make a copy so as not to interfere with a current dispatchEvent.
    arr = arr.concat([listener]);
  }
  this._listeners[eventType] = arr;
};

EventTarget.prototype.removeEventListener = function(eventType, listener) {
  var arr = this._listeners[eventType];
  if (!arr) {
    return;
  }
  var idx = arr.indexOf(listener);
  if (idx !== -1) {
    if (arr.length > 1) {
      // Make a copy so as not to interfere with a current dispatchEvent.
      this._listeners[eventType] = arr.slice(0, idx).concat(arr.slice(idx + 1));
    } else {
      delete this._listeners[eventType];
    }
    return;
  }
};

EventTarget.prototype.dispatchEvent = function() {
  var event = arguments[0];
  var t = event.type;
  // equivalent of Array.prototype.slice.call(arguments, 0);
  var args = arguments.length === 1 ? [event] : Array.apply(null, arguments);
  // TODO: This doesn't match the real behavior; per spec, onfoo get
  // their place in line from the /first/ time they're set from
  // non-null. Although WebKit bumps it to the end every time it's
  // set.
  if (this['on' + t]) {
    this['on' + t].apply(this, args);
  }
  if (t in this._listeners) {
    // Grab a reference to the listeners list. removeEventListener may alter the list.
    var listeners = this._listeners[t];
    for (var i = 0; i < listeners.length; i++) {
      listeners[i].apply(this, args);
    }
  }
};

module.exports = EventTarget;

},{}],6:[function(require,module,exports){
'use strict';

var inherits = require('inherits')
  , Event = require('./event')
  ;

function TransportMessageEvent(data) {
  Event.call(this);
  this.initEvent('message', false, false);
  this.data = data;
}

inherits(TransportMessageEvent, Event);

module.exports = TransportMessageEvent;

},{"./event":4,"inherits":57}],7:[function(require,module,exports){
'use strict';

var JSON3 = require('json3')
  , iframeUtils = require('./utils/iframe')
  ;

function FacadeJS(transport) {
  this._transport = transport;
  transport.on('message', this._transportMessage.bind(this));
  transport.on('close', this._transportClose.bind(this));
}

FacadeJS.prototype._transportClose = function(code, reason) {
  iframeUtils.postMessage('c', JSON3.stringify([code, reason]));
};
FacadeJS.prototype._transportMessage = function(frame) {
  iframeUtils.postMessage('t', frame);
};
FacadeJS.prototype._send = function(data) {
  this._transport.send(data);
};
FacadeJS.prototype._close = function() {
  this._transport.close();
  this._transport.removeAllListeners();
};

module.exports = FacadeJS;

},{"./utils/iframe":47,"json3":58}],8:[function(require,module,exports){
(function (process){
'use strict';

var urlUtils = require('./utils/url')
  , eventUtils = require('./utils/event')
  , JSON3 = require('json3')
  , FacadeJS = require('./facade')
  , InfoIframeReceiver = require('./info-iframe-receiver')
  , iframeUtils = require('./utils/iframe')
  , loc = require('./location')
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:iframe-bootstrap');
}

module.exports = function(SockJS, availableTransports) {
  var transportMap = {};
  availableTransports.forEach(function(at) {
    if (at.facadeTransport) {
      transportMap[at.facadeTransport.transportName] = at.facadeTransport;
    }
  });

  // hard-coded for the info iframe
  // TODO see if we can make this more dynamic
  transportMap[InfoIframeReceiver.transportName] = InfoIframeReceiver;
  var parentOrigin;

  /* eslint-disable camelcase */
  SockJS.bootstrap_iframe = function() {
    /* eslint-enable camelcase */
    var facade;
    iframeUtils.currentWindowId = loc.hash.slice(1);
    var onMessage = function(e) {
      if (e.source !== parent) {
        return;
      }
      if (typeof parentOrigin === 'undefined') {
        parentOrigin = e.origin;
      }
      if (e.origin !== parentOrigin) {
        return;
      }

      var iframeMessage;
      try {
        iframeMessage = JSON3.parse(e.data);
      } catch (ignored) {
        debug('bad json', e.data);
        return;
      }

      if (iframeMessage.windowId !== iframeUtils.currentWindowId) {
        return;
      }
      switch (iframeMessage.type) {
      case 's':
        var p;
        try {
          p = JSON3.parse(iframeMessage.data);
        } catch (ignored) {
          debug('bad json', iframeMessage.data);
          break;
        }
        var version = p[0];
        var transport = p[1];
        var transUrl = p[2];
        var baseUrl = p[3];
        debug(version, transport, transUrl, baseUrl);
        // change this to semver logic
        if (version !== SockJS.version) {
          throw new Error('Incompatible SockJS! Main site uses:' +
                    ' "' + version + '", the iframe:' +
                    ' "' + SockJS.version + '".');
        }

        if (!urlUtils.isOriginEqual(transUrl, loc.href) ||
            !urlUtils.isOriginEqual(baseUrl, loc.href)) {
          throw new Error('Can\'t connect to different domain from within an ' +
                    'iframe. (' + loc.href + ', ' + transUrl + ', ' + baseUrl + ')');
        }
        facade = new FacadeJS(new transportMap[transport](transUrl, baseUrl));
        break;
      case 'm':
        facade._send(iframeMessage.data);
        break;
      case 'c':
        if (facade) {
          facade._close();
        }
        facade = null;
        break;
      }
    };

    eventUtils.attachEvent('message', onMessage);

    // Start
    iframeUtils.postMessage('s');
  };
};

}).call(this,{ env: {} })

},{"./facade":7,"./info-iframe-receiver":10,"./location":13,"./utils/event":46,"./utils/iframe":47,"./utils/url":52,"debug":55,"json3":58}],9:[function(require,module,exports){
(function (process){
'use strict';

var EventEmitter = require('events').EventEmitter
  , inherits = require('inherits')
  , JSON3 = require('json3')
  , objectUtils = require('./utils/object')
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:info-ajax');
}

function InfoAjax(url, AjaxObject) {
  EventEmitter.call(this);

  var self = this;
  var t0 = +new Date();
  this.xo = new AjaxObject('GET', url);

  this.xo.once('finish', function(status, text) {
    var info, rtt;
    if (status === 200) {
      rtt = (+new Date()) - t0;
      if (text) {
        try {
          info = JSON3.parse(text);
        } catch (e) {
          debug('bad json', text);
        }
      }

      if (!objectUtils.isObject(info)) {
        info = {};
      }
    }
    self.emit('finish', info, rtt);
    self.removeAllListeners();
  });
}

inherits(InfoAjax, EventEmitter);

InfoAjax.prototype.close = function() {
  this.removeAllListeners();
  this.xo.close();
};

module.exports = InfoAjax;

}).call(this,{ env: {} })

},{"./utils/object":49,"debug":55,"events":3,"inherits":57,"json3":58}],10:[function(require,module,exports){
'use strict';

var inherits = require('inherits')
  , EventEmitter = require('events').EventEmitter
  , JSON3 = require('json3')
  , XHRLocalObject = require('./transport/sender/xhr-local')
  , InfoAjax = require('./info-ajax')
  ;

function InfoReceiverIframe(transUrl) {
  var self = this;
  EventEmitter.call(this);

  this.ir = new InfoAjax(transUrl, XHRLocalObject);
  this.ir.once('finish', function(info, rtt) {
    self.ir = null;
    self.emit('message', JSON3.stringify([info, rtt]));
  });
}

inherits(InfoReceiverIframe, EventEmitter);

InfoReceiverIframe.transportName = 'iframe-info-receiver';

InfoReceiverIframe.prototype.close = function() {
  if (this.ir) {
    this.ir.close();
    this.ir = null;
  }
  this.removeAllListeners();
};

module.exports = InfoReceiverIframe;

},{"./info-ajax":9,"./transport/sender/xhr-local":37,"events":3,"inherits":57,"json3":58}],11:[function(require,module,exports){
(function (process,global){
'use strict';

var EventEmitter = require('events').EventEmitter
  , inherits = require('inherits')
  , JSON3 = require('json3')
  , utils = require('./utils/event')
  , IframeTransport = require('./transport/iframe')
  , InfoReceiverIframe = require('./info-iframe-receiver')
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:info-iframe');
}

function InfoIframe(baseUrl, url) {
  var self = this;
  EventEmitter.call(this);

  var go = function() {
    var ifr = self.ifr = new IframeTransport(InfoReceiverIframe.transportName, url, baseUrl);

    ifr.once('message', function(msg) {
      if (msg) {
        var d;
        try {
          d = JSON3.parse(msg);
        } catch (e) {
          debug('bad json', msg);
          self.emit('finish');
          self.close();
          return;
        }

        var info = d[0], rtt = d[1];
        self.emit('finish', info, rtt);
      }
      self.close();
    });

    ifr.once('close', function() {
      self.emit('finish');
      self.close();
    });
  };

  // TODO this seems the same as the 'needBody' from transports
  if (!global.document.body) {
    utils.attachEvent('load', go);
  } else {
    go();
  }
}

inherits(InfoIframe, EventEmitter);

InfoIframe.enabled = function() {
  return IframeTransport.enabled();
};

InfoIframe.prototype.close = function() {
  if (this.ifr) {
    this.ifr.close();
  }
  this.removeAllListeners();
  this.ifr = null;
};

module.exports = InfoIframe;

}).call(this,{ env: {} },typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./info-iframe-receiver":10,"./transport/iframe":22,"./utils/event":46,"debug":55,"events":3,"inherits":57,"json3":58}],12:[function(require,module,exports){
(function (process){
'use strict';

var EventEmitter = require('events').EventEmitter
  , inherits = require('inherits')
  , urlUtils = require('./utils/url')
  , XDR = require('./transport/sender/xdr')
  , XHRCors = require('./transport/sender/xhr-cors')
  , XHRLocal = require('./transport/sender/xhr-local')
  , XHRFake = require('./transport/sender/xhr-fake')
  , InfoIframe = require('./info-iframe')
  , InfoAjax = require('./info-ajax')
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:info-receiver');
}

function InfoReceiver(baseUrl, urlInfo) {
  debug(baseUrl);
  var self = this;
  EventEmitter.call(this);

  setTimeout(function() {
    self.doXhr(baseUrl, urlInfo);
  }, 0);
}

inherits(InfoReceiver, EventEmitter);

// TODO this is currently ignoring the list of available transports and the whitelist

InfoReceiver._getReceiver = function(baseUrl, url, urlInfo) {
  // determine method of CORS support (if needed)
  if (urlInfo.sameOrigin) {
    return new InfoAjax(url, XHRLocal);
  }
  if (XHRCors.enabled) {
    return new InfoAjax(url, XHRCors);
  }
  if (XDR.enabled && urlInfo.sameScheme) {
    return new InfoAjax(url, XDR);
  }
  if (InfoIframe.enabled()) {
    return new InfoIframe(baseUrl, url);
  }
  return new InfoAjax(url, XHRFake);
};

InfoReceiver.prototype.doXhr = function(baseUrl, urlInfo) {
  var self = this
    , url = urlUtils.addPath(baseUrl, '/info')
    ;
  debug('doXhr', url);

  this.xo = InfoReceiver._getReceiver(baseUrl, url, urlInfo);

  this.timeoutRef = setTimeout(function() {
    debug('timeout');
    self._cleanup(false);
    self.emit('finish');
  }, InfoReceiver.timeout);

  this.xo.once('finish', function(info, rtt) {
    debug('finish', info, rtt);
    self._cleanup(true);
    self.emit('finish', info, rtt);
  });
};

InfoReceiver.prototype._cleanup = function(wasClean) {
  debug('_cleanup');
  clearTimeout(this.timeoutRef);
  this.timeoutRef = null;
  if (!wasClean && this.xo) {
    this.xo.close();
  }
  this.xo = null;
};

InfoReceiver.prototype.close = function() {
  debug('close');
  this.removeAllListeners();
  this._cleanup(false);
};

InfoReceiver.timeout = 8000;

module.exports = InfoReceiver;

}).call(this,{ env: {} })

},{"./info-ajax":9,"./info-iframe":11,"./transport/sender/xdr":34,"./transport/sender/xhr-cors":35,"./transport/sender/xhr-fake":36,"./transport/sender/xhr-local":37,"./utils/url":52,"debug":55,"events":3,"inherits":57}],13:[function(require,module,exports){
(function (global){
'use strict';

module.exports = global.location || {
  origin: 'http://localhost:80'
, protocol: 'http:'
, host: 'localhost'
, port: 80
, href: 'http://localhost/'
, hash: ''
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],14:[function(require,module,exports){
(function (process,global){
'use strict';

require('./shims');

var URL = require('url-parse')
  , inherits = require('inherits')
  , JSON3 = require('json3')
  , random = require('./utils/random')
  , escape = require('./utils/escape')
  , urlUtils = require('./utils/url')
  , eventUtils = require('./utils/event')
  , transport = require('./utils/transport')
  , objectUtils = require('./utils/object')
  , browser = require('./utils/browser')
  , log = require('./utils/log')
  , Event = require('./event/event')
  , EventTarget = require('./event/eventtarget')
  , loc = require('./location')
  , CloseEvent = require('./event/close')
  , TransportMessageEvent = require('./event/trans-message')
  , InfoReceiver = require('./info-receiver')
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:main');
}

var transports;

// follow constructor steps defined at http://dev.w3.org/html5/websockets/#the-websocket-interface
function SockJS(url, protocols, options) {
  if (!(this instanceof SockJS)) {
    return new SockJS(url, protocols, options);
  }
  if (arguments.length < 1) {
    throw new TypeError("Failed to construct 'SockJS: 1 argument required, but only 0 present");
  }
  EventTarget.call(this);

  this.readyState = SockJS.CONNECTING;
  this.extensions = '';
  this.protocol = '';

  // non-standard extension
  options = options || {};
  if (options.protocols_whitelist) {
    log.warn("'protocols_whitelist' is DEPRECATED. Use 'transports' instead.");
  }
  this._transportsWhitelist = options.transports;
  this._transportOptions = options.transportOptions || {};
  this._timeout = options.timeout || 0;

  var sessionId = options.sessionId || 8;
  if (typeof sessionId === 'function') {
    this._generateSessionId = sessionId;
  } else if (typeof sessionId === 'number') {
    this._generateSessionId = function() {
      return random.string(sessionId);
    };
  } else {
    throw new TypeError('If sessionId is used in the options, it needs to be a number or a function.');
  }

  this._server = options.server || random.numberString(1000);

  // Step 1 of WS spec - parse and validate the url. Issue #8
  var parsedUrl = new URL(url);
  if (!parsedUrl.host || !parsedUrl.protocol) {
    throw new SyntaxError("The URL '" + url + "' is invalid");
  } else if (parsedUrl.hash) {
    throw new SyntaxError('The URL must not contain a fragment');
  } else if (parsedUrl.protocol !== 'http:' && parsedUrl.protocol !== 'https:') {
    throw new SyntaxError("The URL's scheme must be either 'http:' or 'https:'. '" + parsedUrl.protocol + "' is not allowed.");
  }

  var secure = parsedUrl.protocol === 'https:';
  // Step 2 - don't allow secure origin with an insecure protocol
  if (loc.protocol === 'https:' && !secure) {
    throw new Error('SecurityError: An insecure SockJS connection may not be initiated from a page loaded over HTTPS');
  }

  // Step 3 - check port access - no need here
  // Step 4 - parse protocols argument
  if (!protocols) {
    protocols = [];
  } else if (!Array.isArray(protocols)) {
    protocols = [protocols];
  }

  // Step 5 - check protocols argument
  var sortedProtocols = protocols.sort();
  sortedProtocols.forEach(function(proto, i) {
    if (!proto) {
      throw new SyntaxError("The protocols entry '" + proto + "' is invalid.");
    }
    if (i < (sortedProtocols.length - 1) && proto === sortedProtocols[i + 1]) {
      throw new SyntaxError("The protocols entry '" + proto + "' is duplicated.");
    }
  });

  // Step 6 - convert origin
  var o = urlUtils.getOrigin(loc.href);
  this._origin = o ? o.toLowerCase() : null;

  // remove the trailing slash
  parsedUrl.set('pathname', parsedUrl.pathname.replace(/\/+$/, ''));

  // store the sanitized url
  this.url = parsedUrl.href;
  debug('using url', this.url);

  // Step 7 - start connection in background
  // obtain server info
  // http://sockjs.github.io/sockjs-protocol/sockjs-protocol-0.3.3.html#section-26
  this._urlInfo = {
    nullOrigin: !browser.hasDomain()
  , sameOrigin: urlUtils.isOriginEqual(this.url, loc.href)
  , sameScheme: urlUtils.isSchemeEqual(this.url, loc.href)
  };

  this._ir = new InfoReceiver(this.url, this._urlInfo);
  this._ir.once('finish', this._receiveInfo.bind(this));
}

inherits(SockJS, EventTarget);

function userSetCode(code) {
  return code === 1000 || (code >= 3000 && code <= 4999);
}

SockJS.prototype.close = function(code, reason) {
  // Step 1
  if (code && !userSetCode(code)) {
    throw new Error('InvalidAccessError: Invalid code');
  }
  // Step 2.4 states the max is 123 bytes, but we are just checking length
  if (reason && reason.length > 123) {
    throw new SyntaxError('reason argument has an invalid length');
  }

  // Step 3.1
  if (this.readyState === SockJS.CLOSING || this.readyState === SockJS.CLOSED) {
    return;
  }

  // TODO look at docs to determine how to set this
  var wasClean = true;
  this._close(code || 1000, reason || 'Normal closure', wasClean);
};

SockJS.prototype.send = function(data) {
  // #13 - convert anything non-string to string
  // TODO this currently turns objects into [object Object]
  if (typeof data !== 'string') {
    data = '' + data;
  }
  if (this.readyState === SockJS.CONNECTING) {
    throw new Error('InvalidStateError: The connection has not been established yet');
  }
  if (this.readyState !== SockJS.OPEN) {
    return;
  }
  this._transport.send(escape.quote(data));
};

SockJS.version = require('./version');

SockJS.CONNECTING = 0;
SockJS.OPEN = 1;
SockJS.CLOSING = 2;
SockJS.CLOSED = 3;

SockJS.prototype._receiveInfo = function(info, rtt) {
  debug('_receiveInfo', rtt);
  this._ir = null;
  if (!info) {
    this._close(1002, 'Cannot connect to server');
    return;
  }

  // establish a round-trip timeout (RTO) based on the
  // round-trip time (RTT)
  this._rto = this.countRTO(rtt);
  // allow server to override url used for the actual transport
  this._transUrl = info.base_url ? info.base_url : this.url;
  info = objectUtils.extend(info, this._urlInfo);
  debug('info', info);
  // determine list of desired and supported transports
  var enabledTransports = transports.filterToEnabled(this._transportsWhitelist, info);
  this._transports = enabledTransports.main;
  debug(this._transports.length + ' enabled transports');

  this._connect();
};

SockJS.prototype._connect = function() {
  for (var Transport = this._transports.shift(); Transport; Transport = this._transports.shift()) {
    debug('attempt', Transport.transportName);
    if (Transport.needBody) {
      if (!global.document.body ||
          (typeof global.document.readyState !== 'undefined' &&
            global.document.readyState !== 'complete' &&
            global.document.readyState !== 'interactive')) {
        debug('waiting for body');
        this._transports.unshift(Transport);
        eventUtils.attachEvent('load', this._connect.bind(this));
        return;
      }
    }

    // calculate timeout based on RTO and round trips. Default to 5s
    var timeoutMs = Math.max(this._timeout, (this._rto * Transport.roundTrips) || 5000);
    this._transportTimeoutId = setTimeout(this._transportTimeout.bind(this), timeoutMs);
    debug('using timeout', timeoutMs);

    var transportUrl = urlUtils.addPath(this._transUrl, '/' + this._server + '/' + this._generateSessionId());
    var options = this._transportOptions[Transport.transportName];
    debug('transport url', transportUrl);
    var transportObj = new Transport(transportUrl, this._transUrl, options);
    transportObj.on('message', this._transportMessage.bind(this));
    transportObj.once('close', this._transportClose.bind(this));
    transportObj.transportName = Transport.transportName;
    this._transport = transportObj;

    return;
  }
  this._close(2000, 'All transports failed', false);
};

SockJS.prototype._transportTimeout = function() {
  debug('_transportTimeout');
  if (this.readyState === SockJS.CONNECTING) {
    if (this._transport) {
      this._transport.close();
    }

    this._transportClose(2007, 'Transport timed out');
  }
};

SockJS.prototype._transportMessage = function(msg) {
  debug('_transportMessage', msg);
  var self = this
    , type = msg.slice(0, 1)
    , content = msg.slice(1)
    , payload
    ;

  // first check for messages that don't need a payload
  switch (type) {
    case 'o':
      this._open();
      return;
    case 'h':
      this.dispatchEvent(new Event('heartbeat'));
      debug('heartbeat', this.transport);
      return;
  }

  if (content) {
    try {
      payload = JSON3.parse(content);
    } catch (e) {
      debug('bad json', content);
    }
  }

  if (typeof payload === 'undefined') {
    debug('empty payload', content);
    return;
  }

  switch (type) {
    case 'a':
      if (Array.isArray(payload)) {
        payload.forEach(function(p) {
          debug('message', self.transport, p);
          self.dispatchEvent(new TransportMessageEvent(p));
        });
      }
      break;
    case 'm':
      debug('message', this.transport, payload);
      this.dispatchEvent(new TransportMessageEvent(payload));
      break;
    case 'c':
      if (Array.isArray(payload) && payload.length === 2) {
        this._close(payload[0], payload[1], true);
      }
      break;
  }
};

SockJS.prototype._transportClose = function(code, reason) {
  debug('_transportClose', this.transport, code, reason);
  if (this._transport) {
    this._transport.removeAllListeners();
    this._transport = null;
    this.transport = null;
  }

  if (!userSetCode(code) && code !== 2000 && this.readyState === SockJS.CONNECTING) {
    this._connect();
    return;
  }

  this._close(code, reason);
};

SockJS.prototype._open = function() {
  debug('_open', this._transport && this._transport.transportName, this.readyState);
  if (this.readyState === SockJS.CONNECTING) {
    if (this._transportTimeoutId) {
      clearTimeout(this._transportTimeoutId);
      this._transportTimeoutId = null;
    }
    this.readyState = SockJS.OPEN;
    this.transport = this._transport.transportName;
    this.dispatchEvent(new Event('open'));
    debug('connected', this.transport);
  } else {
    // The server might have been restarted, and lost track of our
    // connection.
    this._close(1006, 'Server lost session');
  }
};

SockJS.prototype._close = function(code, reason, wasClean) {
  debug('_close', this.transport, code, reason, wasClean, this.readyState);
  var forceFail = false;

  if (this._ir) {
    forceFail = true;
    this._ir.close();
    this._ir = null;
  }
  if (this._transport) {
    this._transport.close();
    this._transport = null;
    this.transport = null;
  }

  if (this.readyState === SockJS.CLOSED) {
    throw new Error('InvalidStateError: SockJS has already been closed');
  }

  this.readyState = SockJS.CLOSING;
  setTimeout(function() {
    this.readyState = SockJS.CLOSED;

    if (forceFail) {
      this.dispatchEvent(new Event('error'));
    }

    var e = new CloseEvent('close');
    e.wasClean = wasClean || false;
    e.code = code || 1000;
    e.reason = reason;

    this.dispatchEvent(e);
    this.onmessage = this.onclose = this.onerror = null;
    debug('disconnected');
  }.bind(this), 0);
};

// See: http://www.erg.abdn.ac.uk/~gerrit/dccp/notes/ccid2/rto_estimator/
// and RFC 2988.
SockJS.prototype.countRTO = function(rtt) {
  // In a local environment, when using IE8/9 and the `jsonp-polling`
  // transport the time needed to establish a connection (the time that pass
  // from the opening of the transport to the call of `_dispatchOpen`) is
  // around 200msec (the lower bound used in the article above) and this
  // causes spurious timeouts. For this reason we calculate a value slightly
  // larger than that used in the article.
  if (rtt > 100) {
    return 4 * rtt; // rto > 400msec
  }
  return 300 + rtt; // 300msec < rto <= 400msec
};

module.exports = function(availableTransports) {
  transports = transport(availableTransports);
  require('./iframe-bootstrap')(SockJS, availableTransports);
  return SockJS;
};

}).call(this,{ env: {} },typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./event/close":2,"./event/event":4,"./event/eventtarget":5,"./event/trans-message":6,"./iframe-bootstrap":8,"./info-receiver":12,"./location":13,"./shims":15,"./utils/browser":44,"./utils/escape":45,"./utils/event":46,"./utils/log":48,"./utils/object":49,"./utils/random":50,"./utils/transport":51,"./utils/url":52,"./version":53,"debug":55,"inherits":57,"json3":58,"url-parse":61}],15:[function(require,module,exports){
/* eslint-disable */
/* jscs: disable */
'use strict';

// pulled specific shims from https://github.com/es-shims/es5-shim

var ArrayPrototype = Array.prototype;
var ObjectPrototype = Object.prototype;
var FunctionPrototype = Function.prototype;
var StringPrototype = String.prototype;
var array_slice = ArrayPrototype.slice;

var _toString = ObjectPrototype.toString;
var isFunction = function (val) {
    return ObjectPrototype.toString.call(val) === '[object Function]';
};
var isArray = function isArray(obj) {
    return _toString.call(obj) === '[object Array]';
};
var isString = function isString(obj) {
    return _toString.call(obj) === '[object String]';
};

var supportsDescriptors = Object.defineProperty && (function () {
    try {
        Object.defineProperty({}, 'x', {});
        return true;
    } catch (e) { /* this is ES3 */
        return false;
    }
}());

// Define configurable, writable and non-enumerable props
// if they don't exist.
var defineProperty;
if (supportsDescriptors) {
    defineProperty = function (object, name, method, forceAssign) {
        if (!forceAssign && (name in object)) { return; }
        Object.defineProperty(object, name, {
            configurable: true,
            enumerable: false,
            writable: true,
            value: method
        });
    };
} else {
    defineProperty = function (object, name, method, forceAssign) {
        if (!forceAssign && (name in object)) { return; }
        object[name] = method;
    };
}
var defineProperties = function (object, map, forceAssign) {
    for (var name in map) {
        if (ObjectPrototype.hasOwnProperty.call(map, name)) {
          defineProperty(object, name, map[name], forceAssign);
        }
    }
};

var toObject = function (o) {
    if (o == null) { // this matches both null and undefined
        throw new TypeError("can't convert " + o + ' to object');
    }
    return Object(o);
};

//
// Util
// ======
//

// ES5 9.4
// http://es5.github.com/#x9.4
// http://jsperf.com/to-integer

function toInteger(num) {
    var n = +num;
    if (n !== n) { // isNaN
        n = 0;
    } else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0)) {
        n = (n > 0 || -1) * Math.floor(Math.abs(n));
    }
    return n;
}

function ToUint32(x) {
    return x >>> 0;
}

//
// Function
// ========
//

// ES-5 15.3.4.5
// http://es5.github.com/#x15.3.4.5

function Empty() {}

defineProperties(FunctionPrototype, {
    bind: function bind(that) { // .length is 1
        // 1. Let Target be the this value.
        var target = this;
        // 2. If IsCallable(Target) is false, throw a TypeError exception.
        if (!isFunction(target)) {
            throw new TypeError('Function.prototype.bind called on incompatible ' + target);
        }
        // 3. Let A be a new (possibly empty) internal list of all of the
        //   argument values provided after thisArg (arg1, arg2 etc), in order.
        // XXX slicedArgs will stand in for "A" if used
        var args = array_slice.call(arguments, 1); // for normal call
        // 4. Let F be a new native ECMAScript object.
        // 11. Set the [[Prototype]] internal property of F to the standard
        //   built-in Function prototype object as specified in 15.3.3.1.
        // 12. Set the [[Call]] internal property of F as described in
        //   15.3.4.5.1.
        // 13. Set the [[Construct]] internal property of F as described in
        //   15.3.4.5.2.
        // 14. Set the [[HasInstance]] internal property of F as described in
        //   15.3.4.5.3.
        var binder = function () {

            if (this instanceof bound) {
                // 15.3.4.5.2 [[Construct]]
                // When the [[Construct]] internal method of a function object,
                // F that was created using the bind function is called with a
                // list of arguments ExtraArgs, the following steps are taken:
                // 1. Let target be the value of F's [[TargetFunction]]
                //   internal property.
                // 2. If target has no [[Construct]] internal method, a
                //   TypeError exception is thrown.
                // 3. Let boundArgs be the value of F's [[BoundArgs]] internal
                //   property.
                // 4. Let args be a new list containing the same values as the
                //   list boundArgs in the same order followed by the same
                //   values as the list ExtraArgs in the same order.
                // 5. Return the result of calling the [[Construct]] internal
                //   method of target providing args as the arguments.

                var result = target.apply(
                    this,
                    args.concat(array_slice.call(arguments))
                );
                if (Object(result) === result) {
                    return result;
                }
                return this;

            } else {
                // 15.3.4.5.1 [[Call]]
                // When the [[Call]] internal method of a function object, F,
                // which was created using the bind function is called with a
                // this value and a list of arguments ExtraArgs, the following
                // steps are taken:
                // 1. Let boundArgs be the value of F's [[BoundArgs]] internal
                //   property.
                // 2. Let boundThis be the value of F's [[BoundThis]] internal
                //   property.
                // 3. Let target be the value of F's [[TargetFunction]] internal
                //   property.
                // 4. Let args be a new list containing the same values as the
                //   list boundArgs in the same order followed by the same
                //   values as the list ExtraArgs in the same order.
                // 5. Return the result of calling the [[Call]] internal method
                //   of target providing boundThis as the this value and
                //   providing args as the arguments.

                // equiv: target.call(this, ...boundArgs, ...args)
                return target.apply(
                    that,
                    args.concat(array_slice.call(arguments))
                );

            }

        };

        // 15. If the [[Class]] internal property of Target is "Function", then
        //     a. Let L be the length property of Target minus the length of A.
        //     b. Set the length own property of F to either 0 or L, whichever is
        //       larger.
        // 16. Else set the length own property of F to 0.

        var boundLength = Math.max(0, target.length - args.length);

        // 17. Set the attributes of the length own property of F to the values
        //   specified in 15.3.5.1.
        var boundArgs = [];
        for (var i = 0; i < boundLength; i++) {
            boundArgs.push('$' + i);
        }

        // XXX Build a dynamic function with desired amount of arguments is the only
        // way to set the length property of a function.
        // In environments where Content Security Policies enabled (Chrome extensions,
        // for ex.) all use of eval or Function costructor throws an exception.
        // However in all of these environments Function.prototype.bind exists
        // and so this code will never be executed.
        var bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this, arguments); }')(binder);

        if (target.prototype) {
            Empty.prototype = target.prototype;
            bound.prototype = new Empty();
            // Clean up dangling references.
            Empty.prototype = null;
        }

        // TODO
        // 18. Set the [[Extensible]] internal property of F to true.

        // TODO
        // 19. Let thrower be the [[ThrowTypeError]] function Object (13.2.3).
        // 20. Call the [[DefineOwnProperty]] internal method of F with
        //   arguments "caller", PropertyDescriptor {[[Get]]: thrower, [[Set]]:
        //   thrower, [[Enumerable]]: false, [[Configurable]]: false}, and
        //   false.
        // 21. Call the [[DefineOwnProperty]] internal method of F with
        //   arguments "arguments", PropertyDescriptor {[[Get]]: thrower,
        //   [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: false},
        //   and false.

        // TODO
        // NOTE Function objects created using Function.prototype.bind do not
        // have a prototype property or the [[Code]], [[FormalParameters]], and
        // [[Scope]] internal properties.
        // XXX can't delete prototype in pure-js.

        // 22. Return F.
        return bound;
    }
});

//
// Array
// =====
//

// ES5 15.4.3.2
// http://es5.github.com/#x15.4.3.2
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray
defineProperties(Array, { isArray: isArray });


var boxedString = Object('a');
var splitString = boxedString[0] !== 'a' || !(0 in boxedString);

var properlyBoxesContext = function properlyBoxed(method) {
    // Check node 0.6.21 bug where third parameter is not boxed
    var properlyBoxesNonStrict = true;
    var properlyBoxesStrict = true;
    if (method) {
        method.call('foo', function (_, __, context) {
            if (typeof context !== 'object') { properlyBoxesNonStrict = false; }
        });

        method.call([1], function () {
            'use strict';
            properlyBoxesStrict = typeof this === 'string';
        }, 'x');
    }
    return !!method && properlyBoxesNonStrict && properlyBoxesStrict;
};

defineProperties(ArrayPrototype, {
    forEach: function forEach(fun /*, thisp*/) {
        var object = toObject(this),
            self = splitString && isString(this) ? this.split('') : object,
            thisp = arguments[1],
            i = -1,
            length = self.length >>> 0;

        // If no callback function or if callback is not a callable function
        if (!isFunction(fun)) {
            throw new TypeError(); // TODO message
        }

        while (++i < length) {
            if (i in self) {
                // Invoke the callback function with call, passing arguments:
                // context, property value, property key, thisArg object
                // context
                fun.call(thisp, self[i], i, object);
            }
        }
    }
}, !properlyBoxesContext(ArrayPrototype.forEach));

// ES5 15.4.4.14
// http://es5.github.com/#x15.4.4.14
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf
var hasFirefox2IndexOfBug = Array.prototype.indexOf && [0, 1].indexOf(1, 2) !== -1;
defineProperties(ArrayPrototype, {
    indexOf: function indexOf(sought /*, fromIndex */ ) {
        var self = splitString && isString(this) ? this.split('') : toObject(this),
            length = self.length >>> 0;

        if (!length) {
            return -1;
        }

        var i = 0;
        if (arguments.length > 1) {
            i = toInteger(arguments[1]);
        }

        // handle negative indices
        i = i >= 0 ? i : Math.max(0, length + i);
        for (; i < length; i++) {
            if (i in self && self[i] === sought) {
                return i;
            }
        }
        return -1;
    }
}, hasFirefox2IndexOfBug);

//
// String
// ======
//

// ES5 15.5.4.14
// http://es5.github.com/#x15.5.4.14

// [bugfix, IE lt 9, firefox 4, Konqueror, Opera, obscure browsers]
// Many browsers do not split properly with regular expressions or they
// do not perform the split correctly under obscure conditions.
// See http://blog.stevenlevithan.com/archives/cross-browser-split
// I've tested in many browsers and this seems to cover the deviant ones:
//    'ab'.split(/(?:ab)*/) should be ["", ""], not [""]
//    '.'.split(/(.?)(.?)/) should be ["", ".", "", ""], not ["", ""]
//    'tesst'.split(/(s)*/) should be ["t", undefined, "e", "s", "t"], not
//       [undefined, "t", undefined, "e", ...]
//    ''.split(/.?/) should be [], not [""]
//    '.'.split(/()()/) should be ["."], not ["", "", "."]

var string_split = StringPrototype.split;
if (
    'ab'.split(/(?:ab)*/).length !== 2 ||
    '.'.split(/(.?)(.?)/).length !== 4 ||
    'tesst'.split(/(s)*/)[1] === 't' ||
    'test'.split(/(?:)/, -1).length !== 4 ||
    ''.split(/.?/).length ||
    '.'.split(/()()/).length > 1
) {
    (function () {
        var compliantExecNpcg = /()??/.exec('')[1] === void 0; // NPCG: nonparticipating capturing group

        StringPrototype.split = function (separator, limit) {
            var string = this;
            if (separator === void 0 && limit === 0) {
                return [];
            }

            // If `separator` is not a regex, use native split
            if (_toString.call(separator) !== '[object RegExp]') {
                return string_split.call(this, separator, limit);
            }

            var output = [],
                flags = (separator.ignoreCase ? 'i' : '') +
                        (separator.multiline  ? 'm' : '') +
                        (separator.extended   ? 'x' : '') + // Proposed for ES6
                        (separator.sticky     ? 'y' : ''), // Firefox 3+
                lastLastIndex = 0,
                // Make `global` and avoid `lastIndex` issues by working with a copy
                separator2, match, lastIndex, lastLength;
            separator = new RegExp(separator.source, flags + 'g');
            string += ''; // Type-convert
            if (!compliantExecNpcg) {
                // Doesn't need flags gy, but they don't hurt
                separator2 = new RegExp('^' + separator.source + '$(?!\\s)', flags);
            }
            /* Values for `limit`, per the spec:
             * If undefined: 4294967295 // Math.pow(2, 32) - 1
             * If 0, Infinity, or NaN: 0
             * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
             * If negative number: 4294967296 - Math.floor(Math.abs(limit))
             * If other: Type-convert, then use the above rules
             */
            limit = limit === void 0 ?
                -1 >>> 0 : // Math.pow(2, 32) - 1
                ToUint32(limit);
            while (match = separator.exec(string)) {
                // `separator.lastIndex` is not reliable cross-browser
                lastIndex = match.index + match[0].length;
                if (lastIndex > lastLastIndex) {
                    output.push(string.slice(lastLastIndex, match.index));
                    // Fix browsers whose `exec` methods don't consistently return `undefined` for
                    // nonparticipating capturing groups
                    if (!compliantExecNpcg && match.length > 1) {
                        match[0].replace(separator2, function () {
                            for (var i = 1; i < arguments.length - 2; i++) {
                                if (arguments[i] === void 0) {
                                    match[i] = void 0;
                                }
                            }
                        });
                    }
                    if (match.length > 1 && match.index < string.length) {
                        ArrayPrototype.push.apply(output, match.slice(1));
                    }
                    lastLength = match[0].length;
                    lastLastIndex = lastIndex;
                    if (output.length >= limit) {
                        break;
                    }
                }
                if (separator.lastIndex === match.index) {
                    separator.lastIndex++; // Avoid an infinite loop
                }
            }
            if (lastLastIndex === string.length) {
                if (lastLength || !separator.test('')) {
                    output.push('');
                }
            } else {
                output.push(string.slice(lastLastIndex));
            }
            return output.length > limit ? output.slice(0, limit) : output;
        };
    }());

// [bugfix, chrome]
// If separator is undefined, then the result array contains just one String,
// which is the this value (converted to a String). If limit is not undefined,
// then the output array is truncated so that it contains no more than limit
// elements.
// "0".split(undefined, 0) -> []
} else if ('0'.split(void 0, 0).length) {
    StringPrototype.split = function split(separator, limit) {
        if (separator === void 0 && limit === 0) { return []; }
        return string_split.call(this, separator, limit);
    };
}

// ECMA-262, 3rd B.2.3
// Not an ECMAScript standard, although ECMAScript 3rd Edition has a
// non-normative section suggesting uniform semantics and it should be
// normalized across all browsers
// [bugfix, IE lt 9] IE < 9 substr() with negative value not working in IE
var string_substr = StringPrototype.substr;
var hasNegativeSubstrBug = ''.substr && '0b'.substr(-1) !== 'b';
defineProperties(StringPrototype, {
    substr: function substr(start, length) {
        return string_substr.call(
            this,
            start < 0 ? ((start = this.length + start) < 0 ? 0 : start) : start,
            length
        );
    }
}, hasNegativeSubstrBug);

},{}],16:[function(require,module,exports){
'use strict';

module.exports = [
  // streaming transports
  require('./transport/websocket')
, require('./transport/xhr-streaming')
, require('./transport/xdr-streaming')
, require('./transport/eventsource')
, require('./transport/lib/iframe-wrap')(require('./transport/eventsource'))

  // polling transports
, require('./transport/htmlfile')
, require('./transport/lib/iframe-wrap')(require('./transport/htmlfile'))
, require('./transport/xhr-polling')
, require('./transport/xdr-polling')
, require('./transport/lib/iframe-wrap')(require('./transport/xhr-polling'))
, require('./transport/jsonp-polling')
];

},{"./transport/eventsource":20,"./transport/htmlfile":21,"./transport/jsonp-polling":23,"./transport/lib/iframe-wrap":26,"./transport/websocket":38,"./transport/xdr-polling":39,"./transport/xdr-streaming":40,"./transport/xhr-polling":41,"./transport/xhr-streaming":42}],17:[function(require,module,exports){
(function (process,global){
'use strict';

var EventEmitter = require('events').EventEmitter
  , inherits = require('inherits')
  , utils = require('../../utils/event')
  , urlUtils = require('../../utils/url')
  , XHR = global.XMLHttpRequest
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:browser:xhr');
}

function AbstractXHRObject(method, url, payload, opts) {
  debug(method, url);
  var self = this;
  EventEmitter.call(this);

  setTimeout(function () {
    self._start(method, url, payload, opts);
  }, 0);
}

inherits(AbstractXHRObject, EventEmitter);

AbstractXHRObject.prototype._start = function(method, url, payload, opts) {
  var self = this;

  try {
    this.xhr = new XHR();
  } catch (x) {
    // intentionally empty
  }

  if (!this.xhr) {
    debug('no xhr');
    this.emit('finish', 0, 'no xhr support');
    this._cleanup();
    return;
  }

  // several browsers cache POSTs
  url = urlUtils.addQuery(url, 't=' + (+new Date()));

  // Explorer tends to keep connection open, even after the
  // tab gets closed: http://bugs.jquery.com/ticket/5280
  this.unloadRef = utils.unloadAdd(function() {
    debug('unload cleanup');
    self._cleanup(true);
  });
  try {
    this.xhr.open(method, url, true);
    if (this.timeout && 'timeout' in this.xhr) {
      this.xhr.timeout = this.timeout;
      this.xhr.ontimeout = function() {
        debug('xhr timeout');
        self.emit('finish', 0, '');
        self._cleanup(false);
      };
    }
  } catch (e) {
    debug('exception', e);
    // IE raises an exception on wrong port.
    this.emit('finish', 0, '');
    this._cleanup(false);
    return;
  }

  if ((!opts || !opts.noCredentials) && AbstractXHRObject.supportsCORS) {
    debug('withCredentials');
    // Mozilla docs says https://developer.mozilla.org/en/XMLHttpRequest :
    // "This never affects same-site requests."

    this.xhr.withCredentials = true;
  }
  if (opts && opts.headers) {
    for (var key in opts.headers) {
      this.xhr.setRequestHeader(key, opts.headers[key]);
    }
  }

  this.xhr.onreadystatechange = function() {
    if (self.xhr) {
      var x = self.xhr;
      var text, status;
      debug('readyState', x.readyState);
      switch (x.readyState) {
      case 3:
        // IE doesn't like peeking into responseText or status
        // on Microsoft.XMLHTTP and readystate=3
        try {
          status = x.status;
          text = x.responseText;
        } catch (e) {
          // intentionally empty
        }
        debug('status', status);
        // IE returns 1223 for 204: http://bugs.jquery.com/ticket/1450
        if (status === 1223) {
          status = 204;
        }

        // IE does return readystate == 3 for 404 answers.
        if (status === 200 && text && text.length > 0) {
          debug('chunk');
          self.emit('chunk', status, text);
        }
        break;
      case 4:
        status = x.status;
        debug('status', status);
        // IE returns 1223 for 204: http://bugs.jquery.com/ticket/1450
        if (status === 1223) {
          status = 204;
        }
        // IE returns this for a bad port
        // http://msdn.microsoft.com/en-us/library/windows/desktop/aa383770(v=vs.85).aspx
        if (status === 12005 || status === 12029) {
          status = 0;
        }

        debug('finish', status, x.responseText);
        self.emit('finish', status, x.responseText);
        self._cleanup(false);
        break;
      }
    }
  };

  try {
    self.xhr.send(payload);
  } catch (e) {
    self.emit('finish', 0, '');
    self._cleanup(false);
  }
};

AbstractXHRObject.prototype._cleanup = function(abort) {
  debug('cleanup');
  if (!this.xhr) {
    return;
  }
  this.removeAllListeners();
  utils.unloadDel(this.unloadRef);

  // IE needs this field to be a function
  this.xhr.onreadystatechange = function() {};
  if (this.xhr.ontimeout) {
    this.xhr.ontimeout = null;
  }

  if (abort) {
    try {
      this.xhr.abort();
    } catch (x) {
      // intentionally empty
    }
  }
  this.unloadRef = this.xhr = null;
};

AbstractXHRObject.prototype.close = function() {
  debug('close');
  this._cleanup(true);
};

AbstractXHRObject.enabled = !!XHR;
// override XMLHttpRequest for IE6/7
// obfuscate to avoid firewalls
var axo = ['Active'].concat('Object').join('X');
if (!AbstractXHRObject.enabled && (axo in global)) {
  debug('overriding xmlhttprequest');
  XHR = function() {
    try {
      return new global[axo]('Microsoft.XMLHTTP');
    } catch (e) {
      return null;
    }
  };
  AbstractXHRObject.enabled = !!new XHR();
}

var cors = false;
try {
  cors = 'withCredentials' in new XHR();
} catch (ignored) {
  // intentionally empty
}

AbstractXHRObject.supportsCORS = cors;

module.exports = AbstractXHRObject;

}).call(this,{ env: {} },typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../utils/event":46,"../../utils/url":52,"debug":55,"events":3,"inherits":57}],18:[function(require,module,exports){
(function (global){
module.exports = global.EventSource;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],19:[function(require,module,exports){
(function (global){
'use strict';

var Driver = global.WebSocket || global.MozWebSocket;
if (Driver) {
	module.exports = function WebSocketBrowserDriver(url) {
		return new Driver(url);
	};
} else {
	module.exports = undefined;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],20:[function(require,module,exports){
'use strict';

var inherits = require('inherits')
  , AjaxBasedTransport = require('./lib/ajax-based')
  , EventSourceReceiver = require('./receiver/eventsource')
  , XHRCorsObject = require('./sender/xhr-cors')
  , EventSourceDriver = require('eventsource')
  ;

function EventSourceTransport(transUrl) {
  if (!EventSourceTransport.enabled()) {
    throw new Error('Transport created when disabled');
  }

  AjaxBasedTransport.call(this, transUrl, '/eventsource', EventSourceReceiver, XHRCorsObject);
}

inherits(EventSourceTransport, AjaxBasedTransport);

EventSourceTransport.enabled = function() {
  return !!EventSourceDriver;
};

EventSourceTransport.transportName = 'eventsource';
EventSourceTransport.roundTrips = 2;

module.exports = EventSourceTransport;

},{"./lib/ajax-based":24,"./receiver/eventsource":29,"./sender/xhr-cors":35,"eventsource":18,"inherits":57}],21:[function(require,module,exports){
'use strict';

var inherits = require('inherits')
  , HtmlfileReceiver = require('./receiver/htmlfile')
  , XHRLocalObject = require('./sender/xhr-local')
  , AjaxBasedTransport = require('./lib/ajax-based')
  ;

function HtmlFileTransport(transUrl) {
  if (!HtmlfileReceiver.enabled) {
    throw new Error('Transport created when disabled');
  }
  AjaxBasedTransport.call(this, transUrl, '/htmlfile', HtmlfileReceiver, XHRLocalObject);
}

inherits(HtmlFileTransport, AjaxBasedTransport);

HtmlFileTransport.enabled = function(info) {
  return HtmlfileReceiver.enabled && info.sameOrigin;
};

HtmlFileTransport.transportName = 'htmlfile';
HtmlFileTransport.roundTrips = 2;

module.exports = HtmlFileTransport;

},{"./lib/ajax-based":24,"./receiver/htmlfile":30,"./sender/xhr-local":37,"inherits":57}],22:[function(require,module,exports){
(function (process){
'use strict';

// Few cool transports do work only for same-origin. In order to make
// them work cross-domain we shall use iframe, served from the
// remote domain. New browsers have capabilities to communicate with
// cross domain iframe using postMessage(). In IE it was implemented
// from IE 8+, but of course, IE got some details wrong:
//    http://msdn.microsoft.com/en-us/library/cc197015(v=VS.85).aspx
//    http://stevesouders.com/misc/test-postmessage.php

var inherits = require('inherits')
  , JSON3 = require('json3')
  , EventEmitter = require('events').EventEmitter
  , version = require('../version')
  , urlUtils = require('../utils/url')
  , iframeUtils = require('../utils/iframe')
  , eventUtils = require('../utils/event')
  , random = require('../utils/random')
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:transport:iframe');
}

function IframeTransport(transport, transUrl, baseUrl) {
  if (!IframeTransport.enabled()) {
    throw new Error('Transport created when disabled');
  }
  EventEmitter.call(this);

  var self = this;
  this.origin = urlUtils.getOrigin(baseUrl);
  this.baseUrl = baseUrl;
  this.transUrl = transUrl;
  this.transport = transport;
  this.windowId = random.string(8);

  var iframeUrl = urlUtils.addPath(baseUrl, '/iframe.html') + '#' + this.windowId;
  debug(transport, transUrl, iframeUrl);

  this.iframeObj = iframeUtils.createIframe(iframeUrl, function(r) {
    debug('err callback');
    self.emit('close', 1006, 'Unable to load an iframe (' + r + ')');
    self.close();
  });

  this.onmessageCallback = this._message.bind(this);
  eventUtils.attachEvent('message', this.onmessageCallback);
}

inherits(IframeTransport, EventEmitter);

IframeTransport.prototype.close = function() {
  debug('close');
  this.removeAllListeners();
  if (this.iframeObj) {
    eventUtils.detachEvent('message', this.onmessageCallback);
    try {
      // When the iframe is not loaded, IE raises an exception
      // on 'contentWindow'.
      this.postMessage('c');
    } catch (x) {
      // intentionally empty
    }
    this.iframeObj.cleanup();
    this.iframeObj = null;
    this.onmessageCallback = this.iframeObj = null;
  }
};

IframeTransport.prototype._message = function(e) {
  debug('message', e.data);
  if (!urlUtils.isOriginEqual(e.origin, this.origin)) {
    debug('not same origin', e.origin, this.origin);
    return;
  }

  var iframeMessage;
  try {
    iframeMessage = JSON3.parse(e.data);
  } catch (ignored) {
    debug('bad json', e.data);
    return;
  }

  if (iframeMessage.windowId !== this.windowId) {
    debug('mismatched window id', iframeMessage.windowId, this.windowId);
    return;
  }

  switch (iframeMessage.type) {
  case 's':
    this.iframeObj.loaded();
    // window global dependency
    this.postMessage('s', JSON3.stringify([
      version
    , this.transport
    , this.transUrl
    , this.baseUrl
    ]));
    break;
  case 't':
    this.emit('message', iframeMessage.data);
    break;
  case 'c':
    var cdata;
    try {
      cdata = JSON3.parse(iframeMessage.data);
    } catch (ignored) {
      debug('bad json', iframeMessage.data);
      return;
    }
    this.emit('close', cdata[0], cdata[1]);
    this.close();
    break;
  }
};

IframeTransport.prototype.postMessage = function(type, data) {
  debug('postMessage', type, data);
  this.iframeObj.post(JSON3.stringify({
    windowId: this.windowId
  , type: type
  , data: data || ''
  }), this.origin);
};

IframeTransport.prototype.send = function(message) {
  debug('send', message);
  this.postMessage('m', message);
};

IframeTransport.enabled = function() {
  return iframeUtils.iframeEnabled;
};

IframeTransport.transportName = 'iframe';
IframeTransport.roundTrips = 2;

module.exports = IframeTransport;

}).call(this,{ env: {} })

},{"../utils/event":46,"../utils/iframe":47,"../utils/random":50,"../utils/url":52,"../version":53,"debug":55,"events":3,"inherits":57,"json3":58}],23:[function(require,module,exports){
(function (global){
'use strict';

// The simplest and most robust transport, using the well-know cross
// domain hack - JSONP. This transport is quite inefficient - one
// message could use up to one http request. But at least it works almost
// everywhere.
// Known limitations:
//   o you will get a spinning cursor
//   o for Konqueror a dumb timer is needed to detect errors

var inherits = require('inherits')
  , SenderReceiver = require('./lib/sender-receiver')
  , JsonpReceiver = require('./receiver/jsonp')
  , jsonpSender = require('./sender/jsonp')
  ;

function JsonPTransport(transUrl) {
  if (!JsonPTransport.enabled()) {
    throw new Error('Transport created when disabled');
  }
  SenderReceiver.call(this, transUrl, '/jsonp', jsonpSender, JsonpReceiver);
}

inherits(JsonPTransport, SenderReceiver);

JsonPTransport.enabled = function() {
  return !!global.document;
};

JsonPTransport.transportName = 'jsonp-polling';
JsonPTransport.roundTrips = 1;
JsonPTransport.needBody = true;

module.exports = JsonPTransport;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./lib/sender-receiver":28,"./receiver/jsonp":31,"./sender/jsonp":33,"inherits":57}],24:[function(require,module,exports){
(function (process){
'use strict';

var inherits = require('inherits')
  , urlUtils = require('../../utils/url')
  , SenderReceiver = require('./sender-receiver')
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:ajax-based');
}

function createAjaxSender(AjaxObject) {
  return function(url, payload, callback) {
    debug('create ajax sender', url, payload);
    var opt = {};
    if (typeof payload === 'string') {
      opt.headers = {'Content-type': 'text/plain'};
    }
    var ajaxUrl = urlUtils.addPath(url, '/xhr_send');
    var xo = new AjaxObject('POST', ajaxUrl, payload, opt);
    xo.once('finish', function(status) {
      debug('finish', status);
      xo = null;

      if (status !== 200 && status !== 204) {
        return callback(new Error('http status ' + status));
      }
      callback();
    });
    return function() {
      debug('abort');
      xo.close();
      xo = null;

      var err = new Error('Aborted');
      err.code = 1000;
      callback(err);
    };
  };
}

function AjaxBasedTransport(transUrl, urlSuffix, Receiver, AjaxObject) {
  SenderReceiver.call(this, transUrl, urlSuffix, createAjaxSender(AjaxObject), Receiver, AjaxObject);
}

inherits(AjaxBasedTransport, SenderReceiver);

module.exports = AjaxBasedTransport;

}).call(this,{ env: {} })

},{"../../utils/url":52,"./sender-receiver":28,"debug":55,"inherits":57}],25:[function(require,module,exports){
(function (process){
'use strict';

var inherits = require('inherits')
  , EventEmitter = require('events').EventEmitter
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:buffered-sender');
}

function BufferedSender(url, sender) {
  debug(url);
  EventEmitter.call(this);
  this.sendBuffer = [];
  this.sender = sender;
  this.url = url;
}

inherits(BufferedSender, EventEmitter);

BufferedSender.prototype.send = function(message) {
  debug('send', message);
  this.sendBuffer.push(message);
  if (!this.sendStop) {
    this.sendSchedule();
  }
};

// For polling transports in a situation when in the message callback,
// new message is being send. If the sending connection was started
// before receiving one, it is possible to saturate the network and
// timeout due to the lack of receiving socket. To avoid that we delay
// sending messages by some small time, in order to let receiving
// connection be started beforehand. This is only a halfmeasure and
// does not fix the big problem, but it does make the tests go more
// stable on slow networks.
BufferedSender.prototype.sendScheduleWait = function() {
  debug('sendScheduleWait');
  var self = this;
  var tref;
  this.sendStop = function() {
    debug('sendStop');
    self.sendStop = null;
    clearTimeout(tref);
  };
  tref = setTimeout(function() {
    debug('timeout');
    self.sendStop = null;
    self.sendSchedule();
  }, 25);
};

BufferedSender.prototype.sendSchedule = function() {
  debug('sendSchedule', this.sendBuffer.length);
  var self = this;
  if (this.sendBuffer.length > 0) {
    var payload = '[' + this.sendBuffer.join(',') + ']';
    this.sendStop = this.sender(this.url, payload, function(err) {
      self.sendStop = null;
      if (err) {
        debug('error', err);
        self.emit('close', err.code || 1006, 'Sending error: ' + err);
        self.close();
      } else {
        self.sendScheduleWait();
      }
    });
    this.sendBuffer = [];
  }
};

BufferedSender.prototype._cleanup = function() {
  debug('_cleanup');
  this.removeAllListeners();
};

BufferedSender.prototype.close = function() {
  debug('close');
  this._cleanup();
  if (this.sendStop) {
    this.sendStop();
    this.sendStop = null;
  }
};

module.exports = BufferedSender;

}).call(this,{ env: {} })

},{"debug":55,"events":3,"inherits":57}],26:[function(require,module,exports){
(function (global){
'use strict';

var inherits = require('inherits')
  , IframeTransport = require('../iframe')
  , objectUtils = require('../../utils/object')
  ;

module.exports = function(transport) {

  function IframeWrapTransport(transUrl, baseUrl) {
    IframeTransport.call(this, transport.transportName, transUrl, baseUrl);
  }

  inherits(IframeWrapTransport, IframeTransport);

  IframeWrapTransport.enabled = function(url, info) {
    if (!global.document) {
      return false;
    }

    var iframeInfo = objectUtils.extend({}, info);
    iframeInfo.sameOrigin = true;
    return transport.enabled(iframeInfo) && IframeTransport.enabled();
  };

  IframeWrapTransport.transportName = 'iframe-' + transport.transportName;
  IframeWrapTransport.needBody = true;
  IframeWrapTransport.roundTrips = IframeTransport.roundTrips + transport.roundTrips - 1; // html, javascript (2) + transport - no CORS (1)

  IframeWrapTransport.facadeTransport = transport;

  return IframeWrapTransport;
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../utils/object":49,"../iframe":22,"inherits":57}],27:[function(require,module,exports){
(function (process){
'use strict';

var inherits = require('inherits')
  , EventEmitter = require('events').EventEmitter
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:polling');
}

function Polling(Receiver, receiveUrl, AjaxObject) {
  debug(receiveUrl);
  EventEmitter.call(this);
  this.Receiver = Receiver;
  this.receiveUrl = receiveUrl;
  this.AjaxObject = AjaxObject;
  this._scheduleReceiver();
}

inherits(Polling, EventEmitter);

Polling.prototype._scheduleReceiver = function() {
  debug('_scheduleReceiver');
  var self = this;
  var poll = this.poll = new this.Receiver(this.receiveUrl, this.AjaxObject);

  poll.on('message', function(msg) {
    debug('message', msg);
    self.emit('message', msg);
  });

  poll.once('close', function(code, reason) {
    debug('close', code, reason, self.pollIsClosing);
    self.poll = poll = null;

    if (!self.pollIsClosing) {
      if (reason === 'network') {
        self._scheduleReceiver();
      } else {
        self.emit('close', code || 1006, reason);
        self.removeAllListeners();
      }
    }
  });
};

Polling.prototype.abort = function() {
  debug('abort');
  this.removeAllListeners();
  this.pollIsClosing = true;
  if (this.poll) {
    this.poll.abort();
  }
};

module.exports = Polling;

}).call(this,{ env: {} })

},{"debug":55,"events":3,"inherits":57}],28:[function(require,module,exports){
(function (process){
'use strict';

var inherits = require('inherits')
  , urlUtils = require('../../utils/url')
  , BufferedSender = require('./buffered-sender')
  , Polling = require('./polling')
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:sender-receiver');
}

function SenderReceiver(transUrl, urlSuffix, senderFunc, Receiver, AjaxObject) {
  var pollUrl = urlUtils.addPath(transUrl, urlSuffix);
  debug(pollUrl);
  var self = this;
  BufferedSender.call(this, transUrl, senderFunc);

  this.poll = new Polling(Receiver, pollUrl, AjaxObject);
  this.poll.on('message', function(msg) {
    debug('poll message', msg);
    self.emit('message', msg);
  });
  this.poll.once('close', function(code, reason) {
    debug('poll close', code, reason);
    self.poll = null;
    self.emit('close', code, reason);
    self.close();
  });
}

inherits(SenderReceiver, BufferedSender);

SenderReceiver.prototype.close = function() {
  BufferedSender.prototype.close.call(this);
  debug('close');
  this.removeAllListeners();
  if (this.poll) {
    this.poll.abort();
    this.poll = null;
  }
};

module.exports = SenderReceiver;

}).call(this,{ env: {} })

},{"../../utils/url":52,"./buffered-sender":25,"./polling":27,"debug":55,"inherits":57}],29:[function(require,module,exports){
(function (process){
'use strict';

var inherits = require('inherits')
  , EventEmitter = require('events').EventEmitter
  , EventSourceDriver = require('eventsource')
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:receiver:eventsource');
}

function EventSourceReceiver(url) {
  debug(url);
  EventEmitter.call(this);

  var self = this;
  var es = this.es = new EventSourceDriver(url);
  es.onmessage = function(e) {
    debug('message', e.data);
    self.emit('message', decodeURI(e.data));
  };
  es.onerror = function(e) {
    debug('error', es.readyState, e);
    // ES on reconnection has readyState = 0 or 1.
    // on network error it's CLOSED = 2
    var reason = (es.readyState !== 2 ? 'network' : 'permanent');
    self._cleanup();
    self._close(reason);
  };
}

inherits(EventSourceReceiver, EventEmitter);

EventSourceReceiver.prototype.abort = function() {
  debug('abort');
  this._cleanup();
  this._close('user');
};

EventSourceReceiver.prototype._cleanup = function() {
  debug('cleanup');
  var es = this.es;
  if (es) {
    es.onmessage = es.onerror = null;
    es.close();
    this.es = null;
  }
};

EventSourceReceiver.prototype._close = function(reason) {
  debug('close', reason);
  var self = this;
  // Safari and chrome < 15 crash if we close window before
  // waiting for ES cleanup. See:
  // https://code.google.com/p/chromium/issues/detail?id=89155
  setTimeout(function() {
    self.emit('close', null, reason);
    self.removeAllListeners();
  }, 200);
};

module.exports = EventSourceReceiver;

}).call(this,{ env: {} })

},{"debug":55,"events":3,"eventsource":18,"inherits":57}],30:[function(require,module,exports){
(function (process,global){
'use strict';

var inherits = require('inherits')
  , iframeUtils = require('../../utils/iframe')
  , urlUtils = require('../../utils/url')
  , EventEmitter = require('events').EventEmitter
  , random = require('../../utils/random')
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:receiver:htmlfile');
}

function HtmlfileReceiver(url) {
  debug(url);
  EventEmitter.call(this);
  var self = this;
  iframeUtils.polluteGlobalNamespace();

  this.id = 'a' + random.string(6);
  url = urlUtils.addQuery(url, 'c=' + decodeURIComponent(iframeUtils.WPrefix + '.' + this.id));

  debug('using htmlfile', HtmlfileReceiver.htmlfileEnabled);
  var constructFunc = HtmlfileReceiver.htmlfileEnabled ?
      iframeUtils.createHtmlfile : iframeUtils.createIframe;

  global[iframeUtils.WPrefix][this.id] = {
    start: function() {
      debug('start');
      self.iframeObj.loaded();
    }
  , message: function(data) {
      debug('message', data);
      self.emit('message', data);
    }
  , stop: function() {
      debug('stop');
      self._cleanup();
      self._close('network');
    }
  };
  this.iframeObj = constructFunc(url, function() {
    debug('callback');
    self._cleanup();
    self._close('permanent');
  });
}

inherits(HtmlfileReceiver, EventEmitter);

HtmlfileReceiver.prototype.abort = function() {
  debug('abort');
  this._cleanup();
  this._close('user');
};

HtmlfileReceiver.prototype._cleanup = function() {
  debug('_cleanup');
  if (this.iframeObj) {
    this.iframeObj.cleanup();
    this.iframeObj = null;
  }
  delete global[iframeUtils.WPrefix][this.id];
};

HtmlfileReceiver.prototype._close = function(reason) {
  debug('_close', reason);
  this.emit('close', null, reason);
  this.removeAllListeners();
};

HtmlfileReceiver.htmlfileEnabled = false;

// obfuscate to avoid firewalls
var axo = ['Active'].concat('Object').join('X');
if (axo in global) {
  try {
    HtmlfileReceiver.htmlfileEnabled = !!new global[axo]('htmlfile');
  } catch (x) {
    // intentionally empty
  }
}

HtmlfileReceiver.enabled = HtmlfileReceiver.htmlfileEnabled || iframeUtils.iframeEnabled;

module.exports = HtmlfileReceiver;

}).call(this,{ env: {} },typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../utils/iframe":47,"../../utils/random":50,"../../utils/url":52,"debug":55,"events":3,"inherits":57}],31:[function(require,module,exports){
(function (process,global){
'use strict';

var utils = require('../../utils/iframe')
  , random = require('../../utils/random')
  , browser = require('../../utils/browser')
  , urlUtils = require('../../utils/url')
  , inherits = require('inherits')
  , EventEmitter = require('events').EventEmitter
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:receiver:jsonp');
}

function JsonpReceiver(url) {
  debug(url);
  var self = this;
  EventEmitter.call(this);

  utils.polluteGlobalNamespace();

  this.id = 'a' + random.string(6);
  var urlWithId = urlUtils.addQuery(url, 'c=' + encodeURIComponent(utils.WPrefix + '.' + this.id));

  global[utils.WPrefix][this.id] = this._callback.bind(this);
  this._createScript(urlWithId);

  // Fallback mostly for Konqueror - stupid timer, 35 seconds shall be plenty.
  this.timeoutId = setTimeout(function() {
    debug('timeout');
    self._abort(new Error('JSONP script loaded abnormally (timeout)'));
  }, JsonpReceiver.timeout);
}

inherits(JsonpReceiver, EventEmitter);

JsonpReceiver.prototype.abort = function() {
  debug('abort');
  if (global[utils.WPrefix][this.id]) {
    var err = new Error('JSONP user aborted read');
    err.code = 1000;
    this._abort(err);
  }
};

JsonpReceiver.timeout = 35000;
JsonpReceiver.scriptErrorTimeout = 1000;

JsonpReceiver.prototype._callback = function(data) {
  debug('_callback', data);
  this._cleanup();

  if (this.aborting) {
    return;
  }

  if (data) {
    debug('message', data);
    this.emit('message', data);
  }
  this.emit('close', null, 'network');
  this.removeAllListeners();
};

JsonpReceiver.prototype._abort = function(err) {
  debug('_abort', err);
  this._cleanup();
  this.aborting = true;
  this.emit('close', err.code, err.message);
  this.removeAllListeners();
};

JsonpReceiver.prototype._cleanup = function() {
  debug('_cleanup');
  clearTimeout(this.timeoutId);
  if (this.script2) {
    this.script2.parentNode.removeChild(this.script2);
    this.script2 = null;
  }
  if (this.script) {
    var script = this.script;
    // Unfortunately, you can't really abort script loading of
    // the script.
    script.parentNode.removeChild(script);
    script.onreadystatechange = script.onerror =
        script.onload = script.onclick = null;
    this.script = null;
  }
  delete global[utils.WPrefix][this.id];
};

JsonpReceiver.prototype._scriptError = function() {
  debug('_scriptError');
  var self = this;
  if (this.errorTimer) {
    return;
  }

  this.errorTimer = setTimeout(function() {
    if (!self.loadedOkay) {
      self._abort(new Error('JSONP script loaded abnormally (onerror)'));
    }
  }, JsonpReceiver.scriptErrorTimeout);
};

JsonpReceiver.prototype._createScript = function(url) {
  debug('_createScript', url);
  var self = this;
  var script = this.script = global.document.createElement('script');
  var script2;  // Opera synchronous load trick.

  script.id = 'a' + random.string(8);
  script.src = url;
  script.type = 'text/javascript';
  script.charset = 'UTF-8';
  script.onerror = this._scriptError.bind(this);
  script.onload = function() {
    debug('onload');
    self._abort(new Error('JSONP script loaded abnormally (onload)'));
  };

  // IE9 fires 'error' event after onreadystatechange or before, in random order.
  // Use loadedOkay to determine if actually errored
  script.onreadystatechange = function() {
    debug('onreadystatechange', script.readyState);
    if (/loaded|closed/.test(script.readyState)) {
      if (script && script.htmlFor && script.onclick) {
        self.loadedOkay = true;
        try {
          // In IE, actually execute the script.
          script.onclick();
        } catch (x) {
          // intentionally empty
        }
      }
      if (script) {
        self._abort(new Error('JSONP script loaded abnormally (onreadystatechange)'));
      }
    }
  };
  // IE: event/htmlFor/onclick trick.
  // One can't rely on proper order for onreadystatechange. In order to
  // make sure, set a 'htmlFor' and 'event' properties, so that
  // script code will be installed as 'onclick' handler for the
  // script object. Later, onreadystatechange, manually execute this
  // code. FF and Chrome doesn't work with 'event' and 'htmlFor'
  // set. For reference see:
  //   http://jaubourg.net/2010/07/loading-script-as-onclick-handler-of.html
  // Also, read on that about script ordering:
  //   http://wiki.whatwg.org/wiki/Dynamic_Script_Execution_Order
  if (typeof script.async === 'undefined' && global.document.attachEvent) {
    // According to mozilla docs, in recent browsers script.async defaults
    // to 'true', so we may use it to detect a good browser:
    // https://developer.mozilla.org/en/HTML/Element/script
    if (!browser.isOpera()) {
      // Naively assume we're in IE
      try {
        script.htmlFor = script.id;
        script.event = 'onclick';
      } catch (x) {
        // intentionally empty
      }
      script.async = true;
    } else {
      // Opera, second sync script hack
      script2 = this.script2 = global.document.createElement('script');
      script2.text = "try{var a = document.getElementById('" + script.id + "'); if(a)a.onerror();}catch(x){};";
      script.async = script2.async = false;
    }
  }
  if (typeof script.async !== 'undefined') {
    script.async = true;
  }

  var head = global.document.getElementsByTagName('head')[0];
  head.insertBefore(script, head.firstChild);
  if (script2) {
    head.insertBefore(script2, head.firstChild);
  }
};

module.exports = JsonpReceiver;

}).call(this,{ env: {} },typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../utils/browser":44,"../../utils/iframe":47,"../../utils/random":50,"../../utils/url":52,"debug":55,"events":3,"inherits":57}],32:[function(require,module,exports){
(function (process){
'use strict';

var inherits = require('inherits')
  , EventEmitter = require('events').EventEmitter
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:receiver:xhr');
}

function XhrReceiver(url, AjaxObject) {
  debug(url);
  EventEmitter.call(this);
  var self = this;

  this.bufferPosition = 0;

  this.xo = new AjaxObject('POST', url, null);
  this.xo.on('chunk', this._chunkHandler.bind(this));
  this.xo.once('finish', function(status, text) {
    debug('finish', status, text);
    self._chunkHandler(status, text);
    self.xo = null;
    var reason = status === 200 ? 'network' : 'permanent';
    debug('close', reason);
    self.emit('close', null, reason);
    self._cleanup();
  });
}

inherits(XhrReceiver, EventEmitter);

XhrReceiver.prototype._chunkHandler = function(status, text) {
  debug('_chunkHandler', status);
  if (status !== 200 || !text) {
    return;
  }

  for (var idx = -1; ; this.bufferPosition += idx + 1) {
    var buf = text.slice(this.bufferPosition);
    idx = buf.indexOf('\n');
    if (idx === -1) {
      break;
    }
    var msg = buf.slice(0, idx);
    if (msg) {
      debug('message', msg);
      this.emit('message', msg);
    }
  }
};

XhrReceiver.prototype._cleanup = function() {
  debug('_cleanup');
  this.removeAllListeners();
};

XhrReceiver.prototype.abort = function() {
  debug('abort');
  if (this.xo) {
    this.xo.close();
    debug('close');
    this.emit('close', null, 'user');
    this.xo = null;
  }
  this._cleanup();
};

module.exports = XhrReceiver;

}).call(this,{ env: {} })

},{"debug":55,"events":3,"inherits":57}],33:[function(require,module,exports){
(function (process,global){
'use strict';

var random = require('../../utils/random')
  , urlUtils = require('../../utils/url')
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:sender:jsonp');
}

var form, area;

function createIframe(id) {
  debug('createIframe', id);
  try {
    // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
    return global.document.createElement('<iframe name="' + id + '">');
  } catch (x) {
    var iframe = global.document.createElement('iframe');
    iframe.name = id;
    return iframe;
  }
}

function createForm() {
  debug('createForm');
  form = global.document.createElement('form');
  form.style.display = 'none';
  form.style.position = 'absolute';
  form.method = 'POST';
  form.enctype = 'application/x-www-form-urlencoded';
  form.acceptCharset = 'UTF-8';

  area = global.document.createElement('textarea');
  area.name = 'd';
  form.appendChild(area);

  global.document.body.appendChild(form);
}

module.exports = function(url, payload, callback) {
  debug(url, payload);
  if (!form) {
    createForm();
  }
  var id = 'a' + random.string(8);
  form.target = id;
  form.action = urlUtils.addQuery(urlUtils.addPath(url, '/jsonp_send'), 'i=' + id);

  var iframe = createIframe(id);
  iframe.id = id;
  iframe.style.display = 'none';
  form.appendChild(iframe);

  try {
    area.value = payload;
  } catch (e) {
    // seriously broken browsers get here
  }
  form.submit();

  var completed = function(err) {
    debug('completed', id, err);
    if (!iframe.onerror) {
      return;
    }
    iframe.onreadystatechange = iframe.onerror = iframe.onload = null;
    // Opera mini doesn't like if we GC iframe
    // immediately, thus this timeout.
    setTimeout(function() {
      debug('cleaning up', id);
      iframe.parentNode.removeChild(iframe);
      iframe = null;
    }, 500);
    area.value = '';
    // It is not possible to detect if the iframe succeeded or
    // failed to submit our form.
    callback(err);
  };
  iframe.onerror = function() {
    debug('onerror', id);
    completed();
  };
  iframe.onload = function() {
    debug('onload', id);
    completed();
  };
  iframe.onreadystatechange = function(e) {
    debug('onreadystatechange', id, iframe.readyState, e);
    if (iframe.readyState === 'complete') {
      completed();
    }
  };
  return function() {
    debug('aborted', id);
    completed(new Error('Aborted'));
  };
};

}).call(this,{ env: {} },typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../utils/random":50,"../../utils/url":52,"debug":55}],34:[function(require,module,exports){
(function (process,global){
'use strict';

var EventEmitter = require('events').EventEmitter
  , inherits = require('inherits')
  , eventUtils = require('../../utils/event')
  , browser = require('../../utils/browser')
  , urlUtils = require('../../utils/url')
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:sender:xdr');
}

// References:
//   http://ajaxian.com/archives/100-line-ajax-wrapper
//   http://msdn.microsoft.com/en-us/library/cc288060(v=VS.85).aspx

function XDRObject(method, url, payload) {
  debug(method, url);
  var self = this;
  EventEmitter.call(this);

  setTimeout(function() {
    self._start(method, url, payload);
  }, 0);
}

inherits(XDRObject, EventEmitter);

XDRObject.prototype._start = function(method, url, payload) {
  debug('_start');
  var self = this;
  var xdr = new global.XDomainRequest();
  // IE caches even POSTs
  url = urlUtils.addQuery(url, 't=' + (+new Date()));

  xdr.onerror = function() {
    debug('onerror');
    self._error();
  };
  xdr.ontimeout = function() {
    debug('ontimeout');
    self._error();
  };
  xdr.onprogress = function() {
    debug('progress', xdr.responseText);
    self.emit('chunk', 200, xdr.responseText);
  };
  xdr.onload = function() {
    debug('load');
    self.emit('finish', 200, xdr.responseText);
    self._cleanup(false);
  };
  this.xdr = xdr;
  this.unloadRef = eventUtils.unloadAdd(function() {
    self._cleanup(true);
  });
  try {
    // Fails with AccessDenied if port number is bogus
    this.xdr.open(method, url);
    if (this.timeout) {
      this.xdr.timeout = this.timeout;
    }
    this.xdr.send(payload);
  } catch (x) {
    this._error();
  }
};

XDRObject.prototype._error = function() {
  this.emit('finish', 0, '');
  this._cleanup(false);
};

XDRObject.prototype._cleanup = function(abort) {
  debug('cleanup', abort);
  if (!this.xdr) {
    return;
  }
  this.removeAllListeners();
  eventUtils.unloadDel(this.unloadRef);

  this.xdr.ontimeout = this.xdr.onerror = this.xdr.onprogress = this.xdr.onload = null;
  if (abort) {
    try {
      this.xdr.abort();
    } catch (x) {
      // intentionally empty
    }
  }
  this.unloadRef = this.xdr = null;
};

XDRObject.prototype.close = function() {
  debug('close');
  this._cleanup(true);
};

// IE 8/9 if the request target uses the same scheme - #79
XDRObject.enabled = !!(global.XDomainRequest && browser.hasDomain());

module.exports = XDRObject;

}).call(this,{ env: {} },typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../utils/browser":44,"../../utils/event":46,"../../utils/url":52,"debug":55,"events":3,"inherits":57}],35:[function(require,module,exports){
'use strict';

var inherits = require('inherits')
  , XhrDriver = require('../driver/xhr')
  ;

function XHRCorsObject(method, url, payload, opts) {
  XhrDriver.call(this, method, url, payload, opts);
}

inherits(XHRCorsObject, XhrDriver);

XHRCorsObject.enabled = XhrDriver.enabled && XhrDriver.supportsCORS;

module.exports = XHRCorsObject;

},{"../driver/xhr":17,"inherits":57}],36:[function(require,module,exports){
'use strict';

var EventEmitter = require('events').EventEmitter
  , inherits = require('inherits')
  ;

function XHRFake(/* method, url, payload, opts */) {
  var self = this;
  EventEmitter.call(this);

  this.to = setTimeout(function() {
    self.emit('finish', 200, '{}');
  }, XHRFake.timeout);
}

inherits(XHRFake, EventEmitter);

XHRFake.prototype.close = function() {
  clearTimeout(this.to);
};

XHRFake.timeout = 2000;

module.exports = XHRFake;

},{"events":3,"inherits":57}],37:[function(require,module,exports){
'use strict';

var inherits = require('inherits')
  , XhrDriver = require('../driver/xhr')
  ;

function XHRLocalObject(method, url, payload /*, opts */) {
  XhrDriver.call(this, method, url, payload, {
    noCredentials: true
  });
}

inherits(XHRLocalObject, XhrDriver);

XHRLocalObject.enabled = XhrDriver.enabled;

module.exports = XHRLocalObject;

},{"../driver/xhr":17,"inherits":57}],38:[function(require,module,exports){
(function (process){
'use strict';

var utils = require('../utils/event')
  , urlUtils = require('../utils/url')
  , inherits = require('inherits')
  , EventEmitter = require('events').EventEmitter
  , WebsocketDriver = require('./driver/websocket')
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:websocket');
}

function WebSocketTransport(transUrl, ignore, options) {
  if (!WebSocketTransport.enabled()) {
    throw new Error('Transport created when disabled');
  }

  EventEmitter.call(this);
  debug('constructor', transUrl);

  var self = this;
  var url = urlUtils.addPath(transUrl, '/websocket');
  if (url.slice(0, 5) === 'https') {
    url = 'wss' + url.slice(5);
  } else {
    url = 'ws' + url.slice(4);
  }
  this.url = url;

  this.ws = new WebsocketDriver(this.url, [], options);
  this.ws.onmessage = function(e) {
    debug('message event', e.data);
    self.emit('message', e.data);
  };
  // Firefox has an interesting bug. If a websocket connection is
  // created after onunload, it stays alive even when user
  // navigates away from the page. In such situation let's lie -
  // let's not open the ws connection at all. See:
  // https://github.com/sockjs/sockjs-client/issues/28
  // https://bugzilla.mozilla.org/show_bug.cgi?id=696085
  this.unloadRef = utils.unloadAdd(function() {
    debug('unload');
    self.ws.close();
  });
  this.ws.onclose = function(e) {
    debug('close event', e.code, e.reason);
    self.emit('close', e.code, e.reason);
    self._cleanup();
  };
  this.ws.onerror = function(e) {
    debug('error event', e);
    self.emit('close', 1006, 'WebSocket connection broken');
    self._cleanup();
  };
}

inherits(WebSocketTransport, EventEmitter);

WebSocketTransport.prototype.send = function(data) {
  var msg = '[' + data + ']';
  debug('send', msg);
  this.ws.send(msg);
};

WebSocketTransport.prototype.close = function() {
  debug('close');
  var ws = this.ws;
  this._cleanup();
  if (ws) {
    ws.close();
  }
};

WebSocketTransport.prototype._cleanup = function() {
  debug('_cleanup');
  var ws = this.ws;
  if (ws) {
    ws.onmessage = ws.onclose = ws.onerror = null;
  }
  utils.unloadDel(this.unloadRef);
  this.unloadRef = this.ws = null;
  this.removeAllListeners();
};

WebSocketTransport.enabled = function() {
  debug('enabled');
  return !!WebsocketDriver;
};
WebSocketTransport.transportName = 'websocket';

// In theory, ws should require 1 round trip. But in chrome, this is
// not very stable over SSL. Most likely a ws connection requires a
// separate SSL connection, in which case 2 round trips are an
// absolute minumum.
WebSocketTransport.roundTrips = 2;

module.exports = WebSocketTransport;

}).call(this,{ env: {} })

},{"../utils/event":46,"../utils/url":52,"./driver/websocket":19,"debug":55,"events":3,"inherits":57}],39:[function(require,module,exports){
'use strict';

var inherits = require('inherits')
  , AjaxBasedTransport = require('./lib/ajax-based')
  , XdrStreamingTransport = require('./xdr-streaming')
  , XhrReceiver = require('./receiver/xhr')
  , XDRObject = require('./sender/xdr')
  ;

function XdrPollingTransport(transUrl) {
  if (!XDRObject.enabled) {
    throw new Error('Transport created when disabled');
  }
  AjaxBasedTransport.call(this, transUrl, '/xhr', XhrReceiver, XDRObject);
}

inherits(XdrPollingTransport, AjaxBasedTransport);

XdrPollingTransport.enabled = XdrStreamingTransport.enabled;
XdrPollingTransport.transportName = 'xdr-polling';
XdrPollingTransport.roundTrips = 2; // preflight, ajax

module.exports = XdrPollingTransport;

},{"./lib/ajax-based":24,"./receiver/xhr":32,"./sender/xdr":34,"./xdr-streaming":40,"inherits":57}],40:[function(require,module,exports){
'use strict';

var inherits = require('inherits')
  , AjaxBasedTransport = require('./lib/ajax-based')
  , XhrReceiver = require('./receiver/xhr')
  , XDRObject = require('./sender/xdr')
  ;

// According to:
//   http://stackoverflow.com/questions/1641507/detect-browser-support-for-cross-domain-xmlhttprequests
//   http://hacks.mozilla.org/2009/07/cross-site-xmlhttprequest-with-cors/

function XdrStreamingTransport(transUrl) {
  if (!XDRObject.enabled) {
    throw new Error('Transport created when disabled');
  }
  AjaxBasedTransport.call(this, transUrl, '/xhr_streaming', XhrReceiver, XDRObject);
}

inherits(XdrStreamingTransport, AjaxBasedTransport);

XdrStreamingTransport.enabled = function(info) {
  if (info.cookie_needed || info.nullOrigin) {
    return false;
  }
  return XDRObject.enabled && info.sameScheme;
};

XdrStreamingTransport.transportName = 'xdr-streaming';
XdrStreamingTransport.roundTrips = 2; // preflight, ajax

module.exports = XdrStreamingTransport;

},{"./lib/ajax-based":24,"./receiver/xhr":32,"./sender/xdr":34,"inherits":57}],41:[function(require,module,exports){
'use strict';

var inherits = require('inherits')
  , AjaxBasedTransport = require('./lib/ajax-based')
  , XhrReceiver = require('./receiver/xhr')
  , XHRCorsObject = require('./sender/xhr-cors')
  , XHRLocalObject = require('./sender/xhr-local')
  ;

function XhrPollingTransport(transUrl) {
  if (!XHRLocalObject.enabled && !XHRCorsObject.enabled) {
    throw new Error('Transport created when disabled');
  }
  AjaxBasedTransport.call(this, transUrl, '/xhr', XhrReceiver, XHRCorsObject);
}

inherits(XhrPollingTransport, AjaxBasedTransport);

XhrPollingTransport.enabled = function(info) {
  if (info.nullOrigin) {
    return false;
  }

  if (XHRLocalObject.enabled && info.sameOrigin) {
    return true;
  }
  return XHRCorsObject.enabled;
};

XhrPollingTransport.transportName = 'xhr-polling';
XhrPollingTransport.roundTrips = 2; // preflight, ajax

module.exports = XhrPollingTransport;

},{"./lib/ajax-based":24,"./receiver/xhr":32,"./sender/xhr-cors":35,"./sender/xhr-local":37,"inherits":57}],42:[function(require,module,exports){
(function (global){
'use strict';

var inherits = require('inherits')
  , AjaxBasedTransport = require('./lib/ajax-based')
  , XhrReceiver = require('./receiver/xhr')
  , XHRCorsObject = require('./sender/xhr-cors')
  , XHRLocalObject = require('./sender/xhr-local')
  , browser = require('../utils/browser')
  ;

function XhrStreamingTransport(transUrl) {
  if (!XHRLocalObject.enabled && !XHRCorsObject.enabled) {
    throw new Error('Transport created when disabled');
  }
  AjaxBasedTransport.call(this, transUrl, '/xhr_streaming', XhrReceiver, XHRCorsObject);
}

inherits(XhrStreamingTransport, AjaxBasedTransport);

XhrStreamingTransport.enabled = function(info) {
  if (info.nullOrigin) {
    return false;
  }
  // Opera doesn't support xhr-streaming #60
  // But it might be able to #92
  if (browser.isOpera()) {
    return false;
  }

  return XHRCorsObject.enabled;
};

XhrStreamingTransport.transportName = 'xhr-streaming';
XhrStreamingTransport.roundTrips = 2; // preflight, ajax

// Safari gets confused when a streaming ajax request is started
// before onload. This causes the load indicator to spin indefinetely.
// Only require body when used in a browser
XhrStreamingTransport.needBody = !!global.document;

module.exports = XhrStreamingTransport;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../utils/browser":44,"./lib/ajax-based":24,"./receiver/xhr":32,"./sender/xhr-cors":35,"./sender/xhr-local":37,"inherits":57}],43:[function(require,module,exports){
(function (global){
'use strict';

if (global.crypto && global.crypto.getRandomValues) {
  module.exports.randomBytes = function(length) {
    var bytes = new Uint8Array(length);
    global.crypto.getRandomValues(bytes);
    return bytes;
  };
} else {
  module.exports.randomBytes = function(length) {
    var bytes = new Array(length);
    for (var i = 0; i < length; i++) {
      bytes[i] = Math.floor(Math.random() * 256);
    }
    return bytes;
  };
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],44:[function(require,module,exports){
(function (global){
'use strict';

module.exports = {
  isOpera: function() {
    return global.navigator &&
      /opera/i.test(global.navigator.userAgent);
  }

, isKonqueror: function() {
    return global.navigator &&
      /konqueror/i.test(global.navigator.userAgent);
  }

  // #187 wrap document.domain in try/catch because of WP8 from file:///
, hasDomain: function () {
    // non-browser client always has a domain
    if (!global.document) {
      return true;
    }

    try {
      return !!global.document.domain;
    } catch (e) {
      return false;
    }
  }
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],45:[function(require,module,exports){
'use strict';

var JSON3 = require('json3');

// Some extra characters that Chrome gets wrong, and substitutes with
// something else on the wire.
// eslint-disable-next-line no-control-regex
var extraEscapable = /[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g
  , extraLookup;

// This may be quite slow, so let's delay until user actually uses bad
// characters.
var unrollLookup = function(escapable) {
  var i;
  var unrolled = {};
  var c = [];
  for (i = 0; i < 65536; i++) {
    c.push( String.fromCharCode(i) );
  }
  escapable.lastIndex = 0;
  c.join('').replace(escapable, function(a) {
    unrolled[ a ] = '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
    return '';
  });
  escapable.lastIndex = 0;
  return unrolled;
};

// Quote string, also taking care of unicode characters that browsers
// often break. Especially, take care of unicode surrogates:
// http://en.wikipedia.org/wiki/Mapping_of_Unicode_characters#Surrogates
module.exports = {
  quote: function(string) {
    var quoted = JSON3.stringify(string);

    // In most cases this should be very fast and good enough.
    extraEscapable.lastIndex = 0;
    if (!extraEscapable.test(quoted)) {
      return quoted;
    }

    if (!extraLookup) {
      extraLookup = unrollLookup(extraEscapable);
    }

    return quoted.replace(extraEscapable, function(a) {
      return extraLookup[a];
    });
  }
};

},{"json3":58}],46:[function(require,module,exports){
(function (global){
'use strict';

var random = require('./random');

var onUnload = {}
  , afterUnload = false
    // detect google chrome packaged apps because they don't allow the 'unload' event
  , isChromePackagedApp = global.chrome && global.chrome.app && global.chrome.app.runtime
  ;

module.exports = {
  attachEvent: function(event, listener) {
    if (typeof global.addEventListener !== 'undefined') {
      global.addEventListener(event, listener, false);
    } else if (global.document && global.attachEvent) {
      // IE quirks.
      // According to: http://stevesouders.com/misc/test-postmessage.php
      // the message gets delivered only to 'document', not 'window'.
      global.document.attachEvent('on' + event, listener);
      // I get 'window' for ie8.
      global.attachEvent('on' + event, listener);
    }
  }

, detachEvent: function(event, listener) {
    if (typeof global.addEventListener !== 'undefined') {
      global.removeEventListener(event, listener, false);
    } else if (global.document && global.detachEvent) {
      global.document.detachEvent('on' + event, listener);
      global.detachEvent('on' + event, listener);
    }
  }

, unloadAdd: function(listener) {
    if (isChromePackagedApp) {
      return null;
    }

    var ref = random.string(8);
    onUnload[ref] = listener;
    if (afterUnload) {
      setTimeout(this.triggerUnloadCallbacks, 0);
    }
    return ref;
  }

, unloadDel: function(ref) {
    if (ref in onUnload) {
      delete onUnload[ref];
    }
  }

, triggerUnloadCallbacks: function() {
    for (var ref in onUnload) {
      onUnload[ref]();
      delete onUnload[ref];
    }
  }
};

var unloadTriggered = function() {
  if (afterUnload) {
    return;
  }
  afterUnload = true;
  module.exports.triggerUnloadCallbacks();
};

// 'unload' alone is not reliable in opera within an iframe, but we
// can't use `beforeunload` as IE fires it on javascript: links.
if (!isChromePackagedApp) {
  module.exports.attachEvent('unload', unloadTriggered);
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./random":50}],47:[function(require,module,exports){
(function (process,global){
'use strict';

var eventUtils = require('./event')
  , JSON3 = require('json3')
  , browser = require('./browser')
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:utils:iframe');
}

module.exports = {
  WPrefix: '_jp'
, currentWindowId: null

, polluteGlobalNamespace: function() {
    if (!(module.exports.WPrefix in global)) {
      global[module.exports.WPrefix] = {};
    }
  }

, postMessage: function(type, data) {
    if (global.parent !== global) {
      global.parent.postMessage(JSON3.stringify({
        windowId: module.exports.currentWindowId
      , type: type
      , data: data || ''
      }), '*');
    } else {
      debug('Cannot postMessage, no parent window.', type, data);
    }
  }

, createIframe: function(iframeUrl, errorCallback) {
    var iframe = global.document.createElement('iframe');
    var tref, unloadRef;
    var unattach = function() {
      debug('unattach');
      clearTimeout(tref);
      // Explorer had problems with that.
      try {
        iframe.onload = null;
      } catch (x) {
        // intentionally empty
      }
      iframe.onerror = null;
    };
    var cleanup = function() {
      debug('cleanup');
      if (iframe) {
        unattach();
        // This timeout makes chrome fire onbeforeunload event
        // within iframe. Without the timeout it goes straight to
        // onunload.
        setTimeout(function() {
          if (iframe) {
            iframe.parentNode.removeChild(iframe);
          }
          iframe = null;
        }, 0);
        eventUtils.unloadDel(unloadRef);
      }
    };
    var onerror = function(err) {
      debug('onerror', err);
      if (iframe) {
        cleanup();
        errorCallback(err);
      }
    };
    var post = function(msg, origin) {
      debug('post', msg, origin);
      setTimeout(function() {
        try {
          // When the iframe is not loaded, IE raises an exception
          // on 'contentWindow'.
          if (iframe && iframe.contentWindow) {
            iframe.contentWindow.postMessage(msg, origin);
          }
        } catch (x) {
          // intentionally empty
        }
      }, 0);
    };

    iframe.src = iframeUrl;
    iframe.style.display = 'none';
    iframe.style.position = 'absolute';
    iframe.onerror = function() {
      onerror('onerror');
    };
    iframe.onload = function() {
      debug('onload');
      // `onload` is triggered before scripts on the iframe are
      // executed. Give it few seconds to actually load stuff.
      clearTimeout(tref);
      tref = setTimeout(function() {
        onerror('onload timeout');
      }, 2000);
    };
    global.document.body.appendChild(iframe);
    tref = setTimeout(function() {
      onerror('timeout');
    }, 15000);
    unloadRef = eventUtils.unloadAdd(cleanup);
    return {
      post: post
    , cleanup: cleanup
    , loaded: unattach
    };
  }

/* eslint no-undef: "off", new-cap: "off" */
, createHtmlfile: function(iframeUrl, errorCallback) {
    var axo = ['Active'].concat('Object').join('X');
    var doc = new global[axo]('htmlfile');
    var tref, unloadRef;
    var iframe;
    var unattach = function() {
      clearTimeout(tref);
      iframe.onerror = null;
    };
    var cleanup = function() {
      if (doc) {
        unattach();
        eventUtils.unloadDel(unloadRef);
        iframe.parentNode.removeChild(iframe);
        iframe = doc = null;
        CollectGarbage();
      }
    };
    var onerror = function(r) {
      debug('onerror', r);
      if (doc) {
        cleanup();
        errorCallback(r);
      }
    };
    var post = function(msg, origin) {
      try {
        // When the iframe is not loaded, IE raises an exception
        // on 'contentWindow'.
        setTimeout(function() {
          if (iframe && iframe.contentWindow) {
              iframe.contentWindow.postMessage(msg, origin);
          }
        }, 0);
      } catch (x) {
        // intentionally empty
      }
    };

    doc.open();
    doc.write('<html><s' + 'cript>' +
              'document.domain="' + global.document.domain + '";' +
              '</s' + 'cript></html>');
    doc.close();
    doc.parentWindow[module.exports.WPrefix] = global[module.exports.WPrefix];
    var c = doc.createElement('div');
    doc.body.appendChild(c);
    iframe = doc.createElement('iframe');
    c.appendChild(iframe);
    iframe.src = iframeUrl;
    iframe.onerror = function() {
      onerror('onerror');
    };
    tref = setTimeout(function() {
      onerror('timeout');
    }, 15000);
    unloadRef = eventUtils.unloadAdd(cleanup);
    return {
      post: post
    , cleanup: cleanup
    , loaded: unattach
    };
  }
};

module.exports.iframeEnabled = false;
if (global.document) {
  // postMessage misbehaves in konqueror 4.6.5 - the messages are delivered with
  // huge delay, or not at all.
  module.exports.iframeEnabled = (typeof global.postMessage === 'function' ||
    typeof global.postMessage === 'object') && (!browser.isKonqueror());
}

}).call(this,{ env: {} },typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./browser":44,"./event":46,"debug":55,"json3":58}],48:[function(require,module,exports){
(function (global){
'use strict';

var logObject = {};
['log', 'debug', 'warn'].forEach(function (level) {
  var levelExists;

  try {
    levelExists = global.console && global.console[level] && global.console[level].apply;
  } catch(e) {
    // do nothing
  }

  logObject[level] = levelExists ? function () {
    return global.console[level].apply(global.console, arguments);
  } : (level === 'log' ? function () {} : logObject.log);
});

module.exports = logObject;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],49:[function(require,module,exports){
'use strict';

module.exports = {
  isObject: function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }

, extend: function(obj) {
    if (!this.isObject(obj)) {
      return obj;
    }
    var source, prop;
    for (var i = 1, length = arguments.length; i < length; i++) {
      source = arguments[i];
      for (prop in source) {
        if (Object.prototype.hasOwnProperty.call(source, prop)) {
          obj[prop] = source[prop];
        }
      }
    }
    return obj;
  }
};

},{}],50:[function(require,module,exports){
'use strict';

/* global crypto:true */
var crypto = require('crypto');

// This string has length 32, a power of 2, so the modulus doesn't introduce a
// bias.
var _randomStringChars = 'abcdefghijklmnopqrstuvwxyz012345';
module.exports = {
  string: function(length) {
    var max = _randomStringChars.length;
    var bytes = crypto.randomBytes(length);
    var ret = [];
    for (var i = 0; i < length; i++) {
      ret.push(_randomStringChars.substr(bytes[i] % max, 1));
    }
    return ret.join('');
  }

, number: function(max) {
    return Math.floor(Math.random() * max);
  }

, numberString: function(max) {
    var t = ('' + (max - 1)).length;
    var p = new Array(t + 1).join('0');
    return (p + this.number(max)).slice(-t);
  }
};

},{"crypto":43}],51:[function(require,module,exports){
(function (process){
'use strict';

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:utils:transport');
}

module.exports = function(availableTransports) {
  return {
    filterToEnabled: function(transportsWhitelist, info) {
      var transports = {
        main: []
      , facade: []
      };
      if (!transportsWhitelist) {
        transportsWhitelist = [];
      } else if (typeof transportsWhitelist === 'string') {
        transportsWhitelist = [transportsWhitelist];
      }

      availableTransports.forEach(function(trans) {
        if (!trans) {
          return;
        }

        if (trans.transportName === 'websocket' && info.websocket === false) {
          debug('disabled from server', 'websocket');
          return;
        }

        if (transportsWhitelist.length &&
            transportsWhitelist.indexOf(trans.transportName) === -1) {
          debug('not in whitelist', trans.transportName);
          return;
        }

        if (trans.enabled(info)) {
          debug('enabled', trans.transportName);
          transports.main.push(trans);
          if (trans.facadeTransport) {
            transports.facade.push(trans.facadeTransport);
          }
        } else {
          debug('disabled', trans.transportName);
        }
      });
      return transports;
    }
  };
};

}).call(this,{ env: {} })

},{"debug":55}],52:[function(require,module,exports){
(function (process){
'use strict';

var URL = require('url-parse');

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')('sockjs-client:utils:url');
}

module.exports = {
  getOrigin: function(url) {
    if (!url) {
      return null;
    }

    var p = new URL(url);
    if (p.protocol === 'file:') {
      return null;
    }

    var port = p.port;
    if (!port) {
      port = (p.protocol === 'https:') ? '443' : '80';
    }

    return p.protocol + '//' + p.hostname + ':' + port;
  }

, isOriginEqual: function(a, b) {
    var res = this.getOrigin(a) === this.getOrigin(b);
    debug('same', a, b, res);
    return res;
  }

, isSchemeEqual: function(a, b) {
    return (a.split(':')[0] === b.split(':')[0]);
  }

, addPath: function (url, path) {
    var qs = url.split('?');
    return qs[0] + path + (qs[1] ? '?' + qs[1] : '');
  }

, addQuery: function (url, q) {
    return url + (url.indexOf('?') === -1 ? ('?' + q) : ('&' + q));
  }
};

}).call(this,{ env: {} })

},{"debug":55,"url-parse":61}],53:[function(require,module,exports){
module.exports = '1.4.0';

},{}],54:[function(require,module,exports){
/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}

},{}],55:[function(require,module,exports){
(function (process){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
/**
 * Colors.
 */

exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */
// eslint-disable-next-line complexity

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
    return true;
  } // Internet Explorer and Edge do not support colors.


  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  } // Is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */


function formatArgs(args) {
  args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);

  if (!this.useColors) {
    return;
  }

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit'); // The final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into

  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function (match) {
    if (match === '%%') {
      return;
    }

    index++;

    if (match === '%c') {
      // We only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });
  args.splice(lastC, 0, c);
}
/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */


function log() {
  var _console;

  // This hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return (typeof console === "undefined" ? "undefined" : _typeof(console)) === 'object' && console.log && (_console = console).log.apply(_console, arguments);
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */


function save(namespaces) {
  try {
    if (namespaces) {
      exports.storage.setItem('debug', namespaces);
    } else {
      exports.storage.removeItem('debug');
    }
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */


function load() {
  var r;

  try {
    r = exports.storage.getItem('debug');
  } catch (error) {} // Swallow
  // XXX (@Qix-) should we be logging these?
  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */


function localstorage() {
  try {
    // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
    // The Browser also has localStorage in the global context.
    return localStorage;
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  }
}

module.exports = require('./common')(exports);
var formatters = module.exports.formatters;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (error) {
    return '[UnexpectedJSONParseError]: ' + error.message;
  }
};


}).call(this,{ env: {} })

},{"./common":56}],56:[function(require,module,exports){
"use strict";

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */
function setup(env) {
  createDebug.debug = createDebug;
  createDebug.default = createDebug;
  createDebug.coerce = coerce;
  createDebug.disable = disable;
  createDebug.enable = enable;
  createDebug.enabled = enabled;
  createDebug.humanize = require('ms');
  Object.keys(env).forEach(function (key) {
    createDebug[key] = env[key];
  });
  /**
  * Active `debug` instances.
  */

  createDebug.instances = [];
  /**
  * The currently active debug mode names, and names to skip.
  */

  createDebug.names = [];
  createDebug.skips = [];
  /**
  * Map of special "%n" handling functions, for the debug "format" argument.
  *
  * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
  */

  createDebug.formatters = {};
  /**
  * Selects a color for a debug namespace
  * @param {String} namespace The namespace string for the for the debug instance to be colored
  * @return {Number|String} An ANSI color code for the given namespace
  * @api private
  */

  function selectColor(namespace) {
    var hash = 0;

    for (var i = 0; i < namespace.length; i++) {
      hash = (hash << 5) - hash + namespace.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }

    return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
  }

  createDebug.selectColor = selectColor;
  /**
  * Create a debugger with the given `namespace`.
  *
  * @param {String} namespace
  * @return {Function}
  * @api public
  */

  function createDebug(namespace) {
    var prevTime;

    function debug() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      // Disabled?
      if (!debug.enabled) {
        return;
      }

      var self = debug; // Set `diff` timestamp

      var curr = Number(new Date());
      var ms = curr - (prevTime || curr);
      self.diff = ms;
      self.prev = prevTime;
      self.curr = curr;
      prevTime = curr;
      args[0] = createDebug.coerce(args[0]);

      if (typeof args[0] !== 'string') {
        // Anything else let's inspect with %O
        args.unshift('%O');
      } // Apply any `formatters` transformations


      var index = 0;
      args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
        // If we encounter an escaped % then don't increase the array index
        if (match === '%%') {
          return match;
        }

        index++;
        var formatter = createDebug.formatters[format];

        if (typeof formatter === 'function') {
          var val = args[index];
          match = formatter.call(self, val); // Now we need to remove `args[index]` since it's inlined in the `format`

          args.splice(index, 1);
          index--;
        }

        return match;
      }); // Apply env-specific formatting (colors, etc.)

      createDebug.formatArgs.call(self, args);
      var logFn = self.log || createDebug.log;
      logFn.apply(self, args);
    }

    debug.namespace = namespace;
    debug.enabled = createDebug.enabled(namespace);
    debug.useColors = createDebug.useColors();
    debug.color = selectColor(namespace);
    debug.destroy = destroy;
    debug.extend = extend; // Debug.formatArgs = formatArgs;
    // debug.rawLog = rawLog;
    // env-specific initialization logic for debug instances

    if (typeof createDebug.init === 'function') {
      createDebug.init(debug);
    }

    createDebug.instances.push(debug);
    return debug;
  }

  function destroy() {
    var index = createDebug.instances.indexOf(this);

    if (index !== -1) {
      createDebug.instances.splice(index, 1);
      return true;
    }

    return false;
  }

  function extend(namespace, delimiter) {
    return createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
  }
  /**
  * Enables a debug mode by namespaces. This can include modes
  * separated by a colon and wildcards.
  *
  * @param {String} namespaces
  * @api public
  */


  function enable(namespaces) {
    createDebug.save(namespaces);
    createDebug.names = [];
    createDebug.skips = [];
    var i;
    var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
    var len = split.length;

    for (i = 0; i < len; i++) {
      if (!split[i]) {
        // ignore empty strings
        continue;
      }

      namespaces = split[i].replace(/\*/g, '.*?');

      if (namespaces[0] === '-') {
        createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
      } else {
        createDebug.names.push(new RegExp('^' + namespaces + '$'));
      }
    }

    for (i = 0; i < createDebug.instances.length; i++) {
      var instance = createDebug.instances[i];
      instance.enabled = createDebug.enabled(instance.namespace);
    }
  }
  /**
  * Disable debug output.
  *
  * @api public
  */


  function disable() {
    createDebug.enable('');
  }
  /**
  * Returns true if the given mode name is enabled, false otherwise.
  *
  * @param {String} name
  * @return {Boolean}
  * @api public
  */


  function enabled(name) {
    if (name[name.length - 1] === '*') {
      return true;
    }

    var i;
    var len;

    for (i = 0, len = createDebug.skips.length; i < len; i++) {
      if (createDebug.skips[i].test(name)) {
        return false;
      }
    }

    for (i = 0, len = createDebug.names.length; i < len; i++) {
      if (createDebug.names[i].test(name)) {
        return true;
      }
    }

    return false;
  }
  /**
  * Coerce `val`.
  *
  * @param {Mixed} val
  * @return {Mixed}
  * @api private
  */


  function coerce(val) {
    if (val instanceof Error) {
      return val.stack || val.message;
    }

    return val;
  }

  createDebug.enable(createDebug.load());
  return createDebug;
}

module.exports = setup;


},{"ms":54}],57:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],58:[function(require,module,exports){
(function (global){
/*! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */
;(function () {
  // Detect the `define` function exposed by asynchronous module loaders. The
  // strict `define` check is necessary for compatibility with `r.js`.
  var isLoader = typeof define === "function" && define.amd;

  // A set of types used to distinguish objects from primitives.
  var objectTypes = {
    "function": true,
    "object": true
  };

  // Detect the `exports` object exposed by CommonJS implementations.
  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;

  // Use the `global` object exposed by Node (including Browserify via
  // `insert-module-globals`), Narwhal, and Ringo as the default context,
  // and the `window` object in browsers. Rhino exports a `global` function
  // instead.
  var root = objectTypes[typeof window] && window || this,
      freeGlobal = freeExports && objectTypes[typeof module] && module && !module.nodeType && typeof global == "object" && global;

  if (freeGlobal && (freeGlobal["global"] === freeGlobal || freeGlobal["window"] === freeGlobal || freeGlobal["self"] === freeGlobal)) {
    root = freeGlobal;
  }

  // Public: Initializes JSON 3 using the given `context` object, attaching the
  // `stringify` and `parse` functions to the specified `exports` object.
  function runInContext(context, exports) {
    context || (context = root["Object"]());
    exports || (exports = root["Object"]());

    // Native constructor aliases.
    var Number = context["Number"] || root["Number"],
        String = context["String"] || root["String"],
        Object = context["Object"] || root["Object"],
        Date = context["Date"] || root["Date"],
        SyntaxError = context["SyntaxError"] || root["SyntaxError"],
        TypeError = context["TypeError"] || root["TypeError"],
        Math = context["Math"] || root["Math"],
        nativeJSON = context["JSON"] || root["JSON"];

    // Delegate to the native `stringify` and `parse` implementations.
    if (typeof nativeJSON == "object" && nativeJSON) {
      exports.stringify = nativeJSON.stringify;
      exports.parse = nativeJSON.parse;
    }

    // Convenience aliases.
    var objectProto = Object.prototype,
        getClass = objectProto.toString,
        isProperty, forEach, undef;

    // Test the `Date#getUTC*` methods. Based on work by @Yaffle.
    var isExtended = new Date(-3509827334573292);
    try {
      // The `getUTCFullYear`, `Month`, and `Date` methods return nonsensical
      // results for certain dates in Opera >= 10.53.
      isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 &&
        // Safari < 2.0.2 stores the internal millisecond time value correctly,
        // but clips the values returned by the date methods to the range of
        // signed 32-bit integers ([-2 ** 31, 2 ** 31 - 1]).
        isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708;
    } catch (exception) {}

    // Internal: Determines whether the native `JSON.stringify` and `parse`
    // implementations are spec-compliant. Based on work by Ken Snyder.
    function has(name) {
      if (has[name] !== undef) {
        // Return cached feature test result.
        return has[name];
      }
      var isSupported;
      if (name == "bug-string-char-index") {
        // IE <= 7 doesn't support accessing string characters using square
        // bracket notation. IE 8 only supports this for primitives.
        isSupported = "a"[0] != "a";
      } else if (name == "json") {
        // Indicates whether both `JSON.stringify` and `JSON.parse` are
        // supported.
        isSupported = has("json-stringify") && has("json-parse");
      } else {
        var value, serialized = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
        // Test `JSON.stringify`.
        if (name == "json-stringify") {
          var stringify = exports.stringify, stringifySupported = typeof stringify == "function" && isExtended;
          if (stringifySupported) {
            // A test function object with a custom `toJSON` method.
            (value = function () {
              return 1;
            }).toJSON = value;
            try {
              stringifySupported =
                // Firefox 3.1b1 and b2 serialize string, number, and boolean
                // primitives as object literals.
                stringify(0) === "0" &&
                // FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
                // literals.
                stringify(new Number()) === "0" &&
                stringify(new String()) == '""' &&
                // FF 3.1b1, 2 throw an error if the value is `null`, `undefined`, or
                // does not define a canonical JSON representation (this applies to
                // objects with `toJSON` properties as well, *unless* they are nested
                // within an object or array).
                stringify(getClass) === undef &&
                // IE 8 serializes `undefined` as `"undefined"`. Safari <= 5.1.7 and
                // FF 3.1b3 pass this test.
                stringify(undef) === undef &&
                // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
                // respectively, if the value is omitted entirely.
                stringify() === undef &&
                // FF 3.1b1, 2 throw an error if the given value is not a number,
                // string, array, object, Boolean, or `null` literal. This applies to
                // objects with custom `toJSON` methods as well, unless they are nested
                // inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
                // methods entirely.
                stringify(value) === "1" &&
                stringify([value]) == "[1]" &&
                // Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
                // `"[null]"`.
                stringify([undef]) == "[null]" &&
                // YUI 3.0.0b1 fails to serialize `null` literals.
                stringify(null) == "null" &&
                // FF 3.1b1, 2 halts serialization if an array contains a function:
                // `[1, true, getClass, 1]` serializes as "[1,true,],". FF 3.1b3
                // elides non-JSON values from objects and arrays, unless they
                // define custom `toJSON` methods.
                stringify([undef, getClass, null]) == "[null,null,null]" &&
                // Simple serialization test. FF 3.1b1 uses Unicode escape sequences
                // where character escape codes are expected (e.g., `\b` => `\u0008`).
                stringify({ "a": [value, true, false, null, "\x00\b\n\f\r\t"] }) == serialized &&
                // FF 3.1b1 and b2 ignore the `filter` and `width` arguments.
                stringify(null, value) === "1" &&
                stringify([1, 2], null, 1) == "[\n 1,\n 2\n]" &&
                // JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly
                // serialize extended years.
                stringify(new Date(-8.64e15)) == '"-271821-04-20T00:00:00.000Z"' &&
                // The milliseconds are optional in ES 5, but required in 5.1.
                stringify(new Date(8.64e15)) == '"+275760-09-13T00:00:00.000Z"' &&
                // Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
                // four-digit years instead of six-digit years. Credits: @Yaffle.
                stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' &&
                // Safari <= 5.1.5 and Opera >= 10.53 incorrectly serialize millisecond
                // values less than 1000. Credits: @Yaffle.
                stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
            } catch (exception) {
              stringifySupported = false;
            }
          }
          isSupported = stringifySupported;
        }
        // Test `JSON.parse`.
        if (name == "json-parse") {
          var parse = exports.parse;
          if (typeof parse == "function") {
            try {
              // FF 3.1b1, b2 will throw an exception if a bare literal is provided.
              // Conforming implementations should also coerce the initial argument to
              // a string prior to parsing.
              if (parse("0") === 0 && !parse(false)) {
                // Simple parsing test.
                value = parse(serialized);
                var parseSupported = value["a"].length == 5 && value["a"][0] === 1;
                if (parseSupported) {
                  try {
                    // Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in strings.
                    parseSupported = !parse('"\t"');
                  } catch (exception) {}
                  if (parseSupported) {
                    try {
                      // FF 4.0 and 4.0.1 allow leading `+` signs and leading
                      // decimal points. FF 4.0, 4.0.1, and IE 9-10 also allow
                      // certain octal literals.
                      parseSupported = parse("01") !== 1;
                    } catch (exception) {}
                  }
                  if (parseSupported) {
                    try {
                      // FF 4.0, 4.0.1, and Rhino 1.7R3-R4 allow trailing decimal
                      // points. These environments, along with FF 3.1b1 and 2,
                      // also allow trailing commas in JSON objects and arrays.
                      parseSupported = parse("1.") !== 1;
                    } catch (exception) {}
                  }
                }
              }
            } catch (exception) {
              parseSupported = false;
            }
          }
          isSupported = parseSupported;
        }
      }
      return has[name] = !!isSupported;
    }

    if (!has("json")) {
      // Common `[[Class]]` name aliases.
      var functionClass = "[object Function]",
          dateClass = "[object Date]",
          numberClass = "[object Number]",
          stringClass = "[object String]",
          arrayClass = "[object Array]",
          booleanClass = "[object Boolean]";

      // Detect incomplete support for accessing string characters by index.
      var charIndexBuggy = has("bug-string-char-index");

      // Define additional utility methods if the `Date` methods are buggy.
      if (!isExtended) {
        var floor = Math.floor;
        // A mapping between the months of the year and the number of days between
        // January 1st and the first of the respective month.
        var Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
        // Internal: Calculates the number of days between the Unix epoch and the
        // first day of the given month.
        var getDay = function (year, month) {
          return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
        };
      }

      // Internal: Determines if a property is a direct property of the given
      // object. Delegates to the native `Object#hasOwnProperty` method.
      if (!(isProperty = objectProto.hasOwnProperty)) {
        isProperty = function (property) {
          var members = {}, constructor;
          if ((members.__proto__ = null, members.__proto__ = {
            // The *proto* property cannot be set multiple times in recent
            // versions of Firefox and SeaMonkey.
            "toString": 1
          }, members).toString != getClass) {
            // Safari <= 2.0.3 doesn't implement `Object#hasOwnProperty`, but
            // supports the mutable *proto* property.
            isProperty = function (property) {
              // Capture and break the object's prototype chain (see section 8.6.2
              // of the ES 5.1 spec). The parenthesized expression prevents an
              // unsafe transformation by the Closure Compiler.
              var original = this.__proto__, result = property in (this.__proto__ = null, this);
              // Restore the original prototype chain.
              this.__proto__ = original;
              return result;
            };
          } else {
            // Capture a reference to the top-level `Object` constructor.
            constructor = members.constructor;
            // Use the `constructor` property to simulate `Object#hasOwnProperty` in
            // other environments.
            isProperty = function (property) {
              var parent = (this.constructor || constructor).prototype;
              return property in this && !(property in parent && this[property] === parent[property]);
            };
          }
          members = null;
          return isProperty.call(this, property);
        };
      }

      // Internal: Normalizes the `for...in` iteration algorithm across
      // environments. Each enumerated key is yielded to a `callback` function.
      forEach = function (object, callback) {
        var size = 0, Properties, members, property;

        // Tests for bugs in the current environment's `for...in` algorithm. The
        // `valueOf` property inherits the non-enumerable flag from
        // `Object.prototype` in older versions of IE, Netscape, and Mozilla.
        (Properties = function () {
          this.valueOf = 0;
        }).prototype.valueOf = 0;

        // Iterate over a new instance of the `Properties` class.
        members = new Properties();
        for (property in members) {
          // Ignore all properties inherited from `Object.prototype`.
          if (isProperty.call(members, property)) {
            size++;
          }
        }
        Properties = members = null;

        // Normalize the iteration algorithm.
        if (!size) {
          // A list of non-enumerable properties inherited from `Object.prototype`.
          members = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
          // IE <= 8, Mozilla 1.0, and Netscape 6.2 ignore shadowed non-enumerable
          // properties.
          forEach = function (object, callback) {
            var isFunction = getClass.call(object) == functionClass, property, length;
            var hasProperty = !isFunction && typeof object.constructor != "function" && objectTypes[typeof object.hasOwnProperty] && object.hasOwnProperty || isProperty;
            for (property in object) {
              // Gecko <= 1.0 enumerates the `prototype` property of functions under
              // certain conditions; IE does not.
              if (!(isFunction && property == "prototype") && hasProperty.call(object, property)) {
                callback(property);
              }
            }
            // Manually invoke the callback for each non-enumerable property.
            for (length = members.length; property = members[--length]; hasProperty.call(object, property) && callback(property));
          };
        } else if (size == 2) {
          // Safari <= 2.0.4 enumerates shadowed properties twice.
          forEach = function (object, callback) {
            // Create a set of iterated properties.
            var members = {}, isFunction = getClass.call(object) == functionClass, property;
            for (property in object) {
              // Store each property name to prevent double enumeration. The
              // `prototype` property of functions is not enumerated due to cross-
              // environment inconsistencies.
              if (!(isFunction && property == "prototype") && !isProperty.call(members, property) && (members[property] = 1) && isProperty.call(object, property)) {
                callback(property);
              }
            }
          };
        } else {
          // No bugs detected; use the standard `for...in` algorithm.
          forEach = function (object, callback) {
            var isFunction = getClass.call(object) == functionClass, property, isConstructor;
            for (property in object) {
              if (!(isFunction && property == "prototype") && isProperty.call(object, property) && !(isConstructor = property === "constructor")) {
                callback(property);
              }
            }
            // Manually invoke the callback for the `constructor` property due to
            // cross-environment inconsistencies.
            if (isConstructor || isProperty.call(object, (property = "constructor"))) {
              callback(property);
            }
          };
        }
        return forEach(object, callback);
      };

      // Public: Serializes a JavaScript `value` as a JSON string. The optional
      // `filter` argument may specify either a function that alters how object and
      // array members are serialized, or an array of strings and numbers that
      // indicates which properties should be serialized. The optional `width`
      // argument may be either a string or number that specifies the indentation
      // level of the output.
      if (!has("json-stringify")) {
        // Internal: A map of control characters and their escaped equivalents.
        var Escapes = {
          92: "\\\\",
          34: '\\"',
          8: "\\b",
          12: "\\f",
          10: "\\n",
          13: "\\r",
          9: "\\t"
        };

        // Internal: Converts `value` into a zero-padded string such that its
        // length is at least equal to `width`. The `width` must be <= 6.
        var leadingZeroes = "000000";
        var toPaddedString = function (width, value) {
          // The `|| 0` expression is necessary to work around a bug in
          // Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
          return (leadingZeroes + (value || 0)).slice(-width);
        };

        // Internal: Double-quotes a string `value`, replacing all ASCII control
        // characters (characters with code unit values between 0 and 31) with
        // their escaped equivalents. This is an implementation of the
        // `Quote(value)` operation defined in ES 5.1 section 15.12.3.
        var unicodePrefix = "\\u00";
        var quote = function (value) {
          var result = '"', index = 0, length = value.length, useCharIndex = !charIndexBuggy || length > 10;
          var symbols = useCharIndex && (charIndexBuggy ? value.split("") : value);
          for (; index < length; index++) {
            var charCode = value.charCodeAt(index);
            // If the character is a control character, append its Unicode or
            // shorthand escape sequence; otherwise, append the character as-is.
            switch (charCode) {
              case 8: case 9: case 10: case 12: case 13: case 34: case 92:
                result += Escapes[charCode];
                break;
              default:
                if (charCode < 32) {
                  result += unicodePrefix + toPaddedString(2, charCode.toString(16));
                  break;
                }
                result += useCharIndex ? symbols[index] : value.charAt(index);
            }
          }
          return result + '"';
        };

        // Internal: Recursively serializes an object. Implements the
        // `Str(key, holder)`, `JO(value)`, and `JA(value)` operations.
        var serialize = function (property, object, callback, properties, whitespace, indentation, stack) {
          var value, className, year, month, date, time, hours, minutes, seconds, milliseconds, results, element, index, length, prefix, result;
          try {
            // Necessary for host object support.
            value = object[property];
          } catch (exception) {}
          if (typeof value == "object" && value) {
            className = getClass.call(value);
            if (className == dateClass && !isProperty.call(value, "toJSON")) {
              if (value > -1 / 0 && value < 1 / 0) {
                // Dates are serialized according to the `Date#toJSON` method
                // specified in ES 5.1 section 15.9.5.44. See section 15.9.1.15
                // for the ISO 8601 date time string format.
                if (getDay) {
                  // Manually compute the year, month, date, hours, minutes,
                  // seconds, and milliseconds if the `getUTC*` methods are
                  // buggy. Adapted from @Yaffle's `date-shim` project.
                  date = floor(value / 864e5);
                  for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++);
                  for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++);
                  date = 1 + date - getDay(year, month);
                  // The `time` value specifies the time within the day (see ES
                  // 5.1 section 15.9.1.2). The formula `(A % B + B) % B` is used
                  // to compute `A modulo B`, as the `%` operator does not
                  // correspond to the `modulo` operation for negative numbers.
                  time = (value % 864e5 + 864e5) % 864e5;
                  // The hours, minutes, seconds, and milliseconds are obtained by
                  // decomposing the time within the day. See section 15.9.1.10.
                  hours = floor(time / 36e5) % 24;
                  minutes = floor(time / 6e4) % 60;
                  seconds = floor(time / 1e3) % 60;
                  milliseconds = time % 1e3;
                } else {
                  year = value.getUTCFullYear();
                  month = value.getUTCMonth();
                  date = value.getUTCDate();
                  hours = value.getUTCHours();
                  minutes = value.getUTCMinutes();
                  seconds = value.getUTCSeconds();
                  milliseconds = value.getUTCMilliseconds();
                }
                // Serialize extended years correctly.
                value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) +
                  "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) +
                  // Months, dates, hours, minutes, and seconds should have two
                  // digits; milliseconds should have three.
                  "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) +
                  // Milliseconds are optional in ES 5.0, but required in 5.1.
                  "." + toPaddedString(3, milliseconds) + "Z";
              } else {
                value = null;
              }
            } else if (typeof value.toJSON == "function" && ((className != numberClass && className != stringClass && className != arrayClass) || isProperty.call(value, "toJSON"))) {
              // Prototype <= 1.6.1 adds non-standard `toJSON` methods to the
              // `Number`, `String`, `Date`, and `Array` prototypes. JSON 3
              // ignores all `toJSON` methods on these objects unless they are
              // defined directly on an instance.
              value = value.toJSON(property);
            }
          }
          if (callback) {
            // If a replacement function was provided, call it to obtain the value
            // for serialization.
            value = callback.call(object, property, value);
          }
          if (value === null) {
            return "null";
          }
          className = getClass.call(value);
          if (className == booleanClass) {
            // Booleans are represented literally.
            return "" + value;
          } else if (className == numberClass) {
            // JSON numbers must be finite. `Infinity` and `NaN` are serialized as
            // `"null"`.
            return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";
          } else if (className == stringClass) {
            // Strings are double-quoted and escaped.
            return quote("" + value);
          }
          // Recursively serialize objects and arrays.
          if (typeof value == "object") {
            // Check for cyclic structures. This is a linear search; performance
            // is inversely proportional to the number of unique nested objects.
            for (length = stack.length; length--;) {
              if (stack[length] === value) {
                // Cyclic structures cannot be serialized by `JSON.stringify`.
                throw TypeError();
              }
            }
            // Add the object to the stack of traversed objects.
            stack.push(value);
            results = [];
            // Save the current indentation level and indent one additional level.
            prefix = indentation;
            indentation += whitespace;
            if (className == arrayClass) {
              // Recursively serialize array elements.
              for (index = 0, length = value.length; index < length; index++) {
                element = serialize(index, value, callback, properties, whitespace, indentation, stack);
                results.push(element === undef ? "null" : element);
              }
              result = results.length ? (whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : ("[" + results.join(",") + "]")) : "[]";
            } else {
              // Recursively serialize object members. Members are selected from
              // either a user-specified list of property names, or the object
              // itself.
              forEach(properties || value, function (property) {
                var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
                if (element !== undef) {
                  // According to ES 5.1 section 15.12.3: "If `gap` {whitespace}
                  // is not the empty string, let `member` {quote(property) + ":"}
                  // be the concatenation of `member` and the `space` character."
                  // The "`space` character" refers to the literal space
                  // character, not the `space` {width} argument provided to
                  // `JSON.stringify`.
                  results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
                }
              });
              result = results.length ? (whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : ("{" + results.join(",") + "}")) : "{}";
            }
            // Remove the object from the traversed object stack.
            stack.pop();
            return result;
          }
        };

        // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.
        exports.stringify = function (source, filter, width) {
          var whitespace, callback, properties, className;
          if (objectTypes[typeof filter] && filter) {
            if ((className = getClass.call(filter)) == functionClass) {
              callback = filter;
            } else if (className == arrayClass) {
              // Convert the property names array into a makeshift set.
              properties = {};
              for (var index = 0, length = filter.length, value; index < length; value = filter[index++], ((className = getClass.call(value)), className == stringClass || className == numberClass) && (properties[value] = 1));
            }
          }
          if (width) {
            if ((className = getClass.call(width)) == numberClass) {
              // Convert the `width` to an integer and create a string containing
              // `width` number of space characters.
              if ((width -= width % 1) > 0) {
                for (whitespace = "", width > 10 && (width = 10); whitespace.length < width; whitespace += " ");
              }
            } else if (className == stringClass) {
              whitespace = width.length <= 10 ? width : width.slice(0, 10);
            }
          }
          // Opera <= 7.54u2 discards the values associated with empty string keys
          // (`""`) only if they are used directly within an object member list
          // (e.g., `!("" in { "": 1})`).
          return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", []);
        };
      }

      // Public: Parses a JSON source string.
      if (!has("json-parse")) {
        var fromCharCode = String.fromCharCode;

        // Internal: A map of escaped control characters and their unescaped
        // equivalents.
        var Unescapes = {
          92: "\\",
          34: '"',
          47: "/",
          98: "\b",
          116: "\t",
          110: "\n",
          102: "\f",
          114: "\r"
        };

        // Internal: Stores the parser state.
        var Index, Source;

        // Internal: Resets the parser state and throws a `SyntaxError`.
        var abort = function () {
          Index = Source = null;
          throw SyntaxError();
        };

        // Internal: Returns the next token, or `"$"` if the parser has reached
        // the end of the source string. A token may be a string, number, `null`
        // literal, or Boolean literal.
        var lex = function () {
          var source = Source, length = source.length, value, begin, position, isSigned, charCode;
          while (Index < length) {
            charCode = source.charCodeAt(Index);
            switch (charCode) {
              case 9: case 10: case 13: case 32:
                // Skip whitespace tokens, including tabs, carriage returns, line
                // feeds, and space characters.
                Index++;
                break;
              case 123: case 125: case 91: case 93: case 58: case 44:
                // Parse a punctuator token (`{`, `}`, `[`, `]`, `:`, or `,`) at
                // the current position.
                value = charIndexBuggy ? source.charAt(Index) : source[Index];
                Index++;
                return value;
              case 34:
                // `"` delimits a JSON string; advance to the next character and
                // begin parsing the string. String tokens are prefixed with the
                // sentinel `@` character to distinguish them from punctuators and
                // end-of-string tokens.
                for (value = "@", Index++; Index < length;) {
                  charCode = source.charCodeAt(Index);
                  if (charCode < 32) {
                    // Unescaped ASCII control characters (those with a code unit
                    // less than the space character) are not permitted.
                    abort();
                  } else if (charCode == 92) {
                    // A reverse solidus (`\`) marks the beginning of an escaped
                    // control character (including `"`, `\`, and `/`) or Unicode
                    // escape sequence.
                    charCode = source.charCodeAt(++Index);
                    switch (charCode) {
                      case 92: case 34: case 47: case 98: case 116: case 110: case 102: case 114:
                        // Revive escaped control characters.
                        value += Unescapes[charCode];
                        Index++;
                        break;
                      case 117:
                        // `\u` marks the beginning of a Unicode escape sequence.
                        // Advance to the first character and validate the
                        // four-digit code point.
                        begin = ++Index;
                        for (position = Index + 4; Index < position; Index++) {
                          charCode = source.charCodeAt(Index);
                          // A valid sequence comprises four hexdigits (case-
                          // insensitive) that form a single hexadecimal value.
                          if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {
                            // Invalid Unicode escape sequence.
                            abort();
                          }
                        }
                        // Revive the escaped character.
                        value += fromCharCode("0x" + source.slice(begin, Index));
                        break;
                      default:
                        // Invalid escape sequence.
                        abort();
                    }
                  } else {
                    if (charCode == 34) {
                      // An unescaped double-quote character marks the end of the
                      // string.
                      break;
                    }
                    charCode = source.charCodeAt(Index);
                    begin = Index;
                    // Optimize for the common case where a string is valid.
                    while (charCode >= 32 && charCode != 92 && charCode != 34) {
                      charCode = source.charCodeAt(++Index);
                    }
                    // Append the string as-is.
                    value += source.slice(begin, Index);
                  }
                }
                if (source.charCodeAt(Index) == 34) {
                  // Advance to the next character and return the revived string.
                  Index++;
                  return value;
                }
                // Unterminated string.
                abort();
              default:
                // Parse numbers and literals.
                begin = Index;
                // Advance past the negative sign, if one is specified.
                if (charCode == 45) {
                  isSigned = true;
                  charCode = source.charCodeAt(++Index);
                }
                // Parse an integer or floating-point value.
                if (charCode >= 48 && charCode <= 57) {
                  // Leading zeroes are interpreted as octal literals.
                  if (charCode == 48 && ((charCode = source.charCodeAt(Index + 1)), charCode >= 48 && charCode <= 57)) {
                    // Illegal octal literal.
                    abort();
                  }
                  isSigned = false;
                  // Parse the integer component.
                  for (; Index < length && ((charCode = source.charCodeAt(Index)), charCode >= 48 && charCode <= 57); Index++);
                  // Floats cannot contain a leading decimal point; however, this
                  // case is already accounted for by the parser.
                  if (source.charCodeAt(Index) == 46) {
                    position = ++Index;
                    // Parse the decimal component.
                    for (; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
                    if (position == Index) {
                      // Illegal trailing decimal.
                      abort();
                    }
                    Index = position;
                  }
                  // Parse exponents. The `e` denoting the exponent is
                  // case-insensitive.
                  charCode = source.charCodeAt(Index);
                  if (charCode == 101 || charCode == 69) {
                    charCode = source.charCodeAt(++Index);
                    // Skip past the sign following the exponent, if one is
                    // specified.
                    if (charCode == 43 || charCode == 45) {
                      Index++;
                    }
                    // Parse the exponential component.
                    for (position = Index; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
                    if (position == Index) {
                      // Illegal empty exponent.
                      abort();
                    }
                    Index = position;
                  }
                  // Coerce the parsed value to a JavaScript number.
                  return +source.slice(begin, Index);
                }
                // A negative sign may only precede numbers.
                if (isSigned) {
                  abort();
                }
                // `true`, `false`, and `null` literals.
                if (source.slice(Index, Index + 4) == "true") {
                  Index += 4;
                  return true;
                } else if (source.slice(Index, Index + 5) == "false") {
                  Index += 5;
                  return false;
                } else if (source.slice(Index, Index + 4) == "null") {
                  Index += 4;
                  return null;
                }
                // Unrecognized token.
                abort();
            }
          }
          // Return the sentinel `$` character if the parser has reached the end
          // of the source string.
          return "$";
        };

        // Internal: Parses a JSON `value` token.
        var get = function (value) {
          var results, hasMembers;
          if (value == "$") {
            // Unexpected end of input.
            abort();
          }
          if (typeof value == "string") {
            if ((charIndexBuggy ? value.charAt(0) : value[0]) == "@") {
              // Remove the sentinel `@` character.
              return value.slice(1);
            }
            // Parse object and array literals.
            if (value == "[") {
              // Parses a JSON array, returning a new JavaScript array.
              results = [];
              for (;; hasMembers || (hasMembers = true)) {
                value = lex();
                // A closing square bracket marks the end of the array literal.
                if (value == "]") {
                  break;
                }
                // If the array literal contains elements, the current token
                // should be a comma separating the previous element from the
                // next.
                if (hasMembers) {
                  if (value == ",") {
                    value = lex();
                    if (value == "]") {
                      // Unexpected trailing `,` in array literal.
                      abort();
                    }
                  } else {
                    // A `,` must separate each array element.
                    abort();
                  }
                }
                // Elisions and leading commas are not permitted.
                if (value == ",") {
                  abort();
                }
                results.push(get(value));
              }
              return results;
            } else if (value == "{") {
              // Parses a JSON object, returning a new JavaScript object.
              results = {};
              for (;; hasMembers || (hasMembers = true)) {
                value = lex();
                // A closing curly brace marks the end of the object literal.
                if (value == "}") {
                  break;
                }
                // If the object literal contains members, the current token
                // should be a comma separator.
                if (hasMembers) {
                  if (value == ",") {
                    value = lex();
                    if (value == "}") {
                      // Unexpected trailing `,` in object literal.
                      abort();
                    }
                  } else {
                    // A `,` must separate each object member.
                    abort();
                  }
                }
                // Leading commas are not permitted, object property names must be
                // double-quoted strings, and a `:` must separate each property
                // name and value.
                if (value == "," || typeof value != "string" || (charIndexBuggy ? value.charAt(0) : value[0]) != "@" || lex() != ":") {
                  abort();
                }
                results[value.slice(1)] = get(lex());
              }
              return results;
            }
            // Unexpected token encountered.
            abort();
          }
          return value;
        };

        // Internal: Updates a traversed object member.
        var update = function (source, property, callback) {
          var element = walk(source, property, callback);
          if (element === undef) {
            delete source[property];
          } else {
            source[property] = element;
          }
        };

        // Internal: Recursively traverses a parsed JSON object, invoking the
        // `callback` function for each value. This is an implementation of the
        // `Walk(holder, name)` operation defined in ES 5.1 section 15.12.2.
        var walk = function (source, property, callback) {
          var value = source[property], length;
          if (typeof value == "object" && value) {
            // `forEach` can't be used to traverse an array in Opera <= 8.54
            // because its `Object#hasOwnProperty` implementation returns `false`
            // for array indices (e.g., `![1, 2, 3].hasOwnProperty("0")`).
            if (getClass.call(value) == arrayClass) {
              for (length = value.length; length--;) {
                update(value, length, callback);
              }
            } else {
              forEach(value, function (property) {
                update(value, property, callback);
              });
            }
          }
          return callback.call(source, property, value);
        };

        // Public: `JSON.parse`. See ES 5.1 section 15.12.2.
        exports.parse = function (source, callback) {
          var result, value;
          Index = 0;
          Source = "" + source;
          result = get(lex());
          // If a JSON string contains multiple tokens, it is invalid.
          if (lex() != "$") {
            abort();
          }
          // Reset the parser state.
          Index = Source = null;
          return callback && getClass.call(callback) == functionClass ? walk((value = {}, value[""] = result, value), "", callback) : result;
        };
      }
    }

    exports["runInContext"] = runInContext;
    return exports;
  }

  if (freeExports && !isLoader) {
    // Export for CommonJS environments.
    runInContext(root, freeExports);
  } else {
    // Export for web browsers and JavaScript engines.
    var nativeJSON = root.JSON,
        previousJSON = root["JSON3"],
        isRestored = false;

    var JSON3 = runInContext(root, (root["JSON3"] = {
      // Public: Restores the original value of the global `JSON` object and
      // returns a reference to the `JSON3` object.
      "noConflict": function () {
        if (!isRestored) {
          isRestored = true;
          root.JSON = nativeJSON;
          root["JSON3"] = previousJSON;
          nativeJSON = previousJSON = null;
        }
        return JSON3;
      }
    }));

    root.JSON = {
      "parse": JSON3.parse,
      "stringify": JSON3.stringify
    };
  }

  // Export for asynchronous module loaders.
  if (isLoader) {
    define(function () {
      return JSON3;
    });
  }
}).call(this);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],59:[function(require,module,exports){
'use strict';

var has = Object.prototype.hasOwnProperty;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String} The decoded string.
 * @api private
 */
function decode(input) {
  return decodeURIComponent(input.replace(/\+/g, ' '));
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?&]+)=?([^&]*)/g
    , result = {}
    , part;

  while (part = parser.exec(query)) {
    var key = decode(part[1])
      , value = decode(part[2]);

    //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    if (key in result) continue;
    result[key] = value;
  }

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = [];

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (var key in obj) {
    if (has.call(obj, key)) {
      pairs.push(encodeURIComponent(key) +'='+ encodeURIComponent(obj[key]));
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;

},{}],60:[function(require,module,exports){
'use strict';

/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */
module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
    return port !== 80;

    case 'https':
    case 'wss':
    return port !== 443;

    case 'ftp':
    return port !== 21;

    case 'gopher':
    return port !== 70;

    case 'file':
    return false;
  }

  return port !== 0;
};

},{}],61:[function(require,module,exports){
(function (global){
'use strict';

var required = require('requires-port')
  , qs = require('querystringify')
  , protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i
  , slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;

/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */
var rules = [
  ['#', 'hash'],                        // Extract from the back.
  ['?', 'query'],                       // Extract from the back.
  function sanitize(address) {          // Sanitize what is left of the address
    return address.replace('\\', '/');
  },
  ['/', 'pathname'],                    // Extract from the back.
  ['@', 'auth', 1],                     // Extract from the front.
  [NaN, 'host', undefined, 1, 1],       // Set left over value.
  [/:(\d+)$/, 'port', undefined, 1],    // RegExp the back.
  [NaN, 'hostname', undefined, 1, 1]    // Set left over.
];

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
var ignore = { hash: 1, query: 1 };

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @public
 */
function lolcation(loc) {
  var location = global && global.location || {};
  loc = loc || location;

  var finaldestination = {}
    , type = typeof loc
    , key;

  if ('blob:' === loc.protocol) {
    finaldestination = new Url(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new Url(loc, {});
    for (key in ignore) delete finaldestination[key];
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}

/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @private
 */
function extractProtocol(address) {
  var match = protocolre.exec(address);

  return {
    protocol: match[1] ? match[1].toLowerCase() : '',
    slashes: !!match[2],
    rest: match[3]
  };
}

/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @private
 */
function resolve(relative, base) {
  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/'))
    , i = path.length
    , last = path[i - 1]
    , unshift = false
    , up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * It is worth noting that we should not use `URL` as class name to prevent
 * clashes with the global URL instance that got introduced in browsers.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} location Location defaults for relative paths.
 * @param {Boolean|Function} parser Parser for the query string.
 * @private
 */
function Url(address, location, parser) {
  if (!(this instanceof Url)) {
    return new Url(address, location, parser);
  }

  var relative, extracted, parse, instruction, index, key
    , instructions = rules.slice()
    , type = typeof location
    , url = this
    , i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;

  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (!extracted.slashes) instructions[3] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];

    if (typeof instruction === 'function') {
      address = instruction(address);
      continue;
    }

    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if ((index = parse.exec(address))) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (
      relative && instruction[3] ? location[key] || '' : ''
    );

    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (
      relative
    && location.slashes
    && url.pathname.charAt(0) !== '/'
    && (url.pathname !== '' || location.pathname !== '')
  ) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';
  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL} URL instance for chaining.
 * @public
 */
function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname +':'+ value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':'+ url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }
      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  url.href = url.toString();

  return url;
}

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String} Compiled version of the URL.
 * @public
 */
function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

  var query
    , url = this
    , protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':'+ url.password;
    result += '@';
  }

  result += url.host + url.pathname;

  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?'+ query : query;

  if (url.hash) result += url.hash;

  return result;
}

Url.prototype = { set: set, toString: toString };

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
Url.extractProtocol = extractProtocol;
Url.location = lolcation;
Url.qs = qs;

module.exports = Url;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"querystringify":59,"requires-port":60}]},{},[1])(1)
});


//# sourceMappingURL=sockjs.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/url/url.js":
/*!*********************************!*\
  !*** ./node_modules/url/url.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var punycode = __webpack_require__(/*! punycode */ "./node_modules/node-libs-browser/node_modules/punycode/punycode.js");
var util = __webpack_require__(/*! ./util */ "./node_modules/url/util.js");

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};


/***/ }),

/***/ "./node_modules/url/util.js":
/*!**********************************!*\
  !*** ./node_modules/url/util.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};


/***/ }),

/***/ "./node_modules/webpack-dev-server/client/clients/BaseClient.js":
/*!*********************************************************!*\
  !*** (webpack)-dev-server/client/clients/BaseClient.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable
  no-unused-vars
*/

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

module.exports =
/*#__PURE__*/
function () {
  function BaseClient() {
    _classCallCheck(this, BaseClient);
  }

  _createClass(BaseClient, null, [{
    key: "getClientPath",
    value: function getClientPath(options) {
      throw new Error('Client needs implementation');
    }
  }]);

  return BaseClient;
}();

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/clients/SockJSClient.js":
/*!***********************************************************!*\
  !*** (webpack)-dev-server/client/clients/SockJSClient.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable
  no-unused-vars
*/

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SockJS = __webpack_require__(/*! sockjs-client/dist/sockjs */ "./node_modules/sockjs-client/dist/sockjs.js");

var BaseClient = __webpack_require__(/*! ./BaseClient */ "./node_modules/webpack-dev-server/client/clients/BaseClient.js");

module.exports =
/*#__PURE__*/
function (_BaseClient) {
  _inherits(SockJSClient, _BaseClient);

  function SockJSClient(url) {
    var _this;

    _classCallCheck(this, SockJSClient);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SockJSClient).call(this));
    _this.sock = new SockJS(url);

    _this.sock.onerror = function (err) {// TODO: use logger to log the error event once client and client-src
      // are reorganized to have the same directory structure
    };

    return _this;
  }

  _createClass(SockJSClient, [{
    key: "onOpen",
    value: function onOpen(f) {
      this.sock.onopen = f;
    }
  }, {
    key: "onClose",
    value: function onClose(f) {
      this.sock.onclose = f;
    } // call f with the message string as the first argument

  }, {
    key: "onMessage",
    value: function onMessage(f) {
      this.sock.onmessage = function (e) {
        f(e.data);
      };
    }
  }], [{
    key: "getClientPath",
    value: function getClientPath(options) {
      return /*require.resolve*/(/*! ./SockJSClient */ "./node_modules/webpack-dev-server/client/clients/SockJSClient.js");
    }
  }]);

  return SockJSClient;
}(BaseClient);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/index.js?http://localhost:9000":
/*!*********************************************************!*\
  !*** (webpack)-dev-server/client?http://localhost:9000 ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {
/* global __resourceQuery WorkerGlobalScope self */

/* eslint prefer-destructuring: off */

var stripAnsi = __webpack_require__(/*! strip-ansi */ "./node_modules/webpack-dev-server/node_modules/strip-ansi/index.js");

var socket = __webpack_require__(/*! ./socket */ "./node_modules/webpack-dev-server/client/socket.js");

var overlay = __webpack_require__(/*! ./overlay */ "./node_modules/webpack-dev-server/client/overlay.js");

var _require = __webpack_require__(/*! ./utils/log */ "./node_modules/webpack-dev-server/client/utils/log.js"),
    log = _require.log,
    setLogLevel = _require.setLogLevel;

var sendMessage = __webpack_require__(/*! ./utils/sendMessage */ "./node_modules/webpack-dev-server/client/utils/sendMessage.js");

var reloadApp = __webpack_require__(/*! ./utils/reloadApp */ "./node_modules/webpack-dev-server/client/utils/reloadApp.js");

var createSocketUrl = __webpack_require__(/*! ./utils/createSocketUrl */ "./node_modules/webpack-dev-server/client/utils/createSocketUrl.js");

var status = {
  isUnloading: false,
  currentHash: ''
};
var options = {
  hot: false,
  hotReload: true,
  liveReload: false,
  initial: true,
  useWarningOverlay: false,
  useErrorOverlay: false,
  useProgress: false
};
var socketUrl = createSocketUrl(__resourceQuery);
self.addEventListener('beforeunload', function () {
  status.isUnloading = true;
});

if (typeof window !== 'undefined') {
  var qs = window.location.search.toLowerCase();
  options.hotReload = qs.indexOf('hotreload=false') === -1;
}

var onSocketMessage = {
  hot: function hot() {
    options.hot = true;
    log.info('[WDS] Hot Module Replacement enabled.');
  },
  liveReload: function liveReload() {
    options.liveReload = true;
    log.info('[WDS] Live Reloading enabled.');
  },
  invalid: function invalid() {
    log.info('[WDS] App updated. Recompiling...'); // fixes #1042. overlay doesn't clear if errors are fixed but warnings remain.

    if (options.useWarningOverlay || options.useErrorOverlay) {
      overlay.clear();
    }

    sendMessage('Invalid');
  },
  hash: function hash(_hash) {
    status.currentHash = _hash;
  },
  'still-ok': function stillOk() {
    log.info('[WDS] Nothing changed.');

    if (options.useWarningOverlay || options.useErrorOverlay) {
      overlay.clear();
    }

    sendMessage('StillOk');
  },
  'log-level': function logLevel(level) {
    var hotCtx = __webpack_require__("./node_modules/webpack/hot sync ^\\.\\/log$");

    if (hotCtx.keys().indexOf('./log') !== -1) {
      hotCtx('./log').setLogLevel(level);
    }

    setLogLevel(level);
  },
  overlay: function overlay(value) {
    if (typeof document !== 'undefined') {
      if (typeof value === 'boolean') {
        options.useWarningOverlay = false;
        options.useErrorOverlay = value;
      } else if (value) {
        options.useWarningOverlay = value.warnings;
        options.useErrorOverlay = value.errors;
      }
    }
  },
  progress: function progress(_progress) {
    if (typeof document !== 'undefined') {
      options.useProgress = _progress;
    }
  },
  'progress-update': function progressUpdate(data) {
    if (options.useProgress) {
      log.info("[WDS] ".concat(data.percent, "% - ").concat(data.msg, "."));
    }

    sendMessage('Progress', data);
  },
  ok: function ok() {
    sendMessage('Ok');

    if (options.useWarningOverlay || options.useErrorOverlay) {
      overlay.clear();
    }

    if (options.initial) {
      return options.initial = false;
    } // eslint-disable-line no-return-assign


    reloadApp(options, status);
  },
  'content-changed': function contentChanged() {
    log.info('[WDS] Content base changed. Reloading...');
    self.location.reload();
  },
  warnings: function warnings(_warnings) {
    log.warn('[WDS] Warnings while compiling.');

    var strippedWarnings = _warnings.map(function (warning) {
      return stripAnsi(warning);
    });

    sendMessage('Warnings', strippedWarnings);

    for (var i = 0; i < strippedWarnings.length; i++) {
      log.warn(strippedWarnings[i]);
    }

    if (options.useWarningOverlay) {
      overlay.showMessage(_warnings);
    }

    if (options.initial) {
      return options.initial = false;
    } // eslint-disable-line no-return-assign


    reloadApp(options, status);
  },
  errors: function errors(_errors) {
    log.error('[WDS] Errors while compiling. Reload prevented.');

    var strippedErrors = _errors.map(function (error) {
      return stripAnsi(error);
    });

    sendMessage('Errors', strippedErrors);

    for (var i = 0; i < strippedErrors.length; i++) {
      log.error(strippedErrors[i]);
    }

    if (options.useErrorOverlay) {
      overlay.showMessage(_errors);
    }

    options.initial = false;
  },
  error: function error(_error) {
    log.error(_error);
  },
  close: function close() {
    log.error('[WDS] Disconnected!');
    sendMessage('Close');
  }
};
socket(socketUrl, onSocketMessage);
/* WEBPACK VAR INJECTION */}.call(this, "?http://localhost:9000"))

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/overlay.js":
/*!**********************************************!*\
  !*** (webpack)-dev-server/client/overlay.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // The error overlay is inspired (and mostly copied) from Create React App (https://github.com/facebookincubator/create-react-app)
// They, in turn, got inspired by webpack-hot-middleware (https://github.com/glenjamin/webpack-hot-middleware).

var ansiHTML = __webpack_require__(/*! ansi-html */ "./node_modules/ansi-html/index.js");

var _require = __webpack_require__(/*! html-entities */ "./node_modules/html-entities/index.js"),
    AllHtmlEntities = _require.AllHtmlEntities;

var entities = new AllHtmlEntities();
var colors = {
  reset: ['transparent', 'transparent'],
  black: '181818',
  red: 'E36049',
  green: 'B3CB74',
  yellow: 'FFD080',
  blue: '7CAFC2',
  magenta: '7FACCA',
  cyan: 'C3C2EF',
  lightgrey: 'EBE7E3',
  darkgrey: '6D7891'
};
var overlayIframe = null;
var overlayDiv = null;
var lastOnOverlayDivReady = null;
ansiHTML.setColors(colors);

function createOverlayIframe(onIframeLoad) {
  var iframe = document.createElement('iframe');
  iframe.id = 'webpack-dev-server-client-overlay';
  iframe.src = 'about:blank';
  iframe.style.position = 'fixed';
  iframe.style.left = 0;
  iframe.style.top = 0;
  iframe.style.right = 0;
  iframe.style.bottom = 0;
  iframe.style.width = '100vw';
  iframe.style.height = '100vh';
  iframe.style.border = 'none';
  iframe.style.zIndex = 9999999999;
  iframe.onload = onIframeLoad;
  return iframe;
}

function addOverlayDivTo(iframe) {
  var div = iframe.contentDocument.createElement('div');
  div.id = 'webpack-dev-server-client-overlay-div';
  div.style.position = 'fixed';
  div.style.boxSizing = 'border-box';
  div.style.left = 0;
  div.style.top = 0;
  div.style.right = 0;
  div.style.bottom = 0;
  div.style.width = '100vw';
  div.style.height = '100vh';
  div.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
  div.style.color = '#E8E8E8';
  div.style.fontFamily = 'Menlo, Consolas, monospace';
  div.style.fontSize = 'large';
  div.style.padding = '2rem';
  div.style.lineHeight = '1.2';
  div.style.whiteSpace = 'pre-wrap';
  div.style.overflow = 'auto';
  iframe.contentDocument.body.appendChild(div);
  return div;
}

function ensureOverlayDivExists(onOverlayDivReady) {
  if (overlayDiv) {
    // Everything is ready, call the callback right away.
    onOverlayDivReady(overlayDiv);
    return;
  } // Creating an iframe may be asynchronous so we'll schedule the callback.
  // In case of multiple calls, last callback wins.


  lastOnOverlayDivReady = onOverlayDivReady;

  if (overlayIframe) {
    // We've already created it.
    return;
  } // Create iframe and, when it is ready, a div inside it.


  overlayIframe = createOverlayIframe(function () {
    overlayDiv = addOverlayDivTo(overlayIframe); // Now we can talk!

    lastOnOverlayDivReady(overlayDiv);
  }); // Zalgo alert: onIframeLoad() will be called either synchronously
  // or asynchronously depending on the browser.
  // We delay adding it so `overlayIframe` is set when `onIframeLoad` fires.

  document.body.appendChild(overlayIframe);
} // Successful compilation.


function clear() {
  if (!overlayDiv) {
    // It is not there in the first place.
    return;
  } // Clean up and reset internal state.


  document.body.removeChild(overlayIframe);
  overlayDiv = null;
  overlayIframe = null;
  lastOnOverlayDivReady = null;
} // Compilation with errors (e.g. syntax error or missing modules).


function showMessage(messages) {
  ensureOverlayDivExists(function (div) {
    // Make it look similar to our terminal.
    div.innerHTML = "<span style=\"color: #".concat(colors.red, "\">Failed to compile.</span><br><br>").concat(ansiHTML(entities.encode(messages[0])));
  });
}

module.exports = {
  clear: clear,
  showMessage: showMessage
};

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/socket.js":
/*!*********************************************!*\
  !*** (webpack)-dev-server/client/socket.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_dev_server_client__) {
/* global __webpack_dev_server_client__ */

/* eslint-disable
  camelcase
*/
// this SockJSClient is here as a default fallback, in case inline mode
// is off or the client is not injected. This will be switched to
// WebsocketClient when it becomes the default
// important: the path to SockJSClient here is made to work in the 'client'
// directory, but is updated via the webpack compilation when compiled from
// the 'client-src' directory

var Client = typeof __webpack_dev_server_client__ !== 'undefined' ? __webpack_dev_server_client__ : // eslint-disable-next-line import/no-unresolved
__webpack_require__(/*! ./clients/SockJSClient */ "./node_modules/webpack-dev-server/client/clients/SockJSClient.js");
var retries = 0;
var client = null;

var socket = function initSocket(url, handlers) {
  client = new Client(url);
  client.onOpen(function () {
    retries = 0;
  });
  client.onClose(function () {
    if (retries === 0) {
      handlers.close();
    } // Try to reconnect.


    client = null; // After 10 retries stop trying, to prevent logspam.

    if (retries <= 10) {
      // Exponentially increase timeout to reconnect.
      // Respectfully copied from the package `got`.
      // eslint-disable-next-line no-mixed-operators, no-restricted-properties
      var retryInMs = 1000 * Math.pow(2, retries) + Math.random() * 100;
      retries += 1;
      setTimeout(function () {
        socket(url, handlers);
      }, retryInMs);
    }
  });
  client.onMessage(function (data) {
    var msg = JSON.parse(data);

    if (handlers[msg.type]) {
      handlers[msg.type](msg.data);
    }
  });
};

module.exports = socket;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! (webpack)-dev-server/client/clients/SockJSClient.js */ "./node_modules/webpack-dev-server/client/clients/SockJSClient.js")))

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/createSocketUrl.js":
/*!************************************************************!*\
  !*** (webpack)-dev-server/client/utils/createSocketUrl.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global self */

var url = __webpack_require__(/*! url */ "./node_modules/url/url.js");

var querystring = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");

var getCurrentScriptSource = __webpack_require__(/*! ./getCurrentScriptSource */ "./node_modules/webpack-dev-server/client/utils/getCurrentScriptSource.js");

function createSocketUrl(resourceQuery) {
  var urlParts;

  if (typeof resourceQuery === 'string' && resourceQuery !== '') {
    // If this bundle is inlined, use the resource query to get the correct url.
    urlParts = url.parse(resourceQuery.substr(1));
  } else {
    // Else, get the url from the <script> this file was called with.
    var scriptHost = getCurrentScriptSource();

    if (scriptHost) {
      // eslint-disable-next-line no-useless-escape
      scriptHost = scriptHost.replace(/\/[^\/]+$/, '');
    }

    urlParts = url.parse(scriptHost || '/', false, true);
  }

  if (!urlParts.port || urlParts.port === '0') {
    urlParts.port = self.location.port;
  }

  var _urlParts = urlParts,
      auth = _urlParts.auth,
      path = _urlParts.path;
  var _urlParts2 = urlParts,
      hostname = _urlParts2.hostname,
      protocol = _urlParts2.protocol; // check ipv4 and ipv6 `all hostname`
  // why do we need this check?
  // hostname n/a for file protocol (example, when using electron, ionic)
  // see: https://github.com/webpack/webpack-dev-server/pull/384

  var isAnyHostname = (hostname === '0.0.0.0' || hostname === '::') && self.location.hostname && // eslint-disable-next-line no-bitwise
  !!~self.location.protocol.indexOf('http');

  if (isAnyHostname) {
    hostname = self.location.hostname;
  } // `hostname` can be empty when the script path is relative. In that case, specifying
  // a protocol would result in an invalid URL.
  // When https is used in the app, secure websockets are always necessary
  // because the browser doesn't accept non-secure websockets.


  if (hostname && (self.location.protocol === 'https:' || urlParts.hostname === '0.0.0.0')) {
    protocol = self.location.protocol;
  } // default values of the sock url if they are not provided


  var sockHost = hostname;
  var sockPath = '/sockjs-node';
  var sockPort = urlParts.port; // eslint-disable-next-line no-undefined

  var shouldParsePath = path !== null && path !== undefined && path !== '/';

  if (shouldParsePath) {
    var parsedQuery = querystring.parse(path); // all of these sock url params are optionally passed in through
    // resourceQuery, so we need to fall back to the default if
    // they are not provided

    sockHost = parsedQuery.sockHost || sockHost;
    sockPath = parsedQuery.sockPath || sockPath;
    sockPort = parsedQuery.sockPort || sockPort;
  }

  return url.format({
    protocol: protocol,
    auth: auth,
    hostname: sockHost,
    port: sockPort,
    // If sockPath is provided it'll be passed in via the resourceQuery as a
    // query param so it has to be parsed out of the querystring in order for the
    // client to open the socket to the correct location.
    pathname: sockPath
  });
}

module.exports = createSocketUrl;

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/getCurrentScriptSource.js":
/*!*******************************************************************!*\
  !*** (webpack)-dev-server/client/utils/getCurrentScriptSource.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function getCurrentScriptSource() {
  // `document.currentScript` is the most accurate way to find the current script,
  // but is not supported in all browsers.
  if (document.currentScript) {
    return document.currentScript.getAttribute('src');
  } // Fall back to getting all scripts in the document.


  var scriptElements = document.scripts || [];
  var currentScript = scriptElements[scriptElements.length - 1];

  if (currentScript) {
    return currentScript.getAttribute('src');
  } // Fail as there was no script to use.


  throw new Error('[WDS] Failed to get current script source.');
}

module.exports = getCurrentScriptSource;

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/log.js":
/*!************************************************!*\
  !*** (webpack)-dev-server/client/utils/log.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var log = __webpack_require__(/*! loglevel */ "./node_modules/loglevel/lib/loglevel.js").getLogger('webpack-dev-server');

var INFO = 'info';
var WARN = 'warn';
var ERROR = 'error';
var DEBUG = 'debug';
var TRACE = 'trace';
var SILENT = 'silent'; // deprecated
// TODO: remove these at major released
// https://github.com/webpack/webpack-dev-server/pull/1825

var WARNING = 'warning';
var NONE = 'none'; // Set the default log level

log.setDefaultLevel(INFO);

function setLogLevel(level) {
  switch (level) {
    case INFO:
    case WARN:
    case ERROR:
    case DEBUG:
    case TRACE:
      log.setLevel(level);
      break;
    // deprecated

    case WARNING:
      // loglevel's warning name is different from webpack's
      log.setLevel('warn');
      break;
    // deprecated

    case NONE:
    case SILENT:
      log.disableAll();
      break;

    default:
      log.error("[WDS] Unknown clientLogLevel '".concat(level, "'"));
  }
}

module.exports = {
  log: log,
  setLogLevel: setLogLevel
};

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/reloadApp.js":
/*!******************************************************!*\
  !*** (webpack)-dev-server/client/utils/reloadApp.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global WorkerGlobalScope self */

var _require = __webpack_require__(/*! ./log */ "./node_modules/webpack-dev-server/client/utils/log.js"),
    log = _require.log;

function reloadApp(_ref, _ref2) {
  var hotReload = _ref.hotReload,
      hot = _ref.hot,
      liveReload = _ref.liveReload;
  var isUnloading = _ref2.isUnloading,
      currentHash = _ref2.currentHash;

  if (isUnloading || !hotReload) {
    return;
  }

  if (hot) {
    log.info('[WDS] App hot update...');

    var hotEmitter = __webpack_require__(/*! webpack/hot/emitter */ "./node_modules/webpack/hot/emitter.js");

    hotEmitter.emit('webpackHotUpdate', currentHash);

    if (typeof self !== 'undefined' && self.window) {
      // broadcast update to window
      self.postMessage("webpackHotUpdate".concat(currentHash), '*');
    }
  } // allow refreshing the page only if liveReload isn't disabled
  else if (liveReload) {
      var rootWindow = self; // use parent window for reload (in case we're in an iframe with no valid src)

      var intervalId = self.setInterval(function () {
        if (rootWindow.location.protocol !== 'about:') {
          // reload immediately if protocol is valid
          applyReload(rootWindow, intervalId);
        } else {
          rootWindow = rootWindow.parent;

          if (rootWindow.parent === rootWindow) {
            // if parent equals current window we've reached the root which would continue forever, so trigger a reload anyways
            applyReload(rootWindow, intervalId);
          }
        }
      });
    }

  function applyReload(rootWindow, intervalId) {
    clearInterval(intervalId);
    log.info('[WDS] App updated. Reloading...');
    rootWindow.location.reload();
  }
}

module.exports = reloadApp;

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/sendMessage.js":
/*!********************************************************!*\
  !*** (webpack)-dev-server/client/utils/sendMessage.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __resourceQuery WorkerGlobalScope self */
// Send messages to the outside, so plugins can consume it.

function sendMsg(type, data) {
  if (typeof self !== 'undefined' && (typeof WorkerGlobalScope === 'undefined' || !(self instanceof WorkerGlobalScope))) {
    self.postMessage({
      type: "webpack".concat(type),
      data: data
    }, '*');
  }
}

module.exports = sendMsg;

/***/ }),

/***/ "./node_modules/webpack-dev-server/node_modules/ansi-regex/index.js":
/*!*************************************************************!*\
  !*** (webpack)-dev-server/node_modules/ansi-regex/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function () {
	return /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]/g;
};


/***/ }),

/***/ "./node_modules/webpack-dev-server/node_modules/strip-ansi/index.js":
/*!*************************************************************!*\
  !*** (webpack)-dev-server/node_modules/strip-ansi/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ansiRegex = __webpack_require__(/*! ansi-regex */ "./node_modules/webpack-dev-server/node_modules/ansi-regex/index.js")();

module.exports = function (str) {
	return typeof str === 'string' ? str.replace(ansiRegex, '') : str;
};


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


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./node_modules/webpack/hot/emitter.js":
/*!********************************!*\
  !*** (webpack)/hot/emitter.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var EventEmitter = __webpack_require__(/*! events */ "./node_modules/events/events.js");
module.exports = new EventEmitter();


/***/ }),

/***/ "./node_modules/webpack/hot/log.js":
/*!****************************!*\
  !*** (webpack)/hot/log.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var logLevel = "info";

function dummy() {}

function shouldLog(level) {
	var shouldLog =
		(logLevel === "info" && level === "info") ||
		(["info", "warning"].indexOf(logLevel) >= 0 && level === "warning") ||
		(["info", "warning", "error"].indexOf(logLevel) >= 0 && level === "error");
	return shouldLog;
}

function logGroup(logFn) {
	return function(level, msg) {
		if (shouldLog(level)) {
			logFn(msg);
		}
	};
}

module.exports = function(level, msg) {
	if (shouldLog(level)) {
		if (level === "info") {
			console.log(msg);
		} else if (level === "warning") {
			console.warn(msg);
		} else if (level === "error") {
			console.error(msg);
		}
	}
};

/* eslint-disable node/no-unsupported-features/node-builtins */
var group = console.group || dummy;
var groupCollapsed = console.groupCollapsed || dummy;
var groupEnd = console.groupEnd || dummy;
/* eslint-enable node/no-unsupported-features/node-builtins */

module.exports.group = logGroup(group);

module.exports.groupCollapsed = logGroup(groupCollapsed);

module.exports.groupEnd = logGroup(groupEnd);

module.exports.setLogLevel = function(level) {
	logLevel = level;
};

module.exports.formatError = function(err) {
	var message = err.message;
	var stack = err.stack;
	if (!stack) {
		return message;
	} else if (stack.indexOf(message) < 0) {
		return message + "\n" + stack;
	} else {
		return stack;
	}
};


/***/ }),

/***/ 0:
/*!**************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://localhost:9000 ./index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/geyuhang/jinge/jinge-demos/04-lifecycle-hooks/node_modules/webpack-dev-server/client/index.js?http://localhost:9000 */"./node_modules/webpack-dev-server/client/index.js?http://localhost:9000");
module.exports = __webpack_require__(/*! /Users/geyuhang/jinge/jinge-demos/04-lifecycle-hooks/index.js */"./index.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map