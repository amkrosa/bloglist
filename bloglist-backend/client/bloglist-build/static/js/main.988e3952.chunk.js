(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{242:function(e,t,n){e.exports=n(401)},381:function(e,t,n){},397:function(e,t,n){},399:function(e,t,n){},401:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(29),l=n.n(c),o=n(19),u=n(9),s=n.n(u),i=n(197),m=n(198),d=n(41),f=n.n(d),p=function(){function e(t,n){Object(i.a)(this,e),this._baseUrl=void 0,this._token=void 0,this._config=void 0,this._baseUrl=t,this._token="bearer ".concat(n)}return Object(m.a)(e,[{key:"get",value:function(e){var t;return s.a.async(function(n){for(;;)switch(n.prev=n.next){case 0:if("undefined"!==typeof e){n.next=6;break}return n.next=3,s.a.awrap(f.a.get(this._baseUrl));case 3:t=n.sent,n.next=9;break;case 6:return n.next=8,s.a.awrap(f.a.get("".concat(this._baseUrl,"/").concat(e)));case 8:t=n.sent;case 9:return n.abrupt("return",t.data);case 10:case"end":return n.stop()}},null,this)}},{key:"create",value:function(e,t,n){var a;return s.a.async(function(t){for(;;)switch(t.prev=t.next){case 0:if("undefined"!==typeof n){t.next=6;break}return t.next=3,s.a.awrap(f.a.post(this._baseUrl,e));case 3:a=t.sent,t.next=9;break;case 6:return t.next=8,s.a.awrap(f.a.post(this._baseUrl,e,this._config));case 8:a=t.sent;case 9:return t.abrupt("return",a.data);case 10:case"end":return t.stop()}},null,this)}},{key:"update",value:function(e,t,n){var a;return s.a.async(function(r){for(;;)switch(r.prev=r.next){case 0:if("undefined"!==typeof n){r.next=6;break}return r.next=3,s.a.awrap(f.a.put("".concat(this._baseUrl,"/").concat(t),e));case 3:a=r.sent,r.next=8;break;case 6:return r.next=8,s.a.awrap(f.a.put("".concat(this._baseUrl,"/").concat(t),e,this._config));case 8:return r.abrupt("return",a.data);case 9:case"end":return r.stop()}},null,this)}},{key:"remove",value:function(e,t){var n;return s.a.async(function(a){for(;;)switch(a.prev=a.next){case 0:if("undefined"!==typeof t){a.next=6;break}return a.next=3,s.a.awrap(f.a.delete("".concat(this._baseUrl,"/").concat(e)));case 3:n=a.sent,a.next=9;break;case 6:return a.next=8,s.a.awrap(f.a.delete("".concat(this._baseUrl,"/").concat(e),this._config));case 8:n=a.sent;case 9:return a.abrupt("return",n.data);case 10:case"end":return a.stop()}},null,this)}},{key:"comment",value:function(e,t){var n;return s.a.async(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.a.awrap(f.a.post("".concat(this._baseUrl,"/").concat(t,"/comments"),e,this._config));case 2:return n=a.sent,a.abrupt("return",n.data);case 4:case"end":return a.stop()}},null,this)}},{key:"login",value:function(e){var t;return s.a.async(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.awrap(f.a.post(this._baseUrl,e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}},null,this)}},{key:"token",set:function(e){this._token="bearer ".concat(e),this._config={headers:{Authorization:this._token}}},get:function(){return void 0!==this._token?this._token:null}}]),e}(),g=new p("/bloglist/api/blogs"),b={getAll:function(){return s.a.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.awrap(g.get());case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}})},get:function(e){return s.a.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.awrap(g.get(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}})},create:function(e){return s.a.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.awrap(g.create(e,void 0,!0));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}})},update:function(e,t){return s.a.async(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.awrap(g.update(e,t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}})},remove:function(e){return s.a.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.awrap(g.remove(e,!0));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.error(t.t0);case 8:case"end":return t.stop()}},null,null,[[0,5]])},comment:function(e,t){return s.a.async(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.awrap(g.comment(e,t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}})},api:g},E=new p("/bloglist/api/login"),h=function(e){return s.a.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.awrap(E.login(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}})},v=new p("/bloglist/api/users"),w=function(){return s.a.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.awrap(v.get());case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}})},y=function(e,t){return e.filter(function(e){return e.id===t})[0]},O=function(e){return y(e.users,e.auth.id)},x=n(39),k=function(){return function(e){var t;return s.a.async(function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:"INIT_BLOGS_PENDING"}),n.prev=1,console.log("initializeBlogs"),n.next=5,s.a.awrap(b.getAll());case 5:t=n.sent,e({type:"INIT_BLOGS_SUCCESS",data:t}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),e({type:"INIT_BLOGS_FAILURE",error:n.t0});case 12:case"end":return n.stop()}},null,null,[[1,9]])}},I=function(e,t){return e.blogs.filter(function(e){return e.id===t})[0]},j=function(e,t){return e.blogs.blogs.sort(function(e,t){return e.likes-t.likes}).reverse().slice(0,t)},S=function(e,t){return e.blogs.blogs.reverse().slice(0,t)},_=n(49),N=n(446),C=n(226),T=n(444),U=n(443),A=n(440),L=n(85),D=function(){return r.a.createElement(A.a,{item:!0,icon:"bars",simple:!0},r.a.createElement(A.a.Menu,null,r.a.createElement(A.a.Item,null,r.a.createElement(L.a,{name:"dropdown"}),r.a.createElement("span",{className:"text"},"New"),r.a.createElement(A.a.Menu,null,r.a.createElement(A.a.Item,null,"Document"),r.a.createElement(A.a.Item,null,"Image"))),r.a.createElement(A.a.Item,null,"Open"),r.a.createElement(A.a.Item,null,"Save..."),r.a.createElement(A.a.Item,null,"Edit Permissions"),r.a.createElement(A.a.Divider,null),r.a.createElement(A.a.Header,null,"Export"),r.a.createElement(A.a.Item,null,"Share")))},B=(n(381),function(e){var t;return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{minWidth:500,as:C.a,size:"large",secondary:!0,className:"navbar"},r.a.createElement(C.a.Item,{name:"/",content:"Home",link:!0,href:"/bloglist"}),r.a.createElement(C.a.Item,{name:"/blogs",content:"Blogs",link:!0,href:"/bloglist/blogs"}),r.a.createElement(C.a.Item,{name:"/profile",content:"Profile",link:!0,href:"/bloglist/profile"}),r.a.createElement(C.a.Menu,{position:"right"},(null===(t=e.auth)||void 0===t?void 0:t.token)?r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a.Item,null,r.a.createElement(T.a,{as:"h4"},"Logged in as ",e.auth.name)),r.a.createElement(C.a.Item,{name:"logout",active:!0,onClick:function(){e.logout(),window.location.reload()}})):r.a.createElement(U.a.Group,null,r.a.createElement(C.a.Item,null,r.a.createElement(U.a.Group,null,r.a.createElement(U.a,{positive:!0,as:"a",href:"./register"},"Signup"),r.a.createElement(U.a.Or,null),r.a.createElement(U.a,{color:"blue",as:"a",href:"./login"},"Login")))))),r.a.createElement(N.a,{maxWidth:499,as:C.a},r.a.createElement(D,null)))}),G={logout:function(){return function(e){return s.a.async(function(t){for(;;)switch(t.prev=t.next){case 0:window.localStorage.removeItem("loggedUser"),b.api.token=null,e({type:"LOGOUT"});case 3:case"end":return t.stop()}})}}},R=Object(o.b)(function(e){return{auth:e.auth}},G)(B),F=n(217),M=n.n(F),P=n(218),z=n.n(P),V=n(216),H=n.n(V),J=n(215),W=n.n(J),q=n(219),K=n.n(q),Q=n(427),X=n(437),Y=n(445),Z=n(430),$=n(116),ee=n(429),te=n(20),ne=function(e,t){return{type:"SET_NOTIFICATION",data:{status:!0,content:e,category:t}}},ae=function(){return{type:"CLEAR_NOTIFICATION",data:{status:!1,content:"",category:""}}},re=function(e,t,n){return function(a){return s.a.async(function(a){for(;;)switch(a.prev=a.next){case 0:ne(e,t),setTimeout(function(){return ae},1e3*n);case 2:case"end":return a.stop()}})}},ce={clearNotification:ae,setTimedNotification:re},le=Object(o.b)(function(e){return{notification:e.notification}},ce)(function(e){var t=Object(Q.a)(function(e){return{success:{backgroundColor:$.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.main},warning:{backgroundColor:ee.a[700]},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"}}}),n={success:W.a,warning:H.a,error:M.a,info:z.a},a=t(),c=e.notification.category?n[e.notification.category]:n.info;return r.a.createElement(r.a.Fragment,null,r.a.createElement(X.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},key:"bottom, center",open:e.notification.status,onClose:e.clearNotification,autoHideDuration:3e3,ContentProps:{"aria-describedby":"message-id"}},r.a.createElement(Y.a,{className:a[e.notification.category],"aria-describedby":"client-snackbar",message:r.a.createElement("span",{id:"client-snackbar",className:a.message},r.a.createElement(c,{className:Object(te.a)(a.icon,a.iconVariant)}),e.notification.content),action:[r.a.createElement(Z.a,{key:"close","aria-label":"close",color:"inherit",onClick:e.clearNotification},r.a.createElement(K.a,{className:a.icon}))]})))}),oe=n(45),ue=n(44),se=n(227),ie=n(435),me=function(e){var t=e.username,n=e.setUsername,a=e.password,c=e.setPassword,l=e.handleLogin;e.history,Object(ue.a)(e,["username","setUsername","password","setPassword","handleLogin","history"]);return r.a.createElement(se.a,{style:{height:"80vh"},verticalAlign:"middle",textAlign:"center"},r.a.createElement(se.a.Column,{style:{maxWidth:450}},r.a.createElement(T.a,{as:"h2",color:"blue",textAlign:"center"},"Log-in to your account"),r.a.createElement(ie.a,{onSubmit:l},r.a.createElement(ie.a.Input,{label:"Username",value:t,onChange:function(e){var t=e.target;return n(t.value)},placeholder:"Enter username..."}),r.a.createElement(ie.a.Input,{type:"password",label:"Password",value:a,onChange:function(e){var t=e.target;return c(t.value)},placeholder:"Enter password..."}),r.a.createElement(ie.a.Button,null,"Login"))))},de=n(58),fe={login:function(e,t){return function(n){var a;return s.a.async(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.a.awrap(h({username:e,password:t}));case 2:a=r.sent,b.api.token=a.token,window.localStorage.setItem("loggedUser",JSON.stringify(a)),n({type:"LOGIN",data:a});case 6:case"end":return r.stop()}})}},setNotification:ne},pe=Object(o.b)(function(e){return{user:e.user}},fe)(function(e){var t=Object(a.useState)(""),n=Object(oe.a)(t,2),c=n[0],l=n[1],o=Object(a.useState)(""),u=Object(oe.a)(o,2),s=u[0],i=u[1],m=Object(de.g)();return r.a.createElement(me,{username:c,setUsername:l,password:s,setPassword:i,handleLogin:function(t){t.preventDefault();try{e.login(c,s),l(""),i(""),m.push("/")}catch(n){e.setNotification("error","An error has occured."),console.error(n)}}})}),ge=n(431),be=function(e){var t=Object(Q.a)(function(t){return{box:{width:e.width,margin:"0 auto",paddingTop:"5.8572em"}}})();return r.a.createElement(ge.a,{className:t.box,container:!0,alignItems:"center",spacing:2},e.children)},Ee=function(e){var t=e.user;return console.log(t),r.a.createElement(be,null,r.a.createElement("h3",null,"User ",t.name),r.a.createElement("h4",null,"added blogs: "),r.a.createElement("ul",null,t.blogs.map(function(e){return r.a.createElement("li",{key:e.id},e.title)})))},he=Object(o.b)(function(e){return{auth:e.auth}})(function(e){var t=e.auth,n=e.children,a=Object(ue.a)(e,["auth","children"]);return t?r.a.createElement(de.b,a,n):r.a.createElement(de.a,{to:"/"})}),ve=n(441),we=(n(397),Object(de.h)(function(e){var t=e.blog,n=e.history;return r.a.createElement(ve.a,{className:"blog card",onClick:function(){return n.push("/blogs/".concat(t.id),t.id)}},r.a.createElement(ve.a.Content,null,r.a.createElement(ve.a.Header,{content:t.title}),r.a.createElement(ve.a.Meta,{content:t.author}),r.a.createElement(ve.a.Description,{content:t.description})),r.a.createElement(ve.a.Content,{extra:!0},r.a.createElement("p",null,r.a.createElement("a",null,r.a.createElement(L.a,{name:"like"}),t.likes," likes")),r.a.createElement("a",null,r.a.createElement(L.a,{name:"comments"}),t.comments.length," comments")))})),ye=n(432),Oe=n(433),xe=n(436),ke=function(){return r.a.createElement(xe.a.Event,null,r.a.createElement(xe.a.Label,null,r.a.createElement("img",{src:""})),r.a.createElement(xe.a.Content,null,r.a.createElement(xe.a.Summary,null,r.a.createElement(xe.a.User,null,"Elliot Fu")," added you as a friend",r.a.createElement(xe.a.Date,null,"1 Hour Ago")),r.a.createElement(xe.a.Meta,null,r.a.createElement(xe.a.Like,null,r.a.createElement(L.a,{name:"like"}),"4 Likes"))))},Ie=function(){return r.a.createElement(xe.a,null,r.a.createElement(ke,null),r.a.createElement(ke,null),r.a.createElement(ke,null))},je=function(e){console.log(e.blogsMostPopular);var t=function(e){var t=e.blogs;return r.a.createElement(r.a.Fragment,null,t.map(function(e){return r.a.createElement(se.a.Column,{key:e.id,item:!0},r.a.createElement(we,{key:e.id,blog:e}))}))};return r.a.createElement(ye.a,null,e.pending?r.a.createElement(Oe.a,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(se.a,{container:!0,divided:!0,padded:!0,columns:"equal",direction:"column",justify:"center"},r.a.createElement(T.a,{as:"h4"},"Most popular"),r.a.createElement(se.a.Row,null,r.a.createElement(t,{blogs:e.blogsMostPopular})),r.a.createElement(T.a,{as:"h4"},"Recently added"),r.a.createElement(se.a.Row,null,r.a.createElement(t,{blogs:e.blogsRecentlyAdded})),r.a.createElement(se.a.Column,null,r.a.createElement(Ie,null)))))},Se=Object(o.b)(function(e){return{blogsMostPopular:j(e,3),blogsRecentlyAdded:S(e,3),pending:e.blogs.pending}})(je),_e=n(438),Ne=function(e){var t=e.comment,n=e.user;return r.a.createElement(_e.a,null,r.a.createElement(_e.a.Avatar,{src:"/"}),r.a.createElement(_e.a.Content,null,r.a.createElement(_e.a.Author,null,n),r.a.createElement(_e.a.Metadata,null,r.a.createElement("div",null,t.date),r.a.createElement("div",null,t.likes," likes")),r.a.createElement(_e.a.Text,null,t.content)))},Ce=n(69),Te=function(e,t,n){return function(e,t,n){return[].concat(Object(Ce.a)(n.slice(0,t)),[e],Object(Ce.a)(n.slice(t+1)))}(e,n.findIndex(function(t){return t.id===e.id}),n)},Ue=function(e){var t=e.comment,n=e.setComment,a=e.handleSubmit;Object(ue.a)(e,["comment","setComment","handleSubmit"]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(ie.a,{onSubmit:a},r.a.createElement(ie.a.TextArea,{label:"Content",value:t,onChange:function(e){var t=e.target;return n(t.value)},placeholder:"Comment..."}),r.a.createElement(ie.a.Button,{type:"submit"},r.a.createElement(L.a,{name:"plus",onClick:a}))))},Ae={addComment:function(e,t){return function(n){var a,r,c;return s.a.async(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,s.a.awrap(b.comment(t,e.id?e.id:""));case 2:r=l.sent,c=Object(x.a)({},e,{comments:null===e||void 0===e?void 0:null===(a=e.comments)||void 0===a?void 0:a.concat(r)}),n({type:"ADD_COMMENT",data:c});case 5:case"end":return l.stop()}})}},setTimedNotification:re,setNotification:ne},Le=Object(o.b)(function(e){return{user:e.auth.username,blogs:e.blogs}},Ae)(function(e){var t=Object(de.g)(),n=Object(a.useState)(!1),c=Object(oe.a)(n,2),l=(c[0],c[1]),o=Object(a.useState)(""),u=Object(oe.a)(o,2),s=u[0],i=u[1];return r.a.createElement(Ue,{comment:s,setComment:i,handleSubmit:function(n){if(n.preventDefault(),s.length<3)return e.setNotification("Too few characters","error"),l(!0),void setTimeout(function(){return l(!1)},3e3);var a={content:s,likes:0,user:e.user};i("");var r=I(e.blogs,t.location.state);e.addComment(r,a),e.setNotification("Comment succesfully added","success")}})}),De=function e(t){var n,a,c=t.comments,l=null!==(n=window.localStorage.getItem("loggedUser"))&&void 0!==n?n:"";l&&(a=JSON.parse(l));return r.a.createElement(r.a.Fragment,null,c.map(function(t){return r.a.createElement(e.Single,{key:"_"+Math.random().toString(36).substr(2,9),comment:t})}),a?r.a.createElement(e.New,null):null)};De.Single=Ne,De.New=Le;var Be=De,Ge=function(e){var t=e.blog,n=e.full,a=void 0!==n&&n,c=e.currentUser,l=Object(ue.a)(e,["blog","full","currentUser"]),o=Object(de.g)();return t?r.a.createElement(se.a,{verticalAlign:"middle",centered:!0,textAlign:"center"},r.a.createElement(se.a.Column,{className:"blog single"},a?r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a,{as:"h2"},t.title,r.a.createElement(T.a.Subheader,null,t.author),r.a.createElement(T.a,{as:"h4"},r.a.createElement("em",null,t.description))),r.a.createElement(ye.a,{text:!0},t.content),c.token?r.a.createElement("a",null,r.a.createElement(L.a,{color:"red",onClick:function(){return l.addVote(t)},name:"like"})):null,t.likes," likes",c.username===t.user.username?r.a.createElement(L.a,{onClick:function(){l.deleteBlog(t.id),o.push("/blogs")},name:"delete",className:"delete"}):"",r.a.createElement(_e.a.Group,null,r.a.createElement(T.a,{as:"h4",dividing:!0},"Comments"),r.a.createElement(Be,{comments:t.comments}))):r.a.createElement(T.a,{as:"h5",onClick:function(){return o.push("/blogs/".concat(t.id),t.id)}},t.title))):r.a.createElement(de.a,{to:"/"})},Re={addVote:function(e){return function(t){var n;return s.a.async(function(a){for(;;)switch(a.prev=a.next){case 0:return n=Object(x.a)({},e,{likes:e.likes+1}),a.next=3,s.a.awrap(b.update(n,e.id?e.id:""));case 3:t({type:"ADD_VOTE",data:n});case 4:case"end":return a.stop()}})}},deleteBlog:function(e){return function(t){return s.a.async(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.awrap(b.remove(e));case 2:t({type:"DELETE_BLOG",data:{id:e}});case 3:case"end":return n.stop()}})}}},Fe=Object(o.b)(null,Re)(Ge),Me=n(222),Pe=n.n(Me),ze=n(434),Ve=Object(Q.a)(function(e){return{button:{margin:e.spacing(1)}}}),He=function(e){var t=Ve();return r.a.createElement(ze.a,{variant:"contained",color:"secondary",className:t.button,startIcon:r.a.createElement(Pe.a,null)},"Delete account")},Je=function(e){return r.a.createElement("div",null,"lul")},We=n(442),qe=function(e){var t=[{menuItem:"Statistics",render:function(){return r.a.createElement(We.a.Pane,{attached:!1},r.a.createElement(Je,null))}},{menuItem:"Settings",render:function(){return r.a.createElement(We.a.Pane,{attached:!1},r.a.createElement(He,null))}}];return r.a.createElement(r.a.Fragment,null,r.a.createElement(We.a,{panes:t,menu:{pointing:!0}}))},Ke=Object(o.b)(function(e){return{user:O(e)}})(qe),Qe=function(e){var t=e.title,n=e.setTitle,a=e.content,c=e.setContent,l=e.description,o=e.setDescription,u=e.submit;Object(ue.a)(e,["title","setTitle","content","setContent","description","setDescription","submit"]);return r.a.createElement(se.a,{style:{height:"80vh"},verticalAlign:"middle",textAlign:"center"},r.a.createElement(se.a.Column,{style:{maxWidth:450}},r.a.createElement(T.a,{as:"h2",color:"blue",textAlign:"center"},"Add new blog"),r.a.createElement(ie.a,{onSubmit:u},r.a.createElement(ie.a.Input,{fluid:!0,label:"Title",value:t,onChange:function(e){var t=e.target;return n(t.value)}}),r.a.createElement(ie.a.TextArea,{label:"Content",value:a,onChange:function(e){var t=e.target;return c(t.value)},placeholder:"Blog content..."}),r.a.createElement(ie.a.Input,{fluid:!0,label:"Description",value:l,onChange:function(e){var t=e.target;return o(t.value)}}),r.a.createElement(ie.a.Button,null,"Submit"))))},Xe={addBlog:function(e,t){return function(n){var a;return s.a.async(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.a.awrap(b.create(e));case 2:a=r.sent,n({type:"ADD_BLOG",data:a}),t.push("/blogs/".concat(a.id));case 5:case"end":return r.stop()}})}},setNotification:ne,initializeBlogs:k},Ye=Object(de.h)(Object(o.b)(function(e){return{user:e.auth,blogs:e.blogs.blogs,status:e.blogs.pending}},Xe)(function(e){var t=Object(a.useState)(""),n=Object(oe.a)(t,2),c=n[0],l=n[1],o=Object(a.useState)(""),u=Object(oe.a)(o,2),i=u[0],m=u[1],d=Object(a.useState)(""),f=Object(oe.a)(d,2),p=f[0],g=f[1];return r.a.createElement(Qe,{title:c,setTitle:l,content:i,setContent:m,description:p,setDescription:g,submit:function(t){var n;return s.a.async(function(a){for(;;)switch(a.prev=a.next){case 0:t.preventDefault(),n={title:c,author:e.user.name,content:i,description:p,user:e.user.username};try{e.addBlog(n,e.history),e.setNotification("Blog succesfully added","success")}catch(t){console.error(t),e.setNotification("An error has occured","error")}case 3:case"end":return a.stop()}})}})})),Ze=(n(399),function(e){return r.a.createElement(se.a,{centered:!0,verticalAlign:"middle",columns:1},r.a.createElement(se.a.Column,{width:10},e.pending?r.a.createElement(Oe.a,null):function(){var t=e.blogs.map(function(e){return r.a.createElement(se.a.Row,null,r.a.createElement(we,{key:e.id,blog:e}))}).reverse();return r.a.createElement(r.a.Fragment,null,t)}()))}),$e={initializeBlogs:k},et=Object(o.b)(function(e){return{blogs:e.blogs.blogs,pending:e.blogs.pending}},$e)(Ze),tt=function e(t){return r.a.createElement(se.a,{container:!0,columns:"equal",direction:"row",justify:"center"},r.a.createElement(se.a.Row,{columns:3},r.a.createElement(e.List,null)))};tt.Card=we,tt.List=et,tt.New=Ye,tt.Single=Fe;var nt=tt,at=Object(o.b)(function(e){return{auth:e.auth,users:e.users,blogs:e.blogs}})(function(e){return r.a.createElement(de.d,null,r.a.createElement(de.b,{exact:!0,path:"/"},r.a.createElement(Se,null)),r.a.createElement(de.b,{exact:!0,path:"/blogs"},r.a.createElement(nt,null)),r.a.createElement(he,{exact:!0,path:"/users/:id",render:function(t){var n=t.match;return r.a.createElement(Ee,{user:y(e.users,n.params.id)})}}),r.a.createElement(de.b,{exact:!0,path:"/blogs/:id",render:function(t){var n=t.match;return r.a.createElement(Fe,{full:!0,blog:I(e.blogs,n.params.id),currentUser:e.auth})}}),r.a.createElement(de.b,{exact:!0,path:"/login"},r.a.createElement(pe,null)),r.a.createElement(he,{exact:!0,path:"/profile"},r.a.createElement(Ke,null)),r.a.createElement(he,{exact:!0,path:"/new",render:function(){return r.a.createElement(Ye,null)}}))}),rt={setUser:function(e){return function(t){return s.a.async(function(n){for(;;)switch(n.prev=n.next){case 0:b.api.token=e.token,t({type:"SET_USER",data:e});case 2:case"end":return n.stop()}})}},initializeBlogs:k,initializeUsers:function(){return function(e){var t;return s.a.async(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.awrap(w());case 2:t=n.sent,e({type:"INIT_USERS",data:t});case 4:case"end":return n.stop()}})}}},ct=Object(o.b)(null,rt)(function(e){return Object(a.useEffect)(function(){e.initializeBlogs(),e.initializeUsers()},[]),Object(a.useEffect)(function(){var t=window.localStorage.getItem("loggedUser");if(t){var n=JSON.parse(t);e.setUser(n)}else e.setUser({})},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(_.a,{basename:"/bloglist"},r.a.createElement(le,null),r.a.createElement(R,null),r.a.createElement(at,null)))}),lt=n(68),ot=n(223),ut=n(224),st={pending:!1,error:null,blogs:[]},it={status:!1,content:"",category:""},mt={token:"",username:"",id:"",name:""},dt=[],ft=Object(lt.combineReducers)({blogs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:st,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_BLOG":return Object(x.a)({},e,{blogs:[].concat(Object(Ce.a)(e.blogs),[t.data])});case"DELETE_BLOG":return Object(x.a)({},e,{blogs:e.blogs.filter(function(e){return e.id!==t.data.id})});case"UPDATE_BLOG":return null;case"ADD_VOTE":case"ADD_COMMENT":return Object(x.a)({},e,{blogs:Te(t.data,t.data.id,e.blogs)});case"INIT_BLOGS_PENDING":return Object(x.a)({},e,{pending:!0});case"INIT_BLOGS_SUCCESS":return{pending:!1,blogs:t.data,error:null};case"INIT_BLOGS_FAILURE":return Object(x.a)({},e,{pending:!1,error:t.error});default:return e}},notification:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:it,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NOTIFICATION":case"CLEAR_NOTIFICATION":return t.data;default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return t.data;case"LOGOUT":return null;case"SET_USER":return t.data;case"SET_TOKEN":return Object(x.a)({},e,{token:t.data});default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:dt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_USERS":return t.data;case"DELETE_USER":return[e.filter(function(e){return e.id===t.data.id})];case"REGISTER_USER":return[].concat(Object(Ce.a)(e),[t.data]);default:return e}}}),pt=Object(lt.createStore)(ft,Object(ut.composeWithDevTools)(Object(lt.applyMiddleware)(ot.a))),gt=(n(400),function(){l.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{store:pt},r.a.createElement(ct,null))),document.getElementById("root"))});gt(),pt.subscribe(gt)}},[[242,1,2]]]);
//# sourceMappingURL=main.988e3952.chunk.js.map