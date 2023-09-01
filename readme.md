**xDeepObjectEqual** is a TypeScript function that allows you to deeply compare two objects for equality. It traverses nested objects and their properties to determine if they are equal.

## Installation

To use xDeepObjectEqual, you'll need to include the provided TypeScript file in your project.

1. Download the `xDeepObjectEqual.ts` file from this repository.
2. Add the file to your project directory.

## Usage

1. Import the `xDeepObjectEqual` class into your TypeScript code:

   ```typescript
   import { xDeepObjectEqual } from 'x-deep-object-equal'

    const firstObject = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3,
        },
      },
    };

    const secondObject = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3,
        },
      },
      f: 5,
    };

   xDeepObjectEqual(firstObject, secondObject);
   // false

2. Import the `xDeepObjectEqual` class into your Javascript code:

   ```javascript
   const { xDeepObjectEqual } = require("x-deep-object-equal")

   xDeepObjectEqual(firstObject, secondObject);
   // false

## Support Me

If you find this project helpful or want to show your appreciation, you can support me by [buying me a coffee](https://www.buymeacoffee.com/nhutdm). Your support is greatly appreciated!
