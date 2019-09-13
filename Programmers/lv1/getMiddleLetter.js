const assert = require('assert');

const isEven = num => {
  return num % 2 === 0;
};

const getMiddleLetter = str => {
  const lengthOfStr = str.length;
  let answer;
  let middle;
  if (isEven(lengthOfStr)) {
    middle = lengthOfStr / 2;
    answer = str.slice(middle - 1, middle + 1);
  } else {
    middle = Math.ceil(lengthOfStr / 2);
    answer = str[middle - 1];
  }
  return answer;
};

const test1 = 'qwer';
describe('isEventTest', () => {
  it(`isEven(2) should return true`, () => {
    assert.equal(isEven(2), true);
  });

  it(`getMiddleLetter(${test1}) should return "we"`, () => {
    assert.equal(getMiddleLetter('qwer'), 'we');
  });
});
