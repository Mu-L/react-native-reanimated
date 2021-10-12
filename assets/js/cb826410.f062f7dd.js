"use strict";(self.webpackChunkreact_native_reanimated=self.webpackChunkreact_native_reanimated||[]).push([[449],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,c(c({ref:t},s),{},{components:n})):r.createElement(m,c({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90573:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),c={},i=void 0,l={unversionedId:"nodes/stopClock",id:"version-1.x.x/nodes/stopClock",isDocsHomePage:!1,title:"stopClock",description:"stopClock",source:"@site/versioned_docs/version-1.x.x/nodes/stopClock.md",sourceDirName:"nodes",slug:"/nodes/stopClock",permalink:"/react-native-reanimated/docs/1.x.x/nodes/stopClock",version:"1.x.x",frontMatter:{},sidebar:"version-1.x.x/docs",previous:{title:"startClock",permalink:"/react-native-reanimated/docs/1.x.x/nodes/startClock"},next:{title:"acc",permalink:"/react-native-reanimated/docs/1.x.x/nodes/acc"}},p=[{value:"<code>stopClock</code>",id:"stopclock",children:[]}],s={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"stopclock"},(0,a.kt)("inlineCode",{parentName:"h2"},"stopClock")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"stopClock(clockNode);\n")),(0,a.kt)("p",null,"When evaluated, it will stop evaluating nodes dependent on ",(0,a.kt)("inlineCode",{parentName:"p"},"clockNode"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE"),"\nThe clock, even after using ",(0,a.kt)("inlineCode",{parentName:"p"},"stopClock")," on it, will keep updating it's value. ",(0,a.kt)("inlineCode",{parentName:"p"},"stopClock")," merely prevents other nodes from evaluation when clock updates.\nTo save the moment when clock was stopped please use ",(0,a.kt)("inlineCode",{parentName:"p"},"Value"),"."))}u.isMDXComponent=!0}}]);