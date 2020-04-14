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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../jinge-framework/lib/components/class.js":
/*!************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/components/class.js ***!
  \************************************************************************************/
/*! exports provided: ToggleClassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleClassComponent", function() { return ToggleClassComponent; });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "../../jinge-framework/lib/vm/common.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/component */ "../../jinge-framework/lib/core/component.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "../../jinge-framework/lib/util/index.js");
/* harmony import */ var _core_transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/transition */ "../../jinge-framework/lib/core/transition.js");




function loopOperateClass(el, isAddOperate, domClass) {
    if (Object(_core_component__WEBPACK_IMPORTED_MODULE_1__["isComponent"])(el)) {
        el[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].rootNodes.forEach(ce => loopOperateClass(ce, isAddOperate, domClass));
    }
    else if (isAddOperate) {
        el.classList.add(domClass);
    }
    else {
        el.classList.remove(domClass);
    }
}
class ToggleClassComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor(attrs) {
      if (!attrs || !Object(_util__WEBPACK_IMPORTED_MODULE_2__["isObject"])(attrs.class)) {
        throw new Error('<toggle-class> component require "class" attribute to be Object.');
      }
      super(attrs);
      const __vm_92fb158b76b3 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
      const fn_2_92fb158b76b3 = () => {
        __vm_92fb158b76b3.domClass = attrs.class;
      };
      fn_2_92fb158b76b3();
      attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('class', fn_2_92fb158b76b3);
      const fn_3_92fb158b76b3 = () => {
        __vm_92fb158b76b3.transition = !!attrs.transition;
      };
      fn_3_92fb158b76b3();
      attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('transition', fn_3_92fb158b76b3);
      __vm_92fb158b76b3._t = null;
      __vm_92fb158b76b3._i = -1;
      __vm_92fb158b76b3[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('class.**', () => {
        __vm_92fb158b76b3.__updateIfNeed();
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
        Object.keys(cs).forEach(k => {
            const v = cs[k];
            if (!this.transition) {
                loopOperateClass(this, !!v, k);
                return;
            }
            if (first) {
                this._t.set(k, [
                    v ? _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].ENTERED : _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].LEAVED,
                    null // saved onEnd callback
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
            if ((v && s <= _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].ENTERED) || (!v && s >= _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].LEAVING)) {
                return;
            }
            if (s === (v ? _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].LEAVING : _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].ENTERING)) {
                el.classList.remove(k + (v ? '-leave-active' : '-enter-active'));
                el.classList.remove(k + (v ? '-leave' : '-enter'));
                Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeEvent"])(el, 'transitionend', t[1]);
                Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeEvent"])(el, 'animationend', t[1]);
                t[1] = null;
                this.__notify('transition', v ? 'leave-cancelled' : 'enter-cancelled', k, el);
            }
            const classOfStart = k + (v ? '-enter' : '-leave');
            const classOfActive = k + (v ? '-enter-active' : '-leave-active');
            el.classList.add(classOfStart);
            // force render by calling getComputedStyle
            Object(_core_transition__WEBPACK_IMPORTED_MODULE_3__["getDurationType"])(el);
            el.classList.add(classOfActive);
            const tsEndName = Object(_core_transition__WEBPACK_IMPORTED_MODULE_3__["getDurationType"])(el);
            if (!tsEndName) {
                el.classList.remove(classOfStart);
                el.classList.remove(classOfActive);
                t[0] = v ? _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].ENTERED : _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].LEAVED;
                if (v) {
                    el.classList.add(k);
                }
                else {
                    el.classList.remove(k);
                }
                return;
            }
            const onEnd = () => {
                Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeEvent"])(el, 'transitionend', onEnd);
                Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeEvent"])(el, 'animationend', onEnd);
                el.classList.remove(classOfStart);
                el.classList.remove(classOfActive);
                t[1] = null;
                t[0] = v ? _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].ENTERED : _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].LEAVED;
                if (v) {
                    el.classList.add(k);
                }
                else {
                    el.classList.remove(k);
                }
                this.__notify('transition', v ? 'after-enter' : 'after-leave', k, el);
            };
            t[0] = v ? _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].ENTERING : _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].LEAVING;
            t[1] = onEnd;
            Object(_util__WEBPACK_IMPORTED_MODULE_2__["addEvent"])(el, tsEndName, onEnd);
            this.__notify('transition', v ? 'before-enter' : 'before-leave', k, el);
            Object(_util__WEBPACK_IMPORTED_MODULE_2__["setImmediate"])(() => {
                this.__notify('transition', v ? 'enter' : 'leave', k, el);
            });
        });
    }
}
//# sourceMappingURL=class.js.map

/***/ }),

/***/ "../../jinge-framework/lib/components/dynamic.js":
/*!**************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/components/dynamic.js ***!
  \**************************************************************************************/
/*! exports provided: DynamicRenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicRenderComponent", function() { return DynamicRenderComponent; });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "../../jinge-framework/lib/vm/common.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/component */ "../../jinge-framework/lib/core/component.js");
/* harmony import */ var _vm_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vm/index */ "../../jinge-framework/lib/vm/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ "../../jinge-framework/lib/util/index.js");




function createEl(component) {
    const Clazz = component._r._component;
    const pAttrs = component[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].passedAttrs;
    const attrs = Object(_vm_index__WEBPACK_IMPORTED_MODULE_2__["attrs"])({
        [_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]]: {
            context: component[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].context
        }
    });
    for (const attrName in pAttrs) {
        attrs[attrName] = pAttrs[attrName];
    }
    component._currentAttrs = attrs;
    const el = new Clazz(attrs);
    const parentStyleIds = component[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].compStylePid;
    if (parentStyleIds) {
        el.__addStylePid(parentStyleIds);
    }
    return el[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
}
class DynamicRenderComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor(attrs) {
      if (!Object(_util__WEBPACK_IMPORTED_MODULE_3__["isObject"])(attrs.render) || !Object(_core_component__WEBPACK_IMPORTED_MODULE_1__["isComponent"])(attrs.render._component)) {
        throw new Error('<dynamic> component require "render" attribute to be object with "_component" property.');
      }
      super(attrs);
      const __vm_92fb158b76b3 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
      __vm_92fb158b76b3._currentAttrs = null;
      const fn_3_92fb158b76b3 = () => {
        __vm_92fb158b76b3.render = attrs.render;
      };
      fn_3_92fb158b76b3();
      attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('render', fn_3_92fb158b76b3);
      attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('*', prop => {
        __vm_92fb158b76b3._currentAttrs[prop[0]] = __vm_92fb158b76b3[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].passedAttrs[prop[0]];
      });
    }
    get render() {
        return this._r;
    }
    set render(v) {
        if (this._r === v || this._r._component === v._component)
            return;
        this.__updateIfNeed();
    }
    __render() {
        const el = createEl(this);
        return el.__render();
    }
    __update() {
        const roots = this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].rootNodes;
        const el = roots[0];
        const fd = el.__firstDOM;
        const pa = fd.parentNode;
        const newEl = createEl(this);
        roots[0] = newEl;
        const nels = newEl.__render();
        pa.insertBefore(nels.length > 1 ? Object(_util__WEBPACK_IMPORTED_MODULE_3__["createFragment"])(nels) : nels[0], fd);
        el.__destroy();
        newEl.__handleAfterRender();
    }
}
//# sourceMappingURL=dynamic.js.map

/***/ }),

/***/ "../../jinge-framework/lib/components/for.js":
/*!**********************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/components/for.js ***!
  \**********************************************************************************/
/*! exports provided: ForEachComponent, ForComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForEachComponent", function() { return ForEachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForComponent", function() { return ForComponent; });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "../../jinge-framework/lib/vm/common.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/component */ "../../jinge-framework/lib/core/component.js");
/* harmony import */ var _vm_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vm/index */ "../../jinge-framework/lib/vm/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ "../../jinge-framework/lib/util/index.js");




class ForEachComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor(attrs, item, index, isLast) {
      super(attrs);
      const __vm_92fb158b76b3 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
      if (Object(_vm_common__WEBPACK_IMPORTED_MODULE_0__["isViewModel"])(item)) {
        __vm_92fb158b76b3.each = item;
      } else {
        __vm_92fb158b76b3._e = item;
      }
      __vm_92fb158b76b3.index = index;
      __vm_92fb158b76b3.isFirst = index === 0;
      __vm_92fb158b76b3.isLast = isLast;
    }
    get each() {
        return this._e;
    }
    set each(v) {
        this._e = v;
    }
    __render() {
        return this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].slots.default(this);
    }
}
function createEl(item, i, isLast, itemRenderFn, context, cstyPid) {
    const el = new ForEachComponent(Object(_vm_index__WEBPACK_IMPORTED_MODULE_2__["attrs"])({
        [_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]]: {
            context,
            slots: {
                default: itemRenderFn
            }
        }
    }), item, i, isLast);
    if (cstyPid) {
        el.__addStylePid(cstyPid);
    }
    return el[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
}
function appendRenderEach(item, i, isLast, itemRenderFn, roots, context, cstyPid) {
    const el = createEl(item, i, isLast, itemRenderFn, context, cstyPid);
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
function renderItems(items, itemRenderFn, roots, keys, keyName, context, cstyPid) {
    const result = [];
    const tmpKeyMap = new Map();
    items.forEach((item, i) => {
        // _assertVm(item, i);
        if (keyName !== 'index') {
            keys.push(_prepareKey(item, i, tmpKeyMap, keyName));
        }
        result.push(...appendRenderEach(item, i, i === items.length - 1, itemRenderFn, roots, context, cstyPid));
    });
    return result;
}
function loopAppend($parent, el) {
    el[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].rootNodes.forEach(node => {
        if (Object(_core_component__WEBPACK_IMPORTED_MODULE_1__["isComponent"])(node)) {
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
    return (Object(_util__WEBPACK_IMPORTED_MODULE_3__["isString"])(p) && p !== 'length' && /^\d+$/.test(p)) ? Number(p) : p;
}
class ForComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor(attrs) {
      if (attrs.key && !/^(index|each(.[\w\d$_]+)*)$/.test(attrs.key)) {
        throw new Error('Value of "key" attribute of <for> component is invalidate. See https://[todo]');
      }
      super(attrs);
      const __vm_92fb158b76b3 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
      if (Object(_vm_common__WEBPACK_IMPORTED_MODULE_0__["isViewModel"])(attrs.loop)) {
        __vm_92fb158b76b3.loop = attrs.loop;
      } else {
        __vm_92fb158b76b3._l = attrs.loop;
      }
      attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('loop', () => {
        __vm_92fb158b76b3.loop = attrs.loop;
      });
      const kn = attrs.key || 'index';
      __vm_92fb158b76b3._keyName = kn;
      __vm_92fb158b76b3._length = 0;
      __vm_92fb158b76b3._keys = null;
      __vm_92fb158b76b3._waitingUpdate = false;
      if (kn !== 'index' && kn !== 'each') {
        __vm_92fb158b76b3._keyName = new Function('each', `return ${ kn }`);
        const propCount = kn.split('.').length + 1;
        __vm_92fb158b76b3[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('loop.*.' + kn.slice(5), propPath => {
          if (propPath.length !== propCount || __vm_92fb158b76b3._waitingUpdate) {
            return;
          }
          const items = __vm_92fb158b76b3.loop;
          if (!Object(_util__WEBPACK_IMPORTED_MODULE_3__["isArray"])(items) || items.length === 0)
            return;
          const p = _parseIndexPath(propPath[1]);
          if (!Object(_util__WEBPACK_IMPORTED_MODULE_3__["isNumber"])(p) || p >= items.length) {
            return;
          }
          __vm_92fb158b76b3._keys[p] = __vm_92fb158b76b3._keyName(items[p]);
        });
      }
      __vm_92fb158b76b3[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('loop.*', propPath => {
        if (__vm_92fb158b76b3[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].state !== _core_component__WEBPACK_IMPORTED_MODULE_1__["ComponentStates"].RENDERED || propPath.length !== 2 || __vm_92fb158b76b3._waitingUpdate) {
          return;
        }
        const p = _parseIndexPath(propPath[1]);
        if (p === 'length') {
          __vm_92fb158b76b3._waitingUpdate = true;
          __vm_92fb158b76b3.__updateIfNeed();
        } else if (Object(_util__WEBPACK_IMPORTED_MODULE_3__["isNumber"])(p)) {
          __vm_92fb158b76b3._updateItem(p);
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
        const roots = this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].rootNodes;
        const itemRenderFn = (_a = this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].slots) === null || _a === void 0 ? void 0 : _a.default;
        if (!itemRenderFn) {
            roots.push(document.createComment('empty'));
            return roots;
        }
        const items = this.loop;
        const keyName = this._keyName;
        if (keyName !== 'index')
            this._keys = [];
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_3__["isArray"])(items) || items.length === 0) {
            roots.push(document.createComment('empty'));
            return roots;
        }
        this._length = items.length;
        return renderItems(items, itemRenderFn, roots, this._keys, keyName, this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].context, this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].compStylePid);
    }
    _updateItem(index) {
        var _a;
        const items = this.loop;
        const roots = this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].rootNodes;
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_3__["isArray"])(items) || index >= roots.length)
            return;
        const keys = this._keys;
        const item = items[index];
        const oldEl = roots[index];
        if (oldEl.each === item) {
            return;
        }
        const itemRenderFn = (_a = this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].slots) === null || _a === void 0 ? void 0 : _a.default;
        if (!itemRenderFn)
            return;
        // console.log('update item:', index);
        const keyName = this._keyName;
        if (keyName !== 'index') {
            const newKey = keyName === 'each' ? item : keyName(item);
            const oldKey = keys[index];
            if (newKey !== oldKey) {
                const $fd = oldEl.__firstDOM;
                const newEl = createEl(item, index, oldEl.isLast, itemRenderFn, this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].context, this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].compStylePid);
                const rr = Object(_core_component__WEBPACK_IMPORTED_MODULE_1__["assertRenderResults"])(newEl.__render());
                $fd.parentNode.insertBefore(rr.length > 1 ? Object(_util__WEBPACK_IMPORTED_MODULE_3__["createFragment"])(rr) : rr[0], $fd);
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
        const itemRenderFn = (_a = this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].slots) === null || _a === void 0 ? void 0 : _a.default;
        if (!itemRenderFn)
            return;
        const newItems = Object(_util__WEBPACK_IMPORTED_MODULE_3__["isArray"])(this.loop) ? this.loop : [];
        const roots = this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].rootNodes;
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
        const ctx = this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].context;
        const cstyPid = this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].compStylePid;
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
                        $f = Object(_util__WEBPACK_IMPORTED_MODULE_3__["createFragment"])();
                    appendRenderEach(newItems[i], i, i === nl - 1, itemRenderFn, roots, ctx, cstyPid).forEach(el => {
                        $f.appendChild(el);
                    });
                }
            }
            if ($f) {
                const $le = ol === 0 ? firstEl : roots[ol - 1].__lastDOM;
                Object(_util__WEBPACK_IMPORTED_MODULE_3__["insertAfter"])($parent, $f, $le);
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
            const rs = renderItems(newItems, itemRenderFn, roots, oldKeys, keyName, this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].context, this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].compStylePid);
            Object(_util__WEBPACK_IMPORTED_MODULE_3__["insertAfter"])($parent, Object(_util__WEBPACK_IMPORTED_MODULE_3__["createFragment"])(rs), firstEl);
            $parent.removeChild(firstEl);
            roots.forEach(el => el.__handleAfterRender());
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
                    const el = createEl(newItems[ni], ni, ni === nl - 1, itemRenderFn, ctx, cstyPid);
                    if (!$f)
                        $f = Object(_util__WEBPACK_IMPORTED_MODULE_3__["createFragment"])();
                    el.__render().forEach($n => $f.appendChild($n));
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
                    $f = Object(_util__WEBPACK_IMPORTED_MODULE_3__["createFragment"])();
                if (!reuseEl) {
                    reuseEl = createEl(newItems[ni], ni, ni === nl - 1, itemRenderFn, ctx, cstyPid);
                    reuseEl.__render().forEach($n => $f.appendChild($n));
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
            $nes && $nes.forEach(el => el.__handleAfterRender());
            updateEl(el, ni, newItems);
            newRoots.push(el);
            oi++;
            ni++;
        }
        this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].rootNodes = newRoots;
        this._keys = newKeys;
    }
}
//# sourceMappingURL=for.js.map

/***/ }),

/***/ "../../jinge-framework/lib/components/hide.js":
/*!***********************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/components/hide.js ***!
  \***********************************************************************************/
/*! exports provided: HideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HideComponent", function() { return HideComponent; });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "../../jinge-framework/lib/vm/common.js");
/* harmony import */ var _vm_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vm/index */ "../../jinge-framework/lib/vm/index.js");
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./class */ "../../jinge-framework/lib/components/class.js");



class HideComponent extends _class__WEBPACK_IMPORTED_MODULE_2__["ToggleClassComponent"] {
    constructor(attrs) {
        attrs.class = Object(_vm_index__WEBPACK_IMPORTED_MODULE_1__["vm"])({
            'jg-hide': attrs.test
        });
        attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('test', () => {
            if (attrs.class['jg-hide'] !== attrs.test) {
                attrs.class['jg-hide'] = attrs.test;
            }
        });
        super(attrs);
    }
}
//# sourceMappingURL=hide.js.map

/***/ }),

/***/ "../../jinge-framework/lib/components/html.js":
/*!***********************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/components/html.js ***!
  \***********************************************************************************/
/*! exports provided: BindHtmlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BindHtmlComponent", function() { return BindHtmlComponent; });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "../../jinge-framework/lib/vm/common.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/component */ "../../jinge-framework/lib/core/component.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "../../jinge-framework/lib/util/index.js");


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
class BindHtmlComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor(attrs) {
      if (!('content' in attrs))
        throw new Error('<bind-html/> require "content" attribute');
      super(attrs);
      const __vm_92fb158b76b3 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
      const fn_2_92fb158b76b3 = () => {
        __vm_92fb158b76b3.content = attrs.content;
      };
      fn_2_92fb158b76b3();
      attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('content', fn_2_92fb158b76b3);
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
        return (this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].rootNodes = renderHtml(this._c));
    }
    __update() {
        const roots = this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].rootNodes;
        const oldFirstEl = roots[0];
        const $p = oldFirstEl.parentNode;
        const newEls = renderHtml(this._c);
        $p.insertBefore(newEls.length > 1 ? Object(_util__WEBPACK_IMPORTED_MODULE_2__["createFragment"])(newEls) : newEls[0], oldFirstEl);
        roots.forEach(oldEl => $p.removeChild(oldEl));
        this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].rootNodes = newEls;
    }
}
//# sourceMappingURL=html.js.map

/***/ }),

/***/ "../../jinge-framework/lib/components/i18n.js":
/*!***********************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/components/i18n.js ***!
  \***********************************************************************************/
/*! exports provided: I18nComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18nComponent", function() { return I18nComponent; });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "../../jinge-framework/lib/vm/common.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/component */ "../../jinge-framework/lib/core/component.js");
/* harmony import */ var _core_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/i18n */ "../../jinge-framework/lib/core/i18n.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ "../../jinge-framework/lib/util/index.js");




