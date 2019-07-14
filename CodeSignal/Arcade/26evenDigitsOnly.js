const isEven = n => n % 2 === 0;

const evenDigitsOnly = n => {
  return String(n)
    .split('')
    .every(el => isEven(Number(el)));
};

// evenDigitsOnly(2468);
evenDigitsOnly(1468);
// evenDigitsOnly(46802)
