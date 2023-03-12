/*! For license information please see 808.2d7eb736.chunk.js.LICENSE.txt */
(self.webpackChunkgeorge_fx_test=self.webpackChunkgeorge_fx_test||[]).push([[808],{7808:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return X}});var t=n(4098),i=n(2791);if(!i.useState)throw new Error("mobx-react-lite requires React with Hooks support");if(!t.rC)throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");var a=n(4164);function o(e){e()}function c(e){return(0,t.Gf)(e)}var u=1e4,l=function(){function e(e){var r=this;Object.defineProperty(this,"finalize",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"registrations",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"sweepTimeout",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sweep",{enumerable:!0,configurable:!0,writable:!0,value:function(e){void 0===e&&(e=u),clearTimeout(r.sweepTimeout),r.sweepTimeout=void 0;var n=Date.now();r.registrations.forEach((function(t,i){n-t.registeredAt>=e&&(r.finalize(t.value),r.registrations.delete(i))})),r.registrations.size>0&&r.scheduleSweep()}}),Object.defineProperty(this,"finalizeAllImmediately",{enumerable:!0,configurable:!0,writable:!0,value:function(){r.sweep(0)}})}return Object.defineProperty(e.prototype,"register",{enumerable:!1,configurable:!0,writable:!0,value:function(e,r,n){this.registrations.set(n,{value:r,registeredAt:Date.now()}),this.scheduleSweep()}}),Object.defineProperty(e.prototype,"unregister",{enumerable:!1,configurable:!0,writable:!0,value:function(e){this.registrations.delete(e)}}),Object.defineProperty(e.prototype,"scheduleSweep",{enumerable:!1,configurable:!0,writable:!0,value:function(){void 0===this.sweepTimeout&&(this.sweepTimeout=setTimeout(this.sweep,1e4))}}),e}(),s=new("undefined"!==typeof FinalizationRegistry?FinalizationRegistry:l)((function(e){var r;null===(r=e.reaction)||void 0===r||r.dispose(),e.reaction=null})),f=!1;function d(){return f}var p=function(e,r){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var t,i,a=n.call(e),o=[];try{for(;(void 0===r||r-- >0)&&!(t=a.next()).done;)o.push(t.value)}catch(c){i={error:c}}finally{try{t&&!t.done&&(n=a.return)&&n.call(a)}finally{if(i)throw i.error}}return o};function m(e){return"observer".concat(e)}var v=function(){};function h(){return new v}function b(e,r){if(void 0===r&&(r="observed"),d())return e();var n=p(i.useState(h),1)[0],a=p(i.useState(),2)[1],o=function(){return a([])},u=i.useRef(null);u.current||(u.current={reaction:null,mounted:!1,changedBeforeMount:!1});var l,f,v=u.current;if(v.reaction||(v.reaction=new t.le(m(r),(function(){v.mounted?o():v.changedBeforeMount=!0})),s.register(n,v,v)),i.useDebugValue(v.reaction,c),i.useEffect((function(){return s.unregister(v),v.mounted=!0,v.reaction?v.changedBeforeMount&&(v.changedBeforeMount=!1,o()):(v.reaction=new t.le(m(r),(function(){o()})),o()),function(){v.reaction.dispose(),v.reaction=null,v.mounted=!1,v.changedBeforeMount=!1}}),[]),v.reaction.track((function(){try{l=e()}catch(r){f=r}})),f)throw f;return l}var y="function"===typeof Symbol&&Symbol.for,g=y?Symbol.for("react.forward_ref"):"function"===typeof i.forwardRef&&(0,i.forwardRef)((function(e){return null})).$$typeof,j=y?Symbol.for("react.memo"):"function"===typeof i.memo&&(0,i.memo)((function(e){return null})).$$typeof;function x(e,r){var n;if(j&&e.$$typeof===j)throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");if(d())return e;var t=null!==(n=null===r||void 0===r?void 0:r.forwardRef)&&void 0!==n&&n,a=e,o=e.displayName||e.name;if(g&&e.$$typeof===g&&(t=!0,"function"!==typeof(a=e.render)))throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");var c,u,l=function(e,r){return b((function(){return a(e,r)}),o)};return""!==o&&(l.displayName=o),e.contextTypes&&(l.contextTypes=e.contextTypes),t&&(l=(0,i.forwardRef)(l)),l=(0,i.memo)(l),c=e,u=l,Object.keys(c).forEach((function(e){w[e]||Object.defineProperty(u,e,Object.getOwnPropertyDescriptor(c,e))})),l}var w={$$typeof:!0,render:!0,compare:!0,type:!0,displayName:!0};var O,S;(S=a.unstable_batchedUpdates)||(S=o),(0,t.jQ)({reactionScheduler:S});O=s.finalizeAllImmediately;var N=n(9439),C=n(9936),P=n(8683);function E(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var R=n(4505),T=n(184),k=["error"];var A=n(2411),M=["fetching"];var Z,$=n(278),_=n(1694),F=n.n(_),z=["title","titleId"];function B(){return B=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},B.apply(this,arguments)}function I(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function L(e,r){var n=e.title,t=e.titleId,a=I(e,z);return i.createElement("svg",B({xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",viewBox:"0 0 24 24",ref:r,"aria-labelledby":t},a),n?i.createElement("title",{id:t},n):null,Z||(Z=i.createElement("path",{d:"M19.5,4H10a1,1,0,0,0,0,2H19.5a1,1,0,0,1,1,1v6.76l-1.88-1.88a3,3,0,0,0-1.14-.71,1,1,0,1,0-.64,1.9.82.82,0,0,1,.36.23l3.31,3.29a.66.66,0,0,0,0,.15.83.83,0,0,0,0,.15,1.18,1.18,0,0,0,.13.18.48.48,0,0,0,.09.11.9.9,0,0,0,.2.14.6.6,0,0,0,.11.06.91.91,0,0,0,.37.08,1,1,0,0,0,1-1V7A3,3,0,0,0,19.5,4ZM3.21,2.29A1,1,0,0,0,1.79,3.71L3.18,5.1A3,3,0,0,0,2.5,7V17a3,3,0,0,0,3,3H18.09l1.7,1.71a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM4.5,7a1,1,0,0,1,.12-.46L7.34,9.25a3,3,0,0,0-1,.63L4.5,11.76Zm1,11a1,1,0,0,1-1-1V14.58l3.3-3.29a1,1,0,0,1,1.4,0L15.91,18Z"})))}var q,D=i.forwardRef(L),H=(n.p,function(e,r){var n=e.exchangeRate,t=n.buy,i=n.sell;return t&&i?(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)("p",{children:[t," / ",i]}),(0,T.jsx)("b",{children:r})]}):!t&&i?(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)("p",{children:["- / ",i]}),(0,T.jsx)("b",{children:r})]}):t&&!i?(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)("p",{children:[t," / -"]}),(0,T.jsx)("b",{children:r})]}):(0,T.jsx)("p",{className:"currency-item--no-data",children:"No exchange data"})}),V=function(e){var r=e.isCommon,n=e.name,t=e.countryName,i=e.abbreviation;return r?(0,T.jsx)("b",{children:i}):(0,T.jsxs)(T.Fragment,{children:[t," (","".concat(n?n+" - ":""),(0,T.jsx)("b",{children:i}),")"]})},G=function(e){var r=e.isCommon,n=e.flag;return n?(0,T.jsx)("img",{className:F()("currency-item__flag","mr-1"),src:n,alt:"flag"}):r?(0,T.jsx)("div",{className:F()("dumb-flag","mr-1"),children:(0,T.jsxs)("p",{children:["Common",(0,T.jsx)("br",{}),"currency"]})}):(0,T.jsx)("div",{className:F()("dumb-flag","dumb-flag--no-image","mr-1"),children:(0,T.jsx)(D,{})})},Q=function(e){var r=e.data,n=e.baseCurrency,t=r.abbreviation;return(0,T.jsxs)("div",{className:F()("currency-item","mb-1"),children:[(0,T.jsxs)("div",{className:"currency-item--left",children:[G(r),(0,T.jsx)("p",{className:"currency-item__info",children:V(r)})]}),(0,T.jsx)("div",{className:F()("currency-item--right","ml-1"),children:H(r,n)})]},t)},U=n(1087),Y=function(e){var r=e.value,n=e.onChange,t=e.placeholder;return(0,T.jsx)("input",{className:"input-field",type:"text",value:r,onChange:function(e){return null===n||void 0===n?void 0:n(e.target.value)},placeholder:t})},J=function(e){var r=e.value,n=e.onChange,t=e.baseCurrency,a=(0,U.lr)(),o=(0,N.Z)(a,2),c=o[0],u=o[1];(0,i.useEffect)((function(){var e;return n(null!==(e=c.get("q"))&&void 0!==e?e:"")}),[]);return(0,T.jsxs)("div",{className:"sticky-container",children:[(0,T.jsx)("div",{className:"search-input-container",children:(0,T.jsx)(Y,{value:r,onChange:function(e){n(e),u({q:e})},placeholder:"Search..."})}),(0,T.jsxs)("div",{className:"items-header",children:[(0,T.jsx)("p",{className:"currency",children:"Currency"}),(0,T.jsxs)("p",{children:["Buy / Sell ",(0,T.jsx)("b",{children:t})]})]})]})},K=(0,C.pipe)((function(e){var r=e.data,n=r.baseCurrency,t=r.currencies,a=(0,i.useState)(""),o=(0,N.Z)(a,2),c=o[0],u=o[1],l=(0,i.useMemo)((function(){return(0,$.re)(t,c)}),[t,c]);return(0,T.jsxs)("div",{className:"search-screen-container",children:[(0,T.jsx)(J,{value:c,onChange:u,baseCurrency:n}),(0,T.jsx)("div",{className:"search-items-container",children:l.map((function(e){return(0,T.jsx)(Q,{data:e,baseCurrency:n},e.abbreviation)}))})]})}),x,(q=function(e){return e.data},function(e){return function(r){var n=q(r);return null!==n&&void 0!==n?(0,T.jsx)(e,(0,P.Z)({},r)):null}}),function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).spinnerType;return function(r){return function(n){var t=n.fetching,i=E(n,M);return t?(0,T.jsx)(A.Z,{type:e}):(0,T.jsx)(r,(0,P.Z)({},i))}}}({spinnerType:A.d.Screen}),(function(e){return function(r){var n=r.error,t=E(r,k);return n?(0,T.jsx)(R.tG,{}):(0,T.jsx)(e,(0,P.Z)({},t))}})),W=K,X=x((function(e){var r=e.store,n=r.searchStore,t=n.ownFetching,a=n.enrichedCurrencies,o=n.error,c=r.searchStore;return(0,i.useEffect)((function(){c.getAll()}),[]),(0,T.jsx)(W,{data:a,fetching:t,error:o})}))},1694:function(e,r){var n;!function(){"use strict";var t={}.hasOwnProperty;function i(){for(var e=[],r=0;r<arguments.length;r++){var n=arguments[r];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var o=i.apply(null,n);o&&e.push(o)}}else if("object"===a){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var c in n)t.call(n,c)&&n[c]&&e.push(c)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(r,[]))||(e.exports=n)}()}}]);
//# sourceMappingURL=808.2d7eb736.chunk.js.map