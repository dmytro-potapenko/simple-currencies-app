/*! For license information please see 545.e4ae9ff6.chunk.js.LICENSE.txt */
(self.webpackChunkgeorge_fx_test=self.webpackChunkgeorge_fx_test||[]).push([[545],{7545:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return re}});var n=t(4098),a=t(2791);if(!a.useState)throw new Error("mobx-react-lite requires React with Hooks support");if(!n.rC)throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");var i=t(4164);function o(e){e()}function c(e){return(0,n.Gf)(e)}var u=1e4,l=function(){function e(e){var r=this;Object.defineProperty(this,"finalize",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"registrations",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"sweepTimeout",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sweep",{enumerable:!0,configurable:!0,writable:!0,value:function(e){void 0===e&&(e=u),clearTimeout(r.sweepTimeout),r.sweepTimeout=void 0;var t=Date.now();r.registrations.forEach((function(n,a){t-n.registeredAt>=e&&(r.finalize(n.value),r.registrations.delete(a))})),r.registrations.size>0&&r.scheduleSweep()}}),Object.defineProperty(this,"finalizeAllImmediately",{enumerable:!0,configurable:!0,writable:!0,value:function(){r.sweep(0)}})}return Object.defineProperty(e.prototype,"register",{enumerable:!1,configurable:!0,writable:!0,value:function(e,r,t){this.registrations.set(t,{value:r,registeredAt:Date.now()}),this.scheduleSweep()}}),Object.defineProperty(e.prototype,"unregister",{enumerable:!1,configurable:!0,writable:!0,value:function(e){this.registrations.delete(e)}}),Object.defineProperty(e.prototype,"scheduleSweep",{enumerable:!1,configurable:!0,writable:!0,value:function(){void 0===this.sweepTimeout&&(this.sweepTimeout=setTimeout(this.sweep,1e4))}}),e}(),s=new("undefined"!==typeof FinalizationRegistry?FinalizationRegistry:l)((function(e){var r;null===(r=e.reaction)||void 0===r||r.dispose(),e.reaction=null})),f=!1;function d(){return f}var p=function(e,r){var t="function"===typeof Symbol&&e[Symbol.iterator];if(!t)return e;var n,a,i=t.call(e),o=[];try{for(;(void 0===r||r-- >0)&&!(n=i.next()).done;)o.push(n.value)}catch(c){a={error:c}}finally{try{n&&!n.done&&(t=i.return)&&t.call(i)}finally{if(a)throw a.error}}return o};function y(e){return"observer".concat(e)}var v=function(){};function m(){return new v}function b(e,r){if(void 0===r&&(r="observed"),d())return e();var t=p(a.useState(m),1)[0],i=p(a.useState(),2)[1],o=function(){return i([])},u=a.useRef(null);u.current||(u.current={reaction:null,mounted:!1,changedBeforeMount:!1});var l,f,v=u.current;if(v.reaction||(v.reaction=new n.le(y(r),(function(){v.mounted?o():v.changedBeforeMount=!0})),s.register(t,v,v)),a.useDebugValue(v.reaction,c),a.useEffect((function(){return s.unregister(v),v.mounted=!0,v.reaction?v.changedBeforeMount&&(v.changedBeforeMount=!1,o()):(v.reaction=new n.le(y(r),(function(){o()})),o()),function(){v.reaction.dispose(),v.reaction=null,v.mounted=!1,v.changedBeforeMount=!1}}),[]),v.reaction.track((function(){try{l=e()}catch(r){f=r}})),f)throw f;return l}var h="function"===typeof Symbol&&Symbol.for,g=h?Symbol.for("react.forward_ref"):"function"===typeof a.forwardRef&&(0,a.forwardRef)((function(e){return null})).$$typeof,_=h?Symbol.for("react.memo"):"function"===typeof a.memo&&(0,a.memo)((function(e){return null})).$$typeof;function j(e,r){var t;if(_&&e.$$typeof===_)throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");if(d())return e;var n=null!==(t=null===r||void 0===r?void 0:r.forwardRef)&&void 0!==t&&t,i=e,o=e.displayName||e.name;if(g&&e.$$typeof===g&&(n=!0,"function"!==typeof(i=e.render)))throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");var c,u,l=function(e,r){return b((function(){return i(e,r)}),o)};return""!==o&&(l.displayName=o),e.contextTypes&&(l.contextTypes=e.contextTypes),n&&(l=(0,a.forwardRef)(l)),l=(0,a.memo)(l),c=e,u=l,Object.keys(c).forEach((function(e){w[e]||Object.defineProperty(u,e,Object.getOwnPropertyDescriptor(c,e))})),l}var w={$$typeof:!0,render:!0,compare:!0,type:!0,displayName:!0};var x,E;(E=i.unstable_batchedUpdates)||(E=o),(0,n.jQ)({reactionScheduler:E});x=s.finalizeAllImmediately;var T=t(9439),S=t(9936),C=t(1413);function N(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var O=t(4505),R=t(184),I=["error"];var A=t(2411),F=["fetching"];var M,H=t(3666),P=t(278),Z=t(1694),k=t.n(Z),$=["title","titleId"];function L(){return L=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},L.apply(this,arguments)}function z(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function B(e,r){var t=e.title,n=e.titleId,i=z(e,$);return a.createElement("svg",L({xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",viewBox:"0 0 24 24",ref:r,"aria-labelledby":n},i),t?a.createElement("title",{id:n},t):null,M||(M=a.createElement("path",{d:"M19.5,4H10a1,1,0,0,0,0,2H19.5a1,1,0,0,1,1,1v6.76l-1.88-1.88a3,3,0,0,0-1.14-.71,1,1,0,1,0-.64,1.9.82.82,0,0,1,.36.23l3.31,3.29a.66.66,0,0,0,0,.15.83.83,0,0,0,0,.15,1.18,1.18,0,0,0,.13.18.48.48,0,0,0,.09.11.9.9,0,0,0,.2.14.6.6,0,0,0,.11.06.91.91,0,0,0,.37.08,1,1,0,0,0,1-1V7A3,3,0,0,0,19.5,4ZM3.21,2.29A1,1,0,0,0,1.79,3.71L3.18,5.1A3,3,0,0,0,2.5,7V17a3,3,0,0,0,3,3H18.09l1.7,1.71a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM4.5,7a1,1,0,0,1,.12-.46L7.34,9.25a3,3,0,0,0-1,.63L4.5,11.76Zm1,11a1,1,0,0,1-1-1V14.58l3.3-3.29a1,1,0,0,1,1.4,0L15.91,18Z"})))}var D,Y=a.forwardRef(B),G=(t.p,function(e){var r=e.currency,t=r.isCommon,n=r.flag;return n?(0,R.jsx)("img",{"data-cy-id":H.F.SEARCH_ITEMS_CONTAINER__ITEM__FLAG,className:k()("left-data__flag","mr-1"),src:n,alt:"flag"}):!n&&t?(0,R.jsx)("div",{"data-cy-id":H.F.SEARCH_ITEMS_CONTAINER__ITEM__FLAG,className:k()("left-data__flag","left-data__flag--dumb","mr-1"),children:(0,R.jsxs)("p",{children:["Common",(0,R.jsx)("br",{}),"currency"]})}):(0,R.jsx)("div",{"data-cy-id":H.F.SEARCH_ITEMS_CONTAINER__ITEM__FLAG,className:k()("left-data__flag","left-data__flag--dumb","left-data__flag--no-image","mr-1"),children:(0,R.jsx)(Y,{})})}),K=function(e){var r=e.currency.exchangeRate,t=r.buy,n=r.sell,a=e.baseCurrency;return t||n?(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)("p",{children:[null!==t&&void 0!==t?t:"-"," / ",null!==n&&void 0!==n?n:"-"]}),(0,R.jsx)("b",{children:a})]}):(0,R.jsx)("p",{className:"right-data__no-data",children:"No exchange data"})},V=function(e){var r=e.currency,t=r.isCommon,n=r.name,a=r.countryName,i=r.abbreviation;return t?(0,R.jsx)("b",{children:i}):(0,R.jsxs)(R.Fragment,{children:[a," (","".concat(n?n+" - ":""),(0,R.jsx)("b",{children:i}),")"]})},q=function(e){var r=e.data,t=e.baseCurrency,n=r.abbreviation;return(0,R.jsxs)("div",{"data-cy-id":H.F.SEARCH_ITEMS_CONTAINER__ITEM,className:k()("currency-item","mb-1"),children:[(0,R.jsxs)("div",{className:"left-data",children:[(0,R.jsx)(G,{currency:r}),(0,R.jsx)("p",{"data-cy-id":H.F.SEARCH_ITEMS_CONTAINER__ITEM__INFO,className:"left-data__info",children:(0,R.jsx)(V,{currency:r})})]}),(0,R.jsx)("div",{"data-cy-id":H.F.SEARCH_ITEMS_CONTAINER__ITEM__CURRENCY_RATE,className:k()("right-data","ml-1"),children:(0,R.jsx)(K,{currency:r,baseCurrency:t})})]},n)},U=t(4942),X=t(1087),Q=function(e){var r=e.value,t=e.onChange,n=e.placeholder;return(0,R.jsx)("input",{"data-cy-id":e["data-cy-id"],className:"input-field",type:"text",value:r,onChange:function(e){return null===t||void 0===t?void 0:t(e.target.value)},placeholder:n})},J=function(e){var r=e.value,t=e.onChange,n=e.baseCurrency,i=function(e,r){var t=(0,X.lr)(),n=(0,T.Z)(t,2),i=n[0],o=n[1],c=function(t){r(t),o((0,U.Z)({},e,t))};return(0,a.useEffect)((function(){var r=i.get(e);r&&c(r)}),[]),c}("q",t);return(0,R.jsxs)("div",{"data-cy-id":H.F.STICKY_CONTAINER,className:"sticky-container",children:[(0,R.jsx)("div",{className:"search-input-container",children:(0,R.jsx)(Q,{"data-cy-id":H.F.STICKY_CONTAINER__SEARCH_INPUT,value:r,onChange:i,placeholder:"Search..."})}),(0,R.jsxs)("div",{"data-cy-id":H.F.STICKY_CONTAINER__HEADER,className:"items-header",children:[(0,R.jsx)("p",{"data-cy-id":H.F.STICKY_CONTAINER__HEADER__LEFT_TEXT,className:"currency",children:"Currency"}),(0,R.jsxs)("p",{"data-cy-id":H.F.STICKY_CONTAINER__HEADER__RIGHT_TEXT,children:["Buy / Sell ",(0,R.jsx)("b",{children:n})]})]})]})},W=(0,S.pipe)((function(e){var r=e.data,t=r.baseCurrency,n=r.currencies,i=(0,a.useState)(""),o=(0,T.Z)(i,2),c=o[0],u=o[1],l=(0,a.useMemo)((function(){return(0,P.re)(n,c)}),[n,c]);return(0,R.jsxs)("div",{"data-cy-id":H.F.SEARCH_SCREEN,className:"search-screen-container",children:[(0,R.jsx)(J,{value:c,onChange:u,baseCurrency:t}),(0,R.jsx)("div",{"data-cy-id":H.F.SEARCH_ITEMS_CONTAINER,className:"search-items-container",children:l.map((function(e){return(0,R.jsx)(q,{data:e,baseCurrency:t},e.abbreviation)}))})]})}),j,(D=function(e){return e.data},function(e){return function(r){var t=D(r);return null!==t&&void 0!==t?(0,R.jsx)(e,(0,C.Z)({},r)):null}}),function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).spinnerType;return function(r){return function(t){var n=t.fetching,a=N(t,F);return n?(0,R.jsx)(A.Z,{type:e}):(0,R.jsx)(r,(0,C.Z)({},a))}}}({spinnerType:A.d.Screen}),(function(e){return function(r){var t=r.error,n=N(r,I);return t?(0,R.jsx)(O.tG,{}):(0,R.jsx)(e,(0,C.Z)({},n))}})),ee=W,re=j((function(e){var r=e.store,t=r.searchStore,n=t.ownFetching,i=t.enrichedCurrencies,o=t.error,c=r.searchStore;return(0,a.useEffect)((function(){c.getAll()}),[]),(0,R.jsx)(ee,{data:i,fetching:n,error:o})}))},1694:function(e,r){var t;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],r=0;r<arguments.length;r++){var t=arguments[r];if(t){var i=typeof t;if("string"===i||"number"===i)e.push(t);else if(Array.isArray(t)){if(t.length){var o=a.apply(null,t);o&&e.push(o)}}else if("object"===i){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var c in t)n.call(t,c)&&t[c]&&e.push(c)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(t=function(){return a}.apply(r,[]))||(e.exports=t)}()}}]);
//# sourceMappingURL=545.e4ae9ff6.chunk.js.map