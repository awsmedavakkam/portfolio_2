import{r as s,c as e,h as i,F as t,a as c}from"./p-e97fde0a.js";import{g as o}from"./p-28d98d61.js";import{s as r}from"./p-f3141d53.js";import"./p-03631502.js";import"./p-9dbc54d6.js";import"./p-d3366af3.js";import"./p-401e165e.js";import"./p-830ab1a3.js";import"./p-ec182234.js";import"./p-3f6362a4.js";import"./p-95325ec5.js";import"./p-6ec14893.js";const d="sc-price-choices{display:block;position:relative}sc-block-ui{z-index:9}";const p=d;const a=class{constructor(i){s(this,i);this.scRemoveLineItem=e(this,"scRemoveLineItem",7);this.scUpdateLineItem=e(this,"scUpdateLineItem",7);this.label=undefined;this.columns=1;this.required=true}handleChange(){this.el.querySelectorAll("sc-price-choice").forEach((s=>{var e;const i=s.querySelector("sc-choice")||s.querySelector("sc-choice-container");if(!(i===null||i===void 0?void 0:i.checked)){this.scRemoveLineItem.emit({price_id:s.priceId,quantity:s.quantity})}else{const t=o((e=r.checkout)===null||e===void 0?void 0:e.line_items,i.value);this.scUpdateLineItem.emit({price_id:s.priceId,quantity:(t===null||t===void 0?void 0:t.quantity)||(s===null||s===void 0?void 0:s.quantity)||1})}}))}render(){return i(t,{key:"e70d6ebfce58c91e8150b536e395b21da02229e9"},i("sc-choices",{key:"0341d15d7b9f01bd49570f777bd411de318fa752",label:this.label,required:this.required,class:"loaded price-selector",style:{"--columns":this.columns.toString()}},i("slot",{key:"9b74bb26fd5629592d460b36a847074eec60df5c"})))}get el(){return c(this)}};a.style=p;export{a as sc_price_choices};
//# sourceMappingURL=p-94d1c9dd.entry.js.map