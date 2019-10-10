const fibonacci = n => {
  if (n < 2) return n;

  let temp1 = 0;
  let temp2 = 1;
  let fibo = 1;

  for (let i = 2; i <= n; i++) {
    fibo = temp1 + temp2;
    temp1 = temp2;
    temp2 = fibo;
  }
  return fibo;
};

// 재귀
const fibonacci = n => {
  if (n < 2) return n;
  // n이 2 이상인 경우
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const fibonacci = n => {
  if (n < 2) return n;

  if (!(n in fibonacci)) fibonacci[n] = fibonacci[n - 1] + fibonacci[n - 2];

  return fibonacci[n];
};
