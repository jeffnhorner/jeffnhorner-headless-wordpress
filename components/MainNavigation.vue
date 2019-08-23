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
            <span
                v-bind:class="$style.logoWrapper"
                v-on:click="$store.dispatch('modules/navigation/close')"
            >
                <NuxtLink to="/">
                    <AppImage
                        v-if="generalSettings && generalSettings.logo"
                        v-bind:class="$style.logo"
                        v-bind:image="generalSettings.logo"
                    />
                </NuxtLink>
            </span>
            <button
                title="Menu Icon"
                v-bind:class="[
                    { [$style.menuIconSpacing] : hasExpandedMenu },
                    { [$style.active] : hasExpandedMenu },
                    $style.menuIcon,
                    $style.hamburgerIcon,
                ]"
                v-on:click="$store.dispatch(`modules/navigation/${hasExpandedMenu ? 'close' : 'open'}`)"
            >
                <span v-bind:class="[$style.line, $style.line1]" />
                <span v-bind:class="[$style.line, $style.line2]" />
                <span v-bind:class="[$style.line, $style.line3]" />
            </button>
        </div>
        <div
            v-bind:class="{ [$style.body] : hasExpandedMenu }"
            v-on:click="$store.dispatch('modules/navigation/close')"
        />
    </div>
</template>

<script>
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

        /**
         * Vue computed properties are cached, and only re-computed on reactive dependency changes.
         *
         * @link https://vuejs.org/v2/api/#computed
         */
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
                // Dynamically import the batch of dependencies we need for
                // fetching and displaying the navigation menu.
                const [
                    { default: icons },
                    { default: NavigationItem },
                    { data: navigation }
                ] = await Promise.all([
                    import('~/utilities/constants/icons'),
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
        @apply items-center fixed flex flex-col w-full;
        transition: transform 500ms;
        transform: translateY(-70%);

        @screen lg {
            transform: translateY(-75%);
        }
        @screen xl {
            transform: translateY(-80%);
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
            height: 12rem;
        }
        @screen xl {
            height: 15rem;
        }
    }

    .bottomMenu {
        @apply flex justify-between relative w-full mt-20 z-10 px-12;
        max-width: 100rem;
    }

    .logoWrapper {
        @apply block z-10;
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

    // Defined variables for the hamburger icon style
    $height-icon: 1rem;
    $width-line: 1.75rem;
    $height-line: .2rem;

    // Defined variables for the hamburger icon transition (open <-> close)
    $transition-time: 0.4s;
    $rotation: 45deg;
    $translateY: ($height-icon / 2);
    $translateX: 0;

    .hamburgerIcon {
        @apply self-center block cursor-pointer relative;
        width: $width-line;
        height: $height-icon;

        .line {
            @apply absolute block;
            background: #262626;
            border-radius: ($height-line / 2);
            height: $height-line;
            left: 0;
            width: $width-line;
            transition: all $transition-time;
            -webkit-transition: all $transition-time;
            -moz-transition: all $transition-time;

            &.line1 {
                top: 0;
            }

            &.line2 {
                top: 50%;
            }

            &.line3 {
                top: 100%;
            }
        }

        &:hover,
        &:focus {
            .line1 {
                transform: translateY($height-line / 2 * -1);
                -webkit-transform: translateY($height-line / 2 * -1);
                -moz-transform: translateY($height-line / 2 * -1);
            }

            .line3 {
                transform: translateY($height-line / 2);
                -webkit-transform: translateY($height-line / 2);
                -moz-transform: translateY($height-line / 2);
            }
        }

        &.active {
            .line1 {
                transform: translateY($translateY) translateX($translateX) rotate($rotation);
                -webkit-transform: translateY($translateY) translateX($translateX) rotate($rotation);
                -moz-transform: translateY($translateY) translateX($translateX) rotate($rotation);
            }

            .line2 {
                @apply opacity-0;
            }

            .line3 {
                transform: translateY($translateY * -1) translateX($translateX) rotate($rotation * -1);
                -webkit-transform: translateY($translateY * -1) translateX($translateX) rotate($rotation * -1);
                -moz-transform: translateY($translateY * -1) translateX($translateX) rotate($rotation * -1);
            }
        }
    }
</style>
