# `@bedrockstreaming/eslint-config-jest`

Based on [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest) list of rule with some adaptations base on codestyle at Bedrockstreaming.
This plugin also includes default rules from [eslint-plugin-testing-library](https://github.com/testing-library/eslint-plugin-testing-library).
Only a subset of rules are selected.
Check [configuration file](./index.js) to understand which rule is disabled and why.

## Install

### With NPM

```shell
npm install --save-dev @bedrockstreaming/eslint-config-jest
```

### With Yarn

```shell
yarn add -D @bedrockstreaming/eslint-config-jest
```

## Usage

Extends the configuration in the `.eslintrc` file at the root of your project.

```json
{
  "extends": "@bedrockstreaming/eslint-config-jest"
}
```
