(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{58:function(e,t,n){},59:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(20),i=n.n(r),s=(n(58),n(36)),o=n(5),u=(n(59),n(19)),d=n.n(u),l=n(39),j=n(34),b=n(22),f=n(117),p=n(118),O=n(119),h=n(114),x=n(48),g=n.n(x),m=n(116),v=n(2);var w=function(e){var t=e.classes;return Object(v.jsx)(h.a,{title:"",titlePosition:"top",actionIcon:Object(v.jsx)(m.a,{"aria-label":"",className:t.icon,color:"primary",children:Object(v.jsx)(g.a,{})}),actionPosition:"left"})};var k=function(e){var t=e.image,n=e.editMode,a=Object(c.useState)(t.selected),r=Object(b.a)(a,2),i=r[0],s=r[1];return Object(c.useEffect)((function(){s(t.selected)}),[t.selected]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("img",{onClick:function(){var e;(e=t).selected?(s(!1),e.selected=!1):(s(!0),e.selected=!0)},src:t.picture,alt:t.message}),i&&n&&Object(v.jsx)(w,{classes:!0})]})},C=n(120),S=n(27),y=n.n(S),F=Object(f.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{width:500,height:450},icon:{color:"rgba(255, 255, 255, 0.54)"}}}));var I=function(){var e=F(),t=Object(c.useState)(!1),n=Object(b.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)(!1),s=Object(b.a)(i,2),o=s[0],u=s[1],f=Object(c.useState)({entries:[]}),h=Object(b.a)(f,2),x=h[0],g=h[1];Object(c.useEffect)((function(){(function(){var e=Object(j.a)(d.a.mark((function e(){var t,n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y()("https://dev-pb-apps.s3-eu-west-1.amazonaws.com/collection/CHhASmTpKjaHyAsSaauThRqMMjWanYkQ.json",{});case 2:return t=e.sent,e.next=5,y.a.get("/api/grid");case 5:n=e.sent,(c=n.data)&&c.data&&c.data.length>0&&r(!0),t.data.entries=t.data.entries.map((function(e){return c.data.length>0&&c.data[0].images.includes(e.id)?e.selected=!0:e.selected=!1,e})),g(Object(l.a)(Object(l.a)({},t.data),{},{gridId:c.data[0]._id}));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var m=function(){var e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.post("/api/grid",{images:x.entries.filter((function(e){return e.selected})).map((function(e){return e.id}))});case 2:e.sent.data.success&&u(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.put("/api/grid/".concat(x.gridId),{images:x.entries.filter((function(e){return e.selected})).map((function(e){return e.id}))});case 2:e.sent.data.success&&u(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:e.root,children:[Object(v.jsx)(p.a,{cellHeight:160,className:e.gridList,cols:3,children:(o?x.entries:x.entries.filter((function(e){return e.selected}))).map((function(e){return Object(v.jsx)(O.a,{cols:1,children:Object(v.jsx)(k,{classes:!0,image:e,editMode:o})},e.id)}))}),!o&&!a&&Object(v.jsx)(C.a,{onClick:m,children:"Save"}),o&&a&&Object(v.jsx)(C.a,{onClick:w,children:"Update"}),!o&&Object(v.jsx)(C.a,{onClick:function(){return u(!0)},children:"Edit"})]})};var M=function(){return Object(v.jsx)(s.a,{children:Object(v.jsxs)("div",{children:[Object(v.jsx)("nav",{children:Object(v.jsx)("ul",{children:Object(v.jsx)("li",{children:Object(v.jsx)(s.b,{to:"/",children:"Grid"})})})}),Object(v.jsx)(o.c,{children:Object(v.jsx)(o.a,{path:"/",children:Object(v.jsx)(I,{})})})]})})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,122)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(M,{})}),document.getElementById("root")),E()}},[[95,1,2]]]);
//# sourceMappingURL=main.42180cb1.chunk.js.map