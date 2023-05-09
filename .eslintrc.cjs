/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-essential', '@vue/airbnb', '@vue/eslint-config-prettier'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'import/extensions': 0
  }
}
