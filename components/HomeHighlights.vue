<template>
    <div v-bind:class="$style.container">
        <NuxtLink
            to="/about"
            v-bind:class="[$style.storyHighlight, $style.overlay]"
        >
            <span v-bind:class="$style.highlightTitle">my story</span>
        </NuxtLink>
        <NuxtLink
            to="/portfolio"
            v-bind:class="[$style.projectsHighlight, $style.overlay]"
        >
            <span v-bind:class="$style.highlightTitle">my work</span>
        </NuxtLink>
    </div>
</template>

<script>
    export default {};
</script>

<style lang="scss" module>
    .container {
        @apply flex flex-col mx-auto -mt-20 mb-12 w-full;
        max-width: 100rem;

        @screen sm {
            @apply -mt-40;
        }
        @screen md {
            @apply flex-row -mt-48;
        }
    }

    .storyHighlight,
    .projectsHighlight {
        @apply flex items-center justify-center h-full relative m-auto my-4;
        box-shadow: 0 .05rem .25rem -.05rem #595959;
        height: 20rem;
        width: 83%;
        -webkit-transition: 0.3s all;
        transition: .3s all;
        -webkit-transform: perspective(.05rem) translateZ(0);
        transform: perspective(.05rem) translateZ(0);
        -webkit-transition-property: transform;
        transition-property: transform;

        &.overlay:before {
            @apply absolute block h-full opacity-75 w-full;
            background-color: #fff;
            content: '';
            top: 0;
            right: 0;
        }

        @screen xs {
            height: 24rem;
            width: 90%;
        }
        @screen md {
            @apply w-full;
            height: 28rem;

            &:hover,
            &:focus,
            &:active {
                box-shadow: .25rem .25rem .75rem #595959;
                -webkit-transform: scale(1.03) rotate(1.5deg);
                transform: scale(1.03) rotate(1.5deg);
            }

            &:hover > .highlightTitle {
                color: #262626;
                transition: .2s all;
            }
        }
        @screen lg {
            height: 32rem;
        }
    }

    .storyHighlight {
        background: url('https://live.staticflickr.com/65535/49146756007_9747a4869b_o.jpg') no-repeat center;
        background-size: cover;

        @screen md {
            @apply mr-4 ml-8;
        }
        @screen xl {
            @apply mx-8;
        }
    }

    .projectsHighlight {
        background: url('https://live.staticflickr.com/65535/49146077918_be904dd4ff_o.jpg') no-repeat center;
        background-size: cover;

        @screen md {
            @apply mr-8 ml-4;
        }
        @screen xl {
            @apply mx-8;
        }
    }

    .highlightTitle {
        @apply absolute font-black text-2xl p-32 uppercase;
        color: #808080;

        @screen md {
            @apply text-4xl;
        }
    }
</style>
