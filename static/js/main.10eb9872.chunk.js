(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(10),c=n.n(a),r=n(47),s=n.n(r),i=n(11),u=n(36),j=n(15),o=n(0),l=n.n(o),b=n(2),O=n(23),d=n(48),p=n(26),f=n(49);Object(d.a)({apiKey:"AIzaSyDjlUMhU-UkbZpULCfvkulew2TxDeF2VBA",authDomain:"nwitter-ba414.firebaseapp.com",projectId:"nwitter-ba414",storageBucket:"nwitter-ba414.appspot.com",messagingSenderId:"1042124446484",appId:"1:1042124446484:web:619abaf7a353a5e8d74001"});var x=Object(O.c)(),m=Object(p.d)(),h=Object(f.a)(),v=n(6),g=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),u=s[0],j=s[1],o=Object(a.useState)(!0),d=Object(i.a)(o,2),p=d[0],f=d[1],m=Object(a.useState)(""),h=Object(i.a)(m,2),g=h[0],w=h[1],y=x,N=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?c(a):"password"===n&&j(a)},k=function(){var e=Object(b.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!p){e.next=7;break}return e.next=5,Object(O.b)(y,n,u);case 5:e.next=9;break;case 7:return e.next=9,Object(O.e)(y,n,u);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),w(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("form",{onSubmit:k,className:"container",children:[Object(v.jsx)("input",{name:"email",type:"text",placeholder:"Email",required:!0,value:n,onChange:N,className:"authInput"}),Object(v.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:u,onChange:N,className:"authInput"}),Object(v.jsx)("input",{type:"submit",className:"authInput authSubmit",value:p?"Create Account":"Sign in"}),g&&Object(v.jsx)("span",{className:"authError",children:g})]}),Object(v.jsx)("span",{onClick:function(){return f((function(e){return!e}))},className:"authSwitch",children:p?"Sign in":"Create Account"})]})},w=n(25),y=n(35),N=function(){var e=x,t=function(){var t=Object(b.a)(l.a.mark((function t(n){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"google"===n.target.name&&(a=new O.a),t.next=4,Object(O.f)(e,a);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"authContainer",children:[Object(v.jsx)(w.a,{icon:y.b,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(v.jsx)(g,{}),Object(v.jsx)("div",{className:"authBtns",children:Object(v.jsxs)("button",{onClick:t,name:"google",className:"authBtn",children:["Continue with Google ",Object(v.jsx)(w.a,{icon:y.a})]})})]})},k=n(50),S=n(29),C=n(43),F=n(30),I=function(e){var t=e.nweetObj,n=e.isOwner,a=function(){var e=Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\uc815\ub9d0 \uc774 nweet\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=7;break}return e.next=4,Object(p.b)(Object(p.c)(m,"nweets/".concat(t.id)));case 4:if(""===t.attachmentUrl){e.next=7;break}return e.next=7,Object(S.a)(Object(S.d)(h,t.attachmentUrl));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=Object(C.useState)(!1),r=Object(i.a)(c,2),s=r[0],u=r[1],j=Object(C.useState)(t.text),o=Object(i.a)(j,2),O=o[0],d=o[1],f=function(){return u((function(e){return!e}))};return Object(v.jsx)("div",{className:"nweet",children:s?Object(v.jsx)(v.Fragment,{children:n&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("form",{onSubmit:function(e){e.preventDefault(),Object(p.h)(Object(p.c)(m,"nweets/".concat(t.id)),{text:O}),u(!1)},className:"container nweetEdit",children:[Object(v.jsx)("input",{type:"text",placeholder:"Edit your nweet",value:O,required:!0,autoFocus:!0,onChange:function(e){var t=e.target.value;d(t)},className:"formInput"}),Object(v.jsx)("input",{type:"submit",value:"Update Nweet",className:"formBtn"})]}),Object(v.jsx)("span",{onClick:f,className:"formBtn cancelBtn",children:"Cancel"})]})}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(v.jsx)("img",{alt:"",src:t.attachmentUrl}),n&&Object(v.jsxs)("div",{className:"nweet__actions",children:[Object(v.jsx)("span",{onClick:a,children:Object(v.jsx)(w.a,{icon:F.d})}),Object(v.jsx)("span",{onClick:f,children:Object(v.jsx)(w.a,{icon:F.a})})]})]})})},U=n(28),B=n(71),_=function(e){var t=e.userObj,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],s=c[1],u=Object(a.useState)(""),j=Object(i.a)(u,2),o=j[0],O=j[1],d=Object(a.useRef)(),p=function(){var e=Object(b.a)(l.a.mark((function e(n){var a,c,i,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==r){e.next=2;break}return e.abrupt("return");case 2:if(n.preventDefault(),a="",""===o){e.next=12;break}return c=Object(S.d)(h,"".concat(t.uid,"/").concat(Object(B.a)())),e.next=8,Object(S.e)(c,o,"data_url");case 8:return i=e.sent,e.next=11,Object(S.b)(i.ref);case 11:a=e.sent;case 12:return u={text:r,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:a},e.next=15,Object(U.a)(Object(U.b)(m,"nweets"),u);case 15:s(""),O(""),d.current.value="";case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("form",{onSubmit:p,className:"factoryForm",children:[Object(v.jsxs)("div",{className:"factoryInput__container",children:[Object(v.jsx)("input",{className:"factoryInput__input",value:r,onChange:function(e){var t=e.target.value;s(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(v.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(v.jsxs)("label",{htmlFor:"attach-file",className:"factoryInput__label",children:[Object(v.jsx)("span",{children:"Add photos"}),Object(v.jsx)(w.a,{icon:F.b})]}),Object(v.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;O(t)},n.readAsDataURL(t)},ref:d,style:{opacity:0}}),o&&Object(v.jsxs)("div",{className:"factoryForm__attachment",children:[Object(v.jsx)("img",{alt:"\ubbf8\ub9ac\ubcf4\uae30",src:o,style:{backgroundImage:o}}),Object(v.jsxs)("div",{className:"factoryForm__clear",onClick:function(){O(""),d.current.value=""},children:[Object(v.jsx)("span",{children:"Remove"}),Object(v.jsx)(w.a,{icon:F.c})]})]})]})},A=function(e){var t=e.userObj,n=Object(a.useState)([]),c=Object(i.a)(n,2),r=c[0],s=c[1];return Object(a.useEffect)((function(){Object(p.e)(Object(p.g)(Object(p.a)(m,"nweets"),Object(p.f)("createdAt","desc")),(function(e){var t=e.docs.map((function(e){return Object(k.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(_,{userObj:t}),Object(v.jsx)("div",{style:{marginTop:30},children:r.map((function(e){return Object(v.jsx)(I,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},D=function(e){var t=e.userObj;return Object(v.jsx)("nav",{children:Object(v.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(v.jsx)("li",{children:Object(v.jsx)(u.b,{to:"/",className:"homeBtn",children:Object(v.jsx)(w.a,{icon:y.b,color:"#04AAFF",size:"2x"})})}),Object(v.jsx)("li",{children:Object(v.jsxs)(u.b,{to:"/profile",className:"profileBtn",children:[Object(v.jsx)(w.a,{icon:F.e,color:"#04AAFF",size:"2x"}),Object(v.jsx)("span",{className:"profileSpan",children:t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile"})]})})]})})},E=function(e){var t=e.refreshUser,n=e.userObj,c=x,r=Object(j.f)(),s=Object(a.useState)(n.displayName),u=Object(i.a)(s,2),o=u[0],d=u[1],p=function(){var e=Object(b.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n.displayName===o){e.next=5;break}return e.next=4,Object(O.h)(x.currentUser,{displayName:o});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(b.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(U.i)(Object(U.b)(m,"nweets"),Object(U.k)("creatorId","==",n.uid)),e.next=3,Object(U.e)(t);case 3:e.sent.forEach((function(e){console.log(e.id,"=>",e.data())}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){f()})),Object(v.jsxs)("div",{className:"container",children:[Object(v.jsxs)("form",{onSubmit:p,className:"profileForm",children:[Object(v.jsx)("input",{onChange:function(e){var t=e.target.value;d(t)},type:"text",autoFocus:!0,placeholder:"Display name",value:o,className:"formInput"}),Object(v.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(v.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){Object(O.g)(c),r.push("/")},children:"Log Out"})]})},L=function(e){var t=e.refreshUser,n=e.isLoggedIn,a=e.userObj;return Object(v.jsxs)(u.a,{children:[n&&Object(v.jsx)(D,{userObj:a}),Object(v.jsx)(j.c,{children:n?Object(v.jsxs)("div",{className:"nweetContainer",children:[Object(v.jsx)(j.a,{exact:!0,path:"/",children:Object(v.jsx)(A,{userObj:a})}),Object(v.jsx)(j.a,{exact:!0,path:"/profile",children:Object(v.jsx)(E,{userObj:a,refreshUser:t})})]}):Object(v.jsx)(j.a,{exact:!0,path:"/",children:Object(v.jsx)(N,{})})})]})};var z=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),s=Object(i.a)(r,2),u=s[0],j=s[1];return Object(a.useEffect)((function(){var e=x;Object(O.d)(e,(function(e){j(e?{displayName:e.displayName,uid:e.uid}:null),c(!0)}))}),[]),Object(v.jsxs)(v.Fragment,{children:[n?Object(v.jsx)(L,{refreshUser:function(){var e=x.currentUser;j({displayName:e.displayName,uid:e.uid})},isLoggedIn:Boolean(u),userObj:u}):"Initializing...",Object(v.jsxs)("footer",{children:["\xa9 ",(new Date).getFullYear()," Nwitter"]})]})};n(68);s.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(z,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.10eb9872.chunk.js.map