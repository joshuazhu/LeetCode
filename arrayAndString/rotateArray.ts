/**
 Do not return anything, modify nums in-place instead.
 */
 function rotate(nums: number[], k: number): void {
    let indexAfterRotation: {
        [key: number]: number
    } = {}

    nums.forEach((_, index) => indexAfterRotation[index] = (index + k) % nums.length)

    let count = 0
    let index = 0
    
    while(count < nums.length) {
        let indexNext = indexAfterRotation[index]
        let prev = nums[index]
        let tmp = 0
        while(indexNext !== index) {
            tmp = nums[indexNext]
            nums[indexNext] = prev
            prev = tmp

            index = indexNext
            indexNext = indexAfterRotation[index]
            count++
        }

        index++

    }
 };