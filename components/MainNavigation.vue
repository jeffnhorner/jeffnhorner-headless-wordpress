<template>
    <div
        v-bind:class="[
            { [$style.visibleContainer] : hasExpandedMenu },
            $style.container,
        ]"
    >
        <div v-bind:class="$style.topMenu">
            <NavigationBar
                v-bind:navigation="navigation"
            />
        </div>
        <div v-bind:class="$style.bottomMenu">
            <nuxt-link
                to="/"
            >
                <span
                    v-on:click="$store.dispatch('modules/navigation/close')"
                >
                    <AppImage
                        v-if="generalSettings"
                        v-bind:class="$style.logo"
                        v-bind:image="generalSettings.logo"
                    />
                </span>
            </nuxt-link>
            <button
                v-bind:class="[
                    { [$style.menuIconSpacing] : hasExpandedMenu },
                    $style.menuIcon,
                ]"
                v-on:click="$store.dispatch(`modules/navigation/${hasExpandedMenu ? 'close' : 'open'}`)"
            >
                <AppIcon
                    v-bind:class="$style.menuStateIcon"
                    v-bind:name="hasExpandedMenu ? 'times' : 'bars'"
                />
            </button>
        </div>
        <div
            v-bind:class="{ [$style.body] : hasExpandedMenu}"
            v-on:click="$store.dispatch('modules/navigation/close')"
        />
    </div>
</template>

<script>
    import icons from '~/utilities/constants/icons';

    export default {
        /**
         * Self contained reusable Vue single-file components.
         *
         * @link https://vuejs.org/v2/guide/single-file-components.html
         */
        components: {
            NavigationBar: () => import('./NavigationBar')
        },

        /**
         * Initial Vue component reactive data.
         *
         * @link https://vuejs.org/v2/api/#Options-Data
         */
        data: () => ({
            navigation: [],
        }),

        computed: {
            generalSettings () {
                return this.$store.getters['modules/pages/generalSettings'];
            },

            hasExpandedMenu () {
                return this.$store.getters['modules/navigation/isOpen'];
            },
        },

        /**
         * Vue life-cycle hook called synchronously after the Vue instance is created.
         *
         * @link https://vuejs.org/v2/api/#created
         */
        created () {
            // Fetch and build the navigation
            this.fetchNavigation();
        },

        /**
         * Non-cached Vue methods.
         *
         * @link https://vuejs.org/v2/api/#computed
         */
        methods: {
            async fetchNavigation () {
                const [
                    { default: NavigationItem },
                    { data: navigation }
                ] = await Promise.all([
                    import('~/models/cms/NavigationItem'),
                    this.$axios.get('/wp-api-menus/v2/menus/2'),
                ]);

                this.navigation = navigation.items.map(item => new NavigationItem(item));

                // Assign the appropriate font awesome icon name to each navigation item
                this.navigation.forEach((item) => {
                    icons.navigation.forEach((constant) => {
                        if (item.link === constant.navItem) {
                            item.icon = constant.icon;
                        }
                    });
                });
            },
        }
    };
</script>

<style lang="scss" module>

    .container {
        @apply items-center flex flex-col w-full;
        transition: transform 500ms;
        transform: translateY(-70%);

        @screen lg {
            transform: translateY(-72.5%);
        }
        @screen xl {
            transform: translateY(-75%);
        }
    }

    .visibleContainer {
        transform: translateY(0);
    }

    .topMenu {
        @apply flex items-center justify-center text-center w-full z-10;
        background-color: #f7f7f7;
        height: 10rem;

        @screen lg {
            height: 11rem;
        }
        @screen xl {
            height: 14rem;
        }
    }

    .bottomMenu {
        @apply flex justify-between relative w-full mt-12 z-10 px-12;
        max-width: 100rem;
    }

    .logo {
        width: 2.5rem;
    }

    .menuStateIcon {
        @apply cursor-pointer;
    }

    .menuIcon {
        @apply float-right relative;

        &:focus {
            @apply outline-none;
        }
    }

    .body {
        @apply absolute;
        height: 100vh;
        width: 100vw;
    }
</style>
