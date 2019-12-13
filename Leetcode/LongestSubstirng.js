// 문제
// https://leetcode.com/problems/longest-substring-without-repeating-characters/solution/

// 풀이

// https://medium.com/@eurobin4321/leetcode-3%EB%B2%88-%EB%AC%B8%EC%A0%9C-longest-substring-without-repeating-characters-c8a27b85ff46

// /**
//  * @param {string} s
//  * @return {number}
//  */
// const lengthOfLongestSubstring = function(s) {
//   // 2차원 배열을 만든다.

//   const container = [];
//   let tempStack = [];

//   [...s].forEach(char => {
//     if (tempStack.indexOf(char) === -1) {
//       tempStack.push(char);
//     } else {
//       container.push(tempStack);
//       tempStack = [char];
//     }
//   });
//   container.push(tempStack);
//   const answer = container;
//   return Math.max(...container.map(arr => arr.length));
// };

// var lengthOfLongestSubstring = function(s) {
//   let map = {};
//   let start = 0;
//   let maxLen = 0;
//   let arr = s.split("");

//   for (i = 0; i < s.length; i++) {
//     let current = map[arr[i]];
//     if (current != null && start <= current) {
//       start = current + 1;
//     } else {
//       maxLen = Math.max(maxLen, i - start + 1);
//     }

//     map[arr[i]] = i;
//   }

//   return maxLen;
// };

const lengthOfLongestSubstring = s => {
  if (s.length < 2) {
    return s.length;
  }

  let longest = 0;
  let start = 0;
  let seen = {};

  [...s].forEach((char, i) => {
    if (char in seen && start <= seen[char]) {
      longest = Math.max(i - start, longest);
      start = seen[char] + 1;
    }

    seen[char] = i;
  });
  return Math.max(s.length - start, longest);
};

lengthOfLongestSubstring("abcbcbb");
// lengthOfLongestSubstring("bbbbb");
// lengthOfLongestSubstring("abcabcbb");
// lengthOfLongestSubstring("pwwkew");
// lengthOfLongestSubstring("dvdf");
