//https://leetcode.com/problems/guess-number-higher-or-lower

//var guess = function(num) {}
function guessNumber(n: number): number {
    let low = 1
    let high = n

    while(low <= high) {
        const mid = low + Math.floor((high - low) / 2)

        if(guess(mid) === -1) {
            high = mid - 1
        } else if(guess(mid) === 1) {
            low = mid + 1
        } else return mid
    }

    return -1
};