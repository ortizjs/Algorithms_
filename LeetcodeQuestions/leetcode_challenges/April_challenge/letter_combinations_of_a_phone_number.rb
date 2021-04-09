def letter_combinations(digits)
    combos = []
    return combos if !digits.length
    mapping = { 2=> "abc", 3=> "def", 4=> "ghi", 
                   5=> "jkl", 6=> "mno", 7=> "pqrs", 
                   8=> "tuv", 9=> "wxyz"}
    letter_combo_recur(0, "", combos, digits, mapping)
    combos;
end

def letter_combo_recur(idx, path, combos, digits, mapping)
    if idx == digits.length
        combos.push(path)
        return
    end
    letters = mapping[digits[idx].to_i]
    (0...letters.length).each do |i|
        char = letters[i]
        letter_combo_recur(idx + 1, path + char, combos, digits, mapping)
    end
end

p(letter_combinations("23"))
p(letter_combinations("234"))