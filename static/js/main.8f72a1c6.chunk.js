(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),s=n(11),r=n.n(s),i=(n(16),n(17),n(3)),o=n.n(i),l=n(5),j=n(4),h=(n(19),n(0));var b=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],s=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://portfolio-back-heroku.herokuapp.com/api/logo/getLogo");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a(n.logo);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){s()}),[]),Object(h.jsxs)("header",{className:"pos-f-t nav-container",children:[Object(h.jsxs)("nav",{className:"navbar navbar-dark ",children:[Object(h.jsx)("img",{className:"img-item",src:n,alt:"Logo Duvan Villadiego"}),Object(h.jsxs)("div",{className:"inverter-none",children:[Object(h.jsx)("a",{onClick:void 0,href:"/#",children:Object(h.jsx)("h4",{className:"collapse-options text-white",children:"Home"})}),Object(h.jsx)("a",{onClick:void 0,href:"/#",children:Object(h.jsx)("h4",{className:"collapse-options text-white",children:"Proyectos"})}),Object(h.jsx)("a",{onClick:void 0,href:"/#",children:Object(h.jsx)("h4",{className:"collapse-options text-white",children:"Destacados"})}),Object(h.jsx)("a",{onClick:void 0,href:"/#",children:Object(h.jsx)("h4",{className:"collapse-options text-white",children:"Contactame"})})]}),Object(h.jsx)("button",{className:"navbar-toggler no-border set-none",type:"button","data-toggle":"collapse","data-target":"#navbarToggleExternalContent","aria-controls":"navbarToggleExternalContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(h.jsx)("span",{className:"navbar-toggler-icon"})})]}),Object(h.jsx)("div",{className:"collapse",id:"navbarToggleExternalContent",children:Object(h.jsxs)("div",{className:"collapse-container ",children:[Object(h.jsx)("a",{onClick:void 0,href:"/#",children:Object(h.jsx)("h4",{className:"collapse-options text-white",children:"Home"})}),Object(h.jsx)("a",{onClick:void 0,href:"/#",children:Object(h.jsx)("h4",{className:"collapse-options text-white",children:"Proyectos"})}),Object(h.jsx)("a",{onClick:void 0,href:"/#",children:Object(h.jsx)("h4",{className:"collapse-options text-white",children:"Destacados"})}),Object(h.jsx)("a",{onClick:void 0,href:"/#",children:Object(h.jsx)("h4",{className:"collapse-options text-white",children:"Contactame"})})]})})]})},u=n(6),d=n(8);n(26);var x=function(){var e=Object(c.useState)(),t=Object(j.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(j.a)(s,2),i=r[0],b=r[1],x=Object(c.useState)(""),f=Object(j.a)(x,2),O=f[0],m=f[1],p=Object(c.useState)([]),v=Object(j.a)(p,2),g=v[0],k=v[1],N=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://portfolio-back-heroku.herokuapp.com/api/profile/getProfile");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a(n.name),b(n.img),m(n.resume),k(n.socialNetworks);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){N()}),[]),Object(h.jsx)("section",{className:"d-flex",children:Object(h.jsxs)("div",{className:"profile-container --profile-normalizer",children:[Object(h.jsxs)("div",{className:"profile-container--content",children:[Object(h.jsx)("img",{className:"img-ajust",src:i,alt:"Profile piture of Duvan Villadiego"}),Object(h.jsx)("div",{className:"profile-container--networks",children:g.map((function(e){switch(e.name){case"linkedin":return Object(h.jsx)("a",{href:e.url,target:"_blank",children:Object(h.jsx)(u.a,{icon:d.c,className:"social-network-icon"})},e.name);case"github":return Object(h.jsx)("a",{href:e.url,target:"_blank",children:Object(h.jsx)(u.a,{icon:d.a,className:"social-network-icon"})},e.name);case"twitter":return Object(h.jsx)("a",{href:e.url,target:"_blank",children:Object(h.jsx)(u.a,{icon:d.d,className:"social-network-icon"})},e.name);case"instagram":return Object(h.jsx)("a",{href:e.url,target:"_blank",children:Object(h.jsx)(u.a,{icon:d.b,className:"social-network-icon"})},e.name);default:return null}}))})]}),Object(h.jsxs)("div",{className:"profile-container--content",children:[Object(h.jsx)("h3",{children:n}),Object(h.jsx)("p",{children:O})]})]})})};n(27);var f=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1],s=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://portfolio-back-heroku.herokuapp.com/api/skills/getSkills");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){s()})),Object(h.jsxs)("section",{className:"skills-container",children:[Object(h.jsx)("div",{className:"skills-container--text",children:Object(h.jsx)("h3",{className:"text-white",children:"HABILIDADES"})}),Object(h.jsx)("div",{className:"d-flex align-content-stretch flex-wrap skills-container-content",children:n.map((function(e){return Object(h.jsxs)("div",{className:"skills-container-content-item",children:[Object(h.jsx)("div",{}),Object(h.jsx)("img",{src:e.img,alt:"icon",className:"skills-container-content-item-icon--image"}),Object(h.jsx)("div",{children:Object(h.jsx)("p",{className:"text-white skills-container-content-item--text",children:e.name.charAt(0).toUpperCase()+e.name.slice(1)})})]},e.name)}))})]})};var O=function(){return Object(h.jsxs)("main",{children:[Object(h.jsx)(x,{}),Object(h.jsx)(f,{})]})};var m=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(b,{}),Object(h.jsx)(O,{})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root")),p()}},[[28,1,2]]]);
//# sourceMappingURL=main.8f72a1c6.chunk.js.map