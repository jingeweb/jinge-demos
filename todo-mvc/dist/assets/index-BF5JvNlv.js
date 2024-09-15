(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();var dn=Object.defineProperty,hn=(t,e,n)=>e in t?dn(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,M=(t,e,n)=>hn(t,typeof e!="symbol"?e+"":e,n);function Jt(t){return typeof t}function jt(t){return typeof t=="symbol"}function b(t){return t!==null&&Jt(t)==="object"}function st(t){return Jt(t)==="string"}function C(t){return Jt(t)==="undefined"}function xe(t){return Array.isArray(t)}function je(t){return Jt(t)==="function"}function gn(){return Date.now().toString(32)+Math.floor(Math.random()*16777215).toString(32)}function ke(...t){const e=[];return t.forEach(n=>{st(n)?(n=n.trim(),n&&e.push(n)):b(n)&&Object.entries(n).forEach(([o,r])=>{r&&(o=o.trim(),o&&e.push(o))})}),e.join(" ")}const pn=function(){};C(window.setImmediate)&&function(){let t=1;const e=new Map;function n(r){try{const i=e.get(r);i&&(e.delete(r),i())}catch(i){console.error(i)}}function o(r){e.delete(r)}if(window.clearImmediate=o,!C(window.queueMicrotask))window.setImmediate=function(r){const i=t++;return e.set(i,r),window.queueMicrotask(()=>{n(i)}),i};else{const r=`setImmediate$${Date.now().toString(32)}${Math.floor(Math.random()*16777215).toString(32)}$`;window.setImmediate=function(i){const c=t++;return e.set(c,i),window.postMessage(`${r}${t}`),c},window.addEventListener("message",i=>{i.source!==window||!st(i.data)||!i.data.startsWith(r)||n(parseInt(i.data.slice(r.length)))})}}();const zt=window.setImmediate,gt=window.clearImmediate;function mn(t){return t===null?"null":t===void 0?"undefined":t instanceof Error?t.message:b(t)?JSON.stringify(t):`${t}`}function kt(t,e){t.textContent=mn(e)}function pt(t=""){return document.createTextNode(t)}function U(t){const e=document.createDocumentFragment();return t==null||t.forEach(n=>{e.appendChild(st(n)?document.createTextNode(n):n)}),e}function It(t){return document.createComment(t??"")}function Ie(t,e){t.appendChild(e.length>1?U(e):st(e[0])?pt(e[0]):e[0])}function vn(t,e,n){t.replaceChild(U(e),n)}function Te(t,e){if(e){if(b(e)){for(const n in e)Te(t,n);return}return t.removeAttribute(e)}}function mt(t,e,n){if(e){if(b(e)){for(const o in e)mt(t,o,e[o]);return}C(n)||n===null?Te(t,e):t.setAttribute(e,n)}}function yn(t,e,n){if(e)for(const o in e)o&&!C(e[o])&&mt(t,o,e[o]);return n!=null&&n.length&&Ie(t,n),t}function w(t,e,...n){return yn(document.createElement(t),e,n)}function O(t,...e){return w(t,void 0,...e)}function wn(t,e,n){t.insertBefore(e,n?n.nextSibling:null)}function Z(t,e,n){t.insertBefore(e,n??null)}function A(t,e,n,o){C(o)&&(o=e.startsWith("touch")?{capture:!1,passive:!0}:!1),t.addEventListener(e,n,o)}function $n(t,e,n){t.removeEventListener(e,n)}function Ce(t,e,n,o){return A(t,e,n,o),()=>{$n(t,e,n)}}function ee(t,...e){throw new Error(`Production min error: ${t}. Use development mode or visit https://[todo]/error/${t} for more detail.`)}const Ae=Symbol(),D=Symbol(),Qt=Symbol(),ne=Symbol(),Tt=Symbol();function Ne(t){t[S]=void 0,t[ne]=void 0,t[D]=void 0;const e=t[Tt];gt(e.i),e.p=void 0}function Kt(t,e){if(!(e!=null&&e.length))return t;if(!b(t))return;let n=0,o=t[e[n]];for(;n<e.length-1;){if(!b(o))return;n++,o=o[e[n]]}return o}function Rt(t,e,n,o,r){if(!vt(t))return pn;const i=n?Kt(t,n):t;return Ut(t,i,e,n,o)}function Ut(t,e,n,o,r){let i=t[F];i||(i=t[F]=new Set);const c={[S]:t,[Ae]:o,[D]:e,[ne]:n,[Qt]:!!r,[Tt]:{i:0,p:void 0}};return i.add(c),()=>{i.delete(c),Ne(c)}}function oe(t,e,n,o){return je(e)?Rt(t,e,void 0,!0):Array.isArray(e)?Rt(t,n,e,void 0):Rt(t,n,[e],void 0)}function re(t,e){var n,o;(n=t[F])==null||n.forEach(r=>{const i=r[ne],c=r[S];if(!c||!i)return;const s=r[Ae];if(!(s!=null&&s.length)){const f=r[Tt];f.i>0&&gt(f.i),f.i=zt(()=>{i(c,c)}),f.p=null;return}const u=(e==null?void 0:e.length)??0;let l=u===0||u<=s.length&&e&&!e.some((f,m)=>f!==s[m]);if(!l&&r[Qt]&&u>s.length&&e&&!s.some((f,m)=>e[m]!==f)&&(l=!0),!l)return;const a=r[Tt];a.i>0&&gt(a.i),e?(a.p===void 0||a.p!==null&&e.length<a.p.length)&&(a.p=e):a.p=null,a.i=zt(()=>{const f=r[Qt],m=r[D],h=Kt(c,s);h!==m&&(r[D]=h),(f||h!==m)&&i(h,m,a.p??void 0),a.i=0,a.p=void 0})}),(o=t[W])==null||o.forEach((r,i)=>{r.forEach(c=>{re(i,e?[c,...e]:[c])})})}function ve(t,e){re(t,[e])}function et(t){re(t)}const W=Symbol(),F=Symbol(),S=Symbol(),ie=Symbol(),B=new WeakMap;function Me(t){if(t instanceof Node||t instanceof Error||t instanceof Promise)return!0;const e=t.constructor;return e===RegExp||e===Date||e===Boolean}function vt(t){return b(t)&&t[S]!==void 0}function ut(t){return b(t)&&!Me(t)&&!t[ie]}function k(t,e,n){let o=t[W];o||(o=t[W]=new Map);let r=o.get(e);r||o.set(e,r=new Set),r.add(n)}function yt(t,e,n){const o=t[W];if(!o)return;const r=o.get(e);r&&(r.delete(n),r.size||o.delete(e))}function bn(t){var e,n,o,r;if((e=t[W])==null||e.forEach(i=>{i.clear()}),(n=t[W])==null||n.clear(),(o=t[F])==null||o.forEach(i=>{Ne(i)}),(r=t[F])==null||r.clear(),xe(t))t.forEach((i,c)=>{vt(i)&&yt(i,t,c)});else for(const i in t){const c=t[i];vt(c)&&yt(c,t,i)}}function X(t){if(!b(t))return[void 0,t];const e=t[S];if(e)return[t,e];const n=B.get(t);return[n,n?n[S]:t]}function Oe(t,e,n,o){const[r,i]=X(o);if(r){if(jt(n))e[n]=i;else{const[u,l]=X(e[n]);if(u===r||l===i)return;u&&yt(u,t,n),e[n]=i,k(r,t,n),ve(t,n)}return}if(jt(n)){e[n]=o;return}const[c,s]=X(e[n]);if(c&&yt(c,t,n),s!==o){if(ut(o)){const u=nt(o);k(u,t,n)}e[n]=o,ve(t,n)}}function Sn(){let t,e;return{get(n,o){if(o===S)return n;if(o===W)return e;if(o===F)return t;if(jt(o))return n[o];{const r=n[o];return b(r)?B.get(r)??r:r}},set(n,o,r,i){return o===F?t=r:o===W?e=r:Oe(i,n,o,r),!0}}}function En(t){const e=new Proxy(t,Sn());B.set(t,e);for(const n in t)Pe(e,t[n],n);return e}function Le(t,e,...n){const o=e.length;return n.length===0?o:(n.forEach((r,i)=>{const[c,s]=X(r);c?k(c,t,o+i):ut(r)&&k(nt(r),t,o+i),e.push(s)}),et(t),e.length)}function P(t,e,n){const o=b(t)?t[S]?t:B.get(t):void 0;return o&&yt(o,e,n),o}function ce(t,e,n,o,r){if(o>r)return;let i=n>0?r:o;const c=n>0?o:r,s=n>0?-1:1;for(;;){const u=P(t[i],e,i);if(u&&k(u,e,i+n),i==c)break;i+=s}}function xn(t,e){if(e.length===0)return;const n=e.pop(),o=P(n,t,e.length);return et(t),o??n}function jn(t,e,...n){const o=n.length,r=e.length;if(o===0)return r;r>0&&ce(e,t,o,0,r-1);for(let i=o-1;i>=0;i--){const c=n[i],[s,u]=X(c);s?k(s,t,i):ut(c)&&k(nt(c),t,i),e.unshift(u)}return et(t),r+o}function kn(t,e){const n=e.length;if(n===0)return;const o=e[0],r=P(o,t,0);return n>1&&ce(e,t,-1,1,n-1),e.shift(),et(t),r??o}function In(t,e){return K(t.concat(e[S]??e))}function Tn(t,e,n){return K(t.slice(e,n))}function Cn(t,e){return K(t.filter(e))}function An(t,e){return K(t.map(e))}function Nn(t,e,n,o,r){if(e.length===0||(C(o)&&(o=0),C(r)&&(r=e.length),r<=o))return t;const i=X(n);let c=i[0];!c&&ut(n)&&(c=nt(n));const s=i[1];for(let u=o;u<r;u++)P(e[u],t,u),c&&k(c,t,u),e[u]=s;return t}function Mn(t,e){const n=e.length;if(n<=1)return t;const o=e[0];P(o,t,0);const r=n>>1;for(let i=0;i<r;i++){const c=n-1-i,s=P(e[i],t,i),u=P(e[c],t,c),l=e[i];e[i]=e[c],e[c]=l,s&&k(s,t,c),u&&k(u,t,i)}return et(t),t}function On(t,e,n){return e.length<=1||(e.forEach((o,r)=>{P(o,t,r)}),e.sort(n),e.forEach((o,r)=>{if(b(o)){const i=o[S]?o:B.get(o);i&&k(i,t,r)}}),et(t)),t}function Ln(t,e,n,o,...r){if(C(n)&&(n=0),C(o)&&(o=0),o===0&&r.length===0)return K([]);const i=e.length;if(i===0)return r.length>0&&Le(t,e,...r),K([]);const c=[],s=K(c);if(o>0)for(let l=n;l<n+o;l++){const a=e[l],f=P(a,t,l);c.push(f?f[S]:a),f&&k(f,s,l-n)}const u=r.length-o;return u!==0&&ce(e,t,u,n+o,i-1),e.splice(n,o),r.forEach((l,a)=>{const[f,m]=X(l),h=n+a;f?k(f,t,h):ut(l)&&k(nt(l),t,h),e.splice(h,0,m)}),s}function Pn(t,e,n){const o=e.length;if(o!==n){if(o>n)for(let r=n;r<o;r++)P(e[r],t,r);e.length=n,et(t)}}function ye(t){return st(t)&&/^\d+$/.test(t)?parseInt(t):t}function J(t,e,n){return function(...o){return n(t,e,...o)}}function Wn(){let t,e;return{get(n,o,r){if(o===S)return n;if(o===W)return e;if(o===F)return t;if(jt(o))return n[o];if(o==="push")return J(r,n,Le);if(o==="pop")return J(r,n,xn);if(o==="unshift")return J(r,n,jn);if(o==="shift")return J(r,n,kn);if(o==="splice")return J(r,n,Ln);if(o==="concat")return function(i){return In(n,i)};if(o==="slice")return function(i,c){return Tn(n,i,c)};if(o==="filter")return function(i){return Cn(n,i)};if(o==="map")return function(i){return An(n,i)};if(o==="fill")return J(r,n,Nn);if(o==="sort")return J(r,n,On);if(o==="reverse")return J(r,n,Mn);{const i=ye(o),c=n[i];return b(c)?B.get(c)??c:c}},set(n,o,r,i){return o===F?t=r:o===W?e=r:o==="length"?Pn(i,n,r):Oe(i,n,ye(o),r),!0}}}function K(t){const e=new Proxy(t,Wn());B.set(t,e);for(let n=0;n<t.length;n++)Pe(e,t[n],n);return e}function Pe(t,e,n){if(!ut(e))return;let o=e[S]?e:B.get(e);o||(o=nt(e)),k(o,t,n)}function nt(t){return xe(t)?K(t):En(t)}function j(t){return!b(t)||t[S]||Me(t)||t[ie]?t:B.get(t)??nt(t)}const Dn=0,Fn=1,we=2,qn=3,We=0,De=1,Fe=2,qe=3,Be=Symbol(),p=Symbol(),T=Symbol(),N=Symbol(),Y=Symbol(),ot=Symbol(),g=Symbol(),rt=Symbol(),it=Symbol(),dt=Symbol(),wt=Symbol(),Je="hook-miss-component";let $t;function Ct(t){$t=t}function Bn(){return $t||ee(Je),$t}function Jn(t,e,n,o){$t||ee(Je),q($t,oe(t,e,n))}function Et(t){return!!t[Be]}var Ke,Ue,Ye,Ge,Re,He,Ve,Xe,ze,Qe;Qe=Be,ze=g,Xe=wt,Ve=N,He=dt,Re=T,Ge=ot,Ye=rt,Ue=it,Ke=p;class se{constructor(){M(this,Qe,!0),M(this,ze),M(this,Xe,We),M(this,Ve),M(this,He,Dn),M(this,Re,[]),M(this,Ge),M(this,Ye),M(this,Ue),M(this,Ke,[]),this[N]={}}}function ue(t){const e=t[p][0];return Et(e)?ue(e):e}function lt(t){const e=t[p],n=e[e.length-1];return Et(n)?lt(n):n}function G(t){var e;for(const n of t[p])Et(n)&&G(n);for(const n of t[T])G(n);(e=t[rt])==null||e.forEach(n=>{const o=n();je(o)&&q(t,o)}),t[rt]&&(t[rt].length=0),t[dt]=Fn,t[wt]=t[wt]===De?qe:Fe}function le(t,e){let n=t[rt];n||(n=t[rt]=[]),n.push(e)}function q(t,e){let n=t[it];n||(n=t[it]=[]),n.push(e)}function fe(t,e=!0){for(const o of t[T])ct(o,!1);let n=null;for(const o of t[p])Et(o)?ct(o,e):e&&(n||(n=o.parentNode),n.removeChild(o));t[T].length=0,t[p].length=0}function ct(t,e=!0){var n,o;t[dt]>=we||(t[dt]=we,(n=t[it])==null||n.forEach(r=>r()),t[it]&&(t[it].length=0),fe(t,e),(o=t[ot])==null||o.forEach(r=>{b(r)?r.value=void 0:r(void 0)}),t[ot]&&(t[ot].length=0),t[dt]=qn,t[g]=void 0)}function _e(t,e,n){const o=t[wt];(o===Fe||o===qe)&&ee("setctx-after-render");let r=t[g];o===We&&(r=t[g]=Object.assign({},t[g]),t[wt]=De),r&&(r[e]=n)}function At(t,e){const n=new se;return n[g]=t,Object.assign(n[N],e),n}function $(t,e){const n=new se;return n[g]=t,e&&(n[N][Y]=e),n}function x(t,e,n){Ct(t);const o=e.call(t,n);return Ct(void 0),o}function tt(t,e,n){if(!e)return[];Ct(t);const o=e(t,n);return Ct(void 0),o}function Kn(t,e,n){const o=new se,r=x(o,t,n);return e!==document.body?vn(e.parentNode,r,e):Ie(e,r),G(o),o}function Ht(t,e){const n=pt("");return kt(n,e),t[p].push(n),n}function z(t,e,n){t[Nt]={[Mt]:e},e(t[D]),q(n,()=>t[Ot]())}function Un(t,e,n,o,r){if(!t){n(void 0);return}const i=Kt(t,e),c=n;c(i),!C(t[S])&&q(r,Ut(t,i,c,e,!0))}function L(t,e,n,o){Un(t,e,n,0,o)}const Nt=Symbol(),Mt=Symbol(),Ot=Symbol();function I(t,e,n=!1){let o=Kt(t,e),r;const i=C(t[S])?void 0:Ut(t,o,c=>{o=c,r==null||r[Mt](c)},e,n);return{[Ot](){r=void 0,i==null||i()},get[D](){return o},set[Nt](c){r=c}}}function Q(t,e){let n=e(...t.map(s=>s[D])),o,r=0;const i=()=>{r=0;const s=e(...t.map(u=>u[D]));s!==n&&(n=s,o==null||o[Mt](n))},c={[Ot](){t.forEach(s=>s[Ot]()),o=void 0,r>0&&(gt(r),r=0)},get[D](){return n},set[Nt](s){o=s},[Mt](){r>0&&gt(r),r=zt(i)}};return t.forEach(s=>s[Nt]=c),c}const Yn=Symbol();function Gn(){return{[Yn]:!0,value:void 0}}function Rn(t,e,n){let o=t[ot];o||(t[ot]=o=[]),o.push(e),b(e)?e.value=n:e(n)}const Lt=Symbol();function Hn(t,e,n,o,r,i,c){const s=$(c),u=t?j({data:e,index:n,key:i}):{data:e,index:n,key:i};return s[Lt]=u,r.push(s),tt(s,o,u)}function ae(t,e,n,o,r,i){const c=[],s=vt(t);return t.forEach((u,l)=>{const a=r==null?void 0:r(u,l);r&&o.set(a,l);const f=Hn(s,u,l,e,n,a,i);c.push(...f)}),c}function Ze(t,e){t[p].forEach(n=>{Et(n)?Ze(n,e):e.appendChild(n)})}function Vn(t,e,n,o,r,i,c){const s=n.length,u=[],l=new Map;let a=0,f=ue(t);const m=f==null?void 0:f.parentNode;for(let h=0;h<s;h++){const R=n[h],H=i(R,h);l.set(H,h);const V=r.get(H);if(V===void 0){const d=$(t[g]),y=j({data:R,index:h,key:H});d[Lt]=y,u.push(d);const E=tt(d,e,y);Z(m,E.length>1?U(E):E[0],f),G(d)}else{const d=o[V];r.delete(H),u.push(d);const y=d[Lt];if(y.data!==R&&(y.data=R),y.index!==h&&(y.index=h),V<a){const E=U();Ze(d,E),Z(m,E,f)}else a=V,f=lt(d).nextSibling}}r.forEach(h=>{ct(o[h])}),t[p]=u,c(l)}function Xn(t,e,n,o,r){const i=n.length,c=Math.min(o,i),s=o-c,u=i-c;for(let l=0;l<c;l++){const a=r[l][Lt],f=a.data,m=n[l];m!==f&&(a.data=m)}if(s>0){for(let l=0;l<s;l++){const a=r[c+l];ct(a)}r.splice(c,s)}else if(u>0){const l=lt(t),a=l.nextSibling,f=l.parentNode,m=ae(n.slice(c),e,r,void 0,void 0,t[g]);Z(f,m.length>1?U(m):m[0],a);for(let h=0;h<u;h++)G(r[c+h])}}function zn(t,e,n,o,r,i){const c=t[N][Y];if(!c)return;const s=(n==null?void 0:n.length)??0;if(e===0&&s===0)return;const u=t[p];if(s===0){const l=lt(t),a=l.nextSibling,f=l.parentNode;u.forEach(h=>{ct(h)}),u.length=0,o==null||o.clear();const m=document.createComment("empty");Z(f,m,a),u.push(m);return}if(e===0){const l=u[0];u.length=0;const a=l.parentNode,f=ae(n,c,u,o,r,t[g]);Z(a,f.length>1?U(f):f[0],l),a.removeChild(l),u.forEach(m=>{G(m)});return}r?Vn(t,c,n,u,o,r,i):Xn(t,c,n,e,u)}function Qn(t){const e=t.keyFn;let n=e?new Map:void 0,o=0;if(vt(t)){const s=Ut(t,t.loop,(u,l,a)=>{if(!a||a.length<=1){const f=o;o=(u==null?void 0:u.length)??0,zn(this,f,u,n,e,m=>{n=m})}},["loop"],!0);q(this,s)}const r=this[p],i=this[N][Y],c=t.loop;return!i||!(c!=null&&c.length)?(r.push(document.createComment("empty")),r):(o=c.length,ae(c,i,r,n,e,this[g]))}function Pt(t){const e=()=>{const o=this[N],r=!!t.expect,i=o[r.toString()]??(r?o[Y]:void 0),c=this[p];if(i){const s=$(this[g]);return c.push(s),tt(s,i)}else{const s=It(r.toString());return c.push(s),c}},n=o=>{const r=lt(this),i=r.parentNode,c=It(o.toString());wn(i,c,r),fe(this);const s=this[p];s.length=0;const u=this[N],l=u[o.toString()]??(o?u[Y]:void 0);if(l){const a=$(this[g]);s.push(a);const f=tt(a,l);Z(i,f.length>1?U(f):f[0],c),i.removeChild(c),G(a)}else s.push(c)};return q(this,oe(t,"expect",o=>n(!!o))),e()}function Wt(t){return t.startsWith("#")&&(t=t.slice(1)),!t||t==="/"?"/":(t.startsWith("/")||(t=`/${t}`),t.endsWith("/")&&(t=t.slice(0,t.length-1)),t.replace(/[/\\]+/g,"/"))}function _t(t,e=!1){e?history.replaceState(null,"",t):history.pushState(null,"",t),setImmediate(()=>dispatchEvent(new PopStateEvent("popstate")))}const tn=0,en=1,_n=2,de=3;function Zn(t,e){const n=Wt(t).split("/").slice(1);return n.map((o,r)=>{const i=o.charCodeAt(0);if(i===42){if(e)throw new Error("嵌套父路由的 path 不能使用星号");if(r!==n.length-1)throw new Error("path 中星号只能在末尾出现");return{type:de}}else return i!==58?{type:tn,value:o}:o.endsWith("<num>")?{type:en,value:o.slice(1,o.length-5)}:{type:_n,value:o.slice(1)}})}const to=0,Zt=1,Dt=2,_=3;function $e(t){const e=t[2];if(!(e!=null&&e.length))return 0;const n=e.findIndex(o=>o.type===de);return n<0?1:65535-n}function nn(t){let e=!1;const n=t.map(o=>{let r=to;if(o.redirectTo)r=Dt;else if(o.children)r=_;else if(!o.path){if(e)throw new Error("Index 路由不能重复定义");r=Zt,e=!0}return[r,o,r===Zt?void 0:Zn(o.path,r===_),r===_?nn(o.children):void 0]});return n.sort((o,r)=>{const i=$e(o),c=$e(r);return i>c?1:i<c?-1:0}),n}function on(t,e,n){const[o,,r,i]=e;if(!r||t.length-n<r.length)return;const c={};for(const s of r){const u=t[n];if(s.type===de)return[[e,c]];if(s.type===tn){if(s.value!==u)return}else if(s.type===en){if(!/^\d+$/.test(u))return;c[s.value??""]=parseInt(u)}else c[s.value??""]=u;n++}if(o===_&&n<t.length){for(const s of i){const u=on(t,s,n);if(u)return[[e,c],...u]}return}else return n!==t.length?void 0:[[e,c]]}function te(t,e){const n=t.split("/").slice(1);for(const o of e){const r=on(n,o,0);if(r)return r}}function he(){const t=pe(this),e=sn(this)+1;_e(this,cn,e),le(this,()=>{uo(t,this,e)}),q(this,()=>{so(t,e)});const n=It("router-view");return this[p].push(n),this[p]}function eo(t){const e=t.router;_e(this,rn,e);let n=location.search,o=e[St]==="hash"?location.hash:location.pathname;try{Se(e,o,n===""?void 0:n)}catch(r){console.error(r)}return le(this,()=>Ce(window,"popstate",()=>{const r=location.search,i=e[St]==="hash"?location.hash:location.pathname;if(o===i){if(n===r)return;n=r,fn(e,n)}else{o=i;try{Se(e,i,n===r?void 0:r)}catch(c){console.error(c)}n=r}})),[...(()=>{const r=$(this[g]);return this[p].push(r),tt(r,this[N][Y])})()]}function ge(t){return typeof t}function no(t){return ge(t)==="string"}function oo(t){return ge(t)==="number"&&!Number.isNaN(t)&&Number.isFinite(t)}function be(t){return ge(t)==="undefined"}be(window.setImmediate)&&function(){let t=1;const e=new Map;function n(r){try{const i=e.get(r);i&&(e.delete(r),i())}catch(i){console.error(i)}}function o(r){e.delete(r)}if(window.clearImmediate=o,!be(window.queueMicrotask))window.setImmediate=function(r){const i=t++;return e.set(i,r),window.queueMicrotask(()=>{n(i)}),i};else{const r=`setImmediate$${Date.now().toString(32)}${Math.floor(Math.random()*16777215).toString(32)}$`;window.setImmediate=function(i){const c=t++;return e.set(c,i),window.postMessage(`${r}${t}`),c},window.addEventListener("message",i=>{i.source!==window||!no(i.data)||!i.data.startsWith(r)||n(parseInt(i.data.slice(r.length)))})}}();function ro(t,e,n){if(oo(e)){history.go(e);return}const o=t[St]==="hash"?"#":"";if(e==="..")throw"todo";_t(o+e,n==null?void 0:n.replace)}function io(t,e){const n=Object.keys(t),o=Object.keys(e);return n.length===0?o.length===0:n.length!==o.length?!1:!n.some(r=>t[r]!==e[r])}function co(t){const e=pe(this),n=j({href:t.to,active:!1,exactActive:!1});le(this,()=>{if(t.noEvent)return;const c=ue(this);if(c.nodeType===1)return Ce(c,"click",s=>{s.preventDefault(),t.open?window.open(t.to):ro(e,t.to,{replace:t.replace})})});const o=t.noActive!==!0;let r=o?te(t.to,e[Ft]):void 0;const i=c=>{const s=(r==null?void 0:r.length)??0,u=(c==null?void 0:c.length)??0;if(s===0||u===0||s>u){n.active=!1,n.exactActive=!1;return}for(let l=0;l<s;l++){const a=r[l],f=c[l];if(a[0][1]!==f[0][1]||!io(a[1],f[1])){n.active=!1,n.exactActive=!1;return}}n.active=!0,n.exactActive=s===u};if(o){i(e[bt]),q(this,oe(t,"to",s=>{n.href=t.to,r=te(s,e[Ft]),i(e[bt])}));const c=s=>{i(s)};e[qt].add(c),q(this,()=>{e[qt].delete(c)})}return[...(()=>{const c=$(this[g]);return this[p].push(c),tt(c,this[N][Y],n)})()]}function Vt(t){const e=C(t.activeClass);return[...(()=>{const n=j({noActive:e});L(t,["to"],r=>n.to=r,this);const o=$(this[g],(r,i)=>[(()=>{const c=O("a",...(()=>{const s=$(r[g]);return r[T].push(s),tt(s,this[N][Y])})());return z(Q([I(t,["className"],!0),I(i,["exactActive"],!0),I(t,["exactActiveClass"],!0),I(i,["active"],!0),I(t,["activeClass"],!0)],(s,u,l,a,f)=>ke(s,u?l:a&&f)),s=>mt(c,"class",s),r),L(i,["href"],s=>mt(c,"href",s),r),r[p].push(c),c})()]);return this[p].push(o),x(o,co,n)})()]}function ht(t,e){const n=lt(t),o=n.parentNode,r=It("router-view");if(Z(o,r,n),fe(t),!e){t[p].push(r);return}const i=$(t[g]),c=x(i,e);o.insertBefore(c.length>1?U(c):c[0],r),o.removeChild(r),t[p].push(i),G(i)}function so(t,e){const n=t[Yt];n.splice(e-1,n.length-e+1)}function uo(t,e,n){const o=t[Yt];if(n-1!==o.length)throw new Error("bad view deep");o.push(e);const r=t[bt];if(r&&r.length>n-1){const[i,c]=r[n-1][0];if(i===Dt)throw new Error("assert-failed");i===_?ht(e,c.component??he):ht(e,c.component)}}const rn=Symbol(),cn=Symbol();function pe(t){var e;const n=(e=t[g])==null?void 0:e[rn];if(!n)throw new Error("missing RouterCore context");return n}function sn(t){var e;return((e=t[g])==null?void 0:e[cn])??0}const Yt=Symbol(),un=Symbol(),ln=Symbol(),Ft=Symbol(),bt=Symbol(),me=Symbol(),qt=Symbol(),St=Symbol();function lo({baseHref:t,routes:e,mode:n}){return{[ie]:!0,[Yt]:[],[un]:Wt(t??"/"),[ln]:j({}),[Ft]:nn(e),[me]:[],[qt]:new Set,[St]:n??"html5"}}function fn(t,e){const n=new URLSearchParams(e),o=t[ln];for(const r of Object.keys(o))n.has(r)?o[r]=n.get(r):(o[r]=void 0,delete o[r]);for(const r of n.keys())r in o||(o[r]=n.get(r))}function Se(t,e,n){e=Wt(e);const o=t[un];o!=="/"&&e.startsWith(o)&&(e=e.substring(o.length-1));const r=te(e,t[Ft])??[];let i=r.length;const c=t[bt]??[],s=c.length;if(!i&&!s)return;const u=t[St]==="hash"?"#":"";if(i>0){const[d,y,,E]=r[i-1][0];if(d===Dt){_t(u+y.redirectTo,!0);return}else if(d===_){const xt=y.redirectChild;if(xt){_t(u+Wt(`${e}/${xt}`),!0);return}const Gt=E==null?void 0:E[0];Gt&&Gt[0]===Zt&&(r.push([Gt,{}]),i+=1)}}t[bt]=r;let l=-1;for(let d=0;d<s&&!(d>=i);d++){const y=c[d],E=r[d];if(y[0][1]!==E[0][1])break;l=d}const a=t[Yt];for(let d=l+1;d<s;d++){const y=s-1-d;if(y===0||y>=a.length-1)continue;const E=a[y];ct(E)}n!==void 0&&fn(t,n);const f=t[me],m=f.length-i;for(let d=0;d<m;d++)bn(f.pop());let h={};for(let d=0;d<i;d++)if(h={...h,...r[d][1]},d>=f.length)f.push(j(h));else{const y=f[d];Object.entries(h).forEach(([E,xt])=>{y[E]=xt})}if(t[qt].forEach(d=>d(r)),!i&&a.length>0){ht(a[0]);return}if(l+1>=a.length)return;const R=a[l+1],[H,V]=r[l+1][0];if(H===Dt)throw new Error("assert-failed");H===_?ht(R,V.component??he):ht(R,V.component)}function fo(){const t=Bn(),e=pe(t)[me],n=sn(t);return e[n-1]}const an="jinge-todo-mvc-saved-todos";function ao(){if(!window.localStorage)return[];const t=window.localStorage.getItem(an);if(!t)return[];try{const e=JSON.parse(t);return Array.isArray(e)?e:[]}catch{return[]}}const Xt=ao();let Bt="all";const v=j({status:"all",all:Xt,todos:Xt,remaining:Xt.reduce((t,e)=>t+(e.done?0:1),0)});function ft(){window.localStorage.setItem(an,JSON.stringify(v.all))}function at(){v.all.length!==0&&(Bt==="all"?v.todos=v.all:v.todos=v.all.filter(t=>t.done===(Bt==="completed")))}function Ee(t){Bt!==t&&(Bt=st(t)&&t?t:"all",at())}function ho(){v.all=v.all.filter(t=>!t.done),at(),ft()}function go(t){t.done=!t.done,v.remaining+=t.done?-1:1,at(),ft()}function po(){v.all.length!==0&&(v.remaining=v.remaining>0?0:v.all.length,v.all.forEach(t=>t.done=v.remaining===0),at(),ft())}function mo(t){v.all.push({id:gn(),title:t,done:!1}),v.remaining++,at(),ft()}function vo(t){const e=v.all.findIndex(o=>o.id===t);if(e<0)return;v.all.splice(e,1)[0].done||v.remaining--,at(),ft()}function yo(t,e){t.title=e,ft()}function wo(){return[...(()=>{const t=j({});z(Q([I(v,["all","length"],!0)],n=>n>0),n=>t.expect=n,this);const e=At(this[g],{true:n=>[(()=>{const o=w("footer",{class:"footer"},w("span",{class:"todo-count"},O("strong",(()=>{const r=pt("");return L(v,["remaining"],i=>kt(r,i),n),r})()),(()=>{const r=pt("");return z(Q([I(v,["remaining"],!0)],i=>i===1),i=>kt(r,i?" item":" items"),n),r})(),"left"),w("ul",{class:"filters"},O("li",...(()=>{const r={to:"/all",activeClass:"selected"},i=$(n[g],c=>[Ht(c,"All")]);return n[T].push(i),x(i,Vt,r)})()),O("li",...(()=>{const r={to:"/active",activeClass:"selected"},i=$(n[g],c=>[Ht(c,"Active")]);return n[T].push(i),x(i,Vt,r)})()),O("li",...(()=>{const r={to:"/completed",activeClass:"selected"},i=$(n[g],c=>[Ht(c,"Completed")]);return n[T].push(i),x(i,Vt,r)})())),...(()=>{const r=j({});z(Q([I(v,["remaining"],!0),I(v,["all","length"],!0)],(c,s)=>c<s),c=>r.expect=c,n);const i=At(n[g],{true:c=>[(()=>{const s=w("button",{class:"clear-completed"},"Clear completed");return A(s,"click",()=>{ho()}),c[p].push(s),s})()]});return n[T].push(i),x(i,Pt,r)})());return n[p].push(o),o})()]});return this[p].push(e),x(e,Pt,t)})()]}function $o(t){const e=j({editing:!1,editingTitle:""}),n=()=>{e.editing=!1;const r=e.editingTitle.trim();r&&(yo(t.todo,r),e.editingTitle="")},o=Gn();return[(()=>{const r=O("li",w("div",{class:"view"},(()=>{const i=w("input",{class:"toggle",type:"checkbox"});return A(i,"click",()=>{go(t.todo)}),L(t,["todo","done"],c=>i.checked=c,this),i})(),(()=>{const i=O("label",(()=>{const c=pt("");return L(t,["todo","title"],s=>kt(c,s),this),c})());return A(i,"dblclick",()=>{e.editing=!0,e.editingTitle=t.todo.title,setTimeout(()=>{var c,s;(c=o.value)==null||c.select(),(s=o.value)==null||s.focus()})}),i})(),(()=>{const i=w("button",{class:"destroy"});return A(i,"click",()=>{vo(t.todo.id)}),i})()),...(()=>{const i=j({});L(e,["editing"],s=>i.expect=s,this);const c=At(this[g],{true:s=>[(()=>{const u=w("input",{class:"edit"});return A(u,"change",l=>e.editingTitle=l.target.value),A(u,"blur",()=>{n()}),A(u,"keyup",l=>{l.key==="Enter"?n():l.key==="Esc"&&(e.editing=!1,e.editingTitle="")}),L(e,["editingTitle"],l=>u.value=l,s),Rn(this,o,u),s[p].push(u),u})()]});return this[T].push(c),x(c,Pt,i)})());return z(Q([I(t,["todo","done"],!0),I(e,["editing"],!0)],(i,c)=>ke(i&&"completed",c&&"editing")),i=>mt(r,"class",i),this),this[p].push(r),r})()]}function bo(){const t=j({newTodo:""}),e=fo();return Ee(e.status),Jn(e,"status",n=>Ee(n)),[(()=>{const n=w("section",{class:"todoapp"},w("header",{class:"header"},O("h1","todos"),(()=>{const o=w("input",{class:"new-todo",placeholder:"What needs to be done?",autoFocus:!0});return A(o,"change",r=>t.newTodo=r.target.value),A(o,"keyup",r=>{if(r.key==="Enter"){const i=t.newTodo.trim();i&&(mo(i),t.newTodo="")}}),L(t,["newTodo"],r=>o.value=r,this),o})()),...(()=>{const o=j({});z(Q([I(v,["todos","length"],!0)],i=>i>0),i=>o.expect=i,this);const r=At(this[g],{true:i=>[(()=>{const c=w("section",{class:"main"},(()=>{const s=w("input",{id:"toggle-all",class:"toggle-all",type:"checkbox"});return A(s,"click",()=>{po()}),z(Q([I(v,["remaining"],!0),I(v,["all","length"],!0)],(u,l)=>u===0&&l>0),u=>s.checked=u,i),s})(),w("label",{for:"toggle-all"},"Mark all as complete"),w("ul",{class:"todo-list"},...(()=>{const s=j({keyFn:l=>l.id});L(v,["todos"],l=>s.loop=l,i);const u=$(i[g],(l,a)=>[...(()=>{const f=j({});L(a,["data"],h=>f.todo=h,l);const m=$(l[g]);return l[p].push(m),x(m,$o,f)})()]);return i[T].push(u),x(u,Qn,s)})()));return i[p].push(c),c})()]});return this[T].push(r),x(r,Pt,o)})(),...(()=>{const o=$(this[g]);return this[T].push(o),x(o,wo)})());return this[p].push(n),n})()]}const So=lo({mode:"hash",routes:[{path:"/",redirectTo:"/all"},{path:"/:status",component:bo}]});function Eo(){return[...(()=>{const t={router:So},e=$(this[g],n=>[...(()=>{const o=$(n[g]);return n[p].push(o),x(o,he)})()]);return this[p].push(e),x(e,eo,t)})(),(()=>{const t=w("footer",{class:"info"},O("p","Double-click to edit a todo"),O("p","Created by"," ",w("a",{href:"https://github.com/yuhangge"},"Yuhang Ge")));return this[p].push(t),t})()]}Kn(Eo,document.getElementById("app"));
