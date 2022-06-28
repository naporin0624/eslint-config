# @naporin0624/eslint-config

## Install
```bash
npm i -D eslint prettier

npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-import-resolver-typescript eslint-plugin-import
```

### For React

```bash
npm i -D eslint-plugin-react eslint-plugin-react-hooks
```

## Example

Use default and react config.

```json
{
  "extends": ["@naporin0624/eslint-config", "@naporin0624/eslint-config/react"],
  "rules": {
    "react/react-in-jsx-scope": "off"
  }
}
```