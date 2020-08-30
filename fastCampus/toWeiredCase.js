const toWiredCase = str => {
	const wordArr = str.split(' ');
	return wordArr
		.map(word => {
			return word
				.split('')
				.map((char, i) => {
					if (i % 2 === 0) return char.toUpperCase();
					return char.toLowerCase();
				})
				.join('');
		})
		.join(' ');
};

console.log(toWiredCase('aabb aabbd'));
