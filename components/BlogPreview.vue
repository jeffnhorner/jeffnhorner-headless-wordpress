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
                <span v-bind:class="$style.postHeadline">
                    <span v-bind:class="$style.count">
                        {{ index + 1 }}
                    </span>
                    <h3>
                        {{ post.title.rendered }}
                    </h3>
                </span>
                <!-- eslint-disable vue/no-v-html -->
                <p
                    v-bind:class="$style.description"
                    v-html="truncateDescription(post.content.rendered)"
                />
                <!-- eslint-enable vue/no-v-html -->
            </li>
        </ul>
        </sectionv-if="posts">
    </section>
</template>

<script>
    import truncateStringByWordCount from '~/utilities/helpers/truncateStringByWordCount';

    export default {
        computed: {
            posts () {
                return this.$store.getters['modules/posts/posts'];
            },
        },

        async created () {
            await this.$store.dispatch('modules/posts/fetchCMSPosts');

            console.log(this.posts);
        },

        methods: {
            truncateDescription (string) {
                return truncateStringByWordCount(string, 20);
            }
        }
    };
</script>

<style lang="scss" module>
    .container {
        @apply mt-32;
    }

    .headline {
        @apply font-extrabold ml-10 tracking-wider text-xl;
    }

    .divider {
        @apply ml-10 mt-2;
        background-color: #e7e7e7;
        height: .05rem;
        width: 5rem;
    }

    .postContainer {
        @apply flex flex-col justify-center mt-12;
    }

    .post {
        @apply mb-8;
    }

    .count {
        @apply text-3xl font-extrabold mr-4;
        width: 1.5rem;
    }

    .postHeadline {
        @apply flex items-center text-2xl font-thin;
    }

    .description {
        @apply text-xs font-light leading-loose w-full pl-10;
        color: #595959;
        max-width: 30rem;
    }
</style>
