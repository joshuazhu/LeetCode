const fibonacciSequence = (n: number): number => {
    if(n === 0) return 0
    if(n === 1) return 1
    
    return fibonacciSequence(n - 1) + fibonacciSequence(n - 2)
}

// 1 1 2 3 5 8 13
console.log(fibonacciSequence(5))