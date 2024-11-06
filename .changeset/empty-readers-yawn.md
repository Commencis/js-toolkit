---
'@commencis/stylelint-config': minor
---

update dependency: postcss-styled-syntax@0.7.0

- Added support for passing a function to `styled` instead using it as a tagged template. For example, `styled.div(props => 'color: red;'')`, or `styled(Component)(props => 'color: red;')`
