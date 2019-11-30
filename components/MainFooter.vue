<template>
    <footer>
        <p v-bind:class="$style.footerText">
            Designed & Created by Jeff Horner | 2018 All Rights Reserved
        </p>
    </footer>
</template>

<script>
    export default {};
</script>

<style lang="scss" module>
    .footerText {
        @apply font-thin flex items-center justify-center text-sm w-full;
        color: #262626;
        min-height: 4rem;
    }
</style>
