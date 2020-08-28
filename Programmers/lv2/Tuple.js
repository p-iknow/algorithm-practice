//function solution(s) {
//	const trimedString = s.slice(1, -1);
//	const tempArr = [];
//	let isIn = false;
//	let tempNumStr = '';
//	const couterMap = new Map();
//	trimedString.split('').forEach(s => {
//		if (s === '{') {
//			isIn = true;
//			return;
//		}
//		if (s === '}') {
//			const el = Number(tempNumStr);
//			const couter = couterMap.get(el) || 0;
//			couterMap.set(el, couter + 1);
//			tempNumStr = '';
//			isIn = false;
//			return;
//		}
//		if (s === ',') {
//			if (isIn) {
//				const el = Number(tempNumStr);
//				const couter = couterMap.get(el) || 0;
//				couterMap.set(el, couter + 1);
//				tempNumStr = '';
//				return;
//			} else {
//				return;
//			}
//		}
//		tempNumStr += s;
//	});

//	if (couterMap.keys().length === 1) return couterMap.keys();
//	return [...couterMap.keys()].sort(
//		(a, b) => couterMap.get(b) - couterMap.get(a)
//	);
//}

function solution(s) {
	const parsed = JSON.parse(s.replace(/{/g, '[').replace(/}/g, ']')).sort(
		(a, b) => a.length - b.length
	);

	return JSON.parse(s.replace(/{/g, '[').replace(/}/g, ']'))
		.sort((a, b) => a.length - b.length)
		.reduce((arr, v, n) => {
			if (n) {
				return arr.concat(v.filter(f => !arr.includes(f)));
			}
			return v;
		}, []);
}

const testCase1 = '{{2},{2,1},{2,1,3},{2,1,3,4}}';
const testCase2 = '{{20,111},{111}}';

solution(testCase1);
