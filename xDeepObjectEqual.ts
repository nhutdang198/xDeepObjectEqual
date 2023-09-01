/**
 * Deeply compares two objects for equality.
 *
 * @param firstObject The first object to compare.
 * @param secondObject The second object to compare.
 * @returns `true` if the objects are deeply equal, `false` otherwise.
 */
export function xDeepObjectEqual(firstObject: any, secondObject: any): boolean {
  if (firstObject === secondObject) {
    return true;
  }
  if (typeof firstObject !== 'object' || typeof secondObject !== 'object' || firstObject === null || secondObject === null) {
    return false;
  }
  const keys1 = Object.keys(firstObject);
  const keys2 = Object.keys(secondObject);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    if (!secondObject.hasOwnProperty(key)) {
      return false;
    }
    if (!xDeepObjectEqual(firstObject[key], secondObject[key])) {
      return false;
    }
  }
  for (const key of keys2) {
    if (!firstObject.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}