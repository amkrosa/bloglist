(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{243:function(e,t,n){e.exports=n(403)},382:function(e,t,n){},398:function(e,t,n){},401:function(e,t,n){},403:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(28),l=n.n(c),o=n(18),s=n(9),u=n.n(s),i=n(197),m=n(198),d=n(42),f=n.n(d),p=function(){function e(t,n){Object(i.a)(this,e),this._baseUrl=void 0,this._token=void 0,this._config=void 0,this._baseUrl=t,this._token="bearer ".concat(n)}return Object(m.a)(e,[{key:"get",value:function(e){var t;return u.a.async(function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,"undefined"!==typeof e){n.next=7;break}return n.next=4,u.a.awrap(f.a.get(this._baseUrl));case 4:t=n.sent,n.next=10;break;case 7:return n.next=9,u.a.awrap(f.a.get("".concat(this._baseUrl,"/").concat(e)));case 9:t=n.sent;case 10:return n.abrupt("return",t.data);case 13:n.prev=13,n.t0=n.catch(0),console.error(n.t0);case 16:case"end":return n.stop()}},null,this,[[0,13]])}},{key:"create",value:function(e,t,n){var a;return u.a.async(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,"undefined"!==typeof n){t.next=7;break}return t.next=4,u.a.awrap(f.a.post(this._baseUrl,e));case 4:a=t.sent,t.next=10;break;case 7:return t.next=9,u.a.awrap(f.a.post(this._baseUrl,e,this._config));case 9:a=t.sent;case 10:return t.abrupt("return",a.data);case 13:t.prev=13,t.t0=t.catch(0),console.error(t.t0);case 16:case"end":return t.stop()}},null,this,[[0,13]])}},{key:"update",value:function(e,t,n){var a;return u.a.async(function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,"undefined"!==typeof n){r.next=7;break}return r.next=4,u.a.awrap(f.a.put("".concat(this._baseUrl,"/").concat(t),e));case 4:a=r.sent,r.next=9;break;case 7:return r.next=9,u.a.awrap(f.a.put("".concat(this._baseUrl,"/").concat(t),e,this._config));case 9:return r.abrupt("return",a.data);case 12:r.prev=12,r.t0=r.catch(0),console.error(r.t0);case 15:case"end":return r.stop()}},null,this,[[0,12]])}},{key:"remove",value:function(e,t){var n;return u.a.async(function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,"undefined"!==typeof t){a.next=7;break}return a.next=4,u.a.awrap(f.a.delete("".concat(this._baseUrl,"/").concat(e)));case 4:n=a.sent,a.next=10;break;case 7:return a.next=9,u.a.awrap(f.a.delete("".concat(this._baseUrl,"/").concat(e),this._config));case 9:n=a.sent;case 10:return a.abrupt("return",n.data);case 13:a.prev=13,a.t0=a.catch(0),console.error(a.t0);case 16:case"end":return a.stop()}},null,this,[[0,13]])}},{key:"comment",value:function(e,t){var n;return u.a.async(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,u.a.awrap(f.a.post("".concat(this._baseUrl,"/").concat(t,"/comments"),e,this._config));case 3:return n=a.sent,a.abrupt("return",n.data);case 7:a.prev=7,a.t0=a.catch(0),console.error(a.t0);case 10:case"end":return a.stop()}},null,this,[[0,7]])}},{key:"login",value:function(e){var t;return u.a.async(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.a.awrap(f.a.post(this._baseUrl,e));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}},null,this,[[0,7]])}},{key:"token",set:function(e){this._token="bearer ".concat(e),this._config={headers:{Authorization:this._token}}},get:function(){return void 0!==this._token?this._token:null}}]),e}(),b=new p("/bloglist/api/blogs"),g={getAll:function(){return u.a.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.awrap(b.get());case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}})},get:function(e){return u.a.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.awrap(b.get(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}})},create:function(e){return u.a.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.awrap(b.create(e,void 0,!0));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}})},update:function(e,t){return u.a.async(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.a.awrap(b.update(e,t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}})},remove:function(e){return u.a.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.awrap(b.remove(e,!0));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.error(t.t0);case 8:case"end":return t.stop()}},null,null,[[0,5]])},comment:function(e,t){return u.a.async(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.a.awrap(b.comment(e,t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}})},api:b},E=new p("/bloglist/api/login"),h=function(e){return u.a.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.awrap(E.login(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}})},v=new p("/bloglist/api/users"),w=function(){return u.a.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.awrap(v.get());case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}})},O=function(e){return u.a.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.awrap(v.create(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}})},y=function(e,t){return e.filter(function(e){return e.id===t})[0]},x=function(e){return y(e.users,e.auth.id)},k=n(47),j=n(40),S=function(){return function(e){var t;return u.a.async(function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:"INIT_BLOGS_PENDING"}),n.prev=1,n.next=4,u.a.awrap(g.getAll());case 4:t=n.sent,e({type:"INIT_BLOGS_SUCCESS",data:t}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),e({type:"INIT_BLOGS_FAILURE",error:n.t0});case 11:case"end":return n.stop()}},null,null,[[1,8]])}},I=function(e,t){return e.blogs.filter(function(e){return e.id===t})[0]},C=function(e,t){return Object(k.a)(e.blogs.blogs).sort(function(e,t){return e.likes-t.likes}).reverse().slice(0,t)},N=function(e,t){return Object(k.a)(e.blogs.blogs).reverse().slice(0,t)},_=n(45),T=n(446),U=n(227),A=n(444),L=n(443),D=n(441),B=function(e){var t=e.handleLogout;return r.a.createElement(D.a,{item:!0,icon:"bars",simple:!0},r.a.createElement(D.a.Menu,null,r.a.createElement(D.a.Item,{link:!0,href:"/bloglist"},"Home"),r.a.createElement(D.a.Item,{link:!0,href:"/bloglist/blogs"},"Blogs"),r.a.createElement(D.a.Item,{link:!0,href:"/bloglist/profile"},"Profile"),r.a.createElement(D.a.Item,{link:!0,href:"/bloglist/new"},"New"),r.a.createElement(D.a.Divider,null),r.a.createElement(D.a.Item,{onClick:t},"Logout")))},R=(n(382),n(59)),G=function(e){var t,n,a=Object(R.g)(),c=function(){e.logout(),a.push("/")};return r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a,{minWidth:500,as:U.a,size:"large",secondary:!0,className:"navbar"},r.a.createElement(U.a.Item,{name:"/",content:"Home",link:!0,href:"/bloglist"}),r.a.createElement(U.a.Item,{name:"/blogs",content:"Blogs",link:!0,href:"/bloglist/blogs"}),(null===(t=e.auth)||void 0===t?void 0:t.token)?r.a.createElement(r.a.Fragment,null,r.a.createElement(U.a.Item,{name:"/profile",content:"Profile",link:!0,href:"/bloglist/profile"}),r.a.createElement(U.a.Item,{name:"/new",content:"New",link:!0,href:"/bloglist/new"})):null,r.a.createElement(U.a.Menu,{position:"right"},(null===(n=e.auth)||void 0===n?void 0:n.token)?r.a.createElement(r.a.Fragment,null,r.a.createElement(U.a.Item,null,r.a.createElement(A.a,{as:"h4"},"Logged in as ",e.auth.name)),r.a.createElement(U.a.Item,{name:"logout",active:!0,onClick:c})):r.a.createElement(L.a.Group,null,r.a.createElement(U.a.Item,null,r.a.createElement(L.a.Group,null,r.a.createElement(L.a,{positive:!0,as:"a",href:"./register"},"Signup"),r.a.createElement(L.a.Or,null),r.a.createElement(L.a,{color:"blue",as:"a",href:"./login"},"Login")))))),r.a.createElement(T.a,{maxWidth:499,as:U.a},r.a.createElement(B,{handleLogout:c})))},F={logout:function(){return function(e){return u.a.async(function(t){for(;;)switch(t.prev=t.next){case 0:window.localStorage.removeItem("loggedUser"),g.api.token=null,e({type:"LOGOUT"});case 3:case"end":return t.stop()}})}}},P=Object(o.b)(function(e){return{auth:e.auth}},F)(G),M=n(218),z=n.n(M),V=n(219),W=n.n(V),q=n(217),J=n.n(q),H=n(216),K=n.n(H),Q=n(220),X=n.n(Q),Y=n(429),Z=n(438),$=n(445),ee=n(432),te=n(115),ne=n(431),ae=n(20),re=function(e,t){return{type:"SET_NOTIFICATION",data:{status:!0,content:e,category:t}}},ce=function(){return{type:"CLEAR_NOTIFICATION",data:{status:!1,content:"",category:""}}},le=function(e,t,n){return function(a){return u.a.async(function(a){for(;;)switch(a.prev=a.next){case 0:re(e,t),setTimeout(function(){return ce},1e3*n);case 2:case"end":return a.stop()}})}},oe={clearNotification:ce,setTimedNotification:le},se=Object(o.b)(function(e){return{notification:e.notification}},oe)(function(e){var t=Object(Y.a)(function(e){return{success:{backgroundColor:te.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.main},warning:{backgroundColor:ne.a[700]},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"}}}),n={success:K.a,warning:J.a,error:z.a,info:W.a},a=t(),c=e.notification.category?n[e.notification.category]:n.info;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},key:"bottom, center",open:e.notification.status,onClose:e.clearNotification,autoHideDuration:3e3,ContentProps:{"aria-describedby":"message-id"}},r.a.createElement($.a,{className:a[e.notification.category],"aria-describedby":"client-snackbar",message:r.a.createElement("span",{id:"client-snackbar",className:a.message},r.a.createElement(c,{className:Object(ae.a)(a.icon,a.iconVariant)}),e.notification.content),action:[r.a.createElement(ee.a,{key:"close","aria-label":"close",color:"inherit",onClick:e.clearNotification},r.a.createElement(X.a,{className:a.icon}))]})))}),ue=n(30),ie=n(46),me=n(228),de=n(437),fe=function(e){var t=e.username,n=e.setUsername,a=e.password,c=e.setPassword,l=e.handleLogin;e.history,Object(ie.a)(e,["username","setUsername","password","setPassword","handleLogin","history"]);return r.a.createElement(me.a,{style:{height:"80vh"},verticalAlign:"middle",textAlign:"center"},r.a.createElement(me.a.Column,{style:{maxWidth:450}},r.a.createElement(A.a,{as:"h2",color:"blue",textAlign:"center"},"Log-in to your account"),r.a.createElement(de.a,{onSubmit:l},r.a.createElement(de.a.Input,{label:"Username",value:t,onChange:function(e){var t=e.target;return n(t.value)},placeholder:"Enter username..."}),r.a.createElement(de.a.Input,{type:"password",label:"Password",value:a,onChange:function(e){var t=e.target;return c(t.value)},placeholder:"Enter password..."}),r.a.createElement(de.a.Button,null,"Login"))))},pe={login:function(e,t){return function(n){var a;return u.a.async(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.a.awrap(h({username:e,password:t}));case 2:a=r.sent,g.api.token=a.token,window.localStorage.setItem("loggedUser",JSON.stringify(a)),n({type:"LOGIN",data:a});case 6:case"end":return r.stop()}})}},setNotification:re},be=Object(o.b)(function(e){return{user:e.user}},pe)(function(e){var t=Object(a.useState)(""),n=Object(ue.a)(t,2),c=n[0],l=n[1],o=Object(a.useState)(""),s=Object(ue.a)(o,2),u=s[0],i=s[1],m=Object(R.g)();return r.a.createElement(fe,{username:c,setUsername:l,password:u,setPassword:i,handleLogin:function(t){t.preventDefault();try{e.login(c,u),l(""),i(""),m.push("/")}catch(n){e.setNotification("error","An error has occured."),console.error(n)}}})}),ge=n(433),Ee=function(e){var t=Object(Y.a)(function(t){return{box:{width:e.width,margin:"0 auto",paddingTop:"5.8572em"}}})();return r.a.createElement(ge.a,{className:t.box,container:!0,alignItems:"center",spacing:2},e.children)},he=function(e){var t=e.user;return console.log(t),r.a.createElement(Ee,null,r.a.createElement("h3",null,"User ",t.name),r.a.createElement("h4",null,"added blogs: "),r.a.createElement("ul",null,t.blogs.map(function(e){return r.a.createElement("li",{key:e.id},e.title)})))},ve=Object(o.b)(function(e){return{auth:e.auth}})(function(e){var t=e.auth,n=e.children,a=Object(ie.a)(e,["auth","children"]);return console.log(t),t?r.a.createElement(R.b,a,n):r.a.createElement(R.a,{to:"/"})}),we=n(442),Oe=n(84),ye=(n(398),Object(R.h)(function(e){var t=e.blog,n=e.history;return r.a.createElement(we.a,{className:"blog card",onClick:function(){return n.push("/blogs/".concat(t.id),t.id)}},r.a.createElement(we.a.Content,null,r.a.createElement(we.a.Header,{content:t.title}),r.a.createElement(we.a.Meta,{content:t.author}),r.a.createElement(we.a.Description,{content:t.description})),r.a.createElement(we.a.Content,{extra:!0},r.a.createElement("p",null,r.a.createElement(Oe.a,{name:"like"}),t.likes," likes"),r.a.createElement(Oe.a,{name:"comments"}),t.comments.length," comments"))})),xe=n(434),ke=n(435),je=function(e){var t=function(e){var t=e.blogs;return r.a.createElement(r.a.Fragment,null,t.map(function(e){return r.a.createElement(me.a.Column,{key:e.id},r.a.createElement(ye,{key:e.id,blog:e}))}))};return r.a.createElement(xe.a,null,e.pending?r.a.createElement(ke.a,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(me.a,{container:!0,divided:!0,padded:!0,stackable:!0,columns:"equal",direction:"column",justify:"center"},r.a.createElement(A.a,{as:"h4"},"Most popular"),r.a.createElement(me.a.Row,null,r.a.createElement(t,{blogs:e.blogsMostPopular})),r.a.createElement(A.a,{as:"h4"},"Recently added"),r.a.createElement(me.a.Row,null,r.a.createElement(t,{blogs:e.blogsRecentlyAdded})))))},Se=Object(o.b)(function(e){return{blogsMostPopular:C(e,3),blogsRecentlyAdded:N(e,3),pending:e.blogs.pending}})(je),Ie=n(439),Ce=function(e){var t=e.comment,n=e.user,a=new Date(Date.parse(t.date)).toUTCString();return r.a.createElement(Ie.a,null,r.a.createElement(Ie.a.Avatar,{src:"/"}),r.a.createElement(Ie.a.Content,null,r.a.createElement(Ie.a.Author,null,n),r.a.createElement(Ie.a.Metadata,null,r.a.createElement("div",null,a),r.a.createElement("div",null,t.likes," likes")),r.a.createElement(Ie.a.Text,null,t.content)))},Ne=function(e,t,n){return function(e,t,n){return[].concat(Object(k.a)(n.slice(0,t)),[e],Object(k.a)(n.slice(t+1)))}(e,n.findIndex(function(t){return t.id===e.id}),n)},_e=function(){return"_"+Math.random().toString(36).substr(2,9)},Te=function(e){var t=e.comment,n=e.setComment,a=e.handleSubmit;Object(ie.a)(e,["comment","setComment","handleSubmit"]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(de.a,{onSubmit:a},r.a.createElement(de.a.TextArea,{label:"Content",value:t,onChange:function(e){var t=e.target;return n(t.value)},placeholder:"Comment..."}),r.a.createElement(de.a.Button,{type:"submit"},r.a.createElement(Oe.a,{name:"plus",onClick:a}))))},Ue={addComment:function(e,t){return function(n){var a,r,c;return u.a.async(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,u.a.awrap(g.comment(t,e.id?e.id:""));case 2:r=l.sent,c=Object(j.a)({},e,{comments:null===e||void 0===e?void 0:null===(a=e.comments)||void 0===a?void 0:a.concat(r)}),n({type:"ADD_COMMENT",data:c});case 5:case"end":return l.stop()}})}},setTimedNotification:le,setNotification:re},Ae=Object(o.b)(function(e){return{user:e.auth.username,blogs:e.blogs}},Ue)(function(e){var t=Object(R.g)(),n=Object(a.useState)(!1),c=Object(ue.a)(n,2),l=(c[0],c[1]),o=Object(a.useState)(""),s=Object(ue.a)(o,2),u=s[0],i=s[1];return r.a.createElement(Te,{comment:u,setComment:i,handleSubmit:function(n){if(n.preventDefault(),u.length<3)return e.setNotification("Too few characters","error"),l(!0),void setTimeout(function(){return l(!1)},3e3);var a={content:u,likes:0,user:e.user};i("");var r=I(e.blogs,t.location.state);e.addComment(r,a),e.setNotification("Comment succesfully added","success")}})}),Le=function e(t){var n,a,c=t.comments,l=null!==(n=window.localStorage.getItem("loggedUser"))&&void 0!==n?n:"";l&&(a=JSON.parse(l));return r.a.createElement(r.a.Fragment,null,c.map(function(t){return r.a.createElement(e.Single,{key:_e(),comment:t})}),a?r.a.createElement(e.New,null):null)};Le.Single=Ce,Le.New=Ae;var De=Le,Be=function(e){var t=e.blog,n=e.full,a=void 0!==n&&n,c=e.currentUser,l=Object(ie.a)(e,["blog","full","currentUser"]),o=Object(R.g)();if(!t)return r.a.createElement(R.a,{to:"/"});var s=new Date(Date.parse(t.date)).toUTCString();return r.a.createElement(me.a,{verticalAlign:"middle",centered:!0,textAlign:"center"},r.a.createElement(me.a.Column,{className:"blog single"},a?r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a,{as:"h2"},t.title,r.a.createElement(A.a.Subheader,null,t.author),r.a.createElement(A.a.Subheader,null,s),r.a.createElement(A.a,{as:"h4"},r.a.createElement("em",null,t.description))),r.a.createElement(xe.a,{text:!0,className:"blog text",textAlign:"justified"},t.content),(null===c||void 0===c?void 0:c.token)?r.a.createElement(Oe.a,{onClick:function(){return l.addVote(t)},name:"like",className:"like"}):r.a.createElement(Oe.a,{name:"like",className:"like"}),t.likes," likes",(null===c||void 0===c?void 0:c.username)===t.user.username?r.a.createElement(Oe.a,{onClick:function(){l.deleteBlog(t.id),o.push("/blogs")},name:"delete",className:"delete"}):"",r.a.createElement(Ie.a.Group,null,r.a.createElement(A.a,{as:"h4",dividing:!0},"Comments"),r.a.createElement(De,{comments:t.comments}))):r.a.createElement(A.a,{as:"h5",onClick:function(){return o.push("/blogs/".concat(t.id),t.id)}},t.title)))},Re={addVote:function(e){return function(t){var n;return u.a.async(function(a){for(;;)switch(a.prev=a.next){case 0:return n=Object(j.a)({},e,{likes:e.likes+1}),a.next=3,u.a.awrap(g.update(n,e.id?e.id:""));case 3:t({type:"ADD_VOTE",data:n});case 4:case"end":return a.stop()}})}},deleteBlog:function(e){return function(t){return u.a.async(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.a.awrap(g.remove(e));case 2:t({type:"DELETE_BLOG",data:{id:e}});case 3:case"end":return n.stop()}})}}},Ge=Object(o.b)(null,Re)(Be),Fe=n(222),Pe=n.n(Fe),Me=n(436),ze=Object(Y.a)(function(e){return{button:{margin:e.spacing(1)}}}),Ve=function(e){var t=ze();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"to be done"),r.a.createElement(Me.a,{variant:"contained",color:"secondary",className:t.button,startIcon:r.a.createElement(Pe.a,null)},"Delete account"))},We=function(e){return r.a.createElement("div",null,"to be done")},qe=n(447),Je=n(144),He=n(226),Ke=function(e){var t=e.user,n=[{menuItem:"Statistics",render:function(){return r.a.createElement(qe.a.Pane,{attached:!1},r.a.createElement(We,null))}},{menuItem:"Settings",render:function(){return r.a.createElement(qe.a.Pane,{attached:!1},r.a.createElement(Ve,null))}}];return r.a.createElement(r.a.Fragment,null,r.a.createElement(Je.a,{className:"info",vertical:!0},r.a.createElement(me.a,{verticalAlign:"middle",stackable:!0,container:!0},r.a.createElement(me.a.Row,null,r.a.createElement(me.a.Column,{width:6},r.a.createElement(He.a,{src:"",bordered:!0,rounded:!0,size:"medium",floated:"left"})),r.a.createElement(me.a.Column,{width:8},r.a.createElement(A.a,{as:"h3"},t?t.name:r.a.createElement(ke.a,{active:!0})),r.a.createElement("p",null,"User description"))),r.a.createElement(me.a.Row,null,r.a.createElement(me.a.Column,{width:14},r.a.createElement(qe.a,{panes:n,menu:{pointing:!0}}))))))},Qe=Object(o.b)(function(e){return{user:x(e)}})(Ke),Xe=(n(400),function(e){var t=e.title,n=e.setTitle,a=e.content,c=e.setContent,l=e.description,o=e.setDescription,s=e.submit;Object(ie.a)(e,["title","setTitle","content","setContent","description","setDescription","submit"]);return r.a.createElement(me.a,{style:{height:"80vh"},verticalAlign:"middle",textAlign:"center"},r.a.createElement(me.a.Column,{style:{maxWidth:450}},r.a.createElement(A.a,{as:"h2",color:"blue",textAlign:"center"},"Add new blog"),r.a.createElement(de.a,{onSubmit:s},r.a.createElement(de.a.Input,{fluid:!0,label:"Title",value:t,onChange:function(e){var t=e.target;return n(t.value)}}),r.a.createElement(de.a.Input,{fluid:!0,label:"Description",value:l,onChange:function(e){var t=e.target;return o(t.value)}}),r.a.createElement(de.a.TextArea,{label:"Content",value:a,onChange:function(e){var t=e.target;return c(t.value)},placeholder:"Blog content..."}),r.a.createElement(de.a.Button,null,"Submit"))))}),Ye={addBlog:function(e,t){return function(n){var a;return u.a.async(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.a.awrap(g.create(e));case 2:a=r.sent,n({type:"ADD_BLOG",data:a}),t.push("/blogs/".concat(a.id),a.id);case 5:case"end":return r.stop()}})}},setNotification:re,initializeBlogs:S},Ze=Object(R.h)(Object(o.b)(function(e){return{user:e.auth,blogs:e.blogs.blogs,status:e.blogs.pending}},Ye)(function(e){var t=Object(a.useState)(""),n=Object(ue.a)(t,2),c=n[0],l=n[1],o=Object(a.useState)(),s=Object(ue.a)(o,2),i=s[0],m=s[1],d=Object(a.useState)(""),f=Object(ue.a)(d,2),p=f[0],b=f[1];return r.a.createElement(Xe,{title:c,setTitle:l,content:i,setContent:m,description:p,setDescription:b,submit:function(t){var n;return u.a.async(function(a){for(;;)switch(a.prev=a.next){case 0:t.preventDefault(),n={title:c,author:e.user.name,content:i,description:p,user:e.user.username};try{e.addBlog(n,e.history),e.setNotification("Blog succesfully added.","success")}catch(t){console.error(t),e.setNotification("An error has occurred.","error")}case 3:case"end":return a.stop()}})}})})),$e=(n(401),function(e){return r.a.createElement(me.a,{centered:!0,verticalAlign:"middle",columns:1},r.a.createElement(me.a.Column,{width:14},e.pending?r.a.createElement(ke.a,{className:"spinner",active:!0}):function(){var t=e.blogs.map(function(e){return r.a.createElement(me.a.Row,{key:_e()},r.a.createElement(ye,{key:e.id,blog:e}))}).reverse();return r.a.createElement(r.a.Fragment,null,t)}()))}),et={initializeBlogs:S},tt=Object(o.b)(function(e){return{blogs:e.blogs.blogs,pending:e.blogs.pending}},et)($e),nt=function e(t){return r.a.createElement(me.a,{container:!0,columns:"equal",direction:"row",justify:"center"},r.a.createElement(me.a.Row,{columns:3},r.a.createElement(e.List,null)))};nt.Card=ye,nt.List=tt,nt.New=Ze,nt.Single=Ge;var at=nt,rt=function(){var e=Object(a.useState)(""),t=Object(ue.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(""),s=Object(ue.a)(l,2),i=s[0],m=s[1],d=Object(a.useState)(""),f=Object(ue.a)(d,2),p=f[0],b=f[1],g=Object(a.useState)(""),E=Object(ue.a)(g,2),h=(E[0],E[1],Object(a.useState)(!1)),v=Object(ue.a)(h,2),w=v[0],y=v[1],x=Object(o.c)();return r.a.createElement(me.a,{style:{height:"80vh"},verticalAlign:"middle",textAlign:"center"},r.a.createElement(me.a.Column,{style:{maxWidth:450}},r.a.createElement(A.a,{as:"h2",color:"blue",textAlign:"center"},"Register new account"),r.a.createElement(de.a,{onSubmit:function(e){if(e.preventDefault(),!1===w){var t={username:n,name:i,password:p};try{x((a=t,function(e){var t;return u.a.async(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.a.awrap(O(a));case 2:t=n.sent,e({type:"REGISTER_USER",data:t});case 4:case"end":return n.stop()}})})),x(re("User succesfully added.","success"))}catch(r){x(re("An error has occurred.","error"))}}else y(!1),setTimeout(function(){return[]},5e3);var a;c(""),m(""),b("")}},r.a.createElement(de.a.Input,{label:"Username",value:n,onChange:function(e){var t=e.target;return c(t.value)},placeholder:"Enter username...",minLength:3,required:!0}),r.a.createElement(de.a.Input,{label:"Name",value:i,onChange:function(e){var t=e.target;return m(t.value)},placeholder:"Enter name...",minLength:3,required:!0}),r.a.createElement(de.a.Input,{type:"password",label:"Password",value:p,onChange:function(e){var t=e.target;return b(t.value)},placeholder:"Enter password...",required:!0,minLength:5}),r.a.createElement(de.a.Button,null,"Register"))))},ct=Object(o.b)(function(e){return{auth:e.auth,users:e.users,blogs:e.blogs}})(function(e){return r.a.createElement(R.d,null,r.a.createElement(R.b,{exact:!0,path:"/"},r.a.createElement(Se,null)),r.a.createElement(R.b,{exact:!0,path:"/blogs"},r.a.createElement(at,null)),r.a.createElement(R.b,{exact:!0,path:"/register"},r.a.createElement(rt,null)),r.a.createElement(ve,{exact:!0,path:"/users/:id",render:function(t){var n=t.match;return r.a.createElement(he,{user:y(e.users,n.params.id)})}}),r.a.createElement(R.b,{exact:!0,path:"/blogs/:id",render:function(t){var n=t.match;return r.a.createElement(Ge,{full:!0,blog:I(e.blogs,n.params.id),currentUser:e.auth})}}),r.a.createElement(R.b,{exact:!0,path:"/login"},r.a.createElement(be,null)),r.a.createElement(ve,{exact:!0,path:"/profile"},r.a.createElement(Qe,null)),r.a.createElement(ve,{exact:!0,path:"/new",render:function(){return r.a.createElement(Ze,null)}}))}),lt={setUser:function(e){return function(t){return u.a.async(function(n){for(;;)switch(n.prev=n.next){case 0:g.api.token=null===e||void 0===e?void 0:e.token,t({type:"SET_USER",data:e});case 2:case"end":return n.stop()}})}},initializeBlogs:S,initializeUsers:function(){return function(e){var t;return u.a.async(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.a.awrap(w());case 2:t=n.sent,e({type:"INIT_USERS",data:t});case 4:case"end":return n.stop()}})}}},ot=Object(o.b)(null,lt)(function(e){return Object(a.useEffect)(function(){e.initializeBlogs(),e.initializeUsers()},[]),Object(a.useEffect)(function(){var t=window.localStorage.getItem("loggedUser");if(t){var n=JSON.parse(t);e.setUser(n)}else e.setUser(null)},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(_.a,{basename:"/bloglist"},r.a.createElement(se,null),r.a.createElement(P,null),r.a.createElement(ct,null)))}),st=n(68),ut=n(224),it=n(225),mt={pending:!1,error:null,blogs:[]},dt={status:!1,content:"",category:""},ft={token:"",username:"",id:"",name:""},pt=[],bt=Object(st.combineReducers)({blogs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_BLOG":return Object(j.a)({},e,{blogs:[].concat(Object(k.a)(e.blogs),[t.data])});case"DELETE_BLOG":return Object(j.a)({},e,{blogs:e.blogs.filter(function(e){return e.id!==t.data.id})});case"UPDATE_BLOG":return null;case"ADD_VOTE":case"ADD_COMMENT":return Object(j.a)({},e,{blogs:Ne(t.data,t.data.id,e.blogs)});case"INIT_BLOGS_PENDING":return Object(j.a)({},e,{pending:!0});case"INIT_BLOGS_SUCCESS":return{pending:!1,blogs:t.data,error:null};case"INIT_BLOGS_FAILURE":return Object(j.a)({},e,{pending:!1,error:t.error});default:return e}},notification:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:dt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NOTIFICATION":case"CLEAR_NOTIFICATION":return t.data;default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ft,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return t.data;case"LOGOUT":return null;case"SET_USER":return t.data;case"SET_TOKEN":return Object(j.a)({},e,{token:t.data});default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_USERS":return t.data;case"DELETE_USER":return[e.filter(function(e){return e.id===t.data.id})];case"REGISTER_USER":return[].concat(Object(k.a)(e),[t.data]);default:return e}}}),gt=Object(st.createStore)(bt,Object(it.composeWithDevTools)(Object(st.applyMiddleware)(ut.a))),Et=(n(402),function(){l.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{store:gt},r.a.createElement(ot,null))),document.getElementById("root"))});Et(),gt.subscribe(Et)}},[[243,1,2]]]);
//# sourceMappingURL=main.eb65e39b.chunk.js.map