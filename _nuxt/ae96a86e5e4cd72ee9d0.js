(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{223:function(t,e,s){var r=s(243);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,s(7).default)("506868cc",r,!0,{})},242:function(t,e,s){"use strict";var r=s(223);s.n(r).a},243:function(t,e,s){(t.exports=s(6)(!1)).push([t.i,".top{margin-top:80px}",""])},269:function(t,e,s){"use strict";s.r(e);s(34);var r=s(2),a=s.n(r),o={data:function(){return{userForm:{name:"",email:"",phone:"",password:""}}},methods:{registerUser:function(){var t=a()(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.post("register",this.userForm);case 2:this.$auth.login({data:{email:this.userForm.email,password:this.userForm.password}}),this.$router.push({path:"/"});case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},i=(s(242),s(11)),n=Object(i.a)(o,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container top"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-md-8"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[t._v("Register")]),t._v(" "),s("div",{staticClass:"card-body"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.registerUser(e)}}},[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"name"}},[t._v("Name")]),t._v(" "),s("div",{staticClass:"col-md-6"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.userForm.name,expression:"userForm.name"}],staticClass:"form-control",attrs:{type:"text",required:"",autofocus:""},domProps:{value:t.userForm.name},on:{input:function(e){e.target.composing||t.$set(t.userForm,"name",e.target.value)}}}),t._v(" "),t._m(0)])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"email"}},[t._v("Email")]),t._v(" "),s("div",{staticClass:"col-md-6"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.userForm.email,expression:"userForm.email"}],staticClass:"form-control",attrs:{type:"email",required:""},domProps:{value:t.userForm.email},on:{input:function(e){e.target.composing||t.$set(t.userForm,"email",e.target.value)}}}),t._v(" "),t._m(1)])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"email"}},[t._v("Phone number")]),t._v(" "),s("div",{staticClass:"col-md-6"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.userForm.phone,expression:"userForm.phone"}],staticClass:"form-control",attrs:{type:"phone",required:""},domProps:{value:t.userForm.phone},on:{input:function(e){e.target.composing||t.$set(t.userForm,"phone",e.target.value)}}}),t._v(" "),t._m(2)])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"password"}},[t._v("Password")]),t._v(" "),s("div",{staticClass:"col-md-6"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.userForm.password,expression:"userForm.password"}],staticClass:"form-control",attrs:{type:"password",required:""},domProps:{value:t.userForm.password},on:{input:function(e){e.target.composing||t.$set(t.userForm,"password",e.target.value)}}}),t._v(" "),t._m(3)])]),t._v(" "),t._m(4)])])])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"invalid-feedback",attrs:{role:"alert"}},[e("strong")])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"invalid-feedback",attrs:{role:"alert"}},[e("strong")])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"invalid-feedback",attrs:{role:"alert"}},[e("strong")])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"invalid-feedback",attrs:{role:"alert"}},[e("strong")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group row mb-0"},[e("div",{staticClass:"col-md-6 offset-md-4"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[this._v("\n                  Register\n                ")])])])}],!1,null,null,null);n.options.__file="register.vue";e.default=n.exports}}]);