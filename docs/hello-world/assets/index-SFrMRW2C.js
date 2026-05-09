//#region \0vite/modulepreload-polyfill.js
(function polyfill() {
	const relList = document.createElement("link").relList;
	if (relList && relList.supports && relList.supports("modulepreload")) return;
	for (const link of document.querySelectorAll("link[rel=\"modulepreload\"]")) processPreload(link);
	new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (mutation.type !== "childList") continue;
			for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
		}
	}).observe(document, {
		childList: true,
		subtree: true
	});
	function getFetchOpts(link) {
		const fetchOpts = {};
		if (link.integrity) fetchOpts.integrity = link.integrity;
		if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
		if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
		else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
		else fetchOpts.credentials = "same-origin";
		return fetchOpts;
	}
	function processPreload(link) {
		if (link.ep) return;
		link.ep = true;
		const fetchOpts = getFetchOpts(link);
		fetch(link.href, fetchOpts);
	}
})();
//#endregion
//#region ../../../node_modules/.pnpm/jinge@4.1.7/node_modules/jinge/dist/jinge.prod.js
var ze = Object.defineProperty;
var Ge = (n, e, t) => e in n ? ze(n, e, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: t
}) : n[e] = t;
var F = (n, e, t) => Ge(n, typeof e != "symbol" ? e + "" : e, t);
function vn(n) {
	return typeof n;
}
function In(n) {
	return typeof n == "symbol";
}
function T(n) {
	return n !== null && vn(n) === "object";
}
function Un(n) {
	return vn(n) === "string";
}
function N(n) {
	return vn(n) === "undefined";
}
function le(n) {
	return Array.isArray(n);
}
function bn(n) {
	return vn(n) === "function";
}
N(window.setImmediate) && function() {
	let e = 1;
	const t = /* @__PURE__ */ new Map();
	function i(r) {
		try {
			const c = t.get(r);
			c && (t.delete(r), c());
		} catch (c) {
			console.error(c);
		}
	}
	function o(r) {
		t.delete(r);
	}
	if (window.clearImmediate = o, !N(window.queueMicrotask)) window.setImmediate = function(c) {
		const u = e++;
		return t.set(u, c), window.queueMicrotask(() => {
			i(u);
		}), u;
	};
	else {
		const r = `setImmediate$${Date.now().toString(32)}${Math.floor(Math.random() * 16777215).toString(32)}$`;
		window.setImmediate = function(u) {
			const s = e++;
			return t.set(s, u), window.postMessage(`${r}${e}`), s;
		}, window.addEventListener("message", (c) => {
			c.source !== window || !Un(c.data) || !c.data.startsWith(r) || i(parseInt(c.data.slice(r.length)));
		});
	}
}();
var Dn = window.setImmediate, yn = window.clearImmediate;
function fn(n = "") {
	return document.createTextNode(n);
}
function z(n) {
	const e = document.createDocumentFragment();
	return n?.forEach((t) => {
		e.appendChild(t instanceof Node ? t : document.createTextNode(t));
	}), e;
}
function jn(n, e) {
	n.appendChild(e.length > 1 ? z(e) : e[0] instanceof Node ? e[0] : fn(e[0]));
}
function Ze(n, e, t) {
	n.replaceChild(z(e), t);
}
function de(n, e) {
	if (e) {
		if (T(e)) {
			for (const t in e) de(n, t);
			return;
		}
		return n.removeAttribute(e);
	}
}
function me(n, e, t) {
	if (e) {
		if (T(e)) {
			for (const i in e) me(n, i, e[i]);
			return;
		}
		N(t) || t === null ? de(n, e) : n.setAttribute(e, t);
	}
}
function ae(n, e, t) {
	if (e) for (const i in e) i && !N(e[i]) && me(n, i, e[i]);
	return t != null && t.length && jn(n, t), n;
}
function Je(n, e, ...t) {
	return ae(document.createElement(n), e, t);
}
function Kt(n, ...e) {
	return Je(n, void 0, ...e);
}
function Hn(n, e, t, i) {
	N(i) && (i = e.startsWith("touch") ? {
		capture: !1,
		passive: !0
	} : !1), n.addEventListener(e, t, i);
}
function O(n, ...e) {
	throw new Error(`Production min error: ${n}. Use development mode or visit https://[todo]/error/${n} for more detail.`);
}
var Ee = Symbol(), R = Symbol(), Wn = Symbol(), Bn = Symbol(), Rn = Symbol();
function Se(n) {
	n[v] = void 0, n[Bn] = void 0, n[R] = void 0;
	const e = n[Rn];
	yn(e.i), e.p = void 0;
}
function p(n, e) {
	if (!(e != null && e.length)) return n;
	if (!T(n)) return;
	let t = 0, i = n[e[t]];
	for (; t < e.length - 1;) {
		if (!T(i)) return;
		t++, i = i[e[t]];
	}
	return i;
}
function mn(n, e, t, i, o) {
	let r = n[G];
	r ?? (r = n[G] = /* @__PURE__ */ new Set());
	const c = {
		[v]: n,
		[Ee]: i,
		[R]: e,
		[Bn]: t,
		[Wn]: !!o,
		[Rn]: {
			i: 0,
			p: void 0
		}
	};
	return r.add(c), () => {
		r.delete(c), Se(c);
	};
}
function Vn(n, e) {
	var t, i;
	(t = n[G]) == null || t.forEach((o) => {
		const r = o[Bn], c = o[v];
		if (!c || !r) return;
		const u = o[Ee];
		if (!(u != null && u.length)) {
			const l = o[Rn];
			l.i > 0 && yn(l.i), l.i = Dn(() => {
				r(c, c, e);
			}), l.p = null;
			return;
		}
		const s = (e == null ? void 0 : e.length) ?? 0;
		let f = s === 0 || s <= u.length && e && !e.some((l, m) => l !== u[m]);
		if (!f && o[Wn] && s > u.length && e && !u.some((l, m) => e[m] !== l) && (f = !0), !f) return;
		const d = o[Rn];
		d.i > 0 && yn(d.i), e ? (d.p === void 0 || d.p !== null && e.length < d.p.length) && (d.p = e) : d.p = null, d.i = Dn(() => {
			const l = o[Wn], m = o[R], a = p(c, u);
			a !== m && (o[R] = a), (l || a !== m) && r(a, m, d.p ?? void 0), d.i = 0, d.p = void 0;
		});
	}), (i = n[U]) == null || i.forEach((o, r) => {
		o.forEach((c) => {
			Vn(r, e ? [c, ...e] : [c]);
		});
	});
}
function Jn(n, e) {
	Vn(n, [e]);
}
function $(n) {
	Vn(n);
}
var U = Symbol(), G = Symbol(), v = Symbol(), zn = Symbol(), L = /* @__PURE__ */ new WeakMap();
function ye(n) {
	if (n instanceof Node || n instanceof Error) return !0;
	const e = n.constructor;
	return e === OffscreenCanvas || e === RegExp || e === Date || e === Promise || e === Boolean;
}
function an(n) {
	return T(n) && !ye(n) && !n[zn];
}
function A(n, e, t) {
	let i = n[U];
	i ?? (i = n[U] = /* @__PURE__ */ new Map());
	let o = i.get(e);
	o || i.set(e, o = /* @__PURE__ */ new Set()), o.add(t);
}
function _n(n, e, t) {
	const i = n[U];
	if (!i) return;
	const o = i.get(e);
	o && (o.delete(t), o.size || i.delete(e));
}
function k(n) {
	if (!T(n)) return [void 0, n];
	const e = n[v];
	if (e) return [n, e];
	const t = L.get(n);
	return [t, t ? t[v] : n];
}
function _e(n, e, t, i) {
	const [o, r] = k(i);
	if (o) {
		if (In(t)) e[t] = r;
		else {
			const [s, f] = k(e[t]);
			if (s === o || f === r) return;
			s && _n(s, n, t), e[t] = r, A(o, n, t), Jn(n, t);
		}
		return;
	}
	if (In(t)) {
		e[t] = i;
		return;
	}
	const [c, u] = k(e[t]);
	if (c && _n(c, n, t), u !== i) {
		if (an(i)) A(en(i), n, t);
		e[t] = i, Jn(n, t);
	}
}
function pe() {
	let n, e;
	return {
		get(t, i) {
			if (i === v) return t;
			if (i === U) return e;
			if (i === G) return n;
			if (In(i)) return t[i];
			{
				const o = t[i];
				return T(o) ? L.get(o) ?? o : o;
			}
		},
		set(t, i, o, r) {
			return i === G ? n = o : i === U ? e = o : _e(r, t, i, o), !0;
		}
	};
}
function nt(n) {
	const e = new Proxy(n, pe());
	L.set(n, e);
	for (const t in n) he(e, n[t], t);
	return e;
}
function Te(n, e, ...t) {
	const i = e.length;
	return t.length === 0 ? i : (t.forEach((o, r) => {
		const [c, u] = k(o);
		c ? A(c, n, i + r) : an(o) && A(en(o), n, i + r), e.push(u);
	}), $(n), e.length);
}
function D(n, e, t) {
	const i = T(n) ? n[v] ? n : L.get(n) : void 0;
	return i && _n(i, e, t), i;
}
function Gn(n, e, t, i, o) {
	if (i > o) return;
	let r = t > 0 ? o : i;
	const c = t > 0 ? i : o, u = t > 0 ? -1 : 1;
	for (;;) {
		const s = D(n[r], e, r);
		if (s && A(s, e, r + t), r == c) break;
		r += u;
	}
}
function et(n, e) {
	if (e.length === 0) return;
	const t = e.pop(), i = D(t, n, e.length);
	return $(n), i ?? t;
}
function tt(n, e, ...t) {
	const i = t.length, o = e.length;
	if (i === 0) return o;
	o > 0 && Gn(e, n, i, 0, o - 1);
	for (let r = i - 1; r >= 0; r--) {
		const c = t[r], [u, s] = k(c);
		u ? A(u, n, r) : an(c) && A(en(c), n, r), e.unshift(s);
	}
	return $(n), o + i;
}
function it(n, e) {
	const t = e.length;
	if (t === 0) return;
	const i = e[0], o = D(i, n, 0);
	return t > 1 && Gn(e, n, -1, 1, t - 1), e.shift(), $(n), o ?? i;
}
function ot(n, e) {
	return q(n.concat(e[v] ?? e));
}
function rt(n, e, t) {
	return q(n.slice(e, t));
}
function X(n, e, t) {
	return t(T(n) ? L.get(n) ?? n : n, e);
}
function ct(n, e) {
	return q(n.filter(function(t, i) {
		return X(t, i, e);
	}));
}
function ut(n, e) {
	return q(n.map(function(t, i) {
		return X(t, i, e);
	}));
}
function ft(n, e) {
	n.forEach((t, i) => {
		X(t, i, e);
	});
}
function st(n, e) {
	return n.some((t, i) => X(t, i, e));
}
function lt(n, e) {
	return n.every((t, i) => X(t, i, e));
}
function dt(n, e) {
	return n.findIndex((t, i) => X(t, i, e));
}
function mt(n, e) {
	return n.findLastIndex((t, i) => X(t, i, e));
}
function at(n, e) {
	const t = n.findLast((i, o) => X(i, o, e));
	return T(t) ? L.get(t) ?? t : t;
}
function Et(n, e) {
	const t = n.find((i, o) => X(i, o, e));
	return T(t) ? L.get(t) ?? t : t;
}
function St(n, e, t, i, o) {
	if (e.length === 0 || (N(i) && (i = 0), N(o) && (o = e.length), o <= i)) return n;
	const c = k(t);
	let u = c[0];
	!u && an(t) && (u = en(t));
	const s = c[1];
	for (let f = i; f < o; f++) D(e[f], n, f), u && A(u, n, f), e[f] = s;
	return $(n), n;
}
function yt(n, e) {
	const t = e.length;
	if (t <= 1) return n;
	const i = e[0];
	D(i, n, 0);
	const o = t >> 1;
	for (let r = 0; r < o; r++) {
		const c = t - 1 - r, u = D(e[r], n, r), s = D(e[c], n, c), f = e[r];
		e[r] = e[c], e[c] = f, u && A(u, n, c), s && A(s, n, r);
	}
	return $(n), n;
}
function _t(n, e, t) {
	return e.length <= 1 || (e.forEach((i, o) => {
		D(i, n, o);
	}), e.sort(t), e.forEach((i, o) => {
		if (T(i)) {
			const r = i[v] ? i : L.get(i);
			r && A(r, n, o);
		}
	}), $(n)), n;
}
function Tt(n, e, t, i, ...o) {
	if (N(t) && (t = 0), N(i) && (i = 0), i === 0 && o.length === 0) return q([]);
	const r = e.length;
	if (r === 0) return o.length > 0 && (Te(n, e, ...o), $(n)), q([]);
	const c = [], u = q(c);
	if (i > 0) for (let f = t; f < t + i; f++) {
		const d = e[f], l = D(d, n, f);
		c.push(l ? l[v] : d), l && A(l, u, f - t);
	}
	const s = o.length - i;
	return s !== 0 && Gn(e, n, s, t + i, r - 1), e.splice(t, i), o.forEach((f, d) => {
		const [l, m] = k(f), a = t + d;
		l ? A(l, n, a) : an(f) && A(en(f), n, a), e.splice(a, 0, m);
	}), $(n), u;
}
function ht(n, e, t) {
	const i = e.length;
	if (i !== t) {
		if (i > t) for (let o = t; o < i; o++) D(e[o], n, o);
		e.length = t, $(n);
	}
}
function Qn(n) {
	return Un(n) && /^\d+$/.test(n) ? parseInt(n) : n;
}
function Y(n, e, t) {
	return function(...i) {
		return t(n, e, ...i);
	};
}
var vt = new Set(Object.getOwnPropertyNames(Array.prototype));
function bt() {
	let n, e;
	return {
		get(t, i, o) {
			if (i === v) return t;
			if (i === U) return e;
			if (i === G) return n;
			if (In(i)) return t[i];
			if (i === "push") return Y(o, t, Te);
			if (i === "pop") return Y(o, t, et);
			if (i === "unshift") return Y(o, t, tt);
			if (i === "shift") return Y(o, t, it);
			if (i === "splice") return Y(o, t, Tt);
			if (i === "concat") return function(r) {
				return ot(t, r);
			};
			if (i === "slice") return function(r, c) {
				return rt(t, r, c);
			};
			if (i === "filter") return function(r) {
				return ct(t, r);
			};
			if (i === "map") return function(r) {
				return ut(t, r);
			};
			if (i === "forEach") return function(r) {
				return ft(t, r);
			};
			if (i === "some") return function(r) {
				return st(t, r);
			};
			if (i === "every") return function(r) {
				return lt(t, r);
			};
			if (i === "find") return function(r) {
				return Et(t, r);
			};
			if (i === "findLast") return function(r) {
				return at(t, r);
			};
			if (i === "findIndex") return function(r) {
				return dt(t, r);
			};
			if (i === "findLastIndex") return function(r) {
				return mt(t, r);
			};
			if (i === "fill") return Y(o, t, St);
			if (i === "sort") return Y(o, t, _t);
			if (i === "reverse") return Y(o, t, yt);
			if (i === "includes") return function(r) {
				return t.includes(kn(r));
			};
			if (i === "indexOf") return function(r) {
				return t.indexOf(kn(r));
			};
			if (i === "length") return t.length;
			if (vt.has(i)) return t[i].bind(t);
			{
				const c = t[Qn(i)];
				return T(c) ? L.get(c) ?? c : c;
			}
		},
		set(t, i, o, r) {
			return i === G ? n = o : i === U ? e = o : i === "length" ? ht(r, t, o) : _e(r, t, Qn(i), o), !0;
		}
	};
}
function q(n) {
	const e = new Proxy(n, bt());
	L.set(n, e);
	for (let t = 0; t < n.length; t++) he(e, n[t], t);
	return e;
}
function he(n, e, t) {
	if (!an(e)) return;
	let i = e[v] ? e : L.get(e);
	i ?? (i = en(e)), A(i, n, t);
}
function en(n) {
	return le(n) ? q(n) : nt(n);
}
function ve(n) {
	return !T(n) || n[v] || ye(n) || n[zn] ? n : L.get(n) ?? en(n);
}
function kn(n) {
	return T(n) ? n[v] ?? n : n;
}
var Re = Symbol(), E = Symbol(), Tn = Symbol(), rn = Symbol(), _ = Symbol(), cn = Symbol(), un = Symbol(), Z = Symbol(), ln = Symbol();
function En(n) {
	return !!n[Re];
}
var ee, te, ie, oe, re, ce, ue, fe, se = Re;
fe = _, ue = ln, ce = Z, re = Tn, oe = rn, ie = cn, te = un, ee = E;
var I = class {
	constructor(e) {
		/**
		* 用于判定是否是 Component 的属性。比 instanceof 要快很多。https://jsperf.app/bufamo
		*/
		F(this, se, !0);
		/**
		* 将构造函数传递来的 attrs 存下来，以便可以在后期使用，以及在组件销毁时销毁该 attrs。
		* 如果传递的 attrs 不是 ViewModel，则说明没有需要监听绑定的 attribute，不保存该 attrs。
		*/
		/**
		* 组件的上下文对象
		*/
		F(this, fe);
		F(this, ue, 0);
		/**
		* 组件的状态
		*/
		F(this, ce, 0);
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
		F(this, re, []);
		F(this, oe);
		F(this, ie);
		/**
		* store functions will be called before unmount/destroy
		*/
		F(this, te);
		/**
		* ROOT_NODES means root children of this component,
		*   include html-nodes and component-nodes.
		* We use this infomation to remove DOM after this component is destroied.
		* We do not maintain the whole parent-child view-tree but only root children,
		* because when we remove the root children, whole view-tree will be
		* removed, so we do not need waste memory to maintain whole view-tree.
		*/
		F(this, ee, []);
		this[_] = e;
	}
};
function j(n) {
	var e;
	for (const t of n[E]) En(t) && j(t);
	for (const t of n[Tn]) j(t);
	(e = n[cn]) == null || e.forEach((t) => {
		const i = t();
		bn(i) && h(n, i);
	}), n[cn] && (n[cn].length = 0), n[Z] = 1, n[ln] = n[ln] === 1 ? 3 : 2;
}
function h(n, e) {
	let t = n[un];
	t ?? (t = n[un] = []), t.push(e);
}
function M(n, e, t) {
	const i = e(t, n);
	return i != null && i.length || O("fc-render-empty"), i;
}
function K(n, e, t) {
	if (!e) return [];
	const i = e(t, n);
	return i != null && i.length || O("fc-render-empty"), i;
}
function ri(n, e, t, i) {
	const o = new I(i), r = M(o, n, t ?? {});
	return e !== document.body ? Ze(e.parentNode, r, e) : jn(e, r), j(o), o;
}
function Nt(n, e, t, i, o) {
	if (!n) {
		t(void 0);
		return;
	}
	const r = p(n, e), c = i === 1 ? (u) => t(!u) : i === 2 ? (u) => t(!!u) : t;
	c(r), !N(n[v]) && h(o, mn(n, r, c, e, !0));
}
function li(n, e, t, i) {
	Nt(n, e, t, 0, i);
}
//#endregion
//#region src/App.tsx
function B(props, rthost$jg$) {
	return [(() => {
		const $jg$ = Kt("div", ...props["slot:a"] ? [Kt("p", "B: ", ...(() => {
			const $jg$ = new I(rthost$jg$[_]);
			rthost$jg$[Tn].push($jg$);
			return K($jg$, props["slot:a"]);
		})())] : [Kt("p", "B22")]);
		rthost$jg$[E].push($jg$);
		return $jg$;
	})()];
}
function App(attrs$jg$, rthost$jg$) {
	const state = ve({
		a: true,
		b: [
			1,
			2,
			3
		],
		c: 0
	});
	return [...(() => {
		const attrs$jg$ = ve({});
		li(state, ["a"], (v) => attrs$jg$.v = v, rthost$jg$);
		const $jg$ = new I(rthost$jg$[_]);
		rthost$jg$[E].push($jg$);
		return M($jg$, B, attrs$jg$);
	})(), (() => {
		const $jg$ = Kt("p", (() => {
			const $jg$ = Kt("button", "TEST");
			Hn($jg$, "click", () => {
				state.c++;
				state.a = !state.a;
				state.b.push(Math.random() * 1e3 | 0);
			});
			return $jg$;
		})());
		rthost$jg$[E].push($jg$);
		return $jg$;
	})()];
}
//#endregion
//#region src/index.ts
ri(App, document.getElementById("app"));
//#endregion
