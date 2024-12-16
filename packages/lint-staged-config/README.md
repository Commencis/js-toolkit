# @commencis/lint-staged-config

A reusable configuration package that streamlines linting for staged files, ensuring code quality and formatting with tools like ESLint, Prettier, and TypeScript. It simplifies setup, promotes consistency across projects, and enforces best practices before commits, making it an essential tool for modern development workflows.

## Installation

To use this Lint-Staged configuration in your project, simply install it as a dev dependency:

With `npm`:

```sh
npm install --save-dev lint-staged @commencis/lint-staged-config
```

With `yarn`:

```sh
yarn add --dev lint-staged @commencis/lint-staged-config
```

With `pnpm`:

```sh
pnpm add --save-dev lint-staged @commencis/lint-staged-config
```

### Recommended: Use Husky for Git-Hooks

Install dependencies

```sh
npm install --save-dev husky
```

Add your custom script into your `package.json``

```json
"scripts":{
  "precommit": "lint-staged"
}
```

Initialize husky with `npx husky init` and create your `./husky/pre-commit` hook as follows:

```sh
pnpm run precommit
# Use npm or yarn as per your choice (replace 'pnpm' accordingly)
```

## Ready-to-Use Configurations

- `baseConfig`: Includes Prettier formatting for `json` and `md` files.

- `typescriptConfig`: Extends baseConfig with linting commands for TypeScript using ESLint and Prettier.

- `reactConfig`: Builds on typescriptConfig and adds style-related linting commands.

- `reactNativeConfig`: Extends typescriptConfig for React Native projects.

- `nextConfig`: Extends typescriptConfig with style-related linting for Next.js projects.

- `vueConfig`: Extends typescriptConfig with support for Vue files and style-related linting.

> The `GLOBS` and `COMMANDS` objects are also exported to allow consistent and customizable overrides.

## Usage

Once installed, you can reference this configuration in your project's Lint-Staged configuration file, typically named `lint-staged.config.js`.

> To use ESM syntax, ensure your `package.json` includes `"type": "module"`. Otherwise, use the `.mjs` extension for ESM files or stick to CommonJS syntax with `require('@commencis/lint-staged-config')`.

### Without any overrides:

Use the default configuration as-is:

```javascript
export { typescriptConfig as default } from '@commencis/lint-staged-config';
```

### Flexible object:

Customize the configuration by extending it:

```javascript
import { reactConfig } from '@commencis/lint-staged-config';

export default {
  ...reactConfig,
};
```

### With project-specific overrides & extensions:

Add or override specific commands to fit your project’s needs:

```javascript
import { reactConfig } from '@commencis/lint-staged-config';

export default {
  ...reactConfig,
  [GLOBS.MDX]: ['markdownlint-cli2 --fix'],
  'package.json': 'sort-package-json',
  '*.test.ts(x)': 'jest --bail --findRelatedTests',
};
```

## Contribution

We welcome contributions to improve this package. Feel free to open issues or pull requests to suggest enhancements or report any issues.

## License

This project is licensed under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0) - see the [LICENSE](./LICENSE) file for details.

© [Commencis](https://www.commencis.com/), 2024. All rights reserved.
