# == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == ==
# Interview Problem: Balanced Parentheses
# == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == ==

# -------
# Prompt:
# -------

# You are building a linter for your company's new custom text editor to keep
# the code smells out of your(anticipated) massive codebase! Part of your
# technical design includes writing a function that checks that all of the
# parentheses in your engineers' code are balanced.

# Given a string of text, write a function that returns true if the
# parentheses are balanced, and false if they are not.

# Note: Your code should ignore all non-bracket characters in the input
# string.

# ------
# Bonus:
# ------

# Though you may want to start by writing a function that simply handles
# parentheses as an MVP, to build a truly impactful product you must handle
# ALL bracket types, including:

# - Parentheses:     ()
# - Square Brackets: []
# - Curly Brackets:  {}

# Update your original balancedParens function to handle all bracket types.

# ------------
# Constraints:
# ------------

# (1) Your function must run in linear time, O(n).
# (2) Your function must consume(at maximum) linear space, O(n).

# ---------------------------
# Example 1: Parentheses Only
# ---------------------------

# balancedParens('(')
# = > false
# balancedParens('()')
# = > true
# balancedParens(')(')
# = > false
# balancedParens(')()())')
# = > false
# balancedParens('((()()))')
# = > true

# -----------------------------
# Example 2: Parentheses + Text
# -----------------------------

# balancedParens('var x = Math.floor(2.5)')
# = > true
# balancedParens('var y = (((x + 5)/6) + 2*(x + 10))')
# = > true
# balancedParens('var z = ()(x + 5)/6) + 2*(x + 10))')
# = > false

# -----------------------
# Example 3: All Brackets
# -----------------------

# balancedParens('()[]{}')
# = > true
# balancedParens('[{()}]')
# = > true
# balancedParens('[{])({)[}')
# = > false

# ------------------------------
# Example 4: All Brackets + Text
# ------------------------------

# balancedParens('const roundDown = function(num) { return Math.floor(num) };')
# = > true
# balancedParens('{ array: [1, 2, [3, 4], 5], timesTwoMethod: (num) => num * 2; }')
# = > true
# balancedParens('function printThirdElement(array) { console.log(array[3]]] }')
# = > false

# -----------
# Let's code!
# -----------

def balanced_parens(input_str):
    parens = {'{':'}','(':')','[':']'}
    stack = []

    for char in input_str:
        if char in parens:
            stack.append(char)
        elif char in parens.values():
            if len(stack) > 0:
                curr_open = stack.pop()
                if parens[curr_open] != char:
                    return False
            else:
                return False
    if len(stack) > 0:
        return False
    return True


print(balanced_parens('('))
print(balanced_parens('()'))
print(balanced_parens(')('))
print(balanced_parens(')()())'))
print(balanced_parens('((()()))'))
print(balanced_parens('var x = Math.floor(2.5)'))
print(balanced_parens('var y = (((x + 5)/6) + 2*(x + 10))'))
print(balanced_parens('var z = ()(x + 5)/6) + 2*(x + 10))'))
print(balanced_parens('()[]{}'))
print(balanced_parens('[{()}]'))
print(balanced_parens('[{])({)[}'))
print(balanced_parens('const roundDown = function(num) { return Math.floor(num) };'))
print(balanced_parens('{ array: [1, 2, [3, 4], 5], timesTwoMethod: (num) => num * 2; }'))
print(balanced_parens('function printThirdElement(array) { console.log(array[3]]] }'))
