"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[39737],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,f=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7541:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},assets:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o={title:"Apache APISIX Dashboard Access Control Bypass Vulnerability Advisory (CVE-2021-33190)",author:"Zhiyuan Ju",authorURL:"https://github.com/juzhiyuan",authorImageURL:"https://avatars.githubusercontent.com/u/2106987?v=4",keywords:["APISIX","Apache APISIX","Ingress Controller"],description:"Apache APISIX Dashboard Access Control Bypass Vulnerability Bulletin",tags:["Security"]},l=void 0,s={permalink:"/blog/2021/06/17/Apache-APISIX-Dashboard-Access-Control-Bypass-Vulnerability-Announcement",source:"@site/blog/2021/06/17/Apache-APISIX-Dashboard-Access-Control-Bypass-Vulnerability-Announcement.md",title:"Apache APISIX Dashboard Access Control Bypass Vulnerability Advisory (CVE-2021-33190)",description:"Apache APISIX Dashboard Access Control Bypass Vulnerability Bulletin",date:"2021-06-17T00:00:00.000Z",formattedDate:"June 17, 2021",tags:[{label:"Security",permalink:"/blog/tags/security"}],readingTime:1.255,truncated:!0,authors:[{name:"Zhiyuan Ju",url:"https://github.com/juzhiyuan",imageURL:"https://avatars.githubusercontent.com/u/2106987?v=4"}],prevItem:{title:"The first GA release of Apache APISIX Ingress Controller v1.0 is now available!",permalink:"/blog/2021/06/18/first-GA-version-v1.0-of-Apache-APISIX-Ingress-Controller-released"},nextItem:{title:"Chaos Mesh Helps Apache APISIX Improve Stability",permalink:"/blog/2021/06/16/Chaos-Mesh-helps-Apache-APISIX-improve-stability"}},c={authorsImageUrls:[void 0]},u=[{value:"Problem Description",id:"problem-description",children:[]},{value:"Affected Versions",id:"affected-versions",children:[]},{value:"Solution",id:"solution",children:[]},{value:"Vulnerability details",id:"vulnerability-details",children:[]},{value:"Contributor Profile",id:"contributor-profile",children:[]},{value:"Expanded Reading",id:"expanded-reading",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Because the application makes access control determinations by obtaining the value of the request header ",(0,i.kt)("inlineCode",{parentName:"p"},"X-Forwarded-For"),", an attacker can achieve an access control bypass attack by simply tampering with that request header when invoking the API request.")),(0,i.kt)("h2",{id:"problem-description"},"Problem Description"),(0,i.kt)("p",null,"In Apache APISIX Dashboard 2.6, there are two configuration entries."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"the ",(0,i.kt)("inlineCode",{parentName:"p"},"conf.listen.host")," configuration item, which specifies which IP address ManagerAPI listens to at startup, and which defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"0.0.0.0")," (listens to external network requests by default).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"the configuration item ",(0,i.kt)("inlineCode",{parentName:"p"},"conf.allow_list"),", which is used for access control and only allows access to ",(0,i.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," (i.e. local network) by default."))),(0,i.kt)("p",null,"Since the program makes access control determinations by obtaining the value of the request header ",(0,i.kt)("inlineCode",{parentName:"p"},"X-Forwarded-For"),", an attacker can achieve an access control bypass attack by simply tampering with this request header when invoking an API request."),(0,i.kt)("h2",{id:"affected-versions"},"Affected Versions"),(0,i.kt)("p",null,"Apache APISIX 2.6.0"),(0,i.kt)("h2",{id:"solution"},"Solution"),(0,i.kt)("p",null,"This issue has been resolved in version 2.6.1. Please update to the latest version as soon as possible and change the default username and password after deploying the application."),(0,i.kt)("h2",{id:"vulnerability-details"},"Vulnerability details"),(0,i.kt)("p",null,"Vulnerability public date: June 8, 2021"),(0,i.kt)("p",null,"CVE details: ",(0,i.kt)("a",{parentName:"p",href:"https://nvd.nist.gov/vuln/detail/CVE-2021-33190"},"https://nvd.nist.gov/vuln/detail/CVE-2021-33190")),(0,i.kt)("h2",{id:"contributor-profile"},"Contributor Profile"),(0,i.kt)("p",null,"This vulnerability was discovered by Vern at Ping An Technology Galaxy Security Lab and reported to the Apache Software Foundation. Thanks to Vern and Ping An Technology Galaxy Security Lab for their contributions to the Apache APISIX community."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639463130837-f27bf7bf-28b9-4742-a40f-ee43ebf5a7a8.jpeg",alt:"2021-06-17-1"})),(0,i.kt)("h2",{id:"expanded-reading"},"Expanded Reading"),(0,i.kt)("p",null,"[Apache APISIX Contributor Interview | Pengcheng Wang, Senior Security Consultant, PwC South China Data Security & Privacy Team]","(./2021-01-11-interview-Apache-APISIX-contributor-Wang-Pengcheng-Senior-Security-Advisor-of-PwC-South-China-Data-Security-and- Privacy-Protection-Team.md)"))}d.isMDXComponent=!0}}]);