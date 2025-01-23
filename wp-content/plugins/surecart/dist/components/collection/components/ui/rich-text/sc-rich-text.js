import{h,Host}from"@stencil/core";import{Editor}from"@tiptap/core";import CharacterCount from"@tiptap/extension-character-count";import Placeholder from"@tiptap/extension-placeholder";import StarterKit from"@tiptap/starter-kit";import{__,sprintf}from"@wordpress/i18n";let id=0;export class ScRichText{constructor(){this.inputId="sc-richtext-"+ ++id,this.helpId=`sc-richtext-help-text-${id}`,this.labelId=`sc-richtext-label-${id}`,this.size="medium",this.name=void 0,this.value="",this.label="",this.showLabel=!0,this.help="",this.placeholder=void 0,this.maxlength=void 0,this.disabled=!1,this.readonly=!1,this.required=!1,this.updatedAt=Date.now(),this.hasFocus=void 0}componentDidLoad(){this.editor||(this.editor=new Editor({element:this.element,extensions:[StarterKit,Placeholder.configure({placeholder:this.placeholder}),...(null==this?void 0:this.maxlength)>0?[CharacterCount.configure({limit:this.maxlength,mode:"nodeSize"})]:[]],content:this.value,onCreate:({editor:e})=>{this.value=e.getHTML()},onUpdate:({editor:e})=>{this.value=e.getHTML(),this.scInput.emit(),this.scChange.emit()},onSelectionUpdate:()=>{this.updatedAt=Date.now()},onFocus:()=>{this.handleFocus()},onBlur:()=>{this.handleBlur()}}))}handleFocus(){this.hasFocus=!0,this.scFocus.emit()}handleBlur(){this.hasFocus=!1,this.scBlur.emit()}isActive(e,t={}){var i,l;return null===(l=null===(i=this.editor)||void 0===i?void 0:i.isActive)||void 0===l?void 0:l.call(i,e,t)}toggleHeading(e){this.editor.chain().toggleHeading(e).focus().run()}toggleBold(){this.editor.chain().toggleBold().focus().run()}toggleItalic(){this.editor.chain().toggleItalic().focus().run()}can(e){var t,i,l,a,o,s,r,d,c;return null===(c=null===(d=null===(r=null===(s=null===(o=null===(a=null===(l=null===(i=null===(t=this.editor)||void 0===t?void 0:t.can())||void 0===i?void 0:i.chain)||void 0===l?void 0:l.call(i))||void 0===a?void 0:a.focus)||void 0===o?void 0:o.call(a))||void 0===s?void 0:s[e])||void 0===r?void 0:r.call(s))||void 0===d?void 0:d.run)||void 0===c?void 0:c.call(d)}run(e){var t,i,l,a,o,s,r,d;return null===(d=null===(r=null===(s=null===(o=null===(a=null===(l=null===(i=null===(t=this.editor)||void 0===t?void 0:t.chain)||void 0===i?void 0:i.call(t))||void 0===l?void 0:l.focus)||void 0===a?void 0:a.call(l))||void 0===o?void 0:o[e])||void 0===s?void 0:s.call(o))||void 0===r?void 0:r.run)||void 0===d?void 0:d.call(r)}remainingCharacters(){var e,t;return this.maxlength?this.maxlength-((null===(t=null===(e=null==this?void 0:this.editor)||void 0===e?void 0:e.storage)||void 0===t?void 0:t.characterCount.characters())||0):1e3}handleKeyDown(e){"n"===e.key&&e.stopPropagation()}render(){var e,t,i,l,a,o,s,r;return h(Host,{key:"c38442cf221a7ba625ede10c595300298ff82a94"},h("sc-form-control",{key:"40bfeaf65e8e48df2ebbe4cde751f6c16128ed8f",exportparts:"label, help-text, form-control",size:this.size,required:this.required,label:this.label,showLabel:this.showLabel,help:this.help,inputId:this.inputId,helpId:this.helpId,labelId:this.labelId,name:this.name},h("div",{key:"256c471c9995d7774ef2928cc2cc387c1d23a49d",part:"base",class:{"editor-base":!0,"editor--focused":this.hasFocus}},h("div",{key:"45713f2450193fd25ad2f19486cef533843c5e9e",class:"menu"},h("sc-button",{key:"381ed716530c15e32f24ec287c332de9c2062f8f",size:"small",type:(null===(t=null===(e=this.editor)||void 0===e?void 0:e.isActive)||void 0===t?void 0:t.call(e,"bold"))?"default":"text",onClick:()=>this.run("toggleBold"),disabled:!this.can("toggleBold")},h("sc-icon",{key:"cb94b839cf0ea63f96aeee2b62d7e37e3ba3152e",name:"bold"})),h("sc-button",{key:"bef6888524567e7c0d83afb8f56111107bb5d2ae",size:"small",type:(null===(l=null===(i=this.editor)||void 0===i?void 0:i.isActive)||void 0===l?void 0:l.call(i,"italic"))?"default":"text",onClick:()=>this.run("toggleItalic"),disabled:!this.can("toggleItalic")},h("sc-icon",{key:"16c7622a9287e32c563ee7ff152c3cfb1f06d314",name:"italic"})),h("sc-button",{key:"5a07464a7138eafeff1c3739f6060f1446196d11",size:"small",type:(null===(o=null===(a=this.editor)||void 0===a?void 0:a.isActive)||void 0===o?void 0:o.call(a,"bulletList"))?"default":"text",onClick:()=>this.run("toggleBulletList")},h("sc-icon",{key:"c1e0b58365a870de812e86f5e96a58c0757c4a43",name:"list"})),h("sc-button",{key:"e347089ad5e93bf75366e5b182643ef8df0cdcd6",size:"small",type:(null===(r=null===(s=this.editor)||void 0===s?void 0:s.isActive)||void 0===r?void 0:r.call(s,"strike"))?"default":"text",onClick:()=>this.run("toggleStrike")},h("sc-icon",{key:"b497cd610daa97fb111a26fc5c9a1cc1949dd8ad",name:"minus"})),h("sc-button",{key:"3b234be6e543057932ceaa21801609b6bf820997",class:"right",size:"small",type:"text",onClick:()=>this.run("undo"),disabled:!this.can("undo")},h("sc-icon",{key:"72095b9ca54fe98dc91094c54fd70d14ef66fac8",name:"corner-up-left"})),h("sc-button",{key:"63ba4ad2f2b102eb1cc1fb02afb8143689cbfc75",size:"small",type:"text",onClick:()=>this.run("redo"),disabled:!this.can("redo")},h("sc-icon",{key:"c5882eb2add59ed91a7567cea56202a96fe9d044",name:"corner-up-right"}))),h("div",{key:"1d96180c36d76779507dacadae207a72bcbc71af",part:"editor",class:{editor:!0},ref:e=>this.element=e})),this.remainingCharacters()<20&&h("div",{key:"5661c34e02e999ebd17352ba8c382bc5be37ad3c",class:"textarea__char-limit-warning"},sprintf(__("%d characters remaining","surecart"),this.remainingCharacters()))))}static get is(){return"sc-rich-text"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-rich-text.scss"]}}static get styleUrls(){return{$:["sc-rich-text.css"]}}static get properties(){return{size:{type:"string",mutable:!1,complexType:{original:"'small' | 'medium' | 'large'",resolved:'"large" | "medium" | "small"',references:{}},required:!1,optional:!1,docs:{tags:[],text:"The textarea's size."},attribute:"size",reflect:!0,defaultValue:"'medium'"},name:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The textarea's name attribute."},attribute:"name",reflect:!1},value:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The textarea's value attribute."},attribute:"value",reflect:!1,defaultValue:"''"},label:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The textarea's label. Alternatively, you can use the label slot."},attribute:"label",reflect:!1,defaultValue:"''"},showLabel:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Should we show the label"},attribute:"show-label",reflect:!1,defaultValue:"true"},help:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The textarea's help text. Alternatively, you can use the help-text slot."},attribute:"help",reflect:!1,defaultValue:"''"},placeholder:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The textarea's placeholder text."},attribute:"placeholder",reflect:!1},maxlength:{type:"number",mutable:!1,complexType:{original:"number",resolved:"number",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The max length."},attribute:"maxlength",reflect:!1},disabled:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Disables the textarea."},attribute:"disabled",reflect:!0,defaultValue:"false"},readonly:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Makes the textarea readonly."},attribute:"readonly",reflect:!0,defaultValue:"false"},required:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Makes the textarea a required field."},attribute:"required",reflect:!0,defaultValue:"false"}}}static get states(){return{updatedAt:{},hasFocus:{}}}static get events(){return[{method:"scChange",name:"scChange",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:""},complexType:{original:"void",resolved:"void",references:{}}},{method:"scInput",name:"scInput",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:""},complexType:{original:"void",resolved:"void",references:{}}},{method:"scBlur",name:"scBlur",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:""},complexType:{original:"void",resolved:"void",references:{}}},{method:"scFocus",name:"scFocus",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:""},complexType:{original:"void",resolved:"void",references:{}}}]}static get listeners(){return[{name:"keydown",method:"handleKeyDown",target:void 0,capture:!1,passive:!1}]}}