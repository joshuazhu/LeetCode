//https://leetcode.com/problems/find-smallest-letter-greater-than-target


function isPerfectSquare(num: number): boolean {
  if (num === 0 || num === 1) return true

  let left = 0
  let right = Math.floor(num / 2)

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2)

    if (mid * mid < num) {
      left = mid + 1
    } else if (mid * mid > num) {
      right = mid - 1
    } else {
      return true
    }
  }

  return false
};
