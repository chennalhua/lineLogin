(this["webpackJsonpnaihua-line-login"]=this["webpackJsonpnaihua-line-login"]||[]).push([[0],{359:function(e,t){},362:function(e,t){},364:function(e,t){},379:function(e,t){},381:function(e,t){},409:function(e,t){},411:function(e,t){},412:function(e,t){},417:function(e,t){},419:function(e,t){},425:function(e,t){},427:function(e,t){},446:function(e,t){},458:function(e,t){},461:function(e,t){},486:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),i=n(204),a=n.n(i),s=n(106),r=n(9),l=n(38),d=n(8),u=n(26),j=n(212),b=n(68),f=n(21),h=n.n(f),m=n(50),p=n.n(m),O=n(49),x=n.n(O),g=n(108),v=n.n(g),w=n(208),y=n.n(w),N=n(209),S=n.n(N),k=n(1),C=function(){var e,t,n=Object(c.useState)(""),o=Object(d.a)(n,2),i=o[0],a=o[1],s=h()(32).toString("hex"),r=h()(32).toString("hex"),f="8664461fb88612dbf7ab59d5721aea3a",m="1656692096",O="https://chennalhua.github.io/lineLogin/",g=function(){var e="https://access.line.me/oauth2/v2.1/authorize?";e+="response_type=code",e+="&client_id=".concat(m),e+="&redirect_uri=".concat(O),e+="&state=".concat(s),e+="&nonce=".concat(r),e+="&scope=openid%20profile",e+="&prompt=consent",e+="&bot_prompt=normal",window.location.href=e};Object(c.useEffect)((function(){var e=v.a.parse(window.location.href,!0).query;0===Object.keys(e).length&&g()}),[]);Object(c.useEffect)((function(){!function(e){var t=v.a.parse(e,!0).query;if(console.log(t),Object.prototype.hasOwnProperty.call(t,"code")){var n={grant_type:"authorization_code",code:t.code,redirect_uri:"".concat(O),client_id:"".concat(m),client_secret:"".concat(f)};x.a.post("https://api.line.me/oauth2/v2.1/token",y.a.stringify(n),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){try{var t=S.a.verify(e.data.id_token,"".concat(f),{algorithms:["HS256"],audience:"".concat(m).toString(),issuer:"https://access.line.me"});a(t.sub),localStorage.setItem("test",encodeURI(JSON.stringify(t.sub)))}catch(n){console.log(n)}})).catch((function(e){console.log(e)}))}else t.error&&p.a.fire({icon:"error",title:"\u767b\u5165\u5931\u6557",text:"\u9700\u767b\u5165\u6388\u6b0a\uff0c\u624d\u80fd\u8f49\u63db\u5347\u7d1a iSmart +",confirmButtonText:"\u91cd\u65b0\u767b\u5165"}).then((function(){g()}))}(window.location.href)}),[]);var w=b.a().shape({uid:b.b().required("\u8acb\u6b63\u78ba\u8f38\u5165\u5e33\u865f"),pwd:b.b().required("\u8acb\u6b63\u78ba\u8f38\u5165\u5bc6\u78bc")}),N={resolver:Object(j.a)(w)},C=Object(u.d)(N),_=C.register,F=C.handleSubmit,q=C.reset,E=C.formState.errors,L=Object(c.useState)({}),T=Object(d.a)(L,2),B=T[0],I=T[1],R=Object(c.useState)(!1),J=Object(d.a)(R,2),P=J[0],z=J[1],G=Object(c.useState)(!0),U=Object(d.a)(G,2),D=U[0],H=U[1];return Object(c.useEffect)((function(){}),[B]),Object(k.jsx)("div",{children:Object(k.jsx)("div",{className:"container-fluid bg-mask vh-100",children:Object(k.jsxs)("div",{className:"container",children:[Object(k.jsx)("button",{type:"button",onClick:g,children:"click"}),Object(k.jsx)("h4",{className:"text-center fw-bolder text-golden-brown",children:"iSmart \u5347\u7d1a\u91d1\u982d\u8166\u767b\u5165"}),Object(k.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(k.jsxs)("form",{onSubmit:F((function(e){H(!0),e=Object(l.a)(Object(l.a)({},e),{},{LineId:i});I(e),console.log(e),x.a.put("https://ismart2.goldennet.com.tw/LineLogin/UpdateLineId",e).then((function(e){z(!0),"0"===e.data.ResponseCode?(z(!1),p.a.fire({icon:"success",title:"!!\u606d\u559c\u60a8!!",text:"\u5df2\u7d93\u9806\u5229\u8f49\u63db\u70ba iSmart + \u91d1\u982d\u8166\u5e33\u865f",confirmButtonText:"\u592a\u597d\u4e86"}),q()):"1"===e.data.ResponseCode?(z(!1),p.a.fire({icon:"info",title:"\u60a8\u5df2\u6210\u529f\u8f49\u63db\u904e\u56c9~",text:"\u7121\u9808\u518d\u6b21\u767b\u5165\u8f49\u63db\u56c9!\u656c\u8acb\u671f\u5f85 iSmart + \u91d1\u982d\u8166",confirmButtonText:"\u6c92\u554f\u984c"}),q()):"2"===e.data.ResponseCode&&(z(!1),p.a.fire({icon:"error",title:"\u8f49\u63db\u5931\u6557 ><",text:"\u8acb\u5148\u78ba\u8a8d\u5e33\u865f\u5bc6\u78bc\u662f\u5426\u6b63\u78ba\u3002\u5982\u9084\u8f49\u63db\u5931\u6557\u8acb\u806f\u7e6b eGolden_support \u5718\u968a\u9032\u884c\u5354\u52a9",confirmButtonText:"\u597d\u7684"}))})).catch((function(e){console.log(e),q()}))})),className:"col-12 col-md-6 col-lg-4",children:[Object(k.jsxs)("div",{className:"form-group my-3",children:[Object(k.jsx)("label",{htmlFor:"uid",className:"fw-bolder text-golden-brown",children:"\u8acb\u8f38\u5165\u300a\u696d\u7ba1\u7cfb\u7d71\u300b\u5e33\u865f"}),Object(k.jsx)("input",Object(l.a)(Object(l.a)({id:"uid",name:"uid",type:"text"},_("uid")),{},{className:"form-control ".concat(E.uid?"is-invalid":"")})),Object(k.jsx)("div",{className:"invalid-feedback",children:null===(e=E.uid)||void 0===e?void 0:e.message})]}),Object(k.jsxs)("div",{className:"form-group my-3 position-relative",children:[Object(k.jsx)("label",{htmlFor:"pwd",className:"fw-bolder text-golden-brown",children:"\u8acb\u8f38\u5165\u300a\u696d\u7ba1\u7cfb\u7d71\u300b\u5bc6\u78bc"}),Object(k.jsx)("input",Object(l.a)({id:"pwd",name:"pwd",type:D?"password":"text",className:"form-control ".concat(E.pwd?"is-invalid":"")},_("pwd"))),Object(k.jsx)("div",{className:"invalid-feedback",children:null===(t=E.pwd)||void 0===t?void 0:t.message})]}),Object(k.jsx)("button",{type:"submit",className:"btn btn-golden-brown w-100 mt-3",disabled:P?"disabled":"",children:"\u767b\u5165"})]}),JSON.stringify(B)]})]})})})},_=function(){var e=Object(c.useState)(!0),t=Object(d.a)(e,2),n=(t[0],t[1]),o=Object(c.useState)([]),i=Object(d.a)(o,2),a=i[0],s=i[1];Object(c.useEffect)((function(){x.a.get("/api/Gcd/loc=").then((function(e){console.log(e.data),"-1"==e.data.ResponseCode&&console.log("-1"),s(e.data),n(!1)})).catch((function(e){console.log(e)}))}),[]);var r=[];a.forEach((function(e,t){r.push(e.location)}));var l=r.filter((function(e,t,n){return n.indexOf(e)===t})),u=Object(c.useState)("\u7e3d\u516c\u53f8"),j=Object(d.a)(u,2),b=j[0],f=j[1],h=Object(c.useState)("\u8463\u4e8b\u9577\u5ba4"),m=Object(d.a)(h,2),p=m[0],O=m[1],g=[];!function(e){e.forEach((function(e,t){b===e.location&&g.push(e.department)}))}(a);var v=g.filter((function(e,t,n){return n.indexOf(e)===t}));return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)("div",{className:"container mt-3",children:[Object(k.jsxs)("div",{className:"d-flex pb-2",children:[Object(k.jsx)("select",{className:"form-select",value:b,onChange:function(e){var t=e.target.value;f(t),a.map((function(e){return t===e.location&&O(e.department),!0}))},children:l.map((function(e,t){return Object(k.jsx)("option",{value:e,children:e},e)}))}),Object(k.jsx)("select",{className:"form-select ms-2",value:p,onChange:function(e){var t=e.target.value;O(t)},children:v.map((function(e,t){return Object(k.jsx)("option",{value:e,children:e},e)}))})]}),Object(k.jsx)("ul",{className:"list-unstyled page-content-link fw-bolder",value:!0,children:a.map((function(e,t){return b!==e.location||p!==e.department||Object(k.jsx)("li",{className:"border-bottom py-3",children:Object(k.jsxs)("div",{className:"d-flex justify-content-between flex-wrap",children:[Object(k.jsx)("span",{}),Object(k.jsxs)("span",{children:[""===e.extension?" - ":e.extension," /",Object(k.jsx)("a",{href:"tel:+886-".concat(e.telephone),className:"ms-2",children:e.telephone})]})]})},t)}))})]})})},F=function(e){return Object(k.jsxs)(s.a,{children:[Object(k.jsx)(r.a,{exact:!0,path:"/",children:Object(k.jsx)(C,{})})," ",Object(k.jsx)(r.a,{exact:!0,path:"/qqq",children:Object(k.jsx)(_,{})})," "]})},q=function(){return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(F,{})})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,487)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),i(e),a(e)}))};a.a.render(Object(k.jsx)(o.a.StrictMode,{children:Object(k.jsx)(q,{})}),document.getElementById("root")),E()}},[[486,1,2]]]);
//# sourceMappingURL=main.bb17b670.chunk.js.map