class I18nComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor(attrs, renderKey, renderVms) {
      super(attrs);
      const __vm_92fb158b76b3 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
      __vm_92fb158b76b3._key = renderKey;
      __vm_92fb158b76b3._vms = renderVms;
      __vm_92fb158b76b3.__i18nWatch(__vm_92fb158b76b3._onchange);
    }
    __render() {
        const renderFn = _core_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].__r(this._key, 'components');
        return renderFn(this, ...this._vms);
    }
    _onchange() {
        this.__updateIfNeed();
    }
    __update() {
        if (this[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__related) {
            this[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__related.forEach((hooks, origin) => {
                hooks.forEach(hook => {
                    origin.__unwatch(hook.prop, hook.handler);
                });
            });
            this[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__related.clear();
        }
        let $el = this.__lastDOM;
        const $parentEl = $el.parentNode;
        $el = $el.nextSibling;
        /*
         * 当前实现下，HANDLE_BEFORE_DESTROY 正好可以销毁子组件/子元素。
         */
        this.__handleBeforeDestroy(true);
        /*
         * 将新的元素替换到原来的旧的元素的位置。
         */
        const els = this.__render();
        if ($el) {
            $parentEl.insertBefore(els.length > 1 ? Object(_util__WEBPACK_IMPORTED_MODULE_3__["createFragment"])(els) : els[0], $el);
        }
        else {
            $parentEl.appendChild(els.length > 1 ? Object(_util__WEBPACK_IMPORTED_MODULE_3__["createFragment"])(els) : els[0]);
        }
        /**
         * 对切换后渲染的组件触发 AFTER_RENDER 生命周期。
         */
        this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].rootNodes.forEach(n => {
            if (Object(_core_component__WEBPACK_IMPORTED_MODULE_1__["isComponent"])(n))
                n.__handleAfterRender();
        });
        this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].nonRootCompNodes.forEach(n => {
            n.__handleAfterRender();
        });
    }
    __beforeDestroy() {
        this._vms = null; // unlink vms, maybe not necessary
    }
}
//# sourceMappingURL=i18n.js.map

/***/ }),

/***/ "../../jinge-framework/lib/components/if.js":
/*!*********************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/components/if.js ***!
  \*********************************************************************************/
/*! exports provided: IfComponent, SwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IfComponent", function() { return IfComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchComponent", function() { return SwitchComponent; });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "../../jinge-framework/lib/vm/common.js");
/* harmony import */ var _vm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vm */ "../../jinge-framework/lib/vm/index.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/component */ "../../jinge-framework/lib/core/component.js");
/* harmony import */ var _core_transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/transition */ "../../jinge-framework/lib/core/transition.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util */ "../../jinge-framework/lib/util/index.js");




function createEl(renderFn, context, parentStyleIds) {
    const el = new _core_component__WEBPACK_IMPORTED_MODULE_2__["Component"](Object(_vm__WEBPACK_IMPORTED_MODULE_1__["attrs"])({
        [_core_component__WEBPACK_IMPORTED_MODULE_2__["__"]]: {
            context,
            slots: {
                default: renderFn
            }
        }
    }));
    if (parentStyleIds) {
        el.__addStylePid(parentStyleIds);
    }
    return el[_vm__WEBPACK_IMPORTED_MODULE_1__["$$"]].proxy;
}
function renderSwitch(component) {
    const value = component._currentValue;
    const acs = component[_core_component__WEBPACK_IMPORTED_MODULE_2__["__"]].slots;
    if (component.transition && acs) {
        component._transitionMap = new Map();
        for (const k in acs) {
            component._transitionMap.set(k, [
                k === value ? _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].ENTERED : _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].LEAVED,
                null // element
            ]);
        }
        component._previousValue = value;
        component._onEndHandler = component.onTransitionEnd.bind(component);
    }
    const renderFn = acs ? acs[value] : null;
    const roots = component[_core_component__WEBPACK_IMPORTED_MODULE_2__["__"]].rootNodes;
    if (!renderFn) {
        roots.push(document.createComment('empty'));
        return roots;
    }
    const el = createEl(renderFn, component[_core_component__WEBPACK_IMPORTED_MODULE_2__["__"]].context, component[_core_component__WEBPACK_IMPORTED_MODULE_2__["__"]].compStylePid);
    roots.push(el);
    return el.__render();
}
function doUpdate(component) {
    var _a;
    const roots = component[_core_component__WEBPACK_IMPORTED_MODULE_2__["__"]].rootNodes;
    const el = roots[0];
    const isComp = Object(_core_component__WEBPACK_IMPORTED_MODULE_2__["isComponent"])(el);
    const firstDOM = (isComp ? el.__firstDOM : el);
    const parentDOM = (isComp ? firstDOM : el).parentNode;
    const renderFn = (_a = component[_core_component__WEBPACK_IMPORTED_MODULE_2__["__"]].slots) === null || _a === void 0 ? void 0 : _a[component._currentValue];
    if (renderFn) {
        const newEl = createEl(renderFn, component[_core_component__WEBPACK_IMPORTED_MODULE_2__["__"]].context, component[_core_component__WEBPACK_IMPORTED_MODULE_2__["__"]].compStylePid);
        const nodes = Object(_core_component__WEBPACK_IMPORTED_MODULE_2__["assertRenderResults"])(newEl.__render());
        parentDOM.insertBefore(nodes.length > 1 ? Object(_util__WEBPACK_IMPORTED_MODULE_4__["createFragment"])(nodes) : nodes[0], firstDOM);
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
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["removeEvent"])(el, 'transitionend', onEnd);
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["removeEvent"])(el, 'animationend', onEnd);
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
    Object(_core_transition__WEBPACK_IMPORTED_MODULE_3__["getDurationType"])(el);
    el.classList.add(classOfActive);
    const tsEndName = Object(_core_transition__WEBPACK_IMPORTED_MODULE_3__["getDurationType"])(el);
    if (!tsEndName) {
        onEnd();
        return;
    }
    t[0] = e ? _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].ENTERING : _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].LEAVING;
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["addEvent"])(el, tsEndName, onEnd);
    component.__notify('transition', e ? 'before-enter' : 'before-leave', el);
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["setImmediate"])(() => {
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
            pv === 'else' ? _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].LEAVED : _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].ENTERED,
            null // element
        ];
        component._transitionMap.set(pv, pt);
    }
    // debugger;
    if (pt[0] === _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].ENTERING) {
        if (value === pv)
            return;
        cancelTs(pt, tn, true, component);
        startTs(pt, tn, false, component);
    }
    else if (pt[0] === _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].LEAVING) {
        if (value !== pv)
            return;
        cancelTs(pt, tn, false, component);
        startTs(pt, tn, true, component);
    }
    else if (pt[0] === _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].ENTERED) {
        pt[1] = component.__transitionDOM;
        startTs(pt, tn, false, component);
    }
    else if (pt[0] === _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].LEAVED) {
        pt[1] = component.__transitionDOM;
        startTs(pt, tn, true, component);
    }
}
function updateSwitch(component) {
    if (!Object(_core_component__WEBPACK_IMPORTED_MODULE_2__["isComponent"])(component[_core_component__WEBPACK_IMPORTED_MODULE_2__["__"]].rootNodes[0]) && (!component[_core_component__WEBPACK_IMPORTED_MODULE_2__["__"]].slots || !component[_core_component__WEBPACK_IMPORTED_MODULE_2__["__"]].slots[component._currentValue])) {
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
    const e = pt[0] === _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].ENTERING;
    const el = pt[1];
    if (el.nodeType === Node.ELEMENT_NODE) {
        Object(_util__WEBPACK_IMPORTED_MODULE_4__["removeEvent"])(el, 'transitionend', component._onEndHandler);
        Object(_util__WEBPACK_IMPORTED_MODULE_4__["removeEvent"])(el, 'animationend', component._onEndHandler);
        el.classList.remove(tn + (e ? '-enter' : '-leave'));
        el.classList.remove(tn + (e ? '-enter-active' : '-leave-active'));
        component.__notify('transition', e ? 'after-enter' : 'after-leave');
    }
    pt[0] = e ? _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].ENTERED : _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].LEAVED;
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
        ct[0] = _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].ENTERED;
        return;
    }
    ct[1] = fd;
    startTs(ct, tn, true, component);
}
function destroySwitch(component) {
    if (component._transitionMap) {
        component._transitionMap.forEach(ts => {
            const el = ts[1];
            if (el) {
                Object(_util__WEBPACK_IMPORTED_MODULE_4__["removeEvent"])(el, 'transitionend', component._onEndHandler);
                Object(_util__WEBPACK_IMPORTED_MODULE_4__["removeEvent"])(el, 'animationend', component._onEndHandler);
            }
        });
        component._transitionMap = null;
    }
}
class IfComponent extends _core_component__WEBPACK_IMPORTED_MODULE_2__["Component"] {
    constructor(attrs) {
      super(attrs);
      const __vm_92fb158b76b3 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
      __vm_92fb158b76b3._currentValue = 'default';
      __vm_92fb158b76b3._onEndHandler = null;
      __vm_92fb158b76b3._transitionMap = null;
      __vm_92fb158b76b3._previousValue = null;
      const fn_5_92fb158b76b3 = () => {
        __vm_92fb158b76b3.expect = attrs.expect;
      };
      fn_5_92fb158b76b3();
      attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('expect', fn_5_92fb158b76b3);
      const fn_6_92fb158b76b3 = () => {
        __vm_92fb158b76b3.transition = attrs.transition;
      };
      fn_6_92fb158b76b3();
      attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('transition', fn_6_92fb158b76b3);
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
class SwitchComponent extends _core_component__WEBPACK_IMPORTED_MODULE_2__["Component"] {
    constructor(attrs) {
      super(attrs);
      const __vm_92fb158b76b3 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
      __vm_92fb158b76b3._onEndHandler = null;
      __vm_92fb158b76b3._transitionMap = null;
      __vm_92fb158b76b3._previousValue = null;
      __vm_92fb158b76b3._currentValue = null;
      const fn_5_92fb158b76b3 = () => {
        __vm_92fb158b76b3.test = attrs.test;
      };
      fn_5_92fb158b76b3();
      attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('test', fn_5_92fb158b76b3);
      const fn_6_92fb158b76b3 = () => {
        __vm_92fb158b76b3.transition = attrs.transition;
      };
      fn_6_92fb158b76b3();
      attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('transition', fn_6_92fb158b76b3);
    }
    get test() {
        return this._currentValue;
    }
    set test(v) {
        const acs = this[_core_component__WEBPACK_IMPORTED_MODULE_2__["__"]].slots;
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

/***/ "../../jinge-framework/lib/components/index.js":
/*!************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/components/index.js ***!
  \************************************************************************************/
/*! exports provided: ToggleClassComponent, ForEachComponent, ForComponent, HideComponent, BindHtmlComponent, IfComponent, SwitchComponent, ParameterComponent, LogComponent, I18nComponent, DynamicRenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class */ "../../jinge-framework/lib/components/class.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleClassComponent", function() { return _class__WEBPACK_IMPORTED_MODULE_0__["ToggleClassComponent"]; });

/* harmony import */ var _for__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./for */ "../../jinge-framework/lib/components/for.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForEachComponent", function() { return _for__WEBPACK_IMPORTED_MODULE_1__["ForEachComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForComponent", function() { return _for__WEBPACK_IMPORTED_MODULE_1__["ForComponent"]; });

/* harmony import */ var _hide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hide */ "../../jinge-framework/lib/components/hide.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HideComponent", function() { return _hide__WEBPACK_IMPORTED_MODULE_2__["HideComponent"]; });

/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html */ "../../jinge-framework/lib/components/html.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BindHtmlComponent", function() { return _html__WEBPACK_IMPORTED_MODULE_3__["BindHtmlComponent"]; });

/* harmony import */ var _if__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./if */ "../../jinge-framework/lib/components/if.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IfComponent", function() { return _if__WEBPACK_IMPORTED_MODULE_4__["IfComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitchComponent", function() { return _if__WEBPACK_IMPORTED_MODULE_4__["SwitchComponent"]; });

/* harmony import */ var _parameter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parameter */ "../../jinge-framework/lib/components/parameter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParameterComponent", function() { return _parameter__WEBPACK_IMPORTED_MODULE_5__["ParameterComponent"]; });

/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./log */ "../../jinge-framework/lib/components/log.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogComponent", function() { return _log__WEBPACK_IMPORTED_MODULE_6__["LogComponent"]; });

/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./i18n */ "../../jinge-framework/lib/components/i18n.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18nComponent", function() { return _i18n__WEBPACK_IMPORTED_MODULE_7__["I18nComponent"]; });

/* harmony import */ var _dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dynamic */ "../../jinge-framework/lib/components/dynamic.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicRenderComponent", function() { return _dynamic__WEBPACK_IMPORTED_MODULE_8__["DynamicRenderComponent"]; });










//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-framework/lib/components/log.js":
/*!**********************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/components/log.js ***!
  \**********************************************************************************/
/*! exports provided: LogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogComponent", function() { return LogComponent; });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "../../jinge-framework/lib/vm/common.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/component */ "../../jinge-framework/lib/core/component.js");

/**
 * This component is only for development purpose
 */
class LogComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor(attrs) {
      super(attrs);
      const __vm_92fb158b76b3 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
      const fn_1_92fb158b76b3 = () => {
        __vm_92fb158b76b3.msg = attrs.msg;
      };
      fn_1_92fb158b76b3();
      attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('msg', fn_1_92fb158b76b3);
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

/***/ "../../jinge-framework/lib/components/parameter.js":
/*!****************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/components/parameter.js ***!
  \****************************************************************************************/
/*! exports provided: ParameterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParameterComponent", function() { return ParameterComponent; });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "../../jinge-framework/lib/vm/common.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/component */ "../../jinge-framework/lib/core/component.js");


class ParameterComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor(attrs, params) {
      super(attrs);
      const __vm_92fb158b76b3 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
      params.forEach(p => {
        __vm_92fb158b76b3[p] = attrs[p];
        attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch(p, () => {
          __vm_92fb158b76b3[p] = attrs[p];
        });
      });
    }
}
//# sourceMappingURL=parameter.js.map

/***/ }),

/***/ "../../jinge-framework/lib/core/bootstrap.js":
/*!**********************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/core/bootstrap.js ***!
  \**********************************************************************************/
/*! exports provided: bootstrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrap", function() { return bootstrap; });
function bootstrap(ComponentClazz, dom, attrs) {
    ComponentClazz.create(attrs).__renderToDOM(dom, dom !== document.body);
}
//# sourceMappingURL=bootstrap.js.map

/***/ }),

/***/ "../../jinge-framework/lib/core/component.js":
/*!**********************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/core/component.js ***!
  \**********************************************************************************/
