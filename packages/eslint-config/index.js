module.exports = {
  "extends": [
    "airbnb",
  ],
  "plugins": [
    "react",
  ],
  "env": {
    "node": true
  },
  "rules": {
    // use "_this" as a  variable to pass "this" instance if it's needed
    "consistent-this": ["error", "_this"],

    // don't allow "if" on a single line
    "curly": ["error", "all"],

    // function name are required, this is not just a warning
    "func-names": "error",

    // line length
    "max-len": ['error', 120, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true
    }],

    // new line before return statement is required
    "newline-before-return": "error",

    // console statements don't warn, this is forbidden 
    "no-console": "error",

    // inline comments are forbidden
    "no-inline-comments": "error",

    // prefer destructuring on object declaration only
    "prefer-destructuring": [
      "error",
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

    // allow ".js" to be a valid extension for JSX files
    "react/jsx-filename-extension": ["error", {"extensions": [".js", ".jsx"]}],

    // TODO: remove these rules when next version of Airbnb config will be released
    "react/prefer-stateless-function": ["error", {"ignorePureComponents": true}],
    "react/no-unused-prop-types": ["error", {"skipShapeProps": true}]
  }
};
