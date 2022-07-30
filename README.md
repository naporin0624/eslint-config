# @naporin0624/eslint-config

## Example

neverthrow を使用しているので install する

https://github.com/supermacro/neverthrow#recommended-use-eslint-plugin-neverthrow

```shell
npm install neverthrow
```


```json
{
  "extends": ["@naporin0624/eslint-config"]
}
```

Use default and react config.

```json
{
  "extends": ["@naporin0624/eslint-config", "@naporin0624/eslint-config/react"],
  "rules": {
    "react/react-in-jsx-scope": "off"
  }
}
```
