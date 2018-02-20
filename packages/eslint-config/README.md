![build status](https://travis-ci.org/M6Web/eslint-config-m6web.svg?branch=master)

## Setup

```shell
npm install eslint-config-m6web
```

or 

```shell
yarn add eslint-config-m6web
```

## Usage

Extends the configuration in the `.eslintrc` file at the root of your project.
```json
{
  "extends": "m6web"
}
```

Here are some envs you can add depending your project:
```json
"env": {
  "browser" : true,
  "jasmine": true
}
```

## Test

```shell
yarn lint
```

## Release

```shell
yarn release -- <version>
```
