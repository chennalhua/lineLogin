(this["webpackJsonpnaihua-line-login"]=this["webpackJsonpnaihua-line-login"]||[]).push([[0],{189:function(e,t){},192:function(e,t){},194:function(e,t){},209:function(e,t){},211:function(e,t){},239:function(e,t){},241:function(e,t){},242:function(e,t){},247:function(e,t){},249:function(e,t){},255:function(e,t){},257:function(e,t){},276:function(e,t){},288:function(e,t){},291:function(e,t){},316:function(e,t,n){},317:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),i=n(146),a=n.n(i),s=n(151),l=n(6),r=n(15),d=n.n(r),u=n(32),h=n.n(u),f=n(73),j=n.n(f),b=n(147),p=n.n(b),g=n(148),O=n.n(g),x=n(1),m=function(e){var t=e.isLoading;return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"".concat(t?"d-block":"d-none"),children:Object(x.jsx)("div",{style:{background:"rgba(0,0,0,.2)",width:"100vw",height:"100vh",position:"absolute",top:"0",left:"0"},children:Object(x.jsx)("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:Object(x.jsx)("div",{className:"load-4",children:Object(x.jsx)("div",{className:"ring-1"})})})})})})},v=function(){var e=d()(32).toString("hex"),t=d()(32).toString("hex");Object(c.useEffect)((function(){var n=j.a.parse(window.location.href,!0).query;0===Object.keys(n).length&&function(){var n="https://access.line.me/oauth2/v2.1/authorize?";n+="response_type=code",n+="&client_id=".concat("1656692096"),n+="&redirect_uri=".concat("https://chennalhua.github.io/lineLogin/"),n+="&state=".concat(e),n+="&nonce=".concat(t),n+="&scope=openid%20profile",n+="&bot_prompt=normal",window.location.href=n}()}));return Object(c.useEffect)((function(){!function(e){var t=j.a.parse(e,!0).query;if(Object.prototype.hasOwnProperty.call(t,"code")){var n={grant_type:"authorization_code",code:t.code,redirect_uri:"".concat("https://chennalhua.github.io/lineLogin/"),client_id:"".concat("1656692096"),client_secret:"".concat("8664461fb88612dbf7ab59d5721aea3a")};h.a.post("https://api.line.me/oauth2/v2.1/token",p.a.stringify(n),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){try{var t=O.a.verify(e.data.id_token,"".concat("8664461fb88612dbf7ab59d5721aea3a"),{algorithms:["HS256"],audience:"".concat("1656692096").toString(),issuer:"https://access.line.me"});document.cookie="lineIdToken=".concat(t.sub,";");var n=document.cookie.replace(/(?:(?:^|.*;\s*)cookieId\s*=\s*([^;]*).*$)|^.*$/,"$1");setTimeout((function(){window.location.href="https://chennalhua.github.io/lineLogin/#/page?id=".concat(n)}),1e3)}catch(c){console.log(c)}})).catch((function(e){console.log(e)}))}else t.error&&alert("\u9700\u300c\u8a31\u53ef\u300d\u6388\u6b0a\uff0c\u624d\u80fd\u9a57\u8b49\u767b\u5165")}(window.location.href)}),[]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(m,{isLoading:!0}),Object(x.jsx)("div",{children:"\u9801\u9762\u5c0e\u56de\u4e2d..."})]})},w=n(16),y=function(){var e=document.cookie.replace(/(?:(?:^|.*;\s*)lineIdToken\s*=\s*([^;]*).*$)|^.*$/,"$1"),t=document.cookie.replace(/(?:(?:^|.*;\s*)cookieId\s*=\s*([^;]*).*$)|^.*$/,"$1"),n=Object(c.useState)({name:null,id:null}),o=Object(w.a)(n,2),i=o[0],a=o[1],s=Object(c.useState)(null),l=Object(w.a)(s,2),r=l[0],d=l[1],u=Object(c.useState)(!0),h=Object(w.a)(u,2),f=(h[0],h[1]),j=[{id:"001",name:"\u5b78\u9577~ \u65b0\u5e74\u5feb\u6a02"}];Object(c.useEffect)((function(){var n=window.location.href,c=new URL(n).hash.split("#")[1].split("?")[1].split("=")[1];if(sessionStorage.setItem("sessionCaseId",c),localStorage.setItem("localCaseId",c),document.cookie="cookieId=".concat(c,";"),""!==e&&null!==e&&void 0!==e)return null==c||"null"==c||""==c||void 0==c?(f(!1),void d("\u6293 ID \u932f\u8aa4 !!")):(f(!1),void j.map((function(e,n){t==e.id&&a({name:e.name,id:e.id})})));setTimeout((function(){window.location.href="https://chennalhua.github.io/lineLogin/#/"}),3e3)}),[]),Object(c.useEffect)((function(){}),[r]),Object(c.useEffect)((function(){}),[]);return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(m,{isLoading:!0}),Object(x.jsxs)("div",{style:{style:{position:"absolute",top:"35%",left:"50%",transform:"translate(-50%, -50%)",width:"100%"}},children:[Object(x.jsx)("p",{children:window.location.href}),Object(x.jsxs)("ul",{style:{fontSize:"18px"},children:[Object(x.jsxs)("li",{children:["cookies\uff1a",t]}),Object(x.jsxs)("li",{children:["localStorage\uff1a",localStorage.getItem("localCaseId")]}),Object(x.jsxs)("li",{children:["sessionStorage\uff1a",sessionStorage.getItem("sessionCaseId")]})]}),Object(x.jsx)("div",{style:{textAlign:"center",fontSize:"20px"},children:r}),Object(x.jsx)("div",{style:{textAlign:"center",fontSize:"20px"},children:i.name})]})]})},k=function(e){return Object(x.jsxs)(s.a,{children:[Object(x.jsx)(l.a,{exact:!0,path:"/",children:Object(x.jsx)(v,{})})," ",Object(x.jsx)(l.a,{exact:!0,path:"/page",children:Object(x.jsx)(y,{})})," "]})},S=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(k,{})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,318)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),i(e),a(e)}))};n(316);a.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(S,{})}),document.getElementById("root")),I()}},[[317,1,2]]]);
//# sourceMappingURL=main.7aacc8dc.chunk.js.map