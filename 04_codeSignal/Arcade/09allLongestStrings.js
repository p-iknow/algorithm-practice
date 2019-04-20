let test =  ["aba", 
 "aa", 
 "ad", 
 "vcd", 
 "aba"]
function allLongestStrings(inputArray) {
    const findLongestArray = (prev, curr) => {
       if(Array.isArray(prev)) {
            if(prev[0].length === curr.length) {
                prev.push(curr);
                return prev;
            }
            if(prev[0].length < curr.length) {
                return [curr]
        }
            return prev;
       } else {
           if (prev.length === curr.length) {
               return [prev, curr];
           }
           if (prev.length < curr.length) {
               return [curr]
           }
           return [prev]
       }   
    }
    if (inputArray.length === 1) return inputArray;
    return inputArray.reduce(findLongestArray)
}
