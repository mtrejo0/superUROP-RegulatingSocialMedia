(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4652c2bf"],{9089:function(t,e,r){},a3c5:function(t,e,r){"use strict";var s=r("9089"),o=r.n(s);o.a},cd56:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Navbar"),r("div",{staticClass:"main"},[r("CreateShortForm"),r("ShortList")],1)],1)},o=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"subcontainer"},[r("div",{staticClass:"header primary-header"},[t._v(" URL Shortener ")]),r("div",{staticClass:"short-form-container"},[r("form",{attrs:{id:"create-short",method:"post"},on:{submit:function(e){return e.preventDefault(),t.createShort(e)}}},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.shortName,expression:"shortName",modifiers:{trim:!0}}],attrs:{id:"name",type:"text",name:"shortName",placeholder:"Enter Short Name"},domProps:{value:t.shortName},on:{input:function(e){e.target.composing||(t.shortName=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.url,expression:"url",modifiers:{trim:!0}}],attrs:{id:"url",type:"url",name:"url",placeholder:"Enter URL"},domProps:{value:t.url},on:{input:function(e){e.target.composing||(t.url=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),r("input",{staticClass:"button",attrs:{type:"submit",value:"Create Short",id:"createFreet"}}),t.success?r("div",{staticClass:"success-message"},[t._v(" "+t._s(t.success)+" ")]):t._e(),t.errors.length?r("div",{staticClass:"error-message"},[r("b",[t._v("Please correct the following error(s):")]),r("ul",t._l(t.errors,(function(e){return r("li",{key:e.id},[t._v(t._s(e))])})),0)]):t._e()])])])},n=[],i=r("bc3a"),c=r.n(i),u=r("56d7"),l={name:"CreateShortForm",data:function(){return{errors:[],success:"",shortName:"",url:""}},methods:{createShort:function(){var t=this;if(this.errors=[],""===this.shortName||""===this.url)""===this.shortName&&this.errors.push("Short name is required"),""===this.url&&this.errors.push("URL is required"),this.clearMessages();else{var e={shortName:this.shortName,url:this.url};c.a.post("/api/shorts",e).then((function(e){t.success="Short created successfully!",u["eventBus"].$emit("create-short-success",e)})).catch((function(e){t.errors.push(e.response.data.error)})).then((function(){t.resetForm(),t.clearMessages()}))}},resetForm:function(){this.shortName="",this.url=""},clearMessages:function(){var t=this;setInterval((function(){t.errors=[],t.success=""}),5e3)}}},h=l,m=r("2877"),d=Object(m["a"])(h,a,n,!1,null,null,null),v=d.exports,p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"subcontainer"},[r("div",{staticClass:"header secondary-header"},[t._v(" Shorts ")]),r("div",[t.success?r("div",{staticClass:"success-message"},[t._v(" "+t._s(t.success)+" ")]):t._e(),t.error?r("div",{staticClass:"error-message"},[t._v(" "+t._s(t.error)+" ")]):t._e(),r("div",{staticClass:"shorts-container"},[t.shorts.length?r("div",t._l(t.shorts,(function(t){return r("ShortListItem",{key:t.id,attrs:{short:t}})})),1):r("div",[r("p",{staticStyle:{"text-align":"center"}},[t._v("There are no shorts to display. Create one today!")])])])])])},f=[],_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"short-container"},[r("div",{staticClass:"short-name"},[t._v(" "+t._s(t.short.shortName))]),r("p",[t._v("Creator ID: "+t._s(t.creatorIdentity))]),r("p",[t._v("Short URL: "),r("a",{attrs:{target:"_blank",href:"http://localhost:3000/"+t.short.shortName}},[t._v(" http://localhost:3000/"+t._s(t.short.shortName)+" ")])]),r("a",{attrs:{target:"_blank",href:t.short.url}},[t._v(" "+t._s(t.short.url)+" ")]),r("div",{staticClass:"short-item-actions"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.url,expression:"url",modifiers:{trim:!0}}],staticClass:"edit",attrs:{type:"text",name:"url",placeholder:"New Url"},domProps:{value:t.url},on:{input:function(e){e.target.composing||(t.url=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),r("button",{on:{click:t.updateShort}},[t._v("Update")]),r("button",{on:{click:t.deleteShort}},[t._v("Delete")])])])},g=[],S={name:"ShortListItem",props:{short:Object},data:function(){return{url:""}},computed:{creatorIdentity:function(){return this.short.creator?this.short.creator:"anonymous"}},methods:{updateShort:function(){var t=this,e={url:this.url};c.a.put("/api/shorts/".concat(this.short.shortName),e).then((function(t){u["eventBus"].$emit("update-short-success",t)})).catch((function(t){u["eventBus"].$emit("update-short-error",t)})).then((function(){return t.url=""}))},deleteShort:function(){var t=this;c.a.delete("/api/shorts/".concat(this.short.shortName),{}).then((function(){u["eventBus"].$emit("delete-short-success",t.short)})).catch((function(t){u["eventBus"].$emit("delete-short-error",t)}))}}},N=S,b=Object(m["a"])(N,_,g,!1,null,null,null),C=b.exports,$={name:"ShortList",components:{ShortListItem:C},data:function(){return{error:"",success:"",shorts:[]}},created:function(){var t=this;u["eventBus"].$on("create-short-success",(function(e){t.shorts.push(e.data)})),u["eventBus"].$on("update-short-success",(function(e){t.success="Short name ".concat(e.data.shortName," now resolves to ").concat(e.data.url),t.clearMessages(),t.loadShorts()})),u["eventBus"].$on("delete-short-success",(function(e){t.success="Short name ".concat(e.shortName," has been deleted"),t.clearMessages(),t.loadShorts()})),u["eventBus"].$on("update-short-error",(function(e){t.error="Error updating short ".concat(e.data.shortName),t.clearMessages(),t.loadShorts()})),u["eventBus"].$on("delete-short-error",(function(e){t.error="Error deleting short ".concat(e.shortName),t.clearMessages(),t.loadShorts()}))},mounted:function(){this.loadShorts()},methods:{loadShorts:function(){var t=this;c.a.get("/api/shorts").then((function(e){t.shorts=e.data}))},clearMessages:function(){var t=this;setInterval((function(){t.success="",t.error=""}),5e3)}}},y=$,w=Object(m["a"])(y,p,f,!1,null,null,null),k=w.exports,x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"nav-bar"},[r("div",[r("router-link",{attrs:{to:"/account"}},[r("div",{staticClass:"nav-icon-container"},[r("img",{attrs:{src:"/images/minimize_icon.png"}})]),t.userName?r("span",[t._v(" Hi "+t._s(t.userName)+"! ")]):r("span",[t._v(" Sign In/Sign Up ")])])],1)])},B=[],L={name:"NavBar",data:function(){return{userName:this.$cookie.get("url-shortener-auth")}}},U=L,E=(r("a3c5"),Object(m["a"])(U,x,B,!1,null,"17e0d660",null)),I=E.exports,M={name:"Main",components:{CreateShortForm:v,ShortList:k,Navbar:I}},j=M,F=Object(m["a"])(j,s,o,!1,null,null,null);e["default"]=F.exports}}]);
//# sourceMappingURL=chunk-4652c2bf.9279fafc.js.map