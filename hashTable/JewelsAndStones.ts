//https://leetcode.com/problems/jewels-and-stones

function numJewelsInStones(jewels: string, stones: string): number {
    let jMap = new Map<string, number>()

    jewels.split("").forEach(v => {
        if(jMap.get(v) === undefined) {
            jMap.set(v, 0)
        }
    })

    stones.split("").forEach(v => {
        if(jMap.get(v) !== undefined) {
            jMap.set(v, jMap.get(v)! + 1)
        }
    })

    let result = 0

    for(let [_, count] of jMap) {
        result += count
    }

    return result
};