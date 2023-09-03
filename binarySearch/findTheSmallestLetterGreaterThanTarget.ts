//https://leetcode.com/problems/find-smallest-letter-greater-than-target/editorial/

function nextGreatestLetter(letters: string[], target: string): string {
  if (letters.length === 0) return ""

  let left = 0
  let right = letters.length

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2)

    if (letters[mid].charCodeAt(0) <= target.charCodeAt(0)) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  if (letters[left].charCodeAt(0) > target.charCodeAt(0)) return letters[left]
  else return letters[0]
};
