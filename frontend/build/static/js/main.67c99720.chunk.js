(this["webpackJsonpdavid-jga-frontend"]=this["webpackJsonpdavid-jga-frontend"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(18),i=n.n(c),r=(n(24),n(10)),o=n(2),d=(n(25),n(9)),l=n.n(d),u=n(16),h=n(13),j={gameId:"david-jga",gameTitle:"David JGA",totalReachedPoints:12,totalMaxPoints:50,challenges:[{title:"Internatsquiz",description:"David tritt gegen Max an. Jeder darf sich noch einen zweiten Mann w\xe4hlen. Es werden 9 Fragen gestellt. Das Team, dass zuerst auf den Buzzer haut, muss innerhalb von 5 Sekunden die richtige Antwort sagen. Falls diese falsch ist, hat das Gegnerteam noch 10 Sekunden um zu antworten. Wer mehr Punkte hat gewinnt.",maxPoints:1,reachedPoints:1,state:"closed"},{title:"Challenge 2",description:"Lorem ipsum dolor senum.",maxPoints:1,reachedPoints:0,state:"closed"},{title:"Challenge 3",description:"Lorem ipsum dolor senum.",maxPoints:2,reachedPoints:0,state:"open"},{title:"Challenge 4",description:"Lorem ipsum dolor senum.",maxPoints:1,reachedPoints:0,state:"closed"}]};function m(e){return g.apply(this,arguments)}function g(){return(g=Object(h.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.resolve(j));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(27);var b=n(1);function v(e){return Object(b.jsx)("div",{className:"challengeList",children:e.challenges.map((function(e){return Object(b.jsxs)("div",{className:"challengeBox ".concat(e.state),children:[Object(b.jsxs)("div",{className:"challengeHeader",children:[Object(b.jsx)("div",{className:"challengeTitle",children:e.title}),Object(b.jsxs)("div",{className:"challengePoints",children:[e.reachedPoints," / ",e.maxPoints]})]}),Object(b.jsx)("div",{className:"challengeDescription",children:e.description})]})}))})}n(29);function x(e){return Object(b.jsxs)("div",{className:"gameHeader",children:[Object(b.jsx)("div",{className:"gameHeaderTitle",children:e.data.gameTitle}),Object(b.jsxs)("div",{className:"gameHeaderPoints",children:[e.data.totalReachedPoints," / ",e.data.totalMaxPoints]})]})}function p(e){var t,n=function(e){var t=Object(a.useState)(void 0),n=Object(u.a)(t,2),s=n[0],c=n[1],i=Object(a.useState)(void 0),r=Object(u.a)(i,2),o=r[0],d=r[1];return Object(a.useEffect)((function(){null==e?(c(void 0),d(new Error("GameId Not Given"))):Object(h.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.t0=c,t.next=4,m(e);case 4:t.t1=t.sent,(0,t.t0)(t.t1),d(void 0),t.next=13;break;case 9:t.prev=9,t.t2=t.catch(0),c(void 0),d(t.t2);case 13:case"end":return t.stop()}}),t,null,[[0,9]])})))()}),[e]),{data:s,error:o}}(null===(t=e.match)||void 0===t?void 0:t.params.gameId),s=n.data,c=n.error;return c?Object(b.jsxs)(b.Fragment,{children:["Error: ",c]}):null==s?Object(b.jsx)(b.Fragment,{children:"No Data Found"}):Object(b.jsxs)("div",{className:"Game",children:[Object(b.jsx)(x,{data:s}),Object(b.jsx)(v,{challenges:s.challenges})]})}function f(e){return Object(b.jsxs)("div",{className:"Lobby",children:["Create Game Now",Object(b.jsx)("br",{}),Object(b.jsx)(r.b,{to:"/game/david-jga",children:"Go to David JGA"})]})}var O=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(r.a,{children:[Object(b.jsx)(o.a,{path:"/",exact:!0,component:f}),Object(b.jsx)(o.a,{path:"/game/:gameId",component:p})]})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),P()}},[[35,1,2]]]);
//# sourceMappingURL=main.67c99720.chunk.js.map