# @param {Integer[]} nums
# @return {Boolean}
def check_possibility(nums)
    pos  = -1
    (0..nums.length - 2).each do |i|
        if nums[i] > nums[i + 1]
            return false if pos != -1
            pos = i
        end
    end
    return pos == -1 || pos == 0 || pos == nums.length - 2 || nums[pos - 1] <= nums[pos + 1] || nums[pos] <= nums[pos + 2]
end