(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var c=t(1),i=t.n(c),s=t(8),a=t.n(s),r=(t(13),t(7)),o=t(5),u=t(6),l=(t(14),t(0)),d=function(e){var n=e.src,t=e.name,c=e.click,i=e.flip;return Object(l.jsx)("div",{className:"oneCard ".concat(i?"flipped":null),onClick:c,children:Object(l.jsxs)("div",{className:"inner",children:[Object(l.jsx)("div",{className:"front",children:Object(l.jsx)("img",{src:n,alt:t,width:100})}),Object(l.jsx)("div",{className:"back"})]})})};var j=function(){var e=[{id:1,name:"photo1",src:"images/img1.png"},{id:2,name:"photo2",src:"images/img2.jpg"},{id:3,name:"photo3",src:"images/img3.jpg"},{id:4,name:"photo4",src:"images/img4.png"}],n=[].concat(e,e),t=Object(c.useState)([]),i=Object(u.a)(t,2),s=i[0],a=i[1],j=Object(c.useState)([]),b=Object(u.a)(j,2),m=b[0],p=b[1];Object(c.useEffect)((function(){if(!(s<2)){var e=n[s[0]],t=n[s[1]];t&&e.id===t.id&&p((function(n){return[].concat(Object(o.a)(n),[e.id])})),console.log(m),2===s.length&&setTimeout((function(){return a([])}),1e3)}}),[s]);var f=n.map((function(e,n){var t=!1;return s.includes(n)&&(t=!0),m.includes(e.id)&&(t=!0),Object(l.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{click:function(){return e=n,void a((function(n){return[].concat(Object(o.a)(n),[e])}));var e},flip:t}),n)}));return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("div",{className:"table",children:f}),m.includes(1)&&m.includes(2)&&m.includes(3)&&m.includes(4)?Object(l.jsx)("button",{className:"resetButton",onClick:function(){p([]),a([])},children:"Reset"}):null]})},b=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,s=n.getLCP,a=n.getTTFB;t(e),c(e),i(e),s(e),a(e)}))};a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root")),b()}},[[16,1,2]]]);
//# sourceMappingURL=main.a8ff2941.chunk.js.map