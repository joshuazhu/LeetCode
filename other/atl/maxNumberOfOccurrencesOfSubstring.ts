function maxFreq(s: string, maxLetters: number, minSize: number, maxSize: number): number {
  type InValidStringReason = {
    code: number
    reason: string
  }

  let maxFreqResult: [string, number] = ["", 0]

  function countOccurenciesOfSubstring(subString: string): number {
    let index = 0
    let count = 0

    while (index < s.length) {
      const firstIndexOfSubString = s.substring(index, s.length).indexOf(subString)
      if (firstIndexOfSubString > -1) {
        count++
        index = firstIndexOfSubString + 1
      } else {
        return count
      }
    }

    return count
  }

  function isInValidSubstring(subString: string): InValidStringReason | null {
    let stringSet: Set<string> = new Set<string>()

    subString.split("").forEach(char => stringSet.add(char))

    if (stringSet.size > maxLetters) {
      return {
        code: 1,
        reason: 'number of uniq chars larger than max letters'
      }
    }

    if (subString.length < minSize) {
      return {
        code: 2,
        reason: 'length smaller than min size'
      }
    }

    if (subString.length >= maxSize) {
      return {
        code: 3,
        reason: 'length larger than max size'
      }
    }

    return null
  }

  function findMaxFreq() {
    for (let i = 0; i < s.length; i++) {
      let frontIndex = i
      let endIndex = i

      while (endIndex <= s.length) {
        const subString = s.substring(frontIndex, endIndex)
        const invalidSubStringReason = isInValidSubstring(subString)

        if (!invalidSubStringReason) {
          //valid substring
          const occurrencies = countOccurenciesOfSubstring(subString)

          if (maxFreqResult[1] === 0) {
            maxFreqResult = [subString, occurrencies]
          } else if (maxFreqResult[1] < occurrencies) {
            maxFreqResult = [subString, occurrencies]
          }

          frontIndex++
        } else {
          if (invalidSubStringReason.code === 1) {
            frontIndex++
            continue
          }

          if (invalidSubStringReason.code === 2) {
            endIndex++
            continue
          }

          if (invalidSubStringReason.code === 3) {
            frontIndex++
            continue
          }
        }
      }
    }
  }

  findMaxFreq()

  return maxFreqResult[1]
};
µ