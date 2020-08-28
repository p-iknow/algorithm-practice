function solution(x, n) {
	if (x === 0) return Array(n).fill(0);

	return Array(n)
		.fill(x)
		.map((el, i) => el * (i + 1));
}

const testCase1 = [1, 2];
const testCase2 = [4, 3];
const testCase3 = [-4, 2];

solution(...testCase1);
