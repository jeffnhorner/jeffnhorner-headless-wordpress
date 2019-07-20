module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'prettier',
    'prettier/vue',
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'vue/html-indent': ['error', 4],
    'indent': ['error', 4],
    'comma-dangle': ['error', 'always'],
    'semi' : ['error', 'always'],
    'comma-spacing': [
        'error',
        {
            before: false,
            after: true,
        },
    ],
    'array-bracket-spacing': ['error', 'never'],
  }
}
