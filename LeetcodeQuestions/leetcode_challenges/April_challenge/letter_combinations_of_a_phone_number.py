def letter_combinations(digits):
    combos = []
    if not len(digits):
        return combos
    mapping = {2: "abc", 3: "def", 4: "ghi",
               5: "jkl", 6: "mno", 7: "pqrs",
               8: "tuv", 9: "wxyz"}
    letter_combo_recur(0, "", digits, combos, mapping)
    return combos


def letter_combo_recur(idx, path, digits, combos, mapping):
    if idx == len(digits):
        combos.append(path)
        return
    letters = mapping[int(digits[idx])]
    for i in range(len(letters)):
        char = letters[i]
        letter_combo_recur(idx + 1, path + char, digits, combos, mapping)


print(letter_combinations("23"))
print(letter_combinations("234"))
