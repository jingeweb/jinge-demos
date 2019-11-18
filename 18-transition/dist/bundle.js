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

/***/ "../../jinge-framework/components/class.js":
/*!*****************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/components/class.js ***!
  \*****************************************************************/
/*! exports provided: ToggleClassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleClassComponent", function() { return ToggleClassComponent; });
/* harmony import */ var _vm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm */ "../../jinge-framework/vm/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "../../jinge-framework/core/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "../../jinge-framework/util/index.js");




class ToggleClassComponent extends _core__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(attrs) {
    if (!attrs || !Object(_util__WEBPACK_IMPORTED_MODULE_2__["isObject"])(attrs.class)) {
      throw new Error('<toggle-class> component require "class" attribute to be Object.');
    }
    const vm_e9d03bec34 = super(attrs);
    const fn_e9d03bec34_2 = () => {
      vm_e9d03bec34.class = attrs.class;
    };
    fn_e9d03bec34_2();
    attrs[_vm__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_vm__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]]('class', fn_e9d03bec34_2);
    const fn_e9d03bec34_3 = () => {
      vm_e9d03bec34.trans = !!attrs.transition;
    };
    fn_e9d03bec34_3();
    attrs[_vm__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_vm__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]]('transition', fn_e9d03bec34_3);
    vm_e9d03bec34._t = null;
    vm_e9d03bec34._i = null;
    Object(_vm__WEBPACK_IMPORTED_MODULE_0__["vmWatch"])(this, 'class.**', () => {
      vm_e9d03bec34[_core__WEBPACK_IMPORTED_MODULE_1__["UPDATE_IF_NEED"]]();
    });
    return vm_e9d03bec34;
  }

  [_core__WEBPACK_IMPORTED_MODULE_1__["RENDER"]]() {
    const rr = super[_core__WEBPACK_IMPORTED_MODULE_1__["RENDER"]]();
    this[_core__WEBPACK_IMPORTED_MODULE_1__["UPDATE"]](true);
    return rr;
  }

  [_core__WEBPACK_IMPORTED_MODULE_1__["BEFORE_DESTROY"]]() {
    this._t && this._t.clear();
  }

  [_core__WEBPACK_IMPORTED_MODULE_1__["UPDATE"]](init) {
    const el = this.trans ? this[_core__WEBPACK_IMPORTED_MODULE_1__["GET_TRANSITION_DOM"]]() : this;
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
        Object(_core__WEBPACK_IMPORTED_MODULE_1__["operateRootHtmlDOM"])(
          v ? _util__WEBPACK_IMPORTED_MODULE_2__["addClass"] : _util__WEBPACK_IMPORTED_MODULE_2__["removeClass"],
          el, k
        );
        return;
      }

      if (init) {
        this._t.set(k, [
          v ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_ENTERED"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_LEAVED"], // state
          null // saved onEnd callback
        ]);
        v ? Object(_util__WEBPACK_IMPORTED_MODULE_2__["addClass"])(el, k) : Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeClass"])(el, k);
        return;
      }

      const t = this._t.get(k);
      if (!t) {
        console.error('Unsupport <toogle-class> attribute. see https://todo');
        return;
      }
      const s = t[0];
      if ((v && s <= _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_ENTERED"]) || (!v && s >= _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_LEAVING"])) {
        return;
      }

      if (s === (v ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_LEAVING"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_ENTERING"])) {
        // debugger;
        Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeClass"])(el, k + (v ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_C_LEAVE"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_C_ENTER"]));
        Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeClass"])(el, k + (v ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_C_LEAVE_ACTIVE"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_C_ENTER_ACTIVE"]));
        Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeEvent"])(el, _core__WEBPACK_IMPORTED_MODULE_1__["TS_TRANSITION_END"], t[1]);
        Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeEvent"])(el, _core__WEBPACK_IMPORTED_MODULE_1__["TS_ANIMATION_END"], t[1]);
        t[1] = null;
        this[_core__WEBPACK_IMPORTED_MODULE_1__["NOTIFY"]](_core__WEBPACK_IMPORTED_MODULE_1__["TS_TRANSITION"], v ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_LEAVE_CANCELLED"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_ENTER_CANCELLED"], k, el);
      }
      const classOfStart = k + (v ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_C_ENTER"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_C_LEAVE"]);
      const classOfActive = k + (v ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_C_ENTER_ACTIVE"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_C_LEAVE_ACTIVE"]);
      Object(_util__WEBPACK_IMPORTED_MODULE_2__["addClass"])(el, classOfStart);
      // force render by calling getComputedStyle
      Object(_core__WEBPACK_IMPORTED_MODULE_1__["getDurationType"])(el);
      Object(_util__WEBPACK_IMPORTED_MODULE_2__["addClass"])(el, classOfActive);
      const tsEndName = Object(_core__WEBPACK_IMPORTED_MODULE_1__["getDurationType"])(el);
      if (!tsEndName) {
        Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeClass"])(el, classOfStart);
        Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeClass"])(el, classOfActive);
        t[0] = v ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_ENTERED"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_LEAVED"];
        v ? Object(_util__WEBPACK_IMPORTED_MODULE_2__["addClass"])(el, k) : Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeClass"])(el, k);
        return;
      }
      const onEnd = () => {
        Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeEvent"])(el, _core__WEBPACK_IMPORTED_MODULE_1__["TS_TRANSITION_END"], onEnd);
        Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeEvent"])(el, _core__WEBPACK_IMPORTED_MODULE_1__["TS_ANIMATION_END"], onEnd);
        Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeClass"])(el, classOfStart);
        Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeClass"])(el, classOfActive);
        t[1] = null;
        t[0] = v ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_ENTERED"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_LEAVED"];
        v ? Object(_util__WEBPACK_IMPORTED_MODULE_2__["addClass"])(el, k) : Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeClass"])(el, k);
        this[_core__WEBPACK_IMPORTED_MODULE_1__["NOTIFY"]](_core__WEBPACK_IMPORTED_MODULE_1__["TS_TRANSITION"], v ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_AFTER_ENTER"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_AFTER_LEAVE"], k, el);
      };
      t[0] = v ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_ENTERING"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_LEAVING"];
      t[1] = onEnd;
      Object(_util__WEBPACK_IMPORTED_MODULE_2__["addEvent"])(el, tsEndName, onEnd);
      this[_core__WEBPACK_IMPORTED_MODULE_1__["NOTIFY"]](_core__WEBPACK_IMPORTED_MODULE_1__["TS_TRANSITION"], v ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_BEFORE_ENTER"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_BEFORE_LEAVE"], k, el);
      Object(_util__WEBPACK_IMPORTED_MODULE_2__["setImmediate"])(() => {
        this[_core__WEBPACK_IMPORTED_MODULE_1__["NOTIFY"]](_core__WEBPACK_IMPORTED_MODULE_1__["TS_TRANSITION"], v ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_ENTER"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_LEAVE"], k, el);
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
/* harmony import */ var _vm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm */ "../../jinge-framework/vm/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "../../jinge-framework/core/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "../../jinge-framework/util/index.js");




const FOR_LENGTH = Object(_util__WEBPACK_IMPORTED_MODULE_2__["Symbol"])('length');
const FOR_KEYS = Object(_util__WEBPACK_IMPORTED_MODULE_2__["Symbol"])('keys');
const FOR_KEY_NAME = Object(_util__WEBPACK_IMPORTED_MODULE_2__["Symbol"])('key');
const FOR_WAIT_UPDATE = Object(_util__WEBPACK_IMPORTED_MODULE_2__["Symbol"])('waiting_update');
const FOR_UPDATE_ITEM = Object(_util__WEBPACK_IMPORTED_MODULE_2__["Symbol"])('update_item');

const KEY_INDEX = 'index';
const KEY_EACH = 'each';
const EMP_ARR = [];

class ForEachComponent extends _core__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(attrs, item, index, isLast) {
    const vm_e9d03bec34 = super(attrs);
    vm_e9d03bec34.each = item;
    vm_e9d03bec34.index = index;
    vm_e9d03bec34.isFirst = index === 0;
    vm_e9d03bec34.isLast = isLast;
    return vm_e9d03bec34;
  }

  [_core__WEBPACK_IMPORTED_MODULE_1__["RENDER"]]() {
    const renderFn = this[_core__WEBPACK_IMPORTED_MODULE_1__["ARG_COMPONENTS"]][_util__WEBPACK_IMPORTED_MODULE_2__["STR_DEFAULT"]];
    if (!renderFn) Object(_util__WEBPACK_IMPORTED_MODULE_2__["assertFail"])();
    return renderFn(this);
  }
}

function createEl(item, i, isLast, itemRenderFn, context, cstyPid) {
  const el = new ForEachComponent(Object(_vm__WEBPACK_IMPORTED_MODULE_0__["wrapAttrs"])({
    [_vm__WEBPACK_IMPORTED_MODULE_0__["VM_DEBUG_NAME"]]: 'attrs_of_<for-each>',
    [_vm__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]]: null,
    [_core__WEBPACK_IMPORTED_MODULE_1__["CONTEXT"]]: context,
    [_core__WEBPACK_IMPORTED_MODULE_1__["ARG_COMPONENTS"]]: {
      [_util__WEBPACK_IMPORTED_MODULE_2__["STR_DEFAULT"]]: itemRenderFn
    }
  }), item, i, isLast);
  cstyPid && Object(_core__WEBPACK_IMPORTED_MODULE_1__["addParentStyleId"])(el, cstyPid);
  return el;
}

function appendRenderEach(item, i, isLast, itemRenderFn, roots, context, cstyPid) {
  const el = createEl(item, i, isLast, itemRenderFn, context, cstyPid);
  roots.push(el);
  return el[_core__WEBPACK_IMPORTED_MODULE_1__["RENDER"]]();
}

