def highest_product_of_three(nums):
    highest_of_three = nums[0] * nums[1] * nums[2]
    highest_of_two = nums[0] * nums[1]
    lowest_of_two = nums[0] * nums[1]
    highest = max(nums[0], nums[1])
    lowest = min(nums[0], nums[1])

    for i in range(2, len(nums)):
        current_num = nums[i]
        highest_of_three = max(highest_of_three, current_num * highest_of_two, current_num * lowest_of_two)
        highest_of_two = max(highest_of_two, current_num * highest, current_num * lowest)
        lowest_of_two = min(lowest_of_two, current_num * highest, current_num * lowest)
        highest = max(highest, current_num)
        lowest = min(lowest, current_num)
    return highest_of_three


nums = [-10, -10, 1, 3, 2]
nums2 = [1, 10, -5, 1, -100]
print highest_product_of_three(nums)
print highest_product_of_three(nums2)
