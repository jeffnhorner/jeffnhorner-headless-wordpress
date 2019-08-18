<template>
    <div v-bind:class="$style.container">
        <h1 v-bind:class="$style.title">
            {{ page.title }}
        </h1>
        <hr v-bind:class="$style.divider">
        <h2 v-bind:class="$style.subtitle">
            {{ page.subtitle }}
        </h2>
    </div>
</template>

<script>
    export default {
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
        height: 100vh;
    }

    .title {
        @apply font-extrabold tracking-wide;
        color: #262626;
        font-size: 12rem;
    }

    .divider {
        @apply mb-4 w-full;
        background-color: #e7e7e7;
        height: .015rem;
        max-width: 13rem;
    }

    .subtitle {
        @apply font-thin text-xl;
        color: #595959;
        padding-bottom: 15px;
    }
</style>
