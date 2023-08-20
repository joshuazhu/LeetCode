// Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.

// subsetA, subsetB

const a = [1, 5, 11, 5];

a.sort((a, b) => a - b);

// [1, 5, 5, 11]  [1,5,5] [5, 11]

// select current:     subset(i-1, sum1-vi, sum2+vi)
// not select current: subset(i-1, sum1, sum2)

const partitionEqualSubsetSum = (nums: number[]) => {
  const sum = nums.reduce((acc, cur) => acc + cur, 0);

  if (sum % 2) {
    return false;
  }

  const target = sum / 2;

  //opt = opt(arr[i-1], sum - vi) || opt(arr[i-1], sum)

  const subsets: boolean[][] = [];

  for (let i = 0; i < nums.length; i++) {
    subsets[i] = []
    subsets[i][0] = true;
  }

  for (let s = 0; s <= target; s++) {
    subsets[0][s] = nums[0] === s ? true : false;
  }

  for(let i = 1; i < nums.length; i ++) {
    for(let s = 1; s <= target; s ++) {
        if(nums[i] > s) subsets[i][s] = subsets[i-1][s]
        else {
            subsets[i][s] = subsets[i-1][s - nums[i]] || subsets[i-1][s]
        }
    }
  }

  return subsets[nums.length - 1][target]
};

console.log('partitionEqualSubsetSum', partitionEqualSubsetSum([1,5,11,5]))

