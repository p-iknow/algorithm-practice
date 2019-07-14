function alphabeticShift(inputString) {
  const aArr = 'a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z'
    .split(',')
    .map(el => el.trim());
  return inputString
    .split('')
    .map(el => {
      const i = aArr.indexOf(el);
      if (i + 1 === aArr.length) return aArr[0];
      return aArr[i + 1];
    })
    .join('');
}

alphabeticShift('y');
