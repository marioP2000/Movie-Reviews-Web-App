import axios from "axios";
export default {
    data () {
        return {
            reviewPosts: [],
            actionReviews: [],
            comedyReviews: [],
            crimeReviews: [],
            documentaryReviews: [],
            dramaReviews: [],
            fantasyReviews: [],
            horrorReviews: [],
            romanceReviews: [],
            sportsReviews: [],
            thrillerReviews: [],
            westernReviews: [],
        }
    },
    // Category data
    created () {
        axios.get("http://localhost:3000/all-reviews/categories/?genre=Action", {})
            .then((response) => { 
                this.actionReviews = response.data; }),

        axios.get("http://localhost:3000/all-reviews/categories/?genre=Comedy", {})
            .then((response) => { 
                this.comedyReviews = response.data; }),

        axios.get("http://localhost:3000/all-reviews/categories/?genre=Crime", {})
            .then((response) => { 
                this.crimeReviews = response.data; }),

        axios.get("http://localhost:3000/all-reviews/categories/?genre=Documentary", {})
            .then((response) => { 
                this.documentaryReviews = response.data; }),

        axios.get("http://localhost:3000/all-reviews/categories/?genre=Drama", {})
            .then((response) => { 
                this.dramaReviews = response.data; }),

        axios.get("http://localhost:3000/all-reviews/categories/?genre=Fantasy", {})
            .then((response) => { 
                this.fantasyReviews = response.data; }),

        axios.get("http://localhost:3000/all-reviews/categories/?genre=Horror", {})
            .then((response) => { 
                this.horrorReviews = response.data; }),
        
        axios.get("http://localhost:3000/all-reviews/categories/?genre=Romance", {})
            .then((response) => { 
                this.romanceReviews = response.data; }),

        axios.get("http://localhost:3000/all-reviews/categories/?genre=Sports", {})
            .then((response) => { 
                this.sportsReviews = response.data; }),

        axios.get("http://localhost:3000/all-reviews/categories/?genre=Thriller", {})
            .then((response) => { 
                this.thrillerReviews = response.data; }),

        axios.get("http://localhost:3000/all-reviews/categories/?genre=Western", {})
            .then((response) => { 
                this.westernReviews = response.data; }),
        // Individual review data
        axios.get("http://localhost:3000/all-reviews/" + this.id)
            .then((response) => { 
                this.reviewPosts = response.data })
    },
    // Delete individual review
    methods: {
        deleteReview: function () {
          axios.delete("http://localhost:3000/all-reviews/" + this.id)
          .then((response) => console.log(response))
          .catch((err) => console.error(err));
        }
    }
};