<template>
    <div v-bind:class="$style.container">
        <div v-bind:class="$style.wrapper">
            <h1 v-bind:class="$style.headline">
                CREATE DESIGN BUILD
            </h1>
            <span v-bind:class="$style.subHeadlinesWrapper">
                <p>experiences</p>
                <p>websites</p>
                <p>web apps</p>
            </span>
            <v-btn>
                Test
            </v-btn>
        </div>
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
        height: 85vh;
    }

    .skewedBox {
        @apply absolute h-full -mt-40 w-full;
        background: #34495E;
        background-color: #34495E;
        transform: skew(0deg, 5deg);
        z-index: -1;
    }

    .wrapper {
        @apply flex flex-col items-end justify-start px-8 w-full;
        height: 20rem;
        max-width: 100rem;
    }

    .headline {
        @apply font-black;
        color: #fff;
        font-size: 4.5rem;
    }

    .subHeadlinesWrapper {
        @apply font-thin text-xl text-right;
        color: #fff;

        :first-child {
            @apply font-medium;
        }
    }
</style>
