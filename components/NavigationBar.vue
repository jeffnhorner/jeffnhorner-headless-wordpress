<template>
    <nav
        v-if="navigation"
        v-bind:class="$style.navigation"
    >
        <ul v-bind:class="$style.navigationWrapper">
            <li
                v-for="page in navigation"
                v-bind:key="page.id"
                v-bind:class="$style.navigationItem"
                v-on:click="$store.dispatch('modules/navigation/close')"
            >
                <nuxt-link
                    v-bind:class="$style.navigationLink"
                    v-bind:to="page.link === 'home' ? '/' : page.link"
                >
                    {{ page.title }}
                </nuxt-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
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
</style>
