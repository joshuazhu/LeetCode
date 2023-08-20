/**
 * Given a string, find the length of the longest substring in it with no more than K distinct characters.
 *
 * Input: String="araaci", K=2
 * Output: 4
 * Explanation: The longest substring with no more than '2' distinct characters is "araa".
 *
 * Input: String="araaci", K=1
 * Output: 2
 * Explanation: The longest substring with no more than '1' distinct characters is "aa".
 */

const longestSubstringWithKDistinct = (str: string, k: number) => {
  const charArray = str.split('');

  if (charArray.length === 0) return 0;
  if (charArray.length < k) return charArray.length;

  let windowStart = 0;
  let result = 0;

  const charFrequency = charArray
    .slice(0, k)
    .reduce(
      (acc, c) => acc.set(c, (acc.get(c) || 0) + 1),
      new Map<string, number>(),
    );

  for (let windowEnd = k; windowEnd < charArray.length; windowEnd++) {
    const currentChar = charArray[windowEnd];
    charFrequency.set(currentChar, (charFrequency.get(currentChar) || 0) + 1);

    if (charFrequency.size > k) {
      const windowStartChar = charArray[windowStart];
      const windowStartCharFrequency = charFrequency.get(windowStartChar);
      if (windowStartCharFrequency - 1 === 0) {
        charFrequency.delete(windowStartChar);
      } else {
        charFrequency.set(windowStartChar, windowStartCharFrequency - 1);
      }

      windowStart++;
    }

    result = Math.max(result, windowEnd - windowStart + 1);
  }

  return result;
};

export const run = () => {
  console.log(
    'longestSubstringWithKDistinct: Input: String="araaci", K=2',
    longestSubstringWithKDistinct('araaci', 2),
  );

  console.log(
    'longestSubstringWithKDistinct: Input: String="araaci", K=1',
    longestSubstringWithKDistinct('araaci', 1),
  );

  console.log(
    'longestSubstringWithKDistinct: Input: String="cbbebi", K=3',
    longestSubstringWithKDistinct('cbbebi', 3),
  );

  console.log(
    'longestSubstringWithKDistinct: Input: String="cbbebi", K=10',
    longestSubstringWithKDistinct('cbbebi', 10),
  );
};
