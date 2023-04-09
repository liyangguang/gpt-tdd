import { expect, test } from 'vitest';
import {add} from '../result';

test('TDD tests', () => {
  expect(add(3, 4)).toBe(7);
});
