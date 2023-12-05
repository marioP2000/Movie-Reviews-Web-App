<template>

    <div class="drama-category">

        <div id="drama-list">

            <!-- CATEGORIES -->
            <CategoriesMenu />

            <!-- Review -->
            <div 
            id="review" 
            v-for="dramaReview in dramaReviews" :key="dramaReview.id">

                <!-- Title -->
                <router-link 
                id="movie-title"
                :to="{ name: 'reviewdetails', params: { id: dramaReview._id } }">{{ dramaReview.title }}</router-link>

                <!-- Genre -->
                <h2>{{ dramaReview.genre }}</h2>

                <!-- Body + 300 character limit -->
                <p 
                v-if="dramaReview.body.length<300">{{ dramaReview.body }}</p>
                <p 
                v-else>{{ dramaReview.body.substring(0,300)+"..." }}</p>

                <!-- Rating -->
                <h3>{{ dramaReview.rating }}</h3>

            </div>

        </div>

        <PageFooter />

    </div>

</template>

<script>
    import ReviewData from "@/frontend/mixins/ReviewData.js";

    export default {
        name: "DramaView",
        mixins: [ReviewData],
    }
</script>

<style scoped lang="scss">
@import "@/frontend/assets/style.scss";
@import "@/frontend/assets/reviewsStyle.scss";

    #drama-list {
        @include reviews-list;
        min-height: 100vh;
    }
</style>