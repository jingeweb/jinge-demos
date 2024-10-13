(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function e(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=e(r);fetch(r.href,i)}})();var an=Object.defineProperty,hn=(t,n,e)=>n in t?an(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,w=(t,n,e)=>hn(t,typeof n!="symbol"?n+"":n,e);function ht(t){return typeof t}function it(t){return typeof t=="symbol"}function v(t){return t!==null&&ht(t)==="object"}function gt(t){return ht(t)==="string"}function S(t){return ht(t)==="undefined"}function gn(t){return Array.isArray(t)}function Ft(t){return ht(t)==="function"}const pn=function(){};S(window.setImmediate)&&function(){let t=1;const n=new Map;function e(r){try{const i=n.get(r);i&&(n.delete(r),i())}catch(i){console.error(i)}}function o(r){n.delete(r)}if(window.clearImmediate=o,!S(window.queueMicrotask))window.setImmediate=function(r){const i=t++;return n.set(i,r),window.queueMicrotask(()=>{e(i)}),i};else{const r=`setImmediate$${Date.now().toString(32)}${Math.floor(Math.random()*16777215).toString(32)}$`;window.setImmediate=function(i){const c=t++;return n.set(c,i),window.postMessage(`${r}${t}`),c},window.addEventListener("message",i=>{i.source!==window||!gt(i.data)||!i.data.startsWith(r)||e(parseInt(i.data.slice(r.length)))})}}();const vt=window.setImmediate,U=window.clearImmediate;function mn(t){return t===null?"null":t===void 0?"undefined":t instanceof Error?t.message:v(t)?JSON.stringify(t):`${t}`}function yn(t,n){t.textContent=mn(n)}function Jt(t=""){return document.createTextNode(t)}function T(t){const n=document.createDocumentFragment();return t==null||t.forEach(e=>{n.appendChild(gt(e)?document.createTextNode(e):e)}),n}function Ct(t){return document.createComment(t??"")}function qt(t,n){t.appendChild(n.length>1?T(n):gt(n[0])?Jt(n[0]):n[0])}function vn(t,n,e){t.replaceChild(T(n),e)}function Bt(t,n){if(n){if(v(n)){for(const e in n)Bt(t,e);return}return t.removeAttribute(n)}}function Kt(t,n,e){if(n){if(v(n)){for(const o in n)Kt(t,o,n[o]);return}S(e)||e===null?Bt(t,n):t.setAttribute(n,e)}}function bn(t,n,e){if(n)for(const o in n)o&&!S(n[o])&&Kt(t,o,n[o]);return e!=null&&e.length&&qt(t,e),t}function W(t,n,...e){return bn(document.createElement(t),n,e)}function g(t,...n){return W(t,void 0,...n)}function Sn(t,n,e){t.insertBefore(n,e?e.nextSibling:null)}function K(t,n,e){t.insertBefore(n,e??null)}function q(t,n,e,o){S(o)&&(o=n.startsWith("touch")?{capture:!1,passive:!0}:!1),t.addEventListener(n,e,o)}function wn(t,...n){throw new Error(`Production min error: ${t}. Use development mode or visit https://[todo]/error/${t} for more detail.`)}const zt=Symbol(),N=Symbol(),bt=Symbol(),xt=Symbol(),ct=Symbol();function En(t){t[m]=void 0,t[xt]=void 0,t[N]=void 0;const n=t[ct];U(n.i),n.p=void 0}function pt(t,n){if(!(n!=null&&n.length))return t;if(!v(t))return;let e=0,o=t[n[e]];for(;e<n.length-1;){if(!v(o))return;e++,o=o[n[e]]}return o}function yt(t,n,e,o,r){const i=e?pt(t,e):t;return r&&n(i,void 0),Ot(t)?mt(t,i,n,e,o):pn}function mt(t,n,e,o,r){let i=t[L];i||(i=t[L]=new Set);const c={[m]:t,[zt]:o,[N]:n,[xt]:e,[bt]:!!r,[ct]:{i:0,p:void 0}};return i.add(c),()=>{i.delete(c),En(c)}}function Gt(t,n,e,o){return Ft(n)?yt(t,n,void 0,!0,e==null?void 0:e.immediate):Array.isArray(n)?yt(t,e,n,void 0,void 0):yt(t,e,[n],void 0,void 0)}function Nt(t,n){var e,o;(e=t[L])==null||e.forEach(r=>{const i=r[xt],c=r[m];if(!c||!i)return;const u=r[zt];if(!(u!=null&&u.length)){const d=r[ct];d.i>0&&U(d.i),d.i=vt(()=>{i(c,c,n)}),d.p=null;return}const s=(n==null?void 0:n.length)??0;let l=s===0||s<=u.length&&n&&!n.some((d,h)=>d!==u[h]);if(!l&&r[bt]&&s>u.length&&n&&!u.some((d,h)=>n[h]!==d)&&(l=!0),!l)return;const f=r[ct];f.i>0&&U(f.i),n?(f.p===void 0||f.p!==null&&n.length<f.p.length)&&(f.p=n):f.p=null,f.i=vt(()=>{const d=r[bt],h=r[N],a=pt(c,u);a!==h&&(r[N]=a),(d||a!==h)&&i(a,h,f.p??void 0),f.i=0,f.p=void 0})}),(o=t[C])==null||o.forEach((r,i)=>{r.forEach(c=>{Nt(i,n?[c,...n]:[c])})})}function Mt(t,n){Nt(t,[n])}function $(t){Nt(t)}const C=Symbol(),L=Symbol(),m=Symbol(),Rt=Symbol(),O=new WeakMap;function Wt(t){if(t instanceof Node||t instanceof Error||t instanceof Promise)return!0;const n=t.constructor;return n===RegExp||n===Date||n===Boolean}function Ot(t){return v(t)&&t[m]!==void 0}function G(t){return v(t)&&!Wt(t)&&!t[Rt]}function y(t,n,e){let o=t[C];o||(o=t[C]=new Map);let r=o.get(n);r||o.set(n,r=new Set),r.add(e)}function St(t,n,e){const o=t[C];if(!o)return;const r=o.get(n);r&&(r.delete(e),r.size||o.delete(n))}function D(t){if(!v(t))return[void 0,t];const n=t[m];if(n)return[t,n];const e=O.get(t);return[e,e?e[m]:t]}function Qt(t,n,e,o){const[r,i]=D(o);if(r){if(it(e))n[e]=i;else{const[s,l]=D(n[e]);if(s===r||l===i)return;s&&St(s,t,e),n[e]=i,y(r,t,e),Mt(t,e)}return}if(it(e)){n[e]=o;return}const[c,u]=D(n[e]);if(c&&St(c,t,e),u!==o){if(G(o)){const s=F(o);y(s,t,e)}n[e]=o,Mt(t,e)}}function $n(){let t,n;return{get(e,o){if(o===m)return e;if(o===C)return n;if(o===L)return t;if(it(o))return e[o];{const r=e[o];return v(r)?O.get(r)??r:r}},set(e,o,r,i){return o===L?t=r:o===C?n=r:Qt(i,e,o,r),!0}}}function xn(t){const n=new Proxy(t,$n());O.set(t,n);for(const e in t)Vt(n,t[e],e);return n}function Ut(t,n,...e){const o=n.length;return e.length===0?o:(e.forEach((r,i)=>{const[c,u]=D(r);c?y(c,t,o+i):G(r)&&y(F(r),t,o+i),n.push(u)}),$(t),n.length)}function E(t,n,e){const o=v(t)?t[m]?t:O.get(t):void 0;return o&&St(o,n,e),o}function It(t,n,e,o,r){if(o>r)return;let i=e>0?r:o;const c=e>0?o:r,u=e>0?-1:1;for(;;){const s=E(t[i],n,i);if(s&&y(s,n,i+e),i==c)break;i+=u}}function Nn(t,n){if(n.length===0)return;const e=n.pop(),o=E(e,t,n.length);return $(t),o??e}function On(t,n,...e){const o=e.length,r=n.length;if(o===0)return r;r>0&&It(n,t,o,0,r-1);for(let i=o-1;i>=0;i--){const c=e[i],[u,s]=D(c);u?y(u,t,i):G(c)&&y(F(c),t,i),n.unshift(s)}return $(t),r+o}function In(t,n){const e=n.length;if(e===0)return;const o=n[0],r=E(o,t,0);return e>1&&It(n,t,-1,1,e-1),n.shift(),$(t),r??o}function kn(t,n){return A(t.concat(n[m]??n))}function An(t,n,e){return A(t.slice(n,e))}function Cn(t,n){return A(t.filter(n))}function Mn(t,n){return A(t.map(n))}function jn(t,n,e,o,r){if(n.length===0||(S(o)&&(o=0),S(r)&&(r=n.length),r<=o))return t;const i=D(e);let c=i[0];!c&&G(e)&&(c=F(e));const u=i[1];for(let s=o;s<r;s++)E(n[s],t,s),c&&y(c,t,s),n[s]=u;return $(t),t}function Pn(t,n){const e=n.length;if(e<=1)return t;const o=n[0];E(o,t,0);const r=e>>1;for(let i=0;i<r;i++){const c=e-1-i,u=E(n[i],t,i),s=E(n[c],t,c),l=n[i];n[i]=n[c],n[c]=l,u&&y(u,t,c),s&&y(s,t,i)}return $(t),t}function Dn(t,n,e){return n.length<=1||(n.forEach((o,r)=>{E(o,t,r)}),n.sort(e),n.forEach((o,r)=>{if(v(o)){const i=o[m]?o:O.get(o);i&&y(i,t,r)}}),$(t)),t}function Tn(t,n,e,o,...r){if(S(e)&&(e=0),S(o)&&(o=0),o===0&&r.length===0)return A([]);const i=n.length;if(i===0)return r.length>0&&(Ut(t,n,...r),$(t)),A([]);const c=[],u=A(c);if(o>0)for(let l=e;l<e+o;l++){const f=n[l],d=E(f,t,l);c.push(d?d[m]:f),d&&y(d,u,l-e)}const s=r.length-o;return s!==0&&It(n,t,s,e+o,i-1),n.splice(e,o),r.forEach((l,f)=>{const[d,h]=D(l),a=e+f;d?y(d,t,a):G(l)&&y(F(l),t,a),n.splice(a,0,h)}),$(t),u}function Ln(t,n,e){const o=n.length;if(o!==e){if(o>e)for(let r=e;r<o;r++)E(n[r],t,r);n.length=e,$(t)}}function jt(t){return gt(t)&&/^\d+$/.test(t)?parseInt(t):t}function k(t,n,e){return function(...o){return e(t,n,...o)}}const _n=new Set(Object.getOwnPropertyNames(Array.prototype));function Fn(){let t,n;return{get(e,o,r){if(o===m)return e;if(o===C)return n;if(o===L)return t;if(it(o))return e[o];if(o==="push")return k(r,e,Ut);if(o==="pop")return k(r,e,Nn);if(o==="unshift")return k(r,e,On);if(o==="shift")return k(r,e,In);if(o==="splice")return k(r,e,Tn);if(o==="concat")return function(i){return kn(e,i)};if(o==="slice")return function(i,c){return An(e,i,c)};if(o==="filter")return function(i){return Cn(e,i)};if(o==="map")return function(i){return Mn(e,i)};if(o==="fill")return k(r,e,jn);if(o==="sort")return k(r,e,Dn);if(o==="reverse")return k(r,e,Pn);if(o==="includes")return e.includes.bind(e);if(o==="length")return e.length;if(_n.has(o))return e[o].bind(e);{const i=jt(o),c=e[i];return v(c)?O.get(c)??c:c}},set(e,o,r,i){return o===L?t=r:o===C?n=r:o==="length"?Ln(i,e,r):Qt(i,e,jt(o),r),!0}}}function A(t){const n=new Proxy(t,Fn());O.set(t,n);for(let e=0;e<t.length;e++)Vt(n,t[e],e);return n}function Vt(t,n,e){if(!G(n))return;let o=n[m]?n:O.get(n);o||(o=F(n)),y(o,t,e)}function F(t){return gn(t)?A(t):xn(t)}function P(t){return!v(t)||t[m]||Wt(t)||t[Rt]?t:O.get(t)??F(t)}const Jn=0,qn=1,Pt=2,Bn=3,Kn=0,zn=1,Gn=2,Rn=3,Yt=Symbol(),p=Symbol(),z=Symbol(),M=Symbol(),V=Symbol(),ot=Symbol(),b=Symbol(),rt=Symbol(),B=Symbol(),Q=Symbol(),wt=Symbol(),Wn="hook-miss-component";let Et;function ut(t){Et=t}function Qn(t,n,e,o){Et||wn(Wn),R(Et,Gt(t,n,e))}function X(t){return!!t[Yt]}var Zt,Xt,Ht,tn,nn,en,on,rn,cn,un;un=Yt,cn=b,rn=wt,on=M,en=Q,nn=z,tn=ot,Ht=rt,Xt=B,Zt=p;class kt{constructor(){w(this,un,!0),w(this,cn),w(this,rn,Kn),w(this,on),w(this,en,Jn),w(this,nn,[]),w(this,tn),w(this,Ht),w(this,Xt),w(this,Zt,[]),this[M]={}}}function sn(t){const n=t[p][0];return X(n)?sn(n):n}function H(t){const n=t[p],e=n[n.length-1];return X(e)?H(e):e}function _(t){var n;for(const e of t[p])X(e)&&_(e);for(const e of t[z])_(e);(n=t[rt])==null||n.forEach(e=>{const o=e();Ft(o)&&R(t,o)}),t[rt]&&(t[rt].length=0),t[Q]=qn,t[wt]=t[wt]===zn?Rn:Gn}function R(t,n){let e=t[B];e||(e=t[B]=[]),e.push(n)}function ln(t,n=!0){for(const o of t[z])Y(o,!1);let e=null;for(const o of t[p])X(o)?Y(o,n):n&&(e||(e=o.parentNode),e.removeChild(o));t[z].length=0,t[p].length=0}function Y(t,n=!0){var e,o;t[Q]>=Pt||(t[Q]=Pt,(e=t[B])==null||e.forEach(r=>r()),t[B]&&(t[B].length=0),ln(t,n),(o=t[ot])==null||o.forEach(r=>{v(r)?r.value=void 0:r(void 0)}),t[ot]&&(t[ot].length=0),t[Q]=Bn,t[b]=void 0)}function Un(t,n){const e=new kt;return e[b]=t,Object.assign(e[M],n),e}function Z(t,n){const e=new kt;return e[b]=t,n&&(e[M][V]=n),e}function $t(t,n,e){ut(t);const o=n.call(t,e);return ut(void 0),o}function st(t,n,e){if(!n)return[];ut(t);const o=n(t,e);return ut(void 0),o}function Vn(t,n,e){const o=new kt,r=$t(o,t,e);return n!==document.body?vn(n.parentNode,r,n):qt(n,r),_(o),o}function Dt(t,n,e){t[lt]={[ft]:n},n(t[N]),R(e,()=>t[dt]())}function Yn(t,n,e,o,r){if(!t){e(void 0);return}const i=pt(t,n),c=e;c(i),!S(t[m])&&R(r,mt(t,i,c,n,!0))}function et(t,n,e,o){Yn(t,n,e,0,o)}const lt=Symbol(),ft=Symbol(),dt=Symbol();function Tt(t,n,e=!1){let o=pt(t,n),r;const i=S(t[m])?void 0:mt(t,o,c=>{o=c,r==null||r[ft](c)},n,e);return{[dt](){r=void 0,i==null||i()},get[N](){return o},set[lt](c){r=c}}}function Lt(t,n){let e=n(...t.map(u=>u[N])),o,r=0;const i=()=>{r=0;const u=n(...t.map(s=>s[N]));u!==e&&(e=u,o==null||o[ft](e))},c={[dt](){t.forEach(u=>u[dt]()),o=void 0,r>0&&(U(r),r=0)},get[N](){return e},set[lt](u){o=u},[ft](){r>0&&U(r),r=vt(i)}};return t.forEach(u=>u[lt]=c),c}const at=Symbol();function Zn(t,n,e,o,r,i,c){const u=Z(c),s=t?P({data:n,index:e,key:i}):{data:n,index:e,key:i};return u[at]=s,r.push(u),st(u,o,s)}function At(t,n,e,o,r,i){const c=[],u=Ot(t);return t.forEach((s,l)=>{const f=r==null?void 0:r(s,l);r&&o.set(f,l);const d=Zn(u,s,l,n,e,f,i);c.push(...d)}),c}function fn(t,n){t[p].forEach(e=>{X(e)?fn(e,n):n.appendChild(e)})}function Xn(t,n,e,o,r,i,c){const u=e.length,s=[],l=new Map;let f=0,d=sn(t);const h=d==null?void 0:d.parentNode;for(let a=0;a<u;a++){const I=e[a],tt=i(I,a);l.set(tt,a);const nt=r.get(tt);if(nt===void 0){const x=Z(t[b]),j=P({data:I,index:a,key:tt});x[at]=j,s.push(x);const J=st(x,n,j);K(h,J.length>1?T(J):J[0],d),_(x)}else{const x=o[nt];r.delete(tt),s.push(x);const j=x[at];if(j.data!==I&&(j.data=I),j.index!==a&&(j.index=a),nt<f){const J=T();fn(x,J),K(h,J,d)}else f=nt,d=H(x).nextSibling}}r.forEach(a=>{Y(o[a])}),t[p]=s,c(l)}function Hn(t,n,e,o,r){const i=e.length,c=Math.min(o,i),u=o-c,s=i-c;for(let l=0;l<c;l++){const f=r[l][at],d=f.data,h=e[l];h!==d&&(f.data=h)}if(u>0){for(let l=0;l<u;l++){const f=r[c+l];Y(f)}r.splice(c,u)}else if(s>0){const l=H(t),f=l.nextSibling,d=l.parentNode,h=At(e.slice(c),n,r,void 0,void 0,t[b]);K(d,h.length>1?T(h):h[0],f);for(let a=0;a<s;a++)_(r[c+a])}}function te(t,n,e,o,r,i){const c=t[M][V];if(!c)return;const u=(e==null?void 0:e.length)??0;if(n===0&&u===0)return;const s=t[p];if(u===0){const l=H(t),f=l.nextSibling,d=l.parentNode;s.forEach(a=>{Y(a)}),s.length=0,o==null||o.clear();const h=document.createComment("empty");K(d,h,f),s.push(h);return}if(n===0){const l=s[0];s.length=0;const f=l.parentNode,d=At(e,c,s,o,r,t[b]);K(f,d.length>1?T(d):d[0],l),f.removeChild(l),s.forEach(h=>{_(h)});return}r?Xn(t,c,e,s,o,r,i):Hn(t,c,e,n,s)}function ne(t){const n=t.keyFn;let e=n?new Map:void 0,o=0;if(Ot(t)){const u=mt(t,t.loop,(s,l,f)=>{if(!f||f.length<=1){const d=o;o=(s==null?void 0:s.length)??0,te(this,d,s,e,n,h=>{e=h})}},["loop"],!0);R(this,u)}const r=this[p],i=this[M][V],c=t.loop;return!i||!(c!=null&&c.length)?(r.push(document.createComment("empty")),r):(o=c.length,At(c,i,r,e,n,this[b]))}function ee(t){const n=()=>{const o=this[M],r=!!t.expect,i=o[r.toString()]??(r?o[V]:void 0),c=this[p];if(i){const u=Z(this[b]);return c.push(u),st(u,i)}else{const u=Ct(r.toString());return c.push(u),c}},e=o=>{const r=H(this),i=r.parentNode,c=Ct(o.toString());Sn(i,c,r),ln(this);const u=this[p];u.length=0;const s=this[M],l=s[o.toString()]??(o?s[V]:void 0);if(l){const f=Z(this[b]);u.push(f);const d=st(f,l);K(i,d.length>1?T(d):d[0],c),i.removeChild(c),_(f)}else u.push(c)};return R(this,Gt(t,"expect",o=>e(!!o))),n()}const dn="JINGE_SAVED_SIMPLE_TODOS";function oe(){let t=localStorage.getItem(dn);if(!t)return null;try{return t=JSON.parse(t),Array.isArray(t)?t:null}catch{return null}}function re(t){localStorage.setItem(dn,JSON.stringify(t))}function _t(t,n=!1){return P({title:t,done:n})}function ie(){const t=(()=>{const u=P(oe()??[_t("test")]);return P({todos:u,allDone:u.length>0&&!u.find(s=>!s.done)})})();Qn(t.todos,u=>{t.allDone=u.length>0&&!u.find(s=>!s.done),re(u)});const n=()=>{t.todos.forEach(u=>u.done=!t.allDone)};function e(u){u.done=!u.done}function o(u){const s=t.todos.indexOf(u);s>=0&&t.todos.splice(s,1)}function r(u){const s=u.title;let l=prompt("Please enter title",s);!l||!(l=l.trim())||(u.title=l)}function i(){const u=prompt("Please enter title of new todo");u!=null&&u.trim()&&t.todos.push(_t(u))}function c(){t.todos.length!==0&&confirm("Sure to clear all todos?")&&(t.todos.length=0)}return[(()=>{const u=g("h2","Simple Todos");return this[p].push(u),u})(),(()=>{const u=g("div",g("table",g("thead",g("tr",g("th",(()=>{const s=W("input",{type:"checkbox"});return q(s,"click",()=>n()),Dt(Lt([Tt(t,["todos","length"],!0)],l=>l===0),l=>s.disabled=l,this),et(t,["allDone"],l=>s.checked=l,this),s})()),g("th","Title"),g("th","Operate"))),g("tbody",...(()=>{const s=P({keyFn:f=>f.title});et(t,["todos"],f=>s.loop=f,this);const l=Z(this[b],(f,d)=>[(()=>{const h=g("tr",g("td",(()=>{const a=W("input",{type:"checkbox"});return q(a,"click",()=>e(d.data)),et(d,["data","done"],I=>a.checked=I,f),a})()),g("td",(()=>{const a=Jt("");return et(d,["data","title"],I=>yn(a,I),f),a})()),g("td",(()=>{const a=g("button","Modify");return q(a,"click",()=>r(d.data)),a})(),(()=>{const a=g("button","Delete");return q(a,"click",()=>o(d.data)),a})()));return f[p].push(h),h})()]);return this[z].push(l),$t(l,ne,s)})(),...(()=>{const s=P({});Dt(Lt([Tt(t,["todos","length"],!0)],f=>f===0),f=>s.expect=f,this);const l=Un(this[b],{true:f=>[(()=>{const d=g("tr",W("td",{class:"emp",colSpan:3},"no todo, please add."));return f[p].push(d),d})()]});return this[z].push(l),$t(l,ee,s)})())));return this[p].push(u),u})(),(()=>{const u=W("div",{class:"ctrl"},(()=>{const s=g("button","Add");return q(s,"click",()=>i()),s})(),(()=>{const s=g("button","Clear");return q(s,"click",()=>c()),s})());return this[p].push(u),u})()]}Vn(ie,document.getElementById("root-app"));
