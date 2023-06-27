!function(){"use strict";var t=function(){function t(t){this.$el="",this.$el="string"==typeof t?document.querySelector(t):t}return t.prototype.html=function(t){return"string"==typeof t?(this.$el.innerHTML=t,this):this.$el.outerHTML.trim()},t.prototype.clear=function(){return this.html(""),this},t.prototype.on=function(t,n){this.$el.addEventListener(t,n)},t.prototype.off=function(t,n){this.$el.removeEventListener(t,n)},t.prototype.append=function(n){return n instanceof t&&(n=n.$el),Element.prototype.append?this.$el.append(n):this.$el.appendChild(n),this},t.prototype.getAtrr=function(t){return this.$el.getAttribute(t)},t.prototype.containClass=function(t){return this.$el.classList.contains(t)},t.prototype.parent=function(){return this.$el.parentNode},t.prototype.add=function(t){return this.$el.classList.add(t)},t}();function n(n){return new t(n)}n.create=function(t,o){void 0===o&&(o="");var e=document.createElement(t);return o&&e.classList.add(o),n(e)};var o,e=function(){function t(){}return Object.defineProperty(t,"path",{get:function(){return window.location.hash.slice(1)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"param",{get:function(){return t.path.split("/")[1]},enumerable:!1,configurable:!0}),t}(),i=function(){function t(t,o){if(!t)throw new Error("Selector is not provided in Router");this.$placeholder=n(t),this.routes=o,this.page=null,this.changePageHandler=this.changePageHandler.bind(this),this.init()}return t.prototype.init=function(){window.addEventListener("hashchange",this.changePageHandler),this.changePageHandler()},t.prototype.changePageHandler=function(){this.page&&this.page.destroy();var t=e.path.includes("chat")?this.routes.chat:this.routes.auth;this.page=new t(e.param),this.$placeholder.clear(),this.$placeholder.append(this.page.getRoot()),this.page.afterRender()},t.prototype.destroy=function(){window.removeEventListener("hashchange",this.changePageHandler)},t}(),s=function(){function t(t){this.components=t.components||[]}return t.prototype.getRoot=function(){var t=n.create("div","container");return this.components=this.components.map((function(o){var e=n.create("div",o.className),i=new o(e,{});return e.html(i.toHTML()),t.append(e),i})),t},t.prototype.init=function(){this.components.forEach((function(t){t.init()}))},t.prototype.destroy=function(){this.components.forEach((function(t){return t.destroy()}))},t}(),r=function(){function t(t,n){if(!t)throw new Error("No $root provided for DomListener!");this.$root=t,this.listeners=n}return t.prototype.initDOMListeners=function(){var t=this;this.listeners.forEach((function(n){var o,e="on"+("string"!=typeof(o=n)?"":o.charAt(0).toUpperCase()+o.slice(1));if(t.shorProto=Object.getPrototypeOf(t)[e],!t.shorProto)throw new Error("Method ".concat(e," is not implemented in ").concat(t.name||""," Component"));t.shorProto=t.shorProto.bind(t),t.$root.on(n,t.shorProto)}))},t.prototype.removeDOMListeners=function(){var t=this;this.listeners.forEach((function(n){t.$root.off(n,t.shorProto)}))},t}(),a=(o=function(t,n){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])},o(t,n)},function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function e(){this.constructor=t}o(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),c=function(t){function n(n,o){var e=t.call(this,n,o.listeners)||this;return e.name=o.name||"",e.prepare(),e}return a(n,t),n.prototype.prepare=function(){},n.prototype.toHTML=function(t){return void 0===t&&(t={}),""},n.prototype.init=function(){this.initDOMListeners()},n.prototype.destroy=function(){this.removeDOMListeners()},n}(r),l=function(){var t=function(n,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])},t(n,o)};return function(n,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function e(){this.constructor=n}t(n,o),n.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}}(),u=function(){return u=Object.assign||function(t){for(var n,o=1,e=arguments.length;o<e;o++)for(var i in n=arguments[o])Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);return t},u.apply(this,arguments)},p=function(t){function o(n,o){return t.call(this,n,u({name:"Toolbar",listeners:["input","click"]},o))||this}return l(o,t),o.prototype.prepare=function(){},o.prototype.toHTML=function(t){return function(t){return'\n  <div class="authorization flex">\n  <div class="authorization-form">\n      '.concat('\n    <div class="logo">\n        <img class="logo__img" src="img/Logo.svg" alt="logo">\n    </div>','\n      <div class="form flex">\n          ').concat('\n  <div class="offer">\n        <h1 class="offer__header">Let\'s get <span class="offer__header_liner"> creative!</span></h1>\n        <p class="offer__text">Log in to Artificium to start creating magic.</p>\n    </div>\n  ','\n          <form action="" class="auth-form">\n             ').concat('\n  <div class="auth-form-wrap-input">\n    <input type="email" name="email" class="auth-form__input" placeholder="Email">\n    </div>\n    <div class="auth-form-wrap-input">\n    <input type="password" name="password" class="auth-form__input" placeholder="Password">\n    </div>\n    <div class="auth-form-check flex">\n    <div class="checkbox flex">\n        <input type="checkbox" class="checkbox__check">\n        <p class="checkbox__text">Remember me</p>\n    </div>\n    <a class="text-forgot">Forgot Password?</a>\n</div>\n<button class="btn" type="button" data-action=\'form-button\'>Log in</button>\n  ','\n          </form>\n      </div>\n      <div class="opinion-auth">\n          ').concat('\n  <span class="opinion-auth__text">or continue with</span>\n        <div class="opinion-auth-btns flex">\n        <button class="opinion-auth-btns__button">Google Account</button>\n        <button class="opinion-auth-btns__button opinion-auth-btns__button_apple">Apple Account</button>\n    </div>\n  ','\n      </div>\n      <div class="dont">\n          <p class="dont__text">Don\'t have an account? <span class="dont__text_sign text-forgot">Sign\n                  Up</span></p>\n      </div>\n  </div>\n  <div class="authorization-background">\n    ').concat((void 0===(n=t)&&(n=1),'\n  <img class="authorization-background__img" src="img/'.concat(1==n?"Illustration.png":"Illustration-auth.jpg",'" alt="background">\n    ').concat(1!=n?'<div class="authorization-background-offer">\n  <h3 class="authorization-background-offer__head">\n      Artificium has been a game-changer for our content creation process.\n  </h3>\n  <h3 class="authorization-background-offer__head">\n      The AI-powered tools are incredibly user-friendly and have saved us countless hours of work.\n      Lily Patel\n  </h3>\n  <div class="authorization-background-offer-author">\n      <span class="authorization-background-offer-author__name">Lily Patel</span>\n      <span class="authorization-background-offer-author__post">CMO at Software House</span>\n  </div>\n</div>':"","\n  ")),"\n  </div>\n</div>");var n}(t)},o.prototype.init=function(){t.prototype.init.call(this)},o.prototype.onInput=function(t){n(t.target)},o.prototype.onClick=function(t){var o=n(t.target);if(n(".checkbox__check"),o.getAtrr("data-action")){document.querySelector(".auth-form__input_error")&&document.querySelector(".auth-form__input_error").classList.remove("auth-form__input_error");var e=function(t){var n="";return Object.values(t).forEach((function(o,e){if(o.length<6)return n=Object.keys(t)[e]})),t.email.match(/^\S+@\S+\.\S+$/)||(n=Object.keys(t)[0]),n}({email:document.querySelector("input[name=email]").value,password:document.querySelector("input[name=password]").value});e.length?document.querySelector("input[name=".concat(e,"]")).classList.add("auth-form__input_error"):window.location.href="#chat"}},o.className="auth",o}(c),h=function(){function t(t){this.params=t}return t.prototype.getRoot=function(){throw new Error('Method "getRoot" should be implemented')},t.prototype.afterRender=function(){},t.prototype.destroy=function(){},t}(),d=function(){var t=function(n,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])},t(n,o)};return function(n,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function e(){this.constructor=n}t(n,o),n.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}}(),_=function(t){function n(n){void 0===n&&(n="");var o=t.call(this,n)||this;return o.storeSub=null,o}return d(n,t),n.prototype.getRoot=function(){return this.art=new s({components:[p]}),this.art.getRoot()},n.prototype.afterRender=function(){this.art.init()},n.prototype.destroy=function(){this.art.destroy()},n}(h),m=function(){var t=function(n,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])},t(n,o)};return function(n,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function e(){this.constructor=n}t(n,o),n.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}}(),f=function(){return f=Object.assign||function(t){for(var n,o=1,e=arguments.length;o<e;o++)for(var i in n=arguments[o])Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);return t},f.apply(this,arguments)},v=function(t){function o(n,o){return t.call(this,n,f({name:"Toolbar",listeners:["click"]},o))||this}return m(o,t),o.prototype.prepare=function(){},o.prototype.toHTML=function(t){return"\n  ".concat('\n  <div class="chat-top">\n        <div class="chat-top-name">\n            <h2 class="chat-top-name__header">Orbital Oddysey</h2>\n            <span class="chat-top-name__text">Marketing Campaign for a new TV series Launch</span>\n        </div>\n        <div class="chat-top">\n            <div class="access-users access-users-chat">\n                <img src="./img/Avatar.png" alt="avatar"\n                    class="access-users__img access-users-chat__img">\n                <img src="./img/Avatar-1.png" alt="avatar"\n                    class="access-users__img access-users-chat__img">\n                <img src="./img/Avatar-2.png" alt="avatar"\n                    class="access-users__img access-users-chat__img">\n                <img src="./img/Avatar-3.png" alt="avatar"\n                    class="access-users__img access-users-chat__img">\n                <img src="./img/Avatar-4.png" alt="avatar"\n                    class="access-users__img access-users-chat__img">\n                <img src="./img/Avatar-5.png" alt="avatar"\n                    class="access-users__img access-users-chat__img">\n                <div class="access-users__count"></div>\n            </div>\n            <div class="chat-top-icon">\n                <img class="chat-top-icon__share" src="./img/share.svg" alt="">\n                <span class="chat-top-icon__text">Share</span>\n            </div>\n            <div class="chat-top-icon">\n                <img class="chat-top-icon__edit" src="./img/edit.svg" alt="">\n            </div>\n        </div>\n    </div>\n  ',"\n  ").concat('\n  <div class="chat-top chat-top-two">\n    <div class="chat-top-items">\n        <div class="chat-top-item chat-top-item-active">\n            <img class="chat-icon" src="./img/artificium.svg" alt="">\n            <h5 class="chat-top-item__head">Artificium</h5>\n        </div>\n        <div class="chat-top-item">\n            <img class="chat-icon" src="./img/comment-circle.svg" alt="">\n            <h5 class="chat-top-item__head">Chat</h5>\n        </div>\n        <div class="chat-top-item">\n            <img class="chat-icon" src="./img/folder.svg" alt="">\n            <h5 class="chat-top-item__head">Library</h5>\n        </div>\n    </div>\n  </div>\n  \n  ','\n        <div class="chat-fild">\n            <div class="chat-offer">\n                <h2 class="chat-offer__header offer__header">Innovation Starter Pack</h2>\n                <p class="chat-offer__text offer__text">Kickstart your innovation process with our\n                    comprehensive\n                    selection\n                    of predefined prompts.</p>\n            </div>\n            <div class="chat-options">\n                <div class="chat-option">\n                    <img class="chat-option__icon" src="./img/comment-circle.svg" alt="">\n                    <h3 class="chat-option__header">Creative Assets</h3>\n                    <div class="options">\n                        <div class="option">\n                            <h6 class="option__head">UI wireframe</h6>\n                        </div>\n                        <div class="option">\n                            <h6 class="option__head">Brochure design</h6>\n                        </div>\n                        <div class="option">\n                            <h6 class="option__head">Social media</h6>\n                        </div>\n                        <div class="option">\n                            <h6 class="option__head">Brand guidelines</h6>\n                        </div>\n                    </div>\n                </div>\n                <div class="chat-option">\n                    <img class="chat-option__icon" src="./img/code.svg" alt="">\n                    <h3 class="chat-option__header">Developer Tools</h3>\n                    <div class="options">\n                        <div class="option">\n                            <h6 class="option__head">API Integration</h6>\n                        </div>\n                        <div class="option">\n                            <h6 class="option__head">Test automation</h6>\n                        </div>\n                        <div class="option">\n                            <h6 class="option__head">DB optimization</h6>\n                        </div>\n                        <div class="option">\n                            <h6 class="option__head">Code review</h6>\n                        </div>\n                    </div>\n                </div>\n                <div class="chat-option">\n                    <img class="chat-option__icon" src="./img/pencil.svg" alt="">\n                    <h3 class="chat-option__header">Content Creation</h3>\n                    <div class="options">\n                        <div class="option">\n                            <h6 class="option__head">Product description</h6>\n                        </div>\n                        <div class="option">\n                            <h6 class="option__head">E-mail copy</h6>\n                        </div>\n                        <div class="option">\n                            <h6 class="option__head">Whitepaper</h6>\n                        </div>\n                        <div class="option">\n                            <h6 class="option__head">Press release</h6>\n                        </div>\n                    </div>\n                </div>\n                <div class="chat-option">\n                    <img class="chat-option__icon" src="./img/bulb.svg" alt="">\n                    <h3 class="chat-option__header">Idea Generation</h3>\n                    <div class="options">\n                        <div class="option">\n                            <h6 class="option__head">Brainstorming</h6>\n                        </div>\n                        <div class="option">\n                            <h6 class="option__head">Brochure design</h6>\n                        </div>\n                        <div class="option">\n                            <h6 class="option__head">Trend analysis</h6>\n                        </div>\n                        <div class="option">\n                            <h6 class="option__head">Social media posts</h6>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            ').concat('\n  <div class="chat-input">\n    <img class="chat-input__icon" src="./img/micro.svg" alt="">\n    <input type="text" class="chat-input__send"\n        placeholder="You can ask me anything! I am here to help.">\n    <div class="chat-input-icons">\n        <img class="chat-input__icon" src="./img/telegram.svg" alt="">\n        <img class="chat-input__icon chat-top-icon__edit" src="./img/pin.svg" alt="">\n    </div>\n</div>\n  \n  ',"\n        </div>\n  \n  ")},o.prototype.init=function(){t.prototype.init.call(this)},o.prototype.onClick=function(t){var o=n(n(t.target).parent());o.containClass("chat-top-item")&&(document.querySelector(".chat-top-item-active").classList.remove("chat-top-item-active"),o.$el.classList.add("chat-top-item-active"))},o.className="chat",o}(c),g=function(){var t=function(n,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])},t(n,o)};return function(n,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function e(){this.constructor=n}t(n,o),n.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}}(),y=function(){return y=Object.assign||function(t){for(var n,o=1,e=arguments.length;o<e;o++)for(var i in n=arguments[o])Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);return t},y.apply(this,arguments)},b=function(t){function o(n,o){return t.call(this,n,y({name:"Toolbar",listeners:["click"]},o))||this}return g(o,t),o.prototype.prepare=function(){},o.prototype.toHTML=function(t){return'\n                    <div class="menu-user">\n                        <div class="menu-user-list menu-user-logo">\n                            <img class="menu-user__img" src="./img/Avatar-1.png" alt="User">\n                            <div class="menu-user-name">\n                                <h4 class="menu-user-name__head">Intellisys</h4>\n                                <div class="menu-user-name__members"><span\n                                        class="menu-user-name__members_count">12</span>\n                                    members</div>\n                            </div>\n                        </div>\n                        <div class="menu-user-list">\n                            <h3 class="menu-user-list__header">GENERAL</h3>\n                            <li class="menu-user-list__item"><img class="menu-user-list__icon chat-icon"\n                                    src="./img/search.svg" alt=""> Search</li>\n                            <li class="menu-user-list__item "><img class="menu-user-list__icon"\n                                    src="./img/credit-card.svg" alt=""> Billing</li>\n                        </div>\n                        <div class="menu-user-list" data-wrap="list-menu">\n                            <h3 class="menu-user-list__header">PROJECTS</h3>\n                            <li class="menu-user-list__item menu-user-list__item-active"><img\n                                    class="menu-user-list__icon" src="./img/triangle.svg" alt=""> Orbital Oddysey</li>\n                            <li class="menu-user-list__item "><img class="menu-user-list__icon" src="./img/square.svg"\n                                    alt=""> Digital Product Launch</li>\n                            <li class="menu-user-list__item"><img class="menu-user-list__icon" src="./img/square-1.svg"\n                                    alt=""> Brand Refresh</li>\n                            <li class="menu-user-list__item"><img class="menu-user-list__icon" src="./img/octagon.svg"\n                                    alt=""> Social Media Strategy</li>\n                            <li class="menu-user-list__item menu-user-list__item_add"><img\n                                    class="menu-user-list__icon menu-user-list__icon_add" src="./img/plus-circle.svg"\n                                    alt=""> Add new project</li>\n                        </div>\n                    </div>\n                    <div class="user-bottom menu-user-list__item-active">\n                        <img class="user-bottom__logo" src="./img/Avatar-1.png" alt="Your User">\n                        <div class="user-bottom-text">\n                            <h5 class="user-bottom-text__name menu-user-name__head">Ryan Lee</h5>\n                            <span class="user-bottom-text__status menu-user-name__members">Premium</span>\n                        </div>\n                        <img class="user-bottom-text__setting" src="./img/cog.svg" alt="Setting ">\n                    </div>\n  \n  '},o.prototype.init=function(){t.prototype.init.call(this)},o.prototype.onClick=function(t){var o,e=n(t.target);if(!e.containClass("menu-user-list__item")&&(e=n(e.parent()),!n(e.parent()).getAtrr("data-wrap")))return!1;n(e.parent()).getAtrr("data-wrap")&&(o="menu-user-list__item-active",'[data-wrap="list-menu"]',document.querySelector('[data-wrap="list-menu"]').querySelectorAll("."+o).forEach((function(t){t.classList.remove(o)})),e.add("menu-user-list__item-active"))},o.className="menu",o}(c),w=function(){var t=function(n,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])},t(n,o)};return function(n,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function e(){this.constructor=n}t(n,o),n.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}}();new i("body",{auth:_,chat:function(t){function n(n){void 0===n&&(n="");var o=t.call(this,n)||this;return o.storeSub=null,o}return w(n,t),n.prototype.getRoot=function(){return this.art=new s({components:[b,v]}),this.art.getRoot()},n.prototype.afterRender=function(){this.art.init()},n.prototype.destroy=function(){this.art.destroy(),this.storeSub.unsubscibe()},n}(h)})}();