<template>

    <div class="thriller-category">

        <div id="thriller-list">

            <!-- CATEGORIES -->
            <CategoriesMenu />

            <!-- Review -->
            <div 
            id="review" 
            v-for="thrillerReview in thrillerReviews" :key="thrillerReview.id">

                <!-- Title -->
                <router-link 
                id="movie-title"
                :to="{ name: 'reviewdetails', params: { id: thrillerReview._id } }">{{ thrillerReview.title }}</router-link>

                <!-- Genre -->
                <h2>{{ thrillerReview.genre }}</h2>

                <!-- Body + 300 character limit -->
                <p 
                v-if="thrillerReview.body.length<300">{{ thrillerReview.body }}</p>
                <p 
                v-else>{{ thrillerReview.body.substring(0,300)+"..." }}</p>

                <!-- Rating -->
                <h3>{{ thrillerReview.rating }}</h3>

            </div>

        </div>

        <PageFooter />

    </div>

</template>

<script>
    import ReviewData from "@/frontend/mixins/ReviewData.js";

    export default {
        name: "ActionView",
        mixins: [ReviewData],
    }
</script>

<style scoped lang="scss">
@import "@/frontend/assets/style.scss";
@import "@/frontend/assets/reviewsStyle.scss";

    #thriller-list {
        @include reviews-list;
        min-height: 100vh;
    }
</style>