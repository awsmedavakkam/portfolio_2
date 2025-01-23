!function(){"use strict";var e,t={3141:function(e,t,r){var n=window.wp.blocks,o=window.wp.primitives,a=r(1085),c=(0,a.jsx)(o.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)(o.Path,{d:"M4 4v1.5h16V4H4zm8 8.5h8V11h-8v1.5zM4 20h16v-1.5H4V20zm4-8c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z"})}),l=window.wp.i18n,i=window.wp.element,s=window.wp.blockEditor,u=window.wp.components,p=e=>{let{attributes:t}=e;if(!t)return{};const{border:r,textColor:n,backgroundColor:o,padding:a}=t;return{...r?{borderBottom:"var(--sc-drawer-border)"}:{},...o?{backgroundColor:o}:{},...n?{color:n}:{color:"var(--sc-input-label-color)"},...a?.top?{paddingTop:a?.top}:{},...a?.bottom?{paddingBottom:a?.bottom}:{},...a?.left?{paddingLeft:a?.left}:{},...a?.right?{paddingRight:a?.right}:{}}},d=e=>{let{attributes:t,setAttributes:r}=e;const{backgroundColor:n,textColor:o,padding:a,border:c}=t;return React.createElement(React.Fragment,null,React.createElement(s.PanelColorSettings,{title:(0,l.__)("Color Settings"),colorSettings:[{value:n,onChange:e=>r({backgroundColor:e}),label:(0,l.__)("Background Color","surecart")},{value:o,onChange:e=>r({textColor:e}),label:(0,l.__)("Text Color","surecart")}]}),React.createElement(u.PanelBody,{title:(0,l.__)("Spacing","surecart")},React.createElement(u.__experimentalBoxControl,{label:(0,l.__)("Padding","surecart"),values:a,resetValues:{top:"1.25em",right:"1.25em",bottom:"1.25em",left:"1.25em"},onChange:e=>r({padding:e})})),React.createElement(u.PanelBody,{title:(0,l.__)("Border","surecart")},React.createElement(u.PanelRow,null,React.createElement(u.ToggleControl,{label:(0,l.__)("Bottom Border","surecart"),checked:c,onChange:e=>r({border:e})}))))},m=JSON.parse('{"UU":"surecart/slide-out-cart-bump-line-item"}');(0,n.registerBlockType)(m.UU,{icon:c,edit:e=>{let{attributes:t,setAttributes:r}=e;const{label:n}=t,o=(0,s.useBlockProps)({style:{color:"var(--sc-price-label-color, var(--sc-input-help-text-color))",...p({attributes:t})}});return React.createElement(i.Fragment,null,React.createElement(s.InspectorControls,null,React.createElement(d,{attributes:t,setAttributes:r}),React.createElement(u.PanelBody,{title:(0,l.__)("Attributes","surecart")},React.createElement(u.PanelRow,null,React.createElement(u.TextControl,{label:(0,l.__)("Label","surecart"),value:n,onChange:e=>r({label:e})})))),React.createElement("div",o,React.createElement("div",{className:"sc-product-line-item"},React.createElement("div",{className:"sc-product-line-item__item"},React.createElement("div",{className:"sc-product-line-item__text"},React.createElement("div",{className:"sc-product-line-item__text-details"},React.createElement("div",{className:"sc-bump-line-item__description"},React.createElement("span",null,n||(0,l.__)("Bundle Discount","surecart"))))),React.createElement("div",{className:"sc-product-line-item__suffix"},React.createElement("div",{className:"sc-bump-line-item__price"},React.createElement("div",{className:"price"},React.createElement("span",null,"-",scData?.currency_symbol,"1.20"))))))))}})},1513:function(e){var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var a,c,l=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),i=1;i<arguments.length;i++){for(var s in a=Object(arguments[i]))r.call(a,s)&&(l[s]=a[s]);if(t){c=t(a);for(var u=0;u<c.length;u++)n.call(a,c[u])&&(l[c[u]]=a[c[u]])}}return l}},3335:function(e,t,r){r(1513);var n=r(1609),o=60103;if("function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),a("react.fragment")}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};t.jsx=function(e,t,r){var n,a={},s=null,u=null;for(n in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(u=t.ref),t)l.call(t,n)&&!i.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:e,key:s,ref:u,props:a,_owner:c.current}}},1085:function(e,t,r){e.exports=r(3335)},1609:function(e){e.exports=window.React}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.m=t,e=[],n.O=function(t,r,o,a){if(!r){var c=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],a=e[u][2];for(var l=!0,i=0;i<r.length;i++)(!1&a||c>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[i])}))?r.splice(i--,1):(l=!1,a<c&&(c=a));if(l){e.splice(u--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,o,a]},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={5659:0,659:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,c=r[0],l=r[1],i=r[2],s=0;if(c.some((function(t){return 0!==e[t]}))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(i)var u=i(n)}for(t&&t(r);s<c.length;s++)a=c[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},r=self.webpackChunk_surecart_blocks_next=self.webpackChunk_surecart_blocks_next||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var o=n.O(void 0,[659],(function(){return n(3141)}));o=n.O(o)}();