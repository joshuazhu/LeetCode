//https://leetcode.com/problems/minimum-absolute-difference/editorial/

function minimumAbsDifference(arr: number[]): number[][] {
    // 1. freq map to save the numbers
    // 2. iterate freq key and find the distance between each 2 numbers, and record the smallest distance
    // 3. find all the 2 pair numbers with the smallest distance

    let freq : {[key: number]: number} = {}
    let res: number[][] = []

    let minNumber = Number.POSITIVE_INFINITY
    let maxNumber = Number.NEGATIVE_INFINITY

    arr.forEach(v => {
        if(v > maxNumber) maxNumber = v
        if(v < minNumber) minNumber = v
    })

    arr.forEach(v => freq[v] = 1)

    let minDistance = Number.POSITIVE_INFINITY

    let currentNumber = minNumber
    let prevNumber = currentNumber
    
    while(currentNumber <= maxNumber) {
        if(currentNumber === prevNumber) {
            currentNumber ++
            continue
        }

        if(freq[currentNumber]) {
            if((currentNumber - prevNumber) === minDistance) {
                res.push([prevNumber, currentNumber])
            } else if((currentNumber - prevNumber) < minDistance) {
                res = [[prevNumber, currentNumber]]
                minDistance = currentNumber - prevNumber
            }
            prevNumber = currentNumber
        }

        currentNumber ++
    }

    return res
};