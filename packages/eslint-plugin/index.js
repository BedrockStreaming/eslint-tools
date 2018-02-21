module.exports = {
  configs: {
    default: {
      extends: ['@m6web', 'prettier', 'prettier/react'],
      plugins: ['react', 'prettier'],
      rules: {
        'prettier/prettier': [
          'error',
          {
            singleQuote: true,
            printWidth: 120,
            trailingComma: 'all',
          },
        ],
      },
    },
  },
};
