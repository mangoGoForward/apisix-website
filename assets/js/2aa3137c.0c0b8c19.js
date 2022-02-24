"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[64826],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),h=p(t),d=i,f=h["".concat(u,".").concat(d)]||h[d]||c[d]||a;return t?r.createElement(f,l(l({ref:n},s),{},{components:t})):r.createElement(f,l({ref:n},s))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=h;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},157:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),l={title:"The Implementation of Plugin Runner"},o=void 0,u={unversionedId:"internal/plugin-runner",id:"internal/plugin-runner",isDocsHomePage:!1,title:"The Implementation of Plugin Runner",description:"\x3c!--",source:"@site/docs/apisix/internal/plugin-runner.md",sourceDirName:"internal",slug:"/internal/plugin-runner",permalink:"/docs/apisix/next/internal/plugin-runner",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/internal/plugin-runner.md",tags:[],version:"current",frontMatter:{title:"The Implementation of Plugin Runner"},sidebar:"docs",previous:{title:"Debug Function",permalink:"/docs/apisix/next/debug-function"},next:{title:"Introducing APISIX's testing framework",permalink:"/docs/apisix/next/internal/testing-framework"}},p=[{value:"Prerequirement",id:"prerequirement",children:[]},{value:"Listening to the Path",id:"listening-to-the-path",children:[]},{value:"Register Plugins",id:"register-plugins",children:[]},{value:"Handle RPC",id:"handle-rpc",children:[{value:"Handle PrepareConf",id:"handle-prepareconf",children:[]},{value:"Handle HTTPReqCall",id:"handle-httpreqcall",children:[]}]}],s={toc:p};function c(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"prerequirement"},"Prerequirement"),(0,a.kt)("p",null,"Each request which runs the extern plugin will trigger an RPC to Plugin Runner over a connection on Unix socket. The data of RPC are serialized with ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/google/flatbuffers"},"Flatbuffers"),"."),(0,a.kt)("p",null,"Therefore, the Plugin Runner needs to:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"handle a connection on Unix socket"),(0,a.kt)("li",{parentName:"ol"},"support Flatbuffers"),(0,a.kt)("li",{parentName:"ol"},"use the proto & generated code in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/api7/ext-plugin-proto/"},"https://github.com/api7/ext-plugin-proto/"))),(0,a.kt)("h2",{id:"listening-to-the-path"},"Listening to the Path"),(0,a.kt)("p",null,"APISIX will pass the path of Unix socket as an environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"APISIX_LISTEN_ADDRESS")," to the Plugin Runner. So the runner needs to read the value and listen to that address during starting."),(0,a.kt)("h2",{id:"register-plugins"},"Register Plugins"),(0,a.kt)("p",null,"The Plugin Runner should be able to load plugins written in the particular language."),(0,a.kt)("h2",{id:"handle-rpc"},"Handle RPC"),(0,a.kt)("p",null,"There are two kinds of RPC: PrepareConf & HTTPReqCall"),(0,a.kt)("h3",{id:"handle-prepareconf"},"Handle PrepareConf"),(0,a.kt)("p",null,"As people can configure the extern plugin on the side of APISIX, we need a way to sync the plugin configuration to the Plugin Runner."),(0,a.kt)("p",null,"When there is a configuration that needs to sync to the Plugin Runner, we will send it via the PrepareConf RPC call. The Plugin Runner should be able to handle the call and store the configuration in a cache, then returns a unique conf token that represents the configuration."),(0,a.kt)("p",null,"In the previous design, an idempotent key is sent with the configuration. This field is deprecated and the Plugin Runner can safely ignore it."),(0,a.kt)("p",null,"Requests run plugins with particular configuration will bear a particular conf token in the RPC call, and the Plugin Runner is expected to look up actual configuration via the token."),(0,a.kt)("p",null,"When the configuration is modified, APISIX will send a new PrepareConf to the Plugin Runner. Currently, there is no way to notify the Plugin Runner that a configuration is removed. Therefore, we introduce another environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"APISIX_CONF_EXPIRE_TIME")," as the conf cache expire time. The Plugin Runner should be able to cache the conf slightly longer than ",(0,a.kt)("inlineCode",{parentName:"p"},"APISIX_CONF_EXPIRE_TIME"),", and APISIX will send another PrepareConf to refresh the cache if the configuration is still existing after ",(0,a.kt)("inlineCode",{parentName:"p"},"APISIX_CONF_EXPIRE_TIME")," seconds."),(0,a.kt)("h3",{id:"handle-httpreqcall"},"Handle HTTPReqCall"),(0,a.kt)("p",null,"Each request which runs the extern plugin will trigger the HTTPReqCall. The HTTPReqCall is almost a serialized version of HTTP request, plus a conf token. The Plugin Runner is expected to tell APISIX what to update by the response of HTTPReqCall RPC call."),(0,a.kt)("p",null,"Sometimes the plugin in the Plugin Runner needs to know some information that is not part of the HTTPReqCall request, such as the request start time and the route ID in APISIX. Hence the Plugin Runner needs to reply to an ",(0,a.kt)("inlineCode",{parentName:"p"},"ExtraInfo")," message as the response on the connection which sends the HTTPReqCall request. APISIX will read the ",(0,a.kt)("inlineCode",{parentName:"p"},"ExtraInfo")," message and return the asked information."),(0,a.kt)("p",null,"Currently, the information below is passed by ",(0,a.kt)("inlineCode",{parentName:"p"},"ExtraInfo"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"variable value"),(0,a.kt)("li",{parentName:"ul"},"request body")),(0,a.kt)("p",null,"The flow of HTTPReqCall procession is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"APISIX sends HTTPReqCall\nPlugin Runner looks up the plugin configuration by the token in HTTPReqCall\n(optional) loop:\n\xa0 \xa0 Plugin Runner asks for ExtraInfo\n\xa0 \xa0 APISIX replies the ExtraInfo\nPlugin Runner replies HTTPReqCall\n")))}c.isMDXComponent=!0}}]);