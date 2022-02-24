"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[72189],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=p(t),m=o,d=s["".concat(c,".").concat(m)]||s[m]||f[m]||i;return t?r.createElement(d,l(l({ref:n},u),{},{components:t})):r.createElement(d,l({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=s;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},17650:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return a},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),l={title:"\u57fa\u4e8e\u73af\u5883\u53d8\u91cf\u8fdb\u884c\u914d\u7f6e\u6587\u4ef6\u5207\u6362"},a=void 0,c={unversionedId:"profile",id:"version-2.7/profile",isDocsHomePage:!1,title:"\u57fa\u4e8e\u73af\u5883\u53d8\u91cf\u8fdb\u884c\u914d\u7f6e\u6587\u4ef6\u5207\u6362",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.7/profile.md",sourceDirName:".",slug:"/profile",permalink:"/zh/docs/apisix/2.7/profile",editUrl:null,tags:[],version:"2.7",frontMatter:{title:"\u57fa\u4e8e\u73af\u5883\u53d8\u91cf\u8fdb\u884c\u914d\u7f6e\u6587\u4ef6\u5207\u6362"},sidebar:"version-2.7/docs",previous:{title:"\u8c03\u8bd5\u529f\u80fd",permalink:"/zh/docs/apisix/2.7/debug-function"}},p=[],u={toc:p};function f(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u914d\u7f6e\u4e4b\u6240\u4ee5\u4ece\u4ee3\u7801\u4e2d\u63d0\u53d6\u51fa\u6765\uff0c\u5c31\u662f\u4e3a\u4e86\u66f4\u597d\u9002\u5e94\u53d8\u5316\u3002\u901a\u5e38\u6211\u4eec\u7684\u5e94\u7528\u90fd\u6709\u5f00\u53d1\u73af\u5883\u3001\u751f\u4ea7\u73af\u5883\u7b49\u4e0d\u540c\u8fd0\u884c\u73af\u5883\uff0c\u8fd9\u4e9b\u73af\u5883\u4e0b\u5e94\u7528\u7684\u4e00\u4e9b\u914d\u7f6e\u80af\u5b9a\u4f1a\u6709\u4e0d\u540c\uff0c\u6bd4\u5982\uff1a\u914d\u7f6e\u4e2d\u5fc3\u7684\u5730\u5740\u7b49\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u628a\u6240\u6709\u73af\u5883\u7684\u914d\u7f6e\u90fd\u653e\u5728\u540c\u4e00\u4e2a\u6587\u4ef6\u91cc\uff0c\u975e\u5e38\u4e0d\u597d\u7ba1\u7406\uff0c\u6211\u4eec\u63a5\u5230\u65b0\u9700\u6c42\u540e\uff0c\u5728\u5f00\u53d1\u73af\u5883\u8fdb\u884c\u5f00\u53d1\u65f6\uff0c\u9700\u8981\u5c06\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u53c2\u6570\u90fd\u6539\u6210\u5f00\u53d1\u73af\u5883\u7684\uff0c\u63d0\u4ea4\u4ee3\u7801\u65f6\u8fd8\u8981\u6539\u56de\u53bb\uff0c\u8fd9\u6837\u6539\u6765\u6539\u53bb\u975e\u5e38\u5bb9\u6613\u51fa\u9519\u3002"),(0,i.kt)("p",null,"\u4e0a\u8ff0\u95ee\u9898\u7684\u89e3\u51b3\u529e\u6cd5\u5c31\u662f\u901a\u8fc7\u73af\u5883\u53d8\u91cf\u6765\u533a\u5206\u5f53\u524d\u8fd0\u884c\u73af\u5883\uff0c\u5e76\u901a\u8fc7\u73af\u5883\u53d8\u91cf\u6765\u5207\u6362\u4e0d\u540c\u914d\u7f6e\u6587\u4ef6\u3002APISIX \u4e2d\u5bf9\u5e94\u7684\u73af\u5883\u53d8\u91cf\u5c31\u662f\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"APISIX_PROFILE"),"\u3002"),(0,i.kt)("p",null,"\u5728\u6ca1\u6709\u8bbe\u7f6e",(0,i.kt)("inlineCode",{parentName:"p"},"APISIX_PROFILE")," \u65f6\uff0c\u9ed8\u8ba4\u4f7f\u7528\u4ee5\u4e0b\u4e09\u4e2a\u914d\u7f6e\u6587\u4ef6\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"conf/config.yaml"),(0,i.kt)("li",{parentName:"ul"},"conf/apisix.yaml"),(0,i.kt)("li",{parentName:"ul"},"conf/debug.yaml")),(0,i.kt)("p",null,"\u5982\u679c\u8bbe\u7f6e\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"APISIX_PROFILE"),"\u7684\u503c\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"prod"),"\uff0c\u5219\u4f7f\u7528\u4ee5\u4e0b\u4e09\u4e2a\u914d\u7f6e\u6587\u4ef6\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"conf/config-prod.yaml"),(0,i.kt)("li",{parentName:"ul"},"conf/apisix-prod.yaml"),(0,i.kt)("li",{parentName:"ul"},"conf/debug-prod.yaml")),(0,i.kt)("p",null,"\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\u867d\u7136\u4f1a\u589e\u52a0\u914d\u7f6e\u6587\u4ef6\u7684\u6570\u91cf\uff0c\u4f46\u53ef\u4ee5\u72ec\u7acb\u7ba1\u7406\uff0c\u518d\u914d\u7f6egit\u7b49\u7248\u672c\u7ba1\u7406\u5de5\u5177\uff0c\u8fd8\u80fd\u66f4\u597d\u5b9e\u73b0\u7248\u672c\u7ba1\u7406\u3002"))}f.isMDXComponent=!0}}]);