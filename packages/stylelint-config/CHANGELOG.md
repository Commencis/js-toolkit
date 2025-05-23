# @commencis/stylelint-config

## 2.1.0

### Minor Changes

- chore(deps): update stylelint peer-dependency to `>=16.18` ([#288](https://github.com/Commencis/js-toolkit/pull/288))

## 2.0.0

### Major Changes

- chore: peerDependency `stylelint` now requires `>=16.13` ([#205](https://github.com/Commencis/js-toolkit/pull/205))

### Patch Changes

- chore(deps): update dependency postcss-styled-syntax to v0.7.1 ([#208](https://github.com/Commencis/js-toolkit/pull/208))

## 1.4.0

### Minor Changes

- feat: update styled-components config to resolve conflicts with stylistic rules ([#183](https://github.com/Commencis/js-toolkit/pull/183))

## 1.3.0

### Minor Changes

- **[BREAKING CHANGE]**: peer dependency `stylelint` now requires `>=16.11` ([#166](https://github.com/Commencis/js-toolkit/pull/166))

  update dependency: `stylelint-config-recommended-scss@14.1.0`

## 1.2.0

### Minor Changes

- update dependency: postcss-styled-syntax@0.7.0 ([#123](https://github.com/Commencis/js-toolkit/pull/123))

  - Added support for passing a function to `styled` instead using it as a tagged template. For example, `styled.div(props => 'color: red;'')`, or `styled(Component)(props => 'color: red;')`
