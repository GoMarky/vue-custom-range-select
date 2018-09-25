module.exports=function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=0)}([function(module,__webpack_exports__,__webpack_require__){"use strict";function install(Vue,options){Vue.component(__WEBPACK_IMPORTED_MODULE_0__components_VueCustomRangeSelect_vue___default.a.name,_extends({},options,__WEBPACK_IMPORTED_MODULE_0__components_VueCustomRangeSelect_vue___default.a))}Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),__webpack_exports__.install=install;var __WEBPACK_IMPORTED_MODULE_0__components_VueCustomRangeSelect_vue__=__webpack_require__(1),__WEBPACK_IMPORTED_MODULE_0__components_VueCustomRangeSelect_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_VueCustomRangeSelect_vue__);__webpack_require__.d(__webpack_exports__,"VueCustomRangeSelect",function(){return __WEBPACK_IMPORTED_MODULE_0__components_VueCustomRangeSelect_vue___default.a});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},plugin={version:"0.1.10",install:install};__webpack_exports__.default=plugin;var GlobalVue=null;"undefined"!=typeof window?GlobalVue=window.Vue:"undefined"!=typeof global&&(GlobalVue=global.Vue),GlobalVue&&GlobalVue.use(plugin)},function(module,exports,__webpack_require__){__webpack_require__(2);var Component=__webpack_require__(3)(__webpack_require__(4),__webpack_require__(8),null,null);module.exports=Component.exports},function(module,exports){},function(module,exports){module.exports=function(rawScriptExports,compiledTemplate,scopeId,cssModules){var esModule,scriptExports=rawScriptExports=rawScriptExports||{},type=typeof rawScriptExports.default;"object"!==type&&"function"!==type||(esModule=rawScriptExports,scriptExports=rawScriptExports.default);var options="function"==typeof scriptExports?scriptExports.options:scriptExports;if(compiledTemplate&&(options.render=compiledTemplate.render,options.staticRenderFns=compiledTemplate.staticRenderFns),scopeId&&(options._scopeId=scopeId),cssModules){var computed=options.computed||(options.computed={});Object.keys(cssModules).forEach(function(key){var module=cssModules[key];computed[key]=function(){return module}})}return{esModule:esModule,exports:scriptExports,options:options}}},function(module,__webpack_exports__,__webpack_require__){"use strict";function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}return Array.from(arr)}Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var __WEBPACK_IMPORTED_MODULE_0__helpers__=__webpack_require__(5),__WEBPACK_IMPORTED_MODULE_1_body_scroll_lock__=__webpack_require__(6),__WEBPACK_IMPORTED_MODULE_2__directives_click_outside__=(__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_body_scroll_lock__),__webpack_require__(7));__webpack_exports__.default={name:"VueCustomRangeSelect",data:function(){return{selectID:"vue-custom-range-select-"+Object(__WEBPACK_IMPORTED_MODULE_0__helpers__.a)(5),currentValue:{label:"",value:""},searchValue:"",isOpen:!1,isSearching:!1,inFocus:!1,currentOptionIndex:0,isNavigateStart:!1,isMobile:window.innerWidth<=1024}},directives:{clickOutside:__WEBPACK_IMPORTED_MODULE_2__directives_click_outside__.a},methods:{setValue:function(val){this.currentValue=val,this.$emit("input",val.value),this.closeMenu()},toggleMenu:function(){this.isOpen?(this.isSearchable||this.fullScreenMobile&&this.isMobile&&Object(__WEBPACK_IMPORTED_MODULE_1_body_scroll_lock__.enableBodyScroll)(this.$refs.searchList),this.isNavigateStart=!1,this.currentValue=this.currentOption,this.$emit("input",this.currentValue.value)):this.isSearchable||this.fullScreenMobile&&this.isMobile&&Object(__WEBPACK_IMPORTED_MODULE_1_body_scroll_lock__.disableBodyScroll)(this.$refs.searchList),this.isOpen=!this.isOpen},openMenu:function(){this.inFocus&&(this.isOpen=!0)},closeMenu:function(){this.isOpen=!1,this.fullScreenMobile&&this.isMobile&&Object(__WEBPACK_IMPORTED_MODULE_1_body_scroll_lock__.enableBodyScroll)(this.$refs.searchList),this.isNavigateStart=!1},onSearchBlur:function(){this.inFocus=!1,this.isSearching||this.closeMenu()},onSearchFocus:function(){this.inFocus=!0},outsideClick:function(){this.closeMenu(),this.isSearchable||this.fullScreenMobile&&this.isMobile&&Object(__WEBPACK_IMPORTED_MODULE_1_body_scroll_lock__.enableBodyScroll)(this.$refs.searchList),this.isNavigateStart=!1},onEscape:function(){this.closeMenu(),this.isSearchable||this.fullScreenMobile&&this.isMobile&&Object(__WEBPACK_IMPORTED_MODULE_1_body_scroll_lock__.enableBodyScroll)(this.$refs.searchList)},stepUp:function(){this.isNavigateStart=!0,this.currentOptionIndex>0&&(this.currentOptionIndex-=1)},stepDown:function(){this.isNavigateStart=!0,this.currentOptionIndex<this.currentValues.length-1&&(this.currentOptionIndex+=1)}},watch:{currentValue:{handler:function(val){this.searchValue=val.label},deep:!0}},computed:{bindMaxHeight:function(){return this.isOpen&&this.isMobile&&this.fullScreenMobile},currentValues:function(){var _this=this,array=this.options;return array=array.map(function(it){return{value:it.value,label:it[_this.itemLabel]}}),this.deleteDouble&&(array=array.reduce(function(arr,item){return[].concat(_toConsumableArray(arr.filter(function(i){return i.value!==item.value})),[item])},[])),this.isSearchable&&(array=array.filter(function(it){return-1!==it.label.indexOf(_this.searchValue)})),array},isHavingValue:function(){return this.currentValue.label.length>0},currentOption:function(){return this.currentValues[this.currentOptionIndex]},currentIndex:function(){return this.valuesAsArray.indexOf(this.currentValue.value)},valuesAsArray:function(){return this.currentValues.map(function(it){return it.value})},dropDownListStyles:function(){return{width:this.width}},dropDownStyles:function(){return{width:this.width}}},props:{nativeMode:{type:Boolean,required:!1,default:!1},value:{type:[String,Object,Array],required:!1,default:null},options:{type:Array,required:!1,default:function(){return[]}},disabled:{type:Boolean,default:!1},deleteDouble:{type:Boolean,required:!1,default:!0},maxHeight:{type:String,default:"400px"},isSearchable:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},placeholder:{type:String,default:""},itemValue:{type:String,default:"value"},itemLabel:{type:String,default:"label"},dir:{type:String,default:"auto"},fullScreenMobile:{type:Boolean,required:!1,default:!0},width:{type:String,required:!1,default:null}}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return randomString});var randomString=function(length){for(var text="",possible="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=0;i<length;i++)text+=possible.charAt(Math.floor(Math.random()*possible.length));return text}},function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;!function(o,e){__WEBPACK_AMD_DEFINE_ARRAY__=[exports],__WEBPACK_AMD_DEFINE_FACTORY__=e,void 0!==(__WEBPACK_AMD_DEFINE_RESULT__="function"==typeof __WEBPACK_AMD_DEFINE_FACTORY__?__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__):__WEBPACK_AMD_DEFINE_FACTORY__)&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}(0,function(exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var n="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&/iPad|iPhone|iPod|(iPad Simulator)|(iPhone Simulator)|(iPod Simulator)/.test(window.navigator.platform),i=null,l=[],d=!1,u=-1,c=void 0,a=void 0,s=function(o){var e=o||window.event;return e.preventDefault&&e.preventDefault(),!1},o=function(){setTimeout(function(){void 0!==a&&(document.body.style.paddingRight=a,a=void 0),void 0!==c&&(document.body.style.overflow=c,c=void 0)})};exports.disableBodyScroll=function(r,o){var t;n?r&&!l.includes(r)&&(l=[].concat(function(o){if(Array.isArray(o)){for(var e=0,t=Array(o.length);e<o.length;e++)t[e]=o[e];return t}return Array.from(o)}(l),[r]),r.ontouchstart=function(o){1===o.targetTouches.length&&(u=o.targetTouches[0].clientY)},r.ontouchmove=function(o){var e,t,n,i;1===o.targetTouches.length&&(t=r,i=(e=o).targetTouches[0].clientY-u,t&&0===t.scrollTop&&0<i?s(e):(n=t)&&n.scrollHeight-n.scrollTop<=n.clientHeight&&i<0?s(e):e.stopPropagation())},d||(document.addEventListener("touchmove",s,{passive:!1}),d=!0)):(t=o,setTimeout(function(){if(void 0===a){var o=!!t&&!0===t.reserveScrollBarGap,e=window.innerWidth-document.documentElement.clientWidth;o&&0<e&&(a=document.body.style.paddingRight,document.body.style.paddingRight=e+"px")}void 0===c&&(c=document.body.style.overflow,document.body.style.overflow="hidden")}),i||(i=r))},exports.clearAllBodyScrollLocks=function(){n?(l.forEach(function(o){o.ontouchstart=null,o.ontouchmove=null}),d&&(document.removeEventListener("touchmove",s,{passive:!1}),d=!1),l=[],u=-1):(o(),i=null)},exports.enableBodyScroll=function(e){n?(e.ontouchstart=null,e.ontouchmove=null,l=l.filter(function(o){return o!==e}),d&&0===l.length&&(document.removeEventListener("touchmove",s,{passive:!1}),d=!1)):i===e&&(o(),i=null)}})},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a={id:"clickoutside",bind:function(el,props){el.clickCatcher=function(e){if(props.modifiers.hidden)return void(props.modifiers.hidden=!1);el.contains(e.target)||"function"!=typeof props.value||props.value(props.arg)},window.addEventListener("click",el.clickCatcher)},unbind:function(el){return window.removeEventListener("click",el.clickCatcher)}}},function(module,exports){module.exports={render:function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:_vm.outsideClick,expression:"outsideClick"}],staticClass:"vcr-select",style:_vm.dropDownStyles,attrs:{dir:_vm.dir,id:_vm.selectID}},[_c("div",{staticClass:"vcr-select__select-wrapper",class:{"vcr-select__select-wrapper_height_full":_vm.bindMaxHeight}},[_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.isOpen&&_vm.fullScreenMobile&&!_vm.isSearchable,expression:"isOpen && fullScreenMobile && !isSearchable"}],staticClass:"vcr-select__overlay"}),_c("div",{staticClass:"vcr-select__input-wrapper"},[_vm.isSearching?_c("span",{staticClass:"vcr-select__current-value"},[_vm._v(_vm._s(_vm.currentValue.label))]):_vm._e(),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.currentValue.label,expression:"currentValue.label"}],ref:"search",staticClass:"vcr-select__selected",attrs:{type:"text",tabindex:"1",placeholder:_vm.placeholder,disabled:_vm.disabled,readonly:!_vm.isSearchable},domProps:{value:_vm.currentValue.label},on:{keyup:[function($event){return"button"in $event||!_vm._k($event.keyCode,"esc",27,$event.key,"Escape")?_vm.onEscape($event):null},function($event){return"button"in $event||!_vm._k($event.keyCode,"enter",13,$event.key,"Enter")?_vm.toggleMenu($event):null}],focus:_vm.onSearchFocus,blur:_vm.onSearchBlur,click:_vm.toggleMenu,keydown:[function($event){return"button"in $event||!_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])?($event.preventDefault(),_vm.stepUp($event)):null},function($event){return"button"in $event||!_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])?($event.preventDefault(),_vm.stepDown($event)):null}],input:function($event){$event.target.composing||_vm.$set(_vm.currentValue,"label",$event.target.value)}}}),_c("svg",{staticClass:"vcr-select__toggle-icon",attrs:{id:"arrow",width:"12px",height:"6px",fill:"#bbbdc0",viewBox:"0 0 6 3"}},[_c("polygon",{attrs:{points:"0 0 3 3 6 0 0 0"}})])]),_c("ul",{directives:[{name:"show",rawName:"v-show",value:_vm.isOpen,expression:"isOpen"}],ref:"searchList",staticClass:"vcr-select__list",class:{"vcr-select__list_offset_top_medium":!_vm.isSearchable||_vm.fullScreenMobile},style:_vm.dropDownListStyles},[_vm._l(_vm.currentValues,function(item){return _c("li",{staticClass:"vcr-select__item"},[_c("button",{staticClass:"vcr-select__item-button",class:{"vcr-select__item-button_current":item.value===_vm.currentOption.value&&_vm.isNavigateStart},attrs:{type:"button"},on:{mousedown:function($event){$event.preventDefault(),_vm.setValue(item)}}},[_vm._v(_vm._s(item.label))])])}),_vm.currentValues.length?_vm._e():_c("li",{staticClass:"vcr-select__item"},[_c("span",{staticClass:"vcr-select__item-button vcr-select__item-button_no_pointer"},[_vm._v("No matched values found")])])],2)])])},staticRenderFns:[]}}]);