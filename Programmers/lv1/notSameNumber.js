function solution(arr) {
  const answer = arr.reduce((prev, curr, i, arr) => {
    if (arr[i - 1] === curr) return prev;
    prev.push(curr);
    return prev;
  }, []);

  return answer;
}

// test
solution([1, 1, 3, 3, 0, 1, 1]);
