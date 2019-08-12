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
    'vue/html-self-closing': ['error', {
        'html': {
            'void': 'never',
            'normal': 'always',
            'component': 'always'
        },
        'svg': 'always',
        'math': 'always'
    }],
    'vue/script-indent': ['error', 4, {
        'baseIndent': 1,
        'ignores': [],
    }],
    'vue/v-bind-style': 'longform',
    'indent': 'off',
    'indent-legacy': ['error', 4],
    'comma-dangle': ['error', 'only-multiline'],
    'semi' : ['error', 'always'],
    'comma-spacing': [
        'error',
        {
            before: false,
            after: true,
        },
    ],
    'array-bracket-spacing': ['error', 'never'],
    'no-console': 'off',
    'space-before-function-paren': ['error', 'always'],
    'no-return-assign': 'off',
  }
}
