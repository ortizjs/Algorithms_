def max_operations(nums, k)
    map = {}
    counter = 0
    
    nums.each do |num|
        diff = k - num
        if map.has_key?(diff)
            if map[diff] == 1
                map.delete(diff)
            else
                map[diff] -= 1
            end
            counter += 1
        else
            if map.has_key?(num)
                map[num] += 1
            else
                map[num] = 1
            end
        end
    end
    return counter
end