<template>
    <section>
        <component
            v-bind:is="component"
            v-if="component"
        />
    </section>
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
         * asyncData is called server-side once (on the first request to the Nuxt app)
         * and client-side when navigating to further routes.
         *
         * @link https://nuxtjs.org/guide/async-data
         */
        async asyncData ({ store, route }) {
            // Batch of required vuex actions to fetch necessary data into view
            await store.dispatch('modules/pages/fetchCMSPages');
            await store.dispatch('modules/posts/fetchCMSPosts');
        },

        /**
         * Vue life-cycle hook called synchronously before the Vue instance is created.
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
