/**
 * Given an array with positive numbers and a positive target number,
 * find all of its contiguous subarrays whose product is less than the target number.
 */

const findSubarrays = (arr: Array<number>, target: number) => {
  let result = [];

  for (let indexLeft = 0; indexLeft < arr.length; indexLeft++) {
    let tmpTarget = target / arr[indexLeft];
    let indexRight = indexLeft;

    while (tmpTarget > 1 && indexRight < arr.length) {
      tmpTarget = tmpTarget / arr[++indexRight];
    }

    const stack = [];

    for (let i = indexLeft; i < indexRight; i++) {
      stack.push(arr[i]);
    }

    while (stack.length > 0) {
      result = [...result, Array.from(stack)];
      stack.pop();
    }
  }

  return result;
};

export const run = () => {
  console.log(
    'Input: [2, 5, 3, 10], target=40',
    findSubarrays([2, 5, 3, 10], 40),
  );
  console.log(
    'Input: [8, 2, 6, 5], target=50',
    findSubarrays([8, 2, 6, 5], 50),
  );
};
