function letterCombinations(digits) {
    let combos = [];
    let mapping = { 2: "abc", 3: "def", 4: "ghi", 
                   5: "jkl", 6: "mno", 7: "pqrs", 
                   8: "tuv", 9: "wxyz"};
    if (!digits.length) return combos;
    letterCombosRecur(0, [], digits, combos, mapping);
    return combos;
}

function letterCombosRecur(idx, path, digits, combos, mapping) {
    if (idx === digits.length) {
        combos.push(path.join(""));
        return;
    }
    let letters = mapping[parseInt(digits[idx])];
    for (let i = 0; i < letters.length; i++) {
        let char = letters[i];
        path.push(char);
        letterCombosRecur(idx + 1, path, digits, combos, mapping);
        // path = path.slice(0, path.length - 1);
        path.pop()
    }
}

console.log(letterCombinations("23"))
console.log(letterCombinations("234"))