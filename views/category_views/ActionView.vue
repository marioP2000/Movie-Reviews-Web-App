<template>

    <div class="action-category">

        <div id="action-list">
        
            <!-- CATEGORIES -->
            <CategoriesMenu />

            <!-- Review -->
            <div 
            id="review" 
            v-for="actionReview in actionReviews" :key="actionReview.id">

                <!-- Title -->
                <router-link 
                id="movie-title"
                :to="{ name: 'reviewdetails', params: { id: actionReview._id } }">{{ actionReview.title }}</router-link>

                <!-- Genre -->
                <h2>{{ actionReview.genre }}</h2>

                <!-- Body + 300 character limit -->
                <p 
                v-if="actionReview.body.length<300">{{ actionReview.body }}</p>
                <p 
                v-else>{{ actionReview.body.substring(0,300)+"..." }}</p>

                <!-- Rating -->
                <h3>{{ actionReview.rating }}</h3>

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

    #action-list {
        @include reviews-list;
        min-height: 100vh;
    }
</style>