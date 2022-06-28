module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    project: "tsconfig.json",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint/eslint-plugin", "import"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier"
  ],
  root: true,
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "no-console": "error",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-unused-vars": "error",
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
      { "checksConditionals": false }
    ],
    "newline-before-return": "error",
    "@typescript-eslint/consistent-generic-constructors": [
      "error",
      "constructor"
    ],
    "@typescript-eslint/array-type": ["error", { "default": "array" }],
    "comma-spacing": ["error", { "before": false, "after": true }],
    "semi": ["error", "always"],
    "semi-spacing": ["error", { "after": true, "before": false }],
    "semi-style": ["error", "last"],
    "no-extra-semi": "error",
    "no-unexpected-multiline": "error",
    "no-unreachable": "error"
  },
  settings: {
    "import/resolver": {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
};
