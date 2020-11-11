import math
def binary_search(target, nums):
    floor_idx = -1
    ceil_idx = len(nums)
    while floor_idx + 1 < ceil_idx:
        distance = ceil_idx - floor_idx
        hald_distance = int(math.floor(distance/2))
        guess_idx = floor_idx + hald_distance
        guess_val = nums[guess_idx]

        if target == guess_val:
            return True
        if target < guess_val:
            ceil_idx = guess_idx
        else:
            floor_idx = guess_idx
    return False

arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr2 = [2, 4, 7, 11, 21, 34, 56, 100]
arr3 = [3, 4, 5, 7, 8, 9, 10]

print binary_search(7, arr1)
print binary_search(21, arr2)
print binary_search(21, arr3)
