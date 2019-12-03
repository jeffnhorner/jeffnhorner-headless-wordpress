const env = require('dotenv').config();

module.exports = {
    mode: 'spa',
    env: env.parsed,
  /*
  ** Headers of the page
  */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ],
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            // enable CSS Modules
                            modules: true,
                            // customize generated class names
                            localIdentName: '[local]_[hash:base64:8]',
                        },
                    },
                ],
            },
        ],
    },
  /*
  ** Customize the progress-bar color
  */
    loading: { color: '#fff' },
  /*
  ** Global CSS
  */
    css: [
        '~/assets/css/tailwind.css',
        '~/assets/scss/transitions.scss',
    ],
  /*
  ** Plugins to load before mounting the App
  */
    plugins: [
        '~/plugins/frameworkComponents.js',
        '~/plugins/dispatchGlobalData.server.js',
        '~plugins/vuetify',
    ],
  /*
  ** Nuxt.js modules
  */
    modules: [
        '@nuxtjs/eslint-module',
        '@nuxtjs/axios',
        // '@nuxtjs/vuetify',
    ],
    axios: {
        baseURL: process.env.NUXT_DEV_API_URL,
    },
  /*
  ** Build configuration
  */
    build: {
        postcss: {
            plugins: {
                tailwindcss: './tailwind.config.js',
            },
        },
    /*
    ** You can extend webpack config here
    */
        extend (config, ctx) {
        },
    },
};
