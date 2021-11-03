import { replaceKeys } from "replace-keys";

const mockedInput = [
  { "1. OOP": true, "2. Backend": "cool" },
  { "1. OOP": "interesting", "2. Backend": "one love" },
  { "1. OOP": "best paradigm", "2. Backend": "fascinating" },
];

const mockedOutput = [
  { FP: true, frontend: "cool" },
  { FP: "interesting", frontend: "one love" },
  { FP: "best paradigm", frontend: "fascinating" },
];

describe("it tests if errors are thrown", () => {
  it("throws an error when no second argument is provided", () => {
    expect(() =>
      replaceKeys({ "1. OOP": "FP", "2. Backend": "frontend" })
    ).toThrow();
  });

  it("throws an error when second argument is not an array type", () => {
    expect(() =>
      replaceKeys({ "1. OOP": "FP", "2. Backend": "frontend" }, "string")
    ).toThrow("Should get array of objects but insead got string");
  });

  it("throws an error when there is more keys than in objects in array", () => {
    expect(() =>
      replaceKeys(
        { "1. OOP": "FP", "2. Backend": "frontend", "3. additional": "haha" },
        mockedInput
      )
    ).toThrowError(
      "In replacement object you specified 3 keys, but in array of objects the object has 2 keys. Both should be equal"
    );
  });
});

describe("function is working correctly", () => {
  it("correctly replaces keys", () => {
    const result = replaceKeys(
      { "1. OOP": "FP", "2. Backend": "frontend" },
      mockedInput
    );

    expect(result).toEqual(mockedOutput);
  });
});
