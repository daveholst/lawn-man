module.exports = {
  env: {
    browser: true
  },
  extends: ['wesbos', 'plugin:import/typescript'],
  parserOptions: {
    allowImportExportEverywhere: true
  },
  rules: {
    'class-methods-use-this': 0,
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
  },
  settings: {
    // 'import/resolver': {
    //   'typescript': {},
    // },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['wesbos/typescript'],
      rules: {
        'class-methods-use-this': 1,
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        // hard mode
        // noImplicitAny: true,
        // strictNullChecks: true,
        // noImplicitThis: true,
        // alwaysStrict: 1,
        '@typescript-eslint/naming-convention': [
          'warn',
          {
            selector: 'property',
            format: ['camelCase'],
          },
        ],
      },
    },
  ],
};
