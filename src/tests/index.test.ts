import { expect, test } from 'vitest';
// This line will have type error - this is expected, as the file will be created by GPT.
import { myFunction } from '../result';

test('GPT TDD', () => {
  // [User TODO]: Write all tests for the myFunctiontion you want.
  expect(myFunction(1, 1)).toBe(2);
  expect(myFunction(3, 4)).toBe(7);
  expect(myFunction(100, 900)).toBe(1000);
});
