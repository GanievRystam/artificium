!function(){"use strict";var t={370:function(t){t.exports=function(t,n){return n||(n={}),t?(t=String(t.__esModule?t.default:t),n.hash&&(t+=n.hash),n.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t):t}},124:function(t,n,o){t.exports=o.p+"img/Avatar-1.png"},647:function(t,n,o){t.exports=o.p+"img/Avatar-2.png"},300:function(t,n,o){t.exports=o.p+"img/Avatar-3.png"},182:function(t,n,o){t.exports=o.p+"img/Avatar-4.png"},435:function(t,n,o){t.exports=o.p+"img/Avatar-5.png"},145:function(t,n,o){t.exports=o.p+"img/Avatar.png"},474:function(t,n,o){t.exports=o.p+"img/artificium.svg"},309:function(t,n,o){t.exports=o.p+"img/bulb.svg"},204:function(t,n,o){t.exports=o.p+"img/code.svg"},374:function(t,n,o){t.exports=o.p+"img/cog.svg"},648:function(t,n,o){t.exports=o.p+"img/comment-circle.svg"},874:function(t,n,o){t.exports=o.p+"img/credit-card.svg"},329:function(t,n,o){t.exports=o.p+"img/edit.svg"},867:function(t,n,o){t.exports=o.p+"img/folder.svg"},982:function(t,n,o){t.exports=o.p+"img/micro.svg"},431:function(t,n,o){t.exports=o.p+"img/octagon.svg"},2:function(t,n,o){t.exports=o.p+"img/pencil.svg"},602:function(t,n,o){t.exports=o.p+"img/pin.svg"},413:function(t,n,o){t.exports=o.p+"img/plus-circle.svg"},349:function(t,n,o){t.exports=o.p+"img/search.svg"},197:function(t,n,o){t.exports=o.p+"img/share.svg"},881:function(t,n,o){t.exports=o.p+"img/square-1.svg"},494:function(t,n,o){t.exports=o.p+"img/square.svg"},938:function(t,n,o){t.exports=o.p+"img/telegram.svg"},566:function(t,n,o){t.exports=o.p+"img/triangle.svg"}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.m=t,o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,{a:n}),n},o.d=function(t,n){for(var e in n)o.o(n,e)&&!o.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},function(){var t;o.g.importScripts&&(t=o.g.location+"");var n=o.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var e=n.getElementsByTagName("script");if(e.length)for(var r=e.length-1;r>-1&&!t;)t=e[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=t}(),o.b=document.baseURI||self.location.href,function(){var t=o(370),n=o.n(t),e=new URL(o(124),o.b),r=new URL(o(349),o.b),i=new URL(o(874),o.b),s=new URL(o(566),o.b),a=new URL(o(494),o.b),c=new URL(o(881),o.b),u=new URL(o(431),o.b),p=new URL(o(413),o.b),f=new URL(o(374),o.b),l=new URL(o(145),o.b),h=new URL(o(647),o.b),g=new URL(o(300),o.b),d=new URL(o(182),o.b),m=new URL(o(435),o.b),v=new URL(o(197),o.b),b=new URL(o(329),o.b),y=new URL(o(474),o.b),_=new URL(o(648),o.b),w=new URL(o(867),o.b),x=new URL(o(204),o.b),L=new URL(o(2),o.b),R=new URL(o(309),o.b),O=new URL(o(982),o.b),P=new URL(o(938),o.b),U=new URL(o(602),o.b),E=(n()(e),n()(r),n()(i),n()(s),n()(a),n()(c),n()(u),n()(p),n()(f),n()(l),n()(h),n()(g),n()(d),n()(m),n()(v),n()(b),n()(y),n()(_),n()(w),n()(x),n()(L),n()(R),n()(O),n()(P),n()(U),function(){function t(t){this.$el="",this.$el="string"==typeof t?document.querySelector(t):t}return t.prototype.html=function(t){return"string"==typeof t?(this.$el.innerHTML=t,this):this.$el.outerHTML.trim()},t.prototype.clear=function(){return this.html(""),this},t.prototype.on=function(t,n){this.$el.addEventListener(t,n)},t.prototype.off=function(t,n){this.$el.removeEventListener(t,n)},t.prototype.append=function(n){return n instanceof t&&(n=n.$el),Element.prototype.append?this.$el.append(n):this.$el.appendChild(n),this},t.prototype.getAtrr=function(t){return this.$el.getAttribute(t)},t.prototype.containClass=function(t){return this.$el.classList.contains(t)},t}());function j(t){return new E(t)}j.create=function(t,n){void 0===n&&(n="");var o=document.createElement(t);return n&&o.classList.add(n),j(o)};var $,A=function(){function t(){}return Object.defineProperty(t,"path",{get:function(){return window.location.hash.slice(1)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"param",{get:function(){return t.path.split("/")[1]},enumerable:!1,configurable:!0}),t}(),k=function(){function t(t,n){if(!t)throw new Error("Selector is not provided in Router");this.$placeholder=j(t),this.routes=n,this.page=null,this.changePageHandler=this.changePageHandler.bind(this),this.init()}return t.prototype.init=function(){window.addEventListener("hashchange",this.changePageHandler),this.changePageHandler()},t.prototype.changePageHandler=function(){this.page&&this.page.destroy();var t=A.path.includes("chat")?this.routes.chat:this.routes.auth;this.page=new t(A.param),this.$placeholder.clear(),this.$placeholder.append(this.page.getRoot()),this.page.afterRender()},t.prototype.destroy=function(){window.removeEventListener("hashchange",this.changePageHandler)},t}(),S=function(){function t(t){this.components=t.components||[]}return t.prototype.getRoot=function(){var t=j.create("div","container");return this.components=this.components.map((function(n){var o=j.create("div",n.className),e=new n(o,{});return o.html(e.toHTML()),t.append(o),e})),t},t.prototype.init=function(){this.components.forEach((function(t){t.init()}))},t.prototype.destroy=function(){this.components.forEach((function(t){return t.destroy()}))},t}(),M=function(){function t(t,n){if(console.log(this),!t)throw new Error("No $root provided for DomListener!");this.$root=t,this.listeners=n}return t.prototype.initDOMListeners=function(){var t=this;this.listeners.forEach((function(n){var o,e="on"+("string"!=typeof(o=n)?"":o.charAt(0).toUpperCase()+o.slice(1));if(t.shorProto=Object.getPrototypeOf(t)[e],!t.shorProto)throw new Error("Method ".concat(e," is not implemented in ").concat(t.name||""," Component"));t.shorProto=t.shorProto.bind(t),t.$root.on(n,t.shorProto)}))},t.prototype.removeDOMListeners=function(){var t=this;this.listeners.forEach((function(n){t.$root.off(n,t.shorProto)}))},t}(),T=($=function(t,n){return $=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])},$(t,n)},function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=t}$(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}),H=function(t){function n(n,o){var e=t.call(this,n,o.listeners)||this;return console.log(o,"root"),e.name=o.name||"",e.prepare(),e}return T(n,t),n.prototype.prepare=function(){},n.prototype.toHTML=function(t){return void 0===t&&(t={}),""},n.prototype.init=function(){this.initDOMListeners()},n.prototype.destroy=function(){this.removeDOMListeners(),this.unsubscribers.forEach((function(t){return t()})),this.storeSub.unsubscribe()},n}(M);var z=function(){var t=function(n,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])},t(n,o)};return function(n,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function e(){this.constructor=n}t(n,o),n.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}}(),C=function(){return C=Object.assign||function(t){for(var n,o=1,e=arguments.length;o<e;o++)for(var r in n=arguments[o])Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},C.apply(this,arguments)},q=function(t){function n(n,o){return t.call(this,n,C({name:"Toolbar",listeners:["input","click"]},o))||this}return z(n,t),n.prototype.prepare=function(){},n.prototype.toHTML=function(t){return function(t){return'\n  <div class="authorization flex">\n  <div class="authorization-form">\n      '.concat('\n    <div class="logo">\n        <img class="logo__img" src="img/Logo.svg" alt="logo">\n    </div>','\n      <div class="form flex">\n          ').concat('\n  <div class="offer">\n        <h1 class="offer__header">Let\'s get <span class="offer__header_liner"> creative!</span></h1>\n        <p class="offer__text">Log in to Artificium to start creating magic.</p>\n    </div>\n  ','\n          <form action="" class="auth-form">\n             ').concat('\n  <div class="auth-form-wrap-input">\n    <input type="email" name="email" class="auth-form__input" placeholder="Email">\n    </div>\n    <div class="auth-form-wrap-input">\n    <input type="password" name="password" class="auth-form__input" placeholder="Password">\n    </div>\n    <div class="auth-form-check flex">\n    <div class="checkbox flex">\n        <input type="checkbox" class="checkbox__check">\n\n        <p class="checkbox__text">Remember me</p>\n    </div>\n    <a class="text-forgot">Forgot Password?</a>\n</div>\n<button class="btn" type="button" data-action=\'form-button\'>Log in</button>\n  ','\n          </form>\n      </div>\n      <div class="opinion-auth">\n          ').concat('\n  <span class="opinion-auth__text">or continue with</span>\n        <div class="opinion-auth-btns flex">\n        <button class="opinion-auth-btns__button">Google Account</button>\n        <button class="opinion-auth-btns__button opinion-auth-btns__button_apple">Apple Account</button>\n    </div>\n  ','\n      </div>\n      <div class="dont">\n          <p class="dont__text">Don\'t have an account? <span class="dont__text_sign text-forgot">Sign\n                  Up</span></p>\n      </div>\n  </div>\n  <div class="authorization-background">\n    ').concat((void 0===(n=t)&&(n=1),console.log(n,"Game"),'\n  <img class="authorization-background__img" src="img/'.concat(1==n?"Illustration.png":"Illustration-auth.jpg",'" alt="background">\n    ').concat(1!=n?'<div class="authorization-background-offer">\n  <h3 class="authorization-background-offer__head">\n      Artificium has been a game-changer for our content creation process.\n  </h3>\n  <h3 class="authorization-background-offer__head">\n      The AI-powered tools are incredibly user-friendly and have saved us countless hours of work.\n      Lily Patel\n  </h3>\n  <div class="authorization-background-offer-author">\n      <span class="authorization-background-offer-author__name">Lily Patel</span>\n      <span class="authorization-background-offer-author__post">CMO at Software House</span>\n  </div>\n</div>':"","\n  ")),"\n  </div>\n</div>");var n}(t)},n.prototype.init=function(){t.prototype.init.call(this)},n.prototype.onInput=function(t){var n=j(t.target);console.log(n)},n.prototype.onClick=function(t){if(j(t.target).getAtrr("data-action")){document.querySelector(".auth-form__input_error")&&document.querySelector(".auth-form__input_error").classList.remove("auth-form__input_error");var n=function(t){var n="";return Object.values(t).forEach((function(o,e){o.length<6&&(n=Object.keys(t)[e])})),n}({email:document.querySelector("input[name=email]").value,password:document.querySelector("input[name=password]").value});n.length&&document.querySelector("input[name=".concat(n,"]")).classList.add("auth-form__input_error")}},n.className="auth",n}(H),D=function(){function t(t){this.params=t}return t.prototype.getRoot=function(){throw new Error('Method "getRoot" should be implemented')},t.prototype.afterRender=function(){},t.prototype.destroy=function(){},t}(),I=function(){var t=function(n,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])},t(n,o)};return function(n,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function e(){this.constructor=n}t(n,o),n.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}}();new k("body",{auth:function(t){function n(n){void 0===n&&(n="");var o=t.call(this,n)||this;return o.storeSub=null,o}return I(n,t),n.prototype.getRoot=function(){return this.art=new S({components:[q]}),this.art.getRoot()},n.prototype.afterRender=function(){this.art.init()},n.prototype.destroy=function(){this.art.destroy(),this.storeSub.unsubscibe()},n}(D)})}()}();