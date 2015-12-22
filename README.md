babel-plugin-transform-helper-modules
=====================================

Externalize references to helpers using [babel-helper-modules](https://www.npmjs.com/package/babel-helper-modules).

If you want to externalize builtins too via [core-js](https://www.npmjs.com/package/core-js)'s library, see the official plugin [babel-plugin-transform-runtime](https://www.npmjs.com/package/babel-plugin-transform-runtime).

## Installation

```sh
$ npm install babel-plugin-transform-helper-modules babel-helper-modules
```

## Usage

Remember to also install [babel-helper-modules](https://www.npmjs.com/package/babel-helper-modules). when using the transpiled code.

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["transform-helper-modules"]
}
```

### Via CLI

```sh
$ babel --plugins transform-helper-modules script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["transform-helper-modules"]
});
```
