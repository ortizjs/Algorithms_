def scoreOfParentheses(S):
    score = 0
    stack = []

    for char in S:
        if char == "(":
            stack.append(score)
            score = 0
        else:
            score = stack.pop() + max(score * 2, 1)
    return score


print(scoreOfParentheses("()"))
print(scoreOfParentheses("(())"))
print(scoreOfParentheses("()()"))
print(scoreOfParentheses("(()(()))"))
