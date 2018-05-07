import re
import sys
import math

class Solution(object):
    def isPalindrome(self, s):
        if len(s) == 0:
            return True

        if len(s) == 1:
            return True

        s = re.sub(r'\W+', '', s).lower()
        sCount = len(s)
        sStack = []
        for index1 in range(int(sCount / 2)):
            sStack.append(s[index1])        
        offset = 0 if sCount % 2 == 0 else 1  
        index2 = offset + int(sCount/2)
        while index2 < sCount:
            if sStack.pop() != s[index2]:
                return False
            index2 += 1
        
        return True

x = Solution()
result = x.isPalindrome(sys.argv[1])
print(result)
