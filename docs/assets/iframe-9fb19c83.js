import"../sb-preview/runtime.mjs";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const _ of e.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&l(_)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const f="modulepreload",p=function(o,n){return new URL(o,n).href},O={},r=function(n,s,l){if(!s||s.length===0)return n();const t=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=p(e,l),e in O)return;O[e]=!0;const _=e.endsWith(".css"),R=_?'[rel="stylesheet"]':"";if(!!l)for(let c=t.length-1;c>=0;c--){const a=t[c];if(a.href===e&&(!_||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${R}`))return;const i=document.createElement("link");if(i.rel=_?"stylesheet":f,_||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),_)return new Promise((c,a)=>{i.addEventListener("load",c),i.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>n())},{createChannel:S}=__STORYBOOK_MODULE_CHANNEL_POSTMESSAGE__,{createChannel:T}=__STORYBOOK_MODULE_CHANNEL_WEBSOCKET__,{addons:E}=__STORYBOOK_MODULE_PREVIEW_API__,m=S({page:"preview"});E.setChannel(m);window.__STORYBOOK_ADDONS_CHANNEL__=m;const{SERVER_CHANNEL_URL:u}=globalThis;if(u){const o=T({url:u});E.setServerChannel(o),window.__STORYBOOK_SERVER_CHANNEL__=o}const P={"./stories/AvatarCreator.stories.tsx":async()=>r(()=>import("./AvatarCreator.stories-26a38c96.js"),["./AvatarCreator.stories-26a38c96.js","./container-871468c0.js","./index-ebeaab24.js","./extends-98964cd2.js"],import.meta.url),"./stories/AvatarEditor.stories.tsx":async()=>r(()=>import("./AvatarEditor.stories-8f098a78.js"),["./AvatarEditor.stories-8f098a78.js","./container-871468c0.js","./index-ebeaab24.js"],import.meta.url)};async function d(o){return P[o]()}d.__docgenInfo={description:"",methods:[],displayName:"importFn"};const{composeConfigs:L,PreviewWeb:w,ClientApi:h}=__STORYBOOK_MODULE_PREVIEW_API__,A=async()=>{const o=await Promise.all([r(()=>import("./config-7d12184e.js"),["./config-7d12184e.js","./index-d475d2ea.js","./index-ebeaab24.js","./index-b7c3d19e.js","./index-356e4a49.js"],import.meta.url),r(()=>import("./preview-0435c720.js"),["./preview-0435c720.js","./index-d475d2ea.js","./index-d37d4223.js"],import.meta.url),r(()=>import("./preview-1f0c7521.js"),[],import.meta.url),r(()=>import("./preview-47e5b674.js"),[],import.meta.url),r(()=>import("./preview-f96f0111.js"),["./preview-f96f0111.js","./index-d475d2ea.js","./index-356e4a49.js"],import.meta.url),r(()=>import("./preview-e6f1f377.js"),["./preview-e6f1f377.js","./index-d475d2ea.js"],import.meta.url),r(()=>import("./preview-62235626.js"),["./preview-62235626.js","./index-d475d2ea.js","./index-356e4a49.js"],import.meta.url),r(()=>import("./preview-b1164a2e.js"),["./preview-b1164a2e.js","./index-d475d2ea.js"],import.meta.url),r(()=>import("./preview-1e5c59db.js"),[],import.meta.url)]);return L(o)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new w;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new h({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:d,getProjectAnnotations:A});export{r as _};
//# sourceMappingURL=iframe-9fb19c83.js.map
