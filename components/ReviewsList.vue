<template>

    <div id="all-reviews-page">

        <!-- CATEGORIES -->
        <CategoriesMenu />

        <input id="search-bar" type="text" placeholder="Search..." v-model="search">

        <!-- REVIEW LIST -->
        <div 
        id="review" 
        v-for="reviewPost in filteredPosts" :key="reviewPost.id">

            <!-- Title -->
            <router-link 
            id="movie-title" 
            :to="{ name: 'reviewdetails', params: { id: reviewPost._id } }">{{ reviewPost.title }}</router-link>

            <!-- Genre -->
            <h2>{{ reviewPost.genre }}</h2>

            <!-- Body + 300 character limit -->
            <p 
            v-if="reviewPost.body.length<300">{{ reviewPost.body }}</p>
            <p 
            v-else>{{ reviewPost.body.substring(0,300)+"..." }}</p>

            <!-- Rating -->
            <h3>{{ reviewPost.rating }}</h3>

        </div>

    </div>



</template>

<script>
    import axios from "axios";

    export default {
        name: "HomeHeader",
        data () {
            return {
                reviewPosts: [],
                search: ""
            }
        },
        created () {
            axios.get("http://localhost:3000/all-reviews", {})
                .then((response) => { 
                    this.reviewPosts = response.data; })
        },
        computed: {
            filteredPosts() {
                return this.reviewPosts.filter(reviewPost => reviewPost.title.toLowerCase().includes(this.search.toLowerCase()));
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/style.scss";
    @import "../assets/reviewsStyle.scss";

    #all-reviews-page {
        @include flex-column-center;
        @include reviews-list;
        justify-content: flex-start;
        min-height: 100vh;
    }

    #search-bar {
        @include default-font;
        color: $secondary-font-color;
        font-size: 1.1rem;
        border: 1px solid $border-color;
        border-radius: 6px;
        padding: 0.25%;
        align-self: flex-start;
        margin-top: 2%;
        margin-left: 2%;
        background: #1e293b;

        &:focus {
            border: 1px solid $accent-color;
            outline: none;
        }
    }

    // Media Queries
    @media (max-width: 900px) {
        #search-bar {
            padding: 1.5%;
            margin-top: 4%;
            margin-left: 4%;
        }
    }
</style>