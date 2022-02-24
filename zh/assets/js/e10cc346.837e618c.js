"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[87525],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,f=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return t?r.createElement(f,p(p({ref:n},u),{},{components:t})):r.createElement(f,p({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var s=2;s<o;s++)p[s]=t[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},87752:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return s},default:function(){return c}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),p={title:"TCP/UDP \u52a8\u6001\u4ee3\u7406"},l=void 0,i={unversionedId:"stream-proxy",id:"version-2.9/stream-proxy",isDocsHomePage:!1,title:"TCP/UDP \u52a8\u6001\u4ee3\u7406",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.9/stream-proxy.md",sourceDirName:".",slug:"/stream-proxy",permalink:"/zh/docs/apisix/2.9/stream-proxy",editUrl:null,tags:[],version:"2.9",frontMatter:{title:"TCP/UDP \u52a8\u6001\u4ee3\u7406"},sidebar:"version-2.9/docs",previous:{title:"Stand-alone mode",permalink:"/zh/docs/apisix/2.9/stand-alone"},next:{title:"gRPC \u4ee3\u7406",permalink:"/zh/docs/apisix/2.9/grpc-proxy"}},s=[{value:"\u5982\u4f55\u5f00\u542f Stream \u4ee3\u7406?",id:"\u5982\u4f55\u5f00\u542f-stream-\u4ee3\u7406",children:[]},{value:"\u5982\u4f55\u8bbe\u7f6e route ?",id:"\u5982\u4f55\u8bbe\u7f6e-route-",children:[]},{value:"\u66f4\u591a route \u5339\u914d\u9009\u9879",id:"\u66f4\u591a-route-\u5339\u914d\u9009\u9879",children:[]},{value:"\u63a5\u6536 TLS over TCP",id:"\u63a5\u6536-tls-over-tcp",children:[]}],u={toc:s};function c(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4f17\u591a\u7684\u95fb\u540d\u7684\u5e94\u7528\u548c\u670d\u52a1\uff0c\u50cf LDAP\u3001 MYSQL \u548c RTMP \uff0c\u9009\u62e9 TCP \u4f5c\u4e3a\u901a\u4fe1\u534f\u8bae\u3002 \u4f46\u662f\u50cf DNS\u3001 syslog \u548c RADIUS \u8fd9\u7c7b\u975e\u4e8b\u52a1\u6027\u7684\u5e94\u7528\uff0c\u4ed6\u4eec\u9009\u62e9\u4e86 UDP \u534f\u8bae\u3002"),(0,o.kt)("p",null,"APISIX \u53ef\u4ee5\u5bf9 TCP/UDP \u534f\u8bae\u8fdb\u884c\u4ee3\u7406\u5e76\u5b9e\u73b0\u52a8\u6001\u8d1f\u8f7d\u5747\u8861\u3002 \u5728 nginx \u4e16\u754c\uff0c\u79f0 TCP/UDP \u4ee3\u7406\u4e3a stream \u4ee3\u7406\uff0c\u5728 APISIX \u8fd9\u91cc\u6211\u4eec\u4e5f\u9075\u5faa\u4e86\u8fd9\u4e2a\u58f0\u660e."),(0,o.kt)("h2",{id:"\u5982\u4f55\u5f00\u542f-stream-\u4ee3\u7406"},"\u5982\u4f55\u5f00\u542f Stream \u4ee3\u7406?"),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," \u914d\u7f6e\u6587\u4ef6\u8bbe\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},"stream_proxy")," \u9009\u9879\uff0c \u6307\u5b9a\u4e00\u7ec4\u9700\u8981\u8fdb\u884c\u52a8\u6001\u4ee3\u7406\u7684 IP \u5730\u5740\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0d\u5f00\u542f stream \u4ee3\u7406\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apisix:\n  stream_proxy: # TCP/UDP proxy\n    tcp: # TCP proxy address list\n      - 9100\n      - "127.0.0.1:9101"\n    udp: # UDP proxy address list\n      - 9200\n      - "127.0.0.1:9211"\n')),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u9700\u8981\u540c\u65f6\u542f\u7528 HTTP \u548c stream \u4ee3\u7406\uff0c\u8bbe\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},"only")," \u4e3a false\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apisix:\n  stream_proxy: # TCP/UDP proxy\n    only: false\n    tcp: # TCP proxy address list\n      - 9100\n")),(0,o.kt)("h2",{id:"\u5982\u4f55\u8bbe\u7f6e-route-"},"\u5982\u4f55\u8bbe\u7f6e route ?"),(0,o.kt)("p",null,"\u7b80\u4f8b\u5982\u4e0b:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/stream_routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "remote_addr": "127.0.0.1",\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1995": 1\n        },\n        "type": "roundrobin"\n    }\n}\'\n')),(0,o.kt)("p",null,"\u4f8b\u5b50\u4e2d APISIX \u5bf9\u5ba2\u6237\u7aef IP \u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," \u7684\u8bf7\u6c42\u4ee3\u7406\u8f6c\u53d1\u5230\u4e0a\u6e38\u4e3b\u673a ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1:1995"),"\u3002\n\u66f4\u591a\u7528\u4f8b\uff0c\u8bf7\u53c2\u7167 ",(0,o.kt)("a",{parentName:"p",href:"../../../t/stream-node/sanity.t"},"test case"),"."),(0,o.kt)("h2",{id:"\u66f4\u591a-route-\u5339\u914d\u9009\u9879"},"\u66f4\u591a route \u5339\u914d\u9009\u9879"),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u6dfb\u52a0\u66f4\u591a\u7684\u9009\u9879\u6765\u5339\u914d route \u3002"),(0,o.kt)("p",null,"\u4f8b\u5982"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/stream_routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "server_addr": "127.0.0.1",\n    "server_port": 2000,\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1995": 1\n        },\n        "type": "roundrobin"\n    }\n}\'\n')),(0,o.kt)("p",null,"\u4f8b\u5b50\u4e2d APISIX \u4f1a\u628a\u670d\u52a1\u5668\u5730\u5740\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),", \u7aef\u53e3\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"2000")," \u4ee3\u7406\u5230\u4e0a\u6e38\u5730\u5740 ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1:1995"),"\u3002"),(0,o.kt)("p",null,"\u5b8c\u6574\u7684\u5339\u914d\u9009\u9879\u5217\u8868\u53c2\u89c1 ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/apisix/2.9/admin-api#stream-route"},"Admin API \u7684 Stream Route"),"\u3002"),(0,o.kt)("h2",{id:"\u63a5\u6536-tls-over-tcp"},"\u63a5\u6536 TLS over TCP"),(0,o.kt)("p",null,"APISIX \u652f\u6301\u63a5\u6536 TLS over TCP\u3002"),(0,o.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u9700\u8981\u7ed9\u5bf9\u5e94\u7684 TCP \u5730\u5740\u542f\u7528 TLS\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apisix:\n  stream_proxy: # TCP/UDP proxy\n    tcp: # TCP proxy address list\n      - addr: 9100\n        tls: true\n")),(0,o.kt)("p",null,"\u63a5\u7740\uff0c\u6211\u4eec\u9700\u8981\u4e3a\u7ed9\u5b9a\u7684 SNI \u914d\u7f6e\u8bc1\u4e66\u3002\n\u5177\u4f53\u6b65\u9aa4\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/apisix/2.9/admin-api#ssl"},"Admin API \u7684 SSL"),"\u3002"),(0,o.kt)("p",null,"\u7136\u540e\uff0c\u6211\u4eec\u9700\u8981\u914d\u7f6e\u4e00\u4e2a route\uff0c\u5339\u914d\u8fde\u63a5\u5e76\u4ee3\u7406\u5230\u4e0a\u6e38\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/stream_routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "remote_addr": "127.0.0.1",\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1995": 1\n        },\n        "type": "roundrobin"\n    }\n}\'\n')),(0,o.kt)("p",null,"\u5f53\u8fde\u63a5\u4e3a TLS over TCP \u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 SNI \u6765\u5339\u914d\u8def\u7531\uff0c\u6bd4\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/stream_routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "sni": "a.test.com",\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:5991": 1\n        },\n        "type": "roundrobin"\n    }\n}\'\n')),(0,o.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c\u63e1\u624b\u65f6\u53d1\u9001 SNI ",(0,o.kt)("inlineCode",{parentName:"p"},"a.test.com")," \u7684\u8fde\u63a5\u4f1a\u88ab\u4ee3\u7406\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1:5991"),"\u3002"))}c.isMDXComponent=!0}}]);