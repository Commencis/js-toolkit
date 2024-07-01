# @commencis/stylelint-config

This package provides the Stylelint configuration with custom rules for enforcing CSS coding standards within Commencis projects. With predefined rules and configurations, it ensures consistent styles and formatting across stylesheets.

## Installation

To use this Stylelint configuration in your project, simply install it as a dev dependency:

With `npm`:

```sh
npm install --save-dev @commencis/stylelint-config
```

With `yarn`:

```sh
yarn add --dev @commencis/stylelint-config
```

With `pnpm`:

```sh
pnpm add --save-dev @commencis/stylelint-config
```

## Usage

Once installed, you can extend this Stylelint configuration in your project's Stylelint configuration file, typically named `stylelint.config.js`.

Example usage for SCSS Modules

```javascript
export default {
  extends: ['@commencis/stylelint-config/scss-modules'],
  ignoreFiles: ['node_modules', 'coverage/**/*', 'dist/**/*'],
  rules: {
    // Add custom rules if needed
  },
};
```

### Pre-Defined Configs:

You can use different configs according to your styling preferences. The package provides the following:

Default (SCSS Modules): `@commencis/stylelint-config`

- CSS: `@commencis/stylelint-config/css`
- CSS Modules: `@commencis/stylelint-config/css-modules`
- SCSS: `@commencis/stylelint-config/scss`
- SCSS Modules: `@commencis/stylelint-config/scss-modules`
- Styled Components: `@commencis/stylelint-config/styled`
- Vue CSS: `@commencis/stylelint-config/vue`
- Vue SCSS: `@commencis/stylelint-config/vue-scss`

## Contribution

We welcome contributions to improve this package. Feel free to open issues or pull requests to suggest enhancements or report any issues.

## License

This project is licensed under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0) - see the [LICENSE](./LICENSE) file for details.

© [Commencis](https://www.commencis.com/), 2024. All rights reserved.
