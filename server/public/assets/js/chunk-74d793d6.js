(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74d793d6"],{"196b":function(t,e,o){"use strict";o.d(e,"c",(function(){return a})),o.d(e,"b",(function(){return r})),o.d(e,"a",(function(){return i}));var n=o("1bab");function a(t){return Object(n["a"])({method:"get",url:"/getSearchResults",params:{searchKey:t}})}function r(t){return Object(n["a"])({method:"get",url:"/getRecommendUsers",params:{recommendNum:t}})}function i(t){return Object(n["a"])({method:"get",url:"/getInfo",params:{targetName:t}})}},"37fe":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"background-container"}},[n("div",{attrs:{id:"infoPanel"}},[n("img",{attrs:{src:t.avatarUrl,alt:""}}),n("div",[n("span",[t._v(t._s(t.username))]),n("img",{attrs:{src:t.genderImgUrl,alt:""}}),n("button",{on:{click:t.followSwitch}},[t._v(t._s(t.btnText))])]),n("p",[n("span",[t._v("Lv: "+t._s(t.level))]),t._v("|\n                "),n("span",[t._v("关注: "+t._s(t.followNum))]),t._v("|\n                "),n("span",[t._v("粉丝: "+t._s(t.fanNum))])]),n("p",[t._v("简介: "+t._s(t.intro))])])]),n("div",{attrs:{id:"postPanel"}}),n("title-bar",{attrs:{backImgPath:o("6457"),menuImgPath:o("89ca"),title:"",titleColor:"#fafafa",bgColor:"rgba(255, 126, 103, 0)",isShadow:!1}})],1)},a=[],r=o("196b"),i=o("6251"),l=o("efb4"),s={name:"IndividualSpace",components:{TitleBar:l["a"]},data:function(){return{targetInfo:{},avatarUrl:"",username:"ddddd",gender:"",level:0,followNum:0,fanNum:0,intro:"这个人什么都没有写ε=ε=ε=(~￣▽￣)~",isFollow:!1}},computed:{genderImgUrl:function(){return"男"==this.gender?o("f134"):"女"==this.gender?o("9e09"):o("87e5")},btnText:function(){return this.isFollow?"已关注":"关注"}},watch:{},methods:{followSwitch:function(){var t=this;this.$store.commit("setIsLoading",!0),this.isFollow?Object(i["b"])({aod:!1,follower:this.$store.state.userInfo._id,followee:this.targetInfo._id}).then((function(e){if(t.$store.commit("setIsLoading",!1),e.isOk){t.isFollow=!1,t.fanNum=e.followee_fanNum;var o=t.$store.state.userInfo;o.followNum=e.follower_followNum,t.$store.commit("setUserInfo",o)}else t.$tinyToast({content:"Unfollow failed! (unknown error)",duration:2e3})})):Object(i["b"])({aod:!0,follower:this.$store.state.userInfo._id,followee:this.targetInfo._id}).then((function(e){if(t.$store.commit("setIsLoading",!1),e.isOk){t.isFollow=!0,t.fanNum=e.fanNum;var o=t.$store.state.userInfo;o.followNum=e.follower_followNum,t.$store.commit("setUserInfo",o)}else t.$tinyToast({content:"Follow failed! (unknown error)",duration:2e3})}))}},created:function(){var t=this,e=this;this.$store.commit("setIsLoading",!0);var o=this.$route.params.targetName;Object(r["a"])(o).then((function(o){e.targetInfo=o,e.avatarUrl=e.targetInfo.avatarUrl,e.username=e.targetInfo.username,e.gender=e.targetInfo.gender,e.level=e.targetInfo.level,e.followNum=e.targetInfo.followNum,e.fanNum=e.targetInfo.fanNum,""==e.targetInfo.intro?e.intro="这个人啥都没写ε=ε=ε=(~￣▽￣)~":e.intro=e.targetInfo.intro,Object(i["d"])({follower:t.$store.state.userInfo._id,followee:t.targetInfo._id}).then((function(o){e.isFollow=!!o,t.$store.commit("setIsLoading",!1)}))}))}},f=s,d=(o("c1c2"),o("2877")),c=Object(d["a"])(f,n,a,!1,null,"71b064c9",null);e["default"]=c.exports},6251:function(t,e,o){"use strict";o.d(e,"a",(function(){return a})),o.d(e,"c",(function(){return r})),o.d(e,"d",(function(){return i})),o.d(e,"b",(function(){return l}));var n=o("1bab");function a(t){return Object(n["a"])({method:"post",url:"/changeAvatar",data:t})}function r(t){return Object(n["a"])({method:"post",url:"/changeInfo",data:t})}function i(t){return Object(n["a"])({method:"get",url:"/getFollowRelation",params:{follower:t.follower,followee:t.followee}})}function l(t){return Object(n["a"])({method:"get",url:"/changeFollowRelation",params:{aod:t.aod,follower:t.follower,followee:t.followee}})}},6457:function(t,e,o){t.exports=o.p+"assets/img/left_w.svg"},"87e5":function(t,e,o){t.exports=o.p+"assets/img/question_w.svg"},"89ca":function(t,e,o){t.exports=o.p+"assets/img/menu_w.svg"},"9e09":function(t,e,o){t.exports=o.p+"assets/img/woman_w.svg"},c1c2:function(t,e,o){"use strict";var n=o("ce91"),a=o.n(n);a.a},ce91:function(t,e,o){var n=o("d958");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=o("499e").default;a("efa229f2",n,!0,{sourceMap:!1,shadowMode:!1})},d958:function(t,e,o){e=t.exports=o("2350")(!1),e.push([t.i,"p[data-v-71b064c9]{margin:0;padding:0}#background-container[data-v-71b064c9]{position:relative;top:0;background-image:radial-gradient(#ffb478 5%,#ffb478 0,#ff7e67 90%);width:100%;min-height:200px}#infoPanel[data-v-71b064c9]{position:relative;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;padding-top:55px;padding-bottom:15px;text-align:center;text-shadow:4px 4px 5px rgba(0,0,0,.2);color:#fafafa}#infoPanel img[data-v-71b064c9]:first-child{width:55px;height:55px;border:1px solid #fafafa;border-radius:5px;background-color:#fafafa;-webkit-box-shadow:4px 4px 5px rgba(0,0,0,.2);box-shadow:4px 4px 5px rgba(0,0,0,.2)}#infoPanel div[data-v-71b064c9]:nth-child(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:15px}#infoPanel div:nth-child(2) span[data-v-71b064c9]{font-size:18px;font-weight:700}#infoPanel div:nth-child(2) img[data-v-71b064c9]{width:17px;height:17px;padding:1px;margin-left:10px;border:.5px solid #fafafa;border-radius:100%;background-color:#ff7e67}#infoPanel div:nth-child(2) button[data-v-71b064c9]{height:20px;padding:0 5px 0 5px;margin-left:10px;outline:none;border:none;border-radius:4px;color:#ff7e67;font-size:14px;background-color:#fafafa}#infoPanel p[data-v-71b064c9]:nth-child(3){display:-webkit-box;display:-ms-flexbox;display:flex;margin-top:10px;font-size:14px}#infoPanel p:nth-child(3) span[data-v-71b064c9]{padding:0 10px 0 10px}#infoPanel p[data-v-71b064c9]:nth-child(4){padding:0 20px 0 20px;margin-top:10px;word-break:break-all;font-size:14px}#postPanel[data-v-71b064c9]{margin-top:20px}",""])},f134:function(t,e,o){t.exports=o.p+"assets/img/man_w.svg"}}]);