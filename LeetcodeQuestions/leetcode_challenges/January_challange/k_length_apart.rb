def k_length_apart(nums, k)
    let distance = k

    nums.each do |num|
        if num == 1
            if distance < 0
                return false
            end
            distance = 0
        else
            distance += 1
        end
    end
    return true
end