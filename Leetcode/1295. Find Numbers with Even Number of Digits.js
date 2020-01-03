//leetcode.com/problems/find-numbers-with-even-number-of-digits/

https: const findNumbers = nums => {
  return nums.map(num => String(num).length).filter(el => el % 2 === 0).length;
};
