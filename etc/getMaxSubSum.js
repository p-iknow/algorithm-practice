function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (const item of arr) {
    // for each item of arr
    partialSum += item; // add it to partialSum
    maxSum = Math.max(maxSum, partialSum); // remember the maximum
    if (partialSum < 0) partialSum = 0; // zero if negative
  }

  return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9])); // 5
// console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
// console.log(getMaxSubSum([-2, -1, 1, 2])); // 3
// console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100
// console.log(getMaxSubSum([1, 2, 3])); // 6
// console.log(getMaxSubSum([-1, -2, -3])); // 0
