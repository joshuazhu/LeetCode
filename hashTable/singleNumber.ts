//https://leetcode.com/problems/single-number/

function singleNumber(nums: number[]): number {
    let i = new Set<number>()

    nums.forEach(v => i.has(v) ? i.delete(v) : i.add(v))
    
    return [...i][0]
};