(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{Gglg:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return g}));var a=n("dI71"),r=n("q1tI"),c=n.n(r),o=n("H2TA"),i=n("23Pe"),u=n("yh/R"),s=n("j+1e"),l=n.n(s),f=n("sVFi"),d=n("fZh+"),m=n("Wbzz"),h=n("cQSq"),p=n.n(h),_=n("kXyF"),v=function(e){function t(){return e.apply(this,arguments)||this}Object(a.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e,t,n,a=this.props.sourceData,r=a.all_cats,c=a.hier_cats,o=a.count,i=function(e,t){var n={};return e.forEach((function(e){n[e.item]=e[t]})),n},u=i(r,"color"),s=i(r,"count"),l=[];(e=c,t={},n=[],e.forEach((function(e){if(e.length<2&&e.push(""),t[e[0].trim()+e[1].trim()])return!0;t[e[0].trim()+e[1].trim()]=1,n.push([e[0],e[1]])})),n).forEach((function(e){l.push({cate1_name:e[0],cate2_name:e[1]?e[1]:"",count:e[1]?s[e[1]]:s[e[0]]})})),l=l.sort((function(e,t){return e.cate1_name>t.cate1_name?1:-1}));var f=[];l.forEach((function(e){f.push({cate_name:e.cate1_name,count:e.count})}));var d=(new p.a).createView();d.source(f).transform({type:"percent",field:"count",dimension:"cate_name",as:"percent"});var h=[];d.rows.forEach((function(e){h.push(u[e.cate_name])}));var v=new _.a({container:"catpie_container",autoFit:!0,height:600});v.data(d.rows),v.legend(!1),v.coordinate("theta",{radius:.6,innerRadius:.3}),v.scale("percent",{formatter:function(e){return e=(100*e).toFixed(0)+"%"}}),v.tooltip({showMarkers:!1,showTitle:!1}),v.interval().adjust("stack").position("percent").color("cate_name",(function(e){return u[e]})).style({stroke:"white",lineWidth:1}).label("cate_name",(function(){return{offset:-10,style:{fill:"white",shadowBlur:2,shadowColor:"rgba(0, 0, 0, .45)"},content:function(e){var t=e.cate_name;return t?t+"("+s[t]+")":""}}}));var w=[];l.forEach((function(e){w.push({cate_name:e.cate2_name?e.cate2_name:e.cate1_name,count:e.count,secLevel:!!e.cate2_name})}));var g=(new p.a).createView();g.source(w).transform({type:"percent",field:"count",dimension:"cate_name",as:"percent"});var b=v.createView();b.data(g.rows),b.coordinate("theta",{innerRadius:.6,radius:1}),b.interval().adjust("stack").position("percent").color("cate_name",(function(e){return u[e]})).style({stroke:"white",lineWidth:1}).label("cate_name",(function(){return{offset:-12,style:{fill:"white",shadowBlur:2,shadowColor:"rgba(0, 0, 0, .45)"},content:function(e){if(!e.secLevel)return"";var t=e.cate_name;return t?t+"("+s[t]+")":""}}}));var y=v.createView();y.theme({defaultColor:"red"}),y.annotation().text({position:["50%","50%"],content:"共"+o+"篇",style:{fontSize:18,fill:"#000",fontWeight:500,textAlign:"center"}}),v.interaction("element-active"),v.render(),v.on("interval:click",(function(e){Object(m.d)("/categories/"+e.data.data.cate_name)}))},n.render=function(){return c.a.createElement("div",{id:"catpie_container"})},t}(c.a.Component),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.classes,n=e.data.allPosts.edges,a=[],r=[],o=0;n.forEach((function(e){var t=e.node;a=a.concat(t.categories),r.push(t.categories),o+=1}));var i=l()(a),s={all_cats:Object.entries(i).map((function(e){var t=e[0],n=e[1];return{item:t,count:n,color:Object(f.c)(t),percent:n/Object.entries(i).length}})),hier_cats:r,count:o};return c.a.createElement(u.a,{title:"分类"},c.a.createElement("div",{className:t.index},c.a.createElement(d.a,null,c.a.createElement(v,{sourceData:s}))))},t}(c.a.Component),g=(t.default=Object(i.a)(Object(o.a)((function(e){return{index:{margin:"0 auto",maxWidth:800,paddingTop:"1em",textAlign:"center"}}}))(w)),"3192190579")}}]);
//# sourceMappingURL=component---plugins-gine-theme-mod-src-pages-categories-js-e8b6261d81c5b4e6a70b.js.map