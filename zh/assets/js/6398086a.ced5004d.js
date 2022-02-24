"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[54990],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=c(n),m=a,d=h["".concat(u,".").concat(m)]||h[m]||s[m]||l;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=h;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},64723:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return h}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o={title:"Apache APISIX 2.12.0 \u7248\u672c\u53d1\u5e03\uff0c\u65b0\u529f\u80fd\u66f4\u9002\u914d\u65b0\u4e00\u5e74\uff01",authors:[{name:"\u7f57\u6cfd\u8f69",title:"Author",url:"https://github.com/spacewander",image_url:"https://avatars.githubusercontent.com/u/4161644?v=4"},{name:"\u82cf\u94b0",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4"}],keywords:["Apache APISIX","2.12.0","\u7248\u672c\u53d1\u5e03","Serverless","\u63d2\u4ef6"],description:"\u7ee7 2.11.0 \u7248\u672c\u53d1\u5e03\u4e4b\u540e\uff0cApache APISIX \u4e5f\u5728\u5373\u5c06\u5230\u6765\u7684\u65b0\u6625\u4f73\u8282\uff0c\u4e3a\u5927\u5bb6\u5e26\u6765 2022 \u5e74\u7b2c\u4e00\u4e2a\u5e26\u6709\u65b0\u529f\u80fd\u7684\u7248\u672c\u3002",tags:["Release","Technology","Ecosystem"]},i=void 0,u={permalink:"/zh/blog/2022/01/25/release-apache-apisix-2.12",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2022/01/25/release-apache-apisix-2.12.md",title:"Apache APISIX 2.12.0 \u7248\u672c\u53d1\u5e03\uff0c\u65b0\u529f\u80fd\u66f4\u9002\u914d\u65b0\u4e00\u5e74\uff01",description:"\u7ee7 2.11.0 \u7248\u672c\u53d1\u5e03\u4e4b\u540e\uff0cApache APISIX \u4e5f\u5728\u5373\u5c06\u5230\u6765\u7684\u65b0\u6625\u4f73\u8282\uff0c\u4e3a\u5927\u5bb6\u5e26\u6765 2022 \u5e74\u7b2c\u4e00\u4e2a\u5e26\u6709\u65b0\u529f\u80fd\u7684\u7248\u672c\u3002",date:"2022-01-25T00:00:00.000Z",formattedDate:"2022\u5e741\u670825\u65e5",tags:[{label:"Release",permalink:"/zh/blog/tags/release"},{label:"Technology",permalink:"/zh/blog/tags/technology"},{label:"Ecosystem",permalink:"/zh/blog/tags/ecosystem"}],readingTime:2.12,truncated:!0,authors:[{name:"\u7f57\u6cfd\u8f69",title:"Author",url:"https://github.com/spacewander",image_url:"https://avatars.githubusercontent.com/u/4161644?v=4",imageURL:"https://avatars.githubusercontent.com/u/4161644?v=4"},{name:"\u82cf\u94b0",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4",imageURL:"https://avatars.githubusercontent.com/u/39793568?v=4"}],prevItem:{title:"Apache APISIX \u65b0\u6280\u80fd\uff0c\u4ee3\u7406 gRPC-Web \u8bf7\u6c42",permalink:"/zh/blog/2022/01/25/apisix-grpc-web-integration"},nextItem:{title:"\u76f4\u64ad\u9884\u544a | APISIX in \u9752\u4e91\uff01\u5f00\u6e90+\u4e91\u539f\u751f\u52a9\u529b\u201c\u4f01\u4e1a\u4e0a\u4e91\u201d\u884c\u52a8\u843d\u5730",permalink:"/zh/blog/2022/01/24/apisix-with-qingcloud-meetup"}},c={authorsImageUrls:[void 0,void 0]},p=[{value:"\u65b0\u529f\u80fd\uff1a\u66f4\u591a\u7684 Serverless \u96c6\u6210",id:"\u65b0\u529f\u80fd\uff1a\u66f4\u591a\u7684-serverless-\u96c6\u6210",children:[]},{value:"\u65b0\u529f\u80fd\uff1a\u66f4\u591a\u7684\u9274\u6743\u63d2\u4ef6",id:"\u65b0\u529f\u80fd\uff1a\u66f4\u591a\u7684\u9274\u6743\u63d2\u4ef6",children:[]},{value:"\u65b0\u529f\u80fd\uff1a\u66f4\u591a\u7684\u65e5\u5fd7\u529f\u80fd",id:"\u65b0\u529f\u80fd\uff1a\u66f4\u591a\u7684\u65e5\u5fd7\u529f\u80fd",children:[{value:"\u652f\u6301\u8bb0\u5f55\u54cd\u5e94\u4f53",id:"\u652f\u6301\u8bb0\u5f55\u54cd\u5e94\u4f53",children:[]},{value:"\u652f\u6301\u6ce8\u518c\u81ea\u5b9a\u4e49\u53d8\u91cf",id:"\u652f\u6301\u6ce8\u518c\u81ea\u5b9a\u4e49\u53d8\u91cf",children:[]}]},{value:"\u65b0\u529f\u80fd\uff1aL4 \u4ee3\u7406\u652f\u6301 TLS over TCP \u4e0a\u6e38",id:"\u65b0\u529f\u80fd\uff1al4-\u4ee3\u7406\u652f\u6301-tls-over-tcp-\u4e0a\u6e38",children:[]},{value:"\u66f4\u65b0\uff1a\u591a\u8bed\u8a00\u63d2\u4ef6\u6301\u7eed\u5b8c\u5584",id:"\u66f4\u65b0\uff1a\u591a\u8bed\u8a00\u63d2\u4ef6\u6301\u7eed\u5b8c\u5584",children:[{value:"WASM \u751f\u6001\u529f\u80fd\u66f4\u52a0\u4e30\u5bcc",id:"wasm-\u751f\u6001\u529f\u80fd\u66f4\u52a0\u4e30\u5bcc",children:[]},{value:"Java Plugin Runner \u6700\u65b0\u7248\u672c\u53d1\u5e03",id:"java-plugin-runner-\u6700\u65b0\u7248\u672c\u53d1\u5e03",children:[]}]},{value:"\u66f4\u591a\u7ec6\u8282",id:"\u66f4\u591a\u7ec6\u8282",children:[]},{value:"\u4e0b\u8f7d",id:"\u4e0b\u8f7d",children:[]}],s={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u7ee7 2.11.0 \u7248\u672c\u53d1\u5e03\u4e4b\u540e\uff0cApache APISIX \u4e5f\u5728\u5373\u5c06\u5230\u6765\u7684\u65b0\u6625\u4f73\u8282\uff0c\u4e3a\u5927\u5bb6\u5e26\u6765 2022 \u5e74\u7b2c\u4e00\u4e2a\u5e26\u6709\u65b0\u529f\u80fd\u7684\u7248\u672c\u3002")),(0,l.kt)("h2",{id:"\u65b0\u529f\u80fd\uff1a\u66f4\u591a\u7684-serverless-\u96c6\u6210"},"\u65b0\u529f\u80fd\uff1a\u66f4\u591a\u7684 Serverless \u96c6\u6210"),(0,l.kt)("p",null,"\u8fd8\u8bb0\u5f97\u5728\u4e0a\u4e2a\u7248\u672c\u91cc\uff0cApache APISIX \u589e\u52a0\u4e86\u5bf9 Azure Function \u7684\u652f\u6301\u3002\u800c\u8fd9\u6b21\u65b0\u7248\u672c\u4e2d\u4e5f\u662f\u7528\u610f\u6ee1\u6ee1\uff0c\u5728\u529f\u80fd\u4e0a\u53c8\u52a0\u5165\u4e86\u5bf9\u66f4\u591a Serverless \u5382\u5546\u7684\u652f\u6301\u3002"),(0,l.kt)("p",null,"\u5982\u4eca\u7528\u6237\u4e5f\u53ef\u4ee5\u5728 Apache APISIX \u4e2d\u7ed3\u5408 AWS Lambda \u548c Apache OpenWhisk\uff0c\u5728\u7f51\u5173\u4e0a\u8fdb\u884c\u7279\u5b9a\u51fd\u6570\u7684\u66b4\u9732\u3002"),(0,l.kt)("h2",{id:"\u65b0\u529f\u80fd\uff1a\u66f4\u591a\u7684\u9274\u6743\u63d2\u4ef6"},"\u65b0\u529f\u80fd\uff1a\u66f4\u591a\u7684\u9274\u6743\u63d2\u4ef6"),(0,l.kt)("p",null,"\u6b64\u6b21\u7684\u65b0\u7248\u672c\uff0c\u8fd8\u5c06\u5e26\u6765\u4e24\u4e2a\u4f17\u4eba\u7fd8\u9996\u4ee5\u76fc\u7684\u65b0\u63d2\u4ef6\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"forward-auth")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"opa"),"\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"forward-auth \u63d2\u4ef6\u8ddf Traefik \u7684\u540c\u540d\u63d2\u4ef6\u529f\u80fd\u7c7b\u4f3c\uff0c\u8be5\u63d2\u4ef6\u53ef\u4ee5\u5141\u8bb8\u628a\u5f53\u524d\u8bf7\u6c42\u7684\u4fe1\u606f\u53d1\u9001\u7ed9\u5916\u90e8\u670d\u52a1\u8fdb\u884c\u9274\u6743\u3002"),(0,l.kt)("li",{parentName:"ul"},"opa \u63d2\u4ef6\u5219\u6574\u5408\u4e86\u8457\u540d\u7684 Open Policy Agent\uff0c\u8be5\u63d2\u4ef6\u53ef\u4ee5\u901a\u8fc7 OPA \u6765\u5b8c\u6210\u590d\u6742\u7684\u9274\u6743\u529f\u80fd\u3002")),(0,l.kt)("p",null,"\u901a\u8fc7\u4e0a\u8ff0\u4e24\u4e2a\u63d2\u4ef6\uff0c\u5c06\u4e3a Apache APISIX \u7684\u9274\u6743\u529f\u80fd\u9526\u4e0a\u6dfb\u82b1\uff0c\u7ed9\u7528\u6237\u5e26\u6765\u66f4\u591a\u4e30\u5bcc\u548c\u4e0a\u624b\u7b80\u5355\u7684\u9274\u6743\u64cd\u4f5c\u3002"),(0,l.kt)("h2",{id:"\u65b0\u529f\u80fd\uff1a\u66f4\u591a\u7684\u65e5\u5fd7\u529f\u80fd"},"\u65b0\u529f\u80fd\uff1a\u66f4\u591a\u7684\u65e5\u5fd7\u529f\u80fd"),(0,l.kt)("p",null,"\u9664\u4e86\u4e0a\u8fb9\u63d0\u5230\u7684\u9274\u6743\u63d2\u4ef6\uff0c\u672c\u6b21\u65b0\u7248\u672c\u8fd8\u5c06\u5e26\u6765\u4e09\u4e2a\u65b0\u7684\u65e5\u5fd7\u63d2\u4ef6\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"google-cloud-logging"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"splunk-hec-logging")," \u4ee5\u53ca ",(0,l.kt)("inlineCode",{parentName:"p"},"rocketmq-logger"),"\u3002"),(0,l.kt)("p",null,"\u4ece\u63d2\u4ef6\u540d\u79f0\u4e0a\u4e5f\u5f88\u5bb9\u6613\u7406\u89e3\uff0c\u901a\u8fc7\u4e0a\u8ff0\u4e09\u4e2a\u63d2\u4ef6\u53ef\u4ee5\u628a\u65e5\u5fd7\u5206\u522b\u53d1\u9001\u5230 Google Cloud\u3001Splunk \u548c Apache RocketMQ\u3002\u672a\u6765\uff0cApache APISIX \u5c06\u4f1a\u5bf9\u63a5\u8d8a\u6765\u8d8a\u591a\u7684\u65e5\u5fd7\u670d\u52a1\u5546\u548c\u5f00\u6e90 Broker\uff0c\u8ba9\u65e5\u5fd7\u5904\u7406\u53d8\u5f97\u66f4\u52a0\u8f7b\u677e\u3002"),(0,l.kt)("h3",{id:"\u652f\u6301\u8bb0\u5f55\u54cd\u5e94\u4f53"},"\u652f\u6301\u8bb0\u5f55\u54cd\u5e94\u4f53"),(0,l.kt)("p",null,"\u540c\u65f6\uff0c\u6b64\u6b21 2.12.0 \u7248\u672c\u8fd8\u5728\u65e5\u5fd7\u5c42\u9762\u652f\u6301\u8bb0\u5f55\u54cd\u5e94\u4f53\u3002\u4e0e Apache APISIX \u5176\u4ed6\u529f\u80fd\u4e00\u6837\uff0c\u8be5\u529f\u80fd\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8868\u8fbe\u5f0f\u8fdb\u884c\u52a8\u6001\u5f00\u542f\u3002\u8fd9\u6837\u5728\u4f7f\u7528\u4e2d\uff0c\u5c31\u53ef\u4ee5\u5b9e\u73b0\u4ec5\u5728\u4e0a\u6e38\u8fd4\u56de\u7279\u5b9a\u7684 Content-Type \u548c Content-Length \u65f6\u8fdb\u884c\u65e5\u5fd7\u8bb0\u5f55\uff0c\u4e0d\u7528\u518d\u53bb\u987e\u8651\u5168\u91cf\u91c7\u96c6\u54cd\u5e94\u4f53\u800c\u5e26\u6765\u7684\u95ee\u9898\u4e86\u3002"),(0,l.kt)("p",null,"\u5177\u4f53\u793a\u4f8b\u53ef\u53c2\u8003\u4e0b\u65b9\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "plugins": {\n        "kafka-logger": {\n            "broker_list" : {\n                "127.0.0.1":9092\n            },\n            "kafka_topic" : "test2",\n            "include_resp_body": true,\n            "include_resp_body_expr": [\n                [\n                    "sent_http_content_length",\n                    "<",\n                    "4096"\n                ],\n                [\n                    "sent_http_content_type",\n                    "==",\n                    "application/json"\n                ],\n            ]\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/hello"\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},'\u4e0a\u8ff0\u914d\u7f6e\u4f1a\u4ec5\u5728 Content-Length < 4096 \u4e14 Content-Type \u4e3a "application/json" \u624d\u8bb0\u5f55\u65e5\u5fd7\u3002')),(0,l.kt)("h3",{id:"\u652f\u6301\u6ce8\u518c\u81ea\u5b9a\u4e49\u53d8\u91cf"},"\u652f\u6301\u6ce8\u518c\u81ea\u5b9a\u4e49\u53d8\u91cf"),(0,l.kt)("p",null,"\u53e6\u4e00\u4e2a\u8ddf\u65e5\u5fd7\u7d27\u5bc6\u76f8\u5173\u7684\u529f\u80fd\uff0c\u5c31\u662f\u65b0\u7248\u672c\u7684 Apache APISIX \u5df2\u652f\u6301\u6ce8\u518c\u81ea\u5b9a\u4e49\u53d8\u91cf\u3002\u540c\u65f6\u7ed3\u5408 APISIX \u7684\u81ea\u5b9a\u4e49\u65e5\u5fd7\u683c\u5f0f\uff0c\u5c31\u53ef\u4ee5\u5b9e\u73b0\u5b8c\u5168\u81ea\u5b9a\u4e49\u4e0a\u62a5\u7684\u65e5\u5fd7\u5185\u5bb9\u3002\u5373\u65e0\u9700\u4fee\u6539\u5177\u4f53\u7684\u65e5\u5fd7\u63d2\u4ef6\uff0c\u5c31\u80fd\u5b9e\u73b0\u65e5\u5fd7\u751f\u6210\u548c\u4e0a\u62a5\u7684\u89e3\u8026\u5408\u3002\u8fd9\u91cc\u6211\u4eec\u901a\u8fc7\u4e00\u4e2a\u793a\u4f8b\u8fdb\u884c\u7b80\u5355\u6f14\u793a\u4e00\u4e0b\u3002"),(0,l.kt)("p",null,"\u6bd4\u5982\u6211\u4eec\u53ef\u4ee5\u5728\u81ea\u5df1\u7684\u63d2\u4ef6\u4e2d\u6ce8\u518c\u4e00\u4e2a a6_route_labels \u7684\u53d8\u91cf\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'local core = require "apisix.core"\n\ncore.ctx.register_var("a6_route_labels", function(ctx)\n    local route = ctx.matched_route and ctx.matched_route.value\n    if route and route.labels then\n        return route.labels\n    end\n    return nil\nend)\n')),(0,l.kt)("p",null,"\u5e76\u5728\u81ea\u5b9a\u4e49\u65e5\u5fd7\u683c\u5f0f\u4e2d\u4f7f\u7528\u5b83\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "log_format": {\n        "host": "$host",\n        "labels": "$a6_route_labels",\n        "client_ip": "$remote_addr"\n    }\n}\n')),(0,l.kt)("p",null,"\u5047\u8bbe\u6211\u4eec\u7684 Route \u957f\u8fd9\u6837\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "plugins": {\n        "http-logger": {\n            "uri": "http://127.0.0.1:1980/log",\n            "batch_max_size": 1,\n            "concat_method": "json"\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1982": 1\n        },\n        "type": "roundrobin"\n    },\n    "labels": {\n        "k": "v"\n    },\n    "uri": "/hello"\n}\n')),(0,l.kt)("p",null,"\u6700\u7ec8\u5c31\u4f1a\u6536\u5230\u5982\u4e0b\u6240\u793a\u7684\u65e5\u5fd7\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{"client_ip":"127.0.0.1","host":"localhost","labels":{"k":"v"},"route_id":"1"}\n')),(0,l.kt)("h2",{id:"\u65b0\u529f\u80fd\uff1al4-\u4ee3\u7406\u652f\u6301-tls-over-tcp-\u4e0a\u6e38"},"\u65b0\u529f\u80fd\uff1aL4 \u4ee3\u7406\u652f\u6301 TLS over TCP \u4e0a\u6e38"),(0,l.kt)("p",null,"\u5728 2.12.0 \u7248\u672c\u4e2d\u8fd8\u5f15\u5165\u4e86\u65b0\u7684 Upstream Scheme\uff0c\u73b0\u5728 Apache APISIX \u5df2\u652f\u6301\u4ee3\u7406\u5230 TLS over TCP \u4e0a\u6e38\u4e86\u3002"),(0,l.kt)("p",null,"\u5177\u4f53\u505a\u6cd5\u53ef\u53c2\u8003\u4e0b\u65b9\uff0c\u53ea\u9700\u5728 Upstream \u914d\u7f6e\u4e2d\u6307\u660e Scheme \u4e3a TLS \u5373\u53ef\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "scheme": "tls",\n    "nodes": {\n        "127.0.0.1:1995": 1\n    },\n    "type": "roundrobin"\n}\n')),(0,l.kt)("p",null,"\u81f3\u6b64 Apache APISIX \u7684 TCP \u4ee3\u7406\u529f\u80fd\u5f97\u5230\u4e86 TLS \u5168\u65b9\u4f4d\u7684\u652f\u6301\u3002\u6b64\u5916\uff0c\u6211\u4eec\u8fd8\u652f\u6301\u5728\u9759\u6001\u6587\u4ef6\u4e2d\u914d\u7f6e L4 \u4ee3\u7406\u7684 Access Log\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'stream:\n    enable_access_log: false         # enable access log or not, default false\n    access_log: logs/access_stream.log\n    access_log_format: "$remote_addr [$time_local] $protocol $status $bytes_sent $bytes_received $session_time"\n                                            # create your custom log format by visiting http://nginx.org/en/docs/varindex.html\n    access_log_format_escape: default       # allows setting json or default characters escaping in variables\n')),(0,l.kt)("h2",{id:"\u66f4\u65b0\uff1a\u591a\u8bed\u8a00\u63d2\u4ef6\u6301\u7eed\u5b8c\u5584"},"\u66f4\u65b0\uff1a\u591a\u8bed\u8a00\u63d2\u4ef6\u6301\u7eed\u5b8c\u5584"),(0,l.kt)("h3",{id:"wasm-\u751f\u6001\u529f\u80fd\u66f4\u52a0\u4e30\u5bcc"},"WASM \u751f\u6001\u529f\u80fd\u66f4\u52a0\u4e30\u5bcc"),(0,l.kt)("p",null,"\u5728\u4e4b\u524d\u7248\u672c\u4e2d\uff0cApache APISIX \u5df2\u5f00\u653e\u4e86\u5bf9 WASM \u751f\u6001\u7684\u652f\u6301\u3002\u800c\u5728 2.12.0 \u7248\u672c\u4e2d\uff0c\u9488\u5bf9 WASM \u751f\u6001\u53c8\u505a\u4e86\u4e0d\u5c11\u7684\u66f4\u65b0\u7ec6\u8282\u3002"),(0,l.kt)("p",null,"\u76ee\u524d Apache APISIX \u5df2\u7ecf\u652f\u6301\u5728 header_filter \u7684\u9636\u6bb5\u8fd0\u884c WASM \u4ee3\u7801\uff0c\u5f25\u8865\u4e86\u73b0\u6709\u5916\u90e8\u63d2\u4ef6\u65e0\u6cd5\u4fee\u6539\u54cd\u5e94\u7684\u4e0d\u8db3\u3002"),(0,l.kt)("p",null,"\u6b64\u5916\uff0c\u6211\u4eec\u8fd8\u652f\u6301\u5728 WASM \u91cc\u9762\u901a\u8fc7 Apache APISIX \u8fd9\u4e2a\u5bbf\u4e3b\u8fdb\u884c HTTP \u901a\u8baf\u3002\u501f\u52a9\u8fd9\u4e00\u529f\u80fd\uff0c\u6211\u4eec\u7528 WASM \u4e5f\u91cd\u65b0\u5b9e\u73b0\u4e86 forward-auth \u63d2\u4ef6\u3002\u8be5\u63d2\u4ef6\u7684\u529f\u80fd\u51e0\u4e4e\u548c Lua \u7248\u672c\u4e00\u6a21\u4e00\u6837\uff0c\u751a\u81f3\u8fde\u6d4b\u8bd5\u7528\u4f8b\u4e5f\u662f\u5728 Lua \u7248\u672c\u4e0a\u6539\u4e86\u4e0b\u540d\u5b57\u5c31\u80fd\u901a\u8fc7\u4e86\u3002"),(0,l.kt)("h3",{id:"java-plugin-runner-\u6700\u65b0\u7248\u672c\u53d1\u5e03"},"Java Plugin Runner \u6700\u65b0\u7248\u672c\u53d1\u5e03"),(0,l.kt)("p",null,"\u5f53\u7136\uff0c\u6211\u4eec\u4e5f\u6ca1\u6709\u5fd8\u8bb0\u9488\u5bf9\u73b0\u6709\u7684\u5916\u90e8\u63d2\u4ef6\u8fdb\u884c\u66f4\u65b0\uff0c\u672c\u6b21 2.12.0 \u7248\u672c\u4e2d\uff0cApache APISIX \u5df2\u5141\u8bb8\u5916\u90e8\u63d2\u4ef6\u83b7\u53d6\u8bf7\u6c42\u4f53\u3002"),(0,l.kt)("p",null,"\u6bd4\u5982\u6700\u8fd1\u53d1\u5e03\u7684 Java Plugin Runner \u7b2c\u4e8c\u7248\u5c31\u5305\u542b\u4e86\u8fd9\u4e00\u529f\u80fd\u3002\u65b0\u7248\u672c\u7684 Java Plugin Runner \u8fd8\u652f\u6301\u5728\u8fd0\u884c\u65f6\u52a8\u6001\u83b7\u53d6 APISIX \u53d8\u91cf\u3002"),(0,l.kt)("h2",{id:"\u66f4\u591a\u7ec6\u8282"},"\u66f4\u591a\u7ec6\u8282"),(0,l.kt)("p",null,"\u9664\u4e86\u4e0a\u8ff0\u65b0\u529f\u80fd\u548c\u7ec4\u4ef6\u5916\uff0cApache APISIX 2.12.0 \u7248\u672c\u8fd8\u66f4\u65b0\u4e86\u5982\u4e0b\u529f\u80fd\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"gRPC-Web \u7684\u652f\u6301\uff1a\u7ee7 gRPC \u4ee3\u7406\u3001HTTP \u8f6c gRPC \u4e4b\u540e\uff0c\u6211\u4eec\u8fce\u6765\u4e86 gRPC \u5bb6\u65cf\u7684\u7b2c\u4e09\u4e2a\u6210\u5458\u3002\u73b0\u5728 Apache APISIX \u4e5f\u652f\u6301\u4ee3\u7406 gRPC Web \u534f\u8bae\u4e86\u3002"),(0,l.kt)("li",{parentName:"ul"},"limit-count \u7684\u589e\u5f3a\uff1a\u5982\u4eca limit-count \u63d2\u4ef6\u7684\u8ba1\u6570\u5668\u5df2\u7ecf\u652f\u6301\u5728\u8bf7\u6c42\u95f4\u3001\u8def\u7531\u95f4\u8fdb\u884c\u5171\u4eab\uff0c\u53ef\u4ee5\u8bf4\u662f\u76f8\u5f53\u7075\u6d3b\u4e86\u3002")),(0,l.kt)("p",null,"\u66f4\u591a\u5173\u4e8e Apache APISIX 2.12.0 \u7684\u66f4\u65b0\u7ec6\u8282\uff0c\u53ef\u4ee5\u67e5\u770b\u672c\u6b21\u53d1\u5e03\u5bf9\u5e94\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/release/2.12/CHANGELOG.md#2120"},"Change log"),"\u3002"),(0,l.kt)("h2",{id:"\u4e0b\u8f7d"},"\u4e0b\u8f7d"),(0,l.kt)("p",null,"\u60f3\u8981\u83b7\u53d6\u6700\u65b0\u7684 Apache APISIX 2.12.0 \u7248\u672c\uff0c\u53ef\u901a\u8fc7\u4ee5\u4e0b\u8def\u5f84\u4e0b\u8f7d\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6e90\u4ee3\u7801\uff1a\u8bf7\u8bbf\u95ee",(0,l.kt)("a",{parentName:"li",href:"https://apisix.apache.org/downloads/"},"\u4e0b\u8f7d\u9875\u9762")),(0,l.kt)("li",{parentName:"ul"},"\u4e8c\u8fdb\u5236\u5b89\u88c5\u5305\uff1a\u8bf7\u8bbf\u95ee",(0,l.kt)("a",{parentName:"li",href:"https://apisix.apache.org/zh/docs/apisix/how-to-build/"},"\u5b89\u88c5\u6307\u5357"))))}h.isMDXComponent=!0}}]);