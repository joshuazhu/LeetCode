function lastOccuranceOf2 (nums: number[]) {
    let left = 0
    let right = nums.length - 1

    while(left < right) {
        let mid = left + Math.floor((right - left + 1) / 2)

        if(nums[mid] > 2) {
            right = mid - 1
        } else {
            left = mid
        }
    }

    return left
}

console.log(lastOccuranceOf2([1,1,2,2,5,6,7]))