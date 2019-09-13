const supo1 = [1, 2, 3, 4, 5];
const supo2 = [2, 1, 2, 3, 2, 4, 2, 5];
const supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
const supos = [supo1, supo2, supo3];

const getScore = (answers, supo) => {
  let score = 0;
  let supoLength = supo.length;
  answers.forEach((answer, i) => {
    if (answer === supo[i % supoLength]) score += 1;
  });
  return score;
};

function solution(answers) {
  const scores = supos.map(supo => {
    return getScore(answers, supo);
  });
  const max = Math.max(...scores);
  const answer = [];
  scores.forEach((score, i) => {
    if (score === max) answer.push(i + 1);
  });

  return answer;
}
