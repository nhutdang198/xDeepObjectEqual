import { xDeepObjectEqual } from './xDeepObjectEqual.ts'; // Assuming the function is defined in 'xDeepObjectEqual.ts'

describe('xDeepObjectEqual', () => {
  it('should return true for identical objects', () => {
    const obj1 = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3,
        },
      },
    };

    const obj2 = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3,
        },
      },
    };

    expect(xDeepObjectEqual(obj1, obj2)).toBe(true);
  });

  it('should return false for objects with different nested values', () => {
    const obj1 = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3,
        },
      },
    };

    const obj3 = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 4,
        },
      },
    };

    expect(xDeepObjectEqual(obj1, obj3)).toBe(false);
  });

  it('should return false for objects with different nested structure', () => {
    const obj1 = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3,
        },
      },
    };

    const obj4 = {
      a: 1,
      b: {
        c: 2,
      },
    };

    expect(xDeepObjectEqual(obj1, obj4)).toBe(false);
  });

  it('should return false for objects with different properties', () => {
    const obj1 = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3,
        },
      },
    };

    const obj5 = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3,
        },
      },
      f: 5,
    };

    expect(xDeepObjectEqual(obj1, obj5)).toBe(false);
  });
});
