def quick_sort(arr)
    if arr.length <= 1
        return arr
    end
    pivot = arr.shift
    left_arr = arr.filter { |num| num < pivot}
    right_arr = arr.filter { |num| num > pivot}
    sorted_left = quick_sort(left_arr)
    sorted_right = quick_sort(right_arr)
    return sorted_left.concat([pivot]).concat(sorted_right)
end
p quick_sort([4,3,5,6,7,8,3,1])