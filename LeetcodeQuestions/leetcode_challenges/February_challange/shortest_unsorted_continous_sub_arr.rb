def find_unsorted_subarray(nums)
    if nums.length < 2
            return 0
    end
    minVal = Float::INFINITY
    maxVal = -Float::INFINITY
    
    (0...nums.length).each do |i|
        num = nums[i]
        
        if is_out_of_order(i, num, nums) == true
            minVal = [minVal, num].min
            maxVal = [maxVal, num].max
        end
    end
    left_sub_idx = 0
    right_sub_idx = nums.length - 1
    
    if minVal == Float::INFINITY
        return 0
    end
    
    while nums[left_sub_idx] <= minVal
        left_sub_idx += 1
    end
    
    while nums[right_sub_idx] >= maxVal
        right_sub_idx -= 1
    end
    
    return (right_sub_idx - left_sub_idx).abs + 1
    
end

def is_out_of_order(i, num, nums)
    puts num, i
    if i == 0
        return nums[i + 1] < num
    end
    if i == nums.length - 1
        return nums[i - 1] > num
    end
    
    return nums[i + 1] < num || nums[i - 1] > num
end

