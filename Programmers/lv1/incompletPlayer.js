// 실패
const deletePlayerFromParticipnat = (player, participant) => {
  participant.splice(participant.indexOf(player), 1);
};

const solution = (participant, completion) => {
  completion.forEach(player => {
    participant.splice(participant.indexOf(player), 1);
  });
  return participant[0];
};

// 성공

const solution = (participant, completion) => {
  participant.sort();
  completion.sort();

  let answer = '';
  let cursor = 0;

  for (let player of participant) {
    if (player !== completion[cursor]) {
      answer = player;
      break;
    }
    cursor++;
  }

  return answer;
};

const solution = (participant, completion) => {
  const hash = completion.reduce((hash, player) => {
    hash[player] = hash[player] ? hash[player] + 1 : 1;
    return hash;
  }, {});
  return participant.find(player => {
    if (hash[player]) hash[player] = hash[player] - 1;
    else return true;
  });
};

// 테스트 케이스 추가

// ["mislav", "stanko", "mislav", "ana", "mislav"],
// ["stanko", "ana", "mislav", "mislav"]
