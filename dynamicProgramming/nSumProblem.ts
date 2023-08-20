// select: subset(nums[i-1], sum-num[i])
// not select: subset(nums[i-1], sum)

//Recursive

const nSumProblemRecursive = (nums: number[], sum: number) => {
  if (sum === 0) return true;
  if (nums.length === 1) return nums[0] === sum;

  if (nums[nums.length - 1] > sum) {
    return nSumProblemRecursive(nums.slice(0, nums.length - 1), sum);
  }

  return (
    nSumProblemRecursive(nums.slice(0, nums.length - 1), sum) ||
    nSumProblemRecursive(
      nums.slice(0, nums.length - 1),
      sum - nums[nums.length - 1]
    )
  );
};

const nSumProblemNonRecursive = (nums: number[], sum: number) => {
  const subsets: boolean[][] = [];

  for (let i = 0; i < nums.length; i++) {
    subsets[i] = [];
    subsets[i][0] = true;
  }

  for (let s = 1; s <= sum; s++) {
    subsets[0][s] = nums[0] === s;
  }

  for (let i = 1; i < nums.length; i++) {
    for (let s = 1; s <= sum; s++) {
      if (nums[i] > s) {
        subsets[i][s] = subsets[i - 1][s];
      } else {
        subsets[i][s] = (subsets[i - 1][s - nums[i]]) || subsets[i - 1][s];
      }
    }
  }

  return subsets[nums.length - 1][sum];
};

console.log(nSumProblemNonRecursive([3, 34, 4, 12, 5, 2], 9))
console.log(nSumProblemNonRecursive([3, 34, 4, 12, 5, 2], 10))
console.log(nSumProblemNonRecursive([3, 34, 4, 12, 5, 2], 11))
console.log(nSumProblemNonRecursive([3, 34, 4, 12, 5, 2], 12))
console.log(nSumProblemNonRecursive([3, 34, 4, 12, 5, 2], 13))
console.log(nSumProblemNonRecursive([3, 34, 4, 12, 5, 2], 30))
