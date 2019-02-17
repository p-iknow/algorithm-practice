// First idea

var participant =  ["marina", "josipa", "nikola", "vinko", "filipa"] 
var completion = ["josipa", "filipa", "marina", "nikola"]

function solution(participant, completion) {
    for (var i = 0; i < completion.length - 1; i++) {
        console.log(i)
        for (var j = participant.length - 1; participant.length === 1; j--) {
            
            if (completion[i] === participant[j]) {
                
                
            }
        }


    }
    console.log(participant)
    var answer = participant[0];
    return answer;
}

// Second Idea

function solution(participant, completion) {
    for (let i = 0; i < completion.length; i++) {
        participant.splice(participant.indexOf(completion[i]),1);
    }
    return participant[0]
}




// 자바스크립트 배열 삭제 법 
let a = [1, 2, 3, 4]
const idx = a.indexOf(3)
if (idx > -1) a.splice(idx, 1)


