(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ecc6e3a2"],{"3b26":function(e,t,o){"use strict";var a=o("ac01"),n=o.n(a);n.a},9617:function(e,t,o){t=e.exports=o("2350")(!1),t.push([e.i,"#loginForm[data-v-80798596]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:80%}input[data-v-80798596]{width:80%}button[data-v-80798596],input[data-v-80798596]{position:relative;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}button[data-v-80798596]{width:50%;margin-top:30px;padding:10px;background-color:#ff7e67;outline:none;border:none;border-radius:5px;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);color:#fff;font-weight:700}input[data-v-80798596]:-webkit-autofill{padding-left:10px;padding-right:10px;background-color:#ff7e67;outline:none;border:none;border-radius:5px;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);color:#fff;font-weight:700}[data-v-80798596]::-webkit-input-placeholder{color:hsla(0,0%,100%,.75)}input[type=password][data-v-80798596],input[type=text][data-v-80798596]{height:40px;margin-bottom:50px;padding-left:10px;padding-right:10px}input[type=button][data-v-80798596],input[type=password][data-v-80798596],input[type=text][data-v-80798596]{background-color:#ff7e67;outline:none;border:none;border-radius:5px;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);color:#fff;font-weight:700}input[type=button][data-v-80798596]{padding:10px}hr[data-v-80798596]{margin-top:25px;margin-bottom:5px}a[data-v-80798596]{position:relative;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);display:block;width:80%;text-align:right;color:#ff7e67}",""])},ac01:function(e,t,o){var a=o("9617");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=o("499e").default;n("0c8e959b",a,!0,{sourceMap:!1,shadowMode:!1})},b131:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("form",{attrs:{id:"loginForm",action:""}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.enteredUsername,expression:"enteredUsername"}],attrs:{type:"text",placeholder:"Username",maxlength:"25",autocomplete:"off"},domProps:{value:e.enteredUsername},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login(t)},input:function(t){t.target.composing||(e.enteredUsername=t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.enteredPassword,expression:"enteredPassword"}],attrs:{type:"password",name:"",placeholder:"Password",maxlength:"25",autocomplete:"off"},domProps:{value:e.enteredPassword},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login(t)},input:function(t){t.target.composing||(e.enteredPassword=t.target.value)}}}),o("input",{attrs:{type:"button",value:"login"},on:{click:e.login}}),o("hr"),o("router-link",{attrs:{to:"register"}},[e._v("立即注册")])],1)},n=[],r=(o("a481"),o("1bab"));function i(e,t){return Object(r["a"])({method:"post",url:"/login",data:{username:e,password:t}})}var s={name:"",data:function(){return{enteredUsername:"",enteredPassword:""}},methods:{login:function(){var e=this;""!=this.enteredUsername&&""!=this.enteredPassword?i(this.enteredUsername,this.enteredPassword).then((function(t){t.isLogin?(e.$store.commit("setUserInfo",t),null===localStorage.getItem("isLogin")&&localStorage.setItem("isLogin",!0),localStorage.setItem("isLogin",!0),e.$store.commit("setIsLogin",localStorage.getItem("isLogin")),e.$router.replace("/chat"),console.log("Login successfully.")):(alert("Wrong account or password!"),console.log("Login failed."))})):alert("Input cannot be empty!")}}},d=s,p=(o("3b26"),o("2877")),l=Object(p["a"])(d,a,n,!1,null,"80798596",null);t["default"]=l.exports}}]);