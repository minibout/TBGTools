(this["webpackJsonpchall-counter"]=this["webpackJsonpchall-counter"]||[]).push([[0],{17:function(e,t,a){},22:function(e,t,a){e.exports=a(40)},27:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),l=a(19),i=a.n(l),r=(a(27),a(15)),o=a(21),s=a(14),u=a.n(s),m=a(20),d=a(9),h=a(10),v=a(12),p=a(11),f=(a(17),a(18),{apiKey:"AIzaSyBNtfu70bVaj2KiA0Tlpv7rSiFxQGt_His",authDomain:"chall-counter.firebaseapp.com",databaseURL:"https://chall-counter.firebaseio.com",projectId:"chall-counter",storageBucket:"chall-counter.appspot.com",messagingSenderId:"223353068983"}),b=a(7),E=function(e){Object(v.a)(a,e);var t=Object(p.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"incrementValue",value:function(){}},{key:"decrementValue",value:function(){console.log("Cliqu\xe9 -")}},{key:"render",value:function(){var e=this.props,t=e.nom,a=e.logo,n=e.value,l=e.updateCount;return c.a.createElement("li",null,c.a.createElement("div",{class:"notification player"},c.a.createElement("div",{class:"columns"},c.a.createElement("div",{class:"column is-2"},c.a.createElement("img",{src:a,alt:"",class:"exp-img"})),c.a.createElement("div",{class:"column text is-4"},c.a.createElement("h2",{class:"title is-5"},t)),c.a.createElement("div",{class:"column text is-2"},c.a.createElement("h3",{class:"title is-5"},n)),c.a.createElement("div",{class:"column is-2"},c.a.createElement("button",{class:"button is-primary is-ligh",onClick:function(){l(n+1,t)}},"+")),c.a.createElement("div",{class:"column is-2"},c.a.createElement("button",{class:"button is-danger is-light",onClick:function(){l(n-1,t)}},"-")))))}}]),a}(c.a.Component),y=function(e){Object(v.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(d.a)(this,a),n=t.call(this,e),b.apps.length||b.initializeApp(f),n.state={data:[],loading:!0},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(u.a.mark((function e(){var t,a=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=b.database().ref("players");try{t.on("value",(function(e){a.setState({data:e.val(),loading:!1});var t=[];e.forEach((function(e){t.push(e.val())})),a.setState({data:t})}))}catch(n){console.log(n)}case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"sortData",value:function(){var e=this.state.data.sort((function(e,t){return e.value<t.value}));this.setState({data:e})}},{key:"handleCount",value:function(e,t){var a=b.database().ref("players"),n=Object(o.a)(this.state.data),c=this.state.data.findIndex((function(e){return e.nom===t}));n[c]=Object(r.a)(Object(r.a)({},n[c]),{},{value:e}),this.setState({data:n});try{a.set(this.state.data.sort((function(e,t){return e.value<t.value})))}catch(l){console.log(l)}}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{class:"App"},c.a.createElement("div",{class:"main container"},c.a.createElement("div",{class:"container mytitle"},c.a.createElement("h1",{class:"title is-1"},"Failed chall counter")),c.a.createElement("div",{class:"container has-text-centered"},c.a.createElement("div",{class:"tile mytile"},c.a.createElement("ul",{class:"tile is-vertical players"},this.state.data.map((function(t,a){return c.a.createElement(E,{nom:t.nom,value:t.value,updateCount:e.handleCount.bind(e),key:a})})))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.32c09713.chunk.js.map