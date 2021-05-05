class Solution(object):
    def checkPossibility(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        pos = -1
        for i in range(len(nums) - 1):
            if nums[i] > nums[i + 1]:
                if pos != -1:
                    return False
                pos = i
        return pos == -1 or pos == 0 or pos == len(nums) - 2 or nums[pos - 1] <= nums[pos + 1] or nums[pos] <= nums[pos + 2]
