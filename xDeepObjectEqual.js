/**
 * Deeply compares two objects for equality.
 *
 * @param firstObject The first object to compare.
 * @param secondObject The second object to compare.
 * @returns `true` if the objects are deeply equal, `false` otherwise.
 */
var xDeepObjectEqual = function (firstObject, secondObject) {
    if (firstObject === secondObject) {
        return true;
    }
    if (typeof firstObject !== 'object' || typeof secondObject !== 'object' || firstObject === null || secondObject === null) {
        return false;
    }
    var keys1 = Object.keys(firstObject);
    var keys2 = Object.keys(secondObject);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (var _i = 0, keys1_1 = keys1; _i < keys1_1.length; _i++) {
        var key = keys1_1[_i];
        if (!secondObject.hasOwnProperty(key)) {
            return false;
        }
        if (!xDeepObjectEqual(firstObject[key], secondObject[key])) {
            return false;
        }
    }
    return true;
};