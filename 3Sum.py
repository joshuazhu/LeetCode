#solution 1
class Solution:
    def threeSum(self, nums):
        result = []
        self.calculateThreeSum(nums, 0, [], result)
        return result        

    def calculateThreeSum(self, nums, index, subSets, result):
        if len(subSets) > 3:
            return
        
        if len(subSets) == 3 and sum(subSets) != 0:
            return
        
        if len(subSets) == 3 and sum(subSets) == 0:
            subSets.sort()
            if subSets not in result:
                result.append(subSets)
        
        for i in range(index, len(nums)):
            tmpSubSets = subSets + [nums[i]]
            self.calculateThreeSum(nums, i + 1, tmpSubSets, result)
                
