// https://leetcode.com/explore/learn/card/sorting/695/non-comparison-based-sorts/4490/

function smallestTrimmedNumbers(nums: string[], queries: number[][]): number[] {
    let trimSortedNums: {[key: number]: string[]} = {}
    let finalResult: number[] = []

    const radixSort = (nums: string[], index: number): string[] => {
        let results: Array<string> = new Array<string>(nums.length)

        let freq: {[key: string]: number} = {}
        let position: {[key:string]: number} = {}


       nums.forEach(v => {
           const currentDigit = v.split("")[v.length - index]
           freq[currentDigit] = !freq[currentDigit] ? 1 : freq[currentDigit] += 1

           position[currentDigit] = 0
       })

       let prev = "0"
       let currentNumber = 1
       position["0"] = 0

       while(currentNumber <= 9) {
           if(freq[currentNumber+""]) {
               position[currentNumber+""] = position [prev] + freq[prev] || 0
               prev = currentNumber + ""
           }

           currentNumber ++
       }
       

       nums.forEach(v => {
           const currentDigit = v.split("")[v.length - index]
           results[position[currentDigit]] = v
           position[currentDigit] ++
       })

        return results
    }

    for(let i = 1; i <= nums[0].length; i ++) {
        const tmp = radixSort(nums, i)
        trimSortedNums[i] = tmp
    }

    for(let i = 0; i < queries.length; i ++) {
        const query = queries[i]
        let trim = query[1]
        let kth = query[0]
        finalResult.push(Number.parseInt(trimSortedNums[trim][kth - 1]))
    }

    console.log(finalResult)

    return finalResult
};


