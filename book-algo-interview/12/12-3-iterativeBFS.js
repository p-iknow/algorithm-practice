const graph = {
	1: [2, 3, 4],
	2: [5],
	3: [5],
	4: [],
	5: [6, 7],
	6: [],
	7: [3],
};

const iterativeBFS = startV => {
	const discoverd = [startV];
	const queue = [startV];
	while (queue.length !== 0) {
		const v = queue.shift();
		graph[v].forEach(w => {
			if (!discoverd.includes(w)) {
				discoverd.push(w);
				queue.push(w);
			}
		});
	}
	return discoverd;
};

iterativeBFS(1);