/*! exports provided: ComponentStates, ContextStates, __, isComponent, assertRenderResults, Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentStates", function() { return ComponentStates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextStates", function() { return ContextStates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__", function() { return __; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComponent", function() { return isComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertRenderResults", function() { return assertRenderResults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge-framework/lib/util/index.js");
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vm/common */ "../../jinge-framework/lib/vm/common.js");
/* harmony import */ var _vm_proxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vm/proxy */ "../../jinge-framework/lib/vm/proxy.js");
/* harmony import */ var _messenger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messenger */ "../../jinge-framework/lib/core/messenger.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "../../jinge-framework/lib/core/style.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./i18n */ "../../jinge-framework/lib/core/i18n.js");
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
    if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isArray"])(renderResults) || renderResults.length === 0) {
        throw new Error('Render results of component is empty');
    }
    return renderResults;
}
class Component extends _messenger__WEBPACK_IMPORTED_MODULE_3__["Messenger"] {
    /**
     * ATTENTION!!!
     *
     * Don't use constructor directly, use static factory method `create(attrs)` instead.
     */
    constructor(attrs) {
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(attrs) || !(_vm_common__WEBPACK_IMPORTED_MODULE_1__["$$"] in attrs)) {
            throw new Error('Attributes passed to Component constructor must be ViewModel. See https://[todo]');
        }
        const compilerAttrs = attrs[__] || {};
        super(compilerAttrs.listeners);
        Object(_vm_proxy__WEBPACK_IMPORTED_MODULE_2__["createComponent"])(this);
        this[__] = {
            passedAttrs: attrs,
            context: compilerAttrs.context,
            contextState: ContextStates.UNTOUCH,
            slots: compilerAttrs.slots,
            state: ComponentStates.INITIALIZE,
            rootNodes: [],
            nonRootCompNodes: [],
            refs: null,
            relatedRefs: null,
            updateNextMap: null,
            compStylePid: null,
            deregDOM: null,
            deregI18N: null
        };
    }
    static create(attrs) {
        attrs = attrs || Object(_vm_proxy__WEBPACK_IMPORTED_MODULE_2__["attrs"])({});
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(attrs) || !(_vm_common__WEBPACK_IMPORTED_MODULE_1__["$$"] in attrs)) {
            attrs = Object(_vm_proxy__WEBPACK_IMPORTED_MODULE_2__["attrs"])(attrs || {});
        }
        return (new this(attrs))[_vm_common__WEBPACK_IMPORTED_MODULE_1__["$$"]].proxy;
    }
    /**
     * Helper function to add i18n LOCALE_CHANGE listener.
     * Return deregister function which will remove event listener.
     * If you do dot call deregister function, it will be auto called when component is destroied.
     * @param {Function} listener listener bind to LOCALE_CHANGE event.
     * @param {Boolean} immediate call listener immediately, useful for component property initialize
     * @returns {Function} deregister function to remove listener
     */
    __i18nWatch(listener, immediate) {
        let deregs = this[__].deregI18N;
        if (!deregs) {
            this[__].deregI18N = deregs = [];
        }
        const unwatcher = _i18n__WEBPACK_IMPORTED_MODULE_5__["i18n"].watch(() => {
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
     * @param {Boolean|Object} capture
     * @returns {Function} deregister function to remove listener
     */
    __domAddListener($el, eventName, listener, capture) {
        let deregs = this[__].deregDOM;
        if (!deregs) {
            this[__].deregDOM = deregs = [];
        }
        const lisDeregister = Object(_util__WEBPACK_IMPORTED_MODULE_0__["registerEvent"])($el, eventName, $event => {
            // bind component to listener's function context.
            listener.call(this, $event);
        }, capture);
        const deregister = () => {
            lisDeregister();
            Object(_util__WEBPACK_IMPORTED_MODULE_0__["arrayRemove"])(deregs, deregister);
        };
        deregs.push(deregister);
        return deregister;
    }
    __domPassListeners(ignoredEventNames, targetEl) {
        if (this[__].state !== ComponentStates.RENDERED) {
            throw new Error('domPassListeners must be applied to component which is rendered.');
        }
        const lis = this[_messenger__WEBPACK_IMPORTED_MODULE_3__["MESSENGER_LISTENERS"]];
        if (!lis || lis.size === 0) {
            return;
        }
        if (ignoredEventNames && !Object(_util__WEBPACK_IMPORTED_MODULE_0__["isArray"])(ignoredEventNames)) {
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
            handlers.forEach(handler => {
                const { opts, fn } = handler;
                this.__domAddListener(targetEl, eventName, (handler.opts && (handler.opts.stop || handler.opts.prevent)
                    ? function ($evt) {
                        opts.stop && $evt.stopPropagation();
                        opts.prevent && $evt.preventDefault();
                        // this.domAddListener 会将 this 变成当前组件。所以需要显式地使用 fn.call(this) 来传递组件。
                        fn.call(this, $evt);
                    } : fn), handler.opts);
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
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(renderFn)) {
            throw new Error(`Template of ${Clazz.name} not found. Forget static getter "template"?`);
        }
        _style__WEBPACK_IMPORTED_MODULE_4__["manager"].add(Clazz.style); // jinge-loader 已经将 string 转成了 ComponentStyle，此处强制转换类型以绕开 typescript.
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
        _style__WEBPACK_IMPORTED_MODULE_4__["manager"].attch();
        if (replaceMode) {
            Object(_util__WEBPACK_IMPORTED_MODULE_0__["replaceChildren"])(targetEl.parentNode, rr, targetEl);
        }
        else {
            Object(_util__WEBPACK_IMPORTED_MODULE_0__["appendChildren"])(targetEl, rr);
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
        this[_vm_common__WEBPACK_IMPORTED_MODULE_1__["$$"]].__notifiable = false;
        comp.passedAttrs[_vm_common__WEBPACK_IMPORTED_MODULE_1__["$$"]].__notifiable = false;
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
        _style__WEBPACK_IMPORTED_MODULE_4__["manager"].remove(this.constructor.style);
        // destroy attrs passed to constructor
        comp.passedAttrs[_vm_common__WEBPACK_IMPORTED_MODULE_1__["$$"]].__destroy();
        comp.passedAttrs = null;
        // destroy view model
        this[_vm_common__WEBPACK_IMPORTED_MODULE_1__["$$"]].__destroy();
        // clear next tick update setImmediate
        if (comp.updateNextMap) {
            comp.updateNextMap.forEach(imm => {
                Object(_util__WEBPACK_IMPORTED_MODULE_0__["clearImmediate"])(imm);
            });
            comp.updateNextMap = null;
        }
        // destroy related refs:
        if (comp.relatedRefs) {
            comp.relatedRefs.forEach(info => {
                const refs = info.origin[__].refs;
                if (!refs)
                    return;
                const rns = refs.get(info.ref);
                if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isArray"])(rns)) {
                    Object(_util__WEBPACK_IMPORTED_MODULE_0__["arrayRemove"])(rns, info.node || this);
                }
                else {
                    refs.delete(info.ref);
                }
            });
            comp.relatedRefs = null;
        }
        // clear all dom event listener and i18n watcher
        if (comp.deregDOM) {
            comp.deregDOM.forEach(deregFn => deregFn());
            comp.deregDOM = null;
        }
        if (comp.deregI18N) {
            comp.deregI18N.forEach(deregFn => deregFn());
            comp.deregI18N = null;
        }
        // clear properties
        comp.state = ComponentStates.DESTROIED;
        // unlink all symbol properties. maybe unnecessary.
        comp.rootNodes = comp.nonRootCompNodes =
            comp.refs = comp.slots = comp.context = null;
    }
    __handleBeforeDestroy(removeDOM = false) {
        this[__].nonRootCompNodes.forEach(component => {
            // it's not necessary to remove dom when destroy non-root component,
            // because those dom nodes will be auto removed when their parent dom is removed.
            component.__destroy(false);
        });
        let $parent;
        this[__].rootNodes.forEach(node => {
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
        this[__].passedAttrs[_vm_common__WEBPACK_IMPORTED_MODULE_1__["$$"]].__notifiable = true;
        this[_vm_common__WEBPACK_IMPORTED_MODULE_1__["$$"]].__notifiable = true;
        this[__].rootNodes.forEach(n => {
            if (isComponent(n))
                n.__handleAfterRender();
        });
        this[__].nonRootCompNodes.forEach(n => {
            if (isComponent(n))
                n.__handleAfterRender();
        });
        this[__].state = ComponentStates.RENDERED;
        this[__].contextState = this[__].contextState === ContextStates.TOUCHED ? ContextStates.TOUCHED_FREEZED : ContextStates.UNTOUCH_FREEZED; // has been rendered, can't modify context
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
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(handler)) {
            handler = this.__update;
        }
        if (!nextTick) {
            handler.call(this);
            return;
        }
        let ntMap = this[__].updateNextMap;
        if (!ntMap)
            ntMap = this[__].updateNextMap = new Map();
        if (ntMap.has(handler)) {
            // already in queue.
            return;
        }
        ntMap.set(handler, Object(_util__WEBPACK_IMPORTED_MODULE_0__["setImmediate"])(() => {
            ntMap.delete(handler);
            handler.call(this);
        }));
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    __update(first) {
        // by default, do nothing.
    }
    __setContext(key, value, forceOverride = false) {
        if (this[__].contextState === ContextStates.UNTOUCH_FREEZED || this[__].contextState === ContextStates.TOUCHED_FREEZED) {
            throw new Error('Can\'t setContext after component has been rendered. Try put setContext code into constructor.');
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
        else if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isArray"])(elOrArr)) {
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
            node: isComp ? null : el
        });
    }
    /**
     * Get child node(or nodes) marked by 'ref:' attribute in template
     */
    __getRef(ref) {
        if (this[__].state !== ComponentStates.RENDERED) {
            // eslint-disable-next-line no-console
            console.warn(`Warning: call __getRef before component '${this.constructor.name}' rendered will get nothing. see https://[TODO]`);
        }
        return this[__].refs ? this[__].refs.get(ref) : null;
    }
    __addStylePid(inheritIds, styleId) {
        if (!inheritIds && !styleId)
            return;
        let ids = this[__].compStylePid;
        if (!ids) {
            ids = this[__].compStylePid = Object.create(null);
        }
        if (inheritIds) {
            Object.assign(ids, inheritIds);
        }
        if (styleId) {
            ids[styleId] = '';
        }
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
Component[_a] = true;
//# sourceMappingURL=component.js.map

/***/ }),

/***/ "../../jinge-framework/lib/core/i18n.js":
/*!*****************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/core/i18n.js ***!
  \*****************************************************************************/
/*! exports provided: compile, i18n, _t */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return compile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i18n", function() { return i18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_t", function() { return _t; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge-framework/lib/util/index.js");
/* harmony import */ var _messenger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messenger */ "../../jinge-framework/lib/core/messenger.js");


const DEFAULT_FILENAME = 'dist/locale.[locale].js';
/**
 * convert i18n text template to function
 * @param {String} text i18n formatted text template
 */
function compile(text) {
    // eslint-disable-next-line no-new-func
    return new Function('__ctx', `return \`${text.replace(/`/g, '\\`').replace(/\$\{\s*([\w\d._$]+)\s*\}/g, (m, n) => {
        return '${ __ctx.' + n + ' }';
    })}\`;`);
}
function defaultFetchFn(locale, filename) {
    return window.fetch(filename.replace('[locale]', locale)).then(res => res.text());
}
class I18nService extends _messenger__WEBPACK_IMPORTED_MODULE_1__["Messenger"] {
    constructor() {
        super();
        this.__deps = null;
        this.__data = null;
        this.__cache = new Map();
        this.__key = null;
        this.__regLoc(window.JINGE_I18N_DATA);
    }
    get locale() {
        return this.__data.locale;
    }
    /**
     * Register i18n render depedent.
     * This method will be called by compiler generated code, don't call it manully.
     */
    __regDep(idx, depent) {
        if (!this.__deps)
            this.__deps = [];
        if (!this.__deps[idx])
            throw new Error(`conflict at ${idx}`);
        this.__deps[idx] = depent;
    }
    /**
     * Register locale data, will be called in locale resource script.
     * Usually you don't need call this method manully.
     */
    __regLoc(data) {
        if (!data || this.__cache.has(data.locale)) {
            return;
        }
        this.__cache.set(data.locale, data);
        if (!this.__data) {
            this.__data = data;
        }
    }
    /**
     * switch to another locale/language
     * @param {string} locale locale to swtiched
     * @param {string | Function} filename filename of locale script with full path, or function fetch locale script.
     */
    switch(locale, filename = DEFAULT_FILENAME) {
        if (this.__data.locale === locale) {
            return;
        }
        const data = this.__cache.get(locale);
        if (!data) {
            const key = Object(_util__WEBPACK_IMPORTED_MODULE_0__["uid"])();
            this.__key = key;
            (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(filename) ? filename(locale) : defaultFetchFn(locale, filename)).then((code) => {
                // eslint-disable-next-line no-new-func
                (new Function('jinge', code))({
                    i18n: this
                });
                if (this.__key !== key || this.__data.locale === locale) {
                    /*
                      * ignore if callback has been expired.
                      * 使用闭包的技巧来检测当前回调是否已经过期，
                      * 即，是否已经有新的 fetchFn 函数的调用。
                      */
                    return;
                }
                const data = this.__cache.get(locale);
                this.__data = data;
                this.__notify('i18n-change', this.locale);
            });
        }
        else {
            this.__data = data;
            this.__notify('i18n-change', this.locale);
        }
    }
    __t(key, params) {
        const dict = this.__data.dictionary;
        if (!(key in dict)) {
            return 'i18n_missing';
        }
        let text = dict[key];
        if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isString"])(text)) {
            // text.startsWith("«") means reference to another key
            if (text.charCodeAt(0) === 171) {
                text = dict[text.substring(1)];
                if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isString"])(text)) {
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
        const render = this.__data.render;
        if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(render)) {
            if (!this.__deps) {
                throw new Error('missing render depedents');
            }
            this.__data.render = render(...this.__deps);
        }
        const renderDict = render[type];
        if (!(key in renderDict)) {
            throw new Error(`missing i18n ${type} for key: ${key}`);
        }
        let fn = renderDict[key];
        if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isString"])(fn)) {
            // if fn is string, it's a reference to another key.
            renderDict[key] = fn = renderDict[fn];
        }
        return fn;
    }
    /**
     * Bind listener to LOCALE_CHANGE event,
     * return a function auto remove this listener
     * @param {Function} handler a listener bind to change event
     * @param {Boolean} immediate call listener immediately, default is false.
     * @returns {Function} a function auto remove listener
     */
    watch(listener, immediate) {
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

/***/ "../../jinge-framework/lib/core/index.js":
/*!******************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/core/index.js ***!
  \******************************************************************************/
/*! exports provided: bootstrap, ComponentStates, ContextStates, __, isComponent, assertRenderResults, Component, compile, i18n, _t, MESSENGER_LISTENERS, Messenger, emptyRenderFn, errorRenderFn, textRenderFn, i18nRenderFn, manager, TransitionStates, getDurationType, getDuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap */ "../../jinge-framework/lib/core/bootstrap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bootstrap", function() { return _bootstrap__WEBPACK_IMPORTED_MODULE_0__["bootstrap"]; });

/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "../../jinge-framework/lib/core/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentStates", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["ComponentStates"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextStates", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["ContextStates"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["__"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isComponent", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["isComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertRenderResults", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["assertRenderResults"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["Component"]; });

/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./i18n */ "../../jinge-framework/lib/core/i18n.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return _i18n__WEBPACK_IMPORTED_MODULE_2__["compile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i18n", function() { return _i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_t", function() { return _i18n__WEBPACK_IMPORTED_MODULE_2__["_t"]; });

/* harmony import */ var _messenger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messenger */ "../../jinge-framework/lib/core/messenger.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MESSENGER_LISTENERS", function() { return _messenger__WEBPACK_IMPORTED_MODULE_3__["MESSENGER_LISTENERS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Messenger", function() { return _messenger__WEBPACK_IMPORTED_MODULE_3__["Messenger"]; });

/* harmony import */ var _render_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./render_fns */ "../../jinge-framework/lib/core/render_fns.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "emptyRenderFn", function() { return _render_fns__WEBPACK_IMPORTED_MODULE_4__["emptyRenderFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "errorRenderFn", function() { return _render_fns__WEBPACK_IMPORTED_MODULE_4__["errorRenderFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textRenderFn", function() { return _render_fns__WEBPACK_IMPORTED_MODULE_4__["textRenderFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i18nRenderFn", function() { return _render_fns__WEBPACK_IMPORTED_MODULE_4__["i18nRenderFn"]; });

/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "../../jinge-framework/lib/core/style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "manager", function() { return _style__WEBPACK_IMPORTED_MODULE_5__["manager"]; });

/* harmony import */ var _transition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transition */ "../../jinge-framework/lib/core/transition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransitionStates", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["TransitionStates"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDurationType", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["getDurationType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDuration", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["getDuration"]; });








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-framework/lib/core/messenger.js":
/*!**********************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/core/messenger.js ***!
  \**********************************************************************************/
/*! exports provided: MESSENGER_LISTENERS, Messenger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSENGER_LISTENERS", function() { return MESSENGER_LISTENERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Messenger", function() { return Messenger; });
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
        listeners.forEach(handler => {
            handler.fn(...args);
        });
    }
    __on(eventName, eventListener, options) {
        if (!this[MESSENGER_LISTENERS]) {
            this[MESSENGER_LISTENERS] = new Map();
        }
        let listeners = this[MESSENGER_LISTENERS].get(eventName);
        if (!listeners) {
            this[MESSENGER_LISTENERS].set(eventName, listeners = []);
        }
        if (listeners.findIndex(it => {
            return it.fn === eventListener;
        }) >= 0) {
            // eslint-disable-next-line no-console
            console.warn('dulplicated messenger listener', eventName, eventListener);
            return;
        }
        if (options && options.once) {
            const onceListener = (...args) => {
                eventListener(...args);
                this.__off(eventName, eventListener);
            };
            listeners.push({
                fn: onceListener,
                opts: options
            });
        }
        else {
            listeners.push({
                fn: eventListener,
                opts: options
            });
        }
    }
    __off(eventName, eventListener) {
        if (!this[MESSENGER_LISTENERS])
            return;
        if (!eventName) {
            this[MESSENGER_LISTENERS].clear();
            return;
        }
        const listeners = this[MESSENGER_LISTENERS].get(eventName);
        if (!listeners)
            return;
        if (!eventListener) {
            listeners.length = 0;
            return;
        }
        const idx = listeners.findIndex(it => {
            return it.fn === eventListener;
        });
        listeners.splice(idx, 1);
    }
}
//# sourceMappingURL=messenger.js.map

/***/ }),

/***/ "../../jinge-framework/lib/core/render_fns.js":
/*!***********************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/core/render_fns.js ***!
  \***********************************************************************************/
/*! exports provided: emptyRenderFn, errorRenderFn, textRenderFn, i18nRenderFn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyRenderFn", function() { return emptyRenderFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorRenderFn", function() { return errorRenderFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textRenderFn", function() { return textRenderFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i18nRenderFn", function() { return i18nRenderFn; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge-framework/lib/util/index.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./i18n */ "../../jinge-framework/lib/core/i18n.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component */ "../../jinge-framework/lib/core/component.js");



function emptyRenderFn(component) {
    const el = document.createComment('empty');
    component[_component__WEBPACK_IMPORTED_MODULE_2__["__"]].rootNodes.push(el);
    return el;
}
function errorRenderFn(component) {
    const el = Object(_util__WEBPACK_IMPORTED_MODULE_0__["createElement"])('span', {
        style: 'color: red !important;'
    });
    el.textContent = 'template parsing failed! please check webpack log.';
    component[_component__WEBPACK_IMPORTED_MODULE_2__["__"]].rootNodes.push(el);
    return el;
}
function textRenderFn(component, txtContent) {
    const el = Object(_util__WEBPACK_IMPORTED_MODULE_0__["createTextNode"])(txtContent);
    component[_component__WEBPACK_IMPORTED_MODULE_2__["__"]].rootNodes.push(el);
    return el;
}
function i18nRenderFn(component, key, isRoot = false) {
    const el = Object(_util__WEBPACK_IMPORTED_MODULE_0__["createTextNode"])();
    const fn = () => {
        el.textContent = _i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].__t(key);
    };
    fn();
    component.__i18nWatch(fn);
    isRoot && component[_component__WEBPACK_IMPORTED_MODULE_2__["__"]].rootNodes.push(el);
    return el;
}
//# sourceMappingURL=render_fns.js.map

/***/ }),

/***/ "../../jinge-framework/lib/core/style.js":
/*!******************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/core/style.js ***!
  \******************************************************************************/
/*! exports provided: manager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manager", function() { return manager; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge-framework/lib/util/index.js");

function isHideCssExists() {
    const $e = Object(_util__WEBPACK_IMPORTED_MODULE_0__["createElement"])('span', {
        style: 'position:absolute;left:-10000px;',
        class: 'jg-hide'
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
        const $style = Object(_util__WEBPACK_IMPORTED_MODULE_0__["createElement"])('style', {
            type: 'text/css',
            id: sty.dom
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
            refs: 1
        };
        styleMap.set(sty.id, info);
        this.create(info);
    }
    attch() {
        if (this.s !== 0) {
            // eslint-disable-next-line no-console
            console.warn('component styles already attached.');
            return;
        }
        this.s = 1;
        if (!isHideCssExists()) {
            this.create({
                dom: `__jgsty_${Object(_util__WEBPACK_IMPORTED_MODULE_0__["uid"])()}__`,
                css: '.jg-hide{display:none!important}.jg-hide.jg-hide-enter,.jg-hide.jg-hide-leave{display:block!important}'
            });
        }
        this.m.forEach(info => {
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

/***/ "../../jinge-framework/lib/core/transition.js":
/*!***********************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/core/transition.js ***!
  \***********************************************************************************/
/*! exports provided: TransitionStates, getDurationType, getDuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransitionStates", function() { return TransitionStates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDurationType", function() { return getDurationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDuration", function() { return getDuration; });
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
            time: parseDuration(dur)
        };
    }
    dur = cst.getPropertyValue('animation-duration');
    if (dur !== '0s') {
        return {
            type: 'animationend',
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

/***/ "../../jinge-framework/lib/index.js":
/*!*************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/index.js ***!
  \*************************************************************************/
/*! exports provided: ToggleClassComponent, ForEachComponent, ForComponent, HideComponent, BindHtmlComponent, IfComponent, SwitchComponent, ParameterComponent, LogComponent, I18nComponent, DynamicRenderComponent, bootstrap, ComponentStates, ContextStates, __, isComponent, assertRenderResults, Component, compile, i18n, _t, MESSENGER_LISTENERS, Messenger, emptyRenderFn, errorRenderFn, textRenderFn, i18nRenderFn, manager, TransitionStates, getDurationType, getDuration, typeOf, isObject, isString, isNumber, isUndefined, isArray, isBoolean, isFunction, isPromise, arrayRemove, arrayPushIfNotExist, arrayEqual, uid, setImmediate, clearImmediate, setText, createTextNode, createFragment, appendChildren, replaceChildren, removeAttribute, setAttribute, createElement, createElementWithoutAttrs, createSVGElement, createSVGElementWithoutAttrs, createElementWithChild, insertAfter, addEvent, removeEvent, registerEvent, $$, isInnerObj, isViewModel, isPublicProperty, getPropertyName, parsePropertyPath, addParent, removeParent, shiftParent, ViewModelCoreImpl, loopCreateNode, loopGetNode, deleteNode, loopClearNode, handleCancel, handleOnce, loopHandle, loopNotify, ArrayProxyHandler, createViewModel, createAttributes, createComponent, vm, attrs, watch, unwatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "../../jinge-framework/lib/components/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleClassComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["ToggleClassComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForEachComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["ForEachComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["ForComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HideComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["HideComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BindHtmlComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["BindHtmlComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IfComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["IfComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitchComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["SwitchComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParameterComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["ParameterComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["LogComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18nComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["I18nComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicRenderComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["DynamicRenderComponent"]; });

/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "../../jinge-framework/lib/core/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bootstrap", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["bootstrap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentStates", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["ComponentStates"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextStates", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["ContextStates"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["__"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isComponent", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["isComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertRenderResults", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["assertRenderResults"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["Component"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["compile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i18n", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["i18n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_t", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["_t"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MESSENGER_LISTENERS", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["MESSENGER_LISTENERS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Messenger", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["Messenger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "emptyRenderFn", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["emptyRenderFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "errorRenderFn", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["errorRenderFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textRenderFn", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["textRenderFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i18nRenderFn", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["i18nRenderFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "manager", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["manager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransitionStates", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["TransitionStates"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDurationType", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["getDurationType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDuration", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["getDuration"]; });

/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "../../jinge-framework/lib/util/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "typeOf", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["typeOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isPromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayRemove", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["arrayRemove"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayPushIfNotExist", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["arrayPushIfNotExist"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayEqual", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["arrayEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uid", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["uid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setImmediate", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["setImmediate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearImmediate", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["clearImmediate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setText", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["setText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTextNode", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["createTextNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFragment", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["createFragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "appendChildren", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["appendChildren"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replaceChildren", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["replaceChildren"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeAttribute", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["removeAttribute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setAttribute", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["setAttribute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["createElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElementWithoutAttrs", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["createElementWithoutAttrs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSVGElement", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["createSVGElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSVGElementWithoutAttrs", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["createSVGElementWithoutAttrs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElementWithChild", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["createElementWithChild"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "insertAfter", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["insertAfter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addEvent", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["addEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeEvent", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["removeEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerEvent", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["registerEvent"]; });

/* harmony import */ var _vm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vm */ "../../jinge-framework/lib/vm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$$", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["$$"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInnerObj", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["isInnerObj"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isViewModel", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["isViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPublicProperty", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["isPublicProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPropertyName", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["getPropertyName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePropertyPath", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["parsePropertyPath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addParent", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["addParent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeParent", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["removeParent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shiftParent", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["shiftParent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewModelCoreImpl", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["ViewModelCoreImpl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loopCreateNode", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["loopCreateNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loopGetNode", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["loopGetNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteNode", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["deleteNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loopClearNode", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["loopClearNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleCancel", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["handleCancel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleOnce", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["handleOnce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loopHandle", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["loopHandle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loopNotify", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["loopNotify"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrayProxyHandler", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["ArrayProxyHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createViewModel", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["createViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAttributes", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["createAttributes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createComponent", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["createComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vm", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["vm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "attrs", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["attrs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watch", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["watch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unwatch", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["unwatch"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-framework/lib/util/array.js":
/*!******************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/util/array.js ***!
  \******************************************************************************/
/*! exports provided: arrayRemove, arrayPushIfNotExist, arrayEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayRemove", function() { return arrayRemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayPushIfNotExist", function() { return arrayPushIfNotExist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayEqual", function() { return arrayEqual; });
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

/***/ "../../jinge-framework/lib/util/common.js":
/*!*******************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/util/common.js ***!
  \*******************************************************************************/
/*! exports provided: uid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uid", function() { return uid; });
let UID_INC = 0;
function uid() {
    return Date.now().toString(32) + '-' + Math.floor(Math.random() * 0xffffff).toString(32) + '-' + (UID_INC++).toString(32);
}
//# sourceMappingURL=common.js.map

/***/ }),

/***/ "../../jinge-framework/lib/util/dom.js":
/*!****************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/util/dom.js ***!
  \****************************************************************************/
/*! exports provided: setText, createTextNode, createFragment, appendChildren, replaceChildren, removeAttribute, setAttribute, createElement, createElementWithoutAttrs, createSVGElement, createSVGElementWithoutAttrs, createElementWithChild, insertAfter, addEvent, removeEvent, registerEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setText", function() { return setText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTextNode", function() { return createTextNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFragment", function() { return createFragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendChildren", function() { return appendChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceChildren", function() { return replaceChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAttribute", function() { return removeAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAttribute", function() { return setAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElementWithoutAttrs", function() { return createElementWithoutAttrs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSVGElement", function() { return createSVGElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSVGElementWithoutAttrs", function() { return createSVGElementWithoutAttrs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElementWithChild", function() { return createElementWithChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertAfter", function() { return insertAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEvent", function() { return addEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEvent", function() { return removeEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerEvent", function() { return registerEvent; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "../../jinge-framework/lib/util/type.js");

function setText($element, text) {
    if (!Object(_type__WEBPACK_IMPORTED_MODULE_0__["isString"])(text)) {
        text = JSON.stringify(text);
    }
    $element.textContent = text;
}
function createTextNode(text = '') {
    return document.createTextNode(Object(_type__WEBPACK_IMPORTED_MODULE_0__["isString"])(text) ? text : JSON.stringify(text));
}
function createFragment(children) {
    const f = document.createDocumentFragment();
    children && children.forEach(n => {
        f.appendChild(Object(_type__WEBPACK_IMPORTED_MODULE_0__["isString"])(n) ? document.createTextNode(n) : n);
    });
    return f;
}
function appendChildren($parent, children) {
    $parent.appendChild(createFragment(children));
}
function replaceChildren($parent, children, oldNode) {
    $parent.replaceChild(createFragment(children), oldNode);
}
function removeAttribute($ele, attrName) {
    if (!attrName)
        return;
    if (Object(_type__WEBPACK_IMPORTED_MODULE_0__["isObject"])(attrName)) {
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
    if (Object(_type__WEBPACK_IMPORTED_MODULE_0__["isObject"])(attrName)) {
        for (const attrN in attrName) {
            setAttribute($ele, attrN, attrName[attrN]);
        }
        return;
    }
    if (Object(_type__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(attrValue) || attrValue === null) {
        removeAttribute($ele, attrName);
    }
    else {
        $ele.setAttribute(attrName, attrValue);
    }
}
function _createEl($el, attrs, children) {
    if (attrs) {
        for (const an in attrs) {
            if (an && !Object(_type__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(attrs[an])) {
                setAttribute($el, an, attrs[an]);
            }
        }
    }
    appendChildren($el, children);
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
    $e.appendChild(child);
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
// export function hasClass($ele: Element, className: string): boolean {
//   return $ele.classList.contains(className);
// }
// export function toggleClass($ele: Element, className: string, force?: boolean): boolean {
//   return $ele.classList.toggle(className, force);
// }
// export function addClass($ele: Element, className: string): boolean {
//   return toggleClass($ele, className, true);
// }
// export function removeClass($ele: Element, className: string): boolean {
//   return toggleClass($ele, className, false);
// }
// export function replaceClass($ele: Element, oldClass: string, newClass: string): void {
//   return $ele.classList.replace(oldClass, newClass);
// }
function addEvent($element, eventName, handler, capture) {
    Object(_type__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(capture) && (capture = eventName.startsWith('touch') ? {
        capture: false,
        passive: true
    } : false);
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

/***/ "../../jinge-framework/lib/util/index.js":
/*!******************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/util/index.js ***!
  \******************************************************************************/
/*! exports provided: typeOf, isObject, isString, isNumber, isUndefined, isArray, isBoolean, isFunction, isPromise, arrayRemove, arrayPushIfNotExist, arrayEqual, uid, setImmediate, clearImmediate, setText, createTextNode, createFragment, appendChildren, replaceChildren, removeAttribute, setAttribute, createElement, createElementWithoutAttrs, createSVGElement, createSVGElementWithoutAttrs, createElementWithChild, insertAfter, addEvent, removeEvent, registerEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "../../jinge-framework/lib/util/type.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "typeOf", function() { return _type__WEBPACK_IMPORTED_MODULE_0__["typeOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _type__WEBPACK_IMPORTED_MODULE_0__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _type__WEBPACK_IMPORTED_MODULE_0__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _type__WEBPACK_IMPORTED_MODULE_0__["isNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _type__WEBPACK_IMPORTED_MODULE_0__["isUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _type__WEBPACK_IMPORTED_MODULE_0__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return _type__WEBPACK_IMPORTED_MODULE_0__["isBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _type__WEBPACK_IMPORTED_MODULE_0__["isFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return _type__WEBPACK_IMPORTED_MODULE_0__["isPromise"]; });

/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "../../jinge-framework/lib/util/array.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayRemove", function() { return _array__WEBPACK_IMPORTED_MODULE_1__["arrayRemove"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayPushIfNotExist", function() { return _array__WEBPACK_IMPORTED_MODULE_1__["arrayPushIfNotExist"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayEqual", function() { return _array__WEBPACK_IMPORTED_MODULE_1__["arrayEqual"]; });

/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "../../jinge-framework/lib/util/common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uid", function() { return _common__WEBPACK_IMPORTED_MODULE_2__["uid"]; });

/* harmony import */ var _setimm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setimm */ "../../jinge-framework/lib/util/setimm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setImmediate", function() { return _setimm__WEBPACK_IMPORTED_MODULE_3__["setImmediate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearImmediate", function() { return _setimm__WEBPACK_IMPORTED_MODULE_3__["clearImmediate"]; });

/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom */ "../../jinge-framework/lib/util/dom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setText", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["setText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTextNode", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["createTextNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFragment", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["createFragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "appendChildren", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["appendChildren"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replaceChildren", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["replaceChildren"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeAttribute", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["removeAttribute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setAttribute", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["setAttribute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["createElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElementWithoutAttrs", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["createElementWithoutAttrs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSVGElement", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["createSVGElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSVGElementWithoutAttrs", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["createSVGElementWithoutAttrs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElementWithChild", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["createElementWithChild"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "insertAfter", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["insertAfter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addEvent", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["addEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeEvent", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["removeEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerEvent", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["registerEvent"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-framework/lib/util/setimm.js":
/*!*******************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/util/setimm.js ***!
  \*******************************************************************************/
/*! exports provided: setImmediate, clearImmediate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setImmediate", function() { return setImmediate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearImmediate", function() { return clearImmediate; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "../../jinge-framework/lib/util/type.js");
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
    if (!Object(_type__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(callback) || arguments.length > 1) {
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
if (Object(_type__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(window.setImmediate)) {
    tasksByHandle = new Map();
    const messagePrefix = 'setImmediate$' + (autoIncrement++).toString(32) + '$';
    window.addEventListener('message', event => {
        if (event.source === window &&
            Object(_type__WEBPACK_IMPORTED_MODULE_0__["isString"])(event.data) &&
            event.data.startsWith(messagePrefix)) {
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

/***/ "../../jinge-framework/lib/util/type.js":
/*!*****************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/util/type.js ***!
  \*****************************************************************************/
/*! exports provided: typeOf, isObject, isString, isNumber, isUndefined, isArray, isBoolean, isFunction, isPromise */
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
    return typeof v === 'boolean' || (v instanceof Boolean);
}
function isFunction(v) {
    return typeOf(v) === 'function';
}
function isPromise(obj) {
    return isObject(obj) && isFunction(obj.then);
}
//# sourceMappingURL=type.js.map

/***/ }),

/***/ "../../jinge-framework/lib/vm/common.js":
/*!*****************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/vm/common.js ***!
  \*****************************************************************************/
/*! exports provided: $$, isInnerObj, isViewModel, isPublicProperty, getPropertyName, parsePropertyPath, addParent, removeParent, shiftParent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$", function() { return $$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInnerObj", function() { return isInnerObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isViewModel", function() { return isViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPublicProperty", function() { return isPublicProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPropertyName", function() { return getPropertyName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parsePropertyPath", function() { return parsePropertyPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addParent", function() { return addParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeParent", function() { return removeParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shiftParent", function() { return shiftParent; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge-framework/lib/util/index.js");

const $$ = Symbol('$$');
function isInnerObj(v) {
    const clazz = v.constructor;
    return clazz === RegExp || clazz === Date || clazz === Boolean;
}
function isViewModel(v) {
    return Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(v) && ($$ in v);
}
function isPublicProperty(v) {
    return Object(_util__WEBPACK_IMPORTED_MODULE_0__["isString"])(v) && v.charCodeAt(0) !== 95;
}
function getPropertyName(v) {
    if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isString"])(v)) {
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
function parsePropertyPath(propertyPath) {
    return Object(_util__WEBPACK_IMPORTED_MODULE_0__["isString"])(propertyPath) ? (propertyPath.indexOf('.') > 0 ? propertyPath.split('.') : [propertyPath]) : (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isArray"])(propertyPath) ? propertyPath : [propertyPath]);
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
    const idx = child.__parents.findIndex(item => {
        return item.core === parent && item.prop === property;
    });
    if (idx >= 0) {
        child.__parents.splice(idx, 1);
    }
}
function shiftParent(child, parent, property, delta) {
    if (!child.__parents)
        return;
    const item = child.__parents.find(it => {
        return it.core === parent && it.prop === property;
    });
    if (item) {
        item.prop += delta;
    }
}
//# sourceMappingURL=common.js.map

/***/ }),

/***/ "../../jinge-framework/lib/vm/core.js":
/*!***************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/vm/core.js ***!
  \***************************************************************************/
/*! exports provided: ViewModelCoreImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewModelCoreImpl", function() { return ViewModelCoreImpl; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge-framework/lib/util/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "../../jinge-framework/lib/vm/common.js");
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node */ "../../jinge-framework/lib/vm/node.js");
/* harmony import */ var _notify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notify */ "../../jinge-framework/lib/vm/notify.js");




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
        Object.defineProperty(target, _common__WEBPACK_IMPORTED_MODULE_1__["$$"], {
            value: this,
            writable: false,
            configurable: true,
            enumerable: false
        });
    }
    __watch(propertyPath, handler, related) {
        propertyPath = Object(_common__WEBPACK_IMPORTED_MODULE_1__["parsePropertyPath"])(propertyPath);
        const dbStarIdx = propertyPath.indexOf('**');
        if (dbStarIdx >= 0 && dbStarIdx !== propertyPath.length - 1) {
            /**
             * 'a.b.**' is good.
             * 'a.b.**.c' is bad.
             */
            throw new Error('wizard "**" must be last element in path.');
        }
        const node = Object(_node__WEBPACK_IMPORTED_MODULE_2__["loopCreateNode"])(this, propertyPath);
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
            Object(_node__WEBPACK_IMPORTED_MODULE_2__["loopClearNode"])(this);
            return;
        }
        const node = Object(_node__WEBPACK_IMPORTED_MODULE_2__["loopGetNode"])(this, Object(_common__WEBPACK_IMPORTED_MODULE_1__["parsePropertyPath"])(propertyPath));
        if (!node) {
            return;
        }
        const handlers = node.__handlers;
        if (!handlers) {
            return;
        }
        if (!handler) { // remove all if second parameter is not provided
            handlers.forEach(_notify__WEBPACK_IMPORTED_MODULE_3__["handleCancel"]);
            handlers.length = 0;
        }
        else {
            Object(_notify__WEBPACK_IMPORTED_MODULE_3__["handleCancel"])(handler);
            Object(_util__WEBPACK_IMPORTED_MODULE_0__["arrayRemove"])(handlers, handler);
        }
        Object(_node__WEBPACK_IMPORTED_MODULE_2__["deleteNode"])(node);
        if (related && related !== this) {
            related.__rmRelated(this, propertyPath, handler);
        }
    }
    __notify(propertyPath, immediate = false) {
        if (!this.__notifiable) {
            return;
        }
        propertyPath = Object(_common__WEBPACK_IMPORTED_MODULE_1__["parsePropertyPath"])(propertyPath);
        if (this.__listeners) {
            Object(_notify__WEBPACK_IMPORTED_MODULE_3__["loopNotify"])(this, propertyPath, immediate);
        }
        const parents = this.__parents;
        parents && parents.forEach(ps => {
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
        Object(_node__WEBPACK_IMPORTED_MODULE_2__["loopClearNode"])(this);
        // unlink wrapper proxy
        this.proxy = null;
        if (this.__related) {
            this.__related.forEach((hooks, origin) => {
                hooks.forEach(hook => {
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
                if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(v) || !(_common__WEBPACK_IMPORTED_MODULE_1__["$$"] in v)) {
                    return;
                }
                Object(_common__WEBPACK_IMPORTED_MODULE_1__["removeParent"])(v[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], this, prop);
            });
            this.__setters = null;
        }
        Object.getOwnPropertyNames(target).forEach(prop => {
            const v = target[prop];
            if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(v) || !(_common__WEBPACK_IMPORTED_MODULE_1__["$$"] in v)) {
                return;
            }
            Object(_common__WEBPACK_IMPORTED_MODULE_1__["removeParent"])(v[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], this, prop);
        });
        // unlink vm target
        delete target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]];
        this.target = null;
    }
    __addRelated(origin, propertyPath, handler) {
        if (!this.__related)
            this.__related = new Map();
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
        const isPropArray = Object(_util__WEBPACK_IMPORTED_MODULE_0__["isArray"])(propertyPath);
        const i = hook.findIndex(it => {
            return handler === it.handler &&
                (isPropArray
                    ? Object(_util__WEBPACK_IMPORTED_MODULE_0__["arrayEqual"])(propertyPath, it.prop)
                    : propertyPath === it.prop);
        });
        if (i >= 0) {
            hook.splice(i, 1);
        }
    }
}
//# sourceMappingURL=core.js.map

/***/ }),

/***/ "../../jinge-framework/lib/vm/index.js":
/*!****************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/vm/index.js ***!
  \****************************************************************************/
/*! exports provided: $$, isInnerObj, isViewModel, isPublicProperty, getPropertyName, parsePropertyPath, addParent, removeParent, shiftParent, ViewModelCoreImpl, loopCreateNode, loopGetNode, deleteNode, loopClearNode, handleCancel, handleOnce, loopHandle, loopNotify, ArrayProxyHandler, createViewModel, createAttributes, createComponent, vm, attrs, watch, unwatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "../../jinge-framework/lib/vm/common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$$", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["$$"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInnerObj", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["isInnerObj"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isViewModel", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["isViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPublicProperty", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["isPublicProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPropertyName", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["getPropertyName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePropertyPath", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["parsePropertyPath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addParent", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["addParent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeParent", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["removeParent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shiftParent", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["shiftParent"]; });

/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "../../jinge-framework/lib/vm/core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewModelCoreImpl", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["ViewModelCoreImpl"]; });

/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node */ "../../jinge-framework/lib/vm/node.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loopCreateNode", function() { return _node__WEBPACK_IMPORTED_MODULE_2__["loopCreateNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loopGetNode", function() { return _node__WEBPACK_IMPORTED_MODULE_2__["loopGetNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteNode", function() { return _node__WEBPACK_IMPORTED_MODULE_2__["deleteNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loopClearNode", function() { return _node__WEBPACK_IMPORTED_MODULE_2__["loopClearNode"]; });

/* harmony import */ var _notify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notify */ "../../jinge-framework/lib/vm/notify.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleCancel", function() { return _notify__WEBPACK_IMPORTED_MODULE_3__["handleCancel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleOnce", function() { return _notify__WEBPACK_IMPORTED_MODULE_3__["handleOnce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loopHandle", function() { return _notify__WEBPACK_IMPORTED_MODULE_3__["loopHandle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loopNotify", function() { return _notify__WEBPACK_IMPORTED_MODULE_3__["loopNotify"]; });

/* harmony import */ var _proxy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./proxy */ "../../jinge-framework/lib/vm/proxy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrayProxyHandler", function() { return _proxy__WEBPACK_IMPORTED_MODULE_4__["ArrayProxyHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createViewModel", function() { return _proxy__WEBPACK_IMPORTED_MODULE_4__["createViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAttributes", function() { return _proxy__WEBPACK_IMPORTED_MODULE_4__["createAttributes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createComponent", function() { return _proxy__WEBPACK_IMPORTED_MODULE_4__["createComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vm", function() { return _proxy__WEBPACK_IMPORTED_MODULE_4__["vm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "attrs", function() { return _proxy__WEBPACK_IMPORTED_MODULE_4__["attrs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watch", function() { return _proxy__WEBPACK_IMPORTED_MODULE_4__["watch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unwatch", function() { return _proxy__WEBPACK_IMPORTED_MODULE_4__["unwatch"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-framework/lib/vm/node.js":
/*!***************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/vm/node.js ***!
  \***************************************************************************/
/*! exports provided: loopCreateNode, loopGetNode, deleteNode, loopClearNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loopCreateNode", function() { return loopCreateNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loopGetNode", function() { return loopGetNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteNode", function() { return deleteNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loopClearNode", function() { return loopClearNode; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "../../jinge-framework/lib/vm/common.js");
/* harmony import */ var _notify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notify */ "../../jinge-framework/lib/vm/notify.js");


function loopCreateNode(parentNode, propertyPath, level = 0) {
    const propertyName = Object(_common__WEBPACK_IMPORTED_MODULE_0__["getPropertyName"])(propertyPath[level]);
    if (!parentNode.__listeners) {
        parentNode.__listeners = new Map();
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
    }
    else {
        return loopCreateNode(node, propertyPath, level + 1);
    }
}
function loopGetNode(parentNode, propertyPath, level = 0) {
    var _a;
    const propertyName = Object(_common__WEBPACK_IMPORTED_MODULE_0__["getPropertyName"])(propertyPath[level]);
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
function deleteNode(node) {
    if ((node && node.__handlers && node.__handlers.length > 0) ||
        (node.__listeners && node.__listeners.size > 0)) {
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
function loopClearNode(node) {
    const listeners = node.__listeners;
    if (listeners) {
        // loop clear all child nodes
        listeners.forEach(sn => loopClearNode(sn));
        node.__listeners = null;
    }
    // destroy all handlers
    const handlers = node.__handlers;
    if (handlers) {
        // clear handler waiting to execute
        handlers.forEach(_notify__WEBPACK_IMPORTED_MODULE_1__["handleCancel"]);
        node.__handlers = null;
    }
    // unlink parent
    node.__parent = null;
}
//# sourceMappingURL=node.js.map

/***/ }),

/***/ "../../jinge-framework/lib/vm/notify.js":
/*!*****************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/vm/notify.js ***!
  \*****************************************************************************/
/*! exports provided: handleCancel, handleOnce, loopHandle, loopNotify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleCancel", function() { return handleCancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleOnce", function() { return handleOnce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loopHandle", function() { return loopHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loopNotify", function() { return loopNotify; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge-framework/lib/util/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "../../jinge-framework/lib/vm/common.js");


const handleTasks = new Map();
function handleCancel(handler) {
    const t = handleTasks.get(handler);
    if (t) {
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["clearImmediate"])(t.immediate);
        handleTasks.delete(handler);
    }
}
function handleOnce(handler, propertyPath) {
    if (handleTasks.has(handler)) {
        return;
    }
    const imm = Object(_util__WEBPACK_IMPORTED_MODULE_0__["setImmediate"])(() => {
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
        propertyPath: propertyPath
    });
}
function loopHandle(propertyPath, node, immediate) {
    const handlers = node.__handlers;
    handlers && handlers.forEach(handler => {
        if (immediate) {
            handler(propertyPath);
        }
        else {
            handleOnce(handler, propertyPath);
        }
    });
    const listeners = node.__listeners;
    listeners && listeners.forEach(c => {
        loopHandle(propertyPath, c, immediate);
    });
}
function loopNotify(vm, propertyPath, immediate, level = 0) {
    const listeners = vm.__listeners;
    if (!listeners) {
        return;
    }
    const propertyName = Object(_common__WEBPACK_IMPORTED_MODULE_1__["getPropertyName"])(propertyPath[level]);
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

/***/ "../../jinge-framework/lib/vm/proxy.js":
/*!****************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/vm/proxy.js ***!
  \****************************************************************************/
/*! exports provided: ArrayProxyHandler, createViewModel, createAttributes, createComponent, vm, attrs, watch, unwatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayProxyHandler", function() { return ArrayProxyHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createViewModel", function() { return createViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAttributes", function() { return createAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComponent", function() { return createComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vm", function() { return vm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attrs", function() { return attrs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watch", function() { return watch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unwatch", function() { return unwatch; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge-framework/lib/util/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "../../jinge-framework/lib/vm/common.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core */ "../../jinge-framework/lib/vm/core.js");



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
    let map = obj[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]].__setters;
    if (!map) {
        obj[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]].__setters = map = new Map();
    }
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
    }
    else {
        return map.get(prop);
    }
}
function notifyPropChanged(vm, prop) {
    vm[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]].__notify(prop);
}
function __propSetHandler(target, prop, value, setFn, assertVM = true) {
    if (!Object(_common__WEBPACK_IMPORTED_MODULE_1__["isPublicProperty"])(prop)) {
        /**
         * 如果不强制转成 string，typescript 会报：Type 'symbol' cannot be used as an index type
         */
        target[prop] = value;
        return true;
    }
    const oldVal = target[prop];
    if (oldVal === value && !Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(value)) {
        return true;
    }
    let newValIsVM = Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value) && !Object(_common__WEBPACK_IMPORTED_MODULE_1__["isInnerObj"])(value);
    if (newValIsVM) {
        newValIsVM = _common__WEBPACK_IMPORTED_MODULE_1__["$$"] in value;
        if (assertVM && !newValIsVM) {
            throw new Error(`public property "${prop.toString()}" of ViewModel must also be ViewModel`);
        }
    }
    // console.log(`'${prop}' changed from ${store[prop]} to ${value}`);
    if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(oldVal) && (_common__WEBPACK_IMPORTED_MODULE_1__["$$"] in oldVal)) {
        Object(_common__WEBPACK_IMPORTED_MODULE_1__["removeParent"])(oldVal[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], prop);
    }
    setFn(target, prop, value);
    if (newValIsVM) {
        Object(_common__WEBPACK_IMPORTED_MODULE_1__["addParent"])(value[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], prop);
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
        setterFn.call(target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]].proxy, value);
    }
    else {
        target[prop] = value;
    }
}
function objectPropSetHandler(target, prop, value) {
    if (!(_common__WEBPACK_IMPORTED_MODULE_1__["$$"] in target)) {
        // ViewModel has been destroied.
        return true;
    }
    return __propSetHandler(target, prop, value, __objectPropSetFn);
}
function attrsPropSetHandler(target, prop, value) {
    if (!(_common__WEBPACK_IMPORTED_MODULE_1__["$$"] in target)) {
        // ViewModel has been destroied.
        return true;
    }
    return __propSetHandler(target, prop, value, __objectPropSetFn, false);
}
function componentPropSetHandler(target, prop, value) {
    if (!(_common__WEBPACK_IMPORTED_MODULE_1__["$$"] in target)) {
        // eslint-disable-next-line no-console
        console.warn(`call setter "${prop.toString()}" after destroied, resources such as setInterval maybe not released before destroy. component:`, target);
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
    if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(value)) {
        throw new Error('bad argument. array length must be validate number.');
    }
    const oldLen = target.length;
    if (oldLen > value) {
        for (let i = value; i < oldLen; i++) {
            const v = target[i];
            if (Object(_common__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(v)) {
                Object(_common__WEBPACK_IMPORTED_MODULE_1__["removeParent"])(v[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], i);
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
    if (!(_common__WEBPACK_IMPORTED_MODULE_1__["$$"] in target)) {
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
    set: objectPropSetHandler
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
    set: objectPropSetHandler
};
function _arrayReverseSort(target, fn, arg) {
    target.forEach((it, i) => {
        if (Object(_common__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(it)) {
            Object(_common__WEBPACK_IMPORTED_MODULE_1__["addParent"])(it[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], i);
        }
    });
    target[fn](arg);
    target.forEach((it, i) => {
        if (Object(_common__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(it)) {
            Object(_common__WEBPACK_IMPORTED_MODULE_1__["removeParent"])(it[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], i);
        }
    });
    arrayNotifyItems(target, 0, target.length);
    // return wrapper proxy to ensure `arr.reverse() === arr`
    return target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]].proxy;
}
function wrapSubArray(arr, wrapEachItem = false) {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    const rtn = wrapProxy(arr, true);
    // handleVMDebug(arr);
    arr.forEach((it, i) => {
        if (Object(_common__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(it)) {
            Object(_common__WEBPACK_IMPORTED_MODULE_1__["addParent"])(it[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], arr[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], i);
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
        if (!Object(_common__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(el))
            return;
        Object(_common__WEBPACK_IMPORTED_MODULE_1__["shiftParent"])(el[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], arr[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], i, delta);
    });
}
function _argAssert(arg, fn) {
    if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(arg)) {
        if (!(_common__WEBPACK_IMPORTED_MODULE_1__["$$"] in arg)) {
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
                Object(_common__WEBPACK_IMPORTED_MODULE_1__["addParent"])(arg[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], idx + i);
            }
        });
        for (let i = 0; i < delCount; i++) {
            if (idx + i >= target.length)
                break;
            const el = target[idx + i];
            if (Object(_common__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(el)) {
                Object(_common__WEBPACK_IMPORTED_MODULE_1__["removeParent"])(el[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], idx + i);
            }
        }
        const delta = args.length - delCount;
        if (delta !== 0) {
            for (let i = idx + delCount; i < target.length; i++) {
                const el = target[i];
                if (!Object(_common__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(el)) {
                    continue;
                }
                Object(_common__WEBPACK_IMPORTED_MODULE_1__["shiftParent"])(el[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], i, delta);
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
        if (Object(_common__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(el)) {
            Object(_common__WEBPACK_IMPORTED_MODULE_1__["removeParent"])(el[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], -1);
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
                Object(_common__WEBPACK_IMPORTED_MODULE_1__["addParent"])(arg[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], i);
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
        if (Object(_common__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(el)) {
            Object(_common__WEBPACK_IMPORTED_MODULE_1__["removeParent"])(el[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], target.length);
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
                Object(_common__WEBPACK_IMPORTED_MODULE_1__["addParent"])(arg[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], target.length + i);
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
            if (it === v && !Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(it)) {
                return;
            }
            if (Object(_common__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(it)) {
                Object(_common__WEBPACK_IMPORTED_MODULE_1__["removeParent"])(it[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], i);
            }
            target[i] = v;
            if (Object(_common__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(v)) {
                Object(_common__WEBPACK_IMPORTED_MODULE_1__["addParent"])(v[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], i);
            }
            notifyPropChanged(target, i);
        });
        return target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]].proxy;
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
    }
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
    set: arrayPropSetHandler
};
function wrapProxy(target, isArr) {
    const vmCore = new _core__WEBPACK_IMPORTED_MODULE_2__["ViewModelCoreImpl"](target);
    return vmCore.proxy = new Proxy(target, isArr ? ArrayProxyHandler : (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isPromise"])(target) ? PromiseProxyHandler : ObjectProxyHandler));
}
function wrapProp(parent, child, property) {
    // const v = vm[property];
    if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(child) || Object(_common__WEBPACK_IMPORTED_MODULE_1__["isInnerObj"])(child)) {
        return;
    }
    if (!(_common__WEBPACK_IMPORTED_MODULE_1__["$$"] in child)) {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        parent[property] = child = createViewModel(child);
    }
    Object(_common__WEBPACK_IMPORTED_MODULE_1__["addParent"])(child[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], parent[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], property);
}
function createViewModel(target) {
    if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(target)) {
        // directly return if alreay is ViewModel or inner object(Date/RegExp/Boolean).
        if (Object(_common__WEBPACK_IMPORTED_MODULE_1__["isInnerObj"])(target) || (_common__WEBPACK_IMPORTED_MODULE_1__["$$"] in target)) {
            return target;
        }
        const isArr = Object(_util__WEBPACK_IMPORTED_MODULE_0__["isArray"])(target);
        const rtn = wrapProxy(target, isArr);
        if (isArr) {
            for (let i = 0; i < target.length; i++) {
                wrapProp(target, target[i], i);
            }
        }
        else {
            for (const k in target) {
                if (Object(_common__WEBPACK_IMPORTED_MODULE_1__["isPublicProperty"])(k)) {
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
function createAttributes(attributes) {
    const vmCore = new _core__WEBPACK_IMPORTED_MODULE_2__["ViewModelCoreImpl"](attributes);
    // 初始化时默认的 notifiable 为 false，
    // 待 RENDER 结束后才修改为 true，用于避免无谓的消息通知。
    vmCore.__notifiable = false;
    return (vmCore.proxy = new Proxy(attributes, {
        set: attrsPropSetHandler
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
function createComponent(component) {
    if (_common__WEBPACK_IMPORTED_MODULE_1__["$$"] in component) {
        throw new Error('component has alreay been wrapped.');
    }
    // handleVMDebug(component);
    const vmCore = new _core__WEBPACK_IMPORTED_MODULE_2__["ViewModelCoreImpl"](component);
    // 初始化时 Component 默认的 VM_NOTIFIABLE 为 false，
    // 待 RENDER 结束后才修改为 true，用于避免无谓的消息通知。
    vmCore.__notifiable = false;
    return vmCore.proxy = new Proxy(component, {
        set: componentPropSetHandler
    });
}
function vm(target) {
    if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(target)) {
        throw new Error('vm() target must be object or array.');
    }
    return createViewModel(target);
}
function attrs(target) {
    if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(target) || Object(_util__WEBPACK_IMPORTED_MODULE_0__["isArray"])(target)) {
        throw new Error('attrs() traget must be plain object.');
    }
    return createAttributes(target);
}
function watch(vm, propertyPath, handler) {
    vm[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]].__watch(propertyPath, handler);
}
function unwatch(vm, propertyPath, handler) {
    vm[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]].__unwatch(propertyPath, handler);
}
//# sourceMappingURL=proxy.js.map

/***/ }),

/***/ "../../jinge-router/lib/common.js":
/*!***********************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-router/lib/common.js ***!
  \***********************************************************************/
/*! exports provided: VIEW_NAME_PATH, isParamsOrQuerySame, cloneParamsOrQuery, encodeParamsOrQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEW_NAME_PATH", function() { return VIEW_NAME_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isParamsOrQuerySame", function() { return isParamsOrQuerySame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneParamsOrQuery", function() { return cloneParamsOrQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeParamsOrQuery", function() { return encodeParamsOrQuery; });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge-framework/lib/index.js");

const VIEW_NAME_PATH = Symbol('#viewNamePath');
function isParamsOrQuerySame(src, dst) {
    if (!src)
        return !dst;
    if (!dst)
        return !src;
    for (const k in src) {
        if (src[k] !== dst[k])
            return false;
    }
    return true;
}
function cloneParamsOrQuery(v) {
    return Object.fromEntries(Object.keys(v).map(k => {
        return [k, v[k]];
    }));
}
function encodeParamsOrQuery(v) {
    if (!Object(jinge__WEBPACK_IMPORTED_MODULE_0__["isObject"])(v))
        return '';
    return Object.keys(v).map(k => {
        return encodeURIComponent(k) + '=' + encodeURIComponent(v[k]);
    }).join('&');
}
//# sourceMappingURL=common.js.map

/***/ }),

/***/ "../../jinge-router/lib/components/index.js":
/*!*********************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-router/lib/components/index.js ***!
  \*********************************************************************************/
/*! exports provided: RouterViewComponent, RouterLinkComponent, RouterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "../../jinge-router/lib/components/view.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouterViewComponent", function() { return _view__WEBPACK_IMPORTED_MODULE_0__["RouterViewComponent"]; });

/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link */ "../../jinge-router/lib/components/link.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouterLinkComponent", function() { return _link__WEBPACK_IMPORTED_MODULE_1__["RouterLinkComponent"]; });

/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ "../../jinge-router/lib/components/router.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouterComponent", function() { return _router__WEBPACK_IMPORTED_MODULE_2__["RouterComponent"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-router/lib/components/link.js":
/*!********************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-router/lib/components/link.js ***!
  \********************************************************************************/
/*! exports provided: RouterLinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterLinkComponent", function() { return RouterLinkComponent; });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge-framework/lib/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common */ "../../jinge-router/lib/common.js");



class RouterLinkComponent extends jinge__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(attrs) {
      var _a;
      super(attrs);
      const __vm_92fb158b76b3 = this[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
      const fn_2_92fb158b76b3 = () => {
        __vm_92fb158b76b3.to = attrs.to;
      };
      fn_2_92fb158b76b3();
      attrs[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('to', fn_2_92fb158b76b3);
      const fn_3_92fb158b76b3 = () => {
        __vm_92fb158b76b3.text = attrs.text || '';
      };
      fn_3_92fb158b76b3();
      attrs[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('text', fn_3_92fb158b76b3);
      const fn_4_92fb158b76b3 = () => {
        __vm_92fb158b76b3.target = attrs.target || '_self';
      };
      fn_4_92fb158b76b3();
      attrs[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('target', fn_4_92fb158b76b3);
      const fn_5_92fb158b76b3 = () => {
        __vm_92fb158b76b3.replace = !!attrs.replace;
      };
      fn_5_92fb158b76b3();
      attrs[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('replace', fn_5_92fb158b76b3);
      const fn_6_92fb158b76b3 = () => {
        __vm_92fb158b76b3.className = attrs.class;
      };
      fn_6_92fb158b76b3();
      attrs[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('class', fn_6_92fb158b76b3);
      const fn_7_92fb158b76b3 = () => {
        __vm_92fb158b76b3.style = attrs.style;
      };
      fn_7_92fb158b76b3();
      attrs[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('style', fn_7_92fb158b76b3);
      const fn_8_92fb158b76b3 = () => {
        __vm_92fb158b76b3.active = attrs.active;
      };
      fn_8_92fb158b76b3();
      attrs[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('active', fn_8_92fb158b76b3);
      __vm_92fb158b76b3._router = __vm_92fb158b76b3.__getContext('router');
      if (!__vm_92fb158b76b3._router) {
        throw new Error('Context named "router" not found.');
      }
      __vm_92fb158b76b3._tag = ((_a = attrs[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].slots) === null || _a === void 0 ? void 0 : _a.default) ? 0 : -1;
      __vm_92fb158b76b3._el = null;
      __vm_92fb158b76b3._dereg = null;
      __vm_92fb158b76b3._queryWatched = false;
      __vm_92fb158b76b3._clickHandler = __vm_92fb158b76b3._onClick.bind(__vm_92fb158b76b3);
      __vm_92fb158b76b3._routerChangedHandler = __vm_92fb158b76b3._onRouterChanged.bind(__vm_92fb158b76b3);
    }
    static get template() {
        return function(component) {
          const vm_0 = component;
          return [
          ...(() => {
            const __ac = vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].slots;
            const renderFn = __ac && __ac['default'] ? __ac['default'] :   function(component) {
              return [
              (() => {
                const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
                  "a",
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].compStylePid,
                  (() => {
                    const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createTextNode"])();
                    const fn_0 = () => {
                      Object(jinge__WEBPACK_IMPORTED_MODULE_0__["setText"])(el, vm_0.text);
                    };
                    fn_0();
                    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch(["text"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]]);
                    return el;
                  })()
                );
                const fn_0 = () => {
                  Object(jinge__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(el, "class", !vm_0.className && !(vm_0.isActive && vm_0.active) ? vm_0._udef : (vm_0.className || '') + (vm_0.isActive && vm_0.active ? (vm_0.className ? ' ' : '') + vm_0.active : ''));
                };
                fn_0();
                vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch(["className"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]]);
                vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch(["isActive"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]]);
                vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch(["active"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]]);
                const fn_1 = () => {
                  Object(jinge__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(el, "style", vm_0.style);
                };
                fn_1();
                vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch(["style"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]]);
                component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].rootNodes.push(el);
                return el;
              })()
              ];
            };
            const attrs = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["attrs"])({
              [jinge__WEBPACK_IMPORTED_MODULE_0__["__"]]: {
                debugName: "attrs_of_<parameter>",      
                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].context,
                slots: {
                  default: renderFn || jinge__WEBPACK_IMPORTED_MODULE_0__["emptyRenderFn"]
                }
              }
            });
            const el = new jinge__WEBPACK_IMPORTED_MODULE_0__["ParameterComponent"](attrs, []);
            el.__addStylePid(component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].compStylePid);
            component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].rootNodes.push(el);
            return Object(jinge__WEBPACK_IMPORTED_MODULE_0__["assertRenderResults"])(el.__render());
          })()
          ];
        };
    }
    _onRouterChanged() {
        this._updateActive();
    }
    get target() {
        return this._target;
    }
    set target(v) {
        if (this._target === v)
            return;
        this._target = v;
        this._updateTarget();
    }
    get active() {
        return this._active;
    }
    set active(v) {
        if (this._active === v)
            return;
        if (this._tag >= 0 && this._active && this._el) {
            this._el.classList.remove(this._active); // remove previous active class
        }
        this._active = v;
        this.__updateIfNeed(this._updateActive);
    }
    get to() {
        return this._to;
    }
    set to(v) {
        if (this._to === v)
            return;
        this._to = v;
        this.__updateIfNeed(this._updateHrefAndActive);
    }
    _onClick(e) {
        if (e.defaultPrevented || e.metaKey || e.ctrlKey) {
            return;
        }
        if (this._tag <= 0) {
            e.preventDefault(); // prevent default <a> jump
        }
        this._router.go(this._to, {
            target: this.target,
            replace: this.replace
        });
    }
    __afterRender() {
        const el = this.__firstDOM;
        if (this._tag >= 0) {
            this._tag = el.tagName === 'A' ? 0 : 1;
        }
        this._el = el;
        this._updateTarget();
        this._updateHrefAndActive();
        this._router.__on('change', this._routerChangedHandler);
        Object(jinge__WEBPACK_IMPORTED_MODULE_0__["addEvent"])(el, 'click', this._clickHandler);
    }
    __beforeDestroy() {
        Object(jinge__WEBPACK_IMPORTED_MODULE_0__["removeEvent"])(this._el, 'click', this._clickHandler);
        this._router.__off('change', this._routerChangedHandler);
        if (this._queryWatched) {
            Object(jinge__WEBPACK_IMPORTED_MODULE_0__["unwatch"])(this._router.current, 'query.*', this._routerChangedHandler);
        }
    }
    _updateTarget() {
        if (this._tag <= 0) {
            Object(jinge__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(this._el, 'target', this.target);
        }
    }
    _updateHrefAndActive() {
        this._updateHref();
        this._updateActive();
    }
    _updateHref() {
        if (this._tag <= 0) {
            Object(jinge__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(this._el, 'href', this._router.href(this._to));
        }
    }
    _updateActive() {
        let isActive = this._router.includes(this._to);
        if (isActive && Object(jinge__WEBPACK_IMPORTED_MODULE_0__["isObject"])(this._to) && this._to.query) {
            if (!this._queryWatched) {
                Object(jinge__WEBPACK_IMPORTED_MODULE_0__["watch"])(this._router.current, 'query.*', this._routerChangedHandler);
                this._queryWatched = true;
            }
            isActive = Object(_common__WEBPACK_IMPORTED_MODULE_1__["isParamsOrQuerySame"])(this._to.query, this._router.current.query);
        }
        else if (this._queryWatched) {
            this._queryWatched = false;
            Object(jinge__WEBPACK_IMPORTED_MODULE_0__["unwatch"])(this._router.current, 'query.*', this._routerChangedHandler);
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
        }
        else {
            this._el.classList.remove(this._active);
        }
    }
}
//# sourceMappingURL=link.js.map

/***/ }),

/***/ "../../jinge-router/lib/components/router.js":
/*!**********************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-router/lib/components/router.js ***!
  \**********************************************************************************/
/*! exports provided: RouterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterComponent", function() { return RouterComponent; });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge-framework/lib/index.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router */ "../../jinge-router/lib/router.js");


class RouterComponent extends jinge__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(attrs) {
      let router;
      if (attrs.router instanceof _router__WEBPACK_IMPORTED_MODULE_1__["Router"]) {
        router = attrs.router;
      } else if (attrs.router === 'hash') {
        router = new _router__WEBPACK_IMPORTED_MODULE_1__["Router"]({ mode: 'hash' });
      } else {
        router = new _router__WEBPACK_IMPORTED_MODULE_1__["Router"]({ mode: 'html5' });
      }
      if (attrs.routes) {
        attrs.routes.forEach(rd => {
          router.register(rd);
        });
      }
      super(attrs);
      const __vm_92fb158b76b3 = this[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
      __vm_92fb158b76b3._router = router;
      __vm_92fb158b76b3.__setContext('router', router);
    }
    __afterRender() {
        this._router.start();
    }
}
//# sourceMappingURL=router.js.map

/***/ }),

/***/ "../../jinge-router/lib/components/view.js":
/*!********************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-router/lib/components/view.js ***!
  \********************************************************************************/
/*! exports provided: RouterViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterViewComponent", function() { return RouterViewComponent; });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge-framework/lib/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common */ "../../jinge-router/lib/common.js");


function createEl(renderFn, context, parentStyleIds) {
    const el = new jinge__WEBPACK_IMPORTED_MODULE_0__["Component"](Object(jinge__WEBPACK_IMPORTED_MODULE_0__["attrs"])({
        [jinge__WEBPACK_IMPORTED_MODULE_0__["__"]]: {
            context,
            slots: {
                default: renderFn
            }
        }
    }));
    if (parentStyleIds) {
        el.__addStylePid(parentStyleIds);
    }
    return el[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
}
function removeMoreThanOne(ns) {
    while (ns.length > 1) {
        const el = ns.pop();
        if (Object(jinge__WEBPACK_IMPORTED_MODULE_0__["isComponent"])(el)) {
            el.__destroy(true);
        }
        else {
            el.parentNode.removeChild(el);
        }
    }
}
class RouterViewComponent extends jinge__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(attrs) {
      super(attrs);
      const __vm_92fb158b76b3 = this[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
      __vm_92fb158b76b3._name = attrs.name || 'default';
      __vm_92fb158b76b3._router = __vm_92fb158b76b3.__getContext('router');
      if (!__vm_92fb158b76b3._router) {
        throw new Error('Context named "router" not found.');
      }
      const parentNamePath = __vm_92fb158b76b3.__getContext(_common__WEBPACK_IMPORTED_MODULE_1__["VIEW_NAME_PATH"]);
      __vm_92fb158b76b3._path = [
        ...parentNamePath || [],
        __vm_92fb158b76b3._name
      ];
      __vm_92fb158b76b3.__setContext(_common__WEBPACK_IMPORTED_MODULE_1__["VIEW_NAME_PATH"], __vm_92fb158b76b3._path, true);
      __vm_92fb158b76b3.resolving = false;
      __vm_92fb158b76b3._asyncKey = 0;
    }
    __afterRender() {
        this._router.__regView(this._path, this);
    }
    __render() {
        const el = document.createComment('router-view');
        this[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].rootNodes.push(el);
        return this[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].rootNodes;
    }
    async _shouldUpdateView(from, to) {
        const el = this[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].rootNodes[0];
        if (!Object(jinge__WEBPACK_IMPORTED_MODULE_0__["isComponent"])(el)) {
            return true;
        }
        if (Object(jinge__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(el.__routeShouldLeave)) {
            return await el.__routeShouldLeave(from, to);
        }
        return true;
    }
    _renderErr(err) {
        var _a;
        if (this[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].state !== jinge__WEBPACK_IMPORTED_MODULE_0__["ComponentStates"].RENDERED) {
            return;
        }
        const roots = this[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].rootNodes;
        removeMoreThanOne(roots);
        const errRenderFn = (_a = this[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].slots) === null || _a === void 0 ? void 0 : _a.error;
        if (!errRenderFn) {
            return;
        }
        const el = createEl(errRenderFn, this[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].context, this[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].compStylePid);
        el.error = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["isObject"])(err) ? (err.message || err.toString()) : err;
        const ns = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["assertRenderResults"])(el.__render());
        const $cursor = roots[0];
        $cursor.parentNode.insertBefore(ns.length > 1 ? Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createFragment"])(ns) : ns[0], $cursor);
        roots.push(el);
    }
    async _updateView(current, routeMatchItem, asyncKey) {
        // console.log('update view:', this._path);
        var _a, _b;
        const roots = this[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].rootNodes;
        const oldEl = roots[0];
        removeMoreThanOne(roots);
        const $el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["isComponent"])(oldEl) ? oldEl.__firstDOM : oldEl;
        const $pa = $el.parentNode;
        const $cursor = document.createComment('--');
        $pa.insertBefore($cursor, $el);
        roots.push($cursor);
        if (Object(jinge__WEBPACK_IMPORTED_MODULE_0__["isComponent"])(oldEl)) {
            /**
             * 由于异步回调可能过期，因此需要先隐藏元素，待接下来的异步过程执行成功后才删除组件。
             */
            // toggleHide((oldEl as Component));
            oldEl.__destroy(true);
        }
        else {
            $pa.removeChild($el);
        }
        roots.shift();
        if (!routeMatchItem) {
            const newEl = document.createComment('router-view');
            $pa.insertBefore(newEl, $cursor);
            $pa.removeChild($cursor);
            roots[0] = newEl;
            return;
        }
        /**
         *
         * ````html
         * <router-view>
         * <div slot:default><i class="loading"/>正在加载...</div>
         * <div slot:error>加载失败，请刷新浏览器重试。</div>
         * </router-view>
         * ````
         */
        const loadingRenderFn = (_a = this[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].slots) === null || _a === void 0 ? void 0 : _a.default;
        let loadingEl = null;
        if (loadingRenderFn) {
            loadingEl = createEl(loadingRenderFn, this[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].context, this[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].compStylePid);
            const ns = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["assertRenderResults"])(loadingEl.__render());
            $pa.insertBefore(ns.length > 1 ? Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createFragment"])(ns) : ns[0], $cursor);
            /**
             * 在接下来的异步请求 resolve 和 component 的过程中，如果组件被触发销毁，
             * 则 loadingEl 也需要被自动清理。将 loadingEl 添加到 roots 中即是为了这一目标。
             */
            roots.push(loadingEl);
        }
        const route = routeMatchItem.route;
        const idx = current._routePath.findIndex(it => {
            return it.route === route;
        });
        const parentResolves = current._routePath.slice(0, idx).reduce((pv, it) => {
            return Object.assign(pv, it.resolves);
        }, {});
        // console.log(parentResolves);
        this._asyncKey = asyncKey;
        const resolveDefs = route.define.resolves;
        const currentResolves = { ...parentResolves };
        if (resolveDefs) {
            try {
                await Promise.all(Object.keys(resolveDefs).map(k => {
                    const resolveOrFn = resolveDefs[k];
                    if (Object(jinge__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(resolveOrFn)) {
                        const rtn = resolveOrFn(routeMatchItem.params, current.query, parentResolves);
                        if (Object(jinge__WEBPACK_IMPORTED_MODULE_0__["isObject"])(rtn) && Object(jinge__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(rtn.then)) {
                            return rtn.then((rr) => {
                                currentResolves[k] = rr;
                            });
                        }
                        else {
                            currentResolves[k] = rtn;
                            return Promise.resolve();
                        }
                    }
                    else {
                        currentResolves[k] = resolveOrFn;
                        return Promise.resolve();
                    }
                }));
            }
            catch (err) {
                if (asyncKey === this._asyncKey) {
                    this._renderErr(err);
                }
                throw err;
            }
        }
        // 如果回调已经过期，或组件已被销毁，直接忽略后续逻辑。
        if (asyncKey !== this._asyncKey || this[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].state !== jinge__WEBPACK_IMPORTED_MODULE_0__["ComponentStates"].RENDERED) {
            return;
        }
        routeMatchItem.resolves = currentResolves;
        if (!(this._name in route.components)) {
            let CompClazz = (_b = route.define.components) === null || _b === void 0 ? void 0 : _b[this._name];
            if (!CompClazz && this._name === 'default') {
                CompClazz = route.define.component;
            }
            if (!CompClazz) {
                throw new Error(`component named "${this._name}" not found.`);
            }
            if (Object(jinge__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(CompClazz) && !Object(jinge__WEBPACK_IMPORTED_MODULE_0__["isComponent"])(CompClazz)) {
                try {
                    CompClazz = await CompClazz(routeMatchItem.params, current.query, currentResolves);
                }
                catch (ex) {
                    if (asyncKey === this._asyncKey) {
                        this._renderErr(ex);
                    }
                    throw ex;
                }
                if (asyncKey !== this._asyncKey || this[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].state !== jinge__WEBPACK_IMPORTED_MODULE_0__["ComponentStates"].RENDERED) {
                    return;
                }
                route.components[this._name] = CompClazz;
            }
            else {
                route.components[this._name] = CompClazz;
            }
        }
        if (loadingEl) {
            loadingEl.__destroy(true);
        }
        const newEl = route.components[this._name].create(Object(jinge__WEBPACK_IMPORTED_MODULE_0__["attrs"])({
            ...currentResolves,
            [jinge__WEBPACK_IMPORTED_MODULE_0__["__"]]: {
                context: this[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].context
            }
        }));
        if (this[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].compStylePid) {
            newEl.__addStylePid(this[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].compStylePid);
        }
        const ns = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["assertRenderResults"])(newEl.__render());
        $pa.insertBefore(ns.length > 1 ? Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createFragment"])(ns) : ns[0], $cursor);
        roots.length = 1;
        roots[0] = newEl;
        $pa.removeChild($cursor);
        newEl.__handleAfterRender();
    }
    __beforeDestroy() {
        this._router.__deregView(this._path);
    }
}
//# sourceMappingURL=view.js.map

/***/ }),

/***/ "../../jinge-router/lib/index.js":
/*!**********************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-router/lib/index.js ***!
  \**********************************************************************/
/*! exports provided: VIEW_NAME_PATH, isParamsOrQuerySame, cloneParamsOrQuery, encodeParamsOrQuery, Router, RouterViewComponent, RouterLinkComponent, RouterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "../../jinge-router/lib/common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VIEW_NAME_PATH", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["VIEW_NAME_PATH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isParamsOrQuerySame", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["isParamsOrQuerySame"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cloneParamsOrQuery", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["cloneParamsOrQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "encodeParamsOrQuery", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["encodeParamsOrQuery"]; });

/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router */ "../../jinge-router/lib/router.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return _router__WEBPACK_IMPORTED_MODULE_1__["Router"]; });

/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "../../jinge-router/lib/components/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouterViewComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["RouterViewComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouterLinkComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["RouterLinkComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouterComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["RouterComponent"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-router/lib/router.js":
/*!***********************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-router/lib/router.js ***!
  \***********************************************************************/
/*! exports provided: Router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge-framework/lib/index.js");
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path-to-regexp */ "../../jinge-router/node_modules/path-to-regexp/dist.es2015/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "../../jinge-router/lib/common.js");



function normPath(p) {
    if (!p || !p.startsWith('/'))
        p = '/' + p;
    return p.replace(/[/\\]+/g, '/');
}
function parseVal(v) {
    if (v === 'true') {
        return true;
    }
    else if (v === 'false') {
        return false;
    }
    else if (/^\d+$/.test(v)) {
        return Number(v);
    }
    else {
        return v;
    }
}
function parseQuery(search) {
    const segments = search.split('&').map(s => s.trim()).filter(s => !!s);
    if (segments.length === 0)
        return {};
    return Object.fromEntries(segments.map(seg => {
        const pair = seg.split('=').map(decodeURIComponent);
        return [pair[0], pair.length <= 1 ? true : parseVal(pair[1])];
    }));
}
function addRoute(map, route, container, parent = null) {
    const hasChild = route.children && route.children.length > 0;
    const path = normPath(route.path + (hasChild ? '/' : ''));
    const name = route.name || ((parent ? parent.name : '') + route.path);
    if (map.has(name)) {
        throw new Error('duplicated route name: ' + name);
    }
    const _route = {
        name: name, parent, p2r: {
            match: Object(path_to_regexp__WEBPACK_IMPORTED_MODULE_1__["match"])(path, { end: !hasChild, decode: decodeURIComponent }),
            toPath: Object(path_to_regexp__WEBPACK_IMPORTED_MODULE_1__["compile"])(path)
        },
        define: route, components: {}, redirect: route.redirect
    };
    map.set(name, _route);
    if (hasChild) {
        _route.children = [];
        route.children.forEach(cr => {
            addRoute(map, cr, _route.children, _route);
        });
    }
    container.push(_route);
}
function matchRoutePath(pathname, routes, parentPath = []) {
    routes.find(route => {
        const matches = route.p2r.match(pathname);
        if (matches) {
            /**
             * 子路由继承父亲路由的 params
             */
            const params = parentPath.reduce((pv, it) => {
                return Object.assign({}, it.params);
            }, {});
            parentPath.push({
                route, params: Object.assign(params, matches.params)
            });
            if (route.children) {
                matchRoutePath(pathname.substring(matches.path.length - 1), route.children, parentPath);
            }
        }
        return !!matches;
    });
    return parentPath;
}
class Router extends jinge__WEBPACK_IMPORTED_MODULE_0__["Messenger"] {
    constructor({ mode, baseHref = '/' }) {
        baseHref = normPath(baseHref);
        if (!baseHref.endsWith('/')) {
            throw new Error('baseHref must be ends with "/"');
        }
        super();
        this.__mode = mode;
        this.__started = false;
        this.__dereg = null;
        this.__routes = [];
        this.__map = new Map();
        this.__views = null;
        this.__info = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["vm"])({
            _pathname: null,
            _routePath: [],
            params: {},
            query: {}
        });
        this.__asyncKey = 0;
        this.baseHref = baseHref;
    }
    __regView(viewNamePath, viewComponent) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let node = this;
        for (let i = 0; i < viewNamePath.length - 1; i++) {
            node = node.__views.get(viewNamePath[i]);
        }
        if (!node.__views) {
            node.__views = new Map();
        }
        const viewName = viewNamePath[viewNamePath.length - 1];
        if (node.__views.has(viewName)) {
            throw new Error('dulplicated view name: ' + viewName + ' at path: ' + viewNamePath.join('->'));
        }
        node.__views.set(viewName, {
            component: viewComponent,
            __views: null
        });
        if (viewNamePath.length > this.__info._routePath.length) {
            return;
        }
        viewComponent._updateView(this.__info, this.__info._routePath[viewNamePath.length - 1], this.__asyncKey).catch(err => this._onErr(err));
    }
    __deregView(viewNamePath) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
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
            throw new Error('can\'t register after Router.start()');
        }
        addRoute(this.__map, route, this.__routes);
        return this;
    }
    start() {
        if (this.__started)
            return;
        this.__started = true;
        // checkName(this.__map, this.__routes);
        // console.log(this.__routes);
        const isHashMode = this.__mode === 'hash';
        this.__dereg = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["registerEvent"])(window, isHashMode ? 'hashchange' : 'popstate', isHashMode ? this._onHashChange.bind(this) : this._onStateChange.bind(this));
        if (isHashMode) {
            this._onHashChange();
        }
        else {
            this._onStateChange();
        }
    }
    destroy() {
        if (!this.__started)
            return;
        this.__dereg && this.__dereg();
    }
    _onErr(err) {
        // eslint-disable-next-line no-console
        console.error(err);
        this.__notify('error', err);
    }
    _onHashChange() {
        const hash = location.hash.slice(1);
        const qi = hash.indexOf('?');
        this._update(qi > 0 ? hash.substring(0, qi) : hash, qi > 0 ? hash.substring(qi + 1) : '').catch(err => this._onErr(err));
    }
    _onStateChange() {
        this._update(location.pathname, location.search ? location.search.substring(1) : '').catch(err => this._onErr(err));
    }
    async _update(pathname, search) {
        var _a;
        pathname = normPath(pathname);
        if (this.baseHref !== '/' && pathname.startsWith(this.baseHref)) {
            pathname = pathname.substring(this.baseHref.length);
        }
        const query = (search ? (Object(jinge__WEBPACK_IMPORTED_MODULE_0__["isString"])(search) ? parseQuery(search) : Object(_common__WEBPACK_IMPORTED_MODULE_2__["cloneParamsOrQuery"])(search)) : {});
        /**
         * 由于路由跳转是异步过程，期间会有多处异步等待。如果某个路由还在跳转的过程中，
         * 业务层又发起了新的路由跳转，则应该忽略之前的跳转。
         *
         *
         */
        // 使用 asyncKey 和闭包配合来判断异步回调是否过期，如果过期则直接忽略接下来的逻辑。
        const asyncKey = ++this.__asyncKey;
        /**
         * 如果 pathname 没有发生变化，说明不可能出现 router-view 的更新，
         * 可能是什么都没有变，或者 url 的 query 部分发生变化，这种情况下简单地将
         * 新的 query 赋值给旧的 query 既可，ViewModel 层面会自动将更新传递给业务组件。
         */
        if (pathname === this.__info._pathname) {
            if (!Object(_common__WEBPACK_IMPORTED_MODULE_2__["isParamsOrQuerySame"])(query, this.__info.query)) {
                Object.assign(this.__info.query, query);
            }
            return;
        }
        // console.log('up', asyncKey);
        const newMatchPath = matchRoutePath(pathname, this.__routes);
        if (newMatchPath.length === 0) {
            // eslint-disable-next-line no-console
            console.warn('no route match path:', pathname);
            return;
        }
        const last = newMatchPath[newMatchPath.length - 1];
        const newRouteInfo = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["vm"])({
            _pathname: pathname,
            _routePath: newMatchPath,
            query,
            params: last.params
        });
        let redirect = last.route.redirect;
        if (redirect) {
            if (Object(jinge__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(redirect)) {
                redirect = await redirect(newRouteInfo.params, newRouteInfo.query);
                if (asyncKey !== this.__asyncKey) {
                    return;
                }
            }
            else if (Object(jinge__WEBPACK_IMPORTED_MODULE_0__["isString"])(redirect)) {
                redirect = {
                    name: redirect, params: newRouteInfo.params, query: newRouteInfo.query
                };
            }
            this.go(redirect, {
                replace: true
            });
            return;
        }
        let sameLevel = -1;
        for (let i = 0; i < this.__info._routePath.length; i++) {
            if (i >= newMatchPath.length)
                break;
            const oldIt = this.__info._routePath[i];
            const newIt = newMatchPath[i];
            if (oldIt.route !== newIt.route || !Object(_common__WEBPACK_IMPORTED_MODULE_2__["isParamsOrQuerySame"])(newIt.params, oldIt.params)) {
                break;
            }
            else {
                sameLevel = i;
            }
        }
        if (this.__info._routePath.length === newMatchPath.length && sameLevel === newMatchPath.length - 1) {
            if (!Object(_common__WEBPACK_IMPORTED_MODULE_2__["isParamsOrQuerySame"])(query, this.__info.query)) {
                Object.assign(this.__info.query, query);
            }
            return;
        }
        const viewsToUpdate = [];
        function getViewsToUpdate(views, resetLv, curLv = 0) {
            views.forEach(node => {
                if (curLv >= resetLv) {
                    viewsToUpdate.push({
                        lv: curLv, vn: node
                    });
                }
                else if (node.__views) {
                    getViewsToUpdate(node.__views, resetLv, curLv + 1);
                }
            });
        }
        getViewsToUpdate(this.__views, sameLevel + 1);
        for (let i = 0; i < viewsToUpdate.length; i++) {
            const vtp = viewsToUpdate[i];
            const shouldUpdated = await (vtp.vn.component._shouldUpdateView(this.__info, newRouteInfo));
            // console.log(asyncKey, this.__asyncKey);
            if (asyncKey !== this.__asyncKey) {
                /**
                 * 由于异步等待的过程中，路由有可能会再次发生变化，
                 * 通过闭包变量的方式，保证上下文逻辑响应同一次的路由变化。
                 */
                return;
            }
            if (shouldUpdated === false) {
                /**
                 * 由于浏览器并不能截获 url 变化，只能是在 url 已经变化后响应。
                 * 因此，如果业务层（通过 __routeShouldLeave 回调）阻止了路由的变化，
                 * 则需要恢复浏览器 url 。
                 */
                const _search = Object(_common__WEBPACK_IMPORTED_MODULE_2__["encodeParamsOrQuery"])(this.__info.query);
                const _url = this.__info._pathname + (_search ? '?' + _search : '');
                history.replaceState(null, '', (this.__mode === 'hash' ? '#' : '') + _url);
                return;
            }
            else {
                (_a = vtp.vn.__views) === null || _a === void 0 ? void 0 : _a.clear();
            }
        }
        Object.assign(this.__info, newRouteInfo);
        this.__notify('change');
        viewsToUpdate.forEach(vtp => {
            vtp.vn.component._updateView(newRouteInfo, newMatchPath[vtp.lv], asyncKey).catch(err => this._onErr(err));
        });
    }
    get params() {
        var _a;
        return (_a = this.__info) === null || _a === void 0 ? void 0 : _a.params;
    }
    get query() {
        var _a;
        return (_a = this.__info) === null || _a === void 0 ? void 0 : _a.query;
    }
    get current() {
        return this.__info;
    }
    includes(destination, checkQuery = false) {
        if (!this.__info || this.__info._routePath.length === 0)
            return false;
        if (Object(jinge__WEBPACK_IMPORTED_MODULE_0__["isString"])(destination)) {
            destination = { name: destination };
        }
        const name = destination.name;
        const route = this.__map.get(name);
        if (!route) {
            throw new Error(`target route name "${name}" not found.`);
        }
        if (checkQuery && destination.query && !Object(_common__WEBPACK_IMPORTED_MODULE_2__["isParamsOrQuerySame"])(destination.query, this.__info.query)) {
            return false;
        }
        return this.__info._routePath.findIndex(it => {
            return it.route === route && Object(_common__WEBPACK_IMPORTED_MODULE_2__["isParamsOrQuerySame"])(it.params || {}, destination.params || {});
        }) >= 0;
    }
    _getPathnameAndSearch(destination) {
        if (Object(jinge__WEBPACK_IMPORTED_MODULE_0__["isString"])(destination)) {
            destination = { name: destination };
        }
        const name = destination.name;
        const route = this.__map.get(name);
        if (!route) {
            throw new Error(`target route name "${name}" not found.`);
        }
        const rs = [route];
        let _p = route;
        while ((_p = _p.parent)) {
            rs.unshift(_p);
        }
        return {
            pathname: normPath(this.baseHref + '/' + rs.reduce((pv, it) => {
                return pv + '/' + it.p2r.toPath(destination.params);
            }, '')),
            search: Object.keys(destination.query || {}).map(k => {
                return encodeURIComponent(k) + '=' + encodeURIComponent(destination.query[k]);
            }).join('&')
        };
    }
    href(destination) {
        const { pathname, search } = this._getPathnameAndSearch(destination);
        const path = search ? pathname + '?' + search : pathname;
        return this.__mode === 'hash' ? '#' + path : path;
    }
    go(destination, { target = '_self', replace = false } = {
        target: '_self', replace: false
    }) {
        const { pathname, search } = this._getPathnameAndSearch(destination);
        const path = search ? pathname + '?' + search : pathname;
        const isHashMode = this.__mode === 'hash';
        const url = isHashMode ? (location.pathname + '#' + path) : path;
        if (target === '_blank') {
            window.open(url, '_blank');
            return;
        }
        if (replace) {
            history.replaceState(null, '', url);
        }
        else {
            history.pushState(null, '', url);
        }
        this._update(pathname, destination.query);
    }
}
//# sourceMappingURL=router.js.map

/***/ }),

/***/ "../../jinge-router/node_modules/path-to-regexp/dist.es2015/index.js":
/*!**********************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-router/node_modules/path-to-regexp/dist.es2015/index.js ***!
  \**********************************************************************************************************/
/*! exports provided: parse, compile, tokensToFunction, match, regexpToFunction, tokensToRegexp, pathToRegexp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return compile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokensToFunction", function() { return tokensToFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match", function() { return match; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regexpToFunction", function() { return regexpToFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokensToRegexp", function() { return tokensToRegexp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathToRegexp", function() { return pathToRegexp; });
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
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
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
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
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
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
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
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
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
                modifier: tryConsume("MODIFIER") || ""
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
                modifier: tryConsume("MODIFIER") || ""
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
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
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
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
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
            // tslint:disable-next-line
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
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
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
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
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
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
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

/***/ "./app/components/app.html":
/*!*********************************!*\
  !*** ./app/components/app.html ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge-framework/lib/index.js");
/* harmony import */ var jinge_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-router */ "../../jinge-router/lib/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function(component) {
  const vm_0 = component;
  return [
  ...(() => {
    const attrs = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["attrs"])({
      [jinge__WEBPACK_IMPORTED_MODULE_0__["__"]]: {
        debugName: "attrs_of_<router>",
        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].context,
        slots: {
          'default': function(component) {
        return [
        ...(() => {
          const attrs = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["attrs"])({
            [jinge__WEBPACK_IMPORTED_MODULE_0__["__"]]: {
              debugName: "attrs_of_<router-view>",
              context: component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].context,
            },
          });
          const el = jinge_router__WEBPACK_IMPORTED_MODULE_1__["RouterViewComponent"].create(attrs);
          el.__addStylePid(component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].compStylePid);
          component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].rootNodes.push(el);
          return Object(jinge__WEBPACK_IMPORTED_MODULE_0__["assertRenderResults"])(el.__render());
        })()
        ];
      }
      }
      },
      routes: null,
      router: "hash"
    });
    const fn_0 = () => {
      attrs.routes = vm_0._routes;
    };
    fn_0();
    const el = jinge_router__WEBPACK_IMPORTED_MODULE_1__["RouterComponent"].create(attrs);
    el.__addStylePid(component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].compStylePid);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].rootNodes.push(el);
    return Object(jinge__WEBPACK_IMPORTED_MODULE_0__["assertRenderResults"])(el.__render());
  })(),
  (() => {
    const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
      "footer",
      Object.assign({
        class: "info"
      }, component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].compStylePid),
      Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
        "p",
        "Double-click to edit a todo"
      ),
      Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
        "p",
        "Written by ",
        Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
          "a",
          {
            href: "https://github.com/yuhangge"
          },
          "Yuhang Ge"
        )
      )
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].rootNodes.push(el);
    return el;
  })()
  ];
});

/***/ }),

/***/ "./app/components/app.js":
/*!*******************************!*\
  !*** ./app/components/app.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge-framework/lib/index.js");
/* harmony import */ var _app_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.html */ "./app/components/app.html");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ "./app/routes.js");





class App extends jinge__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  static get template() {
    return _app_html__WEBPACK_IMPORTED_MODULE_1__["default"];
  }
  constructor(args) {
    super(args);
    const __vm_92fb158b76b3 = this[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
    __vm_92fb158b76b3._routes = _routes__WEBPACK_IMPORTED_MODULE_2__["default"];
  }
}



/***/ }),

/***/ "./app/components/footer.html":
/*!************************************!*\
  !*** ./app/components/footer.html ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge-framework/lib/index.js");
/* harmony import */ var jinge_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-router */ "../../jinge-router/lib/index.js");



/* harmony default export */ __webpack_exports__["default"] = (function(component) {
  const vm_0 = component;
  return [
  ...(() => {
    const attrs = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["attrs"])({
      [jinge__WEBPACK_IMPORTED_MODULE_0__["__"]]: {
        debugName: "attrs_of_<if>",
        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].context,
        slots: {
          'default': function(component) {
        return [
        (() => {
          const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
            "footer",
            Object.assign({
              class: "footer"
            }, component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].compStylePid),
            Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
              "span",
              {
                class: "todo-count"
              },
              Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
                "strong",
                (() => {
                  const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createTextNode"])();
                  const fn_0 = () => {
                    Object(jinge__WEBPACK_IMPORTED_MODULE_0__["setText"])(el, function () {
                      let _0;
                      return (_0 = vm_0.todoStore) === null || _0 === void 0 ? void 0 : _0.remaining;
                  }());
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch(["todoStore","remaining"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]]);
                  return el;
                })()
              ),
              (() => {
                const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createTextNode"])();
                const fn_0 = () => {
                  Object(jinge__WEBPACK_IMPORTED_MODULE_0__["setText"])(el, function () {
                    let _0;
                    return (_0 = vm_0.todoStore) === null || _0 === void 0 ? void 0 : _0.remaining;
                }() === 1 ? ' item' : ' items');
                };
                fn_0();
                vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch(["todoStore","remaining"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]]);
                return el;
              })(),
              "\n    left\n  "
            ),
            Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
              "ul",
              {
                class: "filters"
              },
              Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
                "li",
                ...(() => {
                  const attrs = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["attrs"])({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__["__"]]: {
                      debugName: "attrs_of_<router-link>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].context,
                    },
                    to: null,
                    text: "All",
                    active: "selected"
                  });
                  const fn_0 = () => {
                    attrs.to = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["vm"])({
                      name: 'list',
                      params: { status: 'all' }
                  });
                  };
                  fn_0();
                  const el = jinge_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkComponent"].create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].nonRootCompNodes.push(el);
                  return Object(jinge__WEBPACK_IMPORTED_MODULE_0__["assertRenderResults"])(el.__render());
                })()
              ),
              Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
                "li",
                ...(() => {
                  const attrs = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["attrs"])({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__["__"]]: {
                      debugName: "attrs_of_<router-link>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].context,
                    },
                    to: null,
                    text: "Active",
                    active: "selected"
                  });
                  const fn_0 = () => {
                    attrs.to = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["vm"])({
                      name: 'list',
                      params: { status: 'active' }
                  });
                  };
                  fn_0();
                  const el = jinge_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkComponent"].create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].nonRootCompNodes.push(el);
                  return Object(jinge__WEBPACK_IMPORTED_MODULE_0__["assertRenderResults"])(el.__render());
                })()
              ),
              Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
                "li",
                ...(() => {
                  const attrs = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["attrs"])({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__["__"]]: {
                      debugName: "attrs_of_<router-link>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].context,
                    },
                    to: null,
                    text: "Completed",
                    active: "selected"
                  });
                  const fn_0 = () => {
                    attrs.to = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["vm"])({
                      name: 'list',
                      params: { status: 'completed' }
                  });
                  };
                  fn_0();
                  const el = jinge_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkComponent"].create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].nonRootCompNodes.push(el);
                  return Object(jinge__WEBPACK_IMPORTED_MODULE_0__["assertRenderResults"])(el.__render());
                })()
              )
            ),
            ...(() => {
              const attrs = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["attrs"])({
                [jinge__WEBPACK_IMPORTED_MODULE_0__["__"]]: {
                  debugName: "attrs_of_<if>",
                  context: component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].context,
                  slots: {
                    'default': function(component) {
                  return [
                  (() => {
                    const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
                      "button",
                      Object.assign({
                        class: "clear-completed"
                      }, component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].compStylePid),
                      "Clear completed"
                    );
                    Object(jinge__WEBPACK_IMPORTED_MODULE_0__["addEvent"])(el, 'click', function(...args) {vm_0.todoStore.removeDone(...args)})
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].rootNodes.push(el);
                    return el;
                  })()
                  ];
                }
                }
                },
                expect: null
              });
              const fn_0 = () => {
                attrs.expect = function () {
                  let _0;
                  return (_0 = vm_0.todoStore) === null || _0 === void 0 ? void 0 : _0.remaining;
              }() < function () {
                  let _0, _1;
                  return (_1 = (_0 = vm_0.todoStore) === null || _0 === void 0 ? void 0 : _0.allTodos) === null || _1 === void 0 ? void 0 : _1.length;
              }();
              };
              fn_0();
              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch(["todoStore","remaining"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]]);
              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch(["todoStore","allTodos","length"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]]);
              const el = jinge__WEBPACK_IMPORTED_MODULE_0__["IfComponent"].create(attrs);
              component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].nonRootCompNodes.push(el);
              return Object(jinge__WEBPACK_IMPORTED_MODULE_0__["assertRenderResults"])(el.__render());
            })()
          );
          component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].rootNodes.push(el);
          return el;
        })()
        ];
      }
      }
      },
      expect: null
    });
    const fn_0 = () => {
      attrs.expect = function () {
        let _0, _1;
        return (_1 = (_0 = vm_0.todoStore) === null || _0 === void 0 ? void 0 : _0.allTodos) === null || _1 === void 0 ? void 0 : _1.length;
    }() > 0;
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch(["todoStore","allTodos","length"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]]);
    const el = jinge__WEBPACK_IMPORTED_MODULE_0__["IfComponent"].create(attrs);
    el.__addStylePid(component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].compStylePid);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].rootNodes.push(el);
    return Object(jinge__WEBPACK_IMPORTED_MODULE_0__["assertRenderResults"])(el.__render());
  })()
  ];
});

