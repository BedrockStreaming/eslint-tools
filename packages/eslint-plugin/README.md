# Eslint-plugin-m6web-tools
The purpose of this package is simple, simplify the configuration of eslint and prettier in our projects.

It provides:
- [eslint-config-m6web](https://github.com/M6Web/eslint-config-m6web) which inherits from [eslint-config-airbnb](https://github.com/airbnb/javascript)
- [eslint](https://eslint.org/) itself
- [prettier](https://github.com/prettier/prettier) with all the plugins needed to work with eslint

With that come some little changes from the default config of [eslint-config-airbnb](https://github.com/airbnb/javascript) and [prettier](https://github.com/prettier/prettier) that you can find in [index.js](/dist/index.js) file and [here](https://github.com/M6Web/eslint-config-m6web/blob/master/index.js).

## Setup

```shell
npm install --dev @m6web/eslint-plugin-tools
```

or

```shell
yarn add --dev @m6web/eslint-plugin-tools
```

Then you need to add the plugin in the `.eslintrc` file of your project. For that create a `.eslintrc` and add the following lines:
```json
  "extends": "plugin:m6web-tools/m6web",
  "plugins": [
    "m6web-tools"
  ],
```

And that's all.

If you want to customize some rules, follow the [eslint documentation](https://eslint.org/docs/user-guide/configuring).

### Jest / Jasmine Support

If you want, you can add the jest support with the following lines:

```json
{
  "env": {
    "browser": true,
    "jasmine": true
  }
}
```

## Usage
Lint your code:
```shell
yarn eslint src/
```

Rewrite your code, the right way :smiling_imp::
```shell
yarn prettier-eslint -- --write 'src/**/*.js'
```
