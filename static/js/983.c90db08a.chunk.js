"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[983],{6600:function(n,e,t){t.d(e,{Hg:function(){return i},z1:function(){return f}});var r=t(5861),a=t(4687),c=t.n(a),u=t(4569),o=t.n(u);o().defaults.baseURL="https://api.themoviedb.org/3";var s="09ade12554b40345f62518dc503f229d",i=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/trending/movie/day?api_key=".concat(s));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/search/movie/?api_key=".concat(s,"&language=en-US&query=").concat(e,"&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},3225:function(n,e,t){t.d(e,{F:function(){return o}});var r,a=t(168),c=t(9584),u=t(501),o=(0,c.Z)(u.rU)(r||(r=(0,a.Z)(["\n  color: black;\n  font-size: 18px;\n  /* &:not(:last-of-type) {\n    margin-bottom: 30px;\n  } */\n  &:hover,\n  &:focus {\n    transition: all 250ms linear;\n    color: coral;\n  }\n"])))},3983:function(n,e,t){t.r(e);var r=t(5861),a=t(885),c=t(4687),u=t.n(c),o=t(6600),s=t(2791),i=t(7793),f=t(3225),p=t(184);e.default=function(){var n=(0,s.useState)([]),e=(0,a.Z)(n,2),t=e[0],c=e[1],l=(0,s.useState)(!1),v=(0,a.Z)(l,2),d=v[0],h=v[1];return(0,s.useEffect)((function(){var n=function(){var n=(0,r.Z)(u().mark((function n(){var e,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return h(!0),n.prev=1,n.next=4,(0,o.Hg)();case 4:e=n.sent,t=e.data,c(t.results),n.next=11;break;case 9:n.prev=9,n.t0=n.catch(1);case 11:return n.prev=11,h(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,9,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,p.jsxs)("main",{children:[d&&(0,p.jsx)(i.Z,{}),(0,p.jsx)("ul",{children:t.map((function(n){var e=n.id,t=n.title;return(0,p.jsx)("li",{children:(0,p.jsx)(f.F,{to:"/movies/".concat(e),children:t})},e)}))})]})}}}]);
//# sourceMappingURL=983.c90db08a.chunk.js.map