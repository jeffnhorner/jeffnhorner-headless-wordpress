<template>
    <div v-bind:class="$style.container">
        <div
            v-if="!hasHover"
            v-bind:class="$style.feature"
            v-on:mouseenter="hasHover = true"
        >
            <p v-bind:class="$style.featureTitle">
                {{ project.name }}
            </p>
        </div>
        <div
            v-else
            v-bind:class="$style.featureHover"
            v-on:mouseleave="hasHover = false"
        >
            <span v-bind:class="$style.featureHoverContent">
                <p v-bind:class="$style.featureHoverDescription">
                    {{ project.description }}
                </p>
                <span v-bind:class="$style.featureHoverCtaContainer">
                    <a
                        v-bind:class="$style.featureHoverCta"
                        v-bind:href="project.clone_url"
                        target="_blank"
                    >
                        View Repository
                    </a>
                </span>
            </span>
        </div>
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

    .feature {
        @apply flex items-center justify-center w-full;
        height: 17rem;
        background: #fff;
        border: .005rem solid #f0f0f0;
        transition: .2s ease-in-out;
    }

    .featureHover {
        @apply flex flex-col items-center justify-between w-full;
        height: 17rem;
        background: #fff;
        border: .005rem solid #f0f0f0;
        box-shadow: .2rem .2rem 1rem #e7e7e7;
    }

    .featureHoverContent {
        @apply flex flex-col lowercase justify-center items-center text-right w-full;
        height: 100%;
    }

    .featureHoverDescription {
        @apply mb-8 text-sm w-full;
        max-width: 18rem;
    }

    .featureHoverCtaContainer {
        @apply w-full;
        max-width: 18rem;
    }

    .featureHoverCta {
        @apply self-end w-full;
    }

    .featureTitle,
    .featureHoverDescription {
        @apply font-thin cursor-default;
        color: #3c3c3c;
    }
</style>
