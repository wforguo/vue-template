(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["showDetail"],{"07ed":function(t,s,a){},1128:function(t,s,a){"use strict";var i=a("07ed"),e=a.n(i);e.a},2696:function(t,s,a){t.exports=a.p+"img/index-tips.2309d301.png"},"2ed3":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"show",attrs:{id:"show"}},[i("div",{staticClass:"show-container"},[i("transition",{attrs:{name:"text"}},[i("img",{directives:[{name:"show",rawName:"v-show",value:t.isTrans,expression:"isTrans"}],staticClass:"index-logo",attrs:{alt:"",src:a("d5ff")}})]),i("transition",{attrs:{name:"text"}},[i("img",{directives:[{name:"show",rawName:"v-show",value:t.isTrans,expression:"isTrans"}],staticClass:"index-tips",attrs:{alt:"",src:a("2696")}})]),t._m(0),i("div",{staticClass:"show-title"},[i("span",{staticClass:"show-title-txt"},[t._v(" "+t._s(t.showData.title||"-")+" ")])]),i("div",{staticClass:"show-img"},t._l(t.showData.imgs,(function(s,a){return i("img",{key:a*Math.random(),attrs:{src:s,alt:t.showData.title}})})),0),i("div",{staticClass:"show-desc"},t._l(t.showData.desc,(function(s,a){return i("div",{key:a*Math.random(),staticClass:"show-desc-item"},[t._v(" "+t._s(s)+" ")])})),0),i("div",{staticClass:"back-btn",on:{click:t.navBack}},[t._v("返回")])],1)])},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"header-title"},[a("p",{staticClass:"header-title-main"},[t._v("云上展厅")]),a("p",{staticClass:"header-title-second"},[t._v("CLOUD EXHIBITION HALL")])])}],n=(a("ac1f"),a("5319"),window.showList),o={name:"showDetail",data:function(){return{isTrans:!1}},props:{index:{}},computed:{showData:function(){return n[this.$route.query.index]||{}}},mounted:function(){this.isTrans=!0},methods:{navBack:function(){this.$router.replace({name:"show"})}}},r=o,c=(a("1128"),a("2877")),l=Object(c["a"])(r,i,e,!1,null,"010526d2",null);s["default"]=l.exports},d5ff:function(t,s,a){t.exports=a.p+"img/index-logo.739c270e.png"}}]);