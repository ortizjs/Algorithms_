def permutation_palindrome(input_str):
    unpaired_chars = set()

    for char in input_str:
        if char in unpaired_chars:
            unpaired_chars.remove(char)
        else:
            unpaired_chars.add(char)
    return len(unpaired_chars) <= 1
    
print (permutation_palindrome("civic")) ## should return true
print (permutation_palindrome("ivicc")) ## should return true
print (permutation_palindrome("civil")) ## should return false
print (permutation_palindrome("livci")) ## should return false
