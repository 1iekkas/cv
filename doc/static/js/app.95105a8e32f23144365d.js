webpackJsonp([0],[,function(t,e,n){t.exports=n.p+"static/img/avatar.a86f92c.jpg"},,function(t,e,n){function i(t){n(22)}var a=n(0)(n(14),n(35),i,null,null);t.exports=a.exports},function(t,e,n){function i(t){n(20)}var a=n(0)(n(16),n(33),i,"data-v-12dd44a6",null);t.exports=a.exports},function(t,e,n){function i(t){n(23)}var a=n(0)(n(18),n(36),i,"data-v-3b395c68",null);t.exports=a.exports},function(t,e){!function(t,e){function n(){var e=s.getBoundingClientRect().width;e/c>540&&(e=540*c);var n=e/10;s.style.fontSize=n+"px",d.rem=t.rem=n}var i,a=t.document,s=a.documentElement,o=a.querySelector('meta[name="viewport"]'),r=a.querySelector('meta[name="flexible"]'),c=0,l=0,d=e.flexible||(e.flexible={});if(o){console.warn("将根据已有的meta标签来设置缩放比例");var u=o.getAttribute("content").match(/initial\-scale=([\d\.]+)/);u&&(l=parseFloat(u[1]),c=parseInt(1/l))}else if(r){var v=r.getAttribute("content");if(v){var m=v.match(/initial\-dpr=([\d\.]+)/),f=v.match(/maximum\-dpr=([\d\.]+)/);m&&(c=parseFloat(m[1]),l=parseFloat((1/c).toFixed(2))),f&&(c=parseFloat(f[1]),l=parseFloat((1/c).toFixed(2)))}}if(!c&&!l){var p=(t.navigator.appVersion.match(/android/gi),t.navigator.appVersion.match(/iphone/gi)),h=t.devicePixelRatio;c=p?h>=3&&(!c||c>=3)?3:h>=2&&(!c||c>=2)?2:1:1,l=1/c}if(s.setAttribute("data-dpr",c),!o)if(o=a.createElement("meta"),o.setAttribute("name","viewport"),o.setAttribute("content","initial-scale="+l+", maximum-scale="+l+", minimum-scale="+l+", user-scalable=no"),s.firstElementChild)s.firstElementChild.appendChild(o);else{var _=a.createElement("div");_.appendChild(o),a.write(_.innerHTML)}t.addEventListener("resize",function(){clearTimeout(i),i=setTimeout(n,300)},!1),t.addEventListener("pageshow",function(t){t.persisted&&(clearTimeout(i),i=setTimeout(n,300))},!1),"complete"===a.readyState?a.body.style.fontSize=12*c+"px":a.addEventListener("DOMContentLoaded",function(){a.body.style.fontSize=12*c+"px"},!1),n(),d.dpr=t.dpr=c,d.refreshRem=n,d.rem2px=function(t){var e=parseFloat(t)*this.rem;return"string"==typeof t&&t.match(/rem$/)&&(e+="px"),e},d.px2rem=function(t){var e=parseFloat(t)/this.rem;return"string"==typeof t&&t.match(/px$/)&&(e+="rem"),e}}(window,window.lib||(window.lib={}))},function(t,e){!function(){var t="@charset \"utf-8\";html{color:#000;background:#fff;overflow-y:scroll;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}html *{outline:0;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}html,body{font-family:sans-serif}body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,hr,button,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{margin:0;padding:0}input,select,textarea{font-size:100%}table{border-collapse:collapse;border-spacing:0}fieldset,img{border:0}abbr,acronym{border:0;font-variant:normal}del{text-decoration:line-through}address,caption,cite,code,dfn,em,th,var{font-style:normal;font-weight:500}ol,ul{list-style:none}caption,th{text-align:left}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:500}q:before,q:after{content:''}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}a:hover{text-decoration:underline}ins,a{text-decoration:none}",e=document.createElement("style");if(document.getElementsByTagName("head")[0].appendChild(e),e.styleSheet)e.styleSheet.disabled||(e.styleSheet.cssText=t);else try{e.innerHTML=t}catch(n){e.innerText=t}}()},function(t,e,n){"use strict";var i=n(2),a=n(41),s=n(29),o=n.n(s),r=n(32),c=n.n(r),l=n(31),d=n.n(l),u=n(30),v=n.n(u);i.a.use(a.a),a.a.prototype.goBack=function(){this.isBack=!0,window.history.go(-1)},e.a=new a.a({routes:[{path:"/",name:"Hello",component:o.a},{path:"/mine",name:"mine",component:c.a},{path:"/experience",name:"experience",component:d.a},{path:"/call",name:"call",component:v.a}]})},function(t,e){},function(t,e,n){function i(t){n(25)}var a=n(0)(n(11),n(38),i,null,null);t.exports=a.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",data:function(){return{transitionName:"slide-left"}},watch:{$route:function(t,e){var n=this.$router.isBack;console.log(n),this.transitionName=n?"slide-right":"slide-left",this.$router.isBack=!1,console.log(this.transitionName)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(4),a=n.n(i),s=n(5),o=n.n(s);e.default={name:"hello",data:function(){return{msg:"Welcome!",isActive:""}},components:{AppHeader:a.a,sideBar:o.a},methods:{change:function(t){this.isActive=t,console.log(this.isActive)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(4),a=n.n(i),s=n(5),o=n.n(s);e.default={name:"hello",data:function(){return{msg:"Welcome!",contact:[{name:"QQ",content:"764295062"},{name:"phone",content:"15627795345"},{name:"wechat",content:"1iekkas"}],isActive:""}},components:{AppHeader:a.a,sideBar:o.a},methods:{change:function(t){this.isActive=t,console.log(this.isActive)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{data:""}},props:["titleFontColor"],mounted:function(){this.$nextTick(function(){this.getScroll(this.titleFontColor)})},methods:{goback:function(){this.$router.goBack()},getScroll:function(t){var e=document.getElementsByClassName("child-header")[0],n=(document.getElementsByClassName("back")[0],e.getAttribute("class"));window.onscroll=function(){var i=document.documentElement.scrollTop||document.body.scrollTop;console.log(t),i>50?(e.style.background="rgba(255,255,255,1)",e.style.borderBottomWidth="1px",e.style.borderBottomColor="#ccc",e.style.borderBottomStyle="solid",e.className=n+t):(e.style.background="rgba(255,255,255,0)",e.style.borderBottom="none",e.className=n)}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),a=n.n(i);e.default={name:"hello",data:function(){return{msg:"Welcome!",list:[{time:"2016.8 - 2017.10",content:"Its about where I am, what I am responsible for, how I do it,Its about where I am, what I am responsible for, how I do it"},{time:"2015.8 - 2016.6",content:"Its about where I am, what I am responsible for, how I do it,Its about where I am, what I am responsible for, how I do it"},{time:"2013.6 - 2015.6",content:"Its about where I am, what I am responsible for, how I do it,Its about where I am, what I am responsible for, how I do it"},{time:"2016.8 - 2017.10",content:"Its about where I am, what I am responsible for, how I do it,Its about where I am, what I am responsible for, how I do it"}],titleFontColor:"black"}},components:{childHeader:a.a},mounted:function(){},methods:{}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive,this.$emit("toggle",this.isActive)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),a=n.n(i);e.default={name:"hello",data:function(){return{msg:"Welcome!",isActive:"",title:"个人资料",titleFontColor:"white",detail:{name:"1iekkas",sex:"男",qq:"764295062",birthday:"22岁",constellation:"白羊座",education:"广东机电职业技术学院",live:"广东-佛山-禅城",call:"15627795345",motto:"why~?",wechat:"liekkasN1ce"},hobbies:[{title:"竞技游戏",picUrl:"http://i2.bvimg.com/605992/ff8f380e7269ebc0.jpg",content:"偶尔打打LOL,对了开黑吗，我贼6"},{title:"音乐",picUrl:"http://i2.bvimg.com/605992/e24576d5c8881332.jpg",content:"一天不听几首电子浑身难受"},{title:"代码",picUrl:"http://i4.bvimg.com/605992/0c9d829aa9a0d272.jpg",content:"吃饭的家伙,能不爱么?~"}]}},components:{childHeader:a.a},mounted:function(){},methods:{editMotto:function(){}},watch:{$route:function(t,e){var n=this.$router.isBack;console.log(n)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),a=n(10),s=n.n(a),o=n(8),r=n(7),c=(n.n(r),n(6)),l=(n.n(c),n(9));n.n(l);i.a.config.productionTip=!1;new i.a;new i.a({el:"#app",router:o.a,template:"<App/>",components:{App:s.a}})},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){function i(t){n(27),n(28)}var a=n(0)(n(12),n(40),i,"data-v-abd34b7c",null);t.exports=a.exports},function(t,e,n){function i(t){n(21)}var a=n(0)(n(13),n(34),i,"data-v-1602c6fe",null);t.exports=a.exports},function(t,e,n){function i(t){n(24)}var a=n(0)(n(15),n(37),i,"data-v-416f5a0a",null);t.exports=a.exports},function(t,e,n){function i(t){n(26)}var a=n(0)(n(17),n(39),i,"data-v-61f1231a",null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[0==t.isActive?n("span",{staticClass:"iconfont",on:{click:t.toggle}},[t._v("")]):n("span",{staticClass:"iconfont",on:{click:t.toggle}},[t._v("")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"call"},[n("div",{staticClass:"wapper",class:{activeLeft:t.isActive}},[n("app-header",{on:{toggle:t.change}}),t._v(" "),n("div",{staticClass:"container"},[n("h1",[t._v("How to contact me?")]),t._v(" "),n("div",{staticClass:"contact-container"},t._l(t.contact,function(e){return n("div",{staticClass:"layout"},[n("div",[t._v(t._s(e.name))]),t._v(" "),n("div",[t._v(t._s(e.content))])])}))])],1),t._v(" "),n("side-bar",{class:{active:t.isActive}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"child-header",class:t.titleFontColor,on:{mousewheel:t.getScroll}},[n("div",{staticClass:"back",on:{click:t.goback}},[t._m(0),t._v("\n    title\n  ")])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"back-btn"},[n("span",{staticClass:"iconfont"},[t._v("")]),t._v(" "),n("span",[t._v("返回")])])}]}},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sideBar"},[n("div",{staticClass:"shadow"},[t._m(0),t._v(" "),n("p",{staticClass:"state"},[t._v("give me some time,please")]),t._v(" "),n("nav",[n("ul",[n("li",[n("router-link",{attrs:{to:"/"}},[t._v("home")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/mine"}},[t._v("mine")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/experience"}},[t._v("experience")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/call"}},[t._v("call me")])],1)])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"author"},[i("img",{attrs:{src:n(1)}}),t._v(" "),i("span",[t._v("1iekkas")])])}]}},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"experience"},[n("div",{staticClass:"wapper"},[n("child-header",{attrs:{titleFontColor:t.titleFontColor}}),t._v(" "),n("div",{staticClass:"container"},[t._m(0),t._v(" "),t._l(t.list,function(e){return n("div",{staticClass:"list"},[n("div",{staticClass:"content"},[n("p",{staticClass:"time"},[n("i",{staticClass:"iconfont"},[t._v("")]),t._v(t._s(e.time))]),t._v(" "),n("p",{staticClass:"text"},[t._v(t._s(e.content))])])])})],2)],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"author"},[i("img",{attrs:{src:n(1)}}),t._v(" "),i("span",[t._v("1iekkas")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:t.transitionName}},[n("router-view")],1)],1)},staticRenderFns:[]}},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mine"},[n("div",{staticClass:"wapper",class:{activeLeft:t.isActive}},[n("child-header",{attrs:{titleFontColor:t.titleFontColor}}),t._v(" "),n("div",{staticClass:"container"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"container-content"},[n("div",{staticClass:"container-detail"},[n("h2",[t._v(t._s(t.detail.name))]),t._v(" "),n("p",{staticClass:"motto",attrs:{align:"center"}},[t._v(t._s(t.detail.motto)),n("i",{staticClass:"iconfont editMotto",on:{click:t.editMotto}},[t._v("")])]),t._v(" "),n("p",[n("i",{staticClass:"iconfont"},[t._v("")]),t._v(t._s(t.detail.qq))]),t._v(" "),n("p",{staticClass:"s"},[n("i",{staticClass:"iconfont"},[t._v("")]),t._v(" "),n("span",[t._v(t._s(t.detail.sex))]),t._v(" "),n("span",[t._v(t._s(t.detail.birthday))]),t._v(" "),n("span",[t._v(t._s(t.detail.constellation))]),t._v(" "),n("span",[t._v(t._s(t.detail.live))])]),t._v(" "),t._m(2),t._v(" "),n("p",{staticClass:"top-line"},[n("i",{staticClass:"iconfont"},[t._v("")]),t._v(t._s(t.detail.education))]),t._v(" "),n("p",[n("i",{staticClass:"iconfont"},[t._v("")]),t._v(t._s(t.detail.call))]),t._v(" "),n("p",[n("i",{staticClass:"iconfont"},[t._v("")]),t._v(t._s(t.detail.wechat))])]),t._v(" "),n("div",{staticClass:"container-hobby"},[n("h2",{staticClass:"hobby-title",attrs:{align:"center"}},[t._v("兴趣爱好")]),t._v(" "),t._l(t.hobbies,function(e){return n("div",{staticClass:"list"},[n("img",{attrs:{src:e.picUrl}}),t._v(" "),n("div",[n("p",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.content))])])])})],2),t._v(" "),t._m(3)])])],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-header"},[n("img",{attrs:{src:"http://i2.bvimg.com/605992/c061eb2e3b622cbc.jpg",width:"100%"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container-author"},[i("img",{attrs:{src:n(1)}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"line"},[n("i",{staticClass:"iconfont"},[t._v("")]),t._v("前端开发")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-tag"},[n("h2",{staticClass:"my-tag-title",attrs:{align:"center"}},[t._v("个人标签")]),t._v("\n          这家伙没留下任何标签\n        ")])}]}},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hello"},[i("div",{staticClass:"wapper",class:{activeLeft:t.isActive}},[i("app-header",{on:{toggle:t.change}}),t._v(" "),i("div",{staticClass:"container"},[i("img",{attrs:{src:n(1)}}),t._v(" "),i("h1",[t._v(t._s(t.msg))])])],1),t._v(" "),i("side-bar",{class:{active:t.isActive}})],1)},staticRenderFns:[]}}],[19]);
//# sourceMappingURL=app.95105a8e32f23144365d.js.map