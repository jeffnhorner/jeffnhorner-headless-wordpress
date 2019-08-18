<template>
    <div>
        <img
            v-bind:class="$style.image"
            v-bind:src="image"
            v-bind:style="`max-width: ${maxWidth};`"
        >
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
            image: {
                type: String,
                required: true,
            },
            maxWidth: {
                type: String,
                default: 'auto',
            },
        },
    };
</script>

<style lang="scss" module>
    .image {
        @apply w-full mx-auto;
    }
</style>
