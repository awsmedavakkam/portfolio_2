import{proxyCustomElement,HTMLElement,createEvent,h}from"@stencil/core/internal/client";import{a as apiFetch}from"./fetch.js";import{d as defineCustomElement$d}from"./sc-alert2.js";import{d as defineCustomElement$c}from"./sc-button2.js";import{d as defineCustomElement$b}from"./sc-choice2.js";import{d as defineCustomElement$a}from"./sc-choices2.js";import{d as defineCustomElement$9}from"./sc-dashboard-module2.js";import{d as defineCustomElement$8}from"./sc-flex2.js";import{d as defineCustomElement$7}from"./sc-form2.js";import{d as defineCustomElement$6}from"./sc-form-control2.js";import{d as defineCustomElement$5}from"./sc-icon2.js";import{d as defineCustomElement$4}from"./sc-skeleton2.js";import{d as defineCustomElement$3}from"./sc-spinner2.js";import{d as defineCustomElement$2}from"./sc-textarea2.js";import{d as defineCustomElement$1}from"./sc-visually-hidden2.js";const scCancelSurveyCss=".cancel-survey{color:var(--sc-color-gray-900)}.cancel-survey__abort-link{color:var(--sc-color-gray-500)}",ScCancelSurveyStyle0=scCancelSurveyCss,ScCancelSurvey=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.scAbandon=createEvent(this,"scAbandon",7),this.scSubmitReason=createEvent(this,"scSubmitReason",7),this.protocol=void 0,this.reasons=void 0,this.loading=void 0,this.selectedReason=void 0,this.comment=void 0,this.error=void 0}componentWillLoad(){this.reasons||this.fetchReasons()}handleSelectedReasonChange(){var e;(null===(e=this.selectedReason)||void 0===e?void 0:e.comment_enabled)&&setTimeout((()=>{this.textArea.triggerFocus()}),50)}async fetchReasons(){try{this.loading=!0,this.reasons=await apiFetch({path:"surecart/v1/cancellation_reasons"})}catch(e){console.error(e),this.error=e}finally{this.loading=!1}}async handleSubmit(e){e.preventDefault(),e.stopImmediatePropagation();try{this.scSubmitReason.emit({reason:this.selectedReason,comment:this.comment})}catch(e){console.error(e),this.error=e}}renderReasons(){return this.loading?h("sc-choice",null,h("sc-skeleton",null)):(this.reasons||[]).map((e=>h("sc-choice",{value:null==e?void 0:e.id,name:"reason",onScChange:s=>{s.target.checked&&(this.selectedReason=e)}},null==e?void 0:e.label)))}render(){var e,s,t;const{reasons_title:o,reasons_description:n,skip_link:c}=(null===(e=this.protocol)||void 0===e?void 0:e.preservation_locales)||{};return this.loading?h("sc-skeleton",null):h("div",{class:"cancel-survey"},h("sc-dashboard-module",{heading:o,style:{"--sc-dashboard-module-spacing":"2em"}},h("span",{slot:"description"},n),h("sc-form",{onScSubmit:e=>this.handleSubmit(e),style:{"--sc-form-row-spacing":"2em"}},h("sc-choices",{showLabel:!1,label:wp.i18n.__("Choose a reason","surecart"),style:{"--columns":"2"},required:!0},this.renderReasons()),(null===(s=this.selectedReason)||void 0===s?void 0:s.comment_enabled)&&h("sc-textarea",{label:(null===(t=this.selectedReason)||void 0===t?void 0:t.comment_prompt)||wp.i18n.__("Additional Comments","surecart"),required:!0,ref:e=>this.textArea=e,onScInput:e=>this.comment=e.target.value}),h("sc-flex",{justifyContent:"flex-start"},h("sc-button",{type:"primary",submit:!0},wp.i18n.__("Continue","surecart"),h("sc-icon",{name:"arrow-right",slot:"suffix"})),!!c&&h("sc-button",{class:"cancel-survey__abort-link",type:"text",onClick:()=>this.scAbandon.emit()},c)))))}static get watchers(){return{selectedReason:["handleSelectedReasonChange"]}}static get style(){return ScCancelSurveyStyle0}},[1,"sc-cancel-survey",{protocol:[16],reasons:[1040],loading:[32],selectedReason:[32],comment:[32],error:[32]},void 0,{selectedReason:["handleSelectedReasonChange"]}]);function defineCustomElement(){"undefined"!=typeof customElements&&["sc-cancel-survey","sc-alert","sc-button","sc-choice","sc-choices","sc-dashboard-module","sc-flex","sc-form","sc-form-control","sc-icon","sc-skeleton","sc-spinner","sc-textarea","sc-visually-hidden"].forEach((e=>{switch(e){case"sc-cancel-survey":customElements.get(e)||customElements.define(e,ScCancelSurvey);break;case"sc-alert":customElements.get(e)||defineCustomElement$d();break;case"sc-button":customElements.get(e)||defineCustomElement$c();break;case"sc-choice":customElements.get(e)||defineCustomElement$b();break;case"sc-choices":customElements.get(e)||defineCustomElement$a();break;case"sc-dashboard-module":customElements.get(e)||defineCustomElement$9();break;case"sc-flex":customElements.get(e)||defineCustomElement$8();break;case"sc-form":customElements.get(e)||defineCustomElement$7();break;case"sc-form-control":customElements.get(e)||defineCustomElement$6();break;case"sc-icon":customElements.get(e)||defineCustomElement$5();break;case"sc-skeleton":customElements.get(e)||defineCustomElement$4();break;case"sc-spinner":customElements.get(e)||defineCustomElement$3();break;case"sc-textarea":customElements.get(e)||defineCustomElement$2();break;case"sc-visually-hidden":customElements.get(e)||defineCustomElement$1()}}))}export{ScCancelSurvey as S,defineCustomElement as d};