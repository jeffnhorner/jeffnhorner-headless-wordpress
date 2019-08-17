<template>
    <div
        v-bind:class="[
            { [$style.visibleContainer] : hasExpandedMenu },
            $style.container,
        ]"
    >
        <div v-bind:class="$style.topMenu">
            <nav
                v-if="navigation"
                v-bind:class="$style.navigation"
            >
                <ul v-bind:class="$style.navigationWrapper">
                    <li
                        v-for="page in navigation"
                        v-bind:key="page.id"
                        v-bind:class="$style.navigationItem"
                    >
                        <nuxt-link
                            v-bind:class="$style.navigationLink"
                            v-bind:to="page.slug === 'home' ? '/' : page.slug"
                        >
                            {{ page.title }}
                        </nuxt-link>
                    </li>
                </ul>
            </nav>
        </div>
        <div v-bind:class="$style.bottomMenu">
            <button
                v-bind:class="[
                    { [$style.menuIconSpacing] : hasExpandedMenu },
                    $style.menuIcon,
                ]"
                v-on:click="toggleMenu"
            >
                <AppIcon
                    v-bind:name="hasExpandedMenu ? 'times' : 'bars'"
                />
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        /**
         * Initial Vue component reactive data.
         *
         * @link https://vuejs.org/v2/api/#Options-Data
         */
        data: () => ({
            navigation: [],
            hasExpandedMenu: false,
        }),

        /**
         * Vue life-cycle hook called synchronously after the Vue instance is created.
         *
         * @link https://vuejs.org/v2/api/#created
         */
        created () {
            this.fetchNavigation();
        },

        /**
         * Non-cached Vue methods.
         *
         * @link https://vuejs.org/v2/api/#computed
         */
        methods: {
            async fetchNavigation () {
                const { data: pages } = await this.$axios.get('/wp/v2/pages');

                await pages.forEach((page) => {
                    if (page.title.rendered) {
                        this.navigation.push({
                            id: page.id,
                            title: page.title.rendered.toLowerCase(),
                            slug: page.slug,
                        });
                    };
                });

                this.navigation.reverse();
            },

            toggleMenu () {
                this.hasExpandedMenu = !this.hasExpandedMenu;
            },

            closeMenu () {
                if (this.hasExpandedMenu) {
                    console.log('test');
                    this.hasExpandedMenu = false;
                }
            }
        },
    };
</script>

<style lang="scss" module>

    .container {
        @apply items-center flex flex-col w-full;
        transition: transform 500ms;
        transform: translateY(-70%);

        &.visibleContainer {
            transform: translateY(0);
        }
    }

    .navigation {
        @apply w-full h-full;
    }

    .navigationWrapper {
        @apply flex items-center w-full h-full;
    }

    .navigationLink {
        @apply flex justify-center items-center w-full h-full;
    }

    .navigationItem {
        @apply flex self-center text-sm w-1/5 h-full;
        border-bottom: .025rem solid #dddddd;
        border-right: .025rem solid #dddddd;
        border-top: .025rem solid #dddddd;
        color: #262626;

        &:hover {
            background: #0071FF;
            color: #fff;
            transition: .2s ease-in-out;
        }
    }

    .topMenu {
        @apply flex items-center justify-center text-center w-full;
        background-color: #f7f7f7;
        height: 10rem;
    }

    .bottomMenu {
        @apply relative w-full mt-12;
        max-width: 85%;
    }

    .menuIcon {
        @apply float-right relative;

        &:focus {
            @apply outline-none;
        }
    }
</style>
