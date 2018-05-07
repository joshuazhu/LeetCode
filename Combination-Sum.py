class Solution(object):
    def combinationSum(self, candidates, target):
        currentIndex = 0
        tmpResultSet = []
        result = []

        candidates.sort()
        self.calculateSum(tmpResultSet, currentIndex, candidates, target, result)
        return result

    def calculateSum(self, tmpResultSet, currentIndex, candidates, target, result):
        if sum(tmpResultSet) == target:
            result.append(tmpResultSet)
            return

        for i in range(currentIndex, len(candidates)):
            if sum(tmpResultSet) + candidates[i] > target:
                return
            self.calculateSum(tmpResultSet + [candidates[i]], i, candidates, target, result)


x = Solution()
result = x.combinationSum([8,7,4,3], 11)
print(result)