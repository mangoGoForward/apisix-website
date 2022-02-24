"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[85751],{45743:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r=n(67294),i=n(29163);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createElement("path",{fill:"#333",d:"M896.4 195.6c-19.1-19.2-44.5-29.8-71.5-29.8l-587.9-.9h-.2c-55.7 0-101.1 45.3-101.2 101.1l-1.1 608.6c-.1 10 5.5 18.8 14.4 23.2 3.6 1.7 7.5 2.6 11.3 2.6 5.6 0 11.2-1.9 15.8-5.5l127-99.2c2.7-2.1 6.1-3.3 9.5-3.3l511 .8h.2c55.8 0 101.2-45.3 101.3-101l.9-425c.1-27-10.4-52.4-29.5-71.6zM881 692.1c-.1 31.5-25.8 57.1-57.3 57.1h-.1l-511-.8h-.1c-13.1 0-26.1 4.5-36.5 12.6l-97.5 76.2 1-571.1c.1-31.6 25.8-57.2 57.3-57.2l588 .9c15.3 0 29.6 6 40.4 16.8s16.7 25.2 16.7 40.5l-.9 425z"});var l=function(e){var t=e.title,n=e.titleId,i=a(e,["title","titleId"]);return r.createElement("svg",o({className:"comment_svg__icon",width:16,height:16,viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},i),t?r.createElement("title",{id:n},t):null,c)},s=i.ZP.div.withConfig({displayName:"ContributeCard__Card",componentId:"sc-14oe329-0"})(["@media (max-width:700px){width:100%;}width:80%;border:1px solid rgb(232,67,62);border-radius:5px;margin-bottom:1rem;padding:0.75rem 1.25rem;&:hover{background-color:rgb(255,241,240,0.2);cursor:pointer;p{color:rgb(232,67,62);}}background-color:",";"],(function(e){return e.isShow?"rgb(255,241,240,0.2)":""})),m=i.ZP.div.withConfig({displayName:"ContributeCard__ProjectTitle",componentId:"sc-14oe329-1"})(["display:flex;justify-content:space-between;align-items:center;margin-left:1.25 rem;margin-right:1.25 rem;"]),u=i.ZP.p.withConfig({displayName:"ContributeCard__Title",componentId:"sc-14oe329-2"})(["margin:0;font-size:1.5rem;color:",";"],(function(e){return e.isShow?"rgb(232, 67, 62)":""})),d=i.ZP.div.withConfig({displayName:"ContributeCard__Issue",componentId:"sc-14oe329-3"})(["@media (max-width:700px){min-width:5rem;}border:1px solid rgb(232,67,62);border-radius:0.5rem;padding:0.25rem 0.5rem;font-size:.875rem;"]),p=i.ZP.div.withConfig({displayName:"ContributeCard__ProjectDesc",componentId:"sc-14oe329-4"})(["display:flex;color:",";"],(function(e){return e.isShow?"rgb(232, 67, 62)":""})),h=i.ZP.div.withConfig({displayName:"ContributeCard__List",componentId:"sc-14oe329-5"})(["display:",";"],(function(e){return e.isShow?"block":"none"})),f=i.ZP.li.withConfig({displayName:"ContributeCard__ListItem",componentId:"sc-14oe329-6"})(["list-style:none;display:flex;"]),g=function(e){return fetch("https://api.github.com/repos/"+e+"/issues?state=open&labels=good%20first%20issue",{headers:{"content-type":"application/json",Accept:"application / vnd.github.v3 + json"}}).then((function(e){return e.json()}))},b=function(e){return fetch("https://api.github.com/repos/"+e,{headers:{"content-type":"application/json",Accept:"application / vnd.github.v3 + json"}}).then((function(e){return e.json()}))},y=function(e){var t=e.repoName,n=(0,r.useState)(!1),i=n[0],o=n[1],a=(0,r.useState)({description:"",Star:"",Watch:"",Fork:""}),c=a[0],y=a[1],w=(0,r.useState)([]),v=w[0],C=w[1];return(0,r.useEffect)((function(){g(t).then((function(e){C(e)})),b(t).then((function(e){y({description:e.description,Star:e.stargazers_count,Watch:e.subscribers_count,Fork:e.forks_count})}))}),[]),r.createElement(s,{onClick:function(){return o(!i)},isShow:i},r.createElement(m,null,r.createElement(u,{isShow:i},t),r.createElement(d,{isShow:i},v.length," issues")),r.createElement("div",null,c.description),r.createElement(p,{isShow:i},r.createElement("div",{style:{marginRight:"1rem"}},"Star: ",c.Star),r.createElement("div",{style:{marginRight:"1rem"}},"Watch: ",c.Watch),r.createElement("div",{style:{marginRight:"1rem"}},"Fork: ",c.Fork)),r.createElement(h,{isShow:i},r.createElement("ul",{style:{paddingLeft:0}},v.map((function(e){return r.createElement(f,{key:e.number},r.createElement("div",{style:{minWidth:"4rem"}},"#",e.number),r.createElement("a",{target:"_blank",href:e.html_url,style:{flex:"1 1 auto",textDecoration:"none",overflow:"hidden"}},e.title," "),e.comments>0?r.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.createElement(l,null),r.createElement("div",{style:{marginLeft:"0.25rem",fontSize:"0.5rem",color:"#333"}},e.comments)):"")})))))}}}]);