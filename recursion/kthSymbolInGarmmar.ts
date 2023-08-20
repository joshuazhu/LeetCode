function kthGrammar(n: number, k: number): number {
    if(n === 1) return 0

    if(k % 2 === 0) {
        return kthGrammar(n-1, k/2) ^ 1
    } else {
        return kthGrammar(n-1, Math.floor(k/2) + 1)
    }
};