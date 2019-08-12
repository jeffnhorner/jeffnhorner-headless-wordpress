<template>
    <div>
        <MainNavigation />
    </div>
</template>

<script>
    export default {
        components: {
            MainNavigation: () => import('~/components/MainNavigation.vue'),
        },
    };
</script>
