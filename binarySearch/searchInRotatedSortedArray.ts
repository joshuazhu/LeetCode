// https://leetcode.com/problems/search-in-rotated-sorted-array

function search(nums: number[], target: number): number {
    let left = 0
    let right = nums.length - 1

    while(left < right) {
       let mid = left + Math.floor((right - left) / 2)

       if(nums[mid] > nums[nums.length - 1]) {
           left = mid + 1
       } else {
           right = mid
       }
    }

   
    function binarySearch(leftB, rightB, target: number): number {
        let left = leftB;
        let right = rightB;

        while(left <= right) {
            let mid = left + Math.floor((right - left) / 2)

            if(nums[mid] === target) return mid
            else if(nums[mid] < target) left = mid + 1
            else right = mid - 1
        }

        return -1
    }

    
    let result = binarySearch(0, left-1, target)

    if(result !== -1) return result

    return binarySearch(left, nums.length - 1, target)
    
};