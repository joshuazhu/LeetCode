class Solution(object):
    def firstUniqChar(self, s):
        if len(s) == 1:
            return 0

        charArray = list(s)
        charHash = {}
        for char in charArray:
            try:
                charHash[char] += 1
            except:
                charHash[char] = 1
        
        for index in range (0, len(charArray)):
            
            if charHash[charArray[index]] == 1:
                return index
        return -1

x = Solution()
result = x.firstUniqChar("dddccdbba")
print(result)    