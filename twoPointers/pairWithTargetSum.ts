/**
 * Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.
 * Input: [1, 2, 3, 4, 6], target=6
 * Output: [1, 3]
 * Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6
 */

const pairWithTargetSum = (
  arr: Array<number>,
  targetSum: number,
): Array<number> => {
  let indexStart = 0;
  let indexEnd = arr.length - 1;

  while (indexStart <= indexEnd) {
    if (arr[indexStart] + arr[indexEnd] < targetSum) {
      indexStart++;
      continue;
    }

    if (arr[indexStart] + arr[indexEnd] > targetSum) {
      indexEnd--;
      continue;
    }

    if (arr[indexStart] + arr[indexEnd] === targetSum) {
      break;
    }
  }

  if (indexStart <= indexEnd) {
    return [indexStart, indexEnd];
  } else {
    return [-1, -1];
  }
};

export const run = () => {
  console.log(
    'Input: [1, 2, 3, 4, 6], target=6',
    pairWithTargetSum([1, 2, 3, 4, 6], 6),
  );

  console.log(
    'Input: [2, 5, 9, 11], target=11',
    pairWithTargetSum([2, 5, 9, 11], 11),
  );
};
