(this.webpackJsonpomdbapi=this.webpackJsonpomdbapi||[]).push([[0],{45:function(e,t,a){e.exports=a.p+"static/media/no-poster.990a45c6.jpg"},52:function(e,t,a){e.exports=a(82)},81:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(11),c=a.n(o),l=a(15),i=a(16),s=a.n(i),u=a(50),m=a(23),d=a(9),v=a(87),p=a(88);var E=function(e){var t=e.movie,a=e.show,o=e.setShow,c=e.addFav,l=Object(n.useState)(""),i=Object(d.a)(l,2),s=i[0],u=i[1],m=function(){return o(!1)};return r.a.createElement(v.a,{show:a,onHide:m},r.a.createElement(v.a.Header,{closeButton:!0},r.a.createElement(v.a.Title,null,"Would you like to write a note?")),r.a.createElement(v.a.Body,null,r.a.createElement("input",{style:{width:"100%"},onChange:function(e){u(e.target.value)},placeholder:"Your Note..."})),r.a.createElement(v.a.Footer,null,r.a.createElement(p.a,{onClick:m,variant:"secondary"},"Close"),r.a.createElement(p.a,{onClick:function(e){return function(e,t,a){document.getElementsByClassName("added-fav")[0].classList.add("active"),c(e,t,a),m(),setTimeout((function(){document.getElementsByClassName("added-fav")[0].classList.remove("active")}),2e3)}(e,t,s)},variant:"primary"},"Add to Favorite")))},f=a(84),h=a(85),g=a(86),b=a(45),y=a.n(b),w=a(46);var O=Object(l.b)((function(e){return{getMovieReducer:e.getMovieReducer}}),null)((function(e){var t=Object(n.useState)(!1),a=Object(d.a)(t,2),o=a[0],c=a[1],l=e.movie,i=e.addFav,s=e.searchList;return r.a.createElement(f.a,null,r.a.createElement(h.a,null,r.a.createElement(g.a,{xl:4,md:4,sm:6,xs:12},r.a.createElement("img",{style:{width:300,height:400},src:"N/A"!==l.Poster?l.Poster:y.a,alt:l.Title})),r.a.createElement(g.a,{xl:4,md:4,sm:6,xs:12,className:"movie-info"},r.a.createElement("div",null,r.a.createElement("p",null,"Name:"),r.a.createElement("a",{href:"https://www.google.com.tr/search?tbm=vid&hl=tr&source=hp&biw=&bih=&q=".concat(l.Title),rel:"noopener noreferrer",target:"_blank",style:{color:"green"}},l.Title)),r.a.createElement("div",null,r.a.createElement("p",null,"Released:"),r.a.createElement("span",null,l.Released)),r.a.createElement("div",null,r.a.createElement("p",null,"Runtime:"),r.a.createElement("span",null,l.Runtime)),r.a.createElement("div",null,r.a.createElement("p",null,"Genre:"),r.a.createElement("span",null,l.Genre)),r.a.createElement("div",null,r.a.createElement("p",null,"Director:"),r.a.createElement("span",null,l.Director)),r.a.createElement("div",null,r.a.createElement("p",null,"Actors:"),r.a.createElement("span",null,l.Actors)),r.a.createElement("div",null,r.a.createElement("p",null,"Country:"),r.a.createElement("span",null,l.Country)),r.a.createElement("div",null,r.a.createElement("p",null,"Add Your Favorites:"),r.a.createElement("a",{onClick:function(){return c(!0)},href:"#!"},r.a.createElement(w.a,{size:"22",color:"tomato"})))),r.a.createElement(g.a,{xl:4,md:4,sm:6,xs:12,className:"search-list"},r.a.createElement("p",null,"Last search keywords:"),r.a.createElement("div",null,function(e){if(e)return e.reverse().map((function(e,t){return""!==e&&r.a.createElement("span",{key:String(t)},"".concat(e,","))}))}(s))),r.a.createElement(E,{show:o,setShow:c,addFav:i,movie:l})))})),j=a(20);var x=function(e){var t=e.favList;return r.a.createElement("div",{className:"fav-navigation"},r.a.createElement(j.c,{onClick:function(){document.getElementsByClassName("fav-navigation")[0].classList.remove("active")},style:{position:"absolute",top:20,right:20,cursor:"pointer"},size:40}),t.length>0?t.map((function(e,t){return r.a.createElement("div",{key:String(t)},r.a.createElement("p",null,e.movie.Title),e.userNote&&r.a.createElement("p",null,"Note: ",e.userNote))})):r.a.createElement("p",null,"You have not added any movies to your favorites."))};var N=function(e){return r.a.createElement("button",{onClick:function(){document.getElementsByClassName("fav-navigation")[0].classList.add("active")},style:{padding:10,width:50,background:"none",border:"1px solid #333",position:"fixed",top:20,right:20}},r.a.createElement(j.a,{size:"30",color:"tomato"}),r.a.createElement("p",{className:"added-fav"},r.a.createElement(j.b,{color:"green",size:"25"})))},k=a(47),R=function(e,t,a){console.log("%c ".concat(e," - - \u25ba "),"background: #333333;\n         border: 1px solid ".concat(t,";\n         color: ").concat(t,";\n         font-weight: bold;\n         padding: 4px;\n         text-transform: capitalize;\n         "),a)},S=a.n(k).a.create({baseURL:"http://www.omdbapi.com/",timeout:3e4});S.defaults.headers.common["Content-Type"]="application/json",S.interceptors.request.use((function(e){return R("REQUEST","#FFAA00",e),e}),(function(e){return Promise.reject(e)})),S.interceptors.response.use((function(e){return R("RESPONSE","#59FF00 ",e),e}),(function(e){return R("RESPONSE_ERROR","#E50808",e.response?e.response:e),Promise.reject(e)}));var T=S,M=function(e,t){return{type:e,payload:t}},C=function(e,t){return Promise.resolve().then((function(){localStorage.setItem(e,t)}))},_=function(e){return Promise.resolve().then((function(){return localStorage.getItem(e)}))},L=a(48);a(81);var F=Object(l.b)((function(e){return{getMovieReducer:e.getMovieReducer}}),{getMovie:function(e){return function(){var t=Object(m.a)(s.a.mark((function t(a){var n,r,o;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_("searchTypes");case 3:if(0!==(n=t.sent).length){t.next=9;break}return t.next=7,C("searchTypes",e);case 7:t.next=11;break;case 9:return t.next=11,C("searchTypes",n+","+e);case 11:return t.next=13,T.get("?t=".concat(e,"&apikey=676f0853"));case 13:return r=t.sent,t.next=16,r.data;case 16:"True"===(o=t.sent).Response?a({type:"GET_MOVIE",payload:o}):a(M("GET_MOVIE_FAIL",o)),t.next=23;break;case 20:t.prev=20,t.t0=t.catch(0),console.log(t.t0);case 23:case"end":return t.stop()}}),t,null,[[0,20]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=Object(n.useState)(""),a=Object(d.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)(""),i=Object(d.a)(l,2),v=i[0],p=i[1],E=Object(n.useState)([]),f=Object(d.a)(E,2),h=f[0],g=f[1],b=Object(n.useState)([]),y=Object(d.a)(b,2),w=y[0],j=y[1];function k(){return R.apply(this,arguments)}function R(){return(R=Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,_("searchTypes");case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){k(),v&&g(v.split(","))}),[v]);var S,T=function(e,t,a){e.preventDefault();var n={movie:t,userNote:a};j([].concat(Object(u.a)(w),[n]))},M=e.getMovieReducer;return r.a.createElement("div",{className:"App",style:{position:"relative",overflowX:"hidden"}},r.a.createElement("header",{className:"App-header"}),r.a.createElement("div",{className:"search-form container"},r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.getMovie(o),C("searchTypes",o),k(),document.getElementsByClassName("search-form")[0].classList.add("active")}},r.a.createElement("input",{onChange:function(e){c(e.target.value)},placeholder:"Search..."}),r.a.createElement("button",{className:"search-form_btn",type:"submit"},r.a.createElement(L.a,{size:"22"})))),M&&((S=M).movie&&S.movie.Response&&"True"===S.movie.Response?r.a.createElement(O,{searchList:h,movie:S.movie,addFav:T}):S.getMovieError?r.a.createElement("p",{style:{color:"red"}},"".concat(S.getMovieError)):void 0),r.a.createElement(x,{favList:w}),r.a.createElement(N,null))})),A=a(13),I=a(49),B=a(21),P={getMovieError:null,movie:null},z=Object(A.c)({getMovieReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"GET_MOVIE":return Object(B.a)(Object(B.a)({},e),{},{getMovieError:null,movie:n});case"GET_MOVIE_FAIL":return Object(B.a)(Object(B.a)({},e),{},{getMovieError:n.Error,movie:null});default:return e}}}),D=window&&window.__REDUX_DEVTOOLS_EXTENSION__,G=[I.a],V=[A.a.apply(void 0,G)];"function"===typeof D&&V.push(D());var U=A.d.apply(void 0,V),W=Object(A.e)(z,{},U);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=r.a.createElement(l.a,{store:W},r.a.createElement(F,null));c.a.render(X,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.3245ad8f.chunk.js.map