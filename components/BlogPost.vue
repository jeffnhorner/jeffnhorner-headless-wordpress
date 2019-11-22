<template>
    <div>
        <h1 v-bind:class="$style.title">
            {{ post.title.rendered }}
        </h1>
        <p>{{ post.timestamp }}</p>
        <!-- eslint-disable vue/no-v-html -->
        <div
            v-bind:class="$style.body"
            v-html="post.content.rendered"
        />
        <!-- eslint-enable  -->
    </div>
</template>

<script>
    export default {
        props: {
            post: {
                type: Object,
                required: true,
            }
        }
    };
</script>

<style lang="scss" module>
    .title {
        @apply font-bold mb-8 text-5xl;
    }

    .body {
        > * {
            @apply font-light leading-loose text-sm;
        }

        > p {
            @apply my-4;
        }
    }
</style>
