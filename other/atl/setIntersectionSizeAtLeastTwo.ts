function intersectionSizeTwo(intervals: number[][]): number {
  //for each intervals, we need to make sure
  //1. the start or end are in the containing set.
  //2. the intersection length of intervals and containing sets should be larget than 2

  //iterate each interval in intervals, for each itervation we evaluate:
  // 1. start with the last element in nums, and for loop until  endi
  // 2. find the largest number that can make current intervals has at least 2 integers in nums

  function isValidContainingsetForInterval(containingSet: number[], interval: number[]): boolean {
    let count = 0

    for (let i = interval[0]; i <= interval[1]; i++) {
      if (containingSet.includes(i)) {
        count++
        continue
      }
    }

    return count >= 2
  }


  function getContainingSet() {
    let containingSet: number[] = []

    const sortedIntervals = intervals.sort((a, b) => a[1] !== b[1] ? a[1] - b[1] : a[0] - b[0])

    console.log(sortedIntervals)

    sortedIntervals.forEach(interval => {
      let offset = 0

      while (!isValidContainingsetForInterval(containingSet, interval)) {
        const newElement = interval[1] - offset
        if (!containingSet.includes(newElement)) {
          containingSet.push(newElement)
        }
        offset++
      }
    })

    return containingSet
  }

  const containingSet = getContainingSet()

  return containingSet.length
};
