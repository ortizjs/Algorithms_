def find_kth_positive(arr, k)
    counter = 0
    pointer = 1

    while (counter <= k)
        counter += 1 if arr.index(pointer) == nil
        return pointer if counter == k
        pointer += 1
    end
end

p find_kth_positive([2,3,4,7,11],5)