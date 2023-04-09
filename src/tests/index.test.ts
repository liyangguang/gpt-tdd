import { expect, test } from 'vitest';
// Add any methods you want to have in the result, pretending they do exist.
import {add} from '../result';

// Write all tests for it.
test('TDD tests', () => {
  expect(add(3, 4)).toBe(7);
});

test('TDD tests', () => {
  expect(add(1, 1)).toBe(2);
});
