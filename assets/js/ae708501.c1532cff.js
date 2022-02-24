"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[60480],{3905:function(e,r,n){n.d(r,{Zo:function(){return s},kt:function(){return d}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),u=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},s=function(e){var r=u(e.components);return t.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||i;return n?t.createElement(m,a(a({ref:r},s),{},{components:n})):t.createElement(m,a({ref:r},s))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},28935:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var t=n(87462),o=n(63366),i=(n(67294),n(3905)),a={title:"Build an image from the source codes"},c=void 0,l={unversionedId:"build",id:"version-apisix-2.12.1/build",isDocsHomePage:!1,title:"Build an image from the source codes",description:"\x3c!--",source:"@site/docs-apisix-docker_versioned_docs/version-apisix-2.12.1/build.md",sourceDirName:".",slug:"/build",permalink:"/docs/docker/build",editUrl:null,tags:[],version:"apisix-2.12.1",frontMatter:{title:"Build an image from the source codes"},sidebar:"version-apisix-2.12.1/docs",next:{title:"Deploy Apache APISIX with Docker",permalink:"/docs/docker/manual"}},u=[{value:"Build an image from source",id:"build-an-image-from-source",children:[]}],s={toc:u};function p(e){var r=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"build-an-image-from-source"},"Build an image from source"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Docker images are not official ASF releases but provided for convenience. Recommended usage is always to build the source.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"install release version (Apache releases are beginning from version 0.9):")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# Assign Apache release version number to variable `APISIX_VERSION`, for example: 2.2. The latest version can be find at `https://github.com/apache/apisix/releases`\n\nexport APISIX_VERSION=2.9\nmake build-on-alpine\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"install master branch version, which has latest code(ONLY for the developer's convenience):")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"export APISIX_VERSION=master\nmake build-on-alpine\n")))}p.isMDXComponent=!0}}]);