<template>
    <div v-bind:class="$style.container">
        <div v-bind:class="$style.wrapper">
            <h1 v-bind:class="$style.headline">
                create design build
            </h1>
            <span v-bind:class="$style.subHeadlinesWrapper">
                <p>experiences</p>
                <p>websites</p>
                <p>web apps</p>
            </span>
            <VBtn
                color="#fff"
                depressed
                nuxt
                outlined
                tile
                to="/contact"
                x-large
                v-bind:class="$style.calltoAction"
            >
                Let's Build
            </VBtn>
        </div>
        <div v-bind:class="$style.skewedBox" />
    </div>
</template>

<script>
    export default {};
</script>

<style lang="scss" module>
    .container {
        @apply flex items-center w-full z-10;
        height: 85vh;
    }

    .skewedBox {
        @apply absolute h-full -mt-40 w-full;
        background: #34495e;
        background-color: #34495e;
        transform: skew(0deg, 5deg);
        z-index: -1;
    }

    .wrapper {
        @apply flex flex-col items-end justify-around px-8 mx-auto w-full;
        min-height: 20rem;
        max-width: 100rem;
    }

    .headline {
        @apply font-black leading-none uppercase;
        color: #fff;
        font-size: 4.5rem;
    }

    .subHeadlinesWrapper {
        @apply font-thin mb-1 text-xl text-right;
        color: #fff;

        :first-child {
            @apply font-medium;
        }
    }

    .calltoAction {
        @apply text-xl lowercase font-bold;

        &:global(.v-btn:not(.v-btn--round).v-size--x-large) {
            @apply p-8;
        }
    }
</style>
