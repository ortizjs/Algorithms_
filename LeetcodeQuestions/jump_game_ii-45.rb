def jump(nums)
    jumps = 0
    left = 0
    right = 0

    while right < nums.length - 1
        farthest = 0

        (left..right).each do |i|
            farthest = [farthest, i + nums[i]].max
        end
        left = right + 1
        right = farthest
        jumps += 1
    end
    jumps
end