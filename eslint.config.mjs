// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    rules: {
      'vue/no-v-html': 'off',
    'vue/multi-word-component-names': 'off',
    'func-call-spacing': 'off',
    '@intlify/vue-i18n/no-html-messages': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    'vue/no-unused-properties': [
      'warn',
      {
        groups: ['props', 'data', 'computed', 'methods'],
        deepData: false,
        ignorePublicMembers: false
      }
    ],
    'require-await': 'error',
    'no-return-assign': ['error', 'always']
    }
  }
)

// module.exports = {
//   root: true,
//   env: {
//     browser: true,
//     node: true
//   },
//   plugins: ['eslint-plugin-unused-imports'],
//   // add your custom rules here
//   rules: {
//     'vue/no-v-html': 'off',
//     'vue/multi-word-component-names': 'off',
//     'func-call-spacing': 'off',
//     '@intlify/vue-i18n/no-html-messages': 'off',
//     '@typescript-eslint/explicit-function-return-type': 'off',
//     '@typescript-eslint/prefer-ts-expect-error': 'error',
//     'vue/no-unused-properties': [
//       'warn',
//       {
//         groups: ['props', 'data', 'computed', 'methods'],
//         deepData: false,
//         ignorePublicMembers: false
//       }
//     ],
//     'require-await': 'error',
//     'unused-imports/no-unused-imports': 'error',
//     'no-return-assign': ['error', 'always']
//   }
// }
