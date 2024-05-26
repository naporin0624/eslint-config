import { FlatCompat } from '@eslint/eslintrc'
import importPlugin from 'eslint-plugin-import-x'
import unusedImports from 'eslint-plugin-unused-imports'
import globals from 'globals'
import tseslint from 'typescript-eslint'

const compat = new FlatCompat()
const [{ rules: deprecationRules, plugins: deprecationPlugins }] = compat.extends('plugin:deprecation/recommended')

/** @type {import('eslint').Linter.FlatConfig[]} */
const typescriptConfig = [
  ...tseslint.configs.recommended,
  {
    files: ['**/*.js', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parser: tseslint.parser,
      parserOptions: {
        project: true,
      },
      globals: {
        ...globals.es2021,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'import-x': importPlugin,
      'unused-imports': unusedImports,
      ...deprecationPlugins,
    },
    rules: {
      ...importPlugin.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-var-requires': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-array-constructor': 'error',
      '@typescript-eslint/no-unnecessary-condition': 'error',
      '@typescript-eslint/strict-boolean-expressions': 'error',
      '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
      '@typescript-eslint/consistent-generic-constructors': ['error', 'constructor'],
      '@typescript-eslint/array-type': ['error', { default: 'array' }],
      '@typescript-eslint/consistent-type-exports': [
        'error',
        {
          fixMixedExportsWithInlineTypeSpecifier: false,
        },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
        },
      ],
      'import-x/default': 'off',
      'import-x/no-named-as-default-member': 'off',
      'import-x/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
          'newlines-between': 'always',
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: { order: 'asc', caseInsensitive: true },
          pathGroups: [{ pattern: './types/**', group: 'internal', position: 'before' }],
        },
      ],
      'import-x/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '**/*.dev.ts',
            '**/*.test.ts',
            '**/*.test.tsx',
            './*.config.js',
            './*.config.dev.js',
            './*.config.cjs',
            './*.config.dev.cjs',
            './*.config.mjs',
            './*.config.dev.mjs',
            './*.config.ts',
            './*.config.dev.ts',
            '**/*.stories.tsx',
            '**/*.story.tsx',
            'vitest-*',
          ],
        },
      ],
      'unused-imports/no-unused-imports': 'warn',
      ...deprecationRules,
    },
    settings: {
      'import-x/resolver': {
        typescript: true,
        node: true,
      },
      'import-x/parsers': {
        '@typescript-eslint/parser': ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
]

export default typescriptConfig
