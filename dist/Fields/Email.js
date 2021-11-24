"use strict";var _react=_interopRequireWildcard(require("react"));function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return _getRequireWildcardCache=function(){return a},a}function _interopRequireWildcard(a){if(a&&a.__esModule)return a;if(null===a||"object"!==_typeof(a)&&"function"!=typeof a)return{default:a};var b=_getRequireWildcardCache();if(b&&b.has(a))return b.get(a);var c={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e)){var f=d?Object.getOwnPropertyDescriptor(a,e):null;f&&(f.get||f.set)?Object.defineProperty(c,e,f):c[e]=a[e]}return c["default"]=a,b&&b.set(a,c),c}function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){_defineProperty(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _slicedToArray(a,b){return _arrayWithHoles(a)||_iterableToArrayLimit(a,b)||_unsupportedIterableToArray(a,b)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function _iterableToArrayLimit(a,b){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}}function _arrayWithHoles(a){if(Array.isArray(a))return a}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}var _default=function(a){var b=a.field,c=a.value,d=a.validationMessage,e=a.touched,f=a.setTouched,g=a.hideField,h=a.updateForm,i=a.styledComponents,j=a.error,k=a.unsetError,l=a.cssClass,m=a.setFocusClass,n=_objectWithoutProperties(a,["field","value","validationMessage","touched","setTouched","hideField","updateForm","styledComponents","error","unsetError","cssClass","setFocusClass"]),o=b.id,p=b.formId,q=b.type,r=b.label,s=b.placeholder,t=b.isRequired,u=b.maxLength,v=b.description,w=b.descriptionPlacement,x=b.labelPlacement,y=b.width,z=b.customName,A=b.emailConfirmEnabled,B=b.inputs,C=(0,_react.useState)(B),D=_slicedToArray(C,2),E=D[0],F=D[1],G=function(a,b){var c=_objectSpread({},E);c[b]&&(c[b].cssClass=a&&c&&0<!!c.length?"filled":"",F(c))},H=i||!1,I=H.Input,J=void 0===I?"input":I,K=H.Label,L=void 0===K?"label":K,M=H.Box,N=void 0===M?"div":M;return _react["default"].createElement(N,{width:y,className:d&&e||j?"form-field error ".concat(l):"form-field ".concat(l),style:{display:g?"none":void 0}},_react["default"].createElement("div",{className:q},_react["default"].createElement(L,{htmlFor:"input_".concat(p,"_").concat(o),className:"gf-label ".concat(x)},r,t?_react["default"].createElement("abbr",null,"*"):null),"above"===w&&v&&_react["default"].createElement("div",{className:"description"},v),A?_react["default"].createElement(_react["default"].Fragment,null,B&&B.length&&B.map(function(a,g){return _react["default"].createElement("span",{key:"input_".concat(p,"_").concat(a.id),className:"".concat(1<B.length?"ginput_".concat(0===g?"left":"right"):"medim"," ").concat(E[g].cssClass?E[g].cssClass:"")},_react["default"].createElement(L,{className:"gf-label ".concat(x),htmlFor:"input_".concat(p,"_").concat(a.id,"_").concat(g)},a.customLabel||a.label,t?_react["default"].createElement("abbr",null,"*"):null),_react["default"].createElement(J,{id:"input_".concat(p,"_").concat(a.id,"_").concat(g),name:z||"input_".concat(o).concat(1===g?"_".concat(g+1):""),type:q,value:c&&c[g]&&c[g].val?c[g].val:"",placeholder:a.placeholder?a.placeholder:s,required:t,autoComplete:"off",onChange:function onChange(a){b.subId=g,h(a,b),k(o)},onBlur:function onBlur(a){b.subId=g,h(a,b),f(o),G(c&&c[g]&&c[g].val&&""!==c[g].val,g)},onFocus:function onFocus(){return G(!0,g)},"aria-label":r,"aria-describedby":"error_".concat(p,"_").concat(a.id,"_").concat(g),"aria-invalid":!!d&&e}))})):_react["default"].createElement(_react["default"].Fragment,null,_react["default"].createElement(J,{id:"input_".concat(p,"_").concat(o),name:z||"input_".concat(o),type:q,value:c?c:"",placeholder:s,maxLength:u,required:t,onChange:function onChange(a){h(a,b),k(o)},onBlur:function onBlur(a){h(a,b),f(o),m(""!==c)},onFocus:function onFocus(){return m(!0)},"aria-label":r,"aria-describedby":"error_".concat(p,"_").concat(o),"aria-invalid":!!d&&e||!!j})),"above"!==w&&v&&_react["default"].createElement("div",{className:"description"},v),(d&&e||j)&&_react["default"].createElement("span",{className:"error-message",id:"error_".concat(p,"_").concat(o)},d||j)))};exports["default"]=_default;