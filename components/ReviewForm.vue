<template>
    <div id="reviews-page">

        <!-- Review form -->
        <form action="http://localhost:3000/all-reviews" method="POST">

            <!-- Title -->
            <label for="title">Review Title:</label>
            <input type="text" id="title" name="title" required>

            <!-- Genre -->
            <label for="snippet">Genre:</label>
            <select  type="text" id="genre" name="genre" required>
                <option value="Action">Action</option>
                <option value="Comedy">Comedy</option>
                <option value="Crime">Crime</option>
                <option value="Documentary">Documentary</option>
                <option value="Drama">Drama</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Horror">Horror</option>
                <option value="Romance">Romance</option>
                <option value="Science Fiction">Science Fiction</option>
                <option value="Sports">Sports</option>
                <option value="Thriller">Thriller</option>
                <option value="Western">Western</option>
            </select>

            <!-- Body -->
            <label for="body">Body:</label>
            <textarea id="body" required name="body" rows="12"></textarea>

            <!-- Rating -->
            <label for="rating">Rating:</label>
            <select type="text" id="rating" name="rating" required>
                <option value="0/10">0/10</option>
                <option value="1/10">1/10</option>
                <option value="2/10">2/10</option>
                <option value="3/10">3/10</option>
                <option value="4/10">4/10</option>
                <option value="5/10">5/10</option>
                <option value="6/10">6/10</option>
                <option value="7/10">7/10</option>
                <option value="8/10">8/10</option>
                <option value="9/10">9/10</option>
                <option value="10/10">10/10</option>
            </select>

        <button>Submit</button>

        </form>
    </div>
</template>

<script>
    export default {
        name: "ReviewForm"
    }
</script>

<style scoped lang="scss">
  @import "../assets/style.scss";

    #reviews-page {
        @include flex-column-center;
        padding: 2%;
    }

    form {
        @include flex-column;
        align-items: flex-start;
        justify-content: space-around;
        color: $primary-font-color;
        margin: 2%;
        padding: 2%;
        border: 1px solid $border-color;
        border-radius: 6px;
        width: 100%;
        min-height: 100vh;
    }

    label {
        font-size: 1.4rem;
    }

    // Title
    input {
        @include default-font;
        font-size: 1.1rem;
        color: $secondary-font-color;
        background: #1e293b;
        border: 1px solid $border-color;
        border-radius: 6px;
        padding: 0.5%;
        width: 75%;
        margin: 1.5% 0;

        &:focus {
            border: 1px solid $accent-color;
            outline: none;
        }
    }

    // Body
    textarea {
        @include default-font;
        font-size: 1.1rem;
        color: $secondary-font-color;
        background: #1e293b;
        border: 1px solid $border-color;
        border-radius: 6px;
        padding: 1%;
        width: 100%;
        margin: 1.5% 0;

        &:focus {
            border: 1px solid $accent-color;
            outline: none;
        }
    }

    button {
        @include default-font;
        background: transparent;
        border: 1px solid $border-color;
        border-radius: 6px;
        color: $accent-color;
        transition: 0.1s;
        padding: 1%;
        cursor: pointer;
        font-size: 1.1rem;
        align-self: center;

        &:hover {
            border: 1px solid $border-light-color;
        }
    }

    // Genre & Rating
    select {
        @include default-font;
        background: #1e293b;
        border: 1px solid $border-color;
        border-radius: 6px;
        padding: 0.5%;
        color: $secondary-font-color;
        font-size: 1.1rem;
        margin: 1.5% 0;

        &:focus {
            border: 1px solid $accent-color;
            outline: none;
        }
  }

  // Media queries
  @media (max-width: 900px) {
    form {
        border: none;
    }

    button {
        padding: 2%;
    }

    // Title
    input {
        padding: 1%;
        margin: 0;
    }

    // Genre & Rating
    select {
        padding: 1%;
        margin: 0;
    }

    // Body
    textarea {
        margin: 0;
    }
  }
</style>