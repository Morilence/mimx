(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fbdf57be"],{"0aa6":function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,"#essentialInfo[data-v-6d3a6869]{margin-top:65px}ul[data-v-6d3a6869]{position:relative;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:90%;margin-top:15px;margin-bottom:10px;overflow:hidden;background-color:#fff;border-radius:5px;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04)}ul[data-v-6d3a6869]:nth-child(2){margin-bottom:20px}li[data-v-6d3a6869]{margin-top:12px;margin-bottom:12px}li[data-v-6d3a6869]:first-child{font-weight:700;font-size:17px}li p[data-v-6d3a6869]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin:0;padding:0;margin-bottom:10px;padding-left:15px;padding-right:15px;font-size:16px;color:#606266}li p span[data-v-6d3a6869]:first-child{white-space:nowrap;color:#909399}li p input[data-v-6d3a6869]{padding-left:15px;text-align:right}li p input[data-v-6d3a6869],li textarea[data-v-6d3a6869]{width:100%;border:none;outline:none;color:#606266}li textarea[data-v-6d3a6869]{height:100px;overflow-y:visible;padding:5px 15px 5px 15px;text-align:center;font-size:15px}hr[data-v-6d3a6869],li textarea[data-v-6d3a6869]{position:relative;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}hr[data-v-6d3a6869]{margin:0;width:95%}",""])},"121e":function(e,t,a){e.exports=a.p+"assets/img/check_w.svg"},6251:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"c",(function(){return r})),a.d(t,"f",(function(){return i})),a.d(t,"b",(function(){return s})),a.d(t,"e",(function(){return l})),a.d(t,"d",(function(){return d}));var n=a("1bab");function o(e){return Object(n["a"])({method:"post",url:"/changeAvatar",data:e})}function r(e){return Object(n["a"])({method:"post",url:"/changeInfo",data:e})}function i(e){return Object(n["a"])({method:"get",url:"/getFollowRelation",params:{follower:e.follower,followee:e.followee}})}function s(e){return Object(n["a"])({method:"get",url:"/changeFollowRelation",params:{aod:e.aod,follower:e.follower,followee:e.followee}})}function l(e){return Object(n["a"])({method:"get",url:"/getFollowList",params:{id:e}})}function d(e){return Object(n["a"])({method:"get",url:"/getFanList",params:{id:e}})}},"62a8":function(e,t,a){var n=a("0aa6");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=a("499e").default;o("8718ca0a",n,!0,{sourceMap:!1,shadowMode:!1})},6457:function(e,t,a){e.exports=a.p+"assets/img/left_w.svg"},"97a3":function(e,t,a){e.exports=a.p+"assets/img/edit_w.svg"},"9e88":function(e,t,a){"use strict";var n=a("62a8"),o=a.n(n);o.a},b72c:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"essentialInfo"}},[n("ul",[e._m(0),n("hr"),n("li",[n("p",[n("span",[e._v("昵称")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",readonly:!e.isEdit&&"readonly",maxlength:"25"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})])]),n("hr"),n("li",[n("p",[n("span",[e._v("ID")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.id,expression:"id"}],attrs:{type:"text",readonly:"readonly"},domProps:{value:e.id},on:{input:function(t){t.target.composing||(e.id=t.target.value)}}})])]),n("hr"),n("li",[n("p",[n("span",[e._v("等级")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.level,expression:"level"}],attrs:{type:"text",readonly:"readonly"},domProps:{value:e.level},on:{input:function(t){t.target.composing||(e.level=t.target.value)}}})])])]),n("ul",[e._m(1),n("hr"),n("li",[n("p",[n("span",[e._v("性别")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.gender,expression:"gender"}],attrs:{type:"text",readonly:!e.isEdit&&"readonly",maxlength:""},domProps:{value:e.gender},on:{input:function(t){t.target.composing||(e.gender=t.target.value)}}})])]),n("hr"),n("li",[n("p",[n("span",[e._v("年龄")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.age,expression:"age"}],attrs:{type:"text",oninput:"value=value.replace(/[^\\d]/g,'')",readonly:!e.isEdit&&"readonly",maxlength:""},domProps:{value:e.age},on:{input:function(t){t.target.composing||(e.age=t.target.value)}}})])]),n("hr"),n("li",[n("p",[n("span",[e._v("邮箱")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",readonly:!e.isEdit&&"readonly",maxlength:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})])]),n("hr"),n("li",[e._m(2),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.intro,expression:"intro"}],attrs:{placeholder:"简单介绍一下你自己吧！",readonly:!e.isEdit&&"readonly",maxlength:"100"},domProps:{value:e.intro},on:{input:function(t){t.target.composing||(e.intro=t.target.value)}}})])]),n("title-bar",{attrs:{backImgPath:a("6457"),menuImgPath:e.editImgUrl,title:"基本资料",titleColor:"#fafafa",bgColor:"rgba(255, 126, 103, 1)",isShadow:!0},on:{onReact:e.judgeReact}})],1)},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[a("p",[e._v("账号信息")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[a("p",[e._v("个人信息")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("span",[e._v("简介 :")])])}],r=a("efb4"),i=a("6251"),s={name:"",components:{TitleBar:r["a"]},data:function(){return{isEdit:!1,username:"",id:"",level:0,gender:"",age:"",email:"",intro:""}},computed:{editImgUrl:{get:function(){return this.isEdit?a("121e"):a("97a3")}}},watch:{},methods:{judgeReact:function(e){if(1==e)this.isEdit=!0;else{this.isEdit=!1,this.$store.commit("setIsLoading",!0);var t=new FormData;t.append("_id",this.$store.state.userInfo._id),t.append("username",this.username),t.append("gender",this.gender),t.append("age",this.age),t.append("email",this.email),t.append("intro",this.intro),this.$options.methods.uploadInfo.bind(this)(t)}},uploadInfo:function(e){var t=this,a=this;Object(i["c"])(e).then((function(n){if(a.$store.commit("setIsLoading",!1),1==n){var o=a.$store.state.userInfo;o.username=e.get("username"),o.gender=e.get("gender"),o.age=e.get("age"),o.email=e.get("email"),o.intro=e.get("intro"),a.$store.commit("setUserInfo",o),"true"==localStorage.getItem("isRemUP")&&localStorage.setItem("unm",o.username),t.$tinyToast({content:"Modify successfully.",duration:2e3})}else-1==n?t.$tinyToast({content:"Modify failed! (username already exists)",duration:2e3}):t.$tinyToast({content:"Modify failed! (unknown error)",duration:2e3}),a.username=a.$store.state.userInfo.username,a.gender=a.$store.state.userInfo.gender,a.age=a.$store.state.userInfo.age,a.email=a.$store.state.userInfo.email,a.intro=a.$store.state.userInfo.intro}))}},created:function(){this.username=this.$store.state.userInfo.username,this.id=this.$store.state.userInfo._id,this.level=this.$store.state.userInfo.level,this.gender=this.$store.state.userInfo.gender,this.age=this.$store.state.userInfo.age,this.email=this.$store.state.userInfo.email,this.intro=this.$store.state.userInfo.intro}},l=s,d=(a("9e88"),a("2877")),u=Object(d["a"])(l,n,o,!1,null,"6d3a6869",null);t["default"]=u.exports}}]);