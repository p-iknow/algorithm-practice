/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = function(num1, num2) {
  const len1 = num1.length;
  const len2 = num2.length;
  const max = Math.max(len1, len2);
  const res = Array(max);
  let carry = 0;
  let val = 0;

  for (let i = 0; i < max; i++) {
    val =
      Number(num1[len1 - 1 - i] || 0) + Number(num2[len2 - 1 - i] || 0) + carry;
    carry = Math.floor(val / 10);
    res[max - 1 - i] = val % 10;
  }

  return (carry || "") + res.join("");
};