/***/ }),

/***/ "./app/components/footer.js":
/*!**********************************!*\
  !*** ./app/components/footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TodoFooter; });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge-framework/lib/index.js");
/* harmony import */ var _footer_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.html */ "./app/components/footer.html");
/* harmony import */ var _services_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/store */ "./app/services/store.js");






class TodoFooter extends jinge__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  static get template() {
    return _footer_html__WEBPACK_IMPORTED_MODULE_1__["default"];
  }
  constructor(attrs) {
    super(attrs);
    const __vm_92fb158b76b3 = this[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
    __vm_92fb158b76b3.todoStore = _services_store__WEBPACK_IMPORTED_MODULE_2__["default"];
  }
}



/***/ }),

/***/ "./app/components/item.html":
/*!**********************************!*\
  !*** ./app/components/item.html ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge-framework/lib/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
      "li",
      component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].compStylePid,
      Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
        "div",
        {
          class: "view"
        },
        (() => {
          const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
            "input",
            {
              class: "toggle",
              type: "checkbox"
            },
          );
          const fn_0 = () => {
            el.checked = !!(function () {
              let _0;
              return (_0 = vm_0.todo) === null || _0 === void 0 ? void 0 : _0.done;
          }());
          };
          fn_0();
          vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch(["todo","done"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]]);
          Object(jinge__WEBPACK_IMPORTED_MODULE_0__["addEvent"])(el, 'click', function(...args) {vm_0.toggleDone(...args)})
          return el;
        })(),
        (() => {
          const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
            "label",
            (() => {
              const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createTextNode"])();
              const fn_0 = () => {
                Object(jinge__WEBPACK_IMPORTED_MODULE_0__["setText"])(el, function () {
                  let _0;
                  return (_0 = vm_0.todo) === null || _0 === void 0 ? void 0 : _0.title;
              }());
              };
              fn_0();
              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch(["todo","title"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]]);
              return el;
            })()
          );
          Object(jinge__WEBPACK_IMPORTED_MODULE_0__["addEvent"])(el, 'dblclick', function(...args) {vm_0.edit(vm_0.todo)})
          return el;
        })(),
        (() => {
          const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
            "button",
            {
              class: "destroy"
            },
          );
          Object(jinge__WEBPACK_IMPORTED_MODULE_0__["addEvent"])(el, 'click', function(...args) {vm_0.remove(...args)})
          return el;
        })()
      ),
      ...(() => {
        const attrs = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["attrs"])({
          [jinge__WEBPACK_IMPORTED_MODULE_0__["__"]]: {
            debugName: "attrs_of_<if>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].context,
            listeners: {
              "branch-switched": { fn: function(...args) { vm_0.focus(...args) }, opts: null }
          },
            slots: {
              'default': function(component) {
            return [
            (() => {
              const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
                "input",
                Object.assign({
                  class: "edit"
                }, component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].compStylePid),
              );
              const fn_0 = () => {
                el.value = vm_0.editingTitle;
              };
              fn_0();
              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch(["editingTitle"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]]);
              Object(jinge__WEBPACK_IMPORTED_MODULE_0__["addEvent"])(el, 'input', function(...args) {vm_0.editingTitle = args[0].target.value})
              Object(jinge__WEBPACK_IMPORTED_MODULE_0__["addEvent"])(el, 'blur', function(...args) {vm_0.stopEditing(...args)})
              Object(jinge__WEBPACK_IMPORTED_MODULE_0__["addEvent"])(el, 'keyup', function(...args) {if (args[0].keyCode === 13) {vm_0.stopEditing();} else if (args[0].keyCode === 8) {vm_0.cancelEditing();}})
              vm_0.__setRef('edit', el, component)
              component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].rootNodes.push(el);
              return el;
            })()
            ];
          }
          }
          },
          expect: null
        });
        const fn_0 = () => {
          attrs.expect = vm_0.editing;
        };
        fn_0();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch(["editing"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]]);
        const el = jinge__WEBPACK_IMPORTED_MODULE_0__["IfComponent"].create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].nonRootCompNodes.push(el);
        return Object(jinge__WEBPACK_IMPORTED_MODULE_0__["assertRenderResults"])(el.__render());
      })()
    );
    const fn_0 = () => {
      Object(jinge__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(el, "class", function () {
        let _0;
        return (_0 = vm_0.todo) === null || _0 === void 0 ? void 0 : _0.done;
    }() ? 'completed' : '' + ' ' + (vm_0.editing ? 'editing' : ''));
    };
    fn_0();
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch(["todo","done"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]]);
    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch(["editing"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]]);
    vm_0.__setRef('todo', el, component)
    component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].rootNodes.push(el);
    return el;
  })()
  ];
});

/***/ }),

