!function(){"use strict";var r={1513:function(r){var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;r.exports=function(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de","5"===Object.getOwnPropertyNames(r)[0])return!1;for(var e={},t=0;t<10;t++)e["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(r){return e[r]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(r){n[r]=r})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(r){return!1}}()?Object.assign:function(r,o){for(var c,i,a=function(r){if(null==r)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}(r),s=1;s<arguments.length;s++){for(var u in c=Object(arguments[s]))t.call(c,u)&&(a[u]=c[u]);if(e){i=e(c);for(var p=0;p<i.length;p++)n.call(c,i[p])&&(a[i[p]]=c[i[p]])}}return a}},3335:function(r,e,t){t(1513);var n=t(1609),o=60103;if("function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),c("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};e.jsx=function(r,e,t){var n,c={},u=null,p=null;for(n in void 0!==t&&(u=""+t),void 0!==e.key&&(u=""+e.key),void 0!==e.ref&&(p=e.ref),e)a.call(e,n)&&!s.hasOwnProperty(n)&&(c[n]=e[n]);if(r&&r.defaultProps)for(n in e=r.defaultProps)void 0===c[n]&&(c[n]=e[n]);return{$$typeof:o,type:r,key:u,ref:p,props:c,_owner:i.current}}},1085:function(r,e,t){r.exports=t(3335)},1609:function(r){r.exports=window.React}},e={};function t(n){var o=e[n];if(void 0!==o)return o.exports;var c=e[n]={exports:{}};return r[n](c,c.exports,t),c.exports}!function(){var r=window.wp.blocks,e=window.wp.primitives,n=t(1085),o=(0,n.jsx)(e.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)(e.Path,{d:"M18.1823 11.6392C18.1823 13.0804 17.0139 14.2487 15.5727 14.2487C14.3579 14.2487 13.335 13.4179 13.0453 12.2922L13.0377 12.2625L13.0278 12.2335L12.3985 10.377L12.3942 10.3785C11.8571 8.64997 10.246 7.39405 8.33961 7.39405C5.99509 7.39405 4.09448 9.29465 4.09448 11.6392C4.09448 13.9837 5.99509 15.8843 8.33961 15.8843C8.88499 15.8843 9.40822 15.781 9.88943 15.5923L9.29212 14.0697C8.99812 14.185 8.67729 14.2487 8.33961 14.2487C6.89838 14.2487 5.73003 13.0804 5.73003 11.6392C5.73003 10.1979 6.89838 9.02959 8.33961 9.02959C9.55444 9.02959 10.5773 9.86046 10.867 10.9862L10.8772 10.9836L11.4695 12.7311C11.9515 14.546 13.6048 15.8843 15.5727 15.8843C17.9172 15.8843 19.8178 13.9837 19.8178 11.6392C19.8178 9.29465 17.9172 7.39404 15.5727 7.39404C15.0287 7.39404 14.5066 7.4968 14.0264 7.6847L14.6223 9.20781C14.9158 9.093 15.2358 9.02959 15.5727 9.02959C17.0139 9.02959 18.1823 10.1979 18.1823 11.6392Z"})}),c=window.wp.blockEditor,i=window.wp.i18n;const a=[["core/paragraph",{placeholder:(0,i.__)("Add text or blocks that will display when a query returns no products.","surecart"),align:"center",content:(0,i.__)("No products found.","surecart")}]];var s=JSON.parse('{"UU":"surecart/product-list-no-products"}');(0,r.registerBlockType)(s.UU,{icon:o,edit:function(){const r=(0,c.useBlockProps)(),e=(0,c.useInnerBlocksProps)(r,{template:a});return React.createElement("div",e)},save:function(){return React.createElement(c.InnerBlocks.Content,null)}})}()}();