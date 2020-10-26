def reverse_words(message)
    message = reverse_str_in__place(message, 0, message.length - 1)

    i = 0
    startIdx = 0
    until i == message.length + 1
        char = message[i]
        if char == " " || i == message.length
            reverse_str_in__place(message, startIdx, i - 1)
            startIdx = i + 1
        end
        i += 1
    end
    message.join(" ")
end

def reverse_str_in__place(chars, start, endIdx)

    while start < endIdx
        temp = chars[start]
        chars[start] = chars[endIdx]
        chars[endIdx] = temp
        start += 1
        endIdx -= 1
    end
    chars
end

message = ['c', 'a', 'k', 'e', ' ',
    'p', 'o', 'u', 'n', 'd', ' ',
    's', 't', 'e', 'a', 'l'];
print reverse_words(message)