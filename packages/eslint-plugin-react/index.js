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

        // allow ".js" to be a valid extension for JSX files
        'react/jsx-filename-extension': [
          'error',
          { extensions: ['.js', '.jsx'] },
        ],

        // TODO: remove these rules when next version of Airbnb config will be released
        'react/prefer-stateless-function': [
          'error',
          { ignorePureComponents: true },
        ],
        'react/no-unused-prop-types': ['error', { skipShapeProps: true }],
      },
    },
  },
};
