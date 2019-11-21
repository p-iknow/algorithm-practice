// const getSkillMapFrom = skill => {
//   const skillMap = {};
//   skill.split("").forEach((el, i, arr) => {
//     if (i === 0) {
//       skillMap[el] = null;
//       return;
//     }
//     skillMap[el] = arr.slice(0, i);
//   });
//   return skillMap;
// };

// const isPossibleSkillTree = (skillTree, skillMap) => {
//   const skillStack = [];

//   return skillTree.every(skill => {
//     const isFirstOrUnrelatedSkill = !skillMap[skill];
//     let isRequiredSkill;
//     if (!isFirstOrUnrelatedSkill) {
//       isRequiredSkill = skillMap[skill].every(skill => {
//         return skillStack.includes(skill);
//       });
//     }
//     if (isFirstOrUnrelatedSkill || isRequiredSkill) {
//       skillStack.push(skill);
//       return true;
//     }
//     return false;
//   });
// };

function solution(skill, skillTrees) {
  const getSkillMapFrom = skill => {
    const map = {};
    skill.split("").forEach(el => {
      map[el] = true;
    });
    return map;
  };

  const skillMap = getSkillMapFrom(skill);

  const isPossibleSkillTree = (skillTree, skillQue) => {
    return [...skillTree].every(skill => {
      const isUnrelatedSkill = !skillMap[skill];
      if (isUnrelatedSkill) return true;
      if (skillQue[0] === skill) {
        skillQue.shift();
        return true;
      }
      return false;
    });
  };

  const skillQue = [...skill];

  const answer = skillTrees.filter(skillTree => {
    return isPossibleSkillTree(skillTree, [...skillQue]);
  }).length;
  return answer;
}

solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]);
