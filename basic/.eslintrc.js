module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'semi': 'off',
    'func-names': 'off',
    'no-restricted-syntax': 'off',
    'no-plusplus': 'off',
    'prefer-const': 'off',
    'no-unused-vars': 'off',
    'no-var': 'off',
    'global-require': 'off',
    'eqeqeq': 'off',
    'prefer-spread': 'off',
    'no-underscore-dangle': 'off',
    'max-len': 'off',
    'no-unused-expressions': 'off',
    'consistent-return': 'off',
    'no-return-assign': 'off',
    'no-param-reassign': 'off',
    'prefer-destructuring': 'off',
    'no-new-func': 'off',
    'guard-for-in': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-shadow': 'off'
  },
};
