"use strict";(self.webpackChunk_surecart_surecart=self.webpackChunk_surecart_surecart||[]).push([[8207],{4805:function(e,t,r){r.d(t,{a:function(){return d},b:function(){return u},g:function(){return p}});var n=r(4467),i=r(296);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,n.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return c(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var _n=0,n=function(){};return{s:n,n:function(){return _n>=e.length?{done:!0}:{done:!1,value:e[_n++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,a=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return o=e.done,e},e:function(e){a=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(a)throw i}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function u(e){for(var t,r="",n=Object.entries(e);t=n.shift();){var o=t,a=(0,i.A)(o,2),c=a[0],u=a[1];if(Array.isArray(u)||u&&u.constructor===Object){var l,p=s(Object.entries(u).reverse());try{for(p.s();!(l=p.n()).done;){var d=(0,i.A)(l.value,2),f=d[0],h=d[1];n.unshift(["".concat(c,"[").concat(f,"]"),h])}}catch(e){p.e(e)}finally{p.f()}}else void 0!==u&&(null===u&&(u=""),r+="&"+[c,u].map(encodeURIComponent).join("="))}return r.substr(1)}function l(e){try{return decodeURIComponent(e)}catch(t){return e}}function p(e){return(function(e){var t;try{t=new URL(e,"http://example.com").search.substring(1)}catch(e){}if(t)return t}(e)||"").replace(/\+/g,"%20").split("&").reduce((function(e,t){var r=t.split("=").filter(Boolean).map(l),n=(0,i.A)(r,2),o=n[0],s=n[1],c=void 0===s?"":s;return o&&function(e,t,r){for(var n=t.length,i=n-1,o=0;o<n;o++){var s=t[o];!s&&Array.isArray(e)&&(s=e.length.toString()),s=["__proto__","constructor","prototype"].includes(s)?s.toUpperCase():s;var c=!isNaN(Number(t[o+1]));e[s]=o===i?r:e[s]||(c?[]:{}),Array.isArray(e[s])&&!c&&(e[s]=a({},e[s])),e=e[s]}}(e,o.replace(/\]/g,"").split("["),c),e}),Object.create(null))}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;if(!t||!Object.keys(t).length)return e;var r=e,n=e.indexOf("?");return-1!==n&&(t=Object.assign(p(e),t),r=r.substr(0,n)),r+"?"+u(t)}},3:function(e,t,r){r.d(t,{a:function(){return q},h:function(){return J}});var n=r(467),i=r(45),o=r(296),a=r(4467),s=r(9280),c=r.n(s),u=r(4805),l=r(3506),p=["rest_route"],d=["path","url"],f=["url","path","data","parse"];function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,a.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function w(e,t){return void 0!==(0,l.g)(e,t)}function b(e){var t=e.split("?"),r=t[1],n=t[0];return r?n+"?"+r.split("&").map((function(e){return e.split("=")})).map((function(e){return e.map(decodeURIComponent)})).sort((function(e,t){return e[0].localeCompare(t[0])})).map((function(e){return e.map(encodeURIComponent)})).map((function(e){return e.join("=")})).join("&"):n}var g=function(e,t){var r,n,i=e.path;return"string"==typeof e.namespace&&"string"==typeof e.endpoint&&(r=e.namespace.replace(/^\/|\/$/g,""),i=(n=e.endpoint.replace(/^\//,""))?r+"/"+n:r),delete e.namespace,delete e.endpoint,t(v(v({},e),{},{path:i}))};function y(e,t){return Promise.resolve(t?e.body:new window.Response(JSON.stringify(e.body),{status:200,statusText:"OK",headers:e.headers}))}var m=function(e){return e.json?e.json():Promise.reject(e)},_=function(e){return function(e){if(!e)return{};var t=e.match(/<([^>]+)>; rel="next"/);return t?{next:t[1]}:{}}(e.headers.get("link")).next},O=function(e){var t=!!e.path&&-1!==e.path.indexOf("per_page=-1"),r=!!e.url&&-1!==e.url.indexOf("per_page=-1");return t||r},j=function(){var e=(0,n.A)(c().mark((function e(t,r){var n,o,a,s,l,p;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!1!==t.parse){e.next=2;break}return e.abrupt("return",r(t));case 2:if(O(t)){e.next=4;break}return e.abrupt("return",r(t));case 4:return e.next=6,q(v(v({},(f={per_page:100},void 0,void 0,h=(c=t).path,w=c.url,v(v({},(0,i.A)(c,d)),{},{url:w&&(0,u.a)(w,f),path:h&&(0,u.a)(h,f)}))),{},{parse:!1}));case 6:return n=e.sent,e.next=9,m(n);case 9:if(o=e.sent,Array.isArray(o)){e.next=12;break}return e.abrupt("return",o);case 12:if(a=_(n)){e.next=15;break}return e.abrupt("return",o);case 15:s=[].concat(o);case 16:if(!a){e.next=27;break}return e.next=19,q(v(v({},t),{},{path:void 0,url:a,parse:!1}));case 19:return l=e.sent,e.next=22,m(l);case 22:p=e.sent,s=s.concat(p),a=_(l),e.next=16;break;case 27:return e.abrupt("return",s);case 28:case"end":return e.stop()}var c,f,h,w}),e)})));return function(_x,t){return e.apply(this,arguments)}}(),k=new Set(["PATCH","PUT","DELETE"]),P=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return Promise.resolve(function(e){return arguments.length>1&&void 0!==arguments[1]&&!arguments[1]?e:204===e.status?null:e.json?e.json():Promise.reject(e)}(e,t)).catch((function(e){return x(e,t)}))};function x(e){if(arguments.length>1&&void 0!==arguments[1]&&!arguments[1])throw e;return function(e){var t={code:"invalid_json",message:wp.i18n.__("The response is not a valid JSON response.")};if(!e||!e.json)throw t;return e.json().catch((function(){throw t}))}(e).then((function(e){var t={code:"unknown_error",message:wp.i18n.__("An unknown error occurred.")};throw e||t}))}var A,S,E,T,D,C,L,M={Accept:"application/json, */*;q=0.1"},I={credentials:"include"},N=[function(e,t){return"string"!=typeof e.url||w(e.url,"_locale")||(e.url=(0,u.a)(e.url,{_locale:"user"})),"string"!=typeof e.path||w(e.path,"_locale")||(e.path=(0,u.a)(e.path,{_locale:"user"})),t(e)},g,function(e,t){var r=e.method,n=void 0===r?"GET":r;return k.has(n.toUpperCase())&&(e=v(v({},e),{},{headers:v(v({},e.headers),{},{"X-HTTP-Method-Override":n,"Content-Type":"application/json"}),method:"POST"})),t(e)},j],R=function(e){if(e.status>=200&&e.status<300)return e;throw e},U=function(e){var t=e.url,r=e.path,n=e.data,o=e.parse,a=void 0===o||o,s=(0,i.A)(e,f),c=e.body,u=e.headers;return u=v(v({},M),u),n&&(c=JSON.stringify(n),u["Content-Type"]="application/json"),window.fetch(t||r||window.location.href,v(v(v({},I),s),{},{body:c,headers:u})).then((function(e){return Promise.resolve(e).then(R).catch((function(e){return x(e,a)})).then((function(e){return P(e,a)}))}),(function(e){if(e&&"AbortError"===e.name)throw e;throw{code:"fetch_error",message:wp.i18n.__("You are probably offline.")}}))};function q(e){return N.reduceRight((function(e,t){return function(r){return t(r,e)}}),U)(e).catch((function(t){return"rest_cookie_invalid_nonce"!==t.code?Promise.reject(t):window.fetch(q.nonceEndpoint).then(R).then((function(e){return e.text()})).then((function(t){return q.nonceMiddleware.nonce=t,q(e)}))}))}q.use=function(e){N.unshift(e)},q.setFetchHandler=function(e){U=e},q.createNonceMiddleware=function(e){var t=function e(t,r){var n=t.headers,i=void 0===n?{}:n;for(var o in i)if("x-wp-nonce"===o.toLowerCase()&&i[o]===e.nonce)return r(t);return r(v(v({},t),{},{headers:v(v({},i),{},{"X-WP-Nonce":e.nonce})}))};return t.nonce=e,t},q.createPreloadingMiddleware=function(e){var t=Object.fromEntries(Object.entries(e).map((function(e){var t=(0,o.A)(e,2),r=t[0],n=t[1];return[b(r),n]})));return function(e,r){var n=e.parse,o=void 0===n||n,a=e.path;if(!a&&e.url){var s=(0,u.g)(e.url),c=s.rest_route,l=(0,i.A)(s,p);"string"==typeof c&&(a=(0,u.a)(c,l))}if("string"!=typeof a)return r(e);var d=e.method||"GET",f=b(a);if("GET"===d&&t[f]){var h=t[f];return delete t[f],y(h,!!o)}if("OPTIONS"===d&&t[d]&&t[d][f]){var v=t[d][f];return delete t[d][f],y(v,!!o)}return r(e)}},q.createRootURLMiddleware=function(e){return function(t,r){return g(t,(function(t){var n,i=t.url,o=t.path;return"string"==typeof o&&(n=e,-1!==e.indexOf("?")&&(o=o.replace("?","&")),o=o.replace(/^\//,""),"string"==typeof n&&-1!==n.indexOf("?")&&(o=o.replace("?","&")),i=n+o),r(v(v({},t),{},{url:i}))}))}},q.fetchAllMiddleware=j,q.mediaUploadMiddleware=function(e,t){if(!function(e){var t=!!e.method&&"POST"===e.method;return(!!e.path&&-1!==e.path.indexOf("/wp/v2/media")||!!e.url&&-1!==e.url.indexOf("/wp/v2/media"))&&t}(e))return t(e);var r=0,n=function e(n){return r++,t({path:"/wp/v2/media/".concat(n,"/post-process"),method:"POST",data:{action:"create-image-subsizes"},parse:!1}).catch((function(){return r<5?e(n):(t({path:"/wp/v2/media/".concat(n,"?force=true"),method:"DELETE"}),Promise.reject())}))};return t(v(v({},e),{},{parse:!1})).catch((function(t){var r=t.headers.get("x-wp-upload-attachment-id");return t.status>=500&&t.status<600&&r?n(r).catch((function(){return!1!==e.parse?Promise.reject({code:"post_process",message:wp.i18n.__("Media upload failed. If this is a photo or a large image, please scale it down and try again.")}):Promise.reject(t)})):x(t,e.parse)})).then((function(t){return P(t,e.parse)}))},q.createThemePreviewMiddleware=function(e){return function(t,r){if("string"==typeof t.url){var n=(0,l.g)(t.url,"wp_theme_preview");void 0===n?t.url=(0,u.a)(t.url,{wp_theme_preview:e}):""===n&&(t.url=(0,l.r)(t.url,"wp_theme_preview"))}if("string"==typeof t.path){var i=(0,l.g)(t.path,"wp_theme_preview");void 0===i?t.path=(0,u.a)(t.path,{wp_theme_preview:e}):""===i&&(t.path=(0,l.r)(t.path,"wp_theme_preview"))}return r(t)}},q.fetchAllMiddleware=null,q.use(q.createRootURLMiddleware((null===(S=null===(A=null===window||void 0===window?void 0:window.parent)||void 0===A?void 0:A.scData)||void 0===S?void 0:S.root_url)||(null===(E=null===window||void 0===window?void 0:window.scData)||void 0===E?void 0:E.root_url))),(null===(T=null===window||void 0===window?void 0:window.scData)||void 0===T?void 0:T.nonce)&&(q.nonceMiddleware=q.createNonceMiddleware(null===(D=null===window||void 0===window?void 0:window.scData)||void 0===D?void 0:D.nonce),q.use(q.nonceMiddleware)),(null===(C=null===window||void 0===window?void 0:window.scData)||void 0===C?void 0:C.nonce_endpoint)&&(q.nonceEndpoint=null===(L=null===window||void 0===window?void 0:window.scData)||void 0===L?void 0:L.nonce_endpoint),q.use((function(e,t){return e.path=(0,u.a)(e.path,{t:Date.now()}),t(e)})),q.use((function(e,t){var r=t(e);return r.catch((function(e){return"invalid_json"===e.code&&(e.message=wp.i18n.__("The response is not a valid JSON response.","surecart"),e.additional_errors=[{code:"invalid_json",message:wp.i18n.sprintf(/* translators: %s: URL to debug settings page */
wp.i18n.__("Please ensure that your site is not in debug mode as this may interfere with API responses. %s","surecart"),'<a href="'.concat("https://surecart.com/docs/is-not-a-valid-json-response/",'" target="_blank" rel="noopener noreferrer">').concat(wp.i18n.__("More Information","surecart"),"</a>"))}]),"checkout.finalize_error"===e.code&&(e.additional_errors=[{code:"checkout.finalize_error",message:e.message}],e.message=wp.i18n.__("We were not able to process this order","surecart")),Promise.reject(e)})),r}));var z=function(e){var t={code:"invalid_json",message:wp.i18n.__("The response is not a valid JSON response.","surecart")};if((null==e?void 0:e.code)&&(null==e?void 0:e.message))throw e;if(!e||!e.json)throw t;return e.json().catch((function(){throw t}))},J=function(){var e=(0,n.A)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z(t);case 2:if("rest_cookie_invalid_nonce"===(r=e.sent).code){e.next=5;break}throw r;case 5:return e.abrupt("return",window.fetch(q.nonceEndpoint).then((function(e){if(e.status>=200&&e.status<300)return e;throw e})).then((function(e){return e.text()})).then((function(e){q.nonceMiddleware.nonce=e})));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},2942:function(e,t,r){r.d(t,{o:function(){return n}});var n=function(e,t){new window.IntersectionObserver((function(e,r){e[0].intersectionRatio>0&&(t(),r.unobserve(e[0].target))})).observe(e)}},3506:function(e,t,r){r.d(t,{g:function(){return i},r:function(){return o}});var n=r(4805);function i(e,t){return(0,n.g)(e)[t]}function o(e){var t=e.indexOf("?");if(-1===t)return e;for(var r=(0,n.g)(e),i=e.substr(0,t),o=arguments.length,a=new Array(o>1?o-1:0),s=1;s<o;s++)a[s-1]=arguments[s];a.forEach((function(e){return delete r[e]}));var c=(0,n.b)(r);return c?i+"?"+c:i}},8207:function(e,t,r){r.r(t),r.d(t,{sc_subscriptions_list:function(){return v}});var n=r(4467),i=r(467),o=r(3029),a=r(2901),s=r(9280),c=r.n(s),u=r(1346),l=r(3),p=r(2942),d=r(4805);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,n.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=function(){return(0,a.A)((function e(t){(0,o.A)(this,e),(0,u.r)(this,t),this.query={page:1,per_page:10},this.allLink=void 0,this.heading=void 0,this.isCustomer=void 0,this.cancelBehavior="period_end",this.subscriptions=[],this.loading=void 0,this.busy=void 0,this.error=void 0,this.pagination={total:0,total_pages:0}}),[{key:"componentWillLoad",value:function(){var e=this;(0,p.o)(this.el,(function(){e.initialFetch()}))}},{key:"initialFetch",value:(r=(0,i.A)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.loading=!0,e.next=4,this.getSubscriptions();case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(this.error),this.error=(null===e.t0||void 0===e.t0?void 0:e.t0.message)||wp.i18n.__("Something went wrong","surecart");case 10:return e.prev=10,this.loading=!1,e.finish(10);case 13:case"end":return e.stop()}}),e,this,[[0,6,10,13]])}))),function(){return r.apply(this,arguments)})},{key:"fetchSubscriptions",value:(t=(0,i.A)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.busy=!0,e.next=4,this.getSubscriptions();case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(this.error),this.error=(null===e.t0||void 0===e.t0?void 0:e.t0.message)||wp.i18n.__("Something went wrong","surecart");case 10:return e.prev=10,this.busy=!1,e.finish(10);case 13:case"end":return e.stop()}}),e,this,[[0,6,10,13]])}))),function(){return t.apply(this,arguments)})},{key:"getSubscriptions",value:(e=(0,i.A)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.isCustomer){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,l.a)({path:(0,d.a)("surecart/v1/subscriptions/",h({expand:["price","price.product","current_period","period.checkout","purchase","purchase.license","license.activations","discount","discount.coupon"]},this.query)),parse:!1});case 4:return e.next=6,e.sent;case 6:return t=e.sent,this.pagination={total:parseInt(t.headers.get("X-WP-Total")),total_pages:parseInt(t.headers.get("X-WP-TotalPages"))},e.next=10,t.json();case 10:return this.subscriptions=e.sent,e.abrupt("return",this.subscriptions);case 12:case"end":return e.stop()}}),e,this)}))),function(){return e.apply(this,arguments)})},{key:"nextPage",value:function(){this.query.page=this.query.page+1,this.fetchSubscriptions()}},{key:"prevPage",value:function(){this.query.page=this.query.page-1,this.fetchSubscriptions()}},{key:"renderEmpty",value:function(){return(0,u.h)("div",null,(0,u.h)("sc-divider",{style:{"--spacing":"0"}}),(0,u.h)("slot",{name:"empty"},(0,u.h)("sc-empty",{icon:"repeat"},wp.i18n.__("You don't have any subscriptions.","surecart"))))}},{key:"renderLoading",value:function(){return(0,u.h)("sc-card",{"no-padding":!0,style:{"--overflow":"hidden"}},(0,u.h)("sc-stacked-list",null,(0,u.h)("sc-stacked-list-row",{style:{"--columns":"2"},"mobile-size":0},(0,u.h)("div",{style:{padding:"0.5em"}},(0,u.h)("sc-skeleton",{style:{width:"30%",marginBottom:"0.75em"}}),(0,u.h)("sc-skeleton",{style:{width:"20%",marginBottom:"0.75em"}}),(0,u.h)("sc-skeleton",{style:{width:"40%"}})))))}},{key:"getSubscriptionLink",value:function(e){return(0,d.a)(window.location.href,{action:"edit",model:"subscription",id:e.id})}},{key:"renderList",value:function(){var e=this;return this.subscriptions.map((function(t){return(0,u.h)("sc-stacked-list-row",{href:e.getSubscriptionLink(t),key:t.id,"mobile-size":0},(0,u.h)("sc-subscription-details",{subscription:t}),(0,u.h)("sc-icon",{name:"chevron-right",slot:"suffix"}))}))}},{key:"renderContent",value:function(){var e;return this.loading?this.renderLoading():0===(null===(e=this.subscriptions)||void 0===e?void 0:e.length)?this.renderEmpty():(0,u.h)("sc-card",{"no-padding":!0,style:{"--overflow":"hidden"}},(0,u.h)("sc-stacked-list",null,this.renderList()))}},{key:"render",value:function(){var e,t,r=this;return(0,u.h)("sc-dashboard-module",{key:"94410649ba1138510c9be20d8aba6d86cb6c9ce6",class:"subscriptions-list",error:this.error},(0,u.h)("span",{key:"b2cb86c42b398b70c675c2bd8e3d32929f116b2d",slot:"heading"},(0,u.h)("slot",{key:"904419d351e4ec7304697fbb1e9dd95ac05a7bdb",name:"heading"},this.heading||wp.i18n.__("Subscriptions","surecart"))),!!this.allLink&&!!(null===(e=this.subscriptions)||void 0===e?void 0:e.length)&&(0,u.h)("sc-button",{key:"637cec9d3af368b53369b6bcbfe31744b624e00f",type:"link",href:this.allLink,slot:"end","aria-label":wp.i18n.sprintf(wp.i18n.__("View all %s","surecart"),this.heading||"Subscriptions")},wp.i18n.__("View all","surecart"),(0,u.h)("sc-icon",{key:"529bb83393af8aa05ea58f921f978c9534a5cc9a","aria-hidden":"true",name:"chevron-right",slot:"suffix"})),this.renderContent(),!this.allLink&&(0,u.h)("sc-pagination",{key:"2e0dd6372ab15693511f0bcee42d35e04bf69307",page:this.query.page,perPage:this.query.per_page,total:this.pagination.total,totalPages:this.pagination.total_pages,totalShowing:null===(t=null==this?void 0:this.subscriptions)||void 0===t?void 0:t.length,onScNextPage:function(){return r.nextPage()},onScPrevPage:function(){return r.prevPage()}}),this.busy&&(0,u.h)("sc-block-ui",{key:"0a5b2f433fe9b76fd3a25c8d86c7d6676cb997af"}))}},{key:"el",get:function(){return(0,u.a)(this)}}]);var e,t,r}();v.style=":host{display:block}.subscriptions-list{display:grid;gap:0.5em}.subscriptions-list__heading{display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;margin-bottom:0.5em}.subscriptions-list__title{font-size:var(--sc-font-size-x-large);font-weight:var(--sc-font-weight-bold);line-height:var(--sc-line-height-dense)}.subscriptions-list a{text-decoration:none;font-weight:var(--sc-font-weight-semibold);display:inline-flex;align-items:center;gap:0.25em;color:var(--sc-color-primary-500)}.subscriptions__title{display:none}.subscriptions--has-title-slot .subscriptions__title{display:block}"},45:function(e,t,r){r.d(t,{A:function(){return i}});var n=r(8587);function i(e,t){if(null==e)return{};var r,i,o=(0,n.A)(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}},8587:function(e,t,r){function n(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}r.d(t,{A:function(){return n}})}}]);