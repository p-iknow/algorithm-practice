function getCountChar(str, char) {
  let count = 0;
  let position = str.indexOf(char);
  while (position !== -1) {
    count++;
    position = str.indexOf(char, position + 1);
  }
  return count;
}

function solution(s) {
  const lowercaseS = s.toLowerCase();
  const countP = getCounteChar(lowercaseS, "p");
  const countY = getCounteChar(lowercaseS, "y");
  console.log(countP);
  console.log(countY);

  if (countP === countY) {
    return true;
  }
  return false;
}
