import{r as t,h as s,H as i,a as o}from"./p-e97fde0a.js";import"./p-acf63e23.js";import{s as l}from"./p-86fd1a31.js";import{s as n}from"./p-1f60f497.js";import{i as a,c as e}from"./p-863940e9.js";import{a as u}from"./p-0df04773.js";import{c as p}from"./p-6e785215.js";import"./p-401e165e.js";import"./p-9dbc54d6.js";import"./p-03631502.js";import"./p-830ab1a3.js";import"./p-13f5e4e1.js";import"./p-3f6362a4.js";import"./p-ec182234.js";import"./p-93127aa7.js";import"./p-6135d661.js";import"./p-d3366af3.js";const b="sc-upsell-submit-button{position:relative;display:block}sc-upsell-submit-button .wp-block-button__link{position:relative;text-decoration:none}sc-upsell-submit-button .wp-block-button__link span sc-icon{padding-right:var(--sc-spacing-small)}sc-upsell-submit-button .wp-block-button__link [data-text],sc-upsell-submit-button .wp-block-button__link sc-spinner{display:flex;align-items:center;justify-content:center}sc-upsell-submit-button .sc-block-button--sold-out,sc-upsell-submit-button .sc-block-button--unavailable{display:none !important}sc-upsell-submit-button.is-unavailable .sc-block-button__link{display:none !important}sc-upsell-submit-button.is-unavailable .sc-block-button--unavailable{display:initial !important}sc-upsell-submit-button.is-sold-out .sc-block-button__link{display:none !important}sc-upsell-submit-button.is-sold-out .sc-block-button--sold-out{display:initial !important}sc-upsell-submit-button sc-spinner::part(base){--indicator-color:currentColor;--spinner-size:12px;position:absolute;top:calc(50% - var(--spinner-size) + var(--spinner-size) / 4);left:calc(50% - var(--spinner-size) + var(--spinner-size) / 4)}sc-upsell-submit-button [data-text],sc-upsell-submit-button [data-loader]{transition:opacity var(--sc-transition-fast) ease-in-out, visibility var(--sc-transition-fast) ease-in-out}sc-upsell-submit-button [data-loader]{opacity:0;visibility:hidden}sc-upsell-submit-button.is-disabled{pointer-events:none}sc-upsell-submit-button.is-busy [data-text]{opacity:0;visibility:hidden}sc-upsell-submit-button.is-busy [data-loader]{opacity:1;visibility:visible}sc-upsell-submit-button.is-out-of-stock [data-text]{opacity:0.6}";const c=b;const r=class{constructor(s){t(this,s)}getUpsellProductId(){var t;return((t=l.product)===null||t===void 0?void 0:t.id)||""}async handleAddToOrderClick(t){t.preventDefault();u()}render(){return s(i,{key:"0cf139dcf3983df26a9147496b8900669e213a3f",class:{"is-busy":p(),"is-disabled":l.disabled,"is-sold-out":a(this.getUpsellProductId())&&!e(this.getUpsellProductId())||(n===null||n===void 0?void 0:n.code)==="out_of_stock","is-unavailable":e(this.getUpsellProductId())||(n===null||n===void 0?void 0:n.code)==="expired"},onClick:t=>this.handleAddToOrderClick(t)},s("slot",{key:"430d13b9b60794b31a85ce7bce63426c33496d28"}))}get el(){return o(this)}};r.style=c;export{r as sc_upsell_submit_button};
//# sourceMappingURL=p-9c18e0f0.entry.js.map