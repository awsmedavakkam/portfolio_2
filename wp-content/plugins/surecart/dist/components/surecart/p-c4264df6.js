function n(n,e,t){return new Promise((i=>{if((null==t?void 0:t.duration)===1/0)throw new Error("Promise-based animations must be finite.");if(!(null==n?void 0:n.animate))return;const r=n.animate(e,{...t,duration:o()?0:t.duration});r&&(r.addEventListener("cancel",i,{once:!0}),r.addEventListener("finish",i,{once:!0}))}))}function o(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function e(n){var e;return Promise.all(((null===(e=null==n?void 0:n.getAnimations)||void 0===e?void 0:e.call(n))||[]).map((n=>new Promise((e=>{const t=requestAnimationFrame(e);n.addEventListener("cancel",(()=>t),{once:!0}),n.addEventListener("finish",(()=>t),{once:!0}),n.cancel()})))))}function i(n,e){return n.map((n=>({...n,height:"auto"===n.height?`${e}px`:n.height})))}const r=new Map,t=new WeakMap;function u(n){return null!=n?n:{keyframes:[],options:{duration:0}}}function s(n,e){r.set(n,u(e))}function c(n,e){const i=t.get(n);if(null==i?void 0:i[e])return i[e];return r.get(e)||{keyframes:[],options:{duration:0}}}export{n as a,e as b,i as c,c as g,s};