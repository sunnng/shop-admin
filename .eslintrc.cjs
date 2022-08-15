module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    './.eslintrc-auto-import.json',
    'plugin:vue/vue3-strongly-recommended',
    // 'plugin:vue/vue3-essential',
    'standard',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {}
  // overrides: [
  //   {
  //     files: ['src/api/**/*.ts'],
  //     rules: {
  //       camelcase: 'off'
  //     }
  //   }
  // ]
}
