//https://leetcode.com/problems/combinations/editorial/
function combine(n: number, k: number): number[][] {
    let result : number[][] = []

    function findCombination(tmpResult: number[], index: number) {
        if(tmpResult.length === k) result.push(tmpResult)
        for(let i = index; i <= n; i ++) {
            findCombination([...tmpResult, i], index + 1)
        }
    }

    findCombination([], 1)
    return result
};