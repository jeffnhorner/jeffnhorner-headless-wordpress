<template>
    <component
        v-bind:is="component"
        v-if="component"
    />
</template>

<script>
    // Dynamic imports based upon Vue's async component factory
    // See https://vuejs.org/v2/guide/components.html#Advanced-Async-Components
    const dynamicImports = componentName => ({
        component: import(`~/components/${componentName}`),
    });

    export default {
        transition: 'page',

        /**
         * Initial Vue component reactive data.
         *
         * @link https://vuejs.org/v2/api/#Options-Data
         */
        data: () => ({
            component: null,
        }),

        /**
         * Vue life-cycle hook called synchronously after the Vue instance is created.
         *
         * @link https://vuejs.org/v2/api/#created
         */
        async beforeCreate () {
            const { default: componentMapping } = await import('~/utilities/constants/componentMapping');

            componentMapping.forEach(({ path, name }) => {
                if (path === this.$route.path) {
                    // Assign the dynamic component
                    this.component = () => dynamicImports(name);
                }
            });
        },
    };
</script>

<style lang="scss" module>
    html {
        font-family: 'Montserrat', sans-serif;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
        color: #262626;
    }
</style>
