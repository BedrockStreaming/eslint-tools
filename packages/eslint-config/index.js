module.exports = {
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  env: {
    node: true,
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

    // use "_this" as a  variable to pass "this" instance if it's needed
    'consistent-this': ['error', '_this'],

    // don't allow "if" on a single line
    curly: ['error', 'all'],

    // function name are required, this is not just a warning
    'func-names': 'error',

    // line length
    'max-len': [
      'error',
      120,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],

    // new line before return statement is required
    'newline-before-return': 'error',

    // console statements don't warn, this is forbidden
    'no-console': 'error',

    // inline comments are forbidden
    'no-inline-comments': 'error',

    // prefer destructuring on object declaration only
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],

    // No if(!foo) {} else {} and things like this
    'no-negated-condition': 'error',
  },
};
