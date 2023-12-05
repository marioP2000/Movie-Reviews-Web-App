<template>

    <div class="horror-category">

        <div id="horror-list">

            <!-- CATEGORIES -->
            <CategoriesMenu />

            <!-- Review -->
            <div 
            id="review" 
            v-for="horrorReview in horrorReviews" :key="horrorReview.id">

                <!-- Title -->
                <router-link 
                id="movie-title"
                :to="{ name: 'reviewdetails', params: { id: horrorReview._id } }">{{ horrorReview.title }}</router-link>

                <!-- Genre -->
                <h2>{{ horrorReview.genre }}</h2>

                <!-- Body + 300 character limit -->
                <p 
                v-if="horrorReview.body.length<300">{{ horrorReview.body }}</p>
                <p 
                v-else>{{ horrorReview.body.substring(0,300)+"..." }}</p>

                <!-- Rating -->
                <h3>{{ horrorReview.rating }}</h3>

            </div>

        </div>

        <PageFooter />

    </div>

</template>

<script>
    import ReviewData from "@/frontend/mixins/ReviewData.js";

    export default {
        name: "HorrorView",
        mixins: [ReviewData],
    }
</script>

<style scoped lang="scss">
@import "@/frontend/assets/style.scss";
@import "@/frontend/assets/reviewsStyle.scss";

    #horror-list {
        @include reviews-list;
        min-height: 100vh;
    }

</style>