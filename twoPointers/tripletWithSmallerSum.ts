/**
 * Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices.
 * Write a function to return the count of such triplets.
 */

const tripletWithSmallerSum = (
  arr: Array<number>,
  target: number,
): Array<Array<number>> => {
  const sortedArr = arr.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < sortedArr.length && sortedArr[i] <= target; i++) {
    let indexLeft = i + 1;
    let indexRight = sortedArr.length - 1;

    while (indexLeft < indexRight) {
      const tmpSum =
        sortedArr[i] + sortedArr[indexLeft] + sortedArr[indexRight];

      if (tmpSum >= target) {
        indexRight--;
        continue;
      }

      for (let j = indexRight; j > indexLeft; j--) {
        result = [
          ...result,
          [sortedArr[i], sortedArr[indexLeft], sortedArr[j]],
        ];
      }

      indexLeft++;
    }
  }
  return result;
};

export const run = () => {
  console.log(
    'Input: [-1, 0, 2, 3], target=3',
    tripletWithSmallerSum([-1, 0, 2, 3], 3),
  );

  console.log(
    'Input: [-1, 4, 2, 1, 3], target=5',
    tripletWithSmallerSum([-1, 4, 2, 1, 3], 5),
  );
};
