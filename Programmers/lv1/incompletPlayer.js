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
  participant.sort()
  completion.sort()

  let answer = '';
  let cursor = 0;

  for (let player of participant) {
    if( player !== completion[cursor]) {
      answer = player;
      break;
    }
    cursor++
  }

  return answer
}
