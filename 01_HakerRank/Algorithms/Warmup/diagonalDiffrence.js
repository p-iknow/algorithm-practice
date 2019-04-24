https://www.hackerrank.com/challenges/diagonal-difference/problem

// Complete the diagonalDifference function below.
function diagonalDifference(arr) {
    let t = 0 
    for (let i = 0, j = arr.length - 1; i < arr.length && -1 < j; i++ , j--){
        t = arr[i][i] - arr[i][j]
    } 
    return Math.abs(t)
}