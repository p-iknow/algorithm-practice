function (list, item) {
    var low = 0, high = list.length, mid, guess;
    while( low <= high) {
        mid = Math.floor((low + high)/2)
        guess = list[mid]
        
        if(guess === item) return mid;

        if(guess > item) high = mid - 1; 

        else low = mid + 1
    }
    return;
}