(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2db9308c"],{"4a21":function(e,t,r){"use strict";var n=r("7a68"),o=r.n(n);o.a},"7a68":function(e,t,r){var n=r("b24c");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=r("499e").default;o("366dd4a6",n,!0,{sourceMap:!1,shadowMode:!1})},"7cdd":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"registerForm"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.enteredUsername,expression:"enteredUsername"}],attrs:{type:"text",placeholder:"Username",maxlength:"25",autocomplete:"off"},domProps:{value:e.enteredUsername},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.register(t)},input:function(t){t.target.composing||(e.enteredUsername=t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.enteredPassword,expression:"enteredPassword"}],attrs:{type:"password",readonly:"readonly",placeholder:"Password",maxlength:"25",autocomplete:"off"},domProps:{value:e.enteredPassword},on:{focus:function(t){return e.pwdGetFocus(t)},blur:function(t){return e.pwdLoseFocus(t)},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.register(t)},input:function(t){t.target.composing||(e.enteredPassword=t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.enteredPwdConfirm,expression:"enteredPwdConfirm"}],attrs:{type:"password",readonly:"readonly",placeholder:"Pwd Confirm",maxlength:"25",autocomplete:"off"},domProps:{value:e.enteredPwdConfirm},on:{focus:function(t){return e.pwdGetFocus(t)},blur:function(t){return e.pwdLoseFocus(t)},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.register(t)},input:function(t){t.target.composing||(e.enteredPwdConfirm=t.target.value)}}}),r("input",{attrs:{type:"submit",value:"register"},on:{click:function(t){return t.preventDefault(),e.register(t)}}}),r("hr"),r("div",[r("router-link",{attrs:{to:"login"}},[e._v("返回登陆")])],1)])},o=[],a=(r("a481"),r("1bab"));function i(e,t){return Object(a["a"])({method:"post",url:"/register",data:{username:e,password:t}})}var s={name:"",data:function(){return{enteredUsername:"",enteredPassword:"",enteredPwdConfirm:""}},methods:{register:function(){var e=this,t=this;""!=this.enteredUsername&&""!=this.enteredPassword?this.enteredPassword==this.enteredPwdConfirm?(this.$store.commit("setIsLoading",!0),i(this.enteredUsername,this.enteredPassword).then((function(r){t.$store.commit("setIsLoading",!1),r?(t.$router.replace("/welcome/login"),e.$tinyToast({content:"Register successfully.",duration:2e3}),console.log("Register successfully.")):(e.$tinyToast({content:"The username already exists!",duration:2e3}),console.log("Register failed."))}))):this.$tinyToast({content:"Entered passwords differ!",duration:2e3}):this.$tinyToast({content:"Input cannot be empty!",duration:2e3})},pwdGetFocus:function(e){e.target.removeAttribute("readonly")},pwdLoseFocus:function(e){e.target.setAttribute("readonly","readonly")}}},u=s,d=(r("4a21"),r("2877")),l=Object(d["a"])(u,n,o,!1,null,"3797b7bf",null);t["default"]=l.exports},b24c:function(e,t,r){t=e.exports=r("2350")(!1),t.push([e.i,"#registerForm[data-v-3797b7bf]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:80%}input[data-v-3797b7bf]{position:relative;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:80%}input[data-v-3797b7bf]:-webkit-autofill{padding-left:10px;padding-right:10px;background-color:#ff7e67;outline:none;border:none;border-radius:5px;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);color:#fff;font-weight:700}[data-v-3797b7bf]::-webkit-input-placeholder{color:hsla(0,0%,100%,.75)}input[type=password][data-v-3797b7bf],input[type=text][data-v-3797b7bf]{height:40px;margin-bottom:50px;padding-left:10px;padding-right:10px}input[type=password][data-v-3797b7bf],input[type=submit][data-v-3797b7bf],input[type=text][data-v-3797b7bf]{background-color:#ff7e67;outline:none;border:none;border-radius:5px;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);color:#fff;font-weight:700}input[type=submit][data-v-3797b7bf]{padding:10px}hr[data-v-3797b7bf]{width:90%;margin-top:25px;margin-bottom:5px}#registerForm div[data-v-3797b7bf],hr[data-v-3797b7bf]{position:relative;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}#registerForm div[data-v-3797b7bf]{height:32px}a[data-v-3797b7bf]{position:relative;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:block;width:80%;height:24px;text-align:right;color:#ff7e67}",""])},f28c:function(e,t){var r,n,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(e){if(r===setTimeout)return setTimeout(e,0);if((r===a||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}function u(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{return n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(function(){try{r="function"===typeof setTimeout?setTimeout:a}catch(e){r=a}try{n="function"===typeof clearTimeout?clearTimeout:i}catch(e){n=i}})();var d,l=[],c=!1,p=-1;function f(){c&&d&&(c=!1,d.length?l=d.concat(l):p=-1,l.length&&m())}function m(){if(!c){var e=s(f);c=!0;var t=l.length;while(t){d=l,l=[];while(++p<t)d&&d[p].run();p=-1,t=l.length}d=null,c=!1,u(e)}}function b(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new b(e,t)),1!==l.length||c||s(m)},b.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}}}]);