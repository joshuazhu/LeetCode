function myPow(x: number, n: number): number {
    // if(x === 1) return 1

    //  const calculate = (x: number, n:number, result: number) => {
    //      if(n === 0) return result

    //      if(n < 0) return calculate(x, n + 1, result / x)

    //      if(n > 0) return calculate(x, n - 1, result * x)
    //  }

    //  return calculate(x, n, 1)

    if(x === 1) return 1

    const binaryExp = (x: number, n:number) => {
         if(n === 0) return 1

         if(n < 0) return 1 / binaryExp(x, -n)

          if(n % 2) {
              return x * binaryExp(x * x, (n-1) / 2 )
          }

          return binaryExp(x * x, n / 2)

     }

     return binaryExp(x, n)
};