(this["webpackJsonpdavid-jga-frontend"]=this["webpackJsonpdavid-jga-frontend"]||[]).push([[0],{33:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),r=n(22),s=n.n(r),i=(n(33),n(5)),l=(n(34),n(3)),o=n(4),u=n(6),d=n.n(u),j=n(10);function b(){return h.apply(this,arguments)}function h(){return(h=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("localhost"===window.location.hostname?"http://localhost:3000":"","/api/data"));case 2:if(200!==(t=e.sent).status){e.next=5;break}return e.abrupt("return",t.json());case 5:throw console.error("Fetch error: ".concat(t.status," ").concat(t.statusText," ").concat(t.text())),new Error(t.statusText);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(null),s=Object(i.a)(r,2),l=s[0],o=s[1];return{loading:n,error:l,post:Object(c.useCallback)(function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a(!0),e.next=4,fetch("".concat("localhost"===window.location.hostname?"http://localhost:3000":"","/api/quest"),{method:"POST",mode:"no-cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},referrerPolicy:"no-referrer",body:JSON.stringify(t)});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),o(e.t0);case 9:return e.prev=9,a(!1),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,6,9,12]])})));return function(t){return e.apply(this,arguments)}}(),[o,a])}}var O=n(23),x=(n(36),n(1));function p(e){var t,n,a,r,s=e.quest,o=e.onBack,u=e.permission,b=Object(c.useState)({title:"",description:"",maxXp:0,minLevel:0,xp:null,disabled:!1,archived:!1}),h=Object(i.a)(b,2),p=h[0],m=h[1],f=v(),g=f.loading,N=f.error,k=f.post;Object(c.useEffect)((function(){var e,t,n,c;null!=s&&m({title:null!==(e=s.title)&&void 0!==e?e:"",description:null!==(t=s.description)&&void 0!==t?t:"",maxXp:s.maxXp,minLevel:s.minLevel,xp:s.xp,disabled:null!==(n=s.disabled)&&void 0!==n&&n,archived:null!==(c=s.archived)&&void 0!==c&&c})}),[s]);var C=Object(c.useCallback)(Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(Object(l.a)({id:s.id},p));case 2:o();case 3:case"end":return e.stop()}}),e)}))),[o,k,s,p]),w=Object(c.useCallback)(Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k({delete:!0,id:s.id});case 2:o();case 3:case"end":return e.stop()}}),e)}))),[o,k,s]);return Object(x.jsxs)("div",{className:"questDetails",children:[Object(x.jsxs)("div",{className:"backArrowContainer",children:[Object(x.jsx)(O.a,{className:"backArrow",onClick:function(){return o()}}),Object(x.jsx)("div",{className:"value",children:"edit"===u?Object(x.jsx)("input",{value:p.title,onChange:function(e){return m(Object(l.a)(Object(l.a)({},p),{},{title:e.target.value}))}}):null!==(t=s.title)&&void 0!==t?t:"-"})]}),Object(x.jsx)("div",{className:"label",children:"Beschreibung"}),Object(x.jsx)("div",{className:"value",children:"edit"===u?Object(x.jsx)("textarea",{rows:10,value:p.description,onChange:function(e){return m(Object(l.a)(Object(l.a)({},p),{},{description:e.target.value}))}}):null!==(n=s.description)&&void 0!==n?n:"-"}),Object(x.jsx)("div",{className:"label",children:"Mindestens Level"}),Object(x.jsx)("div",{className:"value",children:"edit"===u?Object(x.jsx)("input",{type:"number",value:p.minLevel,onChange:function(e){return m(Object(l.a)(Object(l.a)({},p),{},{minLevel:parseInt(e.target.value,10)}))}}):s.minLevel}),Object(x.jsx)("div",{className:"label",children:"Maximale XP"}),Object(x.jsx)("div",{className:"value",children:"edit"===u?Object(x.jsx)("input",{type:"number",value:p.maxXp,onChange:function(e){return m(Object(l.a)(Object(l.a)({},p),{},{maxXp:parseInt(e.target.value,10)}))}}):s.maxXp}),Object(x.jsx)("div",{className:"label",children:"Erreichte XP"}),Object(x.jsx)("div",{className:"value",children:"edit"===u?Object(x.jsx)("input",{type:"number",value:null!==(a=p.xp)&&void 0!==a?a:"-",onChange:function(e){var t=parseInt(e.target.value,10);m(Object(l.a)(Object(l.a)({},p),{},{xp:t<0?null:t}))}}):"closed"!==s.state?"-":s.xp}),"edit"===u&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"label",children:"Ausblenden"}),Object(x.jsx)("div",{className:"value",children:Object(x.jsx)("input",{type:"checkbox",checked:p.disabled,onChange:function(e){return m(Object(l.a)(Object(l.a)({},p),{},{disabled:e.target.checked}))}})}),Object(x.jsx)("div",{className:"label",children:"Archiviert"}),Object(x.jsx)("div",{className:"value",children:Object(x.jsx)("input",{type:"checkbox",checked:p.archived,onChange:function(e){return m(Object(l.a)(Object(l.a)({},p),{},{archived:e.target.checked}))}})}),Object(x.jsxs)("div",{className:"buttonContainer",children:[Object(x.jsx)("div",{className:"saveContainer",children:Object(x.jsx)("button",{onClick:C,children:"Speichern"})}),s.archived&&Object(x.jsx)("div",{className:"deleteContainer",children:Object(x.jsx)("button",{onClick:w,children:"Quest l\xf6schen"})}),null!==g&&void 0!==g?g:Object(x.jsx)(x.Fragment,{children:"loading..."}),N&&Object(x.jsx)(x.Fragment,{children:JSON.stringify(N)})]}),Object(x.jsx)("h4",{children:"Versionen"}),Object(x.jsx)("div",{className:"versionList",children:null===(r=s.versions)||void 0===r?void 0:r.map((function(e){var t=e.id,n=e.created_at,c=e.fields;return Object(x.jsxs)("div",{className:"versionItem",children:["Version ",t," vom ",new Intl.DateTimeFormat("de").format(new Date(n))," ",n.substring(11,19)," ",Object(x.jsx)("button",{onClick:function(){return m(Object(l.a)(Object(l.a)(Object(l.a)({},p),c),{},{maxXp:c.max_xp,minLevel:c.min_level}))},children:"\ud83d\udd03"})]})}))})]})]})}n(38);function m(e){var t=Object(c.useState)(!0),n=Object(i.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(!1),l=Object(i.a)(s,2),o=l[0],u=l[1],b=Object(c.useState)(null),h=Object(i.a)(b,2),O=h[0],m=h[1],g=v(),N=g.loading,k=g.error,C=g.post;return null!=O?Object(x.jsx)(p,{quest:O,onBack:function(){m(null),e.refetch()},permission:e.permission}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"questList",children:[Object(x.jsxs)("div",{className:"questFilter",children:[Object(x.jsx)("input",{type:"checkbox",checked:a,onChange:function(e){return r(e.target.checked)}}),"Erledigte Quests"]}),"edit"===e.permission&&Object(x.jsxs)("div",{className:"questFilter",children:[Object(x.jsx)("input",{type:"checkbox",checked:o,onChange:function(e){return u(e.target.checked)}}),"Archivierte Quests"]}),e.quests.filter((function(e){var t=e.state;return!0===a||"closed"!==t})).filter((function(e){var t=e.archived;return!0===o||!1===t})).filter((function(t){var n=t.archived,c=t.disabled;return!1===n&&!1===c||"edit"===e.permission})).map((function(t,n){var c;return Object(x.jsxs)("div",{className:"questBox ".concat(t.state," ").concat(t.disabled?"disabled":""," ").concat(t.archived?"archived":""),onClick:function(){return!("none"===e.permission&&"hidden"===t.state)&&m(t)},children:[Object(x.jsxs)("div",{className:"questHeader",children:[Object(x.jsx)("div",{className:"questTitle",children:"none"===e.permission&&"hidden"===t.state||null==t.title?"\ud83d\udd12 ???":"".concat("hidden"===t.state?"\ud83d\udd12 ":"").concat(t.title)}),Object(x.jsxs)("div",{className:"questPoints",children:["closed"!==t.state?t.maxXp:"".concat(t.xp," / ").concat(t.maxXp)," XP"]})]}),!("none"===e.permission&&"hidden"===t.state)&&Object(x.jsx)("div",{className:"questDescription",children:f(null!==(c=t.description)&&void 0!==c?c:"???")}),"hidden"===t.state&&Object(x.jsxs)("div",{className:"questDescription",children:["Ab Level ",t.minLevel]})]},n)}))]}),"edit"===e.permission&&Object(x.jsx)("div",{className:"createQuestContainer",children:Object(x.jsx)("button",{onClick:Object(j.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C({title:"Neue Quest",description:"",maxXp:1,disabled:!0,minLevel:20,archived:!1});case 2:e.refetch();case 3:case"end":return t.stop()}}),t)}))),children:"Neue Quest"})}),N&&"loading ...",k&&Object(x.jsxs)(x.Fragment,{children:["Fehler: ",JSON.stringify(k)]})]})}function f(e){return null==e?"???":e.length<100?e:e.substring(0,96)+" ..."}n(39);function g(e){var t,n,c,a,r,s,i,l,o,u;return Object(x.jsxs)("div",{className:"gameHeader",children:[Object(x.jsx)("div",{className:"gameHeaderTitle",children:"Quest Master"}),Object(x.jsxs)("div",{className:"gameHeaderLevel",children:["Level ",null!==(t=null===(n=e.data)||void 0===n?void 0:n.currentLevel)&&void 0!==t?t:1," / ",null!==(c=null===(a=e.data)||void 0===a?void 0:a.maxLevel)&&void 0!==c?c:"?"]}),Object(x.jsx)(N,{current:null!==(r=null===(s=e.data)||void 0===s?void 0:s.xpWithinCurrentLevel)&&void 0!==r?r:0,max:(null!==(i=null===(l=e.data)||void 0===l?void 0:l.xpToNextLevel)&&void 0!==i?i:0)+(null!==(o=null===(u=e.data)||void 0===u?void 0:u.xpWithinCurrentLevel)&&void 0!==o?o:1)})]})}function N(e){var t=100*e.current/e.max;return Object(x.jsxs)("div",{className:"gameProgressContainer",children:[Object(x.jsx)("div",{className:"gameProgressBar",children:Object(x.jsx)("div",{style:{width:"".concat(t,"%")},className:"gameProgressCurrent",children:Object(x.jsx)("div",{className:"gameProgressCurrentText",children:e.current})})}),e.max,"\u2191"]})}var k=n(12),C=n(26),w=n(25),y=n(27);n(40);function L(e){return Object(x.jsxs)("div",{className:"gameFooter",style:"edit"===e.permission?{gridTemplateColumns:"auto auto auto"}:void 0,children:[Object(x.jsx)(k.b,{to:{pathname:"/quests",search:e.location.search},children:Object(x.jsx)(w.a,{})}),Object(x.jsx)(k.b,{to:{pathname:"/rewards",search:e.location.search},children:Object(x.jsx)(C.a,{})}),"edit"===e.permission&&Object(x.jsx)(k.b,{to:{pathname:"/levels",search:e.location.search},children:Object(x.jsx)(y.a,{})})]})}var S=n(28);n(46);function F(e){var t=Object(c.useState)([]),n=Object(i.a)(t,2),a=n[0],r=n[1];Object(c.useEffect)((function(){r(e.levels.sort((function(e,t){return e.id-t.id})).map((function(e){return e.requiredXp})))}),[e.levels]);var s=Object(c.useCallback)((function(e){e<0||e>=a.length||r(a.filter((function(t,n){return n!==e})))}),[a,r]),l=Object(c.useCallback)((function(e,t){if(!(e<0||e>=a.length||t<0)){var n=a[e-1];if(!(null!=n&&n>=t)){var c=t-a[e];r(a.map((function(t,n){return e<=n?t+c:t})))}}}),[a,r]),o=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(null),s=Object(i.a)(r,2),l=s[0],o=s[1];return{loading:n,error:l,post:Object(c.useCallback)(function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a(!0),e.next=4,fetch("".concat("localhost"===window.location.hostname?"http://localhost:3000":"","/api/levels"),{method:"POST",mode:"no-cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},referrerPolicy:"no-referrer",body:JSON.stringify(t)});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),o(e.t0);case 9:return e.prev=9,a(!1),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,6,9,12]])})));return function(t){return e.apply(this,arguments)}}(),[o,a])}}(),u=o.loading,b=o.error,h=o.post;return Object(x.jsxs)("div",{className:"levels",children:[Object(x.jsx)("b",{children:"Levels"}),a.map((function(e,t){return Object(x.jsxs)("div",{className:"levelsContainer",children:[Object(x.jsx)("div",{className:"levelIndex",children:t+1}),Object(x.jsx)("div",{className:"levelXp",children:Object(x.jsx)("input",{type:"number",value:e,onChange:function(e){return l(t,parseInt(e.target.value,10))}})}),Object(x.jsx)("div",{className:"levelDelete",children:Object(x.jsx)("button",{onClick:function(){return s(t)},children:"L\xf6schen"})})]})})),Object(x.jsx)("button",{className:"levelAdd",onClick:function(){return r([].concat(Object(S.a)(a),[a[a.length-1]+1]))},children:"Neues Level"}),Object(x.jsx)("br",{}),Object(x.jsx)("button",{className:"levelsSave",onClick:function(){return h(a.map((function(e,t){return{id:t+1,requiredXp:e}})))},children:"Speichern"}),u&&Object(x.jsx)(x.Fragment,{children:"loading..."}),b&&Object(x.jsxs)(x.Fragment,{children:["Error: ",JSON.stringify(b)]})]})}function q(e){return Object(x.jsx)(x.Fragment,{children:"Belohnungen: todo"})}n(47);function X(e){var t=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(void 0),s=Object(i.a)(r,2),l=s[0],o=s[1],u=Object(c.useState)(void 0),h=Object(i.a)(u,2),v=h[0],O=h[1],x=Object(c.useCallback)((function(){Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a(!0),e.t0=o,e.next=5,b();case 5:e.t1=e.sent,(0,e.t0)(e.t1),O(void 0),e.next=15;break;case 10:e.prev=10,e.t2=e.catch(0),console.log(e.t2),o(void 0),O("Upps ein Fehler ist aufgetreten.");case 15:return e.prev=15,a(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,10,15,18]])})))()}),[]);return Object(c.useEffect)(x,[x]),{data:l,error:v,loading:n,refetch:x}}(),n=t.data,a=t.error,r=t.loading,s=t.refetch;return Object(x.jsxs)("div",{className:"game",children:[Object(x.jsx)(g,{data:n}),Object(x.jsxs)("div",{className:"gameMain",children:[r&&Object(x.jsx)(x.Fragment,{children:"Laden ..."}),a&&Object(x.jsx)(x.Fragment,{children:"string"===typeof a?a:JSON.stringify(a)}),n&&Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(o.d,{children:[Object(x.jsx)(o.b,{path:"/levels",exact:!0,children:Object(x.jsx)(F,{levels:n.levels})}),Object(x.jsx)(o.b,{path:"/quests",children:Object(x.jsx)(m,{quests:n.quests,permission:e.permission,refetch:s})}),Object(x.jsx)(o.b,{path:"/rewards",children:Object(x.jsx)(q,{permission:e.permission,refetch:s})})]})})]}),Object(x.jsx)(o.b,{path:"/",component:function(t){return Object(x.jsx)(L,Object(l.a)(Object(l.a)({},t),{},{permission:e.permission}))}})]})}function T(){var e=Object(c.useState)(function(){var e=window.location.search;return e.toLowerCase().includes("fitti")?"view":e.toLowerCase().includes("broiler")?"edit":"none"}()),t=Object(i.a)(e,1)[0];return Object(x.jsx)("div",{className:"app",onTouchMove:function(e){return console.log(e)},children:Object(x.jsx)(X,{permission:t})})}var P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsxs)(k.a,{children:[Object(x.jsx)(o.b,{path:"/",exact:!0,component:function(){return Object(x.jsx)(o.a,{to:"/quests"})}}),Object(x.jsx)(T,{})]})}),document.getElementById("root")),P()}},[[48,1,2]]]);
//# sourceMappingURL=main.bbd5ba43.chunk.js.map