require 'set';

def permutation_palindrome(input_str)
    unpaired_chars = Set.new()

    input_str.each_char do |current_char|
        if unpaired_chars.include?(current_char)
            unpaired_chars.delete(current_char)
        else
            unpaired_chars.add(current_char)
        end
    end
    unpaired_chars.size <= 1
end 

p permutation_palindrome("civic"); ##should return true
p permutation_palindrome("ivicc"); ##should return true
p permutation_palindrome("civil"); ##should return false
p permutation_palindrome("livci"); ##should return false