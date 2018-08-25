import re
import sys


class Solution(object):
    def threeSum(self, nums):
        
        nums = sorted(nums)
        solutionSet = []
        i = 0
        while i < len(nums) - 2:
            if i == 0 or nums[i] != nums[i - 1]:
                indexF = i + 1  
                indexE = len(nums) - 1

                target = - nums[i]

                while indexF < indexE:
                    if nums[indexF] + nums[indexE] < target:
                        indexF = indexF + 1
                    elif nums[indexF] + nums[indexE] > target:
                        indexE = indexE - 1
                    else:
                        result = [nums[i], nums[indexF], nums[indexE]]
                        solutionSet.append(result)
                        
                        indexF = indexF + 1
                        indexE = indexE - 1

                        # Remove duplication
                        while indexF < indexE and nums[indexE] == nums[indexE + 1]:
                            indexE -= 1
                        while indexF < indexE and nums[indexF] == nums[indexF - 1]:
                            indexF += 1
            i = i + 1
            
        return solutionSet
        
x = Solution()
result = x.threeSum([-2,0,0,2,2])
#result = x.twoSum([-1, 0, 1, 2], 1)
print(result)
