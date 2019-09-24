const sum = arr => arr.reduce((prev, curr) => prev + curr, 0);

const solution = (numbers, target) => {
  let numberOfCase = 0;

  const operator = (numbers, target, i = 0) => {
    if (i < numbers.length) {
      numbers[i] *= 1;
      operator(numbers, target, i + 1);

      numbers[i] *= -1;
      operator(numbers, target, i + 1);
    } else if (sum(numbers) === target) {
      numberOfCase += 1;
    }
  };
  operator(numbers, target);
  return numberOfCase;
};

const res = solution([1, 2, 3], 6);
