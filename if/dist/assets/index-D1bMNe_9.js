var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a, _b, _c, _d, _e, _f, _g, _h;
import { jsxs, Fragment, jsx } from "react/jsx-runtime";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
function typeOf(v) {
  return typeof v;
}
function isObject(v) {
  return v !== null && typeOf(v) === "object";
}
function isString(v) {
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
function isFunction(v) {
  return typeOf(v) === "function";
}
function isPromise(obj) {
  return isObject(obj) && isFunction(obj.then);
}
function arrayRemove(array, item) {
  const idx = array.indexOf(item);
  if (idx < 0) return false;
  array.splice(idx, 1);
  return true;
}
function warn(...args) {
  console.warn(...args);
}
var autoIncrement = 0;
var nextHandle = 1;
var tasksByHandle;
var currentlyRunningATask = false;
var registerImmediate;
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
  if (!callback) return;
  currentlyRunningATask = true;
  try {
    callback();
  } finally {
    clearImmediateFallback(handle);
    currentlyRunningATask = false;
  }
}
var win = typeof window === "undefined" ? globalThis : window;
if (isUndefined(win.setImmediate)) {
  tasksByHandle = /* @__PURE__ */ new Map();
  const messagePrefix = "setImmediate$" + (autoIncrement++).toString(32) + "$";
  win.addEventListener(
    "message",
    (event) => {
      if (event.source === window && isString(event.data) && event.data.startsWith(messagePrefix)) {
        runIfPresent(Number(event.data.slice(messagePrefix.length)));
      }
    },
    false
  );
  registerImmediate = function(handle) {
    win.postMessage(messagePrefix + handle, "*");
  };
}
var setImmediate = win.setImmediate || setImmediateFallback;
var clearImmediate = win.clearImmediate || clearImmediateFallback;
function createTextNode(text = "") {
  return document.createTextNode(isObject(text) ? JSON.stringify(text) : text);
}
function createFragment(children) {
  const f = document.createDocumentFragment();
  children == null ? void 0 : children.forEach((n) => {
    f.appendChild(isString(n) ? document.createTextNode(n) : n);
  });
  return f;
}
function appendChildren($parent, children) {
  $parent.appendChild(
    children.length > 1 ? createFragment(children) : isString(children[0]) ? createTextNode(children[0]) : children[0]
  );
}
function replaceChildren($parent, children, oldNode) {
  $parent.replaceChild(createFragment(children), oldNode);
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
  return () => {
    removeEvent($element, eventName, handler);
  };
}
var $$ = Symbol("$$");
var VM_PARENTS = Symbol("PARENTS");
var VM_WATCHERS = Symbol("WATCHERS");
var VM_NOTIFIABLE = Symbol("NOTIFIABLE");
var VM_SETTERS = Symbol("SETTERS");
var VM_TARGET = Symbol("TARGET");
var VM_PROXY = Symbol("PROXY");
function isInnerObj(v) {
  const clazz = v.constructor;
  return clazz === RegExp || clazz === Date || clazz === Boolean;
}
function isViewModel(v) {
  return isObject(v) && v[$$];
}
function isPublicProperty(v) {
  if (isNumber(v)) return true;
  return isString(v) && v.charCodeAt(0) !== 95;
}
function addParent(child, parent, property) {
  let map = child[VM_PARENTS];
  if (!map) {
    map = child[VM_PARENTS] = /* @__PURE__ */ new Map();
  }
  let set = map.get(property);
  if (!set) {
    map.set(property, set = /* @__PURE__ */ new Set());
  }
  set.add(parent);
}
function removeParent(child, parent, property) {
  var _a2, _b2;
  (_b2 = (_a2 = child[VM_PARENTS]) == null ? void 0 : _a2.get(property)) == null ? void 0 : _b2.delete(parent);
}
function shiftParent(child, parent, property, delta) {
  removeParent(child, parent, property);
  addParent(child, parent, property + delta);
}
function destroyViewModelCore(vm2) {
  var _a2, _b2, _c2, _d2;
  vm2[VM_NOTIFIABLE] = false;
  (_a2 = vm2[VM_PARENTS]) == null ? void 0 : _a2.clear();
  (_b2 = vm2[VM_WATCHERS]) == null ? void 0 : _b2.clear();
  vm2[VM_PROXY] = void 0;
  const target = vm2[VM_TARGET];
  (_c2 = vm2[VM_SETTERS]) == null ? void 0 : _c2.forEach((fn, prop) => {
    if (!fn) {
      return;
    }
    const v = target[prop];
    if (isViewModel(v)) {
      removeParent(v[$$], vm2, prop);
    }
  });
  (_d2 = vm2[VM_SETTERS]) == null ? void 0 : _d2.clear();
  Object.getOwnPropertyNames(target).forEach((prop) => {
    const v = target[prop];
    if (isViewModel(v)) {
      removeParent(v[$$], vm2, prop);
    }
  });
  target[$$] = void 0;
  vm2[VM_TARGET] = void 0;
}
var VM_WATCHER_PATH = Symbol("PATH");
var VM_WATCHER_VALUE = Symbol("VALUE");
var VM_WATCHER_IS_DEEP = Symbol("IS_DEEP");
var VM_WATCHER_LISTENER = Symbol("LISTENER");
function getValueByPath(target, path) {
  if (!(path == null ? void 0 : path.length)) return target;
  if (!isObject(target)) return void 0;
  let idx = 0;
  let val = target[path[idx]];
  while (idx < path.length - 1) {
    if (!isObject(val)) return void 0;
    idx++;
    val = val[path[idx]];
  }
  return val;
}
function watchPath(vm2, handler, propertyPath, deep, immediate) {
  const core = vm2[$$];
  if (!core) throw new Error("watch() or watchPath() requires view-model, use vm() to wrap object");
  let watchers = core[VM_WATCHERS];
  if (!watchers) {
    watchers = core[VM_WATCHERS] = /* @__PURE__ */ new Set();
  }
  const val = propertyPath ? getValueByPath(vm2, propertyPath) : vm2;
  const watcher = {
    [VM_TARGET]: vm2,
    [VM_WATCHER_PATH]: propertyPath,
    [VM_WATCHER_VALUE]: val,
    [VM_WATCHER_LISTENER]: handler,
    [VM_WATCHER_IS_DEEP]: deep
  };
  watchers.add(watcher);
  if (immediate) {
    handler(val, void 0);
  }
  return () => {
    watcher[VM_TARGET] = void 0;
    watcher[VM_WATCHER_LISTENER] = void 0;
    watcher[VM_WATCHER_VALUE] = void 0;
    watchers.delete(watcher);
  };
}
function watch(vm2, propOrPathOrHanlder, handler, options) {
  if (isFunction(propOrPathOrHanlder)) {
    return watchPath(vm2, propOrPathOrHanlder, void 0, true);
  } else if (Array.isArray(propOrPathOrHanlder)) {
    return watchPath(vm2, handler, propOrPathOrHanlder, options == null ? void 0 : options.deep, options == null ? void 0 : options.immediate);
  } else {
    return watchPath(vm2, handler, [propOrPathOrHanlder], options == null ? void 0 : options.deep, options == null ? void 0 : options.immediate);
  }
}
function handleVmChange(vmCore, changedPath) {
  var _a2, _b2;
  (_a2 = vmCore[VM_WATCHERS]) == null ? void 0 : _a2.forEach((watcher) => {
    const listener = watcher[VM_WATCHER_LISTENER];
    const vm2 = watcher[VM_TARGET];
    if (!vm2 || !listener) {
      return;
    }
    const watchPath2 = watcher[VM_WATCHER_PATH];
    if (!(watchPath2 == null ? void 0 : watchPath2.length)) {
      listener(vm2, vm2);
      return;
    }
    const deep = watcher[VM_WATCHER_IS_DEEP];
    const clen = (changedPath == null ? void 0 : changedPath.length) ?? 0;
    console.log("check", changedPath, watchPath2);
    let match = clen === 0 || clen <= watchPath2.length && changedPath && !changedPath.some((v, i) => v !== watchPath2[i]);
    if (!match && deep) {
      if (clen > watchPath2.length && changedPath && !watchPath2.some((v, i) => changedPath[i] !== v)) {
        match = true;
      }
    }
    if (!match) {
      return;
    }
    const oldValue = watcher[VM_WATCHER_VALUE];
    const newValue = getValueByPath(vm2, watchPath2);
    if (deep || newValue !== oldValue) {
      watcher[VM_WATCHER_VALUE] = newValue;
      listener(newValue, oldValue, changedPath);
    }
  });
  (_b2 = vmCore[VM_PARENTS]) == null ? void 0 : _b2.forEach((parents, prop) => {
    const parentPath = changedPath ? [prop, ...changedPath] : [prop];
    parents.forEach((parentVmCore) => {
      handleVmChange(parentVmCore, parentPath);
    });
  });
}
function notifyVmPropChange(vm2, prop) {
  handleVmChange(vm2[$$], [prop]);
}
function notifyVmArrayChange(vm2) {
  handleVmChange(vm2[$$]);
}
function getSetterFnIfPropIsSetter(obj, prop) {
  let map = obj[$$][VM_SETTERS];
  if (!map) {
    obj[$$][VM_SETTERS] = map = /* @__PURE__ */ new Map();
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
    while (clazz == null ? void 0 : clazz.prototype) {
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
function __propSetHandler(target, prop, value, setFn) {
  const isPubProp = isPublicProperty(prop);
  if (!isPubProp) {
    target[prop] = value;
    return true;
  }
  const oldVal = target[prop];
  if (oldVal === value && !isUndefined(value)) {
    return true;
  }
  const newValMaybeVM = isObject(value) && !isInnerObj(value);
  if (newValMaybeVM && isPubProp && !value[$$]) {
    throw new Error(
      "value of ViewModel's public property must also be ViewModel, use vm() to wrap it"
    );
  }
  if (isViewModel(oldVal)) {
    removeParent(oldVal[$$], target[$$], prop);
  }
  setFn(target, prop, value);
  if (newValMaybeVM) {
    addParent(value[$$], target[$$], prop);
  }
  notifyVmPropChange(target, prop);
  return true;
}
function __objectPropSetFn(target, prop, value) {
  target[prop] = value;
}
function __componentPropSetFn(target, prop, value) {
  const setterFn = getSetterFnIfPropIsSetter(target, prop);
  if (setterFn) {
    setterFn.call(target[$$][VM_PROXY], value);
  } else {
    target[prop] = value;
  }
}
function objectPropSetHandler(target, prop, value) {
  if (!target[$$]) {
    return true;
  }
  return __propSetHandler(target, prop, value, __objectPropSetFn);
}
function attrsPropSetHandler(target, prop, value) {
  if (!target[$$]) {
    return true;
  }
  return __propSetHandler(target, prop, value, __objectPropSetFn);
}
function componentPropSetHandler(target, prop, value) {
  if (!target[$$]) {
    warn(
      `call setter "${prop.toString()}" after destroied, resources such as setInterval maybe not released before destroy. component:`,
      target
    );
    return true;
  }
  return __propSetHandler(target, prop, value, __componentPropSetFn);
}
function arrayLengthSetHandler(target, value) {
  if (!isNumber(value)) {
    throw new Error("bad argument. array length must be validate number.");
  }
  const oldLen = target.length;
  if (oldLen === value) return true;
  if (oldLen > value) {
    for (let i = value; i < oldLen; i++) {
      const v = target[i];
      if (isViewModel(v)) {
        removeParent(v[$$], target[$$], i);
      }
    }
  }
  target.length = value;
  notifyVmArrayChange(target);
  return true;
}
function arrayPropSetHandler(target, prop, value) {
  if (!target[$$]) {
    return true;
  }
  if (prop === "length") {
    return arrayLengthSetHandler(target, value);
  }
  if (isString(prop) && /^\d+$/.test(prop)) {
    prop = parseInt(prop);
  }
  return __propSetHandler(target, prop, value, __objectPropSetFn);
}
var ObjectProxyHandler = {
  set: objectPropSetHandler
};
var PromiseProxyHandler = {
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
  const prev = target.slice();
  fn();
  target.forEach((it, i) => {
    const p = prev[i];
    if (p === it) return;
    if (isViewModel(p)) {
      removeParent(p[$$], target[$$], i);
    }
    if (isViewModel(it)) {
      addParent(it[$$], target[$$], i);
    }
  });
  notifyVmArrayChange(target);
  return target[$$][VM_PROXY];
}
function wrapSubArray(arr, wrapEachItem = false) {
  const proxy = new Proxy(arr, ArrayProxyHandler);
  arr[$$] = {
    [VM_NOTIFIABLE]: true,
    [VM_TARGET]: arr,
    [VM_PROXY]: proxy
  };
  arr.forEach((it, i) => {
    if (isViewModel(it)) {
      addParent(it[$$], arr[$$], i);
    } else if (wrapEachItem) {
      arr[i] = wrapVm(it);
    }
  });
  return proxy;
}
function _arrayShiftOrUnshiftProp(arr, delta) {
  arr.forEach((el, i) => {
    if (!isViewModel(el)) return;
    shiftParent(el[$$], arr[$$], i, delta);
  });
}
function _argAssert(arg, fn) {
  if (isObject(arg)) {
    if (!($$ in arg)) {
      throw new Error(`argument passed to Array.${fn} must be ViewModel if the array is ViewModel`);
    } else {
      return true;
    }
  } else {
    return false;
  }
}
var ArrayFns = {
  splice(target, idx, delCount, ...args) {
    if (idx < 0) idx = 0;
    args.forEach((arg, i) => {
      if (_argAssert(arg, "splice")) {
        addParent(arg[$$], target[$$], idx + i);
      }
    });
    for (let i = 0; i < delCount; i++) {
      if (idx + i >= target.length) break;
      const el = target[idx + i];
      if (isViewModel(el)) {
        removeParent(el[$$], target[$$], idx + i);
      }
    }
    const delta = args.length - delCount;
    if (delta !== 0) {
      for (let i = idx + delCount; i < target.length; i++) {
        const el = target[i];
        if (!isViewModel(el)) {
          continue;
        }
        shiftParent(el[$$], target[$$], i, delta);
      }
    }
    const rtn = wrapSubArray(target.splice(idx, delCount, ...args));
    notifyVmArrayChange(target);
    return rtn;
  },
  shift(target) {
    const oldLen = target.length;
    if (oldLen === 0) {
      return void 0;
    }
    _arrayShiftOrUnshiftProp(target, -1);
    const el = target.shift();
    if (isViewModel(el)) {
      removeParent(el[$$], target[$$], -1);
    }
    notifyVmArrayChange(target);
    return el;
  },
  unshift(target, ...args) {
    const oldLen = target.length;
    if (args.length === 0) return oldLen;
    args.forEach((arg, i) => {
      if (_argAssert(arg, "unshift")) {
        addParent(arg[$$], target[$$], i);
      }
    });
    _arrayShiftOrUnshiftProp(target, args.length);
    const rtn = target.unshift(...args);
    notifyVmArrayChange(target);
    return rtn;
  },
  pop(target) {
    const oldLen = target.length;
    if (oldLen === 0) {
      return void 0;
    }
    const el = target.pop();
    if (isViewModel(el)) {
      removeParent(el[$$], target[$$], oldLen - 1);
    }
    notifyVmArrayChange(target);
    return el;
  },
  push(target, ...args) {
    if (args.length === 0) return 0;
    args.forEach((arg, i) => {
      if (_argAssert(arg, "push")) {
        addParent(arg[$$], target[$$], target.length + i);
      }
    });
    const rtn = target.push(...args);
    notifyVmArrayChange(target);
    return rtn;
  },
  fill(target, v) {
    _argAssert(v, "fill");
    target.forEach((it, i) => {
      if (it === v && !isUndefined(it)) {
        return;
      }
      if (isViewModel(it)) {
        removeParent(it[$$], target[$$], i);
      }
      target[i] = v;
      if (isViewModel(v)) {
        addParent(v[$$], target[$$], i);
      }
    });
    notifyVmArrayChange(target);
    return target[$$][VM_PROXY];
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
var ArrayProxyHandler = {
  get(target, prop) {
    if (prop in ArrayFns) {
      const fn = ArrayFns[prop];
      return (...args) => fn(target, ...args);
    } else {
      return target[prop];
    }
  },
  set: arrayPropSetHandler
};
function wrapProp(parent, child, property) {
  if (!isObject(child) || isInnerObj(child)) {
    return;
  }
  if (!child[$$]) {
    parent[property] = child = wrapVm(child);
  }
  addParent(child[$$], parent[$$], property);
}
function wrapVm(target) {
  var _a2;
  if (isObject(target)) {
    if (isInnerObj(target)) {
      return target;
    }
    let proxy = (_a2 = target[$$]) == null ? void 0 : _a2[VM_PROXY];
    if (proxy) return proxy;
    const isArr = isArray(target);
    if (isArr) {
      proxy = new Proxy(target, ArrayProxyHandler);
      target[$$] = {
        [VM_NOTIFIABLE]: true,
        [VM_TARGET]: target,
        [VM_PROXY]: proxy
      };
      for (let i = 0; i < target.length; i++) {
        wrapProp(target, target[i], i);
      }
    } else {
      proxy = new Proxy(
        target,
        isPromise(target) ? PromiseProxyHandler : ObjectProxyHandler
      );
      target[$$] = {
        [VM_NOTIFIABLE]: true,
        [VM_TARGET]: target,
        [VM_PROXY]: proxy
      };
      for (const k in target) {
        if (isPublicProperty(k)) {
          wrapProp(target, target[k], k);
        }
      }
    }
    return proxy;
  } else {
    return target;
  }
}
function proxyAttributes(attrs2) {
  if (!isObject(attrs2)) throw new Error("attrs must be object");
  const p = attrs2[$$];
  if (p) return p[VM_PROXY];
  const proxy = new Proxy(attrs2, {
    set: attrsPropSetHandler
  });
  attrs2[$$] = {
    [VM_NOTIFIABLE]: false,
    [VM_TARGET]: attrs2,
    [VM_PROXY]: proxy
  };
  return proxy;
}
function proxyComponent(component) {
  return new Proxy(component, {
    set: componentPropSetHandler
  });
}
function vm(target) {
  if (!isObject(target)) throw new Error("vm() only accept object");
  const p = target[$$];
  if (p) return p[VM_PROXY];
  return wrapVm(target);
}
var EMITTER = Symbol("EMITTER");
var __ = Symbol("__");
var ROOT_NODES = Symbol("ROOT_NODES");
var NON_ROOT_COMPONENT_NODES = Symbol("NON_ROOT_COMPONENT_NODES");
var SLOTS = Symbol("SLOTS");
var REFS = Symbol("REFS");
var CONTEXT = Symbol("CONTEXT");
var DEREGISTER_FUNCTIONS = Symbol("DEREGISTER_FUNCTIONS");
var STATE = Symbol("STATE");
var PASSED_ATTRIBUTES = Symbol("PASSED_ATTRIBUTES");
var WATCH = Symbol("WATCH");
var CONTEXT_STATE = Symbol("CONTEXT_STATE");
var UPDATE_NEXT_MAP = Symbol("UPDATE_NEXT_MAP");
var RELATED_REFS = Symbol("RELATED_REFS");
var RELATED_REFS_ORIGIN = Symbol("ORIGIN");
var RELATED_REFS_KEY = Symbol("KEY");
var RELATED_REFS_NODE = Symbol("NODE");
var RELATED_WATCH = Symbol("RELATED_WATCH");
var SET_REF = Symbol("SET_REF");
var DESTROY = Symbol("DESTROY");
var DESTROY_CONTENT = Symbol("DESTROY_CONTENT");
var RENDER_TO_DOM = Symbol("RENDER_TO_DOM");
var HANDLE_RENDER_DONE = Symbol("HANDLE_RENDER_DONE");
function bootstrap(ComponentClazz, dom, attrs2) {
  const app2 = new ComponentClazz(attrs2 ? proxyAttributes(attrs2) : {});
  app2[RENDER_TO_DOM](dom, dom !== document.body);
  return app2;
}
var LISTENERS = Symbol();
var Emitter = (_a = LISTENERS, class {
  constructor() {
    __publicField(this, _a);
  }
  // constructor(initializeListeners?: {
  //   [E in keyof Events]: {
  //     fn: Events[E];
  //     opts: ListenerOptions;
  //   };
  // }) {
  //   this[MESSENGER] = null;
  //   if (initializeListeners) {
  //     for (const eventName in initializeListeners) {
  //       const handler = initializeListeners[eventName];
  //       this.__on(eventName, handler.fn, handler.opts);
  //     }
  //   }
  // }
  clear() {
    const map = this[LISTENERS];
    map == null ? void 0 : map.forEach((lis) => lis == null ? void 0 : lis.clear());
    map == null ? void 0 : map.clear();
  }
  emit(eventName, ...args) {
    var _a2;
    const listeners = (_a2 = this[LISTENERS]) == null ? void 0 : _a2.get(eventName);
    listeners == null ? void 0 : listeners.forEach((opts, fn) => {
      try {
        fn(...args);
      } catch (ex) {
        console.error("failed __notify", eventName, "due to:", ex);
      }
      if (opts == null ? void 0 : opts.once) {
        listeners.delete(fn);
      }
    });
  }
  /**
   * 监听事件，返回该监听的卸载函数
   */
  on(eventName, eventListener, options) {
    let map = this[LISTENERS];
    if (!map) map = this[LISTENERS] = /* @__PURE__ */ new Map();
    let listeners = map.get(eventName);
    if (!listeners) {
      map.set(eventName, listeners = /* @__PURE__ */ new Map());
    }
    listeners.set(eventListener, options);
    return () => {
      listeners.delete(eventListener);
    };
  }
});
function isComponent(v) {
  return !!v[__];
}
function assertRenderResults(renderResults) {
  if (!isArray(renderResults) || renderResults.length === 0) {
    throw new Error("Render results of component is empty");
  }
  return renderResults;
}
var Component = (_f = class {
  constructor(attrs2) {
    /* 使用 symbol 来定义属性，避免业务层无意覆盖了支撑 jinge 框架逻辑的属性带来坑 */
    __publicField(this, _d);
    __publicField(this, _c);
    __publicField(this, _b);
    /* 预定义好的常用的传递样式控制的属性 */
    __publicField(this, "class");
    __publicField(this, "style");
    const isVmAttrs = isViewModel(attrs2);
    const compilerAttrs = attrs2[__];
    this[$$] = {
      // 初始化时 Component 默认的 VM_NOTIFIABLE 为 false，
      // 待 RENDER 结束后才修改为 true，用于避免无谓的消息通知。
      [VM_NOTIFIABLE]: false,
      [VM_TARGET]: this,
      [VM_PROXY]: proxyComponent(this)
    };
    this[EMITTER] = new Emitter();
    this[__] = {
      [PASSED_ATTRIBUTES]: isVmAttrs ? attrs2 : void 0,
      [CONTEXT]: compilerAttrs == null ? void 0 : compilerAttrs[CONTEXT],
      [CONTEXT_STATE]: 0,
      [SLOTS]: compilerAttrs == null ? void 0 : compilerAttrs[SLOTS],
      [STATE]: 0,
      [ROOT_NODES]: [],
      [NON_ROOT_COMPONENT_NODES]: []
    };
    ["class", "style"].forEach((p) => {
      if (!(p in attrs2)) return;
      if (!isVmAttrs) throw new Error("attrs must be ViewModel");
      this.__bindAttr(attrs2, p);
    });
    return this[$$][VM_PROXY];
  }
  /** 给编译器使用的 watch 函数 */
  [(_e = __, _d = __, _c = $$, _b = EMITTER, WATCH)](propPath, handler, relatedComponent) {
    const unwatchFn = watchPath(
      this,
      (v, old, p) => {
        console.log("onchange", v, old, p, propPath);
        handler(v, old, p);
      },
      propPath,
      true,
      true
    );
    if (relatedComponent && relatedComponent !== this) {
      let rw = relatedComponent[__][RELATED_WATCH];
      if (!rw) rw = relatedComponent[__][RELATED_WATCH] = /* @__PURE__ */ new Set();
      const newFn = () => {
        unwatchFn();
        rw == null ? void 0 : rw.delete(newFn);
      };
      rw.add(newFn);
      return newFn;
    } else {
      return unwatchFn;
    }
  }
  /**
   * 将 attrs 的属性（attrName）绑定到组件的（componentProp）属性上，即调用 watch 进行监控和更新并在更新后调用组件的 __updateNextTick()。
   * 如果不传递 componentProp 参数，则 componentProp 和 attrName 同名。
   */
  __bindAttr(attrs2, attrName, componentProp) {
    if (!isPublicProperty(attrName))
      throw new Error(`attrName of __bindAttr() requires public property`);
    this.__addDeregisterFn(
      watch(
        attrs2,
        attrName,
        (v) => {
          this[componentProp ?? attrName] = v;
          this.__updateNextTick();
        },
        { immediate: true }
      )
    );
  }
  /**
   * store deregisterFn and auto call it when component is being destroy.
   */
  __addDeregisterFn(deregisterFn) {
    let deregs = this[__][DEREGISTER_FUNCTIONS];
    if (!deregs) {
      this[__][DEREGISTER_FUNCTIONS] = deregs = /* @__PURE__ */ new Set();
    }
    deregs.add(deregisterFn);
  }
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
      var _a2;
      deregEvtFn();
      (_a2 = this[__][DEREGISTER_FUNCTIONS]) == null ? void 0 : _a2.delete(deregEvtFn);
    };
  }
  __domPassListeners(ignoredEventNames, targetEl) {
    if (this[__][STATE] !== 1) {
      throw new Error("domPassListeners must be applied to component which is rendered.");
    }
    const lis = this[EMITTER][LISTENERS];
    if (!(lis == null ? void 0 : lis.size)) {
      return;
    }
    if (ignoredEventNames && !isArray(ignoredEventNames)) {
      targetEl = ignoredEventNames;
      ignoredEventNames = void 0;
    } else if (!targetEl) {
      targetEl = this.__firstDOM;
    }
    if (targetEl.nodeType !== Node.ELEMENT_NODE) {
      return;
    }
    lis.forEach((handlers, eventName) => {
      if (ignoredEventNames == null ? void 0 : ignoredEventNames.indexOf(eventName)) {
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
    const el = this[__][ROOT_NODES][0];
    return isComponent(el) ? el.__firstDOM : el;
  }
  /**
   * Get last rendered DOM Node after Component is rendered.
   *
   * 按从右往左，从上到下的深度遍历，找到的第一个 DOM 节点（相对于从左到右的顺序是最后一个 DOM 节点）。
   */
  get __lastDOM() {
    const rns = this[__][ROOT_NODES];
    const el = rns[rns.length - 1];
    return isComponent(el) ? el.__lastDOM : el;
  }
  /**
   * 组件的实际渲染函数，渲染模板或默认插槽。
   * 该函数可被子组件重载，进而覆盖渲染逻辑。
   * 该函数可以是同步或异步函数，但通常推荐使用同步函数，将异步初始化逻辑放到 __beforeRender 生命周期函数中。
   */
  __render() {
    let renderFn = this.constructor.template;
    if (!renderFn && this[__][SLOTS]) {
      renderFn = this[__][SLOTS].default;
    }
    if (!isFunction(renderFn)) {
      throw new Error(
        `Template of ${this.constructor.name} not found. Forget static getter "template"?`
      );
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
  [RENDER_TO_DOM](targetEl, replaceMode = true) {
    if (this[__][STATE] !== 0) {
      throw new Error("component has already been rendered.");
    }
    const rr = assertRenderResults(this.__render());
    if (replaceMode) {
      replaceChildren(targetEl.parentNode, rr, targetEl);
    } else {
      appendChildren(targetEl, rr);
    }
    this[HANDLE_RENDER_DONE]();
  }
  [DESTROY](removeDOM = true) {
    var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2;
    const comp = this[__];
    if (comp[STATE] >= 2) return;
    comp[STATE] = 2;
    this[$$][VM_NOTIFIABLE] = false;
    const passedAttrs = comp[PASSED_ATTRIBUTES];
    passedAttrs && (passedAttrs[$$][VM_NOTIFIABLE] = false);
    const emitter = this[EMITTER];
    emitter.emit("beforeDestroy");
    this.__beforeDestroy();
    this[DESTROY_CONTENT](removeDOM);
    emitter == null ? void 0 : emitter.clear();
    passedAttrs && destroyViewModelCore(passedAttrs[$$]);
    destroyViewModelCore(this[$$]);
    (_a2 = comp[RELATED_WATCH]) == null ? void 0 : _a2.forEach((unwatchFn) => unwatchFn());
    (_b2 = comp[RELATED_WATCH]) == null ? void 0 : _b2.clear();
    (_c2 = comp[UPDATE_NEXT_MAP]) == null ? void 0 : _c2.forEach((imm) => {
      clearImmediate(imm);
    });
    (_d2 = comp[UPDATE_NEXT_MAP]) == null ? void 0 : _d2.clear();
    (_e2 = comp[RELATED_REFS]) == null ? void 0 : _e2.forEach((info) => {
      const refs = info[RELATED_REFS_ORIGIN][__][REFS];
      if (!refs) return;
      const rns = refs.get(info[RELATED_REFS_KEY]);
      if (isArray(rns)) {
        arrayRemove(rns, info[RELATED_REFS_NODE] || this);
      } else {
        refs.delete(info[RELATED_REFS_KEY]);
      }
    });
    comp[RELATED_REFS] && (comp[RELATED_REFS].length = 0);
    (_f2 = comp[DEREGISTER_FUNCTIONS]) == null ? void 0 : _f2.forEach((fn) => fn());
    (_g2 = comp[DEREGISTER_FUNCTIONS]) == null ? void 0 : _g2.clear();
    comp[STATE] = 3;
    comp[ROOT_NODES].length = 0;
    comp[NON_ROOT_COMPONENT_NODES].length = 0;
    (_h2 = comp[REFS]) == null ? void 0 : _h2.clear();
    comp[CONTEXT] = void 0;
  }
  /**
   * 销毁组件的内容，但不销毁组件本身。
   */
  [DESTROY_CONTENT](removeDOM = false) {
    for (const component of this[__][NON_ROOT_COMPONENT_NODES]) {
      component[DESTROY](false);
    }
    let $parent = null;
    for (const node of this[__][ROOT_NODES]) {
      if (isComponent(node)) {
        node[DESTROY](removeDOM);
      } else if (removeDOM) {
        if (!$parent) {
          $parent = node.parentNode;
        }
        $parent.removeChild(node);
      }
    }
  }
  /**
   *
   */
  [HANDLE_RENDER_DONE]() {
    const comp = this[__];
    comp[PASSED_ATTRIBUTES] && (comp[PASSED_ATTRIBUTES][$$][VM_NOTIFIABLE] = true);
    this[$$][VM_NOTIFIABLE] = true;
    for (const n of comp[ROOT_NODES]) {
      if (isComponent(n)) {
        n[HANDLE_RENDER_DONE]();
      }
    }
    for (const n of comp[NON_ROOT_COMPONENT_NODES]) {
      n[HANDLE_RENDER_DONE]();
    }
    comp[STATE] = 1;
    comp[CONTEXT_STATE] = comp[CONTEXT_STATE] === 1 ? 3 : 2;
    this.__afterRender();
    this[EMITTER].emit("afterRender");
  }
  /**
   * 在 nextTick 时调用 __update 函数。
   */
  __updateNextTick(handler) {
    const updateRenderFn = this.__update;
    if (!updateRenderFn || this[__][STATE] !== 1) {
      return;
    }
    if (!handler) {
      handler = updateRenderFn;
    }
    let ntMap = this[__][UPDATE_NEXT_MAP];
    if (!ntMap) ntMap = this[__][UPDATE_NEXT_MAP] = /* @__PURE__ */ new Map();
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
  __setContext(key, value, forceOverride = false) {
    const comp = this[__];
    const contextState = comp[CONTEXT_STATE];
    if (contextState === 2 || contextState === 3) {
      throw new Error(
        "Can't setContext after component has been rendered. Try put setContext code into constructor."
      );
    }
    let context = comp[CONTEXT];
    if (contextState === 0) {
      context = comp[CONTEXT] = Object.assign({}, comp[CONTEXT]);
      comp[CONTEXT_STATE] = 1;
    }
    if (!context) return;
    if (key in context) {
      if (!forceOverride) {
        throw new Error(
          `Contenxt with key: ${key.toString()} is exist. Pass third argument forceOverride=true to override it.`
        );
      }
    }
    context[key] = value;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  __getContext(key) {
    var _a2;
    return (_a2 = this[__][CONTEXT]) == null ? void 0 : _a2[key];
  }
  /**
   * This method is used for compiler generated code.
   * Do not use it manually.
   */
  [SET_REF](ref, el, relatedComponent) {
    let rns = this[__][REFS];
    if (!rns) {
      this[__][REFS] = rns = /* @__PURE__ */ new Map();
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
    let rbs = (isComp ? el : relatedComponent)[__][RELATED_REFS];
    if (!rbs) {
      (isComp ? el : relatedComponent)[__][RELATED_REFS] = rbs = [];
    }
    rbs.push({
      [RELATED_REFS_ORIGIN]: this,
      [RELATED_REFS_KEY]: ref,
      [RELATED_REFS_NODE]: isComp ? void 0 : el
    });
  }
  /**
   * Get child node(or nodes) marked by 'ref:' attribute in template
   */
  __getRef(ref) {
    var _a2;
    if (this[__][STATE] !== 1) {
      warn(
        `Warning: call __getRef before component '${this.constructor.name}' rendered will get nothing.`
      );
    }
    return (_a2 = this[__][REFS]) == null ? void 0 : _a2.get(ref);
  }
  __on(eventName, handler, options) {
    return this[EMITTER].on(eventName, handler, options);
  }
  __emit(eventName, ...args) {
    this[EMITTER].emit(eventName, ...args);
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
}, /**
 * 指定组件的渲染模板。
 */
__publicField(_f, "template"), /**
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
__publicField(_f, _e, true), _f);
function createEl(renderFn, context) {
  const attrs2 = {
    [__]: {
      [CONTEXT]: context,
      [SLOTS]: {
        default: renderFn
      }
    }
  };
  return new Component(attrs2);
}
function renderSwitch(component, slot) {
  var _a2;
  const renderFn = (_a2 = component[__][SLOTS]) == null ? void 0 : _a2[slot];
  const roots = component[__][ROOT_NODES];
  if (!renderFn) {
    roots.push(document.createComment(slot));
    return roots;
  }
  const el = createEl(renderFn, component[__][CONTEXT]);
  roots.push(el);
  const doms = el.__render();
  return doms;
}
function doUpdate(component, slot) {
  component[DESTROY_CONTENT](true);
  renderSwitch(component, slot);
}
var EXPECT2 = Symbol("EXPECT");
function getIfSlot(component) {
  const slots = component[__][SLOTS];
  const expect = component[EXPECT2];
  if (!slots) return expect ? "default" : "else";
  if (expect) {
    return "true" in slots ? "true" : "default";
  } else {
    return "false" in slots ? "false" : "else";
  }
}
var If = class extends (_h = Component, _g = EXPECT2, _h) {
  constructor(attrs2) {
    super(attrs2);
    __publicField(this, _g);
    this.__bindAttr(attrs2, "expect", EXPECT2);
  }
  __render() {
    return renderSwitch(this, getIfSlot(this));
  }
  __update() {
    doUpdate(this, getIfSlot(this));
  }
};
function jsx2() {
  console.log("x");
}
class App extends Component {
  constructor(attrs2) {
    super();
    __publicField(this, "name");
    __publicField(this, "n");
    __publicField(this, "arr");
    this.n = Math.random() * 65536 | 0;
    this.arr = vm([1, 2, 3]);
    this.name = this.__bindAttr(attrs2, "name");
  }
  render() {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("div", { children: "Hello, Jinge!" }),
      jsx2(),
      /* @__PURE__ */ jsxs("p", { children: [
        "Tick: ",
        this.n
      ] }),
      /* @__PURE__ */ jsx(If, { expect: this.n > 0.5, children: {
        true: /* @__PURE__ */ jsx("div", { children: "hello" }),
        false: /* @__PURE__ */ jsx("div", { children: "world" })
      } }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Arr: ",
        this.arr
      ] }),
      /* @__PURE__ */ jsx("button", { onClick: () => this.n++, children: "TEST1" }),
      /* @__PURE__ */ jsx("button", { onClick: () => this.arr.push(Math.random()), children: "TEST2" })
    ] });
  }
  hello() {
    return "hello, " + this.name;
  }
  onClick() {
  }
  log(...args) {
    console.log("ARGS:", args.length, ...args);
  }
}
const attrs = vm({ name: "xiaoge" });
const app = bootstrap(App, document.getElementById("root"), attrs);
app.hello();
setTimeout(() => {
  attrs.name = "xiaojing";
  app.hello();
  setImmediate(() => {
    app.hello();
  });
}, 3e3);
