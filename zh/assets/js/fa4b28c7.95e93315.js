"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[49799],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return A}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(n),A=r,h=m["".concat(i,".").concat(A)]||m[A]||s[A]||l;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function A(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40006:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return i},assets:function(){return c},toc:function(){return u},default:function(){return m}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o={title:"\u91cd\u78c5\u529f\u80fd\uff01Apache APISIX \u62e5\u62b1 WASM \u751f\u6001",author:"\u7f57\u6cfd\u8f69",authorURL:"https://github.com/spacewander",authorImageURL:"https://avatars.githubusercontent.com/u/4161644?v=4",keywords:["Apache APISIX","WASM","WebAssembly","\u751f\u6001","\u63d2\u4ef6"],description:"\u5728\u5373\u5c06\u53d1\u5e03\u7684 Apache APISIX \u7248\u672c\uff082.11.0\uff09\u4e2d\u5c06\u4f1a\u65b0\u589e\u5bf9\u4e8e WASM \u7684\u652f\u6301\uff01\u901a\u8fc7\u9605\u8bfb\u672c\u6587\u4f60\u5c06\u4e86\u89e3\u5230 Apache APISIX \u5982\u4f55\u4ece 0 \u5230 1 \u90e8\u7f72\u8fd9\u9879\u529f\u80fd\u7684\u652f\u6301\u4e0e\u5f00\u53d1\u3002",tags:["Technology","Ecosystem"]},p=void 0,i={permalink:"/zh/blog/2021/11/19/apisix-supports-wasm",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2021/11/19/apisix-supports-wasm.md",title:"\u91cd\u78c5\u529f\u80fd\uff01Apache APISIX \u62e5\u62b1 WASM \u751f\u6001",description:"\u5728\u5373\u5c06\u53d1\u5e03\u7684 Apache APISIX \u7248\u672c\uff082.11.0\uff09\u4e2d\u5c06\u4f1a\u65b0\u589e\u5bf9\u4e8e WASM \u7684\u652f\u6301\uff01\u901a\u8fc7\u9605\u8bfb\u672c\u6587\u4f60\u5c06\u4e86\u89e3\u5230 Apache APISIX \u5982\u4f55\u4ece 0 \u5230 1 \u90e8\u7f72\u8fd9\u9879\u529f\u80fd\u7684\u652f\u6301\u4e0e\u5f00\u53d1\u3002",date:"2021-11-19T00:00:00.000Z",formattedDate:"2021\u5e7411\u670819\u65e5",tags:[{label:"Technology",permalink:"/zh/blog/tags/technology"},{label:"Ecosystem",permalink:"/zh/blog/tags/ecosystem"}],readingTime:2.205,truncated:!0,authors:[{name:"\u7f57\u6cfd\u8f69",url:"https://github.com/spacewander",imageURL:"https://avatars.githubusercontent.com/u/4161644?v=4"}],prevItem:{title:"\u5982\u4f55\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u4f7f\u7528 Nocalhost \u5f00\u53d1 Apache APISIX Ingress Controller",permalink:"/zh/blog/2021/11/22/develop-apisix-ingress-with-nocalhost-in-kubernetes"},nextItem:{title:"\u5982\u4f55\u4e0e Dapr \u96c6\u6210\u6253\u9020 Apache APISIX \u7f51\u5173\u63a7\u5236\u5668",permalink:"/zh/blog/2021/11/17/dapr-with-apisix"}},c={authorsImageUrls:[void 0]},u=[{value:"\u4e3a\u4ec0\u4e48\u9009\u62e9 Proxy WASM",id:"\u4e3a\u4ec0\u4e48\u9009\u62e9-proxy-wasm",children:[]},{value:"\u5982\u4f55\u5728 Apache APISIX \u4e2d\u4f7f\u7528 WASM",id:"\u5982\u4f55\u5728-apache-apisix-\u4e2d\u4f7f\u7528-wasm",children:[{value:"\u6b65\u9aa4\u4e00\uff1a\u57fa\u4e8e proxy-wasm-go-sdk \u7f16\u5199\u4ee3\u7801",id:"\u6b65\u9aa4\u4e00\uff1a\u57fa\u4e8e-proxy-wasm-go-sdk-\u7f16\u5199\u4ee3\u7801",children:[]},{value:"\u6b65\u9aa4\u4e8c\uff1a\u6784\u5efa\u5bf9\u5e94\u7684 WASM \u6587\u4ef6",id:"\u6b65\u9aa4\u4e8c\uff1a\u6784\u5efa\u5bf9\u5e94\u7684-wasm-\u6587\u4ef6",children:[]},{value:"\u6b65\u9aa4\u4e09\uff1a\u5728 Apache APISIX \u7684 config.yaml \u5f15\u7528\u8be5\u6587\u4ef6",id:"\u6b65\u9aa4\u4e09\uff1a\u5728-apache-apisix-\u7684-configyaml-\u5f15\u7528\u8be5\u6587\u4ef6",children:[]}]},{value:"\u6a2a\u5411\u6d4b\u8bc4\u2014\u2014\u6761\u6761\u5927\u9053\u901a\u7f57\u9a6c",id:"\u6a2a\u5411\u6d4b\u8bc4\u6761\u6761\u5927\u9053\u901a\u7f57\u9a6c",children:[{value:"\u6b65\u9aa4\u4e00\uff1a\u914d\u7f6e\u8def\u7531",id:"\u6b65\u9aa4\u4e00\uff1a\u914d\u7f6e\u8def\u7531",children:[]},{value:"\u6b65\u9aa4\u4e8c\uff1a\u5b9e\u9645\u538b\u6d4b",id:"\u6b65\u9aa4\u4e8c\uff1a\u5b9e\u9645\u538b\u6d4b",children:[]}]},{value:"\u9053\u8def\u66f2\u6298\uff0c\u4f46\u524d\u9014\u5149\u660e",id:"\u9053\u8def\u66f2\u6298\uff0c\u4f46\u524d\u9014\u5149\u660e",children:[]},{value:"\u5199\u5728\u6700\u540e",id:"\u5199\u5728\u6700\u540e",children:[]}],s={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5728\u5373\u5c06\u53d1\u5e03\u7684 Apache APISIX \u7248\u672c\uff082.11.0\uff09\u4e2d\u5c06\u4f1a\u65b0\u589e\u5bf9\u4e8e WASM \u7684\u652f\u6301\uff01\u901a\u8fc7\u9605\u8bfb\u672c\u6587\u4f60\u5c06\u4e86\u89e3\u5230 Apache APISIX \u5982\u4f55\u4ece 0 \u5230 1 \u90e8\u7f72\u8fd9\u9879\u529f\u80fd\u7684\u652f\u6301\u4e0e\u5f00\u53d1\u3002")),(0,l.kt)("p",null,"\u5728\u5373\u5c06\u53d1\u5e03\u7684 Apache APISIX \u7248\u672c\uff082.11.0\uff09\u4e2d\uff0c\u6211\u4eec\u65b0\u589e\u4e86\u5bf9\u4e8e WASM \u7684\u652f\u6301\uff01\u73b0\u5728\u5f00\u53d1\u8005\u9664\u4e86\u53ef\u4ee5\u4f7f\u7528 Lua\u3001Java\u3001Go\u3001Python\u3001JavaScript \u7b49\u591a\u79cd\u7f16\u7a0b\u8bed\u8a00\u5f00\u53d1 APISIX \u7684\u63d2\u4ef6\u4e4b\u5916\uff0c\u4e5f\u53ef\u4ee5\u7528 WASM \u6765\u5f00\u53d1\u63d2\u4ef6\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1637289637179-ab74d38f-acd4-4401-908f-e1d310a33583.png",alt:"\u62e5\u62b1 WASM \u751f\u6001"})),(0,l.kt)("p",null,"WASM \u5168\u79f0 ",(0,l.kt)("a",{parentName:"p",href:"https://webassembly.org/"},"WebAssembly"),"\uff0c\u4e0e\u4e0a\u8ff0\u5177\u4f53\u7f16\u7a0b\u8bed\u8a00\u8fd0\u884c\u65f6\u7684\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e\uff0c\u5b83\u662f\u4e00\u5957\u5b57\u8282\u7801\u6807\u51c6\uff0c\u4e13\u95e8\u8bbe\u8ba1\u6210\u53ef\u4ee5\u5728\u5bbf\u4e3b\u73af\u5883\u4e2d\u5d4c\u5957\u4f7f\u7528\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u67d0\u79cd\u7f16\u7a0b\u8bed\u8a00\u63d0\u4f9b\u7f16\u8bd1\u6210 WASM \u5b57\u8282\u7801\u7684\u529f\u80fd\uff0c\u5c31\u53ef\u4ee5\u628a\u8be5\u8bed\u8a00\u7684\u5e94\u7528\u7f16\u8bd1\u6210 WASM \u5b57\u8282\u7801\uff0c\u8fd0\u884c\u5728\u67d0\u4e2a\u652f\u6301 WASM \u7684\u5bbf\u4e3b\u73af\u5883\u4e2d\u3002"),(0,l.kt)("p",null,"\u542c\u8d77\u6765\uff0c\u662f\u4e0d\u662f\u53ea\u8981\u67d0\u4e2a\u5bbf\u4e3b\u73af\u5883\u652f\u6301 WASM\uff0c\u5c31\u80fd\u50cf\u64cd\u4f5c\u7cfb\u7edf\u4e00\u6837\u8fd0\u884c\u4efb\u610f\u5e94\u7528\u5462\uff1f"),(0,l.kt)("p",null,"\u4f46\u5176\u5b9e\u8fd9\u91cc\u6709\u4e2a\u9650\u5236\uff0c\u5c31\u50cf\u64cd\u4f5c\u7cfb\u7edf\u9700\u8981\u5b9e\u73b0\u7279\u5b9a\u6807\u51c6\u7684 syscall \u4e00\u6837\uff0c\u8981\u60f3\u8fd0\u884c\u7279\u5b9a\u7684\u5e94\u7528\uff0c\u4e5f\u9700\u8981\u5b9e\u73b0\u8be5\u5e94\u7528\u6240\u9700\u7684 API\u3002"),(0,l.kt)("p",null,"\u4ee5 JavaScript \u4e3a\u4f8b\uff0c\u867d\u7136\u540c\u6837\u662f JavaScript \u4ee3\u7801\uff0c\u4f46\u662f\u9488\u5bf9\u6d4f\u89c8\u5668\u5199\u7684 JS \u6a21\u5757\u4e0d\u80fd\u76f4\u63a5\u7528\u5728 npm \u5305\u91cc\u9762\uff0c\u56e0\u4e3a\u4e24\u4e2a\u7684 API \u4e0d\u4e00\u6837\u3002"),(0,l.kt)("p",null,"\u6240\u4ee5\u4ec5\u4ec5\u628a WASM \u653e\u5230 Apache APISIX \u91cc\u9762\u5e76\u884c\u4e0d\u901a\uff0c\u8981\u60f3\u8ba9\u5f00\u53d1\u8005\u5728 Apache APISIX \u4e0a\u8fd0\u884c WASM\uff0c\u6211\u4eec\u8fd8\u9700\u8981\u63d0\u4f9b\u4e00\u5957\u4e13\u95e8\u7684 API\u3002"),(0,l.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u9009\u62e9-proxy-wasm"},"\u4e3a\u4ec0\u4e48\u9009\u62e9 Proxy WASM"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u5982\u4f55\u63d0\u4f9b\u8fd9\u5957 API\uff0c\u6211\u4eec\u66fe\u7ecf\u6743\u8861\u8fc7\u4e24\u5957\u65b9\u6848\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u53c2\u8003 lua-nginx-module \u7684\u63a5\u53e3\uff0c\u5b9e\u73b0\u5bf9\u5e94\u7684 WASM \u7248 API"),(0,l.kt)("li",{parentName:"ol"},"\u5b9e\u73b0 Proxy WASM \u8fd9\u4e00\u5957\u6807\u51c6")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/proxy-wasm/spec"},"Proxy WASM")," \u662f Envoy \u7684 WASM API \u6807\u51c6\u3002\u6240\u4ee5\u4e0a\u8ff0\u95ee\u9898\u5176\u5b9e\u7b49\u4ef7\u4e8e\uff0c\u6211\u4eec\u662f\u81ea\u5df1\u641e\u4e00\u5957 API \u6807\u51c6\u8fd8\u662f\u590d\u7528 Envoy \u5df2\u6709\u6807\u51c6\u5462\uff1f"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"WASM API \u6807\u51c6\u53ef\u4ee5\u62c6\u6210\u4e24\u4e2a\u65b9\u9762\u6765\u770b\uff1a"),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre"},"1. Host\uff0c\u8d1f\u8d23\u63d0\u4f9b API \u7684\u5b9e\u73b0\n2. SDK\uff0c\u8981\u60f3\u5728\u4e0d\u540c\u7684\u7f16\u7a0b\u8bed\u8a00\u91cc\u9762\u8c03\u7528\u63d0\u4f9b\u7684 API\uff0c\u9700\u8981\u4f7f\u7528\u8be5\u8bed\u8a00\u6765\u5b9e\u73b0\u4e00\u5957\u80f6\u6c34\u5c42\n"))),(0,l.kt)("p",null,"\u5982\u679c\u6211\u4eec\u9075\u5faa Envoy \u7684\u6807\u51c6\uff0c\u4f18\u52bf\u5728\u4e8e\u53ef\u4ee5\u590d\u7528 Envoy \u73b0\u6709\u7684 WASM SDK\uff08Proxy WASM SDK\uff09\uff0c\u800c\u4e0d\u8db3\u4e4b\u5904\u5728\u4e8e\u8fd9\u5957\u6807\u51c6\u662f Envoy \u7ed3\u5408\u81ea\u5df1\u60c5\u51b5\u5236\u5b9a\u7684\uff0c\u5982\u679c\u6211\u4eec\u8ddf\u7740\u5b9e\u73b0\uff0c\u6ca1\u6709\u81ea\u5df1\u91cf\u8eab\u5b9a\u5236\u90a3\u4e48\u8f7b\u677e\u3002"),(0,l.kt)("p",null,"\u7ecf\u8fc7\u793e\u533a\u7684\u8ba8\u8bba\u540e\uff0c\u6211\u4eec\u6700\u7ec8\u51b3\u5b9a\u91c7\u7528 Proxy WASM \u6807\u51c6\u3002\u300c\u505a\u96be\u4e14\u6b63\u786e\u7684\u4e8b\u300d\uff0c\u5b9e\u73b0 Proxy WASM \u81ea\u7136\u662f\u96be\u7684\u4e8b\uff0c\u4f46\u6211\u4eec\u76f8\u4fe1\u8fd9\u662f\u6b63\u786e\u7684\u4e8b\uff0c\u901a\u8fc7\u793e\u533a\u7684\u5408\u4f5c\u548c\u5171\u5efa\uff0c\u53ef\u4ee5\u6784\u5efa\u66f4\u52a0\u7e41\u8363\u7684\u751f\u6001\u3002"),(0,l.kt)("h2",{id:"\u5982\u4f55\u5728-apache-apisix-\u4e2d\u4f7f\u7528-wasm"},"\u5982\u4f55\u5728 Apache APISIX \u4e2d\u4f7f\u7528 WASM"),(0,l.kt)("p",null,"Apache APISIX \u76ee\u524d\u5df2\u521d\u6b65\u652f\u6301 WASM\uff0c\u53ef\u4ee5\u4f7f\u7528 WASM \u6765\u7f16\u5199 fault-injection \u63d2\u4ef6\u7684\u90e8\u5206\u529f\u80fd\u3002\u611f\u5174\u8da3\u7684\u8bfb\u8005\u53ef\u4ee5\u5728\u672c\u6708\u5e95\u7684 Apache APISIX 2.11.0 \u7248\u672c\u4e2d\u5c1d\u5c1d\u9c9c\uff0c\u656c\u8bf7\u671f\u5f85\uff01"),(0,l.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u5c06\u7ed3\u5408 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/tetratelabs/proxy-wasm-go-sdk/"},"proxy-wasm-go-sdk")," \u6765\u8bb2\u8bb2\u600e\u4e48\u7528 WASM \u5b9e\u73b0\u6ce8\u5165\u81ea\u5b9a\u4e49\u54cd\u5e94\u7684\u529f\u80fd\u3002"),(0,l.kt)("h3",{id:"\u6b65\u9aa4\u4e00\uff1a\u57fa\u4e8e-proxy-wasm-go-sdk-\u7f16\u5199\u4ee3\u7801"},"\u6b65\u9aa4\u4e00\uff1a\u57fa\u4e8e proxy-wasm-go-sdk \u7f16\u5199\u4ee3\u7801"),(0,l.kt)("p",null,"\u5b9e\u73b0\u4ee3\u7801\uff08\u5305\u542b ",(0,l.kt)("inlineCode",{parentName:"p"},"go.mod")," \u548c\u5176\u4ed6\uff09\u5177\u4f53\u7ec6\u8282\u53ef",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/tree/master/t/wasm"},"\u70b9\u51fb\u6b64\u5904"),"\u67e5\u9605\u3002"),(0,l.kt)("p",null,"\u8fd9\u91cc\u9700\u8981\u89e3\u91ca\u4e0b\uff0c\u867d\u7136 proxy-wasm-go-sdk \u8fd9\u4e2a\u9879\u76ee\u5e26\u4e86 Go \u7684\u540d\u5b57\uff0c\u4f46\u5b83\u5176\u5b9e\u7528\u7684\u662f tinygo \u800c\u4e0d\u662f\u539f\u751f\u7684 Go\u3002\u56e0\u4e3a\u539f\u751f\u7684 Go \u5728\u652f\u6301 WASI \uff08\u4f60\u53ef\u4ee5\u8ba4\u4e3a\u5b83\u662f\u975e\u6d4f\u89c8\u5668\u7684 WASM \u8fd0\u884c\u65f6\u63a5\u53e3\uff09\u65f6\u4f1a\u6709\u4e00\u4e9b\u95ee\u9898\uff0c\u8be6\u60c5\u53ef",(0,l.kt)("a",{parentName:"p",href:"https://github.com/tetratelabs/proxy-wasm-go-sdk/blob/main/doc/OVERVIEW.md#tinygo-vs-the-official-go-compiler"},"\u70b9\u51fb\u6b64\u5904"),"\u67e5\u9605\u3002"),(0,l.kt)("h3",{id:"\u6b65\u9aa4\u4e8c\uff1a\u6784\u5efa\u5bf9\u5e94\u7684-wasm-\u6587\u4ef6"},"\u6b65\u9aa4\u4e8c\uff1a\u6784\u5efa\u5bf9\u5e94\u7684 WASM \u6587\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"tinygo build -o ./fault-injection/main.go.wasm -scheduler=none -target=wasi ./fault-injection/main.go\n")),(0,l.kt)("h3",{id:"\u6b65\u9aa4\u4e09\uff1a\u5728-apache-apisix-\u7684-configyaml-\u5f15\u7528\u8be5\u6587\u4ef6"},"\u6b65\u9aa4\u4e09\uff1a\u5728 Apache APISIX \u7684 config.yaml \u5f15\u7528\u8be5\u6587\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apisix:\n        ...\nwasm:\n    plugins:\n        - name: wasm_fault_injection\n          priority: 7997\n          file: t/wasm/fault-injection/main.go.wasm\n")),(0,l.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0a\u64cd\u4f5c\uff0c\u4f60\u53ef\u4ee5\u50cf\u7528 Lua \u63d2\u4ef6\u4e00\u6837\u7528\u8fd9\u4e2a WASM \u63d2\u4ef6\uff0c\u6bd4\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'uri: "/wasm"\nplugins:\n  wasm_fault_injection:\n    conf: \'{"body":"hello world", "http_status":200}\'\nupstream:\n  type: roundrobin\n  nodes:\n    127.0.0.1:1980: 1\n')),(0,l.kt)("p",null,"\u6ce8\u610f WASM \u63d2\u4ef6\u7684\u914d\u7f6e\u90fd\u662f conf \u5b57\u6bb5\u4e0b\u9762\u7684\u4e00\u6761\u5b57\u7b26\u4e32\uff0c\u7531\u5bf9\u5e94\u7684\u63d2\u4ef6\u81ea\u5df1\u53bb\u505a\u89e3\u6790\u3002"),(0,l.kt)("h2",{id:"\u6a2a\u5411\u6d4b\u8bc4\u6761\u6761\u5927\u9053\u901a\u7f57\u9a6c"},"\u6a2a\u5411\u6d4b\u8bc4\u2014\u2014\u6761\u6761\u5927\u9053\u901a\u7f57\u9a6c"),(0,l.kt)("p",null,"Apache APISIX \u53d1\u5c55\u5230\u73b0\u5728\uff0c\u5df2\u7ecf\u6709\u4e09\u79cd\u7f16\u5199\u63d2\u4ef6\u7684\u65b9\u5f0f\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u539f\u751f\u7684 Lua way\uff0c\u8dd1\u5728 APISIX \u91cc\u9762"),(0,l.kt)("li",{parentName:"ol"},"\u591a\u79cd\u8bed\u8a00\u7684\u5916\u90e8\u63d2\u4ef6 runner\uff0c\u63d2\u4ef6\u903b\u8f91\u8dd1\u5728 APISIX \u5916\u9762"),(0,l.kt)("li",{parentName:"ol"},"\u628a\u591a\u79cd\u8bed\u8a00\u7f16\u8bd1\u6210 WASM\uff0c\u4f9d\u7136\u8dd1\u5728 APISIX \u91cc\u9762")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1637289637159-f2fd1f09-4be6-4cd4-88a0-9c3a23c4f405.png",alt:"APISIX \u751f\u6001\u652f\u6301"})),(0,l.kt)("p",null,"\u8fd9\u4e09\u79cd\u65b9\u5f0f\u5728\u8bf8\u5982\u751f\u6001\u3001\u6210\u719f\u5ea6\u7b49\u5404\u4e2a\u65b9\u9762\u90fd\u5dee\u5f02\u5f88\u5927\u3002\u6b63\u5de7\u6211\u4eec\u90fd\u53ef\u4ee5\u7528\u5b83\u4eec\u6765\u5b9e\u73b0 fault-injection\uff0c\u6240\u4ee5\u53ef\u4ee5\u6bd4\u6bd4\u770b\u3002"),(0,l.kt)("h3",{id:"\u6b65\u9aa4\u4e00\uff1a\u914d\u7f6e\u8def\u7531"},"\u6b65\u9aa4\u4e00\uff1a\u914d\u7f6e\u8def\u7531"),(0,l.kt)("p",null,"Lua way \u7684 fault-injection\uff0c\u81ea\u7136\u662f\u4f7f\u7528\u5185\u7f6e\u7684 fault-injection \u63d2\u4ef6\u3002Runner way \u7684 fault-injection \u5b9e\u73b0\u5177\u4f53\u53ef",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-go-plugin-runner/blob/master/cmd/go-runner/plugins/fault_injection.go"},"\u70b9\u51fb\u6b64\u5904"),"\u67e5\u9605\u3002"),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\u8ba9\u6211\u4eec\u5206\u522b\u7ed9\u5b83\u4eec\u914d\u7f6e\u4e0d\u540c\u7684\u8def\u7531\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'---\nuri: "/wasm"\nplugins:\n  wasm_fault_injection:\n    conf: \'{"body":"hello world", "http_status":200}\'\nupstream:\n  type: roundrobin\n  nodes:\n    127.0.0.1:1980: 1\n---\nplugins:\n  ext-plugin-pre-req:\n    conf:\n    - name: fault-injection\n      value: \'{"body":"hello world", "http_status":200}\'\nupstream:\n  nodes:\n    127.0.0.1:1980: 1\n  type: roundrobin\nuri: /ext-plugin\n---\nplugins:\n  fault-injection:\n    abort:\n      body: hello world\n      http_status: 200\nupstream:\n  nodes:\n    127.0.0.1:1980: 1\n  type: roundrobin\nuri: /fault-injection\n')),(0,l.kt)("h3",{id:"\u6b65\u9aa4\u4e8c\uff1a\u5b9e\u9645\u538b\u6d4b"},"\u6b65\u9aa4\u4e8c\uff1a\u5b9e\u9645\u538b\u6d4b"),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\u8bd5\u7740\u7528 wrk \u8fdb\u884c\u538b\u6d4b\uff0c\u5177\u4f53\u6570\u636e\u5bf9\u6bd4\u5982\u4e0b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1637289637162-6d2ef1d6-9de8-410c-8ca6-e264205c1be1.png",alt:"\u538b\u6d4b\u7ed3\u679c\u5bf9\u6bd4"})),(0,l.kt)("p",null,"\u4ece\u4e0a\u8ff0\u7ed3\u679c\u53ef\u4ee5\u770b\u5230\uff0cWASM \u7248\u672c\u7684\u6027\u80fd\u4ecb\u4e8e\u5916\u90e8\u63d2\u4ef6\u548c\u539f\u751f Lua \u4e4b\u95f4\u3002"),(0,l.kt)("p",null,"WASM \u7248\u672c\u7684\u6027\u80fd\u4e4b\u6240\u4ee5\u6bd4\u5916\u90e8\u63d2\u4ef6\u597d\u90a3\u4e48\u591a\uff0c\u662f\u56e0\u4e3a fault-injection \u529f\u80fd\u7b80\u5355\uff0c\u6240\u4ee5\u5916\u90e8\u63d2\u4ef6 RPC \u5e26\u6765\u7684\u6027\u80fd\u635f\u8017\u8fc7\u4e8e\u660e\u663e\u3002\u8003\u8651\u5230\u6211\u4eec\u8fd8\u6ca1\u6709\u5bf9 WASM \u5b9e\u73b0\u505a\u4efb\u4f55\u4f18\u5316\uff0c\u8fd9\u79cd\u60c5\u51b5\u5df2\u7ecf\u8ba9\u6211\u4eec\u611f\u5230\u6ee1\u610f\u4e86\u3002"),(0,l.kt)("p",null,"\u800c WASM \u7684\u53e6\u4e00\u4e2a\u597d\u5904\uff0c\u5c31\u662f\u8ba9\u6211\u4eec\u4e00\u4e0b\u5b50\u62e5\u6709\u591a\u8bed\u8a00\u7684\u652f\u6301\uff08\u8fd9\u4e5f\u6258\u4e86 Proxy WASM SDK \u7684\u798f\uff09\u3002\u5177\u4f53\u7ec6\u8282\u53ef\u53c2\u8003\u4e0b\u65b9\u6587\u6863\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://gist.github.com/spacewander/0357198ea21e022003c407fd23155f79"},"Rust \u7248\u672c fault-injection")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://gist.github.com/spacewander/64773a706f1dc758aecc7f28aff7555d"},"AssemblyScript \u7248\u672c fault-injection"))),(0,l.kt)("h2",{id:"\u9053\u8def\u66f2\u6298\uff0c\u4f46\u524d\u9014\u5149\u660e"},"\u9053\u8def\u66f2\u6298\uff0c\u4f46\u524d\u9014\u5149\u660e"),(0,l.kt)("p",null,"\u8bf4\u4e86\u8fd9\u4e48\u591a WASM \u7684\u597d\u5904\uff0c\u662f\u4e0d\u662f\u6709\u70b9\u5fc3\u52a8\u5462\uff1f\u4f46\u5b83\u76ee\u524d\u5e76\u975e\u662f\u4e00\u4e2a\u5b8c\u7f8e\u7684\u89e3\u51b3\u65b9\u6848\uff0c WASM/Proxy WASM \u8fd8\u662f\u6709\u4e00\u4e9b\u4e0d\u591f\u6210\u719f\u7684\u5730\u65b9\u3002\u6bd4\u5982\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u7f16\u7a0b\u8bed\u8a00\u652f\u6301\u5f85\u5b8c\u5584"),"\uff1a\u539f\u751f Go \u7684 WASM \u652f\u6301\uff0c\u4e3b\u8981\u662f\u57fa\u4e8e\u6d4f\u89c8\u5668\u73af\u5883\u7684\uff0c\u6240\u4ee5\u6211\u4eec\u4e0d\u5f97\u4e0d\u7528 tinygo \u6765\u5b9e\u73b0\u3002\u4f46\u662f tinygo \u4f5c\u4e3a\u4e00\u4e2a\u5e74\u8f7b\u7684\u9879\u76ee\uff0c\u8fd8\u662f\u6709\u4e0d\u5c11\u5c40\u9650\u6027\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Proxy WASM \u751f\u6001\u6709\u5f85\u6210\u719f"),"\uff1aAssemblyScript \u7248\u672c\u7684 fault injection \u5b9e\u73b0\uff0c\u5e76\u6ca1\u6709 JSON decode \u7684\u90e8\u5206\u3002\u8fd9\u662f\u56e0\u4e3a AssemblyScript SDK \u662f\u57fa\u4e8e AssemblyScript 0.14.x \u7248\u672c\u5b9e\u73b0\u7684\uff0c\u800c\u51e0\u4e2a\u5f00\u6e90\u7684 AssemblyScript JSON \u5e93\u90fd\u662f\u9488\u5bf9\u9ad8\u7248\u672c AssemblyScript \u5b9e\u73b0\u7684\uff0c\u6ca1\u529e\u6cd5\u7528\u5728\u8f83\u4e3a\u9648\u65e7\u7684 AssemblyScript 0.14 \u4e0a\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"WASM \u6ca1\u6709\u5185\u7f6e\u534f\u7a0b"),"\uff1aWASM \u76ee\u524d\u5c1a\u672a\u5185\u7f6e\u534f\u7a0b\uff0c\u6240\u4ee5\u6ca1\u529e\u6cd5\u5f88\u597d\u5730\u88ab\u5bbf\u4e3b\u7684\u8c03\u5ea6\u7cfb\u7edf\u7ed9\u8c03\u5ea6\u8d77\u6765\u3002")),(0,l.kt)("p",null,"\u867d\u7136\u4e0a\u9762\u5217\u4e3e\u4e86\u51e0\u70b9\u4e0d\u8db3\u4e4b\u5904\uff0c\u4f46\u662f\u6211\u4eec\u76f8\u4fe1\u8fd9\u4e2a\u6280\u672f\u6808\u7684\u524d\u666f\u662f\u5149\u660e\u7684\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5305\u62ec Apache APISIX \u548c Envoy \u7b49\u5f00\u6e90\u9879\u76ee\u5bf9\u4e8e WASM \u90fd\u5f88\u770b\u91cd\uff0c\u6709\u8bb8\u591a\u521d\u521b\u516c\u53f8\u548c\u5927\u4f01\u4e1a\u4e3a WASM \u751f\u6001\u6dfb\u7816\u52a0\u74e6\uff0c\u8fd9\u610f\u5473\u7740\u8bf8\u5982 AssemblyScript SDK \u505c\u6ede\u4e0d\u524d\u8fd9\u6837\u7684\u56f0\u96be\uff0c\u53ea\u4f1a\u662f\u6682\u65f6\u3002\u957f\u4e45\u770b\uff0cProxy WASM \u7684\u751f\u6001\u4f1a\u679d\u7e41\u53f6\u8302\u3002"),(0,l.kt)("li",{parentName:"ol"},"WASM \u4f5c\u4e3a serverless \u548c edge computing \u7684\u5ba0\u513f\uff0c\u6709\u7740\u5149\u660e\u7684\u672a\u6765\u3002\u5728\u4f17\u591a\u5b9e\u9645\u573a\u666f\u7684\u843d\u5730\u548c\u4f18\u5316\uff0c\u4f1a\u66f4\u5feb\u7684\u89e3\u51b3\u6280\u672f\u4e0a\u7684\u4e0d\u8db3\u3002")),(0,l.kt)("h2",{id:"\u5199\u5728\u6700\u540e"},"\u5199\u5728\u6700\u540e"),(0,l.kt)("p",null,"Apache APISIX \u662f\u4e2a\u7d27\u8ddf\u6280\u672f\u6f6e\u6d41\u7684\u9879\u76ee\uff0c\u201c\u597d\u98ce\u51ed\u501f\u529b\uff0c\u9001\u6211\u4e0a\u9752\u5929\u201d\uff0cApache APISIX \u652f\u6301 WASM \u662f\u4e2a\u957f\u671f\u7684\u8fc7\u7a0b\u3002"),(0,l.kt)("p",null,"\u201c\u5343\u91cc\u4e4b\u884c\uff0c\u59cb\u4e8e\u8db3\u4e0b\u201d\uff0cApache APISIX \u4e3a\u4e86\u652f\u6301 WASM\uff0c\u5df2\u7ecf\u53d1\u8d77\u4e86 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/api7/wasm-nginx-module"},"wasm-nginx-module")," \u8fd9\u4e2a\u5f00\u6e90\u9879\u76ee\u3002\u611f\u5174\u8da3\u7684\u8bfb\u8005\u53ef\u4ee5\u5173\u6ce8\u8be5\u9879\u76ee\u7684\u8fdb\u5c55\uff0c\u201c\u72ec\u884c\u8005\u901f\uff0c\u4f17\u884c\u8005\u8fdc\u201d\uff0c\u671f\u5f85\u4f60\u7684\u52a0\u5165\uff0c\u4e00\u8d77\u521b\u9020\u4e16\u754c\u9876\u7ea7\u9879\u76ee\u3002"))}m.isMDXComponent=!0}}]);