/*!
 * paway v0.0.2
 * Copyright 2019 GodoFredo <hello@godofredo.ninja> (https://github.com/godofredoninja/Paway.git)
 * Licensed under GPLv3
 */!function i(l,a,s){function u(r,e){if(!a[r]){if(!l[r]){var t="function"==typeof require&&require;if(!e&&t)return t(r,!0);if(c)return c(r,!0);var n=new Error("Cannot find module '"+r+"'");throw n.code="MODULE_NOT_FOUND",n}var o=a[r]={exports:{}};l[r][0].call(o.exports,function(e){return u(l[r][1][e]||e)},o,o.exports,i,l,a,s)}return a[r].exports}for(var c="function"==typeof require&&require,e=0;e<s.length;e++)u(s[e]);return u}({1:[function(e,r,t){r.exports=function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}},{}],2:[function(e,r,t){function n(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}r.exports=function(e,r,t){return r&&n(e.prototype,r),t&&n(e,t),e}},{}],3:[function(e,r,t){r.exports=function(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}},{}],4:[function(e,r,t){r.exports=function(e){return e&&e.__esModule?e:{default:e}}},{}],5:[function(e,r,t){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?r.exports=n=function(e){return typeof e}:r.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}r.exports=n},{}],6:[function(i,t,e){(function(B){var e,r;e=this,r=function(){var q=void 0!==i&&"undefined"==typeof window,t=new Map,n=new Map,j=[];j.total=0;var w=[],T=[];function r(){t.clear(),n.clear(),w=[],T=[]}function D(e){for(var r=-9007199254740991,t=e.length-1;0<=t;--t){var n=e[t];if(null!==n){var o=n.score;r<o&&(r=o)}}return-9007199254740991===r?null:r}function E(e,r){var t=e[r];if(void 0!==t)return t;var n=r;Array.isArray(r)||(n=r.split("."));for(var o=n.length,i=-1;e&&++i<o;)e=e[n[i]];return e}function P(e){return"object"==typeof e}var o=function(){var i=[],l=0,e={};function r(){for(var e=0,r=i[e],t=1;t<l;){var n=t+1;e=t,n<l&&i[n].score<i[t].score&&(e=n),i[e-1>>1]=i[e],t=1+(e<<1)}for(var o=e-1>>1;0<e&&r.score<i[o].score;o=(e=o)-1>>1)i[e]=i[o];i[e]=r}return e.add=function(e){var r=l;i[l++]=e;for(var t=r-1>>1;0<r&&e.score<i[t].score;t=(r=t)-1>>1)i[r]=i[t];i[r]=e},e.poll=function(){if(0!==l){var e=i[0];return i[0]=i[--l],r(),e}},e.peek=function(e){if(0!==l)return i[0]},e.replaceTop=function(e){i[0]=e,r()},e},k=o();return function e(I){var _={single:function(e,r,t){return e?(P(e)||(e=_.getPreparedSearch(e)),r?(P(r)||(r=_.getPrepared(r)),((t&&void 0!==t.allowTypo?t.allowTypo:!I||void 0===I.allowTypo||I.allowTypo)?_.algorithm:_.algorithmNoTypo)(e,r,e[0])):null):null},go:function(e,r,t){if(!e)return j;var n=(e=_.prepareSearch(e))[0],o=t&&t.threshold||I&&I.threshold||-9007199254740991,i=t&&t.limit||I&&I.limit||9007199254740991,l=(t&&void 0!==t.allowTypo?t.allowTypo:!I||void 0===I.allowTypo||I.allowTypo)?_.algorithm:_.algorithmNoTypo,a=0,s=0,u=r.length;if(t&&t.keys)for(var c=t.scoreFn||D,f=t.keys,p=f.length,h=u-1;0<=h;--h){for(var d=r[h],v=new Array(p),y=p-1;0<=y;--y)(b=E(d,m=f[y]))?(P(b)||(b=_.getPrepared(b)),v[y]=l(e,b,n)):v[y]=null;v.obj=d;var g=c(v);null!==g&&(g<o||(v.score=g,a<i?(k.add(v),++a):(++s,g>k.peek().score&&k.replaceTop(v))))}else if(t&&t.key){var m=t.key;for(h=u-1;0<=h;--h)(b=E(d=r[h],m))&&(P(b)||(b=_.getPrepared(b)),null!==(w=l(e,b,n))&&(w.score<o||(w={target:w.target,_targetLowerCodes:null,_nextBeginningIndexes:null,score:w.score,indexes:w.indexes,obj:d},a<i?(k.add(w),++a):(++s,w.score>k.peek().score&&k.replaceTop(w)))))}else for(h=u-1;0<=h;--h){var b,w;(b=r[h])&&(P(b)||(b=_.getPrepared(b)),null!==(w=l(e,b,n))&&(w.score<o||(a<i?(k.add(w),++a):(++s,w.score>k.peek().score&&k.replaceTop(w)))))}if(0===a)return j;var T=new Array(a);for(h=a-1;0<=h;--h)T[h]=k.poll();return T.total=a+s,T},goAsync:function(A,L,S){var C=!1,e=new Promise(function(h,d){if(!A)return h(j);var v=(A=_.prepareSearch(A))[0],y=o(),g=L.length-1,m=S&&S.threshold||I&&I.threshold||-9007199254740991,b=S&&S.limit||I&&I.limit||9007199254740991,w=(S&&void 0!==S.allowTypo?S.allowTypo:!I||void 0===I.allowTypo||I.allowTypo)?_.algorithm:_.algorithmNoTypo,T=0,k=0;function x(){if(C)return d("canceled");var e=Date.now();if(S&&S.keys)for(var r=S.scoreFn||D,t=S.keys,n=t.length;0<=g;--g){for(var o=L[g],i=new Array(n),l=n-1;0<=l;--l)(u=E(o,s=t[l]))?(P(u)||(u=_.getPrepared(u)),i[l]=w(A,u,v)):i[l]=null;i.obj=o;var a=r(i);if(null!==a&&!(a<m)&&(i.score=a,T<b?(y.add(i),++T):(++k,a>y.peek().score&&y.replaceTop(i)),g%1e3==0&&10<=Date.now()-e))return void(q?B(x):setTimeout(x))}else if(S&&S.key){for(var s=S.key;0<=g;--g)if((u=E(o=L[g],s))&&(P(u)||(u=_.getPrepared(u)),null!==(c=w(A,u,v))&&!(c.score<m)&&(c={target:c.target,_targetLowerCodes:null,_nextBeginningIndexes:null,score:c.score,indexes:c.indexes,obj:o},T<b?(y.add(c),++T):(++k,c.score>y.peek().score&&y.replaceTop(c)),g%1e3==0&&10<=Date.now()-e)))return void(q?B(x):setTimeout(x))}else for(;0<=g;--g){var u,c;if((u=L[g])&&(P(u)||(u=_.getPrepared(u)),null!==(c=w(A,u,v))&&!(c.score<m)&&(T<b?(y.add(c),++T):(++k,c.score>y.peek().score&&y.replaceTop(c)),g%1e3==0&&10<=Date.now()-e)))return void(q?B(x):setTimeout(x))}if(0===T)return h(j);for(var f=new Array(T),p=T-1;0<=p;--p)f[p]=y.poll();f.total=T+k,h(f)}q?B(x):x()});return e.cancel=function(){C=!0},e},highlight:function(e,r,t){if(null===e)return null;void 0===r&&(r="<b>"),void 0===t&&(t="</b>");for(var n="",o=0,i=!1,l=e.target,a=l.length,s=e.indexes,u=0;u<a;++u){var c=l[u];if(s[o]===u){if(i||(i=!0,n+=r),++o===s.length){n+=c+t+l.substr(u+1);break}}else i&&(i=!1,n+=t);n+=c}return n},prepare:function(e){if(e)return{target:e,_targetLowerCodes:_.prepareLowerCodes(e),_nextBeginningIndexes:null,score:null,indexes:null,obj:null}},prepareSlow:function(e){if(e)return{target:e,_targetLowerCodes:_.prepareLowerCodes(e),_nextBeginningIndexes:_.prepareNextBeginningIndexes(e),score:null,indexes:null,obj:null}},prepareSearch:function(e){if(e)return _.prepareLowerCodes(e)},getPrepared:function(e){if(999<e.length)return _.prepare(e);var r=t.get(e);return void 0!==r||(r=_.prepare(e),t.set(e,r)),r},getPreparedSearch:function(e){if(999<e.length)return _.prepareSearch(e);var r=n.get(e);return void 0!==r||(r=_.prepareSearch(e),n.set(e,r)),r},algorithm:function(e,r,t){for(var n=r._targetLowerCodes,o=e.length,i=n.length,l=0,a=0,s=0,u=0;;){if(t===n[a]){if(w[u++]=a,++l===o)break;t=e[0===s?l:s===l?l+1:s===l-1?l-1:l]}if(i<=++a)for(;;){if(l<=1)return null;if(0===s){if(t===e[--l])continue;s=l}else{if(1===s)return null;if((t=e[1+(l=--s)])===e[l])continue}a=w[(u=l)-1]+1;break}}var c=l=0,f=!1,p=0,h=r._nextBeginningIndexes;null===h&&(h=r._nextBeginningIndexes=_.prepareNextBeginningIndexes(r.target));var d=a=0===w[0]?0:h[w[0]-1];if(a!==i)for(;;)if(i<=a){if(l<=0){if(o-2<++c)break;if(e[c]===e[c+1])continue;a=d;continue}--l,a=h[T[--p]]}else if(e[0===c?l:c===l?l+1:c===l-1?l-1:l]===n[a]){if(T[p++]=a,++l===o){f=!0;break}++a}else a=h[a];if(f)var v=T,y=p;else v=w,y=u;for(var g=0,m=-1,b=0;b<o;++b)m!==(a=v[b])-1&&(g-=a),m=a;for(f?0!==c&&(g+=-20):(g*=1e3,0!==s&&(g+=-20)),g-=i-o,r.score=g,r.indexes=new Array(y),b=y-1;0<=b;--b)r.indexes[b]=v[b];return r},algorithmNoTypo:function(e,r,t){for(var n=r._targetLowerCodes,o=e.length,i=n.length,l=0,a=0,s=0;;){if(t===n[a]){if(w[s++]=a,++l===o)break;t=e[l]}if(i<=++a)return null}var u=!1,c=l=0,f=r._nextBeginningIndexes;if(null===f&&(f=r._nextBeginningIndexes=_.prepareNextBeginningIndexes(r.target)),(a=0===w[0]?0:f[w[0]-1])!==i)for(;;)if(i<=a){if(l<=0)break;--l,a=f[T[--c]]}else if(e[l]===n[a]){if(T[c++]=a,++l===o){u=!0;break}++a}else a=f[a];if(u)var p=T,h=c;else p=w,h=s;for(var d=0,v=-1,y=0;y<o;++y)v!==(a=p[y])-1&&(d-=a),v=a;for(u||(d*=1e3),d-=i-o,r.score=d,r.indexes=new Array(h),y=h-1;0<=y;--y)r.indexes[y]=p[y];return r},prepareLowerCodes:function(e){for(var r=e.length,t=[],n=e.toLowerCase(),o=0;o<r;++o)t[o]=n.charCodeAt(o);return t},prepareBeginningIndexes:function(e){for(var r=e.length,t=[],n=0,o=!1,i=!1,l=0;l<r;++l){var a=e.charCodeAt(l),s=65<=a&&a<=90,u=s||97<=a&&a<=122||48<=a&&a<=57,c=s&&!o||!i||!u;o=s,i=u,c&&(t[n++]=l)}return t},prepareNextBeginningIndexes:function(e){for(var r=e.length,t=_.prepareBeginningIndexes(e),n=[],o=t[0],i=0,l=0;l<r;++l)l<o?n[l]=o:(o=t[++i],n[l]=void 0===o?r:o);return n},cleanup:r,new:e};return _}()},"function"==typeof define&&define.amd?define([],r):"object"==typeof t&&t.exports?t.exports=r():e.fuzzysort=r()}).call(this,i("timers").setImmediate)},{timers:8}],7:[function(e,r,t){var n,o,i=r.exports={};function l(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(r){if(n===setTimeout)return setTimeout(r,0);if((n===l||!n)&&setTimeout)return n=setTimeout,setTimeout(r,0);try{return n(r,0)}catch(e){try{return n.call(null,r,0)}catch(e){return n.call(this,r,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:l}catch(e){n=l}try{o="function"==typeof clearTimeout?clearTimeout:a}catch(e){o=a}}();var u,c=[],f=!1,p=-1;function h(){f&&u&&(f=!1,u.length?c=u.concat(c):p=-1,c.length&&d())}function d(){if(!f){var e=s(h);f=!0;for(var r=c.length;r;){for(u=c,c=[];++p<r;)u&&u[p].run();p=-1,r=c.length}u=null,f=!1,function(r){if(o===clearTimeout)return clearTimeout(r);if((o===a||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(r);try{o(r)}catch(e){try{return o.call(null,r)}catch(e){return o.call(this,r)}}}(e)}}function v(e,r){this.fun=e,this.array=r}function y(){}i.nextTick=function(e){var r=new Array(arguments.length-1);if(1<arguments.length)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];c.push(new v(e,r)),1!==c.length||f||s(d)},v.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=y,i.addListener=y,i.once=y,i.off=y,i.removeListener=y,i.removeAllListeners=y,i.emit=y,i.prependListener=y,i.prependOnceListener=y,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},{}],8:[function(s,e,u){(function(e,r){var n=s("process/browser.js").nextTick,t=Function.prototype.apply,o=Array.prototype.slice,i={},l=0;function a(e,r){this._id=e,this._clearFn=r}u.setTimeout=function(){return new a(t.call(setTimeout,window,arguments),clearTimeout)},u.setInterval=function(){return new a(t.call(setInterval,window,arguments),clearInterval)},u.clearTimeout=u.clearInterval=function(e){e.close()},a.prototype.unref=a.prototype.ref=function(){},a.prototype.close=function(){this._clearFn.call(window,this._id)},u.enroll=function(e,r){clearTimeout(e._idleTimeoutId),e._idleTimeout=r},u.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},u._unrefActive=u.active=function(e){clearTimeout(e._idleTimeoutId);var r=e._idleTimeout;0<=r&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},r))},u.setImmediate="function"==typeof e?e:function(e){var r=l++,t=!(arguments.length<2)&&o.call(arguments,1);return i[r]=!0,n(function(){i[r]&&(t?e.apply(null,t):e.call(null),u.clearImmediate(r))}),r},u.clearImmediate="function"==typeof r?r:function(e){delete i[e]}}).call(this,s("timers").setImmediate,s("timers").clearImmediate)},{"process/browser.js":7,timers:8}],9:[function(e,r,t){"use strict";var n=e("@babel/runtime/helpers/interopRequireDefault"),o=n(e("@babel/runtime/helpers/defineProperty")),i=n(e("@babel/runtime/helpers/typeof")),l=n(e("@babel/runtime/helpers/classCallCheck")),a=n(e("@babel/runtime/helpers/createClass")),s=e("fuzzysort"),u=function(){function n(e){(0,l.default)(this,n),this.check=!1;var r={url:siteUrl,key:"",version:"v3",input:"#search-field",results:"#search-results",defaultValue:"",template:function(e){return'<a href="'.concat(siteUrl,"/").concat(e.slug,'/">').concat(e.title,"</a>")},options:{keys:["title"],limit:10,threshold:-3500,allowTypo:!1},api:{resource:"posts",parameters:{limit:"all",fields:["title","slug"],filter:"",include:"",order:"",formats:"",page:""}},on:{beforeDisplay:function(){},afterDisplay:function(){},beforeFetch:function(){},afterFetch:function(){}}},t=this.mergeDeep(r,e);Object.assign(this,t),this.init()}return(0,a.default)(n,[{key:"mergeDeep",value:function(r,t){var n=this;return r&&"object"===(0,i.default)(r)&&!Array.isArray(r)&&null!==r&&t&&"object"===(0,i.default)(t)&&!Array.isArray(t)&&null!==t&&Object.keys(t).forEach(function(e){t[e]&&"object"===(0,i.default)(t[e])&&!Array.isArray(t[e])&&null!==t[e]?(r[e]||Object.assign(r,(0,o.default)({},e,{})),n.mergeDeep(r[e],t[e])):Object.assign(r,(0,o.default)({},e,t[e]))}),r}},{key:"fetch",value:function(){var r=this;this.on.beforeFetch();var e=new GhostContentAPI({url:this.url,key:this.key,version:this.version}),t={},n=this.api.parameters;for(var o in n)""!==n[o]&&(t[o]=n[o]);e[this.api.resource].browse(t).then(function(e){r.search(e)}).catch(function(e){console.error(e)})}},{key:"createElementFromHTML",value:function(e){var r=document.createElement("div");return r.innerHTML=e.trim(),r.firstChild}},{key:"displayResults",value:function(e){if(null!==document.querySelectorAll(this.results)[0].firstChild&&""!==document.querySelectorAll(this.results)[0].firstChild)for(;document.querySelectorAll(this.results)[0].firstChild;)document.querySelectorAll(this.results)[0].removeChild(document.querySelectorAll(this.results)[0].firstChild);var r=document.querySelectorAll(this.input)[0].value;""!==this.defaultValue&&(r=this.defaultValue);var t=s.go(r,e,{keys:this.options.keys,limit:this.options.limit,allowTypo:this.options.allowTypo,threshold:this.options.threshold});for(var n in t)n<t.length&&document.querySelectorAll(this.results)[0].appendChild(this.createElementFromHTML(this.template(t[n].obj)));this.on.afterDisplay(t),this.defaultValue=""}},{key:"search",value:function(e){var r=this;this.on.afterFetch(e),this.check=!0,""!==this.defaultValue&&(this.on.beforeDisplay(),this.displayResults(e)),document.querySelectorAll(this.input)[0].addEventListener("keyup",function(){r.on.beforeDisplay(),r.displayResults(e)})}},{key:"checkArgs",value:function(){return document.querySelectorAll(this.input).length?document.querySelectorAll(this.results).length?""===this.url?(console.log("Content API Client Library host missing. Please set the host. Must not end in a trailing slash."),!1):""!==this.key||(console.log('Content API Client Library key missing. Please set the key. Hex string copied from the "Integrations" screen in Ghost Admin.'),!1):(console.log("Results not found."),!1):(console.log("Input not found."),!1)}},{key:"validate",value:function(){return!!this.checkArgs()}},{key:"init",value:function(){var e=this;this.validate()&&(""!==this.defaultValue&&(document.querySelectorAll(this.input)[0].value=this.defaultValue,window.onload=function(){e.check||e.fetch()}),document.querySelectorAll(this.input)[0].addEventListener("focus",function(){e.check||e.fetch()}))}}]),n}();r.exports=u},{"@babel/runtime/helpers/classCallCheck":1,"@babel/runtime/helpers/createClass":2,"@babel/runtime/helpers/defineProperty":3,"@babel/runtime/helpers/interopRequireDefault":4,"@babel/runtime/helpers/typeof":5,fuzzysort:6}],10:[function(e,r,t){"use strict";var o=e("@babel/runtime/helpers/interopRequireDefault")(e("./app/app.search"));!function(l,a){var e=a.querySelector.bind(a),r=a.querySelectorAll.bind(a),s=a.body,u=e("#search-field"),c=e("#search-results"),t=e(".js-search-message"),f={outer:0,scroll:0};e(".js-search-toggle").classList.remove("u-hide");var n={on:{afterDisplay:function(e){p(),f={outer:c.offsetHeight,scroll:c.scrollHeight},0===e.total&&""!==u.value?t.classList.remove("u-hide"):t.classList.add("u-hide")}}};function p(e,r){if(e=e||0,r=r||"up",!(l.innerWidth<768)){var t=c.querySelectorAll("a");if(t.length){var n=c.querySelector("a.search-result--active");n&&n.classList.remove("search-result--active"),t[e].classList.add("search-result--active");var o=t[e].offsetTop,i=0;"down"===r&&o>f.outer/2?i=o-f.outer/2:"up"===r&&(i=o<f.scroll-f.outer/2?o-f.outer/2:f.scroll),c.scrollTo(0,i)}}}function h(e){e.preventDefault();var r,t,n,o,i,l=e.keyCode;27===l?(s.classList.remove("has-search"),a.removeEventListener("keyup",h)):13===l?(u.blur(),(i=c.querySelector("a.search-result--active"))&&i.click()):38===l||40===l?(r=l,n=0,(o=c.querySelector(".search-result--active"))&&(n=[].slice.call(o.parentNode.children).indexOf(o)),u.blur(),38===r?(t="up",n<=0?(u.focus(),n=0):--n):(t="down",n>=c.querySelectorAll("a").length-1?n=c.querySelectorAll("a").length-1:n+=1),p(n,t)):191===l&&(u.focus(),u.setSelectionRange(0,u.value.length))}Object.assign(n,searchSettings),r(".js-search-toggle").forEach(function(e){return e.addEventListener("click",function(e){e.preventDefault(),s.classList.add("has-search"),u.focus(),768<l.innerWidth&&a.addEventListener("keyup",h)})}),r(".js-search-close").forEach(function(e){return e.addEventListener("click",function(e){e.preventDefault(),s.classList.remove("has-search"),a.removeEventListener("keyup",h)})}),new o.default(n)}(window,document)},{"./app/app.search":9,"@babel/runtime/helpers/interopRequireDefault":4}]},{},[10]);