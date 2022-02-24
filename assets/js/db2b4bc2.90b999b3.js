"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[31161],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(n),c=l,g=m["".concat(p,".").concat(c)]||m[c]||d[c]||r;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21379:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=n(87462),l=n(63366),r=(n(67294),n(3905)),i={title:"authz-casbin"},o=void 0,p={unversionedId:"plugins/authz-casbin",id:"version-2.12/plugins/authz-casbin",isDocsHomePage:!1,title:"authz-casbin",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.12/plugins/authz-casbin.md",sourceDirName:"plugins",slug:"/plugins/authz-casbin",permalink:"/docs/apisix/plugins/authz-casbin",editUrl:null,tags:[],version:"2.12",frontMatter:{title:"authz-casbin"},sidebar:"version-2.12/docs",previous:{title:"hmac-auth",permalink:"/docs/apisix/plugins/hmac-auth"},next:{title:"ldap-auth",permalink:"/docs/apisix/plugins/ldap-auth"}},u=[{value:"Summary",id:"summary",children:[]},{value:"Name",id:"name",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Metadata",id:"metadata",children:[]},{value:"How To Enable",id:"how-to-enable",children:[{value:"By using file paths",id:"by-using-file-paths",children:[]},{value:"By using model/policy text",id:"by-using-modelpolicy-text",children:[]},{value:"By using model/policy text using plugin metadata",id:"by-using-modelpolicy-text-using-plugin-metadata",children:[]}]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:u};function d(e){var t=e.components,n=(0,l.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#name"},(0,r.kt)("strong",{parentName:"a"},"Name"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#attributes"},(0,r.kt)("strong",{parentName:"a"},"Attributes"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#metadata"},(0,r.kt)("strong",{parentName:"a"},"Metadata"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#how-to-enable"},(0,r.kt)("strong",{parentName:"a"},"How To Enable"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#test-plugin"},(0,r.kt)("strong",{parentName:"a"},"Test Plugin"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#disable-plugin"},(0,r.kt)("strong",{parentName:"a"},"Disable Plugin"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#examples"},(0,r.kt)("strong",{parentName:"a"},"Examples")))),(0,r.kt)("h2",{id:"name"},"Name"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"authz-casbin")," is an authorization plugin based on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/lua-casbin/"},"Lua Casbin"),". This plugin supports powerful authorization scenarios based on various access control models."),(0,r.kt)("p",null,"For detailed documentation on how to create model and policy, refer ",(0,r.kt)("a",{parentName:"p",href:"https://casbin.org/docs/en/supported-models"},"Casbin"),"."),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Valid"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"model_path"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The path of the Casbin model configuration file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"policy_path"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The path of the Casbin policy file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"model"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The Casbin model configuration in text format.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"policy"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The Casbin policy in text format.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"username"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The header you will be using in request to pass the username (subject).")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE"),": You must either specify ",(0,r.kt)("inlineCode",{parentName:"p"},"model_path"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"policy_path")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"username")," in plugin config or specify ",(0,r.kt)("inlineCode",{parentName:"p"},"model"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"policy")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"username")," in the plugin config for the configuration to be valid. Or if you wish to use a global Casbin configuration, you can first specify ",(0,r.kt)("inlineCode",{parentName:"p"},"model")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"policy")," in the plugin metadata and only ",(0,r.kt)("inlineCode",{parentName:"p"},"username")," in the plugin configuration, all routes will use the plugin metadata configuration in this way."),(0,r.kt)("h2",{id:"metadata"},"Metadata"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Valid"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"model"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The Casbin model configuration in text format.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"policy"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The Casbin policy in text format.")))),(0,r.kt)("h2",{id:"how-to-enable"},"How To Enable"),(0,r.kt)("p",null,"You can enable the plugin on any route either by using the model/policy file paths or directly using the model/policy text."),(0,r.kt)("h3",{id:"by-using-file-paths"},"By using file paths"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "authz-casbin": {\n            "model_path": "/path/to/model.conf",\n            "policy_path": "/path/to/policy.csv",\n            "username": "user"\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/*"\n}\'\n')),(0,r.kt)("p",null,"This will create a Casbin enforcer from the model and policy files at your first request."),(0,r.kt)("h3",{id:"by-using-modelpolicy-text"},"By using model/policy text"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "authz-casbin": {\n            "model": "[request_definition]\n            r = sub, obj, act\n\n            [policy_definition]\n            p = sub, obj, act\n\n            [role_definition]\n            g = _, _\n\n            [policy_effect]\n            e = some(where (p.eft == allow))\n\n            [matchers]\n            m = (g(r.sub, p.sub) || keyMatch(r.sub, p.sub)) && keyMatch(r.obj, p.obj) && keyMatch(r.act, p.act)",\n\n            "policy": "p, *, /, GET\n            p, admin, *, *\n            g, alice, admin",\n\n            "username": "user"\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/*"\n}\'\n')),(0,r.kt)("p",null,"This will create a Casbin enforcer from the model and policy text at your first request."),(0,r.kt)("h3",{id:"by-using-modelpolicy-text-using-plugin-metadata"},"By using model/policy text using plugin metadata"),(0,r.kt)("p",null,"First, send a ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT")," request to add the model and policy text to the plugin's metadata using the Admin API. All routes configured in this way will use a single Casbin enforcer with plugin metadata configuration. You can also update the model/policy this way, the plugin will automatically update itself with the updated configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/plugin_metadata/authz-casbin -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -i -X PUT -d \'\n{\n"model": "[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = (g(r.sub, p.sub) || keyMatch(r.sub, p.sub)) && keyMatch(r.obj, p.obj) && keyMatch(r.act, p.act)",\n\n"policy": "p, *, /, GET\np, admin, *, *\ng, alice, admin"\n}\'\n')),(0,r.kt)("p",null,"Then add this plugin on a route by sending the following request. Note, there is no requirement for model/policy now."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "authz-casbin": {\n            "username": "user"\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/*"\n}\'\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE"),": The plugin route configuration has a higher precedence than the plugin metadata configuration. Hence if the model/policy configuration is present in the plugin route config, the plugin will use that instead of the metadata config."),(0,r.kt)("h2",{id:"test-plugin"},"Test Plugin"),(0,r.kt)("p",null,"We defined the example model as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = (g(r.sub, p.sub) || keyMatch(r.sub, p.sub)) && keyMatch(r.obj, p.obj) && keyMatch(r.act, p.act)\n")),(0,r.kt)("p",null,"And the example policy as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"p, *, /, GET\np, admin, *, *\ng, alice, admin\n")),(0,r.kt)("p",null,"This means that anyone can access the homepage (",(0,r.kt)("inlineCode",{parentName:"p"},"/"),") using ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," request method while only users with admin permissions can access other pages and use other request methods."),(0,r.kt)("p",null,"For example, here anyone can access the homepage with the GET request method and the request proceeds normally:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/ -X GET\n")),(0,r.kt)("p",null,"If some unauthorized user ",(0,r.kt)("inlineCode",{parentName:"p"},"bob")," tries to access any other page, they will get a 403 error:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/res -H 'user: bob' -X GET\nHTTP/1.1 403 Forbidden\n")),(0,r.kt)("p",null,"But someone with admin permissions like ",(0,r.kt)("inlineCode",{parentName:"p"},"alice"),"can access it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/res -H 'user: alice' -X GET\n")),(0,r.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,r.kt)("p",null,"Remove the corresponding json configuration in the plugin configuration to disable the ",(0,r.kt)("inlineCode",{parentName:"p"},"authz-casbin")," plugin.\nAPISIX plugins are hot-reloaded, therefore no need to restart APISIX."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/*",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Checkout examples for model and policy conguration ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/lua-casbin/tree/master/examples"},"here"),"."))}d.isMDXComponent=!0}}]);