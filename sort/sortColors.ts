/**
 Do not return anything, modify nums in-place instead.
 */

 //https://leetcode.com/problems/sort-colors/editorial/
 function sortColors(nums: number[]): void {
    let indexRed = 0
    let indexBlue = nums.length - 1
    let i = 0
    
    while(i<= indexBlue) {
        const currentColor = nums[i]
        if(currentColor === 0) {
            nums[i] = nums[indexRed]
            nums[indexRed] = currentColor
            indexRed++
            i++
        } else if (currentColor === 2) {
            nums[i] = nums[indexBlue]
            nums[indexBlue] = currentColor
            indexBlue--
        } else {
            i++
        }
    }
};