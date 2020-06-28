/*
	문제링크
	https://programmers.co.kr/learn/courses/30/lessons/12917/solution_groups?language=javascript
*/

function solution(s) {
	return s
		.split('')
		.sort()
		.reverse()
		.join('');
}

/*
 자바스크립트의  sort 함수는 기본적으로 아스키 코드 기준으로 정렬한다.
 아스키코드 상에서
	 - 대문자 A는 65번으로 시작 한다.
	 - 소문자 a는 97번으로 시작 한다.
	때문에 기본 sort 를 돌리면 대분 알파벳 순 > 소문자 알파벳 순으로 정렬된다.
	이 정렬을 revers 하면 요구 조건을 충족할 수 있는 코드가 나오게 된다.

*/

/*
# 참고
https://fluorite94.tistory.com/220#:~:text=%EC%9E%90%EB%B0%94%20%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%20%EB%B0%B0%EC%97%B4%EC%9D%98%20%EB%82%B4%EC%9E%A5,Object%20%EC%A0%95%EB%A0%AC%20%EB%B0%A9%EB%B2%95%EB%93%A4%EC%9E%85%EB%8B%88%EB%8B%A4.&text=%EC%A0%95%EB%A0%AC%EB%90%98%EC%A7%80%20%EC%95%8A%EC%8A%B5%EB%8B%88%EB%8B%A4.-,var%20arr%20%3D%20%5B1%2C%20111%2C%204%2C%20222%2C,%EC%98%A4%EB%A6%84%EC%B0%A8%EC%88%9C%20%EC%A0%95%EB%A0%AC%20%EB%B0%A9%EB%B2%95%EC%9E%85%EB%8B%88%EB%8B%A4.
*/
