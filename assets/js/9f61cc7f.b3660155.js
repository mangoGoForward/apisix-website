"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[39317],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,k=m["".concat(u,".").concat(c)]||m[c]||s[c]||l;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62133:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return p},default:function(){return s}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i={title:"request-id"},o=void 0,u={unversionedId:"plugins/request-id",id:"version-2.10/plugins/request-id",isDocsHomePage:!1,title:"request-id",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.10/plugins/request-id.md",sourceDirName:"plugins",slug:"/plugins/request-id",permalink:"/docs/apisix/2.10/plugins/request-id",editUrl:null,tags:[],version:"2.10",frontMatter:{title:"request-id"},sidebar:"version-2.10/docs",previous:{title:"traffic-split",permalink:"/docs/apisix/2.10/plugins/traffic-split"},next:{title:"client-control",permalink:"/docs/apisix/2.10/plugins/client-control"}},p=[{value:"Summary",id:"summary",children:[]},{value:"Name",id:"name",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"How To Enable",id:"how-to-enable",children:[]},{value:"Test Plugin",id:"test-plugin",children:[{value:"Use the snowflake algorithm to generate an ID",id:"use-the-snowflake-algorithm-to-generate-an-id",children:[]}]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],d={toc:p};function s(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"summary"},"Summary"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#name"},(0,l.kt)("strong",{parentName:"a"},"Name"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#attributes"},(0,l.kt)("strong",{parentName:"a"},"Attributes"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#how-to-enable"},(0,l.kt)("strong",{parentName:"a"},"How To Enable"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#test-plugin"},(0,l.kt)("strong",{parentName:"a"},"Test Plugin"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#disable-plugin"},(0,l.kt)("strong",{parentName:"a"},"Disable Plugin")))),(0,l.kt)("h2",{id:"name"},"Name"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"request-id")," plugin adds a unique ID (UUID) to each request proxied through APISIX. This plugin can be used to track an\nAPI request. The plugin will not add a request id if the ",(0,l.kt)("inlineCode",{parentName:"p"},"header_name")," is already present in the request."),(0,l.kt)("h2",{id:"attributes"},"Attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Valid"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"header_name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},'"X-Request-Id"'),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Request ID header name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"include_in_response"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Option to include the unique request ID in the response header")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"algorithm"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},'"uuid"'),(0,l.kt)("td",{parentName:"tr",align:null},'["uuid", "snowflake"]'),(0,l.kt)("td",{parentName:"tr",align:null},"ID generation algorithm")))),(0,l.kt)("h2",{id:"how-to-enable"},"How To Enable"),(0,l.kt)("p",null,"Create a route and enable the request-id plugin on the route:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/5 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {\n        "request-id": {\n            "include_in_response": true\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:8080": 1\n        }\n    }\n}\'\n')),(0,l.kt)("h2",{id:"test-plugin"},"Test Plugin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl -i http://127.0.0.1:9080/hello\nHTTP/1.1 200 OK\nX-Request-Id: fe32076a-d0a5-49a6-a361-6c244c1df956\n......\n")),(0,l.kt)("h3",{id:"use-the-snowflake-algorithm-to-generate-an-id"},"Use the snowflake algorithm to generate an ID"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"supports using the Snowflake algorithm to generate ID.\nread the documentation first before deciding to use snowflake. Because once the configuration information is enabled, you can not arbitrarily adjust the configuration information. Failure to do so may result in duplicate ID being generated.")),(0,l.kt)("p",null,"The Snowflake algorithm is not enabled by default and needs to be configured in 'conf/config.yaml'."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"plugin_attr:\n  request-id:\n    snowflake:\n      enable: true\n      snowflake_epoc: 1609459200000\n      data_machine_bits: 12\n      sequence_bits: 10\n      data_machine_ttl: 30\n      data_machine_interval: 10\n")),(0,l.kt)("h4",{id:"configuration-parameters"},"Configuration parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Valid"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enable"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"When set it to true, enable the snowflake algorithm.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"snowflake_epoc"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"1609459200000"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Start timestamp (in milliseconds)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data_machine_bits"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"12"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum number of supported machines (processes) ",(0,l.kt)("inlineCode",{parentName:"td"},"1 << data_machine_bits"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sequence_bits"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum number of generated ID per millisecond per node ",(0,l.kt)("inlineCode",{parentName:"td"},"1 << sequence_bits"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data_machine_ttl"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"30"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Valid time of registration of 'data_machine' in 'etcd' (unit: seconds)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data_machine_interval"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Time between 'data_machine' renewal in 'etcd' (unit: seconds)")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"snowflake_epoc")," default start time is  ",(0,l.kt)("inlineCode",{parentName:"li"},"2021-01-01T00:00:00Z"),", and it can support ",(0,l.kt)("inlineCode",{parentName:"li"},"69 year")," approximately to ",(0,l.kt)("inlineCode",{parentName:"li"},"2090-09-0715:47:35Z")," according to the default configuration"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"data_machine_bits")," corresponds to the set of workIDs and datacEnteridd in the snowflake definition. The plug-in aslocates a unique ID to each process. Maximum number of supported processes is ",(0,l.kt)("inlineCode",{parentName:"li"},"pow(2, data_machine_bits)"),". The default number of ",(0,l.kt)("inlineCode",{parentName:"li"},"12 bits")," is up to ",(0,l.kt)("inlineCode",{parentName:"li"},"4096"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sequence_bits")," defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"10 bits")," and each process generates up to ",(0,l.kt)("inlineCode",{parentName:"li"},"1024")," ID per second")),(0,l.kt)("h4",{id:"example"},"example"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Snowflake supports flexible configuration to meet a wide variety of needs")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Snowflake original configuration")),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"Start time 2014-10-20 T15:00:00.000z, accurate to milliseconds. It can last about 69 years"),(0,l.kt)("li",{parentName:"ul"},"supports up to ",(0,l.kt)("inlineCode",{parentName:"li"},"1024")," processes"),(0,l.kt)("li",{parentName:"ul"},"Up to ",(0,l.kt)("inlineCode",{parentName:"li"},"4096")," ID per second per process"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"plugin_attr:\n  request-id:\n    snowflake:\n      enable: true\n      snowflake_epoc: 1413817200000\n      data_machine_bits: 10\n      sequence_bits: 12\n")),(0,l.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,l.kt)("p",null,"Remove the corresponding json configuration in the plugin configuration to disable the ",(0,l.kt)("inlineCode",{parentName:"p"},"request-id"),".\nAPISIX plugins are hot-reloaded, therefore no need to restart APISIX."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/5 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/get",\n    "plugins": {\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:8080": 1\n        }\n    }\n}\'\n')))}s.isMDXComponent=!0}}]);