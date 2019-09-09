// const solution = (n, lost, reserve) => {
//   reserve.forEach(student => {
//     const equal = lost.indexOf(student);
//     if (equal !== -1) {
//       lost.splice(equal, 1);
//       return;
//     }

//     const prev = lost.indexOf(student - 1);
//     if (prev !== -1) {
//       lost.splice(prev, 1);
//       return;
//     }

//     const next = lost.indexOf(student + 1);
//     if (next !== -1) {
//       lost.splice(next, 1);
//       return;
//     }
//   });
//   const answer = n - lost.length;
//   return answer;
// };

// const getIndexToDelete = (student, lost) => {
//   const prev = lost.indexOf(student - 1);
//   if (prev !== -1) return prev;

//   const next = lost.indexOf(student + 1);
//   if (next !== -1) return next;

//   return null;
// };

// const solution = (n, lost, reserve) => {

//   const l = lost.filter(student =>{
//     return reserve.indexOf(student) === -1;
//   })

//   const r = reserve.filter(student => {
//     return lost.indexOf(student) === -1
//   });

//   r.forEach(student => {
//     const flag = getIndexToDelete(student, l);
//     if (flag !== null) l.splice(flag, 1);
//   });
//   const answer = n - l.length;
//   return answer;
// };

// function solution(n, lost, reserve) {
//   const answer =
//     n -
//     lost.filter(a => {
//       const b = reserve.find(r => Math.abs(r - a) <= 1);
//       if (!b) return true;
//       reserve = reserve.filter(r => r !== b);
//     }).length;
//   return answer;
// }

function solution(n, lost, reserve) {
  const actualReserve = reserve.filter(el => lost.indexOf(el) === -1);
  const actualLost = lost.filter(el => reserve.indexOf(el) === -1);

  const set = Array.apply(undefined, new Array(n)).map((el, i) =>
    actualLost.indexOf(i + 1) === -1 ? true : false
  );

  for (let hero of actualReserve) {
    if (set[hero - 1 - 1] === false) {
      set[hero - 1 - 1] = true;
    } else if (set[hero - 1 + 1] === false) {
      set[hero - 1 + 1] = true;
    }
  }
  console.log(actualReserve, set, set.filter(el => el).length);
  return set.filter(el => el).length;
}

solution(7, [2, 3, 4], [1, 2, 3, 6]);
