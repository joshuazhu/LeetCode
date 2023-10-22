//https://leetcode.com/problems/subarray-sum-equals-k/

function subarraySum(nums: number[], k: number): number {
  let map: Map<number, number> = new Map<number, number>()
  let currentSum = 0
  let result = 0
  map.set(0, 1)

  for (let i = 0; i < nums.length; i++) {
    currentSum = currentSum + nums[i]

    if (map.get(currentSum - k) !== undefined) {
      result++
    }

    map.set(currentSum, 1)
  }

  return result

};
