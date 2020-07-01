function solution(s) {
	const lengthCondition = s.length == 4 || s.length == 6;
	if (!lengthCondition) {
		return false;
	}
	return s.split('').every(string => !isNaN(string));
}
