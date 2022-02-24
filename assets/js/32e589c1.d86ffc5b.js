"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[65882],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(a),h=r,m=d["".concat(p,".").concat(h)]||d[h]||c[h]||i;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},87647:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return c}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o={title:"Getting Started"},s=void 0,p={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"\x3c!--",source:"@site/docs/apisix/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/apisix/next/getting-started",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/getting-started.md",tags:[],version:"current",frontMatter:{title:"Getting Started"},sidebar:"docs",previous:{title:"Debug Mode",permalink:"/docs/apisix/next/architecture-design/debug-mode"},next:{title:"Installing Apache APISIX",permalink:"/docs/apisix/next/how-to-build"}},l=[{value:"Summary",id:"summary",children:[]},{value:"Pre-Requisites",id:"pre-requisites",children:[]},{value:"Step 1: Install Apache APISIX",id:"step-1-install-apache-apisix",children:[]},{value:"Step 2: Create a Route",id:"step-2-create-a-route",children:[{value:"Create an Upstream",id:"create-an-upstream",children:[]},{value:"Binding the Route to the Upstream",id:"binding-the-route-to-the-upstream",children:[]}]},{value:"Step 3: Validating the Route",id:"step-3-validating-the-route",children:[]},{value:"Advanced Features and Operations",id:"advanced-features-and-operations",children:[{value:"Authentication",id:"authentication",children:[]},{value:"Prefixing a Route",id:"prefixing-a-route",children:[]},{value:"APISIX Dashboard",id:"apisix-dashboard",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[]}]}],u={toc:l};function c(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"This guide walks through how you can get up and running with Apache APISIX."),(0,i.kt)("p",null,"The guide is divided into these three steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Installing Apache APISIX"),(0,i.kt)("li",{parentName:"ol"},"Creating a Route and binding it with an Upstream"),(0,i.kt)("li",{parentName:"ol"},"Verifying the results after binding with ",(0,i.kt)("inlineCode",{parentName:"li"},"curl"))),(0,i.kt)("p",null,"This document also introduces some of the advanced features and operations in Apache APISIX like authentication, prefixing a Route, using the APISIX Dashboard, and troubleshooting."),(0,i.kt)("p",null,"The following ",(0,i.kt)("inlineCode",{parentName:"p"},"echo")," endpoint is used as an example here. This endpoint will return the parameters we pass."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Request")),(0,i.kt)("p",null,"The components of the request URL are shown and explained below:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/apisix@master/docs/assets/images/requesturl.jpg",alt:"RequestURL"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Protocol: The network transport protocol. ",(0,i.kt)("inlineCode",{parentName:"li"},"HTTP")," protocol is used for this example."),(0,i.kt)("li",{parentName:"ul"},"Port: The port. ",(0,i.kt)("inlineCode",{parentName:"li"},"80")," is used for this example."),(0,i.kt)("li",{parentName:"ul"},"Host: The host. ",(0,i.kt)("inlineCode",{parentName:"li"},"httpbin.org")," is used for this example."),(0,i.kt)("li",{parentName:"ul"},"Path: The path. ",(0,i.kt)("inlineCode",{parentName:"li"},"/get")," is used for this example."),(0,i.kt)("li",{parentName:"ul"},"Query Parameters: The query string. Two strings ",(0,i.kt)("inlineCode",{parentName:"li"},"foo1")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"foo2")," are used for this example.")),(0,i.kt)("p",null,"We can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"curl")," command to send the request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request GET "http://httpbin.org/get?foo1=bar1&foo2=bar2"\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Response")),(0,i.kt)("p",null,"We receive a JSON response when we send the request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "args": {\n    "foo1": "bar1",\n    "foo2": "bar2"\n  },\n  "headers": {\n    "Accept": "*/*",\n    "Host": "httpbin.org",\n    "User-Agent": "curl/7.29.0",\n    "X-Amzn-Trace-Id": "Root=1-6088fe84-24f39487166cce1f0e41efc9"\n  },\n  "origin": "58.152.81.42",\n  "url": "http://httpbin.org/get?foo1=bar1&foo2=bar2"\n}\n')),(0,i.kt)("h2",{id:"pre-requisites"},"Pre-Requisites"),(0,i.kt)("p",null,"Before you jump ahead, make sure that you have your machine setup with these tools."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker")," and ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},"Docker Compose"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://curl.se/docs/manpage.html"},"curl")," for testing the API. Alternatively, you can use tools like ",(0,i.kt)("a",{parentName:"p",href:"https://hoppscotch.io/"},"Hoppscotch")," or ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/"},"Postman"),"."))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you already have Apache APISIX installed, please skip Step 1, and go to ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/next/getting-started#step-2-create-a-route"},"Step 2")," directly."))),(0,i.kt)("h2",{id:"step-1-install-apache-apisix"},"Step 1: Install Apache APISIX"),(0,i.kt)("p",null,"You can check out ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/next/how-to-build"},"Building Apache APISIX")," for different installation methods."),(0,i.kt)("p",null,"To get started quickly, we will install Apache APISIX with Docker and enable the ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/next/admin-api"},"Admin API"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Download the docker-compose file of Apache APISIX\ngit clone https://github.com/apache/apisix-docker.git\n# Switch the current directory to the apisix-docker/example\ncd apisix-docker/example\n# Start Apache APISIX with docker-compose\ndocker-compose -p docker-apisix up -d\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Apache APISIX already supports ARM64 architecture. To run Apache APISIX on ARM64, run: ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose -p docker-apisix -f docker-compose-arm64.yml up -d")," instead of the last step above.")),(0,i.kt)("p",null,"Please remain patient as it will take some time to download the files and spin up the containers."),(0,i.kt)("p",null,"Once Apache APISIX is running, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"curl")," to access the Admin API. You can also check if Apache APISIX is running properly by running this command and checking the response."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Execute on your host machine (machine running Docker)\ncurl \"http://127.0.0.1:9080/apisix/admin/services/\" -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1'\n")),(0,i.kt)("p",null,"This response indicates that Apache APISIX is running successfully."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "count":0,\n  "action":"get",\n  "node":{\n    "key":"/apisix/services",\n    "nodes":[],\n    "dir":true\n  }\n}\n')),(0,i.kt)("h2",{id:"step-2-create-a-route"},"Step 2: Create a Route"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/next/architecture-design/route"},"Routes")," matches the client's requests based on defined rules, loads and executes the corresponding plugins, and forwards the request to the specified upstream."),(0,i.kt)("p",null,"From the previous step, we have a running instance of Apache APISIX in Docker. Now let's create a Route."),(0,i.kt)("p",null,"Apache APISIX provides a powerful ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/next/admin-api"},"Admin API")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-dashboard"},"APISIX Dashboard"),". Here, we will use the Admin API to create a Route and connect it to an ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/next/architecture-design/upstream"},"Upstream")," service. When a request arrives, Apache APISIX will forward the request to the specified Upstream service."),(0,i.kt)("p",null,"We will create a sample configuration for our Route object so that Apache APISIX can forward the request to the corresponding Upstream service."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl "http://127.0.0.1:9080/apisix/admin/routes/1" -H "X-API-KEY: edd1c9f034335f136f87ad84b625c8f1" -X PUT -d \'\n{\n  "methods": ["GET"],\n  "host": "example.com",\n  "uri": "/anything/*",\n  "upstream": {\n    "type": "roundrobin",\n    "nodes": {\n      "httpbin.org:80": 1\n    }\n  }\n}\'\n')),(0,i.kt)("p",null,"This configuration means that it will forward all matching inbound requests to the upstream service (",(0,i.kt)("inlineCode",{parentName:"p"},"httpbin.org:80"),") if they meet these specified criterion."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The HTTP method of the request is ",(0,i.kt)("inlineCode",{parentName:"li"},"GET"),"."),(0,i.kt)("li",{parentName:"ul"},"The request header contains the ",(0,i.kt)("inlineCode",{parentName:"li"},"host")," field, and its value is ",(0,i.kt)("inlineCode",{parentName:"li"},"example.com"),"."),(0,i.kt)("li",{parentName:"ul"},"The request path matches ",(0,i.kt)("inlineCode",{parentName:"li"},"/anything/*"),". ",(0,i.kt)("inlineCode",{parentName:"li"},"*")," means any sub path. For example ",(0,i.kt)("inlineCode",{parentName:"li"},"/anything/foo?arg=10"),".")),(0,i.kt)("p",null,"Now that the Route has been created, we can access the Upstream service from the address exposed by Apache APISIX."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -i -X GET "http://127.0.0.1:9080/anything/foo?arg=10" -H "Host: example.com"\n')),(0,i.kt)("p",null,"This request will be forwarded to ",(0,i.kt)("inlineCode",{parentName:"p"},"http://httpbin.org:80/anything/foo?arg=10")," by Apache APISIX."),(0,i.kt)("h3",{id:"create-an-upstream"},"Create an Upstream"),(0,i.kt)("p",null,"In the previous session we discussed setting up a Route and an Upstream for the Route."),(0,i.kt)("p",null,"To create an Upstream, we can execute the following command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl "http://127.0.0.1:9080/apisix/admin/upstreams/1" -H "X-API-KEY: edd1c9f034335f136f87ad84b625c8f1" -X PUT -d \'\n{\n  "type": "roundrobin",\n  "nodes": {\n    "httpbin.org:80": 1\n  }\n}\'\n')),(0,i.kt)("p",null,"We use ",(0,i.kt)("inlineCode",{parentName:"p"},"roundrobin")," as the load balancing mechanism and set ",(0,i.kt)("inlineCode",{parentName:"p"},"httpbin.org:80")," as our Upstream service with an ID of ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),". See ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/next/admin-api"},"Admin API")," for more information about the fields."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Creating an Upstream service is not mandatory as we can use a ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/next/architecture-design/plugin"},"Plugin")," to intercept the request and then respond directly. However, for the purposes of this guide, we assume that at least one Upstream service needs to be set up."))),(0,i.kt)("h3",{id:"binding-the-route-to-the-upstream"},"Binding the Route to the Upstream"),(0,i.kt)("p",null,"We can now bind a Route to the Upstream service we just created."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl "http://127.0.0.1:9080/apisix/admin/routes/1" -H "X-API-KEY: edd1c9f034335f136f87ad84b625c8f1" -X PUT -d \'\n{\n  "uri": "/get",\n  "host": "httpbin.org",\n  "upstream_id": "1"\n}\'\n')),(0,i.kt)("h2",{id:"step-3-validating-the-route"},"Step 3: Validating the Route"),(0,i.kt)("p",null,"We will now access Apache APISIX to test the Route and the bounded Upstream service."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -i -X GET "http://127.0.0.1:9080/get?foo1=bar1&foo2=bar2" -H "Host: httpbin.org"\n')),(0,i.kt)("p",null,"This will return the data from the Upstream service we configured in our route (",(0,i.kt)("inlineCode",{parentName:"p"},"httpbin.org"),")."),(0,i.kt)("h2",{id:"advanced-features-and-operations"},"Advanced Features and Operations"),(0,i.kt)("p",null,"This section looks at some of the advanced features and operations available in Apache APISIX like ",(0,i.kt)("a",{parentName:"p",href:"#authentication"},"authentication"),", ",(0,i.kt)("a",{parentName:"p",href:"#prefixing-a-route"},"prefixing a Route"),", using the ",(0,i.kt)("a",{parentName:"p",href:"#apisix-dashboard"},"APISIX Dashboard"),", and ",(0,i.kt)("a",{parentName:"p",href:"#troubleshooting"},"troubleshooting"),"."),(0,i.kt)("h3",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"The Route we created in ",(0,i.kt)("a",{parentName:"p",href:"#step-2-create-a-route"},"step 2")," is public. This means that anyone knowing the address exposed by Apache APISIX can access the Upstream service."),(0,i.kt)("p",null,"This is unsafe and amounts to security risks. So, in practical applications, we generally add authentication to the Route to enhance security."),(0,i.kt)("p",null,"Let's assume for our scenario that we only want a specific user ",(0,i.kt)("inlineCode",{parentName:"p"},"John")," to have access to the Upstream service."),(0,i.kt)("p",null,"We will use ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/next/architecture-design/consumer"},"Consumer")," a ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/next/architecture-design/plugin"},"Plugin")," to implement authentication to handle this scenario."),(0,i.kt)("p",null,"First, we will use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/next/plugins/key-auth"},"key-auth")," plugin to create a ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/next/architecture-design/consumer"},"Consumer")," ",(0,i.kt)("inlineCode",{parentName:"p"},"John"),". We also need to provide the specified key for ",(0,i.kt)("inlineCode",{parentName:"p"},"John"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl "http://127.0.0.1:9080/apisix/admin/consumers" -H "X-API-KEY: edd1c9f034335f136f87ad84b625c8f1" -X PUT -d \'\n{\n  "username": "john",\n  "plugins": {\n    "key-auth": {\n      "key": "key-of-john"\n    }\n  }\n}\'\n')),(0,i.kt)("p",null,"We can now bind ",(0,i.kt)("inlineCode",{parentName:"p"},"consumer(John)")," to the Route. For this, we just need to enable the ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/next/plugins/key-auth"},"key-auth")," plugin as shown below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl "http://127.0.0.1:9080/apisix/admin/routes/1" -H "X-API-KEY: edd1c9f034335f136f87ad84b625c8f1" -X PUT -d \'\n{\n  "uri": "/get",\n  "host": "httpbin.org",\n  "plugins": {\n    "key-auth": {}\n  },\n  "upstream_id": "1"\n}\'\n')),(0,i.kt)("p",null,"Now with the authentication added, when we try to access the Route we created in ",(0,i.kt)("a",{parentName:"p",href:"#step-2-create-a-route"},"step 2"),' it will trigger an "Unauthorized Error".'),(0,i.kt)("p",null,"To access the Route, we need to add a ",(0,i.kt)("inlineCode",{parentName:"p"},"Header")," named ",(0,i.kt)("inlineCode",{parentName:"p"},"apikey")," with John's key."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -i -X GET http://127.0.0.1:9080/get -H "Host: httpbin.org" -H "apikey: key-of-john"\n')),(0,i.kt)("h3",{id:"prefixing-a-route"},"Prefixing a Route"),(0,i.kt)("p",null,"When you want to add a prefix to your Route but don't want to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Host")," header, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"proxy-rewrite")," Plugin."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl "http://127.0.0.1:9080/apisix/admin/routes/1" -H "X-API-KEY: edd1c9f034335f136f87ad84b625c8f1" -X PUT -d \'\n{\n  "uri": "/samplePrefix/get",\n  "plugins": {\n    "proxy-rewrite": {\n      "regex_uri": ["^/samplePrefix/get(.*)", "/get$1"]\n    },\n    "key-auth": {}\n  },\n  "upstream_id": "1"\n}\'\n')),(0,i.kt)("p",null,"Then to invoke the Route you can run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -i -X GET "http://127.0.0.1:9080/samplePrefix/get?param1=foo&param2=bar" -H "apikey: key-of-john"\n')),(0,i.kt)("h3",{id:"apisix-dashboard"},"APISIX Dashboard"),(0,i.kt)("p",null,"Apache APISIX comes with an intuitive ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-dashboard"},"Dashboard")," to make it easy to configure and perform operations."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/apisix@master/docs/assets/images/dashboard.jpeg",alt:"Dashboard"})),(0,i.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"You can try these troubleshooting steps if you are unable to proceed as suggested in the docs above."),(0,i.kt)("p",null,"Please ",(0,i.kt)("a",{parentName:"p",href:"/docs/general/contributor-guide#submit-an-issue"},"open an issue")," if you run into any bugs or if there are any missing troubleshooting steps."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Make sure that all required ports (",(0,i.kt)("strong",{parentName:"p"},"default 9080/9443/2379"),") are available (not used by other systems or processes)."),(0,i.kt)("p",{parentName:"li"},"  You can run the command below to terminate the processes that are listening on a specific port (on Unix-based systems)."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo fuser -k 9443/tcp\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the Docker container keeps restarting or IS failing, log in to the container and observe the logs to diagnose the problem."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs -f --tail container_id\n")))))}c.isMDXComponent=!0}}]);