function hideNumbers(str) {
	// 문자열을 뒤에서 4자리 잘라내기
	// console.log(str.slice(-4));
	// console.log(str.substring(str.length - 4));

	return '*'.repeat(str.length - 4) + str.slice(-4);
}

console.log(hideNumbers('01033334444')); // *******4444
console.log(hideNumbers('027778888')); // *****8888
