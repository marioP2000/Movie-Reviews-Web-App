<template>
    <div id="footer">
        <h3>Movie Review App</h3>
    </div>
</template>

<script>
    export default {
        name: "PageFooter"
    }
</script>

<style scoped lang="scss">
    @import "../assets/style.scss";

    #footer {
        padding: 2%;
        border-top: 1px solid $border-color;
    }

    h3 {
        @include default-font;
        color: $accent-color;
        text-align: center;
    }
</style>