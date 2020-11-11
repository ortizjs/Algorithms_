def binary_search(target, nums)
    floor_idx = -1
    ceil_idx = nums.length
    while floor_idx + 1 < ceil_idx
        distance = ceil_idx - floor_idx
        half_distance = (distance/2).floor
        guess_idx = floor_idx + half_distance
        guess_val = nums[guess_idx]

        return true if target == guess_val
        if target < guess_val
            ceil_idx = guess_idx
        else
            floor_idx = guess_idx
        end
    end
    false
end

arr1 = [1,2,3,4,5,6,7,8,9,10];
arr2 = [2,4,7,11,21,34,56,100];
arr3 = [3,4,5,7,8,9,10]

p binary_search(7,arr1)
p binary_search(21,arr2)
p binary_search(21,arr3)