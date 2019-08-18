<template>
    <nav
        v-if="navigation"
        v-bind:class="$style.navigation"
    >
        <ul v-bind:class="$style.navigationWrapper">
            <li
                v-for="item in navigation"
                v-bind:key="item.id"
                v-bind:class="$style.navigationItem"
                v-on:click="$store.dispatch('modules/navigation/close')"
            >
                <nuxt-link
                    v-bind:class="$style.navigationLink"
                    v-bind:to="item.link === 'home' ? '/' : item.link"
                >
                    <span>
                        {{ item.title }}
                    </span>
                    <span>
                        <AppIcon
                            v-bind:name="item.icon"
                        />
                    </span>
                </nuxt-link>
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
            }
        },
    };
</script>

<style lang="scss" module>
    .navigation {
        @apply w-full h-full;
    }

    .navigationWrapper {
        @apply flex items-center w-full h-full;
    }

    .navigationItem {
        @apply flex self-center text-sm w-1/5 h-full;
        border-bottom: .025rem solid #dddddd;
        border-right: .025rem solid #dddddd;
        color: #262626;

        &:hover {
            background: #0071FF;
            color: #fff;
            transition: .2s ease-in-out;
        }

        /**
         * Set styles on an active nuxt-link only within the primary navigation targeting
         * global css outside of this css module.
         *
         * see https://github.com/css-modules/css-modules/pull/65#issuecomment-188705905
         */
        > :global(.nuxt-link-exact-active) {
            background-color: #0071FF;
            color: #fff;
        }
    }

    .navigationLink {
        @apply flex flex-col justify-center items-center w-full h-full;
    }
</style>
