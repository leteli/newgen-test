import getRequiredCourses from '../src/index.js';
import { courses, result1, result2, result3, requiredRange1, requiredRange2, requiredRange3 } from '../__fixtures__/fixtures.js';

test('only max value', () => {
  expect(getRequiredCourses(courses, requiredRange1)).toStrictEqual(result1);
});

test('min and max value', () => {
  expect(getRequiredCourses(courses, requiredRange2)).toStrictEqual(result2);

});

test('only min value', () => {
  console.log(getRequiredCourses(courses, requiredRange3));
  console.log(result3);
  expect(getRequiredCourses(courses, requiredRange3)).toStrictEqual(result3);

});
