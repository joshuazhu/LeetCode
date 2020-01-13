/*
  Given a list of possible coins in cents, and an amount (in cents) n, return the minimum number of coins needed to create the amount n. If it is not possible to create the amount using the given coin denomination, return None.

  Here's an example and some starter code:

  def makeChange(coins, n):
    # Fill this in.

  print(makeChange([1, 5, 10, 25], 36))
  # 3 coins (25 + 10 + 1)
*/

const makeChange = (coins, n) => {
  if (n === 0) return 0;
  if (n < 0) return Infinity;

  const results = coins.map(coin => {
    return 1 + makeChange(coins.filter(c => c !== coin), n - coin)
  }).filter(result => result < Infinity);

  if (results.length === 0)
    return;

  return results.sort((a, b) => {
    if (a < b)
      return -1;
    if (a > b)
      return 1;
    return 0;
  })[0];
}

console.log(JSON.stringify(makeChange([1, 5, 10, 25], 15)));
