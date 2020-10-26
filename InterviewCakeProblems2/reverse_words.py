def reverse_words(message):
    message = reverse_string_in_place(message, 0, len(message) - 1)

    startIdx = 0
    for i in range(len(message) + 1):
        if i == len(message) or message[i] == " ":
            reverse_string_in_place(message, startIdx, i - 1)
            startIdx = i + 1
    return "".join(message)


def reverse_string_in_place(chars, start, end):

    while start < end:
        chars[start], chars[end] = chars[end], chars[start] 
        start += 1
        end -= 1
    return chars


message = ['c', 'a', 'k', 'e', ' ',
           'p', 'o', 'u', 'n', 'd', ' ',
           's', 't', 'e', 'a', 'l']
print reverse_words(message)
