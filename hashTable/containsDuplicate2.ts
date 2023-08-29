//https://leetcode.com/problems/contains-duplicate-ii/

function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let map = new Map<number, number>()

    for(let i = 0; i < nums.length; i ++) {
        if(map.get(nums[i])! > -1 && (i - map.get(nums[i])! <= k)) return true
        map.set(nums[i], i)
    } 
    
    return false
};