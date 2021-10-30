var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function replaceKeys(replacementObject, arrayOfObjects) {
    var replacementsObjectKeys = Object.keys(replacementObject);
    var replacementsObjectValues = Object.values(replacementObject);
    var objectOfArray = Object.keys(arrayOfObjects[0]);
    if (arrayOfObjects === undefined) {
        throw new Error("You didn't provived array of objects (JSON) as a second argument. Please provide array of objects on which keys should be replaced");
    }
    if (!Array.isArray(arrayOfObjects) && typeof arrayOfObjects[0] !== "object") {
        throw new Error("Should get array of objects but insead got " + typeof arrayOfObjects);
    }
    if (replacementsObjectKeys.length > objectOfArray.length) {
        throw new Error("In replacement object you specified " + replacementsObjectKeys.length + " keys, but in array of objects the object has " + objectOfArray.length + " keys. Both should be equal");
    }
    if (!replacementsObjectKeys.every(function (key) { return typeof key === "string"; })) {
        throw new Error("All keys in replacement object should be of type string");
    }
    if (!replacementsObjectValues.every(function (key) { return typeof key === "string"; })) {
        throw new Error("All values in replacement object should be of type string");
    }
    var newArray = arrayOfObjects.map(function (object) {
        var obj = {};
        for (var _i = 0, _a = Object.entries(replacementObject); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            obj[value] = object[key];
            delete object[key];
        }
        return __assign(__assign({}, object), obj);
    });
    return newArray;
}
module.exports = replaceKeys;
