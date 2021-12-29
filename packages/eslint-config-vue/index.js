module.exports = {
  extends: ['plugin:vue/recommended', '@bedrockstreaming'],
  plugins: ['vue'],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  rules: {
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }],
    'import/prefer-default-export': 'off',
    'vue/max-attributes-per-line': [2, { singleline: 10 }],
    'vue/html-closing-bracket-newline': ['error', { multiline: 'always' }],
    'vue/html-closing-bracket-spacing': ['error', { selfClosingTag: 'always' }],
  },
};
