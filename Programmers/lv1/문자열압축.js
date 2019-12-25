function solution(s) {
  const { length } = s;
  let answer = length;

  const compressStr = (str, ch, size) => {
    let res = "";
    let count = 1;

    for (let i = size; i < str.length; i += size) {
      const ch2 = str.slice(i, i + size);
      if (ch === ch2) {
        count += 1;
      } else {
        count = count > 1 ? String(count) : "";
        res += count + ch;
        ch = ch2;
        count = 1;
      }
    }
    if (ch) {
      count = count > 1 ? String(count) : "";
      res += count + ch;
    }
    return res || "";
  };

  /* 자를 문자열 길이 */
  for (let i = 1; i <= Math.floor(length / 2); i++) {
    const ch = s.slice(0, i);
    const compressed = compressStr(s, ch, i);
    answer = Math.min(answer, compressed.length);
  }

  return answer;
}

solution("abcabcabcabcdededededede");
