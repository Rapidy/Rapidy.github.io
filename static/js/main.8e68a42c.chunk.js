(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{15:function(e,n,t){},16:function(e,n,t){},23:function(e,n,t){},25:function(e,n,t){},26:function(e,n,t){},27:function(e,n,t){"use strict";t.r(n);var r=t(0),b=t(4),a=t.n(b),o=(t(15),t(16),t(3)),c=function(e){return{type:"ADD_NUMBER",payload:e}},s=(t(23),t(1));function u(){var e=Object(o.b)(),n=["1","2","3","4","5","6","7","8","9","0"];function t(n){e(c(n.target.innerText))}function b(){e({type:"WITHDRAW"}),e({type:"CLEAR_NUMBERS"})}return Object(r.useEffect)((function(){document.body.addEventListener("keypress",(function(t){if(n.includes(t.key))e(c(t.key));else{if("Enter"!==t.key&&"NumpadEnter"!==t.key)return!1;b()}}))}),[]),Object(s.jsxs)("section",{className:"keyboard",children:[Object(s.jsxs)("div",{className:"keyboard-digits",children:[Object(s.jsx)("button",{onClick:t,className:"keyboard__btn keyboard-digits__btn",children:"1"}),Object(s.jsx)("button",{onClick:t,className:"keyboard__btn keyboard-digits__btn",children:"2"}),Object(s.jsx)("button",{onClick:t,className:"keyboard__btn keyboard-digits__btn",children:"3"}),Object(s.jsx)("button",{onClick:t,className:"keyboard__btn keyboard-digits__btn",children:"4"}),Object(s.jsx)("button",{onClick:t,className:"keyboard__btn keyboard-digits__btn",children:"5"}),Object(s.jsx)("button",{onClick:t,className:"keyboard__btn keyboard-digits__btn",children:"6"}),Object(s.jsx)("button",{onClick:t,className:"keyboard__btn keyboard-digits__btn",children:"7"}),Object(s.jsx)("button",{onClick:t,className:"keyboard__btn keyboard-digits__btn",children:"8"}),Object(s.jsx)("button",{onClick:t,className:"keyboard__btn keyboard-digits__btn",children:"9"}),Object(s.jsx)("button",{onClick:t,className:"keyboard__btn keyboard-digits__btn",disabled:!0,children:"\u2013"}),Object(s.jsx)("button",{onClick:t,className:"keyboard__btn keyboard-digits__btn",children:"0"}),Object(s.jsx)("button",{className:"keyboard__btn keyboard-digits__btn",disabled:!0,children:"+"})]}),Object(s.jsxs)("div",{className:"keyboard-functions",children:[Object(s.jsxs)("button",{onClick:function(){e({type:"CLEAR_NUMBERS"})},className:"keyboard__btn keyboard-functions__btn",children:[Object(s.jsx)("span",{}),"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"]}),Object(s.jsxs)("button",{onClick:function(){e({type:"REMOVE_NUMBER"})},className:"keyboard__btn keyboard-functions__btn",children:[Object(s.jsx)("span",{}),"\u0421\u0442\u0435\u0440\u0435\u0442\u044c"]}),Object(s.jsxs)("button",{onClick:b,className:"keyboard__btn keyboard-functions__btn",children:[Object(s.jsx)("span",{}),"\u0412\u044b\u0434\u0430\u0447\u0430"]})]})]})}var i=t(10);t(25);function m(){var e=Object(o.b)(),n=Object(r.useState)(0),t=Object(i.a)(n,2),b=t[0],a=t[1],c=Object(r.useRef)();Object(r.useEffect)((function(){c.current.addEventListener("keypress",(function(e){e.stopImmediatePropagation()}))}),[]);var u=Object.values({1:[{number:5e3,amount:100},{number:2e3,amount:400},{number:1e3,amount:1e3},{number:500,amount:3e3},{number:200,amount:5e3},{number:100,amount:8e3},{number:50,amount:1e4}],2:[{number:5e3,amount:476},{number:2e3,amount:345},{number:1e3,amount:6741},{number:500,amount:4362},{number:200,amount:234},{number:100,amount:1643},{number:50,amount:3450}],3:[{number:5e3,amount:234},{number:2e3,amount:678},{number:1e3,amount:845},{number:500,amount:2451},{number:200,amount:9654},{number:100,amount:2345},{number:50,amount:234}],4:[{number:5e3,amount:546},{number:2e3,amount:562},{number:1e3,amount:2543},{number:500,amount:4365},{number:200,amount:2154},{number:100,amount:124},{number:50,amount:342}],5:[{number:5e3,amount:2732},{number:2e3,amount:347},{number:1e3,amount:479},{number:500,amount:7556},{number:200,amount:3296},{number:100,amount:1257},{number:50,amount:3854}],6:[{number:5e3,amount:73},{number:2e3,amount:147},{number:1e3,amount:279},{number:500,amount:356},{number:200,amount:696},{number:100,amount:857},{number:50,amount:854}]}).map((function(n,t){return Object(s.jsxs)("button",{className:"modes__btn ".concat(t===b?"active":""),onClick:function(r){return function(n,t){e(function(e){return{type:"SET_MODE",payload:e}}(n)),localStorage.setItem("mode",t),a(t)}(n,t)},children:[t+1," \u0432\u0430\u0440\u0438\u0430\u043d\u0442"]},t)}));return Object(s.jsx)("div",{ref:c,className:"modes",children:u})}t(26);function l(){var e=Object(o.c)((function(e){return e.numbers})),n=Object(o.c)((function(e){return e.bills})),t=Object(o.c)((function(e){return e.leftover})),r=Object(o.c)((function(e){return e.withdrawedMoney}));return Object(s.jsxs)("section",{className:"monitor",children:[Object(s.jsxs)("div",{className:"monitor-container",children:[Object(s.jsxs)("div",{className:"monitor-container-numbers",children:["\u0412\u0432\u0435\u0434\u0435\u043d\u043d\u0430\u044f \u0441\u0443\u043c\u043c\u0430:",Object(s.jsx)("input",{className:"monitor-container-numbers__input",value:e.length?e:0,readOnly:!0})]}),Object(s.jsxs)("div",{className:"monitor-container-info",children:["\u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043a\u0443\u043f\u044e\u0440:",n.map((function(e,n){return Object(s.jsxs)("li",{className:"monitor-container-info__item",children:[Object(s.jsx)("b",{children:e.number})," (",e.amount," \u0448\u0442)"]},n)}))]})]}),Object(s.jsxs)("div",{className:"monitor-container",children:[Object(s.jsxs)("div",{className:"monitor-container__item",children:["\u0412\u044b \u0432\u044b\u0432\u0435\u043b\u0438 \u0434\u0435\u043d\u0435\u0433 \u043d\u0430 \u0441\u0443\u043c\u043c\u0443: ",Object(s.jsx)("b",{children:r})]}),Object(s.jsxs)("div",{className:"monitor-container__item",children:["\u041e\u0441\u0442\u0430\u0442\u043e\u043a \u043e\u0442 \u0441\u043d\u044f\u0442\u0438\u044f ",Object(s.jsx)("b",{children:t})]})]})]})}var d=function(){return Object(s.jsx)("main",{className:"main",children:Object(s.jsxs)("div",{className:"main-container",children:[Object(s.jsx)(l,{}),Object(s.jsxs)("div",{className:"main-container-bottom",children:[Object(s.jsx)(u,{}),Object(s.jsx)(m,{})]})]})})},j=t(6),_=t(2),O={numbers:"",bills:[{number:5e3,amount:100},{number:2e3,amount:400},{number:1e3,amount:1e3},{number:500,amount:3e3},{number:200,amount:5e3},{number:100,amount:8e3},{number:50,amount:1e4}],result:[],leftover:0,withdrawedMoney:0};var y=t(9),k=Object(j.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_MODE":return{numbers:"",bills:n.payload,result:[],leftover:null,withdrawedMoney:0};case"ADD_NUMBER":return Object(_.a)(Object(_.a)({},e),{},{numbers:e.numbers+n.payload});case"REMOVE_NUMBER":return Object(_.a)(Object(_.a)({},e),{},{numbers:e.numbers.slice(0,-1)});case"CLEAR_NUMBERS":return Object(_.a)(Object(_.a)({},e),{},{numbers:""});case"WITHDRAW":var t={numbers:e.numbers,bills:e.bills,result:[]};if(t.numbers>0)for(var r=0;r<t.bills.length;r++)for(;t.numbers-t.bills[r].number>=0&&0!==t.bills[r].amount;)t.numbers-=t.bills[r].number,t.result.push(t.bills[r].number),t.bills[r].amount-=1;return Object(_.a)(Object(_.a)({},e),{},{leftover:t.numbers,bills:t.bills,result:t.result,withdrawedMoney:e.numbers-t.numbers});default:return e}}),Object(y.composeWithDevTools)()),f=k;a.a.render(Object(s.jsx)(o.a,{store:f,children:Object(s.jsx)(d,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.8e68a42c.chunk.js.map