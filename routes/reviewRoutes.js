const { Router } = require("express");
const reviewController = require("../controllers/reviewController");
const path = require('path');
const distPath = path.join(__dirname, "../dist/index.html");

const router = Router();

// API routes
router.get("/all-reviews", reviewController.allreviews_get);

router.get("/all-reviews/categories", reviewController.reviewfilter_get);

router.get("/all-reviews/:id", reviewController.individualreview_get);

router.post("/all-reviews", reviewController.newreview_post);

router.delete("/all-reviews/:id", reviewController.deletereview_delete);

// Regular routes
router.get("/", function (req, res) {
    res.sendFile(distPath);
});

router.get("/reviews", function (req, res) {
    res.sendFile(distPath);
});

router.get("/create-review", function (req, res) {
    res.sendFile(distPath);
});

// Category routes
router.get("/category/action", function (req, res) {
    res.sendFile(distPath);
});

router.get("/category/comedy", function (req, res) {
    res.sendFile(distPath);
});

router.get("/category/crime", function (req, res) {
    res.sendFile(distPath);
});

router.get("/category/documentary", function (req, res) {
    res.sendFile(distPath);
});

router.get("/category/drama", function (req, res) {
    res.sendFile(distPath);
});

router.get("/category/fantasy", function (req, res) {
    res.sendFile(distPath);
});

router.get("/category/horror", function (req, res) {
    res.sendFile(distPath);
});

router.get("/category/romance", function (req, res) {
    res.sendFile(distPath);
});

router.get("/category/sports", function (req, res) {
    res.sendFile(distPath);
});

router.get("/category/thriller", function (req, res) {
    res.sendFile(distPath);
});

router.get("/category/western", function (req, res) {
    res.sendFile(distPath);
});

router.get("/reviews/:id", function (req, res) {
    res.sendFile(distPath);
});

module.exports = router;