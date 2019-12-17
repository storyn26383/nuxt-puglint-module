# nuxt-puglint-module

> PugLint module for Nuxt.js

## Setup

1. Add `nuxt-puglint-module` dependency to your project

```bash
yarn add --dev nuxt-puglint-module # or npm install --save-dev nuxt-puglint-module
```

2. Add `nuxt-puglint-module` to the `buildModules` section of `nuxt.config.js`

:warning: If you are using Nuxt older than **v2.9** you have to install module as a `dependency` (No `--dev` or `--save-dev` flags) and also use `modules` section in `nuxt.config.js` instead of `buildModules`.

```js
export default {
  buildModules: [
    'nuxt-puglint-module'
  ]
}
```

## Configuration

Add `.puglintrc.js` file to your project root

```js
module.exports = {
  disallowClassAttributeWithStaticValue: true,
  disallowClassLiteralsBeforeIdLiterals: true,
  disallowDuplicateAttributes: true,
  disallowHtmlText: true,
  disallowIdAttributeWithStaticValue: true,
  disallowMultipleLineBreaks: true,
  disallowSpacesInsideAttributeBrackets: true,
  requireClassLiteralsBeforeAttributes: true,
  requireIdLiteralsBeforeAttributes: true,
  requireLowerCaseAttributes: true,
  requireLowerCaseTags: true,
  requireSpaceAfterCodeOperator: true,
  requireStrictEqualityOperators: true,
  validateDivTags: true,
  validateIndentation: 2,
  validateAttributeQuoteMarks: '"',
  validateAttributeSeparator: { separator: ', ', multiLineSeparator: ',\n  ' }
}
```
