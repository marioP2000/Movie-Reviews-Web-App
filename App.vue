<template>
  
  <!-- Navbar -->
  <nav>
    <router-link class="nav-link" to="/">Home</router-link>
    <router-link class="nav-link" id="review-link" :to="{ name: 'create-review' }">Write review</router-link>
    <router-link class="nav-link" :to="{ name: 'reviews' }">Your Reviews</router-link>
  </nav>

  <!-- Route Transitions -->
  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>

</template>

<style lang="scss">
  @import "./frontend/assets/style.scss";

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background: linear-gradient(45deg, #0f172a, #1e293b);
    background-attachment: fixed;
  }

  nav {
    @include flex-row-center;
    justify-content: flex-start;
    padding: 1.5%;
    height: 7vh;
    background: transparent;
    border-bottom: 1px solid #334155;

    a {
      @include default-font;
      color: $primary-font-color;
      font-size: 1.1rem;
      text-underline-offset: 4px;
      text-decoration: underline 1px solid transparent;
      transition: 0.2s;

      &.router-link-exact-active {
        color: $accent-color;
        text-decoration: underline 1px solid $accent-color;
      }

      &:hover {
        color: $accent-color;
        text-decoration: underline 1px solid $accent-color;
      }
    }

    .nav-link {
      margin: 0 1.5%;
    }
  }

  // Media Queries
  @media (max-width: 1250px) {
    nav {
      padding: 2.5%;
    }
  }

  @media (max-width: 900px) {
    nav {
      justify-content: space-around;
      padding: 4%;
    }
  }

  // Route Transitions
  .route-enter-from {
    opacity: 0;
  }

  .route-enter-active {
    transition: all 0.3s ease-out; 
  }

  .route-leave-to {
    opacity: 0;
  }

  .route-leave-active {
    transition: all 0.3s ease-in; 
  }
</style>
