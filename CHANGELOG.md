# @naporin0624/eslint-config

## 0.13.1

### Patch Changes

- ee462f6: update eslint typescript parser version

## 0.13.0

### Minor Changes

- eab79b9: **Enhancements:**

  1. Added the `deprecation` ESLint plugin to the configuration.
  2. Enhanced TypeScript linting rules:
     - Enabled `@typescript-eslint/no-unused-vars` with specific patterns for ignoring certain variables and arguments.
     - Added `camelcase` rule with configurations for imports and properties.
     - Introduced a warning for deprecated items using `deprecation/deprecation` rule.
  3. Updated React linting rules:
     - Enforced no usage of object type as default prop with `react/no-object-type-as-default-prop`.
     - Enforced spacing around JSX equals with `react/jsx-equals-spacing`.
     - Prohibited using array index as a key with `react/no-array-index-key`.
     - Enforced no usage of useless fragments with `react/jsx-no-useless-fragment`.
     - Defined function component definitions with `react/function-component-definition`.
     - Enforced handler naming conventions with `react/jsx-handler-names`.

  **Dependencies:**

  - Bumped `@naporin0624/eslint-config` to version `0.12.0`.
  - Added `eslint-plugin-deprecation` version `1.5.0`.

- b112464: update pacakge version

## 0.12.0

### Minor Changes

- b3f2d1b: upgrade pacakges

## 0.11.0

### Minor Changes

- 94f5e2f: add strict-boolean-expressions

## 0.10.0

### Minor Changes

- 37aafd5: update eslint config & eslint-config dependencies

## 0.9.0

### Minor Changes

- c7c3275: add prefer-node-protocol rule

## 0.8.5

### Patch Changes

- 842a9fd: test

## 0.8.4

### Patch Changes

- 84ffe23: update ci
