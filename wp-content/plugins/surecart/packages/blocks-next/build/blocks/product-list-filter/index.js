!function(){"use strict";var e={1513:function(e){var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var a,c,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var l in a=Object(arguments[s]))r.call(a,l)&&(i[l]=a[l]);if(t){c=t(a);for(var u=0;u<c.length;u++)n.call(a,c[u])&&(i[c[u]]=a[c[u]])}}return i}},3335:function(e,t,r){r(1513);var n=r(1609),o=60103;if("function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),a("react.fragment")}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};t.jsx=function(e,t,r){var n,a={},l=null,u=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,n)&&!s.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:e,key:l,ref:u,props:a,_owner:c.current}}},1085:function(e,t,r){e.exports=r(3335)},1609:function(e){e.exports=window.React}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}!function(){var e=window.wp.blocks,t=window.wp.primitives,n=r(1085),o=(0,n.jsx)(t.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,n.jsx)(t.Path,{d:"M12 4 4 19h16L12 4zm0 3.2 5.5 10.3H12V7.2z"})}),a=window.wp.i18n,c=window.wp.coreData,i=window.wp.data,s=window.wp.blockEditor,l=window.wp.components;function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(null,arguments)}var p=JSON.parse('{"UU":"surecart/product-list-filter"}');(0,e.registerBlockType)(p.UU,{icon:o,edit:e=>{let{attributes:{taxonomy:t,label:r},setAttributes:n}=e;const o=(0,s.useBlockProps)({className:"sc-dropdown"}),{records:i}=(0,c.useEntityRecords)("root","taxonomy",{per_page:-1}),p=(i??[]).filter((e=>e.types.includes("sc_product")&&e?.visibility.public));return React.createElement("div",u({},o,{role:"menu",tabIndex:"-1"}),React.createElement(s.InspectorControls,null,React.createElement(l.PanelBody,{title:(0,a.__)("Settings")},Array.isArray(p)&&React.createElement(l.SelectControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:(0,a.__)("Taxonomy"),options:p.map((e=>({label:e.name,value:e.slug}))),value:t,onChange:e=>n({taxonomy:e,label:p.find((t=>t.slug===e))?.name??(0,a.__)("Filter","surecart")})}))),React.createElement("button",{className:"sc-dropdown__trigger sc-button sc-button--standard sc-button--medium sc-button--caret sc-button--has-label sc-button--text"},React.createElement("span",{className:"sc-button__label"},React.createElement(s.RichText,{value:r??(0,a.__)("Filter","surecart"),withoutInteractiveFormatting:!0,allowedFormats:[],onChange:e=>n({label:e})})),React.createElement("span",{className:"sc-button__caret"},React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},React.createElement("polyline",{points:"6 9 12 15 18 9"})))))},__experimentalLabel:e=>{const t=(0,i.select)(c.store).getEntityRecords("root","taxonomy",{per_page:-1});if(!t)return!1;const r=t.find((t=>t.slug===e?.taxonomy));return!(!r||!r?.name)&&r.name}})}()}();