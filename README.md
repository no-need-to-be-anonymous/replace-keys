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
import { replaceKeys } from "replace-keys";

const data = [
  { "1. OOP": true, "2. Backend": "cool" },
  { "1. OOP": "interesting", "2. Backend": "one love" },
  { "1. OOP": "best paradigm", "2. Backend": "fascinating" },
];

const replace = replaceKeys({ "1. OOP": "FP", "2. Backend": "frontend" }, data);

const result = [
  { FP: true, frontend: "cool" },
  { FP: "interesting", frontend: "one love" },
  { FP: "best paradigm", frontend: "fascinating" },
];
```
