def findUnsortedSubarray(nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    if len(nums) < 2:
        return 0

    min_val = float("inf")
    max_val = float("-inf")

    for i in range(len(nums)):
        num = nums[i]
        if is_out_of_order(i, num, nums):
            min_val = min(min_val, num)
            max_val = max(max_val, num)

    if max_val == float("-inf"):
        return 0

    left_sub_idx = 0
    right_sub_idx = len(nums) - 1

    while nums[left_sub_idx] <= min_val:
        left_sub_idx += 1
    while nums[right_sub_idx] >= max_val:
        right_sub_idx -= 1
    return abs(right_sub_idx - left_sub_idx) + 1


def is_out_of_order(i, num, nums):
    if i == 0:
        return nums[i + 1] < num
    if i == len(nums) - 1:
        return nums[i - 1] > num

    return nums[i + 1] < num or nums[i - 1] > num


print(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]))
