export * as arrayUtils from './arrayUtils';
export * as objectUtils from './objectUtils';
export * as stringUtils from './stringUtils';

// Also export individual functions for convenience
export {
  unique,
  chunk,
  flatten,
  groupBy,
  last,
  first
} from './arrayUtils';

export {
  merge,
  pick,
  omit,
  deepClone,
  get
} from './objectUtils';

export {
  toCamelCase,
  toKebabCase,
  toSnakeCase,
  capitalize,
  isEmpty,
  truncate,
  trim,
  isNumeric,
  isEmail
} from './stringUtils';
