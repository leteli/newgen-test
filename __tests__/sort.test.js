import sortPrices from '../src/sort.js';
import { courses, ascSortedCourses, descSortedCourses } from '../__fixtures__/fixtures.js';

test('ascending order sorting', () => {
  expect(sortPrices(courses)).toEqual(ascSortedCourses);
});

test('descending order sorting', () => {
  expect(sortPrices(courses, 'desc')).toEqual(descSortedCourses);  
});
