/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F": () => (/* binding */ Printer)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/jinge@3.2.2_jinge-compiler@3.2.2/node_modules/jinge/lib/index.js + 28 modules
var lib = __webpack_require__(116);
// EXTERNAL MODULE: ./translate/dict/fee9s7.js
var fee9s7 = __webpack_require__(936);
;// CONCATENATED MODULE: ./src/components/printer.c.html



/* harmony default export */ function printer_c(component) {
  const vm_0 = component;
  return [
  ...(() => {
    const attrs = (0,lib/* attrs */.Qb)({
      [lib.__]: {
        context: component[lib.__].context,
        slots: {
          'default': function(component) {
            return [
            (() => {
              const el = (0,lib/* createElementWithoutAttrs */.Eh)(
                "p",
                (() => {
                  const el = (0,lib/* createTextNode */.Eg)();
                  const fn_0 = () => {
                    (0,lib/* setText */.Hd)(el, vm_0.message);
                  };
                  fn_0();
                  vm_0[lib.$$].__watch(["message"], fn_0, component[lib.$$]);
                  return el;
                })()
              );
              component[lib.__].rootNodes.push(el);
              return el;
            })()
            ];
          },
          'else': function(component) {
            return [
            (() => {
              const el = (0,lib/* createElementWithoutAttrs */.Eh)(
                "p",
                ...(() => {
                  const attrs = (0,lib/* attrs */.Qb)({
                    [lib.__]: {
                      context: component[lib.__].context,
                    },
                  });
                  const el = fee9s7/* Tfee9s7_ZHCN_EN.create */.xd.create(attrs);
                  component[lib.__].nonRootCompNodes.push(el);
                  return (0,lib/* assertRenderResults */.KO)(el.__render());
                })()
              );
              component[lib.__].rootNodes.push(el);
              return el;
            })()
            ];
          }
        }
      },
      expect: undefined
    });
    const fn_0 = () => {
      attrs.expect = vm_0.message;
    };
    fn_0();
    vm_0[lib.$$].__watch(["message"], fn_0, component[lib.$$]);
    const el = lib/* IfComponent.create */.uj.create(attrs);
    component[lib.__].rootNodes.push(el);
    return (0,lib/* assertRenderResults */.KO)(el.__render());
  })()
  ];
}
;// CONCATENATED MODULE: ./src/components/printer.c.js



class Printer extends lib/* Component */.wA {
  static template = printer_c;
  constructor(attrs) {
    super(attrs);const _jg0 = this[lib.$$].proxy;const f1_jg0402 = () => {
    _jg0.message = attrs.message; }; f1_jg0402(); attrs[lib.$$].__watch("message", f1_jg0402);
  }

  get message() {
    return this._m;
  }

  set message(v) {
    this._m = v;
  }

  __afterRender() {
    console.log('ar');
  }

  __beforeDestroy() {
    console.log('bd');
  }
}

/***/ }),

/***/ 37:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "D7": () => (/* reexport */ AComponent),
  "h$": () => (/* reexport */ TComponent),
  "Kd": () => (/* reexport */ service_getLocale),
  "i_": () => (/* reexport */ setLocale)
});

// UNUSED EXPORTS: RComponent, SwitchLocaleComponent, cw, t, unwatch, w, watch, watchForComponent

;// CONCATENATED MODULE: ./node_modules/.pnpm/jinge-i18n@1.0.0_jinge@3.2.2/node_modules/jinge-i18n/lib/core/service.js
let currentLocale = window.I18N_DEFAULT_LOCALE || void 0;
const listeners = /* @__PURE__ */ new Set();
function service_getLocale() {
  return currentLocale;
}
function setLocale(locale) {
  if (currentLocale === locale)
    return;
  currentLocale = locale;
  listeners.forEach((fn) => fn(currentLocale));
}
function watch(fn, immediate = false) {
  if (immediate && currentLocale)
    fn(currentLocale);
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}
function unwatch(fn) {
  listeners.delete(fn);
}
function service_watchForComponent(component, fn, immediate = false) {
  component.__addDeregisterFn(watch(fn, immediate));
}
const w = (/* unused pure expression or super */ null && (watch));
const cw = (/* unused pure expression or super */ null && (service_watchForComponent));
function t(fn, ctx) {
  return fn(currentLocale)(ctx);
}


//# sourceMappingURL=service.js.map
// EXTERNAL MODULE: ./node_modules/.pnpm/jinge@3.2.2_jinge-compiler@3.2.2/node_modules/jinge/lib/index.js + 28 modules
var lib = __webpack_require__(116);
;// CONCATENATED MODULE: ./node_modules/.pnpm/jinge-i18n@1.0.0_jinge@3.2.2/node_modules/jinge-i18n/lib/components/text.js
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};
var _t, t_fn;


class TComponent extends lib/* Component */.wA {
  constructor(attrs) {
    super(attrs);const _jg0 = this[lib.$$].proxy;
    __privateAdd(_jg0, _t);
    attrs[lib.$$].__watch("**", () => {
      _jg0.__updateIfNeed();
    });
    service_watchForComponent(_jg0, () => {
      _jg0.__updateIfNeed();
    });
  }
  __render() {
    return [(0,lib/* textRenderFn */.xc)(this, __privateMethod(this, _t, t_fn).call(this))];
  }
  __update() {
    (0,lib/* setText */.Hd)(this[lib.__].rootNodes[0], __privateMethod(this, _t, t_fn).call(this));
  }
}
_t = new WeakSet();
t_fn = function() {
  return this.constructor.d(service_getLocale())(this[lib.__].passedAttrs);
};
class RComponent extends (/* unused pure expression or super */ null && (Component)) {
  constructor(attrs) {
    super(attrs);const _jg0 = this[$$_jg0402].proxy;
    _jg0.attrs = attrs;
    attrs[$$].__watch("**", () => {
      _jg0.__updateIfNeed();
    });
    watchForComponent(_jg0, () => {
      _jg0.__updateIfNeed();
    });
  }
  __render() {
    const renderFn = this.constructor.d(getLocale());
    return renderFn(this);
  }
  __update() {
    const $ld = this.__lastDOM;
    const $pa = $ld.parentNode;
    const $ns = $ld.nextSibling;
    this.__handleBeforeDestroy(true);
    this[__].rootNodes.length = 0;
    const renderFn = this.constructor.d(getLocale());
    const els = renderFn(this);
    const $newEl = els.length > 1 ? createFragment(els) : els[0];
    if ($ns) {
      $pa.insertBefore($ns, $newEl);
    } else {
      $pa.appendChild($newEl);
    }
    this[__].rootNodes.forEach((n) => {
      if (isComponent(n))
        n.__handleAfterRender();
    });
  }
  __beforeDestroy() {
    this.attrs = null;
  }
}
class AComponent extends lib/* Component */.wA {
  constructor(attrs) {
    super(attrs);const _jg0 = this[lib.$$].proxy;
    attrs[lib.$$].__watch("**", () => {
      _jg0.__updateIfNeed();
    });
    service_watchForComponent(_jg0, () => {
      _jg0.__updateIfNeed();
    });
    _jg0.c = (0,lib.vm)(_jg0.constructor.d.map((fn) => fn(service_getLocale())(attrs)));
  }
  __update() {
    this.constructor.d.forEach((fn, i) => {
      const v = fn(service_getLocale())(this[lib.__].passedAttrs);
      this.c[i] = v;
    });
  }
}


//# sourceMappingURL=text.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/jinge-i18n@1.0.0_jinge@3.2.2/node_modules/jinge-i18n/lib/components/switch.js


function createEl(component) {
  const locale = getLocale();
  const renderFn = component[__].slots[locale];
  if (!renderFn) {
    return createElementWithoutAttrs("span", `missing ${locale} content`);
  }
  const attrs = wrapAttrs({
    [__]: {
      context: component[__].context,
      slots: {
        default: renderFn
      }
    }
  });
  return Component.create(attrs);
}
class SwitchLocaleComponent extends (/* unused pure expression or super */ null && (Component)) {
  constructor(attrs) {
    super(attrs);const _jg0 = this[$$_jg0402].proxy;
    watchForComponent(_jg0, () => {
      _jg0.__updateIfNeed();
    });
  }
  __render() {
    const el = createEl(this);
    const roots = this[__].rootNodes;
    roots.push(el);
    return isComponent(el) ? el.__render() : roots;
  }
  __update() {
    const roots = this[__].rootNodes;
    const el = roots[0];
    const fd = isComponent(el) ? el.__firstDOM : el;
    const pa = fd.parentNode;
    const newEl = createEl(this);
    roots[0] = newEl;
    if (isComponent(newEl)) {
      const nels = newEl.__render();
      pa.insertBefore(nels.length > 1 ? createFragment(nels) : nels[0], fd);
    } else {
      pa.insertBefore(newEl, fd);
    }
    if (isComponent(el)) {
      el.__destroy();
    } else {
      pa.removeChild(el);
    }
    if (isComponent(newEl)) {
      newEl.__handleAfterRender();
    }
  }
}


//# sourceMappingURL=switch.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/jinge-i18n@1.0.0_jinge@3.2.2/node_modules/jinge-i18n/lib/index.js




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$$": () => (/* reexport */ common_$$),
  "wA": () => (/* reexport */ component_Component),
  "YQ": () => (/* reexport */ ForComponent),
  "uj": () => (/* reexport */ IfComponent),
  "gU": () => (/* reexport */ ParameterComponent),
  "__": () => (/* reexport */ component_),
  "vP": () => (/* reexport */ dom_addEvent),
  "Om": () => (/* reexport */ arrayPushIfNotExist),
  "Ab": () => (/* reexport */ arrayRemove),
  "KO": () => (/* reexport */ assertRenderResults),
  "Qb": () => (/* reexport */ component_wrapAttrs),
  "Ux": () => (/* reexport */ bootstrap),
  "az": () => (/* reexport */ dom_createElement),
  "Eh": () => (/* reexport */ createElementWithoutAttrs),
  "xJ": () => (/* reexport */ dom_createFragment),
  "Eg": () => (/* reexport */ createTextNode),
  "qO": () => (/* reexport */ render_fns_emptyRenderFn),
  "pE": () => (/* reexport */ isComponent),
  "mf": () => (/* reexport */ isFunction),
  "Kn": () => (/* reexport */ isObject),
  "HD": () => (/* reexport */ type_isString),
  "o8": () => (/* reexport */ isUndefined),
  "KS": () => (/* reexport */ registerEvent),
  "xC": () => (/* reexport */ dom_removeEvent),
  "P$": () => (/* reexport */ dom_setAttribute),
  "VT": () => (/* reexport */ setClassAttribute),
  "V7": () => (/* reexport */ setStyleAttribute),
  "Hd": () => (/* reexport */ setText),
  "xc": () => (/* reexport */ textRenderFn),
  "UC": () => (/* reexport */ unwatch),
  "vm": () => (/* reexport */ vm),
  "ZK": () => (/* reexport */ warn),
  "YP": () => (/* reexport */ watch)
});

// UNUSED EXPORTS: BindHtmlComponent, ComponentStates, ContextStates, DynamicRenderComponent, ForEachComponent, HideComponent, LogComponent, MESSENGER_LISTENERS, Messenger, SwitchComponent, ToggleClassComponent, TransitionStates, ViewModelCoreImpl, addParent, appendChildren, arrayEqual, class2str, clearImmediate, createAttributes, createComponent, createElementWithChild, createSVGElement, createSVGElementWithoutAttrs, createViewModel, deleteNode, disableWarning, errorRenderFn, getDuration, getDurationType, getPropertyName, handleCancel, handleOnce, initStyle, insertAfter, isArray, isBoolean, isInnerObj, isNumber, isPromise, isPublicProperty, isViewModel, loopClearNode, loopCreateNode, loopGetNode, loopHandle, loopNotify, parsePropertyPath, removeAttribute, removeParent, replaceChildren, setImmediate, shiftParent, style2str, typeOf, uid

