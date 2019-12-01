<template>
    <div>
        <MainHeader />
        <nuxt />
        <MainFooter />
    </div>
</template>

<script>
    export default {
        /**
         * Self contained reusable Vue single-file components.
         *
         * @link https://vuejs.org/v2/guide/single-file-components.html
         */
        components: {
            MainHeader: () => import('~/components/MainHeader'),
            MainFooter: () => import('~/components/MainFooter'),
        },
    };
</script>

<style lang="scss" module>
    html {
        font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,'Helvetica Neue', Arial, sans-serif;
        font-size: 16px;
        word-spacing: 1px;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
        background: #ECE9E6;
        background: -webkit-linear-gradient(to left, #FFFFFF, #ECE9E6);
        background: linear-gradient(to left, #FFFFFF, #ECE9E6);
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
        margin: 0;
    }
</style>
