/**
 * Given a string with lowercase letters only, if you are allowed to replace no more than k letters with any letter, find the length of the longest substring having the same letters after replacement.
 *
 * Input: String="aabccbb", k=2
 * Output: 5
 * Explanation: Replace the two 'c' with 'b' to have the longest repeating substring "bbbbb".
 */

const lengthOfLongestSubstring = (str: string, k: number) => {
  const charArray = str.split('');
  let windowStart = 0;
  let maxRepeatedCharCount = 0;
  let result = 0;
  const charFrequency = new Map<string, number>();

  for (let windowEnd = 0; windowEnd < charArray.length; windowEnd++) {
    const currentChar = charArray[windowEnd];

    charFrequency[currentChar] = (charFrequency[currentChar] || 0) + 1;

    maxRepeatedCharCount = Math.max(
      maxRepeatedCharCount,
      charFrequency[currentChar],
    );

    if (windowEnd - windowStart + 1 - maxRepeatedCharCount > k) {
      const windowStartChar = charFrequency[windowStart];
      charFrequency[windowStartChar]--;
      windowStart++;
    }

    result = Math.max(result, windowEnd - windowStart + 1);
  }

  return result;
};

export const run = () => {
  console.log('aabccbb, 2', lengthOfLongestSubstring('aabccbb', 2));
  console.log('abbcb, 1', lengthOfLongestSubstring('abbcb', 1));
  console.log('abccde, 1', lengthOfLongestSubstring('abccde', 1));
};
