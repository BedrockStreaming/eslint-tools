# eslint-tools
M6 WEB's ESLint packages.

## @m6web/eslint-config

Eslint config from M6Web, see documentation [here](./packages/eslint-config/README.md).

## @m6web/eslint-plugin-react

Eslint and prettier package from M6Web, see documentation [here](./packages/eslint-plugin-react/README.md).

## @m6web/eslint-plugin-vue

Eslint and prettier package from M6Web, see documentation [here](./packages/eslint-plugin-vue/README.md).

## Publishing packages

At the root of the project :
- `npm login`
- `yarn lerna publish`

> - :warning: No `yarn lerna version`.
> - :warning: Don't upgrade lerna above `3.14.0`, it causes lerna publish to fail.
