import { unique, chunk, flatten, groupBy, last, first } from '../arrayUtils';

describe('arrayUtils', () => {
  describe('unique', () => {
    it('should remove duplicate values', () => {
      expect(unique([1, 2, 2, 3, 3, 4])).toEqual([1, 2, 3, 4]);
      expect(unique(['a', 'b', 'a', 'c'])).toEqual(['a', 'b', 'c']);
    });

    it('should handle empty array', () => {
      expect(unique([])).toEqual([]);
    });
  });

  describe('chunk', () => {
    it('should split array into chunks', () => {
      expect(chunk([1, 2, 3, 4, 5, 6], 2)).toEqual([[1, 2], [3, 4], [5, 6]]);
      expect(chunk([1, 2, 3, 4, 5], 3)).toEqual([[1, 2, 3], [4, 5]]);
    });

    it('should throw error for invalid chunk size', () => {
      expect(() => chunk([1, 2, 3], 0)).toThrow();
      expect(() => chunk([1, 2, 3], -1)).toThrow();
    });
  });

  describe('flatten', () => {
    it('should flatten nested arrays', () => {
      expect(flatten([1, [2, 3], [4, [5, 6]]])).toEqual([1, 2, 3, 4, 5, 6]);
      expect(flatten(['a', ['b', 'c']])).toEqual(['a', 'b', 'c']);
    });
  });

  describe('groupBy', () => {
    it('should group array elements by key', () => {
      const users = [
        { name: 'John', age: 25 },
        { name: 'Jane', age: 25 },
        { name: 'Bob', age: 30 }
      ];
      
      const grouped = groupBy(users, user => user.age);
      expect(grouped).toEqual({
        25: [{ name: 'John', age: 25 }, { name: 'Jane', age: 25 }],
        30: [{ name: 'Bob', age: 30 }]
      });
    });
  });

  describe('last', () => {
    it('should return last element', () => {
      expect(last([1, 2, 3])).toBe(3);
      expect(last(['a', 'b', 'c'])).toBe('c');
      expect(last([])).toBeUndefined();
    });
  });

  describe('first', () => {
    it('should return first element', () => {
      expect(first([1, 2, 3])).toBe(1);
      expect(first(['a', 'b', 'c'])).toBe('a');
      expect(first([])).toBeUndefined();
    });
  });
});
