// Brute force time: O(m * n^m ) and space: O(m^2)
// memoized solution: O(n * m^2) and space: O(m^2)
function canConstruct(target, words, memo = {}) {
    if (target in memo) return memo[target]
    if (target === "") return true;
    // if (target )
    for (let word of words) {
        if (target.indexOf(word) === 0) {
            let suffix = target.slice(word.length);
            if (canConstruct(suffix, words, memo) === true) {
                memo[target] = true;
                return true;
            }
        }
    }
    memo[target] = false;
    return false;
}

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))
console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]))
console.log(canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]))
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]))