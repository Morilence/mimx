(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69922130"],{"37fe":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e._m(0),i("div",{attrs:{id:"infoPanel"}},[i("img",{attrs:{src:e.avatarUrl,alt:""}}),i("div",[e._v(" "+e._s(e.username)+" "),i("img",{attrs:{src:e.genderImgUrl,alt:""}})]),i("p",[i("span",[e._v("Lv: "+e._s(e.level))]),e._v("|\n            "),i("span",[e._v("关注: "+e._s(e.followNum))]),e._v("|\n            "),i("span",[e._v("粉丝: "+e._s(e.fanNum))])]),i("p",[e._v("简介: "+e._s())])]),i("div",{attrs:{id:"postPanel"}}),i("title-bar",{attrs:{backImgPath:a("6457"),menuImgPath:a("89ca"),title:"",titleColor:"#fafafa",bgColor:"rgba(255, 126, 103, 0)",isShadow:!1}})],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"background"}},[a("img",{attrs:{src:"",alt:""}})])}],o=a("efb4"),s={name:"IndividualSpace",components:{TitleBar:o["a"]},data:function(){return{avatarUrl:"",username:"",gender:"",level:0,followNum:0,fanNum:0}},computed:{genderImgUrl:function(){return"男"==this.gender?a("f134"):"女"==this.gender?a("9e09"):a("87e5")}},watch:{},methods:{getInfo:function(){}},created:function(){this.$store.commit("setIsLoading",!0);this.$route.params.targetName;console.log(target),this.$store.commit("setIsLoading",!1)}},r=s,l=(a("693f"),a("2877")),f=Object(l["a"])(r,i,n,!1,null,"92e7f322",null);t["default"]=f.exports},6457:function(e,t,a){e.exports=a.p+"assets/img/left_w.svg"},"693f":function(e,t,a){"use strict";var i=a("a596"),n=a.n(i);n.a},"87e5":function(e,t,a){e.exports=a.p+"assets/img/question_w.svg"},"89ca":function(e,t,a){e.exports=a.p+"assets/img/menu_w.svg"},"9e09":function(e,t,a){e.exports=a.p+"assets/img/woman_w.svg"},a596:function(e,t,a){var i=a("e62f");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("499e").default;n("07e72f83",i,!0,{sourceMap:!1,shadowMode:!1})},e62f:function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,"p[data-v-92e7f322]{margin:0;padding:0}#background[data-v-92e7f322]{position:absolute;top:0;background-image:radial-gradient(#ffb478 1%,#ff7e67 99%);width:100%;height:220px}#background img[data-v-92e7f322]{width:100%;height:100px}#infoPanel[data-v-92e7f322]{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:55px;text-align:center;text-shadow:4px 4px 5px rgba(0,0,0,.2);color:#fafafa}#infoPanel img[data-v-92e7f322]:first-child{width:50px;height:50px;border:1px solid #fafafa;border-radius:4px;-webkit-box-shadow:4px 4px 5px rgba(0,0,0,.2);box-shadow:4px 4px 5px rgba(0,0,0,.2)}#infoPanel div[data-v-92e7f322]:nth-child(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:10px;font-size:17px;font-weight:700}#infoPanel div:nth-child(2) img[data-v-92e7f322]{width:17px;height:17px;padding:1px;margin-left:6px;border:.5px solid #fafafa;border-radius:100%;background-color:#ff7e67}#infoPanel p[data-v-92e7f322]:nth-child(3){display:-webkit-box;display:-ms-flexbox;display:flex;margin-top:5px;font-size:15px}#infoPanel p:nth-child(3) span[data-v-92e7f322]{padding:0 6px 0 6px}#infoPanel p[data-v-92e7f322]:nth-child(4){margin-top:5px;font-size:15px}#postPanel[data-v-92e7f322]{margin-top:20px}",""])},f134:function(e,t,a){e.exports=a.p+"assets/img/man_w.svg"}}]);