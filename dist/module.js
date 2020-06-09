/*! For license information please see module.js.LICENSE.txt */
define(["react","@grafana/data","@grafana/ui"],(function(__WEBPACK_EXTERNAL_MODULE__1__,__WEBPACK_EXTERNAL_MODULE__2__,__WEBPACK_EXTERNAL_MODULE__4__){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=54)}([function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return u})),n.d(e,"d",(function(){return c}));var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function o(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var a=function(){return(a=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function u(t,e,n,r){return new(n||(n=Promise))((function(o,a){function u(t){try{i(r.next(t))}catch(t){a(t)}}function c(t){try{i(r.throw(t))}catch(t){a(t)}}function i(t){t.done?o(t.value):new n((function(e){e(t.value)})).then(u,c)}i((r=r.apply(t,e||[])).next())}))}function c(t,e){var n,r,o,a,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return u.label++,{value:a[1],done:!1};case 5:u.label++,r=a[1],a=[0];continue;case 7:a=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){u=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){u.label=a[1];break}if(6===a[0]&&u.label<o[1]){u.label=o[1],o=a;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(a);break}o[2]&&u.ops.pop(),u.trys.pop();continue}a=e.call(t,u)}catch(t){a=[6,t],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}},function(t,e){t.exports=__WEBPACK_EXTERNAL_MODULE__1__},function(t,e){t.exports=__WEBPACK_EXTERNAL_MODULE__2__},function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"d",(function(){return c})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s}));var r=n(0),o=n(2);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){return(t+=t.includes("?")?"&":"?")+$.param(e)}function c(t,e){var n=t.toLowerCase();return o.FieldType[n]?o.FieldType[n]:n.includes(":")?o.FieldType[t.split(":")[1]]:a(e[0])}function i(t,e){return Object(r.b)(this,void 0,void 0,(function(){var n;return Object(r.d)(this,(function(r){return n={"Content-Type":"application/json"},e&&(n.Authorization=e),[2,fetch(t,{headers:n})]}))}))}function s(t,e){return Object(r.b)(this,void 0,void 0,(function(){return Object(r.d)(this,(function(n){return[2,i(t,e).then((function(t){return t.json()})).then((function(t){return t}))]}))}))}},function(t,e){t.exports=__WEBPACK_EXTERNAL_MODULE__4__},function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e,n){var r=n(21),o=n(15),a=n(38),u=n(39),c=Object.prototype,i=c.hasOwnProperty,s=r((function(t,e){t=Object(t);var n=-1,r=e.length,s=r>2?e[2]:void 0;for(s&&a(e[0],e[1],s)&&(r=1);++n<r;)for(var f=e[n],l=u(f),_=-1,p=l.length;++_<p;){var b=l[_],y=t[b];(void 0===y||o(y,c[b])&&!i.call(t,b))&&(t[b]=f[b])}return t}));t.exports=s},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={}},function(t,e,n){var r=n(13),o=n(31),a=n(32),u=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":u&&u in Object(t)?o(t):a(t)}},function(t,e,n){var r=n(14),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();t.exports=a},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e){t.exports=function(t){return t}},function(t,e,n){var r=n(8),o=n(5);t.exports=function(t){if(!o(t))return!1;var e=r(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},function(t,e,n){var r=n(9).Symbol;t.exports=r},function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(30))},function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},function(t,e,n){var r=n(12),o=n(17);t.exports=function(t){return null!=t&&o(t.length)&&!r(t)}},function(t,e){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},function(t,e){var n=/^(?:0|[1-9]\d*)$/;t.exports=function(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&n.test(t))&&t>-1&&t%1==0&&t<e}},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return DataSource}));var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),lodash_defaults__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),lodash_defaults__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(lodash_defaults__WEBPACK_IMPORTED_MODULE_1__),_grafana_data__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),_grafana_data__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_2__),_api__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(7);function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var DataSource=function(_super){function DataSource(t){var e=this;return e.endpoint=t.jsonData.endpoint,e.authHeader=t.jsonData.authHeader,e=_super.call(this,t)||this}return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(DataSource,_super),DataSource.prototype.query=function(options){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.b)(this,void 0,Promise,(function(){var range,from,to,endpoint,data,i,target,query,resourcePath,url,responseData,values,fields,fieldNames;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.d)(this,(function(_a){switch(_a.label){case 0:range=options.range,from=range.from.valueOf(),to=range.to.valueOf(),endpoint=this.endpoint,data=[],i=0,_a.label=1;case 1:return i<options.targets.length?(target=options.targets[i],query=lodash_defaults__WEBPACK_IMPORTED_MODULE_1___default()(target,_types__WEBPACK_IMPORTED_MODULE_4__.a),resourcePath=target.resourcePath?target.resourcePath:"",url=Object(_api__WEBPACK_IMPORTED_MODULE_3__.a)(endpoint+resourcePath,{from:from,to:to}),[4,Object(_api__WEBPACK_IMPORTED_MODULE_3__.c)(url,this.authHeader)]):[3,4];case 2:if(responseData=_a.sent(),values=eval("responseData."+target.payloadKey),void 0===values)return console.log("Invalid key: "+target.payloadKey),[2,{data:data}];fields=[],"object"===_typeof(values)?(fieldNames=Object.keys(values),fieldNames.forEach((function(t){fields.push({name:t,values:values[t],type:Object(_api__WEBPACK_IMPORTED_MODULE_3__.d)(t,values[t])})}))):fields=[{name:target.payloadKey,values:[values],type:Object(_api__WEBPACK_IMPORTED_MODULE_3__.d)(target.payloadKey,values)}],data.push(new _grafana_data__WEBPACK_IMPORTED_MODULE_2__.MutableDataFrame({refId:query.refId,fields:fields})),_a.label=3;case 3:return i++,[3,1];case 4:return[2,{data:data}]}}))}))},DataSource.prototype.testDatasource=function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.b)(this,void 0,void 0,(function(){var t;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.d)(this,(function(e){switch(e.label){case 0:return this.endpoint?(t=null,[4,Object(_api__WEBPACK_IMPORTED_MODULE_3__.b)(this.endpoint,this.authHeader).then((function(e){return t=e}))]):[2,{status:"failure",message:"Missing endpoint"}];case 1:return e.sent(),200!==t.status?[2,{status:"failure",message:"Got "+t.status+" for "+this.endpoint+". Must be 200"}]:[2,{status:"success",message:"Success"}]}}))}))},DataSource}(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.DataSourceApi)},function(t,e,n){var r=n(11),o=n(22),a=n(24);t.exports=function(t,e){return a(o(t,e,r),t+"")}},function(t,e,n){var r=n(23),o=Math.max;t.exports=function(t,e,n){return e=o(void 0===e?t.length-1:e,0),function(){for(var a=arguments,u=-1,c=o(a.length-e,0),i=Array(c);++u<c;)i[u]=a[e+u];u=-1;for(var s=Array(e+1);++u<e;)s[u]=a[u];return s[e]=n(i),r(t,this,s)}}},function(t,e){t.exports=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}},function(t,e,n){var r=n(25),o=n(37)(r);t.exports=o},function(t,e,n){var r=n(26),o=n(27),a=n(11),u=o?function(t,e){return o(t,"toString",{configurable:!0,enumerable:!1,value:r(e),writable:!0})}:a;t.exports=u},function(t,e){t.exports=function(t){return function(){return t}}},function(t,e,n){var r=n(28),o=function(){try{var t=r(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=o},function(t,e,n){var r=n(29),o=n(36);t.exports=function(t,e){var n=o(t,e);return r(n)?n:void 0}},function(t,e,n){var r=n(12),o=n(33),a=n(5),u=n(35),c=/^\[object .+?Constructor\]$/,i=Function.prototype,s=Object.prototype,f=i.toString,l=s.hasOwnProperty,_=RegExp("^"+f.call(l).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!a(t)||o(t))&&(r(t)?_:c).test(u(t))}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(13),o=Object.prototype,a=o.hasOwnProperty,u=o.toString,c=r?r.toStringTag:void 0;t.exports=function(t){var e=a.call(t,c),n=t[c];try{t[c]=void 0;var r=!0}catch(t){}var o=u.call(t);return r&&(e?t[c]=n:delete t[c]),o}},function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},function(t,e,n){var r,o=n(34),a=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";t.exports=function(t){return!!a&&a in t}},function(t,e,n){var r=n(9)["__core-js_shared__"];t.exports=r},function(t,e){var n=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return n.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},function(t,e){var n=Date.now;t.exports=function(t){var e=0,r=0;return function(){var o=n(),a=16-(o-r);if(r=o,a>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}},function(t,e,n){var r=n(15),o=n(16),a=n(18),u=n(5);t.exports=function(t,e,n){if(!u(n))return!1;var c=typeof e;return!!("number"==c?o(n)&&a(e,n.length):"string"==c&&e in n)&&r(n[e],t)}},function(t,e,n){var r=n(40),o=n(51),a=n(16);t.exports=function(t){return a(t)?r(t,!0):o(t)}},function(t,e,n){var r=n(41),o=n(42),a=n(44),u=n(45),c=n(18),i=n(47),s=Object.prototype.hasOwnProperty;t.exports=function(t,e){var n=a(t),f=!n&&o(t),l=!n&&!f&&u(t),_=!n&&!f&&!l&&i(t),p=n||f||l||_,b=p?r(t.length,String):[],y=b.length;for(var d in t)!e&&!s.call(t,d)||p&&("length"==d||l&&("offset"==d||"parent"==d)||_&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||c(d,y))||b.push(d);return b}},function(t,e){t.exports=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}},function(t,e,n){var r=n(43),o=n(10),a=Object.prototype,u=a.hasOwnProperty,c=a.propertyIsEnumerable,i=r(function(){return arguments}())?r:function(t){return o(t)&&u.call(t,"callee")&&!c.call(t,"callee")};t.exports=i},function(t,e,n){var r=n(8),o=n(10);t.exports=function(t){return o(t)&&"[object Arguments]"==r(t)}},function(t,e){var n=Array.isArray;t.exports=n},function(t,e,n){(function(t){var r=n(9),o=n(46),a=e&&!e.nodeType&&e,u=a&&"object"==typeof t&&t&&!t.nodeType&&t,c=u&&u.exports===a?r.Buffer:void 0,i=(c?c.isBuffer:void 0)||o;t.exports=i}).call(this,n(19)(t))},function(t,e){t.exports=function(){return!1}},function(t,e,n){var r=n(48),o=n(49),a=n(50),u=a&&a.isTypedArray,c=u?o(u):r;t.exports=c},function(t,e,n){var r=n(8),o=n(17),a=n(10),u={};u["[object Float32Array]"]=u["[object Float64Array]"]=u["[object Int8Array]"]=u["[object Int16Array]"]=u["[object Int32Array]"]=u["[object Uint8Array]"]=u["[object Uint8ClampedArray]"]=u["[object Uint16Array]"]=u["[object Uint32Array]"]=!0,u["[object Arguments]"]=u["[object Array]"]=u["[object ArrayBuffer]"]=u["[object Boolean]"]=u["[object DataView]"]=u["[object Date]"]=u["[object Error]"]=u["[object Function]"]=u["[object Map]"]=u["[object Number]"]=u["[object Object]"]=u["[object RegExp]"]=u["[object Set]"]=u["[object String]"]=u["[object WeakMap]"]=!1,t.exports=function(t){return a(t)&&o(t.length)&&!!u[r(t)]}},function(t,e){t.exports=function(t){return function(e){return t(e)}}},function(t,e,n){(function(t){var r=n(14),o=e&&!e.nodeType&&e,a=o&&"object"==typeof t&&t&&!t.nodeType&&t,u=a&&a.exports===o&&r.process,c=function(){try{var t=a&&a.require&&a.require("util").types;return t||u&&u.binding&&u.binding("util")}catch(t){}}();t.exports=c}).call(this,n(19)(t))},function(t,e,n){var r=n(5),o=n(52),a=n(53),u=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return a(t);var e=o(t),n=[];for(var c in t)("constructor"!=c||!e&&u.call(t,c))&&n.push(c);return n}},function(t,e){var n=Object.prototype;t.exports=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||n)}},function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}},function(t,e,n){"use strict";n.r(e);var r=n(2),o=n(20),a=n(0),u=n(1),c=n.n(u),i=n(4),s=(i.LegacyForms.SecretFormField,i.LegacyForms.FormField),f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.onEndpointChange=function(t){var n=e.props,r=n.onOptionsChange,o=n.options,u=Object(a.a)(Object(a.a)({},o.jsonData),{endpoint:t.target.value});r(Object(a.a)(Object(a.a)({},o),{jsonData:u}))},e.onAuthHeaderChange=function(t){var n=e.props,r=n.onOptionsChange,o=n.options,u=Object(a.a)(Object(a.a)({},o.jsonData),{authHeader:t.target.value});console.log("change..",t.target.value),r(Object(a.a)(Object(a.a)({},o),{jsonData:u}))},e}return Object(a.c)(e,t),e.prototype.render=function(){var t=this.props.options,e=t.jsonData;t.secureJsonFields;return c.a.createElement("div",{className:"gf-form-group"},c.a.createElement("div",{className:"gf-form"},c.a.createElement(s,{label:"Endpoint",labelWidth:10,inputWidth:24,onChange:this.onEndpointChange,value:e.endpoint||"",placeholder:"E.g. http://localhost:8000/stats/"})),c.a.createElement("div",{className:"gf-form-inline"},c.a.createElement("div",{className:"gf-form"},c.a.createElement(s,{value:e.authHeader||"",label:"Authorization Header",placeholder:'e.g. "Token QWxhZG43gfdRpbjpPcfdGVuU245VzYW1l"',labelWidth:10,inputWidth:24,onChange:this.onAuthHeaderChange}))))},e}(u.PureComponent),l=n(6),_=n.n(l),p=n(7),b=i.LegacyForms.FormField,y=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.onResourcePathChange=function(t){var n=e.props,r=n.onChange,o=n.query,u=n.onRunQuery;r(Object(a.a)(Object(a.a)({},o),{resourcePath:t.target.value})),u()},e.onPayloadKeyChange=function(t){var n=e.props,r=n.onChange,o=n.query,u=n.onRunQuery;r(Object(a.a)(Object(a.a)({},o),{payloadKey:t.target.value})),u()},e}return Object(a.c)(e,t),e.prototype.render=function(){var t=_()(this.props.query,p.a),e=t.resourcePath,n=t.payloadKey;return c.a.createElement("div",{className:"gf-form"},c.a.createElement(b,{labelWidth:8,value:e||"",onChange:this.onResourcePathChange,label:"Resource Path",tooltip:"Specify a specific subpath or use query params. E.g. /users/?active=true"}),c.a.createElement(b,{labelWidth:10,value:n,onChange:this.onPayloadKeyChange,label:"Payload Key",tooltip:"The key is evaluated as simple javascript. So you can use dot-notation, indice, etc. E.g. users[0].numImages"}))},e}(u.PureComponent);n.d(e,"plugin",(function(){return d}));var d=new r.DataSourcePlugin(o.a).setConfigEditor(f).setQueryEditor(y)}])}));
//# sourceMappingURL=module.js.map