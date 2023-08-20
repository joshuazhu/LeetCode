/**
 * Given an array of sorted numbers, separate all duplicates from it in-place.
 * You should not use any extra space;
 * move all duplicates at the end of the array and after moving return the length of the subarray that has no duplicate in it.
 */

const removeDuplicates = (arr: Array<number>) => {
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < arr.length) {
    indexRight = indexLeft + 1;

    while (arr[indexRight] === arr[indexLeft] && indexRight < arr.length) {
      indexRight++;
    }

    if (indexRight - indexLeft > 1) {
      result = [...result, ...arr.slice(0, indexLeft + 1)];
      arr = arr.slice(indexRight, arr.length);
      indexLeft = 0;
    } else {
      indexLeft++;
    }
  }

  result = [...result, ...arr.slice(0, indexLeft + 1)];

  return result.length;
};

export const run = () => {
  console.log(
    '[2, 3, 3, 3, 6, 9, 9]',
    removeDuplicates([2, 3, 3, 3, 6, 9, 9, 9]),
  );
  console.log('[2, 2, 2, 11]', removeDuplicates([2, 2, 2, 11]));
};
