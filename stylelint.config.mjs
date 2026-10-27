/** @type {import('stylelint').Config} */
const config = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order',
    'stylelint-config-prettier-scss',
  ],
  ignoreFiles: ['**/node_modules/**'],
  rules: {
    'block-no-empty': true,
    'property-no-vendor-prefix': null,
    'comment-empty-line-before': null,
    'media-feature-range-notation': 'prefix',
    'selector-class-pattern': '^[a-z][a-zA-Z0-9]+$',
    'scss/at-mixin-pattern': '^[a-z][a-zA-Z0-9]*$',
  },
};

export default config;
