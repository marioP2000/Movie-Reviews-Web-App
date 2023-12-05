<template>

    <div class="romance-category">

        <div id="romance-list">

            <!-- CATEGORIES -->
            <CategoriesMenu />

            <!-- Review -->
            <div 
            id="review" 
            v-for="romanceReview in romanceReviews" :key="romanceReview.id">

                <!-- Title -->
                <router-link 
                id="movie-title"
                :to="{ name: 'reviewdetails', params: { id: romanceReview._id } }">{{ romanceReview.title }}</router-link>

                <!-- Genre -->
                <h2>{{ romanceReview.genre }}</h2>

                <!-- Body + 300 character limit -->
                <p 
                v-if="romanceReview.body.length<300">{{ romanceReview.body }}</p>
                <p 
                v-else>{{ romanceReview.body.substring(0,300)+"..." }}</p>

                <!-- Rating -->
                <h3>{{ romanceReview.rating }}</h3>

            </div>

        </div>

        <PageFooter />

    </div>

</template>

<script>
    import ReviewData from "@/frontend/mixins/ReviewData.js";

    export default {
        name: "RomanceView",
        mixins: [ReviewData],
    }
</script>

<style scoped lang="scss">
@import "@/frontend/assets/style.scss";
@import "@/frontend/assets/reviewsStyle.scss";

    #romance-list {
        @include reviews-list;
        min-height: 100vh;
    }

</style>