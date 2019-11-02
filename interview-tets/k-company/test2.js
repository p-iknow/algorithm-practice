function getCharsToDeletFrom(obj, K) {
  let result;
  for (const [char, value] of Object.entries(obj)) {
    if (value === K) result = char;
  }
  return result;
}

function getDuplicateWordCount(word) {
  const duplicatWordCount = {};

  word.split('').forEach((char, i, arr) => {
    if (char === arr[i + 1] || char === arr[i - 1]) {
      duplicatWordCount[char]
        ? (duplicatWordCount[char] = duplicatWordCount[char] + 1)
        : (duplicatWordCount[char] = 1);
    }
  });
  return duplicatWordCount;
}

function compressWord(word, K) {
  // Write your code here

  let answer = word;
  let charToDelete = getCharsToDeletFrom(getDuplicateWordCount(answer), K);
  while (charToDelete) {
    const targetWordToDelete = charToDelete.repeat(K);
    answer = answer.replace(targetWordToDelete, '');
    charToDelete = getCharsToDeletFrom(getDuplicateWordCount(answer), K);
  }
  return answer;
}

const testcase1 = 'abbcccb';
const testcase2 = 'acccbdddbb';
compressWord(testcase2, 3);
