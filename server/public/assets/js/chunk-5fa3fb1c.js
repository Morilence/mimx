(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5fa3fb1c"],{"353a":function(e,t,n){var r=n("a48a");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=n("499e").default;o("0b92fd12",r,!0,{sourceMap:!1,shadowMode:!1})},"4b37":function(e,t,n){"use strict";var r=n("353a"),o=n.n(r);o.a},a48a:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,"#loginForm[data-v-6cdbf66f]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:80%}input[data-v-6cdbf66f]{width:80%}button[data-v-6cdbf66f],input[data-v-6cdbf66f]{position:relative;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}button[data-v-6cdbf66f]{width:50%;margin-top:30px;padding:10px;background-color:#ff7e67;outline:none;border:none;border-radius:5px;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);color:#fff;font-weight:700}input[data-v-6cdbf66f]:-webkit-autofill{padding-left:10px;padding-right:10px;background-color:#ff7e67;outline:none;border:none;border-radius:5px;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);color:#fff;font-weight:700}[data-v-6cdbf66f]::-webkit-input-placeholder{color:hsla(0,0%,100%,.75)}input[type=password][data-v-6cdbf66f],input[type=text][data-v-6cdbf66f]{height:40px;margin-bottom:55px;padding-left:10px;padding-right:10px}input[type=button][data-v-6cdbf66f],input[type=password][data-v-6cdbf66f],input[type=text][data-v-6cdbf66f]{background-color:#ff7e67;outline:none;border:none;border-radius:5px;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);color:#fff;font-weight:700}input[type=button][data-v-6cdbf66f]{padding:10px}hr[data-v-6cdbf66f]{width:90%;margin-top:25px;margin-bottom:5px}#loginForm div[data-v-6cdbf66f],hr[data-v-6cdbf66f]{position:relative;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}#loginForm div[data-v-6cdbf66f]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:80%;height:32px}label[data-v-6cdbf66f]{display:-webkit-box;display:-ms-flexbox;display:flex;width:350px}label[data-v-6cdbf66f],label p[data-v-6cdbf66f]{position:relative;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);height:24px;margin:0}label p[data-v-6cdbf66f]{padding-left:3px;color:#ff7e67;line-height:24px;overflow:hidden;white-space:nowrap}label input[type=checkbox][data-v-6cdbf66f]{left:0;width:16px;height:16px;margin:0;padding:0}a[data-v-6cdbf66f],label input[type=checkbox][data-v-6cdbf66f]{position:relative;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}a[data-v-6cdbf66f]{display:block;height:24px;text-align:right;color:#ff7e67;white-space:nowrap}",""])},b131:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"loginForm",action:""}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.enteredUsername,expression:"enteredUsername"}],attrs:{type:"text",placeholder:"Username",maxlength:"25",autocomplete:"off"},domProps:{value:e.enteredUsername},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login(t)},input:function(t){t.target.composing||(e.enteredUsername=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.enteredPassword,expression:"enteredPassword"}],attrs:{type:"password",readonly:"readonly",name:"",placeholder:"Password",maxlength:"25",autocomplete:"off"},domProps:{value:e.enteredPassword},on:{focus:function(t){return e.pwdGetFocus(t)},blur:function(t){return e.pwdLoseFocus(t)},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login(t)},input:function(t){t.target.composing||(e.enteredPassword=t.target.value)}}}),n("input",{attrs:{type:"button",value:"login"},on:{click:function(t){return t.target!==t.currentTarget?null:e.login(t)}}}),n("hr"),n("div",[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.isChecked,expression:"isChecked"}],attrs:{type:"checkbox",name:"",id:""},domProps:{checked:Array.isArray(e.isChecked)?e._i(e.isChecked,null)>-1:e.isChecked},on:{change:function(t){var n=e.isChecked,r=t.target,o=!!r.checked;if(Array.isArray(n)){var a=null,i=e._i(n,a);r.checked?i<0&&(e.isChecked=n.concat([a])):i>-1&&(e.isChecked=n.slice(0,i).concat(n.slice(i+1)))}else e.isChecked=o}}}),n("p",[e._v("记住登陆信息")])]),n("router-link",{attrs:{to:"register"}},[e._v("立即注册")])],1)])},o=[],a=(n("a481"),n("1bab"));function i(e,t){return Object(a["a"])({method:"post",url:"/login",data:{username:e,password:t}})}var s={name:"",data:function(){return{enteredUsername:"",enteredPassword:"",isChecked:!0}},methods:{login:function(){var e=this;""!=this.enteredUsername&&""!=this.enteredPassword?(this.$store.commit("setIsLoading",!0),i(this.enteredUsername,this.enteredPassword).then((function(t){e.$store.commit("setIsLoading",!1),t.isLogin?("true"==localStorage.getItem("isRemUP")&&(localStorage.setItem("unm",e.enteredUsername),localStorage.setItem("pwd",e.enteredPassword)),e.$store.commit("setIsLogin",!0),e.$store.commit("setUserInfo",t),e.$router.replace("/main/chat"),console.log("Login successfully.")):(e.$tinyToast({content:"Wrong account or password!",duration:5e3}),console.log("Login failed."))}))):alert("Input cannot be empty!")},pwdGetFocus:function(e){e.target.removeAttribute("readonly")},pwdLoseFocus:function(e){e.target.setAttribute("readonly","readonly")}},watch:{isChecked:function(e){1==e?localStorage.setItem("isRemUP",!0):localStorage.setItem("isRemUP",!1)}},created:function(){null===localStorage.getItem("isRemUP")?(localStorage.setItem("isRemUP",!1),this.isChecked=!1):"true"==localStorage.getItem("isRemUP")?(this.isChecked=!0,this.enteredUsername=localStorage.getItem("unm"),this.enteredPassword=localStorage.getItem("pwd")):this.isChecked=!1}},d=s,c=(n("4b37"),n("2877")),l=Object(c["a"])(d,r,o,!1,null,"6cdbf66f",null);t["default"]=l.exports},f28c:function(e,t){var n,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}function d(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{return r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(function(){try{n="function"===typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"===typeof clearTimeout?clearTimeout:i}catch(e){r=i}})();var c,l=[],u=!1,f=-1;function p(){u&&c&&(u=!1,c.length?l=c.concat(l):f=-1,l.length&&h())}function h(){if(!u){var e=s(p);u=!0;var t=l.length;while(t){c=l,l=[];while(++f<t)c&&c[f].run();f=-1,t=l.length}c=null,u=!1,d(e)}}function b(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new b(e,t)),1!==l.length||u||s(h)},b.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}}}]);