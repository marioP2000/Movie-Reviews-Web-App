const Review = require("../models/review");

// Controller Actions

    // Get all reviews
    module.exports.allreviews_get = async (req, res) => {
        try {
            const allReviews = await Review.find();
            res.send(allReviews);
        }
        catch (err) {
            console.log(err);
        };
    };

    // Get filtered reviews by genre
    module.exports.reviewfilter_get = async (req, res) => {
        try {
            const filteredReviews = await Review.find({genre: req.query.genre});
            res.send(filteredReviews);
            
        }
        catch (err) {
            console.log(err);
        };
    };

    // Get individual review by ID
    module.exports.individualreview_get = async (req, res) => {
        try {
            const id = req.params.id;
            const individualReview = await Review.findById(id)
            res.send(individualReview);
        }
        catch (err) {
            console.log(err);
        };
    };

    // Post new review
    module.exports.newreview_post = async (req, res) => {
        try {
            const review = new Review(req.body);
            const savedReview = await review.save();
            res.redirect("/reviews");
        }
        catch (err) {
            console.log(err);
        };
    };

    // Delete individual review
    module.exports.deletereview_delete = async (req, res) => {
        try {
            const id = req.params.id;
            const deleteReview = await Review.findByIdAndDelete(id);
            res.redirect("/reviews");
        }
        catch (err) {
            console.log(err);
        };
    };