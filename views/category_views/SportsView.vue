<template>

    <div class="sports-category">

        <div id="sports-list">

            <!-- CATEGORIES -->
            <CategoriesMenu />

            <!-- Review -->
            <div 
            id="review" 
            v-for="sportsReview in sportsReviews" :key="sportsReview.id">

                <!-- Title -->
                <router-link 
                id="movie-title"
                :to="{ name: 'reviewdetails', params: { id: sportsReview._id } }">{{ sportsReview.title }}</router-link>

                <!-- Genre -->
                <h2>{{ sportsReview.genre }}</h2>

                <!-- Body + 300 character limit -->
                <p 
                v-if="sportsReview.body.length<300">{{ sportsReview.body }}</p>
                <p 
                v-else>{{ sportsReview.body.substring(0,300)+"..." }}</p>

                <!-- Rating -->
                <h3>{{ sportsReview.rating }}</h3>

            </div>

        </div>

        <PageFooter />

    </div>

</template>

<script>
    import ReviewData from "@/frontend/mixins/ReviewData.js";

    export default {
        name: "SportsView",
        mixins: [ReviewData],
    }
</script>

<style scoped lang="scss">
@import "@/frontend/assets/style.scss";
@import "@/frontend/assets/reviewsStyle.scss";

    #sports-list {
        @include reviews-list;
        min-height: 100vh;
    }
</style>