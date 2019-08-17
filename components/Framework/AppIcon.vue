<template>
    <div>
        <font-awesome-icon
            v-bind:icon="name"
        />
    </div>
</template>

<script>
    import Vue from 'vue';
    import { library } from '@fortawesome/fontawesome-svg-core';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import {
        faBars,
        faTimes,
    } from '@fortawesome/free-solid-svg-icons';
    library.add(
        faBars,
        faTimes,
    );

    Vue.component('font-awesome-icon', FontAwesomeIcon);

    export default {
        /**
         * Self contained reusable Vue single-file components.
         *
         * @link https://vuejs.org/v2/guide/single-file-components.html
         */
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },

        /**
         * A collection of data that is exposed to accept data from a parent component.
         *
         * @link https://vuejs.org/v2/api/#props
         */
        props: {
            name: {
                type: [
                    Array,
                    String,
                ],
                required: true,
            },
        },
    };
</script>
