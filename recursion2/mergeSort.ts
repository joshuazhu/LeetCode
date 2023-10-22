function sortArray(nums: number[]) {

  function sort(nums1: number[], nums2: number[]): number[] {
    let sortedArray: number[] = []
    let index1 = 0
    let index2 = 0

    while (index1 < nums1.length && index2 < nums2.length) {
      if (nums1[index1] < nums2[index2]) {
        sortedArray.push(nums1[index1])
        index1++
      } else if (nums1[index1] > nums2[index2]) {
        sortedArray.push(nums2[index2])
        index2++
      } else {
        sortedArray.push(nums1[index1])
        sortedArray.push(nums2[index2])

        index1++
        index2++
      }
    }

    while (index1 < nums1.length) {
      sortedArray.push(nums1[index1])
      index1++
    }

    while (index2 < nums2.length) {
      sortedArray.push(nums2[index2])
      index2++
    }

    return sortedArray
  }


  function divideAndSort(nums: number[]): number[] {
    if (nums.length < 2) return nums
    let mid = Math.floor(nums.length / 2)
    let leftArray = divideAndSort(nums.slice(0, mid))
    let rightArray = divideAndSort(nums.slice(mid, nums.length))

    return sort(leftArray, rightArray)
  }

  return divideAndSort(nums)
}
