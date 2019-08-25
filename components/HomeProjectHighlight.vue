<template>
    <div v-bind:class="$style.container">
        <span
            v-if="!hasHover"
            v-bind:class="$style.highlight"
            v-on:mouseenter="hasHover = true"
        >
            <p v-bind:class="$style.highlightTitle">
                {{ project.name }}
            </p>
            <!-- <a
                v-bind:href="project.clone_url"
                target="_blank"
            >
                View Repository
            </a>
            <p>
                {{ project.description }}
            </p> -->
        </span>
        <span
            v-if="hasHover"
            v-bind:class="$style.highlightHover"
            v-on:mouseleave="hasHover = false"
        >
            Test
        </span>
    </div>
</template>

<script>
    export default {
        props: {
            project: {
                type: Object,
                required: true,
            },
        },

        data: () => ({
            hasHover: false,
        }),
    };
</script>

<style lang="scss" module>
    .container {
        @apply w-full;
    }

    .highlight,
    .highlightHover {
        @apply flex items-center justify-center w-full;
        height: 36rem;
        background: #fff;
        border: .005rem solid #e7e7e7;
    }

    .highlightTitle {
        @apply font-thin text-xl;
        color: #3c3c3c;
    }
</style>
