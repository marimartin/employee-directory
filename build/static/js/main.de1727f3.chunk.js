(this.webpackJsonpmain=this.webpackJsonpmain||[]).push([[0],{27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},55:function(e,t){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),c=a.n(r),s=a(9),i=a.n(s),l=a(3),d=a(4),o=a(6),h=a(5),j=(a(27),a(57)),u=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)(j.a,{children:Object(n.jsxs)("div",{className:"header pb-2 pt-3 bg-dark text-light",children:[Object(n.jsx)("h1",{children:"Employees"}),Object(n.jsx)("p",{children:'Click "name" filter alphabetically or use the searchbox to find a specific employee'})]})})})}}]),a}(r.Component);a(28);var b=function(e){var t=e.users;function a(e){var t=e.split("-"),a=t[0];return[t[1],t[2].split("T")[0],a].join("-")}return Object(n.jsx)("tbody",{children:void 0!==t[0]&&void 0!==t[0].name?t.map((function(e){var t=e.login,r=e.name,c=e.picture,s=e.phone,i=e.email,l=e.dob;return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{"data-th":"Image",className:"align-middle",children:Object(n.jsx)("img",{src:c.medium,alt:"profile image for "+r.first+r.last,className:"img-responsive"})}),Object(n.jsxs)("td",{"data-th":"Name",className:"name-cell align-middle",children:[r.first," ",r.last]}),Object(n.jsx)("td",{"data-th":"Phone",className:"align-middle",children:s}),Object(n.jsx)("td",{"data-th":"Email",className:"align-middle",children:Object(n.jsx)("a",{href:"mailto:"+i,target:"__blank",children:i})}),Object(n.jsx)("td",{"data-th":"DOB",className:"align-middle",children:a(l.date)})]},t.uuid)})):Object(n.jsx)(n.Fragment,{})})};a(29);var m=function(e){var t=e.headings,a=e.users,r=e.handleSort;return Object(n.jsx)("div",{children:Object(n.jsx)(j.a,{children:Object(n.jsx)("div",{className:"dataTable mt-5",children:Object(n.jsxs)("table",{id:"table",className:"table table-striped table-hover table-condensed",children:[Object(n.jsx)("thead",{children:Object(n.jsx)("tr",{children:t.map((function(e){var t=e.name,a=e.width;return Object(n.jsxs)("th",{className:"col",style:{width:a},onClick:function(){r(t.toLowerCase())},children:[t,Object(n.jsx)("span",{className:"pointer"})]},t)}))})}),Object(n.jsx)(b,{users:a})]})})})})};a(30);var f=function(e){var t=e.handleSearchChange;return Object(n.jsx)("div",{className:"searchbox",children:Object(n.jsx)("form",{className:"form-inline",children:Object(n.jsx)("input",{className:"form-control",type:"search",placeholder:"Search","aria-label":"Search",onChange:function(e){return t(e)}})})})};a(31);var O=function(e){var t=e.handleSearchChange;return Object(n.jsx)("div",{children:Object(n.jsx)(j.a,{children:Object(n.jsx)("nav",{className:"navbar navbar-expand navbar-light bg-light",children:Object(n.jsx)("div",{className:"navbar-collapse row justify-content-center pt-2 pb-2 bg-warning",id:" navbarnav",children:Object(n.jsx)(f,{handleSearchChange:t})})})})})},v=a(10),x=a.n(v),p=function(){return x.a.get("https://randomuser.me/api/?results=200&nat=us")},g=(a(49),function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={users:[{}],order:"descend",filteredUsers:[{}]},e.heading=[{name:"Image",width:"10%"},{name:"Name",width:"10%"},{name:"Phone",width:"20%"},{name:"Email",width:"20%"},{name:"Dob",width:"10%"}],e.handleSort=function(t){"descend"===e.state.order?e.setState({order:"ascend"}):e.setState({order:"descend"});var a=e.state.filteredUsers.sort((function(a,n){return"ascend"===e.state.order?void 0===a[t]?1:void 0===n[t]?-1:"name"===t?a[t].first.localeCompare(n[t].first):a[t]-n[t]:void 0===a[t]?1:void 0===n[t]?-1:"name"===t?n[t].first.localeCompare(a[t].first):n[t]-a[t]}));e.setState({filteredUsers:a})},e.handleSearchChange=function(t){console.log(t.target.value);var a=t.target.value,n=e.state.users.filter((function(e){return-1!==Object.values(e).join("").toLowerCase().indexOf(a.toLowerCase())}));e.setState({filteredUsers:n})},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;p().then((function(t){e.setState({users:t.data.results,filteredUsers:t.data.results})}))}},{key:"render",value:function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(O,{handleSearchChange:this.handleSearchChange}),Object(n.jsx)("div",{className:"data-area",children:Object(n.jsx)(m,{headings:this.heading,users:this.state.filteredUsers,handleSort:this.handleSort})})]})}}]),a}(r.Component)),N=(a(50),function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(g,{})})}}]),a}(r.Component));a(51);var S=function(e){var t=e.children;return Object(n.jsx)("div",{className:"wrapper",children:t})};a(52);var C=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(S,{children:[Object(n.jsx)(u,{}),Object(n.jsx)(N,{})]})})};a(53),a(54),a(55);i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(C,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.de1727f3.chunk.js.map