"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireDefault(require("react")),_queryString=_interopRequireDefault(require("query-string")),_excluded=["field","value","validationMessage","touched","setTouched","updateForm","cssClass"];function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}var _default=function(a){var b=a.field,c=a.value,d=a.validationMessage,e=a.touched,f=a.setTouched,g=a.updateForm,h=a.cssClass,i=_objectWithoutProperties(a,_excluded),j=b.id,k=b.type,l=b.isRequired,m=b.customName,n=b.formId,o=!1;if(b.allowsPrepopulate){var p=_queryString["default"].parse(location.search);o=p[b.inputName]}return _react["default"].createElement("div",{className:h},_react["default"].createElement("input",{name:m||"input_".concat(j),type:k,value:o?o:c,required:l,onChange:function onChange(a){return g(a,b)},onBlur:function onBlur(a){g(a,b),f(j)},"aria-describedby":"error_".concat(n,"_").concat(j),"aria-invalid":!!d}),d&&e&&_react["default"].createElement("span",{className:"error-message",id:"error_".concat(n,"_").concat(j)},d))};exports["default"]=_default;