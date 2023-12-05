<template>
  <div class="home">
    <HomeHeader />
    <PageFooter />
  </div>
</template>

<script>
  import HomeHeader from "@/frontend/components/HomeHeader.vue";


export default {

  name: 'HomeView',
  components: {
    HomeHeader,
  }
}
</script>