module.exports = {
  customSyntax: 'postcss-scss',
  extends: [
    'stylelint-config-clean-order',
    'stylelint-config-css-modules',
    'stylelint-prettier/recommended',
    'stylelint-config-prettier',
  ],
  rules: {
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
      },
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['global'],
      },
    ],
    'no-descending-specificity': null,
    'prettier/prettier': [true, { singleQuote: true, tabWidth: 2 }],
  },
};
