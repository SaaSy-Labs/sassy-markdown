"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),r=require("react-markdown");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=a(e),n=a(r);exports.MarkdownViewer=function(e){var r,a,o=e.terms,u=e.dynamicData,l=(r=o,a=JSON.parse(u),console.log({termsArray:r,values:a}),r.map((function(e){for(var r in a){var t=new RegExp("\\$\\{".concat(r,"\\}"),"g"),n=a[r];e=e.replace(t,n)}return e})));return t.default.createElement("div",{className:"markdown-viewer container"},t.default.createElement(n.default,null,null==l?void 0:l.join("\n")))};
//# sourceMappingURL=index.js.map
