(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-84636f64"],{"196b":function(t,e,a){"use strict";a.d(e,"c",(function(){return i})),a.d(e,"b",(function(){return r})),a.d(e,"a",(function(){return o}));var n=a("1bab");function i(t){return Object(n["a"])({method:"get",url:"/getSearchResults",params:{searchKey:t}})}function r(t){return Object(n["a"])({method:"get",url:"/getRecommendUsers",params:{recommendNum:t}})}function o(t){return Object(n["a"])({method:"get",url:"/getInfo",params:{targetName:t}})}},3379:function(t,e,a){"use strict";var n=a("fb07"),i=a.n(n);i.a},"37fe":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("div",{attrs:{id:"infoPanel"}},[n("img",{attrs:{src:t.avatarUrl,alt:""}}),n("div",[t._v(" "+t._s(t.username)+" "),n("img",{attrs:{src:t.genderImgUrl,alt:""}})]),n("p",[n("span",[t._v("Lv: "+t._s(t.level))]),t._v("|\n            "),n("span",[t._v("关注: "+t._s(t.followNum))]),t._v("|\n            "),n("span",[t._v("粉丝: "+t._s(t.fanNum))])]),n("p",[t._v("简介: "+t._s())])]),n("div",{attrs:{id:"postPanel"}}),n("title-bar",{attrs:{backImgPath:a("6457"),menuImgPath:a("89ca"),title:"",titleColor:"#fafafa",bgColor:"rgba(255, 126, 103, 0)",isShadow:!1}})],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"background"}},[a("img",{attrs:{src:"",alt:""}})])}],r=a("196b"),o=a("efb4"),s={name:"IndividualSpace",components:{TitleBar:o["a"]},data:function(){return{avatarUrl:"",username:"",gender:"",level:0,followNum:0,fanNum:0}},computed:{genderImgUrl:function(){return"男"==this.gender?a("f134"):"女"==this.gender?a("9e09"):a("87e5")}},watch:{},methods:{},created:function(){var t=this,e=this;this.$store.commit("setIsLoading",!0);var a=this.$route.params.targetName,n={};Object(r["a"])(a).then((function(a){t.$store.commit("setIsLoading",!1),n=a,e.avatarUrl=n.avatarUrl,e.username=n.username,e.gender=n.gender,e.level=n.level,e.followNum=n.followNum,e.fanNum=n.fanNum}))}},c=s,l=(a("3379"),a("2877")),d=Object(l["a"])(c,n,i,!1,null,"9cc153c2",null);e["default"]=d.exports},6457:function(t,e,a){t.exports=a.p+"assets/img/left_w.svg"},"6b93":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,"p[data-v-9cc153c2]{margin:0;padding:0}#background[data-v-9cc153c2]{position:absolute;top:0;background-image:radial-gradient(#ffb478 1%,#ff7e67 99%);width:100%;height:220px}#background img[data-v-9cc153c2]{width:100%;height:100px}#infoPanel[data-v-9cc153c2]{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:55px;text-align:center;text-shadow:4px 4px 5px rgba(0,0,0,.2);color:#fafafa}#infoPanel img[data-v-9cc153c2]:first-child{width:50px;height:50px;border:1px solid #fafafa;border-radius:4px;background-color:#fafafa;-webkit-box-shadow:4px 4px 5px rgba(0,0,0,.2);box-shadow:4px 4px 5px rgba(0,0,0,.2)}#infoPanel div[data-v-9cc153c2]:nth-child(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:10px;font-size:17px;font-weight:700}#infoPanel div:nth-child(2) img[data-v-9cc153c2]{width:17px;height:17px;padding:1px;margin-left:6px;border:.5px solid #fafafa;border-radius:100%;background-color:#ff7e67}#infoPanel p[data-v-9cc153c2]:nth-child(3){display:-webkit-box;display:-ms-flexbox;display:flex;margin-top:5px;font-size:15px}#infoPanel p:nth-child(3) span[data-v-9cc153c2]{padding:0 8px 0 8px}#infoPanel p[data-v-9cc153c2]:nth-child(4){margin-top:5px;font-size:15px}#postPanel[data-v-9cc153c2]{margin-top:20px}",""])},"87e5":function(t,e,a){t.exports=a.p+"assets/img/question_w.svg"},"89ca":function(t,e,a){t.exports=a.p+"assets/img/menu_w.svg"},"9e09":function(t,e,a){t.exports=a.p+"assets/img/woman_w.svg"},f134:function(t,e,a){t.exports=a.p+"assets/img/man_w.svg"},fb07:function(t,e,a){var n=a("6b93");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("499e").default;i("8af2c1a0",n,!0,{sourceMap:!1,shadowMode:!1})}}]);