"use strict";(self["webpackChunkvue_node_reviews"]=self["webpackChunkvue_node_reviews"]||[]).push([[945],{8409:function(e,t,s){var i=s(4161);t.Z={data(){return{reviewPosts:[],actionReviews:[],comedyReviews:[],crimeReviews:[],documentaryReviews:[],dramaReviews:[],fantasyReviews:[],horrorReviews:[],romanceReviews:[],sportsReviews:[],thrillerReviews:[],westernReviews:[]}},created(){i.Z.get("http://localhost:3000/all-reviews/categories/?genre=Action",{}).then((e=>{this.actionReviews=e.data})),i.Z.get("http://localhost:3000/all-reviews/categories/?genre=Comedy",{}).then((e=>{this.comedyReviews=e.data})),i.Z.get("http://localhost:3000/all-reviews/categories/?genre=Crime",{}).then((e=>{this.crimeReviews=e.data})),i.Z.get("http://localhost:3000/all-reviews/categories/?genre=Documentary",{}).then((e=>{this.documentaryReviews=e.data})),i.Z.get("http://localhost:3000/all-reviews/categories/?genre=Drama",{}).then((e=>{this.dramaReviews=e.data})),i.Z.get("http://localhost:3000/all-reviews/categories/?genre=Fantasy",{}).then((e=>{this.fantasyReviews=e.data})),i.Z.get("http://localhost:3000/all-reviews/categories/?genre=Horror",{}).then((e=>{this.horrorReviews=e.data})),i.Z.get("http://localhost:3000/all-reviews/categories/?genre=Romance",{}).then((e=>{this.romanceReviews=e.data})),i.Z.get("http://localhost:3000/all-reviews/categories/?genre=Sports",{}).then((e=>{this.sportsReviews=e.data})),i.Z.get("http://localhost:3000/all-reviews/categories/?genre=Thriller",{}).then((e=>{this.thrillerReviews=e.data})),i.Z.get("http://localhost:3000/all-reviews/categories/?genre=Western",{}).then((e=>{this.westernReviews=e.data})),i.Z.get("http://localhost:3000/all-reviews/"+this.id).then((e=>{this.reviewPosts=e.data}))},methods:{deleteReview:function(){i.Z.delete("http://localhost:3000/all-reviews/"+this.id).then((e=>console.log(e))).catch((e=>console.error(e)))}}}},5945:function(e,t,s){s.r(t),s.d(t,{default:function(){return g}});var i=s(3396),a=s(7139);const r={class:"sports-category"},o={id:"sports-list"},l={key:0},n={key:1};function h(e,t,s,h,w,c){const v=(0,i.up)("CategoriesMenu"),d=(0,i.up)("router-link"),g=(0,i.up)("PageFooter");return(0,i.wg)(),(0,i.iD)("div",r,[(0,i._)("div",o,[(0,i.Wm)(v),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.sportsReviews,(e=>((0,i.wg)(),(0,i.iD)("div",{id:"review",key:e.id},[(0,i.Wm)(d,{id:"movie-title",to:{name:"reviewdetails",params:{id:e._id}}},{default:(0,i.w5)((()=>[(0,i.Uk)((0,a.zw)(e.title),1)])),_:2},1032,["to"]),(0,i._)("h2",null,(0,a.zw)(e.genre),1),e.body.length<300?((0,i.wg)(),(0,i.iD)("p",l,(0,a.zw)(e.body),1)):((0,i.wg)(),(0,i.iD)("p",n,(0,a.zw)(e.body.substring(0,300)+"..."),1)),(0,i._)("h3",null,(0,a.zw)(e.rating),1)])))),128))]),(0,i.Wm)(g)])}var w=s(8409),c={name:"SportsView",mixins:[w.Z]},v=s(89);const d=(0,v.Z)(c,[["render",h],["__scopeId","data-v-7178a41a"]]);var g=d}}]);
//# sourceMappingURL=945.4b96b913.js.map