"use strict";function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireWildcard(require("react")),_reactSelect=_interopRequireDefault(require("react-select")),_InputLabel=_interopRequireDefault(require("../FormElements/InputLabel")),_excluded=["field","value","validationMessage","touched","setTouched","updateForm","hideField","styledComponents","error","unsetError","cssClass"];function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!==_typeof(a)&&"function"!=typeof a)return{default:a};var c=_getRequireWildcardCache(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!=f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d["default"]=a,c&&c.set(a,d),d}function _slicedToArray(a,b){return _arrayWithHoles(a)||_iterableToArrayLimit(a,b)||_unsupportedIterableToArray(a,b)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function _iterableToArrayLimit(a,b){var c=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=c){var d,e,f=[],g=!0,h=!1;try{for(c=c.call(a);!(g=(d=c.next()).done)&&(f.push(d.value),!(b&&f.length===b));g=!0);}catch(a){h=!0,e=a}finally{try{g||null==c["return"]||c["return"]()}finally{if(h)throw e}}return f}}function _arrayWithHoles(a){if(Array.isArray(a))return a}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}var _default=function(a){var b=a.field,c=a.value,d=a.validationMessage,e=a.touched,f=a.setTouched,g=a.updateForm,h=a.hideField,i=a.styledComponents,j=a.error,k=a.unsetError,l=a.cssClass,m=_objectWithoutProperties(a,_excluded),n=b.id,o=b.formId,p=b.type,q=b.label,r=b.isRequired,s=b.choices,t=b.placeholder,u=b.description,v=b.descriptionPlacement,w=b.labelPlacement,x=b.width,y=b.customName,z=s.map(function(a){return{value:a.value,label:a.text}}),A=s.filter(function(a){return a.isSelected});A=A.length?[{label:A[0].text,value:A[0].value}]:"";var B=(0,_react.useState)(c||A),C=_slicedToArray(B,2),D=C[0],E=C[1],F=function(a){E(a);g({target:{value:a}},b),k(n)},G=function(){g({target:{value:D}},b),f(n)},H=i||!1,I=H.SelectStyles,J=H.Label,K=void 0===J?"label":J,L=H.Box,M=void 0===L?"div":L;return _react["default"].createElement(M,{width:x,className:d&&e||j?"form-field error ".concat(l):"form-field ".concat(l),style:{display:h?"none":void 0}},_react["default"].createElement("div",{className:p},_react["default"].createElement(_InputLabel["default"],{formId:o,id:n,label:q,labelPlacement:w,isRequired:r,styledComponent:i}),"above"===v&&u&&_react["default"].createElement("div",{className:"description"},u),_react["default"].createElement(_reactSelect["default"],{name:y||"input_".concat(n,"[]"),required:r,value:D,onChange:function onChange(a){F(a,b)},onBlur:function onBlur(){return G()},placeholder:t,options:z,isMulti:!0,inputId:"input_".concat(o,"_").concat(n),styles:I}),"above"!==v&&u&&_react["default"].createElement("div",{className:"description"},u),(d&&e||j)&&_react["default"].createElement("span",{className:"error-message",id:"error_".concat(o,"_").concat(n)},d||j)))};exports["default"]=_default;