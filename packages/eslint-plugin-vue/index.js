module.exports = {
  configs: {
    default: {
      extends: ['@bedrockstreaming', 'plugin:vue/recommended'],
      plugins: ['vue'],
      parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2017,
        sourceType: 'module',
      },
      rules: {
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
