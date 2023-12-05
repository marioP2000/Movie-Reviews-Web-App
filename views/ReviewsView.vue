<template>

  <div class="reviews">
    <ReviewsList />
    <PageFooter />
  </div>
  
</template>

<script>
  import ReviewsList from "@/frontend/components/ReviewsList.vue";

  export default {
    name: "ReviewsView",
    components: {
      ReviewsList,
    }
  }
</script>