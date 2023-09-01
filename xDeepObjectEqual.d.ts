/**
 * Deeply compares two objects for equality.
 *
 * @param firstObject The first object to compare.
 * @param secondObject The second object to compare.
 * @returns `true` if the objects are deeply equal, `false` otherwise.
 */
declare function xDeepObjectEqual<T>(firstObject: T, secondObject: T): boolean;

export = xDeepObjectEqual;
