(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(21)},16:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(8),r=a.n(s),c=(a(16),a(1)),o=a(2),l=a(4),u=a(3),m=a(5),d=a(9),h=a(10),b=a.n(h),f=(a(17),a(18),a(19),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={sourceData:""},a.myRef=i.a.createRef(),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"change",value:function(e,t){var a=this;this.setState(Object(d.a)({},e,t.target.value),function(){localStorage.setItem("sourceData",a.state.sourceData)})}},{key:"componentDidMount",value:function(){var e=localStorage.getItem("sourceData");e&&this.setState({sourceData:e})}},{key:"handle",value:function(e){var t=this.myRef.current,a=t.selectionStart,n=t.selectionEnd,i=this.state.sourceData;a!==n&&("blob"===e?i=i.substring(0,a)+"**"+i.substring(a,n)+"**"+i.substring(n):"del"===e?i=i.substring(0,a)+"~~"+i.substring(a,n)+"~~"+i.substring(n):"yinyong"===e&&(i=i.substring(0,a)+"\n > "+i.substring(a,n)+"\n"+i.substring(n))),this.setState({sourceData:i})}},{key:"render",value:function(){var e=b()(this.state.sourceData);return i.a.createElement("div",null,i.a.createElement("div",{className:"notification is-primary"},i.a.createElement("button",{className:"delete"}),"Markdown \u6587\u672c\u7f16\u8f91\u5668"),i.a.createElement("a",{title:"\u52a0\u7c97",onClick:this.handle.bind(this,"blob"),className:"button is-primary is-outlined is-small"},i.a.createElement("i",{className:"iconfont icon-zitijiacu"})),i.a.createElement("a",{title:"\u4e2d\u5212\u7ebf",onClick:this.handle.bind(this,"del"),className:"button is-primary is-outlined is-small"},i.a.createElement("i",{className:"iconfont icon-zitishanchuxian"})),i.a.createElement("a",{title:"\u5f15\u7528",onClick:this.handle.bind(this,"yinyong"),className:"button is-primary is-outlined is-small"},i.a.createElement("i",{className:"iconfont icon-yinyong"})),i.a.createElement("div",{className:"field left"},i.a.createElement("div",{className:"control"},i.a.createElement("textarea",{ref:this.myRef,className:"textarea is-primary markdown-body",placeholder:"Primary textarea",value:this.state.sourceData,onChange:this.change.bind(this,"sourceData")}))),i.a.createElement("div",{className:"field right"},i.a.createElement("div",{className:"control"},i.a.createElement("div",{className:"textarea is-info markdown-body",dangerouslySetInnerHTML:{__html:e}}))))}}]),t}(n.Component)),y=(a(20),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(f,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.cecd068a.chunk.js.map