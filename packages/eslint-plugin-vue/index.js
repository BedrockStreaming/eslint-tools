module.exports = {
  configs: {
    default: {
      extends: ['@m6web', 'prettier', 'plugin:vue/recommended'],
      plugins: ['prettier', 'vue'],
      parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2017,
        sourceType: 'module',
      },
      rules: {
        'prettier/prettier': [
          'error',
          {
            singleQuote: true,
            printWidth: 120,
            trailingComma: 'all',
          },
        ],
        'vue/max-attributes-per-line': [
          2,
          {
            singleline: 10,
          },
        ],
        'vue/html-closing-bracket-newline': [
          'error',
          {
            multiline: 'always',
          },
        ],
        'vue/html-closing-bracket-spacing': [
          'error',
          {
            selfClosingTag: 'always',
          },
        ],
      },
    },
  },
};
