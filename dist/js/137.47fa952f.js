"use strict";(self["webpackChunkvue_node_reviews"]=self["webpackChunkvue_node_reviews"]||[]).push([[137],{8409:function(e,t,s){var a=s(4161);t.Z={data(){return{reviewPosts:[],actionReviews:[],comedyReviews:[],crimeReviews:[],documentaryReviews:[],dramaReviews:[],fantasyReviews:[],horrorReviews:[],romanceReviews:[],sportsReviews:[],thrillerReviews:[],westernReviews:[]}},created(){a.Z.get("http://localhost:3000/all-reviews/categories/?genre=Action",{}).then((e=>{this.actionReviews=e.data})),a.Z.get("http://localhost:3000/all-reviews/categories/?genre=Comedy",{}).then((e=>{this.comedyReviews=e.data})),a.Z.get("http://localhost:3000/all-reviews/categories/?genre=Crime",{}).then((e=>{this.crimeReviews=e.data})),a.Z.get("http://localhost:3000/all-reviews/categories/?genre=Documentary",{}).then((e=>{this.documentaryReviews=e.data})),a.Z.get("http://localhost:3000/all-reviews/categories/?genre=Drama",{}).then((e=>{this.dramaReviews=e.data})),a.Z.get("http://localhost:3000/all-reviews/categories/?genre=Fantasy",{}).then((e=>{this.fantasyReviews=e.data})),a.Z.get("http://localhost:3000/all-reviews/categories/?genre=Horror",{}).then((e=>{this.horrorReviews=e.data})),a.Z.get("http://localhost:3000/all-reviews/categories/?genre=Romance",{}).then((e=>{this.romanceReviews=e.data})),a.Z.get("http://localhost:3000/all-reviews/categories/?genre=Sports",{}).then((e=>{this.sportsReviews=e.data})),a.Z.get("http://localhost:3000/all-reviews/categories/?genre=Thriller",{}).then((e=>{this.thrillerReviews=e.data})),a.Z.get("http://localhost:3000/all-reviews/categories/?genre=Western",{}).then((e=>{this.westernReviews=e.data})),a.Z.get("http://localhost:3000/all-reviews/"+this.id).then((e=>{this.reviewPosts=e.data}))},methods:{deleteReview:function(){a.Z.delete("http://localhost:3000/all-reviews/"+this.id).then((e=>console.log(e))).catch((e=>console.error(e)))}}}},7137:function(e,t,s){s.r(t),s.d(t,{default:function(){return g}});var a=s(3396),i=s(7139);const r={class:"fantasy-category"},o={id:"fantasy-list"},l={key:0},n={key:1};function h(e,t,s,h,w,c){const v=(0,a.up)("CategoriesMenu"),d=(0,a.up)("router-link"),g=(0,a.up)("PageFooter");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("div",o,[(0,a.Wm)(v),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.fantasyReviews,(e=>((0,a.wg)(),(0,a.iD)("div",{id:"review",key:e.id},[(0,a.Wm)(d,{id:"movie-title",to:{name:"reviewdetails",params:{id:e._id}}},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(e.title),1)])),_:2},1032,["to"]),(0,a._)("h2",null,(0,i.zw)(e.genre),1),e.body.length<300?((0,a.wg)(),(0,a.iD)("p",l,(0,i.zw)(e.body),1)):((0,a.wg)(),(0,a.iD)("p",n,(0,i.zw)(e.body.substring(0,300)+"..."),1)),(0,a._)("h3",null,(0,i.zw)(e.rating),1)])))),128))]),(0,a.Wm)(g)])}var w=s(8409),c={name:"FantasyView",mixins:[w.Z]},v=s(89);const d=(0,v.Z)(c,[["render",h],["__scopeId","data-v-2c9c2432"]]);var g=d}}]);
//# sourceMappingURL=137.47fa952f.js.map