(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{41:function(e,t,a){},64:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(35),c=a.n(r),i=(a(41),a(42),a(63),a(64),a(13)),o=a(14),l=a(16),u=a(15),d=a(10),b=a(1),p=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsx)("nav",{className:"navbar navbar-expand-lg text-white bg-dark",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)(d.b,{className:"navbar-brand text-white bg-dark",to:"/",children:"PST-103"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"/navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(b.jsxs)("div",{className:"navbar-nav",children:[Object(b.jsx)(d.b,{className:"nav-link active text-white bg-dark","aria-current":"page",to:"/estudiantes",children:"Estudiantes"}),Object(b.jsx)(d.b,{className:"nav-link text-white bg-dark",to:"/profesores",children:"Profesores"})]})})]})})})}}]),a}(n.Component),h=a(8),j=a.n(h),v=a(12),m=a(22),f=a.n(m),x=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={users:[],idEstudiante:"",nombreEstudiante:"",apellidoEstudiante:""},e.onChangeId=function(t){e.setState({idEstudiante:t.target.value})},e.onChangeNombre=function(t){e.setState({nombreEstudiante:t.target.value})},e.onChangeApellido=function(t){e.setState({apellidoEstudiante:t.target.value})},e.onSubmit=function(){var t=Object(v.a)(j.a.mark((function t(a){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,f.a.post(O.host+":"+O.port+"/estudiantes",{id:e.state.idEstudiante,nombre:e.state.nombreEstudiante,apellido:e.state.apellidoEstudiante});case 4:n=t.sent,console.log(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),alert(t.t0.response.data);case 11:e.getEstudiantes(),e.setState({idEstudiante:""}),e.setState({nombreEstudiante:""}),e.setState({apellidoEstudiante:""});case 15:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),e.ondelete=function(){var e=Object(v.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a=t.target.getAttribute("id"),console.log(a);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"row mx-3",children:[Object(b.jsx)("div",{className:"col-md-4",children:Object(b.jsxs)("div",{className:"card card-body",children:[Object(b.jsx)("h4",{children:"Ingresar estudiante"}),Object(b.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("input",{type:"text",className:"form-control my-1",value:this.state.idEstudiante,placeholder:"Id",onChange:this.onChangeId}),Object(b.jsx)("input",{type:"text",className:"form-control my-1",value:this.state.nombreEstudiante,placeholder:"Nombre",onChange:this.onChangeNombre}),Object(b.jsx)("input",{type:"text",className:"form-control my-1",value:this.state.apellidoEstudiante,placeholder:"Apellido",onChange:this.onChangeApellido})]}),Object(b.jsx)("button",{className:"btn btn-primary my-3",type:"submit",children:"Guardar"})]})]})}),Object(b.jsx)("div",{className:"col-md-8",children:Object(b.jsx)("ul",{className:"list-group",children:this.state.users.map((function(t){return Object(b.jsx)("li",{className:"list-group-item list-group-item-action",id:t.id,onDoubleClick:e.ondelete,children:t.nombre+" "+t.apellido},t.id)}))})})]})})}},{key:"getEstudiantes",value:function(){var e=Object(v.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(O.host+":"+O.port+"/estudiantes");case 2:t=e.sent,this.setState({users:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(v.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getEstudiantes();case 2:console.log(this.state.users);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),a}(n.Component),g=a(2);var O={host:"http://localhost",port:8080},N=function(){return Object(b.jsxs)(d.a,{children:[Object(b.jsx)(p,{}),Object(b.jsx)(g.a,{path:"/estudiantes",exact:!0,component:x}),Object(b.jsx)(g.a,{path:"/profesores",render:function(){return Object(b.jsx)("div",{children:"Lista de Profesores"})}})]})};c.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.fd0ace4f.chunk.js.map