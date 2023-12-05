<template>

  <div class="create-review">

      <!-- Review container -->
      <div id="review">

        <!-- Delete Button -->
        <router-link to="/reviews" class="btn" @click="deleteReview()">Delete</router-link>

        <!-- Title -->
        <h1 id="movie-title">{{ reviewPosts.title }}</h1>

        <!-- Genre -->
        <h2>{{ reviewPosts.genre }}</h2>

        <!-- Body -->
        <pre style="white-space: pre-wrap"><p>{{ reviewPosts.body }}</p></pre>

        <!-- Rating -->
        <h3>{{ reviewPosts.rating }}</h3>

      </div>

      <PageFooter />
  
  </div>

</template>
  
<script>
  import ReviewData from "../mixins/ReviewData";

  export default {
    props: ["id"],
    mixins: [ReviewData]
  }
</script>
  
<style scoped lang="scss">
    @import "@/frontend/assets/style.scss";

  // Review container
  #review {
    @include flex-column;
    position: relative;
    background: transparent;
    padding: 2%;
    min-height: 95vh;
    transition: 0.2s;

    // Title
    #movie-title {
      @include default-font;
      align-self: flex-start;
      color: $primary-font-color;
      border-bottom: 1px solid $border-color;
      transition: 0.2s;
    }

    // Genre
    h2 {
      @include default-font;
      font-style: italic;
      color: $secondary-font-color;
      margin-top: 0.25%;
      transition: 0.2s;
    }

    // Body
    p {
      color: $secondary-font-color;
      margin: 5% 0;
    }

    pre {
      @include default-font;
      font-size: 1.1rem;
      width: 75%;
    }

    // Rating
    h3 {
      @include default-font;
      font-style: italic;
      font-size: 2rem;
      color: $primary-font-color;
    }

    // Delete button
    .btn {
      border: 1px solid $border-color;
      color: $accent-color;
      text-decoration: none;
      position: absolute;
      top: 4%;
      right: 2%;
      padding: 0.7%;
      border-radius: 6px;
      transition: 0.2s;

      &:hover {
        border: 1px solid $border-light-color;
      }
    }
  }

  // Media queries
  @media (max-width: 1250px) {

    // Review container
    #review {

      // Delete button
      .btn {
        padding: 1%;
      }
    }
  }

  @media (max-width: 900px) {

    // Review container
    #review {
      padding: 4%;

      // Body
      p {
        align-self: center;
      }

      pre {
        align-self: center;
        width: 100%;
      }

      // Genre
      h2 {
        position: relative;
      }

      // Rating
      h3 {
        align-self: center;
      }

      // Delete button
      .btn {
        position: relative;
        top: 0;
        right: 0;
        text-align: center;
        align-self: flex-end;
        padding: 2%;
      }
    }
  }
</style>