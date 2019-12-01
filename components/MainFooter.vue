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
    footer {
        @apply px-8;
    }

    .footerText {
        @apply font-thin flex items-center justify-center text-sm text-center w-full;
        color: #262626;
        min-height: 4rem;
    }
</style>
