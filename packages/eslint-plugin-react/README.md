# @m6web/eslint-plugin

The purpose of this package is simple, simplify the configuration of eslint and prettier in our projects.

It provides:

- [@m6web/eslint-config] which inherits from [eslint-config-airbnb]
- [eslint] itself
- [prettier] with all the plugins needed to work with eslint

With that come some little changes from the default config of [eslint-config-airbnb] and [prettier] that you can find in [index.js](index.js) file and [here].

## Setup

```shell
npm install --dev @m6web/eslint-plugin
```

or

```shell
yarn add --dev @m6web/eslint-plugin
```

Then you need to add the plugin in the `.eslintrc` file of your project. For that create a `.eslintrc` and add the following lines:

```json
{
  "extends": "plugin:@m6web/default",
}
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

[eslint]: https://eslint.org/
[prettier]: https://github.com/prettier/prettier
[eslint-config-airbnb]: https://github.com/airbnb/javascript
[@m6web/eslint-config]: https://github.com/M6Web/eslint-tools/tree/master/packages/eslint-config
[here](https://github.com/M6Web/eslint-tools/blob/master/packages/eslint-config/index.js)
