(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09b1a2d4"],{"0a06":function(e,t,n){"use strict";var r=n("2444"),o=n("c532"),i=n("f6b4"),s=n("5270");function a(e){this.defaults=e,this.interceptors={request:new i,response:new i}}a.prototype.request=function(e){"string"===typeof e&&(e=o.merge({url:arguments[0]},arguments[1])),e=o.merge(r,{method:"get"},this.defaults,e),e.method=e.method.toLowerCase();var t=[s,void 0],n=Promise.resolve(e);this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));while(t.length)n=n.then(t.shift(),t.shift());return n},o.forEach(["delete","get","head","options"],(function(e){a.prototype[e]=function(t,n){return this.request(o.merge(n||{},{method:e,url:t}))}})),o.forEach(["post","put","patch"],(function(e){a.prototype[e]=function(t,n,r){return this.request(o.merge(r||{},{method:e,url:t,data:n}))}})),e.exports=a},"0df6":function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},"1d2b":function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},2444:function(e,t,n){"use strict";(function(t){var r=n("c532"),o=n("c8af"),i={"Content-Type":"application/x-www-form-urlencoded"};function s(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function a(){var e;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof t)&&(e=n("b50d")),e}var c={adapter:a(),transformRequest:[function(e,t){return o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(s(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(s(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(i)})),e.exports=c}).call(this,n("4362"))},2924:function(e,t,n){e.exports=n.p+"img/网页1-展示2.6a756de8.jpg"},"2d83":function(e,t,n){"use strict";var r=n("387f");e.exports=function(e,t,n,o,i){var s=new Error(e);return r(s,t,n,o,i)}},"2e67":function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},"30b5":function(e,t,n){"use strict";var r=n("c532");function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var s=[];r.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),s.push(o(t)+"="+o(e))})))})),i=s.join("&")}return i&&(e+=(-1===e.indexOf("?")?"?":"&")+i),e}},3187:function(e,t,n){e.exports=n.p+"img/图标2.1f85d145.jpg"},"387f":function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e}},3934:function(e,t,n){"use strict";var r=n("c532");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return function(){return!0}}()},4362:function(e,t,n){t.nextTick=function(e){var t=Array.prototype.slice.call(arguments);t.shift(),setTimeout((function(){e.apply(null,t)}),0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,r="/";t.cwd=function(){return r},t.chdir=function(t){e||(e=n("df7c")),r=e.resolve(t,r)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},4454:function(e,t,n){"use strict";n("c76b")},"45dc":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"home"},[e._m(0),t("div",{staticClass:"content"},[t("div",{staticClass:"left"},[t("div",{staticClass:"head",on:{click:e.toPage}},[t("img",{attrs:{src:n("eb4e"),alt:""}}),t("span",[e._v("Promoter Strength Prediction")])]),e._m(1),e._m(2),e._m(3)]),t("div",{staticClass:"right"},[e._m(4),e._m(5),t("div",{staticClass:"bottom"},[t("div",{staticClass:"form-item"},[t("div",{staticClass:"form-item-wrap"},[t("span",[e._v("Project name:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.project_name,expression:"form.project_name"}],attrs:{type:"text"},domProps:{value:e.form.project_name},on:{input:function(t){t.target.composing||e.$set(e.form,"project_name",t.target.value)}}})])]),e._m(6),t("div",{staticClass:"promoter-sequences"},[t("div",{staticClass:"promoter-sequences-left"},[t("div",{staticClass:"form-item"},[t("div",{staticClass:"form-item-wrap"},[t("span",[e._v("Promoter Sequences:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.sequence,expression:"form.sequence"}],attrs:{type:"text"},domProps:{value:e.form.sequence},on:{input:function(t){t.target.composing||e.$set(e.form,"sequence",t.target.value)}}})]),t("p",[e._v("(Enter a 35 bp Promoter sequence starting from -35 region.)")])])]),t("div",{staticClass:"promoter-sequences-right"},[t("div",{staticClass:"upload"},[t("input",{attrs:{type:"file"},on:{change:e.uploadFile}}),e._m(7),t("p",{staticClass:"upload-txt"},[e._v("Upload")])]),t("div",{staticClass:"submit-button",on:{click:e.onsubmit}},[e._v(" Submit ")])])]),t("div",{staticClass:"download-list"},[t("div",{staticClass:"download-item",on:{click:function(t){return e.downloadResult("tf_predictions.csv")}}},[t("img",{attrs:{src:n("3187"),alt:""}}),t("p",[e._v("Transformer Result")])]),t("div",{staticClass:"download-item",on:{click:function(t){return e.downloadResult("cnn_predictions.csv")}}},[t("img",{attrs:{src:n("3187"),alt:""}}),t("p",[e._v("CNN Result")])]),t("div",{staticClass:"download-item",on:{click:function(t){return e.downloadResult("lstm_predictions.csv")}}},[t("img",{attrs:{src:n("3187"),alt:""}}),t("p",[e._v("LSTM Result")])])])])])]),e._m(8)])},o=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"header"},[t("div",{staticClass:"title"},[t("span",[e._v("Intelligent Design of "),t("i",[e._v("Escherichia coli")]),e._v("  Core Promoters")])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"body"},[t("p",[e._v("Description of the promoter strength prediction model:")]),t("p",[e._v(" We developed transcriptional intensity prediction models using a synthetic promoter library with 112,955 sequences. The models include a transformer, a Convolutional Neural Network (CNN), and a Long Short-Term Memory (LSTM) framework. Each model's prediction results showed high correlation with experimental data, with coefficients of 0.86, 0.79, and 0.84, respectively. ")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"head",staticStyle:{opacity:"0.3"}},[t("img",{attrs:{src:n("4a15"),alt:""}}),t("span",[e._v("De novo Promoter Generation")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"body",staticStyle:{opacity:"0.3"}},[t("p",[e._v("Description of the "),t("i",[e._v("de novo")]),e._v(" promoter generation model:")]),t("p",[e._v(" We developed transcriptional intensity prediction models using a synthetic promoter library with 112,955 sequences.We divided the promoters into 8 sublibraries based on the log2 values of their strength, with the following ranges: >10.5, 3.98-10.5, 1.51-3.98, 0.57-1.51, 0.217-0.57, 0.082-0.217, and <0.031. Using these strength levels, we developed a conditional diffusion model to generate novel promoter sequences with target strengths. Experimental validation showed a high correlation of 0.92 between predicted and actual results. ")]),t("p",[e._v(" Here, we will use a Transformer model to predict the strength of sequences generated by a conditional Diffusion model. Based on the prediction results, we will score the generated novel sequences to select the most optimal ones for your reference. ")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"top"},[t("div",{staticClass:"title-name"},[e._v("Model Performance Display:")]),t("div",{staticClass:"title-desc"},[t("div",{staticClass:"title-desc-item"},[t("img",{attrs:{src:n("eb59"),alt:""}}),t("p",[e._v("Transformer")])]),t("div",{staticClass:"title-desc-item"},[t("img",{attrs:{src:n("2924"),alt:""}}),t("p",[e._v("CNN")])]),t("div",{staticClass:"title-desc-item"},[t("img",{attrs:{src:n("d222"),alt:""}}),t("p",[e._v("LSTM")])])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"title"},[t("p",[t("i",[e._v("Let's start your project!")])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"example-wrap"},[t("p",[e._v("Example: pTrc* promoter")]),t("p",[e._v("Promoter Sequences: "),t("span",{staticStyle:{background:"#cfe7eb"}},[e._v("TTGACA")]),e._v("ATTAATCATCCGGCTCG"),t("span",{staticStyle:{background:"#f5e2bb"}},[e._v("TATAAT")]),e._v("GTGTGG")]),t("p",[t("span",[e._v("-35 Region")]),t("span",[e._v("-10 Region")])]),t("table",[t("tr",{staticClass:"table-head"},[t("th",[e._v("Model Type")]),t("th",[e._v("Transformer")]),t("th",[e._v("CNN")]),t("th",[e._v("LSTM")])]),t("tr",{staticClass:"table-body"},[t("td",{staticClass:"cell"},[e._v("Result")]),t("td",{staticClass:"cell"},[e._v("13.02161")]),t("td",{staticClass:"cell"},[e._v("16.51062012")]),t("td",{staticClass:"cell"},[e._v("7.536083221")])])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"image-wrap"},[t("img",{attrs:{src:n("a7fe"),alt:""}}),t("p",[e._v(".txt")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"footer"},[t("p",[e._v("Articles to Cite:")]),t("p",[e._v("Zhou X,Feng RX,Liu yang, Zhou SH*,Deng Y*.(2024)A deep learning-based forwarad and reverse engineering platform for rational design of Eschericha coli core pormoters.")])])}],i=n("bc3a"),s=n.n(i),a={data:function(){return{form:{project_name:"",sequence:"",file:null},fileName:"",top_sequences:[{sequence:"GTGACATTTTGAATTTGAAGTATTATAATGTGTGG",strength:"253.547558",score:"100"}],isSubmit:!1}},methods:{onsubmit:function(){var e=this,t=new FormData;t.append("project_name",this.form.project_name),t.append("sequence",this.form.sequence),t.append("file",this.form.file),s.a.post("http://139.129.26.28:81/submit",t).then((function(){e.isSubmit=!0}))},downloadResult:function(e){if(!this.isSubmit)return alert("请先提交"),!1;var t=document.createElement("a");t.href="http://139.129.26.28:81/download/".concat(e),t.download=this.fileName,t.click()},uploadFile:function(e){console.log(e.target.files),this.form.file=e.target.files[0],console.log(this.form)},toPage:function(){console.log("toPage"),window.open("http://139.129.26.28:80/")}}},c=a,u=(n("4454"),n("2877")),f=Object(u["a"])(c,r,o,!1,null,"136277ba",null);t["default"]=f.exports},"467f":function(e,t,n){"use strict";var r=n("2d83");e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},"4a15":function(e,t){e.exports="data:image/png;base64,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"},5270:function(e,t,n){"use strict";var r=n("c532"),o=n("c401"),i=n("2e67"),s=n("2444"),a=n("d925"),c=n("e683");function u(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){u(e),e.baseURL&&!a(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]}));var t=e.adapter||s.adapter;return t(e).then((function(t){return u(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(u(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},"7a77":function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},"7aac":function(e,t,n){"use strict";var r=n("c532");e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,i,s){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},"8df4":function(e,t,n){"use strict";var r=n("7a77");function o(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e,t=new o((function(t){e=t}));return{token:t,cancel:e}},e.exports=o},a7fe:function(e,t,n){e.exports=n.p+"img/图标1.42347d38.jpg"},b50d:function(e,t,n){"use strict";var r=n("c532"),o=n("467f"),i=n("30b5"),s=n("c345"),a=n("3934"),c=n("2d83");e.exports=function(e){return new Promise((function(t,u){var f=e.data,l=e.headers;r.isFormData(f)&&delete l["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var d=e.auth.username||"",h=e.auth.password||"";l.Authorization="Basic "+btoa(d+":"+h)}if(p.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?s(p.getAllResponseHeaders()):null,r=e.responseType&&"text"!==e.responseType?p.response:p.responseText,i={data:r,status:p.status,statusText:p.statusText,headers:n,config:e,request:p};o(t,u,i),p=null}},p.onerror=function(){u(c("Network Error",e,null,p)),p=null},p.ontimeout=function(){u(c("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var m=n("7aac"),v=(e.withCredentials||a(e.url))&&e.xsrfCookieName?m.read(e.xsrfCookieName):void 0;v&&(l[e.xsrfHeaderName]=v)}if("setRequestHeader"in p&&r.forEach(l,(function(e,t){"undefined"===typeof f&&"content-type"===t.toLowerCase()?delete l[t]:p.setRequestHeader(t,e)})),e.withCredentials&&(p.withCredentials=!0),e.responseType)try{p.responseType=e.responseType}catch(g){if("json"!==e.responseType)throw g}"function"===typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),u(e),p=null)})),void 0===f&&(f=null),p.send(f)}))}},bc3a:function(e,t,n){e.exports=n("cee4")},c345:function(e,t,n){"use strict";var r=n("c532"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,s={};return e?(r.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(s[t]&&o.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([n]):s[t]?s[t]+", "+n:n}})),s):s}},c401:function(e,t,n){"use strict";var r=n("c532");e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},c532:function(e,t,n){"use strict";var r=n("1d2b"),o=n("c7ce"),i=Object.prototype.toString;function s(e){return"[object Array]"===i.call(e)}function a(e){return"[object ArrayBuffer]"===i.call(e)}function c(e){return"undefined"!==typeof FormData&&e instanceof FormData}function u(e){var t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer,t}function f(e){return"string"===typeof e}function l(e){return"number"===typeof e}function p(e){return"undefined"===typeof e}function d(e){return null!==e&&"object"===typeof e}function h(e){return"[object Date]"===i.call(e)}function m(e){return"[object File]"===i.call(e)}function v(e){return"[object Blob]"===i.call(e)}function g(e){return"[object Function]"===i.call(e)}function y(e){return d(e)&&g(e.pipe)}function w(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams}function A(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function b(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function C(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),s(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}function x(){var e={};function t(t,n){"object"===typeof e[n]&&"object"===typeof t?e[n]=x(e[n],t):e[n]=t}for(var n=0,r=arguments.length;n<r;n++)C(arguments[n],t);return e}function T(e,t,n){return C(t,(function(t,o){e[o]=n&&"function"===typeof t?r(t,n):t})),e}e.exports={isArray:s,isArrayBuffer:a,isBuffer:o,isFormData:c,isArrayBufferView:u,isString:f,isNumber:l,isObject:d,isUndefined:p,isDate:h,isFile:m,isBlob:v,isFunction:g,isStream:y,isURLSearchParams:w,isStandardBrowserEnv:b,forEach:C,merge:x,extend:T,trim:A}},c76b:function(e,t,n){},c7ce:function(e,t){
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&null!=e.constructor&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},c8af:function(e,t,n){"use strict";var r=n("c532");e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},cee4:function(e,t,n){"use strict";var r=n("c532"),o=n("1d2b"),i=n("0a06"),s=n("2444");function a(e){var t=new i(e),n=o(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n}var c=a(s);c.Axios=i,c.create=function(e){return a(r.merge(s,e))},c.Cancel=n("7a77"),c.CancelToken=n("8df4"),c.isCancel=n("2e67"),c.all=function(e){return Promise.all(e)},c.spread=n("0df6"),e.exports=c,e.exports.default=c},d222:function(e,t,n){e.exports=n.p+"img/网页1-展示3.5c0f56ef.jpg"},d925:function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},df7c:function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var o=e[r];"."===o?e.splice(r,1):".."===o?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function r(e){"string"!==typeof e&&(e+="");var t,n=0,r=-1,o=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!o){n=t+1;break}}else-1===r&&(o=!1,r=t+1);return-1===r?"":e.slice(n,r)}function o(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var t="",r=!1,i=arguments.length-1;i>=-1&&!r;i--){var s=i>=0?arguments[i]:e.cwd();if("string"!==typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(t=s+"/"+t,r="/"===s.charAt(0))}return t=n(o(t.split("/"),(function(e){return!!e})),!r).join("/"),(r?"/":"")+t||"."},t.normalize=function(e){var r=t.isAbsolute(e),s="/"===i(e,-1);return e=n(o(e.split("/"),(function(e){return!!e})),!r).join("/"),e||r||(e="."),e&&s&&(e+="/"),(r?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(o(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var n=e.length-1;n>=0;n--)if(""!==e[n])break;return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var o=r(e.split("/")),i=r(n.split("/")),s=Math.min(o.length,i.length),a=s,c=0;c<s;c++)if(o[c]!==i[c]){a=c;break}var u=[];for(c=a;c<o.length;c++)u.push("..");return u=u.concat(i.slice(a)),u.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,o=!0,i=e.length-1;i>=1;--i)if(t=e.charCodeAt(i),47===t){if(!o){r=i;break}}else o=!1;return-1===r?n?"/":".":n&&1===r?"/":e.slice(0,r)},t.basename=function(e,t){var n=r(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,n=0,r=-1,o=!0,i=0,s=e.length-1;s>=0;--s){var a=e.charCodeAt(s);if(47!==a)-1===r&&(o=!1,r=s+1),46===a?-1===t?t=s:1!==i&&(i=1):-1!==t&&(i=-1);else if(!o){n=s+1;break}}return-1===t||-1===r||0===i||1===i&&t===r-1&&t===n+1?"":e.slice(t,r)};var i="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("4362"))},e683:function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},eb4e:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAABFCAYAAABE8rgwAAAACXBIWXMAAC4jAAAuIwF4pT92AAACu0lEQVR4nO2c0VHbQBCGN5q84w5wB/Hc7LudCuIOIBVAByEVhFQQ6IAOsN9vNKYD0gGpwBklC8xYkn2S2bN+83+PtvAd91nn2907fViv14JAUB2JyJ2ITB27+7OM8RJiQESkGEAfUlk4i6u4CKpXzm28GRDygupMRD5lau48Uzt7g3Tn5eIUpaOUBwzlAUN5wFAeMB+P6H+5FZHHhOtmGUKOLByTvJsyxsWuiyyOOwp5nDaBoTxgKA8YygOG8oChPGCOKVQ4GEF1LCJjh/YfyxhbY1fK2wMrEN+IyBfHNpYiMi9jfNp8j9Pmflx7ijOmtoOgBuXtx1mmdqZBdbL5IuXhMNrsKeUBQ3nAUB4wlAcM4zxflrbfdBfjPitXyvNlUca4cxOv7UvtLI/TJjCUBwzlAUN5wFAeMJQHTGuoYLWqWib7jVg11adINxrlBdVzq1WdeI1nUP2eEgORdmrTppX0f3mKM74F1Tnd9KfpNy/nyVCYU6hD5NALllqBkaTD1SYwlAcM5QFDecD0red9TrzuOuPzU94dveSlnECV/zEjsyiOcNoEptedZ2X7FHLGcZOgmnKdx4GQ1rYSx6pXDrnvb959z7/z5McA+3TmuSWe0yYwlAcM5QFDecAcWt4Q48A/A+hDE0knYxtPYTpxk/KxlhTINahJfTKWrj155aGMcbX5Yk2eXfQ1w2BVD+Pu8kWp4qXfjv0Rk9Fla8Y8g8CHtqJ169PdnTcgbX3KwTY6JAi68tT07U7s08QrIbEtFQnzaH5Sh6tNYCgPGMoDhvKAeakq2CruktvxBk21Qr96Xqn/W20G1Wq7wsV7HxkQqvh7VoU1hcUoFIfDyXMWrLAsAcHitLrpuGDBZVQMNLNPdrMqLIs+1DIIaea2Opxa2AnVGQXCsLSQ7jUxbVWEeeatcaQbdy+VDxH5C/wBmCiF8BewAAAAAElFTkSuQmCC"},eb59:function(e,t,n){e.exports=n.p+"img/网页1-展示1.c3020ff6.jpg"},f6b4:function(e,t,n){"use strict";var r=n("c532");function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o}}]);
//# sourceMappingURL=chunk-09b1a2d4.995ffd55.js.map