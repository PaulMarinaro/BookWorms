module.exports = {
  extends: "airbnb",
  env: {
    browser: true
  },
  globals: {
    angular: false,
  },
  rules: {
    'import/extensions': 0,
    'react/destructuring-assignment': 1,
    'react/jsx-one-expression-per-line': 0,
    // "indent": ["error", "tab"],
  }
};