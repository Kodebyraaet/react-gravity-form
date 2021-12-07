"use strict";var _react=_interopRequireDefault(require("react"));Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var _default=function(a){var b=a.field,c=a.saveStateToHtmlField,d=a.hideField,e=a.styledComponents,f=b.description,g=b.basePrice,h=b.label,j=b.cssClass,k=b.width,l=b.customName,m=b.id;if(c){var n=c.saveStateToHtmlField,o=c.formValues,p=Object.keys(n),q=[];if(p)for(var B in o)for(var r=o[B],s=0;s<p.length;s++)-1===r.cssClass.indexOf(p[s])||r.valid||(q[n[p[s]]]=r.value);if(q)for(var t=Object.keys(q),u=0;u<t.length;u++)"%price%"===t[u]&&(q[t[u]]="\u20AC".concat(q[t[u]])),content=content.replace(t[u],q[t[u]])}var v=e||!1,w=v.Box,x=void 0===w?"div":w,z=v.Label,A=void 0===z?"label":z;return _react["default"].createElement(x,{width:k,className:"form-field ".concat(j),style:{display:d?"none":void 0}},_react["default"].createElement(A,{className:"gf-label"},h),_react["default"].createElement(A,{className:"gf-label gf-price"},"Price: ",_react["default"].createElement("span",{className:"gf-price-value"},g)),_react["default"].createElement("div",{className:"html-content",dangerouslySetInnerHTML:{__html:f}}),_react["default"].createElement("input",{type:"hidden",name:l||"input_".concat(m,".1"),value:h}),_react["default"].createElement("input",{type:"hidden",name:l||"input_".concat(m,".2"),value:g}))};exports["default"]=_default;