const board = [
		[0, 0, 0, 0, 0],
		[0, 0, 1, 0, 3],
		[0, 2, 5, 0, 1],
		[4, 2, 4, 4, 2],
		[3, 5, 1, 3, 1],
	],
	moves = [1, 5, 3, 5, 1, 2, 1, 4];

const getGrabbedDol = (position, board) => {
	const x = position - 1;
	for (let y = 0; y < board.length; y++) {
		if (board[y][x] != 0) {
			const grabbedDol = board[y][x];
			board[y][x] = 0;
			return grabbedDol;
		}
	}
	return 0;
};

function solution(board, moves) {
	let answer = 0;
	const basket = [];
	moves.forEach(position => {
		const grabbedDol = getGrabbedDol(position, board);

		if (grabbedDol == 0) {
			return;
		}

		if (basket.length > 0) {
			if (basket[basket.length - 1] == grabbedDol) {
				basket.pop();
				answer += 2;
				return;
			} else {
				basket.push(grabbedDol);
			}
		} else {
			basket.push(grabbedDol);
		}
	});
	return answer;
}

const answer = solution(board, moves);
console.log(answer);
