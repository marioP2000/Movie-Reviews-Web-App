<template>

    <div class="comedy-category">

        <div id="comedy-list">

            <!-- CATEGORIES -->
            <CategoriesMenu />

            <!-- Review -->
            <div 
            id="review" 
            v-for="comedyReview in comedyReviews" :key="comedyReview.id">

                <!-- Title -->
                <router-link 
                id="movie-title"
                :to="{ name: 'reviewdetails', params: { id: comedyReview._id } }">{{ comedyReview.title }}</router-link>

                <!-- Genre -->
                <h2>{{ comedyReview.genre }}</h2>

                <!-- Body + 300 character limit -->
                <p 
                v-if="comedyReview.body.length<300">{{ comedyReview.body }}</p>
                <p 
                v-else>{{ comedyReview.body.substring(0,300)+"..." }}</p>

                <!-- Rating -->
                <h3>{{ comedyReview.rating }}</h3>

            </div>

        </div>

        <PageFooter />
        
    </div>

</template>

<script>
    import ReviewData from "@/frontend/mixins/ReviewData.js";

    export default {
        name: "ComedyView",
        mixins: [ReviewData],
    }
</script>

<style scoped lang="scss">
@import "@/frontend/assets/style.scss";
@import "@/frontend/assets/reviewsStyle.scss";

    #comedy-list {
        @include reviews-list;
        min-height: 100vh;
    }
</style>