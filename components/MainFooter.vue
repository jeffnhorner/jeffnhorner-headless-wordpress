<template>
    <div v-bind:class="$style.container" />
</template>

<script>
    export default {

    };
</script>

<style lang="scss" module>
    .container {
        @apply mt-16 relative w-full;
        background-color: #f7f7f7;
        min-height: 10rem;
    }
</style>
