function replaceKeys<S extends Record<string, any>, D extends string>(
  replacementObject: { [Property in keyof S]?: D },
  arrayOfObjects: S[]
) {
  const replacementsObjectKeys = Object.keys(replacementObject);
  const replacementsObjectValues = Object.values(replacementObject);
  const objectOfArray = Object.keys(arrayOfObjects[0]);

  if (arrayOfObjects === undefined) {
    throw new Error(
      "You didn't provived array of objects (JSON) as a second argument. Please provide array of objects on which keys should be replaced"
    );
  }
  if (!Array.isArray(arrayOfObjects) && typeof arrayOfObjects[0] !== "object") {
    throw new Error(
      `Should get array of objects but insead got ${typeof arrayOfObjects}`
    );
  }
  if (replacementsObjectKeys.length > objectOfArray.length) {
    throw new Error(
      `In replacement object you specified ${replacementsObjectKeys.length} keys, but in array of objects the object has ${objectOfArray.length} keys. Both should be equal`
    );
  }
  if (!replacementsObjectKeys.every((key) => typeof key === "string")) {
    throw new Error("All keys in replacement object should be of type string");
  }
  if (!replacementsObjectValues.every((key) => typeof key === "string")) {
    throw new Error(
      "All values in replacement object should be of type string"
    );
  }

  const newArray = arrayOfObjects.map((object) => {
    const obj = {} as any;
    for (const [key, value] of Object.entries(replacementObject)) {
      obj[value] = object[key];
      delete object[key];
    }
    console.log("obj", obj);
    return { ...object, ...obj };
  });

  return newArray;
}

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

type Type = typeof arrayOfObjects;

replaceKeys({ age: "oelg", name: "oleg" }, arrayOfObjects);

module.exports = replaceKeys;
