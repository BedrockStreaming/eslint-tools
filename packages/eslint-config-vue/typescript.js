module.exports = {
  extends: ['@bedrockstreaming/eslint-config/typescript'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
