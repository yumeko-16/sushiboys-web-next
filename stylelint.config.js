/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-recess-order'],
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
