const climbStairsTraceBack = (n: number): number => {
  let results: number[][] = [];
  let cache: number[] = [];

  const climb = (remain: number, result: number[]) => {
    if (remain === 0) {
      results = [...results, result];
    }

    if(remain < 0 || cache[remain] === 1) {
        return
    }

    climb(remain-1, [...result, 1])
    climb(remain-2, [...result, 2])
  };


  climb(n, [])
  return results.length
};


const climbStairsCache = (n: number): number => {
    let cache: number[] = []

    const climb = (remain: number) => {
        if(remain === 0) {
            return
        }

        if(remain === 1 || remain === 2) {
            return remain
        }

        if(cache[remain]) {
            return cache[remain]
        }

        const result1 = climb(remain - 1)
        const result2 = climb(remain - 2)

        cache[remain - 1] = result1
        cache[remain - 2] = result2

        return result1 + result2
    }

    return climb(n)
}

console.log(climbStairsCache(3))
console.log(climbStairsCache(4))

//4 [1,1,1,1] [1,2,1] [1,1,2] [2,1,1] [2,2]