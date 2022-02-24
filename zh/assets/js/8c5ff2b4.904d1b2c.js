"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[32312],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=u(r),m=o,y=f["".concat(p,".").concat(m)]||f[m]||s[m]||c;return r?n.createElement(y,a(a({ref:t},l),{},{components:r})):n.createElement(y,a({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<c;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},18496:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return i},metadata:function(){return p},assets:function(){return u},toc:function(){return l},default:function(){return f}});var n=r(87462),o=r(63366),c=(r(67294),r(3905)),a={title:"\u76f4\u64ad\u9884\u544a | Apache APISIX \xd7 Apache RocketMQ \u7ebf\u4e0a\u5206\u4eab",keywords:["Apache APISIX","Apache RocketMQ","Kubernetes","\u5c0f\u7ea2\u4e66","WASM"],description:"12 \u6708 26 \u65e5\uff0cApache APISIX \u793e\u533a\u8054\u5408 Apache RockMQ \u793e\u533a\u4e3a\u5927\u5bb6\u5e26\u6765\u7ebf\u4e0a\u5206\u4eab\uff0c\u5feb\u6765\u770b\u770b\u6709\u54ea\u4e9b\u7cbe\u5f69\u7684\u8bae\u9898\u5427\u3002",tags:["Events"]},i=void 0,p={permalink:"/zh/blog/2021/12/16/apisix-with-rocketmq-meetup",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2021/12/16/apisix-with-rocketmq-meetup.md",title:"\u76f4\u64ad\u9884\u544a | Apache APISIX \xd7 Apache RocketMQ \u7ebf\u4e0a\u5206\u4eab",description:"12 \u6708 26 \u65e5\uff0cApache APISIX \u793e\u533a\u8054\u5408 Apache RockMQ \u793e\u533a\u4e3a\u5927\u5bb6\u5e26\u6765\u7ebf\u4e0a\u5206\u4eab\uff0c\u5feb\u6765\u770b\u770b\u6709\u54ea\u4e9b\u7cbe\u5f69\u7684\u8bae\u9898\u5427\u3002",date:"2021-12-16T00:00:00.000Z",formattedDate:"2021\u5e7412\u670816\u65e5",tags:[{label:"Events",permalink:"/zh/blog/tags/events"}],readingTime:.79,truncated:!0,authors:[],prevItem:{title:"\u5229\u7528 APISIX Ingress \u5b9e\u73b0 Istio \u670d\u52a1\u7684\u5b89\u5168\u66b4\u9732",permalink:"/zh/blog/2021/12/17/exposure-istio-with-apisix-ingress"},nextItem:{title:"\u4e24\u79cd\u65b9\u5f0f\u6559\u4f60\u5728 K8s \u4e2d\u8f7b\u677e\u90e8\u7f72 Apache APISIX",permalink:"/zh/blog/2021/12/15/deploy-apisix-in-kubernetes"}},u={authorsImageUrls:[]},l=[],s={toc:l};function f(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,c.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"12 \u6708 26 \u65e5\uff0cApache APISIX \u793e\u533a\u8054\u5408 Apache RockMQ \u793e\u533a\u4e3a\u5927\u5bb6\u5e26\u6765\u7ebf\u4e0a\u5206\u4eab\uff0c\u5feb\u6765\u770b\u770b\u6709\u54ea\u4e9b\u7cbe\u5f69\u7684\u8bae\u9898\u5427\u3002")))}f.isMDXComponent=!0}}]);