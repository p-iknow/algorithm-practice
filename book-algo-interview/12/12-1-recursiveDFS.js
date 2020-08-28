const graph = {
	1: [2, 3, 4],
	2: [5],
	3: [5],
	4: [],
	5: [6, 7],
	6: [],
	7: [3],
};

const recusiveDFS = (v, discovered = []) => {
	discovered.push(v);
	console.log(`CURRENT V: ${v}`);
	graph[v].forEach(w => {
		if (!discovered.includes(w)) {
			discovered = recusiveDFS(w, discovered);
		}
	});
	return discovered;
};

recusiveDFS(1, []);
