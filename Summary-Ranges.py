class Solution(object):
    def summaryRanges(self, nums):
        indexFront = 0
        indexRear = 0
        result = []

        for i in range(0, len(nums)):
            if indexRear < len(nums) - 1 and nums[indexRear] == nums[indexRear + 1] - 1:
                indexRear += 1
            else:
                if indexFront == indexRear:
                    result.append(str(nums[indexRear]))
                else:
                    result.append(str(nums[indexFront]) + "->" + str(nums[indexRear]))

                indexRear += 1
                indexFront = indexRear

        return result


x = Solution()
result = x.summaryRanges([0,1,2,4,5,7])
print(result)
