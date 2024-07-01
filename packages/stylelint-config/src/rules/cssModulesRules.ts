export const cssModulesRules = {
  // Enforce camelCase class names
  'selector-class-pattern': [
    '^[a-z][a-zA-Z0-9]*$',
    { message: 'Module class names must be in camelCase.' },
  ],
  // Handle CSS Modules specific pseudo-classes
  'selector-pseudo-class-no-unknown': [
    true,
    {
      ignorePseudoClasses: ['global', 'local'],
    },
  ],
};
