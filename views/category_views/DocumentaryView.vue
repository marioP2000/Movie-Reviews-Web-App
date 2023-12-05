<template>

    <div class="documentary-category">

        <div id="documentary-list">

            <!-- CATEGORIES -->
            <CategoriesMenu />

            <!-- Review -->
            <div 
            id="review" 
            v-for="documentaryReview in documentaryReviews" :key="documentaryReview.id">

                <!-- Title -->
                <router-link 
                id="movie-title"
                :to="{ name: 'reviewdetails', params: { id: documentaryReview._id } }">{{ documentaryReview.title }}</router-link>

                <!-- Genre -->
                <h2>{{ documentaryReview.genre }}</h2>

                <!-- Body + 300 character limit -->
                <p 
                v-if="documentaryReview.body.length<300">{{ documentaryReview.body }}</p>
                <p 
                v-else>{{ documentaryReview.body.substring(0,300)+"..." }}</p>

                <!-- Rating -->
                <h3>{{ documentaryReview.rating }}</h3>

            </div>

        </div>

        <PageFooter />

    </div>

</template>

<script>
    import ReviewData from "@/frontend/mixins/ReviewData.js";

    export default {
        name: "DocumentaryView",
        mixins: [ReviewData],
    }
</script>

<style scoped lang="scss">
@import "@/frontend/assets/style.scss";
@import "@/frontend/assets/reviewsStyle.scss";

    #documentary-list {
        @include reviews-list;
        min-height: 100vh;
    }
</style>