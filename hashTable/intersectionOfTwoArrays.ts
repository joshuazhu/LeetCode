//https://leetcode.com/problems/intersection-of-two-arrays/

function intersection(nums1: number[], nums2: number[]): number[] {
    let setA = new Set<number>()
    let setB = new Set<number>()

    nums1.forEach(v => {
        if(!setA.has(v)) setA.add(v)
    })

    nums2.forEach(v => {
        if(setA.has(v)) setB.add(v)
    })

    return [...setB]

};