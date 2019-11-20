const isPrime = require("./makePrimeNumber");

test("isPrime(11) to equal true", () => {
  expect(isPrime(11)).toBe(true);
});

test("isPrime(12) to equal false", () => {
  expect(isPrime(12)).toBe(false);
});
