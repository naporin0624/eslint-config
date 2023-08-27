---
"@naporin0624/eslint-config": minor
---

**Enhancements:**

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
