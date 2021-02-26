def validateStackSequences(pushed, popped):
    i = 0
    j = 0
    stack = []
    while j < len(popped):
        if len(stack) and popped[j] == stack[-1]:
            stack.pop()
            j += 1
        elif i < len(pushed):
            stack.append(pushed[i])
            i += 1
        else:
            return False
    return True


print(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]))
print(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2]))
