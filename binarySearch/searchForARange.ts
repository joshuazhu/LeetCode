//https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array

function searchRange(nums: number[], target: number): number[] {
    if(nums.length === 0) return [-1, -1]

    function findBound(nums: number[], target: number, isFirst: boolean) {
        let left = 0
        let right = nums.length - 1

        while(left < right) {
            let mid = left + Math.floor((right - left + (isFirst ? 0 : 1)) / 2)

            if(isFirst) {
                if(nums[mid] < target) {
                    left = mid + 1
                } else {
                    right = mid
                }
            } else {
                if(nums[mid] > target) {
                    right = mid - 1
                } else {
                    left = mid
                }
            }
        }

        return left
    }

    let firstIndexSmallerThanTarget = findBound(nums, target, true)
    let firstIndexLargerThanTarget = findBound(nums, target, false)

    if(firstIndexSmallerThanTarget > firstIndexLargerThanTarget) {
        return [-1, -1]
    }

    if(firstIndexSmallerThanTarget === firstIndexLargerThanTarget && nums[firstIndexSmallerThanTarget] !== target) {
        return [-1, -1]
    }


    return [firstIndexSmallerThanTarget, firstIndexLargerThanTarget]
};