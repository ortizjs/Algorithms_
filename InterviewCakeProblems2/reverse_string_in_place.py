def reverse_string_in_place(char_list):
    start = 0
    end = len(char_list) - 1

    while start < end:
        temp = char_list[start]
        char_list[start] = char_list[end]
        char_list[end] = temp
        start += 1
        end -= 1
    return char_list

print(reverse_string_in_place(['a', 'b', 'c', 'd']))
print(reverse_string_in_place(['j', 'o', 'n', 'n', 'a', 't', 'a', 'n']))
print(reverse_string_in_place(['j', 'o', 'b']))
