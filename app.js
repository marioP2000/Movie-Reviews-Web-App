const express = require("express");
const mongoose = require("mongoose");
const reviewRoutes = require("./routes/reviewRoutes");
const path = __dirname + "/dist/";

// Express app
const app = express();

// Middleware & static files
app.use(express.static(path));
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
const dbURI = // DB CONNECTION
mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

// Routes
app.use(reviewRoutes);