<template>
    <div id="categories-menu">
        <h2>Categories:</h2>
        <router-link class="menu-link" :to="{ name: 'action-category' }">Action</router-link>
        <router-link class="menu-link" :to="{ name: 'comedy-category' }">Comedy</router-link>
        <router-link class="menu-link" :to="{ name: 'crime-category' }">Crime</router-link>
        <router-link class="menu-link" :to="{ name: 'documentary-category' }">Documentary</router-link>
        <router-link class="menu-link" :to="{ name: 'drama-category' }">Drama</router-link>
        <router-link class="menu-link" :to="{ name: 'fantasy-category' }">Fantasy</router-link>
        <router-link class="menu-link" :to="{ name: 'horror-category' }">Horror</router-link>
        <router-link class="menu-link" :to="{ name: 'romance-category' }">Romance</router-link>
        <router-link class="menu-link" :to="{ name: 'sports-category' }">Sports</router-link>
        <router-link class="menu-link" :to="{ name: 'thriller-category' }">Thriller</router-link>
        <router-link class="menu-link" :to="{ name: 'western-category' }">Western</router-link>
    </div>
</template>

<script>
    export default {
        name: "CategoriesMenu"
    }
</script>

<style scoped lang="scss">
    @import "@/frontend/assets/style.scss";
        #categories-menu {
            @include flex-column;
            position: absolute;
            top: 7%;
            right: 0;
            border: 1px solid $border-color;
            border-bottom-left-radius: 6px;
            border-top: none;
            border-right: none;
            padding: 1%;
            width: 20%;
        
        a {
            transition: 0.2s;
            text-underline-offset: 4px;
            text-decoration: underline 1px transparent;
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
        }
        
        .menu-link {
          @include default-font;
          color: $secondary-font-color;
          margin: 5% 2.5%;
        }
        
        h2 {
          @include default-font;
          color: $primary-font-color;
        }

    @media (max-width: 1250px) {
      .menu-link {
          margin-top: 15%;
        }
    }


    @media (max-width: 900px) {
      #categories-menu {
            position: relative;
            flex-direction: row;
            justify-content: space-around;
            flex-wrap: wrap;
            width: 100%;
            padding: 0 1%;
            border-radius: 0;
            border: none;
            border-bottom: 1px solid $border-color;
        }

        h2 {
          display: none;
        }

        .menu-link {
          margin: 2.5%;
        }
    }
</style>