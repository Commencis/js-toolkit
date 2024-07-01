export const vueCssRules = {
  'selector-pseudo-class-no-unknown': [
    true,
    {
      ignorePseudoClasses: ['deep', 'global', 'slotted'],
    },
  ],
  'selector-pseudo-element-no-unknown': [
    true,
    {
      ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted'],
    },
  ],
};
