import{s as state,c as clearCheckout$1}from"./mutations2.js";import{u as updateFormState}from"./mutations5.js";import{c as createErrorNotice}from"./mutations3.js";import{u as updateLineItem,a as addLineItem,r as removeLineItem}from"./index4.js";import{a as apiFetch}from"./fetch.js";import{a as addQueryArgs}from"./add-query-args.js";var _a;const clearCheckout=()=>{var t;clearCheckout$1(state.formId,state.mode,null===(t=state.checkout)||void 0===t?void 0:t.id)},lockCheckout=t=>state.locks=[...state.locks,t],unLockCheckout=(t="")=>state.locks=t?state.locks.filter((e=>e!==t)):[],updateCheckoutLineItem=async({id:t,data:e})=>{try{updateFormState("FETCH"),state.checkout=await updateLineItem({id:t,data:e}),updateFormState("RESOLVE")}catch(t){console.error(t),createErrorNotice(t),updateFormState("REJECT")}},removeCheckoutLineItem=async t=>{try{updateFormState("FETCH"),state.checkout=await removeLineItem({checkoutId:state.checkout.id,itemId:t}),updateFormState("RESOLVE")}catch(t){console.error(t),createErrorNotice(t),updateFormState("REJECT")}},addCheckoutLineItem=async t=>{try{updateFormState("FETCH"),state.checkout=await addLineItem({checkout:state.checkout,data:t,live_mode:"live"===(null==state?void 0:state.mode)}),updateFormState("RESOLVE")}catch(t){console.error(t),createErrorNotice(t),updateFormState("REJECT")}},trackOrderBump=t=>{var e,o,a;(null===(e=state.checkout)||void 0===e?void 0:e.id)&&apiFetch({path:addQueryArgs(`surecart/v1/checkouts/${state.checkout.id}/offer_bump/${t}`,{t:Date.now(),...!!(null===(a=null===(o=null==state?void 0:state.checkout)||void 0===o?void 0:o.invoice)||void 0===a?void 0:a.id)&&{type:"open_invoice"}}),method:"POST",keepalive:!0})};window.sc={...(null===window||void 0===window?void 0:window.sc)||{},checkout:{...(null===(_a=null===window||void 0===window?void 0:window.sc)||void 0===_a?void 0:_a.checkout)||{},addLineItem:addCheckoutLineItem}};export{addCheckoutLineItem as a,unLockCheckout as b,clearCheckout as c,lockCheckout as l,removeCheckoutLineItem as r,trackOrderBump as t,updateCheckoutLineItem as u};