# def reverse_words(message):
#     mess1 = "".join(message)
#     # print mess1
#     mess2 = mess1.split(" ")
#     # print mess2
#     lower = 0
#     upper = len(mess2) - 1
#     while lower < upper:
#         temp = mess2[lower]
#         mess2[lower] = mess2[upper]
#         mess2[upper] = temp
#         lower += 1
#         upper -= 1
#     return " ".join(mess2)

def reverse_words(message):
    # First we reverse all the characters in the entire message
    reverse_characters(message, 0, len(message)-1)

    # This gives us the right word order
    # but with each word backward

    # Now we'll make the words forward again
    # by reversing each word's characters

    # We hold the index of the *start* of the current word
    # as we look for the *end* of the current word
    current_word_start_index = 0

    for i in xrange(len(message) + 1):
        # Found the end of the current word!
        if (i == len(message)) or (message[i] == ' '):
            reverse_characters(message, current_word_start_index, i - 1)
            # If we haven't exhausted the message our
            # next word's start is one character ahead
            current_word_start_index = i + 1
    return "".join(message)

def reverse_characters(message, left_index, right_index):
    # Walk towards the middle, from both sides
    while left_index < right_index:
        # Swap the left char and right char
        message[left_index], message[right_index] = \
            message[right_index], message[left_index]
        left_index += 1
        right_index -= 1


print reverse_words(['c', 'a', 'k', 'e', ' ',
                     'p', 'o', 'u', 'n', 'd', ' ',
                     's', 't', 'e', 'a', 'l'])

print reverse_words(['t', 'h', 'e', ' ', 'e', 'a', 'g', 'l', 'e', ' ',
                     'h', 'a', 's', ' ', 'l', 'a', 'n', 'd', 'e', 'd'])
