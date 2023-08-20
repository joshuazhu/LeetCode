function findMaxConsecutiveOnes(nums: number[]): number {
    let maxResult = 0
    let tmpResult = 0

    for(let i = 0; i < nums.length; i ++) {
        if(nums[i] === 1) {
            tmpResult ++
            maxResult = maxResult > tmpResult ? maxResult : tmpResult
        } else {
            tmpResult = 0
        }
    }

    return maxResult
};