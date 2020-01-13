/*
  Given a list of numbers and an integer k, partition/sort the list such that the all numbers less than k occur before k, and all numbers greater than k occur after the number k.

  def partitionList(nums, k):
    # Fill this in.

  print(partitionList([2, 2, 2, 5, 2, 2, 2, 2, 5], 3))
  # [2, 2, 2, 2, 2, 2, 2, 5, 5]
*/

const partitionList = (nums, k) => {
  return nums.reduce((accu, cur) => {
    if(cur <= k) {
      return [
        cur,
        ...accu
      ];
    }
    return [
      ...accu,
      cur
    ];
  }, []);
}