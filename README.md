# Idea

Helps to replace keys of objects in an array of objects

# Installation

`npm i replace-keys`

# Example

Sometimes when we fetch data from an API we get sort of strange keys which doesn't look nice
when we access those keys while iterating over an array of objects.

First argument of the function takes an object where the keys are those which should be replaced by 
new keys and the values are new keys.

Second argument takes an array of objects on which the operation should be done.

```js
const replaceKeys = require("replace-keys");

const data = [
  { "1. Category": "fruit", "2. Type": "citrus" },
  { "1. Category": "vegetable", "2. Type": "Some type" },
];

const replace = replaceKeys(
  { "1. Category": "category", "2. Type": "type" },
  data
);

const result = [
  { category: "fruit", type: "citrus" },
  { category: "vegetable", type: "Some type" },
];

```