/***/ "./app/components/item.js":
/*!********************************!*\
  !*** ./app/components/item.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TodoItem; });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge-framework/lib/index.js");
/* harmony import */ var _item_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item.html */ "./app/components/item.html");




class TodoItem extends jinge__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  static get template() {
    return _item_html__WEBPACK_IMPORTED_MODULE_1__["default"];
  }
  constructor(attrs) {
    super(attrs);
    const __vm_92fb158b76b3 = this[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
    const fn_1_92fb158b76b3 = () => {
      __vm_92fb158b76b3.todo = attrs.todo;
    };
    fn_1_92fb158b76b3();
    attrs[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('todo', fn_1_92fb158b76b3);
    __vm_92fb158b76b3.editing = false;
    __vm_92fb158b76b3.editingTitle = '';
  }
  cancelEditing() {
		this.editing = false;
	}
	stopEditing() {
		this.editing = false;
    const editingTitle = this.editingTitle.trim();
    if (!editingTitle) {
      this.remove();
    } else {
      this.todo.title = editingTitle;
		  this.__notify('title-changed', this.todo.id);
    }
	}
	edit() {
    this.editing = true;
    this.editingTitle = this.todo.title;
  }
  focus(expect) {
    if (!expect) return;
    this.__getRef('edit').focus();
  }
  toggleDone() {
		this.todo.done = !this.todo.done;
		this.__notify('done-changed', this.todo.id, this.todo.done);
	}
	remove() {
    this.__notify('removed', this.todo.id);
  }
  __afterRender() {
    console.log(`todo ${this.todo.id} has been rendered:`, this.__getRef('todo'));
  }
  __beforeDestroy() {
    console.log(`todo ${this.todo.id} will be destry.`);
  }
}



/***/ }),

