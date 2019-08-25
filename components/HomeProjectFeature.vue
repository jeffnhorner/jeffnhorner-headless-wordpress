<template>
    <div v-bind:class="$style.container">
        <span
            v-if="!hasHover"
            v-bind:class="$style.feature"
            v-on:mouseenter="hasHover = true"
        >
            <p v-bind:class="$style.featureTitle">
                {{ project.name }}
            </p>
            <!-- <a
                v-bind:href="feature.clone_url"
                target="_blank"
            >
                View Repository
            </a>
            <p>
                {{ feature.description }}
            </p> -->
        </span>
        <span
            v-else
            v-bind:class="$style.featureHover"
            v-on:mouseleave="hasHover = false"
        >
            test
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

    .feature {
        @apply flex items-center justify-center w-full;
        height: 17rem;
        background: #fff;
        border: .005rem solid #e7e7e7;
    }

    .featureHover {
        @apply flex items-center justify-center w-full;
        height: 17rem;
        background: #fff;
        border: .005rem solid #e7e7e7;
    }

    .featureTitle {
        @apply font-thin;
        color: #3c3c3c;
    }
</style>
