# @commencis/eslint-plugin

This package provides the ESLint plugin with custom rules for enforcing coding standards within Commencis projects. With predefined rules and configurations, it ensures consistent code quality and style across codebases.

## Installation

To use this ESLint plugin in your project, simply install it as a dev dependency:

With `npm`:

```sh
npm install --save-dev @commencis/eslint-plugin
```

With `yarn`:

```sh
yarn add --dev @commencis/eslint-plugin
```

With `pnpm`:

```sh
pnpm add --save-dev @commencis/eslint-plugin
```

## Rules

Currently the package provides `@commencis/copyright-text` that requires project files to include Commencis copyright notice.

## Pre-Defined Configs

Plugin itself comes with two configs as `all` and `recommended`. Commencis related internal rules are not included in `recommended` config.

## Usage

> [!IMPORTANT]
> You need `eslint >= 9` and use with the new Flat Config in your `eslint.config.js`

In your `eslint.config.js` import it as a Eslint Plugin and configure Commencis related rules.

### Example Usage:

```javascript
// eslint.config.js
import { commencisReactConfig, defineConfig } from '@commencis/eslint-config';
import commencisEslintPlugin from '@commencis/eslint-plugin';

export default defineConfig(
  ...commencisReactConfig,
  ...commencisEslintPlugin.configs.all
);
```

or you can define provided rules specifically:

```javascript
// eslint.config.js
import { commencisReactConfig, defineConfig } from '@commencis/eslint-config';
import commencisEslintPlugin from '@commencis/eslint-plugin';

export default defineConfig(...commencisReactConfig, {
  plugins: { '@commencis': commencisEslintPlugin },
  rules: {
    '@commencis/copyright-text': 'error',
  },
});
```

## Contribution

We welcome contributions to improve this package. Feel free to open issues or pull requests to suggest enhancements or report any issues.

## License

This project is licensed under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0) - see the [LICENSE](./LICENSE) file for details.

© [Commencis](https://www.commencis.com/), 2024. All rights reserved.
