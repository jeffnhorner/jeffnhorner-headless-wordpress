<template>
    <div>
        <MainNavigation :class="$style.class" />
    </div>
</template>

<script>
    export default {
        data: () => ({
            data: [],
        }),
    };
</script>

<style lang="scss" scoped>
    .class {
        display: block;
    }
</style>
