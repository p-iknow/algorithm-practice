const isPrime = num => {
  if (num === 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false; //2를 제외한 소수는 항상 홀수

  // 소수는 홀수 이므로 짝수로 나누는 과정은 생략한다
  for (let i = 3; i < num; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const solution = nums => {
  let result = 0;
  const { length } = nums;
  for (let i = 0; i < length - 2; i++) {
    for (let j = i + 1; j < length - 1; j++) {
      for (let k = j + 1; k < length; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        if (isPrime(sum)) {
          result++;
        }
        console.log(`${nums[i]} + ${nums[j]} + ${nums[k]}`);
        console.log(nums[i] + nums[j] + nums[k], isPrime(sum));
      }
    }
  }
  return result;
};

solution([1, 2, 7, 6, 4]);

// module.exports = isPrime;
