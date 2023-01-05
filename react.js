module.exports = {
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  rules: {
    "react/prop-types": "off",
    "react/display-name": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "react/jsx-no-bind": "error",
    "react/jsx-no-leaked-render": "error",
    "react/jsx-key": ["error", { checkFragmentShorthand: false }],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
