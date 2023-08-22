//https://leetcode.com/problems/kth-largest-element-in-an-array/editorial/

function findKthLargest(nums: number[], k: number): number {
    let freq: {[key: number]: number} = {}
    let currentNumber = 100000

    nums.forEach(v => freq[v] = !freq[v] ? 1 : freq[v] + 1)

    while(currentNumber > -10000) {
        while(!freq[currentNumber]) currentNumber --
        k--
        freq[currentNumber] --
        
        if(k===0) return currentNumber
        
    }

    return 0
};