const commandToK = (arr, command) => {
  let [i, j, k] = command.map(item => item - 1);
  j += 1;
  return arr.slice(i, j).sort((a, b) => a - b)[k];
};

const solution = (arr, commands) => {
  const answer = commands.map(command => {
    return commandToK(arr, command);
  });
  return answer;
};

function solution(array, commands) {
  return commands.map(([from, to, k]) => {
    return array.slice(from - 1, to).sort((x, y) => x > y)[k - 1];
  });
}
