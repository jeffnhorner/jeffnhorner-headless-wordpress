<template>
    <div v-if="page">
        <HomeMasthead />
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
            HomeMasthead: () => import('~/components/HomeMasthead'),
        },

        /**
         * Initial Vue component reactive data.
         *
         * @link https://vuejs.org/v2/api/#Options-Data
         */
        data: () => ({
            page: {},
            dynamicComponent: [],
        }),

        /**
         * Vue computed properties are cached, and only re-computed on reactive dependency changes.
         *
         * @link https://vuejs.org/v2/api/#computed
         */
        computed: {
            pages () {
                return this.$store.getters['modules/pages/pages'];
            },
        },

        /**
         * Vue life-cycle hook called synchronously after the Vue instance is created.
         *
         * @link https://vuejs.org/v2/api/#created
         */
        async created () {
            // Fetch all CMS page data
            await this.dynamicPageData();
        },

        /**
         * Non-cached Vue methods.
         *
         * @link https://vuejs.org/v2/api/#methods
         */
        methods: {
            async dynamicPageData () {
                const { default: Page } = await import('~/models/cms/Page');

                // Filter the page data where the page data slug matches the current
                // route path and instantiate a new Page model so we can use the page
                // data in the template.
                this.pages.filter((page) => {
                    if (`/${page.slug}` === this.$route.path) {
                        this.page = new Page(page);
                    }
                });
            },
        }
    };
</script>
