/**
 * Given an array of unsorted numbers, find all unique triplets in it that add up to zero
 *
 * Input: [-3, 0, 1, 2, -1, 1, -2]
 * Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
 */

const searchTriplets = (arr: Array<number>) => {
  const sortedArr = arr.sort((a, b) => a - b);
  let lastLeftNum = -99999999;
  let lastRightNum = -9999999;
  let result = [];

  for (let i = 0; i < sortedArr.length && sortedArr[i] < 0; i++) {
    let indexRight = arr.length - 1;
    let indexLeft = i + 1;

    while (indexLeft < indexRight) {
      const leftNum = arr[indexLeft];
      const rightNum = arr[indexRight];
      if (leftNum + rightNum + arr[i] === 0) {
        if (leftNum !== lastLeftNum || rightNum !== lastRightNum) {
          result = [...result, [arr[i], leftNum, rightNum]];
          lastLeftNum = leftNum;
          lastRightNum = rightNum;
        } else {
          indexRight--;
          indexLeft++;
        }
      } else if (leftNum + rightNum + arr[i] > 0) indexRight--;
      else if (leftNum + rightNum + arr[i] < 0) indexLeft++;
    }
  }

  return result;
};

export const run = () => {
  console.log(
    'Input: [-3, 0, 1, 2, -1, 1, -2]',
    searchTriplets([-3, 0, 1, 2, -1, 1, -2]),
  );

  console.log('Input: [-5, 2, -1, -2, 3]', searchTriplets([-5, 2, -1, -2, 3]));
};
