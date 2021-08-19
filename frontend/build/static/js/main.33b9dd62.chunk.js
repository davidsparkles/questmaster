(this["webpackJsonpdavid-jga-frontend"]=this["webpackJsonpdavid-jga-frontend"]||[]).push([[0],{49:function(e,t,n){},51:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var c,r=n(2),a=n.n(r),s=n(10),i=n(27),o=n.n(i),l=n(20),u=n(8),d=n(24),j=n(3),b=n(17),h=n.n(b),v=Object(j.d)({name:"permission",initialState:{token:"",permission:"none"},reducers:{changeToken:function(e,t){var n=t.payload;switch(e.token=n,h.a.get("token")!==n&&h.a.set("token",n,{sameSite:"lax",expires:30}),n){case"broiler":e.permission="edit";break;case"fittie":e.permission="view";break;default:e.permission="none"}}}}),O=v.actions.changeToken,p=function(e){return e.permission.token},f=function(e){return e.permission.permission},x=v.reducer,m=n(13),g=n(22),k=Object(g.a)({reducerPath:"rewardsApi",baseQuery:Object(m.d)({baseUrl:"/api/"}),endpoints:function(e){return{getRewards:e.query({query:function(){return"rewards"}})}}}),N=k.useGetRewardsQuery,C=Object(g.a)({reducerPath:"questApi",baseQuery:Object(m.d)({baseUrl:"/api/"}),endpoints:function(e){return{getQuest:e.query({query:function(e){return"quests/".concat(e)}})}}}),S=C.useGetQuestQuery,w=Object(j.a)({reducer:(c={permission:x},Object(d.a)(c,k.reducerPath,k.reducer),Object(d.a)(c,C.reducerPath,C.reducer),c),middleware:function(e){return e().concat(k.middleware).concat(C.middleware)}});Object(m.e)(w.dispatch);var y=n(4),L=n.n(y),P=n(5),T=n(9);function q(e){return F.apply(this,arguments)}function F(){return(F=Object(T.a)(L.a.mark((function e(t){var n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(null!==t&&void 0!==t?t:"/api/data");case 2:if(200!==(n=e.sent).status){e.next=5;break}return e.abrupt("return",n.json());case 5:throw console.error("Fetch error: ".concat(n.status," ").concat(n.statusText," ").concat(n.text())),new Error(n.statusText);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(49);var E=n(1);function A(e){var t,n,c,r,a,s,i,o,l,u;return Object(E.jsxs)("div",{className:"gameHeader",children:[Object(E.jsx)("div",{className:"gameHeaderTitle",children:"Quest Master"}),Object(E.jsxs)("div",{className:"gameHeaderLevel",children:["Level ",null!==(t=null===(n=e.data)||void 0===n?void 0:n.currentLevel)&&void 0!==t?t:1," / ",null!==(c=null===(r=e.data)||void 0===r?void 0:r.maxLevel)&&void 0!==c?c:"?"]}),Object(E.jsx)(Q,{current:null!==(a=null===(s=e.data)||void 0===s?void 0:s.xpWithinCurrentLevel)&&void 0!==a?a:0,max:(null!==(i=null===(o=e.data)||void 0===o?void 0:o.xpToNextLevel)&&void 0!==i?i:0)+(null!==(l=null===(u=e.data)||void 0===u?void 0:u.xpWithinCurrentLevel)&&void 0!==l?l:1)})]})}function Q(e){var t=100*e.current/e.max;return Object(E.jsxs)("div",{className:"gameProgressContainer",children:[Object(E.jsx)("div",{className:"gameProgressBar",children:Object(E.jsx)("div",{style:{width:"".concat(t,"%")},className:"gameProgressCurrent",children:Object(E.jsx)("div",{className:"gameProgressCurrentText",children:e.current})})}),e.max,"\u2191"]})}var X=n(33),B=n(34),J=n(35),U=function(){return Object(s.d)()},D=s.e;n(51);function M(e){var t=D(f);return Object(E.jsxs)("div",{className:"gameFooter",style:"edit"===t?{gridTemplateColumns:"auto auto auto auto"}:void 0,children:[Object(E.jsx)(l.b,{to:{pathname:"/quests",search:e.location.search},children:Object(E.jsx)(B.a,{})}),Object(E.jsx)(l.b,{to:{pathname:"/rewards",search:e.location.search},children:Object(E.jsx)(X.b,{})}),"edit"===t&&Object(E.jsx)(l.b,{to:{pathname:"/levels",search:e.location.search},children:Object(E.jsx)(J.a,{})}),Object(E.jsx)(l.b,{to:{pathname:"/settings",search:e.location.search},children:Object(E.jsx)(X.a,{})})]})}var I={post:function(e,t){return fetch(e,{credentials:"omit",headers:{"content-type":"application/json;charset=UTF-8","sec-fetch-mode":"cors"},body:JSON.stringify(t),method:"POST",mode:"cors"}).then((function(e){return e.json()})).then((function(e){return e}))},get:function(e){return fetch(e,{credentials:"omit",headers:{"content-type":"application/json;charset=UTF-8","sec-fetch-mode":"cors"},method:"GET",mode:"cors"}).then((function(e){return e.json()})).then((function(e){return e}))}},H="BDTxsv_QJLLjMkKfKrZw9kLADmciH2_E1B4Smkp9kbOLHWlrNs_3jFZA3zCyYbw9GRKq5hoEhkcHiBMf8OiGKDQ";function W(){return(W=Object(T.a)(L.a.mark((function e(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Notification.requestPermission();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function K(){return(K=Object(T.a)(L.a.mark((function e(){var t;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.serviceWorker.ready;case 2:return t=e.sent,e.next=5,t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:H});case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var _="serviceWorker"in navigator&&"PushManager"in window;function G(){var e=Object(r.useState)(Notification.permission),t=Object(P.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(null),s=Object(P.a)(a,2),i=s[0],o=s[1],l=Object(r.useState)(),u=Object(P.a)(l,2),d=u[0],j=u[1],b=Object(r.useState)(null),h=Object(P.a)(b,2),v=h[0],O=h[1],p=Object(r.useState)(!0),f=Object(P.a)(p,2),x=f[0],m=f[1];return Object(r.useEffect)((function(){_&&(m(!0),O(!1),navigator.serviceWorker.register("/sw.js").then((function(){m(!1)})))}),[]),Object(r.useEffect)((function(){m(!0),O(!1),function(){var e=Object(T.a)(L.a.mark((function e(){var t;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.serviceWorker.ready.then((function(e){return e.pushManager.getSubscription()})).then((function(e){return e}));case 2:t=e.sent,o(t),m(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),{onClickAskUserPermission:Object(r.useCallback)((function(){return m(!0),O(!1),function(){return W.apply(this,arguments)}().then((function(e){c(e),"granted"!==e&&O({name:"Consent denied",message:"You denied the consent to receive notifications",code:0}),m(!1)}))}),[m,O,c]),onClickSusbribeToPushNotification:Object(r.useCallback)((function(){return m(!0),O(!1),function(){return K.apply(this,arguments)}().then((function(e){o(e),m(!1)})).catch((function(e){console.error("Couldn't create the notification subscription",e,"name:",e.name,"message:",e.message,"code:",e.code),O(e),m(!1)}))}),[m,O,o]),onClickSendSubscriptionToPushServer:Object(r.useCallback)((function(){null!=i&&"granted"===n?(m(!0),O(!1),I.post("/api/subscription",i).then((function(e){j(e.id),m(!1)})).catch((function(e){m(!1),O(e)}))):console.log("No userSubscription present or consent not given")}),[i,n,m,O,j]),pushServerSubscriptionId:d,onClickSendNotification:Object(r.useCallback)(function(){var e=Object(T.a)(L.a.mark((function e(t){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),O(!1),e.next=4,I.post("/api/custom-subscription",t).catch((function(e){m(!1),O(e)}));case 4:m(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[m,O]),userConsent:n,pushNotificationSupported:_,userSubscription:i,error:v,loading:x}}function R(){var e=Object(r.useState)(!1),t=Object(P.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(null),s=Object(P.a)(a,2),i=s[0],o=s[1];return{loading:n,error:i,post:Object(r.useCallback)(function(){var e=Object(T.a)(L.a.mark((function e(t){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c(!0),e.next=4,fetch("".concat("localhost"===window.location.hostname?"http://localhost:3000":"","/api/quest"),{method:"POST",mode:"no-cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},referrerPolicy:"no-referrer",body:JSON.stringify(t)});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),o(e.t0);case 9:return e.prev=9,c(!1),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,6,9,12]])})));return function(t){return e.apply(this,arguments)}}(),[o,c])}}n(54);function V(e){var t=D(f),n=Object(r.useState)(null==h.a.get("filterList")||"true"===h.a.get("filterList")),c=Object(P.a)(n,2),a=c[0],s=c[1],i=Object(r.useState)(null!=h.a.get("filterArchivedList")&&"true"===h.a.get("filterArchivedList")),o=Object(P.a)(i,2),l=o[0],d=o[1],j=R(),b=j.loading,v=j.error,O=j.post,p=Object(u.g)();return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)("div",{className:"questList",children:[Object(E.jsxs)("div",{className:"questFilter",children:[Object(E.jsx)("input",{type:"checkbox",checked:a,onChange:function(e){s(e.target.checked),h.a.set("filterList","".concat(e.target.checked))}}),"Erledigte Quests"]}),"edit"===t&&Object(E.jsxs)("div",{className:"questFilter",children:[Object(E.jsx)("input",{type:"checkbox",checked:l,onChange:function(e){d(e.target.checked),h.a.set("filterArchivedList","".concat(e.target.checked))}}),"Archivierte Quests"]}),e.quests.filter((function(e){var t=e.state;return!0===a||"closed"!==t})).filter((function(e){var t=e.archived;return!0===l||!1===t})).filter((function(e){var n=e.archived,c=e.disabled;return!1===n&&!1===c||"edit"===t})).map((function(e,n){var c;return Object(E.jsxs)("div",{className:"questBox ".concat(e.state," ").concat(e.disabled?"disabled":""," ").concat(e.archived?"archived":""),onClick:function(){"none"===t&&"hidden"===e.state||p.push("/quests/".concat(e.id))},children:[Object(E.jsxs)("div",{className:"questHeader",children:[Object(E.jsxs)("div",{className:"questTitle",children:["none"===t&&"hidden"===e.state||null==e.title?"\ud83d\udd12 ???":"".concat("hidden"===e.state?"\ud83d\udd12 ":"").concat(e.title),"edit"===t&&Object(E.jsxs)(E.Fragment,{children:[" (",e.id,")"]})]}),Object(E.jsxs)("div",{className:"questPoints",children:["closed"!==e.state?e.maxXp:"".concat(e.xp," / ").concat(e.maxXp)," XP"]})]}),!("none"===t&&"hidden"===e.state)&&Object(E.jsx)("div",{className:"questDescription",children:z(null!==(c=e.description)&&void 0!==c?c:"???")}),"hidden"===e.state&&Object(E.jsxs)("div",{className:"questDescription",children:["Ab Level ",e.minLevel]})]},n)}))]}),"edit"===t&&Object(E.jsx)("div",{className:"createQuestContainer",children:Object(E.jsx)("button",{onClick:Object(T.a)(L.a.mark((function t(){return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O({title:"Neue Quest",description:"",maxXp:1,disabled:!0,minLevel:20,archived:!1});case 2:e.refetch();case 3:case"end":return t.stop()}}),t)}))),children:"+ Neue Quest"})}),b&&"loading ...",v&&Object(E.jsxs)(E.Fragment,{children:["Fehler: ",JSON.stringify(v)]})]})}function z(e){return null==e?"???":e.length<100?e:e.substring(0,96)+" ..."}var Y=n(39);n(55);function Z(e){var t=Object(r.useState)([]),n=Object(P.a)(t,2),c=n[0],a=n[1];Object(r.useEffect)((function(){a(e.levels.sort((function(e,t){return e.id-t.id})).map((function(e){return e.requiredXp})))}),[e.levels]);var s=Object(r.useCallback)((function(e){e<0||e>=c.length||a(c.filter((function(t,n){return n!==e})))}),[c,a]),i=Object(r.useCallback)((function(e,t){if(!(e<0||e>=c.length||t<0)){var n=c[e-1];if(!(null!=n&&n>=t)){var r=t-c[e];a(c.map((function(t,n){return e<=n?t+r:t})))}}}),[c,a]),o=function(){var e=Object(r.useState)(!1),t=Object(P.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(null),s=Object(P.a)(a,2),i=s[0],o=s[1];return{loading:n,error:i,post:Object(r.useCallback)(function(){var e=Object(T.a)(L.a.mark((function e(t){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c(!0),e.next=4,fetch("".concat("localhost"===window.location.hostname?"http://localhost:3000":"","/api/levels"),{method:"POST",mode:"no-cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},referrerPolicy:"no-referrer",body:JSON.stringify(t)});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),o(e.t0);case 9:return e.prev=9,c(!1),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,6,9,12]])})));return function(t){return e.apply(this,arguments)}}(),[o,c])}}(),l=o.loading,u=o.error,d=o.post;return Object(E.jsxs)("div",{className:"levels-page",children:[Object(E.jsx)("h2",{children:"Levels"}),c.map((function(e,t){return Object(E.jsxs)("div",{className:"level-container",children:[Object(E.jsx)("div",{className:"level-index",children:t+1}),Object(E.jsx)("div",{className:"level-xp",children:Object(E.jsx)("input",{type:"number",value:e,onChange:function(e){return i(t,parseInt(e.target.value,10))}})}),Object(E.jsx)("div",{className:"level-delete",children:Object(E.jsx)("button",{onClick:function(){return s(t)},children:"L\xf6schen"})})]},t)})),Object(E.jsx)("button",{className:"level-add",onClick:function(){return a([].concat(Object(Y.a)(c),[c[c.length-1]+1]))},children:"Neues Level"}),Object(E.jsx)("br",{}),Object(E.jsx)("button",{className:"levels-save",onClick:function(){return d(c.map((function(e,t){return{id:t+1,requiredXp:e}})))},children:"Speichern"}),l&&Object(E.jsx)(E.Fragment,{children:"loading..."}),u&&Object(E.jsxs)(E.Fragment,{children:["Error: ",JSON.stringify(u)]})]})}n(56);function $(e){var t=Object(r.useState)(""),n=Object(P.a)(t,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){var e=setTimeout((function(){a(c.length>=3?"":c+".")}),1e3);return function(){return clearTimeout(e)}}),[c,a]),Object(E.jsxs)("div",{className:"loading-component",children:["Laden ",c]})}n(57);function ee(e){var t;return Object(E.jsx)("div",{className:"no-data",children:null!==(t=e.text)&&void 0!==t?t:"Keine Daten gefunden"})}n(58);function te(e){var t=Object(s.e)(f),n=N(void 0),c=n.data,r=n.error,a=n.isLoading;return Object(E.jsxs)("div",{className:"rewards",children:[Object(E.jsx)("h2",{children:"Belohnungen"}),a&&Object(E.jsx)($,{}),r&&Object(E.jsx)("span",{className:"error",children:JSON.stringify(r)}),null!=c&&c.length>0?Object(E.jsx)("ul",{className:"rewards-list",children:null===c||void 0===c?void 0:c.map((function(e,n){return Object(E.jsxs)("li",{className:"reward-item ".concat(!0===e.disabled?"disabled":"enabled"," ").concat(!0===e.locked?"locked":"unlocked"),children:[Object(E.jsxs)("div",{className:"title",children:[e.title,"edit"===t&&Object(E.jsxs)(E.Fragment,{children:[" (",e.id,")"]})]}),Object(E.jsx)("div",{className:"description",children:e.description}),Object(E.jsxs)("div",{className:"min-level",children:["Ab Level ",e.minLevel]})]},n)}))}):Object(E.jsx)(ee,{})]})}var ne=n(36),ce=n(37);n(59);function re(e){var t=D(p),n=D(f),c=U(),a=Object(r.useState)(""),s=Object(P.a)(a,2),i=s[0],o=s[1],l=Object(r.useState)(""),u=Object(P.a)(l,2),d=u[0],j=u[1],b=Object(r.useState)("/quests"),h=Object(P.a)(b,2),v=h[0],x=h[1];return Object(E.jsxs)("div",{className:"settings",children:[Object(E.jsx)("h2",{children:"Einstellungen"}),Object(E.jsxs)("div",{className:"push",children:[Object(E.jsx)("h3",{children:"Push-Benachrichtigungen"}),Object(E.jsx)("input",{className:"push-permission",type:"checkbox",checked:"granted"===e.userConsent,onChange:Object(T.a)(L.a.mark((function t(){return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.onClickAskUserPermission();case 2:return t.next=4,e.onClickSusbribeToPushNotification();case 4:case"end":return t.stop()}}),t)})))}),"Benachrichtigungen erlauben",Object(E.jsx)(ae,{error:e.error}),"edit"===n&&Object(E.jsxs)("div",{className:"push-form",children:[Object(E.jsx)("h4",{className:"form-title",children:"Benutzerdefinierte Benachrichtigung"}),Object(E.jsx)("div",{className:"label",children:"Titel"}),Object(E.jsx)("div",{className:"value",children:Object(E.jsx)("input",{value:i,onChange:function(e){var t;return o(null!==(t=e.target.value)&&void 0!==t?t:"")}})}),Object(E.jsx)("div",{className:"label",children:"Text"}),Object(E.jsx)("div",{className:"value",children:Object(E.jsx)("input",{value:d,onChange:function(e){var t;return j(null!==(t=e.target.value)&&void 0!==t?t:"")}})}),Object(E.jsx)("div",{className:"label",children:"Url"}),Object(E.jsx)("div",{className:"value",children:Object(E.jsx)("input",{value:v,onChange:function(e){var t;return x(null!==(t=e.target.value)&&void 0!==t?t:"")}})}),Object(E.jsx)("div",{className:"submit",children:Object(E.jsxs)("button",{onClick:function(){return e.onClickSendNotification({title:i,text:d,url:v})},children:["Senden ",Object(E.jsx)(ne.a,{})," ",e.loading&&Object(E.jsx)(ce.a,{})]})})]})]}),Object(E.jsxs)("div",{className:"permission",children:[Object(E.jsx)("h3",{children:"Berechtigung"}),Object(E.jsxs)("span",{children:["Rolle: ",n]}),Object(E.jsxs)("div",{className:"token",children:["Token: ",Object(E.jsx)("input",{value:t,onChange:function(e){return c(O(e.target.value))}})]})]})]})}var ae=function(e){var t=e.error;return t?Object(E.jsxs)("section",{className:"app-error",children:[Object(E.jsx)("h2",{children:t.name}),Object(E.jsxs)("p",{children:["Error message : ",t.message]}),Object(E.jsxs)("p",{children:["Error code : ",t.code]})]}):null},se=(n(60),n(11)),ie=n(38);function oe(e){return Object(E.jsxs)("div",{className:"error",children:["Fehler: ","object"===typeof e.error?JSON.stringify(e.error):e.error]})}n(61);var le=function(){return console.log("go back")};function ue(e){var t,n,c,a,s=Object(u.h)().id,i=Object(u.g)(),o=S(s),l=o.data,d=o.error,j=o.isLoading,b=D(f),h=Object(r.useState)({title:"",description:"",maxXp:0,minLevel:0,xp:null,disabled:!1,archived:!1}),v=Object(P.a)(h,2),O=v[0],p=v[1],x=R(),m=x.loading,g=x.error,k=x.post;Object(r.useEffect)((function(){var e,t,n,c;null!=l&&p({title:null!==(e=l.title)&&void 0!==e?e:"",description:null!==(t=l.description)&&void 0!==t?t:"",maxXp:l.maxXp,minLevel:l.minLevel,xp:l.xp,disabled:null!==(n=l.disabled)&&void 0!==n&&n,archived:null!==(c=l.archived)&&void 0!==c&&c})}),[l]);var N=Object(r.useCallback)(Object(T.a)(L.a.mark((function e(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==l){e.next=4;break}return e.next=3,k(Object(se.a)({id:l.id},O));case 3:le();case 4:case"end":return e.stop()}}),e)}))),[k,l,O]),C=Object(r.useCallback)(Object(T.a)(L.a.mark((function e(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==l){e.next=4;break}return e.next=3,k({delete:!0,id:l.id});case 3:le();case 4:case"end":return e.stop()}}),e)}))),[k,l]);return null==l?Object(E.jsx)(ee,{}):j?Object(E.jsx)($,{}):d?Object(E.jsx)(oe,{error:d}):Object(E.jsxs)("div",{className:"questDetails",children:[Object(E.jsxs)("div",{className:"backArrowContainer",children:[Object(E.jsx)(ie.a,{className:"backArrow",onClick:function(){return i.push("/quests")}}),Object(E.jsx)("div",{className:"value",children:"edit"===b?Object(E.jsx)("input",{value:O.title,onChange:function(e){return p(Object(se.a)(Object(se.a)({},O),{},{title:e.target.value}))}}):null!==(t=l.title)&&void 0!==t?t:"-"})]}),Object(E.jsx)("div",{className:"label",children:"Beschreibung"}),Object(E.jsx)("div",{className:"value",children:"edit"===b?Object(E.jsx)("textarea",{rows:10,value:O.description,onChange:function(e){return p(Object(se.a)(Object(se.a)({},O),{},{description:e.target.value}))}}):null!==(n=l.description)&&void 0!==n?n:"-"}),Object(E.jsx)("div",{className:"label",children:"Mindestens Level"}),Object(E.jsx)("div",{className:"value",children:"edit"===b?Object(E.jsx)("input",{type:"number",value:O.minLevel,onChange:function(e){return p(Object(se.a)(Object(se.a)({},O),{},{minLevel:parseInt(e.target.value,10)}))}}):l.minLevel}),Object(E.jsx)("div",{className:"label",children:"Maximale XP"}),Object(E.jsx)("div",{className:"value",children:"edit"===b?Object(E.jsx)("input",{type:"number",value:O.maxXp,onChange:function(e){return p(Object(se.a)(Object(se.a)({},O),{},{maxXp:parseInt(e.target.value,10)}))}}):l.maxXp}),Object(E.jsx)("div",{className:"label",children:"Erreichte XP"}),Object(E.jsx)("div",{className:"value",children:"edit"===b?Object(E.jsx)("input",{type:"number",value:null!==(c=O.xp)&&void 0!==c?c:"-",onChange:function(e){var t=parseInt(e.target.value,10);p(Object(se.a)(Object(se.a)({},O),{},{xp:t<0?null:t}))}}):"closed"!==l.state?"-":l.xp}),"edit"===b&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("div",{className:"label",children:"Versteckt"}),Object(E.jsx)("div",{className:"value",children:Object(E.jsx)("input",{type:"checkbox",checked:O.disabled,onChange:function(e){return p(Object(se.a)(Object(se.a)({},O),{},{disabled:e.target.checked}))}})}),Object(E.jsx)("div",{className:"label",children:"Archiviert"}),Object(E.jsx)("div",{className:"value",children:Object(E.jsx)("input",{type:"checkbox",checked:O.archived,onChange:function(e){return p(Object(se.a)(Object(se.a)({},O),{},{archived:e.target.checked}))}})}),Object(E.jsxs)("div",{className:"buttonContainer",children:[Object(E.jsx)("div",{className:"saveContainer",children:Object(E.jsx)("button",{onClick:N,children:"Speichern"})}),l.archived&&Object(E.jsx)("div",{className:"deleteContainer",children:Object(E.jsx)("button",{onClick:C,children:"Quest l\xf6schen"})}),null!==m&&void 0!==m?m:Object(E.jsx)(E.Fragment,{children:"loading..."}),g&&Object(E.jsx)(E.Fragment,{children:JSON.stringify(g)})]}),Object(E.jsx)("h4",{children:"Versionen"}),Object(E.jsx)("div",{className:"versionList",children:null===(a=l.versions)||void 0===a?void 0:a.map((function(e){var t=e.id,n=e.created_at,c=e.fields;return Object(E.jsxs)("div",{className:"versionItem",children:["Version ",t," vom ",new Intl.DateTimeFormat("de").format(new Date(n))," ",n.substring(11,19)," ",Object(E.jsx)("button",{onClick:function(){return p(Object(se.a)(Object(se.a)(Object(se.a)({},O),c),{},{maxXp:c.max_xp,minLevel:c.min_level}))},children:"\ud83d\udd03"})]})}))})]})]})}function de(e){var t=function(e){var t=Object(r.useState)(!1),n=Object(P.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)(void 0),i=Object(P.a)(s,2),o=i[0],l=i[1],u=Object(r.useState)(void 0),d=Object(P.a)(u,2),j=d[0],b=d[1],h=Object(r.useCallback)((function(){Object(T.a)(L.a.mark((function t(){return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a(!0),t.t0=l,t.next=5,q(e);case 5:t.t1=t.sent,(0,t.t0)(t.t1),b(void 0),t.next=15;break;case 10:t.prev=10,t.t2=t.catch(0),console.log(t.t2),l(void 0),b("Upps ein Fehler ist aufgetreten.");case 15:return t.prev=15,a(!1),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[0,10,15,18]])})))()}),[e]);return Object(r.useEffect)(h,[h]),{data:o,error:j,loading:c,refetch:h}}(),n=t.data,c=t.error,a=t.loading,s=t.refetch,i=G(),o=i.userConsent,l=i.userSubscription,d=i.onClickAskUserPermission,j=i.onClickSusbribeToPushNotification,b=i.onClickSendSubscriptionToPushServer,h=i.onClickSendNotification,v=i.loading,O=i.error;return Object(r.useEffect)((function(){console.log("update push subscription"),"granted"===o&&null!=l&&b()}),[o,l,b]),Object(E.jsxs)("div",{className:"game",children:[Object(E.jsx)(A,{data:n}),Object(E.jsxs)("div",{className:"game-main",children:[a&&Object(E.jsx)(E.Fragment,{children:"Laden ..."}),c&&Object(E.jsx)(E.Fragment,{children:"string"===typeof c?c:JSON.stringify(c)}),n&&Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)(u.d,{children:[Object(E.jsx)(u.b,{path:"/levels",exact:!0,children:Object(E.jsx)(Z,{levels:n.levels})}),Object(E.jsx)(u.b,{path:"/quests",exact:!0,children:Object(E.jsx)(V,{quests:n.quests,refetch:s})}),Object(E.jsx)(u.b,{path:"/quests/:id",exact:!0,children:Object(E.jsx)(ue,{})}),Object(E.jsx)(u.b,{path:"/rewards",children:Object(E.jsx)(te,{refetch:s})}),Object(E.jsx)(u.b,{path:"/settings",children:Object(E.jsx)(re,{userConsent:o,onClickAskUserPermission:d,onClickSusbribeToPushNotification:j,onClickSendNotification:h,loading:v,error:O})})]})})]}),Object(E.jsx)(u.b,{path:"/",component:M})]})}n(62);function je(){var e=U();return Object(r.useEffect)((function(){var t=function(){try{var e,t=null!==(e=new URLSearchParams(window.location.search).get("token"))&&void 0!==e?e:h.a.get("token");return null!==t&&void 0!==t?t:void 0}catch(n){return void console.warn("Error loading the permission token from url or cookie: ",JSON.stringify(n))}}();null!=t&&e(O(t))}),[e]),Object(E.jsx)("div",{className:"app",onTouchMove:function(e){return console.log(e)},children:Object(E.jsx)(de,{})})}var be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};o.a.render(Object(E.jsx)(a.a.StrictMode,{children:Object(E.jsx)(s.a,{store:w,children:Object(E.jsxs)(l.a,{children:[Object(E.jsx)(u.b,{path:"/",exact:!0,component:function(){return Object(E.jsx)(u.a,{to:"/quests"})}}),Object(E.jsx)(je,{})]})})}),document.getElementById("root")),be()}},[[63,1,2]]]);
//# sourceMappingURL=main.33b9dd62.chunk.js.map