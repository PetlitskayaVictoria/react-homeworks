(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,function(e,a,t){e.exports={hidden:"Navbar_hidden__1yDlk",menuContainer:"Navbar_menuContainer__3_C3Q",highlight:"Navbar_highlight__31Esg"}},,function(e,a,t){e.exports={messageContainer:"Message_messageContainer__3MCJP",contain:"Message_contain__2YF2a",textContainer:"Message_textContainer__294K-",userName:"Message_userName__3FYDl",userMessage:"Message_userMessage__1I5Tp",messageTime:"Message_messageTime__3SP_X"}},function(e,a,t){e.exports={tableStyle:"Affairs_tableStyle__rwb3D",buttonsStyle:"Affairs_buttonsStyle__21NeC",buttonStyle:"Affairs_buttonStyle__35Z9N"}},function(e,a,t){e.exports={container:"Greeting_container__11QLz",inputErrorContainer:"Greeting_inputErrorContainer__2fvmv",someClass:"Greeting_someClass__uGflL",error:"Greeting_error__1uvQ8",errorMessage:"Greeting_errorMessage__zEoF5",usersNumber:"Greeting_usersNumber__1cTwP"}},,,,function(e,a,t){e.exports={input:"SuperInputText_input__1P_Mf",superInput:"SuperInputText_superInput__3XH9u",errorInput:"SuperInputText_errorInput__3ei0N",error:"SuperInputText_error__2J82S"}},,function(e,a,t){e.exports={navbarContainer:"Header_navbarContainer__2AC6B",menuIcon:"Header_menuIcon__TP2Yh"}},function(e,a,t){e.exports={itemContainer:"Affair_itemContainer__8DUpj",task:"Affair_task__3MHEV",priority:"Affair_priority__1jVve"}},function(e,a,t){e.exports={buttonStyle:"SuperButton_buttonStyle__2a2ET",default:"SuperButton_default__-BXUG",red:"SuperButton_red__1kaz_"}},function(e,a,t){e.exports={messageContainer:"Error404_messageContainer__3Vx1w",mainImage:"Error404_mainImage__AJvNf",errorText:"Error404_errorText__2pAbT"}},,,,function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__Imn1x",spanClassName:"SuperCheckbox_spanClassName__1K9ch"}},,,,,function(e,a,t){e.exports={App:"App_App__1Sc4o"}},,function(e,a,t){e.exports={blue:"HW4_blue__2RJeg",column:"HW4_column__2ZS4I"}},,function(e,a,t){e.exports=t(42)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(26),c=t.n(l),o=(t(36),t(27)),s=t.n(o),i=t(2),u=t(15),m=t.n(u),_=t(6),E=t(5),d=t.n(E);var p=function(e){var a=function(){e.setCollapsed(!0)};return r.a.createElement("div",{className:e.isCollapsed?d.a.hidden:d.a.menuContainer},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(_.b,{onClick:a,to:"/pre-junior",className:d.a.menuItem,activeClassName:d.a.highlight},"PreJunior")),r.a.createElement("li",null,r.a.createElement(_.b,{onClick:a,to:"/junior",className:d.a.menuItem,activeClassName:d.a.highlight},"Junior")),r.a.createElement("li",null,r.a.createElement(_.b,{onClick:a,to:"/junior-plus",className:d.a.menuItem,activeClassName:d.a.highlight},"Junior Plus"))))};var f=function(){var e=Object(n.useState)(!0),a=Object(i.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:m.a.menuContainer},r.a.createElement("div",{className:m.a.navbarContainer},r.a.createElement("img",{onClick:function(){l(!t)},className:m.a.menuIcon,src:"https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg",alt:"menu"})),r.a.createElement(p,{isCollapsed:t,setCollapsed:l}))},h=t(1),g=t(7),b=t.n(g);var v=function(e){return r.a.createElement("div",{className:b.a.messageContainer},r.a.createElement("div",{className:b.a.contain},r.a.createElement("img",{src:e.avatar}),r.a.createElement("div",{className:b.a.textContainer},r.a.createElement("div",{className:b.a.userName},e.name),r.a.createElement("div",{className:b.a.userMessage},e.message),r.a.createElement("span",{className:b.a.messageTime},e.time))))},C="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png",N="Victoria",k="Hey you, can you help me please?",y="18:30";var x=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement(v,{avatar:C,name:N,message:k,time:y}),r.a.createElement("hr",null),r.a.createElement("hr",null))},S=t(16),j=t.n(S);var O=function(e){return r.a.createElement("div",{className:j.a.itemContainer},r.a.createElement("div",{className:j.a.task},"Task: ",e.affair.name),r.a.createElement("div",{className:j.a.priority},"Priority: ",e.affair.priority),r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))},w=t(8),I=t.n(w);var T=function(e){var a=e.data.map((function(a){return r.a.createElement(O,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",{className:I.a.tableStyle},a,r.a.createElement("div",{className:I.a.buttonsStyle},r.a.createElement("button",{className:I.a.buttonStyle,onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{className:I.a.buttonStyle,onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{className:I.a.buttonStyle,onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{className:I.a.buttonStyle,onClick:function(){e.setFilter("low")}},"Low")))},A=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var M=function(){var e=Object(n.useState)(A),a=Object(i.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(i.a)(c,2),s=o[0],u=o[1],m=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(t,s);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(T,{data:m,setFilter:u,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},P=t(30),H=t(9),J=t.n(H),F=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?J.a.error:J.a.someClass;return r.a.createElement("div",{className:J.a.container},r.a.createElement("div",{className:J.a.inputErrorContainer},r.a.createElement("input",{value:a,onChange:t,className:o}),r.a.createElement("span",{className:J.a.errorMessage},l)),r.a.createElement("button",{onClick:n},"Add"),r.a.createElement("span",{className:J.a.usersNumber},c))},G=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(i.a)(l,2),o=c[0],s=c[1],u=Object(n.useState)(""),m=Object(i.a)(u,2),_=m[0],E=m[1],d=a.length;return r.a.createElement(F,{name:o,setNameCallback:function(e){E(""),s(e.currentTarget.value)},addUser:function(){o?(t(o),alert("Hello ".concat(o," !")),s("")):E("Please, enter your name first")},error:_,totalUsers:d})},U=t(44);var B=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"Homeworks 3",r.a.createElement(G,{users:t,addUserCallback:function(e){l([].concat(Object(P.a)(t),[{_id:Object(U.a)(),name:e}]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},K=t(10),D=t(13),V=t.n(D),W=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=(e.className,e.spanClassName),s=Object(K.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),i="".concat(V.a.error," ").concat(o||""),u="".concat(V.a.input," ").concat(c?V.a.errorInput:V.a.superInput);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:u},s)),c&&r.a.createElement("span",{className:i},c))},X=t(29),z=t.n(X),L=t(17),Q=t.n(L),Y=function(e){var a=e.red,t=e.className,n=Object(K.a)(e,["red","className"]),l="".concat(Q.a.buttonStyle," ").concat(a?Q.a.red:Q.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},R=t(22),Z=t.n(R),$=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(K.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(Z.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:Z.a.spanClassName},l))};var q=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},s=Object(n.useState)(!1),u=Object(i.a)(s,2),m=u[0],_=u[1],E=Object(n.useState)(!1),d=Object(i.a)(E,2),p=d[0],f=d[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:z.a.column},r.a.createElement(W,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement(Y,{red:!0,onClick:o},"delete "),r.a.createElement($,{checked:m,onChangeChecked:_},"some text "),r.a.createElement($,{checked:p,onChange:function(e){return f(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var ee=function(){return r.a.createElement("div",null,r.a.createElement(x,null),r.a.createElement(M,null),r.a.createElement(B,null),r.a.createElement(q,null))},ae=t(18),te=t.n(ae);var ne=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:te.a.messageContainer},r.a.createElement("img",{className:te.a.mainImage,src:"https://svgsilh.com/svg/1298794.svg",alt:"cat"}),r.a.createElement("div",{className:te.a.errorText},r.a.createElement("h1",null,"Ooooops..."),r.a.createElement("h2",null,"404"),r.a.createElement("h3",null,"Page not found :("))))};var re=function(){return r.a.createElement("div",null,"I am Junior Page :)")};var le=function(){return r.a.createElement("div",null,"I am Junior + Page :)")},ce="/pre-junior",oe="/junior",se="/junior-plus";var ie=function(){return r.a.createElement("div",null,r.a.createElement(h.d,null,r.a.createElement(h.b,{path:"/",exact:!0,render:function(){return r.a.createElement(h.a,{to:ce})}}),r.a.createElement(h.b,{path:ce,render:function(){return r.a.createElement(ee,null)}}),r.a.createElement(h.b,{path:oe,render:function(){return r.a.createElement(re,null)}}),r.a.createElement(h.b,{path:se,render:function(){return r.a.createElement(le,null)}}),r.a.createElement(h.b,{render:function(){return r.a.createElement(ne,null)}})))};var ue=function(){return r.a.createElement("div",null,r.a.createElement(_.a,null,r.a.createElement(f,null),r.a.createElement(ie,null)))};var me=function(){return r.a.createElement("div",{className:s.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(ue,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[31,1,2]]]);
//# sourceMappingURL=main.3698e0c1.chunk.js.map