class Solution(object):
    def runningSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        sum = 0
        sums = [0] * len(nums)
        for i in range(len(nums)):
            sum += nums[i]
            sums[i] = sum
        return sums
