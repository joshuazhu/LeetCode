//https://leetcode.com/problems/contains-duplicate/

function containsDuplicate(nums: number[]): boolean {
    let mySet: Set<number> = new Set<number>()

    for(let i = 0; i < nums.length; i ++) {
        if(mySet.has(nums[i])) return true

        mySet.add(nums[i])
    }

    return false
};