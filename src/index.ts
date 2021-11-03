export function replaceKeys<
  S extends Record<string, any>,
  D extends string | number
>(replacementObject: { [Property in keyof S]?: D }, arrayOfObjects: S[]) {
  const replacementsObjectKeys = Object.keys(replacementObject);
  const replacementsObjectValues = Object.values(replacementObject);
  const objectOfArray = Object.keys(arrayOfObjects[0]);

  if (arrayOfObjects === undefined) {
    throw new Error(
      "You didn't provived array of object as a second argument. Please provide array of objects on which keys should be replaced"
    );
  }
  if (!Array.isArray(arrayOfObjects)) {
    throw new Error(
      `Should get array of objects but insead got ${typeof arrayOfObjects}`
    );
  }
  if (replacementsObjectKeys.length > objectOfArray.length) {
    throw new Error(
      `In replacement object you specified ${replacementsObjectKeys.length} keys, but in array of objects the object has ${objectOfArray.length} keys. Both should be equal`
    );
  }

  const newArray = arrayOfObjects.map((object) => {
    const obj = {} as any;
    for (const [key, value] of Object.entries(replacementObject)) {
      obj[value] = object[key];
      delete object[key];
    }
    return { ...object, ...obj };
  });

  return newArray;
}
