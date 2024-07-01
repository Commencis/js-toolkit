# @commencis/commitlint-config

This package provides the Commitlint configuration for enforcing commit message conventions within Commencis projects. With predefined rules, it ensures consistency and clarity across commit messages.

## Installation

To use this Commitlint configuration in your project, simply install it as a dev dependency:

With `npm`:

```sh
npm install --save-dev @commitlint/cli @commencis/commitlint-config
```

With `yarn`:

```sh
yarn add --dev @commitlint/cli @commencis/commitlint-config
```

With `pnpm`:

```sh
pnpm add --save-dev @commitlint/cli @commencis/commitlint-config
```

### Recommended: Use Husky for Git-Hooks

Install dependencies

```sh
npm install --save-dev husky
```

Initialize husky and create your `./husky/commit-msg` hook as follows:

```sh
npx --no-install commitlint --edit "$1"
```

## Usage

Once installed, you can reference this configuration in your project's Commitlint configuration file, typically named `commitlint.config.js`.

```javascript
module.exports = {
  extends: ['@commencis/commitlint-config'],
};
```

## Contribution

We welcome contributions to improve this package. Feel free to open issues or pull requests to suggest enhancements or report any issues.

## License

This project is licensed under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0) - see the [LICENSE](./LICENSE) file for details.

© [Commencis](https://www.commencis.com/), 2024. All rights reserved.
