function arrayPairSum(nums: number[]): number {
    const sortedSum = nums.sort((a, b) => a - b)

    let result = 0;

    for(let i = sortedSum.length - 2; i >=0; i -= 2) {
        result += sortedSum[i]
    }

    return result
};