//https://leetcode.com/problems/first-bad-version/editorial/

var solution = function(isBadVersion: any) {

    return function(n: number): number {
        if(n === 1) return isBadVersion(n)

        let left = 1
        let right = n

        while(left < right) {
            let mid = left + Math.floor((right - left) / 2)

            if(isBadVersion(mid)) {
                right = mid
            } else {
                left = mid + 1
            }
        }

        return left

    };
};