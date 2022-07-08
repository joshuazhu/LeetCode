/**
 * Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.
 *
 * Input: [-2, -1, 0, 2, 3]
 * Output: [0, 1, 4, 4, 9]
 */

const makeSquares = (arr: Array<number>) => {
  let result = [];

  let indexLeft = 0;
  let indexRight = arr.length - 1;

  while (indexLeft <= indexRight) {
    const leftNum = arr[indexLeft];
    const rightNum = arr[indexRight];

    if (Math.abs(leftNum) > Math.abs(rightNum)) {
      result = [leftNum * leftNum, ...result];
      indexLeft++;
    } else {
      result = [rightNum * rightNum, ...result];
      indexRight--;
    }
  }

  return result;
};

export const run = () => {
  console.log(
    'Input: [-2, -1, -1, 0, 2, 3]',
    makeSquares([-2, -1, -1, 0, 2, 3]),
  );
  console.log('Input: [-3, -1, 0, 1, 2]', makeSquares([-3, -1, 0, 1, 2]));
};
