(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f3b61b0"],{"01a3":function(t,e,r){},"057f":function(t,e,r){var n=r("fc6a"),i=r("241c").f,o={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],f=function(t){try{return i(t)}catch(e){return c.slice()}};t.exports.f=function(t){return c&&"[object Window]"==o.call(t)?f(t):i(n(t))}},"0c56":function(t,e,r){"use strict";var n=r("01a3"),i=r.n(n);i.a},1148:function(t,e,r){"use strict";var n=r("a691"),i=r("1d80");t.exports="".repeat||function(t){var e=String(i(this)),r="",o=n(t);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(r+=e);return r}},"159b":function(t,e,r){var n=r("da84"),i=r("fdbc"),o=r("17c2"),c=r("9112");for(var f in i){var a=n[f],s=a&&a.prototype;if(s&&s.forEach!==o)try{c(s,"forEach",o)}catch(u){s.forEach=o}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,i=r("b301");t.exports=i("forEach")?function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},"1dde":function(t,e,r){var n=r("d039"),i=r("b622"),o=r("60ae"),c=i("species");t.exports=function(t){return o>=51||!n((function(){var e=[],r=e.constructor={};return r[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"2d70":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("h4",[t._v("Итого к выплате: "+t._s(t.total))]),r("hr"),r("table",[t._m(0),r("tbody",[r("tr",[r("td",[t._v("Оплата по тарифу")]),r("td",[t._v(t._s(t.shiftsTotal))]),r("td",[t._v(t._s(11*t.shiftsTotal))]),r("td",[t._v(t._s(t.tarif))])]),r("tr",[r("td",[t._v("Ночные часы")]),r("td",[t._v(t._s(t.shiftsNights))]),r("td",[t._v(t._s(7*t.shiftsNights))]),r("td",[t._v(t._s(t.tarifNights))])]),t.harm?r("tr",[r("td",[t._v("Вредность")]),r("td"),r("td"),r("td",[t._v(t._s(t.harm))])]):t._e(),r("tr",[r("td",[t._v("Премия")]),r("td"),r("td"),r("td",[t._v(t._s(t.award))])]),t.overtime?r("tr",[r("td",[t._v("Доплата за подработки")]),r("td",[t._v(t._s(t.overtime))]),r("td",[t._v(t._s(11*t.overtime))]),r("td",[t._v(t._s(t.overtimeTarif))])]):t._e(),t.holidays?r("tr",[r("td",[t._v("Доплата за праздничные дни")]),r("td"),r("td",[t._v(t._s(t.holidays))]),r("td",[t._v(t._s(t.holidaysTarif))])]):t._e(),r("tr",[r("td",[t._v("Районный коэффициент")]),r("td"),r("td"),r("td",[t._v(t._s(t.coef))])]),r("tr",[t._m(1),r("td"),r("td"),r("td",[t._v(t._s(t.totalIncome))])]),t._m(2)]),r("thead",[t._m(3),r("tr",[r("td",[t._v("НДФЛ")]),r("td"),r("td"),r("td",[t._v(t._s(t.ndfl))])])])])])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("Приход")]),r("th",[t._v("Дней")]),r("th",[t._v("Часов")]),r("th",[t._v("Сумма")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("td",[r("b",[t._v("Итого начислено")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td"),r("td"),r("td"),r("td")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("th",[t._v("Расход")]),r("th"),r("th"),r("th",[t._v("Сумма")])])}];r("a4d3"),r("4de4"),r("b680"),r("e439"),r("dbb4"),r("b64b"),r("159b");function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var c=r("2f62");function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var s={name:"final",data:function(){return{salary:null}},computed:a({},Object(c["b"])(["getRate","getShifts","getOvertime","getOther"]),{shiftsTotal:function(){return+this.getShifts.total},tarif:function(){return(+this.getRate*this.shiftsTotal*11).toFixed(2)},shiftsNights:function(){var t=this.getOvertime.overtime.nights||0;return this.getShifts.nights+t},tarifNights:function(){return(+this.getRate*+this.shiftsNights*7*.4).toFixed(2)},harm:function(){return this.getOther.harm?(.08*this.tarif).toFixed(2):0},award:function(){return(.3*this.tarif).toFixed(2)},overtime:function(){return+this.getOvertime.overtime.shifts||0},overtimeTarif:function(){return(+this.getRate*this.overtime*11*2).toFixed(2)},holidays:function(){return+this.getOvertime.holidays},holidaysTarif:function(){return(+this.getRate*this.holidays).toFixed(2)},income:function(){return+this.tarif+ +this.tarifNights+ +this.award+ +this.harm+ +this.overtimeTarif+ +this.holidaysTarif},coef:function(){return(.15*this.income).toFixed(2)},totalIncome:function(){return(this.income+ +this.coef).toFixed(2)},ndfl:function(){var t=this.getOther.eat?75*+this.getOther.eat:0;return(.13*(+this.totalIncome+t)).toFixed(2)},total:function(){return(this.totalIncome-this.ndfl).toFixed(2)}})},u=s,l=(r("0c56"),r("2877")),h=Object(l["a"])(u,n,i,!1,null,"77e204b5",null);e["default"]=h.exports},"408a":function(t,e,r){var n=r("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=n(t))throw TypeError("Incorrect invocation");return+t}},"4de4":function(t,e,r){"use strict";var n=r("23e7"),i=r("b727").filter,o=r("d039"),c=r("1dde"),f=c("filter"),a=f&&!o((function(){[].filter.call({length:-1,0:1},(function(t){throw t}))}));n({target:"Array",proto:!0,forced:!f||!a},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"65f0":function(t,e,r){var n=r("861d"),i=r("e8b5"),o=r("b622"),c=o("species");t.exports=function(t,e){var r;return i(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?n(r)&&(r=r[c],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"746f":function(t,e,r){var n=r("428f"),i=r("5135"),o=r("c032"),c=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});i(e,t)||c(e,t,{value:o.f(t)})}},8418:function(t,e,r){"use strict";var n=r("c04e"),i=r("9bf2"),o=r("5c6c");t.exports=function(t,e,r){var c=n(e);c in t?i.f(t,c,o(0,r)):t[c]=r}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),o=r("d066"),c=r("c430"),f=r("83ab"),a=r("4930"),s=r("fdbf"),u=r("d039"),l=r("5135"),h=r("e8b5"),d=r("861d"),v=r("825a"),b=r("7b0b"),g=r("fc6a"),p=r("c04e"),m=r("5c6c"),y=r("7c73"),_=r("df75"),O=r("241c"),w=r("057f"),S=r("7418"),x=r("06cf"),j=r("9bf2"),L=r("d1e7"),T=r("9112"),P=r("6eeb"),E=r("5692"),F=r("f772"),N=r("d012"),D=r("90e3"),M=r("b622"),R=r("c032"),k=r("746f"),A=r("d44e"),C=r("69f3"),I=r("b727").forEach,V=F("hidden"),G="Symbol",$="prototype",H=M("toPrimitive"),J=C.set,B=C.getterFor(G),W=Object[$],q=i.Symbol,Q=o("JSON","stringify"),z=x.f,K=j.f,U=w.f,X=L.f,Y=E("symbols"),Z=E("op-symbols"),tt=E("string-to-symbol-registry"),et=E("symbol-to-string-registry"),rt=E("wks"),nt=i.QObject,it=!nt||!nt[$]||!nt[$].findChild,ot=f&&u((function(){return 7!=y(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=z(W,e);n&&delete W[e],K(t,e,r),n&&t!==W&&K(W,e,n)}:K,ct=function(t,e){var r=Y[t]=y(q[$]);return J(r,{type:G,tag:t,description:e}),f||(r.description=e),r},ft=s?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof q},at=function(t,e,r){t===W&&at(Z,e,r),v(t);var n=p(e,!0);return v(r),l(Y,n)?(r.enumerable?(l(t,V)&&t[V][n]&&(t[V][n]=!1),r=y(r,{enumerable:m(0,!1)})):(l(t,V)||K(t,V,m(1,{})),t[V][n]=!0),ot(t,n,r)):K(t,n,r)},st=function(t,e){v(t);var r=g(e),n=_(r).concat(vt(r));return I(n,(function(e){f&&!lt.call(r,e)||at(t,e,r[e])})),t},ut=function(t,e){return void 0===e?y(t):st(y(t),e)},lt=function(t){var e=p(t,!0),r=X.call(this,e);return!(this===W&&l(Y,e)&&!l(Z,e))&&(!(r||!l(this,e)||!l(Y,e)||l(this,V)&&this[V][e])||r)},ht=function(t,e){var r=g(t),n=p(e,!0);if(r!==W||!l(Y,n)||l(Z,n)){var i=z(r,n);return!i||!l(Y,n)||l(r,V)&&r[V][n]||(i.enumerable=!0),i}},dt=function(t){var e=U(g(t)),r=[];return I(e,(function(t){l(Y,t)||l(N,t)||r.push(t)})),r},vt=function(t){var e=t===W,r=U(e?Z:g(t)),n=[];return I(r,(function(t){!l(Y,t)||e&&!l(W,t)||n.push(Y[t])})),n};if(a||(q=function(){if(this instanceof q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=D(t),r=function(t){this===W&&r.call(Z,t),l(this,V)&&l(this[V],e)&&(this[V][e]=!1),ot(this,e,m(1,t))};return f&&it&&ot(W,e,{configurable:!0,set:r}),ct(e,t)},P(q[$],"toString",(function(){return B(this).tag})),P(q,"withoutSetter",(function(t){return ct(D(t),t)})),L.f=lt,j.f=at,x.f=ht,O.f=w.f=dt,S.f=vt,R.f=function(t){return ct(M(t),t)},f&&(K(q[$],"description",{configurable:!0,get:function(){return B(this).description}}),c||P(W,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!a,sham:!a},{Symbol:q}),I(_(rt),(function(t){k(t)})),n({target:G,stat:!0,forced:!a},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=q(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ft(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),n({target:"Object",stat:!0,forced:!a,sham:!f},{create:ut,defineProperty:at,defineProperties:st,getOwnPropertyDescriptor:ht}),n({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:dt,getOwnPropertySymbols:vt}),n({target:"Object",stat:!0,forced:u((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(b(t))}}),Q){var bt=!a||u((function(){var t=q();return"[null]"!=Q([t])||"{}"!=Q({a:t})||"{}"!=Q(Object(t))}));n({target:"JSON",stat:!0,forced:bt},{stringify:function(t,e,r){var n,i=[t],o=1;while(arguments.length>o)i.push(arguments[o++]);if(n=e,(d(e)||void 0!==t)&&!ft(t))return h(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!ft(e))return e}),i[1]=e,Q.apply(null,i)}})}q[$][H]||T(q[$],H,q[$].valueOf),A(q,G),N[V]=!0},b301:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!r||!n((function(){r.call(null,e||function(){throw 1},1)}))}},b64b:function(t,e,r){var n=r("23e7"),i=r("7b0b"),o=r("df75"),c=r("d039"),f=c((function(){o(1)}));n({target:"Object",stat:!0,forced:f},{keys:function(t){return o(i(t))}})},b680:function(t,e,r){"use strict";var n=r("23e7"),i=r("a691"),o=r("408a"),c=r("1148"),f=r("d039"),a=1..toFixed,s=Math.floor,u=function(t,e,r){return 0===e?r:e%2===1?u(t,e-1,r*t):u(t*t,e/2,r)},l=function(t){var e=0,r=t;while(r>=4096)e+=12,r/=4096;while(r>=2)e+=1,r/=2;return e},h=a&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!f((function(){a.call({})}));n({target:"Number",proto:!0,forced:h},{toFixed:function(t){var e,r,n,f,a=o(this),h=i(t),d=[0,0,0,0,0,0],v="",b="0",g=function(t,e){var r=-1,n=e;while(++r<6)n+=t*d[r],d[r]=n%1e7,n=s(n/1e7)},p=function(t){var e=6,r=0;while(--e>=0)r+=d[e],d[e]=s(r/t),r=r%t*1e7},m=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==d[t]){var r=String(d[t]);e=""===e?r:e+c.call("0",7-r.length)+r}return e};if(h<0||h>20)throw RangeError("Incorrect fraction digits");if(a!=a)return"NaN";if(a<=-1e21||a>=1e21)return String(a);if(a<0&&(v="-",a=-a),a>1e-21)if(e=l(a*u(2,69,1))-69,r=e<0?a*u(2,-e,1):a/u(2,e,1),r*=4503599627370496,e=52-e,e>0){g(0,r),n=h;while(n>=7)g(1e7,0),n-=7;g(u(10,n,1),0),n=e-1;while(n>=23)p(1<<23),n-=23;p(1<<n),g(1,1),p(2),b=m()}else g(0,r),g(1<<-e,0),b=m()+c.call("0",h);return h>0?(f=b.length,b=v+(f<=h?"0."+c.call("0",h-f)+b:b.slice(0,f-h)+"."+b.slice(f-h))):b=v+b,b}})},b727:function(t,e,r){var n=r("f8c2"),i=r("44ad"),o=r("7b0b"),c=r("50c4"),f=r("65f0"),a=[].push,s=function(t){var e=1==t,r=2==t,s=3==t,u=4==t,l=6==t,h=5==t||l;return function(d,v,b,g){for(var p,m,y=o(d),_=i(y),O=n(v,b,3),w=c(_.length),S=0,x=g||f,j=e?x(d,w):r?x(d,0):void 0;w>S;S++)if((h||S in _)&&(p=_[S],m=O(p,S,y),t))if(e)j[S]=m;else if(m)switch(t){case 3:return!0;case 5:return p;case 6:return S;case 2:a.call(j,p)}else if(u)return!1;return l?-1:s||u?u:j}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},c032:function(t,e,r){var n=r("b622");e.f=n},dbb4:function(t,e,r){var n=r("23e7"),i=r("83ab"),o=r("56ef"),c=r("fc6a"),f=r("06cf"),a=r("8418");n({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,r,n=c(t),i=f.f,s=o(n),u={},l=0;while(s.length>l)r=i(n,e=s[l++]),void 0!==r&&a(u,e,r);return u}})},e439:function(t,e,r){var n=r("23e7"),i=r("d039"),o=r("fc6a"),c=r("06cf").f,f=r("83ab"),a=i((function(){c(1)})),s=!f||a;n({target:"Object",stat:!0,forced:s,sham:!f},{getOwnPropertyDescriptor:function(t,e){return c(o(t),e)}})},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-3f3b61b0.99355c52.js.map