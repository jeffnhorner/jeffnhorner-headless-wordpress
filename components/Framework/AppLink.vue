<template>
    <div>
        <NuxtLink
            v-bind:to="to"
        >
            {{ linkText }}
            <slot v-if="!linkText" />
        </NuxtLink>
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
            to: {
                type: String,
                required: true,
            },
            linkText: {
                type: String,
                default: '',
            },
        },
    };
</script>
