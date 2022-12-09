# @naporin0624/eslint-config

## Usage

neverthrow を使用しているので install する

https://github.com/supermacro/neverthrow#recommended-use-eslint-plugin-neverthrow

```shell
npm install neverthrow
```

`.eslintrc.json`
```json
{
  "extends": ["@naporin0624/eslint-config"]
}
```

`package.json`
```json
"fmt:prettier": "prettier --write src",
"fmt:eslint": "eslint --cache --ext .ts,.tsx --fix src",
"lint": "eslint --cache --ext .ts,.tsx src"
```

### Use default and react config.

`.eslintrc.json`
```json
{
  "extends": ["@naporin0624/eslint-config", "@naporin0624/eslint-config/react"],
  "rules": {
    "react/react-in-jsx-scope": "off"
  }
}
```
