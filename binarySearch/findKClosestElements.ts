//https://leetcode.com/problems/find-k-closest-elements/

function findClosestElements(arr: number[], k: number, x: number): number[] {
    if(k > arr.length) {
        return []
    }

    let results: number[] = []
    function findClosestElement(arr: number[]): number {
        let left = 0
        let right = arr.length - 1

        while (left < right - 1) {
            let mid = left + Math.floor((right - left) / 2)

            if(arr[mid] < x) {
                left = mid
            } else {
                right = mid
            }
        }

        if(left === right) return left

        if(Math.abs(x - arr[left]) === Math.abs(x-arr[right])) return left < right ? left : right

        if(Math.abs(x - arr[left]) < Math.abs( x - arr[right])) return left 
        else return right
    }

    while(k > 0) {
        let index = findClosestElement(arr)
        results.push(arr[index])
        arr.splice(index, 1)
        k--
    }

    return results.sort((a, b) => a - b)
};

//Sliding window + BinarySearch

// function findClosestElements(arr: number[], k: number, x: number): number[] {

//     if(k > arr.length) {
//         return []
//     }

//     let results = []
//     function findClosestElement(arr: number[]): number {
//         let left = 0
//         let right = arr.length - 1

//         while (left < right - 1) {
//             let mid = left + Math.floor((right - left) / 2)

//             if(arr[mid] < x) {
//                 left = mid
//             } else {
//                 right = mid
//             }
//         }

//         if(left === right) return left

//         if(Math.abs(x - arr[left]) === Math.abs(x-arr[right])) return left < right ? left : right

//         if(Math.abs(x - arr[left]) < Math.abs( x - arr[right])) return left 
//         else return right
//     }

//     let index = findClosestElement(arr)
//     let result = [arr[index]]
    
//     let left = index -1
//     let right = index + 1

//     while(result.length < k) {
//         if(left < 0) {
//             result = [...result, arr[right]]
//             right++
//             continue
//         }

//         if(right > arr.length - 1) {
//             result = [arr[left], ...result]
//             left --
//             continue
//         }

//         if(Math.abs(x - arr[left]) <= Math.abs(x - arr[right])) {
//             result = [arr[left], ...result]
//             left--
//             continue
//         }

//         result = [...result, arr[right]]
//         right++
//         continue
//     }

//     return result

// };