//https://leetcode.com/problems/find-minimum-in-rotated-sorted-array

export function findMin(nums: number[]): number {
  let left = 0
  let right = nums.length - 1

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2)

    if (nums[mid] > nums[nums.length - 1]) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  return nums[left]
};
