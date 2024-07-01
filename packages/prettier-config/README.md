# @commencis/prettier-config

This package provides the Prettier configuration for standardizing code formatting within Commencis projects. With predefined settings, it ensures consistency and readability across codebases.

## Installation

To use this Prettier configuration in your project, simply install it as a dev dependency:

With `npm`:

```sh
npm install --save-dev @commencis/prettier-config
```

With `yarn`:

```sh
yarn add --dev @commencis/prettier-config
```

With `pnpm`:

```sh
pnpm add --save-dev @commencis/prettier-config
```

## Usage

Once installed, you can reference this configuration in your project's Prettier configuration file, typically named `prettier.config.js`.

#### ES Module (ESM) Usage:

```javascript
import commencisPrettierConfig from '@commencis/prettier-config';

export default commencisPrettierConfig;
```

#### CommonJS (CJS) Usage:

```javascript
module.exports = require('@commencis/prettier-config');
```

#### Ignore Files with `.prettierignore`

If you have files or directories that should be excluded from Prettier formatting (e.g., build output, logs), create a .prettierignore file in your project root and list them there.

Example `.prettierignore` file:

```ini
# pnpm
pnpm-lock.yaml

# production
dist/

# test
coverage/

```

## Contribution

We welcome contributions to improve this package. Feel free to open issues or pull requests to suggest enhancements or report any issues.

## License

This project is licensed under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0) - see the [LICENSE](./LICENSE) file for details.

© [Commencis](https://www.commencis.com/), 2024. All rights reserved.
