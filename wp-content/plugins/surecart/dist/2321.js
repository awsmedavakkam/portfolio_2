"use strict";(self.webpackChunk_surecart_surecart=self.webpackChunk_surecart_surecart||[]).push([[2321],{4805:function(e,n,t){t.d(n,{a:function(){return p},b:function(){return s},g:function(){return d}});var r=t(4467),i=t(296);function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){(0,r.A)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return u(e,n);var t={}.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var _n=0,r=function(){};return{s:r,n:function(){return _n>=e.length?{done:!0}:{done:!1,value:e[_n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,a=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return o=e.done,e},e:function(e){a=!0,i=e},f:function(){try{o||null==t.return||t.return()}finally{if(a)throw i}}}}function u(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}function s(e){for(var n,t="",r=Object.entries(e);n=r.shift();){var o=n,a=(0,i.A)(o,2),u=a[0],s=a[1];if(Array.isArray(s)||s&&s.constructor===Object){var l,d=c(Object.entries(s).reverse());try{for(d.s();!(l=d.n()).done;){var p=(0,i.A)(l.value,2),f=p[0],v=p[1];r.unshift(["".concat(u,"[").concat(f,"]"),v])}}catch(e){d.e(e)}finally{d.f()}}else void 0!==s&&(null===s&&(s=""),t+="&"+[u,s].map(encodeURIComponent).join("="))}return t.substr(1)}function l(e){try{return decodeURIComponent(e)}catch(n){return e}}function d(e){return(function(e){var n;try{n=new URL(e,"http://example.com").search.substring(1)}catch(e){}if(n)return n}(e)||"").replace(/\+/g,"%20").split("&").reduce((function(e,n){var t=n.split("=").filter(Boolean).map(l),r=(0,i.A)(t,2),o=r[0],c=r[1],u=void 0===c?"":c;return o&&function(e,n,t){for(var r=n.length,i=r-1,o=0;o<r;o++){var c=n[o];!c&&Array.isArray(e)&&(c=e.length.toString()),c=["__proto__","constructor","prototype"].includes(c)?c.toUpperCase():c;var u=!isNaN(Number(n[o+1]));e[c]=o===i?t:e[c]||(u?[]:{}),Array.isArray(e[c])&&!u&&(e[c]=a({},e[c])),e=e[c]}}(e,o.replace(/\]/g,"").split("["),u),e}),Object.create(null))}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0;if(!n||!Object.keys(n).length)return e;var t=e,r=e.indexOf("?");return-1!==r&&(n=Object.assign(d(e),n),t=t.substr(0,r)),t+"?"+s(n)}},3:function(e,n,t){t.d(n,{a:function(){return z},h:function(){return H}});var r=t(467),i=t(45),o=t(296),a=t(4467),c=t(9280),u=t.n(c),s=t(4805),l=t(3506),d=["rest_route"],p=["path","url"],f=["url","path","data","parse"];function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?v(Object(t),!0).forEach((function(n){(0,a.A)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){return void 0!==(0,l.g)(e,n)}function w(e){var n=e.split("?"),t=n[1],r=n[0];return t?r+"?"+t.split("&").map((function(e){return e.split("=")})).map((function(e){return e.map(decodeURIComponent)})).sort((function(e,n){return e[0].localeCompare(n[0])})).map((function(e){return e.map(encodeURIComponent)})).map((function(e){return e.join("=")})).join("&"):r}var g=function(e,n){var t,r,i=e.path;return"string"==typeof e.namespace&&"string"==typeof e.endpoint&&(t=e.namespace.replace(/^\/|\/$/g,""),i=(r=e.endpoint.replace(/^\//,""))?t+"/"+r:t),delete e.namespace,delete e.endpoint,n(h(h({},e),{},{path:i}))};function b(e,n){return Promise.resolve(n?e.body:new window.Response(JSON.stringify(e.body),{status:200,statusText:"OK",headers:e.headers}))}var y=function(e){return e.json?e.json():Promise.reject(e)},_=function(e){return function(e){if(!e)return{};var n=e.match(/<([^>]+)>; rel="next"/);return n?{next:n[1]}:{}}(e.headers.get("link")).next},O=function(e){var n=!!e.path&&-1!==e.path.indexOf("per_page=-1"),t=!!e.url&&-1!==e.url.indexOf("per_page=-1");return n||t},j=function(){var e=(0,r.A)(u().mark((function e(n,t){var r,o,a,c,l,d;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!1!==n.parse){e.next=2;break}return e.abrupt("return",t(n));case 2:if(O(n)){e.next=4;break}return e.abrupt("return",t(n));case 4:return e.next=6,z(h(h({},(f={per_page:100},void 0,void 0,v=(u=n).path,m=u.url,h(h({},(0,i.A)(u,p)),{},{url:m&&(0,s.a)(m,f),path:v&&(0,s.a)(v,f)}))),{},{parse:!1}));case 6:return r=e.sent,e.next=9,y(r);case 9:if(o=e.sent,Array.isArray(o)){e.next=12;break}return e.abrupt("return",o);case 12:if(a=_(r)){e.next=15;break}return e.abrupt("return",o);case 15:c=[].concat(o);case 16:if(!a){e.next=27;break}return e.next=19,z(h(h({},n),{},{path:void 0,url:a,parse:!1}));case 19:return l=e.sent,e.next=22,y(l);case 22:d=e.sent,c=c.concat(d),a=_(l),e.next=16;break;case 27:return e.abrupt("return",c);case 28:case"end":return e.stop()}var u,f,v,m}),e)})));return function(_x,n){return e.apply(this,arguments)}}(),k=new Set(["PATCH","PUT","DELETE"]),x=function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return Promise.resolve(function(e){return arguments.length>1&&void 0!==arguments[1]&&!arguments[1]?e:204===e.status?null:e.json?e.json():Promise.reject(e)}(e,n)).catch((function(e){return P(e,n)}))};function P(e){if(arguments.length>1&&void 0!==arguments[1]&&!arguments[1])throw e;return function(e){var n={code:"invalid_json",message:wp.i18n.__("The response is not a valid JSON response.")};if(!e||!e.json)throw n;return e.json().catch((function(){throw n}))}(e).then((function(e){var n={code:"unknown_error",message:wp.i18n.__("An unknown error occurred.")};throw e||n}))}var A,S,D,E,T,M,C,I={Accept:"application/json, */*;q=0.1"},N={credentials:"include"},U=[function(e,n){return"string"!=typeof e.url||m(e.url,"_locale")||(e.url=(0,s.a)(e.url,{_locale:"user"})),"string"!=typeof e.path||m(e.path,"_locale")||(e.path=(0,s.a)(e.path,{_locale:"user"})),n(e)},g,function(e,n){var t=e.method,r=void 0===t?"GET":t;return k.has(r.toUpperCase())&&(e=h(h({},e),{},{headers:h(h({},e.headers),{},{"X-HTTP-Method-Override":r,"Content-Type":"application/json"}),method:"POST"})),n(e)},j],R=function(e){if(e.status>=200&&e.status<300)return e;throw e},L=function(e){var n=e.url,t=e.path,r=e.data,o=e.parse,a=void 0===o||o,c=(0,i.A)(e,f),u=e.body,s=e.headers;return s=h(h({},I),s),r&&(u=JSON.stringify(r),s["Content-Type"]="application/json"),window.fetch(n||t||window.location.href,h(h(h({},N),c),{},{body:u,headers:s})).then((function(e){return Promise.resolve(e).then(R).catch((function(e){return P(e,a)})).then((function(e){return x(e,a)}))}),(function(e){if(e&&"AbortError"===e.name)throw e;throw{code:"fetch_error",message:wp.i18n.__("You are probably offline.")}}))};function z(e){return U.reduceRight((function(e,n){return function(t){return n(t,e)}}),L)(e).catch((function(n){return"rest_cookie_invalid_nonce"!==n.code?Promise.reject(n):window.fetch(z.nonceEndpoint).then(R).then((function(e){return e.text()})).then((function(n){return z.nonceMiddleware.nonce=n,z(e)}))}))}z.use=function(e){U.unshift(e)},z.setFetchHandler=function(e){L=e},z.createNonceMiddleware=function(e){var n=function e(n,t){var r=n.headers,i=void 0===r?{}:r;for(var o in i)if("x-wp-nonce"===o.toLowerCase()&&i[o]===e.nonce)return t(n);return t(h(h({},n),{},{headers:h(h({},i),{},{"X-WP-Nonce":e.nonce})}))};return n.nonce=e,n},z.createPreloadingMiddleware=function(e){var n=Object.fromEntries(Object.entries(e).map((function(e){var n=(0,o.A)(e,2),t=n[0],r=n[1];return[w(t),r]})));return function(e,t){var r=e.parse,o=void 0===r||r,a=e.path;if(!a&&e.url){var c=(0,s.g)(e.url),u=c.rest_route,l=(0,i.A)(c,d);"string"==typeof u&&(a=(0,s.a)(u,l))}if("string"!=typeof a)return t(e);var p=e.method||"GET",f=w(a);if("GET"===p&&n[f]){var v=n[f];return delete n[f],b(v,!!o)}if("OPTIONS"===p&&n[p]&&n[p][f]){var h=n[p][f];return delete n[p][f],b(h,!!o)}return t(e)}},z.createRootURLMiddleware=function(e){return function(n,t){return g(n,(function(n){var r,i=n.url,o=n.path;return"string"==typeof o&&(r=e,-1!==e.indexOf("?")&&(o=o.replace("?","&")),o=o.replace(/^\//,""),"string"==typeof r&&-1!==r.indexOf("?")&&(o=o.replace("?","&")),i=r+o),t(h(h({},n),{},{url:i}))}))}},z.fetchAllMiddleware=j,z.mediaUploadMiddleware=function(e,n){if(!function(e){var n=!!e.method&&"POST"===e.method;return(!!e.path&&-1!==e.path.indexOf("/wp/v2/media")||!!e.url&&-1!==e.url.indexOf("/wp/v2/media"))&&n}(e))return n(e);var t=0,r=function e(r){return t++,n({path:"/wp/v2/media/".concat(r,"/post-process"),method:"POST",data:{action:"create-image-subsizes"},parse:!1}).catch((function(){return t<5?e(r):(n({path:"/wp/v2/media/".concat(r,"?force=true"),method:"DELETE"}),Promise.reject())}))};return n(h(h({},e),{},{parse:!1})).catch((function(n){var t=n.headers.get("x-wp-upload-attachment-id");return n.status>=500&&n.status<600&&t?r(t).catch((function(){return!1!==e.parse?Promise.reject({code:"post_process",message:wp.i18n.__("Media upload failed. If this is a photo or a large image, please scale it down and try again.")}):Promise.reject(n)})):P(n,e.parse)})).then((function(n){return x(n,e.parse)}))},z.createThemePreviewMiddleware=function(e){return function(n,t){if("string"==typeof n.url){var r=(0,l.g)(n.url,"wp_theme_preview");void 0===r?n.url=(0,s.a)(n.url,{wp_theme_preview:e}):""===r&&(n.url=(0,l.r)(n.url,"wp_theme_preview"))}if("string"==typeof n.path){var i=(0,l.g)(n.path,"wp_theme_preview");void 0===i?n.path=(0,s.a)(n.path,{wp_theme_preview:e}):""===i&&(n.path=(0,l.r)(n.path,"wp_theme_preview"))}return t(n)}},z.fetchAllMiddleware=null,z.use(z.createRootURLMiddleware((null===(S=null===(A=null===window||void 0===window?void 0:window.parent)||void 0===A?void 0:A.scData)||void 0===S?void 0:S.root_url)||(null===(D=null===window||void 0===window?void 0:window.scData)||void 0===D?void 0:D.root_url))),(null===(E=null===window||void 0===window?void 0:window.scData)||void 0===E?void 0:E.nonce)&&(z.nonceMiddleware=z.createNonceMiddleware(null===(T=null===window||void 0===window?void 0:window.scData)||void 0===T?void 0:T.nonce),z.use(z.nonceMiddleware)),(null===(M=null===window||void 0===window?void 0:window.scData)||void 0===M?void 0:M.nonce_endpoint)&&(z.nonceEndpoint=null===(C=null===window||void 0===window?void 0:window.scData)||void 0===C?void 0:C.nonce_endpoint),z.use((function(e,n){return e.path=(0,s.a)(e.path,{t:Date.now()}),n(e)})),z.use((function(e,n){var t=n(e);return t.catch((function(e){return"invalid_json"===e.code&&(e.message=wp.i18n.__("The response is not a valid JSON response.","surecart"),e.additional_errors=[{code:"invalid_json",message:wp.i18n.sprintf(/* translators: %s: URL to debug settings page */
wp.i18n.__("Please ensure that your site is not in debug mode as this may interfere with API responses. %s","surecart"),'<a href="'.concat("https://surecart.com/docs/is-not-a-valid-json-response/",'" target="_blank" rel="noopener noreferrer">').concat(wp.i18n.__("More Information","surecart"),"</a>"))}]),"checkout.finalize_error"===e.code&&(e.additional_errors=[{code:"checkout.finalize_error",message:e.message}],e.message=wp.i18n.__("We were not able to process this order","surecart")),Promise.reject(e)})),t}));var J=function(e){var n={code:"invalid_json",message:wp.i18n.__("The response is not a valid JSON response.","surecart")};if((null==e?void 0:e.code)&&(null==e?void 0:e.message))throw e;if(!e||!e.json)throw n;return e.json().catch((function(){throw n}))},H=function(){var e=(0,r.A)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J(n);case 2:if("rest_cookie_invalid_nonce"===(t=e.sent).code){e.next=5;break}throw t;case 5:return e.abrupt("return",window.fetch(z.nonceEndpoint).then((function(e){if(e.status>=200&&e.status<300)return e;throw e})).then((function(e){return e.text()})).then((function(e){z.nonceMiddleware.nonce=e})));case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},3506:function(e,n,t){t.d(n,{g:function(){return i},r:function(){return o}});var r=t(4805);function i(e,n){return(0,r.g)(e)[n]}function o(e){var n=e.indexOf("?");if(-1===n)return e;for(var t=(0,r.g)(e),i=e.substr(0,n),o=arguments.length,a=new Array(o>1?o-1:0),c=1;c<o;c++)a[c-1]=arguments[c];a.forEach((function(e){return delete t[e]}));var u=(0,r.b)(t);return u?i+"?"+u:i}},2321:function(e,n,t){t.r(n),t.d(n,{sc_fulfillments:function(){return f}});var r=t(4467),i=t(467),o=t(3029),a=t(2901),c=t(9280),u=t.n(c),s=t(1346),l=t(3),d=t(4805);function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var f=function(){return(0,a.A)((function e(n){(0,o.A)(this,e),(0,s.r)(this,n),this.orderId=void 0,this.heading=void 0,this.fulfillments=void 0,this.loading=void 0,this.busy=void 0,this.error=void 0}),[{key:"componentDidLoad",value:function(){this.fetch()}},{key:"fetch",value:(e=(0,i.A)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.busy=!0,e.next=4,(0,l.a)({path:(0,d.a)("surecart/v1/fulfillments",{expand:["trackings","fulfillment_items","fulfillment_item.line_item","line_item.price","price.product"],order_ids:[this.orderId],shipment_status:["shipped","delivered"]})});case 4:this.fulfillments=e.sent,e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(this.error),this.error=(null===e.t0||void 0===e.t0?void 0:e.t0.message)||wp.i18n.__("Something went wrong","surecart");case 11:return e.prev=11,this.busy=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,this,[[0,7,11,14]])}))),function(){return e.apply(this,arguments)})},{key:"renderLoading",value:function(){return(0,s.h)("sc-flex",{flexDirection:"column",style:{gap:"1em"}},(0,s.h)("sc-skeleton",{style:{width:"20%",display:"inline-block"}}),(0,s.h)("sc-skeleton",{style:{width:"60%",display:"inline-block"}}),(0,s.h)("sc-skeleton",{style:{width:"40%",display:"inline-block"}}))}},{key:"render",value:function(){var e,n;return this.loading||!(null===(e=this.fulfillments)||void 0===e?void 0:e.length)?(0,s.h)(s.H,{style:{display:"none"}}):(0,s.h)("sc-spacing",{style:{"--spacing":"var(--sc-spacing-large)"}},(0,s.h)("sc-dashboard-module",{error:this.error},(0,s.h)("span",{slot:"heading"},this.heading||wp.i18n._n("Shipment","Shipments",null===(n=this.fulfillments)||void 0===n?void 0:n.length,"surecart")),this.fulfillments.map((function(e){var n,t,i,o,a,c;return(0,s.h)("sc-card",{noPadding:!0},(0,s.h)("sc-stacked-list",null,(0,s.h)("sc-stacked-list-row",null,(0,s.h)("div",{class:"fulfillment__header"},(0,s.h)("sc-fulfillment-shipping-status-badge",{status:e.shipment_status}),(0,s.h)("div",{class:"fulfillment__number"},"#",null==e?void 0:e.number))),!!(null===(t=null===(n=null==e?void 0:e.trackings)||void 0===n?void 0:n.data)||void 0===t?void 0:t.length)&&(0,s.h)("sc-stacked-list-row",null,(0,s.h)("div",{class:"trackings"},(0,s.h)("sc-icon",{name:"truck"}),(0,s.h)("div",{class:"trackings__details"},(0,s.h)("div",{class:"trackings__title"},wp.i18n._n("Tracking number","Tracking numbers",null===(o=null===(i=null==e?void 0:e.trackings)||void 0===i?void 0:i.data)||void 0===o?void 0:o.length,"surecart")),(0,s.h)("div",{class:"trackings__list"},((null===(a=null==e?void 0:e.trackings)||void 0===a?void 0:a.data)||[]).map((function(e){var n=e.number,t=e.url;return(0,s.h)("a",{href:t,target:"_blank"},n)})))))),((null===(c=null==e?void 0:e.fulfillment_items)||void 0===c?void 0:c.data)||[]).map((function(e){var n,t,i,o,a,c,u,l,d,f,v,h,m=e.id,w=e.line_item,g=e.quantity;return(0,s.h)("sc-stacked-list-row",{key:m,style:{"--columns":"2"}},(0,s.h)("div",null,(0,s.h)("div",{class:"line_item__info"},(0,s.h)("div",{class:"line_item__image"},!!(null===(t=null===(n=null==w?void 0:w.price)||void 0===n?void 0:n.product)||void 0===t?void 0:t.line_item_image)&&(0,s.h)("img",function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,r.A)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},null===(o=null===(i=null==w?void 0:w.price)||void 0===i?void 0:i.product)||void 0===o?void 0:o.line_item_image))),(0,s.h)("div",{class:"line_item__text"},(0,s.h)("div",null,null===(c=null===(a=null==w?void 0:w.price)||void 0===a?void 0:a.product)||void 0===c?void 0:c.name),(0,s.h)("div",null,!!(null===(l=null===(u=null==w?void 0:w.price)||void 0===u?void 0:u.product)||void 0===l?void 0:l.weight)&&(0,s.h)("sc-format-number",{type:"unit",value:null===(f=null===(d=null==w?void 0:w.price)||void 0===d?void 0:d.product)||void 0===f?void 0:f.weight,unit:null===(h=null===(v=null==w?void 0:w.price)||void 0===v?void 0:v.product)||void 0===h?void 0:h.weight_unit}))))),(0,s.h)("span",null,wp.i18n.sprintf(wp.i18n.__("Qty: %d","surecart"),g||0)))}))))}))))}},{key:"el",get:function(){return(0,s.a)(this)}}]);var e}();f.style=".fulfillment{display:grid;gap:var(--sc-spacing-x-large)}.fulfillment__number{font-weight:bold}.fulfillment__header{display:flex;align-items:center;gap:var(--sc-spacing-medium)}sc-card{--sc-card-padding:var(--sc-spacing-x-large)}.trackings{display:flex;gap:0.75em;color:var(--sc-line-item-title-color, var(--sc-input-label-color))}.trackings__title{line-height:var(--sc-line-height-dense);font-weight:var(--sc-font-weight-bold)}.trackings sc-icon{opacity:0.5;font-size:22px}.line_items{display:grid;gap:var(--sc-spacing-large)}.line_item__info{display:flex;gap:var(--sc-spacing-medium);align-items:center}.line_item__image img{width:var(--sc-product-line-item-image-size, 4em);height:var(--sc-product-line-item-image-size, 4em);object-fit:cover;border-radius:4px;border:solid 1px var(--sc-input-border-color, var(--sc-input-border));display:block;box-shadow:var(--sc-input-box-shadow)}"},45:function(e,n,t){t.d(n,{A:function(){return i}});var r=t(8587);function i(e,n){if(null==e)return{};var t,i,o=(0,r.A)(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||{}.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}},8587:function(e,n,t){function r(e,n){if(null==e)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}t.d(n,{A:function(){return r}})}}]);