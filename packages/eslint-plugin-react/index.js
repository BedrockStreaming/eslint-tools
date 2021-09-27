module.exports = {
  configs: {
    default: {
      extends: ['airbnb', '@bedrockstreaming', 'prettier', 'prettier/react'],
      plugins: ['react', 'prettier', 'react-hooks'],
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
        'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
        // prefer "<></>" syntax over <React.Fragment></React.Fragment>
        'react/jsx-fragments': ['error', 'syntax'],

        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',

        // TODO: remove these rules when next version of Airbnb config will be released
        'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],
        'react/no-unused-prop-types': ['error', { skipShapeProps: true }],
      },
    },
  },
};
