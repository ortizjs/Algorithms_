def binary_search(nums, target):
    low = 0
    upper = len(nums) - 1
    found = False
    while upper >= low and not found:
        middle_idx = int((low + upper) / 2)
        if nums[middle_idx] > target:
            print(nums[low:middle_idx])
            return binary_search(nums[low:middle_idx], target)
        elif nums[middle_idx] < target:
            print(nums[middle_idx + 1:])
            return binary_search(nums[middle_idx + 1:], target)
        elif nums[middle_idx] == target:
            return True
        else:
            return False

print (binary_search([1,2,3,4,5,6,7], 7))
