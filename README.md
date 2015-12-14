# babel-plugin-transform-helper-modules

Externalize references to helpers using `babel-helper-modules`. If you want to
externalize builtins via `core-js`, see `babel-plugin-transform-runtime`.

## Installation

```sh
$ npm install mntnoe/babel-plugin-transform-helper-modules mntnoe/babel-helper-modules
```

## Usage

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
