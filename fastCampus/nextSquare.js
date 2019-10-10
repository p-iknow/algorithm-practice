function nextSqaure(n) {
  // Math.sqrt: 양의 제곱근을 반환
  // n = 9 이면 3 반환
  // n = 3 이면 1.7320508075688772 반환
  const root = Math.sqrt(n);

  // console.log(root);

  return Number.isInteger(root) ? Math.pow(root + 1, 2) : 'no';
}

console.log(nextSqaure()); // no
console.log(nextSqaure(0)); // 1
console.log(nextSqaure(1)); // 4
console.log(nextSqaure(2)); // no
console.log(nextSqaure(3)); // no
console.log(nextSqaure(121)); // 144
console.log(nextSqaure(165)); // no
console.log(nextSqaure(400)); // 441