function _assertVm(item, i) {
  if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isObject"])(item) && !Object(_vm__WEBPACK_IMPORTED_MODULE_0__["isInnerObj"])(item) && !(_vm__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"] in item)) {
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
  el[_core__WEBPACK_IMPORTED_MODULE_1__["ROOT_NODES"]].forEach(node => {
    if (Object(_core__WEBPACK_IMPORTED_MODULE_1__["isComponent"])(node)) {
      loopAppend($parent, node);
    } else {
      Object(_util__WEBPACK_IMPORTED_MODULE_2__["appendChild"])($parent, node);
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
  return (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isString"])(p) && p !== _util__WEBPACK_IMPORTED_MODULE_2__["STR_LENGTH"] && /^\d+$/.test(p)) ? Number(p) : p;
}

let INC = 0;
const ID = Object(_util__WEBPACK_IMPORTED_MODULE_2__["Symbol"])('id');

class ForComponent extends _core__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(attrs) {
    if (attrs.key && !/^(index|each(.[\w\d$_]+)*)$/.test(attrs.key)) {
      throw new Error('Value of "_key" attribute of <for> component is invalidate. See https://[todo]');
    }
    const vm_e9d03bec34 = super(attrs);
    const fn_e9d03bec34_2 = () => {
      vm_e9d03bec34.loop = attrs.loop;
    };
    fn_e9d03bec34_2();
    attrs[_vm__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_vm__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]]('loop', fn_e9d03bec34_2);
    vm_e9d03bec34[ID] = INC++;
    const kn = attrs.key || KEY_INDEX;
    vm_e9d03bec34[FOR_KEY_NAME] = kn;
    vm_e9d03bec34[FOR_LENGTH] = 0;
    vm_e9d03bec34[FOR_KEYS] = null;
    vm_e9d03bec34[FOR_WAIT_UPDATE] = false;
    if (kn !== KEY_INDEX && kn !== KEY_EACH) {
      vm_e9d03bec34[FOR_KEY_NAME] = new Function(KEY_EACH, `return ${ kn }`);
      const propCount = kn.split('.').length + 1;
      Object(_vm__WEBPACK_IMPORTED_MODULE_0__["vmWatch"])(this, 'loop.*.' + kn.slice(5), propPath => {
        if (propPath.length !== propCount || vm_e9d03bec34[FOR_WAIT_UPDATE]) {
          return;
        }
        const items = vm_e9d03bec34.loop;
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_2__["isArray"])(items) || items.length === 0)
          return;
        const p = _parseIndexPath(propPath[1]);
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(p) || p >= items.length) {
          return;
        }
        vm_e9d03bec34[FOR_KEYS][p] = vm_e9d03bec34[FOR_KEY_NAME](items[p]);
      });
    }
    Object(_vm__WEBPACK_IMPORTED_MODULE_0__["vmWatch"])(this, 'loop.*', propPath => {
      if (vm_e9d03bec34[_core__WEBPACK_IMPORTED_MODULE_1__["STATE"]] !== _core__WEBPACK_IMPORTED_MODULE_1__["STATE_RENDERED"] || propPath.length !== 2 || vm_e9d03bec34[FOR_WAIT_UPDATE]) {
        return;
      }
      const p = _parseIndexPath(propPath[1]);
      if (p === _util__WEBPACK_IMPORTED_MODULE_2__["STR_LENGTH"]) {
        vm_e9d03bec34[FOR_WAIT_UPDATE] = true;
        vm_e9d03bec34[_core__WEBPACK_IMPORTED_MODULE_1__["UPDATE_IF_NEED"]]();
      } else if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(p)) {
        vm_e9d03bec34[FOR_UPDATE_ITEM](p);
      }
    });
    return vm_e9d03bec34;
  }

  get loop() {
    return this._l;
  }

  set loop(v) {
    // console.log('set loop');
    this._l = v;
    this[FOR_WAIT_UPDATE] = true;
    this[_core__WEBPACK_IMPORTED_MODULE_1__["UPDATE_IF_NEED"]]();
  }

  [_core__WEBPACK_IMPORTED_MODULE_1__["RENDER"]]() {
    const roots = this[_core__WEBPACK_IMPORTED_MODULE_1__["ROOT_NODES"]];
    const itemRenderFn = this[_core__WEBPACK_IMPORTED_MODULE_1__["ARG_COMPONENTS"]] ? this[_core__WEBPACK_IMPORTED_MODULE_1__["ARG_COMPONENTS"]][_util__WEBPACK_IMPORTED_MODULE_2__["STR_DEFAULT"]] : null;
    if (!itemRenderFn) {
      roots.push(Object(_util__WEBPACK_IMPORTED_MODULE_2__["createComment"])(_util__WEBPACK_IMPORTED_MODULE_2__["STR_EMPTY"]));
      return roots;
    }
    const items = this.loop;
    const keyName = this[FOR_KEY_NAME];
    if (keyName !== KEY_INDEX) this[FOR_KEYS] = [];
    if (!Object(_util__WEBPACK_IMPORTED_MODULE_2__["isArray"])(items) || items.length === 0) {
      roots.push(Object(_util__WEBPACK_IMPORTED_MODULE_2__["createComment"])(_util__WEBPACK_IMPORTED_MODULE_2__["STR_EMPTY"]));
      return roots;
    }
    this[FOR_LENGTH] = items.length;
    return renderItems(
      items,
      itemRenderFn,
      roots,
      this[FOR_KEYS],
      keyName,
      this[_core__WEBPACK_IMPORTED_MODULE_1__["CONTEXT"]],
      this[_core__WEBPACK_IMPORTED_MODULE_1__["CSTYLE_PID"]]
    );
  }

  [FOR_UPDATE_ITEM](index) {
    const items = this.loop;
    const roots = this[_core__WEBPACK_IMPORTED_MODULE_1__["ROOT_NODES"]];
    if (!Object(_util__WEBPACK_IMPORTED_MODULE_2__["isArray"])(items) || index >= roots.length) return;
    const keys = this[FOR_KEYS];
    const item = items[index];
    const oldEl = roots[index];
    if (oldEl.each === item) {
      return;
    }
    const itemRenderFn = this[_core__WEBPACK_IMPORTED_MODULE_1__["ARG_COMPONENTS"]] ? this[_core__WEBPACK_IMPORTED_MODULE_1__["ARG_COMPONENTS"]][_util__WEBPACK_IMPORTED_MODULE_2__["STR_DEFAULT"]] : null;
    if (!itemRenderFn) return;
    // console.log('update item:', index);
    const keyName = this[FOR_KEY_NAME];
    if (keyName !== KEY_INDEX) {
      const newKey = keyName === KEY_EACH ? item : keyName(item);
      const oldKey = keys[index];
      if (newKey !== oldKey) {
        const $fd = oldEl[_core__WEBPACK_IMPORTED_MODULE_1__["GET_FIRST_DOM"]]();
        const newEl = createEl(
          item, index, oldEl.isLast,
          itemRenderFn, this[_core__WEBPACK_IMPORTED_MODULE_1__["CONTEXT"]], this[_core__WEBPACK_IMPORTED_MODULE_1__["CSTYLE_PID"]]
        );
        const rr = newEl[_core__WEBPACK_IMPORTED_MODULE_1__["RENDER"]]();
        Object(_util__WEBPACK_IMPORTED_MODULE_2__["insertBefore"])(Object(_util__WEBPACK_IMPORTED_MODULE_2__["getParent"])($fd), rr, $fd);
        oldEl[_core__WEBPACK_IMPORTED_MODULE_1__["DESTROY"]]();
        roots[index] = newEl;
        keys[index] = newKey;
        newEl[_core__WEBPACK_IMPORTED_MODULE_1__["HANDLE_AFTER_RENDER"]]();
        // console.log('update item render:', index);
      } else {
        oldEl.each = item;
      }
    } else {
      oldEl.each = item;
    }
  }

  [_core__WEBPACK_IMPORTED_MODULE_1__["UPDATE"]]() {
    this[FOR_WAIT_UPDATE] = false;
    // console.log('for update');
    const itemRenderFn = this[_core__WEBPACK_IMPORTED_MODULE_1__["ARG_COMPONENTS"]] ? this[_core__WEBPACK_IMPORTED_MODULE_1__["ARG_COMPONENTS"]][_util__WEBPACK_IMPORTED_MODULE_2__["STR_DEFAULT"]] : null;
    if (!itemRenderFn) return;

    const newItems = Object(_util__WEBPACK_IMPORTED_MODULE_2__["isArray"])(this.loop) ? this.loop : EMP_ARR;
    const roots = this[_core__WEBPACK_IMPORTED_MODULE_1__["ROOT_NODES"]];
    const nl = newItems.length;
    const ol = this[FOR_LENGTH];
    // nothing changed, return directly.
    if (nl === 0 && ol === 0) return;

    const keyName = this[FOR_KEY_NAME];
    // if new length equal 0, clear & render comment.
    if (nl === 0 && ol > 0) {
      const fd = roots[0][_core__WEBPACK_IMPORTED_MODULE_1__["GET_FIRST_DOM"]]();
      const $cmt = Object(_util__WEBPACK_IMPORTED_MODULE_2__["createComment"])(_util__WEBPACK_IMPORTED_MODULE_2__["STR_EMPTY"]);
      Object(_util__WEBPACK_IMPORTED_MODULE_2__["insertBefore"])(Object(_util__WEBPACK_IMPORTED_MODULE_2__["getParent"])(fd), $cmt, fd);
      for (let i = 0; i < ol; i++) {
        roots[i][_core__WEBPACK_IMPORTED_MODULE_1__["DESTROY"]]();
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
    const ctx = this[_core__WEBPACK_IMPORTED_MODULE_1__["CONTEXT"]];
    const cstyPid = this[_core__WEBPACK_IMPORTED_MODULE_1__["CSTYLE_PID"]];
    const firstEl = roots[0]; // if ol === 0, firstEl is comment, else is component
    const $parent = Object(_util__WEBPACK_IMPORTED_MODULE_2__["getParent"])(ol === 0 ? firstEl : firstEl[_core__WEBPACK_IMPORTED_MODULE_1__["GET_FIRST_DOM"]]());

    if (keyName === KEY_INDEX) {
      let $f = null;
      if (ol === 0) roots.length = 0;

      for (let i = 0; i < nl; i++) {
        if (i < ol) {
          updateEl(roots[i], i, newItems);
        } else {
          if (!$f) $f = Object(_util__WEBPACK_IMPORTED_MODULE_2__["createFragment"])();
          Object(_util__WEBPACK_IMPORTED_MODULE_2__["appendChild"])($f, ...appendRenderEach(newItems[i], i, i === nl - 1, itemRenderFn, roots, ctx, cstyPid));
        }
      }
      if ($f) {
        const $le = ol === 0 ? firstEl : roots[ol - 1][_core__WEBPACK_IMPORTED_MODULE_1__["GET_LAST_DOM"]]();
        Object(_util__WEBPACK_IMPORTED_MODULE_2__["insertAfter"])($parent, $f, $le);
        for (let i = ol; i < nl; i++) {
          roots[i][_core__WEBPACK_IMPORTED_MODULE_1__["HANDLE_AFTER_RENDER"]]();
        }
      }
      if (ol === 0) {
        Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeChild"])($parent, firstEl);
      }
      if (nl >= ol) return;
      for (let i = nl; i < ol; i++) {
        roots[i][_core__WEBPACK_IMPORTED_MODULE_1__["DESTROY"]]();
      }
      roots.splice(nl);

      return;
    }

    const oldKeys = this[FOR_KEYS];
    if (ol === 0) {
      roots.length = 0;
      const rs = renderItems(
        newItems, itemRenderFn, roots,
        oldKeys, keyName, this[_core__WEBPACK_IMPORTED_MODULE_1__["CONTEXT"]], this[_core__WEBPACK_IMPORTED_MODULE_1__["CSTYLE_PID"]]
      );
      Object(_util__WEBPACK_IMPORTED_MODULE_2__["insertAfter"])($parent, Object(_util__WEBPACK_IMPORTED_MODULE_2__["createFragment"])(rs), firstEl);
      Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeChild"])($parent, firstEl);
      roots.forEach(el => el[_core__WEBPACK_IMPORTED_MODULE_1__["HANDLE_AFTER_RENDER"]]());
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
            $lastS = roots[oi][_core__WEBPACK_IMPORTED_MODULE_1__["GET_LAST_DOM"]]().nextSibling;
          }
          break;
        } else {
          if (oi === ol - 1) {
            $lastS = roots[oi][_core__WEBPACK_IMPORTED_MODULE_1__["GET_LAST_DOM"]]().nextSibling;
          }
          roots[oi][_core__WEBPACK_IMPORTED_MODULE_1__["DESTROY"]]();
          oi++;
        }
      }
      if (oi >= ol) {
        let $f = null;
        const cei = newRoots.length;
        for (; ni < nl; ni++) {
          const el = createEl(newItems[ni], ni, ni === nl - 1, itemRenderFn, ctx, cstyPid);
          if (!$f) $f = Object(_util__WEBPACK_IMPORTED_MODULE_2__["createFragment"])();
          Object(_util__WEBPACK_IMPORTED_MODULE_2__["appendChild"])($f, ...el[_core__WEBPACK_IMPORTED_MODULE_1__["RENDER"]]());
          newRoots.push(el);
        }
        if ($f) {
          if ($lastS) {
            Object(_util__WEBPACK_IMPORTED_MODULE_2__["insertBefore"])($parent, $f, $lastS);
          } else {
            Object(_util__WEBPACK_IMPORTED_MODULE_2__["appendChild"])($parent, $f);
          }
          for (let i = cei; i < newRoots.length; i++) {
            newRoots[i][_core__WEBPACK_IMPORTED_MODULE_1__["HANDLE_AFTER_RENDER"]]();
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
        if (!$f) $f = Object(_util__WEBPACK_IMPORTED_MODULE_2__["createFragment"])();
        if (!reuseEl) {
          reuseEl = createEl(newItems[ni], ni, ni === nl - 1, itemRenderFn, ctx, cstyPid);
          Object(_util__WEBPACK_IMPORTED_MODULE_2__["appendChild"])($f, ...reuseEl[_core__WEBPACK_IMPORTED_MODULE_1__["RENDER"]]());
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
        Object(_util__WEBPACK_IMPORTED_MODULE_2__["assertFail"])('unimpossible?!');
      }
      const el = roots[oi];
      $f && Object(_util__WEBPACK_IMPORTED_MODULE_2__["insertBefore"])($parent, $f, el[_core__WEBPACK_IMPORTED_MODULE_1__["GET_FIRST_DOM"]]());
      $nes && $nes.forEach(el => el[_core__WEBPACK_IMPORTED_MODULE_1__["HANDLE_AFTER_RENDER"]]());
      updateEl(el, ni, newItems);
      newRoots.push(el);
      oi++;
      ni++;
    }

    this[_core__WEBPACK_IMPORTED_MODULE_1__["ROOT_NODES"]] = newRoots;
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
/* harmony import */ var _vm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm */ "../../jinge-framework/vm/index.js");
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class */ "../../jinge-framework/components/class.js");



const STR_JG_HIDE = 'jg-hide';

class HideComponent extends _class__WEBPACK_IMPORTED_MODULE_1__["ToggleClassComponent"] {
  constructor(attrs) {
    attrs.class = Object(_vm__WEBPACK_IMPORTED_MODULE_0__["wrapViewModel"])({
      [STR_JG_HIDE]: !!attrs.test
    });
    Object(_vm__WEBPACK_IMPORTED_MODULE_0__["vmWatch"])(attrs, 'test', () => {
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
/* harmony import */ var _vm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm */ "../../jinge-framework/vm/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "../../jinge-framework/core/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "../../jinge-framework/util/index.js");



function renderHtml(content) {
  const $d = Object(_util__WEBPACK_IMPORTED_MODULE_2__["createElementWithoutAttrs"])('div');
  $d.innerHTML = content || '';
  let cn = $d.childNodes;
  if (cn.length === 0) {
    cn = [Object(_util__WEBPACK_IMPORTED_MODULE_2__["createComment"])(_util__WEBPACK_IMPORTED_MODULE_2__["STR_EMPTY"])];
  } else {
    cn = [].slice.call(cn); // convert NodeList to Array.
  }
  return cn;
}

class BindHtmlComponent extends _core__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(attrs) {
    if (attrs[_core__WEBPACK_IMPORTED_MODULE_1__["ARG_COMPONENTS"]])
      throw new Error('<bind-html/> don\'t accept any child.');
    if (!('content' in attrs))
      throw new Error('<bind-html/> require "content" attribute');
    const vm_e9d03bec34 = super(attrs);
    const fn_e9d03bec34_3 = () => {
      vm_e9d03bec34.c = attrs.content;
    };
    fn_e9d03bec34_3();
    attrs[_vm__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_vm__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]]('content', fn_e9d03bec34_3);
    return vm_e9d03bec34;
  }

  get c() {
    return this._c;
  }

  set c(v) {
    if (this._c === v) return;
    this._c = v;
    this[_core__WEBPACK_IMPORTED_MODULE_1__["UPDATE_IF_NEED"]]();
  }

  [_core__WEBPACK_IMPORTED_MODULE_1__["RENDER"]]() {
    return (this[_core__WEBPACK_IMPORTED_MODULE_1__["ROOT_NODES"]] = renderHtml(this._c));
  }

  [_core__WEBPACK_IMPORTED_MODULE_1__["UPDATE"]]() {
    const roots = this[_core__WEBPACK_IMPORTED_MODULE_1__["ROOT_NODES"]];
    const oldFirstEl = roots[0];
    const $p = Object(_util__WEBPACK_IMPORTED_MODULE_2__["getParent"])(oldFirstEl);
    const newEls = renderHtml(this._c);
    Object(_util__WEBPACK_IMPORTED_MODULE_2__["insertBefore"])($p, newEls, oldFirstEl);
    roots.forEach(oldEl => Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeChild"])($p, oldEl));
    this[_core__WEBPACK_IMPORTED_MODULE_1__["ROOT_NODES"]] = newEls;
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
/* harmony import */ var _vm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm */ "../../jinge-framework/vm/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "../../jinge-framework/core/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "../../jinge-framework/util/index.js");





const RENDER_KEY = Symbol('render_key');
const RENDER_VMS = Symbol('render_vms');
const ON_LOCALE_CHANGE = Symbol('fn_on_locale_change');

class I18nComponent extends _core__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(attrs, renderKey, renderVms) {
    const vm_e9d03bec34 = super(attrs);
    vm_e9d03bec34[RENDER_KEY] = renderKey;
    vm_e9d03bec34[RENDER_VMS] = renderVms;
    vm_e9d03bec34[_core__WEBPACK_IMPORTED_MODULE_1__["I18N_WATCH"]](vm_e9d03bec34[ON_LOCALE_CHANGE]);
    return vm_e9d03bec34;
  }

  [_core__WEBPACK_IMPORTED_MODULE_1__["RENDER"]]() {
    const renderFn = _core__WEBPACK_IMPORTED_MODULE_1__["i18n"][_core__WEBPACK_IMPORTED_MODULE_1__["I18N_GET_RENDER"]](this[RENDER_KEY]);
    return renderFn(this, ...this[RENDER_VMS]);
  }

  [ON_LOCALE_CHANGE]() {
    this[_core__WEBPACK_IMPORTED_MODULE_1__["UPDATE_IF_NEED"]]();
  }

  [_core__WEBPACK_IMPORTED_MODULE_1__["UPDATE"]]() {
    Object(_vm__WEBPACK_IMPORTED_MODULE_0__["vmRelatedClear"])(this[_vm__WEBPACK_IMPORTED_MODULE_0__["VM_RELATED_LISTENERS"]]);

    let $el = this[_core__WEBPACK_IMPORTED_MODULE_1__["GET_LAST_DOM"]]();
    const $parentEl = Object(_util__WEBPACK_IMPORTED_MODULE_2__["getParent"])($el);
    $el = $el.nextSibling;

    /*
     * 当前实现下，HANDLE_BEFORE_DESTROY 正好可以销毁子组件/子元素。
     */
    this[_core__WEBPACK_IMPORTED_MODULE_1__["HANDLE_BEFORE_DESTROY"]](true);
    /*
     * 将新的元素替换到原来的旧的元素的位置。
     */
    const els = this[_core__WEBPACK_IMPORTED_MODULE_1__["RENDER"]]();
    if ($el) {
      Object(_util__WEBPACK_IMPORTED_MODULE_2__["insertBefore"])($parentEl, els, $el);
    } else {
      Object(_util__WEBPACK_IMPORTED_MODULE_2__["appendChild"])($parentEl, els);
    }
  }

  [_core__WEBPACK_IMPORTED_MODULE_1__["BEFORE_DESTROY"]]() {
    this[RENDER_VMS] = null; // unlink vms, maybe not necessary
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
/* harmony import */ var _vm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm */ "../../jinge-framework/vm/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "../../jinge-framework/core/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "../../jinge-framework/util/index.js");




const IF_STR_ELSE = 'else';
const T_MAP = Object(_util__WEBPACK_IMPORTED_MODULE_2__["Symbol"])('transition_map');
const P_VAL = Object(_util__WEBPACK_IMPORTED_MODULE_2__["Symbol"])('previous_value');
const OE_H = Object(_util__WEBPACK_IMPORTED_MODULE_2__["Symbol"])('on_end_handler');

const C_BV = Object(_util__WEBPACK_IMPORTED_MODULE_2__["Symbol"])('current_branch_value');
const C_VAL = Object(_util__WEBPACK_IMPORTED_MODULE_2__["Symbol"])('current_value');
const ON_TS_END = Object(_util__WEBPACK_IMPORTED_MODULE_2__["Symbol"])('on_ts_end');

function createEl(renderFn, context, parentStyleIds) {
  const el = new _core__WEBPACK_IMPORTED_MODULE_1__["Component"](Object(_vm__WEBPACK_IMPORTED_MODULE_0__["wrapAttrs"])({
    [_vm__WEBPACK_IMPORTED_MODULE_0__["VM_DEBUG_NAME"]]: 'attrs_of_<if>',
    [_vm__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]]: null,
    [_core__WEBPACK_IMPORTED_MODULE_1__["CONTEXT"]]: context,
    [_core__WEBPACK_IMPORTED_MODULE_1__["ARG_COMPONENTS"]]: {
      [_util__WEBPACK_IMPORTED_MODULE_2__["STR_DEFAULT"]]: renderFn
    }
  }));
  parentStyleIds && Object(_core__WEBPACK_IMPORTED_MODULE_1__["addParentStyleId"])(el, parentStyleIds);
  return el;
}

function renderSwitch(component) {
  const value = component[C_VAL];
  const acs = component[_core__WEBPACK_IMPORTED_MODULE_1__["ARG_COMPONENTS"]];
  if (component.ts && acs) {
    const t = new Map();
    for (const k in acs) {
      t.set(k, [
        k === value ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_ENTERED"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_LEAVED"],
        null // element
      ]);
    }
    component[T_MAP] = t;
    component[P_VAL] = value;
    component[OE_H] = component[ON_TS_END].bind(component);
  }
  const renderFn = acs ? acs[value] : null;
  const roots = component[_core__WEBPACK_IMPORTED_MODULE_1__["ROOT_NODES"]];
  if (!renderFn) {
    roots.push(Object(_util__WEBPACK_IMPORTED_MODULE_2__["createComment"])(_util__WEBPACK_IMPORTED_MODULE_2__["STR_EMPTY"]));
    return roots;
  }
  const el = createEl(renderFn, component[_core__WEBPACK_IMPORTED_MODULE_1__["CONTEXT"]], component[_core__WEBPACK_IMPORTED_MODULE_1__["CSTYLE_PID"]]);
  roots.push(el);
  return el[_core__WEBPACK_IMPORTED_MODULE_1__["RENDER"]]();
}

function updateSwitch(component) {
  if (!Object(_core__WEBPACK_IMPORTED_MODULE_1__["isComponent"])(component[_core__WEBPACK_IMPORTED_MODULE_1__["ROOT_NODES"]][0]) && (
    !component[_core__WEBPACK_IMPORTED_MODULE_1__["ARG_COMPONENTS"]] || !component[_core__WEBPACK_IMPORTED_MODULE_1__["ARG_COMPONENTS"]][component[C_VAL]]
  )) {
    return;
  }

  if (component[T_MAP]) {
    return updateSwitchWithTransition(component);
  }

  doUpdate(component);
}

function doUpdate(component) {
  const roots = component[_core__WEBPACK_IMPORTED_MODULE_1__["ROOT_NODES"]];
  const el = roots[0];
  const isC = Object(_core__WEBPACK_IMPORTED_MODULE_1__["isComponent"])(el);
  const fd = isC ? el[_core__WEBPACK_IMPORTED_MODULE_1__["GET_FIRST_DOM"]]() : el;
  const pa = Object(_util__WEBPACK_IMPORTED_MODULE_2__["getParent"])(isC ? fd : el);
  const renderFn = component[_core__WEBPACK_IMPORTED_MODULE_1__["ARG_COMPONENTS"]] ? component[_core__WEBPACK_IMPORTED_MODULE_1__["ARG_COMPONENTS"]][component[C_VAL]] : null;
  const ne = renderFn ? createEl(renderFn, component[_core__WEBPACK_IMPORTED_MODULE_1__["CONTEXT"]], component[_core__WEBPACK_IMPORTED_MODULE_1__["CSTYLE_PID"]]) : null;
  roots[0] = ne || Object(_util__WEBPACK_IMPORTED_MODULE_2__["createComment"])(_util__WEBPACK_IMPORTED_MODULE_2__["STR_EMPTY"]);
  Object(_util__WEBPACK_IMPORTED_MODULE_2__["insertBefore"])(
    pa,
    ne ? ne[_core__WEBPACK_IMPORTED_MODULE_1__["RENDER"]]() : roots[0],
    fd
  );
  if (isC) {
    el[_core__WEBPACK_IMPORTED_MODULE_1__["DESTROY"]]();
  } else {
    Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeChild"])(pa, fd);
  }
  ne && renderFn && ne[_core__WEBPACK_IMPORTED_MODULE_1__["HANDLE_AFTER_RENDER"]]();
  component[_core__WEBPACK_IMPORTED_MODULE_1__["NOTIFY"]]('branch-switched', component[C_BV]);
}

function cancelTs(t, tn, e, component) {
  const el = t[1];
  if (el.nodeType !== Node.ELEMENT_NODE) {
    return;
  }
  const onEnd = component[OE_H];
  Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeClass"])(el, tn + (e ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_C_ENTER"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_C_LEAVE"]));
  Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeClass"])(el, tn + (e ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_C_ENTER_ACTIVE"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_C_LEAVE_ACTIVE"]));
  Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeEvent"])(el, _core__WEBPACK_IMPORTED_MODULE_1__["TS_TRANSITION_END"], onEnd);
  Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeEvent"])(el, _core__WEBPACK_IMPORTED_MODULE_1__["TS_ANIMATION_END"], onEnd);
  component[_core__WEBPACK_IMPORTED_MODULE_1__["NOTIFY"]](_core__WEBPACK_IMPORTED_MODULE_1__["TS_TRANSITION"], e ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_ENTER_CANCELLED"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_LEAVE_CANCELLED"], el);
}

function startTs(t, tn, e, component) {
  const el = t[1];
  const onEnd = component[OE_H];
  if (el.nodeType !== Node.ELEMENT_NODE) {
    onEnd();
    return;
  }
  const classOfStart = tn + (e ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_C_ENTER"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_C_LEAVE"]);
  const classOfActive = tn + (e ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_C_ENTER_ACTIVE"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_C_LEAVE_ACTIVE"]);

  Object(_util__WEBPACK_IMPORTED_MODULE_2__["addClass"])(el, classOfStart);
  // force render by calling getComputedStyle
  Object(_core__WEBPACK_IMPORTED_MODULE_1__["getDurationType"])(el);
  Object(_util__WEBPACK_IMPORTED_MODULE_2__["addClass"])(el, classOfActive);
  const tsEndName = Object(_core__WEBPACK_IMPORTED_MODULE_1__["getDurationType"])(el);
  if (!tsEndName) {
    onEnd();
    return;
  }
  t[0] = e ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_ENTERING"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_LEAVING"];
  Object(_util__WEBPACK_IMPORTED_MODULE_2__["addEvent"])(el, tsEndName, onEnd);
  component[_core__WEBPACK_IMPORTED_MODULE_1__["NOTIFY"]](_core__WEBPACK_IMPORTED_MODULE_1__["TS_TRANSITION"], e ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_BEFORE_ENTER"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_BEFORE_LEAVE"], el);
  Object(_util__WEBPACK_IMPORTED_MODULE_2__["setImmediate"])(() => {
    component[_core__WEBPACK_IMPORTED_MODULE_1__["NOTIFY"]](_core__WEBPACK_IMPORTED_MODULE_1__["TS_TRANSITION"], e ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_ENTER"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_LEAVE"], el);
  });
}
function updateSwitchWithTransition(component) {
  const value = component[C_VAL];
  const pv = component[P_VAL];
  const tn = component.ts;
  let pt = component[T_MAP].get(pv);
  if (!pt) {
    pt = [
      pv === IF_STR_ELSE ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_LEAVED"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_ENTERED"],
      null // element
    ];
    component[T_MAP].set(pv, pt);
  }
  // debugger;
  if (pt[0] === _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_ENTERING"]) {
    if (value === pv) return;
    cancelTs(pt, tn, true, component);
    startTs(pt, tn, false, component);
  } else if (pt[0] === _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_LEAVING"]) {
    if (value !== pv) return;
    cancelTs(pt, tn, false, component);
    startTs(pt, tn, true, component);
  } else if (pt[0] === _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_ENTERED"]) {
    pt[1] = component[_core__WEBPACK_IMPORTED_MODULE_1__["GET_TRANSITION_DOM"]]();
    startTs(pt, tn, false, component);
  } else if (pt[0] === _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_LEAVED"]) {
    pt[1] = component[_core__WEBPACK_IMPORTED_MODULE_1__["GET_TRANSITION_DOM"]]();
    startTs(pt, tn, true, component);
  }
}

