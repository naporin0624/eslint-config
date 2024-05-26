import { fixupConfigRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import eslint from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import globals from 'globals'

import reactConfig from './react/eslint.config.js'
import typescriptConfig from './typescript/eslint.config.js'

const compat = new FlatCompat()
const standard = fixupConfigRules(compat.config({ extends: ['standard'] }))

/** @type {import('eslint').Linter.FlatConfig[]} */
const config = [
  eslint.configs.recommended,
  ...standard,
  {
    ignores: ['**/fixtures/**', '**/dist/**', '**/build/**', '**/node_modules/**'],
  },
  {
    files: ['**/*.js', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
    rules: {
      'no-void': 'off',
      'no-unreachable': 'error',
      'no-restricted-imports': ['error', { patterns: ['../'] }],
      'lines-between-class-members': 'off',
      'no-array-constructor': 'off',
      'no-console': 'error',
      'newline-before-return': 'error',
      camelcase: [
        'error',
        {
          ignoreImports: true,
          properties: 'never',
          allow: [],
        },
      ],
    },
  },
  {
    files: ['**/*.js', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      globals: globals.es2021,
    },
    plugins: {
      unicorn: eslintPluginUnicorn,
    },
    rules: {
      'unicorn/prefer-node-protocol': 'error',
      'unicorn/filename-case': ['error', { case: 'kebabCase' }],
      'unicorn/better-regex': 'error',
    },
  },
  ...typescriptConfig,
  ...reactConfig,
  eslintConfigPrettier,
]

export default config
