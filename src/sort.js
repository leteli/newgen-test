const ascSort = (a, b) => {
  if (a.prices[0] === null && b.prices[1] === null) {
    return a.prices[1] - b.prices[0];
  }
  if (b.prices[0] === null && a.prices[1] === null) {
    return a.prices[0] - b.prices[1];
  }
  if (a.prices[0] === b.prices[0] || a.prices[0] === null || b.prices[0] === null) {
      return a.prices[1] - b.prices[1];
  }
  return a.prices[0] - b.prices[0];
};

const descSort = (a, b) => {
  if (a.prices[0] === null && b.prices[1] === null) {
      return b.prices[0] - a.prices[1];
    }
  if (b.prices[0] === null && a.prices[1] === null) {
      return b.prices[1] - a.prices[0];
    }
  if (a.prices[0] === b.prices[0] || a.prices[0] === null || b.prices[0] === null) {
      return b.prices[1] - a.prices[1];
  }
  return b.prices[0] - a.prices[0];
};

const sortPrices = (courses, order = 'asc') => {
  const cb = order === 'desc' ? descSort : ascSort;
  return courses.slice().sort(cb);
};

export default sortPrices;
