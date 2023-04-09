import { expect, test } from 'vitest';
import { myFunction } from '../result';

test('GPT TDD', () => {
  // Write all tests for the myFunctiontion you want.
  expect(myFunction(1, 1)).toBe(2);
  expect(myFunction(3, 4)).toBe(7);
  expect(myFunction(100, 900)).toBe(1000);
});
