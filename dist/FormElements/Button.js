"use strict";var _react=_interopRequireDefault(require("react"));Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var _default=function(a){var b=a.Button,c=a.Loading,d=a.text,e=a.showLoading,f=a.className,g=a.isDisabled,h=a.icon,i=b?b:"button";return _react["default"].createElement(i,{type:"submit",className:"form-submit-button button ".concat(f),disabled:e||g,mr:20},e&&c?_react["default"].createElement(c,{inline:!0}):d,d)};exports["default"]=_default;