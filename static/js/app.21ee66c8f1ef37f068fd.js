webpackJsonp([1],{"/qzZ":function(t,e){},"5OHe":function(t,e){},"5prr":function(t,e){},"9n10":function(t,e){},G5QA:function(t,e){},G5iw:function(t,e){},"Hny+":function(t,e){},Iskg:function(t,e){},JUyI:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",[e("router-view")],1)],1)},staticRenderFns:[]};var a=i("VU/8")({name:"App"},n,!1,function(t){i("G5iw")},null,null).exports,r=i("/ocq"),c=i("Dd8w"),o=i.n(c),l=i("kciL"),u=i("I29D"),h=i.n(u),d={name:"HomeHeader",computed:o()({},Object(l.c)({currentCity:"city"}))},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._m(0),this._v(" "),this._m(1),this._v(" "),e("div",{staticClass:"right"},[e("router-link",{attrs:{to:"/city"}},[this._v("\n            "+this._s(this.currentCity)+"\n            "),e("span",{staticClass:"iconfont"},[this._v("")])])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"left"},[e("span",{staticClass:"iconfont"},[this._v("")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"search"},[e("span",{staticClass:"iconfont"},[this._v("")]),this._v("            \n        请输入城市/景点/游玩主题\n    ")])}]};var f=i("VU/8")(d,v,!1,function(t){i("xTF9")},"data-v-979e3552",null).exports,m={name:"HomeSwipper",props:{list:Array}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"swipper"},[e("mt-swipe",{attrs:{auto:4e3}},this._l(this.list,function(t,i){return e("mt-swipe-item",{key:i},[e("img",{attrs:{src:t.imgUrl,alt:""}})])}),1)],1)},staticRenderFns:[]};var _=i("VU/8")(m,p,!1,function(t){i("G5QA")},"data-v-7fc4022a",null).exports,C={name:"HomeIconList",props:{list:Array},computed:{pages:function(){var t=[];return this.list.forEach(function(e,i){var s=Math.floor(i/8);t[s]||(t[s]=[]),t[s].push(e)}),t}}},y={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icon-list"},[i("mt-swipe",{attrs:{auto:0}},t._l(t.pages,function(e,s){return i("mt-swipe-item",{key:s},t._l(e,function(e,s){return i("div",{key:s,staticClass:"icon"},[i("div",{staticClass:"icon-img"},[i("img",{attrs:{src:e.imgUrl,alt:""}})]),t._v(" "),i("div",{staticClass:"icon-desc"},[t._v("\n                    "+t._s(e.desc)+"\n                ")])])}),0)}),1)],1)},staticRenderFns:[]};var w=i("VU/8")(C,y,!1,function(t){i("/qzZ")},"data-v-2a797b0a",null).exports,g={name:"HomeRecommend",props:{list:Array}},k={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"recommend"},[i("h2",{staticClass:"title"},[t._v("热销推荐")]),t._v(" "),i("div",{staticClass:"content-list"},t._l(t.list,function(e,s){return i("div",{key:s,staticClass:"content"},[i("div",{staticClass:"left"},[i("img",{attrs:{src:e.imgUrl,alt:""}})]),t._v(" "),i("div",{staticClass:"right"},[i("p",{staticClass:"right-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"desc"},[t._v(t._s(e.desc))]),t._v(" "),i("a",{staticClass:"detail",attrs:{href:""}},[t._v("查看详情")])])])}),0)])},staticRenderFns:[]};var b=i("VU/8")(g,k,!1,function(t){i("ws5u")},"data-v-5148591e",null).exports,x={name:"HomeWeekend",props:{list:Array}},H={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weekend"},[i("h2",{staticClass:"title"},[t._v("周末去哪儿")]),t._v(" "),i("div",{staticClass:"content-list"},t._l(t.list,function(e,s){return i("div",{key:s,staticClass:"content"},[i("img",{attrs:{src:e.imgUrl,alt:""}}),t._v(" "),i("p",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"desc"},[t._v(t._s(e.desc))])])}),0)])},staticRenderFns:[]};var L={name:"Home",components:{HomeHeader:f,HomeSwipper:_,HomeIconList:w,HomeRecommend:b,HomeWeekend:i("VU/8")(x,H,!1,function(t){i("vUwG")},"data-v-5d0f9c0a",null).exports},computed:o()({},Object(l.c)(["city"])),data:function(){return{swipeList:[],iconList:[],rexiaoList:[],weekList:[]}},methods:{getHomeData:function(){var t=this;h.a.get("/static/api/index.json").then(function(e){console.log(e.data.data);var i=e.data.data;t.swipeList=i.swiperList,t.iconList=i.iconList,t.rexiaoList=i.recommendList,t.weekList=i.weekendList})}},mounted:function(){this.lastCity=this.city,this.getHomeData()},activated:function(){this.lastCity!==this.city&&(this.lastCity=this.city,this.getHomeData())}},$={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("home-header"),t._v(" "),i("home-swipper",{attrs:{list:t.swipeList}}),t._v(" "),i("home-icon-list",{attrs:{list:t.iconList}}),t._v(" "),i("home-recommend",{attrs:{list:t.rexiaoList}}),t._v(" "),i("home-weekend",{attrs:{list:t.weekList}})],1)},staticRenderFns:[]};var S=i("VU/8")(L,$,!1,function(t){i("JUyI")},"data-v-0fcdd975",null).exports,U={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"city-header"},[e("router-link",{attrs:{to:"/"}},[e("span",{staticClass:"iconfont"},[this._v("")])]),this._v("\n    城市选择\n")],1)},staticRenderFns:[]};var E=i("VU/8")({name:"CityHeader"},U,!1,function(t){i("ji8M")},"data-v-2847b1ba",null).exports,I=i("/QXl"),F={name:"CitySearch",data:function(){return{keyword:"",list:[],timer:null}},props:{cities:Object},computed:{hasNoData:function(){return!this.list.length}},watch:{keyword:function(){var t=this;this.timer&&clearTimeout(this.timer),this.keyword?this.timer=setTimeout(function(){var e=[];for(var i in t.cities)t.cities[i].forEach(function(i){(i.spell.indexOf(t.keyword)>-1||i.name.indexOf(t.keyword)>-1)&&e.push(i)});t.list=e}):this.list=[]}},methods:o()({handleCityClick:function(t){this.changeCity(t),this.$router.push("/")}},Object(l.b)(["changeCity"])),mounted:function(){this.scroll=new I.a(this.$refs.search)}},R={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"city-search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"search-input",attrs:{type:"text",placeholder:"请输入城市名或拼音"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.keyword,expression:"keyword"}],ref:"search",staticClass:"search-content"},[i("ul",[t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"search-item border-bottom",on:{click:function(i){return t.handleCityClick(e.name)}}},[t._v("\n            "+t._s(e.name)+"\n            ")])}),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.hasNoData,expression:"hasNoData"}],staticClass:"search-item border-bottom"},[t._v("\n            没有找到匹配数据\n            ")])],2)])])},staticRenderFns:[]};var T=i("VU/8")(F,R,!1,function(t){i("5prr")},"data-v-45723e10",null).exports,A={name:"CityList",props:{cities:Object,hot:Array,letter:String},computed:o()({},Object(l.c)(["city"])),mounted:function(){var t=this.$refs.wrapper;this.scroll=new I.a(t)},updated:function(){this.startY=this.$refs.A[0].offsetTop},watch:{letter:function(){if(this.letter){var t=this.$refs[this.letter][0];console.log(this.$refs),this.scroll.scrollToElement(t)}}},methods:o()({handleCityClick:function(t){this.changeCity(t),this.$router.push("/")}},Object(l.b)(["changeCity"]))},j={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"city-list"},[i("div",[i("div",{staticClass:"current"},[i("h2",{staticClass:"title"},[t._v("当前城市")]),t._v(" "),i("div",{staticClass:"button-list"},[i("div",{staticClass:"button-wrapper"},[i("div",{staticClass:"button"},[t._v(t._s(this.city))])])])]),t._v(" "),i("div",{staticClass:"hot"},[i("h2",{staticClass:"title"},[t._v("热门城市")]),t._v(" "),i("div",{staticClass:"button-list"},t._l(t.hot,function(e,s){return i("div",{key:s,staticClass:"button-wrapper",on:{click:function(i){return t.handleCityClick(e.name)}}},[i("div",{staticClass:"button"},[t._v(t._s(e.name))])])}),0)]),t._v(" "),t._l(t.cities,function(e,s){return i("div",{key:s,ref:s,refInFor:!0,staticClass:"list"},[i("h2",{staticClass:"title"},[t._v(t._s(s))]),t._v(" "),i("ul",t._l(e,function(e,s){return i("li",{key:s,staticClass:"item",on:{click:function(i){return t.handleCityClick(e.name)}}},[t._v(t._s(e.name))])}),0)])})],2)])},staticRenderFns:[]};var O=i("VU/8")(A,j,!1,function(t){i("Iskg")},"data-v-6f455503",null).exports,V={name:"CityAlphabet",props:{cities:Object},data:function(){return{touchStatus:!1,startY:0}},computed:{letters:function(){var t=[];for(var e in this.cities)t.push(e);return t}},updated:function(){this.startY=this.$refs.A[0].offsetTop},methods:{handleLetter:function(t){this.$emit("change",t.target.innerText)},handleTouchStart:function(){this.touchStatus=!0},handleTouchMove:function(t){if(this.touchStatus){var e=t.touches[0].clientY-100,i=Math.floor((e-this.startY)/20);i>=0&&i<this.letters.length&&this.$emit("change",this.letters[i])}},handleTouchEnd:function(){this.touchStatus=!1}}},D={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"alphabet"},[i("ul",{staticClass:"list"},t._l(t.letters,function(e,s){return i("li",{key:s,ref:e,refInFor:!0,staticClass:"item",on:{click:t.handleLetter,touchstart:function(e){return e.preventDefault(),t.handleTouchStart(e)},touchmove:t.handleTouchMove,touchend:t.handleTouchEnd}},[t._v("\n            "+t._s(e)+"\n        ")])}),0)])},staticRenderFns:[]};var N={name:"City",components:{CityHeader:E,CitySearch:T,CityList:O,CityAlphabet:i("VU/8")(V,D,!1,function(t){i("mIXi")},"data-v-3648643e",null).exports},data:function(){return{cities:{},hotCities:[],letter:""}},mounted:function(){this.getCityInfo()},methods:{getCityInfo:function(){h.a.get("/static/api/city.json").then(this.handleCityInfo)},handleCityInfo:function(t){var e=t.data.data;console.log(e),this.cities=e.cities,this.hotCities=e.hotCities},handleLetterChange:function(t){this.letter=t}}},M={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"city"},[i("city-header"),t._v(" "),i("city-search",{attrs:{cities:t.cities}}),t._v(" "),i("city-list",{attrs:{cities:t.cities,hot:t.hotCities,letter:t.letter}}),t._v(" "),i("city-alphabet",{attrs:{cities:t.cities},on:{change:t.handleLetterChange}})],1)},staticRenderFns:[]};var G=i("VU/8")(N,M,!1,function(t){i("Hny+")},"data-v-5a3606f1",null).exports;s.default.use(r.a);var Y=new r.a({routes:[{path:"/",name:"Home",component:S},{path:"/city",name:"City",component:G}]}),q="北京";try{localStorage.city&&(q=localStorage.city)}catch(t){}var z={city:q},J={changeCity:function(t,e){t.city=e;try{localStorage.city=e}catch(t){alert(t.description)}}};s.default.use(l.a);var Q=new l.a.Store({state:z,mutations:J,actions:{changeCity:function(t,e){t.commit("changeCity",e)}}}),W=(i("9n10"),i("RKxg"),i("wSez")),X=(i("5OHe"),i("iDdd")),K=i.n(X);s.default.component(W.Swipe.name,W.Swipe),s.default.component(W.SwipeItem.name,W.SwipeItem),s.default.config.productionTip=!1,K.a.attach(document.body),new s.default({el:"#app",router:Y,store:Q,components:{App:a},template:"<App/>"})},RKxg:function(t,e){},ji8M:function(t,e){},mIXi:function(t,e){},vUwG:function(t,e){},ws5u:function(t,e){},xTF9:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.21ee66c8f1ef37f068fd.js.map