function solution(n, computers) {
  let answer = 0;
  const isVisited = new Array(n).fill(false);

  const DFS = function(computers, i) {
    console.log('DFS excuted');
    if (isVisited[i]) {
      return;
    }
    isVisited[i] = true;
    console.log(isVisited);

    for (let j = 0; j < computers.length; j++) {
      if (computers[i][j] === 1) {
        console.log(`${i}, ${j}`);
        console.log('connected');
        DFS(computers, j);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (!isVisited[i]) {
      answer++;
      console.log(isVisited, '도입부');
      console.log(answer);
      DFS(computers, i);
    }
  }

  return answer;
}

solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]);
