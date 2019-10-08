const DFS = (i, computers, visited) => {
  if (visited[i]) return;
  visited[i] = true;
  for (let j = 0; j < computers.length; j++) {
    if (computers[i][j] === 1) {
      DFS(j, computers, visited);
    }
  }
};

function solution(n, computers) {
  const visited = new Array(n).fill(false);
  let answer = 0;
  for (let i = 0; i < n; i++) {
    if (visited[i] === false) {
      answer++;
      DFS(i, computers, visited);
    }
  }
  return answer;
}

solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]);
