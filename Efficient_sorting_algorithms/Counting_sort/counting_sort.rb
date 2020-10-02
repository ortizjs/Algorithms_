def counting_sort(arr, max)
    counter_arr = Array.new(max + 1).fill(0)
    final_arr = []

    i = 0
    until i == arr.length
        num = arr[i]
        counter_arr[num] += 1
        i += 1
    end

    j = 0
    until j == arr.length + 1
        counter = counter_arr[j]
        while counter > 0
            final_arr << j
            counter -= 1
        end
        j += 1
    end
    final_arr
end


p counting_sort([4,3,5,6,7,8,3,1], 8)