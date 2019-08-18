<template>
    <div v-bind:class="$style.container">
        <h1 v-bind:class="$style.title">
            {{ page.title }}
        </h1>
        <h2 v-bind:class="$style.subtitle">
            {{ page.subtitle }}
        </h2>
        <hr v-bind:class="$style.divider">
        <p v-bind:class="$style.description">
            {{ page.description }}
        </p>
    </div>
</template>

<script>
    export default {
        /**
         * A collection of data that is exposed for parent components to accept.
         *
         * @link https://vuejs.org/v2/api/#props
         */
        props: {
            page: {
                type: Object,
                required: true,
            },
        },
    };
</script>

<style lang="scss" module>
    .container {
        @apply flex flex-col justify-center mx-auto w-full;
        max-width: 85%;
        height: 95vh;
    }

    .title {
        @apply font-extrabold -mb-8 tracking-wide;
        color: #262626;
        font-size: 12rem;
    }

    .divider {
        @apply w-full;
        background-color: #262626;
        height: .5rem;
        max-width: 1.5rem;
    }

    .subtitle {
        @apply font-thin text-xl tracking-wide;
        color: #595959;
        padding-bottom: 15px;
    }

    .description {
        @apply font-thin leading-loose mt-4 tracking-wide w-full;
        color: #595959;
        max-width: 30rem;
    }
</style>
