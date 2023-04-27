/** @type {import("eslint").Linter.Config} */
const config = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    project: "tsconfig.json",
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint/eslint-plugin",
    "import",
    "unused-imports",
    "import-access",
    "regexp",
    "neverthrow",
    "unicorn",
  ],
  extends: [
    "eslint:recommended",
    "standard",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:regexp/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  root: true,
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/no-use-before-define": "off",
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
    "@typescript-eslint/no-floating-promises": ["error"],
    "no-console": "error",

    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports-ts": "warn",

    "import/default": "off",
    "import/no-named-as-default-member": "off",
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"],
        "newlines-between": "always",
        pathGroupsExcludedImportTypes: ["builtin"],
        alphabetize: { order: "asc", caseInsensitive: true },
        pathGroups: [{ pattern: "src/types/**", group: "internal", position: "before" }],
      },
    ],
    "newline-before-return": "error",
    "@typescript-eslint/consistent-generic-constructors": ["error", "constructor"],
    "@typescript-eslint/array-type": ["error", { default: "array" }],
    "no-unreachable": "error",
    "import-access/jsdoc": ["error"],
    "neverthrow/must-use-result": "error",

    "no-void": "off", // void main() を使えるようにする(floating-promise との互換性担保)
    "no-restricted-imports": ["error", { patterns: ["../"] }], // 相対 path で親をたどるのを禁止
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/*.dev.ts",
          "**/*.test.ts",
          "**/*.test.tsx",
          "./*.config.js",
          "./*.config.dev.js",
          "./*.config.cjs",
          "./*.config.dev.cjs",
          "./*.config.mjs",
          "./*.config.dev.mjs",
          "./*.config.ts",
          "./*.config.dev.ts",
          "**/*.stories.tsx",
          "**/*.story.tsx",
          "vitest-*",
        ],
      },
    ],
    "unicorn/prefer-node-protocol": "error",
  },
  overrides: [
    {
      files: [
        "**/*.test.ts",
        "**/*.test.tsx",
        "**/__tests__/**/*.ts",
        "**/__tests__/**/*.tsx",
        "**/__test__/**/*.ts",
        "**/__test__/**/*.tsx",
      ],
      rules: {
        "no-console": "off",
        "neverthrow/must-use-result": "off",
      },
    },
  ],
  settings: {
    "import/resolver": {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
};

module.exports = config;
