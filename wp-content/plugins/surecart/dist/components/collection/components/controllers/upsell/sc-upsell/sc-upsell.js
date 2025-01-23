import{Host,h}from"@stencil/core";import{state}from"../../../../store/upsell/index";import{isBusy}from"../../../../store/upsell/getters";import{preview,trackOffer}from"../../../../store/upsell/mutations";import{__}from"@wordpress/i18n";export class ScUpsell{componentWillLoad(){trackOffer(),preview()}render(){var e,s,t,a,c,o,d,i,l;const n=null===(e=state.checkout)||void 0===e?void 0:e.manual_payment_method;return h(Host,{key:"e0bd7fae3712d03728032918e6181057d4d3d1b0"},h("slot",{key:"5b2e3a3418ec43ee9d6eaaf81ed5e7769f1ab3ea"}),isBusy()&&h("sc-block-ui",{key:"55eabf65db2d383f824e809c92eb510041b69ab9",style:{"z-index":"30","--sc-block-ui-position":"fixed"}}),h("sc-dialog",{key:"e67185f02d31cd37f8846b2f6ed2719b1f34ce4d",open:"complete"===state.loading,style:{"--body-spacing":"var(--sc-spacing-xxx-large)"},noHeader:!0,onScRequestClose:e=>e.preventDefault()},h("div",{key:"923a7b386af088712fc46ae7edab8bc36d95214d",class:"confirm__icon"},h("div",{key:"77e7db08c7ca8e9d014afa1e63faeaab3588c295",class:"confirm__icon-container"},h("sc-icon",{key:"cda8b7a13bae75bbbdd3d15d8d4cffbfc9ca1a42",name:"check"}))),h("sc-dashboard-module",{key:"84e9fc75822805427a0defb80b2cc21c9230591d",heading:(null===(t=null===(s=null==state?void 0:state.text)||void 0===s?void 0:s.success)||void 0===t?void 0:t.title)||__("Thank you!","surecart"),style:{"--sc-dashboard-module-spacing":"var(--sc-spacing-x-large)",textAlign:"center"}},h("span",{key:"521bad972d87e95191a2b2ccf5d4fa87aadbf6a2",slot:"description"},(null===(c=null===(a=null==state?void 0:state.text)||void 0===a?void 0:a.success)||void 0===c?void 0:c.description)||__("Your purchase was successful. A receipt is on its way to your inbox.","surecart")),!!(null==n?void 0:n.name)&&!!(null==n?void 0:n.instructions)&&h("sc-alert",{key:"ac3e953b0d02566e8ef99fe9eb223247e813f08f",type:"info",open:!0,style:{"text-align":"left"}},h("span",{key:"22f5bd4fe83fb3aa7fd5f1846cad7134f629793a",slot:"title"},null==n?void 0:n.name),h("div",{key:"4ac526b8a096d8634f4c132dd310dd94be38c2ba",innerHTML:null==n?void 0:n.instructions})),h("sc-button",{key:"285c4c49700ac269cccc3e025537219293d5ce61",href:null===(d=null===(o=null===window||void 0===window?void 0:window.scData)||void 0===o?void 0:o.pages)||void 0===d?void 0:d.dashboard,size:"large",type:"primary",autofocus:!0},(null===(l=null===(i=null==state?void 0:state.text)||void 0===i?void 0:i.success)||void 0===l?void 0:l.button)||__("Continue","surecart"),h("sc-icon",{key:"79d3d417f5e1c3aeec68461e29a918b18907a988",name:"arrow-right",slot:"suffix"})))))}static get is(){return"sc-upsell"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-upsell.scss"]}}static get styleUrls(){return{$:["sc-upsell.css"]}}}