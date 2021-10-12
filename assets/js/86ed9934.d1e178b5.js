"use strict";(self.webpackChunkreact_native_reanimated=self.webpackChunkreact_native_reanimated||[]).push([[4464],{3905:function(e,n,t){t.d(n,{Zo:function(){return f},kt:function(){return p}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),u=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},f=function(e){var n=u(e.components);return r.createElement(d.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),s=u(t),p=o,m=s["".concat(d,".").concat(p)]||s[p]||l[p]||i;return t?r.createElement(m,a(a({ref:n},f),{},{components:t})):r.createElement(m,a({ref:n},f))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=s;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},6094:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return l}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a={},c=void 0,d={unversionedId:"nodes/defined",id:"version-1.x.x/nodes/defined",isDocsHomePage:!1,title:"defined",description:"defined",source:"@site/versioned_docs/version-1.x.x/nodes/defined.md",sourceDirName:"nodes",slug:"/nodes/defined",permalink:"/react-native-reanimated/docs/1.x.x/nodes/defined",version:"1.x.x",frontMatter:{},sidebar:"version-1.x.x/docs",previous:{title:"debug",permalink:"/react-native-reanimated/docs/1.x.x/nodes/debug"},next:{title:"diff",permalink:"/react-native-reanimated/docs/1.x.x/nodes/diff"}},u=[{value:"<code>defined</code>",id:"defined",children:[]}],f={toc:u};function l(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"defined"},(0,i.kt)("inlineCode",{parentName:"h2"},"defined")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"defined(node);\n")),(0,i.kt)("p",null,"Returns ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),' if the given node evaluates to a "defined" value (that is to something that is non-null, non-undefined and non-NaN). Returns ',(0,i.kt)("inlineCode",{parentName:"p"},"0")," otherwise."))}l.isMDXComponent=!0}}]);