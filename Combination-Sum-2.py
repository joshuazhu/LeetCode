class Solution(object):
    def combinationSum2(self, candidates, target):
        currentIndex = 0
        tmpResultSet = []
        result = []

        candidates.sort()
        self.calculateSum2(tmpResultSet, currentIndex, candidates, target, result)
        return result

    def calculateSum2(self, tmpResultSet, currentIndex, candidates, target, result):
        if sum(tmpResultSet) == target:
            tmpResultSet.sort()
            if tmpResultSet not in result:
                result.append(tmpResultSet)
            return

        tmpArray = candidates[:]

        for i in range(currentIndex, len(tmpArray)):
            if sum(tmpResultSet) + tmpArray[i] > target:
                return
            self.calculateSum2(tmpResultSet + [tmpArray[i]], i + 1, tmpArray, target, result)

x = Solution()
result = x.combinationSum2([10,1,2,7,6,1,5], 8)
print(result)