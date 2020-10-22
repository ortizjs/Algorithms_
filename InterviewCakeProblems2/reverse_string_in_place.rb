def reverse_string_in_place(char_arr)
    start = 0
    endIdx = char_arr.length - 1

    while start < endIdx
        temp = char_arr[start]
        char_arr[start] = char_arr[endIdx]
        char_arr[endIdx] = temp;
        start += 1
        endIdx -= 1
    end
    char_arr
end

p reverse_string_in_place(['a','b','c','d'])
p reverse_string_in_place(['j','o','n','n','a','t','a','n'])
p reverse_string_in_place(['j','o','b'])