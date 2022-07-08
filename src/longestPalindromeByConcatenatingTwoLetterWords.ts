/**
 * You are given an array of strings words. Each element of words consists of two lowercase English letters.
 * Create the longest possible palindrome by selecting some elements from words and concatenating them in any order. Each element can be selected at most once.
 * Return the length of the longest palindrome that you can create. If it is impossible to create any palindrome, return 0.
 * A palindrome is a string that reads the same forward and backward.
 *
 * URL: https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/
 */

const longestPalindrome = (words: string[]): number => {
  //For each element
  // "xx" can only happen once
  // other element, "AB" find "BA" if exists, put both "AB" and "BA" into results set
  // otherwise, continue

  if (words.length === 0) {
    return 0;
  }

  const duplicatedLetterWords = words.filter(isDuplicatedLetterWord);
  const duplicatedLetterWordOccurrence = duplicatedLetterWords.reduce(
    (accuMap, cur) => accuMap.set(cur, accuMap.get(cur) || 0 + 1),
    new Map<string, number>(),
  );

  const nonDuplicatedLetterWords = words.filter(
    (w) => !isDuplicatedLetterWord(w),
  );
  const nonDuplicatedLetterWordsResult = findResults(nonDuplicatedLetterWords);

  return (
    ((Array.from(duplicatedLetterWordOccurrence.values()).reverse()[0] || 0) +
      nonDuplicatedLetterWordsResult.length) *
    2
  );
};

const findResults = (words: string[]): string[] => {
  let results = Array<string>();
  for (let i = 0; i < words.length; i++) {
    for (let j = i; j < words.length; j++) {
      if (isPalindromeWords(words[i], words[j])) {
        results = [...results, words[i], words[j]];
        break;
      }
    }
  }

  return results;
};

const isDuplicatedLetterWord = (word: string) =>
  word.split('')[0] === word.split('')[1];

const isPalindromeWords = (word1: string, word2: string): boolean =>
  word1.split('')[0] == word2.split('')[1] &&
  word1.split('')[1] == word2.split('')[0];

export const run = () => console.log(longestPalindrome(['lc', 'cl', 'gg']));
