(this["webpackJsonpreact-test-create-app"]=this["webpackJsonpreact-test-create-app"]||[]).push([[0],{11:function(t,e,n){t.exports=n.p+"static/media/logo.dc45a3a7.svg"},16:function(t,e,n){t.exports=n(26)},21:function(t,e,n){},22:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(10),c=n.n(o),s=(n(21),n(1)),i=n(2),l=n(3),u=n(4),d=n(11),p=n.n(d),f=(n(22),n(5)),h=n(6);function m(){var t=Object(f.a)(["\nfont-style : italic;\n"]);return m=function(){return t},t}var v=h.a.p(m()),b=n(25),g=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={done:t.props.done},t.changeStateOfTask=function(e){t.setState({done:!t.state.done})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.props.task.text,e=b({task:!0,done:this.state.done});return r.a.createElement("div",{className:e},r.a.createElement("p",null,r.a.createElement("input",{type:"checkbox",onChange:this.changeStateOfTask})),r.a.createElement(v,null," ",t))}}]),n}(a.Component);g.defaultProps={done:!1};var k=g;function E(){var t=Object(f.a)(["\n  border: 2px solid white;  \n  padding: 10px;\n  box-shadow: \n      inset 0 0 8px  rgba(0,0,0,0.1),\n            0 0 10px  rgb(142, 221, 135);\n  background:  #4a4d53;\n  font-size : 20px;\n  color : rgb(252, 255, 78);\n"]);return E=function(){return t},t}function O(){var t=Object(f.a)(["\n  background-color: #303238;\n  padding : 50px;\n  border-radius: 20%;\n"]);return O=function(){return t},t}function w(){var t=Object(f.a)(["\nfont-family: 'Josefin Sans', sans-serif;\n"]);return w=function(){return t},t}var y=h.a.h1(w()),j=h.a.div(O()),x=h.a.input(E()),S=function(t){var e=t.onChange,n=t.onSubmit,a=t.draft;return r.a.createElement("div",null,r.a.createElement(x,{type:"text",onChange:e,value:a}),r.a.createElement("button",{onClick:n},"Add new task"))},C=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={tasks:t.props.tasks,draft:""},t.updateDraft=function(e){t.setState({draft:e.target.value})},t.addTask=function(){var e=t.state,n=e.tasks,a=(e.draft,n);a.push({text:t.state.draft}),t.setState({tasks:a,draft:""})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.props.title,e=this.state,n=e.tasks,a=e.draft;return r.a.createElement(j,null,r.a.createElement(y,null," ",t),n.map((function(t){return r.a.createElement(k,{task:t})})),r.a.createElement(S,{onChange:this.updateDraft,onSubmit:this.addTask,draft:a}))}}]),n}(a.Component);C.defaultProps={tasks:[{text:"Eat pizza"},{text:"Watch hotel paradise"},{text:"Hug"}],title:"TODO LIST"};var T=C,z=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("body",null,r.a.createElement("div",null,r.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"})),r.a.createElement("p",null,r.a.createElement("div",null,r.a.createElement(T,null)))),r.a.createElement("footer",null,"Designed with the"," ",r.a.createElement("a",{href:"https://www.vecteezy.com/"},"Vecteezy Editor")))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.a197b60e.chunk.js.map