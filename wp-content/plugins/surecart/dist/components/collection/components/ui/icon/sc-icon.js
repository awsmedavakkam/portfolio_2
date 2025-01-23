import{h}from"@stencil/core";import{getIconLibrary}from"./library";import{requestIcon}from"./request";import{__}from"@wordpress/i18n";const LABEL_MAPPINGS={"chevron-down":__("Open","surecart"),"chevron-up":__("Close","surecart"),"chevron-right":__("Next","surecart"),"chevron-left":__("Previous","surecart"),"arrow-right":__("Next","surecart"),"arrow-left":__("Previous","surecart"),"arrow-down":__("Down","surecart"),"arrow-up":__("Up","surecart"),"alert-circle":__("Alert","surecart")},parser=new DOMParser;export class ScIcon{constructor(){this.svg="",this.name=void 0,this.src=void 0,this.label=void 0,this.library="default"}redraw(){this.setIcon()}componentWillLoad(){this.setIcon()}getLabel(){let e="";return this.label?e=(null==LABEL_MAPPINGS?void 0:LABEL_MAPPINGS[this.label])||this.label:this.name?e=((null==LABEL_MAPPINGS?void 0:LABEL_MAPPINGS[this.name])||this.name).replace(/-/g," "):this.src&&(e=this.src.replace(/.*\//,"").replace(/-/g," ").replace(/\.svg/i,"")),e}async setIcon(){const e=getIconLibrary(this.library),t=this.getUrl();if(t)try{const r=await requestIcon(t);if(t!==this.getUrl())return;if(r.ok){const t=parser.parseFromString(r.svg,"text/html").body.querySelector("svg");t?(e&&e.mutator&&e.mutator(t),this.svg=t.outerHTML,this.scLoad.emit()):(this.svg="",console.error({status:null==r?void 0:r.status}))}else this.svg="",console.error({status:null==r?void 0:r.status})}catch{console.error({status:-1})}else this.svg&&(this.svg="")}getUrl(){const e=getIconLibrary(this.library);return this.name&&e?e.resolver(this.name):this.src}render(){return h("div",{key:"1cdf44609a49cf5f321f6cbc9351d39c0e7ea2d0",part:"base",class:"icon",role:"img","aria-label":this.getLabel(),innerHTML:this.svg})}static get is(){return"sc-icon"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-icon.css"]}}static get styleUrls(){return{$:["sc-icon.css"]}}static get assetsDirs(){return["icon-assets"]}static get properties(){return{name:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The name of the icon to draw."},attribute:"name",reflect:!0},src:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"An external URL of an SVG file."},attribute:"src",reflect:!1},label:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"An alternative description to use for accessibility. If omitted, the name or src will be used to generate it."},attribute:"label",reflect:!1},library:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The name of a registered custom icon library."},attribute:"library",reflect:!1,defaultValue:"'default'"}}}static get states(){return{svg:{}}}static get events(){return[{method:"scLoad",name:"scLoad",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:"Emitted when the icon has loaded."},complexType:{original:"void",resolved:"void",references:{}}}]}static get watchers(){return[{propName:"name",methodName:"setIcon"},{propName:"src",methodName:"setIcon"},{propName:"library",methodName:"setIcon"}]}}