// ВНИМАНИЕ: функция выводит все курсы, для которых ХОТЯ БЫ ОДНА из возможных цен входит в диапазон пользователя
const getRequiredCourses = (courses, priceRange) => courses
  .filter(({ prices }) => {
      const [priceMin, priceMax] = prices;
      const [rangeMin, rangeMax] = priceRange;
      if (priceMin === null && priceMax === null) {
        return false;
      }
      if (rangeMax === null && priceMax === null) {
        return rangeMin <= priceMin;
      }
      if (rangeMax === null) {
        return priceMax >= rangeMin;
      }
      if (priceMin === null && rangeMin === null) { // избегаем неявного приведения типов
        return priceMax <= rangeMax;
      }
      if (priceMin === null) {
        return rangeMin <= priceMax && priceMax <= rangeMax;
      }
      return priceMin <= rangeMax;
  });

export default getRequiredCourses;
