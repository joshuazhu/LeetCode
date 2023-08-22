// https://leetcode.com/explore/learn/card/array-and-string/204/conclusion/1173/


//two pointers
function removeDuplicates(nums: number[]): number {
    let slowPointer = 0
    let currentEvaluateNumber = nums[0]
    let fastPointer = 0
    
    for(; fastPointer < nums.length; fastPointer ++) {
        if(nums[fastPointer] !== currentEvaluateNumber) {
            currentEvaluateNumber = nums[fastPointer]
            slowPointer++
            nums[slowPointer] = nums[fastPointer] 
        }        
    }

    return slowPointer + 1
};