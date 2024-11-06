# @commencis/stylelint-config

## 1.2.0

### Minor Changes

- update dependency: postcss-styled-syntax@0.7.0 ([#123](https://github.com/Commencis/js-toolkit/pull/123))

  - Added support for passing a function to `styled` instead using it as a tagged template. For example, `styled.div(props => 'color: red;'')`, or `styled(Component)(props => 'color: red;')`
