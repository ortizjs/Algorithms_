def highest_product_of_three(nums)
    if nums.length < 3
        raise Exception.new("Input must be at least 3 integers!")
    end

    highest_of_three = nums[0] * nums[1] * nums[2]
    highest_of_two = nums[0] * nums[1]
    lowest_of_two = nums[0] * nums[1]
    highest = [nums[0], nums[1]].max
    lowest = [nums[0], nums[1]].min

    nums[2...nums.length].each do |current_num|
        highest_of_three = [highest_of_three, current_num * highest_of_two, current_num * lowest_of_two].max
        highest_of_two = [highest_of_two, current_num * highest, current_num * lowest].max
        lowest_of_two = [lowest_of_two, current_num * highest, current_num * lowest].min
        highest = [highest, current_num].max
        lowest = [lowest, current_num].min
    end
    highest_of_three
end

nums = [-10, -10, 1, 3, 2];
nums2 = [1, 10, -5, 1, -100];
puts highest_product_of_three(nums);
puts highest_product_of_three(nums2);