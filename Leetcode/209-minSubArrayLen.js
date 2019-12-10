// https://leetcode.com/problems/minimum-size-subarray-sum/

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 * @time complexity: O(n)
 * @space complexity: O(1)
 */
const minSubArrayLen = function(s, nums) {
  let res = Infinity;
  let sum = 0;
  let i = 0;

  for (let j = 0; j < nums.length; j++) {
    sum += nums[j];

    while (sum >= s) {
      res = Math.min(res, j - i + 1);
      sum -= nums[i];
      i++;
    }
  }

  return res === Infinity ? 0 : res;
};

minSubArrayLen(7, [2, 3, 1, 2, 4, 3]);
