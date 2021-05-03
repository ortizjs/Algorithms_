def running_sum(nums)
    sum = 0
    sums = Array(nums.length)

    (0...nums.length).each do |i|
        sums[i] = sum += nums[i]
    end
    sums
end