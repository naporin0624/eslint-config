module.exports = {
  parserOptions: {
    jsx: true,
  },
  plugins: ["react-hooks"],
  extends: ["plugin:react/recommended"],
  rules: {
    "react/prop-types": "off",
    "react/display-name": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};