// absoluteValuesSumMinimization

const changeAbs = (el, i, arr) => {
  return arr.reduce((prev, curr) => {
    return prev + Math.abs(el - curr);
  }, 0);
};

function absoluteValuesSumMinimization(a) {
  if (a.length < 2) return a[0];
  const changed = a.map(changeAbs);
  const closestIndex = changed.indexOf(Math.min(...changed));
  return a[closestIndex];
}

absoluteValuesSumMinimization([2, 4, 7]);
