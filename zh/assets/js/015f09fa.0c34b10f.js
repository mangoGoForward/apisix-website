"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[90036],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return s}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),u=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=u(t.components);return a.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=u(n),s=r,c=k["".concat(o,".").concat(s)]||k[s]||d[s]||l;return n?a.createElement(c,i(i({ref:e},m),{},{components:n})):a.createElement(c,i({ref:e},m))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},56919:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return u},default:function(){return d}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i={title:"opentelemetry"},p=void 0,o={unversionedId:"plugins/opentelemetry",id:"plugins/opentelemetry",isDocsHomePage:!1,title:"opentelemetry",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/current/plugins/opentelemetry.md",sourceDirName:"plugins",slug:"/plugins/opentelemetry",permalink:"/zh/docs/apisix/next/plugins/opentelemetry",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/plugins/opentelemetry.md",tags:[],version:"current",frontMatter:{title:"opentelemetry"},sidebar:"docs",previous:{title:"skywalking",permalink:"/zh/docs/apisix/next/plugins/skywalking"},next:{title:"prometheus",permalink:"/zh/docs/apisix/next/plugins/prometheus"}},u=[{value:"\u76ee\u5f55",id:"\u76ee\u5f55",children:[]},{value:"\u540d\u5b57",id:"\u540d\u5b57",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u5982\u4f55\u542f\u7528",id:"\u5982\u4f55\u542f\u7528",children:[]},{value:"\u5982\u4f55\u8bbe\u7f6e\u6570\u636e\u4e0a\u62a5",id:"\u5982\u4f55\u8bbe\u7f6e\u6570\u636e\u4e0a\u62a5",children:[]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],m={toc:u};function d(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u76ee\u5f55"},"\u76ee\u5f55"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%90%8D%E5%AD%97"},"\u540d\u5b57")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%B1%9E%E6%80%A7"},"\u5c5e\u6027")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%A6%82%E4%BD%95%E5%90%AF%E7%94%A8"},"\u5982\u4f55\u542f\u7528")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%A6%82%E4%BD%95%E8%AE%BE%E7%BD%AE%E6%95%B0%E6%8D%AE%E4%B8%8A%E6%8A%A5"},"\u5982\u4f55\u8bbe\u7f6e\u6570\u636e\u4e0a\u62a5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E7%A6%81%E7%94%A8%E6%8F%92%E4%BB%B6"},"\u7981\u7528\u63d2\u4ef6"))),(0,l.kt)("h2",{id:"\u540d\u5b57"},"\u540d\u5b57"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://opentelemetry.io/"},"OpenTelemetry")," \u63d0\u4f9b\u7b26\u5408 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/open-telemetry/opentelemetry-specification"},"opentelemetry specification")," \u534f\u8bae\u89c4\u8303\u7684 Tracing \u6570\u636e\u4e0a\u62a5\u3002"),(0,l.kt)("p",null,"\u53ea\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"p"},"HTTP")," \u534f\u8bae\uff0c\u4e14\u8bf7\u6c42\u7c7b\u578b\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"application/x-protobuf")," \u7684\u6570\u636e\u4e0a\u62a5\uff0c\u76f8\u5173\u534f\u8bae\u6807\u51c6\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/protocol/otlp.md#otlphttp-request"},"OTLP/HTTP Request"),"\u3002"),(0,l.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sampler"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u91c7\u6837\u914d\u7f6e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sampler.name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"always_off"),(0,l.kt)("td",{parentName:"tr",align:null},'["always_on", "always_off", "trace_id_ratio", "parent_base"]'),(0,l.kt)("td",{parentName:"tr",align:null},"\u91c7\u6837\u7b97\u6cd5\uff0calways_on\uff1a\u5168\u91c7\u6837\uff1balways_off\uff1a\u4e0d\u91c7\u6837\uff1btrace_id_ratio\uff1a\u57fa\u4e8e trace id \u7684\u767e\u5206\u6bd4\u91c7\u6837\uff1bparent_base\uff1a\u5982\u679c\u5b58\u5728 tracing \u4e0a\u6e38\uff0c\u5219\u4f7f\u7528\u4e0a\u6e38\u7684\u91c7\u6837\u51b3\u5b9a\uff0c\u5426\u5219\u4f7f\u7528\u914d\u7f6e\u7684\u91c7\u6837\u7b97\u6cd5\u51b3\u7b56")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sampler.options"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},'{fraction = 0, root = {name = "always_off"}}'),(0,l.kt)("td",{parentName:"tr",align:null},"\u91c7\u6837\u7b97\u6cd5\u53c2\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sampler.options.fraction"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"[0, 1]"),(0,l.kt)("td",{parentName:"tr",align:null},"trace_id_ratio \u91c7\u6837\u7b97\u6cd5\u7684\u767e\u5206\u6bd4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sampler.options.root"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},'{name = "always_off", options = {fraction = 0}}'),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"parent_base \u91c7\u6837\u7b97\u6cd5\u5728\u6ca1\u6709\u4e0a\u6e38 tracing \u65f6\uff0c\u4f1a\u4f7f\u7528 root \u91c7\u6837\u7b97\u6cd5\u505a\u51b3\u7b56")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sampler.options.root.name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"always_off"),(0,l.kt)("td",{parentName:"tr",align:null},'["always_on", "always_off", "trace_id_ratio"]'),(0,l.kt)("td",{parentName:"tr",align:null},"\u91c7\u6837\u7b97\u6cd5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sampler.options.root.options"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"{fraction = 0}"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u91c7\u6837\u7b97\u6cd5\u53c2\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sampler.options.root.options.fraction"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"[0, 1]"),(0,l.kt)("td",{parentName:"tr",align:null},"trace_id_ratio \u91c7\u6837\u7b97\u6cd5\u7684\u767e\u5206\u6bd4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"additional_attributes"),(0,l.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u8ffd\u52a0\u5230 trace span \u7684\u989d\u5916\u5c5e\u6027\uff08\u53d8\u91cf\u540d\u4e3a key\uff0c\u53d8\u91cf\u503c\u4e3a value\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"additional_attributes","[0]"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"APISIX or Nginx \u53d8\u91cf\uff0c\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"td"},"http_header")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"route_id"))))),(0,l.kt)("h2",{id:"\u5982\u4f55\u542f\u7528"},"\u5982\u4f55\u542f\u7528"),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u4f60\u9700\u8981\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"config.yaml")," \u91cc\u9762\u542f\u7528 opentelemetry \u63d2\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"# \u52a0\u5230 config.yaml\nplugins:\n  - ... # plugin you need\n  - opentelemetry\n")),(0,l.kt)("p",null,"\u7136\u540e\u91cd\u8f7d APISIX\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u793a\u4f8b\uff0c\u5728\u6307\u5b9a\u7684 route \u4e0a\u5f00\u542f\u4e86 opentelemetry \u63d2\u4ef6:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uris": [\n        "/uid/*"\n    ],\n    "plugins": {\n        "opentelemetry": {\n            "sampler": {\n                "name": "always_on"\n            }\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "10.110.149.175:8089": 1\n        }\n    }\n}\'\n')),(0,l.kt)("h2",{id:"\u5982\u4f55\u8bbe\u7f6e\u6570\u636e\u4e0a\u62a5"},"\u5982\u4f55\u8bbe\u7f6e\u6570\u636e\u4e0a\u62a5"),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," \u4e2d\u7684\u914d\u7f6e\u6765\u8bbe\u7f6e\u6570\u636e\u4e0a\u62a5\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"trace_id_source"),(0,l.kt)("td",{parentName:"tr",align:null},"enum"),(0,l.kt)("td",{parentName:"tr",align:null},"random"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5408\u6cd5\u7684\u53d6\u503c\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"random")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"td"},"x-request-id"),"\uff0c\u5141\u8bb8\u4f7f\u7528\u5f53\u524d\u8bf7\u6c42 ID \u4ee3\u66ff\u968f\u673a ID \u4f5c\u4e3a\u65b0\u7684 TraceID\uff0c\u5fc5\u987b\u786e\u4fdd\u5f53\u524d\u8bf7\u6c42 ID \u662f\u7b26\u5408 TraceID \u89c4\u8303\u7684\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"[0-9a-f]{32}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"resource"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u8ffd\u52a0\u5230 trace \u7684\u989d\u5916 ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/resource/sdk.md"},"resource"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"collector"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},'{address = "127.0.0.1:4317", request_timeout = 3}'),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u91c7\u96c6\u670d\u52a1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"collector.address"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"127.0.0.1:4317"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u91c7\u96c6\u670d\u52a1\u5730\u5740")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"collector.request_timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u91c7\u96c6\u670d\u52a1\u4e0a\u62a5\u8bf7\u6c42\u8d85\u65f6\u65f6\u957f\uff0c\u5355\u4f4d\u79d2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"collector.request_headers"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u91c7\u96c6\u670d\u52a1\u4e0a\u62a5\u8bf7\u6c42\u9644\u52a0\u7684 HTTP \u8bf7\u6c42\u5934")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batch_span_processor"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"trace span \u5904\u7406\u5668\u53c2\u6570\u914d\u7f6e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batch_span_processor.drop_on_queue_full"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u5904\u7406\u5668\u7f13\u5b58\u961f\u5217\u6162\u8bd5\uff0c\u4e22\u5f03\u65b0\u5230\u6765\u7684 span")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batch_span_processor.max_queue_size"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"2048"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u5668\u7f13\u5b58\u961f\u5217\u5bb9\u91cf\u6700\u5927\u503c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batch_span_processor.batch_timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6784\u9020\u4e00\u6279 span \u8d85\u65f6\u65f6\u957f\uff0c\u5355\u4f4d\u79d2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batch_span_processor.max_export_batch_size"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"256"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e00\u6279 span \u7684\u6570\u91cf\uff0c\u6bcf\u6b21\u4e0a\u62a5\u7684 span \u6570\u91cf")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batch_span_processor.inactive_timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6bcf\u9694\u591a\u957f\u65f6\u95f4\u68c0\u67e5\u662f\u5426\u6709\u4e00\u6279 span \u53ef\u4ee5\u4e0a\u62a5\uff0c\u5355\u4f4d\u79d2")))),(0,l.kt)("p",null,"\u914d\u7f6e\u793a\u4f8b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"plugin_attr:\n  opentelemetry:\n    resource:\n      service.name: APISIX\n      tenant.id: business_id\n    collector:\n      address: 192.168.8.211:4317\n      request_timeout: 3\n      request_headers:\n        foo: bar\n    batch_span_processor:\n      drop_on_queue_full: false\n      max_queue_size: 6\n      batch_timeout: 2\n      inactive_timeout: 1\n      max_export_batch_size: 2\n")),(0,l.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,l.kt)("p",null,"\u5f53\u4f60\u60f3\u7981\u7528\u4e00\u6761\u8def\u7531/\u670d\u52a1\u4e0a\u7684 opentelemetry \u63d2\u4ef6\u7684\u65f6\u5019\uff0c\u5f88\u7b80\u5355\uff0c\u5728\u63d2\u4ef6\u7684\u914d\u7f6e\u4e2d\u628a\u5bf9\u5e94\u7684 JSON \u914d\u7f6e\u5220\u9664\u5373\u53ef\uff0c\u65e0\u987b\u91cd\u542f\u670d\u52a1\uff0c\u5373\u523b\u751f\u6548\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uris": [\n        "/uid/*"\n    ],\n    "plugins": {\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "10.110.149.175:8089": 1\n        }\n    }\n}\'\n')))}d.isMDXComponent=!0}}]);