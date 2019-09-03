<template>
    <div v-bind:class="$style.container" />
</template>

<script>
    export default {

    };
</script>

<style lang="scss" module>
    .container {
        @apply relative w-full;
        background-color: #f7f7f7;
        min-height: 10rem;
        top: 24rem;
    }
</style>
