(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n.n(c),o=n(2),i=n(3),r=n(5),s=n(4),l=n(1),u=(n(12),n(0));function d(){return(new Date).toUTCString().slice(-12,-4)}var h=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={today:d()},t.timerId=0,t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=window.setInterval((function(){t.setState({today:d()}),console.info(t.state.today)}),1e3)}},{key:"componentDidUpdate",value:function(t){var e=t.name,n=this.props.name;e!==n&&console.debug("Renamed from ".concat(e," to ").concat(n))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId)}},{key:"render",value:function(){var t=this.props.name,e=this.state.today;return Object(u.jsxs)("div",{className:"Clock",children:[Object(u.jsx)("strong",{className:"Clock__name",children:t})," time is ",Object(u.jsx)("span",{className:"Clock__time",children:e})]})}}]),n}(l.Component),m=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={clockName:"Clock-0",hasClock:!0},t.handleLeftClick=function(){t.setState({hasClock:!0})},t.handleRightClick=function(e){e.preventDefault(),t.setState({hasClock:!1})},t.getRandomName=function(){var t=Date.now().toString().slice(-4);return"Clock-".concat(t)},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;window.addEventListener("click",this.handleLeftClick),window.addEventListener("contextmenu",this.handleRightClick),window.setInterval((function(){t.setState({clockName:t.getRandomName()})}),3300)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.handleLeftClick),window.removeEventListener("contextmenu",this.handleRightClick)}},{key:"render",value:function(){var t=this.state,e=t.clockName,n=t.hasClock;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"React clock"}),n&&Object(u.jsx)(h,{name:e})]})}}]),n}(l.Component);a.a.render(Object(u.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.f33a20fa.chunk.js.map