import sys
class Solution(object):
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """

        charArray = list(s)

        if len(charArray) == 0:
            return 0

        if len(charArray) == 1:
            return 1

        indexFront = 0
        indexRear = 1
        largestSubStrLength = 1
        str_length = len(charArray)
        subString = s[indexFront: indexRear]

        while indexRear < str_length:
            try:
                # if next char is in substring, reset subString and move index by 1
                subString.index(charArray[indexRear])
                indexFront += 1
            except:
                # update largest substring str_length
                if largestSubStrLength < (indexRear - indexFront + 1):
                    largestSubStrLength = indexRear - indexFront + 1
                # if next char is not in substring, increase substring length by 1
                indexRear += 1


            subString = s[indexFront: indexRear]
        return largestSubStrLength

