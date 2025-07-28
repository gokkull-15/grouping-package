# Thiru

A comprehensive TypeScript utility library providing helper functions for arrays, objects, strings, and more.

## Installation

```bash
npm install thiru
```

## Usage

```typescript
import { arrayUtils, objectUtils, stringUtils } from 'thiru';

// Array utilities
const uniqueArray = arrayUtils.unique([1, 2, 2, 3, 3, 4]);
console.log(uniqueArray); // [1, 2, 3, 4]

// Object utilities
const merged = objectUtils.merge({ a: 1 }, { b: 2 });
console.log(merged); // { a: 1, b: 2 }

// String utilities
const camelCase = stringUtils.toCamelCase('hello-world');
console.log(camelCase); // 'helloWorld'
```

## Features

- **Array Utilities**: Functions for working with arrays (unique, chunk, flatten, etc.)
- **Object Utilities**: Functions for working with objects (merge, pick, omit, etc.)
- **String Utilities**: Functions for string manipulation (case conversion, validation, etc.)
- **Type Safe**: Written in TypeScript with full type definitions
- **Tree Shakeable**: Import only what you need
- **Zero Dependencies**: No external dependencies

## API Documentation

### Array Utilities

- `unique(array)` - Remove duplicate values from an array
- `chunk(array, size)` - Split array into chunks of specified size
- `flatten(array)` - Flatten nested arrays
- `groupBy(array, key)` - Group array elements by a key

### Object Utilities

- `merge(target, ...sources)` - Deep merge objects
- `pick(object, keys)` - Pick specific keys from an object
- `omit(object, keys)` - Omit specific keys from an object
- `deepClone(object)` - Deep clone an object

### String Utilities

- `toCamelCase(string)` - Convert string to camelCase
- `toKebabCase(string)` - Convert string to kebab-case
- `toSnakeCase(string)` - Convert string to snake_case
- `capitalize(string)` - Capitalize first letter

## License

MIT © [Your Name]

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
