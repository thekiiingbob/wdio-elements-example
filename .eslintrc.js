module.exports = {
  plugins: ['prettier', 'jest', 'sonarjs'],
  extends: ['prettier', 'plugin:sonarjs/recommended', 'eslint:recommended'],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {},
  },
  env: {
    node: true,
    es6: true,
    commonjs: true,
    'jest/globals': true,
  },
}
