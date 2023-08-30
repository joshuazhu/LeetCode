// https://leetcode.com/problems/binary-search/
function search(nums: number[], target: number): number {
    if(nums.length === 0) return -1

    if(nums.length === 1)  {
        return nums[0] === target ? 0 : -1
    }

    let i = Math.floor(nums.length / 2)
    let low = 0
    let high = nums.length - 1

    while(low < high) {
        if(target === nums[i]) return i

        if(target < nums[i]) {
            high = i - 1
            i = Math.floor((i + low) /2)
        } else {
            low = i + 1
            i = Math.floor((i + high) / 2)
        }
    }

    if(low === high) return nums[low] === target ? low : -1

    return -1
};

//recursive
// function search(nums: number[], target: number): number {
//     function recursive (low: number, high: number) {
        
//         if(low > high) return -1
//         if(low === high) {
//             return nums[low] === target ? low : -1 
//         }

//         let i = Math.floor((low + high) / 2)
        
//         if(nums[i] === target) return i
//         else if(target > nums[i]) return iterate(i+1, high)
//         else return iterate(low, i-1)
//     }

//     return recursive(0, nums.length - 1)
// };
