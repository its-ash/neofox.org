(window.webpackJsonp=window.webpackJsonp||[]).push([[37,3,4,5,6,7,9,10],{324:function(t,e,n){"use strict";n.r(e);var o={name:"BlogCard",props:["post"]},r=n(30),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post"},[n("NuxtLink",{staticClass:"row d-flex m-0 bg-white front-10",attrs:{to:{name:"blog-slug",params:{slug:t.post.slug}}}},[n("img",{staticClass:"w-100 col-12 p-0 m-0 post-image",attrs:{src:t.post.feature_image,alt:t.post.title}}),t._v(" "),n("div",{staticClass:"bg-light col-12 d-flex px-2 py-1 front-10 align-items-center flex-wrap shadow-sm",staticStyle:{"min-height":"80px"}},[n("small",{staticClass:"text-dark roboto-slab w-100"},[t._v(t._s(t._f("date")(t.post.updated_at)))]),t._v(" "),n("h3",{staticClass:"line-10 h6 text-dark w-100"},[t._v(t._s(t.post.title))])])])],1)}),[],!1,null,null,null);e.default=component.exports},325:function(t,e,n){"use strict";n.r(e);var o={name:"FaqQuestion",props:["data"],data:function(){return{uuid:""}},beforeMount:function(){this.uuid=this.$uuid()},methods:{toggleIcon:function(t){this.$refs[t][0].classList.toggle("show"),this.$refs[t+"icon"][0].classList.toggle("rotate-90"),this.$refs[t+"icon"][0].classList.toggle("rotate-0")}}},r=n(30),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"accordion mt-4 pt-2",attrs:{id:"_"+t.uuid}},t._l(t.data,(function(e,o){return n("div",{staticClass:"accordion-item mt-3 rounded shadow-sm border-primary border-0",attrs:{itemscope:"",itemprop:"mainEntity",itemtype:"https://schema.org/Question"}},[n("h2",{staticClass:"accordion-header ",attrs:{itemprop:"name",id:t._f("slug")(e)}},[n("button",{staticClass:"accordion-button border-0 collapsed py-2 text-success noto-sans",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":t._f("slug")("#"+o),"aria-expanded":"false","aria-controls":t._f("slug")(o)}},[t._v("\n        "+t._s(o)+"\n      ")])]),t._v(" "),n("div",{staticClass:"accordion-collapse border-0 collapse",attrs:{id:t._f("slug")(o),"aria-labelledby":t._f("slug")(e),"data-bs-parent":"#_"+t.uuid}},[n("div",{staticClass:"accordion-body bg-white text-dark",attrs:{itemscope:"",itemprop:"acceptedAnswer",itemtype:"https://schema.org/Answer"},domProps:{innerHTML:t._s(e)}})])])})),0)}),[],!1,null,null,null);e.default=component.exports},326:function(t,e,n){"use strict";n.r(e);var o={name:"FaqContainer",props:["questions","title","images","faq"],data:function(){return{}},components:{FaqQuestion:n(325).default}},r=n(30),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"FAQS"}},[n("svg",{staticClass:"text-light back-1 top-0",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 150"}},[n("path",{attrs:{fill:"currentColor","fill-opacity":"1",d:"M0,0L60,16C120,32,240,64,360,74.7C480,85,600,75,720,58.7C840,43,960,21,1080,32C1200,43,1320,85,1380,106.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"}})]),t._v(" "),n("div",{staticClass:"bg-light"},[n("div",{staticClass:"container",attrs:{itemscope:"",itemtype:"https://schema.org/FAQPage"}},[n("h2",{staticClass:"d-inline"},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),n("div",{staticClass:"row d-flex align-items-center"},[n("div",{staticClass:"col-md-7 col-12"},[n("FaqQuestion",{attrs:{data:t.faq}})],1),t._v(" "),n("div",{staticClass:"col-md-5 d-md-block d-none"})]),t._v(" "),n("div",{staticClass:"d-flex align-items-center py-3"},[n("NuxtLink",{staticClass:"h6 d-inline text-info btn btn-primary",attrs:{to:{name:"FAQ"}}},[t._v("See more")])],1)])]),t._v(" "),n("svg",{staticClass:"text-light back-1 top-0",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 220"}},[n("path",{attrs:{fill:"currentColor","fill-opacity":"1",d:"M0,96L60,90.7C120,85,240,75,360,85.3C480,96,600,128,720,117.3C840,107,960,53,1080,53.3C1200,53,1320,107,1380,133.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"}})])])}),[],!1,null,"7fb39c26",null);e.default=component.exports;installComponents(component,{FaqQuestion:n(325).default})},327:function(t,e,n){var content=n(331);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(71).default)("4d6c6366",content,!0,{sourceMap:!1})},328:function(t,e,n){"use strict";n.r(e);var o=n(13),r=(n(69),n(329)),c={name:"BlogLatest",components:{BlogCard:n(324).default},data:function(){return{posts:void 0}},fetchOnServer:!1,fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(r.b)({limit:4,page:1});case 2:t.posts=e.sent;case 3:case"end":return e.stop()}}),e)})))()},mounted:function(){}},l=(n(330),n(30)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"d-table w-100 position-relative bg-white"},[n("div",{staticClass:"container"},[n("h2",[t._v("Know More ")]),t._v(" "),n("div",{staticClass:"row"},t._l(t.posts,(function(t){return n("div",{key:t.id,staticClass:"col-lg-3 col-md-4 px-2 my-3"},[n("BlogCard",{attrs:{post:t}})],1)})),0),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 d-flex justify-content-end py-5 line-25"},[n("NuxtLink",{staticClass:"px-2 btn-success rounded-2",attrs:{to:{name:"blog"}}},[t._v("Read More >")])],1)])])])}),[],!1,null,"0c76151a",null);e.default=component.exports;installComponents(component,{BlogCard:n(324).default})},329:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return d})),n.d(e,"c",(function(){return m}));var o=n(13),r=(n(69),new(n(342).a)({url:"https://blog.foxapi.live",key:"0b99f9d918af26e6858e84ffa2",version:"v3"}));function c(t){return l.apply(this,arguments)}function l(){return(l=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,o,c,l,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.limit,o=e.from,c=e.to,l=e.featured,d=e.page,t.next=3,r.posts.browse({limit:n,from:o,to:c,featured:l,page:d}).catch((function(t){return console.error(t)}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return h.apply(this,arguments)}function h(){return(h=Object(o.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.posts.read({slug:e}).catch((function(t){return console.error(t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(){return f.apply(this,arguments)}function f(){return(f=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.tags.browse().catch((function(t){console.error(t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},330:function(t,e,n){"use strict";n(327)},331:function(t,e,n){var o=n(70)(!1);o.push([t.i,".post[data-v-0c76151a]:hover:after,.post[data-v-0c76151a]:hover:before{background:#fefefe!important}",""]),t.exports=o},332:function(t,e,n){"use strict";n.r(e);var o={props:["icon","alt","title","text","block"],name:"KeyFeatureCard"},r=n(30),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-3 col-md-6 mt-4 pt-2",class:{"col-lg-4 col-md-6 mt-4 pt-2":3===t.block}},[n("div",{staticClass:"card border-0 features feature-clean course-feature p-4 overflow-hidden shadow"},[t._m(0),t._v(" "),n("div",{staticClass:"card-body p-0 mt-4"},[t.title?n("h3",{staticClass:"title h5 text-dark"},[t._v(t._s(t.title))]):t._e(),t._v(" "),t.text?n("p",{staticClass:"text-muted mt-2"},[t._v(t._s(t.text))]):t._e()])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"icons text-primary text-center"},[e("img",{staticClass:"d-block rounded h3 mb-0 w-25",attrs:{src:"/svg/icons/Delete%20User.svg",alt:""}})])}],!1,null,"7f1363c1",null);e.default=component.exports},333:function(t,e,n){"use strict";var o=n(14),r=n(3),c=n(110),l=n(21),d=n(15),h=n(55),m=n(144),f=n(72),v=n(201),w=n(4),y=n(57),_=n(56).f,C=n(35).f,x=n(17).f,I=n(334).trim,k="Number",A=r.Number,T=A.prototype,O=h(y(T))==k,F=function(t){if(f(t))throw TypeError("Cannot convert a Symbol value to a number");var e,n,o,r,c,l,d,code,h=v(t,"number");if("string"==typeof h&&h.length>2)if(43===(e=(h=I(h)).charCodeAt(0))||45===e){if(88===(n=h.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(h.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+h}for(l=(c=h.slice(2)).length,d=0;d<l;d++)if((code=c.charCodeAt(d))<48||code>r)return NaN;return parseInt(c,o)}return+h};if(c(k,!A(" 0o1")||!A("0b1")||A("+0x1"))){for(var E,N=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof N&&(O?w((function(){T.valueOf.call(n)})):h(n)!=k)?m(new A(F(e)),n,N):F(e)},j=o?_(A):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),L=0;j.length>L;L++)d(A,E=j[L])&&!d(N,E)&&x(N,E,C(A,E));N.prototype=T,T.constructor=N,l(r,k,N)}},334:function(t,e,n){var o=n(28),r=n(16),c="["+n(335)+"]",l=RegExp("^"+c+c+"*"),d=RegExp(c+c+"*$"),h=function(t){return function(e){var n=r(o(e));return 1&t&&(n=n.replace(l,"")),2&t&&(n=n.replace(d,"")),n}};t.exports={start:h(1),end:h(2),trim:h(3)}},335:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},336:function(t,e){e.iot_faq={"What is an IoT solution?":"An IoT solution is a combination of devices or other data sources, outfitted with sensors and internet-connected hardware to securely report information back to an IoT platform. This information is often a physical metric that can help users answer a question or solve a specific problem.","Build or Buy- Which is the best IoT gateway development approach that I should choose for my business?":"\n On a broader scale, a ‘build’ strategy for IoT gateway development means developing a solution tailored to your business goals and a greater degree of ownership ( of the solution). <br>  Meanwhile, a “buy” strategy means you have to mold your business goals under readily available solutions. each of the two IoT gateway development approaches has its benefits and limitations. The decision regarding choosing a build vs buy IoT gateway solution depends mainly on your business goals.\n","How long does it take to develop an IoT solution?":"Takes between 4 to 6 months (based on your requirement) to develop an IoT solution. Meanwhile, the PoC (Proof-Of-Concept) can be delivered in 2 months.\nIf you need more information on developing an IoT solution for your business, please get in touch with our sales team.\n","What are the expected returns from applying this technology?":"How long will it take for the company to recover the investment? How much will the company’s costs be reduced once AI is implemented? Integrating AI and ML models in a company implies a cost and therefore an important investment. <br><br> For this reason, a realistic estimation must be made to determine the parameters of the return on investment. To carry out this plan, the possible performance indicators (KPI’s) should be established, so that the return can be measured and how much value the model is bringing to the company should be calculated.\n"},e.cloud_faq={}},337:function(t,e,n){"use strict";n.r(e);n(333);var o=n(332),r={props:{features:{type:Array,required:!0},block:{type:Number,default:4}},name:"KeyFeatures",components:{KeyFeatureCard:o.default}},c=n(30),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container py-5"},[n("div",{staticClass:"row pt-5"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"section-title mb-4 pb-2"},[n("h2",{staticClass:"title mb-4"},[t._v("Key Features")]),t._v(" "),n("div",{staticClass:"text-light-dark mb-0 para-desc"},[t._t("default")],2)])])]),t._v(" "),n("div",{staticClass:"row align-items-center"},t._l(t.features,(function(e){return n("KeyFeatureCard",{key:t._f("slug")(e.title),attrs:{block:t.block,alt:e.title,title:e.title,icon:e.icon,text:e.text}})})),1)])}),[],!1,null,"dcbffcf6",null);e.default=component.exports},338:function(t,e,n){"use strict";n.r(e);var o={name:"TechList",props:{items:{type:Array,default:[]}},methods:{imagePath:function(t){return"/svg/tech/"+t}}},r=n(30),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"py-1 bg-light"},[n("div",{staticClass:"container-fluid px-md-5 px-1"},[n("div",{staticClass:"row justify-content-around align-items-center"},t._l(t.items,(function(e){return n("div",{staticClass:"col-lg-1 col-md-2 col-2 text-center py-4"},[n("img",{staticClass:"avatar w-100 p-lg-3 p-0",staticStyle:{"max-width":"7rem!important"},attrs:{"data-bs-toggle":"tooltip","data-bs-placement":"top",title:e.split(".")[0].toUpperCase(),src:t.imagePath(e),alt:"Neofox solution for "+e.split(".")[0].toUpperCase()}})])})),0)])])}),[],!1,null,"d83e824e",null);e.default=component.exports},339:function(t,e){e.iot_ai_tech_list=["pytorch.svg","tensorflow.svg","python.svg","neo4j.svg","opencv.svg","pyspark.svg"],e.iot_m2m_tech_list=["openvpn.svg","ssh.svg","wireguard.svg"]},340:function(t,e,n){n(111),n(88),n(58),n(54);["background: linear-gradient(90deg, rgba(255,0,104,1) 0%, rgba(255,0,185,1) 100%)","color: white","display: block","font-size: 40px","text-align: center","font-weight: bold"].join(";");e.bootstrap=function(){[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map((function(t){return new bootstrap.Tooltip(t)}))}},341:function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));var o=n(112);var r=n(145),c=n(90);function l(t){return function(t){if(Array.isArray(t))return Object(o.a)(t)}(t)||Object(r.a)(t)||Object(c.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n(89),n(54),n(45);var d=function(title,t){return[{hid:"apple-mobile-web-app-title",property:"apple-mobile-web-app-title",content:title},{hid:"apple-mobile-web-app-status-bar-style",property:"apple-mobile-web-app-status-bar-style",content:t}]},h=function(title,t,e,n,o,video,r,c){return[{hid:"og:title",property:"og:title",content:title},{hid:"og:url",name:"og:url",content:t||"https://www.neofox.org"},{hid:"og:type",property:"og:type",content:e||"Website"},{hid:"og:description",property:"og:description",content:n},{hid:"og:site_name",property:"og:site_name",content:"NEOFOX"},{hid:"og:image",property:"og:image",content:o},{hid:"og:image:secure_url",property:"og:image:secure_url",content:o},{hid:"og:image:alt",property:"og:image:alt",content:title},{hid:"fb:app_id",name:"fb:app_id",content:"543522706280706"},{hid:"fb:admins",name:"fb:admins",content:"543522706280706"},{hid:"og:video",name:"og:video",content:video},{hid:"og:video:height",name:"og:video:height",content:"640"},{hid:"og:video:width",name:"og:video:width",content:385},{hid:"og:video:type",name:"og:video:type",content:"video/mp4"},{hid:"og:latitude",name:"og:latitude",content:r},{hid:"og:longitude",name:"og:longitude",content:c},{hid:"og:locality",name:"og:locality",content:"Jaipur"},{hid:"og:region",name:"og:region",content:"RJ"},{hid:"og:country-name",name:"og:country-name",content:"INDIA"},{hid:"og:postal-code",name:"og:postal-code",content:"302017"},{hid:"og:locale",name:"og:locale",content:"en_IN"}]},m=function(title,t,e,n){return[{hid:"title",name:"title",content:title},{hid:"description",name:"description",content:t},{hid:"keywords",name:"keywords",content:e},{hid:"language",name:"language",content:"EN"},{hid:"Classification",name:"Classification",content:"Business"},{hid:"designer",name:"designer",content:"NEOFOX"},{hid:"coverage",name:"coverage",content:"Worldwide"},{hid:"subtitle",name:"subtitle",content:t},{hid:"language",name:"language",content:"EN"},{hid:"theme-color",name:"theme-color",content:n},{hid:"nightmode",name:"nightmode",content:"enable"}]},f=function(title,t,e,n){return[{hid:"twitter:title",name:"twitter:title",content:title},{hid:"twitter:site",name:"twitter:site",content:"neofox"},{hid:"twitter:creator",name:"twitter:creator",content:title},{hid:"twitter:card",name:"twitter:card",content:title},{hid:"twitter:description",name:"twitter:description",content:t},{hid:"twitter:image",name:"twitter:image",content:e},{hid:"twitter:image:alt",name:"twitter:image:alt",content:title},{hid:"twitter:url",name:"twitter:url",content:n||"https://www.neofox.org"}]},v=function(title,t,e,n,o,r,video,c){var v=arguments.length>8&&void 0!==arguments[8]?arguments[8]:[],w=arguments.length>9&&void 0!==arguments[9]?arguments[9]:26.9124,y=arguments.length>10&&void 0!==arguments[10]?arguments[10]:75.7873;return{title:title,meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"robots",name:"robots",content:"index, follow"},{hid:"revisit-after",name:"revisit-after",content:"1 day"},{hid:"author",name:"author",content:"neofox"}].concat(l(d(title,o)),l(h(title,c,t,e,r,video,w,y)),l(m(title,e,n,o)),l(f(title,e,r,c))),script:[{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"WebPage",name:title,description:e,publisher:{"@type":"ProfilePage",name:"NEOFOX"}}},{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"Corporation",name:"NEOFOX",url:"https://www.neofox.org",logo:"https://www.neofox.org/favicon.png",openingHours:"Mo 08:00-20:00 Tu 08:00-20:00 We 08:00-20:00 Th 08:00-20:30 Fr 08:30-20:00 Sa 08:00-20:00",sameAs:["https://www.facebook.com/neofox.in/","https://www.instagram.com/neofox.in/","https://github.com/neofoxindia","https://www.neofox.in","https://www.linkedin.com/company/neofoxin/","https://dribbble.com/theneofox","https://www.figma.com/@neofox","https://www.pinterest.com/theneofox"]}},{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"Service",name:t,description:e,provider:{"@type":"Organization",name:"NeoFox",sameAs:"https://www.neofox.org"}}},{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"FAQPage",mainEntity:v.map((function(t){var e=Object.keys(t)[0];return{"@type":"Question",name:e,acceptedAnswer:{"@type":"Answer",text:t[e]}}}))}}]}}},394:function(t,e,n){"use strict";n.r(e);var o=n(340),r=n(326),c=n(337),l=n(338),d=n(328),h=n(341),m=n(336),f=n(339),v={components:{TechList:l.default,FaqContainer:r.default,KeyFeatures:c.default,BlogGrid:d.default},head:Object(h.a)("a","a","a","a","a","a","a","a"),data:function(){return{techItems:f.iot_ai_tech_list,features:[{alt:"",title:"BOOM",icon:"",text:"DOOM"}],FAQ:m.iot_faq}},mounted:function(){Object(o.bootstrap)()}},w=n(30),component=Object(w.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"position-relative bg-white"},[n("section",{staticClass:"bg-light w-100 h-100-center"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"col-md-6 col-12 order-md-1 order-2"},[n("div",{staticClass:"title-heading"},[n("NuxtLink",{staticClass:"badge rounded-pill text-light-dark ",attrs:{to:{name:"internet-of-things"}}},[t._v("\n              Internet Of Things\n            ")]),t._v(" "),t._m(0),t._v(" "),n("p",{staticClass:"para-desc text-light-dark"},[t._v("The fundamental explanation for consolidating AI with IoT is, while\n              IoT\n              gadgets effectively collect all the information and moving it to normally cloud or whatever other space\n              where information can be aggregated through the web.\n            ")]),t._v(" "),n("div",{staticClass:"mt-4 pt-2"},[n("NuxtLink",{staticClass:"btn btn-primary me-2",attrs:{to:{name:"contact"}}},[t._v("Get Started")]),t._v(" "),n("a",{staticClass:"btn btn-outline-primary",attrs:{href:"#FAQS"}},[t._v("FAQ")])],1)],1)]),t._v(" "),t._m(1)])])]),t._v(" "),n("TechList",{attrs:{items:t.techItems}}),t._v(" "),n("div",{staticClass:"position-relative"},[n("div",{staticClass:"shape overflow-hidden text-white"},[n("svg",{attrs:{viewBox:"0 0 2880 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z",fill:"currentColor"}})])])]),t._v(" "),n("KeyFeatures",{attrs:{features:t.features}},[n("p",[t._v("\n      The central clarification for merging\n      "),n("span",{staticClass:"line text-primary fw-bold",attrs:{"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Artificial intelligence"}},[t._v("AI")]),t._v("\n      with IoT is, while IoT devices adequately gather all the data and moving it to ordinarily cloud\n      or whatever other space where data can be amassed through the web. ")]),t._v(" "),n("p",[t._v("AI, which is considered as the frontal cortex of A IoT is\n      what truly helps in unique and reenacting the machines to act or respond.")])]),t._v(" "),t._m(2),t._v(" "),n("FaqContainer",{attrs:{faq:t.FAQ,title:"Faq"}}),t._v(" "),n("BlogGrid")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"fw-bold mt-2 mb-3 line-10 text-uppercase"},[t._v("\n              Artificial intelligence "),n("br"),t._v(" of\n              "),n("span",{staticClass:"line text-danger",attrs:{"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Internet of Things"}},[t._v("Things")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-6 order-md-2 order-1"},[e("img",{staticClass:"img-fluid d-block mx-auto",attrs:{src:"/svg/flow-chart/iot-ai.svg",alt:"neofox artificial intelligent in iot"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row d-flex align-items-center"},[n("div",{staticClass:"col-md-7 col-12"},[n("h3",{staticClass:"py-5 h2 line-15 text-dark"},[t._v("\n            AI, which is considered as the cerebrum of AIoT is\n            the thing that really helps in dynamic and recreating the machines to act or react.\n          ")])]),t._v(" "),n("div",{staticClass:"col-5 d-none d-md-block"},[n("img",{staticClass:"w-100",attrs:{src:"/images/illustrator/app.svg",alt:""}})])])])])}],!1,null,"06bd54e2",null);e.default=component.exports;installComponents(component,{FaqContainer:n(326).default,BlogGrid:n(328).default})}}]);