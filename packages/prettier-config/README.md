# @bedrockstreaming/prettier-config

This package shares BedrockStreaming's Prettier configuration independently.

We usually duplicate the Prettier configuration in every project that uses `@bedrockstreaming/eslint-config` by adding a `.prettierrc` file. This is especially necessary when using the Visual Studio Code plugin for Prettier which needs to know the configuration to properly format files. But `eslint-tools` directly embed Prettier's settings in the ESLint configuration preventing the plugin from getting it.

https://github.com/BedrockStreaming/eslint-tools/blob/8df2f5a76bdd623d1dad3d97009ec94bf408ac92/packages/eslint-plugin-react/index.js#L7-L14

So this package allows you to avoid duplicating the few Prettier's rules in your projects.

## Install

### With NPM

```shell
npm install --save-dev @bedrockstreaming/prettier-config
```

### With Yarn

```shell
yarn add -D @bedrockstreaming/prettier-config
```

## Usage

The simplest usage is to add the following line in the `package.json` file.

```json
"prettier": "@bedrockstreaming/prettier-config",
```

This method does not offer a way to extend the configuration to overwrite some properties from the shared configuration. If you need to do that, import the file in a `.prettierrc.js` file and export the modifications, e.g:

```js
module.exports = {
  ...require('@company/prettier-config'),
  semi: false,
};
```
