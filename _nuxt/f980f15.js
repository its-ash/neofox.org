(window.webpackJsonp=window.webpackJsonp||[]).push([[24,5,6,8,9,11,12],{351:function(t,e,n){"use strict";n.r(e);var o={name:"FaqContainer",props:["questions","title","images","faq"],data:function(){return{}},components:{FaqQuestion:n(366).default}},r=n(31),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("section",{attrs:{id:"FAQS"}},[e("svg",{staticClass:"text-light back-1 top-0",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 150"}},[e("path",{attrs:{fill:"currentColor","fill-opacity":"1",d:"M0,0L60,16C120,32,240,64,360,74.7C480,85,600,75,720,58.7C840,43,960,21,1080,32C1200,43,1320,85,1380,106.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"}})]),t._v(" "),e("div",{staticClass:"bg-light"},[e("div",{staticClass:"container",attrs:{itemscope:"",itemtype:"https://schema.org/FAQPage"}},[e("h2",{staticClass:"d-inline"},[t._v("\n        "+t._s(t.title)+" Common Questions\n      ")]),t._v(" "),e("div",{staticClass:"row d-flex align-items-center"},[e("div",{staticClass:"col-md-7 col-12"},[e("FaqQuestion",{attrs:{data:t.faq}})],1),t._v(" "),e("div",{staticClass:"col-md-5 d-md-block d-none"})]),t._v(" "),e("div",{staticClass:"d-flex align-items-center py-3"},[e("NuxtLink",{staticClass:"h6 d-inline text-info btn btn-primary",attrs:{to:{name:"FAQ"}}},[t._v("See more")])],1)])]),t._v(" "),e("svg",{staticClass:"text-light back-1 top-0",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 220"}},[e("path",{attrs:{fill:"currentColor","fill-opacity":"1",d:"M0,96L60,90.7C120,85,240,75,360,85.3C480,96,600,128,720,117.3C840,107,960,53,1080,53.3C1200,53,1320,107,1380,133.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"}})])])}),[],!1,null,"0d576968",null);e.default=component.exports;installComponents(component,{FaqQuestion:n(366).default})},352:function(t,e,n){"use strict";n.r(e);var o={props:["icon","alt","title","text","block"],name:"KeyFeatureCard"},r=n(31),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-3 col-md-6 mt-4 pt-2",class:{"col-lg-4 col-md-6 mt-4 pt-2":3===t.block}},[e("div",{staticClass:"card border-0 features feature-clean course-feature p-4 overflow-hidden shadow"},[t._m(0),t._v(" "),e("div",{staticClass:"card-body p-0 mt-4"},[t.title?e("h3",{staticClass:"title h5 text-dark"},[t._v(t._s(t.title))]):t._e(),t._v(" "),t.text?e("p",{staticClass:"text-muted mt-2"},[t._v(t._s(t.text))]):t._e()])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"icons text-primary text-center"},[t("img",{staticClass:"d-block rounded h3 mb-0 w-25",attrs:{src:"/svg/icons/Delete%20User.svg",alt:""}})])}],!1,null,"7f1363c1",null);e.default=component.exports},353:function(t,e,n){"use strict";n.r(e);var o=n(13),r=(n(77),n(367)),c={name:"BlogLatest",props:["tag"],components:{BlogCard:n(365).default},data:function(){return{posts:void 0}},fetchOnServer:!1,fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(r.b)({limit:4,page:1});case 2:t.posts=e.sent;case 3:case"end":return e.stop()}}),e)})))()},mounted:function(){}},l=(n(370),n(31)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"d-table w-100 position-relative bg-white"},[e("div",{staticClass:"container"},[e("h2",[t._v("Know More ")]),t._v(" "),e("div",{staticClass:"row"},t._l(t.posts,(function(t){return e("div",{key:t.id,staticClass:"col-lg-3 col-md-4 px-2 my-3"},[e("BlogCard",{attrs:{post:t}})],1)})),0),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 d-flex justify-content-end py-5 line-25"},[e("NuxtLink",{staticClass:"px-2 btn-success rounded-2",attrs:{to:{name:"blog"}}},[t._v("Read More >")])],1)])])])}),[],!1,null,"76f243ff",null);e.default=component.exports;installComponents(component,{BlogCard:n(365).default})},354:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var o=n(362),r=(n(93),n(60),n(50),function(title,t){return[{hid:"apple-mobile-web-app-title",property:"apple-mobile-web-app-title",content:title},{hid:"apple-mobile-web-app-status-bar-style",property:"apple-mobile-web-app-status-bar-style",content:t}]}),c=function(title,t,e,n,o,video,r,c){return[{hid:"og:title",property:"og:title",content:title},{hid:"og:url",name:"og:url",content:t||"https://www.neofox.org"},{hid:"og:type",property:"og:type",content:e||"Website"},{hid:"og:description",property:"og:description",content:n},{hid:"og:site_name",property:"og:site_name",content:"NEOFOX"},{hid:"og:image",property:"og:image",content:o},{hid:"og:image:secure_url",property:"og:image:secure_url",content:o},{hid:"og:image:alt",property:"og:image:alt",content:title},{hid:"fb:app_id",name:"fb:app_id",content:"543522706280706"},{hid:"fb:admins",name:"fb:admins",content:"543522706280706"},{hid:"og:video",name:"og:video",content:video},{hid:"og:video:height",name:"og:video:height",content:"640"},{hid:"og:video:width",name:"og:video:width",content:385},{hid:"og:video:type",name:"og:video:type",content:"video/mp4"},{hid:"og:latitude",name:"og:latitude",content:r},{hid:"og:longitude",name:"og:longitude",content:c},{hid:"og:locality",name:"og:locality",content:"Jaipur"},{hid:"og:region",name:"og:region",content:"RJ"},{hid:"og:country-name",name:"og:country-name",content:"INDIA"},{hid:"og:postal-code",name:"og:postal-code",content:"302017"},{hid:"og:locale",name:"og:locale",content:"en_IN"}]},l=function(title,t,e,n){return[{hid:"title",name:"title",content:title},{hid:"description",name:"description",content:t},{hid:"keywords",name:"keywords",content:e},{hid:"language",name:"language",content:"EN"},{hid:"Classification",name:"Classification",content:"Business"},{hid:"designer",name:"designer",content:"NEOFOX"},{hid:"coverage",name:"coverage",content:"Worldwide"},{hid:"subtitle",name:"subtitle",content:t},{hid:"language",name:"language",content:"EN"},{hid:"theme-color",name:"theme-color",content:n},{hid:"nightmode",name:"nightmode",content:"enable"}]},d=function(title,t,e,n){return[{hid:"twitter:title",name:"twitter:title",content:title},{hid:"twitter:site",name:"twitter:site",content:"neofox"},{hid:"twitter:creator",name:"twitter:creator",content:title},{hid:"twitter:card",name:"twitter:card",content:title},{hid:"twitter:description",name:"twitter:description",content:t},{hid:"twitter:image",name:"twitter:image",content:e},{hid:"twitter:image:alt",name:"twitter:image:alt",content:title},{hid:"twitter:url",name:"twitter:url",content:n||"https://www.neofox.org"}]},f=function(title,t,e,n,f){var m=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},h=arguments.length>6?arguments[6]:void 0,video=arguments.length>7?arguments[7]:void 0,v=arguments.length>8&&void 0!==arguments[8]?arguments[8]:"#fefefe",w=arguments.length>9&&void 0!==arguments[9]?arguments[9]:26.9124,C=arguments.length>10&&void 0!==arguments[10]?arguments[10]:75.7873;return{title:title,meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"robots",name:"robots",content:"index, follow"},{hid:"revisit-after",name:"revisit-after",content:"1 day"},{hid:"author",name:"author",content:"neofox"}].concat(Object(o.a)(r(title,v)),Object(o.a)(c(title,h,t,e,f,video,w,C)),Object(o.a)(l(title,e,n,v)),Object(o.a)(d(title,e,f,h))),script:[{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"WebPage",name:title,description:e,publisher:{"@type":"ProfilePage",name:"NEOFOX"}}},{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"Corporation",name:"NEOFOX",url:"https://www.neofox.org",logo:"https://www.neofox.org/favicon.png",openingHours:"Mo 08:00-20:00 Tu 08:00-20:00 We 08:00-20:00 Th 08:00-20:30 Fr 08:30-20:00 Sa 08:00-20:00",sameAs:["https://www.facebook.com/neofox.org","https://www.instagram.com/neofoxindia/","https://github.com/neofoxindia","https://www.neofox.in","https://www.linkedin.com/company/neofoxin/","https://dribbble.com/theneofox","https://www.figma.com/@neofox","https://www.pinterest.com/theneofox"]}},{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"Service",name:t,description:e,provider:{"@type":"Organization",name:"NeoFox",sameAs:"https://www.neofox.org"}}},{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"FAQPage",mainEntity:Object.keys(m).map((function(t){return{"@type":"Question",name:t,acceptedAnswer:{"@type":"Answer",text:m[t]}}}))}}]}}},355:function(t,e,n){"use strict";var o=n(10),r=n(4),c=n(3),l=n(122),d=n(18),f=n(12),m=n(150),h=n(37),v=n(74),w=n(149),C=n(2),_=n(59).f,y=n(36).f,x=n(14).f,k=n(356),A=n(357).trim,O="Number",N=r.Number,S=N.prototype,j=r.TypeError,F=c("".slice),I=c("".charCodeAt),E=function(t){var e=w(t,"number");return"bigint"==typeof e?e:L(e)},L=function(t){var e,n,o,r,c,l,d,code,f=w(t,"number");if(v(f))throw j("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=A(f),43===(e=I(f,0))||45===e){if(88===(n=I(f,2))||120===n)return NaN}else if(48===e){switch(I(f,1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+f}for(l=(c=F(f,2)).length,d=0;d<l;d++)if((code=I(c,d))<48||code>r)return NaN;return parseInt(c,o)}return+f};if(l(O,!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var M,R=function(t){var e=arguments.length<1?0:N(E(t)),n=this;return h(S,n)&&C((function(){k(n)}))?m(Object(e),n,R):e},T=o?_(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),Q=0;T.length>Q;Q++)f(N,M=T[Q])&&!f(R,M)&&x(R,M,y(N,M));R.prototype=S,S.constructor=R,d(r,O,R,{constructor:!0})}},356:function(t,e,n){var o=n(3);t.exports=o(1..valueOf)},357:function(t,e,n){var o=n(3),r=n(27),c=n(15),l=n(358),d=o("".replace),f="["+l+"]",m=RegExp("^"+f+f+"*"),h=RegExp(f+f+"*$"),v=function(t){return function(e){var n=c(r(e));return 1&t&&(n=d(n,m,"")),2&t&&(n=d(n,h,"")),n}};t.exports={start:v(1),end:v(2),trim:v(3)}},358:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},359:function(t,e,n){"use strict";n.r(e);n(355);var o=n(352),r={props:{features:{type:Array,required:!0},block:{type:Number,default:4}},name:"KeyFeatures",components:{KeyFeatureCard:o.default}},c=n(31),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container py-5"},[e("div",{staticClass:"row pt-5"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"section-title mb-4 pb-2"},[e("h2",{staticClass:"title mb-4"},[t._v("Key Features")]),t._v(" "),e("div",{staticClass:"text-light-dark mb-0 para-desc"},[t._t("default")],2)])])]),t._v(" "),e("div",{staticClass:"row align-items-center"},t._l(t.features,(function(n){return e("KeyFeatureCard",{key:t._f("slug")(n.title),attrs:{block:t.block,alt:n.title,title:n.title,icon:n.icon,text:n.text}})})),1)])}),[],!1,null,"dcbffcf6",null);e.default=component.exports},362:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var o=n(123);var r=n(151),c=n(94);function l(t){return function(t){if(Array.isArray(t))return Object(o.a)(t)}(t)||Object(r.a)(t)||Object(c.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},365:function(t,e,n){"use strict";n.r(e);var o={name:"BlogCard",props:["post"]},r=n(31),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"post"},[e("NuxtLink",{staticClass:"row d-flex m-0 bg-white front-10",attrs:{to:{name:"blog-slug",params:{slug:t.post.slug}}}},[e("img",{staticClass:"w-100 col-12 p-0 m-0 post-image",attrs:{src:t.post.feature_image,alt:t.post.title}}),t._v(" "),e("div",{staticClass:"bg-light col-12 d-flex px-2 py-1 front-10 align-items-center flex-wrap shadow-sm",staticStyle:{"min-height":"80px"}},[e("small",{staticClass:"text-dark roboto-slab w-100"},[t._v(t._s(t._f("date")(t.post.updated_at)))]),t._v(" "),e("h3",{staticClass:"line-10 h6 text-dark w-100"},[t._v(t._s(t.post.title))])])])],1)}),[],!1,null,null,null);e.default=component.exports},366:function(t,e,n){"use strict";n.r(e);var o={name:"FaqQuestion",props:["data"],data:function(){return{uuid:""}},beforeMount:function(){this.uuid=this.$uuid()},methods:{toggleIcon:function(t){this.$refs[t][0].classList.toggle("show"),this.$refs[t+"icon"][0].classList.toggle("rotate-90"),this.$refs[t+"icon"][0].classList.toggle("rotate-0")}}},r=n(31),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"accordion mt-4 pt-2",attrs:{id:"_"+t.uuid}},t._l(t.data,(function(n,o){return e("div",{staticClass:"accordion-item mt-3 rounded shadow-sm border-primary border-0",attrs:{itemscope:"",itemprop:"mainEntity",itemtype:"https://schema.org/Question"}},[e("h2",{staticClass:"accordion-header",attrs:{itemprop:"name",id:t._f("slug")(n)}},[e("button",{staticClass:"accordion-button border-0 collapsed py-2 text-success noto-sans",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":t._f("slug")("#"+o),"aria-expanded":"false","aria-controls":t._f("slug")(o)}},[t._v("\n        "+t._s(o)+"\n      ")])]),t._v(" "),e("div",{staticClass:"accordion-collapse border-0 collapse",attrs:{id:t._f("slug")(o),"aria-labelledby":t._f("slug")(n),"data-bs-parent":"#_"+t.uuid}},[e("div",{staticClass:"accordion-body bg-white text-dark",attrs:{itemscope:"",itemprop:"acceptedAnswer",itemtype:"https://schema.org/Answer"},domProps:{innerHTML:t._s(n)}})])])})),0)}),[],!1,null,null,null);e.default=component.exports},367:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return d})),n.d(e,"c",(function(){return m}));var o=n(13),r=(n(77),new(n(369).a)({url:"https://blog.foxapi.live",key:"0b99f9d918af26e6858e84ffa2",version:"v3"}));function c(t){return l.apply(this,arguments)}function l(){return(l=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,o,c,l,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.limit,o=e.from,c=e.to,l=e.featured,d=e.page,t.next=3,r.posts.browse({limit:n,from:o,to:c,featured:l,page:d}).catch((function(t){return console.error(t)}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return f.apply(this,arguments)}function f(){return(f=Object(o.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.posts.read({slug:e}).catch((function(t){return console.error(t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(){return h.apply(this,arguments)}function h(){return(h=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.tags.browse().catch((function(t){console.error(t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},368:function(t,e,n){var content=n(371);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(76).default)("80d2e930",content,!0,{sourceMap:!1})},370:function(t,e,n){"use strict";n(368)},371:function(t,e,n){var o=n(75)(!1);o.push([t.i,".post[data-v-76f243ff]:hover:after,.post[data-v-76f243ff]:hover:before{background:#fefefe!important}",""]),t.exports=o},419:function(t,e,n){"use strict";n.r(e);var o=n(359),r=n(353),c=n(351),l=n(354),d={name:"cloud-server",head:Object(l.a)("Cloud Solution : NEOFOX","Cloud Solution","We merge imagination and technology to help brands grow in the age of digital transformation","Neofox,Jaipur,Rajasthan,India,Digital Ocean,Mqtt,Machine Learning,Cloud,Industrial Cloud Solution,Solution,Smart","","",""),data:function(){return{email:"",features:[{alt:"SAAS",title:"SAAS",icon:"",text:"SAAS or Software As A Service is a model delivering software on a subscription basis. It is all cloud-based and hence, you can access the software using your web browser on desktop or mobile."},{alt:"IAAS",title:"IAAS",icon:"",text:"A vendor provides clients pay-as-you-go access to storage, networking, servers, and other computing resources in the cloud."},{alt:"SAAS",title:"SAAS",icon:"",text:"A service provider offers access to a cloud-based environment in which users can build and deliver applications. The provider supplies the underlying infrastructure."}]}},components:{KeyFeatures:o.default,FaqContainer:c.default,BlogGrid:r.default},methods:{contact:function(){this.$router.push({name:"contact",params:{email:this.email}})}}},f=n(31),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"position-relative bg-light"},[e("section",{staticClass:"h-100-center w-100 bg-white"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-md-6 col-12"},[e("div",{staticClass:"title-heading"},[e("NuxtLink",{staticClass:"badge rounded-pill text-light-dark",attrs:{to:{name:"index"}}},[t._v("\n              NEOFOX\n            ")]),t._v(" "),t._m(0),t._v(" "),e("p",{staticClass:"para-desc text-muted"},[t._v("We construct our reliable Cloud on four central standards - Security,\n              Privacy, Compliance, and Transparency. We give the best mechanization-driven arrangements that\n              assistance in quick cloud onboarding. ")]),t._v(" "),e("div",{staticClass:"mt-4 pt-2"},[e("NuxtLink",{staticClass:"btn btn-primary me-2",attrs:{to:{name:"contact"}}},[t._v("Get Started")]),t._v(" "),e("a",{staticClass:"btn btn-outline-primary",attrs:{href:"#FAQS"}},[t._v("FAQ")])],1)],1)]),t._v(" "),t._m(1)])])]),t._v(" "),e("div",{staticClass:"position-relative"},[e("div",{staticClass:"shape overflow-hidden text-light"},[e("svg",{attrs:{viewBox:"0 0 2880 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z",fill:"currentColor"}})])])]),t._v(" "),e("KeyFeatures",{attrs:{features:t.features,block:3}},[e("p",{staticClass:"h5"},[t._v("\n      We will in general exchange Secured-center to Windows Server and edge gadgets to help limit hazards from\n      microcode weaknesses and progressed malware in IoT and a half and half cloud conditions.\n    ")])]),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"container py-5"},[e("div",{staticClass:"row justify-content-center py-5"},[e("div",{staticClass:"col-12 text-center"},[e("div",{staticClass:"section-title"},[e("h4",{staticClass:"title mb-4"},[t._v("Want to be among the first to find out?")]),t._v(" "),e("p",{staticClass:"text-muted para-desc mx-auto"},[t._v("\n            Accelerate your cloud exercises and obligations by restricting costs, increase the usefulness, and speed\n            up the conveyance of the leader’s cycle "),e("br"),t._v(" with\n            "),e("NuxtLink",{staticClass:"text-primary fw-bold",attrs:{to:{name:"index"}}},[t._v("NEOFOX")]),t._v("\n            DevOps administrations.\n          ")],1)])])])])],1)}),[function(){var t=this,e=t._self._c;return e("h1",{staticClass:"fw-bold mt-2 mb-3 line-10 text-uppercase"},[t._v("\n              Complete "),e("br"),t._v(" "),e("span",{staticClass:"line text-danger",attrs:{"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Space, Computing, Ram"}},[t._v("Cloud")]),t._v(" "),e("br"),t._v("Solution")])},function(){var t=this._self._c;return t("div",{staticClass:"col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0"},[t("img",{staticClass:"img-fluid d-block mx-auto",attrs:{src:"/images/digital/about.png",alt:""}})])},function(){var t=this,e=t._self._c;return e("section",{staticClass:"section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row d-flex align-items-center"},[e("div",{staticClass:"col-md-7 col-12"},[e("h3",{staticClass:"py-5 h2 line-15 text-dark"},[t._v("\n            To make a more secure world approved by computerized change, we tend to deal with your data solidly and in\n            consistence with protection and legitimate necessities.\n          ")])]),t._v(" "),e("div",{staticClass:"col-5 d-none d-md-block"},[e("img",{staticClass:"w-100",attrs:{src:"/images/illustrator/app.svg",alt:""}})])])])])}],!1,null,"0bf2551a",null);e.default=component.exports}}]);