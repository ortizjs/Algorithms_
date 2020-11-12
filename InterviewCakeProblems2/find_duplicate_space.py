import math
def find_duplicate(nums):
    floor = 1
    ceil = len(nums) - 1

    while floor < ceil:
        mid_point = floor + int(math.floor((ceil - floor) / 2))
        lower_range_floor = floor
        lower_range_ceil = mid_point
        upper_range_floor = mid_point + 1
        upper_range_ceil = ceil
        items_in_lower_range = 0

        distinct_items_in_lower_range = lower_range_ceil - lower_range_floor + 1

        for num in nums:
            if num >= lower_range_floor and num <= lower_range_ceil:
                items_in_lower_range += 1
        if items_in_lower_range > distinct_items_in_lower_range:
            floor = lower_range_floor
            ceil = lower_range_ceil
        else:
            floor = upper_range_floor
            ceil = upper_range_ceil
    return floor


nums = [2, 3, 5, 7, 8, 1, 4, 10, 6, 7, 9]
nums2 = [1, 2, 3, 4, 5, 6, 7, 7]
nums3 = [1, 2, 2, 2, 3, 4, 5, 6, 7]

print find_duplicate(nums)
print find_duplicate(nums2)
print find_duplicate(nums3)
