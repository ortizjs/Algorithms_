// Time: O(n*m^2), space: O(m))
function countConstruct(target, words) {
    let table = new Array(target.length + 1).fill(0);
    table[0] = 1;

    for (let i = 0; i <= target.length; i++) {
        if (table[i] !== 0) {
            for (word of words) {
                if (target.slice(i, i + word.length) === word) {
                    table[i + word.length] += table[i]
                }
            }
        }
    }
    return table[target.length]
}

console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]))
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))
console.log(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]))
console.log(countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]))
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]))