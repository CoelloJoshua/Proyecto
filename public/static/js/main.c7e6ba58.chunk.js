(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{37:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(31),i=c.n(r),a=(c(37),c(2)),j=c(3),l=c(8),o=c(0),u=function(e){var t=e.user,c=e.setUser,n=Object(j.f)();return Object(o.jsx)("div",{className:"Navbar",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(l.b,{to:"/",children:"Inicio"})}),Object(o.jsx)("li",{children:Object(o.jsx)(l.b,{to:"/register",children:"Registrarse"})}),Object(o.jsx)("li",{children:t?Object(o.jsx)("button",{onClick:function(e){localStorage.removeItem("token"),c(!1),n.push("/")},children:"Logout"}):Object(o.jsx)(l.b,{to:"/login",children:"Ingresar"})})]})})},b=function(e){var t=e.user,c=e.setUser,n=t.firstName;return Object(o.jsxs)("div",{className:"Header",children:[Object(o.jsx)("h3",{children:"la35trivia"}),t&&Object(o.jsxs)("p",{children:["Hola de nuevo, ",n]}),Object(o.jsx)(u,{user:t,setUser:c})]})},d=c(12),h=c(6),O=c(5),x=c.n(O),p=function(e){var t=Object(n.useState)({username:"",password:"",firstName:"",lastName:""}),c=Object(a.a)(t,2),s=c[0],r=c[1],i=s.username,j=s.password,l=s.firstName,u=s.lastName,b=function(e){var t=e.target.name,c=e.target.value;r(Object(h.a)(Object(h.a)({},s),{},Object(d.a)({},t,c)))};return Object(o.jsxs)("div",{className:"Register",children:[Object(o.jsx)("h1",{children:"Registrarse"}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),x.a.post("/api/users",s).then((function(e){r({username:"",password:"",firstName:"",lastName:""})}))},children:[Object(o.jsx)("label",{children:"Usuario"}),Object(o.jsx)("input",{type:"text",name:"username",value:i,onChange:b}),Object(o.jsx)("label",{children:"Contrase\xf1a"}),Object(o.jsx)("input",{type:"password",name:"password",value:j,onChange:b}),Object(o.jsx)("label",{children:"Nombre"}),Object(o.jsx)("input",{type:"text",name:"firstName",value:l,onChange:b}),Object(o.jsx)("label",{children:"Apellido"}),Object(o.jsx)("input",{type:"text",name:"lastName",value:u,onChange:b}),Object(o.jsx)("button",{type:"submit",children:"Registrarse"})]})]})},m=function(e){var t=Object(j.f)(),c=Object(n.useState)({username:"",password:""}),s=Object(a.a)(c,2),r=s[0],i=s[1],l=r.username,u=r.password,b=function(e){var t=e.target.name,c=e.target.value;i(Object(h.a)(Object(h.a)({},r),{},Object(d.a)({},t,c)))};return Object(o.jsxs)("div",{className:"Login",children:[Object(o.jsx)("h1",{children:"Ingresar"}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),x.a.post("/api/users/login",r).then((function(e){localStorage.setItem("token",e.data.token),i({username:"",password:""}),t.push("/dashboard")}))},children:[Object(o.jsx)("label",{children:"Usuario"}),Object(o.jsx)("input",{type:"text",name:"username",value:l,onChange:b}),Object(o.jsx)("label",{children:"Contrase\xf1a"}),Object(o.jsx)("input",{type:"password",name:"password",value:u,onChange:b}),Object(o.jsx)("button",{type:"submit",children:"Ingresar"})]})]})},f=c(16),v=function(e){var t=e.user,c=e.setShow;return Object(o.jsxs)("div",{className:"Sidebar",children:[Object(o.jsx)("button",{onClick:function(){return c("play")},children:"Jugar"}),Object(o.jsx)("button",{onClick:function(){return c("profile")},children:"Perfil"}),"student"!==t.role&&Object(o.jsx)("button",{onClick:function(){return c("new")},children:"Nueva trivia"}),"admin"===t.role&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("button",{onClick:function(){return c("users")},children:"Usuarios"}),Object(o.jsx)("button",{onClick:function(){return c("quizzes")},children:"Trivias"}),Object(o.jsx)("button",{onClick:function(){return c("scores")},children:"Puntajes"})]})]})},g=function(e){var t=e.quiz,c=e.setPlaying,n=t.title,s=t.subject,r=t.topic,i=t.questions;return Object(o.jsxs)("div",{className:"QuizCard",children:[Object(o.jsx)("h3",{children:n}),Object(o.jsxs)("p",{children:["Materia: ",s]}),Object(o.jsxs)("p",{children:["Tema: ",r]}),Object(o.jsxs)("p",{children:["Preguntas: ",i.length]}),Object(o.jsx)("button",{onClick:function(){return c(t)},children:"Jugar"})]})},N=function(e){var t=e.quiz,c=t.title,s=t.questions,r=Object(n.useState)(0),i=Object(a.a)(r,2),j=i[0],u=i[1],b=Object(n.useState)(0),d=Object(a.a)(b,2),h=d[0],O=d[1],p=function(e){var t=parseInt(e.target.id);u((function(e){return e+1})),t===s[j].correctAnswer&&O((function(e){return e+1}))};return Object(n.useEffect)((function(){if(j===s.length){var e={quiz:t._id,score:h};x.a.post("/api/scores",e,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){return null}))}})),Object(o.jsxs)("div",{className:"Quiz",children:[Object(o.jsxs)("h3",{children:["Trivia: ",c]}),j<s.length&&Object(o.jsxs)("div",{className:"QuizQuestion",children:[Object(o.jsx)("p",{children:s[j].description}),Object(o.jsx)("form",{children:s[j].options.map((function(e,t){return Object(o.jsx)("button",{onClick:p,type:"button",id:t,children:e},t)}))})]}),j===s.length&&Object(o.jsxs)("div",{className:"QuizFinished",children:[Object(o.jsxs)("p",{children:["Puntaje: ",h]}),Object(o.jsx)(l.b,{to:"/dashboard",children:"Volver"})]})]})},z=function(e){var t=e.quizzes,c=Object(n.useState)(!1),s=Object(a.a)(c,2),r=s[0],i=s[1];return Object(o.jsxs)("div",{className:"Play",children:[!r&&Object(o.jsx)("div",{className:"QuizList",children:t.map((function(e){return Object(o.jsx)(g,{quiz:e,setPlaying:i},e._id)}))}),r&&Object(o.jsx)(N,{quiz:r})]})},y=function(e){var t=e.user,c=e.userScores,n=t.username,s=t.firstName,r=t.lastName,i=t.role;return Object(o.jsxs)("div",{className:"Profile",children:[Object(o.jsx)("h2",{children:"Perfil"}),Object(o.jsx)("h3",{children:n}),Object(o.jsxs)("p",{children:["Nombre y apellido: ",s," ",r]}),Object(o.jsxs)("p",{children:["Rol: ",i]}),Object(o.jsx)("hr",{}),Object(o.jsx)("h3",{children:"Puntajes:"}),c.map((function(e){return Object(o.jsxs)("p",{children:[e.quiz.title,": ",e.score]},e._id)}))]})},C=function(e){var t=e.addQuiz,c=Object(n.useState)({title:"",subject:"",topic:"",questions:[]}),s=Object(a.a)(c,2),r=s[0],i=s[1],j=Object(n.useState)({description:"",options:["","","",""],correctAnswer:0}),l=Object(a.a)(j,2),u=l[0],b=l[1],O=r.title,x=r.subject,p=r.topic,m=r.questions,v=u.description,g=u.options,N=function(e){var t=e.target.name,c=e.target.value;if("title"===t||"subject"===t||"topic"===t)i(Object(h.a)(Object(h.a)({},r),{},Object(d.a)({},t,c)));else if("description"===t)b(Object(h.a)(Object(h.a)({},u),{},Object(d.a)({},t,c)));else if("correctAnswer"===t)b(Object(h.a)(Object(h.a)({},u),{},Object(d.a)({},t,parseInt(c))));else if("options"===t){var n=parseInt(e.target.id),s=Object(f.a)(g);s[n]=c,b(Object(h.a)(Object(h.a)({},u),{},{options:s}))}};return Object(o.jsxs)("div",{className:"AddQuiz",children:[Object(o.jsx)("h2",{children:"Nueva trivia"}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(r),i({title:"",subject:"",topic:"",questions:[]})},children:[Object(o.jsx)("label",{children:"T\xedtulo"}),Object(o.jsx)("input",{type:"text",name:"title",value:O,onChange:N}),Object(o.jsx)("label",{children:"Materia"}),Object(o.jsx)("input",{type:"text",name:"subject",value:x,onChange:N}),Object(o.jsx)("label",{children:"Tema"}),Object(o.jsx)("input",{type:"text",name:"topic",value:p,onChange:N}),Object(o.jsxs)("p",{children:["Preguntas: ",m.length]}),Object(o.jsx)("hr",{}),Object(o.jsxs)("div",{className:"Question",children:[Object(o.jsx)("label",{children:"Pregunta"}),Object(o.jsx)("textarea",{name:"description",rows:"6",value:v,onChange:N}),Object(o.jsx)("label",{children:"Opci\xf3n A"}),Object(o.jsx)("input",{type:"text",name:"options",id:"0",value:g[0],onChange:N}),Object(o.jsx)("label",{children:"Opci\xf3n B"}),Object(o.jsx)("input",{type:"text",name:"options",id:"1",value:g[1],onChange:N}),Object(o.jsx)("label",{children:"Opci\xf3n C"}),Object(o.jsx)("input",{type:"text",name:"options",id:"2",value:g[2],onChange:N}),Object(o.jsx)("label",{children:"Opci\xf3n D"}),Object(o.jsx)("input",{type:"text",name:"options",id:"3",value:g[3],onChange:N}),Object(o.jsx)("p",{children:"Respuesta correcta"}),Object(o.jsxs)("div",{className:"Answers",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{value:0,onChange:N,type:"radio",name:"correctAnswer"}),Object(o.jsx)("label",{children:"A"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{value:1,onChange:N,type:"radio",name:"correctAnswer"}),Object(o.jsx)("label",{children:"B"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{value:2,onChange:N,type:"radio",name:"correctAnswer"}),Object(o.jsx)("label",{children:"C"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{value:3,onChange:N,type:"radio",name:"correctAnswer"}),Object(o.jsx)("label",{children:"D"})]})]})]}),Object(o.jsx)("hr",{}),Object(o.jsx)("button",{onClick:function(e){i(Object(h.a)(Object(h.a)({},r),{},{questions:[].concat(Object(f.a)(m),[u])})),b({description:"",options:["","","",""],correctAnswer:0})},type:"button",children:"Agregar pregunta"}),Object(o.jsx)("button",{className:"primary",type:"submit",children:"Guardar trivia"})]})]})},S=function(e){var t=e.user,c=e.updateUser,n=e.deleteUser;return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:t._id}),Object(o.jsx)("td",{children:t.username}),Object(o.jsx)("td",{children:t.firstName}),Object(o.jsx)("td",{children:t.lastName}),Object(o.jsx)("td",{children:t.role}),Object(o.jsx)("td",{children:Object(o.jsx)("button",{onClick:function(e){var n=prompt("Nombre?")||t.firstName,s=prompt("Apellido?")||t.lastName,r=prompt("Rol?")||t.role;c(t._id,{firstName:n,lastName:s,role:r})},children:"Editar"})}),Object(o.jsx)("td",{children:Object(o.jsx)("button",{onClick:function(){return n(t._id)},children:"Borrar"})})]})},A=function(e){var t=Object(n.useState)([]),c=Object(a.a)(t,2),s=c[0],r=c[1];Object(n.useEffect)((function(){x.a.get("/api/users",{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){return r(e.data)}))}),[]);var i=function(e){x.a.delete("/api/users/"+e,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(t){return r(s.filter((function(t){return t._id!==e})))}))},j=function(e,t){x.a.put("/api/users/"+e,t,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(t){var c=s.map((function(c){return c._id===e?t.data:c}));r(c)}))};return Object(o.jsxs)("div",{className:"UsersTable",children:[Object(o.jsx)("h2",{children:"Usuarios"}),Object(o.jsxs)("table",{children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"ID"}),Object(o.jsx)("th",{children:"Nombre de usuario"}),Object(o.jsx)("th",{children:"Nombre"}),Object(o.jsx)("th",{children:"Apellido"}),Object(o.jsx)("th",{children:"Rol"}),Object(o.jsx)("th",{colspan:"2",children:"Acciones"})]})}),Object(o.jsx)("tbody",{children:s.map((function(e){return Object(o.jsx)(S,{user:e,updateUser:j,deleteUser:i},e._id)}))})]})]})},k=function(e){var t=e.quizzes;return Object(o.jsxs)("div",{className:"QuizzesTable",children:[Object(o.jsx)("h2",{children:"Trivias"}),Object(o.jsxs)("table",{children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"ID"}),Object(o.jsx)("th",{children:"T\xedtulo"}),Object(o.jsx)("th",{children:"Materia"}),Object(o.jsx)("th",{children:"Tema"}),Object(o.jsx)("th",{children:"Preguntas"}),Object(o.jsx)("th",{colspan:"2",children:"Acciones"})]})}),Object(o.jsx)("tbody",{children:t.map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e._id}),Object(o.jsx)("td",{children:e.title}),Object(o.jsx)("td",{children:e.subject}),Object(o.jsx)("td",{children:e.topic}),Object(o.jsx)("td",{children:e.questions.length}),Object(o.jsx)("td",{children:Object(o.jsx)("button",{children:"Editar"})}),Object(o.jsx)("td",{children:Object(o.jsx)("button",{children:"Borrar"})})]},e._id)}))})]})]})},w=function(e){var t=Object(n.useState)([]),c=Object(a.a)(t,2),s=c[0],r=c[1];return Object(n.useEffect)((function(){x.a.get("/api/scores",{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){return r(e.data)}))}),[]),Object(o.jsxs)("div",{className:"ScoresTable",children:[Object(o.jsx)("h2",{children:"Puntajes"}),Object(o.jsxs)("table",{children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"ID"}),Object(o.jsx)("th",{children:"Trivia"}),Object(o.jsx)("th",{children:"Usuario"}),Object(o.jsx)("th",{children:"Puntaje"}),Object(o.jsx)("th",{colspan:"2",children:"Acciones"})]})}),Object(o.jsx)("tbody",{children:s.map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e._id}),Object(o.jsx)("td",{children:e.quiz.title}),Object(o.jsx)("td",{children:e.user.username}),Object(o.jsx)("td",{children:e.score}),Object(o.jsx)("td",{children:Object(o.jsx)("button",{children:"Editar"})}),Object(o.jsx)("td",{children:Object(o.jsx)("button",{children:"Borrar"})})]},e._id)}))})]})]})},q=function(e){var t=e.user,c=e.setUser,s=Object(n.useState)("play"),r=Object(a.a)(s,2),i=r[0],j=r[1],l=Object(n.useState)([]),u=Object(a.a)(l,2),b=u[0],d=u[1];Object(n.useEffect)((function(){x.a.get("/api/users/me",{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){return c(e.data)})).catch((function(e){return c(!1)}))}),[c]),Object(n.useEffect)((function(){x.a.get("/api/quizzes",{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){return d(e.data)}))}),[]);var h=Object(n.useState)([]),O=Object(a.a)(h,2),p=O[0],m=O[1];Object(n.useEffect)((function(){x.a.get("/api/scores/"+t._id,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){return m(e.data)}))}),[t._id]);return Object(o.jsxs)("div",{className:"Dashboard",children:[Object(o.jsx)(v,{user:t,setShow:j}),"play"===i&&Object(o.jsx)(z,{quizzes:b}),"profile"===i&&Object(o.jsx)(y,{userScores:p,user:t}),"new"===i&&Object(o.jsx)(C,{addQuiz:function(e){x.a.post("/api/quizzes",e,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){return d([].concat(Object(f.a)(b),[e.data]))}))}}),"users"===i&&Object(o.jsx)(A,{}),"quizzes"===i&&Object(o.jsx)(k,{quizzes:b}),"scores"===i&&Object(o.jsx)(w,{})]})},I=function(e){return Object(o.jsxs)("div",{className:"Landing",children:[Object(o.jsx)("h1",{children:"la35trivia"}),Object(o.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies, diam quis cursus fermentum, diam risus luctus ligula, quis mollis diam turpis ut purus."}),Object(o.jsx)(l.b,{className:"primary",to:"/register",children:"Registrarse"}),Object(o.jsx)(l.b,{to:"/login",children:"Ya tengo usuario"})]})},U=function(e){var t=e.user,c=e.setUser;return Object(o.jsx)("div",{className:"Main",children:Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{path:"/register",children:Object(o.jsx)(p,{})}),Object(o.jsx)(j.a,{path:"/login",children:Object(o.jsx)(m,{})}),Object(o.jsx)(j.a,{path:"/dashboard",children:Object(o.jsx)(q,{user:t,setUser:c})}),Object(o.jsx)(j.a,{path:"/",children:Object(o.jsx)(I,{})})]})})},B=function(e){return Object(o.jsxs)("div",{className:"Footer",children:[Object(o.jsx)("h2",{children:"la35trivia 2021"}),Object(o.jsx)("p",{children:Object(o.jsx)("a",{href:"https://github.com/santiagotrini/la35trivia",children:"GitHub"})})]})},P=function(){var e=Object(n.useState)(!1),t=Object(a.a)(e,2),c=t[0],s=t[1];return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(b,{setUser:s,user:c}),Object(o.jsx)(U,{user:c,setUser:s}),Object(o.jsx)(B,{})]})};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(l.a,{children:Object(o.jsx)(P,{})})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.c7e6ba58.chunk.js.map