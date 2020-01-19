/*
  The power function calculates x raised to the nth power. If implemented in O(n) it would simply be a for loop over n and multiply x n times.
  Instead implement this power function in O(log n) time. You can assume that n will be a non-negative integer.

  Here's some starting code:

  def pow(x, n):
    # Fill this in.

  print(pow(5, 3))
  # 125
*/

const pow = (x, n) => {
  if (n === 0)
    return 1;

  const tmp = pow(x, Math.floor(n / 2));

  if (n % 2 === 0) {
    return tmp * tmp;
  }

  if (n % 2 !== 0) {
    return x * tmp * tmp;
  }
}