/***/ "./app/components/list.html":
/*!**********************************!*\
  !*** ./app/components/list.html ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge-framework/lib/index.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ "./app/components/footer.js");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item */ "./app/components/item.js");




/* harmony default export */ __webpack_exports__["default"] = (function(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
      "section",
      Object.assign({
        class: "todoapp"
      }, component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].compStylePid),
      Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
        "header",
        {
          class: "header"
        },
        Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
          "h1",
          "Todos"
        ),
        (() => {
          const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
            "input",
            {
              class: "new-todo",
              placeholder: "What needs to be done?",
              autofocus: true
            },
          );
          const fn_0 = () => {
            el.value = vm_0.newTodo;
          };
          fn_0();
          vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch(["newTodo"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]]);
          Object(jinge__WEBPACK_IMPORTED_MODULE_0__["addEvent"])(el, 'input', function(...args) {vm_0.newTodo = args[0].target.value})
          Object(jinge__WEBPACK_IMPORTED_MODULE_0__["addEvent"])(el, 'keyup', function(...args) {if (args[0].keyCode === 13) {vm_0.todoStore.add(vm_0.newTodo.trim());vm_0.newTodo = '';}})
          return el;
        })()
      ),
      ...(() => {
        const attrs = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["attrs"])({
          [jinge__WEBPACK_IMPORTED_MODULE_0__["__"]]: {
            debugName: "attrs_of_<if>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].context,
            slots: {
              'default': function(component) {
            return [
            (() => {
              const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
                "section",
                Object.assign({
                  class: "main"
                }, component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].compStylePid),
                (() => {
                  const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
                    "input",
                    {
                      id: "toggle-all",
                      class: "toggle-all",
                      type: "checkbox"
                    },
                  );
                  const fn_0 = () => {
                    el.checked = !!(function () {
                      let _0;
                      return (_0 = vm_0.todoStore) === null || _0 === void 0 ? void 0 : _0.remaining;
                  }() === 0 && function () {
                      let _0, _1;
                      return (_1 = (_0 = vm_0.todoStore) === null || _0 === void 0 ? void 0 : _0.allTodos) === null || _1 === void 0 ? void 0 : _1.length;
                  }() > 0);
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch(["todoStore","remaining"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]]);
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch(["todoStore","allTodos","length"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]]);
                  Object(jinge__WEBPACK_IMPORTED_MODULE_0__["addEvent"])(el, 'click', function(...args) {vm_0.todoStore.toggleAllDone(...args)})
                  return el;
                })(),
                Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
                  "label",
                  {
                    for: "toggle-all"
                  },
                  "Mark all as complete"
                ),
                (() => {
                  const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
                    "ul",
                    {
                      class: "todo-list"
                    },
                    ...(() => {
                      const attrs = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["attrs"])({
                        [jinge__WEBPACK_IMPORTED_MODULE_0__["__"]]: {
                          debugName: "attrs_of_<for>",
                          context: component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].context,
                          slots: {
                            'default': function(component) {
                          const vm_1 = component;
                          return [
                          ...(() => {
                            const attrs = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["attrs"])({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__["__"]]: {
                                debugName: "attrs_of_<TodoItem>",
                                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].context,
                                listeners: {
                                  removed: { fn: function(...args) { vm_0.todoStore.remove(...args) }, opts: null },    "title-changed": { fn: function(...args) { vm_0.todoStore.onTitleChanged(...args) }, opts: null },    "done-changed": { fn: function(...args) { vm_0.todoStore.onDoneChanged(...args) }, opts: null }
                              },
                              },
                              todo: null
                            });
                            const fn_0 = () => {
                              attrs.todo = vm_1.each;
                            };
                            fn_0();
                            vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch(["each"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]]);
                            const el = _item__WEBPACK_IMPORTED_MODULE_2__["default"].create(attrs);
                            el.__addStylePid(component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].compStylePid);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].rootNodes.push(el);
                            return Object(jinge__WEBPACK_IMPORTED_MODULE_0__["assertRenderResults"])(el.__render());
                          })()
                          ];
                        }
                        }
                        },
                        loop: null,
                        key: "each.id"
                      });
                      const fn_0 = () => {
                        attrs.loop = function () {
                          let _0;
                          return (_0 = vm_0.todoStore) === null || _0 === void 0 ? void 0 : _0.todos;
                      }();
                      };
                      fn_0();
                      vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch(["todoStore","todos"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]]);
                      const el = jinge__WEBPACK_IMPORTED_MODULE_0__["ForComponent"].create(attrs);
                      component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].nonRootCompNodes.push(el);
                      return Object(jinge__WEBPACK_IMPORTED_MODULE_0__["assertRenderResults"])(el.__render());
                    })()
                  );
                  vm_0.__setRef('todo-list', el, component)
                  return el;
                })()
              );
              component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].rootNodes.push(el);
              return el;
            })()
            ];
          }
          }
          },
          expect: null
        });
        const fn_0 = () => {
          attrs.expect = function () {
            let _0, _1;
            return (_1 = (_0 = vm_0.todoStore) === null || _0 === void 0 ? void 0 : _0.allTodos) === null || _1 === void 0 ? void 0 : _1.length;
        }() > 0;
        };
        fn_0();
        vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch(["todoStore","allTodos","length"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]]);
        const el = jinge__WEBPACK_IMPORTED_MODULE_0__["IfComponent"].create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].nonRootCompNodes.push(el);
        return Object(jinge__WEBPACK_IMPORTED_MODULE_0__["assertRenderResults"])(el.__render());
      })(),
      ...(() => {
        const attrs = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["attrs"])({
          [jinge__WEBPACK_IMPORTED_MODULE_0__["__"]]: {
            debugName: "attrs_of_<TodoFooter>",
            context: component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].context,
          },
        });
        const el = _footer__WEBPACK_IMPORTED_MODULE_1__["default"].create(attrs);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].nonRootCompNodes.push(el);
        return Object(jinge__WEBPACK_IMPORTED_MODULE_0__["assertRenderResults"])(el.__render());
      })()
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].rootNodes.push(el);
    return el;
  })()
  ];
});

