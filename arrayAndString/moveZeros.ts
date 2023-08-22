//https://leetcode.com/explore/learn/card/array-and-string/204/conclusion/1174/

/**
 Do not return anything, modify nums in-place instead.
 */
 function moveZeroes(nums: number[]): void {
    let slowIndex = 0
    let fastIndex = 0

    for(; fastIndex < nums.length; fastIndex++) {
        if(nums[fastIndex] !== 0) {
            nums[slowIndex] = nums[fastIndex]
            slowIndex++
        }
    }

    for(; slowIndex < nums.length; slowIndex++) {
        nums[slowIndex] = 0
    }
};