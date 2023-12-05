<template>

    <div id="header">

        <!-- Title -->
        <div id="heading-container">
            <h1 class="header-heading">Write Reviews</h1>
            <h1 class="header-heading" id="lower-heading">Filter Reviews:</h1>
        </div>

        <!-- Example review -->
        <div id="review">

            <a id="movie-title">The Hateful Eight</a>

            <h2>Western</h2>

            <p>The Hateful Eight is a 2015 American Western mystery thriller film written and directed by Quentin Tarantino. It stars Samuel L. Jackson, Kurt Russell, Jennifer Jason Leigh, Walton Goggins, Demián Bichir, Tim Roth, Michael Madsen and Bruce Dern, as eight dubious strangers who seek refuge from a blizzard in a stagecoach stopover some time after the American Civil War...</p>

            <h3>10/10</h3>

        </div>

        <!-- Description -->
        <h2 id="description">Write, rate, sort and filter your reviews</h2>

        <router-link class="btn" :to="{ name: 'create-review' }">Get started</router-link>

    </div>
    
</template>

<script>
    export default {
        name: "HomeHeader",
    }
</script>

<style scoped lang="scss">
  @import "../assets/style.scss";

  #header {
    @include flex-column-center;
    justify-content: flex-start;
    padding: 10%;
    min-height: 100vh;
  }

  // Title
  #heading-container {
    @include flex-column-center;
    width: 100%;
    height: 100%;
  }

  .header-heading {
    margin: 0;
    font-size: 3rem;
  }

  #lower-heading {
    color: $accent-color;
    margin-left: 12%;
  }

  .btn {
    @include default-font;
    background: transparent;
    border: 1px solid $border-color;
    border-radius: 6px;
    color: $accent-color;
    transition: 0.1s;
    padding: 0.7%;
    cursor: pointer;
    font-size: 1.1rem;
    align-self: center;
    text-decoration: none;

    &:hover {
        border: 1px solid $border-light-color;
    }
  }

  //Review Example
  h1 {
    @include default-font;
    color: $primary-font-color;
    margin-top: 2%;
    margin-left: 2%;
  }

  // Review Container
  #review {
    @include flex-column-center;
    @include default-font;
    position: relative;
    margin: 2% 0;
    padding: 2%;
    width: 75%;
    border-radius: 6px;
    border: 1px solid $border-color;
    transition: 0.2s;

    a {
        text-decoration: none;
    }

    // Title
    #movie-title {
        font-size: 2rem;
        color: $primary-font-color;
        border-bottom: 1px solid $border-color;
        transition: 0.2s;
    }

    // Genre
    h2 {
        @include default-font;
        color: $secondary-font-color;
        position: absolute;
        top: 10%;
        left: 2%;
        border-bottom: 1px solid $border-color;
        transition: 0.2s;
    }

    // Body
    p {
        @include default-font;
        font-size: 1.1rem;
        color: $secondary-font-color;
        margin: 5% 0;
    }

    // Rating
    h3 {
        font-style: italic;
        color: $primary-font-color;
        text-align: center;
        border-bottom: 1px solid $border-color;
        transition: 0.2s;
    }
  }

  #description {
    @include default-font;
    color: $secondary-font-color;
    margin-bottom: 2%;
    font-size: 2rem;
  }

  @media (max-width: 1200px) {
    .btn {
        padding: 1.7%;
    }
  }

  @media (max-width: 900px) {
    #header {
        padding: 0;
    }

    // Title
    #heading-container {
        padding: 10% 0;
    }

    .header-heading {
        font-size: 2.4rem;
    }

    #lower-heading {
        color: $accent-color;
        margin: 0;
    }

    // Example review
    #review {
        width: 100%;
        border-radius: 0;
        border-right: none;
        border-left: none;
        border-top: none;
        margin: 0;
        padding: 2% 5%;

        // Genre
        h2 {
            position: relative;
            margin-top: 2.5%;
        }

        // Rating
        h3 {
            margin-bottom: 3%;
        }
    }

    #description {
        padding-top: 5%;
        padding-left: 5%;
        padding-right: 5%;
        font-size: 1.1rem;
    }

    .btn {
        padding: 2%;
        margin-top: 5%;
    }
  }
</style>