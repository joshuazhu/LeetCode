
function fib(n: number): number {
    let cache: {
        [key: number]: number;
      } = {};

  cache[0] = 0
  cache[1] = 1
      
  function calculate(n: number): number {
    if (cache[n] >= 0) return cache[n];

    cache[n] = calculate(n - 1) + calculate(n - 2);

    return cache[n];
  }

  return calculate(n);
}

console.log(fib(2))

const nums = Array(10).fill(0)