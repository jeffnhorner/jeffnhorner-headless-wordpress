<template>
    <nav
        v-if="navigation"
        class="navContainer"
    >
        <ul
            v-for="page in navigation"
            v-bind:key="page.id"
        >
            <li>
                <nuxt-link
                    v-bind:to="page.link"
                >
                    {{ page.title }}
                </nuxt-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        data: () => ({
            navigation: [],
        }),

        created () {
            this.fetchNavigation();
        },

        methods: {
            async fetchNavigation () {
                const { data: pages, } = await this.$axios.get('/wp/v2/pages');

                await pages.forEach((page) => {
                    if (page.title.rendered) {
                        this.navigation.push({
                            id: page.id,
                            title: page.title.rendered,
                            link: page.link,
                        });
                    };
                });

                this.navigation.reverse();
            },
        },
    };
</script>

<style scoped>

    .navContainer {
        @apply flex mx-2;
    }

    .navContainer ul li {
        @apply m-4;
    }
</style>
