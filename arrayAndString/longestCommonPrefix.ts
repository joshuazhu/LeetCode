function longestCommonPrefixRecur(strs: string[]): string {

    if(strs.length === 0) return ""
    if(strs.length === 1) return strs[0]

    let result = ""

    let indexLeft = 0
    let indexRight = 0

    while(indexLeft < strs[0].length && indexRight < strs[1].length) {
        if(strs[0].split("")[indexLeft] === strs[1].split("")[indexRight]) {
            result += strs[0].split("")[indexLeft]
            indexLeft++
            indexRight++
            continue
        } 
        break
    }
    
    return longestCommonPrefixRecur([result, ...strs.slice(2, strs.length)])
};

function longestCommonPrefixIter(strs: string[]): string {
    let result: string[] = [""]
    let currentChar: string = ""

    let checkingPosition = 0

    while(true) {
        for(let i = 0; i < strs.length; i++ ) {
            if(checkingPosition >= strs[i].length) {
                return result.join("")
            }

            const currentCharInSubstr = strs[i].split("")[checkingPosition]

            if(currentChar === "") {
                currentChar = currentCharInSubstr
                continue
            }

            if(currentCharInSubstr !== currentChar) {
                return result.join("")
            }
        }

        result.push[currentChar]
        checkingPosition++
        currentChar = ""
    }
};