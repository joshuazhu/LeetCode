// https://leetcode.com/problems/maximum-gap/editorial/

function maximumGap(nums: number[]): number {
    //if less than 2 return 0

    //1. get min and max number
    //2. get freq to store the occurrency of the numbers in nums
    //3. use index to iterate from min to max number, and calculate the distance in pairs, return the max

    if(nums.length < 2) return 0

    let minNumber = Number.POSITIVE_INFINITY
    let maxNumber = Number.NEGATIVE_INFINITY
    let freq: {[key: number]: number} = {}

    nums.forEach(v => {
        
        if(v < minNumber) minNumber = v
        if(v > maxNumber) maxNumber = v 
    })

    nums.forEach(v => 
        freq[maxNumber - v] = !freq[maxNumber - v] ? 1 : freq[maxNumber - v] + 1
    )

    maxNumber = maxNumber - minNumber

    let currentNumber = 0
    let prevNumber = 0
    let maxDist = 0

    while(currentNumber <= maxNumber) {
        if(freq[currentNumber]) {
            if(currentNumber - prevNumber > maxDist) maxDist = currentNumber - prevNumber
            
            prevNumber = currentNumber
        }

        currentNumber++
    }

    return maxDist
};