webpackJsonp([28],{1035:function(e,t,r){var n=r(1036);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(17)("26f41af6",n,!1)},1036:function(e,t,r){t=e.exports=r(16)(!1),t.push([e.i,"\n.advanced-router {\n  height: 240px !important;\n}\n.advanced-router-tip-p {\n  padding: 10px 0;\n}\n",""])},1037:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Row",[r("Col",{attrs:{span:"24"}},[r("Card",[r("p",{attrs:{slot:"title"},slot:"title"},[r("Icon",{attrs:{type:"ios-list"}}),e._v("\n                    订单详情(动态路由)\n                ")],1),e._v(" "),r("Row",{staticClass:"advanced-router",attrs:{type:"flex",justify:"center",align:"middle"}},[r("Table",{staticStyle:{width:"100%"},attrs:{columns:e.orderColumns,data:e.orderData}})],1)],1)],1)],1)],1)},a=[];n._withStripped=!0;var o={render:n,staticRenderFns:a};t.default=o},303:function(e,t,r){"use strict";function n(e){d||r(1035)}Object.defineProperty(t,"__esModule",{value:!0});var a=r(839),o=r.n(a);for(var i in a)"default"!==i&&function(e){r.d(t,e,function(){return a[e]})}(i);var s=r(1037),u=r.n(s),d=!1,l=r(4),c=n,p=l(o.a,u.a,!1,c,null,null);p.options.__file="src\\views\\advanced-router\\mutative-router.vue",t.default=p.exports},839:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"mutative-router",data:function(){var e=this;return{orderColumns:[{type:"index",title:"序号",width:60},{title:"订单号",key:"order_id",align:"center"},{title:"用户",key:"user_name"},{title:"详情",key:"show_more",align:"center",render:function(t,r){return t("Button",{props:{type:"text",size:"small"},on:{click:function(){var t={order_id:r.row.order_id};e.$router.push({name:"order-info",params:t})}}},"了解详情")}}],orderData:[{order_id:"1000001",user_name:"Aresn"},{order_id:"1000002",user_name:"Lison"},{order_id:"1000003",user_name:"lili"},{order_id:"1000004",user_name:"lala"}]}},computed:{avatorImage:function(){return localStorage.avatorImgPath}}}}});