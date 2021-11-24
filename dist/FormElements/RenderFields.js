"use strict";function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireWildcard(require("react")),_RenderField=_interopRequireDefault(require("./RenderField"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return _getRequireWildcardCache=function(){return a},a}function _interopRequireWildcard(a){if(a&&a.__esModule)return a;if(null===a||"object"!==_typeof(a)&&"function"!=typeof a)return{default:a};var b=_getRequireWildcardCache();if(b&&b.has(a))return b.get(a);var c={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e)){var f=d?Object.getOwnPropertyDescriptor(a,e):null;f&&(f.get||f.set)?Object.defineProperty(c,e,f):c[e]=a[e]}return c["default"]=a,b&&b.set(a,c),c}function _slicedToArray(a,b){return _arrayWithHoles(a)||_iterableToArrayLimit(a,b)||_unsupportedIterableToArray(a,b)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function _iterableToArrayLimit(a,b){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}}function _arrayWithHoles(a){if(Array.isArray(a))return a}var divideFieldsIntoPages=function(a,b){for(var c,d=b.map(function(){return[]}),e=0;e<a.length;e++)c=d[a[e].pageNumber],d[a[e].pageNumber-1]&&("page"===a[e].type?d[a[e].pageNumber-2].push(a[e]):d[a[e].pageNumber-1].push(a[e]));return d},getMaxFieldId=function(a){for(var b=0,c=0;c<a.length;c++)parseInt(a[c].id)>b&&(b=parseInt(a[c].id));return b+1},fieldTypes=["checkbox","email","hidden","html","number","phone","radio","select","multiselect","text","textarea","website","page","date","fileupload","consent","password","section","scustom","name","address","buckarooideal","postcode"],honeyPotLables=["Name","Email","Phone","Comments"],honeypotLabel=honeyPotLables[Math.floor(Math.random()*Math.floor(4))],_default=function(a){function b(a){return _react["default"].createElement(_RenderField["default"],{key:"".concat(a.formId,"-").concat(a.id),field:a,formValues:d,submitFailed:f,setTouched:i,setErrorMessages:j,submitSuccess:g,updateForm:e,touched:h,pages:k&&k.pages.length,prevStep:m,nextStep:n,isNextDisabled:o,checkConditionalLogic:p,saveStateToHtmlField:q,styledComponents:s,customComponents:t,error:!!(v&&v[a.id])&&v[a.id],unsetError:u,dropzoneText:w,language:y,apiKeys:z})}var c=a.fields,d=a.formValues,e=a.updateForm,f=a.submitFailed,g=a.submitSuccess,h=a.touched,i=a.setTouched,j=a.setErrorMessages,k=a.pagination,l=a.activePage,m=a.prevStep,n=a.nextStep,o=a.isNextDisabled,p=a.checkConditionalLogic,q=a.saveStateToHtmlField,r=a.enableHoneypot,s=a.styledComponents,t=a.customComponents,u=a.unsetError,v=a.errors,w=a.dropzoneText,x=a.pageClicked,y=a.language,z=a.apiKeys,A=k?divideFieldsIntoPages(c,k.pages):void 0,B=getMaxFieldId(c),C=(0,_react.useState)(""),D=_slicedToArray(C,2),E=D[0],F=D[1],G=(0,_react.useRef)();(0,_react.useEffect)(function(){G.current=l});var H=G.current;return _react["default"].createElement("div",{className:"form-fields".concat(k&&1<k.pages.length?" hasPages ".concat(x?"":" noPageClicked"):"")},k&&1<k.pages.length?k.pages.map(function(a,c){return _react["default"].createElement("div",{className:"page".concat(l===c+1?" active":"").concat(H&&c===H&&l!==c+1&&H!==l?" prevStep":""),key:"page-".concat(c)},a&&_react["default"].createElement("div",{className:"gf_step"},_react["default"].createElement("span",null,a)),A[c].map(function(a){return fieldTypes.includes(a.type)&&b(a)}))}):c.map(function(a){return fieldTypes.includes(a.type)&&b(a)}),r&&_react["default"].createElement("div",{className:"form-field gform_validation_container"},_react["default"].createElement("label",{htmlFor:"input_".concat(B),className:"gf-label "},honeypotLabel),_react["default"].createElement("input",{type:"text",name:"input_".concat(B),id:"input_".concat(B),value:E,onChange:function onChange(a){return F(a.target.value)},autoComplete:"off"})))};exports["default"]=_default;