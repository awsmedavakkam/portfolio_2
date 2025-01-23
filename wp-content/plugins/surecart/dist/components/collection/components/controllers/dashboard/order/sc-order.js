import{Fragment,h}from"@stencil/core";import{__}from"@wordpress/i18n";import{addQueryArgs}from"@wordpress/url";import apiFetch from"../../../../functions/fetch";import{onFirstVisible}from"../../../../functions/lazy";import{intervalString}from"../../../../functions/price";import{formatTaxDisplay}from"../../../../functions/tax";export class ScOrder{constructor(){this.orderId=void 0,this.customerIds=void 0,this.heading=void 0,this.order=void 0,this.purchases=void 0,this.loading=void 0,this.busy=void 0,this.error=void 0}componentDidLoad(){onFirstVisible(this.el,(()=>{this.fetchOrder(),this.fetchDownloads()}))}async fetchOrder(){try{this.loading=!0,await this.getOrder()}catch(e){console.error(this.error),this.error=(null==e?void 0:e.message)||__("Something went wrong","surecart")}finally{this.loading=!1}}async fetchDownloads(){try{this.busy=!0,this.purchases=await apiFetch({path:addQueryArgs("surecart/v1/purchases",{expand:["product","product.downloads","download.media"],order_ids:[this.orderId],customer_ids:this.customerIds,downloadable:!0})})}catch(e){console.error(this.error),this.error=(null==e?void 0:e.message)||__("Something went wrong","surecart")}finally{this.busy=!1}}async getOrder(){this.order=await apiFetch({path:addQueryArgs(`surecart/v1/orders/${this.orderId}`,{expand:["checkout","checkout.line_items","line_item.price","line_item.fees","line_item.variant","variant.image","price.product","checkout.manual_payment_method","checkout.payment_method","checkout.selected_shipping_choice","shipping_choice.shipping_method","payment_method.card","payment_method.payment_instrument","payment_method.paypal_account","payment_method.bank_account","checkout.discount","discount.promotion","checkout.charge"]})})}renderLoading(){return h("sc-flex",{flexDirection:"column",style:{gap:"1em"}},h("sc-skeleton",{style:{width:"20%",display:"inline-block"}}),h("sc-skeleton",{style:{width:"60%",display:"inline-block"}}),h("sc-skeleton",{style:{width:"40%",display:"inline-block"}}))}renderEmpty(){return h("sc-empty",{icon:"shopping-bag"},__("Order not found.","surecart"))}renderContent(){var e,t,r,n,i,o,l,s;if(this.loading)return this.renderLoading();if(!(null===(e=this.order)||void 0===e?void 0:e.id))return this.renderEmpty();const c=null===(t=this.order)||void 0===t?void 0:t.checkout,a=null===(r=null==c?void 0:c.selected_shipping_choice)||void 0===r?void 0:r.shipping_method,u=null==a?void 0:a.name;return h(Fragment,null,((null===(n=null==c?void 0:c.line_items)||void 0===n?void 0:n.data)||[]).map((e=>{var t,r,n,i,o,l,s;return h("sc-product-line-item",{key:e.id,image:null==e?void 0:e.image,name:null===(r=null===(t=null==e?void 0:e.price)||void 0===t?void 0:t.product)||void 0===r?void 0:r.name,priceName:null===(n=null==e?void 0:e.price)||void 0===n?void 0:n.name,variantLabel:((null==e?void 0:e.variant_options)||[]).filter(Boolean).join(" / ")||null,editable:!1,removable:!1,quantity:e.quantity,amount:e.subtotal_amount,currency:null===(i=null==e?void 0:e.price)||void 0===i?void 0:i.currency,trialDurationDays:null===(o=null==e?void 0:e.price)||void 0===o?void 0:o.trial_duration_days,interval:intervalString(null==e?void 0:e.price),scratchAmount:null==e?void 0:e.scratch_amount,setupFeeTrialEnabled:null===(l=null==e?void 0:e.price)||void 0===l?void 0:l.setup_fee_trial_enabled,fees:null===(s=null==e?void 0:e.fees)||void 0===s?void 0:s.data})})),(null==c?void 0:c.subtotal_amount)!==(null==c?void 0:c.total_amount)&&h("sc-line-item",null,h("span",{slot:"description"},__("Subtotal","surecart")),h("sc-format-number",{slot:"price",style:{"font-weight":"var(--sc-font-weight-semibold)",color:"var(--sc-color-gray-800)"},type:"currency",currency:null==c?void 0:c.currency,value:null==c?void 0:c.subtotal_amount})),!!(null==c?void 0:c.trial_amount)&&h("sc-line-item",null,h("span",{slot:"description"},__("Trial","surecart")),h("sc-format-number",{slot:"price",style:{"font-weight":"var(--sc-font-weight-semibold)",color:"var(--sc-color-gray-800)"},type:"currency",currency:null==c?void 0:c.currency,value:null==c?void 0:c.trial_amount})),!!(null==c?void 0:c.discounts)&&h("sc-line-item",null,h("span",{slot:"description"},__("Discount","surecart")),h("sc-format-number",{slot:"price",style:{"font-weight":"var(--sc-font-weight-semibold)",color:"var(--sc-color-gray-800)"},type:"currency",currency:null==c?void 0:c.currency,value:null==c?void 0:c.discounts})),!!(null===(o=null===(i=null==c?void 0:c.discount)||void 0===i?void 0:i.promotion)||void 0===o?void 0:o.code)&&h("sc-line-item",null,h("span",{slot:"description"},__("Discount","surecart"),h("br",null),h("sc-tag",{type:"success"},__("Coupon:","surecart")," ",null===(s=null===(l=null==c?void 0:c.discount)||void 0===l?void 0:l.promotion)||void 0===s?void 0:s.code)),h("sc-format-number",{slot:"price",style:{"font-weight":"var(--sc-font-weight-semibold)",color:"var(--sc-color-gray-800)"},type:"currency",currency:null==c?void 0:c.currency,value:null==c?void 0:c.discount_amount})),!!(null==c?void 0:c.shipping_amount)&&h("sc-line-item",null,h("span",{slot:"description"},`${__("Shipping","surecart")} ${u?`(${u})`:""}`),h("sc-format-number",{slot:"price",style:{"font-weight":"var(--sc-font-weight-semibold)",color:"var(--sc-color-gray-800)"},type:"currency",currency:null==c?void 0:c.currency,value:null==c?void 0:c.shipping_amount})),!!(null==c?void 0:c.tax_amount)&&h("sc-line-item",null,h("span",{slot:"description"},`${formatTaxDisplay(null==c?void 0:c.tax_label,"estimated"===(null==c?void 0:c.tax_status))} (${null==c?void 0:c.tax_percent}%)`),h("sc-format-number",{slot:"price",style:{"font-weight":"var(--sc-font-weight-semibold)",color:"var(--sc-color-gray-800)"},type:"currency",currency:null==c?void 0:c.currency,value:null==c?void 0:c.tax_amount}),!!(null==c?void 0:c.tax_inclusive_amount)&&h("span",{slot:"price-description"},`(${__("included","surecart")})`)),h("sc-divider",{style:{"--spacing":"var(--sc-spacing-x-small)"}}),h("sc-line-item",{style:{width:"100%","--price-size":"var(--sc-font-size-x-large)"}},h("span",{slot:"title"},__("Total","surecart")),h("span",{slot:"price"},h("sc-format-number",{type:"currency",currency:null==c?void 0:c.currency,value:null==c?void 0:c.total_amount})),h("span",{slot:"currency"},null==c?void 0:c.currency)),!!(null==c?void 0:c.proration_amount)&&h("sc-line-item",null,h("span",{slot:"description"},__("Proration","surecart")),h("sc-format-number",{slot:"price",style:{"font-weight":"var(--sc-font-weight-semibold)",color:"var(--sc-color-gray-800)"},type:"currency",currency:null==c?void 0:c.currency,value:null==c?void 0:c.proration_amount})),!!(null==c?void 0:c.applied_balance_amount)&&h("sc-line-item",null,h("span",{slot:"description"},__("Applied Balance","surecart")),h("sc-format-number",{slot:"price",style:{"font-weight":"var(--sc-font-weight-semibold)",color:"var(--sc-color-gray-800)"},type:"currency",currency:null==c?void 0:c.currency,value:null==c?void 0:c.applied_balance_amount})),!!(null==c?void 0:c.credited_balance_amount)&&h("sc-line-item",null,h("span",{slot:"description"},__("Credited Balance","surecart")),h("sc-format-number",{slot:"price",style:{"font-weight":"var(--sc-font-weight-semibold)",color:"var(--sc-color-gray-800)"},type:"currency",currency:null==c?void 0:c.currency,value:null==c?void 0:c.credited_balance_amount})),(null==c?void 0:c.amount_due)!==(null==c?void 0:c.total_amount)&&h("sc-line-item",{style:{width:"100%","--price-size":"var(--sc-font-size-x-large)"}},h("span",{slot:"title"},__("Amount Due","surecart")),h("span",{slot:"price"},h("sc-format-number",{type:"currency",currency:null==c?void 0:c.currency,value:null==c?void 0:c.amount_due})),h("span",{slot:"currency"},null==c?void 0:c.currency)),h("sc-divider",{style:{"--spacing":"var(--sc-spacing-x-small)"}}),!!(null==c?void 0:c.paid_amount)&&h("sc-line-item",{style:{width:"100%","--price-size":"var(--sc-font-size-x-large)"}},h("span",{slot:"title"},__("Paid","surecart")),h("span",{slot:"price"},h("sc-format-number",{type:"currency",currency:null==c?void 0:c.currency,value:null==c?void 0:c.paid_amount})),h("span",{slot:"currency"},null==c?void 0:c.currency)),!!(null==c?void 0:c.refunded_amount)&&h(Fragment,null,h("sc-line-item",{style:{width:"100%","--price-size":"var(--sc-font-size-x-large)"}},h("span",{slot:"description"},__("Refunded","surecart")),h("span",{slot:"price"},h("sc-format-number",{type:"currency",currency:null==c?void 0:c.currency,value:null==c?void 0:c.refunded_amount}))),h("sc-line-item",{style:{width:"100%","--price-size":"var(--sc-font-size-x-large)"}},h("span",{slot:"title"},__("Net Payment","surecart")),h("span",{slot:"price"},h("sc-format-number",{type:"currency",currency:null==c?void 0:c.currency,value:null==c?void 0:c.net_paid_amount})))),(null==c?void 0:c.tax_reverse_charged_amount)>0&&h("sc-line-item",null,h("span",{slot:"description"},__("*Tax to be paid on reverse charge basis","surecart"))))}render(){var e,t,r,n,i,o,l;const s=null===(e=null==this?void 0:this.order)||void 0===e?void 0:e.checkout,c=null==s?void 0:s.manual_payment_method;return h("sc-spacing",{key:"f3660e2859ee4255f711e2067fe381fde4d46f92",style:{"--spacing":"var(--sc-spacing-large)"}},h("sc-dashboard-module",{key:"2a1c65ecb98b754ff9a9bb90978061afa56bab2f",error:this.error},h("span",{key:"b1e45072c9449404f79c76ee8b20a49ebe32aaba",slot:"heading"},this.loading?h("sc-skeleton",{style:{width:"120px"}}):`#${null===(t=null==this?void 0:this.order)||void 0===t?void 0:t.number}`),!this.loading&&!(null==s?void 0:s.live_mode)&&h("sc-tag",{key:"1fb3235865a5c427e6470552593183fc195fbeab",type:"warning",slot:"end"},__("Test Mode","surecart")),!!(null==c?void 0:c.name)&&!!(null==c?void 0:c.instructions)&&h("sc-order-manual-instructions",{key:"75384249f7b9dd0349f8dbeabd81f1501d636c7a",manualPaymentTitle:null==c?void 0:c.name,manualPaymentInstructions:null==c?void 0:c.instructions}),h("sc-card",{key:"017c15b6dcc12ca755843eb75f086fed988a09de","no-padding":!this.loading},this.loading?this.renderLoading():h(Fragment,null,h("sc-stacked-list",null,h("sc-stacked-list-row",{style:{"--columns":"2"}},h("div",null,__("Order Status","surecart")),h("sc-order-status-badge",{status:null===(r=null==this?void 0:this.order)||void 0===r?void 0:r.status})),h("sc-stacked-list-row",{style:{"--columns":"2"}},h("div",null,__("Date","surecart")),h("span",null,null===(n=this.order)||void 0===n?void 0:n.created_at_date)),h("sc-stacked-list-row",{style:{"--columns":"2"}},h("div",null,__("Payment Method","surecart")),h("sc-payment-method",{paymentMethod:null==s?void 0:s.payment_method})),h("div",{class:"order__row"},this.renderContent()))))),(null===(i=this.order)||void 0===i?void 0:i.statement_url)&&h("sc-button",{key:"8d1ac3bf1ce4a45fcbb42e72c79ccdd3e9b6cb7c",type:"primary",href:null===(o=this.order)||void 0===o?void 0:o.statement_url,target:"_blank"},h("sc-icon",{key:"52ad0045ef01787c2bc5b8b53792ebf913e71b7d",name:"inbox",slot:"prefix"}),__("Download Receipt/Invoice","surecart")),!!(null===(l=this.purchases)||void 0===l?void 0:l.length)&&h("sc-purchase-downloads-list",{key:"2d3b0bfde0417ca434f22bd2c4136877203c0742",heading:__("Downloads","surecart"),purchases:this.purchases}))}static get is(){return"sc-order"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-order.scss"]}}static get styleUrls(){return{$:["sc-order.css"]}}static get properties(){return{orderId:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"order-id",reflect:!1},customerIds:{type:"unknown",mutable:!1,complexType:{original:"string[]",resolved:"string[]",references:{}},required:!1,optional:!1,docs:{tags:[],text:""}},heading:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"heading",reflect:!1}}}static get states(){return{order:{},purchases:{},loading:{},busy:{},error:{}}}static get elementRef(){return"el"}}