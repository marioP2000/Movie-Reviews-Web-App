<template>

    <div class="fantasy-category">
        
        <div id="fantasy-list">

            <!-- CATEGORIES -->
            <CategoriesMenu />

            <!-- Review -->
            <div 
            id="review" 
            v-for="fantasyReview in fantasyReviews" :key="fantasyReview.id">

                <!-- Title -->
                <router-link 
                id="movie-title"
                :to="{ name: 'reviewdetails', params: { id: fantasyReview._id } }">{{ fantasyReview.title }}</router-link>

                <!-- Genre -->
                <h2>{{ fantasyReview.genre }}</h2>

                <!-- Body + 300 character limit -->
                <p 
                v-if="fantasyReview.body.length<300">{{ fantasyReview.body }}</p>
                <p 
                v-else>{{ fantasyReview.body.substring(0,300)+"..." }}</p>

                <!-- Rating -->
                <h3>{{ fantasyReview.rating }}</h3>

            </div>

        </div>

        <PageFooter />

    </div>

</template>

<script>
    import ReviewData from "@/frontend/mixins/ReviewData.js";

    export default {
        name: "FantasyView",
        mixins: [ReviewData],
    }
</script>

<style scoped lang="scss">
@import "@/frontend/assets/style.scss";
@import "@/frontend/assets/reviewsStyle.scss";

    #fantasy-list {
        @include reviews-list;
        min-height: 100vh;
    }
    
</style>