(this["webpackJsonp3000-search"]=this["webpackJsonp3000-search"]||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},106:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(22),r=a.n(l),o=(a(76),a(28)),i=a(29),s=a(41),u=a(38),m=a(44),d=a(10),f=a(115),v=a(116),p=a(69),b=a(7),h=a(112),E=a(108),g=a(109),x=a(117),w=function(e){var t=e.options.map((function(e,t){return c.a.createElement("option",{value:e.val,key:t},e.text)}));return c.a.createElement(E.a,{className:"justify-content-md-center mt-2 mb-2"},c.a.createElement(g.a,{md:"5"},c.a.createElement(x.a,{as:"select",custom:!0,onChange:function(t){var a=e.options.filter((function(e){return e.val===t.target.value}))[0].text;e.setCounty({selected:t.target.value,selectedName:a}),e.setTownship({selected:"",selectedName:""})}.bind(void 0),value:e.county.selected},c.a.createElement("option",{value:"",disabled:!0},"---\u8acb\u9078\u64c7\u7e23\u5e02---"),t)))},j=a(40),O=a(11),y=a.n(O),N=function(e){var t=Object(n.useState)([]),a=Object(b.a)(t,2),l=a[0],r=a[1];Object(n.useEffect)((function(){e.county.selected&&y.a.get("https://api.nlsc.gov.tw/other/ListTown1/".concat(e.county.selected),(function(t){if(y()(t).find("townItem").length>0){var a=Object(j.a)(y()(t).find("townItem")).filter((function(e){return y()(e).find("towncode01").html()})).map((function(t){return y()(t).find("townname").html(y()(t).find("townname").html().replace(/(\u81fa\u7063|\u798f\u5efa)\u7701/,"")),{text:y()(t).find("townname").html().replace(e.county.selectedName,""),val:y()(t).find("townname").html().replace(e.county.selectedName,"")}}));r(a)}}))}),[e.county.selected,e.county.selectedName]);var o=l.map((function(e,t){return c.a.createElement("option",{value:e.val,key:t},e.text)}));return e.county.selected&&c.a.createElement(E.a,{className:"justify-content-md-center mb-2 mt-2"},c.a.createElement(g.a,{md:"5"},c.a.createElement(x.a,{as:"select",custom:!0,onChange:function(t){e.setTownship({selected:t.target.value,selectedName:t.target.value})}.bind(void 0),value:e.township.selected},c.a.createElement("option",{value:"",disabled:!0},"---\u8acb\u9078\u64c7\u9109\u93ae\u5e02\u5340---"),o)))},k=a(63),_=a.n(k),S=a(118),C=a(110),M=a(120),I=a(111),T=function(e,t){if(e){if((e=e.replace(/.*(?:<br>|^)+\*(.*)<br>/,"$1").replace(/\u672c\u65e5\u53ef\u53d7\u7406\u91cf\uff1a(\w+)/,"$1")).includes("\u672c\u65e5\u672a\u71df\u696d"))return"#c0c0c0";var a=t/e*100;switch(!0){case a>80:return"#8d8";case a>50:return"#fa0";case a>30:return"#f00";default:return"#c0c0c0"}}},P=(a(97),function(e){var t=Object(n.useState)([]),a=Object(b.a)(t,2),l=a[0],r=a[1],o=Object(n.useState)(""),i=Object(b.a)(o,2),s=i[0],u=i[1],m=Object(n.useState)(0),d=Object(b.a)(m,2),f=d[0],v=d[1],p=Object(n.useState)(0),h=Object(b.a)(p,2),x=h[0],w=h[1],j=Object(n.useState)(0),O=Object(b.a)(j,2),y=O[0],N=O[1],k=Object(n.useState)(!0),P=Object(b.a)(k,2),B=P[0],L=P[1];Object(n.useEffect)((function(){L(!0),_.a.get("https://3000.gov.tw/hpgapi-openmap/api/getPostData").then((function(t){for(var a=t.data.filter((function(t){return e.county.selected?t.hsnCd===e.county.selected:t})).filter((function(t){return e.township.selected?t.townNm===e.township.selected:t})),n=[],c=0,l=Math.floor(a.length/48);c<l;c++)n.push(a.slice(48*c,48*(c+1)));a.length%48&&n.push(a.slice(48*c,a.length)),u(a[0].updateTime),r(n),w(l),L(!1),N(0)}))}),[e.county.selected,e.township.selected]);var $;l.length&&($=l[f].map((function(e,t){return c.a.createElement(g.a,{lg:"3",className:"mb-2",key:Math.random().toString(36).substring(2,9)},c.a.createElement(S.a,{style:{background:T(e.busiMemo,e.total)}},c.a.createElement(S.a.Body,null,c.a.createElement(S.a.Title,null,e.storeNm),c.a.createElement(S.a.Text,{className:"mb-1"},"\u806f\u7d61\u96fb\u8a71\uff1a",e.tel,c.a.createElement("br",null),c.a.createElement("span",{dangerouslySetInnerHTML:{__html:e.busiTime}}),c.a.createElement("span",{dangerouslySetInnerHTML:{__html:e.busiMemo}}),"\u5b58\u91cf\uff1a",e.total),c.a.createElement(C.a,{onClick:function(){window.open("".concat("https://www.google.com.tw/maps/place/").concat(e.zipCd).concat(e.addr.replace(/\(.*\)/,""),"/@").concat(e.latitude,",").concat(e.longitude),"_blank").focus()},title:"\u6253\u958b google \u5730\u5716",variant:"dark"},e.addr))))})));for(var z=function(e){e>-1&&e<=x&&(v(e),N(e))},A=[],F=function(e){var t=e+1;y<3?t<y+4||t>x-4?A.push(c.a.createElement(M.a.Item,{key:t,active:t===y,onClick:function(){return z(t)}},t+1)):t===y+5&&A.push(c.a.createElement(M.a.Ellipsis,{key:"ellipsis-1"})):(t<2||t>y-2)&&(t<y+2||t>x-2)?A.push(c.a.createElement(M.a.Item,{key:t,active:t===y,onClick:function(){return z(t)}},t+1)):t===y-2?A.push(c.a.createElement(M.a.Ellipsis,{key:"ellipsis-1"})):t===y+2&&A.push(c.a.createElement(M.a.Ellipsis,{key:"ellipsis-2"}))},D=0;D<x;D++)F(D);var H=c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement(M.a,null,c.a.createElement(M.a.First,{onClick:function(){return z(1)},disabled:0===y}),c.a.createElement(M.a.Prev,{onClick:function(){return z(f-1)},disabled:0===y}),c.a.createElement(M.a.Item,{key:"0",active:0===y,onClick:function(){return z(0)}},"1"),A,c.a.createElement(M.a.Next,{onClick:function(){return z(f+1)},disabled:y===x}),c.a.createElement(M.a.Last,{onClick:function(){return z(x)},disabled:y===x})));return c.a.createElement("div",{className:"overflow-hidden py-2"},B?c.a.createElement("div",{className:"vh-100 d-flex align-items-center justify-content-center"},c.a.createElement(I.a,{animation:"border",role:"status"},c.a.createElement("span",{className:"sr-only"},"Loading..."))):c.a.createElement(c.a.Fragment,null,c.a.createElement(E.a,{className:"justify-content-end mb-1"},c.a.createElement(g.a,{className:"text-right"},s)),c.a.createElement(E.a,null,$),H))}),B=function(){var e=Object(n.useState)({selected:"",selectedName:""}),t=Object(b.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)({selected:"",selectedName:""}),o=Object(b.a)(r,2),i=o[0],s=o[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(h.a,{fluid:!0},c.a.createElement(w,{options:[{text:"\u81fa\u5317\u5e02",val:"A"},{text:"\u81fa\u4e2d\u5e02",val:"B"},{text:"\u57fa\u9686\u5e02",val:"C"},{text:"\u81fa\u5357\u5e02",val:"D"},{text:"\u9ad8\u96c4\u5e02",val:"E"},{text:"\u65b0\u5317\u5e02",val:"F"},{text:"\u5b9c\u862d\u7e23",val:"G"},{text:"\u6843\u5712\u5e02",val:"H"},{text:"\u65b0\u7af9\u5e02",val:"O"},{text:"\u65b0\u7af9\u7e23",val:"J"},{text:"\u82d7\u6817\u7e23",val:"K"},{text:"\u5357\u6295\u7e23",val:"M"},{text:"\u5f70\u5316\u7e23",val:"N"},{text:"\u96f2\u6797\u7e23",val:"P"},{text:"\u5609\u7fa9\u5e02",val:"I"},{text:"\u5609\u7fa9\u7e23",val:"Q"},{text:"\u5c4f\u6771\u7e23",val:"T"},{text:"\u82b1\u84ee\u7e23",val:"U"},{text:"\u81fa\u6771\u7e23",val:"V"},{text:"\u6f8e\u6e56\u7e23",val:"X"},{text:"\u91d1\u9580\u7e23",val:"W"},{text:"\u9023\u6c5f\u7e23",val:"Z"}],county:a,setCounty:l,setTownship:s}),c.a.createElement(N,{county:a,township:i,setTownship:s}),c.a.createElement(P,{county:a,township:i})))},L=a(119),$=a(113),z=a(121),A=a(114),F=a(122),D=a(64),H=a(15),K=a(8),J=a.n(K),U=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"createLeafletElement",value:function(e){var t=[{color:"8d8",text:"\u6578\u91cf\u5145\u8db3"},{color:"fa0",text:"\u6578\u91cf\u5c11\u65bc\u4e00\u534a"},{color:"f00",text:"\u6578\u91cf\u6975\u5c11"},{color:"c0c0c0",text:"\u5df2\u9818\u5b8c\u6216\u672a\u53d7\u7406"}],a=J.a.control({position:"bottomright"});return a.onAdd=function(){var e=J.a.DomUtil.create("div","legend");return e.innerHTML=t.reduce((function(e,t){return"".concat(e,'\n        <div class="legend__lebel">\n          <i style="background: #').concat(t.color,'"></i>').concat(t.text,"\n        </div>  \n      ")}),""),e},a}}]),a}(D.a),W=Object(H.b)(U),G=(a(99),function(e){var t=Object(n.useState)([{text:"\u81fa\u5317\u5e02",val:"A"},{text:"\u81fa\u4e2d\u5e02",val:"B"},{text:"\u57fa\u9686\u5e02",val:"C"},{text:"\u81fa\u5357\u5e02",val:"D"},{text:"\u9ad8\u96c4\u5e02",val:"E"},{text:"\u65b0\u5317\u5e02",val:"F"},{text:"\u5b9c\u862d\u7e23",val:"G"},{text:"\u6843\u5712\u5e02",val:"H"},{text:"\u65b0\u7af9\u5e02",val:"O"},{text:"\u65b0\u7af9\u7e23",val:"J"},{text:"\u82d7\u6817\u7e23",val:"K"},{text:"\u5357\u6295\u7e23",val:"M"},{text:"\u5f70\u5316\u7e23",val:"N"},{text:"\u96f2\u6797\u7e23",val:"P"},{text:"\u5609\u7fa9\u5e02",val:"I"},{text:"\u5609\u7fa9\u7e23",val:"Q"},{text:"\u5c4f\u6771\u7e23",val:"T"},{text:"\u82b1\u84ee\u7e23",val:"U"},{text:"\u81fa\u6771\u7e23",val:"V"},{text:"\u6f8e\u6e56\u7e23",val:"X"},{text:"\u91d1\u9580\u7e23",val:"W"},{text:"\u9023\u6c5f\u7e23",val:"Z"}]),a=Object(b.a)(t,1)[0],l=Object(n.useState)([]),r=Object(b.a)(l,2),o=r[0],i=r[1],s=Object(n.useState)(""),u=Object(b.a)(s,2),m=u[0],d=u[1],f=Object(n.useState)(""),v=Object(b.a)(f,2),p=v[0],h=v[1],E=Object(n.useState)([]),g=Object(b.a)(E,2),x=g[0],w=g[1],O=Object(n.useState)(""),N=Object(b.a)(O,2),k=N[0],_=N[1],S=Object(n.useState)(!0),C=Object(b.a)(S,2),M=C[0],I=C[1],T=function(e){var t=a[a.findIndex((function(t){return t.val===e.target.value}))].text;d(e.target.value),function(e,t){y.a.get("https://api.nlsc.gov.tw/other/ListTown1/".concat(e),(function(e){if(y()(e).find("townItem").length>0){var a=Object(j.a)(y()(e).find("townItem")).filter((function(e){return y()(e).find("towncode01").html()})).map((function(e){return y()(e).find("townname").html().replace(new RegExp("(\u81fa\u7063\u7701|\u798f\u5efa\u7701)(".concat(t,")")),""),{text:y()(e).find("townname").html(),val:y()(e).find("townname").html()}}));i(a)}}))}(e.target.value,t),h("")},P=function(e,t){if(e.includes("\u672c\u65e5\u672a\u71df\u696d"))return"red";var a=t/(e=e.replace(/\u672c\u65e5\u53ef\u53d7\u7406\u91cf\uff1a(\w+)/,"$1"))*100;switch(!0){case a>80:return"green";case a>50:return"yellow";case a>0:return"orange";default:return"red"}};return Object(n.useEffect)((function(){w(e.listItems)}),[e.listItems]),Object(n.useEffect)((function(){var t;t=m&&""!==m?p&&""!==p?e.listItems.filter((function(e){return e.hsnCd===m&&e.townNm===p})):e.listItems.filter((function(e){return e.hsnCd===m})):e.listItems,w(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"storeNm";return e.length>0&&k?e.filter((function(e){return e[t].includes(k)})):e}(t))}),[m,p,k,e.listItems]),c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{className:"searchBtn ".concat(M?"show":""),onClick:function(){return I(!M),void e.setShow(!e.show)}},c.a.createElement("span",{role:"img","aria-label":"string"},"\ud83d\udd0d")),c.a.createElement("section",{className:"sidebar ".concat(M?"":"hide")},c.a.createElement("div",{className:"sidebar__container"},c.a.createElement("div",{className:"select__container"},c.a.createElement("select",{className:"select__item",value:m,onChange:function(e){return T(e)}},c.a.createElement("option",{value:""},"\u8acb\u9078\u64c7\u7e23\u5e02"),a.map((function(e){return c.a.createElement("option",{value:e.val,key:e.val},e.text)}))),c.a.createElement("select",{className:"select__item",value:p,onChange:function(e){return function(e){return h(e.target.value)}(e)}},c.a.createElement("option",{value:""},"\u8acb\u9078\u64c7\u9109\u93ae\u5e02\u5340"),o.map((function(e){return c.a.createElement("option",{value:e.val,key:e.val},e.text)}))),c.a.createElement("input",{className:"select__item",onKeyUp:function(e){return _(e.target.value)},placeholder:"\u8acb\u8f38\u5165\u6b32\u641c\u5c0b\u90f5\u5c40\u540d\u7a31"})),c.a.createElement("ul",{className:"list"},x.map((function(t){return c.a.createElement("li",{className:"list__card",key:t.storeNm},c.a.createElement("div",{className:"list__card__body"},t.hsnNm,c.a.createElement("br",null),c.a.createElement("h1",{className:"list__card__body__title"},t.storeNm),t.addr,c.a.createElement("br",null),t.busiMemo.replace(/.*(?:<br>|^)+\*(.*)<br>/,"$1"),c.a.createElement("br",null),"\u5269\u9918\u6578\u91cf\uff1a",c.a.createElement("span",{className:P(t.busiMemo.replace(/.*(?:<br>|^)+\*(.*)<br>/,"$1"),t.total)},t.total),c.a.createElement("br",null)),c.a.createElement("button",{onClick:function(){return a=t,e.setPosition([a.latitude,a.longitude]),I(!1),void e.setShow(!1);var a}},"\u524d\u5f80 ",String.fromCharCode(187),c.a.createElement("span",{className:"addr"}," ",t.storeNm," ")))}))))))}),Q=function(e){var t='\n  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="marker">\n    <path stroke="#000000" fill="'.concat(e,'" d="M15.938 32S6 17.938 6 11.938C6 .125 15.938 0 15.938 0S26 .125 26 11.875C26 18.062 15.938 32 15.938 32zM16 6c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4z"/>\n  </svg>');return Object(K.divIcon)({className:"marker",html:t,iconSize:[40,40],iconAnchor:[12,24],popupAnchor:[7,-16]})},V=(a(100),a(101),{width:"100%",height:"100%"}),X=function(){var e=Object(n.useState)(!0),t=Object(b.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)([22.627277,120.301437]),o=Object(b.a)(r,2),i=o[0],s=o[1],u=Object(n.useState)([]),m=Object(b.a)(u,2),d=m[0],f=m[1],v=Object(n.useState)(13),p=Object(b.a)(v,2),h=p[0],E=p[1];Object(n.useEffect)((function(){y.a.get("https://3000.gov.tw/hpgapi-openmap/api/getPostData",(function(e){f(e)})),navigator.geolocation&&navigator.geolocation.watchPosition((function(e){s([e.coords.latitude,e.coords.longitude])}))}),[]),Object(n.useEffect)((function(){E(18)}),[i]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(G,{setShow:l,show:a,setPosition:s,listItems:d}),c.a.createElement("div",{className:"mainMap "+(a?"show":"")},c.a.createElement(L.a,{center:i,style:V,zoom:h,zoomControl:!1},c.a.createElement($.a,{position:"topright"}),c.a.createElement(z.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),c.a.createElement(W,null),c.a.createElement(A.a,{position:i,icon:Q("#1CA0E9")},c.a.createElement(F.a,null,"\u73fe\u5728\u4f4d\u7f6e")),d.filter((function(e){return function(e,t,a,n){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"K";if(e===a&&t===n)return 0;var l=Math.PI*e/180,r=Math.PI*a/180,o=t-n,i=Math.PI*o/180,s=Math.sin(l)*Math.sin(r)+Math.cos(l)*Math.cos(r)*Math.cos(i);return s>1&&(s=1),s=60*(s=180*(s=Math.acos(s))/Math.PI)*1.1515,"K"===c&&(s*=1.609344),"N"===c&&(s*=.8684),s}(i[0],i[1],e.latitude,e.longitude)<2})).map((function(e){return c.a.createElement(A.a,{position:[e.latitude,e.longitude],icon:Q(T(e.busiMemo,e.total)),key:e.storeNm},c.a.createElement(F.a,null,c.a.createElement("h1",{className:"list__card__body__title"},e.storeNm),e.addr,c.a.createElement("br",null),e.busiMemo.replace(/.*(?:<br>|^)+\*(.*)<br>/,"$1"),c.a.createElement("br",null),"\u5269\u9918\u6578\u91cf\uff1a",c.a.createElement("span",{className:T(e.busiMemo.replace(/.*(?:<br>|^)+\*(.*)<br>/,"$1"),e.total)},e.total)))})))))},Z=(a(102),a(103),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement(m.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(f.a,{bg:"dark",variant:"dark",expand:"lg"},c.a.createElement(f.a.Brand,{href:"#"},"\u632f\u8208\u5238\u90f5\u5c40\u5eab\u5b58\u901f\u67e5"),c.a.createElement(v.a,null,c.a.createElement(p.a,{as:m.b,className:"text-light",to:"/"},"\u8868\u683c"),c.a.createElement(p.a,{as:m.b,className:"text-light",to:"/map"},"\u5730\u5716"))),c.a.createElement(d.c,null,c.a.createElement(d.a,{exact:!0,path:"/"},c.a.createElement(B,null)),c.a.createElement(d.a,{path:"/map"},c.a.createElement(X,null))),c.a.createElement("footer",{className:"bg-light position-fixed fixed-bottom text-center"},"made by listennn08.")))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},71:function(e,t,a){e.exports=a(106)},76:function(e,t,a){},97:function(e,t,a){},99:function(e,t,a){}},[[71,1,2]]]);
//# sourceMappingURL=main.b931daf8.chunk.js.map