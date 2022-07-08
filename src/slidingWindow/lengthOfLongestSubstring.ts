/**
 * Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.
 *
 * Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
 * Output: 6
 * Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.
 */

const lengthOfLongestSubstring = (arr: Array<number>, k: number) => {
  let result = 0;
  let onesCount = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    const currentNum = arr[windowEnd];

    onesCount = onesCount + currentNum;

    if (windowEnd - windowStart + 1 - onesCount > k) {
      const windowStarNum = arr[windowStart];

      onesCount = onesCount - windowStarNum;
      windowStart++;
    }

    result = Math.max(result, windowEnd - windowStart + 1);
  }

  return result;
};

export const run = () => {
  console.log(
    'Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2',
    lengthOfLongestSubstring([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2),
  );

  console.log(
    'Array=[0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], k=3',
    lengthOfLongestSubstring([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3),
  );
};
