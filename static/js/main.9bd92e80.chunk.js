(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,function(e,a,t){e.exports={message:"Message_message__ev9ZS",avatar:"Message_avatar__3PPTa",content:"Message_content__2KxqR",textMessage:"Message_textMessage__2es0U",name:"Message_name__jdI1D",time:"Message_time__31HII"}},,,function(e,a,t){e.exports={someClass:"Greeting_someClass__1qqc0",error:"Greeting_error__1G8vA",errorMessage:"Greeting_errorMessage__2dmEP"}},function(e,a,t){e.exports={superInput:"SuperInputText_superInput__2PW1s",errorInput:"SuperInputText_errorInput__iu4g6",error:"SuperInputText_error__3t0Oa"}},function(e,a,t){e.exports={blue:"HW4_blue__1KWxJ",column:"HW4_column__2tv0v",testSpanError:"HW4_testSpanError__3ILBP"}},function(e,a,t){e.exports={default:"SuperButton_default__28SKz",red:"SuperButton_red__2l-B5"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__2HhQ6",spanClassName:"SuperCheckbox_spanClassName__1Y2ge"}},,,function(e,a,t){e.exports={App:"App_App__2I_pk"}},,function(e,a,t){e.exports=t(21)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(12),c=t.n(l),s=(t(20),t(13)),o=t.n(s),u=t(3),i=t.n(u);var m=function(e){return r.a.createElement("div",{className:i.a.message},r.a.createElement("img",{src:e.avatar,alt:"Logo",className:i.a.avatar}),r.a.createElement("div",{className:i.a.angle},r.a.createElement("div",{className:i.a.content},r.a.createElement("div",{className:i.a.name},e.name),r.a.createElement("div",{className:i.a.textMessage},e.message),r.a.createElement("div",{className:i.a.time},e.time))))},d="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",E="Artem",p="npm start nazmi !!!",h="15:00";var f=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1 should work (\u0434\u043e\u043b\u0436\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c)",r.a.createElement(m,{avatar:d,name:E,message:p,time:h}),r.a.createElement("hr",null),r.a.createElement("hr",null))},_=t(1);var v=function(e){return r.a.createElement("div",null,e.affair.name,r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var g=function(e){var a=e.data.map((function(a){return r.a.createElement(v,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low"))},b=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var k=function(){var e=Object(n.useState)(b),a=Object(_.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),s=Object(_.a)(c,2),o=s[0],u=s[1],i=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(t,o);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(g,{data:i,setFilter:u,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},C=t(14),N=t(6),O=t.n(N),j=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,s=l?O.a.error:"";return r.a.createElement("div",null,r.a.createElement("input",{value:a,onChange:t,className:s}),r.a.createElement("button",{onClick:n},"add"),r.a.createElement("span",null,c),r.a.createElement("div",null,l&&r.a.createElement("div",{className:l?O.a.errorMessage:""},l)))},x=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(_.a)(l,2),s=c[0],o=c[1],u=Object(n.useState)(null),i=Object(_.a)(u,2),m=i[0],d=i[1],E=a.length;return r.a.createElement(j,{name:s,setNameCallback:function(e){d(null),o(e.currentTarget.value)},addUser:function(){s.trim()?a.find((function(e){return e.name===s}))?d("This name already exists"):(t(s),alert("Hello ".concat(s," !")),o("")):d("Write the name ")},error:m,totalUsers:E})},S=t(23);var y=function(){var e=Object(n.useState)([]),a=Object(_.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(x,{users:t,addUserCallback:function(e){var a={_id:Object(S.a)(),name:e};l([a].concat(Object(C.a)(t)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},w=t(2),I=t(7),A=t.n(I),M=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,s=(e.className,e.spanClassName),o=Object(w.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),u="".concat(A.a.error," ").concat(s||""),i=c?A.a.errorInput:"";return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:i},o)),c&&r.a.createElement("span",{className:u},c))},T=t(8),P=t.n(T),F=t(9),B=t.n(F),W=function(e){var a=e.red,t=e.className,n=Object(w.a)(e,["red","className"]),l=a?B.a.red:B.a.default&&t;return r.a.createElement("button",Object.assign({className:l},n))},H=t(10),U=t.n(H),J=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(w.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(U.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:s},c)),l&&r.a.createElement("span",{className:U.a.spanClassName},l))};var K=function(){var e=Object(n.useState)(""),a=Object(_.a)(e,2),t=a[0],l=a[1],c=t?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},o=Object(n.useState)(!1),u=Object(_.a)(o,2),i=u[0],m=u[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:P.a.column},r.a.createElement(M,{value:t,onChangeText:l,onEnter:s,error:c}),r.a.createElement(M,{className:P.a.blue}),r.a.createElement(W,null,"default"),r.a.createElement(W,{red:!0,onClick:s},"delete "),r.a.createElement(W,{disabled:!0},"disabled"),r.a.createElement(J,{checked:i,onChangeChecked:m},"some text "),r.a.createElement(J,{checked:i,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},G=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(w.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(n.useState)(!1),o=Object(_.a)(s,2),u=o[0],i=o[1],m=l||{},d=m.children,E=m.onDoubleClick,p=m.className,h=Object(w.a)(m,["children","onDoubleClick","className"]),f="cursor: inherit;".concat(" ",p);return r.a.createElement(r.a.Fragment,null,u?r.a.createElement(M,Object.assign({autoFocus:!0,onBlur:function(e){a&&a(e),i(!1)},onEnter:function(){t&&t(),i(!1)}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){E&&E(e),i(!0)},className:f},h),d||c.value))};function q(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function D(e,a){var t=a,n=localStorage.getItem(e);return null!==n&&(t=JSON.parse(n)),t}q("test",{x:"A",y:1});D("test",{x:"",y:0});var L=function(){var e=Object(n.useState)(""),a=Object(_.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(G,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement(W,{onClick:function(){q("editable-span-value",t)}},"save"),r.a.createElement(W,{onClick:function(){l(D("editable-span-value",t))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var z=function(){return r.a.createElement("div",{className:o.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(f,null),r.a.createElement(k,null),r.a.createElement(y,null),r.a.createElement(K,null),r.a.createElement(L,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.9bd92e80.chunk.js.map