from math import *
def reverse_string_in_place(str):
    char_list = list(str)
    lower = 0
    upper = len(char_list) - 1
    while lower < upper:
        temp = char_list[lower]
        char_list[lower] = char_list[upper]
        char_list[upper] = temp
        lower += 1
        upper -= 1
    
    return "".join(char_list)

print reverse_string_in_place("Jonnatan")
print reverse_string_in_place("Andrea")
print reverse_string_in_place("Doby")