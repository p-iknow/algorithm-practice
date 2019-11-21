function solution(a, b) {
  if (a === b) return a;
  let answer = 0;
  if (a > b) {
    [a, b] = [b, a];
  }

  for (i = a + 1; i < b; i++) {
    answer += i;
  }
  return answer;
}

solution(3, 5);
