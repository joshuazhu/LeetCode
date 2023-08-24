//https://leetcode.com/problems/letter-combinations-of-a-phone-number/editorial/

function letterCombinations(digits: string): string[] {
    if(digits.length === 0) return []
    
    let lettersMapping: {[key: string]: string} = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }

    //digits
    //1. loop through digit in digits
    //2. loop through digits in each number, add them to result

    const digitsArray = digits.split("")
    let results: string[] = []

    function calculate(index: number, tmpResult: string[]) {
        if(tmpResult.length === digits.length) {
            results.push(tmpResult.join(""))
        }

        for(let i = index; i < digitsArray.length; i ++) {
            lettersMapping[digitsArray[i]].split("").forEach(c => calculate(i+1, [...tmpResult, c]))
        }
    }

    calculate(0, [])
    return results
};