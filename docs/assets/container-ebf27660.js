import{r as y}from"./index-ebeaab24.js";var b={exports:{}},m={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w=y,S=Symbol.for("react.element"),L=Symbol.for("react.fragment"),O=Object.prototype.hasOwnProperty,j=w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,q={key:!0,ref:!0,__self:!0,__source:!0};function x(s,e,r){var u,t={},p=null,c=null;r!==void 0&&(p=""+r),e.key!==void 0&&(p=""+e.key),e.ref!==void 0&&(c=e.ref);for(u in e)O.call(e,u)&&!q.hasOwnProperty(u)&&(t[u]=e[u]);if(s&&s.defaultProps)for(u in e=s.defaultProps,e)t[u]===void 0&&(t[u]=e[u]);return{$$typeof:S,type:s,key:p,ref:c,props:t,_owner:j.current}}m.Fragment=L;m.jsx=x;m.jsxs=x;b.exports=m;var i=b.exports;const R=i.jsx,U=i.jsxs;var d=(s=>(s.FrameReady="v1.frame.ready",s.SubscriptionCreated="v1.subscription.created",s.SubscriptionDeleted="v1.subscription.deleted",s.AvatarExported="v1.avatar.exported",s.UserSet="v1.user.set",s.UserUpdated="v1.user.updated",s.UserLogout="v1.user.logout",s))(d||{});function A(s,e){let r=`https://${s||"demo"}.readyplayer.me`;return e!=null&&e.language&&(r+=`/${e.language}`),r+="/avatar?frameApi",e!=null&&e.clearCache&&(r+="&clearCache"),e!=null&&e.quickStart&&(r+="&quickStart"),e!=null&&e.bodyType&&(r+=`&bodyType=${e==null?void 0:e.bodyType}`),r}const D=(s,e)=>{const r=[];e!=null&&e.quality&&r.push(`quality=${e.quality}`),e!=null&&e.meshLod&&r.push(`meshLod=${e.meshLod}`),e!=null&&e.textureSizeLimit&&r.push(`textureSizeLimit=${e.textureSizeLimit}`),e!=null&&e.textureAtlas&&r.push(`textureAtlas=${e.textureAtlas}`),e!=null&&e.morphTargets&&r.push(`morphTargets=${e.morphTargets.join(",")}`),e!=null&&e.pose&&r.push(`pose=${e.pose}`),e!=null&&e.useHands&&r.push(`useHands=${e.useHands}`),e!=null&&e.textureChannels&&r.push(`textureChannels=${e.textureChannels.join(",")}`),e!=null&&e.useDracoCompression&&r.push(`useDracoCompression=${e.useDracoCompression}`),e!=null&&e.useMeshOptCompression&&r.push(`useMeshOptCompression=${e.useMeshOptCompression}`);const u=r.join("&");return`${s}${u?`?${u}`:""}`};function k(s){try{return JSON.parse(s.data)}catch{return null}}const T={width:"100%",height:"100%",border:"none"},_=({subdomain:s,editorConfig:e,onUserSet:r,onAvatarExported:u})=>{const t=y.useRef(null),p=$=>{var h,n;const l=k($);if((l==null?void 0:l.source)==="readyplayerme")switch(l.eventName){case d.FrameReady:(n=(h=t.current)==null?void 0:h.contentWindow)==null||n.postMessage(JSON.stringify({target:"readyplayerme",type:"subscribe",eventName:"v1.**"}),"*");break;case d.UserSet:r==null||r(l.data.id);break;case d.AvatarExported:u==null||u(l.data.url);break}},c=A(s,e);return y.useEffect(()=>(window.addEventListener("message",p),()=>{window.removeEventListener("message",p)})),R("iframe",{title:"Ready Player Me",ref:t,src:c,style:T,allow:"camera *; clipboard-write"})};try{_.displayName="AvatarCreator",_.__docgenInfo={description:"AvatarCreator is a React component that allows you to create an avatar using Ready Player Me and receive avatar URL.",displayName:"AvatarCreator",props:{subdomain:{defaultValue:null,description:"",name:"subdomain",required:!0,type:{name:"string"}},editorConfig:{defaultValue:null,description:"",name:"editorConfig",required:!1,type:{name:"EditorConfig"}},onUserSet:{defaultValue:null,description:"",name:"onUserSet",required:!1,type:{name:"((id: string) => void)"}},onAvatarExported:{defaultValue:null,description:"",name:"onAvatarExported",required:!1,type:{name:"((url: string) => void)"}}}}}catch{}const o=({children:s})=>R("div",{style:{height:700,width:700,marginLeft:"auto",marginRight:"auto",borderRadius:8,overflow:"hidden"},children:s});try{o.displayName="Container",o.__docgenInfo={description:"",displayName:"Container",props:{}}}catch{}export{_ as A,o as C,U as a,D as b,R as j};
//# sourceMappingURL=container-ebf27660.js.map
