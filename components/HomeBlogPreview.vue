<template>
    <section
        v-if="posts"
        v-bind:class="$style.container"
    >
        <h4 v-bind:class="$style.headline">
            Recent Posts
        </h4>
        <hr v-bind:class="$style.divider">
        <ul v-bind:class="$style.postContainer">
            <li
                v-for="(post, index) in posts"
                v-bind:key="post.id"
                v-bind:class="$style.post"
            >
                <NuxtLink
                    v-bind:to="`/blogs/${post.slug}`"
                    v-bind:class="$style.link"
                >
                    <span v-bind:class="$style.count">
                        {{ index + 1 }}
                    </span>
                    <div v-bind:class="$style.content">
                        <span v-bind:class="$style.titleWrapper">
                            <h3 v-bind:class="$style.title">
                                {{ post.title.rendered }}
                            </h3>
                            <span v-bind:class="$style.timestamp">
                                {{ post.timestamp }}
                            </span>
                        </span>
                        <!-- eslint-disable vue/no-v-html -->
                        <p
                            v-bind:class="$style.description"
                            v-html="truncateDescription(post.content.rendered)"
                        />
                    <!-- eslint-enable vue/no-v-html -->
                    </div>
                </NuxtLink>
            </li>
        </ul>
    </section>
</template>

<script>
    import truncateStringByWordCount from '~/utilities/helpers/truncateStringByWordCount';

    export default {
        /**
         * Vue computed properties are cached, and only re-computed on reactive dependency changes.
         *
         * @link https://vuejs.org/v2/api/#methods
         */
        computed: {
            posts () {
                return this.$store.getters['modules/posts/posts'];
            },
        },

        /**
         * Non-cached Vue methods.
         *
         * @link https://vuejs.org/v2/api/#computed
         */
        methods: {
            truncateDescription (string) {
                return truncateStringByWordCount(string, 30);
            },
        },
    };
</script>

<style lang="scss" module>
    .container {
        @apply mt-40;
    }

    .headline {
        @apply font-extrabold ml-16 tracking-wider text-2xl;
    }

    .divider {
        @apply flex ml-16 mt-2 mb-4;
        background-color: #e7e7e7;
        height: .05rem;
        width: 6rem;
    }

    .postContainer {
        @apply flex flex-col justify-center;
    }

    .post {
        @apply px-6 pb-6 pt-4 cursor-pointer z-10;

        &:hover {
            box-shadow: .05rem .05rem .25rem #e7e7e7;
            transition: .2s ease-in-out;
        }
    }

    .count {
        @apply font-extrabold self-start text-5xl text-right mr-6 -mt-1;
        width: 1.5rem;
    }

    .content {
        @apply flex flex-col;
    }

    .link {
        @apply flex items-center text-3xl font-thin;
    }

    .titleWrapper {
        @apply flex flex-col justify-end;
    }

    .title {
        @apply my-0;
    }

    .timestamp {
        @apply font-thin uppercase;
        color: #3c3c3c;
        font-size: .5rem;
    }

    .description {
        @apply text-xs font-light leading-loose mt-4 w-full;
        color: #3c3c3c;
        max-width: 32rem;
    }

    .navigationLink {
        @apply flex flex-col justify-center items-center w-full h-full;
    }
</style>
