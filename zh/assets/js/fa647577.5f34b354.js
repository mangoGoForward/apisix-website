"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[25453],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=l(r),h=o,f=m["".concat(u,".").concat(h)]||m[h]||p[h]||a;return r?n.createElement(f,c(c({ref:t},s),{},{components:r})):n.createElement(f,c({ref:t},s))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},42473:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return u},assets:function(){return l},toc:function(){return s},default:function(){return m}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),c={title:"\u5982\u4f55\u4f7f\u7528 Apache APISIX \u57fa\u4e8e Nacos \u5b9e\u73b0\u670d\u52a1\u53d1\u73b0",authors:[{name:"\u6797\u5fd7\u714c",title:"Author",url:"https://github.com/oil-oil",image_url:"https://avatars.githubusercontent.com/u/57465570?v=4"},{name:"\u97e9\u98de",title:"Technical Writer",url:"https://github.com/hf400159",image_url:"https://avatars.githubusercontent.com/u/97138894?v=4"}],keywords:["Apache APISIX","Nacos","Service Discovery","Service Registry","Ecosystem"],description:"\u672c\u6587\u4e3a\u60a8\u4ecb\u7ecd Apache APISIX\u3001Nacos \u57fa\u672c\u6982\u5ff5\u4ee5\u53ca\u6ce8\u518c\u4e2d\u5fc3\u7684\u4f5c\u7528\uff0c\u5e76\u4e3a\u60a8\u5c55\u793a\u4e86 Apache APISIX \u57fa\u4e8e Nacos \u5b9e\u73b0\u670d\u52a1\u53d1\u73b0\u7684\u5177\u4f53\u64cd\u4f5c\u3002",tags:["Technology","Ecosystem","Service Discovery"]},i=void 0,u={permalink:"/zh/blog/2022/02/21/nacos",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2022/02/21/nacos.md",title:"\u5982\u4f55\u4f7f\u7528 Apache APISIX \u57fa\u4e8e Nacos \u5b9e\u73b0\u670d\u52a1\u53d1\u73b0",description:"\u672c\u6587\u4e3a\u60a8\u4ecb\u7ecd Apache APISIX\u3001Nacos \u57fa\u672c\u6982\u5ff5\u4ee5\u53ca\u6ce8\u518c\u4e2d\u5fc3\u7684\u4f5c\u7528\uff0c\u5e76\u4e3a\u60a8\u5c55\u793a\u4e86 Apache APISIX \u57fa\u4e8e Nacos \u5b9e\u73b0\u670d\u52a1\u53d1\u73b0\u7684\u5177\u4f53\u64cd\u4f5c\u3002",date:"2022-02-21T00:00:00.000Z",formattedDate:"2022\u5e742\u670821\u65e5",tags:[{label:"Technology",permalink:"/zh/blog/tags/technology"},{label:"Ecosystem",permalink:"/zh/blog/tags/ecosystem"},{label:"Service Discovery",permalink:"/zh/blog/tags/service-discovery"}],readingTime:1.72,truncated:!0,authors:[{name:"\u6797\u5fd7\u714c",title:"Author",url:"https://github.com/oil-oil",image_url:"https://avatars.githubusercontent.com/u/57465570?v=4",imageURL:"https://avatars.githubusercontent.com/u/57465570?v=4"},{name:"\u97e9\u98de",title:"Technical Writer",url:"https://github.com/hf400159",image_url:"https://avatars.githubusercontent.com/u/97138894?v=4",imageURL:"https://avatars.githubusercontent.com/u/97138894?v=4"}],prevItem:{title:"\u5982\u4f55\u4f7f\u7528 Apache APISIX CSRF \u5b89\u5168\u63d2\u4ef6\u62e6\u622a\u8de8\u7ad9\u70b9\u4f2a\u9020\u653b\u51fb",permalink:"/zh/blog/2022/02/23/csrf"},nextItem:{title:"\u793e\u533a\u53cc\u5468\u62a5\uff5c2.1-2.14 \u529f\u80fd\u4eae\u70b9\u66f4\u65b0\u8fdb\u884c\u4e2d",permalink:"/zh/blog/2022/02/17/weekly-report-0214"}},l={authorsImageUrls:[void 0,void 0]},s=[],p={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u4e3a\u60a8\u4ecb\u7ecd Apache APISIX\u3001Nacos \u57fa\u672c\u6982\u5ff5\u4ee5\u53ca\u6ce8\u518c\u4e2d\u5fc3\u7684\u4f5c\u7528\uff0c\u5e76\u4e3a\u60a8\u5c55\u793a\u4e86 Apache APISIX \u57fa\u4e8e Nacos \u5b9e\u73b0\u670d\u52a1\u53d1\u73b0\u7684\u5177\u4f53\u64cd\u4f5c\u3002")))}m.isMDXComponent=!0}}]);