(window.webpackJsonp=window.webpackJsonp||[]).push([[6,5],{352:function(t,e,r){"use strict";r.r(e);var n={props:["icon","alt","title","text","block"],name:"KeyFeatureCard"},c=r(31),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-3 col-md-6 mt-4 pt-2",class:{"col-lg-4 col-md-6 mt-4 pt-2":3===t.block}},[e("div",{staticClass:"card border-0 features feature-clean course-feature p-4 overflow-hidden shadow"},[t._m(0),t._v(" "),e("div",{staticClass:"card-body p-0 mt-4"},[t.title?e("h3",{staticClass:"title h5 text-dark"},[t._v(t._s(t.title))]):t._e(),t._v(" "),t.text?e("p",{staticClass:"text-muted mt-2"},[t._v(t._s(t.text))]):t._e()])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"icons text-primary text-center"},[t("img",{staticClass:"d-block rounded h3 mb-0 w-25",attrs:{src:"/svg/icons/Delete%20User.svg",alt:""}})])}],!1,null,"7f1363c1",null);e.default=component.exports},355:function(t,e,r){"use strict";var n=r(10),c=r(4),o=r(3),l=r(122),f=r(18),d=r(12),v=r(150),_=r(37),m=r(74),N=r(149),h=r(2),C=r(59).f,x=r(36).f,y=r(14).f,I=r(356),E=r(357).trim,k="Number",w=c.Number,F=w.prototype,A=c.TypeError,S=o("".slice),T=o("".charCodeAt),O=function(t){var e=N(t,"number");return"bigint"==typeof e?e:K(e)},K=function(t){var e,r,n,c,o,l,f,code,d=N(t,"number");if(m(d))throw A("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=E(d),43===(e=T(d,0))||45===e){if(88===(r=T(d,2))||120===r)return NaN}else if(48===e){switch(T(d,1)){case 66:case 98:n=2,c=49;break;case 79:case 111:n=8,c=55;break;default:return+d}for(l=(o=S(d,2)).length,f=0;f<l;f++)if((code=T(o,f))<48||code>c)return NaN;return parseInt(o,n)}return+d};if(l(k,!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var M,R=function(t){var e=arguments.length<1?0:w(O(t)),r=this;return _(F,r)&&h((function(){I(r)}))?v(Object(e),r,R):e},V=n?C(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),j=0;V.length>j;j++)d(w,M=V[j])&&!d(R,M)&&y(R,M,x(w,M));R.prototype=F,F.constructor=R,f(c,k,R,{constructor:!0})}},356:function(t,e,r){var n=r(3);t.exports=n(1..valueOf)},357:function(t,e,r){var n=r(3),c=r(27),o=r(15),l=r(358),f=n("".replace),d="["+l+"]",v=RegExp("^"+d+d+"*"),_=RegExp(d+d+"*$"),m=function(t){return function(e){var r=o(c(e));return 1&t&&(r=f(r,v,"")),2&t&&(r=f(r,_,"")),r}};t.exports={start:m(1),end:m(2),trim:m(3)}},358:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},359:function(t,e,r){"use strict";r.r(e);r(355);var n=r(352),c={props:{features:{type:Array,required:!0},block:{type:Number,default:4}},name:"KeyFeatures",components:{KeyFeatureCard:n.default}},o=r(31),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container py-5"},[e("div",{staticClass:"row pt-5"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"section-title mb-4 pb-2"},[e("h2",{staticClass:"title mb-4"},[t._v("Key Features")]),t._v(" "),e("div",{staticClass:"text-light-dark mb-0 para-desc"},[t._t("default")],2)])])]),t._v(" "),e("div",{staticClass:"row align-items-center"},t._l(t.features,(function(r){return e("KeyFeatureCard",{key:t._f("slug")(r.title),attrs:{block:t.block,alt:r.title,title:r.title,icon:r.icon,text:r.text}})})),1)])}),[],!1,null,"dcbffcf6",null);e.default=component.exports}}]);