(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d2ece82"],{6251:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"f",(function(){return r})),a.d(e,"b",(function(){return s})),a.d(e,"e",(function(){return l})),a.d(e,"d",(function(){return c}));var i=a("1bab");function n(t){return Object(i["a"])({method:"post",url:"/changeAvatar",data:t})}function o(t){return Object(i["a"])({method:"post",url:"/changeInfo",data:t})}function r(t){return Object(i["a"])({method:"get",url:"/getFollowRelation",params:{follower:t.follower,followee:t.followee}})}function s(t){return Object(i["a"])({method:"get",url:"/changeFollowRelation",params:{aod:t.aod,follower:t.follower,followee:t.followee}})}function l(t){return Object(i["a"])({method:"get",url:"/getFollowList",params:{id:t}})}function c(t){return Object(i["a"])({method:"get",url:"/getFanList",params:{id:t}})}},6457:function(t,e,a){t.exports=a.p+"assets/img/left_w.svg"},"754d":function(t,e,a){t.exports=a.p+"assets/img/left_circle_c.svg"},8171:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,"#followList[data-v-03ba5f60]{margin-top:65px}li[data-v-03ba5f60]{display:-webkit-box;display:-ms-flexbox;display:flex;padding-left:5px;padding-right:5px}li img[data-v-03ba5f60]{width:40px;height:40px;margin:8px;border:1px solid #ff7e67;border-radius:5px}li p[data-v-03ba5f60]{margin:0;padding:15px;padding-left:15px;color:#606266;font-weight:700}hr[data-v-03ba5f60]{position:relative;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:95%;margin-bottom:0}#pageSorter[data-v-03ba5f60],hr[data-v-03ba5f60]{margin-top:15px}#pageSorter[data-v-03ba5f60]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:5px;padding-left:15px;padding-right:15px}#pageSorter img[data-v-03ba5f60]{width:25px;height:25px}#pageSorter p[data-v-03ba5f60]{margin:0;padding-top:0;padding-bottom:0;text-align:center;font-weight:700;color:#ff7e67}",""])},"89ca":function(t,e,a){t.exports=a.p+"assets/img/menu_w.svg"},"8ac6":function(t,e,a){var i=a("8171");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("499e").default;n("6c674f37",i,!0,{sourceMap:!1,shadowMode:!1})},"9e3b":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"followList"}},[i("ul",[t._l(t.followList,(function(e,a){return i("li",{directives:[{name:"show",rawName:"v-show",value:t.isDisplay(a),expression:"isDisplay(index)"}],key:e.username,on:{click:function(a){return t.visit(e.username)}}},[i("img",{attrs:{src:e.avatarUrl,alt:""}}),i("p",[t._v(t._s(e.username))])])})),i("hr",{directives:[{name:"show",rawName:"v-show",value:t.isFlip,expression:"isFlip"}]}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isFlip,expression:"isFlip"}],attrs:{id:"pageSorter"}},[i("img",{attrs:{src:a("754d"),alt:""},on:{click:t.PgUp}}),i("p",[t._v(t._s(t.pageNum))]),i("img",{attrs:{src:a("dc30"),alt:""},on:{click:t.PgDn}})])],2),i("title-bar",{attrs:{backImgPath:a("6457"),menuImgPath:a("89ca"),title:"关注",titleColor:"#fafafa",bgColor:"rgba(255, 126, 103, 1)",isShadow:!0}})],1)},n=[],o=a("6251"),r=a("efb4"),s={name:"",components:{TitleBar:r["a"]},data:function(){return{followList:[]}},computed:{isDisplay:{get:function(){var t=this;return function(e){var a=e+1;return a/10<t.pageNum&&a/10>t.pageNum-1||a/10==t.pageNum}}}},methods:{visit:function(t){this.$router.push({name:"IndividualSpace",path:"/options/individualSpace",params:{targetName:t}})},PgUp:function(){this.pageNum>1&&this.pageNum--},PgDn:function(){this.pageNum<parseInt(this.findList.length/10)+1&&this.pageNum++}},created:function(){var t=this,e=this;this.$store.commit("setIsLoading",!0),Object(o["e"])(this.$store.state.userInfo._id).then((function(a){t.$store.commit("setIsLoading",!1),e.followList=a}))}},l=s,c=(a("c836"),a("2877")),p=Object(c["a"])(l,i,n,!1,null,"03ba5f60",null);e["default"]=p.exports},c836:function(t,e,a){"use strict";var i=a("8ac6"),n=a.n(i);n.a},dc30:function(t,e,a){t.exports=a.p+"assets/img/right_circle_c.svg"}}]);