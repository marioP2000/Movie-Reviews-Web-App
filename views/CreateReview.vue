<template>
    <div class="create-review">
        <ReviewForm />
        <PageFooter />
    </div>
</template>

<script>
    import ReviewForm from '@/frontend/components/ReviewForm.vue';

    export default {
        name: "CreateReview",
        components: {
            ReviewForm,
        }
    }
</script>