/**
 * Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet.
 * If there are more than one such triplet, return the sum of the triplet with the smallest sum.
 */

const tripletSumCloseToTarget = (
  arr: Array<number>,
  targetSum: number,
): number => {
  let result = Infinity;
  let minDistance = Infinity;
  const sortedArr = arr.sort((a, b) => a - b);

  for (let i = 0; i < sortedArr.length; i++) {
    let indexLeft = i + 1;
    let indexRight = sortedArr.length - 1;
    while (indexLeft < indexRight) {
      const tmpDistance =
        targetSum - sortedArr[indexLeft] - sortedArr[indexRight] - sortedArr[i];

      if (
        Math.abs(tmpDistance) < Math.abs(minDistance) ||
        (Math.abs(tmpDistance) === Math.abs(minDistance) &&
          tmpDistance > minDistance)
      ) {
        minDistance = tmpDistance;
        result = sortedArr[indexLeft] + sortedArr[indexRight] + sortedArr[i];
      }

      if (tmpDistance > 0) {
        indexLeft++;
      } else {
        indexRight--;
      }
    }
  }

  return result;
};

export const run = () => {
  console.log(
    '[-2, 0, 1, 2], target=2',
    tripletSumCloseToTarget([-2, 0, 1, 2], 2),
  );
  console.log(
    '[-3, -1, 1, 2], target=1',
    tripletSumCloseToTarget([-3, -1, 1, 2], 1),
  );

  console.log(
    '[1, 0, 1, 1], target=100',
    tripletSumCloseToTarget([1, 0, 1, 1], 100),
  );
};
