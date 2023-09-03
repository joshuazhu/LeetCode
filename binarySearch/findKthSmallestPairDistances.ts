//https://leetcode.com/problems/find-k-th-smallest-pair-distance/description/

function smallestDistancePair(nums: number[], k: number): number {
  function enough(distance: number) {
    console.log(distance)
    let count = 0
    let i = 0
    let j = 0

    while (i < nums.length) {
      while (j < nums.length && nums[j] - nums[i] <= distance) {
        j += 1
      }
      count += j - i - 1
      i++
    }

    return count >= k
  }

  nums = nums.sort((a, b) => a - b)

  let left = 0;
  let right = nums[nums.length - 1] - nums[0]

  while (left < right) {

    let mid = left + Math.floor((right - left) / 2)

    if (!enough(mid)) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  return left
};
