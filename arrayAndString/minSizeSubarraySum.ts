function minSubArrayLen(target: number, nums: number[]): number {

    if(nums.length === 0) return 0
    
    let result = Number.POSITIVE_INFINITY

    for(let i = 0; i < nums.length; i ++) {
        let tmpIndex = i
        let tmpResult = 0
        let tmpTarget = target

        while(tmpTarget > 0 && tmpIndex < nums.length) {
            tmpTarget -= nums[tmpIndex]
            tmpResult ++
            tmpIndex ++
        }

        if(tmpTarget <= 0 ) {
            result = tmpResult < result ? tmpResult : result
        }
    }

    return result === Number.POSITIVE_INFINITY ? 0 : result
};