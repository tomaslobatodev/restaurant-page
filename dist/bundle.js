(()=>{"use strict";var n={28:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,"body {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 0;\n}\n\n#content {\n    width: 75%;\n    border-left: 1px solid black;\n    border-right: 1px solid black;\n    display: flex;\n    flex-direction: column;\n    box-sizing: border-box;\n}\n\nnav {\n    width: 100%;\n    height: 80px;\n    padding:0 40px;\n    box-sizing: border-box;\n    display: flex;\n    margin-bottom: 36px;\n    border-bottom: 1px solid black;\n}\n\nnav ul {\n    display: flex;\n    width: 100%;\n    justify-content: space-between;\n    list-style: none;\n    padding: 0\n}\n\nnav ul li {\n    border: 1px solid black;\n    padding: 24px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 80px;\n    font-size: 24px;\n}\n\nnav ul li:hover {\n    cursor: pointer\n}\n\nmain {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 36px\n}\n\nmain h1 {\n    font-size: 40px;\n    margin: 2px\n}\n\nmain img {\n    width: 92%;\n    height: 350px;\n    object-fit: cover;\n    border: 2px solid black;\n    border-radius: 10px;\n}\n\n.quoteBox {\n    display: flex;\n    flex-direction: column;\n    border: 1px solid black;\n    width: 80%;\n    padding: 6px;\n    border-radius: 10px;\n    font-size: 20px;\n}\n\n.quoteBox b {\n    text-align: end;\n}\n\n.hoursBox {\n    border: 1px solid black;\n    width: 85%;\n    padding-bottom: 14px;\n    border-radius: 10px;\n    box-sizing: border-box;\n}\n\n.locationBox {\n    border: 1px solid black;\n    width: 85%;\n    padding: 0 16px;\n    border-radius: 10px;\n    box-sizing: border-box;\n}\n\nfooter {\n    height: 40px;\n    width: 100%;\n    border-top: 1px solid black;\n    margin-top: 36px;\n    padding: 20px 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 32px;\n}",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<n.length;s++){var p=[].concat(n[s]);o&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),e.push(p))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var d=n[c],s=o.base?d[0]+o.base:d[0],p=a[s]||0,l="".concat(s," ").concat(p);a[s]=p+1;var u=t(l),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=r(m,o);o.byIndex=c,e.splice(c,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var d=o(n,r),s=0;s<a.length;s++){var p=t(a[s]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=d}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!n;)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0;var o={};(()=>{t.d(o,{jZ:()=>E,kQ:()=>g,LE:()=>y,GI:()=>C});const n=()=>{const n=document.createElement("ul");["home","menu","about"].forEach((e=>{const t=document.createElement("li");t.textContent=e,t.id=`${e}btn`,n.appendChild(t),t.addEventListener("click",(()=>{"home"===e&&y(),"menu"===e&&C(),"about"===e&&E()}))}));const e=document.createElement("nav");e.appendChild(n),g.appendChild(e)};var e=t(379),r=t.n(e),a=t(795),i=t.n(a),c=t(569),d=t.n(c),s=t(565),p=t.n(s),l=t(216),u=t.n(l),m=t(589),f=t.n(m),h=t(28),x={};x.styleTagTransform=f(),x.setAttributes=p(),x.insert=d().bind(null,"head"),x.domAPI=i(),x.insertStyleElement=u(),r()(h.Z,x),h.Z&&h.Z.locals&&h.Z.locals;const b=t.p+"dec88c8acfdb40604588.png",v=()=>{const n=document.createElement("footer");n.textContent="Made by @tomaslobatodev",g.appendChild(n)},g=document.querySelector("#content"),y=()=>(g.innerHTML="",n(),(()=>{const n=document.createElement("main"),e=document.createElement("h1");e.textContent="Tom's resto-bar";const t=document.createElement("div");t.classList.add("quoteBox");const o=document.createElement("i"),r=document.createElement("b");o.textContent='"A customer\'s quote about the place remarking how good it is in the matter of making food"',r.textContent="- John Cena",t.appendChild(o),t.appendChild(r);const a=new Image;a.src=b;const i=document.createElement("ul");i.classList.add("hoursBox");const c=document.createElement("h2");c.textContent="Hours",i.appendChild(c),["monday: 6am to 6pm","tuesday: 6am to 6pm","wednesday: 6am to 6pm","thursday: 8am to 10pm","friday: 8am to 10pm","saturday: 8am to 10pm","sunday: 6am to 8pm"].forEach((n=>{const e=document.createElement("li");e.textContent=n,i.appendChild(e)}));const d=document.createElement("div");d.classList.add("locationBox");const s=document.createElement("h2");s.textContent="Location";const p=document.createElement("p");p.textContent="221b, Baker Street, London",d.appendChild(s),d.appendChild(p),n.appendChild(e),n.appendChild(t),n.appendChild(a),n.appendChild(i),n.appendChild(d),g.appendChild(n)})(),v(),g),C=()=>(g.innerHTML="",n(),(()=>{const n=document.createElement("main"),e=document.createElement("h1");e.textContent="Menu",n.appendChild(e),g.appendChild(n)})(),v(),g),E=()=>(g.innerHTML="",n(),(()=>{const n=document.createElement("main"),e=document.createElement("h1");e.textContent="About Us",n.appendChild(e),g.appendChild(n)})(),v(),g);document.body.appendChild(y())})()})();