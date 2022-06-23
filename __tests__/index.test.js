import { test, expect } from 'jest';

import getRequiredCourses from '../src/index.js';
import { courses, result1, result2, result3, requiredRange1, requiredRange2, requiredRange3 } from '../__fixtures__/fixtures.js';

test('filters courses', () => {
  expect(getRequiredCourses(courses, requiredRange1)).toStrictEqual(result1);
  expect(getRequiredCourses(courses, requiredRange2)).toStrictEqual(result2);
  expect(getRequiredCourses(courses, requiredRange3)).toStrictEqual(result3);
});
