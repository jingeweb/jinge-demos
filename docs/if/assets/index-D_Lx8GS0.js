(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function e(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=e(o);fetch(o.href,i)}})();var Jt=Object.defineProperty,_t=(t,n,e)=>n in t?Jt(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,v=(t,n,e)=>_t(t,typeof n!="symbol"?n+"":n,e);function J(t){return typeof t}function T(t){return typeof t=="symbol"}function m(t){return t!==null&&J(t)==="object"}function _(t){return J(t)==="string"}function y(t){return J(t)==="undefined"}function Qt(t){return Array.isArray(t)}function $t(t){return J(t)==="function"}const Ut=function(){};y(window.setImmediate)&&function(){let t=1;const n=new Map;function e(o){try{const i=n.get(o);i&&(n.delete(o),i())}catch(i){console.error(i)}}function r(o){n.delete(o)}if(window.clearImmediate=r,!y(window.queueMicrotask))window.setImmediate=function(o){const i=t++;return n.set(i,o),window.queueMicrotask(()=>{e(i)}),i};else{const o=`setImmediate$${Date.now().toString(32)}${Math.floor(Math.random()*16777215).toString(32)}$`;window.setImmediate=function(i){const u=t++;return n.set(u,i),window.postMessage(`${o}${t}`),u},window.addEventListener("message",i=>{i.source!==window||!_(i.data)||!i.data.startsWith(o)||e(parseInt(i.data.slice(o.length)))})}}();const lt=window.setImmediate,V=window.clearImmediate;function Vt(t){return t===null?"null":t===void 0?"undefined":t instanceof Error?t.message:m(t)?JSON.stringify(t):`${t}`}function bt(t,n){t.textContent=Vt(n)}function nt(t=""){return document.createTextNode(t)}function et(t){const n=document.createDocumentFragment();return t==null||t.forEach(e=>{n.appendChild(_(e)?document.createTextNode(e):e)}),n}function ht(t){return document.createComment(t??"")}function St(t,n){t.appendChild(n.length>1?et(n):_(n[0])?nt(n[0]):n[0])}function Xt(t,n,e){t.replaceChild(et(n),e)}function jt(t,n){if(n){if(m(n)){for(const e in n)jt(t,e);return}return t.removeAttribute(n)}}function Et(t,n,e){if(n){if(m(n)){for(const r in n)Et(t,r,n[r]);return}y(e)||e===null?jt(t,n):t.setAttribute(n,e)}}function Yt(t,n,e){if(n)for(const r in n)r&&!y(n[r])&&Et(t,r,n[r]);return e!=null&&e.length&&St(t,e),t}function Zt(t,n,...e){return Yt(document.createElement(t),n,e)}function a(t,...n){return Zt(t,void 0,...n)}function Ht(t,n,e){t.insertBefore(n,e?e.nextSibling:null)}function tn(t,n,e){t.insertBefore(n,e??null)}function dt(t,n,e,r){y(r)&&(r=n.startsWith("touch")?{capture:!1,passive:!0}:!1),t.addEventListener(n,e,r)}const It=Symbol(),W=Symbol(),X=Symbol(),rt=Symbol(),D=Symbol();function nn(t){t[p]=void 0,t[rt]=void 0,t[W]=void 0;const n=t[D];V(n.i),n.p=void 0}function ot(t,n){if(!(n!=null&&n.length))return t;if(!m(t))return;let e=0,r=t[n[e]];for(;e<n.length-1;){if(!m(r))return;e++,r=r[n[e]]}return r}function Q(t,n,e,r,o){const i=e?ot(t,e):t;return o&&n(i,void 0),rn(t)?xt(t,i,n,e,r):Ut}function xt(t,n,e,r,o){let i=t[A];i||(i=t[A]=new Set);const u={[p]:t,[It]:r,[W]:n,[rt]:e,[X]:!!o,[D]:{i:0,p:void 0}};return i.add(u),()=>{i.delete(u),nn(u)}}function en(t,n,e,r){return $t(n)?Q(t,n,void 0,!0,e==null?void 0:e.immediate):Array.isArray(n)?Q(t,e,n,void 0,void 0):Q(t,e,[n],void 0,void 0)}function it(t,n){var e,r;(e=t[A])==null||e.forEach(o=>{const i=o[rt],u=o[p];if(!u||!i)return;const s=o[It];if(!(s!=null&&s.length)){const f=o[D];f.i>0&&V(f.i),f.i=lt(()=>{i(u,u)}),f.p=null;return}const c=(n==null?void 0:n.length)??0;let l=c===0||c<=s.length&&n&&!n.some((f,b)=>f!==s[b]);if(!l&&o[X]&&c>s.length&&n&&!s.some((f,b)=>n[b]!==f)&&(l=!0),!l)return;const h=o[D];h.i>0&&V(h.i),n?(h.p===void 0||h.p!==null&&n.length<h.p.length)&&(h.p=n):h.p=null,h.i=lt(()=>{const f=o[X],b=o[W],E=ot(u,s);E!==b&&(o[W]=E),(f||E!==b)&&i(E,b,h.p??void 0),h.i=0,h.p=void 0})}),(r=t[O])==null||r.forEach((o,i)=>{o.forEach(u=>{it(i,n?[u,...n]:[u])})})}function at(t,n){it(t,[n])}function $(t){it(t)}const O=Symbol(),A=Symbol(),p=Symbol(),Ot=Symbol(),j=new WeakMap;function Nt(t){if(t instanceof Node||t instanceof Error||t instanceof Promise)return!0;const n=t.constructor;return n===RegExp||n===Date||n===Boolean}function rn(t){return m(t)&&t[p]!==void 0}function k(t){return m(t)&&!Nt(t)&&!t[Ot]}function g(t,n,e){let r=t[O];r||(r=t[O]=new Map);let o=r.get(n);o||r.set(n,o=new Set),o.add(e)}function Y(t,n,e){const r=t[O];if(!r)return;const o=r.get(n);o&&(o.delete(e),o.size||r.delete(n))}function N(t){if(!m(t))return[void 0,t];const n=t[p];if(n)return[t,n];const e=j.get(t);return[e,e?e[p]:t]}function Ct(t,n,e,r){const[o,i]=N(r);if(o){if(T(e))n[e]=i;else{const[c,l]=N(n[e]);if(c===o||l===i)return;c&&Y(c,t,e),n[e]=i,g(o,t,e),at(t,e)}return}if(T(e)){n[e]=r;return}const[u,s]=N(n[e]);if(u&&Y(u,t,e),s!==r){if(k(r)){const c=L(r);g(c,t,e)}n[e]=r,at(t,e)}}function on(){let t,n;return{get(e,r){if(r===p)return e;if(r===O)return n;if(r===A)return t;if(T(r))return e[r];{const o=e[r];return m(o)?j.get(o)??o:o}},set(e,r,o,i){return r===A?t=o:r===O?n=o:Ct(i,e,r,o),!0}}}function un(t){const n=new Proxy(t,on());j.set(t,n);for(const e in t)Lt(n,t[e],e);return n}function At(t,n,...e){const r=n.length;return e.length===0?r:(e.forEach((o,i)=>{const[u,s]=N(o);u?g(u,t,r+i):k(o)&&g(L(o),t,r+i),n.push(s)}),$(t),n.length)}function w(t,n,e){const r=m(t)?t[p]?t:j.get(t):void 0;return r&&Y(r,n,e),r}function ut(t,n,e,r,o){if(r>o)return;let i=e>0?o:r;const u=e>0?r:o,s=e>0?-1:1;for(;;){const c=w(t[i],n,i);if(c&&g(c,n,i+e),i==u)break;i+=s}}function sn(t,n){if(n.length===0)return;const e=n.pop(),r=w(e,t,n.length);return $(t),r??e}function cn(t,n,...e){const r=e.length,o=n.length;if(r===0)return o;o>0&&ut(n,t,r,0,o-1);for(let i=r-1;i>=0;i--){const u=e[i],[s,c]=N(u);s?g(s,t,i):k(u)&&g(L(u),t,i),n.unshift(c)}return $(t),o+r}function fn(t,n){const e=n.length;if(e===0)return;const r=n[0],o=w(r,t,0);return e>1&&ut(n,t,-1,1,e-1),n.shift(),$(t),o??r}function ln(t,n){return x(t.concat(n[p]??n))}function hn(t,n,e){return x(t.slice(n,e))}function dn(t,n){return x(t.filter(n))}function an(t,n){return x(t.map(n))}function gn(t,n,e,r,o){if(n.length===0||(y(r)&&(r=0),y(o)&&(o=n.length),o<=r))return t;const i=N(e);let u=i[0];!u&&k(e)&&(u=L(e));const s=i[1];for(let c=r;c<o;c++)w(n[c],t,c),u&&g(u,t,c),n[c]=s;return $(t),t}function pn(t,n){const e=n.length;if(e<=1)return t;const r=n[0];w(r,t,0);const o=e>>1;for(let i=0;i<o;i++){const u=e-1-i,s=w(n[i],t,i),c=w(n[u],t,u),l=n[i];n[i]=n[u],n[u]=l,s&&g(s,t,u),c&&g(c,t,i)}return $(t),t}function mn(t,n,e){return n.length<=1||(n.forEach((r,o)=>{w(r,t,o)}),n.sort(e),n.forEach((r,o)=>{if(m(r)){const i=r[p]?r:j.get(r);i&&g(i,t,o)}}),$(t)),t}function vn(t,n,e,r,...o){if(y(e)&&(e=0),y(r)&&(r=0),r===0&&o.length===0)return x([]);const i=n.length;if(i===0)return o.length>0&&(At(t,n,...o),$(t)),x([]);const u=[],s=x(u);if(r>0)for(let l=e;l<e+r;l++){const h=n[l],f=w(h,t,l);u.push(f?f[p]:h),f&&g(f,s,l-e)}const c=o.length-r;return c!==0&&ut(n,t,c,e+r,i-1),n.splice(e,r),o.forEach((l,h)=>{const[f,b]=N(l),E=e+h;f?g(f,t,E):k(l)&&g(L(l),t,E),n.splice(E,0,b)}),$(t),s}function wn(t,n,e){const r=n.length;if(r!==e){if(r>e)for(let o=e;o<r;o++)w(n[o],t,o);n.length=e,$(t)}}function gt(t){return _(t)&&/^\d+$/.test(t)?parseInt(t):t}function I(t,n,e){return function(...r){return e(t,n,...r)}}const yn=new Set(Object.getOwnPropertyNames(Array.prototype));function $n(){let t,n;return{get(e,r,o){if(r===p)return e;if(r===O)return n;if(r===A)return t;if(T(r))return e[r];if(r==="push")return I(o,e,At);if(r==="pop")return I(o,e,sn);if(r==="unshift")return I(o,e,cn);if(r==="shift")return I(o,e,fn);if(r==="splice")return I(o,e,vn);if(r==="concat")return function(i){return ln(e,i)};if(r==="slice")return function(i,u){return hn(e,i,u)};if(r==="filter")return function(i){return dn(e,i)};if(r==="map")return function(i){return an(e,i)};if(r==="fill")return I(o,e,gn);if(r==="sort")return I(o,e,mn);if(r==="reverse")return I(o,e,pn);if(r==="includes")return e.includes.bind(e);if(r==="length")return e.length;if(yn.has(r))return e[r].bind(e);{const i=gt(r),u=e[i];return m(u)?j.get(u)??u:u}},set(e,r,o,i){return r===A?t=o:r===O?n=o:r==="length"?wn(i,e,o):Ct(i,e,gt(r),o),!0}}}function x(t){const n=new Proxy(t,$n());j.set(t,n);for(let e=0;e<t.length;e++)Lt(n,t[e],e);return n}function Lt(t,n,e){if(!k(n))return;let r=n[p]?n:j.get(n);r||(r=L(n)),g(r,t,e)}function L(t){return Qt(t)?x(t):un(t)}function B(t){return!m(t)||t[p]||Nt(t)||t[Ot]?t:j.get(t)??L(t)}const bn=0,Sn=1,pt=2,jn=3,En=0,In=1,xn=2,On=3,Mt=Symbol(),d=Symbol(),C=Symbol(),P=Symbol(),Z=Symbol(),F=Symbol(),S=Symbol(),K=Symbol(),M=Symbol(),q=Symbol(),H=Symbol();function st(t){return!!t[Mt]}var Pt,kt,qt,Bt,zt,Ft,Kt,Rt,Tt,Wt;Wt=Mt,Tt=S,Rt=H,Kt=P,Ft=q,zt=C,Bt=F,qt=K,kt=M,Pt=d;class ct{constructor(){v(this,Wt,!0),v(this,Tt),v(this,Rt,En),v(this,Kt),v(this,Ft,bn),v(this,zt,[]),v(this,Bt),v(this,qt),v(this,kt),v(this,Pt,[]),this[P]={}}}function Dt(t){const n=t[d],e=n[n.length-1];return st(e)?Dt(e):e}function G(t){var n;for(const e of t[d])st(e)&&G(e);for(const e of t[C])G(e);(n=t[K])==null||n.forEach(e=>{const r=e();$t(r)&&ft(t,r)}),t[K]&&(t[K].length=0),t[q]=Sn,t[H]=t[H]===In?On:xn}function ft(t,n){let e=t[M];e||(e=t[M]=[]),e.push(n)}function Gt(t,n=!0){for(const r of t[C])mt(r,!1);let e=null;for(const r of t[d])st(r)?mt(r,n):n&&(e||(e=r.parentNode),e.removeChild(r));t[C].length=0,t[d].length=0}function mt(t,n=!0){var e,r;t[q]>=pt||(t[q]=pt,(e=t[M])==null||e.forEach(o=>o()),t[M]&&(t[M].length=0),Gt(t,n),(r=t[F])==null||r.forEach(o=>{m(o)?o.value=void 0:o(void 0)}),t[F]&&(t[F].length=0),t[q]=jn,t[S]=void 0)}function vt(t,n){const e=new ct;return e[S]=t,Object.assign(e[P],n),e}function tt(t,n){const e=new ct;return e[S]=t,n&&(e[P][Z]=n),e}function R(t,n,e){return n.call(t,e)}function wt(t,n,e){return n?n(t,e):[]}function Nn(t,n,e){const r=new ct,o=R(r,t,e);return n!==document.body?Xt(n.parentNode,o,n):St(n,o),G(r),r}function yt(t,n){const e=nt("");return bt(e,n),t[d].push(e),e}function Cn(t,n,e,r,o){if(!t){e(void 0);return}const i=ot(t,n),u=e;u(i),!y(t[p])&&ft(o,xt(t,i,u,n,!0))}function z(t,n,e,r){Cn(t,n,e,0,r)}function U(t){const n=()=>{const r=this[P],o=!!t.expect,i=r[o.toString()]??(o?r[Z]:void 0),u=this[d];if(i){const s=tt(this[S]);return u.push(s),wt(s,i)}else{const s=ht(o.toString());return u.push(s),u}},e=r=>{const o=Dt(this),i=o.parentNode,u=ht(r.toString());Ht(i,u,o),Gt(this);const s=this[d];s.length=0;const c=this[P],l=c[r.toString()]??(r?c[Z]:void 0);if(l){const h=tt(this[S]);s.push(h);const f=wt(h,l);tn(i,f.length>1?et(f):f[0],u),i.removeChild(u),G(h)}else s.push(u)};return ft(this,en(t,"expect",r=>e(!!r))),n()}function An(){const t=B({show:!0});return[(()=>{const n=a("h1","If 条件判定和渲染");return this[d].push(n),n})(),(()=>{const n=a("p","jinge 框架中，一切都是组件，也只有组件、属性和插槽的概念。",a("br"),"根据条件语句进行不同的渲染，也是由 ",a("code","If")," 组件支撑。例如：");return this[d].push(n),n})(),(()=>{const n=a("div",...(()=>{const e=B({});z(t,["show"],o=>e.expect=o,this);const r=tt(this[S],o=>[(()=>{const i=a("div","我显示出来啦！");return o[d].push(i),i})()]);return this[C].push(r),R(r,U,e)})(),(()=>{const e=a("button",...(()=>{const r=B({});z(t,["show"],i=>r.expect=i,this);const o=vt(this[S],{true:i=>[yt(i,"隐藏")],false:i=>[yt(i,"显式")]});return this[C].push(o),R(o,U,r)})());return dt(e,"click",()=>t.show=!t.show),e})());return this[d].push(n),n})(),(()=>{const n=a("p","上面例子代码是：");return this[d].push(n),n})(),(()=>{const n=a("pre",a("code",`<If expect={state.show}>
  <div>我显示出来啦！</div>
</If>
<button onClick={() => state.show = !state.show}>
  <If expect={state.show}>
    {{
      true: '隐藏',
      false: '显式'
    }}
  </If>
</button>`));return this[d].push(n),n})(),(()=>{const n=a("p","为了书写上更方便，也为了兼容 React 的 tsx 的写法，jinge 编译器可以把 ",a("code","? :"),"表达式自动转成使用 If 组件的写法。例如上述例子可以写成：");return this[d].push(n),n})(),(()=>{const n=a("pre",a("code",`{state.show ? <div>出来啦！</div> : <div>不见啦!</div>}
<button onClick={() => (state.show = !state.show)}>{state.show ? '隐藏' : '显式'}</button>`));return this[d].push(n),n})(),(()=>{const n=a("p","上述代码的效果如下：");return this[d].push(n),n})(),(()=>{const n=a("div",...(()=>{const e=B({});z(t,["show"],o=>e.expect=o,this);const r=vt(this[S],{true:o=>[(()=>{const i=a("div","出来啦！");return o[d].push(i),i})()],false:o=>[(()=>{const i=a("div","不见啦!");return o[d].push(i),i})()]});return this[C].push(r),R(r,U,e)})(),(()=>{const e=a("button",(()=>{const r=nt("");return z(t,["show"],o=>bt(r,o?"隐藏":"显式"),this),r})());return dt(e,"click",()=>t.show=!t.show),e})());return this[d].push(n),n})()]}Nn(An,document.getElementById("app"));
