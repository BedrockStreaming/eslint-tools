# @bedrockstreaming/eslint-config-vue

## Install

### With NPM

```shell
npm install --save-dev @bedrockstreaming/eslint-config-vue
```

### With Yarn

```shell
yarn add -D @bedrockstreaming/eslint-config-vue
```

## Usage

Extends the configuration in the `.eslintrc` or `.eslintrc.json` file at the root of your project.

```json
// For Vue 2:
{
  "extends": "@bedrockstreaming/vue"
}
// or, for Vue 2 using TypeScript:
{
  "extends": ["@bedrockstreaming/vue", "@bedrockstreaming/vue/typescript"],
}
// or, for Vue 3:
{
  "extends": "@bedrockstreaming/vue/vue3"
}
// or, for Vue 3 using TypeScript:
{
  "extends": ["@bedrockstreaming/vue/vue3", "@bedrockstreaming/vue/typescript"],
}
```

### VS Code configuration

For a full linting and formatting experience in [VS Code](https://code.visualstudio.com/),

- install these extensions:

  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - for Vue 2: [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
  - for Vue 3: [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

- then add this setting in your `settings.json` file:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```
