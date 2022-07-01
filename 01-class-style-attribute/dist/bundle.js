/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ../../jinge/lib/util/type.js
function typeOf(v) {
  return typeof v;
}
function type_isObject(v) {
  return v !== null && typeOf(v) === "object";
}
function type_isString(v) {
  return typeOf(v) === "string";
}
function type_isNumber(v) {
  return typeOf(v) === "number" && !Number.isNaN(v) && Number.isFinite(v);
}
function isUndefined(v) {
  return typeOf(v) === "undefined";
}
function type_isArray(v) {
  return Array.isArray(v);
}
function isBoolean(v) {
  return typeof v === "boolean" || v instanceof Boolean;
}
function isFunction(v) {
  return typeOf(v) === "function";
}
function isPromise(obj) {
  return type_isObject(obj) && isFunction(obj.then);
}


//# sourceMappingURL=type.js.map
;// CONCATENATED MODULE: ../../jinge/lib/util/array.js
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
;// CONCATENATED MODULE: ../../jinge/lib/util/common.js
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
;// CONCATENATED MODULE: ../../jinge/lib/util/setimm.js

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
  win.addEventListener("message", (event) => {
    if (event.source === window && type_isString(event.data) && event.data.startsWith(messagePrefix)) {
      runIfPresent(Number(event.data.slice(messagePrefix.length)));
    }
  }, false);
  registerImmediate = function(handle) {
    win.postMessage(messagePrefix + handle, "*");
  };
}
const setimm_setImmediate = win.setImmediate || setImmediateFallback;
const clearImmediate = win.clearImmediate || clearImmediateFallback;


//# sourceMappingURL=setimm.js.map
;// CONCATENATED MODULE: ../../jinge/lib/util/dom.js

