def find_duplicate_space(nums)
    floor = 1
    ceil = nums.length - 1

    while floor < ceil
        distance = ceil - floor
        half_ditance = (distance/2).floor
        mid_point = floor + half_ditance

        lower_range_floor = floor;
        lower_range_ceil = mid_point
        upper_range_floor = mid_point + 1
        upper_range_ceil = ceil 
        items_in_lower_range = 0
        distinct_possibilities_in_lower_range = lower_range_ceil - lower_range_floor + 1

        nums.each do |num|
            if num >= lower_range_floor && num <= lower_range_ceil
                items_in_lower_range += 1
            end
            
        end 
        if items_in_lower_range > distinct_possibilities_in_lower_range
            floor = lower_range_floor
            ceil = lower_range_ceil
        else
            floor = upper_range_floor
            ceil = upper_range_ceil
        end
    end
    return floor
end


nums = [2, 3, 5, 7, 8, 1, 4, 10, 6, 7, 9]
nums2 = [1,2,3,4,5,6,7,7]
nums3 = [1,2,2,2,3,4,5,6,7]

p find_duplicate_space(nums)
p find_duplicate_space(nums2)
p find_duplicate_space(nums3)
