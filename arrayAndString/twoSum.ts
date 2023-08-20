function twoSum(numbers: number[], target: number): number[] {
    let indexLeft = 0;
    let indexRight = 0;
    
    for(let i = numbers.length -1; i >= 0; i ++) {
        if(numbers[i] > target) {
            indexRight = i
        } else {
            break
        }
    }
    
    indexRight = indexRight === 0 ? numbers.length - 1: indexRight

    while(indexLeft < indexRight) {
        let currentLeft = numbers[indexLeft]
        let currentRight = numbers[indexRight]

        const currentSum = currentLeft + currentRight

        if(currentSum === target) {
            return [indexLeft+1, indexRight+1]
        }

        if(currentSum > target) {
            indexRight--
        } else {
            indexLeft++
        }
    }

    return []
};  