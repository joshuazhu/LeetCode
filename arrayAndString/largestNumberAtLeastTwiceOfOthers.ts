function dominantIndex(nums: number[]): number {
    
    let indexOfMax = 0

    if(nums.length === 0) return -1
    if(nums.length === 1) return 0

    let max = nums[0]
    let secondMax = nums[0]


    for(let i = 1; i < nums.length; i++) {
        if(nums[i] > max) {
            secondMax = max
            max = nums[i]
            indexOfMax = i
        }
    }

    return (max > secondMax * 2) ? indexOfMax : -1
};