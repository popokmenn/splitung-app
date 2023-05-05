module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'react-native/no-inline-styles': 0,
        'object-curly-spacing': ['error', 'never'],
        'prettier/prettier': [
          'error',
          {
            'no-inline-styles': false,
            singleQuote: true,
            parser: 'flow',
          },
        ],
      },
    },
  ],
};
