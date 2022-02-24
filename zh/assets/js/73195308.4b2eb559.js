"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[60915],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=l(n),m=a,k=s["".concat(p,".").concat(m)]||s[m]||u[m]||i;return n?r.createElement(k,o(o({ref:t},d),{},{components:n})):r.createElement(k,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},22884:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o={title:"Deploy Apache APISIX with Docker"},c=void 0,p={unversionedId:"manual",id:"version-apisix-2.10.1/manual",isDocsHomePage:!1,title:"Deploy Apache APISIX with Docker",description:"\x3c!--",source:"@site/docs-apisix-docker_versioned_docs/version-apisix-2.10.1/manual.md",sourceDirName:".",slug:"/manual",permalink:"/zh/docs/docker/apisix-2.10.1/manual",editUrl:null,tags:[],version:"apisix-2.10.1",frontMatter:{title:"Deploy Apache APISIX with Docker"},sidebar:"version-apisix-2.10.1/docs",previous:{title:"Build an image from the source codes",permalink:"/zh/docs/docker/apisix-2.10.1/build"},next:{title:"Example",permalink:"/zh/docs/docker/apisix-2.10.1/example"}},l=[{value:"Manual deploy apisix via docker",id:"manual-deploy-apisix-via-docker",children:[{value:"Create a network <code>apisix</code>",id:"create-a-network-apisix",children:[]},{value:"Run etcd server with <code>apisix</code> network",id:"run-etcd-server-with-apisix-network",children:[]},{value:"Run Apache APISIX server",id:"run-apache-apisix-server",children:[]},{value:"Have a test",id:"have-a-test",children:[]},{value:"Clean",id:"clean",children:[]}]}],d={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"manual-deploy-apisix-via-docker"},"Manual deploy apisix via docker"),(0,i.kt)("h3",{id:"create-a-network-apisix"},"Create a network ",(0,i.kt)("inlineCode",{parentName:"h3"},"apisix")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker network create \\\n  --driver=bridge \\\n  --subnet=172.18.0.0/16 \\\n  --ip-range=172.18.5.0/24 \\\n  --gateway=172.18.5.254 \\\n  apisix\n")),(0,i.kt)("h3",{id:"run-etcd-server-with-apisix-network"},"Run etcd server with ",(0,i.kt)("inlineCode",{parentName:"h3"},"apisix")," network"),(0,i.kt)("p",null,"Specify ip ",(0,i.kt)("inlineCode",{parentName:"p"},"172.18.5.10")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker run -it --name etcd-server \\\n-v `pwd`/example/etcd_conf/etcd.conf.yml:/opt/bitnami/etcd/conf/etcd.conf.yml \\\n-p 2379:2379 \\\n-p 2380:2380  \\\n--network apisix \\\n--ip 172.18.5.10 \\\n--env ALLOW_NONE_AUTHENTICATION=yes bitnami/etcd:3.4.9\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note:"),(0,i.kt)("ol",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ol"},"Windows OS use absolute paths to hang in the configuration file."),(0,i.kt)("li",{parentName:"ol"},"e.g\uff1aWindows dir path ",(0,i.kt)("inlineCode",{parentName:"li"},"E:\\GitHub\\docker-apisix"),"\uff0cconfiguration file hang path is ",(0,i.kt)("inlineCode",{parentName:"li"},"-v /e/github/docker-apisix/example/etcd_conf/etcd.conf.yml:/opt/bitnami/etcd/conf/etcd.conf.yml")))),(0,i.kt)("h3",{id:"run-apache-apisix-server"},"Run Apache APISIX server"),(0,i.kt)("p",null,"You need etcd docker to work with Apache APISIX. You can refer to ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/docker/apisix-2.10.1/example"},"the docker-compose example"),"."),(0,i.kt)("p",null,"Or you can run APISIX with Docker directly\uff08Docker name is test-api-gateway\uff09:"),(0,i.kt)("p",null,"Check or Modify etcd address to ",(0,i.kt)("inlineCode",{parentName:"p"},"http: //172.18.5.10:2379")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"pwd")," / example / apisix_conf / config.yaml: /usr/local/apisix/conf/config.yaml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker run --name test-api-gateway \\\n -v `pwd`/example/apisix_conf/config.yaml:/usr/local/apisix/conf/config.yaml \\\n -v `pwd`/example/apisix_log:/usr/local/apisix/logs  \\\n -p 9080:9080 \\\n -p 9091:9091  \\\n -p 9443:9443 \\\n --network apisix \\\n --ip 172.18.5.11 \\\n -d apache/apisix\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note:"),(0,i.kt)("ol",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ol"},"Windows OS use absolute paths to hang in the configuration file and log dir."))),(0,i.kt)("h3",{id:"have-a-test"},"Have a test"),(0,i.kt)("p",null,"Test with admin api"),(0,i.kt)("p",null,"e.g. Get route list, should be return"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl http://127.0.0.1:9080/apisix/admin/routes/\n...\n{"node":{"createdIndex":4,"modifiedIndex":4,"key":"\\/apisix\\/routes","dir":true},"action":"get"}\n')),(0,i.kt)("h3",{id:"clean"},"Clean"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker rm test-api-gateway\ndocker rm etcd-server\ndocker network rm apisix\n")))}u.isMDXComponent=!0}}]);