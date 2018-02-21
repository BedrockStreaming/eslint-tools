![build status](https://travis-ci.org/M6Web/eslint-config-m6web.svg?branch=master)

## Setup

```shell
npm install @m6web/eslint-config
```

or

```shell
yarn add @m6web/eslint-config
```

## Usage

Extends the configuration in the `.eslintrc` file at the root of your project.

```json
{
  "extends": "@m6web"
}
```

Here are some envs you can add depending your project:

```json
"env": {
  "browser" : true,
  "jasmine": true
}
```