/***/ }),

/***/ "./app/components/list.js":
/*!********************************!*\
  !*** ./app/components/list.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TodoList; });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge-framework/lib/index.js");
/* harmony import */ var _list_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.html */ "./app/components/list.html");
/* harmony import */ var _services_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/store */ "./app/services/store.js");





class TodoList extends jinge__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  static get template() {
    return _list_html__WEBPACK_IMPORTED_MODULE_1__["default"];
  }
  constructor(args) {
    super(args);
    const __vm_92fb158b76b3 = this[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
    __vm_92fb158b76b3.todoStore = _services_store__WEBPACK_IMPORTED_MODULE_2__["default"];
    __vm_92fb158b76b3.newTodo = '';
    if (!args.status || args.status !== 'all' && args.status !== 'active' && args.status !== 'completed') {
      __vm_92fb158b76b3.__getContext('router').go({
        name: 'list',
        params: { status: 'all' }
      }, { replace: true });
    } else {
      _services_store__WEBPACK_IMPORTED_MODULE_2__["default"].updateStatus(args.status);
    }
  }
  __afterRender() {
    const $dom = this.__getRef('todo-list');
    console.log('todo list has been rendered with', $dom ? $dom.children.length : 0, '<li> elements');
  }
  __beforeDestroy() {
    console.log('todo list will be destroy');
  }
}



