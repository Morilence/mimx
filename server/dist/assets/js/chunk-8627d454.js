(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8627d454"],{b131:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{attrs:{id:"loginForm",action:""}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.enteredUsername,expression:"enteredUsername"}],attrs:{type:"text",placeholder:"Username",maxlength:"25",autocomplete:"off"},domProps:{value:e.enteredUsername},on:{keyup:e.login,input:function(t){t.target.composing||(e.enteredUsername=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.enteredPassword,expression:"enteredPassword"}],attrs:{type:"password",name:"",placeholder:"Password",maxlength:"25",autocomplete:"off"},domProps:{value:e.enteredPassword},on:{keyup:e.login,input:function(t){t.target.composing||(e.enteredPassword=t.target.value)}}}),a("input",{attrs:{type:"button",value:"login"},on:{click:e.login}}),a("hr"),a("router-link",{attrs:{to:"register"}},[e._v("立即注册")])],1)},n=[],r=(a("a481"),a("1bab"));function s(e,t){return Object(r["a"])({method:"post",url:"/login",data:{username:e,password:t}})}var i={name:"",data:function(){return{enteredUsername:"",enteredPassword:""}},methods:{login:function(){var e=this;""!=this.enteredUsername&&""!=this.enteredPassword?s(this.enteredUsername,this.enteredPassword).then((function(t){t.isLogin?(e.$store.commit("setUserInfo",t),null===localStorage.getItem("isLogin")&&localStorage.setItem("isLogin",!0),localStorage.setItem("isLogin",!0),e.$store.commit("setIsLogin",localStorage.getItem("isLogin")),e.$router.replace("/chat"),console.log("Login successfully.")):(alert("Wrong account or password!"),console.log("Login failed."))})):alert("Input cannot be empty!")}}},d=i,l=(a("bbb8"),a("2877")),p=Object(l["a"])(d,o,n,!1,null,"9bbecffc",null);t["default"]=p.exports},bbb8:function(e,t,a){"use strict";var o=a("bdbe"),n=a.n(o);n.a},bdbe:function(e,t,a){var o=a("d670");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=a("499e").default;n("b46478da",o,!0,{sourceMap:!1,shadowMode:!1})},d670:function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,"#loginForm[data-v-9bbecffc]{position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}#loginForm[data-v-9bbecffc],input[data-v-9bbecffc]{left:50%;width:80%}input[data-v-9bbecffc]{position:relative;-webkit-transform:translateX(-50%);transform:translateX(-50%)}input[data-v-9bbecffc]:-webkit-autofill{padding-left:10px;padding-right:10px;background-color:#ff7e67;outline:none;border:none;border-radius:5px;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);color:#fff;font-weight:700}[data-v-9bbecffc]::-webkit-input-placeholder{color:hsla(0,0%,100%,.75)}input[type=password][data-v-9bbecffc],input[type=text][data-v-9bbecffc]{height:40px;margin-bottom:50px;padding-left:10px;padding-right:10px}input[type=button][data-v-9bbecffc],input[type=password][data-v-9bbecffc],input[type=text][data-v-9bbecffc]{background-color:#ff7e67;outline:none;border:none;border-radius:5px;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);color:#fff;font-weight:700}input[type=button][data-v-9bbecffc]{padding:10px}hr[data-v-9bbecffc]{margin-top:25px;margin-bottom:5px}a[data-v-9bbecffc]{position:relative;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);display:block;width:80%;text-align:right;color:#ff7e67}",""])}}]);