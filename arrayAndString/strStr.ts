function strStr(haystack: string, needle: string): number {
    
    for(let i = 0; i < haystack.length; i ++) {
        let indexH = i
        let indexN = 0

        while(indexN < needle.length) {
            if(haystack[indexH] === needle[indexN]) {
                indexH ++
                indexN ++
                continue
            }
            break
        }

        if(indexN === needle.length) return i
    }

    return -1
    
};