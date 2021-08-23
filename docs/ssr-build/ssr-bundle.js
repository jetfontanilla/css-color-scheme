module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/light-dark-theme-demo/",n(n.s="QfWi")}({"3Dwp":function(t,e,n){"use strict";e.a=n.p+"0035c307a36c17babb8d25cd02fb6488.png"},"3br2":function(t,e,n){"use strict";(function(t){var r=n("FA6U");e.a=function(){return t("div",{class:r.a.home},t("section",null,t("h1",null,"CSS approach"),t("p",null,t("strong",null,"prefers-color-scheme:")," This media feature for CSS is used to detect if the user prefers a light or dark color theme based on their operating system setting (e.g. light or dark mode) or a user agent setting."),t("strong",null,"Example:"),t("div",{className:r.a.example},t("pre",null,"@media (prefers-color-scheme: dark) ","{\n","\t","color: #fff;","\n","\t","background: #333;","\n","}\n\n","@media (prefers-color-scheme: light) ","{\n","\t","color: #000;","\n","\t","background: #fff;","\n","}")),t("p",null,t("strong",null,"light")," - indicates that user has notified that they prefer an interface that has a light theme, or has not expressed an active preference.",t("br",null),t("strong",null,"dark")," - indicates that user has notified that they prefer an interface that has a dark theme.")),t("section",null,t("h1",null,"JavaScript approach"),t("p",null,"use ",t("strong",null,"Window.matchMedia()")," to query the current document's media query list and match dark or light mode"),t("strong",null,"Example:"),t("div",{className:r.a.example},t("pre",null,'const isLightTheme = window.matchMedia("(prefers-color-scheme: light)").matches',"\n",'const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;'))))}}).call(this,n("HteQ").h)},"445M":function(t,e,n){"use strict";e.a={wrap:"wrap__xVjhE",loader:"loader__1nANT",load8:"load8__3_LRB",load3:"load3__1WxOP"}},"6yhf":function(t,e,n){"use strict";(function(t){var r=n("J38g"),o=n("8n2v");e.a=function(){return t("div",{class:r.a.main},t("ul",null,t("li",null,"Always treat Light mode as default. Systems that don't support themes will fall back to Light mode"),t("li",null,"Avoid inlining styles, use classes instead. It is easier to manage the theming with CSS classes")),t("section",null,t("div",{style:{color:"#512e8e"}},"I am primary???"),t("div",{style:{color:"#9b89b9"}},"I am secondary???"),t("div",{style:{color:"#333"}},"I am regular text???")),t("section",null,t("p",null,"Loaders using theme classes"),t("div",{className:r.a.loaderWrap},t(o.a,{loaderClass:"primary"}),t(o.a,{loaderClass:"secondary"})),t("p",null,"Loaders using fixed colors"),t("div",{className:r.a.loaderWrap},t(o.a,{loaderColor:"#444"}),t(o.a,{loaderColor:"#160433"}))))}}).call(this,n("HteQ").h)},"8n2v":function(t,e,n){"use strict";(function(t){var r=n("445M");e.a=function(e){var n=e.loaderColor,o=e.loaderClass;return t("div",{class:r.a.wrap},t("div",{className:r.a.loader+" "+o,style:{borderLeftColor:n}},"Loading..."))}}).call(this,n("HteQ").h)},"A2v+":function(t,e,n){"use strict";(function(t){var r=n("C+R6");e.a=function(){return t("div",{class:r.a.main},t("section",{class:r.a.beach},t("h1",{class:"primary"},"Primary text"),t("h3",{class:"secondary"},"Secondary text"),t("p",null,"Regular Text"),t("div",{class:r.a.cat,alt:"kitty"})),t("section",{class:r.a.paletteSection},t("span",null,"Color Theme Palette:"),t("span",{class:r.a.palette+" primary"},"◼"),t("span",{class:r.a.palette+" secondary"},"◼"),t("span",{class:r.a.palette},"◼")))}}).call(this,n("HteQ").h)},"C+R6":function(t,e,n){"use strict";e.a={main:"main__nhFWX",paletteSection:"paletteSection__3fS_o",palette:"palette__14XLl",beach:"beach__1C94U",cat:"cat__2vHRK"}},FA6U:function(t,e,n){"use strict";e.a={home:"home__5d1wS",example:"example__1KIUa"}},HteQ:function(t,e){t.exports=require("preact")},J38g:function(t,e,n){"use strict";e.a={main:"main__1ltXQ",loaderWrap:"loaderWrap__1DgNG"}},QfWi:function(t,e,n){"use strict";n.r(e);var r=n("ugae");e.default=r.a},"QyV/":function(t,e,n){"use strict";(function(t){var r=n("ox/y"),o=n("ySiU"),a=n("UQal"),i=n("3Dwp"),c=n("yhhP");e.a=function(e){var n=e.toggleTheme,u=e.isDarkMode;return t("header",{class:o.a.header},t("a",{href:"https://github.com/jetfontanilla/light-dark-theme-demo"},t("img",{src:u()?c.a:i.a,width:"32",height:"32",alt:"View on Github"})),t("h1",null,"Light / Dark theme demo"),t("nav",null,t(r.Link,{activeClassName:o.a.active,href:"/light-dark-theme-demo"},"Basics"),t(r.Link,{activeClassName:o.a.active,href:"/light-dark-theme-demo/demo"},"Demo"),t(r.Link,{activeClassName:o.a.active,href:"/light-dark-theme-demo/best-practice"},"Best Practices")),t("span",{class:o.a.toggleLabel},t("span",{style:{fontSize:"0.8em"}},"Current Theme"),t("br",null),t("strong",null,u()?"DARK":"LIGHT")),t(a.a,{toggleTheme:n,isDarkMode:u}))}}).call(this,n("HteQ").h)},SOnE:function(t,e,n){"use strict";e.a={switch:"switch__1NrFb",slider:"slider__3kBcH"}},UQal:function(t,e,n){"use strict";(function(t){var r=n("SOnE");e.a=function(e){var n=e.toggleTheme,o=e.isDarkMode;return t("label",{className:r.a.switch},t("input",{type:"checkbox",onClick:n,checked:o()}),t("span",{className:r.a.slider}))}}).call(this,n("HteQ").h)},Y3FI:function(t,e,n){"use strict";n.r(e),n.d(e,"subscribers",(function(){return p})),n.d(e,"getCurrentUrl",(function(){return _})),n.d(e,"route",(function(){return m})),n.d(e,"Router",(function(){return x})),n.d(e,"Route",(function(){return O})),n.d(e,"Link",(function(){return w})),n.d(e,"exec",(function(){return i}));var r=n("HteQ"),o={};function a(t,e){for(var n in e)t[n]=e[n];return t}function i(t,e,n){var r,a=/(?:\?([^#]*))?(#.*)?$/,i=t.match(a),c={};if(i&&i[1])for(var u=i[1].split("&"),l=0;l<u.length;l++){var h=u[l].split("=");c[decodeURIComponent(h[0])]=decodeURIComponent(h.slice(1).join("="))}t=s(t.replace(a,"")),e=s(e||"");for(var f=Math.max(t.length,e.length),p=0;p<f;p++)if(e[p]&&":"===e[p].charAt(0)){var d=e[p].replace(/(^:|[+*?]+$)/g,""),_=(e[p].match(/[+*?]+$/)||o)[0]||"",m=~_.indexOf("+"),g=~_.indexOf("*"),v=t[p]||"";if(!v&&!g&&(_.indexOf("?")<0||m)){r=!1;break}if(c[d]=decodeURIComponent(v),m||g){c[d]=t.slice(p).map(decodeURIComponent).join("/");break}}else if(e[p]!==t[p]){r=!1;break}return(!0===n.default||!1!==r)&&c}function c(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function u(t,e){return t.index=e,t.rank=function(t){return t.props.default?0:(e=t.props.path,s(e).map(l).join(""));var e}(t),t.props}function s(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function l(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}var h=null,f=[],p=[],d={};function _(){var t;return""+((t=h&&h.location?h.location:h&&h.getCurrentLocation?h.getCurrentLocation():"undefined"!=typeof location?location:d).pathname||"")+(t.search||"")}function m(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=f.length;e--;)if(f[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),h&&h[e]?h[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),g(t)}function g(t){for(var e=!1,n=0;n<f.length;n++)!0===f[n].routeTo(t)&&(e=!0);for(var r=p.length;r--;)p[r](t);return e}function v(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return m(e)}}function y(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button))return v(t.currentTarget||t.target||this),b(t)}function b(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function k(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")){if(e.hasAttribute("native"))return;if(v(e))return b(t)}}while(e=e.parentNode)}}var C=!1;var x=function(t){function e(e){t.call(this,e),e.history&&(h=e.history),this.state={url:e.url||_()},C||("function"==typeof addEventListener&&(h||addEventListener("popstate",(function(){g(_())})),addEventListener("click",k)),C=!0)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){var e=Object(r.toChildArray)(this.props.children);return this.getMatchingChildren(e,t,!1).length>0},e.prototype.routeTo=function(t){this.setState({url:t});var e=this.canRoute(t);return this.updating||this.forceUpdate(),e},e.prototype.componentWillMount=function(){f.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;h&&(this.unlisten=h.listen((function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))}))),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),f.splice(f.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(u).sort(c).map((function(t){var o=i(e,t.props.path,t.props);if(o){if(!1!==n){var c={url:e,matches:o};return a(c,o),delete c.ref,delete c.key,Object(r.cloneElement)(t,c)}return t}})).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,o=t.onChange,a=e.url,i=this.getMatchingChildren(Object(r.toChildArray)(n),a,!0),c=i[0]||null,u=this.previousUrl;return a!==u&&(this.previousUrl=a,"function"==typeof o&&o({router:this,url:a,previous:u,active:i,current:c})),c},e}(r.Component),w=function(t){return Object(r.createElement)("a",a({onClick:y},t))},O=function(t){return Object(r.createElement)(t.component,t)};x.subscribers=p,x.getCurrentUrl=_,x.route=m,x.Router=x,x.Route=O,x.Link=w,x.exec=i,e.default=x},jacP:function(t,e,n){"use strict";n.d(e,"a",(function(){return C}));var r,o,a,i=n("HteQ"),c=0,u=[],s=i.options.__b,l=i.options.__r,h=i.options.diffed,f=i.options.__c,p=i.options.unmount;function d(t,e){i.options.__h&&i.options.__h(o,t,c||e),c=0;var n=o.__H||(o.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function _(t){return c=1,function(t,e,n){var a=d(r++,2);return a.t=t,a.__c||(a.__=[n?n(e):k(void 0,e),function(t){var e=a.t(a.__[0],t);a.__[0]!==e&&(a.__=[e,a.__[1]],a.__c.setState({}))}],a.__c=o),a.__}(k,t)}function m(){u.forEach((function(t){if(t.__P)try{t.__H.__h.forEach(v),t.__H.__h.forEach(y),t.__H.__h=[]}catch(e){t.__H.__h=[],i.options.__e(e,t.__v)}})),u=[]}i.options.__b=function(t){o=null,s&&s(t)},i.options.__r=function(t){l&&l(t),r=0;var e=(o=t.__c).__H;e&&(e.__h.forEach(v),e.__h.forEach(y),e.__h=[])},i.options.diffed=function(t){h&&h(t);var e=t.__c;e&&e.__H&&e.__H.__h.length&&(1!==u.push(e)&&a===i.options.requestAnimationFrame||((a=i.options.requestAnimationFrame)||function(t){var e,n=function(){clearTimeout(r),g&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);g&&(e=requestAnimationFrame(n))})(m)),o=void 0},i.options.__c=function(t,e){e.some((function(t){try{t.__h.forEach(v),t.__h=t.__h.filter((function(t){return!t.__||y(t)}))}catch(n){e.some((function(t){t.__h&&(t.__h=[])})),e=[],i.options.__e(n,t.__v)}})),f&&f(t,e)},i.options.unmount=function(t){p&&p(t);var e=t.__c;if(e&&e.__H)try{e.__H.__.forEach(v)}catch(t){i.options.__e(t,e.__v)}};var g="function"==typeof requestAnimationFrame;function v(t){var e=o;"function"==typeof t.__c&&t.__c(),o=e}function y(t){var e=o;t.__c=t.__(),o=e}function b(t,e){return!t||t.length!==e.length||e.some((function(e,n){return e!==t[n]}))}function k(t,e){return"function"==typeof e?e(t):e}var C=function(){var t,e,n,a=_("light"),c=a[0],u=a[1],s=_(!1),l=s[0],h=s[1],f=function(t){window.localStorage.setItem("theme",t),u(t)};return t=function(){var t=window.localStorage.getItem("theme"),e=t||(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");u(e),h(!0)},e=[],n=d(r++,3),!i.options.__s&&b(n.__H,e)&&(n.__=t,n.__H=e,o.__H.__h.push(n)),[function(){f("light"===c?"dark":"light")},l,function(){return"dark"===c}]}},"ox/y":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Link=e.Match=void 0;var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=n("HteQ"),a=n("Y3FI");function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var u=e.Match=function(t){function e(){var n,r;i(this,e);for(var o=arguments.length,a=Array(o),u=0;u<o;u++)a[u]=arguments[u];return n=r=c(this,t.call.apply(t,[this].concat(a))),r.update=function(t){r.nextUrl=t,r.setState({})},c(r,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentDidMount=function(){a.subscribers.push(this.update)},e.prototype.componentWillUnmount=function(){a.subscribers.splice(a.subscribers.indexOf(this.update)>>>0,1)},e.prototype.render=function(t){var e=this.nextUrl||(0,a.getCurrentUrl)(),n=e.replace(/\?.+$/,"");return this.nextUrl=null,t.children({url:e,path:n,matches:!1!==(0,a.exec)(n,t.path,{})})},e}(o.Component),s=function(t){var e=t.activeClassName,n=t.path,i=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(t,["activeClassName","path"]);return(0,o.h)(u,{path:n||i.href},(function(t){var n=t.matches;return(0,o.h)(a.Link,r({},i,{class:[i.class||i.className,n&&e].filter(Boolean).join(" ")}))}))};e.Link=s,e.default=u,u.Link=s},ugae:function(t,e,n){"use strict";(function(t){var r=n("Y3FI"),o=n("QyV/"),a=n("3br2"),i=n("A2v+"),c=n("6yhf"),u=n("jacP");e.a=function(){var e=Object(u.a)(),n=e[0],s=e[1],l=e[2];return s?t("div",{id:"app",class:l()?"dark":"light"},t(o.a,{toggleTheme:n,isDarkMode:l}),t(r.Router,null,t(a.a,{path:"/light-dark-theme-demo/"}),t(i.a,{path:"/light-dark-theme-demo/demo"}),t(c.a,{path:"/light-dark-theme-demo/best-practice"}))):t("div",null)}}).call(this,n("HteQ").h)},ySiU:function(t,e,n){"use strict";e.a={header:"header__3ax1h",active:"active__2XB2z",toggleLabel:"toggleLabel__yrYDr"}},yhhP:function(t,e,n){"use strict";e.a=n.p+"266ca63177bca6f330a74e83fdc63178.png"}});
//# sourceMappingURL=ssr-bundle.js.map