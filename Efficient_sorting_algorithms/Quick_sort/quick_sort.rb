def quick_sort(arr)
    # if arr.length <= 1
    #     return arr
    # end
    # pivot = arr.shift
    # left_arr = arr.filter { |num| num < pivot}
    # right_arr = arr.filter { |num| num > pivot}
    # sorted_left = quick_sort(left_arr)
    # sorted_right = quick_sort(right_arr)
    # return sorted_left.concat([pivot]).concat(sorted_right)
    return arr if arr.length <= 1
    pivot = [arr.first]
    left_arr = arr[1..-1].filter {|el| el < arr.first}
    right_arr = arr[1..-1].filter {|el| el >= arr.first}
    quick_sort(left_arr) + pivot + quick_sort(right_arr)
end
p quick_sort([4,3,5,6,7,8,3,1])