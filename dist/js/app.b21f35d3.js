(function(){"use strict";var e={8116:function(e,n,t){var r=t(9242),o=t(3396);function a(e,n){const t=(0,o.up)("router-link"),a=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("nav",null,[(0,o.Wm)(t,{class:"nav-link",to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("Home")])),_:1}),(0,o.Wm)(t,{class:"nav-link",id:"review-link",to:{name:"create-review"}},{default:(0,o.w5)((()=>[(0,o.Uk)("Write review")])),_:1}),(0,o.Wm)(t,{class:"nav-link",to:{name:"reviews"}},{default:(0,o.w5)((()=>[(0,o.Uk)("Your Reviews")])),_:1})]),(0,o.Wm)(a,null,{default:(0,o.w5)((({Component:e})=>[(0,o.Wm)(r.uT,{name:"route",mode:"out-in"},{default:(0,o.w5)((()=>[((0,o.wg)(),(0,o.j4)((0,o.LL)(e)))])),_:2},1024)])),_:1})],64)}var i=t(89);const c={},u=(0,i.Z)(c,[["render",a]]);var l=u,s=t(2483);const m=[{path:"/",name:"home",component:()=>t.e(84).then(t.bind(t,9084))},{path:"/reviews",name:"reviews",component:()=>Promise.all([t.e(161),t.e(363)]).then(t.bind(t,6363))},{path:"/create-review",name:"create-review",component:()=>t.e(176).then(t.bind(t,1176))},{path:"/reviews/:id",name:"reviewdetails",component:()=>Promise.all([t.e(161),t.e(949)]).then(t.bind(t,9949)),params:!0,props:!0},{path:"/category/action",name:"action-category",component:()=>Promise.all([t.e(161),t.e(663)]).then(t.bind(t,5663))},{path:"/category/comedy",name:"comedy-category",component:()=>Promise.all([t.e(161),t.e(436)]).then(t.bind(t,436))},{path:"/category/crime",name:"crime-category",component:()=>Promise.all([t.e(161),t.e(569)]).then(t.bind(t,5569))},{path:"/category/documentary",name:"documentary-category",component:()=>Promise.all([t.e(161),t.e(414)]).then(t.bind(t,2414))},{path:"/category/drama",name:"drama-category",component:()=>Promise.all([t.e(161),t.e(144)]).then(t.bind(t,2144))},{path:"/category/fantasy",name:"fantasy-category",component:()=>Promise.all([t.e(161),t.e(137)]).then(t.bind(t,7137))},{path:"/category/horror",name:"horror-category",component:()=>Promise.all([t.e(161),t.e(361)]).then(t.bind(t,2361))},{path:"/category/romance",name:"romance-category",component:()=>Promise.all([t.e(161),t.e(773)]).then(t.bind(t,9773))},{path:"/category/sports",name:"sports-category",component:()=>Promise.all([t.e(161),t.e(945)]).then(t.bind(t,5945))},{path:"/category/thriller",name:"thriller-category",component:()=>Promise.all([t.e(161),t.e(362)]).then(t.bind(t,7362))},{path:"/category/western",name:"western-category",component:()=>Promise.all([t.e(161),t.e(437)]).then(t.bind(t,9437))}],d=(0,s.p7)({history:(0,s.PO)("/"),routes:m});var f=d;const p=e=>((0,o.dD)("data-v-551e2f46"),e=e(),(0,o.Cn)(),e),h={id:"categories-menu"},v=p((()=>(0,o._)("h2",null,"Categories:",-1)));function g(e,n,t,r,a,i){const c=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",h,[v,(0,o.Wm)(c,{class:"menu-link",to:{name:"action-category"}},{default:(0,o.w5)((()=>[(0,o.Uk)("Action")])),_:1}),(0,o.Wm)(c,{class:"menu-link",to:{name:"comedy-category"}},{default:(0,o.w5)((()=>[(0,o.Uk)("Comedy")])),_:1}),(0,o.Wm)(c,{class:"menu-link",to:{name:"crime-category"}},{default:(0,o.w5)((()=>[(0,o.Uk)("Crime")])),_:1}),(0,o.Wm)(c,{class:"menu-link",to:{name:"documentary-category"}},{default:(0,o.w5)((()=>[(0,o.Uk)("Documentary")])),_:1}),(0,o.Wm)(c,{class:"menu-link",to:{name:"drama-category"}},{default:(0,o.w5)((()=>[(0,o.Uk)("Drama")])),_:1}),(0,o.Wm)(c,{class:"menu-link",to:{name:"fantasy-category"}},{default:(0,o.w5)((()=>[(0,o.Uk)("Fantasy")])),_:1}),(0,o.Wm)(c,{class:"menu-link",to:{name:"horror-category"}},{default:(0,o.w5)((()=>[(0,o.Uk)("Horror")])),_:1}),(0,o.Wm)(c,{class:"menu-link",to:{name:"romance-category"}},{default:(0,o.w5)((()=>[(0,o.Uk)("Romance")])),_:1}),(0,o.Wm)(c,{class:"menu-link",to:{name:"sports-category"}},{default:(0,o.w5)((()=>[(0,o.Uk)("Sports")])),_:1}),(0,o.Wm)(c,{class:"menu-link",to:{name:"thriller-category"}},{default:(0,o.w5)((()=>[(0,o.Uk)("Thriller")])),_:1}),(0,o.Wm)(c,{class:"menu-link",to:{name:"western-category"}},{default:(0,o.w5)((()=>[(0,o.Uk)("Western")])),_:1})])}var y={name:"CategoriesMenu"};const b=(0,i.Z)(y,[["render",g],["__scopeId","data-v-551e2f46"]]);var w=b;const k=e=>((0,o.dD)("data-v-d832c402"),e=e(),(0,o.Cn)(),e),_={id:"footer"},P=k((()=>(0,o._)("h3",null,"Movie Review App",-1))),C=[P];function W(e,n,t,r,a,i){return(0,o.wg)(),(0,o.iD)("div",_,C)}var O={name:"PageFooter"};const U=(0,i.Z)(O,[["render",W],["__scopeId","data-v-d832c402"]]);var j=U;const A=(0,r.ri)(l).use(f);A.component("CategoriesMenu",w),A.component("PageFooter",j),A.mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={exports:{}};return e[r].call(a.exports,a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,a){if(!r){var i=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],a=e[s][2];for(var c=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](r[u])}))?r.splice(u--,1):(c=!1,a<i&&(i=a));if(c){e.splice(s--,1);var l=o();void 0!==l&&(n=l)}}return n}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[r,o,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{84:"ff8a6b7b",137:"47fa952f",144:"52af168c",161:"282a6671",176:"aa3b0bad",361:"7af9ea48",362:"c03a606a",363:"645c083d",414:"d4d7d1ba",436:"c7daf9e4",437:"f11c0ca4",569:"639032ee",663:"f6d79f52",773:"4df51b04",945:"4b96b913",949:"0898a631"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{84:"eb6a5075",137:"106553bd",144:"52098a67",176:"be139ba6",361:"4c1d086b",362:"9d9d772f",363:"0980a21a",414:"e0ee6e77",436:"8d19b151",437:"797f1381",569:"68f51948",663:"ff373c9e",773:"af980a18",945:"c7e085ff",949:"b39fbcdd"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="vue-node-reviews:";t.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var c,u;if(void 0!==a)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var m=l[s];if(m.getAttribute("src")==r||m.getAttribute("data-webpack")==n+a){c=m;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,t.nc&&c.setAttribute("nonce",t.nc),c.setAttribute("data-webpack",n+a),c.src=r),e[r]=[o];var d=function(n,t){c.onerror=c.onload=null,clearTimeout(f);var o=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(t)})),n)return n(t)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,r,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(t){if(a.onerror=a.onload=null,"load"===t.type)r();else{var i=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.href||n,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=c,a.parentNode&&a.parentNode.removeChild(a),o(u)}};return a.onerror=a.onload=i,a.href=n,t?t.parentNode.insertBefore(a,t.nextSibling):document.head.appendChild(a),a},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===n))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===n)return o}},r=function(r){return new Promise((function(o,a){var i=t.miniCssF(r),c=t.p+i;if(n(i,c))return o();e(r,c,null,o,a)}))},o={143:0};t.f.miniCss=function(e,n){var t={84:1,137:1,144:1,176:1,361:1,362:1,363:1,414:1,436:1,437:1,569:1,663:1,773:1,945:1,949:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=a);var i=t.p+t.u(n),c=new Error,u=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;c.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,o[1](c)}};t.l(i,u,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,a,i=r[0],c=r[1],u=r[2],l=0;if(i.some((function(n){return 0!==e[n]}))){for(o in c)t.o(c,o)&&(t.m[o]=c[o]);if(u)var s=u(t)}for(n&&n(r);l<i.length;l++)a=i[l],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(s)},r=self["webpackChunkvue_node_reviews"]=self["webpackChunkvue_node_reviews"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(8116)}));r=t.O(r)})();
//# sourceMappingURL=app.b21f35d3.js.map