def find_error_nums(nums)
    arr = Array.new(nums.length).fill(0)
    res = Array.new(2)
    
    nums.each {|num| arr[num - 1] += 1}
    
    (0...arr.length).each do |i|
        if arr[i] == 2
            res[0] = i + 1
        end
        
        if arr[i] == 0
            res[1] = i + 1
        end
    end
    
    res
end

p find_error_nums([1,2,2,4])
p find_error_nums([1,1])