function updateSwitchOnTransitionEnd(component) {
  // console.log('on end')
  const value = component[C_VAL];
  const pv = component[P_VAL];
  const tn = component.ts;
  const pt = component[T_MAP].get(pv);
  const e = pt[0] === _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_ENTERING"];
  const el = pt[1];

  if (el.nodeType === Node.ELEMENT_NODE) {
    Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeEvent"])(el, _core__WEBPACK_IMPORTED_MODULE_1__["TS_TRANSITION_END"], component[OE_H]);
    Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeEvent"])(el, _core__WEBPACK_IMPORTED_MODULE_1__["TS_ANIMATION_END"], component[OE_H]);
    Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeClass"])(el, tn + (e ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_C_ENTER"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_C_LEAVE"]));
    Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeClass"])(el, tn + (e ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_C_ENTER_ACTIVE"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_C_LEAVE_ACTIVE"]));
    component[_core__WEBPACK_IMPORTED_MODULE_1__["NOTIFY"]](_core__WEBPACK_IMPORTED_MODULE_1__["TS_TRANSITION"], e ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_AFTER_ENTER"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_AFTER_LEAVE"]);
  }

  pt[0] = e ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_ENTERED"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_LEAVED"];

  if (e) return;

  doUpdate(component);
  component[P_VAL] = value;
  const ct = component[T_MAP].get(value);
  if (!ct) {
    return;
  }
  const fd = component[_core__WEBPACK_IMPORTED_MODULE_1__["GET_TRANSITION_DOM"]]();
  if (fd.nodeType !== Node.ELEMENT_NODE) {
    ct[0] = _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_ENTERED"];
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
        Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeEvent"])(ts[1], _core__WEBPACK_IMPORTED_MODULE_1__["TS_TRANSITION_END"], component[OE_H]);
        Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeEvent"])(ts[1], _core__WEBPACK_IMPORTED_MODULE_1__["TS_ANIMATION_END"], component[OE_H]);
      }
      ts.length = 0;
    });
    tMap.clear();
  }
}

class IfComponent extends _core__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(attrs) {
    const vm_e9d03bec34 = super(attrs);
    vm_e9d03bec34[C_VAL] = _util__WEBPACK_IMPORTED_MODULE_2__["STR_DEFAULT"];
    vm_e9d03bec34[OE_H] = null;
    vm_e9d03bec34[T_MAP] = null;
    vm_e9d03bec34[P_VAL] = null;
    const fn_e9d03bec34_5 = () => {
      vm_e9d03bec34.expect = attrs.expect;
    };
    fn_e9d03bec34_5();
    attrs[_vm__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_vm__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]]('expect', fn_e9d03bec34_5);
    const fn_e9d03bec34_6 = () => {
      vm_e9d03bec34.ts = attrs.transition;
    };
    fn_e9d03bec34_6();
    attrs[_vm__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_vm__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]]('transition', fn_e9d03bec34_6);
    return vm_e9d03bec34;
  }

  get expect() {
    return this[C_VAL] === _util__WEBPACK_IMPORTED_MODULE_2__["STR_DEFAULT"];
  }

  set expect(v) {
    v = v ? _util__WEBPACK_IMPORTED_MODULE_2__["STR_DEFAULT"] : IF_STR_ELSE;
    if (this[C_VAL] === v) return;
    this[C_VAL] = v;
    this[_core__WEBPACK_IMPORTED_MODULE_1__["UPDATE_IF_NEED"]]();
  }

  get [C_BV]() {
    return this.expect;
  }

  [ON_TS_END]() {
    updateSwitchOnTransitionEnd(this);
  }

  [_core__WEBPACK_IMPORTED_MODULE_1__["RENDER"]]() {
    return renderSwitch(this);
  }

  [_core__WEBPACK_IMPORTED_MODULE_1__["UPDATE"]]() {
    updateSwitch(this);
  }

  [_core__WEBPACK_IMPORTED_MODULE_1__["BEFORE_DESTROY"]]() {
    destroySwitch(this);
  }
}

class SwitchComponent extends _core__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(attrs) {
    const vm_e9d03bec34 = super(attrs);
    vm_e9d03bec34[OE_H] = null;
    vm_e9d03bec34[T_MAP] = null;
    vm_e9d03bec34[P_VAL] = null;
    const fn_e9d03bec34_4 = () => {
      vm_e9d03bec34.test = attrs.test;
    };
    fn_e9d03bec34_4();
    attrs[_vm__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_vm__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]]('test', fn_e9d03bec34_4);
    const fn_e9d03bec34_5 = () => {
      vm_e9d03bec34.ts = attrs.transition;
    };
    fn_e9d03bec34_5();
    attrs[_vm__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_vm__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]]('transition', fn_e9d03bec34_5);
    return vm_e9d03bec34;
  }

  get test() {
    return this[C_VAL];
  }

  set test(v) {
    const acs = this[_core__WEBPACK_IMPORTED_MODULE_1__["ARG_COMPONENTS"]];
    if (!acs || !(v in acs)) {
      v = _util__WEBPACK_IMPORTED_MODULE_2__["STR_DEFAULT"];
    }
    if (this[C_VAL] === v) return;
    this[C_VAL] = v;
    this[_core__WEBPACK_IMPORTED_MODULE_1__["UPDATE_IF_NEED"]]();
  }

  get [C_BV]() {
    return this.test;
  }

  [ON_TS_END]() {
    updateSwitchOnTransitionEnd(this);
  }

  [_core__WEBPACK_IMPORTED_MODULE_1__["RENDER"]]() {
    return renderSwitch(this);
  }

  [_core__WEBPACK_IMPORTED_MODULE_1__["UPDATE"]]() {
    updateSwitch(this);
  }

  [_core__WEBPACK_IMPORTED_MODULE_1__["BEFORE_DESTROY"]]() {
    destroySwitch(this);
  }
}


/***/ }),

/***/ "../../jinge-framework/components/index.js":
/*!*****************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/components/index.js ***!
  \*****************************************************************/
/*! exports provided: ToggleClassComponent, FOR_LENGTH, FOR_KEYS, FOR_KEY_NAME, FOR_WAIT_UPDATE, FOR_UPDATE_ITEM, ForEachComponent, ForComponent, STR_JG_HIDE, HideComponent, BindHtmlComponent, IfComponent, SwitchComponent, ParameterComponent, LogComponent, I18nComponent */
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
/* harmony import */ var _vm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm */ "../../jinge-framework/vm/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "../../jinge-framework/core/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "../../jinge-framework/util/index.js");



/**
 * This component is only for development purpose
 */
