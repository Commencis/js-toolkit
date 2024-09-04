export const scssRules = {
  'scss/dollar-variable-no-namespaced-assignment': true,
  'scss/no-duplicate-dollar-variables': true,
  'scss/at-mixin-argumentless-call-parentheses': null,
  'scss/dollar-variable-empty-line-before': [
    'always',
    {
      ignore: [
        'after-comment',
        'inside-single-line-block',
        'after-dollar-variable',
      ],
    },
  ],
};
