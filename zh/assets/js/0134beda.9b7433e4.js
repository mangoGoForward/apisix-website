"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[73572],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return h}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),l=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=l(t.components);return n.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,u=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),m=l(r),h=a,f=m["".concat(u,".").concat(h)]||m[h]||s[h]||o;return r?n.createElement(f,i(i({ref:e},p),{},{components:r})):n.createElement(f,i({ref:e},p))}));function h(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c.mdxType="string"==typeof t?t:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},997:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return l},toc:function(){return p},default:function(){return m}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i={title:"\u591a\u534f\u8bae\u63a5\u5165\u6846\u67b6 xRPC \u53d1\u5e03\u5728\u5373\uff0c\u4e3a\u4f60\u89e3\u8bfb\u66f4\u591a APISIX \u751f\u6001\u7ec6\u8282",authors:[{name:"\u5e05\u8fdb\u8d85",title:"Author",url:"https://github.com/shuaijinchao",image_url:"https://avatars.githubusercontent.com/u/8529452?v=4"},{name:"\u82cf\u94b0",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4"}],keywords:["\u591a\u534f\u8bae","Apache APISIX","Java","\u591a\u8bed\u8a00","\u751f\u6001"],description:"\u672c\u6587\u4e3a\u5927\u5bb6\u5e26\u6765\u4e86 Apache APISIX \u5373\u5c06\u53d1\u5e03\u7684 xRPC \u6846\u67b6\u4ee5\u53ca\u76f8\u5173\u7ec6\u8282\uff0c\u540c\u65f6\u4ecb\u7ecd\u4e86 Apache APISIX \u5728\u591a\u8bed\u8a00\u5f00\u53d1\u652f\u6301\u4e2d\u7684\u7ec6\u8282\u5c55\u793a\u3002",tags:["Technology","Ecosystem"]},c=void 0,u={permalink:"/zh/blog/2022/01/21/apisix-xrpc-details-and-miltilingual",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2022/01/21/apisix-xrpc-details-and-miltilingual.md",title:"\u591a\u534f\u8bae\u63a5\u5165\u6846\u67b6 xRPC \u53d1\u5e03\u5728\u5373\uff0c\u4e3a\u4f60\u89e3\u8bfb\u66f4\u591a APISIX \u751f\u6001\u7ec6\u8282",description:"\u672c\u6587\u4e3a\u5927\u5bb6\u5e26\u6765\u4e86 Apache APISIX \u5373\u5c06\u53d1\u5e03\u7684 xRPC \u6846\u67b6\u4ee5\u53ca\u76f8\u5173\u7ec6\u8282\uff0c\u540c\u65f6\u4ecb\u7ecd\u4e86 Apache APISIX \u5728\u591a\u8bed\u8a00\u5f00\u53d1\u652f\u6301\u4e2d\u7684\u7ec6\u8282\u5c55\u793a\u3002",date:"2022-01-21T00:00:00.000Z",formattedDate:"2022\u5e741\u670821\u65e5",tags:[{label:"Technology",permalink:"/zh/blog/tags/technology"},{label:"Ecosystem",permalink:"/zh/blog/tags/ecosystem"}],readingTime:1.675,truncated:!0,authors:[{name:"\u5e05\u8fdb\u8d85",title:"Author",url:"https://github.com/shuaijinchao",image_url:"https://avatars.githubusercontent.com/u/8529452?v=4",imageURL:"https://avatars.githubusercontent.com/u/8529452?v=4"},{name:"\u82cf\u94b0",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4",imageURL:"https://avatars.githubusercontent.com/u/39793568?v=4"}],prevItem:{title:"Apache APISIX \u96c6\u6210 HashiCorp Vault\uff0c\u751f\u6001\u7cfb\u7edf\u518d\u6dfb\u4e00\u5458",permalink:"/zh/blog/2022/01/21/apisix-hashicorp-vault-integration"},nextItem:{title:"CDN \u4e1a\u52a1\u573a\u666f\u4e0b\uff0c\u53c8\u62cd\u4e91\u7684\u516c\u7f51\u7f51\u5173\u573a\u666f\u5b9e\u8df5",permalink:"/zh/blog/2022/01/20/upyun-public-gateway-usecase"}},l={authorsImageUrls:[void 0,void 0]},p=[],s={toc:p};function m(t){var e=t.components,r=(0,a.Z)(t,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u4e3a\u5927\u5bb6\u5e26\u6765\u4e86 Apache APISIX \u5373\u5c06\u53d1\u5e03\u7684 xRPC \u6846\u67b6\u4ee5\u53ca\u76f8\u5173\u7ec6\u8282\uff0c\u540c\u65f6\u4ecb\u7ecd\u4e86 Apache APISIX \u5728\u591a\u8bed\u8a00\u5f00\u53d1\u652f\u6301\u4e2d\u7684\u7ec6\u8282\u5c55\u793a\u3002")))}m.isMDXComponent=!0}}]);