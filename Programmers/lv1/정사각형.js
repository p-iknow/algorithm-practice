function solution(v) {
	const xMap = new Map();
	const yMap = new Map();
	v.forEach(point => {
		const x = point[0];
		const y = point[1];

		const xCount = xMap.get(x) || 0;
		const yCount = yMap.get(y) || 0;
		xMap.set(x, xCount + 1);
		yMap.set(y, yCount + 1);
	});

	const x = [...xMap.keys()].find(xPoint => xMap.get(xPoint) === 1);
	const y = [...yMap.keys()].find(yPoint => yMap.get(yPoint) === 1);

	return [x, y];
}

const testCase1 = [
	[1, 4],
	[3, 4],
	[3, 10],
];

solution(testCase1);
