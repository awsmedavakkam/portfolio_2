!function(){"use strict";var e,r={5467:function(e,r,t){var n=window.wp.blocks,o=window.wp.primitives,a=t(1085),i=(0,a.jsx)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,a.jsx)(o.Path,{d:"M16 10.5v3h3v-3h-3zm-5 3h3v-3h-3v3zM7 9l-3 3 3 3 1-1-2-2 2-2-1-1z"})}),c=window.wp.blockEditor,u=window.wp.i18n,s=t(1609),l=t.n(s);function f(e){let{name:r,...t}=e;const[n,o]=(0,s.useState)(null),a=window?.scData?.plugin_url+"/dist/icon-assets";if((0,s.useEffect)((()=>{fetch(`${a}/${r}.svg`).then((e=>e.text())).then((e=>{const r=(new DOMParser).parseFromString(e,"image/svg+xml");o(r?.documentElement)})).catch(console.error)}),[r]),!n)return null;const i={...Array.from(n.attributes).reduce(((e,r)=>(e[r.name.replace(/-([a-z])/g,(function(e){return e[1].toUpperCase()}))]=r.value,e)),{}),...t};return l().createElement(n.tagName,{...i,dangerouslySetInnerHTML:{__html:n.innerHTML}})}const p={none:"",arrow:(0,u.isRTL)()?"arrow-right":"arrow-left",chevron:(0,u.isRTL)()?"chevron-right":"chevron-left"};var v=JSON.parse('{"UU":"surecart/product-pagination-previous"}');(0,n.registerBlockType)(v.UU,{icon:i,edit:e=>{let{attributes:{label:r},setAttributes:t,context:{paginationArrow:n,showLabel:o}}=e;const a=p[n],i=(0,c.useBlockProps)({href:"#",onClick:e=>e.preventDefault(),className:"has-arrow-type-"+n});return React.createElement("a",i,!!a&&React.createElement(f,{name:a,className:"wp-block-surecart-product-pagination-next__icon","aria-hidden":!0}),o&&React.createElement(c.PlainText,{__experimentalVersion:2,tagName:"span","aria-label":(0,u.__)("Previous page link"),placeholder:(0,u.__)("Previous"),value:r,onChange:e=>t({label:e})}))}})},1513:function(e){var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var a,i,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var s in a=Object(arguments[u]))t.call(a,s)&&(c[s]=a[s]);if(r){i=r(a);for(var l=0;l<i.length;l++)n.call(a,i[l])&&(c[i[l]]=a[i[l]])}}return c}},3335:function(e,r,t){t(1513);var n=t(1609),o=60103;if("function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),a("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};r.jsx=function(e,r,t){var n,a={},s=null,l=null;for(n in void 0!==t&&(s=""+t),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(l=r.ref),r)c.call(r,n)&&!u.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:o,type:e,key:s,ref:l,props:a,_owner:i.current}}},1085:function(e,r,t){e.exports=t(3335)},1609:function(e){e.exports=window.React}},t={};function n(e){var o=t[e];if(void 0!==o)return o.exports;var a=t[e]={exports:{}};return r[e](a,a.exports,n),a.exports}n.m=r,e=[],n.O=function(r,t,o,a){if(!t){var i=1/0;for(l=0;l<e.length;l++){t=e[l][0],o=e[l][1],a=e[l][2];for(var c=!0,u=0;u<t.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](t[u])}))?t.splice(u--,1):(c=!1,a<i&&(i=a));if(c){e.splice(l--,1);var s=o();void 0!==s&&(r=s)}}return r}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[t,o,a]},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,{a:r}),r},n.d=function(e,r){for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},function(){var e={441:0,7277:0};n.O.j=function(r){return 0===e[r]};var r=function(r,t){var o,a,i=t[0],c=t[1],u=t[2],s=0;if(i.some((function(r){return 0!==e[r]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(u)var l=u(n)}for(r&&r(t);s<i.length;s++)a=i[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},t=self.webpackChunk_surecart_blocks_next=self.webpackChunk_surecart_blocks_next||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))}();var o=n.O(void 0,[7277],(function(){return n(5467)}));o=n.O(o)}();