const countingSort = (nums: number[]): number[] => {
  let freq: { [key: number]: number } = {};
  let minNumber = Number.POSITIVE_INFINITY;
  let maxNumber = Number.NEGATIVE_INFINITY;

  nums.forEach((v) => {
    freq[v] = !freq[v] ? 1 : (freq[v] += 1);

    if (v < minNumber) minNumber = v;
    if (v > maxNumber) maxNumber = v;
  });

  let currentNumber = minNumber;
  let shift = 0;
  while (currentNumber <= maxNumber) {
    if (freq[currentNumber]) {
      const count = freq[currentNumber];
      freq[currentNumber] = shift;
      shift = shift + count;
    }

    currentNumber++;
  }

  let results: Array<number> = new Array<number>(nums.length);
  for (let i = 0; i < nums.length; i++) {
    results[freq[nums[i]]] = nums[i];
    freq[nums[i]]++;
  }

  return results;
};

console.log('result', countingSort([5,4,5,5,1,1,3]))
