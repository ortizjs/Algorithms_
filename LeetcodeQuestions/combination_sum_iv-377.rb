def combination_sum4(nums, target, memo = {})
    return memo[target] if memo.has_key?(target) 
    return 1 if target == 0
    return nil if target < 0
    
    count = 0
    nums.each do |num|
        diff = target - num
        combos = combination_sum4(nums, diff, memo)
        if combos != nil
            count += combos
        end
    end
    memo[target] = count
    return count
end