class LogComponent extends _core__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(attrs) {
    const vm_e9d03bec34 = super(attrs);
    const fn_e9d03bec34_1 = () => {
      vm_e9d03bec34.msg = attrs.msg;
    };
    fn_e9d03bec34_1();
    attrs[_vm__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_vm__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]]('msg', fn_e9d03bec34_1);
    return vm_e9d03bec34;
  }

  set msg(v) {
    console.log(v);
    this._msg = v;
  }

  get msg() {
    return this._msg;
  }

  [_core__WEBPACK_IMPORTED_MODULE_1__["RENDER"]]() {
    return [Object(_util__WEBPACK_IMPORTED_MODULE_2__["createComment"])('log placeholder')];
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
/* harmony import */ var _vm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm */ "../../jinge-framework/vm/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "../../jinge-framework/core/index.js");



class ParameterComponent extends _core__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(attrs, params) {
    const vm_e9d03bec34 = super(attrs);
    params.forEach(p => {
      vm_e9d03bec34[p] = attrs[p];
      attrs[_vm__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_vm__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]](p, () => {
        vm_e9d03bec34[p] = attrs[p];
      });
    });
    return vm_e9d03bec34;
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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge-framework/util/index.js");
/* harmony import */ var _vm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vm */ "../../jinge-framework/vm/index.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component */ "../../jinge-framework/core/component.js");




function bootstrap(Component, dom, attrs) {
  if (dom === document.body) {
    throw new Error('bootstrap dom cannot be document.body');
  }
  /**
   * as we must pass ViewModel-Object as first argument to Component constructor,
   * we simple pass an empty attrs.
   */
  const bootAttrs = attrs || {};
  const bootComponent = new Component(Object(_vm__WEBPACK_IMPORTED_MODULE_1__["wrapAttrs"])(bootAttrs));
  if (!Object(_component__WEBPACK_IMPORTED_MODULE_2__["isComponent"])(bootComponent)) Object(_util__WEBPACK_IMPORTED_MODULE_0__["assertFail"])();
  bootComponent[_component__WEBPACK_IMPORTED_MODULE_2__["RENDER_TO_DOM"]](dom);
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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge-framework/util/index.js");
/* harmony import */ var _vm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vm */ "../../jinge-framework/vm/index.js");
/* harmony import */ var _messenger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messenger */ "../../jinge-framework/core/messenger.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "../../jinge-framework/core/style.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./i18n */ "../../jinge-framework/core/i18n.js");






const NOTIFY_TRANSITION = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('notify_transition');
const TEMPLATE_RENDER = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('template_render');
const RENDER = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('render');
const RENDER_TO_DOM = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('render_to_dom');
const ARG_COMPONENTS = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('arg_components');
const PASSED_ATTRS = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('passed_attrs');
const CLONE = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('clone');
const DESTROY = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('destroy');
const CONTEXT = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('context');
const CONTEXT_STATE = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('context_state');
const ROOT_NODES = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('root_nodes');
const NON_ROOT_COMPONENT_NODES = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('non_root_components');
const REF_NODES = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('ref_nodes');
const SET_REF_NODE = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('setChild');
const REF_BELONGS = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('ref_belongs');
const RELATED_DOM_REFS = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('related_dom_refs');
const GET_STATE_NAME = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('get_state_name');
const AFTER_RENDER = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('afterRender');
const HANDLE_AFTER_RENDER = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('handleAfterRender');
const HANDLE_BEFORE_DESTROY = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('handleBeforeDestroy');
const GET_FIRST_DOM = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('getFirstHtmlDOM');
const GET_LAST_DOM = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('getLastHtmlDOM');
const GET_TRANSITION_DOM = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('getTransitionDOM');
const BEFORE_DESTROY = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('beforeDestroy');
const GET_CONTEXT = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('getContext');
const SET_CONTEXT = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('setContext');
const GET_REF = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('getRef');
const UPDATE = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('update');
const UPDATE_IF_NEED = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('update_if_need');
const UPDATE_NEXT_MAP = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('update_next_tick_map');
const STATE = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('state');
const STATE_INITIALIZE = 0;
const STATE_RENDERED = 1;
const STATE_WILLDESTROY = 2;
const STATE_DESTROIED = 4;
const STATE_NAMES = [
  'initialize', 'rendered', 'willdestroy', 'destroied'
];

const DOM_ON = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('add_dom_listener');
const DOM_PASS_LISTENERS = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('pass_all_listeners_to_dom');

const I18N_WATCH = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('i18n_watch');
const DOM_LISTENER_DEREGISTERS = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('dom_listener_deregisters');
const I18N_LISTENER_DEREGISTERS = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('i18n_listener_deregisters');

function copyContext(context) {
  if (!context) return null;
  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["assignObject"])(Object(_util__WEBPACK_IMPORTED_MODULE_0__["createEmptyObject"])(), context);
}

class Component extends _messenger__WEBPACK_IMPORTED_MODULE_2__["Messenger"] {
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
    if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(attrs) || !(_vm__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"] in attrs)) {
      throw new Error('First argument passed to Component constructor must be ViewModel with Messenger interface. See https://[todo]');
    }
    super(attrs[_messenger__WEBPACK_IMPORTED_MODULE_2__["LISTENERS"]]);

    this[PASSED_ATTRS] = attrs;

