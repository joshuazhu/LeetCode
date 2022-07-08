const dutchFlagSort = (arr: Array<number>) => {
  let indexLow = 0;
  let index = 0;
  let indexHigh = arr.length - 1;

  while (index <= indexHigh) {
    if (arr[index] === 0) {
      const tmp = arr[indexLow];
      arr[indexLow] = arr[index];
      arr[index] = tmp;
      index++;
      indexLow++;
    } else if (arr[index] === 1) {
      index++;
    } else {
      const tmp = arr[indexHigh];
      arr[indexHigh] = arr[index];
      arr[index] = tmp;
      indexHigh--;
    }
  }
  return arr;
};

export const run = () => {
  console.log('Input: [1, 0, 2, 1, 0]', dutchFlagSort([1, 0, 2, 1, 0]));
  console.log('Input: [2, 2, 0, 1, 2, 0]', dutchFlagSort([2, 2, 0, 1, 2, 0]));
};
