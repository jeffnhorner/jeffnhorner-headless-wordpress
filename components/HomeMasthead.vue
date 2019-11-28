<template>
    <div v-bind:class="$style.container">
        <h1>Test</h1>
        <div v-bind:class="$style.skewedBox" />
    </div>
</template>

<script>
    export default {

    };
</script>

<style lang="scss" module>
    .container {
        @apply flex items-center w-full z-10;
        height: 100vh;
    }

    .skewedBox {
        @apply absolute -mt-40 w-full;
        height: 85%;
        background: #34495E;
        background-color: #34495E;
        transform: skew(0deg, 5deg);
        z-index: -1;
    }
</style>
