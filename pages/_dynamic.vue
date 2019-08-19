<template>
    <div
        v-if="page"
    >
        <HomeMasthead
            v-if="isHomepage"
            v-bind:page="page"
        />
        <HomeBody
            v-if="isHomepage"
            v-bind:page="page"
        >
            <template v-slot:posts>
                <BlogPreview />
            </template>
        </HomeBody>
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
            HomeBody: () => import('~/components/HomeBody'),
            BlogPreview: () => import('~/components/BlogPreview'),
        },

        /**
         * Initial Vue component reactive data.
         *
         * @link https://vuejs.org/v2/api/#Options-Data
         */
        data: () => ({
            page: {},
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

            isHomepage () {
                return this.page.slug === '';
            }
        },

        /**
         * Vue life-cycle hook called synchronously after the Vue instance is created.
         *
         * @link https://vuejs.org/v2/api/#created
         */
        async created () {
            // Dispatch the vuex action to fetch all CMS page data
            await this.$store.dispatch('modules/pages/fetchCMSPages');
            await this.dynamicPageData();
        },

        /**
         * Non-cached Vue methods.
         *
         * @link https://vuejs.org/v2/api/#computed
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
