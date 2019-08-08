<template>
    <div
        v-if="page.length"
        v-bind:class="$style.container"
    >
        <div>
            <Logo />
            <h1 v-bind:class="$style.title">
                {{ page[0].title }}
            </h1>
            <h2 v-bind:class="$style.subtitle">
                {{ page[0].subTitle }}
            </h2>
            <div v-bind:class="$style.links">
                <a
                    href="https://nuxtjs.org/"
                    target="_blank"
                    v-bind:class="$style.buttonGreen"
                >
                    Documentation
                </a>
                <a
                    href="https://github.com/nuxt/nuxt.js"
                    target="_blank"
                    v-bind:class="$style.buttonGrey"
                >
                    GitHub
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    // import { mapState } from 'vuex';
    import Logo from '~/components/Logo.vue';

    export default {
        components: {
            Logo,
        },

        data: () => ({
            page: [],
        }),

        computed: {
            pages () {
                return this.$store.getters['pages/pages'];
            },
        },

        async created () {
            await this.$store.dispatch('pages/getPages');
            await this.dynamicPageData();
        },

        methods: {
            dynamicPageData () {
                this.pages.filter(page => `/${page.slug}` === this.$route.path
                    ? this.page.push({
                        title: page.acf.masthead_title,
                        subTitle: page.acf.masthead_subtitle,
                    })
                    : null
                );
            }
        }
    };
</script>
    };
</script>

<style lang="scss" module>
    /* Sample `apply` at-rules with Tailwind CSS
    .container {
    @apply min-h-screen flex justify-center items-center text-center mx-auto;
    }
    */
    .container {
        margin: 0 auto;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .title {
        font-family: 'Quicksand','Source Sans Pro', -apple-system,BlinkMacSystemFont, 'Segoe UI',Roboto, 'Helvetica Neue', Arial,sans-serif;
        display: block;
        font-weight: 300;
        font-size: 100px;
        color: #35495e;
        letter-spacing: 1px;
    }

    .subtitle {
        font-weight: 300;
        font-size: 42px;
        color: #526488;
        word-spacing: 5px;
        padding-bottom: 15px;
    }

    .links {
        padding-top: 15px;
    }

    .buttonGreen {
        display: inline-block;
        border-radius: 4px;
        border: 1px solid #3b8070;
        color: #3b8070;
        text-decoration: none;
        padding: 10px 30px;
    }

    .buttonGreen:hover {
        color: #fff;
        background-color: #3b8070;
    }

    .buttonGrey {
        display: inline-block;
        border-radius: 4px;
        border: 1px solid #35495e;
        color: #35495e;
        text-decoration: none;
        padding: 10px 30px;
        margin-left: 15px;
    }

    .buttonGrey:hover {
        color: #fff;
        background-color: #35495e;
    }

    img {
        width: 30rem;
    }
</style>
