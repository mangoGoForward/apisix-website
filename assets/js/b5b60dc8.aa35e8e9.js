"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4466],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),h=p(n),m=a,f=h["".concat(s,".").concat(m)]||h[m]||u[m]||o;return n?r.createElement(f,c(c({ref:t},l),{},{components:n})):r.createElement(f,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},13768:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return s},assets:function(){return p},toc:function(){return l},default:function(){return h}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),c={title:"Apache APISIX v.s Envoy: Which Has the Better Performance?",author:"Yuansheng Wang",authorURL:"https://github.com/membphis",authorImageURL:"https://avatars.githubusercontent.com/u/6814606?v=4",keywords:["APISIX","Envoy","Apache APISIX","Service Mesh","API Gateway","Performance"],description:"This article introduces the performance comparison between Apache APISIX and Envoy under certain conditions. In general, APISIX is slightly better than Envoy in terms of response latency and QPS, and APISIX has more advantages than Enovy when multiple worker processes are enabled due to the collaborative approach of NGINX in high concurrency scenarios. The performance and latency of APISIX makes it a massive throughput capability in handling north-south traffic.",tags:["Technology"]},i=void 0,s={permalink:"/blog/2021/06/10/Apache-APISIX-and-Envoy-performance-comparison",source:"@site/blog/2021/06/10/Apache-APISIX-and-Envoy-performance-comparison.md",title:"Apache APISIX v.s Envoy: Which Has the Better Performance?",description:"This article introduces the performance comparison between Apache APISIX and Envoy under certain conditions. In general, APISIX is slightly better than Envoy in terms of response latency and QPS, and APISIX has more advantages than Enovy when multiple worker processes are enabled due to the collaborative approach of NGINX in high concurrency scenarios. The performance and latency of APISIX makes it a massive throughput capability in handling north-south traffic.",date:"2021-06-10T00:00:00.000Z",formattedDate:"June 10, 2021",tags:[{label:"Technology",permalink:"/blog/tags/technology"}],readingTime:5.98,truncated:!0,authors:[{name:"Yuansheng Wang",url:"https://github.com/membphis",imageURL:"https://avatars.githubusercontent.com/u/6814606?v=4"}],prevItem:{title:"Chaos Mesh Helps Apache APISIX Improve Stability",permalink:"/blog/2021/06/16/Chaos-Mesh-helps-Apache-APISIX-improve-stability"},nextItem:{title:"Apache APISIX not affected by NGINX CVE-2021-23017",permalink:"/blog/2021/06/07/Apache-APISIX-not-affected-by-NGINX-CVE-2021-23017"}},p={authorsImageUrls:[void 0]},l=[],u={toc:l};function h(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This article introduces the performance comparison between Apache APISIX and Envoy under certain conditions. In general, APISIX is slightly better than Envoy in terms of response latency and QPS, and APISIX has more advantages than Enovy when multiple worker processes are enabled due to the collaborative approach of NGINX in high concurrency scenarios. The performance and latency of APISIX makes it a massive throughput capability in handling north-south traffic.")))}h.isMDXComponent=!0}}]);