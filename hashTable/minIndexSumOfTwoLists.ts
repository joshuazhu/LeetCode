//https://leetcode.com/problems/minimum-index-sum-of-two-lists/

function findRestaurant(list1: string[], list2: string[]): string[] {
    let map1 = new Map<string, number>()

    let minIndexSum = Number.POSITIVE_INFINITY
    let results: string[] = []

    list1.forEach((v, i) => {
        if(!map1.has(v)) map1.set(v, i)
    })

    list2.forEach((v, i) => {
        if(map1.has(v)) {
            if(i + map1.get(v)! < minIndexSum) {
                minIndexSum = i + map1.get(v)!
                results = [v]
            } else if(i + map1.get(v)! === minIndexSum) {
                results.push(v)
            }
        }
    })

    return results
};