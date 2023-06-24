!function(){"use strict";var t=function(){function t(t){this.$el="",this.$el="string"==typeof t?document.querySelector(t):t}return t.prototype.html=function(t){return"string"==typeof t?(this.$el.innerHTML=t,this):this.$el.outerHTML.trim()},t.prototype.clear=function(){return this.html(""),this},t.prototype.on=function(t,n){this.$el.addEventListener(t,n)},t.prototype.off=function(t,n){this.$el.removeEventListener(t,n)},t.prototype.append=function(n){return n instanceof t&&(n=n.$el),Element.prototype.append?this.$el.append(n):this.$el.appendChild(n),this},t.prototype.getAtrr=function(t){return this.$el.getAttribute(t)},t.prototype.containClass=function(t){return this.$el.classList.contains(t)},t}();function n(n){return new t(n)}n.create=function(t,o){void 0===o&&(o="");var e=document.createElement(t);return o&&e.classList.add(o),n(e)};var o,e=function(){function t(){}return Object.defineProperty(t,"path",{get:function(){return window.location.hash.slice(1)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"param",{get:function(){return t.path.split("/")[1]},enumerable:!1,configurable:!0}),t}(),r=function(){function t(t,o){if(!t)throw new Error("Selector is not provided in Router");this.$placeholder=n(t),this.routes=o,this.page=null,this.changePageHandler=this.changePageHandler.bind(this),this.init()}return t.prototype.init=function(){window.addEventListener("hashchange",this.changePageHandler),this.changePageHandler()},t.prototype.changePageHandler=function(){this.page&&this.page.destroy();var t=e.path.includes("chat")?this.routes.chat:this.routes.auth;this.page=new t(e.param),this.$placeholder.clear(),this.$placeholder.append(this.page.getRoot()),this.page.afterRender()},t.prototype.destroy=function(){window.removeEventListener("hashchange",this.changePageHandler)},t}(),i=function(){function t(t){this.components=t.components||[]}return t.prototype.getRoot=function(){var t=n.create("div","container");return this.components=this.components.map((function(o){var e=n.create("div",o.className),r=new o(e,{});return e.html(r.toHTML()),t.append(e),r})),t},t.prototype.init=function(){this.components.forEach((function(t){t.init()}))},t.prototype.destroy=function(){this.components.forEach((function(t){return t.destroy()}))},t}(),a=function(){function t(t,n){if(console.log(this),!t)throw new Error("No $root provided for DomListener!");this.$root=t,this.listeners=n}return t.prototype.initDOMListeners=function(){var t=this;this.listeners.forEach((function(n){var o,e="on"+("string"!=typeof(o=n)?"":o.charAt(0).toUpperCase()+o.slice(1));if(t.shorProto=Object.getPrototypeOf(t)[e],!t.shorProto)throw new Error("Method ".concat(e," is not implemented in ").concat(t.name||""," Component"));t.shorProto=t.shorProto.bind(t),t.$root.on(n,t.shorProto)}))},t.prototype.removeDOMListeners=function(){var t=this;this.listeners.forEach((function(n){t.$root.off(n,t.shorProto)}))},t}(),s=(o=function(t,n){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])},o(t,n)},function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function e(){this.constructor=t}o(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),c=function(t){function n(n,o){var e=t.call(this,n,o.listeners)||this;return console.log(o,"root"),e.name=o.name||"",e.prepare(),e}return s(n,t),n.prototype.prepare=function(){},n.prototype.toHTML=function(t){return void 0===t&&(t={}),""},n.prototype.init=function(){this.initDOMListeners()},n.prototype.destroy=function(){this.removeDOMListeners(),this.unsubscribers.forEach((function(t){return t()})),this.storeSub.unsubscribe()},n}(a);var u=function(){var t=function(n,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])},t(n,o)};return function(n,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function e(){this.constructor=n}t(n,o),n.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}}(),p=function(){return p=Object.assign||function(t){for(var n,o=1,e=arguments.length;o<e;o++)for(var r in n=arguments[o])Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},p.apply(this,arguments)},l=function(t){function o(n,o){return t.call(this,n,p({name:"Toolbar",listeners:["input","click"]},o))||this}return u(o,t),o.prototype.prepare=function(){},o.prototype.toHTML=function(t){return function(t){return'\n  <div class="authorization flex">\n  <div class="authorization-form">\n      '.concat('\n    <div class="logo">\n        <img class="logo__img" src="img/Logo.svg" alt="logo">\n    </div>','\n      <div class="form flex">\n          ').concat('\n  <div class="offer">\n        <h1 class="offer__header">Let\'s get <span class="offer__header_liner"> creative!</span></h1>\n        <p class="offer__text">Log in to Artificium to start creating magic.</p>\n    </div>\n  ','\n          <form action="" class="auth-form">\n             ').concat('\n  <div class="auth-form-wrap-input">\n    <input type="email" name="email" class="auth-form__input" placeholder="Email">\n    </div>\n    <div class="auth-form-wrap-input">\n    <input type="password" name="password" class="auth-form__input" placeholder="Password">\n    </div>\n    <div class="auth-form-check flex">\n    <div class="checkbox flex">\n        <input type="checkbox" class="checkbox__check">\n\n        <p class="checkbox__text">Remember me</p>\n    </div>\n    <a class="text-forgot">Forgot Password?</a>\n</div>\n<button class="btn" type="button" data-action=\'form-button\'>Log in</button>\n  ','\n          </form>\n      </div>\n      <div class="opinion-auth">\n          ').concat('\n  <span class="opinion-auth__text">or continue with</span>\n        <div class="opinion-auth-btns flex">\n        <button class="opinion-auth-btns__button">Google Account</button>\n        <button class="opinion-auth-btns__button opinion-auth-btns__button_apple">Apple Account</button>\n    </div>\n  ','\n      </div>\n      <div class="dont">\n          <p class="dont__text">Don\'t have an account? <span class="dont__text_sign text-forgot">Sign\n                  Up</span></p>\n      </div>\n  </div>\n  <div class="authorization-background">\n    ').concat((void 0===(n=t)&&(n=1),console.log(n,"Game"),'\n  <img class="authorization-background__img" src="img/'.concat(1==n?"Illustration.png":"Illustration-auth.jpg",'" alt="background">\n    ').concat(1!=n?'<div class="authorization-background-offer">\n  <h3 class="authorization-background-offer__head">\n      Artificium has been a game-changer for our content creation process.\n  </h3>\n  <h3 class="authorization-background-offer__head">\n      The AI-powered tools are incredibly user-friendly and have saved us countless hours of work.\n      Lily Patel\n  </h3>\n  <div class="authorization-background-offer-author">\n      <span class="authorization-background-offer-author__name">Lily Patel</span>\n      <span class="authorization-background-offer-author__post">CMO at Software House</span>\n  </div>\n</div>':"","\n  ")),"\n  </div>\n</div>");var n}(t)},o.prototype.init=function(){t.prototype.init.call(this)},o.prototype.onInput=function(t){var o=n(t.target);console.log(o)},o.prototype.onClick=function(t){if(n(t.target).getAtrr("data-action")){document.querySelector(".auth-form__input_error")&&document.querySelector(".auth-form__input_error").classList.remove("auth-form__input_error");var o=function(t){var n="";return Object.values(t).forEach((function(o,e){o.length<6&&(n=Object.keys(t)[e])})),n}({email:document.querySelector("input[name=email]").value,password:document.querySelector("input[name=password]").value});o.length&&document.querySelector("input[name=".concat(o,"]")).classList.add("auth-form__input_error")}},o.className="auth",o}(c),h=function(){function t(t){this.params=t}return t.prototype.getRoot=function(){throw new Error('Method "getRoot" should be implemented')},t.prototype.afterRender=function(){},t.prototype.destroy=function(){},t}(),f=function(){var t=function(n,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])},t(n,o)};return function(n,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function e(){this.constructor=n}t(n,o),n.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}}();new r("body",{auth:function(t){function n(n){void 0===n&&(n="");var o=t.call(this,n)||this;return o.storeSub=null,o}return f(n,t),n.prototype.getRoot=function(){return this.art=new i({components:[l]}),this.art.getRoot()},n.prototype.afterRender=function(){this.art.init()},n.prototype.destroy=function(){this.art.destroy(),this.storeSub.unsubscibe()},n}(h)})}();