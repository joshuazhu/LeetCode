//https://leetcode.com/problems/top-k-frequent-elements/editorial/

//
// 1. use a freq to store num freqs
// 2. sort by freq
// 3. return


function topKFrequent(nums: number[], k: number): number[] {
    let freq: {[key: number] : number} = {}

    nums.forEach(v => freq[v] = !freq [v] ? 1 : freq[v] + 1 )

    let numAndPair: [number, number][] = Object.keys(freq).map(key => [Number.parseInt(key), freq[Number.parseInt(key)]])

    let sortedNumAndPair = numAndPair.sort((a, b) => b[1] - a[1])
    
    let result: number[] = []

    for(let i = 0; i < k; i++) {
        result.push(sortedNumAndPair[i][0])
    }

    return result
};