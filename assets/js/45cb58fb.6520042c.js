"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[81404],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=l(r),f=o,g=h["".concat(p,".").concat(f)]||h[f]||s[f]||a;return r?n.createElement(g,c(c({ref:t},u),{},{components:r})):n.createElement(g,c({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},23279:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return p},assets:function(){return l},toc:function(){return u},default:function(){return h}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),c={title:"How to integrate with Dapr to build Apache APISIX Gateway Controller",author:"Shanyou Zhang",authorURL:"https://github.com/geffzhang",authorImageURL:"https://avatars.githubusercontent.com/u/439390?v=4",keywords:["Apache APISIX","Dapr","Kubernetes","API Gateway","Sidecar"],description:"This article will show you how to create an Apache APISIX controller by integrating Dapr, includes the concept of the project and the specific operation steps.",tags:["Technology"]},i=void 0,p={permalink:"/blog/2021/11/17/dapr-with-apisix",source:"@site/blog/2021/11/17/dapr-with-apisix.md",title:"How to integrate with Dapr to build Apache APISIX Gateway Controller",description:"This article will show you how to create an Apache APISIX controller by integrating Dapr, includes the concept of the project and the specific operation steps.",date:"2021-11-17T00:00:00.000Z",formattedDate:"November 17, 2021",tags:[{label:"Technology",permalink:"/blog/tags/technology"}],readingTime:5.505,truncated:!0,authors:[{name:"Shanyou Zhang",url:"https://github.com/geffzhang",imageURL:"https://avatars.githubusercontent.com/u/439390?v=4"}],prevItem:{title:"Apache APISIX embraces the WASM ecosystem",permalink:"/blog/2021/11/19/apisix-supports-wasm"},nextItem:{title:"Weekly Report\uff5c11.1-11.14 Feature Highlights Update in Progress",permalink:"/blog/2021/11/16/weekly-report-1114"}},l={authorsImageUrls:[void 0]},u=[],s={toc:u};function h(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This article will show you how to create an Apache APISIX controller by integrating Dapr, includes the concept of the project and the specific operation steps.")))}h.isMDXComponent=!0}}]);