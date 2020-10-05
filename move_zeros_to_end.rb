def move_zeros_to_end(nums)

    nums.each_with_index do |num,i|
        num = nums[i]
        if num == 0
            nums.delete_at(i)
            nums << 0
        end
        i += 1
    end
    nums
end

## To be done in place and maintaning the order for non-zero values
p move_zeros_to_end([0,1,0,3,12])