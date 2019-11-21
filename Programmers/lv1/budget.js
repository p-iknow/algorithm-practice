function solution(d, budget) {
  let answer = 0;
  const sortedD = d.sort((a, b) => a - b); // 역순 정렬
  for (let i = 0; i < sortedD.length; i++) {
    if (budget - sortedD[i] >= 0) {
      budget -= sortedD[i];
      answer++;
    } else {
      break;
    }
  }
  return answer;
}

solution([1, 3, 2, 5, 4]);
