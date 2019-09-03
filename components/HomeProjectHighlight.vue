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
        </span>
        <span
            v-if="hasHover"
            v-bind:class="$style.highlightHover"
            v-on:mouseleave="hasHover = false"
        >
            <span v-bind:class="$style.highlightHoverContent">
                <p v-bind:class="$style.highlightHoverDescription">
                    {{ project.description }}
                </p>
                <span v-bind:class="$style.highlightHoverCtaContainer">
                    <a
                        v-bind:class="$style.highlightHoverCta"
                        v-bind:href="project.clone_url"
                        target="_blank"
                    >
                        View Repository
                    </a>
                </span>
            </span>
        </span>
    </div>
</template>

<script>
    export default {
        /**
         * A collection of data that is exposed for parent components to accept.
         *
         * @link https://vuejs.org/v2/api/#props
         */
        props: {
            project: {
                type: Object,
                required: true,
            },
        },

        /**
         * Initial Vue component reactive data.
         *
         * @link https://vuejs.org/v2/api/#Options-Data
         */
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
        border: .005rem solid #f0f0f0;
        transition: .2s ease-in-out;
    }

    .highlightTitle {
        @apply font-thin;
        color: #3c3c3c;
    }

    .highlightHover {
        @apply flex flex-col items-center justify-between w-full;
        background: #fff;
        box-shadow: .2rem .2rem 1rem #f0f0f0;
    }

    .highlightHoverContent {
        @apply flex flex-col lowercase justify-center items-center text-right w-full;
        height: 100%;
    }

    .highlightHoverDescription {
        @apply mb-8 w-full;
        max-width: 28rem;
    }

    .highlightHoverCtaContainer {
        @apply w-full;
        max-width: 28rem;
    }

    .highlightHoverCta {
        @apply self-end w-full;
    }

    .highlightTitle,
    .highlightHoverDescription {
        @apply font-thin cursor-default;
        color: #3c3c3c;
    }
</style>
