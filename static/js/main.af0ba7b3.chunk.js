(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(65)},35:function(e,t,a){},37:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),o=a.n(c),l=(a(35),a(3)),s=a(4),i=a(6),m=a(5),u=a(7),p=(a(37),a(39),a(67)),h=a(69),d=a(68),b=a(66),f=function(e){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{className:"navbar-brand",href:"/"},e.branding),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.a,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"})," Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.a,{to:"/add-contact",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"})," Add Contact")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.a,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"})," About"))))))};f.defaultProps={branding:"VeeWeb Code"};var v=f,E=a(8),y=a.n(E),g=a(12),N=a(29),C=a(14),j=a(13),O=a.n(j),k=r.a.createContext(),x=function(e,t){switch(t.type){case"DELETE_CONTACT":return Object(C.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==t.payload})});case"ADD_CONTACT":return Object(C.a)({},e,{contacts:[t.payload].concat(Object(N.a)(e.contacts))});case"UPDATE_CONTACT":return Object(C.a)({},e,{contacts:e.contacts.map(function(e){return e.id===t.payload.id?e=t.payload:e})});default:return e}},w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){a.setState(function(t){return x(t,e)})}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(g.a)(y.a.mark(function e(){var t;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,this.setState({contacts:t.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(k.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),S=k.Consumer,A=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},a.onShowClick=function(e){!0===a.state.showContactInfo?a.setState({showContactInfo:!1}):a.setState({showContactInfo:!0})},a.onDeleteClick=function(){var e=Object(g.a)(y.a.mark(function e(t,a){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a({type:"DELETE_CONTACT",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),a({type:"DELETE_CONTACT",payload:t});case 9:case"end":return e.stop()}},e,this,[[0,6]])}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.contact,a=this.state.showContactInfo;return r.a.createElement(S,null,function(n){var c=n.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,r.a.createElement("b",null,t.name)," ",r.a.createElement("i",{style:{cursor:"pointer"},onClick:e.onShowClick,className:"fas fa-sort-down pl-4 pr-3"})," ",r.a.createElement("span",{className:"text-right"},r.a.createElement("i",{onClick:e.onDeleteClick.bind(e,t.id,c),style:{cursor:"pointer",float:"right",color:"tomato"},className:"fas fa-trash"}),r.a.createElement(b.a,{to:"edit-contact/".concat(t.id)},r.a.createElement("i",{className:"fa fa-edit",style:{float:"right",marginRight:"30px",cursor:"pointer",color:"black"}})))),a?r.a.createElement("ul",{className:"list-group d-block"},r.a.createElement("li",{className:"list-group-item"},"Email: ",t.email),r.a.createElement("li",{className:"list-group-item"},"Phone: ",t.phone)):null)})}}]),t}(n.Component),T=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(S,null,function(e){var t=e.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"}," ",r.a.createElement("span",{className:"text-danger"},"Contact")," list"),t.map(function(e){return r.a.createElement(A,{key:e.id,contact:e})}))})}}]),t}(n.Component),D=a(15),q=a(27),P=a.n(q),_=function(e){var t=e.label,a=e.name,n=e.value,c=e.placeholder,o=e.type,l=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:""},t)," ",r.a.createElement("input",{value:n,placeholder:c,name:a,type:o,className:P()("form-control form-control-lg",{"is-invalid":s}),onChange:l}),s&&r.a.createElement("div",{className:"invalid-feedback"},a," is required!"))},I=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",error:{}},a.onChange=function(e){var t=e.target.value;a.setState(Object(D.a)({},e.target.name,t))},a.onSubmit=function(){var e=Object(g.a)(y.a.mark(function e(t,n){var r,c,o,l,s,i;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,""!==c||""!==o||""!==l){e.next=7;break}return a.setState({error:{name:"Name is required!",email:"Email is required!",phone:"Phone is required!"}}),e.abrupt("return");case 7:if(""!==c){e.next=12;break}return a.setState(Object(C.a)({},a.state,{error:{name:"Name is required!"}})),e.abrupt("return");case 12:if(""!==o){e.next=17;break}return a.setState({email:"Email is required!"}),e.abrupt("return");case 17:if(""!==l){e.next=22;break}return a.setState({phone:"Phone is required!"}),e.abrupt("return");case 22:return s={name:c,email:o,phone:l},e.next=25,O.a.post("https://jsonplaceholder.typicode.com/users",s);case 25:i=e.sent,t({type:"ADD_CONTACT",payload:i.data}),a.setState({name:"",email:"",phone:"",error:{}}),a.props.history.push("/");case 29:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone;return r.a.createElement(S,null,function(t){var o=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact "),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,o)},r.a.createElement(_,{label:"Name",name:"name",value:a,placeholder:"Enter name",type:"text",onChange:e.onChange,error:e.state.error.name}),r.a.createElement(_,{label:"Email",name:"email",value:n,placeholder:"Enter email",type:"email",onChange:e.onChange,error:e.state.error.email}),r.a.createElement(_,{label:"Phone",name:"phone",value:c,placeholder:"Enter Phone",type:"text",onChange:e.onChange,error:e.state.error.phone}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-block btn-light"}))))})}}]),t}(n.Component),M=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",error:{}},a.onChange=function(e){var t=e.target.value;a.setState(Object(D.a)({},e.target.name,t))},a.onSubmit=function(){var e=Object(g.a)(y.a.mark(function e(t,n){var r,c,o,l,s,i,m;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,""!==c||""!==o||""!==l){e.next=7;break}return a.setState({error:{name:"Name is required!",email:"Email is required!",phone:"Phone is required!"}}),e.abrupt("return");case 7:if(""!==c){e.next=12;break}return a.setState(Object(C.a)({},a.state,{error:{name:"Name is required!"}})),e.abrupt("return");case 12:if(""!==o){e.next=17;break}return a.setState({email:"Email is required!"}),e.abrupt("return");case 17:if(""!==l){e.next=22;break}return a.setState({phone:"Phone is required!"}),e.abrupt("return");case 22:return s={name:c,email:o,phone:l},i=a.props.match.params.id,e.next=26,O.a.put("https://jsonplaceholder.typicode.com/users/".concat(i),s);case 26:m=e.sent,t({type:"UPDATE_CONTACT",payload:m.data}),a.setState({name:"",email:"",phone:"",error:{}}),a.props.history.push("/");case 30:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(g.a)(y.a.mark(function e(){var t,a,n;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,O.a.get("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a=e.sent,n=a.data,this.setState({name:n.name,email:n.email,phone:n.phone});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone;return r.a.createElement(S,null,function(t){var o=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact "),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,o)},r.a.createElement(_,{label:"Name",name:"name",value:a,placeholder:"Enter name",type:"text",onChange:e.onChange,error:e.state.error.name}),r.a.createElement(_,{label:"Email",name:"email",value:n,placeholder:"Enter email",type:"email",onChange:e.onChange,error:e.state.error.email}),r.a.createElement(_,{label:"Phone",name:"phone",value:c,placeholder:"Enter Phone",type:"text",onChange:e.onChange,error:e.state.error.phone}),r.a.createElement("input",{type:"submit",value:"Update Contact",className:"btn btn-block btn-light"}))))})}}]),t}(n.Component),L=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contact Manager"),r.a.createElement("p",{className:"lead"},"Simple app to manage contact"),r.a.createElement("p",{className:"text-secendory"},"Version: 1.0.0"))},U=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"}," ",r.a.createElement("span",{className:"text-danger"},"404")," Page not found"),r.a.createElement("p",{className:"lead"},"Sorry that page does not exist!"))},W=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",body:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/posts/1").then(function(e){return e.json()}).then(function(t){return e.setState({title:t.title,body:t.body})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"text-success"},this.state.title),r.a.createElement("p",{className:"text-danger"},this.state.body))}}]),t}(n.Component),B=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(w,null,r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(v,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(h.a,null,r.a.createElement(d.a,{exact:!0,path:"/",component:T}),r.a.createElement(d.a,{exact:!0,path:"/about",component:L}),r.a.createElement(d.a,{exact:!0,path:"/add-contact",component:I}),r.a.createElement(d.a,{exact:!0,path:"/edit-contact/:id",component:M}),r.a.createElement(d.a,{exact:!0,path:"/test",component:W}),r.a.createElement(d.a,{component:U}))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,2,1]]]);
//# sourceMappingURL=main.af0ba7b3.chunk.js.map