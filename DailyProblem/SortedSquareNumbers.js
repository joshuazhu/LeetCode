/*
  Given a list of sorted numbers (can be both negative or positive), return the list of numbers squared in sorted order.

  Here's an example and some starting code:

  def square_numbers(nums):
  # Fill this in.

  print(square_numbers([-5, -3, -1, 0, 1, 4, 5]))
  # [0, 1, 1, 9, 16, 25, 25]

  Solve this problem in O(n) time.
*/

const square_numbers = (nums) => {
  let sortedByAbsNumbs = [];

  let indexHead = 0;
  let indexRail = nums.length - 1;

  while (indexHead < indexRail) {
    let absHeadNum = Math.abs(nums[indexHead]);
    let absRailNum = Math.abs(nums[indexRail]);

    if (absHeadNum > absRailNum) {
      sortedByAbsNumbs = [absHeadNum, ...sortedByAbsNumbs];
      indexHead++;
      continue;
    }

    if (absHeadNum < absRailNum) {
      sortedByAbsNumbs = [absRailNum, ...sortedByAbsNumbs];
      indexRail--;
      continue;
    }
    sortedByAbsNumbs = [absHeadNum, absRailNum, ...sortedByAbsNumbs];

    indexHead++;
    indexRail--;
  }

  sortedByAbsNumbs = indexHead === indexRail ? [nums[indexHead], ...sortedByAbsNumbs] : sortedByAbsNumbs;

  return sortedByAbsNumbs.map(x => x * x);
}

console.log('sorted by squre nums', square_numbers([-5, -3, -1, 0, 1, 4, 5]))