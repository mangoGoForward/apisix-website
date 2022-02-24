"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9686],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(r),m=n,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return r?a.createElement(f,o(o({ref:t},d),{},{components:r})):a.createElement(f,o({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},95301:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),o={title:"Import OpenAPI Guide"},p=void 0,l={unversionedId:"IMPORT_OPENAPI_USER_GUIDE",id:"version-2.5/IMPORT_OPENAPI_USER_GUIDE",isDocsHomePage:!1,title:"Import OpenAPI Guide",description:"\x3c!--",source:"@site/docs-apisix-dashboard_versioned_docs/version-2.5/IMPORT_OPENAPI_USER_GUIDE.md",sourceDirName:".",slug:"/IMPORT_OPENAPI_USER_GUIDE",permalink:"/zh/docs/dashboard/2.5/IMPORT_OPENAPI_USER_GUIDE",editUrl:null,tags:[],version:"2.5",frontMatter:{title:"Import OpenAPI Guide"},sidebar:"version-2.5/docs",previous:{title:"User Guide",permalink:"/zh/docs/dashboard/2.5/USER_GUIDE"},next:{title:"API doc of Manager API.",permalink:"/zh/docs/dashboard/2.5/api/api"}},s=[{value:"OAS3.0 Compatibility",id:"oas30-compatibility",children:[]},{value:"Extended fields",id:"extended-fields",children:[]}],d={toc:s};function u(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The OpenAPI Specification (OAS) defines a standard, language-agnostic interface to RESTful APIs which allows both humans and computers to discover and understand the capabilities of the service without access to source code, documentation, or through network traffic inspection."),(0,i.kt)("p",null,"Apache APISIX Dashboard supports importing ",(0,i.kt)("a",{parentName:"p",href:"https://swagger.io/specification/"},"OpenApi3.0"),"(we will use OAS3.0 for short) files to create the Route. Currently we support support most of the OpenApi specifications, but there are some differences, which are in terms of compatibility and extended fields."),(0,i.kt)("h2",{id:"oas30-compatibility"},"OAS3.0 Compatibility"),(0,i.kt)("p",null,"when we import routes from OAS3.0, some fields in OAS will be missed because there are not corresponding fields in APISIX's Route:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://swagger.io/docs/specification/api-general-info/"},"API General Info"),": used to describe the general information about your API, some times, a oas file contains a series of apis which belong to a app, so this info is different from the api's name and extra basic info.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://swagger.io/docs/specification/api-host-and-base-path/"},"API server and base path"),": upsream url + url prefix(options).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://swagger.io/docs/specification/describing-parameters/"},"Path params"),": api params described in path.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://swagger.io/docs/specification/describing-parameters/"},"Query params"),": api params described in query.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://swagger.io/docs/specification/describing-responses/"},"Responses description and links"),": Define the responses for a API operations."))),(0,i.kt)("h2",{id:"extended-fields"},"Extended fields"),(0,i.kt)("p",null,"There are some fields required in APISIX Route but are not included in the properties of OAS3.0, we added some extended fields such as upstream, plugins, hosts and so on. All extensions start with x-apisix. See ",(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/admin-api/#route"},"reference")," For more details of the APISIX Route Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Extended fields"),(0,i.kt)("th",{parentName:"tr",align:null},"APISIX Route Properties"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"x-apisix-plugins"),(0,i.kt)("td",{parentName:"tr",align:null},"plugins")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"x-apisix-script"),(0,i.kt)("td",{parentName:"tr",align:null},"script")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"x-apisix-upstream"),(0,i.kt)("td",{parentName:"tr",align:null},"upstream")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"x-apisix-service_protocol"),(0,i.kt)("td",{parentName:"tr",align:null},"service_protocol")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"x-apisix-host"),(0,i.kt)("td",{parentName:"tr",align:null},"host")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"x-apisix-hosts"),(0,i.kt)("td",{parentName:"tr",align:null},"hosts")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"x-apisix-remote_addr"),(0,i.kt)("td",{parentName:"tr",align:null},"remote_addr")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"x-apisix-priority"),(0,i.kt)("td",{parentName:"tr",align:null},"priority")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"x-apisix-vars"),(0,i.kt)("td",{parentName:"tr",align:null},"vars")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"x-apisix-filter_func"),(0,i.kt)("td",{parentName:"tr",align:null},"filter_func")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"x-apisix-labels"),(0,i.kt)("td",{parentName:"tr",align:null},"labels")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"x-apisix-enable_websocket"),(0,i.kt)("td",{parentName:"tr",align:null},"enable_websocket")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"x-apisix-status"),(0,i.kt)("td",{parentName:"tr",align:null},"status")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"x-apisix-create_time"),(0,i.kt)("td",{parentName:"tr",align:null},"create_time")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"x-apisix-update_time"),(0,i.kt)("td",{parentName:"tr",align:null},"update_time")))))}u.isMDXComponent=!0}}]);