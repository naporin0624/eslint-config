module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    project: "tsconfig.json",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint/eslint-plugin", "import", "unused-imports"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
  ],
  root: true,
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": [
      "warn",
      {
        allowHigherOrderFunctions: true,
        allowTypedFunctionExpressions: true,
        allowExpressions: true,
      },
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-misused-promises": "error",
    "@typescript-eslint/consistent-type-exports": [
      "error",
      {
        fixMixedExportsWithInlineTypeSpecifier: false,
      },
    ],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        prefer: "type-imports",
      },
    ],
    "@typescript-eslint/explicit-module-boundary-types": [
      "error",
      {
        allowArgumentsExplicitlyTypedAsAny: false,
        allowDirectConstAssertionInArrowFunctions: true,
        allowHigherOrderFunctions: false,
        allowTypedFunctionExpressions: false,
      },
    ],
    "lines-between-class-members": "off",
    "@typescript-eslint/lines-between-class-members": [
      "error",
      {
        exceptAfterOverload: true,
      },
    ],
    "no-array-constructor": "off",
    "@typescript-eslint/no-array-constructor": ["error"],
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": ["error"],
    "@typescript-eslint/no-unnecessary-condition": ["error"],

    "no-console": "error",

    "unused-imports/no-unused-imports-ts": "warn",

    "import/default": "off",
    "import/no-named-as-default-member": "off",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        "newlines-between": "always",
        pathGroupsExcludedImportTypes: ["builtin"],
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
    "@typescript-eslint/no-misused-promises": [
      "error",
      { checksConditionals: false },
    ],
    "newline-before-return": "error",
    "@typescript-eslint/consistent-generic-constructors": [
      "error",
      "constructor",
    ],
    "@typescript-eslint/array-type": ["error", { default: "array" }],
    "comma-spacing": ["error", { before: false, after: true }],
    semi: ["error", "always"],
    "semi-spacing": ["error", { after: true, before: false }],
    "semi-style": ["error", "last"],
    "no-extra-semi": "error",
    "no-unexpected-multiline": "error",
    "no-unreachable": "error",
  },
  settings: {
    "import/resolver": {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
};
