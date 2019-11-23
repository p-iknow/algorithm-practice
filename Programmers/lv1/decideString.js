// https://programmers.co.kr/learn/courses/30/lessons/12915

function solution(strings, n) {
  strings.sort(function(a, b) {
    const first = a[n];
    const second = b[n];
    if (first === second) {
      return (a > b) - (a < b);
    } 
      return (first > second) - (first < second);
    
  });
  return strings;
}
