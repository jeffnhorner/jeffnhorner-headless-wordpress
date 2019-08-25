<template>
    <section v-bind:class="$style.container">
        <div v-bind:class="$style.content">
            <h4 v-bind:class="$style.title">
                What I've Been Working on Lately
            </h4>
            <div v-bind:class="$style.projects">
                <div v-bind:class="$style.highlight">
                    <HomeProjectHighlight
                        v-bind:project="highlight"
                    />
                </div>
                <div v-bind:class="$style.features">
                    <HomeProjectFeature
                        v-for="(feature, index) in features"
                        v-bind:key="index"
                        v-bind:project="feature"
                    />
                </div>
            </div>
        </div>
        <span v-bind:class="$style.abstractContainer" />
        </appimage>
    </section>
</template>

<script>
    export default {
        components: {
            HomeProjectHighlight: () => import('~/components/HomeProjectHighlight'),
            HomeProjectFeature: () => import('~/components/HomeProjectFeature'),
        },

        data: () => ({
            highlight: {},
            features: [],
            hasHover: false,
        }),

        async created () {
            await this.fetchGithubProjects();
        },

        methods: {
            async fetchGithubProjects () {
                const { data: githubProjects } = await this.$axios.get('https://api.github.com/users/jeffnhorner/starred');

                // Define the highlighted project
                this.highlight = githubProjects.find(project => project.name === 'electric-io');

                // Define the projects we want to feature
                this.features = githubProjects.filter(project => project.name === 'website-template-for-creatives' || project.name === 'jeffnhorner-headless-wordpress');

                console.log(this.highlight);
                console.log(this.features);
            }
        }
    };
</script>

<style lang="scss" module>
    .container {
        @apply flex justify-center mx-auto px-12 mt-56 relative w-full;
        max-width: 100rem;
    }

    .content {
        @apply w-full;
    }

    .title {
        @apply font-extrabold text-right mt-8 mb-12 text-2xl w-full z-10;
    }

    .projects {
        @apply flex justify-center items-center;
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

    .abstractContainer {
        @apply absolute w-full;
        height: 60rem;
        max-width: 70%;
        background-color: #f7f7f7;
        z-index: -1;
    }
</style>
