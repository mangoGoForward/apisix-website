"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7831],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},70823:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var r=t(87462),a=t(63366),l=(t(67294),t(3905)),i={title:"serverless"},o=void 0,u={unversionedId:"plugins/serverless",id:"version-2.12/plugins/serverless",isDocsHomePage:!1,title:"serverless",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.12/plugins/serverless.md",sourceDirName:"plugins",slug:"/plugins/serverless",permalink:"/zh/docs/apisix/plugins/serverless",editUrl:null,tags:[],version:"2.12",frontMatter:{title:"serverless"},sidebar:"version-2.12/docs",previous:{title:"splunk-hec-logging",permalink:"/zh/docs/apisix/plugins/splunk-hec-logging"},next:{title:"azure-functions",permalink:"/zh/docs/apisix/plugins/azure-functions"}},p=[{value:"Parameters",id:"parameters",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"\u542f\u52a8\u63d2\u4ef6",id:"\u542f\u52a8\u63d2\u4ef6",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u79fb\u9664\u63d2\u4ef6",id:"\u79fb\u9664\u63d2\u4ef6",children:[]}]}],s={toc:p};function c(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"serverless \u7684\u63d2\u4ef6\u6709\u4e24\u4e2a\uff0c\u5206\u522b\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"serverless-pre-function")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"serverless-post-function"),"\uff0c\n\u524d\u8005\u4f1a\u5728\u6307\u5b9a\u9636\u6bb5\u7684\u6700\u5f00\u59cb\u8fd0\u884c\uff0c\u540e\u8005\u662f\u5728\u6307\u5b9a\u9636\u6bb5\u7684\u6700\u540e\u8fd0\u884c\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e24\u4e2a\u63d2\u4ef6\u63a5\u6536\u7684\u53c2\u6570\u90fd\u662f\u4e00\u6837\u7684\u3002"),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"phase"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},'["access"]'),(0,l.kt)("td",{parentName:"tr",align:null},'["rewrite", "access", "header_filter", "body_filter", "log", "before_proxy"]'),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"functions"),(0,l.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u8fd0\u884c\u7684\u51fd\u6570\u5217\u8868\uff0c\u662f\u6570\u7ec4\u7c7b\u578b\uff0c\u91cc\u9762\u53ef\u4ee5\u5305\u542b\u4e00\u4e2a\u51fd\u6570\uff0c\u4e5f\u53ef\u4ee5\u662f\u591a\u4e2a\u51fd\u6570\uff0c\u6309\u7167\u5148\u540e\u987a\u5e8f\u6267\u884c\u3002")))),(0,l.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u8fd9\u91cc\u53ea\u63a5\u53d7\u51fd\u6570\uff0c\u800c\u4e0d\u63a5\u53d7\u5176\u4ed6\u7c7b\u578b\u7684 Lua \u4ee3\u7801\u3002\u6bd4\u5982\u533f\u540d\u51fd\u6570\u662f\u5408\u6cd5\u7684\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"return function()\n    ngx.log(ngx.ERR, 'one')\nend\n")),(0,l.kt)("p",null,"\u95ed\u5305\u4e5f\u662f\u5408\u6cd5\u7684\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"local count = 1\nreturn function()\n    count = count + 1\n    ngx.say(count)\nend\n")),(0,l.kt)("p",null,"\u4f46\u4e0d\u662f\u51fd\u6570\u7c7b\u578b\u7684\u4ee3\u7801\u5c31\u662f\u975e\u6cd5\u7684\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"local count = 1\nngx.say(count)\n")),(0,l.kt)("p",null,"\u4ece ",(0,l.kt)("inlineCode",{parentName:"p"},"v2.6")," \u7248\u672c\u5f00\u59cb\uff0c\u6211\u4eec\u4f1a\u628a ",(0,l.kt)("inlineCode",{parentName:"p"},"conf")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"ctx")," \u4f5c\u4e3a\u5934\u4e24\u4e2a\u53c2\u6570\u4f20\u9012\u7ed9 serverless \u51fd\u6570\uff0c\u5c31\u8ddf\u4e00\u822c\u7684\u63d2\u4ef6\u4e00\u6837\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"v2.12.0")," \u7248\u672c\u4e4b\u524d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"before_proxy")," \u8fd9\u4e2a phase \u66fe\u88ab\u79f0\u4f5c ",(0,l.kt)("inlineCode",{parentName:"p"},"balancer"),"\u3002\u8003\u8651\u5230\u8fd9\u4e00\u65b9\u6cd5\u4e8b\u5b9e\u4e0a\u8fd0\u884c\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"access")," \u4e4b\u540e\uff0c\u4ee3\u7406\u5230\u4e0a\u6e38\u4e4b\u524d\uff0c\u8ddf ",(0,l.kt)("inlineCode",{parentName:"p"},"balancer")," \u6ca1\u6709\u5173\u7cfb\uff0c\u65b0\u7684\u547d\u540d\u4f1a\u66f4\u52a0\u8d34\u5207\u3002"),(0,l.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("h3",{id:"\u542f\u52a8\u63d2\u4ef6"},"\u542f\u52a8\u63d2\u4ef6"),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u793a\u4f8b\uff0c\u5728\u6307\u5b9a\u7684 route \u4e0a\u5f00\u542f\u4e86 serverless \u63d2\u4ef6:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "serverless-pre-function": {\n            "phase": "rewrite",\n            "functions" : ["return function() ngx.log(ngx.ERR, \\"serverless pre function\\"); end"]\n        },\n        "serverless-post-function": {\n            "phase": "rewrite",\n            "functions" : ["return function(conf, ctx) ngx.log(ngx.ERR, \\"match uri \\", ctx.curr_req_matched and ctx.curr_req_matched._path); end"]\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,l.kt)("h3",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,l.kt)("p",null,"\u4f7f\u7528 curl \u8bbf\u95ee\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/index.html\n")),(0,l.kt)("p",null,"\u7136\u540e\u4f60\u5728 error.log \u65e5\u5fd7\u4e2d\u5c31\u4f1a\u53d1\u73b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"serverless pre function")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"match uri /index.html")," \u4e24\u4e2a error \u7ea7\u522b\u7684\u65e5\u5fd7\uff0c\n\u8868\u793a\u6307\u5b9a\u7684\u51fd\u6570\u5df2\u7ecf\u751f\u6548\u3002"),(0,l.kt)("h3",{id:"\u79fb\u9664\u63d2\u4ef6"},"\u79fb\u9664\u63d2\u4ef6"),(0,l.kt)("p",null,"\u5f53\u4f60\u60f3\u53bb\u6389\u63d2\u4ef6\u7684\u65f6\u5019\uff0c\u5f88\u7b80\u5355\uff0c\u5728\u63d2\u4ef6\u7684\u914d\u7f6e\u4e2d\u628a\u5bf9\u5e94\u7684 json \u914d\u7f6e\u5220\u9664\u5373\u53ef\uff0c\u65e0\u987b\u91cd\u542f\u670d\u52a1\uff0c\u5373\u523b\u751f\u6548\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"\u73b0\u5728\u5c31\u5df2\u7ecf\u79fb\u9664\u4e86 serverless \u63d2\u4ef6\u4e86\u3002\u5176\u4ed6\u63d2\u4ef6\u7684\u5f00\u542f\u548c\u79fb\u9664\u4e5f\u662f\u540c\u6837\u7684\u65b9\u6cd5\u3002"))}c.isMDXComponent=!0}}]);