;// CONCATENATED MODULE: ./node_modules/.pnpm/jinge@3.2.2_jinge-compiler@3.2.2/node_modules/jinge/lib/util/type.js
function typeOf(v) {
  return typeof v;
}
function isObject(v) {
  return v !== null && typeOf(v) === "object";
}
function type_isString(v) {
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/jinge@3.2.2_jinge-compiler@3.2.2/node_modules/jinge/lib/util/array.js
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/jinge@3.2.2_jinge-compiler@3.2.2/node_modules/jinge/lib/util/common.js
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/jinge@3.2.2_jinge-compiler@3.2.2/node_modules/jinge/lib/util/setimm.js

let autoIncrement = 0;
let nextHandle = 1;
let tasksByHandle;
let currentlyRunningATask = false;
let registerImmediate;
function setImmediateFallback(callback) {
  if (!isFunction(callback) || arguments.length > 1) {
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
if (isUndefined(win.setImmediate)) {
  tasksByHandle = /* @__PURE__ */ new Map();
  const messagePrefix = "setImmediate$" + (autoIncrement++).toString(32) + "$";
  win.addEventListener(
    "message",
    (event) => {
      if (event.source === window && type_isString(event.data) && event.data.startsWith(messagePrefix)) {
        runIfPresent(Number(event.data.slice(messagePrefix.length)));
      }
    },
    false
  );
  registerImmediate = function(handle) {
    win.postMessage(messagePrefix + handle, "*");
  };
}
const setimm_setImmediate = win.setImmediate || setImmediateFallback;
const clearImmediate = win.clearImmediate || clearImmediateFallback;


//# sourceMappingURL=setimm.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/jinge@3.2.2_jinge-compiler@3.2.2/node_modules/jinge/lib/util/dom.js

function setText($element, text) {
  if (isObject(text)) {
    text = JSON.stringify(text);
  }
  $element.textContent = text;
}
function createTextNode(text = "") {
  return document.createTextNode(isObject(text) ? JSON.stringify(text) : text);
}
function dom_createFragment(children) {
  const f = document.createDocumentFragment();
  children?.forEach((n) => {
    f.appendChild(type_isString(n) ? document.createTextNode(n) : n);
  });
  return f;
}
function appendChildren($parent, children) {
  $parent.appendChild(
    children.length > 1 ? dom_createFragment(children) : type_isString(children[0]) ? createTextNode(children[0]) : children[0]
  );
}
function replaceChildren($parent, children, oldNode) {
  $parent.replaceChild(dom_createFragment(children), oldNode);
}
function removeAttribute($ele, attrName) {
  if (!attrName)
    return;
  if (isObject(attrName)) {
    for (const attrN in attrName) {
      removeAttribute($ele, attrN);
    }
    return;
  }
  return $ele.removeAttribute(attrName);
}
function dom_setAttribute($ele, attrName, attrValue) {
  if (!attrName)
    return;
  if (isObject(attrName)) {
    for (const attrN in attrName) {
      dom_setAttribute($ele, attrN, attrName[attrN]);
    }
    return;
  }
  if (isUndefined(attrValue) || attrValue === null) {
    removeAttribute($ele, attrName);
  } else {
    $ele.setAttribute(attrName, attrValue);
  }
}
function _createEl($el, attrs, children) {
  if (attrs) {
    for (const an in attrs) {
      if (an && !isUndefined(attrs[an])) {
        dom_setAttribute($el, an, attrs[an]);
      }
    }
  }
  children.length > 0 && appendChildren($el, children);
  return $el;
}
function dom_createElement(tag, attrs, ...children) {
  return _createEl(document.createElement(tag), attrs, children);
}
function createElementWithoutAttrs(tag, ...children) {
  return dom_createElement(tag, null, ...children);
}
function createSVGElement(tag, attrs, ...children) {
  return _createEl(document.createElementNS("http://www.w3.org/2000/svg", tag), attrs, children);
}
function createSVGElementWithoutAttrs(tag, ...children) {
  return createSVGElement(tag, null, ...children);
}
function createElementWithChild(tag, attrs, child) {
  const $e = dom_createElement(tag, attrs);
  $e.appendChild(isString(child) ? createTextNode(child) : child);
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
function dom_addEvent($element, eventName, handler, capture) {
  isUndefined(capture) && (capture = eventName.startsWith("touch") ? {
    capture: false,
    passive: true
  } : false);
  $element.addEventListener(eventName, handler, capture);
}
function dom_removeEvent($element, eventName, handler) {
  $element.removeEventListener(eventName, handler);
}
function registerEvent($element, eventName, handler, capture) {
  dom_addEvent($element, eventName, handler, capture);
  return function deregister() {
    dom_removeEvent($element, eventName, handler);
  };
}
function class2str(className) {
  if (!className)
    return className;
  if (type_isString(className)) {
    return className.trim();
  }
  if (isArray(className)) {
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
  if (type_isString(style))
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
    if (isNumber(v) && !UNITLESS.has(k)) {
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/jinge@3.2.2_jinge-compiler@3.2.2/node_modules/jinge/lib/util/index.js






//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/jinge@3.2.2_jinge-compiler@3.2.2/node_modules/jinge/lib/vm/common.js

const common_$$ = Symbol("$$");
function isInnerObj(v) {
  const clazz = v.constructor;
  return clazz === RegExp || clazz === Date || clazz === Boolean;
}
function isViewModel(v) {
  return isObject(v) && common_$$ in v;
}
function isPublicProperty(v) {
  return type_isString(v) && v.charCodeAt(0) !== 95;
}
function getPropertyName(v) {
  if (type_isString(v)) {
    return v;
  }
  if (v === null) {
    return "null";
  }
  if (isUndefined(v)) {
    return "undefined";
  }
  return v.toString();
}
function parsePropertyPath(propertyPath) {
  return type_isString(propertyPath) ? propertyPath.indexOf(".") > 0 ? propertyPath.split(".") : [propertyPath] : isArray(propertyPath) ? propertyPath : [propertyPath];
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/jinge@3.2.2_jinge-compiler@3.2.2/node_modules/jinge/lib/vm/notify.js


const handleTasks = /* @__PURE__ */ new Map();
function handleCancel(handler) {
  const t = handleTasks.get(handler);
  if (t) {
    clearImmediate(t.immediate);
    handleTasks.delete(handler);
  }
}
function handleOnce(handler, propertyPath) {
  if (handleTasks.has(handler)) {
    return;
  }
  const imm = setimm_setImmediate(() => {
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
  const propertyName = getPropertyName(propertyPath[level]);
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/jinge@3.2.2_jinge-compiler@3.2.2/node_modules/jinge/lib/vm/node.js


function loopCreateNode(parentNode, propertyPath, level = 0) {
  const propertyName = getPropertyName(propertyPath[level]);
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
  const propertyName = getPropertyName(propertyPath[level]);
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
    handlers.forEach(handleCancel);
    node.__handlers = null;
  }
  node.__parent = null;
}


//# sourceMappingURL=node.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/jinge@3.2.2_jinge-compiler@3.2.2/node_modules/jinge/lib/vm/core.js




class ViewModelCoreImpl {
  constructor(target) {
    this.__notifiable = true;
    this.__parents = null;
    this.__listeners = null;
    this.__related = null;
    this.__setters = null;
    this.target = target;
    this.proxy = null;
    Object.defineProperty(target, common_$$, {
      value: this,
      writable: false,
      configurable: true,
      enumerable: false
    });
  }
  __watch(propertyPath, handler, related) {
    propertyPath = parsePropertyPath(propertyPath);
    const dbStarIdx = propertyPath.indexOf("**");
    if (dbStarIdx >= 0 && dbStarIdx !== propertyPath.length - 1) {
      throw new Error('wizard "**" must be last element in path.');
    }
    const node = loopCreateNode(this, propertyPath);
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
      loopClearNode(this);
      return;
    }
    const node = loopGetNode(this, parsePropertyPath(propertyPath));
    if (!node) {
      return;
    }
    const handlers = node.__handlers;
    if (!handlers) {
      return;
    }
    if (!handler) {
      handlers.forEach(handleCancel);
      handlers.length = 0;
    } else {
      handleCancel(handler);
      arrayRemove(handlers, handler);
    }
    deleteNode(node);
    if (related && related !== this) {
      related.__rmRelated(this, propertyPath, handler);
    }
  }
  __notify(propertyPath, immediate = false) {
    if (!this.__notifiable) {
      return;
    }
    propertyPath = parsePropertyPath(propertyPath);
    if (this.__listeners) {
      loopNotify(this, propertyPath, immediate);
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
    loopClearNode(this);
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
        if (!isObject(v) || !(common_$$ in v)) {
          return;
        }
        removeParent(v[common_$$], this, prop);
      });
      this.__setters = null;
    }
    Object.getOwnPropertyNames(target).forEach((prop) => {
      const v = target[prop];
      if (!isObject(v) || !(common_$$ in v)) {
        return;
      }
      removeParent(v[common_$$], this, prop);
    });
    delete target[common_$$];
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
    const isPropArray = isArray(propertyPath);
    const i = hook.findIndex((it) => {
      return handler === it.handler && (isPropArray ? arrayEqual(propertyPath, it.prop) : propertyPath === it.prop);
    });
    if (i >= 0) {
      hook.splice(i, 1);
    }
  }
}


//# sourceMappingURL=core.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/jinge@3.2.2_jinge-compiler@3.2.2/node_modules/jinge/lib/vm/proxy.js



function getSetterFnIfPropIsSetter(obj, prop) {
  let map = obj[common_$$].__setters;
  if (!map) {
    obj[common_$$].__setters = map = /* @__PURE__ */ new Map();
  }
  if (!map.has(prop)) {
    let clazz = obj.constructor;
    let desc = Object.getOwnPropertyDescriptor(clazz.prototype, prop);
    let fn;
    if (desc) {
      fn = isFunction(desc.set) ? desc.set : null;
      map.set(prop, fn);
      return fn;
    }
    clazz = Object.getPrototypeOf(clazz);
    while (clazz?.prototype) {
      desc = Object.getOwnPropertyDescriptor(clazz.prototype, prop);
      if (desc) {
        fn = isFunction(desc.set) ? desc.set : null;
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
  vm2[common_$$].__notify(prop);
}
function __propSetHandler(target, prop, value, setFn, assertVM = true) {
  if (!isPublicProperty(prop)) {
    target[prop] = value;
    return true;
  }
  const oldVal = target[prop];
  if (oldVal === value && !isUndefined(value)) {
    return true;
  }
  let newValIsVM = isObject(value) && !isInnerObj(value);
  if (newValIsVM) {
    newValIsVM = common_$$ in value;
    if (assertVM && !newValIsVM) {
      throw new Error(`public property "${prop.toString()}" of ViewModel must also be ViewModel`);
    }
  }
  if (isObject(oldVal) && common_$$ in oldVal) {
    removeParent(oldVal[common_$$], target[common_$$], prop);
  }
  setFn(target, prop, value);
  if (newValIsVM) {
    addParent(value[common_$$], target[common_$$], prop);
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
    setterFn.call(target[common_$$].proxy, value);
  } else {
    target[prop] = value;
  }
}
function objectPropSetHandler(target, prop, value) {
  if (!(common_$$ in target)) {
    return true;
  }
  return __propSetHandler(target, prop, value, __objectPropSetFn);
}
function attrsPropSetHandler(target, prop, value) {
  if (!(common_$$ in target)) {
    return true;
  }
  return __propSetHandler(target, prop, value, __objectPropSetFn, false);
}
function componentPropSetHandler(target, prop, value) {
  if (!(common_$$ in target)) {
    warn(
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
  if (!isNumber(value)) {
    throw new Error("bad argument. array length must be validate number.");
  }
  const oldLen = target.length;
  if (oldLen > value) {
    for (let i = value; i < oldLen; i++) {
      const v = target[i];
      if (isViewModel(v)) {
        removeParent(v[common_$$], target[common_$$], i);
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
  if (!(common_$$ in target)) {
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
    if (isViewModel(it)) {
      addParent(it[common_$$], target[common_$$], i);
    }
  });
  fn();
  target.forEach((it, i) => {
    if (isViewModel(it)) {
      removeParent(it[common_$$], target[common_$$], i);
    }
  });
  arrayNotifyItems(target, 0, target.length);
  return target[common_$$].proxy;
}
function wrapSubArray(arr, wrapEachItem = false) {
  const rtn = wrapProxy(arr, true);
  arr.forEach((it, i) => {
    if (isViewModel(it)) {
      addParent(it[common_$$], arr[common_$$], i);
    } else if (wrapEachItem) {
      arr[i] = createViewModel(it);
    }
  });
  return rtn;
}
function _arrayShiftOrUnshiftProp(arr, delta) {
  arr.forEach((el, i) => {
    if (!isViewModel(el))
      return;
    shiftParent(el[common_$$], arr[common_$$], i, delta);
  });
}
function _argAssert(arg, fn) {
  if (isObject(arg)) {
    if (!(common_$$ in arg)) {
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
        addParent(arg[common_$$], target[common_$$], idx + i);
      }
    });
    for (let i = 0; i < delCount; i++) {
      if (idx + i >= target.length)
        break;
      const el = target[idx + i];
      if (isViewModel(el)) {
        removeParent(el[common_$$], target[common_$$], idx + i);
      }
    }
    const delta = args.length - delCount;
    if (delta !== 0) {
      for (let i = idx + delCount; i < target.length; i++) {
        const el = target[i];
        if (!isViewModel(el)) {
          continue;
        }
        shiftParent(el[common_$$], target[common_$$], i, delta);
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
    if (isViewModel(el)) {
      removeParent(el[common_$$], target[common_$$], -1);
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
        addParent(arg[common_$$], target[common_$$], i);
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
    if (isViewModel(el)) {
      removeParent(el[common_$$], target[common_$$], target.length);
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
        addParent(arg[common_$$], target[common_$$], target.length + i);
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
      if (it === v && !isUndefined(it)) {
        return;
      }
      if (isViewModel(it)) {
        removeParent(it[common_$$], target[common_$$], i);
      }
      target[i] = v;
      if (isViewModel(v)) {
        addParent(v[common_$$], target[common_$$], i);
      }
      notifyPropChanged(target, i);
    });
    return target[common_$$].proxy;
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
  const vmCore = new ViewModelCoreImpl(target);
  return vmCore.proxy = new Proxy(
    target,
    isArr ? ArrayProxyHandler : isPromise(target) ? PromiseProxyHandler : ObjectProxyHandler
  );
}
function wrapProp(parent, child, property) {
  if (!isObject(child) || isInnerObj(child)) {
    return;
  }
  if (!(common_$$ in child)) {
    parent[property] = child = createViewModel(child);
  }
  addParent(child[common_$$], parent[common_$$], property);
}
function createViewModel(target) {
  if (isObject(target)) {
    if (isInnerObj(target) || common_$$ in target) {
      return target;
    }
    const isArr = isArray(target);
    const rtn = wrapProxy(target, isArr);
    if (isArr) {
      for (let i = 0; i < target.length; i++) {
        wrapProp(target, target[i], i);
      }
    } else {
      for (const k in target) {
        if (isPublicProperty(k)) {
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
  const vmCore = new ViewModelCoreImpl(attributes);
  vmCore.__notifiable = false;
  return vmCore.proxy = new Proxy(attributes, {
    set: attrsPropSetHandler
  });
}
function createComponent(component) {
  if (common_$$ in component) {
    throw new Error("component has alreay been wrapped.");
  }
  const vmCore = new ViewModelCoreImpl(component);
  vmCore.__notifiable = false;
  return vmCore.proxy = new Proxy(component, {
    set: componentPropSetHandler
  });
}
function vm(target) {
  if (!isObject(target)) {
    throw new Error("vm() target must be object or array.");
  }
  return createViewModel(target);
}
function watch(vm2, propertyPath, handler) {
  vm2[common_$$].__watch(propertyPath, handler);
}
function unwatch(vm2, propertyPath, handler) {
  vm2[common_$$].__unwatch(propertyPath, handler);
}


//# sourceMappingURL=proxy.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/jinge@3.2.2_jinge-compiler@3.2.2/node_modules/jinge/lib/core/messenger.js
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/jinge@3.2.2_jinge-compiler@3.2.2/node_modules/jinge/lib/core/style.js

const CSS = ".jg-hide{display:none!important}.jg-hide.jg-hide-enter,.jg-hide.jg-hide-leave{display:block!important}";
let inited = false;
function initStyle() {
  if (inited)
    return;
  inited = true;
  const $style = dom_createElement("style", {
    type: "text/css"
  });
  if ($style.styleSheet)
    $style.styleSheet.cssText = CSS;
  else
    $style.textContent = CSS;
  document.head.appendChild($style);
}


//# sourceMappingURL=style.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/jinge@3.2.2_jinge-compiler@3.2.2/node_modules/jinge/lib/core/component.js
var _a;





initStyle();
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
const component_ = Symbol("__");
function isComponent(v) {
  return component_ in v;
}
function assertRenderResults(renderResults) {
  if (!isArray(renderResults) || renderResults.length === 0) {
    throw new Error("Render results of component is empty");
  }
  return renderResults;
}
function component_wrapAttrs(target) {
  if (!isObject(target) || isArray(target)) {
    throw new Error("attrs() traget must be plain object.");
  }
  return createAttributes(target);
}
class component_Component extends Messenger {
  constructor(attrs) {
    if (!isObject(attrs) || !(common_$$ in attrs)) {
      throw new Error("Attributes passed to Component constructor must be ViewModel. See https://[todo]");
    }
    const compilerAttrs = attrs[component_] || {};
    super(compilerAttrs.listeners);
    createComponent(this);
    this[component_] = {
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
    const $proxy = this[common_$$].proxy;
    ["class", "style"].forEach((attrN) => {
      if (!(attrN in attrs))
        return;
      const f = () => $proxy[attrN] = attrs[attrN];
      f();
      attrs[common_$$].__watch(attrN, f);
    });
  }
  static create(attrs) {
    const isObj = isObject(attrs);
    const vmAttrs = isObj && common_$$ in attrs ? attrs : component_wrapAttrs(isObj ? attrs : {});
    return new this(vmAttrs)[common_$$].proxy;
  }
  __addDeregisterFn(deregisterFn) {
    let deregs = this[component_].deregFns;
    if (!deregs) {
      this[component_].deregFns = deregs = /* @__PURE__ */ new Set();
    }
    deregs.add(deregisterFn);
  }
  __domAddListener($el, eventName, listener, capture) {
    const deregEvtFn = registerEvent(
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
      this[component_].deregFns.delete(deregEvtFn);
    };
  }
  __domPassListeners(ignoredEventNames, targetEl) {
    if (this[component_].state !== 1 /* RENDERED */) {
      throw new Error("domPassListeners must be applied to component which is rendered.");
    }
    const lis = this[MESSENGER_LISTENERS];
    if (!lis || lis.size === 0) {
      return;
    }
    if (ignoredEventNames && !isArray(ignoredEventNames)) {
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
        const deregFn = registerEvent(
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
  get __transitionDOM() {
    const el = this[component_].rootNodes[0];
    return isComponent(el) ? el.__transitionDOM : el;
  }
  get __firstDOM() {
    const el = this[component_].rootNodes[0];
    return isComponent(el) ? el.__firstDOM : el;
  }
  get __lastDOM() {
    const rns = this[component_].rootNodes;
    const el = rns[rns.length - 1];
    return isComponent(el) ? el.__lastDOM : el;
  }
  __render() {
    const Clazz = this.constructor;
    let renderFn = Clazz.template;
    if (!renderFn && this[component_].slots) {
      renderFn = this[component_].slots.default;
    }
    if (!isFunction(renderFn)) {
      throw new Error(`Template of ${Clazz.name} not found. Forget static getter "template"?`);
    }
    return renderFn(this);
  }
  __renderToDOM(targetEl, replaceMode = true) {
    if (this[component_].state !== 0 /* INITIALIZE */) {
      throw new Error("component has already been rendered.");
    }
    const rr = assertRenderResults(this.__render());
    if (replaceMode) {
      replaceChildren(targetEl.parentNode, rr, targetEl);
    } else {
      appendChildren(targetEl, rr);
    }
    this.__handleAfterRender();
  }
  __destroy(removeDOM = true) {
    const comp = this[component_];
    if (comp.state > 2 /* WILLDESTROY */)
      return;
    comp.state = 2 /* WILLDESTROY */;
    this[common_$$].__notifiable = false;
    comp.passedAttrs[common_$$].__notifiable = false;
    this.__notify("before-destroy");
    this.__beforeDestroy();
    this.__handleBeforeDestroy(removeDOM);
    super.__off();
    comp.passedAttrs[common_$$].__destroy();
    comp.passedAttrs = null;
    this[common_$$].__destroy();
    if (comp.upNextMap) {
      comp.upNextMap.forEach((imm) => {
        clearImmediate(imm);
      });
      comp.upNextMap = null;
    }
    if (comp.relatedRefs) {
      comp.relatedRefs.forEach((info) => {
        const refs = info.origin[component_].refs;
        if (!refs)
          return;
        const rns = refs.get(info.ref);
        if (isArray(rns)) {
          arrayRemove(rns, info.node || this);
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
    this[component_].nonRootCompNodes.forEach((component) => {
      component.__destroy(false);
    });
    let $parent;
    this[component_].rootNodes.forEach((node) => {
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
    this[component_].passedAttrs[common_$$].__notifiable = true;
    this[common_$$].__notifiable = true;
    this[component_].rootNodes.forEach((n) => {
      if (isComponent(n))
        n.__handleAfterRender();
    });
    this[component_].nonRootCompNodes.forEach((n) => {
      n.__handleAfterRender();
    });
    this[component_].state = 1 /* RENDERED */;
    this[component_].contextState = this[component_].contextState === 1 /* TOUCHED */ ? 3 /* TOUCHED_FREEZED */ : 2 /* UNTOUCH_FREEZED */;
    this.__afterRender();
    this.__notify("after-render");
  }
  __updateIfNeed(handler, nextTick = true) {
    if (this[component_].state !== 1 /* RENDERED */) {
      return;
    }
    if (handler === false) {
      return this.__update();
    }
    if (!isFunction(handler)) {
      handler = this.__update;
    }
    if (!nextTick) {
      handler.call(this);
      return;
    }
    let ntMap = this[component_].upNextMap;
    if (!ntMap)
      ntMap = this[component_].upNextMap = /* @__PURE__ */ new Map();
    if (ntMap.has(handler)) {
      return;
    }
    ntMap.set(
      handler,
      setimm_setImmediate(() => {
        ntMap.delete(handler);
        handler.call(this);
      })
    );
  }
  __update(first) {
  }
  __setContext(key, value, forceOverride = false) {
    if (this[component_].contextState === 2 /* UNTOUCH_FREEZED */ || this[component_].contextState === 3 /* TOUCHED_FREEZED */) {
      throw new Error("Can't setContext after component has been rendered. Try put setContext code into constructor.");
    }
    if (this[component_].contextState === 0 /* UNTOUCH */) {
      this[component_].context = Object.assign({}, this[component_].context);
      this[component_].contextState = 1 /* TOUCHED */;
    }
    if (key in this[component_].context) {
      if (!forceOverride) {
        throw new Error(
          `Contenxt with key: ${key.toString()} is exist. Pass third argument forceOverride=true to override it.`
        );
      }
    }
    this[component_].context[key] = value;
  }
  __getContext(key) {
    return this[component_].context?.[key];
  }
  __setRef(ref, el, relatedComponent) {
    let rns = this[component_].refs;
    if (!rns) {
      this[component_].refs = rns = /* @__PURE__ */ new Map();
    }
    let elOrArr = rns.get(ref);
    if (!elOrArr) {
      rns.set(ref, el);
    } else if (isArray(elOrArr)) {
      elOrArr.push(el);
    } else {
      elOrArr = [elOrArr, el];
      rns.set(ref, elOrArr);
    }
    const isComp = isComponent(el);
    if (!isComp && this === relatedComponent) {
      return;
    }
    let rbs = (isComp ? el : relatedComponent)[component_].relatedRefs;
    if (!rbs) {
      (isComp ? el : relatedComponent)[component_].relatedRefs = rbs = [];
    }
    rbs.push({
      origin: this,
      ref,
      node: isComp ? null : el
    });
  }
  __getRef(ref) {
    if (this[component_].state !== 1 /* RENDERED */) {
      warn(
        `Warning: call __getRef before component '${this.constructor.name}' rendered will get nothing. see https://[TODO]`
      );
    }
    return this[component_].refs?.get(ref);
  }
  __afterRender() {
  }
  __beforeDestroy() {
  }
}
_a = component_, component_, common_$$;
component_Component[_a] = true;


//# sourceMappingURL=component.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/jinge@3.2.2_jinge-compiler@3.2.2/node_modules/jinge/lib/core/transition.js
var transition_TransitionStates = /* @__PURE__ */ ((TransitionStates2) => {
  TransitionStates2[TransitionStates2["ENTERING"] = 1] = "ENTERING";
  TransitionStates2[TransitionStates2["ENTERED"] = 2] = "ENTERED";
  TransitionStates2[TransitionStates2["LEAVING"] = 3] = "LEAVING";
  TransitionStates2[TransitionStates2["LEAVED"] = 4] = "LEAVED";
  return TransitionStates2;
})(transition_TransitionStates || {});
function transition_getDurationType(el) {
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/jinge@3.2.2_jinge-compiler@3.2.2/node_modules/jinge/lib/vm/index.js






//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/jinge@3.2.2_jinge-compiler@3.2.2/node_modules/jinge/lib/components/class.js




var ClassOpType = /* @__PURE__ */ ((ClassOpType2) => {
  ClassOpType2[ClassOpType2["ADD"] = 0] = "ADD";
  ClassOpType2[ClassOpType2["DEL"] = 1] = "DEL";
  return ClassOpType2;
})(ClassOpType || {});
class class_ToggleClassComponent extends (/* unused pure expression or super */ null && (Component)) {
  constructor(attrs) {
    super(attrs);const _jg0 = this[$$_jg0402].proxy;const f1_jg0402 = () => {
    _jg0.transition = attrs.transition !== false; }; f1_jg0402(); attrs[$$_jg0402].__watch("transition", f1_jg0402);
    _jg0[$$].__watch("class", () => {
      _jg0.__updateIfNeed();
    });
  }
  __render() {
    const rr = super.__render();
    this.__update(true);
    return rr;
  }
  __beforeDestroy() {
    this._ts = null;
  }
  __update(first) {
    const el = this.__transitionDOM;
    if (el && el.nodeType !== Node.ELEMENT_NODE) {
      return;
    }
    if (!this.transition) {
      setAttribute(el, "class", this.class);
      return;
    }
    if (!this._ts) {
      this._ts = /* @__PURE__ */ new Map();
    }
    const newClassList = new Set(this.class ? this.class.split(" ") : []);
    if (first) {
      newClassList.forEach((clz) => {
        this._ts.set(clz, [TransitionStates.ENTERED, null]);
        el.classList.add(clz);
      });
      this._cs = newClassList;
      return;
    }
    const preClassList = this._cs;
    const diffClassList = [];
    newClassList.forEach((clz) => {
      if (preClassList.has(clz)) {
        preClassList.delete(clz);
      } else {
        diffClassList.push({ className: clz, type: 0 /* ADD */ });
      }
    });
    preClassList.forEach((clz) => {
      diffClassList.push({ className: clz, type: 1 /* DEL */ });
    });
    this._cs = newClassList;
    if (diffClassList.length === 0) {
      return;
    }
    diffClassList.forEach(({ className, type }) => {
      const isAdd = type === 0 /* ADD */;
      let t = this._ts.get(className);
      if (!t) {
        t = [isAdd ? TransitionStates.LEAVED : TransitionStates.ENTERED, null];
        this._ts.set(className, t);
      }
      if (isAdd && t[0] <= TransitionStates.ENTERED || !isAdd && t[0] >= TransitionStates.LEAVING) {
        return;
      }
      if (t && t[0] === (isAdd ? TransitionStates.LEAVING : TransitionStates.ENTERING)) {
        el.classList.remove(className + (isAdd ? "-leave-active" : "-enter-active"));
        el.classList.remove(className + (isAdd ? "-leave" : "-enter"));
        removeEvent(el, "transitionend", t[1]);
        removeEvent(el, "animationend", t[1]);
        t[1] = null;
        this.__notify("transition", isAdd ? "leave-cancelled" : "enter-cancelled", className, el);
      }
      const classOfStart = className + (isAdd ? "-enter" : "-leave");
      const classOfActive = className + (isAdd ? "-enter-active" : "-leave-active");
      el.classList.add(classOfStart);
      getDurationType(el);
      el.classList.add(classOfActive);
      const tsEndName = getDurationType(el);
      if (!tsEndName) {
        el.classList.remove(classOfStart);
        el.classList.remove(classOfActive);
        t[0] = isAdd ? TransitionStates.ENTERED : TransitionStates.LEAVED;
        if (isAdd) {
          el.classList.add(className);
        } else {
          el.classList.remove(className);
        }
        return;
      }
      const onEnd = () => {
        removeEvent(el, "transitionend", onEnd);
        removeEvent(el, "animationend", onEnd);
        el.classList.remove(classOfStart);
        el.classList.remove(classOfActive);
        t[1] = null;
        t[0] = isAdd ? TransitionStates.ENTERED : TransitionStates.LEAVED;
        if (isAdd) {
          el.classList.add(className);
        } else {
          el.classList.remove(className);
        }
        this.__notify("transition", isAdd ? "after-enter" : "after-leave", className, el);
      };
      t[0] = isAdd ? TransitionStates.ENTERING : TransitionStates.LEAVING;
      t[1] = onEnd;
      addEvent(el, tsEndName, onEnd);
      this.__notify("transition", isAdd ? "before-enter" : "before-leave", className, el);
      setImmediate(() => {
        this.__notify("transition", isAdd ? "enter" : "leave", className, el);
      });
    });
  }
}


//# sourceMappingURL=class.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/jinge@3.2.2_jinge-compiler@3.2.2/node_modules/jinge/lib/components/for.js



class ForEachComponent extends component_Component {
  constructor(attrs2, item, index, isLast) {
    super(attrs2);const _jg0 = this[common_$$].proxy;
    if (isViewModel(item)) {
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
    return this[component_].slots.default(this);
  }
}
function createEl(item, i, isLast, itemRenderFn, context) {
  return new ForEachComponent(
    component_wrapAttrs({
      [component_]: {
        context,
        slots: {
          default: itemRenderFn
        }
      }
    }),
    item,
    i,
    isLast
  )[common_$$].proxy;
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
  items.forEach((item, i) => {
    if (keyName !== "index") {
      keys.push(_prepareKey(item, i, tmpKeyMap, keyName));
    }
    result.push(...appendRenderEach(item, i, i === items.length - 1, itemRenderFn, roots, context));
  });
  return result;
}
function loopAppend($parent, el) {
  el[component_].rootNodes.forEach((node) => {
    if (isComponent(node)) {
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
  return type_isString(p) && p !== "length" && /^\d+$/.test(p) ? Number(p) : p;
}
class ForComponent extends component_Component {
  constructor(attrs2) {
    if (attrs2.key && !/^(index|each(.[\w\d$_]+)*)$/.test(attrs2.key)) {
      throw new Error('Value of "key" attribute of <for> component is invalidate. See https://[todo]');
    }
    super(attrs2);const _jg0 = this[common_$$].proxy;
    if (isViewModel(attrs2.loop)) {
      _jg0.loop = attrs2.loop;
      attrs2[common_$$].__watch("loop", () => {
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
      _jg0[common_$$].__watch("loop.*." + kn.slice(5), (propPath) => {
        if (propPath.length !== propCount || _jg0._waitingUpdate) {
          return;
        }
        const items = _jg0.loop;
        if (!isArray(items) || items.length === 0)
          return;
        const p = _parseIndexPath(propPath[1]);
        if (!isNumber(p) || p >= items.length) {
          return;
        }
        _jg0._keys[p] = _jg0._keyName(items[p]);
      });
    }
    _jg0[common_$$].__watch("loop.*", (propPath) => {
      if (_jg0[component_].state !== ComponentStates.RENDERED || propPath.length !== 2 || _jg0._waitingUpdate) {
        return;
      }
      const p = _parseIndexPath(propPath[1]);
      if (p === "length") {
        _jg0._waitingUpdate = true;
        _jg0.__updateIfNeed();
      } else if (isNumber(p)) {
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
    const roots = this[component_].rootNodes;
    const itemRenderFn = this[component_].slots?.default;
    if (!itemRenderFn) {
      roots.push(document.createComment("empty"));
      return roots;
    }
    const items = this.loop;
    const keyName = this._keyName;
    if (keyName !== "index")
      this._keys = [];
    if (!isArray(items) || items.length === 0) {
      roots.push(document.createComment("empty"));
      return roots;
    }
    this._length = items.length;
    return renderItems(items, itemRenderFn, roots, this._keys, keyName, this[component_].context);
  }
  _updateItem(index) {
    const items = this.loop;
    const roots = this[component_].rootNodes;
    if (!isArray(items) || index >= roots.length)
      return;
    const keys = this._keys;
    const item = items[index];
    const oldEl = roots[index];
    if (oldEl.each === item) {
      return;
    }
    const itemRenderFn = this[component_].slots?.default;
    if (!itemRenderFn)
      return;
    const keyName = this._keyName;
    if (keyName !== "index") {
      const newKey = keyName === "each" ? item : keyName(item);
      const oldKey = keys[index];
      if (newKey !== oldKey) {
        const $fd = oldEl.__firstDOM;
        const newEl = createEl(item, index, oldEl.isLast, itemRenderFn, this[component_].context);
        const rr = assertRenderResults(newEl.__render());
        $fd.parentNode.insertBefore(rr.length > 1 ? dom_createFragment(rr) : rr[0], $fd);
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
    const itemRenderFn = this[component_].slots?.default;
    if (!itemRenderFn)
      return;
    const newItems = isArray(this.loop) ? this.loop : [];
    const roots = this[component_].rootNodes;
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
    const ctx = this[component_].context;
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
            $f = dom_createFragment();
          appendRenderEach(newItems[i], i, i === nl - 1, itemRenderFn, roots, ctx).forEach((el) => {
            $f.appendChild(el);
          });
        }
      }
      if ($f) {
        const $le = ol === 0 ? firstEl : roots[ol - 1].__lastDOM;
        insertAfter($parent, $f, $le);
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
      const rs = renderItems(newItems, itemRenderFn, roots, oldKeys, keyName, this[component_].context);
      insertAfter($parent, dom_createFragment(rs), firstEl);
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
            $f2 = dom_createFragment();
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
          $f = dom_createFragment();
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
    this[component_].rootNodes = newRoots;
    this._keys = newKeys;
  }
}


//# sourceMappingURL=for.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/jinge@3.2.2_jinge-compiler@3.2.2/node_modules/jinge/lib/components/hide.js


class HideComponent extends (/* unused pure expression or super */ null && (ToggleClassComponent)) {
  constructor(attrs) {
    const fn = () => {
      attrs.class = attrs.test ? "jg-hide" : null;
    };
    fn();
    attrs[$$].__watch("test", fn);
    super(attrs);
  }
}


//# sourceMappingURL=hide.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/jinge@3.2.2_jinge-compiler@3.2.2/node_modules/jinge/lib/components/html.js


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
class BindHtmlComponent extends (/* unused pure expression or super */ null && (Component)) {
  constructor(attrs) {
    if (!("content" in attrs))
      throw new Error('<bind-html/> require "content" attribute');
    super(attrs);const _jg0 = this[$$_jg0402].proxy;const f2_jg0402 = () => {
    _jg0.content = attrs.content; }; f2_jg0402(); attrs[$$_jg0402].__watch("content", f2_jg0402);
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
    return this[__].rootNodes = renderHtml(this._c);
  }
  __update() {
    const roots = this[__].rootNodes;
    const oldFirstEl = roots[0];
    const $p = oldFirstEl.parentNode;
    const newEls = renderHtml(this._c);
    $p.insertBefore(newEls.length > 1 ? createFragment(newEls) : newEls[0], oldFirstEl);
    roots.forEach((oldEl) => $p.removeChild(oldEl));
    this[__].rootNodes = newEls;
  }
}


//# sourceMappingURL=html.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/jinge@3.2.2_jinge-compiler@3.2.2/node_modules/jinge/lib/components/if.js



function if_createEl(renderFn, context) {
  const attrs = component_wrapAttrs({
    [component_]: {
      context,
      slots: {
        default: renderFn
      }
    }
  });
  return component_Component.create(attrs);
}
function renderSwitch(component) {
  const value = component._currentValue;
  const acs = component[component_].slots;
  if (component.transition && acs) {
    component._transitionMap = /* @__PURE__ */ new Map();
    for (const k in acs) {
      component._transitionMap.set(k, [
        k === value ? transition_TransitionStates.ENTERED : transition_TransitionStates.LEAVED,
        null
      ]);
    }
    component._previousValue = value;
    component._onEndHandler = component.onTransitionEnd.bind(component);
  }
  const renderFn = acs ? acs[value] : null;
  const roots = component[component_].rootNodes;
  if (!renderFn) {
    roots.push(document.createComment("empty"));
    return roots;
  }
  const el = if_createEl(renderFn, component[component_].context);
  roots.push(el);
  return el.__render();
}
function doUpdate(component) {
  const roots = component[component_].rootNodes;
  const el = roots[0];
  const isComp = isComponent(el);
  const firstDOM = isComp ? el.__firstDOM : el;
  const parentDOM = (isComp ? firstDOM : el).parentNode;
  const renderFn = component[component_].slots?.[component._currentValue];
  if (renderFn) {
    const newEl = if_createEl(renderFn, component[component_].context);
    const nodes = assertRenderResults(newEl.__render());
    parentDOM.insertBefore(nodes.length > 1 ? dom_createFragment(nodes) : nodes[0], firstDOM);
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
  dom_removeEvent(el, "transitionend", onEnd);
  dom_removeEvent(el, "animationend", onEnd);
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
  transition_getDurationType(el);
  el.classList.add(classOfActive);
  const tsEndName = transition_getDurationType(el);
  if (!tsEndName) {
    onEnd();
    return;
  }
  t[0] = e ? transition_TransitionStates.ENTERING : transition_TransitionStates.LEAVING;
  dom_addEvent(el, tsEndName, onEnd);
  component.__notify("transition", e ? "before-enter" : "before-leave", el);
  setimm_setImmediate(() => {
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
      pv === "else" ? transition_TransitionStates.LEAVED : transition_TransitionStates.ENTERED,
      null
    ];
    component._transitionMap.set(pv, pt);
  }
  if (pt[0] === transition_TransitionStates.ENTERING) {
    if (value === pv)
      return;
    cancelTs(pt, tn, true, component);
    startTs(pt, tn, false, component);
  } else if (pt[0] === transition_TransitionStates.LEAVING) {
    if (value !== pv)
      return;
    cancelTs(pt, tn, false, component);
    startTs(pt, tn, true, component);
  } else if (pt[0] === transition_TransitionStates.ENTERED) {
    pt[1] = component.__transitionDOM;
    startTs(pt, tn, false, component);
  } else if (pt[0] === transition_TransitionStates.LEAVED) {
    pt[1] = component.__transitionDOM;
    startTs(pt, tn, true, component);
  }
}
function updateSwitch(component) {
  if (!isComponent(component[component_].rootNodes[0]) && (!component[component_].slots || !component[component_].slots[component._currentValue])) {
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
  const e = pt[0] === transition_TransitionStates.ENTERING;
  const el = pt[1];
  if (el.nodeType === Node.ELEMENT_NODE) {
    dom_removeEvent(el, "transitionend", component._onEndHandler);
    dom_removeEvent(el, "animationend", component._onEndHandler);
    el.classList.remove(tn + (e ? "-enter" : "-leave"));
    el.classList.remove(tn + (e ? "-enter-active" : "-leave-active"));
    component.__notify("transition", e ? "after-enter" : "after-leave");
  }
  pt[0] = e ? transition_TransitionStates.ENTERED : transition_TransitionStates.LEAVED;
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
    ct[0] = transition_TransitionStates.ENTERED;
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
        dom_removeEvent(el, "transitionend", component._onEndHandler);
        dom_removeEvent(el, "animationend", component._onEndHandler);
      }
    });
    component._transitionMap = null;
  }
}
class IfComponent extends component_Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[common_$$].proxy;
    _jg0._currentValue = "default";
    _jg0._onEndHandler = null;
    _jg0._transitionMap = null;
    _jg0._previousValue = null;const f5_jg0402 = () => {
    _jg0.expect = attrs.expect; }; f5_jg0402(); attrs[common_$$].__watch("expect", f5_jg0402);const f6_jg0402 = () => {
    _jg0.transition = attrs.transition; }; f6_jg0402(); attrs[common_$$].__watch("transition", f6_jg0402);
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
class SwitchComponent extends (/* unused pure expression or super */ null && (Component)) {
  constructor(attrs) {
    super(attrs);const _jg0 = this[$$_jg0402].proxy;
    _jg0._onEndHandler = null;
    _jg0._transitionMap = null;
    _jg0._previousValue = null;
    _jg0._currentValue = null;const f5_jg0402 = () => {
    _jg0.test = attrs.test; }; f5_jg0402(); attrs[$$_jg0402].__watch("test", f5_jg0402);const f6_jg0402 = () => {
    _jg0.transition = attrs.transition; }; f6_jg0402(); attrs[$$_jg0402].__watch("transition", f6_jg0402);
  }
  get test() {
    return this._currentValue;
  }
  set test(v) {
    const acs = this[__].slots;
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/jinge@3.2.2_jinge-compiler@3.2.2/node_modules/jinge/lib/components/parameter.js


class ParameterComponent extends component_Component {
  constructor(attrs, params) {
    super(attrs);const _jg0 = this[common_$$].proxy;
    params.forEach((p) => {
      _jg0[p] = attrs[p];
      attrs[common_$$].__watch(p, () => {
        _jg0[p] = attrs[p];
      });
    });
  }
}


//# sourceMappingURL=parameter.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/jinge@3.2.2_jinge-compiler@3.2.2/node_modules/jinge/lib/components/log.js

class LogComponent extends (/* unused pure expression or super */ null && (Component)) {
  constructor(attrs) {
    super(attrs);const _jg0 = this[$$_jg0402].proxy;const f1_jg0402 = () => {
    _jg0.msg = attrs.msg; }; f1_jg0402(); attrs[$$_jg0402].__watch("msg", f1_jg0402);
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/jinge@3.2.2_jinge-compiler@3.2.2/node_modules/jinge/lib/core/render_fns.js


function render_fns_emptyRenderFn(component) {
  const el = document.createComment("empty");
  component[component_].rootNodes.push(el);
  return [el];
}
function errorRenderFn(component) {
  const el = createElement("span", {
    style: "color: red !important;"
  });
  el.textContent = "template parsing failed! please check webpack log.";
  component[__].rootNodes.push(el);
  return [el];
}
function textRenderFn(component, txtContent) {
  const el = createTextNode(txtContent);
  component[component_].rootNodes.push(el);
  return el;
}


//# sourceMappingURL=render_fns.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/jinge@3.2.2_jinge-compiler@3.2.2/node_modules/jinge/lib/components/dynamic.js




function dynamic_createEl(component) {
  let Clazz = component._r?.component;
  const pAttrs = component[__].passedAttrs;
  const attrs = wrapAttrs({
    [__]: {
      slots: null,
      context: component[__].context
    }
  });
  if (!Clazz) {
    attrs[__].slots = {
      default: component._r?.renderFn || emptyRenderFn
    };
    Clazz = Component;
  }
  for (const attrName in pAttrs) {
    attrs[attrName] = pAttrs[attrName];
  }
  component._ca = attrs;
  if (!component._w) {
    pAttrs[$$].__watch("*", (prop) => {
      component._ca[prop[0]] = pAttrs[prop[0]];
    });
    component._w = true;
  }
  return Clazz.create(attrs);
}
class DynamicRenderComponent extends (/* unused pure expression or super */ null && (Component)) {
  constructor(attrs) {
    super(attrs);const _jg0 = this[$$_jg0402].proxy;
    _jg0._ca = null;
    _jg0._w = false;const f3_jg0402 = () => {
    _jg0.render = attrs.render; }; f3_jg0402(); attrs[$$_jg0402].__watch("render", f3_jg0402);
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
    const el = dynamic_createEl(this);
    this[__].rootNodes.push(el);
    return el.__render();
  }
  __update() {
    const roots = this[__].rootNodes;
    const el = roots[0];
    const fd = el.__firstDOM;
    const pa = fd.parentNode;
    const newEl = dynamic_createEl(this);
    roots[0] = newEl;
    const nels = newEl.__render();
    pa.insertBefore(nels.length > 1 ? createFragment(nels) : nels[0], fd);
    el.__destroy();
    newEl.__handleAfterRender();
  }
}


//# sourceMappingURL=dynamic.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/jinge@3.2.2_jinge-compiler@3.2.2/node_modules/jinge/lib/components/index.js









//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/jinge@3.2.2_jinge-compiler@3.2.2/node_modules/jinge/lib/core/bootstrap.js
function bootstrap(ComponentClazz, dom, attrs) {
  const app = ComponentClazz.create(attrs);
  app.__renderToDOM(dom, dom !== document.body);
  return app;
}


//# sourceMappingURL=bootstrap.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/jinge@3.2.2_jinge-compiler@3.2.2/node_modules/jinge/lib/core/index.js







//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/jinge@3.2.2_jinge-compiler@3.2.2/node_modules/jinge/lib/index.js





//# sourceMappingURL=index.js.map

/***/ }),

/***/ 981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ND": () => (/* binding */ T29rjaqd_ZHCN_EN)
/* harmony export */ });
/* unused harmony exports ZHCN, EN, ZHCN_EN */
/* harmony import */ var jinge_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/** @eslint-disabled **/
/** this file is auto generated by jinge-i18n, don't modify it manually. **/
/** dictionary for original text: 你好，世界！ **/;

const ZHCN = () => "你好，世界！";
const EN = () => "Hello, World!";
const ZHCN_EN = (locale) => locale === 'zh_cn' ? ZHCN : EN;
class T29rjaqd_ZHCN_EN extends jinge_i18n__WEBPACK_IMPORTED_MODULE_0__/* .TComponent */ .h$ {
  static d = ZHCN_EN;
}

/***/ }),

/***/ 936:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xd": () => (/* binding */ Tfee9s7_ZHCN_EN)
/* harmony export */ });
/* unused harmony exports ZHCN, EN, ZHCN_EN */
/* harmony import */ var jinge_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/** @eslint-disabled **/
/** this file is auto generated by jinge-i18n, don't modify it manually. **/
/** dictionary for original text: 春江花月夜 **/;

const ZHCN = () => "春江花月夜";
const EN = () => "The Moon over the River on a Spring Night";
const ZHCN_EN = (locale) => locale === 'zh_cn' ? ZHCN : EN;
class Tfee9s7_ZHCN_EN extends jinge_i18n__WEBPACK_IMPORTED_MODULE_0__/* .TComponent */ .h$ {
  static d = ZHCN_EN;
}

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
/******/ 			return "" + {"69":"8bde88fc37bf00c0f35e","207":"f29a157f78166e0a942b","444":"273253ad5603f255233b","925":"ca7db5977b590f24cffa"}[chunkId] + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + {"69":"645aafacd0de52488b98","207":"b81dbf284402f04d9f79","925":"9034fd25d4c10e0b3077"}[chunkId] + ".css";
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
/******/ 		var dataWebpackPrefix = "jinge-demo-i18n:";
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
/******/ 			;
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
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		var createStylesheet = (chunkId, fullhref, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			document.head.appendChild(linkTag);
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// object to store loaded CSS chunks
/******/ 		var installedCssChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.miniCss = (chunkId, promises) => {
/******/ 			var cssChunks = {"69":1,"207":1,"925":1};
/******/ 			if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 			else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 				promises.push(installedCssChunks[chunkId] = loadStylesheet(chunkId).then(() => {
/******/ 					installedCssChunks[chunkId] = 0;
/******/ 				}, (e) => {
/******/ 					delete installedCssChunks[chunkId];
/******/ 					throw e;
/******/ 				}));
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no hmr
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
/******/ 			179: 0
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
/******/ 						} else installedChunks[chunkId] = 0;
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkjinge_demo_i18n"] = self["webpackChunkjinge_demo_i18n"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXTERNAL MODULE: ./node_modules/.pnpm/jinge@3.2.2_jinge-compiler@3.2.2/node_modules/jinge/lib/index.js + 28 modules
var lib = __webpack_require__(116);
// EXTERNAL MODULE: ./node_modules/.pnpm/jinge-i18n@1.0.0_jinge@3.2.2/node_modules/jinge-i18n/lib/index.js + 3 modules
var jinge_i18n_lib = __webpack_require__(37);
;// CONCATENATED MODULE: ./node_modules/.pnpm/jinge-router@3.2.2_jinge@3.2.2/node_modules/jinge-router/lib/common.js
const VIEW_NAME_PATH = Symbol("#viewNamePath");


//# sourceMappingURL=common.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/jinge-router@3.2.2_jinge@3.2.2/node_modules/jinge-router/lib/util.js

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
      if ((0,lib/* isUndefined */.o8)(dv) || dv === null) {
        if (!(0,lib/* isUndefined */.o8)(sv) && sv !== null) {
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
  if (!(0,lib/* isObject */.Kn)(v))
    return "";
  return Object.keys(v).map((k) => {
    return encodeURIComponent(k) + "=" + encodeURIComponent(v[k]);
  }).join("&");
}


//# sourceMappingURL=util.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/path-to-regexp@6.2.1/node_modules/path-to-regexp/dist.es2015/index.js
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/jinge-router@3.2.2_jinge@3.2.2/node_modules/jinge-router/lib/components/view.js


function createEl(renderFn, context) {
  const el = new lib/* Component */.wA(
    (0,lib/* attrs */.Qb)({
      [lib.__]: {
        context,
        slots: {
          default: renderFn
        }
      }
    })
  );
  return el[lib.$$].proxy;
}
class RouterViewComponent extends lib/* Component */.wA {
  constructor(attrs2) {
    super(attrs2);const _jg0 = this[lib.$$].proxy;
    _jg0._name = attrs2.name || "default";
    _jg0._doc = attrs2.doc || "before";
    _jg0._router = _jg0.__getContext("router");
    if (!_jg0._router) {
      throw new Error('Context named "router" not found.');
    }
    const parentNamePath = _jg0.__getContext(VIEW_NAME_PATH);
    _jg0._path = [...parentNamePath || [], _jg0._name];
    _jg0.__setContext(VIEW_NAME_PATH, _jg0._path, true);
    _jg0.resolving = false;
  }
  __afterRender() {
    this._router.__regView(this._path, this);
  }
  __render() {
    const el = document.createComment("router-view");
    this[lib.__].rootNodes.push(el);
    return this[lib.__].rootNodes;
  }
  async _shouldUpdateView(from, to) {
    const el = this[lib.__].rootNodes[0];
    if (!(0,lib/* isComponent */.pE)(el)) {
      return true;
    }
    if ((0,lib/* isFunction */.mf)(el.__routeShouldLeave)) {
      return await el.__routeShouldLeave(from, to);
    }
    return true;
  }
  _doUpdateView(err, current, routeMatchItem) {
    const roots = this[lib.__].rootNodes;
    const oldEl = roots[0];
    const oldIsComp = (0,lib/* isComponent */.pE)(oldEl);
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
      err = (0,lib/* isObject */.Kn)(err) ? err.message || err.toString() : err;
      const errRenderFn = this[lib.__].slots?.error;
      if (!errRenderFn) {
        const newEl3 = (0,lib/* createElement */.az)("p", { style: "color: red;" }, err);
        $pa.insertBefore(newEl3, $el);
        removeOldEl();
        roots[0] = newEl3;
        return;
      }
      const newEl2 = createEl(errRenderFn, this[lib.__].context);
      newEl2.error = err;
      const ns2 = (0,lib/* assertRenderResults */.KO)(newEl2.__render());
      $pa.insertBefore(ns2.length > 1 ? (0,lib/* createFragment */.xJ)(ns2) : ns2[0], $el);
      removeOldEl();
      roots[0] = newEl2;
      newEl2.__handleAfterRender();
      return;
    }
    let CompClazz = null;
    if (routeMatchItem) {
      CompClazz = routeMatchItem.route.components[this._name];
      if (!CompClazz) {
        (0,lib/* warn */.ZK)(`Component of <router-view/> named "${this._name}" not provided.`);
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
      (0,lib/* attrs */.Qb)({
        ...routeMatchItem.resolves,
        [lib.__]: {
          context: this[lib.__].context
        }
      })
    );
    const ns = (0,lib/* assertRenderResults */.KO)(newEl.__render());
    $pa.insertBefore(ns.length > 1 ? (0,lib/* createFragment */.xJ)(ns) : ns[0], $el);
    removeOldEl();
    roots[0] = newEl;
    newEl.__handleAfterRender();
  }
  _prepareUpdateView() {
    if (this._doc !== "before") {
      return;
    }
    const roots = this[lib.__].rootNodes;
    const oldEl = roots[0];
    const oldIsComp = (0,lib/* isComponent */.pE)(oldEl);
    const $el = oldIsComp ? oldEl.__firstDOM : oldEl;
    const $pa = $el.parentNode;
    const $cursor = document.createComment("--");
    $pa.insertBefore($cursor, $el);
    if (oldIsComp) {
      oldEl.__destroy(true);
    } else {
      $pa.removeChild($el);
    }
    const loadingRenderFn = this[lib.__].slots?.default;
    if (!loadingRenderFn) {
      roots[0] = $cursor;
      return;
    }
    const loadingEl = createEl(loadingRenderFn, this[lib.__].context);
    const ns = (0,lib/* assertRenderResults */.KO)(loadingEl.__render());
    $pa.insertBefore(ns.length > 1 ? (0,lib/* createFragment */.xJ)(ns) : ns[0], $cursor);
    $pa.removeChild($cursor);
    roots[0] = loadingEl;
  }
  __beforeDestroy() {
    this._router.__deregView(this._path);
  }
}


//# sourceMappingURL=view.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/jinge-router@3.2.2_jinge@3.2.2/node_modules/jinge-router/lib/components/redirect.tpl.js


/* harmony default export */ function redirect_tpl(component) {
  const vm_0 = component;
  return [
  ...(() => {
    const attrs = (0,lib/* attrs */.Qb)({
      [lib.__]: {
        context: component[lib.__].context,
      },
      doc: `after`
    });
    const el = RouterViewComponent.create(attrs);
    component[lib.__].rootNodes.push(el);
    return (0,lib/* assertRenderResults */.KO)(el.__render());
  })()
  ];
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/jinge-router@3.2.2_jinge@3.2.2/node_modules/jinge-router/lib/components/redirect.js


class RouterParentComponent extends lib/* Component */.wA {
}
RouterParentComponent.template = redirect_tpl;


//# sourceMappingURL=redirect.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/jinge-router@3.2.2_jinge@3.2.2/node_modules/jinge-router/lib/router.js




function normPath(p) {
  if (!p || !p.startsWith("/"))
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
    route.component = RouterParentComponent;
  }
  const _route = {
    name,
    parent,
    p2r: {
      match: match(path, { end: !hasChild, decode: decodeURIComponent }),
      toPath: compile(path)
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
        return Object.assign({}, it.params);
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
  const _search = encodeParamsOrQuery(currentInfo.query);
  const _url = currentInfo._pathname + (_search ? "?" + _search : "");
  history.replaceState(null, "", (mode === "hash" ? "#" : "") + _url);
}
function getPathnameAndSearch(destination, __map, baseHref) {
  if ((0,lib/* isString */.HD)(destination)) {
    destination = { name: destination };
  }
  const name = destination.name;
  const route = __map.get(name);
  if (!route) {
    (0,lib/* warn */.ZK)(`target route name "${name}" not found.`);
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
  (0,lib/* arrayPushIfNotExist */.Om)(arr, fn);
  return () => {
    (0,lib/* arrayRemove */.Ab)(arr, fn);
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
    this.__info = (0,lib.vm)({
      _pathname: null,
      _routePath: [],
      params: (0,lib.vm)({}),
      query: (0,lib.vm)({})
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
    this.__dereg = (0,lib/* registerEvent */.KS)(
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
  _onErr(err) {
    console.error(err);
  }
  _onHashChange() {
    const hash = location.hash.slice(1);
    const qi = hash.indexOf("?");
    this._update(qi > 0 ? hash.substring(0, qi) : hash, qi > 0 ? hash.substring(qi + 1) : "").catch(
      (err) => this._onErr(err)
    );
  }
  _onStateChange() {
    this._update(location.pathname, location.search ? location.search.substring(1) : "").catch(
      (err) => this._onErr(err)
    );
  }
  async _update(pathname, search) {
    pathname = normPath(pathname);
    if (this.__base !== "/" && pathname.startsWith(this.__base)) {
      pathname = pathname.substring(this.__base.length - 1);
    }
    const query = search ? (0,lib/* isString */.HD)(search) ? parseQuery(search) : cloneParamsOrQuery(search) : {};
    const asyncKey = ++this.__asyncKey;
    const currentInfo = this.__info;
    if (pathname === currentInfo._pathname) {
      if (!isParamsOrQuerySameOrInclude(query, currentInfo.query)) {
        currentInfo.query = (0,lib.vm)(query);
      }
      return;
    }
    const newMatchPath = matchRoutePath(pathname, this.__routes);
    if (newMatchPath.length === 0) {
      (0,lib/* warn */.ZK)("no route match path:", pathname);
      return;
    }
    const last = newMatchPath[newMatchPath.length - 1];
    const newRouteInfo = (0,lib.vm)({
      _pathname: pathname,
      _routePath: newMatchPath,
      query: (0,lib.vm)(query),
      params: (0,lib.vm)(Object.assign({}, last.params))
    });
    let redirect = last.route.redirect;
    if (redirect) {
      if ((0,lib/* isFunction */.mf)(redirect)) {
        redirect = await redirect(newRouteInfo.params, newRouteInfo.query);
        if (asyncKey !== this.__asyncKey) {
          return;
        }
      } else if ((0,lib/* isString */.HD)(redirect)) {
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
      if (!isParamsOrQuerySameOrInclude(newIt.params, oldIt.params)) {
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
      const shouldUpdateQuery = !isParamsOrQuerySameOrInclude(query, currentInfo.query);
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
      if ((0,lib/* isFunction */.mf)(routeDef.onLeave)) {
        const shouldLeave = await routeDef.onLeave(currentInfo, newRouteInfo);
        if (this.__asyncKey !== asyncKey) {
          return;
        }
        if (shouldLeave === false) {
          return rollback(currentInfo, this.__mode);
        }
      }
    }
    viewsToUpdate.forEach((vtp) => {
      vtp.__views?.clear();
      vtp.component._prepareUpdateView(newRouteInfo, newMatchPath[routeIdxToUpdate]);
    });
    if (newRouteInfo._routePath.length > routeIdxToUpdate) {
      for (let i = routeIdxToUpdate; i < newRouteInfo._routePath.length; i++) {
        const routeDef = newRouteInfo._routePath[i].route.define;
        if ((0,lib/* isFunction */.mf)(routeDef.onEnter)) {
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
      resolveDefs && Object.keys(resolveDefs).forEach((k) => {
        const resolveOrFn = resolveDefs[k];
        if ((0,lib/* isFunction */.mf)(resolveOrFn)) {
          try {
            const rtn = resolveOrFn(matchedRoute.params, newRouteInfo.query, parentResolves);
            if ((0,lib/* isObject */.Kn)(rtn) && (0,lib/* isFunction */.mf)(rtn.then)) {
              promises.push(
                rtn.then((rr) => {
                  currentResolves[k] = rr;
                })
              );
            } else {
              currentResolves[k] = rtn;
            }
          } catch (ex) {
            viewsToUpdate.forEach((vtp) => {
              vtp.component._doUpdateView(ex);
            });
            throw ex;
          }
        } else {
          currentResolves[k] = resolveOrFn;
        }
      });
      let loadedComClasses = matchedRoute.route.components;
      if (!loadedComClasses) {
        const comClasses = matchedRoute.route.define.components || {};
        loadedComClasses = {};
        if (matchedRoute.route.define.component) {
          comClasses.default = matchedRoute.route.define.component;
        }
        Object.keys(comClasses).forEach((cn) => {
          const CompClazz = comClasses[cn];
          if ((0,lib/* isFunction */.mf)(CompClazz) && !(0,lib/* isComponent */.pE)(CompClazz)) {
            try {
              const r = CompClazz(matchedRoute.params, newRouteInfo.query, currentResolves);
              if ((0,lib/* isObject */.Kn)(r) && (0,lib/* isFunction */.mf)(r.then)) {
                promises.push(
                  r.then((rr) => {
                    loadedComClasses[cn] = rr;
                  })
                );
              } else {
                loadedComClasses[cn] = CompClazz;
              }
            } catch (ex) {
              viewsToUpdate.forEach((vtp) => {
                vtp.component._doUpdateView(ex);
              });
              throw ex;
            }
          } else {
            loadedComClasses[cn] = CompClazz;
          }
        });
      }
      try {
        await Promise.all(promises);
      } catch (ex) {
        if (asyncKey === this.__asyncKey) {
          viewsToUpdate.forEach((vtp) => {
            vtp.component._doUpdateView(ex);
          });
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
    viewsToUpdate.forEach((vtp) => {
      vtp.component._doUpdateView(null, newRouteInfo, newMatchPath[routeIdxToUpdate]);
    });
    this.__guard.after.forEach((fn) => {
      fn(oldRouteInfo, newRouteInfo);
    });
  }
  get params() {
    return this.__info?.params;
  }
  get query() {
    return this.__info?.query;
  }
  get current() {
    const rp = this.__info?._routePath;
    if (!rp || rp.length === 0)
      return null;
    return rp[rp.length - 1];
  }
  includes(destination, checkQuery = false) {
    if (!this.__info || this.__info._routePath.length === 0)
      return false;
    if ((0,lib/* isString */.HD)(destination)) {
      destination = { name: destination };
    }
    const name = destination.name;
    const route = this.__map.get(name);
    if (!route) {
      return false;
    }
    if (checkQuery && destination.query && !isParamsOrQuerySameOrInclude(destination.query, this.__info.query, false)) {
      return false;
    }
    return this.__info._routePath.findIndex((it) => {
      return it.route === route && isParamsOrQuerySameOrInclude(destination.params || {}, it.params || {}, false);
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/jinge-router@3.2.2_jinge@3.2.2/node_modules/jinge-router/lib/components/link.tpl.js

/* harmony default export */ function link_tpl(component) {
  const vm_0 = component;
  return [
  ...(() => {
    const __ac = vm_0[lib.__].slots;
    const renderFn = __ac && __ac['default'] ? __ac['default'] :   function(component) {
      return [
      (() => {
        const el = (0,lib/* createElementWithoutAttrs */.Eh)(
          "a",
          (() => {
            const el = (0,lib/* createTextNode */.Eg)();
            const fn_0 = () => {
              (0,lib/* setText */.Hd)(el, vm_0.text);
            };
            fn_0();
            vm_0[lib.$$].__watch(["text"], fn_0, component[lib.$$]);
            return el;
          })()
        );
        const fn_0 = () => {
          (0,lib/* setClassAttribute */.VT)(el, ([vm_0.isActive && vm_0.active, vm_0.class]));
        };
        fn_0();
        vm_0[lib.$$].__watch(["isActive"], fn_0, component[lib.$$]);
        vm_0[lib.$$].__watch(["active"], fn_0, component[lib.$$]);
        vm_0[lib.$$].__watch(["class"], fn_0, component[lib.$$]);
        const fn_1 = () => {
          (0,lib/* setStyleAttribute */.V7)(el, vm_0.style);
        };
        fn_1();
        vm_0[lib.$$].__watch(["style"], fn_1, component[lib.$$]);
        component[lib.__].rootNodes.push(el);
        return el;
      })()
      ];
    };
    const attrs = (0,lib/* attrs */.Qb)({
      [lib.__]: {
        context: component[lib.__].context,
        slots: {
          default: renderFn || lib/* emptyRenderFn */.qO
        }
      }
    });
    const el = (new lib/* ParameterComponent */.gU(attrs, []))[lib.$$].proxy;
    component[lib.__].rootNodes.push(el);
    return (0,lib/* assertRenderResults */.KO)(el.__render());
  })()
  ];
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/jinge-router@3.2.2_jinge@3.2.2/node_modules/jinge-router/lib/components/link.js



class RouterLinkComponent extends lib/* Component */.wA {
  constructor(attrs) {
    super(attrs);const _jg0 = this[lib.$$].proxy;const f1_jg0402 = () => {
    _jg0.to = attrs.to; }; f1_jg0402(); attrs[lib.$$].__watch("to", f1_jg0402);const f2_jg0402 = () => {
    _jg0.text = attrs.text || ""; }; f2_jg0402(); attrs[lib.$$].__watch("text", f2_jg0402);const f3_jg0402 = () => {
    _jg0.target = attrs.target || "_self"; }; f3_jg0402(); attrs[lib.$$].__watch("target", f3_jg0402);const f4_jg0402 = () => {
    _jg0.replace = !!attrs.replace; }; f4_jg0402(); attrs[lib.$$].__watch("replace", f4_jg0402);const f5_jg0402 = () => {
    _jg0.active = attrs.active; }; f5_jg0402(); attrs[lib.$$].__watch("active", f5_jg0402);
    _jg0._router = _jg0.__getContext("router");
    if (!_jg0._router) {
      throw new Error('Context named "router" not found.');
    }
    _jg0._tag = attrs[lib.__].slots?.default ? 0 : -1;
    _jg0._el = null;
    _jg0._qw = false;
    _jg0._clh = _jg0._onClick.bind(_jg0);
    _jg0._rch = _jg0._onRc.bind(_jg0);
    _jg0._rcd = null;
  }
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
    (0,lib/* addEvent */.vP)(el, "click", this._clh);
  }
  __beforeDestroy() {
    (0,lib/* removeEvent */.xC)(this._el, "click", this._clh);
    this._rcd();
    if (this._qw) {
      (0,lib/* unwatch */.UC)(this._router.__info, "query.*", this._rch);
    }
  }
  _upT() {
    if (this._tag <= 0) {
      (0,lib/* setAttribute */.P$)(this._el, "target", this.target);
    }
  }
  _upHa() {
    this._upH();
    this._upA();
  }
  _upH() {
    if (this._tag <= 0) {
      let href;
      if (!this._to || !(href = this._router.href(this._to))) {
        this._el.removeAttribute("href");
      } else {
        (0,lib/* setAttribute */.P$)(this._el, "href", href);
      }
    }
  }
  _upA() {
    let isActive = this._to && this._router.includes(this._to);
    if (isActive && (0,lib/* isObject */.Kn)(this._to) && this._to.query) {
      if (!this._qw) {
        (0,lib/* watch */.YP)(this._router.__info, "query.*", this._rch);
        this._qw = true;
      }
      isActive = isParamsOrQuerySameOrInclude(this._to.query, this._router.__info?.query);
    } else if (this._qw) {
      this._qw = false;
      (0,lib/* unwatch */.UC)(this._router.__info, "query.*", this._rch);
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
RouterLinkComponent.template = link_tpl;


//# sourceMappingURL=link.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/jinge-router@3.2.2_jinge@3.2.2/node_modules/jinge-router/lib/components/router.js


class RouterComponent extends lib/* Component */.wA {
  constructor(attrs) {
    let router;
    if (attrs.router instanceof Router) {
      router = attrs.router;
    } else if (attrs.router === "hash") {
      router = new Router({
        mode: "hash"
      });
    } else {
      router = new Router({
        mode: "html5"
      });
    }
    attrs.routes?.forEach((rd) => {
      router.register(rd);
    });
    super(attrs);const _jg0 = this[lib.$$].proxy;
    _jg0._router = router;const f5_jg0402 = () => {
    _jg0.baseHref = attrs.baseHref || "/"; }; f5_jg0402(); attrs[lib.$$].__watch("baseHref", f5_jg0402);
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/jinge-router@3.2.2_jinge@3.2.2/node_modules/jinge-router/lib/components/index.js




//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/jinge-router@3.2.2_jinge@3.2.2/node_modules/jinge-router/lib/index.js





//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./translate/dict/3lvhd0u.js
/** @eslint-disabled **/
/** this file is auto generated by jinge-i18n, don't modify it manually. **/
/** dictionary for original text: 请选择语言 **/;

const ZHCN = () => "请选择语言";
const EN = () => "Please choose language";
const ZHCN_EN = (locale) => locale === 'zh_cn' ? ZHCN : EN;
class T3lvhd0u_ZHCN_EN extends jinge_i18n_lib/* TComponent */.h$ {
  static d = ZHCN_EN;
}
;// CONCATENATED MODULE: ./translate/dict/2ntjjqf.js
/** @eslint-disabled **/
/** this file is auto generated by jinge-i18n, don't modify it manually. **/
/** dictionary for original text: 这个示例整合了多语言、路由和模块按需动态加载能力。 **/;

const _2ntjjqf_ZHCN = () => "这个示例整合了多语言、路由和模块按需动态加载能力。";
const _2ntjjqf_EN = () => "This example integrates multi-language, routing and dynamic import code splitting.";
const _2ntjjqf_ZHCN_EN = (locale) => locale === 'zh_cn' ? _2ntjjqf_ZHCN : _2ntjjqf_EN;
class A2ntjjqf_ZHCN_EN extends jinge_i18n_lib/* AComponent */.D7 {
  static d = [_2ntjjqf_ZHCN_EN];
}
// EXTERNAL MODULE: ./translate/dict/29rjaqd.js
var _29rjaqd = __webpack_require__(981);
;// CONCATENATED MODULE: ./translate/dict/1gp0cth.js
/** @eslint-disabled **/
/** this file is auto generated by jinge-i18n, don't modify it manually. **/
/** dictionary for original text: 模块 A **/;

const _1gp0cth_ZHCN = () => "模块 A";
const _1gp0cth_EN = () => "Module A";
const _1gp0cth_ZHCN_EN = (locale) => locale === 'zh_cn' ? _1gp0cth_ZHCN : _1gp0cth_EN;
class A1gp0cth_ZHCN_EN extends jinge_i18n_lib/* AComponent */.D7 {
  static d = [_1gp0cth_ZHCN_EN];
}
;// CONCATENATED MODULE: ./translate/dict/2jb9p2g.js
/** @eslint-disabled **/
/** this file is auto generated by jinge-i18n, don't modify it manually. **/
/** dictionary for original text: 模块 B **/;

const _2jb9p2g_ZHCN = () => "模块 B";
const _2jb9p2g_EN = () => "Module B";
const _2jb9p2g_ZHCN_EN = (locale) => locale === 'zh_cn' ? _2jb9p2g_ZHCN : _2jb9p2g_EN;
class A2jb9p2g_ZHCN_EN extends jinge_i18n_lib/* AComponent */.D7 {
  static d = [_2jb9p2g_ZHCN_EN];
}
;// CONCATENATED MODULE: ./translate/dict/27pfrih.js
/** @eslint-disabled **/
/** this file is auto generated by jinge-i18n, don't modify it manually. **/
/** dictionary for original text: 模块 C **/;

const _27pfrih_ZHCN = () => "模块 C";
const _27pfrih_EN = () => "Module C";
const _27pfrih_ZHCN_EN = (locale) => locale === 'zh_cn' ? _27pfrih_ZHCN : _27pfrih_EN;
class A27pfrih_ZHCN_EN extends jinge_i18n_lib/* AComponent */.D7 {
  static d = [_27pfrih_ZHCN_EN];
}
// EXTERNAL MODULE: ./src/components/printer.c.js + 1 modules
var printer_c = __webpack_require__(196);
;// CONCATENATED MODULE: ./src/app.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const app_module = ({"nav":"saHbmE5E2pRh_n9kOMCR","active":"BFeG74xlw9e582RNhbAE"});
;// CONCATENATED MODULE: ./src/app.c.html











/* harmony default export */ function app_c(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = (0,lib/* createElementWithoutAttrs */.Eh)(
      "p",
      (() => {
        const el = (0,lib/* createElementWithoutAttrs */.Eh)(
          "select",
          (0,lib/* createElement */.az)(
            "option",
            {
              disabled: true
            },
            ...(() => {
              const attrs = (0,lib/* attrs */.Qb)({
                [lib.__]: {
                  context: component[lib.__].context,
                },
              });
              const el = T3lvhd0u_ZHCN_EN.create(attrs);
              component[lib.__].nonRootCompNodes.push(el);
              return (0,lib/* assertRenderResults */.KO)(el.__render());
            })()
          ),
          ...(() => {
            const attrs = (0,lib/* attrs */.Qb)({
              [lib.__]: {
                context: component[lib.__].context,
                slots: {
                  'default': function(component) {
                    const vm_1 = component;
                    return [
                    (() => {
                      const el = (0,lib/* createElementWithoutAttrs */.Eh)(
                        "option",
                        (() => {
                          const el = (0,lib/* createTextNode */.Eg)();
                          const fn_0 = () => {
                            (0,lib/* setText */.Hd)(el, vm_1.each?.name);
                          };
                          fn_0();
                          vm_1[lib.$$].__watch(["each","name"], fn_0, component[lib.$$]);
                          return el;
                        })()
                      );
                      const fn_0 = () => {
                        el.value = vm_1.each?.locale;
                      };
                      fn_0();
                      vm_1[lib.$$].__watch(["each","locale"], fn_0, component[lib.$$]);
                      component[lib.__].rootNodes.push(el);
                      return el;
                    })()
                    ];
                  }
                }
              },
              loop: undefined
            });
            const fn_0 = () => {
              attrs.loop = vm_0.locales;
            };
            fn_0();
            vm_0[lib.$$].__watch(["locales"], fn_0, component[lib.$$]);
            const el = lib/* ForComponent.create */.YQ.create(attrs);
            component[lib.__].nonRootCompNodes.push(el);
            return (0,lib/* assertRenderResults */.KO)(el.__render());
          })()
        );
        const fn_0 = () => {
          el.value = vm_0.locale;
        };
        fn_0();
        vm_0[lib.$$].__watch(["locale"], fn_0, component[lib.$$]);
        (0,lib/* addEvent */.vP)(el, 'change', function(...args) {
          vm_0.changeLocale(args[0].target.value)
        });
        return el;
      })()
    );
    component[lib.__].rootNodes.push(el);
    return el;
  })(),
  (() => {
    const el = (0,lib/* createElementWithoutAttrs */.Eh)(
      "p",
      ...(() => {
        const attrs = (0,lib/* attrs */.Qb)({
          [lib.__]: {
            context: component[lib.__].context,
            slots: {
              'default': function(component) {
                const vm_1 = component;
                return [
                ...(() => {
                  const attrs = (0,lib/* attrs */.Qb)({
                    [lib.__]: {
                      context: component[lib.__].context,
                    },
                    message: undefined
                  });
                  const fn_0 = () => {
                    attrs.message = vm_1.c?.[0];
                  };
                  fn_0();
                  vm_1[lib.$$].__watch(["c",0], fn_0, component[lib.$$]);
                  const el = printer_c/* Printer.create */.F.create(attrs);
                  component[lib.__].rootNodes.push(el);
                  return (0,lib/* assertRenderResults */.KO)(el.__render());
                })()
                ];
              }
            }
          },
        });
        const el = A2ntjjqf_ZHCN_EN.create(attrs);
        component[lib.__].nonRootCompNodes.push(el);
        return (0,lib/* assertRenderResults */.KO)(el.__render());
      })()
    );
    component[lib.__].rootNodes.push(el);
    return el;
  })(),
  (() => {
    const el = (0,lib/* createElementWithoutAttrs */.Eh)(
      "p",
      ...(() => {
        const attrs = (0,lib/* attrs */.Qb)({
          [lib.__]: {
            context: component[lib.__].context,
          },
        });
        const el = _29rjaqd/* T29rjaqd_ZHCN_EN.create */.ND.create(attrs);
        component[lib.__].nonRootCompNodes.push(el);
        return (0,lib/* assertRenderResults */.KO)(el.__render());
      })()
    );
    component[lib.__].rootNodes.push(el);
    return el;
  })(),
  ...(() => {
    const attrs = (0,lib/* attrs */.Qb)({
      [lib.__]: {
        context: component[lib.__].context,
        slots: {
          'default': function(component) {
            return [
            (() => {
              const el = (0,lib/* createElement */.az)(
                "div",
                {
                  class: app_module.nav
                },
                ...(() => {
                  const attrs = (0,lib/* attrs */.Qb)({
                    [lib.__]: {
                      context: component[lib.__].context,
                      slots: {
                        'default': function(component) {
                          const vm_1 = component;
                          return [
                          ...(() => {
                            const attrs = (0,lib/* attrs */.Qb)({
                              [lib.__]: {
                                context: component[lib.__].context,
                              },
                              text: undefined,
                              active: `active`,
                              to: `/a`
                            });
                            const fn_0 = () => {
                              attrs.text = vm_1.c?.[0];
                            };
                            fn_0();
                            vm_1[lib.$$].__watch(["c",0], fn_0, component[lib.$$]);
                            const el = RouterLinkComponent.create(attrs);
                            component[lib.__].rootNodes.push(el);
                            return (0,lib/* assertRenderResults */.KO)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                  });
                  const el = A1gp0cth_ZHCN_EN.create(attrs);
                  component[lib.__].nonRootCompNodes.push(el);
                  return (0,lib/* assertRenderResults */.KO)(el.__render());
                })(),
                ...(() => {
                  const attrs = (0,lib/* attrs */.Qb)({
                    [lib.__]: {
                      context: component[lib.__].context,
                      slots: {
                        'default': function(component) {
                          const vm_1 = component;
                          return [
                          ...(() => {
                            const attrs = (0,lib/* attrs */.Qb)({
                              [lib.__]: {
                                context: component[lib.__].context,
                              },
                              text: undefined,
                              active: `active`,
                              to: `/b`
                            });
                            const fn_0 = () => {
                              attrs.text = vm_1.c?.[0];
                            };
                            fn_0();
                            vm_1[lib.$$].__watch(["c",0], fn_0, component[lib.$$]);
                            const el = RouterLinkComponent.create(attrs);
                            component[lib.__].rootNodes.push(el);
                            return (0,lib/* assertRenderResults */.KO)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                  });
                  const el = A2jb9p2g_ZHCN_EN.create(attrs);
                  component[lib.__].nonRootCompNodes.push(el);
                  return (0,lib/* assertRenderResults */.KO)(el.__render());
                })(),
                ...(() => {
                  const attrs = (0,lib/* attrs */.Qb)({
                    [lib.__]: {
                      context: component[lib.__].context,
                      slots: {
                        'default': function(component) {
                          const vm_1 = component;
                          return [
                          ...(() => {
                            const attrs = (0,lib/* attrs */.Qb)({
                              [lib.__]: {
                                context: component[lib.__].context,
                              },
                              text: undefined,
                              active: `active`,
                              to: `/c`
                            });
                            const fn_0 = () => {
                              attrs.text = vm_1.c?.[0];
                            };
                            fn_0();
                            vm_1[lib.$$].__watch(["c",0], fn_0, component[lib.$$]);
                            const el = RouterLinkComponent.create(attrs);
                            component[lib.__].rootNodes.push(el);
                            return (0,lib/* assertRenderResults */.KO)(el.__render());
                          })()
                          ];
                        }
                      }
                    },
                  });
                  const el = A27pfrih_ZHCN_EN.create(attrs);
                  component[lib.__].nonRootCompNodes.push(el);
                  return (0,lib/* assertRenderResults */.KO)(el.__render());
                })()
              );
              component[lib.__].rootNodes.push(el);
              return el;
            })(),
            (() => {
              const el = (0,lib/* createElement */.az)(
                "div",
                {
                  class: `content`
                },
                ...(() => {
                  const attrs = (0,lib/* attrs */.Qb)({
                    [lib.__]: {
                      context: component[lib.__].context,
                    },
                  });
                  const el = RouterViewComponent.create(attrs);
                  component[lib.__].nonRootCompNodes.push(el);
                  return (0,lib/* assertRenderResults */.KO)(el.__render());
                })()
              );
              component[lib.__].rootNodes.push(el);
              return el;
            })()
            ];
          }
        }
      },
      baseHref: undefined,
      router: `hash`,
      routes: vm_0._routes
    });
    const fn_0 = () => {
      attrs.baseHref = vm_0.locale;
    };
    fn_0();
    vm_0[lib.$$].__watch(["locale"], fn_0, component[lib.$$]);
    const el = RouterComponent.create(attrs);
    component[lib.__].rootNodes.push(el);
    return (0,lib/* assertRenderResults */.KO)(el.__render());
  })()
  ];
}
;// CONCATENATED MODULE: ./src/app.c.js
/* @jinge-i18n-ignore */





const routes = [{
  path: '/a',
  // component: A
  async component() {
    return (await Promise.all(/* import() */[__webpack_require__.e(444), __webpack_require__.e(925)]).then(__webpack_require__.bind(__webpack_require__, 332))).A;
  }
}, {
  path: '/b',
  // component: B
  async component() {
    return (await __webpack_require__.e(/* import() */ 207).then(__webpack_require__.bind(__webpack_require__, 207))).B;
  }
}, {
  path: '/c',
  // component: C
  component() {
    return Promise.all(/* import() */[__webpack_require__.e(444), __webpack_require__.e(69)]).then(__webpack_require__.bind(__webpack_require__, 221)).then(module => {
      return module.C;
    });
  }
}, {
  path: '/(.*)',
  redirect: '/a'
}];


class App extends lib/* Component */.wA {
  static get template() {
    return app_c;
  }
  constructor(attrs) {
    super(attrs);const _jg0 = this[lib.$$].proxy;
    _jg0.locale = (0,jinge_i18n_lib/* getLocale */.Kd)();
    _jg0.locales = (0,lib.vm)([{
      name: '简体中文',
      locale: 'zh_cn'
    }, {
      name: 'English',
      locale: 'en'
    }]);
    _jg0._routes = routes;
  }

  changeLocale(locale) {
    history.pushState(null, '', location.pathname + '#/' + locale);
    this.locale = locale;
    (0,jinge_i18n_lib/* setLocale */.i_)(locale);
  }
}

;// CONCATENATED MODULE: ./src/index.js



(0,lib/* bootstrap */.Ux)(App, document.getElementById('root-app'));

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map