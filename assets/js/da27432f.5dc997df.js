"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[97169],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),f=o,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||a;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},17361:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return s}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i={title:"Plugins"},l=void 0,u={unversionedId:"plugins",id:"version-2.7/plugins",isDocsHomePage:!1,title:"Plugins",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.7/plugins.md",sourceDirName:".",slug:"/plugins",permalink:"/docs/apisix/2.7/plugins",editUrl:null,tags:[],version:"2.7",frontMatter:{title:"Plugins"}},c=[{value:"Hot reload",id:"hot-reload",children:[{value:"Hot reload in stand-alone mode",id:"hot-reload-in-stand-alone-mode",children:[]}]}],p={toc:c};function s(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"hot-reload"},"Hot reload"),(0,a.kt)("p",null,"APISIX plugins are hot-loaded. No matter you add, delete or modify plugins, and ",(0,a.kt)("strong",{parentName:"p"},"update codes of plugins in disk"),", you don't need to restart the service."),(0,a.kt)("p",null,"If your APISIX node has the Admin API turned on, just send an HTTP request through admin API:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/apisix/admin/plugins/reload -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -X PUT\n")),(0,a.kt)("p",null,"Note: if you disable a plugin which has been configured as part of your rule (in the ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins")," field of ",(0,a.kt)("inlineCode",{parentName:"p"},"route"),", etc.),\nthe its execution will be skipped."),(0,a.kt)("h3",{id:"hot-reload-in-stand-alone-mode"},"Hot reload in stand-alone mode"),(0,a.kt)("p",null,"For stand-alone mode, see plugin related section in ",(0,a.kt)("a",{parentName:"p",href:"/docs/apisix/2.7/stand-alone"},"stand alone mode"),"."))}s.isMDXComponent=!0}}]);