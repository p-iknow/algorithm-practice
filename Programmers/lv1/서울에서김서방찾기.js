function solution(seoul) {
	const index = seoul.findIndex(name => name == 'Kim');
	return `김서방은 ${index}에 있다`;
}

function solution2(seoul) {
	const index = seoul.indexOf('Kim');
	return `김서방은 ${index}에 있다`;
}
