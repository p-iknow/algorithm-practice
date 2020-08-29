const graph = {
	1: [2, 3, 4],
	2: [5],
	3: [5],
	4: [],
	5: [6, 7],
	6: [],
	7: [3],
};

const iterativeDFS = startV => {
	const discovered = [];
	const stack = [startV];
	while (stack.length !== 0) {
		const v = stack.pop();
		if (!discovered.includes(v)) {
			discovered.push(v);
			graph[v].forEach(w => {
				stack.push(w);
			});
		}
	}
	return discovered;
};

iterativeDFS(1);
