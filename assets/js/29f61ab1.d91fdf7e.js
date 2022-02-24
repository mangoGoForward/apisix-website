"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[19941],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(n),h=a,m=f["".concat(l,".").concat(h)]||f[h]||p[h]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},22976:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return s},toc:function(){return u},default:function(){return f}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i={title:"How to use API Gateway to process 1 billion traffic daily for Tencent?",author:"Xin Xu",keywords:["API Gateway","APISIX","Apache APISIX","Tencent Games","Infrastructure"],description:"This article is a lecture note from the speech given by Xin Xu, an engineer in charge of internal container platform of Tencent Games, at the Apache APISIX Meetup - Shenzhen. By reading this article, you can not only learn what a gateway is and how the gateway model improves the traditional service architecture, but also understand the reasons for the birth of Tencent OTeam and how Apache APISIX is implemented inside Tencent.",tags:["User Case"]},c=void 0,l={permalink:"/blog/2021/05/24/Tencent-Games",source:"@site/blog/2021/05/24/Tencent-Games.md",title:"How to use API Gateway to process 1 billion traffic daily for Tencent?",description:"This article is a lecture note from the speech given by Xin Xu, an engineer in charge of internal container platform of Tencent Games, at the Apache APISIX Meetup - Shenzhen. By reading this article, you can not only learn what a gateway is and how the gateway model improves the traditional service architecture, but also understand the reasons for the birth of Tencent OTeam and how Apache APISIX is implemented inside Tencent.",date:"2021-05-24T00:00:00.000Z",formattedDate:"May 24, 2021",tags:[{label:"User Case",permalink:"/blog/tags/user-case"}],readingTime:8.215,truncated:!0,authors:[{name:"Xin Xu"}],prevItem:{title:"Apache APISIX 2.6.0-Release Officially Released",permalink:"/blog/2021/05/25/Apache APISIX 2.6.0-Release"},nextItem:{title:"Get Front-End Test Coverage with Cypress",permalink:"/blog/2021/03/02/get-front-end-test-coverage-with-cypress"}},s={authorsImageUrls:[void 0]},u=[],p={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This article is a lecture note from the speech given by Xin Xu, an engineer in charge of internal container platform of Tencent Games, at the Apache APISIX Meetup - Shenzhen. By reading this article, you can not only learn what a gateway is and how the gateway model improves the traditional service architecture, but also understand the reasons for the birth of Tencent OTeam and how Apache APISIX is implemented inside Tencent.")))}f.isMDXComponent=!0}}]);