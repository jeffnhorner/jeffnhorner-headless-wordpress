<template>
    <MainNavigation />
</template>

<script>
    export default {
        /**
         * Self contained reusable Vue single-file components.
         *
         * @link https://vuejs.org/v2/guide/single-file-components.html
         */
        components: {
            MainNavigation: () => import('~/components/MainNavigation.vue'),
        },
    };
</script>
