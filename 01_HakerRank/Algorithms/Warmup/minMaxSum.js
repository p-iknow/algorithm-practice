
// My solution 
function miniMaxSum(arr) {
    const minArr = arr.map(v => v);
    const maxArr = arr.map(v => v);
    minArr.splice(minArr.indexOf(Math.max(...arr)),1)
    const resMin = minArr.reduce((prev, curr) => prev + curr);
    maxArr.splice(maxArr.indexOf(Math.min(...arr)), 1)
    const resMax = maxArr.reduce((prev, curr) => prev + curr);
    console.log(resMin, resMax)
}

// other Solution
function miniMaxSum(arr) {
  arr.sort();
  var minSum = sum(arr.slice(0, -1))
  var maxSum = sum(arr.slice(1))
  console.log(minSum, maxSum)
}

function sum(subArr) {
  return subArr.reduce(function(a, b) {
    return a + b;
  }, 0);
}

miniMaxSum([1,2,3,4,5]);