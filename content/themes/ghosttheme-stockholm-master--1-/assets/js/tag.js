!function(e){var n={};function t(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(i,a,function(n){return e[n]}.bind(null,a));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=18)}({0:function(e,n,t){"use strict";var i,a=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),o={};function s(e,n,t){for(var i=0;i<n.length;i++){var a={css:n[i][1],media:n[i][2],sourceMap:n[i][3]};o[e][i]?o[e][i](a):o[e].push(f(a,t))}}function p(e){var n=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var a=t.nc;a&&(i.nonce=a)}if(Object.keys(i).forEach((function(e){n.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(n);else{var o=r(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var l,c=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function d(e,n,t,i){var a=t?"":i.css;if(e.styleSheet)e.styleSheet.cssText=c(n,a);else{var r=document.createTextNode(a),o=e.childNodes;o[n]&&e.removeChild(o[n]),o.length?e.insertBefore(r,o[n]):e.appendChild(r)}}function g(e,n,t){var i=t.css,a=t.media,r=t.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),r&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var m=null,u=0;function f(e,n){var t,i,a;if(n.singleton){var r=u++;t=m||(m=p(n)),i=d.bind(null,t,r,!1),a=d.bind(null,t,r,!0)}else t=p(n),i=g.bind(null,t,n),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return i(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;i(e=n)}else a()}}e.exports=function(e,n,t){return(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a()),e=t.base?e+t.base:e,n=n||[],o[e]||(o[e]=[]),s(e,n,t),function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){o[e]||(o[e]=[]),s(e,n,t);for(var i=n.length;i<o[e].length;i++)o[e][i]();o[e].length=n.length,0===o[e].length&&delete o[e]}}}},1:function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",i=e[3];if(!i)return t;if(n&&"function"==typeof btoa){var a=(o=i,s=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),p="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(p," */")),r=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot).concat(e," */")}));return[t].concat(r).concat([a]).join("\n")}var o,s,p;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var i=0;i<e.length;i++){var a=[].concat(e[i]);t&&(a[2]?a[2]="".concat(t," and ").concat(a[2]):a[2]=t),n.push(a)}},n}},18:function(e,n,t){"use strict";t.r(n);t(19)},19:function(e,n,t){var i=t(0),a=t(20);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var r={insert:"head",singleton:!1},o=(i(e.i,a,r),a.locals?a.locals:{});e.exports=o},20:function(e,n,t){(n=t(1)(!1)).push([e.i,"@media (max-width: 800px) {\n  .tag-template .page-container {\n    margin-top: 0;\n  }\n}\n.tag-template .page-container .cover {\n  background: white;\n  padding: 60px;\n  text-align: center;\n  border-radius: 5px;\n  margin-bottom: 20px;\n}\n.tag-template .page-container .cover .tag-name {\n  font-size: 1.5em;\n}\n.tag-template .page-container .cover .tag-name i {\n  font-size: 0.9em;\n  margin-right: 5px;\n}\n.tag-template .postlist {\n  grid-template-columns: 1fr 1fr;\n  grid-column-gap: 20px;\n  grid-row-gap: 20px;\n  margin: auto;\n  display: grid;\n  grid-template-columns: 48.5% 48.5%;\n  background: white;\n  padding: 30px;\n  border-radius: 5px;\n}\n@media (max-width: 600px) {\n  .tag-template .postlist {\n    grid-template-columns: 1fr;\n    grid-template-columns: 100%;\n  }\n}\n.tag-template .postlist article {\n  margin-bottom: 0;\n  padding-bottom: 0;\n  background: none;\n  border-radius: 0;\n  box-shadow: none;\n  border-bottom: 1px solid #e7e1e1;\n}\n.tag-template .postlist article .post-preview-details {\n  padding: 5px;\n}\n.tag-template .postlist article .content {\n  position: relative;\n  margin: 5px 15px 15px;\n  padding: 0;\n  height: auto;\n  display: block;\n}\n@media (max-width: 600px) {\n  .tag-template .postlist article .content {\n    height: auto;\n    margin: 5px 15px 15px;\n  }\n}\n.tag-template .postlist article .read-link {\n  display: none;\n}\n.tag-template .postlist article {\n  margin-bottom: 20px;\n  justify-content: space-between;\n  width: 100%;\n  height: auto;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 20px !important;\n}\n@media (max-width: 600px) {\n  .tag-template .postlist article {\n    width: 100%;\n    height: auto;\n  }\n}\n.tag-template .postlist article:hover .post-image,\n.tag-template .postlist article:hover img {\n  border: unset !important;\n}\n.tag-template .postlist article .post-preview-body {\n  display: flex;\n  justify-content: space-between;\n}\n@media (max-width: 600px) {\n  .tag-template .postlist article .post-preview-body {\n    padding-bottom: 0;\n    margin-bottom: 0;\n  }\n}\n@media (max-width: 800px) {\n  .tag-template .postlist article .tags {\n    display: none !important;\n  }\n}\n.tag-template .postlist article .post-head {\n  margin: 0;\n  order: 1;\n}\n@media (max-width: 600px) {\n  .tag-template .postlist article .post-head {\n    min-height: unset;\n  }\n}\n.tag-template .postlist article .post-title {\n  font-size: 1.2em;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.tag-template .postlist article .post-excerpt {\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  font-size: 0.95em;\n  line-height: 1.25;\n}\n.tag-template .postlist article .post-image {\n  display: block;\n  margin: 0 15px 0 0;\n  background-size: cover;\n  width: 105px;\n  min-width: 106px;\n  order: 0;\n  margin-right: 15px;\n  overflow: hidden;\n  border-radius: 2px;\n}\n@media (max-width: 600px) {\n  .tag-template .postlist article .post-image {\n    margin: 0 0 20px;\n    background-size: cover;\n    order: 0;\n    overflow: hidden;\n    width: 100%;\n    min-width: unset;\n  }\n}\n.tag-template .postlist article .post-image .featured-image {\n  width: 160px;\n  margin: 0;\n}\n@media (max-width: 600px) {\n  .tag-template .postlist article .post-image .featured-image {\n    width: 100%;\n  }\n}\n.tag-template .postlist article .post-footer {\n  display: none;\n}\n.tag-template .pagination {\n  margin: 40px auto 0;\n}\n@media (max-width: 800px) {\n  .tag-template .pagination {\n    margin: 30px auto;\n    width: 80%;\n  }\n}\n.page-series .page-content {\n  padding: 30px;\n  background: white;\n  border-radius: 5px;\n}\n@media (max-width: 800px) {\n  .page-series .page-content {\n    border-radius: 0;\n  }\n}\n.page-series .page-content .series-title {\n  margin: 0;\n}\n.page-series .page-content .serieslist {\n  display: grid;\n  grid-template-columns: [first] 1fr [last] 1fr;\n  grid-column-gap: 20px;\n  grid-row-gap: 20px;\n  margin: 30px 0 0;\n}\n@media (max-width: 600px) {\n  .page-series .page-content .serieslist {\n    grid-template-columns: 1fr;\n  }\n}\n.page-series .page-content .serieslist .seriespreview {\n  overflow: hidden;\n  background: #f3fbff;\n  border-radius: 5px;\n  border: 1px solid #dfe8ed;\n  transition: all 0.2s ease-out;\n}\n.page-series .page-content .serieslist .seriespreview:hover {\n  cursor: pointer;\n  background: #e7f7ff;\n  border-color: #bee8ff;\n}\n.page-series .page-content .serieslist .seriespreview:hover .series-image {\n  opacity: 0.7;\n}\n.page-series .page-content .serieslist .seriespreview:hover .series-title,\n.page-series .page-content .serieslist .seriespreview:hover .series-description,\n.page-series .page-content .serieslist .seriespreview:hover .count {\n  color: #4381a1 !important;\n}\n.page-series .page-content .serieslist .seriespreview .series-image {\n  width: 100%;\n  transition: all 0.2s ease-out;\n}\n.page-series .page-content .serieslist .seriespreview .series-info {\n  padding: 10px 15px;\n}\n.page-series .page-content .serieslist .seriespreview .series-info .series-title {\n  color: #3f4856;\n  font-family: 'canada-type-gibson', sans-serif;\n  margin-bottom: 7px;\n  margin-top: 0;\n  font-size: 1.5em;\n  line-height: 1.2;\n  font-weight: 600;\n  transition: all 0.2s ease-out;\n}\n.page-series .page-content .serieslist .seriespreview .series-info .series-description {\n  color: #373940;\n  margin: 10px 0;\n  line-height: 1.3;\n  text-align: left;\n  font-family: 'proxima-nova', sans-serif;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  transition: all 0.2s ease-out;\n}\n.page-series .page-content .serieslist .seriespreview .series-info .count {\n  font-size: 0.8em;\n  color: #494e59;\n}\n@media (max-width: 800px) {\n  .page-series .sidebar {\n    display: none;\n  }\n}\n",""]),e.exports=n}});