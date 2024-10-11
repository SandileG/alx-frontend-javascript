// dummy.test.js
import { addNumbers } from './dummy';

describe('addNumbers', () => {
  test('adds two numbers correctly', () => {
    expect(addNumbers(2, 3)).toBe(5);
  });

  test('throws error when arguments are not numbers', () => {
    expect(() => addNumbers(2, 'three')).toThrow('Both arguments must be numbers');
  });
});
