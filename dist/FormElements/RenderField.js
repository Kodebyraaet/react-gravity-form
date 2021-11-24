"use strict";function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireWildcard(require("react")),FormFields=_interopRequireWildcard(require("../Fields"));function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!==_typeof(a)&&"function"!=typeof a)return{default:a};var c=_getRequireWildcardCache(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!=f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d["default"]=a,c&&c.set(a,d),d}function _slicedToArray(a,b){return _arrayWithHoles(a)||_iterableToArrayLimit(a,b)||_unsupportedIterableToArray(a,b)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function _iterableToArrayLimit(a,b){var c=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=c){var d,e,f=[],g=!0,h=!1;try{for(c=c.call(a);!(g=(d=c.next()).done)&&(f.push(d.value),!(b&&f.length===b));g=!0);}catch(a){h=!0,e=a}finally{try{g||null==c["return"]||c["return"]()}finally{if(h)throw e}}return f}}function _arrayWithHoles(a){if(Array.isArray(a))return a}var frac2dec=function(a){var b=a.split("-");if(1===b.length&&(b=a.split(" ")),1<b.length&&-1!==a.indexOf("/")){var c=parseInt(b[0]),d=b[1].split("/"),e=parseInt(d[0])/parseInt(d[1]);return c+e}if(-1!==a.indexOf("/")){var f=a.split("/"),g=parseInt(f[0])/parseInt(f[1]);return g}return parseInt(a)},formatComponentName=function(a){var b=a.replace("_","");return b.charAt(0).toUpperCase()+b.slice(1)},formatWidthFromCss=function(a){if(!a)return{};var b=a.indexOf("["),c=a.indexOf("]");if(-1===b||-1===c)return{};var d=a.substring(b+1,c).split(",").map(function(a){return frac2dec(a.replace(/\s/g,""))}),e="".concat(a.replace(a.substring(b,c+1),"")," custom-width");return{width:d,cleanedCssClass:e}},RenderField=function(a){var b=a.field,c=a.formValues,d=a.submitFailed,e=a.submitSuccess,f=a.setTouched,g=a.setErrorMessages,h=a.touched,i=a.updateForm,j=a.pages,k=a.prevStep,l=a.nextStep,m=a.isNextDisabled,n=a.saveStateToHtmlField,o=a.styledComponents,p=a.customComponents,q=a.error,r=a.unsetError,s=a.dropzoneText,t=a.language,u=a.apiKeys,v=FormFields[formatComponentName(b.type)];p&&(p[b.id]||p[b.cssClass])&&(v=FormFields[formatComponentName("custom")]);var w=formatWidthFromCss(b.cssClass),x=w.cleanedCssClass,y=w.width;y&&(b.cssClass=x,b.width=y);var z=c[b.id]?c[b.id].value:b.defaultValue,A=(0,_react.useState)("".concat(b.cssClass).concat("select"===b.type?z.value&&""!==z.value?" filled":"":z&&""!==z?" filled":"")),B=_slicedToArray(A,2),C=B[0],D=B[1];return _react["default"].createElement(v,{key:"el-".concat(b.formId,"-").concat(b.id),field:b,value:z,updateForm:function updateForm(a,b,c){return i(a,b,c)},validationMessage:!!c[b.id]&&c[b.id].valid,formValues:c,submitFailed:d,submitSuccess:e,touched:h[b.id],setTouched:f,setErrorMessages:g,unsetError:r,error:q,pages:j,prevStep:k,nextStep:l,isNextDisabled:m,hideField:!!c[b.id]&&c[b.id].hideField,saveStateToHtmlField:!("html"!==b.type||-1===b.cssClass.indexOf("set-state"))&&{formValues:c,saveStateToHtmlField:n},styledComponents:o,cssClass:C,setFocusClass:function setFocusClass(a){a?-1===C.indexOf(" filled")&&D("".concat(C," filled")):D(C.replace(" filled",""))},component:p&&(p[b.id]||p[b.cssClass]),dropzoneText:s,language:t,apiKeys:u})},_default=RenderField;exports["default"]=_default;