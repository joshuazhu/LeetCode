/**
 * Given a string, find the length of the longest substring, which has all distinct characters.
 *
 * Input: String="aabccbb"
 * Output: 3
 * Explanation: The longest substring with distinct characters is "abc".
 */

const nonRepeatSubstring = (str: string): number => {
  const charArray = str.split('');
  const charFrequency = new Map<string, number>();
  let windowStart = 0;
  let result = 0;

  for (let windowEnd = 0; windowEnd < charArray.length; windowEnd++) {
    const currentChar = charArray[windowEnd];

    while (charFrequency.get(currentChar) > 0) {
      const windowStartChar = charArray[windowStart];
      charFrequency.delete(windowStartChar);
      windowStart++;
    }

    charFrequency.set(currentChar, 1);

    result = Math.max(result, windowEnd - windowStart + 1);
  }

  return result;
};

export const run = () => {
  console.log('aabccbb', nonRepeatSubstring('aabccbb'));
  console.log('abbbb', nonRepeatSubstring('abbbb'));
  console.log('abccde', nonRepeatSubstring('abccde'));
};