function setText($element, text) {
  if (!type_isString(text)) {
    text = JSON.stringify(text);
  }
  $element.textContent = text;
}
function dom_createTextNode(text = "") {
  return document.createTextNode(type_isString(text) ? text : JSON.stringify(text));
}
function dom_createFragment(children) {
  const f = document.createDocumentFragment();
  children?.forEach((n) => {
    f.appendChild(type_isString(n) ? document.createTextNode(n) : n);
  });
  return f;
}
function appendChildren($parent, children) {
  $parent.appendChild(children.length > 1 ? dom_createFragment(children) : type_isString(children[0]) ? dom_createTextNode(children[0]) : children[0]);
}
function replaceChildren($parent, children, oldNode) {
  $parent.replaceChild(dom_createFragment(children), oldNode);
}
function removeAttribute($ele, attrName) {
  if (!attrName)
    return;
  if (type_isObject(attrName)) {
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
  if (type_isObject(attrName)) {
    for (const attrN in attrName) {
      setAttribute($ele, attrN, attrName[attrN]);
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
        setAttribute($el, an, attrs[an]);
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
  $e.appendChild(isString(child) ? dom_createTextNode(child) : child);
  return $e;
}
function dom_insertAfter($parent, newNode, referenceNode) {
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
  if (type_isArray(className)) {
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
  const segs = [];
  Object.keys(style).forEach((k) => {
    let v = style[k];
    if (isUndefined(v) || k === null)
      return;
    k = k.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
    if (type_isNumber(v) && !UNITLESS.has(k)) {
      v = `${v}px`;
    } else {
      v = v.toString();
    }
    segs.push(`${k}: ${v};`);
  });
  return segs.join(" ").trim();
}
function setStyleAttribute($ele, style) {
  style = style2str(style);
  if (!style)
    $ele.removeAttribute("style");
  else
    $ele.setAttribute("style", style);
}


//# sourceMappingURL=dom.js.map
;// CONCATENATED MODULE: ../../jinge/lib/util/index.js






//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../jinge/lib/vm/common.js

const common_$$ = Symbol("$$");
function isInnerObj(v) {
  const clazz = v.constructor;
  return clazz === RegExp || clazz === Date || clazz === Boolean;
}
function common_isViewModel(v) {
  return type_isObject(v) && common_$$ in v;
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
  return type_isString(propertyPath) ? propertyPath.indexOf(".") > 0 ? propertyPath.split(".") : [propertyPath] : type_isArray(propertyPath) ? propertyPath : [propertyPath];
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
;// CONCATENATED MODULE: ../../jinge/lib/vm/notify.js


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
;// CONCATENATED MODULE: ../../jinge/lib/vm/node.js


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
;// CONCATENATED MODULE: ../../jinge/lib/vm/core.js




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
        if (!type_isObject(v) || !(common_$$ in v)) {
          return;
        }
        removeParent(v[common_$$], this, prop);
      });
      this.__setters = null;
    }
    Object.getOwnPropertyNames(target).forEach((prop) => {
      const v = target[prop];
      if (!type_isObject(v) || !(common_$$ in v)) {
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
    const isPropArray = type_isArray(propertyPath);
    const i = hook.findIndex((it) => {
      return handler === it.handler && (isPropArray ? arrayEqual(propertyPath, it.prop) : propertyPath === it.prop);
    });
    if (i >= 0) {
      hook.splice(i, 1);
    }
  }
}


//# sourceMappingURL=core.js.map
;// CONCATENATED MODULE: ../../jinge/lib/vm/proxy.js



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
  let newValIsVM = type_isObject(value) && !isInnerObj(value);
  if (newValIsVM) {
    newValIsVM = common_$$ in value;
    if (assertVM && !newValIsVM) {
      throw new Error(`public property "${prop.toString()}" of ViewModel must also be ViewModel`);
    }
  }
  if (type_isObject(oldVal) && common_$$ in oldVal) {
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
    warn(`call setter "${prop.toString()}" after destroied, resources such as setInterval maybe not released before destroy. component:`, target);
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
  if (!type_isNumber(value)) {
    throw new Error("bad argument. array length must be validate number.");
  }
  const oldLen = target.length;
  if (oldLen > value) {
    for (let i = value; i < oldLen; i++) {
      const v = target[i];
      if (common_isViewModel(v)) {
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
    if (common_isViewModel(it)) {
      addParent(it[common_$$], target[common_$$], i);
    }
  });
  fn();
  target.forEach((it, i) => {
    if (common_isViewModel(it)) {
      removeParent(it[common_$$], target[common_$$], i);
    }
  });
  arrayNotifyItems(target, 0, target.length);
  return target[common_$$].proxy;
}
function wrapSubArray(arr, wrapEachItem = false) {
  const rtn = wrapProxy(arr, true);
  arr.forEach((it, i) => {
    if (common_isViewModel(it)) {
      addParent(it[common_$$], arr[common_$$], i);
    } else if (wrapEachItem) {
      arr[i] = createViewModel(it);
    }
  });
  return rtn;
}
function _arrayShiftOrUnshiftProp(arr, delta) {
  arr.forEach((el, i) => {
    if (!common_isViewModel(el))
      return;
    shiftParent(el[common_$$], arr[common_$$], i, delta);
  });
}
function _argAssert(arg, fn) {
  if (type_isObject(arg)) {
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
      if (common_isViewModel(el)) {
        removeParent(el[common_$$], target[common_$$], idx + i);
      }
    }
    const delta = args.length - delCount;
    if (delta !== 0) {
      for (let i = idx + delCount; i < target.length; i++) {
        const el = target[i];
        if (!common_isViewModel(el)) {
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
    if (common_isViewModel(el)) {
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
    if (common_isViewModel(el)) {
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
      if (common_isViewModel(it)) {
        removeParent(it[common_$$], target[common_$$], i);
      }
      target[i] = v;
      if (common_isViewModel(v)) {
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
  return vmCore.proxy = new Proxy(target, isArr ? ArrayProxyHandler : isPromise(target) ? PromiseProxyHandler : ObjectProxyHandler);
}
function wrapProp(parent, child, property) {
  if (!type_isObject(child) || isInnerObj(child)) {
    return;
  }
  if (!(common_$$ in child)) {
    parent[property] = child = createViewModel(child);
  }
  addParent(child[common_$$], parent[common_$$], property);
}
function createViewModel(target) {
  if (type_isObject(target)) {
    if (isInnerObj(target) || common_$$ in target) {
      return target;
    }
    const isArr = type_isArray(target);
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
function proxy_vm(target) {
  if (!type_isObject(target)) {
    throw new Error("vm() target must be object or array.");
  }
  return createViewModel(target);
}
function watch(vm2, propertyPath, handler) {
  vm2[$$].__watch(propertyPath, handler);
}
function unwatch(vm2, propertyPath, handler) {
  vm2[$$].__unwatch(propertyPath, handler);
}


//# sourceMappingURL=proxy.js.map
;// CONCATENATED MODULE: ../../jinge/lib/core/messenger.js
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
;// CONCATENATED MODULE: ../../jinge/lib/core/style.js

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
;// CONCATENATED MODULE: ../../jinge/lib/core/component.js
var _a;





initStyle();
var component_ComponentStates = /* @__PURE__ */ ((ComponentStates2) => {
  ComponentStates2[ComponentStates2["INITIALIZE"] = 0] = "INITIALIZE";
  ComponentStates2[ComponentStates2["RENDERED"] = 1] = "RENDERED";
  ComponentStates2[ComponentStates2["WILLDESTROY"] = 2] = "WILLDESTROY";
  ComponentStates2[ComponentStates2["DESTROIED"] = 3] = "DESTROIED";
  return ComponentStates2;
})(component_ComponentStates || {});
var ContextStates = /* @__PURE__ */ ((ContextStates2) => {
  ContextStates2[ContextStates2["UNTOUCH"] = 0] = "UNTOUCH";
  ContextStates2[ContextStates2["TOUCHED"] = 1] = "TOUCHED";
  ContextStates2[ContextStates2["UNTOUCH_FREEZED"] = 2] = "UNTOUCH_FREEZED";
  ContextStates2[ContextStates2["TOUCHED_FREEZED"] = 3] = "TOUCHED_FREEZED";
  return ContextStates2;
})(ContextStates || {});
const component_ = Symbol("__");
function component_isComponent(v) {
  return component_ in v;
}
function component_assertRenderResults(renderResults) {
  if (!type_isArray(renderResults) || renderResults.length === 0) {
    throw new Error("Render results of component is empty");
  }
  return renderResults;
}
function component_wrapAttrs(target) {
  if (!type_isObject(target) || type_isArray(target)) {
    throw new Error("attrs() traget must be plain object.");
  }
  return createAttributes(target);
}
class component_Component extends Messenger {
  constructor(attrs) {
    if (!type_isObject(attrs) || !(common_$$ in attrs)) {
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
      const f = (p) => {
        if (p)
          console.log("fffff", attrN);
        $proxy[attrN] = attrs[attrN];
      };
      f();
      attrs[common_$$].__watch(attrN, f);
    });
  }
  static create(attrs) {
    const isObj = type_isObject(attrs);
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
    const deregEvtFn = registerEvent($el, eventName, ($event) => {
      listener.call(this, $event);
    }, capture);
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
    if (ignoredEventNames && !type_isArray(ignoredEventNames)) {
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
        const deregFn = registerEvent(targetEl, eventName, opts && (opts.stop || opts.prevent) ? ($evt) => {
          opts.stop && $evt.stopPropagation();
          opts.prevent && $evt.preventDefault();
          handler.call(this, $evt);
        } : ($evt) => {
          handler.call(this, $evt);
        }, opts);
        this.__addDeregisterFn(deregFn);
      });
    });
  }
  get __transitionDOM() {
    const el = this[component_].rootNodes[0];
    return component_isComponent(el) ? el.__transitionDOM : el;
  }
  get __firstDOM() {
    const el = this[component_].rootNodes[0];
    return component_isComponent(el) ? el.__firstDOM : el;
  }
  get __lastDOM() {
    const rns = this[component_].rootNodes;
    const el = rns[rns.length - 1];
    return component_isComponent(el) ? el.__lastDOM : el;
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
    const rr = component_assertRenderResults(this.__render());
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
        if (type_isArray(rns)) {
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
      if (component_isComponent(node)) {
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
      if (component_isComponent(n))
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
    ntMap.set(handler, setimm_setImmediate(() => {
      ntMap.delete(handler);
      handler.call(this);
    }));
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
        throw new Error(`Contenxt with key: ${key.toString()} is exist. Pass third argument forceOverride=true to override it.`);
      }
    }
    this[component_].context[key] = value;
  }
  __getContext(key) {
    return this[component_].context ? this[component_].context[key] : null;
  }
  __setRef(ref, el, relatedComponent) {
    let rns = this[component_].refs;
    if (!rns) {
      this[component_].refs = rns = /* @__PURE__ */ new Map();
    }
    let elOrArr = rns.get(ref);
    if (!elOrArr) {
      rns.set(ref, el);
    } else if (type_isArray(elOrArr)) {
      elOrArr.push(el);
    } else {
      elOrArr = [elOrArr, el];
      rns.set(ref, elOrArr);
    }
    const isComp = component_isComponent(el);
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
      warn(`Warning: call __getRef before component '${this.constructor.name}' rendered will get nothing. see https://[TODO]`);
    }
    return this[component_].refs ? this[component_].refs.get(ref) : null;
  }
  __afterRender() {
  }
  __beforeDestroy() {
  }
}
_a = component_, component_, common_$$;
component_Component[_a] = true;


//# sourceMappingURL=component.js.map
;// CONCATENATED MODULE: ../../jinge/lib/core/transition.js
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
;// CONCATENATED MODULE: ../../jinge/lib/components/class.js




function loopOperateClass(el, isAddOperate, domClass) {
  if (isComponent(el)) {
    el[__].rootNodes.forEach((ce) => loopOperateClass(ce, isAddOperate, domClass));
  } else if (isAddOperate) {
    el.classList.add(domClass);
  } else {
    el.classList.remove(domClass);
  }
}
class class_ToggleClassComponent extends (/* unused pure expression or super */ null && (Component)) {
  constructor(attrs) {
    if (!attrs || !isObject(attrs.class)) {
      throw new Error('<toggle-class> component require "class" attribute to be Object.');
    }
    super(attrs);const _jg0 = this[$$_jg0402].proxy;const f2_jg0402 = () => {
    _jg0.domClass = attrs.class; }; f2_jg0402(); attrs[$$_jg0402].__watch("class", f2_jg0402);const f3_jg0402 = () => {
    _jg0.transition = !!attrs.transition; }; f3_jg0402(); attrs[$$_jg0402].__watch("transition", f3_jg0402);
    _jg0._t = null;
    _jg0._i = -1;
    _jg0[$$].__watch("domClass.**", () => {
      _jg0.__updateIfNeed();
    });
  }
  __render() {
    const rr = super.__render();
    this.__update(true);
    return rr;
  }
  __beforeDestroy() {
    this._t = null;
  }
  __update(first) {
    const el = this.transition ? this.__transitionDOM : null;
    if (el && el.nodeType !== Node.ELEMENT_NODE) {
      return;
    }
    if (this.transition && !this._t) {
      this._t = /* @__PURE__ */ new Map();
    }
    const cs = this.domClass;
    Object.keys(cs).forEach((k) => {
      const v = cs[k];
      if (!this.transition) {
        loopOperateClass(this, !!v, k);
        return;
      }
      if (first) {
        this._t.set(k, [
          v ? TransitionStates.ENTERED : TransitionStates.LEAVED,
          null
        ]);
        if (v) {
          el.classList.add(k);
        } else {
          el.classList.remove(k);
        }
        return;
      }
      const t = this._t.get(k);
      if (!t) {
        console.error("Unsupport <toogle-class> attribute. see https://todo");
        return;
      }
      const s = t[0];
      if (v && s <= TransitionStates.ENTERED || !v && s >= TransitionStates.LEAVING) {
        return;
      }
      if (s === (v ? TransitionStates.LEAVING : TransitionStates.ENTERING)) {
        el.classList.remove(k + (v ? "-leave-active" : "-enter-active"));
        el.classList.remove(k + (v ? "-leave" : "-enter"));
        removeEvent(el, "transitionend", t[1]);
        removeEvent(el, "animationend", t[1]);
        t[1] = null;
        this.__notify("transition", v ? "leave-cancelled" : "enter-cancelled", k, el);
      }
      const classOfStart = k + (v ? "-enter" : "-leave");
      const classOfActive = k + (v ? "-enter-active" : "-leave-active");
      el.classList.add(classOfStart);
      getDurationType(el);
      el.classList.add(classOfActive);
      const tsEndName = getDurationType(el);
      if (!tsEndName) {
        el.classList.remove(classOfStart);
        el.classList.remove(classOfActive);
        t[0] = v ? TransitionStates.ENTERED : TransitionStates.LEAVED;
        if (v) {
          el.classList.add(k);
        } else {
          el.classList.remove(k);
        }
        return;
      }
      const onEnd = () => {
        removeEvent(el, "transitionend", onEnd);
        removeEvent(el, "animationend", onEnd);
        el.classList.remove(classOfStart);
        el.classList.remove(classOfActive);
        t[1] = null;
        t[0] = v ? TransitionStates.ENTERED : TransitionStates.LEAVED;
        if (v) {
          el.classList.add(k);
        } else {
          el.classList.remove(k);
        }
        this.__notify("transition", v ? "after-enter" : "after-leave", k, el);
      };
      t[0] = v ? TransitionStates.ENTERING : TransitionStates.LEAVING;
      t[1] = onEnd;
      addEvent(el, tsEndName, onEnd);
      this.__notify("transition", v ? "before-enter" : "before-leave", k, el);
      setImmediate(() => {
        this.__notify("transition", v ? "enter" : "leave", k, el);
      });
    });
  }
}


//# sourceMappingURL=class.js.map
;// CONCATENATED MODULE: ../../jinge/lib/components/for.js



class ForEachComponent extends (/* unused pure expression or super */ null && (Component)) {
  constructor(attrs2, item, index, isLast) {
    super(attrs2);const _jg0 = this[$$_jg0402].proxy;
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
    return this[__].slots.default(this);
  }
}
function createEl(item, i, isLast, itemRenderFn, context) {
  return new ForEachComponent(attrs({
    [__]: {
      context,
      slots: {
        default: itemRenderFn
      }
    }
  }), item, i, isLast)[$$].proxy;
}
function appendRenderEach(item, i, isLast, itemRenderFn, roots, context) {
  const el = createEl(item, i, isLast, itemRenderFn, context);
  roots.push(el);
  return el.__render();
}
function _prepareKey(item, i, keyMap, keyName) {
  const key = keyName === "each" ? item : keyName(item);
  if (keyMap.has(key)) {
    console.error(`loop items [${i}] and [${keyMap.get(key)}] of <for> component both have key '${key}', dulplicated key may cause update error.`);
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
  el[__].rootNodes.forEach((node) => {
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
  return isString(p) && p !== "length" && /^\d+$/.test(p) ? Number(p) : p;
}
class ForComponent extends (/* unused pure expression or super */ null && (Component)) {
  constructor(attrs2) {
    if (attrs2.key && !/^(index|each(.[\w\d$_]+)*)$/.test(attrs2.key)) {
      throw new Error('Value of "key" attribute of <for> component is invalidate. See https://[todo]');
    }
    super(attrs2);const _jg0 = this[$$_jg0402].proxy;
    if (!isViewModel(attrs2.loop)) {
      throw new Error("require ViewModelArray");
    }const f3_jg0402 = () => {
    _jg0.loop = attrs2.loop; }; f3_jg0402(); attrs2[$$_jg0402].__watch("loop", f3_jg0402);
    const kn = attrs2.key || "index";
    _jg0._keyName = kn;
    _jg0._length = 0;
    _jg0._keys = null;
    _jg0._waitingUpdate = false;
    if (kn !== "index" && kn !== "each") {
      _jg0._keyName = new Function("each", `return ${kn}`);
      const propCount = kn.split(".").length + 1;
      _jg0[$$].__watch("loop.*." + kn.slice(5), (propPath) => {
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
    _jg0[$$].__watch("loop.*", (propPath) => {
      if (_jg0[__].state !== ComponentStates.RENDERED || propPath.length !== 2 || _jg0._waitingUpdate) {
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
    const roots = this[__].rootNodes;
    const itemRenderFn = this[__].slots?.default;
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
    return renderItems(items, itemRenderFn, roots, this._keys, keyName, this[__].context);
  }
  _updateItem(index) {
    const items = this.loop;
    const roots = this[__].rootNodes;
    if (!isArray(items) || index >= roots.length)
      return;
    const keys = this._keys;
    const item = items[index];
    const oldEl = roots[index];
    if (oldEl.each === item) {
      return;
    }
    const itemRenderFn = this[__].slots?.default;
    if (!itemRenderFn)
      return;
    const keyName = this._keyName;
    if (keyName !== "index") {
      const newKey = keyName === "each" ? item : keyName(item);
      const oldKey = keys[index];
      if (newKey !== oldKey) {
        const $fd = oldEl.__firstDOM;
        const newEl = createEl(item, index, oldEl.isLast, itemRenderFn, this[__].context);
        const rr = assertRenderResults(newEl.__render());
        $fd.parentNode.insertBefore(rr.length > 1 ? createFragment(rr) : rr[0], $fd);
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
    const itemRenderFn = this[__].slots?.default;
    if (!itemRenderFn)
      return;
    const newItems = isArray(this.loop) ? this.loop : [];
    const roots = this[__].rootNodes;
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
    const ctx = this[__].context;
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
            $f = createFragment();
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
      const rs = renderItems(newItems, itemRenderFn, roots, oldKeys, keyName, this[__].context);
      insertAfter($parent, createFragment(rs), firstEl);
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
            $f2 = createFragment();
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
          $f = createFragment();
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
    this[__].rootNodes = newRoots;
    this._keys = newKeys;
  }
}


//# sourceMappingURL=for.js.map
;// CONCATENATED MODULE: ../../jinge/lib/vm/index.js






//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../jinge/lib/components/hide.js



class HideComponent extends (/* unused pure expression or super */ null && (ToggleClassComponent)) {
  constructor(attrs) {
    attrs.class = vm({
      "jg-hide": attrs.test
    });
    attrs[$$].__watch("test", () => {
      attrs.class["jg-hide"] = attrs.test;
    });
    super(attrs);const _jg0 = this[$$_jg0402].proxy;
  }
}


//# sourceMappingURL=hide.js.map
;// CONCATENATED MODULE: ../../jinge/lib/components/html.js


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
;// CONCATENATED MODULE: ../../jinge/lib/components/if.js



function if_createEl(renderFn, context) {
  const attrs = wrapAttrs({
    [__]: {
      context,
      slots: {
        default: renderFn
      }
    }
  });
  return Component.create(attrs);
}
function renderSwitch(component) {
  const value = component._currentValue;
  const acs = component[__].slots;
  if (component.transition && acs) {
    component._transitionMap = /* @__PURE__ */ new Map();
    for (const k in acs) {
      component._transitionMap.set(k, [
        k === value ? TransitionStates.ENTERED : TransitionStates.LEAVED,
        null
      ]);
    }
    component._previousValue = value;
    component._onEndHandler = component.onTransitionEnd.bind(component);
  }
  const renderFn = acs ? acs[value] : null;
  const roots = component[__].rootNodes;
  if (!renderFn) {
    roots.push(document.createComment("empty"));
    return roots;
  }
  const el = if_createEl(renderFn, component[__].context);
  roots.push(el);
  return el.__render();
}
function doUpdate(component) {
  const roots = component[__].rootNodes;
  const el = roots[0];
  const isComp = isComponent(el);
  const firstDOM = isComp ? el.__firstDOM : el;
  const parentDOM = (isComp ? firstDOM : el).parentNode;
  const renderFn = component[__].slots?.[component._currentValue];
  if (renderFn) {
    const newEl = if_createEl(renderFn, component[__].context);
    const nodes = assertRenderResults(newEl.__render());
    parentDOM.insertBefore(nodes.length > 1 ? createFragment(nodes) : nodes[0], firstDOM);
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
  removeEvent(el, "transitionend", onEnd);
  removeEvent(el, "animationend", onEnd);
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
  getDurationType(el);
  el.classList.add(classOfActive);
  const tsEndName = getDurationType(el);
  if (!tsEndName) {
    onEnd();
    return;
  }
  t[0] = e ? TransitionStates.ENTERING : TransitionStates.LEAVING;
  addEvent(el, tsEndName, onEnd);
  component.__notify("transition", e ? "before-enter" : "before-leave", el);
  setImmediate(() => {
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
      pv === "else" ? TransitionStates.LEAVED : TransitionStates.ENTERED,
      null
    ];
    component._transitionMap.set(pv, pt);
  }
  if (pt[0] === TransitionStates.ENTERING) {
    if (value === pv)
      return;
    cancelTs(pt, tn, true, component);
    startTs(pt, tn, false, component);
  } else if (pt[0] === TransitionStates.LEAVING) {
    if (value !== pv)
      return;
    cancelTs(pt, tn, false, component);
    startTs(pt, tn, true, component);
  } else if (pt[0] === TransitionStates.ENTERED) {
    pt[1] = component.__transitionDOM;
    startTs(pt, tn, false, component);
  } else if (pt[0] === TransitionStates.LEAVED) {
    pt[1] = component.__transitionDOM;
    startTs(pt, tn, true, component);
  }
}
function updateSwitch(component) {
  if (!isComponent(component[__].rootNodes[0]) && (!component[__].slots || !component[__].slots[component._currentValue])) {
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
  const e = pt[0] === TransitionStates.ENTERING;
  const el = pt[1];
  if (el.nodeType === Node.ELEMENT_NODE) {
    removeEvent(el, "transitionend", component._onEndHandler);
    removeEvent(el, "animationend", component._onEndHandler);
    el.classList.remove(tn + (e ? "-enter" : "-leave"));
    el.classList.remove(tn + (e ? "-enter-active" : "-leave-active"));
    component.__notify("transition", e ? "after-enter" : "after-leave");
  }
  pt[0] = e ? TransitionStates.ENTERED : TransitionStates.LEAVED;
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
    ct[0] = TransitionStates.ENTERED;
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
        removeEvent(el, "transitionend", component._onEndHandler);
        removeEvent(el, "animationend", component._onEndHandler);
      }
    });
    component._transitionMap = null;
  }
}
class IfComponent extends (/* unused pure expression or super */ null && (Component)) {
  constructor(attrs) {
    super(attrs);const _jg0 = this[$$_jg0402].proxy;
    _jg0._currentValue = "default";
    _jg0._onEndHandler = null;
    _jg0._transitionMap = null;
    _jg0._previousValue = null;const f5_jg0402 = () => {
    _jg0.expect = attrs.expect; }; f5_jg0402(); attrs[$$_jg0402].__watch("expect", f5_jg0402);const f6_jg0402 = () => {
    _jg0.transition = attrs.transition; }; f6_jg0402(); attrs[$$_jg0402].__watch("transition", f6_jg0402);
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
;// CONCATENATED MODULE: ../../jinge/lib/components/parameter.js


class ParameterComponent extends (/* unused pure expression or super */ null && (Component)) {
  constructor(attrs, params) {
    super(attrs);const _jg0 = this[$$_jg0402].proxy;
    params.forEach((p) => {
      _jg0[p] = attrs[p];
      attrs[$$].__watch(p, () => {
        _jg0[p] = attrs[p];
      });
    });
  }
}


//# sourceMappingURL=parameter.js.map
;// CONCATENATED MODULE: ../../jinge/lib/components/log.js

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
;// CONCATENATED MODULE: ../../jinge/lib/core/render_fns.js


function render_fns_emptyRenderFn(component) {
  const el = document.createComment("empty");
  component[__].rootNodes.push(el);
  return [el];
}
function errorRenderFn(component) {
  const el = createElement("span", {
    style: "color: red !important;"
  });
  el.textContent = "template parsing failed! please check webpack log.";
  component[__].rootNodes.push(el);
  return el;
}
function textRenderFn(component, txtContent) {
  const el = createTextNode(txtContent);
  component[__].rootNodes.push(el);
  return el;
}


//# sourceMappingURL=render_fns.js.map
;// CONCATENATED MODULE: ../../jinge/lib/components/dynamic.js




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
;// CONCATENATED MODULE: ../../jinge/lib/components/index.js









//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../jinge/lib/core/bootstrap.js
function bootstrap(ComponentClazz, dom, attrs) {
  const app = ComponentClazz.create(attrs);
  app.__renderToDOM(dom, dom !== document.body);
  return app;
}


//# sourceMappingURL=bootstrap.js.map
;// CONCATENATED MODULE: ../../jinge/lib/core/index.js







//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../jinge/lib/index.js





//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./a.c.html

/* harmony default export */ function a_c(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = createElementWithoutAttrs(
      "p",
      (() => {
        const el = dom_createTextNode();
        const fn_0 = () => {
          setText(el, `Component A ${vm_0.class}`);
        };
        fn_0();
        vm_0[common_$$].__watch(["class"], fn_0, component[common_$$]);
        return el;
      })()
    );
    const fn_0 = () => {
      setClassAttribute(el, vm_0.class);
    };
    fn_0();
    vm_0[common_$$].__watch(["class"], fn_0, component[common_$$]);
    component[component_].rootNodes.push(el);
    return el;
  })()
  ];
}
;// CONCATENATED MODULE: ./a.c.js




class A extends component_Component {
  static template = a_c;
}

;// CONCATENATED MODULE: ./b.c.html

/* harmony default export */ function b_c(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = createElementWithoutAttrs(
      "p",
      `Component B, use passed className plus self className`,
      (() => {
        const el = createElementWithoutAttrs(
          "button",
          `TEST`
        );
        dom_addEvent(el, 'click', function(...args) {
          vm_0.bold = !vm_0.bold
        });
        return el;
      })()
    );
    const fn_0 = () => {
      setClassAttribute(el, proxy_vm([vm_0.class, 'blue', { bold: vm_0.bold }]));
    };
    fn_0();
    vm_0[common_$$].__watch(["class"], fn_0, component[common_$$]);
    vm_0[common_$$].__watch(["bold"], fn_0, component[common_$$]);
    component[component_].rootNodes.push(el);
    return el;
  })()
  ];
}
;// CONCATENATED MODULE: ./b.c.js




class B extends component_Component {
  static template = b_c;
}

;// CONCATENATED MODULE: ./c.c.html

/* harmony default export */ function c_c(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = createElementWithoutAttrs(
      "p",
      `Component C, re-assign this.class`
    );
    const fn_0 = () => {
      setClassAttribute(el, vm_0.class);
    };
    fn_0();
    vm_0[common_$$].__watch(["class"], fn_0, component[common_$$]);
    const fn_1 = () => {
      setStyleAttribute(el, vm_0.style);
    };
    fn_1();
    vm_0[common_$$].__watch(["style"], fn_1, component[common_$$]);
    component[component_].rootNodes.push(el);
    return el;
  })()
  ];
}
;// CONCATENATED MODULE: ./c.c.js




class C extends component_Component {
  static template = c_c;
  constructor(attrs) {
    super(attrs);const _jg0 = this[common_$$].proxy;const f1_jg0402 = () => {
    _jg0.class = `${attrs.class} italic`; }; f1_jg0402(); attrs[common_$$].__watch("class", f1_jg0402);
  }
}

;// CONCATENATED MODULE: ./app.c.html




/* harmony default export */ function app_c(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = dom_createElement(
      "div",
      {
        class: `red`
      },
      `class="red"`
    );
    component[component_].rootNodes.push(el);
    return el;
  })(),
  (() => {
    const el = createElementWithoutAttrs(
      "div",
      `:class="{ red: red }"`,
      (() => {
        const el = createElementWithoutAttrs(
          "button",
          `TEST`
        );
        dom_addEvent(el, 'click', function(...args) {
          vm_0.red = !vm_0.red
        });
        return el;
      })()
    );
    const fn_0 = () => {
      setClassAttribute(el, proxy_vm({ red: vm_0.red }));
    };
    fn_0();
    vm_0[common_$$].__watch(["red"], fn_0, component[common_$$]);
    component[component_].rootNodes.push(el);
    return el;
  })(),
  (() => {
    const el = createElementWithoutAttrs(
      "div",
      `:class="['red', {bold: bold}]"`,
      (() => {
        const el = createElementWithoutAttrs(
          "button",
          `TEST`
        );
        dom_addEvent(el, 'click', function(...args) {
          vm_0.bold=!vm_0.bold
        });
        return el;
      })()
    );
    const fn_0 = () => {
      setClassAttribute(el, proxy_vm(['blue', {bold: vm_0.bold}]));
    };
    fn_0();
    vm_0[common_$$].__watch(["bold"], fn_0, component[common_$$]);
    component[component_].rootNodes.push(el);
    return el;
  })(),
  (() => {
    const el = createElementWithoutAttrs(
      "div",
      `style="color: red; font-size: \${fsize}px;`,
      (() => {
        const el = createElementWithoutAttrs(
          "button",
          `TEST`
        );
        dom_addEvent(el, 'click', function(...args) {
          vm_0.fsize = (vm_0.fsize || 16) + 1
        });
        return el;
      })()
    );
    const fn_0 = () => {
      setStyleAttribute(el, `color: red; font-size: ${vm_0.fsize || 16}px;`);
    };
    fn_0();
    vm_0[common_$$].__watch(["fsize"], fn_0, component[common_$$]);
    component[component_].rootNodes.push(el);
    return el;
  })(),
  (() => {
    const el = createElementWithoutAttrs(
      "div",
      `:style="{ color: 'red', fontSize: fsize }"`,
      (() => {
        const el = createElementWithoutAttrs(
          "button",
          `TEST`
        );
        dom_addEvent(el, 'click', function(...args) {
          vm_0.fsize = (vm_0.fsize || 16) - 1
        });
        return el;
      })()
    );
    const fn_0 = () => {
      setStyleAttribute(el, proxy_vm({ color: 'red', fontSize: vm_0.fsize }));
    };
    fn_0();
    vm_0[common_$$].__watch(["fsize"], fn_0, component[common_$$]);
    component[component_].rootNodes.push(el);
    return el;
  })(),
  (() => {
    const el = createElementWithoutAttrs(
      "div",
      `:style="{ color: clr }`,
      (() => {
        const el = createElementWithoutAttrs(
          "button",
          `TEST`
        );
        dom_addEvent(el, 'click', function(...args) {
          vm_0.clr = vm_0.getClr()
        });
        return el;
      })()
    );
    const fn_0 = () => {
      setStyleAttribute(el, proxy_vm({ color: vm_0.clr }));
    };
    fn_0();
    vm_0[common_$$].__watch(["clr"], fn_0, component[common_$$]);
    component[component_].rootNodes.push(el);
    return el;
  })(),
  ...(() => {
    const attrs = component_wrapAttrs({
      [component_]: {
        context: component[component_].context,
      },
      class: undefined
    });
    const fn_0 = () => {
      attrs.class = class2str(`${vm_0.red ? 'red' : ''}`);
    };
    fn_0();
    vm_0[common_$$].__watch(["red"], fn_0, component[common_$$]);
    const el = A.create(attrs);
    component[component_].rootNodes.push(el);
    return component_assertRenderResults(el.__render());
  })(),
  ...(() => {
    const attrs = component_wrapAttrs({
      [component_]: {
        context: component[component_].context,
      },
      class: `italic`
    });
    const el = B.create(attrs);
    component[component_].rootNodes.push(el);
    return component_assertRenderResults(el.__render());
  })(),
  ...(() => {
    const attrs = component_wrapAttrs({
      [component_]: {
        context: component[component_].context,
      },
      class: undefined,
      style: undefined
    });
    const fn_0 = () => {
      attrs.class = class2str(proxy_vm({ bold: vm_0.bold, red: vm_0.red }));
    };
    fn_0();
    vm_0[common_$$].__watch(["bold"], fn_0, component[common_$$]);
    vm_0[common_$$].__watch(["red"], fn_0, component[common_$$]);
    const fn_1 = () => {
      attrs.style = style2str(proxy_vm({color: vm_0.clr, fontSize: vm_0.fsize}));
    };
    fn_1();
    vm_0[common_$$].__watch(["clr"], fn_1, component[common_$$]);
    vm_0[common_$$].__watch(["fsize"], fn_1, component[common_$$]);
    const el = C.create(attrs);
    component[component_].rootNodes.push(el);
    return component_assertRenderResults(el.__render());
  })()
  ];
}
;// CONCATENATED MODULE: ./app.c.js




class App extends component_Component {
  static get template() {
    return app_c;
  }
  constructor(args) {
    super(args);const _jg0 = this[common_$$].proxy;
  }
  getClr() {
    return '#' + (Math.random() * 0xffffff | 0).toString(16);
  }
}

;// CONCATENATED MODULE: ./index.js


bootstrap(App, document.getElementById('root-app'));

/******/ })()
;
//# sourceMappingURL=bundle.js.map