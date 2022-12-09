module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/prefere-default-export': ['off'],
    'react/require-default-props': ['off'],
    'default-param-last': ['off'],
    'linebreak-style': ['off'],
  },
};
