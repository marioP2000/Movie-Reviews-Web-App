<template>

    <div class="western-category">

        <div id="western-list">

            <!-- CATEGORIES -->
            <CategoriesMenu />

            <!-- Review -->
            <div 
            id="review" 
            v-for="westernReview in westernReviews" :key="westernReview.id">

                <!-- Title -->
                <router-link 
                id="movie-title"
                :to="{ name: 'reviewdetails', params: { id: westernReview._id } }">{{ westernReview.title }}</router-link>

                <!-- Genre -->
                <h2>{{ westernReview.genre }}</h2>

                <!-- Body + 300 character limit -->
                <p 
                v-if="westernReview.body.length<300">{{ westernReview.body }}</p>
                <p 
                v-else>{{ westernReview.body.substring(0,300)+"..." }}</p>

                <!-- Rating -->
                <h3>{{ westernReview.rating }}</h3>

            </div>

        </div>

        <PageFooter />

    </div>

</template>

<script>
    import ReviewData from "@/frontend/mixins/ReviewData.js";

    export default {
        name: "WesternView",
        mixins: [ReviewData],
    }
</script>

<style scoped lang="scss">
@import "@/frontend/assets/style.scss";
@import "@/frontend/assets/reviewsStyle.scss";

    #western-list {
        @include reviews-list;
        min-height: 100vh;
    }
</style>