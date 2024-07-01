# @commencis/ts-config

The `@commencis/ts-config` package provides a set of TypeScript configuration files that can be used as a starting point for TypeScript projects. It includes predefined compiler options, strict type checking, and other recommended settings to ensure a consistent and reliable development experience.

To use this package, simply install it as a dev dependency in your project. Once installed, you can extend the TypeScript configuration in your project's `tsconfig.json` file to inherit the settings provided by `@commencis/ts-config`.

## Installation

To install `@commencis/ts-config`, run the following command:

```sh
npm install --save-dev @commencis/ts-config
```

or

```sh
yarn add --dev @commencis/ts-config
```

or

```sh
pnpm add --save-dev @commencis/ts-config
```

## Usage

After installing `@commencis/ts-config`, you can extend the TypeScript configuration in your project's `tsconfig.json` file. Here's an example of how to do it:

```json
{
  "extends": "@commencis/ts-config",
  "compilerOptions": {
    // Add custom compiler options if needed
  },
  "include": ["src"]
}
```

By extending `@commencis/ts-config`, you inherit the predefined compiler options and other settings, allowing you to focus on writing TypeScript code without worrying about the configuration details.

## Contribution

We welcome contributions to improve this package. Feel free to open issues or pull requests to suggest enhancements or report any issues.

## License

This project is licensed under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0) - see the [LICENSE](./LICENSE) file for details.

© [Commencis](https://www.commencis.com/), 2024. All rights reserved.
