(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,,,,,function(e,a,t){e.exports={hidden:"Navbar_hidden__1yDlk",menuContainer:"Navbar_menuContainer__3_C3Q",highlight:"Navbar_highlight__31Esg"}},,,function(e,a,t){e.exports={messageContainer:"Message_messageContainer__3MCJP",contain:"Message_contain__2YF2a",textContainer:"Message_textContainer__294K-",userName:"Message_userName__3FYDl",userMessage:"Message_userMessage__1I5Tp",messageTime:"Message_messageTime__3SP_X"}},function(e,a,t){e.exports={tableStyle:"Affairs_tableStyle__rwb3D",buttonsStyle:"Affairs_buttonsStyle__21NeC",buttonStyle:"Affairs_buttonStyle__35Z9N"}},function(e,a,t){e.exports={container:"Greeting_container__11QLz",inputErrorContainer:"Greeting_inputErrorContainer__2fvmv",someClass:"Greeting_someClass__uGflL",error:"Greeting_error__1uvQ8",errorMessage:"Greeting_errorMessage__zEoF5",usersNumber:"Greeting_usersNumber__1cTwP"}},,,,,function(e,a,t){e.exports={input:"SuperInputText_input__1P_Mf",superInput:"SuperInputText_superInput__3XH9u",errorInput:"SuperInputText_errorInput__3ei0N",error:"SuperInputText_error__2J82S"}},,,,,function(e,a,t){e.exports={navbarContainer:"Header_navbarContainer__2AC6B",menuIcon:"Header_menuIcon__TP2Yh"}},function(e,a,t){e.exports={itemContainer:"Affair_itemContainer__8DUpj",task:"Affair_task__3MHEV",priority:"Affair_priority__1jVve"}},function(e,a,t){e.exports={buttonStyle:"SuperButton_buttonStyle__2a2ET",default:"SuperButton_default__-BXUG",red:"SuperButton_red__1kaz_"}},function(e,a,t){e.exports={messageContainer:"Error404_messageContainer__3Vx1w",mainImage:"Error404_mainImage__AJvNf",errorText:"Error404_errorText__2pAbT"}},function(e,a,t){e.exports={sliderContainer:"HW11_sliderContainer__1fll0",value2:"HW11_value2__1lMsu"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__Imn1x",spanClassName:"SuperCheckbox_spanClassName__1K9ch"}},function(e,a,t){e.exports={editableSpanContainer:"SuperEditableSpan_editableSpanContainer__KTYzo",editableSpan:"SuperEditableSpan_editableSpan__S8A7g"}},function(e,a,t){e.exports={selectContainer:"SuperSelect_selectContainer__2PGX1"}},function(e,a,t){e.exports={radioButtonsContainer:"SuperRadio_radioButtonsContainer__1G-Jv",radioButton:"SuperRadio_radioButton__3ba_I"}},function(e,a,t){e.exports={hw8Container:"HW8_hw8Container__eqhnF",peopleContainer:"HW8_peopleContainer__xNLvb"}},,,,,,,,,function(e,a,t){e.exports={App:"App_App__1Sc4o"}},,,,function(e,a,t){e.exports={blue:"HW4_blue__2RJeg",column:"HW4_column__2ZS4I"}},function(e,a,t){e.exports={hw7Container:"HW7_hw7Container__2OKOS"}},function(e,a,t){e.exports={clockContainer:"Clock_clockContainer__2Duw5"}},function(e,a,t){e.exports={hw9Container:"HW9container_hw9Container__14tkd"}},,function(e,a,t){e.exports={hw10container:"HW10_hw10container__LlMMA"}},function(e,a,t){e.exports=t.p+"static/media/preloader.a183e373.gif"},function(e,a,t){e.exports={preloader:"Preloader_preloader__Ir_JW"}},function(e,a,t){e.exports={range:"SuperRange_range__2K0wQ"}},,,,,function(e,a,t){e.exports=t(71)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(16),c=t.n(l),o=(t(65),t(43)),i=t.n(o),u=t(2),s=t(25),m=t.n(s),p=t(12),d=t(10),E=t.n(d),_=t(3),v=t(13),h=t.n(v);var f=function(e){return r.a.createElement("div",{className:h.a.messageContainer},r.a.createElement("div",{className:h.a.contain},r.a.createElement("img",{src:e.avatar}),r.a.createElement("div",{className:h.a.textContainer},r.a.createElement("div",{className:h.a.userName},e.name),r.a.createElement("div",{className:h.a.userMessage},e.message),r.a.createElement("span",{className:h.a.messageTime},e.time))))},g="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png",b="Victoria",C="Hey you, can you help me please?",N="18:30";var k=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement(f,{avatar:g,name:b,message:C,time:N}),r.a.createElement("hr",null),r.a.createElement("hr",null))},y=t(26),O=t.n(y);var S=function(e){return r.a.createElement("div",{className:O.a.itemContainer},r.a.createElement("div",{className:O.a.task},"Task: ",e.affair.name),r.a.createElement("div",{className:O.a.priority},"Priority: ",e.affair.priority),r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))},j=t(14),w=t.n(j);var x=function(e){var a=e.data.map((function(a){return r.a.createElement(S,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",{className:w.a.tableStyle},a,r.a.createElement("div",{className:w.a.buttonsStyle},r.a.createElement("button",{className:w.a.buttonStyle,onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{className:w.a.buttonStyle,onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{className:w.a.buttonStyle,onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{className:w.a.buttonStyle,onClick:function(){e.setFilter("low")}},"Low")))},I=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var T=function(){var e=Object(n.useState)(I),a=Object(u.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(u.a)(c,2),i=o[0],s=o[1],m=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(t,i);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(x,{data:m,setFilter:s,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},A=t(8),M=t(15),H=t.n(M),P=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?H.a.error:H.a.someClass;return r.a.createElement("div",{className:H.a.container},r.a.createElement("div",{className:H.a.inputErrorContainer},r.a.createElement("input",{value:a,onChange:t,className:o}),r.a.createElement("span",{className:H.a.errorMessage},l)),r.a.createElement("button",{onClick:n},"Add"),r.a.createElement("span",{className:H.a.usersNumber},c))},B=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(u.a)(l,2),o=c[0],i=c[1],s=Object(n.useState)(""),m=Object(u.a)(s,2),p=m[0],d=m[1],E=a.length;return r.a.createElement(P,{name:o,setNameCallback:function(e){d(""),i(e.currentTarget.value)},addUser:function(){o?(t(o),alert("Hello ".concat(o," !")),i("")):d("Please, enter your name first")},error:p,totalUsers:E})},G=t(84);var F=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"Homeworks 3",r.a.createElement(B,{users:t,addUserCallback:function(e){l([].concat(Object(A.a)(t),[{_id:Object(G.a)(),name:e}]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},D=t(1),J=t(20),W=t.n(J),L=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=(e.className,e.spanClassName),i=Object(D.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),u="".concat(W.a.error," ").concat(o||""),s="".concat(W.a.input," ").concat(c?W.a.errorInput:W.a.superInput);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:s},i)),c&&r.a.createElement("span",{className:u},c))},R=t(47),K=t.n(R),U=t(27),z=t.n(U),X=function(e){var a=e.red,t=e.className,n=Object(D.a)(e,["red","className"]),l="".concat(z.a.buttonStyle," ").concat(a?z.a.red:z.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},Y=t(24),Q=t(30),V=t.n(Q),Z=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(Y.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(V.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:V.a.spanClassName},l))};var q=function(){var e=Object(n.useState)(""),a=Object(u.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},i=Object(n.useState)(!1),s=Object(u.a)(i,2),m=s[0],p=s[1],d=Object(n.useState)(!1),E=Object(u.a)(d,2),_=E[0],v=E[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:K.a.column},r.a.createElement(L,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement(X,{red:!0,onClick:o},"delete "),r.a.createElement(Z,{checked:m,onChangeChecked:p},"some text "),r.a.createElement(Z,{checked:_,onChange:function(e){return v(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},$=t(31),ee=t.n($),ae=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(D.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),i=Object(u.a)(o,2),s=i[0],m=i[1],p=l||{},d=p.children,E=p.onDoubleClick,_=(p.className,Object(D.a)(p,["children","onDoubleClick","className"])),v="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat("  ",ee.a.editableSpan);return r.a.createElement("div",{className:ee.a.editableSpanContainer},s?r.a.createElement(L,Object.assign({autoFocus:!0,onBlur:function(e){m(!1),a&&a(e)},onEnter:function(){m(!1),t&&t()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){m(!0),E&&E(e)},className:v},_),d||c.value,r.a.createElement("img",{src:"https://www.svgrepo.com/show/42233/pencil-edit-button.svg",alt:"pencil"})))};function te(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function ne(e,a){var t=localStorage.getItem(e);return null!==t&&(a=JSON.parse(t)),a}te("test",{x:"A",y:1});ne("test",{x:"",y:0});var re=function(){var e=Object(n.useState)(""),a=Object(u.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(ae,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement(X,{onClick:function(){te("editable-span-value",t)}},"save"),r.a.createElement(X,{onClick:function(){var e=ne("editable-span-value",t);l(e)}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var le=function(){return r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement(T,null),r.a.createElement(F,null),r.a.createElement(q,null),r.a.createElement(re,null))},ce=t(28),oe=t.n(ce);var ie=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:oe.a.messageContainer},r.a.createElement("img",{className:oe.a.mainImage,src:"https://svgsilh.com/svg/1298794.svg",alt:"cat"}),r.a.createElement("div",{className:oe.a.errorText},r.a.createElement("h1",null,"Ooooops..."),r.a.createElement("h2",null,"404"),r.a.createElement("h3",null,"Page not found :("))))},ue=t(32),se=t.n(ue),me=function(e){var a=e.options,t=(e.onChange,e.onChangeOption),n=Object(D.a)(e,["options","onChange","onChangeOption"]),l=a?a.map((function(e,a){return r.a.createElement("option",{key:a,className:se.a.option},e)})):[];return r.a.createElement("select",Object.assign({onChange:function(e){t&&t(e.currentTarget.value)}},n,{className:se.a.selectContainer}),l)},pe=t(33),de=t.n(pe),Ee=function(e){e.type;var a=e.name,t=e.options,n=e.value,l=(e.onChange,e.onChangeOption),c=(Object(D.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){l&&l(e.currentTarget.value)}),o=t?t.map((function(e,t){return r.a.createElement("label",{key:a+"-"+t,className:de.a.radioButton},r.a.createElement("input",{type:"radio",name:a,value:e,onChange:c,checked:n===e}),e)})):[];return r.a.createElement("div",{className:de.a.radioButtonsContainer},o)},_e=t(48),ve=t.n(_e),he=["x","y","z"];var fe=function(){var e=Object(n.useState)(he[1]),a=Object(u.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:ve.a.hw7Container},r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(me,{options:he,value:t,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(Ee,{name:"radio",options:he,value:t,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))},ge=function(e,a){switch(a.type){case"sort":var t=Object(A.a)(e);return"up"===a.payload?t=t.sort((function(e,a){return e.name>a.name?1:e.name<a.name?-1:0})):"down"===a.payload&&(t=t.sort((function(e,a){return e.name<a.name?1:e.name>a.name?-1:0}))),t;case"check":return e.filter((function(e){return e.age>=18}));default:return e}},be=t(34),Ce=t.n(be),Ne=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var ke=function(){var e=Object(n.useState)(Ne),a=Object(u.a)(e,2),t=a[0],l=a[1],c=t.map((function(e){return r.a.createElement("div",{key:e._id},r.a.createElement("span",null,e.name),r.a.createElement("span",null," - "),r.a.createElement("span",null,e.age))}));return r.a.createElement("div",{className:Ce.a.hw8Container},r.a.createElement("hr",null),"homeworks 8",r.a.createElement("div",{className:Ce.a.peopleContainer},c),r.a.createElement("div",null,r.a.createElement(X,{onClick:function(){return l(ge(Ne,{type:"sort",payload:"up"}))}},"Sort up")),r.a.createElement("div",null,r.a.createElement(X,{onClick:function(){return l(ge(Ne,{type:"sort",payload:"down"}))}},"Sort down")),r.a.createElement("div",null,r.a.createElement(X,{onClick:function(){return l(ge(Ne,{type:"check",payload:18}))}},"Check 18")),r.a.createElement("hr",null),r.a.createElement("hr",null))},ye=t(49),Oe=t.n(ye);var Se=function(){var e=Object(n.useState)(0),a=Object(u.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(new Date),o=Object(u.a)(c,2),i=o[0],s=o[1],m=Object(n.useState)(!1),p=Object(u.a)(m,2),d=p[0],E=p[1],_=function(){clearInterval(t)};function v(e){return e<10?"0"+e:e}var h=v(i.getHours())+" : "+v(i.getMinutes())+" : "+v(i.getSeconds()),f=v(i.getDate())+"."+v(i.getMonth()+1)+"."+v(i.getFullYear());return r.a.createElement("div",{className:Oe.a.clockContainer},i?r.a.createElement("div",{onMouseEnter:function(){E(!0)},onMouseLeave:function(){E(!1)}},h):r.a.createElement("div",null,' Click "Start" button to see the Time '),d&&r.a.createElement("div",null,f),r.a.createElement("div",null,r.a.createElement(X,{onClick:function(){_();var e=window.setInterval((function(){s(new Date)}),1e3);l(e)}},"start"),r.a.createElement(X,{onClick:_},"stop")))},je=t(50),we=t.n(je);var xe=function(){return r.a.createElement("div",{className:we.a.hw9Container},r.a.createElement("hr",null),"homeworks 9",r.a.createElement(Se,null),r.a.createElement("hr",null),r.a.createElement("hr",null))},Ie=t(19),Te=t(57),Ae={loading:!1},Me=function(e){return{type:"TOGGLE_IS_LOADING",payload:{loading:e}}},He=t(52),Pe=t.n(He),Be=t(53),Ge=t.n(Be),Fe=t(54),De=t.n(Fe);var Je=function(){return r.a.createElement("div",null,r.a.createElement("img",{className:De.a.preloader,src:Ge.a,alt:"preloader"}))};var We=function(){var e=Object(Ie.b)(),a=Object(Ie.c)((function(e){return e.loading.loading}));return r.a.createElement("div",{className:Pe.a.hw10container},r.a.createElement("hr",null),"homeworks 10",a?r.a.createElement(Je,null):r.a.createElement("div",null,r.a.createElement(X,{onClick:function(){e(Me(!0)),setTimeout((function(){e(Me(!1))}),2e3),console.log("loading...")}},"set loading...")),r.a.createElement("hr",null),r.a.createElement("hr",null))},Le=t(39),Re=t(55),Ke=t.n(Re),Ue=function(e){e.type;var a=e.onChange,t=e.onChangeRange,n=e.className,l=Object(Y.a)(e,["type","onChange","onChangeRange","className"]),c="".concat(Ke.a.range," ").concat(n||"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"range",onChange:function(e){a&&a(e),t&&t(+e.currentTarget.value)},className:c},l)))},ze=t(83),Xe=function(e){var a=e.onChangeRange,t=e.value,n=e.min,l=e.max,c=e.step;return r.a.createElement("div",null,r.a.createElement(ze.a,{value:t,onChange:function(e,t){a&&a(t)},valueLabelDisplay:"auto","aria-labelledby":"range-slider",min:n,max:l,step:c}))},Ye=t(29),Qe=t.n(Ye);var Ve=function(){var e=Object(n.useState)(0),a=Object(Le.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(50),o=Object(Le.a)(c,2),i=o[0],u=o[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 11",r.a.createElement("div",{className:Qe.a.sliderContainer},r.a.createElement("span",null,t),r.a.createElement(Ue,{onChangeRange:l,value:t})),r.a.createElement("div",{className:Qe.a.sliderContainer},r.a.createElement("span",null,t),r.a.createElement(Xe,{onChangeRange:function(e){"number"===typeof e?(l(e),u(e)):(l(e[0]),u(e[1]))},value:[t,i],min:0,max:100,step:5}),r.a.createElement("span",{className:Qe.a.value2},i)),r.a.createElement("hr",null),r.a.createElement("hr",null))};var Ze=function(){return r.a.createElement("div",null,r.a.createElement(fe,null),r.a.createElement(ke,null),r.a.createElement(xe,null),r.a.createElement(We,null),r.a.createElement(Ve,null))};var qe=function(){return r.a.createElement("div",null,"I am Junior + Page :)")},$e="/pre-junior",ea="/junior",aa="/junior-plus";var ta=function(){return r.a.createElement("div",null,r.a.createElement(_.d,null,r.a.createElement(_.b,{path:"/",exact:!0,render:function(){return r.a.createElement(_.a,{to:$e})}}),r.a.createElement(_.b,{path:$e,render:function(){return r.a.createElement(le,null)}}),r.a.createElement(_.b,{path:ea,render:function(){return r.a.createElement(Ze,null)}}),r.a.createElement(_.b,{path:aa,render:function(){return r.a.createElement(qe,null)}}),r.a.createElement(_.b,{render:function(){return r.a.createElement(ie,null)}})))};var na=function(e){var a=function(){e.setCollapsed(!0)};return r.a.createElement("div",{className:e.isCollapsed?E.a.hidden:E.a.menuContainer},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(p.b,{onClick:a,to:$e,className:E.a.menuItem,activeClassName:E.a.highlight},"PreJunior")),r.a.createElement("li",null,r.a.createElement(p.b,{onClick:a,to:ea,className:E.a.menuItem,activeClassName:E.a.highlight},"Junior")),r.a.createElement("li",null,r.a.createElement(p.b,{onClick:a,to:aa,className:E.a.menuItem,activeClassName:E.a.highlight},"Junior Plus"))))};var ra=function(){var e=Object(n.useState)(!0),a=Object(u.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:m.a.menuContainer},r.a.createElement("div",{className:m.a.navbarContainer},r.a.createElement("img",{onClick:function(){l(!t)},className:m.a.menuIcon,src:"https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg",alt:"menu"})),r.a.createElement(na,{isCollapsed:t,setCollapsed:l}))};var la=function(){return r.a.createElement("div",null,r.a.createElement(p.a,null,r.a.createElement(ra,null),r.a.createElement(ta,null)))};var ca=function(){return r.a.createElement("div",{className:i.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(la,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var oa=t(18),ia=Object(oa.b)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"TOGGLE_IS_LOADING":return Object(Te.a)({},e,{},a.payload);default:return e}}}),ua=Object(oa.c)(ia),sa=ua;window.store=ua,c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ie.a,{store:sa},r.a.createElement(ca,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[60,1,2]]]);
//# sourceMappingURL=main.26d93b89.chunk.js.map