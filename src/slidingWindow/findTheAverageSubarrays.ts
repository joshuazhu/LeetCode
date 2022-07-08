/**
 * Given an array, find the average of all subarrays of K contiguous elements in it
 *
 * E.g. Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5
 * Output: [2.2, 2.8, 2.4, 3.6, 2.8]
 */

const findAverageOfSubarrays = (k: number, arr: number[]): number[] => {
  if (arr.length === 0) {
    return [0];
  }

  if (k > arr.length) {
    return [0];
  }

  let tmpSum: number = arr.slice(0, k).reduce((acc, cur) => acc + cur, 0);
  let result = [];

  result = [...result, tmpSum / 5.0];

  for (let i = k; i < arr.length; i++) {
    tmpSum = tmpSum + arr[i] - arr[i - k];
    result = [...result, tmpSum / 5.0];
  }

  return result;
};

export const run = () =>
  console.log(
    'findAverageOfSubarrays',
    findAverageOfSubarrays(3, [1, 3, 2, 6, -1, 4, 1, 8, 2]),
  );
