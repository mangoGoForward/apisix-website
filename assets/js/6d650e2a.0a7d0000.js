"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[51475],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return g}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=c(r),g=o,m=f["".concat(u,".").concat(g)]||f[g]||p[g]||a;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},42345:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return c},toc:function(){return l},default:function(){return f}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i={title:"Using Apache APISIX Ingress Gateway to access Custom Monitoring in KubeSphere",author:"Haili Zhang",authorURL:"https://github.com/webup",authorImageURL:"https://avatars.githubusercontent.com/u/2936504?v=4",keywords:["KubeSphere","Apache APISIX","Kubenetes","Ingress Controller","Monitor"],description:"This article will take Apache APISIX Ingress Controller as an example to show you in detail how to quickly use different types of gateways and status monitoring for Kubernetes clusters through KubeSphere.",tags:["Technology","Monitoring","Kubernetes"]},s=void 0,u={permalink:"/blog/2021/11/30/use-apisix-ingress-in-kubesphere",source:"@site/blog/2021/11/30/use-apisix-ingress-in-kubesphere.md",title:"Using Apache APISIX Ingress Gateway to access Custom Monitoring in KubeSphere",description:"This article will take Apache APISIX Ingress Controller as an example to show you in detail how to quickly use different types of gateways and status monitoring for Kubernetes clusters through KubeSphere.",date:"2021-11-30T00:00:00.000Z",formattedDate:"November 30, 2021",tags:[{label:"Technology",permalink:"/blog/tags/technology"},{label:"Monitoring",permalink:"/blog/tags/monitoring"},{label:"Kubernetes",permalink:"/blog/tags/kubernetes"}],readingTime:12.7,truncated:!0,authors:[{name:"Haili Zhang",url:"https://github.com/webup",imageURL:"https://avatars.githubusercontent.com/u/2936504?v=4"}],prevItem:{title:"Apache APISIX 2.11.0 is officially released with more new features",permalink:"/blog/2021/12/01/release-apache-apisix-2.11"},nextItem:{title:"Contributer to Committer journey @Apache APISIX",permalink:"/blog/2021/11/26/apache-apisix-committer-experience"}},c={authorsImageUrls:[void 0]},l=[],p={toc:l};function f(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This article will take Apache APISIX Ingress Controller as an example to show you in detail how to quickly use different types of gateways and status monitoring for Kubernetes clusters through KubeSphere.")))}f.isMDXComponent=!0}}]);