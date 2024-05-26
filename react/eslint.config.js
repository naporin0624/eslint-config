import a11yPlugin from 'eslint-plugin-jsx-a11y'
import reactPlugin from 'eslint-plugin-react'
import hooksPlugin from 'eslint-plugin-react-hooks'

/** @type {import('eslint').Linter.FlatConfig[]} */
const eslintConfigReact = [
  {
    files: ['**/*.jsx', '**/*.tsx'],
    ...reactPlugin.configs.recommended,
  },
  {
    files: ['**/*.jsx', '**/*.tsx'],
    ...hooksPlugin.configs.recommended,
  },
  {
    files: ['**/*.jsx', '**/*.tsx'],
    ...a11yPlugin.configs.recommended,
  },
  {
    files: ['**/*.jsx', '**/*.tsx'],
    plugins: {
      react: reactPlugin,
      'react-hooks': hooksPlugin,
    },
    rules: {
      'react/prop-types': 'off',
      'react/display-name': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
      'react/jsx-no-bind': 'error',
      'react/jsx-no-leaked-render': 'error',
      'react/jsx-key': ['error', { checkFragmentShorthand: false }],
      'react/no-object-type-as-default-prop': 'error',
      'react/jsx-equals-spacing': 'error',
      'react/no-array-index-key': 'error',
      'react/jsx-no-useless-fragment': 'error',
      'react/function-component-definition': [
        2,
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/jsx-handler-names': [
        'error',
        {
          eventHandlerPrefix: '(handle|on|set)',
          eventHandlerPropPrefix: 'on',
          checkLocalVariables: false,
          checkInlineFunction: false,
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]

export default eslintConfigReact
