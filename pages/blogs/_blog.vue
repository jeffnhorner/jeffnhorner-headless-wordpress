<template>
    <div v-if="post">
        <h1 v-bind:class="$style.title">
            {{ post.title.rendered }}
        </h1>
    </div>
</template>

<script>
    export default {
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
    .title {
        height: 10rem;
    }
</style>
