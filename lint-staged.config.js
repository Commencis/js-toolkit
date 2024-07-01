export default {
  '*': 'prettier --write --cache --ignore-unknown',
  '*.{js,cjs,mjs,ts}': 'eslint --max-warnings 0',
};
