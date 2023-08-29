//https://leetcode.com/problems/intersection-of-two-arrays-ii/

function intersect(nums1: number[], nums2: number[]): number[] {
    let hashMap1 = new Map<number, number>()
    let hashMap2 = new Map<number, number>()

    nums1.forEach(v => {
        if(hashMap1.get(v)) hashMap1.set(v, hashMap1.get(v)! + 1)
        else hashMap1.set(v, 1)
    })

    nums2.forEach(v => {
        if(hashMap1.get(v)) {
            //save thae smallest occurrences
           if(hashMap2.get(v)) hashMap2.set(v, hashMap2.get(v)! + 1 < hashMap1.get(v)! ? hashMap2.get(v)! + 1: hashMap1.get(v)!)
           else hashMap2.set(v, 1)
        }
    })

    return nums2.filter(v => {
        if(hashMap2.get(v)) {
            hashMap2.set(v, hashMap2.get(v)! - 1)
            return true
        }  

        return false
    })
};