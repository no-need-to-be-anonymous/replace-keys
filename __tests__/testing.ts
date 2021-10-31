import {replaceKeys} from 'replace-keys'

const arrayOfObjects = [
  {
    name: "Oleg",
    age: 24,
  },
  {
    name: "Ivan",
    age: 50,
  },
];

const result = replaceKeys({ name: 'fsd',age: 'dfs' }, arrayOfObjects);

console.log("result ", result);
