# @commencis/eslint-config

This package provides the ESLint configuration with custom rules for enforcing coding standards within Commencis projects. With predefined rules and configurations, it ensures consistent code quality and style across codebases.

## Installation

To use this ESLint configuration in your project, simply install it as a dev dependency:

With `npm`:

```sh
npm install --save-dev eslint @commencis/eslint-config
```

With `yarn`:

```sh
yarn add --dev eslint @commencis/eslint-config
```

With `pnpm`:

```sh
pnpm add --save-dev eslint @commencis/eslint-config
```

## Usage

> [!IMPORTANT]
> All the configs provided by this package is for the new [ESLint Flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new) that supported with `ESLint >= v9`

Access the `defineConfig` function directly from this package, or import it from `eslint/config` as needed.

## Configs & Helper Exports

This package includes pre-configured configs for:

- **Javascript**
- **Typescript**
- **React**
- **NextJs**
- **ReactNative**

To use the default rules without additional customization, export the base configuration as shown below:

### Basic Usage without Overrides

```javascript
// eslint.config.mjs
export { default } from '@commencis/eslint-config/react';
```

Default export is available on:

- `@commencis/eslint-config/javascript`;
- `@commencis/eslint-config/typescript`;
- `@commencis/eslint-config/react`;
- `@commencis/eslint-config/next`;
- `@commencis/eslint-config/native`;

### Flexible Usage with Overrides

Alternatively, to use overrides:

Find desired named exports:

- `javascriptConfig`
- `typescriptConfig`
- `reactConfig`
- `nextConfig`
- `reactNativeConfig`

```javascript
// eslint.config.mjs
export { nextConfig, defineConfig } from '@commencis/eslint-config';

export default defineConfig(next, {
  // overrides
});
```

### New `configFactory` Usage with Overrides:

```javascript
// eslint.config.mjs
export { configFactory, defineConfig } from '@commencis/eslint-config';

const config = configFactory({
  react: true,
  next: true,
  jsxA11y: true,
  reactCompiler: true,
});

export default defineConfig(config, {
  // overrides
});
```

## References

[ESLint](https://eslint.org/docs/latest/)

[TypeScript-Eslint](https://typescript-eslint.io/packages/typescript-eslint#config)

## Contribution

We welcome contributions to improve this package. Feel free to open issues or pull requests to suggest enhancements or report any issues.

## License

This project is licensed under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0) - see the [LICENSE](./LICENSE) file for details.

© [Commencis](https://www.commencis.com/), 2024. All rights reserved.
