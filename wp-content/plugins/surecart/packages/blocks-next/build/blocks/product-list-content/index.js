!function(){"use strict";var e={1513:function(e){var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var i,a,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var s in i=Object(arguments[l]))r.call(i,s)&&(c[s]=i[s]);if(t){a=t(i);for(var u=0;u<a.length;u++)n.call(i,a[u])&&(c[a[u]]=i[a[u]])}}return c}},3335:function(e,t,r){r(1513);var n=r(1609),o=60103;if("function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),i("react.fragment")}var a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};t.jsx=function(e,t,r){var n,i={},s=null,u=null;for(n in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(u=t.ref),t)c.call(t,n)&&!l.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:s,ref:u,props:i,_owner:a.current}}},1085:function(e,t,r){e.exports=r(3335)},1609:function(e){e.exports=window.React}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}!function(){var e=window.wp.blocks,t=window.wp.primitives,n=r(1085),o=(0,n.jsx)(t.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)(t.Path,{fillRule:"evenodd",clipRule:"evenodd",d:"M15 7.5h-5v10h5v-10Zm1.5 0v10H19a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5h-2.5ZM6 7.5h2.5v10H6a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5ZM6 6h13a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"})}),i=window.wp.blockEditor;window.wp.i18n;const a=[["surecart/product-list-sidebar",{style:{layout:{selfStretch:"fixed",flexSize:"300px",type:"flex",orientation:"vertical"}},layout:{type:"flex",orientation:"vertical"}}],["surecart/product-template",{style:{spacing:{blockGap:"30px"},layout:{selfStretch:"fit",flexSize:null}},layout:{type:"grid",columnCount:4}}]];var c=JSON.parse('{"UU":"surecart/product-list-content"}');(0,e.registerBlockType)(c.UU,{icon:o,edit:()=>{const e=(0,i.useBlockProps)(),t=(0,i.useInnerBlocksProps)(e,{template:a});return React.createElement("div",t)},save:function(){return React.createElement(i.InnerBlocks.Content,null)}})}()}();