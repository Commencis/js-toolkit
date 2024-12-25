export const styledRules = {
  // Disable unknown at-rules because they are handled by styled-components
  'at-rule-no-unknown': null,
  // Double slash comments are used in JS
  'no-invalid-double-slash-comments': null,
  'property-no-unknown': [
    true,
    {
      ignoreProperties: ['composes'],
    },
  ],
  // Class patterns are not relevant for Styled Components
  'selector-class-pattern': null,
  // CSS functions can be defined in JS
  'function-no-unknown': null,
  // Styled Components may use variables and camelCase
  'value-keyword-case': null,
  // Avoid false positives on empty styled components
  'no-empty-source': null,
  // Disallow vendor prefixes for values
  'value-no-vendor-prefix': true,
  // Disallow vendor prefixes for properties
  'property-no-vendor-prefix': true,
};
