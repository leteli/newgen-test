// ВНИМАНИЕ: функция выводит все курсы, для которых ХОТЯ БЫ ОДНА из возможных цен входит в диапазон пользователя
const getRequiredCourses = (courses, priceRange) => courses
  .filter(({ prices }) => {
      const [priceMin, priceMax] = prices;
      const [rangeMin, rangeMax] = priceRange;
      if (priceMin === null && priceMax === null) {
        return false;
      }
      if (priceMin === null) {
        if (rangeMin === null) {
          return rangeMax >= priceMax;
        }
        if (rangeMax === null) {
          return rangeMin <= priceMax;
        }
        return rangeMin <= priceMax && rangeMax >= priceMax;
      }

      if (priceMax === null) {
        if (rangeMin === null) {
          rangeMax >= priceMin;
        }
        if (rangeMax === null) {
          return rangeMin <= priceMin;
        }
        return rangeMin <= priceMin && rangeMax >= priceMin;
      }

      if (rangeMin === null) {
        return rangeMax >= priceMin;
      }
      if (rangeMax === null) {
        return rangeMin <= priceMax;
      }
      return rangeMax >= priceMin && rangeMin <= priceMax;
  });

export default getRequiredCourses;
