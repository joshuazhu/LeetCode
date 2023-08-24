//https://leetcode.com/problems/permutations/editorial/

function permute(nums: number[]): number[][] {
    let results: number[][] = []

    function calculate(tmpNums: number[]) {
        if(tmpNums.length === nums.length) {
            results.push(tmpNums)
        }

        for(let i = 0; i < nums.length; i ++) {
            if(!tmpNums.includes(nums[i])) {
                calculate([...tmpNums, nums[i]])
            }
        } 
    } 

    calculate([])

    return results
};


console.log(permute([1,2,3]))