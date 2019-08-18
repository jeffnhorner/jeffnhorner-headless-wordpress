<template>
    <div v-bind:class="$style.container">
        <div v-bind:class="$style.imageContainer">
            <AppImage
                v-bind:class="$style.image"
                v-bind:image="page.mainImage"
            />
        </div>
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
        @apply flex h-full justify-end mx-auto pr-12 mt-16 mb-8 w-full;
        max-width: 85%;
    }

    .image {
        @apply w-full mr-8 mb-12;
        max-width: 33rem;
    }

    .imageContainer {
        @apply flex items-end justify-end w-full;
        height: 34rem;
        max-width: 41rem;
        background-color: #f3f3f3;
    }
</style>
