<template>
    <section v-bind:class="$style.container">
        <div v-bind:class="$style.content">
            <h4 v-bind:class="$style.title">
                What I've Been Working on Lately
            </h4>
            <div v-bind:class="$style.projects">
                <div v-bind:class="$style.highlight">
                    <HomeProjectHighlight v-bind:project="highlight" />
                </div>
                <div v-bind:class="$style.features">
                    <HomeProjectFeature
                        v-for="(feature, index) in features"
                        v-bind:key="index"
                        v-bind:project="feature"
                    />
                </div>
            </div>
            <AppLink
                v-bind:class="$style.callToAction"
                to="/portfolio"
                v-bind:link-text="'See All My Work'"
            />
        </div>
        <span v-bind:class="$style.abstractContainer" />
    </section>
</template>

<script>
    export default {
        /**
         * Self contained reusable Vue single-file components.
         *
         * @link https://vuejs.org/v2/guide/single-file-components.html
         */
        components: {
            HomeProjectHighlight: () => import('~/components/HomeProjectHighlight'),
            HomeProjectFeature: () => import('~/components/HomeProjectFeature'),
        },

        /**
         * Initial Vue component reactive data.
         *
         * @link https://vuejs.org/v2/api/#Options-Data
         */
        data: () => ({
            highlight: {},
            features: [],
            hasHover: false,
        }),

        /**
         * Vue life-cycle hook called synchronously after the Vue instance is created.
         *
         * @link https://vuejs.org/v2/api/#created
         */
        async created () {
            await this.fetchGithubProjects();
        },

        /**
         * Non-cached Vue methods.
         *
         * @link https://vuejs.org/v2/api/#methods
         */
        methods: {
            async fetchGithubProjects () {
                const { data: githubProjects } = await this.$axios.get(
                    'https://api.github.com/users/jeffnhorner/starred'
                );

                // Define the highlighted project
                this.highlight = githubProjects.find(project => project.name === 'electric-io');

                // Define the projects we want to feature
                this.features = githubProjects.filter(
                    project =>
                        project.name === 'website-template-for-creatives' ||
                        project.name === 'jeffnhorner-headless-wordpress'
                );
            },
        },
    };
</script>

<style lang="scss" module>
    .container {
        @apply flex justify-center my-24 mx-auto px-12 w-full;
        max-width: 100rem;
    }

    .content {
        @apply w-full;
    }

    .title {
        @apply font-extrabold text-right mt-8 mb-12 text-2xl w-full z-10;
    }

    .projects {
        @apply flex justify-center items-center z-10;
    }

    .highlight {
        @apply mr-12 w-full;
        max-width: 70%;
    }

    .features {
        @apply flex flex-col justify-between w-full;
        max-width: 30%;

        > *:first-of-type {
            @apply mb-8;
        }
    }

    .callToAction {
        @apply flex;
        height: 13rem;

        > a {
            @apply lowercase self-end text-white text-lg py-8 px-16;
            background-color: #0071ff;
        }
    }

    .abstractContainer {
        @apply absolute w-full;
        height: 55rem;
        max-width: 70%;
        background-color: #f7f7f7;
        z-index: -1;
    }
</style>
