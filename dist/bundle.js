!function(r){var n={};function e(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return r[t].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=r,e.c=n,e.d=function(r,n,t){e.o(r,n)||Object.defineProperty(r,n,{enumerable:!0,get:t})},e.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},e.t=function(r,n){if(1&n&&(r=e(r)),8&n)return r;if(4&n&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&n&&"string"!=typeof r)for(var i in r)e.d(t,i,function(n){return r[n]}.bind(null,i));return t},e.n=function(r){var n=r&&r.__esModule?function(){return r.default}:function(){return r};return e.d(n,"a",n),n},e.o=function(r,n){return Object.prototype.hasOwnProperty.call(r,n)},e.p="",e(e.s=0)}([function(r,n,e){"use strict";e.r(n);var t,i;e(1),e(3);t=document.querySelector(".nav__btn"),i=document.querySelector(".nav__list"),t.addEventListener("click",(function(){i.classList.toggle("show")}));var a=document.querySelectorAll("[data-tab-target]"),o=document.querySelectorAll("[data-tab-content]");a.forEach((function(r){r.addEventListener("click",(function(){var n=document.querySelector(r.dataset.tabTarget);o.forEach((function(r){return r.classList.remove("active")})),a.forEach((function(r){return r.classList.remove("active")})),r.classList.add("active"),n.classList.add("active")}))}));var c=document.querySelectorAll("[data-energy-target]"),s=document.querySelectorAll("[data-energy-content]");c.forEach((function(r){r.addEventListener("click",(function(){var n=document.querySelector(r.dataset.energyTarget);s.forEach((function(r){return r.classList.remove("active")})),c.forEach((function(r){return r.classList.remove("active")})),r.classList.add("active"),n.classList.add("active")}))}));var l=document.querySelectorAll("[data-infra-target]"),p=document.querySelectorAll("[data-infra-content]");l.forEach((function(r){r.addEventListener("click",(function(){var n=document.querySelector(r.dataset.infraTarget);p.forEach((function(r){return r.classList.remove("active")})),l.forEach((function(r){return r.classList.remove("active")})),r.classList.add("active"),n.classList.add("active")}))}));var d=document.querySelectorAll("[data-property-target]"),u=document.querySelectorAll("[data-property-content]");d.forEach((function(r){r.addEventListener("click",(function(){var n=document.querySelector(r.dataset.propertyTarget);u.forEach((function(r){return r.classList.remove("active")})),d.forEach((function(r){return r.classList.remove("active")})),r.classList.add("active"),n.classList.add("active")}))}))},function(r,n,e){(function(r){function n(r){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}var e=function(r){"use strict";var e=Object.prototype,t=e.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(r,n,e){return Object.defineProperty(r,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),r[n]}try{s({},"")}catch(r){s=function(r,n,e){return r[n]=e}}function l(r,n,e,t){var i=n&&n.prototype instanceof u?n:u,a=Object.create(i.prototype),o=new j(t||[]);return a._invoke=function(r,n,e){var t="suspendedStart";return function(i,a){if("executing"===t)throw new Error("Generator is already running");if("completed"===t){if("throw"===i)throw a;return z()}for(e.method=i,e.arg=a;;){var o=e.delegate;if(o){var c=w(o,e);if(c){if(c===d)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===t)throw t="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);t="executing";var s=p(r,n,e);if("normal"===s.type){if(t=e.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(t="completed",e.method="throw",e.arg=s.arg)}}}(r,e,o),a}function p(r,n,e){try{return{type:"normal",arg:r.call(n,e)}}catch(r){return{type:"throw",arg:r}}}r.wrap=l;var d={};function u(){}function f(){}function m(){}var g={};g[a]=function(){return this};var b=Object.getPrototypeOf,h=b&&b(b(L([])));h&&h!==e&&t.call(h,a)&&(g=h);var x=m.prototype=u.prototype=Object.create(g);function y(r){["next","throw","return"].forEach((function(n){s(r,n,(function(r){return this._invoke(n,r)}))}))}function v(r,e){var i;this._invoke=function(a,o){function c(){return new e((function(i,c){!function i(a,o,c,s){var l=p(r[a],r,o);if("throw"!==l.type){var d=l.arg,u=d.value;return u&&"object"===n(u)&&t.call(u,"__await")?e.resolve(u.__await).then((function(r){i("next",r,c,s)}),(function(r){i("throw",r,c,s)})):e.resolve(u).then((function(r){d.value=r,c(d)}),(function(r){return i("throw",r,c,s)}))}s(l.arg)}(a,o,i,c)}))}return i=i?i.then(c,c):c()}}function w(r,n){var e=r.iterator[n.method];if(void 0===e){if(n.delegate=null,"throw"===n.method){if(r.iterator.return&&(n.method="return",n.arg=void 0,w(r,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var t=p(e,r.iterator,n.arg);if("throw"===t.type)return n.method="throw",n.arg=t.arg,n.delegate=null,d;var i=t.arg;return i?i.done?(n[r.resultName]=i.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,d):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function k(r){var n={tryLoc:r[0]};1 in r&&(n.catchLoc=r[1]),2 in r&&(n.finallyLoc=r[2],n.afterLoc=r[3]),this.tryEntries.push(n)}function _(r){var n=r.completion||{};n.type="normal",delete n.arg,r.completion=n}function j(r){this.tryEntries=[{tryLoc:"root"}],r.forEach(k,this),this.reset(!0)}function L(r){if(r){var n=r[a];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var e=-1,i=function n(){for(;++e<r.length;)if(t.call(r,e))return n.value=r[e],n.done=!1,n;return n.value=void 0,n.done=!0,n};return i.next=i}}return{next:z}}function z(){return{value:void 0,done:!0}}return f.prototype=x.constructor=m,m.constructor=f,f.displayName=s(m,c,"GeneratorFunction"),r.isGeneratorFunction=function(r){var n="function"==typeof r&&r.constructor;return!!n&&(n===f||"GeneratorFunction"===(n.displayName||n.name))},r.mark=function(r){return Object.setPrototypeOf?Object.setPrototypeOf(r,m):(r.__proto__=m,s(r,c,"GeneratorFunction")),r.prototype=Object.create(x),r},r.awrap=function(r){return{__await:r}},y(v.prototype),v.prototype[o]=function(){return this},r.AsyncIterator=v,r.async=function(n,e,t,i,a){void 0===a&&(a=Promise);var o=new v(l(n,e,t,i),a);return r.isGeneratorFunction(e)?o:o.next().then((function(r){return r.done?r.value:o.next()}))},y(x),s(x,c,"Generator"),x[a]=function(){return this},x.toString=function(){return"[object Generator]"},r.keys=function(r){var n=[];for(var e in r)n.push(e);return n.reverse(),function e(){for(;n.length;){var t=n.pop();if(t in r)return e.value=t,e.done=!1,e}return e.done=!0,e}},r.values=L,j.prototype={constructor:j,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!r)for(var n in this)"t"===n.charAt(0)&&t.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var r=this.tryEntries[0].completion;if("throw"===r.type)throw r.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function e(e,t){return o.type="throw",o.arg=r,n.next=e,t&&(n.method="next",n.arg=void 0),!!t}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],o=a.completion;if("root"===a.tryLoc)return e("end");if(a.tryLoc<=this.prev){var c=t.call(a,"catchLoc"),s=t.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return e(a.catchLoc,!0);if(this.prev<a.finallyLoc)return e(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return e(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return e(a.finallyLoc)}}}},abrupt:function(r,n){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc<=this.prev&&t.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===r||"continue"===r)&&a.tryLoc<=n&&n<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=r,o.arg=n,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(o)},complete:function(r,n){if("throw"===r.type)throw r.arg;return"break"===r.type||"continue"===r.type?this.next=r.arg:"return"===r.type?(this.rval=this.arg=r.arg,this.method="return",this.next="end"):"normal"===r.type&&n&&(this.next=n),d},finish:function(r){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===r)return this.complete(e.completion,e.afterLoc),_(e),d}},catch:function(r){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===r){var t=e.completion;if("throw"===t.type){var i=t.arg;_(e)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(r,n,e){return this.delegate={iterator:L(r),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),d}},r}("object"===n(r)?r.exports:{});try{regeneratorRuntime=e}catch(r){Function("r","regeneratorRuntime = r")(e)}}).call(this,e(2)(r))},function(r,n){r.exports=function(r){return r.webpackPolyfill||(r.deprecate=function(){},r.paths=[],r.children||(r.children=[]),Object.defineProperty(r,"loaded",{enumerable:!0,get:function(){return r.l}}),Object.defineProperty(r,"id",{enumerable:!0,get:function(){return r.i}}),r.webpackPolyfill=1),r}},function(r,n,e){var t=e(4),i=e(5);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[r.i,i,""]]);var a={insert:"head",singleton:!1};t(i,a);r.exports=i.locals||{}},function(r,n,e){"use strict";var t,i=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},a=function(){var r={};return function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}r[n]=e}return r[n]}}(),o=[];function c(r){for(var n=-1,e=0;e<o.length;e++)if(o[e].identifier===r){n=e;break}return n}function s(r,n){for(var e={},t=[],i=0;i<r.length;i++){var a=r[i],s=n.base?a[0]+n.base:a[0],l=e[s]||0,p="".concat(s," ").concat(l);e[s]=l+1;var d=c(p),u={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(o[d].references++,o[d].updater(u)):o.push({identifier:p,updater:b(u,n),references:1}),t.push(p)}return t}function l(r){var n=document.createElement("style"),t=r.attributes||{};if(void 0===t.nonce){var i=e.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(r){n.setAttribute(r,t[r])})),"function"==typeof r.insert)r.insert(n);else{var o=a(r.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var p,d=(p=[],function(r,n){return p[r]=n,p.filter(Boolean).join("\n")});function u(r,n,e,t){var i=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(r.styleSheet)r.styleSheet.cssText=d(n,i);else{var a=document.createTextNode(i),o=r.childNodes;o[n]&&r.removeChild(o[n]),o.length?r.insertBefore(a,o[n]):r.appendChild(a)}}function f(r,n,e){var t=e.css,i=e.media,a=e.sourceMap;if(i?r.setAttribute("media",i):r.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleSheet)r.styleSheet.cssText=t;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(t))}}var m=null,g=0;function b(r,n){var e,t,i;if(n.singleton){var a=g++;e=m||(m=l(n)),t=u.bind(null,e,a,!1),i=u.bind(null,e,a,!0)}else e=l(n),t=f.bind(null,e,n),i=function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(e)};return t(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap)return;t(r=n)}else i()}}r.exports=function(r,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=i());var e=s(r=r||[],n);return function(r){if(r=r||[],"[object Array]"===Object.prototype.toString.call(r)){for(var t=0;t<e.length;t++){var i=c(e[t]);o[i].references--}for(var a=s(r,n),l=0;l<e.length;l++){var p=c(e[l]);0===o[p].references&&(o[p].updater(),o.splice(p,1))}e=a}}}},function(r,n,e){(n=e(6)(!1)).push([r.i,"@import url(https://fonts.googleapis.com/css2?family=Caveat:wght@400;600&family=Montserrat:wght@100;200;300;600;800&display=swap);"]),n.push([r.i,'* {\r\n  margin: 0;\r\n  padding: 0;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n\r\nimg {\r\n  width: 100%;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\nheader {\r\n  width: 100%;\r\n  height: 700px;\r\n  background: url("/images/heros/bg0.jpeg");\r\n  background-size: cover;\r\n  background-position: center;\r\n  -webkit-animation: slideBg 15s linear infinite 0s;\r\n          animation: slideBg 15s linear infinite 0s;\r\n  -webkit-animation-timing-function: linear;\r\n          animation-timing-function: linear;\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  position: relative;\r\n}\r\n\r\nheader .logo {\r\n  width: 250px;\r\n  z-index: 4;\r\n}\r\n\r\nheader .nav {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  max-width: 1200px;\r\n  margin: auto;\r\n  padding: 0 1.5rem;\r\n  height: 150px;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  z-index: 4;\r\n}\r\n\r\nheader .nav .nav__title {\r\n  color: #2c2c2b;\r\n  font-family: "Caveat", cursive;\r\n  font-size: 2.2rem;\r\n}\r\n\r\nheader .nav .nav__list {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  gap: 1rem;\r\n  z-index: 4;\r\n}\r\n\r\nheader .nav .nav__list .nav__item a {\r\n  color: #e4dfcd;\r\n  font-family: "Montserrat", sans-serif;\r\n  cursor: pointer;\r\n  text-transform: uppercase;\r\n  letter-spacing: 2px;\r\n  -webkit-transition: 0.2s ease-in-out;\r\n  transition: 0.2s ease-in-out;\r\n  display: inline-block;\r\n  padding: 13px;\r\n  font-size: 0.8rem;\r\n  width: 100%;\r\n}\r\n\r\nheader .nav .nav__list .nav__item :hover {\r\n  color: rgba(243, 185, 50, 0.905);\r\n}\r\n\r\nheader .nav__btn {\r\n  display: none;\r\n}\r\n\r\nheader .jumbotron {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  text-align: center;\r\n}\r\n\r\nheader .jumbotron__text-wrap {\r\n  z-index: 4;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  color: #f8f2ce;\r\n  display: block;\r\n  max-width: 600px;\r\n  margin: auto;\r\n  font-family: "Montserrat", sans-serif;\r\n}\r\n\r\nheader .jumbotron__text-wrap h1 {\r\n  font-size: 2.7rem;\r\n  margin-top: 6rem;\r\n}\r\n\r\nheader .jumbotron__text-wrap h2 {\r\n  font-size: 1rem;\r\n  margin: 1.6rem 0;\r\n  line-height: 1.5;\r\n  font-weight: 600;\r\n  letter-spacing: 1px;\r\n}\r\n\r\nheader .jumbotron__btn-wrap {\r\n  z-index: 4;\r\n}\r\n\r\nheader .jumbotron__btn-wrap .btn-discover {\r\n  background: #ffb700;\r\n  border: none;\r\n  padding: 1rem 2rem;\r\n  text-transform: uppercase;\r\n  font-weight: 600;\r\n  letter-spacing: 1px;\r\n  border-radius: 25px;\r\n  cursor: pointer;\r\n  -webkit-transition: ease-in-out 0.5s;\r\n  transition: ease-in-out 0.5s;\r\n}\r\n\r\nheader .jumbotron__btn-wrap .btn-discover:hover {\r\n  -webkit-transform: scale(0.9);\r\n          transform: scale(0.9);\r\n}\r\n\r\nheader .jumbotron__btn-wrap .btn-contact {\r\n  padding: 1rem 2rem;\r\n  border-radius: 25px;\r\n  border: gold solid 1px;\r\n  background: transparent;\r\n  color: yellow;\r\n  cursor: pointer;\r\n  font-weight: 600;\r\n  margin-left: 0.5rem;\r\n  -webkit-transition: ease-in-out 0.5s;\r\n  transition: ease-in-out 0.5s;\r\n}\r\n\r\nheader .jumbotron__btn-wrap .btn-contact:hover {\r\n  background: #fcca04;\r\n  -webkit-transform: scale(0.9);\r\n          transform: scale(0.9);\r\n  color: #1f1d1d;\r\n}\r\n\r\nheader::after {\r\n  content: "";\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: black;\r\n  top: 0;\r\n  opacity: 0.7;\r\n  z-index: 0;\r\n}\r\n\r\n@media only screen and (max-width: 868px) {\r\n  header {\r\n    height: 670px;\r\n  }\r\n  header .nav__btn {\r\n    display: block;\r\n    border: none;\r\n    font-size: 2.1rem;\r\n    background: none;\r\n    cursor: pointer;\r\n    padding: 0 px;\r\n    color: white;\r\n  }\r\n  header .nav {\r\n    position: relative;\r\n    z-index: 9;\r\n  }\r\n  header .nav .nav__list {\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    position: absolute;\r\n    width: 98%;\r\n    z-index: 10;\r\n    background: #1f1d1d;\r\n    -webkit-transform: translate(-1000px, 250px);\r\n            transform: translate(-1000px, 250px);\r\n    -webkit-transition: 0.2s ease-in-out;\r\n    transition: 0.2s ease-in-out;\r\n    padding: 2rem;\r\n  }\r\n  header .nav .nav__list .nav__item {\r\n    z-index: 88;\r\n  }\r\n  header .nav .nav__list .nav__item a {\r\n    font-size: 1.5rem;\r\n  }\r\n  header .nav .nav__title {\r\n    font-size: 2.1rem;\r\n  }\r\n  header .nav .show {\r\n    -webkit-transform: translate(-40px, 250px);\r\n            transform: translate(-40px, 250px);\r\n  }\r\n  header .jumbotron__text-wrap {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    color: white;\r\n  }\r\n  header .jumbotron__text-wrap h1 {\r\n    font-size: 1.5rem;\r\n    padding: 0 1rem;\r\n    font-family: "Montserrat", sans-serif;\r\n  }\r\n  header .jumbotron__text-wrap h2 {\r\n    margin: 1rem 0;\r\n    padding: 0 1rem;\r\n    font-size: 0.8rem;\r\n    font-weight: 400;\r\n    line-height: 1.5;\r\n    font-family: "Montserrat", sans-serif;\r\n  }\r\n  header .jumbotron__btn-wrap .btn-contact {\r\n    font-size: 0.7rem;\r\n    padding: 0.8rem 1.5rem;\r\n  }\r\n  header .jumbotron__btn-wrap .btn-discover {\r\n    font-size: 0.7rem;\r\n    padding: 0.8rem 1.5rem;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes slideBg {\r\n  0% {\r\n    background-image: url("/images/heros/bg0.jpeg");\r\n  }\r\n  25% {\r\n    background-image: url("/images/heros/bg1.jpeg");\r\n  }\r\n  50% {\r\n    background-image: url("/images/heros/bg2.jpeg");\r\n  }\r\n  75% {\r\n    background-image: url("/images/heros/bg3.jpeg");\r\n  }\r\n  100% {\r\n    background-image: url("/images/heros/bg0.jpeg");\r\n  }\r\n}\r\n\r\n@keyframes slideBg {\r\n  0% {\r\n    background-image: url("/images/heros/bg0.jpeg");\r\n  }\r\n  25% {\r\n    background-image: url("/images/heros/bg1.jpeg");\r\n  }\r\n  50% {\r\n    background-image: url("/images/heros/bg2.jpeg");\r\n  }\r\n  75% {\r\n    background-image: url("/images/heros/bg3.jpeg");\r\n  }\r\n  100% {\r\n    background-image: url("/images/heros/bg0.jpeg");\r\n  }\r\n}\r\n\r\n.stripe {\r\n  height: 180px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -ms-flex-pack: distribute;\r\n      justify-content: space-around;\r\n  background-image: linear-gradient(36deg, #ebbd05 25%, #e0d20b 25%, #e0d20b 50%, #ebbd05 50%, #ebbd05 75%, #e0d20b 75%, #e0d20b 100%);\r\n  background-size: 102.08px 74.16px;\r\n  color: #080824;\r\n}\r\n\r\n.stripe h3 {\r\n  font-family: "Montserrat", sans-serif;\r\n  text-transform: capitalize;\r\n  font-size: 1.6rem;\r\n  line-height: 1.5;\r\n}\r\n\r\n.stripe .stripe-wrap {\r\n  width: 1200px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n}\r\n\r\n.stripe .btn-stripe {\r\n  padding: 1.2rem 2.7rem;\r\n  border: #f3efef solid 3px;\r\n  border-radius: 50px;\r\n  text-transform: uppercase;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  background: #fcf9f9;\r\n  color: #130101;\r\n  box-shadow: 10px 10px 5px -7px rgba(0, 0, 0, 0.75);\r\n  -webkit-box-shadow: 10px 10px 5px -7px rgba(0, 0, 0, 0.75);\r\n  -moz-box-shadow: 10px 10px 5px -7px rgba(0, 0, 0, 0.75);\r\n}\r\n\r\n@media only screen and (max-width: 868px) {\r\n  .stripe {\r\n    padding: 0 1rem;\r\n  }\r\n  .stripe h3 {\r\n    font-size: 0.8rem;\r\n  }\r\n  .stripe .btn-stripe {\r\n    margin-top: 1rem;\r\n    padding: 0.5rem 2rem;\r\n    font-size: 0.7rem;\r\n  }\r\n  .stripe .stripe-wrap {\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n  }\r\n}\r\n\r\n.welcome {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: (minmax(400px, 1fr))[auto-fit];\r\n      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\r\n  gap: 3rem;\r\n  max-width: 1200px;\r\n  margin: 9rem auto;\r\n}\r\n\r\n.welcome__text-wrap {\r\n  color: #48484b;\r\n}\r\n\r\n.welcome__text-wrap .btn-welcome {\r\n  margin-top: 1rem;\r\n  border: none;\r\n  padding: 1rem 3rem;\r\n  border-radius: 25px;\r\n  background: gold;\r\n  font-size: 1rem;\r\n  box-shadow: 10px 10px 5px -7px rgba(0, 0, 0, 0.75);\r\n  -webkit-box-shadow: 10px 10px 5px -7px rgba(0, 0, 0, 0.75);\r\n  -moz-box-shadow: 10px 10px 5px -7px rgba(0, 0, 0, 0.75);\r\n  cursor: pointer;\r\n  -webkit-transition: all ease-in-out 0.3s;\r\n  transition: all ease-in-out 0.3s;\r\n}\r\n\r\n.welcome__text-wrap .btn-welcome:hover {\r\n  -webkit-transform: scale(1.1);\r\n          transform: scale(1.1);\r\n}\r\n\r\n.welcome__text-wrap h3 {\r\n  font-size: 1.6rem;\r\n  color: #0b0b3f;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  margin-top: 0.5rem;\r\n}\r\n\r\n.welcome__text-wrap h4 {\r\n  margin: 1.6rem 0;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 0.9rem;\r\n  font-weight: 200;\r\n  line-height: 1.2;\r\n  letter-spacing: 1px;\r\n  color: #0b0b3f;\r\n}\r\n\r\n.welcome__text-wrap .welcome-signature {\r\n  display: block;\r\n  width: 200px;\r\n}\r\n\r\n.welcome__image-wrap {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: (minmax(200px, 1fr))[auto-fit];\r\n      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r\n  gap: 10px;\r\n  padding: 1rem;\r\n  border-radius: 2px;\r\n  position: relative;\r\n}\r\n\r\n.welcome__image-wrap .wrap {\r\n  height: 200px;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-transition: all ease-in 0.5s;\r\n  transition: all ease-in 0.5s;\r\n}\r\n\r\n.welcome__image-wrap .wrap::after {\r\n  content: "";\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: black;\r\n  border-radius: 10px;\r\n  top: 0;\r\n  opacity: 0.7;\r\n  -webkit-transition: all ease-in 0.5s;\r\n  transition: all ease-in 0.5s;\r\n}\r\n\r\n.welcome__image-wrap .wrap h5 {\r\n  color: #f8f1f1;\r\n  position: relative;\r\n  z-index: 7;\r\n  font-family: "Montserrat", sans-serif;\r\n  font-size: 1rem;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.welcome__image-wrap .wrap:hover::after {\r\n  width: 100%;\r\n  height: 0;\r\n}\r\n\r\n.welcome__image-wrap .hotel {\r\n  background: url("https://images.pexels.com/photos/1057858/pexels-photo-1057858.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");\r\n  background-position: center;\r\n  background-size: cover;\r\n  position: relative;\r\n  top: -3rem;\r\n}\r\n\r\n.welcome__image-wrap .hotel h5 {\r\n  font-size: 1rem;\r\n  padding: 0 1rem;\r\n  text-align: center;\r\n}\r\n\r\n.welcome__image-wrap .shopping-center {\r\n  background: url("/images/heros/hotel.jpg");\r\n  background-position: center;\r\n  background-size: cover;\r\n  position: relative;\r\n}\r\n\r\n.welcome__image-wrap .office-space {\r\n  background: url("https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");\r\n  background-position: center;\r\n  background-size: cover;\r\n  position: relative;\r\n  top: -3rem;\r\n}\r\n\r\n.welcome__image-wrap .industry {\r\n  background: url("/images/heros/factory.jpg");\r\n  background-position: center;\r\n  background-size: cover;\r\n  position: relative;\r\n  top: -3rem;\r\n}\r\n\r\n.welcome__image-wrap .factory {\r\n  background: url("/images/heros/factory.jpg");\r\n  background-position: center;\r\n  background-size: cover;\r\n  position: relative;\r\n}\r\n\r\n.welcome__image-wrap .factory h5 {\r\n  font-size: 1rem;\r\n  padding: 0 2rem;\r\n  text-align: center;\r\n}\r\n\r\n@media only screen and (max-width: 868px) {\r\n  .welcome {\r\n    margin: 1.9rem 0;\r\n    width: 100%;\r\n    -ms-grid-columns: 1fr;\r\n        grid-template-columns: 1fr;\r\n  }\r\n  .welcome__text-wrap {\r\n    padding: 0 1rem;\r\n  }\r\n  .welcome__text-wrap h3 {\r\n    text-align: center;\r\n    font-size: 1.2rem;\r\n  }\r\n  .welcome__text-wrap h4 {\r\n    font-size: 1rem;\r\n    margin: 1rem 0;\r\n  }\r\n  .welcome__text-wrap .btn-welcome {\r\n    margin-top: 0.7rem;\r\n    padding: 0.8rem 2.6rem;\r\n    font-size: 0.9rem;\r\n  }\r\n  .welcome__text-wrap .wrap {\r\n    position: static;\r\n  }\r\n  .welcome__image-wrap .hotel, .welcome__image-wrap .shopping-center, .welcome__image-wrap .factory, .welcome__image-wrap .office-space {\r\n    top: 0;\r\n  }\r\n}\r\n\r\n[data-tab-content] {\r\n  display: none;\r\n}\r\n\r\n.active[data-tab-content] {\r\n  display: block;\r\n}\r\n\r\n.tab.active {\r\n  background: #dbecf2;\r\n  color: #090958;\r\n}\r\n\r\n.main-service .container {\r\n  max-width: 1200px;\r\n  margin: auto;\r\n  font-family: "Montserrat", sans-serif;\r\n}\r\n\r\n.main-service .container h2 {\r\n  margin-top: 3rem;\r\n  text-transform: uppercase;\r\n  margin-bottom: 1rem;\r\n  text-decoration: underline;\r\n}\r\n\r\n.main-service .container h2::after {\r\n  content: " :";\r\n}\r\n\r\n.main-service .container .tabs {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n.main-service .container .tabs .tab {\r\n  border: #dcdced solid 1px;\r\n  width: 100%;\r\n  cursor: pointer;\r\n  padding: 1rem;\r\n  text-align: center;\r\n  font-size: 1.2rem;\r\n  font-weight: 800;\r\n  text-transform: capitalize;\r\n  -webkit-clip-path: polygon(0 0, 91% 0, 100% 100%, 0% 100%);\r\n          clip-path: polygon(0 0, 91% 0, 100% 100%, 0% 100%);\r\n}\r\n\r\n.main-service .container .tab-content {\r\n  background: #dbecf2;\r\n  padding: 0 1rem 2rem 1rem;\r\n  height: 460px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.main-service .container .tab-content #satu .text-wrap {\r\n  padding-right: 15rem;\r\n}\r\n\r\n.main-service .container .tab-content #satu .text-wrap h3 {\r\n  text-transform: capitalize;\r\n  color: #090958;\r\n}\r\n\r\n.main-service .container .tab-content #satu .text-wrap h4 {\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n  text-align: left;\r\n}\r\n\r\n.main-service .container .tab-content #satu .img-wrap {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  gap: 10px;\r\n}\r\n\r\n.main-service .container .tab-content #dua .container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.main-service .container .tab-content #dua .container .card {\r\n  width: 400px;\r\n  height: 250px;\r\n  overflow: hidden;\r\n}\r\n\r\n.main-service .container .tab-content #dua .container .card h3 {\r\n  margin: 10px 0;\r\n  color: #090958;\r\n  text-transform: capitalize;\r\n}\r\n\r\n.main-service .container .tab-content #tiga .container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.main-service .container .tab-content #tiga .container .card {\r\n  width: 400px;\r\n  height: 250px;\r\n  overflow: hidden;\r\n}\r\n\r\n.main-service .container .tab-content #tiga .container .card h3 {\r\n  margin: 10px 0;\r\n  color: #090958;\r\n  text-transform: capitalize;\r\n}\r\n\r\n.main-service .container .tab-content #satu-2 .container {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: (minmax(250px, 1fr))[auto-fit];\r\n      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  gap: 10px;\r\n  margin-top: 4rem;\r\n  height: 100%;\r\n}\r\n\r\n.main-service .container .tab-content #dua-2 .container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  gap: 5px;\r\n}\r\n\r\n.main-service .container .tab-content #dua-2 .container .card {\r\n  width: 300px;\r\n}\r\n\r\n.main-service .container .tab-content #infra-1 .container {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: (minmax(200px, 1fr))[auto-fit];\r\n      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r\n  gap: 10px;\r\n}\r\n\r\n.main-service .container .tab-content #infra-2 .container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.main-service .container .tab-content #infra-2 .container .card {\r\n  width: 350px;\r\n}\r\n\r\n.main-service .container .tab-content #infra-3 .container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  gap: 10px;\r\n}\r\n\r\n.main-service .container .tab-content #infra-3 .container .card {\r\n  width: 400px;\r\n}\r\n\r\n.main-service .container .tab-content #property-1 .container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  gap: 10px;\r\n}\r\n\r\n.main-service .container .tab-content #property-1 .container .card {\r\n  width: 380px;\r\n}\r\n\r\n.main-service .container .tab-content #property-2 .container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n.main-service .container .tab-content #property-2 .container .card {\r\n  width: 500px;\r\n}\r\n\r\n.main-service .container .tab-content #funding-1 .container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  gap: 1rem;\r\n}\r\n\r\n.main-service .container .tab-content #funding-1 .container .card {\r\n  width: 400px;\r\n}\r\n\r\n.main-service .container h4, .main-service .container h5 {\r\n  text-align: center;\r\n  margin: 1rem 0;\r\n}\r\n\r\n.main-service .container .logo-wika {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: (minmax(200px, 1fr))[auto-fit];\r\n      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n.main-service .container .logo-wika .card {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n.main-service .container .logo-wika .card .logo-wika-konstruksi {\r\n  text-align: center;\r\n  width: 200px;\r\n}\r\n\r\n.main-service .container .logo-wika .card .logo-wika-gedung {\r\n  width: 200px;\r\n}\r\n\r\n[data-energy-content] {\r\n  display: none;\r\n}\r\n\r\n.active[data-energy-content] {\r\n  display: block;\r\n}\r\n\r\n[data-infra-content] {\r\n  display: none;\r\n}\r\n\r\n.active[data-infra-content] {\r\n  display: block;\r\n}\r\n\r\n[data-property-content] {\r\n  display: none;\r\n}\r\n\r\n.active[data-property-content] {\r\n  display: block;\r\n}\r\n\r\n.skip-link {\r\n  position: absolute;\r\n  top: -40px;\r\n  left: 0;\r\n  background-color: #bf1722;\r\n  color: white;\r\n  padding: 8px;\r\n  z-index: 100;\r\n}\r\n\r\n.skip-link:focus {\r\n  top: 0;\r\n}',""]),r.exports=n},function(r,n,e){"use strict";r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e=function(r,n){var e=r[1]||"",t=r[3];if(!t)return e;if(n&&"function"==typeof btoa){var i=(o=t,c=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),a=t.sources.map((function(r){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(r," */")}));return[e].concat(a).concat([i]).join("\n")}var o,c,s;return[e].join("\n")}(n,r);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(r,e,t){"string"==typeof r&&(r=[[null,r,""]]);var i={};if(t)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(i[o]=!0)}for(var c=0;c<r.length;c++){var s=[].concat(r[c]);t&&i[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),n.push(s))}},n}}]);