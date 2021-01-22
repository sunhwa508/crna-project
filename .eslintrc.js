module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },

  plugins: ['detox', 'react', 'prettier'],
  overrides: [
    {
      files: ['*.e2e.js'],
      env: {
        'detox/detox': true,
      },
    },
  ],
  rules: {
    'prettier/prettier': 'error',
  },
};
