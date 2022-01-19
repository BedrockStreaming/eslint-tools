# eslint-tools

This monorepo aims to mutualize the ESLint and Prettier configurations used in all Bedrock Streaming projects.

It contains 4 packages:

- [@bedrockstreaming/eslint-config]

  Contains all the ESLint and Prettier base rules for any Javascript project. It extends the configuration provided by the [eslint-config-airbnb-base] module and adds or modifies some rules according to Bedrock Streaming projects needs (e.g. it sets lines to 120 characters instead of 80).

- [@bedrockstreaming/eslint-config-react]

  Contains ESLint rules for React projects. It extends the configuration from [@bedrockstreaming/eslint-config] but also [eslint-config-airbnb].

- [@bedrockstreaming/eslint-config-vue]

  Contains ESLint rules for Vue projects. It extends the configuration from [@bedrockstreaming/eslint-config] but also [eslint-plugin-vue]'s plugin recommended rules.

- [@bedrockstreaming/prettier-config]

  Contains the Prettier configuration used in the project [@bedrockstreaming/eslint-config].

## Migrating to version 4

The version 4 of `eslint-tools` introduces two importants structural changes:

- **From _plugin_ to _config_**

  Because `@bedrockstreaming/eslint-plugin-react` and `@bedrockstreaming/eslint-plugin-vue` are just ESLint configuration and don't bring any plugin's feature (like creating rules), these two packages will be renamed as respectively `@bedrockstreaming/eslint-config-react` and `@bedrockstreaming/eslint-config-vue`.

  It actually doesn't imply a lot of stuff except changing the way to extend these packages in the local ESLint configuration the following way:

  ```diff
   {
  -  "extends": "plugin:@bedrockstreaming/eslint-config-react/default"
  +  "extends": "@bedrockstreaming/eslint-config-react"
   }
  ```

  _Or using the shorthand way:_

  ```diff
   {
  -  "extends": "plugin:@bedrockstreaming/eslint-config-react/default"
  +  "extends": "@bedrockstreaming/react"
   }
  ```

- **From _M6 WEB_ to _Bedrock Streaming_**

  In the wake of renaming stuff from "m6web" to "bedrock streaming", the packages are now available under the NPM scope @bedrockstreaming instead of @m6web. So...

  `@m6web/eslint-config` becomes `@bedrockstreaming/eslint-config`  
  `@m6web/eslint-plugin-react` becomes `@bedrockstreaming/eslint-config-react`  
  `@m6web/eslint-plugin-vue` becomes `@bedrockstreaming/eslint-config-vue`

  Note that the version 3.5.0 previously available through `@m6web` scope will also be available through `@bedrockstreaming` allowing people changing without moving to version 4.

## Contributing

### Installing

Clone the repository and install dependencies:

```
$ yarn install
```

### Testing

To test your changes there are two ways:

- You can execute the `eslint` command in one of the folders under the `./tests` directory.

  For instance, if you've made changes in the `eslint-config-react` package, execute the following command:

  ```
  $ yarn eslint tests/react
  ```

  Because `eslint-tools` uses for itself the configuration defined in the packages, you can simply launch the command `yarn lint` which will run ESLint on the whole project's files.

  If you need a concrete use case of a rule you set don't hesitate to update files in the `./tests` directory as needed.

- You can publish your changes in a NPM's pre-version.

  > **Note that you'll have to access to the @bedrockstreaming organization for that. Please contact the maintainers before.**.

  To do that, start by committing your changes on your branch (you won't have to push them) and execute the following command:

  ```
  $ yarn lerna publish --no-push <pre-version>
  ```

  Example:

  ```
  $ yarn lerna publish --no-push v4.3.0-beta.1
  ```

  The `--no-push` option allows you to publish the pre-version without pushing anything. Lerna creates a "bumping" commit that changes versions contained in files like `package.json` or `lerna.json`. You can remove that commit before continuing.

### Publishing

In order to publish, owners of this repository can trigger the release Github action workflow.
It will automatically check commit from master branch if you follow conventional commit names.
Changelog will be published on a Github Release.
It will also publish all the code directly to NPM.

[@bedrockstreaming/eslint-config]: packages/eslint-config/README.md
[@bedrockstreaming/eslint-config-react]: packages/eslint-config-react/README.md
[@bedrockstreaming/eslint-config-vue]: packages/eslint-config-vue/README.md
[@bedrockstreaming/prettier-config]: packages/prettier-config/README.md
[eslint-config-airbnb-base]: https://www.npmjs.com/package/eslint-config-airbnb-base
[eslint-config-airbnb]: https://www.npmjs.com/package/eslint-config-airbnb
[eslint-plugin-vue]: https://www.npmjs.com/package/eslint-plugin-vue
