parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"2iBc":[function(require,module,exports) {
"use strict";var e="a-f\\d",t="#?[".concat(e,"]{3}[").concat(e,"]?"),a="#?[".concat(e,"]{6}([").concat(e,"]{2})?"),r=new RegExp("[^#".concat(e,"]"),"gi"),n=new RegExp("^".concat(t,"$|^").concat(a,"$"),"i");module.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"!=typeof e||r.test(e)||!n.test(e))throw new TypeError("Expected a valid hex string");var a=1;8===(e=e.replace(/^#/,"")).length&&(a=parseInt(e.slice(6,8),16)/255,e=e.slice(0,6)),4===e.length&&(a=parseInt(e.slice(3,4).repeat(2),16)/255,e=e.slice(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var c=parseInt(e,16),o=c>>16,s=c>>8&255,i=255&c;return"array"===t.format?[o,s,i,a]:{red:o,green:s,blue:i,alpha:a}};
},{}],"EVxB":[function(require,module,exports) {
var e=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,s){function a(e){try{u(r.next(e))}catch(t){s(t)}}function c(e){try{u(r.throw(e))}catch(t){s(t)}}function u(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,c)}u((r=r.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var n,r,o,s,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function c(s){return function(c){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(c){s=[6,c],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}},n=require("hex-rgb");function r(n){return e(this,void 0,void 0,function(){return t(this,function(e){switch(e.label){case 0:return[3,5];case 1:return e.trys.push([1,3,,4]),[4,fetch("http://localhost:3000")];case 2:return e.sent(),[3,4];case 3:throw e.sent(),new Error("Local CORS proxy not started, run `docker-compose up`");case 4:return[2,"http://localhost:3000/"+n];case 5:return[2,n]}})})}function o(o){return e(this,void 0,void 0,function(){var e,s,a,c,u,i,l,h,f,p;return t(this,function(t){switch(t.label){case 0:return t.trys.push([0,7,,8]),e=fetch,[4,r("https://raw.githubusercontent.com/andrewfiorillo/sketch-palettes/master/Sketch%20Palettes.sketchplugin/Contents/Sketch/manifest.json")];case 1:return[4,e.apply(void 0,[t.sent()])];case 2:return[4,t.sent().json()];case 3:return s=t.sent(),a=fetch,[4,r("https://www.colourlovers.com/api/palette/"+o+"?format=json")];case 4:return[4,a.apply(void 0,[t.sent()])];case 5:return[4,t.sent().json()];case 6:return c=t.sent()[0],u=c.colors.map(function(e){return n(e)}).map(function(e){return{red:e.red/255,green:e.green/255,blue:e.blue/255,alpha:1}}),i={compatibleVersion:"2.0",pluginVersion:s.version,colors:u,gradients:[],images:[]},l=encodeURIComponent(JSON.stringify(i)),h="data:text/json;charset=utf-8,"+l,(f=document.createElement("a")).setAttribute("href",h),f.setAttribute("download",c.title+".sketchpalette"),f.click(),[3,8];case 7:return p=t.sent(),console.warn(p.message),[3,8];case 8:return[2]}})})}o(1332140);
},{"hex-rgb":"2iBc"}]},{},["EVxB"], null)
//# sourceMappingURL=/app.0484a9f3.js.map