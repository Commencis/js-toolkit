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

This package provides `defineConfig` function and includes config sets and can be found in package exports as following,

- Commencis Base: `commencisBaseConfig`
- Typescript: `commencisTypescriptConfig`
- React: `commencisReactConfig`
- NextJs: `commencisNextConfig`
- Vue: `commencisVueConfig`
- Prettier: `commencisPrettierConfig`

Firstly create your `eslint.config.js` and use the desired config by your project.

### Example Usage for React/Typescript Project:

```javascript
// eslint.config.js
import { commencisReactConfig, defineConfig } from '@commencis/eslint-config';

export default defineConfig(...commencisReactConfig, {
  /* ... */
});
```

### Example Usage for React-Native/Typescript Project:

```javascript
// eslint.config.js
import {
  commencisReactNativeConfig,
  defineConfig,
} from '@commencis/eslint-config';

export default defineConfig(...commencisReactNativeConfig, {
  /* ... */
});
```

### Example Usage for NextJs/Typescript Project:

```javascript
// eslint.config.js
import { commencisNextConfig, defineConfig } from '@commencis/eslint-config';

export default defineConfig(...commencisNextConfig, {
  ignores: ['.next/', 'next.config.js', 'next-env.d.ts'],
});
```

### Example Usage for Vue/Typescript Project:

```javascript
// eslint.config.js
import { commencisVueConfig, defineConfig } from '@commencis/eslint-config';

export default defineConfig(...commencisVueConfig);
```

`React, NextJs, Vue` configs include `base, typescript, prettier` configs as bundle. You dont have to add them seperately. But also override any rules by your needs.

### Partial Imports

You can also import the configs seperately and merge them if needed on specific cases.

```javascript
// eslint.config.js
import baseConfig from '@commencis/eslint-config/base';
import typescriptConfig from '@commencis/eslint-config/typescript';

export default [...baseConfig, ...typescriptConfig];
```

## References

[ESLint](https://eslint.org/docs/latest/)

[TypeScript-Eslint](https://typescript-eslint.io/packages/typescript-eslint#config)

## Contribution

We welcome contributions to improve this package. Feel free to open issues or pull requests to suggest enhancements or report any issues.

## License

This project is licensed under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0) - see the [LICENSE](./LICENSE) file for details.

© [Commencis](https://www.commencis.com/), 2024. All rights reserved.
