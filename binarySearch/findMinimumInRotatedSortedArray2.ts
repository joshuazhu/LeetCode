//https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/editorial/

function findMin(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2)

    if (nums[mid] > nums[right]) {
      left = mid + 1
    } else if (nums[mid] < nums[right]) {
      right = mid
    } else {
      right = right - 1
    }
  }

  return nums[left]
};
