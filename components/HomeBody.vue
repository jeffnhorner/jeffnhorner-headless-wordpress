<template>
    <div
        v-if="page"
        v-bind:class="$style.container"
    >
        <slot
            name="posts"
        />
        <div v-bind:class="$style.imageContainer">
            <AppImage
                v-if="page.mainImage"
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
        @apply flex h-full justify-between mx-auto mt-16 mb-24 px-12 w-full;
        max-width: 100rem;
    }

    .imageContainer {
        @apply flex items-end justify-end w-full;
        height: 34rem;
        max-width: 46%;
        background-color: #f7f7f7;
    }

    .image {
        @apply w-full mr-8 mb-12;
        max-width: 80%;
    }
</style>
