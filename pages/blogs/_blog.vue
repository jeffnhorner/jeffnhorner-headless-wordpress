<template>
    <div
        v-if="post"
        v-bind:class="$style.container"
    >
        <span v-bind:class="$style.spacing" />
        <section v-bind:class="$style.heroContainer">
            <BlogPost
                v-bind:post="post"
            />
        </section>
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
            BlogPost: () => import('~/components/BlogPost.vue')
        },

        /**
         * Initial Vue component reactive data.
         *
         * @link https://vuejs.org/v2/api/#Options-Data
         */
        data: () => ({
            post: {},
        }),

        /**
         * Vue computed properties are cached, and only re-computed on reactive dependency changes.
         *
         * @link https://vuejs.org/v2/api/#computed
         */
        computed: {
            posts () {
                return this.$store.getters['modules/posts/posts'];
            }
        },

        async created () {
            await this.determineBlogPage();
        },

        /**
         * Non-cached Vue methods.
         *
         * @link https://vuejs.org/v2/api/#computed
         */
        methods: {
            determineBlogPage () {
                this.posts.forEach((post) => {
                    if (this.$route.params.blog === post.slug) {
                        this.post = post;
                    }
                });
            }
        }
    };
</script>

<style lang="scss" module>
    .container {
        @apply px-12 w-full;
        max-width: 100rem;
    }

    .spacing {
        @apply block;
        height: 20vh;
    }

    .heroContainer {
        @apply flex items-center;
    }
</style>
