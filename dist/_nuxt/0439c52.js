(window.webpackJsonp=window.webpackJsonp||[]).push([[4,3],{332:function(t,e,r){"use strict";r.r(e);var n={props:["icon","alt","title","text","block"],name:"KeyFeatureCard"},c=r(30),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-lg-3 col-md-6 mt-4 pt-2",class:{"col-lg-4 col-md-6 mt-4 pt-2":3===t.block}},[r("div",{staticClass:"card border-0 features feature-clean course-feature p-4 overflow-hidden shadow"},[t._m(0),t._v(" "),r("div",{staticClass:"card-body p-0 mt-4"},[t.title?r("h3",{staticClass:"title h5 text-dark"},[t._v(t._s(t.title))]):t._e(),t._v(" "),t.text?r("p",{staticClass:"text-muted mt-2"},[t._v(t._s(t.text))]):t._e()])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"icons text-primary text-center"},[e("img",{staticClass:"d-block rounded h3 mb-0 w-25",attrs:{src:"/svg/icons/Delete%20User.svg",alt:""}})])}],!1,null,"7f1363c1",null);e.default=component.exports},333:function(t,e,r){"use strict";var n=r(14),c=r(3),l=r(110),o=r(21),f=r(15),d=r(55),v=r(144),m=r(72),_=r(201),h=r(4),C=r(57),N=r(56).f,I=r(35).f,E=r(17).f,x=r(334).trim,y="Number",w=c.Number,k=w.prototype,A=d(C(k))==y,F=function(t){if(m(t))throw TypeError("Cannot convert a Symbol value to a number");var e,r,n,c,l,o,f,code,d=_(t,"number");if("string"==typeof d&&d.length>2)if(43===(e=(d=x(d)).charCodeAt(0))||45===e){if(88===(r=d.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:n=2,c=49;break;case 79:case 111:n=8,c=55;break;default:return+d}for(o=(l=d.slice(2)).length,f=0;f<o;f++)if((code=l.charCodeAt(f))<48||code>c)return NaN;return parseInt(l,n)}return+d};if(l(y,!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var S,T=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof T&&(A?h((function(){k.valueOf.call(r)})):d(r)!=y)?v(new w(F(e)),r,T):F(e)},K=n?N(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),O=0;K.length>O;O++)f(w,S=K[O])&&!f(T,S)&&E(T,S,I(w,S));T.prototype=k,k.constructor=T,o(c,y,T)}},334:function(t,e,r){var n=r(28),c=r(16),l="["+r(335)+"]",o=RegExp("^"+l+l+"*"),f=RegExp(l+l+"*$"),d=function(t){return function(e){var r=c(n(e));return 1&t&&(r=r.replace(o,"")),2&t&&(r=r.replace(f,"")),r}};t.exports={start:d(1),end:d(2),trim:d(3)}},335:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},337:function(t,e,r){"use strict";r.r(e);r(333);var n=r(332),c={props:{features:{type:Array,required:!0},block:{type:Number,default:4}},name:"KeyFeatures",components:{KeyFeatureCard:n.default}},l=r(30),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container py-5"},[r("div",{staticClass:"row pt-5"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"section-title mb-4 pb-2"},[r("h2",{staticClass:"title mb-4"},[t._v("Key Features")]),t._v(" "),r("div",{staticClass:"text-light-dark mb-0 para-desc"},[t._t("default")],2)])])]),t._v(" "),r("div",{staticClass:"row align-items-center"},t._l(t.features,(function(e){return r("KeyFeatureCard",{key:t._f("slug")(e.title),attrs:{block:t.block,alt:e.title,title:e.title,icon:e.icon,text:e.text}})})),1)])}),[],!1,null,"dcbffcf6",null);e.default=component.exports}}]);