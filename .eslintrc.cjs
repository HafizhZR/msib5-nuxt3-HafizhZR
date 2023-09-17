module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
  plugins: [],
  rules: {
    'vue/multi-word-component-names': 0,
    'no-console': 0,
    'vue/require-default-prop': 0,
    'vue/require-v-for-key': 0,
    'vue/require-prop-types': 0
  }
}
