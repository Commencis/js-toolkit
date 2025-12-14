<picture>
  <source media="(max-width: 400px)" srcset="./assets/js-toolkit-logo-mobile.png">
  <img src="./assets/js-toolkit-logo.png" alt="Commencis JS Toolkit Logo">
</picture>

<h1 align="center">
  Commencis JS Toolkit

[![License: Apache](https://img.shields.io/badge/License-Apache2.0-300E77.svg)](LICENSE)

</h1>

This project is a comprehensive suite of internal packages designed to elevate JavaScript coding standards at [Commencis](https://www.commencis.com/).

The repository is structured as a monorepo, which allows for managing all the packages together in a unified manner. Please follow the information given in each package's own `README` file for integrations and configurations.

## Package Index

| #   | Package                                                          | Version                                                                                                                                                       |
| --- | :--------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🟩  | [`@commencis/commitlint-config`](./packages/commitlint-config)   | [![npm](https://img.shields.io/npm/v/@commencis/commitlint-config?style=flat&label=npm&color=300E77)](https://npmjs.com/package/@commencis/commitlint-config) |
| 🟩  | [`@commencis/eslint-config`](./packages/eslint-config)           | [![npm](https://img.shields.io/npm/v/@commencis/eslint-config?label=npm&color=300E77)](https://npmjs.com/package/@commencis/eslint-config)                    |
| 🟩  | [`@commencis/eslint-plugin`](./packages/eslint-plugin)           | [![npm](https://img.shields.io/npm/v/@commencis/eslint-plugin?label=npm&color=300E77)](https://npmjs.com/package/@commencis/eslint-plugin)                    |
| 🟩  | [`@commencis/stylelint-config`](./packages/stylelint-config)     | [![npm](https://img.shields.io/npm/v/@commencis/stylelint-config?label=npm&color=300E77)](https://npmjs.com/package/@commencis/stylelint-config)              |
| 🟩  | [`@commencis/prettier-config`](./packages/prettier-config)       | [![npm](https://img.shields.io/npm/v/@commencis/prettier-config?label=npm&color=300E77)](https://npmjs.com/package/@commencis/prettier-config)                |
| 🟩  | [`@commencis/lint-staged-config`](./packages/lint-staged-config) | [![npm](https://img.shields.io/npm/v/@commencis/lint-staged-config?label=npm&color=300E77)](https://npmjs.com/package/@commencis/lint-staged-config)          |
| 🟨  | [`@commencis/ts-config`](./packages/ts-config)                   | [![npm](https://img.shields.io/npm/v/@commencis/ts-config?label=npm&color=300E77)](https://npmjs.com/package/@commencis/ts-config)                            |
| 🟧  | `@commencis/browserslist-config`                                 | ![npm](https://img.shields.io/badge/npm----------------grey)                                                                                                  |

## For Contributors:

### Prerequisites

#### Node.js

Before you begin, ensure you have `node: >=24.12` installed on your system.

#### pnpm

This project uses `pnpm@10.25.0` as the package manager. You can install it either by activating with `corepack` which is the recommended way:

```bash
corepack prepare pnpm@10.25.0 --activate
corepack enable pnpm
```

or install globally on your system with npm.

```bash
npm install -g pnpm
```

### Installation

Run the following command to install project dependencies:

```bash
pnpm install
```

### Development

You can run the following command to start development environment:

```bash
pnpm run dev
```

## Contribution

We welcome contributions to improve this project. Feel free to open issues or pull requests to suggest enhancements or report any issues.

> [!IMPORTANT]
> For developers contributing to this project, it's important to familiarize yourself with these tools, as they are integral to the workflow and code quality standards.

## License

This project is licensed under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0) - see the [LICENSE](./LICENSE) file for details.

© [Commencis](https://www.commencis.com/), 2025. All rights reserved.
