<template>
    <nav
        v-if="navigation"
        v-bind:class="[$style.navigation, { [$style.scrollingWrapper] : isScrolling }]"
    >
        <NuxtLink to="/">
            <AppImage
                v-if="generalSettings && generalSettings.logo"
                v-bind:class="$style.logo"
                v-bind:image="!isScrolling && isHomepage ? generalSettings.alternativeLogo : generalSettings.logo"
            />
        </NuxtLink>
        <ul v-bind:class="$style.navigationWrapper">
            <li
                v-for="item in navigation"
                v-bind:key="item.id"
                v-bind:class="$style.navigationItem"
            >
                <NuxtLink
                    exact
                    v-bind:class="$style.navigationLink"
                    v-bind:to="item.link === 'home' ? '/' : `/${item.link}`"
                >
                    <span>
                        {{ item.title }}
                    </span>
                    <!-- <span>
                        <AppIcon
                            v-bind:name="item.icon"
                        />
                    </span> -->
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        /**
         * A collection of data that is exposed for parent components to accept.
         *
         * @link https://vuejs.org/v2/api/#props
         */
        props: {
            navigation: {
                type: Array,
                required: true,
            },
        },

        data: () => ({
            userIsScrolling: false,
        }),

        computed: {
            generalSettings () {
                return this.$store.getters['modules/pages/generalSettings'];
            },

            isHomepage () {
                return this.$route.path === '/';
            },

            isScrolling () {
                return this.$store.getters['modules/navigation/userIsScrolling'];
            }
        },
    };
</script>

<style lang="scss" module>
    .navigation {
        @apply flex items-center justify-between mx-auto pl-6 pr-4 w-full h-full;
        max-width: 100rem;
    }

    .scrollingWrapper {
        transition: .2s ease-in;

        .navigationItem {
            color: #8E2DE2;

            /**
            * Set styles on an active nuxt-link only within the primary navigation targeting
            * global css outside of this css module.
            *
            * see https://github.com/css-modules/css-modules/pull/65#issuecomment-188705905
            */
            > :global(.nuxt-link-exact-active) {
                @apply font-bold;
                margin-top: .15rem;
            }
        }
    }

    .navigationWrapper {
        @apply flex -mr-1 items-center;
    }

    .navigationItem {
        @apply flex mx-6 self-center text-sm;
        color: #fff;
        transition: .1s all;
        height: 3rem;
        border-bottom: .2rem solid transparent;

        &:hover {
            border-bottom: .2rem solid #fff;
        }

        /**
         * Set styles on an active nuxt-link only within the primary navigation targeting
         * global css outside of this css module.
         *
         * see https://github.com/css-modules/css-modules/pull/65#issuecomment-188705905
         */
        > :global(.nuxt-link-exact-active) {
            border-bottom: .2rem solid #fff;
            margin-top: .15rem;
        }
    }

    .navigationLink {
        @apply flex flex-col justify-center items-center w-full h-full;
    }

    .logoWrapper {
        @apply block z-10;
    }

    .logo {
        width: 4rem;
    }
</style>
