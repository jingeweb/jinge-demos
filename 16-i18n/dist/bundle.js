/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ../../jinge/lib/util/type.js
function typeOf(v) {
  return typeof v;
}
function isObject(v) {
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
  return isObject(obj) && isFunction(obj.then);
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
const setImmediate = win.setImmediate || setImmediateFallback;
const clearImmediate = win.clearImmediate || clearImmediateFallback;


//# sourceMappingURL=setimm.js.map
;// CONCATENATED MODULE: ../../jinge/lib/util/dom.js

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
function setAttribute($ele, attrName, attrValue) {
  if (!attrName)
    return;
  if (isObject(attrName)) {
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
function addEvent($element, eventName, handler, capture) {
  isUndefined(capture) && (capture = eventName.startsWith("touch") ? {
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
  if (isString(className)) {
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
  if (isString(style))
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
;// CONCATENATED MODULE: ../../jinge/lib/util/index.js






//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../jinge/lib/vm/common.js

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
  const imm = setImmediate(() => {
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
  if (!type_isNumber(value)) {
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
function vm(target) {
  if (!isObject(target)) {
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
;// CONCATENATED MODULE: ../../jinge/lib/core/component.js
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
const component_ = Symbol("__");
function component_isComponent(v) {
  return component_ in v;
}
function assertRenderResults(renderResults) {
  if (!type_isArray(renderResults) || renderResults.length === 0) {
    throw new Error("Render results of component is empty");
  }
  return renderResults;
}
function component_wrapAttrs(target) {
  if (!isObject(target) || type_isArray(target)) {
    throw new Error("attrs() traget must be plain object.");
  }
  return createAttributes(target);
}
class component_Component extends Messenger {
  /**
   * ATTENTION!!!
   *
   * Don't use constructor directly, use static factory method `create(attrs)` instead.
   */
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
  /**
   * store deregisterFn and auto call it when component is being destroy.
   */
  __addDeregisterFn(deregisterFn) {
    let deregs = this[component_].deregFns;
    if (!deregs) {
      this[component_].deregFns = deregs = /* @__PURE__ */ new Set();
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
  /**
   * Get first rendered DOM Node after Component is rendered.
   *
   * 按从左往右从上到下的深度遍历，找到的第一个 DOM 节点。
   */
  get __firstDOM() {
    const el = this[component_].rootNodes[0];
    return component_isComponent(el) ? el.__firstDOM : el;
  }
  /**
   * Get last rendered DOM Node after Component is rendered.
   *
   * 按从右往左，从上到下的深度遍历，找到的第一个 DOM 节点（相对于从左到右的顺序是最后一个 DOM 节点）。
   */
  get __lastDOM() {
    const rns = this[component_].rootNodes;
    const el = rns[rns.length - 1];
    return component_isComponent(el) ? el.__lastDOM : el;
  }
  /**
   * 组件的实际渲染函数，渲染模板或默认插槽。
   * 该函数可被子组件重载，进而覆盖渲染逻辑。
   * 该函数可以是同步或异步函数，但通常推荐使用同步函数，将异步初始化逻辑放到 __beforeRender 生命周期函数中。
   */
  __render() {
    const Clazz = this.constructor;
    let renderFn = Clazz.template;
    if (!renderFn && this[component_].slots) {
      renderFn = this[component_].slots.default;
    }
    if (!isFunction(renderFn)) {
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
        if (type_isArray(rns)) {
          arrayRemove(rns, info.node || this);
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
    for (const component of this[component_].nonRootCompNodes) {
      component.__destroy(false);
    }
    let $parent;
    for (const node of this[component_].rootNodes) {
      if (component_isComponent(node)) {
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
    this[component_].passedAttrs[common_$$].__notifiable = true;
    this[common_$$].__notifiable = true;
    for (const n of this[component_].rootNodes) {
      if (component_isComponent(n)) {
        n.__handleAfterRender();
      }
    }
    for (const n of this[component_].nonRootCompNodes) {
      n.__handleAfterRender();
    }
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
      this.__update();
      return;
    }
    if (!isFunction(handler)) {
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
    let ntMap = this[component_].upNextMap;
    if (!ntMap)
      ntMap = this[component_].upNextMap = /* @__PURE__ */ new Map();
    if (ntMap.has(handler)) {
      return;
    }
    ntMap.set(
      handler,
      setImmediate(() => {
        ntMap.delete(handler);
        handler.call(this);
      })
    );
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
  /**
   * This method is used for compiler generated code.
   * Do not use it manually.
   */
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
  /**
   * Get child node(or nodes) marked by 'ref:' attribute in template
   */
  __getRef(ref) {
    if (this[component_].state !== 1 /* RENDERED */) {
      warn(
        `Warning: call __getRef before component '${this.constructor.name}' rendered will get nothing. see https://[TODO]`
      );
    }
    return this[component_].refs?.get(ref);
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
_a = component_, component_, common_$$;
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
component_Component[_a] = true;


//# sourceMappingURL=component.js.map
;// CONCATENATED MODULE: ../../jinge/lib/components/for.js



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
  el[component_].rootNodes.forEach((node) => {
    if (component_isComponent(node)) {
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
    if (isUndefined(attrs2.loop) || attrs2.loop === null || isViewModel(attrs2.loop)) {
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
        if (!type_isArray(items) || items.length === 0)
          return;
        const p = _parseIndexPath(propPath[1]);
        if (!type_isNumber(p) || p >= items.length) {
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
      } else if (type_isNumber(p)) {
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
    if (!type_isArray(items) || items.length === 0) {
      roots.push(document.createComment("empty"));
      return roots;
    }
    this._length = items.length;
    return renderItems(items, itemRenderFn, roots, this._keys, keyName, this[component_].context);
  }
  _updateItem(index) {
    const items = this.loop;
    const roots = this[component_].rootNodes;
    if (!type_isArray(items) || index >= roots.length)
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
        const rr = newEl.__render();
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
    const newItems = type_isArray(this.loop) ? this.loop : [];
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
          const doms = appendRenderEach(newItems[i], i, i === nl - 1, itemRenderFn, roots, ctx);
          doms.forEach((el) => {
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
            $f2 = dom_createFragment();
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
          $f = dom_createFragment();
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
    this[component_].rootNodes = newRoots;
    this._keys = newKeys;
  }
}


//# sourceMappingURL=for.js.map
;// CONCATENATED MODULE: ../../jinge/lib/core/transition.js
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
;// CONCATENATED MODULE: ../../jinge/lib/components/transition.js



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
  let imm = setImmediate(() => {
    imm = 0;
    const dt = getDurationType(el);
    if (!dt) {
      comp.__notify(`after-${type}`, el);
      return;
    }
    const clear = () => {
      cancel = void 0;
      comp._t = void 0;
      removeEvent(el, dt, onEnd);
      el.classList.remove(activeClass, toClass);
    };
    const onEnd = () => {
      clear();
      comp.__notify(`after-${type}`, el);
    };
    addEvent(el, dt, onEnd);
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
      clearImmediate(imm);
    if (cancel)
      cancel();
  };
}
class transition_TransitionComponent extends component_Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[common_$$].proxy;
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
;// CONCATENATED MODULE: ../../jinge/lib/components/show.js


function setDisplay(el, show) {
  if (el.nodeType === Node.ELEMENT_NODE) {
    el.style.display = show ? "" : "none";
  }
}
class ShowComponent extends (/* unused pure expression or super */ null && (Component)) {
  constructor(attrs) {
    super(attrs);const _jg0 = this[$$_jg0402].proxy;const f1_jg0402 = () => {
    _jg0.test = attrs.test; }; f1_jg0402(); attrs[$$_jg0402].__watch("test", f1_jg0402);
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
    for (const node of this[__].rootNodes) {
      if (isComponent(node)) {
        if (node instanceof TransitionComponent) {
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
function renderSwitch(component, slot) {
  const slots = component[component_].slots;
  const renderFn = slots ? slots[slot] : null;
  const roots = component[component_].rootNodes;
  if (!renderFn) {
    roots.push(document.createComment("empty"));
    return roots;
  }
  const el = if_createEl(renderFn, component[component_].context);
  roots.push(el);
  const doms = el.__render();
  for (const node of el[component_].rootNodes) {
    if (component_isComponent(node) && node instanceof transition_TransitionComponent) {
      node.__transition(this.test, true);
    }
  }
  return doms;
}
function doUpdate(component, slot) {
  const roots = component[component_].rootNodes;
  const el = roots[0];
  const isComp = component_isComponent(el);
  const firstDOM = isComp ? el.__firstDOM : el;
  const parentDOM = (isComp ? firstDOM : el).parentNode;
  const renderFn = component[component_].slots?.[slot];
  if (renderFn) {
    const newEl = if_createEl(renderFn, component[component_].context);
    const nodes = newEl.__render();
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
}
function getIfSlot(component, expect) {
  const slots = component[component_].slots;
  if (!slots)
    return "default";
  if (expect) {
    return "true" in slots ? "true" : "default";
  } else {
    return "false" in slots ? "false" : "else";
  }
}
class IfComponent extends component_Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[common_$$].proxy;const f1_jg0402 = () => {
    _jg0.expect = attrs.expect; }; f1_jg0402(); attrs[common_$$].__watch("expect", f1_jg0402);
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
    if (!component_isComponent(this[component_].rootNodes[0]) && !this[component_].slots?.[s]) {
      return;
    }
    doUpdate(this, s);
    this.__notify("branch-switched", this._e);
  }
}
class SwitchComponent extends (/* unused pure expression or super */ null && (Component)) {
  constructor(attrs) {
    super(attrs);const _jg0 = this[$$_jg0402].proxy;const f1_jg0402 = () => {
    _jg0.test = attrs.test; }; f1_jg0402(); attrs[$$_jg0402].__watch("test", f1_jg0402);
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
    if (!isComponent(this[__].rootNodes[0]) && !this[__].slots?.[this._v]) {
      return;
    }
    doUpdate(this, this._v);
    this.__notify("branch-switched", this._v);
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
    return [document.createComment(this._msg.toString())];
  }
}


//# sourceMappingURL=log.js.map
;// CONCATENATED MODULE: ../../jinge/lib/core/render_fns.js


function render_fns_emptyRenderFn(component) {
  const el = document.createComment("empty");
  component[__].rootNodes.push(el);
  return [el];
}
function errorRenderFn(component, message) {
  const el = createElement("code", {
    style: "color: red !important;"
  });
  el.innerHTML = message;
  component[__].rootNodes.push(el);
  return [el];
}
function textRenderFn(component, txtContent) {
  const el = createTextNode(txtContent);
  component[component_].rootNodes.push(el);
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
;// CONCATENATED MODULE: ../../jinge/lib/vm/index.js






//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../jinge/lib/index.js





//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../jinge-i18n/lib/core/service.js
let currentLocale = window.I18N_DEFAULT_LOCALE || void 0;
const listeners = /* @__PURE__ */ new Set();
function getLocale() {
  return currentLocale;
}
function setLocale(locale) {
  if (currentLocale === locale)
    return;
  currentLocale = locale;
  listeners.forEach((fn) => fn(currentLocale));
}
function service_watch(fn, immediate = false) {
  if (immediate && currentLocale)
    fn(currentLocale);
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}
function service_unwatch(fn) {
  listeners.delete(fn);
}
function watchForComponent(component, fn, immediate = false) {
  component.__addDeregisterFn(service_watch(fn, immediate));
}
const w = (/* unused pure expression or super */ null && (service_watch));
const cw = (/* unused pure expression or super */ null && (watchForComponent));
function t(fn, ctx) {
  return fn(currentLocale)(ctx);
}


//# sourceMappingURL=service.js.map
;// CONCATENATED MODULE: ../../jinge-i18n/lib/components/text.js
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


class TComponent extends component_Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[common_$$].proxy;
    __privateAdd(_jg0, _t);
    attrs[common_$$].__watch("**", () => {
      _jg0.__updateIfNeed();
    });
    watchForComponent(_jg0, () => {
      _jg0.__updateIfNeed();
    });
  }
  __render() {
    return [textRenderFn(this, __privateMethod(this, _t, t_fn).call(this))];
  }
  __update() {
    setText(this[component_].rootNodes[0], __privateMethod(this, _t, t_fn).call(this));
  }
}
_t = new WeakSet();
t_fn = function() {
  return this.constructor.d(getLocale())(this[component_].passedAttrs);
};
class RComponent extends component_Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[common_$$].proxy;
    _jg0.attrs = attrs;
    attrs[common_$$].__watch("**", () => {
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
    this[component_].rootNodes.length = 0;
    const renderFn = this.constructor.d(getLocale());
    const els = renderFn(this);
    const $newEl = els.length > 1 ? dom_createFragment(els) : els[0];
    if ($ns) {
      $pa.insertBefore($ns, $newEl);
    } else {
      $pa.appendChild($newEl);
    }
    for (const n of this[component_].rootNodes) {
      if (component_isComponent(n)) {
        n.__handleAfterRender();
      }
    }
  }
  __beforeDestroy() {
    this.attrs = null;
  }
}
class AComponent extends component_Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[common_$$].proxy;
    attrs[common_$$].__watch("**", () => {
      _jg0.__updateIfNeed();
    });
    watchForComponent(_jg0, () => {
      _jg0.__updateIfNeed();
    });
    _jg0.c = vm(_jg0.constructor.d.map((fn) => fn(getLocale())(attrs)));
  }
  __update() {
    this.constructor.d.forEach((fn, i) => {
      const v = fn(getLocale())(this[component_].passedAttrs);
      this.c[i] = v;
    });
  }
}


//# sourceMappingURL=text.js.map
;// CONCATENATED MODULE: ../../jinge-i18n/lib/components/switch.js


function switch_createEl(component) {
  const locale = getLocale();
  const renderFn = component[component_].slots[locale];
  if (!renderFn) {
    return createElementWithoutAttrs("span", `missing ${locale} content`);
  }
  const attrs = component_wrapAttrs({
    [component_]: {
      context: component[component_].context,
      slots: {
        default: renderFn
      }
    }
  });
  return component_Component.create(attrs);
}
class SwitchLocaleComponent extends component_Component {
  constructor(attrs) {
    super(attrs);const _jg0 = this[common_$$].proxy;
    watchForComponent(_jg0, () => {
      _jg0.__updateIfNeed();
    });
  }
  __render() {
    const el = switch_createEl(this);
    const roots = this[component_].rootNodes;
    roots.push(el);
    return component_isComponent(el) ? el.__render() : roots;
  }
  __update() {
    const roots = this[component_].rootNodes;
    const el = roots[0];
    const fd = component_isComponent(el) ? el.__firstDOM : el;
    const pa = fd.parentNode;
    const newEl = switch_createEl(this);
    roots[0] = newEl;
    if (component_isComponent(newEl)) {
      const nels = newEl.__render();
      pa.insertBefore(nels.length > 1 ? dom_createFragment(nels) : nels[0], fd);
    } else {
      pa.insertBefore(newEl, fd);
    }
    if (component_isComponent(el)) {
      el.__destroy();
    } else {
      pa.removeChild(el);
    }
    if (component_isComponent(newEl)) {
      newEl.__handleAfterRender();
    }
  }
}


//# sourceMappingURL=switch.js.map
;// CONCATENATED MODULE: ../../jinge-i18n/lib/index.js




//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./translate/dict/34foc2d.js
/** @eslint-disabled **/
/** this file is auto generated by jinge-i18n, don't modify it manually. **/
/** dictionary for original text: 月 **/;

const ZHCN = () => "月";
const EN = () => "Moon";
const ZHTR = () => "月";
const ZHCN_EN_ZHTR = (locale) => locale === 'zh_cn' ? ZHCN : locale === 'en' ? EN : ZHTR;
const F34foc2d_ZHCN_EN_ZHTR = (attrs) => t(ZHCN_EN_ZHTR, attrs);

;// CONCATENATED MODULE: ./translate/dict/159vdsg.js
/** @eslint-disabled **/
/** this file is auto generated by jinge-i18n, don't modify it manually. **/
/** dictionary for original text: 大葛 **/;

const _159vdsg_ZHCN = () => "大葛";
const _159vdsg_EN = () => "Da Ge";
const _159vdsg_ZHTR = () => "大葛";
const _159vdsg_ZHCN_EN_ZHTR = (locale) => locale === 'zh_cn' ? _159vdsg_ZHCN : locale === 'en' ? _159vdsg_EN : _159vdsg_ZHTR;
const F159vdsg_ZHCN_EN_ZHTR = (attrs) => t(_159vdsg_ZHCN_EN_ZHTR, attrs);

;// CONCATENATED MODULE: ./translate/dict/1ghjrtk.js
/** @eslint-disabled **/
/** this file is auto generated by jinge-i18n, don't modify it manually. **/
/** dictionary for original text: 小葛 **/;

const _1ghjrtk_ZHCN = () => "小葛";
const _1ghjrtk_EN = () => "Xiao Ge";
const _1ghjrtk_ZHTR = () => "小葛";
const _1ghjrtk_ZHCN_EN_ZHTR = (locale) => locale === 'zh_cn' ? _1ghjrtk_ZHCN : locale === 'en' ? _1ghjrtk_EN : _1ghjrtk_ZHTR;
const F1ghjrtk_ZHCN_EN_ZHTR = (attrs) => t(_1ghjrtk_ZHCN_EN_ZHTR, attrs);

;// CONCATENATED MODULE: ./translate/dict/1hv9qh0.js
/** @eslint-disabled **/
/** this file is auto generated by jinge-i18n, don't modify it manually. **/
/** dictionary for original text: 你好呀，${this.boy.age}岁的${this.boy.name}。 **/;

const _1hv9qh0_ZHCN = (attrs) => `你好呀，${attrs.p0}岁的${attrs.p1}。`;
const _1hv9qh0_EN = (attrs) => `Hello, ${attrs.p1} with age ${attrs.p0}`;
const _1hv9qh0_ZHTR = (attrs) => `你好呀，${attrs.p0}歲的${attrs.p1}。`;
const _1hv9qh0_ZHCN_EN_ZHTR = (locale) => locale === 'zh_cn' ? _1hv9qh0_ZHCN : locale === 'en' ? _1hv9qh0_EN : _1hv9qh0_ZHTR;
const F1hv9qh0_ZHCN_EN_ZHTR = (attrs) => t(_1hv9qh0_ZHCN_EN_ZHTR, attrs);

;// CONCATENATED MODULE: ./translate/dict/3lvhd0u.js
/** @eslint-disabled **/
/** this file is auto generated by jinge-i18n, don't modify it manually. **/
/** dictionary for original text: 请选择语言 **/;

const _3lvhd0u_ZHCN = () => "请选择语言";
const _3lvhd0u_EN = () => "Please choose language";
const _3lvhd0u_ZHTR = () => "請選擇語言";
const _3lvhd0u_ZHCN_EN_ZHTR = (locale) => locale === 'zh_cn' ? _3lvhd0u_ZHCN : locale === 'en' ? _3lvhd0u_EN : _3lvhd0u_ZHTR;
class T3lvhd0u_ZHCN_EN_ZHTR extends TComponent {
  static d = _3lvhd0u_ZHCN_EN_ZHTR;
}
;// CONCATENATED MODULE: ./translate/dict/336or7m.js
/** @eslint-disabled **/
/** this file is auto generated by jinge-i18n, don't modify it manually. **/
/** dictionary for original text: 测试 **/;

const _336or7m_ZHCN = () => "测试";
const _336or7m_EN = () => "TEST";
const _336or7m_ZHTR = () => "測試";
const _336or7m_ZHCN_EN_ZHTR = (locale) => locale === 'zh_cn' ? _336or7m_ZHCN : locale === 'en' ? _336or7m_EN : _336or7m_ZHTR;
class T336or7m_ZHCN_EN_ZHTR extends TComponent {
  static d = _336or7m_ZHCN_EN_ZHTR;
}
;// CONCATENATED MODULE: ./translate/dict/29rjaqd.js
/** @eslint-disabled **/
/** this file is auto generated by jinge-i18n, don't modify it manually. **/
/** dictionary for original text: 你好，世界！ **/;

const _29rjaqd_ZHCN = () => "你好，世界！";
const _29rjaqd_EN = () => "Hello, World!";
const _29rjaqd_ZHTR = () => "你好，世界！";
const _29rjaqd_ZHCN_EN_ZHTR = (locale) => locale === 'zh_cn' ? _29rjaqd_ZHCN : locale === 'en' ? _29rjaqd_EN : _29rjaqd_ZHTR;
class T29rjaqd_ZHCN_EN_ZHTR extends TComponent {
  static d = _29rjaqd_ZHCN_EN_ZHTR;
}
;// CONCATENATED MODULE: ./translate/dict/391oneu.js
/** @eslint-disabled **/
/** this file is auto generated by jinge-i18n, don't modify it manually. **/
/** dictionary for original text: 你好，${boy.name} **/;

const _391oneu_ZHCN = (attrs) => `你好，${attrs.p0}`;
const _391oneu_EN = (attrs) => `${attrs.p0}, Hi.`;
const _391oneu_ZHTR = (attrs) => `你好，${attrs.p0}`;
const _391oneu_ZHCN_EN_ZHTR = (locale) => locale === 'zh_cn' ? _391oneu_ZHCN : locale === 'en' ? _391oneu_EN : _391oneu_ZHTR;
class T391oneu_ZHCN_EN_ZHTR extends TComponent {
  static d = _391oneu_ZHCN_EN_ZHTR;
}
;// CONCATENATED MODULE: ./translate/dict/29rjaqd_391oneu.js
/** @eslint-disabled **/
/** this file is auto generated by jinge-i18n, don't modify it manually. **/
/** dictionary for original attributes:
  * 你好，世界！
  * 你好，${boy.name}
 **/



class A29rjaqd_391oneu_ZHCN_EN_ZHTR_ZHCN_EN_ZHTR extends AComponent {
    static d = [_29rjaqd_ZHCN_EN_ZHTR, _391oneu_ZHCN_EN_ZHTR];
  }
;// CONCATENATED MODULE: ./translate/dict/1kkvksc.js
/** @eslint-disabled **/
/** this file is auto generated by jinge-i18n, don't modify it manually. **/
/** dictionary for original text: 春江潮水连海平，海上明${moon}共潮生 **/;

const _1kkvksc_ZHCN = (attrs) => `春江潮水连海平，海上明${attrs.p0}共潮生`;
const _1kkvksc_EN = (attrs) => `In spring the river rises as high as the sea, And with the river's rise the ${attrs.p0} uprises bright.`;
const _1kkvksc_ZHTR = (attrs) => `春江潮水連海平，海上明${attrs.p0}共潮生`;
const _1kkvksc_ZHCN_EN_ZHTR = (locale) => locale === 'zh_cn' ? _1kkvksc_ZHCN : locale === 'en' ? _1kkvksc_EN : _1kkvksc_ZHTR;
class A1kkvksc_ZHCN_EN_ZHTR extends AComponent {
    static d = [_1kkvksc_ZHCN_EN_ZHTR];
  }
;// CONCATENATED MODULE: ./translate/dict/phj56t.js
/** @eslint-disabled **/
/** this file is auto generated by jinge-i18n, don't modify it manually. **/
/** dictionary for original text: 你好，${boy.name}！ **/;

const phj56t_ZHCN = (attrs) => `你好，${attrs.p0}！`;
const phj56t_EN = (attrs) => `Hi, ${attrs.p0}!`;
const phj56t_ZHTR = (attrs) => `你好，${attrs.p0}！`;
const phj56t_ZHCN_EN_ZHTR = (locale) => locale === 'zh_cn' ? phj56t_ZHCN : locale === 'en' ? phj56t_EN : phj56t_ZHTR;
class Aphj56t_ZHCN_EN_ZHTR extends AComponent {
    static d = [phj56t_ZHCN_EN_ZHTR];
  }
;// CONCATENATED MODULE: ./translate/dict/97q3jo.js
/** @eslint-disabled **/
/** this file is auto generated by jinge-i18n, don't modify it manually. **/
/** dictionary for original text: 对于 inline tag，包括<code>code</code>,<span style="color: blue">span</span>,<small>small</small>,<strong style="font-size: 500">strong</strong>,<i style="font-size:500;font-style:italic">i</i>,<code>a</code>这几个，如果其不包含任何需要翻译的属性（Attribute），则可以<a href="https://baidu.com" target="_blank">合并</a>到一行文本进行抽取和翻译。
  你好，${boy.name} **/;








const _97q3jo_ZHCN = function(component) {  
  const vm_0 = component;
  return [
  textRenderFn(component, `对于 inline tag，包括`),
  (() => {
    const el = createElementWithoutAttrs(
      "code",
      `code`
    );
    component[component_].rootNodes.push(el);
    return el;
  })(),
  textRenderFn(component, `,`),
  (() => {
    const el = dom_createElement(
      "span",
      {
        style: `color: blue`
      },
      `span`
    );
    component[component_].rootNodes.push(el);
    return el;
  })(),
  textRenderFn(component, `,`),
  (() => {
    const el = createElementWithoutAttrs(
      "small",
      `small`
    );
    component[component_].rootNodes.push(el);
    return el;
  })(),
  textRenderFn(component, `,`),
  (() => {
    const el = dom_createElement(
      "strong",
      {
        style: `font-size: 500`
      },
      `strong`
    );
    component[component_].rootNodes.push(el);
    return el;
  })(),
  textRenderFn(component, `,`),
  (() => {
    const el = dom_createElement(
      "i",
      {
        style: `font-size:500;font-style:italic`
      },
      `i`
    );
    component[component_].rootNodes.push(el);
    return el;
  })(),
  textRenderFn(component, `,`),
  (() => {
    const el = createElementWithoutAttrs(
      "code",
      `a`
    );
    component[component_].rootNodes.push(el);
    return el;
  })(),
  textRenderFn(component, `这几个，如果其不包含任何需要翻译的属性（Attribute），则可以`),
  (() => {
    const el = dom_createElement(
      "a",
      {
        href: `https://baidu.com`,
        target: `_blank`
      },
      `合并`
    );
    component[component_].rootNodes.push(el);
    return el;
  })(),
  (() => {
    const el = createTextNode();
    const fn_0 = () => {
      setText(el, `到一行文本进行抽取和翻译。
      你好，${vm_0.attrs?.p0}`);
    };
    fn_0();
    vm_0[common_$$].__watch(["attrs","p0"], fn_0, component[common_$$]);
    component[component_].rootNodes.push(el);
    return el;
  })()
  ];
};
const _97q3jo_EN = function(component) {  
  const vm_0 = component;
  return [
  textRenderFn(component, `For inline tags, include`),
  (() => {
    const el = createElementWithoutAttrs(
      "code",
      `code`
    );
    component[component_].rootNodes.push(el);
    return el;
  })(),
  textRenderFn(component, `,`),
  (() => {
    const el = dom_createElement(
      "span",
      {
        style: `color: blue`
      },
      `span`
    );
    component[component_].rootNodes.push(el);
    return el;
  })(),
  textRenderFn(component, `,`),
  (() => {
    const el = createElementWithoutAttrs(
      "small",
      `small`
    );
    component[component_].rootNodes.push(el);
    return el;
  })(),
  textRenderFn(component, `,`),
  (() => {
    const el = dom_createElement(
      "strong",
      {
        style: `font-size: 500`
      },
      `strong`
    );
    component[component_].rootNodes.push(el);
    return el;
  })(),
  textRenderFn(component, `,`),
  (() => {
    const el = dom_createElement(
      "i",
      {
        style: `font-size:500;font-style:italic`
      },
      `i`
    );
    component[component_].rootNodes.push(el);
    return el;
  })(),
  textRenderFn(component, `,`),
  (() => {
    const el = createElementWithoutAttrs(
      "code",
      `a`
    );
    component[component_].rootNodes.push(el);
    return el;
  })(),
  textRenderFn(component, `. If these tags do not contain any attributes that need to be translated, you can`),
  (() => {
    const el = dom_createElement(
      "a",
      {
        href: `https://baidu.com`,
        target: `_blank`
      },
      `merge`
    );
    component[component_].rootNodes.push(el);
    return el;
  })(),
  (() => {
    const el = createTextNode();
    const fn_0 = () => {
      setText(el, `to a line of text for extracting and translating.
      Hello, ${vm_0.attrs?.p0}`);
    };
    fn_0();
    vm_0[common_$$].__watch(["attrs","p0"], fn_0, component[common_$$]);
    component[component_].rootNodes.push(el);
    return el;
  })()
  ];
};
const _97q3jo_ZHTR = function(component) {  
  const vm_0 = component;
  return [
  textRenderFn(component, `對於 inline tag，包括`),
  (() => {
    const el = createElementWithoutAttrs(
      "code",
      `code`
    );
    component[component_].rootNodes.push(el);
    return el;
  })(),
  textRenderFn(component, `,`),
  (() => {
    const el = dom_createElement(
      "span",
      {
        style: `color: blue`
      },
      `span`
    );
    component[component_].rootNodes.push(el);
    return el;
  })(),
  textRenderFn(component, `,`),
  (() => {
    const el = createElementWithoutAttrs(
      "small",
      `small`
    );
    component[component_].rootNodes.push(el);
    return el;
  })(),
  textRenderFn(component, `,`),
  (() => {
    const el = dom_createElement(
      "strong",
      {
        style: `font-size: 500`
      },
      `strong`
    );
    component[component_].rootNodes.push(el);
    return el;
  })(),
  textRenderFn(component, `,`),
  (() => {
    const el = dom_createElement(
      "i",
      {
        style: `font-size:500;font-style:italic`
      },
      `i`
    );
    component[component_].rootNodes.push(el);
    return el;
  })(),
  textRenderFn(component, `,`),
  (() => {
    const el = createElementWithoutAttrs(
      "code",
      `a`
    );
    component[component_].rootNodes.push(el);
    return el;
  })(),
  textRenderFn(component, `這幾個，如果其不包含任何需要翻譯的屬性（Attribute），則可以`),
  (() => {
    const el = dom_createElement(
      "a",
      {
        href: `https://baidu.com`,
        target: `_blank`
      },
      `合併`
    );
    component[component_].rootNodes.push(el);
    return el;
  })(),
  (() => {
    const el = createTextNode();
    const fn_0 = () => {
      setText(el, `到一行文本進行抽取和翻譯。
      你好，${vm_0.attrs?.p0}`);
    };
    fn_0();
    vm_0[common_$$].__watch(["attrs","p0"], fn_0, component[common_$$]);
    component[component_].rootNodes.push(el);
    return el;
  })()
  ];
};
const _97q3jo_ZHCN_EN_ZHTR = (locale) => locale === 'zh_cn' ? _97q3jo_ZHCN : locale === 'en' ? _97q3jo_EN : _97q3jo_ZHTR;
class T97q3jo_ZHCN_EN_ZHTR extends RComponent {
  static d = _97q3jo_ZHCN_EN_ZHTR;
}
;// CONCATENATED MODULE: ./translate/dict/q7fn30.js
/** @eslint-disabled **/
/** this file is auto generated by jinge-i18n, don't modify it manually. **/
/** dictionary for original text: 静以修身，检以养德 **/;

const q7fn30_ZHCN = () => "静以修身，检以养德";
const q7fn30_EN = () => "Quiet for body, Frugal for soul.";
const q7fn30_ZHTR = () => "靜以修身，檢以養德";
const q7fn30_ZHCN_EN_ZHTR = (locale) => locale === 'zh_cn' ? q7fn30_ZHCN : locale === 'en' ? q7fn30_EN : q7fn30_ZHTR;
class Tq7fn30_ZHCN_EN_ZHTR extends TComponent {
  static d = q7fn30_ZHCN_EN_ZHTR;
}
;// CONCATENATED MODULE: ./src/printer.c.html



/* harmony default export */ function printer_c(component) {  
  const vm_0 = component;
  return [
  ...(() => {
    const attrs = component_wrapAttrs({
      [component_]: {
        context: component[component_].context,
        slots: {
          'default': function(component) {  
            return [
            (() => {
              const el = createElementWithoutAttrs(
                "p",
                (() => {
                  const el = createTextNode();
                  const fn_0 = () => {
                    setText(el, vm_0.message);
                  };
                  fn_0();
                  vm_0[common_$$].__watch(["message"], fn_0, component[common_$$]);
                  return el;
                })()
              );
              component[component_].rootNodes.push(el);
              return el;
            })()
            ];
          },
          'else': function(component) {  
            return [
            (() => {
              const el = createElementWithoutAttrs(
                "p",
                ...(() => {
                  const attrs = component_wrapAttrs({
                    [component_]: {
                      context: component[component_].context,
                    },
                  });
                  const el = Tq7fn30_ZHCN_EN_ZHTR.create(attrs);
                  component[component_].nonRootCompNodes.push(el);
                  return el.__render();
                })()
              );
              component[component_].rootNodes.push(el);
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
    vm_0[common_$$].__watch(["message"], fn_0, component[common_$$]);
    const el = IfComponent.create(attrs);
    component[component_].rootNodes.push(el);
    return el.__render();
  })()
  ];
}
;// CONCATENATED MODULE: ./src/printer.c.js



class Printer extends component_Component {
  static template = printer_c;

  constructor(attrs) {
    super(attrs);const _jg0 = this[common_$$].proxy;const f1_jg0402 = () => {
    _jg0.message = attrs.message; }; f1_jg0402(); attrs[common_$$].__watch("message", f1_jg0402);
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
;// CONCATENATED MODULE: ./src/app.c.html












/* harmony default export */ function app_c(component) {  
  const vm_0 = component;
  return [
  (() => {
    const el = createElementWithoutAttrs(
      "p",
      (() => {
        const el = createElementWithoutAttrs(
          "select",
          dom_createElement(
            "option",
            {
              disabled: true
            },
            ...(() => {
              const attrs = component_wrapAttrs({
                [component_]: {
                  context: component[component_].context,
                },
              });
              const el = T3lvhd0u_ZHCN_EN_ZHTR.create(attrs);
              component[component_].nonRootCompNodes.push(el);
              return el.__render();
            })()
          ),
          ...(() => {
            const attrs = component_wrapAttrs({
              [component_]: {
                context: component[component_].context,
                slots: {
                  'default': function(component) {  
                    const vm_1 = component;
                    return [
                    (() => {
                      const el = createElementWithoutAttrs(
                        "option",
                        (() => {
                          const el = createTextNode();
                          const fn_0 = () => {
                            setText(el, vm_1.each?.name);
                          };
                          fn_0();
                          vm_1[common_$$].__watch(["each","name"], fn_0, component[common_$$]);
                          return el;
                        })()
                      );
                      const fn_0 = () => {
                        el.value = vm_1.each?.locale;
                      };
                      fn_0();
                      vm_1[common_$$].__watch(["each","locale"], fn_0, component[common_$$]);
                      component[component_].rootNodes.push(el);
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
            vm_0[common_$$].__watch(["locales"], fn_0, component[common_$$]);
            const el = ForComponent.create(attrs);
            component[component_].nonRootCompNodes.push(el);
            return el.__render();
          })()
        );
        const fn_0 = () => {
          el.value = vm_0.locale;
        };
        fn_0();
        vm_0[common_$$].__watch(["locale"], fn_0, component[common_$$]);
        addEvent(el, 'change', function(...args) {
          vm_0.changeLocale(args[0].target.value)
        });
        return el;
      })(),
      (() => {
        const el = dom_createElement(
          "button",
          {
            style: `margin-left: 16px`
          },
          ...(() => {
            const attrs = component_wrapAttrs({
              [component_]: {
                context: component[component_].context,
              },
            });
            const el = T336or7m_ZHCN_EN_ZHTR.create(attrs);
            component[component_].nonRootCompNodes.push(el);
            return el.__render();
          })()
        );
        addEvent(el, 'click', function(...args) {
          vm_0.test(...args);
        });
        return el;
      })()
    );
    component[component_].rootNodes.push(el);
    return el;
  })(),
  ...(() => {
    const attrs = component_wrapAttrs({
      [component_]: {
        context: component[component_].context,
        slots: {
          'default': function(component) {  
            const vm_1 = component;
            return [
            (() => {
              const el = createElementWithoutAttrs(
                "div",
                ...(() => {
                  const attrs = component_wrapAttrs({
                    [component_]: {
                      context: component[component_].context,
                      slots: {
                        'default': function(component) {  
                          const vm_2 = component;
                          return [
                          (() => {
                            const el = createElementWithoutAttrs(
                              "p",
                              ...(() => {
                                const attrs = component_wrapAttrs({
                                  [component_]: {
                                    context: component[component_].context,
                                  },
                                });
                                const el = T29rjaqd_ZHCN_EN_ZHTR.create(attrs);
                                component[component_].nonRootCompNodes.push(el);
                                return el.__render();
                              })()
                            );
                            const fn_0 = () => {
                              setAttribute(el, "data-xx", vm_2.c?.[0]);
                            };
                            fn_0();
                            vm_2[common_$$].__watch(["c",0], fn_0, component[common_$$]);
                            const fn_1 = () => {
                              setAttribute(el, "data-yy", vm_2.c?.[1]);
                            };
                            fn_1();
                            vm_2[common_$$].__watch(["c",1], fn_1, component[common_$$]);
                            component[component_].rootNodes.push(el);
                            return el;
                          })()
                          ];
                        }
                      }
                    },
                    p0: undefined
                  });
                  const fn_0 = () => {
                    attrs.p0 = vm_1.each?.name;
                  };
                  fn_0();
                  vm_1[common_$$].__watch(["each","name"], fn_0, component[common_$$]);
                  const el = A29rjaqd_391oneu_ZHCN_EN_ZHTR_ZHCN_EN_ZHTR.create(attrs);
                  component[component_].nonRootCompNodes.push(el);
                  return el.__render();
                })(),
                createElementWithoutAttrs(
                  "p",
                  ...(() => {
                    const attrs = component_wrapAttrs({
                      [component_]: {
                        context: component[component_].context,
                      },
                      p0: undefined
                    });
                    const fn_0 = () => {
                      attrs.p0 = vm_1.each?.name;
                    };
                    fn_0();
                    vm_1[common_$$].__watch(["each","name"], fn_0, component[common_$$]);
                    const el = T391oneu_ZHCN_EN_ZHTR.create(attrs);
                    component[component_].nonRootCompNodes.push(el);
                    return el.__render();
                  })()
                )
              );
              component[component_].rootNodes.push(el);
              return el;
            })()
            ];
          }
        }
      },
      loop: undefined
    });
    const fn_0 = () => {
      attrs.loop = vm_0.boys;
    };
    fn_0();
    vm_0[common_$$].__watch(["boys"], fn_0, component[common_$$]);
    const el = ForComponent.create(attrs);
    component[component_].rootNodes.push(el);
    return el.__render();
  })(),
  (() => {
    const el = createElementWithoutAttrs(
      "div",
      (() => {
        const el = createTextNode();
        const fn_0 = () => {
          setText(el, vm_0.tt);
        };
        fn_0();
        vm_0[common_$$].__watch(["tt"], fn_0, component[common_$$]);
        return el;
      })()
    );
    component[component_].rootNodes.push(el);
    return el;
  })(),
  ...(() => {
    const attrs = component_wrapAttrs({
      [component_]: {
        context: component[component_].context,
      },
    });
    const el = Printer.create(attrs);
    component[component_].rootNodes.push(el);
    return el.__render();
  })(),
  ...(() => {
    const attrs = component_wrapAttrs({
      [component_]: {
        context: component[component_].context,
        slots: {
          'default': function(component) {  
            const vm_1 = component;
            return [
            ...(() => {
              const attrs = component_wrapAttrs({
                [component_]: {
                  context: component[component_].context,
                },
                message: undefined
              });
              const fn_0 = () => {
                attrs.message = vm_1.c?.[0];
              };
              fn_0();
              vm_1[common_$$].__watch(["c",0], fn_0, component[common_$$]);
              const el = Printer.create(attrs);
              component[component_].rootNodes.push(el);
              return el.__render();
            })()
            ];
          }
        }
      },
      p0: undefined
    });
    const fn_0 = () => {
      attrs.p0 = vm_0.moon;
    };
    fn_0();
    vm_0[common_$$].__watch(["moon"], fn_0, component[common_$$]);
    const el = A1kkvksc_ZHCN_EN_ZHTR.create(attrs);
    component[component_].rootNodes.push(el);
    return el.__render();
  })(),
  ...(() => {
    const attrs = component_wrapAttrs({
      [component_]: {
        context: component[component_].context,
        slots: {
          'default': function(component) {  
            const vm_1 = component;
            return [
            ...(() => {
              const attrs = component_wrapAttrs({
                [component_]: {
                  context: component[component_].context,
                },
                message: undefined
              });
              const fn_0 = () => {
                attrs.message = vm_1.c?.[0];
              };
              fn_0();
              vm_1[common_$$].__watch(["c",0], fn_0, component[common_$$]);
              const el = Printer.create(attrs);
              component[component_].rootNodes.push(el);
              return el.__render();
            })()
            ];
          }
        }
      },
      p0: undefined
    });
    const fn_0 = () => {
      attrs.p0 = vm_0.boy?.name;
    };
    fn_0();
    vm_0[common_$$].__watch(["boy","name"], fn_0, component[common_$$]);
    const el = Aphj56t_ZHCN_EN_ZHTR.create(attrs);
    component[component_].rootNodes.push(el);
    return el.__render();
  })(),
  (() => {
    const el = createElementWithoutAttrs(
      "div",
      ...(() => {
        const attrs = component_wrapAttrs({
          [component_]: {
            context: component[component_].context,
          },
          p0: undefined
        });
        const fn_0 = () => {
          attrs.p0 = vm_0.boy?.name;
        };
        fn_0();
        vm_0[common_$$].__watch(["boy","name"], fn_0, component[common_$$]);
        const el = T97q3jo_ZHCN_EN_ZHTR.create(attrs);
        component[component_].nonRootCompNodes.push(el);
        return el.__render();
      })()
    );
    component[component_].rootNodes.push(el);
    return el;
  })(),
  (() => {
    const el = createElementWithoutAttrs(
      "div",
      ...(() => {
        const attrs = component_wrapAttrs({
          [component_]: {
            context: component[component_].context,
            slots: {
              'zh_cn': function(component) {  
                return [
                (() => {
                  const el = createElementWithoutAttrs(
                    "p",
                    `使用 <switch-locale> 进行高级控制，比如这里是`,
                    dom_createElement(
                      "span",
                      {
                        style: `color: red;`
                      },
                      `红色的中文`
                    )
                  );
                  component[component_].rootNodes.push(el);
                  return el;
                })()
                ];
              },
              'en': function(component) {  
                return [
                (() => {
                  const el = createElementWithoutAttrs(
                    "p",
                    `use <switch-locale> to manually advanced control, for example, here is`,
                    dom_createElement(
                      "span",
                      {
                        style: `color: blue;`
                      },
                      `blue English`
                    )
                  );
                  component[component_].rootNodes.push(el);
                  return el;
                })()
                ];
              }
            }
          },
        });
        const el = SwitchLocaleComponent.create(attrs);
        component[component_].nonRootCompNodes.push(el);
        return el.__render();
      })()
    );
    component[component_].rootNodes.push(el);
    return el;
  })()
  ];
}
;// CONCATENATED MODULE: ./src/locales.js
/** @jinge-i18n-ignore */

/* harmony default export */ const locales = ([{
  name: '简体中文',
  locale: 'zh_cn'
}, {
  name: 'English',
  locale: 'en'
}, {
  name: '繁體中文',
  locale: 'zh_tr'
}]);

;// CONCATENATED MODULE: ./src/app.c.js







class App extends component_Component {
  static get template() {
    return app_c;
  }
  constructor(attrs) {
    super(attrs);const _jg0 = this[common_$$].proxy;
    _jg0.locale = getLocale();
    _jg0.locales = vm(locales);
    
    watchForComponent(_jg0, () => {
      _jg0.moon = F34foc2d_ZHCN_EN_ZHTR();
      _jg0.boys = vm([{
        name: F159vdsg_ZHCN_EN_ZHTR()
      }, {
        name: F1ghjrtk_ZHCN_EN_ZHTR()
      }]);
      _jg0.boy = vm({
        name: F1ghjrtk_ZHCN_EN_ZHTR(),
        age: 30
      });
      _jg0.uptt();
    }, true);
  }
  uptt() {
    this.tt = F1hv9qh0_ZHCN_EN_ZHTR({ p0: this.boy.age, p1: this.boy.name });
  }
  test() {
    this.boy.age++;
    this.boy.name = F1ghjrtk_ZHCN_EN_ZHTR() + Math.random().toFixed(4);
    this.uptt();
  }
  changeLocale(locale) {
    setLocale(locale);
  }
}

;// CONCATENATED MODULE: ./src/index.js




bootstrap(App, document.getElementById('root-app'));
/******/ })()
;
//# sourceMappingURL=bundle.js.map