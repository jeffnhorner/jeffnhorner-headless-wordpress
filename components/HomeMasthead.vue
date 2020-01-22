<template>
    <div v-bind:class="$style.container">
        <div v-bind:class="$style.wrapper">
            <div v-bind:class="$style.content">
                <h1 v-bind:class="$style.headline">
                    create design build
                </h1>
                <span v-bind:class="$style.subHeadlinesWrapper">
                    <p>experiences</p>
                    <p>websites</p>
                    <p>web apps</p>
                </span>
                <VBtn
                    depressed
                    nuxt
                    outlined
                    tile
                    to="/contact"
                    x-large
                    v-bind:class="$style.calltoAction"
                >
                    Let's Build
                </VBtn>
            </div>
        </div>
        <div v-bind:class="[$style.skewedBox, $style.overlay]" />
    </div>
</template>

<script>
    export default {};
</script>

<style lang="scss" module>
    .container {
        @apply flex items-center w-full z-10;
        height: 55vh;

        @screen sm {
            height: 62vh;
        }
        @screen lg {
            height: 70vh;
        }
    }

    .skewedBox {
        @apply absolute h-full -mt-56 w-full;
        background: url('https://live.staticflickr.com/65535/49141928281_d7b2bb814c_o.jpg') no-repeat center;
        background-size: cover;
        transform: skew(0deg, 5deg);
        opacity: .9;
        z-index: -1;

        @screen lg {
            @apply -mt-40;
        }

        &.overlay:before {
            @apply absolute block h-full w-full;
            background: #8E2DE2;
            background: -webkit-linear-gradient(to right, #4A00E0, #8E2DE2);
            background: linear-gradient(to right, #4A00E0, #8E2DE2);
            content: '';
            top: 0;
            right: 0;
            opacity: .85;
        }
    }

    .wrapper {
        @apply px-8 mx-auto w-full;
        max-width: 100rem;
    }

    .content {
        @apply flex flex-col h-full items-end justify-between;
        min-height: 22rem;

        @screen sm {
            min-height: 15rem;
        }
        @screen lg {
            border-left: .025rem solid #fff;
            min-height: 18rem;
        }
    }

    .headline {
        @apply font-black leading-none text-5xl text-right uppercase w-full;
        color: #fff;
        max-width: 20rem;

        @screen sm {
            font-size: 2.75rem;
            max-width: 100%;
        }
        @screen lg {
            font-size: 4.5rem;
            max-width: 100%;
        }
    }

    .subHeadlinesWrapper {
        @apply font-thin mb-1 mr-1 text-xl text-right;
        color: #fff;

        :first-child {
            @apply font-medium;
        }
    }

    .calltoAction {
        @apply font-bold lowercase mr-1 relative text-xl;
        -webkit-transform: perspective(.25rem) translateZ(0);
        transform: perspective(.25rem) translateZ(0);
        box-shadow: 0 0 .25rem rgba(0, 0, 0, 0);
        -webkit-transition-property: color;
        transition-property: color;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;

        &:global(.v-btn:not(.v-btn--round).v-size--x-large) {
            @apply p-8;
        }

        &:global(.theme--light.v-btn:hover:before) {
            @apply opacity-100;
        }

        &:global(.theme--light.v-btn) {
            color: #fff;
        }

        &:before {
            @apply absolute;
            content: "";
            z-index: -1;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: #fff;
            -webkit-transform: scaleX(0);
            transform: scaleX(0);
            -webkit-transform-origin: 100% 50%;
            transform-origin: 100% 50%;
            -webkit-transition-property: transform;
            transition-property: transform;
            -webkit-transition-duration: 0.35s;
            transition-duration: 0.35s;
            -webkit-transition-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
            transition-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
        }

        &:hover:before,
        &:focus:before,
        &:active:before {
            -webkit-transform: scaleX(1);
            transform: scaleX(1);
        }

        &:hover:global(.theme--light.v-btn) {
            border-color: #fff;
            color: #8E2DE2;
        }
    }
</style>