    this[_vm__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]] = null;
    this[_vm__WEBPACK_IMPORTED_MODULE_1__["VM_SETTER_FN_MAP"]] = null;

    this[UPDATE_NEXT_MAP] = null;
    this[_style__WEBPACK_IMPORTED_MODULE_3__["CSTYLE_PID"]] = null;
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
    this[_vm__WEBPACK_IMPORTED_MODULE_1__["VM_RELATED_LISTENERS"]] = null;

    // saved listener deregisters, will be auto called when component is destroied
    this[DOM_LISTENER_DEREGISTERS] = null;
    this[I18N_LISTENER_DEREGISTERS] = null;

    return Object(_vm__WEBPACK_IMPORTED_MODULE_1__["wrapComponent"])(this);
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
    const deregs = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getOrCreateArrayProperty"])(
      this,
      I18N_LISTENER_DEREGISTERS
    );
    const unwatcher = _i18n__WEBPACK_IMPORTED_MODULE_4__["i18n"].watch(() => {
      // bind component to listener's function context.
      listener.call(this);
    }, immediate);
    const deregister = () => {
      unwatcher();
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["arrayRemove"])(deregs, deregister);
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
    const lisDeregister = Object(_util__WEBPACK_IMPORTED_MODULE_0__["registerEvent"])($el, eventName, $event => {
      // bind component to listener's function context.
      listener.call(this, $event);
    }, capture);

    const deregs = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getOrCreateArrayProperty"])(this, DOM_LISTENER_DEREGISTERS);
    const deregister = () => {
      lisDeregister();
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["arrayRemove"])(deregs, deregister);
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
    const lis = this[_messenger__WEBPACK_IMPORTED_MODULE_2__["LISTENERS"]];
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
    if (rns.length === 0) Object(_util__WEBPACK_IMPORTED_MODULE_0__["assertFail"])();
    const el = rns[0];
    return isComponent(el) ? el[GET_TRANSITION_DOM]() : el;
  }

  [GET_FIRST_DOM]() {
    const rns = this[ROOT_NODES];
    if (rns.length === 0) Object(_util__WEBPACK_IMPORTED_MODULE_0__["assertFail"])();
    const el = rns[0];
    return isComponent(el) ? el[GET_FIRST_DOM]() : el;
  }

  [GET_LAST_DOM]() {
    const rns = this[ROOT_NODES];
    if (rns.length === 0) Object(_util__WEBPACK_IMPORTED_MODULE_0__["assertFail"])();
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
      renderFn = this[ARG_COMPONENTS][_util__WEBPACK_IMPORTED_MODULE_0__["STR_DEFAULT"]];
    }
    if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(renderFn)) {
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["assertFail"])(`render function of ${Clazz.name} not found. Forget static getter "template"?`);
    }
    _style__WEBPACK_IMPORTED_MODULE_3__["manager"][_style__WEBPACK_IMPORTED_MODULE_3__["CSTYLE_ADD"]](Clazz.style);
    return renderFn(this);
  }

  /**
   *
   * @param {HTMLElement} $targetDOM
   * @param {Boolean} replaceMode if false, use append mode
   */
  [RENDER_TO_DOM]($targetDOM, replaceMode = true) {
    if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isDOMNode"])($targetDOM)) Object(_util__WEBPACK_IMPORTED_MODULE_0__["assertFail"])();
    if (this[STATE] !== STATE_INITIALIZE) {
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["assertFail"])();
    }
    const rr = assertRenderResults(this[RENDER]());
    _style__WEBPACK_IMPORTED_MODULE_3__["manager"][_style__WEBPACK_IMPORTED_MODULE_3__["CSTYLE_ATTACH"]]();
    if (replaceMode) {
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["replaceChild"])(Object(_util__WEBPACK_IMPORTED_MODULE_0__["getParent"])($targetDOM), rr, $targetDOM);
    } else {
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["appendChild"])($targetDOM, rr);
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
    this[_vm__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_vm__WEBPACK_IMPORTED_MODULE_1__["VM_NOTIFIABLE"]] = false;
    this[PASSED_ATTRS][_vm__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_vm__WEBPACK_IMPORTED_MODULE_1__["VM_NOTIFIABLE"]] = false;

    // notify before destroy lifecycle
    // 需要注意，必须先 NOTIFY 向外通知销毁消息，再执行 BEFORE_DESTROY 生命周期函数。
    //   因为在 BEFORE_DESTROY 里会销毁外部消息回调函数里可能会用到的属性等资源。
    this[_messenger__WEBPACK_IMPORTED_MODULE_2__["NOTIFY"]](_util__WEBPACK_IMPORTED_MODULE_0__["BEFORE_DESTROY_EVENT_NAME"], this);
    this[BEFORE_DESTROY]();
    // destroy children(include child component and html nodes)
    this[HANDLE_BEFORE_DESTROY](removeDOM);
    // clear messenger listeners.
    super[_messenger__WEBPACK_IMPORTED_MODULE_2__["CLEAR"]]();
    // remove component style
    _style__WEBPACK_IMPORTED_MODULE_3__["manager"][_style__WEBPACK_IMPORTED_MODULE_3__["CSTYLE_DEL"]](this.constructor.style);
    // destroy attrs passed to constructor
    const attrs = this[PASSED_ATTRS];
    attrs[_vm__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_vm__WEBPACK_IMPORTED_MODULE_1__["VM_DESTROY"]]();
    // unlink all symbol property. may be unnecessary.
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["getOwnPropertySymbols"])(attrs, p => {
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
    const sfm = this[_vm__WEBPACK_IMPORTED_MODULE_1__["VM_SETTER_FN_MAP"]];
    if (sfm) {
      sfm.forEach((fn, prop) => {
        if (fn === null) return;
        const v = this[prop];
        if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(v) && (_vm__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"] in v)) {
          v[_vm__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_vm__WEBPACK_IMPORTED_MODULE_1__["VM_REMOVE_PARENT"]](
            this[_vm__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_vm__WEBPACK_IMPORTED_MODULE_1__["VM_HOST"]],
            prop
          );
        }
      });
      sfm.clear();
      this[_vm__WEBPACK_IMPORTED_MODULE_1__["VM_SETTER_FN_MAP"]] = null;
    }
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["getOwnPropertyNames"])(this, prop => {
      if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(this[prop])) {
        this[prop] = null;
      }
    });
    // destroy view model, it's import to pass false as argument
    this[_vm__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_vm__WEBPACK_IMPORTED_MODULE_1__["VM_DESTROY"]](false);

    // clear next tick update setImmediate
    const unm = this[UPDATE_NEXT_MAP];
    if (unm) {
      unm.forEach(imm => {
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["clearImmediate"])(imm);
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
    this[_vm__WEBPACK_IMPORTED_MODULE_1__["VM_SETTER_FN_MAP"]] =
      this[PASSED_ATTRS] =
      this[NON_ROOT_COMPONENT_NODES] =
      this[ROOT_NODES] =
      this[REF_NODES] =
      this[REF_BELONGS] =
      this[ARG_COMPONENTS] = null;
    // unlink VM_ATTRS, mark component destroied
    // 这行代码必须放在最后，因为在 ../viewmodel/proxy.js 里面，
    //   需要使用 VM_ATTRS 是否存在来判断组件是否已经销毁。
    this[_vm__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]] = null;
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
          $parent = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getParent"])(node);
        }
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["removeChild"])($parent, node);
      }
    });
    this[ROOT_NODES].length = 0;
  }

  [HANDLE_AFTER_RENDER]() {
    /*
     * Set NOTIFIABLE=true to enable ViewModel notify.
     * Don't forgot to add these code if you override HANDLE_AFTER_RENDER
     */
    this[PASSED_ATTRS][_vm__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_vm__WEBPACK_IMPORTED_MODULE_1__["VM_NOTIFIABLE"]] = true;
    this[_vm__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_vm__WEBPACK_IMPORTED_MODULE_1__["VM_NOTIFIABLE"]] = true;

    this[ROOT_NODES].forEach(n => {
      if (isComponent(n)) n[HANDLE_AFTER_RENDER]();
    });
    this[NON_ROOT_COMPONENT_NODES].forEach(n => {
      if (isComponent(n)) n[HANDLE_AFTER_RENDER]();
    });
    this[STATE] = STATE_RENDERED;
    this[CONTEXT_STATE] = this[CONTEXT_STATE] > 0 ? -2 : -1; // has been rendered, can't modify context
    this[AFTER_RENDER]();
    this[_messenger__WEBPACK_IMPORTED_MODULE_2__["NOTIFY"]](_util__WEBPACK_IMPORTED_MODULE_0__["AFTER_RENDER_EVENT_NAME"], this);
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

    if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(handler)) {
      handler = this[UPDATE];
    }

    if (!nextTick) {
      handler.call(this);
      return;
    }

    const ntMap = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getOrCreateMapProperty"])(this, UPDATE_NEXT_MAP);
    if (ntMap.has(handler)) {
      // already in queue.
      return;
    }
    ntMap.set(handler, Object(_util__WEBPACK_IMPORTED_MODULE_0__["setImmediate"])(() => {
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
        this[CONTEXT] = Object(_util__WEBPACK_IMPORTED_MODULE_0__["createEmptyObject"])();
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
    const rns = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getOrCreateMapProperty"])(this, REF_NODES);
    let elOrArr = rns.get(ref);
    if (!elOrArr) {
      rns.set(ref, el);
    } else if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isArray"])(elOrArr)) {
      elOrArr.push(el);
    } else {
      elOrArr = [elOrArr, el];
      rns.set(ref, elOrArr);
    }
    if (isComponent(el)) {
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["getOrCreateArrayProperty"])(el, REF_BELONGS).push([
        this, ref
      ]);
      return;
    }
    if (this === relatedComponent) {
      return;
    }
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["getOrCreateArrayProperty"])(
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
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["getOwnPropertyNames"])(ctx, propN => {
      ctx[propN] = null;
    });
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["getOwnPropertySymbols"])(ctx, propN => {
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
      if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isArray"])(rns)) {
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["arrayRemove"])(rns, el || info[2]);
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
  if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isArray"])(renderResults) || renderResults.length === 0) {
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
/*! exports provided: I18N_GET_RENDER, I18N_GET_TEXT, I18N_GET_ATTR, I18N_LOCALE_CHANGE, I18N_SWITCH_LOCALE, I18N_RENDER_DEPS, I18N_CURRENT_LOCALE, i18n, _t */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18N_GET_RENDER", function() { return I18N_GET_RENDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18N_GET_TEXT", function() { return I18N_GET_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18N_GET_ATTR", function() { return I18N_GET_ATTR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18N_LOCALE_CHANGE", function() { return I18N_LOCALE_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18N_SWITCH_LOCALE", function() { return I18N_SWITCH_LOCALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18N_RENDER_DEPS", function() { return I18N_RENDER_DEPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18N_CURRENT_LOCALE", function() { return I18N_CURRENT_LOCALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i18n", function() { return i18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_t", function() { return _t; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge-framework/util/index.js");
/* harmony import */ var _messenger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messenger */ "../../jinge-framework/core/messenger.js");



const I18N_GET_RENDER = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('fn_get_render');
const I18N_GET_TEXT = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('fn_get_text');
const I18N_GET_ATTR = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('fn_get_attr');
const I18N_LOCALE_CHANGE = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('locale_change');
const I18N_SWITCH_LOCALE = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('switch_locale');
const I18N_RENDER_DEPS = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('register_render_dependent_functions');
const I18N_CURRENT_LOCALE = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('current_locale');

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
    this[I18N_RENDER_DEPS] = null;
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
          if (this[LAST_FETCHING_KEY] !== key || this[CURRENT_DATA].locale === locale) {
            /*
             * ignore if callback has been expired.
             * 使用闭包的技巧来检测当前回调是否已经过期，
             * 即，是否已经有新的 fetchFn 函数的调用。
             */
            return;
          }
          const data = this[CACHE].get(locale);
          this[CURRENT_DATA] = data;
          this[_messenger__WEBPACK_IMPORTED_MODULE_1__["NOTIFY"]](I18N_LOCALE_CHANGE, this.locale);
        });
      } else {
        throw new Error(`i18n data of "${locale}" is not found. `);
      }
    } else {
      this[CURRENT_DATA] = data;
      this[_messenger__WEBPACK_IMPORTED_MODULE_1__["NOTIFY"]](I18N_LOCALE_CHANGE, this.locale);
    }
  }

  [I18N_GET_TEXT](key, params) {
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

  [I18N_GET_RENDER](key) {
    return getRenderOrAttr(this[CURRENT_DATA], this[I18N_RENDER_DEPS], 'render', key);
  }

  [I18N_GET_ATTR](key) {
    return getRenderOrAttr(this[CURRENT_DATA], this[I18N_RENDER_DEPS], 'attribute', key);
  }

  /**
   * Bind listener to LOCALE_CHANGE event,
   * return a function auto remove this listener
   * @param {Function} handler a listener bind to LOCALE_CHANGE event
   * @param {Boolean} immediate call listener immediately, default is false.
   * @returns {Function} a function auto remove listener
   */
  watch(listener, immediate) {
    this[_messenger__WEBPACK_IMPORTED_MODULE_1__["ON"]](I18N_LOCALE_CHANGE, listener);
    if (immediate) listener(this.locale);
    return function unwatcher() {
      this[_messenger__WEBPACK_IMPORTED_MODULE_1__["OFF"]](I18N_LOCALE_CHANGE, listener);
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
const i18n = new I18nService();

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
/*! exports provided: bootstrap, NOTIFY_TRANSITION, TEMPLATE_RENDER, RENDER, RENDER_TO_DOM, ARG_COMPONENTS, PASSED_ATTRS, CLONE, DESTROY, CONTEXT, CONTEXT_STATE, ROOT_NODES, NON_ROOT_COMPONENT_NODES, REF_NODES, SET_REF_NODE, REF_BELONGS, RELATED_DOM_REFS, GET_STATE_NAME, AFTER_RENDER, HANDLE_AFTER_RENDER, HANDLE_BEFORE_DESTROY, GET_FIRST_DOM, GET_LAST_DOM, GET_TRANSITION_DOM, BEFORE_DESTROY, GET_CONTEXT, SET_CONTEXT, GET_REF, UPDATE, UPDATE_IF_NEED, UPDATE_NEXT_MAP, STATE, STATE_INITIALIZE, STATE_RENDERED, STATE_WILLDESTROY, STATE_DESTROIED, STATE_NAMES, DOM_ON, DOM_PASS_LISTENERS, I18N_WATCH, Component, destroyRelatedRefs, isComponent, assertRenderResults, operateRootHtmlDOM, I18N_GET_RENDER, I18N_GET_TEXT, I18N_GET_ATTR, I18N_LOCALE_CHANGE, I18N_SWITCH_LOCALE, I18N_RENDER_DEPS, I18N_CURRENT_LOCALE, i18n, _t, LISTENERS, notifyHelper, onHelper, offHelper, clearHelper, onceHelper, NOTIFY, ON, OFF, CLEAR, Messenger, passListeners, emptyRenderFn, errorRenderFn, textRenderFn, i18nRenderFn, CSTYLE_PID, CSTYLE_ADD, CSTYLE_DEL, CSTYLE_ATTACH, addParentStyleId, manager, TS_TRANSITION_END, TS_ANIMATION_END, TS_TRANSITION_DURATION, TS_ANIMATION_DURATION, TS_TRANSITION, TS_ZERO_S, TS_ENTER, TS_LEAVE, TS_C_ENTER, TS_C_LEAVE, TS_C_ENTER_ACTIVE, TS_C_LEAVE_ACTIVE, TS_BEFORE_ENTER, TS_AFTER_ENTER, TS_BEFORE_LEAVE, TS_AFTER_LEAVE, TS_ENTER_CANCELLED, TS_LEAVE_CANCELLED, TS_STATE_ENTERING, TS_STATE_ENTERED, TS_STATE_LEAVING, TS_STATE_LEAVED, getDurationType, getDuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap */ "../../jinge-framework/core/bootstrap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bootstrap", function() { return _bootstrap__WEBPACK_IMPORTED_MODULE_0__["bootstrap"]; });

/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "../../jinge-framework/core/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NOTIFY_TRANSITION", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["NOTIFY_TRANSITION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TEMPLATE_RENDER", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["TEMPLATE_RENDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RENDER", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["RENDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RENDER_TO_DOM", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["RENDER_TO_DOM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ARG_COMPONENTS", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["ARG_COMPONENTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PASSED_ATTRS", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["PASSED_ATTRS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CLONE", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["CLONE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DESTROY", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["DESTROY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CONTEXT", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["CONTEXT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CONTEXT_STATE", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["CONTEXT_STATE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ROOT_NODES", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["ROOT_NODES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NON_ROOT_COMPONENT_NODES", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["NON_ROOT_COMPONENT_NODES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REF_NODES", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["REF_NODES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_REF_NODE", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["SET_REF_NODE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REF_BELONGS", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["REF_BELONGS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RELATED_DOM_REFS", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["RELATED_DOM_REFS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_STATE_NAME", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["GET_STATE_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AFTER_RENDER", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["AFTER_RENDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HANDLE_AFTER_RENDER", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["HANDLE_AFTER_RENDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HANDLE_BEFORE_DESTROY", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["HANDLE_BEFORE_DESTROY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_FIRST_DOM", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["GET_FIRST_DOM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_LAST_DOM", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["GET_LAST_DOM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_TRANSITION_DOM", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["GET_TRANSITION_DOM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BEFORE_DESTROY", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["BEFORE_DESTROY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_CONTEXT", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["GET_CONTEXT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_CONTEXT", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["SET_CONTEXT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_REF", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["GET_REF"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["UPDATE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_IF_NEED", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["UPDATE_IF_NEED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_NEXT_MAP", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["UPDATE_NEXT_MAP"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATE", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["STATE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATE_INITIALIZE", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["STATE_INITIALIZE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATE_RENDERED", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["STATE_RENDERED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATE_WILLDESTROY", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["STATE_WILLDESTROY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATE_DESTROIED", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["STATE_DESTROIED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATE_NAMES", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["STATE_NAMES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DOM_ON", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["DOM_ON"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DOM_PASS_LISTENERS", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["DOM_PASS_LISTENERS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18N_WATCH", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["I18N_WATCH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["Component"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "destroyRelatedRefs", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["destroyRelatedRefs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isComponent", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["isComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertRenderResults", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["assertRenderResults"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "operateRootHtmlDOM", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["operateRootHtmlDOM"]; });

/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./i18n */ "../../jinge-framework/core/i18n.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18N_GET_RENDER", function() { return _i18n__WEBPACK_IMPORTED_MODULE_2__["I18N_GET_RENDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18N_GET_TEXT", function() { return _i18n__WEBPACK_IMPORTED_MODULE_2__["I18N_GET_TEXT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18N_GET_ATTR", function() { return _i18n__WEBPACK_IMPORTED_MODULE_2__["I18N_GET_ATTR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18N_LOCALE_CHANGE", function() { return _i18n__WEBPACK_IMPORTED_MODULE_2__["I18N_LOCALE_CHANGE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18N_SWITCH_LOCALE", function() { return _i18n__WEBPACK_IMPORTED_MODULE_2__["I18N_SWITCH_LOCALE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18N_RENDER_DEPS", function() { return _i18n__WEBPACK_IMPORTED_MODULE_2__["I18N_RENDER_DEPS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18N_CURRENT_LOCALE", function() { return _i18n__WEBPACK_IMPORTED_MODULE_2__["I18N_CURRENT_LOCALE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i18n", function() { return _i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_t", function() { return _i18n__WEBPACK_IMPORTED_MODULE_2__["_t"]; });

/* harmony import */ var _messenger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messenger */ "../../jinge-framework/core/messenger.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LISTENERS", function() { return _messenger__WEBPACK_IMPORTED_MODULE_3__["LISTENERS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notifyHelper", function() { return _messenger__WEBPACK_IMPORTED_MODULE_3__["notifyHelper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onHelper", function() { return _messenger__WEBPACK_IMPORTED_MODULE_3__["onHelper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offHelper", function() { return _messenger__WEBPACK_IMPORTED_MODULE_3__["offHelper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearHelper", function() { return _messenger__WEBPACK_IMPORTED_MODULE_3__["clearHelper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onceHelper", function() { return _messenger__WEBPACK_IMPORTED_MODULE_3__["onceHelper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NOTIFY", function() { return _messenger__WEBPACK_IMPORTED_MODULE_3__["NOTIFY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ON", function() { return _messenger__WEBPACK_IMPORTED_MODULE_3__["ON"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OFF", function() { return _messenger__WEBPACK_IMPORTED_MODULE_3__["OFF"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CLEAR", function() { return _messenger__WEBPACK_IMPORTED_MODULE_3__["CLEAR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Messenger", function() { return _messenger__WEBPACK_IMPORTED_MODULE_3__["Messenger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "passListeners", function() { return _messenger__WEBPACK_IMPORTED_MODULE_3__["passListeners"]; });

/* harmony import */ var _render_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./render_fns */ "../../jinge-framework/core/render_fns.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "emptyRenderFn", function() { return _render_fns__WEBPACK_IMPORTED_MODULE_4__["emptyRenderFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "errorRenderFn", function() { return _render_fns__WEBPACK_IMPORTED_MODULE_4__["errorRenderFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textRenderFn", function() { return _render_fns__WEBPACK_IMPORTED_MODULE_4__["textRenderFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i18nRenderFn", function() { return _render_fns__WEBPACK_IMPORTED_MODULE_4__["i18nRenderFn"]; });

/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "../../jinge-framework/core/style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSTYLE_PID", function() { return _style__WEBPACK_IMPORTED_MODULE_5__["CSTYLE_PID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSTYLE_ADD", function() { return _style__WEBPACK_IMPORTED_MODULE_5__["CSTYLE_ADD"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSTYLE_DEL", function() { return _style__WEBPACK_IMPORTED_MODULE_5__["CSTYLE_DEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSTYLE_ATTACH", function() { return _style__WEBPACK_IMPORTED_MODULE_5__["CSTYLE_ATTACH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addParentStyleId", function() { return _style__WEBPACK_IMPORTED_MODULE_5__["addParentStyleId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "manager", function() { return _style__WEBPACK_IMPORTED_MODULE_5__["manager"]; });

/* harmony import */ var _transition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transition */ "../../jinge-framework/core/transition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_TRANSITION_END", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["TS_TRANSITION_END"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_ANIMATION_END", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["TS_ANIMATION_END"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_TRANSITION_DURATION", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["TS_TRANSITION_DURATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_ANIMATION_DURATION", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["TS_ANIMATION_DURATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_TRANSITION", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["TS_TRANSITION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_ZERO_S", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["TS_ZERO_S"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_ENTER", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["TS_ENTER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_LEAVE", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["TS_LEAVE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_C_ENTER", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["TS_C_ENTER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_C_LEAVE", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["TS_C_LEAVE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_C_ENTER_ACTIVE", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["TS_C_ENTER_ACTIVE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_C_LEAVE_ACTIVE", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["TS_C_LEAVE_ACTIVE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_BEFORE_ENTER", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["TS_BEFORE_ENTER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_AFTER_ENTER", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["TS_AFTER_ENTER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_BEFORE_LEAVE", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["TS_BEFORE_LEAVE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_AFTER_LEAVE", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["TS_AFTER_LEAVE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_ENTER_CANCELLED", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["TS_ENTER_CANCELLED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_LEAVE_CANCELLED", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["TS_LEAVE_CANCELLED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_STATE_ENTERING", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["TS_STATE_ENTERING"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_STATE_ENTERED", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["TS_STATE_ENTERED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_STATE_LEAVING", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["TS_STATE_LEAVING"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_STATE_LEAVED", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["TS_STATE_LEAVED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDurationType", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["getDurationType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDuration", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["getDuration"]; });










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

/***/ "../../jinge-framework/core/render_fns.js":
/*!****************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/core/render_fns.js ***!
  \****************************************************************/
/*! exports provided: emptyRenderFn, errorRenderFn, textRenderFn, i18nRenderFn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyRenderFn", function() { return emptyRenderFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorRenderFn", function() { return errorRenderFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textRenderFn", function() { return textRenderFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i18nRenderFn", function() { return i18nRenderFn; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge-framework/util/index.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "../../jinge-framework/core/component.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./i18n */ "../../jinge-framework/core/i18n.js");




function emptyRenderFn(component) {
  const el = Object(_util__WEBPACK_IMPORTED_MODULE_0__["createComment"])(_util__WEBPACK_IMPORTED_MODULE_0__["STR_EMPTY"]);
  component[_component__WEBPACK_IMPORTED_MODULE_1__["ROOT_NODES"]].push(el);
  return [el];
}

function errorRenderFn(component) {
  const el = Object(_util__WEBPACK_IMPORTED_MODULE_0__["createElement"])('span', {
    style: 'color: red !important;'
  });
  el.textContent = 'template parsing failed! please check webpack log.';
  component[_component__WEBPACK_IMPORTED_MODULE_1__["ROOT_NODES"]].push(el);
  return [el];
}

function textRenderFn(component, txtContent) {
  const el = Object(_util__WEBPACK_IMPORTED_MODULE_0__["createTextNode"])(txtContent);
  component[_component__WEBPACK_IMPORTED_MODULE_1__["ROOT_NODES"]].push(el);
  return el;
}

function i18nRenderFn(component, key) {
  const el = Object(_util__WEBPACK_IMPORTED_MODULE_0__["createTextNode"])();
  const fn = () => {
    el.textContent = _i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"][_i18n__WEBPACK_IMPORTED_MODULE_2__["I18N_GET_TEXT"]](key);
  };
  fn();
  component[_component__WEBPACK_IMPORTED_MODULE_1__["I18N_WATCH"]](fn);
  component[_component__WEBPACK_IMPORTED_MODULE_1__["ROOT_NODES"]].push(el);
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
  const $e = Object(_util__WEBPACK_IMPORTED_MODULE_0__["createElement"])('span', {
    style: 'position:absolute;left:-10000px;',
    class: 'jg-hide'
  });
  Object(_util__WEBPACK_IMPORTED_MODULE_0__["appendChild"])(document.body, $e);
  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["getCSPropertyValue"])(getComputedStyle($e), 'display') === 'none';
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
    const $style = Object(_util__WEBPACK_IMPORTED_MODULE_0__["createElement"])('style', {
      type: 'text/css',
      id: sty.dom
    });
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["appendChild"])(document.head, $style);
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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge-framework/util/index.js");


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
  const cst = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getComputedStyle"])(el);
  if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["getCSPropertyValue"])(cst, TS_TRANSITION_DURATION) !== TS_ZERO_S) {
    return TS_TRANSITION_END;
  } else if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["getCSPropertyValue"])(cst, TS_ANIMATION_DURATION) !== TS_ZERO_S) {
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
  const cst = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getComputedStyle"])(el);
  let dur = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getCSPropertyValue"])(cst, TS_TRANSITION_DURATION);
  if (dur !== TS_ZERO_S) {
    return [TS_TRANSITION_END, parseDuration(dur)];
  }
  dur = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getCSPropertyValue"])(cst, TS_ANIMATION_DURATION);
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
/*! exports provided: ToggleClassComponent, FOR_LENGTH, FOR_KEYS, FOR_KEY_NAME, FOR_WAIT_UPDATE, FOR_UPDATE_ITEM, ForEachComponent, ForComponent, STR_JG_HIDE, HideComponent, BindHtmlComponent, IfComponent, SwitchComponent, ParameterComponent, LogComponent, I18nComponent, bootstrap, NOTIFY_TRANSITION, TEMPLATE_RENDER, RENDER, RENDER_TO_DOM, ARG_COMPONENTS, PASSED_ATTRS, CLONE, DESTROY, CONTEXT, CONTEXT_STATE, ROOT_NODES, NON_ROOT_COMPONENT_NODES, REF_NODES, SET_REF_NODE, REF_BELONGS, RELATED_DOM_REFS, GET_STATE_NAME, AFTER_RENDER, HANDLE_AFTER_RENDER, HANDLE_BEFORE_DESTROY, GET_FIRST_DOM, GET_LAST_DOM, GET_TRANSITION_DOM, BEFORE_DESTROY, GET_CONTEXT, SET_CONTEXT, GET_REF, UPDATE, UPDATE_IF_NEED, UPDATE_NEXT_MAP, STATE, STATE_INITIALIZE, STATE_RENDERED, STATE_WILLDESTROY, STATE_DESTROIED, STATE_NAMES, DOM_ON, DOM_PASS_LISTENERS, I18N_WATCH, Component, destroyRelatedRefs, isComponent, assertRenderResults, operateRootHtmlDOM, I18N_GET_RENDER, I18N_GET_TEXT, I18N_GET_ATTR, I18N_LOCALE_CHANGE, I18N_SWITCH_LOCALE, I18N_RENDER_DEPS, I18N_CURRENT_LOCALE, i18n, _t, LISTENERS, notifyHelper, onHelper, offHelper, clearHelper, onceHelper, NOTIFY, ON, OFF, CLEAR, Messenger, passListeners, emptyRenderFn, errorRenderFn, textRenderFn, i18nRenderFn, CSTYLE_PID, CSTYLE_ADD, CSTYLE_DEL, CSTYLE_ATTACH, addParentStyleId, manager, TS_TRANSITION_END, TS_ANIMATION_END, TS_TRANSITION_DURATION, TS_ANIMATION_DURATION, TS_TRANSITION, TS_ZERO_S, TS_ENTER, TS_LEAVE, TS_C_ENTER, TS_C_LEAVE, TS_C_ENTER_ACTIVE, TS_C_LEAVE_ACTIVE, TS_BEFORE_ENTER, TS_AFTER_ENTER, TS_BEFORE_LEAVE, TS_AFTER_LEAVE, TS_ENTER_CANCELLED, TS_LEAVE_CANCELLED, TS_STATE_ENTERING, TS_STATE_ENTERED, TS_STATE_LEAVING, TS_STATE_LEAVED, getDurationType, getDuration, typeOf, isObject, isString, isNumber, isUndefined, isArray, isBoolean, isFunction, instanceOf, isDOMNode, isPromise, arrayIndexOf, arrayRemove, arrayPushIfNotExist, arrayFind, arrayFindIndex, arrayEqual, STR_DEFAULT, STR_JINGE, STR_EMPTY, STR_LENGTH, BEFORE_DESTROY_EVENT_NAME, AFTER_RENDER_EVENT_NAME, HTML_ATTR_checked, HTML_ATTR_disabled, HTML_ATTR_selected, HTML_ATTR_readOnly, HTML_ATTR_autofocus, HTML_ATTR_autocomplete, HTML_ATTR_required, HTML_ATTR_controls, HTML_ATTR_autoplay, HTML_ATTR_draggable, HTML_ATTR_multiple, HTML_ATTR_muted, HTML_ATTR_value, Symbol, assertFail, startsWith, endsWith, defineProperty, assignObject, obj2class, obj2style, defineProperties, getOwnPropertyNames, getOwnPropertySymbols, isPropertyEnumerable, createEmptyObject, uid, mapObject, getOrCreateProperty, getOrCreateValueOfMap, getOrCreateMapProperty, getOrCreateArrayValueOfMap, getOrCreateArrayProperty, setImmediate, clearImmediate, getParent, setText, setAttribute, removeAttribute, setInputValue, createElement, createElementWithoutAttrs, createSVGElement, createSVGElementWithoutAttrs, createFragment, createTextNode, createElementWithChild, createComment, replaceChild, insertBefore, insertAfter, removeChild, appendChild, hasClass, toggleClass, addClass, removeClass, replaceClass, addEvent, removeEvent, registerEvent, getComputedStyle, getCSPropertyValue, VM_ATTRS, VM_DEBUG_NAME, VM_PROXY, VM_ON, VM_OFF, VM_NOTIFY, VM_NOTIFIABLE, VM_HOST, VM_RELATED_LISTENERS, VM_ADD_PARENT, VM_REMOVE_PARENT, VM_SHIFT_PARENT, VM_DESTROY, isInnerObj, isViewModel, isPublicProp, ViewModelAttrs, vmRelatedClear, RelatedListenersStore, vmWatch, vmUnwatch, VM_SETTER_FN_MAP, ObjectProxyHandler, ComponentProxyHandler, PromiseProxyHandler, ArrayProxyHandler, wrapViewModel, VM, wrapComponent, wrapAttrs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "../../jinge-framework/components/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleClassComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["ToggleClassComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FOR_LENGTH", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["FOR_LENGTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FOR_KEYS", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["FOR_KEYS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FOR_KEY_NAME", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["FOR_KEY_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FOR_WAIT_UPDATE", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["FOR_WAIT_UPDATE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FOR_UPDATE_ITEM", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["FOR_UPDATE_ITEM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForEachComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["ForEachComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["ForComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STR_JG_HIDE", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["STR_JG_HIDE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HideComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["HideComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BindHtmlComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["BindHtmlComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IfComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["IfComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitchComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["SwitchComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParameterComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["ParameterComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["LogComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18nComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["I18nComponent"]; });

/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "../../jinge-framework/core/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bootstrap", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["bootstrap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NOTIFY_TRANSITION", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["NOTIFY_TRANSITION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TEMPLATE_RENDER", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["TEMPLATE_RENDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RENDER", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["RENDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RENDER_TO_DOM", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["RENDER_TO_DOM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ARG_COMPONENTS", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["ARG_COMPONENTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PASSED_ATTRS", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["PASSED_ATTRS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CLONE", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["CLONE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DESTROY", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["DESTROY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CONTEXT", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["CONTEXT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CONTEXT_STATE", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["CONTEXT_STATE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ROOT_NODES", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["ROOT_NODES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NON_ROOT_COMPONENT_NODES", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["NON_ROOT_COMPONENT_NODES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REF_NODES", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["REF_NODES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_REF_NODE", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["SET_REF_NODE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REF_BELONGS", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["REF_BELONGS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RELATED_DOM_REFS", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["RELATED_DOM_REFS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_STATE_NAME", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["GET_STATE_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AFTER_RENDER", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["AFTER_RENDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HANDLE_AFTER_RENDER", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["HANDLE_AFTER_RENDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HANDLE_BEFORE_DESTROY", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["HANDLE_BEFORE_DESTROY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_FIRST_DOM", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["GET_FIRST_DOM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_LAST_DOM", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["GET_LAST_DOM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_TRANSITION_DOM", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["GET_TRANSITION_DOM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BEFORE_DESTROY", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["BEFORE_DESTROY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_CONTEXT", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["GET_CONTEXT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_CONTEXT", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["SET_CONTEXT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_REF", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["GET_REF"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["UPDATE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_IF_NEED", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["UPDATE_IF_NEED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_NEXT_MAP", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["UPDATE_NEXT_MAP"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATE", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["STATE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATE_INITIALIZE", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["STATE_INITIALIZE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATE_RENDERED", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["STATE_RENDERED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATE_WILLDESTROY", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["STATE_WILLDESTROY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATE_DESTROIED", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["STATE_DESTROIED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATE_NAMES", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["STATE_NAMES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DOM_ON", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["DOM_ON"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DOM_PASS_LISTENERS", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["DOM_PASS_LISTENERS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18N_WATCH", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["I18N_WATCH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["Component"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "destroyRelatedRefs", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["destroyRelatedRefs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isComponent", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["isComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertRenderResults", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["assertRenderResults"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "operateRootHtmlDOM", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["operateRootHtmlDOM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18N_GET_RENDER", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["I18N_GET_RENDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18N_GET_TEXT", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["I18N_GET_TEXT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18N_GET_ATTR", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["I18N_GET_ATTR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18N_LOCALE_CHANGE", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["I18N_LOCALE_CHANGE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18N_SWITCH_LOCALE", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["I18N_SWITCH_LOCALE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18N_RENDER_DEPS", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["I18N_RENDER_DEPS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18N_CURRENT_LOCALE", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["I18N_CURRENT_LOCALE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i18n", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["i18n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_t", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["_t"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LISTENERS", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["LISTENERS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notifyHelper", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["notifyHelper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onHelper", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["onHelper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offHelper", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["offHelper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearHelper", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["clearHelper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onceHelper", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["onceHelper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NOTIFY", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["NOTIFY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ON", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["ON"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OFF", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["OFF"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CLEAR", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["CLEAR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Messenger", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["Messenger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "passListeners", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["passListeners"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "emptyRenderFn", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["emptyRenderFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "errorRenderFn", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["errorRenderFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textRenderFn", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["textRenderFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i18nRenderFn", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["i18nRenderFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSTYLE_PID", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["CSTYLE_PID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSTYLE_ADD", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["CSTYLE_ADD"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSTYLE_DEL", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["CSTYLE_DEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSTYLE_ATTACH", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["CSTYLE_ATTACH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addParentStyleId", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["addParentStyleId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "manager", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["manager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_TRANSITION_END", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["TS_TRANSITION_END"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_ANIMATION_END", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["TS_ANIMATION_END"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_TRANSITION_DURATION", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["TS_TRANSITION_DURATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_ANIMATION_DURATION", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["TS_ANIMATION_DURATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_TRANSITION", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["TS_TRANSITION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_ZERO_S", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["TS_ZERO_S"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_ENTER", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["TS_ENTER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_LEAVE", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["TS_LEAVE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_C_ENTER", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["TS_C_ENTER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_C_LEAVE", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["TS_C_LEAVE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_C_ENTER_ACTIVE", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["TS_C_ENTER_ACTIVE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_C_LEAVE_ACTIVE", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["TS_C_LEAVE_ACTIVE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_BEFORE_ENTER", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["TS_BEFORE_ENTER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_AFTER_ENTER", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["TS_AFTER_ENTER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_BEFORE_LEAVE", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["TS_BEFORE_LEAVE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_AFTER_LEAVE", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["TS_AFTER_LEAVE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_ENTER_CANCELLED", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["TS_ENTER_CANCELLED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_LEAVE_CANCELLED", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["TS_LEAVE_CANCELLED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_STATE_ENTERING", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_ENTERING"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_STATE_ENTERED", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_ENTERED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_STATE_LEAVING", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_LEAVING"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_STATE_LEAVED", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_LEAVED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDurationType", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["getDurationType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDuration", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["getDuration"]; });

/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "../../jinge-framework/util/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "typeOf", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["typeOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "instanceOf", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["instanceOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDOMNode", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isDOMNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isPromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayIndexOf", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["arrayIndexOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayRemove", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["arrayRemove"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayPushIfNotExist", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["arrayPushIfNotExist"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayFind", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["arrayFind"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayFindIndex", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["arrayFindIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayEqual", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["arrayEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STR_DEFAULT", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["STR_DEFAULT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STR_JINGE", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["STR_JINGE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STR_EMPTY", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["STR_EMPTY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STR_LENGTH", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["STR_LENGTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BEFORE_DESTROY_EVENT_NAME", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["BEFORE_DESTROY_EVENT_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AFTER_RENDER_EVENT_NAME", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["AFTER_RENDER_EVENT_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_checked", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_checked"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_disabled", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_disabled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_selected", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_selected"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_readOnly", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_readOnly"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_autofocus", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_autofocus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_autocomplete", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_autocomplete"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_required", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_required"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_controls", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_controls"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_autoplay", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_autoplay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_draggable", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_draggable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_multiple", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_multiple"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_muted", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_muted"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_value", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_value"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Symbol", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["Symbol"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertFail", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["assertFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startsWith", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["startsWith"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endsWith", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["endsWith"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineProperty", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["defineProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assignObject", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["assignObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "obj2class", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["obj2class"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "obj2style", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["obj2style"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineProperties", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["defineProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOwnPropertyNames", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["getOwnPropertyNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOwnPropertySymbols", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["getOwnPropertySymbols"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPropertyEnumerable", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isPropertyEnumerable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createEmptyObject", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["createEmptyObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uid", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["uid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapObject", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["mapObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOrCreateProperty", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["getOrCreateProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOrCreateValueOfMap", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["getOrCreateValueOfMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOrCreateMapProperty", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["getOrCreateMapProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOrCreateArrayValueOfMap", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["getOrCreateArrayValueOfMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOrCreateArrayProperty", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["getOrCreateArrayProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setImmediate", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["setImmediate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearImmediate", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["clearImmediate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getParent", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["getParent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setText", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["setText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setAttribute", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["setAttribute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeAttribute", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["removeAttribute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setInputValue", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["setInputValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["createElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElementWithoutAttrs", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["createElementWithoutAttrs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSVGElement", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["createSVGElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSVGElementWithoutAttrs", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["createSVGElementWithoutAttrs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFragment", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["createFragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTextNode", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["createTextNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElementWithChild", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["createElementWithChild"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createComment", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["createComment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replaceChild", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["replaceChild"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "insertBefore", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["insertBefore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "insertAfter", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["insertAfter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeChild", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["removeChild"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "appendChild", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["appendChild"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasClass", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["hasClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleClass", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["toggleClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["addClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["removeClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replaceClass", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["replaceClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addEvent", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["addEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeEvent", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["removeEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerEvent", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["registerEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getComputedStyle", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["getComputedStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCSPropertyValue", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["getCSPropertyValue"]; });

/* harmony import */ var _vm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vm */ "../../jinge-framework/vm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_ATTRS", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["VM_ATTRS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_DEBUG_NAME", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["VM_DEBUG_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_PROXY", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["VM_PROXY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_ON", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["VM_ON"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_OFF", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["VM_OFF"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_NOTIFY", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["VM_NOTIFY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_NOTIFIABLE", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["VM_NOTIFIABLE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_HOST", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["VM_HOST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_RELATED_LISTENERS", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["VM_RELATED_LISTENERS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_ADD_PARENT", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["VM_ADD_PARENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_REMOVE_PARENT", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["VM_REMOVE_PARENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_SHIFT_PARENT", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["VM_SHIFT_PARENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_DESTROY", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["VM_DESTROY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInnerObj", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["isInnerObj"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isViewModel", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["isViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPublicProp", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["isPublicProp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewModelAttrs", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["ViewModelAttrs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vmRelatedClear", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["vmRelatedClear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RelatedListenersStore", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["RelatedListenersStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vmWatch", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["vmWatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vmUnwatch", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["vmUnwatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_SETTER_FN_MAP", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["VM_SETTER_FN_MAP"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObjectProxyHandler", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["ObjectProxyHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentProxyHandler", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["ComponentProxyHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PromiseProxyHandler", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["PromiseProxyHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrayProxyHandler", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["ArrayProxyHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrapViewModel", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["wrapViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["VM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrapComponent", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["wrapComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrapAttrs", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["wrapAttrs"]; });







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
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "../../jinge-framework/util/type.js");


function getParent($ele) {
  return $ele.parentNode;
}

function setText($element, text) {
  if (Object(_type__WEBPACK_IMPORTED_MODULE_0__["isArray"])(text)) {
    text = JSON.stringify(text);
  }
  $element.textContent = text;
}

function setAttribute($ele, attrName, attrValue) {
  if (!attrName) return;
  if (Object(_type__WEBPACK_IMPORTED_MODULE_0__["isObject"])(attrName)) {
    for (const attrN in attrName) {
      setAttribute($ele, attrN, attrName[attrN]);
    }
    return;
  }
  if (Object(_type__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(attrValue) || attrValue === null) {
    removeAttribute($ele, attrName);
  } else {
    $ele.setAttribute(attrName, attrValue);
  }
}

function removeAttribute($ele, attrName) {
  if (!attrName) return;
  if (Object(_type__WEBPACK_IMPORTED_MODULE_0__["isObject"])(attrName)) {
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
      if (an && !Object(_type__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(attrs[an])) {
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
  if (!Object(_type__WEBPACK_IMPORTED_MODULE_0__["isArray"])(newNode)) return newNode;
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
    if (Object(_type__WEBPACK_IMPORTED_MODULE_0__["isArray"])(ch)) {
      return ch.forEach(cc => appendChild($parent, cc));
    }
    if (Object(_type__WEBPACK_IMPORTED_MODULE_0__["isString"])(ch)) {
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
/*! exports provided: typeOf, isObject, isString, isNumber, isUndefined, isArray, isBoolean, isFunction, instanceOf, isDOMNode, isPromise, arrayIndexOf, arrayRemove, arrayPushIfNotExist, arrayFind, arrayFindIndex, arrayEqual, STR_DEFAULT, STR_JINGE, STR_EMPTY, STR_LENGTH, BEFORE_DESTROY_EVENT_NAME, AFTER_RENDER_EVENT_NAME, HTML_ATTR_checked, HTML_ATTR_disabled, HTML_ATTR_selected, HTML_ATTR_readOnly, HTML_ATTR_autofocus, HTML_ATTR_autocomplete, HTML_ATTR_required, HTML_ATTR_controls, HTML_ATTR_autoplay, HTML_ATTR_draggable, HTML_ATTR_multiple, HTML_ATTR_muted, HTML_ATTR_value, Symbol, assertFail, startsWith, endsWith, defineProperty, assignObject, obj2class, obj2style, defineProperties, getOwnPropertyNames, getOwnPropertySymbols, isPropertyEnumerable, createEmptyObject, uid, mapObject, getOrCreateProperty, getOrCreateValueOfMap, getOrCreateMapProperty, getOrCreateArrayValueOfMap, getOrCreateArrayProperty, setImmediate, clearImmediate, getParent, setText, setAttribute, removeAttribute, setInputValue, createElement, createElementWithoutAttrs, createSVGElement, createSVGElementWithoutAttrs, createFragment, createTextNode, createElementWithChild, createComment, replaceChild, insertBefore, insertAfter, removeChild, appendChild, hasClass, toggleClass, addClass, removeClass, replaceClass, addEvent, removeEvent, registerEvent, getComputedStyle, getCSPropertyValue */
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

/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom */ "../../jinge-framework/util/dom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getParent", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["getParent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setText", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["setText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setAttribute", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["setAttribute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeAttribute", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["removeAttribute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setInputValue", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["setInputValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["createElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElementWithoutAttrs", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["createElementWithoutAttrs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSVGElement", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["createSVGElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSVGElementWithoutAttrs", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["createSVGElementWithoutAttrs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFragment", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["createFragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTextNode", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["createTextNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElementWithChild", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["createElementWithChild"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createComment", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["createComment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replaceChild", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["replaceChild"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "insertBefore", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["insertBefore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "insertAfter", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["insertAfter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeChild", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["removeChild"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "appendChild", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["appendChild"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasClass", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["hasClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleClass", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["toggleClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["addClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["removeClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replaceClass", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["replaceClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addEvent", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["addEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeEvent", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["removeEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerEvent", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["registerEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getComputedStyle", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["getComputedStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCSPropertyValue", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["getCSPropertyValue"]; });









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
/*! exports provided: VM_ATTRS, VM_DEBUG_NAME, VM_PROXY, VM_ON, VM_OFF, VM_NOTIFY, VM_NOTIFIABLE, VM_HOST, VM_RELATED_LISTENERS, VM_ADD_PARENT, VM_REMOVE_PARENT, VM_SHIFT_PARENT, VM_DESTROY, isInnerObj, isViewModel, isPublicProp, ViewModelAttrs, vmRelatedClear, RelatedListenersStore, vmWatch, vmUnwatch */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VM_ADD_PARENT", function() { return VM_ADD_PARENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VM_REMOVE_PARENT", function() { return VM_REMOVE_PARENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VM_SHIFT_PARENT", function() { return VM_SHIFT_PARENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VM_DESTROY", function() { return VM_DESTROY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInnerObj", function() { return isInnerObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isViewModel", function() { return isViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPublicProp", function() { return isPublicProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewModelAttrs", function() { return ViewModelAttrs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vmRelatedClear", function() { return vmRelatedClear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatedListenersStore", function() { return RelatedListenersStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vmWatch", function() { return vmWatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vmUnwatch", function() { return vmUnwatch; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge-framework/util/index.js");


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

const VM_ADD_PARENT = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('fn_add_parent');
const VM_REMOVE_PARENT = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('fn_remove_parent');
const VM_SHIFT_PARENT = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('fn_shift_parent');
const VM_DESTROY = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('fn_destroy');

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

  [VM_ADD_PARENT](parent, prop) {
    const pArr = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getOrCreateArrayProperty"])(this, PARENTS);
    pArr.push([parent, prop]);
  }

  [VM_REMOVE_PARENT](parent, prop) {
    const pArr = this[PARENTS];
    if (!pArr) return;
    const idx = pArr.findIndex(ps => ps[0] === parent && ps[1] === prop);
    if (idx >= 0) pArr.splice(idx, 1);
  }

  [VM_SHIFT_PARENT](parent, prop, delta) {
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

  [VM_DESTROY](unlinkHostProperties = true) {
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
      a && a[VM_REMOVE_PARENT](host, prop);
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
/*! exports provided: VM_ATTRS, VM_DEBUG_NAME, VM_PROXY, VM_ON, VM_OFF, VM_NOTIFY, VM_NOTIFIABLE, VM_HOST, VM_RELATED_LISTENERS, VM_ADD_PARENT, VM_REMOVE_PARENT, VM_SHIFT_PARENT, VM_DESTROY, isInnerObj, isViewModel, isPublicProp, ViewModelAttrs, vmRelatedClear, RelatedListenersStore, vmWatch, vmUnwatch, VM_SETTER_FN_MAP, ObjectProxyHandler, ComponentProxyHandler, PromiseProxyHandler, ArrayProxyHandler, wrapViewModel, VM, wrapComponent, wrapAttrs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "../../jinge-framework/vm/core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_ATTRS", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_DEBUG_NAME", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["VM_DEBUG_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_PROXY", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["VM_PROXY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_ON", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_OFF", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["VM_OFF"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_NOTIFY", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["VM_NOTIFY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_NOTIFIABLE", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["VM_NOTIFIABLE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_HOST", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["VM_HOST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_RELATED_LISTENERS", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["VM_RELATED_LISTENERS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_ADD_PARENT", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["VM_ADD_PARENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_REMOVE_PARENT", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["VM_REMOVE_PARENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_SHIFT_PARENT", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["VM_SHIFT_PARENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_DESTROY", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["VM_DESTROY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInnerObj", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["isInnerObj"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isViewModel", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["isViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPublicProp", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["isPublicProp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewModelAttrs", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["ViewModelAttrs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vmRelatedClear", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["vmRelatedClear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RelatedListenersStore", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["RelatedListenersStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vmWatch", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["vmWatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vmUnwatch", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["vmUnwatch"]; });

/* harmony import */ var _proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./proxy */ "../../jinge-framework/vm/proxy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_SETTER_FN_MAP", function() { return _proxy__WEBPACK_IMPORTED_MODULE_1__["VM_SETTER_FN_MAP"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObjectProxyHandler", function() { return _proxy__WEBPACK_IMPORTED_MODULE_1__["ObjectProxyHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentProxyHandler", function() { return _proxy__WEBPACK_IMPORTED_MODULE_1__["ComponentProxyHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PromiseProxyHandler", function() { return _proxy__WEBPACK_IMPORTED_MODULE_1__["PromiseProxyHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrayProxyHandler", function() { return _proxy__WEBPACK_IMPORTED_MODULE_1__["ArrayProxyHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrapViewModel", function() { return _proxy__WEBPACK_IMPORTED_MODULE_1__["wrapViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM", function() { return _proxy__WEBPACK_IMPORTED_MODULE_1__["VM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrapComponent", function() { return _proxy__WEBPACK_IMPORTED_MODULE_1__["wrapComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrapAttrs", function() { return _proxy__WEBPACK_IMPORTED_MODULE_1__["wrapAttrs"]; });





/***/ }),

/***/ "../../jinge-framework/vm/proxy.js":
/*!*********************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/vm/proxy.js ***!
  \*********************************************************/
/*! exports provided: VM_SETTER_FN_MAP, ObjectProxyHandler, ComponentProxyHandler, PromiseProxyHandler, ArrayProxyHandler, wrapViewModel, VM, wrapComponent, wrapAttrs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VM_SETTER_FN_MAP", function() { return VM_SETTER_FN_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectProxyHandler", function() { return ObjectProxyHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentProxyHandler", function() { return ComponentProxyHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromiseProxyHandler", function() { return PromiseProxyHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayProxyHandler", function() { return ArrayProxyHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapViewModel", function() { return wrapViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VM", function() { return VM; });
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
    a && a[_core__WEBPACK_IMPORTED_MODULE_1__["VM_REMOVE_PARENT"]](target, prop);
  }
  setFn(target, prop, value);
  if (newValIsVM) {
    value[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["VM_ADD_PARENT"]](target, prop);
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
      Object(_core__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(v) && v[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["VM_REMOVE_PARENT"]](target, i);
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
      it[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["VM_REMOVE_PARENT"]](target, i);
    }
    target[i] = v;
    if (Object(_core__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(it)) {
      it[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["VM_ADD_PARENT"]](target, i);
    }
    notifyPropChanged(target, i);
  });
  return target[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["VM_PROXY"]];
}

function _arrayReverseSort(target, fn, arg) {
  target.forEach((it, i) => {
    if (Object(_core__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(it)) {
      it[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["VM_ADD_PARENT"]](target, i);
    }
  });
  target[fn](arg);
  target.forEach((it, i) => {
    if (Object(_core__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(it)) {
      it[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["VM_REMOVE_PARENT"]](parent, i);
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
      it[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["VM_ADD_PARENT"]](arr, i);
    } else if (wrapEachItem) {
      arr[i] = loopWrapVM(it);
    }
  });
  return rtn;
}

function _arrayShiftOrUnshiftProp(arr, delta) {
  arr.forEach((el, i) => {
    if (!Object(_core__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(el)) return;
    el[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["VM_SHIFT_PARENT"]](arr, i, delta);
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
        arg[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["VM_ADD_PARENT"]](target, idx + i);
      }
    });
    for (let i = 0; i < delCount; i++) {
      if (idx + i >= target.length) break;
      const el = target[idx + i];
      if (Object(_core__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(el)) {
        el[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["VM_REMOVE_PARENT"]](target, idx + i);
      }
    }
    const delta = args.length - delCount;
    if (delta !== 0) {
      for (let i = idx + delCount; i < target.length; i++) {
        const el = target[i];
        if (!Object(_core__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(el)) continue;
        el[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["VM_SHIFT_PARENT"]](target, i, delta);
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
      el[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["VM_REMOVE_PARENT"]](target, -1);
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
        arg[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["VM_ADD_PARENT"]](target, i);
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
      el[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["VM_REMOVE_PARENT"]](target, target.length);
    }
    notifyPropChanged(target, _util__WEBPACK_IMPORTED_MODULE_0__["STR_LENGTH"]);
    notifyPropChanged(target, target.length);
    return el;
  },
  push(target, ...args) {
    if (args.length === 0) return target.push();
    args.forEach((arg, i) => {
      if (_argAssert(arg, 'push')) {
        arg[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["VM_ADD_PARENT"]](target, target.length + i);
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
    v[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["VM_ADD_PARENT"]](vm, prop);
    return;
  }
  vm[prop] = loopWrapVM(v);
  v[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["VM_ADD_PARENT"]](vm, prop);
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

// alias for convenient
const VM = wrapViewModel;

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
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge-framework/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
      "h1",
      component[jinge__WEBPACK_IMPORTED_MODULE_0__["CSTYLE_PID"]],
      "Transition Demo"
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__["ROOT_NODES"]].push(el);
    return el;
  })(),
  (() => {
    const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
      "p",
      component[jinge__WEBPACK_IMPORTED_MODULE_0__["CSTYLE_PID"]],
      "Jinge framework only provide basic transition/animation supports."
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__["ROOT_NODES"]].push(el);
    return el;
  })(),
  (() => {
    const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
      "p",
      component[jinge__WEBPACK_IMPORTED_MODULE_0__["CSTYLE_PID"]],
      "TODO: implement advance transtion/animation supports"
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__["ROOT_NODES"]].push(el);
    return el;
  })(),
  (() => {
    const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
      "h3",
      component[jinge__WEBPACK_IMPORTED_MODULE_0__["CSTYLE_PID"]],
      "Toggle className"
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__["ROOT_NODES"]].push(el);
    return el;
  })(),
  (() => {
    const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
      "div",
      component[jinge__WEBPACK_IMPORTED_MODULE_0__["CSTYLE_PID"]],
      Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
        "p",
        ...(() => {
          const attrs = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["wrapAttrs"])({
            [jinge__WEBPACK_IMPORTED_MODULE_0__["VM_DEBUG_NAME"]]: "attrs_of_<toggle-class>",
            [jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]]: null,
            [jinge__WEBPACK_IMPORTED_MODULE_0__["CONTEXT"]]: component[jinge__WEBPACK_IMPORTED_MODULE_0__["CONTEXT"]],
            [jinge__WEBPACK_IMPORTED_MODULE_0__["LISTENERS"]]: {
              transition: [function(...args) {vm_0.handleTransition(...args)}, null]
            },
            class: null,
            transition: true,
            [jinge__WEBPACK_IMPORTED_MODULE_0__["ARG_COMPONENTS"]]: {
              [jinge__WEBPACK_IMPORTED_MODULE_0__["STR_DEFAULT"]]: function(component) {
                return [
                (() => {
                  const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
                    "div",
                    Object(jinge__WEBPACK_IMPORTED_MODULE_0__["assignObject"])({
                      class: "ts"
                    }, component[jinge__WEBPACK_IMPORTED_MODULE_0__["CSTYLE_PID"]]),
                    "Hello, World"
                  );
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__["ROOT_NODES"]].push(el);
                  return el;
                })()
                ];
              }
            }
          });
          const fn_0 = () => {
            attrs.class = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["wrapViewModel"])({
              fade: vm_0.fade,
              slide: vm_0.slide
          });
          };
          fn_0();
          vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]](["fade"], fn_0, component);
          vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]](["slide"], fn_0, component);
          const el = new jinge__WEBPACK_IMPORTED_MODULE_0__["ToggleClassComponent"](attrs);
          component[jinge__WEBPACK_IMPORTED_MODULE_0__["NON_ROOT_COMPONENT_NODES"]].push(el);
          return Object(jinge__WEBPACK_IMPORTED_MODULE_0__["assertRenderResults"])(el[jinge__WEBPACK_IMPORTED_MODULE_0__["RENDER"]](component));
        })()
      ),
      (() => {
        const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
          "button",
          "Fade"
        );
        Object(jinge__WEBPACK_IMPORTED_MODULE_0__["addEvent"])(el, 'click', function(...args) {vm_0.fade = !vm_0.fade})
        return el;
      })(),
      (() => {
        const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
          "button",
          "Slide"
        );
        Object(jinge__WEBPACK_IMPORTED_MODULE_0__["addEvent"])(el, 'click', function(...args) {vm_0.slide = !vm_0.slide})
        return el;
      })(),
      (() => {
        const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
          "button",
          "Both"
        );
        Object(jinge__WEBPACK_IMPORTED_MODULE_0__["addEvent"])(el, 'click', function(...args) {vm_0.fade = !vm_0.fade;vm_0.slide = !vm_0.slide})
        return el;
      })()
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__["ROOT_NODES"]].push(el);
    return el;
  })(),
  (() => {
    const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
      "h3",
      component[jinge__WEBPACK_IMPORTED_MODULE_0__["CSTYLE_PID"]],
      "Hide/Show"
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__["ROOT_NODES"]].push(el);
    return el;
  })(),
  (() => {
    const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
      "div",
      component[jinge__WEBPACK_IMPORTED_MODULE_0__["CSTYLE_PID"]],
      (() => {
        const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
          "button",
          (() => {
            const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createTextNode"])();
            const fn_0 = () => {
              Object(jinge__WEBPACK_IMPORTED_MODULE_0__["setText"])(el, vm_0.show ? 'Hide' : 'Show');
            };
            fn_0();
            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]](["show"], fn_0, component);
            return el;
          })()
        );
        Object(jinge__WEBPACK_IMPORTED_MODULE_0__["addEvent"])(el, 'click', function(...args) {vm_0.show = !vm_0.show})
        return el;
      })(),
      ...(() => {
        const attrs = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["wrapAttrs"])({
          [jinge__WEBPACK_IMPORTED_MODULE_0__["VM_DEBUG_NAME"]]: "attrs_of_<hide>",
          [jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]]: null,
          [jinge__WEBPACK_IMPORTED_MODULE_0__["CONTEXT"]]: component[jinge__WEBPACK_IMPORTED_MODULE_0__["CONTEXT"]],
          test: null,
          transition: true,
          [jinge__WEBPACK_IMPORTED_MODULE_0__["ARG_COMPONENTS"]]: {
            [jinge__WEBPACK_IMPORTED_MODULE_0__["STR_DEFAULT"]]: function(component) {
              return [
              (() => {
                const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
                  "p",
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__["CSTYLE_PID"]],
                  "Hello, World"
                );
                component[jinge__WEBPACK_IMPORTED_MODULE_0__["ROOT_NODES"]].push(el);
                return el;
              })()
              ];
            }
          }
        });
        const fn_0 = () => {
          attrs.test = !vm_0.show;
        };
        fn_0();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]](["show"], fn_0, component);
        const el = new jinge__WEBPACK_IMPORTED_MODULE_0__["HideComponent"](attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__["NON_ROOT_COMPONENT_NODES"]].push(el);
        return Object(jinge__WEBPACK_IMPORTED_MODULE_0__["assertRenderResults"])(el[jinge__WEBPACK_IMPORTED_MODULE_0__["RENDER"]](component));
      })()
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__["ROOT_NODES"]].push(el);
    return el;
  })(),
  (() => {
    const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
      "h3",
      component[jinge__WEBPACK_IMPORTED_MODULE_0__["CSTYLE_PID"]],
      "If"
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__["ROOT_NODES"]].push(el);
    return el;
  })(),
  (() => {
    const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
      "div",
      component[jinge__WEBPACK_IMPORTED_MODULE_0__["CSTYLE_PID"]],
      (() => {
        const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
          "button",
          (() => {
            const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createTextNode"])();
            const fn_0 = () => {
              Object(jinge__WEBPACK_IMPORTED_MODULE_0__["setText"])(el, vm_0.show2 ? 'Hide' : 'Show');
            };
            fn_0();
            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]](["show2"], fn_0, component);
            return el;
          })()
        );
        Object(jinge__WEBPACK_IMPORTED_MODULE_0__["addEvent"])(el, 'click', function(...args) {vm_0.show2 = !vm_0.show2})
        return el;
      })(),
      ...(() => {
        const attrs = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["wrapAttrs"])({
          [jinge__WEBPACK_IMPORTED_MODULE_0__["VM_DEBUG_NAME"]]: "attrs_of_<if>",
          [jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]]: null,
          [jinge__WEBPACK_IMPORTED_MODULE_0__["CONTEXT"]]: component[jinge__WEBPACK_IMPORTED_MODULE_0__["CONTEXT"]],
          [jinge__WEBPACK_IMPORTED_MODULE_0__["LISTENERS"]]: {
            transition: [function(...args) {vm_0.log(...args)}, null]
          },
          expect: null,
          transition: "slide-fade",
          [jinge__WEBPACK_IMPORTED_MODULE_0__["ARG_COMPONENTS"]]: {
            [jinge__WEBPACK_IMPORTED_MODULE_0__["STR_DEFAULT"]]: function(component) {
              return [
              (() => {
                const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
                  "p",
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__["CSTYLE_PID"]],
                  "Hello, World"
                );
                component[jinge__WEBPACK_IMPORTED_MODULE_0__["ROOT_NODES"]].push(el);
                return el;
              })()
              ];
            }
          }
        });
        const fn_0 = () => {
          attrs.expect = vm_0.show2;
        };
        fn_0();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]](["show2"], fn_0, component);
        const el = new jinge__WEBPACK_IMPORTED_MODULE_0__["IfComponent"](attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__["NON_ROOT_COMPONENT_NODES"]].push(el);
        return Object(jinge__WEBPACK_IMPORTED_MODULE_0__["assertRenderResults"])(el[jinge__WEBPACK_IMPORTED_MODULE_0__["RENDER"]](component));
      })()
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__["ROOT_NODES"]].push(el);
    return el;
  })(),
  (() => {
    const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
      "h3",
      component[jinge__WEBPACK_IMPORTED_MODULE_0__["CSTYLE_PID"]],
      "If/Else"
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__["ROOT_NODES"]].push(el);
    return el;
  })(),
  (() => {
    const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
      "div",
      component[jinge__WEBPACK_IMPORTED_MODULE_0__["CSTYLE_PID"]],
      (() => {
        const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
          "button",
          "Toggle"
        );
        Object(jinge__WEBPACK_IMPORTED_MODULE_0__["addEvent"])(el, 'click', function(...args) {vm_0.show3 = !vm_0.show3})
        return el;
      })(),
      ...(() => {
        const attrs = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["wrapAttrs"])({
          [jinge__WEBPACK_IMPORTED_MODULE_0__["VM_DEBUG_NAME"]]: "attrs_of_<if>",
          [jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]]: null,
          [jinge__WEBPACK_IMPORTED_MODULE_0__["CONTEXT"]]: component[jinge__WEBPACK_IMPORTED_MODULE_0__["CONTEXT"]],
          [jinge__WEBPACK_IMPORTED_MODULE_0__["LISTENERS"]]: {
            "branch-switched": [function(...args) {vm_0.log('if updated', ...args)}, null]
          },
          expect: null,
          transition: "slide-fade",
          [jinge__WEBPACK_IMPORTED_MODULE_0__["ARG_COMPONENTS"]]: {
            [jinge__WEBPACK_IMPORTED_MODULE_0__["STR_DEFAULT"]]: function(component) {
              return [
              (() => {
                const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
                  "p",
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__["CSTYLE_PID"]],
                  "Hello, A!"
                );
                component[jinge__WEBPACK_IMPORTED_MODULE_0__["ROOT_NODES"]].push(el);
                return el;
              })()
              ];
            },
            ['else']: function(component) {
              return [
              (() => {
                const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
                  "p",
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__["CSTYLE_PID"]],
                  "Hello, B!"
                );
                component[jinge__WEBPACK_IMPORTED_MODULE_0__["ROOT_NODES"]].push(el);
                return el;
              })()
              ];
            }
          }
        });
        const fn_0 = () => {
          attrs.expect = vm_0.show3;
        };
        fn_0();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]](["show3"], fn_0, component);
        const el = new jinge__WEBPACK_IMPORTED_MODULE_0__["IfComponent"](attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__["NON_ROOT_COMPONENT_NODES"]].push(el);
        return Object(jinge__WEBPACK_IMPORTED_MODULE_0__["assertRenderResults"])(el[jinge__WEBPACK_IMPORTED_MODULE_0__["RENDER"]](component));
      })()
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__["ROOT_NODES"]].push(el);
    return el;
  })(),
  (() => {
    const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
      "h3",
      component[jinge__WEBPACK_IMPORTED_MODULE_0__["CSTYLE_PID"]],
      "Switch"
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__["ROOT_NODES"]].push(el);
    return el;
  })(),
  (() => {
    const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
      "div",
      component[jinge__WEBPACK_IMPORTED_MODULE_0__["CSTYLE_PID"]],
      (() => {
        const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
          "button",
          "Increment ",
          (() => {
            const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createTextNode"])();
            const fn_0 = () => {
              Object(jinge__WEBPACK_IMPORTED_MODULE_0__["setText"])(el, vm_0.si);
            };
            fn_0();
            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]](["si"], fn_0, component);
            return el;
          })()
        );
        Object(jinge__WEBPACK_IMPORTED_MODULE_0__["addEvent"])(el, 'click', function(...args) {vm_0.si = vm_0.si ? vm_0.si + 1 : 1})
        return el;
      })(),
      (() => {
        const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
          "button",
          "Decrement ",
          (() => {
            const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createTextNode"])();
            const fn_0 = () => {
              Object(jinge__WEBPACK_IMPORTED_MODULE_0__["setText"])(el, vm_0.si);
            };
            fn_0();
            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]](["si"], fn_0, component);
            return el;
          })()
        );
        Object(jinge__WEBPACK_IMPORTED_MODULE_0__["addEvent"])(el, 'click', function(...args) {vm_0.si = vm_0.si ? vm_0.si - 1 : 0})
        return el;
      })(),
      ...(() => {
        const attrs = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["wrapAttrs"])({
          [jinge__WEBPACK_IMPORTED_MODULE_0__["VM_DEBUG_NAME"]]: "attrs_of_<switch>",
          [jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]]: null,
          [jinge__WEBPACK_IMPORTED_MODULE_0__["CONTEXT"]]: component[jinge__WEBPACK_IMPORTED_MODULE_0__["CONTEXT"]],
          [jinge__WEBPACK_IMPORTED_MODULE_0__["LISTENERS"]]: {
            "branch-switched": [function(...args) {vm_0.log('switch updated', ...args)}, null]
          },
          test: null,
          transition: "slide-fade",
          [jinge__WEBPACK_IMPORTED_MODULE_0__["ARG_COMPONENTS"]]: {
            ['1']: function(component) {
              return [
              (() => {
                const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
                  "p",
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__["CSTYLE_PID"]],
                  "Hello, A!"
                );
                component[jinge__WEBPACK_IMPORTED_MODULE_0__["ROOT_NODES"]].push(el);
                return el;
              })()
              ];
            },
            ['2']: function(component) {
              return [
              (() => {
                const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
                  "p",
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__["CSTYLE_PID"]],
                  "Hello, B!"
                );
                component[jinge__WEBPACK_IMPORTED_MODULE_0__["ROOT_NODES"]].push(el);
                return el;
              })()
              ];
            },
            [jinge__WEBPACK_IMPORTED_MODULE_0__["STR_DEFAULT"]]: function(component) {
              return [
              (() => {
                const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
                  "p",
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__["CSTYLE_PID"]],
                  "Hello, ",
                  (() => {
                    const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createTextNode"])();
                    const fn_0 = () => {
                      Object(jinge__WEBPACK_IMPORTED_MODULE_0__["setText"])(el, vm_0.si);
                    };
                    fn_0();
                    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]](["si"], fn_0, component);
                    return el;
                  })()
                );
                component[jinge__WEBPACK_IMPORTED_MODULE_0__["ROOT_NODES"]].push(el);
                return el;
              })()
              ];
            }
          }
        });
        const fn_0 = () => {
          attrs.test = vm_0.si;
        };
        fn_0();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]](["si"], fn_0, component);
        const el = new jinge__WEBPACK_IMPORTED_MODULE_0__["SwitchComponent"](attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__["NON_ROOT_COMPONENT_NODES"]].push(el);
        return Object(jinge__WEBPACK_IMPORTED_MODULE_0__["assertRenderResults"])(el[jinge__WEBPACK_IMPORTED_MODULE_0__["RENDER"]](component));
      })()
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__["ROOT_NODES"]].push(el);
    return el;
  })(),
  (() => {
    const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
      "h3",
      component[jinge__WEBPACK_IMPORTED_MODULE_0__["CSTYLE_PID"]],
      "For"
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__["ROOT_NODES"]].push(el);
    return el;
  })(),
  (() => {
    const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
      "p",
      component[jinge__WEBPACK_IMPORTED_MODULE_0__["CSTYLE_PID"]],
      "Not supported!"
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__["ROOT_NODES"]].push(el);
    return el;
  })(),
  (() => {
    const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
      "p",
      component[jinge__WEBPACK_IMPORTED_MODULE_0__["CSTYLE_PID"]],
      "TODO: implement transition for component: <for>"
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__["ROOT_NODES"]].push(el);
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
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge-framework/index.js");
/* harmony import */ var _app_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.html */ "./app.html");




class App extends jinge__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  static get template() {
    return _app_html__WEBPACK_IMPORTED_MODULE_1__["default"];
  }
  log(...args) {
    console.log(...args);
  }
  constructor(args) {
    const vm_e9d03bec34 = super(args);
    vm_e9d03bec34.fade = false;
    vm_e9d03bec34.slide = true;
    vm_e9d03bec34.show = true;
    vm_e9d03bec34.si = 0;
    return vm_e9d03bec34;
  }
  handleTransition(action, className, el) {
    console.log(action, className, el.className);
  }
  handleIfTransition(action, el) {
    console.log(action, el.className);
  }
}

Object(jinge__WEBPACK_IMPORTED_MODULE_0__["bootstrap"])(App, document.getElementById('root-app'));


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map