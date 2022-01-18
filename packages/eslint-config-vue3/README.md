# @bedrockstreaming/eslint-config-vue3

## Install

### With NPM

```shell
npm install --save-dev @bedrockstreaming/eslint-config-vue3
```

### With Yarn

```shell
yarn add -D @bedrockstreaming/eslint-config-vue3
```

## Usage

### ESLint configuration

Extends the configuration in the `.eslintrc` or `.eslintrc.json` file at the root of your project.

```json
{
  "extends": "@bedrockstreaming/vue3"
}
```

### VS Code configuration

For a full linting and formatting experience in [VS Code](https://code.visualstudio.com/),

- install these extensions:

  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)

- then add this setting in your `settings.json` file:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```
