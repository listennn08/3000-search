(this["webpackJsonp3000-search"]=this["webpackJsonp3000-search"]||[]).push([[0],{37:function(e,t,a){e.exports=a(67)},42:function(e,t,a){},43:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(9),o=a.n(c),r=(a(42),a(28)),i=a(29),s=a(35),u=a(32),m=(a(43),a(74)),d=a(73),h=(a(44),a(69)),p=a(70),v=a(75),f=function(e){var t=e.options.map((function(e,t){return l.a.createElement("option",{value:e.val,key:t},e.text)}));return l.a.createElement(h.a,{className:"justify-content-md-center mt-2 mb-2"},l.a.createElement(p.a,{md:"5"},l.a.createElement(v.a,{as:"select",custom:!0,onChange:function(t){var a=e.options.filter((function(e){return e.val===t.target.value}))[0].text,n={selected:t.target.value,selectedName:a};e.callback({county:n}),e.callback({township:{selected:"",selectedName:""}})}.bind(void 0),value:e.county.selected},l.a.createElement("option",{value:"",disabled:!0},"---\u8acb\u9078\u64c7\u7e23\u5e02---"),t)))},E=a(34),b=a(7),w=a(6),y=a.n(w),x=function(e){var t=Object(n.useState)([]),a=Object(b.a)(t,2),c=a[0],o=a[1];Object(n.useEffect)((function(){e.county.selected&&y.a.get("https://api.nlsc.gov.tw/other/ListTown1/".concat(e.county.selected),(function(t){if(y()(t).find("townItem").length>0){var a=Object(E.a)(y()(t).find("townItem")).filter((function(e){return y()(e).find("towncode01").html()})).map((function(t){return y()(t).find("townname").html().indexOf("\u81fa\u7063\u7701")>-1?y()(t).find("townname").html(y()(t).find("townname").html().replace("\u81fa\u7063\u7701","")):y()(t).find("townname").html().indexOf("\u798f\u5efa\u7701")>-1&&y()(t).find("townname").html(y()(t).find("townname").html().replace("\u798f\u5efa\u7701","")),{text:y()(t).find("townname").html().replace(e.county.selectedName,""),val:y()(t).find("townname").html().replace(e.county.selectedName,"")}}));o(a)}}))}),[e.county.selected,e.county.selectedName]);var r=c.map((function(e,t){return l.a.createElement("option",{value:e.val,key:t},e.text)}));return e.county.selected&&l.a.createElement(h.a,{className:"justify-content-md-center mb-2 mt-2"},l.a.createElement(p.a,{md:"5"},l.a.createElement(v.a,{as:"select",custom:!0,onChange:function(t){var a={selected:t.target.value,selectedName:t.target.value};e.callback({township:a})}.bind(void 0),value:e.township.selected},l.a.createElement("option",{value:"",disabled:!0},"---\u8acb\u9078\u64c7\u9109\u93ae\u5e02\u5340---"),r)))},k=a(30),g=a.n(k),O=a(76),j=a(71),N=a(72),C=function(e){var t=Object(n.useState)([]),a=Object(b.a)(t,2),c=a[0],o=a[1],r=Object(n.useState)(""),i=Object(b.a)(r,2),s=i[0],u=i[1],m=Object(n.useState)(0),d=Object(b.a)(m,2),h=d[0],p=d[1],v=Object(n.useState)(0),f=Object(b.a)(v,2),E=f[0],w=f[1],y=Object(n.useState)(0),x=Object(b.a)(y,2),k=x[0],C=x[1],S=Object(n.useState)(!1),I=Object(b.a)(S,2),T=I[0],B=I[1];Object(n.useEffect)((function(){B(!0),g.a.get("https://3000.gov.tw/hpgapi-openmap/api/getPostData").then((function(t){var a=t.data.filter((function(t){return e.county.selected?t.hsnCd===e.county.selected:t})).filter((function(t){return e.township.selected?t.townNm===e.township.selected:t}));u(a[0].updateTime),o(a),w(a.length/50),B(!1),C(0)}))}),[e.county.selected,e.township.selected]);for(var M=c.slice(50*h,50*(h+1)).map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,t+1),l.a.createElement("td",null,e.hsnNm),l.a.createElement("td",null,e.storeNm),l.a.createElement("td",null,l.a.createElement("a",{href:"".concat("https://www.google.com.tw/maps/place/").concat(e.zipCd).concat(e.addr.replace(/\(.*\)/,""),"/@").concat(e.latitude,",").concat(e.longitude),title:"\u6253\u958b google \u5730\u5716",target:"_bland"},e.addr)),l.a.createElement("td",null,e.tel),l.a.createElement("td",null,e.busiTime.split("<br>").map((function(e,t){return l.a.createElement("div",{key:"busiT".concat(t)},e)}))),l.a.createElement("td",null,e.busiMemo.split("<br>").map((function(e,t){return l.a.createElement("div",{key:"busiM".concat(t)},e)}))),l.a.createElement("td",null,e.total))})),J=function(e){e>=0&&e<=E&&(console.log(e),p(e),C(e))},L=[],P=function(e){k<3?e<k+4||e>E-4?L.push(l.a.createElement(O.a.Item,{key:e,active:e===k,onClick:function(){return J(e)}},e+1)):e===k+5&&L.push(l.a.createElement(O.a.Ellipsis,{key:"ellipsis-1"})):(e<2||e>k-2)&&(e<k+2||e>E-2)?L.push(l.a.createElement(O.a.Item,{key:e,active:e===k,onClick:function(){return J(e)}},e+1)):e===k-2?L.push(l.a.createElement(O.a.Ellipsis,{key:"ellipsis-1"})):e===k+2&&L.push(l.a.createElement(O.a.Ellipsis,{key:"ellipsis-2"}))},W=1;W<E;W++)P(W);var A=l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement(O.a,null,l.a.createElement(O.a.First,{onClick:function(){return J(1)},disabled:0===k}),l.a.createElement(O.a.Prev,{onClick:function(){return J(h-1)},disabled:0===k}),l.a.createElement(O.a.Item,{key:"0",active:0===k,onClick:function(){return J(0)}},"1"),L,l.a.createElement(O.a.Next,{onClick:function(){return J(h+1)},disabled:k===E}),l.a.createElement(O.a.Last,{onClick:function(){return J(E)},disabled:k===E})));return l.a.createElement("div",{className:"overflow-hidden"},l.a.createElement(j.a,{striped:!0,bordered:!0,hover:!0,className:"w-100"},l.a.createElement("caption",{className:"text-right"},"\u66f4\u65b0\u6642\u9593\uff1a",s),l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"\u7e23\u5e02\u540d\u7a31"),l.a.createElement("th",null,"\u5206\u5c40\u540d\u7a31"),l.a.createElement("th",null,"\u5730\u5740"),l.a.createElement("th",null,"\u96fb\u8a71"),l.a.createElement("th",null,"\u71df\u696d\u6642\u9593"),l.a.createElement("th",null,"\u71df\u696d\u5099\u8a3b"),l.a.createElement("th",null,"\u5b58\u91cf"))),l.a.createElement("tbody",null,M)),A,l.a.createElement(N.a,{animation:"border",role:"status",className:"position-absolute absolute-bottom "+(T?"visible":"invisible")},l.a.createElement("span",{className:"sr-only"},"Loading...")))},S=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).callback=function(t){e.setState(t)},e.state={cnOptions:[{text:"\u81fa\u5317\u5e02",val:"A"},{text:"\u81fa\u4e2d\u5e02",val:"B"},{text:"\u57fa\u9686\u5e02",val:"C"},{text:"\u81fa\u5357\u5e02",val:"D"},{text:"\u9ad8\u96c4\u5e02",val:"E"},{text:"\u65b0\u5317\u5e02",val:"F"},{text:"\u5b9c\u862d\u7e23",val:"G"},{text:"\u6843\u5712\u5e02",val:"H"},{text:"\u65b0\u7af9\u5e02",val:"O"},{text:"\u65b0\u7af9\u7e23",val:"J"},{text:"\u82d7\u6817\u7e23",val:"K"},{text:"\u5357\u6295\u7e23",val:"M"},{text:"\u5f70\u5316\u7e23",val:"N"},{text:"\u96f2\u6797\u7e23",val:"P"},{text:"\u5609\u7fa9\u5e02",val:"I"},{text:"\u5609\u7fa9\u7e23",val:"Q"},{text:"\u5c4f\u6771\u7e23",val:"T"},{text:"\u82b1\u84ee\u7e23",val:"U"},{text:"\u81fa\u6771\u7e23",val:"V"},{text:"\u6f8e\u6e56\u7e23",val:"X"},{text:"\u91d1\u9580\u7e23",val:"W"},{text:"\u9023\u6c5f\u7e23",val:"Z"}],county:{selected:"",selectedName:""},township:{selected:"",selectedName:""}},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(m.a,{bg:"dark",variant:"dark",expand:"lg"},l.a.createElement(m.a.Brand,{href:"#"},"\u632f\u8208\u5238\u90f5\u5c40\u5eab\u5b58\u901f\u67e5")),l.a.createElement(d.a,null,l.a.createElement(f,{options:this.state.cnOptions,county:this.state.county,callback:this.callback}),l.a.createElement(x,{county:this.state.county,township:this.state.township,callback:this.callback}),l.a.createElement(C,{county:this.state.county,township:this.state.township})),l.a.createElement("footer",{className:"bg-light position-fixed fixed-bottom"},"made by listennn08."))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.baf88908.chunk.js.map