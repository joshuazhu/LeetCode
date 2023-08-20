/**
 *  Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.
 *
 *  Input: [2, 1, 5, 1, 3, 2], k=3
 *  Output: 9
 *  Explanation: Subarray with maximum sum is [5, 1, 3].
 *
 *  Input: [2, 3, 4, 1, 5], k=2
 *  Output: 7
 *  Explanation: Subarray with maximum sum is [3, 4].
 */

const maxSubArrayOfSizeK = (k: number, arr: number[]) => {
  if (arr.length === 0 || k > arr.length) {
    return [0];
  }

  let tmpSum = arr.slice(0, k).reduce((acc, cur) => acc + cur, 0);
  let result = tmpSum;

  for (let i = k; i < arr.length; i++) {
    tmpSum = tmpSum + arr[i] - arr[i - k];
    if (result < tmpSum) {
      result = tmpSum;
    }
  }

  return result;
};

export const run = () =>
  console.log('maxSubArrayOfSizeK', maxSubArrayOfSizeK(2, [2, 3, 4, 1, 5]));
