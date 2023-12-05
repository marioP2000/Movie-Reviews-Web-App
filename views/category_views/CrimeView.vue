<template>

    <div class="crime-category">

        <div id="crime-list">

            <!-- CATEGORIES -->
            <CategoriesMenu />

            <!-- Review -->
            <div 
            id="review" 
            v-for="crimeReview in crimeReviews" :key="crimeReview.id">

                <!-- Title -->
                <router-link 
                id="movie-title"
                :to="{ name: 'reviewdetails', params: { id: crimeReview._id } }">{{ crimeReview.title }}</router-link>

                <!-- Genre -->
                <h2>{{ crimeReview.genre }}</h2>

                <!-- Body + 300 character limit -->
                <p 
                v-if="crimeReview.body.length<300">{{ crimeReview.body }}</p>
                <p 
                v-else>{{ crimeReview.body.substring(0,300)+"..." }}</p>

                <!-- Rating -->
                <h3>{{ crimeReview.rating }}</h3>

            </div>

        </div>

        <PageFooter />
        
    </div>

</template>

<script>
    import ReviewData from "@/frontend/mixins/ReviewData.js";

    export default {
        name: "CrimeView",
        mixins: [ReviewData],
    }
</script>

<style scoped lang="scss">
@import "@/frontend/assets/style.scss";
@import "@/frontend/assets/reviewsStyle.scss";

    #crime-list {
        @include reviews-list;
        min-height: 100vh;
    }
</style>