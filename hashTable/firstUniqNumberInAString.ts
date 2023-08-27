//https://leetcode.com/problems/minimum-index-sum-of-two-lists/

function firstUniqChar(s: string): number {
    let arr = s.split("")
    let map = new Map<string, [number, number]>()

    arr.forEach((v, i) => {
        if(!map.has(v)) map.set(v, [i, 1])
        else map.set(v, [map.get(v)![0], map.get(v)![1] + 1])
    })

    const result = Array.from(map.values()).filter(v => v[1] === 1).sort((a, b) => a[0] - b[0])

    return result.length > 0 ? result[0][0] : -1
};