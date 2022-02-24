"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[61174],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),h=p(r),d=a,f=h["".concat(u,".").concat(d)]||h[d]||s[d]||o;return r?n.createElement(f,c(c({ref:t},l),{},{components:r})):n.createElement(f,c({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=h;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},34569:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return u},assets:function(){return p},toc:function(){return l},default:function(){return h}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),c={title:"Apache APISIX Dashboard \u672a\u6388\u6743\u8bbf\u95ee\u6f0f\u6d1e\u516c\u544a\uff08CVE-2021-45232)",author:"\u6731\u79b9\u6210",authorURL:"https://github.com/f11t3rStAr",authorImageURL:"https://avatars.githubusercontent.com/u/71011664?v=4",keywords:["Apache APISIX","APISIX Dashboard","APISIX Route","\u4efb\u610f\u4ee3\u7801\u6267\u884c","\u6388\u6743\u8bbf\u95ee"],description:"\u5728 Apache APISIX Dashboard 2.7-2.10 \u7248\u672c\u4e2d\u51fa\u73b0\u4e86\u672a\u7ecf\u6388\u6743\u8bbf\u95ee\u7684\u5b89\u5168\u6f0f\u6d1e\uff0c\u73b0\u5c06\u5904\u7406\u4fe1\u606f\u8fdb\u884c\u76f8\u5173\u516c\u544a\u3002",tags:["Security"]},i=void 0,u={permalink:"/zh/blog/2021/12/28/dashboard-cve-2021-45232",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2021/12/28/dashboard-cve-2021-45232.md",title:"Apache APISIX Dashboard \u672a\u6388\u6743\u8bbf\u95ee\u6f0f\u6d1e\u516c\u544a\uff08CVE-2021-45232)",description:"\u5728 Apache APISIX Dashboard 2.7-2.10 \u7248\u672c\u4e2d\u51fa\u73b0\u4e86\u672a\u7ecf\u6388\u6743\u8bbf\u95ee\u7684\u5b89\u5168\u6f0f\u6d1e\uff0c\u73b0\u5c06\u5904\u7406\u4fe1\u606f\u8fdb\u884c\u76f8\u5173\u516c\u544a\u3002",date:"2021-12-28T00:00:00.000Z",formattedDate:"2021\u5e7412\u670828\u65e5",tags:[{label:"Security",permalink:"/zh/blog/tags/security"}],readingTime:.32,truncated:!0,authors:[{name:"\u6731\u79b9\u6210",url:"https://github.com/f11t3rStAr",imageURL:"https://avatars.githubusercontent.com/u/71011664?v=4"}],prevItem:{title:"\u4f7f\u7528 Apache APISIX \u4ee3\u7406 gRPC \u670d\u52a1",permalink:"/zh/blog/2021/12/30/apisix-proxy-grpc-service"},nextItem:{title:"\u751f\u6001\u4e30\u5bcc\u6301\u7eed\u8fdb\u884c\u4e2d\uff0cApache OpenWhisk \u96c6\u6210\u95ea\u4eae\u767b\u573a",permalink:"/zh/blog/2021/12/24/apisix-integrate-openwhisk-plugin"}},p={authorsImageUrls:[void 0]},l=[{value:"\u95ee\u9898\u63cf\u8ff0",id:"\u95ee\u9898\u63cf\u8ff0",children:[]},{value:"\u5f71\u54cd\u7248\u672c",id:"\u5f71\u54cd\u7248\u672c",children:[]},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",children:[]},{value:"\u5b89\u5168\u5efa\u8bae",id:"\u5b89\u5168\u5efa\u8bae",children:[]},{value:"\u6f0f\u6d1e\u8be6\u60c5",id:"\u6f0f\u6d1e\u8be6\u60c5",children:[]},{value:"\u8d21\u732e\u8005\u7b80\u4ecb",id:"\u8d21\u732e\u8005\u7b80\u4ecb",children:[]}],s={toc:l};function h(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5728 Apache APISIX Dashboard 2.7-2.10 \u7248\u672c\u4e2d\u51fa\u73b0\u4e86\u672a\u7ecf\u6388\u6743\u8bbf\u95ee\u7684\u5b89\u5168\u6f0f\u6d1e\uff0c\u73b0\u5c06\u5904\u7406\u4fe1\u606f\u8fdb\u884c\u76f8\u5173\u516c\u544a\u3002")),(0,o.kt)("h2",{id:"\u95ee\u9898\u63cf\u8ff0"},"\u95ee\u9898\u63cf\u8ff0"),(0,o.kt)("p",null,"\u653b\u51fb\u8005\u65e0\u9700\u767b\u5f55 Apache APISIX Dashboard \u5373\u53ef\u8bbf\u95ee\u67d0\u4e9b\u63a5\u53e3\uff0c\u4ece\u800c\u8fdb\u884c\u672a\u6388\u6743\u66f4\u6539\u6216\u83b7\u53d6 Apache APISIX Route\u3001Upstream\u3001Service \u7b49\u76f8\u5173\u914d\u7f6e\u4fe1\u606f\uff0c\u5e76\u9020\u6210 SSRF\u3001\u653b\u51fb\u8005\u642d\u5efa\u6076\u610f\u6d41\u91cf\u4ee3\u7406\u548c\u4efb\u610f\u4ee3\u7801\u6267\u884c\u7b49\u95ee\u9898\u3002"),(0,o.kt)("h2",{id:"\u5f71\u54cd\u7248\u672c"},"\u5f71\u54cd\u7248\u672c"),(0,o.kt)("p",null,"Apache APISIX Dashboard 2.7 - 2.10 \u7248\u672c"),(0,o.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,o.kt)("p",null,"\u8bf7\u53ca\u65f6\u66f4\u65b0\u81f3 Apache APISIX Dashboard 2.10.1 \u53ca\u4ee5\u4e0a\u7248\u672c\u3002"),(0,o.kt)("h2",{id:"\u5b89\u5168\u5efa\u8bae"},"\u5b89\u5168\u5efa\u8bae"),(0,o.kt)("p",null,"\u5efa\u8bae\u7528\u6237\u53ca\u65f6\u66f4\u6539\u9ed8\u8ba4\u7528\u6237\u540d\u4e0e\u5bc6\u7801\uff0c\u5e76\u9650\u5236\u6765\u6e90 IP \u8bbf\u95ee Apache APISIX Dashboard\u3002"),(0,o.kt)("h2",{id:"\u6f0f\u6d1e\u8be6\u60c5"},"\u6f0f\u6d1e\u8be6\u60c5"),(0,o.kt)("p",null,"\u6f0f\u6d1e\u516c\u5f00\u65f6\u95f4\uff1a2021 \u5e74 12 \u6708 27 \u65e5"),(0,o.kt)("p",null,"CVE \u8be6\u7ec6\u4fe1\u606f\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://nvd.nist.gov/vuln/detail/CVE-2021-45232"},"https://nvd.nist.gov/vuln/detail/CVE-2021-45232")),(0,o.kt)("h2",{id:"\u8d21\u732e\u8005\u7b80\u4ecb"},"\u8d21\u732e\u8005\u7b80\u4ecb"),(0,o.kt)("p",null,"\u8be5\u6f0f\u6d1e\u7531\u6e90\u5821\u79d1\u6280\u5b89\u5168\u56e2\u961f\u7684\u6731\u79b9\u6210\u53d1\u73b0\uff0c\u5e76\u5411 Apache \u8f6f\u4ef6\u57fa\u91d1\u4f1a\u4e0a\u62a5\u8be5\u6f0f\u6d1e\u3002\u611f\u8c22\u5404\u4f4d\u5bf9 Apache APISIX \u793e\u533a\u7684\u8d21\u732e\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1640324848257-4978eaac-bfd7-4265-82d2-9c024956b933.png",alt:"\u6e90\u5821\u79d1\u6280"})))}h.isMDXComponent=!0}}]);