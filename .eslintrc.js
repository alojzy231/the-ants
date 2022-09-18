module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:unicorn/recommended',
    'plugin:sonarjs/recommended',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'arrow-body-style': ['error'],
    'unicorn/filename-case': 'off',
    'unicorn/prevent-abbreviations': ['error', { replacements: { props: false, ref: false } }],
    'unicorn/no-null': 'off',
    'unicorn/prefer-top-level-await': 'off',
    'sort-destructure-keys/sort-destructure-keys': 'error',
    'sort-keys-fix/sort-keys-fix': 'error',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
        groups: ['builtin', 'external', 'internal', 'parent', ['sibling', 'index']],
        pathGroupsExcludedImportTypes: ['react'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
          { group: 'internal', pattern: '@api/**' },
          { group: 'internal', pattern: '@components/**' },
          { group: 'internal', pattern: '@config/**' },
          { group: 'internal', pattern: '@consts/**' },
          { group: 'internal', pattern: '@features/**' },
          { group: 'internal', pattern: '@hooks/**' },
          { group: 'internal', pattern: '@layouts/**' },
          { group: 'internal', pattern: '@public/**' },
          { group: 'internal', pattern: '@styles/**' },
          { group: 'internal', pattern: '@testing/**' },
          { group: 'internal', pattern: '@utils/**' },
          {
            pattern: '@assets/**',
            group: 'internal',
            position: 'after',
          },
        ],
      },
    ],
    'import/newline-after-import': ['error', { count: 1 }],
    'react/jsx-sort-props': 'error',
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
  },
  overrides: [
    {
      files: ['.eslintrc.js', 'next.config.js', 'jest.config.js'],
      rules: {
        'unicorn/prefer-module': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react', 'plugin:jest-dom/recommended'],
    },
    {
      files: '**.stories.[jt]s?(x)',
      rules: {
        'sort-keys-fix/sort-keys-fix': 'off',
      },
    },
  ],
  plugins: ['sort-destructure-keys', 'sort-keys-fix'],
};
