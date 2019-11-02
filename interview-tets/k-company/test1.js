function reduceCapacity(model) {
  // Write your code here
  const n = model.length;
  const offCount = Math.ceil(n / 2);
  const modelLegth = {};
  model.forEach(el => {
    modelLegth[el]
      ? (modelLegth[el] = modelLegth[el] + 1)
      : (modelLegth[el] = 1);
  });
  const lengthArrOfmodel = Object.values(modelLegth).sort((a, b) => a - b);
  let answer = 0;
  let acc = 0;
  while (acc < offCount) {
    acc += lengthArrOfmodel.pop();
    answer++;
  }
  return answer;
}
const testcase1 = [3, 4, 6, 11, 9, 9, 9, 9, 8, 8, 8, 8, 8, 8];

reduceCapacity(testcase1);
