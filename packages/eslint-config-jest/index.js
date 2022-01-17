/* eslint-disable no-inline-comments */

module.exports = {
  extends: ['plugin:jest/all'],
  env: {
    'jest/globals': true,
  },
  rules: {
    'jest/require-hook': 'off', // not really working, too many false case
    'jest/no-hooks': 'off', // we often use hooks with jest
    'jest/expect-expect': 'off', // don't really work with private expect functions or supertest detection
    'jest/prefer-strict-equal': 'off', // not necessary
    'jest/no-alias-methods': 'off', // we love alias methods
    'jest/prefer-expect-assertions': 'off', // Too many changes to implement for async tests
    'jest/prefer-lowercase-title': 'off', // We like to follow module case
    'jest/prefer-to-be': 'off', // Or not to be, we also use toEqual
    'jest/prefer-called-with': 'off', // toBeCalled is useful too
    'jest/no-done-callback': 'off', // Sometimes done helps us on async test
    'jest/no-test-return-statement': 'off', // not autofixing
    'jest/no-standalone-expect': 'off', // full of bug rule
    'jest/require-to-throw-message': 'off', // We are not always focused on throw error messages
    'jest/prefer-spy-on': 'off', // No way, we should avoid spyon
    'jest/no-conditional-expect': 'off', // a bit complex to fix with try catch
  },
};
