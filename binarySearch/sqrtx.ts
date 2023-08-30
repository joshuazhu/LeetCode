//https://leetcode.com/problems/sqrtx

function mySqrt(x: number): number {
    if(x < 2) return x

    let low = 2
    let high = Math.floor(x / 2)

    while(low <= high) {
        let mid = low + Math.floor((high - low) / 2)

        if(mid * mid === x) return mid

        if(mid * mid > x) high = mid - 1
        else low = mid + 1
    }

    return high
};