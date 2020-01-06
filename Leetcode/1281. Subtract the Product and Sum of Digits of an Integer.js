/**
 * @param {number} n
 * @return {number}
 */
const subtractProductAndSum = function(n) {
  let result = 0;

  const arrOfNum = String(n)
    .split("")
    .map(el => Number(el));

  const product = arrOfNum.reduce((prev, curr) => curr * prev);
  const sum = arrOfNum.reduce((prev, curr) => prev + curr);
  result = product - sum;
  return result;
  // const prodcut =
};

subtractProductAndSum(234);
