# eslint-tools
Bedrock Streaming's ESLint packages.

## @bedrockstreaming/eslint-config

Eslint config from BedrockStreaming, see documentation [here](./packages/eslint-config/README.md).

## @bedrockstreaming/eslint-plugin-react

Eslint and prettier package from BedrockStreaming, see documentation [here](./packages/eslint-plugin-react/README.md).

## @bedrockstreaming/eslint-plugin-vue

Eslint and prettier package from BedrockStreaming, see documentation [here](./packages/eslint-plugin-vue/README.md).

## Publishing packages

At the root of the project :
- `npm login`
- `yarn lerna publish`

> - :warning: No `yarn lerna version`.
> - :warning: Don't upgrade lerna above `3.14.0`, it causes lerna publish to fail.
