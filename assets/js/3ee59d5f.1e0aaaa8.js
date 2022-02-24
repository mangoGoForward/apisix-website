"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[97393],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),p=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=p(t.components);return a.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,u=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(g,l(l({ref:e},s),{},{components:n})):a.createElement(g,l({ref:e},s))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74624:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l={title:"node-status"},o=void 0,u={unversionedId:"plugins/node-status",id:"version-2.10/plugins/node-status",isDocsHomePage:!1,title:"node-status",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.10/plugins/node-status.md",sourceDirName:"plugins",slug:"/plugins/node-status",permalink:"/docs/apisix/2.10/plugins/node-status",editUrl:null,tags:[],version:"2.10",frontMatter:{title:"node-status"},sidebar:"version-2.10/docs",previous:{title:"skywalking",permalink:"/docs/apisix/2.10/plugins/skywalking"},next:{title:"http-logger",permalink:"/docs/apisix/2.10/plugins/http-logger"}},p=[{value:"Summary",id:"summary",children:[]},{value:"Name",id:"name",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"API",id:"api",children:[]},{value:"How To Enable",id:"how-to-enable",children:[]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],s={toc:p};function c(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#name"},(0,i.kt)("strong",{parentName:"a"},"Name"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#attributes"},(0,i.kt)("strong",{parentName:"a"},"Attributes"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#api"},(0,i.kt)("strong",{parentName:"a"},"API"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#how-to-enable"},(0,i.kt)("strong",{parentName:"a"},"How To Enable"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#test-plugin"},(0,i.kt)("strong",{parentName:"a"},"Test Plugin"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#disable-plugin"},(0,i.kt)("strong",{parentName:"a"},"Disable Plugin")))),(0,i.kt)("h2",{id:"name"},"Name"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"node-status")," is a plugin which we could get request status information through it's API."),(0,i.kt)("h2",{id:"attributes"},"Attributes"),(0,i.kt)("p",null,"None"),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("p",null,"This plugin will add ",(0,i.kt)("inlineCode",{parentName:"p"},"/apisix/status")," to get status information.\nYou may need to use ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/2.10/plugin-interceptors"},"interceptors")," to protect it."),(0,i.kt)("h2",{id:"how-to-enable"},"How To Enable"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Configure ",(0,i.kt)("inlineCode",{parentName:"li"},"node-status")," in the plugin list of the configuration file ",(0,i.kt)("inlineCode",{parentName:"li"},"conf/config.yaml"),",\nthen you can add this plugin in any route.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"plugins:                          # plugin list\n  - example-plugin\n  - limit-req\n  - node-status\n  - jwt-auth\n  - zipkin\n  ......\n")),(0,i.kt)("p",null,"After starting ",(0,i.kt)("inlineCode",{parentName:"p"},"APISIX"),", you can get status information through the API ",(0,i.kt)("inlineCode",{parentName:"p"},"/apisix/status"),"."),(0,i.kt)("h2",{id:"test-plugin"},"Test Plugin"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Request with uri ",(0,i.kt)("inlineCode",{parentName:"li"},"/apisix/status"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'$ curl localhost:9080/apisix/status -i\nHTTP/1.1 200 OK\nDate: Tue, 03 Nov 2020 11:12:55 GMT\nContent-Type: text/plain; charset=utf-8\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX web server\n\n{"status":{"total":"23","waiting":"0","accepted":"22","writing":"1","handled":"22","active":"1","reading":"0"},"id":"6790a064-8f61-44ba-a6d3-5df42f2b1bb3"}\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Parameter Description")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"status"),(0,i.kt)("td",{parentName:"tr",align:null},"status information")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"total"),(0,i.kt)("td",{parentName:"tr",align:null},"the total number of client requests")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"waiting"),(0,i.kt)("td",{parentName:"tr",align:null},"the current number of idle client connections waiting for a request")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"accepted"),(0,i.kt)("td",{parentName:"tr",align:null},"the total number of accepted client connections")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"writing"),(0,i.kt)("td",{parentName:"tr",align:null},"the current number of connections where APISIX is writing the response back to the client")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"handled"),(0,i.kt)("td",{parentName:"tr",align:null},"the total number of handled connections. Generally, the parameter value is the same as accepted unless some resource limits have been reached")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"active"),(0,i.kt)("td",{parentName:"tr",align:null},"the current number of active client connections including waiting connections")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"reading"),(0,i.kt)("td",{parentName:"tr",align:null},"the current number of connections where APISIX is reading the request header")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"id"),(0,i.kt)("td",{parentName:"tr",align:null},"APISIX's uid which is saved in apisix/conf/apisix.uid")))),(0,i.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"You can delete ",(0,i.kt)("inlineCode",{parentName:"li"},"node-status")," in the plugin list of the configuration file ",(0,i.kt)("inlineCode",{parentName:"li"},"apisix/conf/config.yaml"),",\nthen you can not add this plugin in any route.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"plugins:                          # plugin list\n  - example-plugin\n  - limit-req\n  - jwt-auth\n  - zipkin\n  ......\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"When you want to disable the ",(0,i.kt)("inlineCode",{parentName:"li"},"node-status")," plugin in the route, it is very simple,\nyou can delete the corresponding json configuration in the plugin configuration,\nno need to restart the service, it will take effect immediately.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uri": "/route1",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "192.168.1.100:80": 1\n        }\n    },\n    "plugins": {}\n}\'\n')))}c.isMDXComponent=!0}}]);