/***/ }),

/***/ "./app/main.js":
/*!*********************!*\
  !*** ./app/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge-framework/lib/index.js");
/* harmony import */ var _components_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/app */ "./app/components/app.js");




Object(jinge__WEBPACK_IMPORTED_MODULE_0__["bootstrap"])(_components_app__WEBPACK_IMPORTED_MODULE_1__["default"], document.getElementById('root-app'));

/***/ }),

/***/ "./app/models/todo.js":
/*!****************************!*\
  !*** ./app/models/todo.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Todo; });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge-framework/lib/index.js");


class Todo {
  static fromSaved(savedData) {
    return new Todo(savedData.title, savedData.done, savedData.id);
  }
  constructor(title, done = false, id = null) {
    this.id = id || Object(jinge__WEBPACK_IMPORTED_MODULE_0__["uid"])();
    this.title = title;
    this.done = done;
    /*
     * this code is important. we must convert object to ViewModel,
     *   as todo model will be used in view of Component.
     */
    return Object(jinge__WEBPACK_IMPORTED_MODULE_0__["vm"])(this);
  }
}

/***/ }),

/***/ "./app/routes.js":
/*!***********************!*\
  !*** ./app/routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/list */ "./app/components/list.js");


/* harmony default export */ __webpack_exports__["default"] = ([{
  name: 'list',
  path: '/:status',
  component: _components_list__WEBPACK_IMPORTED_MODULE_0__["default"],
  resolves: {
    status(params) {
      return params.status;
    }
  }
}, {
  path: '/(.*)',
  redirect: {
    name: 'list',
    params: {
      status: 'all'
    }
  }
}]);

/***/ }),

/***/ "./app/services/store.js":
/*!*******************************!*\
  !*** ./app/services/store.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge-framework/lib/index.js");
/* harmony import */ var _models_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/todo */ "./app/models/todo.js");



const STORAGE_KEY = 'jinge-todo-mvc-saved-todos';

class TodoStore {
  constructor() {
    this.allTodos = this._load();
    this.todos = this.allTodos.slice();
    this.remaining = this._calcRemaining();
    this._status = '';
    /*
     * this code is important. we must convert object to ViewModel,
     *   as todo store will be linked to public property of Component.
     */
    return Object(jinge__WEBPACK_IMPORTED_MODULE_0__["vm"])(this);
  }
  _findById(id) {
    const idx = this._findIndexById(id);
    return idx >= 0 ? this.allTodos[idx] : null;
  }
  _findIndexById(id) {
    return this.allTodos.findIndex(t => t.id === id);
  }
  _calcRemaining() {
    return this.allTodos.reduce((p, c) => p + (c.done ? 0 : 1), 0);
  }
  _load() {
    if (!window.localStorage) return [];
    const data = window.localStorage.getItem(STORAGE_KEY);
    if (!data) return [];
    try {
      const todos = JSON.parse(data);
      return Array.isArray(todos) ? todos.map(_models_todo__WEBPACK_IMPORTED_MODULE_1__["default"].fromSaved) : [];
    } catch {
      return [];
    }
  }
  _save() {
    if (!window.localStorage) return;
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(this.allTodos)
    );
  }
  _filter() {
    if (this.allTodos.length === 0) return;
    if (!this._status || this._status === 'all') {
      this.todos = this.allTodos.slice();
    } else {
      this.todos = this.allTodos.filter(t => t.done === (this._status === 'completed'));
    }
  }
  updateStatus(status) {
    if (this._status === status) return;
    this._status = status;
    this._filter();
  }
  toggleAllDone() {
    if (this.allTodos.length === 0) return;
    this.remaining = this.remaining > 0 ? 0 : this.allTodos.length;
    this.allTodos.forEach(t => t.done = this.remaining === 0);
    this._filter();
    this._save();
  }
  toggleDone(todo) {
    todo.done = !todo.done;
    this.remaining += todo.done ? -1 : 1;
    this._filter();
    this._save();
  }
  removeDone() {
    this.allTodos = this.allTodos.filter(t => !t.done);
    this._filter();
    this._save();
  }
  add(title) {
    const todo = new _models_todo__WEBPACK_IMPORTED_MODULE_1__["default"](title);
    this.allTodos.push(todo);
    this.remaining++;
    this._filter();
    this._save();
  }
  remove(id) {
    let idx = this._findIndexById(id);
    if (idx < 0) return;
    const todo = this.allTodos.splice(idx, 1)[0];
    if (!todo.done) {
      this.remaining--;
    }
    this._filter();
    this._save();
  }
  onTitleChanged(id) {
    console.log('Message "title-changed" passed from TodoItem with argument:', id);
    this._save();
  }
  onDoneChanged(id, isDone) {
    console.log('Message "done-changed" passed from TodoItem with arguments:', id, ',', isDone);
    this.remaining += isDone ? -1 : 1;
    this._filter();
    this._save();
  }
}

// singleton
/* harmony default export */ __webpack_exports__["default"] = (new TodoStore());


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map