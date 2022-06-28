# @naporin0624/eslint-config

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

```
eslint --cache --fix src && prettier --write src
```